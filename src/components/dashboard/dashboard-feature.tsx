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
    "hh7NtjTR8seZ1SHTWYeH5qUejmx7H1Bpt5cXYsGB7yGtHYNNdXkuroZZc9XN4fHg8dDUEXmYMeYMU1BXVwGBfPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NnWyfcnKq7ibYh3NWHsWKFBehehXRNY1gELyDRWF6wUJnxYScvQhERyCvh57MjWRC9zNwKXPTgffbTTP1Eft4mq",
  "key1": "36TRjpNzfSYBt8xopmnwmj7wscdmB94bVcXjccqGUNM8UM7QfrqLeoasRSPUysikVeb63T9Gv5jGA8w9NwH6T2Ao",
  "key2": "4CZAzt6FxQbJcsP5cwKSU1CFS3YEUjsi5SWQ2FeUbG6X5h7BFYr8AfDri2Z2XhFZ6NVMBg1dtE7kMBrGqKHVQjDA",
  "key3": "44RafRJaJspUghiXmdFW2JcwZ2vgbHRDmzqEiKk1XJVDiu9tTAF8mpyJD5MYTPuPcz2M8VbwkNjHba4bB9tJS9M",
  "key4": "5z2PwEyryRXepB5VrLFdXkStKUybQWTdiWkAwCWUoZgXRwGZh1KEDu2yzyHX8X242EZhGGAxK76GjHQWbNT7a5Mx",
  "key5": "3muJdrT7G8mPWQSfZLf9842E9BTrJhhiuroKeDE4HG7SqVeRguvdHz8PWyeKz93jN8rswUcrEqXdkq11onvTfK1Y",
  "key6": "KcFPADbtoGedQmePkixJWz4AbXYweBfStTDMjyqqFUVdBKRkDuho3uFHBTm9XRD64pfnBc21pSdocYZV95AAR5V",
  "key7": "3DBiXdPyQL1cqt9pN98FSBUSQ8ANPHLpwATtZ3Pz3jvuM7RL7twDSQg1URo6ZK8pCE7sMtW5QmJPpC7Z66YBZtmf",
  "key8": "4q4D5CxNgcFNBKMUgo3jbVnaVvn5GWGA8E32vZnVQkPiSASWcGPT2wcp68FFtUukU2odkV1WLzPSUpuxtGeZMcnd",
  "key9": "MfrANdRrDL191cHeg7HC12okgFtkvPFm8Pxpw5HY79qyPcaUYEGJkjicaqijqmybjPFGoiQqMxMivwKnATU1xBr",
  "key10": "4UnskqJgML5SuuBZo6qEZWVU4JXMDwp9cHLazjQFFA8MTRWQrHrUWZBJ58Y1FsSaWB9pT9HpFEspk9R7zMj9MHNU",
  "key11": "2GdPg6vQLifcEz8z5gGqLHcxJWUUor6vCSZNAUMgM9UJ8ssAjZkYintyNJPWZWxVpNoGsuS7sUiC3JQu6BeRencv",
  "key12": "3218Y9j5Lu7EakBxMLamM7adQFQyoKYPmJdbF3MHZzJE79gPeuB6qbiaqWqu4WsMiCuV1FLLncvMx1UKiG33zs9E",
  "key13": "YAprp9j1XGVEgb1vLnazMxjmCJmmWRm84wGM1YcHc84caGDAXFtMCT9ztCtxRs2K8PaJR5mHcP3nprsLg5zyJgX",
  "key14": "2wRxKDuxQPgsyvtc1MVTkZ8t2SWvEWmiqYQgoARJb6vEFc4xCa6ft7pBxzinkoATGsMQmcQhEQk3aAMMqYtvAjfR",
  "key15": "3zGMFMo5Wn2TsQNncxVo1paKNUL8rTkShbt5gZPQZru7MeHetdwXW2M9jZAPGvDbwcHyQXUy9o1JZUnWPtsfmDfd",
  "key16": "2wXQkzQhwCvkrE4FaGrFaUc3zZGkiPMMFvLmLrfnLRnad8oZ42Z7bAdE384i57aFG1P5Fkame6d8aNnwcofkWiQp",
  "key17": "aCWZQ3psKJCURQfRoW8AxXGzYhk66cNVPQZtJc65tivVchToXWC6Z1uWcedYfVAeMpbzoVxiq6naPeoKwmdo9Vb",
  "key18": "57P3sr74Ja8b6cFxpXJs6KRA16MRMAvJL6YLFdmrLy7TwqwjpBpHjHrZG34FuccNB4HuSD9zmauLihW5J2tKrvXD",
  "key19": "5wk5xvcuvmiAkuhREaG4EgrnQ5nQcbiWCnwf9gsmubTMwhs92TNHhBgNYZz8evRwkLbSY2ziutibcSMRRSmCZXGJ",
  "key20": "3zzir9XmEA2C2V7X4hU77bVAxzbZd5zdz3m93bNmZbPuCpSUYz5fj3ALRnWM7wUYsA4nY3YcF5sdHCQ3fYGr9qLA",
  "key21": "2QdbFUWJCFZgg2aGZZVr6nH3sGmHaksDxmUPYWqx7MRcExt9dk4DMKwW4qvs9kdRPAbqVzMHaNTpv8EjnJ4cwRDv",
  "key22": "2SYn7hdtWKmPj6Djb3uZWB2yr6SX22noScML93ebhUyNdpTWAShneS6EwEvQ8DDm1bmPRtHMFTBG5pJzfDK4hUoj",
  "key23": "3povKGDNeZHz5yB7BDb9QUcPaL7o7JdfsZmJHTCV1yKAoYJVST83ux54yktbz8d7SR1uw7Wy85FmpLhmBqjzZkz9",
  "key24": "5ftcDYq4KHLHHHcNGviB9awBXHY5E87XzqRS4xSR96FYuDBowKAJhGE3B17S7xpaW8vBkw7D6yrvZ65gnai7zPja",
  "key25": "Fyb5L4vw8zZfJkP4MrM1c9BVXbbB8f79W9wuLTT3z1gCJC1AY5LNRWnaddQy4B5gtb8Y2CEXhAiG9Bush32VhTh",
  "key26": "2w99aRNmfQMT1y3NtLjDnH86nijZMT5D5LrPSsqP15Z2jPrCdBpkv5dQGtF1nK3SHG8TgDfjTg6p1SdWcxmD79it"
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
