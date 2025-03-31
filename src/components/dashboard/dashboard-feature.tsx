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
    "5gonRreX5XJvpNfx8fYvB2REgPLLjyFK3rCszdFUCALEdRqe9wKNzvrxrdKmsGxi2GhVK5ffpFKaEaRKWJQBbndg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nHb59UzVp3fS3Qa9XiCGHmZmkEPztvm5RzZqiExDUWZ5NrnTpo3YZK9oaDHFXHY5cBTzBBwgkcohX7jwaJWXAab",
  "key1": "57ovBiofihvxssdQNrFf2Pey5SQthNBqMuuf7HEWBwc41rBhCbqApGsTbPZa6qfRZXBFHte2ZZ1e6GNXfsy8W3QQ",
  "key2": "2nEcQ2uAZCHY6pcKkckPiwqNaRpPmBPsa5BddSNXpUsuApQBhmwLSiaW6wbzzafz72kiVJd7vAY6gAuMZPTUTdEs",
  "key3": "5bBgTdb3SeZJzXkFRBK6JWbgjqzUtfLbyVXqYdB1ATSUkaE17xAuKqsqSb8aak9x61xi9mGNDkmCH7DbWf1XfmqS",
  "key4": "2JjVJLBTA1WVihhhmcEFuiZLrCQNiy54X44EV5wRG3hgYbx89ajMh1tp9TwmMfZuGbiEC3RCx6QusN1sG7kR85yP",
  "key5": "4oJEvnH93Xx3pt1TGnWT3QqmVvbKDJeXsG5taBc4gqnH5MrZrsgmEW8yNQFgUddD83DBJu7UhCVpSD65k7mdA4Bn",
  "key6": "48PiaeGYqq5qSDhiofff2M4arHu4eToASFo9CWko7R2QsKbVzDC1mXjkZDvUc5q85NUzZi6MPGjm2csAPmBEr9hj",
  "key7": "3E4b4GbvEzNcMkRRyTixWb62StefN9mu3jAiuXTvPzGqbMR7dUboSdrgpLkysejCgnXAYsp2gbgjhmgZCos45HVF",
  "key8": "LysZSgUuN84MqXhguYLz21AzYgrDKs6AHh8qwTqo8FXk8Ey3mLM4fK2ayaNiTD5edpPR4PXWq5EWLaTbo6n5rAP",
  "key9": "3R6SZD9b3Y8G9sBztMZKzB7kkhynWGuu2qPoAoCG9zV8Fq7u1wjjt8e8rcE9owReVGRFestsKd9nmUfAuCtK4Qmw",
  "key10": "3PTUXSwMqCj5bYxLAgybGJGEqQgjcjzQLrfG7u6G9THVuNt8d5VJzp5ujpi4TEFrtSthzfsumRVYPmhN2JzVoZSq",
  "key11": "sawgQaeH8pS6tWR6SkGaGtMyZG9WLTXKhvBdftQhYTH4yoDLMK2yMZ1taD2ieHVsivziuqd36HV9mHsXrDpMDLe",
  "key12": "2LBunj8ys6DMEVWbR5LE3kUQeZETBxNNg6j8xurjygLcJPwhNCSgeBDrzQbaKqYthuoQrY5oXtzGm5WLXMDUv9iV",
  "key13": "5s2oeHTGQ1MdoPrVRno2E2ujBVcN15dHmL9ZsVXwQW5tXoHznw3BTPDtQDQ3uHGp5raYYcx4NjrgGB4pwe2Jhrm9",
  "key14": "AivMH4BwhcKeYj41wXUTZTeHZiYwZ3vzcTmN9HvLRtbtQqUefeukCFWC6fg5NoVGfboAN3Z9zqDyDUxBWphojQd",
  "key15": "5v1r3Ae9eaUwfeaSCbUQ9LVHiaY3hGymRyVQSubLWrtE8LvCiPwRdFaeVo41zV3WPbfZyzNjFUUE5PWsgUGVgAyT",
  "key16": "33cpoMQLzhyNEAwzCqZRUiC5qYFrtgQzF7nYy3MPqxawyeJRM7QuL97wBiFUK5C4a2YraMNQD6GaL3tcwSQ6dcq6",
  "key17": "3R9GLjFQBbc4hv5cWAMp4wwttziY9Gx26KbgcDPdkMMXcMTvwK9yQJM4ABD4p3p12BKAfVWFmGdqe7Nu6HizYAzD",
  "key18": "4enGm6P5KBiGjVfWqQ2DtYMCAgKrgmUP1LqRemKbYbYeSS3dTkWY2qfNeRUfgw3FvtvPEJMxnrXEKMddgjB7V6Pg",
  "key19": "5HBANKsaXQkhGUCVyYEFAGM6VVY3HtktdCU5nkiD9Sr7yD9mnJPonFE8WzUjm9zmdsXm2wBgHZG37Djffojez57n",
  "key20": "5ot7y5tjBVSBoUjkPN221hVjsSqxvD5wNGGQWDHSt6eFDuLQqsWmcfttFzShy5eGoWyLG8S4jZuM8bAS4YLo34rw",
  "key21": "2ngQtaPukov5srMhU4u5R7jdsFbaG95jirWfS3niU7qMf75sQPzxekRkrgMJRP5BUU3LUZeggjGFPNsX5JFUpdS",
  "key22": "4tDThAGPhFdyUw8RUACTSwEDoHtkLr1oT54zBVzzgPh7pcj8QCgBA3u3hj2sDYUPH8qs4pBXbLnS5MPxYnHt6Uka",
  "key23": "X48M9zM7Ua7ZwUENMAtQD3PFTwepZewU6m913MBDkQbsk37uaVzwyiEQygLATEq2sGfU8EDCk1SnjijeizEAzEK",
  "key24": "f7eBdR7x4mcwVh7Gve36pG9THb2kmfkcyFe4cChj1kFJ7MrvZXapiqrxMQgJHJSBGhSSho7qrirvTbEB7UYXe8e",
  "key25": "f5JRfpFnyKXQHSqWAYxyEqPCSkPcWXTyrocZi6cLA25y4JvCFNtBKXMjGH3ycAPm4GW8ZkZe9KbgTmYH8j9mYzC",
  "key26": "3RgkBALp9t59aSqEk7hLcuSxet3pRMRTAKKrcgzEyyFvSEZPJXkbVFpnXTvxF5XodGQcGkMCnanJnTX3GKCEDXoU",
  "key27": "PymGK4vG1bvJN29KqmVkpzWyWZAFkY8RxdhYv6obKWibeUBWmZayHQE7fnTMAh26wRdb6wyzNCk7eVfStkzTPMH",
  "key28": "2YWz9PMrcBEaEijXvoibr7Lo1z71fXAo1VurKP8UDjPuRNsSTji8sarQQd36Pdga7Wc2wRaVxg6HqoXFTZGQGoBY",
  "key29": "39km7nMiBqqUciMxDPxnvU86UqbWTSq2uzjgUe1ZLWGZJGMoipMNJuZ47Bf5f3vCKomfVpUJvbk5AwfqXXBxDNbf",
  "key30": "8TMBodKaDWYTMrUpEbKuwN44TMZPY1MjiB7AnxTyCCGQCqWcFDD2PZhgbwWmcJ2e1ZPCSqW4MGFM4jABnhNhHPP",
  "key31": "4My6ww1fWWP1X786vVdi3QZmWnJeYRWMUrhsiMSZg2RLT6o5qhniWUEp5gcDCXrA9jb21Bt7ymbYrcg8pFgkbYTf",
  "key32": "2X8wzPUB3Jx9TFxifEcNvAowCrcn8nSwMBW3EJNU8S8WWChujydtZVFWX828NHL2uvh3Z4kM3YsyAucg8CRJMnG3",
  "key33": "5Dh8WUi7F1HjY5gD4yCsUcVuCgZ5zTprm13S9BshGXdFUt3138T6qBYkFhh4MwS4zsXyDyxxEu5QwMNoX2rfxxki",
  "key34": "3GLErwFMVWmWUgpP3AibzeNkbgQu8i5VEwbHM2bFPWNzPJz6dEo7K2amZXdFUUjkJdHw3EhuVxT3R3S3W99E93bg",
  "key35": "21Ykuxb8byjNfbSpDZQ8ozRXtQ8JqJms4mkg1hy7UGHdHr8ps88ud39N9pH5qoKWxUETeKi1g1TziFtKnA41bPx9",
  "key36": "5wsMMRrkaiNMckeyU8out3SsUuBVjkn5pyPtqjQ1miH97gv8jwJLiDARZFDvvaWXRQnu5WcNunwGGy6KCdm4GE2a",
  "key37": "2SjsFmbWCC8mqrBqKSYZ7Fo14VHLF86j3oT9vW81D7Yv1k1JT8M2hiWa3Q8Qvqm1i8APy2FeBK5srr6NTYTzU9ED",
  "key38": "3x8q8yWRotxt73V2brEwGLjq3W15mcTTXqCxM6qLFr6RYXLNiv4SUjiTfV4vYnzGs1SRmLgSCohNsTjP8A6wQbPx"
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
