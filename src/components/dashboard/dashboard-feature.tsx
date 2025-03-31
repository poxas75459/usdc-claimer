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
    "2Ka9y9aiFYUiUDZYo5HAAuLYvccEqcoMThrpf629KCSNqVGVe25qgfRZ7oj1dGeYJSxTPTDeCrgsa8Cbq4FfXRV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j2V1TJ9qwyWV6HcHsqAAwvzD8MBoWQEXLnr2i4sZXUA5hQFhn6BEbwrPB7oY19pqLWhmSmNNntdRSCs9NMbqN9S",
  "key1": "5qGA1132Mw9cujRYBaUnMEiYsiduqtunmt5n8GMrHqpg8y4x9LBfHq6jokNRMkk2kpfRxFQPrKox9rsnQoAfFhfs",
  "key2": "f3BCzBYpyYwtEWxnS6fXZZsWkfwGdXZkmmTFRgLEXTqhCezthrunwbAJvDt9B6yWHh9dyjtCTG8dcf7nkS8J3Ep",
  "key3": "Z8A6MApoyH976GWX6atWPN5ENH8LFF8sv83yAVonSS7DgaTfagHutYnbVujvGdT88S3ryj7nShFSBVPmwLMjNyY",
  "key4": "WPiRvxoD6w3Lv7CPa4QcvPrmrRokZ8UZ9mMKrgMRBoUiG4Fxx7cqk5rYMdyoij4KA2j5LjVcaGTDoVDeFkFzwoC",
  "key5": "4A4Pmv644tTBb39GLfU5TXuQTPhe6g6hUGnxLrEnptvmsFzdCSxidNuPNRDM9go1ApDriiJXjyjpCY6tUzrnduvQ",
  "key6": "2SNcqnsU37uuBQvVUiAtQNMAdAfJFbopDpngS48AfVC9vS7KjDxJzGwaBQEBEu3xchGF2EC9fM3gNBwJngnEXLeW",
  "key7": "4y7ks2M3HYVJFoiLaw5MZ333wnZqFAvExZefKdxAhZ3ASg1mbhDYa3Xmc855fVgm9swC6LmWdE7kPWCEG5f4Cmeq",
  "key8": "2cs2rGLrpBnV2KxXatLJgVjphFfkpM879ey6Hy1shJHnxxoL472aNw1JKLTZuEANotEX8TwdJKbmBSiGVsCvvsXR",
  "key9": "4D85nKzEtzA676Ge1e8t3EAPmzWvogcbs4jdEhxGDHW98dKhyK8dbg2JE16aPDZdqpUVNM4gkmGcqHJ5S21o4qhc",
  "key10": "3wfRT7WYe4LUyoVeyCQfeb2YhWsGm7Xx7ZTSVfGwh2GGA3kpRHFNNjhKaRAgJzErP9NHLhzXWU1C6wEm78dM6ajC",
  "key11": "29un7w7FcKt1Fzc359QSgdDeXtLrApbgsvhh6EVRLbmHvmXQSoCRRgTERFX58RAjrCBkJcqqu9Rr8kb7osQPVqYR",
  "key12": "66ujYJtW2aA6V1yh2jyU8acBt1oZQiSnpWzqVHF4BSuCrbJjUUoydVua81octqhTak4Ns7T93jY8hMTM5vy4nw3R",
  "key13": "5ThckeGRzCc6j19yRe1sBPhmHjxkUCNqqGeMXzpGNv7F3mn4T8GRxFJP7xqoYezrFoZp4cotmmK6mgAtYkRAgbK1",
  "key14": "2cGuxezhHFJoKi3nCv8QeJ5Xa3oJhPVoNspqnJpAwDDNAsTr68APCQQruC7cM3372P83qPjvFiMVLfqVHtSPH6Md",
  "key15": "4gGpCWfdJpT9Ui15WgqK5MMoYdei6bohB3NoJ4UNqzL8NkrMDEzAmubKoVi6b2fsdQQPqG9yjkbU3RxRUw4nCveZ",
  "key16": "2ZPU8CqPd9MtbxQwKfZB1ucvFzHK53miXceM7e18y6mBxtzEFkiHHsb1Z1px96hhzdp86onPQbvsRKtwqKGGUwQm",
  "key17": "5yfBQZHNGy9F4Bp9P6KcKTMk2MUQ99mRY9NcwGdEas7nRSi9QeZNuATkYMT1qsSRk4CYSR35Vf8nWZHyJZpc2fBi",
  "key18": "2WQ2T1rLfrgZ5pdkMUL3yRDm6h9662JGSHHX14Jbjagr7GjS4qMQ5tqbKFeevEuKNRiSc3Ciy6wsNz176K6jL4Qw",
  "key19": "VMnTaMPbFU8Uf2BM6QxJfjr8cs7jBxaCmgX7cZfHFBkmfV7Zknn3SLy4YFpGNTeQTyfJEM5hc9BqofiyGk9EsjV",
  "key20": "5uTRRRWRid5aRNJh86qwEP7DnxYeBuwZNwEvogyDNJG47XwcRwNY1zFQyCNcFXYFNy2rCDgULSJ6Cc4wKn28mkYj",
  "key21": "3TysSFfG8vhRYGqWQBfbV5VhrxLzEAmvy1PYnYLJptN9rWd13GCgjHYfSLryoRMpqVNm6jpEkYyyK9fovq44sASa",
  "key22": "2MjwWE4b5uSFk8NenNdU9WgQQ8PF8LT2jRh9qdtmCT51AugrfzJxFiWibeDW648D5BKF4PwRAxPmW5ohWk4w7Py6",
  "key23": "3MdCcZsBW9MdmNvKKBYMT61p2L2bw7UbHHs5pGwDEznRvWwc45Avk9GbaXbfyyCifPSp8ppL5xEUhjsoU1FeeSai",
  "key24": "5GcccXUqcVXiQAcrFkgCA13Enk44v2yMXN7kA1yLwiVpKNCSNcxuq1hr9qPkWPiisXRD3xBdbtMHTmu7LPj3vnsN",
  "key25": "2gDwa6V75rknyxKjhd9qFyhTg5YateSd7y1nX2bMjBtFNvFBHgv7ST3bqey6jwkmitvcmWhJq7Ttuco3FLk4dDRw",
  "key26": "5mFKvV2RE8GiRjrS1He9Z77PdzLPNqRcwr5cUNk97mU5osXFYwcB9fTzBHCtDLPb7ffdeMeQ4fhNeSTTJgCSFi2F",
  "key27": "2S5Bqzafhqn8hGYYQop9pvhXGZKhYSje6srXd8ELyw6bGif91MLzqJfT1CT8rEbShkLQS4pEufwpW7kWCpwLhosg",
  "key28": "DcqH5aX4fmuPKhu2ou977NAsufeXKbks9UxZRTMMHNCPnfPw541SBRDpvkjMsptLuvnkgWrYJunPbXVqrZnQSSx",
  "key29": "4SpmaT2vBANirenj61iT9x2TcfDBHVtLBwN4L7syUwWmhbrnYzbdFEcc1fVUz3dvjFpfRXKusQe9y5w4fVYoRMFu",
  "key30": "3L5oVSS4hkSnkwdcMT3YbQGhan2HMNn92voNLtVmbvaiXTWAxt97WudfHv8ji1VKYvsyg4t9uM8hGkD1YqrwKDKY",
  "key31": "24zaxw2vwdwS5Mt9xzCvCMgUR5gcJaTaKsuukcvU3VHVny4dzyw7x7esJZH8ZJwhuhQHjrUQo7TbaoLMhzG7VhNg",
  "key32": "64Yy8vR2xgcB3pBEwQU41F2LfdrgN1XQ47vnEuVbTfU4TN8prZLDxJjmhDLueZNUBiXSZwwQGFqcdvJXxyYxspKi",
  "key33": "u4oWmpie3SdxsMvWcGxwS8hkwr9f4hzBvWHdnGBu1qMC2gr4p72FA1SW6AMzNafb4dvMcVjchTnAVBYs53Q5F7s",
  "key34": "3UhQLk7zmV8gPQo54CvJ5xntYadZKsmRKXA7FfgYjWv7EqhTNgnVK2q2sN5xZUKUYsgixNLz8dZ5eUJftdUuTkAV",
  "key35": "4yJYErafMqi4zfcp79eVwRQP3xet3MZgyEEGdxsA74PrWz7c55CoZmiNDyYMdKPQnBgJ2vj5FtUiNgpbP4CQQHSv",
  "key36": "54seWpeyYQEnxyWJaw6iAYnhG65gixkTA9KMdzvGh8z4Z6yMMNyHwxw2ykdFzLzLvSiRqtVsghUZqy55dRazM4jx",
  "key37": "3kDCahJ4SQnXmCeeXoy3RtM9wbhVc5TjuG9FpNMURAmFjbViGCBufWTcPh9XAjNmbfNJUbT5hirKLkvbyCdsbv2v",
  "key38": "53TtTVLPuERYopXzKChk1jD1GNCRDbehXzMkKQKi7eVqSpDGv5H4NtfBWV5XyCPPJXYg7uvb5uqz8usW5CBht15s",
  "key39": "eh3QDffGV783ZaSjNxH49eSeExZrDtFgACe7KbMzyxmtj6o16EQsQi5JPn6EyhYnnyA8hLhcrC99jLPALV7ZVYH",
  "key40": "PwpuTdtvfKHfxrPVD1v1m1Srrvg8aJsQhB4oni1DJHQNFd93SGVb3NngeFQjTuk2cuzTpN3fpJkXCUHZ162UvPV",
  "key41": "2EVDgNQX6mzkAhgSnHSbEjyjeYCSNkd9Z17XbtHoj2s2cK6GPByZVCTi1vgu6u6zT7v8gxscZ6PaVypdE5VuEF6b",
  "key42": "5qmrYWkxBEYga3x1tez3Die3kusHhoesWFe25mQznUykeVzz3CmepeoYpLghuRURW2DB8rWe6ErPQCHJzvZafpx3",
  "key43": "44Tukjv1qbD5454KNS9CFFmjYtq1VMfNpGV4AkEytQ22p14RHQ44c4dB6AuyKyrefeD37cDjCrp9MvGXhpQzujoL",
  "key44": "5icrkB1cbvBkCgD4LV1N7536uavza4y1MZreX9zGQdLP2vuGfzpi5mtvqEtidYFdS98tq5BYuxDtGvu3gJwBL7xJ",
  "key45": "sxn6sTLEeE8ddYTYxgA7VxVW5qPFp9mZkUPWga5cKkYkzCkcyKdkGeXKPRsgPoimNPvyfD4E4esNQHxzybPdXxk",
  "key46": "5H6MpFNtP8kQKBr13nfUZJpP7wDsEGNyodML85bhP7j1jdzycs6EZJhcTcLgaTvYtPGDJ2cNsfCoivfEwijf2jLu",
  "key47": "29r1oF53LMRJf32McYhAPvntU8SrS1SBx8Q92nz454H1MF8bcrvXsLWngKcjdKz1aWSWF3C6bxvixwfjQU52i2Qd",
  "key48": "2tbD58KAmXZomyi4wVYXzMSxUuJejdF4k2vA4r98VMJdAB4XnKfPUdW3cdHJNPW8yWyrfDhg86mE5tC3EUzTAm8f",
  "key49": "3S6xG3Z98CTXqVkG5yVNQ8as9bsYRwYHR93XqRGPkTaE4N71BiuBxfrJ9MoPyuSLnmzNdgaUnYLwmwyJrR7mNtir"
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
