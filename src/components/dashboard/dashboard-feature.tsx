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
    "5dFvMqFZhPsaigW1z2G4C37GJ4gVVdRUXuMnuQfCGHb9rsjkKaofS2gY4p5qQ9EQDnL8twWU9nfs799XqqJUzK6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZRMkc2NetQHYEjQtnCQogKqHSdjk5FPdTvwhrq4gqM74pQeRtXjUbWGqQfjQPKUtzuw7hUz3xAdcGdh8YF7M6Pj",
  "key1": "48zAUWBTy1dwwBMLyZPXQkSnpL7rkpoT5fyrbt2UnR6arqU8QfARrywPtkzq5ZLgxYj8xAWcqSfSqxQrYZJWFCQD",
  "key2": "5gdUWUmuSD4PpwsmHZoBH57Qiv3DFWrzJkJNNr9dyyqLU2uwE1J3stDPGSMbuwK6M9dqw8PCNkKazZkmDVFBuwYt",
  "key3": "26yUSvwaeZ89W3vbccVHp6T2DBHRXxmHrKDRBrweXQKJ2mqyZ4DkLzsZ4Umz2mHwtRLiTeVfhxBwGYounuzRu5xf",
  "key4": "5g5DVnn5uP8GrBbRdpQHxG9PCThvXz9mAJYb8H8trFNm3yrTtmkkmZ1Nxzy2SPf8RcVLuGjCyCrhvhY3kgiLcz4V",
  "key5": "5Nu8DBCtAxZZmd6eNLgZrVWBA2NiQyH5TjwJgTsPnmaWKJ5Q7Be2QaFCVhReYu3NBEXo7yvRjhFeWguQyK3HRrmt",
  "key6": "3Wee9vHW6kHLwG1nHaMv1HRrFP9eeyQTuBRf4nYyVJRtZr5x62PdG6PMGjrzr832eQEi8xzuiMgPswbGm3K1Jb6R",
  "key7": "2yZAHetWjVqZTRhJz8XtV3moUtCHU1vZeNY4eYLktc4sWo7SdWzfQuPTRx682jCUyob2DsP2jWJqB8MBjt16Wh78",
  "key8": "2rEKYhLnqeRrFDkNu1iKX8PUJE1oin5yEXFuB2wDxXbqGL3RixqBao6PTTqqCMJwyoaDjdD28Z1Auw2FC8BwpYPe",
  "key9": "2THxc4eMzdih3ddh36rZLMkurQY8cUCzuhGqxmqJVm5RGfWMLzGcG7mc6fcwEURpivTmaRyhajYdogPo93GcSGqK",
  "key10": "xUfeRtBBrzpovUN3WyZ9h3WgWjiBc6PjCBG8YxvSNgesXiSUE5rH42xHyUFpdj2kqeREKjk7ovR8axBMGKMTDdk",
  "key11": "38uQGgnAd2ptCFhKUiB4viwe3zMxyiHwv6gkacAzY9fyjLyiwWDx2xrkStxFjVPVcrUkB98vnHAZKo8EHpohR3jT",
  "key12": "5xdZmL4AQVe9XQWhxhhDyCJsGuarkbzgagRTUmnjGUTSeYYRmM8qSmjrYzectCfniXdgHoNxai1dwgdh8D8phZPT",
  "key13": "VcrUVrUyXUNVM7xnV7AAemMxCfSniRCkv1U2Rpeozto7oESGeNWmTdBxADgSt8bPo411eNJFhi4vrUBr1cp2wyk",
  "key14": "38sLKa3xQgBkBZ4F23buJayH3MXr75nqKWPzNtB9DZSqDue2oxgEiUvgBwM9pYVLp6Z4QFu3jbF3UdJKTdGWev9q",
  "key15": "3DiNu5eLHE1rnBbh1snsmK6KnedFrWhmFwVvgVTcYa26PcyXqWg1aw3Yg3xCJKVLmTL68fdgxQiSEAhQUKp2gmKC",
  "key16": "3wYt14EpfFRreFEPUFiT9eVfmbpztGnBGiEEWDKjzAGNXuH2QQNvq5CpbGXNxnKgLWKAGw7Y8fFcnbh5UPYtMPDR",
  "key17": "EzguvvD8fyEEnVYtCij6MUysGLd6uUqimKAwDRZKAJiNAwgyT6RmYY5dpt4XDe5iGAFudSbzkyfLEP9crec324t",
  "key18": "57NHdCRmgSJC7FA4L8uZnG64VnitHKvp22vZxk5Juzxo1PYFF1d9ssSoLeUw827z5psghAtdiWSuzA2v5SYBzzog",
  "key19": "2ZPVXtb5dRXQ1fD7uDqfT3h9WFHM7rM9Gu3q1BwwVUDwhXADNDLdAmxKhhuqvDezqLmrfu143Sp8eU9v2xctKqpm",
  "key20": "2GgK7fXQfdTKMy6TWnahzjLyV8DFV2n6qBuy5G8Bgo6eyALo9iQKW19eimY8Q3HrdEcNjKMK1sJKDLy5x6bCZNpA",
  "key21": "gGDVm7yebXNhaHXqoFNMZFsMJLd9r9uWHWmnNWZmvhrC9vVxX1mJNi27Q78vvx7fW9dwtKXHD1XZvoK5epV9oje",
  "key22": "4LRHGZrZLqrT8FLXufEZB3DkMeivvxRYPqMMj26R6rfYwHVG4RjD3BwEkkPVyzffZrYjoy5TzefKaicfzs46Ys4p",
  "key23": "47vxtsCP24nsSn594s2GpoTBLH7SYzKkzdAavGPo3mHK5dgefgXpk4ifkuGck7vh1HJHmMv2k31e8x4NSmMKLGVb",
  "key24": "2oHbHzRgWhCjpfyPVZYFHfQyo28eyVs9kXWQT9A4gYwfchoi1QyMRJ51kE85zoNptQSp83PpFpBSeYakiiU7ETJu",
  "key25": "5JmqpdqquKKpdw1PaipwKUX64ZsdgcmMYAm6tahWtW7TQgb2AAnfj7M2ak7HHPM4ZZUdyE3eu98ZbvBc3caT27D",
  "key26": "3MC6FLVyeEoCrmpf4rjxhgusm1SCUCJBiG2Zry6GNqMRDAQdmjLHNRreHMDdrTVSFM6keKV7XPhsYs28bYJ6HWmd",
  "key27": "2RX9Kcpbqvs983khnyTCmRvHGKW9ak4kZDzhsc6C3FKJEFFwJZV6mXh7LEkmNDY8i8WugjjSpr1r27drsYpxsShv",
  "key28": "4hi5jDJwHj5KqhLTQAyx3ez8MmxHJpq3egW7SoXgPLaY8E5Xba4Fqr6cXWVZQvunJ9Fa8pVkQMz8hJJv8uL3jo4C",
  "key29": "43yVZtaMyoNYm8C3TLWkqFhX2gqzHHAPDwpswpG6yD5yYboWpxV68D56cQMKbd3gtzTSao2NVKdpenx9EHrcUUcG",
  "key30": "5tSXVprSo7kwXqX6YbymaSKSPPcUheZNmaTqkmkdrAoh9zM6FjnWP9PBmh6Yk68C9LHVid129NKmGpex2DqhnDqK",
  "key31": "3ZjzPgY1vd4ZC8Ac5ezqAEs4LMZwYgutXt1hB2wogwnsdNmau5tgtoc8YUob9UhV32gT21eT24p7eypfdmdWDwDQ",
  "key32": "5SEoBFpjVHsbKApatU2jmuuiSzFQF27N9iyFYptZGz5uVsEA2ozpryvtVBMbPSxFRUxDb6gpbZWVkeVQJc5pU7eK",
  "key33": "39XsGHVwHifXn5qRLN4PMSzb4LD8hGCAkiQ7kEGv27tohV9kRyEKrBhaN1tD7sN5C5Tz4H966ZtgDc3dvfswKCWW",
  "key34": "4MSNjUMKL9AHG9rwsPePwzVk4hc9fk7ch2sR3MwPN9nbFVF4dHmQwKVDgzYqu5sT1AMpVW6yTAkATfg1C9DeAvZZ",
  "key35": "5WATArF2MNyCT2fhgTP5DhXxpumShypuygcwnYSzkKTU1X1manfgAahjY9HaokCeucWZavE73U7yBDXZPph21W5C",
  "key36": "2KawLg73RYdYP66JwMwqHg3e5ic4YNkPkUGiRnjuKYv32GzFgjidjmmAAVzPfcQKSA7Qi1muDMjGCoJAbntciiUR",
  "key37": "2RaqX5L1RVrgyw1RLpuLkbjezWEbQimXZmmXsioNRXvsWrLEvtyW7fmJ5FZzt1BJkUXNapLW2fa7Zx7WCw1L5HXL",
  "key38": "33dWKGZ58Q4VMJDpWUo67shLS4G4f9xbUqfNQFQTtGiHdHWFnGEU8EtMyZydk9HzjNaA85kRkJoCd8Ny4yEaqKMK",
  "key39": "5W3PYJKpdz3R78F4tLK59k7MAgNTqQQ8QDGDRoSYUZquPak8B1GgNZm6MAdnrsu8fbHnDjTvrVcTk6ap4hPYsaEg",
  "key40": "pwXDJEMTnCExzcvHN4WkcgX3XQXtoi9886yTBVqm2Khyf75zSycbrSxbAuVRmTukK7Fhk5vqFH5qEX87oeMJnUD",
  "key41": "4wP8i1Hhc51N7iBDCMd5An218zAi69uphC9ERtg2hQsLPfVHHpKjGdGhQwYtYevq8ohXzvX5BMEZTtKTXKyBEd15",
  "key42": "G3Z3TKTMkDbmDP5EshCPAiJTJ2B9tnqZCTjETcaemYbkKD8YUmkVRLJtKWBE1rj7GVZ6c2XW3b7XgMQzVxx4Gp9",
  "key43": "5dGChSZMvEvqTCp8Jtsrz41oD1vdWnvWZM3UbhhxnQdVHGEv3jYmQktoED5FFBikqisFK97N7s8bdYmzD8fpSG6o"
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
