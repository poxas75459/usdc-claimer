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
    "35cZ2A37A6GSPJWQSegQ99XnKrAh9cmazBXz75ZnfZbGHDtqr7oz2ugbgJjQiUFsRMwiUpQmPtbN59sxzwGcD4vW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RXdEqUp2Rym6hj7trdAAUdGjpENzS2y1iim7AszfzwTSzq7qrNNEz3zdHBoFJfAnDxWBBtJTXNATMppwLxUetK7",
  "key1": "oT8r63KXxxB1tX9P8DgeNE5whzM5E95kzrr62u7dtkd6PPLNtfFEjwAgR83JE9gPUw2X4ncM8vCHtnLbSTBwvP5",
  "key2": "tBNibxnfXjXYomtwBZEjfmr8P7b7JSHda44Hhofi9DNFoefZgnaKbqkSMjaBKU7EMCdesfFzYnP6i4D7uwSaoST",
  "key3": "4MCWdRnQa8KKJxzbn7YzjGtMkMNeTCgouSFKuuot617cNtT8uFgyocqaHtj5LVS5xK4icwgVrErUQcgYrs469Q4V",
  "key4": "kSRo4YGrkLSMEEjnmbJMoxUyyfEY4YzyYck3aMVBW7ZiWcPY4qVpskMk3sffKhbRrhk8boPUJCP3xh8PWCkPycs",
  "key5": "4VLWUneHjGcQgGXGHU4zpMYkomD6Lv2zVamUX2AJPScwKXetjGeHt9kARHKgySaEUPM5BazJjxhXjnt27nbcmFcS",
  "key6": "5bM8mEsq2aZUAHzVbX1cASBDxLXyi6n9QkpbHcypQ15VRsK9Sfwh2HeW9Hu9ZVzi9URw6rSdLEjuRitwGDjsDr5R",
  "key7": "5PkDWW6P9uUDbAv8wpBMRqk1Hww5ig8tsHttxT7jofcZ2Po3i851qL6gifPDhdHUkh2shDZRXJsLVwP35GQchXag",
  "key8": "cQn2XyYChNsNao24NzamJH2i8pN6dcTvukUVjfyWyk1pCg7Q7gdkk5aBmQ73p2fCnGDrNMevbbwCabQKSgwWsCW",
  "key9": "4P1wCKP8gBh56qrndwf61A7NCEFPnn7GFvsZoP1MLPY7n1CbyPdm1xPhmFCYP2fRDxxYchJGfiYLZ9dnJGrFVfwd",
  "key10": "4g44KrftYBnP5jTEsE5cYrc1m6AyZKMmgMaZitr32aNGmW6WiJWPK1AJJj5sM7RxbrWgxp8PQu4KWLod3hjnWY5E",
  "key11": "3LTw188mWa31u3mWzYwaqK1u13ggKWVoyD6H7c1rzaasmxbYSLx1uEXr2wCNZASPxLvacqzBQUV1xgQq2tYRzFig",
  "key12": "5uMngpWNN66P2q2dtShYAbv6KqexjsfKeWA1CZuXX8mdQRDHuYWpmVJumnnGmvAUv83PWqSBr88yZ8JtHbMbvHXS",
  "key13": "2Fof2ELrFQPpaAG36866g4AvDNoQAfJCNM9Hnk3YEpqgvN6EXohL4TXHGqmC2pkE5ASVVT6o9BaQt7UAdTC3Xsak",
  "key14": "4hc8uLUbyrfEBDXuH6FBgNmKLVbpBUWRuhtbeTx9cN6bq1x78UdFZEQSo9HPJD893XuWix3TERi2SQiARAQ1YSoG",
  "key15": "3Mc3A6LjeK1i3ECcEe9Pxy8orHZY9v7VGpEofpzBPivEVrZmsUjv4AMPUbtCL41saP3aWFmh36QA7w74BzXtJYcV",
  "key16": "2A6wrprE9taZu2EuxPCHGEzuKsL8UnpbBCGpmVP4LLHzouoao5R26oiYT5oyYQtE2rWpgos8BTovsBja1n5eLCCS",
  "key17": "5jvbCGLgG4ubZ3B8YdExLGEpmreGP3KXxeiap4EGYmupsEc2DN6P4Q8WAscMti5rCcXFrSSJEVHTMospGmdFjECR",
  "key18": "4bjSiayG7bxxhWimn2kcQoA2BwTPd5pzysD1U5DRMZu7JE53AvYXR4ca9iTc5f2SzFWLt2Uo6uKejtBNanMUFLaT",
  "key19": "62aQPJtdQcHcK6v9jkD7j5uakMQyagsuuV2FnU3ZR4FkkUj34TzYaseSQCcmD8TDFsGescgeJ6FjqUwCdQ7MHx6V",
  "key20": "5KiXTitMX2Z5GQBLfouWwwyuGL9n94pHJFNh8enttqvLRnn9dgXBQstfvpgMSDw7767Bncwd2JaN2geGXcyGxo6W",
  "key21": "5PQVPpUdzdAdxhE1ZGMihVoDGEMjNHcABT5vnN8iQmF8MurGCthoAdp8g7wfrmZyH6QW9nGZQssDUsVFBy84Dfm1",
  "key22": "4RBQ95bg7XYhaWsNjYPC1FRy1wJHhR2GYztwVy64EqEP4DjX2PMEb5pmz6ZEKBTXF6HauwFGnpPCYUrvoEZKfAPi",
  "key23": "uFnx5TAs7aKY6Evf4EMZAugUuhE3vdK9UoCNPpid2FWYtoHBQogkvAuyudbZzt3uG9yLyTyZHs7kE6wAkiivMsq",
  "key24": "28MuoLcditHDsXnXgveTZ9bvbsjryYp8LnQFgiVVb4QgtfNtGMFRZHEy1vqNoWqEd4UiENNEhYXU9D1uWhBhbrTw",
  "key25": "2rcra1w6kFZ1S6U8ovY4dpC41PZvvSNJuNEtY1aSWzSR1YttjUNwBu44GJj46peunjVYdRQBh8UUzpx2t1uTUdcJ",
  "key26": "erHczFS7yJpefrGgYVGyiPNbhvMKq4EmPsgWoow7tGTonngCx89rJ1MvbarQ2C2kMwN3VhCQHjrEb6Nu9mWm2Jg",
  "key27": "3pz4TqzH8WnE6iFNHY26zrmuoauJPGQuXNU4f2Rm8E5wU6hocA8CLMfB4GbuEkR6LauiLgGTPCmaKFAc21upJf1b",
  "key28": "4iY83dqEgUJA9JWsJU3ek7uJ5z9CNbZoroi6REqiRgiQ1cCZLG253dMUHposBGDt7WyGmcHAyhiH229W6cEnHa8h",
  "key29": "La7tszmcEhKa4UpfTG9kh5DcGaaVCSQsuxP16wp3nL85ehUMs7DiAsuoCGmmiML9HrPBN1VhXFNoCp2Qr7nyFWz",
  "key30": "cNbWFXu5J5Hgf8esUtcFde878k3Eo5rk76JHFyj6F2Kn5t5DRmPMC8fx71nDwHA9LuA2CmR5x3KPGLAtsK1Nntj",
  "key31": "4aFp4XpMWCEGXAvRXrQHAGhgyG4CnAf1PS2tZKhSnb5ZPLY5vvMhqzMC5mEadKV5ihkHSy8CWPpHxPo5SUmFNzPa",
  "key32": "2arc1CMZg2SdEp67NQvtKjxqYUVHUPBkrA8dbRQnxhHhUv4veAa9Y4n7fvyZKHhfjdV5TAWe9msQby3cguiYsoKJ",
  "key33": "5AjgW3nZks8b2BnFFiUniS4qckAEr3CKUPxMunmHyc2xwWRCXyBKbUZfkL4TWvKNumQHbjgRY4YRZwzat2pdu1NQ",
  "key34": "4RZBYB65CPUhPyiRMXcZHmNkQ7ayHAaqehRHYBKoujAi1M4PJSQgW8h3y15LchLBhspuQm5YMRtmWVNqbBAZ6L3t",
  "key35": "5iH2Cc2YWUnVn6bA1x9H3yKVeyNUoZzAsSV3pXz3Ci8VX92GtTqDqoesJ6E5zoZjU5ah6xdR4sevJdJ26xRJdVYy",
  "key36": "3LU8SzVJ7HzqDdU7U5MLBHRMjjYBMVCVh1VagSsumv7wfwro7y53YebQyWj6nGoG6sQXjthVhe3bY6RWXd1YjoDr",
  "key37": "3NpdqxDR4Ppm3q69HgGJA7kj5WLQiH2k8EJcAuMRhiBCVgz67jhXcJiE5AqubxgoT6MDo5AtTQXPxpx28Y5pw1ZY"
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
