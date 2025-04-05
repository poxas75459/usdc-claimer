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
    "5W9nHeR3y4beaF9KzAhzCQRqX4ME9yyW6w88vA7dxhf1a9s3vZENrDkWzW72SnaB9B486PTqFApyZLSjqrchfJH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zYkDEQZsBmnRzq9UVhhKciUSCrEBWg3w49H3f3hD5wjiNVPP7vZSPfYJpHtX8R8X3UVpkXMrrDeZZkZcFgoEcT",
  "key1": "4NivKJb6if96yLia6xSL5DGezvXCZjjLhWJoFBN3MKZeDnv8ZH7upC33knca4b4cBTRyS9QaKnLaZvECGHzNvsWG",
  "key2": "2xH8K5WhK6k5oeYAMgom7QTZaLropFjNywUdGvxfLirQdHqkVqMDz1Sy1hmSB3rWrMgGf7MtL5f92t494pKHoHwB",
  "key3": "3NWX9W8gzM9oZmwfZzQbQ4U5XfXYhuaY5EgLQtCUXT5k2bxkQxLGYAWj29EgondvW5WKtMeRNCKgGbGz81iPXfhi",
  "key4": "3xPVzaHDhQpCSyThH8gvNJNsnKKMFC35HuKafPp62ahLtbjAnWsqPLZqnJZxVy3yg9s4AD4v1oQH2wZC5XP7FcSY",
  "key5": "xMwoK8LMvhhFTG4dVnoVdLSTpLVt2r4Ss9ypG9P34MZoJhgNKVLqtB99caC15FpdUD5mGjahaqUJWPpBhYMjkEZ",
  "key6": "3M7Z5m5phTL84v4L1edHizV7g94pqB8isE28dRwDtCyN6GXpVGC6iMKBWKyj3qop6S23YrdrLWKdjgPYpfhgZQm1",
  "key7": "4zuUQKFXan12MAuSEjLGgJLL9Yc7DSt7SM5ETXHczFY5VFEtHLiTKTTcX3gXmrh74U6bqY2NeSXpYbrT5jui3CEu",
  "key8": "3HxyowWLQL2pbMorC3bgfQUgHgNBE9zHy4d6b2V9FQqmND2xGgBASEpry5xNaazxvS878HEGKJeQRhJQpU8KUSgW",
  "key9": "PtKYtLjRShcjnduJfWd1yihEQ9oWi6KPfUHbEEhHNCBF2rPr1yWY8HxLrMSo5uZNKxXKJ2fx2xockfi5svv7EHc",
  "key10": "iQNPeTB1izXCSvP5j6hVkz7oUsutC8RF274GovFeqfDKTmXGr68aqBHJ9Pwdou24nsQEkjVWYpRbX82FkG6bH8D",
  "key11": "DAPU524AaSBf4M26tgWGXdFaX6SETetUpbNiG5CoNfDNSrAAw3QFKVktVSknnTjSK6Dtk8JWMzBzRZ2ocAAUUL8",
  "key12": "a3KBmFk9xQGK1h1drng6vBYhJAxcXCWehrBaAdZViw2oZLLo2V97Mxgjg3ACKqaj2zQ2VRvxxhspwoXG1No4WGM",
  "key13": "43C2wdwX4YFLC4obWj7syxSrQ4UvJQjUGMCfaJNtfZ5piJ9MuPgzVxygtEuRzxuoYAD2TorNq5czRLkSZoCwfdSL",
  "key14": "5zGFs1QUAdJan7hXB3MgCHU7HTFJiCoMm4ZDMWDPxqjZyZDmctky5tmAutninVCXGfZKtgPBecTQWYdXz3iQgtAQ",
  "key15": "22r7mpfXf629ZA4PnpUDyZXBSSMB3iwqbZ8crjBTZ61KMmBQ49DGBJaXJcCwGWotkya4kLy7uPucQCyvahYe53Gi",
  "key16": "34XwV7y9sqFo7a8tSa8YXVFrtd3YJgWvSs3XGNrg1jKQ4rX9APpiXGeiZkuSgoAMmgVEaZAenbqtonPrrs8jzmSY",
  "key17": "58PhB9vsPTFp3ymSa56rp8DbT5mDGyG3wgTf3EFZoBF98CjfKXHBEsbwooouaue31y7bsE2BUVErKscbMG2rGJC4",
  "key18": "3JvA1KCZzg3YMrevvjTfrg2oP5ZUNwDmXbPJQu835MV5BtEeYUSPspejzt8ewxNttGhMxRKBirLkPXHkHErPw11H",
  "key19": "2zJn76ivJCcch6htxyBeMkiCGUSgt9sn4S94gpGroifF9hrY9kLcXunQyK1xRN1sPofCYwQbQVCXHNWKTuYk4uMg",
  "key20": "2SJJveLiN9UPKp4kuF9RjEGH9XRHdrswWbvYPWaWc4pJHieWB14FRHoKvJ8o6Q8u8aN3j2UkJCV9HEQVkYkAhUeu",
  "key21": "5bmr6zqk9ngoUHBUvKFP1stTJwo7gnKQTF11jTq3SpM8ELjBR2yoYyhnr5ZAkw15SzhVb9KjKGPuzGuHoruRF9Nk",
  "key22": "nZmpGJoMbze4aWVjTTjBRQP6oDfBEsEgtQXsY6fixs5NXnMPQC2pw1UuHe4GkcesY9abhmPbLmFhfCfBK2vkhed",
  "key23": "4mabQBqZKsFyi3W5WDRTgrWF57mrAHezgWEhQi3uuJCKwFMnAc491ZYFzNFK2oyh6Knj3w6BFXoLZZ2yFL3cs3Xu",
  "key24": "4BcaYLB58qn2CDsfeY4jP72DRfgbEqf6JoBKirZUMmPiBnBpVg9E7VYxAHjJTYwaGG65icgJKeyQsA7CSkmR42SP",
  "key25": "5f61ExbpVNiStBWcNAxLfCZ25eQ6H8LsqqY9PSn5JYWBWsFALGeXs4DZnsLQ1VcHHmYQrUqVSTqbSKW2QpeH9kVS",
  "key26": "3qCxuAzCgVrDEC8an6pNeRTFr7vWKa3xQyxrufTYoop2UWiWEA14Qwc5axFJNDHHf42wdqgbuo9S7qS3F2NfPu8M",
  "key27": "2AjtcSgVecuk6M9M4d1tfAtfJrQsG6gmd2qvi7x2AWXe3ZXymi1trkpzMqxgtUmxnGAWbZwUVRhggWrofbETqsNz",
  "key28": "SJYQL7FmEzQyjWdwjJrYk49Jqepj4i3M4piLVBpC1KN155Ac3zkYta1ueqqoxaWV5wN8owRwr1YgTmC8ypwzKJe",
  "key29": "5XQZ2gZF1xonwZe5MxJT471MSc3TRLiw3RRx2nhwGZWZfwpT5pcgSQ96sWPY4fYoBCEWBwqoXPukVtHQH5CKsWUE"
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
