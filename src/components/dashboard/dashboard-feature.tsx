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
    "3KpxXjfKLkH4zbwBg7Xu1QeQ1gYYHDE5wjm2fRwUPbTFxrF8kCVi3BKRLK32ZAwt36AovAaHX6jMbkYwVZqKW4cU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KrZNkDZ62tGVAGWmAy5ZhCR3wQ6u57xSSfhBRJJs9aW3hvM6NGCwsyeWiRcoWrey1qzU63NycnmTdfN1VrnUXpN",
  "key1": "56c2gygjQ1Xb65q8onv4s98N2WhSai2S8NDBsPn84KtSMiWDerHHFQR8CKv2BgPuXkAZxhXGrECChhFQmTGmCCBc",
  "key2": "5rv9Z6sjoRWVjt7B7VejDv1zaBQ1ztwyRYYsFzzG2h9EA7iE9ndWvy7j9s7qrDacFi4sS3oiGLM7fbjscKWjbK3W",
  "key3": "3Wxaw7sVsuvkNxSYgBuZ2dUp6aeW5Kkw1X9xWuzZ9ZQNpNdu4jCjyAxyGfYKQ9g1oCjhwvJAwxRbKLG23aZMK74Y",
  "key4": "BikH3WbTL6kEgYxeRFX2PLYeWNtHYRwANuh7fgPoXBXCPCWQ62bZQ8RxMajCLR5ciPXHGmZ3hNyfX2F6EYwnESd",
  "key5": "2gH5xvA6J1jaq61jY9Y2PsPS4U1CktcDnRR7Bf4hpUJoTUWHDEd4FTNn4opmsjR5VxQBFXhvQDW2TGrY9FCasUJN",
  "key6": "4k3jVbpQ1xvmjzZh9SKPUysb65r5QL3r5ucMBybQa1jeTLXDeNuiM6Yq8nxTrnfCt8NqxvV7qzVwfvtRJCvTkbWs",
  "key7": "4BraJAnMCnvwzWzPzJp22i9xhw22vC9DHSA9dzUsZHVrS7JiqsS33oLUzUF4zW9JoEQtBzoiZjvjXcGVcCGNniEu",
  "key8": "3MtmTUpagE53Uyz3QuN3pZmrp19r9obMBH3U7f7C8DWy7so2F6FSUjNqvvrJ3iYajVbwkeKwrpb1JZphLhxBdcCG",
  "key9": "zRYoG8Mp572WMZ8WjVnPw8bD9Ppu8nFfSUcyMHVNjHdsY4jBdv9mzAcgkHzcyGZzE5Zh3WhpnxEZJv1qWwQ8bct",
  "key10": "HcjhUB842ucJddwrdWxrXfxvgpAPE2hPYKdDNyCEPmjvzT8vpk9LT2zECSGH3JpBQaf4p7TmhmvSrGKPd8ZXA4y",
  "key11": "3gAnRwHAJyhFkeRnfB2RyJa8VkoY8iGrHunAuT47ZPR3qSSz2hjYFy3RPZUwHWjf1k7rTNKmR3YKezhc5QDB1guH",
  "key12": "UqxZL3CsEECZpivEHcTnQaNeXGWnBYB2q2wNVt24H6FJqLBDkBi8u1TwA1KH53eHMF9ozNS4qWE2wyTMzZmzmb3",
  "key13": "sdTR9AqZnWhdaRBtCnr86kENR9hCErZMmFdLTHhcYALRPHAmVnfoLKbNiBa6s2wfqLgzzZ9iDQYRiLNiWG5zHdQ",
  "key14": "aa8Jtc1iqm82E7XHmKJGRjcKUQufmTz47mZcVoLQaX7GFxwBu37tGoqR81QDrz6J6CGxt8XXnTp4TKY4BpeU6bp",
  "key15": "2hqJWJxwziFxG7vjhGkiZBiy8rheq3UPJRq3APKrSUbMz86tTL6tZUvtr7fkSwmMV53nyiPzn3fsx6fxzWymgEKs",
  "key16": "TDwqA1JEvstKn1kNrQWzDhs2Luu4JVFEQbQasVZNqpDEGNdBh2JvrisdM1ZgZQJJCkVQFYZ88kBqACkczrwQ9Kp",
  "key17": "2ZA4zeQNiQwaLMBmhyav1UgV1Z7JuMjGWyVztNL1aZu8fPCLyDCoQM9o4JLrh7EzbemXjmg6r81QER2bJHnM59BF",
  "key18": "2eVm1Qoc4Yc3oLkXagLHzehTXncTjXKhAWhkcKCeUE5GQfUWzLpUaJ3LJbnWJD5n53qEX8yR2f15E6EXEjdVdsrD",
  "key19": "5WQ66mZ3R5EopvifUh5qt9JFUQdmhwzKU6sJcJLmsXKj2pnKE1A465LyyLa7xsKagwAyH9u4PnGZfjLkX3BZyrry",
  "key20": "2YBDYn2uAJjw5GHhU15EBpa66c7fzM4ztH9GDmzm6DUR7jHFsxJ7no47iLHiXpRJmZFj1e1o99TZwkjXnetEya28",
  "key21": "5enDYRxfupCnsWZnbrENuwrGaxjqdSkYMV8CFmoCj6oBBTbXufGqtb9SrB8P6MMQgYUC2KcrDXAuLz9E4iWN2eNj",
  "key22": "9EApMeL8MqUandEu9ixpvKk2SAMf3HCDkpvsSyUCVnkxaRwa9JixpLMXJsfNVf6W5HCaz6e2n1Q8VCSJmW3YxVG",
  "key23": "48BZLCEq7p9EfJS7XiKv5M1kJo88GgqXf8tqqbVXkQS8G9M2x7mvyw13inRpHLSsLoztmor6ymFvxSShqy5UBNS2",
  "key24": "3uqjCuLJTbiy6B2LCpLWjsHczR2jdyk5ReX2KsFpkxrb1hSuBnqgwjg8wX8A522bgVK4q8NpPssukiytoyo3ftcg",
  "key25": "3Zojs1fvoqYHVYuHzacKUcaQGVmZfRJ79FML9WLqXQDa9UPARnEjaiXGQmrqLBYZ6hGRGjRHqiLsVjQmFEkEgduD",
  "key26": "5EaCz7VhPZNakFSB5WxzBE5jHo8dw2XzFHb4GX5qc59A5uvqMeJbVFzPjLadVXoT6RQWj6BwaSTkBj6LFLVxR84R"
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
