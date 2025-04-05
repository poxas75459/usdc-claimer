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
    "4VzayjJAHM5W5YuizW3vvMq4gRBaUTzcKGnQnwwsr5CvvgDt5JAUbJ6uqBSSBa9Ek7x8S56UnkSAZCkbLSbfaFjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yzmJ7xNmoMwxwWaRLtgXkdSd5RnY5qaib1b92jYX1MFETjPAbi9kv8x4YPTdwzdCVKCHsdtkYLQfGq58rhmRGTa",
  "key1": "2NcqgoEJLLLsrR1N19qWzmzHmkW6fY6px2ut53LgxZhQ5uSbDNrzdWgcAeKAerCLrFpSzQkC6Yfn4rAFuf6KMRXr",
  "key2": "2ZYTp5H7dWBwCSHrHCWpAUoz4xYTMccMNo7AuNTg1oiaKzedJ6t8gE9dZECy5W3zNdCkCQ98zxGLkSSmL9of9Djc",
  "key3": "3NvenFtPTBzLEnbLYR7zX5JTa3XsYuQtMHSxzskVZbWzmvPN8ND3pDqQGkPcmcW3CmbQzJ4DgL3eM1u8CJvHQLnT",
  "key4": "3fsb9Ra9PnPKMeaz918TGNj9aQ5mzYBue1pnWy6RbUJACWuZjxWTkwf675PopZ9we4odnDFiypz7fbCJE5cmoyW2",
  "key5": "3yymvkYC4iXZTgkxp84VKJHqZZ2WfWz6Fqn11dCTuVbv2HfV9rbJuo8MMWbbFXyY4uH4Mvw4LZ7XJhqt7UeXfA3Q",
  "key6": "4MSxNt2hqzisof4yM1CcMrDfpjQq16td1dnMpTqzkGHa8tHkTDn6L3fTvMfc66t4uhWqEjnnaPHUk9i7h1rgQyU",
  "key7": "2mygRhJGyYuFHnsjgVmaVbzYtt8xNDrthpW9jxsxVissfgkzMEcUWMg3rgCgQA7tMda1WoPpq8QFQTwkNd4goaBP",
  "key8": "4c5FJGbwyb9A5EedLe1T6KLTeDezqm2F7BDvJmB2qjQ4Kj71JrFRp6UYoKuo2zwBTgjum5RmXMwSkYVSuBZkCFKX",
  "key9": "2UL53zmnTZPYFkysc3GTK1HEXuRkdYYPxbhUo9gRDHT8doUZnzAo9gNceWHQagedyTtyWR3RdrDxbBg5sDbtwj1z",
  "key10": "3GwjeQpGqEfnde6UvukgiwuU1mCCKTCLQhaHCw7Z42Ynz2WJSML4v1ZSfrsAUWkv1MwrCMVpBN6FodLYXFm2XwLF",
  "key11": "qxXosrKZKjdu7wwA94s7VskKVVusdCwFiCYx4c2k8TEpvPwYmZp7MrUFn2U6pHchxpWamthSqigx1gjfF8gzy4b",
  "key12": "2dN4R2LbX8wPJNYTjvX9Mb7ZTbgPhxTKvDtJU1vtyYKV8VVr3DmLZsmaGHYMad3BjicXhMPk6ABCkZuWaBi1BvSp",
  "key13": "2eiXpRMKfeyhYpXz328pcVRhMTiX4BP9hJ4Hp4DukckPQrPzL9nKztYopcG4tpeqrfqj5dWdmJKPCR1QhTV7g7Tc",
  "key14": "hdSrz5XAPks9PmGQjtTYcv8PWZwd63cpsX6VkVEdNp35smLJmhcYpQcd72TXehvchm3VGdRF1nCo5FfCvEYo4f5",
  "key15": "4X3wtUtwTejHxePUjkz8HmHXzNJcjj9EBbj4V9i6HBVtuq2eMKRaNg2Po2KSLDSEEGtmX2xysxHiHQTdAoqvas9E",
  "key16": "5WDDWnTQKTXDJaKQkbn86TAzsr87miiE9ZjQNbjfU5H6pX54TSfWKn6jAfF6De6hg7WJSW3tqbAX374QinkVin91",
  "key17": "3jjRN9FbS64ozUrB9QTheDg8c58SQiGbEXwg7ediJusqMJAZXhUuaniY3SZits6UsL4XLLXGDEGnVM3ffudjgZTV",
  "key18": "4pjUKXMLo4NXqToJ3FsdLGH444CQBkV28YCKcVeEV1QfniJyAa2635AaAUeGxX6LMXNqyzJG9zUknMaHMFCohrrt",
  "key19": "4Nz3uspjz19Th1EVvMAkJ1MLYVZeBpFzyZj9vGyVKkMVYc9Hv886mnQTSTGRhS2dwn2FLNMLfJpSHMNfWw6nHSAM",
  "key20": "2x6V48iqsasvRdmEXJeBhxmCbBsJ3Hm69gmL2Jjc5ETE8MgFuAn5gyfHaJT6APLBNApxW2aVocPJip3qXys4neme",
  "key21": "5jgecugWM7XsFNsPsBW5Rgy2foqcjKBzJSpuaKhG1fJifYdZjhFTASyMqNUHbN1ZCTZAerY4jWxYrzyMF8NXNUk2",
  "key22": "5mLYkUQb3A8b16KGFJJRsHFr4AxChxXbt92YHDp6YJGPCGf8VLSArfYd2bnyvi4woTTq4qqLtmHYwbxjc5vKDR4o",
  "key23": "585H34wUwBgRNWT94eG8HEXFrnTonnkeqppPtzE5gckQoxoK5riQfHUYd2qiqc1yfzAMpPZTMuktsGVWFc6bhYHg",
  "key24": "5pgumNLgo1xNpMGnWAe9kwkbDXdhCUGKQkfuZhyscFXeMZkcCP3CgF7BPwAvcVxZopWb24evjR1qssSPUx6v5kxe",
  "key25": "3pGZ3E5LNwYd1B8iqLfWpcCRDYJTRFFnVn4q46bG4aAg31kwQnko2Ex11X5k9EqNoQkpDCeFaRAGnmNQoZ4VjuK4",
  "key26": "5kLEHoUsSzF8DwMJDy9iiUyhFB3wpNt86dA5rQryF3qTiDLPruytnaq2YtUniBbkg2iH8NzV3DtT8PG1wzUHdwrV",
  "key27": "4GtGnDVT9EAzLhS47jPwMtQLisXu4P3UyZ9FDmig6xLp7AGU2qBJJDmjn2Hn9C1keYvBDNUguJgrymd2y3EuaHZC",
  "key28": "3QBP8GncoDP6pYjp9Vn5CPfMwXo5p5p8MMxmbyXBdJc6XSzfZ59yF53xja42CFimSUAb3jwoPW4QTCU55PP8CthY",
  "key29": "2QYSzBn4ySnA9m81i1Mmwpo8Pot1LT7faAFfbWqAk2fBGiEHDBR7CLAeyj1esF4jSvVyrVxam91ExLensmLsLKj3",
  "key30": "579fN63y4BZfWsKQALnE6pr4bB8H5vQHd1623JtMgKt2Hg6YoRrz8sFzajiJFNRKNxsR1qJRRvLpwS6YLeowaPXE",
  "key31": "52FQjHStxXz32cKm4kFfmw5KTbxdAhjNM7tEm6dFRtfRBmuLLQHtUFLrQJmLJSaQ9bSaWdKhCrwHbLoHx2kExkxw",
  "key32": "25tktCwLL7duuVDvwLHkPumvBTwKBLizC7YKZFSyEHzy9hoX1pKaUnpwazQpJBWy4TrjBZcTr4TuF9N1z3A22W8z",
  "key33": "4uQ6Qs7nGhuQz8N1uPENsvR6e4fudpnKYSaZzMM3wtQnTjgYUCkCoFZCVwgMnzNtVVL7uMcNZCX4xuBSTKqtK6S"
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
