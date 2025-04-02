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
    "5aqVqo6RUvXffCkkBfeTojAgvLygSVFAq9FmMD1K3SPmdK53Htdyd4P9Cv2iCje6hm3wo8LYrfGMDYHVhgDKCS5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3avQ7ajabgFQuZgca9whnt5E8j3Reuh619Aj3Dh3XDNWw4tW1qseGtK33qKS3hiHdXXJa1qDBdpsxJuV8dojQVnG",
  "key1": "F5s3DGiWpc8Mpe4gGUQE9ZVPE7j37W3saStRiBCw1qB3L2YbZXuTPkk9RrmR5u9v6P4J9rV6KFgS2i8tpk3B8gP",
  "key2": "31i8fWQgRGtEG62Drid9Ra766GXq2bhLNW2JvngVVaQAGWpNYAR5hxdhdoTsCUUapa2KxCEwFrBWRtHkd7noLf2q",
  "key3": "2Qidn29HF8TpJXQFnATrFzzTQqZyMdrTpiLCLcFMx9MqxhkW9LV949WbVbgAvKtVAEoViC1gTy6JdTMmrbDUt86S",
  "key4": "4fLPQW8aV3p25jdcMbVEvvqjefELpuGotV2jBDghujdgEdnGEtRd8R44FPfvtjrY2hPFX72Pd3S9HG4KUza9MUyk",
  "key5": "4rNF4uTdtYenGb54eg47B7vouMA7tgP6NtyM3zwy8RSpmtNzJ3JroiwK76fSYQ2Gn6cBbSpGj59BupxNnejRDdBu",
  "key6": "4LGgYT7tM5CRc3QGPGkux1Rf7Yz5EiNaz44i1bhD1MPYELiAbLKp2zksuUzj1PrSK5dKb6M17ui1omJSRPoUML9P",
  "key7": "3jhyyBgeHKWj4NDLhc8HGLeSotoYn8Wb8FC98Lg3i6cW8ZcNTRmbiTMKZRBwahkSJmzhQ4wyAYdMzXSmDu618fms",
  "key8": "2kJEbWci1DjvXoFUFUB9HGBFb75B4nt8UaD5JH7ArbDEMHMP3rS2XNVC5C4vesoHbWFoDjynotmnitHkL7mkdYTn",
  "key9": "4hYctw551oL96TAzHhqwFNRsWi9xiWHHCixznQ5nf7CtPTvJyrQ2VvUpdKkNbzz4d6KSEsjNxRCdWu2VfZTujoYG",
  "key10": "3ugpbo3e1cKuNL43PakjaHD2Yxs738YVbcSGJDbVeLrveLiawgyhJkme5Zd4taEkN1SK3gwtkFT4JN2pCoLZ66Hr",
  "key11": "N7ApES5vHZTJMEvAkhnuKxTff2Emd63KSnMMw3RMUrA1B9QF5S2MzMeS5EqtMF8G6dFVgZphX2c3qnE4qEuKJr4",
  "key12": "4DGvi5LFuDmisQnRxcCQS2AaazD8WFo49x863MVYAsRaxR5WfMxXpA4GsVizmdEsVmFNNRhPPUnemhMz3TvWoVKA",
  "key13": "4FcAAYiqPBLQAVUyS774Xqag8fgTufWKscUHbK7aUzZ6hz6QdYMQBNMf87ssoahnZ9wqPQ6x8ua6J59fXsrPSrV2",
  "key14": "4perfagTe6BYfv1i5eirpuZ3XuK152NQLemeaTdJqZcAg2ZbXXHTVFAprsTGRYSTKcTVwj3hrBZoaaisWn4CC1Gp",
  "key15": "4BSSdbqfQDGiVUP6bFEg6oJYpAop5ayeaqgQfbbWeCn3VZ52C1jnp9NS4XAhmDhCYo8u5bZZ6CCh5q89x2NTitRC",
  "key16": "5qRJBHkebNiUxnyvziD8JFiFU7CcH4m5nhyHHMAz5vEHiYpASe59qtzWGMVDb4i4Q3AVyrFZw7qEfYmPffkeBQfN",
  "key17": "MK3tTGT7UcKLHVy4vphts2Nj6wx7aoZEKjMDx4f6f3W69uh6E3F8PM8gU3kNWxre72RJ47THFTuHrHbUUDupWNT",
  "key18": "4n8nyiVmJ8pVgcDgKvjFcBHCwAD2w57tpWgof1cQCTiRryskGmmqDEh9iiCcQrUr8FwEeQjZKSz77H2SALdW1YxQ",
  "key19": "LJtLjvPxDZ6v4Erp5eTSsWVmvEaocXrsbm2yEbZKWbrLXBp4ZgPC9s2xMn6TvCFQuzpK4cgWxN3KLKXuiAeQSea",
  "key20": "3qTTP5uEbPrfM3V5K6CNr8VyxLJeSaUDpha3rhqwxsFqvFB7WJtnhbYdvVJ4PCU3ynE1v8kVfntXVyYqgc8PkPb8",
  "key21": "nqAGKGD8MJwumSXFhi2HEiMUFpmcy2GZAW7wNTJdLFapbxNKRKNJ1dpT4PSVHsu22Z6UA1qaR7wgiEJ8upqe746",
  "key22": "2t25erc8ANQH8pPgz3apuZ2UAUAsA4rnbACA6c3gTeZss7fDgL5PXJG5fZR9KYhvqkAQKpNuNiUCXnbrLXL5VF9z",
  "key23": "3pnvQC5tAGzuDzHsyPL1PdJnV8pNuRdhjHqTRjZhK15qraoDGK8cNCTb5k8qmCTRGjduW5AXKs7u4QLj57HHRZ9y",
  "key24": "5TVtJh2M6jSxuv5vKPS1eZsx5TE8VUCyNPYoeYRL7etZzdMof9xkk6n3QqvsfU7BR1gV6e5WmVJ5WhnoxU4H1Y81",
  "key25": "3dS9hKEJ65PVSNgxGz5CqjcD2NtMSDgkoFqXvrB8nNkQz3VdEvZMsBttWezGg7B5XEr172ULp894sf5x2cvkffCG",
  "key26": "3M6hBcaHQmvWS9iFAihFwmX6UGRgbJxAzD6ukt58M1A5Cr3Gcwy5nffWztdUUU9N8HbPhxv8i2kYodunFQY5rv5L",
  "key27": "2GzyMxcQXpLS3cVQFhMMS6SAA4cwem5ekQ2BFMwSgUwq2haa4AMAucunSHRLsE9ZpYBmmpRDtzW4dbX44vZpJz5S",
  "key28": "DkzZY7owcdBTK3ztXeZwAEZZSHAZRFR9RZ9viKxSxhvHRePBUicd9KEa9JBBJhVv4vNbA8DNphkCsHeBUNfT4pu",
  "key29": "66KkEp6d2oY819zouKeShVvzL3Y9HkqLWfCCasqeEzuFoakN2sWYQZbanWUGRVVTowSQTo6rLsPMLZMttjjHfHNV",
  "key30": "4LSyvUKquGQT3sdPxNRspUfpkKEM73WFRo4tLWwNxkxGr9FQ4VdrXzN5o4zj5HEYYJ26gSfsTHdVkUw9YWczC975",
  "key31": "3au8ZMKc3GWZ1EXdLoN8VmDJ5uJUTz1zM4oaQG5bnF4vZTnrjbB9NBdsFEEGfPR3joFGbE6KTHL8ZuwuVugtR3YA",
  "key32": "33ppxN7cNuNkrhxYE1VrnpWrkL3e8CZs4QCPeMkiamuPd35rMCJGXqwb5M4SSzJTACZbVc53mLdNxUvDUzYKYYB8",
  "key33": "4WEqbWo3hTNQWTMTGHrN82rr7HnpdV8PyR5VC8gpjcfpF3oP58roHJVhy29Hj4jKmdVMJwBEoyycjQU5Cig5uiop",
  "key34": "2SUWXtwk3vW3WssRF2kEQpBHod3ptB9JFpBtHRzzi8jBNdpGzRkJiiDuwfawLyHCzaNqcAnrGpggBfcp23QbUtPE",
  "key35": "4h8ESa2zZqXwUYLoSfia3UnJLPfVdRwpoM3CY2tNQseY8hRgJb5bj8pDJ2MsZZifcEGzmF6dqeJ9wcN39Jyft3ry",
  "key36": "5iFUyRWvuuBESSJpvS52jRLVcRkAzjKkK28HdEETUxmPHWYY2PoAPBnK126zqg9Wk3anNrcoLNNJUrtnXQLYzSCp",
  "key37": "28bHh7mRQc3QGWCbuXDEg8d52joqLGyKCHW3dtCuH9BtxWVrMgkrLSQHDwQ5XL45hLKVdVGs8SaiNwSCUfqnLHEj",
  "key38": "UmfC2AF4dhBc2NvyeJ4PTXedChnQyjSGEbjG3qxB5LS4UdaereMssKacMapzSYno82fWhoeR3xrzbH3qNzX3jqM",
  "key39": "4crkg9chvnadD3euvHaVQTxzaCB44SscMzem66WuoMuK6hRDqp8rYBqHaQNJ4acCyRYXtPUHSuk2LZv9geGUYqgN",
  "key40": "R7VRAHWjHUpwuHqMcdhiFy17qrjnZRJpjqs55qwtokRQzLM66ArgmrpPdxsnYPJUULJyGjXjNL7sRNgycKksWvX",
  "key41": "5XvoLiMSocfDPJRbWojRuQ726bKw4WrHVau2vmQbYfE9M86PYrV7vCvui8yBzVonEKnNFJ8AFs2knsrhoQCFvaya",
  "key42": "33u96i5o8LQ9wYAasznrePqZxh8tw5rNLzVnEp6qcdpRCYUaeHxTYujEGQGjeFCH4oDL1rYQgLUyywhA6jtewgwv",
  "key43": "3nCys5i1Vf2XtMkeerds2dgdcRtA4KFgd1VukkrmryL8jy2B2U9L5nAc6sDnqoqxUpTz1WWoarD8NkQUDqHJpdaG",
  "key44": "5d8eLoyszgSoibf3pJ7mjnymYrmVwh1FGAQq6uJFvtxLZwXzAMySESAY5qSSkQpWAUimDyRfbVaBndScsrCeGk1y",
  "key45": "4MbJrqYWyLZKSJSR3kqwdc9Zr9qXWWDRkfr4QfZU7GqX2gCeziBkyByRFLP5eMkrjQLWAD2kqAUiE82hUWFX3YM9",
  "key46": "4USko4L7FNUPz3S1XPnsLQYwTh9AwTHtmdRBzLuYDV6bqdbX6Yk7jo5JeQzEivM2MP1xc1K5LUnBLnD6qAE2LYFS",
  "key47": "452ry7AuYrqmYmBJN2iEJSBrW1mqNTLJ7WjctJHxfvm2r6B6YZaPtAwDAamBEpKmmgj75eYvZHZRCt9qcHEKbibJ",
  "key48": "4FphH8hAzfYi6h6eRu2Po2xTFWz22ZAvVUjeMHzd8FNS2buz1ScL1DLYfFFLvgEMyYL8Mt1h3q38ZvSAfvXJ5Cvm",
  "key49": "2ayCFU7HQGxbhHy2GtS2PnbPN8L2RQTaK36tiTUT2Q6fFuL4KdRnnRzcYWpZYn3WYF19dJVhS2zTyfRYDpPYctJi"
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
