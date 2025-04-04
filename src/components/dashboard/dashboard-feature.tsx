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
    "3SPsG8tgbvhNt3CKoj1JviQGrJZjsqSyPbuRV3uJ2Zm9mBi3V1U9ChaZLS5WzjKH4sD7GYQDKEerXwsMW11xFoN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jUbT1DkaudzbhigjeK9quaruAAeYAxEPdZZQbsDnLKGKxgDgXMptKtck5tkQ2VK3TB5i3uxXZ5nUzZSdKpxQj6n",
  "key1": "25r3RxL4uRqxRvB9DhN2JmvahRDhzFjLfCZJTkRw84R2LBFJNVU1XufqicXy4N4Ynq2moAN6bnpEM7EuGrNwqBwn",
  "key2": "2MNP3tPHdUXMyLoV5Vgh2bTJaBRofNpsfoJ2EkXYkBDgj2yotqJJZ5MD8S7fhS2i4Gy5Z9kmBv6ekATJaKPTLxgh",
  "key3": "2j2XeZAoyRbg9qyFhFyJFE12uEMSjo3zLjSmaHdMr9PN6WyqVNaLsPPttRYVMUNmxNTfuvD56Y6LYd35FW6sbApS",
  "key4": "3EX4S3iykUeS3Y9bkoMzj8BgSW5vZ36V8gTszHM5FyriVUyA3JeZtKg893gR2Ejv2K8QZ64aLeKf6iY4VkM3uRo4",
  "key5": "3gXBLzH1AcZQao8VFep2WMUUkt4bYsvRtJgtHjbneeVLtTJdEPNoEC5mUq5bRfbTwrBVJ2zjG5zBDP37Fd7waLrA",
  "key6": "3jkAoDDaXfJj4N1zywJvDXYEi21c1drTBBacWdJkYvsnUaNGak6NPCvnKSEZrYtFzNw5zTEnG2TkzhxZsEbG71xi",
  "key7": "xVEJsy47ucHsbf97y1UxNKacLSwD8VRJyCg2B7wKb6RohNDZsMLnPA7JLQe3hXVokDZMtkzfqACyoAxiWjtKMWU",
  "key8": "Wn7tNyjsWHfXm9ATYw758uJR1u9v6fQUDrLkcZmvrqB5wrCSu5sWFEfeWuYFiEizYpYSR3gtegMSokohGh2J2Eu",
  "key9": "2yxKZoUbjWk9ZwWXZUaihKA88NhFQpWQa3ESDRYJwDTBB3tuL3MhgWdBj78Be7QbVYVWGoWqnnfQRmwt6zxqX78M",
  "key10": "5EWjgAwWCQ5sZwi3shVd1ns6ovSYpG95uZVLJEb7WHrjda5hPgg3Bvf9BTZshhJetkVxW7y7op9BLQVhx2szZYp9",
  "key11": "54SADsx7cr4dmRxsZyJzZ5xY2UMZTbw6qX1jBnqHb46bKBVvQWZugsGCV9B2Ea5EWnYCCqf2ggh94cZiT4AtSXnU",
  "key12": "LEjq3VC5bMog2vW4QkenRk7aLL1ooHZ991FfxQbadxdELkg61czjhGnhe4uMi1P5CwTURDw2S9EXDLTt7bU3bp5",
  "key13": "3xrzNoZNaYRaF3E8ZMddB7yw2NdNqXawY1wtSx6JLJkviTbgk3LQ6wTqdkiCcoZsuL47jZs4aGrHShGzQtzLbiAP",
  "key14": "5AuMTPZS349KwvWw4qkqsJnKfPf4omYz6ZPHEvAWq5pKqfH4wTUA3arFuG1rBSN7XjSLoBa1UTKsvUByUE2AL6w4",
  "key15": "qmRF4DWBKVtdGNqbSc3vQRVP9ZG9A6NTPrd9AzoEMs495XZmhwizL8NS7GxEZccJ1FRuXMMY4UnJ6gzsmks6H41",
  "key16": "42seW6x3t5EmCjCPh46AibNuomdSUDC1GTd2m7kXPGeydkmkDECeKk7LSu5RC2cyTHY13BxurmTAibVjCRbG2Ugc",
  "key17": "56w8ri9ncBS9RnJNkSBaQxYXHoFMRz2hH5TRR3v5taCQu5hF6UBdQ1yxHxuANMsvDtz129Hp4wkShwnhD9NHz1s1",
  "key18": "iGvuoVCdw4VvBbgiGsars9HSgxYR5qXVpTJJY6q5NQpQouFt4NT2hmBvAFb68RTS22NZFEwft3RRJAM1WtVxRGZ",
  "key19": "5xjKe5fuw8T9a8sTfR171tkUpRMB8xRNQWFsRr1hRZ2PWZDtgB4hBgj7YWjgYoLsvp4szczMkZ5b4ceiJa32YC9W",
  "key20": "3GSHffvhYYesctGjeApvHrKr9NPsRmJPxaZVFn9qKZz17Tc2ZbsTDrd2wbonnx6yU1aai9oepKgzKrycEF9VqeeC",
  "key21": "2D67u8T6zfsDjRjCdDYhHAS6CBGMfTJEUKNB7cmYEkaXtY1dVndtTRidoe7ps7GNyoT7kVjNwcwRXHJqZCsV1tLP",
  "key22": "3YLCMkhtQnUpSFTvDA24o1xb8B9hA3YSBpKDqTcTnRchmAoBy1aG2kxQFNjy7iTU2JuJmFE5ELfPgcx5wjbtCZKv",
  "key23": "3crSx37c9tVPEx1p5CAdnD2RJqpNfWbJP3qazfYHYHmz2y1dGE4vTcyR9g76dX1bikQqtjyKvGwhLMHeDqXrXJty",
  "key24": "5GQYwPhdLwNLVUJZgsRSZoZ7Kgv532nEkrP82jxLYUNguMs4R2vVJLiKrPB3SgsgYmUWkSKTdXqyMYx3rFoRKfqz",
  "key25": "3W6MwPYNufhKqBDqC5ArkVL7LbJ1gWAoUKsDoKsAaBw9WhkdnvxToe7rEVYmDWHqAA5X7k9L3tg9tn8tYkWnnbHb",
  "key26": "4g4R8aiPMeuVkdvQJRYiKwC2EJedetgKsXe4FEjRrVMg6yMomaC58xp3tHp1sUNc412Z13ugEe5UY6vu5zsdAoeL",
  "key27": "LbR3SQ7cTK3R4WfpJhzFpfaC3h2457SES7oxcef5hWAjNFoFhQHUHEU7XQDthDaYfxzr6TsPSRA4bFYMwq92isR",
  "key28": "5CFGPEaMzYfGn1cqKWC8HyR8WZggrGnHTg62USusvmrEAGuXkhJh1mDNkmRBRRwVGiXqPgoMRVBVmf1FN3JFeWQ9",
  "key29": "5tBhfwSTEnBmtXzz8czyVnbcHyQzqHQwNQ3veXRM5PtaqzuzUKJWMR5ADAXEqjgFeMLSbUBBUGY9BB3c2NMgGPzV",
  "key30": "5aof88z4MqR5yyxMGqfqKSgyavrASh2g8V6jL3sJtWtoTtqT67KptUoZZhQhQ2cVCwEW98dnALw87v9kd5SNop3U",
  "key31": "wUaA3voM9AeR2oBEqQye5QubSv3GZ7NtxqFtrCq6Sjhsr3DkX5NEE99oRUhHUDHkRjaKQu9Lg1FnkfDw2HNFgrT",
  "key32": "4zgF5DVaTFukJs76kBL5obuKCa6hqVSweYreaapMK7Q7o8MTsHmK9Tw1V8hkbtsLXGqkSGjYS9XJxgFh2jZMSK2X",
  "key33": "5GC1W1ktqHSaenUJKSdTiy3wQWghFpCQL6j2NdZYqhUSz4e5VxSjveoCzMiCi4RxCV3SANWLqpJm5PRwrAiM8MkD"
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
