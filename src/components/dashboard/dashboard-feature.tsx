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
    "5Y6BGUwrVqvJDLgQSx1vHkmv6gph2TvDz5UrUz3GXRyELZrmBQGVihpUiAeMTtzRzaFqeUGGJ1iQtBxd8ZYmeGwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tGqzbvR15cbJiNcQeGcjSyhD69euyPeZTsjpKbWBGq1HSA31RyHYwFik9Wj4KZcKR2qzbtUwhXN3PsPZVHnxDn2",
  "key1": "2cNgsb2tzY99ZbdUq8kw3jnLu5CXeduFzh2tW86FiSP1udBxoMJYokgARkG2EzjaEKGiadiZitdQgoWovGKqtrxt",
  "key2": "4AEAQPo5EQHf6eAjswXzUkhDTX4HRti7ErVFwBS5k2ek2rkoQ1qFGTnnPcZUXPke6k648JJ7sJ2kKr9xJhYhYV56",
  "key3": "RqNrXqZ1bkKyKkjLHjshfvXj1gS9G1XFFswuXczEHDVzQtKKX9HHivXHwRCy87bPorYBM2xBccn7LMqrSjknWTw",
  "key4": "46W9RSftJWPgRmeEvckWQsAcSf4JxADr33joucKcXEmBp1N3MLYUHuEtU3xwKoJFz2ZKBTFYgvccdh6guKZ8hBV6",
  "key5": "2ArXQuBXsWEAEV2LQm3rPqy1Ldo7LErcg2wTLW6xgBVak7gQQqSuFbpuMh7NiDiLr7kEUmtvU91CMynNiMrysPeC",
  "key6": "5yd3nkykqeFpysFbE36rkGkXGMQFam4B6Rw4iKQX7UbNRgM7HHod9qgXYqnsozk35iBqw8DRXSKdyQPCfvLUkjbe",
  "key7": "RxzhnxZCL2gdPoVEvYMpMFGvEtSTeGNk4qFimuYCnVnSvZPMuTt68FzNTVvbbDp332xgHwe11TpE4NrhDaN53h6",
  "key8": "4djZKgcYSZ48brmxVekJZiVH95uuuCfy41EHyXjqMTJC2Lu9tNv7eGCThyj6G2qnAg3yALquzM3gYq2ehWAVRBTe",
  "key9": "Fdg6bL52yDaKiPqnFQ5725gfaZ8SMqxWd6k59xCUuJ2uuX1mN25ZH4eAahCwLiPJpTSXnuHMNsMBbb3efFUSFpp",
  "key10": "3YCc7nYSJeZaymnGD2Yt82fnft8bkgNDKzjTSBFHc8VMk8fohQWswSoUidxCtV4opqAiqJsu3HW7jC4woS6LaPq9",
  "key11": "3fjo8bt4bbiHhTKmwbLQhtY7PsnREFBZWjkJmDHAJNEUtWKoiZjNmBuqLX5TjFyUHiPxmrRNy5zETicskXK4Rhta",
  "key12": "2sJ2RpvnFM2BCqzz5WbMrWoueWdSSjbKmkGiw7i1JoD7M13zwofb2LLLBWqQThmpfZmAkhQkquqygnSfvCTQEPGU",
  "key13": "58wCkw4SognP6nhWHy763ZMJSaGtQvsdoB58PiT233MS39C61g5nMnvcCmzGGCWUWhWhLTMUh9mf3XESeURGTayR",
  "key14": "5XTTUrsfcRbTacLg6wXos6k21vB3MRXKUzTint6PoJmhn31Tm53ujXUEftDRT3aPFWrFqZKTbF9EnVaMsPeQwiQ",
  "key15": "5YGBEShC7tFtQmZ8wiexFfUeKR7dzCQw2vbkRSND7YFze4o6xyPDuEaXpeDuYFgRVVpq7LQmvBu9QHuU1hKB1Kqi",
  "key16": "2XCtBmxjTF2QEAZa8d3MjKTeLSTm8iSvsXkijz1ZNaLGQq8hxvnwRkKXesvqbUJTU3yjq12ECmYFPvBMNVGBgZs",
  "key17": "41em2KqZhoftS2SWx2YpFqsTtTALmTeG1ap5GeJJLN7ghAnkh57YQn1LMtEBUgjrjJvVcDUemVcB2cNy2ozcRT9p",
  "key18": "5FzjgXNgPcS1bLKLrtAzHufpMHo1DzKXtL2RJkC3gqH1LzpmXiUr8Uds1Wp5jWWVUVi6edbk8bQTLVYxsGPVFKxL",
  "key19": "5LrvRTDHXD9Bd78oqmSq7hHF5k8krqfGddj2fHWgQvCuD5NWURfQ8KfjNQVj17FZgi43F2aVC6hTf28EJVbPT8Vd",
  "key20": "41U3pPSg7rhKo2c7QqxCy4VUjFQjZKhvjyee8hXLGg6VGjEsyxrLMYwwctitsQCffrDN5ThVVprxc72kShznchLy",
  "key21": "5hKMD3ycTwibK5z2j9nqgkx4eQs8Qk6Fmuy6vyJc7hMuCR6SbBKsriFS8dRKLzau9G63CvuTBQ2AagHCe55KM9Mj",
  "key22": "42dq8WvCbkPmtuWA6roHWj9nDXHWyjcozELvBoCrzbcyLEUgYw3HhRfezMwkDDC6Vwo47PJbmotEejTXz8QhLkfm",
  "key23": "4egVzu6jTMWz3XJQvVNPfx7Y5eF1kKM8mMyDnA6KYsycrUGgkcLigDjZJyd3osrRkRAzF3BQfgZWnGxN6bSqAVJ9",
  "key24": "4bQumsGJj2MzUgh5uL91x5T21iY8PmYEDwnrWwBo4vA6DLuwFWiMSu5qxT9qnN2MMp1u6T4aQjNNjhzHSRehGoGk",
  "key25": "5SYhXSqbMYZSqvwuFGM6jF1MGqz51xSRDb8uNCEYmoKpJfchrhue95BRN9XghS3pXNk34ZKU3DnXMKYpev3oMwky",
  "key26": "24ZP2ZhGG4QGC4F9KZhkfi5Hwg3ZujtLsxzVCgic6gQTsA3NV6gAV4dV1utszVmte4MuYaQcddN5Ua5Q286L3oGs",
  "key27": "3A1KRCLo5pPq4Qof3uhsL5TFDDzAvHCHKiX2kG5mbNLFZko9X3dEfVAPnypiVYnqL1p6aRKh7egryj1bcFkgG2HS"
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
