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
    "7joVp7WuSn1Rk1PCco9o4kZAe1xqphBnYMXiMX2fRgzwFeB5kXkP3SA653G5eYS1YVyrv5T9pSSKHXh87L3z317"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5arB2kntLVWZTFpigxSKjeZVRwDYKMvh2FawsZnS7H5kw4wb5g86Fr65yDi26JUFcbQJ9dH4sJkUnWcK8xrKvpDv",
  "key1": "5GbeH9UUeLH3rfMwNkR6K7maM6UeZmQ9P2TrXXDPLWcWqY888DououRJCPvZbkdGPYipXcs71gE63cb7qQoiQXvM",
  "key2": "3cmqHvnYkDwBN9CKBCG5rx11a8dHWNNnFZjnodTSsGnZ8Su1f3rn2Axch271ywZhuo8t8fzxW5DLAj5vX9H6yiWm",
  "key3": "3ARgX6KkyZohkSB74NK13Jwx93q27BYQTsL9u12NphXRg6hUGJJrSCycEcHtQHVme6qaiyZHTphSKYUtmaD8ndxV",
  "key4": "4W8rG3udWcrb8kJV4eCbXXABkArMcVa77hWVMqK7XTectHnWN5fUsiQphVpVZ9FJrPCH51vRFv9aRukLfNwjBGxs",
  "key5": "5aSoU6etBuGMLUaTS2UJ96wzuw7K7mDk7rzS4Lm48BdEzsoaUEWcZwg9yPvmtvDPcnK6HqTF1Xx5irBmc11RjZnq",
  "key6": "2D533LQbsiMT4WqYpaKVfus8kfYNVKBC4xcgA7iNoT6h3kQsvvorj8GmAXSiYTbfH7sE8iWqQ5CbY2iCYhWty4F5",
  "key7": "3wRAPm6TksrRRkGLpqux25KmqRJUuV2YSkwQLN8rYaaicHEodyMoQK3jfrXmX6qTsmusunr8Ce5Q6NEFAc1QM74D",
  "key8": "3Nh4eVqQtwy8JycL6bh6eGTmbjNN8zWK3gtTFsyRnTLXGc3a4xxUTU4Up6d2dvTaB6K5r4jEdTBex2Z5pekwssHg",
  "key9": "5kZCsEMiFMVgF5EabrRGy8XLskWBEqHRmUe4SbsLssBWFzCdbuqKutuLjViPiyQyJG4bEYBSbhM5JtSMkFt6dbyK",
  "key10": "22UBG3itF7hwypTcsWrxmVqxpbPvFoWySPc9p9nqPFk7her5Yx37j65Ra6JxfrQpvYBDuws6JJE8aeSxTjnJfKUU",
  "key11": "2dDmF2JjgxpmGJdd6AiNTqwnUHdELEZzU8oLBcAA5Rd8wLqHStdZWJpCsMuumJ4xkU81NZtVq78apJ6AXuWapFHW",
  "key12": "4372KALLE2CXuf8cKrzNc9YRrQkFDteJtRqt9rDtPXRVYgUMrTyPEwfGvxcBUx5j392YVYkR3w4R7yMWpQD8pNoP",
  "key13": "44R1MQBhHayVhMdtQvN8Smit42xJjn3nxe22MgGEnJzELZWoRspkB2eQ1zqjkRrinh1c8uxSkJWKeBXdCx8pobf4",
  "key14": "5i6BzCKqLzeMY6DuJdgcho2RyUsNrs7FvF5z2s8NPZYYNC1XccU92i6tZ9QghCSAwbZWyXGfHTy9EH7KvM6VMqdf",
  "key15": "3BCrkbjwytPaQVo5dTbh3q4NPzwxdqPLMZWLS23k5uJ3GTQzBSezEWdiU5nPtfNuYBabWLYvoWYSR37uQhPmaNFz",
  "key16": "5TfgAJkci4VRWa1vvy49b9GNdp1vJzBnF6U2oYNxYW17UkvngY3kMnUfCnhHtuQZZy8C2DTjM54QcgVEozxHbVQY",
  "key17": "52JxDudHfyvhgXUhNqD8GLKMs4U4uB1WvXrtTqaLGwHpsMnidNBWj6Q2qEWcoDxcQ7Zg2fj9kXK1ZThmspn6QShD",
  "key18": "Ar9hus8fYsahPjRD1QhHkinaxeaLKLg5ZfFCvsS7pLh4bShm7Bi5z761DjejkFpv5dTadmNchMUpoAJYA2TbQYc",
  "key19": "4C6V4pWRxHij3azGiDviRUUVPuRuL9KtDphiqeTpkN5uzc9eZoTAvaXwoR5gAWWSZ1N5TdnPY8rsmj5qnd2uMq2T",
  "key20": "31KXoQ74Gd6CMCMhUJTAaZh4ohNtPz1rUCshhusiWmpxC4tH5BH3hma6K5eDmZEDZHnhVp7bDP4zcPpWgefYfFdn",
  "key21": "GxCbXWTVAyjLZoEBpHmEz3RqqvAWzezhBfZpEbE1mtgWhDnneiYcm5HhbSVofD8Wpc8bSKahEFBw2W5j7vsZxKg",
  "key22": "5mhae6PfgEsnRVt3RpJ34e4o3s1QzWzFdKfgra1CmbCiDhs81E5F5AEFJzcq6xXnLBDz9Z1BodNeTDWEhB5RKPvP",
  "key23": "3Xd4pDm1VbLFFQ3bBNgTc4pAkA3pWjsVxU6FZRyUDvRTZDg5iaws9qgDbD4XxWebxAdibNHdBSpjRhtq3E1GKDKx",
  "key24": "5iLZxK8myuzJn38HwG8G5V9TWCG5eAAfZBBc2vSG6mgw3wpFK1pmyEhP9tANzr3QHHYVtRWNBHC2sYeCx6PLqMp6",
  "key25": "4NtthwfNBQMW1Xt72mKW1rPRtUr5cUQqrJX7WSyKrnUyrjxwG37isJi55TzMG7r3KExGa5N1S3joiqjMMPxZ4cSY",
  "key26": "3XhBDcLZChXmaf131CTRY2x1V7TyiSTTNL4s7nwDWuCKA1r67gZK4tB6uC1yg5EWYZDe2jxDYzF9MTNbPchmwwG7",
  "key27": "GuAFV8dodfiYF4SmWv4pbNDwQqDVapzz1XvLCmg95RqMT9ovCs1ftBfCqQc9kTD6Q3EG8AFhv8e7J8d63H5A3dY",
  "key28": "5BJF2g4P1tocNtwMhLzsn7Nu2vF7T7XFSvKvdNDdQEoujftiqewsGcYjYyN4NkK9G9qexyYZC4gPMHBX2rFGowKv",
  "key29": "62BWBF7iUQehKGTKWD97t4CnorVv9n2qwPpXtNB1NKCWvgbSGsTFr29TLnPcjKoZ5XHhvinhMX3UfNF7hFRBgs6p",
  "key30": "3UGKKEj7nsnXb1ezkVs9CWmY7DNmMiqjvzgAPBwQW7dr8egm5Lm6YJiVmvWDphhGzuhjF3Ri7Bz2yQoc3jHsZUB8",
  "key31": "5iV5iyY3P3QkajW5StUHKAEHHD6zXPFTN8yMcp8rMoHeKmLJmJtWuP8vm45YQ88UduPMnC2k44hmuwKNBBX4Rct2"
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
