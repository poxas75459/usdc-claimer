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
    "5VpDodLeCAi6ZVh4tv7PX4Hir3SxF8yEU5Sq1FRLw7LHVgv6xbB898NsZgcY4WAKqQavYpS8yLGPvCU7g5cNv4mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kEcLixrK2NaUavRmetxndeRg1sntwWbSneAjJWpFL3MpvMvH3q9AKnUcAV9PZnJsqmyMoFjwYJm6xZsyuyMVQ1x",
  "key1": "2kvsK8CBi2MANajuWqncmuskbmhzZGWwHQDzHFy8mJ3t4SDKLQBRHR3JJZkLzRQna4uowcw1e3bkHjbHdzg68Jtf",
  "key2": "5nhxWJvu9vNnfTmnj69QDXvqFyAMZrqEPQ1q6xXM1EKMUDxSapC29x99o7TjEzyJCt1vE41XejEJGri3X1mBYeEt",
  "key3": "4mY3UH5wx19ijiiXcYxgV4fZUcTufZC3yJHXPNrxRHbBiyRM32gduxtvHNpUHrMqHAz8Cj7dwCCLsg7igpmXTKYs",
  "key4": "4niXpUiLS2GAYMtkQQkrP234fWdJAca7nzbaaWuB7E48DqQhEkCjw7WQNhTRQBha7aTTSteJbVx6V49jozZTeb1F",
  "key5": "3cRMRPoyKQEriVGekGkXvjycBH9F4mVg3EtvxU7i91tspf6gD6jD1b7HutcuYatTb2Dxqb8czA92EuqgcxQroqzr",
  "key6": "RJmAcjvuqCG9ejmLdvGH9KrQ5t1WCA4FxKp2RA2mkCGhPkFgKJxHhfME2Hi2EuduRvm5Bhnm74jWYuLY9NPqAvY",
  "key7": "2CmHXWRgHZn5zpW4Gwv1riFwH42pibn2Ad5HLuHdmPSkcfKviSVYsprcAbRc33kYTaLfpR1VjGiu6NymsBjnkMMi",
  "key8": "5eEmSCY7JqVSNxy4mKvZ6SdKJ2oocwZ149JWsVUhyvvvmScVMbcgXCMvyvB1UfrjjgKEsNnmKQwqSDHpvKU2B4cm",
  "key9": "5p8yD3Ma129MpzgUu8vPqhR9hXgVS6jchDrBQ9AsBCnC6EBg7HQ82qBggNaSjc4evxSUjwTBQX2vXioy4scJaHUR",
  "key10": "5U4psECGvT692xWGhEFPNd4XR8Ke6Knzh7Y6nQMksJDY9rEg6bb4qqHQ2674xY8kAa8p8ud8q2nxnRAHmHcM84au",
  "key11": "5rxU6riJMeZ7em7SBBMhc1AWH9m9UBze8ax924ZnhYL4voJWQK9XLRyuDY9re2eLkuGdKHQ2nWNMm5N7EWBmE1iz",
  "key12": "33FW15BeUQ4L8S4sRPpr37Euq5CHM73etFU1jdURbwjuWBN8yUFsSBWFR298yWRWiwuq7yaEdezGkKZ2AjNvKKBk",
  "key13": "4pdHG8Q3A3X5NWyyYZEojLGEvaCYWiJzQjZNCpiLKXqwzKhsv1QtAUXzFb8TVUf7SjwqfSL9p2q8YCGJ3DeJE4yG",
  "key14": "5YrijoqHCNzVr3KPPGn5yVk1JUQgjzBNHhqXgQii5iyfJXmaUX3d8AV3QbywndET9fQhqXAL5xVHSN64Vv5ojf3L",
  "key15": "4b1gLyi4feFiyLLqpLd2BMR724nZFxkJVuinfdj2XEG478UNjB2rK7of2X8DhneH93WzYNDwzdqTXuf9ZHg5T7Yt",
  "key16": "5tZwmdJwpoSj4DsrSwHA88DxcnAWjNeVGx8ihyW9zF12ZY8XbBGQxVEpSeL83SCwAMGZbNrFAJqzaRzfzdksmiLL",
  "key17": "5Pp4GL2a4A2Hs5fbT8GySdhZzUd37zhnXh3euercWaVwbMiymbAPPzENVSo6zMpkfjMs16tFSJMJeCTZxvZFGr7Z",
  "key18": "4eeNDUctMwguYyKMpLGorQminQVTV2n2nwJGydPNLaSNitij7GDYGKeyomoEwURrLBiXmQAwYjhjo6QxrihnC2fk",
  "key19": "4sHTf62gWQQFHTA7fyTR7FmbUZLMZfRwu6tGWVe1HokCVYtpo5kVQjK1EGpjQUsEd5XuiuDdEumSNU4cyRYW6XmL",
  "key20": "21GKKpDkPnfo7JpZ5Bs73xu2TaYx8xGC8VvZuMem5U43xtkjM4MoyH6zD4pc33m6bjCFMHR5uNkWhLbrfbTgNLm8",
  "key21": "5KjoQ55CemLvWHd8iFxRnoL7wUN8n55bENH7jwquXPo15QAMW3wTR95R93hbMUj9THqmY4mSxyAbtowF3i14w3ja",
  "key22": "5zzGLcfg16xoLJm2yNNRbDhbT6HwgUd2nXonLz9WTMA2dS2Po5cTnYdZgmh75EME1uUyJBoGhHXBk5Bi3MdCNwWF",
  "key23": "2vq1chPBDXg9T5vGRjh12JuxVLKMXgMaup7h4YALAgP59Lr6YifsHkmnqyXULx3jTa2yprAkL6SW85XFgwnSSAra",
  "key24": "TuDxLGBzvf81cBDjzeTSLVmdH4CEfFvenUgFiSycXSiCi5Y8GmbEqFrXxTRZy6TB1ebp3QuGzcVsU9UWTkL5tEy",
  "key25": "57yBSMRrrQ88WZMz7pN746iwN3aA6CKwyazuJ1wtYp36wnYmxJ4zaNcYcuzejSZdLF4iPaUhMjVNcPKsoN7GUVW9",
  "key26": "7j8yj6sbm8WT5iyUguXdbXtK4Uv2UsYchpQtZB8ZDm5A7qSRDmZe3hcyF6z4pYvH73obZZSYQw8Vy6gHyRmQuUb",
  "key27": "2m7U9ctaf1oyDziB31YpiU84LgwNAW7JxsmGcenzMXei79S98nP7vCFHHr9K1sxQSFuvMQpFeETxhepEfQanB4ak",
  "key28": "33dbuSEtgpqpKiLjTDt3Q8N7inzLNVABa9JbfSFqGxVW2z8UrQaRvTfdxDdJ3TjTFF5zxc6DzUsMpbXVMjuQXBVx",
  "key29": "3zrE2wKJbegSXQvpp8a8fBdvddt14D2oKkMd4svUrmUyGihPDximocPXBod6cpD6VGLRepbRNW4HTFxfFUoTaevB",
  "key30": "3m5bT2wroC9rBpiZcy7mJHHA7ijTFPMh4YpzyVsJ32RiLfmp2CMMDUNV7JkijDQRFEWwrURdfKFvnNYntLAzrk3n",
  "key31": "VLkeHVQxHKssfuM7BAgWdzzrbYhJ7hemdvJTXecGcZcQjoLiUR2A367LVTfyoiXwedaAo3TcLrkQ3pzN78CUzaR",
  "key32": "3SmzrwnqwTV96Behbws5ELboJP2eQo5bm4XNPLEnzpPhTQTSsfvacCK5WxaCGym2djeF6me4yyzAVLRKPuMMzCad",
  "key33": "3PT26dtnAt9PsNGzz43cdk5TFGD2jwPC2eBuSSqkodYvqQNoSZYcU3n8L96i1j3BQs46NtVhW1hNnStg5mDYgNkj",
  "key34": "3oXKA9wgnoCsb4o72qHEDjrywCV4YKYdktHvu4caJNB27c47FDE7eAQkV7BMBTfLQ23Dy9kPmgMiorRA2VaQbgCf",
  "key35": "4WD5GiazuvX2ZHVcAbHSLfTi5rTTo7J12yCXKfRREt3v35t5nM27VJ9hJsB39khoNndkUqBMeoaYXMBxLwKLDE4i",
  "key36": "4nghXm5AvvtH2sGKq6WaMFgJpvQVScjYdSb6s2sshGCrfAx1uw2b9m4uaj4SykTZnbpJ8t5uqc67eX22MZsTa2Hs",
  "key37": "2quJDZrFxgcdTzM2s3TPABMX2SxquPQ3gcitCbhRDpB2tNivbZuxgxNgu7UH6jzYtfwHzZqsyVJLRM9ztzkmYbjP",
  "key38": "66ita1AYM2X5jT9VdZRNa54mUx7LMcWaJR5i8ocb5VPq8tuXjQvnkVHzua6GzMaVbP4TZgteiLpi3cfxgxAWturZ",
  "key39": "A4NfX5CSSySdypEj8Y2T8eLyos1BTDUuG2sQNoE7pfb1nJk1nVu98VhtozrbbLVNpKzywSwsUfwzYDoEFLaXRqF",
  "key40": "5RNWsu1qzQC5CccgB4upKTFXc5NTL8wx1cEXBmXWErPkGcfqL6uePyEkrt9KaAdHTnya9yMsNxVEAgy2fi3Unqvy",
  "key41": "3dYEv4kUULDnLE1m39WMNnr8PBWghWwyM7GL9hhXk1o1JrGhwiAweJVKKDJWQpqQ5Bd8cgXA3uDt3pki2d81eGbs",
  "key42": "57sNxxrEwrf3AeAcuyMk9e7Z2HQkzFPWUwKJzx6AutscMhmWmhDZbT4gPW6TLuwiVvJmmyg877CTMZYPfgnNR6LC",
  "key43": "42piNLtapaj3aYYWm3oFPKoahk47bkqG4ogMsK5JhhDEfAu7o3dxFRfbs1kRHrhyyHMshsnvK6zcbFXMqisS8TAo",
  "key44": "5wC65DLZeZTmCU9xYvXCHvYYSWyTXHURXzqsaahxhwE2TdUy9zyD5ShLL1Zb33PW7SHycUjbZtVQ7Mk5Lph2XzZD",
  "key45": "4DrjJPiN3sXy1EqEtWDKvc875C3unQhA4NSPB52ByxEinGXWuo1YrMZL7EpyfX7DH72YrmZJ5rcxc71XBkGZ43Hk",
  "key46": "58AT6nfsB6uD2vB1krgkjN6outyAF2WttdtLjZJ8c94AJHpTnTY9W3FnT26P1YmeTE6raCt6w6ZyCeb5xPihthfB"
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
