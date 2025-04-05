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
    "3QK3XoPEo2wqZZu1rGQostWmjHAkkPL7Sk9WxG91pU4zzMCFCrFbUopcegAk6La8Ey95fM8u9HDdGeVNmADk4ZkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jnQ1rU2EgJxavqUKLRyHBoX3tEmGrxMocd4FuCgnaJuQYqsQ52uq79tTakbYxSeesaKqsKxvYDYZKi9NY9Mzyvz",
  "key1": "3EYRXVi5fZcY8pqwqn44JffJwAkZaMs8QkccGh2iaA4n7ReRqcCxn2ZNAhh3bcCtfNAgNWNGMaN3QB4BiA83BJc2",
  "key2": "5TUFYAnsyrrUjNQwhLt9ZphwPrjxhXWAs4LKu2pjhN4RjjCGGMWF6qTm9JdaaRws6Lp6hT3U23rDUMruwq2iP1ML",
  "key3": "2LXJhVwrVJMkq3eiyuo7XnJwm6josaGomhfVQNHVG9zkJNwCsS8N7LxTWoSDE45SCW4MLAwVwPWvU8neRt8GXhV3",
  "key4": "4WnsgA4XXfQzQjqBqRmMKjFKXbQ1fKaXEaLQSZ2jufKb4nm5tzizFQGjrsteqMQ2eE8x676kcB4SmAhkgHCTJTKh",
  "key5": "5mPjDgiHtwywuVUg8gSYQmxcppRrwM777nsQDjxyrHzRBez1FHuvofpARPf4wotGqu8QDPu6nUNCoFcC5U8M8dKc",
  "key6": "2ZC3moupwujv7hkeazkwRVWbcVUwqcqQb776NkWsyv4B4uRLARrbMSYGYWZouq2WQf8zRu57AiLekJac6iLm8y7",
  "key7": "4VV51JLSBqxsTmBWuerbqZ4BEERoP9ieTg65X6UyTboP3NKk69qzVBL9wusJFoN5YKnryzoYFVd5yTcNwubjv1PZ",
  "key8": "35xP5P8JFBYE7UMRR1D5yfQBft1pAwY3JRuSchGuVSq9xB2MzDxBmjwKQoaf7xnyJnJRe9W8Qj5kT99vNMG9Qntm",
  "key9": "4NwjAN9r6YBQ95yREPv8gyNGAytyHBavHtTTpbRjD3nW9D3dpMLDoC4KEU1k76JmZfe6V2DP8Q3dKVk97aj3HtqB",
  "key10": "2kBwwgXSPKVJWpcw9VBcpKujwsNfYmhFWPpqNy5B5aXacFrtwuhjmgMfQWsijEbDiJ5Yswq9vePYoGJ8BZ4c22yV",
  "key11": "5BPbxMZLcRcehyb4ZkzRUrw7WishsXR5eJPtbwmFBrZeZevjQeEP355wEnTrtJjiehkS1zXd7bvhtk17aT9ZAZ7S",
  "key12": "2AUyLpXYDxEsBKqgkveS27hRqzik6sg3oVGzDNSKMmKSds2AQqkDcT2ryJY7qggnoEw5QxfLGw7AdQE4ud5mfPPa",
  "key13": "3QdJaHu3cqm5GE1tb7zKXtA65zrS76rsyoLJ6CAxRtRAeYdVEZLCJtXQWnmokvhmynBFMuniXAWu8SkUtaZNnwRz",
  "key14": "618iVhRkuvQ4rMADv9R4AkdSw3deT5CtTWcsH8qyDUUUgTr2MLZzKCXoJMX43tZVhS4ugkMJEW7oqvCYfHhwL2Uq",
  "key15": "QEvsru9hk5p4KKtRf1j1UXtnH9TaYeojbFVrdYgXtd656wUq9HVz16JkzFWC8g5CiZFkRxMW9NYw5R7GhUQ67Ck",
  "key16": "3XaVQjPwAsyLeEa13po8e6xMJWQJ1t2cZL6KjEsRcEbHNGvgmWgQ7JdUAEkfYbTLp7FBHkhKtJdnEcE86xNc4pDq",
  "key17": "3PNxaTPkZbJPLnmFpF3oZNHy5JAzRtyHxVa78wUb8d8Y6GnrYqLgh3WZcEepdGie6eG3dLSUncAtFuFKiaNTUpa7",
  "key18": "4owiT8ydYw7RJCKctVcNZAYz7jFNN6Ty48zqUjB5eEQT8AwNXX3XG8SiXeErK4Y36FQjm7hXUM6TEhKXwD8zYyam",
  "key19": "4uKUvE6WLVqHZJapWpvJzVpH756SzPBj5nxAxzHjt6ZBXjjZkjsyG5CweeKXJU3q7NKsMb3wK8sbY5zTdwBcsQ6o",
  "key20": "5YnLfQ5DvT3YnmutWQSR6sSqvSvPw6ZsojhyhQ14ufk9g2dH5ViCpzjtMWRVgT7PJHXjwGVuHCNvkjJF7QNS3raX",
  "key21": "3FbvoaQxzmHeDB8BcBQSLtVpQv1kWSYMJKg9BUbWHX2uRCoyAx4e33XAh63zedyKWGQPP5AodFVuM1yZLWymermK",
  "key22": "3aMoDLdyBWurUHUpdKHkmi3w8pSmZ7uxQi2MwreyqPVNQnNnisK9cHmeKvip31Eyj7n9aywjrUZEtVCk9WYEAUBH",
  "key23": "3Nj9EPM8TbrtEJX8vxgZGqTN56WsAmgtsrQnbxJoWAz7hwBZWnhNN9af9TvHjpG2Q93fU6yH25zGUxG7ZUPh9ywn",
  "key24": "4SdakVvZ6t87bHweGmXZUTUG2cVRVURGVRNfeCgvSErW2LnapS94rTHC3ckyAU6rFLjJqLFxHKH8hbF1ix1pEDXM",
  "key25": "3MPRRgq3VHwCatcUFXF8QAyGnC4UDuGPez99VAScmT2cCXcLXRcFvgcdyCgevxzXCasxr98dBBy5Ni5WCyH13wNv",
  "key26": "a3TnoZiGofD3DRSuhF82M3bBjnCmdpekzee81Kry2CaT8JQssA9qzpK6EM9tWqGGvTL1MtMxMXS4Gbf3XN1tEiM",
  "key27": "XSbCzX215ZGyJ1pAfMM1KyEPXPHrGGG6aMczcegxK5JGio6spYjQk9HBqoQJur1TeA5MeH44afVC5jkg29aX6ai",
  "key28": "3qQUeJ9khSTHWPx7g62pzsRw3Gn6tWiddUNghH9YTSVf3f4pNrFz862U1XetoXTwzcLEGwKdLwKY6dAQq2XuHgXZ",
  "key29": "5h9KuGkfinq4kvNqy1Y22HNX9wcocsvUmHGpsbGg7Yky6Rqwuvw1UUNtGNHFu4CSSuKbR3J7wgoVRuEjZv1Dtb52",
  "key30": "4pogsUrRfyjBRsEB6UgYSCvduEHSVjpCn3KuYn2dVQSK2ya1t7cYuMGnQ5X6Ruzncc1y2bPm7DBkt1LoVm5C4PXr",
  "key31": "3KqrgqrGvgkrr9oxintbani2dahbHS61dKK1Ls7ZpHdfjx8u8RrXqBiWBYBj5y2qLN6VANhf5eusBMh8xJ7FngMq",
  "key32": "5E3ryVgHH3EBC2jYxw8bJHYT1fpR6oVQE8BRDXr9tY3jGXHXq219HEhn1AB1gWSsBFLaB88be258XcrQA8JmbHXW",
  "key33": "62ptnZWQgcKZaZZPtzifGJqAyAkBw3eJvG7aEi1MYa5z4r2wMqrHcasxiz5x9ziXMbfuGVLeVPhnRRMU2CrHSgbD",
  "key34": "5vcMQRvbYeaKXQtKJnHL24YWKLjeBvX9VRj3uDmLHQ9AvRwFUgFNqKLpFmnidBi2FnMRwXWgz6T3zzbeDpeuXAms",
  "key35": "4Q4prxyRpUg6R5SwWXN7cegcrV6YmooKCnd8Cr6awegqmehvdMprmV66VcoXfDEFaKzcXWpDvPNUkknr8t7t2ZJF",
  "key36": "3oenvyg4Esazy338ucegLKqg2Z9jyDSPZPNo4ixuyUjKxax9U93eN2RqRDQ8utR4w6J3F9vPxxdB1Cv5uFUQWSF3"
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
