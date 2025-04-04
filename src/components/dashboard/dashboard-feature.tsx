/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4hZJ6DkfT6sSJtizB9Kdz1QmePtkjRgtapwrKDfqiLJinWgank65P3aXxTcC4Fy7tm3n9hQzzA3XSXkGYXZhxuSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DrFzA936jgDUrTFDEpPfBU4hBDUSD7eusbJpJLeqQggYJ1qnpit8hYKWxsqe2uZhL7qN5D1TNWjWPQg8erPpJLk",
  "key1": "3XcGAKsKgZSFsvAPtTeXfQah5Gog2uBHezhoYzqJhvpFG1syDk1WmEoMkuqHPGRQ2tHEVkpf24dbaYQFjBPHTPBY",
  "key2": "DgUrcyarZucCpCs3xUkCr3xkT2cgLNTjWzpinJJShvRQuyYKGWAciTpxB4LYCLUzybn1WnXX7CA6f2DhWWzMiRH",
  "key3": "428s61CbzXBK6i1jyhXkQP3DXfoEL4ETfK7BRuWXnXXEzrQGWzYsRp1ypx1qHZWFGouiWaLjDDXRYg8YkpKvfBVU",
  "key4": "2iQLj71rAbfnrF1aJsCcA8ADKpZu8Zi4vNoBDQt6kokm3h6PoYu7y6xgNtTCVwVJ3krGkBxTaft49aB96p4sLHYG",
  "key5": "UvRKbSMj1bY5QevCDLxfRhWPs82qCEpcPqH7qW4B6xh9Ef5x6AzvHLsBkcsDJSNbRwQJNcRgQVEk8h6AWgt7dNP",
  "key6": "3xRSbAfMopK5DuPSar7ouzw8Jfmo8E8oQV7CcSYNN5os7L6sGEibKrTjF2SMCFjH9ffszYn5CReuhqphQVF7PART",
  "key7": "5oVpq6fP4qgRsfMayBWZpjt5PNc7JznGTicw6qA6XYqavjwPFTgP6VM6VJ1ts8AtYTdY3P4wpqgGHJ3t8awgC9P",
  "key8": "3VGJGjdJqdGYkBonYztcAwmhWV3Qk6kKCDKFH3EN3crP3pFY96ct6r4sv93w9dU7eV6LiNaweJodRRCKZcGb3s7s",
  "key9": "45NXi1ivCCvvhaVm1VGLpHT9BVk1UzvEBeNuiEP2fmsy3sTmp3e5Rf9cQpG2TWn6jxw9D2LexxorrmyRke5SbNwn",
  "key10": "5jhQNiAs5YGDbaS7e1UXhgKn9sNmxjBGcHRmuyEjtcv6n8pCWm2rpqR9Co89Eh59amXwvERhpVVmNx3o1uYuev5t",
  "key11": "44d9hj3Yo4az1XUTF3s1fx3m6UrPYCaz4n4yaQLRNQhFbZNDh1gfzJxtCAmoKyuMN1fETHsPtM4oSb9yP83kytQE",
  "key12": "3PWkXoiR8LPPHBBNAbbfusZxM6pwq1LQJPWDL1HdY4QLh5VuwcA9MPNxT6fgWyNdHvKTAfTuejMp4eTPdu6UqAn2",
  "key13": "545BMf5gQ4bFrGY1oghUFQquRw3oyUoeVNqGF3CvMbzbSD77Wm9JzztkbmUAX9BXUvFKY9o2r2acXJiNw1JTAWB3",
  "key14": "JRDQFsaDvYCTbiDmEw5vbvjwJXk9aD2dfTgBwJctzJiqV7CFhqiDX62bQvvz1GMPMMSWD8zi4QsM8ZwWx7bE52c",
  "key15": "32kPF7b859wy8r7iXKj3nCT8zJqy43f4LMWgoH4SkgsZf3ncPATe3wKTXbqVCWEywxV7HqNbUeYT1RtULqLdkvXU",
  "key16": "5XmTZztfY734PFTfuRUQBS45XLaaDbu6yfheZfqYpvHeBRQEVtx5k9L6FWzHu5LcN6XAJctJV38WUdPrASpvEeka",
  "key17": "b3hhKYsxSE8rjBQjUsoTwgftX69tToCociuWX9fuEenLdbxLYbn5GerydLaYv1JeKM9T7FBER3wp6QLDHd8YFFq",
  "key18": "jVB6Kbx5QTCgiWpxkuWVAyCdKkW5Wz5rFqYwgetx8egbeuMiCc1LcZeCM8zRJH3Qaon7RUXnZ3VkrkEua9NuErm",
  "key19": "5FeVLou5XS2Wzj1mwsVAMvLGKpTq7n5Q9H15MeknBagfwUxhyerp5aRdrkH4JzTRYewpVrtbHrMjAjAJzXcjgUmd",
  "key20": "yeuBjmxoQ6yvFchrFqXHHEuYFV8To5VV2Bqpg9Nb1AGXcq4hQhA1ZHnYKGPTNzSNYzfne9FHoFSFPKA6TdhmeEU",
  "key21": "5cFUs2c9JxC43txnn2ezjx3Z39FXqsE7oJV34UFPRNnZU63q2gfhr3NbS2nR35JUp1yXQFgp3gE2hQEwKQADhJKd",
  "key22": "Yh6W4NEaZFNhT7bzRsLHSJ9ztn7yZUdYLeyFtmv6S8x2nUeVwYAEiQH3j4jBL8r5TnEjUnJh1q29zhg6hHiJhLZ",
  "key23": "4SD8mgQfxSEPfC2soYGqcFxDGaRVFbRePV7A1XqFKfH1qmURcaKTetMqGQKuJqPNd9WGJ6b8cnCzyMzZmufGwuE5",
  "key24": "86j1tF3Q84t5waKrwm5epGijnga1eFgMrNcjRFHyTsGDozDmvUAzMTCGbd14JTLHJM4h6jz9pfxa4ZpfWpPw8G7",
  "key25": "26Q8PuhXHMpzHeMWYegd1ntmC4G6DxuJYTik4jFpBTrwg2HLVyJ9uVQexzR6Rch74GeYN3sHpFNSXyPtdASfgSLs",
  "key26": "4T37YynYuoLFvehcR4U4pLFFXpy4MFfmUwNP9pV5T2aQHPcr5AHX1CFpCqhDdkcjcmYE6XvQGBLTCpvVf3tKVeuv",
  "key27": "d6FYhidsHT6egPUMSNu3XhkHHSGxKpjv4S79YtzbkeTEtMrtp2196ZWAX4SvdrvVmGCQ1vtAo8rPodxttLj47N8",
  "key28": "dy2jLsinviN2yUUNphkcaMYZZhBX5W4YAf8DwRuHebar9GyFn6Fpiy64xex1QpTuQjh8u2VZYUFLaXf38yM4pCx",
  "key29": "4FvgoyzUjaN5VqFK5i38koqxGEDLjZqnxmShhYDbGTMMwVooCxmMHS4PhNMNmVhjwpvhhEMCSQw1yP7RzdKKZKFz",
  "key30": "6LGK4kRVeLfRfpsaKhfG9vr7iAM12rapVTCp1gBDkTSZNPMqLFkicwvoCD5yHFwse8nEX1tXC9N1FfboxVDyrd3",
  "key31": "ZDNLrBigkt8E3nNq2ZH1X57cffub1nhNWUwHhPCa6vA2az9T3Xv9roVgWPUKqzKgNWqCDTPapGNEKeFQ86zjmp4",
  "key32": "2nnW6d34MfPoL4mMbwbtGPd1BqHZ7em6dZUsNPxJVLY2ZJNAQmsUf6M7v2LXqrbbUNFo2xC875mdr15nhFxutAsp",
  "key33": "4nRH3VGFgS1PU1jjzhPs8yT2XUA7o9Eg7obATcUELNMgrnJVqNw5wZC1m7jjVUPC82ybqWJqcqLgRoK9TYYJdh5R",
  "key34": "3aWthVGwoVfneQXVSzAAxsFkqTHdR9yACEVk39LoYSJ3LjEWcgUcLZfi8jWw4Jy6TTBokHRRmydiK6TqckeYMsPb",
  "key35": "3qYTWyxGgni61p9J5ZYUa9jhDtB1KyQ9Am2y4ZmUokkzfdtz8NvcNWNT9PVpCbmP47trh6UTHcN9vgzCpstK7bwM",
  "key36": "4J8bEsBknyodLkqVSMAnniCdJCHQY7QbRAx9YMpuYVEbGREU5qPQFVka2EztrMdHnjSLFeWS7KpaziumKZPHMbav",
  "key37": "AqgGgLZXxGadhgdB1ufTeMEmUxxmtCCFUQPoFLyu5ENwsKm6rjYZCD1dJ2gA2ycMZT63ymqrcgXQvrMH64JLYnp",
  "key38": "4BXDYSZue9BVPP4uPfMAEwTGRj7K3gTpiPid3bJpV7LpLbF8ZF83T8r97JEcD31qh9R7US2qShv4jnFch6XMTFZn",
  "key39": "2xkmC8d9TSisaShJ1FpNeWaLbecPMJ1Ghhe9nnE3e6Z4U4ysUoWm2P7GsisJNp2CbupLEAMuJXADhxN2aHwVpPmk",
  "key40": "2LKAqKwdq5zhw6hgxmsGcWqNSnda1W5YFF9M7Kidi8kR4cBYed939PVwjKvkDP69dvVtQ6fBdBJMrMGvHsveLsF2",
  "key41": "59g6f2jeUMiLoo5xidX2uwvvWBiLyEQtUNEddYeBv1mQYVizuWJ5CwoTb6cs4s5JqUm4b4LoBjnWrKGwXcxrvBFy",
  "key42": "3KDvrDrFbe46BayWi1ETG73dK473RotEPt18jrWAsmdJ332hLgFYAxEop2myXLqApe9XcKe2tnovpJJ4RFgyB19E",
  "key43": "2G59jsVucJr9DwqNmSVmynAUcYymqqnhiQPJgLoefdn6oaD7iZM9MpPoi6Y1fRZWAxaSUAvz5h6CgJgWAh6o3TPF",
  "key44": "2vjnCqr4QTZ3gpDeLvKW2fAFjeQoSGkUNcz1PC9CikZWBBktroeGfXoqENZ85qZyWQj72Y8ZoyASPLVpPuS1eRDQ",
  "key45": "4Eu73LuUCWbtGfFBS1Egn4KfcuBf9ptQqJKBbs3HsFE57bjtYcWoLTzSQXx6k4vik9QniBWqUFCWpaJSuYBM9C4R",
  "key46": "2UC82WvYQhJdaMAp6HffLy8RDuTtB7ievZvbmCDWcTx4jzk68iqekXzcyhMTNh3S5QJBanccoyDjwHSoajcA78rR",
  "key47": "zH55fKjSHmjSXLymJwkrrB8APNHh8oPASLdRchNiiUHRpwE9h5d8sJSvQd5siWhRJwoeGk2pfpn9mdujvSqpHRv",
  "key48": "3E5pWxnAsZNEBagH1UW24kNDukw3uvsmSZAgGuSJjD5gAU6MnwrfvexWimyVBB2oWTpTkKroWoEf6KP639hAqZgr"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
