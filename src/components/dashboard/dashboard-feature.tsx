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
    "1b5HNvYzXkfHS34V5x5T9VbhZArB3Znyu3sBSW42UTctZb3v4H3N8kqJcxuGLB5ymJN9Qj9gPEACNHUiaK8k2Xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3keVTYsBFMKuoEgCMYH7pRXZt69GPEB6vHvmDbec6iSfoAPWruUGnisdh69MmMvVki1vzMBf6fQHZVe4DTu4mRbN",
  "key1": "23fdZr7EMm7enqn221kL3RuaDYquHrGsMc5fXHvjJrBC6UWupSyx9gk6X4DQsMPywomCBSbAgYunCtDKSizxhRXJ",
  "key2": "5TXDtnkyqGT1kabDM23ugd476CnH4QQUYAYxRRXK7mX1Kq4iU1Ab5M1eDLHJiTKUHLUyFCc6eaVzwzvj5F8WPekb",
  "key3": "5uXjqWF1rFFBQ8GwSiU2xyrFDYGSVZvK7BjxRrUbC6UDfB93UYfJc7wLWozWBUvXqNhEiv4GFdPzA5UFpBF7XDs4",
  "key4": "3bsuVDWewmQXXALuT7pFHCpZB4rErrzg7xSyS8zqn6bRruKtATXNE2L3GZ1S73aXW99jJo7GicsDszE1uxMV8ka7",
  "key5": "2AFZaXvx3mMu7Yn3ABak1zLPTQ8aHksMczWyQuU4GV1JHMyxTkFGVuJQtDQ2Qf3ZkxDzAix1iS28ojJbhgd8tu5X",
  "key6": "2Dc6xyJVgb4cjDwgZkxm2m5T2mX2s65CqDd4GK8Yj2dz2pA9eESrZ61HzhaMDdgLJ6rZayGjB5r68ffK3jbVS3ie",
  "key7": "3Yat437NuAMu61FQTh78tw3kRQSbRjrU9GCJ2tAFUbxgfwL8kQeVXv7PPETMknz1hefserKFpqkHnn4KuBigAXsw",
  "key8": "5RUKPnUy16RCaJxLeyE281hxzjFQsSGx2u1C1VgJGfRFqxDJnLJCYksQUgU3U5vBqGFE1fg9ZNDfZPanQB7VmgR9",
  "key9": "3YGdYJ4wnCdEyTAMDwY9ssVajhV4yA6AooFx6E16U3KVrxXDxVXZkBnx1ZntFaFqUAhka7t7uTx78moFhx3PAB26",
  "key10": "4tyg7LZj7RsHipqhydvNtDU2U2hpBRnc9zwkEjdmVwQ81AGVjEUFPCqgi8GBfHoRkzPLhcDRwkjshUgZovJon6wP",
  "key11": "3x4rif4N8pLXHeJcMTRL2swmpr3ZZLHmNjhifgHAkULQnpjNYYt7ZdL4LDxZDVXWMDVHov3aswd82TReFumzFbUi",
  "key12": "2osq72JV1fFuCxaM4EicKEaZzcZg3x1ahm21JrMSvSRVhwhB6rj6K5njw8y9Ce7fGtxaNB6rLFTriroGkHew8SZH",
  "key13": "5YniwBwrj8eAtFYEimJocYJNxrK9tS2jy8wqLzWj2g5cZEAhzcW3zacKAXTTq5yQytR2NTZipEA74oHVcBhSNYdW",
  "key14": "4rujKZdUQhpMtC5oyeg7yQ7hq95m5X1ynfjPpSAZdNh1XHDv8mYnqHw8LHqUrJCtnomYXpKMdVMpkYyW26wyq1To",
  "key15": "49nm2DTUZciETvYoy6sczKPYWzEeQ5TBWoyinmg4rLWnSjKutrCLRtuKmrqdZrTukWBD2tLzJkSLqAEqkHdnmJeQ",
  "key16": "rYAn41mWBFqtQyDvex2DCGfxnioLJfjMavBw57CXJ7JidvHitStfwAg5vW3kv7dBHo8juEm2Kiti2D9q6bC3vLi",
  "key17": "foUbp6ZSCUFWD4FcyH4BGDnmCRQ9sPyi6pjnngKs1PY5nLCbEWGvm7Bp3T8P459FmfughdEVSncvJod5MaeYK7P",
  "key18": "5ALavDe9V6CG9Lu2SjYYqmerKQT9swi1CcyS1rsbXrL4dcihNTJo3WpZBbNZi6scE2BexWxGQZcde3kwZLEmzsT5",
  "key19": "586q7EUTavTGExADuZifSiH5bvVDrfEyS863Ad49t6H44DrmF33v4yd6MVKEufUM4mHiLhET7FwLYTp2jAusSCcV",
  "key20": "3hvMEPLuReeTCp13abtmBcT3b23u6MKQUaSL4up5XfWzb3MU6Yu29XgeLqwFATT6RkPZCdQAvJrxK4Ey4EP7fncw",
  "key21": "67TJ6BQjV4u1cQyyZbHZV4Cqu6FnxgbyU4GEoG2DDn3eBJTR8LWdwEpzKVoWY1aZHiG4Uv9euZMdZ5LKhgM7MfJa",
  "key22": "2Kgk92ijr2JHunBdxkFRJsaBqJ17iKZpdvbRCKyHSYf6PpPNnvjT6KfsHrFBfoKUUFD47kQGf9jn6v9WvfUigg7h",
  "key23": "3HZrqWmu1gJnUdw46jCHunj4CURyFLzGvqy3H6CSrS5jDSE55h2njgJmthvgexTdfdHDqvJ6K26mzUuoB8hRsYu9",
  "key24": "LawWF8pQwUqUFeWsstDYjCxXRNWC35iFPu3cPrRJAnKY2xqHpdBaEohJSRx8me85MA9A5E3HZ28o38gyGTpeVXt",
  "key25": "29Xa2mfJR8JbCs6E1sDEyvUQsowfy8se5TdXENLJS6tMv97ih25nCSeXcUqbBXKRzFPdevK2Whe8rjqXon2fbiAD",
  "key26": "1Tq6kwvdx2aBfCU5e4fQkAnE5LzPos9oFYw9hRVRFc2U9DNeJV2zJvYHAbnAAtTQp5qx6cwYkSvFVb2rvsrpxBP",
  "key27": "21qeqadeMbqB7HnmZM9ufay3g1QxrC2ENkfVUgif5yfPtNgCPiNzBe3FqYt3Lm85iXyTrtigZ8fcV984GFYEeBgP"
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
