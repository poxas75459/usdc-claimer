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
    "2LWBfHVARe9dxWkWEdEojpumYddx7czEPsWE9rf7TEt6o9KKQZbkBFcfncYQ2wdrh3NGUWBp8m9zm2QjWUrEQJ4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vFZKcB1NEnyeKM4x3WN1V31n1RisA4PWuyc6uZmmUMo7pF2NyE6PixBnZEcbph7nVZaAtJWHdfra2o36VJkmnRU",
  "key1": "4f2WpJ8pL7kGKuCXjMae4qGp1jC4nUfi4qg7rafiyGHPrdpBvHt3XzoZvCGPbC5V55ZUA1qSAFT1mnqWkjNwZo6",
  "key2": "2AecJZfCJTto4Hdog4UGHKwTRDL9zGeu8U9zdYMKxveom4pKs5hkDanmV5c9ojYhk4wnPzViphBcHke7QKbgrKRr",
  "key3": "5KaDWXs55uYVtZrxBUErokkFBKmgyrKGK2bu287UHM11xXZ9dGoc55kPoLfmErXM3MJsbqidBLTH4GYTV3Ypv7oB",
  "key4": "HZ5zy2TgBbyapnyYwstzvRtqgUc5Qrde6fFuG8iY2EPwyP4edbPQZLu86mNAghS112Lz8zM18tQSihJGBosEvS2",
  "key5": "3fJSuQ8xgb51gAJ1RfGPU52K8rYuS5dPyUs3DVnhGKfynp2so93GcguziyvyPw215rfmm5cEabCe9dofxff7jP4a",
  "key6": "hpXXykzmB29d74YHCyWWyctzbXuYtPMcnv2vG5yx5AVgTTi4gv4Z3uXeFWNeHduMd9LbvSpvT5qV8559ysfuZhw",
  "key7": "4NPQYAgU9PKvmQGZuti4huKd7GQCacuPgtMW8caAqv8Yt9TQGso3MTebAhpkADQBDvcrYdjPesiQFQpcuJdZUu5m",
  "key8": "53r5GzBo5LNBjPSJAtuML7zvDt1YTSUgvZQ4EnmGButvN3i1XdfAMMMzvmmx1GjC2NvAygoUZctharK5SBLi4xdR",
  "key9": "2DcnXmXcriXRHG1HSPSKhSum57FXYc9pfaVVGv29bnnDY8rxaumcoRdDqdBjAqMfj31K48V3HsFtP4WMBKbg1aWx",
  "key10": "5Z87E2zzJJHXC5qWb7WEbMhWV7MUC3TBqv2F4Wh4hsuMjheQkt3LexD75XcHUPEMkUGWjeCD7Duq3LXJUTn328ee",
  "key11": "55XtDcWeWREZyKRSZLsKRh4b1akdVYHmk3iRVrv93CpzJEZRYbReboTYH8ujStztsExM4UMbgVqpifvxWFP97VrB",
  "key12": "2FaS8Fji1NACgCoNVLq4f3WWxzLHUKx8uut3CmPQjq7JAg8tSCMAjmaECDCswvNEZBzAm6mW5T9Ys3X6K1NR2ygt",
  "key13": "4nLUcFZvA4iAtJNsbrDKspgySDGB2qJ6859giMtGDhySib7jG6KFzM324QzfmcGqrGYRDndXLzuGhKVEVARnMtBU",
  "key14": "QamXBhfy21KmjpTtyEzSuz7wfLxCmnDatoB6CSLaJcXYXBA6Z1hVJaRwY5uTHqSZ9LdPNTUrrojKBdrC34p8Bav",
  "key15": "4aMdZdTQChYYWDkfp2ysABaebYvuYXVxz5Rp7NBGcJPKv26HA2PWZ2sngvvw3QxzuVKuknQzTKzmfAuhbw8mSrWT",
  "key16": "3bvGYHoPvANia4ZkaH1J1VgimDbid5zs7SipniSVFnXMxXYyCdsKga6mGNPVrPvaMMdHH4oY5ApvLsZXUq67xrxJ",
  "key17": "3GV96r2VKhZ4gLTodRnTBpmxRvosUNByYcUFykSqgy1dcX5B7mQeMLvHoFb399gPgASPFAAfFMx8rctr5PPk2sqf",
  "key18": "42GEP1hexgb6WbCfenX4P1jrh1GVbt93iURksRH573PE7GiRgZTbczqtPUipVkL3UzL6uPicCkud7hR44x7pNsd6",
  "key19": "Mfo3w3EKiWSvwHtopmLBfwW6wvHnNexJhcw9Uf4afAc8oEmcbcZmvftTaJsGfffAR5zAchF2CuQnz5Uv4LSmvW9",
  "key20": "eU2hoZD7G739czDcL1hAmAFhmaEUbBmC6uGKm9co4QqkN756Rqf7TDKwx3CqfsHUVcbTKxakRh4Lyxq9zCniJ2u",
  "key21": "3s7V3vXAuC43cnGc6hWKK8dLJughdVdtx75cWeagRpWZMEb9DwhqHRML24g5RMgroGLs3C3S4HbSms3Jg28Vhb6o",
  "key22": "4vPctSsjkLE8tQ7b5W18wa4Rm5Z2d9DwoLES7C37L3HDiRM43PbvhmXgd7SXf8QGDigYRNjbnVrBgjjvDTFKDrcq",
  "key23": "4FXBjR7rY91fbABJna33JccXJJVLEGqdjMG4YappKSB8a6GwGjTFtwPxycVmRTbXDkfj8j2uQortFBLdFi9aUxSq",
  "key24": "vub5wbwdqoAYRtx2ogmP2MXhHcr752ZrDFWiRvDwDs6tZgMQTKwkpLzPcwJtERaQsMyYvjERDFjNMjfjR4yy61n",
  "key25": "8vTcAdoycpncwaWGk3xQKGMxMoREcoCGboYZGXgAeibbNaJQ1e6E1sU4tcW65c1QUwZb8mxAtLH2Go2vD2N1eR8",
  "key26": "5XmnGLjFBnGSspdX1EWbjCQRE8hLQJc6eXfC2QyE8sfD8EiGaZ6AQUTF9zD2ByTiyMEdjjy3BuGCz8UWH7aZpkVc",
  "key27": "3SED7uMkDeWJphuyx1qHvehg6t3fW7LvQob1gG6c8DcPya6PMiMeCTXevAMWp2JwFVx7PPfso44nsVW2KzN7vAkm",
  "key28": "KWexSDDwjAGp3yipcHnq6vGwghHu913TjYDFsni719nDLJne1t8c92BqRvYcdLwpZiWizqeRotDV7ihyPpM5ryd"
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
