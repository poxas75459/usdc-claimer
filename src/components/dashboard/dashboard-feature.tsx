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
    "TwxE5RjHvkezfxzJYuYcVsXFUveoYfj3CYiQ4L36j8aVWiZSsWdCGdciMny6hnKjLFC9VL4GRqC9DW5f6fGGU8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63aa1rRsXa5N6gfAeFDhrBVoCh5wfyykYZSmMee2BGfbeU3w1d8HmdR4oz6Zba3H6Ec8P5NniUTbxW61vcW3fWet",
  "key1": "4prnEtPrFSJmHUTT2G5f1xW3EERp2uVEu8L9fhdXJPV1f9WoPPYvrj8846PHnuNmZgpdyw8kBVszpUYzoBqBdH7o",
  "key2": "4jfdmdJkVEwZ4bBqGuvPPfFvgAfgLAeUUFSUbAU5Sa7oAJt9Jme3ZuykG5iJapq49ENLC876NKMuV9cBcvjfXqE8",
  "key3": "3J9BDL4aZwF1WyeZQcTBqaSdus147F2V3mm4ft3bzPGEe8V4W4B9RAniBC3UrvFwX2vsWriUUSrQ4jCpoibofNzF",
  "key4": "4wjzP1bQp6MnGQFSkAjnoSMKkDjdE9J8uyR9WAnbYbYpNidJJ4oAYe1YXg3YkJHVhC65kuJUeY8w33u96UmstuuW",
  "key5": "5XBuon5WzAdxTENFBSz15gKFChTGmAtpq115Tba8vTFLqAjdTEDb1NbFkWD1NhRtG8kPmySVkN5wtEtcog8HvLma",
  "key6": "7javacx5mBhSDgL8t7N7L3JKUXkpkHVpP4TATBHNLinUDmDsu9QpGRspE1v3bMJBJPuAkUt9uEWhcCjUpsTzSMS",
  "key7": "4ZBJg7d5SL5E9gCkGzhAYNi7P9YcFWUrxCUaimcfoeGJX4DzvXxM1ahiZ5uLBZNggM1p1PMdAnSQAvZBvNhvj5ua",
  "key8": "4yQ6NiBK3Arz4ao8XvKFPPaYhJdDWKTwxJRGCqgMr9oqSUBjP4RoQv1wURRN6NksZXSr63tGU9pCcEgJkEga9r65",
  "key9": "5fau2qMZJQsEAbr7GCzntt2VgepZjFcMjDXJbuDRNAi5XyFfKe7Eye6ydtw5VUTfi8uM6WhGwcmCSGB58hW4kVro",
  "key10": "4Ytu5aJZAuXL6McCTEBEofWWrju9fZBGAFY3fbvH7SxvpLyoVAmHBZ1edZK8RPgaAS76SJdB6tQeT9tsWfeXgv4e",
  "key11": "2sLwu4xqErLXt8LcYDL3fyChirRDHgKHvMA7r9r2d1kSczin4wUTVN6EkmDsRj5xQkNCs4WjYn5SBNojYdTaaJex",
  "key12": "4tyGWak54K9PiFXz87iNJMrX34MbLBonrbFgoJ6TMpBLhWKiFdcFCwqcDxiJ9sbXfAi5PUMANYuxFvcvnQUE38Kt",
  "key13": "3tKxu721fWqVxmJuSpomzcoaivTsQzMykYtdSSyHe6GuMPgnEaPtY9vULGRTrJ9zU6iVqnSeYU27WDz4XYNNSDPK",
  "key14": "kiTiKdMoWykKZQtZ7jbALgoqNgFiZ3DHHww4zgNqNpP7P9EXdqvaVNhfsbSdZjPt1on9kKVtFGT5s3y25g15QK5",
  "key15": "8sGriUhmNDQncmgbpwW3NDbF5z45teHqiQZjZG1G1pLH43iBA7oRjWAH33PoeFYqYYZCVKThifYSAxsXbWFFBg5",
  "key16": "3CqAotfGDaCbLKwRYgRxkJ2PVutbXDsyS6oyQyeLqzbHaYfgDatkvKA5zxpFKpJinRqd9Nq6T2JJ6x5vyCJ331Pi",
  "key17": "7JpWQPKgc1H5sACAQ92M7J4dMBY1XiEStqFQweoYjHhrQMD527nFBho1bQaVF3TdMESBkw4iJm52czhQ7upc4Bn",
  "key18": "4KYTkoGVdppC3duoVb9vYo9oyHXusvmTNC28mRqKfQ8L8zzHLTVDyJtvoYYdaTHgCJox6tv7XxYdEoNd2tEBTe32",
  "key19": "4imnPtfwGnMgoVPWJxXzo1MyveDcbzif2uXjbqW8cFRpSxi1YoHKDUJXU4KQKmFiaNXjNSUQLQSRyvVKQnm1VqUF",
  "key20": "3J5JvDKqhuJxPaqQzgBiet5KJFpV8wFVv7yLnVewJUtsUgk4MfBAhYuxKNDVhiqY8h2r8NFZaC4Yn6JPPDC361AB",
  "key21": "41HJSD66bnSu6BSG7u4yLZoVTy6fe7jvEERHCPw8xQps25vG6EAmrcLx2qBtaMPh6ewia1MVqNQ4Bp5q1aumkhku",
  "key22": "wLZEpWC2e8JkM9meWUerAq9C7s6VK9cc4ZsUxqiQzWiNvaFqPHncZRebwRyBH572CHikH1UTvVLAMPgC1R2EgFz",
  "key23": "ig7swckeY9VNjk6FXuzZZraVxqscxhkoJzoQxRASzUzKAQaMr3aynDVyQpXtVWrxi165Gi1gDRiUAXikGWUS6qa",
  "key24": "3YkhHorrQW3Bo3UD88KuDajpzRxMSUcyLeWgff9U4vmyY6gKGERDNcb2XQw9Dhj7jCe7fbozB9b8WdjPtGRogkVJ",
  "key25": "5bjgRKRDZua8iVtcz8z9w59gTJFtso8eU19jwfDsdzNWHgTrFZSUQEg6BT1h3QrbeZAEg7TJxvhwFoRNHPRsX4jK",
  "key26": "37L5kTrbjbkmm74NDieHE28Dy2VhYJDAB74BZcMqEgPmvb3dsZo9DJ5hHkiaFQi5wNUvNGYNvonrCykLetFMC9Yw",
  "key27": "3mnyYuBBEiY84ZVVpHD5scBMGNfUG7G7HQcohPt1b4JsZTcWxpEAVeHvHEGfTU8fG7454UJkt32KiDvEjdht45qg",
  "key28": "dp7yRQuxgvuirnKRQuoHz5brKP2byB7vcBseK6YAtbpa8MMpw5H65vhtSfwtmVzY59B3Re9J3N1bAe39AQErKq3",
  "key29": "i4VpEkdAVjmoYwH5iFx5a5nRkXfnw4tQWorCGytDnXkJHnyn3bp2ZHmwTWUohprG2ayJjbeLYA89w2e9ddiJJHK",
  "key30": "21i9MSCUAsmZRFiN7TXA7kPbmXH7TnboZuLQ7WUkcv7ss2o3MrnVrAM8HYi3G6BggrWbfjN8tcfwWvHTfgRY5q3J",
  "key31": "5cxDRRjwmdAui4R17fVvZETGf4yKA8zjxhpJiHWaqmuadzNfx6acVGfyZ3PwuLjJx58yxEfDC9DFoA67smPZCyzy",
  "key32": "55fjm3xhUbEwcp4VxEgQRVRcEjQDV4aM8uaDNjaULf2GW3hjPNCsAZnJt8UStbutJn48ZZ4ByYjWMaTNUqbvMaFx"
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
