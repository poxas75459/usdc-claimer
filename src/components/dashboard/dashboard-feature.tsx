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
    "2WG1MiR7i7bmeGP6LcL4e9e1VanGQdZHTUynPKLUwKXgsrQyeBfhqTVLzw6XZVPs68JAosMPkd8bAsX6WvKzbiqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBsGHcT7UxQxYaT76W4kiRJTiJrkMGroC8T1wX1LbKLSJQu4cy5gEVN55tBsLBcZT3Amyezv1ztp9Zz6tBEWinE",
  "key1": "DuuQ2QV2xNswd4ufohmyXFwhedqJVkgqoFRqrUiDTYHyrNo2E4Jut7GoA9TYeNZB4RLyN3eQwn5EvykTH9Edk6u",
  "key2": "3X6ou51QLGQYq2pJCbuynarjSmLyw3FLXZ1itS5d5BMfUVee4PKHMugsC96oB35HDSYFJeRbZL8BmQAAYXhs9o3v",
  "key3": "5V1DoGXbnnLdNRtaY4T8xKmVSKhN3AZeuzYHm9bWUPHBEaRvEvoS3vPDZTjMxzDsvjgeordGb8N8XkU3kBiLZ2oe",
  "key4": "37P9P71avSN8ArcfmKfA9ASUDHiqdKaH2qMugENKFdLtLx82b25sBgpCDvnGyWFhfXNgSVg4kTVjgxKVnBYcTsj",
  "key5": "2tyLWL2MaW8p62DHe7fuwwejU1CQtg6nkmVnnkCvcYf2M5qBmTocsLfpaAbwZSkc7NcmjTq3sZjpkkEgK7ZbJyC1",
  "key6": "4eRHJumLxWcg9qzSnWt4jjXjNCjkLWxh3HgTEgeiDwzXM8EV1vbYgtnx8WhsQQ2Xax9uHnkwPx3CZ4hZdLutnTFW",
  "key7": "5FwHb37DiicPMaN5bafMiPiVXtxriFL44CrHmdEYXGFS5zg6cmFN5Xnb78ewYEUNEqV8ZkWc3sorA9knD5qGAbgt",
  "key8": "EsWZisWaPKskDpmYUd55h6Tsfiy59PFtQEei9XywbcZXEB5tD1WZxxgedxUeLLtxoXmF8VqDEXebozU8cJs1LuG",
  "key9": "GX6Jk8jSeWZ3uJUtGbXTfMLHugzWvemmHUaWjNbbiVyNdERNGF1oEzpf51Q4RJwroms1gbQcKfYWrnWgamHSoVZ",
  "key10": "5sf3YE6zLrMXkUvwMvGLYV7A3asTeXwogZn3UzT9TkP2zTT5JG8ekjrqLMuxwLeq2U3AofcfTMya4KGJfePa9EnV",
  "key11": "2Gca9AcPjN1Fda3LVSWug2H34Py8kMwADU5rbHQq1kdzfjyST2pXZ997uhddXDneQkwg773Qwr6WNvnAAQWQqZqG",
  "key12": "fDUwiXyQVc2gQMp2JPBhxb8p8Vu4yi4TabukJBPqfgJGBQ4mZ8QBiYvUtKz8xek1Z6HFfaaGyhwcEahWspEbjty",
  "key13": "5BEUyrfvJQzwuDeuBH1nMv8vYzDVJKmsBQFEtcLgzXK4tCvwQJLNKL9yZYAKCSs8hVjAKknbda9R2pZLSkmrLA4k",
  "key14": "3B4fvgkCi96AxWpsePxvaQHLzcejStkpT6BXxQ5UvwW3NKiJtGyrnWLyxsygyb3swmGGqLVA5s3q7aJoYwq1Fa54",
  "key15": "5pUdewhaMNJspXfoXQWT8LKMsNCKj1wrhucUgPSojTqJRYLszu7jrn2F4MiWjt2ssnJGJ2aUNcHC6JxN7nvupzpq",
  "key16": "4bpMpXgqtbf3Dc3tD6gyFT4XAHnwJm63ewSxHtqtSarzyE18vM4d43yXrWBz4YdxhQryj6y9UhEYaJjLgExddZ4E",
  "key17": "3tWU7K625sKzWaJXrMzULSvLnGnnMDbkUE6vkTzu9BPR5tNUz6Yn2rhuLxr8wRwsCqpTsSzvyNEmjr8cRSgjGv3u",
  "key18": "24ofdJXyjk1JA5T4VA8gsWUH4EfaL9regSSixXPTHsqdAHu5r1t5QbccEvWqbtjALpsRBD68bwrWo3oatdNbUkZR",
  "key19": "4zF18XR5EhfyspZZPfQNqe6TEBQdThdzhGZyu6UabdcVH9KPHWmDeLbfx9zKP9MJKH8jNvBobd7UVWEA1N9X4phc",
  "key20": "5ggUxm3iU8BXoyFnNdTFXVMh5obskgR6JMaKvNWaBpH6kSbGPmnp3Jf5HWwkSxXum7gsmK6tLcfMFwS1kJiWEWHk",
  "key21": "5BvskUEHeNEnb9DQ3cjaUnvBaTS4E7kp7bwZG43FNngGTVaFZJZXDsusDFXAZcnY66CV9Xa1HrdKZuAgJyEtgLqP",
  "key22": "2SDyTxJ7M38WXhVJazc81nR7uL2fPPJNnZTftgXQR6dJpz3RUqqcDwwunnKBGZDuiEeUU99WqSs19AUksg9t71Np",
  "key23": "3H6KdxtenwUd3MZ61E3kEZAmYG9yFPyorT5FSFLPBwhRH7A4i1TsccvZwSnzp5XdbE5NDetnNH1epuEY86AtKCTx",
  "key24": "2A3TaWYtxzFNTscn51vte2L4bxo23STm4YGggtRJRA7gaGNpEUfiiZdkJbtEJLjyFhozdWTuEupW27wVzapK4GuE",
  "key25": "utTjgPd5gwMbYbfr5AnkZWF2qtmtDBbDaZZyx6bo6KMDhjJUcTPEnGbhvfshT4xi6gwSbrcB6N6vHcbsc1w5iDQ",
  "key26": "cLbMXDn5PXU8Yp4tRz5uqXWYRtvm6RrWBsGrfM1cWKvCYDTa1gDoZg3PF8UpkGuTYo5wGTYeKZxV5Nu74ydVxkG"
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
