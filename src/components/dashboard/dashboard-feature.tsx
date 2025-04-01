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
    "TonU19YjTLpk6EEuAgjgWjmzaUFtebDnNx5GXGTXkCdfoi9U13VreoU1LBYx6WVtXh1p5V8yiEto1jru6HieShV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sQjiRkqoR5Rj4WVcRCEa6LzjzRbvThVKkAWdFabMG56Uza2TKDj2LmLpTkezsXJN7LLqSqbKv7GfwDoTcChkTW",
  "key1": "3U2dMajSngrCDbvHW57B2BGNnZyVFvuNWSYPMrA7VyAag7jo2rPfaixWGuioKdsebykG53E6bPVG86Lej7ubquAw",
  "key2": "2uiLSADpns4wjwg6rXqJAN9fPkmSyNbHCSX4D765D4NhAwkgbvZ1b8bfTJF7Yt45XtCcQK9TVebbpUALSFJGZzYU",
  "key3": "4DAPUt1Nntg2oCDsokm5sN3jjtJUZa9VtHS1f7dNdcRJQMKnmZYGSHuda5Cqa8veoLzjkK7iZaJcHFuchiR8uGAY",
  "key4": "6zyZRTEMST4svAXKPiZErRcryw7par9awPZvJ7iR1PPuCLB5i9xk8RB339tL7Gt4FAQa7f8h78noUauQ1ZJ9oqg",
  "key5": "3oKdtoDsfKXUS7yvqtusKc2gyXsPCosrUYxpTviNhYPjDxhNkiVmQDdhrivuBESzKiRYhYXes5h1obNY6gDK5q3j",
  "key6": "FrSYRPHFn1tLNmfVESnmwPETwh17ZWLM1zNPFrKYjjpbVk98xKMiFCyVgkv9gNVpFgJfv6N3i7FzsQJWMr4uH5U",
  "key7": "HD8cNMEMHTTPrUMPyqiMfHHiJcBucTKNNQSLcq4jH73Q7KKzPV73nWaDiuSXJZgWKYBhYvYRKYe75QrUEWzwYuf",
  "key8": "5cHpkCMcr3qbTy3eWWNGLyzwf9gZE51jLN5ibHm6oxFDzKCHENBggjsMakApdepZVsS98TXJJjGrhF3Yajh6SbTk",
  "key9": "5PothxJYSq7qPUZSvpvDUk1UAcXRehd1aV5X6WbABXLYV61ZnuoDGS5Xpko3N7zK1addtN1RWRECjJ5UfiefZCZ2",
  "key10": "Wf9267CCQRDdk3ckuai9EEFtxeVBnHcPwkAnCubyfGV6swkGP72T69Dw55ZvdvokGgpUeKQ61upKCQDPi1FjDBP",
  "key11": "WHP9JdiokEAfmLhNmj3mxJmBvVWfRUcbZh8MnWMmPjra77rqLbqLugxhvwSLSPaXUgZLvzza8TNCjsz9DsFqVnq",
  "key12": "47hza3tRRsHe5rtrkAnrn6sLNcTYaJQzteyR5itCr2AQ527qtLJsE7dtuZo1qKrF7r7z1vthEHtruyR6UDhDTpzC",
  "key13": "2TRGkCMw7p85kiE3e4bsimFQn6jmJzUbqUmCjbMe1bARhAcRB1U4xC9UPX8iM6LZcj9HuGaAbCyJYCt6WWX3HKov",
  "key14": "3fhnc6sN3DyBm9b8uzs1g35e6t23PhTYM2CmPaCsEwNcM4NUBum3DSR3AUM7YiAchWSiCTdhKZMS4dHg25EPGhh4",
  "key15": "5cmWUZu5iMCD5oEYVmkxk3RFmHkevAQFkvpygNqJ6NHPn3ziEYaFz7o9SdWfCRcNzZYA6ganGCBE6Re9B31gVju7",
  "key16": "2e1ADoiNh8DoayBDN6rNrCJ63vySeVHK5gQDuD8SxbmAMCheL73cb8vqdomK7Yyf9irM9bqWFMQLxsgRWWPQ7ncn",
  "key17": "3ZibjPHnDifJeBcVGW8ijGFoW4HbxnVzZeTDRVRGHrs7vgpvp56h9Z6y6KehCtyxBCEJmnM8JnENZsJ8PLrg1hQe",
  "key18": "JKUQDseoqrrZNzVGRsTiNJCtLSVkpn4BqzizRgTB4rKyr6grZWd6AEW5Emn11V4LQXbJ3guBraMGf37KSEAXmR1",
  "key19": "37gbuB6g7ncKKjRRQi1X2W6atWcv2X8vrrpGX1Do8hzEncpm2g1nCzQQBiGLHCaQSuxNmf5ENnc6TKq9nBmdXbNt",
  "key20": "67FLZtSqRtAAK8du3C6FmamokhkdazKmBZQnjZ84E94r4hp7zG2tZW5uLhbLTyJuANvBJHqP44n1nqYBbPYeXYV6",
  "key21": "3GzFXFeBfB4jRADjRVxPR2TBAMfcUFEHf7jroeV6EuoPxn4AP9gtiiAP18SiwwyQL1M6Bjyh8bEwDX8oibWtxk5G",
  "key22": "41n9Xdvu9BtikBFQUWp4g9p8NhNrq9FTx5oJzfAsoYc7zNsYeExXxAcbaTZf6XYx42MLJ6D1JTLyHEM34b6KvmKM",
  "key23": "572gWU4zbBqpvu8Xz3ogsJVwtowSCSUsb6jdThzrbjDxm6mTB3g4Pv2p32Fbhc1Jqo5WaF1hWyv1w6uWH5j5Awe2",
  "key24": "atRP9NEdPrhS7KYncSosRAJ2xyv9TXm1in1vFxk1ucp1MLrvPrAx2dw13PGZZsyoKWzyztd5uy59q8bduY9wdu8",
  "key25": "uRimbf5YoLsCawrUjWDbrV1ZsqiGuPMxedv1JM22ZnDRdBYf4kzoekDdgvuSopLJ9zoTXrkBnxgqAHehMjoHbVx",
  "key26": "k6KzW159X76aSrBDUUgRxB8Xpps88u1vt1Ax89U36LYKzGJBr6mtiHV6GNCzsZyweqivdUh9VS2e8mmFCaKRrsF",
  "key27": "4WsgCf5muJV8vVaYT5FDuXzMfrLRhtGdrPvR7birAk7skGeqdMWUipyWbYn8UDRa6k5ccjFzevyP9khhttVCPKTe",
  "key28": "27eaUspWPCvmD1bL7xPwmqq1xezMEVi3CNs77KZSvJ59CiSC2tSfY5WrZJ5zgHQFhAZMRVLnywsHxovjCu4jWhp5",
  "key29": "4aKkhNdUhJ3XyFBF9Rx8vBoC77XBRyEkxkTYq8KyFyNScihNoyVRYExpVX3tatyyJg4UhLNfPMNhvjLPty7iuV77",
  "key30": "54ZUjgiF6wEphgnCxCqSMQaxyCi9iwkK6RnY1gnqSykwJ3yVfk87LudBqC4fdveKAeNwKpxsDBRDLP8eQFFBqQFC"
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
