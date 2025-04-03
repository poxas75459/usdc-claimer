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
    "5ZV3p9uSwATTgUvGqqfsSfanYyhXpwU5ixeMRBAqxJNLsJm1kzPfNjTJtx6QdMLqA3drLvuyrdZJvgnkvXiaZYoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JTLNzngZpfTMsKq4nBZCJLdDbt6HiEVwV9Z1MZr2ZLJdQsd1NsVPxXygz4ENngNWrQUQd6mpoycUAuCtcqZmUuX",
  "key1": "vb4pgp7gtnoucoffssxXnmU1nLp6bBnG7JwhUsZJNq6hrtBAC6SNA4CLvbKrPxjvAPnZj2gTPaRUBDFajZn8n4F",
  "key2": "3tCHdGr6NspZow2JyWhf79rjh54Aezj26LP9L6GqHCG6BNBCACXmWxaoBMvUu9G9oeMnxp2woKK4oeyX3kKNzwtC",
  "key3": "5j4acWXBsXjiG5h4rn5hnJmrpMb8FYxJV2nmptdqnjxA1v6tB3owEGr86MB6EXh5wNtiktKkBEQCdwCkg7dAUxyN",
  "key4": "3qddL9vg5naDUdL3BTDx31SwPmrW8T5LpZgdc8YLqRmF1qTcPPbJNRed5o9VoG8QmrfDgXkMaPEJz31A4P739Yfz",
  "key5": "3hC4XouWtkC3357gMzXUyGw4smrNQNBFjNNXpY4eMGiKzctB9L89rf8s5ifuyC6ejcm1m5CMh7FxCZ58jxRrtMwn",
  "key6": "37f6d3V97FigziHRG3nnBjbLv6Z6mUCJLA9MyMxaujFkBQ2EMuD1Jxq1JfSkDURX1hRuVWtvCXqVnLKhFSwAtwqV",
  "key7": "qWG9wV5rTLKhcwxFu5GwPw38oAM9XD1iQKVVUVQxh8K8msvwG7utJQxQEcMi5zBes6xPuuDXZmuetZqiv9eKzbQ",
  "key8": "5BiH5mxH3dnbNayzG3dUnKJr2CS8RaK1h1ce7Ptium3FbLnQpa2kum8QqycAQH28PEqXoish5oCcfqRuJ7ePX1BZ",
  "key9": "4nbN1eh5tNEWrNH1fKbUCcqvDxynSA8phpR8to3orJ2rPsYvyTiW9NxBPFDdCHVyrtqB285PfnXvVJD8TKzpmiQb",
  "key10": "2GieQZLnKbpwZSvPkuC4PufMN2RE6ozTr7waViSJoSM7xZHrzqpJc97qRCQikWMJssNRE1xs4hmzq2FiYd8bHe3E",
  "key11": "5KtkqVukvCZFsx6X7fBRGM2s72VvU5dWo4VUAPUrsGdYohzv8FQMvDxxPLNPbYV6Ef9eJ5dpdmstNMKe16CPsbU5",
  "key12": "51TtEMooRgeGSWPuX6SZVcba3CDQXtmKTyzbLRAcKp3CzERt8TPViWz4hM6MuJDJFmYPWcsJJnoGSEuZddBf7G4Z",
  "key13": "51cKrDdPadfVMowYu5ydmUK414nZh6VWwMDCKMSvmFQzJJWAXbe9YtfzJnkq3bXFGVTwMTVYUJ35YWPbzqNCPTXK",
  "key14": "3kThMGz4Xw1WiY9MKmqTf1fc7G4pwW5NNNuobqxkfgYh2eTwmKUvB17y4QEWCvKMbmb2xYvc5jTuzx3QEYdy9x6m",
  "key15": "T4B1vgo1YZQRXvhhkKqNzAGPqopXd4nxfWBsHtPTgUgr5RJovdAct2xkytU8W6nssDh7TvWfbE4nsQHN3zduJo3",
  "key16": "7kGscSq2gDoFN53s554veXGg9qU1sk2S5KZjfurLn4ZZJsg2SU5qWiXkTQF3J9b2bKEy3EPHUbja7wLtJycMkKh",
  "key17": "4FpiCnBxYncfQfjSNcgbZJJ3zo3MFvzipNP5jvNTFVE1ShsPcoQQhvEdR6mEzC1vdHkFCs4DU84hXxZP18VGw1zu",
  "key18": "3KdFZBm9yr1mvFJza6pDxMdmTfd1SiFPr8xziZZKmdCNJALYGueA2mVWfhw5kupikmH6THb55zctWauMXytWyaDj",
  "key19": "61PYgLR7oEXKFtEy81JVTm6aFtyUVn8U8R2FMwCzKk4JkW8xYWqtMizH3dJQnxuCoNePpUu2VQTLyjqN1ukg7j5",
  "key20": "3qu5XAq7Zn9kamf2Zqt8iidtHKskKSaMDdVpk5ua9EQHG7wSx9jWJbVFtmXx6zQC6GKcXCBLZdDzKadEKV6pxw5R",
  "key21": "2g4mVs1yu7bhMA7qXT7x9GyZfNKaDQ6HEyzShYPnYwiNi385r3hBvT5NFnJietvGwncTzymyshKB6jd6v9NCTPu6",
  "key22": "5riJz9j6JBZehrr8y6KZ2QPyCTBbN6ifAzXGLojyjixs3vF4gRWr6D9Zz9dkAMuXhy1p3uK95gyiH5G9BTA4DcAJ",
  "key23": "2ZS5o8y51svbT7ehvxSaQfWp7LbrPCjAPLe9kHVirmVgF4FN6GKjewYEMhjy2YsdsddVAPskMfPBNa76AVrMjTMb",
  "key24": "dCdXqACSjN5n5HGbPfsx752UfNbF5NNeBZyG6U5huWmhcnYhHDb3jqXJ9WdqBXPQ5ixq8gxbKfZbJwfRhT39b5d",
  "key25": "2Mg4d4WjUKqTtgQErfryRFug8BvQvM5xqudZDAjzfTyjv1sziyFNeYmk9oCV6RWe4xhv4RjJyg9gv7RE2ccRAXQ1",
  "key26": "42vTRs77gxwfsVs81N82q1CvpaUhCgTcwHnV63UUFJ4hfy2Jw9nbcapADbs9A9dyhDYxRtYD22ALGEdxdJeYxvoD",
  "key27": "4dZGmPrpE7fbtVMv9THu1uqkT5ALvaDAjLstMrkVpygPHeFJzj2HBYDRCwP1gaJoUe8Rdqf9UcVheR1SJamweEnG",
  "key28": "2jKE7GXL1BfnDbznPhrY1mBjwPVR9aSNnSYc3gPS9mPzq6bLX7TCCz5dfMRjzFnKnkGz1wHvP9pUMhJj2y9MKuc4",
  "key29": "4nxDjNJYpnXK9BfLX34HYD5RnVsBy7HTBUpEJbRk5HrWdE9mPZKYjWry6vXoeMdUjPBvhBsLSDogJhMAQH4wE4wr",
  "key30": "5TkUHbXgN4NKGxDfjCmX5pAP4qnQFnXb76UMWnb8YnY8Bo1LXwnrbhUa3bRSTpDdaiLMg9V651KtktVZTwnWe7nv",
  "key31": "gaBTbP7zn9BRUACZwydiPxZ6HNM9QpSes24dQYHZikctVBtKG6Chez6AHs45jNG3SwXn1C7Smk1pgxMTnTp6y3y",
  "key32": "56jT7Nit3Fyz4TLp1bGfEZxr294XYzUpimmDvZExRQ23B5d49SgGJ8hpufD5eu1RggjoZYVHdgTwioAWFZx4biV",
  "key33": "2g6UdHr3HhhQXS81xdd1bESyNR5uWouRLmaqN5FrecL2ZvN9dpqrM7XnNathYDiAqwF9D5JPTMUNYWBb69kAzZz6",
  "key34": "hXJ3ajNTHAzgMcbFZMNsxFpmqvtMV3dBD9CDrD8TVEKjrcSjaeCqbaSzuDxfTXxFmXTdTnZDrAKBr4LrgZR756S",
  "key35": "5ufXhCz2A4WMZx1XAq4k6d2UD6q33dCyntmP3RZdwHJvK8u9E1Kg14NKeZ3apnknSQkTedEhBbnnCaZBts1qxw47",
  "key36": "v2LN23Ps57hJhq9E5cgNPNcaaQSAjCr3CU1LsimFkjFSbYzy8orkr4JrXDYWcdW61QozJysHxc1Kky7XUWkpQFr",
  "key37": "3xmAD5HzRgLPTME6Fy2chU9rAqcZk3kfNWSe5ynpsQE4QMxgCwNB8pKhvDhRHNJZoMq4WrjUxtJTgB5njzpCu2Un",
  "key38": "4Jxj4omUk9pmsXsSHA7AuNLrPkktWM6Kp8dfUZQwMEwR8vHCNWe8eB13c9Qx8R15gJAaCQgoDYhLrqSoeU1UxZ2g",
  "key39": "5twfuCANtffszg26JGLKv21kVG9KGgAxLBq5h4LvZZN4H4vNtvcJ6Ng2mp9SfJT9rfr2CQFj9QyN6DPYA8oa3f4J",
  "key40": "2ZyPe2gD2fb1cn1iuYpVk3B87jh2qfyv3Z6tJhgVYrrMhCLy9tUjLQGE15crBBAmJXY7aCAvQRr9sZLHr4ux2gF9",
  "key41": "3DCYxAXHx1y8vRbN22fH5gmjSNKWP7su4wozsiGghGFMiM12atU7vsGvXuPRzUVS7V3o3Zc4V46Yz1Jdh6wxZK4x",
  "key42": "4GdRSbWe9VHBXmDshHhWuxZzn5MArarY5vAPuyWBUSSH2JbFy1PV2D9JduTpNV6gqD4mLnRHKoQ9iEmQCiMyWxgp",
  "key43": "3YZtgkvk6T5rxZoUk9r2vjnCArUZMgZzmNAiYVpCZDqSfFFxUuwv8cUZjee5qhukmEURJttWeSeGHZK9dwmPDe4L",
  "key44": "5QACrnW1s3bENVmpV3j8RbGhXQe19bxZ7qj9Jahb9LpXLMuJtwkSad6kdKFBaDh1EpSqb6SbrH2yyx4JKJ9Zvx15",
  "key45": "3oWUZyocQZw3rBSywMjcUBneR5CZn2aTYkXDdtyQgzBL3EFjUWVk8qsA4Xzhtco5eESCDHCtQ8WZKNGCebwn16Yu",
  "key46": "UeGogUz8R5cpjkC131HbPsRr5XEt1RoxJbarzf7ewtTc1mXzJ6HXkYrGiwC83HHpiojmDWC3B5jkwga5NcYzvsA",
  "key47": "5GvUetfNc89wN6yuAn2gTr5oK1arXyM2MrRfjDs9Rey6dudfgsFk6R22YNG7TdciXTvwnAqRrvjbcMFn76VKFM6n",
  "key48": "5jQUp7dXdMiXMsAfv5fpgiDNTxiCW7rkEERxcGcDiCFAHTX6Fc8djivqrjG8WD2wJQ9hy1pmBcCfgCNoKuPse1u8"
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
