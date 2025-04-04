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
    "2JwfKA4WJLN5Qea4kGcCJYPunM46WBGCBKjY8XCiLr156icDJhKwAkW81bkkLZYtiDBn4xkz8DQk4LfVRrb4VNdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZT61VsY74X7mJFhrF9Pscz7thC212gXqvn8oQVoLtU7PDctwKY3HpW6fr1TV9n44KdixATvT8h1pWLfK8bWia1a",
  "key1": "ezxKkfM2s39V1DxQwBYQe8xWQcsNuZMjgW16Pd2LWvYz8BKn58UNcxg6KDyPnv4WkLxCSpxCokxZhLHL3u7N6N3",
  "key2": "kw9ByjbUvXt16q95FhfERw4BQQFgTZtKH34vn8tdFGAd85ek1UEmkD1qaZ7Dy9jAS9awcap7cUvjB1zcR8n2Tju",
  "key3": "4GFZ43Xf6R36fQ7kbD6PUBBCP4nwG6rG7nqzj1iWSTiU3NoptC6Kg4PokjRPQmHjcfJ6gD7QPv2Lnz61NJ91UJR9",
  "key4": "3VQERFGr8KehxXfaUGjqBak6mKZKoLNLLfYou3xiWW4cFbf8xbtRzVTMHnVCSDctE3NkhNiXAgBQhmESJYpZvRYS",
  "key5": "5xvAmqEm3Gu2UKwPJcWeSYYfsTqcY8cESttp2GSuU13xyfo6o9nJsrqGStRL5qQUVYBxoXMDkfXKp1NoMU7DqqSi",
  "key6": "4wPC8fYRuJbNQbgSjwoDJVQ71QJ7oJXvdcvCupPwCyTpADVwMAuL1e1xD58KbQedEkjACuJGG4Kc6WBcCjCBqxB2",
  "key7": "4BDJiDnSsY9DsnMgs3Nc8LD2aj1TefcFcktZvkPZpRZuNpSpVVTjbF6v4hEwRmLSHXZRDgU6KLBRrpwdZ3Z4orDt",
  "key8": "491FtseSDJSH99PkFmHUoj7bnwsCKGXJ8TH28zspNe7hEFs9PmsEFbVtUCFfqtZNKkYJ6HMTRsczax8T1rRCVBFf",
  "key9": "4G6JR4k5wF1bd97KGHFoGrVmMVg6PeU4UA9RkWbovHmW2LdyBPpm7g4vJseP1JzkrCzGdceWf1hSSSnTzP1535b7",
  "key10": "EVz6mpf11FRqVN3iZbtcTFhankUf3pAnHXyWQML78uU12xkoSUFhM29Muz64pF5gDvAjojqBJqS7MumMh1x69wk",
  "key11": "5kTDFmRxtV1GsRHL8Pg9EiKNbZMvbHvPzgK4tVjAhFSM9wGdKnLXnRMm6sFP3JbN5xDVdnsmtxzKw3CHF96GHzum",
  "key12": "29G1jewa6Y8GHx5obBBCdPtQahVoUoMbXnkw16XDRRhufeLAss6vKj88und3K1X6tx9ZBcQDD4o8ZYEa3uqK2VNQ",
  "key13": "5BYNUbSmCRrZkrs4mMSxDb4e9ts51DykgWzbigCNqV6qHDzTfqxg1eQ38reKUzSXya5K4cgSMvnL31qLj85sPrpb",
  "key14": "3uTDjJxRJYhvng5qCb2fgZvX5PyYhmSrkEkQ6isktCBgbEcno43bgaYxD52J3ALCk2rKeXYfqXEYyowQQN7Ju6t2",
  "key15": "3L6kP6X41pU3GaMeRE3CGZQXB6d7BS75VcPmfdMwgQZbDXy9jPALzaZMCvN6U8HsYom8zCoEEbf6YxkAHSboyaK9",
  "key16": "2MxJbP8gnocxhwVS1y8JgZYVNBpuvskoHunbmdQjscHrxMzXrPjAynzvduFfhPofaJHDjiQx6os6tUUf2RX961Bi",
  "key17": "3d3L544ndBetcCo6aqiqFBkHfxJbLvVZg6kcH39XNSFmY8MPm22ttRZCwrbWYFiKLstRnrvhFwSQpvxPPz3ntPYJ",
  "key18": "3q4ZZTj3zH4gwQitmHayTFrBUU1wBZua5DZhfkYtFcQbqjJmAhE6beMwVvKP42NWEdQkCxpyQ2m5bqSFCWRar5kt",
  "key19": "JJaXRucbPaEVV9hVyX1dvt5DPNugaScpNAxzp5vf4Mer3qhG7QdeiAP84jE7Dc9EYnNZ5vVSoiZ5uduUNoF3axJ",
  "key20": "5JbvALqm44Bc3KVMowvZ8Si2Uk9KRmKLFT6yK2PD1uK7ioRh38Gk9gdXMFfXL4Nj3qXBDzYzZch6SHiK9m7NRfum",
  "key21": "2mR36qcCNtbA9YfS4MTp3uBVunjjJh7PzJ7zt6xMeFf9M6oE8zsP9oJS6o9vgmoo6yGMfpFnd6fAYyMoxJYMTeia",
  "key22": "5Tp5M32vBuxYRP4bxEZBZSpYzu5ZzVq6PfHzBgKvdKK36aeyWCw2BujX1pjThbJ4oK7GnxUjfT7Bihv3RSaeuBnk",
  "key23": "43mWta5RYpiUA4gUAYy2ZStQ3XEEvsmV5WqUNuuP91xMaDe4FuVB7WTmmrRrkViECLQxaTGK3mHqjkDm7VNufuHJ",
  "key24": "2xXZEHiJNS3HNS2jVeqReMCHdrVGCvtqsC1DCkv3evYCiacLVRRTh8X4AnM8EDTsSPTd3jqgu7ousBidTGCfaAMD",
  "key25": "4XDwCkPSXajgjt3M7drZJs7ZR7vEYBvcHmqjUV8y2xXJhqMFVSmgBnLah55rdJmncQf3adY1WPcfWCG6iBfeWuLb",
  "key26": "24RQ1Wsd5i71fHgqbxMDyPeFrPpE31mfhoEqXk73oEw6XmPcBB7LVFKiDmoyjnwtGEkooDRJ24uuZ7PxM9QEJFMx",
  "key27": "55SY8uiU575bi57pGdoEq8HpUTvsmffqFVjyWyo4SurNczdeVKFX6uuvdzLVSEyjQLfnK9HFDgbJX4uu3peaFQSQ",
  "key28": "4XmyD66DiBPo78jLoPGbyaYrsNCN5XuY4bTdJfQ1cZ3SRPBDcQ4M1rhnP2uDx5SwWyz8YCS7Pm69bE5NRHygbLPG",
  "key29": "28F5Tqj7k9WLHXMSAD2fb9SfXyiV6DwjRnVhYhrzfdVHCkXHcemwZ8xpuMePDmqRcKYqctYyCWtpiYmkPDUKuGx4",
  "key30": "4WtCcfXqkpELd2yUc82C7ttRAPRL3m4vVLRcQe2FHX6waLHi28SKdPhyHsm23a5k4uH4gqYJvYe14NHrPTP75o7a",
  "key31": "36xberGFJGVPzd5wgKoxSoEofdRChkExHG17zgcAkwnRfZVS5HPRM59aPYRMUh3j8RbZ6gUhLLzuWa3axDoKJDQK",
  "key32": "3oQdppbkptDVrp3E9wT5V4iG8jFHMiZ3eZWE6NytqQYZrZr9BpHgsQ3ziT8fuV9bPiqNysHqvCdpryNcLGwRiQG",
  "key33": "3qSB1VLRGuuQpWHUU9q9hySP8PhjkeMCLqHr1wTSsc51yoKWEFQonzqhLEYCko7Y6tguGWKuPK1SMBekz7FYE5G",
  "key34": "sLaFEGHkgdpeqbqbZBQ2uoqfoJh8s8Yd6F3iA5oBLJf17As9zHTTo94gqSEJwMHnh5Z19FJtoWwzKkQg5eDYPE8",
  "key35": "5QLiiXL8ABYNoEanKMGASpgQPT4wNcsz5HkPHcfuRJGKpMp2aHan6jWbKqTXRTU3Qu7CHAmTUhsfHgq7QNNYDvTV",
  "key36": "3JsSrWBDTupXwUt5jbJKsVb84uvEnALhr1YAmDuJ67unqPuZY5DmV3gG3fqrmRYJfQ4bHNU2ZeeN8EbZrQZ8xumP",
  "key37": "2UvL9WkBdLBcWgXuywBmuYRcmHbhZW2x5i2AF4yNJgwWkTQh4ACjk2yYSRVUvULkjHqPnTJJZDraGNW8YmFpwJaw",
  "key38": "4wJ8NNELFLGBcTYV3dawhnxoav1GWfDHsHweyqmwSjPqKSVWh94iRQzY5ft3MzwGGbtAYQ25tA6bMNaur1jg5jR7",
  "key39": "52eLSt5KehUZqf4eqV9vwXM7Pnyv7uyUpH64Pp5z8wh34VjJcg6JvHustxYA5eyk2Ztoyn7iypvniU7bNBoDJMUu",
  "key40": "3Ej67As6VDrnLmAa7YgzncvqHv8o3bc7wGpAm4b4NBGWBx8qzWwJuU3Fhb19BLBTsLC1wfU25XCqwoAPAryrhBFK",
  "key41": "4c7KY7hvwR5cziPFX61gCSLzHMvMFKVBuZtj8EYQBARpQokdfcws8kQgsc516MB1dTeEv4P21nz4fwAjRDwbj5HN",
  "key42": "4L2b11HSuyPtH7Wxth6KT6yiypZXEJHgi9TYdecMndAnW9WpKCFRJub2ekC55khfhaDeuz37YdFzohophagmhFgF",
  "key43": "4FRR286CeBxiLMdH74Mfbw4TQ6fsWmUbKpPN8ictoH35FreLurbrpVcXtK3tVdx4sKZ8QdjQLS9rF4r2D13Xx1rS",
  "key44": "Hy5aYVsuNvULLG8BJkf6zJU3LN3G83eAmDmdFmgQHRLk6Th9AwJSoATeQD4Asz9tqb9a8CNCcxzVJBxiPcWrjyW",
  "key45": "3mmKnBik5ViUy8vfQ8NPFY16HH3PyfQ3mxBYVo9jjaerAM3rnLVRZ95vhf3Vv67H2S4osS49AzTE8vpE4FFJRDnV"
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
