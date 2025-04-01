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
    "3H5A52XGd8xZEptP3zNTw1dR5ruPFHf5jK24zw38Sr4pTxzLPEiA1n863wHyrFLxC7ZaMZ9nyoNNdsUpNFj4eSfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UXuqHwmNzFzLeFFiFdk9i5QDcoqx6eaqrVQiVK6BZKJVjYoW4D688RBAmkEQ1zHjVba2UhCvHeH2hVTKP8Xi4fv",
  "key1": "356BaBWNGhacJ3aX5nmaJvUFSXEukhy2C6j9KkopWLiu7n2fap1yrpFKKoVcsjVjQPvWPB8kNZFgRHWrvhM27GQt",
  "key2": "4rRUATQaeukqUjMn3KT1UnpePo8jTqkpZVFYESAhCMEXkQm7FBaQhWVuAFidjhKQG6xztmxvMTEkrqUbNYQUs8sw",
  "key3": "5fb8dovC53iUmfvfRsHCzRvZe7voLxG8hjoX3HxVBs84mjmUESWxFmXavpRRD8ZiUGPhUAJxuRJXdQsm9Eus8Typ",
  "key4": "4gzo7pW4r2za5GkxohUrWYbFmcyi2w7cekxL5eedqdDS1PYYZphTpQUgmpN9Lk4bHNn7rKvrrKTD9QKgLxDop2yY",
  "key5": "55LpNz7Vb33fH6UyxhouFuJVt6TLxTX2MmZdRKLben6gzceYNRe5v5fxeVsWWhRzSemtGC8tNwCaRUoD72MzA1gD",
  "key6": "33omGNh5hGStHs96XsEP4nCCvzy6kB8nwWu4pYNSRLYuoRw5reCS7prdchLpmtza5XvPJbbFsfJRzJWbsQ5MKdK4",
  "key7": "3BmWBht9aTGNa2ciHvuVFC28QK7Xnsft9UGg4cYXLErcZGit4ydZ9hty1XwmMqGDeGTrYooNMLdesbZPTsv8MYdA",
  "key8": "3TkY1F8oHKkm74YeMtBvJC8Rm9Um4vnKDrYtZmHRGi2GoDFFBKFdp6gsnLshsZJZdz1XYNaRzPPsrrFHEGKpfnNa",
  "key9": "4GfdmVCXCKMBHbAVFNYV83saJjAQu7ndWWGkKLz7gLWzLSFMA8Q2T88pGvdABiHASWncJHXAuRL2poBekUdJ34uw",
  "key10": "aLBTN7obfWnCqWaHn8t8j8hLMrnGLYM594F1EJdJnKDpFrR1k2QvYEpo44u4gcVwrSFkqsKp6g8wKQ9GSe7rxDu",
  "key11": "33DNhkZERSfQJvHo9iaDs8F7ULSciw9gmQXgBYfSUrdkxQYdhh2aecutCE4CfP91DVk2hbZh6zTLpqXzRraGMAuS",
  "key12": "3aGyHuPSqMdMjwjsh6FAsE26ius2yJ3iH6a2oxH9vGWbfnurmnZWhbSnCpRArJH8W6EeHbaywHpHxEqyqqvyc5nx",
  "key13": "3KbmUptYNbsAxghMXBhHSnTVHvEAWAUBVUvGohQ6R4C4ecmg7b5onXdSFEwCYCrR4HatJNPGJuqwRY2bTS4JuEsX",
  "key14": "qHXjCp2qd3jYZikGpGJciMh4u7be3n8Ckw9KqXgsSsBmeGW24zwZ9feSgzQHKhatffSEfMAHXE5FN5PfBbcuiXa",
  "key15": "5MZ88ZTA94MFPdh7xWVCyJXvgCUztnL1T6n8LBFZ1e986XgFJb6Mqb8EwE2dkwe7XHAiaV6wDdDcfwrQtfryW9Si",
  "key16": "5ESypf3GdEyqgjZzQ8gw3zVniYwWU4vQdBXDLht3PKzs9yHLbM1ia8G7pWXfEzCkqotQKKMV4y1wuDGGcasxodJ2",
  "key17": "PHSsJV4ciJzgWaeYB8htKtBQWHZnrt848B78i2ziwTYPuJESzUw4vvy4j3L5R26vcHT2Vcmp7PaX2LsyLigk8Ei",
  "key18": "KFfvqk84onSqoYEXHjUJegiKCJqfsP1zwAK77Jd8TG7o9UAKwqsNgzpRTGd7ngupMZMHkiV5QS2macjC12fvQ2B",
  "key19": "4ztKue9y9JKDKDnVRkkKC6XNKyTdbKgBbpRoPNovew21ahe4omrn1e6Ne1Mbs2KjUTw71hDgq32gXuLqtt4XeptU",
  "key20": "2MV8pDM3tawpPhEcMX6ALjgvYRQs7MS8kzUxgNE2R3tgYC8qFhwfd43PiSbnYgeZcinLCXDXPB5KeP8ozKH7XKEw",
  "key21": "5CR6vXivU9FNeR5MhuiZRLzRug96ZYMwF3T4CKsd846ff2ck7W46gLFJfNWvmuCToBrmbW1t1Jp7FMLCrhKgWVpd",
  "key22": "5BiSAXCMWpVohVW8cDtCyN3GLR3qWn1kfYUeceTCZL7Aw7vfy4NzgS6eb1yaMiNnTDdF8wVCFXQonboW9MDLab6A",
  "key23": "HCni3nW3yhDRAM9M273MqNtM2HVZYpt1dpAY5YcLFa6zJuPohtxp9f7sD66kyKeWVJZRfEGeSzUp7Z3riv5kZuc",
  "key24": "3PDRBUGuNfKoKhgmnPJtoDqN2523RSfkLMsGHmHCmcDaWoujd197yeWs6v1RwKnQYCvK66HgRgQY45kjHzcSGkEE",
  "key25": "5eaS3f9UCzbsuLkEt9EMspRU4aaPCpjr3mU6pnT7gAcRM97u6EbHnitkyVS8ZQzZegJhTL7uwtqEthEKT9Dm7abD",
  "key26": "59on9PPHahW8FGV3G6rDwkBQVZB44De6vM9mgYPJ1YTtLpCDsmj3C6v8DseUxit8AXHq3uDVzgiRmbF9uvNFMPzU",
  "key27": "2k9WQJFoaojKeaS8SayTX6wkkyZ8d76dZCFPWApeKiqUyePMGZW8CCuZMKvDMLhM4jsmBiH6o7aTk4U9LCLJde7E",
  "key28": "2ERLtMhLDpvNSzFkogqsTxtyUNbJysCfaUF3zzYaUweX8BjoUoa4w4oDvNNttcEWpm1myFCeGPTCw19x6kJwFR5e",
  "key29": "39oBw9nPheCDPj1XBr8jirzFxZbZNre1uPnrK9m7KXXzWHuad51SaRWWUfUbfFK9oDFbC36qBQ8QmU1GuJAtw9to",
  "key30": "3Quw7BxXwcDkUHUhGh6RNoZxdXQ4YR1zxoYH25dVjWt1JNDfmALN844xCuSJcbPrx52W5DYeN1A8KLbXawKUuo8a",
  "key31": "21SXSEy5qtcLZBwrG15xBsdmGFLkUaueMikuZz87DPPi2bUU8d6Vz37GPtrBcy4HbZH9Uk1y2hgCy7JpRbSP5cQy",
  "key32": "44A34XV8rzfoXxpyJf7vaqWEkapUre4ibV41a8fzWLj4fhBiQPZ67tqaHBiRzo3HdjBZQpqoJUPyoe8Py1J56wi6",
  "key33": "5cfiysbJAhyF5AMgk9agX2YWYLq7MVfrnriWATXC7JMeWZgPRe8EZS7EzgXNCpjDg7E19Tb46fPU5UtjgnqJL4vH",
  "key34": "4XzF5wok7R8jcPAmiXWxdBWyfMZGcJLDXiqXgr7kjf1GAcXHAxquEX2ZzMnRmyXM3vGSwWpcpfnEwt2TWEuMADBe",
  "key35": "5eQmBN54b2CMkP7q8WYxjmcedT8M5541zHpJhsCwfaXGZ4nKedL4yuMg78X2tvxWTGJa8mQpCNEzUwxms3DoFBhr",
  "key36": "3uetRN27Y3135b6k5R5GmBvCRoSwtMcSks5CAwA6GHf2H38TVvYa84tyfuxQMaZmYw34VvpTizb7vTmT73Mctq8S",
  "key37": "x1NGYzwFF3LF6ceRYc9u75kct8hMxKViYbB19yaevWDuf48kYZ37kiezjtef6NwB5vNgWUFv7yhaNJegT8ddyCL",
  "key38": "3sGTosPxzF2QRSnsPEnfixWwNXmmUrL3iQdF5t3S2NsRTZm4QJPP1ViGfGfChUBAriPfk53hQL5fVbsi6NdHp8oP",
  "key39": "p45bELyff3oGSYgK7PVUyEjyKMAPrQPiow9uaG2zfPHjBeUAgDFKgEn6G7bHeLN9smZ25bEWHZUiTtEp6mmHDz7",
  "key40": "3vQ2Xd546tfXqGeuMkNjgibMMoNYBx5hznv6vXxg56zGhewtPNKgVb7bjt2o4jJbaDFsSiRrz89tqTNL48CxyaAJ",
  "key41": "3BMax6nv1XRrrKBFN6rZUJiiNPRBgQw8DHrcMfAKvG5fxzyuMAioNis7jHhwBkpq45zTy9RCYPfgwba8dxhWuoTh"
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
