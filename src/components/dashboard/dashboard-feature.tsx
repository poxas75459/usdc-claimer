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
    "2cvp57LQJHDzwqqB52EFjSTpFZy8WChFViMKY5HNo4cmHc7CWqZeLh2jid1vywXKPtZvtXN7gzHRVikMByCBkh2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UUHwDez9tYDa6iyNyDaV9VurzCeExjUqiVbz7awJERmpYteVU9td2zLMVbSEe5rUf9CcEixDqrZStujcCmT6JEW",
  "key1": "KKy2t7tLKanPAqGL9LhhmjWSSWDzhJKsCjJqRZTRZS67kJVsuDh9iMoLiaBUzdnfrdewike8iSdMbj6TTFSpZ1e",
  "key2": "39jXhgWkBZ319AoofWhQxtsko6tCS5aS7xkFimkpCTC5ttd56r5NCYEXMcEgBFn7E7m9tHPys2Tg1DFjffMigPhR",
  "key3": "65UKonc9PAxTdQHRGxXooWGbd6zdAcNbDdhgx2wKMrKowXY8srvyq7b9GyQN2LgoVtZCQAr7mVGjBkLwxvEBc2KD",
  "key4": "2i6hinQQ68kcQwtvZVWK1at9rgebzAAqprq1p3Vi9F4d5Lhpq7NpApdeqvcNtzsBnTyP51PL7MEcyLXs5bKeB9B1",
  "key5": "Toxdikyd39QfeuDZovw5qqD6ZRWkPTwvNjvro8foeMNnnrBGkiZuGCgWuFuRTi5XbzQGeoT2Tc8Zs77NaFLxgUZ",
  "key6": "7QViiu6hPtKdhvird9fQwPuRFCvCRojyNzP7CCsgs54MXto8rgY27dVtgtDuGzRmtK1bgAbE9uiu5kETj7ZCbxK",
  "key7": "21fgqTnQ2jPMccx5HPzVQ27LNHouTPdoq6h7RZbzqDY5f6Nb7pqYtZS1zQcLYQ5UkKn3nmf83ymt8dm9MAGRaXKz",
  "key8": "4RsbQwbwHFpw2Dr5aAo4ZS5r34w9CarBfztj1v3kfW9gbknaNopKdTPaDYKLZLgNvdy24AG8TL1YoTVkbiYic3Ev",
  "key9": "3c6zL8ofLMc87SDTaKAusjvLM7Mf5ch52A7SdL9wvJtnSgKLBsUUrK6zgxKTcEHNEFU161nHEv8gYihwaLMhcdkJ",
  "key10": "jQFZCSdidDQqVx8PncNjN5QmMDweg9GDAqE35j3tkQYaYJwC2owfGHtsKp3uYAdPMoNLrBHUK1AG4oTaz2oLZZP",
  "key11": "3tttutoKPnYBUptLoRJLDfbvQGFCBy3t6F44AooJeJgXFE9qp689mJMURotKmQ79uMZuX38whrq1bYS84m1o5nb4",
  "key12": "58gkfBFCWZppiMtqB6XmRYfmgJwWG7LKEG82DGMMKJFe7tQYLNwtWFoYqyfEq3nicgzv5BoQ6S9fYJacutBsANV2",
  "key13": "F4YY99X2ndpxAthHahPDWuvwmBhKmVcqYz5wheC822UPQQPMcQsKwR5AEChXUAUgn25kuywvW734vsec8FM65tx",
  "key14": "4L3qTbEyh4e84rG9WjRQwHAboNKDt13EAD6HS5j2Wd1VWFHo57jfJaydQb9Mj76V7o4LFvkz3iyRUVSzJAZeKp9e",
  "key15": "2qhJiEH9J7VH1h33hqjyxfBEwUvg3aM1T5tMpX42e9mKcEo5pLg34CfRSQ83dGXzDtRoQWgzpUmoDq2x3UKrNdfM",
  "key16": "2whfsnmPyrSSq47GAN9a7CeEF4MPUMDPg1URbi346DSbPR5tErE5btXfBVV31Y1HZLsAHNxKzYroXDDDxThc1nZc",
  "key17": "4jGwKjNzFDM8Hpm5BPcNxzxKfE6PP3tMdtmXZKm9hWhMEwJxQx6VZ5dwxyymFUyus3mTzkz7WNGmqZsMRNQiGP1g",
  "key18": "2Jg1Nf5kyBiJEZ1nx15X7BfiGhY9m3XTGwitHWv7XK3dGhnaAWuw81haV7ZSxJ6UhFA7bQcq6WwtU5ScwUojgyrB",
  "key19": "2kENzC3zzMMCkho6G5nTwuwTmEUm5x7ZFiVjsHugY7Uwc9txabZhKMGzumLTowp5JYSxrdwXVA4FrxLSETKa2Sfe",
  "key20": "4rHtfn9RrnWhcceD5y4Q6cAigRkxDsdRdenAi5fkHiSqqgjW7CyDbXP6ATzgFGbPbKWCk7hmuDLcqQy4E6Q3vNR5",
  "key21": "2yv9Jf4yfnDB1EFGZgQVCxgyEy2VjpJ1xCRpWaPkj7pttjbvNtMTjv2RoLqRpF5djNZPTG2j6szWUCCYxbHMMsGK",
  "key22": "q4HxYSFjFZwh2LDGJp87Qexy7pev2M3mnFveCmMQUYrZovjKFkZcBWw4fyS3VJAGgYAc1TyHkjuEtSFebqZDNku",
  "key23": "2WDfPwuqA6sGaUw2NJsKT6RpgQyXMTafg5JoUDUzqHUNsK8jKKipZXQwKdZ4XGDLQDUfy4wuL1wsvHsp7X93zakm",
  "key24": "2pG8LrSW6QeiZZGFQkBF1QLW5dMzhiLTxk2nyja1cjtLFXTndLkvniwWFDmD5xjjewvR1o3XU5p4JyH53C9AE1YR",
  "key25": "H7TwsiVgsVg6dmG6UQwSRWoY3EsTzbNFueKiwcXqizkiS1gDYSioeiyjyC9zY8ZRGDeLiD3AJHmHFr3Sy28w9H1",
  "key26": "62j3rB6x3j99b43BhhLo3YTJQDYMuqNYX9GfLrnmkAqTWfiCFMZNEnUjjS3qfS7miMz9mTwCzQtzQ1mzNWJamn9C",
  "key27": "2nvu1JXX1r9uGtyfBqWjkKwACUvH6TSmRvbsUKD8E3FzhCYAknAXkZLcW6J2zPp4WDCjmRd5cy4A2QkdTYG1RBVH",
  "key28": "5dsW97Zc99vQpm1TpJWLBDtgTD3LDYmM5SY2dgiQDsZfVrJh4EuQ3hgRo5Kp4oKwcSFDWXAZWSPVyLNtjM5wxwXw",
  "key29": "5zEihmmiLXnhhDQEnH4Chgts4yorTSzdoCrVZcKig5cKr7gs1cUyUh638gki247Ae2Nu8pVrJEKk7UUnRM63UJRd",
  "key30": "5geK7x88fDbpRdd6znMMNhD5DCJvXGaTpVxbDkiSxMKXtgytECPW2GayaW91pYj7PC4gXzw88uiurUsomFVZnrM7",
  "key31": "2Szn6KWofzvNfJVJQxvpUpoVAzLa2hVrLMd6gLDJ5ADrKuNyowM9DTu9yeY6EaR7nysExWegkU7LKNbZJFPzhMiV",
  "key32": "3JmiVMHSq4HtNwhBfq146vu9qZ3JmzkTTdFuqMfafu9Z4H1WgWP4pxn6BchvnygtWoZEQKdFvAu4xZdr66yB4bcj",
  "key33": "5Q8tfS8zxscxtFcyRCWvXPyT5CejhoATEt2y6KZNqEinDG7JJfQcQ5pRMhVdXtJKtZRRZNhUUqGajfnNeK2PhbFt"
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
