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
    "4dTqgkas7ZyQqNuSydQqzjUMYFcezErsHn9Ha6MyhJCaC5CJQzN4zH2YaQVb2x2K2StieDnKswDeRCwk9g3qeD3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S1yAVMhQTFiYjbjVQNwVHBLK1YEm5n6EoMBcz5wSqDXmZAoG15imDN6qTjs3JCHRmG2FPBBDFMd5Y7AyEUmcr6a",
  "key1": "5bnMcwADPGSdgsAVAp1waMQ7LbBPcsspr9BZs6uww2TTh9uMEvErqYXZeapXNDjnxJwDc7meYLqwbDSx9rKthpf6",
  "key2": "2Fc3nJBNmapKZES63csf5qSiFLQ6ERsktX1DY3u8YQQNb5mpkHvhz8q12ioJGBpMU5eUw4BDbKqZimd6653hK8WF",
  "key3": "5vPeXKPwUSRH7PPe97dQCaLmW8bW3VY8s3QLrTrgVo2Lz4MEwFCKKWjPeVXPAvMhSb4Prk9dkXSx8EH1rkRaxYKU",
  "key4": "Zey2hAQrErB7WACvDQyS6XXEueNkYm9D9vfZT3wTk1bmmkpSfkYqh91ikHJdzpBaeqburRUCq8dC9rSsQ5ze8By",
  "key5": "4YXzwioYRE8BePyVTScd8xCwNg8ReRGqXtRxxJ3dCg7hqZmAGah6kgFBYgZ9fW3E4ounJa9ByMMNw6GnWR5rDSZD",
  "key6": "5aXbkHfmvqG1CbQrREPPvxqL11jGBcxPD4DitgzQgCUs8fdMEo4vqLZyZWPT5s9G6WwsJbaCvyGAqYE1bRtcjsRp",
  "key7": "4uepZaqN1niyGo1D9xUtfqhnbEQmHaSkrzdipU4uwHf7fw87wAr1KVJ1s3abbuXMCrCuYqdcTF7MQBUaUMz7SorR",
  "key8": "LTcWcJXoqo295iZAheMrza2fnumW7vX2UYQvSEGJo1SRWhq75X7XAkpbSBjZjBqhqvfQxu4NMdCF8mFeHuj3r5s",
  "key9": "4ZhhtXs8SfDFfoLGGToNsqcnNd53bQE4QBjnQXHhWCiSnELmNc6ijcVJmhZN9kNT9Bzqq1xrbVrWWjK8n6me9hrU",
  "key10": "32Fa1Am1Yb8pTuSysxUPAPYNCNLJpxHwoXWByb3AoYDeuqouq8iEgJNTd3X7gwk9yvqRJxFKoJgNDCE72B8ruTva",
  "key11": "4B2eBqrEGVrF2yqxoakwmHZcmGoAuA8KYEW6iZunf17D8XrmsiKopV5yA2Dq2K8Fs7ACPN62SzE4kJYuK37Np3nJ",
  "key12": "LYMS4KWbjJ8ADNj5bMyAuEaBc9cVZq5HA9yYLV5oS8CkZit1CCmJC5LeLkxCG5MJqV28hbwCAAfNiPiXwwX3JUr",
  "key13": "edMCUrzgcGBDEoQf1xmYXncWLGdDWTe4YgdMxguBXnRi2fQBUjhgqPx4Ziybi83UxAHp6M6mggseo28ipgMJWdm",
  "key14": "34yGKeE2jtWXra18FCMXs7n4HB1UEGrQhoyGnM9hGWpjqviGzd452viJJY6FW8RW5Ajn7W1JTkatCjXoKrairKUn",
  "key15": "381XcF9gZX4CKXDaCF1J763zomCxRHyuVJGMViQmxK99yfLfj2ZmadwqDZax5Ds13UajBRP6kFT3H2SYNgdkXsan",
  "key16": "2vVHPsZkTTQnxi51dRDRfJFMemZBXzBFWBa9CKbKi1i2qebTUy6o5yTcgy5agaAqW2cGLAgfRWXBQqCJCTcYf75f",
  "key17": "5sAFPtaq2LyjgqMcyztXQdigFMd6afXcCoboZqSyru7jFRURnmCQcYWLwkzUmg4TVH865d6wxryDwQxMocNnPnvj",
  "key18": "2i2sDjwBgQ8DAtXuePoe3bXZXyqnk87tUgLbreWcsgwPHoi6zK6J4JPsZDBzLeyV5TdQstkngdpgPcbx46rYREjS",
  "key19": "5GnBAUCs2rtmWybP8fmjSKPtLkUNfMYV3iLBx9fULCuDYckw2DaUkPJxpDHpqubipXe2TfTyWUww3xLuqJk9LM24",
  "key20": "41E5hEcwLum4woCRHaCvZwZWESUuJBNAf1wb5wCP5FUigQ5PQe1wyNL3x5x4582BR62grtgKeTUcqkQU7LmL6B9y",
  "key21": "4w6zNq8cxYicA7eeWeV4AcpwFV992J3e4inqbqeuT16TjyZj4R1dC57V5NfZ91wztTDj3zFdCo2sCQ7BUAZAk1mU",
  "key22": "ZBWTL7FXH9yw5iePaX7YhokRnKwZkEeqN8ujTuY5k8aHj1eyoJctGMXoQVnQ4dyXY7KbyXbu7ubsMzH2WjQszAo",
  "key23": "KnzBycV6T5tPk67kjkDXph475kX2KLDCEa3utnMwHabuiXPUgvSEaf7ve3vpAKZop9u5BD7ZUkPQWbbgutsECRg",
  "key24": "3arkwo4uaxX7jkRVpPerw4iA9A6hzoAhr1jJPfgNb2N4xzmTEAmoHVF4ChpBgKQmCkUwENkEc6uiREau2NWZKmch",
  "key25": "4RWdx3aMZi5Xc9DigeXXCMG7ap3vKQ5C9T4CKdNZ8S2vTg2dwi3gcNtRDbFw1KQ3W2yZioUCMsDH6EfT8DKTnVby",
  "key26": "3JZ2NQsYaEAyqicswHXfAx87eqkWKy9s49uNXQg6MhymEimMrxMEGMdyNdDpxJH7HHWWfPNV26vGFQ6tSYmCWsrB",
  "key27": "3SszBw6JGopV1iSzDE3fJmvAeN5wd3ntGhwkisUFwHGNdSe3kh8tzZbTp7hN63so29GxQQPqPRm1CavVjKWqWm2S",
  "key28": "4h2Auf3TSgF7FNmHaz1gHFLEYEPD1a16fTNLdnLXM2WuGKyJsPghsKS7hgQZoQSxRFwHYPiWaVBS67TjrpcrTCUC",
  "key29": "5f4XNFCHCD2v4Q1KmF9wmM7AiQ8tSimASgNMZFfs7MM28GqaMVAa8nbmJBpGUEYoeb3XbeLUtB9epeVN9RJPewBZ",
  "key30": "2rvNJcBECMEzetT2nvpyaBYsjpGe8W4bF3pEwfeTW3pYCDJkWriDTqbaDrBxg7kQdKb7boNmRfUZFeQs3x8oYyJf",
  "key31": "4Ka2MUrKy2uPz9MzA484w78UM9f99AoeyNZ5YJJS3uj1GBFb5THXpXMm66RSrUytFHUMBjD7AzZK8URKpT6K6pHX",
  "key32": "kZKx3LkXuuTBgiTqqkCqvrMhpxfadvkuGUpeCUKtY18wv9t9KNCwZmPFKazdrabEQGkGCGWx2SgVtucvQdvGRvX",
  "key33": "38xbWbEkhpNZQfdgHNbh1Jcu4UuhAxSX2GHbkX41pk6ggxe8oiNhZ1cuvRqe7nFZoaxMoo4AJkNTgB7vSb1oEQLG",
  "key34": "4aUnC3LxuvU19rsiaKJj1dbRC5NMhmuGJyErq9YMyqykagByadhP9s9E4nhWH2DK3S5Sjw9EUbnSkwhakc8cXUYM",
  "key35": "4JiSYZ2o6Uispn7pMyHgAhawZb9uZnhar5jAvoUCuoWuCAZKQsCrK6aVVhbs1WCs9vjNvTCqNcbWHrFMCC51uTuG"
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
