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
    "5ricT5NvysbPhxaBSYm5fH19wyTv9PHzb3v44CTLq3oSxrSjwJmzj61Vxnx1faNyQLmZdkkCUnx2raCrXNnP84pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yrX1SerZNZzThjJ4wpTvXfoqUX7ZGfUXvh5azZdJs7pLkGfbnyKktiveAwBQ2iVPFujNNPpaVedHscZwrkafkr4",
  "key1": "2PnpXo3kKpw7cE5cQng6mQmPripXRQFTNH9fFTnAPHj5zku4WrzEZRtAApehbZqmky7Cy7cTfrvd7Vy9dBahm6dv",
  "key2": "5pYj4J3vdc9Tmsma94zbffwYBKM5A8z3x5WRBKq622R61aicKJHL9YNaH1aPwo6EvV1n1Zvuue6mXmFHGCdLr5vW",
  "key3": "5d73SMAd46rgLqDVR2geFt3nM7QH9yUMNnJsQZ4zSnRtkHX3tfdYA4v8Sk84nqRpv8SyN6jXBAJno6FyXkHTJsVE",
  "key4": "2XacqwLKYSygLYApE8VTe92sFFYBSHf3G1rDHSQkkVDyAEo26PobkKe2bKKJAUzUX3K41LUzvXKqoP5HeHum7td5",
  "key5": "5qfWEtE3yQhPR2SGKAhebamfpMhWbUaFvYeRzNA2TJudQ5GmjxJMSLW9T2r2D1LWbTaJe7pHrPYkS7F6UVHfcJhB",
  "key6": "2HcAedmBS6ufnJPxrSgXkYtKMXkybZzQ84nTMWUQFn6wPuo7uWGuEeL77iweMPUnrtLJUUZa8aFYpsmpNE1sBXSv",
  "key7": "LjxdVPjDBfbAYSGfkrn5JFrFiP2KnPAz9mvU18HycfbHzRbpwPqQdKhuY3HDmHAiekd2GDMY4YvG3AZDTSrWRsq",
  "key8": "nA1xZoSrYfopUsA6XdFp9A21UpLxuXrKMm7YBQKqM5o98Q4zoXq8fH45bJ9jcjgvZw8jE97AxRjaismXbm7A4Hi",
  "key9": "4gTasWJmyyKG8qkFHRLEb5GPQMZBhtmcEE712KEL4QmUghv7E2rwJzMQp5bUaavJDUheeTktDVjy5tvW4HDDNpv6",
  "key10": "FGc3Hd6pbXzN91tvNMmnoQ24w8NMPEw8SWDMwyifycgvqnyrtbxxML3kRz6csNgee1aMuq6Ke4Eb3vV6yjpUJVe",
  "key11": "5JsaVdJwrk29HVBhBRKQAGLkQtZx7YreWaiGxT5W35bVcenDxvhotDWFET9Myb8ddx7qEhKhJ8b1PBmKeCyiG4DE",
  "key12": "2XEkTWZ3ZoJGnp27xRTnQiGdeDA6QgGUJSpnefTBdKFTBkCUrVMGkzQiEa5RvkPh6JDe8ywkR2rkV8pehxBtreBf",
  "key13": "2E8CEkWb6AuJo8KQKasNpmGkY7M9wakHHWRXnR8mstzhJ341fQjDgawPM9ZDDQvqHHokdK2i27RoghA4m5hXWf4",
  "key14": "2SfuPgS3M4ZeKY3BaEEfLS9qj1MkvJk5UC9mfGJ1jRHX8JViDqtDtdLYxazykDbbaoDwUfTKFpJyEvW9dzKs8EVX",
  "key15": "4Fna3Z7aBzNmX9A8hekvmRQS7jpxCRWvmedDoonZMDuYfycQDZuvaEvKLdxAeceiNJ8zRGhtFHEZsRkY7fKoHPRb",
  "key16": "4ZdApGASawQA8hfgbGy2FksvPSPuyECNWgxdQhwZWC45DZ8Uqnkiotj3MHNMSyPecxiWw5xMMXQvvA1LJd8uYHQR",
  "key17": "5WHr9hZWUYwVLBwuABNS4bQ5Hw1R7mMAGr89QmgdTLgzMxRnn6erz74ZaLu8v62NcKJUuHS2idPmaAoNttUqcyy",
  "key18": "TrNpiYtRDMtZtnMGpJa2SyFLrem21EJ8ajbRYTV1mtDjnXDSJ3vGyUgTxXPepSLo6Nh5pymMfaeiB48tCo1ci6R",
  "key19": "2H7bGPB4yPuLoQV7zH68H5SLwXpjuqEmEF2WRrP2YbxpuDJAvCAMQ2RRppxaW6EfJTJvZyP3EDJCczVrbyjqb6yo",
  "key20": "4Jw3PdMJC53mqtNnYxyucaMLfGS5izQjRP1LLu4Vaq4ddEK28WyNeMhHxSsNbAbEwZq8atAi8JNC3ZLMxactCDQ5",
  "key21": "DQf1TZCwugsXtF9VAkta8GEDVzRY3zZf6U5o57VmMx7KecAQRQq94royRm7TY2qa4666Bpg3jb8kpSwrgD5MQLe",
  "key22": "4JuuyGTtBQvyspYBpH21N51kXDYqgirxojx9LZUvDmn3za1csydmSAW17GkUuSkCywhbYBAo2Muh3MtEz7ApT6jk",
  "key23": "2t1TRJTvY6ajBPWhrdC9wQBEsujUboJ9KUo8URMmdPwinMt6gTXrU1uNHQ1itZhmQMjdh8nwXwTFga6Xme9FTkdb",
  "key24": "3be3vHEeeFur84magfVxaBcE5qsuN1ZdTdSjLMBez6a1DW6Yj664YAeSPG2LEkRZDTJHerqEkB7BLr4KVnTAa7M5",
  "key25": "2e8CiRXf8Ai9Ak2cm3aUd4DHc8mouz4HrHySZ3DcKzrgc8yB5cix9JzmbzJFXgBZPHdFrRWajWVzaPVjww2hSRpc",
  "key26": "561PZyYG1iKbEpGXEknJMhRMSHVkKY3hNUJgJLDkoVbACCRf6zbDF2YVoFSbjuayaPovjcHuibssdCEM3kGewPgT",
  "key27": "m9L1rpw6NjhVzKgTkyvan4GRusaW9aAJpX5tf87wcDZE6YtXvGzvDLUAYDXUUn6NEjNE1FNYLqrySxUMAbg7nB5",
  "key28": "4oxnPsifiQCkproudtTCJYxMuAiuCQGYqkt4Hh5miinku42gFUzVHiUhjwWpRFnoyxPSLZMuSoba99aLKHaAwQ5Q",
  "key29": "4iHjEybdHEqBC4zezvW5SBEKaVH1T6hvLURoooYqvpPz4xLBRDHZRbQ2YuEKeUEmPhA5L6VS7qw8SNa4XQh7YnPZ",
  "key30": "4pfaS4mHtgqV7MuFLNpEXHpxFNFR79U7WYrM72WPcmcUzwBQx8aWAzsTeqHbUmfLPZL4tyUmy4Kb1bUSq2Um6WDN",
  "key31": "5d2kQvA56B4cyXigjsCz5cNNYzmReVRpQUdefyFBwHpKTDMaLsmAmPoWdpwrk6QrEPEkLdvzUixA4v3ZFpxWc1wx"
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
