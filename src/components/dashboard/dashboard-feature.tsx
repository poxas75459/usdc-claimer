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
    "3YC1zwtpznYTw1aM2PHpwpZ5VqmmbAkEiFTrvCH3LCUwaP1nLpBpHX2MN4e1DcqxLHSNKpjExyevhVBzf9pfUKaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tNU2gzA7ivptFsPdJFsi3xuomMQWDhxHP1CvpR4GBJMWnuba2MAFj3NCPxV1HSruVv5n8iA34gkGJdR86sLp6R",
  "key1": "62f7LX3SkqePbSb2spHdTxXvzPREMn1KvddgY7fz6mjtJZHzC6A3TW1dM6GBeBNr5issrusmC9VW57VtENJ6ZwoK",
  "key2": "4Fcq5TLHjNY5sWKGZioKWm2YhaV2mZTQovoUnhTWm2P9Dc4Ebg3LcbA1SkwchMUk5D8THmeoXTToow4RziouS85p",
  "key3": "46XwQJRVAMQNLTmwsaHGmA7V7JB72SB25VAGeWhCKjg5eCqj4rLgbbVcPquPSDtCgD5N3xSGMdczNu5aykfHHy7G",
  "key4": "3BosKjqhYytd9m2V6snUysEf8g922kt8Fy3rjhCS3pkqQLiUCgEbHSAc8vGP73182qodivXGnarZD7QoMQ8d67BD",
  "key5": "4fJ1tKax5chJ5RNyBcuVU2CQmmMN8VoWX1GD8HKnqhfavn11ckUFMyr8EKq9oHuEEmRwVLueJJHYMKap9T51YYmR",
  "key6": "4XJMdE6dPEm4KRxn7vCpD9Vm5ELTMuv6LB5TE9h474Wnk5UUema7StFVYHhZxia6rfjSHbuevpKtLKKpKhvBeSWA",
  "key7": "2sEkEny3M5fEBEMHXiuTv8ZNiLkaXbRQe9JLVQo6vnchyy95SzpgC1JjxemiRmy5nHuZczWPyJiqGnGsmC5tueAx",
  "key8": "gM7Az6GJKK9nAna6MZwRX2662FuKvYfLK8pahf8Er7WpLrRmqxuKsFRHTGcLLW92PQEFyK2jCoCg9CCaULvHy1n",
  "key9": "oyQzc8VpMM6V636Dd6ipdiBtiBfNAf9vr4bYhbmiobyFHqdmcUm3Gqh4cEzs1xLSr4yh3JhTBvaB5KVbsP4AHg9",
  "key10": "394eXM5hV3vE25ymwjqHvSxoTB2DoM9FJrD9et8MAq9hakiiWDD5pHW6C2P4vzFCeHYQr8TqZPKBe5jYpwrcU3Gk",
  "key11": "2ioUQY3L38KcEWooUvQgVgicpgr3roWfc5Ls7wKUJwg5uKcKtErA75LK6JaPRt9Y6uh7ihw8dh1JpvryGj86TAzB",
  "key12": "2kzcWG4o2cerJKEUzWctHSiK3FhLe69VaBUKkSZSyXym5y7iBWwspydyKwc7YKwTdoi2p3X2YXFMkbjcieqjHvbS",
  "key13": "4snXF5n8QYJMQPGd8VUNoMBqSZkkrwcCiwbvnEJ6bzmmw9aQ5rN3z9C69hqZjzH2UCdM4nuHSvYGntUxh7cm2i3b",
  "key14": "37W7JYUuzZ8C6gdXkDgE3DgzPCWGqMkXoqpyFrZ7qHUQx4goVrnePYQGgALCodm6TujDZZ2XUGkWr74zNcZVGxMk",
  "key15": "2nLkxSBRpqENZpKAo8SQBWAtzNXLnWyG6o8Uq3k7tZAXiMiLAvoTGH77occyqHEiKBCYmM6vij335AFTYxm2du6f",
  "key16": "ukrsSX2F1uPC9SsWLMSSQjiJHYQ8Ley8EFqrvfaLjT5Yg7AAVSEdLx7TBXnXqDPev4JjzynbZ5wdeoHCaZiGb7R",
  "key17": "53YEPJDX6Bhvh5R3LMwmqCgtD9B8R2phivkGRHtYcj7nJwxpDuDHDnXy7MWVQcYjFjXth3GABHLPH7qD2MCfmiB1",
  "key18": "5DSoMWbzhMBPuZJELG6B5jNpQ4BkHTJzexeW9LyBTxuhsxpZnTz9beSMAjz2LYWVjaMpnLwDnM9kVJcwUSvAdNtL",
  "key19": "8LqwuM2rDXEMJnE1gqS9MePgCGABsobepwh6KFy1XzXJxQf6YmXw5nrevK9v2xaZK1VxUPK5yJLZrZmUgbL8bVh",
  "key20": "bwwHh9JzRe8ykcb3QW7YCRwNCSv8jKkUHXnfmfWidB1aXuU6HGatbW8xBTWbr87pS9V5nyCCCv6AJPiaRAVqMsn",
  "key21": "3cXKhz7FvkAbDALjTrzBw1bL9c1RFgwZcHaDqd7zbE1BcwMGDJgtBvBVykBCCGENE8XG96Doqnnifz4gk4dP6stK",
  "key22": "34ZEtwa3CctuQHxWMTkCdTbdyXG62StTncEQK2J6zXByy5pd461PH3ATAxWhtS3icjWqeJDid5CPNCugL2V9BUfr",
  "key23": "3sEjtF1WNaht2PjHPSErWp13cBn8MJY7zmX3EFsDsrbSgNen5vkZTtjrS2Kn81xvxphzo3mmiT8Lck1iRjw6nvrx",
  "key24": "hBZwjUMigyFGeQrHnFyxmW9TDMqWxdN7NXW7oiNWAmK1iJrT35AukaHmgrRDcRB8XUdYYchJEc1pFzSsXFHwo47",
  "key25": "3PESAyefVi3kyLQYEhYRiCKZKsGz1zNYskbpaUdh53DVzRwQ7gzmEK6sr9WRhn8XzL5ihakbjPifXbfrD1VLdQcB",
  "key26": "5qkPWvrdGX3snGH6r7c7mjcHpR8PuRdJR5eUZvshd8ijFc74bp3VpBeAfMSyhizaVvYfbRw9XkL1Q5Uxgj16A7C5",
  "key27": "5BSPub5igNMXwSRNVNPhkUmykKfNKjEoqZuzuYNa7uNu7AXWfxEcK86UmaQB1aDAxiYqedmZ6BM6PeRUKAixNDhJ",
  "key28": "5dNQ1U9tmab59o96efhSsdtNNbLPTB2KX9jcGbFNWB4bmZSFQuxRWXrrR77DmqJLngYV1TJYocnwRfsAFSsudjhY",
  "key29": "KZraZMWEufXCFutd8eSTPusNv6WCzC6b5kkdjnxqXFfbHa1TnV9wfqvYg1UNhcsCKq85BwkrUaAVsyn4ughL4Zh",
  "key30": "3ZychGt9jE15GjWuW57m12TUm2WrkK2KkkgJmkdUEG29DK6wiLPLGxmEAEv1ceqAGSqNZrVXqkwBFrY15Bt48zAE",
  "key31": "5NjbSqz2qm6x4QFLdofj3FPjUaDZxy7n7jdLW2BHbfek8UUpAVKZ7kyqXjYyGxxLca8buShNsswJFFqyYywJP8Ek",
  "key32": "3aV6NroCb8NhYwwpRDGeuQz1qEzKSSEuQpc6Rjaw1t3Vy4BKLRML3UQup3YykNjbAzj63Sikq12WApHBdavTcxt3",
  "key33": "5gkwvZwxSGkGSgGaUxshKsVHSasJ5Rxt453VrRSzy6RYvSzGnqkdqJcaWQyKzNFPYfzaV8ddVoRDybiCRzGprxUK",
  "key34": "2TCkLXEjurvgaC8YTNWd5jfaHtXjcL2m8UJ3CMi6TAF5D99WrKdLYN7hTDEzgEpNFqaKPhB4gqLKXQzCeSLmFqD9",
  "key35": "22CNVxK3sx7YRieZoCHT7iwuDNjDswBEQDNz7uWvaKxUfA65xepfqNyZYJoJoXowip2EAMP1yTfkLCMwtz2WrnbD",
  "key36": "didRXCoDcHKepAa2obdKGRCDTghYic3jsYh5xVTAhYtp5XhK9JHmxj4gEu3u2TViFrewkPUQNjcMPJVbqrnbvEr",
  "key37": "CufFBczVabx2UUP2xM8rMb5JC26ytkaXQi3gvMELaWGhyVcaL6LPC66C7cy5ikvK6Lsf3jo787rEHmp3jXJbMSU",
  "key38": "5bEutQNPGEH97Sj3FE9RReDoKvsZMdATuUC9oMNRcZbaMwyUFbdY1hNFGXBiUuBKNDEYf1hyHKHeCwToeXyws98k",
  "key39": "3hArpgGmuUq8YkGg9wYjQSBTiBjsKoBe4XZnKBvB7aBbSGwhJrSRZNYPXuoy7QBBEzbr889un5CmdQQJSMVgFhzC",
  "key40": "5CeRX8EdjvmQhYmwbJjEABqW7MUx3XUVPwmSoBhRjG4HjRGRABmW12wmtS6sj98NBZjkN5V6hHVxRJC97xLaJkxT",
  "key41": "tw8Hy2oesyLqWdNyFx3FDe5HpZqkNUQpvULQumKQGgy45URkTGjG2kMtxhDTw6BGG8ZvB8GzTLcCBWRy5ftqhbW",
  "key42": "2PoZ8oHUknw3Qf5QepJtMYu59KH2VXyxzNnSyS2xRMqtvagSDnkAWQ6vXAhj33PPsEdCiKRwFu1Kn79GGatzhL1U",
  "key43": "5GuoTaKnr7jmPtA8G4fgA7esLMRLoXWvDybTPuB6rsFp9PV8VuiWHfTJ8aerVSSjmxTtd6GFRjZjRQm8ham3XG3A"
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
