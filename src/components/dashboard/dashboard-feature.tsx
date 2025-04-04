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
    "5yg8fuTCsZHVpf7A8ZxdQncuT8ooaKo9ZtsuDLQWX82XnB1cPe1oGc57LRZzz4vJtkScfgZ8Ams5A8r5HeHc3xvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PCmcdSQ2DMg1CvQ9w8FF5pH1TtvXVWX3wUm8Dt81hPfjWTnD4j9gGP12MNpj9HDQoJhGdDnTxxRHg8GEabU6edm",
  "key1": "5WQHojCBd5r5Qjao51apxDTPtQ6YeqSz9BYY9ixDhLEU5b6AsBtxBttmsNJziWcZQm3Wrr61X73qjKczaBZCP4T8",
  "key2": "2PCZQTUuGF2ZZH9yEU3Ff8Z6U2BWMgS6KnSsLLd42vWWRcoHm4i66yUJyXGBQqNrfAqprrNcKcon9mJybVLgWqwT",
  "key3": "2MZmVfmHzto559t5hMLuC1jWQ9RpedYPYr1g1C4tmKLgCRb8rECDuLVY54gNHLHejeThKLP3c6nf1XiPrTmb1R7P",
  "key4": "23bPdNdsUz75jauDoPLWea4WKauoHXH7NV8VAk4NdzJuf9FmuAkfURBmqcLUz12f9AmD8Yhq4otSfHFyWkApmipE",
  "key5": "3JzZJMGuzd3ddNAa5UTF2iJnCJc9Bhvo74Kd9ECiq7mq2ydbYhApjws7E3HgnrASRJGxU7bAzYgcqQmXBeeEqECP",
  "key6": "4tcW9twDeuSNq5tYbhG5bRCB6Tj7ntepWMJPia8ttgLwAbJSo1UyNuZwkw53cf1E5ioJj45frUL34fh7qwMJXzMa",
  "key7": "tHa5V72NufS2HWPdqzZNALeHxGSFcgjy1waTm4gVSGSVAih2dBnJhntJMNgV2mXkGgVhKB9YzA5Aita7m5c2nk3",
  "key8": "2rCy1RzCDFKaSJbuBhGp3yUsGEbN1h79N4GNX4aGFxhNctpqWixiFNXneaSiaPovm7kTJXDwxcdxsH8rj727vVgr",
  "key9": "3tfAVSa4GKCusf5kTEP1Ad2WcWaUvFSF8zLSomWQVYjUKtm69qzfEkmfCgPzX7Cex3m3ueU43XTsYDBTf7NctBfK",
  "key10": "5VdQy8GS9jGR68wDze5G5eXyosXSRbppfWD6XfA68UTKrD4QJ2hiJgZVH4SudhDzQ2WhWoMV4rGDRTZ1aa3gHqkF",
  "key11": "4u73xokhN18ekBMLxJ8zKmtosGp9UUn9mp7mcMmBSMVsewUCXQ6SNB4vTB9WJHdsoR9iNcVUSh5VB9dGGxUMiqre",
  "key12": "2WHvseSASvmkL1pt7EQGo5pPSgEvhqEHVVmauc3Y5Utzty2jcCzFV8rqWbYFiFLg3PrHiEcpZ4qDMD1mWmV14bA7",
  "key13": "5FcFcq6hZvpa9tcjtb3sPXskkpXWU2VT1fi6Rxwq71aVm66EMrjk7mrzPkQps7btJYS5MEp4v84xzEK4SWfpRaaF",
  "key14": "2CaHjAPoFAX1VtWB7K54XFPVzNDUQrPDTeMyt7wKjHF2rQFTgnztM1nULwTgKLtzUZwrQqZE5B9hU4vqNndyyr8y",
  "key15": "2LdbUi58SV5hJB2RTw2EAEWJMoRGj9gXksFUUfpR3V6EVV8Qz1tYHWVGRAmzs9KSqaMvbn6r7QqNK74yXSSEjSzo",
  "key16": "3hJ5ZKwr65mXfNxaxaDSYJriM12eFxh9gSc7bpu2MZ5DzBfXrG723zCgxfpaV7KzdUUdKSBq5qBgvp1mW7YPmCkY",
  "key17": "48cv9X5PyzhS9NPNPD5HweRsoPDFtbrm23L6nDq1XBJqUMQnb7xYuyb482SJptiWJt5o2KXCKw3MAjvJXaaiUSFw",
  "key18": "2HXRbL7pdifvkziDBM8kH2WQABJLUJpqvGmNcSvfE8rx3sdHyMz6VwF8cchBP52ZtUz2kaMNVFXzdXai5dKthoAk",
  "key19": "Bo8bH8CEH8JuAaTKQPjQhtaHFfEKd2JaPf3Nqgd5JHGar4YsE9vWNuqJ38nro7Ex2YRxyX5fJ7cBzhC4mUUC3Yw",
  "key20": "3Y9oLsmtog8riJtfStMMkJNiikxWTpi5vJ8cKu4uRg6WuM1nw1HctxnwpJh8dZdyt4bL8hbGgxyDDhBXWSpDBET3",
  "key21": "4G2HdeZ91Ru6k9YkCiU6QH1Xg9JT9QKKC4cyvZUqV5aTXgYD2atRSzzwbCh3TZbMEFw9v4XWYeWE6h9SopcJ28pH",
  "key22": "3FVwgT84iV4Yvq8zadmuJJoBgR5GfSjw3hgFt5gxMs22j8wGykSKCdVZ5Notd26omRfzTcsj1YLVKz3tgDj8aEhW",
  "key23": "2no2BL2EH6rCTcxDAdeLXSAkTTtJj9N9R9w55cNGtuo9HZoo7Dd77DZnjPXu1vFt4mZFMYHawFNQTPRHUrFRzm96",
  "key24": "518m16JutxaxDeM4WGfZcUp6JWS8x6asWZTWvhvQQyMpTSoMRyWCQxd7zeZRXqGmJNXQsr2VWcqLvwdCWPqr8Gcd",
  "key25": "5grYB1cMCvBskDHVfomBqPJDirjJzenGALJUrpFVLykTjhTasFVT9P86KmNDP2d7W6h4rqo2dzfoDMLsMZrUhLW7"
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
