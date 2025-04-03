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
    "3yqGHwTEfee1nCNFbSocGSJaMt2e7a26t355VprcfEe6yWXusqvdrDSKY9VYbZEsWe2c2e29hPvNaoZ88vZ8n2Y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HPomHo6rdNzcJraQDJ6S1F7nZYmGZJXFcwntHRfUgnYGj3ifhCQMTwxWvaMCYn2m3kKmQJYjbtdsERWmxUXaLQL",
  "key1": "2YEpkVVDsUgcfDimkQtC1aUYMrtC72MYNMcz5uadX7A6Y6V1zULDATo7CpLeSuH6AAbhaqanyphVQ2SgnfUS88af",
  "key2": "23CiX8LRgLmY9j9uN9KHmN3CzySKE9dSPtMF9cyTx2W9t4oS2kteGw7zSzJE74H3DgigevCBa52Y2MNAVZkEStj3",
  "key3": "5mgY1RWsMA94dcWfGqUQ164niHRZcQagUkBDxNTP7ug28wmV8RwTtenUz7h3S825LCBMHGSY7bLKE4THQXpVWST8",
  "key4": "Q5hrNQMoUenTkQShmy7GCQMxg47QpvdavKCC4b85vGN56geiJkMUGngiGUCETR8A8gDCRQPSNZLRq9uRhXhK9Xh",
  "key5": "4ZDSyn3EL3WTugHDSnw5a2uLkp8aEVXpCXu8XPJ7fZX3hjJQsYUGbEgDtywVfp9r1ZACcK7pSGyAkMgi8RjZdVwE",
  "key6": "Kz79jctb2qhFC6BiuntsozdDiLif5hBYWkBgi3vJpRERkTsZiWv3LznpTHQRW1JJGtGaKBsEzhBN6dNLiFnnQnW",
  "key7": "JkUo9WPQ16p5mYcVvtyu7xMWEKQxBmKFuZ6p1Zogesffrfx2gJ86rdkFaA4yoJaXy5sBve3zpdrNnqvoTM4dVse",
  "key8": "4faHJo6RWrgsAX4jFYLKZC1Bg7Q9ZpVpdhW12vu9B56Dn3MXRyzqBX9m6CmcJndtnFxfi75bw3ksoqP2CdonD7uW",
  "key9": "3r6aYTSvZKmfAfdbVmWSkbsgwoyhPdHPoSjXD7QyrbPcp8M7uWs5pw1fKNgkeerVR6FZkqgKCKcoJnuuFHnLaphn",
  "key10": "2gmDjj1FwrY3MhxSiy5hiqKNXNhLsoL4EpM1Qv3xnsCkrDpRJsVWpjQwBo3Emk15mwvaUBzcca5bLGQ4PYxmNRqb",
  "key11": "8L3gv9y2VmJYhpLPdZ6XBp33dwvQ3fUvdKBWfT4UXjCUDBryUjammqSBduF6vAAtzaTbLCeepzrb2sVBD7oopGb",
  "key12": "LyWzZ52Bv2CW3mKx57SURm6MyXHGLt3yN7iMpTdGAYDbe6gsDVUMsYQVfKgcjDdAy3cMFgXotY6dU4YiMsHnRRK",
  "key13": "KvctL7E3t6yoMoDGjmBHCjrMHpfGmZTy5hEk79JjZwAp7sbjZDdpZCkinTVJLs5x1zazYNtUsDjKGqLfW7DQ45Z",
  "key14": "4F7Gs8Rp4HUbknGon3wju5RDvxPERgZCATrTVCLagaBxkk4aVAMsptXJrEWgSuVo6pxhVsRjzb6dy4tU3b1FvRYf",
  "key15": "3qhFbQTCxehvsdhqZfufjKtv4ZEPotuQwZFA9MURT691daUFj4ZtxabkX8a7KnWAw1BXgLETWxrvFmveHG2dcEtk",
  "key16": "4ahJpNWYyWaDfWKHjbgspYCUAH1vPRqAzRXKEHaHyy6qzVXbo5BNLXKZhMr5RrZkPNbMou8sx1tLt2cNzWCDrVsm",
  "key17": "2YyHdBFjZUBBMHHV4421Z4qrUnFnbtJpsKyutBSLYvTTU5A6iej9nZG9iuC4K7JHwWagdvMe9MiLBBEDKYdaTXN2",
  "key18": "4E5zjbR9NXjH3cEmF6sTpeHfVnccoJaG6Snj644WWLNzj2SAuU63R1EwD6imJamhvnqwmqriMUuCDCSbPB6gYLiW",
  "key19": "K5is6FaK6UVnVn8kMLTrXZSSi2jg3xp2jmpqYRcDHypSS71HY1WZ5rwLWsfMn359dLxuZqZ5zmHTxUaFm96t9Ur",
  "key20": "4gribdGm6MUjo3z3mi8x3VLaZpWvNTkZkMqA9iLYCdUvQvfP2ovg9gx17iYqBHGPceQDihZUP8DVDxZiRGA53KUy",
  "key21": "4kmRmxnFTd51U8j5hCbbZTgmXh9GWiq4W4nsDdSuN9QTYQfm1rmWxHNHYYqPFA4wgXj58447R1HDN4kobzjfq6L",
  "key22": "4oQJXhT3j9MJC3S1HeYheo2md3w5VoU5dNGHQRXiWCAY2vvyQY7sQG2EYqe2pNAZguueofpL2FeUcHCjidwpREZF",
  "key23": "5eCHjbspAagt4NzA1PA8TNmvC7MHc3VGhKyqs4tgU45NjqqCiRhT7ZC9BjE19B61UPTH3bqzMXiaZhNoFkJdu8Nc",
  "key24": "4Z3yyknwwyYBh4oiSqH9KzyddzmMMyhQtuWGccdZLKHGX3gC9UdkiHBxbgSMaFM7ibPH4td5moY4rni1dsd1rE25",
  "key25": "2zKkPiP7c1YwK6msoAWCY3sSPDyMgXJUuEkqhenWGiAGkrXvusc9YJVNVYXG11zxL5JozXicj6UM5mVovNG8h1xZ",
  "key26": "2F8Hr2qoPHZPWPxL2LEC8EAabNpgPPDtofQ3DJoGYN1tJNF39uEeXwZyRZGEdu5dLcVnuvfkXpj33TycYbZNXPip",
  "key27": "56bhpwnGhdcpxo8LMcjBq55zvmcZ6VqTmFDUvdQY8EBFjciRarw1xr8aXaTaT9NpZDtz21GtTWjrhbqQfBZhnpQQ",
  "key28": "zDg6JAdzZTXpVzghELEmEX9mfBwDancmCZQgYv7SLXtrQQzSgPg39UnMV6ouzLb1cG3d9rvVDig1d1Za5S5hvoU",
  "key29": "4Gz6NBkxhqUdGKpb6ijbuCoiP7QQeNiWBe8cNZsN6FDcGUCAjHFj9N1w3vtEuB9NJgCGBYS4cbjsT4gkUgSjRjXq",
  "key30": "2ztFdkJ39w8WaQq3y5dnhsgC6Xdfs2b147CC2sBSYz7mRj3Y5obsrKaRuSrjoJjuTwKPkDzgfbBFQwkBCuN8Zf1Q"
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
