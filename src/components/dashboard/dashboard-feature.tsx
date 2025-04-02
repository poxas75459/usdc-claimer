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
    "5MYHAz4nNokkxDHhVVJ1ucPpxk99gNgGgrPfsksFroMSDnh3NEVhfT42Eq3G79oxdo8b4yErnj2pdjZvzZjaBFRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wijQmKYmr7gsP8JFqposFM5FUEN7WWdttWrJKMMspXQAEQ1jz3sNjaEg3tXFPxvxvsMgch5CujXL7cCWxaUNvpZ",
  "key1": "5NB9SMWzhrDmoyfMPewW8gh5LQfeekpTC61oRqr1JqJ2wHazpzkKQisiJHEbFy12h6d5HpGUVad9TUtTx5J3b9zo",
  "key2": "2j2gMakZNjWXBGgz3ANCmfrnAEVeoUtLZq4qr2u915mtUefrZ23oCwVnHtQjsFLi3aghEfVFDc1fNQPGV3SWBLCt",
  "key3": "5CFbTh1NSnAxovT5mpctHy3yeNYVx5agNSukff8HeezfwT27NjwU8oWuXcSb6cw7HAFo4wyKcNJdtFpfz8yMgYc3",
  "key4": "3Q3K72jr3D2B3ew4LR5u3XZTC5yqQjozvpfwkG69sccayQk24zLXp7iUWPm1JwYPSTfbwc3CAqw9xkwQqRMmdhbU",
  "key5": "5nu1EAZMY6HcqgtBevxETQyLm27SNrUbPwD2js7tDg9gvx5HYc6ywUbXwPzmUH9zugBMLbUejd9fGT3vCVh89WMy",
  "key6": "2ZMYLvaEojvYSF15WfNsaLJZnU42K69phdV9gbxDDj5w9tqpngeGXVPtnVvhupgA7zS2GT1c4E4MFZpYVFbSpQ7W",
  "key7": "4X1uEejLzTJJ2oCzSh9Dar2SidZ18X3r1peXQF6C5X7fip4GYUmosbNGUoVdWErCb842TUJd5zWbHyxzZEdJhkiB",
  "key8": "65GvDvihgwkq3Y7A4gZx6tVbtqtdKZDArJevREUPSdUbGp4M5EmU4pzaC13hF372mZv1NdPThGxtKQmdj6bGqqDp",
  "key9": "qDHBFmVh1YmFydCtRMi3aPrbkKBh5V8xCmThpJ9mR95m1C3pFND3HHp9uKhkhjqZztoo8Nd3zPFw7BhiceYes8X",
  "key10": "4qdP4VoWidZmx4iuUVaDPsZtor7Gpo2D6gQNnZ6zSE73cMpq4xdxDGDyjGHqSoiExB6NuKXgdprKvLoH8efbVnxu",
  "key11": "2tttWWeBmYw6yQrqwfddf3TJMUEkZZbopYMFFKjNTXoCiKBRKbQ5x8tVXvMbHcitM6WTTNZbydXRwG2WXawRuUgA",
  "key12": "391MyvS81rH8V3vesbzM3awHizjZnSMviY3ZodwnuwfqVrQ6oHSMwovB2iy5pKkkKXCsCGTu93NRnrocZmQtXJws",
  "key13": "5dMm5TeNuJxGhcpdhWPxpJUy6YyTPfkxW8Jq9jzsNGkEYwK3VA5efCLRqgG5noGcJYRXPhPcwmJqzg7YUcyn5kSy",
  "key14": "4xv7tMj3TfbkBSkvqxrYsM7DEThYcc8fxFAZgUGYPBPGcwpaDb5trLptfBJ4Suut4kHHdVcq4NHGWrSyEo4sNB8a",
  "key15": "4qfRsDgjxv1TaDUMXwFvNpU3EHKNG9AUek6SBwKQut2JRoDexKxAUbcWYo4FAiCo1o9S4uD7rGq84bvjUmGXQju3",
  "key16": "5dcT8oXnfkFzZ7v6dkhJ34V54vBMvg5Ud22sFGDH5L5GbKqKvGbecirqiTahSbah6r4g9xDhyNmSzZzYW4GaKVTC",
  "key17": "2ocf8YQ7cjFktTxWgzrmThoqFR7B7Hv8YoKZvb8BXFbovKdAQCj2NZjiUbFtGhNfQjNM8H2NKQDBxc3hryKYoLwU",
  "key18": "piqNYg1ThRjfUao1EafFwQNCstTNec66iNMbSfvAyQm1hDQhn1ua1wH6pwCt3VAHGgJvUuTzcfbDJLkkLQ3z9D9",
  "key19": "4G22XPuVZjKrh3xkiEjXS7TG6yZgaCxrNZvJYYpA43ZeknZVyVEHxCmCYjoNc7xKjB19fQ9WUWJoNADU3QVNCYGn",
  "key20": "4xMFqx2Gud6FnEAuRFbD1fT2aW7WD4Z8PsW9psPdKJfzm9Y6teQWRXgAo3VNKQB2MmZp4PfKpbDqfNW3cSWhpM1w",
  "key21": "5Eqt2B1zZVdFCe47JxAHEbpVRrcns7Zw6XJNb1FAQH8n7Bz2CKTPKgFG3bD1BAQCh6NTBuQnmEoyv5TpYBaB1N1P",
  "key22": "avJzn8dBjTxWjVNRJSfb5TvjAWxu2KnULsAvWR8bitg9M39W9HGMTL2YbmpBJg3uQTQkomAFiwspt9dth6apU8A",
  "key23": "2NTySEL7xBFxZhirPj3AydH2Dd5mKFwZJkFzVsXSGGHKtPtrWG1JHL5ZNv7VdbBPRPm4VcHurz3gz6F2MYjpgFGz",
  "key24": "3jmrj8bKMgfKSZ7j7PYizBRV44ssjtWAXdCUacVZbNqiH9w4jFvnbQkKS4hHFJpjN7VhmDmw8zAKbgKWjjuxG4So",
  "key25": "3FHgNsBPYPnAD5xYkoC1h6evTpFLwMXoYGgBYc6qV8G9v1zL7DzApncsLLN2aJ9LddAfUpBvaDoaDTuraivuTCjJ",
  "key26": "5WuEYdjteN43MMJY3JwS3822jLpEci69NqLap2cJoY7U3Zesx3aMPVjcZLa2oWeygdMTN7FqcW1FdtkHFVtV2mcV",
  "key27": "4gUMLQm69Q5ysNWMdYMMqCsf9uv86sxuaB1CGRJTEePkctNqB7Zg65fhZii3xg7kUYFHrVc8vrzhVvraEuUwq24N",
  "key28": "WQfxSDkMgBEsZyfzJ2pzVc2xhv4t2ULBVCxaJfcx2kvqrcNX7LoqYhrExrKw7a67zwZ8571RKrPGFfsNmMKQosc",
  "key29": "bh5QM7dHZtb8L59J4gwi5FUfj9UKnAFiBZLmsSM7SxipcoHjhkh22thEPEnHq1TERP2uZ6Em4mzS3Ve6iZ3P6pH",
  "key30": "3TQtChDHXdWkuTncvSeU53j4noD6whnY3paAAg5hyqrdsa177vvh3wXizF1GZiJtC6SASrouqJDQWiZQUkUuZ772",
  "key31": "5Hr8QP15cW99vMEGWJQVJjgbHHMkgDrpn6ocL7Ecj2Y5BRAaaChQB9UbogofnE6ffXb8sGAFMx7LypozMCRJbFEm",
  "key32": "2ohSU7ZAy39rkXjbJgynwX3prNgD3K4d8M5SfPJnJyZ6TypufJ74hmNy4UXtHQdtT958HPSD3rWhNQxE2BjeyHb3",
  "key33": "5zgKpZbhLyEEyViYsiXWdUNRDtEkCRrLmumXcUTtB5WquimpEW6pKD9CzctyBNS8RHyT14v92yaUdgHaHRmEwrmf",
  "key34": "5KxMbfDRcTP54CNGBg7zQRVZjKK5eGBrK9Geo5pQR2Dv2EnWv4S8seTnJUtQL44R1q2DqNdjFPLDeR4Y9kGo5f3q",
  "key35": "4ZNe52QckpYNrvgWByFyBwWdba6nyDkyqWaaL1fAK8tZ2wytuUtcJd5BJ5xRHeD2cMnLgLTeDg8eNdhdQkVjBCPM",
  "key36": "3grjSo5aaNvS8BYNZWFeD3p6DLjj2nWqvfD8zimTyAD82CsY9xjtoSt52MatCeNzDcHk4afZoQRqXDxXDXok3CJ3",
  "key37": "zrgJXjc3q2s52xJCU7TX5uXc2UUAt7idwJJ9Fju9ZU6a4G3W9W7AzqJyXLvxRkMa3SGpp4QokHdW6gFXiEgxrb3",
  "key38": "4B49oJmwKGXH5hZEc9Vsrd7nccuCq9s8tHdHUD6UBMbo2b2GPfHbd85EFxPY5TFPEAwEd9RYnGYZT2vbHwZNHHC7"
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
