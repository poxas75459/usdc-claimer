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
    "5MxK4uPnDtePH8DAHjsMKEegzLLXbQ8KvyGnugZSBY9xLxkJ3jqyEzL9EZURStUdojnXVyWCFszuwbaN8BohdnHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YtVc87YLabBFdt4vMGBf4RSb8Q8oo88TzwxZLsrn9VQQm8ADaZikdfCLBdVA593g8SyHe7oYvL9QCW3drnFf45b",
  "key1": "PqiETEojTFryVg31Q3wLyXhKqwvKXmUs8o9KwjNpLNLQzgQs9dJgJSsox7eBDPmwhUVAeUSSq3rqyU1ekasGwX6",
  "key2": "3N4oNaF2fCrADcRsK2kAz8CpsFH8uEPoDEMSkuT3VK8uBfZDGzwHaxG6U52DyXD7eKEKWBnBPnAfY4cZ9DTKycAM",
  "key3": "4ei6upzPRYHRk4MiHPsgB8YTB9PggKJJ7gtDwdhkZAbaEexUeW7rKaP65miA2U9Fmu8ck8MuNb75EbXBBENMeeb",
  "key4": "3vSChFz31nXD5gyFyArw7nKm37VibgGt1nG1U4QKAvUTUeNf5gNrnD6uDdcvj3ZykQuhUc3XiFRwHcj6hyW29Vky",
  "key5": "293yZrdeujQPHZpKbzJthcPR26SEUh4npdwJAtHxuvDHXbhPSZtfxjSP3VQ4g6i7kt5MbvxdTacniJBjRXZfPRxp",
  "key6": "NUGaa8JXH8sA5AjvY6BMu5HSCa2S6NdpFc3qzxJ6QQqW53dZYzGxhQx7xLqUC4bDGLJtWRS2ZRJCPPrX7v3Shk3",
  "key7": "3qipYQd5YCpup7988yqRqiShtjAiAfvceCrrzdz8kgpGtLp7sKiQXAvQktGpK8z53FwRFXqpamdmHHUJR3K32nXA",
  "key8": "3x4p4T9zjnaMTLv7sfszFUVD3CEhiH9hrDdLiC1AGNscjDXiUHzMQwhT5QQrn8AJ7DRWQZ7uyY2Ce1fNrcJzFaiC",
  "key9": "3jdL9tVYSRMuxEhBUeP4DvtDSDWUuyogWBnjxeAcfvhJh7xDf6Tu581ZTBH31rDsBiSkc9maYZmX75v4pUUrY5P9",
  "key10": "fEnDHh4s9xquRWnmPH4YpuN5NaV9bzpYaAXAZChRLg7tTcSAwqQfFoLVYHs9mpeMFVYAaVAzadUhJ1pV8st2wvm",
  "key11": "5jdXfeLx3XcL1yMNmMiTq2zy3vzykd2qm1tgumba1e6XSKpBbPEQpMbhTT1te73RZR5jcwUpHaD6YgMic2TxS5FX",
  "key12": "4ymPfqHkiZeR8ENqgx9GuhTvorfHqryjcgKkA6oRi9sKrhE52aysmGmw67c9zZGhvZKtgiiZF76G3UvhcGE8z2vo",
  "key13": "2cEmsPB2uipfqaif6LPs65iH3kQ3LQehDzK3o6ipve9uRoCS1hFDV9nk8EWmicRSwbjNHVxt6jPZ35VCrMBbDxZb",
  "key14": "2j5wfd6UF8H76EmDv4kzVVPs8RgVoAJQuSF8T7HvzxUzEkAqv5PN9Rf521ETjGjU1bE87aF7rP9GkCkRDMK96M23",
  "key15": "3UsJgQ6PmUJjmjdbeHc3o34cCVknMEMvibHJFMnA9x7x8expEcKmb9rrxmWdCEsdtP1nxD84WoPj7h6CWS62tFqR",
  "key16": "47p8vXETmYrLGA6nZvUKbxSibWDkZL5zpv9pket883jiz3TNj1esi3aPCvUPD9iH1cXcqWXctsBNeF3kXxsXfL9N",
  "key17": "2hfnFSJ94wpu2RtCwJPEntbFF5Tt8pbRHN6YssMekU1Ncdv3jtCJtNaVXHHAoE9T7mdyK6F1qCMQ5obYCYGMBbRt",
  "key18": "3mcFYT18uUS5e5uwUWk11oSzQ6sJDTYQpXK9qYKErhXfPuv8Ef9jGHeSdAmVqh4hCmrHNWEME5bLRyb9XGvSgsm9",
  "key19": "5QMY9JBBmWZPtUUngHDG3o2DvB9DYbHNNx74PMnSWQXv8yMvXcmNL4n2qdDVg5X6HEwShnpcsvZBamzcomJRRioy",
  "key20": "29WNnaE3wyDaeFH8QEyBXwkSnLceJMCkkDmiXAGkEPi3siz7GNNZX7AWbH3iKEAEvRPmp1cTT8nwXhnkCxGrgQBD",
  "key21": "4mXGdKhHVRPNXKUYfVSLiMGeWkPt8bHAdejroPytrji5xR9baoTuvd76iTVes8z2W46Q4JNgeqD62VtjHphsfqGE",
  "key22": "2iLN2f7FhiU6cfvVmnCGU1h5bqJvJHfAbnHEiCby1viUFqWYiXbhgGQNUcKYQfhvXoo3FfxJgpU8DJkHu6diAfD",
  "key23": "2upDQsLYKxe7Mo7xDLtq1NYh3ekAFnWrXTJRVnyf39Mam6dWzKVZF6HE7YDzpJB34jcuWX6KZz6QUv8g1tfCxRkq",
  "key24": "3ZYRHgb4KtAYZr9GQuPHDvd8W4xzQM4d2N2qyohHKzEbqgA9AdiUyCDt8sn8bG8oja4R5DXnrRYAkrLSFHth8k8b",
  "key25": "4wgFFMQMB1BhmYRo9VBhnCzF9ThbW52KmaLyGXHtUKPPawsjrs3EN9hMuddsddbtdZBCbT4BXxVspjeFgiyj2qNq",
  "key26": "3jmDjzcTZDpLvj3ZCycKGbsfQKqQ2SBXqewq6GcEHgUNVcYjhzX3m1vJNZLNRwbmz859axqqbFgkBcTvKYNcroTx",
  "key27": "4TKTrNdgEY64y923pBHLh8rckwUmpmHTTg9iKpBCvL23m89Cmnkayj84Yijqf8ibdhHerN24FqDUgBsCK2RXNHAs",
  "key28": "3LEc8KHocvJbynE7CQoNmDiscy8GtanWhUgt7AVrkTnHxNvTfQQh4Vvy2Q2SaTsC3NQqC1sKDAtYaMWvqf337NNC",
  "key29": "24PQJubDdnJHcNXiPhLxrwkpdYzR847WZDp7ejJxh4RccWgLLNQT1ePn8cSeEvSMwYtGuNrdiZPuAMwPQAMXz6x3",
  "key30": "2ctzBVqnQ8mdFcJC6VMzR7CVkYM6beWt9Xt34qnAXC4S7nUgWvugP7LnyTEBouGWVDZdwT3rkzMEVswBbUfnduPy",
  "key31": "2QShi7MsFFw66eWWSn8pEHHCoUGqtftexChamJjCGVxLvtnfM5rqpCoXFFtuvh5Fbbcr23Esi83A5M9Gsku1o6Qp",
  "key32": "2cR5T2U8PdUhbMQUimBHUdRM1cpCn2idR5r77kfTLNudDP4gsEKqUqgbwb6YnN9uXzqfRwRDPZwxoWXTGXBYMaHV",
  "key33": "WZLB76eiJKroP9D4XtGYNPbq6C9MrkWkVJKZhxMJVcYfVYAJ3DK5vFLCoA3YmJnwBmsHE37EZLzmHKhdwr6F3rL",
  "key34": "5GpRi7bw7cxnLWDUQRotdxPuMhsbdP4X62P3R4RyxHbTxt5ke2WPx4Gt6nYpYkdSmGKeosNfQ6NKQRkSDA2aoVjh",
  "key35": "5FSNPZcYw5G7afuHtx2dEYQtCT1AnFqtREYFbkohgEfYZMkfitm1esTzPSLqDehkUp4P4uiKnEw9tnyhaHGEJgbD",
  "key36": "4XxjrmcjtHbtFTXGiqWhz892rFRMaqsEdEP7gecQtX9P9uide37FjM4FsoRoqARQrg66yhNTaCxEaXJeRWMnZo6H",
  "key37": "3xjg3LHMyNhinxfy9paXibuV5thUXyQzy2qCurzfCBxxRVSnMhPqBp5wVbpY2CqZgDgxHmLLrrop4SdnTbonjfzm",
  "key38": "5vu6Tk3qzfVKPVDKnZXt9DPaCdUReXSDJEPRSxaXjSBWjtgcP4hEFheMNePx4f7gFtmGgdTybTz8Fq445fvkHy7y",
  "key39": "269bFmaGif5eer9QWQV9GSkeuTyeqMjAisEv8zCRWQUwT74onpyV9vzrHg6c5hQArX95adXQymiLxLbr8NamaSAQ",
  "key40": "2nmLqb6gzCMMrdzLQroFQovWkvGz29LeKBJhCmi5o366pVuSzS1NtfCaPRZSfW7CeP5bPNqaJ9AQhCcS5TFHbhFs"
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
