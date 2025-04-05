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
    "4VgQH4W8PwxuHNLZgsyych93kabisUpNYpRyVm5fcFRk1hvncvr2DGJaD92Y7Z1vbBregarCWCnF8vTgsiXyG28Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TwbKeUu6HWkZ7FChouqGuq82aYS1kNai1e7qTiuuB3HD1VTNwSrAb1Fr3potxkELHq8oes9d6s8oEvM4Zr6bUyd",
  "key1": "5ENLJs37mfxb3dQFxhkREuVL77z2rxPnKLLzy3DAitcBDVGnRGK6Xx8WXmYxzo8pca3D3qDSjqWAUnjPLZKvTePi",
  "key2": "3Sbp9FfQiTERHEBispQSUsFQxxGeYuHSGRhVUvAuybiT6WczpHkd62waB6Pb96KWNQZfA28yKtikX6bYUgVnwZSt",
  "key3": "5iQaHb7kFbvS4g4htjN9tZL5zicGRwdHUexWxkaSGTaNKAJ5JW62K7PMjhv2ep7PEVuXdWHuDZfCz5cnvMRso6ES",
  "key4": "3ma8zUroX3bAtC6dZZi5AWbnzkAYy8Q8zxQBMoeidyJUQcexrCMkfitdPgEZu4T1ozjKkaYcMwuaQ6wH1rYayab1",
  "key5": "2sgueKpX4JbgemjWqvUBQomERVnb2SHqHkXiNwqN58LLqwLcxTQs47kNFcdM8LSeTgJZLGNtQtXYkFzXFfgoL2FX",
  "key6": "5UEWtSD9eTq56bytPSZKj3bDFttGdA1orQ9U4b16a1H8nMeSin9T16iZF1VYu5D31xBty47ayTnTGkeGb68iJrY4",
  "key7": "2TBd9Yp5qHdqtYPxK2eyGpN96GmgZyTHWxhmrvazFpKoMKKHqECiLCuZfN8CPF4BuBMLXNbxTdLVqUbq6C6XLBia",
  "key8": "4zB3xuJWnBvyJZkWfgr2hbESSbuZ8HdUan7RMWTZxomjBHycMBHdPNjGRkf5hV4c8wbb69A8zqR5fH7d9pbmdn74",
  "key9": "5uNJchQdW2SafgCF7YPfbb1TMf8NWt9m81JrKBggxVU93U5PtbRF8Y6WAdXKriafE5nUJe8wcLyNuZdcXM6SPyjU",
  "key10": "3V6BqEwCsQz1ChcPW79x7dQbGgGGeDFcE3w6TmNyuHg1Dk3ACtmrQrYxyDniERMi2WvmbGu949uJh4Rzm8d6gjvM",
  "key11": "38gZDYKP2bCCgBgBQjbqmEn5wmZ98Lpchi5jdk69wsrZzCtw5n78t7eZ8Xfz7iaJv9dLgQ8Vmfb1ZAvBoXij5ub8",
  "key12": "2du8dzHdQFa2vcnQ9UJsvokZbPd3gfKaYCKvLq5NCXeaHZB5sRfjQ9rPins2KrSAU8ej9uniLetQ3HFLBki32zH8",
  "key13": "2nRSsxrGUqmJg5RFn8LNwdFqt8UmpiG75N6CzUdh7KtaVEgDMtphriV5MEP7PxChrSjQSwsbA5LB2Jey5ghiH8Fx",
  "key14": "3J37D48V6SKPaoxf4gfYPJ3b9WCoF7ToH143zQVPPWf9Wq9S3ovB6G7W2pJk52PYsaXDkn991WzBZGdVewBh9EbM",
  "key15": "3KS12HrSzSJXMnm83CS6nS2C6q6NoEkScddyARCaYz4oxiJeTHwE4VweDenLUKMoyV6ZrMaeo4yjA6oSWDC7YhpR",
  "key16": "29aV6YwEZxJBhEeCGrTA8RXJw8Uc6LWHCahse5xxYjbR7WRDnaGAtxkzacTCqS76yLK4PtzXx66E35Gfcy7LozRc",
  "key17": "28FtbKStsgsuTzLPwhaFvLTZ48zxHJvp1XNodo9b6m7BRzx6WZ74Mxyk45pgyo5Yr4X6Ms41pTbeL5BjhVHMVqTY",
  "key18": "5oHhm5SUVZDUzkDbdJRPthhQBa1Bx7L6KCLdf1g4YaqqtpzFgnh3Qrw6YrKRoZ1nUPts1W2Wd6r2G4snR5p3jGfF",
  "key19": "4Ts4SQFMxkAY6cHfFi3SqPZ7Jp1TH2MV1KWAXDBHhZT764mYmM7xA6pyfB83rkqH8M22PFvXFeoCkDoLfZTeYs1r",
  "key20": "EP6nWuFMhrwBhEtGtukp8h2vNjuxLq8gp1VoP2uCnFWmjBdwiFBPaYdd9axNdRs4WTuRz2TxnfBaRxxRQM6SEKo",
  "key21": "3wACnDjpNkkyahtnjTiKaj95DwLJrptpA5izZhoBDeEDyPV8rMrJyn79YXJdA2e4tVHvGTUPSocmXX5YpzmNxMUe",
  "key22": "2gB7oj7NA6QeCQesXBTG3ZqxJDN1M3Pp5fiUCydBiPLYLtykYZZE4TqEh1k1CJZUUZbi7D4xhtxzVqte7Yi2pxtX",
  "key23": "q2F2dfsgBQPS3exufuJtiaKEPYYiev4G4Y4ec4JyJKTD3ktYvYgaRKpSMQ1yEjMQtRHT9cEmvEC2ecXKcqTFovF",
  "key24": "56ERo3RreTUzPGJHKaA44aJokM8fWFAaiXU2KRYWy3bKPqN287td8WawMKX8kpstXRf1wE4zzLoPPEjaCerwP7pg",
  "key25": "5Qpz7v6BacXugVdJb1AYxKdjr7ta7LinHxZG3CTYMQuc2s64LaViPJbKq1qa6ZJUqx5vJkG8ZBdALaWe3SAZFqaC",
  "key26": "2WEaPy4gS11hWiDDXcGN6XbbAm1GhqTLYEGHzFHadvd2PLsFomVvDGWUezWussx47H6mfMK2dyAhiG3oxCjdkxUV",
  "key27": "5Mjyn5RVcBaPGkjpZgvU5rFYTgFS49xgnbQwXSvVcLRxriWjk1gZu6TxK2aNZ8rCUekEDB5wUgEBEk3y4TJ9swR9",
  "key28": "41Yb8JYUcW3VCFuALGXk1D5bi59KtGFtT378iBRoJvoyWs8sQWNhvLAcsxd4hkrvncE83mwwdiSWoAJjWZVXEqGU",
  "key29": "4DTMydTq1vQXaF6EFrWFGEg6dRupfWyjvasrtA8ZNP3gnZq9AeYmyhAzYdr6Qd7oW6QmfTVtfm92CefdTXR8Y9Bf",
  "key30": "3Bywz7uaxpfnrNVbUHfnX2AK7TyKPuyCFxFvsFxhPFpcS73ZT2NnjhN5SthRVeTHRDwiC4ubi6Y4DJJKbxLGfzGE",
  "key31": "2t5voyg1a1Xwc42phCeAXVmZHgVrHGRgkjwENYqXnqTtCKi15nekzZAAC7YWCQKPMrFAKMawPZnFoT1Z4vcwjFuN",
  "key32": "24aZwDhfFWwVamZqCWdxwLgJ3aTK8nzsFrKUB34iRwPKhGKSLQphXjkKpzGRwsNakEhqH4oERiamW7FR4eKGv7F5",
  "key33": "5fJjwiQ4CigH13dack9FHBmhjUJM2sSD2RX7JMdJzqX49AU3p7emKcRLiqPMxoc3wbjdraDsoYYorPpkf6Sfhuvo",
  "key34": "5SoMqHRhaA2i8bPv6g8b4KBbaHnW35UzqZH7AfhZ23WWtSCCzrBGiTkT7Jo4dWJ8wGTWMbn34wHGACVKV4hAti9",
  "key35": "3j5CWvCxrynZoMz6okPzfsebAdAnyiiBarbb9WcbdbRnTZBgQ6wQy5CGoqPwgwfwXV6FucL1M2LedU1vGaYDzwRK",
  "key36": "4QKg5UEikkxSzGM2zDk1jsYKikZYtYGmREjhJVjAEo1xsa3WjGEpQqo2cNdgT8WTkgoWMHKM1xz5ZNjx6N9Y5fXH",
  "key37": "58NP1VAxTWS62aUg693BKd9AtSeNkc2CkCZLMspnPZafUsZaTtYEryFCXJcZTaQp4uQ9rH4rK9iWNVDzmNkdtYzG",
  "key38": "3t1hdY7wUFgxYZqzEQ2M5QcixmyLm3P71jruUchUepr6cKiqB3DQMWwcWrjf7z1SZvfbMA1yECgE4Vxupz4PsgjQ"
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
