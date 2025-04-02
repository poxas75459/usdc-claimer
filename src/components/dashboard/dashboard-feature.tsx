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
    "2bYcdcQ7fHNMc7pubpyqQZ41d9Zp5ZH3yqdT7xj1mS2Zhs6T6Pjy1Kkmn3vEeyQYcauwDEU9ytDjZqkM7rCQpyNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sYMLFbRcfVMVodcKUMi63X9n8342TukWreR4KLbhNhCEHiUVjHJfzdFM114mFSBBkkWpKx3se3ARtnN1RCkP1Uk",
  "key1": "natnV5iL4iUqMoocvGpbz6Yq7p8W12jZnJv7JNijpcv1YFV69dMDypZkLxdubs5t5jXRMgSVZYvt2TGU6sPq8xb",
  "key2": "4ysn4AFwoSWJP5mD8JpajhZpJv5py7cJzep1sdzCgJZnrX5Z7bYqpDXZPnJofbJ9HMMysGmtbPY1GLnQuzUDttti",
  "key3": "4vs875QNJvbtcuVC3CEgs7VREXNsNC67SBGaXRQFusbrwx8ng1oH8ivhWFa8KbVXNGgaFXCZh621jRhzrCNHjv8e",
  "key4": "2w8GqNEQ8Y7g1uEEBnafzrqg8j7gaEGy2PR6GvoW2m8nxixWkY42VUSyuwVqozm5A91bA7dgx9GzZQXkcu6bYKC1",
  "key5": "4UVdd3knogreG26Dur3Bp1aUV8ZmPMRnbFLPsQ2a7k9wGJvVmVodkKV4ZGKdkKBVjJ6ww8PpDp99iNjcQ4UH7ynQ",
  "key6": "5xjjRu94csDvqS9xUSPktqENrbVVfkUrKTfNZCEQRfYk6qLwSuBQyxm9yTsH6dJD5r8axKE2WmqkSX8kiXeDCAWy",
  "key7": "Ug3DDEy8rVyD7Qyxj3FFtyuLb44EkjvLYFtaF5mq5yN52PLyGA2QaxtEF12xaAdJEGqpc5PjnVY75JJLRVRzCDR",
  "key8": "43yxb9Vy1pwwwcCehftjLHNFadLRErf2g27ysWiKFJ8xx2Lg7mgZVDjRXqvPc8XDAqwHwKmx58nCNcAUJryJoNrG",
  "key9": "2ZPeQbagukoqSKWh1DHbjm2E5cjdEXzKTMkVT5qxSG3M2oFz57HYhexn3So4emrfT38h5Mg2d7NG79YTFkACkiPw",
  "key10": "57qz1ZPfDY7SxNYWELnCtBv1bkp9X1RVayPeXn6cXGtfUYsbXRC7ppbxFHta2h4y3ReoxQm3oy5Tsa8LnexwCVk6",
  "key11": "4XmRbqGtH9HRd2ZVN1vv9s7V4oqszob4FWMS8KVeJQtdo1Qj4f7xg3TupCsgeNBdLh9Ao2uTkbECXf9yGxbNJCty",
  "key12": "36rh2eUmAVbwYzmytUZCWqSTT79oLh9PZLvFuWNoT7nadirz4KvVvYYHmgBrKnS63CUtTb2BL1VtpvRRQdJ7H6gV",
  "key13": "6eWMRH5VGZkaLWMWwiC2oUpyYrju4z55pdgBNvyNvfoG5GzaKFGfA7bDFzpth6CNcmkkvdKjoND93F16WjoWE5r",
  "key14": "8vMECJgjjMxYr1nQnGSeqa6MqhVBTSAKVnzTcjtPhzt3EERFegQdx86keL5FNhtc9q5SpjETNnqFs8Mo8YFDKn4",
  "key15": "2eg3VNrUa5L67C1yhGEcA9dyq8Uzenx4RMoKBPqBRcFQUQuABaAL9KdMHctgn28SLTTc7Fiq1CZ2P1U2b4Jn2u6Z",
  "key16": "3AC17FAdiNtNRTWQnCEsu4cdcWqu6ZPCd3bEXsr9SKELBGmP4NUsY3aq5J2kzeP14sdWupnTSje6ZA7Sm2Xt4dUb",
  "key17": "36oGZ6UprAD3p1SjbGPu4Wug8k8Nmq821gef51or5gfPjfJbUgbNQjPmxrzrycy3oi5jzzh1mRPyMcTaw1Qk4Yo6",
  "key18": "5qFoEyNrqkJLsHBbW6bmZ4R6zZFFfoih8msqAxtFUUnBxCG8fmGLHKK2aNcT7csPMnVJnsQc1zYtAxCt2CQLJtag",
  "key19": "2tPrPpDBJv8oYPRBRVunuyY71tiFCtgCpkdeRoVayz4qoABdkx1jejY9yGL359RGT5UN2LubvK6fTvwdBzSX3tUo",
  "key20": "2moxWxgJkbAbGxNZKpieQJno1jvUswyp8zGYq3SZntZRyxF2WVk3Dhdgx32iTkDddzWBudd6JwTL7zpEp56otUzM",
  "key21": "66wwanPLeb5miDFDda1xBSbjHuJaZwAtb56CbEyZ8vDFnHMNQjgrpVgY3zCe5etqRtMWEdjeQ2Kxh2J6wWdRoS36",
  "key22": "5f3ifNcwdUHBAP5Urn2gfX5UwYYnBSw9CNxaAhYU2QLJdCDQo4Av9y7JAvVLK5nBAcvuE5fRErrYPX5PVfQm7r2d",
  "key23": "39S3kiVFd3J255xTESfF2tjQuj15tWXnYDAJNMfC33fpRPG6kwEQb9MSNw8EuYh5MgGFurasvD5uiKEzQx7U9rrr",
  "key24": "3Y4HT72ZqNRq4ypjZNASjG6gMxqXnbXKmywXy63maHQiMyECnBfJHp4S4daQkMii9PAUHdfjqJeUrf29UtR6mZYB",
  "key25": "55uLNsppZtC7Kg2hG47AtfyEywBVxXv2VXf7vusP6z7ku4sjaysbeTktxFA7KW3WmAC9Q8CjUfoxE5PWCS7hGLk1",
  "key26": "5GHWpPzzvuj7WRKT64vEGPAW9GUi1Dy7oQMH66ZNgdnWK4rvvRDsrf7Y1yNERMyH18KUQ5MHuNmjmzxGxzsDKmnn",
  "key27": "GuKU3WdW8mAXZScWTCizRXTYrN64DDAtvV5H39zpYJVdnVG8mcQqY7CvHFrcsHNzVT2oGq1m1hWmpkVZKQhVgBn",
  "key28": "3GD9A6HggJSefRJ5sCRKisphS6s4io6zqzyNVLXYaYVFxrXfqfHM3hF78CypQb7RXJ7PuTSUkr4d98DukXJ1DPa7"
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
