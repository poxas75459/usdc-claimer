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
    "23iuJR7jdfcbSSxwCrA2ngDBiNRXnLf7CaXAbmdfLiyJ4SC9miF2K9FR3vmMkupRWycNWmiTy3v8mUxQwvSx16WD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uet52NcQRELxcLrF5YdzKpAHm5hAGyUvCn34taRsYxf4DQUJXSrdxtY4hDHnPPeohA76FbzyuUoxbwSeucPLfjn",
  "key1": "3Ttj6xvVbb9MUepcFcr32nskDMVegv2aC34gNnW9MLKn8fHkDf9xRJzCPhhCpZGwFg6TBtATiLsqmdcecjoMJemr",
  "key2": "Tpz12GoQGXTPeYDpMvtZ9RRGchTDEiNHgi1PFeaQ9bwXWJPcVj3KAtgZcz4x7AaANubfgixCwZzQXiZL83WV5Hn",
  "key3": "bFgPFgoDbvz6pXijvQh2qEH8mAs9Jf6R8S7iTbF1GkEcxxZPndQEgrtkacXLm2onPkxbXsp3E1NaC1XDyNyrJQm",
  "key4": "22fBpBMWfq4N8XWAHme83WFmwZY1BVMCm1x4814UwNerMp2dLQ1UPRs5V3PgWjMfuihUuDUwDgduaNoBSuViUZKL",
  "key5": "3stYcje2cTDYKCEbRnuYi1RESHNJ383HFzCkokKuxec45d4sVsSeTcAXiAAqBHHQ3zKYhtYM5bSzUDcutBugEKaU",
  "key6": "43vUEYTpr1pHNdjtutWiAeECaCT2Sx3t2dCH3RxK4aUT7KWdztY4XwZ3P6kLcRxgu8MQhAQEC1e5TjPvr1456M8L",
  "key7": "4XZFSJJHkZFyfnRvF2dEHyHJn7UEyMDKQBnpBo6jbLutnPmW4ocvMhFpSjqESP93ciZCU54nS3wVupaMBfP3rjyv",
  "key8": "3Y2ed4uZg53ScEcqH91StCuhJwZYgCvqU3ju2MRCkDTjcaibWeDTVt8TPe9EtYjBsxpiVrmzwiivUMkdVhMPz9eZ",
  "key9": "5xutdxQ12e1vKUA1QuYR83MvJDUQUUK9tjRsye8vZiijpC6QWhVhhz9oqtDHL7Ttd9BEpfdaQhfDPK8FJka2puoA",
  "key10": "3XG9d3cmJBhap5EKyduseNv31HNrraLrKWxqkUJZnNDUyedKp1etFvRVpVZ7Gxtc6ALydpwvjEV8T9U9zxkLYVei",
  "key11": "4uz1eJhCe7sFZ2K2LhS9sgE3okr138SQMK7mUMje7YRJKqr2JuLPbe69tqC7z24ZPEsv4eWQshz6u6HKQyTKCsx3",
  "key12": "3KQxpBibcfjnkntP1Wg1NNPBnNiyFxLxUmeCLBQTUdD9DtHQSdXvVA4Fe6QfDUnqzPuRcCrMtsVxwZ7MUpvmQ7bm",
  "key13": "5Y3YXhJeW7tGmf1x5eVXPg4Se2tWxk3yvgwtEhWs62aRVfzwn1DDcbAghbFtGZV2hbdwsKGuWVDQmRXD21Embvsx",
  "key14": "4yWE5HUBbf4rnWKuEtWZbvyG7LVSXDkceqKU4k2UAaNsTezsNk2cSWLRR8GtfBy5U4WFzthbV66cLHk7L4rMJTMW",
  "key15": "5DeEzECmVA4ikkw6TUmWDrMXxjAYM2RhQ1eKhDHg5bt9tibqUqMoxV1kvUN5DMYLzYaYK4SGx5f2yzaZF9H3DzHZ",
  "key16": "Mg5qhiZuUNoL6qBXqsGwBnmLpVMjL2qDEaDPHCiJLE7zjqf4SaXRZVbWeoABMFwfwj8dwgpWhu8T44ZcgRydiy4",
  "key17": "2uWQ3hyWDZnuZQkBcUFoQADAK53yg7hwM8ak5yKjjapYMKChtoFA72HYDgouh4FfesVNZ38QSsJAdsVDRnM7ExEm",
  "key18": "51AJPUoWgX8UAxpQA1czB5hECufdKYFNpTX7GFAHBhGDfY1pvQXrGV5kqXrweN8SiNHP5asgm6S32bbiNCyngPKx",
  "key19": "i1xMEEzUyss8KzAv1w92m9DkgfiT7SzQCkBrc51ZrzQsA82dxfbveFqQaASofPCiwdDr7TmJmTH9Atj717YeXeX",
  "key20": "5nfF9dZiXRGW5uqWJ5eTvTUxFur4dBsY2CmXWFxEiaxpfcovkBLWeBedoLbo9a2pdGJkeE7TRJXnTfLvVqnWm1Lz",
  "key21": "64FaMnj8x8vHq7sZUVjU8SBBrTeGVta4NkfjxPupgXbUUuUeytwy8WUiemPcQVyofVMnXYBrf75uUrguXrgtBSuE",
  "key22": "5j8dDThatEReGq7rS2KZPTxt7tiSBQFGVbXDiBwsoVPNLpfWwZCVvk3FaAoDJMTDwef37G1h9J5sYVDMF4VaJXkP",
  "key23": "5v7qhVVEKHnnQWrD2VFDmrdF42wQ7LBYy1acwWScxVwLFFFLrdSKdqLTQyKZkQQiW6mjfsVn5PzRz5UMM7m2LJ4k",
  "key24": "3Gwnnofd1WT6DZNJN5FJ7gjE8Bvt3KZHnZrms6LjHgz8WPHZvxjCAkDCn7AeiKHehQYPsqtwqGCNis2ciL2dnhbA",
  "key25": "RuTFPu7BZj24YrGd5oGGJn5JnPhBHtmqoeMAGep8QGRFhvXTeN3akBLbML3vD32D5Y6NpjS2ewnrndfGLDGM59J",
  "key26": "5LfNELYpZvh1ghdgx9ipFuaTA9ZQCeGJ36dnrzphhA2cKVxSn2m19uy1FUPuAX4rBFWKQKNt3WxnWum3E41S3sgU",
  "key27": "4oxz9ygqSfUuAdV6QQ59uNhwT34eEKvfZbmEXYG6FCYdxWZRbSZM3YdUMmDmwZsc5gWXnGhxy3M7zRWkEBJLGfUR",
  "key28": "2YqNYN2V931QJ6CJwhSYtP6bezWFD79kcNcyqVJCtin8RP8z47X8AkZCJKDSsFdc7AFGJ4mBmKA5nXgFoCHRuTmu"
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
