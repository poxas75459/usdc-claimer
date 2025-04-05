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
    "5kfXj9h1V9HT4D1wiCMLPjszJzDL1XniWd22w3K1v2BoSvFtjTX3LwDBBzJkG3PiUjseHeSLcDeCDdJuKMCisEs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RobMdWiYxV7TDiG8xyK96rQgMPYMZdScHzBLdFxGxSYwpbhLjnRoixSEubhJg7WiiCFwDb5tKmqi1KZqYmXPSKh",
  "key1": "3NkzMJTJR4F9GEtKvscJwi6MEfLak4i7RwMYnBLhwKd4n5f5nNPTKNaf525LGu3oQFfPqjk9bSC6uazFwFYUjSwc",
  "key2": "orzhK2tgXdPmzgoCiLYFcGwhd936YnUK7K6u2yA4NS2bj5AhrjmnUA8H6kSZbc8X26vCNdhu7X5n6rmrLNVAHhF",
  "key3": "2F1ED4zGoTSmsTw45zf56zApRQZbE8Q3M1WGveY826VitsxRQAo1U32cSc9DboErJGL5T3oDy8JvuErGRjjrKWGr",
  "key4": "cCr2WrkEjj8TrCRDBnKJ3p58Lt5on9umpi2Gf3whukGRRbetDt5fZbHy5NSeRHto4TE7ikc1vXUKsevhaFCdnYj",
  "key5": "3Zt7gRvDsNLb9BdjhX8ZRDGFUvnXBRx46u4uvojNKfrzriRgPJ9wPf9VZmSdsmS148bfjpfbCZNgh1LxuPm8VBrs",
  "key6": "zuSNJC7vkUzHZxLKC3snJVR44bETXEe55F9wSg91HcyfhiHRwnW4sWKMNjcWj9j28EFUmDotYc28vEUiNNsmE6M",
  "key7": "4cdwHrtx9FFRzRGKAHA5MS9iPaQWJbfTPuKxgAk3FvtbYVWLhzpkjvkqc8i5HJmGE2hsVMUvWr9bsgF2PSGgHtZa",
  "key8": "5in87UnVL8UGTUrL8TKyGAPdUbs1CxtHRTdmtSSSEnnddYqRpUd68t1Ure9WhgAdK17kbC3ZfoE14As7hJMq5fSw",
  "key9": "5zpRkceNWaecFsq5KJyCqkDo76Wy5n7DUDq25hb4KhAoF6YsSZBdjjehFXjPPTG6BehR87GvWmqBDgMRKVArnkGx",
  "key10": "2dg5BWzJvMjJ5Apc7fALugNtM3ynXoiugik2g6n6gPNRwJJfDDGTY2QAKB2JAnYuMDP7ciHyCMQ8bFHmMVrvT2HV",
  "key11": "5Uum2oiCoWfEbz74KRRJKCGbuFXmbNRujviVDQUY4YuXtXV21GQi5HqyComwPKBog5GRFnNqueSLwxitDhLwd14y",
  "key12": "4bJS8AudLUW5Ts3RF4Md6PyjGzuiyqwDrXcnzTbGQd8mkxy89Fq3mTtzjPHBgbBjCtBeAj48KznYXQEvvwvBTuT1",
  "key13": "53oet2bKmzEz3XCwjSrtBVKDiz5dAiyxAQDHjEMvsqkRKt8QdZqULeWwgKyW65csMY4EhYinqWvcPucCPwNbyDCQ",
  "key14": "54b1h3tYd9VRGyWnmuCtLAAUjMJ6vFpUiAfvrTWLCiPmpYpCkvyXidhwPy39SfVH14BwgPQWPcFf4cPrEkkDKZsd",
  "key15": "47LuGNWpED5UJH3WdfX2wL5JaWA9cHUHd5DbziDqWoDj8caqwbbFaQ2166nWf21CXNWhT52BUDLxjzqdgMLyk9yB",
  "key16": "2gUeiX4MwX3sjPoVEjLXyjxazZHzgrVHiiQQ4prj5oSJK9HPHTGBEud5BevrF2rumBq3mwg9v1PtmZMSoXpmS2wZ",
  "key17": "4Y7NggouLmkbUVkZRavDdHKrgdT9FMP1v6N7c8c9oHdNieUz2P3yRQ6Xh1LNAZqCYPbPZJBH9k9aTdzkCgaMgnb6",
  "key18": "32fT8soymXNiTZawSChT8W5sySvCZjEEpqPZDLzu7Qa6yxYjVZkwSYvqcdMwRGGr8H3cax3wSemT2ueAVQchrzTa",
  "key19": "48w1zUMwNW2sTfYHR58SExxA7W4ZFxygxJXHVQAkYWJtXhWePJMJFMYiKpL1YY7ZL6gEFxDU9LYUpsLxhqG3ML4U",
  "key20": "2eeXkSQrvbCmJDKCNF7aoWcZUBReDLniYk5rGNGbS2g9b6xTbQTPa2ckFRog9WkvYaW5QCPCqbfQZ69xugb2Q6sg",
  "key21": "4qn5bCibssYj6BhVzuhJUrxpSSKPtQT3yjLKN2LHfuccG5XSmoTv59ShBAx5fB2g9TnQYdqd5PbAf8voXGJgsHFv",
  "key22": "2b1wSNssWYTx5caJaQFtDrvK2cTomTwgGmNC6T6KL6gYLDzysvAgDvGxnHYbDMnn9KKb2hkw7bCAJ1xEV5YAg1zo",
  "key23": "2NhPvu3E8VfnDnmmSUNptToW7MU9tNVU3afnRFnxAUrDj44zhejjpmTwGVTmuL99U6v7HZZu32PLG3uh2aCLqjrV",
  "key24": "Ub7dczPnjf89ysHSJ2eGF5R3ks1xPrVUnPBRrtdSudwNnEL91vcfohv9zY8VYQkEYx4EjDRqiCGWWoAnZwMgUzP",
  "key25": "2tTqNZZzTXjaj5kKqBMxh8TKr7TdhXi5CNQGreHccyRyj4JmUdUgC5LKV8BMjCJLRxKr4nkLucRMe5TExoh1rtkH",
  "key26": "4FnDhpBnUYoR3LNafZUmLNNiZjQ2CwFLGjs12JtnnPrUzdj3juyL5Coa9yctSGCyuz6gHJSwoy4sKbnXLuGynMG5",
  "key27": "23WGzwqtZphkoZfmd8sHrqsWaU6Sdi23JHnRbwssdeHfEdsps6C9aUmZimga8tQdu2UXVtMG2F8heF3W123zdSGf",
  "key28": "4NxubqHBvQTQhTJ5dkrPZmbw9D3X5Eq3MUxBDzxMyiSC2vcfmq2wC8U8VyW5WtUREpisEaqJin3mPiR9bBBTDYAB",
  "key29": "tSymcP1WCvtHL6nBNRhxySG5NMLQavbYQZEGMLMEiJyvaoRzAop4A4yym1TrJnMKgRVNjbhzRanHXsGFjjUBuUj",
  "key30": "2UNaUs6jZgEQPhwmFgAUZivK78GigAKrSG8cxpBRZ2kE4JSZbWicubrwsSaV8NDaFNNbnvuEJcG8N6gGP1B5do3m",
  "key31": "33qGX7YGCHiYYmLvVpGSjSRLv5DaLTUV9hoBCTPysiYShwnW6ywELDDp7CEPyAD6Ggse2Nr18fKsLyBqCuGZRa8Y",
  "key32": "JsGjFGfceLKRpLikC5e43GUVK5sV8oytPrxsnVidCohDuyGj4KKWKcsPLKzsqXsuZ5jp962BG4jpX8fGdX6zuuB",
  "key33": "2ywE9uPLXjyT9zZzuVYT7RHT8mrwF9cRvNMD3EZd9okf9MggnRSktPW3Wv44zhjLREzgMAe4tMtccxyDfsPYhRnu",
  "key34": "3rjVXMX8dkRTtRZ1EDYnqmMRJzgpbJq6xoNbMCLiqW75oEdwewiuYhDNUbJh2zUqFdeJ9jQ3yYrrELzVy98gJ5Mm",
  "key35": "VvoeEMrQtQdUuJGpNenULz7FkX53K7fPWpkLakzu8NnJkR3ff8Vqqs1EzRfUBTmrBpQuW4au1UynBGiKUYArV2V",
  "key36": "2KeZ7YyHWJR7aHWhBJYmqHbvZzykokzSEdMz3pfqHBv74guv5GZeHTVC5D797NKp3YSzfm3kCM7wcNqzB9GDZWPE",
  "key37": "2i3bqbGntNzMqcpjNFUGFBjRfHJWXiSEJS1W7HzEbTowiw5745TbREHcHnCZ1LAU7Zqo2qUEcn3G4ZiRDqWaoneJ",
  "key38": "4xW5CAfAWfwJFCVvqG8n6LZATGTns5HKXTa6e1c6NZPbtDxUN9jtXTSbkDDGgdnBfrPnkNxLx6eWrafAxhQkS4G4",
  "key39": "3w5oJHwjwa1yV4CkUKRi9CQmHMuy1feCbtZGvDo44JBeUGdYqVpTNYVppfTc8eauri9K6YRkyzKq8wAe6d57tFWh",
  "key40": "4MZ8Rtd29H6VxZdk9raL9rEnEvixygWUuLqSRyjaR4gLdhC77uktqxBmRqC3fFVjbxzmKJufU9LNjxTdndBwWwj6",
  "key41": "tn3QHRshqCAziwmjkpXoZyRD82WfdBffSHoXVTCN8Y2a3bGpmoB8eivE4w5sny5wBPKB2fVu9895JAneNHPny5T",
  "key42": "4KvtXsMnr3Ag7bQHpQDXumDJiqW7SvugztQu5fxgoCVyocB94BMF2grDZ7uZhyWMd3iVL4FA7J3mCJugYKSfzgcF"
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
