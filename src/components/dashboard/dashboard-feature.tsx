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
    "3UTwLnmHNATPkZFxtoKaRo5W1xJc8R6s4P2qHTzSj8K7931NtRxey6Z4dUr5t5ygSiy34GgUW38eSXrwrLGhA7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J2R2fcQWJVn2EFAeUrV4XpRbQ1Xpne4ezbyTQ4fyiXg8xxVoE3dgaPmQQxqGEA1TY5rApKFCsat8SEhkC2BTuwd",
  "key1": "3oqnRQS6PQHjqjzBr5GgbvwqQyeQgxB1RdcP5iMhZwzjqL49JXHRawmfGM3txzrFgbqdZF9r3GGyiQXU6xNWpK5d",
  "key2": "5FXbRQmFqT4bqbLofvwkMBKiBijbMYeBTeurzVsXQzQT7CGsX7UDUw5gTnraecriWprAZNJk6BTxBnVhJzNWxxit",
  "key3": "y7KGHzD6xExgYL3ho15WBqJhB7KDJtLtT4mn2vhjs8vjd1dQyTgbg1my6tGBJX2ggt4xj5tC8N41DxtfUsrMEkp",
  "key4": "5pTTY55Yiv7mcHFsMCeKT3DjLkGtF4sC3QWqpbeMU1B7ZWycqqD57yY4bK2wd1tm8kZdgDtBwpYhAgxXBHDaWMiL",
  "key5": "3zWtKXE5ZwBJdJgGx4bsfwEtreK3WwrgjTXevk3Yd6TcqLBwXbtT1DSYq8tKxNAto5eihv6E2UUXdNsANqtJBuSz",
  "key6": "3Xnk2eVN7nhLiqxYBv3RrrWMoiL9rn5o2kpqZmgNUQvuKocqAdvrtnugxcvTRHg3QPAhc4kqEfkLiMm999jwHGV6",
  "key7": "3j9cZvhUSkVWYi6zN5h5B3XbGqiatyfpAe3bpQaPrvnVL31iMr2srT4GBcQHipMBqU3o5q2gQS23JzzwUchhkrjq",
  "key8": "5epM8eWVyBzepozPCkvDbSGJznRERpJrHxBvJHbB7V89o8b2Dqt8BUfrFG2HDLjNAcWm3cgwfjFDyPnKapc4ftC9",
  "key9": "47u24RL4kYPM5KbnoBJSxedUQbu94wndDJwjWB5B7QmL8nywMUDiy93PBgiUGJaXcyj5Lnz4W28shYkZN8uMbWZ6",
  "key10": "24YuNr2HaXmEih7HbD8g7umY1mUFeuWuEY2HouKR5yLe8tL2TDVWbi1zQfzvPyPQNi4xrSeZeNj2AZTcpWroAYEH",
  "key11": "4p2P1fvodU6DExb6E8ANhaeNz7CfWdiHwXyWKWu2MEg78HKe7JPUPsypwNq6RGS7L1B1MBvPJXUNzAFGsdE8Lm4E",
  "key12": "495rHdKZFWA7YirqRYRswVQw37Mk4TQVVA673JvBdyttDGhbUqJWGivge6oyVWJZTgxaCcfewBbQwSZr4J38n9bZ",
  "key13": "2vweYUEC2AQAuQnen9LJMrr1QZs4WEAhQW6J7V9xQU8wc1DVjJomuo6Xp9yCmRqg5TuTAP366t5oY14ijoidoVXz",
  "key14": "1izqm8BJKb2rhDBHvmgxdnY83aT4QcTFbmwmsqWVTPdSn3PM4Rt5xToeo8BUSp9eWpMv37WHn65W8ZGGM6QpJps",
  "key15": "42HXuyyAh5bGTppLFxjZqCzqP7Y3e2wfLv84bQADUAtT6z7Y23i5e4xQuVxjbAbWCqRt4SjPzKWSpztLvp89fXqf",
  "key16": "4xAt7dQxBzCyUVZ9ddBbPQ97Wd2W9Kr9Mge9UJzfEcJ1PmR3vGCxPTDf77truSfChM7UrfZwYBguBATQ4ndQbgfv",
  "key17": "4UKrnjL7BDW4uAdgGi4wNPg46WQaopGxqp3b7yZwv1YnTjtC6tu6EbhZEDUEhpAFjrS3QhVuKB3PWUnhQQgB4Pt1",
  "key18": "659bnaKWr55p8CqdoK1QyYjh2g18egFQQ85rKoAdroRNFTtQFBtBDKtaMacZ5gEBbQg2hLJGSRE4NknEfY2ZvsTS",
  "key19": "DctorSYmaBtvXeHLtTcwww42ckDTDmPgAp3DHVHyjwbRp8HdYR6kTfpSPi5vZLs4yGXArF26JEGHVjayVwMRqES",
  "key20": "2MVf2kj8YqY6BKJW1U5igHEFhbrqWKAUso6Y4TSH1Nrdbjq6dWPnD1rAYivoZukWauesArk5EppHKrshdByc6Cks",
  "key21": "db7F6AE4e5FyXA7pjH92GpqkAcgdHx4CZkLrPLGqBWDQwdz23QVKWDjus2ZUpnEMGh9hqk8VQthroaZu8JQ7ZiU",
  "key22": "UdU5sqhUmFLhwoLiniRrkBaM1rUa1knvBRykjwgbppjm7HAKPgco5HUoUhURMWoxdPbq4pZnJGSyCdSM3trVLyU",
  "key23": "3bQZQuogi6SQm53F7pUYrkVJg1R1PSHhCy1z4fWAaA1xhnH9JRCY5nLaytAJSgrEX6MaFqFFJh4mrtPErzfv3Ffe",
  "key24": "2hL69K3Ue27bxSf9ivnqjgNxgFMXEJtw4mUPW8ZthmEPE4PvFvC6myz1jN1kedSMVdeTRBVyYpzxJFPPEQcQEYSs",
  "key25": "4Boa52xKKHMKDmQjW67E7oTB6QYwvEbi455Ytubj3g7kqDQhsbhNZtXLusMpM7A9JQDVzsGq2pGucfsiB2cwEjqs",
  "key26": "U66xdsdDNJjuL1AWtBM7eztWtaxVNhgEJxGT8tVNy9ccpmKr83TWqKcxB1mA4k3gCKcwC1argNwEPrP4y1kqagu",
  "key27": "2W9MtQq9rG9upSvZjN6M6z89piCNPb8y1VAWw2iRySm4zmfdSqMoAQB3zqMPYmZN1KWinWFw2mnbX25XMracmCNf",
  "key28": "tg6WBgmEr8xEMJMQX3JmBTMTgPivqDDjHvFKJnKBkX1ZfGXXYva5n8qoK7QQ6z6DzPVUDV4SkPqG1ZsvvyeYBN6",
  "key29": "2WbZFdE4jesGSL5JdrK4KbcAbHrh1Ez2xrk3azsLMPrtxDMge3ybkdoYN9ARqatGAJDFE1o4U832PRXGHfvX8r7C",
  "key30": "2bHDv3xUvsDu1h6YGJzpxUhibzLfY93WWgdqvxqdZD9yVF282S3FRdfh9kFsYyrNPTyEXQHg8A2JysJ3ZLQcctyF",
  "key31": "PCcvjbxo5knGA3s1QJFgKMc9mi5JxiUJgSKdPzDqWozcMu9x8oTQHkUPb9LEgY9yQWTA7zKjJYYUzNxFt4yi7Pm",
  "key32": "wYgiku553fuyfC3bRXWbsDu6NdBn7Wxq2hZyesgfygrVZCfhSuot63QUqFbWwbM32Qra9oet7b1DMA4NTQQ3f8B",
  "key33": "GQH4dFEN6MvedWwe896vue1dqGmck4oEvSswcx28PbVyyiFDh154ciM3Q6qKMhi5JtVNUkSTrVxXS8MPRE1t4Eu",
  "key34": "55Y6PHQkeEL3oUo1K6SeUg3AnECdsorX547Nrte8yY75k3HLG6uyZ8AQ5uW4fuWKHqPfP8UrZLLh6r6byigcEgdi",
  "key35": "p76mzqjiFchgytx5XpfiyrMUyGejpJcFGbGUiibj9fSRB2w1MMA1KTwckpU3Wxhs6jzwYMzNvnH2qjm15Enttzk",
  "key36": "4JVouDZxaSbv4XpkCTNAiKZhav1mATjXF3LTQpCL9C4ZobUBmk1Xj6MBPK9CmuvEpFubznx2Mjyo3SqftpCV6S7o",
  "key37": "4ETSyX19RnVLeGYzGXw8FA7R2nFsJc5T5caAkvhp16tPqVCJi14BQp5csLBkgGVZsfeJ2fcA5eLF8ggw1CawRkoZ"
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
