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
    "znBKQhCBesC2hbdJgcAvLgddZ1geCXCzz98jZ6hkcqXB5ZKZVCgHKpc2mRbLSVsZANvqX3U4R61FoW46bxCFpZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z2UpWkTxakoNVL9XJr5ZAg4QXuVnhEmGqajAaJq9wjfaH8Wf2PLKjjWyT3Shk9tmoaXsBUbsZziWNyEuntwRhbf",
  "key1": "gevg1TPyNUmgVx21ySPm7jpHaYFDtnPSwvtY4e6oxmG7adZEau2qusC6NjvihigcC8cQRybTwoU7zp31ScxoSuu",
  "key2": "49xKKVc6bxuZjesSkjA6TCNzkgzWP2DqpFnBpYeXM9ui6qaZSNiVgBy9nVxSNcS7FNHsnvpVCeTUeUabw5VoD1Yr",
  "key3": "67PNwPUtikJxF3pCzYeg16Wg7F166VvN7r3EzgRKLnP6E5tSjooDAvhQsKqY78ihdBTUGjWmPyz7kDF4VdUEgrYN",
  "key4": "5pugSn9AbmddMJmgR1ZuMzjTrzEq223ww2oHTVJFfaf4CMPQdbDSNFLoxnXEYxinX3f1nbbjGe8xeJ6vDwhLQr39",
  "key5": "SxEaEZ8aksB8hgykyfWCWvVmwPmGtHGHFgMD46n5UsRcLTfoKXA7pzYb5gN37vATtomRKbWEMfjjE3VTfr9usBZ",
  "key6": "63tqa1tfcHZtZS9bbASoPtZ3xYPz6oKWNCRSsV3vYj8ZxiUXF4mdtLCaKoinpETb9pX2yFZ7RRmr5BL2Bkizwz6K",
  "key7": "5d5B6nwTLYGGYEymnm8LmsNa1FoGjmRjeN3yiaopcAXZrRHVfiRq6XS373D5jC45bsmcRnZspVUD6Z6w6aNxJjpU",
  "key8": "Qp2eeP3rzAKMSduohrXnc6ucQQKdiUVkYSAuTYysW79K5BFpbhM9vM3VQjXWNSTWxUj8B1C7LZBN1ZdCtc8VXYo",
  "key9": "1mYStTXFDdnVPvZrSxPp9ZT3FkUKQ4crhoPgDxugBPPou2B3ytPKUZSGwaXLyVj2D9kw9ZFFvDba8g3tJkArNBV",
  "key10": "5SuFa3kmRcRTFNQyME3deXnDHF1knURTQxm42XaxYecaHVk6CfqDwfp5VkfzTJLSHon8vCKYmuVExCTYABRoW8ME",
  "key11": "5jhNYCxvYja9TFvuLSKmpeaYwt6Rm2XiJ5FqhpqhiLYra7ev7wwDMdrc5n8gZAcuaAQnExj3LJ714hAA2P2xxpTu",
  "key12": "YV8ps1VSvpo7jYwdgxn3FyBHxnJEksG8oyf6bFYjv66gYu6KhQCkHHP2MUfaJG7bZg2m3p3mcrrZd7QpkTAH175",
  "key13": "2yxPAWGwQnHS47zrPq7FPdCFnP8qzgtobSiVXZekKWBYfSKLthcVZBJpttjvbXDjHDx7b3brDtGDf52WiPYqfSdF",
  "key14": "P5oU31psZAdfNZwdiJU6Qobs2Dy7NLBzSbY6im77YzZwHX5YooZbGDcbJDj4GuiH8FyynW5f8WEAq3ixdF5S3ZH",
  "key15": "3my5duvJXXAQ6xvrVxEaMf9mUbQ3saRYdPqm3QNZtLFrm4Xu14NQDRrYNPxGXS5wgDvsgSzMsYuXGW1Cc6a2Ti1Z",
  "key16": "2aGneNwXm8xd1TyeU7jD8GBzXnqGSjJVcehw532LkxN37PRCJjpEVawfxMuZJesR5TcM8HhQWjhR8AYnbNbjEBLm",
  "key17": "3TnyutHBnD8P7Sbm7ixKwFYrj9ikVXWiHyCsTQ1fZ1Ljdz2urMjMqv2qYqLA5c8i4X6uXExUjSfZAJimQcEdSwTQ",
  "key18": "3VwyEikpjQ3fdbAaSGPuyd9iPRdz7iv8f13BvJxCeXEbGY9vpFJ3c8KG5UJzo9LLma1HzeU1pYHryPmunBX52Mvr",
  "key19": "2z98KKSHAjPj6ZG8eX6MPPSL2mJ86uynszrXkpX7fvHdnTJ6y8EVEVybXePBR5obzVZDcJRuVjBksHx9f7mrFrkb",
  "key20": "4ySeo2UvLySAtMPVZsLwoarn1BNd5EzwYj89RALMU7rSKE3DghJo3UKJbKF4zCXgUgxUXnnCv8wF35F39zxNonWm",
  "key21": "5QhreZddrGitYKvVjAiydUb81LHkiuWWi6ZEzPhtZJXcxjyaDuLk9NbPta9A9PrUdeDmux9F5ccHtuMHRNkoXwDz",
  "key22": "3eAX4VfEKdBE7khiMapP4q2jEHAKRqecvWoVi3Nu3xNMX6ewHhDvQa3RDiyjhdPEwDJbra8LDwtH5SnkuDXfeHvy",
  "key23": "2ZiaDdqm4m9WoAuuTJ7Y9nxisJHs6JHyuBMnzDUJqLwCG8QAX8FZFYtk66XTX72wWDtvsTW95ypdp9gStR358Kqt",
  "key24": "4DJ1qyf3EG42tAygXr7mFZbC72rdxwRJNZWiuDPJeYJpqkGmsasrU4QQyoJzdYr7qJiqZ5Kbe3nAVuDRjgJHqdJW",
  "key25": "2zTVxCSrdCQiTXvHEnMPWePbfGhPYYE9Ph49ipRCfn7mvjMgmuJHEtcPbzu7eVabEGHtSC9yZXA4s8iozLz7f2D8",
  "key26": "5Yrz6W8Vze39HPa89fi4E8uJrEjNH2DHEZrR5JoT1op1654BoiRTKF5PwWndYmF7ka7GvJBKsb7PSMPgQnQZRavK",
  "key27": "35ZHJgH3CekaGfwMwS4kGFFjb7hXcT8uQPYFogbk3bJQxyfwJpp7TyLqV2NxEFofLBkRrCcq4N8g8uhhEpBaVA3V",
  "key28": "5wR2ygXqDBvd1rLN4ZdEpuSCgpQeZuSLuZj8LfUWYeksQtSsXewgvUrH1CpKSFzXW8mpPizKR2jK3Gvetp6au4Wq",
  "key29": "2F3NfxSpAEqQFkiPC3bzRdE5ytUABAK3XghUxmYGfegvAF1Z7yjteWXHtmrfs9e6GprdCZA4HdGvYSUArNSYYjmn",
  "key30": "5p7RtnU6sfWKNbMxGHNFDTA8Q1jvoMSFEi4mq4smRVAqJVQJH42gBGhWKs4wWf4fkpn3HEGPyvVr6mvssTxfuWTt",
  "key31": "P1tiFQDYjjaRSavxMhsH3jD7wyDuqFCh2gKVBK4a7TMyZzzsAvQ9LCoKHoZc397kVDGcYTt9ZZrnaVKozs35W7Y",
  "key32": "45rubMAL9vhb8Fv9zGqKb3cAec133vqP4uxurh7AWGtwJW56ZQwNkuPue3Zdnpsfk3kcPtCz2797SfNsf6s2avAP",
  "key33": "NEiSjLKWZRFw3Tyseb7gNd6iebz4Z7zzxdHBNu972hfCYYhHpRyfsF9mVLvCbEnm4XyxkUizAqqaH7oxVN4E5ha",
  "key34": "o1KXD8VQ2ShjwT8aHngL3ZmHNCY1koEopzivS8mFi1bWgJWiVoXDbMW2Qkd8oMjbH8eexndg4wRSTrohexkk8mn",
  "key35": "2CS5NKWe5Ddq9TAagyuwE1iZyevzzxAgf2dNnXp7j3SPVrdoyEut1Xi6yRtvG5k3NEfv8kYk918GDxGRhXwuMxWB"
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
