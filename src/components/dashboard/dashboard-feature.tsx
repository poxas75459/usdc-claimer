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
    "3Q8tiBri31EmnKbFmhHcEQYDuNT4DAZTPY33eNtkB77sPDuWa2krEZaT4V15R9iDiP6zdnYoHYPh7JojTHrqdDEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ATA8mgcQFvTs8fZ53nEKQYzSuGdUwAjK158eJJTnRXdZjfvHFFMt4aekHbcr4b6CxZGeT7xAxMeTnpKnMQF7pV",
  "key1": "XJmo7LTwWn6qEfrPg47FLX3bWViw3CSxM3BR9kwQ4Yaf6DrxE8qMvWFi5x6D1MQXjZMSxQq2nwj37UWo7hABLDB",
  "key2": "3KEjCiYSMYGNWznfWHgCoconGF55uDEjWH7X71GztktDsnWCYfLgV481VmRQYuGKLnwSfwFCxEs6nL1B1r8YXhZo",
  "key3": "5gNcSMBnjGemnx6bsAuvfHatb47cpGCbVdFPT17Y3zsLKWZQnQtDNFFRh29YbPPmT7eQJr4MNLJfcDceKJVb1X6y",
  "key4": "3TTRkTdumGcHmYnfCV4jhCkzx4xor7GZg2GPm4UvBPtY6XaM9Fd5iaxt8zJi4gCMtRjMDXZGdyLDkbfyYT31p3Av",
  "key5": "39fwSxD7iqr1tbpunPfF1kd9QsVwVv6Bv7yLW4kZkm1mVoCMCy3HotqPhFbDZZ3oAaDnU9izvJL7cTMoqJTGsosk",
  "key6": "5r8HmmaHJSWFUKxLJk7gussVPFn91GoLo2hYauS3gT9qpAoxvPaUEHxExVJvrPFa8jPRdHgw3z38oK1vUYLJZ6Cr",
  "key7": "JHHFfBPwGf8e58KC9UwCGsY7ZLWZQYW2WkoDvQ8gMhQ5FbaJUL3iMM7RqHctDtfDAdJnn7y6HU8Y5Zwq2Q7kvQs",
  "key8": "2pdbfZq6YfkUi9iC5wBq6htynnVRtrgk9CaJ7bVKwXxw6ZpFUJKCCq4n1ECYpg6gg53itWvAd7z8KDvTAwgKgCyB",
  "key9": "E6RHYaF6JSq8MTC2teDRwLDiYRqjw93KPXTXcHXQRqYmEDTjaq7QRTL6LwLHrdFmNFenh2W9hFTxH5ch2BBAGLj",
  "key10": "3gDcEtE6WWJgR4JsuaT9tgv2Exw2b3131GfaFQqZkXy82MEmwXjQmLQqqRbnfhctZa1kXcvGF9hVALYjduoPxgun",
  "key11": "22i6WDE7ZiSbWuTmofi8YxhHvXAQg4HxWZUyL49vtNdynv7P9uqYDdmcqLbW5rVy7HHfXRmcF6vZJSuPjVPCMEoo",
  "key12": "2kDwyoBN4Tpwbr8BPjv3fj7KHZWpHFb445VM2ynsKXa6dHBNWKks87KuTUg9Vaeh39XnRxiFaso8koTs3NozTfPV",
  "key13": "xK1e8j4pHuYUmVywQaBnU9JmcxDUtLQXrm99S4tfQ4kWz3qd8EYJzVBYPCBX2kXdoCqsfwzAndhCvMsPxauqAhL",
  "key14": "5kxoQDZvZH8e5MpDDXdtUd5zvf2Xa79vHRNSKb5t5NqNpq765roVK1fn62vASYkG76q1zxAsqRkuWFCBz2gD5JgH",
  "key15": "2axfz4ftmLpEHSBjLrV1j5xmZKHc2fx7CTPWXVgeJg4W98BhM6PjPg3uJmHHC1mDPWHtG42VsWCsS7FzPk3uHVTA",
  "key16": "4Ufwinm1V6TwPAKTBNkLp1TSvGdiuX5sjwJ5xrPqmry4YjJhLTwa9i3DQEa9XPbhWKTTYCSXq7ehur4YQ6qkid2D",
  "key17": "5aF191vGeZL7aE9UkeW4kiDgLJpRTgabpoYfdTAaJgVv7FHPtvWm7ctZeH6472PvQMeSjNAjTCs8jo4wnNEUXdHT",
  "key18": "eAhruKZozSDqbgWM5qA3mThR5tELmq1DDd3FGUow7jzYhyhggoqaVeEcdiXigaqP7qdY7N9mPSTGCBLYFv9LWdh",
  "key19": "5P5WE1XnieQy5EBiE67XKAgY9AYQdUUoVBFTFt1R91NAYM6ExvtBo6k387X9iJ4GEJAhSXjXFiYA8vjwvmeVEzw",
  "key20": "5zDjHzEgtRS8pJXS1AfRVXDojQoqUESA7wpGWhQw67GJPmVxUmHcyzuWTKTCXp82L3ys4mUXNWhrwSuJZVzT68Me",
  "key21": "4waq3itzWQyk96ncTUiAMgQLNNJPLAd5ozfzsG1v5Y2xMgAbVmj2e1FuPX5iaPBqALnM23q3eb6yYH2nYs7AdedN",
  "key22": "3RFmW4HyFj9PAbFZHbV4V3BcrGZ7aQ9VgsjggGS1UPtLYrqk1D1ebdyTwSVmF7tSekLSTZ7XEEnv16oZnTwV4c1J",
  "key23": "3Ydei2eVAeGc82DKrrkM1Zwa8JRq4ihmUhCMrQreyUwaSs3yx1ZmsDQdyVWqXtVAsGXrAfK1m6vkvVXNibeMSdJF",
  "key24": "5WN85p6wE7xNs3gHG7foue42SicpfoCwcejxjyaHT7L2H1RkDtW91XPHuP9SPrW4tyW9Rqw3okxKdLmc1jFq5fDu",
  "key25": "5ou8jktqfyeuPmpQScTy2iD55UChwHPQhiNZcXbwVqz7iZiF7g78DYnjMuc7LpFZ8SCPvH2gpCqLXe8uLR1ndoeV",
  "key26": "5LiPY1e8YqUrE3LCPzyggeXHcW69kKtJkHWUZgiEAeemu8QoJ9iq3iziLNgn1MPdVnTpupanMWXPPTBwpqtNnpG4",
  "key27": "32aUfjfhnHhVQscwjLa1tHyN4EgPgBZxTAtcoUQNfWxCqG9sMd5V6yFmeZLARGMZy2ai3Mzcjh6MyD2nfpLySsXn"
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
