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
    "67WgpVmJNUcqe3HfJxQYafmTkbkMvKWXJsWzkQA87Qe6WGCoQbY1iicDDV4734oPgdYiAnFgqD76KaSpBpfhT71k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DEzJ7sCnpqQQHVnrEbMPadGPB8VLJpF6nZyXsssUJWDAVqabmdarHS9QcWmx1YFkjEmYApD6AuxXmMpSYsGnYuA",
  "key1": "5hfCKY9xU4u41otJJJEq6Z3MNAW1UUGMXcytgrofGyey18wQDSMBUeFJVgFBvqFLb986Jr4RKGcQLS3v3GJtWtyf",
  "key2": "5HZdWaNrE5gzcrMHzT9BwErdkcvP4UQH5rEdvLn1QrP1npafc2dzGoAxmXMvejsQVP8HMaiWb5FxDKyGSD5x39iS",
  "key3": "2L73tfNCSAie8ryYLucoENkgAewgCYeWDBLVUEQmnoB9yNJAdCociR88VUztscYMsaNHKKaymJfT6f9vPd6HsQof",
  "key4": "C8bzSnZgRjmKuhQ2foRDQbWjumkTMvJuzv1zbd6M5PxNfG3gBUkKmYD8BcYjms3HTDMNedYrDsWkfaVfChcZ6ht",
  "key5": "26hRrJnzPVLnTKdYrZWZjFNfwgJU2eZs9SL6ncjURFiGRHkzX85nuKDW4ewrMFcdGA1G51RJgo5VguqKJAFuKSVy",
  "key6": "2qJ7ussQMcamzrPgxtmCVYNJA2arTangdS1LJkXYxQc592p8H2mpe8FWaowY17X9cEf5sVi9EGjJ6d5GijAkdpSN",
  "key7": "4wL3ACk8jmRbXBhQ65SpYbJ28TYt6VYgHA4MDcrkQyUt3DmVqCRoALP6kGJvbGobRzVc5yqPseHmfMDeo99or9jh",
  "key8": "5CMoAeUZY7KrDjbN4UG4xwnoQGWWiYnKZiya3nJv3upzqZgjU2y3NUDuwJemqteekZgEhy2xpGZkfKqw1Jk1tAJZ",
  "key9": "3L7DUyVp3j3GW1py2pqbbZBGTG1kchDafjBfQnfvLAr4RYjy3hKCDCzmMjYiMdGCwN5G5sACjrPudpLkkwUeDevx",
  "key10": "49CqRXdQDhwUjkTW3YUeBdP7EcAJ858SWBehQooQqBUhFPWFz1WmGo4oEABC1eULxNaEEmdSwavG1WkL4hzwTZ5x",
  "key11": "4HmNe2BvacckEjkuCoMz7i42UmRPw7hBTQSHLC2KGqcqs1t8drixL23fm75pc64VYvzYMEShGPmNazkvXEBisv6C",
  "key12": "3RRmVz4rFetz3tfPjsbcTfaLYay9hfbQz7fxRM7GWNDxK2EM2opsnB8FFYkKLe48n37Aviw9Wot4aXmXUSsnFPRA",
  "key13": "2G4gHyRwTwTgF8zi9AwE2WqbDiitrq7QMsFS7WMpJ5KCKmQ7XQK5dYUqnEXxjt78A32G4uWkFkUWvJeVY4vSWpxf",
  "key14": "5jscdSGP6zLdTJJ4G3rsnqJBBKcFcXdhp1vGTroXmdtPGMX3AjxSReruUkj1TJh6bKcAFyJ9todKjWZpJ4kEtNq5",
  "key15": "3Q7PprFAYKZJkoVtedzSbo8cCosrHEUcRyNe75qU22j2qigqYurb4vHGEikAL7Rh8SBvs918PBZcRTVidNi3m9ny",
  "key16": "2wsahmh15GmXth5zsxUeauBYDKL4a1rhUogcsb6RNeGcHPmmMAjfRJi6q9uzPzoyFtJfvMu6EF6s6FPRQnyoi4fU",
  "key17": "3YnAVNkrKGJYWn8zG5p8u1EREpbqNHWukayCuqgR7LpXXmPoEHiD4uyoJA7NasA1EwaAj4ZmWERxcmh4gK32tp5T",
  "key18": "4XHqoK3iwtwoEx9uWeTJ6EV2Snb4W8oJWufrboYfxDo3NCaEh8iE1cK9ataqmxeuCToMFvNBCahA6AYLQvczgVJw",
  "key19": "2K9j6Ue9yW2chDj38Zq6hujTbcW7UpSNmavDrP438Yp6SJ9mLS92jnVsbCipz9nzPhXGfUNmfhCtAYEQfThkRxNb",
  "key20": "3cEd5zn5DgheZKUxajcYVNXMozW3MEUueCpwHcuxeMM1uDw5jsYU3bFtAsL3eWV9XUCNLmbJFkFpCPA1vdsmpiiy",
  "key21": "5ifnX2hQzhFPuiWqCR5h7ekWCHHdELYqChatBmBYmAViES3hPFWfxCaiovcvWUkpcWR9iFnvLmd6AF7dkaBURdog",
  "key22": "2BcYTqUt254Wus1ACQpYgD1uF2hK5cvxHXRdyPZbctvmfTgFgEwjgrPyXm7uPpt1MCuEbmmitz3JbvXrNBBU6LBt",
  "key23": "3d4Dqv33pzUh3vYZabKKbZydK6bJuNjxSrNu1WgUczFXxrXWwsTb9M9rxn2LAopyp76CQnhvTjtpBa3x77NqBauW",
  "key24": "5PWKn4MW2bx8Sw1drcUf7Aq7R5XhcSkQeFZ9KuEHcXxHVYSRoVDkkQFokv1cJypxoYWR6rh3uzmxk1b1xEipztiU",
  "key25": "qQ5g2YSr36pB5im1B565dLF7Swd48Pmz3mWA9Zm97N1LTxBMhNd14CzkoGxeZgRt4jLaLgsmHeugf1a6EeMVJfp"
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
