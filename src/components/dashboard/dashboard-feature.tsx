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
    "35BoW8qR38XtjtA8Xk3uiYK8p5bNHxt9NLgDfBteDCTn9D2ustMhUfkQsW4UX1KbjqJGbRxSNMmgCTxVCyDDJ4xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UUmN9wiWj5Zjsi5LweGmaSCMezubsDQXeS31GBSSfVFa2FTcGgH7NujwhcoHFD6iLAU5eGydPL1e6njsMjW9ioT",
  "key1": "bUvKGLkWUynghqHyacCbuzvycX2hTPBH3d4NPn7hnPBxVoYk7LpAGkACUE5Pwov3CqpZDqWxABVFb4WC6dCM7N6",
  "key2": "3xgUT8pY2Hr3anFAdTDgy1L96fgc4bzr5AHMVe8NSFnVEPm3CfKTK2ssH5zxF6hWLAatfT1dXDDSdxV81gCesXSz",
  "key3": "2DqmkHe6onQb4kViiQAiwvHDZ54yuHVtRUTARwkQpTFob37aPtdH57cvXweoBmLfWyk2dx79mTxbfjsSW6TW5ywX",
  "key4": "By1gGWHMNfYWHMhopmENibJbSjFiyXsfGvB5qA29vqUoZe9PhQPDgBnnS6C7VfFJuu42UCXKZ4EwnGpkHZsbkSk",
  "key5": "48mRaqV32FxoLh5mJSv9KZCVxKhjw9Ni54KAEmR5gBHopoVqmvxYVdSsLGJqUej8Zq3m1Q6DEe7vhoM9BAktWk7w",
  "key6": "3aQiLdfFBcvcC3qvL5f8FQQgcYYRZXVXSy1S8myNrTTX157sQ5YqEqZUhoxjhS1nPCzSMikRAwuSwpGDiWNdTKkm",
  "key7": "4UUVdUMqYA7zRLEusFi2nyZfgFxCVMtGcjdzAtXGjphMWoWwebFy2zJqJfmaKueW7jx2M13KeiADTvuimxYKTTSx",
  "key8": "5MozmwmxVFkSwFFaH4mLmRd9Z2tNagqYLQssnu1gC7aJvhmoqtFufJdqCd1pN9tKJYjgKVp1HwBhoFiMiM4AeX2T",
  "key9": "2sAJzQrbjdqLfLEoDtVFuzSWCD6BZoEKnz5KJYttAFbDmfvk29CHnK5ZVG7MPTnuafgvAXrfyqXhUArXKCXBVnvN",
  "key10": "2ZUUUT1L9yxhrR4cbC3EoDNt2L9frX79h7c1ke5M1egiNywGvwANakYLiXuRr9TAfKqyh8rNaRnTQztbv5rguZUX",
  "key11": "4x6Dwr5LnBrBqascuGbjYr5jwCxGT2zWprxAiQVxdk3CfBmnZFdeGSZPU2mheRukPr8dcfHDxFEV5Js7JdxM6ZGB",
  "key12": "22v2nmsSeyT3LEi4qPrJKnX5yxG4P9vzq44zoEemeU1joPHSoRfGR2FjJxXSLAfn23rT7bpDRwnJb64p834QvpNG",
  "key13": "3qeAE8WFf4vhnD3t418j84wzeNmL8VdRQDVe37Z4RrXzuFhjHhZW8KpUjVhRKnpP6EuPPdQxDyG6G1P7Vb1KhXpg",
  "key14": "2sM8KTckkwwMAQEM54mfxcbBan2r6kxoq2qunAc7cRTryY11Zdr8oUtm4ZQwTvbZbhmmfS7UmsFEWTKMKV1CkASA",
  "key15": "3BUcC1JW4DeQp6D7Y3fTmCfnZ2JP14sCtHnaoUMa6LapBgF2Q3Ed3wtd4P7pRb6ag5D91Pd39FBvTW4WxDPGKYFX",
  "key16": "zWEJHLBAmC2HnnDyXkkioE8SjijKvustXjziiNTUSQv81kSt6vuZmA1yYcnNB88yRnkPzK5TVJcdAkVwR3KcSd6",
  "key17": "5SwngdPGy9eM8pRnF1tW75S3C8hcuy6nAv3K8Uz8xhbrD4NYSyvog2Zv9LYdWYaEgDz1vRByP5AHxfbNBLcdNanq",
  "key18": "5h8xuFtHm6LQk9cd9dYhcGHxrLwcwTa11eDbQmk9FrBurPTNTXbttygAisvsSHB2QGbfAHNPTHspejv4DPw68sw5",
  "key19": "3P4quccH2wNWXC62rg98TvSTw7kVCJncPuu8kAfAf78CNjtAmmB4zQ2DCGeBxWuFayJH1Xhw8BmhVGBXK71poD5s",
  "key20": "5byB4QfNQd6cEkhwLGvdcLjKEbjoof3Ge4p2i7iKCY9WySpYtqZuS8drU3K7hh3kTaZZLE66rybpBeCpM3UfqcSC",
  "key21": "3PQU9ti7xmJKN4uSMreCeJrMoJcrHY8LWVHaPbhJyy75YoEnJUfbnUF8fkb7JdY7KgHPYuFcNY7fm7XGxhnQ8fAj",
  "key22": "3PTbTg7vqK7cegob1e2xJUHPgTQfzPyjwGagzPuG4ggFWoZXvRCTeiEwHKQ3i8MvujmezYRXEouJVLQa4UZsHEzY",
  "key23": "4j5W6bkjfVkk4Kv7n1FgQ8DK3x5KJF6TQGzwRQQKYR5S2nBSTDZDG8N2adB3Fmf2Q3bntXCP2aiFTte2kiY2LD7L",
  "key24": "3TMBzTZrJN9WTQmuTvsyV4j2M1pJKg2t7WNs1Ggg4t9cgqsknAAHbcBMgLPQrNPyyGbnikEYfofX5Wjb1SSUqLTk",
  "key25": "z8XFaji6AD3kZi5FgUYKLB5hfbe3R3PgiEhc2hSk6dDbiJQdDG2QhkPq4GaFPtdeS6JzgjcQyhDgjbWi2YoqJXy",
  "key26": "2iKeSQQMbf63WF3Y5GkpMR156Y1BYSTpuywEZqFU8sqkuq6f9EsBfPHJG6XVzA6TgYiJbEN5thC8F5e8ndr5jZpA",
  "key27": "4Si1jqUGjba3xTZXBsKAjB7ooMqNJF3fbjcorzJiMuJgUz9ytNwQfcqZZzmf5VtNWH1LEQWGBBtRdJNVF8FZv3PF",
  "key28": "5XKgQW73jo6kQXb2KtfQJuLWpGW8bj2yQHj98cMcfWnsgMrJ1mE42mHMnKGCm2vKBRmbfeBuGZPMRxq9ZtTE454i",
  "key29": "3Yv3dZsK7RcvtMNsXt8zEfADmndbDKZkrV4xc8dctSPH8BoBJKU79yZRtmtbt9oc5i7PHREsLmWXqGt1GAuDK9Ma",
  "key30": "5Rahro8zKo6FSz7zM8hvvkhWxUCa9X4bPsDGeg3hQGhH1kRk5bsBLkJZLvkX7BF3BJt2V4XviP1BSHn394iUuR4i",
  "key31": "47n3bkgjGSeENFvj7n4mrGMhRuaKKSogYt1GXtXFBvJVawjx4jzRXq6PuFwcXZGuj9aR482cC7oqmNdssYqxCKAx",
  "key32": "4vd66Li3kt3Gt8ZsHJ5SzCB3Z6quTc6mWPjteNuKAVSsE26fHh5qNoT9PoyyT2Snj6t3QmyZwYLbEkGNvfNYgmUx",
  "key33": "2dKb2Rhn6JFKy96zJWADnnD5EUgWnvaxjmYAVRUTtk3rdAPTbBq1wZ3RbqydKbkG5YipwY4ApbVNaEoDAkthaMX6",
  "key34": "3CWjp98Hmv4tMrdn4v97D7n63YBD4iKvNe1APyoMYAzppi3fbCeoDzoSwbsoNrVBde1Ps7iXqgHoUJfUc6f6d9EA",
  "key35": "2EbkRjNL5j3zSGg2PezBBWGWVecG44mduDYHLUc9CoARxv4Fceu1sVMpRcacD7XG1buQcYw3RTqVN242rL6pjzn4",
  "key36": "27QSC3ePkgzPEbcW9SzUhWu16ezzNDoMKAufXYuqGvH4VYZcFzunKqYXx8bfQfK2WL9PuHiSPfNaCS4Lkf7bP4R1",
  "key37": "2wa2Sw5ChAeLzkFKYnZThk1rwHf6iohwhqbnMuVCrgqXLV1Gs6KRe6D1yjsC7qmpmaSXHg8ASChCzCFAHbLTqhTr",
  "key38": "4P3E8mEQbrzKjmKNK9yJC8b7CArSt2fuYxFRTERcd4Gad697fCXefaokRWc943YfXb4y7C2nDZzV1rgskA2LSoKn",
  "key39": "dUfLjUryLkPTFfSjcd5U1gP81U3KuhPMwSrQ9XZZdP3PVC1j7RwKddMiSZciTPGiPVakNSEwmfAgx15Q3Zw7T5g",
  "key40": "23oNy9YUtYqacjezKJaaKfHjPJo2YoGQr5cxVP1g7vHY6dBJmPciYdecurCF4j8ECbKc1GZjSmLkgQ8ouQ9kbzVW",
  "key41": "jqSjyb42TAtnFDa6du1BG2R7Hv97V1Wa1L2w4HC2FmXrwriXrKzAZCpw1XLPv6xmui88KgYKRCrxJZnHgA6tYub",
  "key42": "3YzEgMfq9t62duisNJuagrp75bTcfHJjrDEY4oJYepVdpe6JfZhi5j7prbvuvXqzEBdPL3QP7BM7veTGbE9UR7DC",
  "key43": "3ddfg8Kc1PrADjrE9ZM7xrR5H73bsYrCakVxT4shq1VqTXNAQ1gvwf9ZQAMoDVwf9fbXmhz5krk6ptp7KeR2Ne5b",
  "key44": "4d5r4irDTZQC8P9nVT7aeXTwrgGfdGCMGnw2z4vnGj9XZi6UXJgtq6mFKdKXGLY4bi2AYED5REpgZYeWZLhdEArd"
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
