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
    "3AKLtrZYf5W68qq9HfG14CUMNknwiSdynXZaHVA5Uy52faDck2E3rfXifaDxJebNAMgdDYQ3fuYjJVGFQJmARHJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eoLmDyhPNgCRfRFAvagnBrk5XeJXJfvrzfJD2NQXz4c8GottPuvetTycgxKpQv5svtRr3f6B1nL2ArTJiZBAnfm",
  "key1": "4GR756zKZSecdf2aDn996Yne2Rk9hvJZ3Hvf2a4Yw3gV49CaLTcGUZ3fxcZEMy6ZyAKt7pfSEe8zJsxvam7166ge",
  "key2": "3iA75WquqFRyBKSj76SMAp5bmAJsfLgxeMSGr4ieTp99F4DGQzCDE8dHoPo1NmKp7g8S7LJyejpgqqvi2vMLjqPB",
  "key3": "5vzhZoj4vVLWw5dkPMwiLsNJfiaCNZGxo36cuMzLRXEfG3uufPNRva6ues4HG9YQFkuYY7rcA8C2xcMKjhjtwRxm",
  "key4": "3bo8UqPpxTwbGhwXAZyy63P5BMUebCSSVMd8JdNRRxPNwqNocXXebaf7LbJQr2JDrphG3iKqExBrBBAr9ekqXCyF",
  "key5": "54tmMTRL11VVvBwSjUAgDLgMH1gftcrVE4RyguuMW2k797tDZhnEMHr7HEduU9kWvbA267VUxB9cX57pTAqQmoFQ",
  "key6": "3yt5SpUZz1eigwfxYBAHmrVo9EL7zUDQQXjckrXxzgFN5V4UVBwDZBmrk4jQ7AnMBQ1WXsKkKEZWUZxcgamCiKtR",
  "key7": "3S4mUzoTmUXmQQHGgZhHz9p3SsfLy95DW4aRZhJgU3jwjuA2fEgBf728rbCQZjLPTPtW9nUKLqh155FgbUqHv1a7",
  "key8": "aZ8sBCjTZH5Pype89RoRWmX8hRd5Vg7bRzWoqfsMMskQih68Hp4ihdV1tQgXkZQoEuiHVMzjckKJZQE4coKLUng",
  "key9": "AkACkX8CxESHUAkQ6Sxk7d53E9vL6zMHbpVNhADRHnfEcvsiCabjitgLvrXHZ5H2f9CYTtFBNAqa4jzhyysziJF",
  "key10": "4AmdHMuEYzjyXowrSVvkc7zKEPYSWdvV9Y53HEU81dF6wuEcBcEaKuUfxoQ9o5nYxN1Bqv2wts1soxWhdVGVRQEe",
  "key11": "CwcwL8r1i3zxYbr5BxRhnnwmtJELxtVhSC7oTsnALJfQpvLmYnHPw3bgpcBT4DU4jEn5FufXh1DdUYXMW5Ha7L4",
  "key12": "5fZ39CxP8ig4o2Wk7h9db8dyWBKw3d7fpBMtRpqXiaDVuhFnDKHizqQz9xDWFKo2UbEmfiQeruq8RF8YEeSD5dUM",
  "key13": "AjZTzp51NKvihks6FchRv8NMUFw6JjuMwZaDefmdZkkhzMA3M46gUPKspwtWX6S5c27ENs2DfKSp1oMtc1qUsZZ",
  "key14": "4HKVPqy82fYyFBNqAb64peJrXMMeZ1MDAyTgTRUqwJhrmVz6P1zyPmjFVQyeFF5NVCRwKF9eCvbvBBjzoFNNHFA1",
  "key15": "3mFUVZkPBC4Vw1DAiqXgQ86SDnf9QfdpQMdxLwG3s2xdWZpGufbBwdw33NVyqHNvXHAab7iVEoN3cENBKQv1QF2o",
  "key16": "3itusUJfVoThrb3xGbDSgDcHY4tFsXF5ovCsmXdUiSj1hqwHRdZe2KHhMqH2vWDfNCnJBwowNQ6hAujkrTEu1CUZ",
  "key17": "5HVsVtfDHZtbkXLbgsQeFrAjKrspVNuLejfXxa5hktAw86AZy9UiAYbTA1QkaycifKgVfs6aaadcREo1GQ8GvCXq",
  "key18": "2NecKJZ6VvSVT6B2aT3rqPFCPPYK7ZaL3te9jDSNJ5RbZUp63Reqji1mcMsvDVFUeabYMaisCAwWZktucvKs4YXm",
  "key19": "5HskmJbNXpWTaXtbXhWD57UQsDbModW7GN4WMP4eWbV6GRzxJ4wYayr2JTv694bhYSug4hC7REPjnAJ4iXAoPAh9",
  "key20": "UKctpNyomcVFCKBRH4vc8k3pA2qBgVtB29GxQBFw2EtJfc36gjBXutEffu3GDhrVUxJo6rcPSNvYSynfMGvPXAg",
  "key21": "3T7xkHoBhYsmnNaZ41ut3mG4mgEvZR2H2vTMPfuDoySZTuWF8WY377UR6kyxXrJWK9vvwEKvXkU4tLx41KNn3JdF",
  "key22": "2HAgTbWKVpCTG7UGjVYhYcwi9aFLytx4Ae11guUcLUi4WCstGgosyHW5LRVRmdA1NYHv9a2vvuW9pX3dRXZAdw4x",
  "key23": "22XEPY4Vew5m6QUgkVk1Aos8Jr3B6txTYqfARGZq1v88AeCL4WP1YCrFEoxBbZkWBiQWkA1nWyJUXNrRHi59QBP6",
  "key24": "4GwPqFYr7zQrZw2RP6SY8HY2sYEsvtnXmwcbsN4bZViHVDDPRuYT4xwHMAuPkz45XDozgtPLSxqbMJRHhkumzFxu"
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
