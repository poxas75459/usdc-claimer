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
    "4T3JbAVs24fTETThgnx1QwCk9UvKpcibLemYEjTX5syjh37taP4o3QLWJx6mNRmMANF5vr473gAiPK3nDTkWhLN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HKWcAM1WLi52cQPok2ysoPoB4YN61HdwKkUE4nvY9gVrhquTsCkg7uo5vkvjJAZW8krUsca4UECzxWqPf1KTctR",
  "key1": "4xrUGo81CARM7dXHBCs3aNjBLuwgUBXFm3jtc4zu3MrLV7dKTP3FRepYYtSZh7EFv9uEbjkrGj4vmkL6UNWFKZbE",
  "key2": "5MPT6ZWRsUD5HxLS9bJ12wbvQkDxg3uc8AcSjNkZunC6pSsqTa47HhUSgMKctQCqufxF5KZbhm2yieEbaw7U5FQm",
  "key3": "5SNjrKLpNFZBYmRXobSvKckY6YkMBYfL7sYJTmhh8UV2rZYNyHgNNMG59srq3DTMDJyJZYNua6befitXycVCRNps",
  "key4": "465vJmSkzeWTTsGReDXkt8WWbWBN6ZYyryHo7Tc4uw8KqDKxG2WsetkSSRmbp69dVGAnRxW6xNEmjSs4LjkXdyEo",
  "key5": "2Wzv39wYCqQ4H3RfbQzxqMwmnnDhkkKw8fuwHY5XjtyBk9J6FSApCgMbjYoh7e9RPw71s1JhQVNhE1cY284Vi534",
  "key6": "4wy6WfPd1PqqVVPZ6jtoxhHBqNimaXRfuqMhjxukfCwWuWiUYeUNjmmo17q27aMyfnSiqX5cegnHsfvd253Kjdz4",
  "key7": "TSp7go5b1YR5b52WjQezHSNvNdxLpt7iFNiBG57EVrJNPoxKwJuedr1yhGqSbYGJRxAytSktGUCS7jfctJGpzv2",
  "key8": "3mAqTnFuVZCUeSs7qKBXhoNDAUZGBARx7PzhkgA44xChwbwtKdvTNGTgwRmKYzPb7gpCYvPssP3qnuTZDqeafBqc",
  "key9": "2JyVyGxmK9JbPC8UdPKA912Kp2scPqYrzyjnm3T1AbdJ1Rt6URjfrdHmBACXT6NC3urxzSk3gCMFDVHAJMuFGh1Y",
  "key10": "2Kbo5HzM7cA6UxhAXtNuRaWnkwM6xDkeLdKxxmkZoVvqusRuT9husgUUW2EXNeJD6gzdjzMaUWLC7c3YE3dcswuJ",
  "key11": "3piThwNNfMnFioyg9fpHtMHo3PYXm9RkYtMQ6KxTNhsmVb6NQDgjJZ2MyaWioShV5R8owc9BmKYM4Vnr8ksJFQeJ",
  "key12": "DJshEk6oeT8jXFxoLLAm3sCX9tHeYqXogHgFggb63hciCtQET9ZruU57t4F4e6JWrkW1KpBWscTRb5xpjr2vrxq",
  "key13": "5mYpQBLBgc62jhsePqpGMpG8Bd7VcR4HZpNbJ2cRe1vnuF4saFZ5DUY4LYFLRNhwbrE5wjcEaQ5b6CcFwvxTZjh",
  "key14": "57wUbofD7nvMtBoBLp9z6EyFCbfQX1kdzLWL1zpFaoymGyhLAj5MSWMbvbg9xJNHWmHfmaTJqXPczWU7RrP9ok2c",
  "key15": "2vUoSQu1KR4CGjWnnPfp5uCGLdJ15wm1SgFkQAxACPrRwSFBe1ak5WGnvidRgwz3WKZVPHRyEXmaq3CAXg69fGfE",
  "key16": "5Yinxq5XM4KWcFrzdExWCGGjVK1Fh9LLrAGavCAFngVNHzuTCfVRkE77ZxXKnYA8iKV3ev4Mmj1ZvBXoTp5aSBJn",
  "key17": "1NNVk4vmCSdmphb7RVLAaEZsJw3TGDqyJ7VcxAHgUWocTC7QJo9ct9qNdpNpm9uPnWnmR8Vctsp3yVBrnuV12UE",
  "key18": "2ycvj6AH5mPUEv4ZhqWZmRLeF9UNUbJCHMKMKcxtpXKq4jwT8sGEDAuDZR2wEbSGwoahfnSnYqAfdjsT2JXJtN3P",
  "key19": "4yunwrsmCzRU5mZW4VLkTfhHWAdFRA23Zb96wF9jJGtpyy3pdmMPS7zR5WCGMxciQwtceY18ocw2Z1mwkjzxKah6",
  "key20": "kEjXFL2uQLRb9kRrqSwBeasHneYNuESXoU8z9k8qDNkTLxiPHsgot88YRKm13dMgqXzY3RVgvnY7xoVxpK4wzG1",
  "key21": "4U4akArnEP5S6eDY9er4fW3RjDyytVp87uCGvwKRa8f5EK6YHvHgh5ohZ4j48b1K5Drt4TP91gqz5U2q5PVXmQey",
  "key22": "28vN1aoZcpKMrMNggrkc7nHRWxU3Jh7TrxFBdPYaESoQvBmVf7nvqvoeGNN6KFnSEYDnrTXncwamdJQqNHJmutJY",
  "key23": "2XhRfPZQUp5BYntL9p5xjnWmUb84sqCKX6HyCoHUyRozf1Zqyzw8h5UFLJJrSCx8EayiSpaEvVkAhb69yY9p6fbH",
  "key24": "LF4z6DuzoMwYXCJ9YkEen86C9xxv9v7pq7eymFxnLfW9DzBiGJT536npeFXf47Jh8mjjK1aBe6CWHUkmyR1bemo",
  "key25": "2sLWHfm2yZeMreZx7pVFDx9EnKPgBZ2nhQvdRQD545LrR11hSbfoPrfq6f4GMMMQ3bQSVXKFkRWsR6y1dueEQEyq",
  "key26": "2Ekk5E4LoWrAFHsHZ7W9f8wvvkDLDr7gx4ZUnLdDkBQuMAqQGqRehTsVtwEz3Ccf5N8d4q2EUF5qSKo5chk5qtw3",
  "key27": "1iM7TfEpLBScAQEJyRyjSnjJrWfSFLbhpv4nHUgqbPXUVo4dohcAXhLoUepAhaFLPTzCo9B3fsa9A4BCagCCfH6",
  "key28": "4tSkykYFNJV6Qy4Kdji4pV1GWVsNS1WWcJU9PEaCnhgYNs7RhzbxiLU9TfVi12uis3f3ULxNsrB2zWVU2HZT1phC",
  "key29": "2y8eXLNe8f6ufTDjHBXCdBtEpzv5tECfeUZ3GZHKNazwtxGKp9JfimZoCm32eJTiSQqDsTXDc7nkx4vjW3sFJLjR",
  "key30": "28Tw2W2EaPXUrFVtPz2N9WPV18eSzBYh9XiDedfuLDiHom9NB3HCQuLxCYr2aSRTzjEKSDj3GCKe9R9VbWqH5q4u",
  "key31": "5kdkjNCmaEiN5WbuvzhAmaGwgYA94UpDaF7ST7rZ4AJK41qiHgLKD9R7aMoaENNTJACV3hHj9d567DAJ3g2mMMqm",
  "key32": "4SZeAmpdKza7c32rnTCfWcbJJP4VdpNWqebogfyBptUDq52Moz8DxrMGMycxXdCgfTi6j2iYcpJmJffPcv2WpEqq",
  "key33": "2S9YCNEGr7Zp6uDTK2BLSGHT8kPmRQpFbMDMxvyPYuJkwRZRv6tKY7gRHwGsKVwBrPH6qVqonTzXQ3Ha1kwoAzzs",
  "key34": "nbMWjwebdz2W8pYcLdxwU6shVWBaehbsmfweiz3fGjHdhMufxbCgByNwam1SdSkUPxAHSCX52GjhfUd4Ud1rdc2",
  "key35": "czzZAvS4JFxm3rXsxQrpAaT7G5zTqg6YwfYZaZK5f4zcWUMpfUrUtezdVa4Ltv8gASoKZnagvXnQXQs5uMMWRfo",
  "key36": "VyuG5ZBLVKEboi9RCNxCjqjrN8SodZBpGxKLpv95bhFNj5TPLKj3LRwE4JqDQyLUvYLt9bSnXTtQyhNvxy4qRaT",
  "key37": "hnDg8ZTFFWMDP4nhPvd66zgUcQp9MH7eemdxttCjXJFZVo9MBPbiv7mi6LiYYNGNBWdUnha1RzSnkAz3fV8rpm8",
  "key38": "5JPSJy8SuyqWN26JZCGRcjbpLqvudyDazxy9uD5ZfwQA6UHmvf6epwfDvXBujtcLC1W5Uy285DSSZ8dyoaSjNHFh",
  "key39": "63fxGB5hx97Kyhyxcx6Z9ochdutLeNApxWgB9uZm4y6CBPEtaU65cNuNwdeXkNDUGeDUfxqmqTmgWz5P9W5s2kmv",
  "key40": "3esBZezXAcSdCXsRcAUhuQnsPvVaxCwvy3SpQm3cMSNo2JTcuSHxYx85GBqws4vCXVLp7x1k1n6MbAQApLx8GqMg",
  "key41": "3UnR4Qr9ctt6wRdWJtqNGwdpKLHF6KSTZ8EgMajtMsBC6gjQ4LEYBCkr2dCm3j4bnSZA8qdq2nAgADqcuPTdYqad",
  "key42": "3jtvSrfUirF2FMpz7yJDeh7CUaUNhxVtBcMvKWQvEXUGNED1KDiVRv34sAMkNKQqvtHZ9NVgs6hqji298SQ25Ufw",
  "key43": "47zDLL6cvFXSM6pgKzxRHk9ZBczHsWj8Tj1TSwi3wL3D5HPq6rLskt9n4qSnnRZLM9jvDJ76FL4RnvCDhDm8YmMm"
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
