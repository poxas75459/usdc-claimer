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
    "U5JXmyNLmXfVSoLMje3SQDx9jxQtSUFqW6nsDp4wUh9TW7ZyG71XWLkZLzYnQ1VMb1KvTArjaTsnJ7yVMN9yjbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JmBiY5njTxg13Kyg4eTaLBUYfeTAQRXL7zbwLysdPp8BeNnZdtpvUQnQMNpPVuvwC8mR5mhxFJx3T8EZp8hiV6o",
  "key1": "48S5LWsfiqhqNmcn2QdY6nPWDVbnsvKwCw7FrpWYXtjrQPdMYD8s57HAPiXQMJscaZ2WadrUaEqoU25nrJ5kVWUn",
  "key2": "5eLaRrBKG9FqSEMZWWFqvjJ1LpVVb7P23HwqaQ6pfj77BwAVct3QhB8QetLhStd3GzeNL4Nc2P6bjz52fNozqNZZ",
  "key3": "3G6gvb5QaFFdzkgqHeTk9pM4881SBDmZdVDso6ESLmf3AA5RTtjdQ9dhGd2yhpU3FZgT9DCPDhKPhL4C2MhExzRo",
  "key4": "3KsfhnhPWFWCUpoGYdA5HPo9QEzN257G9ibWM6oBxPEFBfD9TDgwLimb7X8NU52hJp5pDhsXKMzCwNSqnmYiwczd",
  "key5": "3DzhETeDYPaUKY8AdMz7ng7PN82nvvaJ1PRCmkHikXpVwSQ1o1YJbd4XxZRpgpLM4jDyfrMRQZpSV9JkX8VLVjnj",
  "key6": "3egAjbLCTiPLYo7Y55YMwRLTdBFwXeLSWQkVgE4FQhidsJ1yJdmrCesvXueH2Y9gUbsSTbmk2Zfz7TzzWEY6gADU",
  "key7": "5ozXS8o2iTaKxsnrF4sZWK7tfAg5SLXFUpW3u6tEP53noZ6NkZcURGxVFUJLYrTjLuBRyUHCAEUSEk2ZztiuWSCX",
  "key8": "4pCbFMEJK9VxQ5vV561q7PJmDRrUTv3ATV3Vxrqi5pzo9U6FNjQiEZvc7aaKJrjMCVX9gZGFBhLuJSCjsJKinqKx",
  "key9": "5F4N7Un28E2198GWdWe3iyUjGUiQ14VzZPHBXa9yGUEfwdB7kdQNYYv7YV7KM76K2Xrj42rezK5fTYvfWhicmKjn",
  "key10": "5noFxg5aCKZWY8xekXujqtn5P86pUzYsadZYz7S4b5ZJbaLyG3TdaxPMyL7MrWQ6hSxX7K9w8tjx45vZjU4r5fYU",
  "key11": "55EKVnuNLhWkogS99HTrfVauzWd1d3rVxpbQyoRihD2hkxfpsH2ZKznAttb6XxhXcjqs4fuYU38nzDYnSknYRudp",
  "key12": "SGUd4FkryHh5gjSxt31474ziqoiynPThEHq8RDtoBngmjJ5UdvLtjLEx7cJ5A86DN3dBF8Ta7SGfwginxRyAsvH",
  "key13": "3uBARkR2famitYGPYewKTEwNw2KyXBB6d1noJMTN7CcGyXMbKvteFJ4T3iV3Fc39JnhTj5qjvnL6poD6LRmoDqJk",
  "key14": "21d4FjZFbCn6c2TvBBwpCd2p233tvAftp4V2WpfJMvmq5R4dFhZUgA5LcDmxwediJPC4h5FTztmn1mMrwxgxbC8d",
  "key15": "43JEbfaisnr6xEELiKH8bZGXDRYcFdgdwzcYncU5CsNry35wcJqSUZhMos9grnyve3RYXkWDwT7fsMwyPUzL9APD",
  "key16": "2kcJa2oJfutav3u5c4fxiuXquNotkkxSmpjSREguYVBbStzwVVowcU1JBsyu9ZqCRH3w66KPqhFtZnXg4USdXwgD",
  "key17": "3QrCbA5bT8W5AJDzpEQihuWoV8FtcDgedtFBPxTu6JBLGGUMeiyuMEYqKJ7MJBjNJU18Jmz6NYHbrPiqb274bRwP",
  "key18": "4KEnoh53Kiomb8ubk5jVRFdha2mBDonkei5q2ybuSgEqjM5nWTrvSUB1gAUhebLRUunqC2TcP56RvDLKmK6c3tMV",
  "key19": "5pmhNvVaThGfKk8ajjJCotKbqZhncSA4Rq2K4CvVxiAjw8qL9j3JXLeRTHAxJWLmdn5U7dmDRWTfmWwwTLawEGPv",
  "key20": "3A4X85BUVNXVVWLoqk8bqeWxXpiLMj8yCqXARtffS9Nvd2ntjyRn1UWkvCVyHBSza3xoYQqHdcnU8ZCBXAfbjU9S",
  "key21": "638RoPSoWwh3W13md971zYGD3cSLPWVDaPNJL2Wcot7hr1zucC34HHZJiQuD7ua2J4r3yB7b2Mx5RWZQuJ3aXUrC",
  "key22": "5zcLA82B1teUJ6JpBTNZip7Ey4KsAsdxphtxvr3WT176Y4egHBUK2Dz9CbQkSw5MG6ThAPwFfo9QVpMRCBQi374E",
  "key23": "nH1nG4Rw95dCF6ezrJAvmxvgD8xMeDnTipygj7oNJPTazHoafCbZrKxy2JyzKbuRnok1SLsxZzBQxqJFHmfWVUE",
  "key24": "2BuB5QBDMpcWrYCk5Crpw9yM3Qk8pBUo9eeRQw4Yyv4aiKN8MBG78HtTY4iJ7bUYNp67eWRpDqwJP2m4bSVJSBtM",
  "key25": "feygXGPGbX52SZCthQg47VceYFc998tzs2ez6DSw8MmQcCCzZEa5Z1CzbmKTndMuD1jsE1dkQGUkcxJokhFxJCU",
  "key26": "2bjUp1pypBvzSa7nPtMtCeXV7c6Fjjdrd7erdh6qWg3fZ81kQg46T1aF2SMA5g8FU8j5fwKv8hqLnDHm22jTmzzP",
  "key27": "5uc1JbwCJp5EeNRSUZc2aU2epgEJcSrEPNeQYVb91NzeLKxaPmScp3f8ktG2zisHhkH2k4bSTqhzvArv3bckUTC",
  "key28": "3WcXfm3wSECMjktWEAXN9Ut3zBrwQ1hjuLXTD1qmXmwhBpxgVyeFKFVvjV7rAXF8bgVKisaSeJ49jHydz34jBGxk",
  "key29": "48xDNvicVYo1zmTWWMYqLMXXfCFNLnGkKDTUYzugw8wLmhnfUyRFJGdyBYHhbivPVJMmdZ6SEuWhV7CpxTL1kxqT",
  "key30": "2nQ67VvfLrV3Fi2ZHYcPS22CY6YbM1Qpnm2tF2TRYuWsVUq1NmwAds3y8DtYzuR97tB8HhzdLETzULzLACrF7x4Y",
  "key31": "5ttR1QqnZkXimMQZrULZikGcdajvwnHz8nKpzAKdcmkGpH7pfdPtnaaKHBZrzFB95H6XcJa5ai2FLzFbktdyqp6G",
  "key32": "2uzm6H4nKyBmC5DCmfqfSFA3N2fmCzT9QxSSxk3zr7dZoG4tFJ2RzrKqPrFng2cS3FCb6Sd9Bcevhqd5wWwciqBa",
  "key33": "5aghWsTC9x7gm7tPofYqwfu9dkRuX7CsUjRyb5w394WztxWuXqAAXbAxAegw3JUeJzzqvLmVTvmwaMzfX4sRfms7",
  "key34": "2d52kPdLSknuaQPRpti2Z2vhCsfKUxYYe5VC7wfstCo6rMrwb1isU8xWSj9W9zhDTJhEDVhJEYEug9PWCGimY9t1",
  "key35": "2cby8mdSgfqVDJNsjj6SyxVYxVbxwdKT6Lyrxu3prs3YtQnHqGoQDm9GcEuFxPxqMCazXnoxpD9sTSKUwswsqi2p",
  "key36": "4uwffgErXTjcPfdRf61kcedQxeZX3yKgd5tTmg1jXcsbAsCSqKLfR6qfTaNCHjUGYCpKGaG6MtzcFEr3kihNDB4X",
  "key37": "MF8KGbAtZGh8zWpBeQEbZpKif6SscJsNL8whKV5VwfY1HD66hGvHLRWT7neyLDiFgyDbej9YXEQQmufihhYn7Kq"
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
