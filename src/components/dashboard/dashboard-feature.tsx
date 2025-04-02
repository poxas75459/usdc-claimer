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
    "5HDr1xMTM5HpynNUXFFoEtvzu1EDhKkyMZx8ra8U8iwSmhF8YV4EV9AFDe4PpKvhdeZTtLnM8yzbN1mW52X9G7bA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vkhyNjTfRdnuBdzEiJHbWswa7LMTAiXM1vy9M2CNswUW3wyYJynUCtUppVGdcf7Xz23DoUX5afor7p6jyKiUkgi",
  "key1": "28mcoMLwQRRdYYm8Hg2CgvY7eRtCufEfBp5hpc98LNk6Zrgp8u6sLZBzVP6ScEepupUSnn1Yn2MVgqQ2qNQsUomA",
  "key2": "2795XDVpPEMiojy4oWbzawc3NNfy4KEJvXjGrESS2cqEDSuxmXaDX17KQUBcvfKsgQoqb4WeXcTFNWfVdThwnAPe",
  "key3": "4uhPH2s2ukmWg2vfdW7BR4PcRaKcCPREEdzNck9rR1awvwKuF24sY2ERnyF4YFLhihLS6XAypmn52NQp2YWcVUnZ",
  "key4": "3uaXNgsv1VZU9bdLML4KnJoSLo98iycyDAdmqFwT4UJSGQJeTTdEpnqjGT8dsxCSZVMynEQxxs1dtDHYGttN3fjo",
  "key5": "WMtSPy9cv7xnMyTrFqH1EzfMSzRuBAVQgvNWCzRnEuvPzaJr81rbQ2VECwPpnvL6KvuJBDaekJo1Jtno9u9AXnw",
  "key6": "mjPUQSbFAZsRuiqzyLh7fKuqaXSYtFRZLwVNm4M5SppXofrnKQpbvWpsjAr8EfUPoPmTjFV1Wy7uFTkCqEoxqh4",
  "key7": "7BoYyckHEHvHetaX3EDq45VETbwpA6pVVkiA7jXZ5FEkWhUNbf8nRYRoN45wLNvv6Cm9rSWBeFjGTRS34k6D95z",
  "key8": "breWcohUGJ5vpipxoN4vArNX1N9f21QT82rKK8DmKFyyAX8RozU7d4U2D3egQ2vFdbVeSQ4ZVEv65QYScoZMQz2",
  "key9": "3c3wtYBSqe9V58cKHn6Lfs1uwoWRMePkgXNBRv9t5rvs9eZEukPtGuZn8M6KKXSQWAu1QecxcGFYfSMeVwCqpzuj",
  "key10": "VJ58aXe5Yp8qhMUgMGy8oRA4PyPpiu3LPbn1V4vmg2YjAm2cg3yjWUnptWAnbBuEJ9DHnHauaMZH2drQYK49xaZ",
  "key11": "S68MnWGNJBjQJ6gGR48YrK7G6jnyMdkaqfewTaiZjZz7uHievqBPfycWZZDhXPrjY35EYkRhUqTqMAxdWSPfa58",
  "key12": "121GCzo2anXTX7KwyHAvEzjnVRgHhB7ehY2BpiwFKi2S3axnLj9qVV4cmRRuetBcVjcmegAShvSYrwWZGZbrQY9C",
  "key13": "3hRgrQdiyKJ6yrhngagebAB25e6R4JBeYYocMCyTAYHN3h2FfT2MEAtPmf6XXZLLLNhaWoCxkPdpTDyqhSy7VwjJ",
  "key14": "1fzNChhsUqQea45mmb8ej78t3zhszWyh2SNGomAJ7auTVY27nqiR2tWsnfjaZmuGDehKDG8GUX3Cd1JtoUTUjck",
  "key15": "5ZQ6rwgF5pckevF3H4X9hJswVjgDCdWRgwxQEvEQXk5pGBE7QSVU78yZzhi3Eu2NXvg6w2rJKmJzMyNr88FpKDhq",
  "key16": "DVsspNDDPF33mbbWAUPQ4G2Z91kvErSNzWawJFUGsEQ4oimBXkzRu686Q2VpTgo9Tz2nAx53aMW8pv1vGUSHA4k",
  "key17": "4NWuMAZJizqff4CYX9HSFCQE1LM35d863uB8ypMAF1LjKnSd87tQJQxguBkeEQeqbktVv5KRSgG3u3BK5ompEL1T",
  "key18": "3pSXNGzgtL7axFrnPuztLZj3kobvzxYkh9qieSJhLMXK6ZE7csUeevQ9zNkF22NdW8tQgJ4GGZh2WqvZgYE6RAdA",
  "key19": "3CVndwqUU23oSwUoaLLVbnj7m7qEJJ8Q5SEiv7rUaTiPXj7JMVVfzEuHBrmf26RASRN5faYeAJkRTawVTC4SEMtN",
  "key20": "3phvwP8yEtLGUySTHvY57UQfZRmc149dLx6FmajMhCQ5enbJ1tLqLfF8ikjWNXyz2jjfkxYMgtQEhAa4tQYyhEx9",
  "key21": "MNWzKUGy1APcra8ah1FLYuKTYLDmw2K75ZnEowMRMJN4jKFDiYzxqP2F6qYjv9maJCgzs1vf5tRotAtqMXq5uJk",
  "key22": "5H7H3NCToPDr3bVrPsz8WfntyACcvFLC8F2wacjm4JfSgT4wMr9bmgDyJKfQ7TqGDLKf1rScP8dFrjYqt3aHnTVW",
  "key23": "26urbcWhABTJmFHT6oR8AzNcB8AxqLBtmYNKwfUG8q6rva2f6LBzNBnXqYuqHjLwsSpkYqoAW9GdRiaPBm6srUZp",
  "key24": "dp8WbipjcXUrfx7ZyxBzpSSyqFYfuAKgjxfK5jnnALekAPAShgvfjyYJqvRjzXQp743TQ5dHpAcWLryomVQ2dCX",
  "key25": "4fS83DW3qXvu4e6p5jj7Ac7Q4CXiG3NshCva3uGV3SdLbg1HcFJxs7MqPHE8ZC9NhtXyxoJ2SMaB8N94VQ7MFm1U",
  "key26": "3SjFPEp57CozeijUYnb5SMRhfissDdWSg7AH6rxmvpamCqTv9fKGnepwUVjF8ZrfFdP3roHLxfuSQzG9F3SoAJVX",
  "key27": "3sucYBRPRXe97hz84SGk4rSVuu4qeFF9QLqNYFkZ4RozFUzQGEHGVvoU5BMhdSxK8x7gRWCw5SUsQ3Rdua8vHAz3",
  "key28": "Gb2fpjusRAYDiCiL9ZMRL7G6rYjdVngcqeEZPv1froEHto6enzPeM7QfN9siFKkCnbrswpEuF8N49RyFyD1VP2j",
  "key29": "ndcaSA34M35D96GVtWNDjKFj49ChX3kVUxnRYy7bFVd5sMobF3c3VJeiMGcpeZcisKcFa33nYu7XoWY2sRc9iSi",
  "key30": "58LTPjBmUhSgn9J8dkqtqHx5VRhQ3bSVzX3yCHsUvaHgqmQ5T7syhruqx8gasiB8D4b9kgAMULQG92FqRR1tvj9c",
  "key31": "52eHx7yDu25om9KwB3y4UZJvWvsih5QyjRcnvBpQnvCuiiPgHGvKdLqSNN2ErEk95UepBD1qRUFaBJ3QZQ2aqMDZ",
  "key32": "UX7QUnc2igCbdF8v25BuR7suiFm2gNKYGwS6AMosMbNs7t2Qb3kgrjaiQQZFYU67mRiwhHNqFk721H9No5CeX7J",
  "key33": "37Y7wW34E6TPiL8YRD2UGApjV7va39v5rCtMTpnHa3VntsnMB291ZmLVX31y4BogMQUzFoY62429aQAHsKGk9gd6",
  "key34": "57zya2XeR9UT8g8X6WdAmJUwgHRo7CFCVLR6oH2yS73nKQb5w2aKaV3LNU9hJy9FG5B85db1raDbafyckxXBfKtC"
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
