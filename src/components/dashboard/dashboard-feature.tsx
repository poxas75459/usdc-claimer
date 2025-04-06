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
    "4EuVyC15ysEZHZWQxACcqZQJRkR3GrCCW4K1TJx4E1JCFyS3WfjzmoHhu2EDXVh5b9Qp4iuaomeKKPLPMzEQmMyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K4noZmKEaFaAtDAgaQS5UPityRnby2ZHrdJeiMfzxErjmZ3Jh8HyihRmkqxtC9XGLskrmakhG3sDV4cBp5rRKV8",
  "key1": "5iCKzdq7cJd5M4YsZWqtsMxgzHy6nvQ6XAtcwKUr2LvG337qZ8FngNZRrCjVVbbQ1S4ZPfJdUmEcLPyqKSxzEhrS",
  "key2": "4CgziNcnUHhk3TReySDbZkPP2gdN8Gymbu7h65WmNAiWr1d2ZH9rNq8xdPb4yfyajhPFfFmyK1bZ4D5HT8m44obD",
  "key3": "3D8x5GF52rJsasjddJBNF97AgpWqEEG7opegtVBwaSPTDcDK5aixpP64Y8PnrP72zvM88uh97mG2bHHNtvk7hJCB",
  "key4": "3FXoZ3a11YiKjBAwN46S3Q1D5TruJVnpPfmKxYwUvCUN7pwLhVvf85vbM4ibUubvV2tvoamAs9zdLFY2DsrsAKZP",
  "key5": "5ZrCp8jFMcHicUBfGibNrseLwfXQq271Jmi3y8Vjp9wQCgFCyRXphKbrHPYLFDH4FNWcXTWyR2P1JgRu7JUzBVsk",
  "key6": "4Hqdqe3u2FpFi58MZ75FLrWDUdo8SdTwpJ2jDZLyqS7zfm3UJDhu4xzAx3tp58waPZMQL6RK6WUY2dwwdAJryMLH",
  "key7": "5mxdwztG6RHgMXuxb1iRBFqpkNsP2wQzdtU6MHxAavZSEzK9oDLmmoN8VSMkM8qgfXtL6ut4F2KXtr8gTMGcSpcp",
  "key8": "zUK8KcU8SsLLwtqa6qKL1mv4kWxD2QEsND7Fyvxg9p8tnkuU2m2Mvp6CY795YHieMuJi8j9XAfEfKRooD4v3SD9",
  "key9": "2eYtaqZgCs3FhutQ3mLNwZUs2fCk1T3GcsZZmQHoXhqeihWmiPF8opn3Hkj9j9b2pzW5D5qRaEVwcK6wTV6ahJmD",
  "key10": "4Dh4Vk6YYKRFGsbE8L52uPhFhYsv5X5QQnuTLE2sRvFgPhGdjNntU3S8MMTXHupApjvfEMW6nLbhdyZPD1YE8usk",
  "key11": "5uAuGEhB1o4cHMRiA2Cmg8DSgteRPb74aDieB1FcaH5UyZMfBvMWuAhvzgSohrk71u9vtDqfBNQSNayohPirH3JB",
  "key12": "4GA4U2BsafoWzt4mjbYWaefKop3zXH8X4xVa7Vi3hbrZszS5pqPwcxb3vGEUwuEMWm32fpWyNvqys8G3pCnpS2TC",
  "key13": "4nuVeawLT5n82H7Qs8aCEhdrN3drHNRCoCeFkengXBfTRKd5pRRf9wibByCQiB8e4zLhViF8YQihYN2q3ywL5LEg",
  "key14": "3wqNMC6ecq7SRXYA9BB2gTv2uGegFdTYCMoU8Ue5cmGBDky73reAK9D1nqJigLFRa3rptHsnGsZwYaHpvwQugCNh",
  "key15": "38iLQbbG7HtnE5s2dMCiSZNJPtSPhQgCx1nURsw6tqjKmq7guaPYB375ZjtJFn5P35eYrUb6MdbKd7EGBP94AgZt",
  "key16": "21sTkbf5HHxDCfJsF5o6vcs1jKTEQf7vmK8KEcLJ6pzqdQL4Uq4zxPNux2UfWGqPQqVBgu9ScfmkbgskjyU3bpiC",
  "key17": "3YfUjFLScavaWrEXUrLpgfC267eZKT38rkDZ2nHHweCbLjQ2jtD5S9oAGJ39F5sxNNrKpEKZYKwu8fZ8uo3mF5J3",
  "key18": "1Q2AFQaG5LmPuTR6XDaxyD2K7FvfGrELHg9TRCJ3SoaqSeythiwkS8Vn13mgY19c7TtehJ9hYke25FbBAw5UFny",
  "key19": "3Fe9SBBkVMabQtfg3Pgyg5vg1PcCHKoLnR9EnpBorzDE1bFnB9MnAPofv1asazZHk1JukLt64rUVYbEwwxiuEW12",
  "key20": "QTp6z4iz3sQZSSiZFxeiua9MVos4f3Ld76RWUqJGAkcPyTB1HwPcz9X6aRcJTznBU4xuw1JCszYWSY7Q1hW5LTA",
  "key21": "LZR7PU3jU81CZqHmgen8KfD7kgTrV88wCR2f6cCZ46kL1MmuET5yoSCDEDf5tLtSg5Q5f9Dbm9CZesvBmEwL15s",
  "key22": "p1YmsBDAL8gA41bSYHtGbJ43BtveWqzm65sh8EzWeXfeAM5uaamUQ7SwHN3wyZsHhg14dhopTSgbeKWmygJ1gy7",
  "key23": "4w7erxK7BAPqUcjmUSrxgQ7q8RzT9VYLvbz5Nqaq2GUbccMYVdwJ2LN1fP8njTHC52G1DKAXK1rP2tAtLWbU1rrB",
  "key24": "5dd62VkEUo1RisWTg8bGEibcs2uJyXFPt2uiSDgtVFqBZRztHg6ghyMpGKMyPnvAHozERfYSBysyUEuQCe6BCSSx",
  "key25": "5bxGViSb4uV9deucCa4b4vMTZ2vvssZVBQw433a2PhjVyp9eVmHRHCjXX7g7Y9SmyQRjwLMzCR6HX7GtMs89fe6o",
  "key26": "DTsD5TShippcdRdYFsB1ErqkbR3KaxE8Nqf5QYrFJ8g1yAGmK6MvDwvWnB8oSwuYqz2uML9iGMCGopQS2fYfxeF",
  "key27": "2PFcWbWC2wvFf6kEJm62ns4d3YYSm3m3rAw2QU97zsa4YuHcD2tML1HXPyQSwaRAzCGJDwddBQxkYV7xVZsNxkHa",
  "key28": "ZqkEPi3Lhb9a5LRZbLuruJpUVEri4bTJLZHFwxPEFt3ya3kaTwRj55aZEAZU15drmCMQcERxS5Hw1UXFvhSvxJx",
  "key29": "3EAydNcLCwaEbKi369iUwPqdoBw3UNFgUuJzqmwSAe86Ecyu7epr5Um5u5byNSzmKfA6G6seCU7YeqACVKYRpDag",
  "key30": "572x4vvd3i5DohiJ14ZfPh1E4YmnscnVNwqLDejRpngpA2JCjhBNJRh4Zonxk5WUbnhekUjHSPFdZpkJ2oHJf9mW",
  "key31": "21s4GSwNrKintKFm8ZDpRQNfZVYb3kMDn2zekyAs5vPhUwkRb2mDQveep9yefwRjTTqMQE44ntASeSoDT5Tjo6EE",
  "key32": "4uvKaoyMnTBUrVYU7e5yTop2ehs54tv4UYiL6C8Y9ArGA6gTUYpb2JdQrw4rcVDXeXYWtDX5wD8Rg692Hrj3acbt",
  "key33": "Mu4Lqczg95GdarMrU2eEm5jVDeNh6FZeUiDhBemFUkxNn4WTTGn2HZLr3uzAHimnSpA7eH6BYx38jjGH2WBwoeb",
  "key34": "CcXNwtuHLUKFoDqCcBycvkVsNbje9SimgnvBJgRb6RSGh8uu9BvNZpGQ5ujpFdqgiby1VBi46yXPMm6S53tJxXC",
  "key35": "5YcwYvVPyHZFKp3dpn3AEacup6BFYLwzyya4G9WJw5xye1ZsV2yvgFpgXXL1GMWGyJM6zqJNArb3Pb1mGE5CE5Wc",
  "key36": "5RZih9TjyPE2RZyktD3MGpq3aTcR8KU4AJtNoUk3Q9igLE2YCrxmy9aLddR1bQi9vNUhNAYENb4rymubtVcV8Rbr",
  "key37": "5bT7nribv7S3RaxNk7MuXA4Q8XGvL955TzU4q7QPfRmJY1xyisdzqDL4sRRp4FCX8KHrdLWmYLjF11ancFihnmKN",
  "key38": "67EHbejBbBX7fR4C5VNuQeceDz8Wzw6m7h8JwriKuSUe1KDc21F4hhUxxXSESo4ecqJCqfGcYnt6R7U2Md4bPpSa",
  "key39": "6icPLmr1czxQxgEf8pByZZZCXZrYEMF1F3zcdYp7auF2hg1oGVpn3qpDcbc5bPaeaBxCyXJZzK6bnbYhNAqMzEa",
  "key40": "46EFKz4yWv7BBuJBKRaBgZ75QAckGwBqfqbeME3Lcshw2nGtAQJYB2WRXETa3mqe5i9GKFyr4Gz17ff2vVLwieZW",
  "key41": "2s4zGa8C68o6EbdTuWys6RcFhaHuyGVXFgyDUxnk7Q7Rv55AFmrzGv6cTijG8zDccM8KY7t2fuih5vML6GnXDYEC",
  "key42": "3ZPLTqcTVHZ4NAyhdaiTgNaKcXLEgqFvrr8eb9LAULG6doHD49CRR3oWuo7SySXHPjx5DJmafwgNYQnFx2KC6TF9",
  "key43": "4uymfsi6Ya5ct4d4Eg5NskS2LJTkzo83Ze3982frwYFr3bjqHL54vUwtpn7D3ZbtoqQ7RuKLjx1XkTVnmFbGUtq1",
  "key44": "5NHAgjr5QzFCZAj1X1B9Zrr7ZREfuFjsPc96hcmADfmx3vg5iJpG5n8xG7KbdadoJjXrNUDg61nqp22TVHBLiomo",
  "key45": "35kcv6GrrEVffTeZktbKFuPSFzWMEnTeJ2MjFkencS4D6hgNL4r8aCWjEqJn8dr7k81Po2UofYZrWrUB5cv6NBWZ"
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
