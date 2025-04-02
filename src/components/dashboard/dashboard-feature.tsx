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
    "4UVEiA47raQUUK9LUMc8xsbJ4nSNBYXjDjz1KrL9Qq2ThC2QarnUtKvdQPpkRy3QTzuMMJVm4fwP3Fzm2wtiuym9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56vMr5baZLWKYBsvjLijd3VNvHf29rVvPp12yu2xuZymSApiN8F358VBzbFLQS1c8JFeKR5QQj5fdiBGqr9Zd65s",
  "key1": "4JVeb5pkub5WtYNiQJCqhYw2mMNsmzo5tCuNdaYSQ9RqXRwnevVYx6mXDCaTWYT2zjRVXBmE6o58CELzXY2oYqYy",
  "key2": "62E1fKFPSG4JDCDNyjipPTWWnise38qbm24SeUTrV5MmjPsSzKk7M5g7bnQWVpd9BgJxUjcmCnGN4Dd9FzmpWuwQ",
  "key3": "2HH7uaSzNjMeKtc8Fk2pHc7bp1BpRF1FAzqqPTF5pp9zHqTckZWAGWKsZpKGZ6zLWF7Vabm5i8LJY57FDRqwL92y",
  "key4": "5xNcnwFxxZM9iDUHWsoqymvu1GoyrdpzUv5yxskMJVaksTW8CqZ5dDKZ8sSZteX2se7hfe3kNRMxWuj3EGbE1gxG",
  "key5": "51o8umbjDoMwjzU7gwzwxKNFuBsrrBECB85uGGA5qPCnju95mDzGKoxfC8simyCad8rcnewJMFnibb8fYZWC8YJH",
  "key6": "415MZ4Un2U9wDyEYcYy6sms8vBgsn51XW1BaaNeudLaD73uNsYqAajoTV5k3YvaU6phC8CU9ugPGJ29GQdSVa92Y",
  "key7": "5r8yVLLVLMiRG6UmF9dmjzQHMyzzS5Qf4tbZvx4xov2KqDjTuMTuiAQhDBDUHJLxeFNQ91ccfsksi2B1qjL5Rj8q",
  "key8": "64uM36YG8LaskAp13Lv47uj27fDSTwSvMbSEpH4Eg41MuhNPh8wPJJ7ky7TfeDk5QiknYx2eoMU9tfTS5NPTEUvK",
  "key9": "21zUUw51edpaaCbwSPvLLmmmFdi1VEpZQhCURwXVHRPQohrdLr821rstXHE3G5DtB7gVqSKUfPSwrRdRHwK8ERYG",
  "key10": "fbKhDt3yS3hfWwjnV1587A1fJEiAQpAcF9NisDzVaNhyNytVN23wdguzkF7v3cAcM5HqeBGQv2DhcoaRVw4BoSU",
  "key11": "3UM4h6LdxUuRJRUan1jqmnj5rUBHWoh6bBTfePVL6Hysyumsxt8MrZpNNjzVKye4qRjagqHMe1M7kDByotYbjHVE",
  "key12": "5JAznVKYV3Qg3fCPc67TeGT7NcqGB9uBGoRmTxjfa5HwRkKnsStKGQuZMhVXEKEEshhZrZoCR63CY2J5Lx7aXzTJ",
  "key13": "3Tcuzbe16cCCPo4g3SmhoUSepjRTgxpyTF2CdaEX6Azc1N2hhZtMmFgAPa4z4N7T4QwHkEcUKajQgvJBme1dE25R",
  "key14": "4yrTo9nJPXn2zs1eKPxRY71xWnQtm8EMCiDDU2LxiBkQMUP1dTg6BSqKDdUTE397aBxrFezHtnDPNdja23Vyr2w2",
  "key15": "5awsyn3kJMe9FjspjMizkZPLKyinSMpvT6UWbenPqK6298DpoBrTWeuupvEacTGfL5cpS7FJWKruUckJ23GLimTs",
  "key16": "2kbzGQiYEYmodHjeNUBfxYnjh1B6ijEUvgFx2ptWFSgDrCWSpBm3vt3wfrwcGk5qdfcPKzGM9DfRTYYeEevowq9b",
  "key17": "3WGyf68pEXQy1bCr77pJTrNuc4E87qPwnPdgkiQJBKDkXBEX1X9kZGDAs78xUcVv1QMjuCcZzuNceGckD3EHiRHe",
  "key18": "2NZjBUnXAmv1AEqy1bXi1DcMjU64H9aD1Sn8TMPASskqD279SJgBnLy2yWFLDM8WYrydq8F7cR44A7hHUnp3ooiD",
  "key19": "5kGwi6tZcQiycNaUgf97FMdP8cYmshaATG614vZAAdYNaAJP9JaYkTL7yW5ezyUPRDswmpv54PZ9t3vU2f8z1cW3",
  "key20": "31uBRqehcWVy8dPaeiGkLagsyCr8x1mS3YJFbtrMJDJT4F4bhawyN3GKwcKBimXery2jbY56R9BWYSemFbqvMu2o",
  "key21": "4oAREKtDRRvWAYdipseu3HZHa2MZTkFcVL6PMgWuFbGzkJct5rmwPixRY1jiPMTJxxKjx1rvyutHd9oDMXe1SwiH",
  "key22": "5GYo7XFDf8paBu9v78xuqvQytTdC3gGmsRaigBYrRLiFnY5szSdQhimTbywZ81FLFYfam2iT9d8fqDt2pstc6aAJ",
  "key23": "3eHgAa4oxexMyZV62Np4YLnXS5Rr5ADSE8sy4rFi5GHE7M7mM2TRxp6cyVxcFPpb1gMW7K1chCWJKC8rzKndP8A8",
  "key24": "3NF1WaApb87veoUymuoS3kCa8frxoMqpx3ZsvduaBm6zBu56siseWGDXYnFrnQ9p3YWszx2ayBtPL9TAVaYxvpCb",
  "key25": "4gN6b8wn85Vpudu3P3ZjeFd6UQRAqfBcsF746BUSWHXac6bS6jy6SyKFRvrVYGVJdcpM7E7fxYv5aLggapuUrLqu",
  "key26": "545AKxasJEMV8Aw6Vv97pXqCLBoGxpwhkR9cKcoEXU4GFC3oKd5YVja6PaNRS17LUvFwwbQrsifJpC9ddhKntTXx",
  "key27": "5WzKhK4ku6hqQKnvXfnaNgxG2GopFGNd3X6ksL9nsqgE2rPaCLam3Y57BoJBG4dsV9jrU44sEnBN9iNE2cmpGxA2",
  "key28": "2FUWAiWbf9YkafeN7ecgGhqDiSbwLrf6uQEdBoN8xKWiKekXg6nx8y4FH7AttHMDZFAzaxPDjMA9tNjMxLQMyEZc",
  "key29": "5kkYU2S97anaMCzcmSurZeEMJGyLHU4dFUFr5fjEtD9ufH2Zci6fc2VARTBMZ5nzBszqZfrFpJi3FApJRFUjLeza",
  "key30": "4eiV4CibEUc4bpASvdd6FS5o25kRnk8RFhEDNDmNnSsNVxUAr2RJGvRZcMPcDHDWbAWtwuBVhpMD9yuVt16zjA8j",
  "key31": "2yfE8KvvYcSqTYL93wG32Lws3GEox2X8jxjVNGRAAtCFZFz2ENqzaDDSaTXpiaiuPsmQHmuiAoiQQJEgLEEy78KM",
  "key32": "5fyRH4LKL4uuDe6dy7UQxDxzNhW3L5tXvrBHpdKv5p79pS5yewnrzyQm3zq6zA1TfqTYJe5ctVH5MxeSqUxmuzFm",
  "key33": "5fxXK2QeLy5PPdM6jnJ1f8h9TXdcF8YsBmxwKTEy6gkZSNzeiNUnkEMfwWoXX24B8rrLqtkCKWnpHbdMv2A7W8Hm",
  "key34": "2DGuvv3b9LWdCvYkBzwWZBsSu7DrN94btuseWx4xEn5AsuMShtVMDUZ8qstkHuKiEAgnForCdq9Y2YPTf8R7VLye",
  "key35": "3Cq6z38Wf39eo3MbfzL94jBn1Y4YriAYaQMEPKwbxwh9BSiKeeTrxXBqk8zHXyXbAxszg7CinuAayZPdHutd6pQv",
  "key36": "43Nx9SPZP4VSUukVZbb3DBZ6QH6xxEeZ9TgRu38V9QmwEgvzQMnZa1HQjmn5625R53bHkG8CfU3idtvwTh2ThsNY",
  "key37": "xHYMPFL8fLmMKpxT4UubmaJ9resq2xHTgbxpyKjoT1TxvVLsVYFfpU1JKKa7thQ8QRMB8iAneP1MsNrMcnmQWtc",
  "key38": "2hS2i5aFTSzQdqhiCE5GYqnAiFhCTCTCa8xJsQHB2WAwZSAkXF45SLgTEpetDmFGLubrAH5Q7gfZPGfBzhGQ5Kgb",
  "key39": "2keRDvkLJoS9nuDXzuXrpFjSrqskRhFqe633QWocJZTT5NTvx2LzCsHwJwRq9L6VEY9qLfJQ5GP7raWH1UiiaYNc",
  "key40": "3DUxhjsiYZLPM9ydefV9a9jGKDzjWkWbaNRMz4Mpp26Hsw33MjrPJ7aPE9ZLJ5HTAdBhmsWjkBRB94XLfRWSkCks",
  "key41": "5cmornATujUtCK8jqAtVXCvuTqNSEHzpkY6nwqhQEQRL8aCi9FK5usuoeYh1oksG9s99j1KSfud1pbvwpHXXyJrv",
  "key42": "2t1xWV9Krz9TY1enGbPRcgpNyJ3ELTUDAQcUhLRmaQARnWmWu5izHXxAaQcSc8GwHLq2inaXJRPPWDxE6nfpAxBk",
  "key43": "iBXemM7oFmRvaC2v7gLqoq3AaT2aLn9oVdMqSsRfVr58aR949yZ1H7b5MWhLmmGbZY91WuQjSWSuus8fkMK6Mqs",
  "key44": "4j4fFZfHiZGzPKfvXQQKHz6cja5kJpzmFu88kphpxJ9T3yX2tftjqdji92DavUtMGKg1ugtrcRdq5mKBeyzBAy2d",
  "key45": "3XmffaDAZ2LePgARyyHNVLTxsPhzUyerP9BrjwUkCx7JuJNJ1bzaB2LEzt1qkcz5F3jUyDSycwXgBqYYAnJJXbUu",
  "key46": "58zccKyJNECQpm9koKesnv51NVGiRrgP9nZUsdr4Sv9vbDZQ4KJqg7Xt7fvqFiispdESTTxcKg3gQerFYjSPxjKh"
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
