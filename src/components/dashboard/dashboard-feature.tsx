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
    "5kJJYYbbtbEXkMc3H8yfdhehmjPkqZukQLFJSerRq5p57ZghXXL5dVckMPTiKmDrEPw4iVvsir2Wy5HDT4DvciDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dFMLu3cHYZyarssViTxRxCtBCHWQcB17XvxxekPzJ1d61yuj9wWgfqFxoXHx6oXqfByBkrdPQJHvUvERorvc1ap",
  "key1": "v269T1L9guSDjsvvTWwRQYELTteNdb1SpQXX8JdrbRbZLDGtux7aca33sLPJfYUhtRbPF4A4n7UR5jP2pRSeTQv",
  "key2": "4yFcNpR7N3KL77k3UnY4Mwrih5ibs51mnfHX51ZSSYQ9GR8VG5mzpU7idWtUr6vG2ogxaBGm6YwX3AVHfu7jmqoG",
  "key3": "2ELofyh6KugUbFRmh7fYeLA43GFKJMHHBHWHA3AUjJFiFEXa4DSzAdf6qre84Vw3z5qN5MRwLKduLXG3ARXwvCyk",
  "key4": "3DPAi4kkSSVoXcUSLMB2URrMskRtXiZV7vvifA55LsxoM9RoxYsvwyM3qcBhyhNKjj3kBa5GYxqBJqKQ7M6ogp4a",
  "key5": "246q63yteDGQv1VHU8aHpBHiim5BN8FmehAS81opvdBtgCQWpsdBaQyjJXojUSR2G7UKLiybDBkMzhB6DPQ6neEZ",
  "key6": "3Q4n491i4bmXBDv9ZzjUPGGNi1SGbVS749PQZfRh2sr8qX7svJVhmHQxLwBBBvYz9pkEbkuQ3Vy7VGpWx1tuWPzU",
  "key7": "2Xkn8EpLmF9jbrUpi7cikz7ZbNW5LHALaGHJLUAY69YKwcYSFKvY3un6pt2LaKRBiS6hzC4Ht5DqXxU2hSKDCpTp",
  "key8": "3iZ4nXXDhRDGm2dtwERtECkvzvMRP2tDi8rd1L2RJoWcGzySxiKvLXZNVKvGhtZ6AzPgjDTu6uNyjkjEgLpJ4WGo",
  "key9": "3erkLKRiebRERsMxzHj8wVwhnQJaht8XpCbVGk5QsfmB8AFQR71GT3HK8ZFRdVgzzviPki1gJq87hYAfamsvxQuj",
  "key10": "4TXEAXS8hKNfeyJBguvUv4ht4dUcnQ4hsNZ2WU2uVzsaJsXtqQwMNrXGS6qv6LKorNRQM5EeoCZ7TVhqyy3DLFTu",
  "key11": "5Dg9Z9DV9PW72yktUSXQeFtEk3f6q4SsbBdkpzZdwA5b1fkJnmuyhcizWFHyRUhkm93aGM4yrQjv7vw28kHPMgN6",
  "key12": "56aiCp9dNCLTJDQuDcs2QbUg3u6JX75RN9nyFKBDtUnvLNqsVVLtT7SUHw8eX5a6d7QhmULMwdGewXWq1trApUtZ",
  "key13": "3tUmgnCjZKHhju9JVgMn36GChwXPfLoDSnazuyJkcNWyEBaA13zHg3b9pHcz65aViXJsTEgdVpjJZe3FaSvsXe43",
  "key14": "3uGZWLeek7MQQ6SfMDHQtVNwvdvpiHZEYJgFtx8XbXTtEgcyTbMEFa3RV14aGY8wBPhwgzHQQruNHbBVn45rgjkw",
  "key15": "45prWb3P8YubSgEMvXRgRWwdKutiP1fRDkin2V7Zd568tSRnoyxnaf8NyHPeaBvoWiQRjNrKRujsUhW4o8oJK7Qm",
  "key16": "4KqJ3C7qs56NiNhxaJbeZM2Liv4cp1Lekq9NjabSwH8twsaV4wVTV3FVxS6fBq1DFcKcRWxXTCxszT3kY9gfwdyL",
  "key17": "5i1SdVisZNPkCUEfAq7KqvsKRuT8Vo3AcrRAN7nugugGLBBxdToYcp2itX1VLKkfiMHtNHUh5WdMyFqMfzgXT5d4",
  "key18": "2uf9XVtojERqsdyZbVP6tRyDmUu6z4Mnn6Hcbbd3tm8tcG75VPq5zTmnhBdDnQ88mwZv22B5uywxet6RwWw1ZNnt",
  "key19": "4cTYs7KLmFzGW9TLHDcCSp5KqwxskTdmeYYB26g4yANxw36syJ3sSp5Bo6ZxMviRjWtp8ena2pgiu4hAY1EQCmJP",
  "key20": "31Df3bKFXhvHm8PpYmaVKckh35Cynca3QhvbqZvSkrYHFw3PGXS8M2RBhKTZgpVTBHizf1dqu4tNYmG1KeAopV1x",
  "key21": "5SRP3ca7rwNTmiwWKQBzFWEqvfKQtoNze1PBgTB4MBwQ622dnJS3AFZrRLWvXt8M2oJQ1a341JeBRorxK7xTsBxk",
  "key22": "5WLv6KvWbLTojxMZQDAJeaWCnx67d82JP4jiaLeKBVhkrDQkXt23sAgFCBufLmCh1XCFc5shpJPvKuDKh2aqZCpe",
  "key23": "22dz3JYwqXtupn9SczYP2G2K8gm9BkjUGDJdnVNw6vQtBtrw66Yo2QxKbfc1BaRWmY23hqiSqo3h9HT9YHyxCpGf",
  "key24": "3AcHScczzFv1SZxcPZ7DHtwhCgqbg562ZBmwycAvFn3VKgRkUsF5Bc63bu1fAYiJXypoWEd1nKSHtErQBbJoTQaD",
  "key25": "3rT3ZApAkQ7ZuZNEx5Qk2ex478anhwFSVzYS56WpxWSKpg7anidjm4H7Q2AXBscfdhuoKwoGiuzWJM2mjhNnTnq9",
  "key26": "5rNGRyoyuJySV8mPCgTEhG9f59ZsyiPD9Sr5mTdwvqM2D1N1SyU16Jh6tCsx7YeCkcdEfv1kuX7dvV6uJiTWPkSf",
  "key27": "2h3eLhhaD2FeMVegsSFTbafSj8UgE8j2W3merqBSxG6Fyxfqd4zX1J23VNrDZoxBGC3vNZFPgwS9DJp7zPQhQaWe",
  "key28": "mzVQgyw9yR1ecdkorSY1b4YT4jaCVJJqWjopyVN7FzintKhSkkEKHYs4SYwtbibpdD7JTz7nZktSpNheUZiBqKq",
  "key29": "DDNShY7nFB1cRLUyseg4rLhGxpB2prkYZcnDhddHo4fGs1ZugPDcBaYMdW4Q4L9qyN9npxuNPgoRCGX74aNsfkr",
  "key30": "5VCdfvNkss7Td9fhr8nMjhLGSMtFuVDikBFgbu3Lw9ujQgFmkGKaL4xJWTXFg2Amo2ELMEkyavgLXn1JrgceMEiT",
  "key31": "52KCjGNZKuwkvYUQ7YQW1ssXPGvpNyKbZppmsKPgVQWCBzubEwFCp8x7QhbFbexwUNYdQUmQbEF4Nq9anSkAkpwM",
  "key32": "63jbApeFA6atAnub6NvHbA8Akk4gtAtZbEPmD4wKy9FQRyopk85Y34pJ8W8HbZqWFR8SeezYP6JRszbtF6zpc2zF",
  "key33": "4PfszBVJz21uS32kwsJUR6ZhJFfw2k13TjvkqMNGKDKRK3CNgYaja7zF99kZzTPZooHqBffQavRDCGAfp8bTKaCN",
  "key34": "43cTd5PMnek1ekaDenmVJZRZ6gZALtgyGtmiZmM47JEiKaFqhiyh32vgrp8e4bYVgbWSBViuMeRU9akJ2XLQ5EoQ",
  "key35": "5MDE2NiFEgTapd4fSGi5R248Q2rX5jfRb7onBYB1J1GpoUPsA9ndobNQCmL4BJVtpPf26f3hRGAAr47FKzq3bJ4r",
  "key36": "5w65aKLisBAzoQgGffXrZzLyVuDyBrX2Fpw4ZGYPknSjehEU5q42uYob22w1WwpjoW2zfRm5QamkypzNY7uWbQ22",
  "key37": "61ohhG7sL9rv1MThcaDztM1E4uvzUcg7MV9CcJ8JbV91CuWpAeetH6rWm4xXSKXHZMwWijnahqE9Z7RPg153qso9",
  "key38": "5QjmG1nsbXRyMckdUyyWgZ2pv6gwymv2DMZR6HraytMfDbxqZCx6PY3MFk7KaVAzdvz7f6W3RuzJAYL5MW4TYnqy",
  "key39": "4nw6hiYP1ZbZTvjh1eUS6vaWLXtbPCYfLPkxJ4nWiBSuJ1o5oJPxEaGAyb67KwwUzMMktAVGh2VnJZgW4qH5CjAv",
  "key40": "2Dsa2T2T9Tpd2fStiRNLvEs4iTAfSRbpBrhtFmDjUjZzvssvLD9SdHtnjwmuQm6eJb1fLqCkXzmZ5xAwxVabtPCS",
  "key41": "45Bvb7we4qhLmpaNoN5qsvSF6xWaU9KBG9N6dvFzK1GnfAWkC2fzsEfYnwQEttty2YQADZwq8McyyDajUmNGeyi3",
  "key42": "3Wd1SRwHrWxjnF6f63X9amRsFDUY71vBH9XHjAgMTmVVM8wCWqo3vP6AzudcQHdGEoZF79u5TmNrSYywEUmte7vs",
  "key43": "4dphqvimvKdwVo6c4fa4MsUstNVVSREHodfA9xcVX1PaqAk3MkE4VUUure8gfVV1CvKeB38pLaSgQVGMR9pnHkUr",
  "key44": "5miQARhbMNMe7hX1sVgufe48aLTK46cDmXHLWpjAKv8MDUkQFKKWS5RfJXPQw8jMGD9bU2oVpcr4TzS7wxyJ1KR3",
  "key45": "5mfhva4XxeqxJ777YatLPHrZ1kZ9izdR47CtH9Q8fWv5NfXgfF8gqySpXNN1jqFkVPbxY2rF3ULDJFhiJu73koCN"
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
