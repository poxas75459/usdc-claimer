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
    "5c7K6GVsMNx98B4nysRZYCV35pF5DoSsgkhZofcwmE24xxDUHg5wE1SXjcEEwRnZ4ZGbshfF16h6TfWFg9umKFVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V6f3Ke97hm9aZaZLgLHV84wEqauWrLv5ifxDEFAv14GTdm2MfLUFoSCmFQUk2V6NWpCwftC7DdrJwct7AWAdoB7",
  "key1": "4sJZrr3r81gUYR7rPZQxcVvVkoEtEwx78KY8KAyuXyhDq6SYBATCM6dLN3nSV9eVSboNpxkddyaVVwMdfCbPvSVX",
  "key2": "25E9ra1V5j81uhX5eWECsN9yJnWAPLrCmrE5ywFUdodv7JdMF87fx8vBGo74Ysq4KdzD5q5FbkUzDjngbvvMCRv8",
  "key3": "B2inVyYRVKQHB363aXPauSdAKT7FF7PiT4PacWtaVpS6kircfkwxnwbxSSswaH1J9Ss8EugimPSAf6Qtdb9aH4i",
  "key4": "2xjmUhbw9TKXvvkSZZyfwPPWdU5fbiAMosDVb7nebrzxKkpNtBF3fDs1hvSfdek632NmT8qWYHNRQkDC7RtqxaJ8",
  "key5": "3DSBwQyvRfoc8QGzVR8tFo6ZxfCpVjXRGo4DYr47Y5ckf6zbJuW44VbkAQ2bk1Gnh7QbUCekRT4TfXndyHvQeJG",
  "key6": "2sijk6wHu4YY2jr1aX4NPuv4iywRUdg7XXgxYfkUQNymLVSQ7qGJ6Lam4Sy62NgcfXPaUDufcE277unnGfHc346B",
  "key7": "cXuwBUBqPxmALqv9aSdbF7JEUxGZtvC2eZ2M6Six5mFyt4kURmigmfyMAwKPKw9m7EDTbraN3wrtXHqNho1UiaM",
  "key8": "2i2UkuQRnoyMgi5N8hcPfQsVTv1KSaPcA4GPVBozqWzGdDS9yE3jDpsHZstW7KfxBAfWHb9s9Ao1X228AyRdcRyD",
  "key9": "2RXXCVBYTqpkSRRr9aDUhiWNDbG1M1sjZqymskQYMDFtbv6z1dqChuXARWPujkpFUvDcFT9qY8mVLGD6W3urvygo",
  "key10": "hJxgjPksxBe4hxJoCqgcxvrDvygLMRjmuKwLsdLknAf2aAmqDoWQbBVvHe2WN5PQPgJXNgJow2ECQPpEncRURMx",
  "key11": "4g9F47Ra1GcKzWS8XkCXT4EnRENMPJTTqcX7QK4NVZH6LAjVRgJGJGA2oXGkpj7iEHHgtD69UxFCz3ZKz46x2PEY",
  "key12": "31yRz7S9wyiDgkSFTtQQHYwepAAgEgr27nEkeak2hXKRBrbS2up6pDgaZkNpF81ZSo8f3eYmXcq2FoSixUyepVwG",
  "key13": "oVDyFM3bQToVcqme2vJh8A8iaezDxvtpqmcKMmTNWRtjXgaAg5V8XQuug4CjkJTT3uFjMwtUf1fpumCdbBDAkqZ",
  "key14": "33ScBQ95QGMzQW4GtnnFJvaErngixaETVmkBw8mnQcov5A1S5ELRFb8Eiv86YTqZ19hvikW37yWEbxhunpbHHGYg",
  "key15": "5s8PmbGnJ3tWBTsa1ATw61CAvG4utYM2Fhuv5WmupB938CVgKbJUBGvCMd8cek1AwjmA8VigNv5qYcKGyuNCe8T2",
  "key16": "4tQHdynzbRRquSaZkz2N8NgSeEmTfXwfUj5RnzTxJdTZyhN5wWKYtvQPXXsUSAGWYBeUqQksZR4etBXzsXSv2FBv",
  "key17": "3HXjPhEFiFCCDbpegLmUvXJF5dCoD5hL5zRowCsAk5mpdNGcrCcJanAQZLeeaokecTYqZ5cjeMaBCm6EurKu1spn",
  "key18": "RfF5J8xQSMYj9DemvrYeB6HkgJA8riY5B3qywqRfddPqwYGXMbnJRX9dRUGystSPuBtYpEVhnKMksHKDGwFPeEg",
  "key19": "2wWUuqmckyqnPX7MzNsFWuqrC19wkFcaBvmzZ6u1bpYcBkBmqd6TQhaTXJkLVRr1NDf47971zMENuzLmpVfSbQvR",
  "key20": "mjEgPb7uEzSxAh7NNbVeuPwctmDq6UKaXkS1t9GL2v3twQ8gSn8NgynRTbYbYGS9wXU7c5bewkwhkBGW88maKiT",
  "key21": "3KYmggcGj17FDzSWnkN4ymCjqRyuGA4sGRLxzUiFUBJJRY3fo7ikApdmwiB5YjJJRLVDTg4zD5iQA9qPm78mJRkJ",
  "key22": "67YJ2jDTfkZReM3EVHe27HMc7UC1XDJPeDA8iZPZ2vWVj1WhDXYw7HjgipdgSxdFdB4TqX8y42TpQfPZCkELXmcH",
  "key23": "4YywVUbFKC1EbHomYo6jmjgNm9KvhJ3XCDQfeddXDR26PSeS3vztkFRhqQLTq5B9e9xi4oipejw3qz4HgYHU355j",
  "key24": "4PEgQnfsBKLeJAw2ewRz1gfyLxx5tL2qdQZ9uEBUKamVRP57sK4mfDx725USDtjwxke34s3rnroDnuAzFPBaD2wi",
  "key25": "5eqNiP6tknpkj1CLnftc68oS9HwqsZ6tcF9JG5j11PeqGCkCFzr5ahiuUnEjt4uYNKRFiz23xsuGtd5R8rtERnFU",
  "key26": "26JWnDJi9srL91YYt2zp5fzd37EoT9Czd2LvGf9mvFVcC83Dg1V14VHyB3G1NKt1iFVdo98P1bcLG7dLuZY6m5Ao",
  "key27": "2wn1iwzpxnk8XX2E7igs4ufurhWm52mgqffjhwQKktfRZyns8HsUugFVKQzoiCbM2865FXW77cMeiBfaeSEeugwJ",
  "key28": "4EHEmMQ77qtxNZdwvzbXLzTkhrG7nEGQvoZW14hqXgZfjn1fK2TbXonqs3BhZtiZLAjygbrtwcUbLxBCJZSPcg8U",
  "key29": "48ZJwu4m3kyfRreszzDbBbdinprkdKwJwaggwjzen5wZYQw7rdqEWj4wrTJAgbpVPrK1qrWdBmSFFkjdVBBaQoGz",
  "key30": "2FH49ExDQYQtHFWWNV6zBZrJgESxBdmEpTskUs37viVwhRUraPP1s6RGhVgPCP2TBve1nYFagcey5MEomJXVCXKw",
  "key31": "3DsRrmPgLnW52ymrF2R9BzCSzeDBM9oJzq1aEmeo7W9LGceNhgvy8qQwbFxyiTzZKZqQ6tgkkS59kSexKqkEEGfg",
  "key32": "52vaW7NTHWa5W5wMARxPqa2ksX7ymfqa8tkYMpcpsDLEXh7q4qq8HWsp55SLwniUFjhaD761aDJNm21dDnTNQ2q2",
  "key33": "3HT3BRJ7TpGCMq4ah6N7gYv1oZ1RjTJBk36JCLjmu5YfTzgmDSnHxnYX3CbMcMe5hRFwT47pabxSv4kdhfLcEs7E",
  "key34": "5Aezb9gAqY7zRw1CLjKLHRCvaz36tbMVib2SwGms2o8iGrsSg9Y1MhkEy2dGZxCmBiUTRTi2Pemyoj1L2ZYzoBsj"
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
