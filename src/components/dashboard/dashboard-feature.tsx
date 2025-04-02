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
    "4Y9YHPxXmTjngj3oFqTBbamwNKeRM4GqU9iPTJx4qVWbc1x7XFSjK2W9rkjtdCiBLczaof83AFiDwPVmMid9v1Sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HNieLcntP3bULSeysc5QsQWBq6wzQnB61GDvcFxcNxFc53JAHme95uysP56UVN9MLPomDRu2iffYsPktqfEC9hh",
  "key1": "5SKoZPH2AzVL7zJdqEC45SGmuEnkMY5SCQpDQzdaQ71RrXL1oCmCX9ndMSr1JDdgGA24w1wn1MyAtVHZGSpFjAym",
  "key2": "5nGwjA8GB8mcTxSGz1HuiL9YmpbwhVvWBPoNQVTBztuUcQxbznREAjK92b8L81fAVxoey8da9zd8wS2iFd1kYVYf",
  "key3": "4nfV6JzQs8zjk6sob7wnspsySrZ3FFcQtjKLoBWr3edmCL9e95wGGts2KRnNmUihhkaHbWvSBiM8YGjuGJLQTK3U",
  "key4": "4wFnSfiAcA9JKLmZKJ7gAcdwHFo9c8u4dDsM4yaoA8NDMVG4KFtMV8jzNfso98FvMaT1botvLpkuDmAkGQGFdWc4",
  "key5": "4W3Gy9mwuKKuTNGgQPK7TmMMYCv1FroHdkSqDAD9bLwsst5d6GNoyrs2Sd9Lyg8RooQeSNFCptfM2iUNPerZjY1L",
  "key6": "4YXVXZ9DoCsuWNiR6sWRQHDNUtWei7wLzVUQbsdgABgvsJscUkcy655KGMnPgR5t4WCMBB8nsF74HzjyjporGbRr",
  "key7": "3qRT5ig7r6kQZdDKKUkR2gHvV6vStiASNhzpqQdGFNehq4YG5dgN7aArP9nQ6iBNMa16Ab8Z19QggkGp4kEMpqS5",
  "key8": "5urTQNRJEdtD8zsrMKKVmXpKGLnvBtxXR6ob5tTu2MDSWVeYArtTuzXRToeQS18dzFFjHu3TxRURp2eUENeTJZJo",
  "key9": "4vXA45M9z6UB2WDCDUTjKrHVxqvyjaEf8hPcA8isF3c1dzcPr53L4LVA9Ag8mwWdEyqbuNLc5Zxn3RfzfPnkMX4v",
  "key10": "2gEYNBMbcfUKuEeVXmtgfMb48BFx5mB2FNRhKDiKTVt9TDMYhrfAp6yWVeThPZcrUEG3PD9cUjDiN34u5XBH4Mi4",
  "key11": "3YTE8C73qHjTsKaVbAGHZRUmrnSDWmthoAYzwN2a9mcc5cV1w7pPVEXr71T1ZbEPSmGBz3yd5UK2ggCVe5byt2qJ",
  "key12": "3PNsQ4hRcUzbFu91PikRgMGnqqHRQtaJ5eoYvmnjxNBFrKhCzKBfiEjoqak6vDfJvs8DD15etU6wFiveg3rZVruK",
  "key13": "4cScT6Cbb8E2cGGqv6uGtT4ZBHURcNg6hbKjEVsthowRSfsYrKrEgf1b3dgnSFDf95sGBaFLskoH9z7geoVfSJc4",
  "key14": "2aWPTwS59MjHvZUQ7Axh3pb9JahmPc3TPPucUNT2MfpDKsmic12ieHNbdpigVNmX54yKUNDXjqmqFcMrnMkbBZHH",
  "key15": "EmK872UX1JpJgfEJc7fNLwkf2cAVj1aHKmTkXHrU3VCWH1svVke25LVVd6P8zpc2nQDQw5U3psqTKccHJHewiCw",
  "key16": "4Gq9jNXCMY7JWbo1MpxoXKkvWkh5ZBBYcBxbdoufVRgHrc9MK12mSxvzJC9xw8inWtJ5Bnhro5oqqdNS18P8Yw2n",
  "key17": "3b5WLtzbxGBcs1hd5AhSpGLmXeLQBgN44TqhPV9F3xgN6xWJTG9HZFsV9zk2aAQEZ889Srz4qPaJpyon9Mczk8TF",
  "key18": "4pXb6YGJVZE53tXi8TEexTwcA1nuijJHCstyy8g262cYenv4muxCQpDLSUiXe5p7uxRGgh4bkvRG7xtzRP2nRHgu",
  "key19": "CrYhgFZzTm55rSCoxisW5XYTGd2Jr6vQnesDSAfEGpz7grw4zCQSvfNdwhXmKXf1DmYSVPpReHh2MfG4aFTmvUK",
  "key20": "5tUAWVhRr919TDb4degQYDZdqNjGYNujTptfRFfRX6DivJYHBRka8ZGE5ztZK2NCTYHzj2Ytqeqh84ciywAimdiw",
  "key21": "4mBQXXDwfVWQMWFpEBoSchMM4pim8xeucGj6wRvtTo27Yc2v59XNgtRkSwPDupZhWGhU69EhYUBwSM1iuSwmh6U6",
  "key22": "2Yzj1FX8tJ3bchpyWGn5B4rk9uwXWxPSb2LFrLMu4ouUsSMpb2PDYovjTUZYS3PMuZ4KKsfJHatPqbyVotJupmmA",
  "key23": "5LJYWcZdcSPvzjLi3Ppi6653XDboLmKimfWXsUdiCoLB9VcpZvX5ny2X6jgX2wixTtbVuyLHGHnaUG4uvNk3beDx",
  "key24": "3v6gNAYN6i4WMCZwLW1w7wKTqJScYML82GTB5ztVoVbYW54eZ5uD4oWTegq9RKjxyzuu9usyrcLdt9x6nurGsZEq",
  "key25": "4fmAnLPSAJUtg8qzkM9yzQnXvPE1TKMNLyaAM5XGfyBy5oXYRTTnrsxksH3y1tHJPDn3h5qvFTwrUNBMiHxf4JqZ",
  "key26": "34a37ersDvWhYXdn1W2jmV3Um7zXz9L3fuJ6qpN3KqQm1JpNwvGXrmGA5i25U5FktyFE9iFeUpuhbiTaghsHSqvb"
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
