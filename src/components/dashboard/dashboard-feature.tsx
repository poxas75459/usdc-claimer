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
    "2r3Zm4Xd7kvvJrFp1tUUp9FSsXVUwjdDdsDd54x5LyoNu5iAETXhzVbcxFnAcwnNzEytfDZgz8fgLzfeBndzNjuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ieSQqpbGvjoAHkmqfmQoCmejVB2oCaXnwh8Cb35RSWZr5geHLZGPVhLy8SpzzP7yLvTCzmg1d25fG6XyQ3XcsqR",
  "key1": "42odKSkvwzL8JAXgZytAg3CgykYCbaRCjH5NEwRwubAZGEZpLgtZj6FZ9WbySBPDb1cddYcGhNCRBkUCLf74FSDZ",
  "key2": "4EsKg2BmUMhG1ERY6A8gYrV45Dhx6G1vhBwS42eJh5KNCkzoGivhMiLk6f8Vr1Dq8nXBeRZVHjGqNAtk3LuV6bPc",
  "key3": "3pXNhoQU4opMnNjeYmxWwo129op3PwPbwusQYCqecMEroCLY2nFvgZTG9xLPLdJjMPnSaMxgwSUzTjo3gnwDnExR",
  "key4": "5xJVRoUPpwx3ACbdpGdUeYRHggL6mKhCYyhygrJwX14y9vdpMhWBTVBk9ovfdUiYmRU3kZy3A5urdCxSnUubojpP",
  "key5": "5RvhVSKEps5ZJehB9PedFcmAuiQYixGBeQx8iFksaweqrZRSgJ1JT6WNoLj8Fsoq8XsdEXgpLLisGCP67qtPUsZE",
  "key6": "4GQ6e86vuq2sXwEamjujB9KzupHe2SbaLYmZcnv841zq8AtUykXkSYHv2ypANNzuzRNr43DKGmrbrNXcoZUwBRig",
  "key7": "2GVzAcSHb9tFys6ezddEqJYCpzjH1ovBCWm6ueMDGbLixDQJrhHNzoLK3d5qZq6opiNERGVoJHd5e614e9ErjHRd",
  "key8": "5bmuPDD3zdxzjceKcSeBz8souYm3pmTTaLDR1EerF9R5sL6fVNjfcqWaZz7JV3FZ6bruhMnoeBiQD5rcuPxLYUtg",
  "key9": "3mqwuzZ6cLukYLcXcWPgg6YmXuNkeDQhSWPB7PHwzcgGzRFejVq38eroQncxPQHnDyNwsvSRT7U48pf3L4hhbLnL",
  "key10": "5DKHJPwnNf5x9g7jFNbnZDwncoh4mhvE1i9Z5e5oNtrEnMpxvM3GBvYvtCZ4kSkVmMyqyctJAJVv2EkmQA5xMDZV",
  "key11": "eieYUHnwc5PFctS9pHSYVLm8YxzGQt2TB15xwRXeJpVW1PcftftKN8YD8jkw1sCq5egY6xnDMmWQLPeWN8GQZev",
  "key12": "gqTYtXr5qMvcjo5Ec9DUJd6g3gHWbmtJLBTnBFXu2MkgAmyTznJUeHmwaXcA4SFUDKDwxgRV4yqeAaTcr81Xam2",
  "key13": "2ukomoU4smARJACg7JZhnR8VqAppA8R2TXgVUQc5kwZcu1YoFCorybWKMKdeNsbfNER2JaQipTshhE5g47NJR4st",
  "key14": "45hQdpGQgSJgw4thcPV8GYekhTheRB5tPPWJzSePQ6jE7FaBTLkKpacAiZZsYiDnpq2WNnGQHeYSoLSeQhLGbWSG",
  "key15": "358uT3agsF6598KsNyoqh7ChBLaeeuXVD7jMrK6qmVnYH1ydJCAgLX7iyb4KdtpZE57e69RB4y17nrtmSLCqGA4",
  "key16": "5j4mgmrVJxKy9of2JGZTMiYVazLLBg11zAUGt6McwuPbNFdscSaMJbKyuPAr9oY5Jjm97DruxkWmYyFDjwAsLxuj",
  "key17": "4yGdStaVJE4K14PKXwQ2gexjCK2pD1JKyiCwx4RGSun5gRvj6hdSNSYuSK5tCd7J1H7Cu3QZrGtACp1nhmVycPZs",
  "key18": "4og2WGoyuUqyGPY3G8x4QQ5vkmBUeZrh4bPYkiXiVQDVuCFtNb4MYyxd2SMbV8FtPijrLYRrK3mGQmCXpXdjdTjs",
  "key19": "267tHJAjw5F6YaPpcH3DEsEYUxB2hWq9VsThE6vsG4vzpivQBRQSNMaecKKob9XBQhf422TrC8dmshRchySj8oSj",
  "key20": "4fSUjWAedcdbEUJ2e45zkKZXoaqZ8vYCCWkYQVWn7dgyjyMEJ1V3YYgUTCA9KFvsQ6eieJP8g64kPW6myGSvhfzG",
  "key21": "4wouk9WtQvfi5NTfa8y9Xp5CZm5WUYy38xdwXTEpXUJa7QqwXpRM2oHiaSRrnahSoxJp9QTUrBsnAvPiwHZ4p3RU",
  "key22": "4QF27iW84zSNY74vWrw15FkMqBz1WaGUxpkmdQG2qpyqFzvUzLe2LKyP9DkTZeNobgKKUfTwaKtCabJ2aGDpCRTg",
  "key23": "4Pj5VdwttoXGye9aUdP8B3EwNwiUkFtZMgQQ5smzv7PLWmnp9RwzosAa2gjuW2rg4iZCr45rSHKCQXxnZoUABVJD",
  "key24": "4sJPhvTAdSyBTNEgGovtvaVLvJ722uNHQKV2ZCUbnFfo3jL12jFsRrP473MXVqBENLvj9Th1Mdo2VAKJFSv5Za8q",
  "key25": "3ybR46C81aWmhWXHmwdxS3KrgnNxGSsAC7msvWK2HCdHHaJqhBGNdSdbna5kykyG5YdjSQ3ARAEc9APZPs8rLpWR",
  "key26": "4CnwbjNEAjykpV8yvykmnLMjPRtfLFyRyRqPro3isk75E5AmPPvTmQM4aVsPvmCdWzcxnk1LNLCH9zjNzWJVRcjY",
  "key27": "4vMQk8zKBCWKq6K5kQN7F6GWi8E2JU3nGT6j8SjaUurJY9JiKAmML2UHxesJjXLxpcQcP5ExshKmWi49noANnkqs",
  "key28": "b879Vtjj6CtaM99d7KGGGpXrrd8VQLi9tQ4XxvqkQ8u8rv5JQYA2CLJiqpD2anXBLFYnLNHeDNRJUt6BthtK8RT",
  "key29": "2JSFWoAJfWCyyGgouwvciFvL8HVFMDfrRpNi5LiTUNffpy4E8dWUW3acbt4St3wCeDBAR19LzZQHbUVcUXtEidi8",
  "key30": "GQVEwnr1yM5h18Zncgm3aGiiY3nyKdxdDviiqShcTWb7ELjQaqovv8eDftj1eBCg49yAUtkkdDqEc82GwBS9PG6",
  "key31": "3u4o4tDFj81tzwR7eCrKqMLRGm2V2ka3EdVuvA9692bddF1LKaJzCxp7NuVjbwV1NKZV9CVGBKBrRjgzj2JXL9W9",
  "key32": "4BsjM5XLSUWXknQd4nMFSidfBjcqLZnp4EzVFJxhSyYCx16XZpYWZvuEdSNRFnSjPnkKY6njhjjZqi7QAcLaZpE3",
  "key33": "VNg6zLbc36GVHs1ojfrEy3yt8uQDmybfKX2qM3VWF6m6ZaKXNbK8aa9LH3b6yxEnvGAUSpa2RnsRjeFt2vXYTL9",
  "key34": "byvmbT69YhfsUhhSvo1yvf4UmZWoYNWGKPLD1ywiyJFnnq3Vejk2xy4jh67EcFPyobmGbE1Kidf3xjkdzWtv6tz",
  "key35": "62CHphpC7sxwnYV5omoriGvdUMzZinqwoaK3sJReAvrGxp9wXqT5RJQhwQnoC3oCLnxNh5GHgwDEouVotzs8UTNc",
  "key36": "62inqhPUSsFQ5Sc6p4hrzcLmvxD5XMgRxyPwmS6nwLwgD4oaf2mBTvYMFoWDjmUJ8UqQEcjAdHB5VqvFEjhvTkrw",
  "key37": "5jHbqFW2eEL4FWmuyao3dv1ek14pMd35aP3z8ryeWZmQWkyqTUSoakALVNVa57itGP8RXTxdcvJsx2eX1Gd7CFvA",
  "key38": "3bpqpjYx2vQ93ifKtSjw84QEHg2W1ynMKFqvEQV9GjGFyJXXtr5ncjjapBWRZ8kKg61TBmEnFWcSgUFJPrG8XnNs",
  "key39": "2HfYpvPPBoBvaKq9kxp28twgzntvXpf5G5QpXQzM1JKVVYGEoAF6LT7884kUJSUweX4dScpWRFahwjrTSzdrk56w"
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
