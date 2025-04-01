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
    "53KK1sYiK5AdjAH8Mb2muvmrs53GouNiehHsQxMoncAEpZToUVrXGA6Yt1i5d1Pui36SBZiy7WZAk2r7MRNLSQAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QYNgisAqA4xTXCajaLciVDzXnAyjRYyLLwc4BkMMgkhHNZnAJeFR3Q5fW9vp71D3Ufh1wQyKv56kMe3PaexNX9n",
  "key1": "4n6SERLF54mVYTqKTZ7ZeRFFyUZwje7UapWMbsjrd6bFW3V9ZwhfaQAPp5mxsba7zejoQ7XEdF9ov4ToKeVxSEkW",
  "key2": "3AoHM9pYrzpPDoB3kDe6zHMaxeMU47i1pP6oHYcrLnfZuBpEh17aMa3ESV8HFyvNiyAM2YkZY3SzGbU7BgbcjgLS",
  "key3": "24aDPzJBux6scJ5cZeSWfyvzMdXNKiu72Ee4WEJskDio7gWWE5U74AnYCa6FgsYmdBEYXSv7ahFqmRq95AjUbBzv",
  "key4": "2DQnPS2d3VcjMu4RUXr3kbtFAVAkRrBe2rUW6eqR5J2M2aeGhvs2Qb5nkJV7iXZUNYPBfU7cdMSjKzp5vZfAMrqN",
  "key5": "4AMMxvperC2M8GoNjt4T3QNrU51hXLczWcxyEFgCYiUmboLfxLvpZHkpYCTtWnpGKVnekD2dFb74arHck3byZBFE",
  "key6": "uG8X8AUaimZNfXoA1uauaEpMVYdSrMDM747ZV823jzzzy3EPokyHkZFVmTgnPrNEmpSm12X1C6PEpSw2iw2wjHV",
  "key7": "5XCUEfCv3zGwbpuajJaZ5UJeNr7h5SxHXAxxV13kEwQwGLCUXjnYs4iKAAKddrayY7WSWrcpPgXLvfykpszPSLsj",
  "key8": "6iM6xcX4JhbxqjpLjNU7R5iHBA2ii7DYJEGyQeunzVXSaxLPLffEf55GKovnea9uKeevczGhJGk8fnUzJ7xXicv",
  "key9": "3PWxxmcaEAtC2h7WGCAYf4a24dNS1fqpVvZU94b6FWLtJATbzjkZncSbMFSjinNpggoAqZitu3p5HoCs2qrgxdzk",
  "key10": "rRQBFLgfYEXfcySY1igNiVLYRtGYr2kpmtnX9V2xSZfE8YwrxUvubFpa3iaY3N7JuXukpFgU1EtCgMjCxhfTbPX",
  "key11": "56dfWPnRFiN8nDPtfNX3XMiNkM5erfxQ5fFADhKR7xyekT9K96giViPsRzNi9TeXhrSNX8xgtD2JaLzr3ti7HbEv",
  "key12": "5LZqNooPLDXYuQaAGANpj4H3tD2sMHhj77j1jdZyegsj1xHfPhKU64KCqYfqf5Aqz3pgD4uZFUZ1uMLMYK6PkYgb",
  "key13": "2Tcm71kRXLiGxVP2FDj8QWVti4HYbTHmWbtH72LacPvTFs6rRBrjUYYYZMQwEw73uPBKoqYxnT7Sf6RLC3sJG4eB",
  "key14": "3kL9UEE2FzzjHLm4gkc35ZPWmvqgpfj1vmR3fSdHeah2bSXDfzhB2nqdLTxUnfwJZDJcCsZm6F41NDYy3fE43fbE",
  "key15": "32Eoowyrhi6B6RWN9tcaThc2y7UiTSTvTrrr4H4SKzJYngCXEQ6RMAsyKufbHZV7meVFTHRBNanLkQJAQphhq29S",
  "key16": "4tXzZgwWr1e5YxGbcFc3zcGwb1rcb3VfYRWNHs751esbQ6m1ZHfNrtgL66sKNL2u7edhmUSS74UkKTj95R73Ywc7",
  "key17": "3gs1RTDJe57HHMECyZimFUV6eDDY3adhYgE5J64ijt1kJwNFCVWSCVT8Q1mDeBAwxvLtyLwT6MMXmVXsXnxmtD2b",
  "key18": "2F439dZ531UgDdfLqwPCq6UUCgRZNgm7HSeCga7rmVtWgERLprFXhmEick9LxmHvVF29kXUFLRFGKHzLZYur18RE",
  "key19": "54NsesCkBAfGDCSRcqFAj6QPSqGrUbkDUmYeKqw95Zr8uU6R6KwT1KDGGduuEi4tRRdLqh21ckWJdMSbJqqavUZR",
  "key20": "xAonevea9Qd8u1yrXG6jFsX9f95GA4TLcfoiup4uhrCLPxWzK47y8MEQ6tW8m7hvECrFoBAfb6tRE8JzbkjxXMb",
  "key21": "4Fa6PKQ9WW7oWTWLW5AWMz1urvEpFoUWBnbtZumJJygZLqJXwHdVGvdSABP4wYxzWaxaT2K9x32wLVKGZvfqvoiu",
  "key22": "79Wm6DemYvHpzvUNSWwUJejRkYhFwsvjBe9xh2JjRgbs9hEKMjVUE71zKcDwY4Vbk9dpMxi8zrHo5AHXrPM4piZ",
  "key23": "T9ENrWxuK4GUV3oavCuCcVy7emW87ije2FmWJ28cJcXU7zWXmT4KufdQcXCsLF9JcM8c7Jc2vrt5FyK1wa7iDrM",
  "key24": "rmrSFDpVxc6XxGh8iqpGD8VETCS1ZgVm7fBztDV4xpKHiW4mko3o7jG9UEo8Jk9bEdfX7vmkhGeZKcdXk6bYPNh",
  "key25": "4Ls6HDXqmr9wLWHjuXKcB1UCJah48kLu9UV2CkuGptjj3hGRDd3xTrDKUKxivepwU65T8QkJG1w5S1XXP6xCKZeA",
  "key26": "2wqwyCPnyAxAVmdiYZ7xs7JJ9CUMQsURof3HFFt6cL3y8wgBHDhBvh7URVjfrj8zUa8eDi1tjzxeJqZda4CEMKHR",
  "key27": "3VMQetny9qTuph5Nrx1qp8r6UPdc7LnMM6a5hs5N28T8J5t2CJSVPCmGSM3W9oTttRnv2anLprn5mw8bm2wgGXn4",
  "key28": "oeURqJoTwR6rwLQYz1NdY5z4SVS2ApGnTcdfVthDdiaEjcyaZmRuQ21KpcK7r8TELjF5y8p3QrGGi4BFnSqpc6g",
  "key29": "4qfijRAtUhJowTKbBteVyvb3zgAYijm9Z4xmzKsjUy5mBbELc1mZDd8t3d8efohR3THnEgLzkAs2KtNQnFjjfNz",
  "key30": "5XvYZDfXKVPWPxbxmECCevmanXSvyphQrTPZjYjadUdVoYSiTaVmJ5Dz2L7c8w3NjZVVMbFMskhHwTcgWmnWsARj",
  "key31": "yeSdqvvVhDmkAw5xRFB9tuvVfGw6m6ELQvyXTpvqDaHwGmDaxbKnJoUJGKjaa3ZDVGQPiJ8m3bNaFHAGAkVYoCh",
  "key32": "4y4EVAetnJ74m6cNxFdk69xAbDp6KhYNW4fVtk5BANh8g5Xy8rnbuySc5f9vUft3bTMEq9Z9oxf7VvEe5d2z8fij",
  "key33": "2wvLSHZXJ3mgFzTkLv5Eo75aWXvo1pCBiutHZ4Z31PQATDcmWiiSNJtUivQivAkCcvphso6cnVAc3WTEz9nZspfE",
  "key34": "62MQtg2tqmJSdmaWFvSYMBC4uD3xQdpKpcyQvN6Jfqt7Yb2AabBsjnBBdaZpxkvj6TQnSzNSwQTngLPDEYhmQndv",
  "key35": "2ZWmb9U1hrnNNkU994ZYV1VMgmB6SNDNzjJTs1GDkGn98YbKj48DhyRzQDb5Au4fNtBJjPVKH128YgW6DQFWM5TG"
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
