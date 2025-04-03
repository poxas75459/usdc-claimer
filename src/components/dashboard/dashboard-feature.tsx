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
    "2GTCyp7foRVS3CZb1WbiyH6KGLv47qzvyQNMMuczWd97FC9KuhP8c3ap7eGcydP2LHeyZ66q9oNYusZFiaotVkXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XHMahvyCya7zGuz6W21ULbE5b8hUbo7AnuYE8hULZ8FQFHhQfRwxXvVWApREd8dCmnbN7fh6Ntb7jjumL5gJEzu",
  "key1": "AfHZxLeXDwYUPUGZmGrtCUooHgohJV1oFyo3yHCH4uUFFA3xS8MKCnGFMJaQYxhMLujyu3FqKa8GkWWaU7QUPE6",
  "key2": "2rPjbFs6PWEZmRwG2HCAkJBG4GSwCQC2pAR4mNBgNv8mMwgRf83ZRN5n46rS4JvQevVKpZ9PrnApmbZJo5SSwsgh",
  "key3": "3fLHLn8x7E3QRDeJ5Gse59MVZDrozpLrEv8eL7oTXrQicsKvmGPVGPT4vDv4UBBeNK8iXv1cm5CwErGFUi34WHz8",
  "key4": "63LrFuVAtzwDb6zvhzWSE7GEwoM4v7Q4fEJJShLLj55WuWb7af5BBVqgfgQpiGEF8BPzWqCBanSFgeiwcdFLqeHQ",
  "key5": "5wvn1scLJ8Q7daxNJQrRyxw7q9PiUqmYLt2rxL2mPG5FXjxhYQY3bxaqrM3HxGxyvPgP7t7dPEe4JBdiDN77VASk",
  "key6": "4fqVEJ4DxYss3BRK5fwGn4SBb8RV3ortQhPNTwWqtLesbSCaGd1vQhut1SYPXVsSKFxHCdo2NbkkjN8eh6ha7Yyg",
  "key7": "CFEuZE6z4d8qhBKqw7H1MG6vCSACuyCmoaxu4nwgaFpJGozAp9HGED8jnNWXnpKjoQHAkQR21UbJKt5unuvTw8b",
  "key8": "2dq1hqmUCHPZ2aMKABvCiER7STdnWRxDEeXkUsAeiDK4yoxx9LPyGe28B2gGLHL1GKPi1UCCQsoTcyQrYwxdFtM3",
  "key9": "5vxQmuR2PqQEhTv4pDuNGdRuzzPT4wJ7PjTXNbf2q32nGmkpgPcQboWAk7nQPCmUoBr9wzaZgLS8oYNEu1XoGC3y",
  "key10": "5vr5RGcCtNbQiPLEJeW6ckTSoeUHYxrXAvT3VsprZA1TqKFGmGQxeSVbozCCLzvLRiGMRSUHZtqhVBiLAgUtVF1c",
  "key11": "2FxzCPGdye1WWEvNAGHQKhnBZ83T8VscjMqLwTTEFjM7tUwQ3dRRfn2J2QKpWL254qq4oYKUj4GGr58rjRtMU7xH",
  "key12": "4ikwiZyYaBYLT7MSLZYnudUpBqcfcEv5hacZqwreACEyhGLZS1JzzGNjvVBD2QDaPVa7og6WW3WWRtriSejZPAbg",
  "key13": "3ZL63rZMHCZPsvUeE5uCJueXob37jQbeJFAgbsXQdCsnyQ68tmwtj4BQFKLG7vrMjXFL3281rQQaMsv2zpgEqpre",
  "key14": "5KtycMT1P9VzG5KpYNFUUSZK51AgzPSWWtYKSt5YUy5gE3PBHPm1u8xUbJR2UR8TdYNEwadNTePU1bx2HweK6Jzh",
  "key15": "4QysmbhkfqoP8Rz67EiEXMNyi2EdiJi6f1ATwgt6G26HquHGt3PN3h5n8UEunshg3tdx5yMT2U3cxigJbzwBSSHH",
  "key16": "4VC62Kxy6BfGnMKqfZ7vx4qbUCqtvG6xXTmeqaXZmNAh3uB2DFYi2xbG9rjjWJftGD4FkCp5SZn88NGFJj2uZbpH",
  "key17": "2Euvw19dRKGKkHkdtfjB7JrtgKukvDhndyE2UR1vecSYrPpoKLwcS9HVUXScCBYEuJ8VxgDQYqbiZbSdwELbgdoY",
  "key18": "5ox7LFAjxdvFufhGWToz9ibG8nKeuVWZJ7S8jwstUftw61ng5ctThjG5HKEPAqTkAgEE7Qayx1PwoniWZ537FtPa",
  "key19": "45xj2LsNx9ydv5qTV2WLhA4njuWkEcMi3DbtC26BqXfYQ8L76S1Hst49XjUXUtnxo4gbjuVHBc7StzuHk9gQ1M1t",
  "key20": "4VUvB7ftPb9V9Nn9L4GfFhLXbY1QUjAjQsYsGKCVzDbvfELT6Xe35Y7PtxZr1VnAzgiLR9Z2zLQMtScJsuCMXjoU",
  "key21": "8vcysUcJ3iq6QWyWoJFL4aSnwBZnWJN7yeLdsnKFurLZGET3bzW3Jg3kMFYfLoGjN2ARmEb9Gfg64RQM1WdyNUj",
  "key22": "5sk83v698suwTbs7jq6sjtnYLZ2VQe79KDQ7LPDy2JqhFvvNjYZdJtbrsHNye9WZjG2BTFNL5egRhtHgcTak3R9k",
  "key23": "3cLoqFzNungHfvYUY8zMoSqYousQqi8mYpUnMzu3DEXUmW8dAPLjTmADqjg6nzanQ6bhbxiyjibqyc2XJbVrYfyX",
  "key24": "5A6suUnEGVuoqEHcR5HA697SB38DWNKC7g6k9U1JQYz2rBDDV9ic9prcYhPKRz1tE6R3qUG52y9NCBdJPRDtot3H",
  "key25": "2FgKf3VVrjbFoMiJa17nB6W8e6hfv2yVRFdz7AJPBqodU9d27TFzPmJLesYUwfksBf3wRJ6puUwshVVpU3VwVUGm",
  "key26": "5srNYeEBDzYbPiNttPkEFp6QhuNk2bnAoSaiqSPxUDAupkrf5FuGxRKRMdFik1Pbi7jhhK9NppXfsjwHXMU14s8o",
  "key27": "3u2zTjcZpkHsyZMqoY7711xFRxVnP2nDbdL7XXkH5ctUwXhuit8TCfvCXRhN11bF2wFMUTsLj4vtKy5kcHJP81Sd",
  "key28": "39eNMxmyXELjL8Jb1BgZvKBi4ksc1b68S3VLeLoz9B86euMK4hQ5tSok3f9hAU7yWveFHNoNyHvz9hEHSFM4aXpr",
  "key29": "4mkc8sJpbr6ksHqgHo76UYbgV1obTYni2z4xTsWZ87MRAgBMaDjSCBnWKj9Pn2DR9Gr9fDxGwEjRCA5QVFpk18u6",
  "key30": "3ZzHTNJpRUmczBBwooGhDrN4Rg8gVa5ra7qrSjAw2oMoPhPGCK7iWTU9vF1YDVzhzpFzhGM459AVx6LMrvYwKetY",
  "key31": "36hT2XwKjK1E8zDwx89jJ6XRkXc3kMkNVWSPxQyALag5TnzhgL42T6emUL9VMpXASHwd2vAFvyCtt1zqcGu6BtV9",
  "key32": "3Uaqe2AG7VcZb5WyigcTeTtjE8DVnFVFkphAnN1rrZ9bsbLTXtHoqzKD6Qh5fmsZMF4mUD4mmeCXV8D4KA5hCo8U",
  "key33": "2G6RBkqticC7T9hNQfzKLZbcGxLMfBLB7ABndfkezavBUxVLVJLrB5Cqzt7HPZw7AtZoHLUsgcbgdXkotLDNT6qo",
  "key34": "3c6CgSvhr3iwuceu7MNja8X4N4XZS8snvrNNmib9tVS2jVgUSMudxBSfwd3o3KdkvT6MVyMDHFFN1e521XUrf8GQ",
  "key35": "4EJe4r4V9yx43PhXTkxi9dEFJdTJu5eteSWcNX4aYWD3VsAWz525jvnZLhvsHRTGdSiXKDL7bGfpC2yozEv49MaT",
  "key36": "4pyKVREy96ur3dfTU3Q1sRBdCvsRPSzpdbnzZofErBJSRFSmDDByQTdkB6xmGSdmyeHCiaGCPwvndpczdTuxrYSC",
  "key37": "5qW7cTKWhswMeU3Q2QQd2U45x5zrKdzzkZngafpqCThFUdbUjcAfHx6Sy2xb4YQMcds6nWUxg3Ywmmu64j7zzQeW",
  "key38": "36Z3hzGzRJHuVjtYnhXTRDWK2pyFDhnk6pWVtJ6WdfVKQAE2Smqy5DwigWk5FtGK6wiQRLEyLBRKJFYgpu9YZpeP",
  "key39": "2VnmjLAmkD5p8pbWoSfmZ2cZ4UpED3JEmL1zDz63TEdum8izf7LSP29WT49jLKjf6aA4FFVNQi5oFCDfmp1jSY6p",
  "key40": "4rG5eqLk7QawiGPeKBf6JGyssnX4mF5CnXYN9G6bnoz3U3TF29vGdxox8wQpeK1ok1v9FQKFvtxDSHWd5ksAMczx",
  "key41": "4vSwngbRY4crXRiRNnwEnh3w3JJrfW8DDafEw7bix76KpDXLpw4tyZs829J36cjJVSFDhwzcn8kAnyfnAGmJNBev",
  "key42": "5WnK5xDdRkSKgFHq9C1pLWegxsppRCtFZeP3iypDVSfRupAhdjEj7GdLHkLS9E7RawuWm8n34Hy8h2hPUaqRSvBG",
  "key43": "5NzPmJtdhgaUmZe5FftbXFRwRJaSjpwuQd9oC42urfKKHrG9jRHQxpZ1CsongQNyvAKJiaj2UT2fLZW77fXBL1jS",
  "key44": "4u6z5zYFgz4wMq4iZPGTvWEtkfqf9tsbCGXXLAXRVoefC6EqbMYuBdRM5YbrBLUk3DsfiFpk9tdFk26QUbui1UfP",
  "key45": "7avJW8Tfyt2waXjNpAJQGTQ5G5tKPDMdZ7VcsaHhjQZRnRGsvfLB7nSv6jLBtLhWG2ekVYjUj8CfTeB4h66H2GU",
  "key46": "25JHdDKyNisENAxkKufGu18PzNktRKY8jNP9NiJ7Gru1Zr77aPG4G2RiAPbX9mCND5faMpLwJXwgvojdjvbjnvey",
  "key47": "2yUjN8s4pLx25AdqFXGCnHLLbHivvLwdG4BJuzMy2CxJmjGWxYNcvWamc5RwnsdPUggWikwmy7QYss3yjapByHGi",
  "key48": "3LdGr5rzsNU6QGrACUMmurYF3uDWEJgSenkjGeg5P7zD4goud6Q4SbP4vEBtfVAH6L9idYY4H8irZjBmUC7wC6Rm",
  "key49": "vFLJV9EixwY5p97G6xhXAo2Z22cS75gsHfAAtXZx3em8jE3wYYHM46iDPNWp3wP5hPDcW45euc2KhJjyXMHyVGu"
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
