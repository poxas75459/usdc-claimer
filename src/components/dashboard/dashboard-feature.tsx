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
    "5GuZjM8agUZvPArTLNy2ZPW8dK8v2hFV6pH5b417McK3nJScXYshBAKisUSYEDAwbLSjb84B2JQvqc1BKWYMzW8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aQUzXRC7fcSL8iNtR36DiJYPuC9VGZLzJ5cz8kr1E15EpXA9rJyAWZFeFK7WcUFf24GHjDHDh9vdSLxDNBeQe9M",
  "key1": "4A2bRZBr7xUVb8gQaZzkujANBsq6XPgWnKX3D1hjPeMXxJfBVu4LvaZH7CRCtHSqCSBh3bSB2XNgzzgiBFFpKdQG",
  "key2": "51JC5xLLx2f4StzHViT27g5UE8yzHzvrR22hmbLMs7YS1U4k8uSAKHcdU7nayiyHyYKRj5W868Wrc7CzDRMAfAzm",
  "key3": "4wX7dn7Wo6VmmJQ8N6RkECGLe1taoqhdnwMd5dWan7XGjpxS5XuB98PNXAazmM8UXmyJrQqyGEkCRjiuNGAcrewA",
  "key4": "W8GuqfsfQFpsi8cgmnNTTYExWPHyUsXWGbPTsF9Z5sXixNd9Kik4fGpUt43rNUNWrkMPgdsyPLMFuadSTMGiDA5",
  "key5": "2yThpyUreJqCpk5CpLVz4y4d9S4BBzNAdYxhKYrBdT4Utoj2wgXHgUfTveCFuRJ9pHgUngw6fQsb7jDj9wEHc79h",
  "key6": "fcGjoj6X2aBMDtfMZmMMbdcHDFsRir7wxu5o615aZQH7A1nbbeqXPX2W9NQwDoi32zXWuW7jY2pEUrJJaWspP5U",
  "key7": "4CoL1wdCxVJ7BXp4TTBwGHJQmRYjbeixaQSFWp4pVVMzaU8v5y9NMdFAJ3WuZYv9Zeof15FFqPuV2kFkiJw9Rw6Q",
  "key8": "4MTMpnLxu5mQAma6sNVhzqz8JEQz6ibnya4L8fmaE1Wn1CuX7TojP65jKXhoVK2KFVvx82n9Wjy1uujRLQA7MeiD",
  "key9": "4LnuNpCM1VMzT3bNB1j2DeNUXMUWuQehSXgxVuaQBWP7mf4U88JH1YtKMqD5Ryp3SMAEha4Df5WGUcQLcDBYtPor",
  "key10": "3C2gx34hMJp5fBppoYgGuXByx7yUDtWKz4LPyaEHN3WU3Js6bGRWcKWJ9CVxzA2uKdw2n8q8gWKGtg5sDNTJg8o1",
  "key11": "4J9REBJHfymL2jUGfB26etJMhamc2M8RDMXnGUwDDbnMDhwzH6UMpbu9UYPXcQc6BdSTfhJJDCNCgfCcLnZTNHCt",
  "key12": "cqPs4iteTCCb2uMexfsMdNjmB1LrNb35mbAy7jVmz1wffQLvSzujLbABawQK6jdnvf1Mc4HUfqBQxE5fGKYooN1",
  "key13": "3CA8CZGR2dg6ZcDCKLArhGq8MwvKUFEbh6ApEPfDaMzdQVN5K9ZAQs2PHj1i44Q1EWZ9uZfKgfstRthuE8FcbEy9",
  "key14": "44RuDgZ5tcAeLMBUpkHgUWNadi6QXgC3M3VHgcHzxFcxvR7qcfyWWU8R2Xk8xdauDMHrBUDj7T1ptxuEHY5ydHCr",
  "key15": "2LtT5fkNPY2LkFN5rptiJv678uFn9zqhP9E2cCBcXbDsNTSDv9hxYCTZ1e9vKZKY4kEqTUtGYUV7vPy7L8dFWHJV",
  "key16": "5c5XZwcsfTJPyUTTaUXK5KB3sjuXDDEg3p9cHEZVRx8moun97Ht1pkK8KzwbNKY4XfwNGf5x7KxPyPfYRLfWVxk2",
  "key17": "3uxz6C1ez4gizZMJyKxkWMXRDZi7e67AGfmic8ixidLKhhBepccLm2zD2bHC8SiZ2Zf84psKGovLZk19iBuuoBvd",
  "key18": "X1AhUxyN17mJA96qTn5SJdfr1FcvLMQ6z2Zdw9n8t3npMkuBMcEMDYmdfTQX9yjcPAVS7xaWPaSjkywY6jyvu6t",
  "key19": "5FP38ruCCvmxx8B7s5eXqgicxEsNcWcvD4bm6bsvvJapdkWRCk1DSR6DB4HaThaCZ7C1tPw42WcNFZz4gjcr9a6T",
  "key20": "2xLH3aYYEHudCaSGmD3peBcdV6t8xjnxiTfVX6dEEAkGAq3uuicb6eD9y2Bw7KoJsoz1UtcfbdbAkwvZtkfX1KoP",
  "key21": "P9JjBrqLkSbHHmTcsNFPkffhneq6aWcC1ghhFDFLGZ5mt8PAbfQysWBXHYNkdWXJhHZUBREagx49jr3Qd5sW3Rm",
  "key22": "4t3zq749WdQKAjvZVXcyUadxNV9MsKuXpcTgre9M8fU7BEwyeYvqr6eX43Xp8cuyLNQeCFMcvrowEp27ZknvnX3d",
  "key23": "k5HTSwjfXFvnr1TftSxbNrXADjJRmf379entv7hkM81cFzZQJXM6MXjEHkXUkM7EXGV71UUm3SAKp6qdFAFFU7R",
  "key24": "2H323HX4cMFLnZhzwaMZgpgZ3RXvx6hkpdWkte3US236x2k87cMmANThxeWQ8LDYJDFDWLseGMcz75LdFyV7syrj",
  "key25": "89GE1PYQStudKBcwCANY4u1cPwS4dLakfMxmnWXgLuustLmbT7qyAV8KGGsCF8gg2cmCQecBmWuA7zEpfdsiKyn",
  "key26": "3J1fr1ZDFhi9dNPtqduQoLbptdjRjifr9bDFkG6SYWvsocrb9ST5WWU4tZYvUFB3e6Zp7p8GhLLgkJ2zqe8sfDWx",
  "key27": "2GHiSCuSgPjUdfdPRE12nM3GDskUXV36r3GJjaEZSy3aHx1QVYhMpWdDd5V9Mprru76EJd133rCy1ikk8a4Mvp58",
  "key28": "5hqrGEqsdLxz1mHHcGk93RVBqENHLwQsuyVCzxciFwjibybGqi9ZXvjayaJ7ZnAgCBmeWvM2qLRc1jKLWQnPdFW6",
  "key29": "2s3RAqBSerZKK1nbjNPxdYgwKtKARzY4mLh97xmPYuEGeJfK9tgSkQkxWMv21WvnSy8DUBcD5KsCe8kGNULHKCmH",
  "key30": "KLvRteL86fxkAop1fJMM16M5kWcn7xeYu2bzeAxYrdWNHMV26ZMKo71PNHEvKQ2dTwq68UDie8pR1FYRyNBeonD",
  "key31": "TZiA56t1nzpFqVbidFVHv5x63HfWwT2RdSgQ25p4Gr9EX88PXgBnqAtswRocT3suumLNrJpJ75mtxBHx9KPc4PX",
  "key32": "4EZBm3UDrno9BjFw5PGNXvpG3NFUrboHdjUvZXiGWtnBfXcFPmhQANPaTSZoMwuh8xTdgBYjdE61Gjq6PMa6QuZG",
  "key33": "26j8aSCjR9vSQXbiMkvGc9LJv1NY8sZpJUKfstZc3cMoyCxmhWE2xLeAmfc1UpHRCMAYsDU5vEJW1LuwXUYm3Fwt",
  "key34": "4mpDh9R8sPdvPbcGdfk12RqHz3D4MfnZcPykJ986khsPqt1Qtar4uPVW8gVMwm6t8HGWFKyBJmxAT2nuf38HnzMq",
  "key35": "4w6nZA1WALB9gmLYA5JDgdpMLBkdBj5ceFCuWkqCQ32UUFuJR3xN51echYWBfKvCN345apaWMx84PxCAyhgb22Wr",
  "key36": "55WNC1gwCFFP8Aif8UTK6um6fgeSBheUKpexx9rggjCKoKBf5Hb2oWpK4dLiNn6yPM7fmXDr1uFVZEWyH7xBLvu8",
  "key37": "RVDtg8m8bpAmHra32XSqGms73V2a2zUJGSSDLaCkre6ixR1YreekKBNywhckbN1nz1TaLMH2zjWdzgcHc37yAgW"
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
