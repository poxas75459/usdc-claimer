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
    "oTVgm4mq9irPdDkrUkMASL6hmGWq9FGq4XxEGPAdKkrGwe3NmbGAeFvBsNqiYzdj5svGoVJEZmR1tnuDgDs8YAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BD93HQevcbFoguyFB8f5CwHreAfXaVKTdHgN3XKxdDGq5AE2rmsu6GVsE2epfDaC4bvbwDkJorSXKxVNXbeh3jJ",
  "key1": "36DohL36iGKWUkzQueVs92FsuM6VVtSEZG83qgB66tYpiueo2GFwtaPdnyUk1qRvNbzfDETtvEqEaLtKEZuveni8",
  "key2": "cjnGw686UXFCfV7WcvqyoVfFu2m5uSRtZxCXnnxSY4jLUBp55NhBg4G8wLbwE7WMZndFhwj9XCmqCByXEoLpb9s",
  "key3": "2PyFKBS5f74D5YizCBBVVg4L8GkRQeCGxWri6rUUmNCsE8bhcBYWiNvFqVVVwYxSqedNUYdexv2yNWpg3m5E7NXH",
  "key4": "cN8YfgDSUz5yhhzv6MkWu2sHwGkUZcggSftw4cmncuxzU2YnzsDKjE8ok6cfg3dbK8s4CM1KcaDuWCPWEHpECac",
  "key5": "4U5twN8SrdAmUv2PdGXtYKXU1mx6aKvweXHe7wBbBZfvFGTJy6CZpfZVdKu48CAmFyz8nd9ovtEm3PYDZfXy9Gv7",
  "key6": "2b65AMFA8ebno3Ndo2QyKQLzZBpBFcvjfgzM3W4EdqmCZPu35x8r6t9EsCSMKhfKegWQAwjzQYNQNK9BEM47vZV9",
  "key7": "2ZYXXb2iKUPDWYVM9j5rJdgCE59NZShjNUieKF6nPNsQCG65rAqHhPAsYpxcUxFJDokzDHoXcGafCWavStKaeyAy",
  "key8": "hUNrXYnkGaYhY39BWHoH93j87kwTRzekKPXTN4A2KxY16H3KMU4eNhJtGGHAvNTgFcpaLLzMH9JnxwVM1m7fAB6",
  "key9": "jbYA4Bif7BQTpKBp6dK7hjXzd9pzbVD1Da84d5bEq4Hrnvkfwso75ndoc1kDRDZzmQMabam8hP3nxVK8jy9W19E",
  "key10": "2T4X8nQZ5uBKECT7Lh7Ry65FLZU1fGuLHUPWF5PxnsNsB1Z3CigbpWdVccLtkBWxFXBLsNcGdgnwX7LLJ29XHzwD",
  "key11": "ViGkxuAsknxqL59rBgXbEBDMHt9AL3uTzjDWXi38T5ezEVjHLZP6vHn1nyNFs7aAZyZRp4o9zhzksFxVjeDve6c",
  "key12": "5UyY75Yu6GsbAN9Y6XqLpKw7XPHjHLF7xq8L8ctcH2s7ZYH91srxq3F8bFZN3kNbGDTCAVsRyKXuiiiePfAGytVV",
  "key13": "61wxmGgzUUWGMyLwpKTqaWq5iTaQWUFKqRCdwckJWzrHT1sgJxg66sWT1gRjfPNWTbA9RXvaGTpsvvNBtvzuE3S",
  "key14": "4cyDRd7mko2KNJDGvS8E3SNJv8ERei43rwyVi4iFtG4qh3yzSts9iHnN9rirVFbLRhXv5ttUBSn1bgahjYRNDw2d",
  "key15": "65cqe7J2GQ8HTHP3eFFwjvyHjKRHYEiPfM2EVsvRmKb2qguPQvaSVrGb9oECjepog1Q4dBV5JVHQA7CQ7jQXypDM",
  "key16": "NMtHhDj6i28NLCrp7sEyc8bEHN4TEVedCANs39QdTcUeJkHXjdrcGViVhfQhDxEehNoNrhH2kaiwATXJQDZMmHt",
  "key17": "4gizpohXwH8y2ZF8mqRfgHdDSVapgE8NvDgMn9ogv8jRVpMcTiWuva69aEwnsFd9NkS1iFfaUxgaU7h11A7jUrFh",
  "key18": "2H3VrEV4xiuJfobk8itQvK7GYsrUwNbsVX6Y8YmuHKL225jBLAkcnyWWaD4YLCunAHUUGX48JeV4ULNP4XiWrTbs",
  "key19": "K5dPRdCaS3zySMm8RF7MKyp1KWUDR2BZq5d1eGC1jZLhQ99MkcS6duDZdJkhbJfLWRfq2i9pF3DjHMmnmtAdwMf",
  "key20": "rMJJMeJ8MdfBRdCEN2DGvVTwGauAYGb4fdpKKZUkY7wgig4Kq8xbDHKwHzbEbRmjuxRgo7jkEZB4kZ7YMgTSo2o",
  "key21": "i91GU4bvqT4RXCxyw21YfM5RdDEXCuiHWMzxeL6D75aBgnfgcdr2gAkH9WCgSGvvF6jtg6vd2WtcNjfQBE6N5Ny",
  "key22": "5amCuWqPGeV5s2fu4LhAGJmzFyz2WCypCM78qLgBXM6MGn9XU5ZfXMZjppMmDVycV4TatVFFXMeVuLyBYfURCrHs",
  "key23": "3Wyy8M4bKyCmKA68nonzisG4RdKwZhFeyZr7pBP7WRt6PtdXJHZBfbsDGQAChKNPGjxnT595Cw86h9xmKivcNvgb",
  "key24": "3ZbyjvvZdHht3cfciNhE43Tx4by8rUykXaKvtR56eYLNDQXqdrwsqY5pLgw1NdCJw83sb6ek4Z43MkutW1yviEWC",
  "key25": "62cqpV1FW9BnFiBYMFiKfwBm7r2uWe9pixnDTjsN9o7aUZjXYBDuKT7M6EcpKyBGMCE14TtJ4miNmqQRhwEKxQzv",
  "key26": "57FxuHHrWQYashtvjjkxkXPwbRdwfBnDPWsuHcf7Mmrsy8Q1crFifBwWzeYfELng4GMe7TkTaB5zWJTTnuo4A73T",
  "key27": "6dPSEASDjtQCP12k2MwF4owNroj3NHXRXmapmL2RH3txZ6n5CXdCTsxxmY1XGyBfiCNaP7JkKM5L9tYLENrUSHa"
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
