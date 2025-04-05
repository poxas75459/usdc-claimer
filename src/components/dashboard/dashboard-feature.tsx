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
    "4PE95Lxmt7n6ap5nFkp4UCG4x64kpZrA3eNoXp8ymw3PJnTBdPP1wWGCzbFCjNi62i4UbK1DthxSsLnKsxFWVpF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GeyAutRqEqXEDWvqeBZjwyN29xHEQgbrTxSDG8akygzKVKHDX2PTRXrrdfRTAEXKZgkWjM3EdUKwYxi57HRA4DT",
  "key1": "61wkdYFddLKCfwYSNcthYevW58CfWoJ8V4aWEH5kVMUeRmBdae8Zgiatbm2UhLxggFcxE8CATVXfEBa8FBbMZ5fe",
  "key2": "4WaTSKNeikKcstYeEu7aMF8mXkXodvwhnpDwVrQRPP7UZAMWgfz5fMuJokNGshkpY5H38nbRak3naGucrXnzueJ6",
  "key3": "51rFawedBXK8GuvJnHbmfmbKZ1G2eTKVPh8cE4EwLq7iFZm6eFhdxT9AEr1qL6yUJibHQ63tZEBvcWPk84ZiUaGV",
  "key4": "pkVoBSrxL4aRe1hthpoJcYnmaPMsJQMETNTz2k55JN88eYP88m8LgstvNAeDUGZibQQPbjoAtFQbLD9AhvcXf6n",
  "key5": "2upzE7vzndWzyTwqpzHiHPoEqiitsQy3rw3v3oqvMAe1mEjLRoe3YXsmXKcjgbWh1PY5virXoavcyUt3grCkrAWN",
  "key6": "y8NSJSvWzY117CNe92frn22ofZJeMZwZvkLGa9tySxAz5g7TMPhQ7eqVA6XrFyBMmMgknKxy7mJr8FgRNjp3JuE",
  "key7": "5ePaCrTv2tUjsQSz3ZkM6EkQmb9TYwPFSAVbmyELWghJarkyPVmEUaE7yEPmPwXYPkexXTP1fw2JWNigCuVLRCd4",
  "key8": "4DZTRgrHP3Uczo9W5pTAM3ReZqgtjpZRt3N2ks2zxcFBDVVrjmeCijgvfQ2ekJ4jGjaHbz4hBQc4aWwh3GEVdFRY",
  "key9": "4aBVz26McRV6SLiYPWsQZgpXV4cX3YtLKzr4C7xqf354VC3H3XAxibpps7hLLpXpRWE2nXCHTpuxsrMVe5zczs5a",
  "key10": "2tEmKp9VwEaRJAUPBZHR6KTssLFGfmQcMjSM3UmwQ1c69NYhipQQoW47NCSo6m9gJr8sW79psaq5Pq8FC7BWXGiu",
  "key11": "zLvuJhdp8e9oFWP5fWacp5hmssRTu9njtGGX19ZPQHfrikYsGfrnwqtkfXZggMiM57RUjnUtf717PioAN8xSVKr",
  "key12": "trjScF4KFmaGN5a2ahNy6GR2itMT8D4XfDu8jX4rSaq1qkMZgKeE7DB2b8LCQg65NuqjEN1CcRNRLG5qvMWnakh",
  "key13": "ckphMkbVxKcwt38hJUASPeFsAPEzd8E4SJCcVY1XiLbp9PhDx7jDCAU6UPTYN3wh21matdouejiyNixTuH2N5gx",
  "key14": "mtWnN8Lvfoqy9S4qou6zHrFiZgDx9JAoCE5rENnmer2jGRggAnPv7k3CLVVqHZMBZwNKGWnftekbTbDs8YxXzVz",
  "key15": "41P6T4FozGJqNecT1ZaYdHQ9qR6Qd17L9xoxBEXG8QiU1ELJ3qnDDRwiYhh1FmkA7vZn65maJQDyG8EqiT6CaLNQ",
  "key16": "3EwwUYKEJc4XB6JRcUF2DXMn4Lt8x6J7eVnJDDGQ8614v25Jwaz1nakdmmJhDSh4shzNJUuTKmKf6S5YuMyTGige",
  "key17": "5KsfrNJqNBR1VSkhxR1KUENQUN4An2jUsyLeen55CfU25acZqD4RpsjLAxc17mTeVeDZGMfUovNvNKVk6NjGUex1",
  "key18": "2NSweDNcxBgG6LTfiCBwJZy3BhGpyr639UxtCZeAdbtdXjGR5zQJwBunocjqPE82gh58HTuYYtPdyw5wDGbwJY5g",
  "key19": "2eYTpVXZimCTaBqjfwzH9owoqbmgLR387G3bX6agEt5cgAf1Kp3dqY9FWyTXhk3dxxJVTMKBsE37jVGw44bAuD7P",
  "key20": "2ercGbDgc1B5xTjLJPXPfHrx8rwVLiqePUUo2cST2uu1pY9T3AbQSfJCawR8G92Ji58m6Rtaq7Zi5WwsYqSqDxmB",
  "key21": "3RJhaEd3D3gaZUE17imLTu4zJvy6u2h81CVPUwz3xG6YBM4jJazU5TsG3s4wYQkjv52qX9TACd75cfMEgyYjmoRC",
  "key22": "2LFEAqMEVYihhQnN8cRYwynrG64PZA9udvqChJP7GczAuQaHfoMpKkZpfiPbnUhkJnndxYZzk1n1c8LZAXUcqJqP",
  "key23": "5MzgRXp9oH1cY5cNUowBFzrx2KpyUbsoDsLLiiryMWPS7YdTuK34yJo3LRz34RHEnXHg7ZagrfipCb1gvx98jg3M",
  "key24": "2ioGrxHrgz8DrZdXtFPM9yW52yTsMJ5eZ5rL6qbjoLu8wTKT5GMugeaxSvbVCg5f94oUBN6zZKQWP7R29ZVYp4sc",
  "key25": "36GAWt7rutDCqRFJA8yUbpPBRBMemzHWzjLNkod7L4PaAiH5HEaJT2BLuoqKD5Rgt8HvPw5VmanUdsp791Ts2kf5",
  "key26": "4pVvajZ6YZBNuPvXTbtmeu523zJJ9TgbyBRtW4KoaW56rCnnNLawRG6wHbP6qm2EXsPjreCUNWdRG4M7M1SH9j3L",
  "key27": "42mJkzMDUePKSaUHWxxgbCrbBNQGsCmF3iuuRfrxhRfs5D4ovrTs9mXrZYzHYC3ieHJnesnRLAVfHQPCyjvxNNLG",
  "key28": "2XMeVL7u22LA5zTJsLSvzoKENZkwPZrUHJt8YkCZviTDtw7nktiF1TcAi1SN7av9PtRY1WLuVbJyRsackiSigLzT",
  "key29": "5esiTJj8bNUTupS4cZopPyJmiHrr18YBQZttQWWCTa59qfUBE3171gYbzpN7DL2TvtSYeCPEFHJpAGDG44MDB735",
  "key30": "5dT3TrVXEF1zXVTpuFEtCEeCHk94ZQ2RRt8M4TxgsVzJnS9wo3HtpwQzg2u1kiUMzNDvBSQpiYUJRVXeEwWBCjhc",
  "key31": "4RuxxLsPqGsm9PWy3CHRSXcakP2vTX1pQPYkYMafZDjUGrxGM4o2QZZBeeaoy17CXkSnkXadB7VbAPVSVMMpehyc",
  "key32": "MwWsohK1ZWYMPLNpaFnAhwVLPhRNXc8vz6JhFVxkrqYQnR4rvgTV786ru4AeyMWVR25Ae6DZCPVrDLBfYewosaW",
  "key33": "5KUJQTMKxkmDSYVv8ApTE9KM5F4RcUCaMpuzfEQxDat9ntx31HFGy4McK9yZYzZoKrNw7qeydWjsbBfDgLdAJAZ7",
  "key34": "3xUcvuk2C4wHgYwYeKPLSS4ESnz7icVw4zpreESJzqeQt9zAD7uhnFiqDaLn1fKAmDh5yQprbTivV8fzgXyWGz4s",
  "key35": "2XBsDDBifuKj4rWs1jg2Vt7NCzMoJ1sm4P5Urv9bBUZDLpoUfYNsZ1geZNVATojkG6R5ayPAsxNmqno52dnKinma",
  "key36": "5ej3DPfLNi4ZmhbZPWy2gXQSre5v8hsCzXNVXC87CX42o7GgY64BNXqMkR4rHym6NQBF5KE7vLrj8TGzbRYs9nZa",
  "key37": "2UU9VQWJNu45kX93CCW6xPVmEGBD8M4XxwDmH1M4pcATBBKDo5Wzuk97tjKba6qZXvebzyWu1xrNfh4QKg2yqwb5",
  "key38": "4sY4xhf21b4T4JCbX17xLet1tXPPZJJx7mX1hY1LgcTq8Q62fhxF71iWQqft1VUQk4WMwFuuLVNx4gi4VAKHeduC",
  "key39": "587RWjWsQojk497MhDXV4ZJrPgbmjut7VHnkTtc6mwBuJRnoaQvLuRPc8t7GmZV7kxSoSsqQ7UtrRfDP1KdWMv9h",
  "key40": "5SdRywhGEWPATfkY9bbtVf7W4Y3CV1o71dHAzzikC3VZ5ZtpLU7A5janXv5XmEsbj6EHfRQTb1vCV6Y4L2qGABkS",
  "key41": "3j6V4KFkozoJkuBedZ1Nq4mRjvrpFTBiNdwRKfiCnzuZFi2RetWhnwbCeafgwgWJGWofivfsQc8DigyHuB26uPQE",
  "key42": "2LxKdMHwBU5pRi3LKtmT5NVgPqo4Z6BgYH9DgEGX3tstYVYcBTL1y8CtbTdGUnmiDdUXZXXJVdBPtVfmzpJi2vxm"
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
