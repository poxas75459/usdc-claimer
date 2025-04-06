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
    "21cNGeY3C5F5CSBrLPr1L18AngFQG9RKgMSFeFz59qJi9bR3ba983BFtA72Xdy7zhzHNfqpcpsr8V29KcDpEzC8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aBbsRW43oNc4u8NpegRnFrNBdkd4uVu48mBbKGgZhK85qcmUXB2ZmMmLhtCTGBpHeYpNpnnMtUqEUgu6k3tdaUz",
  "key1": "4UwnP9STHLfTg2AerzfACgMiohabUAHwU7YiZDXN7hr3xGDQAan51YP2stjc9bH61rSuRk5jwdwdvjgDgBASPE6n",
  "key2": "2p8oUL5dz3tDkHKvj6vtJbfFw7ato9mCAghM6ENokTUFq9mLnFzstAq347RZnY76XpJHgeixq7xZA5yQW4MUC8WL",
  "key3": "FP7Gu3XjCZ5MKBwemH6V3nRgoHgeSgLyP6HaG1AwmAfud3nUJG3naxUdkkexCxBwPUaaZjMYzeqmNPTBstUSzAa",
  "key4": "5uZXWG6W6wHYprA3ExyQj2P32sYo4APsk5iCYW9txd4x9y5xHrNJEY6YFqNcR72S51wY4sxZ4hY1PMyiLf1tdXsu",
  "key5": "hrZuFMcRfmydfzfKJPEtjZrKP2zbwpGBLBD4GA5k4bRffdi9Ny9zto4o2gg2QZ6MJNRdqZaF88raqVYwbLJ6eDs",
  "key6": "sTC82vobgvXh3okR9RMaWT42jnWie96nnyxF6r8SmVEro9Nc13RzutFr6U7mz8Z8EcJzYkRSF6d3SdiTpfw822m",
  "key7": "4PjpQxoLGAP6VyEzkfY9GLVneFM15H8WAvb8CC2uG3hketyxi6SN7aaciGJTR2tJ6647FRdtZxJiuGEUBKek49Lu",
  "key8": "Tay76EqUk3HoebVyMcGMWRzzjq8NMs67twh4Avw9y3ZLw7Ya7DGAm7vfTfvQG9k3EWiHhhYJtLbnw5RDRe8CLL6",
  "key9": "3tHDB9xskueja3Za8z2t1PY1AHX1iRMjQeKkxAw7BNogUHA6192AMB4RhwgMGgVzV5bbKtDhYoCp7vJRjvCxKQs4",
  "key10": "5yHwWpVVuskkdtBZQwxYwdB163v1NtBYRHQouJztnLBEcGXshWqUo2Bk74ypoGgVKWpDa4auczgFJN5ubBoAS7q",
  "key11": "5b6rb7AC87QfZua6yrNzgeFkfFfNkv2JgEy8xnQoVTy6bvDF4XpaEoxEbdmyLdyF7X5zr2tXoaUnPYpidkM2HLRf",
  "key12": "557dnWc2FK5Knjcn7m3uV2Bg9VZx68WQVmfZeGkSi65ubvtxGNMhYT4VHVXBUDxdaY4B6EMktv9Epy2U4BLgsjL7",
  "key13": "56jVi2EC71q7TYE59M92EsQ6yHJCEeUD8w3ghptJYjokSDr7avAusEAAWyZdsWVz73rYTxApE1SAqM54ELXZGUkE",
  "key14": "3jYE7keRGGg1uvJu5eMghNxEuzRg81KvQu4bUGKeZuhQCZiT9YLVXVm5by5nWv3JCu4MgoV5hn13MgAHBTyuwjXA",
  "key15": "5yfdL6KYcMtY18pQi1HsbVF2XfHpRqQX9rnGsnDb2FkvXHGxb8SAwGu1RkgK4ywmsGfeMz1Aw8zjJiXwVzLUXsYm",
  "key16": "HDJnTyJ1UC6k4CzW8Z7oADdMkEXDs9mXF6Wsrb5PqrDsWLpREvhLv4h1n47XBC5XbiG3G8vv8vBWdkkhMNBADbZ",
  "key17": "jX8jZz7PEHns8168PvGbZSkA8UTw73fGTbjFPeDQ2Rr8XwhTWoBCFbCMri8oBE7mgLugpLc1pJAZ42heUT7Eb7q",
  "key18": "iHyj4F6HRrT4mQkTLVo7JtUvN3fdWSfBNZBcq7Ym5NooxiJSBypnogSUqa7wf7dRmqfiCHbw5fcGmAHTb9Z46Ms",
  "key19": "3y3UhuS1Fe5RhzbUSTKizqyvKgJrVG2FgK17qnmgPgCGrBWvBn4LnZGgJnPfYP8yHrkiMVKq8t2A88CxZRnGgm7Z",
  "key20": "4pLhn7mwBfwnukdkx4bXgJVXk3HKS6TbipsavvQALqdGReCZyRqxyaJHGSxJH55PYmGsFrd3V8SdPPRwZPEpbdiv",
  "key21": "8waDkJFGh8AedFF7VVb3cNcdHXSRtwgtr7FTVNQgsE7YDtRokiM5ygUGB2hxKSzoP1imeQ9LcsDP9rjTJqjMstf",
  "key22": "2ifmDER72GarCPz2XoGWRejhL28oocgSPNvDxCuqb86ABVRJm5CbiaXnZhvx5rBCpp3gH7SxUnXEqGAk61pwydaR",
  "key23": "4CehX1Kui1gv134b1ktsb7ZzZZA3wjhGFgyGJ8sRzNhiwy17vbcCHH2jHakiSvF7LHAyxpemEUzEyZEjpr1yuXfg",
  "key24": "2m5Z9wiw17U7PCbmQbFHeNa14og476AgQC5MKGLVgPNigNaancD9X8a2Se241s8PCmwDaVadqs4QppeNY6qGHmBs",
  "key25": "3LzffgKXAdpNMRAJgzjEH4H8nSHUccyorDqMGWMvmAF52B4paymqdAYSpuET3U6cJC8Ma2btmU6KUT2Fn7X1ogUG",
  "key26": "5ArTPhSXDGsAUtnhzRKHo2dFBDN4ATTaXgKEmimg6xi5zbs4LFEPKY5g3o34Q1ot5QGZqKNytcEygWrPBpQ6aTtB",
  "key27": "gtxjeM7AkQ5J79tV4bd8hnQVrcjfrLqYHHWdoAR9iAsL3SXnw6tqxHnHYhmoLrvfNcpoBpBSmpYDmzPUi5qDMqG",
  "key28": "4TnS9XATHi1UNx3j6YA3ackEWrwtsn3ufx7pgeBR6akFvX5aXFLzd6VJxovHWKKECcUCA82s3WVMtpXBt5X5wvw9",
  "key29": "5EaGFznNb4eAZLj4tTtVUUMWeHzxmdsJ5SW2B566QprBvkbMYoe51eY8XN11t3aV2NTov3HoJ2A4Uz5gUK5MfoEg",
  "key30": "aScU53uQczcd3qdiohLwAyRQw8ns4WLtmvfKkqiSk4jooTiEBHxjCnJ68LUgSr2GoZnstR4mkpkCvVJHVyJiXi1",
  "key31": "2xXm3on46VkXtbJvmpmUmBmckeJ8eMkUR2vYdBetZNzcXMcD7MhHBk42cDLufHq2rCfeH6sj8cwGKApkmqF4K9jG",
  "key32": "5QXQSo42MrxFeErEzQ5h5myWdjWZ8Pf7R9yTKZKmf5G2Ur4sBFqN1os2KifDL7zU2oKtmckYTZwTEEPSMWbCApwh",
  "key33": "5GAH5x7vpK1DuZddVd7XKtfzmtaBTgwgjHjbLfGy7Yp85qMZXs7mxAkCCkFA6mDsxjQWAP9bcXWcHk3VAWAePn6",
  "key34": "7Yqski9GjYfHPVRxJdLZJVnwMB6TLTbohZR8jo7g5VhRKZZaP7fbBbginwy98e4mmbpWUUP9x2M3uPFUSkMX111",
  "key35": "5fsQB9F67UCeg871zLnzdAbDvrtsBnD69pE1VjtyUK9wj1vsbTqBNPSqKLzMkD32DbAKaX3AHFL8kNSKUYyegm9W",
  "key36": "3tduyYRa7U9H6E1yvgb8MNRU1LETsKUxUTxog1wNdJbLwDFZybJ3WinRtu4Ck1Pnk1ZXMnzoU8CC3TsYJK86sbi8",
  "key37": "2CE4pE8Jr7QgydP4Efww8K8tNVPAcaNgZGDZR1HY5GMFivtDFSTuiuJgn5tZbhdsABnNW1wFnWycfDxKqmnqgQrN",
  "key38": "i3V7Wpj7ik7N2gmMrSVkSawU36hZQw6hAiEz5jidHmEv5Kg2LTuo2ie5qLC95DTtNRpwXYoHpL6DFAR3siVeAad",
  "key39": "5VXc9ftSRbwqGQWJ5S55bpuv296w3pMYkVWdbWmkNSBuDnapiteoqpWGd2nTYQ6AmBhT4Ufqvv1GrNiLzd36z3em",
  "key40": "3uW4HFhRMZuYxY1JzFRQFeZkaQXD2VkTxTGBn1Pu92JuMf1nuV8yFtCJ6Qcji76FmmfojfyiLMB8tujPq1TF7taT",
  "key41": "2xopwGR5aKJ8eko4cPC6cRthffFuabB4NWK9ZFuZiFGSPjtcvygWUEXiWTJpwYyz5EpvC1RVeSHoypV3KBvnETFt",
  "key42": "5b5pg1mLyswxprhuQqeFTLFwsNuzH7sfZmtGbFtEU7kC2hVhhAMNRqVpjtoJk1GQJwXwNFtnoZdoimFhjeJ5rtES",
  "key43": "3QgACGUTZkuPCfVmHbjvgYHJCJsw88yKTr9EHXVLQje764GhLwtQWcPaXxCJauBJckK9xBRYArFihVBwdVicEWds",
  "key44": "5qgvxYBnXSxpXpAmsbg7HMGvETYMPuuhuGCxkMBThro6W1Yq51M89Rjq34SkwRd9qrSvTmbcLZEaquArSjkTbpoY",
  "key45": "xmAo6yBKajMeXStbHEn3qf9S8n8r3yZ7KELCgkZgehcXCfVWtDBrvufFV871t14bJY2JFmuCFp7oXX4siFzjpqd",
  "key46": "4qQvZ7dmRovoy6UoCnuJmWPYykuxQmnrXqknEM9tPCceo5WBxh2PCwJUPFSpgsAm1acGA3jRxJpDJrE3GTSXqsY7",
  "key47": "2mYTeT6BwgM3T2mvBh16CsV521QJx4a8pvEJVucnxMksTTHRPB85z9vX9n9FXrvGHbJMPjKhW9ouKGHoQLLj4rPG",
  "key48": "57L4giypyHizZ84QpfYPUM1QSbZjfXxdpkKeokUtGsYYkJWFykML1ToRifdELKMghhAPEGDfEk9XSEp6pU2HjFRN"
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
