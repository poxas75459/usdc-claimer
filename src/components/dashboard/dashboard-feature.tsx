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
    "53wBBknUqy9bTViVDMLJ9yPbzjuuiZ96joBRMFb4m6faoQasncpaG3ufPy6Wd7icqBpeR3w7sYmu5kDLan1eGEUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FcG9kk5Nv62ZR1BBxFz3uuhRtZsPdPBQE6kjAFAfvmy38tbcDbVUem9Lk2ZqGRv9g7TDn3EyvHcwcHwEkEcysVA",
  "key1": "mg4YECmQwfYc3fyPhh3C7ByYcm1Am9uDFJyDvQScVAGDAdJXbWwjdg3ufCsQmsAtfLiY7dxGsJvNDBxVVsfyA6S",
  "key2": "4uWRyUGLNh6tpz7151PvHEmDyGJJpHQLkqsf6rdiGezFzSJWpSQJGnAifyvaakGPguHPrTFjYF2L6cX9rxGhEcxP",
  "key3": "qLbKJsyooBa3WgsHWSogdEfKtwgnw7d8hXfH5YgS9EAjJryMFxoQhHcBZFgXnr8MSuuwRaEtDSMF5LDtjdDz5VB",
  "key4": "2wqgV2GhtDJrwpD1odmqnEGYiB1d8xfzjfcSonwUoapgyGVEmnf4DRjdqeTPvdiUHmro95SJtzSyixA2uAdFFgJz",
  "key5": "5CdmFVEySVDNVPRk2yb6fvkMJMK6XAjeEBFFUb1abGhyE47ecfRkKpKdRGZyrS1wjkRuY8CCqqvqPwfMt8aSwoD3",
  "key6": "3Q9N2HWbg1pt8dLuCUDnoUDY2age8Xw4D8uu13DMaJ38AKxVC1FcQXx9RAoNCDUZNuNabxdFK5QNUPZUDgAxio92",
  "key7": "372Hs8H1kdGicVbCGGbPJJk9XtseocJDFT1aKEb2xsBtTwLnevUt3Kk9ZAobzBamgGQ1admm1K5btxCqDQLpB1PN",
  "key8": "3gvxjWGFnfGxdyHpKtPDvxaBjt2prps528jCNjqNhCNZU7hptd3xY4j4VmH1kPVyEDNnTnVs334o4dZuMFTdFLrw",
  "key9": "5cgC6d6hFsKvnCnPDjiRyx8LBYAF3fvbyTbqUpagqhL6uCdjgGAjzFmKk28r5rBtusHpdRcma5Li7YcD6NEGA9cE",
  "key10": "5B5eYDwmTqFR29LCJ7Tjocg2W4KWSBkSE1GhNvEFU3ue3DZVqryizSx1Y1ewCbZg6wCgFFRSigxF912PfdqLYt6x",
  "key11": "4hLeHmGtdpRi4cKReL9vDKV8HvStcfWNEbFZm1nMtK6BQJ8qxkUHFUSKUKnu7MUeJgKr6iq6UQbrvGtDyU1unT8i",
  "key12": "3Fb3yy7PrBLTGfvfK8Jtbc6Cjdx3Qs5wZr3Ca3zeXTWi7cdHrChJne6KRxC6CcB4TyvXHsbs84fdLps8Ev5R1eJz",
  "key13": "2SLB2zXeEh1GQdeMsVA58AqCXrsQfoskvx9RMAfihpqTx4CQLCFCJnXFzZYCGmbzyP5HJbDjMvsKXYJY8LyPbswv",
  "key14": "1nivD75WWWMvkGW691u7AJdeXfoaaDHr883Tnpbs2tVVRTg1hdK3VGtf6m7W826JAs6LkmY6DEk3aJHc11EQQmG",
  "key15": "5nLo5X3psLU1hvpUXHbndMSxp8PeSR7oG5hti25tj4XSzg59j2riapE1SEEJ2tcu25iLMi5fbeChZJ7HTdxaC41S",
  "key16": "46qCTczGDd8ReBBhxGeHJPF53cHVHnzpcCotk6ZvSomw6R5XZa5nV7qyiVUHT1ddpGQhKjgPcvKf6vMdeZK2HdBE",
  "key17": "46FMLcV71QYP6VPUR664bQ7sCDFCe2xKGE2LfyZ4YHyxjUhF7FKZ5jkTQQNCHNBdzzNoubMyEoDXrkykTRuQG5vv",
  "key18": "31ccNEsMeHRmTdYckLkT4TumLZAg2ifPihWFgVQUrYsokrU5YTLXnU69Kk34dkdahFXSekjxHFnMj3XCSuKVvL3h",
  "key19": "3G19ZwYFQf8iNzrgrEkySk7Yos92bjzwRv9MzYhBtRRc93vn55TGi5pbk6bCLQEveYHG2tu9YXfVE9Pjth93VX16",
  "key20": "HLrrfQ9BUYDFjexChpJJxLpV724wzvuXYRvsehPcG8VqzK5PUGZvcnzLJzsN9RDmWQvZVAXTiUYuy3efDsYPWuv",
  "key21": "2MuLukPHQhWbsWip95E5dVBWvLkouR4bNNakxiZ7W7W7q3frqGyHzLykJ9o8npKtvsxFovt7E4K2HFY9rsLYUb8U",
  "key22": "5PF23muTd4ZLNMtrpJQTTZNGjUBNbARjiwu6XqaDTYdC7AY9Uny5haYP4wDLEfmRiCzA8vZTLuTAuGbLs7FdwSh",
  "key23": "5co3b5GzMCBUAbo15UMnnbHGJiEhB1RC4FmE3Kdmkb9eGtaTtNB1UZJyqqkohAF8Lyk8bLcHPW19xe7ZUZLJrBfC",
  "key24": "5bHWKLoUDw6JZVGgKfE5DxTtoTViVk7GADwHkjzRhLPz5KuV8EmhPKLkmoYa2jf9p5skYKvtE2viRP32LgDBqY5g",
  "key25": "5zGkBzPCZokmQsc9vp1LGMgnMvhMHrs5tCo87rePBHm99jhc61RnPtm9X8mBnr66uoBegzdYU3syGwZEv8Wj1pm8",
  "key26": "3pzTDc8E52XN59Lx4gbegDkissJaP4gdHAzxdLhHiNxQEngxGfp9fMr6XDsztd3prY6y2DCVGvfjj2y2ySDcFD6z",
  "key27": "5wd4SzhQ5q1Pgps3nMg4qDu7GP39pReqixgfrSrokFypwQ2caCK1Hu9aVqQx4j1oc6L4Er9scqKjDJyCNLw3NQJU",
  "key28": "67FPkWb9vm5euLLaG7MnqhjWV8fUn5CpncZhRzE61d7zS66hPs83GJFktahmMbTWCgbyRqWLc2Ao6UZmrHNrzGmS"
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
