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
    "3v3kohf4zWjbqcNxSAKJ8dh5NDDX4ePUJ3SV22xLvQeVzoh44XoJznQDxVJTbJSEJVfSjqDdHQhhLK3BrFthiKTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XYAAC3E5Qowhb4uzziEzGh4V6YigcbkAmJA7nBpwUD7WX3FZKL4HyhdHbumB3LkabyBztvp9BFffSchPiwvzMbe",
  "key1": "3S37kZCX9byMfqKiXYisWWZF3CrFfSDpej3ASJvCDeRSYNT247brA9zTviroHSzNE19a5dAtmq1pBxjgrBJxKuDA",
  "key2": "5AdPckyS8vVLNPNw7AF7nLiYGXxrLKZF8xMXtLtJC9TV6zqPNXKC7eAAbQVAk4vbkCZMWmwoQ1J4drkTf58YVP3K",
  "key3": "4kBSLq6gCwfjBH2q2ksS4EiYY4juked86jNcV8XHdtSG8n1L8eKAwfHgnRBW3pUshy5XLScVpgJ5e8MUW159qrQg",
  "key4": "3ZPrJbL361GS3o9vHQvpRmXPAiryqK2FwznwLAtbnE5SfyrKFYfXspahaeZ68H4MrNt9dtN1yPsRHj6tPVM46g7i",
  "key5": "3cDuDBfzpNAWLcnXihFAiDsMXDirGQLQ2ApmhCFaTyxTrbbrwTXx8zdhfHV9xuC2dUPeqY2HhPdEQqkUqyoUEreo",
  "key6": "r1NbrXAWJGQVWfHrks8tYsXsLSxfGJHSS5BxAUqcHSdBfD1rCarnEEx9fjDhiK4yhiwRGMV6rKqXP7WiUyT72Nt",
  "key7": "9d8L34YY2L7Tye328qATTp2YzCPDZ5tZoSdhqRcw5HwWrPT6Robjm7PCCN4JwkmMVQTnfsfA4bKXqXvxBewCBGz",
  "key8": "5AqWFry4WDqmG3sbsy4kYJJ7574vMBfKkBrfrNvqeQXmnwomC2j7jPMcBBoyB9NEzeDbgMiS3ZYyRuVBKqHZuLTd",
  "key9": "3JgLB5K96E85xdMJfdTSuQQxnShq1EUNPr7gega7NMK99NBWtcZPNGio2E5GsPdCCFVm7yTyhazvwaWnUhzaUTEH",
  "key10": "2p9cKZLrVmrg1afvph7daUH2TDYfQsrEUkM7DUrNMDuHn1VUHAk1D56pcJJXvDs5VTG27SmB6i9j3X9mAV4z7ogm",
  "key11": "5x9KdoSohjpnT6FMpHeRmTzSSzvnffQZJNps8feHqFcppcLbTpvtxNKUwb4giCGz14cUmNL69umMYatAfRAz9cAC",
  "key12": "2ib9L2b9AXXYCsU8zcNPDHocL42KA7MtWNZEcj2XVAVCZ2MiyA5J3uEcWrGKkgHSLy7waHwinPEjLErJGVi6sHYN",
  "key13": "LcZLr3Y5Z14dYHWsrfXZ2gCGzEHnZz7SAZHe2LQ4ZnskjjChHNTSP9ucnam9vCvPJLnV76FdLx1ZCvU2gMyHGfN",
  "key14": "2kuaASe7L6gTYmDc2ofTVfeFw138mgWBbBKNq1TpLrBfQfjnT87o2dL7AhUgQ1CfEGkBtJdxC2QiPTfvru2enoso",
  "key15": "2kDHsaeKbW6Tbmtyjraho4SeJ2zwZTEBaQUeYgy6Uk2MQYLyhztoLafvGNDmpDHeEWYpxD5rqRPo4FAkjtrug24r",
  "key16": "4qjWkyyagYzAEfbjECpvVEKw5R2hi7viJMx6bcSjsqM7x45AztyBEgdfHNEyXihzMjrow3qM4VKTt3oLz35C7DDm",
  "key17": "5fQdy3MTNgHTHugcHFELS4RYJEQwZJ77AfcW8p86GfiRa1usy3RPc4ea7HYEkAT9Ttk8fYyxqi6YwxcYEGYnhnWZ",
  "key18": "3DNCgp131R15N1QyRcyMXSeKMVVgTuFbm37VLsM5k4awcoz424V8wjphq6J8xaS5KH32v4wURbqJCWmKV13JhSHW",
  "key19": "Rf1kTBoMNWSPWVBPx2TNvyqE1LNHPdfRukfWnnV4H9njwpohFEsWQtFoNwsZuEzi1N4TZ93Eautgt6erq2syUwF",
  "key20": "5wY4Mb7YoVmfA5vMheZhQTDszsAcP1Mtm1n5nwaf4KSCNsvS1QQ3a2X8PjWa1V8JvxDMjzk4LK4tMy4nxXDmZzi4",
  "key21": "5W3coEMJJTyXBFj8mtqLh2Uz7mZzNpKuJe4P8rL1L6VE5hLRL9wXsYoACiw2cZXU36cVwUJabNu362tEHDFsJkuT",
  "key22": "43k8Yo2hq5i9CAwcc6gidieyptMznxkWqaRFMRuq5kQmgcdKtmrcW5fBH8VGYvJJsscknqToqViYtTri6e9pAnpY",
  "key23": "3QPRQb4Zr38mrrYFZCLKd629SmcQS7XqTPdgXqubmpx9n7bQVRBrZqSxMyJXLwvJQcJE2TQWpeJdEVeAaJ8XgQix",
  "key24": "3QzGRdY143ouL8cBSfhGmkYVg2KGfqs9fe9erbQMCUfYzKe9sDMEfGXZsWYYJ3zyT13X2gfMC6NmTydsFcQo4jSH",
  "key25": "5dQD4KUFBCyUVc8XyHf7XvgXpi4ZwsecF92B42TBwBkb21Ek6m3NsSmn3vfKNHm91JFpTx3Vh7CSeuDNHS5onqr7",
  "key26": "36xsvT5abfVjSKvwHfnbkArJ8o4E9UMSdR6ZAx3nHnviNjmrBT58FRkPAzNWr8feJwJ1yxWfjaKChApGRtQQtnhy",
  "key27": "37MuXRmWE45CdCTR1LvVvNHrsGnQeDCuZTyHwYqKLoqpsRHhRnvCWBbHaDtm37DVZ4aASCRgcW2p86mAmK913FjR",
  "key28": "4K7WHNm6ebEW376JZx8rX6s84ReDjyHdaEtX8RPKPJaYRhLg4vvdvCjq9TGtBZ1TytaUqWNS4U9sHS4whUMKLxzJ",
  "key29": "2DSeahaTes1U3ibUSAr3VpQQpwiFUYh3C2dFM8BQwBFtjzsG11MgTaC3CAfNUmxDgQcDsTgYKbY6AF25W1uhPRKV",
  "key30": "jRHtU7Duf7ryUQsjuG4uyvW5LhTXUzLc4JWMPFaiQcNwhcEp45oAcVAgvAxMv9AtvdGw5kCw4D8HDkg6mULwFXG",
  "key31": "5vvP3zqbGy3zFwSZc4BhahBz3f4wQCGbvTqa59EpdSW428dAKqpbM9qa1usGCA6kAF3pLT1UsaYCM3STh8tzwN8",
  "key32": "3f8KZ6aQpoWE8THbi3NxRAxRAwrgFiR6iF5jL6KfLdMWDk6s13uNocFzxeeb9vnufvtkkCNxAbwtQu8p99DMfQK2",
  "key33": "5DtrGPxvscpJnmw4xGKbLzYFiTDc6TayRPDctj19Fbcx89V9iLZaq2ExChMqYYXXS68U7Cc8s7HE9ux4En43hV6M",
  "key34": "4nxkLnAXL8YWjUUGhiYf6fZcfpcwwUNJKc44ivCyswBMJrKG3DNPKx9V8mPeeDt2oxvf8r1ynDRoGSd9ohc4yoJ",
  "key35": "GijLy6mg8spXnxLRMG9fsQRt56UaPTVsWv9g8qADFb41FPpjfAK1SMyqsHrY5pjk9VuBhXUqrc92zZgG5Hn9Zdn",
  "key36": "5dFLjvmbbjgKyLANY1TNjv1iM3WvDzirvNwYNPATRzVAFEYSPbugTmbjcVhKkAFb61TtfT3D4tGwH7ouZC8ugWef",
  "key37": "2mFMTZsrMohHAwAWfYBr7R3LMmzsnLfXCQxmdvh4QY4bTZkDS8zfjhEy8JFa5mWwh85BRKRXQjff3YJzMorFPNAJ",
  "key38": "4sa4HeUSfJp1mDRvmrLcRUH6freERioaZ2rmA4gPoWkjr36GSVxCZ3rnucNXqt9eue5Qz4TWc2HcxQQpoKDD5X93",
  "key39": "4LrURfcQUYxsBJgoAmWbynCQeL86nFTnCzaPxSTkHHpAUCVKrq8ofH51A6CfeBeUjabTAqrsmj4HfGbz9gpydCc1",
  "key40": "d8pjBVLNcFdoz5emAyPQ1w1E76v1zLVe96UXSMKQcWEHnfnDFupdXEy6DSrQHMHkcL6oK8R36r9XZHBaFcW6iRV",
  "key41": "bwgw7qy1UU1QoiEGeNcnKENjsqHAbRmKDtK4zJ3R2NaVepASMCZDUMTddhZMCbD6coxgckNhanU9ttFYgKFrFpt",
  "key42": "5Ezf9aWNJkiuHGhM7pKqQdgzNWpuiJ4CK3E5ittftHpc8crXzse7pqFr6pRgSSX2wkHJMNwc7865GzGhGx4u4wdN",
  "key43": "4iqAXvDkDwaQ2wMgTyvqgHk2S8zUQvQ7kiSxZcQJ4v1FtqTW3sS9V8y6N95BWNDWd2DVgmVqMD74f5Du1nNgRJBK"
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
