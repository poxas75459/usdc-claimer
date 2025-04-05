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
    "3pf775gmpAr4mVYFahdrYUvRpSLunn5Rf4GGagcC5dD57RCidUjka9p1N2573rm14Gim9JV9GUS536eWKxkyzx9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55jQgpweuRZG5jMwY3UhvsGRcKxBKm2RSvHhk4LR1jPcVVd5mdihCbYNNA2i3Zn9cXtiB9TbDYFKP77QJFhMr4h4",
  "key1": "2V6Cv11W8QfNvh4oeDTLLC9b1AiVRXTLDpfWKHQQkMP5TgZBiqLxkb5gFwxETLHcQvmqPBd7mDCK2rD9ZoPQAVXZ",
  "key2": "6sq56vL72bxRNdHxA6Y4qUeNE4uQ4TimAi57uwtrUsUKwpfDpEbkd5FsUmE8r2G6ap3i92wAcyVK9edgNUb5fR2",
  "key3": "378WHCTX33yvph7kyFsdspmFZAxyPoq8QjeASo4cWnjxYQ3smTtobj5iHVouBTfTNc9i7Ut5CsinLMEwZKfdd2XH",
  "key4": "3hSbsAHj2fC8MoueVrHkoovQvrPVYxPJ7RanCkqUcVVVdvdqSiH3kLzW7qmacxT9CZYWM7R28VMjzPoN3uWVhnzN",
  "key5": "5Z1tx6DDDoKedfeeM48gbzUXERt7VzJbX9bkeyYg4JbpUnEvmC6bBpT94MyL1HCX9NtWAgQAESBYbgzu7mx2ycGa",
  "key6": "4mWXsyDCtioisYTMyE5CNSGUHtwf1CPLJGqpjtvbXFUdTKLBSphkGi9fF26NPnvi54MpawLkXqz5CfpjmiMjLaM5",
  "key7": "5KKMVgStm5ncFSYZGvKkyygWzVLphNJ7YaVcCvodNDqPpXq1zYZ5k3bEgqMrnGZL46oXYTZoha9Qr8MMj4cp7DRR",
  "key8": "5nK2aEmxBS2noYA9dFcSMsvj13ZoHQWNp19auB7gr1VnbfrzqLyLNaFvSAcnDf1ZoomauMmTV4sG19fay2q95ndY",
  "key9": "4RXgdG4bjWYqnbU3pGD6jGQSX8g6YHZdY1TAK8FXNnWzGGdxtvJEJ5e3GVcEZvnpaXu1FsQmV2RqzPazuqQSiAbH",
  "key10": "8JjkNUgy6ZaaRErQyZusC7DykPthDKFL9WZbQD5LyxdwX1ju1n971BCZewR4fSacK279QwSBVeiQ5c8CpbMh8Dq",
  "key11": "57uKTFyeDXbG2kiRcNxktZRo6x25dcwYu9Yna3PQDNLtn5PozTYgodmqfZjpKTW97tajdwsMjpUQcAhMEg3Pc1EC",
  "key12": "4HdfD3LnuRrvqJamtnRFBzCcLtEtyZEAsF7dBCKfFj8syXdHGeLk7pFJbCe3p7vTUN2L4tW6LfFydvNpDnsPntha",
  "key13": "B8ninV5KcbqAMVapqHpuHv1XqfjWRLk4e2XC5CRxagZVHBFG9t8RzfP2z1SbpVG3eRD5HEBsECo2DNth1J5pNYP",
  "key14": "n5MSbCr1op79xKbAXByjb5CLd4YU3JPpgYL8ZRZyKeGsXqYfWxhJSeiy9yuteSpFb4ZbrsPtDjrxfCzwf8vuS1P",
  "key15": "3tbGgApN3JiX6BX6y2XggP823Nzz77xBLq97DTQaG6fXLpsCcmPdR1AwXGVXT5Hbm9d5iz6TkFY93u9KPymXHBt",
  "key16": "RPCTw1JJFyyXw347XqJX2XPuFcWPkJutqsR2r9ei43mAmdnCgQJeeyfWaSmQ5Xe3YuHULCYLQAXNZs2dhdMECim",
  "key17": "41kxMW8mxcK7YEcHVMgF4BTNZYBJgLz76RnQterjfVLzzg1KQFNLfTajg2hwqwrzDsPihNe6XjPDibApUZEnMTPy",
  "key18": "4ZxrvvVuQLLtKVN8koJk3665GheWENi6odhvYbwQhCWiDu7rb8JwwtcCdQxQZXK4GgnERo9ezKsN1TqQP3MnkH9f",
  "key19": "4JXaRzTQuwEdpk9FMWLiRVqpmMWSo1gv2vxYmwfxe5iAgjgYkippqkebtUP8kxNnzYFokEF1byTceoHPJ65HA8mZ",
  "key20": "4BcpvPmJh7AKBv1z22hgH4dbx2JyHy7rAjjkUsS3rssZmFGVtxDPJM4duPyyhiXLyCPwsHTuGp6gU4UM6dYUaaZL",
  "key21": "2wdC8HcRHYX2WXc8HCEGaaQX5dwRpXjzCW69D12c4daR9RV7KuSGJefmwyRKc3pR99wzWs63BWx44yoTTCi95Zrf",
  "key22": "43bJqoVQrS2pfjvEzBQPX6vP4sdaVHXTM3Lu3KHzMKq79yrjF9zvwFTBRb5SZ7iPo1gtG8XWiC9eSRua7AA78MPM",
  "key23": "2EbofVGHPoir7cJCV1VPk8DTBUDFY9G7TXspzqCC6C8rsoaER967zkpVVmYuvBBcr3P8jxHwDem2pCb7Ds4kE69B",
  "key24": "2AqmuS3xJx1PJFCF9jgKQNTDyPa9KjDW2VosED8QRDHQKtwckb1iPiwEVQR5ntFhoxc1LNTu8wFrWZTmPUAYJZEq",
  "key25": "2q8rveciiKybVwFPKPNjQsdErKJRQoqxfS2HN5nR3vaaBN3ftQnKkGCKarGJhyQ5zoC5sVoMHSAVr6gUE6Psno9y",
  "key26": "5VcSejdQDTabxbwgJevSqp8dp2QosEJxnuAKHZMeuDfMvHcYoXYNyWVHweUxwaGPw3DCkBHLTkwBNrH5gTBAK23T",
  "key27": "5Y4BPvoexBmeEyi3snX9V9bXob1WBDWrQcSzVzAJU8ZKqzGWysd8KJ6AUw2wzcp6K1Ywpz1VsojgE2pY5aMk9Gxf",
  "key28": "5b4WTujEoyXYyEQUiUuoddgvZkkzhEWqn8VoLAWtYCY76R3dDj6618zM9sVhRwbckZSCjDKKsppniFGsX7QkpoQ1",
  "key29": "53xDRXTGxhMjC5EzRZifsL8APswFr86rgH46iUf7ddvG2eqNcD2px1zdAT2W35DPJcYLdVNiBNkChWm4WYSugGQ9",
  "key30": "5GpUUVCHRvb4zKSvf1RSvicGKTE5LwarWh1e9AKhrZb3SjiHD8DmWxPD4NdEmbSizWcA2wV2LotoekpEX12S5LFF",
  "key31": "5HsehzQUtK3LBbCHybk53LoytcAVsg6ma3GnV5Aw6FH77fbpcPc2duVQqutwTNYBpaqQNCHYWJYnJ9FMvMRRkuRu",
  "key32": "4W73y2cvFZb52dg2oMTzxc3fUmEgwjZkoXSoMqQ1Tx9MaxP9or9s51fhM3HNYXaSEXwLGFw87EXT7yUcYYEm571g",
  "key33": "5xwWptqpJU6mGJo2T2oAY3tFpoGZ6uNK6q58DgAM7nPHe91n7hPzYzHoxgnMS6V7WezJBo9HUwNqtKFiXpTj6e1z",
  "key34": "dmsFXjC5eCkVsrzq8M1R64vb3P5YAm8fsJXFj9QvuqqZdu1F4FeRG1UCo4KqoFCuSphCytjaftfJsFu9tw13tqj",
  "key35": "64ajS7JAVGsFXwmTU7BE5y3zczfcNM4a2VLTWUX8CqpgHdfy8aVn6hbFKQxH8yX2RwBH3q2QicwCGKXMmo7oCPYx",
  "key36": "5h6CnKrSCEcSoNjzxCG2QPiH6m6UsjXNQ7gaFiHomThYxbj1fvhxvBt5gaeW5y3Pemi6jtMWq7ACjPni5NdtmPbe",
  "key37": "4Jjm5TPMGCJ5S91ppL71YXRnYSuRUhvnUvPCPB6h3XquKmfLKFMPTou36H9J5Zs13dTqMTQ6frH9hzW7a2qxnYQi",
  "key38": "2b1RCVHfwMV8fyvMjCQDsiZznhjceEGaP3HnYZTLBe9TJ3hAxRnzCETcfcYxMcwFkMBguPBQEp4e9EvoMsFn9GyB",
  "key39": "2Z56iqU97ns3BY4p7ymKbA9JbsjEURAgDJne2S6Fw9g1ZkrHnNtwySS4Q4hMmQFr9jiHLd2xHrjUDYr1UXUQ8Ltz",
  "key40": "46Vcb9jwKU6W7spem7MD9Hbmk8ytZJHxdFEJ1V1k7Ehk2giaaLiDRiK7nDejtfpZQKEndaaZAvzUWinu11DY6GvG",
  "key41": "3a5UUN6meL6FPdCuvh7mQFEZjbyKpfhYAvftJF9QwG1ZLUSFGonqumoZqWzkPMqV47jnbP1VHc3zy97fZBYAzhQY",
  "key42": "5ATQ1vLoEby8BAwLKuXGXe9F8CKNmb1gAt6j7jr6W5uzEYW5uC5YmHvkDDJVVt5SgKAVqFimFGfM1TFud2dTKUh",
  "key43": "42YaMKSYwCs1Qu6sbjWzHVYgVvMzbUeS44LkeJVWviqW7xMC345P9rfCqrdJSyApYLiLedhycFCkc9ZTXT2igq9U",
  "key44": "4G4CSRJ5P8765saj98zSNFE5eEZT9wQZHffW5dYecP84WUodu8QASMzNAJ4JN7mpsw2WycdhwnMoZnP6V4vR4HwH",
  "key45": "4YH3c2ffD7DYTJp7DV9rgoGQgabdm9u2bFnsnsYrhZog9hxhUGhgiX4K6Wq9Tt8C4WppZDLTjrdFd6ELqfocts3m"
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
