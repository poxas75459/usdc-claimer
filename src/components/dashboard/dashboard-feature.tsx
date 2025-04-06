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
    "4mNFw31wtuaunQXsPjPqSTeL3ruuF4tjefuVPQbCDmDMDfarSUyU5JWhpgGNHMCgVUmw8RwLVbRAztrWiiaBSFrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T3aQzVGGMCwd2sj9kS3EHApfLb3EboStSn5TJTXQ3y6FdvBpNLZ7sKjSmcwy4FRyk9QBjqGynu2Z6wVy9UkDqxZ",
  "key1": "3SDks3yMf79JuYQcEJtGLwmbV5BMnUqZ9GYanL85YPzrmRPzqdDaddettvc4HYewZpXs5X2Ywe6mpND2QxQQZyuj",
  "key2": "5EKuj4Nvk8v5hxa4sMuyUbS1tyQoGEF7j7ciEmjeTZ1i6QzTKkfoNZxPWqoVZtNxuHJzWiZiCnEXH1xNx5P4XbVh",
  "key3": "4CRBsYc5NpABSwKvPL1uGzEThrodcrpeAB5ZdnM8241veNTwJUcXppkLfVd5X9peAJCysKCPGgE2au7iojCX6rXr",
  "key4": "46UrgUaBVmsgaJD5CUHyeCMJAeKfa4j15DDiYySptf7WiNo5WYy81rMHXHVJZJcsN6JUNBmdP9hLAijVdJWBbVyT",
  "key5": "31yDWiGAbfKdDXeZTvzvLcaheHwJEdgSHBve5UdGZVYSJSwhRNdXYRHNP85PBsrK7cZHJ4nFAh9NoAuc8kEieGv5",
  "key6": "4v5ffPrN2JZr3Rv83ZYGqcXfikLzVFTtCHaXctBqF36mYHwVQWr4TmiAEHEQM31doCdRGCcMmbvuKM17JpMCPSRa",
  "key7": "4SmjJPT8kSSTjGFXbduDuwEdxFAzgu4sSe5Aow93guAuJXswRBNP9ndwoRqDwsv1qPtQ7jStnto3AKTUCXw6dGTc",
  "key8": "42WMfGvciZMcDHJzLw4RWkwgqPswL6yPdtbwsaCKPcGMzYDxRt5ZqwdtfdjzSqNHensopUP67so8pvP3GbaUMFoy",
  "key9": "3s8irR9AS3xzoGCstgDoyuvjHfRykHYgh4fiMCYzJRyhWMAVFRr3sMyqjakdaEMKb7e9RV7KmaX7Apn3cSnaqXtx",
  "key10": "36Ep5PH6yM1kfA42DDTqAMmjHZXPB26BVDN5hhRtzScUQ6AB42ZmQxAmrPCiELpkkPPiqWULXc2hT8NWP6TG56bv",
  "key11": "2UijR7N1AnGfV8LouqzmXCRHSK9TRjTaiNVeApDPkbPdTwFaebt3yLuCWcfpVUbrm83WMdhJ6VR3cRbTwYtDshBP",
  "key12": "4nZFfQhdpE3dLp7opFTGkBpjt28Djkt11kNCFqFwJy7xQWJ9vK4wbA1mbymddNtEMctViU9YG1HUaiSvdNKAe3b9",
  "key13": "9mVRgE48sVNmdy6UtWivr4sAgTLsboP7SM6qPW8fCH3N3e13SbYwgMKu9yZaJkDCu9ipBsMtgEMhDMNnT9RdMmP",
  "key14": "4rfAfSFWdBNP9ZPotreL2rNtAY31Fw8YjmG4ri5xx3aKQbSuFxkwnApHtDxKCDRMq9orBwyciZG4ubqyf5nwUPzV",
  "key15": "2oGoGEbEV4NtpUCsypaYQyLJiE2untjh2Y976gMmHZMU3EGBWbrhCQmjHLqnfMUdN1sUC5awCeaVQpEqYUdgBN1W",
  "key16": "5cvN6ND4JuC8EZdyhT7HHBb7g9x4Zqg7rRZqqLPn1NbFcpCJknscp3DgCYhVGtMaCMak2jvsq7Ge1T7Gd9zmVzSF",
  "key17": "2PjRYpLiTCuuwTvG89RHPPWCSH3XWszxDnnHssd1dYARrJoeS4PLhjnhD6bRwG4gmGNyxDwL76JkV991TS4VvWv1",
  "key18": "3CfHRA1w1hh66cF9WtQAdwFpTxm5KxJhYEfVUS3RzERZ58WswKmhzkXNX55dM8G7SGSLCjb4B1x7uNQMekVFHCBQ",
  "key19": "3whFGL2y8jcnbaRHFmn3na5ZXa1JWwqSjk8N3wQ5wUi6VnePECpB5YRq1hECbmSivgnzmTZ2exHmFop17nwedqrW",
  "key20": "MGydRAqVsFvWDLB8Q4mssF7zGXRjgpzLUU8V8QMZwfoBKnC9qKWNZU5iNyUFUaq2pKMg4Xtsro9FibNggde2EzT",
  "key21": "5Zv4qE6NYGL6pqTZNd4SWZShoDNKbkTK1EWBRUvmRDHQHPprzwUsRZoF93rbf6uQdwtcJiUgtpQV44Es2waStFUi",
  "key22": "26kBYs2g182SzKs9gfCvi1GDTCdC8mPHr8P1YquGCnW3bLK4FxVtqHSt9fcJNsiNwaVvFo9FrFPxPtmMRRZGEZDb",
  "key23": "5idXDRUFG3PeKp9KRFrLCxEo532y98vXbNp9m4FTWVSBMuUi4faBaMWVArDFC5yBoyGutggc8g399HoV58sjzZV7",
  "key24": "SNsdBmqXpZDDK3VprDbPomyzYmibd2FhLCsX1jgTVpem1JymcyqyL3j7vLebPdeJvpHsFL1NuaKnN7RCLk8CcLv",
  "key25": "2cPsb7gUrSUbqo8Yi4AHidw1CFdv9uPXguaqNeHedtGHgeLxyETx1VePjJvVUCJnjEBWu1ZHDgqmsMQBTAfSEWTc",
  "key26": "64enwp5g98H7qw5NB46pZoM79oFTFJf2NxtT3VcC6CDtKpJjkrWNW4xP9V9TYw4F5GZ6eEpACn5d6GV9HUcJpWem",
  "key27": "5h8tsEMcK35GEdyt8V3GdyV19TvU3eyfnx1KA5FnPpmrbPvq1PmTsUBoyohopXcKaDauugMemuJHRUCPCEWAuxoM",
  "key28": "2MJrkBtjjWupSF5PCqj9QFVsnaPyqP82Po4qrwyd3SXkGiygnwJcb2WJRuW2ZWppjdMJdRuhjk3bM34RBqvP9go",
  "key29": "P46ZFJSmo47qXQjpYHNeTjgRFhRJNiTRHuMGoEN9JAsAWogwxBge2zZjiLs99C8CvmQZV8E5LiF3XLGZ1X38udp",
  "key30": "4fgPEmr1fV3b9K6HSs38eohXaenxy8FiAbKd19jMR5Prq6PmC1odwH1h6hbFCc8Rudf187N42RyMbzRmNkjz5zzs",
  "key31": "HfFb49p2cAADrxdr5YwCcTJCngAAPb5WjpySfr77BNkxpirRTE1kQhYtZuzwzpjkzdRQ2aP581joECDsdaZjxEq",
  "key32": "uu3Q6rFqYRrKUbMH1efSGEhcX8teoiFpwEkm6xroKVsQqycQbzT4vZd6a7qM2BTjWCrTekyEVy1n8TQ9Lmc86xZ",
  "key33": "4eHUPxWPADhN9bF3pdPnTDESPdesmJYrX62aVTy69pvY1Dh77Ea4zuHX3cwFWEe1Gmsqc4XtBGQcXPdfMiZYsAjq",
  "key34": "57T1UytM2HcpQXM7ckK8eAMkY9am3sedXooBJH1MCdTRSkEJPY2wj2jRrovqX6vwwgPRjFun3YRfycXYxsEHj1rL",
  "key35": "3hx1V5dSnkJQ62FLhQw1aAZwhJmnpsL7qA8k2eDD5RxBkxX8bZd78o94x3zWSFN99S2WkkRW8TbvdDWnSbCFxZRt",
  "key36": "4CgcJHQ7TdKfu2PN5c75JwrN6peb6sTAghQhbidLSUyb5RvKqgGAbBqG3TWiyk1juDMCA98pMUBqPUTWtdNhkAbJ",
  "key37": "317se4zdd3vEbRpDioaegPoAkH2eC64zTq7fSaZWjMd8nW1Rn9oLeghnSKZ4RT6SBxBo8k8DUKx72mcC5p2TntB9"
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
