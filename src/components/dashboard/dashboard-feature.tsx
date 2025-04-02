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
    "wVML4RRFk1qnXwGgQtkbjsGo1uQj3yW1dXorLp6pB6jDCM9gf8WFfARb6GzbS751c7Trq9kzt14WRQ183ncNzSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LYHZxpyoyEpYJNKkTxdmSCNwapjmWN8jV8UGfYjSXGXKPo9pviJ71uWHQWE5194yDHnN21Cs8PSZNJb5QGH5jYe",
  "key1": "47dzzL5bjncSZhwd8jFSoTXRbh3Bmx8UFnDnohGuE6QWuUcJWJdeCabaWRwDyz3jzehkJ5Sn8WS3o6YHy8KwwRBp",
  "key2": "5GmogtUibNW4AnmWTduM5DFf7ABp8KpwPWt9xnJCiP9VeB9Q9VcMqECGjHkWFKUsJAK5qRqLybD19MCJKvrBMDzo",
  "key3": "3MH16XtgMMrR4rTHQ32wtME3tQiR2MckPQTY2ps638JS6cgW1A5pviL3zg4L1dirJ3ZPsYhejZBFwBAgRmrLqhmM",
  "key4": "4g3kTW4d4RhebGYzzUxFJjm8Yujtnn5GqSAh6fPeDx7kW6jBxHDy5V6gVZuUprpS1FyUd3LyTpfbRenNM4DG4Z81",
  "key5": "4mbpkntCzLd4KRkxsKyqf14CgiQ9CWEKkcDEwwk3nXS7RP1dPs3q94uWRbpPDuz1RkoU5HzvuoB5ctkggpujT8sB",
  "key6": "64ghKXWyneBeDxvfUj1B8XkpRXHWW7XkkibcWpvD5N3SuiqV5qmtFhiRKQUYjSaTyCbx8mWnWdbtbzFBHiGXSGkT",
  "key7": "8fvi5nHpVBzUMWRVCSZyYXhyRBXFX3NBTvgqZoNEvW6bzYBVNKF82kcgXJ727Huq271PFagLbydZJi3fgusZzhA",
  "key8": "3cKAL8mbK9HgcKc1yPXDzEsevdqjyHcwjLeAN8iPjMTpPT46yjdjBSCtNESq89REZk11UAziwM6oQWUrHRZ5F3hQ",
  "key9": "3x1PrQB9egJRmQ7CK3s3g8GoJVCTvrUNWty21D4F67zkHzZiDyBe6YnZkXqS1W8WUwnsAW4K4ibscYFNh9YT7SVp",
  "key10": "7YL9SZY8UUq4KQswXYrb5zmAHW1PebgNATwYybKn2KsKKBNTjPVBUEbqxRo2ECNWMJNWsdrrR4e4sozqX6MX9r1",
  "key11": "2gaxRqojqSr95KpW14ZQp3D2sbTuqLtacezdP86Z9jaFQmrcvSuinn2VpykHkj7UWXabcRpSyNTZaos4kFGmpzbr",
  "key12": "Giz1hiH6M8vsmDCocHZqqmRiBbcgsbjzujV3NeZkoWAuCEzM4F8mqvPxk2nhAfFNbe4YaRNr1jwFjU6y5kZV2R3",
  "key13": "52VhGpCppGHTFwH7mBcuzZ3auZpFAUsnB7nZTBFixCi9x8Gpa7mmgdPtwHhLLK8K2WTV49a5eNo3xRFt66YSzuSG",
  "key14": "568XrFzP4E3ry5oNWmPTTuEyWUK9f9acp3uTmzrzM8qyoCtWAkiWKe1J29AAtPFPsB7YwVVcsv2LRDUYgyC3wkEX",
  "key15": "5Q1y5QXCgMAbP3zUhqf8zJgw57nmUmYAPrdDxidVuoDUZLrA6Edexp6jbiHoUJrA32nuq9HFTxw6C9zG9nwiCkLH",
  "key16": "jJCJAe1Jdfn1ustjoNS3cvcakxxHYxt8Rabi5eLeDGrSuSwx78kUk617gBe2iEmqr2F2zgWffptHHwmJN6kuVxn",
  "key17": "5XtVQz4RaqmEyh2SNHEE97YgNuiFRMajXkcozRNhy3yx5aoxPqCvhJnJ8x4SizWD8L7w9zJ1Ne3wnHE4JYb66yPm",
  "key18": "44ECHx9Ko3weqnx6rvyGJLnXAj6LRKraLKUy2L4KZJKQZHCQNRXfdL3m796VY4X7FHcZuaKbrx2dWPYFduJUoYJG",
  "key19": "5xWWUBvQcE9EZagBvskWQRkMgaGMkoHnGQuxF1h45EXabjKqVc1jFjZczVxhpYyTtLWGgZLgbz6AG6nadQppMTNJ",
  "key20": "57qN8CVorTGzEmhj6JYinCCSCQ8TWcqdid5vqk3u9GRUKVKd3rBSXjTXnoFpVJE33iJXGSzET5VBUkaq4vodGct9",
  "key21": "315LmDM3uqkxYZHsM1QqVYVBXo4cd6EiVpQGM7kJ6i7SfnVnKfXm8f7htLLxYz3kQbySRbyFLhz4hXGv5oAdpijK",
  "key22": "196wWS5fmJPAQmXnu3WyZ5T9ZTdpRgERsScLfncn6oAn2Hru5UbR1ULpC4Ekg4ysTx5RKFKrPsJTiHvYZtUqAQf",
  "key23": "3AcummNpzrshnvLyuyZkPomdZP6BncjFxH6CgmhHnFojHNekULocpuWuWVHNKbKQFfGX7RP6xd26t2o6YkCawcSc",
  "key24": "5n3nQtMA5jr5hTxCSuuarzzFxSwnTo2jUDbbi7iUDMRQ2FjxUcv1PUCcEM4HgC9dLnsDb9nNq4FME1S6cF4sLkAD",
  "key25": "3tWPrXQUzsouud8nbac8xfgbdTFSFStATLkLyJjjEA4QLvyHccXdrEXtPeycqy5rrnjZ49k2kMWXJUnpC3Hz6t3d",
  "key26": "QZqHkRLWXBiGYNGfp2RLvEouKUHWmAj6sGissDwLvBhRgjtsWTSHdZN1gS2Vk2ywji6V4LJbLmeGUtPwZPMMNNL",
  "key27": "2DmLMxmAHxUvd1ofZqoknjJvm7mrcCYtQuFJB7a4c5Vxu3Xyc144j9RKMCuCJYNKY8ikJcQADfnRYD1n7EGv14hQ",
  "key28": "3fDQZsr1om9ETSgFkbDWiNNeNZsHmLYsFGD2konwKq4ZtZk3N2MvSYPfsfJL4iLW3TSpNjZyqMfJHFep4FMmE2ny",
  "key29": "2vSzZXfLFq3c3jftRqf2KP5a4NXLZad2t83bArrfeERkqpEki1vc8cBoG2RYYw1Q7a59neHsjm7ucvsv5r1TvTL5",
  "key30": "46N2Xz35JGyRvUQXQ28X9Lfg344WMkJ2PRkyBmAtEmySLi5K8iruuJ6VAxzBKK6yW8KNqvAizKkg8eEgGoLj38ws",
  "key31": "STuPJawLABipXSyfSXcjZ7MNFuwiE5GdVvjdWPBu5FXrjqtfQ35FynVmUxZHHLCLkF8cKhEBTK92dmhgJBR1dPL",
  "key32": "4J5d5nPXqMQb59WAqSrcFDP8mzmwcmPohm4JXaxDg52WA9ytR1YHqDZjUAPAtQeiEJTZNczw9BNgzVU7eofWe3SZ"
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
