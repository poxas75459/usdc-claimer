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
    "44j3gPXh1UtGc85zjMLpaeJQetxqnQ4NsBFLdLJDpe3eyCV9gH8LNyDjaDW6F36QoLJWgqW5vjyokpCYTyCQxP4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yegUdCUCmQkNyZRWaUPYn3pMfV6cmJhhGe7pWzT25gjPFyt7yQRtARnRhQKFM4cJPmJ4gryL9Gh8st3LimYohXG",
  "key1": "2ucDeU3PLzRzondmP8Rb7b72yYgxPTWtTLMTX6zQDN92jQHsbDegWpa2LNnc2P1rDqJpFDQKfsXtNUatGG7YUstV",
  "key2": "65uCBRVZPTzdwTS92P9jubbgejW25oZ9mcEBrBFP6K9VRhLazTfrXVJAqFijL9LrQ3LMdXpgs2JtNxzudqjUeMTp",
  "key3": "2z3H2FLjYsDzN6iCnh33nxt5FLQTKe52XMLpRpxZR2KnQbwcuCEHNZvxSYa1eKmJ6dF9Pfbg9LayGSsURcjbdRg",
  "key4": "kb3JXBYWCr7C7EYH2Afu29BbFro3UyYxe8RXXjdYY8EHNopZddKjfjVbLm67U8a8K6QmvhnXF8hQ4ZsdnphD2YT",
  "key5": "2eYkpQcJuZ6MpWUqtEUfgk65cjaiREXb4iR2Z2NBiWGnvbHky7xyU7LknqrcuFoTjoPhDdKPVRh9yo6vzVzea44T",
  "key6": "4sC95BKyvRNZ3RDckNpzQsZNHc1MDaKdBmWEZRD5vs2hQu1hGwJyMAZmEvM7jhuvEJE5W3tYJ5KyXtqyoDCG7uES",
  "key7": "3oQfohu5bkurdnWxcGrecsoqdhb3dPepWTPYXPe2uCsMNFeWgBxgPFEyFrG67K8kXGvhyp9BzkrZwsd77xDQc6Bw",
  "key8": "5muBHp9V9cNwA3o9KHhycacAqGnxkdn1QoktphVfnx2Pq8sKKF2XNyiqiFok2hd5jaS7c6QAuWxkaCD3JAzXn3qR",
  "key9": "4gbKPJ7hvseshV3kg7m6BZ5158L52KHFFMZ3e1Nwertj6CkGDzptXedm7Cnn5Zgm8wvoD4WPE2XkDxcoZ4eiS7sD",
  "key10": "4BThHYeUPxNFuoouLoNuDnU42YancsGdDBF5yj1xQyGaw6X8tQHychvSFQ9BW7H6Hm9MSjWhvSJeYKLHfA1iYt3b",
  "key11": "v589bXVRhhEDeKPifkrNWLReuy4QdQb4k42FBHKa23WZHsJsXD8AQ6SBmMHpqvJ2iLgDWkGEvb4wuu2bVcGAV3T",
  "key12": "3r48RUaELsmvqKUaN2CAktkcSvnqERdYusU4U86H2n47JdSJMiUF7Y42xzhZgtZvAU9rLKkjp2UsiuefTaVHrAxX",
  "key13": "4uRjYTM9Y15uoHd5mDL9msFYPVG65buMzmtMmvENfEUeKtXU1PVCqbM3nPQfHEvYUVjojeqCSSbWEeDZ2Yb9Hfuf",
  "key14": "5MZHhTzWLCTMxM9X62WUCzAQ16cYzbFTXhDaYEsTnwEPocG7E7UqtK9uS2yaX8BSxKxjxPucxpya2qEWNvuDtdfr",
  "key15": "3BquF8vBELxvcCAo3dc2Qfb3yoZG2NGsqHX4MW5SLpWejK5jyYYkYyE94UjkrRTCAawdBYwpDTsceyHPaBfFSfm5",
  "key16": "5XQt5Ubb4794f9sWLKntLnQZyqQHax5VZc6RvGAPhugZfc69GXe6bfo9VMaiKfEktwoauDnTUcqETzz14JHW2kk9",
  "key17": "5Px1Xbd1pk7P19vtybiLwaJ5pih7f9MKG2NtFFLhpbVktMHFpGTgtUS5YndqqKT3gcRDDfr7ey9zGQEYUZFrGyH6",
  "key18": "U3MBgsnyHyDPbEpRgE8LnA2bjqpDRskRFFrSoBY2opqKTVoWwDteFRwcspnrGsTEVPtYiM9yZvS3yu6gHdChMEN",
  "key19": "5UEbrF1LqJ5dKohzKvo6RTicpRJcM4ATVkvgU2Dm7iWQ9B3P2QuryRTa8XbBCVLEgRr3EupRyESEGmniq5v5nwPz",
  "key20": "YKNv2pRtSefcVFKsVm3pNxjq6ZAHZKxk5ZmBLvNstRPtcHtBQjbmXgmZg6avqw2uj3UeJ2z6Wj13UJx9gx8xjZP",
  "key21": "2kJZXdBr3vCGgnvVhYzzFCKkKNRMPvWymkF6535HaA5h2nBryEJsifayoCj2dTEVdV9gPeRmbSMCC4LzrBCp1wR6",
  "key22": "3GPYtWdMkTSxww6JNPEzRt7bqPPruCSsQYYjJdsUF3eMZVoxFyr6M3LpZN4tkgQqJx3ExjDx5iNNabnehcksF1r5",
  "key23": "4NoNa7D7UwseBJbJ7BXhKK4zypJG587MeqhfJdz1Ffb7hjez1dkEpec8g6gPDEaSYiHg2vpExZbnBDry7ziw8gpp",
  "key24": "4NcLEPvuwVRyREPXjKy8E3uAX7RJ6pJiKzRVd5Dzc3x8xH9Su9pfVCJerC5NBwqoA5a3jwfX9qLgve1b5hevzGBW"
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
