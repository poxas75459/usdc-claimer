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
    "29wBEuFaRerw6QLUoAWVm5nsbFii7WK2ifrS7c928wPErFF3QEupnrUe6sU9GLeZs6MKqhN6LtMGsvC6udzTCk6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hCbeovWKmEjMZjfdmYP777zYtuu2R8Pmqre5YLMbUyQ4dVxxrXgngtpVNB2HwNsMeaM2mp2SczkjWBGGxw7zQoG",
  "key1": "J5VptUwjEm7wEmaAYhrWdVTjStQjcivsFos8PxevSthKRKs8K94jUjMj2k5P8uNxpWoFgSQyWrVYP564caVLUPk",
  "key2": "abRzCYJ8PRjrK8wEKDU5hvBJtbM6xDwteb1xhCqtgqXDRT91oCR6MAWnZ2qVcEzL1wSDoRV3ieFvj92LAEEdaD5",
  "key3": "3xqtuwvSqT5BrFKDK1Tr5UAr7Zswx83H2HCk4G2otFxqGguSsucSbfonUZVY45iJMqAX8zajQTMCx9K2jRwh5bGU",
  "key4": "3np5un7d1baB1Fap2achKwgZFGnmBzmhkPQcN1HmRcxFZ1ti5JLhwEjwrmmbc32fo6MB99FeD7DA1CZuTNRv3G7J",
  "key5": "4rUatNpHL5WVvJrCKPqub5d74xxQJ9fWzLhWVjvY8bmW5nypEsLbkBWuGzko7viGLhMvVdzR5zsJ3Sn8dZasEoLi",
  "key6": "3D8YgA5aWayLi9hYSvvDJjb7WpQNA65pSBBBsupWQACoNsqEziBY7Y2R3cy9kGVsdQqihGGHfZMDPvR3aTAhrEbb",
  "key7": "uHP5JaBUxvdoyr312V2tcryhdePicDBj6HB7upLTM2BQKeeaTXY2mmLbuGKxQqPnegPwn1JcBihMJwuEJ6sXaZk",
  "key8": "3PayfDrSzJj3zhLaR54RhZtDcH2vHh6sf5vyMXZddJ8fWXyM3yL9vZ9rVSrDkNrVAWRcjMjcfCJE2beBCEakrQQw",
  "key9": "5CHxcq68XPtXGn7qx2aGDfMvqxVxgNCx14jm82wPRXpi399opkX8JvRQcXwU3cRe7c6TvuzGiykyC9S8LbKwTgCr",
  "key10": "96AwtQ9mxCbMhcTQCYCWkRwQ6dYpPc5xAVBAJC6jUhwviR7LWR6PXVjsfvf1NLDf6pdrjWQhTVXrubEx7NmPGmf",
  "key11": "3ewahHGcxhv4gtA4roWDfWe326aSkmw6iQs9BQFDoPDqpTCG7eDG2dpEs6qPnCNj6Jm8wB2ZAtyLufPKFma6E4mh",
  "key12": "G1r16KJd5aitr56CCJvzojcaFDWjw2kBWR3Nx6ns3yW6dVYuiQTBzKR4mN6atNjf5VBBtYbgCkJYeknxDDvq6dS",
  "key13": "5CfnR6mU5jBHDJrvQr5PQ7idHKq7V8hzEQbta5R9U2mU5dgWQEonUoZuArKPJH58e3C8QXYdWekJvPSThcAJgtR3",
  "key14": "4dw8gCsczX7LsuNz9X6s6xU73k1XGv8T67G2hhMW2eKJZfdJaBFM3pqQuLJhsET1YbBuCE5ATZ6qMgEqrmsojViD",
  "key15": "3zMbpDNNkQWJEWjvSpXhJ1tteJ1fqgQC7rNoF4FR5uQwDdiLQ3N5g88xxw81uo3QuDcZzJKQpX4SbmUWJZVCtsmC",
  "key16": "5d6k56vZrwjpZVTXVF5cxgreZqhtkvdaDeznJx7WGGroXkCKxE9io4WdG9N3fkKeaeRxUuGx8MKmE7rKLJ2a64xm",
  "key17": "9SvGt3YkCXrZmiW6M4xEySc627hoRrE8WtxuNQwCEaX1NE8Fmj6FqjpKeDDyywZu5JyEUcXh5gHXrNKufkVvuFB",
  "key18": "3j344Qiwz2WSkjuW56ax2Dfk1fZcX1vFvZNfTzXPY3x7oW1zwCQcPr19nZT3HDiGnBk3bnYYaHE4hTKAH4rd1gx6",
  "key19": "2NqKbGCpcPgqRt2xjc1tBH5aGCDR1kkS2YZUppUBu3GSzsVFRwguqT9JZVhBNC3S2kCWVv1r6AoGLc8zYFKP7Arw",
  "key20": "Em3JJ4kaUQvtGfyj6vPkzspZfRDU8E6ZsM6pKWUMAAMB1jr4rSWcE8xH3aNEhWREQ2PmZXspjEnvJjLKnpuY2ui",
  "key21": "4FgG86tf5RTD4rJs4vsrukw6BaPcmt3pgw83gM4fCNZLcvc6XRaLPSbvSDRzgZMzADRtLgTuHVoM78UD9DGswFzZ",
  "key22": "55HuE6JACJTM7jjRjZinBhxi5mhEJxCijooJoPrrGTDf37oBQ6t2Ffa6c7UA6tpuPdXWsBbKaTL5yV6udRDw3Giq",
  "key23": "5Uuo54k7yEQgXZUjDhXACXDa5TDhy8cu5y5q7Pqktq2DLXnJhoCgvrkWscCmeWiqPBpq8qaenBMxNn9fM61w479y",
  "key24": "cCn2rkejihe5qm1D3jQ69aMBUK2XpNzXeDixWajWHVdkXj7ZHukRheD8uYhW4Wc8KFo3qR2BDdJAuJRA2q7x91L",
  "key25": "3oEfH2jDoyc51Xx14n82QcvCHJABU7JHJoNW114RqyCVZQz6D39xtrWag9DSmymQPZPWcbiLn3ZZTegSxYFricCX",
  "key26": "4TxMk8rZUKQ7dHoWYchJ8m5sV1nE41etNuN9htYrrpuPiTu2V9YtinWHkZ1CfQSrYNbHP8K5tT7BhmMbwiu1VUBc",
  "key27": "6CyvNhmsEnYkZg13Qx4j9eeVst88nzkimzumeByDu4ygE1dv2dmNTy6BCNQR8HLqtSgdGeXpYPFJBrShdaysiLW",
  "key28": "29dCWByf8kytY6MV65aU2p4VrKgUuvT5PFGLEsaokCFejzTMHALv6oXVE8D885mQu7KTSkg8c9hs5zMHLubLhEHR",
  "key29": "2HrdHgS5TuQFV4cnQq5oEsSsNdejikRiJ8u2QDRrGo4yDEnUyicBzYePCnY5bpZTwY3hxVwzSheHwaYijCe2yMnt",
  "key30": "4DS9cTb5wvQ3E5vgXVNCqpCW3YJxUp84g8c1jS8FWyA4zdwD3jerbEGPhud1cRzZCZaMAVJtnqmFZWv2Q85Hooam",
  "key31": "4uGhEgwQpH1c8HjQe1eRqPPjP7bL4PFcVLWgWKEcKK2yLBAg6rx2ChUaGJXdZJT5uxGoZDwEsZs89GJr9sq7zTsQ"
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
