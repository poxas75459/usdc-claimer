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
    "2ieHHATPBrUqXFwG4QVvSjNv3SaHKkRXQQHDYsfBubj2pdVHbFKcii5kYCX84Kjd2oFDUMKhy3B3tdnz4JerTG2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4op9EVcYqErZ3WbR65yXZ6RemcJvbvPMEVUFkhohitKG9FEFvu3DBuMT9BhoDsv9qGZXQzRdQAKXeugnKNEy2Qcv",
  "key1": "4NhBQW5r7m2CyG8q17mBahibRy61dy6AnzwtLWCqt3BwexmWgXDAwVhUjRgpRBWohR7g56T1YaF1AuiZiSj87Xv1",
  "key2": "e1SEJXZMiVn6WEdrrztASroGfDcRgDoMQxrR3x2xtDDBnQBA5Qo2ty5bPahhvHpsQ4b3nAYrfzaTxcAdFCVbZ95",
  "key3": "2x8cBDPdYoVeGHPrZQ12eY2Rwqgiy8k5hcxcApFTqY6i959vjDRVpHguGGNTzW966a3W8PNFdbawgXtSHQZov4zL",
  "key4": "2xJM6JC6PQ27iA7tLr8xPrNiC8icLhhgah2WEAV6H6roXXdBjk6NqpvVRH5CzFszHGnVbarPF2kuEi4tKStycxTh",
  "key5": "5bRWwP6cQ1fpFrpWweQUWSo74czQm97PydC9Ds9ZCmhhGbqs3n1GJ2x44ehTqGdoEE4CDRdHQqW5ZpaJpkffpgSW",
  "key6": "RmJnctJLbAFwjLSWFzw5SGoLoULdKAkvQMWimN9Y2MNStK9HDL4pbvJMAwqTvJ4FtRT8LW7CurcG1pd5htYgCwg",
  "key7": "rkiDjFkD2gMuKJbuZCCuL2GZDpQJhbwGJLjZnDJHbqREEoeb1sw5YNXDRZki67xYVHxRtXgf8nGunJPDDbyH7ue",
  "key8": "XomPSoc5YUqtNo5ERMauNDzHDpbAeY82WjXieWXvrGCHH4UWzkPjEt2FUmXsw6uuGJbGV57HZ1s5CPhZiJvDpTm",
  "key9": "5r2b4bULn5HWKV65nDyLW4wrBDPHuHmFVyEVTSauxMCcrT19ejXuttEPSvodzXNeDSoy95auX559MRqpDpPTM4Jv",
  "key10": "bwBeKTCWz2XTUYxq8nUL5ABoiySKCDNESpQqd8LCK8tH6ifntvf3gkoZeiiBFe725j3eiDxhVQPGfr3apQLC7Cd",
  "key11": "3N7XccwnWVvhx6ZZTSQomTkzrtqGhWA8zZF9bHoYXAAJ97WYZEKgiB43GB13VyGGhhu6YFUXPGB8Wj1NmN1V8nfP",
  "key12": "36jYnua6D12YC8BUTduftZUWSZu6jqG9LHu319hnKPzG2pdim7uAsV1TX8vAnCc1uSwMUYjE1gEiTvadwheB6fFY",
  "key13": "2w78eeztdtNzvZcB6nj7QQZFHz44gqsNJnVSfH1t33SuSSvHHY6Dsmmudqd5b7X8scvoFaccHQXnBryvC868xgpD",
  "key14": "MYGPZm3ox9VN7RVJKTAHJZBzs9V7J5pqhErnBMZ9BnKFqZVQR34yNkQhyzw3muh5DeecC2gVgkaURhXbpWkrWxB",
  "key15": "31XJ8eYK5bHGYTTzkGdutpZn5Wd3bG5fVDvdC5Ho2fjUabPtsy4B4MSzXYMgHsND5A3Eb2QGaA4aeojMopFcoteA",
  "key16": "424RYvrD6yc811WvhPDUS19u2RRgfinRHGXN2mRS2iqfTg8rwMrRiezzXE2iqySgKZQSv7uBVo6hdDcErMRix5oY",
  "key17": "3DgtMkAkFifqTzpxWvJeB6pQuVyYtBmbNr9syzi9Ggtwx5T3XbmwQCNwwx8fM3W4Nybtx3uZrvbHvRKDbUjfZKe4",
  "key18": "o6ASyFuiwM2BvBY4bBmjLUzPFvL1jp5mwfZUPDR954wMjM8HfCMuakTirrXrytJrbLWbG6MVeGEm3a4JRcfFtbs",
  "key19": "25ShQ1iQWqnHyyNeiQMDbruasxkqCRPc12ZsbSx8K6z4gwomWJEh2itB9pbk2sgxVQeeDdAYqgcDTJE9LGLLRsqh",
  "key20": "2y96JqsyBcDYgnaL4JnwZCa5XCSJBbrzYbh4kjqpuA1S8MgHB1ZQZEA26XZGmcD49uz9HuhYU9tGD3uHyrarQD6h",
  "key21": "3FCB6gLMrEZCDYSL1Cj7MMjBEsooYbvCFWEGzMVE3YjGCBokVLemtQaUyKQXH7anPJmC4vJ3uYwkFfPZpu4dUNwK",
  "key22": "4mLKesHLR8Jps97HyhbJ7wnjpAuKk8T7s3grg3UThXvHcR6msfBv8d9usR6bBCNhi4ZuXzxTyMsFQSDWSpPU4dCA",
  "key23": "3Cc25D6w9N6fg3xrcg6U5Prodebn3DoGbFTfiHwEJDsxBjzt3WpSrxnPrWt7Mx1gQH3e42pkS9rQvwt6bUHoHxyT",
  "key24": "5UANHT8EiAVyGEC1nwT49nFJ7JEEuVG5qWE72QuT37PA8RnevWAB9dscU25X8EEMEUZVuoyZEgAANFPBEzw3nyUX",
  "key25": "67drPjPA3aWgfTzyutEB6BdRYZ3TaAtAaLVHtxTRvqMTXwENoE3Y2pNyLUzW1egwprfskdYnN5feRRwVpF3JvjTB",
  "key26": "2FdUavaLWsfigwYX8U7p6nNRRV6rgR9cCXGqg6829qJLKZGNp87uobAJP9L6LMPNby7ugVtWBz47MhsLJWquxBNq",
  "key27": "2CFDS9FTMu1JrWnHHW8g4k7jBLEPqUxRK7g7xiWK8HjuaHG3d3SbH3yYcEBur3etnraAQ2Fa2baPySZJYyHPJZii",
  "key28": "5GHwjGJ8dn6L5e7rPYUw2Z3xEms2F9vvcTUyUfu8gosvXj8VXcwTsVazAnDLyeELitpttCVxuj4E9UANsd1Tp9uD",
  "key29": "3Bq1HMpA3ZafgMWwXUpYSoqMJV6uW7bQ5ViYgEEWH9HrvU1CwNdFSS7pwqgT1oFxGbbGoon5uo2WfstdEdDJTN4",
  "key30": "5AXS5uXMhZJ2LMTQwDDNsCsk9gwjMrVNedriQF93zQbcTqTngconuhasLXVnWW4PsvNu8ft6virXShpV1GgT5Ndu",
  "key31": "HkyLEWCH79RKiaaGq25SkPTv9ik5Y3HKbhsg5GJMgyrkfh7yV4oU3cJMhtetYwgG5cJF67QXfqwFg96QUKkP5ma",
  "key32": "2fMGw9b4JkB6eonVpsabGXMiXd85vZipFu1yagmMCT6JPovTiVcNa9FfCvgkUwwgPbEDCgSWwiWmmYFkmDYLwcuS",
  "key33": "3iMiNisUbpxVHh6yHeqd3QmdJwgVXiYifZ3ERnwZpTaoUcGZK6HNyJDvRmJ51VK3EK2UssdyVQ6Jwj6j4fQdwmgF",
  "key34": "46JkKXFbYh4FhWz4RSPXD8jaBe42VMys96jPNgpkRiG7bgYCkkSs6hySLqot4zgnQYNoHcu7db94QCzgnDBqTo2H",
  "key35": "2WnVhT9EPWUUQos6ubTZPgpT2ftcssJnoA17AUY7SAiPcLUebjg3q1nisPZixdyVtkitoMjXtZzc3QM3r8o3UYtK",
  "key36": "31Q1u3XFrSWgKVhoKGyCDa1RkLsgrG9asc6zh8oqVVnVuPKqwzC2oTZp9y9LW9tYeCo5jcKBLSiaGaeBDLttBz6x",
  "key37": "5Uey11QG84VRDmfYNfZCuKUWpmfTbeuvyMMsUfRH9qsr2xEYpwKM33Ejn5BGfknJMVGAy4htKyREvPhgNsTFABzC"
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
