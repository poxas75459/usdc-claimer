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
    "25GTyDD2J9f8W8cJgA4Yq5vcv29sNnQYfb1RMgfn7fNsuiZVvrGjKyhv9cVQAVus5GMXtAye9BEcRyurAJRTccYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bX53VDZD4Hpo9NDNGJkqRzHcv7PsmM1BkAC4DXx8adM8rs2ZYqPbdw4BEJQh3Cna1SEjhwK7avbecsAPHhTHpjx",
  "key1": "4q2QnKPymvwSzAvqbju6C1VKCCBXNJKTDCYSUy85WARHgdog3NJMQydtDqzVdst1vJKsKMW5hCjCnuQyjCdnM4TC",
  "key2": "2AMC4Uow4brKmUfgL3xRTYfJKVYsVnwLfis32Hc36ewxrpCCjvTRdvx4BFNaWmTtXpEwmdE26uKgbunw8mz9Gwft",
  "key3": "4aEesSBzo89W2sdooWzJdYr4wAMj7eSk5C5qzCAhaxbqEVQSCkqhGAG3688k22SSq3Gk2hmA9ycLvQkQAVX6bNUa",
  "key4": "47UH35qUM8fMkyMxuqSSBVQPvsEWCmbxe1pQ5iaty1k4mbWRJGn26X3bf8CdDXFuWFJrARuaLm8VdxqpD3aw6CbQ",
  "key5": "2TP1xmk5GdvfPRfxUK9tQs3Ye5Ze6zZF5HF3xEEeLBZ3gdutY9qeXUi4TrLtjjkwM55eo456AuPDuCn96BK9G3mC",
  "key6": "5Do6W3f7hggDJUeMRWUMbgaHyDkcxCAaCfwWtwwk7NhEkZCpZdFh4GZ2qzojBitAAxtsGYWvmAYpK59tzsCTvV5D",
  "key7": "C6pVz1tqAFzgrVD4LmYJ2dxzQvwSvmpQFTTwAg2NwakUy2uFnxMhAii7b3eiLAt7s2Hy5LChZPyTkQLoXLDrCD9",
  "key8": "5PJJehYuBkECQS8uUy1fJJi1JnWV2QXu6UEios9EJod2ztLCsVz8kNpCmc5CGBGxU1RzgovPhu2v6YQc2s99KH5L",
  "key9": "4E3cQKL3m5WW1Rvvs453WtTcb4wK2qmJVaZLGqU2LhRD5S3PsnjEeXVracZqbCgGxRdWQqiHDr4BkivVwJ5n2Z2Z",
  "key10": "2pgCTetPVnbPX1woTkGtC4nJEMhLr7idtnb616TWTsXwxv2tL5xQASTyKzxrpx5YUb8Z1cn1xuipeiA5XgaamR1G",
  "key11": "4jhc7W6mNvNDN9UdpjCTRMvU8oKy5TMmHdL1YvHS6Tc2nYqDtL1zavCg2B6riZKjuMABBL8XXVC1ze44FeUt3GJA",
  "key12": "5Et1pzRES678ivV62osz89QnrsMGKhDp3HvR49uvVHk3nBw5jxjvQBhRBMT82cJy4RskGkzWgQ31fqReRwCPfMBP",
  "key13": "39M2WqcNu1nSQ3zvCySgVuCnXk5YQ6yqN65vUNLS2FHFkCeJRSw6tEUr7bWe7skLPrxiZHMpDxMPJNPcpZg3kKYh",
  "key14": "3SQzQ3DV6jMV7iGwCeM1n6jngbjHRUT1odsWVCg3wz6rBFLo4gDwaxE1agnS7ornG4xiCL49S9AeJJx7GZ7SiWba",
  "key15": "3MXdh3R6WzkffXGfN8YK7fnBS6f3dcrJ1YFLgokPXKUNhtHcJHAg9qZJhwSGckXZRithYFtJAiXvs4HUfQP8p6vv",
  "key16": "bnWZA5RENLrCPSovPb4jVMJZYHzDc53LKR8u2Tjd4FEmv3dEVpEFo82QaGsLGMQbAe8a5VzF2jh2Vf7MtcQ6QHi",
  "key17": "4nJUY7CUQ4yKiH1f3wtPAAUrydpLMnguWJmXfXW3Czg7zFc3s4zu2pGXeRY8sspN5ALFpKXdK82VUhfyeDBiMR5U",
  "key18": "5eDG4RWgFxazU2eA6mtjjxfVHtpakwXmidGHTtui1ciZjW3kNFbAnbDSNxxfmJHeY5LBQxx7jrukJqq9hZx6xVk7",
  "key19": "65wM6kpbDo3xaBQTvjoQrMSYA6abE41fF6Twnwm8GYZE1hRbyi7jmZJayQb6xeapECtLbsDj5pnBk6bqBLkjYMvS",
  "key20": "fcajT1YubcYjgos6VXH5c7ta53A2AQnYKFWsBYZvr1TKqDxnWkeCYc81xxRRGkUjfwTaH83GKxLcH4JjvxYcocd",
  "key21": "3x9Qk9Sqsj6xEvqXKtwBAh3F1X2omQTkMjUxnh55A1WmvvvHfuMGGr6Je1GsoQj61gCk8ueBDZSip6uYDMjj2X3w",
  "key22": "4meC6LALxatAjeyEguyxYw7WVtvLUVZYxnvYUw5HH3ikPMw9pXD6P5rHxLq9HaKFxojqbusH4Cxti1scwJjgFH9p",
  "key23": "2H2cnqwqNB5Px7h2CE2cNej4xtrdb5uHpmH2mj83YgXHZw4SNyHqAGUonoBMGT6cHn7TfdasJy6J61Xs7c6PUbuX",
  "key24": "3V4FJxA6HYVZQSZvf7HAQBKHkBdYTfxMszHLgycwzPSKpYrind6FVpckfyHVgjo3ttcoGeZ37nTieniRV9oKJ8Zs",
  "key25": "3Vv6DoxNuW7M3TYMJwEwcoKjMeiZiNbatmrSYyEUKFvwCNeFUVfXojTEYj47pssZmagEiVeFuZLGd2Ev81onZDhk",
  "key26": "nNcaC62MBNWGYg21VnEh9UPyHrgaHjgtehFDNQqn6NJ2QDcgRPm8QPfaMXo3Lcd1gVKUCEtW5rzYodNvuwcE7eA",
  "key27": "3DTV1Jhtj97eHsT8Pr3soDTybtAT826gef6kf5ZoqLfZiptUnAobPkKVY7EfqkZXV8sKDRZhbu6ftb4tUhUyYqaL",
  "key28": "5eNHKSTHKpFtfgaWnW67XUCiTmCRhfMk8rVwpDwcB1XxdEymEUx2e9GRVjFM3NbUJg14gxB4LSXqWtW5eeTSLKDe",
  "key29": "5U3BVGN719DFF3wHHvrnjEqktJwnQ313Dctae5m1ktTnbZYgneoQkoAqENEANzv1iHy73V4BJxxjixVLVnZzXV2o",
  "key30": "27PWQRSJQAZ3ed2DQVzjnwTmqkcNMtJK8AycBZbJtdVkv1KHfBHv8PYqsr3j241qFyFjTtu1L5T67uNQ9J9vSQfP",
  "key31": "61BxE7h2ycQSvRwouhpNyeMu51btqhqxJUXKxQD7zVK3dGzGKhfinwFPUYdNnkrUa9XScpTVYUpU9z5gPsNBQfCX",
  "key32": "4Mp41BZDd8C3DQ2dUgs8bGKN15ubok5Vaag6SF3dPTyu8riB7UpNSd8L9TTBXuhpQvZ69aBiyb6SssBWxYM1uQuL",
  "key33": "SC9pQq4Zx6FBPVExQNgGgGUXg8Yj6AAcgs1d6iSgygWN1uV8RH7sGh6P7rsdPc8nv1JjNBTtTaeaLQxmpLJkXyw",
  "key34": "G9kv2grfcqF84c4tEKHomrUtQ4GKjfRS7hZvi8QG7jECqYcB4rmq72JEFFTAgrw86oFH9LtATykUKBmDvRAke9G"
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
