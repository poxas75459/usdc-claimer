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
    "2hSYjqHAW8y7W2M3aVhjbuhnh6oFqjHF3n6AycTKmwctL5XAJbkZK4697VY4BKM17yas581vTAMyVPGszSYiE4k8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aX2LTAhmBNQLoEr3xAwtK3xSppLoFMFC2XoExZujCwnc5wjHJtozkRYZm5aUiu4Qy5Y7pvMfKoNstKsmPMyb3ff",
  "key1": "5bkkVm4FAeB7Yo3sbSXUYvadA138w2QKAdGvnnMfWrc4QjwR6PPC3T8BsnLhYtSupHVLdTc6rdaAG711ToZxJ3va",
  "key2": "4LtcWf6k3aoQ4cB6PoCqjP8pqkTuwKm7PfBrKAVbdh1jo1dDXCrD3gsQZhoAV2AZGEQVh8tS4usuXJTBbWWd7sYJ",
  "key3": "2897zVSLEBZwPp9nVXqvivHPdzC6yhcd8gktNe3dJAfmbkbDnJpoPVKDCGtsEUbxgqs4eumwyd78NhetnUzrPEza",
  "key4": "4jkvCGnMgTpGt5MJJPYzkut3aBSHZGRYwL1vcFk39ScHe4xxBKbLfdnnZfRNGijGAPzfgUgyfDQ2QrYkrxE3xhtT",
  "key5": "5zFR9TvQYBAd2ahAYnuH4Eb7qYMox9gPJ1uKoWZ4DRm5DrUuYptSNqpRqP4AgHPiJSFHPJZNxAt16QdwAdb7FTzw",
  "key6": "5W9Ku6WAVt15wfJnSe36GvftJke36rVduDjeZ2kyzd9kpTTYG6HhTNwoV28GdXjjr72gBv4UEPYSQbfMEtxy9yoD",
  "key7": "N8m13mFgMzf9UN5R7wviYT2fD9R8iAoD9uW6Z61TCmyepsMfNE2mST2a4Y37BjEaKVYSrD9k5DqK8JkPQ4G89rv",
  "key8": "2vTG14kNvkXWGFUCGZM7be8mdbgyRb5EwtZH8RbHfnVfUk8khGyYrdfCQi5ntpbHuLZgZdUSyCKVQP9UHwfsc8zQ",
  "key9": "4jmA8cGAJ3Y8AFKXrkfoXMtCnVPrr1sWw8L7kVSi6sf7kenHqNNpgctQV58z6YXCxUAD5NHLDfYumyS9DTAnSkB7",
  "key10": "4Y6Ad1nVdFsqFuNGi8X18bCtQGNRNhBMkDjyMKERgwfgnjWzvcpjg92GS5yotEExyzn6XmX5iJjUzWRWredjYJur",
  "key11": "c86z8y4Gh3yhzZTFc1HFnmNFHpW91yUTQu5MKnyhcwruKvR8Pr3cFG55BDa6Tz5Ams1ySNgpssk6aatM7x65LPP",
  "key12": "3LrvbRyMmKdbMSAHeEkicJ67uMqeJDoRBuDSAhF6J1waAg8L32cQjHvzxRbauf7Gkum7hKUwFMpQFKYZn6e5WALZ",
  "key13": "3J93hsSGC7QjouwYaUZFc4VnLm6DBmNs8Qbkz2gvcWi2ae4H5XZ1LVV46f4Nxu9phdtU72qSRbTURd92JSrFoT3x",
  "key14": "gdxE7nmyEEo6SRGWXFqyAgBP8k6zEYbAyVNsKMMx35cxG2D7jq3JXjYPvKgi31tKvEbSfNUd5x5GZf35y8Dq6iw",
  "key15": "5AJpvJcynnD56aywAkEaDdc712m9KrMZqSS9rB6BJsyefms6FXFBG3EhkzLf6kRarwktGWB4LJAhjQ37eKLVTJF7",
  "key16": "2pcPWcXcuyRyMZeRgnqKgTBU9vQc8tDMhuR2MWBTd1RvyWERCP8M7d8muafNfjLZqZuubs4xaVZDWQUDoGNHsV2P",
  "key17": "5Nu9Xx4DqsLAnf7ZVf3tcq8ANSpi1pzA6ARbFrbTe7P4ZBi4p6BfUyhPV8VMELKhch6MZy3vwx13xJdF8BerqgDi",
  "key18": "2krMQtepYTtF5jvUEMPdPHx9hQi9PjBrg7Yuuh3DeoVEdzoyUhiWZHEfhUqmvwJsWem72NABYZ19RfvGYC1fQH2M",
  "key19": "3KwXtPTqtVkfEddoKgYGMaLgX315Qf4zu55nXmLKfXtT71LaAej2PTUERiNfB8bBKdM5fwranudjgJqUNC5qCD5Y",
  "key20": "35dhiGcsMA2ZT8zexuiYfFrxLG4WCS7qdbE2cGZDtbNR1VnhbG1u6zFWzCNuoJ364hy945LZxRApaivRvfDA2G55",
  "key21": "4FZpuTf4N4qYUr1EynPtQfbr6UJFuGAW5p7uPoX7d6fAZYXAFRYDovcrR74ULS8W5bodx1pV1QfMasndg38Cu5VT",
  "key22": "3DG4NZLJHhCiWF3vN3PEj4iRCMGF19tsqDeq6Xbv8V1zdJ8ygyGY3pa4MWYBmNraMfhw6EqHzqJJ48H3hzxpZgC3",
  "key23": "HPAyESC1NMUrpTiZpygvF3NGEYp3DV1Zri9bfXAm1uczo5RigGTeyBGGGnza28SW713yEQt5rKyoMNgBFQZ1Dhu",
  "key24": "3HcmPLTFCRDi1AMSJubaGpmviE4nn5CMVro7RE8ZEnYTTx1gTm3hiCXqwAh8dwtz15s8HrWCWNWgKcpeGKhMnUxF",
  "key25": "5KHpyfw9VphiTbJFHgV1TAJj4cGGL6h2muX3ZrkBZJggwdie2eUr7BCsk4EqkVEp5JHGRrA3MuFMNHmy5MPgMC69",
  "key26": "5WCfpVc823aGaqQ4L7L8cWreAajxUoJtnWTFpoA9wk7pnGAfSd9v9rpSAmrxM16LtxyD42yQnZ18ahb1ETLZpnQm",
  "key27": "3ki8ENA3fubbS7ruQDMEs2rPUxqFspaYmv7acpxAmP3pRZMUXCS4oGmgnwJ29TE8kAMFL9BuXxRewha2qEDuypQu",
  "key28": "5oehpAJWSoHEASXGr7T1HTj5fpvqhwT6AiD9kPgfPjbgaJxLNqozQDHzKYb42yFmW9g7n2b897DQF5mn3qoetdvB",
  "key29": "4K9Wa6GFnHZMPjQEqA2nHtuDvGvZZhiLo9tscZbZP36zjBosJM2DrBuZ5ZcCsdL7KBW9d7JpboMjDECuMknda36G",
  "key30": "2tt3poEsNRgXgtTcuBWaTR38oZwwWuT5bk1c7rT1yCdk4MMaJyhCDjRYaEF2X11MtMnABXNZiWBi1eUSiZpu1iFB",
  "key31": "3orgdCYBwSeMc3dcnrMpzDE91wR1XmZqRrQXhaXKU2MZAuUvV8odXfUpVVRw4pD1jL8jhXNC3eF8Z9ggPdGmmGwa",
  "key32": "34ZXHCkfqVbm1GT9S5ecuXHVCajLhqshsesFrEPTuaYrfKEj9ENLWmWSpcDPdAYZ8o3GRM96CTY76BUGsiLSzfba",
  "key33": "efDJvJs5vVH1nbN4ZBVfh8TTxFiqnoqpiFPk4EYNogecauCVTFo7HfRxmuDa81ukmUG5sNcTvD24EMCdipo2DE8",
  "key34": "2aVPbkVoM667pavS5f9zi7V7jWoFssWD5haP4AtfYzszsn7nzX1iZRAtERni1iy3WcZZgNPzhDnp5sKbukTyqq2W",
  "key35": "5M69X7pnUCN8YqcA6o2cyM6VRuvArr3d5mFJ8kNU4iWy3w2tJdfZy1ocAKSyy9HWn8eJejLVYDZQCWxXJ3MxuH8w"
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
