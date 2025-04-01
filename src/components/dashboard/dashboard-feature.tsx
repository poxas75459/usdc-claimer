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
    "2C9Lcju9GpcTuNzvH5dgjwFc7DkeggUbaJXk84GAtdiGLBjyZTRgmHp8yj1SvQTWUwXTcvCWtEgDqDSmo1HDEVLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wEyyggtQLZt3ZjMTJaZQmoMVcFWzu9muu9wS4PKAkhEsrTTd56JNN8UZ9WpczzJtBUJQibuNwdeJdcGQRpzcm9X",
  "key1": "5jsoWKHbafAhspWqbgZ7GksPmST5ZYvTk7w3TJ5FYbByuRm2APVULTZ1hBbWd2LiRf6vVteAALNmagRrubVEgzAW",
  "key2": "QHtCzc76qJziDmj3Uzt78ssm2s2c3ZHTwir6s6U9cmZcUgiNnxvRXcqmxi4YmbWeRnL7esrqBafXxueuw34Wat2",
  "key3": "3ymBtfRQsJM6zbFJyowLgNm76CWwNDLa944q4s9Ku9DnJ2hE3XUYYKmLq1mdnMJarvRYyXKFU81gTZbES9E7PpSd",
  "key4": "5QMGoADLCNhxGQgmxuWmRyGBHf38rzTj4uNYud6rVijvUKgv8VYLcuB96oucfuiVAJVCkLE5rsL5hAW7uh4MKfB7",
  "key5": "3J79S4JWRzpKteF2NFN1iSAErS4Tcu4yHsyAau74ghyAeStoe3GJM5PduSNN1zmHom1qjrHTgn5pvZTCBYBDqs78",
  "key6": "pnW5k4RAFp9veVXH1VvCD4UdXwdpqw67N65VpUr2N2frQuKcLbfjVEhcpnURXL6ErwNtw6RUGME64QSJudtzBvb",
  "key7": "2qbTnYgqtGs4yumtMSqvWyKdkzr3WvnKAKEmZcZm16SUXGgAiMr4jg4yACgs1yY3hZ5B5Xdf3gkYPhBdgvKLWqUb",
  "key8": "4MN8BRENHoSwhr9osT3SZH9XA6DysBxDKFMoLTnwb8gbn38DX3Z9Nk2JfKnxNmaB6ZCzjKaWE9dpkaDtWE9AAApH",
  "key9": "3m3oFgZfnWtZMLhs4Xba2D1ALmgXsoYWhdN5qcJq7Yv2KurzKdyofrRFUJstzUgCRiypPzBPapTVHbZJNzKLS5S9",
  "key10": "44GJemGvJNKm6fXJrPdrKk1aDyjb3Aog6rS9uMFLGuh8C7K5YwECAzX6fWAoXnewbYT61pfx2EZNXnxsApoCGbQ5",
  "key11": "3hxaXPsqKK1a2xhTzZgSyMaMyLpuy9tHhR4XSqbxA2NVx5DzutfBgtmsrfrQFcZuUQzYsevfFnBjsi2NksX92E8y",
  "key12": "4guiPJ1SumKZhFuTWA87WegyJMLZcLbzrdLHnZLUUwv6gtSv8qY8NNWq1U2uXg3iRDjzLv9JTYGGXvqDEk7FcXYW",
  "key13": "5VoHypM97qSF6MNPVUBzBSXdSNYLjUjwhFhr9SeXGqFcvqtLMxQteJRANBseazrQoEFNSwurCyqRyWfhKA8bLELh",
  "key14": "5gWzn4GFUA7VnvxTcXUNcwsALxtc12teXjAERnqesaoqX6KSUhQCG4ZzCEdTtWHBGi1r4cXjQcrHThQaUWzMAWCQ",
  "key15": "4XwkDzCpG43yUo2Jw8kc5ATabSpzXozkbKsSzTsNaCYKozbHw119gjEsw4uqWW9rY4dDJqLpKNhrFsDAbGWmXAUB",
  "key16": "3XLqFuEmEqPM5rDyXjgrLocFEBpi44RjeSHGCEyhxzmrtb5JQr6JHSvsLFTehS83hq2Cgx3srftQD7B77wf2RS9p",
  "key17": "2W126cJws94TzRDgHW2E32ebAVAZNSC9TwTSHKTTXCuaBUkh8kLph1CbSnNvP8PQYUvCjrYRf4edqW1VZNpjpBq1",
  "key18": "2DTr7j1pBGHj3dH6xNFcVRP2MJvCbYuJZRLMQRzHKy8uYD2V3cUaDV8Mr61NJ87fBsqfBirNYe9nSNFAN1ufqgiE",
  "key19": "3gygLXQQUh5U9KQUsP8KiWQ2N47R77jHPmqCrT7W4YT6PSNjJuy4K6WFaLrjJ5UvvZsj3a2taM2mwshsRVkDM4j",
  "key20": "3Bdq2zvGXkruJP8oUhsxYL4Be34oGaG1Z1vJrX6xqJ9sTdCR4pP6jgGaVktwo8fMbeE2rz45RnZ2QqMqsLMGKXwX",
  "key21": "24TCouBe6X4yLbuBWQbiZzQWejkeTUtZ7GyKz7t38d1tLjq6NoGYKz63gLGngJfccknv1hw3h1VWHHM6EewM9CsM",
  "key22": "xS1jFxugaLQkX9Wa6GbR1hD9KrDbfsCUwyugrsfxuq2fUuxsxjbsfeXyC3VRM81BuAwR4G6RSykGKKY9XwrCLR1",
  "key23": "5EtvWXGKKz7t9CB4iVtYmeATLzsdDPBSKrazFB7j1XaES2npnTdCcfsLGQCbPoMTwDnfvHxX4NpAMNMcinDYk6kV",
  "key24": "3mU7U7d51kqNBh2YdqyULNmAk6T2q6XDd9jq2Z758tAFUCHUXNHvEeCypv9ufwpYFHs5jwcRNZ8gcEyHYHP6T6Ti",
  "key25": "2uNYNapouRVTLxdBfau4jnQAntQS3MP9LEMwnfn4QrTbboHzZBdR5cXjo5XRENVichzteu7YC5BKY8P7wKgGPuJw",
  "key26": "32XtsAMHiK2A3bM5Kfi28oHLziFVKa6w4rxQg6ZAzvQDmumZg6PP9fwxUf4JRWp7jYNcT5NMRnBQb4bAFreUGNiz",
  "key27": "5qzFNYiGgPTLTVjBMe7MUkLUaYqb3hrtNNhtPp3qeicmHSR6bRk6HGSpumPwKqp1e6EKva9DzAkppU6eb9uuCLpy",
  "key28": "64mLCggCwYTJdpqTXZ5qBPeS9wk6DpLLgBqfBmPLmZFpHGD4eVYsAXn3vunom4r6jPfMZLXRPZgip8ccwnk8ssvj",
  "key29": "2gnhvMZTWcARpVz9goHQRUgbkuPNEab5P6NC4GLA1zEWZacbqZ6kGvsgJFgKteDgzJH53SAneXoKRuqGu8JCNMk2",
  "key30": "2EkemRLbkNNBLoNQpqfeUjvY7cwi1mtYfmcegQZGH3GZ6VN4tJjGtVtPHoFwNnhQejnhSboLHmo8w6VgE4JF7tuo",
  "key31": "2QNRnQoBaKmjo8xYKYGXLamcDMGMqnGZc7QtKdEbTCn5vqbr3EAuXwzAXJtCZ7qYipKmPYA989BtVZVqRCo4fMjh"
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
