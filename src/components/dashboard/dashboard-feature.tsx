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
    "5TmEo1f9bs76AsHkwPaEcXeA5XAdf8Kjyz5tZr6PSboAoqEw1W3AAEUxSGPQGeiq5azQPSLaoaVGMpPmMgqNu6Ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NepKjo3e3bRGQtPcn1H8UADSivaBT1GwmGUjjKYB4TAiZgE313v5VbM5DxFzG4bxFSJwbsq7tK9bcAhW21Qv5gf",
  "key1": "8iASbJk33jzb4yGJjQjxC22nGDMvLLN3rnUpV1nXTeoKXArEbaco1bgH6Niio2zpG8AnVtu7cNcGXsRRFjoZQqz",
  "key2": "LxMsJuyNeYdzxLBDdgBWpA5MciRKGMyPNkn2VAUpNxBudrn12jrdPsPHaJmA9mCDKwP4hUHR7L5kaZgDjwMpKP2",
  "key3": "5RVuLE8haUBUrG472iK6cBsMctpsNnm8sompiwuCmi7TeowVT5W4MNmpQpFZT1RhREQ3hfptdaPMHyevxpYs53Tq",
  "key4": "3aWMHaEsEZETxxF4h89Q9U2XGEMSLKVh6wS75yJygRPyorQyuQS36H6EmpZ56QWJVH53GS6XnGMmfKbMN9wcwBDG",
  "key5": "53jpsfZmHUCjgKa5ZbDWBiAsMZxaE6bdBTWn6eh9CadQ2ruvCvUs2ipdjMJuw2CGG3KYukUBZYBQdyqvZdRpLCYP",
  "key6": "4RpkfW11uXxKHAC8qNLXUHLU9YXPXVgw5gxB45UfDnU5rUvDQc8mqGuZNWvGL5KzFWdGBi1HZV59wZhQiJrs2VZb",
  "key7": "5So2ZrFKjwqDahxevsRa7f7JfuBjAxKFCwyfkGv1p5HqDLw5NrqcG378ExG3zjACaJBbPrtDCkm3iFbKFV5WdNZQ",
  "key8": "4S5qrKh1s4GpeMKCXeaQa7GgDii8qkQQEDQgiMuvFb7VQBgEZS8tds8X4413Xovdmr99xhFqN6mJH4nnJfTQNyJN",
  "key9": "5K4Npfh628S5fgJ16H2NPN9Bsv5G8ZCzLV3LdExoj3mqAPaRQyjsSaH5v3PkKthukGat8Zb1GT98CfjbkqHPyHsy",
  "key10": "4RSqdfB3TS3tdppNcsKezhdsyuZ1sH2A8aPzpW7YbjYK92EXpXpEp3ghwciHe1ThLZevB64f47fGCi6gGXTWb5ud",
  "key11": "z7NVnD7PKGtUp1jkKgCmHnXyMNk1MVLHZXMktVK8NaWm9pvMy2DFpGnesVtUiqZoJuewqwwrNuKcaBHpfo6UZZr",
  "key12": "JboZNaN9LZTagBRfmyztGZmAgbYsg3X4bRmxfGirSAyMzx4gcjTzpz5AG5nEBfZZCLsrnUwj3eSTmcxdF1By9ih",
  "key13": "35d9bAdhDBsePSbBHRA48SvkqUcQ1g1VV63ScLjhwDJcULQJvVrfaX7EueuzkEXtfmnxKvzGuxNfEHfWSU4FEML7",
  "key14": "5mn9FppHAz9vZt36CFCJwGixAAw2t4XN6ozz4ySt3G3hgg4WGrETU54H7GkaVMbi2UVhBSkk1aC2K2NCuYde4zTh",
  "key15": "vp5yKQdsakAuvjsiqdN2h6o8YzTtv5zy2BRpgLocdzvnnzDnYvBKWChm7gPLYr5ChTxzwHc4UADzqCRY5cbv1aP",
  "key16": "3Sr2j8XwwPUUWz5ysoUQz6oPRg5fTAtCFQpc8YN7w9eWZcsGFMueoLrQfarAkPbWDNT1xJUr7PVTEVYvNBnLhWM8",
  "key17": "354Zeu3zAPNdyyjrmDrurwHQe2VYSX8K7qtu2pSzdksKTSkFUnz5YVi3HxZynWUTWKMqPRN1dfDPXaLBgzJCwdn5",
  "key18": "2bujSQJDW3NAWrd1hZ3xnJtqWA9uKrekhvyE9sDhwt88r1LinjuGXpSswnhz5jVhwp3atWv22pUKQyLin7ps8ekm",
  "key19": "5M8tkDZKG5852HVNZudWMPnGipP4ARJLUTaCuuK9SGFA6DJ3wWgyceYK9uEvh6jeHBz3k5Krb1dYyyioS799ihtq",
  "key20": "AHLtpQdna2mj7r4cXvXb93MJsat36zx4nghBD7EsGGH9BuzP3sSbwBq6g1EEytA8Fu7oChJ7Fi2ztMV8F9AKgde",
  "key21": "AQFfUgpXuvBfktyCah4fLGJDef5C5PeMnGzCxzeWgYvVMoSkwmkXpfmE8CWxL1KsV47W27ehdPD99QAwU1DqcJE",
  "key22": "5DLjDTL83SDWqfgncCDQBH38WrBhwD4oqXnzVDbRSWKSePgTtdFq9bwaC9ECW4nHqA1rvcdbXqqTc8i5ySMcDF6F",
  "key23": "rtyU4Dsv7N4HwvSsnLNkNtN6u1UC6UNgfK8HZ58s8JZrAeiDvbLH6NBUqGDXumsBcSKK91rkzJyYuLtoZqgNAW7",
  "key24": "4UfZi4rWiXkA3zGdcnVpEvnFfnquiTZo8hfhJhnhQMSQEsdyuDc3NJ7LKu2cZntpc6NYMDVztDKicBteAZy5P2te",
  "key25": "22SiZFPdng3UwfWJ5FjeQ9STWB9xLB5KXBqHwC48HGpnLfRdKjuWCxq1wvGiS3SVR4oTAmtm1sAdtuEtpqUGAU3Q",
  "key26": "fv6WU4yFWUStfeStrBcd8TD4iz2qw7Hp1WryXfbba1wFFTfBFrm2JfiTF2R7pq6fcxs6juUuHJnMkZwosDv1eMs"
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
