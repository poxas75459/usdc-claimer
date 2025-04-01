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
    "1VJtcG6oGoeeaNo573N5gu3kN3LtgQq7kkdUngMSFFjkvTugTthiWmPAfz4CRSYn6sLLocheCcNbeiZoYdqvmcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XwhGKPyoMWzwwMFExEjzHV4xEVBheNu8GRjPiP3kKwXeR4TwCcfdfCFkSWbDCDuXP9LaXcmrF7j9M5WC9mrsC89",
  "key1": "3S3ppsdVPZsTq6gxnTujjT3mjnW1Ntn7NNC6LgvnocD2qhk43Xd5HCErbFK5tvTskwPYiqs2XHAv9nuKfGzVvLH1",
  "key2": "rKsh78c2Xi7QRrmipXNeYkUJzoCUxiFcHapBrNcNwdcN8DWUNp5PFu668te2wuoxCPgMTWbGiTN5a1kTRYaxgKx",
  "key3": "4kc28TjzvwUSghJTXcvefF34CE4GJccwBAJNtep8T2TJ6UUjgyiUGLZ6NiAP2ZVJvuyynQDxVKY9zDCQyT3zj5Mg",
  "key4": "5GttvZfi8tgLJwBhYBRSrpBondxBGQpf8Cyhac2GMroeyzPg535pURHT317ekGaXBkHg2fpG3KCH2An1vE6dAwcj",
  "key5": "4S7rf8EBmJ3ETjgbrR2iRrG9FBFgU28uby6wmMJqWUZRRnJ3MjskN9ohwqzHtNwvaWKQonxXibx2FLoQ3vCkACF8",
  "key6": "5Btkyshp51JuPGv4hZQtUb6S1bH6P3feAm367bpTUNxWnaLX9d4rDBHHzSfi2ZYsGfpwjnYdrwRvXpiime5TQqYZ",
  "key7": "3bgFTnvTbuCgu97wB4oqqyecgbz1gP6kjxgGNkg8cnpqonqXXwtVhUcMb8CewB9bEs6StRmQNYVJE98pgeesjj2o",
  "key8": "4GPtQYqX1ZuikNVTxAEkZYHeQnt1CJ6wdQc99C5mTexybJJtTQ4MWMVBWzEiWLpKHWuCVfBDnhM17bnaavxAewS6",
  "key9": "WVsgHEybFjPYL87RxFLfK8cxmPkVMJEW6Weax4BkdFFwW6xKtpQ1jPD9qfDWsHRzfSS9o9tUzv4HPXJu7YSJatS",
  "key10": "hxTap6Ko5copv93F2bypZzkBcUdTnR12hrzdG4uajWjkrf7MMZ1LKppuZmv9pHDSy8HVWQyBfSbcDVqwoQuiwg6",
  "key11": "5RCdjnXHeCmANyFT7m2DbjjYcQqk4EF4NUaUz9yzUKywmcVaSeiA3kB5pg4imwsNcMyo2kmq1PdF9oUhG19a1Nam",
  "key12": "5wUnKrfQkQ5HfL5LEMrQ45Xk3i7WXgB9wjX1dpR4RfkKPTy9Ra4HGz3iChEk6NHy9vjvvrP8tXoNfjGdBbW5cMHx",
  "key13": "99ccn8NJw5QXEKm2CJeHLv7bMJEziMPJFUzMyuM8p9dSwrx6oD1RGaXs3qJEFLwftKDKS4DxnzedcEuWjaFqQQr",
  "key14": "523A1MhJ5nD7r3mQUEC8WcWKNZpMZGzBk8b8gpxHormbeLgbeVApSLyuW8UQiLvp1kgxwKUXaAtcQT58J2SszL5R",
  "key15": "57AFpfmhdB7KpieH1EHuGLDyUo45y8gx8jti2oRZCYBvdatdEzSjwRdSUHtEudqagyf3kQKguvMNkHBMy9DKuvNh",
  "key16": "2aiVsRjp44q9hA41gLZzqU5VhtnABnfWBpdKuEjvmwFwTpp11VcP5tDNb53saBHP5M77UJnnwggyhFKL7Ad89DDx",
  "key17": "16CMBnhC3Rb6tYLKitXzc1zPkP3zCoGTmB75sDTFbA9TC1KFFbNgGESnkK5TKvqGAXELat9TYZmWK2doUapKny3",
  "key18": "5qdsavaoVp5fPGszJFQKGSxYBxCAERxpNBc5ACJuHEbLwvwEDwAiKeR7ErYBA5P2LDBLCm7ACnrTh1miE8c83qF",
  "key19": "2gyhrnjAMpGNMXMXm35wBCRUeTaZnbTcKu9CD6iSKTRdQho2arBFoU2HySsXd8AVzNf2MomEiw9p5wDkiuDQfrtd",
  "key20": "6crbAqNK2WpvKz88yzFFRxNn5bb8wrcJdZTpXcv61hBnh6tw8LjyR6o3qg8MGYAvA1atfA574S16B8ydixku7yv",
  "key21": "2CJ1Z1QFqFmh7mMjUC9Jm5Toi7fdLLJdYkxfyYt3Vxr1fmE8axHxy251uK6Ro6qcxWmM8TCwm6qe1RjfqEWWqYzN",
  "key22": "3WxDEFNdFQ14xAxctgQgvvoS67Dc3hvijSS4W4su3jLF5EkfZyktczJwmuGLKLE5yTtmR598uJHGnecErMytF2MT",
  "key23": "5EQVcnzaEnnYScAXM7JkQv3vKyKy8zCu5MzSynM1dxwaP9449tnBoBdnBjCPkqd4Gnfa7CdHSFVy6iwz3cDZgace",
  "key24": "TSyvnnQSBMB8kL8W1gRN5DKexZigTLiZboczEN6vk7MkSDX4NvjuroYfJYGqynxZHCm3hNtK53cnPn2GyDikcDF",
  "key25": "A1TEoMZ3xuFTj8FFWruvvJX5SDfAZK5q7k2txvvjGd6nqFbcBU4P9zTmvm1hPwqyAJGt1ZvW12ZiVxW3sc1Dneo",
  "key26": "2WnviHC4pSPAdEwy9FQg46dp3yceDX9bRXGqkLQajgrNpiz3F7wjJSphihqkoYssVx1Gbuct7fvP1pKc4hwaWRxW",
  "key27": "2eFHN5HB27uDncRBcFiAnnCu29VzJGVW5vvtbBLL3ewEkjM39dMSn8UPaMJLWXyyu21EUqiusV9NQfqekbHKNt7S"
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
