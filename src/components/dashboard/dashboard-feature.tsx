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
    "2XSNaA21mLSpoJPCi2gZpGo865k56ZnFeAf2Uxo95EKv9apu75XQqXk6vGjb3YmkhmiRWuTGAMaEr8hevR127QxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wcp9vovsrHcHQ2mHXHDwqQkRemmate6E23dXSsKUvJNAwaGDpd45wPsDWLfko9s9cZkPbVA7sCEhbhZx7sLxQFs",
  "key1": "3sa9VAxqwfX43xB2nMHWg48AxLdQfPpgZ3LasRU1DeT11MMgrQMtXiQUcG8jKHRXNHkhzhxT1VLyFGd7M237kCSh",
  "key2": "SXgJqanWLFTJbiUhYtqjKbFHkbm8TQ8gSNjWnJhUAjYbq3J3fXckR2f7EP87xCMrdZxtvezbV3bFqdAMrD79qag",
  "key3": "2K6iBEeJpjnHwYjYKKYadSRmdMYVKF5XQ8wvbc7d9ktHyjTMALAXjdwwVHM9tWFZbpFYMqEPyugpaDEohyDNQBb5",
  "key4": "3W31X2TrQnerNc28Ny1kpi5ftxSAgqt8yyvcwoUoLKfA2WeCaqjkppsToi76nKvTdfjKKZKHLaPKZxPFhwFCkQx9",
  "key5": "2igh5t4SzaA3ZyhZYW8r1krJSPVgFEVWaTR7MqCRy5vdKp2FtkQsMb5H5j9oUtVoME2wHBrEWUd6mQwLtqnSp7Je",
  "key6": "CNxehVC6yLHe8GPDF93iCBqQ6gxQ3uygCUxzfzaUmcrmBdUVAzZUWoCLjmpoRafXMiDD2hC1ec6uNV6mB3eze8k",
  "key7": "4ivtKPzkcoXYGzTmSBW4UiYV1Zqav9DxcrkE54TshXFwNeshKXcvJUzhE96tbLQvcKvV9kkQWDD1z26oydQd9Bf3",
  "key8": "45A7cfcp8AWtWsLFY5PNxwLcTwbqgktXGZjVz2t97FrJNFa6HVr9ZHWiwjLYuFoV9sTpYULvS8mCk8mEhzC4KgMM",
  "key9": "prNhkUqZK3r7Wv5Fd1qNjbULT55EMc6WHrdMdBMTCqnA2ka6fi8pNT4GqXe9Pd1rZ8LB5sAo89NU3iB7iC58ZiH",
  "key10": "28mN2fMhXzabSHJ7CGZv7WCDWWbookFbywH7YRUNxLcCX43keH5R8TycGrg3CqA3W4PbJe4dEKPbA1454qLtuYGh",
  "key11": "5nnfyEs8muMLkLoUFzzzkdEnLvEPep1FHC9Pzmkv4mRbB33ofLZ8cBGrkSyVy555TxzJwAzsx9ZsuaYojukzKmaM",
  "key12": "4ZmA6DRUyQtNdMc5VQ6rBSiWW1GRxnsfD6aEjV7pY7nAQbSuFe1sJ3Td6bUw6xaErUg6yVGyws9QW24DY3uabxLQ",
  "key13": "5reLV2Ls7SUhg4533tiJjoSFhWDqP7dmHybvwXbu1ZhQBxGs7s1YcewkhBhGctJF2UZufaxsx7udXPXUKeyEHKoN",
  "key14": "64P9r3gypi5DAs76oYtDj6LTEBWTePzB4Sks7ADkCecuU3TtiM66zkKgm23unqW5TrMEARxngyXkepBVEV5UNVx6",
  "key15": "3SvzEgtUu1vLLKJfXTh2pFS3iQABX6aPEkixtNYbf66sGYEk42gJN2989GxoJVejwVtQXVvqQYw3TZvzN4L3CUgu",
  "key16": "31uHEPwmFuZsYJaGcMLzQHkPA7bAmJbneiWXK4sJATYKr4ERVDsQRKNJCZwiQmaqu83wFQHWD2EgihiEQjwYQ1jR",
  "key17": "3ApDmq92CPABu8m2BJUeV3gGnZqM5S6fMMcQzjQ9VGmzjhF6cVqdo7KavCuK1w3EHAq9b71cPGE4TGiCfJSGVy4Y",
  "key18": "mGdrT5K6FKZGhQiE8QvuWptzDa59WRSYSCmWX8KA3fyXzD5Bktswm4ASiJHVouyMPo2GD4aubY4EBz9k8UR2Act",
  "key19": "2NrEUEhxx46E7HKoNWnxxWZpTAXdz13duh39vRZVSHH1ZyvzVesdrAv9UQ3KCoD1g1eh7yxkAn4qrbyAZ7Q1VzFe",
  "key20": "2ce3hSNe6Bw9FChwqHjJAzoZ5km5w4CjT3yus8ScSuqSBPSuxE1duH6TYMqhFU6LRLy5c4FEbRqjMUZsdv3s8QXe",
  "key21": "JoSPVj6aHxJJfFRrvF13nJxvh3zuF7hsVhdTSa6dU278bRRAkqCPcC5Th8XEXM7r1f1P56JF4rTrK896WLa46Zf",
  "key22": "vmxhVAZgVP1UJmNmkryX7a1iL1nQTxhJk7BGiXH73fFDXARAbHqpRH8yeZXXNFp9XkfUAe5SauLu4c6wp3g1T4K",
  "key23": "F6surKXqZao8jkmbeDe3BmvvZ5AxpNCgMSfs2ZWAUTzrFn1kv9DTb1SGU8gMaN1DGCiXK7mLev55Ne5G3bYcdkF",
  "key24": "2fFdL83ZMNncEwPzbNqiBEoetgbWCD362ZykJHER2gjLeNxHzs7LobJPfpWgeZJF2CTdiG6xoD2c3pr3mKNXP4RR",
  "key25": "t1RCajbgZazGrkyBfD8N87iVrLUzFmJnKu3Cwqjs6uSXnBmJz3RoyP3rXxi4WauNKyGya5LCLNbm2zja16iskx3",
  "key26": "4JLiwjok8WKsVtv2c7dedjtiXeL7pJkYSQDtxV7CZ5GiEq3GZsBG1zcw9ZMsme7KQuqqv46QPE4EcGTERrG5qQLJ",
  "key27": "62WL3J8HErFSUoVGf31rcSPC9QKS3cD7HYRjj9GeKdD9oVgMxatSKswDQnMsDYXkGw9yBF5ZQRiPtnEgtHZagE3j",
  "key28": "5KU1XbdChqmVqD9m6ZggQKcipRzhEKxB55Yp7JA2MKJ1uhx4Gt442NDR43hKg5QH2HgYeSQeMg1TFGPnX2wnLeA7",
  "key29": "3etZyANvwKx9ioGGZAdchnnSsWsjTPSwCwHKEtrRWd8LSeoyPfD3vEvEyToudksaUUHvdeLqCQzcAkpUuqpWfG6P",
  "key30": "aavamYfwCWAdXQEpBm9v8Baxg7wise191sXbpdG1VA3STs5Q5Roe5ehdh9tQo3BnBCxvE6dPbvr3ZdtsfGJ923J",
  "key31": "5zBQC2FnGWrChBWjfA9Gv5nTfqHEvS8cCtJ657mwv6kLKopzpNoU3BVkNko5GpmJSPwmXD9fbDKt2crUgq2nejGg",
  "key32": "5uRYbxq5CyQYazZMEzYmsz2CXFcpyGZvo6e8e7wwPr3TSd3X8beesXmxbv2kHSuxrVXvL4Kf2q8g2h1TrAdArwRP",
  "key33": "2qTT3M4GTkYoARVx6YzJgGekLLj7caAmznsRbvmA2Zx7P2tgSWURvuqheCsQQTu1TgDVEz6oeVH59KLm8dyLcRhQ",
  "key34": "3QC1taPNviJS5pxoCvSzBAUkb5n4MaxgW4XNzSxbXwaNo9y8P4wczjj8eCM71C8qbc9uyxNpAgWtPU9LDXxTNHwK",
  "key35": "2eyrz2k5Fy2bwqdddAF8UaLj46woSzsNvCkLNsGFgGfweHYDykASP6bP91WNJPQ4E2oN4816xuHV1Fx1GFaGLPRs",
  "key36": "4fhPekMxEafkSBfhkNYsndBbyrxa2BwffspLB3mGcMjL87SM3SELfiQzyN5ZJxo3Bj6LU8q2x9i3Fi2CZnaSQ3Ks"
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
