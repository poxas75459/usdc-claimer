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
    "9KomCneAhTRfjN9BJojWJKcbJfwCWA89xG631eQcLoKPxWoex4TNrBDg6j4mTsjq7TEmwC9UZeY5WmLuz9FZYQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1VNgNRAse58RTQZzVKEZpKLwixP482WtaXgmT2gbdfnurpXGjYgcZnuzoT9zFo5LvYFYgsJ88EUhY1LvCNCqSy",
  "key1": "54P2EgXKYeZrK6C6zERaBFJs14iL53BNUu2tUhgd6QMhjv6odoWKJPTV4HmxG2fFWL6VRpHHFb7UTzHgRaUCbhop",
  "key2": "3zh3Y1B7xrVcYPwaKTjTeXAZqaUYB8nRbJvvGyVZHbA13nkSsuJB3cB4kF7D9MrkcmL1PZHF65AXtfw3CsNYG453",
  "key3": "5gpS6drdgtGnbCZXyHGUj4ouFBqtA88sDqsyvgXNfccnVMGtd3af7BX5J1qePddt7L79k1TgtW2R3sVv67ZyHhF7",
  "key4": "2SZqPStPC8z4A5DUDY6SoApjeAfQTtrTGZVWiiqehmzTXseNNZJiGceaz3FgRFumJkFuVfVinzFCzQSMyx86GEaN",
  "key5": "52pLGsXbkcGppAZkVM2sGujty8cRzs32qJyNfsjN4FdLrEWXF28W64eiUWS1uVLDD4c5Wkz3w6nFxmMbdhtssH9F",
  "key6": "2FWTCrXoijCgTdcL1HyykcNQG8ZwBi5b5i3WGJ17YEYXiG3MB25kYSoFwzsMiLoBhWbJwiwSNocmWXUkF8Dfc4Jq",
  "key7": "4affyEvmnSC4hYCi8SyBZExUDe5iwb3AAq6YiSgd8dwe789jhb1SJNe7aDKTVYtCEjuswr9sNyajg8qv7LGrpjgR",
  "key8": "2eeqGSsYtbUEXuP3zromAh6qs6smpNVM78t1JtxCu1xhFYJCoc8MWmmjZpSseBLXmHBZjfTVUFxM64a8M6FHCGud",
  "key9": "4SbJ9rYbpmGroq4ctV2cjf5nfEdj86XW3bKwL92L79ezfi3a1SVZB5Mv781oJtsPCSXiPiHyxcSCrDvvPJ9e7iqo",
  "key10": "5x7yn4EBFT1kg7dZ9HF5EV9o9WCnjUnLrZUJ7kar5osmD2D3tUgBciisZzFGS3rmbSR3qYS1Yp7SXifWYaTY8St8",
  "key11": "3YY99nnSWaZ7XUG2jNkTEHUNgYeAD3QcUp6QDYfdjPymVwFuCQ48f3T7KvDe2JeC5vr8uUkbZCqKoBBajXGsHdV4",
  "key12": "3Z47oPjvLK9BLoVAJLz6GkX7jDhRnrTtoQnUcaAf3WVheyzAvFD4p5XsHCJwnK3PcyHk814p2hnavGSvAPyNQRqv",
  "key13": "2eia7mLvvuTa9dd34Jb5BaNQ6yicd84SW7RWBJkw7zFBP6NpWopj3XrsBYseBJVbPoJvbxnyPgu8XLuwFRsVSpf2",
  "key14": "2ebyYmMY9WSwYrFf4xawTFsdn5pN4JxE97AoEA3jvGdxdoJJkgLJLJW1axT28VDGu3Vwv7mbkTnyZqbvitd3AFs2",
  "key15": "d7HmBXspMetfjJRifgHVCnwKsbBabnwbcuRazoSTgnLYzcoKVgxaBiQ3SyCBA1LpEEzLz8d1cvFGXy8z6Lpjrex",
  "key16": "2n8PXoerzHDutUsckZ3jX6urwGHBS7pBM8rafuxTAmefAacHuH1ZJWSkdhcH9janLvyNhRHQoTYAjdGeCQRztL6w",
  "key17": "4Zu2AAJfqh6VdjSz1NFMy9qq3vdHnwxNnJhtVy6icnzr8npKg5rhhhMkc5VfTRdtUM8UZZFmdEGngiiNEamzaGLL",
  "key18": "4LAUfnxMjTe4LGRZanTBVEiShqZw6LmKQme793eKSrn29qoEpVN86TYwFz53xx6eWg85sgXMpJJ6obKXyEKomdUL",
  "key19": "b7hjsTxNtMLGMNbAnVg8PM3CCnM5dxNXB493fMso6uQNT9ruucKhxF6iwMvzQCwjF9KfowzHxmuM2eKn5qRsdn6",
  "key20": "3w7QLaQafUR76Qav7Fb6eTeiiyFwGqiUMb5mGa1X2iRw8KMZMnperaAzSU9rV8qNDSoUT2eecTo4jzADgJVgy4LQ",
  "key21": "3Kfuss3xgy4SD3fXppg2kPbmkRX7BhLEGU2pTCasdgibnFrkLf8Fy7aSbhqFfsoJ5W76fiVhFrG4QDjYx9MgNqo1",
  "key22": "2UXAQN2uBKTs7oE7TQ8thQ3oxz75QHh7a1Shqwi88k3vAUu1ju4ziGv45T66QyGEX2qfgCGunEakTTf2geZ61cF9",
  "key23": "6gDWcFDrMSePs5NGF7ppHGxXF1CFGGJQMBEsppj8FSmYZsL8H1TEbDDYBeNfC1sLoa3ZFL1QVGCoUom6ShRm4fZ",
  "key24": "5KSWMaQt8DfyLZmZaWzeRSKrVWQFGYf9MrEy6t25xxS4aA8LYS469CAmwkWqfYqgfTtyQK12fRUFp5SPGkxX9iZb",
  "key25": "4NbnPn55J6UMiJPXKUr1sFcmWvEeeLWskBgUoLima26arEpkQR2aDR3WRnC6rBqbBCTb4JHHqrNBqvVQhSMRKRXa",
  "key26": "3gR8L3Ft2UfQ5nULzgDmS2dvUjNsL9B5MkVik3Jjgd3C3QZ7KTuYRUrmbM3DSW6nhHBWJizuY5TYV6cs1ydSweaL",
  "key27": "5TzMCZYXJ3fhVTMr93zFyKJtcpZorKzcTJbEEfJCQRSqtQsYvbYpVJpvyqXVPcDQNBi8Gn4S2LrUKxuo9qNCqJ1Z",
  "key28": "3giP5ybdjHKJSKun8kRgracLuKXT4Cm26dHecBo7oPYs9wX7GpbjCRshcJJJuUENbNVzoz4q8BQT4rRVy281BdPQ",
  "key29": "2C1Z7Vnz5CxrFh6wbhxGyzCq9nB4tYpCYJGXa3BjUYuoRZAA5kq8uF5xN8G5pxHTeZq4bR4GKkyfzedRo1bH9j7W",
  "key30": "NVR72Lnzjj4KyfFJFecyEXGRSMDUumbFCk2aBY68uKWjQ7SBF74VWTKbRUq32f39ZJfJ1BWwNQ29ELpY3nziKfJ",
  "key31": "21aH7U8NNKZa3XndRRDD8hQdt9seffdnDaEWxUqF5eYLRkZJ8CXDxgvT2psdGiZfpsKsiuvUSG4cnwjpzzcxQTgi",
  "key32": "4ybXEVU5kajaw46a7P7WiNYGH6zuCyzoSRVYTFenWFSe4MH97nf6XohbSiL2jjJ96AJWcSFpJAaZnKfKCU9cUtX9",
  "key33": "3vHWrbDGNEja83NKj7B4kXTzbxThGiFxKMDxbbHQTdjVC5ns5zw1VXH4DMYS7c1cNUqnkEnMcTmYwYNHM8694zA6",
  "key34": "5x8TsMKWwAboYX3rTGEDV349UbhtKQwo72aWPBZZSQcX7FAABxwS6hAFiyvnSXfs5aGjJTyWhuYxq8noHoQn2HT",
  "key35": "2k6Rr3ge4ixgpN5dJwBG6yBCXwLVLCxpeAyHKQ2V9svxfGgmNxiYHTiZunrqXPLJDf4gBAdMmwbT3AzGYqYDp9iR",
  "key36": "1KyXuDkRMGQfCTccMRhKFo8mnefFCHKZoTsxaVb99uvUGDjhaLvijWT51broLzJxXbzgtvCt3YSDKH2CVa5tY38"
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
