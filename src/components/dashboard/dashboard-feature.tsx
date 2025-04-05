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
    "3fqp1tZDrgWuGvTdUjxqYVSVKz2o7UdxkqcZgT8iNqLNMzzDm5MVP5yFr4NAUUykpiw4F3dnMTXUSZzpjsJM78wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Urf7jxXdxzdN3tfR3VCQCTfshxmY3SGX8rpjNpofMk8UUtF2b98KPmwbxW2Yo8vf8ADUta5T4Mwmvx2NnuksfWH",
  "key1": "f9eHiMfQoLMgWVfGXgP7ZL1nP4D2wC3iLQgGcS4D2YwoA9jJ58NNBZN3zKvo9XkVyRhWuZajSvwEFM8YHJkt8Nc",
  "key2": "2aCEg97CLjsPmhh7cUdq4yqWAP37SwPjrXQfkdVbzPixjxQxw3N85GXWuv9kL2thpxohmRKVsmza6E6tQbyedDKm",
  "key3": "3zbMMhDFym2ocfEnufw1SXM7EeDGs3rtfhRCAUt5j3TymDetSHHG5vqkM7y8ZXSEF59aD3YBz2SyHTqkgVnXyD6C",
  "key4": "45eVJdw6MAym63tw8cg446dvRDK3VeUtGUGieTL7Nm9Xi9bjyxMBkGpobjF4eoU5CZS1sV8SrBz7QrbW8rWdZwTZ",
  "key5": "64Rc5Bpbu6GdpmBH4QpJYnwoCqs9xGBN65ttfSnLEvpYmYiBEtqqaBErucYswGbkfv9jT6KuVxwJm9ydfSSAhEzo",
  "key6": "2XJSP6DtququincVNN59eLrnQtp7K98p179yahTXXvo32XBxTUqSi6hQTZrYRNMmE5ot7KCGPx1wb4Fc2ep3vBtA",
  "key7": "3gDwxAhrEWU8X5sEf1Y3yBFvZFQkMz7J57wwzxSxXjZt8uoDvaxkFGMwzg8dtybcdF64vr7cbEmzrLN1wPWfhKzd",
  "key8": "5Z9t4kq6TXscxXPFTY9yFue4VytqtSMMUJdJssi2gJa6hpQS7PdLqH5gfV8pe5ZkRHkeRD89wD7sBFYA26J5Qf74",
  "key9": "3Zz1hJixPCEbnYv3YZfVrB4gydXKB6NBYvvqfNg3DRvqucfLFCLp3xerd18hViomq8VoW1vHme5wQYqzKoNv392i",
  "key10": "5smrmXNRRFtixFd9yF7UH8PYmDX1eZ6MhMnEp6bRitXzBMmd5KtTKZwgTWD2kE7FVg9v4dwLkdVymXTFKgCwsNcg",
  "key11": "35iUkmRCwqiXp3HU8GkDfCcMwcAMtibDZQLzpqdaFY44D2sN2mfeuhVwGVngf1zWHemgaJyAJ3xXpBD9UxCYHNiy",
  "key12": "5LmJbBiiPeaYc7BMiKKcLsSnwhBMVooox1wHydLsiP8PY1GUwgLr2uQ7CFWS2UznRkem9Xp8sZpFY8P2rz8fr1Qy",
  "key13": "55EkbUrUF7crEdk2a9ngVGPP8pqZfo4soeqigPrrPYFhz9RuP6TyE1QqLJLV5BPfQeEiMztjALVCYjKuvuBmCTUz",
  "key14": "5MkbCXnvM5CxMWcdVjdGe9LK9iybrSwFgd6uun6yx2D4PqQoiLNDiZqDVJDngv12so2QCRKy3BKt2B2fKxpUVdZo",
  "key15": "5rvZutrWFctw8yGPRqg1on9KKm9hZyRzKA6mugrHRpwQ5Fo87zaNCoCsXPB1JavsD9KUSgxsGC6sANf1bicrbbgc",
  "key16": "4WFSDyVoNnpkUXP9dB6kzAjZQRePcs1BggktsE3FmNWWnFfUYZ9X1VqzxowZb4eFafgJz6ey98MhngwjgQMWyHN7",
  "key17": "2WLgENPpreqFpaTfAZogBHVY2j1jSu3iJXWBB1uKbirW8ihsngYSY5MLevunCDr519kizZe5rrVVdnXzAB2PbCCC",
  "key18": "gj2uB6G6bLqX2f4N6q1vamQ7MQhtjbqkjWbfvgkSchFZrWRtQBgfTwcdDQgcE7rP3ievgoa3HiDKvcdArTc62jk",
  "key19": "2zBggpzyXGhU2yyccbjMRpix6dTZoSdd3BVN3tAPcwSB3vCfjyvyGQiFXUQm2giW99XBhF8BbdRa8ceDfeuydoHT",
  "key20": "jEgUqgebc9rv1ePUsZEpFesH6Xz7ocWxFaTkUZY75qm4V7Bo4cgdqB3fL1ftis91gYqAxYM6SfaWd18UJocZ5ik",
  "key21": "63vQSZ5Agn2FuvVs152xTGrmFnN2fij7TqABmudxAYxjr6XKV9igQG3h7Ez6k7dZ62C88iTJa3Mod5ve82KokBj2",
  "key22": "4qUY3JAzsumVBFndgNoPBx83iPpt43qZGL1yvDQosExatGAzUfE2AzRAdLoFLAsJsNsCnjvmvRYGUNytpVK58eWJ",
  "key23": "4My7v65L6kFV2kKc26Ht3dnsEzKA5jZNghZPfyeaswzWYvRncgXrDLvMHp9BJ6mSiQaQEbocpjgcw48hbaA1NZNM",
  "key24": "2uu47Y7ELoaW1UC46s6m2e3MbTxJzDp8MCPP742VeVzBhVCvWhPM7SuxvdweDt9XXgkRYqC2hfBWFKKcJ8jQWvoh",
  "key25": "54gLeyiWChpgS76KCjV8QkW9VEahPGi42AcZR7dmAuFJtpfC89M4bEKTx6SzmiFn4uaNvZvNTNsE7tiV4d8zfg3S",
  "key26": "62QJ4rDCwpY3XzgA9kmrX8KEGrtayikNsw8rv5SZbBkA8q7Bt1iPPfVFvC4dGmG2LFWgWfK1LJiRLxbGD15eZWsW",
  "key27": "3dU6x1tqoVAoMBPBzy2b9QnFGsnKaTkUBiDhQPdPub7pqtKMxbtTKQXHXe1DnZRfq11KndNcNGyq8ZyCfvdHRxVF",
  "key28": "2EYkjn5J1FZLL4D8A9njfv5p6UJyq1ayT3vGGjgogYj89J3mAV1nKdGeBwPPeJ7GivhERa9AqPRnaw1mboQT8afn",
  "key29": "5Dz4rk8nquY4NHNCuJvw91NTbAb3ysHjs7Jzgto6iyPCrPeC1bDWcjU6x6yrhpLYMkPxvLxKL9EBQTksJWJe9Hai",
  "key30": "4CZumg6vNXwqEpCKV74iK3EFE7sFiVRxrd7EnSdHFQQErxdEDG1rEo1kMr2qCoqKmTMYguQKD1HgCzwQjAPv9CVd",
  "key31": "Z1DXwkGM8hAMrjUNrhkiuFZyRCvVscXEy85MkfBhtSttvh6j2X36N5pnndWNttG21yvqfo5ZUynmpYKvjoF9UTP",
  "key32": "2VVqn68uBg38pUmSiHWnG1RENXSXfqE9X2ZqLghXhT1EhTLQUBb4Md3hXBWx6HM21xr15vqQ49sPCDx4NhhQ8SyF",
  "key33": "2SyXZ7njuAkj5GcAkcM4r13uMYi9REGWyqXwKoWmjR5yDZDUwB2JEZmYPZZNKBt6gvkAtjVXuheSVkrmk51zkxKX",
  "key34": "PGYnDMSaf9FEHARjhvh6RAnaoUMNdKq59n4otGUJX3WZyocrF6EkDCDkpNfY8hy7CnCaBsJWk9weJgAxDu8weho",
  "key35": "31MnuTodnDuht2Z5PieKDtgV9Uvbhdfp2ecSRMV6b9TZtNMEcEeMhhsWEgY59hRAnB4rgyoFpMoY5hNV6cUSWHTr",
  "key36": "2JGg4dS2hTbX6rTdxwEB6NRZL63NXrs9VpfCHMe3qJkPo4gDEk44ZyhrRgmaTo4YdickgBjUoExsCr84o4zwPZbg",
  "key37": "2e4eapxyUAqP5ZrXQdKSyCzFMaR21zUPawcdwRLssf7XJ5pQvEVvRPV8wBi3LkQEu1HuWYJmbsvG91F8yQQo88GJ",
  "key38": "5QiNfyijTn2GRQhhWV9yDKSVYDv3r13r9MffgoXDjYGyQaYzbSKgK6EaiXpn7dR39NA6B9gNZotJVgxh9hGwvhus",
  "key39": "Pc6oX152QzWJeSxTRtJWtfQQjJE69PSmh9ngZVvoFq1V9gcU1aHQ92HByinUEjTBT8ccqfmSsYWxCtaWzgJC5aw",
  "key40": "2e5qZbJf8NBtUPJ7LE8pyUM84VF7TGZht6yGdfeAEu9asNo3ZADTUKSj3Lp8ooZMp8ti8dRwd8awpkxiHGCWCXNW",
  "key41": "4PAfwTiMfcYuGoXgrjs4YA3Tz9rovDeJcJwJJ4CffoKUmRGk7brAQVLAesuLmhv8qaaFKwUdMoSkKbLwzdDuPKtn",
  "key42": "3Dqys2HbT91ocUTxqHgXbRAbM3FKUncRvYSUxAvfQCQZtJHH8FnFNsYCaZzzDchmPN8oCqCeh6jkLvZcu8iLa2Sh",
  "key43": "4Shf8k2xaZd2MUS1ARsy8KSrqbUNod9qi1aQiTLtSh9mkTrjy8w8daE2AeYpazc5nX2mMBz8Te5bhH4nS8fezHwC",
  "key44": "21UW9XVFUaZ6tyAqLAd1Z5oDE1RN53QwH2nXMQxmJwkiLPzdXdKyA9Qmw1gbxxCSsdNL9t6k7EdbyCuvAtzCvACd",
  "key45": "5B1NcjdS5dUaNojoEPE1VRqUXrLvTqha4cfzzGWZAneUBzrgBpWoEEdArjw4Mdia7GWyHKVf8XbqXa9tkinHX7em",
  "key46": "3RSNvprAyr7v3w6yC6MqayTP38tP7FXNsh5yqkDuHBUj89CSfef1XbDep6QrbQ6AVKmFfLYMMjWTRaWp5wjBx56v"
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
