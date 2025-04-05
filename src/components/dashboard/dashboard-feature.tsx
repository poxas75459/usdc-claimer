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
    "4wtSV8sZB533ZQfXZLLcLU9RUA76DXnbbnuRSAYCcyrZTWoE1uBJYKQNPjZpwSvv4HGkKk4CdMzM3tnLrbbDPQQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mjW2sh6YxW5USdx6MdyDKuEEdFtEJsGXbgx1MfXt5kaTvY7sRoLNjtEuqsTXn48jHmahTawjQMU9TFUxSXsB9Y4",
  "key1": "3Lnse2dce66ygBKw97GTQu5bFzRKWe5DCjQMfRm7orsoFUUBKyRW9wucDaZqLBkNaHYhaZEZfc6Z5QM6ccLHKZNX",
  "key2": "wcvwkp13w5fZ2CKxfRoUtgjj1p9agbX9vC9cCdCJN6TfeUBW72FCHuWooCXN4PHjRhcnWBWum7ysVWthFszh6L4",
  "key3": "4yLqzwKxgks2LADRCRPGwMeK8ja6ywJpsnQDx6Gu4LttXz36MygXn68uYzdQgB9uaoYH9cW9jDT2yQpX8naDa391",
  "key4": "29mc92UtyLwCnnBLXtGMokL4MFQStmcYdo7sTtRVLGq6ow6rimmi4RakfC7G1GMGBynpoutTdAdbRCC48WLEb316",
  "key5": "4ihLGT4WMXNc7Ua1GC3FmTRq3n5s4RLjGG5VF1RqFNpnVpeFNBMYrUhvWJy4Jd4uGFQ237JvSohB3GZpq6KdPyKn",
  "key6": "5mhyYWh7P661jsmnUkmkVsFiLcW1AQgcrshQ8n7pd6XpwtuNBniuVRzL3MBN2akEDoTxSCqTJNkKosVK9jYXsuaT",
  "key7": "4beaeuwrEiUNG7A6b7tomBMvZfRURCp7jkmzAVuyT8522f8sdYXS9FFrRiC6FeLW41acQjmE4b4iahXXw6UMiiXp",
  "key8": "5MWyrYxHyni7i8UQkcUnNB1hd9SoGRkVR5Zx3UDk7ao4fKmh39nHDHRaotTnoBMZj2223eVSPvDyNJe4fVTQAda",
  "key9": "4eC9khMp2L1K6v9XpFNNhwB1Uf5yBN3getsMiUNKFijYfj9ivS4GE5MTCxRyYDxXFgDZsia3VSGjAmgHjsq1tc5x",
  "key10": "3YYtreQ1Mtr4Da6opE2zjGDyQpHQHxhJRrs4Ry33A2nYxbHjBkgdkmsbA2chQy5fQfx5f3NJjQZFDNWcgh4ff9Aw",
  "key11": "21aGzP1LBorsXR2ZCQ9Bf15QZYVWTnLTRBrZjkGqFbNkH268Kzk2Ca4LuukuEG7GLZTQM2JP2rMXsJ9sNfaw7nVu",
  "key12": "325zZy3R8Vozkfe413Jx39p7Wg4GdqNYjHYxem9KYqStHU9L39wQK1bVfrEVJTvsBFJ6rG411uKRuNDYwpzZVNhJ",
  "key13": "n5af59VbryVka6rWhgLzKeVVPQrRm4W8NcAnN2jJJfbwnyLTJDakVcKUjuGA4WKkVhSRbSECguKfDKe7QHLLnFB",
  "key14": "Qu3KeLUpxgjSYbsZYAWacAV8b7VpDHSPcWECvSpmqW9JLAw3ZQeSfNpzzCcBqmAvAzTp2NhQSA5qbKnTBNCkoGY",
  "key15": "67HrkqJ7EwD8BKMqbiUXcfDuejFULYEkFC49ogpjeBrn4rgRA5iNCBodNfU6pizsjmwXtrS6gmYCub4jCSwGEkCu",
  "key16": "2DSkRiax75eRWL4dS9Kb14KqztoHFLQy7mtbvN26BfFPiry6VbrPYuMk9ysx5uez4XaWEWRCWwyifhKVt7YVK34t",
  "key17": "3xY7hFUUUmASxwaUCBu7VYQatAmbPrRAt1t7Dw9EP8fJBVT5gc6wYYhm8hCCzvJ7xRG6Dfz4W3MDKBrcQFdXiFAY",
  "key18": "2fgZaToQ8gYNb1jq9gP3Ur57svgNWnTCr4xsju46dBC1ByrjaWBpcgyCGjwmtQE5pQiNAtEqb4AAVwA9b9A9d54N",
  "key19": "cBM4GCpxRkcFj4yNVR7G5FdxgZc8otekjweSvp26c443ozjt5QCh5mc96FaB6nG7fYcztukdurpSwtRQYUyCjen",
  "key20": "2sSv62QnJKsC84hgE1yY3xp8K2vrbCfRBmdYmsJPrkSCvp2YXf9qEUU6fXxLaxek9jqCSAWKGnjke3Ywbq8hQzK9",
  "key21": "2mxLfarD7uDxbFU17qqbcJU4ZqaHydKDWEQdHFWhWZbj9MMxnyevaGEySquvYGikL7noMDr5orLf1TfJJ1y41YAA",
  "key22": "5y53wSwbJ7hdPskFsuPZobSk2c9956LtpkfhNK8EYp5W1TbRSKcDTLHkbTWpW7qKWP5rs7Yj95BjQvHb5tQnNuJu",
  "key23": "4PE7CYBJbQq7fEbRNnYptAKy2GvMYCPPdvjFexLqKvDASf26RNrTKUEUnLDbUAWm7wxQjxUGy3h6WgYYC4RyouPd",
  "key24": "2iWBbrC6BX88jMPmuUi8A2VqcpW7LA94uAicKJ2oFDtFdeQxWZR7g77cNLL1g63igbBtMnprPS4XhizDtdT1DuqE",
  "key25": "2pnnuXaCVXyCsmJEB2S8WTHJy9tWqdaCVz3xTSwzzdnFyDNvb1EA8iL4P2GYrEzPar7BxAUNtghgQEz6b44671r5",
  "key26": "65J7hxXqC86Qr46Tpfj3YzLH2HWo3UVkpnQJdUxZKcDrbkbkccNow2RbmcbEyJc4sm6NRuLpAhyHEqk9T9rQPLEQ",
  "key27": "sa2kM8fQK4Ngmmz2DkviFz1zLL2gTLio4ieha3ALzZeV3fsnoxCwykPW2n6DcAdW9jCYG8KmoCn7W9MXTaZab65"
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
