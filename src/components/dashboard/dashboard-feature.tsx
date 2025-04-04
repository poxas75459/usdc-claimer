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
    "5bheK2F2azWAq4eH25sVrLMerwzajCiSgdrd1XQmV5qAGcyyrAgsp1R7Rz2SKeVM1qjCEqAP6jSejWvgBHH9mqX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n19bEF5Du9cSgyzPvjSf2mnujF9EmctycMkt11AJT3Fqw7zZyixdi9uwawtufYreVqYi7vfNQzAjBHs47fPQzN9",
  "key1": "2vcD7Nz6rbwxcK2LFHKMSum7smUc8fKFSjT4icHYu2eUNiHbk7FsKLAdx7oAzdWggikqmmhR9WyeFpgr3H7gfHJ8",
  "key2": "2e87Hk3JYUnbGipwv3GFnZz5kuooK65WBYcZzf7bUvQ7qjVJbnb51oUBDcsr25wYsN6oKFcL9DaUUM5pBKyGjuVN",
  "key3": "RZ9XU9ir1WipLykf9XagAvBX5Loqx7so5kLSMK2UCxrKy2YTSxXq96UtwtptDc4FNqkgx7kKp8GG9oCQBY72gog",
  "key4": "mnKVWA4dYAnGheQcfs2Z2CgCXMwjQXt8XMwHk2oj87bbRiNEbxRxS4VjtoKL8chicBaDSPwPURPXUoSo8oeXQci",
  "key5": "4a7xk2bUhoihZNxsztMbQrwoC3TU7zmkzFrYwvu3Ef9nW9Q5Tdj78aSvVyZ6GLmpcMnTLkHJfD772ThfmAD64TjP",
  "key6": "5DPEHYiadcqc4qNAcUsCgX5qX1S3bKBxkEqTVvCVrrdEV9Qc66bnaTPuxayUGAiQHmQVjju5pAHvdKeKsqb11HRB",
  "key7": "5vw12ZKxJoepDiYr3nfWaReTvgtaoJyQNosWQ5QjDma9NjgvMGAUeZgCWK5oks7QvVRTXiwQieFXrznUKAi9kADh",
  "key8": "TVTKsE8gJLDVx7kbai9519iSCWU9xhSxx9xRhg6sHHYwFQYjZhnuBTHAVe5FBTaDJfwXhrSEUdyzkjWS6oU7ipb",
  "key9": "55qNGVjHruCztbPKvFBNcNRdccskezAywcbWvGxXAdeEZ4ekE5gakoUyqSk4MgWWB34nibc3sbPKAcziFeadbqTB",
  "key10": "2UoK1qF4RDSRctyYc8XKyVM7BiDU7XcjXZmJnfEg3EKsh9bZy4mzSkZn14RzN6E2V26i9b5qd6ncKEcusc7wadRG",
  "key11": "2QcTmZX7qCEchobTEcS6P1uQtgjSZBnKr3TrcUN88sDgTTFWX7tMxh4NvJj1snj3vp1aJHvHiF9jXG4qko2PQHxv",
  "key12": "1iUXBoJXDXsY3Fmt7yEQoYj9X8PaRJuF2Nvf2wsDNcv1HnJuQ7i3nbuLWPV5jxmJtr5H2XTqq6Gw3EoC73EwcwQ",
  "key13": "3RdNsXLowrEypmfKQsReut2ubnkokP5qsgWwvJW3Ytdf84RhfM2YXLDJKvq7Mfj911nj6BzcRWE5WAcKwd94ywbe",
  "key14": "3KEtSKfqYYRUZmznqNw4mNzutctuEF8VbZXqDGtgNFvtzRuXoJ2782NouH1UgHkZKAskyPyK4M5ynU6My5H3ncH6",
  "key15": "4F8rdSbYinpUHV5eXfaQdwn4pwWC8pW9qZ3BsKDRgH4CUDDALHsvCP6pQY6TQMt9XaWyFwmAJc8xGPm9YK9jZ4vJ",
  "key16": "399MVmkFDMg4Z1baVBrEdrg8QYiWmhjm2Hmxyga6aT15JNmzWTBDmQ4TprdJmVQdwbgerKTyHtSCx11AW2ZAAfQg",
  "key17": "QWanZZbHXLo83mn94YwzNyb9Ju83S7KFc7yFSW49egnJAPtAorFro3pZze8wE69cgaJYcXkY8yJgk52GfYSWMkS",
  "key18": "4VKyJfTUY5sdV7sPRwygGxYuSzYR4W6pGf5G5DDHxjjDtX18kdSqPSHS36MRg6yryWKPM6vya9jDYzugNM5L8Mqm",
  "key19": "arG7fyiAGJvacz85b8awJHvScfk2BSbD4Q3yRDs5hpnTMmVqpDsx1s8ukbfbvt2KHFdMVHboZ1wEabEmAryzMN5",
  "key20": "qunWxxEsSvnmMbhsvShXTzzHFwPkLxRaF5rYjp3XPSnP6ZXNqzmLaCa1mETzDQwkyxbKS6AB8N1wbUwpqiJTp6Y",
  "key21": "5CkqGxTkwZnqea1t97HjKWUVdvnYbaViC1khpfc6a164Ju82iZs5SvrgYPRSMbRSHmitzMWjesRdgZgoAxxpKyRJ",
  "key22": "4MJ5gAEHvTNEzRTcymrHoBNk4jLjGAXKHcTKoH6uBLBkJyyLw5DduG22CRZavqnNbK4juxAy2HcjjDPnVWsgoAsk",
  "key23": "d8YVeUH4tPhXtUeRFKbEvgJSnSgSseVcTA4us3RvEBCoL2ETAueNC1vww2RdBPGgjNJVFUpZPGN3xPd5p3MeCmn",
  "key24": "4282gY22QZMMhioukRwdB94xvxGtGDmAhfEzNkY8bbvr2z8HM3dLcjWkFscuV3ndNdo1n3kKsxbRJDG7h9sch3Eg",
  "key25": "3fFXErtuWocVSnwUtVxo17em4CMxPxdbCH11QRAKiMbFVeXZDU3Vetw5o1K4NjkkAm3a2xTTBgALZPjgxXtBsnTT",
  "key26": "CrwiRvJ1JScg6Pa6YGKKK6rZSxzY7qdh4FAouZBtgVd6okCnWbXD4qBNow9WJ7zzB9HzdiC7UEhLQcedRCrCRwb",
  "key27": "2Mstnk7gprqHBeWUMddevupMio74FNmqdqYtpCYpaMRQQK4k1b5oH3FZqhQWYjrCGS1hhwFp696xqqVuPykncqjK",
  "key28": "4CxT7eh5TkwBBeGb2qn4YuN6H2H1ei8hS7SYvgcJfabj45Dpi6q7MaVCuk1YYkD5PAe9dUjn5dQomcUFtmNNZNp1",
  "key29": "2k4saJzRa2DFgFycvkcNLAdQi8ysvvy7k22DEvH6Gjqy9KJpQBG4wdskaPRiFhWM8x3iquc67VWzWvrGVuNDwfoz",
  "key30": "4FFGXx9ZPCYkzv2YGqyU2k6FRzqeXXaM29nMseq2S3B7z3Gjph6ZydfA5wZqjXhEGNCsQb2hzhKscjYCdmMdDFzy",
  "key31": "23zaEqjF57js1zjqZoJZc8BoGSS8nPGErrhFFbipMC9NQhguXVQwwW2pv2TCjAFQ7HcVhY6Rz4nwJho5gA7ei4Kv",
  "key32": "4oZcwgNRVwAeV5gNBGsgxXvKyyaMYdy5fwbKgNok317MNkB2SfB3LMcjR6jLZPGnmcuvDvXcNZaFMvdh5z8BwpF9",
  "key33": "4d2AL3XByTyG5RuKPi1SP2t5aE1uZ5JD9idheZBhWxJySMi9JM6nPDmu5ST8wNuS49KJLRaaWyGKpjXPRNSphJht",
  "key34": "2sdiQC9prFKHPG2FJ9xNqoskhmTDqRPTHmj6pmvjo7yjiZSom1KERfGLpyKyzvJ8Ze68iTsbcZKCpkjGoDvYaCNU",
  "key35": "25UyKabVkkNKwF3572QZE3hPojwau6ctFRSahqrhPw3VzKxtXd1SDW13SgCwwK3htRZgWyZ5sMv4A4abHZVpdvXp",
  "key36": "3dKVFBABxfeYrmVCfWKwwNwcJCy4nh5AwW3SP4RodSxpeLAz1NEsKe8wudDf6YUtnTZ85ktzbm5L8fNCsKGd6x22",
  "key37": "4SvWcwGDwZMz9E1zZT2wasRxSgPdynv9o3PGUymse2qQiUCQHi3duwZrb3CAsdxvQvMWCNWxU4YhwgiHnps3v9TZ",
  "key38": "3EY78RtbnkZ6znB6NyHQm23x3ruiy1AysyVvt3kfyQ4MYt9iLXoTjKDKBLFPSRJTP51HLEDcYxvCYZyrDszV5ohF",
  "key39": "4Hmi33QPFQzmqGBQVcwYzBEC1R4AvYaHRmAdvpuyvBNG8texuqidUEb5Mo23qAHgyys4mmbKSFsfbSN8PK7azDRx",
  "key40": "37jFTEUkK4cp528ENE8Gs5XCroHGkofZdZBiZnSsCDSgwWnrKo6CUEDBB6ek6J2UKRrFjAV4tbNL19V3XZHR7kjH",
  "key41": "3TiVPz99DmwwF9asAUfwDWwyk5h9Bk1LyMA3r9LhyoTdwTUSDdqKKC5ZSrRHAqrVKGzXS38HP3FgFaKbF3vt4Yu5",
  "key42": "2N6JgRE76KvDYeCuQV2pDUR3tn3PmASuP2EgTeheXP5B7odYVDwUFPzVVCstuCj5iC6urV5vs1nAC5EMKm2fbxcv",
  "key43": "2CD8Z2qdki2p8YtzDWAZCUP9m5ATaBbGWYbDXsQPtKkTiktQq9StT4o8mxDHzcjwoKqq1StknMtF5TzTbcPCEb2g",
  "key44": "5Bp3T6iNZwrb4UeNYvPJZGqHHXLwktAdJkxeobfAQJdoJegBGn3YkRFS3KRSjfHCfjVyRDN5StaWPySiShGtCWcW",
  "key45": "2jaViQuZe24AMHirhtNKKVHpAhyNTMx9vBTh3bZPGxa9m7NUj5aTNL3VRpKFc4iUxVEF14EhRVZnv5HjmPuTaAME",
  "key46": "46rG51utceqhrHPyZE6QV3zDmzHLVrMbckM8WpHusMuUHAtgyrsQVyjUZEj9196aJMetsXkWvgoT7WogY34urgH1",
  "key47": "4Lqhj29rDHxqhGxoX2JnQGMVcLH7YfdYwMh84jvZGAiQCdWE3e18amkZ42uDN52476gy3uFJANe7Xp7AdduoVHfk"
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
