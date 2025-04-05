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
    "459FRjZNvBMrWGeqZGzv69WAwVzrxyhvLYt3Py8WqJkdBuoKJWpBeQB4La3LzHTMNFi7Gv5K9NPaHDTWxsptBznW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UnADp4pyeMMeQq8PLbLZUcKWMwbyKsrwgy4NzYUFSMY97tjChedazJKdgzM8csqu8KwfAGn711TzYczwg9rMsdX",
  "key1": "5FRw5tkyK3djVvyy5JJjrShEYv8d9dRqGjsvk1kZbT4ZVmK8VMBD3VGXFJYEkUzAMw1ToEtEELGyyBDaqUvZpwjB",
  "key2": "E1sUUyGnsnAknfkseRLmKHFaUcrxQJZgzgvLJJrNjFA9EXrEfzihcZ75Uf8ua6LyueSAWBUTDWU4dhLeF8bkAaN",
  "key3": "5moGmhXJupyNndHHBvBQjDMSLMdGiBq5doXtRGuumU5EPA5uUfD7dVRsaSzgiR7RZqWdkH89DdX5tZjBX15gsmbZ",
  "key4": "592hmKTAnPG6hbJMqWX4voSUmZACBxv5rgXZkevcJBHvaa2TkgkhNJjEvx1FwLEWKXqXHgfMYc7Y93w6vNY8VKHz",
  "key5": "2YSLSRbu7PB1ZwqXvKUCBtLe7jYicfHtbXPegVuHMquWvFC8uFZGaKvGaoCYQTT2yNpGtenbrBMQ57qyr1BwokRy",
  "key6": "2QcfP16hMTWQnSvxfiQoo6W6asX8HHXCr2vZ49xE3ufhAVD9as6kEocgrc5E5VZm2pNnGKuw1isj8yWt8Wq9kQt1",
  "key7": "4GgsSaDgqL4SkY2TmaX5YCs4wEMAhhrRvjhC7URh9Nfgyzx3CaLBaZpvRLwbkWNQXYiL9mBYmioGUPB5ANnWDzTk",
  "key8": "5FHT8TCFgGwS4xot8XskjnEsUBdATDjebxLk27ZXj5KUuzoMb1kv51N3LTDL9t84WySYD4CCg1s8WqggXKwtY7SV",
  "key9": "EVftH4wd1ud5VQrPaJzPxxy75L4BKgsEcZwX7VJCvB38gEUU5zhP2PStwv3YLcFUVpv5LUARayc9pWntfuA6WcL",
  "key10": "4Buz9g31PR18w1D6i72BiNAqRTtBFL5Kv6myr9AeeSfYDVhG2LnS6DneykU8g5VNKzFHJCYgEB7QWJ7qjXgiQQBk",
  "key11": "Q5T8fJabtyFAunF8RfQHUup1EcETCDbsvUGLbx88jB4bMwmB2viME8L2LNfQZb15A9soTxxGphfXqP7Uyn8Ffjq",
  "key12": "2Gm7Pb7MWTRPB276AfScuW5teEikAqjkav2W7bsECNLkqY6uiL5eRZ1YvsKSmmrQt8Byct2xQM4VjcjLYWZjD7qZ",
  "key13": "4JwfdfbAe7C9f2ghxTQnuPD6i2ijSiZMaqFffFqBVXgjmNNRSKivpy2an9mhzr6dFtkkA6vm7M9y4vfjvRZ3zHGQ",
  "key14": "4Qr5QwQBg3MY7BbBparCAUguvKeCuxzpAABTA5p5uqatreGtiXCAf8M6zHHyUwkvQa4GSbzkAkRWMbjmsDqKD7hg",
  "key15": "4zLvLAMyHtULdgr7ywJHNexCoPmVd28HpWaSxKrzyepWGUuX9TbdMdzUZfJBA7ZeiNXeg2Xwch4HoNgPDWQAoHeZ",
  "key16": "2v5opbELKbDBpi3vPEWx3BAKQzgfmWzrKSayNiteyw8HU6saSPTakY7qo9m9e6RqyDNR1Mu8LL4QBYsVe31HrhnA",
  "key17": "D3ULhvXPjU7znQiBDm1yHcQa5BHLG5VY3EHb9GM89EDCJ7agrrhSRjfptyUuQHvKphfN3UbcmJuwAiBYP3Fvxt7",
  "key18": "3aosGv4HZmpn6NfccG2tfyhxvy22iF5HAjQncpHj57YmRiJfajFbP8YeuEvziuXr9sXFoYaZBX5mykdJiD5QqkY1",
  "key19": "3cmCfJxjqtcQqsnJPh5cyXpjWZu1rmpS9x6UCxAuBu9bawwe8h6r9SBAmf9Upc3ZTXaV2Cc1N3sN8biioJR1QTW4",
  "key20": "45V9MD9UosPyR5L4qhVQbe1TzcMbNNscuhbb4WE2LgQCvkhDpEijNwsKNzydGJJoMwfM1yEANMbaQzUigssWh4fR",
  "key21": "2efc4wjrHZXAswXrX2DKZHQAiH3Nf9zMTAFCQskeBtAzvDfZcLiA9sk6Dc871sRDd1Y3nGtoMinaJuDN8qJRjgde",
  "key22": "4z5ieLbKcFWnYnX2RBDMnrzFdsajaaBRj3MaNZ1NxUAa77VSjmnvcPMWroZYchr4cjhLoLP7T9p8q8qH7VsENHLP",
  "key23": "4CiFwKF1QEVtbZeYksEQbuaaXFu9eY5QbfP2ntHHeZHjcj73ASzMMrAgLiGdagTo6ct4jrtcQZvfiDhwFQ5vPVuP",
  "key24": "5uh1hprDQ4YUViZjc8YvBxfBWuNdZMZx4LDRVQVToPs4jeTUS4K94xH6MJgyHKa58zyFKvC28xwXbXbNZ7TL2Hei",
  "key25": "3auVvFtd3gfytVNPMtd3Qc6Q164KHXGcPapj2bmyfe5Rnb8LYyG5aBmRJz8xTiAmgVAtqBPzy2QEhMiATX7D4s2w",
  "key26": "3pmm1r9ra8Tpgn47pxmZmdEK2KE1TrX8wm11R8yGuJRckWwkXgEdW3B1qpd8vP8253WEo93EUvL8EBxu4SGk5geR",
  "key27": "25qVtTgz6P6NceGYLyfaQJFsKb4toMF985BFgcXs9Skp7bD6uKp6S7W9fxBvYS1CV4SkzXUQzSkSNGcmDq5rLU7F",
  "key28": "2kF8qPvsnPwssUQ8bXt8gSAcdALtkvyRo91bM4ugpoaaympXFR2TmQda96yMGbEP7tfG8SPwpCT2C8vXHnXWoUyQ",
  "key29": "2wAEyNLfVAXNhWeapUpKvsYAfwhXWn3c3pbacSA78uwCcaLpKFQR42TSHoU9EDCVHL2QqRxCp3iyDDyaxPXCjrVi",
  "key30": "1aKMBfmnH6ZDixE2tUSVZGxGoUiAuv8Ak6ni5kFhwXZL9cFbsYW2wi7Q3DiSiS5ZhxM2K8m1xxBerPT6uZNQUf6",
  "key31": "44WjAYtFhgZBpLsauXhyFeZhUvqzMWPXg2eE12jmHwYNCUhTmanq1o9ES4p5Qp7Gu1mteRZewZjBQLDwJ1sHZTt5",
  "key32": "2igheK58oziCg4CLhYiYHQxPbrHwcRspDSHchdKeMn2749h6cn9sWfheQKv8XepmKq5i7qr99QkagNv3KQgoFU9r",
  "key33": "nZRm3UT1X156cyc3EktmRSCKyJ9EZcLSs861TEVxdJz3uZc1V5u9MkWXSsDjooKsuBZbPFS3seQHhgtv8cytmMP",
  "key34": "Dtxbsqr68ek5T26tC1fmYPtR1qyuYJynGjDfw5Vz4VRd49wdwy2BMEuk6K9KsSjeBo8D4LMLWQd524XaETk5bSw",
  "key35": "2e2JspFXpZTsfrp8ehPKqSPToTuRNdHV9JEciLBgY5DcpFKxDLEnFcLgS4gNSYxLjRh88rbowSVPeuE2M9rFLvM",
  "key36": "5zzEzrdyYP6KYuWrdTTV5tSNHxyAa5Q9ErTY3ZsTnySGc44DAiMzE2s23JMvddZf9AttJthkW4MvvjjN8oZKY7td",
  "key37": "4V2xecZhcaEn8AwbFFDNTnV9F2vGuTCdMw4NrSM8NrsTjnDGAfX9kiFFgpAkQ52MveJ1akye6TPSLvbJSigdMcvF",
  "key38": "LgTmLW476vTsWhsFLDsyn1yqfuq3w1brCmDE1WUJmqCxQ2EuVzcUB4jonJXq4krUaA7AaidkTt4ZL5mzD9Mv864"
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
