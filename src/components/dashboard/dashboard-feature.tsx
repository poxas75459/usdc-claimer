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
    "2hr5cuFw3oA5PHafYsVCVy8VTcg7mi9LkVEK6HZAKBQA6gBGpUReSFZ67B4BSNHp5rXyUHNgnbQuJNLBr4E9UtYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tFpZgSwNNBPF3558egHjVw2ec23y331BcxZdHd4J9kyk8ZERNHFyMi9ukfHmv9K61xVzKD8WPYJskV9KYxBvvLo",
  "key1": "5CiEuAVGtfwcBijxXPoATybv4skteamXEUhDRfaJC36nCvFdkTUzEUGNjn17ginKYjX89x1aJXZuuKY1ywmCezCm",
  "key2": "3RoGs3vNqcooWBviGkmKTBLvHd8UkkTK5wEZz73L7NuXffFQNAsfmU45rebasMEpvqAdpsUJZLcA9y3kEM958zDf",
  "key3": "NaRHp1ZhSJ3RWWeJ5om7oxQViPc6BgRhHaVhk4zGzcNcH8Cqcb17xaqNk2TWq4DTHYXgweeCrLsJCjg8jfupeBZ",
  "key4": "2ktTHV1jtYu39ivqNxncQiJdUoYsJ9RbjNpdGYonDu6RBs3anhHb2RAgqPnydwLVPATVFZdzSBNLxigVfPsttKji",
  "key5": "3EZusFAEpECrfjABaVGkpWZJmhgfwdH6cZo7H8sz6PQeHPyznHXaSqnAKnWSF7oywXjbdnyLTuDtDm1xGNXTUvKm",
  "key6": "2HoBHAvybuxik5oaEGmHpUnZsHMcip6otC587r5g5YoVbFhTxurpBQACSPXoC3HKMqNDdU2Vk6ggV759HtkQ3LE1",
  "key7": "4cV5AJCePi99ECjfkesK4NjzznRBuuNMMtuCxJ6rG7XheGo4ZwEhkNqaRmrDV4w77raqoBAuCv49rP7oAZgAk8Mb",
  "key8": "67ajKim2kg2D8SPApeYQ2UZpCaXzCpWoNuRQtbjFatFcmWRUP7cdHJ6vvFKwhbSbzTyZoupkNJ5brKbBrmTeSK6x",
  "key9": "H9wfNiRNcqRbvbaEDpyWYfURSKApBF5hZWtam4t6ukRVeBFwaQ33HXf7LJWPxdafunS6YoArPPGvuouMkwbveM2",
  "key10": "5hdYHBeKgwpW2gyigKfgUgiT5UsSz1p1TXWhv8gYMEM5y9qanc8LFAqL2yMML5Ddx6SFmabaW7Yt8yzWEAxJg8VX",
  "key11": "4GxiVzT4sa4VfNeKoxbERto1kQuSGkdCqQD8ysdieU6AEUgVBKr5jtgbbn525cYATgiFmZKAN6YbisKmwvKsPL2N",
  "key12": "5SFyAtk3XZkyDyb556oyH1KZbPv2rb8KHAavEeXSdwh8HY2VpCLvJQfpku8Mw8L7arUDDUYoa8XYRLdeyciWRZS5",
  "key13": "4zxdpGJABbC4oXNS3Q3ASQjYhwxuRPNrHdHNoPc1wo6A5pwtY3JxcTU6Lj68HAkSsCURMmfWxUZribk7qqytv5VT",
  "key14": "54oGuGATCfkRq4wBqj99Uqcin5ETBRxuKPdjqwNNpjeoXP2UusoZrG5dvnPbHhzhJSVgnPJnymsEuEZut1ba3rr1",
  "key15": "2AvYW6rVV8ZZSM7wSSnL7o1JC3H6GD85xr4HKNVQfamUU5XRBd9R4L4tkbU6tUkGrhq5dEsMqBD8nziNRkqDTMck",
  "key16": "2h8w4P3G89AWvui61TgbrxgdGZjtCaKW8LeKWmr1z3VoPLj87Yi7j2iCd5sSdxEiZ1WpwPgStsBwwGQLn1pJQFvk",
  "key17": "2aFodVD3LtiFALWsMBh2CgpS43s9JzuGneXQBsj4wBduoCdbmdgFVbbg1mfgmXsEJ5qwqqFEGQ4ck5xikdWh64dv",
  "key18": "qmYZNXWY4448SFWYyhMzBi5HJHggsFMzTGT1HxbRKCokfpwrCWERKGxJYRn9c1hVaqPKuS7LXEjXqbJqy8WLMYR",
  "key19": "9o27XYDErhW5RSpPzS89Lq6yDuazkZzdaNnuVTCjP3XZJuEarVmkz6GmLGVd9YDNDeu83tx4hws1o9zkaBNzT6D",
  "key20": "2MvQcM4HWxsTini2qinj7JoJ8KHD2aS8h7LmwSvvfbMgPKnh3wHkvgk5L6scovxBCsh9wTkWXisihgY8rKg5RhCt",
  "key21": "55zyxQGqnucw5McQDhzRdX5dmjUZkmEwwuyfvTBsUDKkqT6V41meinsfm7HXXFRbYqb9cy2crb94ZypqXWngpkbd",
  "key22": "vmDkeEs81fH3ccy1C3YNTd3ZQ7CUTtVvySNd5xGsk6W1umJ9HNu6DzK9YaPu3BSjKtcyjzTEGqWSTxJ9jNtmPyg",
  "key23": "46HS8vwGFWXSdg5tDEgYtkoYesYhocAPw3Nn3759Zp29KfqouGa8atEjBcz2keutYLqZqyRXJkwYyUo216XWSPra",
  "key24": "4twmJZooax9N3xrVsX4VPGXRzCpjue2dWMHuLb9cRz1PgemL9FZjj52mqpukW9X9ZkhxCdiu1dW34QYetj18jRKi",
  "key25": "2CBQt1Z8PMEgJBnB6KHUEnUotnDPkAemT4h6E98hQAV4DEhzNsmQ2Fw5NR4SNj3GdokwJMAL4LEmnai5HC8WTiwj",
  "key26": "4JYtjQrkWBq8S3PSxpc7gGqLgk6eJ23WYexeyapDXUxEtS2jtEevFq4KNsqpNST5ydmZRHtWN4DGoFYHKmfzQRaX",
  "key27": "2zWMhENvRU3KnrBLKRQc5NRiyuruEKE6cPWb8wuoZDhGC2TqJ76bhFxi1cEsAHwBpbtg5MNLmyTPPjpQnEVHVFgn",
  "key28": "iU2UxLWNzD8g4vDoAkcxvbnt1ThrRnZPqxDhQdfbyM6ZK9TfUUgi5okMmWnLULpTAgQBwgWRH9GAfXd2RxV9vjr",
  "key29": "3mCsCQC4BJPpGVnAZwWEtUGsHArgLXmudJLU6txXBrr81AZ52otAg2yM6F9FeWxvKJq9pDah5DcjEu2L5XJa3EJb",
  "key30": "29DY9mEcbvFV7RBmA96FhLZzF9u5Q5WJke9oJNFo5oLGTwgCMtE9uxiohJxHs6q6AZ7eU3yrkHDEm2SbBTiBZXD6",
  "key31": "2gqSmVmKKHPzND3KZqe1KahDz24HYr8kM3KKFCKPii8eGouxBuP3Rz5J49aF5NkSV77qpVTTY6yXQpKFbWc4M8Fh",
  "key32": "4ohtDGMJetyiCyf6ktAvFpWw7pVsBgWNJAEME85oTKLfjSSpKNkCSFNCC9yT9nmWBitvPrzLaW3f7YGcSoDnZADb",
  "key33": "2exmZeNuugqmsxGqVWxQtKc9p9WwWQLWAZtB4nn7yvnaSQFuKqeLoYfVQKzvkzRrpxQNRe3Ht7zoYy4pWzzgTprz",
  "key34": "4HJ5RQMdasbHtSrKGgsLmwao4AnRBRLTYGG9UiM6EEtfTM2LPRwwTjjY8mjAuJFsXSkkvANrQLyQtmkATcGc9H6j",
  "key35": "4fQdJdirsXB4eQan3KsB1Sg8P3JvAdtds9my4EbnRjow4WwsMd5ZmYJc4P3Vsg8JNwcfBh31CwHmX9SkW7umAcww",
  "key36": "2ebz3GRLytHDp7Ru4Lyah5orAEP2oS4bYLLrQKwKMXgnf7weukXyhHoGTtpSkdz6Dm75MfjaePhv4ThxD1n8sej5",
  "key37": "3fwoxpCb4XyeBfnCZmiSFSsJgsmxzckzH8fdTJ3P6G2buDtVY66iue7EEnfnSNd7pQimqSsCyGmGfWyGxf6y4UB7",
  "key38": "58VdPNAb1ekm21PvU9Kc2Hbcjg5JKmJGhqR5qi49gCZYRGmEX5eSRpcQ29NtfFLvXLgRUHgbU1mo3st6WMUsEo7Q"
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
