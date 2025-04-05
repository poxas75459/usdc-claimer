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
    "2DDFR9b74dNshoePHZ6Bq4gNH1tqMqWE2m3UFFhXdJyLGRxnQuELU4AjNbbBK67vFmigHpMjG7LY7oiZyK6d7Ugk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59tPnMU6tVpUo8zcdxt19QP9w1Li9ktyaoBjDaV7xdZZ8rktYAEz9imgY9Q9dnpRwKTBE7eWLbJ4Ej7Bewrvt64P",
  "key1": "cw2ewZ1crC9BkxEcJgLkAoeUQsYQZ3vLen4yUfF69cxQ8GRE72XJJYy29C2o6ppieopGz2NcWMUC1KKVvvDVwvq",
  "key2": "4WCiReZi1q7nLgejKEdJZmT8Rc7x7oeXHgztNTS8EWb4jDtLd2tWXD4WoQAW2ADbPphYnhqZBA7ntNVSWww2NhfH",
  "key3": "2jnj1v3rahsUGtq2XY4Ej52jt1Xd3jJQR8zc9wApgAjpncrrz9FL1njFzFrxTeNavfCorYgR6Ps5KaGBNMLB6KKs",
  "key4": "4sKXVsMHq5iRMcvdHXwB1wyBMjX8fVnhRRmR6k8mYRcJwkrmEkErSJ1bLZr8sTLR9J1NE6yQspoTi8Q9HxcyzC3j",
  "key5": "3TpHQnWy41dUDGtUb51AiYqZV1GFce2XHWXJouetBuoHzammw7v86SGNGjvDHXCbBsEZ5niQYZP5zByyonUcQpBW",
  "key6": "5jPEzG9Y8ne1q6go2pAnDjTmnNnRq131BhCEciBiUkdm7RNhtUqTjUZPyj6LpqBq99gniU1xem8z3MVesq5nRpDr",
  "key7": "48kdJ4UtbJKquX36r3uuztbD8PKX5jYsXYNTM2jGJFEcfUsuUBSVp9srBDsVgc9ZN3b7LnTgv9W18PzyvNrS9B7p",
  "key8": "5Uzphw6GEEbDRcSekBh2gjirCkZf3q4XTTtvWD88YJWmZ55sD5TFoqNMeVeAE2NRsE93xkzHMLwtojazXukmUNn1",
  "key9": "46UEHtShEq456DphpX1a6UsaV3xRjMkrh1aFR6qCiCMxn8kTwhPBoVRfQRmWNzBKGf7LMXguJLT1dYkkgWPY91Bm",
  "key10": "4jWevipp1MedqmMu4kAh8HSbTmu787kQzCwzC6UnqSFFGkPWw6yDSdqG3JJ7WH9EhfcAGhpRLt4xbvVxSWu93YKt",
  "key11": "4VMKsGFF2eUNdm1x7hvjT4SXhvvAzPYbfcpF3vD9b4FEeY7ShcsKjqwfXCcUou5nRuAXMXXBDFfLrLhpS97x2ZMW",
  "key12": "3WGkWVkHVa9KKQNyDaqwXsTL5s8BBCC9fbgU9WDKSPBGy2xW2aCtjyrxMLHZjWXgfX58goaSBeNU7gjDm2Xg1rFa",
  "key13": "43vd17xcHV3erTWrcBwcz5KpS3PN19BQv5AoqFg7gsaYkNuVLang6qj2MzamUsA7J9zbcuuaEovz3JQ22QoYAwUC",
  "key14": "2VGpGUmvz9uL7d8ELD4siQWZ6yisf7wFMPjgLozV5rPNZygAVumFBg4FM5WWcFwKbBxyqRBNDNdC6TdRn2Ryb87M",
  "key15": "zGbaHL9PCPvsQXqb5bd1tV9kpJuqqChQUqicfBJTpTJWyRSZABiREWJWzFdDYfehso5VC478LfyVTuxYce6BDhT",
  "key16": "yyaYm2yaH5afrtZToSwAAJtUk7VtimHD6DuexvUFFX6uE4pnQifBjsyuyD9i98GyexXexWi4Gmox7ziQr263EgJ",
  "key17": "4AxqxqWYmxgZF32vW7AMCJGZUKv8kH7UGsYktsTv5yL8iyU59cFeuPT6SEa52xFSNUWERCj4J4ehv62XPY1w9qCY",
  "key18": "2Pdae43RcUSEamaVi1xkzkfvcePMYuSX7PjfoSXXPBFrr8k9UcYPyX4pg5GRgH21Fnqb8oeuiMh3FGtptg36kB8T",
  "key19": "ynHEZSBBNnf43Wr3np9CXVcs4C6SrwUkA1YQHF1gurPt3QQ35byJ77VLfsom7qtUZ4A49QTvXx5ATaxQXPyNvkU",
  "key20": "5ff21EawqsseJzNoUWYxZJDomsFA855P8PLw9DHtRjuRU3DwUXF4yWXetodDZuHNxvJTRnDd7tztoW87W9xf7Fry",
  "key21": "22JdezEx8Q31cibvweFU5oVDbd4gEMVTn7eyt4uQK1v6XFsUtQmR76VhR788AvhUx9eahHpT6yUo5wqfAw6UTpxV",
  "key22": "fT9BvPXoVaSKYUWV6tr1wQcZFbHYzgCzQX38H6G1jmxGutfkFkrxRuLvRQqEbY36Q1Ha8M4CdjKoWdG23MMSKqd",
  "key23": "RqT3P1Qpc644S4W4ojG21o5BV6meJfaKUPvC5SBKbgyThXvEKm1HKMHE8Khdiz8bjseghRC2UpXyV3wAp3uDwqX",
  "key24": "49zx8tMWtttcphe4prAJvdXRLh3AxLV9GsMgCYTcdzmHKEXgJznbnGtP8RNJTTGpsC8Dm3Roi5TNu2WWbQfMy7Wk",
  "key25": "4qBRuXJbGyeoZDd1nWHuQQUCZ5dUrusVJZhgGVtWXPdbepYtBZkhCSPAgQAbJmqNGZ47fBH3mTkA3y9LyYD99JA4",
  "key26": "4gdR6AscoSRRzjDi1qdq3b4eftc2A2yCYivB5LEuRVh9ugxogT7J1dcLFiMKQPgsjHU8EzCRgrS11cewzQBUwMta",
  "key27": "578d7zR1MgVbn7RYDq92CtThSug5SdmD2GfqyTZpGgaJvayzPSDZ449r4oJS1MqzDuuw8gGhGqGivVNkn63912RT",
  "key28": "5VxNhbK46W5saYziCvyBuKvmtF8R9kdDdXinNEvhYB3cZr1FqHihXLnjeGoiZBnya4Jq1oFN8nbmK2K9E3w9wzXT",
  "key29": "57J8PQKnF8aBNfWLL5d7XeRKyEu2MQShVNie9G6MBDcZQ35cDN9hr6MU1dPyB5H7zzHTLQSfU3LvLLEWuAbTBmRM",
  "key30": "5gVp2zf46ZQp4vLA54cQm1g73Lcv4HrEPFwfr8d7zKpBjj3vwDyMUn5bmSKysc7Sv7F3hQzS67eiU854BB7JdVwL",
  "key31": "5uwpMchyKA5vb4H9DNYorW7SjHvFEHLPP1z2hUx5MeVcgwFWLBiBqZA3F3Pj2cSV2fEvKPJ8GkgntKVgL2Zx6nvP",
  "key32": "szti3VB8waqCV3s4WibRgE4Gb9eUMYpGuSknFmHTW5WTnbUsboARNJpyvdGJp1DW84qqDVeAD3wj7v2fUXHdmBZ"
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
