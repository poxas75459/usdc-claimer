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
    "4siUBoK85FyuMaoJUYofDxBBPuTvgbsEv66MPS4os2Bngbrx4zNbRoWCXznGPe13jCMfvwUAxjVmPLDGoAVZjMmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nhwbwHEh1Zwk55Jrxoeziq63mJy6E1RZFMd2JKsB7idXr2TzyZ6ouxMJyDJwj7krEVeeMykVtjyT7Fewe8Eeoc1",
  "key1": "2VEHo79W2j8LRok9gTfj6JNPusEBGSbN6r3qNn6DZvup5bTJ1kdDdK4jXiaAVaaytrHdqX7X7yqPThD9EbqayosK",
  "key2": "t9Hk1uzZ2GKyTnAzwyizUoo3v32kjnMTdKe9LTzQjXu4uZEJca79XTitZw8XzPwG4prUBsZEZjdeHijyxgqkgEo",
  "key3": "37qmTtoXpakBi3LJ4CFrM6CjszNvcsVUKtAeBAY3oGSnbHtgMnApR9L1hTdw1a5jc2YaK1DyFRryTDriMyhDZ5ax",
  "key4": "3jjXs2TX2xMSenTdqS38vdrtUD6iwfMsNPdiH7MZwX9rNHpbn7srFP3Zxwk2bRmShSsavFUTjW3DYAhrpWE8J2jv",
  "key5": "5oovagzV45KEB5k13AftyFEXaGevzu7ecRwoa5c2NTQUR2gDz3mJQ6MUPk8HPdWWWKGwJQ4XQjC6kv8BY1cNePjA",
  "key6": "5wqRc53yrt1vGekSn7VaDHvNTEeMYLtGiNvUdhMzwVh9qqkw8Q5BthaSvzMPAKJ2JAshJcCYaJ4BL56uN3D3gq9Q",
  "key7": "2q2sbQ1QvNg8aXfAHNueAMzmWUwHDSdZsoLJsz8xMj3BmpdscLc39EPmM9TV5qS1kR2GG5gGFCs7p2yDdbxkTn1a",
  "key8": "htSGYxS9Ais2ai4B9pQzJ2qd7Ltg1bhgciFQmBzDJrgaCsEd8hjx5h7pymV5oty4E4f6GBqWunL6ccDsze4Zf3H",
  "key9": "238EgqSNKJtMR5tPi8L11iwsq31KroL3RnuDF4vYvpL3RAL3wXjD8mfokoLA54de3M5D8Wn8jt6Hyi8Hq8mTv7KV",
  "key10": "3RhytDgAw9oP8aZYJQA7yRaipzD1Jv9kDgPsgXJ7y9aUyNUBUNUt6qNg6f8vxtp3JfG2Sqzj8YP88SfSBtbsiYJr",
  "key11": "4ovYBSeFy65guTm1LREEyY9bn8FYvPupKXGTXyNcAwonaxB976stviCGWVKbpowt9g8GYfiQE1sbH9MMboQmYaSB",
  "key12": "3tYeQcVhkUrBdfLz7iwTE3jXjCzJCRzZwqxwuW7fqCj4BBXGcqExwxhPW9b8N7cZSKmHC3jJhDT5gBedNiW1fKRN",
  "key13": "4hDsrUyfFTTkYMqra7v9yBAoPHJeBz27HAKKSkPh1oFWSvsNDMkwz1V6u3v1U72o1s8FniRztU4RPaYQfDYmoDEP",
  "key14": "3UmHN4UxpLUiQ6oRgtPkKWLKNt6WZYDXh9CSD6m1XQhnQxEeuE45cwQjA4DY6u4GW4Zk3ayRoh2q7cD8HtmUcAjR",
  "key15": "666FecUqW6mUZGVkt4WEdhrxP4WXKTbsY72GS1USWYbdz4q4Ks3cxiscSHLHGcwxzr7Txnuc76F1XCfb6RcEAUxF",
  "key16": "4ijMFGpneV6HmGfoX2zT5XfY9PAq3VppoegiYnyX64cU1c4pdKsuihjiRJtU14GUmWW19Nd55CdMoZ7DbDvHNRhc",
  "key17": "mrBij4BxXx56jFFJkxwZSLvKmgx7W8C7XBP4qDpkue5JhaBSxVJb3RMYa9S6Q9GCVEFFcZwAU6WhyLPQmbZkFQ6",
  "key18": "2AxNHbKqZ58fBMR9LjnLAD6ue9YgrmZamuL2wEiyeXEiq8Vp3Sv7Ue1EbCawBFJfmGiBF8xqL23ZkAVtu1JyEr7F",
  "key19": "YSxqQffM3J7Uz44qmVwMKV7nQtWogExydCdrzJ2Y3Qk9pifG3YinypCYBY5dzpP2F4ozCrRV2zSszpog9xAT5gR",
  "key20": "3B3b8176GA2UyvG9aPdP5Mny6saxrgmFP3dF1CqskPLFTXRiV2NLAErr52Hp9s2BDmAK2ruY3SN8cca3Z3jyvaA1",
  "key21": "2fMrAgkMsWcUnLuR5V2aq35T9EB3qmaCZHA8DMEAWo76vPjDGKV3sP2KxrwkzSK57N5WN2knUeC6NiNfvESZaLtR",
  "key22": "3UZYBvB3x3BJwVxe5YFuXzraCuFDqRJKwtDUouiTztNAnFd1TV6eSdpaFcRQNHdvvuhYEAGnbzZKts1ATQZposVQ",
  "key23": "2uxE8uuRfSwgheaoHvK3AGHite5m3Y7RCgJQcJqYkj1KLcdzsrmYA72sVScHFp2mDKa7AjBt4gJm1feT2qjVBttS",
  "key24": "5KJfufWQA3EvL5gPAZ8DvXeHbf2T4XAdBLfDd12o6YLcwpupkg3jXrM4xT6Ji34ZaBQPfrgT9QSXVGKgReecHGQV",
  "key25": "5tVib7UKHe9g3fSrzkV8o6PqLUf1V2o8ioudaDzP1V5GYzoFqY8uA2YzWDnABtnWZXCLXwuW4w2KNNQazHDyZGGg",
  "key26": "2zSJ5xDwYabspVivnkBemgsBJbGDfd9uN47PSw2WAc9B55PirMvFwibw6tiKTTyQzDY3rNvfayT3tFQncfddLjqc",
  "key27": "4fE5vtqqurz4K5C8wqxifTez9jz4paT1ARSdhoMMzxg2BVHmUn2ESvJutYrUP7aSNXucRWjQWjnkQ64X5NtNtN9d",
  "key28": "4tp1vVTkUtf8fLmn5BegUVQBq2SKEnUg6Ku8iuTHupifFJ7XaqRxyUUBUjJ92wg7uFh6AYincLCHvQjhzEwhHgvU",
  "key29": "y888Re2XGC3Hnj7mXga2GagsCwNmNZRBpUbyVRnkEoAgEHXKuzeYQ17aM6bGD5mw1p7f8aenTyEsvDUvKUHrKNa",
  "key30": "29ggN6TubPqzMHAPpcpU8tGgZsRjh1rArwy386HD6M56eCepnvcLbJUkKBKzUQFSQN4RZoDBUb2M8nE673cHmD3b",
  "key31": "5rtT1k6GmoUDQRHznXtPWm9a6Pz1EWfUqMP4QzYjY13xaScmunRM3aHzuJ4ppGWNSLGtMWC4ZyEf9WPdVnneNVRm",
  "key32": "33F3f7CZ2hmx7c3zRSjEnpuUTZRm99ghYG1egxq8QA6UoJWAwJq5qGc3du5ZhT7jFc1z7VxQJLUmeDjDQsJnCM5r",
  "key33": "45WTA6mrtxTqB6hHYpGp5HXAmvK8TtWMT7wE3xUrWHjwqvvXjTMmm8miAa82fS5gefW35zbzreGjEUrHEMaZ2itK",
  "key34": "igUBSrgsPNj2Ujos1dSxbB1DxYBik5vwj5RfRLsiDiAiUxWRTz2nAwVha5QoEXRqBBhbR6cY4xNQ5DHneiqKzvU",
  "key35": "V4yQYTXxVzoAwR5mkP6WEUAA6JAXYDYsemLetkBgqTNPXY6C1PTjw9hrDW15fa19AsyTV3YjiHEhYiGACY1DwvJ"
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
