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
    "4cie1DctH8o4GFEDicP9d9FptWB8q33tjJn3cfngZfnP29T1fu8rEhXtLuc8UfjcugdkD6SgcU17hSAhtYNrTVku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VcAja84e92HJWewKJAGA4pR4KPNiqPrrQQmzu7Gej8WrhgYDZ6AWhcNq2ByV9csZzPYiTGwDivCM2SiUDF2mA3y",
  "key1": "2y9GouRY58c97ii7275hd47v5DnYyxtjEEPt6QTV4CuWEQ1Sn6Q7fFzYNSdPeHsh56kP75BuHwgEMhPTqCLFs5WC",
  "key2": "3uZk7EiqpQPKX2aqGUJoQ2HaVK4W2tVsSF7x4UfDTpWcoL7YDt7RMdRy8aN1vvYHN95KMJNFiKAYAmSM4xZNNBaX",
  "key3": "2jxWiLHpsfUHuv9JF4C5nfLB6Lu6y9J7noZPxKGJ1XHnt1xTxyb5czaHeV1d6hk9rXyAhs2qsXMt6gqeB5kADr5y",
  "key4": "3nJq1SzDmcYLWXtznRUBKjyfpAMBy9XCdQnNjWsatwXPHMNBW89J6aerjdeK9T1pPhGbzTcB7f9AEYkSvL6kxwgG",
  "key5": "1QDYzGd38gL4UXqW2f9H8PeQTHZXWEjFGyKD8R6JGA2tco7ziJ5qfqFpRzuhTSt8VT7eNc3ztq5zJwvewRwJPZd",
  "key6": "4CMQxRMMYiajAXzizbpKt8nB2gTzM6ZYa5BaFhwsCnTRZg3vBg3st9xrL38c2QTyyG4Gzhxq8GKN1rNCxaWSetZe",
  "key7": "wHbG1dWnt6Ti24zzZmF2ZsdPPsJiSPWhNG5Arq5crEPgFL548rDxm3UmZTDo3jngenJinPPGW9Rau1GdAGRstjh",
  "key8": "HKQ2RKT9bfHgvBpRsG2umuBQxFx4Ssd7e7z99d7861VrGhnENMKxqNTP9TrfavXygFqjr7gx2y4YvZ6NzjkaS76",
  "key9": "5sKLe4CNyXPYy5mUBx17nQ7SH8WAxJR2Fhd8Lt8MKoqumbPJpPqWtFrCe7smS2gWkT8R5o87Xws8iEefiWctQdTY",
  "key10": "4GpF4M7SQ4PfBWkEozzWBi7bncNwL62AF7z8xJKG9zY4zxxpZxPbmpTZft7DyDGeseTPB1hbrBFQsiesJscrDgZv",
  "key11": "2ALL82DjHbgoeoakCjzhhRLNPsk4zSNkK11aaxGxNMmBu414o5FJNAw8FxZ161o1TXtJAgMvLBqFHRcNJJZKHLaF",
  "key12": "39UZKBauSqUPPadcuxsn6BJc9Cv3VDVLo2xz1B4bxXsYLZT9fs3K1ZcB4z66KS2sCxXrAt1xzQ2SrQ3GFBwCRspR",
  "key13": "5AvbUYoeCdzxjpjydUdXDuCE9rZpWsQBUNksaBPLejKgev3fD2JxjXHEpubqkknxJVRCNxQTjLfGPP9in1HUxwBR",
  "key14": "HsRsGNFgWNY22QJJbcycWnwKhgCfhi2ghvBxXi2Q8ApjwQnM7BzJXYH4gy8n4C9e2XuWceYomhUCxDMHMLpYnky",
  "key15": "3xGHkkkC6G5KLPt8swMG6HksrCbSkyByFwVJ8WWkb9wXu4z6DWdC1vVqAqAxZQtAs4Ge9zTizG8Nr7HRdwtkrSub",
  "key16": "3Zg9Y2BP7PfoRozwYETxr72ZeEtV5QSfRb3sXSHv8nUBAbK9NJBWKwdQx8PCean8E4MiT9Cx1bpBiScB1JFJ2cqu",
  "key17": "3ZsX9xTdEvP6cosU8cY3VqxwrQGqjfiatqaMJgELNCpUahEehS2cFksz5YY9FEu1iz9xbK6zRLmyNwDocMoaHBj",
  "key18": "4ym8cUjv9wto1ofYbdcfUhHY1WQcG7UiVgNJqPe2UZvrJ54CuXVJG6ujTFxQZrKAb2MzFqrv57WTFo6AdeywdC6s",
  "key19": "28sXjmDqypHU4cBMQmve7u2RN7xnSfvuUhYRo66QJJqXFhDGgk597s14FJMSNcE1KfCn8mP91NcWNqqavCWbpVp5",
  "key20": "5yR1Wv8dycu5iZLHAY3v6h3AenXwC8XxN1KnLe3BUK5ZnDHYNvZLzm6sCX14K4w3nRktpAuMn53MMYDVJ38VRBA8",
  "key21": "2gpDePh3D4Wmo5XZCABd1zqRtmzDCESdER4yrg3KPVXDAFYYUrsh3wKyctbDjUgFyZ958hxhJTSbvxQtMw7uZoYj",
  "key22": "4eGN3uwwuqeyDWBXkjGAXFx27H3tTM7pBa8LZzHmkdDU718ZpV8wUMzyKaiDRQRA3W6Sssh6YNCtBeazLR5mS8id",
  "key23": "MjePMQyEdUWEQEV81bGepDYiZmy9oY26dvwHiWQwBwBLE9e5qJzxpKZrohe5NjeRfDw89EeQQs7uFmMeUrHM9G6",
  "key24": "4UPH2RBYH7ht7Uej6UytMB74sKvLp2XzexMXdxinqWK55mkWcdm8avpyixufr97QbcwBbsYq39PViCUqQJvzJE2G",
  "key25": "K9DUdrkmvR9U3EZgVTsfsEAwzsQgCGKvvsAmWa9ka8naxpiZKkSZuvR2DoSfTVdwiBU6jZQbKLm8kP38u4QK2FR",
  "key26": "SStLCArDJ1YQi7oYcc927gdmahB8qKEjybP5WkvAU13ramMiKrsBugJBHrnZEUDoNLRc5Dptf8ZjMint46jd3dr",
  "key27": "2ZMRFTVV259kU4hV1byzC6gLAsKUxMdM2NhHhxwTvGSmY7gEkiExyH9AScNQh47QHFYY8L6aB87cuHFyN3ea298n",
  "key28": "5Vi3M6JEdMYqutuQNjZGhES1stUoX8T4gZ1yYPgE6bqcnC4vsZC9KaabYCJN4YrgvP8B9aFnK38JR2UVQjjLoTwx",
  "key29": "3XqZokyMA2hAqWiq8ns3MtWt5U7ywVLb9tDVCxnw2WHZXxv6kzgPQADFV7izgF9eJY4j6V4ZvYwJGfJM3SPeEpY7"
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
