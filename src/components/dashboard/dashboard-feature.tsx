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
    "26BJmGrmqv1FtGdT4Lit258a1fo1YcXcmjdDjaBQsWZFFedS6i1bohGhYrTfnCuZdvte7VTe9YPv789wceub6xBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xueXLtrsWZqY1DyFeThJy1jnjSMrDHGPjkEJCgQMCQqCzXid4uTGthfwQQp5oQSwTk6uYqu3y6z6VYT1DLzH1es",
  "key1": "59MttndbBV6oPUmF7y8MRbFXWQLHBHgQir6fmp1qPKU7ZHkdHmJ3aKCwzuaAKtJgPU4WJYW6A8Bxsr7KeWNa2Kh8",
  "key2": "3Gw7pcHZ2rV6sKhr1H1KghesamL54Fc66k3FN7Kc21uLEv6qUTs61DCrtg8nrQK1DUFTvf3ryGYqD6xvNrbkZP7U",
  "key3": "4A551SPA6fMSK1cyQQG6X4GK4ye6bfd8Fc4oJMyYMHDxQ2S3SrtBMouSn5uFsRWpzxRZ68ekoh9tVBExzJk3dzrw",
  "key4": "hvZRv42YUwiZzQHtVLT2PfhFjzSoACMCw7o7v83ZtLo8e7VK3pLGDw9kf5Tc7QW6PtmecsGqkg25LwmxDFu6s8k",
  "key5": "27pu4ZwZBGW2rHd4LSvTdqtnsWUdP3QUtGeEe8gCvindsDc1TN6PogftGJ8L468v6jvmK4fMcHxdy8MDKCM7pHkj",
  "key6": "43qApL9Kb8WzUrZNmgroMHq2iiBPF2Z3iznHQoThY46coQrX6Z88X9irwDFV3n8e4CQcYDy8mdGEfwiCWsa5nhDT",
  "key7": "47TTs7Axd8cgduLuEzxsRsaP8wMrF9cN9t4DvdKB2DUDR1ei55kwGEwbehxQszgnGNLBw3RaZR48deMZCqruu3BP",
  "key8": "4nvaQ31HwH6J1Epx6RLwPsk8wnaDyBDhhuRC7a4nVbr1jQKMNkni42vsM8NgDbHXu2Q2dzrwt57TkhNPoz5JfQf3",
  "key9": "39BERLhFaiBXBM9eJDtFyzZ4Z8FUeCSrNA8Qi162FnRSAtm17drW9SeyYGiiEFTGdJucRLeWkUKDVDeE1zLPKXLU",
  "key10": "2XBSajKHazHPHpXBMbeZDidLpShMJoosjLeQDCPX4J2fh5SSCELyVurtVPfmwWQ4oF4xdnfH35WV7c3r7pQPhMcA",
  "key11": "eQXSorR4HwcroTiGXJDWHKcEmzR5TSobECmps5V41KJgQA92rZoe3fZNmD5XADaGfC7b4wYedKDuM7j7fURz8Xd",
  "key12": "3eV1MbK27zkmPiYAqvjzgApdCmKWHmoDbu6hkhd1hEeuAFFEXvg96MAgYaw9PiYLBJZKBrHmxYyFWqPMP6ryPDhm",
  "key13": "28zqypaZkF1TukD7KyRwXp4XZ6ffTYuu1Hs6ddxDPXaXbfrmnNiRjR1KwW1sXm4R25NKzBkuBPm2CGC5YwKfuAQk",
  "key14": "3KktWbM4Bg68acwWQLHhpAsQ5PgAo3WEJYQVVfJjbmRR1Fq54bazo6RVwygpPV8uqnppznU2CNSxd7GDnzGib2aw",
  "key15": "SP9rbLzqVCSFAokX2mieH52fFgGNiTGdA6fc84n3U3kttif5pRg4LPbUtWcHtGkHp21fR8xCY2gwK1rX4GuKcG3",
  "key16": "3jTU3Mg8HnrGYCwrntHKKq34A53CDuYPiSMjZC6nWY3BrqGKTXBDcNUY1rYvF5hYRD44EwHqD9ksg23r7DNMF9bF",
  "key17": "hLFLVYrZK5tMarMN8i1icQrz6xEJeHxtuMLVd3XAHqcCfd8e6p9qdVJPRdPhdKA893PdWSm2imEaBBfmCdkTkM1",
  "key18": "5JpVH8cNeHAkWs2mxZ5gPeVkrZFu6aTVGWQRNhP9Zs1z2GCPqiAZZZGViiuJAvfxiuGgmLQm8BAbZxyy4jkwSviJ",
  "key19": "2TgufrNw7TDjYV52uDarKMudERMWkAzXVq63zN18PCKLu2mBZtBGbsrVJzi1Bbmhit5vYny8B87donABerpLpGQa",
  "key20": "3Fm9M5ddr7vxTrdLNWjsMBELNTKVppYTpKYsRc9VosuNURXirA269fQv6TdNQQVHaagSsDu3TJJUTEAu21NMM7FT",
  "key21": "4Pp434e7ZiKsZpqAFB9u6abq8Ubz9Y6hhPvdFudT3ksoeS8GMa7oRt369N4YsbH2xR3Z4UZwG4purGa1i559tRuD",
  "key22": "4LjqqRnt3FnjDZ2WjhAvetwcwAj571gFgp6oFMaQMRxVCwktRLMGRhPL77nLupvXBSKxYXD2xS7GfTapvnEj6Tim",
  "key23": "4Wsi1rsSb8D4WrwVePhKrXESA2zVe26jQUAaKqEBmPjMAgXj2VMqPiqSMkbuUj9tmt48BN26xVhk7vGa3vp84ZrK",
  "key24": "2Bkt6EQjDSEaCmppB6pkosu7NPPYFT6a8k2AdyxfE1YiaN7cQTz9uraVT94vUwxFpmowbjysvmWnkVQtZ8cUn3A4",
  "key25": "4s96vdKH4ThHY4d9DU8TLcUgMcjjq8by49mGmdekErgCamd7P7ZC3TUuusybRbf4dUa4bmTTwfqQiyFHgzNGBE6d",
  "key26": "4CLZVfgjqwJz1EVFAYwsHi8511L7JdcRfFvsf74T6Q6g8e6UKWkoF6axsSwzGLVYzDjn5Q2m5MuEr1CU2mJAm59x",
  "key27": "CmK45YoDQPBSRPu72mfsGFjbUC5n7CPNFMeVYU9o6i7p17HoxpooeVsVp54kYviA5QrdT122rjZ2Su6oJnpmFrU",
  "key28": "4WkGdUcW4MogtFybw1c4dCDjxXyQVKEsJgD2W2tpkmmShTF3T2chnpVhVzU3tJgvkC4SaGM223rvN4kWni429FJr",
  "key29": "5xXmgqq9k4kr2ihmiRQNpSspJvDFH4CWwDcwy54XMkAaWnStahrQep4iEvT8kDQkTD98S1wikJoiBwyvK1a7JtFr",
  "key30": "5aNYexmYRpTSCUydNAcv9mUuM3LZxhLQhbvbFtqUGoyMqvsAt3HpoH4Zm9e3XVPtJVQ4fB5rkJgp6kB95QCEfJB9",
  "key31": "2j9JwCfwuNCXxjUgSfx4yVYpvcrwybuvqZbeyFr2QVj9DCWggqLf7iSj5WFcgFVBUyj5K2RsUg16Gk8ZZuStenen",
  "key32": "3ioJyUXNMjXYNwrETLBTDEHxQ3uV821n7vCCNHG54Hu6toxQBFnB7ERUwGVdrPigC8AWkaK5QNbfop6oLQCcfCHm",
  "key33": "3gFWh2SQjj7bHn7Be9BfTdYW4ejT8bqfDyg8CbTHTvPLk2dwWh2uosywMMUm1JCayryYHfh2tHtPcGo6uNs4Z9YX",
  "key34": "3cHJCtknsjUsfHTbqH1xq4vKU5ZPPbcb2pMmjz8UZd8E3zuKPZpB3DRd4vhx4gajDKCTdS5AGxmQrnhNx6kAdinR",
  "key35": "5vHMXtxiedNdhN2j2JbtBh3t51Kw7iomVoFCMDXSZrbZj39ChNFgVnGA8NtLYFnnjAWWt4AbvdCn6tKp9HQu3pCm",
  "key36": "3EngdGBUwj9AtuA1kcYBA9mRwJZGgHrxpHTd8LaKahD7mQTnK6mELVXEkxvzwwWAUEzMt8xgKCL1etHSZzLsQ5HE",
  "key37": "XFrY21ib6seNoJPk7dojUid4aPiJMe2CRagXEssvkBFnGkAt1GqzMraSu85MPRpuq2h9exqc8sHYzYDcZm5agqX",
  "key38": "3zKpSRGLZee3uCwsZNctp6CXhZidAbJdWsvogg2V1uKS5UzsXWdk1fnzGFe5vFxRR1nS4cJuYdDJVqedTpcFXdAW",
  "key39": "4ZsQG7gsj5tCR1RiPjvRfFYu6uF9LnqVhoDCdV4Jtj3VkMc12kw6pbPvARDJn32Jk4c8G1vQb3CW7Fw2FAPaagQn",
  "key40": "4W2DYYfcE2aSVWh2qeUHDzLYKnXXLPomEiVro5kPELpXLriKJQpFqBz3DDLQh3nQ8qUvJnqnd1uzWfhXpf8XQagd",
  "key41": "WtPYPVQ1SCggtVYDwrgtxWRyU1S7fsBejFoNfx3eoW24JzV67ugzcvBiebE7UqhYDwnTFHBdrYX99F8ZTThxEsW",
  "key42": "5QuxTGv3pDWdAeAkn3WHfLZ5pvrjDr2iAhWHSNm4ZR4chrVVZ5XDq1RC19JZB49YehtiqVXCeKVtUwjx5d77RRQo",
  "key43": "2hoPfojJc8J3RNXskdWUzQmeVPp4nFFXYqhY1bDg2yfQvtgAQvTuYhvcfMwxPvgZUzf3d1upYjYUgu9hpyvNJJsF"
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
