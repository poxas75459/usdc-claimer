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
    "4Utg4SnFFBtQXNyvPXszK1Y8iSpsqJ83rJuiWq9siWbrB5Eqjm2mfZQ7mSpVsfnYReaYFL9iuVM78X7Kg5H5MLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PTQtkDoQVNh2JXspPuqoXcLgjJ7etT81wGPMwPJi6L1TTHsQARuu63JaLGoD8GShjWafsd1vfveqv9irYd5xLA9",
  "key1": "KJi3Uc4RQHbPx8BxuAVz8E5wB4KvUoRoLZQxfDsanmKt4KzMkVUMpKmLqfyH2mEvfjEC7t66AQ5ntLGcG4iA4pR",
  "key2": "4oLpiECqZNBjmjp2wNUDz19hRXtmzHqvrq2wwBYUmLEjqXQqh8qbr93J9kopKecQAAZSXpVaig6XaKQTgzrq3vXv",
  "key3": "2KmDqJ45CFcgUSo5uRx1TXh8erDpJSc81UFY6dTuPDXFmgcSXRCtP3ZSyScNTd4ynuv3dTth8ZS1xV1XHAqaLSyd",
  "key4": "5ykMDtVsMAveQVu98MnYuq7Gv3msU7VNvCzRxGWF6HqAwuMDJScHMsSCCKWg41PNUuYg9JVe4y4QG1aNJBrDwkh9",
  "key5": "BprdoyWgnwtzFwfMz1uSXjQd5soLo5JTqF9McDd75HW4EKXj4CUwaJxb39GJ6aJRC7bDTMdp8y6qTFV7jyGjFP7",
  "key6": "3r9D8CtzrA7q3CXXZML6wG5zYbzn4ESS8nARUTicns2RK8fE9yEwrJeuvsMJSxm19vTXnk8EQ4QZQmNibpT1hcNL",
  "key7": "3ocB6goeVTqVLFyeiDRRkUHEwxqMYaNzHVHqoXwE9Ts9orEB8AQEMd37ruExhJxz2KQq7nBwig8Zwb6jdrPoa9nP",
  "key8": "43fKpD2ajvnGr5MWzTq9KhhnALK4n8rmRu8gjo8yPBzjJwFo3bskeMYyUorTA5MiUrsxtpPcJRqrxfDmg5xa2c82",
  "key9": "2sZ5aMgAgcajfmapVsUm5guPBVx5vJjEhu9yBapk1yKfENKhCBNKMHw7cwNJCxR6gNkR2JBxnUzZFgi4S4eyKkNC",
  "key10": "5qqM4nURMrCKjSDsg51qaqMeD8Cmv2jjgmLmKaUEy2HWtvqUKa3Y6h1ZGo6RramhDW3KwKwQUmqbCVXXSi4mUUEk",
  "key11": "4JCfYy1wHLMTrvX6K2iejhP687o8XVYw51JUKakctE2E9XK9B1KWhQg5PiaLHwSJjtfxS5EhT9Kt4dDz1w3CRhxC",
  "key12": "CQJgynYRnHwPHzRUA2zKb8Tb3hT53LDzXBmhCDHj9Dyq7FZbuPfMuba6jbFZUafDkSth6mkwFH2pdghm49TC6UL",
  "key13": "3qNCKJupmB6WB47gPfPicEwAQgn9Zvga4U5ieRrC14oaBxQpN25iuno5pm9bsvs6FqY6Z9TmNHrvDuL77FHqzSyM",
  "key14": "2cf9bQy77EU6ubPxx3fVe5Q8aABqqdJafKGTBrLB7ZNN3PtZJu9eCRn6yjN4dK6zGLV92ycK6aixR8MU9D6D6d27",
  "key15": "5AgpUXfXPvjGwioNaZEzUbKg6CuMgrqsX9sgifVDwKyKkR6c6Sh4sLqHi9FoyJBQbaPPtw1SvDnbfFf3aYpoFMw3",
  "key16": "64PrGZRkXVp8wYfuqpkFpzyqaY6HaTLeWoy3BdHFGLcDa4YAUhPjGU7BbdnbmQpnEDo4HQy61E6Ha3EZg84k39uF",
  "key17": "4GGeAUdHGPyHrjfYv8PnHWWdDwAa6ab2Z7H25cMidyxbqLQvGhRnMGXGvXK7bcPWVDuYS1ixoezfDEe3yNxD9AdZ",
  "key18": "4MFsRQyEauStQh3urStdTWq45M7xsyjPYdrdpcUgGjqMGgNSvqcTsvnEgLThb1xDqbT7Cs5ngE2EE2UmTJP7ib7B",
  "key19": "4xMmuaSfFTHQSWQ2deVhrs7rjFr6KyhuDy4Ft3tMRAfg5u3k6agzkmBA6XUDTC3RFHdVitJpWJ7W2kCuxzwhJc2D",
  "key20": "tk9Ma35cPSVr75BFA7k8JVabY5wXz95n5Udkb5LuZZPw9sTfzieYiGPBfVytUo6mLfkp9koubeMDfBWmArA7e6J",
  "key21": "3JXBDLZVTKFBsQnkAfhU7QezDdsVeZagtCHnB9Lcs7jHvt8fLk5SL1nY1r3WYr3CYsrZ2tKB5WpZ7dKBgLCEHen6",
  "key22": "3PKzmpaqZfcyMokAFPNwqyfoW3F3Wo9hGG91VGtwR9JDyE3UxSqPPKjTn3nyaexjeZsk3fhxVBtikXqDxU9xSxg7",
  "key23": "PyVrqyx3QZcCef1m9aWUPzSwpNLaMX9p7dP6V1881AKApBcv1WbsKjnXPTLajURUd62BXqUBFHFcearPn1Mv8Kg",
  "key24": "rEf8tFftt1zGM2g3aa4fPFYUdkzenSBGSrnhb7jacbDX72rYX6v161bniuASRZV9qFXcqKhQnHRWkXSBJoXvv5c",
  "key25": "HnEZb26omCUagWFUf7mR6wZwyMWrRHrTqkTUSZEpLkPKniXr2FsypXEZALBxe7dax17QFeodiQ7eDKj2qYJb9jM",
  "key26": "4kgQKP4sHHHmkjM8rvPhZtzxZo8LbsoZmk4BgqKZCvfaVfK9hyhGtzYpS5X5s99XH3nVn4Tf9To7wSY61qi8iMFk",
  "key27": "3UCUo53dtAX8jQx2g2sAUYLMbKAyGidZaMxFzM3Hn7Sfj4Yg3giUv6YvCn1vgK8tEDoctA51bADhkTpn3gMD7om1",
  "key28": "35zKCZFQM3EMHhvQwj8cvE7gL52VsEM3Zf2VLt1dcpK4BsSA9zDw5QzEV5D14rDVXti54vHfV6mMy6A4Z14G6Bca",
  "key29": "2z8nszF6kESiqnFmYDE4dddyZZzzGr5XRxXvUUMMCYddcj2B8QcjDPhvuaEAM6KyLN9m4M6NaqQ9Z3oehW3yFzSw",
  "key30": "T65CeZToFSQ2DmkFM5jAaSiu7qFNW4e1pwcMrgVMAtGsHjAQYGLdsBFqrhrxcHGKxeJU6ebJ3QUK5eTCFv2EjbX"
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
