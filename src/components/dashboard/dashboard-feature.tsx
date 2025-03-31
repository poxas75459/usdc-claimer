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
    "voc7UYzeFQdJ461rbVgnhMBof9TVMvVew5izCUWvw4dAA3yUEKsRRnXQa7Qr8WpDhRyotNGgVzCULX47RhvMCN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hAdaXLXNzH9dULhwJsTKrx5D1eri13J4VCphNNUEbMvdZwKkL3aXwT8hUFVwjLZ8Q3jAHUF8zz2jpgUsguUMmtp",
  "key1": "67my9P4vVAZeSkExiU99fYW21wfN7He1HycBboctRMXp3RiwQRzfXqvGbGCjJikdCAHsTdKRGoFiPKtTmD2Yj9w6",
  "key2": "4nBpK24Nhd3Rv98NcJXvUfG6fyVKKTvNY3QRgTi9nTGEhTv6R4aNzpNtBxBixEgjU8AkzFDmrpCdXiSys1AqwvQb",
  "key3": "4JwvUouwv8KuDk1WeEX3tka25bXH4V28ys97Zw3x7CFQQ26gVBn24FA1NwM6WicMh5vk3V4J2gt1tz71ku2nNyRr",
  "key4": "2suzMbrfMJJfFZM8awq5XPXj9zQEmzfJ5WMma1xKqToLXHEVCv5qAziNhxQj97CegVApsLbhT5B8ghcFjiwixgbi",
  "key5": "5dwR8wf1iNKkjy9x1WchLaVBTLkCYLLGyEWc5pLVMtYeq72o3PPzHheVsrDMzW5WZ87qkV9duHALfZq2dcKCTmqd",
  "key6": "3YfEa2pQ9fcHbj4qYwRD5cF78ZqampfubjP8tyTAcY62piut9MmAbhh3YYrcexfK94xUKvHyWGukikTJKnPn6whZ",
  "key7": "3AtKtknm8qeSqjJhZa1BcA7zGcxaEWJtTVc4ELfgrJBCVf3smwkMtMkSqpLx649gyapoBkohLBcJWsvYPb1bjuZg",
  "key8": "52G2tx3EhHYD2gxoZTmBjQvBXiYeeJ1ZviDrTbVdDCV1caheR4AyzoyiasAAAjwfprz6T3kn1g5PEPi6QHNgG6Nt",
  "key9": "4FW6Qa32yXx3auWKBSjt65ZmCr5F6yt7QtRoTN1bZYKtkKLtvxW3yJ4ujqrfk5AJSoV3dndfHWCijeL3Tk7AEo5U",
  "key10": "4zAa7fTHv4DyL9H7C7w4XN7o3Ema1UdoEyqMD6AxsEubWZZRkhZXYEdTDSuVZrcuYHAqQHyEYq2w1f8eTMB1zU75",
  "key11": "5KA7piKeipwzzEpMbM3Gq6XENbiCGVCwCsMFc3E6TmmFaopweojNyqwwDMVnmMk89iMp7YzKGDmrs2gvTcnB7JRF",
  "key12": "5g5cZ5PBus7zB4ToKunTibg7MLKNDCpB76spafp64n5zxmhPJVwiyQt2G83MuLaKqDb3zxa9KqXivSNqaS87nvbY",
  "key13": "4SGXSdc2h1WdP58oNfRhcEDZE2WKPxkBfuzqXPrZwRjL4iPR1DYCxLTEE1pgsmGgDZ5oubqXVgJwK81eGVf991am",
  "key14": "3eFdQoxKwTLuRtVejH2YobwkBzyY2ArPJBTreDypqqzJN7mvsauRe4L9x7oCigVbR8oPf9vLnwD8jNuWGkyMEuXr",
  "key15": "2BsSPhtvnqyRtaXcLmG2CCwMKZLeaARd1yGpugH4y3MoTkt1gfUdziyqoeeNbP8uKQcA4xm1Ewskp4LRrwfhh9ZU",
  "key16": "3Xtzz6Rzn3L9jWLH2GoivBsJTUrBTdBNojuVHj4HGNnMBS8CTJRrsw5KNCvVp1dC1FqMTu3BfQPgFRGRUC6A13CQ",
  "key17": "511CyQvSN4Koa5Wjpw7sWDZ3b4GcQWqaJtpy3bqtjoNyMXhKqfh3p1UEz6QXsWLUuez2LXK9tAYQXtb1z8CxWLTL",
  "key18": "3ijCA2n9WBBAZtJzRLRyJNPGB3i5vm2WPA6cVfgjvdwRs29URjrNVBUbmFSoeRQsLYC7ZL8Uggon6jYqJbPd2pAE",
  "key19": "2ichLAQrexXb5iXMmDZBk1xZ6gn3tHPDRXQxVppm5S53DYK5tRa3tTYcbKykywu6gzSDQL9ygvqf99RBsN1m4Vth",
  "key20": "4Ukqueen7fJdNbAmAezmMUYmzPhu4XCdQH3NoASejECPFGeVRmYJbAtQz2TsBc1H7TXydqVmKJfGgGYESNLo76h3",
  "key21": "bvco4DLA9zLT3ZQ7f7LMzJ8CmfEUevo7ab6Cdh3uAysN4DtvbTKPbqhNVrSwGPwaaZptCmS4FTxVwHsLB1nEJiG",
  "key22": "5YRs1WXQu9QdnaZfbLFr8f1pEB57ZpgWi31KUMdqdTtLwpkPFvErMU68DYzwqL13bNUTWydzaf9QQJQpAY5vnLHn",
  "key23": "4KLZu3HquuwZwX7nFi91YNYZAyhMQeA2AM1jYTZQbcLrnhckjZYevrtuMwUSUDiKjfodW1SVDftmHJEUqSLBeDd",
  "key24": "5KeQbu5daT3BuYrjqecP66numedH25MF9ZHSReSQnYxpHBKnbdm2QQJy3QdXAuXHfLqBjtekXAah1SAZrwJMFdBc",
  "key25": "32XJGKYMGHD9hhtY9M1CSQ3GuM8BfbF76eU4bhm5RcABZnrGtHKW5JqmxKZ32bs3iSfVnv2WhVJHK7NZL8Ef1D3v",
  "key26": "3yZ9Lsxuqzik321BUi3ycR9KMBqS7ozkvH1gE5XmrEbWTUYn1hpsJZMLWa9C5AcysDwMHqvdoDePCLR9DH2cqbAb",
  "key27": "4U5vEZmcwyZ2nPw7Mt3tYTBkaro1TGwL6ec7RMttUXfhQybEjwXbaNVvv3a9TB3Miqmgy56JbDiQT1GHED2MQG1n",
  "key28": "3eU5hnTCRaDdKLG1kJrm8pUTB4J4t7CDPZWjmJoaJx5m8aFZ183fXsqmSc9KNHkhTcvmzs5gdVoa7imkfh7qNL3u",
  "key29": "dLNZnEpEtoopPuoYU5Lqgs4ZYGDXdmjgYTWtCbwWXeBjZqrNjTLqmWLzEcYn7HxTJq2qHx2myX1mUAc4adiz3DP",
  "key30": "cGCJ56y1zqX8Fy2o4WNhuAwtWLrs3PEfzTmqqENphoBvekG2hhV45kpW3XnHEt94rtXkiPFkbMR9yv5cwHMnTEn",
  "key31": "463x4yd5YdzKp4dEPT9wWKeivXUQ3UWneBEbyPqTBFhHWu8JEUMCrLHzGNM1GbHrNfePWemYnsdjKytmnfpF6wTz"
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
