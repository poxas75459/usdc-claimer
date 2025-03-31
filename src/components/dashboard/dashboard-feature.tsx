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
    "PgpSkpq8UPrXqD9tRBNZxTr1CocY8MtY5hsDqAvT3TFfYSpya2PowgiTKo3AgMvJ8gy2e6RWj9oqJKCP8QbnPog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gUKgEDYpzBZywjcKeNosFgorewfKwezJifbieAd5eh22ZAGShDuosyjvxrihKboAkM9qXbSpUBMmM34QsfWRruF",
  "key1": "2o5CYq4oSvBeyZ9JHasBQkRRP9wtXG8XVzMJyyDLibiJz4DqEj83txWovnMo8Thf2LceoEj9Q1vqY5Ss97APuowf",
  "key2": "5iqEgBbrRGG1uq85NgSjpDogL9HnVzkhabcZcFEMieyzkdNZyL4Y67xTqYfMtcFuMeSLRwuum94BpgoakgSp1Wpn",
  "key3": "2h7THMNphbt6Hmaibnmi5HKhkfyusASRgPCfvMbCBm6kkhwFVmdSkBYmkPVut3hHcFNuyCeMsbbHJKFxqMdzZgsE",
  "key4": "4Bpx9hLmBT3t5pmZqK8gXvQ6LAqMjhgctXoLGhtQhVr9rBxs7ADn6eMdrj2v9GATyLG5MnsPEmsrJkyz5UkrNJUZ",
  "key5": "5ykwjirw8Rq5WxB3QmH35ZXum2MiZbTtRCWgXCxozQczRpWZ6LWsot2GUUj3fXbeFvzV2rhUHi2XwZKARQ7612kx",
  "key6": "2mSYf7DAPmhLxzQTvR8BnUzQYAXgfgiQ3Aph19cEuBZeD5mhbzRt6iWBAMS5yPsfPUBfhtGcqPCcLsP3Hmpp4e1d",
  "key7": "3v9LbaJ6xXyPC94atmewM1JEHWoDVXVoDNm8e4tPUoRtvEhcctPYpDunanWSZXoGJdkCHcyfkqmRGfA1P6zjhiQk",
  "key8": "2CNJhUd5aMpLYwsh9XoMEn3sABWyT7T2YUaUusRQ7Vzr7R4mcht4b5VknyupTmMXBNQ3iBhgq7QReyupDz61KRhh",
  "key9": "2QMHjgmuVSCtP8Te93wca6BBd18q5yi9UMeFB6zCRdx9vjr6Qwf9pCUtDWvcCrbC14WEfNMmxqib1zXTD8wbJSG8",
  "key10": "2tEz6QVaYTxhXd2KXFDgxX6oh75FNux83jZdY6yfbNWjgDfgtJUXkKRsxSxVFwm5rZZqq8Ff78rnzFbTMFsggckq",
  "key11": "2muuHHVjy8bPCGL7HEqXNQ6XLNDKPd3h382rb1dVcBVXod1Z1DYiJAQmbi8STMXEpvv2zpG9Bb8ptXFbEFszSWs3",
  "key12": "5YTnwRd2AFCjYhrp9DLSTMS8gb8g68QXMcDqJTRPwY8yu2JGz8NHzuEsshCMV3HAi4mPx6hmHa9NLEQDgaWXU9UM",
  "key13": "35S7KJ5jcLdsK3em9PbgudMUoFpvHNEYjFRdauxpLHvwLPeAFdmrFDHKJmCuuNjCGMT2QwfH8N9ek8CGcm7nDYLJ",
  "key14": "6jyqX5G7qLXd8f6mUKQ2idhY7LzRn9q6BzpnTPTHpobUCHN1CFkLQ9kGAXr6VBMhqgrBQBURzLhz9GpuphuY9Uq",
  "key15": "3WqHSnffYzjq9qFiwpo5GubCp9wkzYUtQpYAvuizuu9b9HUNnKd3wAQrnbYqZMepuSETA98ThKGukzgoqDvEFj84",
  "key16": "Ejjxk7hF2xhSdUy8S35Ng6eAxrPs4PVUGiekQQvdB883nHjDsdhVSzHEfAEJr9jLB765L52eCVt6PBy6Uxtz8wB",
  "key17": "4RjkTnQ9WpDg9dsRGGh94eS8oAWKjKMvWMX3ZYFvo6DUwaMFAgVUxvix3NaBfxbSrEP8T3bGQ63i5PF5yraQpRys",
  "key18": "4EzrYaSUaKE7tRAN111jLhq8Es81mEmNfPxRqFDzvh4SQEurmpri3ZomLs2yKHma7pnAuPYQcesC2YbyXMe7gp8e",
  "key19": "3QjH4ZdA83iyqSKMUHTn7WyEPqBiZdjojKjzSqiY7GUA7j7tyT4PYqaF71soa7GwoTpNh8xCfrkJYnR5fbd3tAwc",
  "key20": "4uPhVtcVR8f55CuJDzYDRJeix7mrUVPi4Z678HCDfX37j3CzYFw9DvymVkDLafnsPdWrzRi7CsMngjJ9c3hKuU9t",
  "key21": "5pXAgMgJv7vZsGrwWVrXFDtFfm5TcqUKJUBbE7uvHWL2XaUpb2BaVdwvfWZbd9BjjoEs21WzDh9AxvBDVusXwURb",
  "key22": "4iCTQJqkGHkCgjWQgdaGQ99Sop6xLaDNyozy3DGFe1hNHSprqt7gHxpUBo1RD9wBW7wKGbPCVDBvYUidUEUi8JcN",
  "key23": "3DbwrWbgsYzf97dc5swRHjn2gUbduGZJ5MwqVofhxQwHqKUNjpjWpFsgkXrXnbrmYU6g6pGfWpKmkt7qb4CRDRtq",
  "key24": "3ZHykgNKpNSiPvkJ7USAotngjRxZ9y69UWFUzUQ3cUZJ9joXsp4bpsgGmTjSnbipo7VtsqssuJpryzNKsJGLK86e",
  "key25": "3kdMKb8m5qcoy5f2oXKFRm6ySucZ52Dmn6Qt1GY1zq5N5ziq6ALFzj67hwNB4iPwhMiu9D2AihbnKMnCV56mvceL",
  "key26": "sWpjxZjSfTM6His9AJuKmdi5pCH4ZpnqQf4T1vwS7U2cDci49vYLmRwVmX2ZiZKGzx7x81BDnt9RnbdCcpU8XCp",
  "key27": "3ReR5SMbF2QbF7BBnZ9tkc4DVGnqdbaDJ6cWqnBqKctpJKTGrL4fcWr8tQjiqhoQyxH6wpBXEAcgsLg2YALvA8BE",
  "key28": "W2xDWvmnpbFoc56z64yK1C6Yr7jQ5YVacYjkvMsp1VYX2KfpbfJ2sUXEihXbBJHe5mqdwH9JK7MZvuirex5dw4Q",
  "key29": "2Cf3gox4GGizpDicwdoFcUzXGmA3hvmSSGGD6FejJpx2sx1CU6UAE1y4ofbGmMptgHf4pLGea3Urdw9e7nuvzXhZ",
  "key30": "4v9TPBQWY8bk7t5cWRsRKQNtZvZr5PxQNPmNCethtevAU3vZb7fMbuGSGWmD6unzKUsXtguwstTNndnkP8ognRZQ",
  "key31": "4ntNNDHLYzDNain1oeWqpw6T3J7fBUF5xzKhgzBP4BJUDMqnHvixSZo5JhUrpwwmfdqxkcZQ1aaj6YUg4xADNKWE",
  "key32": "5oBSAkqmzpfk38BSVXzcQPMNLBMhWyG59Vwic9f8jWLoBxWWSwcfz79W4TLRdaFFXQvV8cf52sWZDojBXrCMeyq9",
  "key33": "2A2ba4t4smzFhkXkJhqhh4QuS9JAPf86caEkJg5vdvawtEGVrmU5UweMchrq9ArJgvSEPo4FgVsay6kkqY6RPcn5",
  "key34": "3PimYLrkoS1qNUg7v5Ce1X9ubBKknMUPB9m8Y7K9pyvbKEsXBAdm6tkuZFiuwBDNy5vAvTNByhr7VXUtKGKoTuDw",
  "key35": "46f7TeJxVNSassnazwwvHXL6VwUBLuA7LFnXBG3PTz1s1EckCwKgSmBvFLDonEtaVEbRzvHvVtFqstBwKABUwA6N"
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
