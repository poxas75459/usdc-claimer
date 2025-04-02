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
    "ViNARtJSD679QMBcMNZTVGpUfzzckgurehLibkhhi32ELtGaWRwgnHeMaLYTa5DZvJRXfkkB2pk4ha7w2kmJCaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WXBdpbVXLXYYaEBBbpw3Ap16yvXFETBo8ohuT1TPX6FLK7uVvGqLTwnZnQdsN1KLEkAy7eBigqk4gpHjvVFuhWP",
  "key1": "5JEo8DsELmwj1t2vxkLoXE9KYJoW2S4xAKwisXnDPt4r6LSVgUmDpVcKPcB3f6ZDFKkASQpsrwe4L1Rzp4r9krAP",
  "key2": "4pbhPGG95bixkwaE6Md6ckhYaShwEpkywE8LXwKtvLcmqUeL3tAE8CvKeWTd9DYGnbyYynnd8gPCFYiU4bza6o3b",
  "key3": "4u7HA2JeeCD9EbhyuXgnN6d3RmCnQZP1Md4SszbcE7EecaTFfAfisrH2MonQs2AzJsrEnrrGiyZJMF7NuhayqZVg",
  "key4": "3UnLpxAvXmPSrW5Duh6z1cLjrFxw7Fk3HHQFCtY19VTuCDhW6vRALXTTDpdYUuwRTg64e6GbzQ7bSm8BxmkZ3gaV",
  "key5": "5rsV9DQ54kzQb3gvtQQfyhWFyotxdg8KaMpBgKY8jBtmJ2yFjwxAwjTBrXeLQNv794AubXGBjVyL9ZZYVu6i6qPx",
  "key6": "5ELSCV4SXnxdBdiEHWBxFwDVyhEnHaLSPAKftKrRxYAxyp1HMc2YYt34u1CXBvX5MqTDDMeBoobQj4tsjwD38oMs",
  "key7": "3xRnaoKAhR7Qg8NE1Q9x6pFT3sMAJTR2gx5yFbacuzb9XH4bvWjfvdd8Lne9XEHwfkWJKKo5mweNkLWARQnvozNC",
  "key8": "4jU9cq8r3ExhTGDEHJM49sZeKkbS3Y1JnxhTPW9xQLS6RAZG9DECVCrNJ69nSYcgd1PYzDi8GwV2QGu23smrZw6G",
  "key9": "HUJ4e8k2XMxsqz862TjvRwXCS9snLcfVuNxxZiGfq4vBaCyvjK4XWsabqXbm3pgMPmT7ErjBNxbC5VxTCozXtxz",
  "key10": "2NyFg7PfC81xMVvXM1UWdvhRAqhPiMovPYEb3U4ZpwsdUuLsuxbq1pTgVjwawsXcXSrngyq4rLT7EAffD8u4tDVx",
  "key11": "zVE8bWKkEnw5oHuEf2WKX65mTtBwYRPXQUPdAQtPWLnPPjKY1WbyJyiBAbJRkukg8hHobrKv6tPq8GWFc8kErgY",
  "key12": "3ku9xAQEV92teR9hKKovSx9qRViGVjfLnAbyupTQRL5nLGxWPToGwAWa7G1foRJfu6yFGwWPMvBVMNwKhbeUEZwV",
  "key13": "CQi6nJAzudiDmgXBgxqjw2gSQ6Pd1KxswvfNifwRCeDFv8X8Y43eXPyFGfN2R9XE5ebP22TpHa1zW8XJimKFd5R",
  "key14": "4ZQV3kNCxgg7nMULH6nA9u18tw5JfVhF32QJZStteXYo5Tu1a2JriEdAuXVdnNh9BMuqWBjg485gnu36JxjtQ3tK",
  "key15": "Ed5zXuuvJMa8jTnZLgDEiUvuQfj323UobRESUHUei9NojnafQ1RT1Kjzdkh4mJ4LbEBLL9FVeUSGBwnWE4gqvFo",
  "key16": "4xbVy63gjDUT5mpbSvKs1AkYC7kCfXqAgPdS8jHh2MMbJ9HHPzok9fUXhxWxVeyZU3j2jgoNUPzSHLACvKM6YYth",
  "key17": "2iVyZWN168k57LRue1M1PWgD8g736x4kNgQuHGshtCSH5QVSHGCo47JY3tTE9g9zkX4zNQDALeNZrVFNQgVd9fGs",
  "key18": "3KyoiximKEAqwDWaiibX8UZdx82ZQiMbBKFPyPXXAnAE12F4fdz3anSzkAhmrkXktpHeYM91BiiwXo3QkHrSrhGK",
  "key19": "5zpwjjt7XKYEPCuwFWvzSHD9NEUwsTSUY8HUnzWrgu7LNMbkeZHVMXC7b36ThdEJrWycqpu4XvkbVrua9ogJXohZ",
  "key20": "2KANgMxuQVEfgmucjqgxRM165nAanxZC8bqRd71iwUQwi2d1rUy7e178ZJqtx857C84w558UELaSkXGsmBqzamaw",
  "key21": "43aHkwuULx8sc3y7KVWfcmkFafPxBCWwwGTAAvD1Mt7rYvaUYaRraWGsqBcoLTtT4GCBB4pg3t4nPibq7tweDLpt",
  "key22": "2gAKde5EYBug9k6SQh5LJWGS93LoSFrwaVmmXeSbUyrooH8aNMKztZ79YjpoC2fMzTbpBjZoYuDpuZCrNCjghceA",
  "key23": "xFoWZekuoGwzGYEYLDCRbZ7PuyzLtz3zQMPYs7ehSYsrhVjrASudyRPtDae18cquuK5smLUsFomeSSxa7mMitwJ",
  "key24": "2nhL2EgXKjZrMY4iahuwSxfZXR71FNMmiUHHJ4TV6dsuEEkVaW3bZppboyc1ggeTryxJryzrJ3QNBv8gMEeqSMGg",
  "key25": "5UaxfHHj4ueFvT2aqdx65cxssTNgxJCXLDAhHBRTyWGkii2U4irc4QE7TYbCwSfSuAbw55UPAxNsmei5ZD1tMvDf",
  "key26": "52NoNt7Uw1M63fiEA2F4FUNh37bFn9vXVY3Cy9LfGQzWAUeAw9wHTR2erEZ7SYFEewcyYSy1Yxuc2qQQJ8mXFgFM",
  "key27": "33gRHxPo3m5GciFXKYWwNEf8RD6Dfnn3QWhzSyVxRxQbVHjhBDcvVwpTnDifBn1YEWNh6hnXk5a3VqsPy1z4Gk7B",
  "key28": "4iAZjnKgeCBGURFRcv9bfK9BzwyyHjwukN83sii121J6Pz5wR5a5SANKgjFiW28XEU8YJcXJcvtRwcaeehPLbXBZ",
  "key29": "2pJG8vpfCKPrK7BFR1LPB9R3sy136jdvJS3vWPaXg3g6UKyjPo8ZfD9gVFpiBkJ7HKiaYUSc8zGzFeva6jzuMqQj",
  "key30": "9SUtJ1wbPSk7o3vUwd3irCLYg9EuU8FsaQhT4o89WFo1GQCfoCPkgkXeLNQDj7jnJJ95XAAVBSDdBjJreEfBCZH",
  "key31": "24Aw8d4o3i4nNuXrtP7fjrcRQiAWfmnNwK7nS4LyL7uSFTh1YkhJNcHPsDyDvWBjzRgDvcQTxJseMthmhKJUUdth",
  "key32": "4fxip3Yc41mZcC3q2mjP6YkFYHtWcnhkcAzqXFK2u6ASWGv6jaibGEThdatKFSKWqoYjJKMsED4J4ftWoNUMow6L",
  "key33": "2648cxKTsmkBzwivEpsLXQL1efzQkbvfsyyN4QSupicNg7KkiQLGwMxcm9J7BWphnQzLgUEcV1Vv6ixUMp18tMDh",
  "key34": "2Bujj7z9TWmzgNnFcx6CR8dm8Y6g74Mx2E4ZPiGrYU4zUEcdspLcLpKTwUrLbdNCf8ZBMJwG48kguiv5Z5k3stEb",
  "key35": "3XXpnFvG7H7zT9X6GuFPaYErZPdaSwXFqdssfguN6d2weHTY6b39eb65N39xVetfrFWm5JmhJfRjQS3NneDHdkeH",
  "key36": "3bN1vEmt4xtpx2booVF6aroX1uujacyL7Gj9mAK4NhRXRETg8aHWtkQ1Yi79ZPp59M9zUDqv8vG33Lzw2aSX9nnX"
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
