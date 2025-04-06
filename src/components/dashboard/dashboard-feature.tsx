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
    "4RSJNWUurzjz9Kyotu6JqGr9UD3xMSfscjbPSP3XVDkB1xE4oVdSKUVUhF8t2N7URyjxyCBCw6xhB8WgUvR8eTiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q8vaWz4XsVP6KJ4NsgRjH8UskTDGkt4BGSVWN6bkqB6WzbDMfC1VYZ5nMwUi8uMMcKM2LcEF3r4BNrgXxqsTtyN",
  "key1": "4hBZPDncfMNG8CPwFAW43KYkYjNC6hRrBuuxK9iBFgeCdrsuH1oc18s98iXEiDrSbsKED621NACPDV7T5txhkHEg",
  "key2": "3vAKN3ya53nY5Z7Mq3v49NqYce5xttwtmQhreNhmPMnBj1M5g9vWtNrdbAEWQ9em8LKV6FUL8f7XPQ9sLpdvd7zz",
  "key3": "2QC65eRCYujwnB8YFogvWoCkRQr53HQxrUwQomNLB587CZQ4bHhRugpBJwUNExBgJmzyVZzXzXqiuckCXwetarY7",
  "key4": "2nNZoKoZFQz4doe94yw49C8sz7CWh3MDymoFPn9sy3VkyccA8vWL1pX1EhpEhjTE9Bb7AvQZ4tDEhikWm3umtmzB",
  "key5": "3zAz41uKnPNAr6hwx8ny9VfYqrNNgTySsx1NkohTWeL5AcozrMhoK5DQdFGbR4uz6AG5vPGffQXZAZrfLnab9f6",
  "key6": "36c6D75MX3pE84M43AWzJAs4Hf43boZV8yyzJ6qMpmiVE2UeTRb7m9v1rAAifSqo85eyrs3zajQKoiKXX2oY1fA3",
  "key7": "3zSv7HCiUjh69TSWQxvbexyasyBieJhaEkiAUY9pF3Mn5rtiB9U3Fj6cbpQhZjP12pQRZArGXuam4RHnW4Cc59PL",
  "key8": "4fAc8PGGRCBPagYAnBVHtFAgUn81JEXC3tZyFKFWgAydkMNwbKF2x7AqyZPNkXcwyqDgKqQBgzaNiVgbdxwtfwKs",
  "key9": "3V4pmBq14ZhuJAXuNDuj1ffDQn9TdnggK41HHvxGAVfH4dNWae5r9HR3SGVPcJuSncpj3KFHqqd9JJMTixpu2Eb6",
  "key10": "3591hC31XhDQXQNvzKuLsGokdZHLPK7HnFksDfiPeHgv4vRAWFmJrDTKFo9uMTVhNzo3VwENzGC5xPPoHVtKcqH7",
  "key11": "5jFEAHgyB8BQ1CtkfmhPNEwha3gkCaa8tHvRGasEseBgYioBj6zZsYPXVrNbBTqZeeDHifwHhzgEYxrKZwYqhYLm",
  "key12": "3LcdNyfNMqoUy9nWTX7dHbCfNsGu7RZsndR5xAG596ivjQyfPc8duDUVPRtpYNGvkaMPDTJc23mXBbiBUVrfmgfp",
  "key13": "2uHZjnNGYvXRxUrkEC4TmJfJB81m5rNSfLHBcEdPpPyhsYT4Q2uVquawtMp1hDpmwVonSYUGjv9pqV4xEFZ1ZMmh",
  "key14": "21PvHvyf6HcA2etsqMz6QvmS4kUSo7v8myQ8zW9HKx9jaETQcXSXw9ao5Qt4irmyLRTqtoA2dsXi6RWiAxkJwTMB",
  "key15": "N8999McpLu6pYdkSWMSxPofbUvbySdB4dxjSWw4RJze2v519asMGTs2U7YZUC5Ucib3PdSYdKvJpH5SQ5QYQxgM",
  "key16": "3Yf3dVhCekBtNULAN2Rr3ugAmGo34KhJRsZsEV6r1qaooBpwXUnBdsw4hqyiYBj9bQLoB9QEQae6hUrMF8AXJ8u4",
  "key17": "1sUXbDAuGbpEjFKC99zmav8Q55ZFAN4Lcw5wmxAWqLYwaebvR1P5c73LTTdiWUBf8dh5PeHq1EccjjBGLQXfwra",
  "key18": "3Y5dx1u4pm2jwafXNRSdeE7CKxWd8pJLBvW1GSYxXs3riNiFecjsABCbpaonDBj9kyqoufQWSJU6HVMfRBumoCfM",
  "key19": "8FxdTtEwTT5apN91NPLUnLf86xSxD5NbnRav7sJtwkcxhYyRKV9RecPB87a9uGdecKNVKK5rDwhzLRVCMnt2uNa",
  "key20": "5cdpQjwxqB49bpTq5maaCqwKDJjXi51Q8DsqxK6uFeHd3QLczH3FjCF5rQPByqP7wJ3magHjyF8hbyyBNriAGe8B",
  "key21": "QBqspvFSrFDrtbruoYUQ7udm69Z6UhAt7FG4Vx84ceH9qTyKpisgsjoSQRY6chunckVFQXTtVHDBX76BzLPR31k",
  "key22": "4TDBZfmjeDM69hYhJPJz8E6TSgABRX5TwuS3nyDjCk94r6BzqCWfWqRjk5MCr369wTju622fEicpyQEBjobwANfH",
  "key23": "4cWNNyMBHJR9oJUdkg2qnjAzStjQ5Bh1Z3RV6sLDayVewifQ6YNz8oJzJfUfGYUX9mWoSk5xsA91G28cH3QbCigD",
  "key24": "E8nnh79PnR8ADzEhAHJv2ECaEaHAfYVJCrjUFuEhM3LqQA732U5Lu7kzZMHXLoU3fCPTFLvPDxMtrtgtVjh9wwt",
  "key25": "3oDkuZC4GvaF9cBx4RLHdW94cGyKmLRF3uCitX2xqo4GfeNxFLMLMExykoohPZeWRpPYZFAUw69CqhM6x1KDfGd2",
  "key26": "2BB4tmRmJEDXCbYdXaREXNJ1XoeKiMMN9CwRrHh3m2JeameVHdo9aCnn6p5R3bJG1zHxqQitC5w2gyXRYj3y4dgK",
  "key27": "2312mR6H4hmMotAQtZd1pdmmhiGxE6HbQKWjvTqipvYiVf6VwEvDS7j2VJFRUx4JHxyJmJH2VjF5ryX7kE7ZpUeD",
  "key28": "5ASyV68ZoVL35c6PTgFLM8aUhX8jJNg2yQJbAWyF9zGdWTZ8TsG7jM7qxs6BnDBcrm57P5XRWRGqmGy74VWtxY73",
  "key29": "izJsQqmAqwz4ZPhjYB7a1WjHoMgrarQLejGnsBpPxCVqBfCsbUpzKC4ZLRThScSvdsMpGzMDFtpqEzCpBro1WTw",
  "key30": "5ffyWDTCsrseEVdWLYc56owrmxMaUvuL4NJ5vxXqz2EnktEFmFameCJqA666DEvJdZdVcY9t55ep12m2SHXifLhd",
  "key31": "5m2weTbWkQoeJCQQEsmVs6B7C3qBowATmpKjxoqEvwfcsXBNEG6J4YLFFSEj4uauvNU2yyw5ib8UN55NGtkNKsuK",
  "key32": "5RN2hgsAw57DEFAKvxWMbMYRsxHEr5gRhyt9SAPgQ9N4bG9komjiMy8C1V53JVs7FycTfbsSskmiFNLbF3irn5YE",
  "key33": "P3S8KHUsfScBmuUvJnAx8vVocKcNeSY6kxWfPLvoceJV3NH2jUP492tz6JW9SkK2ZB9J7D3kgnw2GFU14tYCpkA",
  "key34": "3hjH1hLkXxmqZhVqzpiELxkExch5W59w6uY23DyCtYphs3QWrDJ1tk4mVAhJZWcHqpvfuNi1ojR3bjp9RCGbyXeX",
  "key35": "49r3Ec5m99ivnZMDk65QgaPps5G9nEi5RQzLVdibuPB5mdN7bWe9s9LzpN1PqGjryVbsyMz7rTzA7ac1Ti87Rpdc",
  "key36": "2E4zCbqBgCVSocVgRiA276jcwqwFHB9SwnBryX3u6qu5FG9cBtm1o3HNSWFU5mZqGC1waF83SQtLFipz2NZ5uZBU"
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
