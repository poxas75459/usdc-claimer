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
    "3JiYJvkJkKVDCFzxBCxT81TMC81Aajv9Z3QNe44kE6Ti357MKZVGRaQHvz5gDeEfvALmXvZbW6Y7y7iPWUfwZB8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2htA5WNaCrefy3DrGkaeg1mgaj6176D9vRbzDqzM7VwTBbWEYHp1z8GVc8APdkNLcRqvsyN43HnCt7UuhdWwyt6P",
  "key1": "5HRSoJ29z4inqhKzeyTWxroUZ7DqV2uXMxP27yJM7kTpK3KZPCQUMAwXHsMibZt7znjcoB2FQMLmghPUm5CkyN9g",
  "key2": "5DyZV7bA9WVVkRi5FRpxAt8p478eqp9PHvSXGuAWuPuf5BsqeQKHCKSEyjeXmG2pZg1RPLS4vyfo7M2G6k1txefd",
  "key3": "66EYGHJJp2n36iZ8xMV6om3UhtCPBUpjAR1MqFGEb9CuetsB4JU2SDyqA69FB5b8LJDGagbnYC2qcSSZe958tDzo",
  "key4": "2KmSippmu16D2MfyScc8bgKSHJL9h4orejn1x2yh5qXhGEiEWiSdHMFoSe2RJuBVy3PPCQdyZfGYmyjQ8z35TmRs",
  "key5": "fKj5cuS3LDfC52RUhfLYG3aywG7ZibmdsgxNSqiAwXn91Dvq287vTTbHgUfC6TanpcpLyh4t5isrFYaJhxt8zgU",
  "key6": "32atPaYvwNKkSuM3UWm869XQ7TctRc2vyzfEc2x3abTidtnvkwbJQynUnEbV437hcGNzUSigjMitMmKmQ6NarG5M",
  "key7": "663HG1PmBezv6iBJtSEAgHqxx3wV1h8cJmYKf9X3VdNbjZyEyM95CS14VETCnGEDCVpJC92oBGS3R54sR5p1nP39",
  "key8": "2XEERcxRt3iw3hSZhtLoLWxYrZqGb95GvxRQQNTE55n4Mi9HVdZr4qDbhELmXtcRPntGBx94WXkBSMTuGnw6BJm5",
  "key9": "4y1EZ4ke9dh5BjkrgDpcV8SUw3FenyJagYMy2RSvcJ8vLYYiq3yXqV6UqwrbidiTPxNWR1kVTeX5aaVHEmJYK1u",
  "key10": "5e8Ta7G2MiqGNSZL7FMxQiKE8Xe717MGaGbkbESHv9zUddFF3rybNehLW5HcNRSpRoypVpHhewZxYjGaFhgJnTEi",
  "key11": "5efVr82U9WPb3pNTUbb5evHzBsP75zBviZBEVHuH5cR1kQ7PbBXA6ZFxWrkXbWygDZ7ZYnKEzgpQJyGKzM4K4xtz",
  "key12": "2goBjp5HwG3mxXGCVhBYLhYMvYprw8vgexvkNwGLX6cpRP5931hoEsZgh3d5QCiYUG8udtBnzJxDdvb22tNq7wb",
  "key13": "2qrE7dWEswsCyV5ENVXGgH6WWMxEZP421UAPRSbRotbGizN3RgyCieTzeXur5S4PKBKmxVJsyM9JNy7iVtDj7ReB",
  "key14": "cx2yHnKrWskzNJp4QujjfjaUd2zrJVVJETKFBCpFDnB1XxKgXoC8JNAfFcU2SMbHSEb7idpErGqvSnRGSkbz5CW",
  "key15": "3xWaSA5D7cmLELiPAFJjTgj4xsnQWkELMBK868aWJyCaMGGoBrtPh1pEUKPMxPvZtGsssXMMLbUSZN1c5cJb8fw7",
  "key16": "3P4fSAjxXp3ZfvdjoDBP43nJumTBUkAM61iD89eBpWZfzue4ZEqXWFr3u45ckbWo7ub9XhgX22tAMKyYjDMmSRTo",
  "key17": "61zvreb5i27dY2ZGE2BJbuJBXKuybV22WXgpcuVW7BuXS1cmh5aPfr7isVcLDafZpYx6ztevQmEFA7r56H5F7obU",
  "key18": "2PVxG1RPpqLwSVYGSNvqFes3aXMxKkuYUPLGphKLxUYdmc3HchoH5E3mtmWMvuTqb5nLKJUetJiE74yeDv1QirV3",
  "key19": "3jjMoWHbnutBUygWsmnZMqkrquKjYVHKknR5makiEzCW8JETWxffKxmLibxmETQzsPN9RHT43u3taJvxwST9Zgre",
  "key20": "3tzLKYMmTAdc7QFuQsA1uHvhZqbgnkzeVSpRHUESqmJM6jMu3STuZLDRvyvxXY28wwARfKRPqTThiZdmDfAD7QiD",
  "key21": "5yTHHyKCBhB1J7C1Ecb9ovPidrYaLoXSejW51F2PSAiPU6bxj4ej3RoprJn2o92GqqDdA5eFLdiXtZRFBRedt3nJ",
  "key22": "5bJzfNQjHMLQTNHEcsd2ysHH3Jh4NKQaAFRHGS5hwsWb8zWg9cFiuV5S64CdWae4BVR5dAckKtZUdMaYk1YJu5R9",
  "key23": "ffVfeaxzqtFpSQo1NLxcbLnqBYtS4kNpu25F5bpFAKKmpVuqtfdedKvUtJNvfZJgMKNLCCbrJ3ARe8p9W3b6ERG",
  "key24": "3nw44pGzLH6fUcpJbZevZhYDZUYr9hm9GzCQJFBVaKw2S43MUHTN5mHLWcjvAhyukvjn2bSaB1GvXhbiRa2kwU5R",
  "key25": "5cvhTstwMspMCKMVevD8vyVjNXyfgJ638WfmiCn34qMMmteooUEwJNQE4KDdzNWZjsSSSBzjWjASUadjyeryw7R8",
  "key26": "3dTJpzH56w8q1XoGPYsdvsnBADZCea2jGq4kDTgvbX2cE1hDqKTz1fGUkvM6V5KWv1oPp2rzCJ5VFYQxMRkn88TN",
  "key27": "4YZMFbGQ8UXsEhh5yfbAtm9KS6b42mfyc7fv2NBYsWu3dw2PkmwWWshsRKL1UobCztSb4yWzMk4FTK7ibvAUK6fz",
  "key28": "2qtESAr6hEUs4qQDTDsonbX6H9YzTp31NXsTTrMNspNSMyY8pm29wJwSTdd2Ku6uxtaJpgFWRzA7PfaAm7fc2HCT",
  "key29": "5Kf3BTdzCyv6mZieCALrJLRk641U2tDrZDRXntkV87WoxwBzWQkqm2B7Q29J4hsFXYPeAAhRamPTGEtB7mAXxuPq",
  "key30": "5w6zf2YvYExrSdov9tjPUeQgKuBQRH4Tmbjt3JZuowP6hDVK7UBCNtHgJpuhj4qtLD8DM5WBRmScJfQD2wVGKCs2",
  "key31": "5dYcdttaPArovQGfej4b7V7tEW8i1PzyTejWZAiXjtiG24uzwX25BqvBDj8MGPC7y5DTuq5p9Wc9UyBvupkzX1Vp",
  "key32": "677iWckHxcSrYpawzYS8CE474HSiYFt8bck2d9QRz2f9uV6wMYKP1xnRSvCcN2dQAV2XzYrerFPLFP2nJwF1LeAX",
  "key33": "9R74xmY6xft7PKFC5Cd98G12dnQ2J2GCtW6zEYWGUJ8JFmMXpwrrZM7Uub7GQwWunJTmnRnfBjpgviHhXGFpeWZ",
  "key34": "9StZHa8sD6UKGbGDQX58KTJxYFkCCkUEhMJ5fTKFAsQe5NEBvPgT5HCrTiHoHmGBe561mtnejDMUJWdpiJmXRda",
  "key35": "3qN55hZXXZrt7cLP5E68WRBp19MrovLz48cCCvYDXSXNLCnHpSgSFQHEQEv8f9HbsEabwidgX3hKnLzDYYiZ7bgN",
  "key36": "2iWiRTPJmLeatNap6meGS291oBRMpNfAsGVyownRp9auBrty7X4PYVXkDWAv7vMX5YzHJGKnMbPUdGo2AppqniHr",
  "key37": "3TeRSdxCnWMWrvLC59hw6VgB6jDwf1q2Mt2tcwoM7yhXopU9U9xEV8cDQiZo2bWoCqFpNeQH2cXh9uXgLmdcSeDC",
  "key38": "3MYc3pp94prNCbi3puBRwgEgr9UR3Rnaz8aW9HrgoTx762bvJ68bWK35LFgwKj5Qs1jUPVCANBjt8pQS3Jrcwe51",
  "key39": "4pC74xj2taoY2Cvw1Qn5huHsqdNVjuMjt8Ey2eCmxq36WXaxH2h6MNjjh85FRknefE9EPv26Vvc2Waho9RBiV4VJ",
  "key40": "4CfjJSSTDFKFBuq4m49HaBfQQ58WaKfRqiq2aRvEneCV6LCMrHg5F1m8w7bZ5i7bA8KBAARV538tBgD3QCKoyfnF",
  "key41": "5Dxrdn2auTpgxy7SwWDTtj8S88EoCajmAYpYkh71phQ4EpP4BVK8S23BRSfgwqSvj5yoPMnBsUtSgg3xGkLHYLic",
  "key42": "2VFTRMysVfchKQd411N9CL9Fd77XEkj59C9Y8HNJPDoqzuuwFWgeQaiWw67scLQsyLxxX5fGJvwgTLzsEJDTtVoj"
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
