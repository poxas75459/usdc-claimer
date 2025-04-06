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
    "29GBHzv32DGb1U3pncLEsBDacBjUeocR9n9yV3t4VWCSoS1DjqTGBPQGdTDGcMpiwBov5o5zQQr3EjRAPxqXMJAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38vi9unppy6TnVYJkRZUQGh68Svzg1GdMTPjvPNrsoriZ7sSaWWe9zpaQrw6emjxd3JRrmb1beXMGxotDon4rKPi",
  "key1": "4giRAaiRgL2iHv53ZiBiGHLbNsEPQPatrjD2DsK4TTtmRcpHk71TKPf6s7dak2bQXCBtqEit5auCiHPUG886b5U1",
  "key2": "5PFQe8b47gwepVbRqa3GGs6XtagtD5Bb9f2NC4Ri9mv1uhYGEHU3sqb7pPdAiVYjysQMCc4sSoWaSQZQjYkNmceC",
  "key3": "469i4cFMidHsWSviP79mrK8Pu2ypVxmFWARRSryBcBtoWjBoJbGWVzmHbciJnFuHgdDV7YsFx1hCo9WJS3p4D8Xg",
  "key4": "2hraKWdbJkH97De9QdASr6rpMd3D73vfePoQ77BprQJJut9PdTauu4Y3jKYbE6tVr66qdeYNyRGhRfi9gjWg4ZzL",
  "key5": "3SR93M426g8yn3LH2jhsiMmwi2czrkfiPUMNWQEuJjTj7CbeEuRZiqMAsCT7kc5j6AciuoDCqH8y4UjuJkc4R6oQ",
  "key6": "3ngaiHNtZeMoZATGeEA28XFy1fi4CanMJRhozZ7rnpPc8HhmMSu9CX2FxuinescTeGTx6USE7zLqVw672XFdcetR",
  "key7": "4Vij3621dKYWgPKUetWUjLve5BRhB1gzLu7APb7Wu2T1JAE7oWDnjfuxKPSCjRgdRiUgvj5xFCMu31BQm6GXLb8w",
  "key8": "vnDmmJnnsERu9BEwEKcq9Xxb7nTDPvjsRTs52M39qwK6hU6nDmUfBv1rh1pfRuPWobEQFcAkkYKRYh1SsYYVMUg",
  "key9": "2T95JKfhEVdtxQtkHEivHnRHrGKb11ARRjJYTZSeAywNk5jd7w7f6VAXAomBrTe4cJGJ226vjpD2Ja3yH12oQ8mU",
  "key10": "5cKen4A2kFPNb18Mk2ou3KHMVyAJ4BNELezhYUZD59G7awKuqKqR9q5sghAKnVFSqCo1gU4SEYfCLiAsVLKbntkr",
  "key11": "5YWzZjjsqdVwSczVTzHfRSArmBLfVWph6MYXtVm3M8Rcjw2b171KJKBiakHq15JTacyZBrjhAp4zPFruaRrLNjEU",
  "key12": "5u72d3iT6zaUTQjcSN2pK4c4SAFPutkb9KMLYg2D9WfzqG7QgboEAVdCckfzRyyUfNpJFhgS1r1XxAPQRvSBkdpX",
  "key13": "4anw2nhqExw9zKBnp4gL4x1WPev54ajg8mrr155KpC5kb6NY9xTQrNKu6NWRp6Qb8qgQyV1dWshxyXXUe1cM2bEm",
  "key14": "4QNBiwrnMkRs6BcCjYxWLkqht79HJxaTvxFjASACo9nrY1JkJK3Hc1WKbkEWKd9sG3XPaMoMno5G5H7rByS3hz2X",
  "key15": "3EoGSejTkaDXDNfRkXs7R2XZ6ErYV9TF7jbwLizhdRaAqtNDHjR4cpPHQ8vvFw65TYcS9UBSBdpDWyn1SEoUfXM8",
  "key16": "5yEyLY935ySeVZTbTkdXnS91pWqoBpPx5uhoeZLDjDvBgcJpMe2ZFy354a3G3gNKATT6zMzvfpS1q3ZRVPWrkEna",
  "key17": "3oy9mfVTAXbWJ8tGv61eq5C3xePc7heXXmCor2rvyhiRkZYrhMfHdFgUuvqAy14uMpA7mD5kMQm1MV1GoxVQC8YX",
  "key18": "2FTv6cAtrsJkTjcYUVBn5jDj17aMPQYVuhJrzyeNdKhySHeAbhfzJhtEGwCkDGVZTXdyYQJkn3NYRDpDNJBhxULw",
  "key19": "4XnH9YtTDPu6Ysy6cGqQXmiNHkk5ctRY4WRmy6bGioL8xLhDaNLGnwFGa8a5rXxcfaa8nc6fzsHJetyW8DVs9eZY",
  "key20": "DqLCQzrRKFaMfbH7GrRfVKBzma1hgW2N5k1zSizB2ZrJPzq499YvU36yxkNP1ULVak7ypLHtcMRrm2d1VCctJ9d",
  "key21": "3rWjPfcZs9bbXb2F2USLNmzaxeTvFmmmMGKJkg2rxqgaayHUuwgEyDMVEo67S6r631B3GbNHxDYS28Rv4dZnSAyj",
  "key22": "4nGGJvBGT3LSRXG4AvVYYqXLpamTGuXMpmL498Ftskop5eJo4rmbi3crfJKtFHofeLK8wiEGXDnXpREsvZNrWwdr",
  "key23": "5LccjAaFvojVf7H2s1x9MQLaxzseVrxHNBCkbT85STc6mt7mv5RoWq2Fjr8Axp1GV7Wv2bYqWUfYHcbeR1ZFzDmc",
  "key24": "4RorLyDFGVr1B48yrFk4mkq7MWvBQkdx1qSMcF3JL28UrgUSUZ13Hjdhss36dMrNCx2VbtQNPZCdTZHBrJ3AdtNE",
  "key25": "3yaW2fGvZhLwyX4D35ctWpHouocw9kibBnW4Wb8BSHA12Ui1FYg7BETZSAb9F1j8V6TYNawDTFissjAs6mGQ9PcW",
  "key26": "5a2Xej23KGtxnbuuiXc1FsiLfh4V3RgzPzGHKQCZyAmYXs5Ljds3KppJUX8utwhwc6VEXfbHWUeTSYey9Bh1EdQC",
  "key27": "JA4NV9KKntjR9prT1QuhyURFUrCDtin7BuEZA4vTb8WkpKBRP6DCcdTgwAgr3L3kBKfr2AsUUuNtyoFjuHFhbtS",
  "key28": "5JpFhmrjwyNf8mMRh2PKj9c1t2gFwK3ob5VFHRgtd2nRwrP9qgyVCvYyCjZG9XL81ySV6oQdXFawMKwLPG4ymsTR",
  "key29": "5Y4Noj3ByDJRuKmoC3ceCZC2T9k2Hvj3uRQyyo4vgR6ywM7LEqWacFoWGaPyBigRLPAC4xhVSr1GL58wsvaT2UUn",
  "key30": "2rSHQC9ituSJTRjGQaQfGL3uJiXMi6FvheJpLWH5hiB7kGhV2NBzejfvqXGKUavoiQXrojZDSmyoHDZrhDSGbUpg",
  "key31": "4XgqNc6CwkaKF2ogTXsAYCHRouXkvs4nh4XNHhAupGeauFRoa9AMtzWRn2YpwkkDX7aH22bbR8oqNEFaWBy9ETdL",
  "key32": "5iEasdetFcrGUP4Z7c924mksjTiy5J12KngpJPAJ3u9h5cNqw5RB9o9jrTAjkRtiSJAWxqTujaMpzzzUeEP4iw7Q",
  "key33": "5tjnCUxaxt5Vp9NgbY6GHYUNdX59pDGyqH4FnddpyZAisAXyVzygnYV4V57ncdqzQ3MHbL61UBMCqTiP99kMjxvc",
  "key34": "246K3FYdXPvvt6v1bGqAy8BuCaG6wRSaCueKwHDgEjuizyNB3xMqTDRAKZie2WRkar6QFRD3xD1aAsfPhzeWRoBF",
  "key35": "4gBoXMwxuLdycpspNrmqZKNrTWETArPicebWo598SCniLdehe8DzycxpNcWB8oyL3TpmKABp2cAG8pG8w8FMAc3k",
  "key36": "3eqVucXaH5P1JmWB1ym1jqdQyYWpgmkFvKbMTvm6MyoHfTcDsTpbH6cP9ugSL3tckh4K7j4Aix1PXKUBherodVjk",
  "key37": "4D9tE4rLEGnEjjSqnF2UP4yBUkrPffhVHtu8U9uURW3xWz4UnAhDdwZY7bqNCkTXJRCTywvvMrfv4XUhamefRrmM",
  "key38": "2WYyMSuhpGf9bUFgTcbCf6dHNmu1nkR6Z2TcdyXKdXisoM8UKn9jMbYxMpa6dDvX1DfQNazamkm5ScAxkp73KENU",
  "key39": "53QbLJRdAGREmiVGyrRqyNcsCevh8rjGD95DLxsoWsvoRJ7XV8VLpwY78Bi7NvkuaGC2icj8gFn3PtWDPkHXQCdM",
  "key40": "QUwGy1uuwp7Kkc6MMowFnFrZUWeYBvDtnSrNBVPiLRvMmUGtLjt3gfkcAg6Kaid6vkbTxaDSmq3wnbj9wZWE1u8",
  "key41": "zqXqCF6ae3gVgnEWgnHohFRiqTAr5HHzJFfqkiditvZwccbVjpxf8f5FwNF7f2hwZtgZtypsumGzyMkY59WnrMS",
  "key42": "2buWrmWULFmuMvfXrbvriu9XoDBgEfXztHFDC39W1ANwD6dqvQhHPxgSDB2qBATRjkGWkgyNRVD2Hjoos1HFqX15",
  "key43": "5hnkJrDGHpj1iSKGw7jXztVMXd5QP51JSxgo48oaWLqyJauVVPq64txnDApXYR17vHMCbyJybS4DPxRFioiEsiWf",
  "key44": "2rUro2uAH9jb2FpsVnYWM3fBWQV1id5Pf5SJcnwDxDNLVCKbb4Ut1M2RRgdUH77VGEAoj4fM1t6NFEkg2vvtGMeX",
  "key45": "2KEcTRX6Cb8LxLS4aWrJ2qTBCTxc92iQpp9JaXGxD7xos4QJasBXQFLC1Xt9M6fR2wjENzcQvvCRPUSQLZ8YGfDP"
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
