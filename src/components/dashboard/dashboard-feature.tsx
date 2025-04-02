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
    "3M8usMQsAmkYDzFsUVMVwAkfwP5gVK63B8GCuioXrFfhohCuRncesZZ9Kvi3zmuumpPyUUssWvLoQ14swCqE3wPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zfCmFZUHKGU5nTi9NLv78s5gkAd3p3w4Rj9qJcQA96pSiqC5AQqa4yTw8YR5YESo1fUFxA386JDYdGiaufxx3qg",
  "key1": "3DY3iq3bBDhKiUiEkpmofrTQZiyMYwFGqkRFZqKvhGVZeVMN8vdGgJyJ4SGMVxTyHN4h5L5HPn9tMaZafTHnyqRU",
  "key2": "637AniM8ivMdTVvT9pp826BJ63iuwZKW6sTZ6pFKJp5zs5hW8GydeDZZb4NmFvX64ndbQiQnVh3sWhtXMZpVCMM2",
  "key3": "2otQBZiyQcC7dDthqNVmtVcqX1zCprMxKhFL6QV21XR515jbHfKs1mrQ8fmq4TyujyGkoBT2fJMWDsU1gL262w6n",
  "key4": "5MbrmN7nHfc5vCWen5oPXXpRi9hu5iAj4h2xFa3Tow2RXS7JddDLafni3XPfYtxfDf9qSrneUeJK95xWkt88fXpd",
  "key5": "4QqxB6EtD2b3oHNcYKRRYwt5M9w5w5PJAB8FkSGkPNESnjzcj4gFLEDpzLy9ycE7tVtB8mZzoWRXoPPiHnLyfFFV",
  "key6": "5juGtCgGLexM1RcZmkSCw3NUdScA6zNjdTEtGNVN5txL4LdTCzAXyzHob8EbdcojrzCYbXkL1RCyEPyc43oErXR7",
  "key7": "5fYf1BXiAAtgPuVNsUU1AUX4NNc7fR4VTZUxAwaXkhDf2SsDE2kxZ9rLswjEy2AkBYVVRMyjgeGWF1naNEbBLth9",
  "key8": "MSbvMSZ3cX4NKGBvJYF7nemRuhJrFzk7VE2c4MKg4VkRe7SemYy8gDUqsvd91vov17gCSHfZrGmmBNePwEwEKFb",
  "key9": "ddi9jdUupTK4RokR9h3oLgVK4tXSctFejsVRS7QTdiGCVR943PwupZve2o1h2dp9rQZjarQRBMkQUZg6PbUY3tf",
  "key10": "3tSzb42VkUiQ2tHcu95whGEXc5AsDqU3RcuoLgjXg65YkNVVbC2zorD9YTRikYe1wJSQEUuh6cmCqLKmRWLDfFHJ",
  "key11": "3B97M3Dy8eDinyr6oT4cKg1YpghyMU87LrMDK7gF2DAqDJ46gmFNHhDBCBDxLnkxtc9h4vBSHBctdTdtYzDLYvmK",
  "key12": "45vQwDZcwRfRj5TFFfnTRM4Aqub9wzGyjxtm85MtqguhSJJ2cnGnAQtPQUtQFnEw8BEhoYTHKQoRzhRvGjejazGB",
  "key13": "4Fo6NKCAy7R9uVgKD4e3fMT5MWoNf2sZGYajYQrHugy2hrkvfkkPGFK5N1W3X8sFs61VhmV5FbS2jbsFd8CBCZkK",
  "key14": "2dhNLB9F9zvyYjuDaqFvmxDPBzBMh9XVsNKUMiifhZLzH5jBPe9pUQCo3C5q6pFE5EYLdGANdP87fUjm84ytB6jW",
  "key15": "PDMMviSRjckYKm5DUjbbetopiiVMkM9xb1Hu25Jy9ZA49JYabMNwV57dUhJwKTt5tRq3VPAasdnaVnh8C3UtE6o",
  "key16": "BA7jogg1VN6VeXJnjUiYpuE9YAd6PwSDzXHyu6QCFAkSEP2wrXGu5DEWN5kFxKW3xFJkZbq2fyHGAwVNC9wEBHn",
  "key17": "3pjcECQWFdYV6bCE7D7mEaA5wqt1gdTkBVXq1wFTKByS2Bf2TQo4BAgZ9Y7ygqPfyJEyYn9KC66Qd79fTKkuEwxL",
  "key18": "3XUBANsGUHamqp9WWUPpueSxsMNUtfY5PwaFU17cc7AfPs6gph691686hJJVssQA7CZfMGwwjgWdWHdpiNLdWQis",
  "key19": "4LAo7QFfhQ8mLWweW2UhLgDpTFwM2jkc5Jpu8U1ACzHuLRsKrJHdv9JJkWkuoET6dWpEoTcDgW5hE6i3hR8Xi4nJ",
  "key20": "Zc5aaqmim4bq8f8hnxyjtjZP24QC2JR6RPP61Lo9TDTtgzCYKwCHdHp6MjCZdrsVWQ9woX1zynUPFzYfWK9Km8t",
  "key21": "4iTUnD43FbwHuS4zjN9hpwBENuYcHSoDM6zLcHDYGB7BgfPpTpnwf5H9sn1Dnpx5neqPXepZCPAndQcg9uBvMdAs",
  "key22": "2U36vkknyYQwUWSzuWdfRwp5FX5P6sAc7aUNbF4NDXzaHe98R3DPXh3HkBF6KMFpGjMwUeks9vMeZkWaDtHJVzjA",
  "key23": "3qb8mLaBS5c6ADpyaX7LJyffHV6SYn5WaZemHX4G7DnBt165Y7s5Q3J7oGGkWJvcMZr3G31YMizVxo9s4YTaYYCM",
  "key24": "4ji8dCwSyTdr95EpGC6EVfFAz1oM3dz6iDP17TJJXCarWUZj7Nx7rjPAkaajk3THrzfsx1Dw3ZFMHZ1jegAyzYhf",
  "key25": "o2Hex5a5zvKtuBXiAZjqC23EPss3egvZzLeWDoD2t3519UuGaDEfd8VNBNiFkBK6fQRFU1ZzPKYCuizh2uYBz1q",
  "key26": "3huiE6C4ouRnYVBYnmr5ge8rs8WNK82XzGCMAeGpBWQYxJVSjTKiSnnxdsEThXgrkCD44yjAo2cN9hPDXX26iz8w",
  "key27": "4jdeRGnm9DnTCpz2osjxYXEfk7GhyxhzGB2HmhA4Jw8iBFvKs1G4iueBvoK5aKG8wGYkmFYnS5bfVFio81Ev4PZQ",
  "key28": "4ymmWejWiKgPJwfzXG4AVqWnut4LXV449zvJ2N2NvZVJRH9g96GKx2Z9ZLQKY67XLCmSsfmyRqw8xrYN2cXrDDAS",
  "key29": "88S1PGd7Pu9xmBi1CWbqnfV6nGpmzSkjbyQKWQsGf5xBBLWKXo1FdKJhE3ZGdHMLCQF7v5A14Dc4yTQNdekAbG2",
  "key30": "c3moHMwdKj6Nu9Rbocz2YrHpLQWkocqr6B85XN2eAasu9Y1EZyNF9H61XHMmvSNUL6dEFgvv3eRvMCgwghGWcEm",
  "key31": "5C7nouX4kaJuaPJipjbS4XfW7M44rQiBbS7fpJsEN5BV51NcxZPshYukNn2hJjbxwJQcfRLt33qBdYvE9PRkHNG5",
  "key32": "3Tatyu1WyCTSkGBPABLsCu85CTP6crSm2ennDYBcGjP1u2Pk6C7ytP5K6UgVCMiMxX4S64qpT1sjHPvg32aavkJw",
  "key33": "5tJ2YCvCM36s6Q3czhLAKvL3d7p6H7hqcYqhh82kcTwaGMcQ61EiHvDh7YSDvbC9voyeQdPjArR2yYebg61ZSC4b",
  "key34": "2T87ogStXe1hQhfpdGAWyyHFEHdbQGECZxxf5zREE5tmwWJFhrXVWoe3tbqUXpfFZFsVi3479UCVkfvVLZeshSn",
  "key35": "5JLx6WUy8naihLyFmyHGzM4hFrjVomVWTGPYVQ8ZmbVga2gYgj9CdENpyk1u5eGDTf4bvQAv2nUmK7Lu3FwfwQRt",
  "key36": "5KPXEMYcSFdTaCZy1vXjJhhci41tUgZmJFZPwHJgxGJFB7fGjBUxKYgyVY62NEpi2qfkSfS3xfGUZj1fMqzWrmvb",
  "key37": "2iqXt9EPf1y2iqsZE1cRyF8ogHd97qFtUuz95N7Kh3miPqYf9gJ1kpF2wvQk2kEZ3V38B7ybskWYDLGMm4mbRZw5",
  "key38": "2XX2NN2RXQLsnNxHGR952nBJs3T26CGo9FfCmSsoubiaU7CKBRnxvxdKXJTVVfJGLEzfMB2TDuronR3LCs19ehKZ",
  "key39": "2vUMDzpYxgnQsuaZ3u3sRNGSkg7khgyf18B8xmiGTVNr7oEigY77JM2Uzu3piiEbFMKh9pdikYEfDsGqiYybs8dY",
  "key40": "3ypneuKFGMv32Hw7q6EZT2MnTeh2RizJHV5shK1vdwsNkN2cpQobhrWvVSZMoDyZDXbrC3WKHcZhhUVZucb1pHf2",
  "key41": "nTn7G2ipN1mFJk4bicDNv9kgpTJQa6VPsC3QLfBE1LvqogiUBkrVHjzs8VGNZq2pd4B9tQiknF3Y157oiSGFkXs",
  "key42": "3rfdUrKiQX3U5aWaoSLNeF4JpvkAbpzZ5ZsfFY21KmCRKmMJwSbhSGfuRcGBjz5xyGcmTttuworwMtSdp7rr2j6A",
  "key43": "53nxhZ65uWppJnCvEgmuz6iEQDWCS7xJ6UcMHrB6oRYT7yqKL8gMiixYJGxuV5wnFAemCE8yuJzd8zAMuF4UZHn9",
  "key44": "3etTbPxzYZwf5sfCKAxEB5XaAZ7HVSJS2QaesLoiijeWCZzSJ5tzKP1zKU3bEqd5XiXjSrX7DSCTJKALzjJFAn5n",
  "key45": "2sEysV352z3tfV6E98vYfpD9XZHBvxuZbYnViqEqjYJMvg8KrsSVN1vtFamHMcicHz7TuhT2bidH6wWPWXtPAPC7",
  "key46": "5ZgmvuMDXYFy44NpP7ZKuR1amtUW9md1wsYedwSS8FCs3oxSPMXaUCQXtCspQpeeMsTF96e8p6naf1qt4Zho92fm"
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
