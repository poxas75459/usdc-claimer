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
    "4qNSRFJAT66KtCYREpa1ECKUd5tmvXUYEaY26xekLbwmQwL6vy4LgouLmi5hEJSoRoedAn1d9D4b1DteFfWq6ALn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N7xMvHkiBpKEy3koDmQtzgykRtWUioqM4dVq6cHxmUHJt1dktqje1jWHBz6QLgDUDuA1ddHLCpEDqmCaKH93Cfk",
  "key1": "5CkxqkUHTXKCTxpxkGoSQD9aZUEugidNgbfzoHWH76JTyNQp6RxBFSHkkeLwPVYHR6Q3jZPFk2ffKVAXvQrnhvyr",
  "key2": "2geMonTSbktJwq3pY21DV8fMiJnAaePQrKEsVzCLavLihJtNE9ng21RSTQhA6AFZUdGkR3VKyMm7uRQAGf8dfiJD",
  "key3": "3UiiZzKhsqQaKSus79sDLJpt2Ho8TKEziZs2saQ3R1396ohKgEH5KxHWC6wuNdaSz23ShwNjcJ6LjqwXJnMvzjAS",
  "key4": "3UwodBPfxAnPqo3WyaatXxg8oNcSqYYXe6FxmXsM99joccpBWKxRWKHQ2pb1SjntMXKVYTLeJqaPEiaCYsmnPxBe",
  "key5": "2Ne5BmtrKM3mnn5LEtZ5ayMoReAMruFZ2kxSg6rJ2dvjwE4CzztYQkRAQ8W2AqkgXt4Zvf7MmGM2ssKPEN3ox2G6",
  "key6": "4JA4A6r1jcN88NtvtbGqyJfVMQzvypJJb1LxhKrvcGcDn54MzGyQ72Hzh9Up9iMNRBipZ8UMs4B5fCFWGsu8uouU",
  "key7": "rh885gouQtYzY1siZA9jaVUG26r8d2Gbihox5T7G3zTt4uoqUf4ozFrjKaZ9djKifysdNv1jiSThXhqDxcNfjV8",
  "key8": "3Q49qocj7on2yCURqQEDs8YdEy1it73V4FskjXUcajq5KCBuBYhAA9oYbV6UScgGrYqhLLxDoZEqzdEDM4DYszA9",
  "key9": "3ew2FzNXi7gBbn8Nb129moi1Uav23kqUPShevGkvsQR38kKSVKVtBmvy4fAhJ3vgFLa4L2BCHQG6rbeRDsCWedWh",
  "key10": "59d2MVRLQK9kPsfEWyAdaVxDFxof8a3U1b9CkppB3df7yFeheUC6JHxMYHio1c8osE8jze9LCosaous7w4SGgEQb",
  "key11": "27Q6jpapVEzeMFyQYxNMvwkhVK4r8WyN7Cx98Fot2m9h58X9SAXdxDaUP9eWRGE6381PvtTt5BmLYCvHA5bHLMpX",
  "key12": "3K4ELm7G4hkczMncFDNWrusXP2brpz9agmSdbdrHFMbM3tn3JVpZLHYYtUhfRdadHvcWW4bQ1SpGAXVmZbYTqru2",
  "key13": "34EYvgXKktQGqjQ322JigpJZybpknz4Kyddx3deasZj3odNNwYfARiXtzuwWYNBLgbVteUWoDMirYbwc7PYqZJVx",
  "key14": "4y1F7uWQMbFiwkQ4pkHo9qthRf4Wby7ewzZBLfLe5t4pFmEUhsqhyh9Qhfkcac6BcqDNRkEzFf2hmnswYKdBDB55",
  "key15": "4r4smGMKGoJwPurZqRU58r54z1G8LDQjwzYRNjHDE6RpPG8UetrsnMqarmS61V8hkbF5tTwqcWK3RFcgrXNKBd1h",
  "key16": "5V1WbPnFrNLnreGX7xmDGfSZF4mWsjQmSzLHw12v6J3qbhbD6gfRnkd7g5fw4uEpykDG61SUpieQnB4AM8Cj1b2n",
  "key17": "36i5m5w1CsCuTHQKminbcgZRAPyJiKtC9rLgdYrjFkvudQRpXTzvCM9TDAQFHww1hRnzodUiCB268XESQcAcF6Kk",
  "key18": "t3pw8BK9cwCygWwW7e94QHqwLp8Xg9Mw4rSoqAG9v6QtFmNGQstJnhkSDZPjeRCFSKZ3Z5uKAvqyuWKvzX7fgLq",
  "key19": "5JctQNryVa31zzcv6SfXB17VauN7qzHzq8hhn797F2AeWiE3Z3aKdpjzWAfTEXHJyvjGFatGcYTcLPzpKCAQZd4y",
  "key20": "2VHfdU36RNK9zzBS6j2PCQLGyvZ5ysaafn2uyZfR1HUyN7GtKzRs8K5esvVYGY5n3HJxRcQ5H5ZuQp9gsmmqshKY",
  "key21": "3xKUAu3DhBNkKbcrRHkxVExKEYogfGN3NaMkpcU2aoWUwg1HmLRySqcAxGJRNYYYX7aiBQz1wKsthE1TzsW4y4g",
  "key22": "2b7LVtxfYWjE6YTUqxJjEJhnvQGpxC9EqtGjhLo1rYpP2r6UciWCewMhtSewF8onXa6mfX5zrKcJKsuRPNgAdaXC",
  "key23": "46T1uBvQCKWN1BpNiJwW7StSUCKDfMQ8RjNzQdiWs88vKuzpjr5FuTwQcRKeKjrXYoz3rS6LcNBCCs9uURMdnwJm",
  "key24": "5zNBLexScXbwer79ajRfCsjYrYzAeDatfStvuwhveuJCswodsV8BLrAoAHrLVaaYVGuMWiuaCvtqnvo5mDu9vrY6",
  "key25": "2M8rZiDLN18PJzFgSDU5rPYty4WpKLrksge72yrp5gQ3pjxPAuwiDRtDKVryYaAK2advD7xYBVjp1JmDsgZXNuTs",
  "key26": "SGcnBinVZdA3Pn8EaVo2YGiNwHo3qMZ9fykDQdStBBJFLM1K3DkXzw56hd18uTtVCbR41PPd1gJ46u1VrXYujvF",
  "key27": "5z8RyyUKNkCGnoKx3hLFJ7gu3ND5BwhdXdpEaHzcR9QbAmxmuy5FQgf59ZEPiG9QxAXjtFJmEg52vqRpbSQCdk25",
  "key28": "9k5RXFDBAXZk65MmgWBybSAhxN9roWdLNDg5CzFsCaJcf8r8yhuFQpBVSN1TEM9T7yDuGz9KVZs7SMuyTcynnd3",
  "key29": "4HkMfgtEcTc2enydsYUbiveXpRb48vSotnsW3gvEayPpFcpTn78E4uTXhmLXUfpvzdox8aPaG9ik2ispPopyGLPu",
  "key30": "LyyDCWVVvAPHnG5P2tPXmPnwsRyNrVmbUk7V2DDnCd9jwqay76338aFYrvP15saJgqGWQKeMVZRwwsM2Dtda2a1"
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
