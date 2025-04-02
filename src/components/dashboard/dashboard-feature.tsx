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
    "3qVKL3EGZGks9CHJ5AN9oajgSSZ8EFzUJueSVNW5fEmtcHb2kF1MGvZNh2jJT3QPE7hcoJKLb3HvDCG7RPyVTosH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wU6Q9izfzq4gTpK1RtnWDNqYfBVTC8juPXTpniSwe35GYZkPDdFUoWiyoU8GBBPCev71ofM891e3TFXz32b1xra",
  "key1": "3JuXYBfqdFQURuW1rsqhZYdys8WE7vQp7z7U1baKxAK4FE5SuUXSyrKxEuu7iPds1RjAg2wxU7jcZsEpLx1QV9Wz",
  "key2": "5uZWShvJWg4PExKJaukqnwHEsfBMKbs67hKL3V2djY3gyxSm9ESMavxZ5bYTZ4cw3MXUXPQJKfd9LNGGcGRX61Uc",
  "key3": "5WXUbeJAqVQs32hMzgxVD4ZyxPqm2VhwMJ4Mszs1cBJ97sN1z5eQT5bXkyMGtYYSmbjNqCYE2Ummr88y9qjYpPqP",
  "key4": "4ZiCURuTEJ7prFRVbZqV6yJTnJbA5UKvE5ejKrh9Ft1HBkvNmdbWa6rpyYNn9z2JSJUPPWGJQv2wAr8P3vZeUXXn",
  "key5": "5gFjmZ95a8oKaG49JVBAhb3rPv6wxgXGtKggc9fxx4YtDxZfGvwr7LNe5bkQTSxAmbje5Hu8J8KpeZmaNFiKUZWP",
  "key6": "63U7TdfP86agXMkvpHyN5Ypt8T7GJPWPUyvZxDqiz726ecUy5aBP17F8izuS41AjRFbEYcRSwX15Rdiq46pTKoh1",
  "key7": "3A1wY6BZR1RSpYGNn86Aten5LDBA3wJphszp7ufdBVw984eTQy5iJku7QMcdjzQyFsx6rQJvgJKqoduWPDtEwGSq",
  "key8": "3FCXW5ij5QQ4ZsoC9oR4J9KxcvKjFaDpgBZJrKj3xhQDvgdzZFuca5LhavXh9DazhEQFHQaXcWbey4r4fBk4Q38n",
  "key9": "3KHicnAxNUpxK1m19HrLn7Fjs8BXeQhJRkWfpXh2XAj5SN9tQoZvnPbBYarEyszcSHhrEru1ePrXR5tLRRXvxaDN",
  "key10": "24Bs3ZPbRmrhSUvAUXndeA21JDLMVc3Cn1o2xdEsEe6erX9cpEiNPyzHJ2g4NKW2ViDiG4PR3SguiqkxeXkituUE",
  "key11": "h6vnheFbxgYTyS5z2uDUVB2SNb2tShBEi6UjvSiArrwijyf5BbDySY8JxPEjGkiZ5KRryjf26vWkddyNUABdnjR",
  "key12": "3Jex1Nb8c9u1mQtJf7JBJosE1uz5QPsKnoaw4uVbysJPy8CHQ6FjZio5NWXYjJV8gmY99thbbqTEV2pDpHtECwSp",
  "key13": "5nnxYvvoe5MDW8D5A6J6XBC6hrKT8kSNv74dZJRAZ4ybQYEePAv4VE7A4AtuniqBNA8pQBgJ7VMGfpEdftVzL3QU",
  "key14": "3DSvCphgsKjYNjXT7MXXM8tQmFcncCbi7sFHkVzqYPpM2e22QPBzjANs9JbEdgpUQmZwPFNJJqB1AuFLPVcsvd5y",
  "key15": "3U67x9kzCFfLPHu1C7VbXjmyo2a8UbQQ9DYK9xWPupv12oLCbPpCyCpeoLYXvnJEbysBYZRba7Kq7VreYsvxRh7s",
  "key16": "4nNDbjrYXTFQq7foTMxW67UAcq6in4DdCMJb9okjvnrjCm979PgsdvwsBrxPU7MPjXrPGenJCaW84jpqLkkkH4vA",
  "key17": "3UcCVB9a7sxvtFxUFX5DEA6Upj6mSStNtf9YbXfff1CCo459A5PGrM855sRWNsfKAPBg1KRc7rivKJdRcoANuDzH",
  "key18": "58Yg67mZjhzMMMemkk9mSaQL3JQeuTpRpzs6x6oE1Zs9B1JovvfeQQ4sHPCpdqHkZZ8sf3YxhotXX2a4HVH5a7ib",
  "key19": "2TTS7mzD2T3DidnvNWsCHFRgeHmvDqLLEDrFh8YxevAr4iA54gKfh6tqQc8PeBiAJ85R8ChjyjUVqYMQSCKXPvFW",
  "key20": "4EHnv1TpLKJWUMqtyy1sP22TmXBQSVg4sQn7owJ4piNL6AxfSHByYt5eQ3SKwrBhvyZTvwp9oasNeT7zLPh4exVJ",
  "key21": "S2yLi3h7kbUfJzXBYrTRQHCdr4CR8UfGob2yJYUDuMmZ2jPNPwk3pNgU3J38QHSMr5Kp9mfFAumRswVwMxGzpaM",
  "key22": "268UoULDjBf14zNHEmTrj6KjJGfET7AQf5vEgL75R4hktBaJkR53DnkahudUXUVubuFQH2QoBJjaigBJiwwDYqgE",
  "key23": "4p15MNvFgRtoq3XcEEbPbzc2vp7Mqw2xmUJ3cc6pQR5EUuEVP1vmfHGH1RigFQfon1DsGYpij2d24JiimwtHruRk",
  "key24": "4nqcwiVivp1ykzduy6YshACqKb84XiN32Nh2Vxw3eVPu5UWmtSYUn6eRhUhJup8ZBZgZYrXUhWeGrEjHiF8rPEdy",
  "key25": "63xQQK4JUrFXWa1Yovz9TsWRkEJhko2eFRoGjH1ZKojgDAhkNTPF57AZ9Q8wQ8i7G7eoHYfGe4pXDt1Ud1XXSdxV",
  "key26": "2EKVvrax2VjdEpa3PNbfzjPMhb69xPgdSVsLVaN9WLv8MSqa9dSJDm2w7G9iSkJcJ8vLFaSpanfGcWhAFSQERMbq",
  "key27": "47w7rbYwtECAtPXNesWHH3NSTB81uEaaeDPZfZJuEQMmoVSnkaw3F5c4y6AoDvicGpg7L8LJsooVawWBvsgQJ4Uu",
  "key28": "4PgdvYc7aVQdYcc8iBuXK1qoSTxEUS7WgcUC9m2t43xJCCZVJkhnFCLDPutdhUhL6wDDQXQvhas7dTgoFoiavq3x",
  "key29": "3eyFqgEXp8YqZiM8fDZdQx6kmwK1NtWTGYdthKmyXwcSksKk2mV9EVzA8Kw42qqMMyp2vGbjWBXLeEsg5F88MwC1",
  "key30": "2Jkk2wEV56NWsAbuH94LHEhpADCgWDapuzPQ6u9Ew31y3qEAa48R5vnVs3sE9DNkEGiW26opnx5etsKYPdgmpiee",
  "key31": "jiA2ZEnADkDSJMndgmaEg9ppXtK7pqvQSnmwzMkjrVdtJmCQ9HBic8rmdoCM2YqhiTT4Tbqa25a3CHCPqWZzPKq",
  "key32": "4EQnTmfAX1HgEhb2CQJvzZp8bs9vPipopd9bu9HV6i7veV6MVK4fYQMqAxLLSwcSJ7GhnuRmhUNqaMXJv81s2SRw",
  "key33": "2j1frxqgpbWjPC93mtKyMqZJAZRkhJjqTvvxSLiiiKXZY7zkCyKrzrKjtsMvuzXQrpNXNUX2NipgsF9yM8meLkVj",
  "key34": "3wNmQRySy8CL24qRABqQuqssCHN3WsDuUaUR7yc9Sj8Kx2p5o9rVzvHhEfEGCUzNigksVpupAukK9Xcdv3arSDqZ",
  "key35": "3henR2nRwPoLcR7h1FDCGyGriaQfhwS6LYP9MtVd8m3wuwWuBBdg3GDgG65i5fFJfoEcnoZs44bLzsPQV4fUheH5",
  "key36": "hbz2FJykzvrEn71HafX7qNkSp35Cz2nUZgTW9XMjFUnwqpkmxzpKih45ZQZFGUQ3YDab7oXk8nEyLNd3cP5FfLr",
  "key37": "5pTm6JZdMEgjkY7S1W2FSDeTMxaE6iapHFmGmrij2j5ZMJgAcQWL2sBb7QkdbW189ScrFYCZxHvuo1v6xFuRjuPG",
  "key38": "26J4NrCVbNzGY1pxSL5v88363cPh5XEdr9XLD6eZLCMjZeMmMB9FKnngh5Aw5rod5KUCbFKn1d3TFU5dmwVp5BQ8",
  "key39": "33XhgVk26yVj9HtD5HM4z2NvLiZYt1s4VpPxAGsqfdjamZyJ74gGYrzsKZRRyq2qF5bqvurXTmK2rtmEfxT2f1jY",
  "key40": "24UJvH4NVP6Xc9ZzmSLj6GktUaawEu8qaH5HYXr3WB66pkGfPP8MXY3CD5oLeAWcwZXZxNPGbckZrerhtvtQ4vHf",
  "key41": "424ug7sGxAiRjMFcqMPe4kN9tTd2Em7xheMBKgqsfLZNtcokaXaHkAGURktgxzP6UXTvAw9ZHtjQyy8w85PxP2u6",
  "key42": "2UysJYtHjNqsY8R6EtRe2kDBS9ARGoehQzphsVyKwdwuhyiuojKqTfjmXURxbBvMBvtyC5cYmtwtV5xYUsLfxgot",
  "key43": "4DGyFzW9D242sMxt1mUkTR85MWDZ3KysenDKKUA4bt7yBMLXXb5qKRBp34pm1WPK4R3vig2vwkS3TakEh6V9YoR3",
  "key44": "4eSgDfTPvKupyHmYQChd3tBk21SwGUfr9DyoMKk8C89h4GjSfhaoWboDP7yygZk8nbKsq98UCmsJ8LmdJJamzPEq",
  "key45": "5m7Vm9RQSWCC5VriWuwyuK7XT6CyQj4t7oYmrukAtJYiQJGVVydD9Ti5XMsV46L9qWzbMZ1rgP6UmSVwXc1acf6m",
  "key46": "5EHrA4nioFfgzSMHAy6kn5no9uktXbefgDVGaHcZRUnuB5gauh5kw3DbAW1o4tRnSBZn2LCuSvjHmYNiZb1DXmCN",
  "key47": "epT8kh5UDex7pHeu9SFc7ZvyGsb8HukGJ62vTSRHgm2fTcNxAbK91SxUoLgospnDEbkByV21XHy1iGVMtXpjUgw",
  "key48": "5UoD9PcCxMvp8XnPrTiZTgJteGb4BEj4f4eTYKGFrq5c6PvDTi8nRf85yhgYs1CvNRwXRjYiHBKVoCJKPm78LiAR"
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
