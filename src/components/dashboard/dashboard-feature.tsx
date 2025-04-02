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
    "PFcb8Z6XWrdMQkG1YPKBYvHVJSUtYSZ9sEP7Mf1rMHg5ykd4Fn5GuAnJphgcTaq5UXNuJRzQztaraXoKsyiG6eS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5evokZwW28MJGW9wct2sXy9owEWcVa27tChURofTHY4SKsrGYjm5QoCmgeCEGXANzyq8UnN5BAxh9n2TJk8wdvPv",
  "key1": "55gunnfUvsXSG8WMBh45o8ahjPNgUtdErTgskEC4WtbsdDYe14L7THS914p9ZDQtZUPrcKWDj2ZkqFMZBm4AX3kr",
  "key2": "2az8h15FxkrzY8mzB5GmvrHGVKZEpmnGWATmhFuQP8kFadicUFwrrWHUkfNGg8bYSNXk8GLg1c1oKs45xHqLvWF8",
  "key3": "Woffx224pn1FQydbH2pShXxivYaaLdcsJnDVEQpu4AMVQMTbBvfKfa9aTGpGu6vzgC31XSJ7CnBNpwLDPSsLeMN",
  "key4": "2aHTMSWnB2ov9Qd4KE8R3fEi8sLDXJwGTQzS4FVcNpUrCjMTq1Z5nmwqLNAJS2QbWBb6Jft4tPjpLGZGob6xg9bj",
  "key5": "5xC6KJGA2FDZiAM3B6ekSq44jBtowpgoNi4Sj4iDj8qf6MFFUMg93igEHus5pBH8ssZ4dNQANGRPiRQ9mj2JJ8zF",
  "key6": "wqLXigwHv568ezZv9vfemRCMPHFfizucYSsDoT6coSLB9mBkPhr9EMZFBoBuofyNhCJ8pJDvmiAxTTsYHbBkRhY",
  "key7": "e2dXt9AsAbX9nmkpefTqqogfbjw3DdYXdWHS49eywkLnEonhdySPTte2RDkhQnbJaJKez2RH55qPeD9K3B77oNe",
  "key8": "3WEHocUAeWNKzVZMhe6Da2NMK98mZSVp1J5ycUPg7fqDturBWBeVVcqwGtL6WKYdDtkoUysw5xpVJfPEZrtBxdFJ",
  "key9": "5dCwp5KB3jsUD52pzng2si2pAq374sQfJaQD11CXaHciekixRhJrod3MTiihC6nXEk5v2tmSZXMrBchfB7jCzju8",
  "key10": "39f5ecmQfqGvMTYGYRqdwjZ3wXqiTvkL6fbgtYwQCaTa9YqJrN9oohAn6VNBMRuXjsTFsbWLT8d8PKEFDCGcr8qx",
  "key11": "2wXTYhEVYGvphAqpjiUKuCQYgQh9zV5KQJVWy1b9qFTxa9Ym4hizSeVhQCyeWAx1LmhJwc3ZckWyTx7HDWyz8RqR",
  "key12": "5p2RToQ1Uz99CHAPMSnTwi6ZHHPZQ5rohxn2H2FJnsLfC3owDiEg2EBtoQHQmGx49Ee3wk8hNSp1iP3AJWSRJXVd",
  "key13": "5P51qZvvTTmAZCcuej6S9sepsayby6Rzhx1skSpTRKJ3436c5AHAzgzYLSMQojFn25n1bBs2d5ESBK22j8ia7H8L",
  "key14": "2nCupJaPQrJfstj1heT7c9WPZBKswURY42QzRgoMcXuGbeBhnB1r854FGErzn1Zh5skRzyCBuHEaWPxPbiRDfCmY",
  "key15": "38CeYJ5gdaasR15Z7ij2XJVg6RMBF5VMmPmF9rb3YYaDz4DT4q3TP3ApZkibcCXV5pNNFBCRAhETuxfyoRJUpfi1",
  "key16": "35Zd7Abj286eYYK56hdh2HotCW11uGxEF5pVvaFgwbPVCSB8CQRhc5BkJPH9o6zKyH9XmYgn6yfSHe2LNHgZSyxo",
  "key17": "43q6y7EcFxyy4ZHz7AucnRtLfS8awh8kx3ZcUhowdm3LDCFjEvzamgw7dWMWV1c7tLcGKgMuBgWoFJoSunxV6jqw",
  "key18": "44CVwPDbGQ5gKrxL6wYWkuNF1dGT8JMi4XNDMLcKhQW7CcA2RRQBPXPTiep3hXPthRuHA3TUvdim15KWsDGV33pg",
  "key19": "25PwGBcPkKubsbsv47aScHUyuPeuD3TGs8xYBgkjzNkvidt87U1wmfwSWDEbo76v6yKc7Gva2hkksdBfMJh3w5bT",
  "key20": "KQG8ihtm1KwwGmLGE9rqzdcAuBU9UGAiVuZis4zNyn9ZUNkMsNrP6ttCC6ZY3Cb5FVCg1sYkvtH1ybZNeDobzbg",
  "key21": "3PhsAdBWy3sT4jnQv4Qy4CTV4ybhTPWCciPwN9MRRM2bmGa8KcoyJUBHvhhfSe2vzNLi8pCWGQvbzWguUvQX6sCd",
  "key22": "2zY4KAK5FagLB5ptSAr3vHvqvmoqKLdUNrNY4785gL82RGuGpEbXujUUAEnNMxMxGEiSDK7mLgCpNAwv2nPEUdsF",
  "key23": "54a36pRrcRLzscaL67NtNK3q5hQrVVGfsUewYNKQnHUWHav6Mhh2qrBjcXZuXckqMWHL4GJfvTNtTbVyebr6cgEg",
  "key24": "5RYiXdthwg1a57kDmWffoFznFWfbTTjwyKCU6gSUDC4xk9zSgKzJ8ZvDL34okQctk17oxo9oesT9aC5ozQwn75xH",
  "key25": "66mW1pHUF4nBMrTyHteVDfi6t1GtgTRRZTGHeXgzqJyZqXrNncZtXXoEHsYV2kFVcwtY1EHaQ6WXF5V2MSQt4obd",
  "key26": "oRgW1hJDzn9WjUKGbWHmLf7BsE6bgQi2jteYrcNE5DscHfiDTnPYMtgntsHz69d1DbVkdW46p3Hc7jCNbA2MBVu",
  "key27": "5aQVHVzHvZf7CpK82yt7ut2mDb7uej5jmE1nYLrTX8QMqT4ZZG3ZNRamJumBiEveSHBLfb3rXsg7VD5a3nqGGFCH",
  "key28": "41UKXvAqKMaepKZo3nhtULbCrW87v5S1pWBVhx1A4xeNGpwAFXwdBYQPr7YTB1Z4F7BMtAQpoEvQmyvvP9YsXAUk",
  "key29": "5AXGBQEGmMaeXmcxJr7iCBrARWm8d4DhxWJLQY1TmaPHcdMknDc1D723UWnvxjvaj7y8KuWbCVJccLmtafYMY8zv",
  "key30": "5NCK4LZZ3kvwj33XsZ2STPyqv9Ax3CCM6oSGKMZiVbcG76TpKQLS8rWnRs19uyzE1C7J9iMNdz2o6JADQ3nco2vg",
  "key31": "5PSofa9j7XnkFtZtcoNwKXqAqJF545kpj6pEizyb8a1StpKYcfkKUyHavBr3qbkkh1ALrXxPGVB6q3Z3qDE14W47",
  "key32": "5MYa35GhukMJMUh6FdDR95MSF9xCthLMfscLB39Qsyhdz5xiG4h6u5HBZ8hwAzBpuKJP5Qvju14NFTQkGxhotreP",
  "key33": "4bAmmTEKq4oSz2GWhEMYd2dQwuQvoH2E4sXqgWwfVa37YmjX7D3JWHk48oXxjYcFzm3HehrJjcmgG9xFSga6fTnM",
  "key34": "4R7xWGFfFRc8rNxycSKxPAFUxgBLeoaZ5Q7rVhCPjRCDf8Ky7VSH2ychBupRHaZPVqx1jn3g2AmCmUnv2HeJcq2A",
  "key35": "2owaNV5gMgXFLonpVZruhEKR4vBNCtzxh6MrtzmHLGSTn6QqjHXd25WFUGW9BZBRytW2sL2Cvkvsi48nCnA3kDMr",
  "key36": "4sHsM1xQueDxuhGSxicbmNi6RtQsp7gdiTZn2JK3fLvwqAFYRaYZfH6SnAGJ2maqH3VqXmVbteeeD2zjNsVYyT6p",
  "key37": "3zkLTjgfH7jdbVnmJKXQL14snGSanvenFm1MN9DQKDScocQ6PeHMUKq7RuA1kCAy3aSt3JqRRJo5E1UWN7ham64C",
  "key38": "42zY9LKFQ1ANj4Ggmyyrbm7YACvFvLPRopHyTJ8hHRUUzegdGPb5Fr4TRENiun52QCHcrCfTf6jy49j4K3eZ7Mfk",
  "key39": "52jtnP7bs9k25AghTyrL5xr8tBQSMSybrRx4NAQui17anzUEdpC7fahihu9Tj8E19t3FksRgwUCKdDTpyCc4vSf5",
  "key40": "bX7p3HjsZfMXjjrY2CksgeMtMwKMdcCbdbjiWqQhHsPjzTZbs9iFFY9RMxXzU1tWLHd3TVDWhz2hSZisf4jz39D",
  "key41": "2gCmMdGQxKa939eFVEjnr4EQDBSqwc9KEk36nzKBaoR95WK7nozzfi9XkbcZKvPkzwJWgcZYekPV6ERjiqx4qJb1"
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
