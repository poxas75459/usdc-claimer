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
    "4by7koHHUgTrpENpmR7kJSytxZqteaZy9tGHorjzi8qY6KfqHYTwfufMRba9LzqeJoc4uzpZ3MzF6aztrCUkzBf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KV7BGEa9ho8gm2g9kXbtFDfJp6uMw8ptNQ6qDPuWFpJ4RtQTyC2QgdLhfDJKpz41me6MC5aRHG63pgeJP2zk3Mu",
  "key1": "32b4rZumcVYzrtB44xkyvZ6FjLGJwzH35Mo6Md8cDtYXYGTaZVNgBUhayKNurD93MFuv9yZgU5WqoXvDF4XLtAPi",
  "key2": "3tRsqKCHeEgQpQi3RfaK3pgFNGSFg3gJzo3pBzCByVuqjno2fuaaMbvynzEy49s8SaCNKs9xvoQA95yNkCkGbWwQ",
  "key3": "3qHtt5L76ghm23uC3dehrZ89YSefK5c7mhpKCBNpq6Ey7e4FuNo4wWpftBVq23wfsSS6Bp1xjceu3BgyfJN3Rvvk",
  "key4": "heAgq4eEsUBn9WaJwMDKjEw3Bj1Xwd1P3bUGodJ4ggcwVbgrBvWKrnNexvMRLmEGs3RZznCVCuqz9HMpPmZyECk",
  "key5": "3qD5xEfw9Tjh76MWbH9uQX62NVUranzD7YfETBbMzokzwmi1aJEJKd3cYzA9ywWxC83JFkjLFqnG2rE7aLLwxEGj",
  "key6": "2c7sVMjCo25PmvSEGkP1bTmumMGMUgWhYTNVQyxiaYLxMcNUmPhcSqbHjUENkrKyHF9TWTPNYd5rDk73gKw4mMx",
  "key7": "3cJQyMhj8nAYToDXpr3HtCfACTzdLR6B7r1jGX6jiUztTs1dS4Xbnkm2fxM7oV4pFCM5KDkjvvEKcniehVih6ZHF",
  "key8": "2pSDSWTZRkAXKQDSzvF4HDEsWwkeconUgwHUSDrZMzoo2DdZHR64DhcoV1SEbAQkmwm6ppHPDrRHVrh1vi552BQa",
  "key9": "3rxUdKkkUYjN8ppKaosjcExGkr8CCMN3Pkp3y1AGsLo6PdAi1pkALmUBpBhDmwv9A9EEY7S6mn4Pa99msDf4W5af",
  "key10": "xwbPakvimmP3M9tc3ZgheGe35FHuZDZyvux2EJRb2Vkkxd4THSn6B4ys7HQNpJRULADK1a5EBhRZeqAcZbtFH5x",
  "key11": "3SQq2Q7uc6UW5GVfGQy2SiMgBMjzzUkpA1A7LGCzqq2XADiaoSD5ZQDAeQLnJV3ZoCsBqEWT3ExpqyjMDT9P8CKA",
  "key12": "5tDxdtHNcdVjNwoGqhw6AuPZWMGiAqFphwRj1ZsxiPzAJqGU1kB8w1XuyoupETw1Szm7UbzxphjymmDiFSNzo3Dm",
  "key13": "2zjzQJhHrVCai554hboK9NMUaw7k9m1wNg6i3XJ81AoKFG2of3ufboFNG3LxczmXnfDPJby7io53MeGy77134nEj",
  "key14": "56VkgYdtewrEXpYrKYwDrnwSDUL6Ai3PpRfpTcwPrZQjZ9RB9FiGPi7kGb65AidyAmbJTo7LyDWqpELMVSaGttfU",
  "key15": "f1yWzqeLzqJXwKptDW4N8FYQ2dKSdUP4iXrDuBkBCDtMhcBidgs9EghP8xAhyDcRBB8U6ZPKFqKT89uEiw7C3Tx",
  "key16": "3nLs6AMPNXJ8MEAsCuJjhYLf6stC9b6Y9AFXj1En53KPCeGeiEGvRJnqBccdNZXQRM7WLV5rbayMYnGo4XyUbvrf",
  "key17": "5ipe5NEZMeSchLEVdUiey7AUHAMbrFjfa8v664Fa4ghfjQQry4ZvH8oyTrwfLMcgwJ8dBLh5CCS7j5jYHKM54VdZ",
  "key18": "zw6CDzZWHtgR4ePkP3uW8tWnLUz9d6ZjD4o1ghFG2VYAVW3Qf4kqdeQvZhzaogGMVB5WJaNCoLkzMAYqSTyYavk",
  "key19": "khSFFadtEjdQbST3NFmzzRDQxTZHk6ogx7GCMtKKC6BXqZfDpmfrrTEDSN4GMb6h6XKnESYQdMamefEnePosMbF",
  "key20": "4r9gSby5g73AtWgKHmnMxuWgEReDewKbCnCuyJ11HvnZrvDmR5qSuE1LvC3vbGmVCE91C7HFqN9shthxf4TXwpsL",
  "key21": "uybFXioYMhQUuCnuv56MQ8jLxjLcmjvrmoreDrDs1uS1zfJ5VRorAPJbpDUDgziACZnqB4DXvy6YFRTUyiRMvQK",
  "key22": "5FUMGvKPLb68NthT7Ky5yWzejGBjKPykFSNuH6XsYQSm26tmSjHi5MkcJw7Z6Vro3YPWfYApymrX5z5gDHaGG2ne",
  "key23": "3LuYsciCxSeKX6oWEmL1wCCWEViGjtqWsdq1GMSyN3DhmKxYTe3GxDVJXtXzSX4teBzhbybrkt5tVrhmSM7LP2Lb",
  "key24": "4ht2veshPnLpRqMQ3HDFvBn9wujFXY1mBb8SHY6KVN2noBEbR6VZDmXYsg9DYzvEuXeTLMF12y6vzdRaFGPzqMMn",
  "key25": "4rQP4cHYTgNt3Vfxih1ffRMjwoyMxGEipub7k9EZ8SN1ypJjdig3nrJUybSE4TQKCjhZ2eb87VVdvXNhr425C4YR",
  "key26": "e8qNpcz1Bv4Fa4S4UpbTtSgndyELcosUWs5yQmdRU5MYTsgNtbn79ZkSAhUUQ8tXrEsAAeacpjRzLMtBGgV7f5S",
  "key27": "5THB1X4zDqbiad1i1kEuziMJHCsnGrECJkQmvCUUiPQNK4aTGAMVAcPdYnuWpKXvJK7sJ4XqU3iFs9o7niWCqVkF",
  "key28": "MM5dvKGcmrWdmYHGFRvQGBeSjwoYC9PrAMEojXdWp2EaVwc7DQEz7cmb3n3naw9U6jQaKfNn5Dh5o3tqSt2QXgJ",
  "key29": "3Cb7ApmQNUSBBQRnRA7mhZBHV5TvE2hHwcKZwdpvEFojTGPHPUh3GXD54WmN3qT3sDjGMengc3Cb9MafkNWm71m",
  "key30": "49Gd6zhoQnEEDSEspv7EFUyQ8qF7aToh6mofjQGxyuvnmnfGDesEFos9EyYuhkocnai4HqPK3pfcv9iLsqyZFWMC",
  "key31": "2Ny6SvxxcsMZFsCo4sPHgqUxuqHmEexbAcSfKGuTiWz8NeoszF2miKsU9g3uEZNmBinNXnseP6dwkbJjqSBiQ6hq",
  "key32": "5jCPanPN4t3nQjWf6pNkTwhZKmGNiCSbmyTZAvmhLwREyeXp6e8yg8MuxRwj4bmopKGWbJj1MEDxPynZ5vxQxjP9",
  "key33": "5PnTJYeQpU7yxowirhMMhvgexBfMaQvnCpnFp655kyUQjfJDPrMFhP7SJTSoNo1k1eTdrxmsxTc8ZJ2H9DZyFU2a",
  "key34": "3J6brn324aPpmf8rVupkStfjdhQkwTmujC3wJdTs1GqXe1n2VngVaKPQfSTHFrLG9wRt9PeZJeg9B5VsovCwYAou",
  "key35": "2j4RDqtKJ5AT6ixzt8eTZtY5NUG9DxhhExHZQviH8CHZcq1FGNua3tR6t3vqHLXJDBaFC13R1JnxQfZ3dtvaUY7h",
  "key36": "5V7po6xJBfHYbsJa9gGhwx6JYMkUtq8tdPU94uBy6w51rsYSzn2HpwYXPvY1jmreHi3SkXDXHcoQEBJQFnhAk8HM",
  "key37": "KSTPdHDk3uuxZjuFCCwqBy6tNhmV1otadt9N4o6iuyPkdCMR7Di6HWS6ZRn3BWAvgLvKh2KSDyojyjAZQDbVb8J",
  "key38": "4h6wJYr8aSz6g7R2ecoLiqSZf8krAhLhHiq3cziXq184WebLr9YrPT6urpasucao79E3rT9jqy2FjGKPKp3WY1Gx",
  "key39": "2RStqjDyLG289ifp6TBwtPcyYcZ8oLsgCwqeKm1eN5GVJkBqaFCEqzoKPn5NRSNGbH3cu9TUZxRK8ChBjnsMYcek"
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
