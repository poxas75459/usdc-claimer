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
    "2VVtRuuLUV7VcYG22QuLUEdccrBxtjaXZhCKh3Zaq9JGeLmShq1NLa9oD8wg3qfgJ92N3oYmQMAjJUR5YwTxdtKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "txLifZyN527Q5Dc95qngRKpCm8SPQrJgnwQHaxki7M9u6f4LbHEe94wW2HuBU7AVYMWq72pPi3oXQ5XyHmSwNfM",
  "key1": "5XacrrohEKkrsSJMnSQYFciKaNiFhj9AX9VKtgN1NopZmsunaq8DQEGQnQEPmRT9HNGjiYkJGNXhoJdMy3TWLLPk",
  "key2": "STGGZvYfinPbtNHKVfBAMt2r4Z3tLxcxSHA6Ddg5SygJ3CwnrZFpgYpVygeHTJqjcLnaviPh5bmthoypnvBvHPW",
  "key3": "4BQo2RMTtENYzch9NP4hpF6gJZF2KD6wuGaYv4srM3muXF9o5hKD12bF4739tkgheLvZ1AeYbPtQLQPbesrX1GDv",
  "key4": "5JfLEfYKKPap4YQvZnztCym88jGM2mGHG9zM8x4PpEwbq36vbr2uwfjyRvkjweyjknsLJWkPYnGn6p22cW1qFxca",
  "key5": "54Z5pct1x75i8SoygR8zNVNwWGvrEWukcMrjDmPMdftnNBbvvYfPDafpaS237Xmq9LjRXxCeMHsqpLPboDvAJncu",
  "key6": "KVUBxjUMZpmrieUu5fdMdTAbo7SxY2Rom4TCANEnFz7PK9ETjjKKzr2cRksdRVEjypz1oQF3Gr434vs4seXr5J5",
  "key7": "4WGdjPmV6nNmVdc5LYfk3X5Xp4KmDZTMEFPVjxs32GrENLh3CkrqVB8Yi8dxKFZteWcUpRiYLvLTbnCa3ffCdWVz",
  "key8": "96hH2GCBzFbne4cNtrCP4fwruDdRaHH3CnkWNt6A2PKQMsiyPSVoneDZrSwxQaPpW2BKe391FFZDFaZBWQjEeF2",
  "key9": "Pnwqiw2jpw47xs5QgvoBDgsBW8sEaJnmxiV8mHeGRk5ytWjMKvLK9FH6hf8eVUW22Rh5cDqLSVsn2cBfxe5B2rD",
  "key10": "3J8G7Li3SA9Ud6UKTzS7S7FB6sCVYSkq5fcBm9mzuK3cJqMyQwenrfoUYPNQtKu5QCs1uQr3GX7oeh8pRRBkRhCq",
  "key11": "gULJBWZmAi6mfzsEKeLfwL4E4nyMkS6mxQLfLnYTSi5bVLfpjvbvoFpqdBiXwuApUjREMScYLa5X39UMgJDLYih",
  "key12": "52Hdpdb5eoDiwJBNU42tfxPEeQfPdztU4D5hysGA7zDTU9mGFLuQV5YMLRjeWJF2QGcve765sAJvqr8zqiBSnzCQ",
  "key13": "2gaYbj4g4smFqjgPhKGjNV76BnHp1fnu3V61ZyPepfFHjRoZavw4jdQ3LvznBQ3BFKMeTS9QGtmu7ScYq8fY9pFJ",
  "key14": "2iyDWfZvaK26yDpPWiVEeCH55uAU2qy6tJhwhW4GHmpZKpSuJV5N6NVqGvYWpWj5ARdL2KXSRmY5zWbMU6Xh1XgT",
  "key15": "2Pg59rmrK6eHsbh6hRza2gfgaW1UG2Q8kPUwVgF42ro2RmXBP6v6HJGE6dVKBUh53D6gBZZW8ERuJkFNKfvaJRia",
  "key16": "5xPLD9dc9GsdKNvjidJa1sKYgntTJuyWRyAzLBkMgQjXjJv7xZ5ed8LRZFmC8q1vjbUp2TfQaTEwswzpsEuRaa5H",
  "key17": "5AA1jRafcsvS4XBKzdzQJPRfC5CP1rP25YKoSzZRuYNiA9H9DAsV6ALzxMwKA4dVZfwWCtmFsLBcj8ffeydJ3Uz5",
  "key18": "3CYDua3cchMrkmFxGrUu6TuDv9hH9wV1zY1urkLcSgEmxMt8cVR9LizzxMZk4ViAvT1c1yaFd6goDp8K1P8VVjxf",
  "key19": "LjZo8V8USU6dEzuNyf8hS2UNZsuNNupq9bEooxzByain3g5PMyEeSafpbNrz46AvYF2rRkJR4kAWMX3e7YXWtdy",
  "key20": "2d5wPthXwV6q7AHnHkMd4nwmMDrkHnYSRW5KdD5ZVFds4kMk9a5iFGADccm6V1qBAZXjPfH2UAmFa8K4kcNaGsLx",
  "key21": "2mkipmMxr3HDeD9ksBEj4uFVEpjiMvWiWtSnYHScGZY3RTFHtyaf13y2nWsxHb97dcsDp8AoUwPsc1GKMJs1ar3X",
  "key22": "3mX5fJHTDiNZ8yWGzZcErHnAMvVBZiiY2UrqypU79RwwjjXCgjfhfnutwjK7Eupmub4cfovj6bXefEoTVJ9Fbvss",
  "key23": "5ozYMDgTRYigeYenUVv3YQ19128n9zYtGYtP7dk8umzJvfm7JahjgwyzxUkGAxgQBUME1ybm4GNj5SmrReeX7BjS",
  "key24": "3vUdsLk9qwyWC6DwBGiPZP3TBN5Gs5EF4njxR7MCmgL43GsNVbCuiYekLn5xj8zaAunmJEwnf9MtMZFLa1tT2Fck",
  "key25": "S1XQFCeXkqPUaqd82Q638wBQCKg9B6FyXLCcVBLDyxvEteZuqzW21yFqdUP5izWNR8XDVxebWLR4tJZTKuwVyxx",
  "key26": "4pjHkEXhV3jqFDU7NGcEt4r5QYj1vEGL54T5RGaaFjhrvL4cimdb2B7VJE8j7VQAh2S8rPpaTHgurcSPh4UPnK6i",
  "key27": "FAC6DPjfRdieFsroNJTXTxwvYMa7YUgqPEgxM6gwuyo5SdMSLWUnD3BifwJZPDiWNrznFCjd5mUtBLb1YJpd3HV",
  "key28": "63VTSzuSDmkyDVpJH8qZhkshrDy45zJYx8crzB65T4Xoj6g21jt7UsLjm5GSm9uARdCoareLq2uAbeF78ftjCi3Z",
  "key29": "2GeGxUMGZGmTXe4F2K1ZAD2SK5imMH4SPiwsvi1Yqiigktr4DHeVYHGnJzqMyajdU8ku8jPZXHd3QrV7p7GNQALD",
  "key30": "45j6hkF2ndDs7qCPY9y5TdigD9S7A6DU1swoM5icTRnkBs4pbbWwYgUvey5FeMGcgF1BK7nYmbyzXZLhq4Cy21Af",
  "key31": "A8L9Ddt3TG97BAf4N5Tyqr4w2ukGQE7srH8uL2XuVqqv8cAQQFqsHgz7hWStseKRVL4eJKinX7ufWjhnSn9iHH7",
  "key32": "17wCRP4QaLkJ6591Wwhuwix3BvvLYXTkcvxSg42se4W3zXdn6v5osD46C5juSw5T5Dxavq144fWVYdiCanQ92us",
  "key33": "vRjJKzJbtRGY4QsF7L6EATxk2sHFN5ETuKnqhua7T7gUvEPm78b9Gd6kPcMAr6xD1STDGQat7P6N7jzYgy7Lf5m",
  "key34": "4BStBBWyNjFWZ2hxrAXAhgFc74hHLizGjNhWcjbtqfeZUMUQ18ruZQLs6Hjceov1Hn6MRsiX5oGafcgDm9jTwTL6",
  "key35": "4mQ9DXzfeZuF73hNbvKcv5Y7N2qyjEZkLz6Ui8dVVFxcHUnkmHquhznxY8xmFpM9pv5FNLTu3JNhgzExkaA2G3XS"
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
