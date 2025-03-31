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
    "PjaFVr1rjjnebmwiEwcZXSyfFPAzn2A924PgduWQkDbjsofezLt52C8Xm7W4BMFCoHitAgXXhXTT8bRGCyb6sDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ApRohV83bApiurdJaaP5dznkdPhbPAghTMVTzrEvaFrRsVn3zoQ7jkhCao7b2bjpRqbrczUZipRnqLK4iuJaGF5",
  "key1": "j4ChWeBaUAU437wjiz5TvmT2NhXyUbVUBZejBBYR3aqXSB9PQomMD4jTr9pUmqihiB3UeqnuyfTVusvc95h573q",
  "key2": "2WMfAhZ8UNV6SLB1XDR5X5UvwiKAzSH1yTgJt5Tkq2PdasBb5UuSR4HwjwHfvEcgqqmPNiiwY8pV2Bt69yNbYWnd",
  "key3": "4V4WmNedUxYVRknnS27ageX7GbgjwSRsyiM8uy1SVDhMWQWvkvw5cRXm1FV4kUB7cCbLuta7JbWQ7LrMuYFHwiqt",
  "key4": "3XYBJk7oU1xp2ZyxfBro7uURzd4BUZqZMdk6Mz48zuka1w2Uw25o1prSkGVKor8n6uNs1kwFTskGa42VARwFZ9tH",
  "key5": "4pNSmpo1kjTqyNWWAx4h2RJzGxy3b1PiCcJBZG2mMfF5j4M73x9oQoHmd622zuKtiUtYmSK7ZvXMYr2Bv58L39Q3",
  "key6": "3mQkxP7LvSJ2b1Rfk7wZ9S3fFLTprTNmLbWVKXqBDCNYD5W2oa9DMybr8AiGmJ7bYCfdk6tBrhJsV8L65jrXj8GR",
  "key7": "yAxAwKmtVkNaCu9bZqK8pmGZMFJTV9K17qF8F6Mps1pViViedGXo75oejZYcjJ3zMyZLxgxxYukgdEpR7WzfTRL",
  "key8": "2ce5kRNQhK8VvuYx73pFyrvjSF3qWncXoYv2ZBmApjkz2W3KmzoVtz6w74pMmzST2CEYjwbzu4RkEroWc2AeRW89",
  "key9": "4eQMfZWBuzbzgnz3ZV4iKEX5Auy1WFq9BK4KLu7w8CzxjQN6RzvvDTyHLgPU8EiLhA92LreWkjJ1xHGRKogKCtNC",
  "key10": "4VWPo8bdVmCrzGWywVUHdKxVDkK9DULKPKTgmkKW9jbwUobwMmxKx1nS2ueoBJ59K6ZR8CthzFiSUVTA85iNFK9V",
  "key11": "5L2nn4DyhQx6pGuQQ8nbZKebUysZUpCKYnkCCEbXtRJ6VXgaFqerFHLbQKcjC6KiJJ4mBsQrwycLCS3Aj9D9TSyY",
  "key12": "64QdwHCisJUfRZSW4vqRbLeDAP64EKFiBeo9LTnjpJ5wzg7hSYhiPD5WxA6pvLKKMHg19jLyCSrjc5YVKzNHzssV",
  "key13": "sFMZUhqhVdjok8DX6qgKMj77dBsTHfT6h8sD68oA1uof9UVqv6ivASs28U6ctta6tLEfAvPcvudur1jYaYs9zBB",
  "key14": "2t9AgdwoVr79kTgw5Pi1FXJ5iNQLooQMxKoJjox1S9Hm9g6dKmL6yFtUm9eZfCwZ85aSa2Y9XAfGGwi3ZjzmfsPN",
  "key15": "m2PbSyJxiUbGQzfJfiCgkVmxNacwqao47iRPCVneKpdj2xAzP7FbdZ91eH6gKZ4s8jFLTYKbBMgrq5zTm9Jhkz2",
  "key16": "EH8u3VHKMGZQz7LcVgqSsHhr47UW9Ex3jvKGPZr49oFTsxpwUZonBgt44wemiqHio7rkiGnqmmXtecByregm3y3",
  "key17": "2TzPYxtN61QTeUoiFFXuN8Nw9ZYf8hrtdEVDsD1v8AWcpHN1SFvp6YWX9fY9qVwhS72XerFrRhRii55VP1iz46Ym",
  "key18": "22upzMJE9fs1Qff9RADbhKeQMWZGaSXTx46Xh4PZoTm8wGSD3FchB7upv7hHcDVTYRxeSCvDDyYujhGADRxzQfAQ",
  "key19": "5ye2fSTCckA4Zq8fTHKNenkP5HM5MBLxSkNoe4aNr7oL1Tgj5D39vWesYefrUEjBnt4Zkyr8N33qF38oBamfBDLF",
  "key20": "33srnKge3FzfYE7xbVZZbyPyrMTD6iBhF1LnpHmKBhaKBT6Vmz3NtYHVerNyNc7vmbdpLx98wsi8W62zgtrJaSyR",
  "key21": "MzXLgZecB8f4x4378ivmacmzWM3RehUSXYUZihiPZHWM5orSaJzNFcNnmCNVK7ka3y2J1C33GfUr7tFHTfzoDJ5",
  "key22": "4GcKnp9h16eQZgLJK7n6fKNd8madMnGkLm4c5hPVpoJfzi6vowZSvaGnms1bqKJHdh43R1CfZ6spdAqwLk4YunRj",
  "key23": "4Be77rZLBtix19S2eU6cWkmFg9c6jMnVAoEqoU3uKPcavHwxww6aVjh5deTm6jjmgxwPPaqNNsC4himqc7NLL6ri",
  "key24": "Mo1EMR3bfXjgCwG3kZmJGjqCi6naYkXhPvHQXKyJLwPRunApLwD2oxTzVYwRQUe88y7MYDaZ3c1V15H1cAUCKa8",
  "key25": "NAQgGesqf2RdFC89EFY5uNZEwKAV7R6H7UvG2t7LNNvHeEqVv6LhyJhXKAnmADegcBXR8wbQoctChdKecU4mruB",
  "key26": "qS9iVAPaPtumHnzBmmXmKcDGsrZJSnS8d7sA4hB818Xh6bAEn2wgdtKp181DQJdQ7VPNn4SGU883c4ifaQ7oTiC",
  "key27": "65SbQuVeFc3vtpQTiJMrBjQTrRvKgWpg4zeJwcnst2vjKNNKMqhiPnhbZLVt4fV1R64sDPo5uPP4r5bLJkan5QvH",
  "key28": "4PHnPYiHG8zWB2KYz8VFDVXt944q43CWidbyAekVi9UZoMgZdAc4VnZESQ13XDWEtb33Jb7n7DSkWqmyzp938jjS",
  "key29": "5RmYYJRpqw5PT6jESWb8Xj25LjfQmWdgXTBSTkeDPq5UrGC2vSPBv1iFYEELESpF8cWKBVdERmpL8E8amCSCrKfn",
  "key30": "3W5V5DxXJq4uvMXGPXcucUMdzSX1BTgU2L9U6oNyZ3ckvjLatfB6Qexs8b5PU2J4DqV95sxif3tUv5xHHbbaVZGB",
  "key31": "5wmjKK78Hwd1ov4ysrCidAHJ2gkea7SiVBp1qoRvoWmLC6zaf5mGNgoQex5xfzYfJa3NtASPC34FE1K7bQfT92km",
  "key32": "4XtQeRuvoU5GGpyCWanjhxZDUyxM8ntuJi3YXam1guuBqJorcHZBXPLNb7z93gL2a8mEpAPfwQ7gCsofDP27shLW",
  "key33": "7uqqS3EQmNbMgLQWqHwBqjh7S5t7pkxz3tSWxLrjj3EkYedqf7ZFLaemSyhsvKLqGNQTZg4atTAdqb68nJkzmut",
  "key34": "th3nGsm4TNGJK9Df4Se9Fwz7j7if6KW9BBjCa637mfdUuTkn94Jv2HoxEmG53zVMqC3WnKZ6Hk9yV5LJ88eE8Gr",
  "key35": "2Yuc3r4wQFSrcdFj8SMMMeqp5RXf1BfN3hbyWtvNoZjUjC8hy7QUJeH5QrAm7LW6R6G5ZfrCmVdYr38HZ6rEWrA9",
  "key36": "2bYPd9Rupe5AXV3ZpDSs7zRxjmQyL3nyTjPLhrKGn5EQfs4oRHT2cLsjMqSQbonT2ErTD4t4aSt3iEHbNFDP3yRp",
  "key37": "41crSMcQ5Mt8iEvPe9TjJfRcgWadP9tkj41bSho33cSpqDqWTShCp6X8FHJu8WHjiygvarmEGyC2aqhQxZ45oRcs",
  "key38": "4mjWk7SYwwZZrWa89ih847d3LP9WcjwdDmEjr8zNPQiqTruov3xSNwqAqcFdXfurmkqNgAX1cStuidmmGJTwkpYU",
  "key39": "8kTjPCUb1NwednMpNoFPiEyGw4DYDRd5X1BAoroJ4dom4UG2ueTQ3Yhjkx8ELjoqwdLKBTUhUUG1Je9tYukqKWf",
  "key40": "53szKjqFiANoCPLChx3SAZM1NMiHnetUru6iEeGLM6UXm8nC6VZccAK6dBpcFBEWjcRNgKdDYb5eGCvf4x5X8AWo",
  "key41": "3FUQLLJpX8mKEVXJwFfmz5QEpavRFsJWbdFGygvTWojKY2WwGQF3f3P6dGkmqKc45obTU8ACHuNizCZPx8SNWJx6",
  "key42": "Qbi54UtefTxNCDc6Si4pmtbyJYjESC3Egp2fQGhFRc2oHYYTw7R5WNkwSCXjkHwZSiY7yJsDScY1M84z8L6eZfq",
  "key43": "2HC3CHdYAQF282pYDn2opjEGSbvBguyx4xcFbGdUsN16WE7uGgCCegJz5RtZnupgCfcHrjE6aynk8RVujL4C8EQb",
  "key44": "5XDekTXYidnczFJiWQjsaXg2ygLQPdcqhJa35vcQDUj67awkDhEUussPWjCAcfBWHWix9XZodndv2ohNKQHZMrpn",
  "key45": "5ZtrJMdXSiwKkAmXMKcUJQcLi9coBcbWiK3TEs4zFFzLvYLFqaobQSoVrk9YdU8fXQHrBHd8PSx2iibM9Q4qccFn",
  "key46": "2deumr6A8d6ARhU4wFppmH9rZsnRuwHDifh1gqQ78M6bAxSpczyshcfqjHMxTEgv3LaqNziGzk7gzfKRYzfwPiYB",
  "key47": "2ToPbpaHzb7eE3viATMG5MHidSujJPXRknKcA5EyEXtQx3h8KH5nZjfgsbxW33x97nKQ27DbtkrYZ1YfE8b3bQhh",
  "key48": "5Sfrsez5jJdom4wX71aL1nGdeby1en1zCVBm6E3MnQ2aNt1nNagVYAxhUxwuK4NBjpNvvyJJaxhURMi4P2ebwosd",
  "key49": "3CesxP7XM3bzaKVzy8teW7UkwcyFDGWifvpausQ8TJDaZpM4sdgDfHQXoK9rMjqKUCTH27MqKdeP9g9rQjsNXruM"
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
