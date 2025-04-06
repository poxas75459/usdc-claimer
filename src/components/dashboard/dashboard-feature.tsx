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
    "2JzTRadsTmKWkoyqYY9HvqGChm6HneqF8DMQN77dQf97ncG5jKL23GBoSMzTk3PUKQm4QXfB3y8YaJnshowav9jV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXytR8SRxks5ZuGdoDsAPfBEUkqL4hM14eRhGERraoE9JPG987EwESmkYXF9XBi9ViyFadDmMdsB4XdLPxkQbiU",
  "key1": "61ddFFxG7ABjLc8GwJjnmomABQXeo21eWvDjBr5aMVK1FTFdPKgXkfRMtu6ri8UyoJLUtMB7S6GRLn2USpnDegLb",
  "key2": "3HNJzBs5C6WMXD5uKgpUgtKLgPcRSfLcAWxJ5KBAZNKdKDJJzTVTU4fxFLR29XJcscBVBBMoYxVvpChwchghxdAR",
  "key3": "4C4zA1n5pC5pRHPXGXPVat4Th3jL42UZY7ERBZ2Kgmbefa5EYEQWuskWA1hUpiKdJth3BneZLqp7Btm2QtejweKM",
  "key4": "4h6eA7q4w8JpY3tY3yw9zM4zy86QjFenaTVpD167Sxxx7woyE8DdWs2M3qGxtNGtedbxYT2F2WzAbUTRTrjHVVnK",
  "key5": "FTqzEdFNwb8bGLUPCnLR4JrcgkHbPoW2chNtbBi4xrDFAW4haxSZe1ziV62JLNHH7tZhQTaCsizUtwCJsgKqgEj",
  "key6": "3R4iq2V7AvoyxWyqxHZqMDkcQyh4bYutSqvy8mNmunbiZQfMYs1qfpGLV4CpmbKkd9Um4zsNNJGtZm8SEnbuqrHT",
  "key7": "32RdbxK3sgDvuXU6jcZi8h9feom9uUv6TCAwYkMHWMAdXFc86JAZK8PN59LdPMou5nVaJGRnrSZmMZs4PpX6M3cY",
  "key8": "mV1QvHdxYgLf9TwfZJDtTp9tsHhXzaYwvRtJ2GW2fnyBZrWPvshZK28QcM1rV1soH9M92yyDocvRuorLb7wemD8",
  "key9": "5S9v6JaC2JFT1QraTL5C9F8iUPZRd9RK6PzE4zdNj8vrNqKqt356SnfUkFjwV3CEiFDPUwV5VpSV9KbFN2vpvMiC",
  "key10": "622NH8mgdKNu7xUF2KjG5F2vFvrPs9AXaNvNbm3ShAsQxEP8DPxk5LRoCjC9z7PoVsGKZxZCezY1QnmEXGHGFLMm",
  "key11": "4mVr9BBwXyhKstjVBfnpGQe3KKsUcnddxy21HXFDpeZzmy4gVb9Z6gVaDWH2rPDhZhd6qa2DKekUtHzsNbongk6d",
  "key12": "5jjptbGFCEoi46Pq4YhMwHAyCm7AX587EMuCH3nrS59m1dpRgtQ5CYnDX9Bhgw57vsKP1Pud7d8yuKjGrWo95pk1",
  "key13": "2hMGXV9DRjk1h6T46eLSUpUucfMYyHF69ZfxPH899gHnkrprdn8NMwwzkYMLGvPms6KeJhVuncvBZDSq3zC12W8N",
  "key14": "2nBxoyNLesUcKdkBumgXUPAz3VUdiTTwLHXJHD68kkpLaToFcG4j8weLLNausk56nFocBq2HsxAdzk7stjFmW7zb",
  "key15": "3fhCWk9kL9t6JzmkY1zpVnB9G4MUkD2vW19cWKKoXwPQ5yCgbyW9QdYh6UeBdyUY2X75voRMvxtuzfaGHuTwPW5R",
  "key16": "46znWJq8zc9TT2SQ3K8J9H89vW5XvkjeMSsG7Sb2UQkVckvvNGZW3WXoQTmkUdqeCYNd5DAqnHiWpiWgV8rUJSsa",
  "key17": "57uFjYz3qYvBjHFpGwHGw9y8rp2KvgGwXWSEr1N7wbqThFr94Zo7JoR1hf6PC5CfFeB1CEbnuhtFnXxAAELAUhLK",
  "key18": "2bAg3j5fPRLSpfrKZ5XfoXJ3GCv3gTHEe5fm5fxJxTW9FGHFnC7AQ1eYS5gfjp3CQnsrh6VyYTZJmBFqpHcCLUWB",
  "key19": "4a4nYYkcvbV9pvxGhfjnRGzsRwx7zPryDeZa6EoGE57Hi6hxbKSMoAC6VsbwX4Q9BAGN87KwnhtVShZCW5f1AT2M",
  "key20": "4mhxdW8bhctpadDiEPeVP3v7HV8A7k62crHGNXLnFkjAL727Xt4ZDMTMesKTUByKdTrbW7iX6ABBawoq9x3jraJD",
  "key21": "5JASeo717VrCchcDhPoTbxpRRQAgGRLHsRRrsqi6JdCuUfLCAy2TsmMWZJinxDT8yVzQ1UEFvboxx6KX9zXu64hu",
  "key22": "51tGmXmbLwm5NTVfZfNDetLjKFoPwJZz9ZwF5jPyQALt93AGAABBkA1xYfj4UunaWkXu3a5E9bLnPWNKb1Mzesn8",
  "key23": "iarrLA8BPdjfNNp1qBg6UzVGnMr14drSzsia2xkVsgHEH7oUpJQhG7r1avZ6P4PFLKVsQBGQcyfcs643z4yfeB8",
  "key24": "yXurccDSEQLFHaE1gPfEMLgmFrVBC34yjNku2fdWJUeMCWkWp1HoVt48WezXtA9B9u3JRgfDSY3S5equkf8L6TR",
  "key25": "3XUeMNu5FxRDVAiv174GCuBBbqBn746UmtKWcaFkUnd1LmgKVogqAiCQTwJiADjs96RLyabnseCfzyqXRRjb5Fr1",
  "key26": "4x1ezQGntshJ1moiuFFqUDQYAQZE1SNk7iSBK28kdmpGAHfVZASmsTm7rR2GKGgERuGxE11AyNxVWFoJCzWc7bPT",
  "key27": "3YMRpgPGE2hCjXUzpbP4QVm3AUPq3SErASuBj8AmnkioW2uqiTkVy5eHofv6mVi1dj4JgMFumc39vcsQxgPiuZ4b",
  "key28": "4Ez8GGz44UVaEfedPjTB4s9759Kf4HLWF4CYixtM8ZvNB7PCMv4a5daUwpQZFK3R5xWubMGTCt9LsPpWQKRqDxbV",
  "key29": "2AiDLCLwG3heXt2BJXxY5dtJkCdb3XAzuKEy4is9jLs1aoBCgcou34npCgLWiWEi7GzH12VcerXMedcSKBwTwALq"
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
