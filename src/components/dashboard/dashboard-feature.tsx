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
    "m9ysyxEfDZZsju6tqWiAEocMetPREmv6cLdKkSXNDhCyKZLdygqy5SxWhpXtkdgs9RzsTKR7meX8Kw9WbamuVp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WGK24VVTSC4qSmjMNHqrUb3Kg1FvJbeEYi6xwRFnUFYCN1BSFAmNZ8YswoVRXfdcALFNpGu68QYQYLvxrnKVBBa",
  "key1": "fJMui2fULxvugvLJWanDq2EJfBpAVuz1qekAc46U5P3rd4Up5akLDnWXhQpr2WDHGDVxTmtvCueCuoU5oL1Bc17",
  "key2": "Tkzic6zJFxPKjaBaHpQnWPDCmCqfPFjouJkSRoaNSHxFEwWbU3TntsenbjsJqTJiUdu5vgDengpbfffzjJJaR9B",
  "key3": "4CLUEgZSnbMK9uJgFGvEota69QaubKQFEWy7otgLTWhZQ2aJFiFkXbogNkkYiEh83stcUUrfGb9QGfTtfztCkZKF",
  "key4": "2auJCVQc2CDSPeXcQuaRSHCKaG4x4vzH1irLQdyLCUKNNNjS3BToLJYEwg574uwqjwR4TBG56uoUUr46m54qCgTv",
  "key5": "5k1cE3uSZAtHsi2d7WNJdgRynaWbfGBAGCpBFi2rq2DoDnQMFyPDYUaqmmAkt5jZCpzzGEUh2cquMUXpmgBM5DhQ",
  "key6": "kLTKSdDQUUe3hPA39PheqMWUFNuLrNBAAwF7AwiRWPmbXENUCgTWd4VLZharETnVcV4VKUF7CQp6bhUCqZAnz8P",
  "key7": "5sDWDotzTvhTbQDwRoVXuSHr8RQ4Bmftz9epgA54xr5CqoMPP74Vyy1eZPBaDKEEhDgqwmWkwaq4eNqMirVwUUT2",
  "key8": "4vT4q5VmGiqq87aisrzsJdMEppBjGMquBzLSb6hx5sPewiBrDNCK3SjykwX67cv2WCbtx3Z1mtEChMUT5cadmurz",
  "key9": "4CnkgLWThT8hpSPEY3DLJpZ4fkhuXQxjKDdCQxm78GoiBmPbzeoAJtaAZxciyjn21vgxDJ42mn45P4UHT597WjN4",
  "key10": "3EpR4cWwNZ9aVnfnfvn8zbbomSPuY1GWsoViBJFtRpB3b81Gp2ecgscgheTkNo1jWufDHGz6W3K1sGDKY9Z8ohhG",
  "key11": "4iHqeyxjJxFD6vXoa6GyskPpzXq8BY9xPz3hGCWH7Vz5AYWgh8icExxW6zkTmvZ6wnyqvrC6WuUhswaXmq4vTDvL",
  "key12": "r9Bp7PKjzMRZxu4jmxBDFnAewzeiN45wmP3gx7jo78myG2ndFD9Xgm1mmebZsB7DdDoyEHgn593zuax8ogsq4f8",
  "key13": "4k6DjE1JMg4JN4nVdndDQri1eNSdW5sPkPJ7DXMJ3HwjHTiNEXA6rFMuDGXLFmgKfDc7yqq3dRc95ndprQM1eGBe",
  "key14": "P87WratntH9ozpW5PLLCiBnS4ziA9rtvSC8xnKdE54zbC8qfiZJ5CeSex4oHvbjCsk87Bdh2YT67Eq9cvCoanDs",
  "key15": "5tc5Nq8zp8iJAtFqGfdXiKNzUAusv7QMKwtHefScpA45tSEr3yNDEcrCXLUviiC5QBEajkJ6DZi8nmF2ShcehaVC",
  "key16": "2y6wiqPvmVCjKxMeW1AeBpAd3GQuVVf27dMMz5kGqT5v5XUTv5NuYJtdjEfDTQeaekT1pCPte1heKh77Yw1C7j3j",
  "key17": "5tk2bWCnHRWfcvEMa9Phjc4JgMRDqm2bnEnuHMuNabtWVZqvXooKWkB6ix57CZHMJUkdFiF73xfuXH2FXjzauhMi",
  "key18": "37DrcswRXWNdA1ZVWpJa6zLSbnxq4vrJHz4HmHNA17Z4p69pe6ppMfDekzKrzSLYQsipQhbXQ6E91frC1YdJmMgA",
  "key19": "2WesrhP5a8dFK6uvJZNp76BkwjAvSsn39cDAGu8k6qN1R1QjD9QbLZATpyzUH5hKRLvVXdf8mnMcVBfAgFxrgnp2",
  "key20": "2A9mTfZ1wR5XaBN3CzJqv1vSFpCKa9EzZuLn4QDTujZvN8cxpz7Gi9iNAdPcR8VJ7fTGVnm7ZpsTJeMC4RqMkRcG",
  "key21": "2S5ncBNbuAHkk1Pc4YEWR32Lg6hVmEFut8HUg7re8TWfWK22c3NUeLoiZpewj2wKtfn3wmF8bBc24QRkBf7vdCod",
  "key22": "458QecanEw4wzYFqgREmVYsjoT4ppiy7Sdy27FmgU1RJiXZopX758ZzRvUJrMGXqipscHCfV3aFKYRmXa9YCQk6r",
  "key23": "2RVjncoRSVBygQuK8uNfLi8LK66Lusu6HioyrCrFVMRJjz39PKAt9ex3u9oKALgCV7tRUQo6zszBB712nmmPwypf",
  "key24": "5mtoMWF6tM1SeBD9VHsth7QTSBAGRAMsyziRF9R3Bstx56dsxPr54kHBhtqmENi7DBreufKeDxrfWghqX991LiGP",
  "key25": "3AyTsHrwaCRQ54jvXzX123X2g9kU1u9dLZKEPHAfkPqP9zLYoUrt1eEH5sW6Vy5u9kiNyvpRFNfjQM1qWFqAK9Z5",
  "key26": "3JRXCjKiuWsNXayDMLFQtnkUTWvKWn8UnXw7JyczGE98kyHis4h8mmTc9xFQfLjKuiuNZ8Q58J4XQu5ZBQgSzFxv",
  "key27": "edGpD4asdqDiGQAz5i4ah1HLhzKoMJgVQzNix5yAYjz4es8zWsiy4JLQiLzReo9N8jQ9iwmBUFe4tu4Xshx8gVQ",
  "key28": "5D8usFm64BaSj7RiAXPqPTDHjdCEq6hbqwqBvzLGyyxV3AhrtZNc3JFW5UHkV1MpaVZQWeNvshR9h3EToftYviCw",
  "key29": "3oY2UT8QEpMTjoyAJCv2yCs7bEze1HrX6EFbX9t76e5RuP85JMK9JxKsSMykfVGb8VKKLC1csQdeE5LCyRdGQTzD",
  "key30": "2uPu3MrH4txPVwYQmbne6wZxmxNdZCvfaFvRc5ZFUYJ4JXM7p6umr2vE1YP2ZRURjtpG3xJq4yzScEGJuF5nkGWE",
  "key31": "51ubjBDMVc7jmrk9dwiNcrzbhbseKxd7BWpuSASNC2JPEqEviHDYNVv5KdyWZZLGLfnyUJyzrMbXzhDcmDw2mwbT",
  "key32": "3PizyPB9hrtbzNMf55obaqMidp6yegzXR2LAN4qNXNbTn3KfjNGqsCCm9a7Lwtgm3Qk2sPyJNXdJvbv68YHgcYkV",
  "key33": "3BQnGud42dLUVhcJQCuMk479pNfFasQ2WbJP6VFmHrrMuK1MmfGMVNcuZaHrd55cZUzqRdFZcnUDbqs4weBKavg9",
  "key34": "cQbdpXKM9fxhJguikKVk5KxdzeY4mYRa6eUczAr7JpPpb5jPvz3D1cmD2QDqwyHB3y3sTquSinyPasfjJTEjD1M",
  "key35": "2tyVV23GXawuHZwuxuzwJsqRjmkJCBNtgUYN4jVzMFyE73CajEVYNvh5iFPY1jRoBntdskYcKGvCqY6NSinvaQS6",
  "key36": "4M9uiMuTifwBVgfrykew6WgVovnzVtdKhnbgPVcvhK86mtEwYoqeKhgDT8DsuF3kQRRvqYYsJ8BXYX2LvoCPfLoo",
  "key37": "2ZqFPSV95JbFTwfFW6EN1PmoR5sQbCVkbSCDmLeNRBZ5TVvCTfRYtQNHbqSh5H6Whqg4WjPECertCwbdwW9aBHDj",
  "key38": "5ewfB6dnJm9dK9hQMfqmKrDbJWsFfCs3HzHMgqGYJ1XxwWSLE2hUu6vmddvZRG9iA6WA9ZeqPiAkskD61pgdgvR4",
  "key39": "GNxTsgCfzUzTEqX3D4u5VWpRBeJb2d8C4W5Lnbwiva5Hj8cczQTXZvmxPDN2cjXzwHQpkxvHEUw2j6b9vrFdVNJ",
  "key40": "41UNLh4zCrS3zoZsicDgS9E28wtWKbS2DQY7JRmPY37RMHgaUxP6h3EsDEFcwB2JdQ4TVdrJ6gN9mjZQJ8BWRBx",
  "key41": "44YhThh1AFVy3WcXAqq58qR58xX53snAXF836TiDg2jzCAzSCELu2rtxXyFZAFu4TTGFvxEmgoCppQV2SQdhVVXe",
  "key42": "2D2cm71Ppa8VmjzankpSzWhhH9qNa9Uq4X8AooJY58Rb4dPPkEvGZUX6AQAnrmivUuJRMtAkTLJvCozECXEpDJx3"
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
