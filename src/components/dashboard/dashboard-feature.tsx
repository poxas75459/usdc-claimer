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
    "5uXg9LxopufvHkoF7L4CTkyNvHfVGssPYcFD5jZ33v8eKwS2nWDrkbGd1QDhKKrfV27S2XF64ETAd8VB1ymkhML7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GUic1gzgKo2EJKDD168sxsiNZUqf6TTg4a3YbagJBZw9HZkwh6aceKu9TMaRMhrv75jv7D7Q58yrqM1MChYtpCf",
  "key1": "4soYv56WbTBVCi5zWNWXoU9d8Z4ne6AWeoxYRnFMGJZ56tXFoxaaV5TammF1oM4aBYRgtvUFaG7oG9M1SWcNtKcJ",
  "key2": "2F8JJDVRi3A6qDZUZoeD9h94dyu5AvqU8S2dwvgaTAj2aw7dNB1b9eJ6mEYeYNtoDJdPUev2FZS5ke1MVdr6foqn",
  "key3": "2Cv4vwdZGRQ9MUSM98VepWvEvzSxGVd9fUbnqbx4RcVgi32iAPEG42PAPzgTaeGmHxtB6NU4Fsk4M7QhfjBMuVNo",
  "key4": "4ivyhyzVJTM4jjCptCSshf8Vi8XuVi8ncjDs5koZ4kyH7rjXTfJWocnhTyCNsy1r1RX1bys4KNjiP9VRX9ZSweTF",
  "key5": "4EpebtQh2Qpkj3TmXn2ScqpFMt9kLNEJ2mhxEvNHZJD3Fw3D5aYQTo7HhpRRTA7PfP66FhcKu8tCYXxF9XkNNdC5",
  "key6": "1XSjav16tGRKbzAokFstv2BnUeVt1XHWZ32vHXRG2CX71FXzEEPQKpoBonKP1AuqphWxd6Mn9mpVFBF8h7fiJLK",
  "key7": "5uMM1KYcNiGLXyem7QhR5z5PQ169dd5gRmw5bifhA1jany4BngbVgNurKu4zqfWhsrTAFNcdYu1msUZJWZi3Az9Q",
  "key8": "3CjUZn4HusBQ8VLETzh4m7nLtLppNzqRaaFBcCVKmFZT6s5rzfa5iBKpWcHdigEEEuseLiRavdsaUshZy77teve7",
  "key9": "4gELby65KMXDfvPurcJpAhLoyGJK3yQeNhspzyipfBNgWUL5kGAyhy7vinTeCQr1r7yPoZ9JBkFwx1TPSmymbmfz",
  "key10": "2AqT4eqJQ49id2o8APjAz3iCLUcKcBAZzq7YsQ68ESRDt5WcFRN55Do1phobAj6hjw6rpaYLWmCrCWqK7gNpFiAM",
  "key11": "4WBdG3P6YNfwGBN3B6Gh7fajCW3WSHUY2NRFyKcTnU26NXMjmujmJHLBwLKPH3kWL2Bc9ydQNVkhVhsA7mMFiEiV",
  "key12": "2B4RcPTP2QYBeYSbuemzvhuunCKaGqt5hJaZruyUaCFHFTDovcKUsjvXWHssDobHnhij8djjAQ52prSrYMh42bDi",
  "key13": "Zcvk7kRprU2EJLDMPfMSnxMgjD2wv7dcCziZHDij6vzXnWRQXak3e9DktATr1aFuV69bGGAYDuYCFrjDzMVsRms",
  "key14": "5wPHvHcPwN9Eptb1EmFBiUUBHiH5fQwtYv9JJUnvjEiWTur9fvuuYrdHAj1Z6d5h2GdauThNpxYGqCu7C5EBwF7p",
  "key15": "4GCKVLedVbLueYLhr1fmiE1HR6t2oZohXueSDkegWRNzDhHNXiR2ppUJEDFnGUvmdBNxVmcHKyZVnBvqc3wURSem",
  "key16": "yGgdKPVBFCnm8h4ZwGPLFp2VyLL8gdQwrUYTeNP4JKQo8EKW9jTP8mkQeyg1U2HMNjBRjeLn86wufbyYmEX66rZ",
  "key17": "5gpvDjnSQyjf7HXVAPqwbTPRVS4MqrCo6CwiB8nDPPAvFApPXX9UYvKd7CkvnwLux5gz9E8PMxGSyeEpYvBrdrDU",
  "key18": "2wseeqbH1VTJnVt72gkcfFC5vjMcQf3ABAXpG2LDtwxSpW31UJ52qoihx6AiUuA9nUyC2UcfSZZG8pyAPXbcFLMA",
  "key19": "5FHZz6bojmBnPz9EwDT47kcMkagS4W5VJcD5XbuABEgeHkAR6XgTKsNx1MedfViEDg6xkcR9KqgnciHS4G6onLmC",
  "key20": "LhJ5JEJd9CYhsa6dDSgLbndqjGHvo53tMCjoz32BdnR85HUWwnfsrCX3isgmKTwf4KpLrBhpMDw2adjohHk73DU",
  "key21": "brKSWUkMhW4xgNvvXB6fTNPymps4SUbFso7KLunH9PVmcWjM513zpVieVM4zEY87WRguRzfU7wtkZ6UciRkmCPS",
  "key22": "2V7aPAtEhZPeVbYYBSvtvvqQg2jciXxwMsA3idg3wTiWFD9U7yhvbX2PnQ34WdPnPbAoXudqch2zFjCjYPbkyAR7",
  "key23": "65545PsBbX67rfz86e1myMmgNk68kC4nfi1Li3Kf1dKx63Fy1Uv5iWhuPfVN2zSUvRirju938rZK8wifBYvtndeH",
  "key24": "2deruYCktp1u17DfdmcY4yXYvUUuTG3Rj1TQNKxcYXjfGuyb7u3UGRvtJB9uLNitVNnoi4jyFeuGGuanUThyU69k",
  "key25": "5ziQ6bf3ueHDdz9k98TDS2cyJhyrTpK2jQBWwS68qN7NPu5mTygpqW4qvAdxyrzvAnuWVaYXTfyxEwGw7BVtjARa",
  "key26": "67kXaJ16s7X6Py24Fs5qSUHDETRuTvSnN7w3KdVAaAxVvmKyNtDbx5QDHhy4AV5rgsMwC8bzisZ29pL1bZFW62L7"
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
