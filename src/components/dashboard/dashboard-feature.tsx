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
    "6LT6LagvXLmwHKqwg6J3ufK2tfrk9M2GHTjJYiJc4kvoH3sSzayqmM2FioTMF8M3TK4hMWxBGJtKktNUkLwksuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21nn2v39A3EcA7bGMnkkrx4odS8uK67tjUhpihmhHeaCf68tgLmmautENPEnSgvU92agjhC98vTJLk8xLLDdfeb4",
  "key1": "4VXLfiszzbwDV728L3bYkw57wVrzhSdHzNq3UWTA7K2Bz4Kthr9DHdEnxJC2tHewgHZrmHbNsSrSdvGiJB28pSDJ",
  "key2": "4gAP8kSLpD2hXKVzWsBafkjQhFZTH65KTdAx1BPawzFzAJeWjTasLZm4Y6f8UfYipxeJJSdGB8Kcm4rDZjPQSjbj",
  "key3": "3FAciZt3LL6fHPYewwoU2ZefUa19jLt2fi6TtqDn11wSDvkwJmaJZd1Xny1JU83MTaSLXPHMN6UNcW2WZiEKvK1c",
  "key4": "2pNsYfdtcdZ9TnZwycvVqgBL9zsmRR6LzqT9ouUeDHCUMnNCvEAmYdXyyfY6dM6AeYTosUz37JZudZ1ZT7dogZHB",
  "key5": "41YSFNTknSn7Jh4AwAaxMid2F6C6zfVJRNaV152KojHJ4SKYpJFiv6NpuRaqo39XwX6XpFsdRNXUCw8YyHzp9SzS",
  "key6": "3EAv62JwfUGKeJzdSLg5mVkFez41jvLe2HXc4hfiDVan5D6cHaE89DYvXeSST6TbELS3Vens3PMbVnxJiXqCFwQn",
  "key7": "3B6FS9ZjkzjgT6Q2CX8qGodGWrFV5qpad352aNoibJovkfyWHNeftC3GyxK43Zt1bP4JPmenjL4p5VRW1GeNYHTR",
  "key8": "4rBmwBWeBLvbYCJAxUfLDJJELRMdwJR3SVh7bs4AqkJf7i4nL4Af9R1fVapgEAVjtnwjeLK8T5ykNThDUuPb4kg",
  "key9": "RjG5QqY4vaCPqUTkaYSKsaKrRFvz7dSfsH8SKCofTur8bQDtF7w3w121PyaEnESK2sXz2gyvtyccyZe1tVtuj5Y",
  "key10": "633hdLeTwFAoMXiHX1Dc4maBVoTf3wGJaDAqkCvkvpMAefHkho5XbWuP9pVh4GPFXvigZdp95k9u1TPoAhwfhdpL",
  "key11": "3FBKKKZigi8w82sijQYhnxcequKBAifs2DAYXuTh6PNxGv4JSnTkhnY24eSGKB2qQRnisEUiQgATBXnXSXh7W9rS",
  "key12": "2XL8BDQqtFSeaM8p8WsF493WomAd9EANXMSEKZyAcUTanVxkES3u8WdAq2pQmrQ9RiieB1X1BYj4oQ5xDwDNxQz7",
  "key13": "2GxNNdmeai46mvBkuKGDBa6yqFZ7VRb4AqniGgPUAQbm6RyvaGmRCpAQmWmdaKcEQgPVrNSieDCXyx9UTd8Gz5tw",
  "key14": "8aEP8j4n41gKXirR6H9Y3M2rQi1RXLWZShcFuMGPS1qFSr2DH6qz2qpyYQyAANZewmKYD7q4RsVZvxCZd6zxXro",
  "key15": "7tnwai511MbxMBRNrTfjiH5Cd8QwdnYg2MduijAAMQt8o4mE4jS7ELAEuqCx9EXhLp1JVosEpeWPMd3qpda9E1g",
  "key16": "5f9YRnwKNwrGTLZcJoKNm7mTpE31VMxGww2HLT4Lr9RqokTKHopmZJUiaGtfNuj1jgZaxK1fJeCMGfJEFWSUquZh",
  "key17": "bnmf9M2qnVWvb2Ri4zVdHYkanEXyoM7PG87ua8KqdXhvPpbQt7Nr3ysNp2MD44XDMzstbZNxnuivRcWCt9MwCzv",
  "key18": "2hHgf64AR6Uo71QzHRSUFhJcKizjxZVUAywCjG379pHVSw3bjvZ3EkDQ47ATpBJBEwfLRce6WcS9fi7F5G6jbW61",
  "key19": "5rDu2zYVw9ekT1rNyXFf35UpCVzAe5QumL6a8m885B2LAqx8XSWY57XQ1Gj1boedMLNnGhDnYgCD7cFUo1X1zCAT",
  "key20": "wddkphtUmBHcokxtNQtj7WZCbkosx6HxZZFibeA6Wrbi6yxcffoy42jNCr1eGRceZyCyGmq6pejP8BdxRC4vPsB",
  "key21": "5tgxxXtJzfPsPLzAADvnx9WnLxJqBtXBHE9YpVTEAFG6hrS5AzSu5Zb9zNk59C6Y1XGDAmtF49HU9o1Vrb4xY6RJ",
  "key22": "416m714T3DohgUcHeVWPKMujp8hKfK7qM3SYc6eXDgYxXct2RM1mQy9fcVjNW5mVMR3zNJaRn7duKhJ6ir35Nxxp",
  "key23": "2pr19tRtPicFYria44Re3b6YjRJBshEjCG8XfRCNNiDR8bAxDims57vqpQuLKWKEwBRDEKfw4tRE7pynmGpqgQ9M",
  "key24": "2M8uX5kC8EUuaN3RnXpoR6YZ5MJSdXtVKJnKJ8JbpvWTYqToviKGpGzLsKspdEPLqfcM7pe6mjkeUHrZ8vCUa9ZT",
  "key25": "5hydjierqPbBAZH2Xi1Zc9GXQE3R7hsJwgP924kMTNjfTW8Gu38BQ5NwupnZd7jjo3JjjFig1RBpxJ7JtSGbAAEx",
  "key26": "4nD8djVVjFpzRw8HzYWLceiR9viK9HivoW46UxRppVtmXYr45qKWXLKvKUqbmXeCx2TDLUg3LgnAZtFzDw91xxS3",
  "key27": "e7Xr97ifZ5zuenz5cwj2HYXs9grzreM2bHJoRhiztmTewjFXFafuSVeixb1twDAspFsW1twhfzg9EFAhYYrRLrA",
  "key28": "4MT2gd1ZfHQnxHdCtyCaHW1aFeyGTqp2aP4jzXCHEyWA1vVhz9N6JwtV7bpi1SBvdP2CJn66NEUYaWD8J4Yq1g1T",
  "key29": "62h6g9MxkCdS6X13bH34xY1aHqPC7RoW6U59rRfifsceivBvw2xfpp3v6ruTkx9DnJJvFWCT6fxxmG6GjxBGMeyF",
  "key30": "RMVYxUVQj5k8ngSGFpnXoDHvwrrMpgs3WB8wckk2RcwjG6sMAuMh6H7DMMGB4oP2xwJFLv5sqXGxrb9F2icunLJ",
  "key31": "8JTVAxQqdMQkV6Fbxm4vdckzmR843VawDRBtiEiafLB5srTTvSFdr6Hbf3Qy1G48zHdyNhxSvXRZ7GEMA9PdrfD",
  "key32": "2Rk5LqSMjmi4Rjg6DJwW8xZNsKacsdPvNYqDKajhnUWrjELF6DVDVE2xuxbmDtRv3gykyZP4wYXKVZBQpJ15r9z2",
  "key33": "8Am2etzEsabeMwCGVDpLNqMca6faskmoZkFDYnUmE4h8vritD2AL2FQVJxgVxggbQmVT3yYvWWLpzd3ufK8SquH",
  "key34": "55f2AoPC7sbLqBTTsMV5F717nwiPZtMoEA2JHZjjXJvU9eS7vigbgRRSm2B1XedCTcb7EEKRjQiJs7bLewRCoGjD",
  "key35": "4DyrmTJtSuzaqQ91kpUPaQsEhHE1sg5QtqoBaA8yndB4HcL4V1TKgCk6QiZWbieTdKERtenFsuBv8dQbMExngHHN",
  "key36": "oxSuGAkabccUvfmJ3UYKq8Pd9hHhWNLnXz1XME1A8z5QJ2XUCoft8XW6fYrx1KcmRfL1zWxR2bW74hfevM8vqAr",
  "key37": "5fVMtQjPzZmZNyWFA2c2cKCPYMrFqzrnppujGbR9Ee8JL5eN83565MUMbnNhWmf4LD8dGrgtZUsaWdaTF8XYwJgC",
  "key38": "3y14n6syfQMjTA7fTAwuQJCKyf6SeksQmHDwuZ5pHLNuH4L1zX4Kd1W5K5Chb8ZPJM3KqvaaGyQ957E42QEBnnP7",
  "key39": "3fD2mQ2aM1p4oh1RSTtfgi9dvDcHDQghAmh6h58JrWmXNVwBcL1p93XDVpdGhzz3AGjFmDHXR22WpHzMewAQjJX",
  "key40": "3fEbYnFTeD3hnpv8k5LwTygMCQvaAbn3TpeZhoGoohYyctuXtKHKCSeBfcipjji6yfznV42kpM7MCufKqGZT7G45"
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
