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
    "5BJ1wYbMMgBtRN356akD7LNBScq3iHMpzwtG7soqHXKVwtkjZ62inxxksUeERr1B3Fpf2WJ2AxJVLZRx9XfmnUvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47th4e7w8B9fKwZNZUsCrAXEpbZHXRHruGo2wRCJXF6oGpPMnDgUg1vyy9WFTw52fheCPXXGYxmt3A6hjnMP9Xaf",
  "key1": "Cj4A3RssK8eDVkm57M9jYojp6aDTPsRY7Mf7DQTHESgKUdmi4neWSQU4GBJycNW9rreKCBb5gxJrV9As5b5SEZN",
  "key2": "5vg1jpABhh58okGEGPE2eKipfsg8wX9TYYznDkDTikoWGGuJdEQqJQRZNBZqXoEtwRQZCmvV6pxF2NKy3XC2X8Bi",
  "key3": "3jgQfzvVmy5wCEkF8FSgWY8JCT9A8qiixnGBRJ9FYQPeTgaWJhHwaVJMR5qUi6mk7o9mp57dmjAuDTbg2rLqnNZJ",
  "key4": "2eAHXKvJH7CcgiwQ8zJwMkLsXHo2NvRUEJgjWgnD5EGcD13VXtm3tHgvvwT7g4hGiAzzLhtUa8qJiPsktRRkYQDw",
  "key5": "3rYSHf4SRBKctw9Hj1A6WfLzdyJFaLbkiDjQPomkFKeGQBGWrNdqqoexj1qnaSA61ADahcUoZUoZHTacEcBRSzsm",
  "key6": "3ZoDmSb5yy3xEwZMNaFnvyNLMZXqdj9zM4Cx8jaJHoFPzmMZsb9ZUESHSqHmmfBDwopyCAThQ4wZBLRhWSWqrnEW",
  "key7": "CoVDnfuD9FWxPoDbk1cMSvAif7oFZ4GyAg31Jc3fHE76SXTgKmbgBUMtdP4a3QFn9nznNB9jSWAN41XFozNgzUf",
  "key8": "3RyruUKJi122oWte7mGXz2JnMTry3tjB75gb29jKL9mmKKC7FWjZNkrMaoyUvUHNg1TmBPBNbGDrPGoFU7dogb7k",
  "key9": "oVzLtv7BePSBugKfs21z1cMgjFe8rcYzaCHYcnWvWPpt94jq1n7Abd6dQ3tWngpMsBNFJDv2zHpTRp159eR8a1u",
  "key10": "TpnoVqNga52ej6by3Apo6CDDADXKvDaCbdJRdEzEfZJPbUHTwYYKQiTZNS9R68eePZnTHiGtNWwP9HwxT5iSDgj",
  "key11": "66MRJaw98To9nsiCnt9V71esd6b5PdHgGToUUmdUMGqsAEdSCv2R84fMKQx4uFqso4eDkvdKFvtj216kZx7MDtrm",
  "key12": "3WXfub1T1U1uueJttLejPTMrPnCHYp3FqhzJYK69eVeMvd3R5dLiHF4rviT6ELGiYHLEjNLZevkWEaF3eYtDMGud",
  "key13": "3nZrTCTVMnfLAv89YAF3PFe9zZHZadPcHeDKkuTo9stuwdGbvTrshrJZMnBmKy42donW3ooktAYNM6cC72xdkWAF",
  "key14": "3JTv9VKdwXR7gYTsoxuAjPZZh1ULVLunyTCqBM6k48GC6p78q7vaMgq2sSGQeRRSDoCGzZsDvj2CWtndLTHXRChW",
  "key15": "3PDY2EKmvzZyDJT1L2mTDpJCKDrQNcCddxHikniEtiW8VN6tp7QmHDzjmeJgVCoAotbHqCMKsoe7VDQo24A2CA2u",
  "key16": "2HbULe47uT3Yn6gFQPyX9jxDssVST9zN86N76pq3CWumYXnuABRxZopEukeGxh3w7RoYHdMbcLAsJXzWnyYKK5JM",
  "key17": "33V2ZiQRjVoZzaWdPdLqEDkjkqDYGXyGk2UcMsRXLCCemrQJHZZxMiTiAk1zah8ixzWjSrkUBuqBwKsLniqJTXGM",
  "key18": "64JJdVbfoM8t8snye17xwKnyNpffmZfA95TKDMjFTNjC4As7VVhaaDuCMdtsV4kvcHZ3sdUYWd2tzrUUKA2rLdBB",
  "key19": "4m5zV9hjUAAnc8fjq5JLNVMQuzwia1m32tC1s34qCppL66ShvCQReuYYXm9e5q1ZnJNQDtvgUQ1cR9J6ExQcd6Ev",
  "key20": "eEhMThdgdACdjtsaAy1y93QGkA6tJmoHTMnKVFsnPCKfKjw2gypiCK5Xrxhpp23HZRGScRxQydLexVeyNFvLoBv",
  "key21": "5zC8LBjcnnW6QjNkTgkHXMwBxJJeuVYGx2yRmTRVf8EfddCD1iwQPWhot4t8GYVaNVPr1XyoC1XXcFDVp5EKrnTC",
  "key22": "3EH3mtQMp12n3TFN61qTWJX3hAHtD9ZLJYjwRBrkR9x5dHmyhBCoM8cQHji2soSjxmSNpVY6Cw8XzNjEwwFRXACv",
  "key23": "4T3kJZedNy7iLUgpcs86jKYt8NZJSb5GchWibTmyqxdMxdpuY69p6D6dfpsac6j57N6RLyHU7XQS96nzT3rK3gEa",
  "key24": "2dweHB5U7hbw2cqyoopiNva5sVhuqibuCQvxjMZoTSSBy6EDRGPLjwLkkT8ibRkrfjtgrJfbjiA1yJJBtVmGSUjW",
  "key25": "4EQ4HvviF7F7R63GiaFQpWizg96zxuGhChwTyYEbZQKG1VCN1Wuf5u4kUxvWb7yTuhEuh2QrkvjMzJ5vWvAfr44h",
  "key26": "57rWzdvTngFeJaWRtmtTnVvGh6ue6Dwpd9VMfUPdmdiheJF1huUDWgQ2wftRAoJumaTwL8vo7WVyYHqZZahKYxcJ",
  "key27": "4CWHNJjknduMnBgbkYPKBhXV3Y74MhbviF2az2mmFo9N4tiiExGC4aBEf8aiXFuADy3uY6YWWHVYPDXfVR2SLuJX",
  "key28": "42gggAz4DvXtcmoPQzNDhCR6xDvG6r8U6kGTqHZoW5zEVfByCJNU3tYBRwWNvD9HqGtfRrvbLfa5L73x5n4tuooX"
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
