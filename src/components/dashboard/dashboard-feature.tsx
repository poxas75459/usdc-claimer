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
    "5FFtfRsqoQkdkkKrpusEoGzniPEkJP7hnbiwLqpN6f1aM9FM5x5m6XChJYtxTAAXocLcH831JXq6JjW6J9H41tiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uUvZ1iegGSg7jxTMJGyATUGnpwVkFCE7DUjggg6zgkRMrYS5k3R62WYpnKtYRWuopeVsRuqWkJEePvMdP8zPx1r",
  "key1": "62yvMehCQFBtYrnh6axFPewxaPgpDdEE7aJRQkZ44ycmE7ZWca39rQobyu3naKVe3TBXTyjHfr52iwnBuhCSo63m",
  "key2": "4q55EXqmhU717GBiKCj4cMv4aCqGRzMYFixHWvccGjkVHHDSXkcCe4fe9bQvHPfbhBoKiLCYAXerD9vrttwd5wVS",
  "key3": "2RkMh3ZLgRDyoamj1UVzxcjyqDPuVjb4azDoojnc3Yv193WCcL18DLh5j6mGTgNEkqMjDzXaMWqfchcadRhGiKe8",
  "key4": "2gmqf5pegZJG2i38bbdZBFFFfmqR763qrsJ3xYpGwAPhMtpc7ezFEYZS4D3bYtzcx9JyvApJ1oPon7LtsxGJNghN",
  "key5": "4wXbvBWC2VxZjD59STTAtVBLMAdP81PBFJzVPvBaT9x34K6nGWgC4n7GsxaqgtRScLFyqEKaj8APR3nxeVcdRfM5",
  "key6": "5RuoobXT2oSVM96qwkpYRy2pQWYPT5G5BxCKC5X859TTexWKRAfD51eAp5DvB49PR22KF6Cdkw727KgpwywBhhvy",
  "key7": "2pvSsxMgFWpB7Lk5urHQt2BZYb3mVXrM7ZowXFTjC8ujDQE6hcntN9h8VoA6vyywN8ANeJUUkskRnfmkUnePu6ae",
  "key8": "2hWSoJztmdXhRPhwCUcZgFuTBNMNsq4gG6S6NbaNerSFLynhkUHTXRhGc6uzHhZR1oc9vh5oS5JUxVbTC5c7X8bX",
  "key9": "4KGb7k6XRVruep1HcmuRdxmqKE3XXRbwrSJo3FKqoETvJAg4AtLFDbyKPwA2VJmUW8SbfPZiQmAia18zgTM64qqi",
  "key10": "55GBa3iSauzZx5DXMAY74iAHc4jUCkgxRYP97WcTLWB8BJoREuYng5wWb4uEk3VxoY4JX7D6KttJVGuEW3d3Xk2j",
  "key11": "3yi2qAJJU9HPKnGsXqYytiPfquUxDFiB4ydGzGBZokzp6dvATcd7sqRJZiHHUA5Sqs2L8hJ9cwsBTMzGCh6EvHfp",
  "key12": "24jwXYrHMLto2LsZkMWnJPZHQBvfsKajgaX2r4V1TN6uv4eh2FP137Ec8fAmrguQeBmjUR4UNmd9ZbQDDTVDKSuK",
  "key13": "25QCU2Xoo787NyEFDic54GJiE9G37vaBUufGdKdeqVDqkJbox3zf85vcmP3sTwiS7e8bxJJVSdHcaMqaUFBFLb4z",
  "key14": "4cMQ9W583rYQQo69Yxdrw8xk3AMegPsNTK6ccVeiTq3pXQCdsRhjzyPYx84AgXS2BYavv8eXPKfC3vUESCkQPSKk",
  "key15": "3Knr2sX9GaBL7QPHD312BuQCkVFQnEtgaEaPfXhLw99VxQppFbLzuGEC4pU8ednTN64aufBMUTqfPJHicBn4xXLV",
  "key16": "Uh8Y3CGhgVCx231YFCfPn38n3RjYrdCCTk1KzqMru1swh9Tm3GpUjoYiqmG8a6HmqjgULPymBmjCHabS2m2rFCM",
  "key17": "2D8axK4sQLg3Kmjvq65wmx2hFZQdv7ht3bJPkY68tKuUs4fL6GsGJ3EnMBLFaZ4ZKynNrJZnL2R1kndRVugnRb8y",
  "key18": "2CxEQGraDoLCEMHiu7RveQ56s3KpSHVaGBHFVboQiJvbDx7m6oJkB3JeNR9wja9fxu48mYnpRwstrhcvrn1GZktN",
  "key19": "ERxDAf8kRUUsUvLxrMLFEuC69uPWaRDFKn7TAsBUFan18FfSLKMURo6yx37umZqHjoyc1ANbvZr1JiqKbo4Wt85",
  "key20": "YfWHeTgFcuV3pRLq78g5QrC8fVEKLKcS2hBRFcAPySTVvZNA1U6LE3nExbYthE4CyLSe8MDj8D7MTzrx7qynHhY",
  "key21": "4Q9z3ynn7GFXaJfjaSiSvrnfd9Libs531Xmw1RVV5WDMtdRYSENkUo4q15yrx1jPNGfttRJD58s5yu4QxgpoduDs",
  "key22": "4RVtxrNVgD638yS2s7WAfJdWTbGNxNqUofSCJ2kdoGiK2b95GKtjR31TFebdy69tqkecfxviRf4BXjS8DbP3wki9",
  "key23": "2nLU1FmdTUkkJ6a3XGYhXctqguLMUUfxkDbJ3aPG7Ufmc8yPzjjM33Qgo5vDeN1Jse9wG4G76U9ajyQwS345QdrH",
  "key24": "yBwmR7mKPi1Vww54Y7z2tuPwm5d3ZJN8RnnenL5uYeC83B171FpzZqcTKCNqQhjUFkVeeaqPy1XfdwtqpSHAVKk",
  "key25": "TingUDnNExCJnJcojofHXwR8mx2qyKSKLReUgzrhd2EyFf827LBNjrvgP6DG5bisqx7VQLVbnczNbunv3pbiz9B",
  "key26": "tXseHp1siEwRNTMQE3rajmwcYRaTodkmKvytwhNpi1MJvW2Zt5KMRXZvL6nhn7JRkyGAtJ38aQptFEWMPJedpqV",
  "key27": "43osvGi8i8ZfThKgREgnMDKMWoq93YUZP8Cpk9ezPxd5Wx6K7z9572ZtNSE3opuHuNNZPNAc9YJVVwN4N3bBQTMP",
  "key28": "3aPCkL5hanmx2V3kU73L4K3C53oh8ZXEHJkVn61uQgSRfookidGxneCJzf9vwvgQEkkLZuxV3BBaUUz3bAWLHYBq",
  "key29": "5Wxjy13pLQK3P6PUY9qBQfLZpVpZCc29WnvjLBa6LwC3oGrfVbawCfNHztYfJcxRDmBjDcap8N8B3HSxYsVqfXV6",
  "key30": "5dKewkPf9gbddHGqtzXoBqjEjjCzphSUVXh8NcStswBqhYzqDDWmjFWNEBwubjMDc4g2pF5ProvuQtDdGQ4Be1ax",
  "key31": "3WsuUtMJ7aGj9eK6TJV47hwzkvS2skYmQec3X7PP9Ty2PyTWuxhm35QtG5LULpQ36i5iTBghyeqYp8859wvoVcT6",
  "key32": "5Mfgeo7svTF1YcwvC14D7HnhhFLH3EQc6BMuTbqrwyZbQiaJGRYdKJ1MBz3Z5DsmGnjXp8PRaLUcDA6NUcKwRLCm",
  "key33": "4DqH6YBKfEdvo9Po3JB5DCmtakhsVULuCnqts1MtVx3VQ3hpu7XoPD4DZwXrVefifDBkpbo5A3a1eCnzjTvCBYUx",
  "key34": "4o79orWfR4fGkswWJ1MoiUwZkHN2kh9TwhrukGK2Hdep6pDFiemMUfTqP1hPC8SfhpGn1LwvPtkyt8E4KcyAggS6",
  "key35": "tJr3wazJpfRLm5t7P6TVE58b3gNq2LFfpbRVhdYty9gEqpQH6xkDS223DNKgG56UrZ8fFDxHJeHDbzcnNLrz4Pt",
  "key36": "aWCTMgrEqyiAdxYEBBr6BQ6hNqUpEqdB7CPZU41sA2FaFeV3V5P5UCGAMuLWa5DfZH4FA9xTNiZoDN4tnF1HCMz"
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
