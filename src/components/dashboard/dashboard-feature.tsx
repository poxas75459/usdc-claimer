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
    "2B9iaDXaFZsziw2NzrbxX5wFRqukVQhADVa5GZaqioYTxAdUsWhwDfbahKg4UvjHWxX5JxnamAPKqTCPGyoJ4ChF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kx1MFfqGWGdVBHxQFNhKeBPiy1qr3b99W3GEwbjxsN5JgZMReBPfD9uuTFjZ1inA8FHBn45HfSyYiaqMMKG3WHB",
  "key1": "3FzrYV9gGKJNm6snmtw2qb54MC4eBbuJNYjeE5ZSWUHizwLHg1jevfrFBrSBDpTTktD2KK4zW4MSe2jHPcBzStQo",
  "key2": "4kPzKoMsEkJ1qB59GnM3hNDgdkE86Y6te8WgrsfGD8r4F3oHvvEpEd17Enosjcc8dC9WDetUYRETbFAdXVeZYvb4",
  "key3": "fSRJnNPvzKBcvkfcwFt2fB9pUf8FFpLhzQWU6ytvW519kH81v1KTppAjYtQqjuk4nH2JhCH2wXUvDk9D329WNoQ",
  "key4": "4AqBuFD378EriZabbVLb2ZVD8xR7oudSFbkRg6hbmaKHXr4D4Fn4TZPXwDLxhLeMBb6BTZ1oq7f26iqhLAMzNDe2",
  "key5": "JWbBH6VTPLpeSuXjzcYvXKm5NEED7g1du7EgKCuGaGqRwszd45uUVBmKocHvpjyk54H67CrcXepAJm6RFUNZjVp",
  "key6": "3AhBpTcheF4PvooxovzJTtkTYT589KMf8d6haTgLN7s9UX3XUKU5Q1jeLhkfG5i643Fua5Q9HSyD82nuuyiM6iRc",
  "key7": "2tkP769VszJH6kEhDGPWVPWHXtH5S4kzf4HVwqMjeLSRwJgtF9oz6x6uoG1AqLobwXQKpz4XYoDKLaXwCoo3Sezx",
  "key8": "Qceid3dr8Bh2eHZJ3hUFvE31tcML7obw3u1EeiBrexTq8qc8j3kXm7uCvTeGQsXJV8eKv7Gj5AXeURwGFJgsvZm",
  "key9": "2cFsKcGbtiAe9hr5jGqMVcbwsMMSmtmfGaRSUZ5EmuDBnUHszYYsNob9TLN8DvtDdShNPnW3qFsEi8GBzn3VvwUg",
  "key10": "8eqdLEtC6QaV6Rg5dDKoSAnBbfXnEQuW44pa6aj1djbCbsqbGirdvrcqhPrjuhN3C6AgriAgwBNVp1jihG29TK4",
  "key11": "4qaML7YA49jxgoJESRJ1JF2aK8Vwp1kT2Y1BVKZKbeYMZbzyb56Y5ssZquBPVQxHcDGsBarq3FZ7YnV6VRKxxMoE",
  "key12": "3gmhakVAARLCBvE2iZ7H8uLVhAS4wQHVdSsg45CFToZZvtuayxAYManEPPhmyHSad4Ff7Ki3arwrdnmfyYruPRGN",
  "key13": "5nEBMxejyQGQSEv2PC5oivs5rv3SvyGVQBTwwdJpWp23QdxPKrVebT1xdvPPM8h9FQ1XrEibrqu1w4HE6fVUdK3L",
  "key14": "5DGrYoAhgn9CSwzdgins58UF5gUann1CGWDNnCbmUGCX6v61iDfeGaE4sdKpmt4dydQTGH5MwRwtWUReGieA3A9Z",
  "key15": "63SoHjBDE8PAAFQRd28SfbW1743VtM3T33z2osLuG7REQQKwxJypEZACgKSTK87hsTEdmFqWMgjnT8g8GMBUziTL",
  "key16": "2X7QbWkHyJHiC39vKnbunezrpBuXiS5RRGttbx3paR5Tc2rw6ZcSB84E8JxQBaKjKDEATLschjTi7dQb5hmXrgQG",
  "key17": "2TLpmKxnP8dneY9EoAVRAFJdZ6oMxDfjgbM7PNBfV1WGCa1w8guMecHPBBf3QhUF3b4WEx7YvbsULKQJBmZ4McZr",
  "key18": "3a4rpZVs7jWmCNBYRSMjoNy9yaQELQJgGtc4WWa1yL48A6b2HXVLgwFVFQ5f7hdZPeFL6qTYwTm2EyaXgyTu6PCN",
  "key19": "GfQmUyuC4ZD8piocfSxzRQgnMdryJMZukHybQn74zGyXM4ZyojNZbZmmYmRSXoF5bFHWbNv3itGMB9feyMV7HXT",
  "key20": "5r9LEqnb9iR7pCPJ3Wp1ddNAdvvvQ7x8o7GTaa53gizuLQpVwFv8YXvHQVr74drskYB7Hjmvqe7wxboCFnqLUHyG",
  "key21": "3PffmLCdeozgXNFcxZXA1paq5YSY1HvaaiHtrBVCrnEqvfkjUEQMk9KESGeAkkABYB584fUix6yAfnSDAiwXSZv",
  "key22": "5cN8XHmDRBNp3bFD9wQ5PAMwDKKdCqbQNrJyieDAAjvTpmgtf2WJsagZ9xWrUvzX5FCqNEeb6qqWZ4mvyQZKyuse",
  "key23": "3f9wZitSAHpK2JCJXXCm268XtdThmeGNGRyxPrcaGW2rC7jGbSiaVnnaYgCLg4y96fNyfANsXTNPAf3UQSitVoSV",
  "key24": "21GmByZCkUxbD7D3tgKAKsJoK1ZZncgU2xjobpVVXYMAB7bWGcmiL4916Gvf6eGxe62n6VpmWaWk5o5R93K76gVt",
  "key25": "4HYqTTb2CY3z7N4GYrup8MHs3KV2ftZLeDEjvVw3qcBR8uSR2np9sHbwb8Q2a7KBuf3s2WHwSW7KCKHiS6hSpbyk",
  "key26": "66yzjJZjk6f58V1TuJTzKQ3J7zEx35QB9vLdU1vc42WVfCgDSWyMQLjpS4XA4A7SuSPLQdWWvQHpvdHxJEEqS5PY",
  "key27": "4rXi5hRwdd5WqZXdZhtaDTtUHuW3mKKToEChHKQkZMqGom2Ejuj1HjHLjG1BUKTXpwCZRZfNqzusVyTWpHqSTsXJ",
  "key28": "2kSknjUnWUpZwo4jJQczijQPgvxTwz3PWWhMi1wrgXZhNYi62Kd7abbkPxqTtwPHNbQnTnPQ9u88YCGSQhJ5K5ty",
  "key29": "5tZS3a6gxc5dAra13MfCUcSnc4eQ6g8MQjhMc2AZLhA6LoYgizVtHcKcHTGFCBYg5PLyR2D4vuhY2waua7wTbfJF",
  "key30": "5zEu3fG6B3a1v6TKUU65v3Qas8StPkaV6EB2WWbz4jzKWfv6XKeHXfqa5iYoQziRuDNrxMJ3rDj7TFiinhv4STzL",
  "key31": "kohxm5BX6a89oPqL3dodFfjMKH37pH7c1qCemqWyM2afdCHxwYmXMosFm5ywCFyBN5G32ru6QqujCRuBcLXsNhz",
  "key32": "2S1XiraM4rZRrxnhHaRUZNh8cKh3P94agRsm7dLnigGGZ5Kds4AbZuoBj66m24JQsmB116kJBcitbsmbJMwkFFch",
  "key33": "3Lu9pKbGMU1hrFiqBBmjvCNhSyoK5uZmxCQ2vSNvE45uvE1NBFa39wLNrj7qQvap6877zxwGeHABAAqBrj4je5wj",
  "key34": "38xeL1nJaGjYYwcsdzBFZQkcj5QshdnmakjBNWEtNhFMP7zYkCv2dyKwSyfSFPqa3druKgQa1mhoFpqWeLwtVv1y",
  "key35": "2oX21bwo7STWAPKsPsznNrYqQjorxt8jzWae7Q1B3n6s2LggcBb9uWRbxgUVhfLuE6fJ2UuQrcLEmoJ9hLS6tb1v",
  "key36": "hoMQ3BcPuVLEgqomFbSVtYNPGrjGzvHPjGDC4EaX4xijVVyPeJezZk1C7F8m6ML8yhzCw4jiHq2H1gxSYBrwdC6"
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
