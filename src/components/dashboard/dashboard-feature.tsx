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
    "2krGH54P1TJXTAPoikYtdYyFqp9DvaALPTiJcyNEiTvmQfLwdgGkCAr6M88jGn3eujr24kL5nSc6ufA8UADUETt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mViiTHv4iPqhJCcuBHgCbiSqocniStnCLBqepFHv1JnpQbhsfNEMz8verEkQA6xDKYbCUE4eZhjTB71ZZuYVHbu",
  "key1": "L5nqREcY8phtNyynzj1LfkSa66vs8Z2kpC177TUquhJyZAFmwujjQgidJKXY7DUuKPRsBKvJrb887eNoYJacKgk",
  "key2": "21hXT9Q33SD2WaVhiu5UuEomPnMx41f9hD9c3tdFN8fdR4x7fkUorRiX8tD4QWKTinUXwVse2wggLC9y5ho9Djg4",
  "key3": "8r7QoQMYmDZqq3Hxt2sqckkFaSebvfNhyrf3US9U4htNRz33ZCBvVCFPqw7AhU9nF7HPrgqpxVk3WWvHFMczAFF",
  "key4": "4m4fpvwtiYkYQVMch33c8KVDqzig53Qss8fGHVUvJG27DL9LqpSrZ4U4Ra7CUEshGgwGqec9H3Bm3rrZb6PqZiSJ",
  "key5": "5Why9iNnKJUc79CMmWwXiYKqx9wvwaFnTJyf7M6sPFEgno1zCgHh6hUvw369x2ceYpSeXTQQXT3zBpBmH77oKV5D",
  "key6": "3gZDt9w4WpsD4Woub8CEbytjueTEuqRJKLvHsWKQYw2QGbbVsKupWAUbwfQyERZjYB4VP6q2w2CxyX1BN6GnZDij",
  "key7": "5PLozYWw2Hw2Rv5ADJhQEXbJoyXRsnn52ufYtn69pSm1QDxfFqsjw1ePbbDWVUK1RBQXH8TM93f7CRk1E4Qt8DQU",
  "key8": "2yupmepRJU7JQKsXPoxjasA8k8hrEqjkjxs1HG2CCT9JMAje4XKkK5tHMyeFnaS6Rd2nPK6kxm52xZqFdywnkykz",
  "key9": "3dVnTfARJKXEPCiWhDoBh4QpLrdHLwwUYrjFBwZsqVSe6QCGMQQPPDwiYG5YfbjRTsTZtbGkZAWzVDQA2VyrCfiK",
  "key10": "3VBCUL3RGYZ7dJxqKpk1VjuciCxEk3Y4DurHuXg7VKKy5tLGK91kFGwtGAZhhqduiwLdD6TFiBc156XSd7m57vor",
  "key11": "5gAyDChBfWvRVRwmoFTXoR2ZQRrDyQS3EHXLMetzH9hNJZtJxpPz6ESNVy2USH7F5nCnx1M6hY6uT5GNGX1i3hrj",
  "key12": "3UweA7iXzPsAA4PKE1Zzgpja5zFjbUYzKRJ8NWdfwyEuCczx1qbN9A92F9mgzM2QsspSpVTnbtqetFYEP9pdFeca",
  "key13": "5WXTxvDDQuFVMt32QgENZLgjLTAx85nQUsH1tbWnS8YurLX8otK6kvUh4KdJEdZuYBs58QbLvFNNUTekA81gSSbN",
  "key14": "2QJvzuyUYo5q77ZnwjbSEM7T5fLnEz3WFvhM7KjuStxyr3yWgVBsuFC5mJpem5a2ybEyfsjj9t3sitQggPvQSUta",
  "key15": "4zpzNtjyxRJBFZHNBP5nwszn3ZB8Cdz9bvuK784nWXsSmixTitZRuGueXXpqysF8mLZLZ2WomxuddycmtvApKNDo",
  "key16": "SKT4UgV7SsAFyASwWHkxEDEWKS3quz9bLvDr4Me3PqMM1SsyTMzybuJc6NJMM9M7ptGPX66HkNypvc8E73tR7hU",
  "key17": "4dR7oSW7DJo4Qvr2owR6geLx6FQoFAvzrKxtC9hwiAiEPBZxiUoGSaDHKPuVpXtMNjEtAkBJwq1G2mXohUvyqEoT",
  "key18": "41KBYTgei7snZJYiGaitZRnDH9hbTpY7Aw2Xg2Juegfo2VH9EmWtPGLgdgw4fCr1LvY2SccogYHSRKPaK9hAnRNj",
  "key19": "3zxEQ2bEb7gxa3LitHV6NEEz5Wk7mFK5jJfVV54dFWJLaVoRWczYA7tDCmMbZ2dSLX3M95JkgMySYhEoJDvqkLax",
  "key20": "4SbKmvPBBsfv7YMnqdsumJVQdBiTG4Kjuah7LYyYqMpxcRFe9e2yktaonkkPwEVD9wxMVCiC4ZQ4Wo3rjfPyN5zA",
  "key21": "R5Jq2pPzXTVASnzNbjp6hYrDzuBA3k7CmBdDgdpMh3FvMqt5YZUqF1F2NhfdPgtjCh377YgfFkW9Kxx2ieMGfcu",
  "key22": "4wawGAfaT49SrbhELTQfLzhACLAfVEj2EQgZ6MGa832GgwikwPW1hwhe64yW2X1VgAHRXSUrasX4vct8NbSgBtgt",
  "key23": "5tZ8HPPcSFC3qzFgcxqkLJG5wbGvFBMaPvzAfGhsNgBqWepC2aZBeJTAPFYw7dLEpEizh5XT9RHrH2UCsYFSPYS7",
  "key24": "3YUMMd6Wf26LYodrUz77JEDnFAdHWKC83bvcCHDwBXT16GbyN888SUziMMKrKtmwJ3ViHC4xevJ4KZEDB1d2sce8",
  "key25": "3fBaQrEBgPtcoMu6gtmaAuvK1bc4QxYMCivNFpf8TaZYhrrnQQchEEogj5LjHCivjkXNWNTnGKUfkxf4gFBtMNDV",
  "key26": "2PA3NBupYSaHS5QBHnje2r1ijXCNvfudDWrHXCoFJ7vZPm5yauWQRJjkcoy3FSn524Aq2DCfXfhcFUNDJRuZyBUU",
  "key27": "21w6fUZhiPSTQV1UWPJ5rjuHWTgJAL2ZFCXnUcou9YQuYmY9j5hTF7QF55SMCzxyJPX7onSusiCjDa2MnrFHaoH5",
  "key28": "4kNkf6svRuCJC5JF9zxCrTxvcAp5waKkqGQ1ohHGZgPfz9mRnsrTxBnnZwwgTQkqfoNHC6k8Wu33s5c1wPKkncrG",
  "key29": "2dGJhL6ER7DAu2eKnwYyqkr3ARdcHGRg7bxNzXkx6r4TuG7nqqeG1PmDwPzbrh4NkhnaYJCo7TFrs5kDjYXHXomB",
  "key30": "2iZrxkeSiGLW5ifP9Bz7jjwZ7xggagvEM6yqSvsXeh7EKrByRZXJzLMSdDRybZ2w8X65xQXvvhgugJjai1RUH2cc",
  "key31": "wFkqXF67Fjg4EcW55HBB1raTt6LvLhF224Ch8oA86ar5DHX965ytmtBK34LVUoCHKPJTgi4MH5XNAer5iMBzAyH",
  "key32": "5Ut6XBJiQH73yi5SjzC1Sex3dHVL2VqDAvTm1hUdiRoBP5JtwB2wrnn5SCJDwJ1jp9bMkZHs5p5LZWXDeD2g8Gco",
  "key33": "4cTcfnSbV4E2c2xUvcSHuLqDrzyNCHXwmDLzUW1aqQhcaYXLdSwWsodiYpSZJSCkdk16dPAceopCcZfQN9UGyTAt",
  "key34": "2ezjS2ZJxftCehsVriHKgsAU17tbThgYV5zPwzUPQBr5PmhLs2cP8ztpA5NwETVjhbityhS3sTXh6EotVAje2YLM",
  "key35": "3m1SrVVEijWLNsGraKxcurig5k9UYzBzVHnNHkdiUt9EYH2PuSgqp1oRqaGGGASp67nPJAodmC7H7atRRbFV3hdJ",
  "key36": "2jgncGUC66SMkivWZhTtGHYDxX3AQzWYAw2Hib9ZRhwHQBJmMiDM7jxXmu14g4VxJduUJFs4FQJow1SCxJtxDjnJ",
  "key37": "5myabegkvDbmaRwkXEk19N1G6KAZGwpGr9H6v9CJrLHapKtxoYE8UkSgMi49uPZQkCAcnigJtbkQ3Az9Pnq1W6Bp",
  "key38": "3fK9mSpMDmrxRVgFMBMGFHauGYDwpkAa4Jej9rTZcnqvbsp86F6L5Fm1jKW5ZSTXKEWngg9VxvdurUf2UzgEM31C",
  "key39": "2ZCTf21yhx7UjpUong681x1dke5VGLbgeNkHCV86b2BoYsmcw5zBhexSyK7hGSpvs5bcPZj2W34bcwFNUc6ha2ic",
  "key40": "2NbTUpWUrXFi8ihnXZTbnpicEruJSn2vtL3RLMefD9BCboUabm6GkA9r4Uzn5b7jLzZWt5C1Hy3GGyYsKC4WkeLF",
  "key41": "2NSH3cxxvBbguQpNBber2GtbR34QcoXLeowgGV79n79LNvbQQS4eJA3CrtnkYnUx6cY6tEhFC5QJ9UvG3Px7ENSD",
  "key42": "5nTJ6d63GeHJ2UV1fwdww4ZEt7PEaa61NVWfdk1GDNg6pFjz2TLjuJZ1qBJKndf956Tgd3rpRKdMe63RRtgkksXx",
  "key43": "pPTvU9nYtzqrv4TesM2vJjYH7E8iNP4Zm4Qh9WyUKURiWNMqftfpSJSRqTNM8sPha71WDWM6WZudSoMPR5yKYQT",
  "key44": "5VW1RTrqEnuj96xSnYK5tMdiA4GhZsgBiJzCfTKhXtEW11KS7r4GdQqkH5pPJJS7WGYicpJHjVFHq7E66u5uvAU8",
  "key45": "WG3KQMACR6JGxJJYihcCSDASXkfzZa7meHhBLK1j3oDaBr8jdKH1FMYiSC5WeoGVfLn7HD2C8PFZyMD9GBpN7vL",
  "key46": "2beuXFzbYZKqUStAMSTp2NJjaX5W9BbLTjeSLqz4DXHRofB1ABsHTEUdEiBsCbDJFd2DKXnvx5qhdXPfBf5XMRTY",
  "key47": "3iPmYXDrNTC2gLN2ex9bEmiRH8duhKj9XHjzangJnccSRYaXVbMUsjUxXK68GFe2JqBnq146Q4wU3VL1KTamuzht",
  "key48": "4RakR2zTvPZzia8NasNEvrsPWqYe13USL23oGxfKPsbDTDC3HCadDpr3ZLb1N2UfsBEphzX3kvDGiEaw6iDtHKBt"
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
