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
    "JKFbqtH4z8jEF5uZECan9m8TaPWbdgvpQLTsH2QuBuqfyxq8aFc2YBBhS3xrRA8uDNrkoEsQ3iyDC541YH1uVm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31DxzwXX7Tidd3B5dxDKovNuwv7VVL2nbifcwuRKhAN25zXhrjTa5HJvFMxXuUrABkLppJtNcK2hre5Dk5nnzwcY",
  "key1": "5TxpPszefToZhnkVxBweDrtkSrs3caP9dwVcvVAncobqQpX2Qc76v2eRyNprxdmF14P3pHrnexmDcPhrpY5BRjZw",
  "key2": "VcPpQrJwC86gQFAVZci5NKbPtJkuiqtgDkAXZ7zJxynSmxcPPgqWaDA257phGF1SKn3Ekk38z3KUjxKJtsoyj3Z",
  "key3": "KMTSwR18msiTvDqJfYtyQLaCM1G6LGmWRG8eXDavG6u1aKV5JTP2yseKeABZZk6XGZsRB9a33XxA6wzsgztNUdj",
  "key4": "3cehqfj2ALsW956scjmcPM5SfAWxvKReacaJEeD1HBwszjHdQHGY7Zoz23h9g6TvW3Yuod8DVrRuKVD4i4aXodbi",
  "key5": "4wDNCBFQ4snR9ihGqswyrCRGEarsZ4PPX9pboDZpqj2jHPuTSXkjvoCKSipgGdmxW8EBqStgjmG7xAgstTUK8ZYi",
  "key6": "YNbGCpjFBDXfnxtsLTN4zyeuecHCdT1bQGNmk72PeVdgQaywRdjK7UVo6HtpezgrRZ1iihhfJHT664kU7kuVGwj",
  "key7": "3C3wVZ5LirnSFDgNhqxYi1Grxa5SnWFGu86qrftbaRkSCdf568DZvS3QK29JqCNJqvLfa5HQe2xHjvcbG7gaPZwR",
  "key8": "3EnaHrZfnTN69htGYf11hJNjuyaL7TkCNjXFKABTSuckEG5twc1ZW7qSaZcKNwNoDVrXK6tHGiueLH7DYqYQUTNg",
  "key9": "2xPe5tqodApxtF27ErqLBxTdcNTLBZWfMnuygVL3ebXBtDW1Bf8H3JLALNjLKiC6t1obwzaKMc7L7XbtmSCbvRaa",
  "key10": "5coSipYbWEn95vX7244RSJgzYEVzRB3YnaN6aQwxqBME4a4M9K6CJFqAYYBRfRZy6QRaQbHT5LMApnhfgEqBkdae",
  "key11": "2bvWEfuRJ7WhqErLC59d51bHzTS952y15Y8r97SR4zQMkuZudtmvqnMd7Tnaa3m34PZobEx2UJ8EUq9wbESLwZLp",
  "key12": "4WuRPFYQPHgMj1DsqMW2YZjuV9vdpe2saeNo3PLZTygHqXxccncdHfBfTwHDfXzUm8iowC8wHxbHjeLXyhUtoxYW",
  "key13": "2ETJjfiJiQGejx2C9yMKekSMK9HbkiJzG55WbcVBc5Pq3MDaYBDp2ot7RrdBhJyGmQ8GK489mcfeKRZFocc95Yk3",
  "key14": "3ygaoTtn9JP7RFreranPUh4FcYDiT5UHC8uUWe8fyuYuDqiAY6EcL5nmQchqDFJJXLXkUwZs5aU6KaMb8ABSjPdb",
  "key15": "3L3jVFbDH6PTLbkYLE3vBUPo2kCAUGShiBadxRzTXd13QBsBQ7Mff5v1CpNJR91tqvWkSRiks8DoaYtsUK5yoVLQ",
  "key16": "3i1sPtonw5XtwTbPPKsSnmHLZuy3161B47E6JnJuF4myZpWywd9btUrvLy1scxKBHBNJoxCgerDMMHCtBn6Be5ma",
  "key17": "uFUvN97d9krtA4YVZWqeoZWUSrgBnfv2Q4zzNXDQnnE66oR74tnszVweTy4VAYiV9pfWrPgwGxCRHqdUJejBnZo",
  "key18": "5XweizEQKaSgiCCL2scmkcYi3mNwBEzhwz7Qo4t581Zpo4jYM3M3FXbN2RdR1iYGyuxTE5UhFiw8ReHzH9auu2T1",
  "key19": "3bL7rteuoGLkmmm7yrL9iKiGav2iYDKSgijN3bLnWPRYaZ3kVAQ7wgmafmKyCUPvTLamqdLMoruHrRyyQEpvRYBJ",
  "key20": "4Rkw6S4nzUM9PFmMLYfwRKuSpfB63XeeJsEu5bFD4EMBxDqgm3tjFdaEwqVneWHwt4bV5Q3KnfRhJPnZX1zrQzCL",
  "key21": "35H1PPk9KoaMopFTYZ632EegTGMw2q8ofusyaQPkyZCqhpKChXJe94nfDgNxZWkFrD85zKQh7ikzqmwu7igpk7tL",
  "key22": "4kiJjba6RDMegyvr3y9pip1bF6MpiwYfVLKLysXdBnPpsYP37EjznxDmANhF6DrDxwaPbT2cLkEkAwbYqWZugtwA",
  "key23": "4wUFjZbzKEp6ykbLWEznFmzzBUNwqQjpjn9iuv1z9S6Bf98Ktzcc445fraQ9ekyEEEsT78ouduMRY6dR5pr4ckcu",
  "key24": "3fiDMUVNwvfTmFHAqLkP3zTrzNtPQxAAeZNmgZzba8esn7EQvBquENSpRkmbZ25fXDzkpHyhPip5L2Z4qmct2Udx",
  "key25": "2wkCGtKyWvkze9sRfrvhVRksefAB48H2T97S2enNtLKebJnrzV1oYQuJMFYCgsnWuGPDzVxuiop1VZmAJCYmHerk",
  "key26": "2gVWs32VHmQGFV3ZBGBBytXwKvQToLxxw5WLXvPGEAknx1URgtK4zZqUFcCnPZqsxvjNhEarPwLXxFrTXshyBCoL",
  "key27": "3PU4k5bZQ4KP8oj31k3hBjssdUQgUktt1wy7nNzaZEFi1St5wFVHybKxHXtpyMPAmBByAZwTJ9MtsvitHSZ13RvW",
  "key28": "PyKZNK2Td7h1JvpZ6rKFo15PjW39aM3Y8aMjigifJaT95RkKdKkYDpo4bjLhhN3RetX69fj3zs12JuzXQWbDxjZ",
  "key29": "5Cp67gTphUa8pgTs5zwST52st9nv1cXdDXLSMTSUZdBCVKrQnqozkhqzsqkN2krjTYVUEedaMx3m7FbiV3T9mWWe",
  "key30": "2cMDNLqodXNbKRP2MkREvwCyqWgRfn6hS21PqZkXcHU58ySRqnpBnjwAgpcTY2xYD5KMYsjk79r6edcR1UgtisE2",
  "key31": "jCyZrcGy28ssgvUcb8giQn9wBeNGLA6yaPYqEGHsaityCZktz7uYrnHwXa2xQWejKwNLoZ2SzNLHDeQb9eF3tyZ",
  "key32": "AQd3pUo27vEZs9CxSGUSA8hnrZfjhijiuE6tWod6kQBqmUNHJuzCb5CYhRaogkfmoyqQu4a5orJBZb7x84rsb7i",
  "key33": "3GmPEMWAMSgBHTLBcqfdiypA52rHj22dUNQdTkVv3AUupnZeBX4jBEQQBtSXGu34zHARdbNo88n64Ct1WpPGFeNt",
  "key34": "3HEojDZo2SkfaWwcFF2cUgvesRregR8ttvCF9xuapGJH7HpFnEiwtAD66iRq5N6wBt2w1LsmHLZYrsScJn4xamuu"
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
