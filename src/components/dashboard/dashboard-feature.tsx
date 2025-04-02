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
    "3ptYfEYr9aMGDFmRw2eUVtQgtpDSUQEVipmMHq5WTk5C3MPULNiATbGZS7KfGdoruEZmxdMeBrTfmTY3xtejeMD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pxok6ZZBiwxZumA6zvE2nLWmJm495ekosWrjLw5DTC51rqqqnB4QhEFJagqmczEPNr52BySA5iHtcMgX2Cq5rSa",
  "key1": "5R73PUcg61PdZ9YFXca1RD36QGtHrYDAQWK9RztzHCyzZYKzJ1y3PKLhxMV7fEXEBfXfETGPBpWtqob62cLZbAT5",
  "key2": "37qDEDThk5ZzrKf3CyWNrApUdc65JwQ9FFjHrDChYoBYoZgWafmnXLMjWrgNVY6WrYnoN6HfJkuYH75Ya18WgVHN",
  "key3": "2YoZx6NL55hTsDsDUVVWgA6tYnpGnw3XTyXknaC4sTKJKiW2xgf9vBn4x6ZoiuYD81EWJ1Hc4hNRcvKdFeWPF8qM",
  "key4": "4aewvf4qNKmWNirL9fyxGmQ1udZN8ByJMLFaBL8HP1ZfmxqeuGBDpdVpjDkZmCMu64dmDtvywvmfc5Jf9wuR4qDo",
  "key5": "2TAXMkmhHP5CRLwtsxEePAL5K2yrFttmDBXXvYUG4hb8yvbrKAuuHkNyeaYvZV2ngMzJqGDvQsTzGjPA7FXrFZFz",
  "key6": "28yWgDFqYhEkxnpCQNfv5TpJCFP8hCmhzaAftGsBqmZ2efysR3hDXW4uhAKyFzPrajz4NgBYAtcvqUudLrr2eJN1",
  "key7": "5c8VQ7qSimNjNhA1nakMXV7PCcQEUhWgsumhnDr9p3EZpcjAztPg8zsxxpp8XGB3EWm1RXgV8CAqS1MMt8Bj1dYP",
  "key8": "52XtWdFTZKFVhjtyXiu8gVjEgk12HWokWuK5bz6ea35XZJxJr6iSSfhq3RCWSnN9gF2ZCDrGUwqvdsWyrgmGF2Ro",
  "key9": "44iJepEqZMX8WoiqnNyuhq94zC9Dne31gmhxAutr1NW8dQK1cr5Z8Pv9t2RGHV2oby8XiU2LsGq7okWvvLBQRKjX",
  "key10": "5b1grWGF37FKEytjfrBDE3rjzD5tPakSgwo5WQA5ziqcPNgZuSL53h5kQEzfho3NV7TDvrxUDEwKtirTAopmw9bG",
  "key11": "2jYa3WycouypTSBPX3Uo9nB7WJ9qCmxrFQpn8hSJJucRgUkqV96WRtv8eiWNYoSbdwwT1WHVr9778ErvC1WbAjJ7",
  "key12": "129Vj4gC8X5WsAEF8Empkm52T11BUGxH6rq5E1KKQasK1Eo3SoDix2iA4xYSxGYugZbMwbyPBYH4iTJTZNmZoj3C",
  "key13": "3aJbMnPM57dTvUCj2e8DpyFWVkntNK24aP3qMstJoXES9er3Jot468KG2WpGK4DEWDoiNoAQo9e5sT5GvszHHxMg",
  "key14": "21bwDjz8sAtq8BjV6ubxjzzfSeyVZVrLKi1HN3APGNf7iU9Y8bRWsy6JNdn3fjjomfhYf19pC49KbxUdqxJVE9wv",
  "key15": "YE2hzMPqo1hvjhZ1MXEcNFxn5EeBeEo2agA3zg7QkRYnHb1tryRsYWQuFwYbzDrZoAvq6gz3QSbVvMWwKezvgNu",
  "key16": "4aiSR5KJJvK9kRw6iNKVicvwxikSPs84dq752rHTEc6PNxYG6QkAdXcP131G5FCm4wDFr5RrwVFHim4ry4R7HK92",
  "key17": "5zSJ4CXCf7URhqUYinUAZs1bRd1yr6SYBVDVj1TmBSN13N4dzHJ6AHGnA7vehAzfo8Fqzcq24KUv8f6E6UZJe2Us",
  "key18": "2N6SMkwUdTJDDjDEZZg8ErCMwL3kJ17iYEC9RqUkrunKtV3L3M8g4pB7Mm21DA8LkwyKH5cdDSNVJug444u1RDxw",
  "key19": "2Wr4UPqdckJD3eFFs2dVucwDsBaNPRmWt8ihwfC5L94QGdKyp2nZAvpQhCHGoUAqHLwkcEFDu5PauL53P6HCZzcW",
  "key20": "33aCW7ftJR4CUurWYvZxct64mKW95aYdfV23LEL5SR5TPaYbXy9BdqY8k5qvaQWrQTvAei1nzTCzvLckZaVVx6ng",
  "key21": "61QjFwcWZy1D8K7tZiFXr2GBRQaopm8FVua83wTfJfmatCfGVTsPhwxaDk6dhYXVcNF1f4sF8Sz7nSxa779JzJV6",
  "key22": "54YmCbkNw4imbAVXSPgrMG5KijxDVYzwqe2U9roykLfkWqNMcMY844pMFPcda6k2oHTiMD3FQ4iS5cSdjAQ34MUu",
  "key23": "rsFAXhaSrRUuiRsXQpkiam4cK1eYp8LV9Rbb8nkGH1bzqTUyALgSNJv7V725tXHHd5mpRNFyaDCnfyXeGarLbWp",
  "key24": "F39NUKep7MydEZTMwRea7F4tjZ8GRVwy3EfAJrY2V2YvXRqQByLpDebVUMz7361kaJUrR7oFPWcUcTtWysnwgtV",
  "key25": "2ZPLcjYYNF2i3kkDTJk6qFLx5jrXz5jLeeA5UsZEwV8cUtUXbb3fPWfYQdXCy6Xv85QJBbiafVpxRHVYNkH864AM",
  "key26": "4DNRSXwkDEbaW9VWTjQic2xRV8m9XfqYUpfT6dmKKXxdHSAPx74ay4xyQEZKm51MSBSh62prVyK8EkUp9MPX3uPL",
  "key27": "2Me7gvWG2RXhruJqCfFwQxkzF7om7wb49TvBgWyFATVXRgr6KraiezScy9kHkqjMfTCyV6LkqWx41mgpzqsxz9zb",
  "key28": "2eqNcd8fycQ6vds5SbJ5yLnX16Kzk1V7awExopiVN9jounq29RaaqmBXtFt2oxB3tNFejK6QqwZr7KQrSoZU84w1",
  "key29": "2xACyzWTDMYRGfJ8A5LPuncrxSQceGLGn6mBiNBRPKvVfCYbMLFUf3kn3kezWjDcx6tY5t21P2WDWTjYfZRXRAac",
  "key30": "3jqSkqcUhdrhgUHqkiJSxvUiWBuEeFSa9UZRvPM3LHr7SDBbBGX5D9tnfU31onx1TtvTAdZKKd5B92ezaWrQmvgR",
  "key31": "3jR9MrVmKRxmtaFYDp7JUNdo3q8xQC3gkuV97EEZWbiKuteU3iN6JoTbA7LL3XFoicSghy1VJMqAknEdF3J77LNX",
  "key32": "3RHXikemft8fw8WvbpF76LvB7pDYcdcH9ZqbMQNetqEJt6zrQm7mvLgAqvHxiGd3N4LikUUJDFrjNV4Ga7C2qTN8",
  "key33": "2E8WF29qZr1MhAdcBKdJwByYHtkbdj7NEfduLkD8XdsBxSgwDydsZE4rMQKkgUJ9hJiUo9dqbpGh3LxiLQxh5uKk",
  "key34": "34qaKMqEo9jDGjFUribUGo6EEp1dG815dsjpWKnUYbzAcYFBPH3RSvxdjinEXi4xumfxnvQL9B4dZfNVyjJvSCN",
  "key35": "3bHfTMUXTsR6tGBC9R2MKJe7VAHw168ftYVsMFgSVkRG9mSJL5Xc8kofxYMpgXDB8kHSvSUR7DVzwCCd9roz8cUD",
  "key36": "4F1WV6Cxdk9KnqQfsABTbnXP9xz1ifLfFXznxgQcy4yFveQdRAm7YuVCy7n4AJHwBNtqBj9fDwFTWHQAA3rqaY5m",
  "key37": "xWtQyXJfHynxcvRbzD6ERpPNxRCW58YLJwWTQ7RdnH4uhuAcAzaZEQBQeQcpaDAU3ZbJ5dmjimkcFBZDCMXvax4",
  "key38": "5fbJ4Txai7Hr8yP7Ghtzy27He1GJVirVe6ZueLNq5kUAUNLzZZr3Zxcjwo3Fohwx9hRXNrpquGAmd1zGobdG2UYA"
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
