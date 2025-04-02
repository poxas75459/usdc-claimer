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
    "3TYfomy4UfmmSSm5i6jgZJaRC3Pq19fTmETaXpqnNjT8tUGUi5jg9vguPYLEk9z4f2xXXf7yHizJHCfvDtLoNAiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvuWi31ufhr45AYshJvsTA4B71PoP1FpE1h3Y6S3R7bCqxT8wVNBtaUui4akrJVCgG9bC3DWuCbzmgyYLJ5GAxp",
  "key1": "2eDntLzCtohXnBJMuD8f6zWd5RrXaqSHTBE5CiHKnR2K7tmbvHv8nys14pfvPj1nLGP6JBPqXeHPKEY2wFSpAoq",
  "key2": "4CBjVViDkg3MdEo33qefzqHxrP3ceyGQ8LaVFsPP9ojmwKHFE9EME9RKZVwbeXQatfrvQsNVfWVFrN9dd14TQreE",
  "key3": "5Wyba8cxNZaWBzY2mBiD6giFoprKjUzBe85TNK5PDThBvPY5jidsAgPsYZJHvtzdx3GwsVXnLeP5p8mjinT9pKAr",
  "key4": "3zto7TUb9R59qoPSdiiFN6K93aiYrcP7x2psfsgqExeL9qhEGEdivJnSj9mYZN4CCaq87tY8PfDkNz6kC1UCdJFF",
  "key5": "4ooQLnxGrsAgrWPWz9Ctnyt4SC7W3p56mw2ZpyZbwJ88jWkV5xGhvGCqos46q56vguS3bAihMdiVejmNwRnwktj8",
  "key6": "2Tv6xBjz8bpMvpFfYqZ7nFXU4VkZGrCjc3qwYVkCUt5DrVUbcrbobHDP7eDoSEsbuNKpYoT3E4sG6iEPmSEPDzzX",
  "key7": "2v2eH6wWHGRcS4DdThpxMgGdacTb9FLFq64DTxW5Hn2Y6kQGuVMp67gXQxQG8h8Au9uaMXkT2itYmSySg5myLk5Y",
  "key8": "5C6RZGw3P4t9su43TKxhvERy2TDr6DHZntLHQgpbnLQ3wNcbXG4Uo2E3t3JC3BTkcMoyuWoKiKnDdqMUXPSkArKF",
  "key9": "3MEhVYJCpb3sjpR1NfF5erZ72atxAnZwHrNtargBXeJSnSfi66j45n3SQFDSrgwAjEj6xDRpV3QtBSkSHPAMcAiK",
  "key10": "4f92Ca24UyZ9hp12kRBgzMeANCJctigrtbTneNsZ2wF6YgxAtVKqcToQ44QAEmV5CceqNx7oJJboEcPydNdrNrg",
  "key11": "mvps3Lky5ZgKbcAaV4E3XucfwsC5txMeZahwYUdaZTtyBTaMerJFbVebzwe3EeLceHkEtxpwK7rBM8Mot36aMch",
  "key12": "5iFLn8TXPgWYmu3cjvYXohU7otiPf8btGWtV7a8NgUPktdaX3LNzaKNgCcbMevS86RXxezQ6dhXL3xqDYHKtWh97",
  "key13": "5YZKjxauWcHkdNtzxUMva29c1hKCAKbsvJ3FpGcKjWsmu9RDsiurvbv3eWob3n6fQZZUT9953cDurWEuCd7S5F3R",
  "key14": "5PaSTpnm2uVrqkzwfkChykA1DEdHvciK3W2gGG8zDFzsitLzyyRSnhb789cP17rJviKb5Zsjce8Lvt1NydQVLkvZ",
  "key15": "5NiNSMa7CTgaNFkJxCUk8L7VQW9fTnyWZ1rksGyysUfLxQqjoymiRFcCh5a67wfveWpAEpikkLRYJqBN7tVymG5H",
  "key16": "5fok9J9PTHhQgiqeybMV5DyiTEz9rHnYGnWApoXLgdHCwSAy6UkR6XjbcjNLPUncwCb4zj5Aty2ycvGrw2oQtWz7",
  "key17": "VyznEfvc4AwrEaQjy8zSZhLg1xW8oyEoyQGSpM6zycAZrmfUsA1gsqwYsHrGrEBQksuYmeFAvPwXSchHybxWdVS",
  "key18": "3qNSf6jjPro7N3EcLwzt5bMU6DjxDHxdcR74RgNi9sA4z9kVf4miyPfuZv56SAF8NGSD41XhDMoX7jHB9vkrcMJD",
  "key19": "2b4Aoyq9V5P42xe2kkCFd23YG6Yzdk8p1XbLpnEkHWrEFMfmmTuMuLGUuEs6Kz9sFRbn6cuuhatXtx6NDH6RCB9z",
  "key20": "hUECPMN5GX2pL8faJfVrd52bh48FLzZc5Uf7ojZkJiE3D6dMQemsHKHVrwZ3hGS5matPyAU6te41LuFKsZwJbK5",
  "key21": "KL2x3maaeYB2cFzBqWYsbkWXDNLVf75byVzRWExhjQeJLmx6TnPYkag1C6qVEULQGqRkPVtgAvbJVdVDz2EgYMA",
  "key22": "5uwuVBeiUT53YrRndtmL8cM7ED9BkQkxA1GGS3ghKFUL9V6MbYBxEpZCwm896t1gPPA6Xandwjqz1keen43K8Rpt",
  "key23": "24tKMVkfjEnEvo9qLfGRUzfhtQEEANmZ2raGAQYFoYxdXrZ9Ad8quPQKcFa43CCSp1vLSG2R3udJSZCAUgNq1Eqp",
  "key24": "2dUewpKG7PAanruYSJqhc9tX2ZwbfF5QVShs8CbmLXBRBkRxz2413VXiQEeeuhenCdEWZnfknDW9ePLgKSycSAVC",
  "key25": "43AAXYAu5Hq2bdBJEg2LurpbodvJmWbzPDsC25tjxpm7zuWKamuyEawcV4P2WdMhzrfkxfRn7uSaKpeudoKeDpcb",
  "key26": "5pgm3sCjz6jTGJgssKKj7kaYQ8ne8nkEBbWh39wb2m5Ng1hVBUv7mvnQrgbs7zg3HvB431UpuweuReMPGYoGaheU",
  "key27": "3M5Gvu7zX5hrZwhPmGJWqNBQtPKd9W5d4if77BGv7sQBSkCGg79KQjM2v9Xrn3cNksrikvCkgx4qUCmzsSRfY1jM",
  "key28": "ujd2FEAyTat2YR8xvNo56aRyS4kTGEyS94YdYQ5fyXmVyY69SYN6qitoPEuyR2BBEic4CnM7SXjzM4dXdzQVXRi",
  "key29": "62Bj1jKQ2pjoSMGM6Gpz66xqp2c7kXYZnqriTj1oJiKwU6vo11qNGC7JubVaqJYWfAi1rL1H5Ua8eVg2JKNiDWQ1",
  "key30": "4wxDzg3aAR3xCkLfCTWqmKvFen49ohkbQLAkWKWHnnfHqLWTvXWseMJ8S5Z1FXuEutA5E6yJ6Xvd8rfo38uTCZtb",
  "key31": "4xVLQmEGdAdKxpvkqwxt4ekxZ7L1kMR7caBWFM1V76ugYyaxtcYWfmhiNTRcRCcGQvbe5f8zDZXeKw2gfag1iMj7",
  "key32": "4wjjjr68wemYR6zLwYYgwReYXUWzojCwUxX69JwbSqXkRtAcNbm7ogKyh8WD1T4tt13cXDeWxBN52yPSBrDBsCgn",
  "key33": "Q3fj6uX2o3WJGFVH7gBsVhWtBECKxkMPj3EzKzL3av5osopcVWMYhJygw56qPGMgrSqa6tGDCAWX1QAcwkGAurk",
  "key34": "23UNuehfX8NxmiASJaSML19ZsqBxRNzS8Jx1SfST8NNgeaQ6VJgfE5agzufCRxmUxZCoJuk4p1afWyz1XLCm7W1R"
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
