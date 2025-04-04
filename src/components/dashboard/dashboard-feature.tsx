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
    "4cYhCcw8pZXJCzpoCuXvfpDPz5ZFXcJBCtBztvtr9ezq2FbPca7M1c3NmZfnD2utBmQPgZYtwVUmKzZDGfcuB453"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zwAPLf86Qo2rZbTAb4EnTuaH68UZDMK1TpUZsnj59268wpLNWxQyjtMQoVSBLrQSizFHq7PboyKbRFbjFiSedzy",
  "key1": "3gDV4KfM6ur4bYYMbAAD72g2MxN2xJgHuKnxRYp2wjjMBWfCDHtzWDV8eoyf2PdY5QoMVJnm7K9ZsKdMyey6WTt2",
  "key2": "46QbRdXPQEXMuiLEJaWZfrh6FXfwT4mJasfLTAt7B8sMEJJGQa1woZeoaR6Kx4ENbSy7tYHZ5UnfyUqemXY1G5sr",
  "key3": "4V5YbD3XB9Bv7uDD5SgqWAmNsH66NLZsSbnNYkP33yrEqASbx3Da69ZDetW8KEFSSVbSSHxpqVjpUgyrWniY9DKL",
  "key4": "3xfT5BxbHf1Jsf6KmvCCYQZ2asVwCS9ygSL3Yg527SGVJGS3SZ9NfgXDkk1JmmRbVrkgQbx38EHsnMikfAw7XbTT",
  "key5": "54nnmaCsRxXYY83rcxUzbRCs5TamY2xHJ8qRXPEUYFBNzkpcP4dkm9rZcuUVgM2Aq5aevMWPjkaPjDcJWGDx6psh",
  "key6": "4K5wjrzEWm2F7TLMGNaXvnDwarfYFW387NhHSb5SZqjPHqzzy5q95hvoRXjbZRQZBwcXxcmK2FBbbrfxQ1hRedcH",
  "key7": "RpmxoF4JAVMxnUVz1kWhWGdd5xT3xvtYa11VFKqvaXN5yJyx8JoqySDnzw4bnmGWA89Sb6Snmk3cha2WcWHgysC",
  "key8": "3yWdMs5ix2Sb9mWGwRiZdxv4Lc1i9KDZBJknwUKvofTFFsE5xPzLKk3u3WARQDZaoArsbSbNCJppzeVo83y8XCrK",
  "key9": "kj6L9JEvbaveL5mviomaEVLeQAdviMpsbb9ES1rJZ6saGPaQUrz4waX3W5eTBcLS3bCbSpbv4przQvSBVXLZ2z8",
  "key10": "PE67jNV9mee2GEknoJ3oda1WsrUWSXAG2XcQNZnXkSncQ4LREpRCaeVeMfsSTFLk4KTZwjBJZNF3h44hScN33wB",
  "key11": "5ei3Fu6MM1T7UgyiFceG51rahzN898Yg8hE2TGRBbqgtMG1UstEcT8aXR2gdbi7nsezhBwUJrcimg6BUTTV66tNC",
  "key12": "3dobhHW8Jx9Yi2NiinckEhqUQdvA5rTrN2yWsv6vJ8oZd2o5FgTUHja6nbbEKLxzQEM6yTzSM24nF3tRgs6JZfc1",
  "key13": "3Aht4uLbMCcUWDBH7MTNP23m4hqeccEstR5q6nLheWpEATReFYHk1o9msraSeD2u6iKWoh75AwHFdvPeeJ95knQZ",
  "key14": "5cVy5aPt76ryHnXVE7ZbYqSz9RikJPzGxjTvGT9cuKELsdBLcxc3C2q4S73minyuXJbG4nYb6hyywDzvTtQ7s45A",
  "key15": "5gWqGkSddSrAmkpTPMebsnC65HGYXKxbN73fy3QmofDPmGQXSya144ZAmc8HxBqs6bdQtPJic5izpz8tGcQr7Vus",
  "key16": "4AW2UfoLWiZmudYds2CXwfLAUTntGVa4giyaWSmFiPTsEHDQBq3CkEsGC3cuwV8Jcb7yQdJCj1Vu4Y8jHi8orn8e",
  "key17": "268kNyAqc6dh8K8jeZhitZdtGmm4dDwRYGKzABAtYZejxuGQtUJK8d2GtGsaxaLRaGjv14Qjg1X6yZHhrb5Bs4hD",
  "key18": "9D4s1qS7i5W24EdGHvaukC39CuQKkSG15UmewNpu7LfyhY7P5eNsxJZ4ChsPZZMxmCJTM7BAvLXEjgjWvrq4ujK",
  "key19": "3HRPjV1fSpeASn5hJRdnhceUN6mLskRqSHShdcYpZqTSz3syZM4vDYX3sa3DD8c7G7eVXMg3py2kHArbVoGtVQTy",
  "key20": "38gjudzuZJ3d3FdZGiHcDs7pgPhyxqSRxcjiETnyEPA7iKwhs6XvsSkkjqCG9umrZvhmGqhoQF1dMHZhw1iUv4So",
  "key21": "EqR5U3kgeHzs5W39iPvCiNmok3LsQc6sVeRCYEEFWLTcvhWZDBHabTA8S2AD5VWG5Gs6EDzbZ5f1FzkQKyAHqey",
  "key22": "51mUFM4aGamFRsnXZbUGmQJVN37sep3ePxhLs5sX3aVo5shRSnpasbvDGqUeau6aEGGhisU7eVswXwNjMZnHvhnX",
  "key23": "3Q2JFdjRP3KHrFsAsyTWJgST26fzHTYn7YPMjpThMaA2xcijJKBxP3tnQEQFiD7ZR7N1t36vVSNmhbYCkGFjsB4r",
  "key24": "4fVpFj1Btu5PNDscMnzvsTgj52xVv92wbSE674Cywf9CwtdesFjdQCkSNGEG5AzB81v3vEuxbnKZp8ZxtHmswR5z",
  "key25": "37qpLyiawCppAHiSnj58UX4PzVNGYbfhKFGU2i7RaW5miALdacsxcuWpqM2CjNXfpLKGpZpyUy4NQfuyURevg35q",
  "key26": "3fx1ne1d1rHtB6KWhXpZ4DhPDeqDFzDXTxLEg5Rqe41j5z8LRFG9toQfy9Z6kMh2Sscc8NxjUXxCB78uXSxu75uo",
  "key27": "3UptV52xEBvVD7aCQw2pchEYSHn2WueeTCmNdPBn6k4MznCuppwTxnaRUPP2PeqLcypARtZeNA7k2AQwFiZ3wTui",
  "key28": "3mxPmJK7kAf9e2pbw5CzvNV9DXUpJtNDbojMAXu26PRgjbeTvhwaeKFuzfLFeZoxivD1dHUbnT27wUsrwTRhDgVY",
  "key29": "2M4jD5UcZVc5bBfcwuiCQjxwuVuPkiGkuTdFJBNfGWmTXRoR4YA5AcswErswY3ZVEmjJn8bzpGBcxw65oJK9kboZ",
  "key30": "xtPwukHaZ5Ljby1PqFd6ZcCQkYA2ZmKN7prga34UqGNkHhHtKXCgjvoRQe4Z1x7ohL1mz6Za7cY2mMfxLTj2Bhz",
  "key31": "5wEgrctjtHYREjxM8y4VSTxS9FYFDmatYT4UMPFL5yMo5AJnVxHrFgmMw64UN1FCsujL4sf6q6bvivv9s8YNUSfk",
  "key32": "4CBCFMyRSu93cdj5vLjbWwP2ntYGCjPr6KNBN3EYxytGUkepGjT57VwaaB9NrEY11w2PmDzsa5aFvWeGEZsbZ1Pc",
  "key33": "4CWZpozvjPg7AXMNvoZTDsbmRS2wU6aktgBssm5J9eWHJwmZk8zvN1aP4J6QZWrVSDbCNWNjNQSYYcvwCL9vZEhB",
  "key34": "5qmHDPnAtAduHY2sLZTkBWcB1czLeLae1aKEuC3KYuPnJZAzXuBUfD5f3Z72oeJCSyJQuA3Y5QqqkSA5ufxTnyRr"
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
