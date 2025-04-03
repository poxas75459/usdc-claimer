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
    "33pSZfT3a5DkpnwaxDnJz7JfFhx5vR4QaAGZEfY6WfWtfPAacWRCdaZPwFDP4TZmc2yRouZq6TD3aNT5TyjN4U4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nQQ5gKL49SyxiPUEdEPRJi2qkbgDZGagusC8pVDvuCo2MPfq9ehHjLKXLy7Nh7b6FUFv2aDcLdvsqLfbqwybKhd",
  "key1": "5W2QJNp7YDoYNoHTwjB6UayEa2YkyvuLs1e8sXbyW3UZuSSsasb5iUHq2miUhYgHnrT7MttSBoapMXt81PMNSp4S",
  "key2": "5enSoEJ4AnCNsRxwzDjw3nQw9nziyxHxonQck4sCPceZEcEjCeSWGsMaudn1XzC4AZcWSvBU6NSz79xBeEE6iJk1",
  "key3": "315SAZW2TT3hVqjkwKy4wSzJYZmLQ7V3nu9Vop6Dq9Sckqma8gPasBcJGuXAjG7PKxQek5vzAWjxPhrV6fLpC9jA",
  "key4": "55vgVBTtE42RvnhmHrZjFZmAuafmPZXaiwEnFavYmLiXwDBCZQ8UMUunB8H3hdyxhSixG2DgELu1y6gwHtH1yg3t",
  "key5": "2FJfQ4oFRkfwWCWoDeNi4nJVm8n4WEmejugVvdAJUnt32tcPQmoyiA5d1tQPKtSBovjBVVX8T7UtZu97bPzMxcjy",
  "key6": "2568e2xzxApTkbeL5PpfdGMtJ16VoHYzWTHosdMCD7aS5zYqg1se2to8UkeTJCbgKeqEnXPw9WkJjZA1CUcapzf1",
  "key7": "5r5aoJJrTM2LWVr161v3wXKyfUhWJu46xBbPeiTB8g1sBLNEpdBWMFcDn4jQoi82v5ixymS3qDaAmSiksxdJcp6x",
  "key8": "31XfPEL6z58erf5bkDfu7CzZWHWijBPLZ3KwXEbcgVqvstXcGrwkrP9dsKi5eNEGwb2JvAPqfj2T9NgvHqX767xy",
  "key9": "X3hPc11KJe5DUM1H9cmnUoGC4JXxa8gAYCZhsabFd2DL6b7QeGBZhNXU1ZGURfd744AgzJEGm98CKCvSTHToTo3",
  "key10": "24WGkJ2yqTRSnWBwmiDsSUtGHvewGYGHmFJWLbXLtxB2Fu7puBtbNwsYnSprV8Hsm7Ds4gYmfXPnXMmSezddZyTh",
  "key11": "z5K48gBDxqYsV3JtfTQZ86S3Z1ExUub7bn5VLjAERCRM4JidV9Cwu6mb2nSB99S1KjXPoY1mYVpv5uwyKrp82QT",
  "key12": "4PBEPbUxyTUmQ8vT92jtbocx4d2xXPw8yXx52UfTDa9TH4oqUGmaHcMaxfQjTp1kxG4SSBfXF3m3zwoxmJ7o21dQ",
  "key13": "3d2G53VqqETDJaEUZ76RpUMvL6S58YUMnEFHuVeD3Sgw7AVnE2KjQkXizHfSf3QbUY1Y4Qcxi7d1g7Loo26SJYxc",
  "key14": "5HqnmMbLzJVg2B49E4tr5LLywKnjgzwf6CZiJC3dh1YoErgpaSRfzYB9ZGVfN9jTgisyBYvR78szSJSB9RMoW3os",
  "key15": "5DRbHbufaNDHmgKtnPZ9pwC2xGpUnD3H3y4MYyuxnfXuaD6aQzCYXRKfmuD9L39GNn9BkJbtpMYe1xs3jNShmhPM",
  "key16": "5BbUaVqVytLyUAVty57k5DqEcvYitHy4QVNHN7a6xu6Gma5inM5Dyjo24zLB8m36PbNNevL1Mcp4HCR7wpC233dC",
  "key17": "4bJthmchxFPPcD6hGbyrzME9G4mekwUbv4jipM8pU3VpGb69JZNd2AKmJJv4bH1k3ef3bpsTsCs81QkZXfWzvMQQ",
  "key18": "5PK6san9X7QhfS5YnbxUuGdZarxNHLBpSQwmNT782pee53kC3Ra1etLMGjtKk3tALeyrjYsJ749E5oBHfDvDMR9N",
  "key19": "3GmQ7as3cR9Piw95bpiEgY5yY1uZHVUiGPuQ5r1LnfVu2i8kbQbGkQ7vEVx8JV2sV9akTpbmw4hVHA6oFPvNtSm2",
  "key20": "2dXmqtYcyMCH9TKF8rQ9zZp8NgUrAKR9aHaF5TApYvWRR89r9dhYDcfppbfWAtJRtuWzj5FGLNoN96PEW2Lk8khc",
  "key21": "4TM6b9tcRYwntiWvKRdfaDhMZen7LW28ot6vtYZbQkchNoZ5SFmnuxftNj3QTFdzMADg6QLDT2yc6jrfCMkzKpxk",
  "key22": "3dCqAnCHN2TnAct3UQnvrjA42KLRrxyTCZeFUFQ64QcwA2vq64gvzLBXnxvstpK3Z3g5QagFZ6KfhTPUQcYovAAQ",
  "key23": "5Fe2m8ngoSgpcNveUbUdpLecthf4VgpwPRcE7fz44ZRZ7mzjP4sLnkksDwW8NZ1cPgWdxddhbtw9C95Sf7EyK29K",
  "key24": "5wFT3uqh84KDUYZrFfphmZkbDn8ogekbvzWQ6wZuetaKpLYdToYTJWvnauw6FZSC4BuAFYcrSmwurGwdWAthZsiR",
  "key25": "57dLqDgQbuX62We2kRdVeztq46KYfMZeuehQwEVbP9KiDKPzJx4PbYCosADEWsuT5SXTLcSCi3kpggkXVGAQDZ3k",
  "key26": "5HP1qdtzQuZRvyF4eTAL8RoPrGTz4NS1dwJ7ueaFG83GfcMXAvrnutmmgCTwu7yLuMp39mDT9GkHKmxWpuM2gcij",
  "key27": "CKxHwdQnUy8qoo52uJq4jgdcFHXgG6j9oLgbz87ogY332U5yCxRbNbB5RLze9EH5EPUC87SuzchWf3tbv3p1qfH",
  "key28": "xx6pmnx8mKNGv9HUHQv922jVusYwn9XqHgrDRuBufw6RFjAQ1cTDQTV23xnGn4Pf38QRdYgdeGtobwzHY5r6SoN",
  "key29": "4Z8daDBpg2nZgim6Gn9fZ1CEfZjywM578zn1Mb8XH3GjYjPJ8KUgPwULh7e1vWBgpaHUB348nXcr4DivX6yfrt7Y",
  "key30": "39pmGxmc7CFxyTrkqva3NEsBx9xyRdXRhvweeVb6c6FYS6i2PFMRQsbAgtqzcFCMtu2JzfYpwFutavT2jNmBoEuJ",
  "key31": "4q79n6Mfzv5XFiEW4KGiHybRvLWpnFJKVG7ZVp8HXtoA3K1E5NuezwPvTnqDrvzLdyYsDYKForMCkBTRE4mSyVP8",
  "key32": "3T14bSUhktMF7ujjDpZy82QHxKD4Bb4YjMKJR5HTokxcioRG1vQTD38CttyYbhkJXFZSxHUTCFPE9frhAhFQK8KC",
  "key33": "27VT4tDnXDDtwnQyjVsPfQD3KKpN6S3zSBmqPJjM4TYMFZUyp5KmJGbFrP1Ytu6hiee2tX6YAqoTxzvVMhzqUwGL",
  "key34": "3MQ3Y9oKP9UGaGitUnAS54MALx5wnLVM3GPuCfBVmahbfbYdzy3Bgi4UUwypBBeDNTDStMSedfy3J9xVjo3cH2ur",
  "key35": "4NqRBMdfHyemjad48YRBXSdWWmGmnSqdyPtc9BDsWFtZTM3tGZPjHoByCMb4YF75kKk7AVvLwyJmkFTBDSamzepP",
  "key36": "5MsP2SayX4hr4pTTyHvDxHYVqMZNGo5HYbUeSK9H6brqN6pkGhgBnX5LkT2XtJgQCZun9uc2hJ3aZKNZAhR5PWdZ",
  "key37": "5juHRB7d7VZnNRwzzresH48JvtWrZEqYxRuggNQ8939iMwsNCQhiw9mVrkCVg11jZiuAJvrPgYY4DVvhpdYwNZ9M",
  "key38": "2WGvZNV14QdtrxjP4d6HwQL5Dkknm81bgGQD6xh9n4o2PaCodmyM8jiiRnjzPyJYUCQtBYTqDprkrYoNeCqykpUx",
  "key39": "4JGMcJhNfi4RbXyZG66jsGKSAWRDR46N9aa11Kff1TSwtgDu72ozXXPLmbU4CD7zga2vTjMcGv87544JJyPk6WV2",
  "key40": "1irTczKV85ktFowh9N7CdpNwQHXLQxixRznkXBqKtavJc4X1dMRjc7RtXkJEHXvJVasp3Rb6QrBLd9JY7tySBC4",
  "key41": "2reLHkVShEYMTjzdsikADHeGivoUU6WH9hekgR1tfmMurUnw9H3su5KPzUs2Uf45aYcEeRQAe3r3XuAqe2ZZe2em",
  "key42": "3JXUMc59VfJ7tRQFQz1A7wdSHJaQphkE5giLBhLGLmuXLDhzmqF1f9o9qag3XhM5rsm2rspe6VE4irUZAovYmxva",
  "key43": "3aKuNN3Mfd3hg1PsLEJVb5ZLXbhmMBKgrdspYS5zHZrj9rWf6MLAxAYvxrr4n3pAPXQnQGLJzVnbARkMdiGGL4km",
  "key44": "4guhBwgksz93braVHfRpUGKGdxTPmTJUZzLPL32yTYj67iLbc1anSfkALi2isNh4FwogVfVDSmXLQS9MsRS3c6Lk",
  "key45": "3qrB5CmPRjV1FpWbEKhSd8n6VmptPdQzPstftLQvz2nfuXaHEomQMGXJfgrwTQDmvsM3LUymeJTHwePWdf7XZEu2",
  "key46": "4xmc17uXdvEThFk24Yp7RR9oGfNkw5reEiDJn5uYvP6Peqk15XekFQNSPjVcdQcS1AyBToU9cmgXhrvChd4XWpE2",
  "key47": "wzApoSPLSYz8VHatLnbiY9PoKxzEMoJTvAXEEehtBdHPuhZ4sShEa4W8nbBx7B56pTJV43dvhh8kaNLQ6fqd6Fp",
  "key48": "PZM4wDChKd97pdhomzm1TJzpYAkRUxoVZbHvtGRNob5s1iXcvVZfaFkuf5guwUDbFULyq3AEhiReCHu1q83Tff7"
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
