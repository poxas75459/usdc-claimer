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
    "sGZBE1Eawsh8p25ygtE2VKmrNXmiQ6siTJqS5V3hkYUjXPtjWc9TAQco3s9z3CnWR7YwoUvkMvc15vHvQkTTXMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zxyrVA96iFgfjqtzoBkDCPAfJGFea1jz473aHkuvAUYGuQgwqU3yxFE27UqH1vnaSXRx7mDS326WCfwKRXXKDkc",
  "key1": "7zoNvPMKvF1jP89ptajkK4CkcjQqHQBR57EovbnAtNqqqDZZHDzQgrUyy9EkZ5qEBbCLTTLd5ZZyQcVfkoLLddU",
  "key2": "EiewLPtE7J8H1RoS1mYvvb3RnpVjfX3nNLMn4Bk57yTczeP7Y5dLSzv3s22n4UxvnVHfbA2hr1yAWM28K4t8ecS",
  "key3": "4WNtsjj6aGJuVDxN9y1RKS87NVxwJSQ3PubWSKMvLvnQmJ3WVBW6u8jBFhAuL3zALMYGiQhw6zdKqytxMXDLbg5Z",
  "key4": "5m9N298DtzuD6bvcG2As3YXATFtPpmF3D4oTEFsen1tf5ZXY5BkzeWAk4QNoahDhVn5JG8UKBtKzEAQ2eFxMYcU3",
  "key5": "5yuV4kj5KuZ2Ywc1tXJTiCo4FSHn6hvV1W5eL1FsmDTY8zWNPM9HQHctySyEbiTTr1FwQfpoRzKnWQgkjCK77zgV",
  "key6": "2Dc7weiD9tutyMNJDkS7EAZvzUgfyEwEmgH9jYfGx5o6zm4ChWdqNhx8JeMqUTLqM8zk6aFqXFer82T5L7dxdX4s",
  "key7": "3FmptvdjHNabz1cDqbWjfxt34GNNWn8TuHptxjcVT8ffXA1PnpJqpi4cKWM8raFdvN37eh5cmRqYQ7reQi2fCFML",
  "key8": "5eyYnnA5KTrVGiVkhr7MSUde6tnkFwA2X75fLJrdvYSCcJ4u4iryxDyAxF8EkDaZizzUcP3z9dLYxsDLWrN42XxS",
  "key9": "62qjytWx8H92Nsbyzzuo7BDj4Fvaj4rQDRijRHugTy3r5s4a1rRMz4cgZFPpeYyaPGKN6CgFWWtUP5bFRUpAXyJD",
  "key10": "22wS16u4CSwgTEtXwPdw5dxXraWhRNzTY6iCR9XbmpW3KGjymFxrSWA75GLnMTu3avvcfxxEh1dj5T8HhWVQq6Rf",
  "key11": "iSReM8cf7Phpnct1fQLSNXm8YqzsCodGVrDiN9A6aMX9rvWVPDPUcyuNBUTdYMiX4wzmCT1e1HjwtiU3ANmKSoN",
  "key12": "2XpiDsN38iMnufhBjG8angP199D2nfG6q5ScJU1RHcFDgXLE2BRuc5HzUJnmp1WnBRFriuLrpZvhrbDPStY2MLsf",
  "key13": "5LSC5g9gKbJNhTksFZTGhhTSJssmxk4bviiRmkSaH2RMxStyqtjiALjT6jmqCj9o3nSgqXjdiF3URXW9RzGZe1kB",
  "key14": "3zRhSTXB3SQQ9277q5Nmg5MsX772bNyQVk92kN795dhbYWAGzS1nUVn1Wb8GNUcNZUxYBrGXBSD6Ngi3sVgRmQFK",
  "key15": "3uwnVwQC9pC7zVLtghSEY7tvCMbuw3DLqqCfaHZKKjZyTqoFqgNnaaWJH68sqxSSgotki1NT7NVghCUmxjjneaCL",
  "key16": "2tQfwP1ajqptwM3DHi2y2xEVK3mukmG3SZJX5C3swVuPEbydXuMPGismvsMAsFVTR8U826TrHTEWfXWUpkE7qTHG",
  "key17": "4BsJX1Z8WmUx8Nbg8ETY7BFKRMHAickNWiHDK3YGnxQfWwFcfav4kRjGjBJoNGEwhyT261gZPX9b3sSp88kiYcHj",
  "key18": "377ZWw54fNsZ8YTcnUH4vokBGMKpNVbdLN3zHBxWqkbN4H8kV8kby6uCk6GfArJvEpgFjPnNH3XWgQ8RM5hCWAzG",
  "key19": "5XNizpkQhv53KfXao5QYWStm6ac1XExzoGyNLCkpmAssfb9eYuR75vdzkuNADCeN3upiCMqfG8HpQPaagsRi23nN",
  "key20": "5368iXCPb8EiaevW4Q3MgCRsDmbZHfrwJrhWR85P2QTxEG3Gg26bAKRkAEbTFz3jGdAEhs7M6gr8Unc2GtYf4kvP",
  "key21": "5bg16aTA4jZX1sBNwaFUcLZvQtDGdg7Ra1ZQPThydEQT1wr9r1qmxoxNPCHcmaqoGdAkAymojc51nqCLUUoTzZmj",
  "key22": "5SNTMz4Lornw1HJGN1r3Gz2Ksxif37GvkLTeWHTmsFezNQcB636Y9s6EQypRyXCaCZE7B2LFRWGBKvu33J2wUqLq",
  "key23": "2ce3DdnbRzv6LLPQU3C7GRv3gW3Hk5kSLmowwAxVXY7LKKvHawbZuJ93P5xzvi7VUDs7G7Cq97bTNAe44P68rY9y",
  "key24": "2LMLGUo7gwsoCbrah64RacDPYQm7SaU1kCyEfnUZXN4M4ZpHXzB5swKZdX3cM2EESdhQwaj2MDcu1rRgfL4dcMm",
  "key25": "2SZJEX2oDWP5s5y9BMCJcWkPfFWfYZX6y5LztGQhnk2UUTFwCpNdDoqF3SuAzETAskpKZL8wNuX7NGHTkR7NQ1Ri",
  "key26": "3nU4q2EkNwjhrM1XxTTSJXj2ASaqaWbkfh2M7qg4YredTs47UqpacqMFYkTpGYtw6CPTkp3gTGhpKuyPeB5PDeRT",
  "key27": "4pYnCJkerXBeNieAKDwwkQeBvtH2GQnzy1r5EHYnJQCFUtxgLNeU91kzc93XzWmQ3PxGDm3cRwDHCPEY8TvhEQgp",
  "key28": "5Q8kxFWb6G3zCkPAiu4qQ9Lf7yrcnHd56UJLhVkVJeBK2MU9Yv9ZPJr8FRvdb3qcRCiLp5ZgqvQB14idZruTS6ym",
  "key29": "2k8FbR7m4V517KB9v8GdTi4L8FqJJzk8tjfuHB5cRq5wZ4tgp8nuQFJD39RhbdYWG5EZpd5gNy3YLUQjXAEs6AaR",
  "key30": "4WjY9JPFLVueRu5z3pBvvranZiv1uPDKGynVefBfaWmHswKbYBWqPsRPa9SN2MEf1Q26yxvR97P3yiZiAQCN2GQN",
  "key31": "4Mg7ewE6qhFYTozT1ZSEn1t7oREHczuFRoU2Gu2yVRTfXJiitM3skaWHMCAKQdgCoWDHAgeY2KvSfrxfvj1x1FrT",
  "key32": "2crQ6yCmXT7jHFD57HTywSKniUdeWMjykULW5WdSWMQrEKgXU8vT9o6a4uPtHQ8GJvUD7htWZTJqYawu98tMbYp7",
  "key33": "ZHw2gCM7DYhpqw5yrGJ6kSGXRkn11W8AcQkBrva6QW8CXcFhnk8PZvXaMqB31hMpgK42VwcwTWr7ncvdUFW5ynb",
  "key34": "2Re5MfWbNspY1Wpt3zqxFzb2ZJVEq5fJcD1L7aZwL7GByUhUGy9BCqPCNZRL8qanJkuJWULSv85PF3dkKjWivVzS",
  "key35": "2iLeP4FLZ9CLBB69pnNF3zo25m1uU5mHZnox6UZZHKLawNTE7yQjnGnHkwoiDDTVH9i7vsmjJyTCTE9E3vwBsUzy",
  "key36": "uw9qYQ9gXuUnQUioERsWk7Ce9HRREjuLXDUp48YwEbEZLHfKa31dpzyo8rH6c5ak7EquGeaVFjHkpxFNw8kGuXo",
  "key37": "37gBSvu1pn3HjP8295ZKHLzjiwbdN8GmmUe75v2JQQEULNtNEseDmvUW4SihTF9YLoth4EaxFCfssFFk8S7JP4Ek",
  "key38": "2M1xGCSLiaCFeJ53NxJMM4oRwN562AHBgobBMNdBSvTbbL2upWAtLdsC6Tt4aBwEmGZ13uhw7iNzL8NNCGRgLjSm",
  "key39": "62srE5DdLw5vXD14DWWsepCxyNQ5Gy12DJhTFkaLzCnGCrQZXXfK5dte9eHTnhU4YdQPrEHvwhwxCrQmykCAZ6nb",
  "key40": "33adEV1wnnigYeWnZGnbEmR36Jhj5EBa2VzoyYvuJK77HVz2gGce43AUYasu5yLyWBTY5WnoPdzqG6AQCAEdedgP",
  "key41": "5nKN1CsUHAiLQtuQEGiTNg2Z2jsDrtmJzHqqAbad7s4x2XmCqvqvKWyZnaUP8QzXGRjT3JNkpSQ7aNtH2nWxKvNb",
  "key42": "4Lpe9AY3wFJRsrrwmodwTVd1bFDgdo163L5Yf4XFbrNbFTqdJFBA39vnLvuoaZj6Z6HMhAv3kQLGr2CSTyhvrqUc",
  "key43": "4ZRKYBLdxEZt97FFhWndVuL2ow8uWUwsYiWBuiGHRqLSbuDg3cWAEEpXs7MDSceiLSqnY5p1xtmzK8fwFxfgVRvx",
  "key44": "3D4Ymdu5N7ZNfdJKz6wx5Xr5okJXJqqcsXoL7Mb4yWAP1QVmewt8SofCZjsdTWPpFd5xMyGcrBfVVNLCJguVaP9R",
  "key45": "4UwudKY4otXfK4bWQkJVjUMwV4eVWmcf6r9JfyhmuvwC9s6kbXs93C6qFWoJrrttyyZYEb3H8pu3RK6bPubG1iq2",
  "key46": "29dmHSKHerPsURnoom5YNUzotASKP2h6sHxt8bGxKJpK6dDymzLfJUunw9B3JPSZJAoh437G8qj9yUhEWBj4xRif",
  "key47": "2MSddco8Ht3Yi77zR723ZSjzSWo6upVGY4njG5yRUjAybh3f3r6DpWNtmoowiZmGHPUBFDtp9wjZJ1s6e23hiX6T"
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
