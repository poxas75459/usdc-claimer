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
    "3wiAiUMWu1BrfDSXyPnycuwQCFZYaqQfxaToJMNUkCo7LKhsUVMRHTmASYLMC2wgLPyEe38SkbJU8KxmbwygjC2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BrsV6AR2GQLePGnrq9nQETAXYA3RXjwxsMnmnCAjPrWkBnMUgwuGouw2U28G5YpiAZweRNzuJtUjcbRKtGzyLnX",
  "key1": "4gUiBBhD4AWfDPY1Tmfgt7164dYNUBQxMP4T7Qn4cHbc5TGiBbgp6BzDmNhhMTdqPF5wQbir44ScNzZGq3i2JvQD",
  "key2": "49RoHkvxFvEdbcTeRxEc8wp8dTvWLKY62Nubrs3zff36ktkWwJ9FKv2fbLrkTAn4J3vzbaw1dMoPCnezJ6Js5fqN",
  "key3": "2hrKzJLCPEsxhEoEUSrMp1PLisqVwKVqVhiKfvdG7Xu4bmj1xSK6PawP6hzmsyQWuTyt4ybLWRN5tYh3TRP2Y22w",
  "key4": "55RY3ssmhkBFqAaqySd6ZU2TH6d1vwJkCJpRC3Ruhgp12RKtgrr3fTyFzWHHWxGskGsCXAx3auQtx7hXyopVoNMU",
  "key5": "4j7tNdbZA8wJxyPSgN9joZ4qHutndMTzNHf4dUMMKzsXBqK5CcQU8STgbJZQN219VebTgy4UVKKpDncKd3556arg",
  "key6": "qzkbjPhqR6E488QmdGJT8zJst1sXypKm6HQWokeswXumPGKVJmtWt9o8EMAqMYTpWvn8SJr4jrapkUq1YPYzLq4",
  "key7": "4gntXRnykY9htZZVCXWQdDm3QpZeNwMwXfZ3vVezVSPczC6RaaT3AeZG9CvweNtk2MvkfPJumqNDuEUqy9jshWRz",
  "key8": "3sdj7GHT9QRZx6onH9hU8V6dzZChJk6ZBzvLdEbYEJC1Mw4QRMtFTqrPTQeRS7LEbtC6n1khP3w2FsbXCzwnpCZM",
  "key9": "4wm46dpENT1S4S7bN5EJG4NGUrPGENKRJY8pq121A2rqrJDp4fYVjC4Mq6fQytdTjzns5S2b8pMCUXRFVHdVioaC",
  "key10": "5LGbNyJRvcDNsJHsXYVKiYtQFDW5UnNUNBVRSjqt1WhhyeWm7VSrWv2VN4Gt2JmsDit6sMgTcyQ7zAPVK6oRpGGS",
  "key11": "2a5BxUH3csiUomujcL84Uqncr9P2qMtiAyrkuGJLx7zEqQKvH5HcESoghtguNTcHccZuhytFtEHXc5CDgxqoqiMu",
  "key12": "qToTxq1UyHTMqBLrc1tYmTjBdMEsXKLxS7vjSR5DUaW571XZpY8E6f78m4JEc6h7BdJYbeEpqA8FU8mfZo27omg",
  "key13": "64ZTxLfJ7144ZTRcQ6VbKrkiYH3WkEiypZUh9Kxor9wB8Lpc9uMsdcCsNwwh7UVzsPHyQFBmYBZnBRo2H7g349ze",
  "key14": "kaJGbARHjGHPAQ1sEm3W5S7ArCREHGyxQwVuwezzRs9CYAzqfP7oGxZCD3B3kuLXPfWxwHJ5dAyLQ93GAsYx6y9",
  "key15": "46XjVTJq1Ap94ZnyFkiYcDR4cZqfBC9ZdfEYXyi3JucW4bUQTuieMjh8RF81X2UMphxv1cZ9UnaEUNLkbAofoEvj",
  "key16": "5D9sytvzihtQ6f9wJnBdc5f6zmEHtQn1NSJgEbbHaJWkCvPaVvzX86XuUieyqAavpapgjJkpZjLqW39CFc6smVYj",
  "key17": "5k2A3tP1TWaaJ6UtV7VvemFsmKKU9KB13BMy9H5qWJe8QbaVZMR8PLeVfUABhroAVSYheh7kTVb1w5B2ma5Ta1Tq",
  "key18": "9Lwbp1Xo6orbH83wqpHosWZENvKpUwzscCEmqWvS6poTV6BpcYMtnE5okD8RVt44p1LqfC4j6CvR3HV2DNSGzXC",
  "key19": "5XoC8Q8YNQvBUAhxwneMyuqDRAVMjW6D8QPrjK6mjLkUyKq84uArcGqqppQMZF9poLSxQwVNQoc3NfrZ8bUNrgxE",
  "key20": "5zpQbT3F4cRW6fwRfYbVZ8ejKx2JNJzZ4CrTorNwrqLZciPr6d6YQy1fWEzbVTHAbTyqQoogYsgUrP6fNSg3terQ",
  "key21": "4jsKTkyzA6Cdb78kLqmBsaNkXWtuByX9am1jQcv1ikdWpmkf8dssphv1UdCmK2oYGQ5qp9updyw4SYtjoE4X3QYb",
  "key22": "5GRX4FnQH3shGvgsaYCPan5Y3a6yteXBe6PxdCmbPkJVVLycssDrjEWCzxjhdBTMk34qV9MRD8S9f6GFVqRpz1oU",
  "key23": "5GFAjdzKrCpSQcPLVhzXWDU2WszEJGMxGw44CiK4zKgEfMSdkm1hf2zAbgZ22n1DBYiRxm8vfLwMFFC83nrMNYx6",
  "key24": "5jkgjVcssjBPJyUvnCurvnyLGJcaPrQnt4iCVcv8eAqkYXyeRCH8SgxnE1ZdibbCYpgQKvSNe3rKbCaxPtsB5VUK",
  "key25": "2PDYNRLhSyswmksGr1Mea1BQc2ofXrefadyTSNvHzbbh9w1sDwhSyACMrecrrQYRWnVsPpD4gioq6KxumrSaqFbN",
  "key26": "4aHzPLZJA2h7Dr2XuKAyXxTN8gDuNT3rvivqbY26GwZqVgtBt8CM5L8GZxAFtqmiqxCpp67fJT2PoXH1yVhbpnnn",
  "key27": "4CNKqmRTkS3Yp8S4rWHPBpQAveKuHEXQExdKkJBSgpuonQ5es4tAuC3Aej1iKkViAJqRB3KXpdcLmQFBAW5cgi5m",
  "key28": "3DdQFwuu1Zj6beqJPp69wAE5Kmuar48srAj2EEx5PWjX2fi1BsLhwFzgacu385c5q8f9ykaAA1yDQg28sNvPA7hY",
  "key29": "5261Xns8mgcqQwUhRgRLKKvJf7Jef5ysFDYCTPzmdhVzTTSS4j9sz8Eznaf8exnGWR5RJ7NQzVKnMRAS3anWWDac",
  "key30": "3qau3SU3571sLTEE6phvZEwLXotMDpMdPZNGAixnX3tFHVhGohpW6K28Sqe7Kwazy7Ske3W1X2qYR5EoB8U1v2Ky"
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
