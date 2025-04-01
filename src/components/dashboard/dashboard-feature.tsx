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
    "3skNmpp5FjX7gboqutwYr1X9jbaAVhwM3ox2qQ8HGkwevzm9acX3LxkgAPVMQW89x6Vmm9chuAy5eSh2jDa5z2Z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P5yHjuUXNB5XFi7BYEzmWmgpxYyp8rnCyvEZqhbc1yQvojpicxfe4BAkCqjFpUBRh8tp3cWWkJeqyxxRQsT6o1k",
  "key1": "3yehyZnFBJj71dLcDWH55SHPR3fTrpmjPJ4bqX1hN2z5BEBAn5EU978zHa7gtQ4fJ1J4BooPtrf17hFggQ9mtuA7",
  "key2": "4d9a2UerXBz4CUWmrPuPicFjqLvFhhBAUm2JUTWXMqNZgzUYFQQBPbGrVwvqiDNiW7Qdoax34mSY6LsTBSDzjTL1",
  "key3": "5xb2xEbrwsaVNcGUUC2LxKcBrowdt8yLJfEb4auGW1vPif4uysA2h8Nz4p5cDFSoc1CqADWsq6jU2ptRMoFe1bi9",
  "key4": "hpnzyiAbaTbXCAmKSF4qrttamAJfwRvWC46GcvD278sM4cQat7eBeH2nhdFpWN6nc4vkyk4Xaz2i28Pz3emMDub",
  "key5": "4anrq8hVpr2yRsLcPHN1vKHkoaP1qDzULxpcyYr62CvGLgHYCghxRLKyBjXnHmuDUa5PZhjFaQGaPghntsC4BNP5",
  "key6": "4hnwSqjwrPbHysaDQcG2Ks3a6PBm7hoM6iKywprdDociMa7K8Sy4bjD3mJRtt315oQLW9AmvHxwVJRaNPtMrXpLH",
  "key7": "6xxiZP2bVKsYkKD68SkhQxbrnj5bf2brgQDY4bNEwdK5b4ahY3zjYBagGc1DVePsywk5M3TBd5sEq97QJ63jPLC",
  "key8": "5s9WT8Xb1Lcf1ysvK2aWc1EpAqG9WYGh4HQC8sgMNKbYKjBKscJHSRQ4uWgiW8acADCWfbejHc56gBPWtQXsXjqX",
  "key9": "4gQ6cR47RWQp2oJ9Mym6Nvm5YYHx9GwMX1kHuDdyF7uE7vGtdgyLycmmjpr4rg1Wi8RAev1w5sbT2111Y2uexsZ9",
  "key10": "3HtakBDdmocd4VUrm3NvJYwN3DXGgnApL8j9L59nVckKUpupDFjjRG6Z5WC92XYEzdN9TzLeQubasPcLhBpCt3yZ",
  "key11": "4sE7LsWdy53jx3NwJqYfEEDww9RMgk7RAwWA2W7Fr1QuxAixMgQvyn7KEfnJubF6KeZ6tAC91EMocnij2K4j9Mfc",
  "key12": "2V3TYa5HgkFYFAYAfscyZRB5VwxarT4aQyHL4pnDP5xqzBwK9ZtDaew6FwjCjZEHxSxgLfAydmSeudS1zGoPgFS9",
  "key13": "23mBe5dfFaK4cZH5sRUppw6iXu4WaDSzX74ZFw8REFrj2BqfQ4eAfdbZGsCv3SovyCD2P45dYqHML25m8tkYgBCU",
  "key14": "5HvuTsxmkiPG2oyZwPVb6cs355vVwybbQ17PSbqyWjS5gxek6TW1i9PuPGvFhuLaEK3ebJj77Z39kthw8kXZ11en",
  "key15": "2q7cSR3FeTg3BQGHxc4K59cVuy92AvKY6tHU2qzmzNmJ94qrFR5X5NNp2mntWq5jXfMdPMHpaTV3LwxGx3bS5ix4",
  "key16": "5hATf5T5LBJsH69nihyXUPXwrfwMcyJDYxLAkvogedwi1QamebkqHCpQJLECEHpw3HJcm5P9uoeEjDKshjZaKdTv",
  "key17": "5iBC2uUPNcsnj7AaXgXsh28cG37NNxkQ3XukepEvf1yHXjCJkfdiNMwPBKi1nyorxNqKnxST54ghxd5Z7fPuMCYK",
  "key18": "4C7nt1U2kFGd5zsHSZ4m76eaquWendPP1ETDGQfuD8rD7xynSvDTeMx4RkRweCVHHwbTKELtWE2UaXhhMyefHNSd",
  "key19": "3SKxh25CpvHGy9i9Z5ZLm6TmdjJjpQ6ZVHjwDgTLEVwAPQVqikzVoRLYv39sKcWxGLTWp2zDu3ZDvqmj17K1KhD1",
  "key20": "3L9jVrvGQmqgd2BavpY6tXb28BF3BAgZaLSbayTFRA6GqVEd2d11gsuf5eRSHWvgsCy1AUDBGLJtATWhR4Li3V5N",
  "key21": "3P5ZhpN9dEnKPa6B7JSeB2nXMw1DuyQ8GqSG3Uvnf3gCvVHATgVDqJ2vaKFFXp8huYLvtKNbWnxzmyHcy6DBnmNP",
  "key22": "5Qae8oC9Txvu8qXnqF8rzFUSjjnWzfGVjhhJCeNRri5nYCN3JPNpuPg1LdR853ZeHTwTSYYpwMicY7geXAWJryi3",
  "key23": "8AduCKZvQPtHdibdT1J2QUjJ8Jr1KKaj8Z6aFUn3iqzRV5JPpeU4GUGbeCgTDyfTrAKoWzLZiVaaXYw5xTb5qpv",
  "key24": "4ayfep3MuNZrfheKR5brrpmGagfqENh4btPszEVDaG2aDLsZHH82YFsBDPoh29x7xyxdF5ArevsZDyAt179fNNtq",
  "key25": "2QJMXvJYpvvQoGnEQurxqr51A8qRroTPEqAHAPreTLQZ7GWEafwD7pMiH3x4yhGDVWLDDF3YwJnLDcvBqVr2gtSf",
  "key26": "5x1A1BtyckVToZEXR75V9ftL3hwT3U6pf7GsEbHBdJHx9M8zmPZMfJ8UeQEzXKCGNkfEj3WS7ZqkrhVi9Ubdaiw9",
  "key27": "5RToG7viZMWz3Pr7X9QLvH867bYUSyMueDcBgm78BVJLxp1pBtuvoUXBDjWae1UPDDG2TuprQMQcqtcMeP1cJQLV",
  "key28": "2oYNNRRLVjZSYNckZoEp8rGrkQTEekitVTUbFA4tUuYEDvc52AaWgv7sKt1HFranwK1yC71Mam7QJRBkwAgZVYWw",
  "key29": "AB3LxTZhfaJMenX6WJthiNTq4HQ6JHwMxYaBfyDTuRfrQt2Lu36acThBUTyegzensGyPZesjPyvjfBpFSDXUjZ4",
  "key30": "2bSLcf17nHb5oKfNse4Tw68nCmQ9iEVK5PtUawCyEqvqqyxuwLYER572iEd8dePCVLsFY54rBT3zq7kMhXGnEuVd",
  "key31": "4SuQSPY2oJSySnx8WuBKA3d8VnqW2aaiHqW3oGiH6RhQRvJzThBw3NpX8tsQSVv4CtJywuYEaSPU9DSrRr8Aje7U",
  "key32": "5P5CC9NPR3VPynhCUYznPRCfmkWrLnA2QdvG95nkVKV6119NqoSdhgeDJxZ7SMazNde7JJfm7zrZWHK2P9hFL8wk",
  "key33": "9xCC4LqhLKBDSocV19eu9VG6qVsafr94YH1j723JVr5qNZMcgWummFnJxgvZq21fubtBQ9AHUKGw26YTitjE3pY",
  "key34": "ivzdW5o3QpEzVoer2KU5c8yHzEsZMfE8LXnCfyb4dPX9uRsKEP3r9hbLZDMDdjD5EYqRH21FPQA6bBv1rg8ZoTS",
  "key35": "kwoZ1tY6MQv4z45spxYWkNpyG5XSsH8mJo5YF3U2f1bAPjR424NkL6jbKp7dUe3Hj2KSX9psb2VRBLnkdGAByqt"
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
