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
    "5cp2jGdPzUnEmhknv5564Ae85ha7q8iAsmduHGn3vPgv6Szmd6k1x9mEffCEUZyXLL2GvAc1xPE5SjpQc9woRb57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pBdfCPw77ehniLQY53TmDY9LNfLbdMFonfLwrK5p39Us4LwAifwuynn8x7NoGPpedYKwGVF6zb3JzjEh3n4Y6fJ",
  "key1": "66JGZxgSnETH4XQRAZrT2mnPVBY9mDJT6zQwZzTM6UtqBrh2HJPAfB4z3h47DL7kVqdFy7BEQZS7CxyCUZmg5q8",
  "key2": "3SfkF3K4GtJgUEpVFxDmiSVqZAbq2PVUqgE5Ss5wTc88pBA5qRTA3DvPd51Vzc1oP8HZDF8QtUgk4bhNN6UCmxMD",
  "key3": "2jbJp9XzN5AJ45fwWStixEc8F6Fu9dwNHh5BEAMcvEW9BAZM4kNiLVdjuEfjY4UvyC44WV2xdJkd3oTnFP2vb4YN",
  "key4": "28z7cPyEuvtgCgcLPC1PdR6bdJxmd3uxJF7xt2U9YKNGxhKXTzjpJJ1p5BGoAgejaRXTNB9Mw2r4DgfXztVjhijZ",
  "key5": "3EHmBziR3j2P86wtAdyr5D7EYLGMuiZbLcQtVngnYvnFPnYGVQdtCCAUy3sgqykUxLeotRQNwkGz1UnugoY2kRyQ",
  "key6": "2HnqLvj9uf9jtitKbj7qWiMrbnH9DTTTADzEvsogp8RpkbzUrpHWjDNpDFKbtfYDVNtRumreXZmhLxiuNsJzGBaJ",
  "key7": "gEdHo1PEr1Mx6JGwKZeYghpbrqGt3s1XSXezPRyKUppkNJfNQZmXhAFZC7fvx9r9YGn52EuQpZmcxY3GLgSuXDa",
  "key8": "3uA1pAmkbMshMU1MUA5vbZhWtntLvbRLS9J1aouKh2PkUeAThUfpzC4FB2xLq14mK7PW4xsY6666iLyNxzuLVNhb",
  "key9": "4jXfagVFhd67H28rGYAeJpfdUvuzjEg4kswXyDEvw5UG7nRdz2NwzQHwFyn53TN3XxZptsmrDuV19tvNbGVC4tT8",
  "key10": "42Xu4A3wRPevDuNYaQSm48V6bk2oX6ZU1jqGdvszJAWn7FqheN6Kkuv2RReAdtwHf2fHM1GEbm4JbuFzmkPQsWQm",
  "key11": "4uacQFrmiSWK59twBWzgrz8Q9TZC1o5HPHHEmypX8vx4JmAxY5RdZppLJ3UQJFmNgUJW61gvdsVyAdvw3UcMA1Xd",
  "key12": "4BvE89Zf1CztnmYbzVupnfwRqC756H36fLzRFCM1214W6cAs9HRfaJy4uMztEWpvY8DcoNfsNjEwH9hcH7GuegmJ",
  "key13": "3dX5GPz5RYoTsDd4crRNcbMmkfp8JJn2SRuJ3ULjafkXTJKFXwHnHfuS6QY7rzNDvSRkYz3xdZi8NkB7T3bacCzp",
  "key14": "51RmnTcxXaiTCSyyEC1W9cVibPVhuZ8UCjPPBnvcQXahPRvrwLmXFKQTpcGsq2R6YxvgRrKEDSFaby7gwTBjL3R4",
  "key15": "33ETVTC55xuAea1Waz1ENzFSPs29BbwQEkMJ6skJVLdmMAumd5wZZ2arNEd9VS5i4XysFeeFGSsQFP88vmYX7NQp",
  "key16": "2hCEsCRqjfRq1aJgf1zxba97319r4hYyU9uEfunfHwYHEpt79dVE5osC7bGop6v1LC6mownLTs9KsN4HTaBmbBr8",
  "key17": "5dyZmj9V9KU8RJhyTzYK1TQ2LLbCtEfE8bRuGhowMGCnxxkt4y5j28Nz5p3827CvaZK1C4yri7Z3h2EjbhZE9seb",
  "key18": "5bxa8ds2FA83zBNDzsAF1LxhX3173vuRyJq4JoZoirsfdk6oAAumBmsP5Zm7hgiaZmSM5GBrT8EDR75CGLU9YCPB",
  "key19": "4yWdNZVu2ZdZ3yXPJKwmfFrRrTL6J4opgVWYhYa2M2zrbrMP8YzDsex2gu2kZ1EC2wn8EuwVwNwhK3Z37Drx847p",
  "key20": "vLtis3pL17j7iob6sZfbNaFHXcFi4Sx1XPrqXuQwwCsTdeURFiovXE86U3pd1Pe7cxJkjSjfceXUwLeV9PbhLrQ",
  "key21": "2Pd38FLiiEJHbdyh1ffbhQfzKqh23GNZYA2zmjuJtWSDrYzbPu2Eyv1vY71N9Z34odZUCFjGypzjpZ2bY4GXKooE",
  "key22": "4WXueMx1Q63YK9SRbqgB1tPzz7TvUtN8kW2x2ZhXMY9kuKvNJjo77fHd3fni2CqEbERbx4q6fAruqhejr85M2D4h",
  "key23": "4SjzcdMe1aNxBAg78KqLj9bHEdcRFM8aK4j5RxS9d6qndBg5bTqNN46mZWeFnU25pkHg98UU8FFRHsV9r3QabUpX",
  "key24": "55kGcQaXFeX4GyZT66XY3WTKdBrvdLEzVDQEBnsGrtnFsV1NHcFqkebf8D6pFgfL9UZDtfwoUt4GW2Uji3fAR7S4",
  "key25": "28KYCsNDDKJp29NrCVuccoeLP9Gcwww8kcJBSG6QmC9yspFRQREURs9UrSu1hXnqTQkRV3SQdabP424d14du7veT",
  "key26": "2zveKg2iMf4L3sdVCqmPvZPCJXx5YEPo7othS9QfK8ttYqEbqFb5YnZMMWyknK2dSbZF2iAn49cEaFAVBgRT11Gn",
  "key27": "4ETjzH5uLWcAyp9VLL74FdUjkBCskVDhtHxap7A6xMSY91BMVF1v8qR8NSUyZ1rDRDuT2YLdfYisVhq3Eyp7Ntbf",
  "key28": "ofckUevFuEVUEJoceDGk7rGohu7PmDkYgwxg4aLL5Y1bhNfygFS9poq9HPEMsyFsMEQ3AqNJRmeajomSrNCnT6E",
  "key29": "3K9CX6xfXMoPGQqzQbPJJkZHh8Ytp64kFu9WDPHFfWmsebt1hnkAp78ct5H5SHpHUu33mwaPPprs4c4u9YWB9wvM",
  "key30": "2dGrUdJxCZ4YHab87c9L7jXsNXG6t95oLRMaS8cqPzTH9DrxmsmacKZsFdQqNUsB2GrCtQGwXDT9ZdQk8sMefWni",
  "key31": "2t7QfUKNQzidfWkgnWG5HvEDez977swCpgyq1wiQHmPH9QhkZSneyNd3xiKxELLc7tRAzaSNagMFZLHvYUELti3C",
  "key32": "2Pr7XvyHNNgsitjp6LjXqGe9pBoevz4iGHgDbc5axxKJwcfp2MEA4PupzLrg357PELeYEH379GJAsfcmD3S7bGSf",
  "key33": "3pYYPzR6FaDV8hRV6KAdCx2bxpMX9RfPQyZgpJfvZnoFAnqXVYAsD7BwVkDSJacvPaekYcUCBZJa1F9mbzTtLGtp",
  "key34": "2sL7jQEkpghvYgwJEYyd6MU9CHKuTuQvgJmGFF7v4aDX1kYkiQqW59RnKVM9KYjcmccFiK6f3Mq9KHjj5uJZW9Fj",
  "key35": "4QQoDB9LeH3WMos92zicoYYBD6HDxXngQrn6DxAEbxeRg6ZR7r5tK2eRKx44UmGax17uE5N1zrZj9GRuEabD72Qw",
  "key36": "3HDXhQ7fGL9aDfhGcq2nJP1dVkBjxEwB3pQB2HdnJQazXNcMvRJxHMdvNW2fkV6Ckihx5wUREDRA3C9buDpEh1bs"
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
