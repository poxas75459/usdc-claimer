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
    "2d5hdoeqNJgG729u6JAspWRfqGBiYXtVAhPkrUjsGXsf5jK4NiFxwoDFB1t4eKbsHoPUetccQz2L9pVz2ipKM3aS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "539XQ8XqUyfJ562udtebGWRtyRAHJxv8cgLHUf5CSaaEJdVB8MGUmaXEFBmy7V3WHRu325qEd3DRTk9vdWDuYhk7",
  "key1": "MkJp6HYCDQCP31DdZFLm4fdazVMtXKvYdLj7P82qnVE57UaHfD6X7ScfJqKsxCMayVy7QFEhKhb8QzeC8X4xtaV",
  "key2": "5wQK6fYmcxwmWAZhJYGg6eo67J6XZnkcSvsUZJTbhZFqSFZxqCf7uCztL5xcHfXYcZiLfSmfv3VqLaYrz3f6KD74",
  "key3": "4KSbQrjw34CMKhuJqdyPDpeYx3aHAMVPcuTUYyR9tSKChCLK8ods7RBWFBq8FXFL1FjAJPuS6JFhE63qZ54cRh2L",
  "key4": "54qbQhwRtBRLoN84jcCtzT9Wr5WESssg6aa2Y9KSfFDvhvfG9S9UcczyTLcNp5gmP72BLxZQ5jt72zxHEH6estBg",
  "key5": "39UtvZboyeMxjd99BYdzqPVcz8ok1XgfLo1T7sy8eMQz3zEde4PxzHRXtEjddw2zX6pn3HQgKkjEbcRR78GKo4Fi",
  "key6": "3pvDghGZe6wCuZmrHvQcaP69qVyKvpoHp6jDWvfjhjBx2j6jCqdygNyuRHhD1a7G6hp8tA8Zw7nppPLM3XaTRrUN",
  "key7": "3iZ5y76MkVKgBRnMmF6zLJ8VkYtQfU6xW4hLBk2fhPfgsAGndsLzjiXUsbqPfnjjgs95FBbXWikHsP2WYxzsmHSX",
  "key8": "2tZWLRaf2eHugdNte8m3hbcRrsBaf4Ns24TXCCDaEWWCwTF83pDCp63rEVUcsiLLjFpGKyQoULNwVQbEzo7QGNRd",
  "key9": "4RyXbRCNhsngjhTBFYheR6mQGp8guRmm2DE1TF7fg42s86gNYtTJXmNuviyN5AGGGtPs2GnAY1t37EAtca5aPjx5",
  "key10": "3LGQCiyzV1TqyFuBkvhFs4RJywUhViCw8TBedaDHW4UeQGjeaVfwUZ4QkLvAkWxfxVAV1MyBvA9p7GvUn2ZCggbb",
  "key11": "43yTUrB5QDBNB7iKaSyntJQXomHiesXyrnZ11g32JSRBUQHQG2GHUH5RU8SpD4nFs1DSr2KEAUrpST6n9oZHPkt7",
  "key12": "4jLXmw7bYfFpEmbiYt9p5dxkMDdaEoK4813uudVbx7QFcWHQoEbJX7XqgCoByQP8w8SEjByCZujZRWuSseEUiU5u",
  "key13": "kxFQL4v83Ah8KkCfpN6v5iQZ789cm5Eu4qHmwL2zzVVwU87xGHS4cjN8shTqAj6bKzEZtMBaLfLqQvYxDuAHHJP",
  "key14": "2RN7gvnhF5qC1FdKYcpiF61eqWFEzuwT4vSqQJaqp3Sb23x34LArFfsSSBHZhqnV2KkwLhS8uwD8Y2nYcsrGU62o",
  "key15": "2pWhxoCSfg55YNcaYcRWMqNZpUSzqMmdpHkbxvuH8pVXX9JyjwbRPBQbmsYpzvJGgBg5sSZqgqorfT3DoCegpCmQ",
  "key16": "3pQ4wCda91BuEw4ztuyq1ai45WoDRDUJp8245Ajk6746styqPKU7ZbUwGZZKTKhd3fMujCTxpgW8BDBZp4vHwZR5",
  "key17": "5AR8DwqnWEfMAj11Zn57qLqGFexvXaWFTz6m4enmeKGkuBQnsw3tF5XZv49j9etnndHMDNipYnqtGdp2tGFr9XnM",
  "key18": "2jv615FBy4jwNqioxXF7LZ9Fn9LjW4kWBea6J6TKDb7tBJ9dfs88stHFKHP5ntCzzWJr7FiUGzvF6giCH2zvCLVK",
  "key19": "2TQLDQsuiZdQbtujNmUsmz5FZLqbA3b2dZvXSycUAw6Kd7WsjcTXzwUnberQFFUuPJjeEteJEuUyJYxDWwpRYQhS",
  "key20": "2kiRboyFi47qYPqAb7gehU5okqW1BdW7EysyDxWYVzJ2Z3ytE4GSyy2WAGFvLwYKDpyjYa4cyryKtX8dk8jsefdR",
  "key21": "Jp35qWQaPuW1AC1yGCVc2jgaWVZ7fbpZtGKAKpiRxzP76b476VRHQZUjoTSxbePDycxj1mJ3jvVdGME7bcvZFGS",
  "key22": "9msLQDi9diKPAV6diDnB37dZgSJGPw7pYtKUaVCfXGGeutET1LNmBkTcQRjmXvxwdUnYMVc6gEuAkuou2e2MrEL",
  "key23": "FFxMCrEB6vyXyD5sCF1QW24c1cjtFND6eCvNddX1xgmcBcFqqbE6i4PJEPchRFmCTWydSxco7rXBAYQLh6Zacss",
  "key24": "cYvUypSgR9JzbjRzRYUR8GrMEnL39qkvSwHGETLFnjYRvufRzm94Mxivem5ERMXvsEEsLqqbuSUd9W7zhtarhqR",
  "key25": "2KY9KmLZqrAYt9RFv74hUacjKDqAwbRFZ4WnGWa4siAeeXsVf7xjYjyrNfFjhXGVmJXW72fu2VMgWDXfpACqHk5k",
  "key26": "QhZ35aJ988MAtDm6wWWV4N7L9av22Q8ggq3bJvo5F4cNq5SavdMc5mDiEzbUixfmGfCQrMD9aPVSwhDQWH92r4d",
  "key27": "5yMeHQn7XgDCkZxU4whM8D8kxVqRb8GKS9AHdc1GUo5GoEeV9YPSbE6evnV3Xi1kqjB7qwDARXHPFtEuhLY4UUBb",
  "key28": "2fDRu2e8RZj9SooyXzY8NnuN5UgUezXyBjfvwM88oqmjLED5kw1qya1RyTMSYtkW3WQX2RQvFMsyx1vnRpdha7of",
  "key29": "4H6n8ARQP8xRyR2ULKHr2n7CiM29K2oqT45qxqnEREsjEY273GQBUviUxkJTUxMyFsAivUt7UjRkB3aetR1Cw5tz",
  "key30": "2HDgfvvkz95z2yYWvtFpTxNKwCnmXZpikpwS32RLXWPEW2FNMtEGdwHwrMPdRgAxHqbD8rzxe7y6131SjhMPCyVd",
  "key31": "48pcGfnF2H7SEtYbuQX2C544uWabbhvfH5HxHTUi2XDH8TNmUo4ypSg9V7LoS8zMKCpkogbiUL4fnzKLwbnsfKhP",
  "key32": "3HM5xDWVCDBwdRTSHXYFmDP3SWt15MBiWgVtJWsEW4be3h63Khxx8XYqqa633AwQbSYiNotG8RxJdRAa92K5zd9B",
  "key33": "2VYHomkqAKCSDWvmtcN6dsBFeagZhUTfB49ZYnMeH712S17J1frpFJS29m9WHa7qYHA3qFU8Hp8wqA3YSNRkkCeu"
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
