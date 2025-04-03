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
    "vXHx7n3fiNSkwAPhngkPArDoZc3BjZUGwwziQtNMGCTwFtfZ8ChtcLEPusNLAs2jmxvZu3RdsZRBqzSdWz47zgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kmSnwnvsudWuDVYmJABvZWSZsATtvEkAeC8AMK66NY2QxPYHi5oJD7AzczXmFa7j3fy8oKU8saQTmJMi8dvvpUQ",
  "key1": "2VsWApKBCQXxnU1RVaywJLdhVoyMzuRhLS9uz6y3WD8pt5bnPRtWG2YuBhr6rdggSmgdkaweGJ8oVU4d9G4iXKDg",
  "key2": "5nSZrStUEaVSmAmYShHj4UibXRizs3UUwd5N5dzLXzrArw2ZQHX2UhDF5W4xTmNYKJhC78YatxWiYQHt91mEERjS",
  "key3": "2H6veLMTVDpaLKxrvahmoEryyjumKZqcuQ27DUF6ac4WgWinbciuo74TTLKWK4uPQRAT71nEWgCSX1Rqwbp784j3",
  "key4": "5UXBWZtPfYSvAh6CPRtrwZYFXhxahr2iQFMgahGpfjpmhwCyMS7SWiJ3U2BvXLY6tYgiTDn7s1nZ9S99HggNeSiB",
  "key5": "4niQjwYV5QYzriFP2LiMq6ut4xYBje7ZQzr821YJpxQujwMQfXfihH5tju1rRCgrXztBGuUzGCTcvHabhQzzRGfa",
  "key6": "3FuDgMdJF4LtoyJZ8afLHbosvYRr3Khd9d15WLsrub5TsbLWbU5D66weH4jy3DkgKKQ3M5i7tzkU4A15CAYBrDN1",
  "key7": "5ogFikpyV9Sz1dcAnyZhFtLybTRUGV9c8B4eUcpGzcehcuggLLE1BBptRZ7BPX8WFwgo7V2Dizs8mDKMvMdcMNwJ",
  "key8": "62mfYvHUqqYJbRt1H3Qh1Go8eniFbcppbG3fEZXdkrc8SsAz2fvpZZCn2kBmzSotgFz2WpSLj4sJ7VM94P22JWnX",
  "key9": "4AoBK1GgcmtkwH39fY8VNg1BwEFd92Vc9SNZi9ui9GRYBfXXnhk3FYvomrdfWwGh1dH5x58W5D9ae1HfehxfFTnV",
  "key10": "3axx3wcAK8BrAMLv7vtFKLZL9QgHWRyjGPjCU1pQmqvkPWYZSqpYZQaPee2aBq7ffbEBbfRxVjEGG6NR5GgFzHUk",
  "key11": "2EDYtt2HHpxTNatcBh6JKGF8KzDAkgeSgcbvaUno3xxejwTeaiuQnPXG417pjY3KqZ9ZSRtU7KFHBwAwsBEGxMGR",
  "key12": "3vi2MufwuGAjiLDjp5fdU517tGkBCijNQapnxUikzfZC1VjWpVvm58xGXgA6cvZzNCGUbhNGQv7E9bR1tDPn1Ukj",
  "key13": "4zF8518mEQ5L2hqsbVRQWeJkBssKpze1H21zyeDpPA7Ffy2tcPnSRrz7KziETtWp15VhDc5yhBvrz84Sgnu8PyQL",
  "key14": "5uPcA1VbSCWM2MrzqH6aAbHwNRAv53y7xLPp32Dc3HXiy9M4x6s9Eb1LcPQZnP8L3iQKg3dWzPK7xRptfnXDQfYV",
  "key15": "5NnvWfoUaLAQ1ezgt9e3Duco4vgXgVerbmBpmneorVY6HoBFBs7xejPeo8VWSPzUj4YyNuyY9ZJgwiSepK6VDU38",
  "key16": "2fNewxx2RsmzGEtqRh5QE2hD3QDBCVAxHh2fyaCoRpqb7T2YgQbwsq7FXfsubuXyyrP9mcEqqjQzFvRfQ9Ejcxw7",
  "key17": "52yQWFgs84DpiGCN7t2dxWeXf59E64s4XLrdvQezvHVCgZBsCqJexGALR4Yv2pxS41ov2rvogpTyFLfiCXnx1jAQ",
  "key18": "3nrjAunE6oiBjqgBZ7NGbfYjZPXCWtPMhqjXwVmbGhNJPfJy95qScmT1QvvPwhanygh9nvt6PK52srN2kSwUAm8y",
  "key19": "bSceuofQjPHPXBfsyaBT5QmCXzvTSuBp32pmVEqPswPmddFySt78jSgv4B7Wa3pWWRbV3sKpRR9scYxsfkPj6Q7",
  "key20": "5rEZK1ufqdcRBQETEEz7261nGVf6HMSj2CyGQ4focZanVSd4EkkMN1P8ZDH62nvZfkF2HFfaETe2GYqYvKdnmB3Y",
  "key21": "45P2KoFJADij7uNeNv2KUmmvjkh2oipV912RzV1gcZHDKnBoLvxmmm6WAi8ueJrGoUZqKPkYhZzrsgL4pKN98QWh",
  "key22": "5qRwKcrctFDLxf5nuj28tx6EduM5fZaaSgEQXuPbE4Z6P7mocfNM8Zy8rFoHpBwhNtjkn4uvCTBaszFJYLXbjima",
  "key23": "3D1avr2WPcbER39diTvUG9N6DkXZhjzXXVV8CQNBaQNx1GGw6njXfhLhDKVZqRKwrWbzAfHwNLfEFsDQRHRe4K5t",
  "key24": "35q9fyS9eT5M7MthzdFv6iHupUFkVGAkyYtgGdJyFXyCZPm3QHMuCJjGQhC1qmQwyagQnxS6RdQBor7vqfK6bD8A",
  "key25": "25FXZaSuazLRPjhHDJCB4aNuWHd81P4EVTFVPDDmASfL4B2x66fUerhzZRzNvA3efDfWwx4wsCBw91WmJENmcCvW"
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
