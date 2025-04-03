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
    "22uBmrCqe8m2r2dft9U3NoA1nmEJZoqpNmahTKDrA7e79ts2R5HYbxefBUbfRYkSMTK1WC7947C4LUzTwSDETAiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MfeDuxzeCHMQQAF17Prk644qQqrTPBQWCB8dNoyHq4UFFWhVT1gNmP9PpVoGonCJZjj8ATuJEXwMm2pGDfKjvR4",
  "key1": "64aokxZmbSAW9JTR8RtuSxBNEsYuanXmgnqEmgBm252tAihJyYh3YQf3ELZEhHd9Gm4aF7Qp6hEVyXXGRZu4SJfZ",
  "key2": "3CzKdbA9vcqMgauxuZu32sC9opRf9xw8CEMuhpJyhxYvsaf5hFJcz21428VcxS2d9fzsXcg6MZmLrEMVHcJnSure",
  "key3": "5W1FwmpCGN73hoTxdMuixVtVW5qw2xRP8UfUjekEyE67NRCcv8ERhX65yHMBX6jhAdNnDHNh5Dbazb2DHU3hc1Vv",
  "key4": "3kW3LLtvH28GLqhigk2wUWEjABfGwWNGnNDt7P7NTtgRjb4RGu7xF33umXEmfjdPbFWbmM3pwDK5LiLLRY93vPQq",
  "key5": "dTPbW1uat5qboN3JeXuJbNg8ooC2avb9t6PE8tZWTQozEYmbKyuRdKDFhgHTAFRh77BxDaRbCAt1S6VdqWdxf1v",
  "key6": "3MCGfzVT5oY66nF39gLQbUAQnTkEjjcnngJKtp9jMXL9di6hm2jgAuv4qgjg83ubGJmGNkidm1qWVyCEcodmwstu",
  "key7": "vNXWPcpUxeCeH33PEHe9udRrZHLzMhKuP7eGuJtxFHBkoN6Sa1aoA8HYZ9tGrdUp4XAW7rDbXm46o7BCsKWjyog",
  "key8": "4pgnJK36yWp22XebxqnUZJ7xDYnU66KTDhVrx5Gsb5B4xdHvyxaCsrxLzXbBnXQbNFzJew9jaBNRRixdEgKPHxSi",
  "key9": "35D3T7EM5cBcQ99hpQit2xvLgDuTZQv9Q7HAnVtzh16ppRJT9yjU9fN88UuYWcjziM3sh4McHoRw3hLZTmFqHPAf",
  "key10": "4SaWECMzy1nEEbqZ5TJ6KatzpXA5M6EmNucdY17VoghUdxfQW53wjSpqnZk9cThJiGeXLQJdZzgVGdz76Gv3h5uX",
  "key11": "4DRRWFwMgNcbZF19ff6PCjDiBDHQdXyW2nE1ZvMMcHLK2ha2fa1LBpS1bmEuE8Yfo7eL5Qr7Vc3xP9Mzfc3Hq4Cs",
  "key12": "5uXCuWdYULG2FRKts8NMi7wSxkJWvpmTEHfbtshEFhRk32mcvgVtRGBdHjNaY62CWhqmg8KZnbRpXXTNX7JVzh6f",
  "key13": "2tfSzuJ2inUVpupYaNGPpxBf4DZAVWd77YCN23Dvo1ixNQ2rhPmKA7h3ddsKC5GNmWKn1f1L57s72xpUBftaamzi",
  "key14": "5ZThfXVRQVH6UTtZodYiqPuzPzRy3dV3vR9B25Zyb57X63EGxfWU6GwWdXGCqQFAZXFdesqxqaiGe2yC3hBZYdGA",
  "key15": "5yNyTr8Pa2vTJYAQr2wwPbzepdHFHXcfyd9Hr9B1hNSRyyJbuj6vnaeJCaCf5exQZtpZ5QXj2bCLKcYRpUgz5ZZ6",
  "key16": "YrKqvtWL9fb2dZ3t7YKre9Bthh7gbMTEt3sKg8kLoKiLNfb7cGnHJzab5tsVGt1TrscRFHXmT3GdB6RHHXBu95o",
  "key17": "4QQMxNxRtJRosR12jWd5H3ykuqHJsRQZJfPLRTXpSc8jQFQjVrTvPgH14UFSfQBnHJaU5kpa9v8nM6YH9XBbnYnw",
  "key18": "remCL6cKVqkD4e79nR5uDgGFQ385xKD7nfuHJED5QLAgHmw6Sv7tRnmNZ7FiSn8fXt22gbNM6EBsvKZgQiLKvZA",
  "key19": "5pjev9694V5kLJKyVqjUyg1dNvLFC8jgh6CNkqTtm8wHzprTJGfSvVpVVnJhDtPQWimWP4FKRbAWXwEFY9as8PXn",
  "key20": "28BzhGmcYRtLxPB2vtGZQ7s7VWG3WWDV6SRFb72CZ4YkcQeYbfiCwFjPtCJDifNh4rGKfUhbxdH8cWUet5nbH6kC",
  "key21": "4bFTUr6AhmrqJmvkYG4xLciKk4LUZ634UNLfnTYmUz7m2jCv6bU7ffUfqMHUDY6pekwsn4DwdrBFYkA37XTactrH",
  "key22": "4y87VBYzt86Qc1yiQQzNqHjhpN7GQxYHjKovGwpGQfatL5o8skudTfwBfAMkY6wkWwAxAg7nzTqzye8cLxV5gv6B",
  "key23": "4zip19xHqWVr9jFVoD56QbCDix9HYMeUMLDNgHVAymGLJpwW2BGAdRnFj3Z4SNJR55jqQqAKiDTKo53uUCZ1DMs9",
  "key24": "5hhmVsV8UgXi4zT9DtnKRVnarYGofmYEmzhHAQGg81B4tj7AChMpsrUvhqEQakcmsvKiWxwem8Ga5qjHotX4zoFW",
  "key25": "4tJsnwdk8Ed7HMWWevaxtZLJk8CriuPePeR5xCszzgr2bVYykoL5sdYtnTWgmqEP3P8ScXdanqoWYSwkzTQ7Ys6D",
  "key26": "4LJwDB3xMU46v7Pfzmiygg4isT5FNuheLMziczz4kFFSgUSXgTh2cKWoxsE4mTwfHT8HJFvmPk6nwAem5RkknFdy",
  "key27": "5haHvBiXcAoYcxsAJm43hdd1iobtAZcWgwEAiPt1cYaHgB5TU2g6uR2JyHKuTybuurXHNq37aP6sqenVXBKjBhvG"
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
