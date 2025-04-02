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
    "3snbmAjfrKkjAXQ7a8RzvcjY1y3nACoJZjKUbkmWfdZUb4bH5xqk2gTViE8bRbGouFGh2wjJvuFipbPDnnzUDe8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4beXjxxjJSCZEA6iKwv9pSiJWW7oNVu9Zpb3r79VcZ69mWd5TpDY8us12n4Wa95JJ9AdrV8g8ANpyRvVnufsTpeG",
  "key1": "2WjiyxNCZcYmy6uEaDcNUN9d1tcLUq1e4CXEbuAXyAQp8KSic7c9xQndZxKmdRdg17Jxx23AaUt66TrPYkBZ9AgD",
  "key2": "4jPqRBAunhoGaop7cB6jJ468QFatwzqAqNUt7uFMNg4YRBKdFQcw3QWSEZm9zR4AL8LgLAXmRN2YSTUqtbACknza",
  "key3": "3PoFvo4LetfmZgojqa8Pt9R8RKWPu1g7xGrmB9VJks9fb4AtczR8zUWGQWdoZy7GVmyyvBRtXTy2esSQhdyaEJD7",
  "key4": "3WbwYVaiVzYeQ1bMLQ5G5WTFadeAiziw4NVhjWmSLZ5SnW1kehLumvtxeEtAfkgvszXdDsjnXdvVkcBr8YFYknFz",
  "key5": "53p17gaVUdKhDFSr4iDXEfKMFbfdhmmwbptt2e63s9MRL5ZCvDw2UdzStp9UUktw9QDnm2KvY25i54YkMWUq64Az",
  "key6": "3Yz6PA7TZcDMvXGnLE3iUrBNvwcJNFJ4TZjmcpfVjmMcrs8iijMbay22WrqjnW2WV5jcXsKp6nsG7vazPhQUNevZ",
  "key7": "2ReUn94TfNdidG9dBwZDHx2bjaJsghaDLR5uTE6DxwpqRzPVXwzks1ARwA3pMiWcPpns12VU5bSTqzi1tFf4xpkj",
  "key8": "5mVoT2ggrF6iDeJg6k3cN8FQsTVV71L6pz596e9p2xYmCsAX7k9EUfBBikBYZcpNYMBee6hgNbJKCPnxbGKgGjCM",
  "key9": "5QLbvKuhcAc26Nm1Xd3DAfvRdghHchuz4KeFa9wDtDPQHW6br3kSy5fwPaFc9ENrDyh9zr9Pfqy2FBjqWtwwbKmF",
  "key10": "dyxTCQcwsEszuDzYb4cBz1kC46eeK8MJXDktnHsPdGpxqaG5mEuN7AUWrPGXZXvQtRpdWwJPhPSiWWcQ4KoYrHw",
  "key11": "5k1tiJz5CE7TBndekKmg3A1CCMrWvsTp7gZihsX1yqRfdgvncGr1ytNu369RkR6LDRLhNoND7C3apTjRc7S4LUwz",
  "key12": "4FLC51dssuMgCojfW37QgnkZ8wAocYhpdYkVMqiDKuhGExyBYKZTxc2293Mg6iLMtfkgj7oMpBcAtvJj2mue4nxp",
  "key13": "SMwDjGJ4N4Jyioe6PvgjN9mLZN3SazwZEJDAoergtTbVCJyws9s3Kv33JKVQ1Uh8WKTrbzQRu3PbcaKSDysYkdt",
  "key14": "5PaWjb2FCdqsxZcSSrwBaTZHCw1pFJnJHR2pB7nHPGo83BJNHBQpvYDCe62ci5y3rFKEsjAgEPGqYJNCKerb3Tfz",
  "key15": "2VHNDPguyaNsKEg4EV3KPZpFAYV56LSmVKcfwGcgvx9dzSegcRXjnw6DysW77r58aPfqjtK351tNYMuZGabCmKdb",
  "key16": "4NyaaxnBFFWRuhdxLpL2WKyUSmFhL6GoYhWv5MrkoeFLP2jzd8SH4dHN9VUVrgKmXWC6eu6YduCrsDdWj6AsBuyo",
  "key17": "4uSPRJ2pVgATVDbN1vm6ydq9ckctmcSHPmiEkKfuoWRuwjcUQAKCERQoTDhFfbjCZBct5rymGw7G55MzyU937dYa",
  "key18": "2ofM3TLmWEbFNRVyAqm9KCeziNdcJkaSdU7fmw1H5o7b4NFKqZq6VecJhKBXYzgMY8Z2E8vafUnfuuuHodH9hWYY",
  "key19": "5FepWnu6UsvBVkv1McRdhXn6Ucc4YHyNPkvvWUH4EqfHUt9SvHRjpPEJHhqydRQe6uKzg9bwrZZFotWzYhUCgJtM",
  "key20": "gj4mdLPHeR8mwGNiSBHMKC7FBtwSLKyiPq4J7QfE59ERWgafBzeEfqp6cHBTc1uMFHADUoeyryPHt6ub3jF84TY",
  "key21": "2chbVSmJyDvUX8NQCoKLwWTzAtSwEteNAR5DYrLwWqWnEthyqirWhBZT5dihSiGMN5TAPPW4z6yDiGGFYXrZDRtv",
  "key22": "4LwuU2NA5Zng7h9b3Ro4w3ifiZofp5AUtios25iFoa7SPKT55JYjhix5Uo7WvWwgQVenUTtxAEEoGyL7Z7FfYHBL",
  "key23": "JPzqCfxHZJtoqTbBgE9itWyrDeQW63BvyHxLxstxjScD5LPY97aj8k4P4ZEMfTacpygS5oqnqdaAfpq9diKA3XG",
  "key24": "4f6EEuD6PDjGWaopTKNLMYypYBSYyscUxBbCTB15Yi3rkud39VLVFPJm1F6gKREen4FkgAPmsi6nfoSaJ19dAYN5",
  "key25": "ow4Ce1cJq6gA7onWxueTJatf91YhqZxzYKubAB4VKuabrS9LSEfeKqtMEa2HoDMird96p2i9GYni8hHFK31N1CC",
  "key26": "3AZgiTTqS8hxc9PQGfnksjhh8KoXjoNNSCBoVxu1bpMJDnfr9ZCtv82Z54XuAHe4Ke9SLMhx8asjNnkCaJehN2hQ",
  "key27": "5iQ49Rwq4a1CYHyyK84J66nCnTjG4jDzF5ksmfD1S3yCJePzvoqwiGYXhm9h8dcpwQhaDxzoZfc6S7gwJdrMha9Q",
  "key28": "hrfDzjopzbsQoBLv3zhAt8syZTSvrmXNe27JYAk1cwAaou6gJADp7SrnrmeM1UhmcX1paeYpXfrVoejA7PyDvMW",
  "key29": "2drW2dfU166yB8jj88J6vzgGn5XXNXTojyAESx2kTNvxwzWYV12ForcuKRdjabusbN2iNCNJFz84QqtYvvCnjSCE",
  "key30": "5g1QyHgov5wknjVKpKmtA2QZbBmATwe1sJtVzZ8kWAWyPNnxKH8Z37CDYHptyy8JibZyKYQWhf5Mbfjtv6GZVAUt",
  "key31": "4dHBhArJpxRiQpUXXerh1NPnNwmgaWCEG2Z5HbeVzrQjKGaB8izqZhHM26r13wa2pxke3PTd3ts2YKUbHH64mwbu",
  "key32": "wBrcdKHDVMkw3RaJKu5ucNSNDeaS65kwp7nYx6Qu3qbQJVWY5Ft9UVbpiY5Ytg6XDRh3Uh4bixnRwWTxAQCMtE2"
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
