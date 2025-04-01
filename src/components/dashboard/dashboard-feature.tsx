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
    "414SyJueLpd5oAkQX8YxTJjtjrNVjb9zwihqQbVUcP3KMnbbPKK2R7mCBiJ2vxf7oFoC1kLMkSFrU2oXiYA4x6xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cwimpCu8LkA691WQsbMRb7PdWyit9Tt569ZqB1qkmFWUmGjKqbJfjgbW7H6G9E3aDgSTDVDaqyDhCAT2WzGtM5h",
  "key1": "4AkNFKTNvXCKDhSAermh72z7CaSYNuuXCZk9E1wmcSPRZSDacojmR8p9QJp9xEtnCTET7yFiFGHecNQeurdpro8j",
  "key2": "FeE1nWoeDe6Ka2FHSubHinpGsi5x611tBzgczpAr8YqRvdyNPmCKf7btdZnDvf6upa1UNCeJ8iiwVvNb1wtbkYn",
  "key3": "3gXmnumRUAi2QfvCKgPTdGmSsKoXVaE5y49QLXCDn2ZwbYvTzaru1RFy45CSbh2wdR9K8rB7fYtnaPHi9Fq29Qi1",
  "key4": "2E7uoTuZhS8EmbJRJ6Nb1tHujZnWgrHb3nVaovNdCvPwJeVd5U89iPutaFjSaFbfNn4ujiCJF72rFPM9yZjJq2v9",
  "key5": "3QMYJKubmtAos9LryMvG2B8uakHf2XbV6m7RcK1TYBDX73HVTiVmoY3ftB69jmQtaGft1bFbaEP1Bkk941DnBcCs",
  "key6": "44akLzqXZEX4MT3MvcJKG27cpeZ7Caqdq4GRwz5gr3hUbeivsvbP1GfeTMN57g46Z31gBfxqUBPrwAQTg7s2QawD",
  "key7": "2MPsHQDhBjQwm7eHfuq3dFaJSUFDoQWZBHZ27hMqZNTzgBvo6RnxnkVzyJ4YCvVKDYjwVUWzLrs3zc1zMFfyAeKm",
  "key8": "4PyHbM4n6igyrFNguUxYPpSatZsM88oLMyrUeRHDRBWNqFTLFnZ26vSYHk8ohXyPrcZxKTYfwrvYsK8UeS8rqpwJ",
  "key9": "2C4j5vPPGkg9NrPX8uxSUsRUtGpBPiSDxvzGNApymmWbTCqchhRfi4EH6TQJf59Fp8u3jgpZA4yaQNP5kCYRHaY1",
  "key10": "5Lk6WNTJ2cssQwUPYJudx6tJ4M45ymTgKue6P9jLM3PZNmpJEvxXDPabdAQHM3iJ4uhrucRRFPggkKkCYBXvL11Y",
  "key11": "2fTKGPJ2wndEQr8qRnFQx2qVc3X7YpaHq73x7xGF5YEqLqM5bxiT1jPnJLUH8nrTNipdVi8oFDpujDGfttWSUMHG",
  "key12": "4wdtuKYHsRFfxoBkA9oV8bpZaYacBnhRhnjzpV2BcZGYbNKzGqVRrJ8wiS7f5PU4BUtYNGpjEGfyNn2AaHhFNwhZ",
  "key13": "3DQoAGG3nrBk4MAnDQXdFMP1XevJemVkT96XW3h5bmEg7ejcwj1nGyFCeQ71FAC7BWXM1TwnmcBpEHGmN79CmR2c",
  "key14": "57EEDRwvc2NNMR9rZ4FGZobsx5gcP47TCELQpepD1xnJXuomrNmremgcNYiaqaC1fWHEhonkd8RN8Zt2FWbFVifT",
  "key15": "FZ1LTbYBbTSoXYALjszp4y8pkn6o2bFv4yuTAQs1jMMH3W7vGQRutKi4zCt7imd3neyJRLB2bANA1feanyhbCMW",
  "key16": "2SgWaAFpzLoQoqUubhD2qt2Ks4K7LYJfiYw515ai95cxewBsVzrWHHk9ErrhcJvtDRR67TJuyaR9hFnEqfycbGMV",
  "key17": "3vz3YPb573WcRadJSAbhBdKBAQSzJKBW2fkTDnYHYk9RPaur9d7BUzgn59gHzjHpLgLqEe2FLJwQ9FKNXH2ZtUYc",
  "key18": "3FmUXredcbA2gEY5t4KazK4HrokpB1hT5yWhd8kfy2QFdZ1vzvF6J6b2uajkEBV2jS2k1apaHLAmstt75ieFYrMX",
  "key19": "2YiYz87HgyvJrbRQn3RZPmE9keJGeZatoapBYCqHbbNwPcFVpVNVjHeVWQ8wNC8k4CiJvTX3SZwRE7djj8Ks4LfG",
  "key20": "5pPyzAuTnxJQ4na49x5xV8KFcUbshu6Lv1PR9XmMwBXHgfENaDw5Kk76svFxzfxuZgjtYieQovirzYB2zfo6owK4",
  "key21": "56CeicNTxdn25jRH6js9rv2JHckkb4mwM3DbA2Bfa9tpEvnm8jZwz74N2g3WgYcWL1Bm7N1cbejYkbr1YXJvQiUQ",
  "key22": "3495Wq5JPjqjshymrEcDwDYtc5cCJPgPnAn54t3zRZAX5vXzd2RsRsxd6Ed8x3BKaJF7Bzde4UBi4UoyVXCPJ4Q5",
  "key23": "3DHxf53FLzUe2K5hus4sDyu2GVwqjaZvLxdzLk62667AEkTc1CMq7Mfj2sKZj43dZeajc1vsPoKvntj4ucjF1Nrz",
  "key24": "3tDDRS6D2u8JSobMUBn44NPEcXbPp7tFFUFc3y64Gy7rAxBMnWecRxoDmNDe1r649Y9GbwgCWA4eRKrYfB8Wca4R",
  "key25": "2YxGvZPKLQCoUbcQFYyZ6urXKAPYdG2MbCTSysTHuWE3kJqyUafV1iR9erqZTuaoboGr29XNdQEETU1gQXCqqArA",
  "key26": "2Sufd9v3ScreVuAXMGmfiGnAmAVu1XJuHaUyTT9jCJrsLfw819pshoCqi1qxEiWCu6Ki35XMtmMBj56vEmzW6UcZ",
  "key27": "2Lk8cBncuLGfN6Li6gArThVXqY3zRNFN8vztpc4DNiH8La3CymJCtofgtySpxbfXnWRUKhoe7uVLZ1pCgTP4SLdc",
  "key28": "5MJZTboUbt1izFsCai15BnuKzSnKmjay5PY83wuNLLUSnX6LYqzd9pnRHGPi4qtekDbKXD6CeEyyy7kKc3uLLn2N",
  "key29": "3wCfrF4arZ2FhoPB4nyq5F3Fm4zPAP4NZ4dosDiFvuGed3twMLdZpA5RuXbUKAZuaD1Mqrcq39eJY9vYb86DUsjT",
  "key30": "4euuo7gnBB88gYXAP52i3bMqiqjHDPimDLSXHSB3uR9jJfQXcnprW3J8c82pV8WR6cNUohAGPwivhUtaJYqfSa3Y",
  "key31": "4zXjidKjMknaz1Fe21ghxZ1cJFha1zdncBuVfhSEpr1dvkGv5Y45VBhdGenXYznW9Fjr6PNqswARAe8X95R2Zuox",
  "key32": "5xcJJBoJkZ9cvf7bmnvtWYPvPPQrtMaizcoeqzoKU8FR5AhggGVKY7eYymjjpWPWY4WQWsepp68Js8JccidkBXj9",
  "key33": "Ewjc9ZBw6V7RzYDbN8GcjnKnfvWyYywPHBkuLqTNzBHV5DRoPaSiE3rBXNxsiZrBZT53HUJr9cURRJMJaw1adRc"
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
