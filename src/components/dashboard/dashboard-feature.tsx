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
    "62469KkA9Dv35TEczPauiVYaAJ7DSzHSWg5QC2H4UuE1kKNACF36p7Cs2RTVvo93Zscj3sKSvdWNZzm1esdwd2g7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RoKyGX1MzQSz3urgjxpvcJQ9qkZJWq644SPwtmxUDg9Yg8LRBGJzMnxvFxLJ5U4Cjs43yLBPjJNvnSVrCJEmRwD",
  "key1": "4nEwCfAt6gsXb2HD8Ggw2V59LSyPZxQ79iPrrK2MW5kETUhWV6s3dJddjNXu4ANmMJU1rwyxogB726NaPr8wRBHL",
  "key2": "2cGs3hUR68M2qZ31kSwsUf9wqZah5a7kc1y1NsNMRZ2jhTPuGnnHaughiVEKtinWHdtW9d4ZcHs5QADigHD1CpaV",
  "key3": "2Kc47PjsyrPnRmcNsDqMCbceP4WN5vGaXR9w2cmTkdeZHZ8WVHmHycMTUaVk4Xn6ktPkpLjEV3Qqiq8ru3XnUSJH",
  "key4": "5FMLhxNhMfsHUVHuDpijdfzdSe2uTSxwkgLkNViozCsr9vwWEwMMLWgrhMHhL8QUbKj9etUE74GUCkt4BH6BPqma",
  "key5": "51QdtNQtK9uiougwSr7WoVdcd64wKU1xVMV4gZbLmRUgBnhwku3nGxUYxRas68T3UM1o9StkhKsePEGd88DfDnvN",
  "key6": "2UAMa8U41mnTYuK7PxWpCmdv3RPRfrPWuf3LwHTG8ZUaSURBJBZGCgAtKrc33xYjnDvWZsqcJ9PKwhJPAcNzRAXE",
  "key7": "2FwnfcmNKrGmDJbfZaWBAx6F5RRMqSByR3MFFKAUuWbUA8bMdk37Ye1p1XXecx2aTB3eTWRXcVHbyJZoewnXfYSD",
  "key8": "36f5u4iViucy1bFxQW2wUM9b3LomfNTWvKqzyR7GtCWcPPgioh54f4ARREsVUVDiJkPshZJFUjPfKQGRFpxNAQi2",
  "key9": "4jExabb31C2tTpHiB2S4Ln6eUy6GEUwvD3x6vLBcCyJZ1psQ1KWhFZeMWFRs58NaxG3WEDsZfrP8nmj2bLKeJH93",
  "key10": "2FsdQ4LVwNgqxfbdZyy7ua8hYGHJ8KxwovGKnjUrztrWtxTNy6Mo89jyycLhPwC3PQu4kHEpdGfW92AkRkzNrPnF",
  "key11": "5E8niYtCPCfrUMXvmcd7ixVwQrja5qqfT1beWLrwAgJX8zXdzMbeChmmPQExRuZYZs9ae1sosauXbc4JbzGNbSas",
  "key12": "21RvYUEXuCBbCc3M1jXwGu2ZGwLPRhYAyht9h1ogoo7j22D2TjtePQq9BrFsS7GkNbC8CCDsHosrS5F3L3KeMn6t",
  "key13": "586X5B94LWh6BitNTQjrPtR4HyDJyVrWW8Guuh1hcjRA2S3JMUT53pmZnoLdyoQNpEPimTcd5z8MnzvPsdXyHUfe",
  "key14": "4om23qkny7yqpkf5yDyXoits33v6YP35EReKwW7kn2ShJrcXnoT4oHKbCvYKC8ZLj2Rhc1vrmjpo33RFotXfVE9Y",
  "key15": "4FztH5rjoY4HpBhKGsuKYTmBEzHULuJfkGTCmmFJLTp93hnb6tJ1N9k5tG71u3rZ6UhUdN6DHcDoo4DLyi6pXieV",
  "key16": "3SGpedkCCBVDXZQzvToRBaZfqk66Up6bjYXudkQqsJg2JAxTbSgakjdJwiwdTaDz9DGdBFhuTeC5mW93UL7CqS2P",
  "key17": "nL1PqsPSgUXbkakGWrdRvTKs7YPgCzsFSwFLrbCowFkQpKqovJF2sGob8Lt792d47AUe9mDFDtye6DRW8wRiVvp",
  "key18": "3zcxpo9X6LxxsgnjnuTUjtFhLN7GuQLEMnJHid6h6JpQbaqJZdTcPnVmXyHUwithPa79CKLunVuy3q8jPUqq5cCB",
  "key19": "3s34pecJ8Qr7FMBCzm5pYqu3CRujaFAK1s1N51xwA1TPwNCMRLRMgZP7zTiMJ8jNoWHSSReN9Z3t8ZdmVNX7z11L",
  "key20": "4fCjkP3ha3okQQ4EcrniyDAWikrE6qp6AGMBrJBrvyiGa93TkpBnDQNDxHiDEhpJGpt6aRxQQKShXYdHefws9vJ2",
  "key21": "tpJRZ4dizGWbhC1KeDkSJvr2Tb7AszkykUUvkvVjo8BxGRgHj2Mf3uLqjrPzTXGs7wVwe5suCvHacvzgbXfbF5m",
  "key22": "3grQsYN2G1JHZ11487KbHo3tyCxJ51N3BJWqdoqWhYb4eXF3TJoDtLzBapvcAkoYNt8ER8QSs8xitpDChG4CQxix",
  "key23": "3oRjJ2UehKojHN87mwKZyhU5FikiAtbu56QU83YmR9kbLWJUMoiD1sa2c8cjnHkrjTKskZ3m9yTPKJbwhQCC7UMq",
  "key24": "8kzy3xTckqi2Ts9AUSz7Sx9dbKs8Sbrze6avaQdt7UETA3537RvgBBuCNkcepa6vXKYMG969pxvVykVC5UjjCWF",
  "key25": "4jfuybvK2egqkQPgCLrgPp6BE9AnCX5f9yavhcCsHjSkAd7XvE7Vw44cW6GM5mSS24Z9dEvXz5DBN7nKCWNaHhhd",
  "key26": "2jQd6SGPg4BAzVPr6ABwPJbjwvBmjMGJxhuhEJwHHFvKZL1BAWLPCv65FEoAnQs5p4hXagKTyn8YYPWpsMLZoXnF",
  "key27": "3ERGypdg5jV9EYoQBjvEnz7N1sDjm2LbYJHopu1tn8JVe3SHDV6tLC4kD2hDuB28MFgZwR3FASjqpG3WS31VFNcm",
  "key28": "22VvPnw3LtJtqBfYqfVrKN8MmQF1i8qwD4nXaHmHjSdr1W8s1QvhyhmDP1yhkvFCqDC1WBPAaoSNZrSShQRg6eEu",
  "key29": "4izEwS7ZXCEC2PmdyGDSNydmd17Zvp2U7wsGGuuuArGfPuiK1UE9xYbwajvJh1XkEH9MwrrHRrAyynmePrJKuGop",
  "key30": "5EbxJd3fYp6EezV6QAeeCzhyTxwfnt8k1CN6NKPjYZHebmtMCdYQbCMcHnCTWAhWwJX3kVi3AzqXaoUCuX7KqFWk",
  "key31": "4bkMHmPzwy5bkWzPupyYP6sMiZJpUMEX3skyJBacvTyLxLZEa8AJE7Awuh3k7i2LrHKYEqDtpopvoSRpVEvLU8Rv",
  "key32": "jUi7hLDJBRNmZVBXY3sw4dkqFcvtBtM7XDzPDUV5LgnyK3eDtBBzdDSA9BjVNHk5SbVE7LYBaBzTw91RxyxvXt2",
  "key33": "2XnX69d7KATvczNmNb9Rrer2ys9ioAxDP84pXHE1QER4bwSom6GVLT3wuL1wKaeNirBd1nRQj7wzhJWWZdP4Qhow",
  "key34": "FtHKV9Zqsmc3i61MrXvU18RMnMDZq5z6PXFuCU5ZsCfqP82JJ5isKs2xoLMVrFGBxWE1vYbKSXG3KSSJgLvUdhp",
  "key35": "3QCCesUjr8LgZZ8waDoasFckrDF3FVC9jpk6FuLrgTHKU5fGFkzBqvUTSzrZQczdgc9CnnpCt92NBmHT4HixxJEJ",
  "key36": "328Y36FWWNbWp55XrnybQCc9QvzzQYKHy2rKqm3Rwauh6sQJFkjiyEBHgM3kiZDR4p8yzN61hhxnThNUjQ5uicbX",
  "key37": "313pac6DGcxAAxxZC3SR4N6DWoh1vKhPaPF9cx39QgDcxdQXcj2xHfkorWQgLfqvVs9AcAegweHxRrDrsxUL6cLq",
  "key38": "Eprk2yEKEepHwQ4heJ8UxrLyrfiC8HdvQ7n4okchZex5YMHsej6U4WgBatWydoJKiGFYV4kZNpsV75VvH2yUaqs",
  "key39": "52Ff2FoiMGFjtvqx6u5wxX9DMt2DnSJp6z89jdcNRqSgjyWUKuHEY7JY7XbLjXcp6L4KK6M8PsQaDELtERzBEMmb",
  "key40": "4aTpvHwGmTUcBroPGWgtSKdZ28YtHsmM34irUAWcDdKh7pGQtLyGDmdamrtvycvLE3EWeGtoR8fCbwkkfeFKYQqn",
  "key41": "Q13vsxyrpVH9HnAcWTStxLm7xXp9wUJD4vWUVSqDUpyKgqZMLrUH5BycxYnzzXxZYEhKDdLpw4cBNrojJiNPS52",
  "key42": "2GhuYBVuM6qNKzyrKx5T2eiQiGYdWvhLvSWQjk2SPrtmu6jXrA8qUCFoAu7sPmjZGLLoF9xnxmRH841CJBd9xtHx",
  "key43": "2U2J8sBh3BAGbTXdBMxL5rV8U2Xk1i4aY4tSyzKT8UY62kU5q4KBQSA11gshBBfiLh9ZQB45Q3SzwRgx7C7KQgXz",
  "key44": "52JVSYb7o9A2VypycGXHvu7FSTadXPgw9wJZo1N8Fx7LgCL9wBRyxiLVD2fzrZFgUVkftJ1zDLgDyt2BDHnAyEVf",
  "key45": "2GFpGrmZFuYrdoT1MM1cxtMCAmJWxpTwZtU74hEKmiszmP4ZfSLij6YeLMY4co2Kjxb2NjhD1XYZ3B5Yr9umWUDS",
  "key46": "2StbM8a7MmpQojecdVLe8SqZdGx9pCJqZd6nioeovA84xNGDUXU51V4a2WHm9hDHHbQEbYgi5m7DsXwShQP27gPA"
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
