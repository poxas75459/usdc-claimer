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
    "jE1R7NmNJmyFSuBPiMUoe752SqPmdp5yvfwKZmhAg9oYFjDjqRRDYA62C3SYwXss1qZCwB9XcA7gXSTHejrAGFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54UxnAQfMR6yfeo8Tt64CAFo9BW21QmgdzoBkyKk829PzgQ4kje5zBxYU82Nb5BJUZ12HMVWBUwKUoFmBva5mTqX",
  "key1": "2DNq1Fh21ivVLbsPoU87begfUJKHua5uG13TunJJotzoEx86uXjMCd3nWo2qYYpHiY1JdNSZhYpVo8VS36jSwnMR",
  "key2": "29J5pQSf4fxieEQKxYUXbp1vCxgr2qp5m5p6U1DjxEJtFFxg1mKtinKMYUvxe6WF1fWMS8t8hYDaRdHzKcGDv2ts",
  "key3": "4hHVgj7MgmpndxePFgHvFhjHoWBYdoi8eXP871pKMx6Fv6DLsCTdse9fkMGrLUJktKFdqALcaWdxj3MQNw27ZaUV",
  "key4": "2fghUzi5kFfA7KS7jrnmc6mDZjSEQDSKaWPkB5qYTZe5nrpbwijZYDxU8kBJLrPJeFDjorWmBFKgP6XKVbd9Xsuy",
  "key5": "5n6TfNqSnqQNVHnj9PpQ9Udyp9YkS3xRcWMVKUus68rBF9EXJcVQKj9nrytUuwFC2ES4updEaYz3MENoN7EPwBFi",
  "key6": "2f7NhkbYr1kSJQYRGLSNZpXffjUNjrRWRf69PxvTnzYnTLHEAb6gAB2dgMY1sLfKy5oHCsH77Jo1rGPBbik5TwL",
  "key7": "5h3Ve6NJG3aV9b554kLLJqdtmSUaezD6Lyh5xfebA1S4GRBKC65LZ9uUk4wt9QnaSa6TGrWmEhznjbMVmsTQUUHk",
  "key8": "4R1YyZY6MCH6d2JawLTuKKxQAYaSrW49jTKhxL1CQhEm9DAe1movW6Lrygs9AuPqFfMtrWSCfsvBGYwFFnt9CgmA",
  "key9": "45MRfrBzWUrfjHs17gpzFfPpdJr3qb7UaG1poJatqTEKGmiTMafhKproWLuLXR4DQLKnh1BvEvzxXt7ymvdrKHLC",
  "key10": "65xgRX9UuSE77Xi6i4rpWweGGHuX1rzEDFh4Viy2yL8CFtqe2vfH1xDLMDjH746vUesZAYifeWoUKgAENcVFS3YU",
  "key11": "4tB8VeK58jV86YML1mx9azysUDEGtsF9vLXbEA9t6xvj26iMbNBVSXVSMLLcvUWHKCbjspomqoMdSfPV7FVXrQQq",
  "key12": "36NJFsUTbVyesXN8NXetEZDzz3Si6qxKKVyK3HQKMzcSHCR2d9xFXTb9F8FKC5vanyr9wq7pwZgUtu5is8JATXn",
  "key13": "62xgRBv76i2cvw3SnGNNH3ZtYamgurrx3JHhG9pXjiKKSFFiopqxNLNkV2y2wgTDi2hxKpGD1BD3rpyumjeR9dN9",
  "key14": "48f1dW7uSyayi6FpJn3jH9jDsJhUa7NZeGLb2TQTHqBtmyeygPsnTsoavKTU9MgtjQkr4csC1V6PEyj9MWXFxReF",
  "key15": "4npCoXeKc2zj29FJK6vrCT4qymzJm6EDcbqeL6Vz4RsagQzhx7N48Z7oKFMvDZa7nhALxKv5qep1uCyWMQkPxgCP",
  "key16": "5bENLZUgs5LwmjQTtbTHQKk2vfgWJJAVsFUqy1qmYWqELMLiHvEhCv26bDKaR9i3gEG7Sp96SYLoXJ8kg4yYtLqd",
  "key17": "42XpfwhwYieiTbxzqiFa7GtQwq71Gf9m4rgBxrqgQn53Jh1mfASJHkTP7cjPFPoXjahUZkXnbPwdv2VE1JfN9p1v",
  "key18": "5EATQ2wA1GQTAvu7RvwkG1coySRdPc3qAP9KukEbk35zCe8WMGk5CaW6HNDexeAvQjzyymVT8MFDMvgdcV5Lk9Js",
  "key19": "5xqSEzDeGQBz5t88fRxU9DGcox4hM2taaxvwjr6Zahn5V1HXhAea7UxFnviMaMJV3GymMUmkG66v49YJ4vJExcxi",
  "key20": "4NXCcxsYPRy6a48VEn2bvs8fiUiFiRctFDk1Udnh5xCXfLHahuUJVRLHqgFEif5jGk7tPxLKMTptGXTnoJvUVDSJ",
  "key21": "H6fzYsFyexDVU3xDRD3P3tzrLpZZDtVsRAUtnK8ZMnpcDPUFDv3dd8FpS6yqDQx5KYDWxB4D9h7mXWphq3ok1Ng",
  "key22": "5sVVe1V91Ah1EdEvtjoHD3EuQg48Jn7R9pecGs4Xapna9eRxe7SCv3Gu23zxrauPq1iEoC7Hpz7QnvXdayLtEDHX",
  "key23": "36DAzBPm7XDYdd5eK3XR6fmgDMeJ8nAAdKEfsKAua5WqNEWL97tGDDccXFuoMqExmYtPG15pz45YsCjmL7V5MvWs",
  "key24": "5EY9iPc4t3MiqzUKUKxP8fUUpcvvWmcSqMF1DPAYgriVcavmLggtZ8XSpnTRaKgr3wt6vtSwBBtAbsKLaiL1KdJd",
  "key25": "4kcPqWA6EGr4cdAJqUVXN6Xje6S8ud3dbtSXpfrPyJspNZtJjNxdkrTVhbqo18ibb91y3wzQtscpLqFuvcdRZaqB",
  "key26": "4Rk1ZjPWmrYD6wbFa9hsdN5GeLwAdjzbDyAucpLtJRcRsjkCrMxN8XHTyapL1GraXsLWYNpjkWEcCNd46N91pF6t",
  "key27": "2oiNJ36zZQpUHFZkFHjLyfxQjFmPqZZM64g2SQRJKvj3CTy8Mm1Kb4BDheapVH3ZiEckgyTfu4X2JyFvDesnL5yK",
  "key28": "4xNDoyuJPRudwE4hcYjmpLSQY561cYVKN78bE8goLCSQV22q393FcXAKZjb4kRtYBgJg49QtjFmtY3ujZrfVmdqi",
  "key29": "4NPRWRkEu4oZWGCnZ8eBUbGsYeJBAkaR1c1amcNf86UzwEXEsWnh4a3JRo7yYTpTXBtigFJ4F2UkwBMnFPZqpEAE",
  "key30": "3exusvs1HQfVejSrT9KRYSFHMEYoUJGXG5ehrGRDdiUjjEcJYp1nCCi12wQnX7aY3zQimjEmwdWxyBbJJbns4vUc",
  "key31": "3doP4whBVey2Rq9v3X33dpnM6476zGb5yuNyjHjRM9XrnN9Zozoc9WXqJBetJkHgqPkbXaF9nGjY6Zt91yF8pezQ",
  "key32": "285LfXtg1uCXq1jQuUL4ctNhR33dZ7zBajsbiGFveseMY1F7FNwovWRzTMf2eGMAA7Lg36TxoNa4CgMc8qccMJyR",
  "key33": "5oDSHHKCor7Pvkfy5DB9m8qSjDWwpHsV5DYamk6azMdBLDaod9FEfekY788wLNHMjnF9LeRD7mY28GqY1xyZysmr",
  "key34": "3dZuKTzp2XHY2xMm3DcXStyw1QAFqGztZmSNimf2q7MYKmPy4EK8tAtf95CDArFwhh8MCYfKqpBSe9KSWQ7RVuqL",
  "key35": "4mpjJzKi5VTQgE9gp73LwZQqjdN2NXeQaRtykNd2SP2WbzKMmVp3fAfXvacvB1bsQuyxySiUq2TZexs7sBTo2kWV",
  "key36": "21aEJXSZicafWuB1vboHjnbP4wEg6cSEVDHBaz2astkjC2HZPbpRHeXcPQSaVuub9tNdw97UBnufEBeSrDjRdRve",
  "key37": "3YQAew5cAtAQDYBqzFYxXZdT5Vwr6r6ipRvcTYdStVpL9Xm5H2kZAs2EwaKpyCpRVvCyTKQXV5WTDqq1mmEQUpNR",
  "key38": "2wRr1bMi6s5XbVhMZxGMHPSE5SGBw8A1ENJEMMJnFEmZHTNUNMKCzobSbRbWz398gx6hbvZC9tsFYwEHnCFjG5yJ",
  "key39": "5RbRVN8pxAP2uUoq3tSqMdigyGoXqfSBfyAeYu1P51tkiQmobTQxoCDqV5b8Q8UpeQkH7rF4fLTyhUKeni9WqvCo",
  "key40": "5e7ideXC9rvGLBBcKSnBQq7usadE7ACr4brACHb9Qq65uHprRoH5yi14cSkG8nQvPLWo5YJmPTeGavFS6Un729zP",
  "key41": "5VivSmJNH7Bw18aFWyaazLdn5vpLwPiVcazNVQ5SkCMxRY7VN9CFFYiqoDKmo5QtQFFUeKdREG3tfZ5uVn6joMtP",
  "key42": "my9hLWosioa4MDfiLPSALd28BVju2foDjjYQPFXa16etDC1UadBuntjTJzJHEV9seYRDMpsWhKqt5K8mbztSm1j",
  "key43": "5S9YqLiZxH4mbZamGPXe8wgLjBgqEReTAKHx91S6XbHNjKiFMpRXwWMFf8XmJ3sP3mggU5QdMKubzMaFFe8C8NxC",
  "key44": "3StXZg3wBnJagjE7c2QRomtgJX432bkWqfphKiC13xXbLogbaLDcfsk4k8Sr5TWZcjWKSQyyotTnhx8RK7cbk7Yn",
  "key45": "X4R7kTeiPR3kb1razdXrChJyxzk57YsWi7MRo98pga5gUEPxa4VkCtdbB2xEhjjJVTLPpLxvSZNgmMmDCmiA7DU",
  "key46": "SYShKPMsMg2fWdfnh2sgG5cY56wL5hyCFiZAkapZP6kUCDcMcqtxxHAX2FsLWxDZJqByTPKSfBHhj7R2HMiQUG1",
  "key47": "39weUuPVp9RQFyheDbgSDkY1mee3gxaGjAYhfZY9JFbiM1Zxsq86tuofuVc4mSWPm7PXabbUYa7sFWAKNiXVU5Ke"
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
