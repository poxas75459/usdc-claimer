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
    "49Gc5xfa8xfncWSZ9WidttL8vxmWxwVNtWctqX5zytzu7UJTFrosSwAt8hUf69yHogy9WQGqjHkEbp22g8UE3Fj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5siZKeJfpYnS2d3V22DQ6Q4DXqKhyCe7Q3ddoDAjN8mxpuFpJWJUTufc2PkZGzv3vAckeBALZCchuYd2oWi1t91k",
  "key1": "5iLtmtrPCE2M7NBmzMMHzUFfBEQvmC6zAkp1W4NeWGef1a19igEYpqDWn5hgFbBfr7cN6vKcrzjQYeNdTNFGsPcv",
  "key2": "3Yt3CiB6sddzou6JukiksgXQnFSERKAR9wJ92aX2rzUkt64DcSypysa78y34NZ1Pwh91dKfAvuP9WjJ9NvvkL2zM",
  "key3": "3UGnzZzhz3GqH66EXTE2WX6D9nBp7M8HGxgFMgu9vpZN9ttcQLSPTLViAmumWx2UosDxUDRt5qcimXWSp9LPfsV2",
  "key4": "65tJdqBeT4bsK1L4U5S32rPyBW2vZs7z6mmT9YP72XcAdYZikWWjRNRL5yMAuER5635n5ZAmpD2dgNWHjo4z7KZ",
  "key5": "64CZ2rY2KnKrJA93uzVUsB4Erd3K5gX6M2W1V87fZTMpF1kVHszyeqvynPhxqV5bAiYPUH4S5iykEPcy2QX11Eza",
  "key6": "5SvgNjjhYCDFB7AcwUfW8T9MgK76tXmyWHaqotxjmZ4TNQJVaTq55rmEcPuc9hGBf3UDc4iCAXwFvYddDqDBy2co",
  "key7": "2PW3GhNAR1tVif2RJF3bK4mEMXJBVdyYGUC2sXUmUdB5mLQByy1kPf8iENsmaZmpzTunLbZTWXmSZ2kENDN3PUqx",
  "key8": "59wD6Jh3r7sMrWfeRLoCEBn5vV2vXCgxCMtAyDmmdT9y2KcKvneFdHF3JcYhaPTuJR3m49HwEM8wBicBK2zB6ogp",
  "key9": "dJuvD5thx1Jag8szPLNdytUjfANSXyna6dG5bzi66XwnUEakKZ7Rk23fVFP1ixUFP8yAeFaKzkxuJmVo2RBTvo5",
  "key10": "3XwcxYcJmMvdpYzjH5vc4GQxFJ8iPCpTHStaueb256Bnx8otdWZ6nZ9CskKwQvu9EJ4GXyV1B9oKgzMtyGuZkFnU",
  "key11": "3qHWAY7wys5yqwtdBQAPKYRiACEictoi8xddZaLiEhC2tqaWzgYsEWthReH7TJZ5MjLc3NN1dHRVSXjUp2ww1s3y",
  "key12": "5y9Ab2HMrCEhNi6jG8f9scDfB3ppiHuAjqTcHotymVhkVwW1GQxt66hNL5oZjjvzPZJGfAWfrqPfkTDBkUsqYMH6",
  "key13": "328yunKD84TVJdgrmnpVWnsw6w5bBHbaj2tZKktKN5uiyW6xCQ78MLWxP2JtNApF5iW9q865B5brh38zrH9ZvrZV",
  "key14": "4yd3H5w9tGYQibLB7YcbnTB52Uc7UCmnz1W6cC2Wz9C4W4qFroLPtagKe1KMcYRExMyDjwTw7mhNZgzs3ka1QSFg",
  "key15": "4HsgVLB8io7Y9bNjvB9SQDfuNKh62okreqfUkTAR7JgSw9AJyrPzLYQdTzRHHtxZYoDCveHoSZezfacdhMhcx8MM",
  "key16": "2YbLG592hGQ4BDCKs2knkLT4LWN4nm8HonhQE2f3ZpHTvt1rw5hv8WzKjCGmy3XYCibzNaM26c5KJiG17soeCYDC",
  "key17": "5NpQdRG76WgFKrjcRq58yVjmgDpQgpNCvUsrRF675BScXY94Q1hARLpfLsUnhzmggaTvtA4fZDjUCyyTFXzHmFZA",
  "key18": "52KYhF9Z5pG7ipJTG16c2LhEbepDz49iG2Jnf62wzA2XtbaqdBiYCgUqNLecdt4K8MNkjBdsf8PqyH4Hu7AeCUFc",
  "key19": "3SHBS1PfK5Vxdokaky6PG4Frhafgg7dtQxzd6zJB7fPun33Rxcgzg19XQB89BUu7bwA2yGMW8MPGzuJXykPQ7HKY",
  "key20": "4tjrpDb66eqbpSxz4hrAVnUvNpQff24ugLAfy9ZAwpJPXFMHx4YoLooSnVxSbtz3zBGLMkFdyh56dDPTjNtXb4ZA",
  "key21": "2Vpz6NTaVG18EKvxTtcwkLMG62VgHm9CiwZ1tJCMKbzNa3uJDcBGwvNTUVx723PkbtP6VZTuu5wM83Mg5GozQv7e",
  "key22": "2oGG2ERas4MbwMLeFGB2jqU2PiYKSZ5vdSpwmqVMdFyonmQBJTf3jTNPGR4r5bZENbzqwpy8fioBq61oHnj4yfDp",
  "key23": "2neSrVTc6n3Tn6nX8Yx5wmTaQGeRvqixy2eHUAysSvPjJi666Xe2fxS266WA6GJMQmGEL7aGBG8BisQFughsVSoi",
  "key24": "5wKf3q4fp6SQ49KGZwZe8qag4NdpipGocRSBimNnFgFDGiX4MmrDFZpou4mVknGDV6G8NByxeXNzX5TuXZC1vWmT",
  "key25": "2vbNjWbMNdXXFiocDTJB1Y15qsLsG3znAJSKLCJTwiCnfNr46WrUMYGKifkemtQZUCuAA2d7pR1mVTF1V11WFJTw",
  "key26": "2uazabp3APAXtBdth5VjYryX3w3BUJjE8uZd5HgaoTJ99xQsStBRbYGBSMFLGmwKrRnX4JNEM8wPKVjuxNatU182",
  "key27": "377hvKpawzTeibKzf9723oLxNbqeXsR7dLwnN6cQtNYzjS8tGFw9k58TQPHFtFmP2ADTpcLm8XXXSVm4GgR6umRA",
  "key28": "ratPMmwrPKLAjrsLKd2rusxXtrKKyAsUffKsMa7bEM4Rho2kid5Hq4sHhD3EGQ6NnjyfDSqH6B2MmTdjJtFX7QH",
  "key29": "X5MhwV737AwtR7onzFUbV7X37uVnDfzZ3YSBE6bMbL4871QXzfyrsSrMfrV9r7XvXHz8myPSfDfNJZtKK6BxHrX",
  "key30": "QQtRK1dWyiFnHi3eboL9YkGtxyWW4EuJy2DoLzsXKAfAjwJDqeH4w8yQTobu4oHYYyweTg8ToLWY5pETvpWqDrj",
  "key31": "2dx2zf6sbYdxhC5GL3A8ud1D2Hm8uRkUGTn3a9ZVCGwfHYapB4dHQUKnJBobtpz82cpEXqNW19bBqtz55D9hvPmh",
  "key32": "3gnJQpYvBwmxNzLnk6q6tgqqo3GoPtczyW7EpAbMUdSe5RXNPb7ziNyGqJBuMPQrAgBUhLNoGPDbKF4KCbdeMyNb",
  "key33": "2tYbyzE3d4o2QqX7D5Lf67gHfoRkMLCqK2Ac8z82acXrR81fqabfqVdKUUa6jRDCfGtrFZMkSmQAZfH7aFMdYiM1",
  "key34": "J8334gw8FEi9M46EGBjxDnzUZNLniNMBMP14ZPeUNLjsadb8tT5DxcdfQ3Np6Xouu45j8WdYWSTC5EueqMh8Yv5",
  "key35": "52q7eqFSjidf2hExvHFAN1Z2ADDsCdAjz3Mpz3PXHcpo3cH28tGuTfCU8iVuupjCz47XsgkaWQ4JC4MGhMmqwKpn",
  "key36": "2mkwP3g1TvoKz4YdY1BwTgd31UzDtHGt8zg4L9C3k34BWxzc3RBwkZmEt9fumiqck6LWqfQhKDKGUSgng2648xda",
  "key37": "hgB8qU7gpuPKyNkpk2TDwrtf7deLje3HKpxCgm2NbLBWnCgCBqoxG77g71jonJjtbVKoMSU1rWAWDqjZ8nXmn4x",
  "key38": "mjHM7cvu6UHsESmcwcFqP4hAkDFfJ1Dh2SrbUTxYd7qk9Tqw4RxmMELdggy997ViWJEStY83xwJJR8k421PWMx4",
  "key39": "5BnvnBenEzy1FxZa3oLbhs6f3JJUAUrLATyJH7LkG2nwRbR1GrgGRacacfB2Xuy12APSzkqX6rWseqX6awW2qePc",
  "key40": "5Pj7AQoRup66PgjVN1qjnsgVm3jTe4gkSQVBGeQQDgsUZZPTmyxXzFn5GK8mC6FQzgxFRsCkTKisVtaD8hsiUyTK",
  "key41": "3sbnnf7mvkiJGaAGVSnHg8phjQrBf2fLwPumMd6iYgU7zL7VwLXvfzAcKcK2cKMJ2senjoL7D2eiScMV6nqXeBA7",
  "key42": "3udAYqDg7atx43g7bC4BfLtgkx9ZX4ePyhTpH6Wr6MgyaSCXZe69rdmVmWi8qoHe4MYmGtiBZTTWW486xD4JsudQ"
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
