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
    "4xPA1D4ekn4dJvekZevcV6VAbaTSABCr1YXPLsdfgmRGkGuXqmPpEHqSxtsS9fUtf1WhLPVHzvQmTVPBk8ibKQix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UaE3gPySnkKqfRfkT74jer7cU9utKLTB6HC3xEVWr4XMPP8NZZ9S4KDRbYQotpuDT2YAb654NPBvPVAeM7dEheb",
  "key1": "LNEiPCY6bCPMi8NgAfAoPLeF7B2CsFwjFiWNceAmPiafK8TNREsYqf52PGDCQZm3X97mhs5CnKRqWnMQKY4CQQT",
  "key2": "58rATqGrTcVUf4uthUpYdv9ioU8Dye6AVTgReAjaihjaDZXZ4umoXxpoxcgywSHXsxjTfmCUpaWsu9rLS6UXrDkU",
  "key3": "ANvvS72H2Jxv1gByyFihD4GVKGXMtAw3p7hvHp1GqoK3v3Jsnr7b7aCEEuNF1TmGt6qP11v9rdoWXzR5TG246RX",
  "key4": "ENjFA9QY1hc3aJNJXHFkztCUYzoQ6oZgY1y89iPUhZxcagNSEUdSkQVjRPHdedUeG9kuJz6ATDusf3rUn3Gw4yQ",
  "key5": "2GEsC6gnxRG4uZjVcY8ZS76EdPqDYii18Ry4xC7q5k1CZGxfnYfnoBbFkBJFA4ny6TwpsoH3k9P6cXDPGUpu1JXd",
  "key6": "4T9TJ7okn4Z68ZAY7DPj6LjiVyqDRTiNhh4AyFWAz5QXzg41GJNgCrWJzvpuVmYQE9FQ1rKMqcma5vTJyytM4qN8",
  "key7": "MJk4pvVvjaa8B9WF5UwQkWMJXiejrt9uhy9VprAsce1QTfg9B47TJonFXVS8qbnJLPm6XXRp3n7eetuXRznty4y",
  "key8": "49eUCEboxhGZhp6ZLSb3LdYxCffB3YPPT7dnaFqjj1qcMK8X7k6oE2xBJaR95ry9Mr6TZEDGCzVHeVbmhTXD1Q7N",
  "key9": "59sVF8shm9GxoFSBBpAQVGnNmHUS5fVszeZ7PNS7ZxujoqSTr9kzacCseZvfzpRFgj5hhjh8BfciN5SnX2nK7cxA",
  "key10": "GYQAh9jd6ZLBaquVE7AgX2pRNZyFmW9zZmH8uUsiUcurZQfd4qaGgbjpBhstv37h5svDJWejJfYXQH1pKC1GNjY",
  "key11": "3ggV3iQjhq8j8D65u2ZrV4aj1Bx8Hh6pa66dBXmdGtePCJnhWriRcbQtHxKuZHppfvdk5QEkite1Ki24AMcdg3Hy",
  "key12": "42Ht6ZCXeS6mSpUmBPp3LMGYMDSUpcAdn26sxqwUPXUTTcfaWETKdxfqz3PGP6w91yTKQZCr1VF29dH1CiYCywGt",
  "key13": "2YWm9ro1fWnXQAbM4e7zgE4Fp8Q89YCChYbb71Q9VfxX7fTbq4PTY7Svb1oPKXJffdetKhjHQqrj33YBaqsEeF1z",
  "key14": "65tmeB5o8CoGfUG4RbcmQGATjw81uEcfBX9NUQ9iHpGMMBcakRGk6kjGreNaDX1Tji4UgA9S6ij3z1EkmHbHii7p",
  "key15": "5bT2B4ez34o7A2s6yTWyMjT8WNdrcsAt9bE1wAg9nx8Aw9WiVFPTcTEynM47n5CZhPzyD6q4dK1w9AX9QyeegeG7",
  "key16": "52KG6adNWmahmEpx71B41wPiyBGkAuAbyGywbB8v9DNqyf2EM31x3o6yFSDs225NDVa8zTkAZcdYdTaX1CcqPFfo",
  "key17": "4rTcjRqNq8PR182W1SGw6Q75EYhNqJkseyfMcpAkE5JmK3hzqXMmFWMTcttJ1smvA2StpVanY3DSDgzmtLMk4Xkh",
  "key18": "8M5q95k7NT9zmesfDXbwVrqzZsGZUAmQFyDCSWnfm2rGfPoqCuaumLyv4YgYPU4EeFvQvHgPN9xDtrCJs9EZT82",
  "key19": "5NkmsNaUNTDwkoPYXGfBrABNM31ZSoBANwSSTMuRnaGrpt5PRPZK4G77M9pehkpDNoVyJi9vpPNLmCV5Sy18vQgj",
  "key20": "ejpe24iMHhW4X7GFUZxQUMXrr6qFVgzvatcZtnnBPBwFYDCoBMuymkYSZWBwxiBFFfuhw4K7wjcWJdF85f79Fdo",
  "key21": "Pqg5tvk4ZtA3xuW82rzvvcRzfWmDix4GAChgRT5vuc9HGEfxbeNMFYXVeB6AhHbnGcN8HQaQkJ3UXcLQWrxCiVU",
  "key22": "FgSuGr8CdjZU95L6Sg8tW1SWRKZqk2mdpaM3Gt7YxDk2AhiVP2g9v9jtCCHmuKojJ6SrGuoFVtXhyUN48m8omHq",
  "key23": "awsT2Rnc7MAkqJtTPKjt2YpQcZDobrB44M9zqmbdHS3DwmXAFYYqEbaH9zEV2SxHKTG1wY8Ww7DdDkN5zHdKE5x",
  "key24": "Zhy5qo7KFZgEUGaq6pufnXfPmdFYrKLaq8DAXgTsCAe15tTYXxuAL7kh74Mgbua6X9q9GnyQrM2fPb6wpw9J8Sg",
  "key25": "4QbnopyaDiskLhfFTnwfW239C1beWieAVT7QW9tTiv2o4jhfnpDrFwWswXNKxSLwKCVrPcY8giaVGfkhMfWqMN9c",
  "key26": "HA67A1ncZSzjQCFSTQVUgBZpJURzhhG18APLvpjhXGqB17rGLW7D912VTRAp7aTjG3FiwN2YfwKx8s9phT3s52U",
  "key27": "5Dzb7VuEqM2LJv2oUoEsnd7m4gw12kTcDcys9spQSGPixvF78dbRGMNzCBhJ3uCQc5ss5PuXDVzpshx3rfHXj3F7",
  "key28": "4XuAvPLhXRn8aCp5S4o5HABjhKDszWJe5iy2ufh7btfCcBeaYaGiKdMHhki69TzV5wW5dss9wQD7U5zREXFw8zc3",
  "key29": "PF5T3p5Ap3TFdr4gGfx5F3adoE9SMCUKeX8fGkZdi1C8GRPve7fqGygtHu3557JarXDPonFjXcK7hpZEDrNgJyW",
  "key30": "5F1qCtqGt6rjswo73dqFtkX2U15Emp7JVPf5DvCR85FD7Q1mqBUgW4o8SpuGKGA99evFKnRFtgDNnj5xNrEZ8Y5H",
  "key31": "5J62rpaT4xgEoAj4ETx1e6Bmf3aW4MQPERPCJaRSQ3SQLWhCP9TnTF7CFzv1EmUN7pxNMfRVkkeN2PP2vdDjb78b",
  "key32": "5LdtZqbzmqrUSdnk4UrjQzzzpjHr5TdSBD1BfTgc4jXVb4cW5b1AmGNLRsqxYwKJ8jrUWP7dwUJhqo9hzWqP471n"
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
