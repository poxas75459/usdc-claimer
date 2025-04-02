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
    "d5cEw68EntfDRH2hHAgH3djtd7WohcptzMH6AJY1NLQy1xUPNB6JAbN23bnHeo1zsDcH91nxhuEzTcUMsgWLmKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dLxE1xbyjhkDomNGpu2KAAwT15wkShV2Vb7LT3u8QGo6XRZeJmEbGRSj67RoDCtiRHRfQdYgC5mdvjgw6w6Tquh",
  "key1": "3admZD8pAsP98eajwj2dsVhKE5ay633p7gTR6eDnAyeUp9hkZgq8FcvA23CbbGC4nMTxcpFAw5AUaEyqUk3xkqCK",
  "key2": "4sfJNHVTob9L8AxicM7ZdSp8c4bwLcYrwxhbhH73CtHprzxXcxg7HxWZt4YYvurVdnZtkV6PxAVqyNnmYa6F1hsr",
  "key3": "Xebic78hGjgqmctMtHCZiXczm5isXVqj7Ki4dfN2WoPmXaiWrchSLU5yky5Q3aF3dEHkCMr5QKJhm2uWsU36jUH",
  "key4": "3bWW6Zs6tQAqhMnES34tnbiaAxrXzMGoRbpj2hRWPhEiJq1rbc2nf3vanvLFHW1UkyaDjqfzcwMaAKLfteqrxYNW",
  "key5": "3sSvv9PsggjGckkWCrmkvQgLvBzk4QrpCfDMW9Sra5ErAy4TLcMpvDV88xDQGzLaEehbhKJFrjRiHLDY34zh6jWZ",
  "key6": "2EaNST95TPXRR7EfJChr9hYn3NtFMqEB4teg96qh3kqbatXWvdGT7vDZ8igP9CEPhyyFAapud79Je9iZWhTob1qP",
  "key7": "PEHJmxxDSR6Gf7zm8MGeupncS7JFU3J1zexSGSfuHrNNPHbghcdBH9zaxYUXQjDrkBKfiTyJCuQPLPyKFVnhyZk",
  "key8": "x1cCk99pK2MYyt84p4DVmfLaA72HkEuedE8bQe3kAzCpQD8osZp56DLZ9GWayNsuk4PtxXdTDZnuPuUcV3v1f42",
  "key9": "2MBjRKsueknhi9RoyaRbvFdbpStRTRG14fmVjEK6bMLKkGZV9b8E36bycH1YPipVT7PNmjPwLeMV94VFE4UR3tPp",
  "key10": "xyFzz5kJwh4SagkVZ6iGeYfUbk6nPYj2om9egWbdMWa8kAmnFoe3i987xNFYvH6FPkeJsCGb4ZsbhgFwJhXGzoH",
  "key11": "23bMbeuiXDAdBDDPpMifWaza6JRxHTkqeiK5wLpF5zy4UyNUwgnxisbB8XZrmsDKb5k2fsfuJhfFEcH2U3Z7vFci",
  "key12": "4W5RhoPfcVgxhRTNgDitBAJJ4S5Ups8n5srw5SpCz63GPHXnyk5Pwz3scy8wD8ExkWxH79B1NL7NJhuZLWxydQ3o",
  "key13": "4U8JxrTv62nVXiK8BvXgqtWxKvyexSxvNuSvR7Gyuh3HwdgaS6VVWRCJuNPskoNSadQ2kLfwz5ELucrzssfT1fHD",
  "key14": "4TnyCnYYqBiuPiABkKRquqRuUkBKtFPKEerqwGnnczsoMANWgisVLRVsxV3XQvMFMD38B5US6v1nEbZdMfxP4oL8",
  "key15": "2v2FaT4GGjGziiM4J8SefbUMkg2NGxTNNGYv3tQgoXR8Rk6Nykwt2g2h5odbWdGqRUuVQwbP7ewhyPb8ZkTE3MTr",
  "key16": "5nUs3ea6uAcDsaiQLy64nFv7yNqgRuwtvAjgHj3sVeEPYaYAZRmjJEYzwdihBqxrNkXi6Yua2za7MLtbiaW6Ebwd",
  "key17": "2Qv2hHdd8yB2dDoLzxG1nA3c44GbkvEmg99LNerRt9xpRtFXEsUrXPifF6VicgczMutUtjpEjU62dgA9K6wmTAPv",
  "key18": "4mmDV11ddaYFHfph2VtxoHz5tSTch95uaQKbCp5q2GUbivmPf9HJFY8ca3RYzdMJNWryBo8g8hmUYfeMsy2vMk1p",
  "key19": "4jJ8VHsAQ4njKfQN5k3m6t6cjJ36Bv8pZLYEo4aPCU4ZDHXtZjVXQRZxtskVzCpBnGVA9NgSpGqJiatMJswrPgtA",
  "key20": "3CETPpKqdx2XEgKgFaMC7FzrvPgoACY2gzheDphjGJsekfhVXmpuvWEAm7T9gX4y1sZw1ML8DbcxfMscgZgZvkuW",
  "key21": "ZxLdHk4wHPqsM66MVJsB3ddyC7NDWQQszmYedzqGHUSSfJmfMoXbjDGB2U93iNAgVw2qKp6oaYktZYbqoMqC19T",
  "key22": "5aftXUV9up7hrQxHqQo2xfR1atbT6buwqY6SqNeCYsWP9AKfYp6W3h6R8rXAUtDPKXzHHmqZrp98ECuVDKmN9CUR",
  "key23": "e4T3aLXZth47yREcmJrSVufTfe7QLpDwPgCzFuywXoWMSsuqe9Hi3JiyeRioVK5PkEbcsL68ZMCB28pXMXFuMoA",
  "key24": "29GGRHA86CEZSYT7wHozbeK4wzGHiTsvD9RFV3G9ZbRCQDZdEQhQiG5MBinmXcPdFf8T6by6oLqvV7iowxYNiQRG",
  "key25": "63hC3jqErGn1FoSYTY8ABQAeQ6dRHMDneZgzJFtTPWXLazsUC39QEWndiaGYfy9wrNRJhx6T43V46dRNbCbzrLWF",
  "key26": "2EUx7gkbWnFZGrvprfYUZWEsd2N9jRomY8RUq7Ey1TjoruzUVHbqXFyKfb1KCefXGoKPU4ms2bMnX5ZiQkiWUs2K",
  "key27": "5kpRaPDWoT82R5WHMJ2ogoJjusKWP3HSWRTYMc9Xwzg2a3A5MHKb5ujWfmKJR2UNahN7EeDSZCPbjbtnc988LVBx",
  "key28": "xVDNRivP4Axm7kNQPcmsCbAmCnhWrF4QFzgkUm6Ew25JEpRiQYQzzcgc6jLc1UDStA5TsRBMnGqyenLvo4ZVdVT",
  "key29": "czNPuKvMRMW2Mh96SQomsHTWAcrx4MgcnmvhvLS9SJH5XiTkzLJHh75g6W9S3iMMiJARdU1oh8evHXwrYxWExSx",
  "key30": "3DzbmFWViEEx3S2eD6hBwTQgDFGRZhegaZdsLZBThR9KTpyzg27qfPWDrtJNPuDf94kd5BoHDNEz5VPHAWr1Lstn",
  "key31": "4B5Y6eqn9w2ktBsizoHsxgP9mExswpSqRhsnvuHgBuJ7kTvoNSrFkirdfy9Ab2VeuM8PHb9DJ6KLngfX1L6Ai4px",
  "key32": "3TZJb97Q81b7zndAcYBC1fLvZSbKLwC9Xohe1XZCboeryukKbqi4JAxk6AzWtzZfS92G5JLnLrXXH38tx86dbjF5",
  "key33": "3cvzS8yxpVacW7ByTTytGYFsJanmsw64bQ35iUWubTpqxmUFGzt4Ch54WsYRuKkoukGRALrLuquCrEyMardneasW",
  "key34": "FLazX8v12Na3sU44G3WWW6L7CeBSVsrswotEgB7bBJbrzTKmeh4GvDNkvjiiPFTrod12u2XUrGAwPYsX6u14r2s",
  "key35": "pJRJ2dtBzTHavvK3FibpUhjerm3WmzULM3YkuRoWY3U9crpk4azynYDR2UHTAtyfbaDswoZhmL1AbqJnESruuMX",
  "key36": "2AdcdXt38XrkxCgMpEfthx4dPs8tQBjSoQgAzaWF6ATRbCJruswW2oKW5VkXPS7NJJuSJXvUGeUdTMvNF6pdprYN",
  "key37": "2ALoKEBrsdcT5FfUMX9J6K6dGcCsY7Uxekn2GDgVjT4tNthLAst9b2tQvue46zgdNFSgwKJDBS1xftiSXfENZUkk",
  "key38": "4LfiPWuHrdKNpYnDyK5DKnDywp7S2TCZntL6L518RLG9xXQVpfL7SJ2tbmfwM2sJRxAfTY7auRjAYPTPW2ofTvds",
  "key39": "2EdpAGJ9nZe8qhfYdpNdfEzBDVWxR4oHitU5ZhTVrJWymeG2eGqWRBaHZNBv5ER4AFCVjkMi2cWBJHA3eJ4G9A7M",
  "key40": "2LVuVLhCcHisSqTzK32cnus76a17WXEXZYDxdETRf9cK3SyfwqKm1XKYDqVx5XJgird4Atc4tSRPi3bQBjzBRppt",
  "key41": "5ravh4uB5zaCYAgoTuhsb6kEB5VzQQqobcFWM5AZHFjMd5TL1mCcVt19LKjcNvNV3xu1QSAtnQxv5W2MDuP5Kei8",
  "key42": "2vBzq5FpAf3DREup5xsSSNCVR7krGniYn1BPcLjBKrEW8TG8DEcqVUWc9dUN3C9cf8iA8VqEUotunYcmkuXrGDcJ",
  "key43": "m5uGhJC1y1KLsi7RtUWNvgCn5hLaSFdz8ez29aGpyPsQkmHAApp14VfLReAeKDqMPpmdEPG4G3iX9DGGTdEE1KU",
  "key44": "WABYH1Sn8ees3K21UiCdeXB3tdBb6sNzeyR8Pbz75XboASr7DkifM17pNet8RQM7L6egX87xeiwPSR7U4G33Zaf",
  "key45": "41qedmyDqnsJk3oqi6VrGGcnj4EHuBz5qrBr7Lrv3qnreuLfQYaNo9QhT1CxLiXp3iu47iuiReYYMae9ghoUoNge",
  "key46": "5EjMK9xJ1BrmBBbrPJA7GcQASZB5sceUisD2FVLRQEYLP53utVUDyS7rqfNKzfYNgSd49ofwNmL8hGRmw8NobmiL",
  "key47": "2epi2xUzo79gJXQWmAfNbrx3LeU3wJzysWYUXREtyyn4L4PVwmQ9WCXy2NyyKphYRtBnSXo1qJaoRgjfSyEpW9DX"
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
