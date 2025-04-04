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
    "5o4BsoQs6RJkUbSs56P3uCA3sFywowkmkPDgQ7ZFFuFAqiF7xTELVzjHRUuCpS4RNkJSzV1qRo7yCSYdf9o3MDfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZayCuxvTzchZYTSp3UkUuEEXAARjrDYDbbe9WMrsMnBuXkyWakWzhaxH9mu87y6ZJS6KaL4R3tJC3qHJmY2xf62",
  "key1": "5D63UtvFJjLFDQjE7h3PzCSnRKPQ1xAZnLpnVhf1Bw2Pn1Dj87b7a6g1WyY24WYk7bR69vWJRKKLwqgGxLd3XC9f",
  "key2": "5mbrFwsq8ULYq2vQ52BWubnCgbMyPnYqak5kpdhK2LAjnLZqXMBN7HnmuGmtnmoLxrKExNwW1x3sDXjgAL8UJQ76",
  "key3": "2oGEYe9hmQxNf9LmHCVNSposVa7WqmReSbypYR1v7bK7FtBfoRDqP6nc8GDTQimuoHuKmfChpYNNjX5quRU8SVwM",
  "key4": "5jq471AWYDph1FAcbQtTgViwg2AswcmWmHj5JeLovPaXQh6KF2DBTc3iAWqMwe8zQLL29pAjTZM3d6Ee4D1y3wfJ",
  "key5": "55rZEk5hgMqtUb8ZZ8TBEJnLVcH8ooUqnaUBdNcMTePsz4iqw6odeRoD6dHWMsKZR5UG2xTpoGyfrVfJexV5shEL",
  "key6": "3MHXs1E8LYtTHQvKp6dDBAZy4rodunwx5vqDXG8briMMf3319Win4WKJzWfTNisoge7e8oYo9m3zmxFe6bjbTufU",
  "key7": "zMC4VFe4ucgkMycZTy6aMkrwCPnPDRj7Ghc6KmQF63VwvAzyqj8jRr3jdfFx8rBkbGirheh4EkEoSjYm9vG6gM4",
  "key8": "WJTYe3FRPVJ9yjhDDQ5CtMQ2FEGVhVQmWsht5ZJXTL1JW528rAmyHPeb1PEzNFdp1PGEUuv25CEgC5Q2akGciee",
  "key9": "36G3YtyvxL7NUpfPtdSRdmnHKYnXz7BzeUgXfULtgJ8Pzc5Qcm3Ee1BvoSTFnWjCnm2jaXdhCZgvWgXEaL5N6vXi",
  "key10": "61KD2BYu3Pd227egeNmfsr1UtnxL44Z2ggEvgQZUDv6SEeWLHyehUvCcXeHcbHcV5Cjwu2ydcXMJckaKmeDYtFvG",
  "key11": "5dFbASnRATyA8MrrzoRaV5rccCoRuVyifN23NbBy2S9SPgcpkrsYYnyM8XQavQxghqkbLQpsoy95UrkMkSPF7wib",
  "key12": "5zKwMXkTsnWjJj7rRBGZ35iR8gmXDqsDkz4sc7GEkzTUKwP7YqQoyWN19SkpFdLfYFSd2YzkFf3bd3sGm6j4xy86",
  "key13": "4d46Ln6CYgp8HNUpvZc6acpJcKWs83qg4P2LQgsHiAJteu7Fhg3mZwKcMfZgGy4FzxL4Rd2g2WmhV4mWi5yENPQP",
  "key14": "3EP4MpCF3JKQHtXuW9SXjyaKbntg4sQemLDyPYQLVWHxpcWkeE57QkVP3aHc1Cyyc4GpECyz8vHZj1GJ3wqpinYC",
  "key15": "3Gp4nvS2FK9wj9bjAcDh1fYur6nBS5VxKb99r5db7XKHEnZV1GyhWzR4ftxQzHzJ9qR29xZ73UjkFuMeXNycT3Z1",
  "key16": "5N3ts3g5d48W2vBA1dLh7z6A5PgHYL2YgeZvGiyxRRteqhtvQQ6KcqR8yqdbW41CVeqaohRTgGKmSfhmbrX7YaVE",
  "key17": "5mUmmKL9yoWHEGzhTWmwPDKxF7JCEWQikYStMfG5b1iN9q3dEyxbU3k1ixnG2qHnC5YgNSkJzjCt5tvokY76q42E",
  "key18": "23aeCRDDK1mp5tdgPi9UEqNKKbxLCE4gS6Ddgh1yiQEpAC25wvUHkVFBvj4cK9DHXw2vTkwjnU8JnEzxV2LwhFQq",
  "key19": "37P3x332DeTCgNgmn6H4J4i1xv6jnztynmUp8gFedas44g3VDHtWViCsJ5HxCAxnSTt7tft7Bc38DPCw4mh49HHf",
  "key20": "UMfcMuLCwr1AfcYyCPb33kNBzw5XQwYF7VmWQTM2iH2J9ZM4sXigwxfC5YA29vzaCWz4ti6yGK3sU15Ldo4tcJz",
  "key21": "4qixykEyQWHHGehEe6A4JERXxeGFCyqCVACnoZ9os6fwK7kgptqyFsebfCFy9QWvA2awM1YB6pT8gJFSXdLpTLtS",
  "key22": "oUBXQw81in3M7N9iuc1mtFT5MttxsEV5Tg8NMEJhutPuRNEJnad4Q5A5va9zYZ5sAfC2qih1Wm435by31tNh6pD",
  "key23": "3oEMtFbzEcgKapX2XbRrxpzX6vWt3zf7oQRKs9pDTfaAWwf4eqx2YA4pHWnQeLjGD9PDryLx1mHp83QpQyCitYuV",
  "key24": "XAiYXnQxGABgQzRHwQj15DB8bMM4RxZZo6HzdcyEDwZsXSK2fLoVqPYQMcKKVRKqGdJ5g9Zu1d4Aw7LRLCWGcGq",
  "key25": "4VUr9vopEktBtRnQeYzFE8qrykZxdPYKTJ5wuqkSYjHkiNAiyVaB9HuWGP7N3YUMdUfr9CnbePdcgzfeiazEFZv",
  "key26": "3oYvHZjQ93qbMB16AKNG7fKZ3f1dxhqzEn4SBjG153VaQ75ZA7Y9hsgeXvzeo3RAratxWtLyRAaEJEnk7VLKAEnt",
  "key27": "4tmxMqdghDSQBFJewVgXZmnV4AScoPHmyMKNB2nKbW3rJqSHHkbckNDcv5p3bkTigXmV7tLWHgNa37hfS8R1Pgj9",
  "key28": "ew88K92iyQpFNAn8724Hf3YRAkWDLhJYowdD9nzgtSz9rCDATrYFxfZQbrgMcbqbobLqmAX8v1ZDMRFXh8WpUTm",
  "key29": "2sNssLPRfYDWS2xdfFp8CJKLAiZmtfHP3uHpmQbHv2qHoHrpc198Qqi3vn3RRDcRmcLNBa3TSdWXtKrntX3z7LSy"
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
