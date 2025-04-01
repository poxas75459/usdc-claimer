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
    "2wdnhUExkKKJ4tQ6GbfmwazV2spdTwgTfYsxgmoPieWa8GsW7BGXBy4EXRgMHkcnQ315k3U2PDKr3yikBgHfc7r2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JTbYPmYB1toiL7rxQxDotbHYCD9DGASLhY5duF6VUzr3PNnpkJ5agkZJBtNWqcersENbp2qFibSYB2SxNkNdWAC",
  "key1": "21SwLLKxgnTWWaBjR51YdVNKJ4nNKWb7QSzuzoHCTh8oofsRMGSdrVT8rEELejLXEdvt2rmb5t5aHacYrqF2GJcD",
  "key2": "46G9jgxUq4PRiEz4knNcXEqkL5AUDAa6vdEcSvGHbRaS4DrZE28TyEe1Jm7Lwnwi4255EAQDTLYznsetvxZ1n2ew",
  "key3": "LnwUN5jXzgrAqLEQvhXVrp58Zc17EtoCXitVJhjJMzpESnHCVs52xjFTyJM36WTGHY6quSw78cBK93BiLBy3FmS",
  "key4": "4HDdZMDQjuJuzFGodmuD8536mzCUXx2DaHkrrGBpARjHuYaUkYpffqsSVSDjtaZXBEsBsq6Zsqcwi7PWujQgYVh4",
  "key5": "2KD7UhFV7ue395GEpkkwiLz7suV2kv4kn4vJzTdAEg6CRFV8gxTWRk9r7iy3GjBC4e2AFYiAvRbDcQohWy5f1Vor",
  "key6": "2sye132B4Wt7MD67seErZxgCWqD6DQB5WPWHj9iBP228EgXR42NwTeH5sF4dNbybj1REmoL2sczbfhSLH4Jph46w",
  "key7": "3x4hHWxgdigvbvTuCbfRtUXTr8AZqXHE5vfeCk1jjoab7i7HZB4EcuvTwk5jBNX2Hhxnz4DYa8dvvWEm6FCHJeHP",
  "key8": "5gGyog2MHsZhBWcAZQS8Rg7pjvtcFSSZRcHdEsbuqyFJQNAVCLt6gaAkucc1E7ksxoNzVdyGGSUWKf1ddsY6no13",
  "key9": "4cQVp3BQR8S1sYxytMD8EGkDBovPcnYvwYU3MX3PcQghRPiZwPWUPC52ReRsSE4R363zSUuQ5jWVphCthAHHzg7G",
  "key10": "3jedpjAUCsRgPeVZsk5D98eGuEns6LnrccLu77H9kYup3Tij2iJwqaWshyR2KXqYNjYDu3NZbC5RUVTBSDYxvZGJ",
  "key11": "22P1d4o5D91iFrqqVBMjo3fuypb8MFm58uP4EifYBifTiquPRhYdUX6CZbV6SLfug7fbyY2zym77tKM6RZvDmBJi",
  "key12": "2o4ruHrtkFDbUeHeuH5j4ST2rVY1GDtGZWE2CtQhtxhvtkcTAXe7XQ2vZKTT1fUo1JS1a5buAGc2vuB3GHLsdjJA",
  "key13": "5d2mqRPT9EoDx3qro3xcnMZ62CLczhViGWJZQnddPJb9CRFYPzEGBMwHrbvaTCuxfiHbwARjLMT1fHqAu8uNidf5",
  "key14": "4wUn9foU9jCtqRjStagyYCnBboBqkX6ftSSR7BtpU7vSu1rWVCj11PfY1cC8VjhYjqGWECJUnHCcxfcVenSHvVLG",
  "key15": "4wokA5XrZAq1td3ia4PK5gLKncCvemdfcaPWxZ8DqAQzrdsGPprwdHfsHoTf4DpnugxKzfoSsQgUw7NusZUx3w2A",
  "key16": "4MzwK3QfSnRiUKdYaUdwh2aswDiryHFZpLS8DxGrZAcXryfeLmk67mnxeUytj9bhjzS4Xbfn4Ce2EDLr6yCb1zbC",
  "key17": "4VNWTcMbn6VaGe7qzeDAbrdFsoJcyEMw3fu4GPDXmyiCuB3FdCDRh7tMfo7gQJ5JPb3hG8jhqaEzQzJ8WodjbEMU",
  "key18": "36RRvFWBcrvr2ii9yJ3nEeUBkJ3H1TtDcVkammMFi3B6RzQXQn4BYCxB7FmJ7D3ThFuEd7XyXeG6bz5f5yoYK1c3",
  "key19": "268udWJQ8LWH9fG6hmzzftJYx1uZwHLWePrticrcUZiVFdYNKWCGhzX14pjPxkJ49HxKT5N6waXapZWy3qdZrRTg",
  "key20": "21h8FeFNy9d6tMMeCw8TSuye9RNicFtk7MAxQCxK95vYMJddcm2QiE9fmqa3qwD2m6fa8NPXik5Zuhn9ERXGCcqE",
  "key21": "463heccKzzFrhRHi9RBUxubR67rJ6VXbjnrFhFXaLuHrizbC4fbqExk11RiMVh1rjhQX3ghyuSvivFVbQa9boHcr",
  "key22": "3qLVjcSMeDGwrXkdUE7mrAHRXqEdySz1wSfy6VdJF1bQVkw95tNYL68DMn5G4DFfQAsULS7WbN4XjGYwbSnpFWv2",
  "key23": "3ae163p37s3gyougaLE5asqWbZ8nvRuF4nTSRYBynFVpcpWjrwhGoep1UX3HPZEzVknSTz9q9ybqaz5u6eVsq2y4",
  "key24": "4zReE6yWDytQosmpsCB7TJWiczNfPqe7Bw8fSsGdufRh6Jd1bUuTpPsMtC6iyroFJFz9kpmwkwtkrbBr11XRfTVa",
  "key25": "3tSFPrUwjHnocwjTmY9dARQ9XmAfbAJvVb8dizqnGkaE6twZHPL1VXxnGrVvSja1JSznvgD5hR7J2ezDJpF6wmbp",
  "key26": "3wnY55pn61s2uFUQiH7BBskisGoFqGK6G23x1dga8Jn4VbGeWKxFpMtz81bbP32Y951qbdzMr1zfwLFDwfq4H3Rb",
  "key27": "4AGMrXXgfijz6HALCtZfjyT3ygymyiVeDJZqJE98WuqFAqLHya6pyTPS6CGmX8JRvnWiZKFNG8qExWXL4VWDci7E",
  "key28": "3Q5nZQXUv2k8t1bznU54TaHsBmyRbxsARauBbt2hpoPv6pmkRMGh7MNycqjtR3sUYBawbrSZw9FyAr7gFiwcQCod",
  "key29": "5zq6WVB76FPUdABK2frqnLxZwwzASxWmSNzyhSxLLYibVoVyK7nSuH2o4HtQf82gXmviXuvepN6sGx6T3kGw1cSz",
  "key30": "2M5xqeGBooKsSsPUCymcgMkuN8GqqGWeyQTmdy9iNZ8vaQMB1UZuHV47KU9uzm7vRXMj2qqTLW7RzA1Ta5XdUQNU",
  "key31": "28BkjK7WNpiDgmjSnK7D5YZCbcHEvSxD81S3xXjAcbhVjhgADchd2DKGUbKRm1f5KRdk9m8P2D5dYpry3rMMYS3t",
  "key32": "34s1JHw5wZJQjbv223AYwspmRKc8YJzN6e6PuvPZQvP5D2MwTw5pCkNxACnnoF81DVhXBi4BWB1ny3JK792eAGE1",
  "key33": "6ebpor4Ei5bWby1bfjVmnSjmsVSqEuXTwSiQfhy6u1ti3cZnexiL8Qsa9s7W1XwFAGM2BdVwh5L4X17QNopjGQu",
  "key34": "Wg26rFm5YNnQescPoRkc4AHjpSNUDTsXNUDNH5Trk1aU2mpz4jjBYjePicM2SHPCds5RaKma9Nj4LoB3KKRdx52",
  "key35": "YPsJirLnVXHaoS1PkGxc8mxaEBBKx7EWsCJ184PVyJtsiTJgG1pK8PSgdHa8rQNufLsu23Zj6NMjQSuJUvaUCq4",
  "key36": "2UVndZm2DJeGrEGdnjEaPc84XknREaBQtAuzjYuCsizC6DW9kFRhDFmr8g1whX9Zp6NQrF1E5Ra4324pEoYaFTRr"
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
