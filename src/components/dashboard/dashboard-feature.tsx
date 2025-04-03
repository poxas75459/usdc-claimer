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
    "2aRpj5uAMZav3t3QKDMyX6xQjBqG12RXN76HDXYZfvic2LGFCM8fs5eMYTEZidnZndViMg8gPcTm9S2PcMHi17hm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27FTMn9eG1KYebywEjKxjCZz1DYUkNLtncq5WyukPADyGfunXe5gWYWwR5iC5GvbkDLpZJqN6hjYrWUuHhTmPTmr",
  "key1": "4HhMqF9m4BeipayUUaiaAPTBL649RhyK9fsZQk9gzYhdHJE1jrP5TGxyRrqm4xWSwpBsXa8fwBgZ5g6jYMRaomJn",
  "key2": "4WiYCRWAjowEEknoRTGaKqLUdA2wz2feRaYve25hmZBfEpxGgt5HDvf6KarxHxNdSun6i6i2tJm7mxiuBfh6MHFP",
  "key3": "MgLn77GNaLJMpSxg655vhhsC4nCG9Ve2eJFw3w4DY4rsyYDYYvMqyBQLWSA6UF6upWmNW6tEVruuze4FojeHsRy",
  "key4": "8zAAV64URiLPLHdqcfjdzYhYVdVdGVibR4DAA7nJpGFputrD2YvfDY5aiKRDVn1EVoqxGsRo2DCxUmwz6CDVsQc",
  "key5": "pFsSpjbGWfqpGKJseHThCGTVwg59FgVwgYnYyvxb1dPZi1T9GFPW5B553gRkQJ4gjTi6jakNcUgPjfodkhVeRAv",
  "key6": "28XnbMPtn4kBRF8zwdWeNd397811gfWBeE8SCM5rx9DT6JmYZTy7ESKHCWoyCeHER6Kxi3u2wpsX1h7cHqN7RKuw",
  "key7": "oDc6jLwHEAHGUV3HW4VwerbFu8LujkYE6G8gGCkapPgdgU3RoYnBMYTpAtFRAjUKCBXj5sJcr18gmFyieJ8sKRR",
  "key8": "5nBeN464GMAhSYNrCcsQLiV4H2mwp6ZF5F1g4ySWA4yQZph1JRszmjiN1iqb5GbxNTbNg7cvRYoFk3ABHnV6KFbp",
  "key9": "2hS8mkAyEB22q3ue3sdi9W5Zop7ATpMA62q8hmRedrZSpYCAYKdSyxG8tShigsP2RyuxrvJAiA6o3zq9yDRrHv2k",
  "key10": "3endeAq4hu2Por6NU7q9ASJdGSWf4Eky1vpWphHe2iToavzQ6FvMFTWsAM8dUNwA4wdBmqSazQaFkztxspWFrd8g",
  "key11": "2StUw3veZBCwuUht8aT4q2GwMpWg5uQoXoATnXWNxu78csDaY7WUcxZrWEpFq3QWLvcHAzE1WRZLhgofE2yBPJji",
  "key12": "452KedtgQz19rVyFRH3Fg4THhzPaFCtuUcYXm88T2gsUstPxvxResM5mv5sixbVanj4hD8V1TYKwu6efoTmkrrXa",
  "key13": "1t6x5LoDiPW4KqKPWEeNjHGcCEjWphvetjHSx9tq9cXUucLwQFUk8KLtCewd2DvmeVH4NU3nJNQr4KWQsc7ZUHS",
  "key14": "2UkVvnAnPxMWejJsREekAfMXRjgopMAdfFd8v82QxDLP4aALGuqdQToaLu6niLEp7uPQ29Yrz1rRuoHu4HMwg3Zs",
  "key15": "1VYdAwYJqxRFmAXQTGtdxYBpyZzLmTqKScUFu7fQjfVXrgt6kdHNMG74K2NwEjHEcCmZ36pH4k9biFnvKAoq2DD",
  "key16": "5Dt7att7Azy81evWg8VF6cuSPhV7kbRgN4vq8K6LbQQbGBFkmjwiH6Jpih9MkEmtGdXWUP6e7dkj1zzQYUTcS1hQ",
  "key17": "orpqpg8EP1PUTy6eEUSvoYDbanFnNuq8sZfq7UbtSaV8e1Zjofj7UZEMaZnEBoEv4SbyxAicRED1MQTmqr1d1vA",
  "key18": "3B9dKANDx3TS6zmaAaBwwyKWsDhJuvLdzNfPk31eFYxpTpKWh8Jrk77QHvLWu4yonEkMNWLmRmn4XphhDHfXMJ21",
  "key19": "5v9FprffqSRmirBDEtAXB3UQL1H8NsciKmfCtWc81qB7N3HGZwyupWs51uNTeB2Cpc1UJF1w5o52X3f3VYb4jyg7",
  "key20": "2y8dUtyqBhj1WwkHcDWtNDSEko7Z7Yhn8xNF7ZcBLW6jbADPe8jnm2GufMFduQLVcxs6mqWvqbAq4gBcjk151b21",
  "key21": "CPK2nogMiSx7AbuVnBWvrQX1F1mtwXgXbGD2Arz3VycMenJ5jJDWYaoenBuRJJo7TCaJP5MgQmTicpcvaEtW2fR",
  "key22": "5wA2C7rxL1Ewmun53KYRfrUz52Z42erxuLtbBy9CvkrPW7vgJ2wvsMnRdaTSXjVa4jzvoBUk9mB8VbfDui4g5kVz",
  "key23": "3zr9NvT8yc9JmMAVTxEJWX7ezkce3LfsZc1xXcdUjuGFhngFzkkg2KWKzU3bCUsM5ghXaJwWf8aDxUMwG6WV7FF9",
  "key24": "626bjoX1yba7GXCzpmRBVcpHncK69yeacceAiHi2sTq7dsa51RmF52PHyPmLWx5cLWoAEpDZfyS6HvSrkH8FJxcT",
  "key25": "4gUHZSN9Y4uofpc37wKJ9R19DCxKkQEekageRemFB7svLRWzR7pYwMvSrCaKPYgSsCK28ZyFiCxeMLcaJ5tL66wQ",
  "key26": "3SGNBq5DQDzSHM49iKLQtUQXerZXACK2KoPQcG12GF6dGF3xB8XdJANdC52BWWXk3V6rvha7jp89QsKx9YAj2DQU",
  "key27": "PTyKbfhPgMhfCLDcDNbBxBWu9hgPKs1rt4rzuL1v67oSd8cEDhGmfVriiFnRxcEE5ppWXucmZGeNSnoc8aYx6NW",
  "key28": "2atYPHE6CpV2k7ZYAh3fL98iGNqzGhCycWHje7jei4f3XQ6bnDgNL5fUeFBpq7LmWEQbqyTKTN36Fb1KtQTZZuzs",
  "key29": "5x7WERopYo8RCL4Ywmbshc2X3SNKbVAUYfj7UB1rteCdpUexPTxnK1W5YPaq5aHfM78Ptuo5CJNDV2vVeywsfVE8",
  "key30": "4vSw7ewUBTcZ1jspS8dSbh25hUWkd9AEJWSdJ1EFG9LshwQBFYvSFdaVhxPcK5vojjJpbgWQAYbhQ7Xu8PMHN78z",
  "key31": "3p8gm4JCsV9AX43nro2kP21xzCiEBsmtaaVvC4VJK8vs7iSmT1teypytFXTJidWthZAoLqrhy7DfUYKsxa4uZjsS",
  "key32": "4Kdwr8hYchvmnGvAfYc5vmsNpV6m4q3WXkXVP7SShrXwoPzaC14A9GJ6DfwoMLKqm4KhEkybUZyxNpU2wQCN3BsS",
  "key33": "5apUAP3B9zeSUMRoYjBZ26UCX1jyDnojZjoW3q16uK2SkVx4izJN5p9WMxRmc48XUmS5em3oqfmt1isGYHNNLsMi",
  "key34": "3LbkqGijba18v7XEmaUk2st72JUQgQPQD2Ug3kdFB4FpA4kh2WaRheWcLSM4SEXkePKKsHSjYnbah4rmxGYYHca1",
  "key35": "CBxz95KWFrSfxVeaYSUQNbNcAz7E4B7wuJtiNVgt3fip31BxfMm1442gT9MXU1VRpL6mBuwTw9P4XdiCei5FJJ1",
  "key36": "5GLfaVeF8R88y3yVBfUg74Pkb8ePmT637vnazi8MhB5Wtp8uSjMEf4TR7g1eAdA3ucV5WqtH7m4zioCTDxzUXpdz",
  "key37": "29tjbUVpAZiwabHAmAvTEhDVg3RzEexjUouNt6HyYgEJZrcNACcwzb6JTduLTrBPd53P2hSTLKLP7Vwwt7f4wXtB",
  "key38": "TvwtV6BmwbYCGYFjMYC8eHMRaVwKRFk2i97TaqXAXxY7R63K3d6aWXofq7BhidnnGmZEpXogge8kg6xtvFCH44u",
  "key39": "3JGk3ktuKatKxAubuRJ7uAuW3cztJCgwYyst4jmcEjwa4BsWN1XuEy8tAk3ePNBo7D6uoFg5gStjvn9qFi8ZUNxA",
  "key40": "4fML5KRjPWxNKfaKtQszyU6C8eQ9f6tGDkHQNfcKLCxuDwCw5iPXnSR5RVkGD8EMmxrVQGXQtYHhAabdoghU1NYh",
  "key41": "4vbtvYHASSzpZk7cbxV8trb8TWb7X4fRUvut5JcFwGKNzrc3pn11fHowZBFrYShuiMcPwHw2hrd5MvUPfLqHjpik"
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
