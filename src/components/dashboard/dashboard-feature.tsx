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
    "5He9XYYPq3uzxaBz9Nq1PA2Gy7M6w8yZFhnqnsvUfwQYdfTregb9KHBAh6E2TpaeXKMJxn8jv5eYAvPgATmSLNri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kYDP1uCMhXbNoTdCEidbdtDnzQKVrPwuW5t956GMVaAPaeL6RjppDeiA6rhJ8WVhVhUASBHTeCcUjFoRPCNAA8d",
  "key1": "2rDXmqpgk87wrSLfWchpzoGWeHLGhM7yvnpa79a8K6SCZ5haXhxc1jNwdgrSWcn54bDqQm5a5rtigQFrmghdrfWp",
  "key2": "2CweG8oGV7LwVgzr86gwNwYRLEBz18i5zNYcveZYFUaQkEQth1PQEcbRVFaywtb1bT3gmtQtcZoCRt6zfHHfHHG7",
  "key3": "5KcPKnryWW37To9N1BB24M6awVKfo1T2kGG2nTeynGsShj85iz4tj4H5aYd1ssEiXR9GQC7y5Lm16AucPCo6mTHv",
  "key4": "3evSqAhwxe13akT7YMENdJ8EnkNtieTp7pe1WQ6Umd2yJnfpjSHphMREqFkCkkTiWPyweLLWvWNQkwZFCtpDrk8N",
  "key5": "35B1gj1dZZP8Ck69kXzhbKx9dxJES9Vabs57ixomtmn8KKh5Ha9jhuBbnsi3fjRw5urkDqCL49woDQ3rFzfP7apz",
  "key6": "543S5x3spPQY7rPGUDx5sDjYMs9AvgE5MAN78EY6kCivX1Fsj2TajgRRJDQu3cCxrTSdxsh84PgpxGDDALC8qF5T",
  "key7": "62fKHRov4YcdVm13WmnigwrUkrt7aZrkjmgCPJYGCrELAbfZUhka2Jtc6i5b2vbompF67rP5XEReRnVA95b2AwZr",
  "key8": "62nfM6v2xHzhhTinHBWckoSnNuPujoWtGAKEZhdyLnetbihKpcnSfUu2kRSnJym3M968vcj7asWYPs7MirDqyh2j",
  "key9": "4zjxSobRifrkoYDrTzjMXbYtFfFGk41i3m1qCfpeu1Fvui3CfgeNxP7udkUffED7zp8Ah4MymC8TqJvW7pbauvwg",
  "key10": "2U9PWvY7XVVCSwWtPen7VCf3UMujRepA6gG484VgkFXSPEpFbzMx4BWqL3dzeZY1J2EvdMt2VtPDSa7SXFwCAkPa",
  "key11": "53j7AsBVu3SjBidi6Q4gANgTLU7dWsf48EBsoknSjQpJjwgCLQYjPs682n54zaqi7AQLPZ2EiLBhF6EmQdi88T2A",
  "key12": "4ebZPmH42rvpFrKayBSxTTJwT3r8ERzJswmx5wbqoGnQLC8PDDd1JDrGFX3wxmRrjbNueTM5uggw3ipA8hpTUrpd",
  "key13": "4Ezq8VDReBbz1zZTdYqXd4fihvVYiABHhBuZjXPPxd7XiRFQnvDndcZ2nYn4G7Pm5NrocFE5LrYLVSG65qjjYMKa",
  "key14": "5BqnpGs7xaEPziY2DXegKE9VekTz4j7FkCtTFyHgcnBvANbV9299MRoaJAQjnyQvF6kZqaDn8Ln7zMbRz3NisVET",
  "key15": "45qv3GVhYbGkZwb11SyFfSKAo1kakAT55Wvk7du56edJmxTqpZne4ShVrku9N2zVQcN8F9bGeWJvS7wBPSg1jAH6",
  "key16": "4UnP7aGpTU4Sygy9H9GLvatdhMjCzrBMFFmF6RuSPQnpekgRgRau4gyR2jDqk59pp3wFX9GzsGTPferBSMXnAr1E",
  "key17": "63zyctkR5kAG4bo9tjftJvcj3NA9oDXmwDQ2U2csGrFWYr316LEpf4kxQnpivwoCyWX771fhbfbknJuuJ93nAEja",
  "key18": "3K1GzkHDRokkEs9nAx6SWVJouiYTRf7KbHyHfPGEHFGAN9UBCaSG3juzwkfMM5wL4wzbTGdkpGJWgUvzde5LggCS",
  "key19": "sxVDm8FT2W7iXvTK2JJf5PWMnQuzEcmbaxgJhKGDM9jcxfHxNYwo1SLyFchErkA6yH1SXXtFAiVyEakKmvtfi9t",
  "key20": "4VuaW5mu8mSRdpkidSWwPxWwsXQrxpuRa4jGLvDnY1ioHwX8xExTkdY6ZWaL66CJ6CHdcHSqWdUKeSaMfHWrDP95",
  "key21": "4y9hehvzvy9xmELVDRLKgwy3AGfk89dpPHYk8YmrSHVSrs1VMLEnJfybcmQm1vWYESCFtajM4LfhUEYwKrMmgjaY",
  "key22": "5sup1vM7CncZdgQxVRA6hmoizadUTNhDnoMvqjiBXm9kBsQ1SAgkrP189ibPJBmocncXdFrHwzzGvw5hyQPDVtKu",
  "key23": "2A4CqFqyFKA3XZTqhafFgkiywzKCf1nXVTmUwFP21aVwe6Lo5GG7tkgX3sV4FCs4vCaPyeQr81XHZpzcA8n7eCKp",
  "key24": "2vNm2s6KPbbhuhYGoyiVPpnqfhrPSWmguSLJJscCaE8LoxhPG7CgchkGZd31KJVhMpX98LRsRxX4pZd8gZXKMhmg",
  "key25": "24oEg6VXPkzJe4XcT6w6v7xLoGEjHXaVah5RbvLyAKzoKkN4cGeABF9hyoUPBNBsoZq9tRNTN9ZAswYibED9FJsK",
  "key26": "3Jf9SbhDK7MuXGdbLpzUjD6GcQqme7i86pthUXmatWQYEF46QQ3S2tsFxumXuzTM6kmEc4NgvCfDrY9dkAEmKqYH",
  "key27": "5U7W2YiuuYFpiE61aVaCiHzN7DxPzDrprLAYyUk6gcBGNV4YCnJ8EM5fowA5Y5Xa7PRQRZoHS9s9UJvsdo4KYYq6",
  "key28": "4jYw5rBqYCKHaUndoMnKoCRnv35UF9xxSQ7axJb1LShwaM3fMHbgZrPaCLfU2xwpNPukLbZC8Yhakr5LfFGbJ66T"
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
