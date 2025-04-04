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
    "3YeNocbKVjSUNL4TMSSbtn6D42gGZfVm7RM8ppH8uY8C9GU2EabTanVgoXsHoFeXzCbKL2kZD7Z68ccDuQCZLT3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54trzydh8uEq1DTcFmDvpm3jiuejqwS2AxydSxFmQR49E4b8zTEXxvL7eauyR7V2PXPaEMjRaqppCbHTLJqpiRAG",
  "key1": "674YYzmdbxrLYdoKEF9g4z5JfC5tcwuzeBL7KBpLbj2kdwUZBhwhoaf8koyPKEVkjBTSLXWZdcLfS6EVm45WcxK8",
  "key2": "2zp5UnMjrjsS6PjGJGZRPqAFnjD67cabWXcVbS4LvbnXPTiqCVxTp8NgqdrJRMVybjCh6XSZSMmxrnTGRnh7KYJ4",
  "key3": "5xUCZsnjYvdSiXkPEd6Uez82orbovgniCFBpqazKf96A9nMvoz7gDStzPK13L1dy87ErUG3eKeRs35tmqWVg5WkB",
  "key4": "3B4mXXYCunJ34bQnagdBePezhgfvtq7mGvvXqNmSxKb9YYum1cmdV6fhMSRna8fLtiVLeSjH5dLXyn52rbeBMMFe",
  "key5": "4vyV1dVoT3tNk5qwxr7fpCnnKAanGJhVy73QDMLDWeSqUkUnvvQjvY36CPmbFvWTx7RMAEzJZLaF6KxDAXvuWjNG",
  "key6": "5jNfE512BrzSL7RnXUnS7ArEUm4Rq3ge8CVQoMCdvcNfVTWStbHVDJZsYo1DQpLYD2ruwuytB4X7C4DQa86zJnm9",
  "key7": "iAFHm3Amv2YSisejMpZG5MsRTYHdPrFzA9NGta4YVbY882nYsaMGUp4wvD3vmmgxqWdEWTY6p83grVd9VeuhaSY",
  "key8": "3rGmaLbwp9V8twWAYAsqcJk8pX4kPhXuuVdu3oxTNFwuJs8WzNU21qYe4gGGBdty5Xboqc3xNhGYpzYqYeWN7TuB",
  "key9": "2mjjZAoJUzU3z8zDerxbAezAMgsrJMHXHsRv8WBjtYdtt7Q7AGXgwynwDjLq77ReKx5oLARAiqVMzroHqiivyMyE",
  "key10": "5TQveSPUXrt3uZhWz8wA6hhW2govsw1bJdAgbsnvprkBat5iGQnFA9zmzs29beD1rLGKHb4hrxEKFjL8Bgj8rWow",
  "key11": "3e19Dx7P9ZyeVvWbBpHiZztpkKGEmFUcoa1Zc7ZWWexudBpMcqin87XSfuViVwc4wuMZc53Y9gJ5yBiKe3fMqLpH",
  "key12": "2L4DPv4odKAzSwWNjDVnQc2gpbgN1Mw4spB6UVfxDXAvUXoaTRG8cyAGLmMWmR3FXPtx9HjXuzNzYByAs24qs7Bo",
  "key13": "PcxGn3qrQDTdFz8ULbt34oQVVKUamhCRsux5PWikh1oycmKG1wCe2hs8iuo18uivceCKLGgG6L1ha9N5aZPGqXG",
  "key14": "3g55iN1dxmT4Gu1AFExws513NSLXMKm8t3ekFjFt1nHyV3vK75AgdHq2rw2wftQCS8qpUQsrqSvKuMzicc3VDDKZ",
  "key15": "5Yx2qxCPUfGDwYkCchmVDfszfTwxig5JCkYbAGifcbc7By85Ubu3VsHp1HtBuqtBrVvipmARqeQxK5LKS2GyFEBH",
  "key16": "jYKEU6H8H2Ei266rvCR44RrbPkcwPzofmVfyD8e8HLmdeFiakmmSy1hnPAPUioxggyawjNY7qv5EPD3ufiqcuft",
  "key17": "5BQ275KJcpZwMqs7ityLfo3cKTRhvox6pf3YN1BizRXWJa6hMfBvn7GyJarDzgZvBqgv4viGf12aAQmrxPQ31AYy",
  "key18": "Die6V1o4oR6mgTJqdY3P6XgPuhxRrWRHHwb8vYZtFAZmXVPzmFurDWfRtAXNVDvPSF3Hf82ghQumdbqsQR2DZnH",
  "key19": "CVLP7Vg9gimtEcL6Tr4uB4i1HDryoyGMWCQqK5v2YLKGrVtiEbp224ACc2tBtPEd6mjT3VGvWGXFjEWz9rvHgVs",
  "key20": "5chQLNNr9N19FDveTuWhiwLCGmSiPfXR9QqoP5WwEAVjnEjAbmyKjeuq7Voa2QtQ9pBQj8hBoU4ETM2aUzBtNJeh",
  "key21": "28cFcLXYyRJWE1iaNu7KqC6ebMq6WbijddnWZmWAttJUVEmR26jQNf8e6PYXBw5gb9Zt3qN5c8X3Nhfm33dKdKJz",
  "key22": "45YcrSAc9qc9mNqSqsDpcfGmZwaYrbj8JbMtkjracQ9jYVJDAUBJPxcCWJgk9uwUuHyDbJzPV5gpWdDovD8n5abT",
  "key23": "492VxEw5j7gjDPKDtSFnC9JGUN2fxn4vUTsV2iQdPVT85WHxJKFBhSdPw4hqD1NydUwnQutVNR85xZ9QM33N2xHD",
  "key24": "ZaQK1dHDcezhZuhzuk7W1gWSjxsPE562BCVCxRMDLmxNs3gfrk4BT4hehaark98F5JnEVgs1U4Fg8ZiXLG1qzEE"
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
