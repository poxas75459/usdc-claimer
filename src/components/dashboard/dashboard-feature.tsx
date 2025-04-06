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
    "34QkD2R9FiA4x9s296P6JPM7EocmCUr4z8YzjjNYB6MURzhBjL68f9DXaidrX7ktuFEkRiXS4v6Rir8CdLyXcFr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215Jtsc9DttEizDBp4dg524syJ5n25tZ1HHje7T4cYneM6C8skgCadHMGEg43V5Srdvyhk4VhezbQgZEQ5PNSDJP",
  "key1": "4Acf45kNCbhYKs8BWRrLeuBazDfT9pkXrnAT8aQVURXbqxVxCFMLqgzt98ZwD6QeWyYcdKU2p9hPtqdSUrjdoN6j",
  "key2": "nLkPBcnvUhBByREdv49222TbDwNHpqN5PUZVxVqHd9mLEWmMfKNjjNx53rdzvHnGHg9MLKmope73asugXAU9B57",
  "key3": "5LcVpDg8czKGbvuHcPnYqQmYdS6ud8HtMjYRZViuZYbEoiHSwgTepTNH4aujXSxQd8b1PuaFsBMsZ625F94TnWC9",
  "key4": "5RRqe1SHNfKrG9zHyunPHfJz7pTB5w9PduuA1rMyj2wFFupgGZgDwDgQskvAKBJi7RPgeSmbigdrWbDD2Coz59sk",
  "key5": "2HVotJzcP3ow4315pbyZaNDNp4RGbLg5BhR5h8UiWhMRzEcY6d7gdELSDAjLrMbrHG8w3fhkmBWdDXp9gxEFsNeC",
  "key6": "4UxVF1LAVtJDp9vc6NEwfee1sXnLBYztU6gTC2r9co5UnHnLYjfsyBQX7Q79V7oU1nqJyT9eN69UQP6puNrxsAQd",
  "key7": "4V3fMLu6BanzzhNg7cV9rHG8kB6iNwADv1SUbHLfcAhKdPMosJVHXeZASThMehX9RM2EtHvopFGPqi1FFx93SMtd",
  "key8": "2vw8NTjr3o5zo1yK58jgvJRiXtA6s38DZYUyooEGm2Br64XVZRPx1iGjjusMufkPNy6q5Xw7gG2y4kZAdiCSPHkR",
  "key9": "4RmEs1untdzF8XasKHkZ4XDR2CrtyWew5g2bNXdbsYEHnmzM3fj4wUkHdBHArAys5f5wKWx2qGzjDdPAPQ7qLFLT",
  "key10": "KoUXw1htjH9CWNnP5feMmVcL5iwL9aGZgLdxiSWp48PAn1aDQZ52fqne4LsfVjEb57rkTSf8E9mK9SjvzpBjJF6",
  "key11": "3WWgWoJKdQDnZmrGsUgnDyEULfczT54KNPLVQSM6j9YigyTEt7ewV73MYciZf9nZsawhXQg8cPEQPoU2nHJu9wx6",
  "key12": "BipqEGp1T976JxSWyP6EcC7aJFjeXrYsH7dDWu8RD9eyWBWfquFrjyJcx4fuP2f6ztL9TUEzvfgBeoLCd58LsvM",
  "key13": "5PMRgbYZMJVEbjvTrHyufAQvB675GJgzQLMp33FHJeKGkW8pKtm52VY1Pq4u4EjLZuZhbkrjy9T8gWkAgibXKKVh",
  "key14": "5TB5nW6HSab75SikpaEFuhY36Bfi7tovMbPJwECTDjA2wDfFkqpWvMSxfZLNE9BBbUfWo9Y6cioS63Cp4R4MauQE",
  "key15": "vdVoTjC8JEcqhtXDvnGSgE7SbGBVFqAh4VeaNvPR4yqe9hdDcEm8VxyTh8VXxirgyQMQH1Lz7NV5hM5xBRWcZi9",
  "key16": "388Fmkkmv7aY761WcisHMPR44mLMoMoHCWx6JPpYZ9X6vXh1qL8rbvWgHwYk6SdUAVzra9aGN6gK72xo83C7dPzB",
  "key17": "554M7SKZrf21dcxp5JS1JZ8mNtfF6u9836KPgxGCQ3kNNNmkzdEsQ6o4uf3oPDZRiGxu5pUdetfnkLCvXvS6jnyH",
  "key18": "uJW5Rt6LfZaRBFsMKSBJ7UefP546eZz8wkSir3DNjVVJKBNaiZzuy4N6DDXNRyiWbpWnAmqxxwNdtA4mNuLJADJ",
  "key19": "3UKLB87MvPDcP3nBniwzZaSaXH3vfBCDviMLsBShSma6ttiA9ic67SsvY1pma85GzD2CxBA8jwakWEyrCiNDdkPW",
  "key20": "4QVpSPQ5QcdFNNuGgn38ZjUNSLjesCvVfRmE2bTxxXyKnXpLdppK5Cy173WDSLNwQ3DURq2XkxQ9LS2g4mk5V3J",
  "key21": "5DYGgaFabWEFRVj4ms4fVT55VdiLLkZ1ozgSDvwmtoTy1HGi3fB3aVz9BSnWpcYEXxMZcSdDeLKvrfGbfCDTQ8Xx",
  "key22": "4ugqoD2D6JHWvBLkk5nisNGaBwcxwEp57jr6P8xbkUNHxEr9A4sADscA73Fb2oAmT1ZiMDm69rTcUPGtw8uyLYAy",
  "key23": "Vj3D1trzNeZH2Ypr1qURRzcZ8rom9AKUna5zSNQ2b1krotjtgsCpjFPA63WxLWC5dTy4fB3hHeAGC7TUFJ1W4f8",
  "key24": "3GEuFHZSXzCgQZsvdKgCDRBA1Yxswg2uzJt7ayHadZ4p2gWmYfR2qmxxCyFjvFY3GNu5RZfMj7GCZAywRjS7h376",
  "key25": "5KLChRu5vPbcTNyvmkeJrUUdKP8xpyRA7mtkmFsqVJHmYLP1qQTQUnGdvXneTH5wkkHkf2zbczdYKk7nyPwDutrr"
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
