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
    "3ja7LVWspXYAhm8G7xzE8Xuz1q1EVaeuK53EAPFRwErzmaPCoec56ooBm9bAEz17pEoQCU5TqXea3fre5rnc5hG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGsenL3zdA32frxVN7jbC3Zjd8ZGeiB5esK8MekFvqJ61KFskmdLo6Li22nHoFjVMRDU67JFZsBskzSg6kjZ2Lv",
  "key1": "PrW1wp7sjBRv2VckarWoKYTxVqzSJZrtBJt4P91j293LFYrsBEuFat6FfufYmhFkK4FE7bzMhFF5j4YRsqDQ5e8",
  "key2": "27GuaqFU1fD8nEgxyjSv4QJb929zd7kkzp75rhbuQqvGHuzD5auHxYR5LioVk7dmAX8XZUfM9M6YSc9Mtfs9SRZB",
  "key3": "4DqiJpB2C3nJkSKYbESHm6FYgNkVjwyd4zcwLg6etxFfhEL8erkUnpJGR9bT4X8CSwYMBPUPBgo6PYYyn5mNHjGF",
  "key4": "3rF39F4Yie4RANYmzS5WvB3dw18vwrWWuhgGXNNP69aJyDFYpAhT1NHAmgKu9d1Xf8d2cH1xqbYSMq16n4z25a3y",
  "key5": "2QK8DJfXeE4z42WadwiTLJf2YkucJEd4Sau2SJA7Gz76USZc5WW1LJCbeWghv9HtXqsSz8GfaX186fX9mcyxqW28",
  "key6": "33WLtFsfaGFvsRGL44AXDXJNJfV4m2ne29YF9RwkGMke96nYdnKGiVkRinQMpXhxhdmahWe9KKWNSfjg6jLB9tnd",
  "key7": "47UMFQPRjpuQF4d87X1AV7bK2Y6rK3rbNfeGWX5YiZSbaDLiJ4uxHHPT6ubbTD3UMvHyxLF9Uq1L3Xxc4Nxx7dBW",
  "key8": "31cBy2xXxjyFzFysDMQ5va8Y4tKeHcN4Vv23Ad5ufPzVHzjqmQSYttYsLCp7kzsscwrtKU9LFLtTmijYqZst7sjG",
  "key9": "Ut6KCV4AFSpV7wTaWwwRqTzofkHcy1aCJJAp2mmZ1Xj6y54AHnZAaLPRsowHScgjYSRYhSm2U2LKw5amgakeEZC",
  "key10": "2XuXCfUsCJHPvYemDWrVrFMh1yomp9ng7NsdkYg9iE8xk1rFngAFr6ccjYwvqFVMo9paAdUKkL1ncv8UwZGevuPy",
  "key11": "5vPEpzyikX86STwCvsHv9fqueEA1YUcrdJUmfZVyVju6Jz9t8TMZ4rkVAUeJP8beYeKWVGhzKNi8YDLRj2cuXLAw",
  "key12": "5qikreDz4NePuceBQJmmsUaEoPuU1hEEnjCw6eA9qr3ZoBYNu3hELZjLxtK8pHJKoTPKCi1NA9LLk6W7Xph66Dx4",
  "key13": "5vGRuErwNLS4cmhJ7fgm9xNcmJFTZfJj3c6sT8QM2uZNQzDcfR7kehvjCbLNzsTWeLawYtviHdyFhNR58ZJbgNYf",
  "key14": "66zKabnTGFvf9fWtQXCY9cT3Re5deNFWwv4XVNbYKUXSVWR5XR9qipvVAeKapay42uKgLaJEid6VHjRjBmoq8xmX",
  "key15": "4BeAs2BzxbSkaScaQNo1N939fUMSg92VA4pQ1yqFWGQHXKGF1Ca4VPGXZXCTMChsimDXSj52xWjSqxLKetftA3eK",
  "key16": "4B8VU9x3AdySBbPqfF4kH6sWiJFFUHbGejeeThJgDtR95foQorNxNXnczwcMCK7FkyjqKPu8BHYpg9vsEM63VN1",
  "key17": "3Qr4NUihpPmwLAGdbRXY4BkRkk88xN51tCAHL3RJ2mdFQ4myoLi6WzoSErbvTLFrVqDxHMKzAMYcY7ovahPQKCWN",
  "key18": "61LVVzGxjLBBjHQE3kXNGHmVEmKa4R3rgTEYmCgMpYTnW51TZs9dEqbQvsJG9Kc2UxEWnPgozdCx2iHkD2tYub98",
  "key19": "5dX4RLWPa1t7Djqx3RDScyvxFGQ9azbvZqUqQBV99m8WZRDp9KXFqfoPdFBdcr7pW885Nkiij73qt1dni7oGW4Pk",
  "key20": "2Kr718xnHLmXFeoB279NUCnBnS55J3wuVFPuTR3BKnZQXGeu9HqizDphWEFtz3bsU4DFscJhVRLj8MhTr7jfScgA",
  "key21": "EfUBGcfiChSzkipSY1w9HnngSaDNb8aekGa12cxMkRtcVL4HrZYgQQ687W9ikYyou8swenzx8T3uKeFMsyG6pqb",
  "key22": "66uvXMX69zYHELdKQgMWoc3DJuZWCqa2ZxrACB5QxmxDiL2EKWLF1VZS8Zqxig5jocMekN9w5AEdzujVfNZhwVLr",
  "key23": "3VUiMoRQWcmCc6AKxTE2A1Jodm3hUTy6FVJBAmbbD8QEn2bojLwXvFTmjoPZNJjeuMoJZmKYB3mdrN2hsRQ6vT6a",
  "key24": "66d7g8bBxXUugU3FRa9oB2QNvF3x6vAM5TzbujLsmcwDJs3b2LGf21seUHNeNuCos8JWPac8vwEjbYEsKaxYyKyF",
  "key25": "59eagaMKrED82mGnSY67B7TctxVB5SqcApqsSSLqmouTSE44tXvLZnXSJ73aQJbSVJ5zJvj3x1N3n6cNbueLvhMh",
  "key26": "5JJRJtW9ep3cx4v5gNaUiQYiDzKxr3dTLBgabpz1QSAX6ntaDEfHYMRrxyvS68fKeJHbJoyjxJJ3TRMTkoJmbF87",
  "key27": "4CeAfD55sEPctf32aRCMCUVibne2brai3z8XboqnaXmkdgcPeMJQqLiFy28jtHZHHSbuDCuHAF3gP3hmhXmpudop",
  "key28": "5X3E1jqtfrAnwnmCAqqxoBTqssKagofhfyRj8BW7poc6i2jy1L5Ho1JQEqFcLyZTRL7Tzg96FFc45JvwkW9tY2A7",
  "key29": "4ZeppmcAHbCBgNv5UchQqoBZ5ZfsBM41ijRyBSHkDeFQQmfGWumexTuQHRNrvStVsSz3h3Bh8MWsbrdFC2opp1gX",
  "key30": "2Xx3CVmQsD8wmt9tcG3k9tfPDvjftsqv8wRER6x2prdgwtkhssH3TvUrbZLG6pWLhivkEwMp7PjTg4PQ3uzJ3hc9",
  "key31": "3ndvPgtf9zoVpqRaANrXYymd8Mz9Wg75s4M7LAxvQ8J2QxnHsiLQecDZL29ZGo6sVPxLWsKvcV8kUCRKc2Kn7KEv",
  "key32": "aDX7XmuM4gcPvb3ss6UhNWARtXqABF8iPramhXhxSSyZkJ6THvS1XJ2Ma8fAxmCi3ZEjS7sxCqCVSrMMxfLVamn",
  "key33": "5YLoeNMEWnGGToogAhKcXzCBv5NqnQEvgerMGCh6h6nKcGwuEmXqbHEMiZKxv6xhw9tnpwD4wZamqS6T1Do3hKYi",
  "key34": "4dpfdS8kFa77dkXbcRwrvjTg35u4qyyQ6TLtLLSiMZSz8aVssJg9yQjWvmsj7UoYspyW9ihQgzu1Z13VZSvfmBvQ",
  "key35": "641MbZFFoTjJrVFW1snLdfFFomYXgBwGTxUiUz8KRuFBUcE6oJVziwLcPoMmpC1KmgWgZT3KWs3shStZX5QuUNoz",
  "key36": "4tEvzX8GkwUbbB3QqxS9GPzg2roLoH3CsaT5fjEzybTtQKT2H2UALhfXWDGcQ9wnX8YBGXPi4YrbPsZktwf4dpg8",
  "key37": "5pTdS6Sf3ZUUiWr5YivnH4UBxkN6x7Lq1QufNPUdwwCcoGtgDpVSDE2uVYaa4gDBUsJPkWxxma25peLVtDSrdh4S",
  "key38": "4mKQnYbSdxZjsjPuhJMNFy4gSshHQZbtyQEyrfWc27Xpr9GaHpcdiWeAki7CkebnTAEUvy4CRUuL6hPGJhcoxJRU",
  "key39": "2LZWRzyNbrNrURJJbNAWoxRZDHPumKV6ax4tfkaRnANFMwNbiS2c9DdcunghA5727K7Ergcye6bEYQA3xcjY3ndj",
  "key40": "5cVyBBJ6ARyKG84zBZDeMkSDhkCohbFC4D7zNLA6vvmy2vNemPqVksGDbaEQTWdonJgnfgxF7hkwasVunyQ6VNcM",
  "key41": "4cB4tQcgsG3JzuHFCoNCW8WgtTbN78bEciMrW9ASqXDMV8z7s5uBcMNcWVbkui2R2fLVc1xkE2zSeQVNdCKA7K7r",
  "key42": "23bmUWp2SRAZXDYUUV6fsQSJUE4k66ncrMCVLu88bnGtfWJF4EcHHitckfGkjKC61aMyfkHYjP17g5vBdBBqoNMx",
  "key43": "424FXsjECJ3wEpELnYKwtREazUVU7e63mcMUmWEq9KpJcP8ivbATt31K37yYmnxE7jG7feKmwhRcGvBwXZLWmkEN"
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
