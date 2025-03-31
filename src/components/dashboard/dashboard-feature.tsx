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
    "nQd8cwJdaANZoq5J8ccaNtmXmJBhmKVKUei7BswabQJ5TDtTgJ2Ft5w5QPetNYNemzL4xYCHBaiiKhcT84EbXZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WhfJwBCL5ozdhzccRQVDND2vgDAnBdPUHyWSCZ3tKfoCWfecwiXLvHU87uVNL9LNBGEZj9F4WMLhcPbRiMNAXKF",
  "key1": "5p8GjMouBKo5MKGTjwedP9dc3Sq1V2B1HfHWRMWGSu86AtNNHUcQEUF5a7hbVRnQd5TRV863DZjUzmxaDcxE4WGa",
  "key2": "54rygLw95a8oCyrcWrHaT3cEeUDLSVqpe1pVmG724hAFtBuHavhbmHNzgZx5nfLomps7akbs4MyY8aak2KbMEXjs",
  "key3": "PpvVSbEQcFqGEMG2B9LzcDdWkkKwq4EWKnBmJdENc4KS3pZ8HiDeEtptBrLmPS9xTAkgXdUHSS3AQUDkiodoUQ9",
  "key4": "2AqpqaYGGiBmVhJz64v6p6mddNEVSbjxN9Bm5trKrx4fpDhpQgakSMaERZZffSWeEEm4qZooExxr2KzgPv8CHqfC",
  "key5": "3tA2zhS9p7fHyRJzBAiCYvbFce4PF8Xs5LBowz71oa4KqkaeU3Cr2v5mrSUH83JnttgXBE95Xiu9mNgV4u4TNT4D",
  "key6": "5ujE1Gp1f8j9iD7GLFuJUsmgLXCSUQcpJi8W7jinY69p7ZQSuoKMNWnkYSqow7NfauqmyAEmEibtYNP2sdKswono",
  "key7": "4NtCN1Bvqs5A4keaSddeTFZT17ezSwT6SQNNk1zuTKziL6Q4cwX2wfdu5UVCeDcjTLhwucqrZbEepfPNYM43Xmwa",
  "key8": "37uvqQdB1upxB1xK4eF1fdEn728ietF385WtmojCzNk3pXRb6ZLJRaETcJpSqCotv22ygpMGXRHCyDvKDsQ31bwi",
  "key9": "4V7G74B7ezfSCEyWsv2bzL376EvFvM4r9VQy1vKDC12B6DZLHBjGqngrrnMy4V4m6FCp5P6DMyPC82sgckToqZQk",
  "key10": "5mwUQdMfti2E8vJ7xSMb2wGuTz91CDRHAU8wQbcYjJixa87o6UpiCC9GsGUA8f6uKNw1aG7tQXi43oQUrNM5V6zW",
  "key11": "4v8qkArLkY5VeJyjNxvfXVx1dEsrL1mGvbwzYnSbfQwZ6WVJR4fja9k4GubAnw7ba5rZNZ1hj2kNHC713dVF4ZJm",
  "key12": "3Th3LkEyQxJLce4r4W1VEEZXQ5RGXmzM7BqGQHzyfkSEfV2Z8C8AQvYkkaYEwiKMDuqN3m8P25tP6aRc89EWQh29",
  "key13": "4JXYHZX51Pf4mHYxXYnaAx6uzAZDFKd8yuodm9Z3iNgFggH4wxpmxLw4o3DGbiQLMKiuyD7FR8zTwDeBshkjG4F3",
  "key14": "553KEDke7kDuEVKZRBG7XZY1qu21uEagiZAYsBZtzuGAycEXPSouZBHVggZau7gnKtn1YdPybNYFBQoCCqAdsdZE",
  "key15": "3v4CrNM4uAvRjH2kxV59hKhgNxCkv8gc3FEvz3NQqHejQKUsuyj3nD3FA5wwAw33bFBZncPzHXpDco9XhkmKKh6z",
  "key16": "2AXi9Jxg8WeHu4LGafychmD5mBQDLMecY4MJkwpA5nDwEFPxeyfq9r6jCxT5gx7NQR9j7RVRBBD6814CuQ6S8Bnr",
  "key17": "66VBE4jra6gd5vgyp9SFFP5g6SY2uM71UPf8oEjxxA9UjuCZxvZDoSpBEAtEWTxmmYHfAm1JGBZFJkYekcoBAtdA",
  "key18": "5zRZVj8sS93uvPZyNg9yD5k6DZACoKjHD7c1rAGD2rqK64RyXzfBzgYhQ66CP8uw7tC8X8v7oeDaCoy481HHZXUm",
  "key19": "5Np8kbFot6TWcMC4cp3tvhwSWaoivwUu1Nv9grxmw4FKxZAPgF7s2LqzCF864AaMYFsaXdSrhjr9NKubt9GqKuyv",
  "key20": "5mj36F6ktgFMW3gsjRLv91hjVMQzwYHoXZzkewnvCjN6PqqzpnQJdTJ1kchVs8PmCAANAUnGazTEv3w9q49wuV2P",
  "key21": "52mBrTppnc77Hy1mGo3VWHkK8Hzkg1LQuafRqwk9oRaMjdjhJLhMrXyKMoLsQssQQhQmCptAXJR37e78VXoih1Et",
  "key22": "7nwk5L5pjQhdeAyDftxXEEzhpgAMVb7efwRqA4bnc619Ac1Fiyf51CvDdFztSt8WLDMjiHbhyXF6Ty3JWHkgSE4",
  "key23": "5X8FXQSsPDbhoD4NALSTBTXxX3SsWmr4EEEmV5isDr8g1Vt5amw5H464XvWxab2c2PabEVf7C8MYXoD6jn35ce3Z",
  "key24": "2bJ25fbPCpDQxSCA2CBnze7eXgArQhXsZiXb5sq8F3Hqwax4bHUAfmPyiUfdLyf9jYQkHHfoxV1NHzrxnATRiQhx",
  "key25": "3VA5ZoaJ9N6UxqAQB39Q5SVwbQiKWgMq4DYKkwmmbiDv1TVCgFCKUDXjLaABGbRdqcKsyYqPbqg5ocSd9XB7ZfUz",
  "key26": "C1HsJkv4a6998Km4x6CiGSvyw3rRgT6ApKF9bHpbSUi6ifysggzW3cBC6y9Vm8Qh65GMkCUeDdsatxnBupqMm5m",
  "key27": "u7DWqJphwV4jRR7GGK3DZTifAKazfR9QB3uara9KEPnjfgS7yHk4wXD1maUtnuB9dEsQqwzUC4HcM7ahUbhvygz",
  "key28": "52rBd9Z8RSzaik2ThwdimnqngWpPduypYH9febDRP145XuxTSS1NrJN2MiCEh2m2uiek9pUcHna4RE47DnngshXv",
  "key29": "5KHydoVoCvH8vSkctMnyez1NuYzb56CHbV4cu9VXB3TLciwHfpQYewQoKVSxkPtL7FbzKiBSmtU8a29Gx6amJTJc",
  "key30": "6Di3T7A3t6H1R7MQNDCFvn5mZNNLnUQyuqhWG7u6AvfQGs8zxMmHEa2GL2watsKcFpMS4hQm1dqB9BTQDhufj2y",
  "key31": "7VzG8fa2H56eszAgXMWVSn59C143JLtF9RM6cTqTN7CnV26sc5ggwb4tAUnmqPzVLnpTJsDCvJdY28DWVcGxadK",
  "key32": "5LTcGBB2QQcH2SEQckqq3eVWHGCzFVmdzNNzaZYYrhNEGxU4meKrWRXfihV3K7eJiTjtV4ebuxJG8tZNsc5Cq2DD",
  "key33": "552jQo86MyGTK7Z6pD3L8CwdzpTspA56WKM3MKVwt3z2gaemKWwaM3PMjoHFwZ1vjSKQnpbUzFXM259opjm8S43e",
  "key34": "35r9xk8eAAxMhZnyUqg6WAsp3az8rKfSUUt47SZDbwHmLpTYQHH8eaxYhWrXmFsB5cbWZ8tQxHmPB3Rho53H7UKd",
  "key35": "4wGpjfR579c7uxmsFqDqZDgCkZGySUm9E9xX91ZhbhHcoCvDhRFcirNW6tB6sMUDNX7A8fxsLqKmLQ5AeNjrqVvm",
  "key36": "3DM9o474Gz8wqjXmXk6gfT2brjAEDUzGhwo8i2B2FV9sm2qQao5d6PFHtBwQ7mHRcPVZTTaxzk7M5Cx5SmU1RuMq",
  "key37": "5e3K6ULZ7mpj8ohZWmQh5onJah2wWav7UeqdWRn15rxhdu3Vg8ZVYsFZ1psFc2twwGdSQVJDLRJYZk28cwHNyzKr",
  "key38": "2mcfpJe5gWq1SD7LKPU4rqXD8uuwmwEVtvu9Hq7sow7DEGhF4PEGCsJnZ8y3Vdp2gqRJTH5rvVkHAEDLXk1tG9ZB"
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
