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
    "23so68fNc5AAKQA9EvByivCPExRyujFD4Lwuxyy5tHwsRTj7ZyBLJyPTaEjPLTpKA2JjcR1rH8Yu4a4L47DqWjnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o81jvsdeDxkuBqhNcknf1yij5Yq5VaK4jvh7oz88Dkuce3UaDHA2aXTfjiBxQdiZrAQQdgETh3C3uhHpkFGn1AD",
  "key1": "3pd5Sc1WwcsMKeLV3mb78y8U2PS57R4iUtRyqpKV3q4p3gsuQy6MVRYtbuardJg5nC3f1nwpVJNVANyqnSZDesdi",
  "key2": "2arc6GytJ6o6PkNRRewYFhmd11UAM2omnnTHcTeLxaMsuAptHei9UoMtdfp6RRLnny6TimajGUUBVRNJoTdGtzq8",
  "key3": "B9HypKYuLmmvXaqvZ7w4KrYku1PkoKBpBF4HnEjU9LGGBJu8HPQ1QwnG88vi8jiF1S9zexufx2mRGpMDjfgSwqP",
  "key4": "64tEUFY9358BWMJebysyaJeZKduSqkNzyTjqddiuPHo4vUDLzMkH3W2h531LK5ZGSUqfESarC2USnwj6TcUGGzN4",
  "key5": "57Rd1j7reizewbXXuEAM992cMDnCB6DtkjvYHK4Apjk1t3Y6S9mBF6tzVBAyc7kT2ztR7nHY5kLgim3oH7L7Bzpt",
  "key6": "2qWf3tKFm6TBEGsN2htL7V2twK7LAHBZwXLtrC3QwSLZV2ZvDKVqdVeCjN2FdxY61oSJMnXmzay63ey8sCcMwLmh",
  "key7": "cQXzQ5cvBsGGyXELKvJks2jj4oSg7FvBh2Ef2Ct4XzrVa3HSwN7ZQNdpJFQa7WoPqVcjWhcasf24AcyjeLCdxF5",
  "key8": "59bfQ9iBnNKaNXbhhcCBjopPV7AtDo5uwMWsLtuQdX4UKsjvoXBGtko4cNKkvTpyoNC3C2JTExoCmmfuHDVTGmh4",
  "key9": "4ThYDNvaQkSYNZrtoYHQVwURRbFRKFhUsfhBVRSrDuZgvcBictpssgH695eWrX9V2RhmiUZtRtvKzK56xGcFDwiG",
  "key10": "LbE2Y67mFibqkUkpKQ9aMTowb8JXHjLwyoDh7iakDQuty3ipVftjKGh3jdfSC3DqP5PDRvRthzvZqtjHXvnkxXP",
  "key11": "5YqkoEE3adCHiZuQDBVhwqbztbP8heSu7SM6NuS3Pbm35BFpWy1VPvU2Z8LoaowjVXsiM4z7PnfaeZcQGgwKpbcr",
  "key12": "464CDXbCdyYzQGny9Q1mpoiBDJoQSkaoFQXUY2edSiiUWdxdUztPDB5pR9RNi9bdmRE8UUUoCRVjDsNaytFM1i9i",
  "key13": "64qFmRSHZNk7pVigETgAJnADGHreEQPdXuvb5XPRqLtZjYMCydoxhnq2UybNaWVKgT4gjoRcoRF8RwiZmw3nR8Ps",
  "key14": "djjsRCxVwUeseE8rtabZMzPucsBpWWPe33D5UWSTJPN6b5i21Gg6VnHHu4H4Z4QgHApbgWkRFZRT1sgpksA8afk",
  "key15": "47s2tumEQYM3sy37AnU4vD4R6tv9wVWAfX3Wshsevr7KEBxf2u6D1bAMXyEYdVnnPPnWPRTAohmLpfAzvbebRXaX",
  "key16": "5oEnUkCZFekQuzRdjm3Pg77DnVFupboGjF2s3DPveqky5CHSMpN2tjZvjiEasFnHnPxPpfuEV9iSvWXaEp9S78Bd",
  "key17": "2Gn7tJsJc4yMtFYaQwyTSNunnxLck5nRrhQEQvpWWeiTYUUfvzvBNmcvA15YE1PuBbqnLFaV2CL66ye3W9mLNYC8",
  "key18": "5WPP1D1Cmtw9igMvy7GEGEWFz8kutiCacGYAH8jqEjqhyvek23thTiSxGsGFYe6WwEzc58xQPhWdwYP5vzxzKjev",
  "key19": "4ykMj9TLFX3kWEWnDqD3DBVHxc5xvajQiDV7SVZ46W71q9gvbVv3NN1YHSAT1WYmJuoqCzNRqVY35LQLwC8aAeS",
  "key20": "2zckkWDy13CLghJhAcN14Wu92CeoP3JTvegDqoJsyoWaD8fLBaLnrCQdsWVc9j2EGSLCD1hrAagtCJGH5rDh1D5y",
  "key21": "5MhZPgUofY7sGeXWjQbkHvsJzXnk72mTuyBVTWqDPgQcSRgKXwKDyVDQSJXR2torggzTwFoJh1CUjf4dJHd6dzpX",
  "key22": "Mwp7VdDTuJSuhF5mEBp2A8qh612emVxMHRSEt6V4owmoLZEhBEXZKSoQGZDKW5Yey5K4vUZJ3ebqHXY2DerEYao",
  "key23": "36ZBWWy6WmfzhU98wn1TqEn8cicuGFCr87v7sK86yy7R2ojfyJY1E4RAGrHFiR8PLAz22iPRaF9oL25cDVumaC9b",
  "key24": "4eDM93d55q47KYMYhfqs3Qu7VmTDVhUqu6sqruomhic94BBWFpwXCS7XHSzLcXTCrkwfJRzVweFcGpz73NugKu5N",
  "key25": "2EQx61xwF4w9RwDBrudzjjeB5aNZpgvBBfpfcxSqHRyjx3pXKSMX8ceRziUW1TgkMiEQVYwpXTmuNdFbdoviE5xJ",
  "key26": "Umt12mvaAdPZ4pCpy3G7Kpd4RqUS7UXJC2mtobi8KAvgrNJrLcnxL5f6E3CyEfLxx8cMY3hxZEoBNhi51jv2tXP",
  "key27": "xSYUtDJW38NoAe6emfPVvsPJrVKGxNPT4dnQTisUjh6xg4ZzP5riK9WkBbY6qTvtxr2Fj8xYmXW1KdKkzYt7ZRe",
  "key28": "4pmDRhVQLN4YqCphpQ5yHsNttzj4YH97TTR9iMmLjJ8ks9itGKjT8JdY2WzyzArooTxNhNseRUjsoELNamc2sdnS",
  "key29": "4kduLuCyQPA7khRtL2MmG4DDJZKsJTGSNg3h6DTHLQPJRyGUJNjA8H6y35sb9faYkPLqWJgP2jViTYQJdXjjMwd1",
  "key30": "2izSbuFvtMSMv59825pKkMF4BCFrbWSKXBHauALWbGvx48U8uHQqtVZ8eh2s73F4kGDFFr6TyyZEPkupVujeLcVM"
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
