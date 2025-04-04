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
    "32gnzEYSZRvsaAXVtJJeLxCbzVeGyoMCtsjwCrYYwJbu62Fokvqg8Dyuc8ndUVVUFfukjwpKnQTDxVZiDDjfnCPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVmuj4tEuxgTdWurjWaHx51VtgesPvxUUe7C4Pokdtf6wxnshBErDZ75z8YtAxhqWAzR2mdzfsfnVCYM2FXiws3",
  "key1": "4oMDHULNXzabtbAQ1N8pQrYwWgmawico6SsbtVSKP1ctq5TZKW5Yn6q49H6GwbB26DLdTskzAKoTtM7BoALSz4ri",
  "key2": "4eazbGFojEw6pLCpxXA8Akf5sWRXgDnp7FW9NPHDex44mx3hyGpyVEYkpz6UuYXTW78M6fBkiBXLtxLzf1U28yd5",
  "key3": "5yRRRt28g6CTm6dEyDZynR427a8ye1rm5jcHMm9xcjm2DrdRCiZBDvzB5eV3biZka3pocvBWZjth2ntzmMxabBbU",
  "key4": "45k292yYCGFuxbtL5xvAFhfsw74NQjMk9t1S7JTeyUw7jMBxvEi5VTQFR2UDNgzffK7g7Ekcebj3rBzeJbFyghHk",
  "key5": "63FXUiFtgqcUCRKJhH3pL9mFHAcv3bhcB9uq4CU58uVyvUfNp2sN32NjacaUSSzUPx2dUS9SGn6WQTq4qeDs4LTF",
  "key6": "5VmqoNU7W8UQH7XsNcUBJ6s9dQJWtrnMmx8gJFymxqJUK2paKftdCoQn3xSN93WThwSCqdXyXJc6EXudFw68zLug",
  "key7": "hYuNZsKkjNCBEu9nyi13qTKL8NArzqoK3zSaeufPoheHXVJ4UAx3yaJ9RWpyyWspVkkWPVNJdgzdgoVrvC95Q6T",
  "key8": "2HrV6VPF6ZyZJJeFdi5jxEUWuZz6fgitqQhqsjnprbjRX8BV5HfVudzt6op1Pvb7m2uBvhBHZJatwjaNW14n7qyZ",
  "key9": "5bFuMg4qv9Fwk5XkW8g5nU5SjJxP9HET2VYn7HVBpQmj4bz2fRv8PqucUNuLpcBXxiXNBwVwPVU3RTKFkFr2bPE1",
  "key10": "43ieh9zNNuhxa3isU932HunYfA4XDxJE1WXsmM3mgrUojexCTXrBV4t5EGRubqGeXiw1oVMXXG2ksSNwEHqb7DSq",
  "key11": "3HCKSTGz97D2NfrUyKnPsdzSwiQkWcFqBxeyn7Z2zL9eFVMm7Q2d3oc1xiQvDCkPed9RZ3VsN4Tc67Bq3RZfA3e2",
  "key12": "5WRCQxT53UzwhK5nZUP6QqpQtUobeiu9KXmRZZYwdychewmjHKdDvDdJbgWvyPYa5NjtgcWQhfpYSQh1dmhr81CB",
  "key13": "5ZrE51B4zfnxPQG9bnxm28PMW7eR4xfbASqL48AXnRxWTfW8vj7yFjhSQDs7zuwNcTtxhT9AJQLzPnAzgxuyB2am",
  "key14": "2pjrTB1BVipXzTZ9RScwcH2N1GuVbgn54R9ZE4K9Q3bf3HTiobWFT7VjJqEgvWR5KJCErV4pEADoyxPH21Hcw7HV",
  "key15": "vUJQSyomtu6azYaPpYQPfCuaY7R2BNsmBdgNaN27Yrw7s7L4ZXc1wpgyc5UBVgV6orAn1H64fGK8Hq5FiFu5Nnc",
  "key16": "4p2CiGsoA7WBMnbGL4chyYXQJThPrmxUAMgrG4dJeKbH5nfVpQL7h62ifd1VqALBVNN5GDjqjN2GfS3M1ZWhfooR",
  "key17": "2J8vkHtJ7mp3qVufVCACeTYsESU4Skp8rRprHM9Uk6aFi3A5P5nPQf9A5WLhGq6YACpVo7MUuikm8s5nEcy9gYYZ",
  "key18": "SA1DqUQ8o71sLLTh8GzBcKqyzNDwnBx3SrRYK2TRhzVRS6m5ZRuQLV9JB5b3BFGH7EbfnTBCubk2p9syBhcdH6E",
  "key19": "4pa6yq7xgenT9MkQatDsz1cJ15DyMCCckV8uJF1pzkBLEqDeiCpZ9ghCRKwnvhjL1m8VPgyFFAQFWHGQDgfV9Grf",
  "key20": "2FYfqyMsTATCjktoCE4W2mRzYFfuaFGYRfytBvJTPPuJmmni2Wf2QVXbEickJbPyDCDS4qMiC3GCk5u99jD71Aps",
  "key21": "2kpwSrxPMGFHHptyTKWKbiarfpcHEKhGwF5w28Dr2NcRcyFYuSKTxpvrKFsjj2mU7JFJtQAozQM8N3smR6VEaD9B",
  "key22": "2g2konUJ6NyB8Q5vBhfXHmDJaEiUJWqXFkzYtEE1rVaYNAZAZLxzq1AmmAa2WKLhnFgWZQZUQtbMXf8Euv7RzA45",
  "key23": "o7dMbsEKzfTDp5g8jCTEV6DDTCVu1da9EfiyvXrUAZrxtJBumDkpv5V6rVfszB7sHuKs9HPFEqiKp1UWXGhBADE",
  "key24": "3dKWzjmnooEVekjEpaYPmwFsUARXQZ4hrBf1WLfqzrYHxSnxVhF51pgQJGQycMiaRoyRuLJx991ANFW79syuD2zf",
  "key25": "5Rit8xUuwubHbweLJeoKXeCusxTZNrYuu3n2m9UjfZGHD9h6Z2wqtMviH66WxeTrzPTzt3PiABdCtNX9kVfU7R8f",
  "key26": "4kCnARTC9wk9eE1LCWXDQ3GXaKvVAcwndzmjyCdFmMGgCuGRKRy9cBGksos1AqBmtYYQXekyk3dY7NLFnPHm5ZKK",
  "key27": "4JrVcxwgLb96zEqaqBewVmV6syDYh3qTFGMkEpJJqttExu4tL3Jhq9dyWs49kWY9hcTFAd32gHb3pcDxKHXDuFdQ",
  "key28": "3xViWi1h8JMdNDHE258Z1mJP8dNzghapMgevWkp1SAkPJDFJb4m4EB7peYNJEErovcUA6hX8ADACHmZcGcZVEaqS",
  "key29": "36HDgtaueUtqCQGokZ8HYjVXHFR6zX9YEHnazNLe9XmhcvZJoHzXM1456E5KB7tgmUVmf4UD5KxQB8bweJhon9Gq",
  "key30": "gPATcS57aoDnZtx7KqSZxRnLcWJ4UU9oGF4sp1wiMqyHygzjqCwQPj9qrAsduhhXkiSx2e8m7PgGYnPECCwDQb2",
  "key31": "YiqjgZq39p2QCtP2xBJfq7QTqj4FpJLbXTSzmzZY9YoppSyNn8TT1oSxdqunq4cekJAWBthX4BvnrQ46zSWFyhZ",
  "key32": "5GvEeatyzUhwAeF2pCFmTvmy7mssyatunr1GXuCuq8VJNfJGNXYsRkcBDLanNBixNx7ntfxRPPbMGw4abBB3GNB2",
  "key33": "4HpgkkZcXc76NUcgKUkTt1DpyZaUk1qVCXnXKroj2CeFufPMK55QdA8B92MuEykhK98mYCboFyCM1kxVW7KoEb3M",
  "key34": "64e2WAjezJik4yYo7axYihsFpDXwGwypfTjUqBsz1WAWma48YZm6jGNWnZErPNDwGoGLGBhgTuMoARtcmyYo3QuJ",
  "key35": "dYTz791Bds2Uu4k5FxyX63idybM4aMaaxXya6Ly5ki1sim994ZVaXcd2MQeRhftc7Uvvn7bCMo6uyuJGQ4PK7Cz",
  "key36": "4zDni8edYGrrur9WeVp6PvgQP48JjtxziTG8E5mC68ABtCZJSXMzBLKNu6Af5MLbV91ExEZAC3uHxjrDaWMtbJyz",
  "key37": "31rvzzLqadTvwEAfiqnv5iJFa9kP69FaHqptZWYXgdEsVigFMzK8ZLsJv4iCw5GqkadWBxXxUXtoWcfdbPf1o46y",
  "key38": "uyzx2T2q1AofqL2SKa4S2q9QmdWJTxqCHcDUrmGd7n354obx4ciqiWGDBfotc9jwaM8E1SxGtEtbHPVSgQudkRz",
  "key39": "2UGHGsZqe2AUnJ5meCeKr1BggaVz153nTGwpD1NLp6cH8N9namPYMcPx1GYuWBKzBJtCzaVqoWMvRX6vdtdertdB",
  "key40": "5RiofGp6qNUfuzrfsZA8s7tnRkHoj3nUDNi6GimLXoWJckCrHAuga6uro8tWBZgGzz31iyyrVFVJYZEYH5qpiVUN",
  "key41": "d2wvsmXcRu8ipBkSo6sJ7JeCnb8a1LxTW7gA2MzYDVVD9C2h2SY9YJY43xBgkbgRJgB4Cm2KnKSvPd7wFpDy2ui",
  "key42": "414toFuoDW5oEJyS4pBRLXJJGz12NcLRbhoiaquCLpr4wXGgCzTgecNeRU4EkssSjMcAw1zPzpG9vRcCHLevgtQs",
  "key43": "3SCgKtWCWecPcz2MsP6MUHGccpUUkZa6c4gt8H19oBsVGAQvmWEKg8R3v5A4TBFRcnYaBdkQmKdwuHnvD1Vxjmh8",
  "key44": "3Kn7U2k3Ed82Fpq2aiMPFYyeGLikhPncSN8CgcdvA5mkDd5rPugVGKFTtqN32jsDZ22DGd5weL36T6BJAa893ffd"
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
