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
    "23QCyPqm7WjHzdF2qoWjWjUat8CNXeQaCensMRXgkMaYUbm4BbEhLKvKFCCpiDhP2MbUMZ95UeGgWi3dxrZfSHbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vfiye3ULefUZVGjp1CfNGf7Zv4bwhySy2AT6odarQYfVNHhoYd8puSc4VeprWjSDwwiiHk1ZU5MWDt3MtCwuyh3",
  "key1": "2j6KCrf8amVbALFr59p6q3YBn1n9BLiFBhucrCFvusbPHfe9XtsupgZMPQtLKT47hQyxjjhJpxsycyv8if8K6Jte",
  "key2": "EJabqv6hwhMDSESBqXpXAF2gnC28e5LhfCsiTPRsDdcoEEZ8DR85zyyY6Nq1vaY2j3EGBmTm9HofBH6t72azvg9",
  "key3": "4WdUkunanNPGQvSpgrfUFogzbHoeV7GWFNPkZmuDYpcv2gXJCKttqtLhYeRBXkkQN7dg8zNGGxwDJj1eEtP3ayz9",
  "key4": "2RBrjwHb9FJiXUn77uMPLSeSDRh8kb8YpRagufJKSahAEPdintnysgEtgWQYCBkb9nGtHXEc9DBfvqyTZGDcoBYc",
  "key5": "CGPSqEQphrrLT9iwgCBG71soQkHXXDJVjM3djVBt2sJMh3nXi1RGMBB2k26ybwzoZ7xK2XhcQ2MJPDBd6yFGN5X",
  "key6": "4HhY4DxKMTbWnAcU7j8vqbVG5JVTQc3HoSSEeSV2rhSy9WJ9s7QsstSpaZVzCbTBVis8gJESiGi7HPS5LKBxmLZd",
  "key7": "5MxjRCoMJcKmo8UoTymohSpHNVsk23NbHKSsRpXfueJig1NpnX299TpCL7CCtqBy5juwvPaXvpeWigLNdefe4L4h",
  "key8": "5gfqi5y16Y67RbNxB5i72WW5ZNcaXvc9VEihg7vBJPoV6a7wsnfSVxJs6ziVNZ5v5FAVpPDUa2CkxvCpS3iWegqx",
  "key9": "3oY6ET7wsvnPUQ7mF1hVHo7x85pJwkMtbmzJRLkrQi3WyVoyxw2FgZzHQUAKVBi75z4K3QZGN86vYTMEbACR8tDs",
  "key10": "5g4Gke8xfsf7XCciuu1oEqekqfhWzjAeK7PvkEbduJYduxLQ2t8TXspjLuBAnF5XqTxUk3KRHBQdT5dYZhHhFAnb",
  "key11": "2m98u61SZxB3LVsRtVNEc7nJh2JkDer7kLcJeqksrW7JjzvCKrUgpNniudf9a65k9YmUxnkxo7KUNBaWo2Un6LpH",
  "key12": "3oE23FqAfLEq6wE652Pifz693dTtJBkf6z3Vfpw3CUEhZoZ9XyarzCDdiPaASPUKaYrf4udcwcYxHXfc3c3A4XfT",
  "key13": "2d6f3sEimnmTgGjuJMzjmddhQh9PrXPYFh7BPfgcT8QuJpXLAaMCFQPnKGPFTstrPTDRLoiF3Q5VXMihcbgGErMe",
  "key14": "58F8n7x77B9jznRnEYAAae3QPVydW1VBud5DPfdN7Gn6aALW1GX6SUiJyfdHMx8sckjYmASBUcL8om56GBxdTTdW",
  "key15": "5WqoSTwq3tQzzULpFqcMguD6Y1F7K5QwAKfo2NSr6EZBFnY6MEwHK6wWF8AUYCBE5svXUxBsjpEhiTHUhY4ksp5F",
  "key16": "2rSC8zhkfmneFp1TtX6pnRFmiPSVNyP23MhuoN9AboFPB9DkNpWNFN5hVW4qzTYKRpohUru1xK5b7T4V8q8skM53",
  "key17": "4iqPUzAHG3Xw8ekhM92ysX8GXRqniaMWZrZ8Gv98df3PexTHDYE75bj1wrWGB22io2yd5v1Gp2XdLQtwAdtgH5FP",
  "key18": "21ARjBpQg9bqoJh28gXVjg489xMkdhp4HvvB2y2XxGbx5JBiWdXuhZZ3yGhepfuEiMYwcVVCcktQy2PyEa1ViqLb",
  "key19": "3dS1NK2EJhrYyNEActHumvYaCnRq9FcCEASHnQimHvL3t7hLgwGtnsW8ex9FzDA8FaqGoiPeVuthYvyDF7ggrjm8",
  "key20": "3KJ7xJVjbWE8VZhWseyehnv5bw8uAsJGvLYwYwCaUUrpxhaThi7pzeH3T2NgkR21K8gGtBFBGP7PyqrUyR4Pd3dp",
  "key21": "bnxxV7CvezAeRFbeUVJXFMoZGLzPPkECiWFWsaeifa5QxZ6p6rPZGCYKyYNFMU4LT1D3NLFd1DVzbTUzd3x2RdD",
  "key22": "sjd9iT4HtxfQ7hUX95JKhL8HQqNtV3nw2EDWcr2dcoHJUN7sK7Lawwy5PMRSosj8Et6DYJ1KinC6CyZRkh89YmN",
  "key23": "vcUXa59rENjCypVQp5e5XFTxtitpxBQty5aiCR8LjPUKBxqFRh8qRktD5PBQByFFgWSau9xUYM8csGDcLBtzEg2",
  "key24": "3LNrBkRvnmRYkgF5XkwXdZSGSKqaE4LKr1MxUTg92JHzsADo8V5d2ptgzduXEEJFnwss3kNmTrEYPVh9BV3DPSeh",
  "key25": "5am9tDsWPNSJhvgRAYmAwBzUYWHRzMdnVaAcPXAz6AGCHAbdvVMMpHmLAsL3krG3EMat6hyU8n6masJUbifrk5QE",
  "key26": "EX4AbwpPAq4fzYqsgiFjeNYj1T61qBgnD2XRAUhi1rcNNdJJPhWwMszmzyLKtCwF95nxMXzK7yNjJopS1Lq7WZ8",
  "key27": "3chY96aKCBfH5b4zhBHx9Y1j2oMJYuDrMdRXLsVu8L9SxMv6tmUMeETwHUdRJG7b7PwYZYqLaTvrFh4vfhDHjMe6",
  "key28": "5GfQy7TmhEu5NZRUC6orFXGoyGwqD4xXHAE5QayfTkBrRTJhmXLnB31S2qzejFyhxgbzbeCZqBuVDxGKZ6utaeCi",
  "key29": "5c3gH9i9UDbAzRSSCBUickuuNWEPFDoPk8aDKB9hzjDQB4dMzXhZZwognvKbXZfZSrVoVtV3VS2TF3PXwrX6JekK",
  "key30": "5681XBLT1zdG9trK1bz17qFGSbAdpj3mp6LCjmfbkx1uzrrikGNPCijUMK44o8PS4hy5iuLPfikBtzL9E91jrTny",
  "key31": "pbmGPw822SJDs97evuuUvtwnCwDARiEzbFNohscqVBokvzXKLCThmxNnMqqvx5amzqW68k1iLK4rqAyBKFWUBAX",
  "key32": "475eJg1n5Mci5E9pSR3dzCKhJRFrESewrUHV8xpEvMbVBss6h1S6TWgLjzDYzTKqiViXEszJYH62RUibp2RiSV4o"
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
