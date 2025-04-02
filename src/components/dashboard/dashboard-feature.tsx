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
    "3QyiSzi5ftco6eT1DtytoRrjyXyQ3WWXq88mUCDTk3w6Gnq2QHYAe5tHTBK7Ut4dJmKzGn25SJu1Lb3bHg4gsyq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RqBMYMvuqsmwzqVKcn68ungXSEfRk8o4M2QUkjC8zSGx33KDmcYZRs1qneCEyrsEf8cQyKJJp3vdKRvvAHfnpvi",
  "key1": "4LXyKh7xCASrvmPqShRVbrDFqcqtDY9TWRdmu414Y1dsF3QGQSb7aTYunHy8UXYZhkJYuoNyQGgME45oRK4yH9Jk",
  "key2": "R18cmNjprbWgZV9Hoi2DSBxb2RnAVAiCoAezmn6ej8joXyAHfzUCCrAbjpgDPvCK9VDYvru6pghS8HMf6si1Srx",
  "key3": "3HSqCSBNj9nDq5k6QxhPCnZ85VbhRpqfrgExwY1h2RwyWDRDDhCmysRZFtvEvsSsFvRzScj6czBdWdK5ZVbarS68",
  "key4": "28QcYVzJuj5n4BQ3Qr97c5iiXHhubvZE3VMXF1VQNfRu4JJvJEeMzKEoyW8Sifb23D3NSXXgKcBvuEyG9CVGCPG5",
  "key5": "5Lzbbr5d7nEkcgvCFKdxfdSzmSMMoeYui31JRhrQ7WK8hNNokVKM6hMfJYYbEao1jbizM3KQc8sjSMjQY1TTJ1Sw",
  "key6": "37ht1DGbt2k6jL7NikHLVCBUwi5R4MqvDvpHSizmMYyd2FWRjPfTkHRwduMiGUFCHy8UjA3ZawCE1pCtHbFby8Yi",
  "key7": "5dJ2NDN2LVknhMcmcPqBHrdmrCiybviFTnMi2BCpbnDhatMCjo1JB4LfL9peLV2B2RSp73cwvbMhKwU9YrsM3fmr",
  "key8": "2yL1yY3osr6MJdbTBarW4b149h6StNTexupCDVHMP28S7pghe21QpZVP9tHzKBEpkApVGDDWes8HVmKDvSXSXAsp",
  "key9": "3orhBrBvAjd2BrwnUmSYvnFxvtAX3ky51WTSfgSChwSgkw1b4JKit3dJgYg2r5PdzrUFSrpBgq2wseSq3twwVjbc",
  "key10": "4z5XiWTt9dAnD1o31ikswt5x4CfV1XtUySjWqV3VEMVDSN7cmfZcspdBpvvDDFu63KW8wM6JeYUfEqyjHBE8esWK",
  "key11": "3x6FjYfwo71YKz4vGapZChhhVc1H565bq15H3aPuXHMosEZE7xWhyE1tdfAxTDRU1tzE2bkNGfL719U9wovMKHjP",
  "key12": "58BmKJ7GqSZcpbn91rKJWYoGE4jF7Ndz9jX37exu7jhGwLH7hrM5BcakJoQM6ppTGepsvP9eu5YRuS3kx1jrrcH",
  "key13": "3smBqvRpuKpqe8ACehGUYrZ8xRwmcvZJsdXHwVkJi493EYLAxvMcqME8W911Px5fHC1X1Ms7QdLCHq85g2nZz1Uy",
  "key14": "vesXQk6XHM9QbXyjd4bUhShqtigFVGWeGAsnZvEAtvq3xgavABPMPQ1AEVWxHeQHtFMfJBtVnr3QAJxCkysy61W",
  "key15": "2YmDL2ihVHUeeksRLCZ2jDcBoWkpitSJxtbfJeEFHm7t7GaeqN2KS5GQBQtdZ5hh4oLZCQt9g27oAYf81M2pkFjd",
  "key16": "Jw8s2cLqbVjBbexfujbQBKH8tNNjyN8Bcic4D5FsiY1wNjSkSmVUqWmZw7Mb7RVk7gBAoz3tBZC15qv96hUaxUS",
  "key17": "2rCn47yQtm9VEp6JyKmcjcWnvvH8zMWwTfZXeEpJA6wsCYyFjRErQm2gKEt9Q31pgi1f6VPKx2yzBdJFNtE31R1g",
  "key18": "5zeZnH68SBQS51Dh2EFb3etqDM2DpCvJRXgjPXAE7oYJtvxGtZZ3B8UhumxWCzQNb5yjpvoebT7i9w4XpJvSVABf",
  "key19": "3Et3JLx3JXqFE78gjCxzTTgwPyYqXdWbwo9Cn7Z1tJmpAGzv4kgu8NA5SRsFaB2Mp73Yhhc6F2uy7wk5AHVcAoip",
  "key20": "5wuwkKF3UTkoBQ4nknDaESCtRZqjoqr8HCFw9p113VRuVv9DJ1F5DKK4GRnHoCE9FXCkuBst9MGhYLxqEz8heNeE",
  "key21": "2aqc9FzjGDFPrRLc42Kf9VR7uwgEE2jVuSignmrHh8aixZ4RsuypPvteBspNp8H7YjAdSCpU7JBS7V2pWZKdRPFM",
  "key22": "5CwRvZUpsCnnzsQSqTUAHP8Z6VhNK2jrHV4HiVnPYqFKWwL4NfmKxhqpgJHGxfgJfDTkf97fXk5vzMVPQi85uBVq",
  "key23": "4WXKj6Ejxky2pkWYcBpAY3ukrodUv2uxzq1JMNUYp7B5YVsamhQtHiJHdKNjBBcwMjeUABSZm8Rt6a4Amb8EP4hF",
  "key24": "5viGLSf5FU1dLYg9WBtAjBAt4R1ktXE1ggnx9NFVuNwS1dWrKFS6nonaXmF85DQp12LpaiPmjNAwkAaVANKTMAXZ",
  "key25": "5XLCCejQM2TdCXbXJp3eKkh6SiQBAjdXAAF7ReCW3J9y2my2gFDqxmDojxDWYcuT6Hbwt526t2UYniKQnwUH1nmr",
  "key26": "4XbrFGz3cgD9B9hkz5ZAftiwNBwmMPRnqhQxnp8HfWHwRaAXz3iMEBYNf9hs4m74Y9UBTkZQKGJtKgdH7J8iUGeT",
  "key27": "SXqay1AUfZaxfCh9RTt3ieUhFcqacjV8YNguAPwE9JYRaX3TtimQYMhWj5i9onVZxvxXTMfdgskmc2yZD48EHtj",
  "key28": "2VKAGTTWRuvhP6M9JrfDb1uuDq66upZc8VreF3bwLiuQ5CUSw5DtrnSKyY6rfAGPQinvrVSVdCRiHTyczC9cnSgr",
  "key29": "5wQZHF7CzpBNcsPTueEU7oivxPyUKcFXNsAY22S1En9FyUAh1HRcagwb9BCu8hxuYqRpZ5HffsqYANAYHGJMpevt",
  "key30": "tFq8avfxsbVkNPB7iCc5oJUW5HtiWd1XqGFHqB1fDMNQyqqSm6xQEVAai4JAdEqNDzUKtrKhvaBbxZxEUKMVRHd",
  "key31": "DJKJwckT8YEoHYrWAb9bmJaZ22TnFkHmcAgx7tZrtjQiCpTAsKSXRjs3YZEFmJnJm4CV8mmAAXQt81fkzskC45Q",
  "key32": "FNfAH9TeWqbg4xk4Db3uhqwTmjbStVLBq39E6HRPyNFqRwWvSvEwvNtg6y6YeMUbRfTCTeR7KcGNXnNE3K7Car4",
  "key33": "64XGZcfaxotqFDufYGx6SgdVrQGqJABfzsyUpmGsSg4mPm7ZX4ANUAowa9gpiAoC497tMgaSJhketBz8LJZQaxsd",
  "key34": "2XDPhVtgNStYg8syxgFkZLCr5kic8j1fPFDAMQMb7rAMpjjBaH1Vpku8LXuyTCJUcSYXDdaAWCF2AXsFh2anyGLG",
  "key35": "vt8Kk7B17oYW5kAeDnuBeNRqRRgbjmq4XXRfsDxgACXDPDD8n6CggVfEPfCWuvZMFbwoYs8gq7qR11LoUyD4cx8",
  "key36": "2ta3ytDvXUT9e4ZK63vgM1RrY1ZPQm8Bg6NZ2XkyuKaGzKQgPiAHcoQKyoPfDs2yQZ3uFsCNxabdMArHz1yJQF5U",
  "key37": "3wXj4mY1BjSkmsJW23atFR5kdPFx1h8j8qjQu77gfEWzBc5h2rdD2QKBjAzoMT86gn8AYAapcnBuvGo44xTSN92V",
  "key38": "4d5JtpuXn9ffssXwA2dwhkSjB9a3JV47DTQHp3wXFNBgTcWM4XzXwy3nCRxJCW6PyaS4yJ5u6189RQZohdhbFpPi",
  "key39": "2zxYDMW14kYnN6kSsmtBAyuWQR3WDQrJ8Kzjh3u8QCGJ6QkfyNMNyXkPZkZjx8tU7o8xD5znGHfCyiVwKPTB76UK",
  "key40": "D45hHY5zK9iWwrAqTC2HKreZ754hq5C7Z5YFt1rFYoaJYmkDsoWV4Tiathziz8G2t5Jfy7cBZdj3g33TsYBLkAo",
  "key41": "4LZbJQ3gtDwwtWNJMy8LEZTvaMS31Y9xZDvM8AUddXKhWSBLCKdPdTqgRW9t6eEXDV8XEPeAP9WrqyvzkMoiCmEu",
  "key42": "5t4ktXkGDwtK4rH23FRWbFWBeAm8FJaU7Dh48kLQwgn47wiw7cwTewRH7T8fBMHfxFMzDUUGDhzWFpxw3y2qnpDP",
  "key43": "YB9HjmweLr9BSKUjpimcgEsmfd8WD9LKt8WQfcvNCdWBk2ur6kRePbTgMyvJMJsbqnHFvcWc4aYbtLSNW4zNLpr",
  "key44": "uSTxE2x4DeRFhv2SxB4G8i9JYtwWX32sX1sMgujHyUmva9fkrapoYkYHVnoKQAi7Z59gSJyCWNUpcQBbYnT9UqR",
  "key45": "5Zckpb3T2KeTc6mK2yX9Z8FCfcwhNEJ8B3dFxXbYW77Zzn66C2A3sDG28tZ2XvtqMLwnnps7YaXQubNyQW6t9Wse",
  "key46": "8xFUr9oaBduPsamhb7PzTcm5MPv8w2LWdXKjrncg3yXcj1bDybh4xQiMP49fn2tr1gzNiMhrRR2CwFZRhxYn5HZ",
  "key47": "3aqpJRMv5q7s4JbvdML8dzUhy9BGH6DjzzcC7yZJ52oFEecL14NvA5yx4XXFhbkGBHVaq89QdNJdqZc3L7Hz2nwj",
  "key48": "5pXovBkRdVXtM1cRH7BB9syHEeywtmEcTkwYMQK67CBNCDu9K6ST7VXRFSrJDrewC2YwhG8BsqxH9E5JZdbDTzsE"
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
