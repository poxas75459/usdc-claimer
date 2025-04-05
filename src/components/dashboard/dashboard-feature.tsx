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
    "43HVZTEmW4PhNmGCWuoZKZcJXqihStcG71W2SPVLdojFwDnRyHvBAWE1xgDiiwim23TWoGosDnioTxs48f6W9zGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "467TNvJwJUh55v7u8nFqnbwM9PNR1qzYyjDowdt9VJoJve91YhSUi57zpmyfqjxXFon7LL9iWFqeMe2xioHcKh3U",
  "key1": "3bvirSde5BvdQdHzu1tVXX2ULbtkV2cquRct6fC6gQxfUc962ub6VHN9WiLQADmMZDEce6s8aCZj2b3nWaEZTzqz",
  "key2": "5EF8YQb1VoJtTqDHaXv6RYc5q6do328cLL7YYMZmT8VnHiEFPAaeiXWfzA3mUk9WuAkPwY96bNNt3ENXKTtJqShF",
  "key3": "mCvsQNAFTWCyjZDrJ2SWJny4xyLZru2hXU4mK1FVwoGWDhHj3yzUq4gNQM4MdCm7KoKY7deVyi7bXDiWswsK7P4",
  "key4": "2oVpp3R1mEUCFeDhXgnCrvUm36iQuHuBtqCU851VZU8zBpDhQhEtBr7xMep6Sh1rqBxgjGX5s2AcdVB7gurHD4CE",
  "key5": "43J33e96fYneWhrKf3B29RJmNaAkiwtjsggENeEQ2EbR2Y6SyaFmuL59sZZav7dbtQCCPYh6FJnd1uF953jfFtKB",
  "key6": "3ZvyVCbMe2egtXDN6RdwpWyVA5iU3STgCFAxFh4CAT25wPifUUMxPEtWdcv3A9kq8bZ3dH7WLPAKf7ZXVahmU8ei",
  "key7": "3TAJb3UGya5cLztqo1ZHzN9f83ezhs1R8BVCCeAg2duVyiYhxbKw4SHf7CyuJrFAPsPeQzX56rSdMmRyvVfSAaeu",
  "key8": "57fNKG19t8oHs17NF6kT13Z9inNVyqnzLnux1tixLSjmikQqjpKoinpEU9i6q5n4NEHZrTLR1TsTt3NpvFUxudBz",
  "key9": "i5g4eBJEYufkpPXnTvRQutkoBSt7zc2ngiG72NXpfLqycAUpN8paMM6ps5w7w7pxoWSV4L3NH1mnEDFA8A8UrGk",
  "key10": "4dyMajM1EYC6VmEA5T4dX1srGuzFr45v98bteENDjWfuG1UcpyyoSvW1znskpHNvx2hbVdg3SHSBQPmd6gVD6rFR",
  "key11": "46JpHPDcPjXXvdg6yM5kqqT1fwHv9an9Xa9yCW3XSLf6uPcTMMNu4d26pBRMtHJ1GiKj2hVkkSfsvAuRjcukqjdp",
  "key12": "avXx34KEq6j7qptegnLVzbBLvgxBtHxWFEq6GH4daFUYYLE4rrHHbZouGqvoTHr5ohuBLETd9ZmP8iRCmQSsK4z",
  "key13": "4dnWsV5sKCJWmCowncLVdHBRgsz7DqSbhDDkoESGTBPk1Can2AzxGPLfCCb4qRvquiForTGaxDy1yrWcXQvbPZsj",
  "key14": "2uXaF2aftrQsjTedEuvewnjRWjBFa4dUQ2wvT1rKx4A9ekoCoGjDathWbnAj7ustWkZHgwreAp1Nyi5SfFyVT4Bj",
  "key15": "4bY2etHAfBokEkcvK7KEBTe3mmEYDDwqDA9wtWxdgkpb6LP827bAzwXnSLTFP9xenKkrWpkdPn3rmB4aoLLqu2Zd",
  "key16": "5bs1QJyNqJwcvKH6hneXKx8qeuaQyiKfaebjB2RT6xD6ZntEXmUK5D7Y27GLmZawGo4k31ZKLYDRRXrSgDg5XrTX",
  "key17": "5VimDXX8nLXmKfpWpQLqNjaEUpQC5PzxN4iUudasBjbzc8Ju42d46oP5BJzKy46Ro6twzKjZNSRtUcU3wU5PMTpx",
  "key18": "4E1DES2aHqrsQ5zbw4y4Ad2vRuvW1B2ifsmC1nYj41j8v1U9iTQBzoPydLst43gbe4agVzsKEgyrFjh1QsejHV3U",
  "key19": "5ciH6rQZ3JZCWeVW8dUJiBTn2ZHrSVSYhXWjbc1Fptb5VsYoX7VDsvwi3BwCN648UaFnJGEMsJ32MpjzdqT6E7d7",
  "key20": "58AAU1ZRqSGT1S1eqKpsS6n3RgP6oveknEam77MYStBnCTh897CkxvBYDwL5htnaTX81WZRazg9ungSR3FfTsu3D",
  "key21": "iDPK7ALWVJB2jHTnMF7Y4jfs2KCE6AoLc3pDvZZq7rbMFZLoEmQyM7aep6K66CT6LcaikaJVezAFCf9bgZPQget",
  "key22": "3tKqjeEurC1BqCyoQBzAazVrcixAjLqKVFnNgDQ1qLMF6nMeDGpTfZcv3p3zoFRdKBrQjyuYtmYaibhbWbp8TEo6",
  "key23": "3PLee37cgTMfdB3V7JxW8LR88fK9wQPvjfW66mVDwHP9AfFd25uFcM3ymgVsxK5ZfyGpDCPeqfZDXfzRuv47Mg4Z",
  "key24": "5VwRdx3hGKrKb1peeBY6o5UTFAw4nLRmLJpGkEENzyLTsAksCX39xNNpT5q7Gv6KDbE43i5qWoxabdWahUvPKTVY",
  "key25": "2d5Rxc9LaDWZTi1h9YtHZ6cwhetmFijipoLru1DTSfJWpwCPtXrdovrf5aBqCoM5DX4FRJ8DJQxdiCSHyxJvCETD",
  "key26": "iEpH73tmaBowBawASnodfiuoyUUcqqLGF4vSvtfG6U2KWnoXTn52GfpzSFDPDcY1Kygmk18FZeyEAXqctL2Xucw",
  "key27": "3rMYit3EHMQeKrohLPhzDWCc2dR5STfXYh6eWPnsCw2NSmzhCdF5CpPyKbNG2yqn6jjtYsxbmP5yFBRB5BKYkw2Q",
  "key28": "zRjHAFHzCMeP7G6xHeoi4nLgb5wHFZf7oHJ3QHjQFmne7Ludz8n7mJJsNTgNATTRsQjchFSq7JFp6cPFcPGx3Ku",
  "key29": "3opAryCQcxbjRVECvonm7Bcnu6UMwNd1e5Q1TivQWaQQu2PUKwbvYcnz69JGxuXkEGNjEfLDEW8T39zxrStXVAxE",
  "key30": "NBBBywB3p98dd5kQrNTVbHv2eH1znDtf87mg3L1sLR8mgCE1WH1v4sxNm6bte6svvc6P8Vjd4UJoe4SdcbVyp51",
  "key31": "49nVKEw2GFW8JdrYks4SWoQm9z8VGRvF8UNr9gYD6JJzR34Vz9c2jGkr52AC7f9BLMedpKRcYCo5aog6ULZ7yYaZ",
  "key32": "3vtEATwfScUEChbE6HzeYMyeWELdgjf5cZYXhNyVjZRDoqTQHJRwNXoCa8MxdDXspcoRRP1vcDDkNpASasLTHsKu",
  "key33": "5gWPizQ4Lku9WCncEdbvaNEt4twZQ8oYG6hdEvsJS7VZrqPBJWdKtgm9BMr66orvbfvzXMHLJbjtrc9LorL1p58g",
  "key34": "31DwFWTauuM4ftAELNMkus5gZXUFuSqWYCjcq6GxLVBBnoHzcKz3LNuvB2ELDKfNUuxBCC46BKsHeojuSiWqt85Z",
  "key35": "27o5jj123GqHYtRrr5AmHWbbn3PB1VSPbQoomYNKA6KtwZffCRQzgxxD1MpaECYzWbTcby7xwitNWY9TWtrdnhda",
  "key36": "4Gh3BZZJzAcJ6WyV7nVvca8bzS1cGGoKLZQcvVnafE35ExNZk2wWDAq5STjZHvVTVKnLNU8czTBQBs6hwZfED4P5",
  "key37": "2MVZi294QGn6h6agZpqwNuhHxvho8djYhjKtG9i6A31xY2rEfHzGveEbE1ovrwe8CJKz1NGehk2BfNY1ZZBSFmDM",
  "key38": "3mGeKACS9m6HrHrGRJUvgKhX1WqyJgKBk24F2WNB5YyUht5ht5JdAo8Wo1GgmLptA3fPiNw7LULUatBM1ZUfJDLA",
  "key39": "3CDpfLpvoY8NC4gD9dCcYZTssmfwnr9EMqnqFVu8PnDJc6VEwVAa5XQt8NtsNy4e5c4WAALiaTFZSSo8uqPaNtwE",
  "key40": "3rWA6xNHJ1RsPmGu3moruvinW9vPLCrb9UVFVWQZe64pAjtfFSE9NKZSZKKcKgHaDKNUPUTmGmy9JJxSy2a3LiCm",
  "key41": "3GZSYtUetAwE3Vg7e5PQaxgR5Dfht6Xb2bCYWU6m84D2tGwTtc5qdqsL3NLzhPXXSxU2wF6XYqM6mZZB2Vi433C",
  "key42": "43DeroWwgh47hhXa1qW9WMmKZubbHmzJSfG3pLPtuvf2YzZvfKTvTKW4MZipvRvpzMCqx8a7mZRAF2HmEB8x3WJP"
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
