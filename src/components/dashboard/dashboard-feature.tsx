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
    "3WK6KDpxAc9xFUuNTpJhqeiBdZNoqSQe6EzrT1xviHyzpV3YLXdsMuWJ6jhuXrqgpwLCB9G4igdFUABtV1brvw52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TXMVthU6vPkoQb2vmCAF4DuDp32Wy1zeYgHPfMcuNXwkgFa65VByGFQFDV3pQTZ1yS9qoah22bwAuWfFGMXdXdd",
  "key1": "4MRXPnxz4zNRT2J1PWPiHpRonvHsTyMydsk8nuRou4YePDdPytkHd9aR9uR28R3MuZ7oyiVXRHKfNQeLT5Gfsb6F",
  "key2": "e11Ubwgj6QXNcXszR34PGaHb8txaCoS1WHthc3mT9MfGNWbUgnifvR5Mjem5boyFokm3URdP1g5EdRKyvNGMqRF",
  "key3": "61KZfJwD6TnKSQYukjFiRiY71cS82bbxb1Vhh7orq1eBdTCb73VGuiGvvyrAyJKRi413d7xidkZQsMz1AvsoVuhW",
  "key4": "4tuA8dSepLukyxdST6L5Y3hu5Kvxs8vy3mvvFcBvRTyXgx4F7x6MDBHZWvQEGn6NEVE61Kh7Ezjvmf9qyQ1wMMD4",
  "key5": "5BbEqcLgEJ1vbKoiWtnAgWEpaQkerTUh7eGMWrEYowHA7ebwHMfAa3vevsSmAS6WZcD1uhhaVtWHovVkQKwZ2ZwM",
  "key6": "39o7oqzd52sxUzHaMMDedBA8JyU7pdkWYVZEc9ejJweBWnunmt6x2b4BJHpbQs3nh6X8jon4MQpLNDciytL1GfDZ",
  "key7": "5zaWEtHwui2RCwgKXZeXE9dAFoEsHGCm3m3nU7D4GNbG3KEaTGTytkFgNTZYDsEStYT4dswUf4cMxdJXYzgivksS",
  "key8": "3SRvXwK1gq2yFL5EGsfJVpLXgd34uLp8CEMz3fjXZbv96sZi2V1o7e3Pdwe4ip8XwJ1uXF8TSvGrVPXBsZDzc6kA",
  "key9": "5DokMmT8Jb919ubRbfexMwbR7UCuxDgUXYN74jtBqmCoNPtMR3fy4S4Nkdyi9sMbFhExWtNgkayGF7VD2RsmRMvY",
  "key10": "4wG8t2fTeE7jd48s2DmvibCkVJtuYVED4pXA8Ydvn38nmXFR1ffAvVBXJ8CP3ycGonKK2EsnENtYyPts7BFh5BzK",
  "key11": "3mSBfAxSzopc9y8h3UrEvcB7GMH7FvJXAYsyCtFvDuBcZqBLtWT1hZN7d37XNt5RgsZht2rSCFa6ZDnrBWizZqj1",
  "key12": "4szv9mW3PSxQuquxEDCUejaqhvBsRfBXNP7CuN6wAbXny6PNSbHpe1baYhooMhE3kUuLe1d5M28XqBMcqcfqYWC4",
  "key13": "2hkyxytvRwa91ZhZNGpmtffnLtjGD7r7XL4eez4K8Hz5AaQoYbz3MNm6gAk2S12ccKWH4z2idcH4kQqHDb5LTxNA",
  "key14": "62HP58BNFHmTzBXaDFJNkn1C7UhQv4LE84tKS7bWhZt6vfS1zR1bP3mg298XjXYABgkJnUBWG1fR3Y3JJjGWr8uT",
  "key15": "5UacEWMAteFF4iXaN12fE4JhPnX2Hkjw86a4qL9ZDtGEJNpTpnkmSsLrzhTLfQ9i3f34fxyUN8oQEM2KEpwq8zUo",
  "key16": "2RhtLGGugiC8FwwhTxLmEz3vRUaheBzwXzCe8soAqLFuXiETyBxbqkNiHSSw6Kh6wybXrAvF6X4AJDmWYvT8Y3wi",
  "key17": "4quhaTr9Kbg35WFA3wF4sRCiHDf9fWrKzUvc6NFssQXUy5CW9FT7uJ5jgvCKHkpRWr1PH3rGGwrqDdgkAckKsowR",
  "key18": "4cG23osK7aCsn9nRjPURtcqM6WhQcaupdSfP543SyCcCf3v3rBKSGG3ZcHed8MVHvGUdEqdwozaXad7GvoKag3Fy",
  "key19": "nWXNyah6RBL89M2pq6de5PjMk87ZSTjmbHNC5EkVg2fV5uNN4PdyTmR9R18Nwo4wmQjcWyincvN7zcUGKKWWrE1",
  "key20": "3VFVEbKxD8V9kmEHEWUBPAv71tx8VLrPZotbhSkNpxBfGWdrpqmkUpZMFTttNM6Vz3emNVaWnqnKajrSt42QLmfG",
  "key21": "5vcqyaQWMGyHBdYxMXBpfrcyifZrbTTt79JYwbUNjEZKbbKQQ26aESmfYjpp4TMifkTKkg44D4pJMsMuk4YW9XaP",
  "key22": "EqnQSwfw5NZn2WpBZV7QHusstP9oqokvi6YPC6PVzd7d8svhbz8Raoofvp2mWk8REQkHe1H9z67tXT9DATQBYnV",
  "key23": "2oz6F49UdS1zvnr1zn314xac3GpvGiLGSqL6YeZX7rHtb9fqRwT4n5qhyViVKmK9WXSxEMtyYMD9kYzg1eVcyoN9",
  "key24": "C4EhDPWShntoSPw9SAqhNsyhxurteyg4avK8yjiaLP2ywFQKvPTiS5Hs5Hrgq3AK9zjRLugQKDbHaJGgFT1js3x"
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
