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
    "43jfUELofrrtJTuXXkTFwDPv4RNrh7zi9AVEsK6grfmfWxbmKeZGBxkSrVFfRvRPubx1Ucfiuqo6bxiV5QMLMH8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sQKwgCKhrKZ3vqftb38hZsCFnuqMGWx4XDnxskbhbgS7QLJeWcDGcX3ju7NLUkeQAS9AiEamckM3huJU9ng2b35",
  "key1": "2aSFY5XCVByFJ3RyvsHqjj8W3dd7hGRBDJG4TfPo1YRsXvDfAhBV57TFxdFvD2fWJNF374oqz8bsTrAvKKhuVKNk",
  "key2": "4gpVpqxU22GhKVK6jDCsTonxMEKwsCweBPx17C864XmtNyVAt957GWfrQfuwZcSVypsAvH7zKXV4ZoZnebP7HpPy",
  "key3": "3gLi8ec2GSqZFkZauJJeVuHub4gLMPHxKyRCu49ooU5reAF5FV9qsZTEA3JrsDw6ENPKv7Qx3nfNAiCqd4ytZZ4k",
  "key4": "3Mm2VjYPT78uEbguyzzcNjVLTKhDTchc1aYPZZ4wBphLKtoyWQGPYRXsw69HfHjEiQsZtxBgbhvR5uWm8JTGdFdt",
  "key5": "5jcSKoYeZAn9Hdpy4RWRB78pn9BMmMyRPgjjxcnAFCnrkVgQh78EG5NTgYTWJfsnaU1qJvB4iBgwbDPusVjNWPCJ",
  "key6": "3upsATj3VHUbwPf1Aqg1EqsNYDSHxade7uTBw7QiWV6M4eaDMkSkgRuJvxSFmraJQr3VCGkRhR8DYPSetjBrADtU",
  "key7": "3U7mvsJvNB3GQBfE68JRUBXkr9HNRgUGJxVomaTfsLGH9CjTDBRaW4v4yTex4aypxmohVzD7WQYP7aMZwVSE3B8T",
  "key8": "UXTTGMW1FcM3QWCTNgKQ1u3x8dBoNcTCoShQiUz3rvVYmPRwmb5bkCJEKddSykgk8D7ngJMiUWwdgvvWFheKP8C",
  "key9": "paETsKSZpQTCWfyLJoS2LcPwpXn3DTSopPummqPgoTfekuXNwctTJXggcDmfUzJkoMQnB2CrPto62GHvAYCTQVH",
  "key10": "UVekpqs7Fxw9RMxvDgGeBGREyuHBu8qhpyj7Y18mqFBoccwvN8AgT89hKKDkmDDb3cu69eLmmvm4Db84Pru8EPf",
  "key11": "oS8YdH6VXnBgGopYn95uJ5uNsByzfGpsbD8Hn4DR7uGvth3ub5FxJatZ3ENAzY4MeGzNdkuSeiDgzJFWGSGUuTL",
  "key12": "5s2sHAJ9CVFMrkxHKM8VmyWiCucfvHJQUASGAeJki549zfEwg7e1vPokQYTSydRvPGysNpjPvhxN5XonSVjQGveQ",
  "key13": "34YtTYYRSkxqRRc2exsEkPfwQaRvvmRMcPv78PahaUojQtx8hg1VktJX78iC5tdjVr9AfC4yGBEZBVTNN6opyGjE",
  "key14": "4CUnRepCd832cBaCoBKMKgvGSjAjs5ymfuNKCadRMKNj6WMA67LX9X6wtHHuJQSCRY9niXYJfvqkodxtQ3vv23Qx",
  "key15": "2aMGGCEua6VFcgB4TiHfUQpeuxAHjVEpa2jateujgi4QGi9j2DqY1AwtmXSJpim1W3WCCTjmkaoYuV7hs5w7skRc",
  "key16": "UvPpvcwPshXDFsAZigF6NV5npL62HeLYWbjmJC8hgU4X1YsZ27HUTmPhiVA1aHGu9y1NLnbdnDXwK2XyDza7thv",
  "key17": "4AJgEPzGQk1SrWpivNKRnDXHMUuCCeBDxtmHHd9aQQyqvSipAAEwQ3B6uY1SgQefsGPQwGBjzCC62wBWqCZMHSgC",
  "key18": "5J9KQyvfmYTBrEWDvo1gNLw43BekrGzAAPWnNRWzhE7ReCdR1LckM1ADzkz2ezDj6HnHx6KZpxEpFFG24MwMWXrS",
  "key19": "cdqAifJVpzwRssewiymsAWPEG5xjn3Mzgb9uX2vHcjD9dczoXfQxQSLzibCVzLHKZZL1eqpobMSvPcDDTDUq6YL",
  "key20": "28s7Qdb36buNv38Jzcsm8vA54cdeer167yBxDMdfPd1p8BbYVvrH7nnbDHFtyFppsZqNDGyhDaGWPxcM8wvqryH8",
  "key21": "3rrD4RdRf4oe1tVoRTbUyULHzce2x9WLxDgkkFN2YUezSzTAckgscWEzDXLtKk32sV8W1YNvhrFZKf4tFGqyjNSU",
  "key22": "3M9wSkLWuqUgRmvep4q7AGkhC9smWkDTDf8bjGKwmMWXb6NeioUYNA9mgXspQbZ6iLT8VmPyrScpa4Ew8MVq4h7B",
  "key23": "2393cTYsJYctvW1Vp55FkCmMfPKxbo4SYyMAkn3JCjjRAf3QvS2r4tfeMs28EGRpNNzgB6bxvrGpQY8Pt7rtmh23",
  "key24": "2esAXZXBAnniF3vBXuixLUpE3NG2m9K8JKcUCqwg72y6Cn2SeCbmbZ8XGsvUsMEvJAc1BU6SAk9qiwDDM3AWhwSJ",
  "key25": "4mpzQ2r1SwAknefxJr4AJgjYZfHwfVqrc9Aapc6tYb3BpQ7xczf2gaCaB3iLLk9xAkJnp2qZkxKNgeyu9NWJcG91",
  "key26": "33FxWyn3MgiG4DL3xGBnh62LQCcYNZtSgg1ijPSDdS3PeBr5KAwUYpJA7QDMymc15RU6pM7fBuMe61uPy9h8kvqB",
  "key27": "4SQiiRcHUCZL4mKXdALUxa9tBr2vhP2RGy9PMqycMzcfkTtfshfE2rUBYKribVwHUzL4hxZbkMA13MZf4afyR9XD",
  "key28": "1dnpenVzMxJJgS7qznxoYsJKbq9s3PwLbhcCbVkfurZkohuwffsEaA2zc8e9oVvVGEN5sJVr9GgxmyEuaQGHoEi"
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
