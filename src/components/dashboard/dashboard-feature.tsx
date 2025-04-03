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
    "2V1Bfmb9Z14SqsZxMGD6WbkD5XLEvhytfrUgp4kxCLJtnDtr7dL8x76YSLakRuz6QDtVaHR2mVQ8NSnrHqCE5ma8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49bmzbXzLC6WWsShTG7KVnMqcBTSKZqu1DmV6MHtJzue62piV5YfVrWDF2i1Wq2GQPGDY9TmFbNhj9rp1ws7oV8Y",
  "key1": "2edaDwX1AD6q1R2mhNqkA8sAAKiqHgdndzTxQJdfE76DdZkWTR1UZDNvz2jL7f8y7r71vhB292AqibrSHVim3ukh",
  "key2": "5oAWBisMsBqayJjzcQrTXSCMTN7saXLAKyM8z3qno1tHRMKxtHmjYBAruANtdXWdWhCsaQeSXkie87Q5rCbeiHMi",
  "key3": "5iYZKcncz3B897hb7NyPkbJ1922PXPdmbixw9EXJSh8WavKVSRtmkfjQtiZ7BdiL2qk1EFErTuxWRooNYUDYbm5V",
  "key4": "55x7XYUjeu1jjdCuaPFQeBcmxGp8aS5qRJLbQRPmwPaBc527pmGuREg7a8LbhkeH1dy8PWz5Grbg2x4S7QoH8Lrx",
  "key5": "3SoNoEpEBk9qZYwi6znQGrBdVQ7gwo7TdVyQNcrmimuC1VyksiQEZPRLeFxHD1mZAsaRgCRjjAkMxiNmmhyUSGDB",
  "key6": "45H4S3cHNZvNBkovPnnhBNB4fHX2dm1rBebsLrmqZmVsFewVn5kDkJFKAknesJnMTPcwHUTtUtDnMemUMc4asaKP",
  "key7": "3MwjzqGbLwVr5Wi5n4ciz88PKhyDACARmVN1VbPqGTkCeCcyEQcDavwtMFBMJfXLgLw9NGKxhmRLSbe6R4LPaJxg",
  "key8": "25ALwqQ5tbGsZvbPywzQwPjiG5mFYUFuxxkHShxD5PbZ5qwuWjxPPkD9eFBxZB61x6NHLRnRMdayx8R74JmvY3cA",
  "key9": "5rD5DPXXVZR3U1sG6g84TCvajf9GsD6SUpt4GWQAS9uRjavv13vi3KnixmwFNLeau5DEtmALiYMmcGmtWDNUysRr",
  "key10": "3jqnTVNS9wAM8AGRbrxAMNzyzDxftKBEnRhBnkrLKMT4gmdHvakULiNN6n62GJVotp5RaiFtqVL3BAm8Krm2Qd2g",
  "key11": "3owofWS8LSRgPLsPv77iwsxU2U2CMwFbaXsRZiiCnMZFhhRQdF2igbLH3JMNJJkrTapRoK2Rmt7SMC1rBhsmcPxL",
  "key12": "wAbsN9bPfShMqM8YSYD7rWsLABizQ6ziA6GjBVhVoG6MjAxYsxjhde6j2Fw3aLSqay6GXgS3H7HTKHUef3r7W4Z",
  "key13": "4gsB6VHUrWy9oAARD2KZwSGq5zU42G42cWiX2H3esTYNJFcJju94U6ku8RyLrdKBuDi1emqsbgRRLAs8YrhczB7U",
  "key14": "28RbBEyHCSyQ1BPBNqAKk2xAGWzLxsBtU9RGFkag4FSoXowhY1V4WdwaccSK7pfCJ3AUbsBQFRctj4roWvmE7zp7",
  "key15": "3Xs9fpsQVKAKbGuKrWuWwM4hk8LV3rfDazZiG3uPDSmBRsakuxnPoTj5ytp13GEZqQHW5q3B1dgTLfmACvPdgFu9",
  "key16": "4LiuSNYKfwhwd1B9tybAtcKyJBh2iBP7EHYcPnU79XEqNU7WV8pgw7JSC92FiEhncuQoYCLy8dW763zD2iFMmREb",
  "key17": "32eZAAxRg6qc6RuopqRoACGfzda5Yg1hJRj2nsBGXEuRtftisqnZYr9onVqT6rguKxVhoZNDTt856qtiGDvZCVny",
  "key18": "4eANo1SiT72bwiyXRtDAsNTtFey5fNouP7HC23rHqoM1YpcmqhovV6jjgd2SYLoyQmwPEMi179TV5vDqUTHeeXpX",
  "key19": "2YxALyH8AMKcX9k3YDFpZ6R3oKduBTHaXV2yqZ6rd73v2xT3eHueX6y7nsXMMykDCvo5Fmii6fziPExCzCC2CUpq",
  "key20": "5U9B8WXJb4JWquc1AeXHc4Y5hDRqs1k7zvsTEcVGJsHcswuR7Ex1MNCCqNMHaE8ryR48VuBw9kiGw2URrQgEpKng",
  "key21": "jYALMzvpbuikvjASysQUdCioQh2FDK47ydjAhnWgwsbD856VEgvYzeY2pKf4U7pC6LPZuoBk45QcewZme69pY4i",
  "key22": "4Xv634e95MdDyVjqyWYoTM93yshbrm6Fj7vfo5FCp6hja3MD3QhuLoax6mf7BBLV9VdEXxqPxzauswXievoPq5XU",
  "key23": "2Tr5EGaBoZhUYLzqdw5YivrKQaUUQmJ1FGUfng98gr78se4W62twkmp8EH6EJoFr7nxo6RuZ8oUi8B2eutTDK4F",
  "key24": "4gtoQV7Nu1Lq4mtkk6zHuVnDXEmVY6AkwnYzehaXnob6q4Lvy8euMyJ2QtxjDWzvmFnr8MehK2qHTiKqG5oJoS2i",
  "key25": "35FoVdMaoYLhu5Bo6PA8in9mAkyW6uK4wBQHynEKyKKejs9hCKVikugAQj9AbEBR3t8FAGHth7bwkyFuxkRdFUyh",
  "key26": "4gEMeDSR6P3Be4r6TbF81Fq7L6qYBvmQhfL9fuxbM8cSGBGcfH1xweekLpGYTEYKYbMLuKJLA3tL2LKQBN7oCGzH",
  "key27": "hUjNvPLMdUtqz124omTAtQoAi92n9ZPZ4muHBWbHxJiqfJBLeFo7HfpiTLiyjcWXKN3htExKHAPRJb5BQ2sc9a8",
  "key28": "5eVXh194N7tfgEgDZRL9bhD1s76Pivvdk5rkYXsWa5MuruxsqU2CsmHU1T6ddX5Ji9osJPqnFBGzJeXEUyuA8WBR",
  "key29": "4WEYQPSXjBQumn7ma5Muk94NDwRKjT3ZWrLNHY4bs4NZHmVgbqNjK3HgN69qAypkJTx8otYp2ww26gsoj3eDdrnc",
  "key30": "4Ux5Kz3SzkYokAxvjtfrftYsmM5nSQL2HqFcunH6FctEJKrLePxQJjrsUEyvR88g8SBSbSvcV5gzdE1453zeQ1mj",
  "key31": "5vAj2twpcR3Wp75BRN1pQjPKgNrGQP7mi4HACoP1a8TVEyL5tnZP5aE8bvnKkdzHfvMkK9T9i3U9zP1Lb5hqZxim",
  "key32": "5HWnm3XcUtEmRAu4eYUMNpm6qwhMSJAWK4nUPCKzUz6su9C3oM164TZ6Z5CcKt969jCiNmrudgHzyAJjyqTxmthj",
  "key33": "5woUWUvMCA4FtMK4xxyGBqjs94remLvbVKvxonv6cWmkqwEZSKUSPJoMSnFn9NMkZDghE6Nxvkxv191H25GCLVup",
  "key34": "mZPhdQCCVpr1Y6ob5porhpsMsVoXcr7Gp7iaARFyDHD4w7cx9Kr7z1gYgrp92yWcuaAhGwp8ejp5CbWn8Am1zaG",
  "key35": "3rusfJxLV3fnXzcuPv7CJxvQcAju8jdJCBXY7zC8QCPhpWa76GKV1yDiLCHUw3DsGv7FtHCxE72mQUp1nup9TVWo",
  "key36": "4UXVnPYgH3sEaeqAg1EGuPQuyGtYCbSWeE3ytjerGqtwQqfPzTLnEvmDp7PToQzcU9VXYEz1FDTvWSUWXxRUGCyJ",
  "key37": "563yfZYhsyJTmg8coc7QLBs1CaUeF1VHPrBJhxVGQ3AKgWPrNvtkqHQE51h3RoH4QT5HVNSs5wbsZpTzoVu4f9Ko",
  "key38": "4H4Fhoh7kDXD2t92fE5eghWDGeNoV31ey6jBYLqceuKtHYmM1sfW6HduqD1whLo5znfFES8wyvfL5xArHSPuR4dq",
  "key39": "3ZcKejM6jKLE2Cik5t8aSKQhFCDYEFmrkGgoe8iZFSLWSSvQWCGrqJPoUrp1QVCpV6FcDk3xuH4w2xEyyfRwsTe3",
  "key40": "3vhgazf8RnjW3BHYcGEXPGR38e6yhPjMqUncMUNH9aBrUurNhagYFtdd4CsQoYU4qeqwe1aBCNamwwgETqNxD8wZ",
  "key41": "3uHmiWCwF3qqKCzuavRCsJfeWpmTbsMGZ2gzpePeumzwqLwuoRTpGzcuyt9Qra3EPeNHBAkPC5jLyuXybDdEvSxw",
  "key42": "oXoRDWKArZtcCBQn37q1m3DJFtmvRSaP957UPv3PujN8Ykbbn6MenKee689frnSkRBPFX3Ft9PTtRJWiAHKhj1c",
  "key43": "5zfU7frHQQS7Mc5sFFgauJxAnUq69c2zzvyMdYqrs1JgP4YJPYqChKfkQJNHg2NhuCYNS9zx6amxHY3L5BFM8RRM",
  "key44": "muBxpcjtQEkYZVD4KKd6XTck1yX5PhLSCtmX8Ei1bgMULmGCztUUQP49e1UJxKAi3oDjPnhJm6o9UjFYyDjcLUr",
  "key45": "37oLfvPXiSPxorEVuXxCAkFDuT2n1MXpBgh1AziaSwebnQS3Qvavjeecw36SAzrsqev3dYRtho74tiJPTSwkUKiw"
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
