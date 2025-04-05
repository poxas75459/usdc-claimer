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
    "3wXRCUEoEreMBn3u9P8ZAhzNeM6ZafJatFfuQGAw41haEto8mnbCqisQxd4Q7SEep6k7rkqfkeeJgAVRPSDepBxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LtSP3iNUNKaRqA86QFYpYn4Gss543u3jJmJKAd9gNCaJ48WpGxBWSXtyuzuFm4grDqN7LAgWqJ4SB5LEtPkUXtN",
  "key1": "2wHkKx9ydtAznYXQWY6r6o5F7tkfRVM6SiWLhDL6m8TU5v9YVE2MrgZ5x78jxkG6QBytvo5ZGX4o6Wty3wHXRUJ1",
  "key2": "4YEfF96SiNWVDapsAHAdN4BPWViNLpT8AQzHwmjjmwg6f1dQVcUcpfDaYk8Ps19D4SUJ5BYThDPF6XvTpmt9QadR",
  "key3": "3gkxfYMBXSsFtzr8RyrBqk9GzSErkpHwjgkouo3r4zoi9a7zGKMsfNMCJbwBU8jadFAyDerKq5mrCnZas8LYpWd2",
  "key4": "3eHBvoERY9xX6o5Y1KptDz1tR4aKGVExgBwQ3JByAh7ppXCbSv6fHt5LhXovYK4hHix1Fs9Y6EWrnrunAXNzFipB",
  "key5": "5Xd3r2vbExbkLSao1oeqgHy6jbReRLqZG37Es6D39Bava9qMiVJT4u1U8rSMAAcNqTy1qkpTAYyBzuUUdycEVG4o",
  "key6": "3fhqCHaijtEQ8wgCH3HBPi5izn9CKrokNTViyYUR4SmZzAYXQ2Tk1XZy9qwEJDzSCCkCcVi3uMMyYaERRe1C8Q8u",
  "key7": "3RjpnHWnrpypyHvEiECpBVEkPQxJXtuMBt949tKPK8sv53Jg16JgDDjTQvRBusb5EUNiyx83q5UqFjd7PKcmn3g4",
  "key8": "3j7bN14PM2jnp92pcgCX56CxkzNys7mQyTYk42UB2bZKFppuKHw5Yad75NN7dSseF6bR5fpmto82DKm9QQaFfU6",
  "key9": "5q2a2DCgBetS2zw635kvDspChFYnNd6Ggf78iS2a9cSSFz19xp84RNHaj2LfX2ewAExPAgk1WSR75De6HisDx917",
  "key10": "2RB489zSsqewQxGFZLYWuZwZKKd3cXYEcTPArAkbYfJdup7VQ7r8DdDuHHjSPmqeoZNQk8r86j43nepTrbHG58Sa",
  "key11": "5Yd3baCPHM2nP6GuTCRdwjZ1tzzDALouuVdqYeBdYyMsEFbdgtwcbVkjX8p1SKSWEtj2Guk2qCGzT9f3UknmWnwN",
  "key12": "2oxMhY93z6t3TnAvhNtbdwupSEWMhUchdtvtgJqy25WQaKwt97PoKc3RC5yVroeCCnLeUo2AxepWzuEcNrwdQxXe",
  "key13": "4UKDSamMrm1yrhqHgmhvzMA1Y4jFV5FkfrqEwj18SWSkfNrPz1vNtBRRMBp3VsNfRWFM2YnhwP7xKpGovRUKNEz8",
  "key14": "3fNephUGtSrr4Rzcb8EHteAdJEN6Rx9HQGWSQAb9nmvUq4m6mmEHjAMzkLvJKX9YWynMor3yawgWSr4QbgTkoHyp",
  "key15": "3Ash757Sgzud6xV435J4rF2BQjnMkiSwRvCuiijyg4wDeAX68XwVEzT9U2ZsPEjkBZJvadfd5XC1WyQDFjWzJ2Dv",
  "key16": "ZBErg3WLgcQfLtR77Fo7LRiHNVcdoXqaip3QTuA7BddgoWq4BvgWdEWu7kjfNXwnfL6NqhuJ8odEUYKQxkrRMvx",
  "key17": "eck46dU6Z93Wpm4PoVd5t7isSZ3V68Ld93GmXkVi2rKTViJ7kC7d2P837kPiESCxFADDnfjVP5QpfU58M32MDsM",
  "key18": "2CSnLdFGVN9KAb98zeFd9u1F8gTYrh4kwyMttMcZXHR2Wk1PYt9uYdZDuZoF3rQAJ8GQumamNVjz6a7APg1xgKQG",
  "key19": "3ryQHS68AiryJ4zMF6ZSsi6zgcrVVP2JxguH5DNiYJWQJj5785dwfghH3U85nmSU4cZciGqek7sRuztRWUSAUBMm",
  "key20": "67jnRsn41yxt2B2fV6RwJZmindWJXrRThydRkVBLYXqHDXrUd9JrCjMAk38T8HDPFU7Sro89iRYMWbWHBk9ZjMmL",
  "key21": "213bJ9QzNdL9jtYjE5iHFt5nuLdCCbXYNWU9eKuT7k8JBJKPKX6K4KMK6uNg6vEbVWQFQ4iXxMmBtAmcaXTGX8ka",
  "key22": "3Sqf3XAbhi2oyqHa4S9hCdBfke8QWoDyLrGuug96ES9EhAh7PEwcx36K3MoXWwubpgbAHegm6YZqFDGujCD5jNrk",
  "key23": "3zi6cRApedyGodC1WxKD9naWwZRmkJRxhM2hh982uYVP4pCr2wijdGLZZ9ah351MHsPQ3XEeZ4CuQtGx1vCwVK7p",
  "key24": "2bPXvqaLchMMboHMLuaFx86JNrVzsgTAHpj37PX3xwMbm8pBqagcK4hTc4mjUYAf1nJRamSpLPfKuhGFomQ2XRst",
  "key25": "39LKXTaVdQwRG4NHCNfNDRmbf6hYHEkHYYZfadvYK1oSVatHBPK7s2GUacdMirhaygKj5UyCKoNNwb9k3MT92GQB",
  "key26": "3nKMfaAPcuwbpp7jJYKeoVW4qkR7Eh8bRSwTccThr7rKKc8xteSc1h3Q3xxPGzQVFu8oLjfD6wjpGg1KgNwMsnc6",
  "key27": "61P1Jjj9sbtSAKRL4tLGMb9ogJcTgDY2dVTAJi5DETb4X2gYBzfmnKFrMxi5NEuX9j3y6soYuWAdGGs9v7S8rFQn",
  "key28": "4gSW4dnvN6Vjb6YwVPfrPPvZeWbKE9BgyLTnMkcoM5v6G9p2HFksYdBNz6pheFAJz4MFCnD3TYjP6r85DEpAhqBz",
  "key29": "3pWK7r5SubpPYnhYPirWzYwjcaKXh7PEs5EisW5yJVnm4gY4FU88p3LgGzELPgMcF6WvVjkvMpPWgFhv3j6YLoYo",
  "key30": "4RsexpXrAqYFyCNwocCXB3raD1rZ8r2vABZCeCk5tUTgm1QGbxyXowQW2UeH282FphAiP87JDb2Yads9MJNxuYd8",
  "key31": "5DARXXvLRU1gxiuxrVzSYqJTKtQJ8VFkEDLa1Hyznn4yDh4ptwaNREugWrvAQWR8oAhh7p2CEC3FcWpj7b1RCeDz",
  "key32": "2Qz1gCAw8u133RnmaekuQayoq9JsQQbgnVbef4WLAThwTUnn98GxXj8xthn9HuWUqwuktLfV32P7dEDZvJwDFUC7",
  "key33": "4UoxHfUwKy7ns9Tb4bWcthQCsiAkopLunw9pBCp8nVvr1EWgQowb68XPCyFJLQDouDH7WxHvVjVoF4a41scRzsTF",
  "key34": "3REJt2P5JBAknPUFp6BNTc8XaLGDjU9uugaYrNub2uWrVKAjw7apgU12qGNzi4xsw663VWTrANzUXWdvvEyHzJY2",
  "key35": "62qnrDSGC3GomEZX1Evy9h9bBE73AuR1KWdQjDUXMKjN57hE7gzPAfG7Z3FWMVTjcjJy2siBfKwSUfvGqawLreoq",
  "key36": "4cdNjuej1t3YDhTUiADBmiZSaxXbUi7KSxtLiTDBTaBVZintRh258LWA3pVqcQ1UqDpyDosYVZeZYK8g4GqCePn",
  "key37": "5j5ynMmamNdPfBRhr3cUoCuv85kZQawDhRv385AAsAU6FdeEGHwATecYjkmET9iHrkDtnciZY1zsJZ8HDDLDtWso",
  "key38": "2ZKV1m536C1DAXEV9yieu4ZvCCSXiRHEQph6EC7mgUXPhwkn2mtgSYZgRjzKFW8GqA7vxpVmHGw5q5YztoQaxKyy",
  "key39": "YJR8Xz73PCva1wAW8Z2SrUkiC5genHT3uo8kwCiejvUkkmUYNkxT19kR4qvjrUp6qs4dxoaR8x1bXnYhLW8pAVD",
  "key40": "ePpGQLaTs32YXsTAksrBVw2ZVnkTk2gDiSDPPyjAm2KRwwQ3oCBBud9Z8ERAr11msmvUZDojai7XEeH7VdhkpFa",
  "key41": "4cXAe8LWczPMFTwvn86j41HcGobVgFRZdnZccFDezKeZkXEU6Kx7RLk6wzR7CWbjocN22G6paD7Y13dqd1Q2EoAZ",
  "key42": "32zg3Q7hczVBpr853u5NmDsojqf6xepuECnd3ZWefyQxWz9AM8tA8riqx2qrjR4s77jPhZZdHLfwRqX8sCcbT6mE",
  "key43": "2tvKb8cuDBcgdJeekJJF5rr3tfssGRmwkZc1KFES4EQ4Z1sGfSYPBZVg7hCoJkdvvHaCGhchw18ssCc2oCahdk7W",
  "key44": "4Lraqh6U5WoxubcGXvhPHsX6pbfSYkJmjU1cFzhXBLCUSzqd6c4wqB4Bx6iP6GriyYu6B8Adh9Ny91zzC2T9sM8G",
  "key45": "5V8EAxyFui4iESUjrsZcaCD9YKTgeU4JonWnFKApPTij5uUbkhKLcgBNK5m8Cav1gpSy3UU5zubAfrP95V5EiiK6"
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
