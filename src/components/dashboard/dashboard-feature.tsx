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
    "uke6emcEyT6K845Zmn7KhLwaPdw8jwaCvtqqK2NrpwZQBKEMtxuWYfmVGA5NTENf3KK7zW7CGXQZ31cobmGdtFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "isxoy2yc9vkPWXuFvDyti27j2KYL3ehvJvTDY4QEAe8L7Sj9Bbke9dfnsB8u5LkNda6Pon6gtn6DA9tNAgS4wq3",
  "key1": "2gEUUHuSCKmvwR4CZ8q3skUaezssUBwECoCg2227omCSzRt8aFZFPXujqSjmYfsB7RtnXDbkBoUgjJHJwFYM5wPT",
  "key2": "5a5MfxLzA4Q2qd4CkzFMahqE2zdMVYSxPAQ94Xx6qE7QWok6o9fFyjvrGxkqZ86HsHaLi6vcKUsYPuWmeNzgxTTi",
  "key3": "3jj2ujoRJhWzZVLXx8PydeXh2biEfFAK1TsJA99pjoMm4CEA5WxeU7VaWGFSRrFXbkPF2DiQEypij4nQ7q5gSoKf",
  "key4": "5JwS5fncKHGgSEGG4sGFEkT1FQAzDSGmLE5aPiaQVPFfJeXbnFcq5NqBmRsoq8vgDn7QWDSzWne63E3PrCZJ5VyX",
  "key5": "5dSv6fUgzRKc3F938oCrP4kpKZVfN5GPGtNxdiYsmcbDTtfnFDWQkQgUK8KwEbpgmNuafntNzCgyhYSTibV4F713",
  "key6": "uLwztv6vg6S6LS9wzL8K5dtNsrfyCprRMScThDFySxfhs5PQw2gkXBXNFsdnBG5LyM8wkE4StNFHfn5ZYMLF9iG",
  "key7": "GxdkrxaYkZozGZUkF2pVXkrtiursQ2Txa7EEtw6q8PnZfU5zzgt2t3AqEuUBhwGRqk7Y7Xxfha4E2EKLjTK8vTk",
  "key8": "3ZGXezgYroQdnDe5hPKpVE2fxBxxTRqmp33Zmy96AqLCV8ejqjKD5Yr5BVcjnpvie8c9ri3BJHRHZsFkCSwAeddL",
  "key9": "3WaK1TK22BATAPmQPiErGmQgqKBxqoC35dNrmJr94dHDYdEDTV9g1cN1vFXn5s5awB9XwnJWpADZXU5yW3fEUXrx",
  "key10": "53VzK8wzTaBD5BZY3EwRPReAkFx8J9FWaQE23r7S6hZY5vnti86VKT7RLrc9ywqCCQtMMWy6nah462hWsZQ74oid",
  "key11": "669x8SBnXQNntQ3AAuzJ7KHrAJrP77MWZTrE2cKjDXvEFomXrMg27JTR2wU8BGFmJACZHrXRBSpegLAiUxQDugdk",
  "key12": "3davwXdNKQQPfgpz8r4MBWM5GT95MqHxdAbrdGsheu9Z9gxtTgNpSivoKCeW7Pxm14ozUTnvDW9HC94rcqfgLSw7",
  "key13": "2Z2P3zicMvFjKpVpm4Dov8PByqMPhBABPqcvRiTEHU6UoaCzZQgFLm7Y6b1JYSbLQwuBvaB94avkJSfrWmRudKea",
  "key14": "AZDkmPwpkihG7Myo4hwvmXg71FEANjA6oTapRoZhHBKzHsjyJqt93E25L7GxFkAGzfHtBAKhJjNjJGkJYZYpBj1",
  "key15": "5Zc7aBCBXDTsobsicUcWpXB4kLZsKBMcqvLX4aaMoKdh793mTix5HbxdPPFrnvW5opiiSXThnG4b4BLVFN26C3FM",
  "key16": "3qEMfdtKPgKfrhxKHUWDYwXMikYZjxwFecxhhyD9z2nZHEt1ZQN4sqtzMteHTphckX1h2sUoxZVSzdA8LoBdUqKf",
  "key17": "646PmKXYdAZsF5Ki8KUeJ3XJ8M5fzWtu8LCHADLz4DqURQ5oYg8moziGhzspURmR82x8LdpZ2BHUDRp4WnqcpcUt",
  "key18": "32tmrrX1j4RLPzzRxs4rjGBAMcKVEsmFwudyzTKWA3noR7FHWQq1QYXksBkHdPe8yqWm5338TG3zEgR7ZyPuPKmt",
  "key19": "5C3H9u4UnyMv6JVktYXJCFZLaVMYTmwRcu27KPsvVHsBuBdzgJTBvdnwrkpZH7QYuUJSmFCMKuWfM6yg164nyeQ5",
  "key20": "4A2GRP1wwBtx5yy2CZwyB9jFw2RUfWPRYRpUiBugtjGATzSB9aWHggDZWocs9iTPP1fT6kDfQRNn8phDBHeXBrGP",
  "key21": "53sFrT2nSe1yzXSs56FsWgHphramQHQDwU9hJM6mE7gDcciRqJyrSBgc6qgYY7dD2LntgfUivmTtFfpqDxWSKNDY",
  "key22": "2MYTLJmynPXpoNeppH8sCzB8Pgwi7c1kkwmL9QYhTJZ1LtZuvEehCDzskoNFo9DhpC7NuLuYoF2vps6Ue4uXRphz",
  "key23": "5szAbJht6z1ViLkDbTbucgVvjuincGcWw8souFuEtbFFJDPWzUG3QHRcyVpzPHxFhMmqYHxeDv2t4RBsaWZe2D97",
  "key24": "4krMa8KBRhD7KEMGvFJt9SUYm6VBx2bA2DLw5zW7mWCTJfccjabNLSJPssxCFYochchGn54wYFMnZBBznU4kGH6a",
  "key25": "vdfwgZgzJJo2YkFuHL5MaJ5Cp8zJxDjj6MLgbNvRdJnNe7osXjpPFGGL272WuRt93dmAZTCG71AYqt23StzCxDi",
  "key26": "L9TaQiwwefK5dcv4o1xXiFguHLUCkdH1McBDDonY6JuUzwQj5hhiHzWbDbCaprfFk6Kzresx7jrserViGDq21M7",
  "key27": "66qG2wRZTreDf3k6stdyWWeeqjZfaqmYFo2PG2B1cz3kMMmhqJHL2BuhiQjqizNUZ8cPBgBkjsA41cBjmtyFtc5m",
  "key28": "526ajeMvAHUwyxjyM7HZ2wi7ydsyoVUyJKzHD9vjNkBf92zXbR6EZQuzsKVVhGCyfm4JUvX6B3YCd3Muo1ZfdNGK",
  "key29": "5Uzb2kbfS6qtsHYGJiJBQ6MpebZcRFnQgWVoQZNQrL2b3G7TjZ3rojY8cdN6xMvPSyBfDEZpJy4Wq25fZ4957dvM",
  "key30": "4jkbqnM1k9GpvMWq7jCqXC3xY5sWSiMuuuRAwxehEaBEWJgnNJLkjitRjCrukFxx3xgMtVVXDmjXyFt79ndz9tEN",
  "key31": "62z5hGU4BahY8oN4JWp1BCHpu3cBgvUsnd6xXnSs8ouUKj6DenikgcPwhPBYdUSTjnb5hyCncMTShaketu3oEyZp",
  "key32": "3PetuaAKP8UpqJ1e4hCtdKdb5BZE7MsX4EHA8qfo7fKXGdVvMF78YXqa48T6fxeWPMPFfRwTMpkDJut1nu4j7nYZ"
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
