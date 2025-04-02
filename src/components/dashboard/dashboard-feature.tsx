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
    "qX5CAy3PrL2rJsspZ23igu8bSg4njNmVbqAUk1McKeDpH8LVhntsCb4nTnuV1YUmNs6BJsEAjBjKNMyJXwzTpuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eAwSHUFG4R9gbN6L1HE7fH1DeWYUi2uK3ZaoBwzfSTGS4qhi8gckFxEHq8VMB7vURBYNuKUs326xoWJqji3PLy",
  "key1": "4JcNfxk6FP2nr3CeBvxAnLLN7PiDgeCyzgQYsyX9oBKjwiSH3j9NrqtnM3SFVWtNFYySqLCVrZbiuukZhvZf8Qn5",
  "key2": "3rnm5TbVhXKxtn1fd7AjKvTm77MRLQjAGWhVCLMJnc2DJbyaKDvvYQc68LT5AEDCQRcbkzzDGkAQC3JuNqhV38GL",
  "key3": "tVZ9BS31sDcDNTErGG9PzukLJdv7ZZfUZTjyBCdPhK6fYg3S9tHowh9Lhf5WW73Fw5ipaixKF556aoRQSQprtdt",
  "key4": "3PpAFeKQ662aNp26r9k83Fjn4SA248AetL5JKaHBeAT9HBaVvBLTGn6rRNhDCQSZPde4AJZHkkHrcbjbczNMDb8s",
  "key5": "43xqA6V1TJEazCNbBPbL8WJMvYcQy2izVwtWJh8aL3SdXQmehynL3EgqWZ963G7CrhcnsrDiafSN4Sp6q9dgciZK",
  "key6": "4FWFcnP8wsamt55GhZXwRXJY1NKoxN8Q6VeTSke15k4WWu2eNcfUDT2djHBARZRnCW54wefU8kLMq1z18iKLx6FB",
  "key7": "2LuiYDPUziWmgW8Y5YfSvXAjecUZN8ACe3FX9CyMN87PgXhux3evsoXYkaZ94q4tzdsnNHj9KgM1TUc8JQJUQ5NB",
  "key8": "52cWqXJptuxfrxP1gKP5vVsg5eRfEcRt5V4453kMogazKafg7t89C6sNkwcYioYWgbTnpkdab7Hh7qx56rMY54er",
  "key9": "4pv1uV6Gzc4iLzRUyMyn6UCwuA9WW5CMtYBDgJUbraoAFttyAoJuYPTTGbfTYRgsEbK2Z7mPzw1mfUSCW2LKAsmP",
  "key10": "2ze5VtY68KHWeMEKXe1qsDcVVgSNr2Hxsqqc3dq9vta9yDEKDrVZ1ebg1MtWMyXioqkPui3NERwzHzV4crZ6wWHD",
  "key11": "5hUB5hjXjJTZQGajbgJm3HeGfP79YCJ4eJY2FQnjGDc2MyeQ9opiFbLPDqmWtctzSeQNgnksNm5cxVZiosccuKTz",
  "key12": "59yg5uEGCeF3GnMe5BYsFLHmVDKm7YJZzQqx3fEKBxnXBY7tRyECP1JnokKTT7mo3acYSWxvL4kWjnLe9NSXiaVw",
  "key13": "5t8gKmGGbBkYabQek4R99uP2FNuQ2J1r8RxYaqkHV9fBTynQxZgteev3kg4AA5rGpkyRQ3tgkz3szppvAQkAaFBw",
  "key14": "46ohs6MiM8Pj4LapDDuyqYqnTtLPNt8YJ1JqG3mPC1Sbth4GjfA8w91KQAWaUJpNC2vBQFgFAhjfpXbmN1pFR6RG",
  "key15": "4AVwdFTjPhjv2BHeNctrrdgYw82QXSJntiMJMuhwrRMmTBeouVR4ZymE1JqFrcewxUEeXccZ1QZxWq7LT1RFi3ty",
  "key16": "25irguTQ5Y2pk3KiLuLHfLZtFZj5dpHNUGJZqZnmKpmAYdW1em3VNaaV3h6mVHwR6rTv2sspRk8vwE4YYix9XQgd",
  "key17": "4TK7mqrezuGne737XZkubFyFGqzwYkKjg1a7rVji9gjgrFzs936Evi15bUqxfv43zqzCbRRRgMYhkteGndp1nN4R",
  "key18": "2YmNaGmGb3V2vSe1yEu3Xi9GFWZij4LaHBWkGhC4M3JMogfkGq8kJYjFVMRGVkPNwYsznUtQTMcsL38tT5JSYB3Y",
  "key19": "gCkE5zgzm68uYFYZExWQFRTvn5ZFRohbHEuPzwYgpLW4YdKzYg5nygisnTf4dJ73Q5kjpLdL8WPowxm6vdfpqaN",
  "key20": "3RPQ8oNNKxjFH6Fxf5qaGPoU8dZarfmmzJGK9wbh2gSbYi5Se4DeWBZjjRUgWLs3NaeZ7JqQEfLUsWzeasnZ1CMD",
  "key21": "emdFQXKMZFuAaKahCkiRgYkzrjtY1k4E1e2xsid5pScqFzpN89hh9kqMk8TotGnebBcTBffkTQBMnAMMm34bMn7",
  "key22": "27hgr4RueW8Ma3ecPGD4EDkL92wPmdiLE4ptQyRcDPYNackVdx1nwbBqeayojyMqUeWDFivna2Jq5QGcrxRDa2HD",
  "key23": "38fgfQD2Zgp9Yw7Hvn8wAu2F7aQwggpF78PbBHWXey2fJSEWNX8ki1MShJCK7KjTefvwy2r5pvri2CxakcgUPh8N",
  "key24": "5s5XGAvbMrcThx4Rvbhu5PYkhov43vUpHTGRZDnFqLUjw253PuFE97o75Ej8AMhnVkCrWXLtuT2mKCH1QXytnzF4",
  "key25": "41kHmJU4mox5osuDHYP2w7m8n2mxjK1dFDRq8kPJGJs8Sxrbro9W5TKYf4A4ZSMd6QXex5K6RQh9PaUr2jreqxob",
  "key26": "4Mg6VndmNeHFykS8qJiz9CVJU6AsRbNcsJdM7HA3kPuXkzbY413WQJxBTRJuXBFs57rsHiom5rphzSqyfbtYVj3J",
  "key27": "n2UNWbkLkcvhxG6DhPJzNh5694gAnBxsASZdouVbFxSnNCENxWDx6KkPBQuYpmVaEC3JYEkdnnUogEJyQeWWTGB",
  "key28": "56YXsZDVH9Jh5VuCTmLbz1hBBcCSttgm6nL3WNZ8TDnsz4Ayx6B5ULjTBKt2WpZHWeQp8CsPswkf1hBLMc9MQnri",
  "key29": "4CQz11epscjuDK8rKGwDRkDiSPpHjAChjGzn5XaNgJwC7rXAtnEyEhqgXvtkcuf1jxWXB8VaeZKGmocvnW1STtiw",
  "key30": "4KyNdsLCDJmPDtUbaqPq83KAzSWPcitN9n959QSgXiLDoiAv4GWjo7EPJFnRiv52PHi4YJQYaxJyZ12wCVLwqW1x",
  "key31": "3K4Wh1adyAjRh7GGvofQ3rzpJDPZqVV375r5ZtDLAL8muKwW4gWKYu7EbSiKD8UW6Wf92apNtc57Wq6Zjza6UwkR",
  "key32": "5N9338KK22MWK7aWA78pzpQo785WBkAADvLuppLmZtjuo7as1XuUwvAM9duNa5faBZgj5xTZQYXt1H97qrgYuEyU",
  "key33": "z9KM26pRTaERdkypnVXKJE5gwtKs3d3t1bsmhPqfkgadtMZvsCCpzKHPA86QfytGeRQZdncVWYLbBTPgYP23PNu",
  "key34": "3BiFMhoxu5TYXGEgNDCun7AML43kNZ8RyYxsBdEZpPY1pxkNh5t1ZKQbDQPbJay9xNNLGhQ6vX1AtqWGG3vPaH3W",
  "key35": "4x6FfgLWVVTgdQ78qcie8ifj9TH45e4nfDXiWb2fMKhb7rkNkSZn9HKs2QjrpV1W7HZy6y2vAkfwcvzWorPfi2Aa",
  "key36": "3jtxWFY2UVthuwAjawU3ZVz1oHVUMFNJ2BNbNiF1LK8Nzg6V3a4iUuxiL8AaLvPiPxzijTyo1TCbKbJK8rNYDto2",
  "key37": "4uhwErBBvZg69sggkNVcesL8AyKXzwkCygSnmu8oDoXzmeV8vkuqfHykHGX5TMuP2qFacRnKi511aqwGcJ1ZZEuD",
  "key38": "2xCK1M4jodVG1zRVqECWhjvexHZHEVjcfGQrqn1BDfRk2LKHQKaACdnEwGTSjcatpoJFkLLxQNTHFzwBejidUkY5",
  "key39": "2fydNptZ1hdoVhj47fRsCCiE2xoWyGrLFGSnFd2bWaTeReXP12jDgcVYa1Mh85jpHwUZEhPqNjuJvN3t1TJJWy8o",
  "key40": "33xRwYGr2rc8eZRweLtHbHPYvns4DoH1s3xV1idB7MghMo7Brx1Arm7U84emPv99jDhcDtsJvVwMB9itmqKjE3XM"
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
