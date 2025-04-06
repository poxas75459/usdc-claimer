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
    "2aNUjH4jdR5BAjMTK4nYib64zaSL8jJXRnw6h6Mkqhp98W9jeMnnSoF7PgFxJdtTcr9S3ZrhWeYbp8fzDSCwQTyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23c66bfPsoLCkttgZwUqM6yoeAG3sUj7mdkhb6K8CSmK8EVPVVMP45xAzkAWjmc3mASjbRZbPZwhfQeTULjrRg1e",
  "key1": "48edjUxqxRMRfmUmPyGyEuabEpwuZsi5Buy9qZ1H1GSkqvX9zUZsMCNhZDYoC8sMjxTvcxyhQsigF1gweK6eMYvt",
  "key2": "4Gt74kdSX68m3BYuRxWfGTms5RBhKR2epuZu5QAMo1eQfBaMieu12rAVqXVEa1qL3gFgt5MmLyGfGehHWdghjtaD",
  "key3": "2FkqtHZVDDZDzTdXuCPvH44renzGJcUiCMRguqLSyT3sDqaSbeesTYwGbuEHedpjFgXyiWAm7RgrFJxpqhhRiitw",
  "key4": "41iWrs9y5XE5AwfKHqVcuAApcEuqKJZmphA2tJ86ht1YqhbzfW74yRKMC1s3mSzwJJezwCUapERJYyCf1T3wZMtS",
  "key5": "5339E187FLNmCBrZ4DvYoEXRMw882VnhH8ddTZL3yzqQKxjQQWKnMSxVzEtim33GEb2oVqSqGh9i6YTQ5MQBuEi5",
  "key6": "3qsBFButMnuQHKzUuzNRhNXDXiySVR3ArAAiZoNKNFzgHXj4EYFCLWpQRxPLCYXw85JwV9dS1qDYaezjqXS3qveb",
  "key7": "3EJfdeGiVvJjHWKwiXWcfuyNYNVSNqtxBW5hQYeWicBSgEJ4FG1wAaC3zUgEe3PvseL4fZSf77zWAPrAY9Tas559",
  "key8": "9Tb6UYdaYByJXNHJKBM4PL4ab6deSaHnmS7TmvnArrMX1HexVUmnkXM2caaL6LzM3BB5iPagfpohbakmRYPv5tj",
  "key9": "2bxNgeRxc96nWpsFRsohUwumBuVBKcVJxnWfB3Rrqpq5nZNKyNbKVrRE5Ssg7KcG25Fyc3wFf5KS5GvyGsgC5AfJ",
  "key10": "65XhzPdhH7Qg7Z6urTV4TwJH9zjCFzD19sScJR1Vnp4857sy7wPDBzuY1shwhxH8V2oiSKtWsmV6kY4FZWrtbAz8",
  "key11": "rpG6ydtZSB9kfpcUvKWNF5T7YJutd5CQqyrVXpNPeWBNhEhzi4Rr7URhuX98Q3j7c3516BAB1hh2M7JXiSyu3cS",
  "key12": "55kiZu384GWnSqYATSK6vcHvHDyYwVH27YAMiXnZaAfEKERi4swr2ptK1W6B7zDNsCLTfhTb9LgUqx7raB1MDS84",
  "key13": "2pfxU4cR5fHKCMegt9hn7vdHtPHcMCL21aFqjdKqrNbdqVEzCz3RZcQaS5iHPpzwMyAQG5hTz9aSaxC4dGHt4S5L",
  "key14": "5ucFxgy6y4BfGRt6Bj2hBCNYTb8gWR3pioWAbzkE1uKznaVp3WyGU5Y4xPtTXBm4zrayw1YjayWyA42hmhRvbVGf",
  "key15": "46gpMkdHoZAYAD8xZfHxYueQ1mj4yMMCbfQiKvKkfHM5ip4fuUpWFhjbqoj5EyZM9omkmgCbKxvFbzBKsSwFMck6",
  "key16": "4wyN7ekTXjiYVJo2aJMm5HQNAyggYCHtm9tu4v4X1DoCHaGJFG3AzcxKw3F6QFnz2ABSGkFFSigtA5GzYxx7HJND",
  "key17": "3HRoGJjvdB37Ht79W7pueCG5z4MUhN4CBci9k3XbSuNN7ZGQkPyfb6xHpTLAd2FgEW644wBCgsXu9vKynZiPjRrU",
  "key18": "4VgKj8DYzAayG9VhKyQ8tQGaHBSRHA5A3B8HkBMM9WozvckN4sYu74it6AZArwxbRve6S197tMahgpiuUpeEUmwL",
  "key19": "2ueV2LT4ZS8i8sLoGgDgxygzyr4MxrgWA4ymfEBZ3fxV9BynTwxisc37FBJ7g4FGYEcv3WwBHWja9VPJsJv6c6Ve",
  "key20": "4ydX2wt6pf5ojWeTb5HuKoWQgow5evKTEcq578guqf4zzhZ3U4mrxK3Fxp2928bYxHnPgLWp5xFzm9BvoFs7drn8",
  "key21": "4ZV6aDrTWpd4LskqwgDcu4DvdU382T7eQko3ntUaooL7yiqMRHb9N7VvjXebjWAo6QPENsG9UVsf2PU68Cagom4T",
  "key22": "3X4sQi2e3YxrhdMTkJR15g9qHkGPzwRzgo2Hw7aqqn1Ln8JbkovEiw4eXm7t9yvxQjmgb78Zd6e8wHyPnSZdU32n",
  "key23": "2J6aehorkL1zJQy1W24SctB3mPxusRLfBkPiWnkd46uWnYcayiexRwbwJHoLC9K5EwdK3AtHMJhXZquVYNCoGviX",
  "key24": "nXb5eWS3oMhxWBpSezwjWPVWFap4uzSaCbx7UQHMb95guXu7UhJFyr4WH7J3vP5thEop5WGV3XFXHhvPp77qWYo",
  "key25": "3Zz8kcAyRzXLxiHQUH45BUeASZfqUv9ULErX16W8movsyoCPStFvZy2yRi7QxCxd2Phfv27mWnWmMTmftgorspP7",
  "key26": "5UsjN6GimrYkWtEwmit9cYsKNo2rerNJQ2jrGGXdATEFxLMRLv1rkiJFWtX8P2DuTNsenW9y4mVSZaGuzYJ2tKgD",
  "key27": "4ZgUYfdwMLAYSKu9N3ZmuKePmj4D3Hm3NiV6kSv6hVA1jMte2aXqd793MFNkBMsU33NMxdNLXYru3Pdw8Bn9WJmy",
  "key28": "4yDhuLV9vAyTxA8YeUbhxsHZk3M7QxCx9UE1e3uDzeEFh92qUCuTnj6XBk6xJ1kvTZAxipikWmzdTSR8ZKZyRtdv",
  "key29": "58r5HaPTXFYaNBMpw1BZwaMBzQTpzNXhzqrXeMidY3chNK5WMxAoHej8maFL6VEtG1GSyGiD58HUTnWgB3aZ84LD",
  "key30": "4cGsva4EKKmmSE8MrwCrSkFfXXGG4BuyZLtoMdHzr74aEQEPZRwEmLJrMwqTrSJLR6cz3CbhGHtwqXtrnh6oWrcq",
  "key31": "3UwApw9fWsyNQrsvFNm67UkC4fJZLjKTowYuNm8pZEtmmTWYGsxeH6D9SaecDxCASyygGNfF7upToZg9pj5DKiNg",
  "key32": "22kQTnFZkW8yHGLZ1cXW9mh42UisyYhtJXkajp1sps1cuytJ6fG8U8aDPn4w4JhaQN3dCyrEq3CyKi9C3XDfqMHs",
  "key33": "4KhVy9RVZYphcsEjjTKQ4hH2nVQMwySY7r258mATrXFD5bxTFp8BnqZqRxJqj8DQEPgMcYeq28gr9WT7XQBr5MCw",
  "key34": "42HdLxsp8a1Zpy2hdvWMzyXif1dfv3WZQXNP8KENC2PFRKUApuXAtFWsYoDUe6CRXYV3uh8Re5v2ZopfaNGobRNK",
  "key35": "5wcYVr5FM2CZvVfTDLhrw8uQxyMiNiUQB5PRWUYBWWhghGs8isiL3js6uNNNVAFKovAcCZHH3BHzYo2deYbTFdCM",
  "key36": "2YbSVP47EVVqu3HtFEV6pRAZqgoigqzs7jNa5PopKAGgP4vLZT7S4JBmvoLd3LUyMT2oQkuf2b6e5CcGh7JW9uUE",
  "key37": "5ovZRPwSN7ByesL5Hduq42JFMQf3NVfiaeFgxSnaVw4hSegqFPd1sZmWoGE9W5T7MEzwHDxdjY3EKFYkqcFN3VjD",
  "key38": "4e3WtnjACYkB7UtMeQSjVHJnf5siHim8EyRcgFSvttTtPfBXcPnPnMz3tTVbryUnr9VJ5kBqzirrpJ9y1cytjL7B",
  "key39": "5gq9FAde9EsXYyVSYp7cNxYXwiGak9oS1HaTJmjzFgTaC21sgyhjVLBqASRuGBiRxD36eN7jw5r3L7JVY7GYA5yy"
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
