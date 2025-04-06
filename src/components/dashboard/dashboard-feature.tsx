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
    "5KHHmgNc5LpBy9U9c6eajhkGr9Poayupg8c942cB7t5vUKievScyNfcEprVg784srQjxUhD1XiPFp3siMaUx3sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62S2Mf4wAxK8pvtkBWaqn128UwsF5z3J5ZZXgroaGwyyQ67mAtNGhKBtRk4wFaCs3ct9T6o21Nzxpf8RkvANc1W9",
  "key1": "57ykCdpKXqZCw9BH8cXqXeYXSnWsXwavLph1VPgQQVzZztAq87dJiYscHheTPQhtSsg1SnNfLkThASWZ5hvKgFN1",
  "key2": "3mJTv4YsA2RenopSRNHsfRcrJ5kUetSe7n9HMUwve7qEGv6dmPeeXoLvSNB9vZ9vuS9RDM9J5LE3AZak4V6MFtgK",
  "key3": "49RCmU83iqSTA4Jqk8mEYPBHQneKpYrQMZ3wC4LXEqPGVrVmT7UpTJviJExxW6AZukDmEVzCQB91WnHzvQie6nh2",
  "key4": "2ZkHTJRqBb1XzkurprWan4NkFVquvx5Ek3WFP696Hc3Te12tziVzfy4fK4sk7eBbwgPQifGCZTCWc2FQhT3aULv9",
  "key5": "34aGYQvsNgYd5Wup4WnEMxSk1k6AEuWDa78whNGSj5BJz19NJZxy3HQK3CHu2XW8BqXTwJgeuntDsDk2PsMNjjMs",
  "key6": "iVJsdRyrxJzKdRq1CbiFzKjiw29RcBVunH9uLBE7ofsZcjrmwwAGV6y8PbppPi2x2cTezEBWfc5TXcuvhj4UGA8",
  "key7": "65qCfLAfbqMXjdkXy56ksmPAQ9dM3gaasSTGQXXYpeGHZGnKWrwGnCAEDVuEiJ111zZzJCP5cfxJQLu1fpWgoEBr",
  "key8": "3vEff8CsgxPgooBdAbBZYVuCdaa6WgvHt8kqeX7pbziVN1mP76sqDH6XdpspEgioAXXeXw12vcve3tYnZgZMSGDE",
  "key9": "4yeHQCJzFDvKwz9ej2X6vGeNgqwJj3udDk2zEXqUB1gNBPfF86qPmWpBuYDtLPuhmhtegUPhL5RWAYVLHanaVXNy",
  "key10": "2XRtRiuVFPBAnCQ1XzvLPFFHmvQhKqeSyC1SNnkHhCgzDe5Dy89FB8rjbRdAtoGheS5paXroiGC28Dn8VQnsZSxC",
  "key11": "Z3gJGHU59PJthpD1otzXRRpjNmyYXawAEP3GRRSjGr7PavFbdxCdew14rx6iZBQKFWQc9rduTY4uASzMqmqV7ja",
  "key12": "xPRmTNYomDcBFekBW7rogR5vkvYfKiCLPsjua565pixZ7sbQtsW4QWWzEkhe24xkgY2D9STtSj2vBr42ZjMydba",
  "key13": "2JnZUGcT9xA2riapeLtkX5djPuUw8Utgmf6y99eB8X3gzuNd43KYnbxVcQsaQQVJpboJHRvD67wbHTYbqKUU5NNT",
  "key14": "3frdXxiuYvXDLSmGkEriSywnCW6fLFormuYC5QfyaxnyQAM5azHUp1KemBsZCFAjh3FsKScB4HQqVEHRrotJy15D",
  "key15": "4MX3VPXmECJhtkEo4RzyQQe2xqHzv8myXWoToAk6zQBYUse7gq4e7nHKsvTXdHNpCGRT1GzWfiyFYc1tnWRPK8jm",
  "key16": "pUTA6WpbCQHejeXx6atZ7qiDtHCSth4xX4oh9DX1sFpZbLEcjXMVHRviPRqFopCsUtLZni4SVik9KvxqTGbrkuA",
  "key17": "4u2Pb599QNFRpXCvUUQLmaokanXofFMPoMfBdnanvSRXnXmKDkLTLh875YUCYcwrwNQybeTcYPRC2FqXUH6ZwHHs",
  "key18": "LsMFrY8C1mc9zr3yo2sEcC9yAaewZoVGeoKrgeSXwCnKGvWwYYcXxa2f6RxrXSsTSRyLouwEGmZZTiPJE8dxxzj",
  "key19": "2d2Y6oDhB66mphHyTQ8pBqPyrHeSWSiiaNdTysFK3RsSLkEJYVc7GdB1wg8cuXMv1rnibtkLiuTFWNJ6SnyvcER8",
  "key20": "4eAGC2fXRHHftCboWfHn2XeKFA8JkocEpAzKaaHY52ZASv7WYy2YPVW1Fmj9CJxiVHZuSfeofkZfW7bBCCaSNGh5",
  "key21": "47naLuA5DfGk5VZtahnjmHqp5Kxz7PNNt6f6RBzn8ZXkF2qkTJBqaNGufMFHZf4FSs1piXEroDfeBeB7aE3icBAk",
  "key22": "2xUKoizW2K5wSq8nhVN5xjdF8ck3cxa5U2hwta9djmfGNHML6fyzUndexEJFKV1Jycqwvr4QSFpXU7A8MwX9d2o6",
  "key23": "3vUhvynWcG8YMpvqtbSxAGiwmUC4z9oMfNNZyLxDScHmWJ1HSfdr7gcEwiYXF6ZzWErJKzRD3Yb8CjZhJwEtLNAj",
  "key24": "GD8jiSgSgeDyDuDppiNz3H4Em3Ryd2qG4FX1MuTd1MASK5jqVseNqcXkKyNoCMZJJUPk6Bb4dP1DFySFkbB1Yb3",
  "key25": "39iw6FyuBFNJRXvz36eGU9c5xqL7S2xNyXrzXUm324xDMFqTn7ETJsF1xC7PhDgZQL9xqtVDLNURnv1Rdcxo7jMK",
  "key26": "2SNyad6P1n2qRYDnH13QDAfqx3yXkSoEEYzfYXj6HXW4f28PVMdFo7PJSAQsMhmBLR3vwyXUZpnxYa63TmntDVqn",
  "key27": "4D5krX6vru9rmxWWXagBXUs74yfxpqvZizSSdfHGnTsa53F7Um182bocsDzAtHrgLfBQ3gfNQzZbXmnjuJLtUcR5",
  "key28": "jheKUHTYdt5TYaLiX6weBDvvkQgcZbtrPkXVHhTfugzVAjQwWQ8FswEid8Xwog5ZEXEZfHZfrX6d4bAjsBNLg7m",
  "key29": "2VjkydVNsJ7FauxSH67Z7XzqvhwfYSLue65ksVeowM6fposfoKP1Pf1AFvjUoZaBVNw9YUQQqGCSar2dW3vx3jh",
  "key30": "3K72eRAWTrVX7mXXo89nkJSWhjvyDJ5Ss7GTu5Cj1i7krcxZfS2ytMWWTr8P3QNM13XSJGhMuZmpUEodDP7Kw9xJ",
  "key31": "5Wp8Qdf8Nn1YrAhn1anNr3kg48Spr8uxHNNXUuHVzzCvr5SNDuqE8bcGZkCg6DuNqWQtYf4zHUvo71XJoGFrsksx",
  "key32": "PEgQmTRdEUiUQgDuXEYaYakfotMpi1fGwCCLJJjvVftR7PHe1RSag67z8FUx5RPQ5xaUBJbnVGZ51ebE5YyznkD",
  "key33": "4mkJjta7S8q8r22MFxvHLnhiHJDCXNRxR7MuSzpinVW5tPURHyNwW7NCSJqQYScKVHTBYE19Rt67os3TRdKU7bqu",
  "key34": "2HgjwhaHMMvby2mcAZgu8qk8n12LfG6TRcL6QbXwAoVH7J1a2SxfhjuFBsUh6Qfcj2JPqVqLCrojDZ2U69PtSkqM"
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
