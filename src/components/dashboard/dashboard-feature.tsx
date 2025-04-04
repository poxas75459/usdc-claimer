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
    "5iqBpEcbyqjcW6qChDXc8gcHnX6BKJkCRYPbjEKobnLjFoHovhHCdr6Ac988JxbwerU1vyzcX4BqFuzhhF6wGNfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ui3UGwngh4Z921zR2QN2H3DsUS15bi4AhQzhPB7JvafkXsxUw5gwzkvDPLuZymx3giw7YcL3j9Yavagpit2aKVX",
  "key1": "3Rd9sshGw6irSARqmyQ1Fq58qLxa42xFp392WS46Ls98pmXUvm9UocMyyTrSxsbSiAmJUkx9reCK5xR8Z8e3Uxqe",
  "key2": "42o6PR7CmzBNsaz3uxMaf2RvvWeV8W3kmyeXDw2h393guWidD1tvab6JrMC7i8CoTukBHB1rsSdLc5YgMu3LUUqZ",
  "key3": "4K7PHipXR7bm9Jp9A6Cf66vJ8EMgQn6JRFwgGhiNgJLfynD7jc2aoz9MrXmSpDp8YHgywCVjWBQHY29fNoV1aL6j",
  "key4": "p93GxeawRzFpyLxniMaAEV2khDCrqVSt8CR1DEmjBfv4y1qWnqbjNpoqbHyYbHkNQgK15axbTzFk3waSFHkXufs",
  "key5": "5jymVscHLjf9Ugrmwz5kuU2MVmYJJPohUFUevqo3eEjrtfb8o96QFHXCsRTH9tind6gJkBW8p8jorv5PyRxXDsHf",
  "key6": "5cz8xYzsskg9WqxoLjsMCf4VQSNRff1QRB5d7fiGxPqxySVcesJWVYvKMkj7UyBVkTf7pfVq2iiprNad8JdNPmhK",
  "key7": "4zvn8QTURGLVJZLb3ti9BMf8axBKDyT5CfVTyP6EsUw3eDcchYxW87i7iTGj9Nqvo6YZV9qmPiC6opka9mifZAuR",
  "key8": "2A9268hHuxaE4jvaAABGuijBGdQ9GYx9u4snRFG2MPUsj5DeNZ9eKu6YvHVn5DTbNYUgueQ7ywr8xTRnvVNoigqp",
  "key9": "PUAXEXFAjCQxnY1ktZx5YZ9WWrxQ41dDAsrTSDA3zkho73S6ZWXeLY1yWKXYgNt4KesWsrjNRY4S1gqnSjw2vUo",
  "key10": "3YCD3bqLgqAxUABVrRvtf4rfM7bxWBLfHAcYS579PSZRHS8ACZ8NQoUjskQNPdSfMVHvwV6uJAK7kjoti3rAEK9Z",
  "key11": "5zfc1bUWsAB8VDwkXyDXSdmPtM2q85a5vZS6Sn5KChM3mf1cdfWvmNFyT52Vy5FE68ysYAedLUoTPNsbVkP7pzob",
  "key12": "5S8UfdjKFPi4GbCTjwk1czunUEK6kMFU7kBRqns4kQR7NY5QpjHjS21o6wPad2LNnncCW3Eh3tBZYGo64TVLj817",
  "key13": "3sBWK8U52MebPKBPPrrb8FRSPjjnWybbeyeiPS9nWcTu2vpguKeAM8JyYD5cMYLMRZZZo7itny14ghPKcGpgz96W",
  "key14": "4dEDMc8sPp1YgYfTzJnTfer6hRYXQSsF2TL4QenkLTBw1ph6uW67L5kPfkS6WFuqkh4ajXfHTvLm2XRo4HfrrrPt",
  "key15": "iYLY2KC31YdhCXmcqbp1snFzcANfPAay6BNkHxRGdPgSgKcVw2epgWduf6AdhQsZveTQ1b3sPwEAMywTUrhDiJM",
  "key16": "4QcSZtMmCDVFi6NLEVxY8a6d3wZhA3vbtaW7TB9rJe2RG8LK68d1W6g7nvQcQjB5JrhZi5GLYBxNwKkdH72hdvkT",
  "key17": "2ijhLXXUDquWGKueb6gP9ieM1bHUZA5yDpa15sMfjqbwVHsk5VuAohv3VonwhwqnWd72MVtsBbUyjYwkWiJc1fog",
  "key18": "3pxgA1xpmxXPYnbzAzHytkYB9diCzYEUntSJWxtyWEZqKMgatbK8wYHjsvaitu9hqBcuvN2vgJZiizYJU9YvBHqs",
  "key19": "2ZAKjW7xzcUvNnF4ag5DhAbxnKT4A7YdGUWjdWSZG761VrztxcRxrKkFrBhgdvz2z9aVLcGEiYji4bfaKrWhDDxd",
  "key20": "tBDYZEZ1hk8aMa28E1TiEPYaT3vjf1EWV8e4bPJr2NuYL79uggzX9T2MXGVUUvZjRyQ14qYreRG1h7ufYG9aLCi",
  "key21": "ifBMqz67bU5XS9qfHeUWM7HdjbKM3cMRPT27vCaxL1kTVRSZwHo16PksgHSGbTz7agMKdiMbVs9EkGS7CkYD9it",
  "key22": "46d717ZTArYYHgvzgGwpqMBerTRc1rzJEz1RwHiq8msFZJmGr6cQz6pJ3QEiRBAofu6GbprUCqktCTDw3vjmamS2",
  "key23": "3XqVKo7Fj6YQ38ztFzRTDny18XTS4dtsotK3ujhcquTYfr2DYvvn63fNocNn1QRM8MEx8vm6aRnaaVKZusKBfnvx",
  "key24": "2NFX3bcD8y9YGYfhXQpvGMuFD7RfEHdpqmXCJLgKHTZZHvoFJiUchEKAngNPmeF9EhWVo4yBNLNLjMD3bGr8iPoN",
  "key25": "iN3gPYKn3q7AoUrVQhadfyi8g5MPjtcBiskMBbqgW5P9dJ2MWo6WFaoYMBPsYRqmHdeV219cewPJ91KvL67s7Ko",
  "key26": "3zwnNENzoD7Kcnn8SSiJrsoEJhAwKhdbUnWuKQitAKZCta8aokfYmivwtwqrsyBX45zpQAhG6PVsY42enc576jNY",
  "key27": "2Mb2ZYavYtizTcUqbvYQ9FST5HjoNsKwA9NSMLQfKBLanBCNWdoRGf2zdcZN1aWYmR3gwPqEGwi5FYZvbsgwrDjN",
  "key28": "28tFYTdK6WR3KCDVFWrRrSFbs4uCgWNdJvvKnX5SekxbEnx68nngmQvpCKuNcgH4t6gVGZVG52fxXW7UjqZzrJtY",
  "key29": "4tnnYMxFRgkfQNYoYKk3jGCnYJ6p7WdECfqXX5yN9VkAXYXuWuPanP3r6cMbB5bUFFDjry7m6jEcED3gG6swv3ea",
  "key30": "2QSNWLwGAzjrcGkc5dgc5aR8EYeZ785zuewqNweKX48faToZqXKnDyQ2UVwcr1D8nytqMqn3rT6FjbgGsduEiBdB",
  "key31": "64gG5PdfHKwoRRFLcGPM7JCfWWZ3ahxKcp6q4zq3J5oyXmaEn3PUuQACFtzmdHxZwSBSQx8TAJNFcQE3md9imD8z",
  "key32": "3TBjAnTCSgfesUDiWcWe29TMRLmvGYNTj1EkDWdEWVGosS7infeSRfzKSaYdmZJBQwxNjQy9mffbeuXEiosrCdGM",
  "key33": "mpVkT5VkebLz6gGNi6GEtTZgt7g4KkHnBgUwby3u7ZVc9yDD5FYLwWtiQEgcFG88wEMp2muBGHT6y5KyNdsyxWV",
  "key34": "4LEdUMr2zFmJJjZ9NvvPNXsaqKcEMJJKtCrwFhYrymhwR7tJhapu1fVERqLtGLjN2B8rneJgfMA1PhNMpgx7wxYQ",
  "key35": "4q5XwhnPyamFDzpnHvdJxciHUokEV7MEB4AYCXGiyFPRkhzGcfsi2mZrHDMTsNmMvXAX22GvVv3TESV9iFa1J23f",
  "key36": "5iBRmo8ai7M3opmczQyG6JcZ47MQyDXMps2eCisf8iZsVZ7dSjxYsQpESHC4CgYqCmPC2g6K2jR531FNcVERT7yg",
  "key37": "3BNNZgCRUogexxMXv9XSHFJUQhjrTQJRct9Kvj4xax51XBsFRPM7c3JC1mXM3pj59jyrdYGzq8wvqSWuiSKYcufZ"
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
