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
    "4PwhzrVJYbAx6eXFDsHJy4k9QtKP4B4n9PiMFASgKAfpib8zoFDZDupbGqYc7dU81ZWwua3pywKoGMMfrQNd8M82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62miPKdAeshpqHne8KYmEcPM69jvkLZgPnFHaPQvg69YXrHuoP7SPmYepWfFt4KqTM8Qn8rzWKEZhNYNKUg4j3gG",
  "key1": "58En3HC1uoVrNj7XHU1wUVkw8ModMGeFSJ9J12h2KrfBuacvtEMDsDahsLpgBsav8Uyu9wnNgvhYdGy5NsXLpgGk",
  "key2": "4VkJ8JdvHAjhKbz2fu9afAUJp2SCVqL4PWx4YvzXLBxyPwX8vjMKduZwnzayTXzYW5jmKWGJZDmgCHCbq8p4Uk5M",
  "key3": "2jaYSgsdjZHJ6QkM8D6dHZM717RfFN6yrxvuZ1Y4Z5yaMtfa4zHZLsaL7MuU6HXDmNpkeX6QUxdUwvxkVDoJXqe7",
  "key4": "4bWYyv5LUmqYunYGcPx3rDV7HJkrhnQ5wHeWaQqZSJYCswwFYsnnzQh2waJTPHbjEHqnPRu6iQrPiUqgZWpBVBSa",
  "key5": "251fnuheVWycEzWNY86PFokopaA8491jiP2ErJgXEu8rGXe8H4jpxDfeyj6uDsbkemsyrS4BDvNo4bYHSMetx3xb",
  "key6": "2BfQeair4MaDa8qiieZFecvzF45UtWKyxnS23vNEzWQD7XdTEvgvcAbrhBrnEwaxyPn5sZbEAdvKynaMU2LsAFQ3",
  "key7": "5gkGtgAyXgXHNUQJKSxMLmtULwuiKMeB6isBjZHddgEVZuN6Fm4Z6jSgExsJTduwTeGHjoZQwjz2W1jdRbpMY8uc",
  "key8": "U8gfSQKvzfYaerLLBSM38iPn1eQL8gEGgqJ1sLnA7AEffwiDGFmCozqYM65YQsR4wcR4V8nqv1ZK6c8T1vqfb7g",
  "key9": "3zDVLxBCmbnRgLijK2trgz5VgfiaHipaiSrc6B1tMkcVkcBcWgeRTCff5m7aLZh745Nv29AziY96qTtqjd84h8e",
  "key10": "3d3MzbEja6sRYEFbURJzBLuH84dha4YZ6KiPUhmVXYjf6ohm6vzrFGqroBRxXBRJ7TUB4zmK3Di84mm9oRP8QNzB",
  "key11": "7hFn372a5hHdceX7i2bw2KdETBXCD6xhEMLqp1zgFMcH2b5avkPWG32DHB8A6AaXPowJdNrXcwLCZ4Av3iztJMy",
  "key12": "2cjUrKh1SdLk11DhSosDynECWQdKW3Afg5MqRWbYwoWZ5Dn3qtfrrCzBHK6uKYsxPdA42YmP6diA8pRt49HQS4cN",
  "key13": "4o2fbiriCMLGr1JuFcGmtqXVQ6ShBFhJaGkuu2yWdQ7uXdgVWg2u1qDknksZ88oFqUDGyk69j2LThb6aycCHEAPb",
  "key14": "4AwXyZddAHhU5sLGHpgknGvmqpbWXKkwnzaYSUnMtNxF3ccE1aLPECGbVKyHCRh4gF8A475sbbw3hmKXNHBDEGir",
  "key15": "bn9eESbAmHEEFHSL54hra89aLtCH2bgNGTiVzC5QESAA9Lc7Dg1Xzcw1QvS8LECgwgjqSTtkgtziyAhAhpjXnRr",
  "key16": "5LARyZvjQRgudM9fLZ9p4tviNe9bUMTSgMqPAdLw2EH7vvSYAgEznZ61DK5tAhMMipD8QFkwdySrsWw3K1tdfktP",
  "key17": "4SBUR1yFnsNzD46DuYgJyvmtZapCFx1QCxrCBpqHs7y75kirKGD7VWA3pUwUjNL2eFmhFQd9tJufawCeBShusavJ",
  "key18": "5wUnh3CLM99Dt3hvFLSBTpVDG2r1gkDpYs5BFcDp52GshgizHumG5qfyg2rJPVGoh7gsMoho16mjm6k9Jg8WJQiR",
  "key19": "3fouHVp35YtucsAoT7Btj33mQbCsonhD5JZHzvTHdkwD74ALD4uBKjPdBzZJqrxKTNm9qvnBExwjAjsUfKvT41u4",
  "key20": "5mUWKzBaX23yi5PSG1Kg84TsggaQEKAa7JMz615vTfDiLc7mJfGhPuWAp7WPPgqmEi9wmJXiJ3u73QTkQ4iU23Cu",
  "key21": "3mVCMeb3pLAQi6eNbXMxvPin8CZfF7t1P7m7qkD1VajKKDvt3LVzXrbvHtztChm2r9R6tsyqUWJVT4e8YLXJQTpM",
  "key22": "5VKZ3TswSEbo9sfw7pPoijWRNM5rh54jesJxwhK9kGiM2YJ6or5qWJUEXumtvZNcjuC5RBuJt3jse5hjftsMyxPD",
  "key23": "2FuU3G9Ec4mxqY93no6akcMm9wxfar6i8XUAUBPBya2YRV6WVK5DpESpkwBUKEYckaVSs7zwC5Ce5Lu29VMgFK7E",
  "key24": "3zFhWxS5iM2Gd4W3YD5gBH6FUXRVf7kbaF15xxJEYuJWJVDpEv9JV7FgkgB8AJiPWgaqEQ5gvH6eyYDzVP9QzhiR",
  "key25": "59rgUcdRxqXHovnUZMw5r23RhsTEAbokbHMkqEHWrSH1wGrB5dwj9yTKeZgn2qq7g8yJ1NW3yDUT9qtPWGcUFcV6",
  "key26": "2q8ChQVAiocvzuaXbww2cn6Nrj4Jhh6Ni3DkFR1YQQpuftu8qRQyAhF3QNqpNnicvtzoWbscuXPAq3UX4f6PeFpQ",
  "key27": "4MRdeVWRD5vqWYjAVWVv68jNHtNYLmRUQcGPBPdsUu3JEVC6axkchybhP4L5xvzZQY5u861GY6YcBB6iRuX35CkG",
  "key28": "3mGVzpqGzsyL7kvWk7d1gx2gJPhDpSDesn3cdCT6GXjziRvVP2HGRg3YeX3EkuEB3e3XpfTr1ABvy3Ld8PQ5MTXB",
  "key29": "HxK15vEquC5nDyQU8YrUaNdhtVZY8BQSV6dH7uibpi8VWMfJM6EhYEZVZ3oseawGKgzaMMv91Sr9cSrS2ejeAe2",
  "key30": "4KMqmTMQWMfcioaMrDBJTZPvqAnHBFDoqQfB8ScoDRysxvTRFLHdR27B1CTCdtv8a5vKMvo1N1aQ1Y2u9zu78jaD",
  "key31": "55pXAnduG3FRfozeqG6PyUwP2FWQgwLAQwtcWTYr6X5ScHfGp7yvTLYuFDAvZkm1aSVQmhB3hrkawLgQNBaGt2EF",
  "key32": "2owFE84sftJcSWJwjhL6RWyaeRrTLxXhuAKJeCntbVXTnGYmDm38buRsxGN77LUAr3qw8GcvhRTawnLY1S8mvTbp",
  "key33": "3Q2fYgaUjxo2L7gAVqvPzm9kVpShsHvx4eBctetedjrLT4MVURHk1NLy9m7fxn8ZMhce7pm5h9TMZjyBzC3GxAfr",
  "key34": "3RJNyoAxvhtk8WWxyAJhhn9GgxWoi7HHdCVz6RSY4JyaroKETF61NkGSP7b5VMpjsjwS8ebaoMwCX9L6pk1RGYdg",
  "key35": "zaPsb4NbC84sUCrZLsAJnKbAh8WaTNDBZ7d9BersCEBm6K2sX2bPhDkhzcKL2TYzoEyav5SuMEUJSqq6Xe3f2Tc",
  "key36": "28rRvJf8gcvZifXuoZFN1ADmGKUBS2ExbfZU3GtFndyG98iGLmK9RbGGKqc8tc6gWZCivR7fan9V2CHNT7MgNbbK",
  "key37": "2BLhEjq7tz4gcc9KmzUmPjDerVJ6E6Pv5QMWhgJfpJ3e9aah87W5GrtCaGkhX2Qs5Dp527JXEB3JiddRvZG9SYC6",
  "key38": "226VP2VuYnkUPXvJr95kEg6XVXZvQzxvXrFxy7W6uMCZyx8oZqRCWdrvg1fo4jB2y3iWhtUtorpQWEsuwprMNnkb",
  "key39": "5S14rBNhpQxNeBUy4hxY7W9ukewMnwSzrjAuYfTCm4dqErRibPT9ThhcHeucNrpF6JF2fzGmeK4AgmY3k4tWxyyb"
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
