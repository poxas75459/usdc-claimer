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
    "5pBSM6UVZKYtiXNDznxhDMvXpjmBDhDz9pwtCjzWGYhvmyE3pwM1BYJJQbkjNMYgW4aYfNUsjbhdK8f8E96jhsji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LCuLTFHJNxfka2rNGrxyok91bgepR3TJ58jkzPYoUVHiiVWyvactpKjLPeD5VrKQ7MvF2Mxd5SgG7NA2ZeBibQL",
  "key1": "59Dhv1jEGxAgEhijLLJMt7yaKFPhvBWf8Z8ugSHsbbgWrExEcAJpobcBMyBKUTsSqaHTkWEYtqCFdMnfX7McLTSt",
  "key2": "2xx593MNxyuZLZUfDtJiq8s9MZXXdgRpKemuovsNotznBhZnwv5fxFwV95iRZgDPrqtadNUoYRrWuuTkzCFWZP4g",
  "key3": "3PXpbhZJ3rL5GBtjxEtKs9iVSpWC1FBxnTocprC3RQa29J4RkiyxQAG12RMSm12vTY7hYxWcYqvwFQ2oYikcHEdJ",
  "key4": "4T9gbXgC1GCz1krFYtJEHoxW27cPMFC1EesNDZRLq8kUYrEbj6wFJNJXKKgzhbeKWX59zeiP34rWUvhADHFzc5He",
  "key5": "U6dPzqtiiwnNDC3s7EqkW72e8eHbufSHC2634bURcwmuWJToFzGdvxjZ3KGVM1tNPNWuQPLehfK5CNxg3VuMUP1",
  "key6": "5QB6TWYr8TWgqGKfhZXTxzggfcqvQ1d61qcs4vADK5aaMyL5ZZSr79aE8iYjDb6bivuqVa2o5GBRXEjvWop5SU7t",
  "key7": "788r8BKSR3WCrxPN9Qxnwfjr3EgDuqxACGdFARrP1BntJvpFueWCBfYjZuHdBffVpZ4xt5XYBbksqekVREi5hdP",
  "key8": "23gkFUvmCZtxwy49SKqhKe4dZxi6E3LaowfxcN3jqPogFkTMdM9qdmPfL3FX3v3fbiSerCnmMCR1LfWRFweGVigj",
  "key9": "36bz9gfxJvtWXzbvvdKGJnhN9YW1JVACdFb5dCtLUsdsbXwk3cmQcSDTWGGBKJCYbp2oacGG26X182N5Qo7MRV4T",
  "key10": "4hpMnywSNjdrGVS5ZWwJ4BhhJk5wRPVACvEhX4CeHQ5Uag6xMUa6huo9HZ5bz5PWKQXdzGKhC9Z6yv3zkwQbQvQH",
  "key11": "3j8c74bBCyFD5REjCerx93UWW8bVmzJXUW8qyYv1k6i6tTm3BDBnzSfZyTycB2YffNszpNtSoaJEnJ6SvXHBmoEa",
  "key12": "4fxfMBwMBRG4PHi1MZxSLZ7BwMyuMzm9RMrcgdEgXkfB3GnoXRo9PYxrwoQ1Tc2Fpg5Gk6E6bEwvCHCPcYQPsNGY",
  "key13": "26133jJUjBqQrLDHRRdAhWvTGqjbmGExEAaTpBjEb6mW67jQVf1WxQQnAWCc3eaHv4mUandP2bY3XDtYV3mgtWpw",
  "key14": "46uiQSbrNEqcnQG4uH84PBK5qqhGSxqTx3Bnoino2hTuYguvsXgKdGMMqabzpixdEcg5SNzXdXbgucUvQ3KASZiQ",
  "key15": "5iQX5ZDAMDs962AUUmYHFjmS8pDyKDZk6zFg6fqLUDe2K1vH8LUqFws3wrk72tyybaApCnFz9i52YpB3SAAA7N4i",
  "key16": "4EKusmsh7x2M18BfBuYVjC4iQy73svU5nZmEKCjjD47qY2sWCiM5w7Nj5r6wLWaqZGhnuWqRP8CBXBtH87FbosQb",
  "key17": "5NcZyMxBPk8RFgaKaRcbWQFSQcP8r6MBha5FzuJw5nYSNjJ8s8CAJR2SoA5KTHCfgonRiVkyqEAL1ahxsqtY6KZ4",
  "key18": "2LKH139dKSY4zhjdWtwpH4qsUeWTU4tvTmUwPmLRToj7sBmg2pbX3MVWciXn8TPP7SBeXizzzs2PYc3DBDEZReWj",
  "key19": "MYBgFCdfA9wbim9L6iNbhxE5T3RNos97zxGftdvAw7VfWKT1tVQK1D9JrymK76pvYqBoAoUy5cBQwebiP2jpgpD",
  "key20": "3M3DdEZsKKAwenAvWtHfLGnVFeqpfvZv5Pqtaw6KroMZRj324wybbC2oiWX8aHBDZbXisa6AdAZHEZirebA9WeqC",
  "key21": "2wRVSLNW8G9xwhoXrTsmtHum8oXRvuH9gNNxD4Am2TxgcPBzJzSbGcub6hUpoceyWkaSnoCV9HMsXhsZY9ZErZWT",
  "key22": "2rUSz5FUqCoFTQGYLEqQ9YrJHcZ9FemtasQPDyE1tPRovMr9utJpHW11EN8DxZn1sCJkjVWj8ruu9UbVxcTUMKYT",
  "key23": "NvhBnz4E3tXshHp4XZZQcrrFHM9RU5nmyHzq4ckEsebbFQGmd7f4dfkCbWzQFw9jynaiCuQFgpN7XzR8twx5RQS",
  "key24": "3Erpq5RhNdvzu6kZrh1HxLSSoANuoNqYJphAwKox5gr449RTPUM6o6fob1mBNaD56zyHnGPkVD4bdrXSjNomaJBf",
  "key25": "LZ6ZjCt2CCvhYompU99hZNAE1s2Zh3sNyyQZVCmiXpVqyqnezAZENwSQLkj5cXWA1PitTjegqT4t6uPLgjM1uuh",
  "key26": "2P9po6a1wmffvjh2X4r6qF2Uu2pz6XMoRzit2g6m6Q7mWVY4ytwhdZcw3wETkcaP8YxyCoLmmhbTorBWpHhkWjKK",
  "key27": "55Y8ggybKtLq3JmuksY75Tw1xRNW3nomp8j1SGe5z2TNCMfrScdoepNsDjSvd8YNXfceoWunh4uz3ApeVqnPcKrV",
  "key28": "2fxbvDF95EAzXRGyss48rhSQczhGP7Jibi19CLvbCZZFHksDTNWWYEgGKkZsrNTi8c9tmoyZjcMdEgU88yKnPJF5",
  "key29": "oqoiU3WgGKYiZn8G3yP1KqM13Y1EXUsj1GhHuxTLRe944s2RDLopabvNfRHtY6LgtXtbL4zCPKfkYReU1QHLHjg",
  "key30": "3EEmUw1W9tK4FfeQywegBQ5xcdAQYazoZqRrdsLisoiySxQjA3mmQH4t6HMo1uwXvNMnZM5HacgWBfZA5HgpW2sq",
  "key31": "TSL7zHht68d3k7SSeNaGCe6BUX4UNoSk6vX8cGn3s1ALr5pTYxfnL763vQXzGKkhMYGup5GPyrZUDMqbfUgU4Jq",
  "key32": "272aBktwCnu3KpkLyLg9hYGDfRrMQGLhyziFzLo8kcdBSU5R7yW3bPQBYm8zg8RaGekBPrifMovHgg4SQuK5XVFx",
  "key33": "1287Aqy5Qsf7UKqMREkvWFd1dnPLNnwriJwtqEj4shiMHsLH7CyQBUebAKWunxqETpcHPxqH5ywokDdtGHpqF4F",
  "key34": "eoFfp5r84VTzSXJEo4dEJwvWT6DSVm1zGvUdYxuYXSsYNouzY4QpJLkmrk8NeoDz8c1AQ4ZMpSKYoH2UTijzYUE",
  "key35": "4EzZPGjBZC5k1gDaNoGnFWBWMtxijtnT7gb97Emq3uqiy3f5CC4jKN1oWGQb6NfRcrPoqW8Xr385yY7fDyBVXrR5",
  "key36": "5ij5UKCS8PQPuxZmZ8NwbFrPkMLTbP2cf3yb6k1w1B3DoAPHwjqoVPRo2FGFCSYxuV4jKbH3QxpC62W6Jn1FngGS",
  "key37": "3X3BGktisV5Sgsc4RxRnRox8F7buSt9csayoMQ8DEmff9tnsaoCfLChenRBnmkeZtqfgEEd5kmHTU2b19my9U1p1",
  "key38": "SEV2VDL7Xdpax2BUVVY5bR7DjQX36eysESreFA9bDr4oL973z1RXyf5m1eBQbqSBZ39UxxCZt6mq6genp4o1g9c"
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
