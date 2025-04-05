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
    "3Uoj7H5q9TdRVpdRTtX93oDyUXHj2hjwkgk55HsijZNGf8aXfmpmKtytmMZsDURFt1rrsyHaBUFvqdTtkqUu8osS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BZcrpQBUjot3mjTxwiS42v32cMuK3wSVUaFoGagnoELdw4wqPJ5KbYupy9KpS9TdVDLuXPaw9kjvR6WTYns6YfC",
  "key1": "4kUA3A3X8quNAeZ3Exoy2PYAekmGcwxJWpSuv1jtfyqnKEKQc6wnpqvV67C1ZBeuxFp8GLJSatNSdqdYMbWezUez",
  "key2": "48h4fhgY8gkQsptQeg7LrMc2WC6J1yTR66hECVPYWqFKEhsaBMX5raarHUaWmzo3SBj1mZ5ReqHeoW2z47GuXwr8",
  "key3": "3Trno3wsYdkwf4Qy4hGoadTWMRMTjb8mTU7UaeUwjEtKVfHEEHkcXaKv54RJK65fhakrQAiGeRRM9rccwtUtrTdw",
  "key4": "4mZeroh1CMvdztSu4VwptoCXfrdoZgTrQeXy8jMz1ExkdN57QM5h7vHxpf3kDSHRazHpYQmbMxDtiKso4jvieh5z",
  "key5": "4UyZZEAQSXRtXrrTVGQUAXKaRKDnkGzNFnjXz6oNmgNsck1Sv4dv7Q4pM7yBbaqpvbVUgArRobw8tQNxmP1SQC2R",
  "key6": "5MXD2HTCwXhVt5qj9hHkWFpY6EoesR2YC9dpTtYhQtmuJXSy7W6xmcHvu6zYwugHKMaaLMSPoLoJuj647LHJjauk",
  "key7": "5TkkmKtYsPheZ1eGwhCzW5T6BDFXh7URr3zDmRdxDod4T7Zmhygubns5m7443pGyck5ay13eJHoRXSw3EnpL2jmU",
  "key8": "uaJv8859ryW9xAuqrzJeFSs3FNtZuYT5ToNt9fW4dnQe9PvFwB9Qv1d3dPwKeWNgdWZNDQ3iUyk18kq3g8GbMSP",
  "key9": "qCf8fMT6qqmWr1Mu8MZTpyDnGjNymYdNtLkUcF1YzB52JW6iXqEDVTu9BgT3is8b8VW629BCEWUmUt3mSK1VtVW",
  "key10": "5G61sjdanpps9YSSCQ5iVczRaKrM2gkCUSMy1NWSqgT237L42jLnPk53B2WvBshYJyhW55tUqr42fk1kJk6Vywb5",
  "key11": "3tQQbN7ZLyXuZw2oCDfzDve4Kjxk4brTCyoqeMy5DqwZp9YSM7KR5igpeWJTy1qGLK65noSjudHvB1cbgArb4tHT",
  "key12": "5ct59H41tKCnjYACBM3KYyDjBA5vg46X2Wn5o9uzG8WbqMQDksmJ6aWAGUBePyJLtEir91rqL4ct4cf9fSFGBvz6",
  "key13": "jT5gVLk92GEu9ywmdnEbsdcDkeYj4gBdAr7UhVrSh42RxvawQ9aCTZ5bSR7Y5JXULXyV9QQWi4ySr1xpskbEPQZ",
  "key14": "25eiyqr3tPoSsMf96FMwfxz5Ge7RxmvJy9pkyYqJ9EMBkfMiMtzWGG7VJ35fGXTepUDUWLBqdLRAi2gcM3M7ydso",
  "key15": "XqJXjhq5uJPyJhtDrrLhJrphrXm7KijHPERcy8t2Tx8svFnZ95kp5guWmZcr84mnGMKLGz7Jbe5YoMQz9ZETWZA",
  "key16": "3LPVx6Swu99VFVAwF2eGQv3x8ZP4wET1JWg9LoA9Su7dE6R5yPArQdFeyheYgwHpUEPM1hsPVqKHDi1k4YYR23rG",
  "key17": "61hTScSyLJZRs387fqDEJzHavsfA2vkz8pNFpoCTVmjcWUjVyjAfbtdhx4x56uQLKzZYphofe5J2T9JqEKHxKqny",
  "key18": "41Caen6bxub3Xo8ACA2ZHDQNnj7reZ19Y1NSDa7RmVMkJgxLW6SsaHFopkPcLnrtmCjBXdDu4Tv2ugkM2ibQfzgh",
  "key19": "3L35NXNqFabWJh2r3K8kDppUzkmhjHuRWstoMi6PBrfMVQ7BSGaS55oesD76mdCSRDrXmAQr6aJXtBkDbqKwLLFk",
  "key20": "2wfa5rtoobDfW3xkXb1XwTbkz5mPg42Y7c5W61W4RHcJQ7YogERkit6gkGtLNhRVMtaQau9A1L3xU9ewYDewC8Lz",
  "key21": "678EveT1goVZCsLKaxxKgBqJK2ZrT6UX3qaUuPeLDmwCwgGTVpokYg3Gysz7RV8ybszkSCs5wb9hWoLME8hUZDfQ",
  "key22": "2mhsAc4Y7wvZeiLmmQ4RzcMxYMJyoZUYRAbP7dSfdJLqizK1AzuqnNBHNBxkSJu9fhcxDMTUCAM63gcc2K42mCEH",
  "key23": "58azvxg1fUoppahsL6Eb1ccPo7mES4X8LowkJBjjiRkHrFGqrHSV86BJ82aNLXrMdgPCEHCsid4gHE7MMLkM2wVG",
  "key24": "4wBEK9TzC3cziQ4ikFVJBQMpufcY14WGneHeaBrxCfMhrULhSUoFPzj5fkWNdF6e6Ww5oriPtXGc4L6D5L3dop89",
  "key25": "qRzF7LvKHWw6icByXiKNzTq2R89TJ2opXNza1uxE879qDjUpbNqQjzs7DjJZxkbphehqepCgM3aUaDRuVr1H6P9",
  "key26": "2KrztZY3g7McwxoJxoNjZq12rxSDFwHZEHQAYRANE1Rb4iQveH8a8PTHWzJv6fFv8HRbNCfi6XgwA5yZ8kJ9DsVp",
  "key27": "3rw1onMw2ZfJet9D4Z2EK8RUzJdpBHkk48qRZzoToC2w7r3gQmPCoDj9QFCfDB8FR463XNhAmxTRN91eE7UbZHBv"
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
