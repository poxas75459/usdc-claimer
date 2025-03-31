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
    "5Cy5ZNco3LEiJnndV69RzgE961JbxBoLbz6wsMp1g9SV39ggb1mAjBfFMqeFT1oo54mt5FRz3df3XqMFdyYwPn7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dsbMoa8yfwHDkuxxxmLnTeL2DAW2ejw6DYGhKUsPQWgAeHuUb5LUKwkDSTC2U19FoNrKj3KVzHFTXwvcN4Sz7Dm",
  "key1": "cZihd7PbmXS831NBC4V5kbtk7CLDHad3eMh48fv4aZygMTW4ebDzAByZKDWzkufqj3MdX4jrFFPLitft7ctnG87",
  "key2": "3dMGq4fA9Dv2v4XMK9PhrSV2dzU67FZLcgD77pE2XFdLDS5a9aasg4gdBBMsKMcGarPDEgjb69tFAhNzGooGWi9C",
  "key3": "3nFyPwvYJD1KpczfdNpHM4QCww6WCdUjKqXrPGBRNUvdmYseQ7zUSp2kC6n54vCHDti93LQBkBQGp31ziNdHxuRB",
  "key4": "5f1o1kwfD2ABsASnZ3fJYUsYejdhnCX3fQmwDNGXhBDkZDEpJRySepuwB1crfqHzzA7BuPT9uwje8Ug2sjEyTTte",
  "key5": "3cmhjheiQpdx3Z2sU6pn3EEe9TUDfF6zs1CactnX2FwiyV32GRuRhqiLqcKSbVX6T2HHpPexv9py21TgscTnbwxN",
  "key6": "4trR8S3a94sAFFFV9Za3GT9wiYhyV12e2xCCczuvGnve5nnYSYUSdsz7BHK29EJpUsKMPQFVzzNvXKj182iCYU8i",
  "key7": "2tRUiQrTcSdnmx9ag1yjVgdpfLPpDoD5zXaa2st2uL9qXrZcJT9qTADT3GLYF4BwYtwmhHhEhyqdqgA6K2UgJ9g4",
  "key8": "3SP9buqtVU8fnZM8wwUMzjTUDEenTEMxYmismZ3DjCJ38q56EAdsG9VaRxa4jMaFoUvFiR7GmxrbXxKKkcR9WtHh",
  "key9": "2LTo3ew5rWcrY1kQVpAGWXKy6zcFSnqDbRJwmCuXTuFcHfFa45JDusZW2RswdopCb9JkQVS4Tz71mYbEgmyyts94",
  "key10": "53E37zAkY6e9ufsicAQ2qkET2VdzX5zCyHZPycNpwrTsaAshiTQAYYAL2b9Q8b1Lb7MUj2u1uErYTVf7vu6CUetM",
  "key11": "4kTz88M4qNYHY3wMMYhAnQLYgZMK77Facj16FT6nXp1hqbxtFeX1U15xW8wTwFuZ1tkSuNhgRjLSdEWYwrs7iYqU",
  "key12": "5mH4RQYArDBMKzM5BYSgYXUuk54cewmn8hogbV3WpqZbgXjvKs3rVwFLYAiy5RDG1hPnbrqQUyzwSz58oEwzAj92",
  "key13": "3MZG2mHsXgeNer4HF6CiN8JJyTjm9BM96a6yYCxkTRqwxEGJGmeUZY9kaXBJ8HhY1dQCEtDfboPP3n3jYomTUHYo",
  "key14": "uJ3acPmkk9uxvPtSk3SXStWyuVUwEsyZypq7oAvtvSqUqDNsJxjjqNvfkkhFZ2GdMAScEcRHZeiRH7YRtYuaxSZ",
  "key15": "3g9PZoxjgPCZ2WM79H8oQMiJrJLEWBBeFtajJ64YtKDsBHmLyJ17GYxyzp4nBgiv9Fbv8SnP3YKDnbnHYtr2FAQk",
  "key16": "DW9DmRqbxFvJVWMBdzWuc7waLH2L3RzVkKdF8g9rb1FcrGMzzDHjNMHhWtAHJQYWgrZuLgUfCZ88DnvS95xhbnu",
  "key17": "3T2RJMYTUJEj3LVkuo3JNDJZjTXEo56oZFkbJhYWMBPTamz1fQgasJiUxvYVitdVBJqUc3ULhG2LRQgFo4jeu1kK",
  "key18": "3gUYw27F4R2Qks8gnJFiyTALD1SCTKq8Wccw2xb4hBNtKN237PM49rdnR4mNqa1YPPYv7wq9WQ1xrKRUqLugJ9hh",
  "key19": "3AG7azFBteetQgDPGvRYcE8PTcSbozSvzLDZsMeLsc2xUQEvgdzb1QUbfXLdATAHhKF9pAMWEVLSdzVRnVf7Ezna",
  "key20": "4cVZt9YriHfTUszQmche5UtX5h67MfvPbUkvUi2NzmcxvaY8Xe3h1E3njHQbbw3ojfRDF7qBE76NforQM9L6cFnf",
  "key21": "4K3e4rzwaML6mciDsvFxKp7gQULSacaqpdGBX8T4qjgrQ5QNWBAbHLbT62nshU9aBeAqzGY3GhQmUvmTitGwMgkY",
  "key22": "5hNmVFs6aWyFWJXKSq2hb2RNHwY27BqFPf74kY4MFUQdZhZ7bRK2MsdxngcqLQWxRM1wmWJdfuB8m5cgYQdNTAbi",
  "key23": "3S38bfpDYXjy4rxTRmTTAx4TwcKh7v5noqpnw1qRtbCaWrGmtBFWaUhujqNCrdDbhiCPhwne2uR2KEkmQ96ovmw1",
  "key24": "65qUBHsxxWpSUkN8TqjwKtCkKyBpefNrxcNn1rJfLHq11w2Rn3Qhbg1BdTRzjCCb5ipvuL1SZqBXmAjnYa48HXgu",
  "key25": "3qQkcpuc3h2PVBQvpV13m4YkuggMCSLNvRGfBgMCLraWvdvJDamzNMa3THTfMe31vRyHB6Bbp6ufKrSUFogqKGyL",
  "key26": "5VGVRv2frGtpyKRqa91x3RuEDgCzAg76ygP7n6nxCH29H8ndVJ75FU7aeUvFuScevGg7oMFcHo3f3rpTx6curwUJ",
  "key27": "2z7wUsXbB8nkUMQsWTK1ECwP17aabuenaLbVgZN9FQ9m611TMEnfuieTtBpWr4zALCfZ27EEtAfATbveQBfwvk7w",
  "key28": "5Xo28eSPbKcLyEhYubAfi9J6PtSTwyzUDnuyLiVQJkzYcKX93C5HagdULpAK7nrnbK84omeWmp1bEQJ81jWyzuy7",
  "key29": "46JBaeQF9hZ7Lj99W4JzGZhe3LFAthCfix3z2TUVxy45LCias4rV55MW96r4j8MQUCzdGaTszfCjBXdg7CPJqwRT",
  "key30": "47xtXD42ch2WHQkWoBfsAfJ9dT993nfhevLw4KQugwNgtPzoHCs4VFsxStJTP3iyWFo55M9bS7f5aT4Ja4Q6SRV7",
  "key31": "4Q22kfa91kUdi7dQrWPpf4LZFg1hGa7DDxNmE2KRTWWvnvn72QGz51ZtRGN4v8qWtXyZcrCSynfQavQ7riAhAuBq",
  "key32": "2RbVAQLfumghS6VDdD8n3TPVYfLsKjXVQGXkRWPxNH6vGQJoD9UhVphXVArTAQS1rgKesW5FwnecvLfPjNW83cTS",
  "key33": "47iJNsBvxbTpSqcW6kVveX1H3kLiqRL7mFTryDbq99Ced4bgnuys5GyyhJGaeF3L7yo79yGrpjemUadSoacxyPCH",
  "key34": "5tR5kUjUntD3noemi5W1sX2EEfiAZVUBHT6gmszakUqmv8zVtGJGEYbqm1WTXuH852YPtq8cSbJZFMjuGC1gK9Mt",
  "key35": "cLLgGYaKPEtq96fTsttZyDp4PCXTozzdbngXdGZFH9a3aYknywMrDU3iGrypSFrGWGvEi6BgrX2jKpJkLP1sWcQ",
  "key36": "4wrYsgCq38vCwu2gLQ26unaiSag8s2iEuSbstoRYNR9nw2zCgNi6HsJN3DCSLZzJyypMY9sacHdXNFTkAht6GUad",
  "key37": "2riSqbFWUuMxxTHeMD3fR5qTUQGtQj5c22BnehN4MfuGdP8yvjCz65z3fSNVQ81sxQ8P8djvgdhDaQiBpvA2vFxz",
  "key38": "FHzpEmstbrmLy4iGkUecQEJLwyrhk3NYvCwDYyPmadzaK3SoH3dVJ7EptNYHu9CWojzcM3XZFrAxbr4N6bQy82x",
  "key39": "3xb1hzap8w21GNgK8goVP3vtgLDT5cYZHWtycmJDiMmv6GuxPspoun1wg1iwiuF6mCyg97FWQszAWXcUSdbmz8c2",
  "key40": "2vsVdg8HXWSxg9BuZpC1QJ2kwEcNCEmeobdBrz9DUSRWEm8M7cwYEy9Xw56bxutRsWXTQYGbsjpoVTGKvGRvubyU",
  "key41": "gKv85dJMWLSNyMR8k72vGr6FpTFggCo2yLK8AMJfZLVqmgyCvGqBHqsX3MZTQ8kyyfRUjPYuhURqWKFGmTDHZ7D",
  "key42": "7CykC8yqZtE2KahvzdLabZkeUxQMSzfh3vY57f9xeSx3P8B9WELiRuj5iynhZMvbzgZPBPcfhAsGwp96xqSxnBM",
  "key43": "3J7pCTSjL1K92YKpVbrf6MtNf29TdCVxM92EUjc41miWLkQ5Bz9gSHDiusHDtTcEiMzK2JLx426fSnVe1iEzpr6i",
  "key44": "4fPYkFHUtHrewUV7y4sNEpgDRyVo9VWZbqbQPuAVc7yYiQJsiz2Fo1kvCnVNR3gfsUq1aBQBBN63imZkr2Y33Lv",
  "key45": "5A199veRA4V68YWYWDnjjn1C6C8APYKJ4XkFvhc6dn7DTUfi7aSb1tHpEdpqUPgmciHKv5XmwBUU5FpGshwkTzt4",
  "key46": "5M7n5n4ktbTcgyiztxFiacXqQ7RG9UtdLKYLo8f5GKrStSAf1A8mTj95s9aenp7JouLLiDdjJHDZEheRUjSi4rJc"
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
