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
    "2iDA6GfqoCJ6DmyHyyPTHwr9WSyugqAiYe1VriuubPZaSWMcnQGfxFNBiYfzwJXQcN9aWhFEc3ZKB2sHEirbJqZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4reiiDsCVrSW3PgTbvJmzMGFKvB9CwwR6ysYiHYq6TgCtrtG4Uh4Es2twCLquQtjiGpEygYJwyZu355GwHkaoikc",
  "key1": "5ZHt6xSo2UxBVv3JXxemu9JTPKkFm9AWTqViiHA9sZ78AwWyiVnJoZV1pjmuXEXFARx3UU66n8SAPd9riDC7g84E",
  "key2": "4rD6Y8VDKcsdK8SWAnMfVunvFbndPao41r9NYPbJGqZcqxceNEJbepEXjgx42xrScmvHiCvfrATFozXCqBgnr7BZ",
  "key3": "hRZc9RfkWfQFXsLihbj1hYrXHsCkGBT7pKi29Nq2XUR5Yos6xP6JWx34hDAz1fScqszV9QX14RPrHoAvR9UL7T7",
  "key4": "2c1ANKZ7fV3U3WBAsR3ySUS4FJb5sMMr1BrnDuVzeP12VYpki56KhDRdnMADwTEBC6ZqoRLkZU7wt9BGGHisScV5",
  "key5": "3Kbre9dYVnMKCkAvDWA6U9JJbrnrXzjU77ALyjgFBMGamxcmTbSqwknwX34oiD5pjiXj2kZdUeTUvWHpCd755Doo",
  "key6": "62qcUs6VfVHKm12C1bRESocNLU82YyMYtFvX7t9SebrDmWVM7oaTfdfP5fmYJsfkTuyafuKyiEtWKk3oVkGW3VuU",
  "key7": "3V312HPHsH4ghZ5TvKEfnqEwFDPpmwQPKCGc6VcXuidA1YK8uhoWGPrboJTYc46Awk2rDnwHLkKcF4GpwW789uRJ",
  "key8": "5ypEj2jVthvdUkT6tCSGQx4SKyPE9VScgYDdZkzedcvP7CvVEPe4PsbdM94QJiMU6SMviKAySaRTjJF3eN24sZLT",
  "key9": "2gk9978Re5BMkJ4vNRyg6o8FxCja7CiK2UgU9QNHXNhWMxyY6x5kVqZX1KcWjJ65yPEd17hxz1dsu72c4ydTxkw9",
  "key10": "5RExhkAy8FcyDdFSvsWxXNU5WR3PLWwqs8dSFYCpV7hshihndT3QyUA42n9aBVDMAZRK7awbY6yDi2UXkcE8WKtk",
  "key11": "4ZTnDXdGnfWninn1Sm9wWXL2hdRsoZL3U9ebuZCf9rV72mkMRMEDsDZ98BCCyoAUau5G5v1Uq6Ys3qbLecqT6neK",
  "key12": "57bEmwBNVAXonqJjhqpRsjUDhYkBaSrbVepi9NDV4ZXLpMenUKFVj69LMrCsxvgDKS1WQuPHPQDQMmQHYib3kXhx",
  "key13": "2TBztwmiqqw9fYPgy3QQDztCPTYiXDVFssuaZ3cxxk5JtuYPQja9vgu3x3wwh531JTcUzt5gcaDRZVwXzXKFJ6oK",
  "key14": "ZhpdzCAVzCr7tvw28dEUQPeWChZrcRsEHh5wgwPdMohfHLZyooKFF9B5LVGyzkEew9ReENrGxhbaKeDK2nAWwuf",
  "key15": "5cW9jUuYqzVPLrfq71AMxpojYkbYnaUaah8XFcp8qstL8RptEanEopY7qH7VYHuKvu3E6eEer91fGK8s83HkCnbC",
  "key16": "2AYPNoY6fbzmdGWM6p2jjJ4PQAAgKGFD6PPXxuHRnWevch38D8ULjoH1adFKu2WJ2LNnzzLqaBjSJVsbdBPat1cY",
  "key17": "3resgaCjwB7dWHceEzpj9gh5uGgwcW7yG2Wy8v1YJK41wfvBhXuChRT2durQakXPnwMwS5sHkygE4MyNb6cVKkk5",
  "key18": "2dp2JBEwUaeD3CMKeohuaeTNHmfo9vZKggMNMMCvpWDxjzbtHMHkE4LR3nkcQvaBDB1u6oyUEs4175oCBGrCutaR",
  "key19": "3QaBnWvmZf6mY4tkyK5MTXtaCYrzSUTGiYmDKxsGNZDkC1vyPLGcubvK4NdysR7VMwF4i8czx5T4oHz7crQ2U1Rg",
  "key20": "5a7n2JYrYs6onyWJxxX5HsRjZW1obtzR3MSC3fWXKdmue3iKsw134KrCTENingUysM2qn93kSenhx7b2YaXB6UHS",
  "key21": "5nHpNFTNNZzKFDxs1rXvXxXb2Nb2NEBGZuHYTMgGDoYJwnQQXQ6L5CU9ZRz6nFt6roqh2en9bkzXWzb5twWv4m9e",
  "key22": "4biYh8Mfs1kuMhfkRs1NECYVD7qiCZtS52zD1Qi9QAPmfrtgxw8DPvBC69nTo8XPMxcz7yYdNVFn9QoYrLopWhka",
  "key23": "9Um3rdRdvZzHQeivJwnz9BLh9CDfU8d2rXg9f3QKgUNdZkHcGoepRbcWuoxhsLQStpEXizdfzoHuy7uKJUGoZZD",
  "key24": "5yEJ96tTB2cTNDHUwiwMiWfqyPu98FfxSgNaQpfLqncsBsRzRBsMstcwdWdwRvXnQEwWkrCtnikdm86tEoBWdHvR",
  "key25": "3jp1ReEC4FYCjCreaF1V5rFHZw7v1shxZkxiVPUsvKmZpt9TcwhN9tEcHro6aQShjscezXEBactcUPxNMtN7wAgN",
  "key26": "5Se8QuuDAmwxnAZSPHvK7G6RuwVHbedyhy7tWQrPpioLGF5abahtCLXiL79w2uWmnsubDEeodKNYpVP8zpZsv1Bc",
  "key27": "5jPwBiAkrkbF1qwfzGH3EpPj1VmZksBvoFtq5d1uPoRxYi5EGJjcKWFxSHwYcGzQiboE1N6XfrbR5phyDZZXpdzw",
  "key28": "53MbZ4p2T7Ze5xGXXAp6we5h8R2YYgy5dtX63qJDKAd2VEmTTDTbV4o6BbBYtaic9X6yTpnCt1ur7St79ffWTvxv",
  "key29": "2eADZwGEUKZT2FPoAsadveAw3deXLfhx2p4fwZ4gxdmtjuTLWjEdeVNz4JtbbhUbTggCz4yPCX96qwvZ5GEzX7Bq",
  "key30": "44Q3ywpN2dBYxcMLMRJjvd5P8paKXfV3wNqcanVtp2mK9LrUXGC1MBj5ed4S6zHVfMPtDk2zDCSbRat8Hpk7zw97",
  "key31": "XHVVE64u7BvtU476Mtx6VeD9ffXJcV1tNtsumUYeWtPkAKsjjGTLnz1MusZE89tAWKfYX9eri6Hh9jgzf9eo29q",
  "key32": "31AE2ADMuv1pYpc1yWBppN516rerZpnwS3PevK8K3wakWV8FZpfUqYKmhcNvp6TCRwBZL8wHaJtx43YPaHGCUXhr",
  "key33": "2YWtGT1RvhKDxuPa5zQF4jAkiUgZYNRj7szPh9fCgFBomynhzy5k8c91ULqahNd6Mxk3kCQaEMnukUSrzRKL8MAZ",
  "key34": "muuoxWmyJFnZpTphXcL2L2URotWvsK5XfpBM8jbjDaojVMLjsiQb9qDpLEGGzaH5c2VHigR6F84gcMx8cN2cvXd",
  "key35": "U4gWv6EoTontSKUogdNHteVSuyS8DWdm6StjLUtBcNcF4s2SB1RBmNbm2ztz8ztr4qmFM6aUmXtsmpkYHUQTVeQ",
  "key36": "5W3vqL8anXgNVJCPwyGSv3U8bCPjExmDbsV51uBp2EZ6fUc3LNeRxtsgSscfceCBB6CyK13gvZjoaiagKqZm5t28",
  "key37": "3icNL9mS14MmGVkYPgG7fivxeMgyFZHZ9x9e2bf8ogPmJtY7v4jFcmi3v5Xtfhc7dfrsyGAyNTEKMP5JsEhDuZur",
  "key38": "5nVxR1oE2FfgXZXxXb6oqbk2WpKyQ54VuGTbZXv5GX7Sb18DNc11MHe9TmE4BFFrt9wwUwyqEXXtCHCgJUSFMy5v",
  "key39": "35ejrqWuERZVq6qx8kgk8PsjkTREzr8oJBgeyFLxLAFQgD81p2qcsV25UJKf4EwJv2tTDwCJ3iK5DfPwtztz45P5",
  "key40": "3HThsGF84UUty31mumhEPYqeB7QQS3Y2Pxgv8CMpdwQSsHY1BccvgDDZHifvErWEEox4Y1Zrp7gtTUgXsFXMJMCT",
  "key41": "3hwu641FBqox5aEyxcDYhhPCnRUqfrasMVJ9FoZj8FaCg9jq3XBVj2Gad9jiwAhjrM1tQe5MoeDLM7aUezxv8Kzw",
  "key42": "83cnSi27jXVAgZ5UFK5o3yrn34dSa369JLKqqRgMfTrQzUg5ATPh1CDGxyjHUvVgtFU8k2FVzGRsS6QDygCHBGH",
  "key43": "L8PuBDBD7YvYxodkddWn85NV52659w93eR56F7zexy88U2eqaZpDFqx3FPYdfXEKSEFqDFF2MVn33QiNvGcs77U",
  "key44": "4Umcktos3xRqDgCVcemh4VxseM6PzUZpGwKRggA7mNjy4E4FxXHhwgDaANJ347khFgvt3SdJ9k1ZuC3QfRTe7c4X"
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
