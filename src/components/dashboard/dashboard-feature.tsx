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
    "f7p845XVHyT5MaGEYNAmV2Rr8oJxNkrNSY2CJZvGMKx42UkLe93L6y7HCAwLQwx5Dd7eELaMTR6UK5Pz28X3GXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65a9yefYzFE4Y8hiUJWaDzeUk8X9LjahtZyuBGjZYefQqL6wfBPuHteAkBq9qgHafUZSzyJCM66Fd3QTPDjaVMsQ",
  "key1": "25FoQwJyP4pPXA6teSAmevKdWzYCZfsMqTjxnTB7rucgsGdBnHhKDs4zYfGr3gEDRHYqfjHJjTQHmYCcQpu7Qabp",
  "key2": "5zH8BQwSSB1xBg74XtCsiZQHHa4teSWCu7Stnqc7fPorVJQMj3Qw4ZaoXVTGUizqwimb2WxirM252hJqnuYxZPyC",
  "key3": "43D3GemN9XPcMdhnekXRvB83bihsubw42gjXTSsbeX9a1kVdehL2rJPo27T4kuxyPNyf7v1ZA3ho6bXcpkfxp1Ad",
  "key4": "2B7ZvECj4RS7rgA1tTJCuGRdkJqcDBP2iFMyQxWXawVWmRUK72GifabTKakdNVEX1trhJvMCKjCWvd3w8VD5Pnz9",
  "key5": "59pCitJeUVp51Q1HQtJHpzhSY9czgYRTYY5UhCBHzUcTHDrHHa7hnf47kcp4S4uCE4PZTTzUsNmJ5DRyNugrsozZ",
  "key6": "9TFGNw7QNE7GK5uvScTvBEoDpCyMAnpfAZ6JYF4dpw9ZZvHTGmZrkRvrL1WZRY5KWFfHx7xsYcsPctsDjBjcSCU",
  "key7": "4BpAu8XxjcbqkVtnKcLgHG2qZzr6q3Sp5UzZFAH644PYdN7XtCdMLhHpyraD9VJHs75YxN2f89aNm58HXkKegE6z",
  "key8": "3Sq4zGivZZqbVASG6G83UqTryMpr1xN2kGJkfcTZg7vawsnKceu29qdUA68Qp7R6Wyr1NHHSTmwY9yeacZAewZQz",
  "key9": "4nNuVshZTJJbFq7syTRE1fJumFPgywM3VydHU95Fmx39ADyyHKTuaaa9HWHyZLkr8gGTwA8HxkZrdsHKCGqydd3",
  "key10": "CE4CiPVpr3nYDYJgKzEtAowfNsrbPeJhhCbu6MUrKByKhdrXwMyAKWeDD8Wv84xRRaDqmdhEakL2dk8vDbWRd6e",
  "key11": "64sysPQuUGixsfZYoLecpQt1bhuZ9MPcQCTubQFSWB19fXx17WmMHZkLZjycRrP4zmve71mPSbjXR6exYYeQKwXR",
  "key12": "6pN5aFwM4h978LKbAtLC1z8WwRMXkTbKJLUNCuGpbBTuAc4E3hKi79FP5Edefi5zUcwvE6gPbsvTzr35uK7M5sX",
  "key13": "2qv1i9sbTzDJBxS2k1HXg3Ho39DwxTskVdxerfibmBJEMDfEY1C2eC3z6xCMVQr7hXRJiDcGXSfo3Rj8uNSH2Mdm",
  "key14": "2idFgqiCsxrMrAAhkqhnHBEQAanmTUzVF3sPrBPeSNYMnrr7jWwDM1AhdqvJaCc2fgyozum63TCAjr1CSv6Md9Ec",
  "key15": "5Zev73ts8xbdgA3mpfPDnWoCwu23bGpb8aebYqR1qbh75ywSdXd4CNfnAkjpPodkpu7dL66h71KYspESMo7zrWid",
  "key16": "LNsiPkB1ZyTrhAN7TPKEdSEeTpTTM4bsuwxC6srbzHyKw41JmoS8Kmse5f7BpxckNJ4zycNJZeyjDLTPfwDRLEX",
  "key17": "NNPcSrNbr8cNLr7zSKfCmBcLyxZeQrwnjTcHYnQxc9q4q68rdY8PfBBnhTb7c6bTNbjN2c4cFmT1SVYjGkWbD2t",
  "key18": "4De6g6c3pHgid5uchA2T2FfoQwMEk4mHK2UMXNRZJfaKBhQBynaCtmMetsLv5MAessb4UuEwQ1jTeE8moNSKxzVT",
  "key19": "3Cxxi7eQzmfFhjwg9ggWQC8uB6yMEPks9wsrhM27Q8QNDpMtDehYpY4AqMjDD73jPu4EHGrxoh3uN8Yxv5fZw4pz",
  "key20": "4SozbCZj6TzFu5hM6vaPYwZRdsJEV1fjUeEqhG3HssRU3dgVyHysk2YTFNQD2q99EZDcYvLRg3VZxbZj9k92BnWc",
  "key21": "4Poj3rcuCt6fjQpi6Ze1aLHmp9LoXLiuUCQw5r7zhqbrFkY645T276akDjfk8AAFdmExWQEEsnv9wqVRRV46EKgX",
  "key22": "4sQsi5bhFeZhZQk9GpaYkSAVFwdtM1uXYrMVy85u9UhGCYusSwah1M6wNwcYuS7qJvF5sg6d3AAwQtTuyffkFAxQ",
  "key23": "3FGtxCttojTFafBMdNfo9KJjnq67wWPDcp5CgFSW7qvQmDWQTAxcNaP9Cs4n6zBBN1PzRDt2Yrigi8FCLiAwEvsg",
  "key24": "2giPfDCxrSoVJSHb3WzPybkWiwkHnLDZ9YUXbxJcePp7sh8NuxdjVMEdYkxfuxNwAa86kUdiuojEeE5dsdej6YWA",
  "key25": "8vTbta593U1UxMJG4Wzao85ognMP1Zt192VSUJprU8Uzb5mjj1YqY8nB3yqUb4E9aFoeQtgQeVRzeerSrbGrEmp",
  "key26": "2qZK74smMZo6X9o6fq8hrC5S5PjKdpJWK1zs4ecuBwrLBodoPs45fmbucKtjGVMkc2kYZr9U9CKqFowDw4a5MfeK",
  "key27": "4BzfUsqV6ZGFdcSZNbviMCdE4sVCjRDAFQpxW7Qni5eRLCSq3z4CqqeG2135uvM7njKvA4iEfB6CtHVoXU9SQY2w",
  "key28": "3pSzgWeux8qNAPegfDvceatH17iwzYtcKhNq9xWkgDBCWAJi6e9pYg2XvLQ4XNDCFmYcbn3nBUkWvjCvAJ7zfKHf",
  "key29": "37o3Rqbk5Ng9NkPPTZZe5xj5c2MSBgV98WU2Psamq2ATedXsA5weghux8ZR75BtCz1jBevQrfuu184BGNNGT8Auq",
  "key30": "ZzjuEGgVn11QGUUcYojJC9nMWhz2ZqSgPvDhFawkcwtUynM22jP2eBoAQuCXSbLW5bXZBF2nafGb6dMHtY6YoW4",
  "key31": "tkwtzcMrrcsRRqHZPbpNjHM9fxQ9b2ZfvBLBKh88BkaMbyoFoECsGWhVgCMFq5ZeXaip1GWz6Z2XnShxazM9A79",
  "key32": "iS71puSxJxNXiHCmZW36bNVYJC6DdAmNEABNegX5N2vLTyFdWMjFBen6yPA5dS1eMsRiLnuFqJTJcaxTCfC42pb",
  "key33": "yqgErP7ifhLXT2VC4HJeK5QdEYuzw4gY5uqYBnfpKpfpDsCvf5hvC5yNAwfEntgStEtZugnwV2Gb7FJVv7pK3J6",
  "key34": "3mBpU8ZdTowKazZue8m1jgXmcXrhcSJG8Ufjr5eJZkbftPPcnkjVKjHU6hwALbGGBtrct4C6LwcqdeBnTABJkAD6",
  "key35": "2CPN7a8N8vQo1eb5HieR4kK5196WxCq2qVZetYaEWF84rNjxiMmUR6JdTtChpwu5LTUCZpCYDkeRtocAuYm7EQBZ",
  "key36": "4bNmh8PWEbYWtTLJwCcFbABEBY95i2YUS6uChQHF8PjWaKbKL1M2S1xw8Sqm3nAGWDoszRVQ8EnaznadXfBUjH2j",
  "key37": "5ts24sy43CwWrVkAQ3ep6ym3yYgf9QHYSimgtXwTEsawsUZEVWqsuenohPtUaXstYkjWSU9r37t7ATsvbTAt1dM1",
  "key38": "3bQH3WayJuD3cU1N5cwxVBSRo53tjUv596b78NU434zWqh1AzrZehpAsDKXDqZkS1pbhuT66mZHYeecf3efupyHF",
  "key39": "5ze5HMC5LUMjpadmjpo7bC47RxBP2MUbkpo1cGYH5ZnM4Encq2wdpoGcq3RXsBRNJqApVrvuwkGKHyZwn62krjes"
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
