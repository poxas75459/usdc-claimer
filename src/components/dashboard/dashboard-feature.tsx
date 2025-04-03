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
    "3Dxf7UXRsSWUvAMUnb8DExqunNMK6RRSsH1uXX3ohYdUpVDRCzXiTYULSfAxXqGtfeE38fPhdzchuw7T4BEgaip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yzEocCMpyhY2wkBMEz2W4x9N9r68rZWCiDFaqFRVBwGbgBX2qT1kujGYyC2dDR3vUfUNZ75Kwav8DoJPxtVWmnV",
  "key1": "TMhM12kdSNRrhsZDDtfnNsHC1Y3iKQvRzZWU2MV1tBjyAmM7P7nwQ8jJ2HwHTFcJrnde4vjDBrNqAjb6PFmjAar",
  "key2": "5cgTWtorp1pxBR5PH5djSr1iEuuKPrj6AsKuVspaxGXxVNKREe7jqorVgwWE96jjeL8NJkkSdADzYL1HN3Cgm46k",
  "key3": "3a1BopsbzVMKAnz2zNNosMHUj1THhZpFTSzUyRp63QDxjFwrnP3X2HDTvLSfLgBnvrRURzbrGeCtsxxV4ZZRJokp",
  "key4": "4sNSfYAXHFD736CU3xYjAVBciVSa1zppuNFgbmM4eyywqfF3bmSw6X4SDaGCTS67eiQVsAyMxdSyzMuy6u7bZ6np",
  "key5": "2bSS25wiNKuZSSpS3CkDwWesHuc8VKMURNp7mGTJBQc1eFMwJyJ9FD7gF7pezEk3MsLybyQ8RVmJECJ2Vqq92DNj",
  "key6": "4h62jphhLbT7jvCLzyWWv5Wx2Q747tG5MqBwZUvcqnbpuUnXMngCBkSKW8yjR96Z3GYVToAHvvcQKxyUHRzzknCr",
  "key7": "25GcoYTi8wsCzCQaZn3HX1yxqkvU3aV8hkNxEsbdLGW5miPj7RZQNE1mhzKhnBeRymTRaZc1a2EvmnTcrGtckvUu",
  "key8": "5YydJxdAnm84SDLAUdTuKTM42ZtSjyBe2xYmiKmwEu9EY7UMPU85R2Wnq6gwWgzw3NaypdJcDNkZjYsPkkQm8DPa",
  "key9": "3zTFH2DbcAotJfLCe3mXgQDXzaRvbhUjqiFiVT8T3RdH9aUZ8Aua1bhdSRLGSSAh7ZGDh5coaBh1EvVm7cwqhXvL",
  "key10": "DEPEh48iKcL9cvYJEoPEdEDfMPMLJf5bn8sTsqPJu4jAcJ817ubQU6ZWXTwZbJTKkvCFaGd8cgwZaspGjZdVoDz",
  "key11": "2YDGz7h51JbKuGKDZZuM8Q3kUkAGVtGUxVxxrarBapFqmEnqpYWQS88N3uoQJwbdYi7Xn6SxUgJswH6HarZtgvWu",
  "key12": "cGSbk6UPjvK2LBsNXWscH4v4hc1bfx7rWMG3byADBu3fsCv7BR94mu3iM4GGX6HKgwtvYPaWETJY4XcgLBL2eWg",
  "key13": "54PhyWtGgX4PLRGZXimXWBnrJ2MLzQLADnuSe6Q9eX8Uoj4aRNxb8cdge8vpCDujWwqRWeqcHtMtDfLwZmmjhiaE",
  "key14": "Tv99YWsQ4eRv5SAiws1dKM7QKdootF3pBfq4hQ866KncxR8ALPNf55j8Yru8A3hwMjgvo3yeUwd8ryj87cVss7V",
  "key15": "2hmRmgtF4zceMwMStT9m3kZSi6ZMaZn7SXpg8oFeW99ntsFTcsnZh2sGBMbRVvFNCYETvykj13yNL8drSooovkVX",
  "key16": "4j48Cpi5zB9f57JJy2zq7FJvWBbHZALKgGs1DfqFASxgKMt2Ev3eFwKJ4U8vQfpEdRR9hM1WsfZD5z248kjtabWw",
  "key17": "3gWqZv9MYR3TdgUi5Y4TzNoej37yts8XMAjm6TsVNJCYNyaGq8MUq3qwrCpWmWpb1AxSDzR4iPGuhXEpxHaByxdg",
  "key18": "4BNA1p2gxZCBxoJFhp9oR7yN6ZQALREDiiWrgt3naVaVsThrM2TenYAQUbm13n1K3Xnzqe7XCuRFvgYTEn9quAzU",
  "key19": "54eHCAvu2x4qihGSuXC9im3stsXoQSfBxDQc7ACxB2ksXggpNKTZhHMJtZgidZfz4KJ4macpCykXRFFAMXWUeZen",
  "key20": "zaaCGFp7kZCzJeMdJTzxUo4cjbqcfc1vqVKci1wV4JgYJfeSTFxgSF55VYxVBmx5zRPFBp4jcpPRJtdLFhnKM2M",
  "key21": "4p5qNEecKgPkBibUxCHqTTqQe8Y8u7Shxj89nK3rsnsj2umPVDeKegthwb1myDRyc3xsdbKJvFvzEbYyrKEvo3va",
  "key22": "35wmQfjJK2S3YcXAsTWv5DA7pbWDBUDGG9qwMFGnsKdXyDRv8Jg2rr63L7yggaBp1KPNhqEenV71ccLD3sVoUKnF",
  "key23": "3xTrC8UFV8MNPz78HBUawXKMrAWNRATDdsMbhbRj6YpnSrhZuvKnnJwj3cjZcHMbovA4C2tdCGhCftAneSz7W6zF",
  "key24": "bzSwzsKC7ayLf1DUKY9LSttDjQa55gcbA3BmsVpk6umek8Pes3bgnVnN1qPhbruyhvWmR6xfDTMJ64WmbG3pAyb"
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
