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
    "BDbzZaWBiUPpzpyhBYVx5oWg4tzrB9ez86A2uPFec4qkhHGsp4uDanPMH2tmYJmqQv1P53AsbkZz5cbVHDW9v9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24C8oUrD43NnLoGFVxcuomAirB9p3kSbvYoJqNoL9qcsoHoaiwrEc7hXoLNxTZqt7AtqrjebqkUQGrDvZGuFgmfo",
  "key1": "3FA8YN71s9xe1bJ83TrZej53hFVKnzQTZnPVPirJQCyWzQEBazPxW7LjRkDr27mQ15kwCgjFksW8qVD8HVEC9TWy",
  "key2": "3ufAWXnwDMpWSgqfsCZ7hZ7cE9FrnC6HVSvTLXzmcYX98QNW9nFmJ6XGEfp8ThobGocyVtpjvFAh6WMfKBPncZw1",
  "key3": "5xkUsPSMWyqRjg6zqhEoXTX5vZpnczu7J6M9zG7sHh8hM2WACQ4P758NaqyjVYsStbxUQVKq6UHFg8UrkhT5mDJU",
  "key4": "3SMCTpFNd2W22HSCN9Wy2yvCMSvmHrNSAatELs5tGM24WsUi7htS23Mqr7pkZ4XYzN7a7a1mmcoo1xC6yB4cRdb2",
  "key5": "5poM9CCcxtPA6Ba1yzgUGrvwEw2dWy1iUon8kuJbGpBQShSz5SvwqcyDgifyVcYk9cgTawnxsT419Km2eoW8yxZ8",
  "key6": "3DnEhkL7ReYQu7iskfzBzCEniS2iTm86PMt7puxjQ2n61ycFJAaooJLegEh3MEYdyoGAxwYgk13U8TNqevnpnFpm",
  "key7": "7mNocjak3Ytrf4pfS9xBvnev5tsBLvHUZFiYNv7Bj5DU8FKvG2xHuRcfaPPEmMxZrxN7qTmQqCd1irC3HwbmoJB",
  "key8": "XjG2nkAAscvqyADUkbZgTMNxskmEV9yjtzD3kNMVhVXLSDwZyL8Jfx6rtdg8EQkxoyLCXXJRu6o2dpbMRKxAYKS",
  "key9": "4MKjsnCS4CpFHPE1PPdDYYqNLbZWkbniUKdMDTkMEdSezMD8T7ygY4jma51Ntwgo51wGRztgYcesZefNQTKiCLcX",
  "key10": "QNq5vrVgsiEdWKPSRHefMMkPfd6VaEY54PgK6fNk1UHgikhptMAHhknEuuGXWuAA1oPLd32xaaraoQuUqM58QRr",
  "key11": "5yG3CBduNEJzreYotN8bPgoAJ7p8xNQwfh1Fog5oDkBsdP4tkpGGs2UByxfZhLvvLLjHedgRSuUYPMocNwKmfZMK",
  "key12": "vNfdquxN1zeqjdjanaWBUyEnxrKBCAsucZGK7PBiYZexwAgfy6ggNKx47M9dhvUDo5Vs4MaRMQwuDhqoaf4RtMY",
  "key13": "5oUoLn5BJjX2ZXxJ6mdqqVbHsaqzLgef7NjRDffqvQpGqp1KyE2fczXe8T24yYapkKc7w4wxhbt2hERGRnS28vJx",
  "key14": "5W76MdaEbG7BZhrKpvXr4wuY4PVXuZw74ieCigSat3puarGY54z7o1tPsq555JptRXSacBTC6JePkUrRHHmYxfDu",
  "key15": "3LQ4Q2LVC1MF8fpsR1F9NfGRkAKW4yBo4dvqaXwJ7iJ4eWPccDGuNzyNCZWC6ypJjD7ZGcNPr2ZW8VZotqAkQL31",
  "key16": "ZgqJX79mBR2v19oNG3KgbAi4wNNFEtw4e16qox7KcfSsuJvaakaXQ92b3TW11rASpMUL4F5DeBB7dLrMNFjcgrw",
  "key17": "4rfMsPSj1v6WBbWoGaWxPufmTLYne7WWiMbGZQqvF1hTrupofYXrgtKGrTe3QW57Dwwko3cZPGkAYUrtuFvA5u3A",
  "key18": "5EkUnHRxidsxN4GbimffSEp3CUDhuFhA2piur8zMuANiu516mVwcwXRuWVN2u4usvV4Ef7o15cY1ax2GCfFms6y9",
  "key19": "4nJmWTPZWXVouvWHpzgTNSJRFiqbMPug6i8MkyZE49EaCckdG6DCLRLJh1J6HSHyg2f7m8CHHmuswQ4fuEN9hE6E",
  "key20": "4fb9o5fXRDKZS3TvWe1BFgpM9RoQu19MBkbXpyZLvNc8RYrpqnCC3wpWxckZiFGDSSNegwRE3VV2G6oRfemrb4XM",
  "key21": "2KJzaWpSCA73gKMn1GWzyH5FzQL5ebM65eecfrZQok1QcepitDuC7fAp9WADGAYpkDfsAC77Qg6wg7WDidwuRX1v",
  "key22": "5WM7546xFX3dQkjyfdbEErd3gbLoYgw9HPL9Xi7isX8HkYQQigF9sXhj2TXCDRUs7QR7GXWCFPbqo28xhFrLtsN5",
  "key23": "XkBGyZFKT4qiX81AjnQ63Km7JvP2Y6WAmhAiGy9SePSsHESwgP2JmoDqUHufTrt691ANet7Ls4AUotXe9cwMDiD",
  "key24": "3ybjhnX8Hb2mzB5yLYVDom1ZdGfLFyM8XRDQQB4DaDYEGBLdpkFeGK2rpoFzKWCc3s9freS2TDufECHgk7baQUrU",
  "key25": "4ncd29AaPXNL9SndJrufNfqTEP14qXELnR6WWmqsMp8MUH7WnMfkJXR3HRBbjg8ecQ7paZg8yNhcsYvm6xaxxR7A"
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
