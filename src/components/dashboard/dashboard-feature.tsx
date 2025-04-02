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
    "5EnDHLa76vShv8NRzXSSg2m9zbhnrD25Es1fjwf5Ss5QXfKqnP3Yg4zipiheqJXcgMiZnqBjwrvJG8VEQtT6dmbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VyufqTttKVCwBZ9g3f9RQfv71otFtXZpRN33jvubSahJRXJh1MvD5ezB2ju7181cgTkKNvfteKbuE676n4Ye4AU",
  "key1": "3BwP76UsCex4PbfTqUiYE4Us8NYQGyzVQyya2sU4UKe8ugNfudZ8C1M45b7ygJdt1gpcLX2yqNJY9JRa3cdswW65",
  "key2": "2wC5KnwWphpkB8Pkz3ao7TEfwaiE1fSnRYnnorbMTPBUSJ3HEXssxWp2E9rFLoELD8nd2QBx3mc1wKJ3xGKV2hGJ",
  "key3": "4EADLb6h85Zt1pw19WQDLci6vu7oVsN9gad7bjyTyTFrGXEVANJUVdt5QiT55bTDip2s3zMb9UmNyU2L7hutqpyi",
  "key4": "2LFfauGt3KXpY88z4yrNhLtEVZf838vE2Bf9xDC1zRtV9DJbe5Q6smFyrdUGbM1YmVZTXLxUdYxaC3Bxq2pA6JJQ",
  "key5": "5Akx514Y13i1yG5eyQyJLXHy2Q3AjnXCwHD9y4ngJm2KWmReHSAdEbMiwtdTjvzyE5mX54s8u2AkoKiuHVUMkZy6",
  "key6": "ViNByVMvt7BskbxG7G5MQcwhFc6CmV1KQHDMzWwWuyhCKQJddPWco99ktRt2RkBPnY2yw3Sk1Bjibhw8wSATnne",
  "key7": "4us1HKMLpAE9RCrRYbG6BCaRgRGUiN5okwBmdWPVqKzvUYKufYNUB3B11WWW6Q4zEY9ikPWhc68SJgLMZwWNQjXv",
  "key8": "5wCbivNcQ7z3kCbBDLsLuwASEULuVGguGDUWN8h7zrmRHq98ZwXN7i8pnhzQC9oHaSkXANvecNMxeV523cGMkfGw",
  "key9": "3rxU4F53eeMLZAnXK5ynyh7duKVezRaKUqttvoqNKQCbRR7RGC83N9NudgT2iFEF7GSGzBMsffQ9yvHqJTNg57TR",
  "key10": "31Zy31p4gDLVMeXb1C7PdYLX9DLG6Fsef3Q93gyre7mcZe6rfXBRNRRiF6M42R1t2gSnjRqgMq1c21YQQwzMNkxb",
  "key11": "5qLJfiNVALm7qc6Wtniyt7VKjjpcc8cioyF2LAgRS7paAyWBEeLfZqdmYnn6E5oW4Z6YfVjPwiL4UivMGUsUuE9X",
  "key12": "3TAP3LsyPCP9xsa83ugMNb7z7QCwsbqtr73aGhWM33cKoh7Z38GrBmLZr7ZBKMj7PG6yQktVypEV8NzKf1xYTyf6",
  "key13": "WMPykh2EgA5MNjohoPmQr8xaWk91mhL4XMH8hoK8C65wnuRXsuY43RmS9csnzYFTiLDqiTuRbMAkVhMND3JSzMx",
  "key14": "3JyquareaESJmae86PuZwgJRZ4A9eWyeFx3sNSt7CDdPzRVf8acHcxysF3K4sbhBU24o6g5uLgL35VYbrui12BHu",
  "key15": "4JYNNJcCR6m2XgVkAmqzTtbyrHd3AVopLd52nCu7wxjURsUaCaNa49PExuNbT5BgfrrXmZCZp1e4T165wPeb1bq1",
  "key16": "2nJsaxcsaCo2juFMQjye8uaeWdV4P3Vm6t4Vnhf5KrgqLUyhPJ4KQMxC8yfqasMw5SwosmgfG4jfxRLxTy3EVzqu",
  "key17": "2rPvKiE7p87pgpMcr4NAMpZjYsxa3Gq41eFU1Swz1YMzddYn98hBqL5tQv2Ki1FYrjAqYWRsSn4jC2vTKJ7wMyay",
  "key18": "4ZLUs5yBqNqbwUaXpjNkWW8SGukro7YegNGTYxPyiA9wsRCnYcU5cQnvpPhgxAwH2KwN9ung1vTmy6GY3X6S3L7w",
  "key19": "49UMcJdUBp3TuPsMqEZuuG5UJaUjZSHAxChFgTrG4J4XMJZbrTbdRiXofEDTA5gmGMCNvCp6QkLKxCgUZaqhuAML",
  "key20": "3mcLJHLCnoevkZei7hMPDMMoJk1RtineuNrEfV7qJEiZbAuLA5xQxKDfrv2SHTA9RrDMC2jEeunfiFCeayyZWMsJ",
  "key21": "rD1ZZ9hr7AhNYQZX2h1URMgwBcXzvsQeDL2Cadx6Wn8rFT8mFBrHurQjvNyTUQ7bNdutKaozKKpsftRgYR9D4xa",
  "key22": "2KDfYJSXfPU2SLobnfpBKPZZqLV7MZ3U1zLvFkG7b6V2GXUeEst5DpazyddskFrKrLj6JAXCoye5HUNE5sAWMDJy",
  "key23": "5Ns1TPpJZeetdZVBFgcZKfZYccppf5P8dg61UDVubmSRJ7CmF89W7Ai9VySmCsyWe5DnwYQRD9rxuWf2kr6bhf5H",
  "key24": "5zNGyRSGVoXwgBfyYUe624r1ETiM57SmR5TqkJjv8QxnFPCFooYpCc9eBNVXjj22MBesPV42ACBQwAvGMTmzVgAN",
  "key25": "TnaHdoq9ZWmcWrSkKj3fqZ7c2JUMerhgYG6e4Wz9EckcQoRfNn2HDSA5X4SZ41Am4acYMYzQsxZVchvTTZxsmDi",
  "key26": "49AC4FawvSTeuizYFAWikD3HmQgQmJGAzfpq8NQbqfxQiej69qapcnbPACbgo4HBAb7rJjkXkzzYdR5mtffLZUzk",
  "key27": "16Ttw7MpmMB2AwiFzc8CirjiDX2BZoedExtxSi7YiZ6nXx8fd3tLJjG7hJJ5QFQZiB48vLy1J4kWPJP85cD3gLb",
  "key28": "2sAwYBJ1ssTor6MygHDt6UFAGqmHkJYSHMnTk6wr4YEByfBNvLB57Mr8mGuGF2iRmXGbdL3NVbkpyMVgvkbm6HM2",
  "key29": "64ihiNu8fomX1KohURAXGP3GwoaUVn91s78oUc9fbnJkhZp92dxrJpmN7snv2nVQBpXoRD2yQe2wBGME4Wcsqhcr",
  "key30": "59NaDHzysUbXpUrUysi52f9YSeKrgSLqVW2qPFCinkLE7ZGcuXVBzpp6Ww81MPekaNEjUAbP32ssdVsKwVq8FHuv",
  "key31": "eG6pByj7CBXG4Pux6hj4q8KYpSVLqZhNDyA1J86HgyDvMsmNY8QLZbMJojYG3epn6sAiYrmS1jWrkpHSfMWEgWx",
  "key32": "3uASzxRmxbmsFdrhQd9mhPLCk2a4CGADsH5iqXAHU3A4jQ1PDCMxtkuXnPc3iuW3Ujnx9tQrEBhzsD7G63nhKMBG",
  "key33": "4w4Gvy9Zz3FRTpTBJNUciXW2yeqrkSrsArCBWmSDARK1dm13eMHDokr3eCzoFesvvhYLrYumodquNiTpWYxtyS5C",
  "key34": "3GY4qcsjDZM95nZntC4oHDjv6KLGSckyzaL8V6QZd8USVnAGKn4HUMCmDxJMdmHaRsnBkWuo6BmyAyYQTqkyAEyg",
  "key35": "t2aXPmdLSrUqEh1DHcFFinmCn4UFJtCAEojcaf66R4Yedz5EkZjUc9FFRC9nNMEGA6sHuQDTwBoL1cw5JnQKgzU",
  "key36": "2F3neNBQ4nj5kPR7TKA3NBtb8YDmzk1JAgnpkZSfSszQCBtMzLMGxrkAQW3S7wFR6NoM2yj7sBCMmuXmy9d1r63Q",
  "key37": "4UbJvSad29FHeUBLsWKsdYtiYtYX5vDWt1hgpqEtpjQP3CydLrX5aKYwT2Sz5aTJmJY9SN6Fg4t6VTRNhR9bQpPN",
  "key38": "q2acE7evvcF8d5GTqN8qSacxAb4QzJyMCP3S8mUJfYPBDEcwj5iZsSmz1HaJh8gEjG5ZR1Dd89FxLJc1mSBEqTA",
  "key39": "33bg76oHoMLSo2FotxM2GMWSATsZKmqrY23pPaaTdGuD7TDUpJjQrTyiGrx7zcoUXovNQfiJ3kT2jAqstxkPiTA5"
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
