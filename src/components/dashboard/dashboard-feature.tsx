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
    "2Fg5abrRRei9cwm7Hdtpv4qVJXUX6QZqLPZG4gvQuWzfLqym6X3EsPuDsmQmna2JQ5ghigEwmunSG4sJGVFp1Mu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m7Fiq1ShHqjyoSqLSTW5GcHR3xS1x66MkbCmYqEtgpJogi4h5Km3hiDgf5GNCtsqZvdZi6XYrbWBkudj4uHYnVH",
  "key1": "4s6LcasKa1HmB4V3N9hvo6kA3EmSNruo1Y511xmSarp8QirjkQzHQxAjkS5hYufRxWUGdSpKvd1ywRPF5AHyX9KS",
  "key2": "2UD85kRHetBa4Zz194X54uFWFcZsJtS5ZS3HfnwF2pnWhA79ZZcHvtPmTboAd8Q1H91FjrhTn15cGs2fSFiVHnnz",
  "key3": "H7eMauKZPJaQsKse5bq6biiNvzx2K4hGwkUg8yonMqw6FJwykmBh46j6xLPtSdAw5mo1jzkqiTZkPcNVnjDhzbo",
  "key4": "2PMjVjfKyEHu72JsgVyxZJjFwsLPTVLqnQgj5mj1tSGEr38j24eRLVnt9qtL2zqVtF4L9tCXw2gvtNoXGXAZyDeC",
  "key5": "5kGMdjb1EkZxuXTGMwZZQXaudC6ediRyAo125t46p6BHtgFV2K1LCN1795nwqStTei53qJw6YSgjZvfAPTi6qLWB",
  "key6": "4mRmP2ReQSLrvkCzPuejMaNuuMKXcvWLAdg5nywrp6LYdEkUR3xMYpU3wD2keSVCn8Rpb28DM97hn89RkxytGxGq",
  "key7": "3m9grbFBtehsUmWnaGrhh35jN5gjxPBZ2UAnRWGnN6bQMUAg65teXnzw7ksHHMET7nCVmN5tKtcUzV1PVXwN2qaN",
  "key8": "5VdrjrmcGiv7gEQF51fJNVn84cDM3DZatf4iP2Nx6z3Ga83AALovLFB4MAAVHHC7NXWRX3Yxk5cmWUr7Djxxrrre",
  "key9": "4Fyt1CnKY4NkMEuhEd2mNbmPS8W4aqh51NABT8k9VsQT1rdKKLaSkZRp6rooobPyXJrVJrWfB4aKRR9g5pmU2GZ4",
  "key10": "sUcr42dKQLHANMgAyvALaJLe6uqGMwqauf2BRg2Gh8oBVnNuUeEx69C7cebAGH6psSgoXPfasrGy5w9S9Zh83j7",
  "key11": "2TJDRiKwHMvVu4LYBU45itYrsjVsbsbngkM5Kiz2A3mgQVmffA1bgDtuiRroSnJMUEownLmsmqu3Sp18VSLkbrry",
  "key12": "3TsNeamzRG7LxibbjPKNeDhjhWB7i3V8j6M2bgbri8CGRtYLHsQK77FSZTvKL9W2PVKjppSrArSfCUhwYLnK4svG",
  "key13": "2o4LajJfrMVzjqVKu897AP5ja1fToojrBnXbCpzX7oM2UazAjdJQFr9fxwqe3mrM9sAkJCRdEuZcGGcCoR2DffTx",
  "key14": "eTcBY5f6bHDeCDXQT6MpSH5mW3vDqqwyD6m7BLjVVU9y7VJPcYfyvSNEBWgzP7aE12ogY9G656XJQNfbFJUZTab",
  "key15": "2foijfZGuP8ZwfYTe2Wbcc1RKZUrudoT6jeFEsTGxq1FYqRdm2DEsCVu4L19hvAsv7tCSqVQetDudgkdLCMDkQNU",
  "key16": "w42Ttx9ohnC1GRojZdNWaio3xAaq6MAwHsdXfzrrxQr7CL1n2hjUGXqBgXFzA65k2D8PKQ4Hdq8KnGFu3fXN3CB",
  "key17": "2uBDpYX5VCcZvkmxxRUvR7jyLs9Q2aHfQc9Wpn3SaTTp2ZPuiUtuRLEf7eJjRFnyANsj1uEQnjnr3uvZDq7XnAZd",
  "key18": "3Y33yU6YeeUPGmGPYULbqpYUiJQUvZpx5brrHz838rFpu5HBmx7uvkHzjaagReDxqD7fKbUaBEU3zMpoUoGnytfP",
  "key19": "NhnBpsL8fyhTfMDVzqs9daaE9ZvguD6jXThsUn8EBBQHWA1uf1j7tiQfFbK5txZUkUs2VwUhb8LGcvLHWafKsTo",
  "key20": "5CJV2yatNn2AVawfcXnf72MimpNp1meWyUKDBj7vYueMRaE2p3oeXdAYEqBoRswANHdqHyudLUs1gA31FqvaG6tu",
  "key21": "5gV954qaoUGX9vFuX8FXvKwPAVd7pLgaKpHtzbTKeAap7qN2bLNZMSBVi8NZ4Vu4LveT5vkJqXTXUYWtkUfVdhnP",
  "key22": "5oTtd3xLAq22NYjNMBY2gxJhBYDNLJxm6aHgEzT4LsFrdopZSLw1ZeFgccxV5rnGCBR3VDYFnQ67wTZcSQqAqFS1",
  "key23": "5nvCEhf1isRRVtGdbCWcNVpMPV9XaUXYhYF4enygPaqcGt54HUwuXoeMjoz9tZirWYbk7RYVFaeyz9Zc8H3R9Xfy",
  "key24": "4zthyAexg1e6ataV47d3w1a6tKDBkZgYyH8DHMQV7cmDugzxCLy7FKsUVdfQaYrsUoYXSARiYAcHm6A225AapmEJ",
  "key25": "65r1pLeaEWSe3JRsqZeXopkVrpKvGaYNzxqdzFZLbxncnjry79jnA8FqGDJGcA2TqJF4WNWbXyftYqYMeJMpRF77",
  "key26": "3v5vQh8eb8TgbRhhHShSd3DuLgFdTYxmNLCnGCBV4rK89M4VFQ4JKbnF1q3mjMnTzTyAUzdRBbHh6a7bPFQYMPzc",
  "key27": "224idUxcQJWr9rom5AM6QMRLqFTND5bqEW4DSn3NrBzWQeqfedmPck7EnXCZ9JXFLv56qnWmaswEBMsAa8p1MFs3",
  "key28": "2AjnAd2GsVDe347D6DfksUmEgJjDvJcA95fJ3fxxPRZeVSdEEGEq5UsWeJ52b5DCrt1RybDPSQbCugmtsSgMfUHL",
  "key29": "4iqBmkvFPif9fK7oXuZCtVYLGMrxqFsym2ebuHJhe9pjVw8C5ALmgPNG4BbzwpAjDRcyzFrG2qrXTLRg1bUu53RS",
  "key30": "3wU8HTxfcn1wLkrGQWppSfYdZZm4UP7DD8bJxNQ1vYDvPdiSG9JnnnPG9Uy6jbqvwYLEw6bDVwLw7vBKgJMCgVKZ"
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
