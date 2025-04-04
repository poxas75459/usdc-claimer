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
    "38J8rLMaqki42KwJ2WTUpBHwjCZUr8dj9xa99QwcP665KLrsGwoHuYiiGXJi8pipWk3cN3YH7ALrEioqPzTsntLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eWXo2dnj5MBkvB5NCmDbiznrg3V8TJALAwfMQ32ddxyQ94AdgmcgDBDmmdcX7UXSPSLEHa1PkJaCdqYb9riPYG",
  "key1": "5VbKEEdPrrffAVgYjnAGgLG3uTVECnzGEvY5fPvUGkf2cHA2W6PN6Meaf5Lc4b1BqLVJnZJ26mWYYVZEbhCYW6jf",
  "key2": "3tQ2jumSPSPKqY5uTkAD43c9qgkXbJybiEB7cVhk4cpF9XVPQWoj1UU6pvujeeWDkRJ877EogzVrdfGoeRZF71Fm",
  "key3": "65ENDRmo5Xivp1gcJ8XasKwt7zxFzq5ew4rP4tJYeBoaH4FvSZuLJDXYcQetp1Ahw3mi16zEHe49YZwAYXFz5sv8",
  "key4": "5wAuj8BKY7VULAehZjCjwFKoTUtBXJB3Z9ZkbsUnexKpC6SUvtbQ8dkFebcn2X1Gv95fd9wjoXB3WNmz45xa9iwj",
  "key5": "37A6ejFQJhdFUEZ4qMFa8LBkbqX557GzecHSTdf1D4VbWirZGmM66frUnKZPx8g1yjgc4s6re3rYnV7Ex6MzjzBf",
  "key6": "ft14YCxLD4U4aE65qhDcsRfK73igXfuVkt3pzWmHuEmpwFbHE862BNeMHnnFeCWijk8JKvohg1Ls9AS4ZWpmd2c",
  "key7": "52KnAVtHWLz2xn1Eri5x868y69wHuAJTgVCCVX6mLqaSWwLkE8zcUdTcE7wixUJyGezAFPoruijGg2Qr3Fwwx3zQ",
  "key8": "5prF2GyvhjqGs6SyVJerBRH9j6EFugtPhhjqhH9ytQA3mkoskSyNypnwq9PDzPumLTUfyMafRefYQKXmdkgyWM8e",
  "key9": "3v77dqwzAicYnkXN78ADDyiTnpP1ZKU3TwJEKjxdksM6R5cTZPqWj3grDQz2uQJTscRFH7hsrkXs7MZ834ridne2",
  "key10": "5xbCu1P5VKWZcGL4gm5Y4R97J1QVuQBxyzKQGioUocK5ivXC1GD7amZYtPJUub5jyN6321YuabPqJCbRtZDCf9Gu",
  "key11": "3Q8xhsSLxfvHrjuFwac46yvcqUfv4HhKj9W9Vus6n1L2rGTSKG8GcoYmMidzV643foVMTqBzCHDvqrocvwYicjTB",
  "key12": "mm63NLm2uMhs8XufCuhCs3sHbrMeHMdjH5qmE8sGMah59jHbK2UbNLSRs5WgjaiozhYEp5YFbQaSvFaNCb2husG",
  "key13": "kjZBXHUkD5cLMrGvKPRoCsPuf8pHnRVZAf8zPtYKjQ1US9z26K3CdhVRT5EbCvaR7fCp5Z5MzmYEb6iNbK5cmJW",
  "key14": "uz2QjcEk53cn8zRjuEnYRE9KrQ2XhjYwAhpmhV6jcA8sV5LAySjsTJect2iEaebFHU5u6W4E3hzcVQNNyMdnsCo",
  "key15": "2qufdBzeafkPBhPd6qcxKKAhtrXfiqbsfc32RQGrK23GNAP7j1QmAMcj9f4p67sJsMsk7Jw5dWM2VEWGndYU5NEt",
  "key16": "4MTzgUu4LVdFK71cWJKD6vM63MUYNKXBZuxMwkJZZg9g2bEkWsqqh17hAmw52WwPyeExpSb815wFNd9M4VPqUGw9",
  "key17": "4RuFixSJ7VAHVwFPJPmcYEXvEaVf7Bmba7dPX5ZPen5p53hPaRJ7CvYybSAUH4e69w5uRwCGkqWKKAqnqkkGgaoU",
  "key18": "41CCHFq64R16f7KzNRgNoPG7xr5XB5icACNAJWXfUmCVEu9vSx6pargucS4XWmMyJjP2KcHbTm5eLzVtpnhNRrrr",
  "key19": "3CuMS6JqtEwLA6Pfnh1ay95SeouZSUxGL6WaJV5v6dUyCgxEqRZa743C7N6SQiFMcpWfD9QY2jXJpSWzoiS8QYyf",
  "key20": "3U5gsV17xXqddimLa396fQoRb5g59WEvFf1s3EQw2s9xkK332trT2xzms5jMfocwLpUqCsKHUf3Pt2ea9AtErEoN",
  "key21": "3sBUAReTw5CRZ8N9Da5c4PGk2bzEmyQGVZg64QqHCbEV9NVujxQDt5NbiaJkFM4yiJWNQDHtsJSzqQUumx2RSFDj",
  "key22": "tEzPNMMUDydhM2L1Ua1vHSYUZAaJrMsNTyhUVjuYnPTYi2sdZSjTXBMi9FUTST71FvVHipkda4EcXWaBr2S3RtE",
  "key23": "5tJXqyjDMHyTYts27nBEJw1mevqEVkWGs83E4Djpe3aYF5bir4erKZazL11YCratshnA3BHu4tKRZVosQyKUKGa7",
  "key24": "Qo1pLnus6oEUMUZAMjBAvUuV4BaMsZJnFBFkVGATESX9j53JLVKxr7yPfrKhxyJKuQHaEL75szKLhHgaWxu71v8",
  "key25": "3k1WyLsNCiVm8voWXdpBag6cFeraQ8rzg419gE2iro7Wtwb9u9PZNp4VX5367z6haNd87gc3fnWNXZoCzrSKDFH1",
  "key26": "48dPdt32mEdQeQmW6JTMAUUgvcFV2T71GjtEmfKiYnf7P9w48e8MYuZ5oqfrwMSPVkGzgkW6yBQXSKn3L2WaiPzT",
  "key27": "2TCBpgFDU8QM5mcdz8dqNzE7XecjbSgNFYabxzAg19AJr67GVqgqbPffFkQbF9As2BWrTL3GqeA5jXogLmUtMbhv",
  "key28": "4ayPH78QczsvekDcLy9cncEmZ1MFXnQrReLznPAubkJqX37VTTuvci3qYcy4TbAGG2x1hyCpHXHXY4tMLMdZopso",
  "key29": "3x9Tbpkadz92HLJopBE7wb4BHpygdDEiQ8EjGPBnmGdisyH89SSed1ZtEDxKeSsq6XJPe4KYzNh5MKb4aBhwAVTB",
  "key30": "mNWerzi5p9QYJ2uciiWja8YU9E65fPudygn3vuAXJVCkKSmEam27hRV1KEguyfT1MjBBsf6jddaQH83PPX533gM",
  "key31": "3b38fjym2Yhc5H9Jw3sknY9hc9Zzfts5VttXX2Y6Sgwjs9UjXRn7kpeCo6244VFP8xHueuSwPi1LnbraCZVfWYDX",
  "key32": "2ABv3FX7BstQFufDGbxaky5Z656QcTmztaYZDMu4zXQCpjEZiks6ideWib6p4SK8Frkb5hNxkegQfZszyWHjypFi",
  "key33": "2zCimF3kuu2hp2Sd8XUFvQJjik4jbxUEaBTYwfWLV5mkmdWMVwPUKGzm8sKb2pXqX485wf7pcqvrYDxHM7r4wzLx",
  "key34": "5MazVFxdcnTWTa2yuUN7oLRKwce6pnEGp7TC8pDAFo5w1jfD8GCqmy2Ugdbn9BTHX9LznG8TXkFWA6ikiEamrR1L",
  "key35": "3uuqfC3pjsXms6h1NBdkYvkrB3HjXdJTGnUf6ioH4u5Ti9Hooz9YiqjyvXbfkU3MXAtbQ1b5wuyZyN73gZn5cXN2",
  "key36": "WBUpn5oFiBRknnXcSioFKALkD8eyqh93pH3Hmqe2BzEfkHdzKPskYxDnLry41SFv6SonSVrmju13pTGShWs3V8T",
  "key37": "TEk9tk9XtD1HTxnYs6TA8bNrkhoX2iCofhDNoXDCcspvU9PUzPt1pieFm6sNwsLtLwxp7eGAXwHJavuxkWHtscR",
  "key38": "2b41Gg3d6bYu22BQ6oZqAdZzy2orj6AS2NJBPWQPLPKiUit9XS7N6P2x3f9w9Bx8E1ChEjkatpLT4MCizEAB4tb9",
  "key39": "4ZQTr4RrdZY6MZvB63hZQUkuzhw2n9zs3rNWzLsLQebBGUN6QVNg4XcUZgS5tb8YU2q2XHCcRwhxeGVZdpzpYFbu",
  "key40": "2PDgy7iXbKfTXv7xUWJJGaWyt5sSoPMoahCaMimov74snbXevgsE7zPxemMmRKGAT9EnrtSrMuBQH8UrB479kKVT",
  "key41": "FDZAaYjt1hBbDR6fWoYXUximvEmPLHhqZAsRH5E9XSgDFeXaTnyP4Gde9QsUzu9MfYbsyfVtExz5xMx6gr2GfUX",
  "key42": "NkzyJN9k8ZV7XU5N7MtG14YZh2ktvq2SXYU2gxqzg3ynyVRFMScopjJGMD4LNS4q2JQhUJyyLXdeTWNVUWyv4Ty",
  "key43": "gPQJBYqooyFA5VrViyDFq9hrho9JV55gsKP1g2BrZwKkb5hPPKuPBVNV3MTrVwmQcUFtkxhCidi6dSyCKor3WW4",
  "key44": "4F15ha49CKKQyLqzKNXQwjAycvpJX6h9n3Up9PnvGGWzESgftuT5T8FkL57c6Z2tNZY47rxvBQ2tHxwfCNRL3wd6"
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
