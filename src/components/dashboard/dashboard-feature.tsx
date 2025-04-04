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
    "3Dj4siPU7LFCVadM82BiotFXrQqtRsUseZPn63i4a8uc9riLqCdp6pvWQvqfNeCPeuDPvREkP8RouusVyGQjNup3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vyy2GKdQii97sVaHvtCiUxuGdwQn498MPxMfXgh9tP7BYy9y1vmaE7aEK2TNTUdDoCqXgtMKHnE82oZjM2rcTGs",
  "key1": "34R3A4BPC8pdRky5uNJK91GLGSVTUy7qNVKDREHEsGFRkqqrgBeBnSyhqvceHCKzUE6StXT5GjZHSsDfy1zjJSKj",
  "key2": "66WdYuhCJeKpEiBcvkL2pwvmyhQFghHqBzMkThECqRtCCrQ81bFFTsraULzw95tuZ22p88g5gMLYpsQBbcXPW2Sz",
  "key3": "2L3gdaqo8cf8iKtpcFv8snzUJPVmkxzm3Bbe2DWZTaWFrYrJ2V1QgHGHT5SpxZ3WRmk4S8t1XSVE6PhfFuXLWD4A",
  "key4": "3TaUHKV3oZh8PaugCDGSeMr5yZ9r11e4aFCGZbQUKJjVuD67u3vj82rnoBdVfbtmznMYiB6C5ihtsLeBKuNpitDm",
  "key5": "4EjRCdq85zTcHQG4mK7RXeit1uEuGukupugG15GZBWfXQvoSXucQ8fsiecA4HzBBSuJp5NMLjH4zxysQwoeNK8P",
  "key6": "5zwcN3XhKfNoJ9xvMgk6a9YaHJjCnXxgE2LHVeyrPUjjvtCD5BDjJ2iTsHjJ24eUFyXjDM7Q5JaxsfBKL5qfWEcp",
  "key7": "5T19oJ6rDk2RjEADPyGW8YhfRvZuADfMy1k53ugGQHAtSw9DLc5gwZo2Hab5rk4W9Rgbx7Fsg6vTfstcLSr41ZNJ",
  "key8": "4NsDBHgPW3QCCkPenG7GrJcMwcjdrdbc8c38V8LejEE3RmQxXq9mnnbRLdR8TJjdVqz2vDYjmEuPCP3tyqebWPZh",
  "key9": "3k8PkGUJWU5QCq2sEmHebx7mAkRqazEfSnm1kbJQ9XxjWtaR1W358R5JtFpXq3XCrhaAkC5tzXC7bfjNAnEx2Am1",
  "key10": "4s2TYPLgUzN9QSUxvYZT4qVhu4aCXH6Qja9zdiqXzER5KnN1pjMPUFo2gfwr7ijF9ptfVcL81eRWEZfZTHdRuGSA",
  "key11": "5Vp6qLVwfFjctTHjHR5PAf1MVZ8GLwstvTH7bo71DE4AWVpGXPViEYURdtCtiHh7tFGYC8V9z3C6FBrYief3Y7vW",
  "key12": "3b3RKP54EAsfsTCY5SimzSCHZNgfbpz5286PnRE2HFYKeJKphNQrC9ZAuauT4XoNT5WWX6zhP5s7rzTRurUJiscJ",
  "key13": "42XmW1eMmZdyTEHNQZei5xgWYnHc4g86V5aGik2C14ALqPiQyJEKFThUfzjHGaVt6n5phUqQAgkx9mPCFA9TmSdN",
  "key14": "4brxK83MndSQJzDcHUXzNhYkjNiWBVeDVpej23RefmK36z5uJhAVfv383wxq7H4UpUDadNgrYB6nDMkgD3p8vzcD",
  "key15": "cxU1AAYCJ9344XKMj2gMGhXjnkgQ2cPc8Z4ewRGn6v1CCZFS3SbaEyfeCMMvXSyWd8Px2x3dPBPmQbzwAi4TsJn",
  "key16": "3sDPJb9JQamzhxQazHhyDpmYziUv1XQ3QqFmoNeUudHMNE4W3sgggj8samzCzo2nkLo2jqgMLnjsUdAqftjYn9Ak",
  "key17": "3NH1WpaPy67Pj5pbnzAf1pajEGThATXVM5iRtKb6iHqmcksAs1pREhAqhM5TKBFNtfYgHBhaqzkNhqoKcR1q9veM",
  "key18": "4cRPmdCEFMXEzrioDhuoXCzr33UgovfBrswQCFeGy97j8f2mBuQrxqczyoPas65b6BKsJqMYwfLi52spox2WqeQH",
  "key19": "4PXAx8nFL3tZg1jb7icgix3yNw8o1QxRvxWhfpC7Tpzb2PGhrEipSSMuh4h451DZNPQtqjEugbADuoqjyWk9zNX",
  "key20": "5mJRLS3SdmPWgtcMoJVgHtpgLN8qnxW74QseX31X5M3c3sZHLXZSLWFy3xNWRWARjs2D7fyXfK6S1861dG93g9PV",
  "key21": "4hXsZRb9b6Xhg2DGeDv4aZd7xHMPSrshbhrYVn8i5HeiGZhfD6eUTahDt2WAnHE7cGZpqMekHkq4q5LRv2zhreUi",
  "key22": "3q7ew4TBoTFaxNJDMUy8bxw1jgWUQYtcTXahe52kKyvXCfepnMJEmoTzvJHmvthbPS5ACAKEVN7S4GGyGdP1517F",
  "key23": "288KdbCbswZcGAB9Kb1Lfjqh8CB66kdea8CFZbZJLJjVAxnVWyms4xarFp7bLxEJn7YD1LDPg75YboKip9ANphcZ",
  "key24": "2NaV2ijEeMmZwp2E8dyvJUySbMp6TWW3KWSDubkA8n8arZWztumFKFajo5JJdybwQZHtEA9YDuFkFHnVzFasfvb2"
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
