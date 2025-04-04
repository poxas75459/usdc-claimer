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
    "3cCHfVKh8uMjU2Kn7BXdReVdtVNeezp1bytbhS7teGmTbUxSq7M18xsNLVtQFrVLt1oRH6sPwCqCZLkP1YSq5JMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQk2bYoU8zKmwTKUkewNx9JUJRKH7T8fY8JTqQBDpbbJKuKp6vwrnCWBwYjGDF21Z24bdLuTWBzg4hJsmZ88dcK",
  "key1": "5yWEzNaddhb7oFM3cT6jf4DMKt6Hu3b2L2SnoJFzoeJXPZCQWiMSt4NZk2A11YdDwYneZVSMY1Ey6wfM23Lqu3oV",
  "key2": "4HFd2JCJo7rGzywhmQb8tc1sgru9hGkEgdMX4DoZpvMVsdF2dCXUihYEsvbHDzAV2YFRneZ3hh5NT5DQhYYteq3f",
  "key3": "2ARJ6W2T8rkt3XGMFKYF8Ns9zJj2wd7Y7LCuhFPtHEfv1xvVj2k9xJoGtJ9CRFa5uHrK9bTHQCKTq3Q4c9sVyEKg",
  "key4": "5zhrSBF8TeSaCQoEvsUzfnPZSCN62qxat8LSnq6UM3yQuyPnPtTdfojm3L2FZn6uTCqi5DZ2tqFne52tW8A9hiPC",
  "key5": "2G6CwSp6a53jrEgNf7qRunG5jXoSNBdmhvCDCznwaSS8Kx4WE86YrmLobmPSCCS2tu9BrLC6uooQzQvSpqtmTXdP",
  "key6": "3B9GZDHhcMdSz4csUFdN8UBcnRkDAThGvVBxx5dP43B1QVZEZEhfH7fKB2mDuCLhArzqhUnS5WHL3qjp2idtEeBC",
  "key7": "54bFqZgsYFVfokA13aM3gEJ6mEZdGRPLWTLRKRWr1fPi5FoYct7DDqj5HDGvaR5bEvq3U2FPxadiijX4YjKqR8hw",
  "key8": "5TUD2TFfUs4scGXev6BQ7qTGEmUcUWGpzrpscKsFZSFxuw2HTuacfPNZaRvPU8KVy5VKtbLUnsDN7tXvQLrWVu6A",
  "key9": "8pDrMhB2sRDqgH7V22i1RQCezvKsXt3TDmH3v7girP8KvDia6iDxBySNiQoupec2sBx8Jk9cMqxWDXXmnXnhCvX",
  "key10": "4KXpNbuZ67KoSQqyPDkpiU795UFZSsxcr7rRgktNZcfkv9EXGiva9BKq5XPEHVytGzSsurfbdCusMxd3SEcqekuh",
  "key11": "4imCGmmpLXrfCb8bm2e1NDYdsUpAjGccnHVvFmQfBjBDSJQQhQEBXATM6qrQsRYhhGxSkKAd71Yh9HmzoG8LKbCE",
  "key12": "ZPtTBKmcbDHRqqvUrKACAXHgJf8DR7GDixJYj95oDnJwQ7kmyxkfzsms47woUETNq3RL1r2uYzNCWztoubn7Y2E",
  "key13": "3QtbdyvwRQ3P5nEz4TvX1peDwzyDCZLSVJWaQnXNcqiF6VccT5HAHNiZgJVNGVZmfX3JdhkBwYfWtEUNcnuRaCyB",
  "key14": "4USNiw2ZSzZg6nWnduETXkKDa3ZsuwDmmZTZuc5rQLCmwnxy4W92mwauWkph1o275R7dYj3J68DocTMUvNyBGs8Q",
  "key15": "BNvoHQGFkbigBWo6mbwTgaX8CguaSENC1KmYcW3ryWp4KQK2kuns21NGzSSsTAfh3K2weA1GrtgzzmrpjstCuVH",
  "key16": "2Nj9Qk1jo9sHMGXiXqwyeKD3xqsgbF7XLaEsE1otQKB8dpvZZDhdoPEvicZbQHipKbE3wd3jvCM3gWmS9FFk1QTG",
  "key17": "5e93sD2MFn6ekULjSa63KPzwW29KKBvXfESAdfaPnu8ZmZkdRMqHdC98J92AcbXEEdxjMQCdTWySz64SK4VKs4fY",
  "key18": "57KDmotPfhLR5fQNc24uFQfCVFt1kYWeJhQn1hhPqYaNUFcwPN6RvJZH4aZiE6T6Py3SWGFvPRgk2omm9Dv2E3g6",
  "key19": "4ra488VfRtxoFuz7yLQhoG2uvecGqeveSePPp4YM4KhPCh6rGDUfJqVtm2pAXDiq3nU1pa8doYhNvHGFUtj91JLn",
  "key20": "3CVUu6PKaishUp3qSQTGJ5cpbpHexqz4dM9WeCAFRUsC8tAGBHcQuQcqZ2VdYSmfgJuaVXKkLfPTNZMPV9bcguzb",
  "key21": "2PqB39ywgDashj9UeYd6CC8MBuPJdfv3ZZRJeHxh1UVm6ckJncVuYkzvs9UBBJRCiF6NA7nLCkfrYRUCFgJdyzm3",
  "key22": "2kqYdS3ZRaYKYe4TZYtdjmxt3cZP5jKrHaQmQLquRbwdDGXDivUxdLzthAVUPTS5r4nG8VDNh3N96Lc6qPiRTAjB",
  "key23": "28ahoLfkyon8AbTRAdk6NyvrxzoBJ7LNwc4ycy8o7WwXdnjpe9CRYoRK92ppxB2KtDZifXKaK9pF8L62DWNf6kHM",
  "key24": "338VGddjTV85WkteeAMQKAxK9AvoDv5XsUQbdAPESNNFh6UvTybMBbmezGdHFsjUra99ABN9J8RhyBJDB1eR8wVn",
  "key25": "5BNbDA78FvsB5y2UoMwwXjWomkRjKNiNtnSVAQ55YFXnEEef3Y8D263PxZ1tvGCDDjYhNx8uUdFqgWZwJygC9dJf",
  "key26": "62f4xvTb3aeUPZMiSVu11TSJZgV9XdMjo6kMvkfNXWQfJYxamVznE8YwnqUsswpVgSpd1UtZ6Pvbt9AMKWxJv9Dq",
  "key27": "2gRziZB85KDvwQc5fhsw5X6hz2qgM3E1TwFsnP44XWu8PbLLRJ8BMb4avCfuDmHaXZ9sgdoXFfj9Y17S8qLrjBMS",
  "key28": "5mejphbQe4mJd837J3qsnvqgDRswRw2EV6HrdHAaiEev5tRq56cVzMdjka1E7uTRPm9wsdWbedGDGydSmKb5bAm5",
  "key29": "ZQ2vo3UjhtQkySvsXWrUukb9pYhynNaw9zGdsfMr4S2DduMTgjqfjvF3vi8rDJN8hDH2FdV7xpCLdVF4xMJBwwr",
  "key30": "3jBsDW48S83MpmUvKEuhFMExoAVL4FU5JFdVxvNVehjUM42CxVJ7WAyukPCL1wsQ9dhseqnTAVC6W7NWvpeqGdNk",
  "key31": "4H3Vi5ve9J3WtPQfFbCfrZTwfxZW1BcMvFBMm61J1DjreCpw4dpDF6rSRr229gtzjZ99xsN8wxrdzU1wGBHx2oBs",
  "key32": "2feGuv1jQJTwyNaXka3nUWBiwhyGCBzNArQa4xGCGGbasUJg91HkBdD9qUHM6YvtTqFfv7q7veWhhg1TD6P3EDy2",
  "key33": "5YphBs8GUjF4egARuQygukQG8zMXfVXuXHiMkHdzBEumSuAFb7ob7MjN9GcdvuhHzumjb15gMwpdDB35M1DfmLxR",
  "key34": "24MfQ7W465CcJXx7fSXKv1bYUer6mHRV5rAzu2QyLewek2YHFKpvQJp8N5Dsf1LaUhf1DqLCxfhkA1xShr4Y1p9d",
  "key35": "4krGh3goPG2FdWhTqJHUrbmKAk8TDT8mtJNFz2oe7MJrZpXtuakiAmigmDx5YktdszKux8gfXyZqNyqtHio5DDnU",
  "key36": "3kmwwJnwEK39nWbcyVdaukiQLjsy3LpM4C2BR17basepjCoiaFZCVamEBx5FGqwyYGgsHdZPFyq8S4pRqUC5gPny"
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
