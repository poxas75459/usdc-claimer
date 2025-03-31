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
    "4QxSkKarLyQZrqujZLsc19ZKc2Vhw8ezGwwmd5wW8ZtNdCGbKSvZGsBACQVjXpZ4oR1KsAS1jG3KXoBhwp3PE3mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSvrwxVpF5aAs6nHPp2ubpBXdWRjLZmbHwB7ecyRgmnzeigtfm67HPi9F4GJkn1yGhRGrEToCjUaXSgXEk89tU8",
  "key1": "2Q9Kt1tSgCJSLcXqhCXQfHipWCm3vePDoQ5ZsmaYaqt1RaWXqU4Q7kEGegVMuqNV35L2imFePnkDVYFh6EoBtziP",
  "key2": "5w5HaQyyc2MiGB3gN8jWKEHXaXBMFh3jsS4x84NhPWJKnUAfmmMWR4ZiY345Cp2j5vaVrBNxM63DDmLo9caeDmBZ",
  "key3": "4mU9gSc6SRWjMUDryhvzWCaRnku5cYf2HZ2KPMHNUic8H6RPBwbWvTddmpEHukftNoNMDbjvq5SpjEpYyJBjZmPF",
  "key4": "4eUoh9Bvufgjqb7wsvPL5A3g8N2brdbvfDA1mnLJVSGYqG3DEkXqugi3Vye3kRchMLByLJMYA9jexyASbSacpviu",
  "key5": "h2Snup68JnW5bvnGRPgq49hQHxNX7aJ4VxCq9p3roykJxE1abvT73PUkmLJFxvtXupcxivreDtNkEceuBcz4uQU",
  "key6": "4cX9pCJMPtFvCU9Sbru4Jhi1RPwb2M1PcHjbiQiF2PSU69LcRSCEYuqpoUQcr5jTQPGMuugXybnTizNGiBoKUpNM",
  "key7": "MPiLYNVaHSoDaBt1VMgxmeoWe5TWuyTkHkCDpHvhUTsTWp7pRcKnNzp26N6j2qJSoV6vc3dbcRkqxn9kWrPHpB8",
  "key8": "3gsuPCA5oEqSzEaeXKLoEXCd9eFUnBHUnfTt32dXedckbMfUhYSjo5pNrnj935zghEpqSpGTscBwa8Nye43GWaDk",
  "key9": "2LQRTgMx7R2Sa8AVTW39iye3t1JY1kL45bdtskzPgBudkyABXEwjoRB2goYbMnfk2bFTsFHhd3CJ2bqEYwmssipB",
  "key10": "3G78sdbfmiDoZExXfWTaQQyiE4MLmEF4ih6Y9DCkskZwcS7kn3nM5jUtk7LUXL1NW8oFijqNSPdbxHSm93eXmfSC",
  "key11": "3nFw5mfmV2R6xyRxawBNzLAAvfp4DSAWQf5TERq89XdMVrn84S3M8X35SAneM7opB5XrFMuugA9NEdK6FeVhq1TQ",
  "key12": "ZUCuccUCJYNbisGSBNfPHaLzPE77wLQwJAJCFFrYJ4X27XjoiDKcX6vUVxpbYuDjmdgPXw33JGsmoWSWo8wSVQH",
  "key13": "5per5bvUeP8nKLLjvzbe7KEi8cVrqZV6B7GK6bV6ueQtSDPS7q3cW4D1DyPe3tr5A72AXo6VkkyybE3zys96jcsV",
  "key14": "5uuY5EcUxe3AG95nJRtG9kuV5anXpCy2vTzmVafbFgw7C78YordrVZAMbRKqZzsxKK1quGjS5Q3r7BGmgRcQoa9Z",
  "key15": "zcdABoVkKbBb1CMdYMdyqaYNFMhL8h1XR4xPwNFdTSkbJfAHqdVRd8gBoZp1jugasowyrq2N2td1HJhyarKmv9B",
  "key16": "3C8LDztiqypbygLBDaQcUMe9H8aY8EbWsQwcoteCNjuTzxqWZENHsd6vTMXsu51SEo6RUpXvnGuWAZT19wyVgLWq",
  "key17": "RmwRfBWPvAQwNJs5gtYLbbVQ9b7EQcWNtP1A3nhTj12A7VCVSZVjWVyKTuhmQ6dyMGccpeWmjC4GEVagtmZt96M",
  "key18": "4c9iHCYdTh14ftz1EFAuafS8WSQ7CZnoogeFPCJVNzkmafPU1dd3PfyQg3wkQ29ADhQvEPby3TkdU1gSNj5apa74",
  "key19": "5i4YthpMF55SBn4ez6mWHg2MzpofB2rDfBMGLSVUUNpwRvtvbxR8Woq75o19a3q1GQGS1k2Q1RC5QEHXSnjinKzg",
  "key20": "63mi5vbZ8rFHnLJ6JABTdRKJ4hqxLkTxGB9D3E9AnLu51KK98U184t27zatmCF7yVT273yv2NW6ZnGihvh1FopEK",
  "key21": "4iP2ZN1nCzvpDD3i7wWGDahsqVqsQASKnfcUjNcRUdyuFTgrvW3Y92rbZWdaFRcsiQM3aWF4uGUanRmDpnXCFtfY",
  "key22": "5YQnxozkZYa93nKYBpBuo16ZRgrhw4bF5up9LTjP25zmisoWj1xWTZusGeriBYviv1HorE2WhwNUtyLkY3whuWDx",
  "key23": "2xfPBfsXDGy8KSNQ2rM1qmGRmhARV3NKwgqDZHB4KyVXSQFS18oAYcyvgT9wwwNDHVMTHD9AbbjJ9Go788QUQ3Hs",
  "key24": "4qWCfpwKbkKQ5dwBfjb4CTBZsBQKsJXcsG5SPTfsAJKc7dbTZwTeX8rViR9FReBvrPXf5jSZn5SgXXvVd6WK5Rgi",
  "key25": "47Zx11Qn2TWykj8hRSMuv4o79svePHwpdsPmm9GUwfRhLMRBpuzfpm2jsR1BEPQu83x1sUsyeLGHiEUq8bPxjfep",
  "key26": "4wthppkQ53d8gWBR3nYpQjDEFD2ZFJ2i4KzMYSUBnWz7VCEpSR9T1gMZvtRmjLa3swnjGh5DPf6bwzEx2uxkXt3E",
  "key27": "5FSQk5X3Dgkyp3MvPKfXDD9WPiMBS8r1XG6EJbEBfC9pWvMYi7wMuKxkqvRnHHjHaJbmeu3pz6tMxLaLigp76WA8",
  "key28": "3K4Gk6ANJsnWBKjrBjReS72uLsQjjie33pfWDDJP9Usj8RW8KgGzMKQgYKTnfAL1neY3XntTHoYwFEYQ9AHjcujp"
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
