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
    "33vRLSzCkBhTFfrTqMKvazYGZVJ3c4NiQGHyX8nKWgW6HguUtrpNUT5Ff5ZZT1kUgZDZ54Hrtqp2KeBQQQcEC3hP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VziT9ntJUT6EvFqiCfpyYqhb1f5gWfviMfcbhJoY39Qqjz4GJ4qi77Vqg2qf5zFWYFyEoeiG3v4gx9VgzaUmSKk",
  "key1": "dqL4z4VzzGEDad1yhY65ykTnFMmTVW42rsZRtiwdEbfNRGzf65Tnocd9mhtVtc7nBNr4gZKc8GuazQHeTyJHCwr",
  "key2": "72tnhoPNaNWbEm2GEt8BjTJjoE8z7mS6h3yTqcpBEuHJitsmCSS2YCsupMbyVNMS69DHqWgABFMHqyxRLsExF9W",
  "key3": "2gE8z3rXsEZnG3MU7hmr36k46MuL8HUM6SLpEFZFV72JkVHukcHQjn7MXAEhUUcWNSc7ugWhNGwzJ3VrnqsZ3cTL",
  "key4": "NbVuFSxRfUs78sDCX2QUqqhuN1NjDYVKK3nbwYdTtgd3LqseTVaxJk3kqTWAg9ykKnum17gMqWCMpoFvN5FLuBf",
  "key5": "3gmH8WBx8TsHmUjiXo6cD7hM7AzriFyo3mDoSM2eYmf8RpD6XEMJ1GYXyCmCRcQjssegZvsMLMN2WKCrZvbpqA2L",
  "key6": "3r5SfyP3d8augYyf1d8F2uJZ7MeGdKWx5JZSNYGRVWZwkQ29NeUFCi2QaTqCLARabYLfk6oC7dgxoTMnjnZwkcVg",
  "key7": "2zLfQuk2mCgUQZwRVfZgcypCXnNDagUEDijAGJmbFeuFLZXAVDTyg3wjPR677fKEcyJ28tNn2yj9DWACo1Hanpti",
  "key8": "4JuYHmpoVFGQFZLBahJh8yBNjQpzSCfsWA9vTUZ3h8EdSSDCzcEGALKcBXLhkpiWRt1enWvyRGg5xF1tz8bpbbDX",
  "key9": "27CzGfio9YM8gioSEut3V9WKh6MKw6nWmaFq277ucDK1ywq15Quuij6uRbnCgMH8c2gphkj4Y5UYzAZX9AqC8cnT",
  "key10": "3bMczXZawvW2xPsW16v7XrDCnQraqUGMq9Dax5dLJaHyFZUjoyob1ZeayTSNJQ9VKcMuvDnZqVYRyYivV8sMwLfY",
  "key11": "31RPHjTZGvejGjYJFriBwCLVUoia8kNQfTLUeeVNDt8ACTbWsFMdVQqZjdPK7FnECVP8WJUd4Q1aLL7MVXVzY42C",
  "key12": "UzCzhj8aTvKLXYN214GMjsgQuj8weFHvB5Amjak34m9YLD3pskheD5oJ8uYqHPhgtseFFBxUJwf2SHhqMsbdCia",
  "key13": "3QGskaZZnxCh7nr7sWhLARqrRdsz3UWa5Soa9AQynzT14GDC6ZMJqKhKwhEUMohincnEb5tNvzo7NUjguib1fpoK",
  "key14": "25UbBdG7Bxe39AgiW3dshFVrSh33RD7KJFGLqeq84h69fQZimvZh4KYvfzFGTWsaFud7pZR4Snt7afRdzDpHixyB",
  "key15": "5Grj1iMTqHR81RZ71CvSG2nh7jYQpHjtG6sZ7tWtkV314Asf1EWouSk1hBdJFbFs1rNLwUFyERYwaGhVrJ57DucW",
  "key16": "2pQfCqNfdbo9yyw9fvxs3yxmuMDqN39FX4Pe7YMiSzLKAAdQC11KZp1ovdmoLFWUt6MSzv3ArCprq7mCVhvwE38B",
  "key17": "5aqsU3jZgYcWPaz8ZijB233wD2M4v5cracJjAeqYg3cvpUyUX4x1EofRC9CXxvu2o445M6RPsnTWUBdHAzq2Nmow",
  "key18": "5pJuZCtktB4YTovddxKVEsd8xb3AgPDqkYKYMEqDMCKQjfyiD52b2hSDnh5atjSHDQybfxmDnSJqrkm6jLRAHDsD",
  "key19": "5j6So9V75F9sZU7RxcTenvSbPxzMxsiUZkaxM9JHwzVkwWsaiMFYNxSNAmCpNwt6r7n5Xv2hb9Z6yY7sB3B6vZ63",
  "key20": "4SBAistBN7jkdm3VVqCRKdXCeFtvwC5DK9yDymfonujKKQtaetUDj6YNLJPvUfA7QVzFaKEb7HUPQRgogfuwsdBE",
  "key21": "3hgkMeR79UE8QxuuJeVeG3NonbLrXncuWfi56mi4y5eZPQZ7XTSUXiYWCXUZu7W8pH2zhMJYScQaj3xL6CajK5iC",
  "key22": "4PwBghupbScAruaVYEa597T4JuBJNM5s7Z78gFw3nTv3cgqQgzHGV36Q1Vb3NjMayY64PdPHyvFrTvebQ9pWeLHZ",
  "key23": "2BakMoAVvNyUgvxo3WWDELMeuKTTEavycb72cZ3ic3Xie4nHghhDp9JdLtv5DRM3bV4Mz2WH9aXuDyU7wkLMBxfN",
  "key24": "4MuahXe2AZ7UF9zM94Q71h6WhK5bgE7WLXDG2E15MK4um5DfMn76evErQKMX4vqoDUpoVmEiBVSv8e73tDWPe8s7",
  "key25": "3uDmdRAyM1yhvWXGmdstsrJyjVhVdoofZ1Rhnmjt9Kr6c8f27HVWwASvvmWD4yjVco7y8EDU8prdgDVywhWJwwJ6",
  "key26": "5Bi84mHqoUHVgDbCsd8bnMzR81CfV9iEnzvzUjobqxWw2b3cWCZKgu94TFn2uDRCcddcdtTT2VgiGSNJU8HfwZgT",
  "key27": "2LAq4L4ZButgbmZtYMGjcgVwC4iKUD89uqZsgmfJJwXFkbMyftjfGnVbLeMTTUJ68UhU11Nkoj5qBCwCdpjLsQ7X",
  "key28": "25S4qwT6G9myUqWJmSkYMw27ikaAnTamM5JYiKyrgmn3FtywRyYUtL5FFSavZhdLd4KrAubrbf5rwPhJSAtRKhY5",
  "key29": "2cKHV6yattqzHAhDtVmCquxVPbVhoStcXBMLsEYvj6Y9rEgtSy2jjyF9g8dDSLSf7k87GokicTpmcHMJkjLMJccZ",
  "key30": "5ZtDzqTrjqkEYXxYDxMZG4H5e2vesAKmQwDzGv1BDg7dYrTepCWgWcRuk9CnCasY4dUPRnFkwjTUQKozyMzzK8k6",
  "key31": "m2dawZ9d7JfeUSJkoqdc1u27MXJBjvimpnREogGLGAeTMAKE5xWiAro8uCJVZobmVYU42jNC1SYQCcsG29rnpPZ",
  "key32": "2sdetC4UERG87EgtDrZxwNBdWGNLoNbtaSrM8GR7LNQHDkP21vAvTFLruwZWxGQHp9mETermiqmGiPHUh4F7Untp",
  "key33": "2Jp7dGWoBQLYdputQg9ti2keEjAt8HoZyR6TLPSzmYTKa4pMakHMJtWtDvtUnVKkHqCdfLkzvRu717oM4MysaFS4",
  "key34": "3mCjwUuZU78MXB9k67trWkXzNZaYEHbHGScwkxMqzAXEAruhqAvtq6BQtsAefRa8afkDmxFvy5n8hQaX4S8NPQJS",
  "key35": "MkgBH6MXJogvEkCQ111G37Rwtanv76fM2Z8gQS7Ksch6h6quXqUpCc5sW43Ua23wSKm4EdRsUfaJG6F4Zt9xq4v",
  "key36": "2EHKtAFP6FWun7PEz8NX3YBrZxW2Hriu5nT6MQAzNDA5Dx8p5utRo2ihvFzF1uDM1yd9m8fYWhf4nvgWCf5W8SD",
  "key37": "oFVbUnHaPBkPS6sJYggTrvPnuPm1SHtweLB3N1xJ7rdK6srHdtCQXN1kZPfhad37MSZbvjPcUwLoEY8MK3sQPwD",
  "key38": "4Qt1UB11C6SM4HPxMJTDbrUF3RHgfPaLGkR5Jgy96pfFs2Bfgk7KiYpQ9V1F1WuyFdsPWX2UWrAawRZuFH4brh8H",
  "key39": "3AvrpZZTkbw6KpqW7bypS8k7QkagLgfo91gAMruHXRP9kDdokNsBrZ3TLF4XsGGxJS4TDKhfxhfHWemXCoofurg7",
  "key40": "SbKUtPxk5hQwS4AgAniqKdd9HES145fTRiTg8G91fytjebQDxhc3HhdSjMpcfWtwvb3RSM3GwLy1DeDBnzS6hry",
  "key41": "2XEm9KwdVjv9BdsFDU8hG5U19HLeKE5xJqH8R4HCU2AJJjpsWp7xwMhapSmzYh1pqXSL9K6mNMwPG77e4KhRDxoP"
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
