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
    "4TQ5GUgZCponDBxmD7ZvjNKKoJsdN9LSdHqhNTha5VQVnC8KJiPb7JzBVKuTRhyKbXMmqcDavx2fKdb4aPEiAvqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MhcqYJpy4RjuMJ3WXPkhGQqZAYpYvp3qwM2X9zv54tGQEsAsd7dzx3i891JPsC95fFH82xbANY61AQsWyk3FMbc",
  "key1": "63AW8D4n6DVWQSdpZ2Ate7SrQBZAcdvruyYQ4otS5GeJTkht9QitYmZfqyQR526WSzAX3MUhN7F9AT7APZgndfJP",
  "key2": "1HSGKJ5CrErPf8Ays72wpdK5W7LV6YRQePdbJ2rwkEcYRwyPYbUX6z3hHk8QWuygL7mjZ8ecJ5hp9nLqzDPFGWF",
  "key3": "2N1dWxMF69rnkXM7VVBKnUQv6sM7CRYXLp4GkUDr1BtZJnhePFPo4XTrptJHB1PqcJyYRuUzTb9EioSc1pndQGJf",
  "key4": "43fMZptzt4zSU2G5Fwbqn5VKR9nGUqw3bBhRTKqTHko7KzvWLsHb3QZwiG9u4zTtPJsWSpamEBUmYELjXu1wy9uD",
  "key5": "4TmgUqqSNTrWaYB3Mi6Y51pHAapZ3SraCnevCUm9q7u5tgqEp9xhUkzkT1U92ZJdZbPLdF9YBUgG3DEd8TTgnzdi",
  "key6": "QvpqAPsRxySW1e2Bh5Q62CCVx6TqMkYZYjUPJsCS3Tb2x5AuH6i7DtApDvA4sTamsaYyvhyX7VELmQMZk5zRNr5",
  "key7": "2hqyuUmwVWMAKDQNXjhN3wRN8eQ1SSfEkGEspSav4vmS6vfSoCJ7AV9krYNJLmvkG2Y2eKXaBbytdy1BL1cRD5XV",
  "key8": "4AEN7CZMJfxqP5ozX3CQBgZAL62X741b1i4kNajMWjtvDoCDvsTCJVYQLEDEzu5Ydz4Bhn6XrVYJKi6Swa2fRbL5",
  "key9": "2b5qH2nuoD849uHGKzo7qvkQy4iRZTMdtrSQ5kccaSnh8PqCMGiU1MjdDSQxK5PtejbtuPPQ9L4h9wgBKayL8vTC",
  "key10": "4r96L5KYHqt7ZQ6Hb4V44JBSsUYeepW8DjeMiAkm57WnZu9EeiM5NspXYEet6dumLRj239hzk3yL2sXFdBExj2pk",
  "key11": "2efea9Vc5FoPdRZXRXLqjj3GgLeWTCX2aNQnPCUrcW86ajBxVkf1yG2hrM4o6FNCnhEWsDKUSWYEerE2qvXzYdGX",
  "key12": "49173jE2GTKsvBEiq6GfWhdsRwBLLsHY8S9MRJiopvv78aogPNPURoya4h3F1tdjysF1vqRFPufwhT7TfUccE1Uk",
  "key13": "5DKnjYb7LUqHMUGRXmNxN1byk1kUpA9GMBAunMxXG3qqVmmQQnhAtTGkSR7FDidWyUDQ7GYWv36vqLREZPJY8aeL",
  "key14": "3LsRjg88RQGjcnpquZNW78PofK8DKXSBWUi25BBA48rSb2Nx5RWtEkNfoEXg8dR5A74PqwgZucfeeLDjE1GobPwp",
  "key15": "22QhNM6LE2djfTbShhw5xz5R3WmAyVvVWpTAeX8Qe1mB8W7fHxpJUjYuc44KXFYPeSKSpUxtofaZofzCpHkF2aqY",
  "key16": "41nQ6sm5tsYRruU4JvLECxo466x6ocnkbhJ2jzewvQUSyPYa9uuvjgXDscVdFGbRsviYvfmzp5XT29wFXWhiBB9Y",
  "key17": "2Nyw5cKoyTobwZp1NDzrYEcQrbzyE8BgZSvb8AG1rKCjnkhHJQKrG7wuWPy15emrsCozP9qfV9KPj5uqFcM8wtQX",
  "key18": "4uqutXPGpWd3F2ngeaJMVTP6ZwJh8gac7eTdNdNP6qJGLrmvJH2ACejQcAzWfe3ye9VTab8VujnR8PGjsUABop2T",
  "key19": "4cvUedDMD25Yhnh2mwEsQNtU4PtYfpe4kmCEtajcci5zLsBepXq1dWKezBiFXF14sULg1dVBhQdxF4qkiQG6usbf",
  "key20": "5tQDZUiumRea4qAJBa3js84r4pntCcZkdtmG1eAMwcnSH9e5M5ZT55d46JhNqtcietBVwKHuE7SbBBkCzN71BkgC",
  "key21": "3J3cpb3yENXzS4K1GBtnivPnpKsGCD8R6C5rU9PmSeLXaHZ3hSXpxDbvSD9p4dG147EXDA6urimW8xQnv75TRGXk",
  "key22": "2m3CjNM6DufYY8aCFmjpcyScKARKcaUV2myZZnodjYCYrvQzNXb4zpJPJZQewR7dtELYf88QD9j7WVFaPB6wxXEP",
  "key23": "t17NxEp88k1wkW6ZaGPWBsEhZbLSsDMftzFkLKRfiLzo2JhanwEfzrWr2kStUcjGHVqzKALvGwiFBLPRtyw6qUx",
  "key24": "4qUPJgUhH7PUiFcCcqpk9J9oiaoD8FUYqYUkpPcctyhuavF3cZB6XsePKhwA8fFY7xbaJRTAoKB86kB3FXi9CYmZ",
  "key25": "2gS1v3PHQsKmKktgpPjTGAoCbPmyWC6cvTzk2sYJNPz2ybKwBzH2yYRb6zmJjJwTaGGv9gZ5h1Lafgi67gpRyanb",
  "key26": "273rAp3ENFQitGrxMP63SgYk8PvSYNSPa6oDpxB97A4c7qN66YxxLbNX4BZ2YotRTEDiTiiwSuDw2MoGJ9mUmK8k",
  "key27": "29tyUwhbAda2TV2bCKYqiATntWxJRTpxq6gzBiSjmF4HiiNVWBMJCqvySHAoSWVSTBUjEbX5TZeQFrMHsgysNvWU",
  "key28": "4p6pPfnX4JGRwXjhFQJL342cS8jF9iVkj3LHF86p4ZU3KjoLv7qkgryLke7cvibKZLdxCCUnQqWMZtNaD3Upn5PF",
  "key29": "36iQFUNdb8tFD3DM5eSpTkZ8TPhW1mMPSqcXHpfxwMi49XqWZqTLebjoS64EwmUpQ1vqQtXMyUPH7L42YRqJ7VEM",
  "key30": "5Nue76eUS9NtLnXMKYzcQL3eiKLe7RJgzsooLDc8AEZWsDwMKbHudFdGK15tVBAssHbmKvt5aEqTQS71pJ7UdBFY",
  "key31": "E3FXAHzG4YSAL3H7djzbeaxKcHASeNk27oy27GUSemrkhGkyotqZxZipCGDvH4qCbt4GKGatJY1joQxxSTHCTgk",
  "key32": "4LByFJ6x5WGZ2hMkvpB3nR4fqcKs227jBdYEeBqHQKRVnYbhnZxvH8rp1Z72wrmbaDHFMqudEThqg3xnSjVF9NqF",
  "key33": "3Szx26jyXi35UgyPaHVK9TASxSQsCQkm1zWH3iGo8zNmmyL9dykroAGuRBt3KUVNaV5nHh9ygNbXPd1n81wefoDz",
  "key34": "2h2eG9FyqiaD91QR9g5Jjf5zTPDhWQLmp6EvUdxqTYJsnqhrhW1ngA4UWxkVzesJNXKBoWBjCteb7TMqPKsCtSVh",
  "key35": "3dMaT6H51KVWw7EXSwAYGVyVqpYNQBtDr7Hx3bgM8XsvTAxWsi8xjLM5j9YUFLyT7BJMJBfYR4xd8v6k4BcwoN3L",
  "key36": "QfCamh7H77UrXjJALwJy6wGPWWdjmq1LyPvfRwmwNDrrkGoT8H36ZYncdHg4gctyUKZgaRPK1NB82BgNwgrkhaq",
  "key37": "2jw3KEhLKWEAkFE2V5XR7WdzQYsL6Y7w5AiMVUs6G5HSLDBpeLeMvFNisciTSzywR4EokEdhZWffHpszKvAfB3U7",
  "key38": "55AQWneZeWdiaSemStdrEJebUgBFg9KeXZ2kQeWrqtREpmW7ThzA52o11ha98TssYBg6BsrS2DDPtrx851mmHbiG",
  "key39": "56dsYUwbbJjfp6ghQ1stR3Bk5qbFrdojjLcCRGsb4pJ5bLcg6ZvXDdqdqt5u7bn445RPDtRwwNDyyv5bJZgadmjH"
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
