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
    "5YRoTMnMtdCKLFC21sU28Eb3R79fvoveBH9H5RTk9o7dh3ecz6afuYyqCiPVTcKRj8juyhvSSuvF5NuGmddoQEUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TAjDqAUND7FmhBoK5wjPLUBfzMnz635ViQZvjXjkne3V8ZNLaSKfkH2wfJRi5yX7tHBj1gVsbwmTheds7LHKk87",
  "key1": "ypUDDJcLZ4uCZHD3VzVNZCHHR3Du4tjEH1GFeK14UGrhzjpq5cd9gTnkAjk5cVeEYBE4nF8uE2StBdnNmuonEWi",
  "key2": "4yAbN37AhmnGpRdL2PnXYbuCkXZ4JWMsU6HLD1s3U4ep32cBnt7CbZaRfjScvA3voaNo391ZWUsDtxUVCXAqZYt",
  "key3": "5YSV8F1oEZrDuMBARDpVVuRomTPEG24UpQACwpputvX6HdkQUuVM2FLxDJXBu2FVf88bmjwEFP7JmXkJxq9NkVkc",
  "key4": "2GxF1fDbihij9WZhUtFRYidSrEsU3x4vVNe7urzsKecYAiCvBi9bcA6uN6wSQbCcaV4w5XHEFMpJS7DKuPB62wdB",
  "key5": "4dWs3jAiv6GPjjxTxHtqT8tJdkv3F2MWR5YEdNX7sAshtPKC6aCfrHsc2VcXYPoEGaacpSwwdkwgpHHc1xZr4GtP",
  "key6": "5m8gXvDnGMjrccQT5efZisf9isaNJwHyEN9BSNYN4pSiiBdt9ZuiEptioRTbJoY2amTkcQpzvzBu4LtZbPkFQRyd",
  "key7": "5zLbnw1vEWRvqJ21BChKbPeunMZpQ4g9W3embGBtdAPLBM4Rsbej9TzpCCV4iqCNnsjtnPJ4FqqcLdxUbfokqQLq",
  "key8": "31HTSLTTTSitxLnUUjE4FJii5fBXSjBxyqQfjCs1qBEW4DN55hakAtYuq5VzzaaWV8HmYz2GHk8bbhR9fMuLHxRQ",
  "key9": "t63ATcrqKqfci8dhsWRvohws9S28jh7wbxyrHuXqQPxLnLQHyP6Rc7XvfZyKNoXatH75LYxyn8nJQK6VVjKBD1f",
  "key10": "Tx4msnfvWvfru2mAopse8XQRV3JcJYUTtyZVmcZSamPc1znAnJZsyfXKDUNihQJnNNATqsrLdY3qitYkpiW7AUx",
  "key11": "54eT5dTCzrc9oFeYYs7qhCunN188aQHMko3sfZcTirLJgq7MwoNG8tRCnw1xKytEEBci1vezUnqE7XH3WEzP1pUM",
  "key12": "FrYBf6VqWxKpLeDFa7EooDMYtcUh11aGEx6r4SyuL8voPRJeqR1UHFsBRLJnm18VESYoSTNWYexmX3U3hSJPJTE",
  "key13": "4j5dBscPJKkHYmm2X4jaB5e6d8ZW5WDCcmpHcJyLTMrRbgPc2jtiyZezPNzymogr2MUXh6h91whYBFALGBFviDCw",
  "key14": "5ddADY1hw5TMHqtpSP7XDd4PLLeEYwcNJRpuhD7synudcwKGqUfEE1Z3PZht5K8sdnJvEHx2dJGC9gtVLw5Kvmmz",
  "key15": "3HVkk5zCLUnECc1dg2rmKLdN1agLdfYu1r8gtqtnQjdKi7UwTNuAhCYDiwott5jbjU6pYj18xmvkQYsmVtttm1cU",
  "key16": "mHzuUzSYMNB941n7YgAi3xp9XrCud3try7kwr5NdqkbLzxdyW3MchhHnv6WmC9BeF1DiNAmGBxUV1uGJTGX1ofp",
  "key17": "5vPBeewYH83R37uE5ZYq9vzr5oRGBbQJbsjVz8LocPM37wRWp3DYqGPh9e13ABudcRM4QPYp956DHugds7YsSuEu",
  "key18": "XPXzQ73i75eheYV8WWs59T6iuH5NpfNkojVBZrQjC1XcN6zSMvBG61FCqNbKt4zBfQ1cMJwTywejv37T7Li5TmZ",
  "key19": "4BFJvAho1uSzQdpubwdHBEWMdfMUBYoUgtgcVkAzN6nD9HWaPjUe6jSQKUsr7w3F2VUG4vDevE8sGx5upUeEDu8f",
  "key20": "5HhQqgyBWdZWCL5YRj96HHvaJdGUi8ZgowTrNrkrnWhC4e9dpDp1Cw18L6kzMPNpQZQ2Z5hjiwwL1XXZe346pEH3",
  "key21": "33Fppyq71yxLjADAL5hyoH5b8wXWoNE7z13f4FB1DjyK4gfX2FMGdcajeNX94i7bX1y61yCE4WVvz4xHzmRyXo5P",
  "key22": "XKqguFbbh4p4CqE8SBBJwwhGLma74r6o3pEdPh6C4kcxqq6KmGjHbcmzi3XwwHhcFLkEEZC4LZ4K2CPBBT8akzb",
  "key23": "63KEdDfB4jSPJiAqzTDe7jsgyjYRxE62WqeSHaceNaR8uRoPXivJNUi3oUvLSVGBL5BEVo2aFtMq2H3YRTWdF9xw",
  "key24": "4DqvC56qcDUfdzNb5VBGYzYQa2i5ruePwyD8EHjUJfftrefEALmWqMAmZcxUhzJzDBKT4hWF2BZkQbRi3ZGNREYw",
  "key25": "4BgfTRoaHKGFE3SkPorReXq5B7fZQeupDJ3bt9pNwRi7FPGvHEnGC16HiEB3grcLjrbDY4cqxuxQBnirR5Ve3TMz",
  "key26": "3Ab6DBQEdqtUjZTVZifSQCJtPDemnJsTZFVNijVRi6MVutf3epr5KVVkD3it6s73WwLmLhfKqKQToeqLZK7EzMdR",
  "key27": "5buFAqpoMPhAxNcmwi7Kvwp4dny45gucrPZpFWTaFyoCL8hc85nT6BfoSQS38kxihM4r6zWh9N3zUG847fkD1wk4",
  "key28": "2BCDU3VbGP8ZAdBBPgwxdY7t8d3KoDdLkbq3kX2BV7ZcqvyxU2m4ESCoZXrDwedE1LmLehHPzSHbquQgBMjvjtMv",
  "key29": "55waGmw4MjmwoHusCsFfZGSm1AgeX8PQNm8ecbNYWvGgFjKJsXEBMGhJXZSvGEADRS9NV5TP3v3EqHJo9TR3oJAE",
  "key30": "42tCVeFxPy2MAcHhCVZWnvSzPMUociBnDxjnEHBg4A5kSFfbqWk32X6BE6opTF8kwdWfT7fJKq1W1bF6hs56oqE9",
  "key31": "2n4f5Kb2Hz5dfkEy11ULU92mL2X8ih62AWqqPpP4EEde9AttpzJ9jQjEMNegjbjsmvmUW3DmMxpo3LwqfCmutU5C",
  "key32": "6pvtH3gep981ZKuczdZNV52vQEB645G4a2cmacfWcKzd4feMQ6K9NcDrSXK5UcTxjsMwGoiu9ZaNKHZzK7xcbMZ",
  "key33": "3oxMW3LYnwxTd7qsRXQRv5nR4c38gm3eonBNvownvVKnX7YSxPLjMtXL4Lct4SSmAMRp3Abv6PgRvRCZiVf3nmmx",
  "key34": "4wAX49X7NPVJ8QfRBGWPjaT2ygrMgEg2wtLopxQAK1Ajp9YG4x2ScnU7bKsB6aHhUD7s2No6KQEx2nWF4ASrBeeR",
  "key35": "2U2CcWao8TK9ugJLqjTyXaCUtyzZiGy1Q3oACRdsvR8NU7bRS1iciscNMD57t4Fhx2sUZxwbX8hnYRg681u4vi51",
  "key36": "3ZLp21ra3jm1kENuZpzrxhuQYK9U6QCx1MEbkbk9uWKUBsM9V5nsJy4BYzYTJm2XV5i2HPwWXFQWP1R6bsMNVJQp",
  "key37": "XYCDaxeyo9t8oqxHyQMWNpP2xN2nRfjukkx7Ss9T5emyFPjPbUsyq1DNA5rGeznz9N5AT3iwTnMedV6FArgbzHf"
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
