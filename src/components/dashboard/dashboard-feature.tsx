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
    "21CtkNmFCmTuGL9e9eTeJi2DidxT1XTCSTHXkbh67GCmMEegZJq2Yn6Jojg4aAWfkvwgsxuxBjRA7B85UGHof5k3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32AA7riC24SA26YEYNMY3adZovr67JPxvJ6KotrfUXjBYZfWr8Q5Vr3R3Fn1AUgZx3dWu4mQtC11a3UEUuEcviN5",
  "key1": "3EMDACD7oKC1N8b6tkZvvfCpcw2muemobjuEokokHzNqHSZzXq5FxwgU1UFXS7cTZjZNHbjTjR2ZHnMfi8spuk6L",
  "key2": "9PLo8SHkDHno5KsF6mK5QqK7DybdfTtzHxftJ3JJUYnePZhkuaLpqP9ksLz8udjbpLW4weLKRb4SURg49GK28TS",
  "key3": "2Q6AEHvFnQNFvHV33qbK8GZG32n6W9LX7E6YFR9Mutyn9wuoDzHMJi5VsMCRRySfuxPwQQwvtLnbLWz3ZawmurdQ",
  "key4": "5f4W7Z9o3sLigUM738onrh4gMDXdSbFQCnddWN2GVoKzV93cHqPAJ8V8q63ZPqXC9NLL2ptXMRrRb3Gz82cpWxDd",
  "key5": "WtA62dzdhoXm1kJpT1SusXi4RSXEjAU9eZ1JmunrXTKHpZrMgvomNB3hKQxVuDj2NYJTaw1BRqprf3gY4ZzHszk",
  "key6": "2nMB9RkrTL7yWz9cm5NzLGZdqJsfrniKpY54aX6zvUCB45VNtnU9P2GsjemUWRKo4Q47HjD9d92qPq5g4CQuzrdc",
  "key7": "2ihWvDLDzCDBktuHMXThtK3PQyUa7wY7B8mjASunGehwgVmDxdt9aBU2mdhTh3bqoPbmMYqPV5ushfM5CcTHWiiR",
  "key8": "83PW2E3yHp9tBunjqrRT6R9qUxCTLoXzkhYeXu3iVyHNSyLwksxMpVqmPz7vyD6NBPsXxy83GVddq5562UoDh3D",
  "key9": "4apa6rnqoTz7Fdh4KHixxYGVw7YhV18uPvtWRRBuAD1rzCN3NF4wQXTGK4ZxXPyJo3rYTq8QaDhfYq6kmxM5F33o",
  "key10": "4X8wozMjgMgswcQUyGPSUSgsHRzaAirfmDWi1NCtAJBfz1U1SRdDWWKejCX5hwzaNDuTonwLuH5XeJuHV4VntDpE",
  "key11": "54pPH7sb9QZtMTWoV6rFSoDb9x5dwqbaAC3uZhtCFszq3NS8dgrMxM7Km6HWn9SYddiKvy2bf9GyPAXeQjJU4VCb",
  "key12": "2XmH4kkLLp9aYfCpm4YxAvh4YFM37PBYWY1ic4nVoY79Ub1uwAHPGBvHJczaX5QmLcqogYuf8MLemMwanghGKkRC",
  "key13": "2tHs3Ri6wVYu4Kw5QxtckDXuhwMfhWCRRNziMuncXZUjqPsqD2ZbfyLa9SppBbinkMJbzN4E1zkVULcCZXjh1GLS",
  "key14": "LZSJ62jJoHPBtkAsftZwzUbmPAoiDxsAYUEBT9z7uLbZ8d4BWPnz7w3iqwEUCNf8ASMbnWgGyBfVnXW1p3zpML1",
  "key15": "5q8j4Tnn773PfpWyLrbXNAmTDmX77d3waBtQ8F1qqHmirwKxJTwCajTzbHxz6rJNqAaJ6wuiwox1PGyQN4nzRASu",
  "key16": "41cU7HgWDdcpXSehmgWF5MvTtPoseXMqtiKjaN4LAiHZTEvBKA4GXQA11NNSSedknRjcDe6JmKW1fbcy5q1MGugj",
  "key17": "5wxeGjby2McXCWTUbVRXJxQ3UTK89trDEQq8i1BVEAJBqnQkooPUWFmdmGa2ntqQQn2pWRv73eqSVJgntN2RSgtd",
  "key18": "4BivR9oEtjFPR7MsGBYs62DjdbzRfza6NZoP6gk9wsevhy99YHacWUXtDiUGT5ybPVHbVeRBRBj1L2XcS2xTjWKE",
  "key19": "4faR4Yu6ySSscb4P1xDJuFe5SrgWGFFNnH52R3nPt82LguA3oidNwFoXyaXWuWcb2bSqyuBAUanewV4PTc54uYSH",
  "key20": "61LgWhYJqmwe8MJ5anS9C4DFEu7wz7ytT6gYSQbTdQPr2RWgRaekU2X22DHcEYMx3nCLgWESZZ8fJWL9gbKc7RXS",
  "key21": "65vbzQHGa4eCu3vQ5HDSGXbV2m2xsLorcoSg4A1U8X8Jc4svL8rpsLaq9YajhnfodmdyRKDHpUd9bXM2b5dY1ny5",
  "key22": "tchvugVA7QJGc1RQ6AP9a1yCBq8vcSNj8A9ECPvZLvydBrJKxYHLKib7KnhUGq2WkP1EzV42AUEyEq5g6oSvaLQ",
  "key23": "5JXjGMJ135iF78KuPQsctzR6FpTmUc5Ve4t2t7bSP1h4eGqxFYEkuuRvB7mgARSJShMHinRbSisK7xNDKa3JNgRa",
  "key24": "4Wx3dP87KxTgmgwy5JybV58B6yYgWpg8BgZLy7W64ByhW6GwJsfKHnRtogF5TACSdjXURX7oGHdcnj9Wx9mfQ6G1",
  "key25": "HxDu76QQVSsYfJGh6VXePdAG66DVX9UsRgSNHbu9ZCXsMRwiLbUpmdFEnv3ou1tCozAetWV2AXro9MM5VQ4cdUc",
  "key26": "3GmKpnnhxhMh7eM4cJs5F5s8Pbr6BT88hyxJuQK5ovqqh487TLeY7SHgt58rXg8gsbAymZMx922VhxnM7QNTcwoC",
  "key27": "4mtMgsBq9tydf1iEfay6nRhir3kayQb6A7yd8is9kLKdyA3AMiC9Zm11B74cMwgZdTHAGXzP7DMaWjnXQAxVhmKL",
  "key28": "2v354o5vWCCnGbASbWe9vZzswx2ZXfoaKKaXwMVfUT4Vs8wcDf3KJrgAKgD78jCTjsoUgH8Y84QXgHpjDe2yBE3V",
  "key29": "4x9gUoUERTHk9fRBUDnkVi7rr7QpjMJTzDnddNMsPqyyWbBuaQkbsJgdsfTsQUUHXgkaTzV8PnnXG2T5A6oMZSi9",
  "key30": "3g3Ter1rGUh52Zz4FXbPVqoyHVHUo2Rd7maotnvMik4sTazMxtm31K96MkqPNcE7hoqkvFR9428tPW4jKaJGj4RC",
  "key31": "5RN4Vzsbbr68HG7UUAxqZRfCzfSKLcaRmd9y8eSSN1SqLHprCrmNCYWZmYy2SsFeA78CysEEMh13CtUK2ww9mxzw",
  "key32": "8QGqa49yHuY3CcSwEi7LfZSPs1bdDFcapcxAVkkD5acok1yfyYpmBauCRuQy2pjCNKuL9K54AzxEczxShvjxqr9",
  "key33": "3DFVeWuxkhWcq27t2rhGQnBNndFeUjVorvLNxxYn6659cD14aAKCmJR5txDUfLv1TkyYVLJvdhFFRn4vMSyVVXRS",
  "key34": "4sXoQF3uTm46JrXraNS3C13eSKu9R7w2bSEZUiv8WXojHp9Pk4tU45tFGP26xoAhsKneEg5ju8j2H2iT9mBeP9Ke",
  "key35": "3MRMnskKyK4EUEM7Ch8YrkDhqyDEhqJHwRAfgFBsSbpL7Q6zSmo1xmmmFxTqa54qrDwPuLGQX2P6KsjQAc2EtnAo"
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
