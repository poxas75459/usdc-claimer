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
    "2wiHGoMxRrSHVbWScTvcj2AVxqiNTp7LY9djuhZPCUYW73LYF1cKqF3iZB9pBN9vUhHPFRZy3iho8CTnC7SGtfzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NQWKrJDcP8RwEjGGvPCHk59GyrMPCgZRywYfVVKXWmvnTD7FVwNq91U8niAt7XepA3RwWkqE2143nHWjCNLL92K",
  "key1": "5r1xc1URqE9ruaf6gUSCtNSEAu4WM5FKenHCtqASWmu95ih5C1hiGX9Um8DGmhywQgEgavGPN34yQ6LMv5WbbzUV",
  "key2": "265whnS6QPEUYooeq5GZXawubi5QfzTC2QqnP4Ygx2EYfRS94C2AWCs3813hPybpif7BBA8QCV55cQ14gKRrNHwd",
  "key3": "3a69Dc5NdjgGpXoc5PxVXMxYGbPzSF6wefWRtkN68fv2VAbiKcWbamWimXyADTmnGzxgDfPZH3RBuspMbeeR2wLQ",
  "key4": "57yN7Lo7HKzrH5SY3NgPwk1zAD9nzPmYhGJpDqdYFbGvjTGa2g2avJoE6s2f9NNJr7RYMhkxJREtgLvMM9FrU9CK",
  "key5": "2c5eYZGNqY9MqSQoa7Raaz5ryrTombptU1gKk1uRdznmdg5Wo4geTq5wdNw7TVLHY3e1sUVFbPHoZTRg13d586Sb",
  "key6": "fGRjUVT1dAgF3Bddi9dPpqFpN3JzWxKT5fejvB6643wWUP3efgVgCkfWJ2jr1C7ZxYyeZ89Vy8EMyFMZVh8fcbA",
  "key7": "TXh25MGsC2eq9PnE8f39PostyC7KdSu64zBEfb1FRWGNkNX24QXrM7xKMSpEHEzKUmRWz48yYMPmxhU3bKe1qxv",
  "key8": "2immRpFJzkxSxsQNmjHeQM4qvmiyzn1bf5CXfgG9CzHT8dgnsTKnEdTH2p88nNzF7gdPG9gSDYfk9KSSKtCcZ4w2",
  "key9": "67Jr4ZQWJWtCx8umnXMqcRU9LFF7sfgHA3HpqEgvUsAWvn1YPeqBJBFbKgVzoU69FuNr3Y1y7CdbSy49f9DatfVh",
  "key10": "4sHRsmWCExD2sXxraHiS2ai9T4NWDBWMB9nB2jNAoynZqopbr9wS5uU9GvqSyTnZD3HQgq6J7UzNXqTufHsBHLqo",
  "key11": "3KJTocXwBh5mtKV2iZufLNdhVwdMzCgmAo4iiZBd7DTDcmpzMWGAVhx6hGr842SRRZnho19sgnpgjo9A2FJpT8Hn",
  "key12": "2dr2zT5zFhTyNoz5CYQg6qBQ4H1J9KCfHJuMStS5dsCmuvz2a8JAc42Kfkvpw5VnsUeRQxHaLNRD3NaciVN2kYhK",
  "key13": "2xUk4DTc1xDqr5zqgnp6XJN13iJL2xUrmojcWqiPZywYXcs5N8WUQxWjrgvEKd8y7UPeXwasdfUpnN91JGZ2Lm1M",
  "key14": "2aGucbiQ7SNvAj894tMbsPpT5yPsMB3coR3erYr8SqWzuPF6tmsxhLsMcdC66coiEeYrmucALPdDEoSbguuLGFN7",
  "key15": "2QhipDsqsBDXZauTJdThk51bxPC2Sze9HD8P45crwzs6ALJp7YdwuY8HUBZrcCzKjrCL3SKRE48h2FPHxqJ8xsHi",
  "key16": "3L8QubSitCceWon9wsy45VYNavShWBWEKwG7JAjnTFzyQVFVAHJjGXAycz7QsDGEuigvyJGEfBRwortL7yhxNEGb",
  "key17": "KA2ydLSeiYKcpaN8DiwwLdAwgn6mrc37SwM12NHyPVWdC8QuTYpT23uGFZcTyXgXjE2oECZCRHvHr8xwd6pEv6N",
  "key18": "2g8wU4JWMhPnazaaSWRxa9e9omfDgbmaaSCNpFd8i3FPMjREMLzij7n7in2VuKssJVsYqT9FM6WbYVPhWQxdgpwt",
  "key19": "SmyvEGnhJjis2pr1qN19UbTbgRroJHqg8tmMRrwWLDSWgNw22N65ebTRg7vhCjWH9Y8AQFhJmjK9fezPDnM1ARE",
  "key20": "26oXoEup9vrGFeoBq6iuKHURwX6oH42bzxz4gYY2UuNt7wMR8kEEGSG7NVi6oavF8cZUkXR8enoqzx8G75CC62Pp",
  "key21": "2smfutgBe23sZLeqdvdiZRoqiqxmZLFVorn7CsxkS8hp9xBtNkE7ucDHMAyfDHDbfyaxzUtnc5U6hmKxY4ZSGM7k",
  "key22": "5Ep3925Deusc6XTbRxY9GbPGxUAXjCchhrJf5Z2Lw8BimMbF4hhhmDaZRBLTCz2xd2zXLjqXpduV9qSGtJpATRdz",
  "key23": "3xLBdpcyF7xpkAEcVopyWn1hm2xcBP34qhPjQY7U8iw3GzGwkTQthtNhFdss8f19PNyAAybXGRiYnrtBWtH9sde4",
  "key24": "3J3UHvYCUWNVFuqJCWoLg6QSHBjSBQNa51cKhxHE9hmQTNayxhnEiVmJeWK9ijoANnAmsQZ7QsseTmhbBKR6anHh",
  "key25": "3uR1EM8SM5XW7HKimFrRyGMVaayhdNGQwqXiqXg8u7wTQ9iy6owXvqzkhuDUXG6v8fPcjHtdXNVjThmmrn5WGgP7",
  "key26": "5XnTh5xKEwZnc9Q9Vs33hThMnx4byBjASTw8yLxbCLCPJBNYqf1BhYpj5fY967gArLU1wJ5QufzZP4e9hLaHPZZK",
  "key27": "6zhBc4JvT4YeGk7mCztnZE2hVc4iDHrzEk9CdEk8wbnirZKb8iuZnA8TFodk83N5jzcyVkVvPWLwZGsnk2uM5AY",
  "key28": "3HEQe6x7wHgfQx9DMsx5yz7AsUNYRFd431TfaMKY9ruZtqTY7uTjMr5mm71aPvYfzRrmcU3JjTKrsMSrf61SFKkr",
  "key29": "5F1JU1RCccwsKa7rJPaRLFCn5c3k66WVfJMfMjyzwjYcQuxqXPheNJ9fyoDnctr5KZv3VzfoQYT8tUvE9nXQtQWK",
  "key30": "61YPUM5etKMgZmv4jqhsBqBCfgj8N59oMeXjtwZHi9zXaHFi5ToTVkm4XfY3j99mvJZLrRnYoaGP9Zp5YccUP1DL",
  "key31": "2nhzqhUnc2VnNHzNLjVrEFgWsSQVikgaq7dfz5zCAB8YurkNpa7ZjWLnEQacpFji7Hxi7hNUdUxsqPzsqFd1k3K4",
  "key32": "5Hsda5Hxy51QXERFHMfX8sVq4Cep8bHA15XK2mwbkybVvqMSui7kqmWY8VWCdNT5UKixMmSEjPctozv3hj8phFEU",
  "key33": "2qoXBBo4J8uuTZFLYC5sz8XjeKB19GdZernzgs5HV6LjqUHg1dc4D8dtseGh1XwEneGJ6GwaJnoHaGpPej7pM71V",
  "key34": "5yXGPVt7WgbKDUQjV9Qf37QfBW2qfrrpYnFaGdvihruBViwDBKzLJVoM9ycMcCCuW1fpsuyUwjAwHY9uPdpHKTwQ",
  "key35": "3c327UDZddaDNiZFMWuSTdBmcDt35dZrv79tA4LL65EVgJDas76wYfYqn4m7EwAJNTwjpvZ5GFhySUKwri99XDkT",
  "key36": "5r79D4hmdRz8rP79DLcJot5xc2kiQvUJL9vX63Bpa5WusQpeR9PuhiiG7qziuTM1Luf1muyYhmy6tUYBxguNFNpt",
  "key37": "5zHpxXQ2TpkSLc1jGJJL8wfaVrDh2xtgAvxfLFEtcMpyxN79DJLx9w99zfYGqWVtziDrtLQnSjYwgn1ZBdJPZkY1",
  "key38": "NtydJ27apTixajgYax7YhfdvGE6fciNuY3qTbGdpjYJAkUYZm1jyHNCJo2P9WzG9DgHgfE4zf3ACoDf7GLEkQHa",
  "key39": "51FjtQHfuBTi9wiJDzTwMivBpTMZAf9YhJDmjRKqVkLzkAKujWiuyrkqh4YvLsUqXric53wPGkKchv1hHhUPxrvM",
  "key40": "41e4Qqt89wMsCSDvzYnpiAnNCpEucQNk6gGJkMzz5Awkh97KGYh1dntk9U3pySiCBcDUw4XDPMgkv4aoVTEKUaJY",
  "key41": "5v6L7wXyy5R1jHZTPNsFXU2MtZ2Aq11pXNFC4vF4Ki1cX2UcbDAXrwwfNJB3xa9xUBxkGpKyBJ3gVqw3wqcZHtPM",
  "key42": "ZbDEyReveRNBSQ5t4X8VZEn9gRf8iu6vwaXUz8XPxKFGASYF9JZFx8Nza28EUHcK3xz2ssRQuPQMs9AaERP2KxX",
  "key43": "534kKjH52XTDK8s8BPVppwoctWbucEpBDkAB1irG2WBKtvDtNZy6dmUem7E7AcnY3ufxYKU3E1fteeHBfTQmPyFf",
  "key44": "21K1ZZpcbWJMaP4eiX7mFtT6cRBpkvhdKciD1pXpZFQNSxNiwtVFzNsqNK3XFdyzeJyaQ9iqDCyRuDBN3Gas2sQN",
  "key45": "55gmx4HavNKmVAq1i5o2JPQRANaZHaEK2znR6BVnWtb3woUvVHg1Wfvg8iA9QAwodZQEyZKUQrpWGX2yUjLs66Dn",
  "key46": "5UZEq4T4sBiSkiZe8LkJpmAr7NBRDWZK8izZBt6h4AdsfubF1rTeh7W4cFbw1v7h5dy1vi11bshAQbRgYkPDrwSX",
  "key47": "3iNrwoFVpinLDD2Z9WtQjBycXMMA1Ui3KxKdRHQdrdbBXKjbv7x83n3sZiZ4c19kpZxeEKBF2psc2JgfvLYG3DZx",
  "key48": "4XnmdBzFcE4EcnfAsLn7keBUMZpDqhoPa8QYVChXKNicAjQBRLfgozKg2m2ZE4PmZ8ZhdAtX7SSDnfkFoyZSemem"
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
