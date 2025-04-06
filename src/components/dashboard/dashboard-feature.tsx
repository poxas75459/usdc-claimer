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
    "4ahYiiDubXVj942WHefpf977b7MHDD8i8YuwamGnnvhEPvAjJ4vQBFnAA3FUN925nJ1t24QmbDQvWAZfjooz5oXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XryQxfmD6feXjFkQaB544Xz6UJVd9TZpAhpHBtRAp2tHLgv5GkP9M9k12qXhT1uL19Umi1z8TSfk5Vh6PdPw4da",
  "key1": "LU3eZznsQ49ybbQjhbQPGQb7csKry7gAu2mbryNiXC2YncLxmpJN6kqofJaEdggs4GvWN9jx4rcst5eBNv3y64N",
  "key2": "mGofAoQXQAyrQJLc8zGAZQZeSv32TRKwkaYSFAPBrEM9DK1LzWoKzoChkmApyPr5qDJtbKScFXzZxniN9uXM9qq",
  "key3": "39FDZE2bLKiauqBDAjQRK4ussVWJrSoWtEDGdkM7Ao2DLSXX42yrNwupKEZR3nP31o8b2xhSGFbZZzXQBA82z1uy",
  "key4": "isua7fXUSpUdMiFWox2oJPLw4PdhPjctbekXjWHeikKdmba1PTjFpcqjS7spgo7d4PAnrQcVkpig5gfeSvV9yPL",
  "key5": "4oGW4GiPR1y37wqAGfXMzMMWqLtbA45uPjbL25SjEPuTGTSzPqfE1gj8xiMis3csLVBpNiMQ6VHDoGLqnLNdd3DE",
  "key6": "4hzhconvSriPTixKdG1Kh1NeqnksphDZEFD8iWqHF8Qoh3CUvjveF61f94SK5FjngsCQENW3RqWBQtFDtD8QnWE4",
  "key7": "6wkBup7T8qh4UHUb8U57t6jge5oYWLfgCXaKHtRGQkDYPrZWfntmNNLZvhStDwkSmtPwEU9nfGrekCnYoB8BVFG",
  "key8": "M2zvrWT7Qqio46prqdVm9UiNeB6ysLwExYTf5igyyjmNwUVW8H7Eqsv7Z6xG7kyS5g1y52W7UVuUJ1q6gQZyH57",
  "key9": "314oU1pkHKSKvTGaAsgbih4obuTooVrnR7nGpSPbbpNAYsJtRZkz2J8kE7URShDZLuPubpAN1GTSzpx1nAM1Hmxb",
  "key10": "4FJjqeKgxcowsyedeWwynS4fUQFqznGkEQaKuQctwbeEE8Cnx61UPJBq9JwHkhEWZfTx7FpsGNb76eYGQ6NgLMgt",
  "key11": "8mVShJ63yp6Ru533VY1BbtV2aaN4ofHQpZAgAbbtPHbF3p7LUAsXHCi1RrYLfaSdVCUf2DqHJJ8UccCbpXoSzRZ",
  "key12": "52vyntRpkKxpT14r12he13GvoSGFc8th1Td3sLQaTW2zz27Ck3sk2k6FnWX6qvhdxVTqhUJHicvSPiHYwo2zFqBU",
  "key13": "kLpysogrA9HRXfCz7AWd87Nzdg1Eriv1W9bxHaCepg6DqLUEopmqrZwSxfPwR1woq7ragKdt6Q9WfMPUD5DFmG5",
  "key14": "58NmqtSU9V7eogQDs5KVTiYPhYrNmuAr8hjMzSku8qReGbisB8nnLLp565qG6AkSkFq2FgpALdBrfVWNsYd9o5Rc",
  "key15": "24jgxMdJBScfSVkUVM543uKCm6s4ni6zFuVeoQyAjzw3jjTm9BqQb7Ra7xUy9dBjsWukcwUxjbrw8vJpN2ZmGGFb",
  "key16": "3iL3nvW1DsMTW26nq81HXuuLsfbvNQeSrDkwo2kbCotzmNpRN2AN54UmM8M8trubUS2B4xP1A5kbPk8XQmExvSr6",
  "key17": "2pf16SPxCVZs2H5eudCktFHf916CR7CsVX7EwzXeMCyNfLe1dZzCQzzqawv2hUj9uQYqBy6Doie1BTr2oBhCqx9Y",
  "key18": "48a6bDU9QyDgMzGsfs1CCqZA65VzHsqSigudo91qvejQfFZdnic9u1SfERCVGHPBjrXmZFFQ1ov7TsQ2LX9J3Mov",
  "key19": "5DexgKbNrTTb69uUTWb9MrumD979XjWfDY7Jhwj5JUCobaGZsnd6PgpJLNkc22gs3qkNcQLHraGJyRrwAsaNu6aR",
  "key20": "4WHoWSw4MT1DS5WhnVaqYKL5zxw4HcVT5yKWPAHyfNByKn64T9RibbGez6urJjhUyZkwFGFJ4ZzTjw7JroxqdCmh",
  "key21": "ifW5PT9EbQ15qmCfwtg3P3GSvZu6GbA7dBJhxyF269sRieb8vjjvjp2gW8Efv2ATqDmiwsKLgjtjTAi9jW3YyBY",
  "key22": "uhnGKEGdFeqSzZBWQ15SjnRp3Drp9VT5nDrsdtRHugw5EMwPAFXg5Svkh18mHmDo9UCZvL4KzhuyWz5nx1tx71U",
  "key23": "3KkFk8YcFqJqECLRghSTk1Gmc2zz5nwS44dWcobeJHGsMSs6uBBqALHYRXiWxxgVYgtKHAqHgKALDvBisApfV1bD",
  "key24": "2DAtKN6P3CoNeC1vbzLHUdhoJZZUXzFZcCDK8zJAKsQrnZD689zRxmjH4X2shWp33rBSjkEidNosp7f17fm3zzx7",
  "key25": "3VBgWk6RSYih2FzmJ6EBbozhaHXS7c8orSZ1m7mi3MsGTZhWK7d94Fq63pWCmTrT4jT6JznKtf8T5FiMKaqryz9P",
  "key26": "3mc2S9GsquXKiUEdTDKMJ3i2YmrM9xi3vzE91SWBw3Zigvdxj5uY7JRYUG19GRgVHD7UPF5wfFZASgZUD286qExC",
  "key27": "4P7t1AKAtPPvKSJoi4g9BUbLMQD4Vh2LQRqFvTXSVxq1aQKK9zV5ce1MejpBnb8k418WxXbNBJ3DKiUnoQYwB2Ys",
  "key28": "29fiDM3e8TNVT1A6jrjqfL1Yhm8LVLix3Upiy81E8hhcc6wnfu1EqyKnn3p1Z9RrQepnFf2uax433pw39DMdMTpt",
  "key29": "4p3xq65TG9pCbgzxr9zo67zXqwW84NcyMZa7xuSE5M7E3XmWBVcWMCSfef7ZdiJMQGj7XxrieExDR56gF8WaQhwH",
  "key30": "5VrTpo45kYzYKSKTFQ9VHGphpkgfvdQ95t3P9a68h9L327Vt67Q6bQoViSFFyxGU9kge8G6YmbzNPScJTdUqZj7Z",
  "key31": "2UpPDXWx3fu9QCbopyGjwgZPsvz7nXvVTSQKvzyFHp3k3k8BmkURQSbU86QMCkG9m8VrhoGnEN53H5JXcFBz6t3R",
  "key32": "3mj28aBFm4ywMErNbFeonyegVR1y85qnQ38aXj8iqcr6amDiERs3LU3nBr6WFmXErAcyEPqhn1D9CakE8mMN8dtL",
  "key33": "3ekqToNvJVFWfBguMPW2Za9GV9GTZ9gjSp1n5azembLkyN8VopKTEeocW3K9QkuH2jfhvReXxyxergMUS8d1ugbM",
  "key34": "2sMHCBaBJuapvHEE4bvAPYee4rQHUzK5rn6YhLKAPXPjvZPrM7KzUJxHviq6HMXxdzt6ZWdjBbybacs6vsDAQNE2",
  "key35": "4mnpPfCiaGqvxQbAVt9s1T7zpwPB9VovAJQNqcn6jH4XkBLE9vuyLAxBUWs78UmtKq1xaqjAhsmesEX1WiF4WJfY",
  "key36": "44iZrWoR1gH8xxfjzXiQxeH1hDEnec63t4skPNxqFjVLF9HjH61FS85F6jK5zDbPYymZ7dwa9GcSLTM1faj6HApe",
  "key37": "4RP4yHe36vEM3yx8mjF6xt7h25vMRBBKu8sv1RfvyW6tixXAF9JsdoR69Yij38BWiVR79nYFPqMia3inHvuRzXZw",
  "key38": "RgJXLXPiVUBiVR5iv8ZjC9puEeWyFiWGsCiYfza2XL5k86Lke74asfD2FdWorkHzuZ6GRbRxrXuTcTdnUNzenoS",
  "key39": "rC319wbJYm9hGv1truyaYY6ifepJLWSkZ8qzKM5FTnyKBZmD1oGS8CWvt7hpnvC2UNx5xLvaJAdTcnFE9sFRUqH",
  "key40": "5ewiTVwajM4JLUA6DWC779wwbvgm6UsQjBnVz2UKjFbNAitnhAuKBgHKgF43WGh3s4N5Bg2MuPqK8EEdEWUwx66w",
  "key41": "4H6PW29XkhART29NrbG2EgxMzLdV9DEd3rUBu9mLkUxLprHmsP46tKj8WhoffP8XvsCZdwxYsH2h9jSyaAoeWdR8",
  "key42": "2ZcUTjP5hGdZiRhvNwN9TZjL19WxCdetfXD9Uh1tDt1368LqtSLzmAzeokzvkxG8CJZq11b46yUhoZzAiowZCee3",
  "key43": "5BvxmEhvjZhGg1gY1ujAc9f1Vr8aExtaE7xFt4EHmmEmMYn47buRKVFgSWZScSwtzosWGCL8A2a53Usay4jhnKCr",
  "key44": "2T2PByyNcvLFzJihsGEcLjBzh9cDdFxVtXmN34gu6moSiGdBX7L5pzWF6FsaCm7BaU3JtCDxbWFJwRQVMu9wCSrC",
  "key45": "FW2Mm9t2xUwG9NYNTivyqodrVffepJqVLwHr4TLQh1hNHKHfxHc31E3NnvSfeqwbSpfsaDsa1gmjFTAPeS6hfBV",
  "key46": "5p5cVwBjudStAdM8zArjKLNaNnikmQw28iojefFnjoPffkjAEpxcvCbFK5sFXU83yJPoewnFFuoNHx9ZefPnbQ26",
  "key47": "2DD1oR1mKEWJ2GENxRcsZYhTWYRExUaADDCFy8k4RZp5Uq3KaH8n2NZ32bVS24Z9LGyWUrVVaZGa1PBQhcx6sShw"
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
