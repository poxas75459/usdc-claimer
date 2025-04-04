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
    "4MvfeHiabWMjX4wYahPnaaRvNVXZ87qEEuZf42cMtpHcW5JWWFWQJUkpPzmHuHUyNikkeGLcBu5FfrQnKQiE5ok8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xgVCTAsePDHPQb4nVPam6cRx3ryo8rzUtFQhgRytE1rcJSg5CnSJBpY72aFJgnjF7c9nVvqkmkjYN5Jeie5SGFL",
  "key1": "5ueG29V251hANmsNRjqJRs5MgEkrdEo4anitCuB3fC6bFWP9oRqzKNsvSErtNmcTdstrqxG7sF2AN2iX8wvgZnmM",
  "key2": "3XTxjyzkJhdQSGBmcRKNzej3FT6wK4Pwhf5DJzCWhY3gwhXdZDHq99hum9sfn8aLgw4xYtANyJM3p5nDiJXLYUY9",
  "key3": "hLw2ttSUgjzv8Ke1Ue7RNmYBMjUVopCcoGPfSTVyMEY2FRxLMssAReo6rEZtMEFevG42uYh4ic1CC6YoAq5NQ5R",
  "key4": "3v3EjfGMAZ47shaUJLEQr1bvVPAMDHDyCrjoseKZmFowytD3TstsjAGMcA7YPn5ekWRUGzqN96p5za3z9VKGpQqv",
  "key5": "5uyun3YJuZaLc87jNBCrBF29cFWrCpkpF8BnYLtvDdN9g8eyzrEppD4Zu7HfwhzDUmqZTCPgT61Ld7nKA5MwsE1U",
  "key6": "3sJqboVRLBcjTfnAPvLts4ukhDRP9xTG7WkqWyvp8GorqfLd2cNzeqRNAsH9GN4Ea5ANteKrVPx3myuU2vmvUV1G",
  "key7": "61fbhFQMv4SgJbsRuPdLXyQuaQnk6AGX5LEgptFzZFTd2akondNszw7Ej1XVzYFqZomq3kWGW5astpTpzb3BjLzS",
  "key8": "2c1LbiXXhAcniK3cyM1VQkdecV7CbFoBNf6QUXMAm7YgTEy4uooguQpJU7xrSvF6G4H1XoKTcCTffU6wKk7UCL5u",
  "key9": "crwN1GjdnUvyPc8PKsdUgJ4mMWmmjvS54karjNxyGbprSYJYKJqAUiMe86vLTrh3pggoEsoYwM2ma6GJZsnJxd5",
  "key10": "HmLgjsmdfqWp9pMRY5RmiQSbBTk3PL76tZuUsjjwAsj96Hne4wSyAM3q77TLmL7n1gBzXe3b7VcL5TTdzQQL8VX",
  "key11": "3QzC9WZBD4UEn64w3fRNw1MkHiv2yRYzeNj5E9ozsvxAvXUCMPAo4XbkAmDTBDLfVjAJ2MXehNV1fX9PUsSTPbNA",
  "key12": "3h21WopygR2nPKmSisM4uStkShCWW9gawh9S5PvGRUbpsgTwnk5CZ8CVmU7TSTFZi6oGWTJ4iTqNewnYBAq5sG7",
  "key13": "4fKdXmaH6FD3pnfHaMw7SgWAZsgwxpRtWX653AQ9imLL6gaZUag625hDVjrSibv5VT9mWVDyLdWYRZoaS4yEtP3S",
  "key14": "K6RxLz5BQZGspGc9FC8ffgDeCdKkKzCe7tdWeusKjJW7Sp9FX83mKoUBAn38WF3MVLxYjwLQkS2moxKvHDttpmg",
  "key15": "5YZsJm8CiGw1jP52SdsKxabpeHLqXkheScGXugQBbYPyvjw48aY2PbQEVzBurrL8b1Q1knWAtJAP54eqqeKJsQxt",
  "key16": "3CxnxanLq6LpWFqWFAUDt645f8yxmgzoFViBfJGvLNExSXDZtTZyZPYkDbLvxs1Nwq7bV3HKtiYLRu9drPPDBhbE",
  "key17": "5y9Xoss9gqp9F3JmAtC5FAWQUni5AuDZeavQgX7E6LopMLvvrEWw2JFGvzXVr9bT2jUqTSjZUr4oKcnnFM3faBdZ",
  "key18": "FbvQjCC4AVE9N4E1n4t8ipUKC1UtxVmzpfvdVPZzdJKojwW4M92nzB2LNypS95yQYqHJMqkKMu23xv8RYjJ7WP9",
  "key19": "4ph7A663mUg9PBC4gTPMfxJa2RdvZW9u1c1aPoW4RxThSrb39881do4QPADMsFsESph4on6MsXBSNisAny3VraGc",
  "key20": "3naJ1kDi78Aac8uNABdTxBGdrqTGrzLUf9xfY7LxGSdavePnwJT7NxLFajmKumqZe9TPdSFQt1yS9j7PSjT6Xwf6",
  "key21": "5CEBQpJpLwVQDUmLWWTRSKGSNEPrFJpkxbJT9f9YNM1KGh88oWG7Ji7382xBpFrg2sq9XzafYvUJy9JTJftmFLx9",
  "key22": "33Mg5Tzwv4JeJGDAYM6eE2PscVaiDydzKiibVTo7YPmdrXcQQBSMvtuTo4hY8X5HupPG2dkfHWjL9DRqRx8qaMZs",
  "key23": "5TGH8tmhrk2Gp6p66N8xGbUVWoG6qce91jmHgM6EZXFFmHpST8A7DoN2Ro64fNxnm32DHDubkm9BYnCwGwdSHLGt",
  "key24": "4UXwG2e2TdRsznAqqVVHNeKM2wfcWuzT53NupnNc5GKatt2qgEN8DdDTtCK667m8L5HnhDhnZwVPdCByWzEf7cBF",
  "key25": "2Pjeh5buvLaG7mgcXsf2jLf3rUj8ieoYZiYCb19Pfrao1jSr7vofoxTyysjuhxUKHxLLCg97CexwLcQAMHBsjCgU",
  "key26": "5RcuNvz754RLAoyrcRNHeD9dwejRci1myukUZPG71fa12rfrUy3NZT4wrL5YxLGDDYjdor7QTMhmvD2K7iYpszzd",
  "key27": "2dGtofEfebEZQAWQWFwWqpaimtVYYXEy7f6Kui2V5xN1EZ4f2MSFwMp2paDg4StySG835tndqamMzoCPVE4Qem3D",
  "key28": "3jYQi1ivZ5tZCyPLFAMKPSuT2atZk2BA8La1foH9edad62TEqCW165PQW5DZz2ZwJeuHkTLgCYV3pwpEYhX8kMf4",
  "key29": "5n7pgYV2Bm2amUjjJLJg5v6XMDgRAXTP6knzLfC9n8PP3vwcFqbLFw3LPuknpMyCBcCymzge9XSCAaRD2dDy7oK7",
  "key30": "3P6i7XrZYFRucjLc13spTfUftU3Xf4dYNkrsp1pbZjL3fE5kUSEbcmzxPLHRzUqrenGXHVm9QUS1SwqT9kWcSiJt",
  "key31": "2qoYTsEdA8pRzfGy3NYideFTSF2ZjkbwpVZtVHVTKuJhxgBHQptZd6fNmuJZ3MwisnKdMQ76yZFDiXU7p2xWhQLD",
  "key32": "WSeBBbDwLSZHmA7WFV2TQXZyMiAYVw3ADv2PQsnhJHKPxvfSr4X8FHsZrRY13pJHXRJffAymzAUfbenpqwKWT8S",
  "key33": "5WkebdGnetj2g1zLpmrvHChnLq6r8Lyd89RbMZymEXj6qnhdN3qZbcjpUtcM4RvMVZc37FxuwEhrs6qB21wYQ21B",
  "key34": "5Nc1xgVv7nEKE39Nu8Ktei9hzdcsj8mRuw5PAhGovuE5odTcEDSap6fJhTeMYQu1enTBZBneyUzkeEZhUUghm9ee",
  "key35": "62WY3BrFbEDtfNHxYhdGyJdPoGzBCejukrJ1j8LSoemebmMa7HdAw9NmiGNEtwDeq9DyDDpstaHaty1xMGjGGyWP",
  "key36": "G7dRyptusLwd4vt6n7GEj7pWTt3xLoo1Ly26TSmeC6NfiSWhVr2qELZsjNfF26Cza9StLcEhKoMxCXn2Mw4PFbR"
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
