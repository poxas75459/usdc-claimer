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
    "2PSyLbYu7HL4Xf3ZkQJmvSCNr5hnzcSPv8uqZw4KxQKPcaCRgV1eGFSq8NiaU7m52eY3vivosEy7S7gfYmh33a7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gcpsar98LvAFGtZ5H5it6BCrYTzup7mPqU4npiV9CM9c61ZX9d6ouDQEyRE6qsGaPYWoGBvJgjusMUASunBEBcs",
  "key1": "569WsTAjW8QXiJ8huq9dybDy4HFUMPEb4Ksj6MWq5Vd8QLKf4qXJYobv6uVz2JB76DfcQj6hSSiHLLKY7tnMYM8Q",
  "key2": "3j8neoMpLtQdPirKLMoSVQ3fD78pD9KDbZUNhKAzRvY1fqgDWjv2o9rV1s4GtGXdrEaPzpZKKTXSBNpDDeqwLRWw",
  "key3": "5TNB8wfgQpkLKUR1HG75CWt6FDQtPLtSSL1hdPZp9sByeKhWLDC8nd8LCf5wZeWUE2cCChhyjRrrPK3qbqAjShSp",
  "key4": "2NF7KoUkKozK4wDS2V74tjMSKXm7FJAvNWQE6XWn8syjLTk1A5bcTHLJ7vbymQctGsAzKEsWjFZA1aBNJCg3F7oZ",
  "key5": "3V4J8Hmi4KVutfibUR8sjXN9iiB6d5PmGdzSaDij5Q5AWjWHuY3NCriaWqqeUAUPFZ9YnEuJDwFYVoUXHpwTcByz",
  "key6": "4pse1YiLocs4vtjYfFGfyrFshrpWE4fghG7bhAgKvKUdhJ5isVbXBYoHmBQvYLKees7s3MWG1VjV1aSgEj8sWEFZ",
  "key7": "3oQB5RTg9XF4KLhYHiVeubbtwWwmaPNtyqCY6MbDdq5htFQgpeyED5WHqs6SzDdkX7fqVB24TQNBNdb89pk73c8J",
  "key8": "2DbAgCL1ebdBRZ4bhiMxB3Uhxb3TRffQ7KbbTFy9rsricPxji5NjNHyAbPMKaBvfdctL53dbNuQuTaqss5xnRY2i",
  "key9": "5Ztf6yJEdk2pYXYRPNfYqVkLpyhUxHF11qaG43kSDAnsuAiNaUrdCEp4ZTjX3GsWyZ7vRYTdyWTeC4Tv2L2KqUcJ",
  "key10": "2WgZGgBodoTFYFPxwwGw79JcUJkS3edfuHoXTbhMzXAejmP3P3ZmfXfgYcQgNKJioSDDUiSC6N8ddUEj6MEYtBUP",
  "key11": "2RZxZVLDktAPhBa3a6UwdJ5quAHfXwnuRYg3Xkibsdfg4YtX2rfY1raw7X1dy9LanT2TL2YKawBxiQKqfaTMTPdd",
  "key12": "3KHoead6XbRL8QR1f9W6DJd9g4UvNvmznbMt11zKEm1gxV8EA9cJHZHdz5iLaHJ7hFXjJEBUv9JbSKSjdgJ7a4MT",
  "key13": "3y5yHAGNfVrAwxim8M35aBP2ijYDc7znG3AhV55RSiBwkxw95tXf6is7qjuQ1zscfwL5ZePoJWga3D588AGxKrx1",
  "key14": "62cpvX5foh1EJjV7aL363xTCkzpCXQvkJjPU15SP6ietnjoPyL5zyewYCsndKczgYkA4WJasGqrhBYgGMQCr7GWq",
  "key15": "yeXoCWotsUPT6DmgjJrWeVqMdWHEDqZZsujWstFfCbkcQnzA6rFSDwWGXE893iBhNZYgTnPur8b5zosJFb3y9gX",
  "key16": "nTDwX3B6KxYca1iGCSZVudwWzrkG1rkH4GQb5m9437AgCeAWu8pqPCszFgikQVDDuHuwbXFWesNo8Cg8eAA81D2",
  "key17": "5FPNWGVC4SZ8JPJt2TyjVKLohCWRypeBReyWq9RTA1XhkBD6BuJNftJqNtuemcXcH3f5qPvamtTmV9NKLppmLVXZ",
  "key18": "WxZ1ZP8K5P4d5VvArbDBvDydAoNbWYzY4cUG9WwdjjXtxKnmmtq6GeaCAhYXh3KYQ13qRT6k2AU6AsWFFaKVGRn",
  "key19": "5oRCnLv8gpUjGkAmiDsetcCxbnU4Shnwk3LFPSfCYuuBsfMVdDvngmVj9jnoBvCE2jVhQ8mhX4M1FYhtiQZH1HLJ",
  "key20": "TJa6t2gxT6zGXmGqqKcjbmpWT8GsBZEPngxmuoqa2nbtxPH6XiKGQgC6TvQL5D9APkZWJGxd5vekTWWaSTeSKjr",
  "key21": "3QXWXndU9NPxXH89cjaHVBf9PRKfdV2AvMbSis48J9fVXEtfX49jNBwafi7cNdtH6bCjdLZDdyJi7RK7B3gxdxej",
  "key22": "27J8tx5mkhnaukSci34cjHdnHKEcPg8iooBWFyWd43xBdrdxePGYQEtYidwLvHoDPwWBybQxB38YentJrLdmHj6A",
  "key23": "5yEFqWfAbcNGeYwg7nGLrPmUzrfothXWZ8gmKHxCZLZoKHvkGVzVvj6FBSUcyhhoHLMxtH6wJ1sJ3EUv9BccAb9a",
  "key24": "dM3dvH4dKJSeMv5BifVvKgQmFiHpLJ6nLTA9A3TFcPyxAcUWqMNY34MkcJkX1DA2v7iYyZS5sFDkzcVAvQwDeYK",
  "key25": "5mJb56SUhbkawvDupcF1h4P1vM1bJwFzoACVxUEkYVkCKaL7uKYAknNwXWrA6Lira1PyBDNU7UWJ5C4wHE2LC1hR",
  "key26": "Riz1CoLmqjiAkmouRxyhotSxPiC9nsanQoyw5dWLH4scPuj7UnjFvRoqCPo6zbSrA6kSkTX1P81jHfW9noaXZyq",
  "key27": "3mLnYWgWGeYcFwwyNuoJAjCne4AVXcYCGmdyUC5YZgR3WspKxMHyjxFx4Ja7jMvzTFiUkSPPSukRNTXhjdpqbGsK",
  "key28": "2Rv7LaiTSFyTdLNGmjSZkf5XUoFJctfXUpEUHzaLbpmkM6SfT51sdjAfVFiB7AgPFipPqBwqNPXSU5wbvdKpmqLt",
  "key29": "2wdkPDCnF45PpmSvx1L97m7sDqfQPu51FeLqgDnpYuK3RZGsm8hD6WbnRnrdWxsQTvV5UgJGJsHo1Pkr3xNU2Lq6",
  "key30": "5681qha1RAueV4ShxHia8TPefvxxxKv9fp2UHsipDrJZeYYptv5Rf8aAdqUN1hFCzVFFGzMNAr5J1rFqPQ2ZuKvm",
  "key31": "9D8WQhQQiRMZkRytztrQrgcPK953c4ceriGVGZSS9zs2aJZ2GD2zWfEG7YimtJxqVknkAKVKAV6a5DpfdrV9EUX",
  "key32": "3uFe8wPUQccWyzCXe1VGr5TcXvApgbQMo58TxdwoNbcpLexKLdeW4AwQFnxfSzUFSg3We9fQGGDXaycegJ92NU3P",
  "key33": "4FfSZsAGnj5CWTQwn3QEfP61zeabh5usR4bLoxthDC5S6b3YXTrKs2inP5pSgnFNowGJvY9TSrCyHxC2sQ6P5S9n",
  "key34": "2rTvDHYc1LtU4WTKKpoxK7wmScmx5H3Zjh2fqGL9C6T25G8va1Umoa7M2ciotsWpC9QenrmEMnro8eHQzWRE1cw9",
  "key35": "29RxoRi7FVjLRoeB7g61oL7FhqWPoGjgZkxVRk4aTtSKQdjc7LM8hFc9EeNj49DtsFj2nvqCEW2X6cSe5iaAiiMm",
  "key36": "3QfXtokpu3G6b6obeKw3L2E143fyN9UwEvWoZokA7bZA7S2RVsq4MV9wEKNeASkUCbZiy5BBYnQodw14gyxt53vg",
  "key37": "4Dy6Hs7cAN8kZ4BjYJMp22RtGT3gFYBbcc6UDe11YnBhRCPYAuCa8VVmUCWU4CpxaGtLuhcmstaXfvtYPiBianJh",
  "key38": "d6ySTg1dm6qqZJP3cfkdC1wdjZRTGRwNh2VDpDNDeEQnQRpV9DLLm1gVLELQtBKLBeVnYD1wVZno4Dpin9e5b8g",
  "key39": "3TikokJ9eetYuQfqyGMxvNCouLLKCAYtoEakdsdD4cE61d1KibXZKxuxWBkPw6X6EXJSvauTKezoSeddhxH7b4dV",
  "key40": "2XCvzhxBUvKNn4WAGbijVrhnptkQuoRxFtvbZEc6wtuj3BN2vfrfxTPm6GicvoYTB6D7hfwjWfP5NsHfM1uFQfdn",
  "key41": "4sQSdwX2fN7WbUafVGdjC4UgMU7yQrmwCezi7o1nS6xBX25ckA34zjvYsEVvxRpnb3rtUPDPdGAf1BdwtqfARbCL",
  "key42": "2Dv4SyBVxNxFbo2wNd6E2gvtbWPkuMrNHo1sKZ1UYZzfREUNW2EPJ7dxex9h8PYmsVpEjr39NP4988tNRLHifpxm",
  "key43": "4cLNubefcDRmigNJEYhSus1LAJMv5h8TtJVdB17GP5KqApjbsa4zXdNZJ6k8Qc36gAs1PSp8uxLnhZaCDZLpTPcY",
  "key44": "59n2Zy593juqwfAR8SCKvc1rf5aD96hKHUMBYdKGtQRTkPThxAo1fPzZrGXAXWph493DWE9TQXVV7zgTcKt4JNQD",
  "key45": "5Ljoda685QVm9tXZ4Lpy2cDn61nGr8K5Tgs71acpukd4Wy96rv7FdqEF8BNszxH3edzeLRcugajuuJr4KMak5U9H",
  "key46": "5xYAXdZ5A93YzRf867C7gNGDRcrjHVWhdELdjCnZbPstKXNRaqHyURqrfEeb9Jub4dtLnBtSdXraa1hxXQe8zU2w",
  "key47": "4YJqxBEiygkqm9DpZxt1V3dk1XZZ9DKxR3Q3UQNopqFnPcPxQHzHrRboQHb7EdBiGmkd1TKUp5z49B2GE9ekE5Nm",
  "key48": "4i3CiTaS7f2V3hAtdaLP5PCWqfGTDiu4qsfmwbEiAF75QEBYGMVBaxi3d3i9bMneoyXe43bB7xz2r6ieReYZ4YEY",
  "key49": "4FNm2s7RXPQS9EjrXCdKr3eHAehmdFLg8dqrts1hWKxY1QK8WWjEAcLgZfdZbrrvtJ2XEHMsdDEhcKDFj1EsemFR"
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
