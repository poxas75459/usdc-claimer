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
    "5GGTpS9u5RJ7kqziV6NhaRjwvQGR3Xv9Tj3yLSfQgwYm9bxzfQoc5QAVpKdSjsP8AGNx25CvcVYibja7d9vTumNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CHgUa4T41Bw92CWivkr7nCpwghP4XNbD73JAfqe33m8nE7v8c9y51q6eFQwLUgZhsPJPixFy5QhMnZSMHNBYJCG",
  "key1": "tFLYjPeuSvZjSdANBXHi1LomPADwv51ZRXMB4eyfPGQNrX4ujxffky5EKV7g2tiqxrP6r5YHq8EHqJAyJvz8DiH",
  "key2": "5NoxbcZnhMXKntyqK56g1VatSKoxzGNagePA7mxjgS6w1nCgJ612G2sSyztmdB8gUNrzjwn99zTpXC8ZZqufNsox",
  "key3": "3waC1rd3rCa9GkMeNfzYZNJpeSk5UeNsFjE4y8zdR851CSZoVDV9keTjeDegZaFCDFgr4R479aNsfDFC1ZrGuirM",
  "key4": "4jMTQ2xWsAKcbwCAt9p14QZuJujunUZo68ceCvW92GGknHpH5cJZPxjcfY1mFYNeQXSiUoPkwtpUnXFhKjrNqQvg",
  "key5": "65NtnLj31W5rTEjbg9Kdbdoppa9aR6fmUxTpNqRWy5WcMxJhVAXd4UGH7HuWJ5VCf35xMEDyULasGehgbyNhcV8W",
  "key6": "5JD95mBUmjcoBUJrpPgbzfuGgA33pub6rCaN22r7EYRsYZCLXZHn3fgiQPLJZFPqvdvYQyDQJphSM5V4f9vireNr",
  "key7": "2xNpsHEoPhAy5Ur3pvNwHik8bX5m4sdejXG184Xs1yK1Z9wexWrByDfA4VR5WEWm6uJweXgXcwZPcrDCAcRT5JAT",
  "key8": "62sqCU9YsfY3hgyod8mZ4Ncqb2HCjpPMZQLxd9FWmSdEbv91o1ZgbRkEweevPVtm5jrkDegd8a2tq29geSf1rGRg",
  "key9": "2s8Jwmx5Xq8tY4XR4TcdnJ2CbKEQWEK22fZ3yHJpnd6uQMNyAyPd9GM9F7Y9QeiNQeB2AuwwrR6CCixMhtBFe9LZ",
  "key10": "2tLLcSgjenHRfQMWYVG9Jr3oby3PKf3yi1fBRc54DNusdkdZtfxhasn5kMY5sSN2s8ui34kaL9yMT12EpNpLg7VH",
  "key11": "2n9PALhPN7sunQqXVStAW3fYABpdvuyxGpACGq3Qnbzx73rr8UB1JAtDim28y7H3Y2GDWFi8yfvJz5JeJH2HGv1L",
  "key12": "31w1nTLmEYGm8HHTZiAVXa8y2rYcay1Dzib3aYYy5p8euBB4W8TgRYnHCBgP3LKYg4EEEeSSbgycyKT5NMKswxgA",
  "key13": "4HdqLKdz4YLqJrdfZuhV3YrAbq4eaQBv9XipjxCxGCmmFM5Tx5zs3dFwdqnxyZmpkV7GZoxhMucbQ2EAsvLH2LL3",
  "key14": "4d9QrpXsW5d5B9hGg8PshYU99hpdtQPtxaA5LakKsCyzHs22CbzCp6NFb7eijnNobjCo1mfgEq5L8XrcPavF9tuz",
  "key15": "2yWjnoX1GD4uzNL2CDRea1Yhkyt3mt2AdBvmaxEvtChMf5ymsXzS38bs46MwbK2hKhLqEVNQ9uQ2XXV3eNmmfWFL",
  "key16": "2qQDaBBb2KUBwXjzUH8tYwfuvZRZWCCHD45uKZVdoDpyaNygAWzZ5gWyicSgKH5NFgovutwndeJNp1ST9mVC4Azd",
  "key17": "2FXH4dzL1Lo4TRKKtYNb187zrQjfRbEracQnhzPa2nT1kWofNjPU6UNBhS8uYHAzPNcuHEd4CM7RtZLjWknJSQDu",
  "key18": "3iYifkTefXBmhjDoATjynHbmVHzxNFfGkwW994imqNv9BLXnxEQjfPLcr2oJBpX7MmDwsNQz96Q2aZRmPrhydSfK",
  "key19": "3c5ixCVbvRkLE8bfV7TJZ9U5RrPyzCao14QqYuWVZoSVRJxHb29LAXnijgmh47XcUn2skuYT3EGMkWbNBgsijabg",
  "key20": "2mhnoRo8kqLoNUHHE5EKq7YwQcgckjA4w4PJWVrQeoniuHb61GGJFfiEVrjuR8uLzTX2vUbSXSuZncKduSqC8uJh",
  "key21": "4MpXF8MDqYewpy3xinrFcbh1HMuViUX5JF5yx3jR7Rn3eHfsFT7yQwUREPHgiiDSuxeChcL8RpsLQv9yR8h4sP5e",
  "key22": "2L3KtsNr9WByRgpqpXvCiizEyiaUpKpjr7vzQTpRQXoQ64WZyDNkBWJaJQSL6shPjLdZDNgLU3GTXTxCZ6Ydho4h",
  "key23": "38K4zjvvbhSV4q7oLLfLiBzqts36ZkJNaFfHMzCY8eqhr87quVsYsf1mqnfw4bXcG2xJn7c4NLVPghbWYPAF3hTT",
  "key24": "WSiRrhiJukmiuMfdNscBu6aPdy2Y415JiiQtGBAH6gLeSk17bAo6LUWompPJ146WFzWoFtb8cwnxU4WbfEGLsFj",
  "key25": "5og7ZQTCt2uiEr3mcTgkFSumVuP1sXAt5Pt2sRtxS4GPdkmoUUmXcod2mt3Rg83Kcax56GrsZKVAnGQffm1KQA36"
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
