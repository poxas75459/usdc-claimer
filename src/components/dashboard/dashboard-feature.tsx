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
    "3EP5DFUwxwencUYu911b664T6YjKtAW2dYvTpQqMf9k7U4nW2PxaUAtvN6MYubJN9cKTeaMy8KrmXA9cfb8a1f1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2udVMebCNDMvQUNKwS4vTL5LTZDhAKRRc5EsvC2vstDqLv5ba3c1o2hAAhw2crBaNdVRuqTYj5MBrFGuqrfv3VTJ",
  "key1": "5AYt682iU6T7u6LQPcf9h4kZidnvTrW91FZc7ZXRFaF7BcGefTjMiJpNfvHsWvz2XPHLHTTXMjqtCJLJfT2tnczE",
  "key2": "5FVQBGordico75zWfxX4wpMokse3vPR8N8C5g9xWrxgGwam8s9RzAqjeb1Ac8B9ZRUnQB9R4eo6oHizvhdiF6rXX",
  "key3": "DLBUxnmwRyQ7VJ9ntNA2ctHj3mXMrCwvCiMhsAG39aUrmRhdCCEAsMjrxbhZSPr9MLffZu3sEfQv5QQdT9nkDDk",
  "key4": "5aNK7aqgyrAbp5mp3CgxQcfpPmVv1bkX9SfVicHbEB47CB84e5rBK5o3CpegFb1CsxBiebv11SEtRGuFqcWYDqZS",
  "key5": "mdddsAkQ3EjjXQTdz1RaVLnSkFvbGFtMTG35okrKwzzQewWAWk2SwfHivUNxwXfrNNKR6NJnMipSP58vyCgKh44",
  "key6": "snQ7zsH1fyBRZ6roXUBYum3DME4J8JBDfXxV6d8pQThy6CzVHGaKx7KV9xuoc7SEWfkBnbgSYJJzCMFiAkcGMJ5",
  "key7": "3sHhhXhWt1Tvx5uBJuBsQhWNZQ6AS37S9MAPuUZsEniUECXMV4pdmCyrnqXmuaR4ZJp6X7Y5Zt9JhpkQ8QSvWjHz",
  "key8": "54MfbMEpFjFgfE28xnMnb16D3j6ugd5ZCSTPX6SVxy1iQScXzJs2k1cHeupDPS4L7RJN3s64jqMFQyRfDuNNAWNH",
  "key9": "2upwoWND7MuuKYBbUPSuQZtHksvbKUdVpkYAL3Vw7VvRMtD9JpPs8ReEDf9H8wNYGrhYd5qCZqvmrs1ppNRthFYu",
  "key10": "2Y8J43FE3BsfTafKcQwSXechb4U38rm7qaqapXQ82oLwGFm3WZdAd6zFXkMEif6EUYyRSwHCFfssTXMjNjogwwm9",
  "key11": "4cs4FuXYm8QwFeFY8LdbehSgcuHtFqxr273YwhUvmhDC96HVkEMjoZqVFqS3B54jTWGc1ehiaHqvV1nN6PUQx23P",
  "key12": "KCMLWzax57x51LMSVqCPyT4qUjR3TbG8Md6ygoYTwGRYydNAk23UhMH6zPktoELCUzZaDWyAUQ7zmC1AWUeKHaa",
  "key13": "5ptUQEMtdCx8CYUBbiTw1kydFAeYQD631kUmSpdno63Uh2qzJYiNZCLyPdTSkYZWeKQhwMkub8wmFYcfEQ3mwbxs",
  "key14": "g66bDkZZE4u4hPZUSMEDmLz4GMKDqQCp6PYgXTJivRAsbFC8DveojXhbi37mM3gTNBBHCcKZKHSnh4eRU92n5M4",
  "key15": "3KvBQk6U1E9ckcYpJBR6GeBEoZZr2V9CwMbbqoAcVJe7NZsdzFhX9FHEz1JC8JayuuJJwr3RzG1Xq6tG7nHHjTfK",
  "key16": "3ud8mn5hqJFdN3j95FuT5YA8xDQEXqeCWcnfVHFRxX6S3C6cyFh97BiDK7oZ9AoTZP7Gczzzc6HDjeFZnooUHGWH",
  "key17": "QLNjZLMUjVYCdoPmrPfg5K5FbGjcMJVXs8CpC87RfKWTKPweXHEXaAimVb7XBQRkA2ro7g5HxkK6cizu3nqXUZk",
  "key18": "Hc1oNaQmN9yUXuzD21d6F5hWAJBe2BDPEdvxXML8uVswyUdT9Luu3sz7QRGtJB3Uij1kgvEVGKa3qfyw928Ydnk",
  "key19": "2wgRENG5zfQBXeBCZRPkz2bY1um6vrjxJAeE768CvtKJdfuwDv7ay7Kos5aw9smDBL6NuuD1hF2GWUjTBQuGPTZ3",
  "key20": "XNCf5qTiec3Gr2dGiv8bXC3dA2UHAfe6tBudXDZ66HqFyGqa5kTVLsRMETAxgX6AUnsCPUqvXdD3VSUc6ABwmFY",
  "key21": "2Mn7C52KML6zn7SUQyS4Y5BP4zjy1fxefjABjw661FVvXLv9JphNth1YRZrZHvgxjDktREpNGdzpQCNEq5FSk1UB",
  "key22": "5zkdvuDndFk5jyVkw3CoFMNsmt8Q6xkqedZc5rWCLU6zquK7nQbbSa1W7MQ8PfHcPmG4mgwE4gDfUJiV3YSM4SwE",
  "key23": "apxAdAGST5KEXU47dMrrejRC6jD53SVPCz9onFYTtjYh86iQUTvYJWRaEjNyiHH6ww7hoWQgz82tWz49vw6BME3",
  "key24": "4GfTYxMtxmR234KWxYdJAMQvWJruvdLYvGKsV9JZ8iu6X8abYrPi4xhy68Tu7s5sVxWV6Jn8ySLu4HB4E3GHgRdk",
  "key25": "34aD5Gm9ZhNhGqAUxrZEfRYSrWYkBNzzb4CaAkvTPx3dhCaXYfXBpcJpCmajRBhiWAVQiKVboEbdFzg92x5Zbrre",
  "key26": "3iNJZhmzSeNavgDkymmHmbPzMKST5pqY743Q5fmJnE3zbg1gYJNjhxVRTV5Xif6fGVCt6mRjoQFqZGf1fkFz4bik",
  "key27": "36tYuHKgXGLkQxdB27Angt1beBfFJepjVKGKUNu73i6jFEdjdeptiDuc9wLA98H7Fp53REjixEBdbzqRtWyqNUnV",
  "key28": "wayxtq8wX64D5xyX2MvrxprM667iZA4YnwhbiDVU9mHpms7qJarNrCApBsF8vwo81drJTTEqBqCPgtzvaV6DwG3",
  "key29": "2yqKWMqXFHToDwLhUnPM2y6PZ3NXXDpBLsbLUKQXCgdcWnTmerj8MaVnqfBVpbyjzEyJPeNHV1Krqeo7TYKuYKr9",
  "key30": "5ZVubn5f7oykF5c7k8aiBARw6qQ97AMwhMdaiyu45fEdEozrG8UMbbzxNbUS7fHjaybQ2aNPz5uUz1hu3yPx93Mp",
  "key31": "3LmWjmMCeE6sBQ4uMBsN5kvgks8eBvRTWtybKn4iXMYBvexkR2f8YvyRbXjrabJmbBGwuQkjAfwhs8b9UViu3HxR",
  "key32": "2KLEEcykNsqwWprb4MudAWvewTwyG4PFJaA9SDSPps7rF5qSXVeSmpNnPQqxcmJEWRT1sZhVPonfKgVBHNmXNDUf",
  "key33": "5e2p4zUcpAbWnJMNLz2Y67M9mKuEaUtYvCJQvXY5DTJKqqxsUxYAGntKQcEyWzxYXY8CqBDLj1Yewq8yVJs95qt6",
  "key34": "PUcNU1NZtf7iqXuKA1Uwb5JawdwDaj8UK1iCXLQNweNm2TUh1iSjQaikajymiDVi27iknHijc17omFFSYE4UBwV",
  "key35": "3n3iyNskTVGhVBzhxWrBH1naQsqSC8EAj4zWKkreqhdpnB7ScnWeEksTU83y5dcMGa3CEFNxkgR67NRUF4W9Wo74",
  "key36": "3sK2RvSb84hryvmBc6ZyLmMfgpYUa2Ycgq4Vjds6AuZA7GymEJbWNqXNconPBQh7j3mZnHnV8aJhQoccjqiznirf"
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
