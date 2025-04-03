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
    "5BGYwzPDQ5GfSU5ZVZpTFXHHz5N2FNrvpefbA9ozhcKc3Z6YZ4gqHLe2zN2SfVwb7VPBCh9Esu19kbG6sC65eYef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMe7NYGfJCzSa47ootQ43yM7Nokoxjhr5uYpobvbqSG7tfzXNmWo1Mo1hc78ZKTaXmGP1K44kEbycaAH7yRtxkg",
  "key1": "bYxss8vgC39NTckZTPgnmQ4KeXKnMHwh9EaqSaDErWgsA8SCSRuVmrSfD5YPWRVZDwE3J7Uk7xYSEX6KNj3TKpg",
  "key2": "5XFqhNuZGgupMc7Mp3ebo34fiBp5bDVBsKR3vp1jPevBiNRn6VJ7qSWdSixNuULAPHzzZgehN8diaPhaAYEVrioi",
  "key3": "vNogjYgrp4rCTF3e7MecRpCimQxK6GC64Hf3DdRVSAbos3C5x4LEvheo1yG7mdZk2hJrLpZgUem27heRf7MBYA8",
  "key4": "3MzXKfbehKKFuirENEnDxYFdbfQZW2E4YePVcsSxxZftjbGWSr5D9vD1Pdc95LDFniM6pYKP7WBPmGALiX2RLPyH",
  "key5": "7vuew3Deaq9CzEXWxaDti85EvwSfpLkTTsLQgdUZbFwSeZ9JvZ6Nc69sPa8AbACztaY3n35U2mgCWrWm7t1hTJY",
  "key6": "C82ADZWC6S5a4NTqtnCCwztiLsdh5mRxDawDJ2RU98Ka3kXhzxTidVKpWLcjJJG965c8fCrekmGFnZiFs7D3opf",
  "key7": "47xm8eJR5TMDko4W1dZR6kFyXw9Qh7wGcAiKMDvwSvA6JJa1y4ZVnSFhBnFKEeNPVSUWGyfS1oDkFbFDgYm6kXaF",
  "key8": "3xZh9TmJsTacDBTtrrP77uPfDchPMJ7HoNMn3AfKgTp1hGkci3TsCabkFYQEuyx7zVgb5Tzwjd9xPCwmoRNs7SDE",
  "key9": "ACKC25Q5r7nLYQYc6rFFP6yWWnuTkBFP4qrVHu2XHD3dJomLJP1SCcZBkMSk2Ncr1jrkptB8kXoHogc4w91X1oB",
  "key10": "2gGHMfT1tkVBCphUBdkqkpmBezjnRrtfU78Fo1uxK8rsxsS7nNA5ATm5MrzvGYNX4AfbUgK3gp6MgbdVW1o1EuZB",
  "key11": "2WtqohdEwjkh8mv8Ppm2tuPFSPTxgzTPiRhCAp1SZBcMAkhops1LM4ejjL1xcHendKLkGx8A6P1qMybXc3w1VzRY",
  "key12": "5EXh6XSxq3qcgcomUct2J7zhtBNzvoEED6nv89ScaZBrJVgWrNFEtTMzovGiu9U5mJAohrP3JryoHsCFCs9TQBVd",
  "key13": "5naVL9uc7vY3CHViu5BB8riEBX2qtebjLoXbh4WLJrCYWXvkdGX2Yt1ajwX4c997pquXo7W859AD8ZTVxXRymY4r",
  "key14": "2ht8fJu5EW64Yau3wtSc4iDAfjscSNq4fReeZXkT9fEDZ9r9aaD3QMNm8MfP8LCRAhp9vNoywx1ZZsP81Y9Zq6mi",
  "key15": "3qnNGt55NQnhz7q8ji29qvniRfap2CxV9arhZwZ47uutyenVWKtm4WinGkrjSGrvjmBj8qj12zK2apz8GJBgK54d",
  "key16": "3Fg8nvpoQ9ak9KSdm7TeEPiCzWewXA8WRxexWmcMpPo4kVXqkMDwfw84zLXZDJXYbeBowiwU64cNiYbbfHCCjPW",
  "key17": "23JKk2YsAxqQV7kL28Uzvag9QsDakAbUcoc5NFHTmLcGxvuTDbLdnQwsEY8TB568uA7d3WUHWNTEsedoH7kkAkoe",
  "key18": "3ehKWt9xsF9WvdzupbdnEc1hTGgMuQ6qyWoq9mJQGT5Auxy11PA25wnbRAwrbUhLCBVgGoKe3e877jJFNwB7P52o",
  "key19": "2h9NxLiamzUxJ6tLKSwN6vJhFfMMMFGUTCr5FCB7HVBNX722MXbQcYYNSyDWARvBf7NaBWcU92BUU1iJNrqmH8J8",
  "key20": "3yCN4aZW6TTNzogxybZ9UY5wXmxKGUWKUviCAi7cFyLiQwCvpoT4Z3rA8T1xUT6f4Go1zUviSJLMhTM2MiecRAfs",
  "key21": "5abuT4PTzXRqUCKpqN8PnmbqcqKoCz39wFjnAFwtQqyAQPr34MJb9jYVC1TPQZYeJdutyCtPG9w9r6aDAZEBqcFp",
  "key22": "1WnpY3dSjQaPTt4Z3yGDG7zEb8bY9KztJADHK7CWDC3j1SnvjrAYTD74B7u4Ay1j53X8ke5e4haVEaGkLoRxa2d",
  "key23": "CDmtGa6wDBJvwen9PMLYJ95PHuC8b9GRcoD6MpRAoXVjGTV46cK7oC2AB3oaomYBuWz4SwV51RmWNLTYMc4wuAe",
  "key24": "3bVKv443X5NNnuyE7BDoZ9qcf8qDw5SsWLkRaqLL85R9KKQLaozfiQEHcDmPAUpifCk9NPpiCet1eje5gveHrJYC",
  "key25": "28ow7vFK1ykHxFNQ5odMpoBzAwfiFzTK5hxUYu8qv8TyE7jkADT3PDXbw4VMKZ4vzEFwQbxNpm1S8JLdDodfvKYb",
  "key26": "3GfEhbH64oQz26jpWLtWMNAafTsvgMmmFV9goGhYfAiBZAR2v46LL9oduGgpA4GJGEdDEME7S4yxMe29Bbp2yW6n",
  "key27": "52ePGkHR3WvtJNHKkMkk2EnDgnqiYgbpBCQ5iBEUKZDX3JRk3kSGQra2pepi9aC6SNhm77vnYUgLwpVm2xCFJVjL",
  "key28": "2JbUU7GU3offxqxMCbRbH3faAsXyPDambXwsU8W5oCbVV1csHGu1DsGVurRLrtqgaMdqNSUmB7X3dGiBnfceBAZq",
  "key29": "3NtJBQX1rKJXqQcb226JHfoqanKm9QdJcBUm8Euku75HE17tgQM8dvFQU5Y2BNM525RhjKgtFSEQAnWSMijo22UT",
  "key30": "5KwUBxUZiUCLeBFQJtjqnexZKTkMCZzRNUmrjyyChwf8WKR2hmxJAW3Y3ASsEDHAkyHGWx7gwViEP3kwbZtDckJz",
  "key31": "3U56CrCjseKnyJaFGjjPDFXvdq8pQThJ7Nvo3ASiQaixbDVDseX4RRTK7ZcYpWMBhm9XfTKfbYv9adfb2oKbiw96",
  "key32": "3RRYisfQ2VdsAvwmdK3u7mvGZEGpzwnEokpR96mGvHTpCQfmrJgv5XXEqw7aM5XYL5v2gudEKoBZJTk9jRyCrAxy",
  "key33": "2QA4JVawfJWJ7cfRXXupwwEzaCHv6Z3yLxvDfYMeP8YscF7aaSn677kUcNLnkG1yGBLvh8EMLvWwpHmqqzdRLATB",
  "key34": "ug6dhKNaUBtLADmdKVe9im1nsES66NLuikDWRuWcqm2yK1R72NPU9wUxm5hjZUaXq8wjGMQYEsg6vHqnX7pkBVm",
  "key35": "5J8oajwkeqgew2B9Qg6vrBvck3JGn5U641SzKAQ7XFeAM8ufkFfBivCaMA4bnqQSyXHu7aWyQSgSDzBGTyJf5xvK",
  "key36": "34hs9zbP8UjZr1otsihpNmdnPnWCBQsY3jaDkBfUBHJqdPg9ZiBGH27FvPkD84CgMxnRCL3sDyaQMr69bUy8H886"
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
