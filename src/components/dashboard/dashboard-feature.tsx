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
    "4dY3C5Rqow8UQDxGRsRSVLtXRXHA81KuSLbHkmPWnnwZY2XaNVtAfq3fCLNkWgbTUWEW2QWPa4HgnBQYSZSeemFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZkRQ78vEMxjAJWdcc39qNfGb1pNVrKEM5KPSZwftDjD9672rGPQbMpphgFwk3gze8rV2ujT2NeSfPHNxavZfScR",
  "key1": "3p3sRTpFs6iPF8zxh2LAvhnsgdnFV1cyxugeZDWNKj1xV6VKknHv5eKG2Dt9YWk5GPHEs7q1vK5KMjpwE7idon5C",
  "key2": "5o617xG5dXo6fBxzUsusVBYWtHhKTjHhQBTNz8TRLpZ9nbWKvVapCytKQk5L3XFgckKjzQ1M4x4V4SUno7V4tTY3",
  "key3": "49EiNrPe1Na9oqBjMugcYrHW87JAKG6r8nZQv84srDTc3RKxTqxe6k7pc2jc9hi2aiJYtvQmk9j95ipqiH1jnXkn",
  "key4": "4q4YvsvSiREUY9ct5Fmn6Un3SAmHu1q1TWga2ieJfBungwZYf65vmdSUF3NfDvVPpwBwtcnWbzzuH7wPpCtCQgqF",
  "key5": "E6c4urnZi6KQ3nqCdmezN54XE4zddunEQRnfT6Gf6XRs1biYRPUJFvFuPB7yJLXufbgQWyDunVpgJ9fjUF46S46",
  "key6": "58q1bYnDNhvnw3jNZCnU6tn5nSBPoB2YefkRXALvpDPWNc9LunUBCgo4ugNCAXwk1F2TyWMvzduHwmRq3EMAZstv",
  "key7": "5vYDRTaJLhBHGd39DBLPkBP5ZkG36EFEgGZTxP6VcckQ3hRX2UFThd9oq1LgRettEtZ7iNd9YgKV4fDGNkN83zbq",
  "key8": "4C72kSCJgRjPfk7QNd9vvbAX7Vn4CvizdmYM1rPRTC9kECTJX4Wn7B8itkDAgrfv36mMnFv39sRTPiVETB3PRwRq",
  "key9": "P8BroGepRLPyJowi19Lxin1JcdGK2oJSe1pEsZZ3aJZSeG7dsSY1r8zguD4RhcmFreUEKpkvcp8bprWfHwnVbXe",
  "key10": "2NTRmojPv4FYFYiajRCfXvcSPx5ywBLfKn3gCDjns4vEJKkru4UpcHDViTVU71AmJaEhmZndSHzP742fGETnaxi3",
  "key11": "eUSzZtYpGeYuPrW9DZWK8Ch25jzvZEYQAx55D6fNgcrHmsDGKJnUWnELFHWJmYJqBhF6dLiWUcVBejTMeyenYv8",
  "key12": "66JRafZDCgMXvPXwmZhgeQk5UHAzwWGfWRohN63y57seCreRhp9MezJnVKGeYegSLNNJeB7RdQbLbbjBN4qWFzbN",
  "key13": "24XaHBMtc6Bowru6wG3gpUhX2XcE1igwz1hH9nwS3txHBhGCrUvjy6mvg7jG5K9asYuQWpZXstMRCkgSnsNvr6kW",
  "key14": "5Jogi5j8xws2xSCyaKETWwVc49n7nVVP8jS6weH6Enr8x922sezfqEPfexNMnpu2qbpURrbyh6U3PfVwzg15osRv",
  "key15": "2vDy92hCGNiWm7xvMFbdZoi35uJH6sKPc4RfM1ZXmVEjaqw6YuJA4gEatXxE1YFbu1Vk8UD9CfuwGfnAzDcqMxT9",
  "key16": "BxYJMFMs2poz4fWcmHc417QCgsYvoekBUSsJZJD836Am2Yk9TzBcrQBdirsrbU2ernFGgh1jjB4paqcVFydRi1D",
  "key17": "4Z3WVzJ9BrqYYieSydE2GYYR6oVG5KLWBtWptifz7j6e6aCSQcj2qfL1ibSkN5q7KeJq1smzgUAzpVP6BLdxXpsw",
  "key18": "5RjLu1Y4R2Fxjx4V71JE7ufN6kQ3W4tBWNFbb7TfbDjG2zYic6HkUUnr8bYxjgVN2uydpXoEioXitofeqyHV3SZ6",
  "key19": "gFP3REoQ8tkKUXvopXcHMXRVJ6EUpiSLv5Krc8MUo2jb6uiuMtPfCNfjX9m8zi73a6uA139eTtVtJQYGxNFxMDx",
  "key20": "4uReQoYgix2mGnT413MD1oDoevPTphb8bXFc4jJ1z2VdSfNGFHQEGtG5TBHFW6HjK6EXdJCkjGzJocA5KjTwV32i",
  "key21": "5QYAujqNBm8RgALssM95TVZcLwLXm7GwRNd43sq4NYAdboxuuCouNt6U1EmQVsoGuTY5geCvcACFqtYfj6qu8iSj",
  "key22": "566NTrfVxw6wS9eb7vMH589m5xVE6TzfRtfdUiqKjCkQjaEYg1BUpNyHMQcF9CCfZWBxjnCZE43pgkCU6ZHJaRus",
  "key23": "dD2L3ybxUGZnQrHbczX3eq8VoDvka5VWhdhpHuHxHEfz4HvFx6Fbp9ZtPuLbETopbJji6DSYMddi6FPvqkNKN2A",
  "key24": "2g2F6SzvWZLPqVHosWzH9tWYBrEMBwo3YkTGtfdTN1hDtcVkDFWGeCt5hVhtWVgvDj6jroonVXQ7CxMCTjafDcoj",
  "key25": "3H6C9hi9qmRVjEfybfD1KxshV5rLGqCfJKXc7V3zJPn1sS57Ykg283jqKF16cBWaj4VaEfTKcrJUeGRFK85NiYXf",
  "key26": "4yJxGcG3hva4C5LBqvnNQr8qpEEfPzFZ3Bqv22PZMWk89UwkRkq9v9WZDExGnc7EGFkm4N1xrz5H2AVMX54Xczak",
  "key27": "29Ua33EQi5oZYkwepeHjzSxu1Xb4akLfcHMoibpoF84VBtos8m2TvA7VT7UWCCaGHb571jSPWL4wFAwPf9QPa4wb",
  "key28": "2rbU2mQyWGaxthVirYzkjLoypW3EvM6ZBRHnD2Gt4SJkKWneY5bi2tRSWmeCd8jWz4fKZixX59B2mke9WPB2agRL",
  "key29": "MTmaGUAmCcGCqr1UokFyeQJnHGxvwvW3QMaGWsA75t52Dxz38GNMUHhMSZ86C4DSRafTNNe45rgJu4pK8EDrVkf",
  "key30": "3y5deceRY1AFPE12cfFUaE18pnks4MAhxt32k3FCj1txci486ta5G6vaDdzfwBfxz7WRsifM6SdZCmiNz2PoaoYU",
  "key31": "4b8m5ee9e5bem77YFNfxCNUZ2Pq5TYiQVuU6snGQtZGsHbwc7x5LM8byyo4HPiee5DX5MDhSK4T9j4QRDVhYSj5a",
  "key32": "2gZaCHsA7n3TK45PLTv59sEp59sPXNad9jCatQ4TvDHiyXxcSY3MZRvpRYm4Q44XMnGW6y2nXEcPtwhe8kd9HeEE",
  "key33": "1ZQnZAFBdaQk4ePa7ZGsVbjeJgwJNfFiRBSp5w69ccC7C9Kg8QnupRSp4qFF9CGEQ39s7ZjmiZfs9BckBveKmKY",
  "key34": "5P8jyVCNHFVRAUwVyoKRt4puVyD9XMMhZ1p1d963HoWECCgD9BRcYhnThyXhGQX5Eqz7DzD6jy7ttwdJmfjGwsn8",
  "key35": "aQLR3wyhjHCb1TregdynoCb8pjD1tASutCsBkzhmYc3d8GjfwSsc1aKRRjxJC3sGgEH2LAzrCtN7S5uHWpXH1JK",
  "key36": "tprKrRh1JDqbx25vLMaHK87ayxrzDP8TnmGzSV8CtHSEebDYjKEoPSxQb6iUy1so4CX2yiwSGe1QosKGvJj4U3q",
  "key37": "3ZvNMx3T21L9C6R7skPBjDgrguMHoX8u5MtLnE5ZA3mnt4AQ2XLWBHYYN8hJLjzNVHdGmwBRPajE5CvVb9FvHgzu",
  "key38": "5dha5p3fPGcJrx6nMsC3ESdVYtVtSUE4P8CKDgW4ZvQBLUtiHZjAFwt112wyumCWFa6XA5ztAqWGkLRbmuMyQPbg",
  "key39": "1iwYXLexBKCkaVnmHwaZSkXmLjZcSnvnmvE3AvS2WLiDPBTZy1VP5RAs9pXA1yEpGFEXPg7ehD4LUzQYnoMxGDS",
  "key40": "2N1dwyGQEm1a8znjCpneZ5FFwtVv8S6rhu9wq33VWzhYVNvMjfEPt1HsC1bes8tBw1kGAeKT4ihw1UEwqGMMd3W",
  "key41": "2iLqpbzfE6XuVtmSCZVd6Z7Tt4rkKHfsaLNwzdH4mJz5TyrDDCn2uKXeGz1YerVL6upa1rEXKGT3GXH99eqnnZam"
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
