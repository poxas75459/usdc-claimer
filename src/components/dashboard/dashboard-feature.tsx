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
    "24ywRSHMxuZQtiPxk6Y43t2rc9m2nvT1A3BNVHMvPWbvUVkiDGx84oXHUp7GuEYuBWmEcK8SxztYMbNXSLeDb8SX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c7owE6jmvHLBA8MqPkUKp6CB7kqG5BnLdsAvie8GZo5J7jd3qsCX3x8qEZtpzpkBB2uwFimJc7boy73vzwmTbEb",
  "key1": "4ZZkgQ6nvEPhz7uEwnzMeKTn2ykcV3EY9GDCQL8AtxGX6xkaWNEqLUPJLfoi1nSTM5X2SYnmFHmsAn8Nifwkp1hK",
  "key2": "4USw6kgG28iiBY1QJ4h6gWoC1oPddurNkFadzyuQMek4aBwcduUQKLLmwApqL1jzHX9QCEgdMbc33GjaxrubDkSr",
  "key3": "49W9rqzJgXQnxQ6h7jahYzzh9yFc6fPbvdzRTG7SsWDy5XNQDNLG9xQxBt4TaGN6PpQAoJctV3GuAwX8Rwq8pgUg",
  "key4": "2it9AxPohH5b6YBeSuSTMzWyZgpkj6B4zt8GzvzjQ2dF4KLrA3GSAcT5B6MMWf8XQbX1ybhmVbCXBF2qSHwd2ZXY",
  "key5": "3gsUyDCbSjuBqRQSdVF9sCRXY9omBreRh4WYACGDKSe5JxZx5UcWxXT9pkj2nq7ASug2MSZuDUqTCSQuqMmeWSpu",
  "key6": "63jPVX9Kv74yZkCR5gfjp4BZbeA2q9wbqFpNicwWhfA8tCqovbmemW8hF8qk4mSaro5Fyhwji8Ddx63ykL8YnnPG",
  "key7": "5uS7tmC4DZWfKoWQaMWXZe8azS6weYRtFLEU9asSS21XG2yJXt9wXbauJ9Y63PQ4a3xbB37DvK2WNz99STU1qTvT",
  "key8": "4Wt2uVDAJDFb3MhW13ioZ7qyswYULJfZ3L7A2z8HKonJXQgRPFZDVrESLuanRpAiuJVqvot3sqrfQLiKgntk85r2",
  "key9": "4KkSTb6FK6ueqeGhm8dcjdPSScRpJSqxjBKsYwr5LKyW8Kt4L4Bm9L3Ki4t2DzugfWnvnZWEGXWNZ68oicwqS1EB",
  "key10": "2RmGx1bRqZeNCNFLencDUCXYHRZ7ZMU8FxoxKZxLQ3o4VgF53rpgPfK9pgRMdKchK66BNW1HpMnyCwX1fcz1iEbc",
  "key11": "AJzev2qXPeVZcSjKJEzbcWvpNxfw8opuk4YuY7obXTPjQV2kL5h6wtaKAnxeA2NV9GzPYeXEMuVo3MDD5nQEyND",
  "key12": "3E9BocHeuvSWaoSUjm5JuKctMhQaMEdCMWLSDNxj1sdTGmYFJPWwGHP7H7UMj1o9Jwy4e8jpGJ4sy47YzRA47XCq",
  "key13": "2qRVHnVCcU43AMJ43jyuJGuQ8JMV8i8h44kSxf2GFHQmfBThwsH3vgHrWveP5nRyzTxWtoQa5XfcF6DU1T8bvXmV",
  "key14": "4vJoQUeev3r2NNuN53ZJRMcLcZKNxMEgeQeysPodMPj5kbQ283oRzLSpmzKDCjQF6WfeKbFXTH9csrDEb3Qgmysw",
  "key15": "k5UxYPn4oWxJwtriUsBjM3c2J97agst8aBZD5mA6u4pgsW9EBbdg9DeZcX3bV4draKZwx14LBH2Q414Sh91DFNV",
  "key16": "GcNuQcZ6XKKA8hJgdtXbKkK2Jxy7MkHfUKqARDarctHp8NzyfYk9dx338FqrM7xFkEqGrd9xvafzjrUHS35f4gg",
  "key17": "3JpCGdhsKLeSegYZniAmL1yPv47J2wrBeF3h6FtobMVYzQn75ecMfbfteE1ooFG93Kokj9kgvEW4M7gVEuY4UrZ8",
  "key18": "55z5UekjL5M9NLwuMDXBeFhbnkwpYDVe5BekLQk4yGkAG197VyfnJF98VwADsHmHcR5epP16MXyWeQg4rSsbRJHu",
  "key19": "2uJ8Adn13eoJRnvDVoJZzNdcmQRMjbwQKRWTbXeNwmoykQip26FRBuRkxbXnn2BED5xqhqkCPtigSaLyzFnKs3rR",
  "key20": "3XD6VAg9CyWPVeztLnzK98vp6DXaa5HFvw1w3cSEzZ4CFCkUGC41HQFHuRRmXYoDKQ1GaWwtANaWH1NLHKNtyjWr",
  "key21": "5x6KjqEXxK24r6sWiRUymESbbktLuQMwC2ijPEUxuXR4o5Cvc3cGJ33RpT1XJKjFNp1UcUmLMYhLL6MieTKyG2Ng",
  "key22": "vSKaA1jn72zQcEwacFyXhWD1FcDxES9Q3hX3igc565dtNJKgmhVQNERGUJV7hcucRRtwc1mFP3MGbP1zr54sGh9",
  "key23": "5D3C1XwQFbPJRwdjXzcXD394fimgV9gJ6FjpqSLxn7uhZC1NChdWhZM91NJfgBKHxrCSRmWgA42WyQM6HbQfBhfK",
  "key24": "N2eAN8U3tgPHedTZVA6gaCVBwYeAqUr46j7HQivfcHMZwA9VbAxtkTeLYL1GZ9v5GWhmtPHngogRicDCts9KRLt",
  "key25": "3LVcAThHc2n5fL4NAmkTB7dR4xUwSyDiPM4CXJJbd6WoEmzNd8zBE3xxyNSNF5Lo3HVsGnyxL476fxDxt5n5JjYV",
  "key26": "2MHjd7wWYWroq95HTmGKgBDHyUHCGtWkTzL1MhZHSjiUp5uktJTmc4BvXQX8Av6Zm4BwjYFVwEbpX1hSi7eFXc4F",
  "key27": "5ph3JRsxAG8e63wrG5jM3n7Dx17hKUmgSS9fTPaF6GPmDi6QuU12VNw4koL2grw3DCJ4hCHFDFbBQpMsgmX9mdjt",
  "key28": "3xRwr1h3iz8546ZE7SuoxHAZP8vkGur9ZSLYQYrSANjc31fJfPy5CBgvTEaajdbJmpm6TygrJBEnDPAPjH1bdCnP",
  "key29": "5QBGEwsDM1MVoogcmb4oXErrXaWMdTVJfKhhUYrkhehAzkbRstgc53NMe7WNSHKCrGYjEnD63MVR9vcuqEBfrcLK",
  "key30": "4hvMCFkcaFZTBw9Ahg45KaXusJCisKv3bMGhUJGCF7Lpdm1tHn3WvX4YZLdwk2ZNsHwUQAYVoKPiT9Yt9GHZBDCu",
  "key31": "4mEHY1wQkR7BpYZ1h4gr7tMnc8gTidcMhcUU38z1L1V38u32uQStaFJUjqQbB9pPMQref3nb7S9gBENiEuTHvqo7",
  "key32": "3nkrb8ZGWGoeny8YKyxoUShizta9c23rixsreEgRTBEV8qFcGP9NivccAM98LXkstDFNMRYhx9nmnxUXorfuxcPn",
  "key33": "4HeRwUEfiNw8BT7G5AvD4mc3sQPvRUvPHRgGGatc84S4bE9VJFyLzCkLCxf7CFwv95RD8nDEbK1g5pzc4eDC3TjU",
  "key34": "8XjJ1fMAoLGxJTrS3Zgxjb9FRZQGe8F5RRjnkczymy95sWaRRsZU9Pm3pErzTDbBzB7mz2Qh3rDrwRpfBM6agX5",
  "key35": "5D3dpN4agTJjztZMJQeQ9nBHT8XvHUcNbzE8Ms7MRt55Ce8SPjixie2DiJKCfwaKRg9oNUSzuPiCrhrHzK7UBjpS",
  "key36": "4ktRR5fnT7SGjhxdtRKd4LFY7FQD115oq5yAaeAwLXM2CwEm2Ut1kbpyCntJT1KzgaMi7exStpPkzbheuKRUW4XQ",
  "key37": "2XvyyvCgwHffmrpW6TzESPUKk9P1tLzPNJZ9Jq7Q4tqk1cGhMTmeqLZmrQcSoUTEazUjad9FULTFtWjTyjYTeBpD",
  "key38": "4ALfhQmKrvBRtASfQ38r6Yj2mnPd4uZ2QyZM3fzkbjBcStoRo7JUUUe5mRR3C1Vik4tnaw9zZHnjxnMxJneZvVLz",
  "key39": "3hhfJBhebgFsaSDTv7jcer8gF9XRFdqy3pcH6XxwRZ7zjYR86v93R8TyTUpt6xphDv2xSJih5WtqwyAE1gmPeJVS",
  "key40": "2U8PoxsBUG4wKPvKXzLTNk8HrB5KzfdcuWBWquiNvHh2ZjUJPypS8chFEA8oVjByzhY4DvRhirsPnRF9LMBjsVyk",
  "key41": "62JFNPN2k1WV455UuA7DMCrjA9CdgBqqDDL2x7yWHnBeSRHKWyS4znJu4gUDFLtRPowusrdyBJkVFt2jn37yBLt4",
  "key42": "32zytmf2UyAymyiTAtpTegp9T4diKwcZfoyGwDCZ4aGRE5T2RfdvSNKfNFJzYiqp4wkfz96JzFVxLZdviGTfpDU8",
  "key43": "5nxDfRceCDKcHEtwUEWGvzFjvi3cWVRFoswqH8WQHzymvtXftRUWrPtN4i8qcBY5RR53SnGE6vtnbgP6ULepA2r6",
  "key44": "vTozWjGZnMre4yUQZ3kznPJ3K3qKnjgfAyPuXnHY34g45bDRMEBKZWWruH9LYQHmgyfcZ9ZchpUZ3yqBWoybmEb"
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
