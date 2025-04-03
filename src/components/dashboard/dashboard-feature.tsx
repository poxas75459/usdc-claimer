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
    "2vdBdDMFfqmXDZh3eSZKUDcfJKNTiseiW9XeCn2xEPZxaDTxaLdZMahod1MvoZSgdWLHdAbYAUNgofhSvUZnVSYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iaWNrZBCpj7Hz1NzctbTtvoe55cYE1p9VxXu1PWYTXiWc8EyGoGCtCzgcrgdsd2N9rTzEkJ7cbog2Rh71h76mk8",
  "key1": "3zoMPxHHpWUnJfsh6V2uyjwGDHp62F9XQbePcQosRDdq1WKijbvnba5UNy48UvngCJtakzuTSUtCHxfr6mQCrZYi",
  "key2": "5R1Qi36ZfLq7yJRP8mwjTEZJUdhj2gbKCmVp7RaLZuRBNqPKcX9DhMKQ5JqhhsjtU3mGhW8HcujJvbvzQWd6VVrV",
  "key3": "2gjpRegsPGWPrXz4GjYTZBYTYJJkQRze9bysFVVdnGpLkJTSQtKFV6zxTMYHp9fhagAomA7GrM661XXKb1Dz4eyM",
  "key4": "5nmKN7yiC87MccehNfvgfVfhV13DE2F3aTbmwFc9X6vCp14KE1W49G3wp9ETJ5f7ZdyWLCQdkf7UrjemgpVxEdMn",
  "key5": "5mdCnXHjSUQcsPTPveF76yXzgS7616cdyKm2c2yoYABpsFRkXo5UkNZVamijWosSwaxGbFc7JardkcSBJW8zg6TC",
  "key6": "4xK1fsX6kDwhLjeh14VsSq4mch4ap38tWqmDrcCfr4FWgwPo3ZRDftNF7xi67RpxgyipRdLZ8rFem842p43Ub4NM",
  "key7": "5sW9cM8Yw4fQfRiK2SkNRdWnxmDdJ2utvEkUPNumLGNSUp9nbhbUFLFSZhSPddTpkDK9Q6aZeGk1v6sEcmrcQRyL",
  "key8": "GLe9H6m8bF82idWQRW77o6juPXd9Az93aypE7NpofDjdMzCRyqjbctFLsCrZ2viSM3dmGvh8qx9P4Li8CHYpXhH",
  "key9": "gfHyGgFugEHFZsaK5gLsNMGjV8rGL3Tj7qb85bnScb6aNYLcxPfPWoRRrT2EoVvfJbJxfc7UBtGJ2LVnYkbrGMV",
  "key10": "5pM1qz2dp27SJ9c9cuWR9q1bxkWQZ3fu1vYNvdwS1t5Bt5hZbeqyjhNmKY99tzKQAtUHAJKXyEZsLNUD3TeUmm5j",
  "key11": "2ReMMvP2hN4R13bZTzaSbdVJYKH5XgQM8rW6m7zMCqU4amM7yuLYZD8aCUVEUD3mdeJsZHkeHV737uCP75DaFWke",
  "key12": "g4CYaLWyW9HkREEmmj5YN31o4es1X8K4auQ7B5kxAEDcsu3KGeQiP1kMEeTThxax2EMySVSkTb5oFxZ7B7BKJtC",
  "key13": "2XungD4pGgrmevVecR6R9LVv17MfcwvtGvmHavvC1p8FMpZCaPH21nG7FdWtx1f5ztq3V4QswhDCxZ1kvpGoqmvT",
  "key14": "gVBWDvBfx2yiqKG4xQTkcjhtPqE1Z8sJSCxf9WuyyzbBAh9Cf31uHpMVhKiFeanjJXayPBuwqiTDReZx6xx1Yas",
  "key15": "oPCMzYxp8uc7qLyfqegjjmYohYQPM3EWLwHzSmT6ANAffFewjVKRy745vShsxLH4j5A1vhziYGa2WY77bLN3Hdu",
  "key16": "RAuM3Fdcj6eeLYVtVdMnKXnf2rrD8PjtRMJn6c7bRTCDfYmZapbvtL7ia8BogZpUtnBv98jUiXzyM6XCu9GYJNa",
  "key17": "394a9mbC3t9E5ubdBZnM83fDaAr4PvyJ9P8j21gi9kHymk2jgsqVVge8B5AGpi4KfoQKPQoPJhsxRY4XWLcAMCjq",
  "key18": "5HVJkgow9m881Nx4u56gf6bqgMvRxAr9UGymh84fxHzPr6ik457JQSEDPHA65BXYbCVErARGzEugUfXtEjw9bjUD",
  "key19": "5eQwqMQ1e4mNah4cs3zwi2VaNvjJ8w64qGVKpDbfP8RFUsrrQ4PXRJtSiYotErnQCYxqXACyethsQQkkFRWCrs9V",
  "key20": "2EEuBi4jfWxYx6dcG8TAbXrsHrhNTv3NAVihdmVoBhKFYVYrLS94WifG5CvUQ6eyxtNB1gs7DCWu3fpeHBVxU6Sd",
  "key21": "4VSKaomJ74SLv7pkG3Qzpbc3UTM8faYs7R1dijhgMfUL86zCAB86vAXW51cwQQbdyVYhQXtcVszr8s3uBV6fi2XE",
  "key22": "w2SP3TcNeRKxspVxKAWUpxDpkoCB7T5ADVkZ8JxPJYTqReA21JUqjw6h48jLA49U6kH17XequW3yizy2e8vNxSy",
  "key23": "5ppDuKF5hfQJXHgFbkN7iCksGPnci4ryLBWMhuVTH42T88r7zha69vAdHtsJyxabmUkArJ7YnHjGudAKrakAyZZg",
  "key24": "4FEn62rn67AxPKYztzRwUNDt4eygztR1iwBHmnbbpD1295nJfSWvDjaGuSUwAncF7auf6X9oSfcbJvLpz2qWoKd5",
  "key25": "2wXbrigcFczuAgon823K2ZmnQoSscd3WyYXUURWc4x9tv9tQvduorj6LwfnUHjt5J6cbjTiqQ4H9qDgvJ4RNXt4J",
  "key26": "48uWr4cj2NjGRREUzYmD5ZLH8dRTSAvot7xsXDa2fpHbec6csgL4aZu27Nz8W8J8w4rjMH4Z1eGe6GLCYDMiUuW8",
  "key27": "22URZBt1JzcV8B7GZDRxMH85PF8xBqnHYgZ4LN3dehXFuYx9LDrERrWeAiN8T3b7XGq6r3kxsvUJD2P8yciUKVL7",
  "key28": "44CBC1oBYjT5gDHhQYDkUg21GsLKaayjJKnyuRtJqcbVtFbrWNfahrvHENJ7CfvF74uPvyQUa1prKQLrpzo9UpfP",
  "key29": "2DGFjpxETnQbcP9mjQLfzwkgPHG3TjnYYDftXJCWwXa4tMW9VX8GdmuTD1dk3hMSacrFWHWiqK3NWduRvTbRNVGT",
  "key30": "2WjPfzXCetQMP281WEcR1Yzsx6UVxnQFJfVmdveSYb2A9Yf5rbyH4fFqNkPfMjVSDu5C4WwXnfkFET78pzCK1yNq",
  "key31": "4gzEdnsnQS1GpvXBvKpvBe553EwWPijXghXAq3jFshWshGAWU6Tk7uwNbXatHtPSkyC8XuWnE6i1oq632Y8jwM3y",
  "key32": "rFRN1L1FDCaRY6pK5XRfL133zVx7vz3e7B6t317U3vEFogo5eaby5xzuCL3s6u9GhajWjYbCdDhMjV87HBEz9hR",
  "key33": "3Ai6Z9VkTYXgKhzSmbwjFENcG8xzQyPkDjVsY5MZXZbj5zHT4xs1eTNkmeUrDVnTVTSxNxB6BYVzyfXMEPEG4CRs",
  "key34": "66vusA9nV1CAkjGKbDEda3Uzjeabzh9WrXARFzQsEHxH537kKc8mEhfrt87xgWcUUL4E9w9soVC6HbZEzAW3YqDt",
  "key35": "2kC7MmfSiYd77u3aMYX4nMccAVMbpr5ikvms4nAzDvuuwGSgN9WMZx5g31R5FQTqzhqAahU6rtPgTH77RNJx9B7o",
  "key36": "5vQ5YVm1RZpQRWxx6wcxLWdpQuurpp2ZVkAjtKuZGHLnWWPaRaCEng16XyddbEgWSXTVuwDN4PEL8eQL2boPkELQ",
  "key37": "3qqvvm2cE5JF8WzkyaKoSotzMzHPZjPtji7T4RV2aMtdKotZ2Uc38Hxq9csQVMUYmXM9xWXs5xXRrXt9DfrRyFyw",
  "key38": "496UEXxTxMNxbvnGHuqKuEw8Hpb1uWRRqkcZSZzpwXKEZKeQxED8wKWGHpTfXVqHeTjExSNeucQ3ga8qMWKpTU4",
  "key39": "3XXLFPQ1rFpqfDX1YvLRNe56Ghq4G3uZQiWAmYMJX9ARJM1Urn9xukKiqsGikVmuewyWucJjpZZGTTwNfLp5UL1r",
  "key40": "3y3YUW8W7Pk4xstUis8KeeAd4NoURpatHdDcF8FqeQCwGuSAQTqQ6s8hwZv2htg9PN79WCuwj9sqDfzRq5BS7obX",
  "key41": "5EZSo7EykQjugJL89erPEdKVUeUbwxidCUEeVL3ZAVB6a1iVvgbLS6RejZMohXPJY2KXSM2FVVkXAWnrA7hxyvYe",
  "key42": "CVZTZb5Ar7nWQKBWJC7ZcHLdXCxxPoyKHotMDY8jrXXBpgBXeDRkMLJRqFfk9YnbnMZypVAaweM9EMQXCR629YZ"
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
