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
    "4oLY3H85Ksn59RuoVrULojWcTEobnctGBJ9E5cR1ygPwauuXzJwoCderS4sdDH8GwX1UF3RAdsyu21b4TYQLusA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4htxAZnBi7bix6N19Bg4kXy8DkT79AT6SRgn6kuJTiH6ETvGbT7zEkQujpiWdMV7M4MDFgYc149bA2SAy3SrnEQy",
  "key1": "61nBG8dv8YXTYdCecKQSGp7ZBPP6BGoq2R2NtELrRAnZzrhkweYiSqjQstgnavMHrhh39Vt33hqKSQn6CDmyWJq8",
  "key2": "4x4SefEAMWiRciJKSYugLf2i5pHosCkqwxxnXH5P5xNkc4BQ32mTy9sMjwyGNqTVjdCv2UCHY9fRHiqAAxGTkcme",
  "key3": "5nHKv4mW8NFiqFb1XBnGWCiQrZiuJ3KxkdRzHKk52S3sucvHujubHejNCYHRX9mTAUvBnx9tVs88rriTCzDXq5b3",
  "key4": "5TP2X6znmst8QDTWtbXuFcG2juNGSZ81SttnS28ynLfDN8gXstWZtqytkdpS612FbuX56KDMj4uXSiDKaNeZWzrv",
  "key5": "4tagY3HTV7WNLd2De2Hf216ShpSeckkJMZifXu7qm7A8ACXVarTNt95if5j3d6t93HGYC2ax519P5barSxsFLYUq",
  "key6": "4kQSkokhLawYchBSsLvEC8weA5H9KZnWVbw6bYt89CUgMUkkp3MKyPCR1G2Nu88EwEEiYKVY558JGQhVHv8sQe7v",
  "key7": "2QsAKDTScLDzgGAKk68pQ8oweiajB6qySyujbDAzFMzBBRrv7TqGEw1tqfrCH4mHescVMgxWyuX9Vp8zDtmFKLfz",
  "key8": "2crMSfpWoV9QocF8D56uwgv5kbP1iCvF1SYrXBo49triM31ZqhW9sJBWdg14JcqxHyjefxvtW4KVx3pk35KmvyS2",
  "key9": "sTTu41CSxeAPqgZqXrbzussZznhsdazAiKXErmAZZ5rXn4391U6e5LFRZKGS6V2g353WPXZWsfFVkDinRKGqGJh",
  "key10": "3dUqUfTEcRgzUXtTbdyuAnYMBM35awPuMRjTyW6a2kWDAad1EtFY5FY8LHGLKgEC2uEYtYMucjNdSBddSbX62wCu",
  "key11": "2LdwavhR66NGXUSwiggtJhmQgJ4hQG1Pq9eN7UTR6Y6YK9TfgwELXVVVQ4Wa7EPx1qyKR6UQQzksarc45bVY748E",
  "key12": "3mBRAiihzCDjHzWYqh5vERfZRxJwHVrucpGzYxFeMej4kNwv8dTQrDxsVmdrst2Y2EwNXjW5j5Dg5PTGyyUMUm23",
  "key13": "3CvC73XK2WpEKBY3g5ABVQZ4rDKke3FYdh1QPfsRieQfgHXqA8LjL3Z77VeNCT39iNppM1CUeVNYLoEB2WfPSoGU",
  "key14": "3DmX8rRN5r5zRwtmJGx1VhNkQP5wx34TZWNXgAGvKrryqdJyBVcnf8sYyckx24on6yM2FzDTLp4YBpUFFyQTKHy7",
  "key15": "39WHMqbfK2B5aFNgWcb3hbEz2coXjgwZuxqCZ7aLJ8g1HNRxyQo5cUAoWzyFAwyxuJfijqPvG6rAEtcEKrsvGrw7",
  "key16": "5DdhE7hS5Kp9d35XTCDELPKZ4renjGTDLFF9e7D7DjK4qYxC3n4BxcGuHJgX3gySBUHR5LbnmqXy7fn4NnWhtCxo",
  "key17": "292R3DQyymFkSJu7hWjFkFvksrLPCMaahBhnVqDyUBWxNJDNVmYZT7s7WXG3LfPPCFLF4Lvgd6PCpiU9vdiRmbZg",
  "key18": "62VhfoUBWFMLQTn9ibc7SQptbBj4XauBdt9J1q2FinhkHsjWMu5aAMQVA2e2tjNqR8zkgDekqCqbjpp7vevdUToj",
  "key19": "2UdP92AEfTnUNoQxucPn8HogKTJDtKr7tiuyCL36C2PQeGn8LdgT6VKNCozgEbnSyh7wJ5QRisGtT3PWZFLVEaAu",
  "key20": "5TMFBiRKfjk8podbWXq4Dh3CXLTWxfnbV89ERWg5K2zou4zmgEZxL4ArgpjLvtaQHzqec6y3LsxeHgVVJJfixxBo",
  "key21": "f3uUnT4232XbVVvLcwuSHynYwr69uMWt2fD5aK7oCjgfUuuc2tUyavHUszw8bBCWAEsFajdn3P29otrKtmFUroU",
  "key22": "49RTdr3ijuhcWngZbQUZu9nr7PM3Dpnz8tLQCKdJqHBuxk4M7vApMwbWbsVZGtnHmLUsNuS2z96FJfLtbiFoJypg",
  "key23": "2rWydQxUC2zo6Tra58Uzz7w5dysSmksDJQdDFzShLj1gPkMTw6oQjXDUSu1RJG7bzzUYPVcx7RsenhpJXhkatBbW",
  "key24": "5eELVoc1FWoXs5wJyYb2ozxPLdhQbrfQcP7s4KVLY5ZDcBPdDFLZw5Mhzi6zS1H5qASddC8EHzkbArUmzU8j48o3",
  "key25": "5P91rb6ehvyY6QbFFw9D8cPprE9x1Rtxi9TyrBUXT3LPrDMVazufqiS7ouiWhKamQj4tm7mZ3ND4iGsAzThjqWwz",
  "key26": "2QKP2yQMP8MmJ68WfpfcfrfnTdQRSsncoRNguXLARVkKksYxcmLb2woNhEfzD3RukFXWifvH7AioqxkfcSqYFY2t",
  "key27": "58iQ2kxiDEyAnznTgmKtQKuwovzNLXeH9VZ4mGWvnRdtXwrBiUNuyyovqcQtFQs3wTYz5otYAeKuz9nHTj3naaX6",
  "key28": "2foocvkk3KamiLV5DgNskMJvWkvkimupFKCWvX6vkwRe6btSsNCTW6dPgi9bkCDRjyEXCcJS17Rwyyb6FPUwWKrN",
  "key29": "2KnMQGyG71ata1JQBdvMoAHaJ67aBB557yekbXuA6nM54JCok4zZM75iFjCsufM3XBjW3HQe5ewnyzVdmvwFY88H",
  "key30": "4bRM2ggGvNdGiQRMZu4pqhXoUe7KyNZUop4BqsmzsKg8Nxy3HhpgMLHsbkWKFtPzov6bTMHUKVAyYx1s6WXuZ81J",
  "key31": "2QNfGVqVvqnR962wrWUNfdkwUiLe483zJ8N6DX7RQeuE2P2LjRZ9GzZxtch9ZUGdtnke3dHuJL7W6wGmBKCBaQ5d",
  "key32": "5Eb7w1GzT8uU3wgzLwt5gF2GrXmu1bj1iq5aGfTLKRK5jHK6fk5Yh8Bf6uhRhcJ9ieC5gFyab35roBXib7y4Nfnz",
  "key33": "2faZdiU3yfXbEw7cddprX5Cc3SH1XFSmgu9cSjvfKoYBU1ahRLChUBeewDJt7y7HKYATZgPeSWmr88LRsQtQAKc5",
  "key34": "3PwYggPiKXeWANdgpo3Schx9qBhomEJoMuxW7JtqVgVoYPzJQtgDmGxgCr1RofdWB7ewEeAteMRodC6EAVcUdcJr"
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
