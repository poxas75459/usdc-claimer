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
    "4z5KQjtXRPoDYC35cAXn5Zfv25s3aRNshs1U25c5LwW3Vptv1sxF8WSWuAofSooWPCwiiV3JQSUUHKkAd9Nqtd2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NzcixTLQ7ZUe9oNqqQs2dVEjNUQvJKpkrTe54mpoF8wcdCSF32z6rKg1aUurXNAPpkZg69cRyxdXdQxrdG1rczb",
  "key1": "2zrcXiTgCn2Ru79bDegHkvnDpom31ij4kKXodFFJ3T92TChrHNWYrjgkYz6qpqrH4ss2LmvCrc8RNBBsQxmXVFKQ",
  "key2": "bkfXS7AyVBf3pkyUMuDtSwu9EyjTLnXMuhXuZhn3PKVrHDPb4Yp7TuP5Ax6NHVr2qVyu61M1pZnpokYMXjGFKGA",
  "key3": "4Z2LJQ4J3RcqbuhppuisQvqRVu7suckPzifr5SKvis3qBFH8mKbSE6JFWh9iqDK51w2zSX5NBfZoydSWW1qZjzQq",
  "key4": "2Z12tdX8wG7LgYXCTWDiUcSJmaAAnwnwWiguFo99B9kB9QXcYGEvtb5CyDgbLgYZknMGdRdGnKkxQE3RPCAx7Y6D",
  "key5": "2abQS66iabcY4S5xZBYAmVEuAm9J6sux39qKwc2nfYetKebzVtmq7MX7GSSeHo7PT4LaUn4EHqPeCTtGgmHmtznz",
  "key6": "pVvKc1jzk81BJdhbcByHGtEUo729Czv74S9u2cZacq76nHWpeHuLiKULiiWrkJU1Sh9Q25LKzvVCwwaZTmDMRae",
  "key7": "ZozkoaXLqAfjMKXVjM17AWzX4FNDJDoXY9o3evM8hm61Be7hvdDJHjRc7jLazS9aF9g6EfdhN5fogod4iQ43qm6",
  "key8": "ztQBdALDnM5U8bEajoubUX8nU7GD33gUsW8wxY1RuzTvNAMEpcN52WMSkBjo21ufvxGMsPfDpV3jWBHmeGnuXek",
  "key9": "4qNT38WMWp7ExhXBCRsqpnb5anhn8ezKvVWouM5HvtNxQXssFtap8X3vJFVuTiedxHJsks1gqXvAsKMY7CC6ZRRo",
  "key10": "2Dn5Fk8T1aZgJAXCeUMxnKDi5N7DpAjR3ZNRTnmtwZU8iDcKsnBGpZD9hJFdWsAS8wXfzFow3rRHsyNgg7qW64pE",
  "key11": "BN4M7tK9MofYGF411TGvBVpJW16iFjYajjjpffMQC2XTQ1914eTesQgHG8NtSBQUvEDJepi3ePaWYy8RcnCoDcv",
  "key12": "5hGd1ctyetRvAMzcrBBxSsjR1LvYWypD4PjWGzYEfoHb7z8PprJKTVtnR6i9WMHDCwkPv4pR1Pr6FujE8z3Nww7L",
  "key13": "dvq3H2zY2pjHAa3HNbqHUEbvTnbqXiy12NbLrFJS1vM94XbzBqzxWsSKSVhhEamQphfmRP5s1HB7Zr2Q6FP5Xwb",
  "key14": "3q9AWBKvFKUe2mv9Xt3fiVLPUR6zgJPsyPpMkNK6AU4nRWw3csmvtSPoqcK4mgtjafym2rwGDMZLYy4nZ2NXzmc9",
  "key15": "4aAgH5wSiC6XigwiFuKiXPqpnKo8boAMZnQPjRx42oUVdqX3cAa15igZ9cG4B8XuH8ZtnWX3Mujjieir9LYkQsV4",
  "key16": "5YcctnQZCGrBTESe524svxDNUz2cHKhzQdADMgofrKoxCqpxGYgqAMnz2gW1gzr2PhSiQ5bgxxZycFyBouQuVK8W",
  "key17": "Suv6x1iyKXbeEoeV7gLef36baEwvir5M5LRByBKPSQFM3ogBA7uRikS8U3MkaHQdxEqGzwRypQ3FaPkCFG6aAtG",
  "key18": "2DWBRRaptaRyh51qNWpXXXuFcJv4Pzo1fuR6HCanp69dgr6XmsJ2cNdvuTD7qvfADeEFj9pPYySth4qcdo7vUhbk",
  "key19": "5pKYyR21kkH1XBgigu5xH5DEK5gP61VEJTWR82giXRFrzyYCadPWTayzw3m5vunrH6WeXzrT3xmD829teR7mo3bE",
  "key20": "282pqRnZYXeuFMN51wPJLo46itDRNgU3guxrCwPZ7UkiHRrdGby4WmeY2GqAJ93htVNJubefUxTBWpXt8kSejecR",
  "key21": "28EejUjPD1Y91p6SzJk2Vq63EVmhGbNcVnwmjfXD25xaZFAnSoi6L5qxNDDHiHXBowHC5PbFeFhg1V2hGMZP2quJ",
  "key22": "4bHFHLKbF6MDiJSMzcRrarog4o6vnmWHvenPUTPpYNjrhaHYbsXA2M9oNq4S19K5Q5wUnhCr7XtgmXhyLfEcZ1Jk",
  "key23": "2oPvWKWfkYvPCKtK4pBgteFTDU3jRxsHBumyVf61qGFrajcYj3UrLjDJj9eHraQGqxkQVXuctKqR4cRMBbDqPF7X",
  "key24": "3BNn77ve2BNTvwdRaoW3gwtPqi5Hc2YqyEXF4prgQBtrzGmwNTERfjb9kEf65MxbGJ7VQw7t59XUAPxJeMXXrAHV",
  "key25": "Vt6RpqK7bE8yR2KnZKDE1JEGSgSuMCVgX4Ftie7q7zouEjrz3msxDrzRdzWjCA3SWNGmRcTASUu8euqHvnkZkj7"
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
