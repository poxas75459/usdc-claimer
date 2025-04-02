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
    "3aherDuqC5XL164U6D7VnHhh8zoPysbBrRwqzGW6dJBSAX8QvrD95ngQmNHBHn4rt9unyJr7X9GN765GgNoTpVXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WJAVwEpyHN73qmup7pfXp1UXpUCU91hc2oYYD9G9bG8g7yhiq5feieWHTiQ9T9JS5UXR2PUzqnuQDL4VyeRpSZr",
  "key1": "3r8ucmTJQHQFW2wSaMC2MTXQKwPzqApn1j7CPZPj7fNpnbwHjuGCvYsAzhT4HswzyPBt4Sr74nDTZcFwMKAiRUZo",
  "key2": "GYxJ3guV4QvkUFyV1SSM29Gxobjg17hzxTywJGo6igygh4ypksY36CiJtFSsTZU6ghMjqRWqo9xAwczXYQssxAv",
  "key3": "2Sjc1YWUTYZwpu4gqvCF5v1wMuP9an2Am1eZmq7gcRhAhnmrnVAUqBvweufGrfeUcQqEMKxXq819mxY9nxRNn8sA",
  "key4": "26izWemNSKQJw4qzorPz4Cinm8CoSdGFKpuwVBz2BcKNdZJEdvtiUQJ64UtYeV1FsK1EXK9CQVUAiiDYiM5S1QuL",
  "key5": "5S1U9JsUDR8jKiKJGkMWQbackxnoP6QbLfkhANBSReCtSsusGV5Cq8PKbdBZ3sFodtsdF3o4Cq3Dx4x9YdmzQhx1",
  "key6": "4WvJKVSYBNmaC9GraATqGX4nJs9tFxGi69i1Wc1GgUiurqTUYAVkWYcvUi1ebBwxbKqq8F6Zzcd7LU72rR23eoKA",
  "key7": "4yK86En5whh3mqXXEK1HCr9M2guVEVEt4VXE4pgW6YECtpcZQg2AKgDJNpmuUsZmWd5ugKnZL2358MeMemcebHjb",
  "key8": "2DDNQHFzm4HD2oevWV4mpTcoTDvt62dkMvPxENg8H7FCe3wv4Wq8yR16VcSK48Hb9LfijxxJAEx6u6uVv4JvPmVm",
  "key9": "52wzJ58xrLUsVbEPhnK9XigkAzLHviEquE21zNSRUWwmkWb9H6Jd5CadcszMc7mSwTgSUWwcoCXg5moebXGxhRBN",
  "key10": "2Y4PGZErkd3jRsCdar4qigdEtiSiUgPW7vor6NczjsVgJMvY8LyVLLBPsRL8Lmv97WYV5qShxZdb28AUQhY9bU9R",
  "key11": "4fxLhPMgohDVrNvEdckXkf31bfsbhtTftt24tS5M8ip8yGrYwye5mkAs82EHCc7Bkd2i2WYfALXrhodTAoHr2gDd",
  "key12": "nn9ehXn4aSYfrnXZq2VEKufxf3V4dxFHFkzHcivrcUwTDv9ma3AKNG5gLqujhrEmzFJMLxD1BAtTwZ4BSmwMjfG",
  "key13": "67mravHDgbZhdkZeCfPuD9mboikdYdnJkXhVJYQpzv7bnCFQEutbu6QE2F9n7MXuZQH6tDDCG9f5Kymg75sXpagJ",
  "key14": "4KcUySgi4ntJGGhbBDq7Q6w7zFqTsBPApcSBgGbWLavFwgbnTkr4vCaDaMhSKibcCPVAHBwUbizszaPgRHXsNqPu",
  "key15": "5EdrAoDUz9P8cXtfxFQTByjidd8RnCC3TPhxLyZ8geMUFjAReJsqVjaXaxyPwUXnXKx5PMdmR2hDsrzxTuNQfSoX",
  "key16": "3cBZCWYbxPWCzpLhN5sRDrNfpeAhVYV9A6LqbqeDZMKRN276UvruGsZemFAccZnC8MCdnzivUngcvDxWS4ADcpEd",
  "key17": "2r1bHTLYLBuzPnZqCnSzBMp7A3B5sMSeJ9MvzrPqeycDWG1ThEm2Rtujw2U71Dub645MhY2jVX6gJeTjFS94Zj8e",
  "key18": "5JYuG1n5XazUJvYDWBAugYkx5w48jDZJDqReM7LHNVMn7GP7D4h7c8aaavgsjYKKCGMi3H8HHb7DgyhnKAnV3x1t",
  "key19": "4C5KhKyXcavghWAbbtfuvkSvg8sikUATmqemTcqi4z3PUCMCceS5L1Z1msEZdU5CBwppKeFjLob45tKF1LdcGUDN",
  "key20": "4ZTz62oay7GrxcYi118aySvEn3ASEm8nXSn6ozJtSZGUm6tyziZpxBEkUfDvzJj55nVw1BoU35CPmYknWdPhqxSE",
  "key21": "4kUCvRr7txtYu7d679yu3HYAueLUDV9nZExQEgTWoqFQzCD9wGZfPeH5grXjAEDo5xA55H4yfA3pEkARkv3fQCmC",
  "key22": "KuTgfF1nFfa7xiDPYZ1E9dUJsrhzKeCVkncE2mHbQHkkdty8cjKNeYJZEuu8HXZUraQ4SVmVjCfNdfp8pgEBkfK",
  "key23": "4JsAigraaDJ6ayNcfqhDhf89jES8YpUKjr55wzvbXujnBbr2eGqwiXr6UFsvKh1kCpufiCbHuUEWfb5zBHtEJmxo",
  "key24": "3MJ8UDn7UVAVRwwKwFafUqpJBezrkNGyRGcaAZyiBLRoRX28TvbHU98P7cEVWM6a6QtW5Y7pzCcSkAX7borePFQj",
  "key25": "qcQNxog3ZNcKaR44Gkf4LG5fKRmxjwYB53vpW9ahMPtrXuaFnzhv9nwfYXMcL8wD68LugZEFiCKYupcREGRh3Qu",
  "key26": "2ouJVzX7TGod2EBsnKe1FnBQHgDLPrAMVQ9y5bymXZBu82DhCfRe1ZnUkcxEYRmYNydVYbpciKSCt1hEL376RWp1",
  "key27": "wyTQ7t8Krj83bzv5o8RbLP6JYh3aYXbYrSWpzhCL7tbxn1ZkgCYvUnfXCc5z5vJDS9w7fGvGv2GBeDB8eH9rnVt",
  "key28": "4sX2oYEgJKVghQpYa1rQmhUZPDbroUYg9CFr9AA2ebGs2FbtLF11oD4aBC2gi34mJdjgurcVm3s9pVd7siN3CPNw",
  "key29": "5F4rRU82gwrS8srjGk66bxRBuEYosoPzQNxJW3JFnJJF97zMKpGhqobkESF8kWLf162xPPcUCTkVa9HjnkYL36kW",
  "key30": "4s6KDKB4jxCqSwFG6pZ7NPQrCLKxVYFWZVCh2ytY3y6eoEoeunGM3bzTWUpQvnPkVuyB83sySmSuH2u793NDUXqL",
  "key31": "36N9rnzvtACXB13cLpd27jueih3N8QABD7z78audXzCMmKEG5LYwwWGW9mdehLLW3BLQh5dyu41sNkgQK2uYjKJ9",
  "key32": "5wir8KwXQnHvqNTn3XGj4pk14cNJhe1cSTPPVvXFv7cHTTGnmrXZJoDZhQxLXZZdHhigtA94qVgaT6v4PbqA673r",
  "key33": "2WzFG4BEk39V4kuxmSJXj4YnCc5ZRLbwMPsDWctWE2JAbNdfhpEHGg8U26dctw11TmFZU1RtgdPexVFQk1ZfkWvm",
  "key34": "62ybtcmRJmykjHvX5tbQXbjJ4jVNASx3aWjA3tRmEfvVgyYYnMVGVN2xkjccBpcAtzwSY5d3TNG1VbF85chktsLz",
  "key35": "5zAVPeTpj2tqNPYqkfEWK8b7r63JFUR4dDcHhDcHAg9QqtdgowBBfwVaCzL3XAuTBmYGjvnnykPhuQDiMHgWnr1R",
  "key36": "5hXqhgq2e7sQmvorTccTeB9YJh8Faugx7BRhLTRML2tRUCjtz7pao2QjtD4U1gMtCVaR74vDyhu6YnWjz5fQvs73",
  "key37": "21fcJ984d524JxFzJ8xDL7Yxisoe4ZR94ygni8rQz8WCby5ykgr6rz2Reyjd4NZaKsaNjoySawfNvpJbKZT43tp9",
  "key38": "534fGKjb5r7VsjcgiHVjkYjVkp2Ep8rwy8jN3S8nyV1B1cx74P5PXqzYKQcfAyZeyV4RsJ2H9uAhCz36GNqjmGTe",
  "key39": "5bVtG3rvjyhHkrihGLjTJR28QxpHUh1Jf9KgXFH1Du9i3QifB6mLSgsyMVxNhUGX7q3XpWmQqAZ29oxZcDBcXcZy",
  "key40": "4AfHwmDc9SReV79Sve1VzEKiPqnEJaecqUvDQuLkB6ysV56RZZkrLqxhd8q7r4znV9ikamYs671DeaBUg8HGWJib",
  "key41": "46B1JNqRjL5c4ARSyXNKpyby8EWAAVeVamv9cq6DWSEAKS6cpLoFqmbXU1VwDNXCJXmFLXx8yFBYx4bXXJfratVJ",
  "key42": "3TPBVBmpExqp8MjToskgEmV9MQqm44kGcVn7KZncawbh53ejTzCfZ3yrzene4Yuf9daLwGwEoo6M2cT3cwjg7oTV"
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
