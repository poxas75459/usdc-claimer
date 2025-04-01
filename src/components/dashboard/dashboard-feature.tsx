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
    "55rzK7u1TosxiyTXcLeYaHXdYZ7JhQjPciNZtrAZ1NL4ntKUqBofxbGD9HaVZgpAFgRysVvYWbSHHanaMeMpLaBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23CJTJWAiwhB9rRYxt2VbbGiCyTuUYhs7wkik6WAb7w8ppgL3K11pqzVP3X2HYTGiy3KbUdSazSRdMoR9SHyJqiS",
  "key1": "61oLitkb46g9SBY6robcuQksyqeuae2LJfFXKpLnyePD2ePMT8Af4eKtpGmvGTx3A1A8K4NFQrGLR2irL93LdZRQ",
  "key2": "2No4op1UhbkS5iVkbkk34unvrQD6ApnAq6wjVy4Q4fmp2gJcXPRiMW4i4Z8x7d48pkaXVpJhUkZFv3MGTbWJFSiW",
  "key3": "23JosjTLZt3KohWio4AzUdiS3f96MXG39SfgbKkmCmC1Uz5QeUvYXdZFyWBoLZrjwWPNxw6XsHZNzzcZwUUcGGVs",
  "key4": "npYEhkZ29QmFQy8iu6dpMNvdLjt1TbP7EW53xjiQSZVtW7u8YznYEMA2pNq52TVMisCLzh12FoankfeetCpeFmr",
  "key5": "3VrysmaXDG2F1vTqgWLbzHiJB3o8NJgwnjLBGopXrzsKKjHfgacexQa5BX7sBCuNqfK6pChDjSpLGJ7nbnJHWXD4",
  "key6": "5hDLqjqYU7V1sLZjN6yijG4AxS5phvJzsaCUipzuVukzaae3kudfM34sZQB3iHigMhu58hHWBL3fbGemBVU8tALT",
  "key7": "61nmt2e6MFTiwZZc4UpNVjrXv9SrZk7SULgWPVqTzjHYF3o1eQELCvusvYvsFJ6LKkKwvK8EUYZEJ4fzTZep1r6S",
  "key8": "iocVhEvpACsjQ8wKkPifizrjxyrVFucLu6eHxoEeUrDfUHeWzpikneMZEyTjzHFqup4fr5D8AZyUdeL4hvzwH22",
  "key9": "UfsVQyQsXBpkTGSXMno7iQuyh7mX5APd4jkFBf9DqoQfYTqseEH5DVPcyjxqLQ6wTKFVWDN4fUSY5P7vRuGtbLg",
  "key10": "3MQNtgxVph9N8gD7qqNWW8YRC5PKAt6Ex9rXuA2DetWyfwRAdvSLRLtJq4VxsHWawgYQ7dYSF38b3eVM6WZo1aLV",
  "key11": "2rkScU1SqzyYBrzEH6U5QyN1iq4Y7UnMh1LaGZ7A4xPM36sDJyfU2yipSoad6CPXsSDnA3o7XfDJnDzo3DrnHtF5",
  "key12": "2ZJ8Ve8Tw8GhubNC6HKymni3ipuoNmXmcdUnFjEBLDyepgpHSmbaKA5vs2V4eLriu9Sp1qZ9XuyUukj5G6ThrW6Q",
  "key13": "62HEy9aGgHqWkBiikzbxwNBJYAni7tiREPSWrAAS5QjVXi26Xxspb57v6mH3G52XXccm5nAv2XpmbsPAzKmJ7YtR",
  "key14": "45Jcp5C5oT4j5KR3XcTZyadxhvHkZkKrfh3WVXbZF8J3D5MFL3Eceph6f9fTgJMcgr76RMAVER4zFarjYff71cLY",
  "key15": "4vhaWdPvnYSttrQWRAr8qAC7uc8Ve1idNzXDgauMcQq8okaYGnRJYXiS5VHuaeeUTTfjnnbFAxTTyHAkJAA4Fhpg",
  "key16": "5ufV6ddGrnNpqeX3HsX5URYUmaoVUb7Q8W8T9tcYQe2q4LvFrxPAx37v8fKqc7wjhGM2LLG6cUGgcMstg4UWF6VW",
  "key17": "3LKEXQxPmeJmXNfkHsYP9XYgZZirT3T8Yw82rWYYEvbp97zyFScaYYJRqxpBxDdd6rTPomKBuJNsCHaQwHTb4FF9",
  "key18": "3gkoA849nqJBJEgETA35x5ro9DzhbCRVEKakGbsx4pX41jxNzwwCzN6oshMznt9ig7ntJf4ywTi7JWEg6VejJBWt",
  "key19": "XFAtKawntHCh4kpgDWGjQD9Dk67URVrM129TdQirdLxhFcyzr7cQ1h2ZzkoAnrz447n11UcSFFbsR39ZqPQxAT6",
  "key20": "3AiMufjDT5vjcV4GgVPbEXRv4duewzbeNs3eUfWwr2HrJ9daQLXvJmFz2HvRVXw3TsYSuU3X4mVJqoHVCygjhhcs",
  "key21": "2enWLtqtszBfuDZhj5JAbEswkyQUXLKy2WSUn6gYbJ7c6s7p9qgH7oGGSZNRxzkeu3oDXrAMHSNxN9pxo6VheDyC",
  "key22": "4r139AMqzRam5ybXkSTfQx7nH1VkGBxViZCUfZRKFuHaaveJX8eM6kHeVNckyiKSTrnhdaTmwWBRCVEEcPGAn8Fy",
  "key23": "287hWVYRiLhYEpfFcGui849QTQzbDUPvHWsYjUz4V5Hcg9fHy4ZuNRYAzYRP9o4eSmxj4GWmvvTC93hXTPwgZTQm",
  "key24": "5oYeScdoynbUoVRAm3MFp6TofsZe5KU9KrgLxpwdy7HEZU9dkCm2orjQ8muHYrDgBdy4zZLPL5V5CTcyBKwDs2Up",
  "key25": "5tyhS6mp7K9apjbHh38mbLtcxoK2AzGciRBhF56mc9Dt6jdBUCPmLE2deQJPkQaygp2GwhNfFUZq2AGjoMFX29BN",
  "key26": "5eQMqQNsKQV7QwDBH6m44ARAbLVdHQUPcEVMaCJhKGiwBbYMxdfvnqYFsUMxc8hmcuid7qJLwepn4KPgC15XmFof",
  "key27": "kSqonTWQPSobNks1c3nuxH1jRTzHXt11Qja6CidWehn6C6KadjMqzd36MNkkauEaRu1ZkPuiCuzey4J1uAiumaD",
  "key28": "yHi3kWi9HsZJsQonXFBw9ZJDTFxVkpCmQcq9meXqL6d2CeSSGnykvJP33okj6mhPH3mxR32dYbrehJgt8EW86JS",
  "key29": "LfRvkntwH4DFYKrwbrz4qSq4F4akAX7bL3XHL3UgXdCgrYsvkokjffstErxqYxCB7EJacj4YtpfzmbiZTJhevus",
  "key30": "5AceJL1wPVZN3mKfoqVyVGcAmpsZJpaxWsUTp5fWdQvVfUZvmCvrEBcgH7UBLN8dV6w7ZFgytAeKXHeDobmQY5Fd",
  "key31": "297YiH88ZqWrubHW7Lq99LjWJQ9sCcTWCZTCFj4ftu8NuMvXYvgHUfk8XE4bSoLBNAf8xS3X7YJw6dSBUYrvehq8",
  "key32": "553sckfYsza2uKYfPsg6me54gcr9nXHhyaJnY1Qegrdjgi3HVMo74Mz4GF46U8dQCGBEPKBDf2MvrwGiD2k66vN3",
  "key33": "PVJ2PACKGjsa1NDf4WdSoGgdyETwt78zEJvru8znaCSDzUhQWP7sbpiiWN5rXQUvZY2b3BDqJtFhkrBxNwcLqQA",
  "key34": "3qndRuvjNXsW5JtMNSc6t56wEtMVMAB7XaRTNMDLeDJZdq6MMMuDoqDYUW5X1JqqgnBoyutDzisBoNShBd5YrowW",
  "key35": "55NGWYrQBWAdCUftPtUB2HWwaAq68K7DrtmaRigdnsfg7Q4R3GVVovoJ5mtqCwbD1cnahUKJVsfdtydnQBsVX3rf"
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
