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
    "4KQQwU9FEjsE8SiJGJjMLjYM5jwFbaja4Ped4VsufDFgfnQHG6aSemYZgBWYE17Gib6jzmbJrDHZrQgYqPwjnAVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tjp4NJ7BZM5G3UgQpzMUGGqJ641XNVfkXWX46n9WFweQWKnXNfpypjkUubPotfg7GVqvpV8kxzTKDDh4wHwAyyc",
  "key1": "3BU8TZHTUcJ2pPpcLzWAgHYBJNuFJpA1Eome3wyoogg2YKpc84jgxpFMxkFi1cjiUbMm13FyzGUufBHo7ia2Rmsm",
  "key2": "MMutg3f5wJPUViki3L4DnaU7C9TzesjEVHakWNmK9c3uVPm49855wqsonAjBWfQMeyuyCvwhWt12tn9TD79puNW",
  "key3": "3RmqbAmGdHWGU4V1jT3N2MwYC3F4cEwsZ2VzMTGHUx6enkqxrejfx7Gf7NQTKDrXNtia2aK8Lbq83dMy71SNcwm9",
  "key4": "5xMMxNKLf4istsDouCFw4YC3dj29rr7DXTXju2GfwryeaNcBgkTvAawV7c96MmmaKL5zac1HLuV6eJ7ZvB5fzJ8B",
  "key5": "4v3USMCAjnWPx5iQ6XmZHTib2MJE84FHdPPSC5HP9DuhWFftF9QFZz9mT33mVtS2T3R9rxqWrRAA2Ervj5rp9oCf",
  "key6": "fb9uzZN7gD9Yy982wBa7hfYPeraP9tWjUVz16RkiNR57DTS698U7UjmnkdZPB9JY4diqTzzBcHEwtEKdgsP9GH9",
  "key7": "pFfq7qvR3LhA4byX1vyVjC3HGQob6N6tQNM6q8tR6uWSeNCA5qnc8wPzBRLkzukbUmLGmUjRJkowhGY89qzpVnx",
  "key8": "4fekqkDd8EW6RQhx2vE8NawEyMqnnNBLJDfuNV82ngh3Mkv21w78jMr5S8cN3bLaZrnwaRabMWMkxGa6QBiFXrCg",
  "key9": "4nvsN1dccKZ63B1gzuggRZMbJUSTPdy6uu4GZ1fxCbPAQBQMB1VZhazmQUZpojGhtGV19v1gMfwa8gAFfDH16EDH",
  "key10": "5nsBuEkAnLn3BZ9SGGXySPVZQqBXVoASxwbTzVDXx8McBRVFrWRXXmxecP12CAsNJQC3ZVFtz9CF3TrfcnU5kcmM",
  "key11": "3U6shTPKTBzgaJEGwGcxm3L3xwTBMS1PzPpqzddmaPj6oPwdrhoaUUVTCkpUpWaT4SdqpoNaDBLy799Gu2hKfASU",
  "key12": "4hyTZ3UHcWsS3ytjnR6jnZ464phP5yfJ8mBepfZun2op3Pzkd79ivhqaViMWhkaR7UqMaPvsMEmvnqKNHjzoemg4",
  "key13": "35dNrLvTxDbsgmfQTVHpwKug2WQaLC2kfwziGgkZXqCpvGUUdLK3R5nTjsB5MjGGBh6jFPaJqDii8RZ4bpmtVjA8",
  "key14": "3j6z4p3qx88afJXxT6tVUaLh6VktKNYxdczFXefAaa3yRn2EUvrufqEpPvVDZTzkHHuxutnbu15SeF58cbQqEpoF",
  "key15": "G7BZcapcnk7iWf1bPNrMdRcgGkH3m34zr16CsP2St4bbPMUKwUJbqg37NV6tRXGYiSaD13RUTePqzaZywBZ49Dc",
  "key16": "3bBbPBDKB6zBgKK7KPt9m3yvpDPYwNbhgKQNizLnUb7mmJutuDDS1nZY1eAoan645X7PCV8vvBaHbhrbekzUtffJ",
  "key17": "3DG7mNMmM7KkukThFSZuZJo5msVHdvrQTvbrGb6VvNRv4MJ2SLEktvNTrkh2YoLnRfVGxJ2Yn8Li4E1gTq35y5rh",
  "key18": "3Q6RpamHCC5L8hS2KpQv22pmLbm1edWBBMzVCkW8X8WJBm5fxx7hfkMrJ6p5J42FAEw8218jLpGNcSGuExEc7naG",
  "key19": "5Mk4PchJt7p7mEpcGkWwWE41VQFpYP5RhmzdeVN57xNTSiTjsgPyEUuszvbtkVyh3HdMxVtYSrSBExoR5qsUNufF",
  "key20": "2zxuU75L5RaB5eDSeUa2qZEbUxtHU2uZtq6bax9MedHTHroDe478CNZZ9HZf2EEu8riHt2qUYDWvyReHw6LtL577",
  "key21": "57fWK9wRS8s2JpUAfp7ztJ48idHeb3DEeeM3pwYY4Fq5VB3x13TPLZMNA8hczhCd69B68DEzLrG1PWHfczQRGwkS",
  "key22": "4p2GA7YMMJLKdk22BjiasdtQNThH1mjXgffYvveF41Cibov4EZ1twskP6SBZBLvHs4FS6MpFwCvzf6yDhMog11ft",
  "key23": "4HJSJLvNibu43LkoiAyLtzbVFbLR841bFfsYUwpK7gXSLgJp1W6uKYWWkReFVaX13jZVDrMcwwaStJtxBdFe6aTX",
  "key24": "3vaAdko1NVY6ks1Pt7rj9t7hpZWpWZ7uXdTBBofXnDsKWy5oYbrbEoqGg5voZtzLEKa7Y4DKXp6y1srLnnd5i7ZL",
  "key25": "4qp2RsNJZyNgQAWZT2igwTqdT5deRaGTjgmq12yuNJY9RF5HhFoU1pSwY1aMkJwFLAtWJTncSpPSEhaSf41Sj47P",
  "key26": "25t9x1V5FDchBgojGktKTQbXErKd1SN6vApLdEmy2D3Z9x3tAdp825iWbGMxL9suAuSJf3cVCJnUzmB7Kdb6mSu6",
  "key27": "5Et6J3GS65Ng8B7Q5G1rroedWgoirr3FMwnHpenPYiW93h6eJxG1uaCqnSdsdRAZvffB14bsrD24gFanjbYRN71q",
  "key28": "3ySxBZrgbezWeBGpBQAHw3zgkpvh7wRpKysBexQxfpgRunLPJqnGM3PrqVYP26vERAtteXSLwfKfCsbKhtpZmHgw",
  "key29": "2V48WDb7YYPRZTh1rgmSSF8tBoBX9SPPofP4k67jRHVSZSnvy7Rt3QJmTLu1HKaHHcRyrAutoMETSi2NgVLnnAez",
  "key30": "VpZNfC4hbAK2f6PdDPimK3hGQM2UmBRFNrEyJZD6vJnc9phcnfbCMJ65aSQaJukTPsUpCC9JhHw79boEH3bh5xY",
  "key31": "5o7DPVP8wQiba1yX14iDA92bpEtzGqfbPsEr6AP71UP4UNPQeLdSHwtUNX59NAKTDrEWj7CJBrWQCcw4g8QriSyb",
  "key32": "5q78WWM3YZHAd9dQnyuE8qFrVSxFUfsMkfQgdDSZXYiWo6mGr9Lkhm3E5ebXnGRrEcVTo6aM72tpC2xhqvafbEgW",
  "key33": "5w8UQt2q9z9H2Uga3738QyTgAwbF18pjXWyAGDGhhAFaKDrxuHUBJfG3zvnoYfb3VzBYuc5K7PQFD8iJ3HDJ8F3G",
  "key34": "2yaixMB3smnp8i4vnk9VdrDNNQ2ZhPQ3zvDQDyVLfCtrHKQSsanvF7jcy9gWBKo6Q5b9eFYNVfakqrzE6girKdMV",
  "key35": "2N12va9UinWdCApWXunfr9CwzvggsJK6hMvrD3LfWniCZ9E21gXFFfVWuq4headYCcrfsd2iXHZsmG6SGhMAaShw",
  "key36": "4RaSXk7pdwrKSc3uoooA5kRHg2KhrdR5pgW3s5HsdrX2sP1m3MuveuyW38wT9JxodiUjDeqxQZzLjDTZBQZdTTN4",
  "key37": "2USK4wfjuph5Mrk1Q1j8wJd72bRXFrtYjBN51wGYY4E6VWGpncQaZ2uxwuZU3onk53PUYDNC7Xe3F3YhaP5xvWHh",
  "key38": "25RGbqDuXoRtELdBF7e3cJ2ueyqYsvXTxgCS5QHhzm4b9HwqFAWtVXj6voNNw2EtexUcCqsEMbp6giTGJY7EZk2h",
  "key39": "2EHxw2KoHanAq6QRszMpSN4hWw24n8ZYtqRcg1gV24eUUR9B7aD7MCgS8LdmV6hNwxR16mxDYUQ2C2T5RxrB9nXy",
  "key40": "5zHXjaw9NMhYZzb85wAt6ByGMAB3UjQ4kwzVSUnUocFt661zEs67E9oHK38hSqCE79mDn2Hhfu3FovX5dAkidWQ4",
  "key41": "2PUoUhPu55KZyo6WSD5Z8gjCWXwDFewwL4rDaWJdo4gSiyRtQR42KztpYA7KRXoQPNKAGfM42eg2y2o2Qh8hD2d6"
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
