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
    "3wjgRArpVumGxDWdBN2kUvc8AQx2cmQgnF147YXLFedgzbNVd6BcsTZQZYnNPLgS5MM9aBeDubdDyrxzS25XTNjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45sfL9ZKtZMYJmGnnoNftCMvzQzwEn79MzyYQ5mRt5b2J88tkPBjZcPdqwEobASWpTmvvSxhtiwGroZ8RBSyMYFC",
  "key1": "Tv8natuntXrnEd9p55gi17GybfBupkchrzNzjU7XxhFcgVZinz7hMG2bRqpXkMDahVgu9N7Zn1U6a77Me9Gsa7u",
  "key2": "41BkcDuv5f9wTNfmv3vMZnrDaLJ1mTMUidVRjBUBV21vbXy7x7TyAA1vtW6giCVEij8hSJLxoSXBSjqLfa3XkJb8",
  "key3": "5WGFrCevY1Yb5McsCx8XvghtXNDLA5XYBrnVwKp1n5qUTyf9zgkkSxdqoVz1oLpXka6Pw536xeYQ7dyXVyohRUTd",
  "key4": "47ec8uz5H19HWc3eYcQxpuBXCUVMuAE3j5Gz6inHcptCXcy4QjNAQTjDkYa8xCMDvav1VNfW773vuwWXsLsyrp4f",
  "key5": "39PoSTZGWinNp1fCErkG1tEfkXotYgpmARYaM8mShA5YGQQqZLMFr2HYeAJyV9kvpVfjMUje8G1YJYGAwKbjVP4p",
  "key6": "3KhqmHFx1oEiseXBquHHrjCEzuFCoQHHs72WJ4kuEGJCMARWqEjqfuxY7R3avpfwaNtESwTXBYJhtfo4mY7X52Bj",
  "key7": "61VcCmH9meSpWQJY9jvGkyrDrn6PH174uHRY4cE4vdcLfeRmpw9C9z2tmtAwFny6hahk4EyWkz1Cg4tsyaUmJQjG",
  "key8": "2dfgYijqogqU7DY9WHcEdVcwViDoDBdZy8eAeGuvnNH7GF9AnKaX4iduLmzBXCQVr1tqn9sBL9SH3WoRSDnuYxgd",
  "key9": "44dSSSJ5vYkupUPjhGe1FgLZ2j5qL9KsLvow2MLEcAaBSPRPXsSzqozF739VJMxxoALQs3MNuJJJbHBqrSU67xFQ",
  "key10": "4vzBHfsVVUXadGJUPy4aFFPJq3tzjRprC9BMA3H3w3FAunMgQdX1EKWmd2TDbKvzkf7T1brofB77dqVz1QKcZZs1",
  "key11": "Nwx1YgaGZBcN2cajVtmUGF1n6RMC9U6472dHzWzxHBptZtuVww53unZT3ngctTcfFr3JfDWKrLVyV7KYPqxLqo4",
  "key12": "4R5CzPmWidx4s3CQhLDFHmhTz1mcDZNM222jDBo2KNwapgE4ekq54kba9yQDBsNT8dnKyhAFsafS3HB9J52aznyU",
  "key13": "32DWKfNSDaSpE2kWqedirpAz7fpEXBTAmdqEAmV6JJGyVdgi4Tbv1mPKuSgYDgw8RmNZ9EMA8Tm2z2ZLGUench6J",
  "key14": "6ZV2EqGhjg599128truZUdJo7dhc7r8TwtwwgYC4FZCXXWkKYARUyUcFjZ6r7oPMZY8pvEUMkpMPLr644cXNfN4",
  "key15": "2DNa2FSaT2N67EMhYW5XeRrKWk9eovNmuqxSAEzYkXADpNosm2iP6ECh7SWQY4Vb2k46qT2mrTihHpaVS26Y5y7W",
  "key16": "PExCvgQfgx8hYANZ7CtW7DFobuudAKueESP62Ks9p2b6Ee1P2TsJWuPbALGsyQd1BVNsrxVsCzUrGDzAQS7KVT7",
  "key17": "3XzVQXfDjaSAfk2r1M9tpEwU27XvkhJWwoic5ia5HPJkLopLpygo4vT6m3vQrbnBXEEsTXhfq738pqQxfkMLcApK",
  "key18": "5UfHcn1n9ddE1RRjA5NH547BUUZ9jVoh6Lx94WZJ4PHCpFAVVre9KmwPGiECxMLsR7ptRSbUjTDhCwpAA345psBP",
  "key19": "2vQ7S8gAiZG4ExqecLTTCqHLVg9WZexPVmxTU2CEv8Me1jfPX2fDdukMXruScLPLShTWAVLQEe7HCy7x5zTHfk8u",
  "key20": "3ZQVhxwBVisSEYctTJfCYjzeFyRTr5NnEwikftN3kfJ42eX8mPz7JK8mXDhR6GTRzqmqp1YxA1rLvfYG44nyuyRz",
  "key21": "UhjWK1wto1yavfjXhWnCZMYyMqBiwZK1i7ESsE4MUfcQSFm1tRCeMGMCYWs1xe5PG76EcM5bdEJekakka8ZPpi6",
  "key22": "3CrPymQNtR7f7PNkZAGKy9b9dS4tU2PwBnACKgqquxosU1hfJW7WseEK34sHBmT9shq6EHeTPYukJw5CPd3dbW78",
  "key23": "3SpsC9hUew3GJ2tUEL47GzejcA5TzLpeMfEXt1TZPPQDuxVVb6HKqzBHiG7FNw2avXmi9mg4VWLd5sFKHAt5yfJd",
  "key24": "5sK52ktgYhJZbUJCJc4BnFY5E4d8kWeivFus9ozkHwNPJZ3V4J4AbsHmZz3ZTc4yTdxQh4tqGSxfv9yN2yMk3AcK",
  "key25": "2VzG6sGZZhjLw27T95pornt6HFhEPZ8YShdHt9p8BDLgSmTEbuxK5yJwzvNF2rMxBKJP9Fov2NUePKgLji8AhvD3",
  "key26": "2G1Dek9B311gNeXqNbK8UvmfAqbymVUBMkaafGgMkn4Gbjgvy2kAQ7URFLec3jANjUAqD6wCbFTK9bLCycHPJSXJ",
  "key27": "5CKapsAhGy5cAqMGHf6GgA4CgSUgd6FoCnWTKA2XhPCqyy2KZRemyJPMh9cLWFszesVLpGfnxSmGu269qbj1poQs",
  "key28": "43XebNatWUxbC9zmnbcg4ZH1gCunaddJ3hXAjmEgEudWG1a5aAQnrNtTdnVfrS5d7LHBEaS2abAXfZLM1vLykrcn",
  "key29": "5nhEVxHsxjMVjD7wWyaoqAeZuTTvh3FhECPWiy7X55KFGLpaMZeraWcHFWoWEmaHi3WQzrgQmiREkSftRVa4Npjx",
  "key30": "1G5tUX7BAp3FAyUW9ZYkRxQ37A1jWyhqdCLqrRfdit7kxRWtVJgdvMrK7pfdyEYBoWs11Q8CUQ8qsLeD8bX4txc",
  "key31": "3DM4Spbm6ebrxF4cGwJMVtGQRcA2GU1rXUAipUZrNFLbePf2bF1KbiLWLnU1SYyBZCVnEGptTLdYudLrkiz6bMV8",
  "key32": "5mnhQn5EUz4NjD1YusvwSAKEDiNL4rDe1AfJcrvUh44nEEov52NjEmbcEGFPk7EGYH61GDVHwL1c5d6dWoqsP6WN",
  "key33": "NiRUUvhcRmWYjHuZaDBsrMUTZzSj7Ci9FRLRDFvYo1uozGEVpXVkrA13TXgviAqG8bjiDnVABNBsiWBhufrDHv1",
  "key34": "LbRo3SCx2j8WwjkwxAEpQNKDhChGh5evpdCSedMQEjGK9Httn3815BrsxG3rWFuhAiKghMCU34pcfzTf9FhSyPv",
  "key35": "5kBAxoQBczSXPkooNahAqtr55hDy1ktBDWsyaaHCcVjzQbgEKBKEVGtsjpxJLs6qK5ymutaw6XrCAYMvuzJgtNS4",
  "key36": "abHPpGnrXxhLSPgt9xa472S8LGuq9e52Fz1wTMnBBKqDY8n9xpKYUaADHDMUV4caUr7ETCCjyVr7JynEQF7bpbH",
  "key37": "5hK8NchN4kXceQrwy7iEsrqeBdixTfohRcw5uSTZwp6xvRxsz1jdN5AoRSKD5hriXjwnYDa71eYreBPeZc6Mv8cR"
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
