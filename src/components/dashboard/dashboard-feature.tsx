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
    "45oNyX185DSCFdJwzBMXUcNRBWxv1KtCYCVarfpiv58gigcbTWkyotYAhGEHUcbdnbnDgUc7zibANvG5s3q7gHTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nEwirWmmX5YcZt4Cvq6G4WBuyx4syHxxeQQujRdjK7bh6fLn8e8b76ZLunvhcSXLHGJ98prYX5runAAvPQsEkq8",
  "key1": "618e5nb7QEnqgsioc8nkjARUcRAypBBTb3WtddfPDRfJHhheaZUqSMuKnmE4E7AhiihDpaaLQ6bodeZaPaUpsMNq",
  "key2": "3hx9ejzN4MzM4DKhdyf7mFJSLJy11RW3NbJbvW8ir1h6df3dxugbBVCr4xQUNcBwq5y9EGjXBzwoNFDKAQMWNo1K",
  "key3": "5Zb1p7NGYgJSmRfGgWKk6TdrPy5iEMkWUQBhu8WYR4eNM5g4jkubXNz6pdFXpyfHdj3WMApdGsoYZKrAynFJYVxy",
  "key4": "UpaSwkVz1yaZUZpMEvFUqgmYxb92SXqDx4s2YUizvCborSKXCbhnHDZptqqLAfMZF7sshg3NRLtwaXEoo6JsQ4X",
  "key5": "3YajM7DMuGd7QQweSzMQVnvha1PsP4Zrr8c7fwMVhvvFCpY7hraHAbYrjCyHJAUTNaFeBkeZyTwi2ViyH4sVBPxZ",
  "key6": "4a7FEZDEhWPdSUrXswseKCEBVEuq88vTXm5rXuSNMSJbEm7TN8iBBoHPfjdUotRVtqsPmArthymSSezyoDiwKmCs",
  "key7": "2wa3wZApCeo2gWP3QkP6LuAjuER9KzfRtx9F5ntFucE2bD2x3QH5sYgBhyA5SLXdoKAJyc6fyLWhiaEFHuZuydw7",
  "key8": "eA8DtkrjyWtD8P9dcbbXjzp2JEi1n11MMe6SgwnQEVavvXPsnjCDgVxMqp2gDDE7r1vBwDuE3ygnzMeiNpof3BT",
  "key9": "3toWGEjwhS93UCn68fD2msYJmMjga1EGHhSfHrquT1c8wGVWE4n9PkEms9AVdmRBWri17YynTLy28L5mY8SbkFsD",
  "key10": "EGa9jHYqhQjoXEezq9h9gzz2SsAxWCwKbZCv6xnCSMJNkBJMxpQd7Pu3Z4iYcc1qUbSi3cDiPgGE4rxRdkH7xGm",
  "key11": "5cjhQ2Ebj13e7VkQn2yEweDRxRyrvprm9QSSJPgSdDeFatwhk68NM8M1gefZNxE8H1LDgFo9HF5Xvk71rXSsAiST",
  "key12": "5daqXVfK9ExAqMQg9xQGVeaf5LNTWjLr1Edn2iMP2FaXGnrFbHgxRGPfTimLMTKyKnYbTkcn2wEX9J3VSsY2hyUx",
  "key13": "5DoJoNRKsd5fAGoiZwVFPGujXg1HaookZwZ7AbTdXgQzxmHTU2KU8mwvbeuqezFyDDcKv2qHAUfNJQiWvaoUZPio",
  "key14": "2mTAxg1s18wicmWEEbh9PBLjRxHjsHBxGFxyLHf6q4PDcJfRyuQqZ88v97thHEsVFor1i5gnTkwkvd1XiWTs6obW",
  "key15": "5pGYpCTdMM88m5hvoXsfcQCrMaAo53JEEfTosLNoXMsfe6CuUyMt9oSHY83dQKkbWdeB46T8JfCAeK9V9bj5p2GG",
  "key16": "493rjufkBbnVFbKUMR4PyjBmYcCGrBUG7SKwzYncdAkbe7WuzC5kNT6nVuxzd6dDusrinb8XfvuqVwDUft1hwiWo",
  "key17": "4STpWRZNJ4L5eQiygFURo2ZRZ2acCMCDt6cZbLbrX16Hs72Qvfkt6TG8CcVCqJnKsb9TFRqSPE5JNq6RDVwNMhSY",
  "key18": "3baqpFCm55ziMxqZPBcCqDnSzeXfEx1ZAtRhkSNBTCgEPGaV6b6mEGWhWzgPYX5ykrBniX34DrMA4sU3Vdn1WTPN",
  "key19": "5FQTunwCsTr57FL7irVGU9dbDNNBJm4whwjvyyn6KwZHfxdEwnTA2kHGF2NYVg33hQkBVyok798Ve4mNFX9o9Di8",
  "key20": "jQuaUi8CBtE9J1RmG2JFm2qBafLsptNhCEresqBN4GmrXjrPtk2URwDXHDN4XnfokM2WiCXcivM4JFPcfG4ieLt",
  "key21": "3EFxU3uwPMvCJ5x72bZ8jU9J356WZqJXUDNcvWWkVijbrCFh2EgJW8wwmyYRjyNX9X9Lw74SnecRF1et8mKHY2JQ",
  "key22": "Na2S46tdY7EbSPP1ykgs8kdiuBqLrfV39Qt8JDVWMxbvXCXdw1QsL9Ro1XC3u1EEYuFcAHBNJYDCdwhgzzK6ric",
  "key23": "2kC4Vfd8H8CS553w29DMyrvQCzY7gR8V4WtkyzfLZ1prbGkaey8Jqf9r2ynEhJ8NyKfD3V1dxd1KYKqKoxjC8GcE",
  "key24": "4Gj2TiiMBVAvRR5JEYu6BU5iss3CsvWaXpmt8pArDToP1RHvtzcu6HhtDmzbBnhRKn81mvY3c7oDtbni3S3Uh5tw",
  "key25": "2M3oiCLNnhVgRVSA1C2zkvhkBKR5hcZfzghwuKmMNprmHxG6uFFESaTq2pYU6NMmxUz2mALz8WadQvCMwojMejLf",
  "key26": "3rXMoBvtc9yKRAskZCCJz6LtoohLQkvDDvz81crhcjsn2D5zR1zyv4LNMNmhp9ABBSmEZMeCAfSTzUEvL9V33H9M",
  "key27": "2miEn4PgdDBN5gTiCSbdCt6uLjSjXZqdsph5ukTcn4kbCN5NPo7MpXRgEaepdvi1YmCYTtFZ44Uqrkn3svwZ2QDJ",
  "key28": "3snMgZm8Vv1BtYUqVAgtgyMrYpSLtwV5dSaEf44eM2xoXwiQds22JPsL1yMzuP2nQx6pR1nUMmu3bncqtHxoxu7h",
  "key29": "v2VusvQmXcBogYQ7gY9ZfD6n83emHD3AjgYKNvA2SMp2K5wgVngy2spyvzB7pipRM72Yp43zoYss54svf2ww88w",
  "key30": "2EkhnzdBDaMM63tGHD6JgVi3xQXSqmdnNorraAq71Q4zoRkYsXegUSzm9eLVV15XxBjcwfTiy2wvyFy3TfVxhEFY",
  "key31": "24iugudhPpsPeVhyxdQNx8Cye1AzcZhWTdZACFzVEExEHo5Rwy9FshQhcCssYAj3Ay56bz9ubx1PEkJRjm8Nz2Fb",
  "key32": "64ngW9aYPwBWJNgbtcG8uoVn3XmunttCWJdWJ6FVKu4UFntpMpvVmo1GWq8NgaH8fiw9MdnARNAkEDhjxjytaBHU",
  "key33": "htseRNdMcKwD1gBMtRXNnwVvv1EVqKM7mks38ZomfhLxpyRWYtRWJqyhnsiWuzxQE6p5S6APrPhbPZwRoKqfjw7",
  "key34": "3EwACfUHrf9aEt6tyFu6279MmjFNqMrpKJEGjgiNrHkHhwthDr1dsoLQLihADxkpZVajHrUemoGreiYfiyPTmnis",
  "key35": "448z2oWxpDAjoB5hkjqKjiAGAKj4csL9PS2HzjGf2Hfgj1FXRvCicfNz1dTANfVvTaButV8SqwXMUbWLVD8ATt1M",
  "key36": "2bCCEMp8ibo4P5YEe1z5aquqZu2kDSV896vbzfaNoYCKsKsWkK2Xz5haHG57pVZ8Hfg8TPPi3guEESe5epyW7RHY",
  "key37": "5U5PWPYATu5nVdG2fLtgqfd7cDoTCQZZs7cv1Ed7nQWSRZZL8CjPHUKy8ei5YTmmL8QEaedQMHFtzJz3jJg3mE1c",
  "key38": "4txjPCziVQkY4dDd7bZhAseWmi99Y6FajyVXfiKWN1NeK4qsVxHjhyCvvjkwMNH84JJKzoxDshRprJwMyxx8UqGP"
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
