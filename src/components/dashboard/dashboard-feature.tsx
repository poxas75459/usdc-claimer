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
    "5qvZZeSxRtWtVSrcu1eGcr7SBqrGxZBWKo37FQnLiDrJGyCk876SDayLaTKi5bZKCRC29L9jwxHeouX35XmQEZG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64SCuvJAoiizzzmCHdzVXtg5akNX4U6AkUGAF9T4YFyuqsLrk4qGeCkmWY1ZEmhFx5cRHAfFewod1oLX2s5gcrfR",
  "key1": "4DXsPxqLchAgEpMTTVeNaPPbsmJJAGyXPwKYyhsLngxuACxDfoACLC9ueYZN9y5LZm3R8aVRc53qfBUJz5P4Vzm8",
  "key2": "5ah29XuoKyDkmyWwALum81i9gxzpA1hJAs8WKdFhyhyDAzJZk2xdLNB64b3DrThcrAzNidsEnXz4RiWN1FJkXk5k",
  "key3": "5CeGV56S3rtnt4xEgMkCnT2rnayU79of7xxzxJWiyW7fML9x8xNgNNqvwyWUKmrB3rzxgiQxqk5SeQwc7dwdRsC2",
  "key4": "2G4nRo3Na8nZiMtwFnbf84KswK1qneqBzXaknQuNBZWncGkqn3Lir8P2eatk37T6ufaSkTKB8rAB6uca9DHK8mAD",
  "key5": "4WP9b7QG9wN5TWVDBaUFeS2NYV51wLeXsnZTwb3LCVvwEiDVbpSttXiZgeyyHZGiPasrj7yuFkkjUbYPQTEr9MhW",
  "key6": "2SbGwp8cvq9pPjRMtuM4AWpEJwEERcJGYh12mMUFMTpaVcoofNgyVjQXTdnJKXqKibbG1aWvEbqCPUkRAifnP9vt",
  "key7": "3PSD5FYVG4ubbwjZdaQteWa8petv2tR39JhkTmWX7M6aqRNc9aFMEaY7UfmjUstRsXaoiB4jwiGWZ7WR5nRdiZQB",
  "key8": "3ixE4nQzoR3pvusJTmYzhBwpKyryH7k4RpgrX8L6WV9o4e8PG7KTF1cMckpm5NuR8NZoXH9U64AkeTL132JhCAPq",
  "key9": "3m7z8fD59TGYtFyZ6AcseZFggjAKD1mZkEwdGisJq3iuBsD4goN4aARq4MZC4FXF7QVtPhVGDR7UPVNjGyuWEPXD",
  "key10": "2UWbm7EoirVn7HfaVpnF6um2ChDjpbPLqzABkngeL6VbvoKALADPDfKo9KxUyDjqRBW6wciyY18AjmBWa4jq9qtz",
  "key11": "5BjNDZJTZB2oSGp62VHBKMCSWgjQgvKNGa5NqMSst8u63tHuUZ2deiBukkKwjKr8p1ji1Bb2cZGhM7wNjMXvRBk8",
  "key12": "44GjD3LHA2irQk84hJnAD62yg3GhWUvkJX8TKQuDncxqUk5rtNbfDZLUFtQm1TofuWee2EiriKp3Jq4rrxRwobuh",
  "key13": "FsuajiastKkRozraUcJJf9683xeHFa7DVEBxXEYz9BmaHxSJfUFD2c2aGte2ab2KeXPjpDae1N1WafAPryfEToK",
  "key14": "3Grf2U1y7jVD8BYLDHAxsxNb1W2rtrCvTtYxxrtGchcGt1m6KXRbydYsh27xRZJV7cZNrATcQjmz4jUtwGTiMm8g",
  "key15": "4c155bYKdM5bcxZfxAD6ASyfj4a9oAhp7QtQgB9oGSr1hSGbJ56CScJgwfw2yoTktQ9S5mwbwX5eVdraPdnaiv9q",
  "key16": "3urvzjrButkP7qAc8L8g7eVsQUNZV8BPtw2GYRbs6Xxvs5Xon4FL6D6wSwUzodBDUheNyqGVWr4eD5hzyEuq4VX",
  "key17": "tPTmumA6b4zsMYPD2yKHJiewfUxnhm45hhJ5AyMmB1gjAquheK5A7uPibtjEUMkXLhQBFhQmjkaCz69AMeycrVu",
  "key18": "4DdXFqj3ux8cwMTLYNesffXvWmohY4pCjVC7yqXAxAFpEcstgqtxDb61U7FzBi2inSYx59N8EchbtCS85sWmMELQ",
  "key19": "4yeeJJPYpKnJSorEtKQ8xQcoGu8HJMgNjiavvrJfBHEYEL7fiJQBrLZRskJ4BqzsJQYhMY7bvFQiteeMdfFNRPTk",
  "key20": "22Wbk119i6CDUBFPBf18jT9M7vS4NofqvYL9kzgDgewvsyY3jGpPvpogMPddZ66GQbFEZZCvs5Tz8mC2uhmWCMAM",
  "key21": "jxE312Ftq9MNzEUC26ypPcrRauYns269gKVFrHT5bjsqs9P8HjXNAnEbLd1rvQh55U2z6Y1QGv1NWA2VpKLxzzx",
  "key22": "4MwPCcjLm8BYKqskT85PSgPV5Jw1ke5WqjLpNQdWGAxhnnBY2ujMX54nmTJjfHd3GTy7ZN525xH57YbT27F6ACiU",
  "key23": "b49vEpxMjSiv2Xh3yjC26EKeAqqnZnbgDyvWd6b4cx1YfDvuEAddZMtSm4QrpBRk6J4t5Q22ecRmmWZ3NxVFEAv",
  "key24": "5BegvURHdtAhjzvHbnidLTXfcRE3rKeBLpSu6UWX5xSR8NZu6x4D6ZsW88PXSyk4jFQKeHGvAMgSDf5Au526AS8o",
  "key25": "2gHNY29r47RDrsAznDrVfSbWLeHkqLj6FW1qKkBh9fHrfdAwSBeYQFB2wzPZreiK8FKs6AChe1V3aQShPivmFUAJ",
  "key26": "59z9rfTPw4WKVw88t629MnU1YpYTa8jxkt6dVjCANfVJTN6NY7Rq55GV2w8iXcuANk3PjxdbWsfvgWWjnZnPLtMP",
  "key27": "4nYirDuz5LAaDPkQRPHoTLMZdtHPAjpiW3nGNALmKPWsCuGbcLehs3JLFJKi6Sgvto5armkAp1QYc12LYRhoS4pe",
  "key28": "5k9SC2fYJ1XBRBbzAnFbusXv87Gwk68kvKEA2dze6HTcj2DLuJJ7hg81KfJHRWrmjzJX6rj1aESGBKwXv1qks63s",
  "key29": "bTf1bfVAZMZRsAQvWDvfRF4Gk1YYAiQVp5YPNoXoMdkmHKQpEV3ytNxhsJxYTuJjhUJtf1ECC2APPyG1aUDg9EW",
  "key30": "3rqtC9mEav1keoveWR8mDbfnS8F2jc1q11f9ZCfMCyEKFhfRwTyWokb2jKCkaG5rHtEFcTn1GdTjQeX8ekYYggm7",
  "key31": "29YxGbYvouLTzxKS9kzMvVeuXxMwWtTXtasT23Wyeyy7FRgEyFv3dKKmPqTKa1fE2kMb5oPS6EUkiC8J2xWJ3Z3S",
  "key32": "6guJD9GNWJVCuNTq8BMssuM6G5YDmrK4jsFuvhcAkqZmKMnymaF8ewq6UwHSCNwLbmtGU1ZsLAWVRcoYnV3ZMdk",
  "key33": "5Q7JZNkk6hAfNJKGqw95euJqibiktFqd9VzeFFTxYRPgy3dZMBiNHzmZZHbQebiBt3q1fDYCz1fhvAZziJGjpz2o",
  "key34": "46d29iwFbS29En6ksef2v7Hi6WAVPT3f1xo5122x1R2oXrvzKoq9QfaQ5bWRQ27axPgFU2QNcLSDP1GU8ojnd7CM",
  "key35": "5NPkyxkg9ZPfypKSHo5wvBxeozJQsy8mbfdZFhto3TEhBHa2UdWx83tiN4LhrjYnK7gioBzhtrsMUPwf5a3rhJe2",
  "key36": "3kzSzLmdFDUVBykGRz1umJii2f58ztRGbaskNAkHyHHHq2Wv8N8E5DxsRYprnQk282NvAZkjxSWBfhEXjyQaUSyR",
  "key37": "4hnfYbsJVtUFz34NBsa4NzAvFcqtGkPukdNz8RRQde34Q6LXfSaVpFwGFWH3mEweXAcMg3FnknPm3X6txuNPpzeg"
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
