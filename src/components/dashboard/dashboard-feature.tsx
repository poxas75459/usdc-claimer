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
    "4wDujwp9VyhtNKuiPsutB1BGVtDy4TzgoiRmVJZhWQ2ZQe7ufmgW4CxLZYsSc4WQ3fAH9TVYfETRLgSPgid88RDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qyejykfc9yiSM6JVxYTaQjiTPwZ7Bbz4pctVnP74c82UXSHAqq3FVuHAtBPDVw9mJdzBDFx3tj3njJTEfjo6piq",
  "key1": "5HC6XfeH1da69hZyufsog5y2ZZ2QgHFAHsd1KwuwDEkMPiksbmEACSjBQN1LockqCaQpDuuQc9uwCzXzfrxuBW62",
  "key2": "21QrGradVE2BXZVjETok9HzT3tawd12rHf3MsPyi2r9ED1624qhvtBuZ92p6bDZpHHtCS6bSeM1FnjAnum9PSkpE",
  "key3": "21tVt5Pn23KMBz4QWW7J5vTpjz9dtqau7w3erVTzp5L33xze4b1n3PyckRFV5CaCiJAGLBQAnpouZ4XxVL88LUjS",
  "key4": "5Hc1oj4YqSKKXsGiB3veQb4roW6nzEgkfBLRQCoEELPYpFXcixCJnHh2UPhiXq9dnY6EmSQbAeSRZJ9WQc6TfdPL",
  "key5": "5epUYcCj1BcyTzfPACgt4JSBovJh6ijxebkRa6TcUAYmQYEgy3Ygw9T3vR6egL64ERDSKtjWUeigQuprMF7CoSn2",
  "key6": "4L5Nnhj9DZ7zNUg5edPMWeFcGzoYVTkqsnGJimJQYu14MqE5tzkFU67cpY2toXKfawvcPQUMSE9AyLtGSc8P5E3w",
  "key7": "3JSAECbQXJVb5zqCecnA4p5qeWvpQFibxiVLes4FJ8enMLVwBYdYGnAHnKgtuVMeaBqNHrdZexVTqguu6SV4GB2A",
  "key8": "3En2VabYH2puDMpzB7ctJH1CC7XXVajq8LwwQM96FWrRTwCE72rLSU9xLtd3EbfS1adN3DXxHMjPLoGarhk6ktgg",
  "key9": "3RF7cfXSnU1vdZjfdSyoh6biLUk5suiw1sKpuZp7dQEFzzKSUWGV4Lgj8u5q8FQ1EZ3yBxHkwUPhaEt38aRxy1Mw",
  "key10": "372ybG2KXMEGJsHjTTWTGPYWNtaN2UuAL9vCEVNzgHq5J7hnfxBXudq6m3LaD5LYkZiUeju78DMRvrnUcEqZNiAx",
  "key11": "46p2FtTG3gYdbfYA8StXsTcRreV5PRvXebqzgiyJUdNrDN1BP8bd1fGHWzYNL2wEBUumTDoN2cwDTw96YxCjbisE",
  "key12": "3PssQxk5axD29AoVJLPAo5iaDN1dqYoNZ412iCLZViv9xYuk9iMtBRRPDLzr8SyEEVujB5dt9F8D1zfUmKSaHcMC",
  "key13": "59arprdppbE6v1gPiyT2pZBSZXuCgP3KsAXokkfQiXJBu6YNBEi8JP3dg3521XSRndF5xfWsEvw6YA4vSHj5wLQX",
  "key14": "2woprAHxMtXWMMAj6L6WB9z7k3AwQ58jLEd4d3AKKPJLyrwuVAwKQiJ7P1bdLwJ1n4dsLCetubYS16uyw7LKvVnS",
  "key15": "53Jzd1wp655K3pkp5S9WzEiZ1XMYH8chGzEsk1GL6QDPcRW7iboM4JujyRei78fK6r5hhrtkxped8Dzd6nRHrPRw",
  "key16": "Vx87w5WZWDSYZkfeWxsRGVQFGPCJigX38CKngp8u9XkVwedQx2j9fPoyD6gSvTqjScn83yZHCQY2c4cDWZrS33s",
  "key17": "5uyrAt5XuMUPRMzF25VwzhJfiCzjW58R5z191G1pUUcbxQiWB6pD6MZt4siBE25GUeRJExdnkPacSe8LpRiuvJNP",
  "key18": "3nrQyW8DmFjSKT1X9kv5ZiKJzGSfP8HKy5QEV9UEPKGmh39bRiK6shWyoedmeTyJMxPWbvfuh9SFKhcs9NFaYno7",
  "key19": "3tzYQBcYmYcJXKAhoDdFWtkeHVNkiC9xY9kGZiVgSQzAxtdhxcpS1GovjJzDuxP3cAAKWFTmZKQ3r3kR1sim5mQN",
  "key20": "3ivaUeLRrxRvVAwqqBjtgijm2xcSXvF2dE71427xLwf97jV2hE6TMPd7aHYEG4GB82MkEDTEdgkTpvTqwq79LU8F",
  "key21": "3PKz59w5LmrEGQN5vFnLeNVbpqV1JkVjHzQUAt1my2z88LvVcz1ry3mxyuXKVqbfaPy98Qw4MJbLeF82cc4PvnaL",
  "key22": "3RdorcxmWeLpi9dXP5fvG4kfLUoSjmnsr8gZdBgquFovzY5vXqggPVZs2xnTi3PRkiV5xc12pU2Tk5wVHC87TPAB",
  "key23": "4PKFjrB5uxGP6KEPg6fcvi1QuwyxteuNCM36GcDWRcyPeMPtAjJXH2tmXpz6C3qNgSxBQFp52Y6WrQV8NakeU22",
  "key24": "3zZLzPdTqCzL9MqgUpDrMYCkdp8FfDQdP3KqkTVJbYmTYhMzcD5RkX2JEvb41CFzEsJYgMDa3Sv9SGoeM79XeAuK",
  "key25": "2ybF7F1VFyRMAhPWEd4Nj1CZq96vPR4p36tVZedQMiB4FD6dXqtjkMtVLVPYBCKaMSPM5wPY5AuYEarSeHSU1EKU",
  "key26": "2PjVViN9r7SDdBAQEHme9FgTagQnagkxsiPHz5nRQaABbR3E9R9PYmGrWUnggWPnUumKNcqCxJYRUXJ8Ja1tPUnB",
  "key27": "2dGseWmURAC41dHzim2euBvUJpRdjLVaEkywcx8s44usr7AEKyjhjXbxzT6k9TNjdghGmjcYLNPUhS7kqUABjZ4x",
  "key28": "5Qyr2cAZYRhoNV9TgEMsxk35qhArHQQcqq6PqsYkzVpAeF2a1zuxjdM38VDUBg2yPG5WJS1HJP7dR4HpH3NNTLSp",
  "key29": "3B7FowxakWpLgkUb79VmoCWugcQSQtZMB4xo23hnvnbynwM15FKDG3G42KYNXJtbcbChmrtGhZ7nXrfqiNjmPqK1",
  "key30": "5559yPm6qYnoZnYBSeNAKrWg4fS2yzaApKWqh2nAen4KntmxwPcvmbgPu9Nh4oKE2Psz1Q5TwE4uS3ywTcRkuzRM",
  "key31": "3wXVnYqL21mbKacb4fAfG6kfS7VpTMZ6WexLrBwjbzbXaRJKN65rPUn62RBik42oHh23xjRtXq6YeShEhSKSyYSr",
  "key32": "3cmVkwfdDv6tqF7qtUMc3qUYCwbZQShEQ4nVxgNvyqwGctDtkqXWNCMzdFqUyTDj5P4YYHaA4ce1JKP8rC715dWj",
  "key33": "5CndbyC4ZTAMHaTR174bNvbZ3wSFxqw2aRCTCZEhykxJJ8QNqZbN2vfvzA6aWTxbSjL5V2bU2MSZcFrydSpayeH5",
  "key34": "3uaTUCeXrZLW7T5QEpRLAxZXqL1WwKqiY1guMXwFDAhBaxx3qgtSxp3sbG8FKFo8QypBoXDmsy12H564vrhZcMiX",
  "key35": "54yuQc7SZSeNZwo8iajFChMoJ8WF5gWvKGmEK56exMx7catdSfXBQJ8ZBjW6QBda8cXKBzvQgCa368jkvdhYgjAc",
  "key36": "38n5NVgu5nLTXQpaAfSbuoGHaoLtyWuJqCMPrnEEiHaCrqZUcDS3DWSc9G7btwM1BJNVvGZsb8pFdm6SwwjqDo5y",
  "key37": "AnMVmwcmLV2NWNJ4YzACC4T6SPL4BZrZFZF7nMYAqo6YqFu63tZm2urFHmKrGFKcW7jpKBzhyqB65dMw744fqnM",
  "key38": "5T3gp6oTF4QxXHkTFf9PEb7WwjP2JyfEw78AvUoLbUmPmAoAFvYKo22i5SAmCadZH8ra7Nf59S3MeaT9koXoyfTS",
  "key39": "mLZgfBByLqs4qEir5TfF1eZ4UK2myYfWSr65GwS2fqpkmDxNrUx3R4SwFhFFixfTiPJzTRCgWNLBiL98jWH1s9L",
  "key40": "5Z8KEaDnCWFkKRB5kh1Pvb9vicAJ2dmdU1VXKyFZG981VNzc6JaY7G2JgPPnzJEsgdbcj6qeCKNrGwRkcjxURQnh",
  "key41": "4Wx9KBCc4TdhcTQcQTzg7kCogt6vh5RfgZHohjXiAthLXmec38PP6ziv8aZGbFh5CiXUBLJGp3kKeAW2Zn97LFoS",
  "key42": "foa4vZYdmDK3hDgquz9keD2f4JsRUXJWdxayqQiLdUqVoytz4UwFJS2o72cJUdkka8DC5Bq96yoNw9MPX4yjWt5",
  "key43": "2bvMMrcUQMVXgjoH6wgmCBZvYvRjodHhHPtWWWA7yTP2x4dr9pEQ11Xyf6cMaq2qyA6LkomNKBQPPspnQn5FegK6",
  "key44": "475vJ6NiBgeTGvHxCQDPr7TdAjeZBAFqmxnGVRGEKamXWerRe2gLD57ZWdL3WRTZ24CJrbFNNw37mBYJEFc8QXxF",
  "key45": "58udCfGRedmLT42pz7fDcz7vrZc872V1Hv6SzHY7n5jdKMEYXwJvPNgLZW6jujufqSFWC9sCWdTtrMxD2fvcu13W",
  "key46": "295WjqNAhbmhBkKwmecXPHvwokuD3YQ79YXUzE6tp9qKF1VEMPXxupXuW6KHBxEETeFpGrSyVopYE2NCe9R9iLPr"
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
