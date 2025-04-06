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
    "2HydEouJ6u7fEvKRP33ZtKSQ6joG8HgnbMjbYSGb1hDsE5wSPyYKshPiypcJMJ4SatGAhPTVMqG6hmdy2bA1vvPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HbXXLEWuRWqYyojbKiB5kXGtrmjv4CqEA5Jrs7NC59PY92yMtDMMn38gmguDHw1CjFsL1zp3RomxBK8uxNucDQ6",
  "key1": "BPFjopbUZvr2ZDrUdpUa3AjCd8r69zhsAvmM8YHAinpWPw6yF9YWFfDzML8MxjnC8G6beaud6LCS3WMyJ22Jja1",
  "key2": "2b9f1DmR6ES6CZqnePq2Qz2L3cGisDqwRvHvkqhfpjdtjSkwE56ZDLkGc4hAXRJxUm8qitxuRNy8r7o84xHEvUaf",
  "key3": "zGmag2kvV6qZ36eGLXJEUnjW5xQmjrweMzAtSKMZpoLdFvavfZouQhPVhNsUzfRYqFxj8qLBshSL9yfRnix3nTQ",
  "key4": "41SmFfwB5aZk5ttb4zUCjwYUDjkzzcA9Lj6yV3hTPUYDt2ccvXKRAghgaBQgwJQg8B8AEw2GBGmkg5MP4KroRUZs",
  "key5": "3JZyXrM87FPE6urgc9VGKwJm5enXEtare6aYjUETC8F6MnzWqpj4XaeQLrReojdKdxbSVrzPeAtfjFK3DEBuX1bM",
  "key6": "61mL5t6BgzB566pceDXZfkev9QPm2hRVZs7EtQscxozTLiczCdon9cgRWDDKrUjYrdwncoBurYt9xbpVUE7R9E3K",
  "key7": "HkLz8tamERHKuW7mngFcyCprJdZZzfUMWavszb3ty1ApXRFZQDeP1YLFzWkZQrngZr8x4zj7nio56MXo4ixg8qz",
  "key8": "64VS9hSckjewpW8sMBqBRTRkeYRVbT7FiLUR6AsZdbX265LsScN8pX6VCsXLVPnNtjgRkAFtYhvaLHntjbXr6UUM",
  "key9": "HJTV333zkhxaLFZRpqD3jtd3i2uLrk5mcohv6uyKuZbipkfRUZUgXom8WYDbUeL97PvRkx6AkVLEneeydaQYJdo",
  "key10": "5rdVfrNtpXi6JBHQnaDRBHrR2F7DuXWfmzMssY6F3TN5ufoRPWKJj2Spuri9e4K2y2pXyEek6qVAMsUM3Pj95R4U",
  "key11": "TbYPH2TAVKn4Sr7GYrnFmnWVEfnQiHxP9q1NiUwqk4UHKNoa6xVAjnwjAV6bSuJco4LJhTUg9X7sv44yFUV7Lg6",
  "key12": "oFfnT5UNkjLEnXuTgUbV9wkjFG2Ungh85eBKKFmF4gECnpAcdNGMBMVqaE48xwzF7Erk3JgwnrwsUTW4GaDoTp7",
  "key13": "3u7BMMqaaMTt3dKC3FwrsCybwdiQqseoe4iSPWmB1bM1jh6Ex7NEH4iCxhg2cMw2PSjco9dggayrKYXfTXcAyZvj",
  "key14": "59QSox28r9ciCn3DHjbBjRM7HNvUARRU71hsRBujKqyPhJXDw2ExMzCJ8AMJwdpXCeubLmmcNpkqPm8CjdGvqAng",
  "key15": "3t9PPgJcU1jWLnNW1aWQVjCBxNabtwkte3464mcFkwYyP9cDW8GEVbHwxN2uiPUhcgd4vFLfarzki1QQAYm2HEh8",
  "key16": "5RXMAzTbYUUeJLmjMjXp6WFvk9qJJYsdSQUPYxJdknPcBAioTKdMJdvhcSpY7JuWxE1CduFQcRPXDZHL6r557prM",
  "key17": "2HdqS7SZx9yxbcJwaLbHXVpzqCeebFBGBrxjvW7vihLuufLSpCmPy8fQ21X1RXHQGTdGnwxxZjPdUPVLNP61GLDj",
  "key18": "b7HHU6GmZBGiyLw2qcSgbRcQJCL19FZeUbBKBg2z6nAw3Dg78K6G7ScVbq3wZ7w4awZCwyD2MmtyiPx1tJpgLnD",
  "key19": "4SaiwJA4NkCg7NTgvwcdJUViGKUYxJySpsgYrLqzRnCjEtJSxGNQAcHd41SdZfTSX7E2gNFyM1NTUaVWemx9ygpw",
  "key20": "3z19uqjmmTGD5sm8FscZAnypoJwz1kYNSZq573PP9irCLdw9W1ReHaK5rx2BGuDteKDFV2qnWWHvPGzpHXh7mkX9",
  "key21": "3PMxq9pty4fu3Fukqb8xuUdohdCz6o7VRe9Uy5EP6MSh48DHWg6sPz9o4daWeVQiCDNCKgiU2UGsWccCZHX9PkcM",
  "key22": "4wPafRDMYGjQTQR4eszrnp45ew12wqdKbatSVLYeruYSFTwRSEHoqtZLmHTEqc2t4eMudfhcgy1c3wxHBpzsqYfb",
  "key23": "2xvozxtF9R8SMJgiptFYFuz211yxsKKUbiQqgDn1uVn5BGVERENUeb8qmo9G97D5zpVXkcAB84LRwhtPt2c2gu4t",
  "key24": "4N8qsZHkRxyHEUs5qMCkqCeSzgAMP3FGxXHDHHcGaobLqt3VbCj4Ti7u1Q9k1aDe6SRtCXLQHxFadgr45N9rsBZN",
  "key25": "2PPZBHXLQQUrA23dwJNx8S998hm1AgB17hCQtsNF5NZDj262H3VNZAT4rviJhAnjzwFikTukPGFgTEergGRa5KBd",
  "key26": "7EbRt5rZic6W7WqqbLbsst221pqMRHmDkQENKMaCz7JE9mMQBVmPGqrTUbo27scLo2TNAA9Lk9Yw52mcjH8N51H",
  "key27": "3YpHzPXmjV6JXtA45PQ6MgYz2KUMm1enkSaSjc5GPmBmiLb5vnFpkQgZjcD8VSC2iFAEqeqr2ipc3whtUn2hKjuK",
  "key28": "4zsd59UU5pnt5F5g6WjfQk6wNkPi2qPiqri9AdJLsfShuNp638yxsePRYBp7VLjcsFjQ9PC6PjJAbMSSTi9APkyS",
  "key29": "5amVc4ndei3yqtPuxFR54FBGrcS6MTJKy7DSYhoFj8R6ZDT853f21cmTMzmWC2rRkS9uJrd1Aaxq5E9Zz6QzQEBz",
  "key30": "359yhyWhCrYDDJEhyTTWH7jUCF6eavGVZDfRKTsNpqNzn22AF8Tiemsuc9Hu42y5e2wPBSck3ivqBASh9SWF1Yye",
  "key31": "5TS2Ddaa63xiytDcaG59cCV8E9sA6F2NnqzudBqGYazFwzCgxghBZRSC4YHCpXwtsucrePQ2ZLTPzifLBUGppUnR",
  "key32": "4d8zCkAkWKwzy8YtpbKYr5XSn9rtKToYmyWu4swu4Zx1ejDFEApHWFFiLgXP8BKQrzuwF7jAaZqs6UMTxNUjaKpg",
  "key33": "n1YDtEhaV7DYhW2UjKqRWt8c3tmFL3jSfeKFhJZAZSr1EYyzNAnRNXpsyoMkSQQ44PDdqUnSqX2Zv2gRLL46qqc",
  "key34": "5eUu61qqLfpTdaV6yvhyYu6bSyTAR4Vwt4vmCYUzs2Z2wMjkjAut8XJbNLTsdygerwobTCoKgL9hvy7qENPumSnn",
  "key35": "5GjciBNRawJmN3FsSQ8RHhcNjCSS2ztdFD3iU2v4N8mr9kYvdntM9wQptRTiRLnGouT9whMjANWNnoJZo2igVhz9",
  "key36": "4eCoSTTtuB5ko2uJdQziEgFpKr36i8sUS4RzxVZ32jwTpf7FaoGcY6HTq87KjS9QJ1HGmBh5v8AF8oU3yUnTWGCU",
  "key37": "5iZt3GYvwQNa73zHTtUZvo5bDXnQj8oN7jjWhCyZBRzY9hM3Bz1mgxnF6pVULGjAscn9EE1gTtbCcQdHftd4jKRT",
  "key38": "4MKXBtDsVs3Y4gNWJhr92ALath5Xe7w1qF6XeG5XpUpLaqjM2cxFbTARpTaV1yMNJiCg2bp6SJED3xjH2VtmrbzW",
  "key39": "5WQLqaPTyXuWjUu1aa5VAgptzLusyHJzZ2msM1KJ9cMrbkBKUzqS8VuqRenLxrr7bYK6TD3kXVPgKEt9kxCaazqs",
  "key40": "2voJKKkuvgNhFFhsEsJ1zo7Bw9CtMgSmRqhvWQV13PGvzaKoE2abuEPJuM2ffTr1Jhd9ZaZ8eZbwyQSmr5fPKY6w"
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
