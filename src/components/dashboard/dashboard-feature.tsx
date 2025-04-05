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
    "645hduSt45QpcoF1xXghem6zmgCSgzE4J1VB6Ukf6irpnTouEAy4h2kcsHVvY8qvwFtr6QMUdzpAqwcgEnmbBAXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bkeahmx39WaruMzG91zvU4Yp39bRkQk1yfaQ7yXmLvmcyF43E9dvuqEmqEAXro61gRwrYR58VVkBgApETP4Rqcb",
  "key1": "iKUamtBhPfumy7nFPLEa4jXS1W7tKQseU5ojdf7bxP6fvizj3KiunGgQCDc9LyMSMwEHMSgarS3VZoU6fTXoW4e",
  "key2": "3V8reWJzKaNYskyzdTWDPqewhB8FQGaK5zikBEPo1K6pehYS7YC3QxmKAmfR2RnYLBHXF7ymY9Mux2irnRGCeJPj",
  "key3": "2868RBHZxiairJW7CfPZcm3WrKC9S494TaFyiigAUDPffUUVuaqMWKA7rS635LYqDQFyx8xNAWPjGZY89HzxBKTM",
  "key4": "2v7aWevfEyAMKeGhHo9x6ENqKzaYUHF6tePvFXoT5vHs9ZhebKy91mWRCf7Zvcuz7BAyRd2rNCSZEkn7vacoTmCn",
  "key5": "4uDJDXmMqF8Wk7YVmJyrGo9M8FeACLtN6xecWWNuWBpuqYLZMpBJv4tEacNrBsZKW3tRHZ6NcinPMxyMmVYBEFQx",
  "key6": "367QWKiqJBDPPqTBhDnEMQAna8qddixCDrgx4TNQnEuXZg2V1xNrZZT3feQ6zVBqChS4Z5DPZTaBpn97G9YefnGn",
  "key7": "2fYh8EZgXSEAfY2hkJ9PKFVzEHJfAMgLz1cwtrFKaiRsZQ5jjs5wwyrpjVofVSWr57ctrwRbYUe1psbkgPdC2aKR",
  "key8": "35QAQWoYtK8ZXbW4o2WioFahDJHr4Aqo14Y8mqv2tvbgt5U4as1cmMUArFZvzofTRhZWQkG6xjJ1YM96gpgRjXdX",
  "key9": "c1A7KbpjFxyR9LzfFJYa9DzVoQLCwHaNwCf3fGxm7DT4wxBvqj5TobcRNqvxi9SYFanTtBVxqozGdFpzaJZzp3y",
  "key10": "3KmzmwctiYZ3tBpQMzTkK7qPXWgUTV6Gkge3Xp6r9i9GFadXwoHnLHHRyfNGDbkUpGUwnYJiLS8q5hMUr8TPGjud",
  "key11": "qTE7NBFzWMQ7Nn4ReAuzaHS5sRGfq2GYWFWPasvCtcCeiiZqGwwiCieT1nnUPj8Enqg9k7PM9nVbNpDEd2zyMpy",
  "key12": "3yHvajxwQRcs4ad7TYdCaJVzcqGsy9YZAAynSfSJeKWAeRsJ25cFJLPFDVFLy8Y4VodBY4NPBnEvKM3jNSt35mTr",
  "key13": "2eJPmLsPZXALnvBsoKUrysC5arpJf8qyLE9i6bN9uwfLak4EU9mFsKcyrRPd5XQrP7R4XvkLCRLCmZFBGjiKkSuM",
  "key14": "3GDnL8yYB8smJ45REzwR3RnfGESmXkdFKuoBPEoRcgiuFHUxcEfDgMAmSLr5XRwr4Hdg2War9tCzLmqMMg1MC79E",
  "key15": "3CS92cJKHgU4vPQ6VQaBWMAr4zmhQSKGpoZ2PwEZiHyUWsY8m22UvJFrD39GQ3AqhHFXoAk63d7STtDPYgNBEnkR",
  "key16": "2gc9Z59JxiYJRgrGDHjDCv1mJ2CWQvse1msH3yHxv7XGMtk5SCodobhuuestSxdz6HVvH28eBs44wzkKtNhs9KFs",
  "key17": "u39XQNmUNj5pCCjmQ473S8W4p1NR59p9CEBJYKjkTCmWCD2RR5ZN1o7iVBd7njrBPRoLDcT2ZSpu6unXk4FqbXc",
  "key18": "2wooZhaS7WuwAMLQmXRdqGeVYzFgKQMN9jzKNvLgD6W46XAeDoZDh8B6XUE9jz9JaM9HjmavthzCZMobd8pkj8zW",
  "key19": "HeHz3cVMQdWnkMxUa2LcR1HXTQZ89ybeSg3j5mqz5UVJXb4m7FjHJjW94nTK4tHRNQmTriLkV5f4Auo5KwKS6gr",
  "key20": "4mBgXN6gDh6PGb9WaqKXCfdTPnHes2yegLEUZoPwuhEPB7mnXozTaapvAj3gqnB4Q3nq7F939mfZTAF5kEC2hEwQ",
  "key21": "3gLEMUKW2FyhYe3pvLQirJZn3bPJDnzRXuQWD4ieuf8a4UTXCg6gv5AqztMvtzsi2jxstZxvNoEzyNX6RuP8QdU7",
  "key22": "dt1JFrB7UuF5xLKAv3PRu1RGzFwhnfRmVrWPE26UQ7nAQXZzdLHv5YhTZkPK1sd1YEn9NR5LC4KFsk1hogvMfyn",
  "key23": "4FHUV4XYbxi69PaNUKwQgdiP2wLuYCdXrVz7o9P8UDb7TmGy6indfMkjpsTFzqYXQkin7HxaHsx6H57rJdp46QYu",
  "key24": "4Z58Tpq2cYKQ5T9VLbMkkEpDmxyzcfWh8jUT7qkT2MbhdHwCkRP8gX3cHWCRJLgTVjArZtqhoMZqKGG6W2Ajnu5M",
  "key25": "5szasA5341RgU8rgRgMBbHA7QWfMyR31ZXa8VS22ftadc36suv2XiR1fHFzAR9nnxHysBNHvCmmgy6RibQxBsLSo"
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
