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
    "3CQsTiWiNMyshMtdGZDxgehGMmvnPXvXzu3aAEgARV9iz9wy9SinjHUQMNjEaRDbdF47AbvM6jQiD6yUfBNL4vTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XkxSkUo1j1R8hkmYTdket9zXWDtz488Ytavf3mEwGzsT88WJ1TxR6KGETWM8zYiNeu9VNeiaDnhsZutrZcDuduS",
  "key1": "4HQyGP3CruGVFfEZSBqU1RLXW1UyS1i6BNMrzfsyGzF3TgB32ydL5mAoAy4izAPFFXFftWQajuQR3Vff4CvvBZDG",
  "key2": "653WnpM95DUmrGzyxSDJBkfKdFzttySLBRSWPQ1ifbq3RaVa7Tfr4m3ab4WXWBqpwTshPGrt2sXB2WxtWeQHjVMz",
  "key3": "2EN9bf2wSXHPpWcNoMUsxBkAux2baKLd9dzPK7e9WjMDoAeffHFwQXc1HUTiGnM2vHjYggNGg4qdUVJHbV35YxVB",
  "key4": "2UitsReX9U3w5FC4vg97ZBvt3UvdGGVTKeMDCP8K4NEDeqQndoK8jjtHW79AVrDPAsaRr4GWjCCzBff1J7LLYyDH",
  "key5": "3voGQdnKFeF9p2Vk2b2u2Gp2o248oTmf3GJeTFhQ5TcP8bZnNgRagPXnTMtVNDyiNXvcPQWbCwEBoWxCy7i42sdD",
  "key6": "4v3GSoFvXYv7G9JwL1cW9YvmnGLTV7MrtYYdPpsrPg8Zce7PgTU8J32gTpbAoPBw7uctKAcHB33j1tcc62vafRFg",
  "key7": "31eBMj5Ga7Ak6bTra15YTFbSetRMpnQkodXfsoUxHJVPCb6d8FeV6qURbu9a3grrJRyYVzTpG3RoQXWdYAHF7WQq",
  "key8": "7T4bbpcRHvnoKFoREM8Y6deutTSVTUeRuZ9tgRyARDBCGVGDnz17pLukski9qVs3MwAESyri3T4cgTvUYWbzWAj",
  "key9": "4dze8ascjwe2NZqW3xZYU11z4PXL9MtkqNxf6w13UFRZU7gxbi2w8jqe1QbrA1sqahJjihJPZmiencok4gn6Ep8z",
  "key10": "zJD9YQLhf8kHjAM8PiQfEX3sQ6vbo9LAXzUC4XCmH1uEZYH7AqStywqpvbhmYFRmDrddYcG72dzJxK35h5xpLp7",
  "key11": "3inuJWZV67eqRDxCWkgSKa5mCgWxehwV2HPfDppbF2HddXwRHnS8oEgo8ZvYQMiJt5PfJDUQ25ohg9C8KGkobW7V",
  "key12": "4a4m4KcLMMZqFEgvP4ZLgE2GW2fdpNtcNYHyx5fNmGYJvtFAX2bCV7bTwopN5DMuA7nGQppkNYL9Xi9i34fupjkf",
  "key13": "iRiBHjhJUz2HiEcY1ZFhM14vKh3PqzYjQpA1dJNwiw7y2ibXHwLUaHdSPnTnXNXBw1JSGitrNteZETd5gcAFsvy",
  "key14": "2NTCuaBKFGgv2SYxbC5VdcVN86VWUXmHPqQhyEx9QKHc1KYVSpkqnoRCpGa7KHjvCw7gqKpGUjvqmGXYVyq3fxR9",
  "key15": "4Z1ACTtHteENCEMG4tLK3BipgB322jqU5YEyyyQQZ6G9zbFnNLC3WrpjTu8MgvJYCgSiNKHLmjvnkTKW6RM6H7NB",
  "key16": "3nwjs8WLGAe58tJ5JzCP6fzz18vry9qKERxpxDcpFg7wd5ECabBxhYAtHesfo5qk6yMMeiU4wjjdwQrLhXCLd8GB",
  "key17": "S9UF8UDmvNuTM4awECKE4n2w87TdwChvEWPgWYKLGcbbg1CZiyTndDzTWYdbuV2dqFvxHgMKhuZFzpMUjnyubSU",
  "key18": "qQfMVSSuFNvRYHHvQcYPRvt2cgRkg6mUfEsfxKjQTKHRNdW8q6wggkny2JTnZPikgz44dZGeCkcetWTMxFVqWQt",
  "key19": "CvuyRW2jCcLfe8szagssa2qYsiBYHnWJ8i23nGEJt8JN7sdoK3yEshtbaj4o17HxTdWauAj8U5xeURdm3P9meYF",
  "key20": "2FWzCJTMGCuUPxzkZUQVjbR6eanyXMfauhjPP8gofshhHAe88i7hBfvgidRwLx35mUKncNhjMxDKPpYT16z9kQUZ",
  "key21": "4bETdhHFhcevotEc5AzgLTrN2T6BuaXJVgfg29KasXR6WSuKKyPeX78KDB4FHxHkCBf6aaQ8JxBeQYVJxW9dnbz8",
  "key22": "2XPiy1hrMbRJFMAyHQtK27EZxxifuwQ85reoSEXv6dXVoVwoEH63nDhFtfnn4VfuWUc49PmawHnK32h3En1fzJQ6",
  "key23": "64Vg56DZWtohrR1WxS9UCa83SvN3U5WCqpnHjkTb1UJYfYRyKum5imUHu2iJQEveRFAo38WjkjKeaANroJYoRuYX",
  "key24": "3qiHr325BzXKwaNsTphwHttGehxr4DiCeocQgBaxZt6vZTFmFLCiBctvMyNvzYqPbrXx5iYbfvxc7QmYVeh9ggw1",
  "key25": "2iRzJHt6VwhHiFXdx7hW5ACBwPCqj7vvEns55UXxJjaLrkkcrJrxhTeYxjYzTd4dLesvnmS9fm6iexmn8vBUHP4L",
  "key26": "fkZaHKiBDSHGUjLssvi99Nkt7Zbq4m1xjifuuuddx4HWDvFsiSkxmUGq1713dbgxUweMzFYeAMiZfm2wxFCKawV",
  "key27": "65HAbkTfiKrXR8jidxPqTYqPjmuyb91ierfMdugSTdY5k5KSm2pcb62FHfkbZXUSnPiX3LrzxayvwQvgW6hVViRF",
  "key28": "5kP4vciFUAe7Df7nAU1Pc9xRBwapUPHcHkJ96pJfsMXfHJcKk7DjTFhyGcWq96PrjS6NBBjj1mC6uoDkkCucym25",
  "key29": "4vjBcKT87aN4aqE8gtJipk84n8F7prEZ984tuezpCWmyLgKefNwVpPYvWAoBQfc9ZLYUiN8LfxBcE8h34Ap42KEa",
  "key30": "3NwWkQ88VCmaaWygEwnYnCkymPb5xcoZbqQaMBVuHpL79xmT8fuC2LZHmdmZgUKjNrYXxmnEbTJ2bCgmpJa7XrKX",
  "key31": "Ho68vghBwpVWiWc9ces5pBV8j73c299UExkFQmr6x5uFEaW7Nu5taJMkAyjmdfB7Whhs1y3sCQZzpdMjv8Lt7WV",
  "key32": "3otvsXDBcoSroXPUjJxzZcME3t4gDEWgyzwYer8CkCvj2acLyTFysyvRkqM8HamcEZRhRuEyG9njb7GvTnG1V6eA",
  "key33": "3wb1qNVh5EbA4YibfgTXctAfU7fzMbrBREgBT1cjU2eNupqTDzSh9PfQvNqDSdcyLHk83zpn8vSCgrFJBmNJJAwB",
  "key34": "5bZDxhCLPNr4x9a2LCXLU4rt9NGzxuZKTFPhqjX6Cr9XHS45Ck78cQNTbNsbLg7RfiuYyTEfNGvhjuRbY9CfxBuU",
  "key35": "mRXMVR7qExcw5mN2EskTtz7j5uk2XA6bFGRh7uSSaBHir6yCEFxXymaBgRMYVWRh1GT8MqMty9fP2W9JbZofpDr",
  "key36": "cYCnZcLZxSqVCt5CDMetTVDR9fxs61AMKuSeshk6zN49RzR1DEAc1TzF7MVTbdhjsn4oKMZ2ocf8nkhgn7eaotZ",
  "key37": "27QLLnQpSXyPJGUBKbxNHEyBiJtjrh3yQXhjW4wFBhnFHJU7A7jZnuWekmxsjXgVMMgoZVasoxDHPFjy1Ntq5Zi2"
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
