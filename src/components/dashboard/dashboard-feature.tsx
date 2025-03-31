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
    "2am8qhzmwdHFZ4KAKZYAkYkoWGT39on3E2p1dS2pS94AeHdXsAEMZRNSx7qELRxGSnkDSJK73yo9jsQqfEgr36ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cguFnGtzfpAQ2SUxM6bAPME5CniKntZ8UXL8pbVWdp7fH9hGyt2iYUtdVLU8oib2MzKPLCosp3BDSjnkCZxBxkJ",
  "key1": "4YcE2a6KeYTfs13ujcxEZgQqS5nMxgn6s9ZUwRXYMDuCMPdEZYQ5pc92w66t1dB4gRJgJT9oN3VcGFCE2T5G7H7j",
  "key2": "4qUcVG99dvWWQbhUfcePdop1NuWmNKhQGgPEqLenkxNvYBFzmBdTCL8T6C26AXNTKvTDPdi2HvFxB3kdrLPJNJPv",
  "key3": "4rSAcEm6ZThNMpWZWByNPyMHBm936svTqniMVBQgvj7Q9b5N5KUNvcrt3FSfabpaWNMA6WVbqdf7WadyGQHV71Xu",
  "key4": "5YA8VTDpyLee9DhmBed1dtdYwVi8ZQ1exqfnUsibsVzm9nEpGgyqTov6ruSJ3uWzJ8CD4RBwUbPFroTU6wRQ9CvM",
  "key5": "5FVc7hYSQgLzBAXyWJGwAS9hfnmubuBCiZrphxwsQhcFfHTnLu1TRqykHzqb5WK1dhXYXYCkiNjUbtGCzcWpNN9n",
  "key6": "2NyzCfLj5ibvhx75ygGM7R8syQVUWzYF56wdjQwLV1f5vP7sq15hsFG82FNwGtihdqjx6NfnQStM424Pi8TEPs2L",
  "key7": "EYUf7zFo8HLEYo6gVUAmeiBpvKsaR4nJoZygYzwSoA4ypzFadQPEqFaFrLGudhghm3jQuXfm1awkL81QKG2Dzma",
  "key8": "2V9hPwq777k28jtXDjJXLRK6byEED5JyihAdMTdA4c35dqbfjy5xz4Q64Y9utNCPkPxvpLAKjn2pvZ1BUu4CFqaJ",
  "key9": "2TGswb5V7BZFmEA7Hv5fQTTX2326vLKgCmdwC2r6fJvVGdCGGBhiTFbQgeCFwjRKhch1Yg5vokzRNJeBHc2vKXjf",
  "key10": "5u26DJEPoX3p51FbGvwSCSR68RMGheccVoKfdQrUrZ76bpUf4mRN41uSCzZ5EkZyPmeE3gCkPRQ6dPQysvi6w3VC",
  "key11": "31zKACDiuJbTYeaDgWxUnrBAzTDtfBoYgyjZvWWuj6QR7WPQZGYi3f1kTPcDs7Zmf6byaeA81Mod3DUC6iuNsaZ8",
  "key12": "3HpGFPY4cqLySTQqY3CacPdjVjpb3u6fwT641hDw8faFkqboyE1yNaCAwbJRLkw4TPcBHwpCtXUwUK5GH7E1RR2v",
  "key13": "3hSLP2SqdYtZL3v3vBtTxCuTRRoQqK6HMn6qtqm94LyiBK33NQJGxKy16VFqaXfEQmqMr11V9ce5ANCREpfqw2SD",
  "key14": "4FdydMGVYDiV9DeZ7psAiuNB5irYC3TgUecuCjwTYd5CZ4NmmzrKRkDFGx7yUb94hDotENDBhoBgD6k3AnaicCWA",
  "key15": "4uccRogQtaidpZUWhbNTQckXVsKgnAwW1AhnVp3s6FSvG4y5dhmmLvS6RatbkV2cW7kYGUKPyBGNCzQQ1qXtxV6w",
  "key16": "y4WDZ7h15iP2JDodCZEoHaWoWZ5F9qb3R57nidUqiXnGhDcg7RS23z2q1DR9HxNTefQNPvTRQcnyckcUd3C3M49",
  "key17": "58xBgq9K2R2CwHtZZsaRTHkPX4U9MrXimtSzudJb9Kze3H7KSvYfxDdVmzSc3opyun4p5nGN4MmDpFoRu24wDr1Y",
  "key18": "5WgsnRUFDMVpCCBcken9TjNd6kA1gg6BQPudTi1c8oVs6PLrNN7qdFrYVyYvtNUXQa1bgHpY237wybad8u2jyVQE",
  "key19": "2WiEYqhU6ftxwH3JsuAzu3fQWgpST46yJko7cEqWVJkTDgRJjSB8moFppr6T6oZ2cXsiqRn2x99pBYPtJ8ZbJwAw",
  "key20": "3B2fxBWVt3ydwQxAQNLkHJnZR57bFkWNzddo7WDx3oE9trGuJzgTmdAbAAwCk46M57pCVP8EzsmQtaCJ9PnJRmXJ",
  "key21": "5ZXtkbeHDPvBQgWXLcvw9JJgLnfAMTLpyxz6tVAg9SCrVv9ra8X3LM8v6ErWupJe2HCpriqAYxLBKgsj1Bxh1pG",
  "key22": "3ZcDuNZ4DW75yAD5gPHiKUkyMA3u2XQT8aRjX9Z7mK6zjx5cmyyAva14H14ySTq1ovfj5QgarnRRuJArUiC7bikY",
  "key23": "4B1ostu2tvrXQBnCg6rXz5M11aA28n3TuPNh4h4VW7KADee1KGKFPPm4WJkQdGd5s879ByiBxg2MWHSwj7erj67p",
  "key24": "4nbDfmfFmXkHixR6ZcgNixTrmC1UYqzMuYEctcpLjzmpATq9mrKr3LXbkpCUFi3NPUSzq5AxkEhNLdAH4EZfTEgr",
  "key25": "38b4sBk7NcwextGEW5GBhMCwT1sZpps8YHhaxyVjXc8pRidVoxv5MTAYPTtUmqN8v4cQCEQu8hkgq9fXtref1bqr",
  "key26": "3YxmDedYRwZhUbdEfQaNgBAxsLokZmyby8f7aDNKSbXnZf6hBsFfzmdrW3nkpayxbThPaSYZSzBHQgN5yn4m3LdP",
  "key27": "3WRZCRTKUZigCGiiJxwT897gjuX8tx1ynbvd88EQeF21nkXV2fviRG7Y5XpX8ctrLgbczA9MkECfgDXCy8ea3Bps",
  "key28": "xbVGiPfUV8CCDEENBvxxPcFgdtSGfXLVbZ4t5W4Hih85BWGW4qGc89KMK79FKkZqhjQK7tRvfEZBvqG3rbb8SF5",
  "key29": "27YpvL228iM2YM94NooXx35Xt7D5BEviiHcQZm3RCwyP94amvUVJUACCuvnYMv9iEXfts1AUPUBYtipXyM52HPco"
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
