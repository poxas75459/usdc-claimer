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
    "v58XJ7fLeLxaq8nPuisxqwhebNSsM3a1uHjSn61y9K3DvfNizM6McDdoTboKUDhZNscVrhbhnC3Dpxh2oT2TQcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RatGyqnspNGzoGsUXHaLoqSBXjJiD1fG3bgGWtfqzGBLYETPgZD1fVXmN6uJAKGTe7AaHmMPjU6KDeLJnx1AQwG",
  "key1": "3stEUHp7AEMT3KrEik6CHb3v1mNxokomVAd1SjJ96R4cZX5hiLkXsjZtCgE4KaHq2EbkcuwDuZDAR4duzgFBDw1Q",
  "key2": "5xg1cFgUCVeeBUxLgV2GbgXHn5PtfKeHh4u2NQRT7SnYVsGLdxzvLN5TUVnbbeKnvUK8vQQcjUGsXKGGZjEZwzkc",
  "key3": "5yNMXdNMzmoHDrPy5MSpHqE9bbauMr5rEiUNp7qZ328Um5AUEnM9guQizFT9FQxvLkRw31GXcTGvSRaV2zU1H8xk",
  "key4": "2JcpnLF7hFBpi7hshi9KsmDg96bEmkQyVUmLPEfDY7bTKVEn1QF7pfhWsN2WQtt1n8jXmDLvD68T2C7hFQSWA5jP",
  "key5": "5xz16FnvsuqpG18At5bSroKwVJeSEjnoUEEMCWz6LoE1uy7T7fkK4AVsJCrd65aceTj9jLBSPcXEBi7EatDJRdqy",
  "key6": "2edke7Y9pDHUHN3pnbHLPGqZ4REV2QEtgB7NDDFU82rKTHVXQbL8kFGcmKTmvJ47V2UnNJujkZURDghJwdYWK1iy",
  "key7": "5Yw9FuiZjqkK6pJiGz2quVfjo1jNXrcXLKSJ1XyGNMHn6UU9EqnS7FDG5MH4iqSYFsrPZX2KoKJoyguRpx8qLvzs",
  "key8": "39xjZVD6i726oGNPc91xKCwcthD2rEfu7jcACGobqGXob8KPcCWNVsWtJFnL1LHtkn5CWDFjsgPLhzz99JakZuDs",
  "key9": "3koKKH2hgjq2PGDxiHw8t12gsCJAexRpDmoYn48NCDrH5FFYbX7fKV4TGjvY4ZVLUNYrpYs1jXyQbyHU9peJupRx",
  "key10": "2RPuafGLBjND4XoGE7yrfjXJi8B4cViQxjWLWeesLg71VvyfsK2gA6YPty8mAPyqs8YpncBtW6AdmqHQjrSX9Bak",
  "key11": "3QYCVVK1MqHMDyiGze34W1sYG5cuf55DMZzNWUA1o1anBmELou9aPKXqZ1rp2hdP4XXQmhNg2Ft6bsaTFJtPx9Ly",
  "key12": "36uJp8EiWmh3xpTAM6eGCaAcUTFYwQMNNdjPwbnFxRyUC3RS5ewETFXfZcijQRRHATmCkbEn3S3gWdiZSH6sR1ZV",
  "key13": "4c95VYPksoyuFjW4hNz41akChRFzXoAjtyBBjWFfStHRtLKQUiWD3CbqiuaHCFaBEP2oicQ93RsNtceuUPEbt7JN",
  "key14": "2gQGvJ9wYj623aZ6hTM67zE6dK6HtmQNGMx7jzuMF9KcX8Ur3BLrueqQ5X6RpxSoCMYSkW1pBAEraLnWbSomJXoA",
  "key15": "21cU4kTe9hnzGvy3JZyb3wHrr2fNcCsmUnu81ewdno2PCT1j8dLDymLZf3ZbskUb6iUaEJztJsuc4sBP1kzZknKm",
  "key16": "4KsQ4FPg7L9t4rLcUdEYkWNMpgMZxqYEYd3KxVB5so8VUqYvjkpVPMsPz6NtwnEX3c3R6HUbMCJeAEKKnigkziWH",
  "key17": "5J8eA2LJMsufy2E3Bfi8Q1r75iQn1Ji93KAmxEQwq5tNKmKkTa3NFi8v3KxEX62DBcMu2Dbi5pdQgkzBwnSyqvTu",
  "key18": "51cFwnnCw3JH6ksnTdcCerp4KTdEuoRzudt6qVqkJsUZf2RCLnPLBHiMSt1mnxoaKGPd7f7Syzy9zceXF5G8BqRi",
  "key19": "4BphBnGnrKZPH2ekwwurjUeAJr5vVz1orCz7j99QxTd38GjHNEuwA9eVdTrVHegWNBkr6YR3qW5RQAR6ciyqvD6v",
  "key20": "49NUdbL5yhM5swa1jb5tZJM8NoLrG3Hfc2P11ZHLC5o6dSVMfwLd2d1zCEAoqPtabTQz9kMb2EUyfaegs2xQgX9W",
  "key21": "3d2np7KJ3nq6mMog1P7ig4S88MgRdvpLBCxjUVFtPZVDa8EMWZKmoUXj31kCbDSTQU8JuHRvDsmaiQ8jJbL4J8CW",
  "key22": "5GpFhg5mPxtnESjr1AueYRuWjh7WX3v4S6ghp9Vf9dM1BkQorLncSXzR5QpaNUrVBPSeTGhdDH2mxU5icMEfxTop",
  "key23": "5qQW9xmRWHdpn1psBCsNDfy1caM77t2HYzjk2Mnu5kfQMrHBiynBrmujPpAW5v85PCZdotYYE27JQyWPsZE2goMG",
  "key24": "tPugvhhoY562JTNR4xDHgpYH1dZ4yxX2FtmHssy6FyeYYHNHe49Yv3CVARvTo3DPqFXzye7RVDQWF7sVE4qQGMQ"
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
