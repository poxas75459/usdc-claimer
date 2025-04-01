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
    "3pf5wNvjMr1AhSDsPLEGzTvatXvx8sG1eGshb2poHik47EuvaqpW5CKN3FDK4amJmPgmS49uEospM2zv2uJ4uBXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v5sS91MRpmVYEVZEX6ma4NDb5DfwoQ3hQG1bMrRrWdNYrvAAJyByHxHW2GabRr46Wn4ep91n7F9f516NYP6QFuU",
  "key1": "HzQMNnAzZvaodBJmnWuhhs1HaHHBnCgQz8yvR4aVteb5HLuYDoJNCR4QbogtBMqnpZ8vqJQTKKjpedUj8Xw2Npv",
  "key2": "5BwHBFRsJNji8yaXEsUEoeFJ8UnvRYpkquZ1EJSFqyianmjQFNckhdAXjDFpjHyg27bEsbRX78Z3ZXKnPDiHMwAj",
  "key3": "2o6kt5Dc8tGjpXYA972TzYLdpeaRvihyuQFBcGLfTU4k2E6nS9bhnsE6286Ahsen5pUq6wp6mZBwZzM7xHPsEkX8",
  "key4": "3dptJUkM5coAccH71hVjQYgqa5yRi9TEcfPNXhQ69ZewkzPHGW5oCvs1x7KMWCj2KMxWU9de1ZfJUhWcJAH9NWHs",
  "key5": "F2sx29NWsJEQbNN31M2pnACcQQFZevJfYYhUhER86k4ovz8uNpGEigri2U8CZDJ5MYXEjYqmst9uitPmRy5gmrn",
  "key6": "5MkzFiscJc4qd4WdxAVdQqkVQEVfrqKNxwoEis5i1jcaMCFnFhWtSHy3WvyUthL2jPCtULFNZq68YUjnkoSVv6gq",
  "key7": "fLDVE7q5DmRmzDsWYkYnXoP1WKr7s1dWD1oezKHyoqUGstmUN9rXyiAEHSSBQ3rNRsTCQoXPhnBBF1ExoZNZGCU",
  "key8": "2sYH5WpkSYwduVuwWc1dB8ZiFZP47NRgf1tUEnK1Ynm5A65KDT2v1YukX6qfJcMfxbt512rmXLPGhEaR3Npri7Ea",
  "key9": "2zF5Md1rjuDRMoKbN9QNSykrHrDeJQSqSTamhU4xQHTMaTvuMbmemLiXi47SPA36TFQP9xWDX1m1DZbavbDkxdnC",
  "key10": "4HWWVJGhb3i1d24Ep1ggkR828XMEfYNaQz7g76VDFFtzQBnoWoeG7vZChbUgX7astWPbjtuBM65BdeEzpiwbDHQZ",
  "key11": "2M7KdAixjYz2X5VarAsxmKq8PRvNA7tgUaiYdAkZbdfc59HeweLgWrDgfkQBwQFCTxa93bXRwAsSBbEWhKS2Vhww",
  "key12": "5y6YjFDibJqLoWtHuvDdPRtXdBi41gUnsE58DCs3PUagUVHtsyz9Z5n8JFYk6qotXCra839TctaheH2pES4TVjr5",
  "key13": "4zURYX7zgkTm2PqHrqcxsncsvPiCN9vXmDM9xXGEJi6Awonq2dseDAH5ADARh8aWPq99BJiXYdoikZCBB7hVo4Kf",
  "key14": "3PmgnaF2b4wbKyCS9QjZJLEHTfbDMKSfM4knqSqNh9Fb64pGoeTywan5mCVzun1aQAbhnFcx1xYJwQ2xnK7JuN1r",
  "key15": "4uwrxzVTuRNfyDt9x7VwDuBvF9qZJ2sB89KUnksMhX62CwYrusgSw6Ym3zonVNyHAfotAfezXBy88PjuZTUzJbXh",
  "key16": "4MNcbA1WrFmbLPWFRN5WsXXqJJoN1vsA8ftR42Kw5iJRd4ghyngaq4wbDne9XYKz5Jb59QFBGqPzDChr38aJN5ka",
  "key17": "2aGaYCbEYkuezjdhp3XzjuKc7KNUEDK7PT6GwABixy5aN4QCJ4XtNyF6K5pAujM4cgDiAoBta37cQMULnmSwNhK5",
  "key18": "5iAmw1vtEd3hkM2h3aAZSrQrsPYTqwLLTd9S2NhBmFdG7YzZsi3sGS4Vhn5ve4eTEq5CzMTfG9HkR7TufWszB8bY",
  "key19": "4Z3AWW17fQeymNWSAnREja1piR7SwVhWRvNwS8dnwqjRDVuFTbCP2wzxyqCz6q46onU88Z4YDFVQAPRWh6KXZ7Jp",
  "key20": "5Z27LQXtv3PtLb4nFLXeiLqpsN5cUKYatQZUgFgqVeAvHtBVNPQfpZUHSFSRxsRCvp8ZU6Y9VMJcSuMGeH417QGZ",
  "key21": "PNVbAC4de2VYNSadxm2xKurFRBMuouheHVSrrFaABRC3WUxbNFahM96SMiWPgaERhnDwpN6ZUUEfLaiYxoyAfLQ",
  "key22": "3Hhgz5ziubP27HjcYpd1v2r9D7TaiXggiM9DmWCBnCSvPjFkVw48W35iy99D1x6Smk2EPKyBe7TJ6UKGYQHViDBQ",
  "key23": "3doq6rE4DZPnBhS33hoGMmwgSpzTVGJ9fQzNTMhuWMeedBKH5Vu1q4Cc1rEVtWbMU3oHSMKh45WyRfwB1vLhoQ6R",
  "key24": "62pjKTKHFwkCdSTxJdqBSEHR7QvDzDXXjqqdLHcffZeAMGp3zg3PqkJRYEnpniY1hMYVzJeCp1KFoKbhkZ3b9RG5",
  "key25": "4g16HTJGiSFRYLUsqqWYWS3ywgB4X2KU88MyjzSoKzqr8WMyn7a7JbRDnCVMJ9pR2G92sFQfqWbV2pBCXAQuhp8t",
  "key26": "2MXxyZJr3PwQBTQ7uuMnMK2rtTc8MAvpUQvHrJTEgZEcY6RLztFxTmFUdYD9A88yLYx6SbC1mRcAdXqSF9q8jfMV",
  "key27": "4ngSUFjLSqV4wkdvpiwZsvdVm5Vb7XcZrmttLLcVvAz6GuMZ4BX9nQW8WDduU8q9n28LzvDPQZdHVv2qJoho36fV",
  "key28": "23zMYLvdTRT3Q6b66uRzPP6HFALwRTj1BHyrQtx4yTjcXFRjBRNbdWiFZ7v1s2BtU4fG6c23hmNPcmZkdJ4Hchw9",
  "key29": "4uG73DhoL7LjYygBwcCbqQPnEqySDffpYQ6g9EjZxr1jHnTJfH2Eec6aTY7Ybc7GrURouJKAPwsFjUcazhqoNEAT",
  "key30": "2k8f3EsYafktHnCvtyMSwoqF77RvpqjH5tRVLW6Rnrr99qWRkNPkeVa32YG1FzPt1VBMNMBz8eFTt2V1tXYBr94E",
  "key31": "2KNuB3JKhvV5n6PsNapeifdcbMtS6W6e9UHb3yDHD4PUcH36VPTMgK8adynHGPck5AZ2XuPfHpYCFtbcWyQa2aRz",
  "key32": "25rvBj4TD8vpepskwRGX3JcD6ieBSU5FRdJvqEvDqGWHWfZjJk6KvJCSHueRBa2W2SDp5vPtspY1jSjrw75SA9WN",
  "key33": "3iejAQXhmuDafXhhTjFN8CR1ixUBumRRtHTrwoPnEaHPX8z46HSwcjPFdFtrRv3NsLX176karBhFEugzbrwJrAto",
  "key34": "kirQcdJN9knCrSodT1jKrd2qUz26ciAiaQCn8YKBPrEM8awG4Q1sztLEsWtj2ueovHUanwdBiaFqhT1pspWLKTn",
  "key35": "YgmYe8xwX87ZwkyqHhXGtoGR1t63jYwW5iJvQKbGtBnWjsH7VFo7pw5WaHRm9Vs2RbtrBewnGzmydLr45ya5NdL",
  "key36": "3rJ5ErHqNwcrkD6ggqZEixG3mgcMjJVAYNSV2RaMp3AKsHnan3nWStFbZ4RdZwTzkGtsF8L5PVodgSGeVtsSLEtV",
  "key37": "5vvShG8LVapM7QHFBzW3VAPG5nt2dbbjDea2NpmWTDtGW5M9deEtT1K5MM28ALdT5sY2aHna2EjwmVvNvox9jEEk",
  "key38": "5vFquNEz5gHQBjUuHcjjNbS86Jsa7fafmodRkWxhjApRbLBueP1jhpqv9PcVg8HbjQhqPmHmEXiKLpLP2QQTNri1",
  "key39": "5MszREyFTTw1Y4feWJP5nRKhwiSTm6RWbe2q32M1GyUwCBAxkfRyQduk1wTk8o21GDjJjePumcKLoJ1DNpTmMov8"
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
