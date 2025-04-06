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
    "43mVCrwQPEKSX1RfRb3cAk3y8A1tndYxcmxAriQpwNauR8UDw7Uz8gyvh4XZZrsums17p1DrY99vmC44ZHq6KQen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jnQedLBaBXfVrkXSW1UTJwnSBwYmiRmXbCdkrWeEJKf1HdNSP2D9ERYVuk6cJn3CEZ19qMkbqf69FCe9rdERJc2",
  "key1": "4YwTkianXMeFBRnsNYpW2YDcY2XNwwXotd1P7DQyiMDPmjamP6RLUvSu9rBjFoukntm77U3htUtnDwYpoh7K5gF",
  "key2": "4DQYtD9JbJdDMxy7j6Hub27QgVa3AAcSCcxLPWHuv9BftReJuff1Bs8bbyFmQf968RUDcgr7HZxv2NKeP3JbbyZ5",
  "key3": "5f69xCNVvEubFxqorm1re9LYjYx3DwaFSj1XKrePnmdG8hXas3qB71kZ4mnJJiTL5ZkdD7YZdeQvvWy8mZ943kQx",
  "key4": "2zfzXj21EbGR8LPSPmtQVGXyCLDeAa4YfemsaTYAse42JgEnEjGdgdjgeneungy77jVTaKAo2jCu9WchmqTBtAbd",
  "key5": "26fM3uNSaNVjakTDWYrfv89voLiYVH7zn3udmF88R3qtfTHtbpYy9tybKMndBWisrd6YAMDTCHL9vm8mDiUet1Pj",
  "key6": "4jUznaW84xzrLebowWYk4cdKPfUez6XFZZ2RBhAq8quRHBzuzLFTRu16giTRQGcW56uD2Y7kMfgyWiPyhZWkRvyS",
  "key7": "5c2HcqPUT5jwBVD8HsMFkZRDMYzGhGnpNHYKDMCZY9YR3kuuMf66KXhv2opYEtAbJvzRwxXUfFvWEHrnAvtP3vQi",
  "key8": "4gsX7JCG4KpLnrWkUp73GftwTHBbxVBVbVvwCrQA3uuDaVgwf3hQTUtF1fUTZqCX5KvkbaeeNLuUfXF7PAYfGA7u",
  "key9": "5vBiPpWzRY9hP9nAih5HAJsJRsxD3p2acnm46XYbL8gTpHaSYfcToMaz62BM125jaQ66owWgXVXzsFfCk3XyhxcV",
  "key10": "2EmdqXdzbF31VrBNDLR3ozUSNeJtFgrzMAwB9xb2gSpACP36wjfyMjDUYx1rPz5tKJxeKvWNMG9ynmzESnNygfA1",
  "key11": "4AHEBdgUPDMJNjiUer5ZKxjaQ5uxoft96e5X5SidsCBrpca86Zyb1JZwvoUMMDHwnZDSdjjSpnEsD2BMfjLSfCj9",
  "key12": "56YRgjDmriyrpKNK6oDFqopuKQfK6gLGa7unn5U3jmE6SENM9xiB1nyb8pR4KCGKZU8JoK6YWXgfr4ohSk7gaGsz",
  "key13": "2mKacec34L5PHzX8WDEXt8U4Gzsbp8pPDZrUviVLspDwYCmvqT2UgTAkoEerxXMBQzDdzicXSrE2Y5Bu3VyK1fG6",
  "key14": "2KuTjYKL2dDsoAJuKFYQDZniHrELWkLbpqPiJroV3U4ZSSRYZTN3ZccG8RAmF32sEbRMsgVW9UkqjzdQbLewT4UK",
  "key15": "5E8QyWYU5MjKT8iN3zKVeWZC7PHiSLdnLRce8uBNDKDGeXcQUeFVQ7wFYJZh3Q3uaMKwqgR4dn11ff3v2hAeYFmu",
  "key16": "5wyjjjG4LnoPnTtXvMpDvEGSKVCpk3bJEx553YMncB9tSfmdXEeC7FitZwx8MZvpvmbPzSj5CPqihBMTGwSPcJFy",
  "key17": "97CCtMcdvctdsf5Fq9RaTDKfMU6mBHFea6ataeNaCu5GwNYAaZivJkkMvjGmqE6Txv23NhgnNHe811NDoaBKGwT",
  "key18": "AWnE33F8dU7Yb6nYcKRtNk5NyutS86j3qUs4QhAj2A36w1vS13K69tgiPDW7S6UoZ3WSd46aCydicTUZzqT5YSk",
  "key19": "2o4t3yKzqm1DEMTQq7XoNgG1bymQU7s7UJN24EBWMc7nZ4MKZLaFyfDt3ZpynRLH8vYeLQxnCvnP1bMe43r8mu4C",
  "key20": "3JAHabUR3nVQpudQ7FDwvv8EKDDGENLYSc8FBkVF3bthy2ey5HavzyYyAQgzDtotEG6WCXAZAz7WEEGvBqENsYbm",
  "key21": "5wxuKiraq6PS7TGtiaevKFNrJunJqDiXrVCknUCBsxS1rDwXsNuqqMRVhsgS54LX3uXVNitZ7qVUJE4EKEf4vspu",
  "key22": "5QejG1MnvZYwriU1MsWtsfspnZwJ3c5ZHm8hjeJ2XNs1NZGaFvVZ4VXMgbhowCPpYrKnVKqS6ngYRE3T31n3kUzg",
  "key23": "3AohY4KcirXJEobhdo7ydq5R6LdYECiD7JTP4kgjCrcHNAyxyT9VXDrCyyTpDPr55GsGM4Mct5xWfv6FmDgnK2u6",
  "key24": "JvwKk71QmuqAcLj5LS2EV9rPUJaVVgiLWPMm1nv2aREfuThjBnLm8ssZ1CRkLmHzifRUwKUu58Sr2MGUgWMXspE",
  "key25": "4CBTmzwp3ojAEDoyvaucJEaUVA12r3xbT6zBpBzTppcJ8J39jT8VNDkaTgs195KRLW8b4NjfbB5nsJNaLACttUBa",
  "key26": "5PsrqcBq5wHdJHiqg2qxRrgCeKUUUqxwv8DVYakisXqwLMhF8rZ1yYV4TvEw5TTfnjdmgNieP7cBMFKfpa3QrJ8m",
  "key27": "z3FSVfh9qxnqbzUiNzNJBpPAfBwcYhy9CqBWoxfuwSfpSg7qFVaLzZvP35Wfv4ZqkbD2UZwcnhnWLSrQZF2gNtF",
  "key28": "3A9WAtHCFo7pbDxYfJ49eQ7EXb2j6eKv5EAhEgYrtteHPuHKtq5MktBuV6HyTSR3Mxbm1fGZk3ESLi6hTmWpqmfS",
  "key29": "3kbtuopfSd9Esr5CFwL8U5HqT1DtbE3Jd8TgkYkSXAgaYKwsnRg2gUtUWtEbd9gTgtm7BF2BgkqLM3hG7LTJxz8V",
  "key30": "5Amtqj28Xj7ih8aEuMFDm6QN97gkf1472w9BR7QhEhNdZA64q7JR6QinoRcSZtyYnLhdn2A9qkMc4jseMWmDtcU7",
  "key31": "2pxXHpz5xfzzYXP2Q6a7bin4cDAMB4yrVY4gvnJvwvwuZcDGNpnpR168GxFfaPx9pJbsJ1SmyiGDd3JeKZ5GLkKj",
  "key32": "3n5nAsBDBxtukhsuVjUDCGxUQ8Q7umGFDNEiZmTHzxKRjkDb6axehv5Kcf48JAUEHu8kcxgbwciu11kc74hjA5MQ",
  "key33": "2RUFmat6dpw3YKjcJMoe462q7ENLS74oUaXC1VAo76R2HzWWK2f23ocnF4NeM952ogzFGs9vRaowz4WcG1PEh9yX",
  "key34": "ZNVY9TW5vVrThWgkKZdGuunAPyhS1rCVF1TA8p31W1C8mDPmLsL3YamJa6n83F3jWQRAZNdSPwapA91XE29F15y",
  "key35": "2aYSnXcvrK3Mjkfk3HgDdcUAt1cFdCJBwb5Q3KUsKftKYdXDotVPvTdh8EvemYr7mrHNQYbVs3TYCVZ3kQiGrRWu",
  "key36": "4SkqC4eKGRu9VcvYqBACLausNL9enGueZJaUpkYW6pUycXZ3iaBZuvaZgTrL7CpiQKoDC2vyrqWE7EGuHfqJ7ipE",
  "key37": "3kU3SrpN2PXEaiuweJMBvjLLk2Y1jpbMHrZKUib1ZowvjPdBSFKS81wMWN3oD4DgJhNNT9TMTrF5ZUYcwQ6NcCMj",
  "key38": "49HWYaLNVsx9NTo5P3TfQaEudyznA5rZXTrQNS3YKzcXRXwQW1LU73ru8fWEFFkc7HftD42Vm29T7DhbyFmvJ5Xp",
  "key39": "5Az3qkFvaZTHbH5vnaKcobMabsEbTLvTd4HWbbHDfuiZy2JroxCUCmLPcuc4Joox6JKijwEY3hEwgE8qJ4MSQMzT",
  "key40": "4JdiZVNddwL7BR4XCLyzAeJR1WyeXDKvVtCuiTwWKFUvUMdMsHDAWVwYujJ8Jb3hiSoRfMGziQxHkxNysyeQ6F9c",
  "key41": "2zWuBKwd13jQtzs3T1zxFfyQzV4Qs8jtzSvp7YNGVJcRyWuXxJ8joHSQn5ciVqTj3FPsk1y7zuqXo8WcTp8yHBvP",
  "key42": "4jJyNhv6vXD8TAMSthyphunLNALgWUeZFXvCYYkZf9GTGDdXWu8E5r1UXe9S55okiFRm31Hh1J5W4kBQMxfe4xcs",
  "key43": "5vKztTbKTdXQWVuTnaLHoXqMuoTVzmefKjgjtpS5QfMR5xHXPUfUxWfT4bSH2LoecKqRKE81StbyeujnbxqqsiMN"
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
