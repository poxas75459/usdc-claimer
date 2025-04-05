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
    "4dm4JCXCKjx8afAsPyTY9ptcr9t6UjhUstsN4cPmJoMZzNxYhX3DSg783AFBRwh2M1zhQVTnMJw5vz94o6bF6VMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K3utSrz2iZ4CZY2X8p2wAWeKkDEcEYF6fAqPGtwpoWbpCQGGucFJPpt1G4i64mPewnPD4D3bYXGUHAZQpw4VhaF",
  "key1": "R3WQfPyZTMbM1N4LNuFxDnVxnttK6w6X6VNmsj9KRo5pZrW1Bi3yGNZgvtbJ4adxYo157sgzVD3zdaZbNtBPvij",
  "key2": "21ntj5yNDBAyyqsWTZekq77B4WXaNNxy1Zc3doxZVw8qqKp6JLaksmfsTWPk1UUah4uNcEFY4p2XYqJhpHLR74Xr",
  "key3": "5gtdDBFYiBbsSVVUXv67x4YDeDb47njzoErc3PUQttw5QyuHC3v9LoMamm4uhp26e73znpNtaHjn4FeJGw2nBzvR",
  "key4": "5Lnw5kzqw4D94VRS5XW6uQ3XPo6yN9FTZf9aFgKZE541mrMiiF5gfzFfNXbGacTKgku9Kp3QU4tYXGxnYDA7K7Dd",
  "key5": "56ACo3VWxchss4tJX4KvTMgUy5Hmio6nVUJ8gpnydfibZf4a4p2oUjcHYKxAXj8g5EUbPZLn7f8VU3nJEJ1wP4rR",
  "key6": "2YbdruNx2PQLrcFJRXSmmW59Mjg2dZ98aHuJtUimXKdhrJv5hGCovCmo9iZ3HgG8Qaym7TxzTE3Nk3sUvdXtEhPY",
  "key7": "3VJXfK1V9oKcbALF4AZ4dXcD2jKR1JLEJRsRVJaRrEPgipeWQ6YWzhbp2PQVc5wUMLbEJf96sU7eYNW4jMLzYggG",
  "key8": "4R28L3hDiEn3rihmUZEiTo59txvCRyDgpAiZ9KjuaPv24RnF1dyg6shC7fyKLJABrzPisib7WwmVWQjWfi6EGzTD",
  "key9": "ZebNBfefF6WuYbS6Jqin4bG4KXXEKac8GwzQLvZGtRjjQLxbjD3f9W7WaZGdfTPcnRcS3wvPZ37gQ77cuuA5u6A",
  "key10": "onRCmzC6aJQb5zGYZs6jJbXFvy3aboDu3oTWCXJZaAPvRJ6xzK5EhiGeueuhEjkDGCx7RXtQww4ywwsBZXSZix9",
  "key11": "2WJ6WQ9cY1eBUmXkVfeVkDRYVFjHg9MFpih3xzwbaw4Cy6MMvsdZrKuVQq4TTKrRFfeJbAnmkHULcr9pKC8edLBw",
  "key12": "2XZRExCfchVZA9CR5RoETTbbhpjLYEwgCnQYqZpXdUMy7yGZFq7CP4NJBaJP37rqYVWVy51h11qoiP1qvoEdAJd6",
  "key13": "2aXNeJRSQSw65rmqMK7Z68ouRq4CfKV1Zi4316ssxuSngXcHhzHFCTeBQdzWe4LJpcps7u2mTXWu4upuitcw7Uy9",
  "key14": "3ddwZmoy1CaCvQm9gtropVh8Q4zisCVqvxExybhUj72pjoRQbiRFg7umLk5NQz8YagEyG5tz4tyLxpU6XA663JHj",
  "key15": "gC5rxvn4i7ZPGZRdxt3wRhCCS3hMimm26FNguKddHK2EDQsFLkTxT7y2YVzJfxV8BtFPXs12vMhto7LcQDdnsES",
  "key16": "278WEThSGb4j6RLoMudYkg24k7EFUBE7JbqC6b2N8j5y2vshfuTuA4v3V1bczGJX4dYH3n1u5YjUypooWD85RczJ",
  "key17": "2fmnkyD9JdV5dY4GqZ8DMKApAmkfFqATfz6WHFLfnEGN6wMLfruezJZNg4bhpbCqcn9QsHDM4XMAyLPm3dVm6nsH",
  "key18": "592pa81EXEoYiD4n8FEqgLUaX2TVLdkhsYnjGZW9p46mJdtAG37iPn35HZmWcPDLwgrE9igWdwALxGDPh1qtEMWe",
  "key19": "28SY9d4TqohJtvqeeTNviUHYFuz1RnpyVuxHomKia6fYoLdoVrQTAH3kP1kuRc4HBGApc1VLkBGj35y91ggjB83X",
  "key20": "4LHfPF6UY5y83cZycQoLZ5iaba1XokfFSjUNokYCqJfFVj5VomtY8Vg3qz5c944R26iuL9jdGoPPUp7C2nNWWskJ",
  "key21": "3uTiyFnbaGZXhdfWLSwFhMELMyUm7oXURb8a6PZkY494rk4NxWU1u9ghhQ2wU4zbrnkCJFKSNpPvVpDcVAJYeMqH",
  "key22": "WWmgYB2ZPMs1CCt1zQexqK6U9eZuPgsCif7PLAhd6wCSQAhrNT4JoDGaS4C6BZ66pJZM3D7ksow6PQuShULfw7s",
  "key23": "2mZ9ypmKQkJFh72YFPmAyU9yAakmjkdpWuA5R69Cf5cHa2fu8DUKx2m3wgwiKwLtx9Yp3QRJYhD3PMqhZCfrKjw5",
  "key24": "37tVs1xW4VPV5isUAqamdseVfnYVBbsBY4r6qkn97Qtb8uS2RStLSJUUdZKLMhJ85pdPEhrVeo73BwTxUUc6aScW",
  "key25": "3U8Sv9V21TGFQjcsC6guoH8Bf5XJStii4DgvhPUcAUj6hUbTjUJ9JQhaHF5fFpr6yfnBKpirA8MBY6Az5PwLadEa",
  "key26": "kgBdzwofm67RpbKC1MU84waFbwwpwkuo25Nc83AR892DQxNvwFRcNRE8STHotdQHgsDTasH8Mp5KVwgSEAEmreG",
  "key27": "3q9j1LurjruXMNa9WeN2TMK1DHJjGLUAC7DGusEwzN6vtftwPEJa2mB7YGnrDquwVJovMn5EwmK3hUm8ct9Tq4xH",
  "key28": "3fFFG6sdnLCYXnhbHKgRevdXhktg91RKJbWsgG3zGnAw9RhCcdRAJHyuPJaBpVqd8xtnFDUBJvrCpvNDjYAzNv3u",
  "key29": "DJYcVnHiGbgAd2MbTcJ9LMubNAX9rT2NZTraSeuFadN89C7gXo7Enpwnuc8g9C9aFyFcQAvLPYpd5EjAk6HxcDq",
  "key30": "3bmUvjzumo7byfUMq9ge4LZtzGBkbSKpT2zd2TCgQ3j2YWHgDhE5PY4rEieYh118e1TqcwmWAd6iFSmwbx1MShiF",
  "key31": "7mCGmSY79Zxnq7qJ4NPpptpx5J77nPvuvAGifR7DgrNzkfpnkRBXhn9GGLrtBsAEauttCiwonr4LaFYaQnjnx4f",
  "key32": "5GkxUbMyRW9H73a6mqjYJUUvnQxHpyaDxRMhwG3U6Mdp7TYmSjUiSiLsnWAQSB97LhU6QrrxsbwjBVUfk3F16WL3",
  "key33": "5Wt8okyLMxHpg86eLS5eaNCVi3wmSa9Qk67mrzDdFHLpYds9NJH2B6sUcujHBtevGyYXZRGr9qEn1coTNJyv2Yce",
  "key34": "3gsxtKj31YHx9KRi7yj17ghPFzg6wvfdvKnKcddu83vej3PgeWRCZ998nvaotPa9Qamocn87n9u531hG49xa4Djw",
  "key35": "5zophyxHJErnEpVPXreSVRcPP4c85Djho486oNzakF6Et9wG9ejs3fMwksSWT8ZHYjgdXWrTXrv9K5E52GwNAHHY",
  "key36": "Lxc6RGCAzJmxqUFM4ceWQGq37461Hp9a5XCMLaJp3G9F5CRJi2G2DjEaQr39yCprn3AEukutVvDY5wRktN9vbyw",
  "key37": "4BKKsXfFY6aGC5qbWVfyhSaFBgj3k6z4VA6EhBYpno5N7ojLBKF317rQjrSVzYvvHGieLr5A1CXAtCsTA75Yc8Wf",
  "key38": "4cNzzDp6RhPo8ZzFyxNzFhKsrraQ8cpCrnTYSRYHGkB54xaVQ79hC8T7hdqh7kobEkSiaSVg9e5C6igb5JsWq284",
  "key39": "2xJrkzmNUbie9ENrnv4wvSY8T9qU3f4HzFnfCfwC3wBtVZDF1GzT26CimfzN6FSX47vhys2jyF7cUEwCvd1o4oJy"
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
