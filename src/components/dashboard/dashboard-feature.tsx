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
    "2oj2sfUGTyK2xgXso5vFGrhnZ6be9yhkBafzM6z1nVQjXqVFEyYAwbMaW8z3ZCwRYJgJvgnAb1RfhG3GpcW4zwm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tjf9bcjtmsAA6KeGbkeXxLKwiwXcpb11PBEnbdntsTrybkTWMt6Ezn1EEKkauG72EPNfoHWhW2bAV9KsVACCPXy",
  "key1": "5z7hJZLRevtoaDhxUnLsDVZM7iCqFdMvWX5NkZCkZPfj7uHDKuAKW9mKWe4NkpHLa5EH1Wvq6MEvAjJj9HijFHjQ",
  "key2": "Ta7fJnXZq6v8GorYs2R6yBtH4xKbczrkuwFwm9quiN9SUVyDoxAF6JJLGeHsRwEtQG2yGHuoe1guZSqXrZr5kxM",
  "key3": "3QcG2yomMAZhD4BLRo8qYKutMmwKTcHBp43Uh1P8rnhP4HFtuefSTNCEhya1MJL6irGp5xVQ7PPdk2TqLkQVZ24Z",
  "key4": "5esqyRCNEXLy2y42PV6uYCb3KoE8rZgWfzLxmo5SKBHcMgCkEh2L4ARpT9TkvRzFDWPg4161aaUj4iQoqr9ZWcUq",
  "key5": "3VRVK2CPCSuHVLbrbZrXZufiPCUS1WqdU3dwBbbwGsmrsacpmVXDYa6PCMSoYu2B2H1YbTLVzCN7p7u6N3UffaEA",
  "key6": "5Y3vcUjxhgmtLcETbLksEUz1XuoHt4rCKi29J363DWdAK576DBjn1vrfT8n1cekG6gbneDLbNNaVs91Y96bFf9DW",
  "key7": "3HAHuwhXDyLq9w8ZeNsHWEYAsSC5ZT194Ys5SiqdHw3ihYzDpuoXkXH27e6z2ZgeYZn9hFUuk35StJTEWu3tHjQj",
  "key8": "3dcemaLsj6GNtRhjDEVdxq3E5KBBf8jZZdrizsaWvqcdYtMXkknxM5g7u7rF8qDHHcbfz6SsbKGc2P7prFQzzbnL",
  "key9": "4FXc6ko2bGzvJztZtr2A3D3PFJVMzBrEbwhzyNjDNjgEiWESb25acqVSzvn3twioGNJTLbH8uVxtzNbAuYc87moS",
  "key10": "2GmbuqF2TenrQfMc8YRSDiyi653ETbCDiinw6v2CE3m31hVGPxsZLUVfdepkNzEpnpJVJLqnkg4hSvLTWaMN9NcZ",
  "key11": "ys3kxH4HsRfdmMFwJMvvEhRUdqu4EwovLSrN5v3RWEyoPQmtm16AHxapmh2pmZxYZJyUHTsrGX3qeGcZSf1g3yM",
  "key12": "5hLfJWqTFvGmdtaKGT1QF7gTgE9T1m4jeX6BMwr3PzzsuRHcmyKDKyGFkczZez5aQQr2MkR1efYknKLpRnt1Pqve",
  "key13": "3J17vMCmfKHr3KY3Tz31GRtuBb83kXZ7iHCtPmpxGgiJFTiU3LCZWaVdTjQ94UCZdnpmzXJSaTSeSbtZ52Uj69pM",
  "key14": "2gzQVwW89Q1qfPXQzpTJANbDRQBwm8mg7kGonmxKbZn9cmbgn1fhwjXZieYkKaHc9j6zfv4e2m8Pc3WCpvRsKSnd",
  "key15": "5GUC3WvLnkqn5PmkcHGd2J5mJdaYMrU5tyA2bw5J6p519VJCc87ekYnXg9XUFHtb6Hri3LNtohNTPLGaAW43Ekvw",
  "key16": "j2qEVQP2ZiFa3MNs4ZhNSqseNuFAEU89xPLufq9YMa6FKNupqX2gVsg6YAamFX2yimrhEijheSwzrU5Jy5XDwus",
  "key17": "4nAogzVuDV55eF727UuWfBioAYKk67dTvHnrhG53mSQzeiwqTF3J6Y6ZtYDrjksPN7GSmRhoPM7fLsQasWx1wybM",
  "key18": "42ouNe3NWMSKj8vPSwjdysdo7HK5d46JGiJ1wTBgpfPCH7E3M6eT9vevURLHELsSUJyBpgnvifmmtEe9RSQmFQYy",
  "key19": "3ZxAWyzipSUd2DU64P6WycbNnVdMvQnpxnP3dTDdbks5gJU44vLy6p5rvztDdCrDXn7qQY2XMvUVUyYgCUr2eMeD",
  "key20": "27rb8StLwGN5CQQXcYkCUMsLNAKCf4snFGiHQt7GFo6KEPV7PvJBYH3vDprYdR4T1eoJpQyU3RwTb9uoRXPmmAFw",
  "key21": "4ph8TrrkTHWU3kDPJaxmnDLbzHNWzXfuicxRqghyaocjsbYyfpyCCuousBAvCzUmfZuS1n1jNPYi6nZ4rPE225h9",
  "key22": "4MArWZiux6Khj2KhtXvPSvYY6EpTUq2EP95f7PvPYetG5XREN3ycSwrpu8JyJ7Y9p3UjjDa57JNMZ91aR9K2w4rn",
  "key23": "5FBjAadCHyQmN6b82A13P49XRJY2pcpFrXaCrurnL6NQnkcPJxxax6q4mCgw6usJsikZtMDfQtJ4bCPqQ9pLw7wM",
  "key24": "5LFGcHHrrYv4xVWcUcszQkEdn1rZJSHLBUz1zDnVcTPpXZ5oYJ5K4EbsrFBoDgM2aevfaGKCCwBZ9d1yPjxRmMDf",
  "key25": "2P25k64c5XH47jAYXRgcSzWmb2VaGVMg8z9jKgBCkz3Q2EcizFkMYytjZax5e7GZqovBcyHyme92Mzsirwarw4yb",
  "key26": "2V9AAWne7CTJNBiuPhnnqDNUPsztQgTfLkH2VYKFDaTmoGjkuddxVGvV3dRUSSAADhaewmCZmEsJXtQV1jwD2EiA",
  "key27": "4K5z3xetrucdAcParmYivsX2YrmbSxnSYS5zhqSCbVgTDK6StYCET78PDJY3BiYCc1rMNNH1ZXqaED8iyprYLBDV",
  "key28": "3jvQVUKGuf9w4ca6W8LC8KnsKBSDFRGvKrPKspBTk4XC8vW7MvXyVcjPhNpNwD53CPzNXGzvw2PUnFZTq8Nhib2R",
  "key29": "3cjGBMuBiEewBGgzi571MDcVMBaje1N8DrBNMMZZHs6dYuRVUZ79ikxbgCHS6rnwZeb9SYF9L8dvodohCFp7wai9",
  "key30": "5uAL9ijKYJ5V6fc3hYGr7icVgYjgs7yEYqDQvL6TYCw3x6bhoECLqYAd87M9xoZ7f2K4APNkB9JZ3AdkUwWnZCgH",
  "key31": "67fi8NZUvacSgdQzj1HzKFkzLvK6RAhpZqbEa2PmwpuU1nHVr2BWzw12QLXgR6esdF7AgwU3mcDvm1aBGh1in8vD",
  "key32": "2aVjaawTT6WY54zH8M9NyfMqNJbJDKn7cVxyXiDGJo7Rs4kfDxGsFhmLLRTrWNjpD1LEPmCXtxbZ42nimGjy9ckd",
  "key33": "TtbEq8d61J7ybfKCdVuRVH3mtkTUgqMNrpejvpFpM2XFEpRkB9w4RG3zEzfngJo3qmUZGWWa3Hc5YWdABuXgWuz"
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
