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
    "5wya2HLqN3izmYFEiRsLm3yfhmqyE28vNGqrXZyYpVuWiUQQBSdEoVk7QdQ4pTMLWp5ZNVrKVyx67kCuegt8Mpu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Y4hcjfjit6sDL4nJYqWfBw29LvL7p3cEqiyuWauTBf497pBiYWBqWkfZRezhrF74RBtU211dN5HYbcVoxcnETf",
  "key1": "EM2cM6BKMhTLXko8zbNcTbrsEJMx2pmW7mee5cf3Bow5E9HQQv3hzMgSXhbRjwhykqeusMpXHPrssUvfiLXHNUY",
  "key2": "57tRdYL2LQvNQpNLMiVs5AM9UXV47wDxEQPufkLcNSvBGMSy5zDkygkrqnpzvuFymhCkSSSsUwneqDoDL7h8Dknr",
  "key3": "2NSyvn7pyfbBEf2mjh8mE7oR6bk5RaryJUCSkwbXoBxLrjCfHfuUPhbLgqSeD6wxXBmcLmTXtRRoec31epQkMEg3",
  "key4": "4DB6vod7ej6fzf8bVCuAaCb7q8uXdipvatLa5KcrDnDBHWwsJ1AoVbGnBCYxUdQ1abRc4ybDmodyUM5tJXJMrTvV",
  "key5": "4T4CvUDnRjptqKEwauBdWz8FgsGd4XSmqqupUq8BF4YEajzdenUMwyJHo63iraYyCwtz9bAxLVULED7QYogESQwM",
  "key6": "xh5UJpMJat8ZcSvVGHZjgLqDy9Z5mu2VKtwkEmvxBj9DnMZomziMuvmLSWaWyz6mfTsYLGGK6hWjbHUExEquSB8",
  "key7": "43WNfpZDL6GAzA8UaTP83VgL6tg6TDKnx2iL5V6TU2PTAvNovqHNXxGF8VzDSrTUYLfmr4VU4X4NfHjeZEBcFNCc",
  "key8": "63EKwUf1netbvg1mGXn8ViMrqqSiozHPsYmKemSYQghQoxA1uEZepgtktcpeLAq9aYtMgT9cURSphkgQ7BbZXF95",
  "key9": "52FsR9WX9GZFmaZEpWESfV8HYBJPxTVPhhPiQxK8ucVM9a2QcFUvUSKt75XdjDPao5hGikaCixE5ou1FREktapve",
  "key10": "455B6NNGZSQoXuAXYy2qcd1ctBoyJJUDR93yDFUQ1Dv2DwG9ooxmQ3MLwDvbFoSa5mRpagBKouNcHcWUM59z87gH",
  "key11": "3CyouFWLHbkYgur8GHYT6Jm9kVPVHdTAEfnG8WusFCikeSGgN5PQ6GZgifUBHscPaCPZuviH8oW4TvSjquWyjgmY",
  "key12": "45Z3rBBNkBn8j6sjTTcu7wQ4bfw8USeaBcpi6LtBPG53hBVmPdFJdbR3Uy4JKEdnDAcNHZTjsaHXiw17um1Ekrq2",
  "key13": "2oTiWJQvTWS4PQrRDjwygFK82KQYMACke2gNG6mJhCAuLSDKijSWxGY4Wi26yeYvBKLt7p4BVsPeJ3SCevRzGWMR",
  "key14": "3aZmxVkvrHA3qLor8zys8HurwerojWefF3ZpigqVzw5wHgrGUh4jCjaq2AsRvCASpY3TYq2mCHJiLzvt5K7mWHAx",
  "key15": "5dRWaHQxH8Xyz2CnTVWLzqHxqkHAKZZE39G2znEoDLTnCbUXgZeRaXDkLJkA8SH3LD5mGnEvNg1QPSr1u6vESNjR",
  "key16": "4vaJe1EChgGMGt4RJtnBZ2ZTqYu51C3XyaNqsEjs7AWghS4tnK6idQUj1u9E9NkgYTnveyk3WDhm5s1xfHSG1116",
  "key17": "kYCR8aJbm3GByPhBHtY8s1ke5uCkYQMKFT5BSCNdvDx8sUiwHjn6foqdExVHc1nWyhRjSYU7dEoWFd3i96QkVCi",
  "key18": "wAQJnBxGAMTYgx8pBw1zCR9bDDVGnzxv5wGf26zAhYVmYpxcgqpArWdimBNTwztGjTiZVvhHCAEad9kprBqvU1L",
  "key19": "5u2rei9Q79iwudumiLXGqfo6csn6rVvBdZYkvTzc94cDRoa5UkwTijk5tZdnaL8bo8xz5mTVwRVgasNyekpefkxV",
  "key20": "5rst8kit9wydTP2TMVBWVCMGTfuzxhvpyh4ZKqRdqkaVDP6GgwqMF51rmfqkoUkH1fDC4btVWUWAoDJwgqLX5qdc",
  "key21": "3qMfefskp63eKgdzEjLKa4YRc5psF4fhdt6okMSGhdhC3ChxtJUm6iGLcaSawVekYsyuHkXmtPVChkjX5T6FvZ57",
  "key22": "3RbGBwitKayZs4WctAkbDPUSJF59gpnbmUiG1z3tXHXKfuS7FCxSLLPW2JxkYRAV979FT32BWgr8cFGYoggQMxRe",
  "key23": "4nkfCMFULNmtCWyB531QwCW1d8xY7HA8SULWyR3d1FmFQaoD85pcU6f25adkQaCraMEvoW7g1rb4Nn73FZozrDG5",
  "key24": "2Pm5vq8FwT1jVCzwuapAuwc8yJb1yfL7caccstGrxrDtSjcuKEJxDKzbQ6C7FhkGXxJner7Ao7GEaYHci588ZZSm",
  "key25": "5cqps6UyhuzxQFVCPpYUFVP9h4q6xWWSYZJrzr3swrjajNpKRtzBXrrB7PHtGgzwB7aKsLB3E3kWHvj9qkdUJeZX",
  "key26": "4XPaz6aVtmLpfz4NufgntaUJ9sjwSXmAAwWmE7uuL4SPcXC54Z3NHPby4HjTbA25uqdsBfQRZzjuHRbEVXg2V9bh"
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
