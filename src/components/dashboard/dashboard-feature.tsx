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
    "5aUtPyh3rD2sEYpmUWu6jYtsfyKVrta4Dcz6zJSZqaAi1Kx3LgpiDkx6ahndRJuuCtvMqUetkj9d5n9cxQxFShAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VBhS7DcoF6EK82P1Vk3E3iUYMNVq2j8UWFAkSrPq1dVzetTvgoDcWmtRQhbnXyq458RcmJP7BmbwkGt1JhVp8gU",
  "key1": "NYjeajcLVEESauZoGoZbBdvGEvLnSb4o8bY1TR6MzK59JynfoaWjpN93ySZav6K1LVvxSmgDGFkw2XBgJ1iCAh5",
  "key2": "5aMxuQgQZUYHNDVjewLeJutK25TLnCA8LTx4TFVVDdkRLZmmoSFxZvXo1eS1mk1WjNYV9RsKedKunwDucn6JN76p",
  "key3": "34UdnJWxHwJQJNzmGEYyEygCNANYWJ9Qt6tw5nEZshdHTivZHgE7rdHBaSSYnt38KzuMeMkNXfeDxuWZ17uG99q1",
  "key4": "5542HXnsDJD8pgqDQMgXFJVVDC2x65bepJHzF6cWDCE1Vi1SFV2hGWgWXDbHZGSK51vxPWdHmBKy9QCXH4nkETfk",
  "key5": "4CkKNbTdHQoKkWjitSVZWviSzCzRLwYvoJTLL7XVjB5Xfxa7cFUNhoPep4mUx6dCwPfCJqwVxZ49CU4qYtdwKywK",
  "key6": "3VvXpKdNvyPb6EDsrxmYmx3QibEME1HjhD7DwrgH52EALAxPSTQZd85zv8eAS8QMU8yyDj82hsu5gZ7k4ZQjFo2v",
  "key7": "3hfjkaxupVk9qUx4NwzDVs79SA6R9S22JHn2zTBxuksQQX2t7JAQdaLEaagUvi6P6zXhpF4gZYXs8jQZtE8wd4JG",
  "key8": "5k79m7YdZRhsjVwg37HNbEWQfRijyf51CRGNp9utdESEYhJzTMretpcxHt9tWuU9Te3RvjhmYw7WZ68cHM4No91M",
  "key9": "tV9ajwDojtL85uMPx72uRMfo5Bj1XZzL9ysPUV7PLMfhRf84EymRU5sDkFVaVQ3BR26vxZLtTXkLwuPgdQJWWiQ",
  "key10": "3kZumH6ngPjc1Xy4DVLm9jYuAka6bNhhYB14JNNDhCvJfsdYn2uqdZSh4sgdZH5xJKN1c6CZqHoXw1QdsptKYgPk",
  "key11": "3R1F1j7CKXL6qRLjFaEwQXYCgycNHm8PDbzvhcny6HuMQfLXWDx4y8v8YEPoNWh6WhrDEav9SpW63tn8d6LdqHcr",
  "key12": "27sfwdRWsA7S9BsmdDnwXMnpM4ayN1iXxQGZESSf5ZFwZcaYDLQpoCiBZF4FJeG3nxQhFQQHVWWvhvQo71JqL5KH",
  "key13": "5ybv74XBkFQkqtRT874nL1pfuwZcdf8Be1umab7v4FKdJsqyZu5WFK9rVaM5qHjWfRSMbK3rzVg2Roomsj2HFinZ",
  "key14": "SZL8BT9gRdXiL8AnCdr8nb1m6cDbUw1uwgHLy5tZbVsNMrSqt84tjEofZUe1oMnrbLTdyou2YqG1cLZKsKj3erF",
  "key15": "4zTEBEQgg2R3SNdjNTUPT5K3UbfUpUoe5CGta4tqe4xYgoA1ae7S6a5Gx1P15iGtMpcFuJC7LTPf9PeG2ewLd2pq",
  "key16": "4CvRbqARsNUNL4i1qCyUhJ5eR7xe7Zsj6eZWgAUzFMtNd3L431ZNzD2UeF4BKe89jfM6gr8BNY6Sq3TMGc9feSXx",
  "key17": "3mJjDMfpDXFzASUH3QdMNK2oAWyfCrWaW4m7EGmk9J2TTGbpmuHarPHbUsRPiwyRY3cSrnWT2LeDdGWsxpEmbib5",
  "key18": "9NaguK5W4W1YcuLuRH43HPVuqgXyv6tg5m1FKKn5zoYuayDtA1w6V9jKyNyPjWo3TjwKdmbnMcWewTVWBitfcAE",
  "key19": "2sXnC54inPuxyt8AWo2ESZkc2KkffVhuuX92z8xhYW6iiZ2tdAuA9EHUy6B1gRPQMmfpAvJWEt4hYX4VyQ6nYvFX",
  "key20": "2jVLgfJB4e6vQgW4rwrp47wKoG79vQ2bhwujJk2s2AZZxPcTRqVevx6nfvUHLq3B5XMnCJQkEBaekvdiAoTPqTtD",
  "key21": "4uLS3B4mkVWE6UWdBCn5HUinoK4YCXdzdZrU9xMZMvqsvhLRn5qTw9SaPtKqtsd6hhpKCnuYxt59kG1oDxEWXwMQ",
  "key22": "5rLa5thghimBHvooQSrR3RJcEZo33qpEgWtsMWHM9kvdtHugaVHdHbLPzeTpVsHy3m2miriCE5D1sbt3btHbemUQ",
  "key23": "4QQeK8SQC1XNDSHo2fKhZ9htTqmZCGRjCfmnKxmLrBYiTziFYKUJofDG7hqvrNyMC9QhknqBPLzDxKpHw7ty9PBE",
  "key24": "4dwmon2AnUxAf7zjdJp9HMg1kS295qVrLbVP8tJgCPtQJ938oHgVPALpD3Ys81utsMzdS5MvMTfDxw8AnRh55tBL",
  "key25": "4Hr5ZJME6A6VkUSb45K1jvgKiZT6MHqcsf99zhND7xQx4dsi6KgCwRXgdZc1koGpKbiJYm8WRSSwXiHBT5vjQz4S",
  "key26": "3ZTpmSGg7rTsriPS3Lqy9mTBCfuUro5R4ghdApmEWeqrnhvpripu9tff21fMDjpdUhzmAirdQTbT7ZTGwkmTa4gS",
  "key27": "zaq8mVe7KgsV4qNC1paT1Ah6DQnZg2u35mgwXXfPcJhm3aKMMCWHJPSQadBrUBSCga4rcGraT86D5JUM9FhMUtr",
  "key28": "64BXfJBsWrGcDtKH9CmqUFLgHH8RQMsrAsmVxoHGZLWb1eatVsedyW3E1sCg67jpaSuhcyH7pJ6tcWLdhStvp2dH",
  "key29": "49UFtEt3JUrfkD2JSTc2MnecEaxgQAkKeZBVzd5FcnohZ9Q4CkxU9NGnukZr7CEVYncN1UgofNhtVirVs6kdThM6",
  "key30": "3HG4wY66ozgcwhF6GG6KRsTtp1Fz4RxPHUKsTWJoBc2YqsjypGeUMtHkN7aSdzHUs6Et3c5q6HbtpjP1tq5Rdwwb",
  "key31": "J2eoQ3WWBL5AD7jTLA8mso1SNcV1qu9PiCm6JDSjWGfGaFuV9m8EKZw7j3myBRcCag3ovc5ZBy7WpDKuBbXBQ22"
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
