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
    "57fEtxK1VnXJCEBiAA5UwyKVJRJCigxcTz2XXUxF6F88T1jTV6dX7Ch8FfitUx8qpgvzFarZMZrxQDNxv3xRYQ9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eKzYJ7jfFrjVrrco3zjbViKz7VCJ3nSFpAsGHrZSFeQgFXjd8QLELDvZNH3p7x3PynMwSCGfifJuJq1Y4TSVgM7",
  "key1": "TY2p9AGZVVpXNu262cjtTa5npVSH8kVwCHhKW1qwz54PzXsYuxqiGD5Zbdwo7biaXqJ9DQkfd5UcpcZXCwBTJP6",
  "key2": "5ckF7mQN1WrnAzBkEjcbsNyD2AbvNvMSv6Mq3FzQxqKthRwLJVTKNXxQCP5cTUWBvJEfHJdpp6qJ1N7VhwGp2Gqc",
  "key3": "T7E7Hf6eMSF3rivT3kKaQFuMNoZ3BNdX6uvxzTeKvEQKejBsvKciV1y5WnzytjP7e3T5fhes3YSDEowrJf27vjx",
  "key4": "3vQwqusz3FYD44ZLyvmcr655fwct2eYvVYBmu1csQSu8D9Av6G2hUJBRZFXzkA9DYqoKZ7koeaGxhc9M7ypHqtpN",
  "key5": "4LiMU3T3MCkHCpb3XMbsSKKceiTu85MVuDNQmbL33XgridesBoMjy43bvBjU9cDXjVwHqovvkvoWuTyu3s3cmQr9",
  "key6": "2C3F7zXENdkG6md8YLjzcsjY4Rz47KnhKu82gq5EgmosdDzJCvZKQBzgP6NrGfPK9cGtZLU8enHRQsRwuFn8RFAm",
  "key7": "41XiHUEciVzWX7UKXuVXDeph5hJAcCdgSzmSdpFz4EzQpSdMxjxBaC6WPfZTvSKrTSURxxcHaVMyxTam51wJ9pRF",
  "key8": "2mQWBZSCnZLUtEM7Hqu9hL6Z4unF2SiK6yCyDX5N8266GvYutY2nH6U5z6ZXwp4YerRWQmrWv9ZqCwxaggzwsC8B",
  "key9": "2i4wxMpQqkzCacUeGpGmtY8yZW1P9Uanu25Dz7vU8tLQZppLKDcouzKEforM7zRuGLMDGnkmhrppaez26uqM1vvG",
  "key10": "2RhY8pK6eC4TuF1KcWrv8fSsWDdCjczNntwUwf4T3XD2HLt3a9dubghp3Kc1w8LJQz5rFgeUQyeNTzYEw8QiChXc",
  "key11": "2fYs1mkhjZremiQyFUTW4QFvJsw5VcpmVtXoxifAsZWhgVEWicoyJPqQjLsckVpyEpb7kYDduocbXZmTwsDjYQzE",
  "key12": "4mi4URRXzpYLiThLyjYUaTAzdQMAffAxSJNYZ8UYHv6GeCmVpZtoj6GCuEVQeMpYqXSTvSJ9MJNJkP32m2sUzgqV",
  "key13": "23bqgk86Y5vhxLz1fDVg7CDkUSfVEdzbyicffDBMDnBnyutG6Q9NthmSSXxoCxDsQ9AViHXr4VxzwWK4UqSRKjaw",
  "key14": "3wpUApXuiG4gdLoymA4jBNWeyrkuTsoDSEou3q7tj1tWroR1HxG3B8CEmoN49vjaMqasDJcvSUuvP4KKpyUYHH8J",
  "key15": "2tY3RjmJY66W5fXM5MBiVpGdADUSkBeCrYm3hwLLPZdd7ZLBCSYF7Xxz9gRT9G9AbLGPD7pQEBiFRJrYoVVCwWk5",
  "key16": "2732xS9Xa4bFNAPeKyp3bh2rRzpNtAcY3cTihBWmY85wFDqHiDJNMUjeSCF4QsAzntwj1fDa5J3hLzpBjZNG6n7h",
  "key17": "5YpN4qfbHUHEgBA6BKUoVW7AXm1gTMaaR2eAv6bBMNELdLUsVg8488T8rmmGqWTu3Meo9Nc7KQyTLhYJN67qeUUg",
  "key18": "5w5z4yQ6J569PAPwcfSr3szn1jLGtzbVoCHQjaBvrqKbGvd7w83U9SAiGHbcoMLQ52rDpZ9jTFPxNR69RuxER1As",
  "key19": "5Z6mzpGh5z7vnbCWaq7FXwMpt1D6QXq7rQXKqfqcVz6b3wS2Z53KLCoLBNuzUH1f1fzdpJ9WBnBYBnFgv1x6R736",
  "key20": "56HNvh5v97dAiwpRTxMeAqpCKnYTSWEsCNQEfnP2z4L9G4txXZBmvCkdKCjPCxFS1A3gmMfqebSv5udNpbiF6xu",
  "key21": "5bcizf1vqXqr5ZspNL8C3S9dkbFjk563UPabgpxaKcYaqCxDKMn7YWMmV4MyAi5JzzfZLyAXzzNaNmcnsTUmoJTo",
  "key22": "2JMyXXJHr6SGDBJgEEqJAzRgikN4fPMXJKzDtVHN9wXrTaNdQQCpR6eQ2rxVuEocz44sRtYPf2BLokegJq69EQGG",
  "key23": "5xLRZbjkBeKyTy8xrAxb67xDmXZhWkxhS7Nh6pgTSHSrPcqLmqy4376sGPCFHDtmnXEVtiLa5QKYgxMHSSm8kFdC",
  "key24": "3KB2HyZWsLVY54s1MvPe4xcVtXh9TaVVukcTFb9oHJCh8e32YzAkPxAns9JfSp55YkYyGUEfkDJZA18SU7dtj76b",
  "key25": "4vu7NwnZ3pBbf2L9qcYPuMHJTVGrVnDvmuj9ayWcaqpE6uDzDS4Wwjt2qeNFyKWCUU5aLL8j6LwQs3EKMq9kqUcg",
  "key26": "5YG9T9jUH2irW3TqBtq15qfrmssAReLn8QigMmBTGkKkKWQmJWCutob2QmeNxYJvRdyVtxZS72iaU7MH2ALZmNP2",
  "key27": "5dyGaKuiYaCs1UAcvJcEtwASYequKaX23js21u9ViVUTwHDfbsLjPSGXHn7u5NrVdwBcuoukcKuYfYQ9p9VTJouo",
  "key28": "U1dowsYv2woE7igJw2giUpaNxKwiCoHjz8uCd5NMJWUtUtoEXYwyknNt9WJuGEgYRPDAxFasid4TFwTn1Gydpbd",
  "key29": "ju934s92FcZB63wJ4j9kBQzzeq6X9a2PQmPJWMiZfeiVTEVZcTpWVxj4XRBnQDRgnDyhseNNpZxVf1mrQaWx5qW"
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
