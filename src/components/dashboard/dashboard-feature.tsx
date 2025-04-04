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
    "5GT9RXG3qWr5TkjhTWnb1cAiv9Vt1L8hqCVv9vbpPsS1fBc5BVmKeyFSZF1EFC5M1sLoCJP9fs8Ftqe35JWpQjuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VAUeiJGRMqMwwD6g4ecjY2kaw5oCitvfSLRrB66TZABtscUMbov7FdygbMeUCDx69BNT5xSwe3A65wXu4FRQeS3",
  "key1": "kfYBpLx73GkGzQxzFCnxCs6hrm7z54EHS4CD92cx3oghazNwcfeuyuZmJGrRAB8kMAH5y9oLAeQDLt86XhwX2D3",
  "key2": "ZFcSseFp1U3Hjho6acJQaS1BySRfrcUoKJJAV9VFMS5nQn3Y32GME8bpyFwACdFn9J9egyf4KCvkv2RPg4S3nhX",
  "key3": "2fJpoFMc1LKy61fvCpdmeckvS5Md3ioCU2GGqQUvLRtQ1HHGRxLxz4ES9AHMbFX1PfRcetk5JL5uJjSMkpd9oAPP",
  "key4": "4xTSTvRU8Ua1p2g1fj3fm61EzDJ54ndawfymCQNbi166ZD4rqfVGaeCr2F7q9DAeSpXEsT4k861ADbKidFAcqBxy",
  "key5": "4icN6GHgnEJVsbK2X7nophgt3nY9kM43kmCWf4yRyxDwxnNhWfHXhK89Ty4T3FVeX2VXjvrup8jUnXLvrYXib4M6",
  "key6": "22rpbgpdfSwpMh762mCxUYP5zpd1nFNfqKaXWYQMMSoHN96JSPtCueCYaW1ongTHUNZKYPrJA2vKQ16tMA1LM4ft",
  "key7": "5QH8ESHqLeDnWEBPE5Bf9yKr1xmS9DxeZpwNnhpYsMjXonkXzTEZDDh746tASvAWd6jbJBZ8kQa1ZvRo2uiPwP1k",
  "key8": "23nuKdjrbnP3XRsp6J7mu3AdJoJcz4wzUcGwpjteJQ1ookRysfZdLAh6zeqjY9maZXVGoAMyHgd8mCSuEEsfVdbN",
  "key9": "36sLUa1FrRWZPNoaWfabaV3fuVhuoqhedkKyVMYyLc8sHkcKeVmsKdREAcgmG4Q5S5GjfzPrmJuZX8iNnZCxWpnX",
  "key10": "4ZDRPMa6pbzzWWenHS3iMKmYmYygDn3nm1TQZSLYe1wzeWGMg9wr4dXNSJgXneqEQe8QTpgqLbbUqH9TAibYijRQ",
  "key11": "4D2VcgE71ijkJohCyhzYz7vVR4KuddWYZxRHM1rEiQjE9ztXa9C3PtmTn1ykkhWc6kjsGL6pP9cztHy8NTeVNHbd",
  "key12": "DcVv2WeCeyXAQk7oQAMpVo4vPuwwrUWzmagZyBWrtqPrebmwZE8wAXXRpNFFCmbVLiuER3ne49AGnAMJ8ni6vfu",
  "key13": "4KAgGfTQdt7TSFH4AqnEYc1FnJVKb1M6rDivS44qLv9uMEuy8NWXkYrLHQvaGzs4YA2pQDY6Qw763Uf5qjjWubh9",
  "key14": "5vCvaxXmWvEWiiL1vDKRAMXMPeV9vr6jeGdPHb7MDhkiifDjiBn4dqBNjiUD4A1qE4mDj32kM98E3k7ZvuCDckTu",
  "key15": "3cpSMvsnpr1os52MSfmkSN5GksxPrU5mTFs25L6Gu6xuSvYsqCMoRxBYMdnyXTnPLuiamo6bvq5nxQUttxLnJm8h",
  "key16": "1T3ffQAWvxvRBaA8KVphfvTcwBdBVWezeiNDBXi2h2NAx14LdjjRECGr78bkJokh4w1eZGuzwCpMwje65YCUnkC",
  "key17": "MSnE8n9RmP9HhpFowSdQwbRMpssNuanzyyCGZqBkUKoVM1oa2yFbv4og5jSUCu3SfqRfXVHRFgaepP1SpHP2aGc",
  "key18": "3A4H8nFYdPG36CzYfrtx9mXmsxSKzK71jcgUYjAwk1Ko1X9T4tUskJ1Az79HWkN3KjyLog961F5vbeuqfpLzsbrF",
  "key19": "QJf8UYhhHr52TqZP9qknWpF989ABix8yvJRefnDcHmjtLaL5TAcBS7o7BykdpUJiPVqT5B5VT6MUHTQzKxi86j2",
  "key20": "2pXZmGyamu2FrkN26ZLbijKTWWutWo9b4fSmdff2MRP4WdrW6R3WEnEkmeQQQqCykkoKvQY15m1Fe2Tnmy2ZdGUJ",
  "key21": "4WYUhrEXsnERNv3mPh2D8g9rsgXmZALUj87zh9zhvkbF5L91KAmTFpxTP95xX6AwMzkEtK1THFnVfEUwQKf8FoWE",
  "key22": "3EVFkLpBgaVgiWy9GzHXAF9WJBWUC7Rw8rLj3gh1bFFsHXqtWXQ5uY4iMGPREBsY9g93EbcLHfvBN1j9Yv1FuFrV",
  "key23": "48kHEvcZhhArseXrkGXn4vXL4BEtbxN4ALopmXDZoytGpXWBh3TxnAqiSXhPCzP57cLzn8NFwVvyKEGaQw2sR1GV",
  "key24": "5F6SWVXUQBBPQnM7sKKvx3fSARW7nXpvUsUMrfvn4KKr1icJPGKGA4ZXJUWKnWaUgakMc6ZqobVx8a6PSWgHkuop",
  "key25": "2rBz33Q6hdYc9rCphPg4juRx99EvVBVTVrZrAw9DoNuTY4CKr4DaV7dkwoZd1Qhe6A4jrCdyHxZEVMn2PzenkgXn",
  "key26": "38yDxLggUHwAacHQnfp3GXLsYd7BPTNKX64qEgAVbetiohQVPYQfMskYN675iCSh2LEfWzWJF8UymZwyWDd9Fu7h",
  "key27": "3n1Wv6ijzYbUsAx3hPij1xsHq5eS9nEGRNXMZiy8ZAtjfpzn3yWXUQApMKvw4aiAXZnEug3GADRGjC4d2hzUEijK",
  "key28": "3tDRvrseAP93WK6NFsmMVVtSe7dTnAKU1qr9oaFTuvM16mbQsDT9dtmdbBfc3rYSkHEEr6hxioNHM4urkMEHYnJP",
  "key29": "5zYwkXHfnfciiPM3fKvwVxzCHDsRpGoYpvvEsjDhHx43hEQmJxRzuPXpy7C2nFYAjjmNztdcYLh8nWhVmnxqvvyS",
  "key30": "4TVr79SNxuThStdGDMPnwgqvqGZxt9UCX5cv3YtJXbad8vvX8cv9skYZVEHcL2AbW3nQjdvsrqUWskeykwkAUguk",
  "key31": "3KXFScKkuCQRagAZbW74KTqMP8amGyiqGNYAuv6sFLTJNURTqTKs2GKGJPKFkjkzJyrSYjGt49FqEszFG1bDPyRz",
  "key32": "fdFqrofmiKqr878VjfLtAPhBQMgBeAJ7W5eTKw9QDkzdy3dwqVb4JaXeBaNzncyahxF49XyDyXsPiZn1nUU3Yva",
  "key33": "5197ycXaBWPZsxZB8ttf2f8eZVEX4W5N4w4iebN5QRUfKWyh9ER9X27rokPwhCUTzvFBhF1Jtb4MT9NYdoXVaib8",
  "key34": "FTdTamcbi4CCq3tbjd5P2EbvkaYYgAkDEh2PocVU3r8fzbLdx2nwHwpdaYEezQPmgyA3rmEJAH7TEMnEGCHeWpM",
  "key35": "5AySFSJZzeuhDJP8AAULZMUjox8xzxSekapsq6zU9DcUTzgbRMCCAoee4NsGm7CB7jUHHo4H55j5q1czgg6mXWuw",
  "key36": "44a9tJZ1RokFgkquj1YHcRQR81t1foUAivLthBtRB4usgMyW5bsicK61cbU1kHc3LqRjTrwZL2gtorZErveMJ3Vp",
  "key37": "21B54dfVZuMJ9x3HMHgNTr6UJMxV3QU9vsZC2ig2ddQNQbMpZHM6FnqeZ8q1G2pdkSuvJvNA49xRa8hFTgWdYcmU",
  "key38": "121AKejXG2pbvWYxco6QhD22JewtePk2zTmdWYsujSf1USKrrvdYBsjAZS8eji1pPFkrcDjeVAT1BVzRZyQYuKEh",
  "key39": "5GKiW773JUivpdvdw6JCcFoCJYPGRH2Pw3hLde2hc6QJcuvbdtECNWoW921DrYjmoebuZEe4zSpTPBseGFS1gnqc"
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
