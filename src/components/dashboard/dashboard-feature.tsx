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
    "7Hss8A9ovMYUmPRd56bzTzNCa5ocHUBNwbPJhx7Xr1BXSXWzQUNEfjySN3LMD8cP3zyocARTLmBNpbKN5ZcVYvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37QYDUC8NNALC5dTjmc4hXj1g4gJVwPyovVqs7HLBShZNzFFVXNmGQZgVNKG9tNeMw3efu6wS6c6LfSV8p8Eek4e",
  "key1": "5Q24A4TjQhJmAgb3qAUwHRHMVJfGwdvN2XG11xZ5AZcz2NrZ5edDN1eBY9BjK1yqrDdEDUBqRmeTSGD1H5LjfpHh",
  "key2": "2AghMC1g41kSWHu7qR4zKGH7mHMgBN3Wp3rJPByFi8bM8hoaSNTbhXA4HGz1x2dtoxQCV9xBHt4DATPZj6pdcYGv",
  "key3": "47EnH5zTcugJyZGhoVxzQ6QGh7shS8cTGzhF6JCDzVL5JtGETE4DpUCtg97opuiQ7jgPGProbNjJW4uuWa5EQms4",
  "key4": "4yfrMyo4ERdMkj3VdETw5LogmCMDdyMR1cMwTuxC4g1x4SBM6KeSR7ZUC919tS8RDrR3FTB1LrizcDjKQPKCgtfk",
  "key5": "61Z8dWxpDGv5dQ4EXGYoejL9NKcfehPLY6ihvXJ4L6MYPb5pcQo7sT6xGJXy8cVC8ovWo73NTyEuCSTULqpm37AD",
  "key6": "4AfNmjxtrPRsaXDdjcioNpza6KdAiEqKBbjHVERjKBKRsCjRaMTVx4SZE2pEzdK7yy3s2E2jwde8XRPo8TFkh3S6",
  "key7": "3HWfGfUzsY8DvULX3L18iuwYpqWikNqRKCKzreeRFzzdsG8BrTAz7e3qTEUgFH4kubqVtFCkcRGmWmeR7EoppZmk",
  "key8": "3VePPQesL4tkcPGKk8kf85oiwt7pn3GumkVX5UgBrph2xVpSwQ5xt8pywgLMifpDjJK8petYVdQzxjQtRc82eenD",
  "key9": "5hDQ8P69uvPFGSs8Lt3VVqisbgBbUZ75eoSRBdyxPeeNsdvs8NQ3XmSF8dEWUYkFtpSBud9xzsSnp3f8vn1a8LSs",
  "key10": "65ass9QKpHzPaYkxrrbb9nx7QFudw6CDSLcNvGiK53DfCFCg6awwhaLW9XCedrAeWnH42qFZKiuifEE9K5ByiDMp",
  "key11": "L16ZPykSVKspmFRQftBWz9dY2N6zbrKuU2nMjVKg6ypzQkdrfEEVsH6hF3HwbPq1quMZLwyy4tahcMGRFH7prbo",
  "key12": "WTL1uimTHCMm9ADLE4BrwvEWmTXkGHjxgZi7EuHVu8xmfoPnouYhe3paV59gWXmx5yAwPewDMJWZWZkxfKBWGXB",
  "key13": "WCdTitC36SjAueyKAiEPZ9tPxYmwVEMk9jeXonwQt2zeQoRBZ9m4KyPLQYMAZqX8MPQeFCETAGZ5oCAYAkzq8U5",
  "key14": "Chh7c8kAUXvrojKXpoHCK5m6dCbJHeQSfcKE9BbifeM8YRng3ksHtcBWqEaHAbh9tMCpt8ihUdPp7q6xYJyYNWX",
  "key15": "3wkh9xp1oaTSiZaQg6Eac7D8DehuKFD59viph1fwtRGWssEwCp56jK6S5MRVF9zfVoqbLTdwgdaPJ7KPhuKGAkEv",
  "key16": "4adiw7cqPpbqynhLowMRWG7u8NYfcQ4vwiPMzfXsEsvZJVYmtr5fpcUNLgWQ2JimdsWMbdM3knuhARzpFexeKvKV",
  "key17": "4Fdcm27PmrZ1vYP4C6NXgMmA5weMdamXQtRKGfRSDcGgu4Wtsy1vEwEyWzmPeC1FUcKyAoCGqSZJgzbt6ntE5yX1",
  "key18": "4TXVhJ4BMMmPDCDn4pW9ZoTj59oCwe47nkDHraCUyQDFy57mriwFAoFUqRctZPa5xwNJW3ZBE5VbRuA2iZrVRzxS",
  "key19": "4p1T6KLhYsR4NHzQ72N63wSeZGuECGrRFiSMzXuCnNuyFFcY7fk22KdYaTKnDm9LyyRsXeg9n384adtGimkg8j6t",
  "key20": "3HmGTXxhD61jjz7ASYGkmnfccnDhWK225DpXq42Un9y5PZZgGzbqKJLVLtLZj8gMzVRApnmB2Q2EBwJnbdS7KrnT",
  "key21": "4pvaKgEup2VDZzGZ2koehm5bqSe8f9cWTjs58xp6Ym1WYcyynno3U9NnRgnSAkhxERsWm4mLnKZG6kwjiqx6nvNu",
  "key22": "3SN7wRjBoonpjtWyCFa6ahEFaxikv8UYnM8pizhsbW4CveDHLZ1PWESJtZofPjzHUPsVcw6MdafPNyMrJf4AWpwf",
  "key23": "2hMrJp2HpmCZPrNRp1qN6pKTKd88FoiSx2W6W7Johz6j4TEhmZgcksXghyvoLpbGRMivk3o2tgMsjW4rVtKtUmgX",
  "key24": "66e8xMhQQrxvZFMkEkCU5Mci4zKuEWTYcmqmrsDbxUv1X7JZ7k9hALrPKa48i7vCwL8hgcwr5zS4NFuSs9kU8gpB",
  "key25": "4wf1a4fy6hz4qrrwzNqQtT6UH57ooCqLHo5td8CVJ7ciADPPWCWZwrMKzg98LsDVspaxDDckLCbv9Qg4t8czR4CJ",
  "key26": "4yh1Q1zyVcP1P7BPA8Aud7NE639LrCm6Qirv9bUqPk5ixz3NfCvCCzdBvVQqLFr6yhBT8yX9XPuJjZ4AUAcgGchR",
  "key27": "5oyDAtb7cqACiMGz8dqD5fL5KVoYmFonVaTjMLvhS3CQmuiaftBHoKdQP52jXn4sDiNwkV1RAAgSGDq91UhWhZ4L",
  "key28": "5scDn2Fs44vGZcNLjzsiN8ATWvm3AEiouWJN1zvFvxYgbPaQ6YaUuhXW6xCB74usAnrfMejir8xsBA7RhAWiwiLe",
  "key29": "2LExifRFK75eqJDb9xFxQmKi9K2jQCv9muLcX7f24mi7bTdZrfpUGN3C6orZ1Dq6tjaFXcb2SCXK2hmoiZVfkFKi",
  "key30": "5zXM9FSccfow53AdGNHtbmXQdvxwwfzBQGY42wi6wPbMP81MeCMZhidjrSsFbdpCUvh1jNp9tspvUTMyHNTPZoBQ",
  "key31": "2mxcudsDbfoYqCFeTpzetnJ98HNbHqfuhc9qvTC2PCo7bbnbNdYFoveDnZD9GnLLxE7fxJtZ7vnMy53qMxfWHa1B",
  "key32": "25awmJ9AkiNFvLcMSD4RhAszzTDUZV73WKFZnE2LSr3cYQRUyTiMDfFKJwxqvv81YSHoL7bdTdvhZLDgBu1afiQQ",
  "key33": "KSsLqs7gnyweiMMN8DB8Ag4vnLnWkpmU6mDdTrzHqYTKvDCgEuvH1FtiqtxSuZTsvmhhkZyejUD5Dd4F2fGY8RT",
  "key34": "2ovM7XhXCyfXxArYz8AFYdaG47HvZuR7WXLXiYakX87HE7haiN5S1oAg5HqT3iAjRG1jSjkPJZDKMpwQU92w42f8",
  "key35": "3dGJfTKaxwW3EsRXpcWgjPoT5GMqUaVgi1eUKPjnrPZuK9koWhBPUEvHuuED1qbGwhNUDguUeFzYK5eGbapkvxus",
  "key36": "27nDA4A82eULtdxuNEdeDKqQZVZQLS8c9ckbGRZcaXBy7ymMGgFsEW7cqX2aYws2H8oLq1AWjyTh1vwtWpX9JY92",
  "key37": "4LLBPRmAhhJH9H8kS595PPXWESUAKz7BtybGtNrjG5eUvLEGPXJ7JjqufyWaHnkovxhvXQaBa7JNEQ9edMKu82Yr",
  "key38": "35kD96aFWdnsRAP5XRVw2UaaEsva9Lkrho98zvpc7NBgByxNNAckXDUTYN8i3cbW7xQhMv41ZP328ksnsHkapKw8",
  "key39": "3gi212c6aLTg34nRyhVeCbEEexC1GA4MjnVMYK4xhCYDUqXWXUk4kuHdqM5RBssbUCwgAX6fBCdqxxgRtH51JTaq",
  "key40": "4rGos998jGfd1X4VmbofHFz2FGQfAekz3siN6RhEkYrJqwq3x41MDUSJDsCc9Bg7myCgk4uz2Ve9CcuzADxJt1ue",
  "key41": "dN9JrhtppqDyvFaHXu2hrVskpnB9KdpxhdmSxBWP79KfBNCq3rUjRMfiGVCtxXSDgrDNWtM1LyXKjEHNvfzu5Xb",
  "key42": "64CMMf4PxL6M3svMQh1sBzur739kYNfvsmyo1tzSMAfngNfkzTjknkcf7VRKfqt8mspZ2e56bkcWTTZfWn6qGhJ3"
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
