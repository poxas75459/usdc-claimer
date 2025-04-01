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
    "2PdPEkFFsgWAckcvPhJSndKCG3uRkKKGWCJ61XiFHFzgXZtYk4TYY33iLrz8yhgcf3SMStdsK6G7fxqJvKMM8b8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nVaQ2bKzkrt3ifReMg5LUoNVhMLM2Wa2t7bRwpuLe4yFfD9Ue4rcoL92TBZTBj2RtZimbXr2NnzYwgkisALapQr",
  "key1": "5iqbw3hVRKiKovuMztVGEd9UieNrgL4TvYeEphTg2AXMJh2wMCyq6WnbkzjLD7k2YSCCACQHF8M7hpGEf4r61bkx",
  "key2": "xf2hSv6UtnwxSvD6x3yJREZKY6ZdZAJN8iS6ihk1yyZHUYPuAjNTr3mw7UQ4DbR7HWeJVMoosBSiDdRitgJvdnt",
  "key3": "5MXEzHS4Y6LEQ68FgC87dcyf8FHQzG3jfPwLehTGxHSjv73ZttTrkJNpLXzX5zA1ZkAQcCHi8amBVaPWPTXHwisN",
  "key4": "2GsUKadjHskfY5XgApn5uKEJDnhhGkGXXUxDCgdFjzcN9fErYZ2ezvhwNceU5Hs9e5ujKX33FkQvM7bNuWmNet43",
  "key5": "4mh6ejUgaK4hwg8Pm3LUbia5iqn1KyQvxSVCUARJv8SXFcuhN4dHk7GvqZiWRbAecFseguKd1ZqXhApaMvDeUWoF",
  "key6": "2YZj2Fsep7ybJEfMHsv3DC4FFPuc6FmbEX4RwePokYRKigJxmzqaiYNqwGjoPGwZAcBrTj5rPYgK4f3HxWBXcDDy",
  "key7": "5w4JvJHYz43Y22mtJEkfM9NTTAktiBURvympi5Ft8e8jnDNYUiXh3Cumkvdjn5ib5LnrkSE4jS6WVkDYfVNoEjvQ",
  "key8": "3aaeMsxy644KYadQEVqnGKgiYgK6qDdzEp3wCL2i6fsVLHjWzDztfk96aX8TocwG4wDPsuDfY8QskdidAQKuPYWu",
  "key9": "2t1MQ6zHre3S5st4qSuG7XaSxnfUy2Beo42WxFVp8Z7LsKqu6SQksS6DPDJDQYFcGiZHMBBkzJsCrrXfCUXcQEVY",
  "key10": "4LU36U5HhCvfj8UWdssFbQvtaPBRrRr12ySb1FAu5bFBYvsCjUsHJuYdPzJJ3xjGK4rAresmETvmkSBuVytojaB5",
  "key11": "66fK56hgMLY9mmDULtGZGy7J2NsSphRNJkFFirdJyTQrshLmaShTyC8RMuEHU4vrgiyG5TzwzNkokKCQRvZUGciN",
  "key12": "UWxFjnZFat54d6nzFCkWudmzhcsAx9T5yTzHEnZwUYricr4EFeYi2CtNm87mTNGVWsNXzJJTiMrJgfpaqSPb2oS",
  "key13": "5kCRovoLJrtDDonaRntkczZxDnQLa2iMiBybsUAscc6iZT6SXvQWmNbfK5AGCLBkwfXCFvxbzuguAvuiCgmdWbLt",
  "key14": "43S62vJ77bWfJiqNWRKxp6uM6sWoWt7dxZJxrEan9iqb82NrHLECeqYGDExCQvdG2xfVmUwoeg8sLLrXghgNM3Sp",
  "key15": "fUtGiRJYNxuBYDK85jfr8pstu8rp9TTTMujbMwmdnD23SiKXByD8E3jFJRGds2PY4zkn2enYbdnc4GZ4YjGucYj",
  "key16": "5TCpm39opxpGSCV6axTom4WvZ6YY3CCKnV4y4Zdw57xfkDQnYvh1RdsGPZW2cPUQTaRZqgvr3dGB3qSrPJYgGr75",
  "key17": "2vTqjAYryJwpsqhZxoDFnwMi4fBYtQZ8CY7odoLcfPP7crHvbZtk55jesqxGximJhWRq4Bnckt6dZDxDXKQr6y2W",
  "key18": "go6zyANZJxM1zDGsWUKy5Hzb7eCYiqpbqg1HPNrB187dKnkCRCAMyr9zE4YX3L6gPfhi6ZvqLvLeWLnZoSMXRYU",
  "key19": "2HMfz9uqJxcUxC4YUdmndpfZrFd1N4T57g2ahhZWkRfJL5NZveSjk1hYKUkXLpG44oMsNfxMsSmQSzTJXGR233Fp",
  "key20": "L1tD8Yp3sfRoQnRBaXrnnf6v1coXda8xTPcbLNURZfVot6gkz8RT4R71VWwpfdu7CE2omDXCwovyaXwDi6cKzsZ",
  "key21": "3RQmeY8u2Zi8aFz6hbpHFY52Z5iMnzUScwCucCemneWDHiYJVuT2DRJ5S2YzNJjT9YaKxJdUrK6V157iRUDRAx5J",
  "key22": "5tLNNGP66ctBc2hcRNeVFanADLEJJa9d7rhKnh97BFVzhekAQsjZbEV5SfKdt5LiEHSFp26NtzBYb2NMt3fZWYCg",
  "key23": "3jEx84ouR3MrHmP6nhguXLDSKNdwEZiSpCKs2riAbZYid8vUDmy9BXnN4zNwsPNiwjbTaM2qwJaF9iMQ9a3QQ4ur",
  "key24": "48AfXXwgKb2jmdnPkf1cuGDBFzGRQYHn215wLwwycHpoFAbhonb8ssNGwzZ8nDkcEwqQR7pwX5jLYePFyYmJNMjx",
  "key25": "4wPR4Zpt3iTxqycXZmvgvibeWZWeZXUWzdL7GQ9qsK1iMUXT8Hdvo5Cr8YS9BupBbRTND1VJ9AEoLyohdCgmLKNE",
  "key26": "3YAwAVoJwbm5L2yHc4Pa7Adz95ykN9CHGDiv5LWVbX5x2dP84rJhNDCa2ayREUCV1XHbssJw7KDgq7b4Tvhshoz3",
  "key27": "2CfYN88JftQdqcTrdX1ws9PHjAN8gaQuMnGFHVgNWLEw5CXtgcqHkA6GCag92ZwSDFm3tRHuxkgAGHqsr2A3mAuu",
  "key28": "4QksGHMvEkqSa9boq5SM1H517JDGJsrZFYaEQ4USe9RXfjxMHsZdQDHrFhB964makRgSVjWRvgjjG9BNFURGPLVX",
  "key29": "5gLfJtmzxALqsFtjxtW5TX5bYbhnyyJZx5ikEqPqRgzEP6JVZPrjpHMKDUDmqw91AS9uDQNRWeXgM7wkuUdtEfGu",
  "key30": "K9NwZGfh4M81rCBT7hnDUN6jGKPBWvjm57z9CnhyNnPQc8UhmxhL9csMEqXZ1ERVzJ8FQZJAEdA7GxkXp4bRPsQ",
  "key31": "4J4GbKdoqzr7xJNrF4FM2hpEUZwFduCbfVvvzN9Csdy41JZuBZvWmoiqNLe5uHK8e8YoQQmf3joYh1T9ysGuhLhD",
  "key32": "4vzKUL7LeQhW5hKurWgsNDGjY3vMo57sgrAcGn4SeuxBUfEZWa3hawKSJfqre6Cc2mrjQXSoeKnC146XCSQDUJyL",
  "key33": "3REn6Hyh8cQKBvP9mpjVJxkTERtQmZC1uQSwfbU2AeYAyooHwxLPYtYYoqVqNdGbT9JJYscrLXs9cQda5zreV8Wv",
  "key34": "3m3N6EJyjDWU9ippiX1f5c6vPkqLqtqvusSQzv7Gj6nBGusDT4Atp2tNim4wvGDFmouBriEk8NueR8c3hTkWU5fP",
  "key35": "NXwkgttwXhSgcaVqYrnxrQLvkttHriVt2XSJEhzJB8FyXu27p5d4ZfdErXvbuH8X2wuCkBWXfcdkWYpVU4Gbts7"
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
