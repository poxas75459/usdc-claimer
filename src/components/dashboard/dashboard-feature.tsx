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
    "cJMLNuhwyvUdtCThfWQiXKuGyv8T4VubVcAKDiV5eWXQdJ8BqzdZTgDiRMgUdREdJMQde2UUSYpuEm4jiesaoSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qkMo8GxPsgfXoYufFLAL5cDf3wDpo7k29BcPwsgSYYzQqM28yGYMYxfPudYyjhyHYczfJEcBUKirSbf5EieeU9L",
  "key1": "3AUrJi8r7uM51GK1F8g5pLA4qpGWdbCoP73fswWBU1GYHRM53dTSwCgm9dMU7DLTLHGPNDr5Yu9JJjfKf1F8gozD",
  "key2": "5N2yuSDYT7u6HDfnKcFM8fW6AtytuXWZaGZaD6FVj2C5oXACpAKeV4hYYAjvk4UkYJGdgoWzs7JyQTu32mhn19gF",
  "key3": "vZdXCPT5BCXpWLvaLdDbq3MuqYKt4Ap3opckdBdMeooJsdJ77ntBTb5WFpXnMLKdni7PdAZF1YBUTW39VDxF2ry",
  "key4": "33pPT9M44KRQSbWEYXCeY6qqu1zsj8HVkr5HikNq9eU8yD64CvqssMKmXddHKdedZYEZTEoswZLD1d5npNZqJrPR",
  "key5": "DgokDQCiC41AWY8REFh2qrokwE2wALfMUciv1SrVZaNSB652AZLNMZnHuKyHRUzZ2YdHqXYfJuUWetUQBpNates",
  "key6": "tSpxNuWrBG3bahg1GWGNaoB6wHVQLA1LrTv5bwqxEErxKqW8s7M22ZMvcv4zyxfJQNVzQnH2mDgKZuQe9m38Zf2",
  "key7": "4uvQSPz3P8Heq2DWpnAyLmN3XyKMfXR3NCnPhaimQwCDX13ZkAjXoFm1yLkyCbbmWaa3vi9Wgj6krSyc1UED4W4d",
  "key8": "66VW2pnDmcjDXFdqyCGcXEKk8MFBnkhmTi2szHjA2YrVaJgwkv6Whwrx5W7D1qeCJTonj78xdt4ntTGDk3GWduQ4",
  "key9": "66jrfstTvVtfTLQLVr3MuThjdKTtMGNkwJx3KjLqa88KmdESmYwhgTmi8ZHWFxj7SSK7m1AMZYFfzhHLyvqaZzGC",
  "key10": "3yzZtcFij9mrnGvgYtZzPAeVukfKfCtZxtcVeGiceFRD5DySuqFZpqB6CEkt4fHbuww3nJG6EPZsH7pAxz6TqhkB",
  "key11": "2eL6bT1522EcoAoN3KMPqyshPuJ1tY7Xr12QKHT6bf8pVeTN8ipaFCo8JMNXuRnEyVGh9KsdgzGvYc8X4zNKwYt1",
  "key12": "459K5eYZCSkNQbfFMW6PAEhhbqU1AdSpR2TJ62q8hkw3E8vrbQxmCKG2f1C4etkKGkzDUPZizM8A22LCUM2bab71",
  "key13": "t8fFzBy7ZHPjcYtTDicBt6ncPLcdPLJLD5utzLjUWDLauQZPg2QVGGLTxy5ke8SPSpXmH2b3PSm78vhWV6AKtqC",
  "key14": "3qiBEVA1gUb8TrMrBqWBoz6q5DLPPrXYvqunT8PZcjc1jTmByu9iWbiDSrDyU12EEGt3WauzD7RW169Xt42s16nH",
  "key15": "by9Y6jPSLx6iBTQZBRdNZbHpg6vi6id1JmxtbGs7RxR3LB36v8TtZHocMUQrJzWF2tNmF5XoHyxfhpVerrJxtkc",
  "key16": "3HUdjuyw98hwkWFfLbx9KnBR7opF9T2FjzNvfBmfzSjwooMqqeT6moYVCcotMShm2x2a5LbtE3YDpWEHZVMpVNV2",
  "key17": "tCSyCZa1etxHH7DVmU87NTs1MuHFfvdPDCDNDDkakDBk7RN4t9WyimvPZevdntGrdGC3wQXM7cAwFeeUobxYRcW",
  "key18": "VVfvguGUgVynNsxk1EWwRNLrcy57tffJNgx9iU6cQu6X7PMsaRjjtwwt2p2b5zTDSdbzW3f3EcG2z8T44CzCevR",
  "key19": "3eijYrRfJ9C21RUo8uAFMnYp5WJ3hooXFaiTEmxLNTLg57mPDvKtqi4HdsfCsvsoEXCQjFTR4EbxnbKoYcRuenTR",
  "key20": "4SXa3ADRJnAvsNJjojQHNCfUMuYZYUYczZdeq2jW5ztz1vYGeE3zkw4RYktLwLb9TXc4fLnQQUCZLNVt49ytiZq3",
  "key21": "2Vf91ojVi2nGi7Houzcsb48pfznyqPhZiM3yUNgQRBubXCJaxnj1mHyLcd6rMFGNS7LXQZheC93xbk1MDS3H7vGS",
  "key22": "4gimd4T6PqMZakZHue1tFMcwAASz6ivm8qE4tCBSsQTdDjeLbZmxZG3G59BVFoZwyReak96VxqGBojy4TMQP9nfX",
  "key23": "5mHzaBw5wFodwjCvtkmadsPtMT3X2K2jHD8DA4Wwh7u5DHx8KM4e1av5QsG5JLAL5N4yGaQZcAnJLpyy1sHR7Xkh",
  "key24": "29ZKAY4it6NBWQ1HM64Ufoa9vx6mRtCtnWeVTvEQgYPe9LpYj7VctbmxEpWZUqapN3H1iEPMQkvA3KWbGtDmjSvU",
  "key25": "3xoEPL71xZr9Dk8X6cg5tmT7aHyj1oNaBsHG9tMXgZ4jkQrzWBypwym3sU5EQECwkzmAVTskhWd5T2QFt7ETjKMT",
  "key26": "3aw72sM29ozhzLCR1t5brQ8Noz8xYMpCDm4wJ9rKb3QqyEGTBDQ2iXuiWLaZCzUtgy24BBHqgjMtSuejcQpcyePK",
  "key27": "2Nr9ZxmgcBY1hi5z78zimA5xZmGa6bR1xiGfRNGRxGahPjDBXDwJRnJRmpZu6acU59bEsPzZFWrJfph1AYJPBH2v",
  "key28": "4J6Hvmc8YsWVaMRAzXohBdcFXVjX4kmxoH6t9xV4Ho4fdXFs3CtGq7n1SYiQcdbskeaXRKDZq2FRrjZsuA2nRCkY",
  "key29": "swGrLuzAPJquAKMWcx6kaBEnzUfos9yt2B1B1wKPyv7E2NkbdWURt241WR3CGbHnQj5FixojwQ4vTEpHxeKdMzh",
  "key30": "5KRjjciQZKxFkKeoDXzsmy12GHVYk6TvT1SPGLStqgPvBrSNhxLzuJ1jLaFnn1zj38oVwh65yU8xFDAaKu9FCYVz",
  "key31": "32Y6aETEpYPX8dxPQAiFRALpCeFw24kXWnhCyXVKbpXbKXbKtwdTuks2XWRyjowSvNqY5LjZe68uGNcjQqzA6XoP",
  "key32": "4ZiZiRBwsAKhLKZRuAvdJX49obaTMoRHfeWPZ4AiYmqqJwtm8DBtf7SV5FxdnXzUoyYeMBiarKduuZ3qbjk2kUX3",
  "key33": "35n7KdW9jgPp5mxFbqvYaNwEUSAxHxdiDnJwdjYmKEzbTyT26WJYmLj3baLCXYG5aho2MLL2m1GvjuxzC42ajURW"
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
