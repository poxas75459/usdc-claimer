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
    "3N769wMPq9h57TLBUVCpja3Q6QNYMLvVBqsCpEYJbad3A6TEkNsgE1qXVMsh62ZtcvEcDysCpJoWY7i9EB1JC98A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66FE7L9cTFX5A3BDEwxox2zE35QUaZrE8UpmhauS71vwexNsV2JXjwekYsGYWDJD8GQ45bVdCddSg1H5n7A5tTit",
  "key1": "2Kb7i2iYKN2cCdwXsR7iwyyCgD67di2dXbBS2vzt27QJsCgaUYkiuwcrLPi8Wt5yiifeXchZbncnxNZFpMsFAir9",
  "key2": "4vrX85DJBLurkeHbtpcGQNTWtXTUYZoCT6YrKTcqrGSdsEKwjfY9grs28t5VLAok2YH9gwAwBvXHzk5vAADtdJgX",
  "key3": "gBsMf1p5jXmszE7WtaoZSJzeg4GTCMamNqmHif1QVr255iBiTgF7b2N8pugAr2udzunBakVTVYtbBWjmRAyNT7P",
  "key4": "3ASfnSf7hj71CLs8dAexrD9kPRd4UjBHu1HatsRGhBWrGJvMUPZfYviutajHy2oeYR2YVde7RUQtfhhTDZ9Q55Bj",
  "key5": "4qUnos27Wcqz3vwXE1Z5U36NZHF5ABUh8dfrk9qWxaqc3wYfMgWVGyRzvn1phSLJeNZH2A34qzUkxisX5Dc61CLE",
  "key6": "rG4zcmwd1gFryDoCmhEnYRiGUqFAv4pYdMtHUVZ3vsop99Vtsp3VcP53en4KZAJqAczkDE2iPuB8uHnfVVGUcNk",
  "key7": "5uxSNCQqAPuEZfQYWyA8jdLz8yqTRezXCPMvrVoerTCoEYRkjKyuXVcw1w2Y7EpKT1rxFz3avT1J1qd4sivDnTsb",
  "key8": "dVTZNcnKkAA97kvXeyv3yQVSEZ8Q8159zkmXxZ3TxrxU46E52LGaMxgDSRTPCvsHYDDwU3A6KoFyA8N1Xe578uK",
  "key9": "4uoD7wjEzDupBRz2s6MPEziyVmBD19czggziRC5r5e24fDFUfjvR3TN8U3CivMtNSpoXGc6M6Ho4np8mMHKovgqd",
  "key10": "4LdYayb6HugyLsyKzcReWYWhLiK35qxc8vJYK61eDTikNJrqq5M1zLtZAyK4fizMgSegbG3LUY7kcWs1NqERYcXY",
  "key11": "2ZzuTtAXAS5QV25sbQYUQ4ifj7HHBEW9115zKB6ZnDgeiZqeNT9j9aSW9ej8pggK21Pe3MG9FBkMhBDjd1cEzdCv",
  "key12": "2ywUhNpHtmyHhd8UmrkizVfG2qsp395PknkG9k6s2kQE4xhV3FfqkhDUW7aaFzdT9pa8QyYb2yHP6QNw9FMvhF56",
  "key13": "268L1ABWjsfVkK7iBbF2FBm1WvH8SdadNAUw39d9SzoVD3xjtPbbDMhFvNQRqwvLbjGuWvzqfHT4ZDnJU2iBXwn9",
  "key14": "2pD2SgPD3sd23HB49SZpYPSukHst6GZae15KcQTVFyKJm4Stv8HWWR1K4SMUaiocq3BiEnnKYvpS5CSGkbkKf7Ta",
  "key15": "3UNhqnN9n35x9bkEsPtYddECHT9s8XHRxAZ9manSrAhKo8W7JvBKBWHniCMjXaj4qsRdXXi4EjCJu5j6LbQmKoDj",
  "key16": "2ZPRmEquiuaC9mwTUcmZGMRdN4e34WZkyxpw6nTNgdjKokXV8UN5kZL6VbzsAsRdqt3RRsS6dpCFPWN973nJE4GR",
  "key17": "238iohPGmN7eeiY9LC42AdgjXJM2zWkWM2X5cibLbAndRsJFP9bD5VT8JfJ7o88Z5w2MWjKZvPEHsU6M5UTGdqJW",
  "key18": "32GKMTe8VqnLDKKEBEUaVUGHTFRE1eWWvTSj1KzcFokiCxPpttTSGTDuTtDHHVCvWZwvfY14tKxb4E5f8HUNAHvG",
  "key19": "4iF5oH21fqP6ap56SwpvaW8hCJRqSQW4vs9ox7Je4YoayTjun68hXPkmcyX8DDpdJ1texYmXSTjpifMyK24Hg5cp",
  "key20": "3T6twiQ2x3L6r7GLtvcSNKpWc8BHDqp2ufD9RKo1JfJWeTgKFWHNQL1R75AnEwUoqj7BAbEEdnzM23p654BZHpqZ",
  "key21": "5ruTzm6JM9PF5DCApsTaXBRotw82mFwMFp2sdjy3RUa3QCUMx5DfwRNYqqNL5T33QoBYkQdBjYtApgr9Lrxr5Pej",
  "key22": "4LBUkDcbR5BztbZjrKWm9fec4iMbmtnafNUXYcZPnSazn5Z9F4MiJoS2ZDstWENdeYwVNxQUhmUSUpAsMZG1j4jo",
  "key23": "65AKyEGUF9YZQdem8SQtW21XSwar6CWiukg2b9CArtv8XgE1Y9tD6fhY6EZ1DqMxH7qmSyNXMxKv4omSRYwCVpPR",
  "key24": "4sSPZmx9G9roBJghaET2bRTMhXyXchL3jbriH1zP9ostmNFoVNAVfnGsrDrY8BJXt1J1R1eQQPZhXQ9oM1YYaTzs",
  "key25": "uQpQ6GNorSFwMuXMh56hgewPpxnJcgtt8DvCfoqedR6FDkZCtJTU4bGiKLp36FURRJeZwpYjPg2gVr6fASZ6Zsn"
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
