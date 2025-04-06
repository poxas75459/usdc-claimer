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
    "6ksGk6TzzEnKwwug1oejmqUVZ7fYebQWTRsNWd722jcJjQo6tCi1RBVx3RL2f1iXYrcHXBMabHTMfTqKhBDLTeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mDvoMcdZeemqNzWW7eUfU1mwrRYeBJ1bypJ38Cf5sBNJLtsEcAMdXErHi1Dv4nxBua7DB4tcGgKBYt1swzkcxXZ",
  "key1": "uTzv5feGEa7yKn5WHkfQJPk6Fx366Yio6Mshgrp6uzFenuLL6tdk8arHZvU2EV3XmDUjfjhFnADj5wbph1V9jfb",
  "key2": "2s6LjeegeeSGzQxiFndDQYKQaWwE3fULh67xJ7ZsXcBy9d1Wb3YCQJhzQVmQ5CMTpYpFZkDWxqrbQfjozPxMcNBy",
  "key3": "31BR3WMVYStSeCF6EmjMhUZpFAD8hgrgDU1TdiGRpK8HaMseVsH7MyqhLnNgMsEg7B7Q7cRJyJRfKmfKJwBd8Pyp",
  "key4": "3mNRXnLvh1GNPijfmNzumCcAEP1qzte2Auh7iTebUqzciRjUaVMQu82Nq8p4SiaYReCLri9NmMZEdMHNFaw3UWPX",
  "key5": "5gny8NFwGsoQRPHgPKYNMFzaW8TaEJMehhN1W2rCK87iYHxNaQPecs5F5v5TAZRaXnQV7Vw146VAFAX9NQrV7nUt",
  "key6": "5homEuRfQkeEc8b9EPQQQexbW5m3sw9hFMaGMyvp1ZNmZSXxHcym8P7mSEbzgZ5rNhiNPYGa2yev8r1UyKUcidSh",
  "key7": "yZP9tqxjSpRtvyeuDn2CYTSrCTFCMyqecD586QU5NjJbSaqxiY4J2iqzpd1cjMcNhFY1Ke9NofNzK3XYLY9Kiuc",
  "key8": "5a7K7PftcDxLZ4dt6z3WMbV3LtffKoZGCBN1nsdQSbB3z378BJdCSg8UmM9xyThNJAaxYZ9x4CfqSQnbbMG5DzJ",
  "key9": "jEDSnC3Gpz62Q7tUFVpH6bW3HrBpUvJQQ9dp2VxPw3x2nP6mF7K2u3GmeyyqvfjVdWbtZFZmZyLv3hV4ncvyEy9",
  "key10": "5vqyBw7G6EATNFyZJVG9d1b56uJn7cthtsRgeC236QF8K2og21h6GFT99FHwbqNoPDgigPZU2pJak8fWwuiMifZq",
  "key11": "3LL9VV8zgsYTZBzxbxCtBy9NjBHj6dg3jFSQVn4Gk7WJ2cERjYia7P3rg7NuCL7YwNnLj3MxhA69zfmHUoB7CUpe",
  "key12": "44jiH3Tw45B7DFycQaK2QFVUeigdHt1MECQryinBDi3F5mLfbkU2iWexd578sBbnoL8AEmF3o1VBgpoXBVDRVYSG",
  "key13": "4FvscZm7G6NtvkoH5VKCM5Zqp1VmVqMtB6TyENTkQr3twSTRfRLKJRZQJBJww82Co3kL71p8zEe6RhiKtzp8BQoh",
  "key14": "4nE4jETarf9a8BtYjwZZNHJyJMcK8ntXRWkACcaeewzhHFjYQVJEKgSbHRkiGWVzsfkqM5U8jXFRDQwa7WFD3U1V",
  "key15": "4TXvQzuqkG8emSEy8t9cC6YAUaw3TCqPRcSTQSKveeC67aFzikLbiVNJmMxfxXF6Ei9EYDSCYGvoPCdmRwFdYuBB",
  "key16": "5qPtSFBPQ9f6hHMxTbSyzCL2Y2JXnaE2a9vqkgBEFoaGKfvk4i3XrvqZ1UYL13hsBFyKo41Pk687FjSSjizkoaey",
  "key17": "2R7GRZBEBC7t2xQYLT4KVmY27UhxkvrPvbrm6FQkqozpvsp7iVP6EKdZvXQY5ViRgyg4qKSXsVCgS2t4TRCP2Gzb",
  "key18": "4U7MqRCLhJLge8iDbdferggEvpt7TZS2RztcahC6oaujiAXZW9pjUVyoFBGA3qyE8h2hDxwB45xPT6EFgpdzWr8J",
  "key19": "2zvitEjpSt82cKopYoDouSG4jaQdyhLfqu6fcPaGaievEPK2pnNPFnGdhetcdwxiFeM3v9Aw1tBhTdE334gBxC4Z",
  "key20": "4Vw1DzCKwSRHzk14Ue4Vot94tTfBmFeN31svwzU6n9MZCndYZokRn8vJpLBzEf6tXLJbRNYLHZ6i42VRTd12u7FZ",
  "key21": "CxT6YFwk5T8xYiHQDv3hM5YnN28qmTsLEjCZaWLhhSjMG7mVvHYQHJb46gDpdQdXfz2E23gf6PTrd8fwV7cEEmR",
  "key22": "7u9Up2cTcrSKQJNaTrFo2U2CeMfieDuWGKAPK9JqLTjpZHfYtkqMt8Y32yY3zegGu4B7CxD2ZdG97bFhH8BXr7x",
  "key23": "g2kQfevoRPcU638fdF926CDyPk5avkBVAP254qnGptcqnGBKsxhZ5kEchXZhnYyiN2us2aL2LhaL87BagPGmAKM",
  "key24": "3NNPiVYvJJBLYpfehPrDs3YnL9FxS1PXvKr1Ee1jsJC6mCbNMjrh4GZBjwQyHyKkfF5YSahqxKpzcAeWp1dcVoxg",
  "key25": "5BiGFmosupAcCTcV7CvSzs1Qx6Q9z9yLXNcDe4Uz7MyzCLimpDtZ1o5gzENJKQ29J7mJAV1L5LycEZRbtT5FGFdd",
  "key26": "62ubZAxjQCJrY9n8m6RK914iBdUz8giDo6RgQxAGgPzEVRsTKBPUvf3th4CchWD5fsqfeouqT5s9U4y51EGj3Ko5",
  "key27": "53P5x7TsH7gt6gu86WW5BqKbrhRnAe7i22j3AMGUNd3gEagJozNYaEjt8Zesg2onwek7eHJhddaEoY8pgjV75CMk",
  "key28": "24Ei1poqC2ewa3vKPG5Psom8Po1rcSJZxQtC71tm5wcauwkFYHKnafpSpgazU2Bjs6QXuK8k3e1p84WcCPqzArhi",
  "key29": "cziA6A2oeXnmGztsFA1dKFQZAtuEyR3tMPrCEvex1hAJEbVD3EwSjFRwGwM8CgjekqWJxVUKAtJMJqGng9GK483",
  "key30": "5xkJdHUcFt2JXBS6jo4JfgaBg14ZTdDevexhUnsUiABQYFSLU3HCq3jR4hadjGXWJuQW4BYKkYLtcrYLAZTY9B6K",
  "key31": "35pybAyMWi4rShrMxy2PisYheRF7ysaPvjHFmhmnLwof3dpa3psmDbKs39zikwmrSdgBUZ7bykwLAQqoARanz6rZ",
  "key32": "3NXZaqdhEFNosQS4pznh7rkLXyMFnA1j2sMAeqjuL84P5833DV5doDEB4kyeneQB2gfHi24YDfCM8nFZDAoxUHg6",
  "key33": "3A6xVbHWYrutrHyU2kWfgU4GhDqjahW39tCHLC6WgtgHKX9wz7qfuTzYWZMrRZfh32mFk8sEReBbCfSYdUDy2ArL",
  "key34": "5AKpPUf28FSaeaqKQAHUEbv9v91fAWCJse9Jk8DpHPx9Hoh1htXT1jDbRqeJWvq7GiQc89Jjjp4uxVhQXgjBs8Ft",
  "key35": "47ZbL7Yg69sCRiuo89iaKqtgR1MZovoe6eYPBqLuUZ26q2N3cbKbZCWRxNefKdi3c1aUNDUcRyv2q9uqTrKcenS7",
  "key36": "4P5Gafbk3pX7W4Gus4MsVmX2KiRUTA1BaCU3jVAQJZpCj7GTQfUWuA61hy8VYJjcypNLu2mvJ4eHFPb3rbRmooGF",
  "key37": "5HqpBpCaPvfnsYZty3XRuxMEmYX1BbSGYXuWL3UBHheSrEMtBZiTVfeAR7dYLvSuJbgxVzcy4SkVDq9DNSbhLgXN",
  "key38": "3B99toLYRVyARvTijf1oHecae5oA3WEi2UnUMtFkkvKw67dgCrYrmTQtMv9z7v6VxhTPEGkV2TA6MSuwtcQ7LRnT"
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
