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
    "5v5QgM8ai9dVALzAUroNE4wKxnqBZpnSu9PZToA4sDczv2ELFxFKmREvAto4eCPZfnswmFU5ewrJvdGhdeKM8rHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FSjvWnP32fDnbWRMZKspp5amRhN5ShGFyKuXtoM62bYQ9Xr9UYapxRk6wKjGT17CVSBZVC5rmZKV6W2sy53Ujq3",
  "key1": "4ZKk9KwsLZrd25zLvVMhhiHJWghZiTKMctWYEHS2YN75j5jei6aqJFMHzxHeBB6iVo424GHEr7Mmd9ue5VyfdrbE",
  "key2": "3GakczEtRoQECGE4c1ofQun7169EMVp1uoUQvShYqbJXG5L5Ch5D89y4UhLAX5bVHr75MJxv2d1x8F4Pk1NpEefE",
  "key3": "2oUhiB4M5EX8La26EAZQc5x5eFansofWodjWVsqKk3A5tURGwTQce6ddTEsTtTZqUJYSvUNfoBVKqKrC7zZA5wK5",
  "key4": "7A4ukk1NGbW1VY1NRiPxSmbCzLH4v6RC9RcA77Jv9H31cHxgEipcLk2FZELfBtG74igXgCikQvDtiXzzEZFhzdA",
  "key5": "5EuVeFzzm5nuw4GePwUqCAospDUBJ39E6DEQ4wqUipurZ1ZsF7gme9SRSx8nWVHu6KvEKusHtaSM1iGtBuoLHzsm",
  "key6": "33D4o3XXzHVdMqUQ1HNJJ2DBaUkwnvakLwJikCDYgtDYqD3Kv9cqX6WWnhAJ8bGnrDZ5fsPN64FYMrfoHttBch9B",
  "key7": "2fgttpPRst6TTPhGxzPeyPr6WS3emStKM6ZZyWpRVp9XijapRBZN2mVHA9WYVzdNeeN6cXmMT9oecbCcEh7TS1hV",
  "key8": "5PM65SQje57pagbLyoCnzY2iN3jKTzxReVRe3fmEBwSQT1tjbiCMi7jf4DZPQJs6UrAfYo4Ju1Eoc8YFgNC7hDxN",
  "key9": "5j1VzFSwxtgJSQCnN6wtWurcuELM5gmrML6WxW2d746cHV1oZ4qt3Gi6NyjCfKMwEsaw17rrKox5idgKwLgGhkCb",
  "key10": "4cCmqsMEvsSrjFaNAG6k1cRAiGcxjZUy48tNMUu4sqJH82j2D29TqrmX5kjW8HEaoQQy4KSfYcpb8TRWnxmDFMHQ",
  "key11": "33g5ov29ZiFF2ENMsVh6VYiw4Sy2qwXwAuqS1TjytiT2TVWNGEo9UiAbQjZGs5zVCJCMXVGF1WhgRnBXPLFDCW92",
  "key12": "5yTsr5MTViHMhcdEC2ojgGm2Ya7qGVibrnNUHgTXomkyAYdQUFBvpWTvBod5BCyc3gZsZzey7Rw3BGdEJfuD1iui",
  "key13": "4dRuxx88CyWC4osemve8bkay7qGnpT9AKNzmZd4q87h7zrZc7on2AXtRMbsT6NBfuLN5vCVx2cP46yZh1BWKDsh5",
  "key14": "bNWHHvU85TMHLpsUainbMgbcEKwRmPUxjy6uWqFCiDmsAYBk2a4jGfRh5YJq41Y7tiv8xH9nAu1JTZHjq6Mm7YB",
  "key15": "5efUAuB4ptbuZ4865QAPLmD21fZVq4w65g8HzGGPBmYL2zcS2a5G6hNrf1ydpWiXZXwMtbpVEgkWiKC6CtME6vCd",
  "key16": "2MU9z4Kxr1Db74xx4qbfapf4sew6TKsgn1wRFoB8R9m9ft4KeMhH4Me3Uq1bVJFFoG7difZ1qP3V6FmTr9Lw8Rpd",
  "key17": "5W5C24uHkbC2cqvJs6fd2h6m5AS9GoTdZeMfQYjMR9PPhsaL5rVnSuBzayPPnTYKa1AE2mmHMqWXWirS43AKcVGx",
  "key18": "5ebGSt1Ru6GBg2Z8ApCAoFN9WPYGNavkQSHjb3WhXePz1S3DyzY3LQd8cQyvdY6RpkRkqcLBAviZpZPXGcRyATaX",
  "key19": "F3LgRKXKdFvvTu9pVaC5D28126L9GdsxN5SL16rSaMk1FkhT9pPifGZsei5krzSnLTwHN3hALudTFPPgMNDqrjX",
  "key20": "XgUozq4bvY443Wpvkm4qukuNsrCF33bb58pRDBWwQ7TdEYr1FXEmxhvKUdzwhwapKsQ2tjQvY9H6aa5qcb2A6r7",
  "key21": "53Rb1nwWigMdrrEQf1wXaWUHk3XP4qmDiMdbDoExyfo7MDWE2mmcG6dBakHViZQziV3WhDdEfMVopycLUuPmRZ7B",
  "key22": "5rZ5uF8pvPBAzjsjWSxqmnXVqQTuCsv7iBKTpqV9cch87PbHjMrp4qQYpmRhydDMZSoytYeuoQrFo8JtNwRKc7mW",
  "key23": "3Hg9bGPksm4z4yjrFwjy7DX8LgYR9FJiRx6QqTTMU5CxRi3MYPuQzG31BbuyF7qPaxMhmamVDAALVGK9ubQfNq9r",
  "key24": "2ueGqfJUdqAk3m9VCuYXmdXAQoqKnLduk4d3NYej2ih213DnmQay4c7R3epT4nb6cK1BVwsq1vZ9Cns1huUWVta4",
  "key25": "3U489C9Gm3kL4LDDwBXL9wTuJcdaSkSPM4Ht1G7SiixQzxDPsT6GkHMWYZgpBHjBPNe9NiBdscDTsgYuSgnM12dY",
  "key26": "2PGBXQ7ZSVU6hqQwxxDg9sfUDMkxVZ24sZW1TqQkN9FAmFHhwREpvscodXQHmBjTpzkJQzwmP7gWHnhuKRWZfPBw",
  "key27": "361dCKXTaN7C842f4afKHjAyw8CrwPrRtF2NjU5iaXtbNfXx4oMDB3pFt4q3T1mE7Rhn1uvo5iFLoSUCNwhHDYjC",
  "key28": "56cSZbHAYU5wRZrHfvxiPSxRsrdefLhQNLBgGBpeQbCs7ek6NZTzezXXhcUvzSPfK4GQtRCXGLtkr9iyQoS3Na3",
  "key29": "3inZ7JqgNX2Zs3zyAvT6ba2VvGhpBfwAn7eWGsLXB9yiwGBYPTMX8YZC3BFhsFuZ1vZUC7FRHRZLCGcpVzvZSKKL",
  "key30": "4N4Tj56F7tNftiA4YP62jvVkDCzaxyyPpYxWvwsuQVwXc19rzyuXwfs4bekmU7Zbm6QUXXkSiQZQ1RRWBtguvWE3",
  "key31": "2XKfChiBRdGgWd99D4yVycN3pU3bpPrUavEnHCia1SV2ufMM9DRmXXqYTbgYjmpbd34hLDhaYGg8fbkQ8zq8RmKu",
  "key32": "3Nhrg44NtYyDdnkQmCCqrmn9pJnBvDxM56pxjDHGCveB7D1CH54ghDfvx1XdNYafRDJ5To85jEHfzJswyFXZQ85s",
  "key33": "4TPXuLiAc3tQxicJBvATqLTM58LYKxmEm17y5z5m1AFBVNksn2KEXn13eMmorGdsRufWbePS6Qqh27RrPF414grD",
  "key34": "3ZtSYPoK8Sm9DaXDVrW3Met8dwRrNdYSTLZXoFaYJdzVSfpFehs1c2sxp1Ao7hxzgH3J5a8734PupqyVujJ2cuPL",
  "key35": "3RxnHWuSqpjB6seXRkM6W4un6AjQQrV5dAYBPxrbYH58sF14XkqZVJRSkAUwMaBDCqqmYaeWwwsXLeitG7yf4cJC",
  "key36": "4fZjQkrpBQWQCSSo7PC8s2wpsAGP12ak6icSSvrFaCeK5MFhMFejpEufbqCn3AjSH9aPcnmL7aYKirfkoc73hc6T",
  "key37": "2KbtBPjAwqAybXec88rE93ag8Lqp4h8HXSS38QmiubqM12nnvZpfUmw9JQQsPj3TaBd3iYgUc3RhGxBP8AaMTANu",
  "key38": "34M5sQs95KPfAsT9kzgLyHmskMg1A6Z6CmEue8VADmY6XUPrSchVUMr2mL1Ns8jBPRm3EjqySXQ6tiGQxR2kmTJQ",
  "key39": "23diujjoLoz9T43dmEDSjpocc4T7dYvQfqdDQxh51uxyhjaY18mLJ46bxZJeRt8ppVt2yRLuMS4PQQo55WApaTTu",
  "key40": "BXpX4tZaLtLwXx46QzKMBLdWmJMPQ8nARf7Hb87ghzZw29y5fYGzjJVKHs1f6utN27EX2j8ynGSod7ENAJ8SF7y"
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
