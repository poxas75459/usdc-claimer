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
    "5vmjC8ShgxvC4Fxhy5BZPweDSNJWZTuRLnk6W15qi7ik9SGwR8EzGYFoTyknJBvqXu8zqCMVBV9qkGJdqTKVbDbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpNz1gP3W134LcJE8pfypnSdB2B5RLD2LV12sCesXD1kiGY5stkts9kjDgwaUfjphr295iDrKQcfszeKYYjxRTg",
  "key1": "5WXiFyhvwsGnao4S7a9fnJLXb9tJjH91zJcNPPnDSHdFAD75JH3mHCWx9DiWwE5Jvu2PyNg1vcqUGjBCHJcjxmtM",
  "key2": "j3Qo4B74NvMDAqaBBx9n74pNQ36iGMZDoZfsQFvgSVM3zxWc6RD5sXdiD4twFDxkBmXVPcfddWxo2yGAJQfUvkE",
  "key3": "4rS2hsUQEsZLYMtXLgaYQp5UDRMaZBQyUS9jo7GGScDdHwi8tCnLSeoUG1HewbLp4ecxviHEu6axKLLtBHAJTA76",
  "key4": "Tmj5UUsJ9FceY5oSjiDr4uLRMC4JtjQXBU41JNU1eiyWx15tHqQNqX7xLYFevTckLM9PC6ztVS1sh8aR5EgpmCb",
  "key5": "63VYZpVqw1LWevjrQnAaKsGQ8p17LqksPmnQAkj4GqjVg9hEQsPwqG4MpX2cqH3akSgrf7gV9hQARWE2o9iQyCwJ",
  "key6": "57tQaiwmMtYLwDeThCeAnEhnU8jWdTw4hmAtfhFh3WgP8J1KhqDXwRm2cThnNFJGrdaRTrrEjTRkEL2iVhMDi7jY",
  "key7": "4A8rf2EcYyfSYqJ8M1FE9SUE1hj4p6N5qyn4yWKdEVfGjhSzcumny2681FHASeRGvzkV9tArjT9ZE2eATj2mboZT",
  "key8": "23DFFUueqfr3S2tDFk5xfMS6KYWnfGJjUuPE2yTwUvLaMQhjtmpKaAmnq4kQMFH1eg8uk1yxWHNYkkSv9qb9iXDE",
  "key9": "2mSHK8SEJJsRFJiyQE5gE5LouogSPKSyTsBBnDdknsYDaaBzssYZB79MhAeLi53qwcDRe3TyUAFaj3HobUQWvXrN",
  "key10": "3wKjFTNdq1SDyeaf2AMXEJwmCAPPWi7dRzw6ZQVRhPhWcBRHsZ6FXNWEjZSwpcD9jxJK8eoj8bEmCU65WKibWcpo",
  "key11": "2Ge6SNUHjzUvBUSfJfL3QJC7LTJVybyRRqGZa5c498CRKCvW3218pNg9u4N4h9euBRnqNhihLYbc9SxKX2vJjXV6",
  "key12": "3431xrjTb1DqYAjffm48M75tLFVLEnmfEDUnH11bPqob2yyz26jtmVp7SKc1CUdiJcwZyQ165FbwWcpi8FgC89Yk",
  "key13": "BZJQLGEvSo5AYk3CdyfB3gBVmJCPmrG37xkJd2AKGm9ET6i3jJbHwuTEzKrvorcHkZhyVbnzu3dBjv9Buu5pSoG",
  "key14": "3CeGaYxfVz6NMVCaEPqdL7RZpaQkTaQdxU78o8CNbGm3VSRBGJdYKzeQfnEPS7iUGZpYsmfrRuzWLc1XnjD1kddH",
  "key15": "45a9LxArt6UjghPzPnbDKvLUEquyJSAMfakf1tQK193j2neQRgnBW4LaEqVFskMEJd8omDaAfT9dxA6PxeriUtfj",
  "key16": "2WpXnshoUFn5GrbegLGKgDFr14SHAPLSAa3DANwoyaXAhVBrt3EKG9pJM9dF8KgsmfuZBmd6hUVnKKtCJgYazYsW",
  "key17": "59o8q3d63sWBTqikF1HsfcQvTBD8Y9ctVJGvMbB9pyJKBdfXfCiXawERWH8qM9H97SztYDh55yLrh6R4CeFU5nWq",
  "key18": "5MFDYCP3dUKKC5B4hjMgiFwuEnsT4kd9ngwUwxwUUfyS4eueyZQB3n4Eam1rW6pH9A37NUkbSWLpDU2665DL8Stz",
  "key19": "42VL5Pp7Wb8vkTnAvby39xFvNZ4FgEW3uQmxQ6HCk9B6FYhxHWcU9dbzGGJzksQcgWZPhB4JSonzw3aE4xEz4YPD",
  "key20": "3k81NPZd8xxPYahgZneTSeA1wwbrxBrAka2f1aEnjSJjB3o5YbCFtK4HWYcsD5pNfn46y6cRdKkadjXQqdZyQNbE",
  "key21": "5Vu6HSs1S6iihS8Q4yAH7svJmYNfqqvBPM6erJDp4yoSjC12uT5zGQvFF7CdGyVzh1J89pZ4HoaQrEh6Fd8iupRR",
  "key22": "3FFaFZ6REUHzCNVFh56p2hZCBqCBAydJsGNtFpaL872i6XjLBqSaZ5DbDkHUc3YuDHzzvdtA8Ew32JGBuwr2tPT2",
  "key23": "hQACecfKJAfQnwtQgxzySLQVKQwLviBopu9sfY6WJzh7MYvK5wZWTFggz4GXDjicBzk9n2r9fV54Ph5FQNRGU3J",
  "key24": "3KhgAKwe1kSYMQoV8Q1o1s7CqMCpBwS2L8wRtmQHRnTwF9tKyGSGkSUvy9dit1crx3DRnmDpMLbCfWWLgPg7sXi7",
  "key25": "oWAB9mfzYC2CW33wciV559AioucooGQbQSdZviGEaDiBSFCo4KEBCR5p6tMsykg2RC9KUjNhn1KCvcTy7b2b6N5",
  "key26": "4XAMUHMFcuzVJi4SNMPbn3UuGRrqt6zGHAoxwL3bAvrVvRJ69MDHWa5C1jv2WdpHyxFqTewWcWoYuMEbZzy9dRFE",
  "key27": "488z9CX7vBH91bTFxtzXNKCAdDVxGa7XWyjqpgaWRmFr41Dhc5UmQqLWCPqzoPQvCefjLQrbSz6CTKy3HeN4aHyg",
  "key28": "4S1yh932yfxo72UPKAM2Kj9k4MaVRuBaX6Dwe6oyP56nEk1ewfxZpwecmyKWZUQWJgn55pbx5JMQBgpVLne9qDnv",
  "key29": "5m4eP11cxkAHkWwd1fo1a3ZLWeaRoQ3bRLGSJgLoCc25CnoXMjVtnqXb82Fk8Yvqnt1BKUwNCKwroE6pRgsF64RB"
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
