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
    "3Y66BSo6enY8GPNAxNzmtoN8wQfbizb2QD68ou8r4CQaUzr7UjDwX26uDA4ToEr3f6KfAAT7PAoYNRei9cTszyUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iADYTmPq7wN6DZWVM1zEKMxnYhsUpbLXZSsggJ6cWqhucT1wGx9XxTUEiuR5irnF7Rmy3pFWBnz8FsqbGjazzcr",
  "key1": "4KYbre4bebqnQGkQnjZJ6RjrUcTVSAkNf5gxcSLc8qhpW7WrxQAx7JwMJEHviFMUzA2kjQDW9oRQ1vhWCz4bqn8n",
  "key2": "5LPPcz7f4c2xZvpZ3wnsKw4t1XYXMdL491FR1AdXHZ73s5qTkuRooAXGBCUBSqhnWmoY4LUcb9oc8pHTvsAXnyfk",
  "key3": "4Py4Sz8WGVXA9oN5mkjfJcMasXarfvWHP1pMjv6bvXzwy4szK9D1KjGZ8mKcDuhPZB6MPQQXwd3aFx8oKw5X6Ph5",
  "key4": "4DJsQiKk2kjCHMDPAdRK3JQbVwBoCma2pKqUMmyBVEp6FXs3kdNSU92So3YwTobn5JsAqkoorFM21zo2LcCeeHvC",
  "key5": "2QYFXmqZhKnAmJEnAEGfRjcQBnsCkYPnw8TWVx2MYuNHiwEu3Y3B6C84zBCoqFpC6uFMHYDaUvDTc3TbUdJeET9y",
  "key6": "5d5QfkTMVukfRc4BrfU2bj5wSD8G5dkykHBbxz5KDGvJbaZ8gS5McvU5UNULzxNjS2moJwvwCXZxwNDkarE6wD2k",
  "key7": "5hL456y9Nupsuyt3yTmE2QZWpQXiBB8TvKcghy2h2PDFCyS7TM6FLCB7weSPHCKyWcHZ4A1B4gi28BdJJmGCBT2F",
  "key8": "WAy2yqtPUk36mAJKAoe2gXcbeZfCyhvu1ecWWERrcnp3MqNfULYMLGhN3Vvx6h7c5412bvSQymG2fM6LaEgMSo9",
  "key9": "4iUNTDUbLKKWopNENU3CnsZ2kk8dSFAZUSkxBZVQVsnrp8Xz3iDvj9GYp3ZwX4w3LJhtNkTZkvoygdn4mNwTeGi9",
  "key10": "2vBXCJhimb5YM42RPsJVBhzJ3Q5rjFYZBXJs3yWWXZYcR2239Tgy7NuFaUKtoCDLXqJGqYNotpbmsW4AB7Pm7ZwW",
  "key11": "5pWcerS6kYQK89XHqYv3kMLYmX4JuPuAo1To9ighu7VEmgySYETUfyrN8924cXGu4NbV8tM8wK8J43b9UDSK69ow",
  "key12": "3xUPdUrRvLjuTcpstiF4BYh23EL9cRPzKED8RJhWgzVCRW1hQtT7sJvkLfgfWKA5TwrQxBF49PfYmRr8LqxqarvA",
  "key13": "59LUUD4fgqUTMWwLHXKHk7WMdXDFm621Ly95QjtErjnjGFAJu27Vn6CyWWgLh8PCZXZEyuNYVZ9sJ6tDXrzAvtZ",
  "key14": "quPZRa9zF1cWWNnDKJ5wWqwHLEQLb29CSgsusxPLqpjdU2pMNUE9PAxpegH6H1iiAGhcYzwUi6eD8i7YJXRj2J7",
  "key15": "2EYeENhy69jkLU6W6siag8AKZbf1kg8E7CC3umR5i9xW9ChjzREiHUqKYsvpTqNdJHWJJTo3wp84eH6ds5fFSBhw",
  "key16": "4agXwZKCSXFqSYYGjkBscUzkAiiJ9pA5XmsVFVH3So99orgvFUNpioYGC9j1jt4vkcfjgzqEUViLBgQ2TMU5kR3g",
  "key17": "4tPGBpyQNENvfaM8E15iGKC81NFCiRhy7nQi4jAkydzogKLJPPvMq4YyaFqLyV4yrZh7bjYhP1EqjGi2Ufc7uMDZ",
  "key18": "k46N8H4L4niW9NKLfoxEbzEBQWhtYxiP15dHcRm6dpJhh1tbbnS8PPARnEQTJZentmXjGZ6pzYCq9wTZhy2NTWH",
  "key19": "5UdYD8JzUfd5qGws2XgfUEAfRJaSGZWeJMbC42vFgXjYa1oe4N5DAZfosinVvCRJSUxVtQrNd74qHvZdkJNyPvHZ",
  "key20": "YiaeW4RJyvfivxY3eQSfVG2yoyJEUc65gMH5osXYZazyhvWwfVV6FktaSxaufYc7psAHvddtYNSQ3V2oBTYXzTu",
  "key21": "4szPu3HjVfhfikAd9Htx5mc3HhKGoNKnvRgCqEJkNFzV7iEJeV1Ppy8gWgDCFj2DSR8kovWQZwJZFPKdb7QFum5q",
  "key22": "pobNzudYWc3BfRQEWF5wiTqa9R4C5SVtvbuYzncBrFnJdTbKKmSfWHm7ZnwGj4PBiyt64EYyEfZ5xa1VgTzJ8WJ",
  "key23": "4tSuqMY3CpXm83bizZcow7zuLfULfy8HJn3jmGqwAKak8ZsuyyxLAdTujpEt84hvnY5n6EWQGQkzpcKejTsS1bzE",
  "key24": "5rQsJaUquDyU9QUSvFjzLXTw2A8YQJcV1PQALGkmMNn39fxDG6rFGEuHVSVS38JA1dtBWVQUrRwWReH9GR9htcj1",
  "key25": "5bSrmJqjE6eJmK9UgEtD7LstL24goEq18kgum1N6WCGiqakkLYaq2hAhcFfBhCVD593xNjw6LuXFzcziuDQs7o7i",
  "key26": "4RqpnLFzPyu4q7tGqwg8o8friBa3KfUXYjecZnangxytRBmYsbBBMiK5wWktWwFqUrEaKqosnomuEeY9UPkmbYKr",
  "key27": "5fAHLaSLD1H1dcyKvgtee5Djk89jKH1JruwwzutKEiAG1zX3JbnsAyMZ7nuhjYMK4jKApcNDm296TH8wSRi5hs1B"
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
