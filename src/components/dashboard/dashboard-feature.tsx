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
    "5rpY54GBtrK4kfSk2huzrjWmvdLStTsaEzhez3yxD5hkcxdSt6XHyyhLz94ncEqBAovv5ir1eJLi5ppfs3SR5V4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6V5ywmHgvH4HPYvSY3Sd5rFjyGqSM9rYs7TtVwGuQuHvYUQjxDCsJ2s3TU7WP96sR9EHk6Y2BEv9FYCC15X8ShB",
  "key1": "3aYZA54DXQjmPSsXcr2Rg2Van1N2MVGbSQAXXoyi2gCjpL9YEnXKmrgAhmLjFFj2qBR3sximVY4oPk7CAp5vHEFi",
  "key2": "261pfSTtPemsFpeSwnGgZ9bWsV2Asqq423GxGvZDb9c4fq6TvdmCVg26aLfqazXzoEG6UespDVB9cEwV9e2emVDN",
  "key3": "ayy72SDZppcNC4VdaJA3zUZwMSQv4Y4Go1rTEgSvSk7nDE48h5Yif4a2bR8cViVyWoSyBiqobvXwtjUQ8r9hoYP",
  "key4": "euZKooHrBTxejhvTfgY4jqmtRjWHift3pxhPZw549gyhcTU3BfuXn3tqjotn6vk4DcAPF3ofUookAyT7gT1Hcz8",
  "key5": "5hDHxZfb65g4So5LZdkUAbWUUPv3ZC7hS4S5pFofbPRviwyVNJ7BKcXBLi3q8CrXJWpEdBChCJimdsjUjAk1dfwH",
  "key6": "5k5a85wZA6eCWoFy2YemT18VtwCdZjzTmfMYpM6KhzvRMcUQXexYzToawGo5WCSVqhPwd4njDzNioHzopC8nTdw7",
  "key7": "3qqoNGWymJvyTLbnUMFcsDSdRkt4FdXHsyLxSBDgbWPj6q9U3DheJSbXzboV2qKqS4yEtDTmJ85Ry36gz6X7HyHP",
  "key8": "WjQYsgQnGHMQiusaVaJmHLfrVrqxZzn9ErVYtSrpKz8YvujoJFGhb9ASM46CpkY2x9ZS8QjFzmG5sHyvLeWCexk",
  "key9": "3i6jGyjefo7Kocog224FaEzqchtrTsKLaK5rYxUU1EizR3Bb5yxTxyHHRvw4MxAAs6mTkwPj8ZsXYZg43eRcUUiE",
  "key10": "1w8p5GMfnJZ2YEa8SNgB6fXYgqeNzRGBj3MTxBC1SMWfmve8EcNkCHUCPxHBctapNtZJeRat3U8LK5Eo1nKWxCV",
  "key11": "5eBkwP4oCyyExpdEz2vF8zdyroEzNbiUVaXn58m3RyLhwVrLidi5zzAHT8ptEzDnfW1Hszvos8nAsYgsv4EaLKEH",
  "key12": "ztUzv8w3XeZfFCRY8nhoLYgso7ZPPPEba5hkFjD5H2KVvN15RoBD9Pp8NFYQcohx8cfUnz22F1YwqsU1F8BQ8hk",
  "key13": "HQCb1abQhoisPucK1c1tFp4JJxJp34vDvT3kXpspWjH5FzrKxYqjWADWH7opmS4e8Te5vovyzi2NB2bzdD9gqo7",
  "key14": "48RLk5bRJDphfTL5PYXtnoNqsFD85eDcMD9nBfX3gBujiBzLzWxA2F4iYYR6G8jXnSbTB53EcwCeuskP35Dya7xY",
  "key15": "61FZZB1U1U6DVFzLf3BjbMrJbo8oXAr1TNRXhkke5yo5LR6MYpkFPkhjYJ4YFStvtab9FW4t9HBoucPKWXvmBk9Y",
  "key16": "5m9fKXxjb6YpZRAz1KxoHcHSAmvJPThiKV7KQ1zarWpKMqAyUMXL4B1UvkiLWjHHnvkGaFt4VDkDVFUiMwu3GmCn",
  "key17": "3wZPpNKyTKzRZk8GH4u4GpMkJbNHFKAK79khZ3ZY4HspwjccRSc5dK5ctynHZyAFbpSg3CX2cfNToBC6FbneWGvo",
  "key18": "3xkqNDJsuX969SrxgWLDGwC8sygnmL7q4p3unDnqTFp3BSkPupFBCbhtod38e3ncn7XouiP23YLfftnfKCMU9nX3",
  "key19": "4VUsYcQYq2VeKYerfFFwbUJXdXWfw8Y7gC6NSAZsQdQRGBMRSuidcpF9oQuuoZP2K3LZ4xK6KcC2ixp3P5s7uH4o",
  "key20": "3cf9TcknCwn4aGXiMivoXeXtDHWe2FV73CXY7iJZ7sBbq1tw1LbHX4sztrh3ewe5Ymrhs61g6diyTWK8ey2cjEHA",
  "key21": "4tmVdVe7WPuRLJD3VzrVRrwDVDEqiRz5LCgovR5M8s33oCLHkLJVEg4j8sLuYCX9MBzKnLd3G3j66Gvmdv8PxmYV",
  "key22": "3bCYotBm1GCK4omS3QXvq6uEeTHQ4XTPccwXewXQsBupgBJqNgv6EQ3J3Rmy2dsP6aEX5NpP3MQv6V4QmWrozyyW",
  "key23": "3iVsM1ZFaWPKzFsLgdWHNg52ybwc5XZJwFWbesrS9mBYjSJuTEBN7UB2rUnampNm9QgdL8ikQ6kgCX1hdqJ1zKiP",
  "key24": "2ZXrouRsNMHZAsA5j2jQxsVmjrdeoVmtQqmwvXd7Gmen5s4cABxSbheuJhWFjPCz1Gat9VVUuwVBTVVJKgBtD6Bq",
  "key25": "3m8Cnhg59NqGwF17h6WytJDFkRtwGu5aAtxvrDAbp3cZd7Gy4W6E1HReRqgNZZQnm5kx5gMNQU31ma7jiRdwFxqR",
  "key26": "3kAFt5Z8zoZCYVLpSx6uuRZdbpy15S2oyEaQuSXpLRJRUtt7d3m3BMA5g5UfLXEYVvGB6i1TC9F1aCbtLbSvZ3HH",
  "key27": "5R3NZfF1jPNcV8k3KLMeF8CYMdq4tAUDeArDr8vUJ26aaXWs2coWPaAdfbBEN3JM6ys4Z765hTJydRdgtfuothwV",
  "key28": "35EHHa7XMTnQ9xYit5GSYhm84UpqU3cW5DRD8eBra8NifWUnVP3NezgPw92Sohi81vdTQKghZnJYmLjPA56xYnbk",
  "key29": "W2zqpcnTg6jPBVdyiV3SKtVGD2cGfXvm5bF8v25n4iHpZgs39c6CHU7tq4EsuoPjX3pSUrGgYdtn5DohkvTZVfk",
  "key30": "512dWSaiZTx1zrR4qjeJSNCs5W7PfZYgynUpbKMeRWe2KnTbMnsjpwNZPcfohYktzoh5Kybvd2hNV84o7UrYEee6",
  "key31": "dNTq46TykQvCJ8bRwbK1EFEuoTAhg9aAZvhazMqX55uRYEuHD8k9UQEHBtuF8TJCUVYWAyxUm23WwaPEfMnGWje",
  "key32": "3qzfZEuKAw34H9SwVrm6q9uDNeiEW7y7HvLbYf8cR6B66eHfHSW34YMTheJh5rpu2VhQnuMdL91XdhaNfcDqnVVM",
  "key33": "4oBLNxXqkE2dYjL4v7gcNfsjpzye5aAde2BrUKxMSK17JRGnXDSRuhyQ1BUH8tGkv72ApSCVSEGoPX23cbiW4Xfg",
  "key34": "5BBXaoKCfdCJDkXy5bd1DkRygzGkh4L2Pdmf5txrSYtRt1Zbbco4Q25J2Bp3NnFqh5ZeEn74KpBewavo4mDafiVY",
  "key35": "4mYWwuVCAiQgDz1GsHQZcCdtaG31ZL5qXddGYdWAjgHoaFq8wPZuvY2xYDCyfPHJHFTcmknC3WAFpnr2DRtap2o4",
  "key36": "4ZYgRJM5uCNfFHvh4MicsNfKRzAFibJQQ8QAv49BiVVL3nNgZirn5FPswsjJidxoZLZriUe9shSvtL4a6KxzJUKB",
  "key37": "WvE1FTNcbjQEwQV7ARHsPXEh25WP4ot2oS1M2Eb8XNt3JUCfeyCSdxBwdHtN5YSA5PrGGv83io5HmQsEW7wYPBS",
  "key38": "4XTRrdtdMr96QXUkFfdCdFunX8rSwbTk6utJvVrF5dgV9mrRQ5ZKdPzk6YZSoWaDuqjMedNV5BUQZbDkVJjtyCse"
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
