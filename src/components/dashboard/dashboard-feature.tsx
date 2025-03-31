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
    "UVygqqKei5wJ58U33Q1iQSiHEmUKVmGxaCUaZ7tZW2P3msWeeJmzLmfKoJAPkvF1LC6V6cz3ubt5Ae86DnsGdEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39x1a76CyTAPdKR6R6hL1PwQuLPYcuzbnQDQBHjt3TTq4DqrjS3CHGLsMc2uwAWukR4aRnTLAoUWeRw68cxWM7a9",
  "key1": "3Bq5po3xhbpnMsSQCMxm7dEnGJqHgUaXQdMA3n9pkEDTSBQ7J9hmkMc9i2HW4sLSp3pA2Y9oghHzY77k1UdiyhHM",
  "key2": "4f4E7AaTqDeCZM4NZfsN9UbN3sJJMLkUR73eccV9k5NVtaxA6D16yNmZZfoki1KttkUFo3vvgC13ZWi7tBE9rxXm",
  "key3": "2sDk4tTZAAaec9L5BQvgUyd4UZj8TCZn82rJJuVVfKZZAFprJfiskowHcGJBQfoB5YMqLWCq9A2LEr1TFvSjp66P",
  "key4": "3LBBkCkuax6WsQPMayewHhhYdZ5jJHm6Kc2tLw1YKzWUWgcgx2zTqv7pu6PU8uwKcu3GmQbnRZ6W3kX52QdeWyh6",
  "key5": "65B6wVwKHKjNqvWNa1eBoZVR7776R1MpTJMhGARR7Z1fTZz3rofdMARpcRc5rQXqDQHi6q8SYRqeamewXaDM8P8B",
  "key6": "3MJzNfBnQSYaqB5VoeqMx9KiKZi9RffCbcAbpJmJFRg3buQZpc1goXDnRAVruW5wEHk7bohAnHR9nNzchPTewfVc",
  "key7": "2Hb7CDUrJckG7pnTF2eWjnqxhUJ4u8HaShGUwRWTbiZsBkwvxJCsNEn3ATnRa17sVL1mimfUryvaZTBqK8xdmeF4",
  "key8": "4LsHXdZURqt1NTkkVJq1pLWiKJxgVjfWedQnuGQMbApHSPN7xeqkiFm7BreRvb1eVfuKfN1mG3vuQTbi78W5kpVf",
  "key9": "65joFMHEtV2uLYN4iokby5ywLWQqmn3PqQ2ddGfefzvjdWu8hEHWhYA75qwU8UGfH5gEBh2Ey8zTpYwF1Zz4qU4E",
  "key10": "3X6tRyA6n3VR2D2x1xAL4fMK8nx4LZJMck1oN634qNaU2oxmbAzNXGrMtEnhgayTFVUkeNgUmCAYvyVGC6XJ8DQ3",
  "key11": "gVoT2qUaffEtUZvfN9msWfv6ERMXLfbZkFA8KX3eQ8wJFpyMTMuonHMktqAYF19tqtaus5f76Sh7yi6vGDRNxRF",
  "key12": "zhfsBzquhpbasbE4skFUQLhJqcQnbENjsPoL8i7sppyCpKoyjpJf6dT4uL72SQ6BJGRRCg7ekjL3G9Ps6eptmwf",
  "key13": "5fyS25bUkw99gxn1YcBKgLQo72BdmswvWPfANqvyw3zTGmeHpSGkCSc1RRzqVBZWy4LBFfga5cyA99ND83G377s1",
  "key14": "59DaCG8NJPMR5DEWko7DfbchdkDoUBQv6YFLzPmq9Me5NuMtSUB4Kva5Wvo2KGP3qE887d9sAnMDkpvRUzaptMBh",
  "key15": "57Rf6AxV4ybg3qswQF5NW6DWn7BSzDiHFadC2zsyM7fWtKVKKmc8ShSuWTYj9nLeU33NYmmTM9Xzpt4XqEB5BQo6",
  "key16": "5JTEfTVVx9cPbysuwkea1t5jD5UYjxdU6x6jnchT7mLqvHJSg1v3uXNrL7KVQHCLRZSHvpPuBEJZNGHmYNzzDbLc",
  "key17": "35NpBexjZWBSYPW3TzR6C6fY6dY7dJV7tLF7eHAJJzu1N3Q1mrA5cUt6w1fExKzRTep6DqZiVB9AmiBod13XX4A2",
  "key18": "3b8afR9vsPGxLvFHMqyW3NXUgYAaJcfofD5iEyp1bvDHbDMaduTCFiDRHUNbVnFwKFy5LsaSy84UgGEmtqAsBAu2",
  "key19": "5ark3X2ypYnU2rHD2bsTWSuXe8Wza2EEbhpMhRZMpXn5vpQwnShtFojEmx1hxttYJTjdzhbTFQhRXjUPGTiS9Aoq",
  "key20": "5R1mcUERvkTVeJMcG58jZdvgKo9E5doCvC6s4HFTr2rR4KuNCwRSG57SEu18WD1ZGq5oX4jd495TVEQ4rJYDY6Vr",
  "key21": "2JvnfN1pCrWkrvoqbpqaxoEKETqDzT85LARHo1mYcL9Vfid3R4VgyGMF6ZwWZ7yhNNN1ECAUudxmKE3ZoJgCu3e6",
  "key22": "5C1YVytJEJ7Bjzn1HfjN5pZ2THzCqg5sRcsJXbg8zxJ6YSEhVsp3WczS7LF4KrKiuS6dfPxsp7MYvaZjdsUYYHML",
  "key23": "2YTGdVXJqo2qhzJF5hByDfWLfHij9gfn9FxWTE11x8N7VZC93CU7YTeASe1kPMxEBA6rB8491vaL34yBZG3Cbhw5",
  "key24": "4pvivgypwVCBsGXuvhMP1fvWHWH2YHcGyuAtyytze9hEmAanVBEqVZ9XKQTmPcV6sUEGq1VuvnGqoKBySJN4Fbi4",
  "key25": "2CKjgFGDQrk2NfxafKfBpiqmBMH9jQa46H8wsQt98QrSyfJ7UmrwbcSAsT46Aftqk8EdM7zVLH4XaLNfiuxKhp3D",
  "key26": "39cNxGeN8Z4SCsML2w8CW3duYUhkv7u6ZTF91sHTVTZu5zHrCi4Q3CRDu87BcCeu7y7AQXz4QK9ex5VnnB5RpwrR",
  "key27": "4ZcNUCsMkf5tbzA3osDB93GXyntKtHQ4E1B4mu2Tdfufr4fxrveuuJCSAhpVRXdTYsrAaSTuRzinHpdeRSfM3MeQ",
  "key28": "59Cs7xZvMczox5t3bLayysQ5v8PqmSQFpmpWJimER2qrziJmiz5booDN6CR35fZ3jmZTH4dD8RqvfzjjHhCbkkUq",
  "key29": "eS8Mh4KnPR26gzN3isi1RkwxYUdjeGjZrshM5EKRZMTdJTf6bD8TEKQv7rRRLxEG4xEMX1S4PhQGhLtieM7ppMJ",
  "key30": "5uvsi1pHarHs6yhVWh73KDjwFqs3LfVUK2nCmk8YsapHnRze2h1RT8sRaVr95H3AwHvMKCtyL7G1Z8HykQtphYU9",
  "key31": "3zEQ6nuNjeUL6Gyjy1why7dtdLrngytBrCdj6JjwXeJw6Quq6eGfqRUt8MQdEAwDqyf9FaNU3ZGXKqFiMWxLPVEL",
  "key32": "4ByGKiytHQMxWrCF2W6S64ZBK1n15dNURcZzL9KnP7hYbLVGbZrobR4ZY3CfiuevrenhLtbcPf7BEo2vg8LKc1Mc",
  "key33": "7dDiKqKPes67kaUyDjjuxYKnQ1VPyJkjxHwhCEEozWRMVX2d9LTRK4c4PtxLXLazjNtYvsYrz1o8J1Px1CJ2vFT",
  "key34": "52jDk4DzyuYsNryGaKYeY5483PX86UjRNFtZrKjDfFELT3M6aXyeCegJqo1KqbUj441Jr3vXfjHWu5a9aKamGdf1",
  "key35": "4Pn419mDYFDMgPusSxHh6qgo7KrGTN8zAMxpuk316pY4gvUevKBQMsWSR5vNLuz4LmCKtpnUB71zGVnJWyAh8Gks",
  "key36": "4uW9XjGcoCahDLcTunAPqvz1RizSksQECQs6MagPHAbr6WtY16KTwsrLo5pzBcXmjFiMUWQyyH2yESEUynXQQKxT",
  "key37": "4VnfYGkdeEPnj82RUSpYGTeGBXfmnTQ6AHBaqA6GVYbxTGmLCRzEGXURyhRBMDnyJjRzsrwAAWj4fXZ8ahhSwF8n",
  "key38": "2AUNyDttf11hkhZDnwWTN88yEmX9zmKSD9VjxfjiUCbR7wyMF978zUCaB5DreUWvY1aoXAtyF9MfFpCVCVQExzpG",
  "key39": "47cwuEyJTTUa7RU9cYcu7EqmhcozGoptNnbmvpBGLYz8FYnPjTLVAazifXvEDamofsqUQK9Nj8sjPUgqCu8wpVVs"
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
