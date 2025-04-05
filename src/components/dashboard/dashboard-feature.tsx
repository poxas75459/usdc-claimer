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
    "5qjZE7xTv7PvKrjjPBu7SsAMKoieC8cQ4tB2Xp7rLay8tq39z5KUraxqv2po5Zc8DFiprBGwNoeVSG54D1xAJywY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pxgiDiJQN4ysiT1RRwSPgm7MEYk2KEqxYSdMptDJ61wxZZfr7Dh2SPwvj3Bjj9PcSYjqv7y4SAEQMj3pDRwGare",
  "key1": "hvnsYS92FfhKtSZTqMNx8qxKo7GcwfacYEg7ce92LE9rrc6s7AFvQ1yCU2Kp8NU15nJZ8mLfsy7MmRTY7M9oYaH",
  "key2": "2kUF98pb4HPCPdPcKK3P3MuVsxMS93z7dG7rAwbTgzwBvgaXe6GaAA9dwAd73SYCNqMgD9PAhmSiJk2juwEHLtxk",
  "key3": "ejYDw4SCFPsXcT1vWkbpBDP7vvMpbMQs2Brrbo5nb3Rs2L6ACuLExE2Tu16intQv6R49pmDtSf1bfzc6rmJg1wc",
  "key4": "45g8zQDrXnbJ2YPnTtg6nZTTUnEh54AGmdWsNkEA8YkoXJJdxc2S4y6qici29NRGhBPnWQRz47ssJQkzB486eP4u",
  "key5": "4GpSUPfDmLUk25X8qgTQmZB35UYyM8hamFAhWbayBodBoenp7wFMHcJJSeN1giQq5ttPE76s4aTYZKQm4TRmQvGB",
  "key6": "5TQFBqJ7xiKX1iyrMVYJ7SDNC9bhd3Ad4t1sGWXak5ojJ8YhZUu8i74bASTSqdChwgCYo6c6zbGYLtmWepBo9gzh",
  "key7": "5aQBQdbHasnMYMxcgJsj67AKH1nbtvnTXip1MtsF296y4XL9Udmv6V8FjBGxRgzv4uXH9F751qpTegsWpHjqxLsi",
  "key8": "8fyfzaTco7ce9vz5e1UPD1HQ7AyzC5vyLpXN9EsndoAzqegDuWmsv16bTMMMxEeszUmE1QygoskfpJ2NjQLXYBt",
  "key9": "33SbxCqWa4EDCTjdvALnbjWim56xFvrb2CFYKbiS1LNe82ror5q9vYCKJyxVR1R5oMckmWTfcv4bb5jfkRKxzuEW",
  "key10": "2YTMk9KDs3C3VmYR23D2zqE8gpVcVxGKwT349zighYmiuLWCVbtA52Dr9Ui3ceYzaFkJ93DEGXy9ibyLkkg26sC8",
  "key11": "4JJZg8mu7jbLcRKby5spE8u569WtUi6XEWAco1wD8vZhi3p2Zw58WFv5EbueBn3fNUcFyXgfsYWxo1G853fbhPV1",
  "key12": "5oYEBu7KhTk371q3k84e8XNNgVVZs6UKBinS8Dqqx7bL1Ahqa1R4TsvUVvTuszhcUp5a1q3HKFpkCPa7UcYjc59q",
  "key13": "4sZ3tYPPoqvWErHv52ngnSCeXvapbNpf5zK2xe2H5vjWKJRY5Kd8ScbDuDDqosx1tqYz1UcNfHrqTn3s9jJSuyAm",
  "key14": "4Yn253wvQbGwaJ1CszmykJk7PsmoCmp9u3zJaKJx8Z6M3c6PMbsUAaRCaypZiNUuANWV3tYb9GSbZjXvBJGLoSov",
  "key15": "3g8rp4DZGnsA2nNMNR7YCZyCVwVjp7p67bi8bSx4gVANwKAEzoBSW18KD6EZS9AGcC3SEodBkzfhif7buXRUJz5Z",
  "key16": "a4V1M99Jfzwh2LX4FrPp5w53s1PbuXftjVGcHrtQU6HAyNBG11Tyk9a7Vxa2fnD1Zm5g7T9C56634ib6isBz4oH",
  "key17": "DoNMLPg2fku3wwJQy2nfw7yYS2BWcRxJDatFLBsogLufyUX41r1gZ1pK85gueX21oz99gQDdenP7Nq5NAkB7QFF",
  "key18": "5hmb9C3AkdzSvZPEGWBsWKVZQuWaeXZPFUJMdoY2YjnH5DvXJnQXbcFMUmMSKNt6RAAxGphesL1ptu7AM1UYzSyF",
  "key19": "4hH9SSCz1KECa56vvf9CkibAJuxerdbs6b56NTX8dNZccWVTYkAiugtsA2gNPHXbUuNvosV7Qdyx1AQ5pLoRxGDy",
  "key20": "2FuFFNoiR8sSZNfZcpxeZWGMLUKUubwNN38KeJXcuzSjqvLvZx9tiPzq3ER61p39GYPWVyQRUNyofHXFUTDZ7jPK",
  "key21": "5JxkpsxaEivwae3KM4sV9k5EuiL4Ne9W5xXJBE2zEzTRJmnzqYSAG5iVf3g7uKwMr1wJtLiL5RKsVf6S7hTgAQPf",
  "key22": "4dqpJSxGndfRLAN2RXpPcHMStcXhjfEEJyyaRcdAwehLH5jn2ZM5RtViNFSVwbKFKmVmjJ5fKgEkJtvpeRrZjfp6",
  "key23": "EVFLq9Q9Doka2gCHXaibNdWgXi9Dc2zgb1cLp6tziddjATWzX2EHF5N4kJBqRyxhpLogXi4kKTMe2YXqMEHjEUq",
  "key24": "5jphTsw57Ug4zMgA7o15gqtCQx4tEXCjh5LrivP9S6KpXUTfee3Kp8p9UqB4coCXGxcmtzHopfH4yYLJyiDaRFmS",
  "key25": "52J2ZwK3jCRrY4Ujuhz4Z5HHJ6ptUG88dbQXeCy9ZhQtuMnpW9m8FmqBZowzPf95fg9m6iQQ5n1UQR3UpGvgaaw7",
  "key26": "wtaw4uLAxmKzaopiEwzyBfs4223kng1EMXyY9o8EfqyZuhxaaUM2evrSKfPCCWAApq6zsLxAN5rbLz9DuzUQTX1",
  "key27": "5JfLkrMoi4Ki9gCevTmFANZQvyQhDRrhxxhDnget7MUU1kJhuKbpZThkPCD4GEt9wBQgeBT9ismW6ZTwsPwWmTxK",
  "key28": "4fFhWuDNZZJ4mWoEJkhQVBdoNLfXN5bxWCm2kTLEK9w1xJpKF8xQLFs8SzRG45T2fajByH7kjqkJBiHJ7i8vQocf",
  "key29": "3uJqqX3VKa9SUi7a1EzGKphmjjvPSXK4HRW4mvnL4Zzw95zHxKHqSAaT4XPjbnU6wcQP9nNNjwg6vVoXQrfgWQdv",
  "key30": "226VMCNU22VKxq9qR3EkEPN4Cnjbu2u3nRt9HoBWtqWb92xzxa16S3nTjYhakKehQng5f75sfwKM31Nr9QzFYX3g",
  "key31": "4uUFrWTkukjApLnFCHLwjEXhufJHd7NScwBgzjYmM1ArcTu3Ngv5soFCW98xQR34MdpF4hFXPSWyyeDSp38UF5f7",
  "key32": "67WjDxTyS1JbjZdPJNtdmnTg5AYjMm3sV67UrQ1K382BZoPeqrLpT6jhrTS24mccDg5Rq5BqxrM6MrFw6fAiGVqi"
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
