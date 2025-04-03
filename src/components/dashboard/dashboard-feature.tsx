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
    "2T7RWB1Cw6WGAx2KffSWXHuWnKGeG6H7TZkfbWUJsBSv2AZwaExh37F1v5J2DiJbdyfXtHydEF28b4dc5hibDnkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KrRwHtj33PLV1dUVWfMfiNF2NBHw77yrovEf4EezkN9bbvjvGr1DPfa5i6JhyBZMZ9WaKhd2bGuzAbi2nobDpd3",
  "key1": "3oAejArFLiEbSTcufmJJremEWmAKhjLb6GERftVZ1b8T1MpTsG7GVgrkUj9YgRZUWZK1Ymm9HvZ8fu1LHzuFx52m",
  "key2": "3GencTtMqHJNxVHKFMZeMJHgD7wvSyZyeKVADDXFegcTnXLzdtNpBc2tcwswmrNcgu8WjNwFcseo1UjCeSx7Texs",
  "key3": "2v4F64xz8u3NxX4ENDFf8sVmGd3KUzNR6hC9bNvrYWGutNivr9UmxwhuAaTyE3ShuWirrBZN36woggeioHP5E7i2",
  "key4": "4jz9vgKZQY3P9LjUmUSeMDhpPMtKrHV7Muhud5AgTtMp7FAqzk8ZuzDBv8Fke9bceJAewbtAgL3QmSccnKXCBEHC",
  "key5": "57eJWND2ZcQM5Dq6UtmKQwNF7W69atNreqz8tSNmgYFszgmwDaqVDDJrZctEeShQtAAe3oVk1RhvFrHuXjjC2NDo",
  "key6": "28m422bAKFjQtGErENwq61wTrpzXgxCzENpRHNYbSHAaytumQ5YtSU8iySD1eVkA1U4D4ufUSeF8cAjHyYgDYENJ",
  "key7": "hp1N4JhGYP6xKCWVKYA4FyeUwsgYpNcAKdwikUN2Z6C1prLyL1xzAxpQKtvrByQa2RJSerEBPbGaemEvkEThEEw",
  "key8": "5kXNzTwGMb2VT159L9aBN25PbeSUH65c6rdqfSHNysoqJvW1QNfWPTaprTwv8GcCbccdXWWV43kXCSBs3avmCKxK",
  "key9": "4u6kS7dUgJw6BqnjtdgHHYhqsKj7tGDfeof6N6kBcBdC7fDVus8nDTwmZoWp2d3eshXEqoUPqFbGgKzy3CmYu6cC",
  "key10": "2crJqJpDCSog3P8spdRm1EqLs1cT7X8nPQvZ7Km48EZNAzbh4NkMGYRtj5XwK57nTfW7irHBKBaqbXvEtMx1HgC8",
  "key11": "4HhbSeM7FrCciAS8PtcmBmxXYmbQWDGwNbdNxKzuBrv96oPit6sErTbZyQ2deaK4hkZW28v1c7ixnBjEYKQphd9E",
  "key12": "4hHsE1idAjTuumHyRvMAQ2URuB4TM1j6QdC1cRVR7nTkNbvYewujPvap2aGTESTDBS2n2BYL9SrV91XVdqGnnS3Z",
  "key13": "FaDSz7VY3hM9o7LWfAP2k1adszTUXa4L1QqfxHzhvqGkSbrD5Zuxo5AksZx55mdGvGJxkN3jKTTnvqjhTEk96BQ",
  "key14": "JyuBFSGxP1kjcZKLy3STsKf2cftmpafcQY9SDbtioc6Q52nZJohZ6ExruKEJRQapLjrBizvqQeBjvvELPfFcQFd",
  "key15": "2fCeFMZEhEnaoPM3FBm8MTn2ELKAyN3NQHGzjsu5Awq71scmejMPMP4VxnXHvkUNZ75sedYiYDpBkwm19tZ9JyL",
  "key16": "52UfEDtFDUN7AHKbpCPQhPtZ8jDVumzvNSUzpNtsASASp3BT1M19iK5FFQMQhrNU5fPa2buRfcjAM7qT1N3f6XND",
  "key17": "5ttuGWrGTvBJW8CyyTxaTbdEoYBxaJiReTxvgZoRSW6ZX3VR7BfemvZC7ktmezfJ7grz2DstYMoWdcbPa2oyzyFX",
  "key18": "3puQoXEAKzuz8L5Gt9Jy4yt39PKDPCWY55tFb9CkoTdKnGFd6neXcgdvzNdoxYz1W5zztmp9Ug9JoytTk6KbqUFE",
  "key19": "s75GyDMxEexGBMbcGVmmLo8BGDEq9n2DqFNuoq6zUNRSbAVsZZxdkNAsrAanJRsgtpbH15AJstHz38ibkKwKHWm",
  "key20": "4xDfLf7KJrzTbSbUSidkgkQFSsPMYXBHyd5jQe5bFBLTEHw6fTxdZFLMdor72N6SzdYH573eky2daPwVDiywgbCF",
  "key21": "61Rbg91hxRK9xJjrLvLvGMBhBcyFPcmGjJjG3Qc5PBVAtWFMJoVAvDo5irXwLGwimbnLsXZ2z6Y79zjjg8LTbxBB",
  "key22": "5Qh7rVacv2mB8GF9aAukXj8sb8KyZXsSdzDuns4vzeS7wHKHqA74TCxZWEYTmXxoi7pStknjuAyK7pztHzBa5RYr",
  "key23": "4TXKNo5XWUgZA3xVAShSThJmYR8FhuaXxtd6dKo7QYvty2u52Jz2rgzGUGndCkqmtvvCCy7XeVuDgpoaqM2DAnwD",
  "key24": "3MRuroBD3xEcHWTPLBatw8i1RNtmYPd5LU8xy13ZTybthcHxMbhaXiM6mcaSVYdikGRVN5geHXahncm1hhxMcfmG",
  "key25": "4mJPpDgPrkeDHmdKriVgRhmnXfiRnWGWH4ZeXzqBFr4r9NE2ufBmr1Mk68odBW9XYgFbbUB32m3nX2F43VjMXiQG",
  "key26": "2x33M4fcgdHrT1X33LKkCjRbHejBCjDDHxrjWsoDE29ycipHn9zyiPEdLAfTXkoWy7zSNh6ybVDySf31FQBhxkuk",
  "key27": "5aYLTrbGfGTqNhu5UMvgUSp6YmLJKA24xvjcyGx7z8RiP43LpWQKLfNyvN63ajjBqv2MF1TjrxpD1CC1AUWEnAwV"
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
