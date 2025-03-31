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
    "3roick9kKnr7GPY3bshiqrcSamp7ZYYMsPqQjoi4WyrEzqqxwZ3VKiG1kRwpp99i87MaxcpR7g2qE6jbkrwVPXLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E6Az41z4TPRPnordajJpEhpivZ32yyzckQdKpRNFkBee9LYdNQGy4WFCd7Pp4tnKE7L1uyRt8AFa26gwttZGCCN",
  "key1": "tD5MQXvx5Wy7CSPHRhVWd6hQJ5NmgJN75DrZu4jHFs2HUzJHbTy8Qrkh9nQ9YdWNkzCacCJ7VK3F66MxBLUMEtg",
  "key2": "8XY1Kpaz7yzo4BXR2MaA8bEQBAFDkV8cBuk9SsFGxV14uaZDX3TtLuMExszPP4KVQNkerRhWmC2PWvBKoLpX5vP",
  "key3": "poxGMRuVJiLoXF9DUpdbMKvXJtQhkAHsZqPcYgZhYMEJP3ycXmzooUfEhpzCjE6ghnCCUS9sudXy3WVdNJVuqxW",
  "key4": "3gZV1f8KKMzesq2JNwTb78ka8gGW7mFeSc2xeCbk4qxtATfLWDMqgWquwZvDFWjY88RN7icb4c6T4D1oEUfbe99u",
  "key5": "4NWrf6ohWnt25Fedfgqn2LHmkY1gYtyhF9s9DTwPfJj6ai7YU3G8HAdjVirUFwJSpqhHRiTkXmYaCn5YfkByKwQo",
  "key6": "45s68VCgfU8opR7KBSbYN9xe1fW8haKmHqNYE1QdCBQCcY4Y171VgPCEqNYfpuHm5FQ734PiLjx8FRzgnt8AVYeE",
  "key7": "3NFPmhZLad55Fs2wZGGqZCmguEV9MiaWnmrBkr4tcLGrW7i7bPuWE6gudmbJYq3xMR1SGgVg7oLoLFjVijKiZsoF",
  "key8": "5RCYciqMyTpKqCdom2SM57fyS8U3PBcDVLsSdz7hTBPVSvoM4wP5XufPhndbU3ZipWvKQ9CPJ7q1zhchuU34CXEP",
  "key9": "FEchDNqFYqmCJDMRrAtANEuPrqfYUruNsGL3Lb1E1s8BzBF6GYwPKEby2rpWzLrTpuwYPjn3MdA9cdGjqYc78bs",
  "key10": "5tUGrCW4qeSTeBqeKu3JEqGkNd8P8JJBqYcdaXBh5Mhryf4nFrQG5oSrTT9vXRD1qyytp1c3rWUhUMi8qBSNPLSF",
  "key11": "3p7zkANDYjxvqZUzD9wqiJFi6mEbDpAGHRf3xhNCTWWgQSPmhbskXefKknVjgPb5GqzZroHsigAusRAxfohWyzTY",
  "key12": "3Tcs8zKHok6TxVTDsSRiwpr78mLsRZdoxqUgNvApgafgpNbpXYpqUCuf2zF2Pjc5UXbwpe1LtxRsTB2xbgKTwyGd",
  "key13": "YZE2f33P2TqcpzZ3s4SXybXuhvABFYxyU7sSmckCKnHWKipAjdrkgWmGrRkP77adsLPE4fYpHFDaF8SdmfskRZY",
  "key14": "61JqxiT8vXPtVBHyo4WRCUkdRe1LycjRrRUKQhY8K3j45y43mfuokehd2aKWevKZSrvA7AgqoQcPk6oDpjtWMtPF",
  "key15": "5Cwodm9fPTsJsxBeNa1SrZmDudEFCVa7gD96UgreXyQaHmRn9tc6QjBJcDrvr6q7MWUu6brPiP6XawLHTNmTuzE8",
  "key16": "4e9TW9hh12AVZZNBPQ4PiUFVF8znd5hgraXi5hbHg5ATt2197kYwAueujf9mNotzZeGoDuWPxMWNW6YFRyWZa8Vg",
  "key17": "3gWH3sAyunm38vXNi5hPzN95Nm1y2hJHYd5sCpZuHBcsKcBAxuxo3TSE3Sh8ozDvypH9M29CCL8cotYAoqxkcwpK",
  "key18": "U65pDQk1GQKK3kZwi7gLXsZWbMX6vz9wsyYbZZ4vqKk1zXnDyYZgTYQD27X9MmfzU4BnasupGFo4nJAxyyvDaKE",
  "key19": "5rxLUX2rGqP9sWs4PniDtk1zHRnLqwWbXoxzB43Zz5J3qdUKtqtCdnUVCsv6FLP9ux6b79up32rjY6ni2ZAgLb35",
  "key20": "65uymEsKy6qdg49rhrZzEQFzXaWwSTJkzT6PzpgHUr5v7Gso5WbiyhtmGtAuVMyav268Pv5yTn39hREJtkMEYVRR",
  "key21": "3fqFgAZwzMBtDCzLNz4ETqRMuF44ZUm3ny6euGGiDCt1MT6xSWwwxfhGV3peSdhYVxXxLSNjeAyYS5RXmEorGnYX",
  "key22": "3dMj74L5bmCJaxzNQpYC5GdUpoViJus7RiMr1sujpdvTQmh4qtPYScRw4ZrHJVkXwC23zvcruQByutjFkrtMkYtG",
  "key23": "5t3GmHv2cmrWacqdAqpRFSxDEutKnWa6bWY2uaYpWT9kAMEXbBS5WwvffagHHqc5gNJ8p39u8aLhrV2JaikbdJAE",
  "key24": "2scitbL17VTaKJMsphYZspcpuSB2NSntgRaM3zsxWi7Ccv2EzVNDfeU5GPswrvMhR3m9JZi7one4Jh7BBhitFpTT",
  "key25": "4fedUth4T8MwmvwmY2PfAXTyvqwrf5FjBiyMfirLVVCgC9UYjaKwn6Wk9WHTtsqaHUhvZV338Bf1hKe1N1LNyc2V",
  "key26": "4Hd5haUTicR4rCegCbiadUYoYq1MSDEFzkzF3B3xKAuDFTxER7gK8YJiWjuZbhZVGeNfS1QgdjttopuNSWqFtDio",
  "key27": "2nnCat38XGVVeJzNGAef5ug6S2JAMzj81KHrWGTDU1gdRE2MAXNc3pjnEr6oUeUS2o8yqEMrrke3imzzn7qGfb7K",
  "key28": "X5nf9f6qajuSn9bmwWVGJUJUEq7oxyrJPkw1BXzNXzQp7grCvQfKbfmFr6Tppe7x4uDzfULn3EBGHXFkXhchn41",
  "key29": "sYaRgyMb5NYHaJTv5Y4DT12Vk4uYpjBj4z1a9fC969u4u7XJrbEdgk5gptpRiFCmMPnvPT7upjHPHhrbzaa8MgW",
  "key30": "5W3dtYR1uvbYXtANJzPTaiMySd2QuD75kWU1yk1XEXKhfVLXAJ7TJK5B9z76q9qQYxF8NvAV693pE8fztsgWmGpR",
  "key31": "4g3uzANAu9on6ZoeTNWZFPvC7DE2NNtS9hoXr8kUN5Qowa9yft9oKNiy7q1tovgUyTqjWLAiQgWUzTsqitJFrr8L",
  "key32": "4g1S95yKHPJ3yAyH4s8axxs8RkxQH8osUB7K5KLQMRa17XQu3oDShYgb9xsQ2J1iRtMMGPvAxepJ31AyKy1rxPVh",
  "key33": "4GRNVJ1n6XNakU4oaeER4btq2MAyRFBCo9VFkwPjn8LGpZTJWNtovxUuTnc8WfRE3Ev8kWh5xG38zM2zCmzmnxMz",
  "key34": "pEzV9AbPZ6x879mmfyJp7mAenhQSn3GsYZ4cHy8JRandXV7C5N5r8b128aYJRTYvR4v8aE6UHJsVB4MQ8FjcBSK",
  "key35": "5b9m8mD5eDzAu34F8LgoHc8W7uFV5tqxheAMWZxJNMxXDcNVA9pXTdK6Xmfctq4tBftzQuu13aw8nBNQ49t9sbRQ",
  "key36": "4B9uLnSnhXrQ1mvAZdcmNUZdbJ1u47XqKnhoCZWDCzVx13BGJtEC2kptodoKRx8airQzAUtWF1HYzy56PVj328eP",
  "key37": "64NTKZQTEKKFp9TDuKgVNsus9Ntq8Z44qihjHgFN71q5FmmTgidmo3aTFPZi8rwKV89WjrMsC31hDNfbPXPL3PM6",
  "key38": "4LpZ6AsQnnrqeeizhDg6Egkjyj2VXMjo788S2aEPCAqWmW5r9AYQPkGzLEk9wxuXahsmDjc1gMiV28o673MQfudx",
  "key39": "2QnRTnp1Nd96e9nWGGGYWg3Jzaa1K12kqXXRh6vdMLDDnifdc6BMLXioudfYSWmQMQKc2N8S5Y5PZMzFQswoBL92",
  "key40": "ffPKE6CxEDtctnnx7ZMkLUWMyUJXZSATinFZekCEi9YqDtbWxVc8hdN93poNCgY9wsi1PYTc6WAUgkxCBWcM4rM",
  "key41": "4o3PLSqJ6Hgugdacs83k3LK7QmMV7U67PaqjkgufJNBYHxbef9Vg8uhRYzLGiDRtDAEJjrat7P2W7CAQiTCajhCU",
  "key42": "xdgePJU6sGz28bZGeH7UpCcnqaejmt1WaYVFynCoynDpRwqeXXv53haUTztzGEMCFHNRT5Pkn35vpgAxZRkjfuy",
  "key43": "2xUB9n2yef12ZBz5pi7TtqmCeLj3BTbfW7WkwwxiHNUuG9wXgzWTA851qwnrMjJTM8qHovbAabN8XjrL9KYpdda5",
  "key44": "4e7Sy18esiS7xMpDmwU5yfe6Bzp3WWRJtqkMrCABSgEZASuH8abTFVKY9UGgvNuGSiM5ECcMjDPjLzNjrWwzgQiw",
  "key45": "6564MNEmGr3V9h3pNDgmuhN1a4fF2UwtMoHUWbux2bhVaDFCJaAa9dAxQQByV5QqWqMzBxENzrM2qFutwt3tnJB4"
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
