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
    "j7FPAACZvmt6oKdcoUSCWvbF9YLtJY7Xz8gABrxzGsNTm6Z4oGtABUfxzig9HJy1aiDEkm64xqLbeFKmmLGvg1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g88diNGFXcMzw2Ahdq2hLsvR2WSnRUr5n58JW6onXDqgieBmhYVkJPcC4PTfC6wuLYXwQvEettwUHD6f6UvYHZo",
  "key1": "56GVcgazYuusPvDx6hBehD5c7rn9JJc6hNAyRyR6XcMUWoYCGTvVh7oCweBkGW3MMqLg2kEBCzRgxyABpzG54njq",
  "key2": "27dRhbqZDyX4kwYxLceJfBXK2TymmFUppVFsdaJc5aTwtTjpep5kSDbjuHcYiozbz3LTxjki33i8yQi5TrH1AGQQ",
  "key3": "4E2Z7GinVZrTnQyjCk985mEjodRu18RwtGTDLCbTrAdGBq7S3tLpKL3cCtrm8oap3EsZfMsMZcBBubVp92v7xjJ2",
  "key4": "2AKTrJTBasQo5kixqbCSUwJtbSx159rYhWa34soFWJiT4FL4ZPRkwz4MA7JJiQFDBsakFuBcPnmyzbywwYxBtSnH",
  "key5": "5aycyNwqTye8WcZ6Q6ACgtHRzbMeDcRnEmdrSUUUJKqBq5Uvu5ecJRGivMwtQmqthhEKtAMbpZZF2PsN8bYfhyv",
  "key6": "pVju2EyyfEqqRQxHihbKcyZAQJ5DPyjPprVbFAq1DJnjMRszdHsj1BP9Xc3bfvcNbBia9PpLnio4eezGSzhxYPa",
  "key7": "5CrTaFW1D5VNbSRqxwZauJ1dmqPT75rNFtr8mNzRVqX3c3adPWK3y19fypigEQ5qt5CyvanpmuxioYDZ34kyiwxf",
  "key8": "3wS6TM5LJjaq4tDM2Mc7hwZe1M2iQgRkaVbi2CLbgvUoWTN1cTfbf419YQRWPPBLHxwzYk5Bxq9mJ5KL287HpW6y",
  "key9": "3uJfKP7XKiDCWqWvdGhncXEG8ptLhdvhMiRZDnSXYo3ULmhybLq6vKD6N6KSp8TTVdMgi4rAA7KaTsZdtG4zRvwo",
  "key10": "4zkW3G62EJyoJxRQi2QMmNaJSi1hMWDT6EDSd7bWBRm9993cTpsbfTZryBodk1mU36o8Scy9EB51eai9VdeP1KqV",
  "key11": "41PdtkRf8xGctnEj9AnzDqyr8jFcGQTcSevzdJLBCadYADDnLB3crFBBqjVKNWLiYf9WA3RvVEfXWU7J9bwzb8ue",
  "key12": "5a4u9amgwYsFgAwo4xidfL1JshCs7WPbKDDLUC11MjVBdnzyZLd5Mm1k5fMKD9EkHbxvwGiqdzMYmyddxPAnWtQr",
  "key13": "436rRGuJvbfz7JaAL85Dv2pmZEYKzZxH4zxNea2MecPUk2eTrxZRHbsey2LuF2o5Gcwijybz3k16G43KCdkCnYB3",
  "key14": "4oukgtgzcQd3u6x2gHXFjtTrdhwSCBRjFqoZaAfCWHZ7rybDsc9jLrXmcKh8t8SiBZGTBtPaJfJkiPGqVcFQ1chm",
  "key15": "62h13iJncPCKrWkYpNs21NLyUFLMGZKMeQzJ2dQbBJXN4sxvt1G5Pkjrf9yFKbL1YCooMQmsArqSmCDzLASgfDf5",
  "key16": "3ahaQB6SV1LtXNbgQ4D2HJhShGd3FXqcudHtMY6PeUzBLL7j2VDMR7H56odUGm87z4JdgAtjc3XSZFpRbQ6m5Hyr",
  "key17": "dG8ywgXHUzD3URQsCdMwoqs6YJVwoYsx6Ee5evbh1Efv8FSS6fmDuKoAP1PPbRQDfXqmFcKZaQxKtNT2H9EzBxK",
  "key18": "4Z5dQoo5HZCbm1awxHFFQ7TquPz2n7YRzmQJXtvk4GiUED4UZ6xgEqH2N9jZ5Gc6FjSd1pTLsTACKS7hnQjVscvi",
  "key19": "ZKcvpkGjjqQwNdGwgdodyNiV2ewaqPDeZhC2vQgQWUB3WJceTsMUa5PXZyKSmZKas7qELKNYkUmtRVwiM271eB2",
  "key20": "2pxwZqmVTSk8CfLAxdfyDK2ZhX3YVH3zSEoJLdddgv71GdMfh3XaXmFceMTTgrK6EsFV98JpTocfSFrzmQ5FnytV",
  "key21": "r2PefR3p2EuhuGi1Ng62Z7oaeyXBP4q1CaSnBtUF14z84ZvSBjFZ4zN8tGFpP66qbs3YZFaMexKA5mejqgZaGy2",
  "key22": "MJhk8Xpagz7i5jYiEgzdwU5KK1t6qpETT7BeQtPTjUgekgK7rZQf5ScqeARTWmEBFbCMYpFpxFbe3CYT5WcJkwy",
  "key23": "4WTuvB58mwQVMLZRQQJMsRF3tAEJx47Jf9t1q1iYaWTJG5umhU3kCGzSNP3pAahXLB5Kyu89yPCNdcqurf3a1rVW",
  "key24": "5hxEZ4Hxh86yCzSZbvebPFuF7x5SfA5CM3CF8nTqEyuxPuSqaaWVjuDHpaMh4SJYvWkifQkDbtMkMZXKZiR7ZybR",
  "key25": "ww3xbxv5LRUWBKK3rzUhN4f2fjtiunvRZ6qzEX8ERJUkgVZuouewbQJ3cgFgK3bMXCptf3vuCGysAw6AqFHTomA",
  "key26": "59G4zYuiV19qnDAAuYtwt2zFJufNuMrJPXeNepaeT9qpRh5mBbvSjjSu4xnZJctDK26i14pm22hSi3KHdWGa63wo",
  "key27": "qtCgwDy9TB2MaMFhYuP8AQpZgJsSxnoVcQBQWQt2fwrV6GDSaW15YfgWLphum7T56V8S3CHBCACYVzDhng4cvQe",
  "key28": "2UE9gtrdThaXU9sT3ZY8PNqwknKHSCBBjo3VqXLd7DG7FABFRBzVkoeTVAy1MYmXW6rCJz7Lu2zBgNM4H8YFnF1K",
  "key29": "o3TZ2GPRxY5i2UANk5spHQPrxNb4ZgY6pGcyWf3EvX6yEpXfLdjtYf7zPPQKd66wSgB9knDtAsZq7eYQCN6Fe2J",
  "key30": "3T4vneqbrrbtEtb6GngT4RPH6zwYFaAwrfNeAQcz6DY1uBJ2wD5qywNfhmSFVa58JP7YP2wHZUCMZd825usWQ15p",
  "key31": "6VgssiTa6T6VwEFf6SbG2r4LNpvnvWCbbT1rdMFTqpjmRQbiAN9UFe7g7jAepRsF18s7GhrAJ28WMfrbcbL5zcb",
  "key32": "4VFwht7XBxWb7qzWjHsP4xmCFUu1xTGDCQ5Ncr6ZqCZ5Ck6K5uXDCNv7cTAZNPwiySSM3Gs5UPDpExaKXvycD8U2",
  "key33": "tJb9tcfnALj84Zgz6vnSp5zos9tKUF3emLm6PvJKB7NVAFMd9NDNuqCECNmiHUexUAqN6RnLi66MnFazqUGzkPK",
  "key34": "3BywhBotNEZDH8VM1Uch4f92DbxKscqXfGqC97ztZvdUfpoVwYeNgXtmssGgUvYPmpMsU3bqEQPMHDi45yWi2k8e",
  "key35": "5u4kpqbtmjhgRj1NxXFN7H23bEwEozcYwKMQ3w9aU4v9r4ZDMaenyhBS5qmmEEXD5WXbX8BRLg6UUVQp13xYr5p3",
  "key36": "5ENAS2B9k2WN9qNn7T7w36P7m51FwbFqKboB45nbiU9BDk72nqFm8xznueH42fLL9QTwwqBAAhBJo9iSckS3Vbjp",
  "key37": "TunAo8ZBdPRAd14TMqaVZH7sKSuxS4DW9HRs3iRtsKFfYpVyQTYUXXfniqfGjxzKyeZZzdBpPNk6DiS4V8sw3v7",
  "key38": "2avpzMVXqTsRpmH9oe1CcCc3MAYom6dQPpoTGGVb5AjXJ9cbZfBU7iBFgBTEHKM74w8xYRFwP1mqNRE7BhePPbfv",
  "key39": "49LTKkKX3YjF4LKbneMbgB4zxce76jmCVcytDQdRssHG3Ai3x4A7jht1G5hFxynNQh6jwcSkCkXfeZKrFrPBo2xv",
  "key40": "4G3CYoRZmPGKMvYuZE5rCaMCScp8GQh5bJhJm7KKbMwKd2rTXo62Wy9og8jkfYbVG9BxJ95rhKWP3eACTPFepzqJ",
  "key41": "25KB6QoCo2khbaXf2z8F52bg3eBY9h7LqxicFRvZPmjxTL1Nq5NX3YChznGG21FEBTiAfYXrnUNEDkkn7DkzFzPY",
  "key42": "3P7NvUB555egFQDoHugdeTMZUK7DDin8BGTVj5ZJVdrMC17rJL4c4q8kgFz2KRVX456wrtiSR4DS7kxVcR4UD9tc",
  "key43": "4yqUh12Smzdb1KWBkiyK2CdxwV5NTQHKRsUFHyCNVfrTJrguEBTw9cvVqj6ghR4CES4MuBL67DdVVyYmWsZrcuW2",
  "key44": "3nLLvaDp87LwZt3RZsKgRyqavQDPWVnGQc9KWzbTyGfHfPiNwJphxZAVS4ggCSoF3bZWCKBqQSEskEJh8aDzLrkK",
  "key45": "61nNtZYHmTsHTExeyUhbVE9Nwjc9v6s7iQCAbaiku2ejYrPki9kKJF3nqVEJd5qnY34dFXN8GUmNKaTq6eUddcuH",
  "key46": "4PSh3DPCAxkz6FrgbNFunfiXBNJ6pkW9ogNgayTWPJk1qrSiFAkJ6xw65kTTfvZMLxcN4Kjs5eeNDNCgRSrn2b6A"
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
