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
    "4CpMawky2w3gmERVQAtYt6Vhu7siAgxVBHH7sKYD7UxjwEQZR15EQN3Cy1T1Q2ztKAPKed4oe2srCv9owDXb2EcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FyJMqHat59DGXg1UJYRSEpXzfbiDKeAZ2FDE42G41p43rrgGmPoBp1T9wsvPEm4YjuY5r5vKpCJByNGChiTE56",
  "key1": "3sA5PbthDX4X7ok4zfnr2p4NnWqu6RwbYexAoRmLwT1eV4qvLb75EE86PbTjq1cnSpbkJDErEFuG1Xkb7AmSaaVn",
  "key2": "DFxXW9Hhx5edE2yfHA2jN4MpYvcaghb9rx4shXnxyWek87YPHU5Y4ar9ps8F3NPQo3FEQPFftJv9EpmMeeZ9Mj4",
  "key3": "5Z7k3paQzSBbHnBWhcK8s5kL9F4gnhWXo6rdJNiMQB79WFvNngHhTU6AwaJx7ZBdigeTerA2Jp8um1SxYJZt8pAd",
  "key4": "FsJScif4L6gjuAsR61HE6ECWkjWPfvrjvCJh9i1EWrmHSVSPMXo46xb4VfrMnwh8M2S7X3nQAGB99zAVgNbxLix",
  "key5": "4FoBFSNawhGmZ8Aekim1V7n4cujTzyjXxRFYr2MHh3vMkPFcAgG3R1YmCbRDU49kL4SZv3NqG3QrdccF6Cy5AeGs",
  "key6": "5kfKkvbtu5ke374vvqExanHqW76Vd5UBrUhM6PGyTEa4YAQrZWw2Dxh4R6jiK5DcsD3V1wTFbYWGvWZXg7jNwS4q",
  "key7": "4sGTM3xtPRfzFkt4nA3biA5R4PqPrCNtNdwoqH5umqLJ2zaTB3VTqgxGY9XcYoshPvmALM2SuWgKJx9pYDjXR1jv",
  "key8": "3DHLtG9KeQ6xjydRULeeeTrryCc2Qj1RNrR1qB1eiSxW6oNwyzXfqfoR45dKdP3SLicmxiwmoc5bws91JQnM1cj1",
  "key9": "4vPthALpUwi4P4pNqFUwQV7EdxEpX2FeQ96ewTUH38ckEQyhRirdE5uab7JBWNAc43m5YvwvVHqseaeS1rYXAP1",
  "key10": "4U8gobeMhP34DZoiFu6qwdSVCpxXcXCT4LGbQFawibuEaQaS44dwxbkHiPtVxb4qD6ix7Ao1vZXgL2rrbFX9ymxb",
  "key11": "4tmfYdzNmBFPi1jvhp6fyv2kFQAB8UHGiUEUpRDe3Y9aQWPGXookxxxH7QertHWsWGKuNU8cCon3npbEdpz6eLGB",
  "key12": "2SXMf7ZHqydV33R7ywd3TyHTZsvYvp7gdsmVEEXyBd1o41gnfJEwmHHbi6KoQajLGj8umiAUanFheasqz9gKUXm1",
  "key13": "4SAhxaEJuJRZpn8A4AaeQuohxbDXKzHyyd352NSuJXbSCrrLpzCpgPvAoczhjN5tMaH4Hn2j15yrXULz1VYrvAQh",
  "key14": "3XnKQnBsv3dkcqrzV84CcSkkHzRzhT9GwWzqPG7mimJcYEZvMYrqgHsfCLDayczxKp3d6dPaYk1uDhq2XB7cGZH6",
  "key15": "fw6zkkogSALVXXS61kfdzNjEymbdsaf7W65Zcs7ppVY2i7ZT77Xq7JmzpjFfL9Lk9cvm5uB7JtYGWjN8zaScBiP",
  "key16": "366qfB3zBd3hjiQsyNSDGDxFruTR2TadYNfupnqHeQatABqkYJiM8j7ZkVpnf1273gByZzMXHXsDY35kkE8EApvr",
  "key17": "5HquqxwBUXSMbkpmY4jLS8v9NXYYGpdhrV6bHgSwBxyGCrwy9z2nbKNDi8s5TmBH9xZKyb75U4eCXkHFFq5uUqBf",
  "key18": "2w8ivnVMcrergydG9tP8RkcTGn3ByVP41ZtfAwG6VBgECCvWSSHtnPgBHhvqcnxS6NoyQtrDF4W6X7VZDZZVzFKD",
  "key19": "5GW2uNt1DwA5pGqJX3nmmHXkEzLovPvE8VD531HHomdVtkn8ZHb5kV3UF9sW5p6HKsgwUibrstmGE2hpjqvEcfWe",
  "key20": "aEjSjiabgdBJxVUzj7u8jvfidiA9rNoARW3iKXhqCfNJS9kP6Bgikr8376cPiFgCTZEKZyr6pAirnB4mZsiBAhW",
  "key21": "5u5nxBqAoiMpr8bSeX3QLu4otq5mcWJnjcDHedCrQdp1w7VCkRRHAET1AV3urdFteApUEFbUwFgy4XHeQXbCL5eN",
  "key22": "4hKKeFwvDMzoQCsE7mqEYo4ajQL2NE4djFUBFgNjsvZDcPv5wdwS72uEWsjBABYNawu51HDE6k9Brt9bhT9XeB56",
  "key23": "YDca7tZzKLdsvFRRAiqZKre1HS6KP4UEXiqteYsWzbzZ1rcZYT4GAVQJeRrDW7L7FqDYjfi6yW1WhVzksZVfuYn",
  "key24": "2AsgymYkddieT3yLs7GFEPAwq1KxySdKdMfBgTu7KNwZe1p2rwER5WH3LG9qNfx1hY7zr5GWTs76PZiHii4VDe6r",
  "key25": "uazCQoHvLcjwr2S4ZMqgjQYrFQo2Uk5d7G9g1t1xbb9YDvrWvnnw3SdXMTgeXiGwaQtew9EWdEXbCKTveK2HccH",
  "key26": "56rFMgZYZVyLPnuRfwXrvLviE77wumpkABsbhqnPwRx6od8X3HytqHzHegKeEn9mGjo4SCmcdu5BLkYyYYKGsj5Z",
  "key27": "388FZdSk7119WeLhesKYKCxYkLoFzJroHyCU4GErP2vcbgtjfX7Tcq4LRGm2AWi786gez63PDxMHgC3bJajPUVvv",
  "key28": "XfhJ8N4a31S4B2Be2aPQ7EgSSs2Fxq4hLKpK2gnGvsF29CKvGyD36wMbXJA6fT9L1C8PRsNc7Rte862ASzrmVkM",
  "key29": "35ERU9YBMQTzn6p6HUyq3noGJjes9WTL4YYTAt3nw7P7KBhboCm5chTmD5mER4dbbzBUge7Y38FzNcdjiKnHaeH5",
  "key30": "228xPSEUvHfrRo5gfapkpfin9WD2vPwGLeVk4hedWw7VuHNXNnsWz8hgr1YUAdkCy1nfgdqyQNoT8N2SCkfqPur6",
  "key31": "wTJUjbPL9gCPixe1Q77Q639CnBZxhRopfHhJ7XgLLgZrcKYqa4ShgoucmdvierN2kZ2p8V14c23fyCjWm3fN4G4",
  "key32": "9VKbC8uNpBsnRnksqJ8g1eNetnK2AiNVFyro6u8z1iHqzkVWDyKkygjPVUTjBDnqNUqarDs6Px3DBTPjZAJ46d2"
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
