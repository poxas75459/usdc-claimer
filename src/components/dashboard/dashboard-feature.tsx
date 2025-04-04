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
    "65EcE8fSWgbfwYtyBw1JKQsEz78P6LJFR8iwtgf7xTAE1fHpg3jpo9BUd1XZZiit2AvcRRMNuuzw1yeFtvvDpDkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gH8y2eGipio53A4xhZstUNTCeL6g8Z8s11xFguo43x4whz4zbhixUpHTAczAPFVgQArnDGK7vux3L39dBbZ879P",
  "key1": "3pm45v6YNYvDqzRGEBkC3wppGpKKaz6SQhrr8Ywgv9n1v15NGgnoJU2m2HdweTyRLm747hyK3HwSgpcBs43vB42V",
  "key2": "4CfZB5j5dbNrG7c1t7TbNCKu98u2XxFHFTZa64rM3TQU4BmNuvCpVGw4H57dCgRGVptNb3wpnCM82cB4xGPE9LuJ",
  "key3": "2cAtzV1kt9dSphbBCD1aYequfiAL3KjHYMZ8PzCbzdiiirKJ4bQqYLJ9sedpZyLCAGXgSYDzfoYK5jSSKLvWXAs5",
  "key4": "38jEaCshGZFYLSY2jC8XnnvCqj4JrTdZkYNt1ciKCPTxmBrh5YAtyEXLudM1GuxztDktz4rBwVVYxpmJGPQJKg7p",
  "key5": "3TtJhGr5iXXm2xnFsbcRrk12c3vi8GEVbLY9UQ4iqBotTzxMCdQu7AYx3Ezq73esSq2aGncdPGuZVGWa79u5oXBt",
  "key6": "3PqS35dvxHk4hZx7AcvtEmRh9zsbu58s3b4VZPvWjHrRqktfEymnqG9GDyWR9nxnhu3JjoL3PXrBToQCBgE8XrXZ",
  "key7": "wzyu6QHcn1KJ3wXPfFi1Zw11fC6Rk7n82V15WRwm8Pc7FkJ9r2fHgYN1EVkxQD6ow6csPtL6pHh9bUEbWZcsfGC",
  "key8": "5sZkhDzTsZVA5DpsmANqYCVLGcUWmbxy7N7hzKA6jsj7vtQrciKrEvoRVXnSrQeL4iW5jhmFXpJbKjUaYjfLEWbz",
  "key9": "4PU6tXWa2Jwh6QPZwdFmmiYwTfx3N7b1gkBhtzywQTYaAKNwhjraLFKRFY1dVY3Tkh3pqHVGJEXx4kRvc78xvPUE",
  "key10": "4TgxinB8uby8K1SB1m3iFyX4Dz3JSPk4DCDRFNKArutXHHaaCxZptsJPVJcxyXRJXpDGz9uqahwojRxGpZc5CDRb",
  "key11": "gU3ayZrQhPLnhXv3VatemGC6BJurPZyBrB3qAR8LeYyQSVyynyNGKMzhB93GPnT1VAG9SoEhnLeErT9Qa6UJFN3",
  "key12": "3Y7S43j34KuavPAVvxfsC8FvwaKhqHPGDkGfKNX1HPLrUy2A6wr9qBfo24Y4myqUmVJBeAf7AEGyMQ2vQCxAQcWe",
  "key13": "3pXo8MC9j9TXmcvTwMar7mk7qdryg15j9mQnyRDcADtVJe8P1SQapLxHS28rXy8wsGqCfnRuGZ1eQLKKs6baGQ5V",
  "key14": "21JwbRGXMjqrRpysUgsdnrsE1Q7mQzJ9aruAPdkrVcXnpyrwNMAAN6br8uuRZcZ7oVQyJ8tE16ZFcDJFTaHWPxxh",
  "key15": "4MBhA1NVxa3EhV4cEf3sSGSVi2pS7C332HNwdM7nYutwEEj6dzVVvjX6j6gtH5C6Z9PX3odEeEmMUxeuMModf3hB",
  "key16": "347Yb6UGHkruJawBTB8Su9ccNyXb4L6pFTxaEUPHfXCPi3zReSivzbCcw2tsHJ8KoMCsCJsRv29A55u7a8A6YpuY",
  "key17": "maRKbYHUHDc1RU4fHmCmnsX5182MUQSvyLEY6jSMURgSyULTvArniGKq967cY3HxsKB1bdPvRo4xNs5SDJGbMKc",
  "key18": "4KPDNB4PrXzNXDNhuAu7adHF8Uqp5VMdzJx7djZRsf9WfPmQ5rcUyHJo3jyYwbpikJs5pmyiuyEj6StjZvt9tf6H",
  "key19": "5znjVvjmibW5sK9H9M3KZZVEKtcPTe5fnzaMWTeiX1qrPihVE5C4yG31nAyowjk9fwThYfJiNLfnGwB765qBG8JX",
  "key20": "2fndJXZMyp835ABNt5BCWxChJd4AfXyEjk4SjEkkFCorWqjskh7wYBDwMzSkSxpWGeJ2rwcw6bbg2DDGUPEY5geK",
  "key21": "5A6e78bf52wDGvdeTHeFEWUDFaJzTKWgvzJAEAmdMRNnyGeL27gzTgezG7LFKNMWu6cEqifJn6wjf9BpHc5xjq2F",
  "key22": "4xmAh61e9CD4jWPNt3gnjhM9kia7cdFXFkTG9aLZdunV1yNnDLCoZmQdW9f1i6vEAwjh9CtszimsuKucmPq5mD15",
  "key23": "3Cqy3n7axmQFgXKThm3zdcgbz6NvuuMPAYPYzASoCV9MXiakpsKhmhPr1TRzJruKVU9ZDKJjTW2bVE4hazjtGAg",
  "key24": "qqJ6AJE9rmihmXCMtT3bSurjYiBqKWgAr1q8eSrQbc8Szg8dmg92CJ4MEPj3uaha8z9MLvrbTPf1TEM7aLezYGh",
  "key25": "5GzzfybEQ2ivNAEoxgj9wZLQxsubDYqbDxHS4B1mGBQrcBozVjUzfQd3qXCBD7yQo1v5k95FBBoZnomUa4EP4ho",
  "key26": "4DBnA9faxmHjJr6qVGYqUhovRAC8gUU1LvxcZHGFyNNGW8XxD2bwmX3Z7mq6P8w82McBkmzuJW6Q8Zw7hnBsunxL",
  "key27": "4XM6BzSxzoLAYNxqEmvXMnWh4BV36GoeaGYMDRYRYCjmHqzb8zp7Z3h6PGCwkk1aRVpSXmXDQfpgF94AuoZpaDWx",
  "key28": "2oJpgvXbdfTb1tfDXJSZYUj1dU7xzRGWd1Quv4NkafyTyGHUHXXzRKpPvD3WqwTeU3WqrssP8bZfMUDc4yGvGS1",
  "key29": "wAp6WRjyETBTPdDmVXA1tMs4nDuS5342NUvYQJpzV3ZnTEVavY7M4QeCUsP7wRWqGWVSjuhBRwStD7kCzaWQpRR",
  "key30": "4ceoJHHUaaRvCCtpQDpp8BgkLbgTVQWhLoo6EUoarHPd5aUhFBxjka2BGynXATwTL2dxRCwWj45PnEF6u5u75iQa",
  "key31": "43ceNsNXXppYtzFDHXfK9D1y8vxkrrEZTaPFUtZoGQqWwEUjPE7ycKZ5MgzWN47TuAAiisLTcWtZUrqfu8DTVXK8",
  "key32": "4hVTZxRD4YtWjt43SUH5BRQ4J2QB2StGnLkcMnNi3VkTZm3UmwETXHapNKREfvm3ovAfSP7qWnMofaKm2rZ35HSW",
  "key33": "5obyEsUd43mEW77ugJhJW9qhW3UmZoQG9FFHkSeoc49ii1uDe8F9jZizpnNR2NbHKPFJdjNRwBrNy7oCzcdUzpMK",
  "key34": "roDtFpifkN7ZsQMtspTGCDWg4tzUmATFVzGFmTuzcMbYpVkAAsFwBwVWNuGg3CVFrtNQ1bcpNdnW7CStbJhStqG",
  "key35": "3ShJzfn4Soy7ZcP1twsq4hg3KeXo8xeT6WXrEYkpHw18U1YgDZyggbtBtCAMjgR9wb9a8MvMKSgGdjjJMsUxTZ9T",
  "key36": "5KjtydRSW6xSmrFV3ynifPgfqvWwLbim7Zak8c4zpqtn6dLRcPkr2VZEj2eUvUV1D4AVUxC6pyJcw4Sds463d3D4",
  "key37": "2ZYkDP17EFLDU7YrCXqTJZ9bcPbQ42EYzQBcxxmQZc9PpT1cnWeumqRo3j8yCiaajDorAQNK4LSmFktLsBSK9B6i"
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
