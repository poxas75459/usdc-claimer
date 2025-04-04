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
    "2reXXBWndok2FXyEJEStQje13n1BncCq3obJFq9MjnxjPvHX21kWCMbQ1MM3md7SJVMMZaLK2GFn7FfETvsw3k9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66wV96Lerp5zaJiqawjwBjHs65GgJiVE9zif5cZHgRKPhSGQCbFaBdDm8xwtCeCsZxFcGGayzHzErid2QfHRxrJo",
  "key1": "28ccUiT1v7qDJZqWmbnTDDWZoPXcc9UHoQAnVBQnSL6AQ8VM62KKcZkvubJi1aqemikKXv7kmPTUQw7YeF89HAuU",
  "key2": "5bCHzn6bAhdcrafPa5DQYWjyJnwosHt5hHBCKqCJKTJ6kcrg9Z6JUb1VqX5wBmEW5i3Nzi6LDkGmkgVNSNbL7WAK",
  "key3": "35dnYB531jBYCGVWkocAFdEX43xKQkeg9DnGufk8S1H3qGmaWWGgugRtTX8Tcwb21ezC5TtePjtr6t6jSfU1nycT",
  "key4": "K4xgkj1JusmdLBda2nTzHdawEmx6rjqUoJmYZATN5zSvqQzWG2yaXzZvGcACyojBDrzVY4PnTcqV8uDG28L7ugf",
  "key5": "4n5nbgDLZivi3iMCUithqUiLyeUem5TB3xmHDMw1XDdFDUshVAbJZp9cmfpE7aBKUdpp94Jok4QwCSY1gvgSyY8W",
  "key6": "5YgD3yrmLAYd4qBkBiBXbuurty6zuWXVXiMkKTfnHoce2RjAZG7tVMAsbZ6j5sdac95ciF8BTFyKyK4TruJxk49d",
  "key7": "3iyW2MvFRQJWQPLQQ8Lo6AWuuxzA4ypkFFH8gkpuUPy5QWWbWg2MkRkJqWv1FXYjwwmAfmtAfS3C2ZQdpRwr2riQ",
  "key8": "4wXYMFnyzaxT6HzvNFDSMFs9YRvbom5rhd2xcoaG2oUXhKzAVCKbgBGZ6CZy8ZZWcdeQvmu1tu7wpRQKWe1nzE2k",
  "key9": "2Q3A917JQtceL9ByjxSZCztCdjXpyKG3mS9uq4SBk8ydvLJdECfery4Rt7wPVaGgmSYoQZTomFec8Vgb987DrG5h",
  "key10": "h2jrYUKBVV5zE7PjYrpZMnwtLKHjqntHgfxGDT3msshCrjzRHKPrFnLbBzpHqbBHCZa7siWs2QZywtrxy8CZwDB",
  "key11": "3idaVedjpE7voYGxnrqguo3AMjpx28bgXtHGnggXWRNG6uAgHT1pu4hJ4vPbJ57YVzk5cynAMjsqj2DeWcQe9tPV",
  "key12": "51roiB2qEwdfxJ8m7amAY92tm6z3GK6kbHPL57Q1pT6AV9qkhXwoNeF9S5ST829EYj7jc7FgdYMgZP5sxqorsLgD",
  "key13": "5swujNb4TqaTiXJa11YsEyLasyCGFjMKcGjcbEAF93iVd6CLJgq8UmE6BqHRGw6tBfWSYDddE9sTWe93UgRtCWh6",
  "key14": "BVoJHhbhqQNhJMTfcbftsXnz36XSYN58bA4mjRVvmnDjySiMouLGUV2WUzDq4jj6rwurP79fbUpztrgrr6SrFoK",
  "key15": "2VseCaV5fhqekP17YKVzrwrigMQD7StJuMxrMEaT2zXsqZQgJXjhgi7BFDXDZ55xPGT6MfL2zL5PL8zNb7dQAVgr",
  "key16": "y3YJqeJNJby4Yieoh68eLfmGybw7uzXtpDsbobAGwNVJPey8Htp9i57FAGsigxWm6KLtAthzh86UkfD5eDpHZ8U",
  "key17": "5mVpkeAM24QxnNp886n5z7xRcqRGvKHArXnDNFksbhDN935u9PMX88LJnYtxuBsky6hpLMCfUSBynwQRE7G5pwU3",
  "key18": "MfqExywFAbvbnjecQ2UQwEJykbgDPgkmAMNkivTHFETSACp4GRNSCEmXNAjq8qdx69JPeFmef7ZPCrBFrooPLLY",
  "key19": "vziE8h3BVKy4h12WTAL9Wzqu5qMBu23mqrbnHvTRRgPFSuz2i1BVXQed9TSv2y8hFG4PototwTMj7HVxzjvEZAj",
  "key20": "3xM3R9sPpEL5kaMwBj5vXuRZCVpQkwoZM7zuZYPgXVJMKgJRb89ew8RB4B4juEp3PCzkb6D7YKdjy9iZaT5SW42m",
  "key21": "aqUKhPM8BxY1mDA4HM7WgKRZCq5hoUpP7yQqT4jKcKrhUY8jT3Q6g2uathSiTM3wQWc9tpNvtNNAoK9NmJNrmWZ",
  "key22": "2auzDJAA6WdabALuQwbXt4TqTuRp2Hfoqntte6297W1u31jbvSdYsmeX8QebFPKLHRh9eBjYY4ni19xjkLhYLJ6f",
  "key23": "46PGmJjcv7DSZZM7ZR6cvkZYsrzzmdrPFtiYfnYtXFuLdRkX29dLWCDbJKh6jpwmSztMuXzVHsMcZP8cxq7QAdkM",
  "key24": "64vN56nmSFYQUNpZgkDjRf315UjbWuL7asLPNvj2w3hHwfUYHF8wodqYqX6kdynT3cESVTpFJti8GVpGrHNhnWnz",
  "key25": "4T7dWyDEHCQFQdFcD7KT6BYPoaFEpayPBw7bXJpF21kfb75ZFazhx4SapgHsbkRwQXLQUA5rATAfNvgBU5zeS4sg"
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
