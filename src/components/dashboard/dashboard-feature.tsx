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
    "537ZBgnwVvXE62yK6rVFZhujepC6apparboLYgU8mPU1quqn3WDpjjNmjqSLsA1SUnxHFMQ9UAc71qPyZhmkMqbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kizuDHPVfZPGXGdMtqeRXUdNMUXvrxCG3nvamKD3px4wtdgNzsAp1jd2i4y87sP6HFaevTiewhU2cCWaP4tXZQr",
  "key1": "3ok3jrgPmfkSJCHRpspGD21XDJfkYj1C2GJX2N5CuwHLzurENqJ8SZd7LFpn7JbEJponpQKME5i3qVCJcTqi9VvY",
  "key2": "3yNuSh3P6tBtUsDfLBDoMH3yBowqVrfPj8EPM9BrUCEcS9zUTg5pkdqff9UTczbBPeyD7S4hoeWXsRz8mJE4TKFV",
  "key3": "2iZ4BBdR3RXDKBjHPA3gSeJVi7gMxiwCF5gMsAHc6e4ms53MgqoN2LxNjZnF5AL9J9KcC63EXZDw32SenxovoBPc",
  "key4": "3zC9QphWtPAXgtFNPi3H45CwAmWci8AhepZ4zT1GKLzZv3xwiv2y1v14aeb96X47kd91mwikJPxVKe7f6oqDfZ6u",
  "key5": "4LJg5iioSvZFDDNKTPH8gk6uyYnHtvhtRZjynnUrAKgPrKdnvWxeBgPvvDbQcge2di2bus3XxByJhyZQQPEsfmPh",
  "key6": "4SQfzowtHZJWvfEsJ28ViLmcGFkELpFMj67mDtDPdErMNvJ6cPuCuK1jkxjcfEixbWttokn7a4BdbAJNnGdYWDiX",
  "key7": "3Ki8f7JGkJw8Ms7xgjtGA1jz7yZrz98PQADQBx344GnXqEWZf9VtfQrWSshnvXEaqVzuWtf7x6scSyW2BHc1cTHJ",
  "key8": "4sctr6KANUA223RBJvV2fLGQMAZwZcT5FzqAvnrHHympwGAiToBbD7GSqBV2CvsMPNwJxpXsYBLFVB5L3Litqxar",
  "key9": "48ggU3FVghsRW42mmwiYcBqWQLBuQgPXx3yJowakDbhsjvmn9UYFor2aX8R8wnssxfAZYLXJcuuPAYZtwVGaf14f",
  "key10": "gyCHbDFAT7H5EhPNCwRwxdn5K9Hf6Dig9pqGucWrnmAijxx8Q3vUvjJX9NNs6sKyb3421PQmZ3YewA9TmfKnjZR",
  "key11": "4u3hv7mbMqseQk4Ep962ZYLmfTjYzUARUSBvDMPPYV8FyDYNKdqq2QJLSnxQe78i3u9L4ofc5RgzxKJgGeQcFhVb",
  "key12": "5vt8S3PFPGfo7eSFnYgX7qgqHZ1WRq3HrGmwvVJ9yyarcfzFWyYtePjhx4nuZqX6nMViZKZuidPWf9BgDQmVCM1K",
  "key13": "nppzoqPsb5XSYdhh7FR41STezX8qL9rtNPTYGA9yMyXMus6Zi87t2EhXFN4RoLMjXgFKgmedRUV7ZpszCY4Dis8",
  "key14": "uKpLXueUow8DZNMZGWe2VFfwSqxXavBiWorsUd4Bo68tkK851GYQPpBsyZWAppcD7xAseuZddJ24V2thFCLTP4j",
  "key15": "2ZnZw9iqMn3pNSQ81p7k1yCd24LC9g727oDhEdqKZgyuJqPLXMtdR9aEn1GkHhimgbvBGtWDyTSnqEidc9GN4JJx",
  "key16": "5Z57AiuJJM4V3p77GSFiMVk5upQfxDvzNbyGcA2Ua8gyBDw7ZpB3tbeUcyysxFZuc4cMhhteuLBAdYbAnxd1VW3V",
  "key17": "4WG86yoejf14HgHYE5JxHXdfVoYQNnRDgmYjxrRGGNXbxwSFrD25tBD9TuuzSVr9ZY4148MEwiFKJJeKuawxdM1w",
  "key18": "23L2Yth5CfNXQQmJPsBNQEPVX4yxW2E81aTLsaAKBRbozGbuaWDLsJEbSm78PYG4TUxBpTVMgwL6bSQPxVDFa1FF",
  "key19": "5Z8iEfq6TBkdiNGP99KPyHH77ZCbfPd6BVqoGyAue1hC2RPX5bWfY61zFhe1U6Uy6w4CAiGRLfcksL2yScoBmXFz",
  "key20": "3Xk1zM4yqmH7VZ5SVMQdrg7TDnbbZ8d5e1EEnmDqTVCba3dtPwXmqPbgURH4LVJC5TxxUU3m9sQCLFq7daH6Bk36",
  "key21": "5vr2VBtpiHLMRyTD2P3xSx2u5rP41NUU22LBeHPVBRhUGFng2mzQpg73uS7QpPqmYcCCFnU46hfabC5h5gN7r8ET",
  "key22": "4PtNznwbgnkFf7LDBh9bFey2P637jLbmWG33z9pazTuoJ3LGHXaGHdpjTyNpw1So5imYj47X6bAWPRtjh9fEzbaJ",
  "key23": "3sc1qasnUj8zBce7AfTFHdG58qLF4zC3csFnuxbiibyHfAhr2h2o7mPDQzc3Q384zKasUJVDS5iFWPbKUuGTvvjC",
  "key24": "4GbRaF5SFoDrqkc5FHRW1ciiUTu6MkRj7JEAu2xWZL6pwWJoCWF7umEC6ZuyhW4fLL8iBcU671Hecxf9xeqGhVBM",
  "key25": "4Gb4d1RdHVFEDaK2Ds7aAy9TWsmu3hXXi4Q3882EiBf9HrZVfUAxiWpgGpBbQACcGor91NQ9mBQrkV6L1g7x4NfT",
  "key26": "37rz2M5ibQzf1kLTnjKsthQYkJDPyDAy1HbMF2yQgTe1EHTrPwrkbrUK736QUryCAwPzTjGKjQsWuVPoYjZSCt4y",
  "key27": "4X5JRpy6WdAgat2PnGifi8cjeaijZ8vuzRRWdVr9A14MkCWV9MXgCqnyqDt9SJDiVgVsjVY3qSGxaqSNXr9SFLhf",
  "key28": "4JapSajzRrtRCFgUb1RzUXG5Ev9gWT2VJugsxNM5depzwcoeQMTUcEDm8xT45FgAKmSX6iyUW1kAd7xdyYL3Dvo1",
  "key29": "3FCvoPsMSP1bv1mMDPKLjBwagqkYJTEqwaqjYYax3UT6Kw1aBYXcsGCJXhYDyAZSNUbZJJz9sJ4myHULh6xLfXqM",
  "key30": "253cskZr5iZJWxo9qSMhp9ZxsEdsnvtTZ8UEr2jLpnQdQHh6SSTeXvobWmStPgTH8Pnu8pX8kfTUUTnkim36i65x",
  "key31": "YaXwdMLEoJ99w6ss2DVadpdDYqg3chz7C1HxgJbH72q7V61cL9W1yhR73vBLSXHvvVfsxKCazcWzV8vut3Yz1PW",
  "key32": "4VzXs5C2GSauNU4ZK211ddzUAACg7yowwCwJnM5WMwSpbv9wqBWigicBLQYXWHKPjt7FrtNDijupEEtmqH4HNg3D",
  "key33": "2EexXdp1bVgDNehvRLPPnk2ZYnankRCWKPzNvxBKi2M1xdPbQwAgbADjmLNNfVftk7cXfHx3VAFytqWRyqDVDraH",
  "key34": "2Z4D6BGhDMeA7NTJzaN2UJSaFSdY5EDK5bJUTYUQdp9DEitnopBbag62p2vSbqwVNoJk9V3yeGRFaTPqtBJwC8PU",
  "key35": "2P2BcETa8LJASevzwHKfDYshXZu5c7gQsS4MeDrSD9KtdZKLW6mBk4ismYte6GdZdC5ZYRorUrznRVquXYwgAenb"
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
