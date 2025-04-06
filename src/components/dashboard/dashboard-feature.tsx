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
    "2VrJRVmf7YewsghyqyM5EATMpSztyq2m9eqAfC3tqXDTTXkFb8pFRar9RikKxNA4zJRkKs7erbNpJxSTP3KTGyMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "enMr314VjYAr28ZJ2zbaiUiWTqSz9yP1pNqThASSiuVgmNMyhEvJfnKWXRe2BExkDLG8Eczqx29oqa8ytBCaxhG",
  "key1": "5tf8MZosd4JP46uhtF5xMXvCMBFppbz4bdrK7pHD8MUkKQ5JMsedhkjrD5zL6JZ3F6RjodTgK9bc4JPnJ4zjoMKk",
  "key2": "31XgtQiCk35FQ2NHwyCM6rLhPR5ycHgienGk8uYY2zjzEjrdoYjQoaJ6pSTtqK6HarX1qS9jBCwo4p6vD9tQWEQa",
  "key3": "3hjMaQfHuz457mB6CJqZizYh11pR4TGy2khxJ7PGd9f6ctspPBLRojDU9QWkC22QpiSRrnGtYR1XGDF8YEnTjFGY",
  "key4": "5gsePfX8HySctNNxMcPXrjBXjiMF7VuUiAJWokouZeinnGyQeQN3JH1i9bRrme4sYyBYiN6nkjjZbBEW1DCS3BRk",
  "key5": "3Sj4fhFAjbiAvUeUt7iwgncsTBZCDq5iHyBFuR8bpxr7duMPi9yhttMMzGonyDkSRHhEmJvo4B2vG5duLwLAgScE",
  "key6": "4MnrTQ3gCBx4MxSG26HJgRvjmFSisHnpT6bnszXCVyyMDyTDvhLiJzk68ucpyDEwz2Vv3eHeUSUnRbH2ysHaM2rb",
  "key7": "2cBAGEvDYMGW4Axvmt56Wdi2us62pBLxXzX3BPntYuAvDkweMmReVpA6QjSy4cWqA2fF6A5ooXxm4iBuoEpBwQCG",
  "key8": "4g1F43Cebr5Vhcmjrp45F5tczqVc1ieofe2BEHKhUAqqDrVCsQ1LrgUSn8N58VahamyQek6ZvpiTqtv859p5LvF3",
  "key9": "GUCzoERAi6SNUJyp7E98vjssRqkux6JX6VR5ixjDeHnaxHeXzoe1zc6aGD5hCq8joYnpbdgAGhwej4j9z6wbhnr",
  "key10": "4rTKKp5CePM69nNfJ9aTbZzNErnGNoybzmxndciSkAdGgZ28Ca84nSY4ecGCn5mriLx3N88JL9S7aPsL3sm4FYHg",
  "key11": "2roGrZSzYi3KhGVkWGiV4UN4KskxoApiaeiWaKRqVDHsTHejefVa86YRHJApTQ9NYYeQbk8kb1brkpbddxWcgGrJ",
  "key12": "zkEvFCw9ygzJrAjBxgEE5QZqaSM2BSJZ1DHpNTQARSEdtubf2i4AVikBBViJwaM7FZC3grUGU8mqZ3p3pVLCV9W",
  "key13": "2yu9ujB55MKZ33V1gVzcu3SJYHPP9L2r6ERS2R3A4yCRr5sWh9PqRdzNt11e7cGo7WEq85tcVyGJPBHHaCeFXKWD",
  "key14": "xvj9Jirnn8iq3Rbm3GyJowA2X8v33qY8yPvmjzNMqVNS7mKhUwxAKKMqhtHjQBiinAfiCJx5vocMRM8Htnx4nbj",
  "key15": "913jyb8mjsBVz3aiswgmFJJXLZfhf1Mz8hBvmPYJmvC6vxQrpEVW4zKb9ju8K8zgmxfVXARZRMEGf1iFCx7dZ1F",
  "key16": "4dGwvuHMfMeL2oizfKh3qyPk4dRwXNMXxAu1buPxx1uJusaBnv9JgdMqpP9tMP1qBKEUQA3vipgWyYkaJoeA6rsP",
  "key17": "XTbGz82B67MvBixKExQwh1AnJnxXHmxR4HU5hT76EGQmSc2DHQLQJNUbeC93peyDVYisFBDu94modz7imsLTzT4",
  "key18": "5XwwQyaDjFFqu6TQtDo59arWXccWmrtV83tC9RATd3LM4Ts6QwiTcu1aEZ1YDTUm5xmYoGfRZXJMLrGqpSwtE4q8",
  "key19": "k1whPtVQQgaUFRh4DfSjYqBj7emjwMpxnyce5eNtrwG6vkSN6qE5Bb5QUADuhp4AtCRRYe2j2Sza255jQHHVYhB",
  "key20": "5EtSMrLBVXTca3vPHC1hoE9DLmFwZsLqSerPKLvy87iNkoLeo8xFRufGCsivM19T1bFMok6UW8EmRmeEsFh7WikH",
  "key21": "5zGEJbreiDKMq1trsb7ZhL65yvEzEb9Wm8qDQSXN8wfpxYXQeMyxfjVAJs7WZB6VHTT4AEA7Z4mvgsoTePdcGgjL",
  "key22": "3uRbph48GSAMTTB8LoKzSGSWNmTqNSddcDhtL3LvGNpXbKLd2U8D8rTUecgUbzwVugqcH4DBdXLzk2U71PivqK6n",
  "key23": "2oD64SPQExWuka3E67EHDNYB9E7dHeJw9pVFbLzjB7PoFXUZStCwzhN5gKE1fj8EcqMP2Brmt95zDReB8krRs84y",
  "key24": "4ErAp4APbgWjg3PtE3DyCratgWmbCYUwUyVRDaRwDuQs7mRFCARwd3ufvG85HvwwbnWFcvxftPFYouXt7v3pTZDN",
  "key25": "X7bq9ior8Vqu13cs7ejz7Fo2zFMyNZKwBUk3AfVJ3Ydz7RcqW5SsQYLWn6PoyQPWC7r4Wx15RVkjMnmDAjr7q3N",
  "key26": "PxXpwMHJddkgX5WWH7Hiq3CbABYY3UHMKnfs3vQKyh1deG61k4H1GaUGRCePLj8jaCKGneM5iTHDSpHKkRHx9G8",
  "key27": "iaaTdBwh2ohA6SuRDEFZLE3akZjqj9PUW9nLc1tuWxHuJnvjogxHUXNgjpBowoVP5pGn7KvJehnk8nPbsMvRGfL",
  "key28": "sVp7qsLFwm6MyRc6g6avTBUn9Qt5fK3TesL8Uq65E1mdjssLGt2A5aqtZMp67zmrue7giLfgzHmtbSrFK94QdAf"
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
