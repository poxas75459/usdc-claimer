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
    "2QC81QojqKqSyvdE7xPNwzaNaMoLrfaAHFacPQ3cDzEEbKvTD4kQ22BtcBACXzS2dQoJKqRqrnjiH2eb3bZfgUmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zWASqRkEvUF9vdmvX1BamjsCYBDBkimuwxDNHZXT2cXbUQ5AdDTojCUBdJZhoVqqeWGkky8J1m2Ejn6Vb6PJAAH",
  "key1": "4UYv39huBk2u6h4sVKxpYW6Dqrh1mbJxjTdrtELBfSwgH1KKsFVhzRuEgUYcdFw8XPoMMBJoidbawe5FGx36B5Rm",
  "key2": "5jBFpbZ9ZUhtfg5M9W5ZEA9JkvvLxJcnmaKUgGt1jsszKQxAGtFRLieH2Hg2FnKAUF2GPqRLjXWWcYVKx6jaHuBQ",
  "key3": "5oTrMZfDJyMt4c5pZFYmMe8r7bP5bPMCWRWSb5WBYT4mA7HRkjiM3xhtHvffZoE5DffGbGQSEPrwUBWcKd1muXqC",
  "key4": "599ECpaq9xBfUqucFXUSxFdb7jRvBq71uPxLvKSDanjhN2VeuxpGLCKrZCKUmSTxv4ycNHNqYiBR9PhfPayVxjTY",
  "key5": "5mV6UximUBm771DfVUV6uB217GbLH5mgwgWLkbEcBeW9p29Q7Y2bcRcSpqM948Gib47e8vL9FAR3gdr3doX5ugKn",
  "key6": "4cRtkGS4MVkzCjxGX2LtmtiUKNDGtrqkGMPZjjTkVcPHxG2sSCsEB1J8he4U95v7CGJJzRurzzwE7QatL1DuTe2k",
  "key7": "2oGJw1jMm1rCC5CTg7BUWyNeBopBvRUxv3ZJjpkz64u2n2Z991PBixa6iCEah9SgkxhVwgmBFXn7Y4C1PHrLh9rN",
  "key8": "61tXxSvmJ2AM62eAkL7frKEQM2dvqx4RKonqgUP19YyFK2X3T6gS49p6W7S6CriAVgUEhveySMwyktFvay2RztAg",
  "key9": "4ZGSkmFi5NR16o7XkMRYu4pJdmAoeBouf9JoeQqr2kFzyrbNvthQgDn7MzsSgcU1RALrnEqvxf4wBMne4j6QUWMM",
  "key10": "QrhGPQZGkJfabiLtbTbb48otPx3Tho7bu9fp4A7bBYw26Sh4VrDLfacfVsgGmJ6DnzwtMVyjgWLih9fFM12Ajb6",
  "key11": "5Le6wQJgCPRugZmTaPiR4jTRTDGd2G3d9coxSPwWwQaDQtSGCcy61AcAjECC8PBnj9tupwGrLiTfZi1XCewZsiNR",
  "key12": "27xGUhmnhr25pedj7Ye3N1vdS8hUePtendpLfVyEQCTPnkU5hLPFXeeCi1X5xtNbx5S5mP9jx9FRdGo5UXVnXERp",
  "key13": "4e1CjHQawi64XbtiXaWBAX4mCYN8Qe18nkiS6Ndkbr37XufgYF8sjcoYbELJw8ZQZqWz7Ay9cMqNYhYASP8kf95J",
  "key14": "5HqLTCi78QdQbWrrAjXPUQoA1P67hinNKVZAW2At1We41pTFTWutWc2GYsT9eHxfmqL1JhgYXgL3PUFfyRZcv6e9",
  "key15": "M8BZgoYUuanSz8zQUwR2dgL9MkeGM7ZBLdqSL3Tp2FW5sc1KBDAwpiHaCvpsFQeV5HQ5HFygZgGBHY46RF8ijjP",
  "key16": "3KzLS2Q4S3DThFWxMwtHRTuiWBYtCQpLvrkxJWUXGmpzHQ4Q71BXAeJ8tk9chtU6pJjL4tLqwigHRBTbDyAkiZK8",
  "key17": "5KXfz4HrCV4apDtHh6oqVPTxYk6MGbBqUHP9yJru1oeZPc41nNZ3XjRxk41f5F2SYFrUXchJm8z5wTg5bWZseVpw",
  "key18": "5EeXVtW8MHEBhuVSpe4g2NZX3ybbanNQ9pcYvWtW3osVTZMt5qobbiEjz7WAAQr25wFHKJkCUYRQA9TXD3xJySGt",
  "key19": "yNA5wTa5wfgLrZE1t2SPH2MuRyuXWGiGJpZ7qfFJCTNRu2MaTnabR2Q1ySAPo9MsNuM8HHV8zfMMoKyw6jNRu5d",
  "key20": "2FZSp9Y5QVvMSeEWNvrmSTy5LyFuVFm3xXLjz92eU5EQs5nUEg3pZ9a3cmavBrCFHHwh9LVTTdWeh9snNyb5Ytd",
  "key21": "d735KsesfzzzXjEJ6p6DL1G3HxSjCi27HB9qjWQpdHH4AGoEUuTLYuRaeXNQTUVSNmDfyCU6kpjZ5Lmdb1wYtba",
  "key22": "3HyNMpff9ZA4WhgYPprr3ZMYzWo26c3DrojikiaZocB6GK8QGpXZQcc5jmjQGeWXYK9zYQL6VHeDzH2W9woAnoqy",
  "key23": "3F1F8FjQciWXqCgCGn2fP1FbpQJh4NoqHeDZ8k8SVJQMZ8PvRP2egekPebnbqwTEJzPustgxkc6uQP3mwMmB2tWK",
  "key24": "3fCsjB6JvXeX5anRWcD5SccGWTz9dRpVeNaowjEzVTakwL4bDsup1mv1YFtAP8anCkiYg8h2KELmCHbzwQkauyjX",
  "key25": "yrapTjWmYKK3jkTkVSdBvToqE6kY4HawW9JqCcTNtKzF177AnVz3XpTGyWqBTLWayuXf3aVgDVahtyRBcFX8mL5",
  "key26": "4pyT39ezkEq3J9BwoyDz2x2f9YTFyAw1TeeDpoEequnZTsKyKrJNQh1YZ4un1cKgkfUiEjdhghUYY9oz9DH566h2",
  "key27": "3JBtRfkEbHu8wXDJxxCGhJWUHoPLkHwQQ1FqFft2aSjxQCoJ4a5tNtUieYqs8mrVnpwFmurQJqxzQE4yT9dkXaMm",
  "key28": "21TUP85NjFBYSU78dfwAp85Ump8XQWz9XKpj37NZYp3jebN9iP8gUZEmGa4jfuhx3AMK3nU5k96DKA4AjNmXUr2e",
  "key29": "3QoFRopC8gpj1zfC1JAW9rki7JtY3nHKqkDoH22Jd69b98WWiMntsfziPrdRu1htQiMco2XnkdHoHQSMEHxcfov3",
  "key30": "4xZczKWwh2kYjFfRu1ZgmMaDmu2foZFagoeqGcUkSrH2MypCfMQC7tz3FpLsZnX7mnN4EU9audGhth7pvFGmpszb",
  "key31": "i6YS1rMRQ6EGWZM4BQH9EKAyhq416uUkJL8KDGNA14DEuCydXBJgy8TQ44GHxDFTh57hh9jbbtCiFChMRUPf4fH",
  "key32": "3EQZRUCiMy2nnuJzXscAxripSpdYzpGg6gcuxdbgLNGb3YypmXxSsBf8wVjHuKYwBprkW13oQGRxeZNUMMJetDdj",
  "key33": "4gBNgyqowovvWi4fJHR4q1wPFAV9fqQfr6To3mzSpmtgKzZHK824zCi6tU9s8Ev99F542Zad16samwnbS1Y2tvvs",
  "key34": "4u6qyL6QPg3qJ77RUSSDKPh2VkQwN6fU2VdYeuQAia369196m8gy3atbQznfkfxByjJjAE6dXigPpKjZ5dqg5wXM",
  "key35": "3b1hnA6Yb43cCbXkuqHNsftQg8hf66UN1bE3MpWAtPPkMTHtsk1F1ZVLHbXmf8GWUPezb1Cm3mBmCB4qAvFohB5S",
  "key36": "5XRWaG2ySA6CVRqdK83VkxdYuxRVtakNKHoAh7CKg6WoBDZXaBDjS3fFFnMGDaoRVEfmt2J1A1NSCLu5R6VRK7Kk",
  "key37": "615pJPUqW7UgEmeJFTmYMXj2QXWv6NoPSjz7svgN73HH6k7azNDa4V6cJfc1RBQn5P1dgeHKTGTWrFZNcQEfgsb6",
  "key38": "2SA8HMkaFFmvU2UGkasUAXpi6xhaAqQQ3s5mAvhzcgq7cE9YzTUnUbzRZuaWbXMqH1AeYPCQeqgk3WVzSDcEatsj",
  "key39": "fTEvk1mf18zriSDr5YXqgdfzcZ9nCm95D16Gq9TVa7fMngEzHpL3oukkNGsCabCvy6UdpCmYe3zbJzUcxNCdL5S",
  "key40": "3KtoQDm5xEC3MaVT3BJ8qimpZ6nNjboB6v5cf2UgpAujDP5p6bCuVjAX7RumJHAcHjWqETgf9JPQsYj1aih6om7H",
  "key41": "27anBYN823HqCxgcj5GLzwadjph3THs1yKSPGnoNy5FhKC921Ngf4mg1UH5A4xA2uPb6hNykg1aV5pYLyiwnqZvo"
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
