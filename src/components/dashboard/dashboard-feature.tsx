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
    "3FNHpY4rfqB4PxZ8fSsCKxVFbehM5RVHpk5Aa8TKRM3SiiPD7Vv1nym4YzUF1i85p8ovQGPWy7EhLc1eodafZxH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w5YMcVpr1okMe27Jw8x9jbUuhZNVCN7P3aCAbbVdbaFbnTskw41y8a68gL8DZWdC1JBmWqFiuApymYrGwBQJyPH",
  "key1": "3aykZwG7cq2cx2JHNxCeRdBJ5pRx6uV1KSzyh5CPDoiZYWSeLRcVmuccq6sYVxiKehEktjMhVLxeCUJKqpZG5tcF",
  "key2": "63ZXvDDKUQXDcKNqk9L4hx7k1iYHaSd2J8L4kRBeuxXNDgmv6HAmMavrsBt3tZ56EXPdMEKjFQ8MfhYk8faj96iD",
  "key3": "2Xza3XRFS8jbp7fcJz7XMPpzi7D3wkHeCdjvtvfKa79jmhAood7YFYbwtrSvPH1syp6mUEF44BQAMwZvDvP17J7s",
  "key4": "2mwsyCVUSPysrEpNZXaevvoGVZA811kTBkPB4qjuYqCUQKZcceXQdQ1CmtaGp5fxtnfEGpq6Za9iVUNj6S2Cf5Se",
  "key5": "4pvYFvB9JPhMdDLjDxhnUCMxGuUyQ8Mf2VxhJLVUPT6sSqjYk62RqcjupCvhFeRZV2G4UMGutrQaGtiYDwCPgDPy",
  "key6": "26n8mfESVxcGo3u2j87D9ZTCFwz7XFRYE1KMbU6fJCWH9FMweLQLchpRHnz761nJE6KThB4x7RXumf77Aw3JULKb",
  "key7": "21tiHnq2FU7ujZszpMN4TZJguQDi2F5xbuiX9qGqjjyVGUXh2cipjuqVDg1sNz1qEehqtfuH1iEBD2j6isQf6YSD",
  "key8": "5bjW8xhp4gfuUbY7B2ydwd4yUugQa6dv6C2hUsUpti777C8cPBquzWMx3gGVkbUz2hTSHxLX3WcP9KEYP9KRw22w",
  "key9": "2VWjjKSKntixzfSYn4LRaxkYZsNLVh7wo9dB2nvbAnMNciPNGVQgv3aCBbStzF43WR3W3WALqjpe3FyHHuiyCeYv",
  "key10": "453KLrXb5YUPaCGaHUZSDvHzpXuhUyTX3de4jooGm3w1EHZDQkLdbMmeM489AYPLYjcxf7hhLdshHdKYDermmqcB",
  "key11": "27ex2UgiSHewX8nwDGt9hSsMmn3a2rYH6zGo2Ckk5qKEA9LLp2e2sWZhD5sWUe689M7jNvhCDzpHunGpW5QqYQPy",
  "key12": "64Gup6HrJrCbaFbcq1QxMvwE23NLQw7nTt8GG2WayrC5auswH273LTQDivXiKVVXTPU7EKb5jbTDTCGDMbeqJmJv",
  "key13": "Z3iWmHJZakaUE9Y47LjA439V3qxdh8eg9brrzNxFzcsF57TxwggEXiQ2qEftirX2WVY9LAuGooNk3amHRAQHzo5",
  "key14": "5h6M4RnwFU61ncF397zXMkvKmtQXVDqNqvBZmug6xXEXGFnEuC3nQbqvAmUtN8Y23mTRSrGzUaSUcXSyfJ2BrCTq",
  "key15": "4o8pqewMVh3Pu5RyGWmCnX3dzQWxVsEAZSG97qQ5oKieibyFtenEGe7NBC83JyuFuNE96rCFURoG8xXwhRc9dRSL",
  "key16": "sYD91cBj7vE2od7TRDSNfFzrjMLm5rE1w8E17MKWuCJdXSsGNukzws9kJRahjsbexef1dgjfRBdFHBfdHhB3a9s",
  "key17": "55SS8PAwhq53YPg5tMPxFVvVhp71GCyViBMfKkPFXWdDuWEHJjfuNfhywxvFx2k3ZrAxawUyueJtmiCMSHZpnzx1",
  "key18": "4z9z8GbrUwUb2McNtUoQx73iVKvP1nNtv3bL3a6DR995QHLGJCKNVc7xhmzQ9XRFthRbVHMY7wjJFUMi7HAA9dVQ",
  "key19": "44xZbmMmLCAMxuAKT16ndkMLLa4E6qAvCT5MkQgjSmRui4SFTDn9sBieFG3SvDFdhgtmBWbTXFmXEfjNbX4sjCgf",
  "key20": "4ssaLdUJpM8HKfj8AyVz8rg1Zgesi5AbD1Pfr5Gkq7fsVnHHW7g2XYuB6i9mmtATaAuWREXQtAwKaQrp1nwMThRn",
  "key21": "4krgPSZpRspZCSCGPnxBs68ryZ9HB4JrtGp8vK7ssgiNcc3R7ZSScYfGNG7wjAvU5ENWJiJ4dzQbbNPDN2zy5qhY",
  "key22": "3pht7Y3G5HbiZA5rQHyAAfuuVZGYAbKHZPeD5r7VAM3KDDqPLeVMsU5Ws9ik5XpdWCQewCC76wJRLZ9U4uLNMP5q",
  "key23": "3mSwmt1ge9Btwc6exdXqntcYdFXbTFgNe1CWEpuWahhwUZHiBPfTuZoTZBJY5sKRNGN6ETi53eQF8ea5YB4FsEgR",
  "key24": "64j2r5d3XfKS8tYjz1mCL8USgfj9Ub9LCQBAtTP5sA9eDbZRBQPVTVKVrZSuhPZM9LQj1WGwmarjESfSwpo4zXVv",
  "key25": "5zeXpQPhfTvGyBi4a38TfHEHAaUxSaApzLVgRen9Y1KZ1cZmmbSJwfmPX4jF7RaicqJ2h61GoYD7njxkfiHrk4xJ",
  "key26": "yFa9qJ4KZKGFDSotmixsFksJtq5iZKJcSA96Y7HsFEsYS3UqeQXjUZBkjR4thxcGyNgKP88UyJBKmSsPxkYjUdQ",
  "key27": "3GWHPM9K7TvVJzm5ZekY2qT1j4A6rTr4tyFzUukPr5VUnq49b4dn1vCzsVJDqfcZZjSJpiU6S8133bkkKHxi91tD",
  "key28": "36eC48emrjX8mkUbsUhQWCVpMJXrBGCeEEEwgSYHhNcDJYEoEoxX5JqpNcYsKWbgQJCzC8yruHKZ2Wfz9T1MwVGU",
  "key29": "2M3TuUGYfKwDBYNH85a6oPmRwBs1GUX7soSXGXjWEjZeLtnM2c6FNZ3n4qqUe9fn2oEKCbvF6R3xsYsHYggpuY7N",
  "key30": "L8HGMPJwmf7vMm2eyunebUjHsgwPNxh2VTZ4SkjLfaFcZjSoaGt1x5J1pEYX7AELN5dKf86S3k3YUCRh1f81E54",
  "key31": "ijw2wfMbsrV7qrcSjkSbZurZ571haT8AcTjLnNthgurYZyXMwCCDETB6bEBAdWP2j9CjxiVszE1pRz3ZRU8LsCo"
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
