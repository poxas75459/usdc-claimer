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
    "5ykpiz9zE1hZ8efHRaRjBPeCAuxVbPdBvryq8GjYjNVsJSJpFqhTgadf4JkMV9E9hdgBedaJoaoFvKx4GnFRMcRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SDwrrNXzHsrb58zf7hwVdhEu1Xg6JpW563vyAq6E7tecH1mo4fz32DVswSXDZMfajfko2je1Zjz5sAgUdTRZ13m",
  "key1": "23ACXFnDDaMHZNwWUJccuxN8eBsSVhUEDfAnXqKZDvwCH97HHm8oQVo7M7EQnpuzmafhoegg3ibxRMgSZMgEgE8b",
  "key2": "2nM9TRhJxhuu49xZxDVCaVvucXV6cpHqgKuUbJPsYVgPPMqAZ6K8gGT62urQiSeqx3VCunSFd2uoSk2KY86SBiSg",
  "key3": "9MdRfMhb2DAKBdcy6cttd5Wntm7xWKhyhhQMXYuWdQ5DcAQrfKBCpSzFL8TicmzSostTg9r2E9Kv9f3Z9b2eqMu",
  "key4": "3jr58GtTDXMtopk6C82RXfDupgCxBB9xBYKypGtW5iXD76Pir5HdBtFqXn93oJfCmVbWbCPsGHWtZzvfeeYpPdpV",
  "key5": "5xe9mRZGb7ojinAbk3XCdt8ntDVsHQhWN9i8KVTf2g1MLwNiiZZFWmnhFKU7PqGoqc9TNBT6WRUh5GvWwCRJbV4q",
  "key6": "2C2yRAZ7MnjQBftfp7dXynBZPJxkdHxj7aprqe23EzHBu2FpGbmjpr3U1eo8hX9KrQLmnStS8Dw1ftsKAdmN72Nv",
  "key7": "2hEcFV2pd5A9bCSznGgBcpUvgSAm2iJmQ4RE5sx2iJFT54BCQ2sHfKE6pzf5MRFdbL7omcXfQ4E9fUpYuZkF2khj",
  "key8": "4yufE6Nt1Sx9BrSQNodfuPs2wMrepx1wU542Z3EMsEpj7xdzkjch2uxjs4B1AgfY55pXxmN14Y2GrufuTUuECH4y",
  "key9": "4SWTkbmTnALVeA5qJTJwJCz1PgAwqDx18URcHhC9KF2tGskguecy2LXHrduaRAQg9C6gTt5YNHaEaH49Jkt5ETcu",
  "key10": "4KVrr2huNoZCTAKXcTENpei4pfZNjBJXZMeD9jsKbMeHGF8R5PfUViHkZzJHZjgmG1yrJGz12iaMiiZ58AYBaxpj",
  "key11": "1Jm7kkGe2YkU3ZxJfBsBLRtbx69kLRh7jSNJPTNvTyKnkHBNkAoywRuihMF1CvJqcKj9QCRkVBSF88fkLARATBM",
  "key12": "6415Y3hwvznZdEBLJn3V3Pf9LX6NALE8hg5JNvdJbLnZ6vbTKxfL8oUWh9fQG6AzHv4wWYCM355zKYCQTphdJPsk",
  "key13": "56tdsDznceGNYwkBuJx8Qfvk3mGU6Ez6yeD6rSXc8VAofd67HAqDjx86T7zteD3PFu6LvaaYQ2R9FVdnTcvSWNFz",
  "key14": "4mUMmTydCQiPwxhSdKXxZeukKzS1KBVdMjrHFb1FNw5YgiV4tg52uUxSKz1FHxizSQU6wbeC5fFtJnLGFTvrsDWe",
  "key15": "5gYxutz4ryWAvL8xe2ipXSZXVYq9WUX7twiqKQZ5ue236kmLkPA6xNuBq4bmctcdZ1rLyjXBFiWjWynecU9dhyTy",
  "key16": "5J515PZokX8DzLHF8s5dT25GAfrktWaMPr31DDWYTSyYzSwDyuup3LUYvWPQVKCkk92xqpabXUfcXvJF3BxXazZo",
  "key17": "4J4eqWGhGbzYZK6cEL9YXh2quXHq3QEfm9g5vPsosjh8oyVFUL3LFNUQ2fbiXWNDY7hDpLczYLBZWw2Kjbm5G7cJ",
  "key18": "4dGw8M6UeU3NufMCBV6q1Z6LPxarPKBmNjipopDSvpd4KXyoHA8wAEtbmZ9oT9zTMhwBxNBkse9LkuKbK8HwVbcM",
  "key19": "4jni6gZBnniF8k7c2MyG8Ei2SG8WZzJaM9EGZLf6C4qjoCpuYhQSKFKwRAz5refihvfwB4u7pWoRBCWaQqCXeQDd",
  "key20": "2exnVS5ThemnPV4JbEcYzhXJhS1KyezyTyeQP61fzLNspoDdzYVM2eXEt3fJQLW3ZSYnxfZypeS3EiNkNpd1EnPV",
  "key21": "4f9rR2LLBaHkFTf3XoARomR3QsTt4HXdmZrVKHw16K9AfRdKoQrgwevjJ2RBYun36aqMj789NgFvUJtJRpzWPWCf",
  "key22": "3M7uiACBx6NTgoKMBUbGuMVQQBjK7QK1XmyjvzD7mB6jCHkE1bhBfxYkj4ypSVpCVAMiSJGV5EtC3GrxwiEgjqbU",
  "key23": "3T4DXwCZFTZ34qiJFVfGza1SkoPTbwZDJ2tMbsiY7tV5J83ddNTAxhTFHbCojfQatDbMUmRTXheRp49fCy8BHmua",
  "key24": "4TXn2rWowKrbPR6WXWpsK7mRywm25rz3znk66Ni78Vw1m8bi7aGnTe8Aftjw3vdVq8SdgUumftV7dZkHXVL5AwyH",
  "key25": "2wRGP6oRJfjWQ33ESuq9aiaeeJwfasi2bzV2va2EnD7iVnEpHYanDhBarjy8C5ey8EJzce5iVoYHuNdmoDpS2pas",
  "key26": "649gySu1sB86eB8CPxEuYuvMCn47jxTiRk9gyXJuRHdSQ8wWRTSwDTJdbnNkP5YKabfC2DY6Y42Eibcut7bJJKoM",
  "key27": "jztAWBwJY21Het7JDci7yxnsusw5TRMCSi5eZ9fzhk7NQo7Ng242vXuS4oRcHH2ADjPzJvFZCZsXkokA2yTf7cX",
  "key28": "2czoLpzZTLEuBgu4Dt3A34Gko7VJNDBoRUWme8sqx4ofpPoDHoqyp6vELey7wK7j1A8FPLBHrEpTpKNsbMJF7MnN",
  "key29": "4muiqnAJMqhCWv7REeD3f2YjL2ksNagJa7zdULq2ztyAaUku89UYmZ83t6LHRQWGzFHqVXiSUGZwG21bexhLjBbH",
  "key30": "2W7LnRQCBjuuNEcoouSGqZruUktADZ59gnwpE1ZnhcNU2nQSxRdPHMqu5VJMbA61GW83t7CteGaf9bk6f5UE4qnN",
  "key31": "43WfT4PqKeGvkrGcvXef3Q6dy3aae3iyCX971NbFM3URnwPuiYU6W9jK77igSKHvzFQHGAPhzW8cmb2z1m3rN396",
  "key32": "2UHVBbQ4sBU5WsqpYwJdSnyD2es58SfEy7FRQPc5B82eCdKvtAFYukUBJRxPUk73Lt21qiQwFBA3VcC79jrUx7rb",
  "key33": "4ZPKvKKgEu3iKhoTkS4fcTwBnF7XkyXyXKvSKQShtTvTCijC7yAZ3SkeaJXkhMaBiXkpRobCMvGudzQVmg8iM4JH",
  "key34": "59LQU6bQ7AA5CtgRqXfpy1VEEQ5yejt1b8QDYZbTRJmB7eWNcLN1MWgbYhgorFu5G4w4DbahVHXog99TBQkqP627",
  "key35": "2RkwNCHMgJV29imCwzy3p1ct2waU42dHUSrmYH9WS1CTsFHgkThmo4BV8qZJn8117CmdXzb2rpSrb6hbDwxCuDDK",
  "key36": "49u4adF9cestf9FLri4i2kbjufaA6XrW97CXgzzsPCpy7vqDUvkMELiv8HSyfnwri7wbVC6VRP6X8FaMduWS5dcs",
  "key37": "XnRuAEM1GvaSdQu9DF8hpKTUPvntstzMQvSZtkBvvBjk5QrdwjQ9kahrSh1DXPF5zJuHTQPCHUB7YEMXzoqNsz9",
  "key38": "3ifTA7nknb7Y3mK7aEQ3TiYmNjwg3GCzLp1qVCmFe6TJeZvX93S6bti1MA6R2gyxar42dzeyZU19GHSY66Mo3DyY",
  "key39": "zqP5o9TxdZBbXv9gP9NbKG5dAZjcjgzf3XVgyNEu6zKnqigPr52gvShFXrtjuukc9Upv98Snkh1pTL5CzZDMBt5",
  "key40": "42qP6cA1C3iSzjiY7aH5fuuLQtrRnRDGFA1LuNqeH721HJwkPFHJyyEirkiQPC5TzQp5T1JvVSf6RMs7mhBXrVQ9",
  "key41": "5jf9CTJ28DnyfcxuSxGq1VSFVKcbhUgktfijBc78Mu4uoPKsDb96Lsc8hnxp9MG6WbmZZjRCL54X7idamyoUmJ38",
  "key42": "4G5z5M2R9noCJgTWPyNDZW4Tfu3KDzWR5VpUWFTJ8nUJ8VamNjsKaZ1LPgMBhWfXEo4KiPTdGUJDVXrkDjPxhwyY",
  "key43": "5QowGG4EHskGSs7DCXkjqev34SrkbcsS1L3Fzp2XR8uoz9eoTrcvenVaruUDbjxnMm2BWi2jasqdjhfom47BLQPM",
  "key44": "4BbN7guxffVf3QrYmc2sJmGcsJ6KtDd89BhoUTihps3QzTEQPSqxKD31pE8Q6yh5nAysBo2XvAinDx1DW7KCjon2"
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
