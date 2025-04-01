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
    "4pCzTL5cbBaP769Wx4iS8PKHRF4q1xSxXBSmAeveZJJnPCxjHcWNqEud9YS26WFv5PUCWExJ98n4tcfDdpbsiUWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1wds5jaZVm4zLuG4uyS7PN3MfWuN9DN4i82J3AXmiMYyL1W4TNLm9vjf29NsewLAqYq1Fw4NyqdBWRKxP9svW2s",
  "key1": "2SnLU1avoDEEgyemkQxDsa4KSiqA69goAHsYZo7v5kNm2dhqHrnAgvNX7HQXGdccmJqCeRgPNexbKcBtVKEtUE4P",
  "key2": "21wnHwuqujobuen62Uc5Da2u3wDpsiqPeDCjSDBQ3Ra1RacMooQks5AejKtPLGqErxces1aHiSXEAbav2cL4Jpsb",
  "key3": "4XsxKH9g5o7JM7u4usAACmKxznomXJ1YwVKmMTqEwVW1y1cG47Rw2CxNXe6FmXXnuJ41BSfNhM7h6hf5Fdvg91gL",
  "key4": "5ZwzE6MiEAojRr5MjRChNEDHsmfbhVyXUbhP9DcRCUknFXRyUm7ASrjo3pasCkCHgEaJNL1yMqYnGsDZ8TN9VSem",
  "key5": "2XfHRacA9qUw6x6U3g57hBC6ph2xs65R65YHfdxPfEJyUDug12R9SytivL9Xjig33r23Mco2MRwVZTRAiihS6kMB",
  "key6": "2Kfgmr6T4bdRGVPd6tVRUWDCa9RU82RGBKM5C1iTtQRY6Ud9KxCpUQgeddFrfpdHeAy2Tjg8No4ppAUrn39FcXwt",
  "key7": "d84j8A5NHaBaqrKWrrtXY6fN4V89CxLSGsd5ow4Hayjc2afVEMqUv9szHqcbx5Y8BT482k4NJ9bw2SFcXjx5yii",
  "key8": "2TRF5hwzwiGYEQBKnYLnqA2xihKrPnqzwvBgPd7P3D9K4xqnPZET1UJJaacpfeS3ZgYuSNPrqJzjKYMMe7wPhZcQ",
  "key9": "5AeH7aGyAjDVyLpokBYe36m4Lcmo9QEzx9QGpr1gDahnzJksKxFPEcdtTVgweKHVaDFuWSge1r2hKBQ1RULVjh9K",
  "key10": "32NVjtp1nbzfZQZN1vxUfSky2txZ8v4dZ6Mfet7pT2XtCdfteSZ4x1hXC59H7AMhj3maRNzkhLY3JDsRjRuT7uJk",
  "key11": "2W4FVpRumrcaHZsyF2ha6wRCfakCjQAXezJri9r4A457JkLB4ydwSxBq5Bb3qSPJafYuCXtDTTfavM2uktGrDYU6",
  "key12": "4ocQokzXvpujSAUVN1Az7nTCcFuMqRm7T8s5rCvrZ9MeNoSpHDBdm4LFWuXWc3GowNdD5pvAKSvLmAWCuyxbm1mn",
  "key13": "MJJ4TRHgDkvAJSFbG5NzGfbf5GnZykrn4cshRN3B3fsz7h4HgFMf5PkoQhyuHcqjwuv4UWDMEyVpZLbw9fLHxs1",
  "key14": "3BWrMfaXhKQAHcRUY7ZAR1oXXaQDGJgsjYKQS1Tqp2xfuxsnVyXVVuv6ayvxpMtt7neazUYeBgYEZKeXUWUyuxxB",
  "key15": "4ZrFdh2zNXLKHBhsi14D9GKmigsuk2K8Z17dC7cHscDsABZSrqdmx237MPdLCfCKCuSZPt9iwTnPsSrEfLAhc4b9",
  "key16": "2tDjp8QjtVJC3CWAhYCm5hwUoQ3QFQR5oPi7aJqYLiPq1M99KPXW79WJGnE3mWY5YYx2Qtq7iwDWGW2r5SgXtKsT",
  "key17": "6gS8Jz12YQuGB9bN7ZtMqjay3TqdXoFeWumcLbuoE6bgXF8n18zvzstJKhFBjHG38mihjrAFaqjKuJ68ttSMuan",
  "key18": "4sMjp7DB9AMaTVbF9g2ntAP5YV78YiDDH43EqUHbReQB9GG4wtbVmVMNj8TYDx3Xf7jKJNy3GoH8n6XnARAm43ov",
  "key19": "HBk4hywnmKezxNCh1VFUQNgGnzFiaJKeHxVwUyQxy93hsBHjv89dCsAs5oowEtn6Bm9VeHwswB3DoqbnAuf5i3d",
  "key20": "PWEToUvVT9MMWU5JVM1V8m65WduhRzzgpnDhYNAZfGSGxXceCt1fHLGRAPJi8kiHMguWKTYDyRHRggJFajGBPN7",
  "key21": "2tz96H6rBzWMRjkwseA2g6vB9ycei7oCGSAswKwiXvATAvqsiMmmX5msejiN5AnmVrHVUjVNeu5QgioowbpR3WZq",
  "key22": "2RVRmRzUV8wH4oH5CqJca1W9a1DhKWhV1DGRPjD7csjK5dqkDrjWgS2maMGGpDy1hr3bHniKdA7TAQnnaB2uMJ5t",
  "key23": "574BtMwQ1YDYgQ3eR25cwbhTE8T7dtd5Dg9cusoUCKY4HB4kLDLw6GPjeh7JbjjsNVydkxYmcukYFMCfiQPwDkuG",
  "key24": "2eXrqcsK3HP4nVGy1qA6R4iR3QnKLihJNkNDphx4VGJ9XBkVkSiKPq4htB6nwu8pH2HStHRv9V1jcd3Gr7beamKL",
  "key25": "38HUDQ5hAS1qjxMp2HdUH54GnhDPZS7HetnVpUUury9mwKqG1KHYucAgvW85X39uJYUpWFM9ftpY8KQ7pv3oa4do",
  "key26": "3GgPvFPduaurDE2i832dScQib6kTzGyHkCZQZY3qUDaSAa14WVWi9US5b1VkFUdkTWQtYpsrur3e8PtjiA3vHezL",
  "key27": "2rrVzfezLTRsWkBKFc6tEM1oH67ACMaSvJafc6eQqJmqvt5aQnt69KjBkbVrHgZcWnav4YMWgMeGc3MPmdp7c8AV",
  "key28": "2d7dfpim9hywgDX8Tr1AnH66RJpSsNtTex5VEFtNyDNKPaiTVzPJVkBszgWrqze7rzS9c9QvuyXXG3bSRp92pPT1",
  "key29": "4R8Rc2Njm6xX3pfLdefQdnzUVK4d82uGKq9EygUBVUjdaGmWhskcbRJH5FDxhz4cRF9qjJNRgHNYXrL2eXdNFGiM",
  "key30": "WzU4EhnyaJFtfhc1CuVkP27PrQRRJFez6JpitQ9wExMf4YyudysMvKkLtZd11zLRjbdXRRV1nCUtLjiT8NYjbAN",
  "key31": "Ao7Vve3sMnKwWTX8dDaB6Y9C3TKCwn8PXfdEnCgFqo2zuDGaLuguENCFyzh8ZzeMWqZX2Yr4TDpYaVWz5MsTVJq",
  "key32": "2yvBLFKSFMawaCsnyQj9Qzzs5dueMUgrSmCLnXxJinYNmTsdxE2HUubaLTAzYBfe66RCxg2dXVFjNq43gDAeKMrC",
  "key33": "5pgCwWxQEzJrTsxvuLijbZAJFDQYEm2oZadgGPJoiN1UKT1MHJ458HFrsydWfCNb3F34wsSH1ghQ8MXJr8hTdZr",
  "key34": "2nXmDsE3rtZDMdsFn9R3rdUNJrjiN6nADpSjhXJ4EN8SqEinw5NZ1TNMe3PQpVNSCUpWiFKRXpNG3ZiGFQXet2F6",
  "key35": "2u6JB9d7ALxySXopWTbPCDqtCf6wsUJ3G9tQJcYyX6dLjwFnAuELyYytkcLAEXCCnRf4sKiiLm4NmbGTjNQufo9b",
  "key36": "UYnawo1Tp3Ftxunsv9z7ZENQSD1qZHKKpqMWAgU3VY36wNrv1itoLtETdAfeei2Y2KWhuJ3m91PUryygo2Ro1WY",
  "key37": "2oBTksL3G5szwYnz7PyYmuG9xfKrK6PRyANSWEqQMWC71PHgmqzKrdfWJdjYvdDJFJasmMjcwfshbhky4me5dJJd"
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
