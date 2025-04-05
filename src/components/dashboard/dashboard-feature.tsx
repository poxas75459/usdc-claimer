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
    "5gpEaGavTR5A8gbX9MZ9sUMZLEt8t4bNB5517HZFVEjeXM36WjmEwJCAtJL85zK7BBmMR2W91TVLbg74EgyFqdYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F2JSxagEgQ7hZ9v22ZSjqYw5LvrCGmh1VVman7gcg2N583ctYYWgnrLsJzUPm44c45iQXsgU5MjPpJEcReNFNUd",
  "key1": "4wVo7CAaeuKgSuVCwiBbvcgiXNt4tSBuns2kErJCUXnRYS17LRh2uRT6KB3UTxdfrRdSiKQ4e4mf4CMX2xSguWTM",
  "key2": "5E6cruFifn8A7KmWAFtVFsdMF9ZnRYCtXCmwrUGbhFB81PkmyLkDEbeBQGfChKzsco2jYCdmpfbE6X3XHBM1JJwM",
  "key3": "4hXvrk1Hiu1iQKaSXZGddb7rwg4wCukWo2zj4xuJuN2BrixpHfrEGjK6fRHyLniPVNNw7rXYNAhKLNMqz8aQbort",
  "key4": "3mT19p8g4MT1GtEmuJd3KHrL9b7BvajXxtync9QwYMGC5txybR2E5WzAT5wgDFVkkcsTBPMxNhrs1p9sd7cjbJBk",
  "key5": "3DQY6rPEwnZFH7eBuBPCoisyDNHeSbZuGAHcLiTL4Yfm1wcCUoqKh8C4vsFtZFM7meys1jVPgQDhfToWe5HRqrrh",
  "key6": "5oLaG6LKDAuVvrX4rJ2W3nhyiqPcWaZWrskeAvAnUSWwTKrfx22gEVQbC8dbfSuThu7t88AZEBr46NNMncEXm36K",
  "key7": "3ZCjQgh9nBZQjrbNZ3vsDQfp4cPU5uR7x3u7cvqKFbhJKSZvMpLhHynbokBmcJ1sSJQaGRfACh5MXqFbAySoSDQX",
  "key8": "4Y9bB4sxgdGJC4x4dRwbN8HATF7hVjvEn4DkzZwMt8aa3KqPeymsMnsDF7HmoDCS4PBBdX51HKdBV2tWEgfioVG7",
  "key9": "2RzMLAGFEi1H4LczrcV1tzadhCuqGYH71gwpctsycUHobbqNbJmDP5z3z7LUGRkVVXUk63yQ5FvgZZ5waEVusjDC",
  "key10": "2xgvMEBSe6Xecns8VAgBxvLCbw9HLg4ruJmo3b15UeyVCTnjYAj6gkTBnqJwRE8d8x3oj3Ldzs4WcwA3n4fhCj5b",
  "key11": "3P7YwhTabQMBcTsVT2HyAamE6jrGnVWyM1ujuePMUySeVzURboePHBxhCKmSi6JNPsJR56rmTgiHZDJrT9fyjM3K",
  "key12": "4fFBdQGPWH8NdXUBHBr8T7NKm6zahBjSjVXtuR6ShHvzSjWD5XNvxyQa1dUf71FHhVgTiRXGxhgwavKq3dNqM2nw",
  "key13": "CayvpSa3AJHPEEzSiVyCJhjtAJ3x3XxxbyTV2P81U7FNN8Lm5JWERGKipb8A4PPkRmLRGWfm2ybmjQ8xPGRQSap",
  "key14": "3EbKuqLC4Wk4h1WnTNbM2UQs5a9JhVEgCjjzkSMvECCAaiaGwKyHbg2K4REASX9Lpj1RjsxZd4xB1JRkD6gx9oa4",
  "key15": "67NuKYvXrWSFaNxLpaL7JMs2idaKEbxoTNJfC8TTiBBy6SoL611JLQLRfPfgLUkeMc31h5HVSLar5CDxooEihFY1",
  "key16": "5i4EAV5vTyghh4nFY54jfkEYzaKxiShGPkd9uRkfNymLdQLApuEbW4BufFJCP9tjTavReLu7nhucoiVgRS5WRcVT",
  "key17": "5YnEbDc2D3h78vw8BZYLZnDRefesPHsZto8M7eEZoo8crTipXUMpUfCowtBkkj5wRHnFyNFtktxy6QiqQMVyYU4U",
  "key18": "4g5Jf62SesUbk51yjPTzHWt4LDGNs8BwftxaWchuqwx57G64eseMWS2dbmr9gw6u1DXDqcSC2Z7uyiJwVP7bo2GM",
  "key19": "4yg2yKT6gDQTH6QDSWX88LRYrX6Lk2w4h48gJUXxfKs9TLGYaBtXpmUfVuZETfcJC3GGcSSwmtpKnrWpFwudWhyh",
  "key20": "4etMygR6CDcK4s9WJUi2Eao2AVpWMph8MhTWhkT8ZgzWxenjmtVuXoJKpmFvTydAW5K7DS1TWwt9T4wa8hrt8afr",
  "key21": "38yeztMSQecRTufb7CjS5DED4bbgyGYTdoqsc5SaTfiF68hDJKDx7FAbfKcuNj1MiPMNHgcgzKXewhbWWqksw3aH",
  "key22": "3KrELS81mDQJjSueqhPZLbRDXHkWKZJYMNWeEMKGLamVyTT6jG9fobGY8JKXE8CkKbKx8iAvww7FFTNqN787Cv8N",
  "key23": "3PKVQ2p67A6jsMBGTj66sHDiQEtE7JhdbWT3ReQNnyVUnAd6AqTkyCHpsbnfpTMhoBZkyFfazeTBkswkpyjunQim",
  "key24": "29XRCitYnPkAetMVtQBj27MEPPnHmuG2ia993frZp4dFqHC8Ph7W1PrCr7sSBFNtkyCgw5SCmvrM5iSM83tGafWF",
  "key25": "474x7a1hXFokHB3VLWirAa3AL2fFMGjyTbPmdRHBb2R3kM8wXyMDC25nTUcdabXHRV5Fi2yZ6FfAPu8xftZ1n9DT",
  "key26": "26hhiTdgabxWNaMQxwGjX39XDwrFEdLMpZtkybCuycd5TsieVVruubffxiXvAYQzNtAPPjcjQg3mkuu5PYLYKcnr",
  "key27": "28K1tV74k7hAb3XZ3SZ3AWiVETMh9PTJAszBwzKj7MTp94dHEzkCL6rR3FeiNV4ZFh3QxXs6kChMqgF1DAMH8rwo",
  "key28": "2s47P3xyWbLXPWVoy811VcrE7QQDnQiDFHXLuYRxDh5p9iLqLkUL9p4MvoVwBT1ZbdhehXouCLAr3wzy93SY8thD",
  "key29": "2PVokoG3hrWmpRbYcGvwGRwt86zFWUcLXYJqbhda9P8T6KaEYMZd7YJeEMrugH7F7bW1YGsZ5Pim7m5PCwR7d5dB",
  "key30": "3BXdU44FVCEfPua1ogQHDw4RbrcQJ9LzDdGwos9xcpMEutk4krLGiUBbDGmhfqUGcCtN25LmRwMQ6AuQEsGdKViE",
  "key31": "2Ccj6PoUNu194DkZ6ZctW7zSiDLpFnFSjGLH4911DQHkCKd9J8U4Hb2Zobccw7MRkYfx47D5AquN9MTnbEt4vRjV",
  "key32": "4jwZYQytrLLw99boUAP6moA7Yq7QcVtZfDyggRKET7VQRnCCJGu5jAYftbDu1awL8EWyrVuL7zWA2J6dLcVs1D2d"
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
