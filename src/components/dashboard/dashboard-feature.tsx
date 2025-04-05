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
    "3kJQ3hqSB2P7ecbnsSwoqazbLsmbQTKDd9NcfHCsg8pycUuZ1ZsoUqhXmrcCgXwtngdzBh9pUymGhLtTpnGmso18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33dDXHz2qy1u48vr3Z7AVvY4rnQDjc29t5GY7bfFLxoGT5f4MuHaxQKa8rca6NwG9DQyx97KbozNSJiia87zRS7",
  "key1": "4tgoTKnniEP2RrX8csoaC4w5eaDdR5yXfR9rUjMyQgsu8ENfYDYaLATBUk1LuuHNYXpERk3WLwahUkvGMykV9FCk",
  "key2": "LXLrgDXjjVuwGPb8uBLpyPxLSyq72yCh63uzk1UbZaSsZnzUF3QaGbXNQ1sPJq9rs3MPXpNPGWFVHbtFAp3Tioa",
  "key3": "38hfviiUqQs726SGkjecBA2LFjosxFQDmUz8ibR9iEL4za6AfEwfTDJDWq3FFZE8a5F3m8LnDUCE2T5q293L1Weh",
  "key4": "8QvtxQWNaTwGDUk165GjsXWZHTNxwMhJ4WA7zS1dA9ZzseLbq631BD7DG9UrdxiK3CpiSaE9nYCfVDEP6hi4Rhk",
  "key5": "6kWyLeG6nWtmxGELzmbGqFVPh9qDxTEYQv6zgudgPwD55XwMmijWWqznAvs2Xfo2TnT3Q5s8fydipaMDoVfv2MS",
  "key6": "36nWpdVkAo5m6NmEWp28rbzFXQGxRDrsRWGmjRCQu3sKTJMq9wSf3jBKApRjWKXwe2xdLnF59a1uJwUarsva8VWu",
  "key7": "KKCjCeSGpH739c1xv2itWXMYyuPSj4B8eoVjawTXTZmdR9Rz7DVw2Wz2vH7owwsVZnjEZE2gEtEXpCM4QJgUqmv",
  "key8": "66UMUbUKXgAa65V8XgoiUApxmkFzWEYM6SMqh6MWnstmLZFtCEF2nMPon7ocSwZEvFd6itHK3wfCE2BdeZrjHnbS",
  "key9": "2G7i69WhiZKz3FN1Rva9GHwQdvSBEmdNPEWyLo4UuggP5mtBXqD8jGdG5cxvfcNbbTrFNTrtFYdG8VkW18Xy47Nm",
  "key10": "3jLhsz7kHnTpD8GrjZcbzVp4Xun51e2sRHor5hqYpqTRKy5BF2kqCgXREPjo2yPmgcSNrSSbz6d9eGXatrFe32oQ",
  "key11": "479QENikxZyXbUW3BoMmYpCVXuC6TxLKsitvrgGCeXervJQYVo5agCZ5KBK5MZAR8t6bpoV55jrzUZjrbw8CGp7v",
  "key12": "4aC7TfcwSzq9UNPksYev5vUfGjJnNg9a8XDwBw7uDAQsk276SbmHgtzh9RvjJhLGtZT5KFPiMW4kXUQGmsajPwpy",
  "key13": "YWTX5Ni4Aa8pZQaqLyaTnNPMytSWpdC4SKGW6hHapRMxvABxsH9y4mGMZyVEip8Ym7LEx9tcrJwCJXMXB9JzLJx",
  "key14": "5njKRXhNKDAucXJjXRaXfcobxjtBWi7woc1Rt9esjrAPWG1CbiyqHjzFzQggDf8B2E6xK9qhCnVSQL2HJxauLWem",
  "key15": "3CGMza4Kaq2Ma6PgJ3urTVVFRzR3wgpnwExpKBoFSgXEtQwWzmASMU8tSTiDqQt4on793FEEkguVUX59czmZBbwj",
  "key16": "51kbXra8WAn5nCUJRGNsrScYUUKDntojbozKo1GXQV25RNMMWcPpe8AWcay3hEBZ85pNT1UHkQghdWwDK8XFzCPf",
  "key17": "Yy9HjXXJAMVEx6y8M8TVGMqsyUjM82tqTu7mwQ7uPETyqRhwinKLVRdmRB7W1p3J35crifAL8w1zRaL6HLdWYEL",
  "key18": "2osEzu5fSFpDRYbCD2Ba5JbwY6jU9yW2SJkGDDLuXuJApYLcvmHSsr4yZ5gNPnY52KZ8tZe58gerZAvEpawg8Cst",
  "key19": "4Xj661wHodnMyEUKNDKVLMLCHy8J7SRAxD84s9iHKno2oSVbPrDeGPHyjuDD94wW7dkGbUnZT1rRE7z6ovwgcTKs",
  "key20": "1EtwXWJjDRnAqKySBL1Kz2qx1fxM3ttSZKkcHq7Wyujuf6kd9F8wJ1ZukQk1otvpxFn3LqecTXnubipYHRh85zy",
  "key21": "2ckoKtji7xRkFuZfstrzzymHyi2ven2HmA4uTdSmFrKnB7sSzScnmeNZi14CjxmpKiPQcQztJEXmukXnBmrgao48",
  "key22": "4pLqY9RVt7NRZmQJBagqPWAG2rYnuT2f4zVvxmW9BUBY1nHZfuECMrqGG7pUbVJAfMZxTEEqPPjLcQLWz3SznRjZ",
  "key23": "QPwsVmJQUy9t7974A5vvvukPNgvgjrhS9q2oqrEG4AbMQDHM6UEkDuj4CtXuxUczzCovDnQqwsnaRkUtW27V39S",
  "key24": "3hHHyMjTD54dRfJwidMqUtcAbHHCX5oPJckZjsqLMQ3R6HkHKkw8fgH3Vxw1U5yyMvV9L1v29EVvgua7ksmNUkjX",
  "key25": "31KkD5kQv6wLYjZK1v6aN1acfsgjED34zsrfWn7AzmPQk6kQSMYbaDA6k6Fp14j44VhLHBLPpGPYF8vJYUwdUPa5",
  "key26": "5URyTDWKtXbXfvuxeCM9gPjvd47HGffM7bqRYvZso4Xosut2uFUKxGh2jduCZXPXkKuBNyHDFDVX6VcYyaAVgWQK",
  "key27": "3ZyNsteELEiFxCoZ4wQd7xAytzqQaW4tR9MnsKqaM4EgeP5Tv8NAuzdk9eK6fkZ1vXApe16qLB8Lc6kofrUo4Fb3"
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
