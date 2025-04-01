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
    "4SEvn6vcApAWu4QYNN5SCrPxxFL9fBF73PjAcr2jt1tHvdaxNJ2STLrh9wK27KVb2sfNe88KUL8RUfci1Q6bha4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k2VxPqPmNoSDLzbAPVbbSkkRWCNNEPjE9DvMcnhDPZFAQxVfxnY2TysdL78gpUvZ2RJySQnAsk2zhvu4miWkQBv",
  "key1": "8r11sYh1e7VSH6Qun8wSGUxRikebt3z6tUvcKvFouJzwMhCivaXaAf71gbUHJmqZuosCCUezcNLBUrYLk1KwrJx",
  "key2": "3yFnDcmh9bfnPYY8LdtzQHcWpJk2HYbEXvmUSsDodUbKB4DaoxDpk5yS53jWJWYoVWs79YVmJcFRhm7hxEqVec14",
  "key3": "2pSK4pFnnAQYbofVy68tqzd6FGv6eRxLFb74uuACAsoi1kkWJNujENtZgrxSSXoYGyqocPpuhUaKv5xpajE6SgSx",
  "key4": "r6dMaKbzN5Cj3Q8CJcXaexSDWbXHRtM3WExwAKfpatYwD5GXP2JhKC8GtGZAU4n74NiCkfCaeUBJQsqHdS4G988",
  "key5": "3u7pD64hrh4gbKgzTrefFSj1dK2qWXxHVQmsCV9rMi2VqvrWZ5h6ro3Ud9SF6SCJjaCpQHzZURUQnHXoS4UTsprk",
  "key6": "2V5LzvM5AMfGgxoDgy6bop6MSvp84a5v96mTLTVnJxgkvjUEc6qRhdtTne3KXnmKgNUBqUTXZiKC4EAa1zcR1EKB",
  "key7": "23zPssxUpdnQ72eTPXhwKp6KZAWaEnN1CqpV44kBWkUedoGBx22XiCRQimmcvv1ZCn2ZyJZ2dZ1kJzjrvEGsm1Ag",
  "key8": "3VyNZrMzVCkJqjiUxR5XLDEGC6iiGubqo9jUyiwNiPR8uhxnm8ZAoaDEyFFBbiH1MtMSqMaUSvdXVNApidDJQby5",
  "key9": "5eykYVprCi4zyxofJtCP7VreFQy575B2n1zzvEZLWwpkPUuhcWQfjya2yNdWtQ9NyeHL8YNVTub3wcQVZMix9jh",
  "key10": "2V2Hmt1VLBZTvH5TD8VA7xRaCuqA9wnvzuy7UFxMcLtXDLNa66HnwLg5h3DTipS6Dzi4bR7RTTj5tZGDJZLDCxaA",
  "key11": "noBKGyACmgZ48bkNQAhrAwFpFReNwUNKKUBzXneEP1yUiFygLvDrXfWEQfSNvMiWzy7wKmYNsD6Nj8Co7hXkQfY",
  "key12": "oXh8yHypZNfnZyVGAaMzrkYAfuVvLSwzhjQ345b7E8LazCvz8vBjzdEACu2SaZwGQzCKNyGVFc44MKbd2BJq1Sp",
  "key13": "4akWAdF8kPxx3Lkmm12wpgRKFb2xDLy8jAVPNSKWEpz8mdfePWmPnyoApjuEg27aj1AEnDABWYk4bFyXfKMNP1QA",
  "key14": "5KMZHfUNzqPwbSnRWJqqhSSJyKHBx2TsC14jweR1YurT7miwcZSc1cwGgJLwNzaHftETLon4Mh8zY4p6AVu2Dtrj",
  "key15": "3YY1ZwAtqCU24oXkfzn3whzeJJahDkAzh23WgzstMCtCSp2o26J6eyrt7EJAZEDESyJMNnA8kj3qPYMQ3yYVyhps",
  "key16": "4LuN6Upw43wyYNnwYtKCWHP1ParusrhDdgdfod4Mi44bSgT9ZC4stRzZyfF5kqEiL1cVnKB5qwiNHtsyMHYn5uDa",
  "key17": "2GTttUBbYHdrrDQi2YbNSRxo8brsPAqpidQ1tUTbXQRf7hcNF1MAxV6sAiXZ39rf6AYSd6vq2dzEdG4Zors5VW5P",
  "key18": "4tvZEW7zqao7Ud4C3zbMRFyBt1TLSQ9wALyJ3kNQC7tc1TP6jTz2u4JfYmNg6j4sqnFSrM6fktqcqcrv8AAedrjn",
  "key19": "5A23ns2d37XQWidLxCjpWuqkAcJFLQiANhF5rBBFEG2HuXPV53GJWvPvwFspxqA5eZSW2YnCaSaEGBcs229c7tND",
  "key20": "4KSwD53fApJCZtimTFigR2i4525zaHyTsrr3upoTta2TKcBQ425CmSXtegPGX1DAYXD22rC5peCcSrk59tUxhKMq",
  "key21": "26badss9oZsBiP8bJyj1ebbaNVkxuUGNHYe47TXxo3fGyijnUYPjdW9xKsPgLLUvo7DLarKvy4BrG19ACzkb8m7B",
  "key22": "4BMsaTf7zBiiXnjWkdtabbCBqnwgUBQHbiPzm5cYnaCzwyaG32AbynGxN39eoprbBC2ABk852ojz44H2nkKENLfs",
  "key23": "jL1XknsnWm5GWm9doGVbJgkeTREyczFaNJeD8wfxnJ54w3pnADWd9MA3xFVLYxf86T3hg6ud2XvfN52NwCrdqCH",
  "key24": "2X5Ss25gZ5bjnn2PMB1QbXebQCr8iY4sfZgT2GPiEZXPXP71zU6AQCdtwqfvPCX9DR7YLvnknpvV4NH8dYNL3WU7",
  "key25": "2XyAJ7JZvYeUMnpxngr3TNnR75Q7ZqnLh2MDVjZ9LWEGEKyRhM3ycHvNiGF9kSdVYh1inGwNgaLGD7CiZ4vSs8mU",
  "key26": "27iwFhiCL8oEhgvfxu4EwABx73UCajP566YHqJ7QVmYJ2sbUQnLgZYpUuzifqeosJPqQofwmHpP3YEfHPn3x7AKg",
  "key27": "5NryUXySrfLP6ntsvdpfpSK4vLeiQJffCUtSUSXLb5DqMo4SgSSaWB6h7aK5Uox21KsUVsWJfkoYNNxDeLxSpiq5",
  "key28": "3DWhaJHeiRZSmJ9oNXgNCz7LioQi4RcUuvqNrMEJVby7eU9Zb6qYZ7sLwAn2qJXsQJgdR5MKosBTnp1uqfxJETfc",
  "key29": "2U1VtHkXWZqkrcvENR6smhwtaZUfxJvmVTsDSmTHBqR1FBJCSugLRep7nGpgdHN9NQwdXt7c8Nv5Ex5PoLkyGU18",
  "key30": "5NsDdzK3hmHvNEx8wKYLMgkSyW7QHwhy2kawL6MzPmYbrddq1dpvNdBYbW2hYSHeFcZkvmJ3AhqyGC9523QNMK1Q",
  "key31": "4JuyNueYDXzcQbuD3wNf4s88yYDhNEeRbBs9qDPpXBAaxcsunH5EdimHrzrQFRuy1Fj8BiPc2bZB2ki5LMaVbYYQ",
  "key32": "5qf4e9EXtZSNfqhir8dbsiyuefnfMtZv4iP9Fr9yPyod1QY2r7vLmLXGgsKfs5X5Vzug2BxpCkcGoR6Y6wG5Jjj",
  "key33": "3zrXBuWgs9tHubz2Jvu5Gc1o68y9d9pJ7FzPmL4QrdYZtwruTy6XyQPAetZQP7p9fQavYojwypQeQeGQY7vFSEXG",
  "key34": "5V5DZpmKoA59SRATbZz7bgRmCX1myEcUMNHg6nAuRVHapH3hFUEsGzRgmxjCG6YTiwAvoFSejv9CUHqdzMftYpCk",
  "key35": "GH4dJiDn9zGUdMLfpBFYzkzfCzLf9QCTXwHoY9amaiBPotcyatAGsV4B33zQXofBLkP6xgj61iQXQVa5HKBskuk",
  "key36": "4bjfzCa2n2Me1y3fGzMUbRtascdWLBSRf1K6Ymh1MT5Wzinc3QKvZkezfN6Ss1Kp9AVp8iXNkuscYDn8sG4uq8N7",
  "key37": "4TDxz6gJTueg9YqTTsaNoXwaUNraNXjtpAe4BXiJSpUxJGsdsTNH4w3gAn2g5oSZswh6FYQQgZwwkxJtydh8D3Bm",
  "key38": "5V5aCuEv1oTycLAqceHHjZowyiXEtx8TBa2HnW29NYtGJu4cFvqRbWcfRdiTmQ4kwFjBRVwDfnT2wQCw1mPTpthX",
  "key39": "4Tyq3pHZCGtNJfnuLGEkjfk63qWXfhNGZKxNH7GaiqvMRmeChesDey7a1ykDUSkdGFk243t7k73xMkdjkNxijWPj",
  "key40": "3R9nzxNtqGwY7NrKaUYCXTWFJ32meKh2Y8HVgHGu6WDvSD7SjZYuCHe8ekwCnh51PDn4TPwLXTjkTEEMwm29Koae",
  "key41": "yDjVcM1LdwKpBzjVw4HteFz1NxzLWL89qC4V7f3xuzwXqPGofrwr3rEMmy3iK227RUrbuFGsvWvoGkGLGfU8jzk",
  "key42": "4bUPeF9hjAkbWsbiYns8JM9sWxEFYUwmce91C9jQ6XZHADLfKRMiHn2z8uj21WAvEEyDtvJHfLNzKK9EuVLWho2A",
  "key43": "5aGF8GenECUW7bjZot9h3sRxMsjhMhYN7BoFyEeUZCodbGtfPV9dRnrNohdmF7e4DFpjnmY6dAM7SmZQssv89TiV",
  "key44": "XJjcLCmct2vR5L3jzUpDJXqCYVCYYJyXnNJKNmwmSoT4er8pQ7vbc2EUFGXFZWzjcdwZiM3TGb2pyDhyc3n1qmp",
  "key45": "3SZBKD18WZQfx1cr7m736dHW4kTDNZU9WT6zBY3VtA7c29Y8wdyneS1cwgM8KudjHBzkDnnVxeAVGbjxN3o5gsoM",
  "key46": "4MiGBy7UH9hbnASsrxeCsJbWSbdP3xi7hQTZ8fgYuqH4TKAt4yCLG9mzce53boPizdfrJtpszxUX85qyqX22xQV3"
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
