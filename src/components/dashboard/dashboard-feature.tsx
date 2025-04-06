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
    "5fFXvpSPCq2kmp6im7sLSNd1Lgsv3wNVYLPsKUSoz15xkzbBp8SRNSFrKGTG8P73ENxu945eAosYUvnW6iUg2jFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9gWGTiSTczjTkXmgLdbztZUECkRapMQ52gXf2akw58qFBgHnte4g4cWAXRsKNyHtHv1dbEQkysz5EsTTJQ1Rzpe",
  "key1": "2QV4jPzY8rUxT1fkqNY5gDEikMfn5CdcV2KjMENsmGfc9mvA4xHRSh7R9tqE5Aa52px47UvYhuVrJLXMXw87jncG",
  "key2": "ACV6nG4eEAcCtrhumSbdwQA5zV7g21uKFFyo62uAeMgBhwEXxL277gKjBdEvw6mJ4pytn7oYAx5J5YrNRPPfK58",
  "key3": "rHo46pLcuUMuV9uYa75ZQU8ENFRXoXVLhhWFRG5Db3tv7T7ZDMs5mYHDe91FXdr4vZv77T6eCk6eiv2NxL4BXxF",
  "key4": "2Udto2H2i738oSW93HnoKdnXcMUWstzFadNq8vxeRpsJRhhWqiJ1NNiHsUxhwPgcdn9kRuu9hDaK4Es2Vbwiu4zJ",
  "key5": "3k7V164JuNcn8gigcmYCK9h1fQi89PkQHtAq4iG4GRUJ7NdtnMyVix56aXghn33fgusAmT9DePLu8At5BVxd8ZKF",
  "key6": "4MFD82nR7AY4U4vMx3Je7FuLbiszc2tERE8typfv1JP15j3nn9NupCUMJfksomRoec9i5KpGGa7i3JNTxUWdY9Z9",
  "key7": "yP2vD8UtV7en59ayg6mzDpixSnU4WBnVeZcDuebCbxudurUKB9bFQ3oojECsGKTGurAc3fYfsSdfqerjdaDoF7b",
  "key8": "2gB37o78tHEArLMJu6ySCBjFfwP1SL3tMBibzGju8u3JAkyPZC7YYMi9VvRCp6rJZZcDCHrPbeDqCrKxtjomAYwy",
  "key9": "5hr9wffgaGfLfCHMYkdWuK5LxwdDB9NBuYisNWL2YzJWYR8qMrPSW2eWygLGbwEFfrFzFBS5vUnNTYGpGotMEmn8",
  "key10": "41Psj8rfD3eVHdEoTuDtMPvE6FTsV4YzopGd5FvX8d5rqZQ6RXvvJ8pYEb3saxSSgt7UZ9bxhgWc3szKvN269LGm",
  "key11": "nnfXR579R53cgAfbQKmdAjBRCAkQRsmom8pMyYmLhdUQKhGgCDbR4966j8JuGp1yYRLq9R1UofUHh7aVmUtHA1k",
  "key12": "431pDi2eGngpRrFUqFHuaTJkyAFzZu7ix5LLm4cbQsvdiv2Ekr1J7eihUddUnwd6vqbBYr3c3L3bdQybkcoc1sXF",
  "key13": "5djD9W1fA2drmo4U4UhyYnykEwvRMofEzAY3GbKXor4eyDcioa1Umi8oTCEidRow7PXXtfufN2Y5g1L1M84gA2EZ",
  "key14": "ifgYKgmmQcaa7ZZoMbTMTuARYc88CZEkZfcUa2vscJJNti4fDYEJF8gTk9HEfB689LX2tCAbuPJ6YwumpAzVsuE",
  "key15": "2Zg743WNsvJBaJYGkyyDDEWdZwCMtna3vNWQETn8QnitKyspYxrhgDaJi1oh3CsXqnM5xgPCRfycFx3MjyAKgaQV",
  "key16": "4cuNn2Fhe2JrD1v25yMh1nH59Y9H7SWcssnZ9BsucUtZvJTYamkZWsfTGY3QcRAx4bVpBzU4gnHc3VPeyTGVeigG",
  "key17": "4hPa52m9svzbZekJjNCTTN6KYVyaVmBuQXR34R5TVDE1sc7bRxBymVGxPpcgvAEJBi3x3dSbnU3NWRTTsB6wJFPE",
  "key18": "539NmPm4cVyvGVByKXreRiX2tyLv1K4yBWEVxp3JrCLjRmYWAePDBES3gsYrusijRjv7n3k6DZ7z7YrrXPJ3ENs9",
  "key19": "2wGEfY7egamKCytnbksBw6HRiRDHLmC86FXaNmdQ3iS9z6zy97kHLfb9NecqBbz3h8cnKt8wMsrpmbb5AEVFph4H",
  "key20": "4ndwyAGDvVUWowsebwnm5jRTE1zjMYSHg4Tgn1eV1iCiWvqFmiD6VHqgGrwaNZ4dqVPdEk6ikbhp28MNCLFwX67a",
  "key21": "k8tviEFdQ6oix3BtZfRn9D2VXofSq4eb3UpX2WSPMiwc2rBSJGCeVh6qYAN6XpoZ2pUv9dmgQHcWFYFHDShi4qf",
  "key22": "2q6JgxDASbzV3zKCGHbqNzGe2g7ntD95jdLYpFTGi5ddSkz1bfhPrLSXREdZd93DH9vbwekcYpjqEydGnVVgThbs",
  "key23": "4jHYrVHSZmPnUawMQNPxJgfgguJ41KD6dv8LuKRj7qPGnqSQecCkHAsecG26WsX2HpnhkvqY4RmcrnBTx3ESr3SD",
  "key24": "5SoHvCvWbyHQXTpBQ7uBq18t2khyc2e4Ww7D5NL3cL53dF9KsuTK7rd128tbtnCiAirSxxZL8qLZfg7WzJmixJJX",
  "key25": "3VUdsnqhV2RVE6BsUgwAcitDj3bRaB1o9LVr4L3N45KYbCkJ1hCrqambKKUpSPyM7Tbbc5r6i72MiAZ43jzFJXG2",
  "key26": "62iAWN6joGHXghoFdxbmBtUkNsLALeNYkwJ6mSBbMVB41awP6z7r1h7m3G4iRei3uYAvnMRvkeA7BZ9Z6vy9ptPn",
  "key27": "Jhb3KSQw184oJD3f26vQEKZpwJiC7FKJQMWUzUUy919MxejoMMPpf4tperTpxXsmf9oGHoqQKUYoHHfji8oKytq",
  "key28": "3xXDCKRPArmTuC6xX2aDJCWBtqHLs1geodFL52KrLuAYQFyYagM4tMWcKx6FhmFAB7oMLdfYDjt5xy2TEwQ8c6h5",
  "key29": "3PLKTUca59Yv1PygDR5GfjNyppjoS2MKUHTdRNZo6mQhVNtGZnsq8XGGbA6WZpKuGhMtwhcyza2MkYcA2ubig4x1",
  "key30": "4d518VnjNNJ5m1g9qsDuXuVs48iwDLvYdm6PLLG6Wdw2rnjejLTgCEaPQYQBAjUg7iu9EtMH5gxgUmbMr6mz88u",
  "key31": "2ViwDE5x5muDWFPHPyqULsdE1ecUXoKKqJwPZwSf8RQEEaEX7VKg3divh9jBxpab4jQobUENUnQrx248jWctmA3e",
  "key32": "36Dswdpmosfa36Dss2MuEZMq9LEhjYPjLAw1hYSdpjyQ57KwyWZ6ePmwwHEbRPWjRdM3hE6d66eCH7aH4We1YiAj",
  "key33": "2mCCniMYQ9QESaJhYP12Xpi1MwvmiWxVxRLUxXUwLWQy7qR8aPWKabtNP7cX5wVVtebvrXfciLWdCwky6edie7Sa",
  "key34": "5vxDYkePRwpRoXYZKimHRmkN3Q76zgFCksHWQzDtj9wuUrBUsgdbbXvznsPpzsTWxeLX7xyUQk6raejZrBnVgLwo"
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
