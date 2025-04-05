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
    "5aCuNGAKwTboP3uNSHGSC7FhtF3URLpECp9p7EaYSwcxCgE5rpTNspV5XfDqrZSuaWe8mm2ZKKnR9yXaA3Jps8oE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m5sM249BiBKV4MVSrFMZbdiDqM1whUsmneaC5RnuGeBgxv23Cc3ouYUzeZRs98bTVhLiLpiB3tVg9xnmeEmCcjq",
  "key1": "6dLwNFtMENKguMWHXjJugP5aFQYwEvVyJgq2BYT2FENYmnkdq7krD4UK1KPgHwXmuvgEHd5j4FgMtHcWLWkVjXW",
  "key2": "48aqyNc7nCmDTfhku1uFsPrti524quvYpH7yESfRGQwmwDQ6h4mYiBgRCwf7e6mHCug6PuS2F3dhR598oW4FWjkd",
  "key3": "TbrcrMV7JAnKbDm6CsrK4d2qGvYxg1L8iVLiW8As125mBoHb1EArHpYvRwqiiqev7N9i1QYv4S9HcaXWacegtgi",
  "key4": "4roq9RMRY7pieKpyLbNPNz7qy8muhZZWY3qbT2ZubJGGh2b6nzV3DnKWXz9GZVyMXKcCt38TTwsFjN6vY4sT9JfB",
  "key5": "FtDN7c729MFohVnTdLsRwqt4iTb8fgBVsi927UDdv4b2G59pHDNwJL56LMDcfjiHbQQyNBYBSa5cRDbFavLwGuP",
  "key6": "4B4GZFck5mbeufjdYgxSJy7hWCtryjbAvgQAzcypvdUpniVFrXUPixMQPo6VXT5yH65d4yW7Po2XznuKANBeRUXE",
  "key7": "3gzpY1cGNW19L7bFTFzz6DiF1ZVZ7e816uLEPzEaqnZqfQ22EmKMrckWMxVpMSEAd4ry2R1usmzEBSMCLnXpnyGj",
  "key8": "3s6ziWPyjW8JA7BvF8CTfvuSqxPJ8MZKZCBKtAqfmhZLA5jMzAgXRkEnLmnjMQ4XA858mBuvQpKjtQhX6kJVJf92",
  "key9": "4dV6bbfrAu3DNv6PGiPkwKPrGLT5p6Xxwz9z9NS6MELPNX4ecxfvUuvHdY61MGEW5zspegv7U5PMt4cCzBH5RxHy",
  "key10": "2ZPMfRam7vhFNSjJbqpwSYakjp8X5E8ghBLYQMMrwCaHF576ZiR5wb5Wq28vUYjccqPqw2CHoKNdDJjdAAq1ph1G",
  "key11": "2rF7r3n2htjVsgwYxNFPNw2rkmve6fCW3rPQkbjnDviEKkBCg9tT1kRAL7ugBT3uobN4gHi2u6d8TigSwJirUcup",
  "key12": "3omQ4K5SQuubhZDdaSBeViY76A7iXTucNr8Pkm8hByrpXuVCtTHqfAivPYosgnQ4bkNB1cQjhASN5M1at8W8RQHE",
  "key13": "5qufxdEjon19M9p3Kt4MKN5tgiFZMkZw7VCA6hk1LccWPqVkXTLjFTdCWAMv2aXTzQvtc2wf2fzyggtLcjjEpNZD",
  "key14": "67UVt8FzfPT25iHgY9tAPUGx5hjELT8vR48SRcQFNtqLHJQ9sVbG3fjR8jb4ficyvszEjmDEUdjKqpeWC7g7ruRm",
  "key15": "2pXj3cir1LexUXU19hwaw6FSmTqKCPGkERRj5SoUivY3dxax1a6BPV6WDK9PpHCLCH7XtUoBo4kH6ijrVc258hGx",
  "key16": "22hL2qngREaSdASAbg8C3MTPyxHymSde1LkcHHNsspnynVV4xHEryKqxtTBZRs1BoP7LzH6GrFNCvGf8PFbqUwx6",
  "key17": "31e48F3WmxiKrj4oRkUQMjqt9QqSFgaJNsT9VxsxnJZSKcc9aoiafrNM2PxmHsJCLVkbCPQJ5dH5NdS9r3Rot3DK",
  "key18": "2oCojYBzRKb2QQw6jDca6g3WD5KvqnAz5FLPZYVTKRKdXFr4CgfzT9LpTmC42TEvZrPreG42zB4NmLCcbcYrWguw",
  "key19": "5bFUDSgT51uJMaKQoftAnNt2ZmfKtFuRBgfMaoD9FNy6i3kkoXPBNpeqFGgzMeSiKZ4tRWoEje1ow8W9vPwRxyKz",
  "key20": "zHXEfbquWJXqapJX89K6kfBLCpGshEv9iMoFxWYWyhQkJmYgx3armez5AbHLnG4mEiDPdM8hB5aAbwMF2ecgyZ4",
  "key21": "4i2ev7mxmGS1UGkQQwwC6dXBEd76acJaE6hePcgC7fdWe8SWA59aj8kmUaGgFXQC4EuqJ2nXNtquDEaKpttm3UG8",
  "key22": "JR2eBm4EWBMqQqxPxKdGcAiueAetBUZ7xEZJBxyozq8MjbicoV5iwAFAoY2akwphNRoDknUTS28xJaEGP5Yu4vh",
  "key23": "5vDEkZubqng6HT36YahYxCE23vysXaK84jrTpGUU4GVQkvKmq6YX35rAc36W7o1V1yGDXWhXPEaKSPmNwetWipqr",
  "key24": "64SufXnajqN4pnFGbExxspbQo9zYB2mnNhvPX3A9cKyX5Ev8k3BxwYVSoHNApapdhCoEkeWdvrC4SfKRphSkWQe6",
  "key25": "3EFKohUobwQfQmzqabZTMzqkDXj3G1M9GyqqXicHgQYwWstJ9ED3pkKpnYYSEjBXL9HNUQgRB9bfBnPRr2rB7MDZ",
  "key26": "tauccPY3vNALBUvuQ6jPoZroP1PvKn4ipwXjai8FsVHBPJeqVySR1XWE2qoW4iRzWdQDUSkfQRyukA6YeC9pATy",
  "key27": "s1jsc1fE6YGhfTKSaX5FEh8acRhMXRdBEKPbwkEhb2wrtc3uF47xfx2245q3QLYMU8UjVuU9ufTeUixcCSCgC5P",
  "key28": "5GMxZAuYmQsRbvGJyRDUw3TZRJaj3tkCH8iWAA12FsfN6pGfnmCVtPGJzHPGSWYxH1LTKtdNuTJbmbcfzTBdoUo6",
  "key29": "2weMPpdJfiuszx7E7mKsmiKeapfEbUdoMx9tJ6sJxEHT2qYEUvHK3U84Hn3QAJBEKeiXaMAvEc6Z7zJmm1Fqjbnj",
  "key30": "inmrSHCmoqt2SDw8Tk6BZYRVmjHcr331YqDbPKQrUu71T2hx1XUHWRrgzugo634hY4MKiQoWoN28sXH9qytCs2U",
  "key31": "4eduUuJ5fMNPSoVYB9U9YE4dbKc9f9s16LDxeWqtSyqYZAsmq1S19sVLu5xhPc5LXhTnkjauFApEU8bwtvgUdNA1",
  "key32": "3aDBBxxH9oshTir9SAg6B8mtYDDnTVAP2DhVFrZJaW21ugdbBYDhPoR3VfFBBEWATsBHpVVYoXu4QmVc6CuoL4Lv",
  "key33": "3dsZviozbzcRR1WHQLzChs1xVgkp3mezRocik5iV4zXynM68x452YnQgxdSMYoC5xcmSf3GMoh3pcH5S4CSCqGpV",
  "key34": "5w5USwFdeN8SXKFEF8XEsYaQD1sRtoUvTpd6k4FsD4yTeHeJhgERhHieqNianv5bv3uFjr3XHUb6scdty3pSGXKX",
  "key35": "5RVkeqpM4f8AncYMiMECaxB3wnurejJm7MD7nWw61GxXr53KGdupGt2xTuae6bqek6Fu9TKjzfttxZgtCKCNE6tu"
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
