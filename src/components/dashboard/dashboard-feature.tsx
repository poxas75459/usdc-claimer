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
    "5wTA84HhM1KmGTD1YwCKHLjmw9p7f2gV1fhAWiaixc5e8iahvVoRwe3jVbuvBMiJCJ6LJ3CFar6TbUD9prQQkadS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NXLZZqhy3x1Voo6vQvbpEk42EFGTVPXcHJ6mbBnBeJof6JD4D5jJRir4U5hZ8FkhURsxK9dd24ZJRcZhn4YkoM8",
  "key1": "2EFtT7TGeMogHgBHzyjaSByfDets34Gr2SQVkHdVca9F3kvnDVK7C3sxJSZuwbk72jCnxsooXHaP21BXTcR5S86b",
  "key2": "236CPGEdPjoJaWQ3KUkYHbAnXpBvKt3jVca2LJPftiodomuxnzLZsv4rgzMYC6fPWi6p5uPWV3M88oL8CtVsPenF",
  "key3": "2az4fBmd6HgCJrK5WoLQHYQ8nMVWZ7hMKmFZ7E4TAm2SfaH2GhpJD5oCTZjPimBE22sqrk1HRVfSGVTUzj4zTz3X",
  "key4": "2sgiCE6NaUWhzBbdthvRNryhCEpUAJ3PgqVqf1wM6mnc53nfbgbDFuruNLJQAcKXe7uUKSLps7fAfFsoWgk8jfCS",
  "key5": "3QcfX4EC7BGdcGH66oQ493MJuT3BCTKECzX3Kb4yEDkxFSNFnUuAyCRDCAoPVemjArSHgFmhvRRJBed77txQBa61",
  "key6": "wN7csRkM4L4xUjcVjiLphDRsK5Wj2H3GXxysTf4CR6etff8NdYDvKQtJzaGgR3QBjudKFHJh2nCHmzCJi8UenBp",
  "key7": "2vMVDM5YgdZ5UswYf4MhhsUoG5rsPLyjWTMzfByzeHnJETZTFjJE6vYkPwH1MyknUCSuRBRNXwkSmLtsTFXLw4bR",
  "key8": "34xau9k87p5yicuCdG25vHJppZgtVnJHrxcxMnkpbGuuxKUw5bBG7ayyNSt1CV9F8YzP8KYAEaL3zPn4NTRd6jvi",
  "key9": "3WKuSXATtiyXMdzkTLzfWnZMGPtL1HiYXazF3f1N6aVSPY8Ti9Yi7CvSjCZssQscqmX1j6McrMFEfQRfUdzRSn5j",
  "key10": "3pjBNLHqXDHKjvLHVyCVEJP7dw4zQ1wN1VK7QYJNftgrUp1kxYf9B5VMfUw9Qk8oBtsufVKP4T7eLZAoEkS1fg7j",
  "key11": "2JgcdNmSzZCG1FsgedMBQvvoFoGQxKw7fsX81oQWRpzQFfdFmWckX5x4N1VjdHPPVu7ZypDCxp1AsSK7GHeV2F4u",
  "key12": "2PDFqX3W5DLEJNnMcNbjTuqv9PA9vRCQ8Fk9SXH3jpZW5iJDc8CjkLA1ucBpXony5dx56vhC3nz1sBqiBE7Lgakb",
  "key13": "2aSNzW83RBqz5mnndHKP8pvHUqf6UYJCdkhFgPVyxqhgu1jZ3rCuYP4bxaZfj24G9N2MPQKsLmP5Yvte5YMkWCdr",
  "key14": "o2JjshrwvQ2jysqXjU2nQUyUn9raJQtaLgd9bfM4CyXPL5BH3AS7D96PPeGUqE7gdp7toZqXDVsuxDGweDBmffL",
  "key15": "5Kt4nQG5y5VSh1KimKqcvZW8vLnuimb8tT9CrHMinx4693ksjqR1SG3WNUTnkSfenjV1taBhbs9zNzrb2awKSk58",
  "key16": "Q4BSFNQJ59PsAaj5UjpFhLPxYPrZKbb6uR8ueasRfAoLWfsLjfVaNHzHcNtB4KTMNL6pe4bffaTUaWDFQBVoSNf",
  "key17": "4yVn7ttFc7CFqgavwgo5XzwBDhTcJnQxo7qWgoLSopZdrDE6ZeVJSuzgmjkD5mr3352LzMqXAwR2qqDspWDDZMQ",
  "key18": "5amMZ1JqEwtZkkFffx5eP7ejGR4J2oDZnbj8r4RupgqMHM2n1HNn2yiaAeXdaioh5SHgZRGWou8seRUnyMQBNGSb",
  "key19": "2zzyPzua6khjkpXLxVf3Pxea3PaSJhNjBNhPwcNqHXRN2MQBXJUqXmiWS6sPd4EpM1rJDCbefeM1M3EKsDA6grAn",
  "key20": "2vA9mefkHSf6bBM4rSs19M3BaUjYgpGKVAGP8t3ZdvD6Ks96uLKwkmTMADJvC9kZd2m48Yk9SZGFDYLQknNwsqrF",
  "key21": "29TXNZFUtZyBMWwdAe3PDQFN2fARuwUmREUHVuYhkiy8uNf96wr6rW2A21jUr4LmJp7BKcwNGEnfFaoV9gXA133R",
  "key22": "24UFmYTfkvyRV9wAW2DeT1AYFcVqaAfA3n95jT9UxSXoXNxoyJZ1DA4YYG34EZCXnqAHkiVwhpFFUjsasjDkvozY",
  "key23": "F7GjBQxg4tqz5DrWtghajRqD8KFVVHozUNZ2ywDB8qvkGw5BhrNFqBTqx9e2Vr6VSppm7gCJmKNeFu1vr8cThoo",
  "key24": "2YNGVmDdx881B2eTc7cevaji23VbnUHHKYo7YCoi7ZFvVVu1LBsjFMS8b3dtadvmAVyZcjqWukXrz2GPeVRS7FY1",
  "key25": "HZNCfhQGZ5HpbbTQKJsU6o56QwfUKWFaWQoQmefHXvn4V24A3BquMF513kDqZX2dBuD2dropaCYd1TZ6KZiit8x"
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
