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
    "5B8AK3EArp5scAHUBtVEZcB51p8Mf161qtXk9MTR1mGVjWqtSf5TyR1CfHNTw6tEdFhvPv7nSH3AAW6EcBGtzjV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1gLyaUT6tqWDdjSTT345Sy9NL75K7a7T3CH4erWQxp6xEbffLfB7Uj3LuMHkHgc6E8Rms8gbzHR7Wn1LNzqGVA7",
  "key1": "5fm1hZMAqViBsVqoZfAUGiv9UP5bCTwpSN3r2hBDDZ3aNCgmUtaxtFBc6L2mjSVF7TAZd64kc6UT945e6pgNhj3D",
  "key2": "2e1oFM15kgdbN2j5jyfrGjLBBTkkZYeQR8kWyYjqMnBtnB22UWXpWQW46tapZqFJQBUNSJUtekTDEA6zYT7X8knU",
  "key3": "3Lkni431Xy7XKgMMAtLHM2uW6BtErnBHsFZcAovYfd2Me36HYSfKbPx8h6G2KZfUzq9SuuaiPfPpFmX7ewGjhXuV",
  "key4": "4rzQsSDEpC6XuaqzxP17GJzgjNYXoEfoeojVwGHgiBMDr4uBagtDozhZ9KgCsJjXcqkXPQnGSjpWtqRT7f2174dt",
  "key5": "2Z3uxhJuS4CbUttyttsruFzcbQ8JZs3o2njoXfDvnRVKzJj1oLuHBCeU1zzAfNWbuUcSKrPoy54indW5nQLAruJD",
  "key6": "2qeuqpMp8fc4VhwauQzBYGJLhdhynhMqqjm68vRuRUjZWzSkWnzXojHz4GR26RJKZeQ2gPMDLHgieqcsR2Knd31U",
  "key7": "3WbnTevBUsGk3kANAt6HAE1ufVU5m7vGz3GdxU6iVR6ozzyEVuuqxeFPmsB4dPppaYY7csvoQ4TWn2PaEYAyhsKY",
  "key8": "4rERrJKUwNhTH6ZNp1GCKjvAe7oo8s3XiPDJyDgQ7v1j46AEr8oEPqMx8ztpYFQDUhueT57XijqEbBR7Y43m7S6b",
  "key9": "BHZ7vnyhS3y4bWjD296kauvpiwzSr8SrhhLG9JqDxRJrEAM8ka3eCAAPcfPGLxPkisR5CqPWDJhwjnBy9LaENBq",
  "key10": "5wzfU9EMPuoWaaHJQhz2AKYsrhqtWxjixeU1E8eTZo4HA74qAVuudMZwXAPfaAm1UYCWAGHqRamVq3jak2j8syHV",
  "key11": "4m39ZugE9qdbHhshDVqbLrj6Q9QvTouEaCoeM9gkrjcHeDaaXePe4D2jWwKyFWREAjesrvUNQashN52ndpdw5fnp",
  "key12": "4gvo5b1CBGAMz1UJ63qrmVrMRQiPktZ5ziDKZARcxQsWDnvUMbdbweHiwp9xESxEyNMtM8ipQMKFp8jtQbs4SHGc",
  "key13": "5iTKvrGgtkM2UB8DokWLGjpcoMhhrwQKtTk28oXbHF6U3v5sHGDZyRqYAxjxirMKVcSGWTwumcgn8AptNKWivw8q",
  "key14": "583pKozKs4UX8XzaKv3Ksc8HgLQDgrwHQkjSWQwTTVEemaGpSLGtzkXHPKy1TnMsUt8JaKK2zWoLrBwKTv8ZZgyz",
  "key15": "5DGyXvXaF4L6RqxgUY25dDkonZC2Nu91jvU1oqX7pgaEe1y54ReSXbho3EcRkUWViMzrYMYgicDQyX4x53uTiVZ",
  "key16": "5nZjiMN2anz7Mj6jswBduP2PbwHyp2my5aTfEPQwwbKdUVXTg6qxHgZAQK2R6FQrSaaXNVNoQmy96d9FWwVk2Av6",
  "key17": "5vT4YDEcqUCw5zayRpVtzq7kSNjsCmTVNkX8X7yHopa6mQyDjXrbUsCQMMd9CCao3HamkH7P2BWEuHk1NZriQgNQ",
  "key18": "kzXJ8hp5KGX3KnByYzXr9GR6WhxiJDbRDgBjcszz3ywMZUbjmPZV9Cuca9rg4h1vXBB2Lzmab3y3SMw5g1GLf9f",
  "key19": "tdmp6KSqUiaCR1iEqYmBMcJ4eakfn1Ra6dBPJEYi3bLxyi5Nm5ev1CxQuQs5tWFyZUtt85WkRMGcoT3t9i4Nu7Q",
  "key20": "4752LBQhPaTb9sXduZGTmwLPNNgqVLTtt9twEnm3CSGwbZvEBU1j5yww73ivkNRuvbk88UQSg7jUvHiyWDPxvtAA",
  "key21": "2EiPhTaPEqRwf4jgwKLBbtiSR63MG5cP9WRQz2Y6GbAsSmrD5Un7bDMUV4yv6bMWXqNhm8C8DKL1ARCXd6hxznNf",
  "key22": "3Rxovy1XJx4rVpKdigRJXJYiN4qDdRNu3n4wR5XHm6x23CxqiMiSBWC8kB3eAVLyj6NN9Y6jdW6Ku883RWZ1tAJd",
  "key23": "uaHy2ArJX5iWGWuHE9yK6k4UgDuycwgFTWrnFHtgQ9NoNi5t6tKFnQRaATbUkzTgK7Uudpu2YYmBXe3Bg9K4MqF",
  "key24": "2D72akzE1Riu73KmF4eNnHEZPAX6VMdvgBNebvTeaDCG22K6PfmHBJAZb4BsWrgnThkbsYUGQq8ZFgi6qMadF5tE",
  "key25": "76Amc3ZTMkYg1UCVX7AKyRKCbmDGE4ZQewtgcSpyRLFG1Uk9NUsfXwwfuc9qpzL4PEMpwZcvvKT8hGKByVYCq4e",
  "key26": "5GG9LgHiiBobLUqSnkjiR1Tc4McK6SkvvkCczf7499tDQoNzuFViycbFxbPdbHJeJwCNZ9XnhnoHZLnZQymu38BU",
  "key27": "FcekcfDdsvN2XyiHpb1zyA4VXMA8XWexRTWfHbJTgATVrvYyxpbJyS4dakrGfu4xkAXvadWWDCWSFdjvorHexib",
  "key28": "5ZW82wLhRhpiJu32kQe9JGHTz2Af1ZuTav2bRq3EJdjYtFiW5Yiupb8Ndg1uHJSMM3BrtMEn5GWSLA1pidVfQMb8",
  "key29": "2kD9YFv1wGyD9MaYnbZdK7FXRQWAj1s5DzusY8atnNqVuSJyUKLHFHQspV6qUzmqbx1HBPy3p59nq5ZkfxZFakx3",
  "key30": "2AxQQLXDMKQ5tuhRcAuXsX7D5AeFE9YuTuFzjbBWeGiVgkbj7JLtttKKfiKRZezhbCe66dWve91nLnhV29Xzt2oD",
  "key31": "62akQaWwArPPGnSocPCT9ACQKcGKMwuzNZMhRKqrc9pBH8SBDYhxUya7wjjds8CzxXWmg5phUfYJZZwdz9D7qkxB",
  "key32": "2W2yv5XSyZu5nEPLjEUvQyPeXCV92LCy9W8YYJhMPrJHAVCGZNpS1aLkBY95rcWbVTN59vL5kmRD1E2RcbycbVZK",
  "key33": "ATVPEyUrWVoZ6PMwfSHGem73UvhPrkxwapGELDkHNJiD836jP1ovmN8Vx2WGtaRz8YFKSCtAU9Lbo9hWpFFX2Td",
  "key34": "2NpXwmkGWodwjZdMyoc5pbCvqYU2QPyp95hfFrPVyQqTMbfSnZkgccjnXkQ65e6m6LxxLK47Nv5tTZ8ZSiyAFSSx",
  "key35": "549Z9VNtbvJZ1XyUz5ED6ftGYJTFiwwbge2fsc9Nxt3VsDLCGhK9AeDAC6C7oDX7cW1C78H6hRuY2tbHcurpuhjn",
  "key36": "Tqg3F7JyzmTL2hG2K7iFncWbyUTWe1P7wkthnjfPbYg5twsrFPNW1u4X4NrQ1pQkVCg5F7kC4xhAmFzSaszsGt6",
  "key37": "3SULVgHREDpvAfqTZ4Aqvmpe9oUw3JozuYEgni5BWRewxHwNrE61FjY6bUx37CPgqHVCzG9SwJAdNMWa93PtCii6",
  "key38": "2vG9uJ75EswyKvzwgBqWWg3a4bnVqA78F27sLxKe1BEGjkfZ4pLe5WGb4VcH5kV2LhqcorvQ7LKDKVUGErpNSH6r",
  "key39": "F1YTXP7t3m8xEhyBkSXuKaUrGJyscwkv2fAnE4rFudsXhHc5nquahdcp17d8MLSwJZAgU2pywhFsVsx64aFeCro",
  "key40": "3L4NHdThDxGMsaYpMc6vkfjbAoeT1uC8SPC794mm3P8hPMQ1StS8GmMThrvo6SG6JaGVBzy9tnEY2jQ6KBR3fG59",
  "key41": "Ve3hSoqMxDWfCTFUcReR4c3GcVvA64m2tV4GPxRFWp3KKMVgfdw4K9LoijjWf9U7fVdE2cbNko2kG3bxCqCyWXu",
  "key42": "rqFbbnt77EXv5vMhFaGV6F4tju2NUw2nAuWpovqtvCVNnA97wUojrNND9X1d8Dd4rTWNhE47v3gCiMdxNHQDzJr",
  "key43": "572x9wupEPQLPF2qvrjRbJLmosd4Fy1NQNuxsjTzSc9KVhdwQZudrSRjF4n23i4MzJBDVtWYfHJbrzyDZ2vUP9TJ",
  "key44": "3C7DAfgUJmiKLPKZJNxdJmjtxVDFY1PA5G2MxVdQdZdD343Yj4Yw3N52pwbiThrSrodC2n8xWkWyTmpXmgZT5svh",
  "key45": "3mXN3zdgacBAsY2cMAqqM8L6r3ryDwjqu5aF58ESPqybS39cW1eqKVXVK1JzS3JN2PYw3mKTja5BfW1yBg3THT9o",
  "key46": "3ZA2PDpGcHAd56xmLBQayE1x5EyYFmyJqXZgMjHNRUxWAwm74aREUX77RUUKZsrR1hKmXKar7ZDSEBArQwkG4DvP",
  "key47": "31a25oeYV5KCDKK4isPYCqpR1p1haFA5PUmSsg7eB3Tc6KejD3aVCbmcp9QMw8aDY2uG9jZ1Nq3MxpbjZxVQdN2x",
  "key48": "4YC8G4jReRzVZ3puGuuKfABPR2cphUzxZQZtXzbXNwpS92oruTWZNRR2KjD9JpAgD3Rqn8L3acZY1za5hyk2A92g"
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
