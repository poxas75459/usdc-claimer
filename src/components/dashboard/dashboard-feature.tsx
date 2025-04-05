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
    "5UAMsP94j1hpaT8gKPpSHUbxEKcq3L9PJuZYGJASDzFBL8yByZwoFWs1V2TdyXoh5Kq3Cg3E4Y3k2HfzM13mh1JZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yihCZNtYKnqEm8DLi92X52FDmL6GL4kscRHLZ9P2yK8ZDZR4NoBNCU7VnMFn94HeYQaFctJmFaeQJWXcvhkrQU9",
  "key1": "2Z12jnFYaRfo46hsVTNQKf8KLshTHXik8xDHX9aqr3yVivvXNEQ7go68NfQx4rEHTjwCNw3yZUHzpUCxgLa4BAMP",
  "key2": "7TERj5MAsY5dXF6bjSZtgUV638mzfuFCUJztec2MfTAF7xapTjDCvYUtQG5qeEY2aRsx49vaAmwe9ApSGJK3P2K",
  "key3": "3yBvcpvgX2SkWSmbDboGDZ4hyDeETz6oBq7qdYfhbwuYCrPGUNFLX36FE3oTRwJqU2FxTknExh6dcuWwT9ysrDty",
  "key4": "3zXqE6VQDjYoCzDvs9g7UuahyNGy8pESVmdMi7xRLsMQsqsCBsbvc5KAsJJ3nFxAaRndgMyYAbJWTwbWWYeJfPkf",
  "key5": "3Tgzx7pN3qAz9ctJTVWusQWAZAXgUTtC598NZXbQiQ7PkhhASXTuMgZ4TcWP3v7jH1FHVNDcJSoM3vdqYdvT2q5P",
  "key6": "3HDAgCKFYyfu7s2ZDR3aSgL5fMus5Wc38WK51f4jTP1n2XtQyn199ChWr5EifdxJPgHnCegDvxbLwRfXW6xF1QHc",
  "key7": "QqXfNdADJPfQS5Q1WbpNktURbpcZkJ7A6R7CAVb2oPD7uMDJ8gBhwbGNn9WbJv1aNVQ58bJDYGyb13AzUqSncZt",
  "key8": "5WJmkhkgue2U7S8yM1MTf1HH5eqAbAvn8fhbxSGLhYdPUk4QFF5qqYQDQyekgsUKks1pnCg7qaFvac5rS7N9W4mj",
  "key9": "2baxDSgGMexhPgd2iZazoE4zo3xTZR7RkrfRb2fp1s1ZusXgT2o7GqDRet4bJW18kmSwnswKFUWXhLpcLg7D6Yv5",
  "key10": "4wd7MDTnqyLY2eAexfKEXhzr9e3hcuxJR92U4mcqjbK4YQEa33NkGJPmgwQdz142APUADNqeHDyeiWzdxU8dy94v",
  "key11": "21KJpcX3pnmrvDvNMZKm7wxhjoPRQrcMGC6hwQdtgFMmTKqGWzam5Vq4A8kLpST8xe8sXQAcZTAq7Z3ntyZuWKCL",
  "key12": "2a8ccGXKWe7tMmXBMUxRJBLnDKBtdAYvJ6zwjX1DGTVDYQcuEWWiYZnmjMo95Pqsep6Sjcb3wio1sM4VYR2GATqJ",
  "key13": "asXTGXxpcHd5g7nJUXDVQHkgY9gftghThQeaWExhUrsKHmnUU32MmGhVvNx1rdQ6hG82o1K4mmRuB2mqUQAo8QC",
  "key14": "rxnW9HnNP1XLKYUmzcGkPXT9UrxL3Hc6UEu7XcXhxpU6rbUe4J2fcE3hYWpTjEA4bnTFKJMHxtqGZi7DzgMdW5o",
  "key15": "3Qb4muRoKrBPK5pMsa5DARXbYABxo1Cvo8YrpMapwTmPFRqGyP97CnAtZWR89wofvnQe8N4WDk3TFJpA5LN2H8Vn",
  "key16": "2ac8sYrTJkNc5ErfEKuUKEZpWGFdSv3fZRSbC6t8TYW6sByf81ZBvmjcaPr6GLFWhrpkXMqYRC5FShe4LvJ4oGr1",
  "key17": "RJbKN1wXdxnRge2wPy5buBonVntmHt7CV4Fgwg8MQ8R3xb7bZidLST5AxJg9ngAmgmyFcbr8j7poPNdPWriumPV",
  "key18": "WbHRY7ueMSHhTRVR7wDZdXAjc1F5xtrPix5UnUVfdN8YZ3UAg2uFV4G3oKfvxsMjDkmQA4kHXkeCdQMjwsfgs8Z",
  "key19": "39X8EoCdCtTcG4qLbgA2skoozaAhspzniCf7K2WpNzTD7mW5H8oTa87ctBw2wj9ZQSQQ95Spk7SP4mVeLk4kjgM4",
  "key20": "2ndA7ozhpMGGLKp5FmsQd6XFi9dPAaC6y62XAWyXmABvCfGr595jx3f9s8L31iqiUaTdwgYHcrJ5WpceBQrZR8b3",
  "key21": "3XJJbYe61ZUZbth2bKwbK7vfseYyeTq2hYJ6BB7P4BYULnbocSd3diFWwGcM8tfht6YDkwesxtTP7VTB4f8T8qic",
  "key22": "GdnZX5nsHCssJrJFeFgP9dqGbhnystyjF1GmWtH34GygE6AyDy6WXDLmuqhdzqY1nZr5QYxcnUner3MxHtUH64m",
  "key23": "4QrRK8RZaBX652UM8RwcpYs8ccqQ4KSVtU5PedvMBoPsRDVmPdDwG5Jmexao5TvxrW14PkUe41tXvApuP83pHyU4",
  "key24": "4cKSaM6bSPmf6QkipRzTySqqA3B8sHTuWVsRkmYKfJ4vWDFSRhs7evuTCsbrVsrMiM2yrG17FZugB4uSmDJ2RWwG"
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
