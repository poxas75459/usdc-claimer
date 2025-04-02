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
    "2S8JCzroCi9hbZtXVHwRaJqxSDKzHnbhp93wdj2buHYNDD11ZwvMfqUwjvsrSxziJu3uEzSeWGezk9RLSzqx6ZKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qia4j2dpFE2drtj7DPqCz7sc8jRnMnmR3jTwm7qW7KmvH1g6sG4o745DQ85GxvfcFuoyz2VWvoA5UoG7EgNSUt5",
  "key1": "3dYUPHPb1idX93Er6R67sdcJBwnPY6eQkHj5hHN9Mem6Kon9YfcWmYK6mtnB4sLerFFTgmxkECbfu6Cfqc8WgLJ",
  "key2": "2sXpyAAMEsdHBVCMv9vpHPLngU3V6t6wfxRgkoR28PhRFnd9Wv4xJenmYVQ9iJwroXMnoHyMhsGEywSysh67ecma",
  "key3": "X2msHWzYvdvnDrxpKrQ47BeawJEx75pDeN4Y8sukKuNWCx69yaaizzbR8ErgP26joxGxupTZRwYnfEVcBBSrGDh",
  "key4": "5n7ZxQqGfyDaZU5BTQyaTRcbqNgM7g66v9my89mekQ1wpthkr1AkDJGREipLqBE6R1ibuX25K7s1cvxHfK8ZaAAk",
  "key5": "3shxjwHvBXKU5XCzgG1QwZiLm633yrXQBQ5HB7RNRUaLGGsHpcYT3Cb74MYFaXrfVQNBgqcXmMW5uAFPM7kcrrXq",
  "key6": "3hCps4BVw5Rb3nzSnWbhLmotTKpztU1LKbhsob5EZTxr7CpVRfPSkJGaBbqQqE71QvzuQvBZGfCrtVw5mCByFU6q",
  "key7": "3FYFTWmxNgudbZAqk6iHicJatLVXztBbva5sdX12tbB2gSsmznoa2nz3jsMXKX8whWD6iG8GpHGzVQNB1jVjf1mH",
  "key8": "pj4riirdHjUE2Ku7GmDgNu5N5C8jQhPsw5wp5eBwAo7PMRKeRm8eCWVjukadQjoWTEEVfxZimDtVZ2iHsJB7zCg",
  "key9": "63FqLmqmos4NuFeyhatQPdKEQsiPvqnRa634DzowkWbTjLvwaPgQ2PZom3ji3pddr88i7W8MsdAauRMdfiR9KMSo",
  "key10": "3AHTo3Fx7J6xirdR7FBZuM4cfrEgPsyYfqB91ZSDGDWxEeDK25VVWoudWSDgD7EgYa7Sq1xhmodgypAJ2ZN2jMUw",
  "key11": "5i5ma2GG3pb8y9gY4fofNPVt5F5i6y3kNSYhPjMRT3XGnDu8BEKg2epaEs7cZP9NLbpuh5Tc6WQned8ko5ChDUDz",
  "key12": "5DPCVM122GFHjiyx5tcMDUUpq59o3woczj9bKAYNYqTaZGEypmKuxP45ij5Z6QjCMpBCBF22LfkRzZx2nw8gZF4U",
  "key13": "ARVaNWPQxih8PDWwZyxdXHKsBGPAdjpYp1UxvBHKFYdHGoL1TSZd33zaxRyAMDBF45ZteKBXSQ9EMucYLADXGMX",
  "key14": "4CTigpSKGynWXBVyM1nFqjg9RGDEMUqm8Knu9j1TPqvTJz5CkvNkNLAGqh2YdCdPob2UDDjx9YQ9KsMzzzXdggBq",
  "key15": "62rjnPCpRVEUB8RkcZwUbvkk7J7tvD9ugPmJTxjS2PNcQvddokqZC4K2Z8vEdXn71SnCuMBTQTSTSJC85x9msEWD",
  "key16": "2ZW4Bs1xkQZuzPzDTUPnmSD3REHgt4zUudXYyacSCY94Q3nmLqbja9X2EdLirYxxDFgAjkhaTPHu9fwtohizD4cb",
  "key17": "2NkucGqX1m7k4e4Qk5yTTuRRD8pipA5CXdqh5gbxDb24AqDZ25GkYyZpXX7i9WY7eTMCxAEaTo3SG3t9XncBB1yy",
  "key18": "3ABV1WAfxYyEdhdKrod2MhTkFUavsMjVyuhxXXSWYEGrXcPTskki37VrrDeKkwtGSwLqJyFwhd7pXKb9Z7E4mPpd",
  "key19": "2Svv8RDsJP17mzZRbx5Bxoke65LsuoTCaxaJms9HG4y4wEjjEfB7ymLgRu16Cqk7zh2KQ9A2pGgf4eGTK6NhK7MX",
  "key20": "pLfm5YWXh9G9KTYkvJLQg3ue46Qf88ZHe9eUBgtSgmTWiM7spY1VbzyVe8wLwxewYip3ycbcAWgf6g2AZaAQj4a",
  "key21": "59gAjkjjvCofTBp71NEiDGPjfoBSqRbMcWvpoAgZHpFXdNgb7VbpV7Gp2G3FeW2sUKzX43UHVYaZmPiPd7XvbX6N",
  "key22": "4FU9Q6dsyhE3uFSaTj5tMdCZrG961PDsJ66MPa6GY7GQXfV9zAKzUPEhkELcqmftzpDubgRL5Ms7GLsVbMdCeyR2",
  "key23": "3ag97s76bEUwiukUq29s5M2APqUxsLGxvcSfDwFCzPNNPrmXek9jXoHsBd5agdEp9N4bgDDQJyk4X2r9TUd935Rt",
  "key24": "cs3WzLvtKPrnYFfVeHghrSowR4SruhpZLV1R1B8PKe3kcrcyAABcxjhDLLHrrByacwBRFZHoKJchiM97sE56goR",
  "key25": "AYDcpcX1R8dyBJ4GZj6Tsea9vMnpVW2Ca7gBSQHDP7afpBHH3o6mwNfN2t9Dbk92LbizjBqKJXY1FBQpRbjXLmP",
  "key26": "5hYkD9jhAaT8iA9Wi2aWxML9Xqmk4ag5xRh2AZxhgfvRz4s5UVt7TSczcfEmXSQSxT2VDAWEuueCUU1SvuqBgucq",
  "key27": "2o2JZmmfxeGeLG4eTZPyPwyXYHQ5JhTsP2TLhsELMyYQKEZD8ueX5uftdihE1bcsRzFzMxmeyw3yEfryj2WU8W7V",
  "key28": "5eir28bPmaCAH9sqpaAQmbt4ruFg64cHfTrgRcPw5RYwvcnpjahacRWsFPExywcU5kQiww8VWUR6J258S34mqqJV",
  "key29": "5dsj3rmbcutS7zKHQpngCm4qemRRuY3XKn2gxMfnurXDEREh3Bzw6EEfVVy7LvEUrz61sg3ahdnUNY7n2vriJpBN",
  "key30": "5HQi2Yn4v8F4y1cupvtBWEbA314a5AfWBgLAP1igwvjNnefH744C8UXsootB7HGgsCM66jTDyKPwAqctT7Xf8jWS",
  "key31": "4Mp3P6aGfuJJFYk846eZsPqeJZzan4yitgxVvKajmUcXpvsQvVp2mx21RJNY2aaHMjPtpc7miP8QKXZ7SEEuUCVK",
  "key32": "D6fJpCGzF8kSa8fmg3SnAVhHGanDAT7g3DFFSNEQcx6rLtayrFuvsAs21T5yTMPfcNKZAPGJFzbFtR2sPY2AnxH",
  "key33": "3eJxUspuPdJTShncMFH2Wb5icDHqmQgf5dExsaxULVG9iKYgBNovoKobF4qxms4vF9Y8v8rq5WqHDmZ2PNvGHdmc",
  "key34": "45s5U4rAYwijrDiM8EyAc6fMVBwEcqgRve6qa5g1bJT9kvhphfjLMvVMaxabbZXLCEcdhXMWod7vPAjBc2QhNWYE",
  "key35": "2uTVicrw3tDfghmph4o9fiZbcLRkdDnJsWE8vTVppgnE2oQqydY8Z46RSQeQYhyHbcKWWyjTyhQSizu6xnfqBAWU",
  "key36": "86cg6sMoWpJaHr4UBDkyJJSEwW997oUhaJhuXt4qrHrtVJcppk4hZ4Q1sqnPQomVcFRkastk5ALZ6UoYnsujyL4",
  "key37": "5EBsJk5iRQ1gHiBX3TCL245m4W2Thjxn7BxXzmmX6rxgmoArH9FiAmKGF3Zmgxn6pXziyHT65JUjbrtkj8XXbS9i",
  "key38": "54UtLyhKUQjtNsRSYq789spCXkxzaoJyf7UCssx7h99YwzPT8Fbe3xAjY7Myuv7sv3yDTmW7H9n9GLK5Gmj96xCB",
  "key39": "2oSPa1wsgPwiHy7hS8s9k6MTSVpRjx4qcdKZpg29HaLnkLVTthPJvesLtzDrPFjdqhsGeqv6SndiBQwrEq9o1DZd",
  "key40": "xoss7iUtkaCCyznjKAWoz3LHNzh5uwuVuPGQPm7dRRraYtq8usxK9YBCyewTQcbUNSGbXRRusLuyDpvMmUTi59z",
  "key41": "4gdvLeQAYQMkhm6qnMHAd2vy75Hh7B37LZgB3DdzyZ8Z3vYSJMVr84Mpx6bbP9kDjerta1KHJekKxeJCt49SrAQn",
  "key42": "53TPHVAdimA9edGEJg9ze5eGMqQHV8pYppAdb93ARuzd3fMs2DzWDJZ51hARJTyHkSpp8bLMdgSs5wuKWRErs6Lp"
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
