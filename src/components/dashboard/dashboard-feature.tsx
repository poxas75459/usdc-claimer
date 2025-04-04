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
    "62jXyudajg7HeRfJ5dd9TfxwNg5tnCEmLQi7FRrVrYvfiGBsMJUnw4aBtTHzWBnRz4QLgQNhqttNndckTrGt4hDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Am9vsmpzNtEc29UJiohvcBQmBtRr1k27VxhX916xCvudGDGDF6Jj1hk8WxXKvxVC4hB4XAHrWbXk1kCavwaBvL8",
  "key1": "3AjezRG4FA3gvMtYMinybfjiqaAAjKENmaZdBfKkW5wiU9eL6bQnmfSbpGL4QerZFrDLtjR8g7ZDmdA59FkHTWHr",
  "key2": "2jga3CnDpAKmRDYxXDdN468YtwfPwnKbk2x5BcLa4e9n6Mm89gniVrXCpTC3oBDv2yFcoYYshD5AL68fDPDWqeNk",
  "key3": "3vcvTXmXjrbFTRPWEyMhL5Hwbm9cMJwY1b6mmBaKKY3x3fLx5tAdDRLkdqjeZj924BLPWy53aEdGpPfYiCZN186x",
  "key4": "5FzhhJxeRPeBdEHUjiyzbrtnH6NnJgSVsuisD3Uxk2StRf9jFDQDjsNtrPEpEycMXUGrsUB7N5tQodYvpffgjvfc",
  "key5": "Qq1WuaPz17iJcm9uqtUi7asDnz9teF5Eoh8sKF3XmAqmjRLUrAJ9bJ2BasDA6aGiGbrK2iWS7QsKu3T7YmH8s9s",
  "key6": "5yMsBJxGP9eAAF26pqWgvFUAJDhdkthkM7Q8ypRj1DQATzSPchKWE35uHBmGk1Q8EmSACNX741KRL6po38DuQ7DH",
  "key7": "4XjD36BPAhixBzxahd8u2o31yF65bZcxHCd47VcqHmawYFvbZ7eQ6nE3vAY6L9yCS92rix9QoM9f8BEuFVkJFoAG",
  "key8": "BsHu2sj8eDimzhGdvGSCjkHk36meNPSm7uwJbSqsee9yuYvSD7JQRtkbcXXatTT27yoC1j2TD6fuhsnLiMypdJp",
  "key9": "2F5nPfTjPx8YEgpop4Me1DN1cYJH1JVCVPFUe65mVGWrHAmhttHuE9RyNnTvsMiaUpagQQRHS3X6tk4e4GZEDmiR",
  "key10": "56BjevVmoWk3QP7MCRhMCzgHCEvjJBKMtPgtoS52Saerf8JkDAv4rUiMHEPJgH357CPCvKKbNP13q6gsVSg6ULbZ",
  "key11": "51p5HUPsbkUY6CB9mu8x2BW6NYL9iMcYXtPgvA35nYnNSuQrmQJGDKk9mEcS7FyvW2P6rBQcWPN7T3bCbTnLhMGU",
  "key12": "4MnZXdnpwXfZhssYH2U6pBYTtd9AWStNV48o53s8uSN5czkHXWAFPdjY2deA4eGCzmdtjoEQvNTdEf7MYUzx5wtD",
  "key13": "HbvErFvQ2wfFoiFqswv3knzpA7KygMbVH9tC3uXPBgFr7gk3FJxvjKrjH2V974TZsjB4PBF1xT94b3o39YRKXof",
  "key14": "5kkFUJtdJ3zFgV5kPpmgR64CWNv2fij97qA87zdarnm3JzZFJcK8fqj8oMz7Fz8mvXb1UeDboJqftW51Ti8uJHxj",
  "key15": "3qWnS5snforXSsJU6bK4kbmALnbQ6jeda8sJvKxDSPJ8b2pb9o4M1yb5Cr5AbpL6kHEwg5PQXu9XqQcdJ91WWWGF",
  "key16": "4ti3qSvTLrQvj5WxNXmWeZpGunKFouhbtjNVQXFWAj58iTioECfiAf1CDbFxR2a7yhY6iwJYhcJXsG3FiAR2Mwik",
  "key17": "2SB2RY3e6zrWnL534A7Vj2p2H92vpYuakdZBMSbAJ3CRg8q2TRhGx62kmkunZrEwWN2eMp7DigSoNvecak5euYDe",
  "key18": "2DtPh5CkxNBGTGX4xLN1SmWJXgWJpshaBjzmz1z6hDQQ4qE5bz3hC3yipSkCMwJdcifUzNU94VVY8hWt1774pwdW",
  "key19": "36pBEiEf36CPmyQGN8Z6QkeSaYCSWnFHw2qHwZJv4bteoeaEdjwE7cGj73Hq9SMU24B46MNXfLKuKYNdWeCjMG3H",
  "key20": "5vypuH7dPB4ekcK1fVbk77AoNSTsFEWo1JaEkD3wZxoUsgHkzvzFAMEEHjLNRd4bF37poNmhBDfssdxTvU5mNQx2",
  "key21": "5n99L62psdUz1pnWA3QVYgEXhpwJnbqEAEBjBn455Fjh6Pmft13rNEjxep1H8ixxpowDnBL2nuMPinvwLDsUxEnS",
  "key22": "rp7nLnZHmpboPJHeAh7puiLUGfZ4MsrFLtXyRvsRT5rBsjNpN44BAdV3VQbonRcntFDKAQpDraJsEScE13hkhxu",
  "key23": "5rQcsNDDeuSxQowNTcmLm8W2ndgfuqFEv3stdpEaw3sq4nUXhLeFR65P8JKoaPAkQWoGwyX76Z29n1bU2YnuixtQ",
  "key24": "2hk7hHAfHFSgPC1VSHLbhpp1Zgv9GRL7f17UB4PNwti1KnHV8kQbXSC8UXXWAdYob2eDGonq2zKyXkGgY7kXerao",
  "key25": "4TZTvHwtMDTaH55nKz442N6FSX2GAqUwqBJdbQxHueN6SPVCvX8V8FsY2nW96HK9PBihj29aEsbvhZJroxdUrcnN",
  "key26": "4YTiR9QkT4G9qn2UFuMqWdZyjP8bXVFLh7BUXZVfccYsds8xZqEiHbe6etstw5DHwMQqdHGVDiu4zthNQ45QEXBm",
  "key27": "5GfbY8xnEtxbAcuszo3XgcvPL8ecoFViVYyLxVUnDNKS4w7FFYfKkgXyscfgwCsfaYXJGYhQGRNV6xtxTfLb4k8V",
  "key28": "5HbJnEaNzu8LxdeiPm221d1GGkRsR1kV5FgBWKKZRy3TCpqeA1fzgWyeA1Qm2Muu4KfcKbg6gjV9ohYsBrmGdoNR",
  "key29": "3rU7AraagJAjMAfv3sF5LpPgznVkaGyHUNArNZnoSXJVChcK9yLfmL1tCvZrVhtrdW2YaHKonTmhQP5JkAXjK1iT",
  "key30": "WMeJ8TpaCy8sGf2xmZEx5ptvaedMn6pCfMBxLXHQfSV5PdRdNBKoHRmxD5Ju2ymrT6MwYAE5cgamimrp5YQhu5a",
  "key31": "3oViR55iWzaxmHT8NEbUARCeYaX28ekfE62RQZbNiWTPUtVj5DdrHQXXyGXxZ1mpnmeheeaXrCubsFUMcA1snS8P",
  "key32": "45jpwpnAdjd3ws4z2EgYq45rDbqR2Vpp5ZRBq5FMcZR9hhEdjh9Lvmh8xJZ6EMo9iDZ6NGrM9id8ffRj13TwTECz",
  "key33": "5uh4HAbJsBzqfrGRUCi7Kky2yEpF6cwBzHAUyb5WXN5vuK5cGyYDTWDsyDz5mUVxA4vokfGps6MRqgjEHCzqz1HN",
  "key34": "5bM6Nibtry36QgCLed6ydJn3sQTphbydf2Cu5xUVbNGKHUsoADsJqUssdzyHxC6Hnd3ZHyUSAoh5Pr2UWevoyuvk",
  "key35": "JqjwtUghSwcHfouHpTeSQKMe18P5cakcCNzwaD6DiRP5jKXiYLmDFgjnyuLafBbBH3ot9ucv9hbGcJn6NBTs9af",
  "key36": "2PyZojpKiahWELR9KQzVKCUqrEn1HqrP6gRXiFjUupUUfuzRSPvvjbPuFird98vXdeBAJ4MY3YEfhk8WQN4J7p1B",
  "key37": "4Mg2BSrzbTRFJ5TtSZKdeh2wKyGczL6moG2fKabwdBz3R8WQNsbnNmLeRYT3AFxXog69sdb2WAiYJi3ALQMrceKR",
  "key38": "3kF7L6QV4xSQmiPPrehA9JnD6K3M15ez1Lvjf9rkbA5XdrXDjSfQQuLVpSWJ57hDYiz7ssGaU5s5qyAJRGyaLuXk",
  "key39": "5vzZz1ciLdvaGZrrLw5q15rY3k5auncMtx9qtcNzZnHDaSVBacZXnA7bKpbVWgEmxwvk9pU4jrZ4ZBp3iY8yyYJg",
  "key40": "pvyf4uszJnHeGL7rkbm6oGnkAskaWTL1bi14CeTRvNndWRsogxugHsVQ3Hw64M9chw33V5Bfj9hjVM7VokmNKPG",
  "key41": "2Dm95BrqjnZpXFcuPr3B5PWiqxLxu1sPKd21vs8zD72mFmG2JvuazP1rNNaem9jsyjc9Zi7f31NSnK8KM874AQBJ",
  "key42": "4bzEvGDAS7yDPuUteAikqUm2W3sX4yuv4xZKUvao2JttoeEYu12fkDpXvT6WM1nLBvpCpYKgsbj4ukjB7s1Mp9co",
  "key43": "3VroQCEBnfLMX8JV1Y4AyaeC3N56d5zMJgJgYHdXsSmeSbYKCAZsbhZHFdt7EhP9PEX4zFqzDYW18h7K1NWqcitK",
  "key44": "3T7T7eWsqF4QbTFR6D8bTFCVzo2NryVC2c7tziDAeb8i3QJwnLQC7ms4qNjNUUv1TWBmQEnYnh8NmWJzsMiuptV3",
  "key45": "3zP83pNkH3pjHbJGpf71tmvEGQEsZdWGab4aKgZKgrZYoPuCBdVgrGN9fixu7B8GHRh76qg8ffBLMYdpDzDKHGKz"
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
