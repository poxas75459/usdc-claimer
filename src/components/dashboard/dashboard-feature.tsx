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
    "3EUw1cvtMTmw2hHBD6Lj71wf5VCVqS2QZGr5q5zo2gwc3M6v8dyJRyQyhm1WZ8R6KnKsQA5v1FSU2KPwCo5waSTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BkJCx6tRmFnvbHorDn3fUoVtKPUpSHaQTkyUJrhhbUxwvJPnfAhnYoBZVe9VTgkTZpjeetKbzYcAS9vcuYp4jab",
  "key1": "jcmmTJuB2Xr6QuUJ5koGfnAEz2UMVgQVoGo98dKL4cnHYoNQHNB63MEYYq3BUcnEEe8S9EJAmofxVske1Rtsnve",
  "key2": "CMNtTyigSZtcJD5hFFPXC8JSPy8aA9uczgnxt5FoCyk8BYGh6542MkoFrhMTdKeQjigrL8nsVrfzKCETygVxBrv",
  "key3": "5q2WMfgNLGoV1ZD3s2RgSGZ74BY7sTxURUXLWDp176anr97Qgg8BAmmhsqJpyEheXSyCwnCwpvXiVyPxwRMWo4kD",
  "key4": "52ccHkubbU2XpnZXfrPVcsVejEqkrfiYmNfLwCEbJN1gBHikiUkoTW2DLWjmzU31h2qXtPsyXavHTC8VXXw2ErL4",
  "key5": "4dSoAFHxEWnHHFDc9mTaErU43U7aF8dUxjbKsd7PCXcsLFTfQHso47t4Nm7Z3vTmStYfEabzKnhgXtZPs2RBDZKx",
  "key6": "5t6H65w3LsKRfbiSLTq6g3AsWMHWQAqGPrWQ7CBKcoLoD5YMRbdSt7exjVvCzzDtYpN7ib18Q8kwAvzmmtqCD4zG",
  "key7": "3y1Y8WC8EQrwA8MAGMWezaBFroRpfw3MQ13PPHf3wNbJg8evpVW4tUrDScyd9NaYve4LLqimDffDLgxjNLJqwnmi",
  "key8": "5wR9ge3jutxUMkkmx3XHcZ9hfJzgDDav1JYwN8ZYzm6dbGwAbnRqZqUSdpuktXBQ5yupisTdr6AM1rTk8L1jB5SH",
  "key9": "5pXRUxXn6tWc997TLf78xR9wSkVSuyk14WF7XAE7Tnb1F5b9uy1sF3pMXhr4YqKzWXyZNpz2Cq8n23QDcmJ4LbK6",
  "key10": "nSZCVHRtcj97fggoGg7Sh8rcgntbKdWuUvE2KCHpt2fdkYoThv8yRTrw5Xv8borgTrcWtegBbV2jeXRv6EnHHcS",
  "key11": "4um8Y5D23Q6GwZ4sTAzn2tLSPSM5Xtw8Kg5Kar5hXLKqbhRCzEDq6DtZrCofYQ9AvwJekxGcNQtx66ify4ai3zpJ",
  "key12": "5bNQC9yGrqoHK4MPh4w9RHsG4EaoHhZ1XZT4z4JFQ864QXeKMbJ9aFc4fDChW5ZmZbMmoinxNdKz7qpcxGX9NkFy",
  "key13": "4dHQuAqGx8cgxDnXd9ghS5nYmyLSbw1rg1ha58Wsh5gvzBoS1CnkDjEPBo9JqwBWBhFiTtMEeUwzBXBsmowdAW9D",
  "key14": "4CcsVrf9Ju22tds8LYLjP9yq4TiyeSR7HTcTjTF9wj55rfcRPujqmjFn2Sk4MDvz5RJHvhfMDNDPGnnwqBa6aWhP",
  "key15": "3aJmStvznFGM3qCSjn8kemxhx2D26mneUpcdjcUDuh5i5tUxYUkEMxcf7ZKz9ZpwyoDco7FrtSkJDj3fXrCrEn5T",
  "key16": "2z5mJKXZ7BB8cfE8DRiQm8e84jWSkMvPHsd2VfSY6DD4hKDeHtdWc62bqtLjNsNjKDsWAbeRQ6w7kbD3qtjFBLWJ",
  "key17": "3wrHLi9oCDLQs7ZiR9tAroVSnyyhprHPkFyZvtSeCrC9EuM4dGJxmyVkNeJRMRfMe7NjDgCfT8EpNxEKXgf6b6By",
  "key18": "5FN2smihKcJrZKQmNgDk8BCWvyPv8ih3c5PZLxsL2cdfFKhB28NrJTsWdrB8CbGAi9rpU47iosqg9nvErCNUC9R1",
  "key19": "3SXqczGP4w3Vb6BvCbew5v5AiuBNa7x52M81okUc5B8YePNsmqo1fuYebWjhvRmLeWKqfgasa9YqDjtVASyb3w67",
  "key20": "2UYhbqaWDEAWerrEHtcZzUCQiLhXjRpd5cSeJ9rZTCu1HAiwzo6dXTe1Qvnetc2uNEtaRkJuKD2Nz1fCs8uMBRsi",
  "key21": "gpsurbkApShb2p7baouNaj8rBACWz1zE7xTVCpay9p2PNwSrQZdK9wRMxZpBkBFTYQcZc1EYNjhHgM1omHq7Wo2",
  "key22": "3ijgT7kZkSY9PLZoVYgXRkkBiKGrQjAJpJiJZ9MwG25VVtMd1qXdS1Q1tDrosYoXPS72LjkrUWUXawHqG2zQcpLX",
  "key23": "5uEFWRGEjijca4tRvxQtJEqqbNit6PiYjYPjgDUN5n7MaDStPEK6LKqSjN9HfeYV5a3qfYSbE6ZUNaGF9Bshd1ae",
  "key24": "3dCxGhMdAu8mLZ4o6HVSxR7DwhMQKasNw8ZpFYthuGvuvgRsgM7iYbQe2oidoXUEYPpNTEfqGoPy9eDr6VzTDnhB",
  "key25": "3daSCScpFpeHbMDDYRuEzqL9wokBiLiwyfqhQjfxv9jorQsHdpcUQLGwssDysMJTjn7ywdSUdRwaPerpYm1ciwuQ",
  "key26": "4juGA3prmxM76kDJM7s4NuQyFmmkptr7714RhcarbKJNY8CAUyvEiSBTqA8PmsTnzrGq9e2foXQQrhabLmGaZ45h",
  "key27": "2XePCkegFqND8UAzJMkasXwcGqZtuvj9pRDtaTVjWAEXQKbm7h2HnHiumTudJsZf8dkYK6vPkC4y9u3ooVCURZoD",
  "key28": "47W5MkbbVNA3mwxGw4ijxmN99YsSZaU1i2orCHc5aJmhnB7jywVSvCZ4dc23gdadNyDwD8K8rpxCGYujQ8oF7Boh",
  "key29": "5U5e6A6vM94MbfE68VfTUoARrJ19pSRneHFPcaSVsbKmaVJLNqqSxZpjeCLAaQRCTcRGTtLtJJ2Uu5SHGJon63Qk",
  "key30": "2Xf3c41HdGxycN8KQjVA6Pc2DoybQTfYK5qBx4Q5mKUVmddt5vERZ6bhyieoDH1W552phYpVCsc9tf2b8Kb9duLn",
  "key31": "53WQoHbmWa5LMvYQbjtnLCw36QxEWZLbfqegQnku6G7qa7DnjgfFf62PczTf3dJBXF4x1sGC3SNc9dxkTzUhjcPH",
  "key32": "2ir5DGiQVZjo472YYWke5f4sZo26v4Z732p3KwoZ4CnFr6h9aysMQwhsbYQwwYCyntuvBW75qgRXBGGobFvorQy1",
  "key33": "5TXVy43pGMjjqvEPRkJsx2SBzpM5YyzmLXRQAJGM5uVjK3PoPV7u1d8TGRCQA8gcLgGNYw8KXdCt96DXY6HfgGaw"
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
