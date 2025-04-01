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
    "2tgQuSCfGJmv6qkq6kJmvR8DZX8XpNd2nLVNCZwrGnn5nGLrHv26czEGu1pvNSJqyRN6zcoHidJvfuBAermxAkkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w3KKWwXTGNQovn4iN8QDGzqSHBnyFL469kqq8aAmMvXrkHrJi7fswqkFdKkQL4jEQuU7g24P57RukiLpFvSQrgH",
  "key1": "2GDBRU8EqwC8oUARLtRDpqZjk7TT6S8em3rDVtW77s7LR9xwnmPamioQiLsgp6BHzK4VvTZWLf7Wa5Ju1hdNdQ8o",
  "key2": "4QrXzWbuFtux9aCHrhwirVnm2bEJiu9X4ze7tMaLQp49PhXCBexvu72Muv93F5spjjJRys8nx2sRD36EGA51K4iw",
  "key3": "5vLi5N4FerKgFcBtfjYmyRLo7BKL5H7bAHPHQqBVPVaex5mFNfA92ux2S967LBcYH1m5NLeg5GShnsxuGESTxDgq",
  "key4": "5toTnQpD4R3JSXM6Ah6gu3RbwRVD6CxCkkVJQjEMQWcDCo7kGGV2frV8wahbJKT2S1J5VVQDgB8g5BqLGmvX8ZfF",
  "key5": "2dUNVnYQ2q22yPT3tNAoYac6zbznFksJDqaVPDbHkp4QsZu2EDc7PAZRg3EbyCsVKTpGMc6zzDrbYRa9XVf9xoYP",
  "key6": "2acbYkTyeebNq2LJLo6z2TNbxut2UT9ZXsmekfxKUGRmGNZo4VcKNvUMjWt4UK6EAfRAV2bf3LHMN8RkXKYG7z4k",
  "key7": "5zqFUD9gpWiYxPPCEK1C4kF55wJheWzRYpgD7NbW16rZfMr2thJUYAJuq8SJmWbhQdyiNgZQ1Mg3mTtPmU1s3J6y",
  "key8": "4B5KhagmfVK647QVzNCstsgYzFxKxUwa5NLfjWFyrKsz8WbdPo2SakxnSnBhQbnyKn526TybNXksdbYUyXHCpkKD",
  "key9": "3om5S4k2iL8HebXjQbruzFeFfUXvNz3hXxwn1JLJQujWLpujj6t1QazeeRNiAbs9w6FhjNPeeGfM8LjsApQh5dGa",
  "key10": "4Dw5Be4U1i8eNKtXc5U1A4ULcG7W8HsUHrCkXhms1pu3kR4kw38fYfet3oXnLmjo4F5nSmGasm6tFB3X35hsUtDT",
  "key11": "5ysHYvAJMPRHkFJUdEvRrDvwgDWtu2CYYmhz6XaUL3ER6FEFUJ5MKA6r93smjs3Aw2HT6z8x7rEX4Jcqz5BoLQFr",
  "key12": "4A6zzRZndDBhH6E4TQK9H3k1vLwxXh7eZTT7oiayD7gpnbkebaq94wc58JVuJCbDXhicW58gHRYxY6ac5XintE5Z",
  "key13": "5UMVKZWsHzLkzBcUzP2ZznqRbruoVKgnT7uSE84bSZiSE6ohhzsofjpTBB3KWZAbt3ieG9NBXA4bCtQdKQJWj4w5",
  "key14": "zkAhRnt8RGff7e8NVBvX8t4T2RhspuPosgWpkTzV2eHXAnn7E7iaakfjdQmubzX9kSpDWUZLR1eMPWwo4qixjYN",
  "key15": "5we6yNeTdE1SAHBEm5WAcTESpXMG5haYzwnz1coz1KWatvVxCeaL1DEauKaEtchWQAfiCMNJm6mbavQ3ZnUXAztN",
  "key16": "3MjbCRgm1duMftFwtp7wCdwjFGe7awSiTB7177U6qK1sUxnNz8j5hS2JY6EEdy7zUNFA8VrpDQtZgt55vr2wiUcQ",
  "key17": "2wosrVPJdwsCMaxmfQWAfkt7UwoG6SVavFVCcTPmLvcuHwFhDi4XMThfdkhXdATbGrFTs6me6aMXULdvYWbWUoKB",
  "key18": "3eC67GB6w1A36zSdpQQPS2E9zcmq91uYTCd3mmT9UMHNoecwpigHBzdRAU5KTnx8qedJobDKnx2r3BhSZZDKTZn4",
  "key19": "4XybXZP1ATayo27SqoHZ7d8Cd2JtrhQjhBAWmf17afEWeNQvBN19cXqNjNtLgYyr9QBPH6GE3CfRtZ8eNAN5qmDV",
  "key20": "3UYqdjhbv1Wagrxe29jLvo7R1sfhkoyirGqY5VZnQRM32btU9fCPtX5XQZxb7RkocNgv3Nw7HBoka1d5482Q1hqJ",
  "key21": "3rWEAxv1d7QSVAWRVnDTVVh6kEN8PLHY63DEYikJBzUJ2UV1aTEgBxPdPdDzeNFE8CVjSQmnNHCEhJ75CPUyureB",
  "key22": "3Vh9Yv8MGvUowgY67QTPRv3SypmrPu6pPnjw4c9fdHC2ykgNcrnUthE4qHRQmJ4CPqba3734EWiMe6wjqTmTDgyc",
  "key23": "648oCGCA9pf8JwYuYNa8VFgrNAV2Po6QSRmTqLhSeMATuoWAuuTq1iVTSgkwVYFXy9McrQdA9AKZ7czK19CX8Yc6",
  "key24": "3uExaqujcgJJ8KpViiJmM3MjaTMJUY4h7E8o3qYWYsQomMrgbDG34gnbp37sDLz1KzajhdJR6WXus9XnHkKcDaJW",
  "key25": "5pX3swsBL6kiDTm4dFdMEhA25xk6rXdh8L3ffCUdQpKArBvs9MYAN9rkYXyFffb1jb7q35guPSZ9cascRs7xZrTD",
  "key26": "3X8MrQSVeV6uvyCjLqHrU6k3dU3LjkCeHEACB7DLKYDbmYPbuwXvs97brfLbAvcooNQ5XgCHUnfDmwUNj9oiKH6N",
  "key27": "54AueVtVpDn6w5fCZTMu8kbDrxqCG7o4JQZGnJYk3pxCh7gKu19gmHJ5MBkmiHC6zw6Pj8gPjGnC1qW2qMR3k3mZ",
  "key28": "2y3qSte91oRnaD6ZGNsaF4Qmh7kxhuT5i1BoEs6zgtDyzK1RYEzkH3iPdPymC1Gzs6GoNaM1fy69sCdARbPm8zbU",
  "key29": "3XBjAqfuiUdCDUA1qGDRux1Dfyt7x8rjBEBjZKJRBqV3JkWiHtQc5dPoneMyJxtzRbRHgRk8NgytGjhtsZ6KUGDV",
  "key30": "4UngDcnuqGhwXw3y5JSbGrmfxh6rs6WF84h4hfmTuFqjx13uuVh8rik5KiGUyLMUGLHaSZpc6Mg2FfxnJyHG1BHq",
  "key31": "4r7G2ntZozAsKBiXPzG5vjFD842FufcRsDT9vrhCZLm1XbRKWKaT2zefebw4AxrnvcfFQ9MZFcQvRs4CVknhZV4C",
  "key32": "3d7xm6NZbZNJzdsCvAZouvSHhF8N2UND78g7MVZLaxfboGfPkzjKDxmmcG6Loe9MVjhmNW2R3Gy8uio7T55ndTsp",
  "key33": "2gG2hcU7jgSjPdTmA3VdcRvC95tHbkgNm3XS5KE1o5RSCPN4hxDLGvMyAkxAjUGXVoPKnaJA2WwfBcEdYJoynY1N",
  "key34": "5S6oysmB6ZeMKdFYruEBX8zAXTr9Vrr4LsdSCDwqhCizb2FGhSZQJ2H3eN6gzLPwfNDkch6w96csFXbf8ewSmtpG",
  "key35": "4xnMw7E9iy7n3fBYW1jJqtycSa22Zsbad1HSj2Qzhy2YGe3Z53snD8Bfx2cmUWRzjkB4LeZYqVPUuQAcZMt6QeQz",
  "key36": "4AyuijAxdHmTSiBU77HuYDdHtkK1sgCvsfGHR33VVdWsnc6XxtJV2sAmHUWrBac95bTPccmzYnm7vS7NTnRgayVd",
  "key37": "5p54AskoycU7VX9KMFrY7SWKaoKovjoSN9evPn4mAc1QRhX9bzEYMcb4FYPV5zm6MpgreXaxbHsNsqyAteG7kJ7v",
  "key38": "5VgN2hHDsRec3sJhstVT2PNnCvcuKKKspM5SCd2qt5zTho3g1d2rM7zfdHzrwguZ9B9VbsKf1a59F1ELN1roW9aW",
  "key39": "51mG76ZPKBFvy9ZDFDFQfb3tHVamqXC9bYERnMJ3xfHznt9LH98wMi3m3rreckhjNg3Q3TrUyegjY8wktcjdew4a",
  "key40": "64LMXUEcFCgin3i9GyZuTZkptJSaGJuH3gxy4NzGRL5zBJJCnLXnneZ6UzfdCW1fwasFB5PPmUnXD6s8tY5mNjdV",
  "key41": "7uyL8DijiZoA6igDFA9HMxCYmsdubP8BZ8VVSbivn1PtJfEWh5fTaS7X46RAusqb49GJgejUgj6Eb2u8n6SxDcU",
  "key42": "5KHz7mWT9QBmvcxGCpfXm1ntyCQswfBFux8UqYgS9XQG7XruJfB5prn3AsQzVwKHXsSvz4sYbjFXV2cgUh9Az9fm",
  "key43": "GexhA32mB3bK85DVkJpdYzCjh5fbPcP5AU13Txz3CGJDVuzPguAUB3g3ht4wMMqzANnTmrFJ9oqodVWQGuveJdz"
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
