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
    "2EtjT7gmYq9PFwHGAZfLpqTpDW7Zzw7VV3fSai4F75teEtrvnwPJ7AtJ4VzSxGvs9uJRt1baNkbTQaq55N3r3f6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58pqSaqAcFgiJeeLPjb4SrJcPJ9Z6ZZmeTCjKyG8parbSWEkwUEbVnQzuHvHyutJCFK9MiCrnLqt8vuDybMoBb5u",
  "key1": "3t4oUHkRGhzQhLtzPhgK2LdQqYkFLuPugN9vLU11uMdqpSy8Uy6sLViwn8Sdzif3aotPw5vqV8WmLQsWdA3easVZ",
  "key2": "3NCdu3GDL69QNqkBpQzdTyzZPhQ3EPKq6PdZNVpDKoaxN4PNmatS5V6hXrX2pwaxC4fsMVwFGKZffBunvfYgxGME",
  "key3": "3TJxUM8yemQnH7MMS7kjVkkPsY5XHb6fHEtjVva4fPk2zMPeWnwceHFkqSrjzHRoxJthGvVcmAMW4EB1zNos6tu3",
  "key4": "4RwhP724xoYjL2wGGw6kTFqBGQK7fkGxKTRW4CRZg56frMd8Xzzf8Mo6vWdHEi2gXjGeNvKiG6PYvBnPHQ7WxRuQ",
  "key5": "JwUfe8icCkXS3vEj9uaU34Mc1yDntFAzn4fizn9oip6bnrTcFjnaBSH6Rmp2J9YVFXURSEWGsgeWUAck4bk2wU5",
  "key6": "4vyoJWuSy5KgvD2qSj7MBPWqmxPZwhwLTva1dUeDkS1472awh7vAdU3hojvXc9gEYi2i9sFktqGjn7spgzqXaqpL",
  "key7": "2i8NW5RUJqkxbTrSM4AiycjZLj68x5LkgJRMygo4XZu7Ar9tC5nkoDs1X5Ga4dBM2jXidutERNBNy8Ew5YkpH1wM",
  "key8": "59Gf9WZztPVNoUYyGb2qVbamwdeiJrJDjGd6UVLARw9mPgDGHdfKrfibxe9iJP7ud4qEHXCQMEmkcE2aLJRgWWu",
  "key9": "3PqL4gjgGMXbQ3pT4di8q2TASyZsgqRN83Sh43LrBWypE3KxpguRBULaAoo7JPySEN12oCQbRyQRV2n4zGeMX6pL",
  "key10": "4sQa9nx4pAm2RRJBkZas77EuyeWKFPMx4bzHtTjXdVCmkFM7nNyPJttPR4k2RuCqa4NBCLvXrSX1s4jfTQji3R86",
  "key11": "288yrSkqHuZuarcxrZzGBK3J9Q6ncE3AYQnovmGiLSQL3HxYF7ukgCodfqUJyV1xpdpP8zZKn3DiJPjfEpYTe4B9",
  "key12": "2rT3hxqE7jtvTWuPVvFeyDd9mptbmU9xUdgBgVuLxwsnqMnbcLAS7xWY8fRYXR94p2aoydQ2KkiapGJCZ3e218v7",
  "key13": "Byc9NQG8ojFXXSm636hJVLMt82EPayhMiHZbST866fnx2sA4pqQehSrwiyrwMvHCmKWvXpXq6nUwjGoAEL44m7M",
  "key14": "i3FgyQByRSMsyAJNgYhyyj92iN12H28PMuuoCt8umCfct68gWRwx5UuzGdJpjKkTfC9MY9UhSkHiQuHez2D3Aa6",
  "key15": "25YdACheMsfW8aV4vJpohW7FsbE4kNtrwopbw3wuFCjGp69hhPEtrdnTfYdFox7dAhcPaowf6JpBuYmm7bjsNdku",
  "key16": "dKXn8y52dhsn6aVbzusmQbERsAL1XU2bHWZmdcgsxp7MqYpsE4f7BneT4riymCRq2W4MvfuCQ6EzuBKAYHGpv6v",
  "key17": "57QGr1Vbc99cxm3uxqo2cuveDrxnNhqxWsDBxCtoKpysRFAxzHX95FVNzRdJebkZCw4cAVmugEwTgaR5njP2gdGn",
  "key18": "3GKNVD9xcknsjhQrtYygkfWLGtkJoQ5BNWYzY4yXPaqUyEH7LLSasp27vZXD824M5HDKdKK6t4Kh5fpFj3JXCLHU",
  "key19": "3WiqaDAWv2ZYdt9EXdP53EytjNizgFCJYsTMzsXcsvBJswNXkE8wcfVtD9wzLNSDuQeXP3wVqDP2nLZ3m2D8k1Bp",
  "key20": "2nL1P4vLB6q4vgxqgABqFPryjxMnc7mJ7r4RH9WDj1KBSBeADXgDY9GM8umENXazTJAnWD8Rd8KNGHdce5sbUSMr",
  "key21": "fLy3KEbPrXw5jqBmjNTBPBkQpny7ttshD5MtSioJ3J6oF4tPEciTncAmPoUxi1ATwbcvFUfhrfhjm2qpXdexLM5",
  "key22": "5cpEiG2h984sRmSipDtAHSfDMWgR9dr4HCcJooLXSy54YzvpuWMouj7hhGXKuHbMDxKwe79DrZFcQQcjBKokJ1yw",
  "key23": "69m33w1EdjLdo4JeBiM42v4zwMLELngFEKahUCPuqK57qoLyXJsTGoWwA7dY7ouqdVaezPYd9HKJKTBoSWWgocJ",
  "key24": "XiAjFDzaxKAWCaghy7ooHv4vdQY8Y6wEvXDwwFZFr5KhjZafPXDyA8noSE4PvLruj1ogBiyPTrpYjuwhA37nLrT",
  "key25": "59vVHTQTksjzFuv2wbH1tEd5tDSiyE2WSvcTL8XsXq2w4Bgrg41gqjwUiTWnJfHznRqCb4KacLLZmna4bdNzkxUh",
  "key26": "9tCcpPiXKxzXko4BXAvEdBBWRmoVYiqjU2pRBM5RyJ54YaiY1uzqsUTKi8DWympCA7QHLxnFjMPAuwMeZWXAmq1",
  "key27": "3bXrC2gFnMWkoMBDuXUpmh5HQW5QQeET1jfCPDeUzw8TzZDSjc6fM7JyuMyCPJXGBwehQaZVYr7AZcfUTyFmSbsf",
  "key28": "2ci7GnCmfcosavEc2V3UPB6uZ9ZUzrG4DQmnq42RvDStAAdaH1nj5MjKyw3Zivb5ypfPUP5ZWc52C2qGmnPhM9bf",
  "key29": "4wGobTeVKooF4pVxTrhkgNH6AfmWfZbx13Ub8Dm1qgLFXDHamrfppGrZ7CECViGWa3EWbcPBSaLE9GHrXdPu1qrv"
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
