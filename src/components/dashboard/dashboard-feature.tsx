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
    "2gVPqz7QHivFjqXqZjMkNsj1dYNRConVqaDsWQPRvVdQrX94UR89qq32mTYm7bESX3iM3FhtV4Mgruz7C694iNMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4LHkk3Q7upQJZTkrojiRbX9U86ZrtZNzYNYLQMbRUyoHkc1e6mis8vouGCxNDV58pXSkHpPL7jY5ur8pCJDWnx",
  "key1": "2mWfq8u728wdQnovk6dfnbJ3axQcSMwZAuCPKVaANBNDdX4CkfrWfVh4T3c6S1S2x5ubB5Qqjgwqvz3XHu65wEVn",
  "key2": "xYCh4ksM92gYZTx53u9Ng79gbqBBiU1DNNMFyfcvhLJ8CMqqGnzfggt1oYZT1JCA5u8oeSfqp7ekBNKiNW4oJCj",
  "key3": "5NnwvgRegLfDYW92vJCgmRvkScsiKoWvhNrXdMNFTKeXz7xz5gf5dKY2Mp9sj3zo42qakUisnS1ixXSiNYWdnNZ",
  "key4": "HrwgL1Dgum7263VSQn8m35qdmtP74krw7LwXe9jkS8zAEUHYgCkjPVjpiApwEa1vZXjpF3Y1EWK3Q7JjMQBLcq9",
  "key5": "5hZNfFvv3K96LhYK62Y6yJCFVoQDFAQRfsfR6K7koFBdqdUwxYr3o2rEKcHM7kffMi3Qt2sJpJo2vopTL9pSiQU5",
  "key6": "2Rej9MBV7YzCEzFMHFk6vu7shnngy7MSE23iRVSTBYZMvvR9qvavBVTeDb7QwVnQziNYZsHwW6iMMRZCPq7ZqS4X",
  "key7": "5bVp8kX9p27QkmSMtD8StQR4oYd9miCh76iEX7LoBHXQYf9piE7mkXrtW5qi9rE4phJffFFxjmbRtYmYdSKPJup3",
  "key8": "5rcQsm8VvNry7NMBcWN3HCKkzjYKP8qspmHpA6uibNWXq9e25UahsE9y5mSQo5fGbGaDEUhmCroPuH7de4XNGocw",
  "key9": "5xrSabbpADhL2nAAbUD1ddh6CJMnYso7qCUowYogmPmGH1DBrB8nXxw3oMSiTbEQ9h6S8b6T8QDZXv8YRJbYHJwJ",
  "key10": "2n695VnAs6GAb3zzY9qNkuwnYH7KaNVbQ28ee2YGbMpQLk4bzzSTKUd9XUTLGUmo6HVm7QApoyYXo5VM7DULLgpv",
  "key11": "63MGZSV5Am4pVbh27pPc4SXAnUiFNkgSULC29aHrnKLmsqUPRmt5NyAnZbG1pVpAgxe4ULNL3P8bpzgEzzFHpRJn",
  "key12": "3fecQVq1bZvCxDt1XvoEpnxF7db237jtuTQZmiaxgKXB4JJBWmSeEYFEoy41xh9jNjTi7Xh94M4fsHAdKQopjVfB",
  "key13": "31ewYhRxcnQLKafdeW7fgzEKtNVgkSZH5RHQ9GpsCtcZ8dV7w9mujg969aDhhLGoK19SK8GPnRBnW1zffaq3h8Ak",
  "key14": "2nypXWv2NSrwSvd5YAix22vLiLt3RcmiPjXszhJ6K2yYAAviDbMafMU9gpkaPfkNzsoqe8n7aik8au1yb3azBmRw",
  "key15": "3ubZBfYE4hpmGoEeJBcnDpCduuqqcVvuBphAzTfRYXBFxWpWa5JM5rWd7yREYEagk1c6gRkPg9ws2eZm3FD7J1NH",
  "key16": "5vhWKjHZAUKMBzjtEk1i2k7KPNtrBBV5xQWB7uzNTPMnEb4CFqgj1QedQNxRdfK5B8xEZEseUQuTkEmSKm7WPhf4",
  "key17": "5nsX8q486XxL4UNvs64MChS41SXkxJ3HcfsBaX2pCX42y7uvDE1LX3ZecrHVk4AnJT9ZTHTyaF9VeLUM2mTLiVSS",
  "key18": "4DLWZrs7Qjt2CMU61QeQtyULSuVWpAaHPmcgQg7ZgkuhQC6fRMCdAfHfZ6pPEqYiryb5VsYx7Lwg8C7ddkH4XNtj",
  "key19": "56Q6iHPQE3KHweT5HALcDPuDeeWeEXqGPaUidCGkReoq2XhPgtgaQwv2j1U635WKDkn1b727fukX6tnHXzHotphB",
  "key20": "2TtgkTaUZhr28pKpemLtrmLiNEXUKm732CoKr2RXWubQS7E3J2HATckBaNPqw9urB8NXQNLnLpEzU16Q7Qu9TRXp",
  "key21": "2k34v44mPvmYt26byL4t68DDJtVd4drnHcX8Q3Ls89ia1rdWMyoRbPt6XctRrdDtSwg5qi3wH2ecYWLNqELENgJU",
  "key22": "3G5pU9N7EE8vXi8B99H4ap3yhjgHuc4w8653MzJTiRzuEU1Jphy9hN1RZhxQDRDPx5XGtvxY9GFkwCqM8q14UNWk",
  "key23": "4w643565vBqy4QJsN1Dq5jpKkov8K9vekLTChhC3uKinZaSXr349AxhrswEJL9Z5YtMyy2L5DTNMvek4BGdUkTPv",
  "key24": "3N15Fki5TreTCdqKS1m9vhw1JBXN6qNfnpxfWxMSyT9w5zVsjsyNiGw6HQgfG7KRA6EZi2zxFbpCNexyJhKQJJp1",
  "key25": "3oEdJr677tGTmWhJmbZSK2AS6R4V24v9FuwPSsR5pU6wFWkNzCbMpABFBHvqp9shF6Xv6htu6ftuAryF5yrxf1ny",
  "key26": "4bwZqG92ERHzqrGXYuTduVkJBNwSJFxC3zKn3K4wXRYswbmXDCeAJtZgNiW3okBntgqxhPx2TxHsGGWZiGDUVqcB",
  "key27": "3e2s29YY8pe72zboB3WEMsx4ZtG9XKwwMBj2jLQSzrYonN5EXVmnydgvrakfCWLUwPhT3o8kUrrj1G8CVSiVmTnf",
  "key28": "62b9FMw61zmg1Nq91yPtqMHHxQ4XJJCPSfsuuGbdNUYT799c5RXM6ot62kiC7VRrk3k2Va2NiWes9SphAQNTERaC",
  "key29": "4oxQ8tpPxhS5pt5yYyyhW5QJL6mBwG23YGK5vnEmfdjCnpTFupxpbod39hnDpziRr6hj5iJ2cpyPsUqrA6BHQQYd",
  "key30": "3XcoYcyfqinviULksaDNFKui9nyDHrnS8Hcp5UhiLeZoenQFkok4GCxQ6kyD4JhDn3qxAynmaPvg4hmJAnUGPbUt",
  "key31": "3d1yvSmj9s6LVJnDEtxi2T1Egp4bxHDshXtwxjMssm9p3L13kdE2jMS8WoUWdBSfS5Soo6B4bxZ6SqmEAyVSVbV6",
  "key32": "4uG3TTd6zbzDDapsYVPinh7Wh7S6cppPK7MK5YxV2Azgg9aWABREi4T8bTBhz8BiEo3v35hp3uvvNfbgj1S2N1En",
  "key33": "32NVgjuUKiDXPkKFUyuHzTgavc8AWCbVzSMDgVabDJHFr1bAkkAL7eyTQWyF9ppkHKb7sGrHNaKC94iWZAaxXrAk",
  "key34": "5k8vQtdF2WMcyd7q7M8kiUo5sR3vJXPj7yREcyjp4FRTGWSdH2c27a6L6k6VnesSFDkdPiA1FMooyBeNGKTmmvVz"
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
