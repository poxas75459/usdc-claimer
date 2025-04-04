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
    "5KL65nYqzKRZKN9FB57NpX2cr3uQWBfvkBWjuG3kzbKEzy4UxpPEEmPDvihNLxzN7Pgf5E8NQgv3jpUswtrVwaZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31FqRp8ADaGEcxSYbkaFvCP3on848fABXndKx4SfpfNbXExxW3d3TD7NvdEBQ7fn9CLmdE8zeCpq9NtwjXE8KvqV",
  "key1": "5hzf2ikqibcYK3T4SPRQcLhPwToKLBYcsu7TG1Y5orNckdzrvcLzwMVatMqejCNeWwR7M7N8jMUN8F3vzUSgVbqU",
  "key2": "2fgebbcTdhDA9MvAooMQtA8sMoCd7qqMCszY6Qi1QPo6vwHDthcg38ZAB89s8jRos7o49y2E7UsGK6x4pNKCZZZ4",
  "key3": "3V131bSmbrjd3RR2zL5joMTZAgsNQ5bB9w4VqFZaeTo2wrPvjGgDp4ifCMdk3m4QR7kixB1RaGZHQgxAzutCXjR2",
  "key4": "3si73aJ3xvMk95F4CNW3gBFsos4q6hGeS8gbQyfC1tCyjuZMX8kj2paQVFaqhatL3QinD2tm7GRVPsW9xR7bpWD1",
  "key5": "2nLM5UECeYc68aKqvFtGdxi2s3wkRtczyJEyBNDfdAb55ke3gvj8HLdfcWk5BYBJoeSmRjYmKajHJtfP9iEXBxJm",
  "key6": "46LHfCTT2gpuNgisbB2vpG3fAF7sAaK6njWTvPB8DLe22uapKMDvJmS563W5suXRMPDua539r8D3hNt3BHsMPxV2",
  "key7": "3PG2HuET1SFuhacBZd3Yw723Mv5yzy5SEZwZgTGX6FcvMwaM5WmohRHEocCcyqDu1g1vW79SzA7KY9Ux1GGXvs6q",
  "key8": "4MbWRFL1fkj1JXtnC6wkamTHTy5DE5R18Ap2mXJDDZGnNF7ieRvDRnrJC5YWatXKb1LinAAVXug3bxr3yWJdE88P",
  "key9": "AZCYPN4cWMzYWekjoNUsTxbCoUmrTEPxPtzYoh6WBnp7oyv2rcn5sQpR2TmuMj3Tg3rvXhtAxtahnLkr4Pxyi8k",
  "key10": "hBezdXkikoahTmwNYrF4LiFqRSbc4hHVAS6TSV1esHNZg2ftFxeANbpcXcAEchUqzihtpCiciwuoNiWuCrbhs3N",
  "key11": "64wZfdXvZV5ZTepnXLZrBAgTpt2vuazefkvBt5AUgtqDa5gMjK2YtqLsjQidpZffsk6urpq4E8aJHe9ZmJ2Amaxv",
  "key12": "NJbeYuJd6szU3th7kMR1XvodcaNTp33YTXFXHBcaqPY7aKbaLf2kL4KPRNSspTUP9QB9mD58rGJtyYqrVh8VfYk",
  "key13": "5o6vuRG5ASvegL29qEHp34tzSnzE5kH9m8biZJPFtzMzhJEipZP8Chy9zvkQ5x3aa2q8A8PCUQx2Af5FJL3Hfcen",
  "key14": "5tBqaggY8eWWL5AmN2xVHeDa1v3xMA9Nk2ejMpxjerPdKf2b2ryDmZfyWEr8DjwmqskW5HLkYG9jKPAn7jTwHYPM",
  "key15": "32u22CKLr9EHVNgGwP7fJqkzjubSoDoezKxq41zjrGg9ybug17pZiEmzWWLFigPZ9DQwP5wrdyPF7huf9DrNQWJd",
  "key16": "taHvkCiDFFSQ5UZHrSKJa7pjaNqyFkSdN8d2aFp6MUFWSX8BFCc8uCQMQ2F8qFQVAPE5t1MSHr5FoFi4DjqNQjM",
  "key17": "Cjy2A64T9teJdQmCWvCE72Mqw7kizgJA3QgnPMHkaAGNTU1No6Axhz8Di5wkF8E4zxkY6szv8hZBo7BR1xW5p84",
  "key18": "3YJg2dWbM34aU9BLp2jRUpNq9tq3sNHQundZgVuqLrZhduaxFWQ6fwMLpNpphwBxsrFr52dfpnZxZBc5BgRtGjjb",
  "key19": "4FyGJL7XFHGztw4DbveNKEFtrEuEafQ8LJJi2NhHZnAWUh8KBCYvgq6TgE9ejirPZh914q7b21B6YrsUixAeyNRr",
  "key20": "f3mLXFsSGG5baxVuC1gjLG6EipWxybGLmCRF5QsgeASE6jfEyufiRSWR1eXMJRnaFrvPa2yVNRHyvkbY2mepqeX",
  "key21": "5Kj7G8Ahngtg8AVL1sd63u4fYiy7wfjDxu8TZkAFEqkkzgwNFmRPXw4XDiDLUWNGNpcB8rmkTKCvDNRAJYXcFMNi",
  "key22": "4RsTvdwUzSRr7J3KXGXiCiM1dwz8Hw5qNuVD5673EkPjA6zybdSkyiYyWMPg3gT7kS1b1FeGxpKCjk5zsNfTWTGV",
  "key23": "3bDzzTMT3evzCFAysgDSwfqXbwAuP6E4GPMeQbXzwHsFgLJeGBGfkD11vDh5UXnJHuKsThvLuJAu6MBwjuzPeYch",
  "key24": "BoxbKdEfXmuX4YXThBqtuU9WvQHfAoGcFd54TTdLCEha9qffe6q93RVkw5zZ8L3mqHX7UCSdjn1H3z8nzdv9jMQ",
  "key25": "55w8EBVc1ttZXU9VGdW4MnVqioB5QzYWbJGwLqejnXnneYz3bhzdhA8gGFTvJ1SKGcT695bFqVW1yufVjXJrBhMG",
  "key26": "r9zBHdm52y26UHNz1gaRy6eyA5G3ivU6ayMyw8kTt4XosTqYjK9asEE4wE8ny4TD6FVhQMVk287jFwz36yQgkRW",
  "key27": "2NjZuA95mZne3pUK7AHZ8fa8V6A1HJ3N5vCiwZb4rDgES17fn7tQzw1prb7K9ZXQHgDkjHbLynqgjhfnEp3Wd1Cg",
  "key28": "e3ZHv5ARSeg5PwDdeQSaoRaiAg2oti1i2e3o7jfCkn7qq8TMaRXA4q39jn3Qoz4MtCTWznPGDAQendcUfddi6LY",
  "key29": "pAsfLWQ55MdUAbaFY5arG1HPwapaRTYDTSsBXGjLvsadPg3rwRSzjCysaRBDjHdaeGrqKeaiLpN4XkF7dyawQGV",
  "key30": "v494Ko6619nVmDSEqTb3i958ALpUu4WpjwKJiem3MGQ8VYvExVP9mGMvwVViE5i8FLuL3jhE8rfY4NEnHewbGCR",
  "key31": "3hpEFEBumwXEF1omBPSvgc53PWqN3ZGkNdYWUVdgUvzv8xEGg13DLNWZHQNfUHhbBKFZKHCAYbKdwsCmXdyXGRUk",
  "key32": "4KZZDh7y6nqGVbfKnixF8tv2eEBE1bnHVXMUQZtr2QtCDBvPwVNyAE8s6WcVDwfAMkBR5tHb35YWSWR1Y7Kadibg",
  "key33": "57kbSsQmKqh6EKvS9maAvPiZJ7nCCZx2nG3AVPiaLhr7DDUNYaVt3oyjJ2Q923tkG8FmEbf5hkyihaBPrYYfJi7e",
  "key34": "hnMYW1Uy5jyTX1hrGJScRVdPJiGjtUHvAeBUvWHU9BnZgnuLFMej9cxDrmXxg5GHPCacvZ2rAcPLW7yMM3MjiLf",
  "key35": "5HjLTpDeLS2AzGPvtNDNzouBw7dif4J8d9n1kLsAbSEsnrYN8Kax31LahU47dhMc3jJjhFZvZfoKRt1wwUFJDQQC",
  "key36": "5wwhxw3QLponw3QFmqe3Fd6Ugxz3NUubrYyU8Mjoqm2W4o8WcCm8xneaufbo1yeF3T5ArVP7BEBgo4hnr6sAnLhM",
  "key37": "GFVvWZbH85ugNSr1xMXRZnYKgSrScbzdhQReftTDSA7B98hUrRhzpGWKe5FLBUaS4pCi5zqGJ2FPDL6jGRBuuiM",
  "key38": "3xCwQeQKpWseAc4kWXmePeZG5qMmU3MwEp5wMMnnVJFVbeWM9Ri7g5kHKRtFKq95C82o8uxoRzsDHEVTw4wZbRvu",
  "key39": "3xtAfgcXHwsLGjwg6enPZ9PFwSgA1FukVLwW6BXYJ7wvPjZok4Wka5Bb1hYv7UPFQSgiT7e7i6wMfhAHVdMQNJet"
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
