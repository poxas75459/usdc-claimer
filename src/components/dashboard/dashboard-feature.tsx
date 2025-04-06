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
    "3PA6g1D5e5nhwkR5d7kFps5iMbyxmxkNrFaEB1gSsVHGGdEYaAZM3qmxgMhngfBHBLkJWrq96hMuPxGmFoHeNviR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtrZynZ83dCvfR63tfSezZqwWXEbhspnvM2Vu79ujj7cQDAJo7VTS9s4NzL9EzEfzZFzuPLDYBx1UezwJLYNtoA",
  "key1": "3UTcF8UDYXfL3xzUm6KPiL5X2HxFjw5VgXJFehUxTdAQQFPADbJabKG4M1RmzMAYCrkuLfpGv65ebyZFYEpDgFBq",
  "key2": "5v6PBAHvXFWRkT29PnX54us6hmgxYG4gp3HuN4qrTJEVDxduNuKCDhrVMKbErcijgKLfBqx4hWhvxcFxeCJBkZSH",
  "key3": "5Q3Zbmwcz6r5koBhj5199QWzBQDZhPkCi3b58LKRdSJaBrPsuUUZpiqPVkR1KtSEaCxcc2xLroQBmQgDdmQzN8rp",
  "key4": "4LAaXadNYM6u5mNZY9qNKtgw1bNY67cQsfVWc1VbFSVABmXf2hFuTwck7xtDW1jfHBEna1arNyYCmXk4FqHknQFr",
  "key5": "YuULsFucqMbb5cAKnzJQmHsByK9WutMvhT3aZm4fATTe8so2wL74mjA5xdkcc7oDYrBgTbmqnzHqV8To7r7MWbC",
  "key6": "4VHf9vrdRJxhDrVvkAdgeiinvNn9iUkDGrmHDTEsMZS425Pm768jZnfsA3FPuLHGbK1EpnTgbXYhTHQ3gM4QWPGR",
  "key7": "5SBV6TQDUbyuUvCD12R4naesmcZnM4DbTKf9fWNmLzsJcWtYB5LRpcHMaXJNFfRkZtYWkwdXzL39QvPB2vA1RUr9",
  "key8": "4vfqQC1i84zwCtTPAt8oLPeigAviHRpEHAGxfPHuY7r8RXzbsLamhe5Chj5BMub6V8x4ECMAjVWmvG7oqJRRuegT",
  "key9": "4jVDLEBAWHUxdsURrUKM4jPuKkmYLEPXwjrHBXhiVPvftPmiFJS3D5VVjctc7ouN1m1yH4ndNpxekRAVDoVKRrH2",
  "key10": "64MUzdBCKEsVtXuwpyoVuPXN8DDwy9X24iVEs1JMJ4akQpNjg3hRPph3yfyijiukr6AGuF1UbX6bXPZVMP8egXCD",
  "key11": "5fSbwaiKFxGiXDkAVdcmnKE4yBhj3QspDNSBp5AzLZ7DSU4HW1BH7ypGAWJNVAVAXmD798rrYiSBFFYTKgSJCEeX",
  "key12": "yTxhwDYzTz46qnP77rzryhUHq3EE5867RiCR1BLippiUqEdwgmTohk1oTUrTEuyD18rp3DTuijyYi7GMmiUc8fM",
  "key13": "2H9QhAtHK9CmVWVGVk2JBTxi1tTp7pJG8q57e33P1z4M1iwzU8oHj22XLrDtJ35HEjrT9QYeePiaA82WLZjntZka",
  "key14": "63JT6YACgAKhge3mLnWuY8nniVdQ8AVFR2v4NLAL1nsUoetAo7xohPxufpaVzh7SApVcCbAx8Hon7tzGiaCFCnyb",
  "key15": "3SwrmY8GW6QUpQE29w4yGzH5d4t1JpyZCuLKrDb9XxuMFt4LXTQneFB5ZahnBkSg9ZbB94gRLMN5kwatVgu4GcnY",
  "key16": "VTCuMa3ydJkgQNkBq8d6u3hhWWwTfcgH3mdKw9D5AL9VsgshEiBfVEgtC9uxXLgX9eDfNaVp6uJA748w5WbB7mr",
  "key17": "GDTqM7HYRQXWyf7Cy1nki1Q1PTH264FK6FW8pWGP2KNfwsYbvKFtJa2nZCUJdkkfivtTeW23ENXWHjhXYdF514A",
  "key18": "frq4DAAqdeSmi93FYAUZJcShd98hQrjn69dK1e8N4UtiAnLSn5VXzq6V9nvG3sxnjKpkHb6jppBWFZAqMd26XNr",
  "key19": "2m9Ev7nA1i4mJW1vWusUhUs3hvcNuUBjuweUXDeKpNr79yoHyC78tvM6GoAk3BpZrptAX5AUhzCKE9YYi2uXdhNV",
  "key20": "2bNHRdCm9La8ArjnFMJeREuuyoUMb4V6BDnfkWvvvYZYoo4d9oao1FfNSgaaFvXunNMEySeJUKbdAeuRjxsPBM3m",
  "key21": "661fr3QtceujmgFJTU3se9PPDYv5TREYU2hBiNyMuyViub23rkacoL6YwP4dK4uzxWGjHRyWUp9S3W4cYpuRSehC",
  "key22": "3ZV8nWjYP7fJBHfAUMdNyMciAYpARBLVS44LJ9sXQ9tzn11iGJfFCNZ82XMVEL7ZAuQykQxQjZKDsmkznFvEgcCM",
  "key23": "4paSmC5pVkPHSBj8YEGr7KvzduLEas5AU3Xi9vVLuELWvPT2ZZye6K2FGZWSy2yaNdrYGP8nCEdEfB7PFcpnRbJC",
  "key24": "38QroqLBFvwymfY5B3yCbuKWGxb3NySpfgxYE87JRU1zHBTQEhKsgNbgDCXWL6XS9Ue6wzqvnCqF8v2E4mhpZnYm",
  "key25": "2tYgczxzgRrkKPrRbxH7gwL5ns87GvjFCwHapF5Z2sv6bkFAxyQDKBWZkXdbTrUKSGYmn5aSEHUjsFfo2uTBLWVC",
  "key26": "u37TxPhmjaADvDULcDu2sbdiHQvGXoxxBgXFD9CvXLesQ3YmNxWwgJbM97Adjx6wT1F3v8XyBucxi3jgWV3BJ1v",
  "key27": "44WjWQbHsiXUdeNRtxB4ZhY3v9sZehTGnEZyBBdvStbTHc8WEGgo28LvRUo6wD1ZHYoLnj3zWXN8HxVVndrNJuWA",
  "key28": "2oArYZg84fkLbjCMEta9KtXFWRGZJJJ3gVnYPB9ehTRYWuHD6od5ecSuKg5aAVxpQoNwwGHv3m3atb63GYRzfjCX",
  "key29": "69nXPrGSg5WxifZ4UNBU6QthfKBX1n2xuuYeUviRgvzq5CXMyf4XCTFG6qgqz74smdVVGYsGdYS78q3xZofPZMQ",
  "key30": "33Wjt96f49yVkS3EHWeXkdQDadatgBYkWzvMXYuxRzY8sUfcNfc8Vfe4n1kq4mEHPcyjEsaY7yYPPoyqpx85HnNw",
  "key31": "2Gth3njqcH5W7w5da5fqThvTEapFTmGGpAauiroRHkaYRLSM8iMkEg41Y2hd6FnuT4iQ9AGdKEVsHBvorm7Ypwe1",
  "key32": "hprK82RwUtKCjsogq4mptHCejPd9tWULEnnz8PwrMSncyUWVTRTpZnCig3nYH7TJWiwTp2HZud7uuvZ5A7uF8J8",
  "key33": "AdHr9EnvfLJrTJEfmTyUphyybDL2z3uDNEEYZkQYe7GfxzsqVfXSVQPGbsNvRSbqpemfE9y6sMmaanLfDg2Z7bT",
  "key34": "2sTcVA3XN2Uw1j3CFJSJZyg6Z1pDcGivaprJsxddJP3regv68cPatc8VMNWDyrF6gHHMXEZrsn3yRwQdDxK29V9W",
  "key35": "rYEARdTH2e9wfimVUpVK8S3tP5utn4ZGJH4MaMRPmMjWew4oRqQRcsdGkKNFSs1kTXytXP1PgakXUaHtUekpAJX",
  "key36": "ZYKcVUVosX1x4LJjDAeta3xcVm4zPEFEQhtY7RZHzxcy3awKUyMtKL75dGgYGammTo44KVhrkS6ud5TbPagxr3K",
  "key37": "3u26rDikfBwTvWz6rUWCPUS7aYDf4JJpkWvUv1xHGr3vTUXvkgbwHcunuCYyiVgpLYyJUuvkCcFVySuhFmkzn2Ut",
  "key38": "5jxj2wNrd7f3YcnERNWoGGsijkEsPEdxwzeV6jXiEYkoNkJUXhPUfzVfvGekNfyfprWEXG51d6eZ2PSAMYdyH7aV",
  "key39": "3SUikzV4q6GC4TyAL4CRZrLihXSvA3a9kS5zrNz5rxHLUEwzZcpke6aX69S31hnFrtpAYETpF1LhHvxLToqZQHAH",
  "key40": "RGXB6zrsUhMhfJdLScxGrSj9GhM6RMkm8sakWrJqD9ULvcdh6By9RWQEVQ9WyqhGFXujfgmrNhH4ZJBZxWJjadw",
  "key41": "3pgwy42ejpRZYv6ccWjz4N8H5r8R2kTwifVZwqrczoZbBvKDgUcLE5fZSAcF5iXS9qaJ6RqkCHosivn2xVfo2iWK",
  "key42": "3Gy9YRoHFC4HUPEfJaw7pvA8MYjvzQjRsJTcdMkpBA38SZKKPkheStg2LB1eAJkMVAiLWwdnnXYKAuhZcHBSjKaB",
  "key43": "CYJxnfHBmFXoNYXBC5x3KkpFd5JS484oVpk8mxjMqtHxSAWXbHgnaZoWUnFbnag9exihjXYVUKsktrqopiaKD66",
  "key44": "2Kmks8Zvqt4Q9a8w9eLKXuGFyvNyg9ibkDzoc7aJJWQ5aP8uKTfVqUV4U97Xu7s4yEjEv4w9Rxuu2hGYMmoJFo5o",
  "key45": "4QGY2TvDJCeoqWrkcoQyejvTcWsnwhBLTvc6dKoezKMZUqf1gudJZiXAD5X4HGwH8q7NSdDujnwjJTnFeLeftS6G",
  "key46": "5XxCD5p6rdSLMN778xM6u4ZAJaEGgeoEk8yTZhnULWCLQ9CoJFzTEWQT9LJi4DirB6Yq4td7p3HBc3GiDFjG5YLW",
  "key47": "22xoCoPfRYaNjw6fUz67uHrTdgQ8jFQZTVre4hHr9Ede4LwLHq8tgD7epyrSnYbjuGeXVdHFZw4jJHbcWAeXmkUi"
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
