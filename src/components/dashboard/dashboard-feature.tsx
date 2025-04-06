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
    "2eX5PjVTzNzsocL8Z4Z4BD7MnFUWEHobQ4UfyouvP5DHorjMGLi6Pro2Hs3JJXUVP1KzsQAHbayWvRwZroEUxeAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xmCXrmYSaE67YDE6svj5E6PTBsTMRwQi5WnHchEnw8H8jJJYpGMFSePmjYVT3GWagXpXuEx6Vr76SVgMFGwuPwm",
  "key1": "3S1mhQYTQxrATL3bC7sKGcyT14tN7c5RWetpHdi8aFWgnV5uRdimfSLGfM92XGoDRxKQkh2kLJ15xs6FA8iCLAg7",
  "key2": "65NAypmH5zUH6YMuBUmDVrC3JwsjDYu35XovvnYMxXWyhJWL1B7sHZeJy92aoY1W56Lv3A6HiiUJUUtTJU4aGM39",
  "key3": "4GxsvA9nByixBcuSqrU5SgtGh1EXbeZJ5bNQVqkP6NMjotCuGTgomaDkTFd2R2kz6QAXqGQezugKP5bXdtfu4s6X",
  "key4": "62e7BcwUQRKme54zTJp4cRod9EWEHsAG8EFeSoW9HKBFr6PnNMQ9vy3JHZKQoHYkq3fAzY9dUg7Fv7GDAhWPQam3",
  "key5": "4naUnnjtSYRv8xuHFG7bqw6chDPJ4emYMs4gMXCUxjt2iFBsAVHQf8gsNfXv4rU3T6B73Gk744U4WFi65AcogiYa",
  "key6": "2nxmzjyJy6LQp7YQVqo2YrTjjtEtLqWwbfTfBKyaWxLBjdVntYh8d97zHaXF7tRShwAyEcLwtTwLJFHGjCTutWBg",
  "key7": "4EjJSsfyMRD6nFnw4xYpD6vTjL8vXW3Yr6AE77KhrRDj5XV36rofSAUAjFp8Hg5XbKCFiXQ1JUmQupRq8ej7opzk",
  "key8": "4ckDZHo8suC5eMA1QrWZyhKTKYKqmsBndYuLVaw24fPvGYgyaGnqxVV1xZBRFy6azufCmPLY7eGvbSLJepVANcEJ",
  "key9": "2uD7h9FjBT5FtzEdQpDTUscfqv3U86KtLv1ajH6HX8oB7mWvffzGCUQ2EtZriBD4RdMasK9V76c5Ecu4hw9JUUwX",
  "key10": "5F9faG71AaErNSo8ATUf1ch14k3v9AfExLhKjX7xDjyBXkTyMp38bvsBoRiChXeLTh2Dy7hV74ekcYhsKN8GugCH",
  "key11": "5zK2eqZtvspWPv5HjCNPXc2SQUuzi3p9zMrw9E45ia8L1uDfaNirFsJtvZWb7mjyuojDfchJ2wj6PjtbsK49oDu6",
  "key12": "2zNWKYvYicwaCh7WARnC2iMG6BTy688fBb9yHV8yCQLH9eAFPp5UjfkfQ1FhsV2ReCxqReHKNBSS8RC7Q3RGPTQY",
  "key13": "6wrbtGZhPHWFFyuStdZu27aPcQnisQUya97eKWaoSjokTiZLKD1QjEyWSP5CKV3Swi9N1mpij7jXXiijkZ7EpDz",
  "key14": "491KmamwR3wNoGe4t2V6jaYgCbNYsxBkC8A2KZMbyEWzv8KBfP8NczBMtN12iUErzRLfreMmUsMFxSX6psVtZbSP",
  "key15": "4B9XDbwHjNhmRpJQHZ8q5XMK6MtLy3LsK8grmgqQv6RCxDuSiXqTLH4PwjhQG96ADpdUs7VxbTekptibDxFKoQs",
  "key16": "CbkAzQ784CgxHme4tje17g1h52uhVegA4oRyQNvXPYwe4gVj2aVKfGfbcak1gmWiFvJyoZvHUKUVyMThmyVL2kH",
  "key17": "2xTdXRkpJeYL7wN7KzVJC3EKeAnU2ewqqUL5QKvP5vzakmFByRqxU7fGNSXqgT6VbkcVkZiVz8HXaSWqZf4UntFV",
  "key18": "2kqmDvPVdxxbnak1qN26EqA5WkczrJoqED9yUQ4HG9p7V6Htmw2PzDzMMsgqkuffm2jKgKdP9UWxHLE5z9c8e74k",
  "key19": "JU3Uqwe131iojmV16caeiLMUcjgZaCNbdeac6sZkuM8QmBZdEvgYvpqsdbMF4qmKGWoxkeDYUfzu3pfmnqjm9Vq",
  "key20": "2Hp6SATgJTbU9uubLfzJ3x5EQc3w7LoyxfzaQ7YspwAFCwmofhH4mU7CoA9UhCKEqUJrs6pwoMc73M51YZ1FqyoC",
  "key21": "Cyp2Fxp5P8CFxuH3ta18yGTyFcFfvQCxpNCjF8PwjJYykD7zUzWFCtrmzNh5Aq7NkeE74sHeXffNwvY1XsFP1b1",
  "key22": "48qcjG9wrb4UuDUupPDxgsSGsJ3jJPNrnPNoiw2zozeoUGyqTnpfU6cEcPgrgnyGPdUhDe9ycdCrsm8SCAKy5mm",
  "key23": "5gcMZTPQ1KxG6KzoNnKeBmX7RYAqVUs8LgzmDKAGvykNYYzMqhm5oCBf721CMq61zTF15Q5qHLd6ubMTnFC7XDJq",
  "key24": "2xBhyN5CxCk723LTj5Pz7XGGqA4UbGNHC5jzHFTf9Vinyi5bCgEFw5dJc2jSqLZdcrtrhFcm8BCp9DfeNSVvxA14",
  "key25": "5pU9gSHJEzuHHmDHspvu35iXzsTuYvzQw8GdymGzApPK62jA6LabxaraJXAkbW27g4mCHSJdSzzF9uG7e42r711L",
  "key26": "4bCZeko9H55CxU9m8vqzJhEcNHrKU1GtWuoso9NA1RgBJQmbZ3Wr2KGT6JXb2kejKR3MWRoPiE7ZN8RVP2spZwGM",
  "key27": "2zBXNvuSyEGJ4hotSc5F8GR4DrFjF9QVoDqzgv3v9nkALbQfFVfbSdCsZe8yKoRgp7ywgkgK4DsL8oQXG9VJr3Xy",
  "key28": "4fgFucZ6xgokaL5PvGNjSgqF6SuxsFrkHtwUaJXWEjabUvo9Rn8gnkqEmTahPNamGsTN2TtR5y6FWGJhpjt9Nxnp",
  "key29": "ho2pMwcaxr8bQgh9zVZr5ijprhdPRBkonHPAvj69d1dtZ5MUBLDWhijszrXqBFVVw96sFwQyKsLNXmhXMwfWM9a",
  "key30": "TKCnxRwpwfviUWkPNaXvbVfGAh3jkhs64PXevmgX6cqK9pVA7yjr1H8JyE9fMdnH9p9pd67azqyXraoEBLe2J2x",
  "key31": "2nVEqysJfKAK7Mv9QWfriANAWy9DJmeDGeitgj1eNDsq8s2gtmjP7P66F5dgwyt7jTRESuHKdkdxZzGhkEgrLj5L",
  "key32": "4K4mbStipWECiq8AVbG6UfFAtUhioBg5nTnU1wf62894SXy1exbcCWyz1RwrM1tbcoCyHqEBCLxqHJUFRi17GUMz",
  "key33": "3qGER45jHVNiVQkeAmFp9vDnuDbvg336VQhbxzoTjwFmS1jWKMayjk3uQpinXsVjavneoqB9vGAVpYZkHLNQf3uC",
  "key34": "7UGSBSxwuESXUjmLqWUGaP6MPRDCoRBN7BXHG5PyW4ZHJo9ZQsAuEGxgRekEfSr5SSAjJYWYbhDGuejzs8p6mte",
  "key35": "4oa2YkNGwcM1ULaDSEtUBbgApH2ystYmjsmrzyJiLZv4s8Jcj8sAP7h7774HqXcwHmk54r9tofwjJitHFi8WePH4",
  "key36": "2rNbWSAgB6urhLpvME7VfQ4drXhKyA34KjZzv26HLN33F2QU7FnasNRh5MPM6RYpq9ih64jYeb1LDaX4Px2PbN7j",
  "key37": "2JCDe55aXvpiic2x5B99SrGaVXLSXChNdesN4xM6wNr3fyKFNNGPyHy76Ho3B6Tuto736ro7f1h4hCw3LqKKPpmW"
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
