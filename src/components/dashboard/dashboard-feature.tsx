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
    "5VqAD3VpKAagftLpZntQPyrZKj9UTPEPt27QczRByRAiVCgQBXbL91omLHbWqdG3VUhGZT7wjLmzTs3czKKqSwuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cv3RXMqbc92U5nc7eNtoqB4Np5V3pV5iLpkmPfXAE7kPkHk8En4qs9PwPrT15afySQ6xUKvFmTXZ9NDxVR3qseP",
  "key1": "24zf2gSgdZniF5L3Qbi3xe4Hd1NB3jpYkjp76dkykWbteoW53mbvAQGzvAfqJWyBvMXjKMNVd9m9nGZw5Yym5JAK",
  "key2": "Be2Z9Y2dD1AxLq6d8w87ww71s3RuVX45PPSGpFrVEJptuHq5cBFThUsYwHLSmhU5EVwrQLfszkKndDJDwKXVLc8",
  "key3": "35LWF1A5fZoXTCSS8ctpKyUAH54QLbrZwhPASeYudcAbpKEs356JumuL19XYeTBRCoFjBXC1hxvnfa8ff9RDi4mn",
  "key4": "2PCEYAigLQAihQcnZesv8yPrvS6yHbzoz875r8QGxSGMce98nEQT1xQm4xuEzNeJScFTPeW7pzPnt9WbKa2is9MR",
  "key5": "5TMBuuyxDB8kkpMuDWi3bEDvpMfvY8Lubi2HCo9HknwF6sD8RgJMX4mq5nXCzG8bqsFUcRYY9eGVYHSp6c4M8Xdg",
  "key6": "211zbLBLbCMAxf36P66nYxnJPbkxPam8DPQQK2geZBvp2DbzFsPEHGZUJMzgY4u2dnSiwU3xuZgbysHenm1N7bjP",
  "key7": "2XiuX9K1ns6Nn4d1f9Wvp7fzK1YGWPpGTw6nhRkqToEtqyUGbkMbx55vr1maNiAGccn5oWkJk9DmCBhYrfgo21iR",
  "key8": "ueo9dK26suAseyDtD5UrVrEg1rcXNiMmnbEvZ6MnwjhQHU1pfPzPV4iuW39S8HXXAdXbwcM1Dxg5odKuxX5mbXv",
  "key9": "2AJfYU7qU1S1G64d6RT9bDvZ8Ypr6DDqE6HgKJyUDwATrm8UioH7euC1Gah8pLMaHAWB8UKSUzxyvZpuymThpqib",
  "key10": "2SAeqwYCS2MuNf2jMRdj4DBULG3gPbrjr8MfhZ8FtNf61Pn8xjY6sSvFj6e2rfWeWrejJrW6BHdvSpEGNsgxPFai",
  "key11": "2pzk5YkfLFCWz9ZeYtQdyeFUViSRQbiTavtHpFgHgcrth25W4ZfyJFHg1rDrujXsia2PrSD1navRFvgXUx8DGyTB",
  "key12": "5HSHYqTCgGehNQEBrPzs24SzUTT6LhhJN2Hi92UXyykqbJ8P2d8Wc5BzgfoPQiLQ4mLEcPS5wqZLRKjD4Vwzvt76",
  "key13": "2CZMLF98k96BZRqooexW5t5q7HkKxC3wcWKGjDCic3MPKX4DXMbEAUxDFGGekvPz9qbfcGAiUw6FjhDxoigLjPtv",
  "key14": "4NvPESQujaRJB3hdYpickbvt9XYASpJBunvLbcBciWXWmiSGdBLtt6PChXtZENuMwuqiqmepWAKott2czHJ4ckRt",
  "key15": "3eHD5Ta4Ck1iRbmhs1LcMwum4kwG1JmKpHAMVJ9xZpMcNK3vx3FoU9zuRAEM14qbsVFDYUcT9a29owF2VBpo7ZrB",
  "key16": "5Ypf7rDGrbf9Kr7qRhgVw23rJKTnefc666RgLuPcHxfTq8BFXc6eBu4EHnCirHQBGZNGwHRFyEWKrePnSdDZ93Sg",
  "key17": "5e6BYDSostr7tdpT2BgQbCxjdQNqexP4CKUUzhCVZTJhLuvoB3eT3Dd6SThij74gxHjm49Qp7CbCbZDxHQTBkb4a",
  "key18": "38wwwRkcYBWakYRU6neESta6o8whWZ3QkVVRGSWFfB1E5fjk3YZqLVsuoUhH7CUP8Ay418LPzs3ekaRwipSDwx1Q",
  "key19": "9hjhHaCYyFryYkX6hFunDTfyCFCSPCpyACxodeSbgTv5DLhRqsWMjAhGKKCLAvcYySCrEiaMMpMuya2RyQufZxK",
  "key20": "5wdET2z2qHzjwqMTj4Hg9V4ppP83XZdxHrThCZzcRw8oS34U9LnYcUAFnpVw7WwUySJmHiyA151NpeNieTC1ie2h",
  "key21": "5L8FgXTXk2exFbNeo6tvtqHgHQcpvgP2779qTPPRMToSQia832trqrahGWA3hmb7Anb89YoKE81y3N55srhXJV3c",
  "key22": "3svrKwBggRpmGgfFhLqD53CHM1n8MHntZyzEC8dXci5jZQud3VMERJiCMpntZ7xw54gpWhp3nWAQmxSZnTGnQHSH",
  "key23": "49CTEpPpVNF55HGKN1V7KVEXC1DckPbnuz5TmYbBzuD8GAZtaspeTGryo6w6VTbotLtRhfmDuT9GwwEp8VVWNZAm",
  "key24": "cwGUdSBweVqV6WxKYj58EVVJ7iE7WCgsV18LEQTrtqU55xJyKLrvrpiL2BRqoAGyHZKhXEYyKSqT6Me13VpLCJX",
  "key25": "s6d7VecSmg9xYw9mQy8VPuWPtptoDvxMJZaTE4dsLeeS5T4nNr8yzAy6SegXsD9g4CgCWZKPi58jo2eJ9wDKxip",
  "key26": "49rZyhQmD7HFxVFxRuEavxiyCJBFUWAPZnqnDjYzY8eX3pV2YhJnB4JM1wLaK56KT2yCAHbGdUjotoPv9Pscz4Jt",
  "key27": "5r1aeWfZ29stpxezmD6mVFPAGJzcUsEFeWD98fmfrSXeLAojZ3w97hpoJWJgBQ44WWHBP6RjzBda2YaGoFWLD2oc",
  "key28": "5MziLwwG4ESBL8JyacBSqU9449DoFbU1Ees5grFd4whdkAvgpPTM7bvDEeC5ekfTKjB3Jse1WAwdKRerJq7f8jrN"
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
