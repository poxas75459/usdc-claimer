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
    "49rYPdfPAMA6kbRPFM18Js5fUx8Ke1xRpzmqmbBhYvsg5pY5yZbJ1c2Q1WkXNZ8fUoDNDYYK7zZgdL4BbotF9aRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "477pXJaz6HfCCFrfztTudrYxgxyM7VT8YgEPnYiGPPbvbi5EDzMCkMhRz3QLUUrfjwhFvG6jpLqwcpdEZYEKegzX",
  "key1": "5raWcuc4udHWYiZ19obEXgL8GpMXZtTLvjaSinNXCL2ruE1f8pFQw3xMq1BXbY7CJNLdd3LrqwDk9vGDjeHLpcTu",
  "key2": "2cAjib85o8kixXGMppxcR6WmHTfoWFDCVti3p31hKSPRSxkYeR8Q6tHPNzUqktKAfxGxZnLXXRMrEoNTc6xqZokc",
  "key3": "54aGAVbER8Mz8adydzyW1pUyuRs8QbyuMvg9rtvbdNAGv5HabQaPdXJdmrq2MdH2PNSMDX2RKgAxwE2FMsVn28Ws",
  "key4": "4Q64d8kjuziDvkSnJT44gs34Ex7tts7pmu5JbrPuX92wyjfD3Mt9ji1PEdgfJWHUjNQSBu598u8c3t5EqozW3BRk",
  "key5": "33nHpA9Vq9FH3bsZX5cUTzkwwxvj265DagfCFsmswehV2Kq2V2xwm792g9Ebwpciyki7QMsSKB8V6h1eMRUacjc4",
  "key6": "5CQcsZTXQBmNkMFMGD5HGwfVhXLU9Ly7Dk2Rm6pjWfVFr2uYa4kVDhBQXp4r8o1ykRZdZ4AFD9jr9M7bKvgGgCms",
  "key7": "5mUKczf1rUvBgKF5JwKMCYpKMJfeYXnqe1omrT53b9MMj4vyamyQBJPDnfKwioVAryymkzDcqUUxEMwVShLceFm1",
  "key8": "4cCyHzd6EoHEfJXPRz8Ema8SMeq6mptofdaLqgvE5q4Q3iTnTQ8cmHZemVzQKutHf5XxFcyP6KERPR5g8YpvTcGt",
  "key9": "4paiN6LcqSmPS6JRUDXWB9dxfhRJso1hbgPhkFXpMtDEycFamW1DSZK8VSqcJbFbpkbCZUCKXrtMpJ5EE9DXbDF3",
  "key10": "2v5hpQoqbg7PFb6uMU8a7upMnXxVyYGBhFQ4jHzSHB1uzoUxVMYyrTMUikQ7UwRTxrv1VhBP9fVp1PHkgPBafPbk",
  "key11": "4erQraZoectkASuSvgD4my5b74YKk9wzcd6FhSzH484MuFcfvigedJB5PE3UVvvcLPhpyvUandxf99LY6yRPyFnk",
  "key12": "4GMPXWJWfB2mHBL1Du8c3HrRZn9s8NzFcJr7KBCrTAE1jGc3mPu5p1dQezMiqVs6LCnHymzYWHVzABDaodV2aiKJ",
  "key13": "2dLushFwN1CkMf28QbZjbUftJeyThHtA9eEmg992dMrFeMnD2RgpBmzaNxjEJv7TX4sieL8QeTAmcpFUNPNVSk2m",
  "key14": "fWNeaCJ3BtaqE7SEaoakLn9eVtdVj2ADYEX2b5hTvSxFD5BhZeaUVSUhxkmS3gKqft5Yr15yDm3etcTP9nxj7yH",
  "key15": "oHmy9mZ662o1xEBi4Zd9mR6tGrSRywU2wCKaPcHfZ9jm4GrKAkch67wRpkiMqsdWCNCdqchRd8vTES7c4dw5E87",
  "key16": "7R3dEoxMuMw7MKr94XLxT3TnhRraS1CMuQm4NcgSZuXQN3yimgCyAbTJKSXGkD7LyAwbyHp8TZypwTABU7rycQt",
  "key17": "a3nkSRgpMJp4WdmXEAjrNPTRHNjCkSdHmr3T7LT4xqyR5teqdE1ULPX5U7UDECDM8YPW8Qe2xE2KMZoApFN8bM7",
  "key18": "9uKbUvEpDAuBmuvfcJACC14dUzVF4h54SCzQW6dfEPMeSWS4NCGnsYtAk4BJaQGzi1HkxoGom4ZtWwgtzfpfF43",
  "key19": "54S3QQVZJcen4SDbcnATq5nmusU7yGyBnwMSj1nXL1yQ61mcLaa5ySqoP5G7px15uNpTwanvtUTGyxZkMX7tMtD3",
  "key20": "3LYgdjvibUTG1VapGBkm8Rw8SXAn5DLW7VghUtcQHccy2VvEsLTpyRonwWY6BU42uo2oyF6WDs5rRNexUG8yApUU",
  "key21": "64mSxMb3uCZC54S8fNUg6V1fkwqNN7u73BVNDvkiYFmL78MDPZe8jarUpo5iDvwGrnJUXseEFNSMEtni2pTpjDyj",
  "key22": "4eBSYpr9c1NrtKMVCKAa23MdoYGaCrjHF1B6JYdyzBn4yRbnsQu12MppgcrvaJMtSD1RT2aCiceoWGYENq5QS2ur",
  "key23": "5BtZPS5vBRnMAf2fmGXehvNmMFpwW1uecnz33s3Dobv6jmNCs1Ht7J6PVAS3iBCtQMNVGJxtdav7tPBvGfwp6X5R",
  "key24": "4u7iM7cGHYuo9ytfYkyRwXDrAPwfTdBs4miuwxziT4CR2dEQtTy6N3Puh8KDxqD6UsH2YxmrmDkAjmUmTZkLd4CZ",
  "key25": "44PSMC2Tn1Bkh7uAicci1EaYhLE5EHEraq8F3fdG2hBBQNvyuYTDCAKoH59VNtGZxK77jbez5G5wWWjPXZbaYGpX",
  "key26": "4PbBr66W9rCoRKZWxiHQwimqnh2fxnVFGkVNofaBiiaiQmQ9dAjhuUZLkcUr3pLdcgZyvT78YMWhuKF4H8zD6ErJ",
  "key27": "2pwuNYzufwzkcKdtQEtVTcX5S3AjbfxxwPJVqs8r4odtYZUMXYPYUrV28NjzJMPgWkcogqYVdiJU4b9VjqxUokPP",
  "key28": "5wbcmYmB9rDLwFB5ZeeKffFVMkpqwb3BU2Fmw1xiyhYGrbiq9Yi95WE63QauoFYVYxwoD4JJd41RCXyKpxJJs7yE",
  "key29": "4LQ1R6hjepuR2JKp3ff9qM6DiTLQmrqgapxztCtCKuv424B4HfEsaSMUpedtYqyARzQnCvUiJdyVr4pLxRiHr9Tc",
  "key30": "4Z6cd1JHWmGVEazP38eHhgBh9dbqVWsfpUs8MWqAmrxARDSTYrV3SRk8Aq6zJ2iR3uzXnRfDx9etwhjQipWepNa6",
  "key31": "4DLX7TD6MXQsXNpdYrnALMi6K4CHvAjshBYbCJZ988a7TaNLzuUSScaG5mFazqQ9Hu3V6ec2iTrDqA8iUipTN7vZ",
  "key32": "4RFiWXD44iNHja9wE4SgZ33QApYyuTzvfiU4c5Du9EsZkF2BzqvdDCXyhM69xjaSQxLmBj18FRz5y7AELDpNwHwB",
  "key33": "5swS11rdjEFKBD9HyqQnve7wRTJ1CLRmF2S7ZDXGT9E92MJWV95q6wgusmiTdQDsq7mURBRk1eXAiydJ53Tc887M",
  "key34": "2aV9kdgBwnLwEuZBrREygtCQdUnkqGDw6i9pFXYpD9noky5PQPGq6vWhyKWCGQ19EPi4hUME1FLBKWEFrmL5bQfb",
  "key35": "5fUH2EdSpGD3XsJNCKq27hxd4AiQ78eVk7MyUCcdbahMRdTjLKjtsQGLFyeKNXugSrgYrkCGLVz1ACYaBR7E27ys",
  "key36": "4vF7f5ZA1XbJoTYtF2Gg8BrNzCwgxBm3gwoJhuPqUrLeLWbXmrrPGSJD5APeqy8z95kRqhHjdqUMhBCvE71RgzoQ",
  "key37": "4Jo4yD2v77KfbLMfEcHhpySaZvSBBRmsRimErE5fTHnBBJk5b5SQpwRqXKfDXSPWery3CCZtkrU3GmJhptwZjFu2",
  "key38": "4YkbfGRpAEno2cjiE2TXJohfJrDtanWhvPTUu6USES2PsMmetkdj5dxZtE6x3aWd9sL8chJB5k68wAgMnwHwUkqu",
  "key39": "5bD51JuZ7FFsiMMip4a3EwFLmpS8aiaDEEqr1J8Y9iKNVYb6mBYSWJGDKHN3nRbdy7CVoHATRZARWCyjigr6cP7H",
  "key40": "3ZFc6K8r859kPrexiaGuZrY2mcvJbzBpPfBAqwSqhZHSs5NXR7uf4oDCW5ufigrDHaAMb1qnt9HrvWB7BUfx7sSJ",
  "key41": "pBK4zziDMwi9iD6HzvF4HKiTk5Ywqj7qn1afQrMbcJ7sEbngAP5Dq7dM7SZf7ZcLquTJyeRXHK1biKuKbQggRe6",
  "key42": "3k52dxJx6v7RGZLky8M5KJ1yjWLF9u6TNgjf9BYvbp5BhMP8revtGXb9YtTEqxFzrBudw9Cma4YJGjnnSUMavAZc"
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
