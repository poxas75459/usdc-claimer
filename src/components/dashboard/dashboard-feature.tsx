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
    "4SnPUDeNHJJqx4aZhdysfEcvVujuJ4GAFgXr1Lf7B3txjRMa3S3aaSHbEQkUrzqKmaLrKjifqhchcpQaC2eqPLgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qjfiAcykz9z9SHiLXKsC37Y9HFPivtYPQUGyxwbMt5QWcEcq8DbLefXa19KSvKXaaEw6fUn1JXLqn8YBmL379gF",
  "key1": "RhRmYJ8Dxe6yBwqBibC7oo9d14DT6YH6a77khjQHLrwqkKfKtc8jKFrzTNEtHn9u3KLeGMfrmKjUv6GktZp2YNv",
  "key2": "4VhWZb5eMw9dAPhMTQD15K3QA2Xq5ZSsKHwdpSk2Ce6xARCbFkTk42xAWu8uhkCGwpyeFUtjUvmfhW1L3tvw92Nx",
  "key3": "2Fz6wgQdJrHVcg2TJDcqEcUkxAi9G3Bv8G7gztbEUz7LsnD42Jz4h8Kxxp5PUE3MXkbBUTVw7nijRxaqHBCGp16D",
  "key4": "4ndUGMvmZ49pVGVWCbBQakDNfSTeJBmN7iy1NuHdk32zrAnBx6TPnaMQQJKB2gRUamKVJxNZkcqXA4UVHGB1QQGX",
  "key5": "5v4RJJMc1WSSkATgY9Qa5r8kvtNUjvfvT2DCHYrvSC4XY46D2zKSMn4st3L5CZTzX93S8CiAyoHBdUaVrTqTjzYH",
  "key6": "5afHtgazEH2vkdMRwb58Ux3nwzzdB7G1NWwvMacYLkJ5dWUcxNYHsNCALBQPnZUMmju4tDS82M1gTM9k38eWzWdp",
  "key7": "2dbHRqxSo95pzUr4rugZLr8app5JuwJXiZUMTKBFom2WMHGY5kAvnThjvrZ78FWQJ5RRSRNQ9f9iMvRp3jnSdbMS",
  "key8": "5qGKMUf9yuZ19RSLWFpGPdQ5pxyKCtFp5mAvDPGxVJQCKaCfXTDhPu5BdAQttR6D9kjooKMCXP96JmF4wFypjWzx",
  "key9": "NjpmdynBbm4VfFWGsSK1rz7MasGp3Kv4xcqagPREvix49bxw3857nERKuFVzrchNS5No39oDgnnFE3ojsWf2i9V",
  "key10": "5aynv7psATgUN3YQVnLhfCgd6Fk4e3EQK3gPKZ5LVf8YWjxB78oyqb7y7uCeXBs1JGWf1tbV7tM8R51iynFAWAtW",
  "key11": "Bjpxr43Y62G9D5Wzu9ByHeQ6Hoxny3UJzFX78Ef1DkvPFQ1RrBQTqbCHynXuRoRqsaTPYFo4KbqBN68jhoLcxsS",
  "key12": "2ADDXkRscPCj7rEnesC97ihi9wXFjBH18Wh3qB8r3Xm4whC4rY3nShwepdAD2hDuT6c76YmZRwjMFfZM932mx9L3",
  "key13": "2x6hDHHRF66Xr7mhdLPauAbfyUUXcZ7gAomSTAUiE4oTStAkQYfe3W4xA8haU4wTD61mt62asC7Ue9vV2kXfmz7d",
  "key14": "21NbSdeLvqjKpFhJ1U8yNF6KEP3sQ1oPvPZY2y3GTwgAPTovJP4nvvT675FshnCK5LdKqYTRgk32h5qdcu7ZCkXH",
  "key15": "4gCJM9B66mNwFJhpXh1ubBWz3BNaEnf4Y6We9rmsXibLUyweg7as6L7WKmsY74TXSQNSYpJgygnMNNGHtYmpBuDG",
  "key16": "Ts1yQZQF49eCUPemtpJbaZvtkvjFBMbdme6dWY71VD13pMW7FnW5K9D2cGRYH8269HEpHVhj9wWrkyFpZrC34PP",
  "key17": "2wp8ZzL11pgkxGS257SYP4QwSLaxVZ3ZJDb9HgcN7QzHBVcqgRe3JJGQvjkQHuXE49gthcUdAwwa4gTgGzRUXs1A",
  "key18": "5W8MYYsw2G7pzpCwxMUMyM1dVL2ZUkrUP9ByqaW2q43PXEgPP7HP2yaVamqU6MmbbRvBBH3xysNQueyYKUcweQv3",
  "key19": "3sLYmMJQLU2Ucyva1aX2A1Z7hgrsV7x9wmHtnUYWRERdbeAXrtZXbZHRWwZufLqgDatTmJj4BWJULUS1A2ebdBKm",
  "key20": "3crRQTCd72eC4WRUdm1ja2eXhzFX3QyqhWRQLUhtrhTSSXtT9SeJ5rStUyHgHdMhdUCPn3RvVVRZ27BZpqEkknw3",
  "key21": "2Mac994EiejfsqznQnPY5ymT8kY7gZXPSZKjdg7cgTrrFoUccEJw5rjLGcsuN7ahHMKAk8abnnCeijNjVbAERhNX",
  "key22": "MbLP6WEXzuPUkW6bJHbKZ7unQbA9kuFFD9CyDydemgdcwvMKAjVzr5T5rioxiSsz33ZiWuUbn7hFCBn1rhhwm8R",
  "key23": "MUwweoH2LR7y2CQxeJEkb7PJ2Vg9CcHdkr5SBwnkyoCqNcordcS9jPv6AQsVwPJSZTFQg3iktHbcP37u3gDmFid",
  "key24": "SNg3usaxf74gKfkDTeMt9y7bFmPT5GxbRnssNKAu5MYS6C7NUbaxstKEYe22wZj31J1g3e41hSMbvZ82vj4GjKY",
  "key25": "BVqhYxgqepW5rKyn9uxKKGQZsS4KghRZvqkBwW3SWSozU53UbhfzXUR7LSjLTXLKnsgrkXW14avMBFgPnbvCpGQ",
  "key26": "4HD899Ym8b3kgYwpz2ZzqEgQqjzRm3u7ewvsF7e267cuTZVD8pv2mUsUxucqDz9btnvMqpasaAoTVE8AGkRHg2hg",
  "key27": "5fNMC8bgbyA6LvKFDBNXeENowvCp5ir3noqTpEztATSEQqSyDSXxMzYbqr1c5arsQFAZEX9xUWQWyr2s4s3V6JPD",
  "key28": "472M5taVRDnZX9W6ehpPcJ12ZXfqD6iyZ865kez2XvWNUGmYCyZGJ55jz6rUWQ9k9ZYWuzEbdmvT3CMkTDghNewb",
  "key29": "4kFwRNkJqJx66uVAabSZGvia78KxH7yFaWCrUsgZP73aiLR9SxqBMjaM292KF7VrcpvmgytfAqe2YiktRMdL4FYp"
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
