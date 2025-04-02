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
    "w5xGYMj5X7JKr4YNDxeJpHygQsWeBYumN1bupBpyyq6enD7xhwh9xQhKihauYzBBf1PNmpwCmzg5oYhckDZq84Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cJ75xF3ZGLcrZNuiU7Y7zmpEvjqBx1hK3kTCAHFDhzF4scv1SgwrCgKJC7CrTsfSU9D93chfe1yqFoNfFD9mfvM",
  "key1": "gbQxVFNMHq797me3Tw3t3ibxDaTaP81s7ZKgAaFfpMeRhnZ1Y3LXXnEtjU8To8mF7LFaDcF8mMyaqeiDyKRd8mx",
  "key2": "2zoLw5iBmn9tMTuMkn9tgCNg7pYnLSC9M9W4EQiXZBPDkdSPK5AsQfdFBH6Xo1PXbiubyBZg5EjQ5GUt1DB1jmXU",
  "key3": "38gV91hDddtL7uZF5o2LWoV4QJEHy3NvCud2z2nDwgHwMvDBTyCctTotp4n6Ms4XxHTxmThRAKxjMeV4C7KoNpnb",
  "key4": "2EY8x5JKiGD3i7qeGh9um1TWQUus1Bc1fvTvhzTsHxX5KT8RUwpTvybDkq8gTGgLJteLsvzaHdHxkgVkLML2YKto",
  "key5": "dTjX2Z6wdfQDUP6uSDqhPzsf5Jq1fDaBtGXmvsE1HfUAWzimQwvT4wHEAoLrTA3HzbvQR53oJoPEZf5H1VhEtYE",
  "key6": "ydLJYyuXvRPgEd1idW3ruQ9FKroXwiTWHCSe1zu2L6uKurHLXYqBPvyFGdPUTZ4ZyfQzHRpP3ZWqLNvQ6Y6pwyE",
  "key7": "3Eqoinpf6h4B21dy7HiojTzXY7zVAciy9ZeXaX768i1QZJEncTNPe8wGLBnAdza2szuhwG8dRFsbTTYoTxEyuY5P",
  "key8": "mL1G4baepEANYPEQ5fhPdsLKQUTS6jAddwdP7zbufLJFBtvAdmsk1XwytnvjSjaPsLeGQZaf3miE4nypD5dFcpu",
  "key9": "66T5udEAebx6t598WPrTzxNKSkxzDPccjxmUvsd46aZTKmn9V11JWWjvFjh6krpnd8N5JM8zm6V27Tg6mUFN4LAG",
  "key10": "2eurwdCcxSe4QUbVQzdU986j6uzxMbzQfguZ3bg6tn5kzVas1UtafASZQUDNUHgbyqDTS6uFAKQwT5FNDHwfFjco",
  "key11": "CNSDZafmxWbrqqsSqVP5DtBzSWt4TFjLMyq2sF52ubYDtNAKuusqKhyqT9rssACo2kN1dusV9sEbe5xM4xrf5ou",
  "key12": "23M5XCb9Qqp6Bmn4K7n7GEz7961MPtWoDkNnvj5BvYZCpNKLhoqqUMzYSd9rGZhsVru5FwgNHwUdbAAX4t18xfE1",
  "key13": "3HR3fLRgSeKt4VZAb7KX4fPvbKGfQDLFUrLJq43sMmwdKRkwEAJmVgjgXG8Wx2YBf1j6cz4tiQjAPp3cxXHVqwTD",
  "key14": "2HDZXY4WPwDcuqjJF4Z85UMXTRSW6B7btwdfejRuiWALSoUeWeXETryLQTbjfkXgW132qb6HJpT1iN8UkTMSATLQ",
  "key15": "5Qa5bdbpwtnhcpy7kUCHb2vjXMvSidxN8Lp5dQK5eG2gce36Yc8Uk7oo1mCk3fGCMvy79G8XNAaWvbvvJGdJZtTz",
  "key16": "1QtKTMcYizMnmZHtDS8eF2ZBW4pb5Y1Ppqjz47s4KxRq4uPHbyiSsV3okaaVFb1eXdn6sySB46CzHp3mxnxv1jY",
  "key17": "21SfMCbSfH2aR2LwLfb2sLUCKnqN85wRSL4sWunYWP5bKUpN3uAtQaNPeJ7PF7xJzh6VoWrMab4KMAzRZBLkCFh2",
  "key18": "Yufu8hrBMCmL4N76KuBSLjC4yWcxTry24jXnNSPbJPnNVt3GKigB8RHhTWuBM27XqCZEGRCwtY4X4M9J9LWR51e",
  "key19": "2mxfJNbDvMksqBFwpjpcqpHqGjaCdvm8HudQ6J4rGFFvrUWFLM9UQPZoLxaR8UMyhmrYJH7TfTaU2tRT9MrSizPw",
  "key20": "5De66PvD166DPbpzMKZDSFThCtsSPqCjUYkEXkZmR33Acjj2kfPBSjvWM2FRE93fbKxhyZnzuwQ9NUToV6wy9C7X",
  "key21": "2qKvWnxDALMZ4Dnw8KsjaTR9A6fCj6Y39Qqmd7FMosKCi39fTguxJ2st3qocEJ7hkxnLtAJLtXLnLjnVKYfCooCK",
  "key22": "2ptFecD5kojqHSymywJr16pNEXLJzrmQbt5KB5bnM8EoPAWbzVeuiFXkcEJWjpRS8XdRHfCpMo4qBUd9Aoh2wifK",
  "key23": "58vVv1Do8Se8oQTLMdgKyoFbpvjpaHBQzUq1XfjmrsGrAXWFG3D8JMvWVFg51QsnUrpQs4AnWEgqS17ToTEhGF9w",
  "key24": "3w2ydUut2L9TVWzEBTha7cPLD5g73Z4yrBXuy23UiWUdKVnqC6KhPMcqhX5mpZrovyLqw1Zejgwub6vC1JEWAuXD",
  "key25": "nypDCGpicmqG8HEjcNE4XSw5HKpVJ32EWQpEXGWgi57s5xyzzzJC8hPwj16Qxekzyt7r4zZNnr7imiLWaJ7PEiZ",
  "key26": "xwNkBDA6h46RrVphAZNjt3zkHQhPouwHtF1L4ZxRT35aThM975DLXSLZrHRC2WTQ4HxF2EXXVBdGQ6niAbwF7wa",
  "key27": "51cdzhH6B171C9w8BaLfrGD6GuFBjiGhMy2BcJdcmV2aAWr2ugstwwbUFSD7ituYPLbxGjLqwebagdBV1RE71mZf",
  "key28": "399ZXRUHQV1QT91nX4K39vxqv34xUkQawyYxE4azDwS8CRfhsQFmkvo4rmD4SijDD9ZoHtvKh7UC1rATm6QQTP8k",
  "key29": "4hxWDwWpUiJXFsYFGDw1So73vbmcmBWBtbSJCkMPHwZ2HhDdH44ekTwiFbv4W6958DoMXN8AF8Z8sLcDSE2jAQUX",
  "key30": "5ciJ1bKB3TDifGjMAE1CGRgSzTTey3YnDSCWnAQN132UC1ZQq1fPtFuDQx8dmL84LkwNQMb5WwR1uzKJZUmLkX13",
  "key31": "2ExDmSGNMPjZ5TBfLcSq4wpbFzqUUsAALVmQNLkobiiXCkNmZ4zN4HsczZ4JqYCWFdL2YGVEqJhdYVmvJcobruU2",
  "key32": "4tRb4jMzZGj1xjVsLZbgXeoERerpscy6ZYy33pCjvR6nMioEsLzMDJFoJc3yRwVNpFdZEgj87Zof6S1hZJ5b8kQF",
  "key33": "2ydNDJ96D4pkL9NXWiKUjAa33CsgzguReE9SWM1quU32w5q3R7KPuB5i3E5z9rRi212b1HhorBWDSu4dJ14wRBrD",
  "key34": "av9XG2iSC8NG57yQ52kVukM9nYwRiY1VVgcpsaU89qc9xjXP7ZHyoy1Q4vTYbVWtJJJRD6gj53EHDsjxroL4Rgc",
  "key35": "3A9ZkreJbUR5jAK9iiYU2MFp1wzhq7TpnMSVf7Gr1m4FAJHPbP4oZQqSXJUGGjEPj9CvrBT3DXnkmhLXfnGZMYrr",
  "key36": "5yEW3FSgjP6e6uD6JccN6MNCja4hUsxZ1eETQnCnpw66QoQod4ApeVzQ9d3vdbVu6m4mFJdhxDdfANcqaq54JMd3",
  "key37": "4vtr9V7MyYPMfcizJZY5wz2xvsZQUoByexZWNzCSXTZe8mD4pokG2TqjvTMpexreCjyYGHfVjS4hs9NavJZWXVk2",
  "key38": "2umCGUqkQ3ngMdi3qXRFKkvwnRnH6WdPZXGWjiDzXkRkMKi4hFnKpQLT2B6s9knQxkFyceBimYbt9qXJPqFu1yQ3",
  "key39": "4nV6TPMxPkevEimKEYm1kFMnPuPZeVYsJwzT18vThupYQaYkNVSxUFrXFDZMt8LWpaPYzeToSpjfLXsVsjQNpkNN",
  "key40": "34iiamcCWVdxkyHH5mcXWqFnDD7UHDMzd7PgwvgVZSze9ZSFhSbNUnEeUeyP56vRu38aLthEweRggptR3eTZtHei",
  "key41": "3EMuHGrnEVcB1dgJ9G6Rs7NLRuRfwfvyQSg9EEFT7BQp5XiSjM8s3Ni9Tz18uV9iCKYRGwm89u846CwjgxnJwUzJ",
  "key42": "2uvCGPcZ2hqjARGQ8YbAfBzVYTBrYdHaj6cV3Vgn6i1SiPfQho37D2yPe78YRokWeMagMGz8feYcsP8mRZYStBLe",
  "key43": "3tcJTcQvJp8ieUd8N8ExBxxKcYT5M22FHG47apByRMpZ5MmLb64v75KguFff9mscn9iaKD892Skf1GP69Vjmqg2c",
  "key44": "26jbdZHBWur7yMgx5UmqoPk3kA3e4TGBqQuLZUEv6YCVpGc3zQnHjU8GwUypEgkEqkaZBAztmEqq2cxsQVVvSeov"
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
