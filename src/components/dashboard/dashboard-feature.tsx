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
    "5c5xb6t3EGbLQfSjCc4632KjpLhG6ZXHeSP7GSqaUM6wyUr6Fu5VqmPMyMw5RD8J8CpiWS1infZ796ktXvo98At1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABQPanMdCJE1niCwHECNxuukMaGNkdhC9faT6XUeYUc2feCHihzQA2K2KVCXLu6G5asar4bGuF9gzjieyoywRFL",
  "key1": "43FQaTZfas44YhJYTEK12BzNTvbagvd6c6qk4iF6tcLbSTcrL2tr7zWYzwHCEC8WdmFZ91w4dCdtS7TZzp7LFCHK",
  "key2": "24ES3eQBDs7x8P1TwrSCn6KGSnBntNwsHEwrNdQLLnsHo5MJzxzuFqorihxEs2Y1L9yfQzmWxUkfCChdXx9zJaLt",
  "key3": "56Na1BLcuy5xwqSTu6btFbj8JSy5HSUgkgvE75fGcS8iTmdqL1YUjVXdgksL6wynYWWGVcKgjDiBcUbgrpZPa6zQ",
  "key4": "4zwpEAsPBu2t3YphECHUqnRrPwtaQMbTzdATPD73xzPrLbbBQgZkprznvuWnmUfVCURf5xjndLtPYxyEUbD4r5iG",
  "key5": "kzoaYB4Yrq7KkYsR8tZ7P8u1Dra6WGQFqya2zMAk7c3j66StHRKK8fGg13jQc2NHHU2FDGkxiLaxfT6F8x2s21w",
  "key6": "2BfZZ78i27RPr7LBFvBQNbFqstFYRVNfMH2FocAqRXqKTgresmTV62GL82N7Ey6jZqCQvkydzRo1dHVANceboCoq",
  "key7": "3QcfkeS2vXzef1jJwMwDXYfhCwW3Nwt3cwU1Z9aFoWKeUusF56rtmy9SV5VjnrYckDYre2YZHqXr6xqfyiamK5Ki",
  "key8": "614SGBANZHGhEEYZAw2Dppk5sJTVEABTYuxZ2KTJrjEHyKWhzyyoThwH8vBNwwM87x7TBmf9sAos2Aa2EqRdEbax",
  "key9": "3KesMGSvEJXoevatX392LL6Y1uJ1cBWbgDouMeAs5iZAw7a8993rAxNkXUnFbXe8h3A3gJc3vwQSNkf1GqEoS6Wd",
  "key10": "4d8MDVUXrh51BsxTBWfV3R8NvpUYYNUTyWUnxQ6LnD88VQkonhS1DvdkF3Qg5kqomuCVvqpH7xga5FAWNc1GRwki",
  "key11": "2hvE6KbU5uvk8QaHV5QG2sYDpkxCnDJLbGytJaiCpWntqJotaGtDxWkHdBmmMdEBmRcrQLcfM9ZPn5XrStNWHu3K",
  "key12": "4gpZZxcfWJ7ZZKNNuzJXS7HVZLK8scb4tiF6VDCSFXUTHEQV9iDtHMPnyrH2CsdoGZK96XP5EkD5BuERBu1U3yww",
  "key13": "42HZuNmZtdWLwBvvVqngP7Un9ScnN4wXMcBnNo6E1i96wysHGhc5CTSgaj3ZU7ARPUBZWhYm7sSgm9Jwt7ydAngD",
  "key14": "4HmTTGTdSGRZFHLzP8YAqpM3PwkCNTNzrrye6hqkZyECvXGqricin2VvTjYW754gTq38eELFrx5TBLay8pnXWN8A",
  "key15": "4UXvSRbMhp6QEv9TRPYoy2oYfLSdTSTrujbeRViaN3STzDqEL9r3tgSq39BYR1CiHSKozU9Ybu7PjHyNB6paFvZ1",
  "key16": "3foqNiSCXLwThjZWnTAge9L5iwLYUZ56c5CQ5BxigDtiGAxrsn47PJUxY9F9t5CKdZNkHEbhuiK45dgy9CyPzPk9",
  "key17": "45iM7bQgVEdqcHfvcXsqr9fLTTra7MS19wGxLCkumbKaCwFxYDBCJLnAQvd4YwgtHcRZW5inyx9yrwjbV1yYySMg",
  "key18": "EM1mvpAGu8h26UQ57RmfsLRfuXQnAQbHXDs6cHHXNUDJ3KnzV3eUzREnmTwLx3MX3Yrs2nr2qARGgL76VsjoLAp",
  "key19": "2eoxj4yXsNFDjXjahq6mK68EkxWF7b9oJBkwsyKHwBeS2iCaHeWokrdFMLYFdW6DZ8A8YnK8fRgQhTuSv6P66r5u",
  "key20": "3JSzHUriJ8QcwEiCSwY8sQZSoJ7awQQd1odiEU8T5aRzwGv2XrHDRots2ZB945Ze7uWwQVwAD56X9S6iwip6xBTF",
  "key21": "38PwrKqVEbEexYRCuf71Zmx1Tq4FqeDFq9A29vApsX1CrHtoipEe2nu94L1m9pZ5J9fFErXE36WQar28fqUaKgHs",
  "key22": "aAdHTE6GDbXU8AaD1B12QR4czNNDksp9KiN4TAnpHqhVe2vKLQ9umW6N7ERNQNvf59ibW2FjN1mgy41MgTrTHZd",
  "key23": "4opva4KmLKZrGkwWYXkPNrk4t8iwL2c8p3xqfPWxZHfbbER2uxQaj3URWWA3ewAZUGkLs3Pn3EfeTRZAHiS8TEQA",
  "key24": "jTx4J8hHRmt7WGLhx92YMLWt5hdMW3qmuKMQc9wMzmt756UwKvbkLxoUe4waa7DRsVKHBjmiFE2WzVDSm2cCDHh",
  "key25": "RMLb6gchnxeVkVHHQ8kvjo58RULEtvsqigYzWDh8sx2cJnDVHMqRCp8eGUqNou1LbaCAk6NW1vS3jxoqzQSUVkn",
  "key26": "5YkDeepDprQLMbfDD8fQVdVAtxpnc61CJSXKVQ1Fpj4NusuQuvKGYKVLjqvYMMiTNokoJpucfNnZmkSQ41MmmbNz",
  "key27": "RA3JkVSdRu3FSU2QNjAJnBYZBqyDQTge8ASwhCHeBtxNsf938bJqwmpohKWiLesMGScQfkChreafbFHdXbN8tsu",
  "key28": "4BN8YXdJH93EA71jmQJHbHiRkD5dcSt6TeZvKBM88vkzy8P9UdZzK3fMFwC2U4hj4y28ddo6mZVUtUpaW7kZzGCf",
  "key29": "5c9oYsFAuR9j9LJ2bqSJukzEmanor7k46CDsv7hubeDm5cegPjfCib1C5u3Txd5fcZoaUwLG9BC1APqJPULQx9jz",
  "key30": "65PqKU2CVsap2GAcBozVyg63PBZKGkpxeoyNjveZUiNMvv7g4uTSMTs9JrszBNiWWrykwNvUmBHwSLuZp6M6BWtD",
  "key31": "5nhhGZePhP3BBrYzZ5T9DEy73SFAc64nN56yfsQr5WtsK7m5brcbVpdGdH2dNqNfFoqksnG3ygJwFmVFYrXo6LjQ",
  "key32": "XpabjUoGtPw6VHfshgYer6sq1FYp6HTWt2HGJMpvuERT8AxhDY1kJq6xM8AH6qSXWF7pcwfAaJ7nKWLjozoLmhN",
  "key33": "5r9xQZtPzVpyfy4M9P76VXrGCDPb6ZzeHbDJt67iAD4K5WZxn75bEuLyNZmah8xNKGFcUyzTdHHpgYoAzEHVwoeL"
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
