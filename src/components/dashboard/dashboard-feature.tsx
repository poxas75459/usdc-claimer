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
    "2ARM6A2E2LjiHhKHUwsUq7H8NCUsqtiwdpvTR69kTkAvZjJKNHHHot2Smic6v6mvvZq9XGdAAirwPhBd4xUMu5e6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28QLPz4jwbdswsC8iwrL41qXvcWuDmDAgtimHtnWmjK3dW3yaiDAnTK18kWKJNAaNExU3AZc7ZQr3ak4S2AmvFER",
  "key1": "61LkQAimMxEGHfR133P78PUd7cuciWP4G4S4xbtgTMorE9c21jTPtjNBhMc67EnmkMSFjo1Esv38YyeikitoDh6W",
  "key2": "5THNgaX8MTXaN3Ju5opmSWzdxQA43gf8QFm854wCsVD6YpHfZad1yJQDz3CUdVZE8wtV8YA2LJRt95dA34teasSg",
  "key3": "25E4cJ2N39Za6c8Zqovps1ngsFBaBkWBwbib75Zkhedvt4ZuwC8NsimmzSM9Xn3tMZXNPeTdKcTEBYrNx7ogyV66",
  "key4": "2b4kWvm7Wdj8MVE3A4SLCNfiskKarHM8gSXXUYzib4HoxkpRp2nNctvYj3XwZX3sodv7cJRE3dyTxeTXp9CegrHR",
  "key5": "276VDyJg2HbvuWpe6GkBpM4B6ooyWwqisytMD5EDZn8cBcz7xPapgPqnLSLWp1jicQCqT3HnyZJ8qmnpjBYReYCm",
  "key6": "2tdALEfU34tkuUMfgcdKVf5PkFwiuzPavbfXVmEUwnxsMJDhq8jJZPKjEKftdQz7FT1btfJea6hCVX7Ci3rkP3hM",
  "key7": "27bqwqK2zBVsDLf1TnZpeAemYJvTaKFLVJyA7RuqQ8yUuCq2vsnvMPtgmybFv7WQ1cKFn19kL5y1Zt711pkqcm2t",
  "key8": "3yosoWiumTUFiJpxxLa7S4PLKvXLAtuGVZtXmCy2HvTFM21wsBRw2qghqgt12QCzzWyAPNAy3wFjB13FbtELqSkP",
  "key9": "4VzoeETmX57X2MU9QG3wd6kURwLnMMgGM6xAYWqTqypbmtvFs6WTp68H7eNf7jKkN1he16Je9AeVbPfX9NkajrF5",
  "key10": "BSTasn9D7QWoVFTPu5qVau8rmLx9CUQooYdzkAFZbBVhbkN5FNTwDu5vViAgp9QcThhvCTNPZFupQ7xKuW9wMQj",
  "key11": "5a4H5Bq5gLBNHw89p4Auk9wTZsJwYtACYGDbjaFzJPXu5eNy697J731h6pz1bqGzxthAuS277Q4GACR8zRyMdyd8",
  "key12": "3ujzWhPNoZAuR5YtDAoFBvbKGmLCB27R2pezdvBv5mqvuomSczkkgxZeRjpn9dzDAh4C9EEEPdNjoaS3x3TgBjFP",
  "key13": "436UpKYUHzMWAEYA7DcBGu7gnrv9PCAA47UbsisTFHS8X7KheER8NVbqgqYuf5NRmRdwhxArEfmcQ1mWa9k7o2JD",
  "key14": "5p2WzXjSEqEeuWfS5i8vBccJbkVmnEKEgyfCTtQSJFVnj5x8Mp1R5enjDNjvbzxS6y7xU8TBVydLg2Wft8MafEBU",
  "key15": "3h7imf1aG47mi7vCgGqqne3Jew3ersi5AjZJZ2MurnaeVoAbeeS6z2pHwHkkQxoHTDvvQECBiNEds8DhDmizUssj",
  "key16": "4L78NxZzB7eB3TvZk9ubuKKKFtdoZmxSQamjwx3oC8p2ZA7f6YPH3KMCfuWa1qU7Q4ASfmWHvKAztAox2kWRBjAG",
  "key17": "5XQMEUNzkEqyCLpH1vDARpAjLMWiuXFMmMdhs5AQ1seBzvPqt5tmBbCHSvNS1zidJdzUKCpxtaUPh9pKkvuDUJQ8",
  "key18": "4mUTWypHU14HebUjzgnmH43aCSLLVs7vGMdhNB4qkJB4uDkzak7Qekp5QeSEkkLav23WaVq9pH9X4TJLtH36GpTy",
  "key19": "5J5U4eWrgCjBRBM452TF43QMxU5xhXmy95EYj3uaGiR49moq6KyDrwaTwuRChF85EX2suAE5wW66J3i1r5yotPwA",
  "key20": "4xsyDyCzHwC5x8rqwgFT36zXUtcaVYV1AEyGGJb5Ct8MSL3gd8Vwvu7d7ivHpc1pnTeaA1PCwhy3NTVy4Lx3o6zx",
  "key21": "ZjeCYhQyVTYpd2LzP3vRHNRaFDz4STU1227cok3SuRntoMYFQiQiina7qS3Agbg13zBPryuiZdiPRbfTG5jL1Tw",
  "key22": "3RKxBTMdr1nxSBRx6VXrBqXf8eeEy9vhpwe4URsxiLjmpe5Sx2KHa9wL1N8z2nNGoLaCZxC5V8y6QcX9YHW2xUJH",
  "key23": "2KgHNvKkaPz7g2fSgHjNZ22zdZj33LN1FYiaGofyFsfsx8wSpDtVTw3yT7aUMqdNza2unD5goVbbadqmxtpVK5n1",
  "key24": "GBGLDbryecFqPoCLvBYvw6EvuVX9k5YmWN6Y7cnCeW54EE83Wq4MzAUr3JUr4gStSqwJxcrhJqHY567GRPjoqax",
  "key25": "2XNgix9q5woVvQ1FcuVRVZ8uHz6ZVVM7BQ1SJABVSfJnqQxNxM6ByuU6QYMK1PwJSRkpLcneDeb7Jh5WYQ4wVrLw",
  "key26": "5LU7KmQ6Umtj1fB9UWUFstdjzMEHEK6ZDQjULStBz11BLfK8wFV85d5p6oQhQLSG5fi9ZumBrA9oMywg6ne9z8zH",
  "key27": "QUUxYmQuHKqLCXEy9m1JawkEYNcizxnYsLFXd4ZeQGrmP1FhcCsRCDSoS5GVbnAyWQMBrQM68qLFg8jviA691mi",
  "key28": "2cAwstwFfekw8VXS3F3LLmdpkvHPEqCmEkpZiKyNmvNdJTPhoahCwYb7mhwZ5rKtsx3SyF4whhpiihSnBiuWbTb4",
  "key29": "2486QHVTehMsRSBE95WeVFbso4Smddb7EvDQwCnbnDWMG3knktyEUkyWeXdpLg5qcbz3U6ntjzXfBTbJmbYnmCDg",
  "key30": "5S6qr83y8PSZLFEUvXFXFH4CGnPizxRUybYEDFV8uq4mxE3LHWmKX92GE1XbgCBHtWAaC1fPPaEvYnvSKKHwBfVS",
  "key31": "66985uWANMSicg55uxei98s5kgLZkoWoSiwetH1hLTJpvtisdq8vZ3Ru31FjUbqnRKKZv2vyYL68VuCDmJyAKLnT",
  "key32": "46TdRTADT2rJzRhY7j5wgeaexzqYFy8Qpcr992TfnyiHXNJnQoczYhiWEEyR8r79iht2VsvBEuCgofYtFgiQW6oQ",
  "key33": "3TAX3jVYP5uRTa6XFDz7M1D7WBwqvZLZb1TM93k2F31x7fU9SN2jAyqmXQrb5SARePz2fchRt5c6xAmwtSEEdKn9",
  "key34": "qLUfYVJAxYCvBPi6CCV8rLY7zMMdeHAfwyAa5u1ud1qLDWPP7AndJyEN4NoEbmsMPBB7J79b5X4LJWg1zVEegsK",
  "key35": "iczH7t2PjyvcGyMW1aZ79HBZSaXW74LSCQyysbhZLYQizUpgUsgivGuY9aGeocWLn1nG7kw1Pt9eX94SnZvruiG",
  "key36": "Pq4uvYKucouZFus8W22YBFJRnd6o9WeZzxtAY4GfTQkp75nMFWcy9hLwekScJk3KpwKGSypnDPeEvbVKXWKCg3n",
  "key37": "3w2yDBUaB2uTmGRMy7PYTozFaz9uuptMvftzN9fH7MmjpcXotW5HQhNAAZvM7u2mfeTFAJTU7LW26a7osa2fM6VU",
  "key38": "kw9dEAm1NKdRuJDsesrbCnk7rnRhbWMqjBUzd9KUqwxQS8FaWi1MMtjtVUFvKLKcUKpwRvJsRm8hxPWL37CJMXt",
  "key39": "4BssuUTZhmqUhX6jyicBLFjT3BWqAHfp4XxpsSYwdr3A1vcUYr18wThKW9BTFtrv77Rk1vWfiWd1qvUFq5YtwHN3",
  "key40": "3qicBiqRfknS4nrH9r33LHX5gxQYBPEwTQtyE352Wr3HdsP1MXvtAuY2SXHfS4QYyjhov7L3or4xHj93xMn5woH2",
  "key41": "3eeEEVgDbYbBniKt2pWuJfGk88T1BNJRYWrh6hQTjW4XJzbcGL4tQ3X7xXsjZ6cxgBh8hrRPXWkZkamgFDmoqRXX",
  "key42": "3UeCmzV8jcPTiTSRnxuGEr7KPRnhVL2uLEPLFDhjdJGwEC5bR6FJ9vwG7n749XYApii85tTUqPicN4P1XX4gwWQn",
  "key43": "jTvcf2SFxSNVgW95tWfgdeiDsWDWuqHdm8gUWVESBhUDEbFxrGEQLKMvBvWGxVUcrpqTJ3poU8MhfWnX8kzuKdD",
  "key44": "KdrRGVoGx2NYzCayV2LAL1KNAMsa74cNfPDpggE6EdGidHPA7atPUPQAZF7jVF88N1CrUCtUppUKq6T3unzV4uX",
  "key45": "5QvPi8sR1v2E9P9WPiRhgrzYu1Zq6cjSFVphdhgHjv3TXkK4aBovaRryGrtUrHQT3PuZYb4o4SJjZFGCBahAFdUT",
  "key46": "3NkiksEK6G5LYaUMKJ5j4tmPoFAXkZ1iAJEWDmtsMbCZYeUs95qKjZoKWpy6HRE3GojqHFYmSD9PznzaLFSowFDW",
  "key47": "5UDtYCduK8uYfNBptPUMiSGoxRdannQwdNx5rZ89FEus3XPqcjCp2AKpjbJWg474QY5iAeq2iY4rDmBomyXZPqGt",
  "key48": "cjykT4rvQjrH8gRZaXCT2xAHD56QVnbyqZp437bSheTYqULRaoHb7TFYae1N7rs9vhJLKT4PvD96X7VCPYMpLVy",
  "key49": "2my7j29PAgDH3Dp7XasrPFEM3ehvUmgNW8ajCuUmuvYowkaMViZp9aWjMtpUzyPxpNswx3GCvLET55NSC5GAQxVf"
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
