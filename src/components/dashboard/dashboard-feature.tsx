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
    "47SmCJd6rqRNWuu8XWiRk5R4ZygsxZr746bZYjcBKFnyGPu2WJs9CcA24BA3Ysw4jvgc5GvQ8DaeTuBK6ovdrhZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TZLnjhYw8tinwENLPCNPvNhQCzarUPM2nSggPjdwhXRuo2AJxZmqLomYnhGn7rxdogaFvJZpxtgpgbeogPiUGJ5",
  "key1": "64d4PtLtqreG99VixhMWV8CbCLXSYhWLfGvJm6XtLULgThSb7hgTnus7Tm78oL9n7fZVFwphGbQo6zF9UcsxhKtt",
  "key2": "4Wmr8V9nsd9Dbg85Xyfh352TrVo2kfxiHjPvs2VwVC8zNB7VgiX7ciYdd4fUwZYgiaiTVSPKLjL4Fy5XEv6gU3dQ",
  "key3": "4zT4Nwy7Q4APLuWWWojGEsc4rogL9Rc5Hk2LcMwBRcje1FV3D3fiJroMQGjnf4FVNT1CAcCA3ummpDT8VNHaQjNm",
  "key4": "2q6dyCmeTutWwSswXqUxTeUC3V7ppvCFzbeooEQVFYphQNEPzhRVgNarbEkioau7vNcJfs1G87dkrJUjkYukjRVb",
  "key5": "3gNMo9uR2qvXuFYVXPkdZNnaoiNYiVcScXzCeJAvciLBzRofqWTiRMtZDPMz7WDXD2QEsu4nXzzQ7pT5eSXCge3h",
  "key6": "3NSBqRvvpsYtpi81KpTq2Z1khiEN7UHd9s1towBG2B3FmJcymdD8PzzgGoSkjC68GjBBRpw1GeCjMbQdNAh3VHB9",
  "key7": "HA4AsRNu72ym7S2K6ne9hLaPFKHwrnw1RUqd6prC2oW9VWX9RF4J4jfdXEM985HHPBm6qPfrrYL1DNWQSJbVrrc",
  "key8": "4MVjwoAAHNqMYqZagiC3uazJBUBYtoMPGBLWWGoWPK6B1VmqSFs6nkLudhJzjenj57mM3w3aF5LuqL8AYeJFj7wF",
  "key9": "53FeDXRdg86r2YChEWQFtTkUCZgicGXAARg8xY24YBCPVTThNdFdUto85SPZiB1xmwMTm3t4Rp2BJgXCp51Qa56W",
  "key10": "5Q7XLAcpN9DJWmoHxfgoVaVn1jhYFpb8nZXVe2RrEwEdF8oK4KRHxZKv4bvfqmVbE5FxoFQSNpMo5sGwZsjBCf9f",
  "key11": "2UShKonK9wK2fdeeLH6MsiADdQJyqcAShAfoQc3kwBBEanY1rxRXZjUsptRaF6nosayvsJx2H9bYy1PYXVQyGBwu",
  "key12": "3r68yAezAtgK6zYczvDX9vnHmSGQMZNxNaC2XoUKpDv2o9WVWghnjgvYNRsuBNEnQHqXUbsDp7h6g4VsNZeuCJFB",
  "key13": "HaHpLe7gbs2GQ6xfcShSiB95EMuvgoxyZnWsPV22V5ZNCCmrF9HYiunh3Ppmn9hRwPfUDVDBQ9PNdgoTSmgKJRg",
  "key14": "2QArh6429q969CEduRnWeqFgXfT1sUrCdFM2EsgKz7kTM6P4uN4yZ6yD67Qjv8Z7C7w7yvwGGvLdsYPevtCK3PAh",
  "key15": "4hA892SBQAZ3HqjXMfTa9nWHzbKdkuFmiqQCCixffMhtDA2C4Q5RtcZem7QPD7pb5DF5cBoUNAFG97M4UNcJxfxw",
  "key16": "4wEJhipBj5kxFCKvUZscLBEW2dpfciCeLj5CxAjDF5gzpMLf3pwCHGNuNA8hjiT2XLWyNkpYugBiDeghn9ic75Y",
  "key17": "4Vx6fMryv7acu7xwp7HPepKNY8PP1XL3rWEdkAqbxj3N4qNuLvoMkEj3ERnLzgv4y9KrKHKHer58brdiXTGRm4Ub",
  "key18": "CwUDregQRPifN6ka9ELM6Dj1GfLCWJ4Qu4cJxftZmYy71tYSTN2iqfCD5gFQELqYk2FZVA8u5PZ3LqUbXL9WJJV",
  "key19": "KhKfow6resBJYanUubbRaALo45BXSSqwkMvLahGFjvJ1LxCCyHpfHae9bW6VVMoXYCRQQ1QvXPTgdL1XdumLPcM",
  "key20": "wcqk2xwRVosY1Bct9rEkRDSbEJzSpy5PHyhyUW1k4eGvuugLeHiXQXGogRVAhnzyuPjbaNei42JAkbgWjFdPRth",
  "key21": "3XWrUApxdRv5wA3T4yY5o1aKJwyYZAAAWQzF97G5ExGaq6wPeKQxpcCdTJEyLmU5nyDwmgtZQPWnTMkmxbhYpdC5",
  "key22": "2UJSpTq2AipB8H8AZKymVUntg4oVwTqhCWn2umgM8Wws8dLXXVrZRfRpC4wqTKdwfU8B5kQBH5brwivcgyhu7EtJ",
  "key23": "42XyeBU5uyEWmLZoZAnk4hB7doVTJvfmHVxB4Y5rFRidvD4yXZ3JoHcfTic6UQzgXqCSFjjyEKsn8gdcsMjKhVmK",
  "key24": "3EGdaTDAzVTgtqMzNcD9yrTki2FWA8voSzZDDbJf6QWHR5vPiZqA3YxqBhf3232sBcVdMytFTdu8TMKeqonJLZku",
  "key25": "CEdrwRVWReUvZau9XtFQqV9dHJtrJi5WNLuRikLPtPokLHxG2wB9opxgXfy8bPddmPSqAckYpWDLnTgqe5kF4fA",
  "key26": "5xUhqexjDDHT3udgYokw5MJcx1TyfiUFNg5XQYhnf1bEwnsrXuBMp5suKuWiYFVWLsPc5BLCyYcZ916rgXuiXtvG",
  "key27": "5siLNAEUdu6SWvLeA1ehng1wxjGjhcaiUZvghzZbM1F1Bpe9aSJMKf5PXVk5Hwrm63FMhjQqSZbcWpSGRz2JtRQ1",
  "key28": "oYVyB1LHhsy9Kcu8q6d71mzxgXtVgMAhsZXAhiVLupZpyRA1GzoumUqdtRysZ3yCdB2ZVu8pgG4QDGTr1kFxVUr"
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
