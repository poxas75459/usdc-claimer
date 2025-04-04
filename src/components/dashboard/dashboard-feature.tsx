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
    "Ndioq5MKbMmFEB7c4kBBTqV53yWa9UEBFx2NxCqaoLtZrp9ADzdcAPRCPwQsFkPdiuG7mfwWVePBUFow5avJgAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GK11SYUvpKzjJEpeTAhgyUDAeF7vihdGHxvd5WnjU9ti4xq8s6o2NiWGWCheiJHaBjQD2JZ5DBQ2VdBQbui3HCC",
  "key1": "4ACEeeebx5KRW3nVVtscxrAuqMmyRQTAvdLLpa83hgCzHXKrsneNR8hWN68BCwTMqXg44Nf7Mz6rcU8PaLRRAWYk",
  "key2": "5vrFS5dXLzjYtUKpR64wyskoXTXcTdvZ4m4hdSZuJHAhLRrREcaURCxWa14bFvBNqSCWq5g4dq7kve8sdd69KNWf",
  "key3": "Zd7EhG4bDUnc8BfQwmTiJ23ztkZTUvWz2Th13tPECeC1ZD68YJdmjwWq7Qy4Mo8gXCQfyLGCyP5iP4p8Au9ecwr",
  "key4": "3DeTJC33c2tChVrpejmVnK6zsXUrPzGgZAZTWsDZmsv1G1PpWJYYceDYNmnAvptV2CgNd8ADzxQs9VLAgDGzFSak",
  "key5": "5qhssqHuyGNhGXSyDNgXfY3dnA8bBRVvnBjWEc75o23jZBWNmmBkuSyd6UvMentHKn9jtY7z1CMrTG3mg3oJEfwT",
  "key6": "2ERuiALDdybNw6aL3ePxNkyLmCdhSYt67kscejSNwDN39NWARdX2MUiLLSy31tonXgfDEkSEDycU5HnMbfHyYJdb",
  "key7": "3o1wyvTU3ycNTZjyoBnarG3WAPqkPxDzBnVdXcR3uupqJE65nnUjjEPdu5UerYdSXoHXLjB39roZa3mrkE5wgWCa",
  "key8": "5RCLBziCaCcUKixSQKtgmaeYTEdwFso3Dg8nnsPiage4xLK5YqbdErJxrTnV3DLhMSoNCPUTdHR3WQLPV91ShsYz",
  "key9": "4HCinqZTbNm7DW6rF2pLGVzPwvj3S9pseQEpnAc21uQUPFog5YpMBFojgQd7PnNCiGq9qxdRNWg5SiTrjh5g1TdN",
  "key10": "4wqeHkGmS2R1C6SkXx2nFL9DKbAGqeZ9FFpn8DVaEDQ53vcHQ37v46si1kLxMSuzRAhDtPLCDFZCBFtXEAkwCz6v",
  "key11": "61E1XFxXbxLfzM6RnuzCjTgYovt2urUR5Fa4C13hUqZYxEoCEm1tTNiMLX14pwpTxqjA3cvZE4qyLgtf7fWFWJ39",
  "key12": "2L48LzMgNXXfVigStb6RdHjDMLoApeqwH7Vb7NeJfTSKNAVSCdgScQGC5JhXadzYk1JhRCUW8FYd8iDq1P6nQnTx",
  "key13": "P37r7LSzycp65LsTQuVfowhpLupYs23YkRXgvRdgCzkSTCC4V1ivk6DXkjLNA4eMC32oYow7CYGJ81gFnQ2nwFJ",
  "key14": "32BBzsgdXfKG7AijojE68U41oHLsVEmuxc46XuQXAgrFBDUMM42VMDJywZzgHUbs8XMtLiGJBKTPYeoYD2boyesw",
  "key15": "Jtx294aSDQupkGfHRvePbD3qznpK5u7pBrR4xT6uWuTmkcNt43zTGwYERXKRnSxE57M5rZYpx5qRLvw3JuMC5mi",
  "key16": "2aEBfsSd1qopEBpjegDW7PjCp6zEDad9vEUG2kNE46k5cUbQmv62iAPMuzUMtkQd9EoCf5qhQTcTPp58pKAgzpyq",
  "key17": "EfobXEcuaDVi3CRbqdCgkD2zBztseny88rSzmwbyUNx9ifBrLK6Z4nGmZxZyd7HkW4BXr7bvRhhkrGghiJKkvKh",
  "key18": "YE4ssHjZrsxsreu22fuWsArXwFY4vE5Eh18jxy8CqV65KHXfCJsiuv5m2zywJzqtLWE2vAR3242GuAuqfDcFLcL",
  "key19": "3NA3MYEJ6YVFqi4CrDyqWbGRqR2aGGnjF3wDiYUU5AiUmaKVtK3UwudYLygRqDNJQKLHVFYnDDuyhL3nbkCvJRYv",
  "key20": "2nUNudjKcmk162gk6TsP3bfHqnxXGct7uC4hyuYBAu8kLeHJJEhaUb1GbraGsrNeWFCCpWKdndB2PrquoiFLsUwb",
  "key21": "48NbCVEZm8KvP33fGqyxMMZihCW77SMaXRxf1Wu4uyvQWyjTi4HxsaQSk7v7huhzgRr7czXwA69qgM38CJSPBBBP",
  "key22": "59ocpwtwt2xLr4ERdGrbkutFR4oGr8QgrgtnjGmd57gdzm2PfQQdVLZgaRJe7U3M7WNCqsmTvau5pj7X8KyhLxJm",
  "key23": "5jGZD8ZY5MhDJ2LVBr1haTfVi91eQ4JYNfKXzumUR4oCgTbFjrH6iWtuxMeqKPE41oN2MV3Ai1FXdSLw7bcZLoYM",
  "key24": "5sNEN6QFYDLGKeiCm5y2La6xQLtQ94k4Nm9D3QPumh4AqkBvMU3C4u4zFbUVb2dEaNhuVqmbt5UBtvWSPswSrPmh",
  "key25": "3ZLU9kYXhCSiqJMU5oVdKgrdiJ16MLZQVCaMfLAJGFBkT7JnBU2VWStpm6wb2LCzAEffDWyU7SehDWixjKvFeRru",
  "key26": "58J9JBcVhbDMjFgMKrDwxn9S2ib2WjmD5E99FDnibTX2z7mzxpewjdXr9D4KWroko2ZKSLBUfq4FKkvBxbHBWmP2",
  "key27": "5JsYFRQXXMoFZNzHDHtpm5CNpzV75DgGaYgy2GCu48kP9RjGcDVuA3kguBpqhPYkMaNKeYDHXhGMuYGq3DJ3VLU6",
  "key28": "39istcEJ9WoqFS4gNWf1bhxxiPRT4XNfXuw6RBynMbH7aCQYbRJdno69E3oem8uWZFiEeUVR1uEcRViecHbEGNY4",
  "key29": "3tCeMxugBgoaKpMhnkLgRqz3sALw66Q1HfdhzvvwjoA5m2cGQ7fZ6PF8XBvwKie9yM7WP2beuvRtETNHf6BUayfJ",
  "key30": "3dvsq43oxYXBQdsUwWVQgia4vAUm9wRjucgNABezVUNpEZWAxr9D1w3pkXFLisvS4uH1nxKp43Wd97mzs6fzEwiN",
  "key31": "4zPjzTyaPybqfpHkmUwMQA4MQRp47VHsEzx4sEPogaFM3ksE9wJ13PQQU9buhaadTEMN1qoUTAbrW6jCVWEEcbKS",
  "key32": "3AZDK122ZNEo5MTWPEMR8TpezLfr2bsqrfJBN7Yh1hcscWcfVgPp45DK2v1zQhLjH5NK8esKqReDSUry6KDWDMfD",
  "key33": "3Wo6Zotz9wSuas3KU5mzxyGNfefprsZyToXgnkP6eM1PvrJ5qDJKeqw3rXfRLkAZzQQGKEzWyuhaRhhRzwSdaEgE",
  "key34": "5kF5g1NBtSTvVswzQCE1WxLbmQ1SnfuNZhWMV8ju64PM1BZWv5NxvLBygnZZCYBMX1MNZimaaXKasthVVuxqEkS9",
  "key35": "3pq5sfA7s6V63aqVb3WjHKi4Y6L3aXDep78uPLpLMuQ2doUXSWpP7AtmYFXFAYDtFRBVkGgdPkKb2JyH3Qr2a6TX",
  "key36": "5eiWEEFBMi5rN3pPmFdsnzBvN7Tqh2pz28Z3ZD9nZust6vGVi9kqQ5npiber67p225bXtSdvEFSFuuN1b7ZJtQdu",
  "key37": "n1xpXaKsznrV8yeGGQNpfYb5azZbSjjgi6n9hoLKoiEpGnesJmRnyKnvHX8amDnS8qEjCreWRMVEYxWFhr7CHMv",
  "key38": "5HHd1CEVMkpvXNgFq765mNuCGbixZEa3tXy7Xes9unn3zpejtDuqCoFWZHYPXFYqZziyM5SQrhgjcuyLSH9J79tg",
  "key39": "3B6tWP1QtRNmuP2GKfJhPF4idagoKZ1T8F25rZFCvhR5gPhgg8o9CKtm9xuUnQmMVr4nGvQSq4e4PoAjDB7g1tWp",
  "key40": "4WzJByaySaxAswdeWS4iEDduraXdpHpFueTRaLCzGTsRtAX7M9NmzNUKVhrymBY7iEbdog2xuJecZheBH6zRaSDF",
  "key41": "2biC7zn4kd7LEfZUmmgTqP3ZZ2Jsgze7rsimfpn7zK1ZwGXdHQc33fKSebb2i14JrfFCDfHDvEdcWCf7WZb5XLBy",
  "key42": "2oz8a19bWzd23271w7kL1XbZS5cztQ7hf5BtDEQWmQQQxRtWwSUum29v1yapirnCyWMgi5foFP9fZyS4vFB3HzUH",
  "key43": "3uxE1DZR6DKhLGiTqQKBrCRpycF1EkHioBeUTNo9FJp5d6HDwmNy2RysmBrkPoapmQ7bc9Mt68fQYM9nuSFL5UCp",
  "key44": "2w4k8VLjvykWDqkHcfLpz7Yye9E9YAX97AE8ykQ859S9iLABeLbhz8FTPuiQPtgQH94ZVjoaDdBbfgWzvgATAmYS",
  "key45": "sQTxezDApov4xmS3cvC128t6cU3RGzNfKi3z1S1RcQLzAFXz1HVDAHQwu4oyULdsTPa9p1jAaxNow9mTypGuYa2",
  "key46": "2B8953uqrzdsYsmaMKh5nVRk73VTH5xYwmR4KHhMsvKsaHFo5TbkBSwmrDRz75FzJefnLfwV3DrM2YVG1wjzK5gJ",
  "key47": "4j2zrUEvaLsfbzSZdBZZdZy26cDFMKZNBtbXjT4LBMgRU67GEL9a6RdzVj2mx2pzQNGzGa85QdEGCWBcHVymsAQs",
  "key48": "5gwgiF2dzXYUF6TW15hK1EDkeLckkr2bsfYqzGwcWZmvTeFT7zNSvNx6o5FeZsHaUbrXUN9DxKQBZmVRCNcJeKEk",
  "key49": "42cDLoWJSd5dwWGymjy5fgN7WQt6rbdiqzKLw4WxxHyiV7qaLwAxcTwUs99fWQrVqPCizZVi1qVkAf1po8VfH9rp"
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
