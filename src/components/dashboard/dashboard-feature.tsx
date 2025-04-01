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
    "5YJfzECHYZdSBQpEb37kiAk52ADeLyZCRQ7iyfuqR4Hna144BGV4g675kbTz4kZdv1byFWf1uaMeC9QLogWmeg5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62GzkeqggMKB9hkHEf1ytM6YrvmjWBA7HHnE9pKDmqkz4VLZYhtFqzgo9PkPeRi6EGVMa5dJmq7KG5Tqb1GdJSQJ",
  "key1": "5Q4s8cPGAzi5Pcj6K8iGoxG33vpGSR5iKPiQ7dz5AAtCG8FQms4kJGfQYKGDaMfoXXyn7HpSvQirRGhUhM2wYwxQ",
  "key2": "5NHgvs2TTNd5SGutSD2KuaBJmLGGpLd5dnwRSo8dXqnsMYqdZo99sciusHTTjusDwSNvRMKk6VxVmR3XNzCjHAum",
  "key3": "5a1xnH4GYe1Xm51jEfZccy5n7oeEamBRxMFAP88YWMyondWHwp13MCE6gYGW64FiQeFPUTFeB5YDTNSz1bynM2QF",
  "key4": "8zb1dELyXFk5qVAMT4Yam16vC6KMiCHFzdtczXvCPgJUJRprW4HWZTTZvcAbseA3SDj8nTm2di9VyzGhQfurSdE",
  "key5": "3V9Axqqj8WeFcpW12G818tXunemMJUt7nnpgGqSMPWrqePaJwMu8BDgGUd17L1ZyiG832tMYfRsekjyYhrRTvyP2",
  "key6": "2bwNAftbDkbep1qicJpDqZoFU4TiPHtteGnAKwvC4AN5nJsPfBsSnr6M6jfHxMc3RTLgxDyELXigU86Jr6uqwZ9x",
  "key7": "31zXd6ijRzWhaPiWBnGv2CjazQdNtgTwPA2H3DoNyqJ4g8J8VvdAcq6cwdbkR99VrKxB3y8vJ3cvjR5Dgt6dSjL1",
  "key8": "5kpfumZNwU6WwcxZv1PnDitk71HaumXhe7yQhn2csooTXWQ1vJExhEypbWy6sh4Pq22cNy2SaxW2zcsuM4UB43ai",
  "key9": "5jiB9BstDQKU4fxwmdXBZhPGRPjqzjzBEoD3yj6jivUArKE7QP46Jm6g7DrmSNhRqsUgSEKXez5iUQUJ9WM2uT2R",
  "key10": "W6p9SrqeSCmRYgSAYXMrytiHYV81Xps8JQDW5RL12cLViwDuBVpYzhrJKScWi58ADxAmh1PgTEotTA21P4Un6QZ",
  "key11": "5fAT57ymyr3MBgy5tKRyEYRNr9cmukTMxuvyREmEYTuWB9R26r4T8NBvEDExrJaWSbwoLNwJvFJx6DPpWiZd93eV",
  "key12": "49auepMcpQc8uHaqADeMzxRbxjsgNh1BBicAKiVg7oWMAZKs8BQ7wx16mwrt7ij6rtCFbmq5ax8adtW9mKnFUqyY",
  "key13": "5U2bfW1jpdVJv6HfHkk7LaJURD6RBpDNz8saxPV3G8Ekw6sVQLr3NZanZFT9MeNFxiQUL1grtW4Jzh3R2xzA414h",
  "key14": "5Y5N5zR75LXABLJFJ47NCkEgmhNqvii8aZTAKVfGscBkUgyw6UdbRJ23Lyjv4EYLzJYwTGshRGTCenSaTj9MRQn3",
  "key15": "2LZMxgwe4G8WobtCjsmMKiwaDgMpyzpEmEUdVvvvf5mkrzzjQYvE78EtK62nDmiBye5KicSkXhCrge4PyG29XmJm",
  "key16": "4VHP3pZGdkczejEa47CyRXPoiN22Xpns7NaqLZEteXA8QS4oeaUhNJMvWvvwM7suNfN2UTDVePEdnBckq84UMo1L",
  "key17": "25Ahx48zNCJQ2AfitSjSPd3MUeXAEt2gwzuN5FhcquPTH7K33owvxU4GB3zNjBwiBUaHNXC2reSTvzFPziwoK8dG",
  "key18": "5m2rigbiCYthAMoC35faC7M4t2mnmn15FPxUhYDvpchQyB8mzSxgFjW3kx8kPpriq4kpvPeQjzW6PwBfqeH7WcSY",
  "key19": "3prfJDoMmg2d8ssVFDfKcBBUwioK8RJ7zY6LEionJqYHq2pyQ4mWZ84cdnCYU4vYkkveafEbGh63sUaVnS757Zpo",
  "key20": "scNqKQ7LXWkhv1JfCYgjNH8D6bTrZVhZG9iKZ1bqtjVfxJ224Pkp7U3sx9BuAkaeagjc9QCR8wjxBqBecTXQaES",
  "key21": "3x6WZa2a1YeiB9YvfyLmVxwJzkYKPgebtgAJQmiGDjz8vLwfCZYnT88huZdDdUX2yGEUKNpJNLFumMajpnmC9h5T",
  "key22": "2eAPp4112U7NBBRKrya2YBYmpos1zPPu2AFnY5eP6tB3J8SN1FPnXpCZaXYaDNTgc7ch5B1FLxJwfRUCDGbxixhS",
  "key23": "629RA9AfV6n1z9Ne1RQq4C692Cgn2hXekjcXU8CS4L2qYSpEvsJZ29puwP2iARCPrkk6y9zcTTG5zKc5gnDrbUiB",
  "key24": "2dhY92jZdntsMS3XEqqszP9hdtg4yrpfnNsXRLCu4NwS9fZrrmnYqjknL6shJuX8LR8P4ZwExjuu8YmbTmTrtWu4",
  "key25": "2EzVD9KYonTBhAtkb7hMwxrNw2YB8FgpouXkCZVQMekQ5Ao3AY9RZMy2j1XAgSjCZESTDkAziJrWyjVC2htHPfME",
  "key26": "nMcJZB6cfSiVkUuTBzqGM8zLKaLHrReg4sERrhntw8QT4QB5M6gjV4GbsEiyJEFMAwVpi1Tx7Bo1K9yEjULkowo",
  "key27": "2b2pQNzHqd6DpiRsTt13oV5b9z44FW6WcMsiR5qDRg7B7HZcQFn5wNyVCug6NJFRfxjJCUZ6MZByCWAQoCjfM8bF",
  "key28": "4yXBpwDtVscoAYCh1bPgNjAC5xbLZDQJM4tRGbw3toB5jd2X85nLANvZK3WC1R88H7U65X72Bjy3wMforkp76tfR",
  "key29": "25k86QR6aw4ASMM4buwLrNHYZR3BPGoEUomQHHSjRfW9AuhzJDU3Etn3J3bee3eWSaVUELRWEjMBDPXRTeAU5Vk6",
  "key30": "56YucMceJ1P6AvL5wBfPCjok6dLtuGBtztrZDVPm68vBgiyuuVCkf1cL1i7CG7i1Lh5NYkSrB5crNAFbiKw6JQXx",
  "key31": "5Hsh27DPDvwxs5hJ4JMQXcm488sz35ALk7GP1Py19Rbkd97HD7c6AKqjU9kYUDgqLkZvVToX6x8JoVMT9r5XYS8n",
  "key32": "apyduLQkgvcYiUme1QVenYEi5ebuKEMAVtR5426TJkZWPetuYJU6iznAXEwvJbDVCr2xkc6arqeghtUevtHpZgF",
  "key33": "3mupX1wryVT4Ebo2rhZaXj9fpBmeFWatVP9Seym4YMa7ZyzicW6hzAfX21FLeNjTiFba71q9PmqHJDU3q4F1aePk",
  "key34": "2wTnUtkwCXe5h4A5bzHcfYSC363co9FiSY5rfacJYMMSfZksUQCoJeoBUhYWC5WuqAdf6wnrWaqwHdgSQgMDxeGD",
  "key35": "5qtwifuGMeWPc5DrFuqNgKkXpvpBHisXe1i7fgxfpT8hMu5LTWYaA6UeA4zsJFD6VhHr4jVP83FwCwLTvBC69vzy",
  "key36": "5aCLG4h9ME3atyiNwzvCCeoACMAQTpeTf4u9eq23AE7x8Go6nKfxPNKZbgPZPcZmStwA98tBChZiSLMzaMugpSHz",
  "key37": "4AHRATWJn2Ke8ccx2hHwRbnekC7pTHwHqd3o2MYM7pWoX97D3TGJgTM6mMbSap62B4GFiBYFWzFhAroKqCSkBjcd"
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
