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
    "3N365SdQinF2AuTgAbozhzNmTzvrM1TQtb43LZQGYh1LgmWewtLQdYDgpx8V3kurDh3Y83NYJMiuqZ5yN5hATvH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a7AjKCF7wEx3mHg3Uq21fmKRQf8wteH825RnqEMQeX9u4Hitd74hZzu1mnySQZtorT6ci4ryRTxWYb38RRSRnSb",
  "key1": "3gQsN3s8757rWjsG6UG7qTCp1ZBSVeXJwhgdbL74KYUGE7rmCFrE5gki7zqEQyT9AWq5WGbM1PNcrihZxYSC16dL",
  "key2": "5NPsjCC3n9DMx1uBBnBB3Tvvf5xmJgnJnJwLzgPCV1CF2abfbF4uAYjhv62nprzCPA6UC1E6cffKCtYGvQ3CQ7B6",
  "key3": "5kuLVCDqvoqBktqgBpUuyAqQ4xDwATEpCpNHSo7QC7ToGcMhZAktoYPgCLqvxthbowERCixYz2iKSShtcPEpL5mH",
  "key4": "4SMiCTSieuURJk3bHRoAKUtoTxfp4ar1rBFR8aabiqTq8iXuL4VZk4Vy7MZ5uYdgaUvabracHGUXXSCiVTnnG9rt",
  "key5": "9gju3Exf67tCZbi9eADNq7xucpn3u5KMsUN5qeDzKYb9nMVSxRKPfwpnf9N3FscweAkV18DsWqcUBPJHkbHvMMM",
  "key6": "4zGXVRhmumuAFJxSr7a1HMnXPoQu12EHdLbR4FaiE3D17Vbygp8Q7XZs4CiZ6Px8eDW5EN8zAPQh61SoCBnomvBQ",
  "key7": "aKEfFhYHhu1jRUnjeried8meDnywC9MmW5oDzh24QELDTSZnWC7jfbAVUBcLPPdBXokcSPwDrcKd2EuhsgR5Laz",
  "key8": "2p24AqPkAeXRgzubLMGatURHvgnTbWosWK5SdNxvz55nPUiTGbTTap6AcExzRrHAGFNnsAFH1HGmq4qPoJSog9Sf",
  "key9": "4mngkn3hZAjJhtiSRfiNnQywJgo5oJEVe5AYKuo9y7v6WQtDy6LY1zk38gkEtpX2tEXinjjiNzBVUNTwd83agveL",
  "key10": "53eCwniGr6LjiBZxHFZSXcPMXExbFnrWRTXrb1ctWks7pfSKfmRvPPWQTSS9n7khvzyNPahGq9fhAUYE6WDXeeiP",
  "key11": "4LEW6qfS6pQdeW2x9jhmzCcNvofKaVG6bPjCA9WaTGYoN8L4XF7Zs6mUKAxLGwpsygvHmxUvEJpqptL9f3N1Tegk",
  "key12": "2PfNsVNkKk5TfYwjMdsQmxLe3mcj4hP6mBxJn1fJTu75tUrMFbsk8J1HG7yYKgDrA3WCQqHADYsTX1Hb6Bzwtpfo",
  "key13": "2ha8ocNZ4KKcC53axeYb9aQac6YV9dtk6szCgJpPWoFeek2nWpRWp3a6tuaMFH3UNtgYKRrWCAJB3K9hosst4vua",
  "key14": "4MSJqwP5D5sX6J6vPprfJjUPJk3nV5TQT6F1VuJobN1aHVLENijK8MPRqdVXeFBNuVpReadhfAbzaG9p3Rj6zi9B",
  "key15": "kEn9k6cvmnMqnqZd8pHhaRbtx8HG8hivguqhdtsZmFeTQBXYbk6C5RqpJ2qPxV72pNrXkhWZqLBEbuAwjpnWHZ8",
  "key16": "3TUu16HaF3taCYXpe4sLJcX9ubWW4Xi3eVgpav7Cn3xzoZrNvS77TTYYb1kZQ734uvgf9N4Th2g4kUpBzHBdjYp9",
  "key17": "2JXT9UjnVXmvBvHFL4KtCvwAybcUJxAu6pWrkneV5Jh2ocLynTFgMZbLPhBXnyxR3ASkyJ4eDkCxb4Z5xVZfE1rk",
  "key18": "2Az9t9ZMvFUu8SqTiQk6PAKEyWDzcChpBinSRZVD1ZvZiFbFeWeL9kjjby8p5zn4z2fFPbRuPxAKFJduJHQZNJUX",
  "key19": "Vn3uJRBapkVbUfErMPKLAyP7uQK6Nqbfx4XJGgZHmEDa7kRkMUscSnf48b18sT57HdpD7ssdoVacmU1i21WbL2i",
  "key20": "3WfAELpuf7RS8U2oYFCDu6Do9hQezxpDtfQF9QrUpZrbZ16QK9tauwKaRTnJ7YCFWxoB1aJuTxgGFPQHakpKiEta",
  "key21": "2G9AhJ8TtRWQwWGRKRiGgVM6ZyWLRjjxwG11oLrqinHDCETcDHWTPFir9hxJEr7xmrZF5XjMHfP2tE7LkKwKoxc9",
  "key22": "4qGFgSBXeyBdoC2DAwXgFiNnewuXnEsSy8jguaC4cXE6qr1ZBGvZun2dpHTH9ELxSGYREKsDnkcDfqfbxzxXGBoG",
  "key23": "2Zh6y8GHq9eaYNjPu8N1Y68LFmhBvgqgKRws4MXWvDQJt7BJobNZqvJ4J5SD2pDrdCzqB5eLjYynVUQbgMBJXNsA",
  "key24": "5xjLrgK6mTfkVNB4g39z3f4o1z6VVwwWoLw28tpsqfBS2N7WyLfWWa36Sf5dh2yFeKycjZ62MCY6n6tqp978UGFb",
  "key25": "5xpoDBE1j9VuuEwxowGWMAChUZoiCsFBLiZs9n31UqqR3fVaJaNKzp2McrJzYTALwirasnviG7qeEKSBvpsxBrS5",
  "key26": "5K2gMi6pD3KPhtgbfbb2wH8piv7jmjL3iC3wuGFxwFSyCTCp9ErmDc72SZXJ8xBmWsMv1NGdVRRh7kNiNY22Zzo2",
  "key27": "365oUL351451VtKhGStVhXkempFY1Lk3HG9MDDg5VbsEicBkCtJNsPXfzKNvd3NZPhQivBbuTf3uhwbCKRiCyLgq",
  "key28": "4rdUsw2PKD5XXt3DokXLwJfD4z4ehwoaJh1asUgntxfvuLzDEVgwfuzbWFGbZS8Z5zjVKg5RJy9Na9EQvuQsxBRh",
  "key29": "5m2XBsbqA362QzDPV1gp11JqSYxuvawWdJdhwJHGVdrAXUmKPS95qVQX9j8zuGoay2cdBR3twfqoN2qU8pATiK2z",
  "key30": "4CBW8oUPquzSbViLyNEmPPxA6dZRUevhMXRCKnEk99PaEwyZ1a6eAqcJZeGENfNHCKU7idALKWBk2sP9Tz2bS2Na",
  "key31": "VkUf6G1AKr5k7r3GF8eqHAvLL2XsK49Hk9TWBNuCoDaCnJyoqscBVdxcvE66gdXonSZ1S2edbnYnebfauaTPj9W",
  "key32": "2GE7HCEeGw35hUqasMMBc6D24HP6MWDwKsHBJkGckd9sUrQiKiuMC7UcvFHm8pjvSakwJYRjAWFBe6VYecDFC4yR",
  "key33": "YcX3a4NoHywwXbvegpkdsgY6QeKnRuZwzaWDSh624UxLSW7qUcYnfFGNApdMCNhLJ9qZbUA2uDkw8LjZ3NqDBLo",
  "key34": "2WoeQqY7yNLrMaHhvPitV1MCeQVk9DqgZwRUgajrpQYKXT5rfvvxd8KEinARwx9UVRqfUSTncy1Mwzax9Nqr7naK",
  "key35": "vs8ed6iBHbhFWaSTwotujhNGbqzzvMLKpCfdcu8X6Bio31Vm7qt7x79r6NCkWJ8a4tAzsDdEjsqNSaKMFUG8opb",
  "key36": "4AVjssYFGCszs8bizzVudNkUFWtf6emY73GkeHfJRdvSabidQmAVkfGfekgiojde9YKsK79ZHYmzugk2yiQLxiEK"
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
