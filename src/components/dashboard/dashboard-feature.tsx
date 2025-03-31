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
    "2xjHjLvMPdEinpMWf12HUSXRGsTZzeYDwDArwshfPp94GPzFdC9oyvtNcanEnesSpfsuJPrkMVHycUsMMoQX7BYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r4qDngVF7ewpRYD4wRb25KYfWjroS45k1ipApRKc7QpP2k54veMACN66cXQ4KQK1WHho32fo7uN8T1wgqJj8qC4",
  "key1": "qRgQdH3aThvwf5SxihJZDmwcFqdVaKcpXkuTFh4qYSnhgE7Kjkf2kNxmjD4R37sPVP5QwYH3jHw1fAAmSUu23QA",
  "key2": "2G1LUzHnGSpmPi7dnDCdv9VGyXy8MtsbCxzUBFECKbU17jgsUkaTK9FgGwWVKckTzrXE84M5j18uWEWRKxAxFXLg",
  "key3": "rewhZptgfa3hJvcxVnVJCUVHX9nqcT8ZWftAenr8kkoo5qExJCU3bJV2xtEvAc5ZiUr6DKCgKVkAbjWGZ1z544b",
  "key4": "5WsxMB2vaMTj7q54RzxBT4zyc9RZuvuAMeRhwbF4UjaJzTdVNpM7KQGfht4obx3JcnbauEmYGeMY7RRTPSAEEAfe",
  "key5": "35jgeRE6QndEGh1EAJUNX9vgdKgtAWeXikjPJ5zyDbyaGgoYUFt8vpBwV2npGoNSdoMZhFZDLMF4sUqAjggBkYZG",
  "key6": "rmiiPg3txo1dxo43qJhZ7GadSgrNaytsYwwJX1wtE1W3AdZgUgUSH3MzDy6fZkc5vNk9ftW27h3nznX764ycb28",
  "key7": "2DpTk4CiY2MoQhGH9vwYd6GC5Yuo58BwTFm6ArJsDKRJuMefYCikunQyUoLSox9XQ6peaRN1JtXntZT2qHGxXX1s",
  "key8": "59Lu88yj1k7aGz3j9qU8qCvwsoGbUASG3RoLupC8sgvv26jqpks76AcvF63c5WyLx9Aauk6A2VJrYVEYVM4b5tUV",
  "key9": "28QYJ4P4VoGPMPXGb6hjT5UYG6uoSWXDbAfnRLUkdUGDndbhP9S6B5qBVxg23wDHr8nTt5DtZQHkMNWkvNcDVZk3",
  "key10": "4ABRhYWzCvaE9Kd9njneYjvjwR7vxXEgdxUyx4hrDbhVdoKCzQH6HaiT6GgCUBKBmRFKnz9G2xXpTxd8GxfDxCoY",
  "key11": "2KThVeUzfxWCfDdksdcNszJtFjJDYf9XbjZ7AnaXE31wuvYoq7bF76aQstNSApbwSr4sDpdDVyXfZseoikg4BWd9",
  "key12": "5r5CDnREDBTaPJZyk6KeC7azrpHh8dpoY2AJ1QYdycqCytzhoWNNzLTmwKjEpT7zHhHWaNnSvSG64CYgjmTeeSam",
  "key13": "2aZSpht8dDkewwY6VsfckLUmUwvaYYvP1U6WihLdqj2Ftv1doCHB2QREDiK7Ww6qSQiV4vGdAw1XQtFKeiwm1UsU",
  "key14": "5CBZJ3S7fApfx6tJt4HqcVftL4JwGU6LojUGCj4GfFpLhzMsWqrNXKBeQUG5wFeVN5q8XA93ezPLoTutgCVPsNhg",
  "key15": "5UoKgU4rQY6ocsP6anpVy47ukdX31kJRAR8KSfmFQFsSyr8cQbgY2EAK5ASBfMxodWobuFtLRuqpB6hb1uW9xrtX",
  "key16": "21id5Cov22ivUt8nufRpac8bCoABu5LrhVKh2fek5nZFijwnFv1ZDEkCvtavY7GPnv1FUteVqNG8r9Nikh54txaM",
  "key17": "5scYveeQfPaUDwzsvVNuXdx7PRJW6nJEzkC1HDQ8QHNf2M1w1RMEx2K5oaLoaDuv9bfiCvLHGQg64Vr7SbTH4o2W",
  "key18": "4ciritVfQy2oYapwDoLk34uaMjF2sjusk4fUCMYsCQBZ1MDkECuvX8BhkC2GJ9VL5CH7gCpVN6T5a2R4DAk5eD7u",
  "key19": "2VBwLghQXXnFZSUhduX3tkm7SMGrNobDmMzdgCakeA3LAHNRmreKzZNvvPz7pLz8ADbNtc8xJSb3V3XBwK2QctpE",
  "key20": "3Y3UkbTVXhoqtQZFFYKzdxNKPnh6D9UhxhpPP9GbCknUNvNGqs2j9besYfAfgQh6ouv4SvV7Ywv1iabMPZ1SxvCC",
  "key21": "53m3waqpu9j2GPz93Gjp47W86UFEiC1YYRqcHU6zDquQUMXo7EdF8bQ6zshuEE5YfCmSnRgQVEqCzZzP7daNbdye",
  "key22": "4cuwqRfRQU8BEySWM2DzeWqCbCZjNZyYaVoRicgsya6fvL9HqQJYo4iJhkpyHZ7Mas3GCqeazABC4KN8bfgE34m9",
  "key23": "2bU9eMTCfjD4BcXvsdpWLkAmmJe9hA2mvN8UtK1HCLKtxaLeJTHSVj6M6v4HLWuegZPXgYTELgy4F6hgN8ez4xeP",
  "key24": "3sivK5vwtWhYhyFDuvoexqrFn2rfY6c5wYeg5Ze4bMFtKsmXM3w92oELujSDeCjSnWJAZSbBAJjvMQv1xdpzGVpA",
  "key25": "3Qh9LQwdiYq7nMGVJ6sZGa1DKGkpqXDvF4y6gzF3XgQyo7GKfBtyFRfrXHCSxS8KXd4iL2WMYhAfJDymGTRYKmrT",
  "key26": "2Q7mbWK6jbGg3UrVUK9apmkmGaCy9B6G53LYqnDwF2x3DdcpXC3B4Df53ybDcRCfarQ5XtRywcCASF4g9WykdUbC",
  "key27": "2m9Qv5fkewCmLwkMFD6A54VZVQj6XJG7aGAeHycz41x3fftwQ13uk5HGNRp8FggqH5SsvqyaxWL6Z1QRprbgJCci",
  "key28": "2GzLpA5W5aqHHbBwopaLHu3XWUDzNUwAW2hYhPZuVHFuvjcbbbe4CxLKmNabn5Hb6kraDP4Fi5TrxjCmSKbW6s98",
  "key29": "4W2czQ3u7tedig61Sj97y9LKxWjDVq3YWFT8Jpy9vFrHT5NSkDt95AtKnw8NSi7c6YkmKyUhRiCq1MxppqKohDmN",
  "key30": "2VtpdbZHVUg77odn9s6LVGqhfiHtzNxUeTUyf9khjZkm7dDMZpTwBYMwttaDdARvH75tg7J15N86M862EcBvzDBf",
  "key31": "5k4fEXngpHCUJeZU7sPNVSHfDZFn3C4D7jUQ5cspVaCfmvcSdiowmUfh6qJDFycxYu6kbR48eexqB7h7JVjWram2",
  "key32": "hNF3LwxJtz1CEGGyiZRiEdryJJpVqcnYVS5RevKA2q6vjepCto57qtn9v53gRSA4VJqrqmCAo1SnZcXytNLMjPE",
  "key33": "5VEhRZ5FNx4SxN8emEQcM9eLo85JsidKEs12SCYhTHupuw3NDqWfS8jhyPLrR57hQCMcUq279PW4mfWkLbN3ex4P",
  "key34": "2oxLu84jAbfcQCovXbhf7gjn7qWyA87aExQB1Qxk7iZm3hGv15J2MHhao6vfv2mQ1JsUFcNDnm2ZfoWPsU1WVZih",
  "key35": "2h51dZBhaxub8mVh1563WuuLGMhnBwKBwnhn2aUrSHQFynMuwNa6t1xYBzjUETY7kuJQihtomi8C7SP4tQwn1pMk",
  "key36": "3r4JXtfJ2HuemQrJdx9CCUFwE7734eCQA9Sj3uW8uFnnzNtZCFyxDZVdpZvhn6tUgVcAb62JCN6EfaVv6S6UpdE4",
  "key37": "2zacTG9qVbNRMJ2XzsnwupD4pG83w3TMV1ExvsJQscGLsovnk3NiftjDBUHDuECRPJgKF8qeAgWaGjSVa5RtFGBE",
  "key38": "2qxW39yd7X4NrrMNaCmCG1z3eCu6B1NbshtsUcHM8kJ2chq9KekJBkE1CeftyUX9gypVfmRxcdFC4FKtaVU76Nwo",
  "key39": "4TMmLicKMhEMykesjtCkFgqoaEMdcwKAxoumDStC2gCCANcgdS7Afs9TL62CuDo1VvyhGL135b4QrwepM7q6bm9w",
  "key40": "3c7Ng5cN3wV7PyQY3PwmYJcpkfCrKrcnp3swYG3FNas85kXt7BAL4RxpgctM2EsL7h6ofCdh67Mo1iG1Lty3VZgr"
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
