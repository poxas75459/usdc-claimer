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
    "3F357ZmtxJ4CHCys4RN9oteW55aL4rS1N1NumQKX7zeiRswi4zZ8fDpXEYQJY4pE4Zi9kdNpvjeMndatdbNLkm9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkGQ3LpPQGvUyFHCEaNZQ2XaTFbJZ4Pp8G17nThyDP5Z8HWR1ABLVK4c3ZgjuRqVLANwcHwiHcbvfoyx4fUmFED",
  "key1": "3vdwQbcYQYR1FXEaxJk29yijiVRZebvD96vv39twJ6GDfmxtETa5x47TyCgPPxKzNutXqzXfHzByDcey5jFuZVjL",
  "key2": "5iyHGoVk4kkAbH5pQ25nkj4bfwvD11yKuFscpb8TBQ1cbMDpp7ToP9Cz95Szf3qsLAweejdAmBMoeHd2UUPXqS97",
  "key3": "452ieoD6KWBQsxo3bu3KPdm6ALoswEcKyWPAB9J8ikH7d1FEzPVWRwJFqN7ciKiNtAcQYnGzSgzX8TKWuoDcB14k",
  "key4": "4AR4qLbLoFWNn7g2MwRzAY4JsR261TAgtqEShXq7Qd5DTNiyUJ7KMQMJvawTGYEj9PLHgVWBEDmdrM3RGqZQEmNW",
  "key5": "29KipkWe6AdmbtWgAHuJ9Rs4VjyT2NCmw4V7cEz4D8nsXfGqhsSfrU8s2YRmGjy6Dp1gcwEfSuhYP31yzhB9dBNv",
  "key6": "tTopU1yRLWZdCMpTU6J56e3cZsYcsyggZw7hFrPUMX9tVV2SrcxeP22vp4Lo85Ex1pzKVTRHEzjaRRZttGu7Ya8",
  "key7": "44eZuad5YWLUPNhS2MuzFVr3BGYKCyJVhsr646rp7ATxpS6WULZyW1UziRQ5yjepLnzHXtD9azTPQYg6AvdZWAKL",
  "key8": "5KnUcyc8ohxMVbHKmtVAxue7YdhawawgcrEcM589f9YXWGrBwQxNmCeu1XacSia7JsoKABikZodyv6UWoMqzAJTv",
  "key9": "55UwT2NVvMSstBLkAWAU8xrHCVyzjoGq3kRYwWUDskHTeXVVMgFDESvv3VZL54wDpY9VxfwWV3YdTLMP5NPCvbAH",
  "key10": "2eGfoX6ZJooqBMd3ZuhPudnz2imKKLYQDSVterXTkQNEQvstx3B5PbMtEWrTCtjs8rf9BDheZDxsQbi5iy6dmfEA",
  "key11": "4AdpKRck62ACNp6uUmFvUWEZ7yCEjYyRSctoobK4dxPUkirtvXJpw5AtRGq22yGB5FCr2foTX8UsfJFKtp6zLX1k",
  "key12": "4sEFyjNmQTM9rB7U3avfZCNMJ7Jq69yHnXtDGu7NjCFMS2cxvF5gS6SVmpYCRZGYGszrS8PdFjQFDcH7sv31nJh8",
  "key13": "2LD983xkD6iSKoXfGYAhLShXBJAfaSW3M13q3ceBwoR4dg8Awma2NG1hYo5TgNsMVipz9BNyVpU4ERMjbtLTitvs",
  "key14": "kjpTFDGMFRCzQsQXu9MvwuZP8QYtdpc5ke9RT7d3BupAMbTaxbYi6s4SrENfUfepBtAuQCJfLN3dBAMP1npZqt4",
  "key15": "mFuSpgUc7N7wPtut5gV4TDTgQobGYTLAbFNaXd4cKff2mL66yR26ULxhUfRizEyPBnNxWBdCw1RtCvcsKYHEh4F",
  "key16": "21NesppHVd1KDEXedC3kG1wPFpbEBQmSko6hR4WZWgWAEvpZYsUJLyGRFWbT83ZnQPFRMo9chdjhPgF5rvJyuMpY",
  "key17": "qqFU5UtPRbQME8gEngpdQXN5u5LwyuvEDonKgz3QTrGqtAgh9VN4Tq7xE9FDeNvdcB9RnwNFo5DNgf2i4dEKcZ7",
  "key18": "2LcFLZJgecHWXpJByeRH6EGrxtpUpMKViUnZV2K6QQin71WHep6peirFS6rU2BjGww36KKWBwsqFswpvtWbXyfAF",
  "key19": "3NvGy5d3LWMRBbvqfNSgxLbJDiKKAsSKZzM6Az5ZFhT9294ReLYB2vVTqE2ke6h39P5Eo4Xq7x9Xmq4TUezZEbzs",
  "key20": "3prsqv8duqq8evCxxxcHCgSwwjg2QzRPqZZFepcLFWJSVjTJnMR5US9tN2RaEvUG9J3JiA1YeTud6fBZwsx8YZFF",
  "key21": "4g7Ccbvrc4xNfeW9NkQcHQeaRMw7Gbi8pLqQtvsHSGNZ5kjwxGtcV3u4hhGsQjzQ7eayEJgMjsfEsEDn4ycT3QdY",
  "key22": "YfvCsGDCV8vJzazp29ULHYx1anJdQHWXbDymQ3zntwqEsnWGDg9aKNrhMYxoW3M6RS9fMbwEuiBrJtUYxyvyM2u",
  "key23": "4vzKx5UDZjiq7FX9N29qvvgY8rhNL6Xci1nPA2uar4Hbptu4HZWhkhjE7r4UeMaHTVezzrEaY25QH6DzmCbW2jeq",
  "key24": "5ehzi76bF1VuzeDeihKvNS7xKUqxKKr6paTN8K18pguvTjFfwYeCq9GybKnS3g8QXU4t3coqPMfZaVXWzAQEJwiY",
  "key25": "3txzu7Q7KVtUR1Ck29p2UxdBJ2QNFN6jsJyJ6PZfitqWjVFZbyaU3MdEaXXPS3mN4BC3wP4KhjQUvui5TiQeVgEv",
  "key26": "45w3XzB11UAk391R9GBZr5VzePEwW52ip9qJWEhM51AArEYcJYxTkrgtnHPWbQYUJKJPcWiGBVnh9PtK9b6gV4PF",
  "key27": "cFhJnrVKfzmfdUUmRecK14KT9XowNGhG5ucvQvqfywMk79JBjAZp9bgc4bddEWqGhwDnUsjoZGbYtAxPM52rttD",
  "key28": "2srt4giVUkQ23aafSEXDjbszkZgSazYz6iD4sbkcA4qBy7CDbKuEKYyVy8Xz7auo9rJbTcfGBMWDLB5EdpnmwzHh",
  "key29": "3uAUk8jmPXtNWCeaszPEjZY5RBNYUYWLkeX6UCCS5FTqZVteEgzfHFQHEifkdrEQRnfBaru7oC9W9cWBA7AcoYSc",
  "key30": "3Ub22omZs8v5XwVGz23758gqiXxKWpradnExgQkoAmBC48Kjz4HsEWMqxaRyV4GgCtYT6dN5hF3RSxp1BmcHfxad",
  "key31": "5xPsE4cGppFCSWqHH27TpRWy2z6ZieD1u1emjRvwkQGfbdH5H1Cev7tuGECpD3E3VBhk6w7xsTVE4kGKMCCzx39M",
  "key32": "4iLJJbozaAd2svFiaBqqG827py6kzz5CeUaFNdeudDAcBhA2iPSy48wPddLxsfcSGQ6uNURweUsEB8Rac3SNcAQh",
  "key33": "2vM4WJ3BqvLjJgdPzr7vs3aK1PEmSGcMTi4tJmetkvQwHTjRxwpGmV41r8JPmTP4s1XGG7bC2ydPPcABxAF4tFB",
  "key34": "5mYUoUb1rBfaRpd3mFcuy77pxMiB6wkf6Wo3NxNLonKPkATmumUC3qzSeFCi3mPLHdZdCMy3dNE8maL8brFFNw33",
  "key35": "2JBzy5HczsBqXuQe1Frg3BsBPPKEN7SmbbppCoWesKU2AyovNxhsMGL1iFP6fWySjxWCRZVp411h4HpuxYRFz2oj",
  "key36": "26WvYw2ymC1bVh7jJNqEhWSKENjjFDQwWNwus8ssiwwF593wtBaj3HZHF75xS7RRGS36oG8irV6aoofGoajy6PUe",
  "key37": "26bauwmNVhCCMiDS2uL9FGm75M2ELFKGJKLN5ZTv3FwbFoszx2GeLPxxgkbVMW7zaUCnRdDdMx8PiVVKncvAUMP5",
  "key38": "25J6pCgCM8ATdfx5dCY2HuV71Nj71RQt6VvNyMzC1YB3nVbpUTqLXFYsZoYT1w9KvccBqX85WxmUKXKL2difgWXC",
  "key39": "2zGqeiSE7kow6atHvMuuXNbHYr7zWmq79ec6PnzEvXihm83fnPzBR8byDryMTivm3x7AXhJMUcG1y7N9u1m16S4x"
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
