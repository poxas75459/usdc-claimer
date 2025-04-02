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
    "5V75bxAYwEC4bbP53pk73JXUDhn7wkxrh7WGo6bAKL27wr5SDxc1NrnJGafW6MnKYEkX9wwP5q5DxpdW8KAP8KJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CBtap4B6trYs8oj1eKBgZSivx1ga1zsMdokyLHwL7QueTToSu1JmJJKSt9W54UU9zyRSLAFSMtpdzK8KkSwb1LE",
  "key1": "4fuKNC5a5BXDDUC87hL1tUmce5s6yUATn9EywwTh3cKuXsT8wJ8X5YHtDbEnjZn3iMepJ1mT6FKryZwVSLyYH9b6",
  "key2": "3rAYuA4kHWcEn5ndMUtcdsZzZf7EtTfbXo1JVqzdpFLNjC7eFahdcdKfzzFdVmBfbxCWW6F7uYa4GtUntFsWc7g7",
  "key3": "1639KizZLkQLjQF1mhKHwTju97DJ9Fho63cufCfkrZpqGccXze7VqDmD4dfvDov37vMqarHrvkzr1J4hkHYMFAE",
  "key4": "2Cd3non3Jxs5mjJWmWEYw88tdyztCD5F8V5ZvTYDaKDBncBkv3zzHyRxaTifxwvJwSmpNhyW1cJBP7K7anHEkvTA",
  "key5": "5CDJahuAzeGdw2ZVUUjJwg5uP71jiov54VRMmtPzvuuaE5EyoQbi9S8TPFjVT6jhvPSWZNLybqDiKYVnha3Q9Eta",
  "key6": "35VFWNE5VL3u6BLziydvcX4KGkLRDu8YeKTX5aG61dwjHrxCxoY6Ez572yzmDCRYWntR11VZDSiQbGZjrdpTyTJ7",
  "key7": "4oYHzApsj8vWcN8RMbxrUiJeH23HSqazaotQmzr97FhujXpNXaGnfxnGGBQrJsqvw4U1cPQtXCk2BEf9v81JNVvq",
  "key8": "TwpZRBCVrPcEPScRKrPE8SYiKCfDZc5bjK44douDMyMyj2tZakBQBPs8ipJwqyTYou6UhGnU1iqGmYBBVTnVcii",
  "key9": "5NkYyDYAJmtzhTVyyiRrayo4TMWQbjRdvZueA5N4LJrJCWfhruq9z1zHCNtRsmD2dAT4fGX6gSCgNkAGqzLX7bQ8",
  "key10": "2Yc5NwUzMYoAUQkH9UYEUgnH7bJMAiKpAyv8Sq3F7QscFpABGXYBKXq9HQYpLjxDTaMKhPsmGXMAY9LYaJhPKZqL",
  "key11": "5zvx2XmUfBg7rihyEyNWUCDogPEhJEm1wB4ndveSgzWyr7UDC4FVRNFzRSuL4UhqwNDqjqRQas4NnfDenXCC9Yba",
  "key12": "2yBPfX4KsMLybKvkvAsL6RWWxw8iPZvNFGySfJLvYSSKWE1DNshREWWrvdcwJo7mrcQ7FCu4cbXeQ4dTpWGAvD8C",
  "key13": "3AcVHVwguQJ7jrhisnGzPLsmg25yBq67Rezf3hYRVoQaJ5gSeCDUjVNGdGVRL3M4bWmssQp95mx5KpkM4pVBMFkZ",
  "key14": "2TwLFViDzKLURjiMWh7S8biy3n7wr1WxRLHbZ6yEFFLaFdotbSo8i9ouzsPWhKvDePsRT7PxBv4L1jqYwyvbXGQ8",
  "key15": "4cA7yG64sXMbSUAaY2ueSUnV7Fbbw4NCxBjfit2JRxGtwvL2a56GrmQYThDvUokVAwQ2JQvjecgN9L8p5pRPCaoy",
  "key16": "4HWAhStaLKZGjoCRyyix2CKCHQVWsBcYWVQ8MKZ6cCKSCtCxCYbYHYY4twnr4NfLRWDBKdcPApJi8sqGSp81oMU1",
  "key17": "2nd27w3MWPzJsMzZScZxs9WJcMAtsv33zb9jw74Kn7QZYARSPxesUR5bcooi1McGYFFkPHSSjnHaA7g3UmqUTHQe",
  "key18": "3bkfUhxv7921CaMJF5yiVNsCkoTSnrrx6FJX5AH8fvfhhh1Njuijg6yYGDozyWGVzQg82qr1kvpSwgMLvnjyF9tc",
  "key19": "3sAUiKtwS6yKS4k6kioaQw1yNmsqmkzBjwPYhFM6LcAKdiTgtaP7ygKzbHKzVFT6V1ye2XkhymKsh13pDNjU6G7J",
  "key20": "4z6r5Y9PzUfjx8Ls5Bw8yDxX9aXPQ82puCsKbutyuhM3WB4a4xp4rCmViCaqvHsNLQi3s4A1fAkZHXrZhKivSv1r",
  "key21": "2jQkQgtMcnxLaU4bXHZBJN5dH8pYf7m3gGECSgP7TQCD5uUVRuUn2LCu2cAmgtyqffFxxz8cN2yGELcJYi49i9wr",
  "key22": "3c4uCoHaREGqTbvVj18VU1KNyW3PwRzme7YX63x18Agi3gxyvJG3PUs7gJittbfwk6cx38yzqdgTpmxCHjNA3Swg",
  "key23": "35aywvs5JCzbtL5r11zMPsJuuXKFtWWZV2Qmxc8x7UQEQmQ7tE9iFuhekaT4v6jUTdQjLdjFd13m49CU2VMcY22K",
  "key24": "2MMGqJGPkD9R64sicuacnSiyYfAsBXRMnLeaptXFHftNjfbk7MqSoveHGd7wnngvnFCThWsXcYV4nzWEw8g7QKTt",
  "key25": "4evwKmuSTFbZQJivF8TT5EczdU4gynCstJqMNykfHMnnZgerB5pda3UGVToiNhFz9PsjPSKr13mHELXHgAFSbkNQ",
  "key26": "4nt7uDanxU2zFFaZPubCUrRua5RFj4iHPr8LyDUa4kdJ6MVWwMXmysV6pfTR4HeFeb237ywnTWYWSwTtv4jfqePc",
  "key27": "2gBvbKC26e1rhhJFBzXtMb1dNfcidynCaxwMY4FLtvmiyo3eZ6oUAsXDDeiLTxeF5mhCD24HntU2aWzHzj3SYxkV",
  "key28": "2i4d9YjjZcTHh4ucCnB7WpqGy1FfA4oX7Z1SNgRzX7gqtqKf9nP1TFGS46T59Z7ETb1kwoXeCPRGtJBeRaGhVqis",
  "key29": "3tuMLCUAd5qNZBddEFN883RWjcFMEQAho9pSDskPY14Jc3r76hGAqkkNX9n2Rbfiabivq3Xn3Y2JpnGfAfH7dL6P",
  "key30": "2YqnstsM5shwztzyPUkkPYEG1pGhVw1eXp7rmK3KJkMgVFMemyRrKz7gTc7AW4C9vcqz2t2kTuUiQtTqhBZPQn3a",
  "key31": "4Yq9FZ5772JVYe57GgjTfn5cNdHZVnXRz8QArEfxGdJErSwwk5zJWM3PtnMZ8KBwxMYd7ydkboUdKEzkEjLKAL8q",
  "key32": "3zqCePdmTF6s6nhXbRcgRg2CbCwrZVj9x2Hmsh5j9AivEsNrq7Ev7dvAfwTMhBvzYZne7zMPfarqFstYzyA7zN7S",
  "key33": "4kdqAwA6uEw42xoZrVjPibfGpE9uWZ5mSP6PtczbCs2S5LVtjgv2EPNyQXyWV8QhvJgudVVNo1VSVZHKiGpy15BZ",
  "key34": "4S6r5YURxg3Kdi1QTwaMF3Q8rQHsjqffLwG4mrgzrwonLTnXtFV9LqX67ALeMvXd6RpjNszgHjjGN26WqGXJpxGJ",
  "key35": "4gt4BGUbC8fuXXAayjuqqNgqtB3prj5zGK9d2DrePRBCDRwRv5hgUKySwxr8gyZPx1Mn3DiRhUxNGpxVokuANjDr",
  "key36": "4bFqZxEhdRrAZamw9mf8P8UHDF92Xtu9Ds2Ek7X3pqpyHJ8wNZoq2jCqbEtzRWmL4wpPmPAbNXYKv6hXx6ovFrNq",
  "key37": "2V3urgqR1xrA7KkB3FcKJt1eP2bi89a4qmzvFBmxdeUvNi79APRfB28za2Chiqwp5GW6jGREiR65Q5s5Z29F2c1p",
  "key38": "2u9xdWdisNkKZEY46dEvXifhAVUxG96F1DUmcuSHbKkghyybFxQJ4oMvGDagsqFFANk18iftiXdaaMYkG8Z9Fbwu",
  "key39": "5J4nxCuvtUajBqJLQJt9JDr5hN5psEbxmb94YeMY2EJUCnohLCATtM4v2FGjuoU5eqPsEeppFmxqjoU8jr1YxgMV",
  "key40": "caWb55DuP7pRM9hkjaZhNMYx12GteVsgMqbtD1fdMCDyH1XDEz85AdS6r9WVQZWBZhibHDYky2eXuwaFBMk6uzR",
  "key41": "3NFLceEXGs1hw5pMCSfgUsziNAx3yELxaA2eMbcD1nR4JCzQon7ew28gmSwVaG7F6935z3iA7uDNLwt67N724aho",
  "key42": "3hkTNpRdp56Jfe5pTbsM9rqb6pdhMCEzHEgDi1aYt2ww8d6cbnVSuQxz6uUMBGZm4nNvyzwvSdLJNZAkesJzPBix",
  "key43": "2aVd6yLSFLYf5eYRGs1tKy7iKkqt1adHpTEwZPm7KGFJxcGAxA6ujHaqFJLoLZZSvgpf7BTpx9W5TpyruCaCZyvc",
  "key44": "3DamUBsndgVAzg7hnskyYzg5gQYT5BusBZejjzkCjbzUQfi6yq31Np6Xyz79SKMXxn28Wbn3dPKuzM6jKfBYveA",
  "key45": "5YhNEwf6EyGMYydBRgJbD1Tpz5idNY7PTw42WpU67Gwik3LdGTCa8umNdKG3HJLCVnnA2R3nFY6baSae4nZS3TLA"
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
