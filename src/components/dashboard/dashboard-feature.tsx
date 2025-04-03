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
    "4YZYXJMoVS5NwV5QzVRdSZtTwR1gJa9dji77u3k54S3LEdKrazhezWsxi3w8S6gXLhR5X1UedGZJpcTFabmhhRKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xe28YKegG1YrBYFvT29yW7QVZaM5GLFoZVXFpt42w1YAcVNLo7ejN5nvp6f29UVAP5UsnwzwhHDW359qmSB3Dhq",
  "key1": "3FEmtmkM3RLwYXihWw62NLJvBM7UHHU7k3qWzDo848QETNZzL1VHJxeYFW7hafPhqPNebPV77eAzoGW9fStnWh4r",
  "key2": "Vu6UEksgRmF9qFB7t3Ddv16Ed9adGKUrF3fjxq3Z5mb5ouUrht1wgxE76Jiys1KLzUAyc3uHRvufTTUV2MDkFzd",
  "key3": "4KfNGwesfJoxU1958ejJZ2xne7zhazWpaGqcgWo2qC314jqeevqMMWrpLerZs9qVkFe1XBtr9Ap2RzspQ1tTn3Jf",
  "key4": "4EcNzuT67dLryACpVAgYesSxUk9a9KyKvMGnK4kGK4CPvEj3pxUeKrg6x6BuSP6hVSWXUfkRZ2MAZid31qyStZuh",
  "key5": "2JXrfJwAFCrqC7NMtJYsEYZAqMB1xcMEy8fSsNdpqtmzA6TyKgT33rMePPXj6X461mjr9N4X2dxvTbKcNuHkqTJv",
  "key6": "2D2jGP4AWnk97dM9thZA2St7QbdQFPPVWS1rFqocbAvTEDqhmKUZJe1rVjvDkizruVqimrNPG85B95pCfFUUbC1y",
  "key7": "4HZm9XA7ABu76Egy6jY5PL7nz9v49H1bxatDh8vgHB2RG6zvxXRcy8a9ZrTR2wBiNRmySeWU8FTT8bWKvg17WDfJ",
  "key8": "2V56ncLB9NRaMYuZ3KgAtTHzG8mCBL7QvmE92SBnNYiX4FnZAVJ2hbASLsKftQhzJCe5FNQy4FVTRcRKe4fPmwgS",
  "key9": "N1hocQkubrgQd6ALWWprhiQRbEgV2x1LdiZbhBL8KWGaDt5tPHTPd1G8mWQn2im9WXrP5ZiVoyRWRTP1dB3Khiz",
  "key10": "2w9gmdcYvfWXFEMrn2rZsnxHeXeZwPsG7uZWaeuU3nSXEgcSzVWinYCx9boBefV7S6of1qZpkPZi3XqeZK39hhkF",
  "key11": "3VpZtvHGnpjri5ZfjVepvgzwLuUq9BkTPbdWxBS56Ubgbk3ykQtoTKgtkxek9Aztx1hoYWynx3E13QfPPheALQ8L",
  "key12": "58JQK6r86ev6w3dPz996yJ1LB2d7QH5qnSEeZcMJovijW6sMjEYHdG779ykazjKbiRNWJPjrdQpMBth3w1kynCCz",
  "key13": "2vv2An6n3QeWVUpGghb7Fig2ZX6fh3gFPZFrNxbdsNiNiEvS8JWhqCJ8NL5vnSaa8KGsb4uB7EWsagfpwLbu1pXN",
  "key14": "4u8dqpqandPTJpWaE4KQc6QJufHW8VEsu5KTSga5Sz5WtKtLPA3iuNowbwrB8DcaEj6mEAD8qZVA44JzPSbgJCo4",
  "key15": "5qEiFn5kmmX2b2pdpGqgx1PaDKdDD9sZ7F9ajn9avmt8nWUw1znrnAwNxNemfz4wEB7b731pheSpnaJU6h4yuv52",
  "key16": "3FcMcN1wEwQkDv8vMjQFb6yHKY28XiHP5ZFXWJL4pZKJ3cFzKBxm8ouVM3z9tZVWY4zRf25dcXUUSgUgJTgnNR8n",
  "key17": "3Fo9GZcDkE85Q1v4a6pnpYrWsFMbW8TXaKgpF7XEgyjU5NgirQQHPejBke9mwHxSsyCFW1NaiiHNvG3V1FXyYNzH",
  "key18": "3Ln7Rux31WM2PQTwPL7Z1X3XoY97DzPhNo6EotvpNVNBEkHmDAQP7M2To5BZSTqLBwiLEpLRtJm3JcfFEvfpRgx6",
  "key19": "4BvuANeXK5jviARqBfvx5zZ1kTWeBfDLdFAJMwdf2Ssx9hFxpVrfGg1hCV3eyTn15beBAzcuD1cNZY7CTEQgVS72",
  "key20": "49mcSBaCbLcZ186TR5BZKaY1LaSPZgcjT8BcnrtyaqQFuRaQRKrqvvjgpVDWvvrUR3dyNs8YQsKhsrbxpEKJ6iyF",
  "key21": "26vDpb5Q4VJghU1ZhRK29ivrhQ9xLWsgeo9bkAPFi1VMf5diz9u2rf9ihPVHFEYKtQwQy8cZeeax5UNF4P6HZ7rR",
  "key22": "48kb5qMbDvDpsAcChF1921pQUKuCrW2uMfW2pLWqfCAaLiAoa2cxagHnkZvo1XL86VLr2YRNC9JQh81RtDbRaea4",
  "key23": "5QmA9i8hnTXwEHjZiVDCrnYG42xbqcPKujCjWedDC8cxcgS65hMRH7QHasNKcAzNyYoNVQnTF8ZEBD8YvkpfuLHD",
  "key24": "3FpLJiFB162RH4R8g1gVpgUHGvCWQKyWh3vvTQnqGCK6m8dzKFGLJ85qnxPZ8v6Dk7mWSknWbDTnqrFc6yGh83km",
  "key25": "5mp25hRkiCqobgLEqXqquwwgwQEnPubjETafesYCMrmoyruFKiS3MwryGKjTFUcHvbfQQha8AxaiewCV5pcyBofn",
  "key26": "5huXRNeTjL1U8wLTUzyFBY8DjwKte3N3uSexdc63U2T4R876F3EoWkDTMT8vZ6pkz1X9ShkynEaj2FC3Rgfw8s6R",
  "key27": "4iUNU5pq93uRiQyMCLTZjWqKWAoEVyVraXihQP3CkNEvTHnN1Mn8qVfp2hRCzLK7J6GE2vhixgRkaruYWVQQJiRs",
  "key28": "T7CLKB8gpUe8GoKtcPvtCL8zpPwK2a32rNTn2mhCGg6A3HhUDA6mAcRkRpVVze84RWP4NTukGFkg5t7RHQkmVhE",
  "key29": "2tkiCVzvbPWRhAhn3NwDq3bEu5z8PSnmumfP5EuNE7B5kivkeE65vitPqYTjiiNG5YNVXLT8NJsH5WTHzAqkQVBi",
  "key30": "4HeVSzNiDZeFkWQdnhmjfB6H1wQ74KqARrJKRYMktN78qkDwHTWiQmd4zebYAutxELmzpy54S1mMHxPyvbcuiLgp",
  "key31": "5wNeHMF2aQMRf6mRKK86LrojFYMLnymbbQv1fgoQ9r9ZXjWw9FmD7Ts1Ks4uXWr1PvGybjYapYz21wkeVYdRGjsn",
  "key32": "5gH6SerDYjT23kvk719kY8SRNqLEm6Ep2ud4p1k4Bqz1Y7R3xrXYY6JW2KwEGkhDdP2eZEYeYwWwX3FWU1AeQaNU",
  "key33": "2QUYuBNonVroLQc1prQ4CJYKsrw3hJ6wTCyDBoDQCXsWbzR6TGcjS2j9s4yTexfKLKbwWvAJ7DDNASWLa7QEVshk",
  "key34": "5JyDz7ASgoA8FePsnyfvRWaE6HKVuiB74VHuDoHyoUjXtBoB3jUDhJWKbv7absekADnBVpGucotedDYz5GLoCmsh",
  "key35": "96KwekdMzaz2TnDxY74n5xa4f5Y8gDJXdpFEisHhLaPFt8S6aoTsLLj6yoTdSPY2fE6Eptnp888vFtZ2XTeNxJj",
  "key36": "5KZoeUksBU2uP6wc9Kj49NRosrDX78CAqJJdbpnGJEqEAuWEuuC6BvVP6zQuKTFzBiaerh8wAb46rNt8U8MsMVTu",
  "key37": "kecdCxJvfPEXBptVYVJehCtRk1L6Rj3qFR3ck9gatg2TZT4hT2bC7uUp1uBQxYHSUqcrfipjPj6H41zcoN4rjnL",
  "key38": "53FuL1uRcJSB6yrAMvn3bXFTgixAdEi5kHYxZ9U5Q3nLtM8628M9TMCvYjVRCHvor1psgLjPNF5Mo6VH5Tfu1qdr",
  "key39": "4ot5WhrAnBVjjZeFJyuMnY54PMCosiB57qnpC1eoQLznkU2ghnKAV88x34kF6rPquKQMaYGpiX7hFoUCXc9vtohB",
  "key40": "3AJ4hA9sa1fRgHHM8kybEKpbuKiTxVuDnrSebh8cGpHSWoRs6ExyZzbzgaRgcrq9Yezdcn1EJh8RGWFGN4byqq3H",
  "key41": "5ngUkzMwtvzWHZcGtoWLnt3wbuSxaSaHhcXjsBRtgNR9NoRpk6nQ1JKqe1ByAqU3wTsynuKDQy7QTN2Ucndnjz6P"
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
