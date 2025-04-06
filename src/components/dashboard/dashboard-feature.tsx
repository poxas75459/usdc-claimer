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
    "2a8V5emHH8c5ZofuB97LHdrUAaLLvXn9A3ykE18XmbpSzdJK3vJMWPRogwA5PTopthtbZmSkXnyv4HH2sY1kdmKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KhvN7HNNGJn2XVtfEFwnRofGDc1BT3Rd2Tzzt487yhLMxogaRL2Wu8d8zDpFZ2VS7enTvp4BHZmvWvv4ChxCNKz",
  "key1": "4GN9Qq9xGeybV6ejbr8uhXh5owUaqsdBFNUqMeLdsWMLmPrjYtVTM8p2GftJCNv9oMae2prhVWGmQLSric9h42z7",
  "key2": "4fckh7VN3spaTSnVwv7L3tTQVd2RVQjyYJJy4Cc9wjezKmLsebDQyybJqmypf6XFaNPruBz7My57CqfaUuAQfvF4",
  "key3": "6dfoRpKLeznJ7DEfWzxfTwy6BBhfVSBFFHw7impFkLwh4uXZ3GL6bZWMWp3jb3wML7nZEpZ2EWfGuAdJw2oeWxM",
  "key4": "YL5QWEpxQ1oWtgF1UK5MPYN2tkJ3kgDRyvv1xWzr9sRQV7QTRpCx164nHAq1zoTiKvNCnyafstty9Sg8cbgjPz9",
  "key5": "GucSeqnN9sjbwAQVR5w5p2c16vkxrp69Y5x4x9cYmrfL4KWVNoTD6UdPG1Kbwv9BMbzMDvg5XVEiofY7ZaE25D2",
  "key6": "3G2ZFrihZpKRJQBSXfZKk1C6apnjJAY84Q95wFnFskemsfLo3L1Mtg9XR27ngWHLKG2afpVZKu6WCmPrjtKk5Mmr",
  "key7": "4RQ9WH1Fhqiso8m7EzcygzzEsc6Neb4QTuFJeC5xVwzKuXGDnjLNMC5r8Uy9eGiViKgPDt4QnhNXLtdwzw2QuVov",
  "key8": "2qHE6GMpwBQaFjijwHzNwsGziabJhmgyXs4D3QP6tmZVzbmin1jRWcAjEAg9RNkYvQrpYMPMkJTSkyp6N4FhjQ1d",
  "key9": "3EZHokGF6LZw1y2U4bmzrCNCFjZeMgQJApbB1AJ1iX1ZVEJwGGFHEbdFbXpNp3hPZw649GrbUz7T3rQMnmAiDkcL",
  "key10": "5BLpePH7dnq1fEEQ4Pr21vq3gUnvXCNLiCTRT6PjxE1Fg1vyY823Sz9SHA8HwnaNrto4y2dCCC1PN9JMCy8fyGVb",
  "key11": "57F2TXHRNTMdoqzh4nCKbjkPreayQUDmYw122rJFFzLTV9ziP7ZCEms7UbXVDEp1WrWWk9tdJmc83wd2Zcka48SJ",
  "key12": "24eSqTfhY2nQ3HXHBFC8iX8f9iEQgwLCveMnC4brKmKKTNbBD9tZ1WgoYwgqfaJDLt98V6Yfo7WPw5ruMJdVPPp4",
  "key13": "4KEZTXBa8rfYeWR7QfK2Kz768Z6a3QQPNEwLozoqPxUstLYxn1iMxJQmNGyHNhj9r1yhktH8bdUgH6ZoPYysCRSF",
  "key14": "2PozRWkuo51QhCFSZDadN8jZ48y3FppCeDmuKf67JAd2Jycy5HBLgTJUbHEoCey6qggcPFvR2cNqAGExcgQpjj9Z",
  "key15": "2nRPfrkGN5HZ2VWSgK1fjMRLDk1SE9rZDV38N4JUZdKHvgBZnQAcyHcjMFktonScTgiovT8aDbZKXo7rJ16NAZbY",
  "key16": "3481e91aXPkDA2F5x253d1WRyJv7txpm8tJdiLh8k53Vqs7Kbap2Rg8a2M4TDFaMtcpR9m3eRLsadKTo1ztKQNjt",
  "key17": "CBF31MTsX3qmsk2uoJkqvVSzFSZLRfpB2wzFbrwrPxUbXRdwmG3fKaMdVYv49TfosMA51G5ssgpY1QEJWjtD9r3",
  "key18": "3MgkvJNuvSp9ojFTmdB5oNoSTpojMcyjE2bXRj7QDpsadYPrfR8Cg37ks4vJwHxRLEZP3v595ej8CzqznXYwMVUK",
  "key19": "45Y7GVybbQXeDiejrHYyCDx8gmuuyD3ydxNekCAadfavXK6A8XhBci8hTa5r2srvaxmiwQwEsP6acc5YDpNzeyoi",
  "key20": "4mEW7KEzT9kAu5nNSEQixV7LE72ZS4rJ3tYJS2PBgaUuKH3EGdZoH1Rd6gynb4yzKyxzn2UHtRkSFgQ7tXYr6doZ",
  "key21": "3SEHhvjBPeedaJNJtCyC92sEpAs4XrnhbtNZvKd43hyGqcKX1QiLvgX9qjxU9Q9BVUpRNixp4ajEJwkpfmHfmQqJ",
  "key22": "4s1jqLWn5rrnChrd4yZKFL8xanHPg5xSSkQydWLXX7aZEgAcrQn8eq5FkkteqHL3vDopaiYY4haN9MxBj3yVrs8Y",
  "key23": "4YeReNcpM1srL1v6uAmMe9Bf9S7Vhq6458FbE4VbtgUBD4XXMs8QUuMYBmEeJ2fhASC9SEa3uJ6bjzftqE17dqkQ",
  "key24": "4dv5GdEwTJQvG9GSNU4E3vwvbVHC98zER4EHsYEumMg6ActxmrFd98ammesHMexkwcCfHNEZu99uS3B8S1rDNEr3",
  "key25": "5iZY4WAdrGcqyr2bovG7G4YhThq7aZEjJsREMUDueZdmG7ujYvnodyzFzKXeDM4tiC1h2qouXvcoNd2v8h4UGxeY",
  "key26": "26tbgEU6Mhina2rmPBhaHkeJYEwUhML9trps8KEDDkB1CpdgbopFJB3RbnGD5izE8nTr68Fr6FFnz82PPymM635B",
  "key27": "bDckyXoTe46DKB58tsKMnME1DxKKucfQoLsid6Q6RikhZKLY6ahpP8CzMmhHjNQmg2gAgLRAEZKmBp5LcvAgEtk",
  "key28": "2tBztmBWXsVq2sWXFiXfA3FHFdJyGTU9tWijHb2AE6cfGL63nhJWYdcL4jDnoFrwUHUQyRwSM3CPXi9YQGMUKedL",
  "key29": "2CJHKZfosDSCeZV3xvY7mAHKZffeWK4VApymqGpvnaRnHSJ66VBLxc85iRenpids5bLzw4PF24LAGSX2XREqHEGG",
  "key30": "2NQoc9ff5RGm2yxdABbXPJtZfFmitZoZo67xEDySe8bg6rWXVoNDqhMZed1KHJo2WZrsXPY8YSanmjBwPF8Ezhae",
  "key31": "2T8VZwvecDUSLAyvZUr8gYt6EWmsS8NKtAG59bjj38B9RvyF56UugiHdrqm7iEgrVCUXsVs39f3dUC45L5RtnBuC",
  "key32": "442RcMugV4m26Q889HwFtbkzxHjUUzYbLYUs5YPd3MLmUjf31hvWHwFQgBTwkkF8hLCn1yJRCmwAuCxTsWar5YHw",
  "key33": "5G7Pm4hVy9XgZN25YuvCVN2U7QmCoyEfe4Wtz6mLJ1rkV6ztQHSCLGfLD5SedtSrecScEyZGApw4w9poXt4XtjQR",
  "key34": "jcuGaKNTCzrRE9c2h6Znm3HwpMZjQFEbj6FXjvQUzoCF76U2gDunaDCovqjseyKXxLjm8CyLqA9GU2du4cu7UVk",
  "key35": "597s9AMvYbaGQ9iLN6fYmTpHtiXBnfFFx1CWwz6JNzh4rqtsUrGc6wWQPyBsxBAPA5cGXC1qFdJXstsZDL9vAskG"
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
