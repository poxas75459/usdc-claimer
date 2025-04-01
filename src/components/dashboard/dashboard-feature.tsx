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
    "2VouJWb8tbBoi7MeoDcmqWi9JjJ6uGDWaczNYQbqVBvocpZUoriDuViu4Eu8PvXxHME8ugvb2E7FmyKLp2h1LXWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fp7HaXKujT4ckC5hKqv2RZN99jPnxKAkdxHEc6cbyAS8YDeH3py4FdRSduhuLThnYZ17DY2wdZNWkVUtvAWYtkD",
  "key1": "EtSp6bdsiZMFfgjtc1eELdM9dQwLyioJk2EfwYkcT8T5xNG5c7HUyhjH2wyyLNMUz1zn6yfAkD9PfL8ARAFqRn1",
  "key2": "2ns5PRDPEFvShjfHZF4VZZY7C6YJo6BmkgSWjMVuHAXSWpRoxnibJxVYBvQXqxiHsuug6pB8Tsz4aZwasjcFLAHc",
  "key3": "YC8deRYTGmMbGaAiC2dxR9re5JiZb5QHxYXnG7517FsWJqvRbKNwLXQd2Mrc5dVSHb3ra1LpoRwK7WRbPCkKo2D",
  "key4": "3YaakeAUW1sx4tqqjvaSNqpxJ3LAnSQg7G9wK7Fdi3XKp2TMgphDsdnhg4DNGATCihp9QXmywGzUwzmpbrUc4BHX",
  "key5": "4ApCyFe9vUqikVe6VyDhgduE49WMrB3nf2JMyjJE93EsPpE9dSs7EsDAb1fabHqXyLvHUQbM9xoCxyGB96Q9Zy2j",
  "key6": "5ftZKRc88gEe7yQ7CUJkwetzEC7Ee2mn2Gxoc2nAvbzAVgser5eV3CsCEfGFzK1p8NtKBsFDpKwHpBYBPG1m8LYC",
  "key7": "4rn8J2LyiYsgqZLhwUUni3es2NJFbRd2AAAVJ3Wnjp2JEEBNaz4yHyTcjR67cpH93hcHfujD8USTMDHW7D21mguo",
  "key8": "3iYjQWmw2yVPW7ZL3qTwTP5gDGcV7LUBJPSKTGZKt792z147qTeRi63yVpyW7mmNEGQawgmcQNDEgov2LGi51QHg",
  "key9": "37W5RQN8JHTL88owWq3T762XxaENjjPSCRdkd6TUDRuRtkZLofBfsCkwcmSmoTWVVWKrYutKnPAePczQxcC2Fu4h",
  "key10": "4QScT7ZDtyvMSsw3xrWXVDLsxsotDgYQrdh1czRNv5RgZ2THPHH1HCtrDD3yrHRTHFCZQd3uVFoGk5sCaa47rQd3",
  "key11": "8GsSu1t7NEKpCowxZZhX4HUdzk1mNfRwPwRHraEx7EaaQ2JknMvBAxzmvxi4UA2Ff944nGq5JtnL6Y9jysaPNRC",
  "key12": "3YkK5pxiTjpY5opDAoirxDzbTwxeAptGn3fyDPw497b88DCP2uTQnkY3bBNwBPWWF6vxdhJjBbUGoa1R4JmgY4YK",
  "key13": "3VnRdg1NTd3MHtdH92qD5spRedGo6bBjFKhyP8akDbgbCfgY7ADiAGhAocAtPdo2gEtrZt5GV4JVZU75xYz3vtKU",
  "key14": "5uDx8eJfkmJ3BFNLKNwoU7vJN2oMqYtn1EUwFUbRHuYVmAsiSERnMSLWpZi4znqSmdxRXxBkADSbVYMAhaPPpsdM",
  "key15": "5pUBNc6uT3TLh7QwqBbzcQGPVs3c9Av5i1nusNavL2Hb1jibzPBYWA2dcFFgb81osHVjdXFbYsuNLvs7tQbAaDzf",
  "key16": "9yqbPsDKpXuda3eKimSdweimhiw8v8qKxR87pWmiFWuscQwPUKGuHBKop8fLdgvTYMkrgEVoV2NHAxxEmCuMxYw",
  "key17": "3jBzN3Q3vARVdYUSeDsibS6h8gfA21WrXZbsUt1GCQFMsnERmZNTuWyLDj4QEA5uXFeBtbkyX7x1aMtL9ZWPdBFj",
  "key18": "26Dr4SsNsv3W5VTSdoi3jvxdZfrLpzL9JxQuwUmEX8bTJ27NkE6p38TWYiZcFLLMfTrqko9pV91BYNo35oZ1ffAR",
  "key19": "9LJXVvVN6Q6MKi1rAMTESYSCjJKCAp36XYisehEp2shFFjkXtA5wdfj9VvzKvgG9vjm74jTdMUFUmmvn5x8f6qv",
  "key20": "4ZMrDBTAhhc54J2L22TgA4HQj6mrtGSg1aZSVf71RYqCueB8YfKhrzjvTDDTm2iJLXjNA4YugfTHuxBSuCrDGhTh",
  "key21": "iQfWt9V7fVvWTatmzieQmvPzfZcbgsGjdNzPH5CkBCNUkZoj5h2o51DAjKgiaRKSkHVPp26SeJJnGtCdx4npG47",
  "key22": "4EQPXnyJpPVxZi8g6vXjWz7a6EbKrESZADEGv4FE7GpP6FrspqsMusAs5Eh3rfjjnmtRH3cUPMpXkMuzraTjsV8y",
  "key23": "4eTtJR4HdQ8yxhAx4TWcvEARUrpvBMnWPPquDk8Ubg6G19uZCRF1jFAXWTriKzeDyUcgDU4KRo47X9psZsKo9FQM",
  "key24": "2sADpCKJqNk3F5GjnRXWbwAhwNRrqiPCFYENaacUXxkkuumMY4WzjCvZrTkhcMXWGDV7rGYNFkyq6NzLaq86VveR",
  "key25": "4pC3e7Znuek736xEFp1hFDKD2zKmopqhUrUuJ9uxgNQtB6QCD9hXX7V7qpRFipsU6DKa2FqrEFc2PXZtUVjEdhv4",
  "key26": "2Egg6WomDBxq9rbNtCJkdZ5THx4j1WNEXegUJ9MAnTYBzhPXuQLhYueVX4nwvHzqVyB9YgAmC7er3NV9eWuiSb5s",
  "key27": "4LGa5yxvASioZC5DgVX4YsFnjvgobMbKcFGLgjQrNzdEafeyVVwzGG6SR3NqEWDGF7aAqBHedMXVYsb4Y6Uqhb6Q",
  "key28": "21D4Ax32wvke1Hj9idKEEWXzdPacSi76L5vYuwTgMC7iXyK3rut3TTECEfyMJXq2zwepcc7Ecz1k7V5S8EV8gcC1",
  "key29": "3xKvhe26o4CfAHafaY5zPQmtagHiRrbP7okCvji3moDYbaCJvqDtdyQy19z7jR412qdZWCxr3rVjq91hLgzVrBa5",
  "key30": "2hW7NVwPsyhuBice95NpiJ5aygjMfnoVaakZujXPKi7A7z4HveyKwsvEkTzYvgszMzm3r93E9VuE8es3fF3F1GJZ",
  "key31": "4j3JXmiC3YspDQcpTb8S3wYxHLBdZUX6M6qx25i5AhB6TCpMKiJvd1EeF55PYWBCcxPBNesFEgDd566LLuyohnx9",
  "key32": "4n4UcVRTHFMqduMAHtwQz3piQridVZjZ1xzPJYgPC5vRr9EdvCybhofuwGt653FK3JDPNoN51wxrRTf71SFfyc5F",
  "key33": "5r6DsVueUkT3nZ2XwjTZVmDmcqdUJUpZ1J5f9B9bCrXvJx8c5aw6K6RCWAmFTRiC5tGsjGGQyBkz5c5xsq7mR36p",
  "key34": "3Gp3arkhX17fwP3tBwpJZL4qGxwa24cnaj3JtwkNekDttB1ZFp6dEReSpEEcAHFQWHZZMSfaCmvpq2gk5YNJpAGR",
  "key35": "63xM3qgnMRQiVpCjtJT7dTsaWVnkUYfnrZ84Au3wJ1LYLMZRnerpAibDq8UcBCbjjkkGJKcCVboVSAk39tiMRa79",
  "key36": "66tVBzqdjb7jrfS5aBVjp9g8jx884pBtJdGvQCFsNDLAb6iyB9euMr8v2sUGNswEZ51H7QcRYYhWgWke6X8bbHvp",
  "key37": "53kaneYB8ww3NFRLcmMi4o2SsZR9fCzmQWwNnupkGSJ7fNsr5EYfFLKYVkastDzenZWAqw7qGdfWEpWa6KW5GTz9",
  "key38": "2kXnQUf182FfDqxzBaLhKZHGy5sMavnsQXkUWJXQ94JEk32Rsc8YcY1HVxapXNPX9dfEYVfF7JU2BLy8TMLZe8Xt",
  "key39": "5yhdf11Ky91Q4R29k2tU1LLREeNSwRYAg9YBcm3RT2gCsjfGByGzntsZxRTSpx6W3iEuBC91jmXsiB1mj3tpVzWY",
  "key40": "3JQtetHAXuUoxv6WLNLoixaRqskcZjqxMJCwqY5hvUvq4LntnMT9JH8bP37igUJX47MAD8Mq2KpjAqyh8AAaN2ss",
  "key41": "4bLPz7FuhbvCKzNtF8ycSSKy5hxtQaDJKDRaf8MRiW8o4sDwVZXL4b2YGnEeWKWAZdL3CKJbhkL263L4G4dSjgHD",
  "key42": "3V7SdyncUXvJxWytTBeva2atdAVw92mAsUU3nKq25V5nRwP89yK3xRhdwXx4rBMv5oY4qGvwNcZR2HxkceFgWTaQ",
  "key43": "3BuF3ZV96ECkcnU3AdR5ENEWW3faEApyLjFvpBqWQXxAFm4hQ7ivYpRhJGZ3m4bjnUUhq2ncwpsXkeApFg8uwjdg",
  "key44": "3nMMZGDoQJGR9RDtDKE99VFxm7uDTAk8hJHUzQ8Uoiv67SrWvsT3oquJiGJHdGwzmTGiSiPhqUQ7oLxqymCCxA37",
  "key45": "31k7jDtBLiXjihZc7ohasWdevbP7omcGX8qLxncJhUp8Fnq7W7inZpUq9hCeMnkesvUkNuxBkDBnhbbQEhaREF4b",
  "key46": "47MfwtT3uNwxwBeUkF2hyETd1BffyTRDNySoGnYAS8ntsrB2RARMuKXUa9yJPKh96TQQ9iSw3MfsVsgGNBDFLsM2",
  "key47": "3KTwPouSbbSA6GJozStWu66N3zFrgXQuT4AcpDSXGbaGPMQNXGA9nM5o8wYfozjVzmeknp8VcMkHh5HGrVaq13kT"
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
