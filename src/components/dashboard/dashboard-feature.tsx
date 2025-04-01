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
    "nGRNh9ekNdxg5W7GbiKk9oqyLgygYePD7yuNypgJoeHeMQxBTbVaQs9KdRWCcN19vt1EpCGV96XxcPtpPZ34GzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bVqJsYMCiqbZuNYCRCdrEvqsoYwrZc8hDWYBj4yVZUUFoekqK3tQEDJr8wyaTxyNZLv6aM67x8qJsQQsiKx7aYs",
  "key1": "5kyn64qqeTu1g8gdSd8RnRF8FjSBZ1ua22uMxRgtBM11zmVyGdNGeUb1cWbzvbHTGDLTYvYmdBLuxW8fEfXas6CK",
  "key2": "3PnnW8njBizPbZ9a5FMpMWhy1pdLrxUd8cSKKxCiw82kbNJSqpE3txb5hs2MtrzET7xivmaEJrpsA3ZdeLydsrje",
  "key3": "eePdwWAigjktEvjaPyFk3upK5Wu9914UkDAHyyVjBdcfBTPjF7vUxBUD96YiHjgkQKrN2dH8GjST4jkFS4VMHaK",
  "key4": "3ywsk1F4YzejCNrPGhWJeECYKcBYeGJ45XTcq4SytXxXcEyajoFb6x5r34vgxd48gfZ48G44MxQ4CNhc2Xz3ym7h",
  "key5": "4t1KfgKaYmk3xjry5bDi7so7UPBz4ogC1aYHLpGj7Qzd7zgRLucEgG1gBFwGFXuAW7of7CGv8enTnXDMnmEFS23g",
  "key6": "2YLHycyeLgQiDgta83MFoHuVN7AQzwQA5FAseQ6xWgsniAaoXrKyHCms2AGQQpamnxuyQ6si6LBxJCQMvipSj7Ss",
  "key7": "5JuvTGgzKuG5iFjnUFYSPma2bhE9HvTbgyeyDasveDki35m6bAP5JH4C6ukFVK9iMr5P6PkDcspgnwNC9RZnoY7Z",
  "key8": "3EFb3FjKPbro3JUtjjgGdp3aT9GMBtzf8pfPtzn4JrLskV9mGFKTJzFsyAmexuFPnKAtp9Rco7Tge72GTpfHWJPV",
  "key9": "4SJGPT2qm7eds9WtmbET4HEoYSDhLFwchPxU6r1JisXTnLtCCyiCCMrCyssPc88A1JmDqP1LznHmaDeHNiD4mELm",
  "key10": "Q3vAWcw6k6XNRKTGu82kwVtA9g4PuCp25NKukGjcSj8TNdkunr9KbKkqx7KNC1S6rJYXstY6e8H7eLjBNmK1JPn",
  "key11": "2h9uGiL8dTuZ4jQKyVLLR65BBvp8p2BLKxG2Q4TY1L7WfthL7sNz5sKhq3fxhhV49WZg2nRmd87f3SszCKzobRoQ",
  "key12": "L1qw9H45HjMqiHfttoyCkhxQsqejyai3nxwbMQqvNP8NFBwXYVswu9c9CR2Md5pCWPnZFrTj1zusMu3Aycorm5r",
  "key13": "5hF6VLfUFqHUH2Lzb5cPwy9crpvLwv6c8SY6NfPpui9WwbjH2xPPyFqLM9KV3nYSbdjiuLxPvUF3BrTQEwHvT1aG",
  "key14": "55qAbeYYpQD9h5ZeGwBdoYgfqjppPEZvDo28gUeErvoqf2EGhXanQUJ3GviY7By3v9WeuWXvULkRv4GkiRKP3E9X",
  "key15": "4Ns8cjKchrwoEPsSLJ6nVH1WujF6dZZwr1zD9SZQTYoLLn5uGwdx7pTgX5FXomTeULbWqWtfbb6KvQcMirHJbSiA",
  "key16": "5X5Spznt3KTH8x6NCqoKcxCd9b5Gj1dpU8rPn2K7vTJtktTcw3Nb4ZuSNnzSZWc7wZuGvHsCFb7MkNnV32BH9FnE",
  "key17": "2xYqgisbxFPikiBSg64VEpVzjXuq6C8VNjbWupUYaJ9HB1rC7XaHwzwJ3qySo9rLNtURhPwu87oWK9wi5rSKs3Um",
  "key18": "3gMUmfrymBZvkH5Ww68bPJuRrZhiCs2gcK1sD69xbntgkQ3oQ7VowB92xrTxUdJKEBayBubzsRU33LkALfrooVq",
  "key19": "3FgSSr8P5YhRf3GtKSJGb87W11341poCCpa7cKUV4gUEQRUE6rxGEzjE6WU7RAKQmh5NDrwPaiHMbQr3eEpzpBhx",
  "key20": "3k3xq8Zomya6tCD9ckptunkHBzfMGeebtjnZepzN4Aco4r4KCotTBCr88aXKhAwM9Qqfc5ikhJcVzPtPKqPyp4G7",
  "key21": "4Q2SaKVvSL41iEd8HG3KQ3PukV6BXZnHaULDGTwafVnLvDhUM4343modYxoJjTZkXomCRLe5RejN6MWUGgin7jS9",
  "key22": "kfJ85bh1kJkM81Dag2kaiThe7yg7VUqdiETiq1KwiATdFuf4N9P4R7NjLsBtHvgA4CwgcuYtXsJ3CPxLQVLmE2t",
  "key23": "YanTAQEWvAEKJTA2KhSS8qCMhdsNum2kRtTdVixUjnKwfywFn1FaS1c4MkmFQjU4XK3Uedo432a4YdtqC5JcZAw",
  "key24": "3ajsH6FRrXQibN74AAg7qqwX3xi2UbsqNiURPJkr9wvsA1VYqPsyKoecMBTLgvpFjtRrWkECLv61TWDzDJ5bMGE9",
  "key25": "hxSFG8S16YbAkW8WQUFMhhrf43j72qXdJGjHnmAdGDEu3vQ4itrfUqUyx9Y4M6UYZV4JVVFCuo1ZrJdCPSHQWjz",
  "key26": "3XhrzCDnk8ETwD2gbqY3N5y4Yd8XzB92mu44woDia8nH6vCHmdpkKpx4BumgnLcoR6Pe8Tfhajw6suokY7CRtzV1",
  "key27": "3VfzeV6towZv5yL36Tup47r12KdmGj9KjXfz4Bj1fE6SY6sLYBcP5ehBZY1xUAQthnMyS8es1maoABUjxoMh2D8q",
  "key28": "2rtQymNWuLbDBHr2MQL52wPyEsUGVXy5v4pRGYn3Skdy8jQtRFpRRURb7tgDrh7dvukCpS1QFCWivbcz7RTXe8pw",
  "key29": "3kekBKoc7b81SLJ2bYFn8AWwAGyNwFeXNX2bZFcsUBYa5CNmrWQHiaL9pLCaLyU2tztFRUaXMn6uYoNcy5qoW5y8",
  "key30": "5e89tDwdj1XkSEMKobpRUzd3E1kfsSBaAnY51rvCroEBiZNbpV7duBr4VXPrW4vj51AmyeeohQqRdZU4YToiABNw",
  "key31": "2PZpLkwii3M69v9uCBgH5ZdjKqqe8FWFczuAvb9o5rV216VyGFtpcgNzLj89P6VQUfSTF91cYBERqKJqP1r3KkZK",
  "key32": "V7cm4TY6QbkDWKMRcLjmRddgvqk6BcwjNWTKg8mEA6Hq7pc3ASN8uPMY4QZfNyab5HMeHBvPjfR4TkmPs2sDw9m",
  "key33": "62pYjSXRA8oXA49dhtu3iUEq53CjDoYtJg2shFqCTnLeAAZB9HBsAnTHqhM3MtsJQBNRsvGLzweRC5xpXgacAmAa",
  "key34": "4siS7fMohGYZvMRNaJAXRh5AWzRBmbTdDEtsVPN74JzCxDD4S1zHgLe4Jmot3VSZUQam1MQDiWw4pB3bqxyvrVQK",
  "key35": "3Sk3s7DBLfYrsoFkV47M3ogjVdBoM8Rhvq4CBBhaJAGWWBStb4ApfHaXhrqPPWn2KiVCeB7n3f2HcA5Z7CRCSBjF",
  "key36": "4CztKCqMieDgfTNX816xdDJR8X3bzQnvSSrnBg9GG5VHRcQF6t7WBd1FkpSB5A6Zt38vw687rfbvS7ZpM4WHCRqa"
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
