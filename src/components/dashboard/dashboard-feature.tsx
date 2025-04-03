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
    "2YoahNogTPJ2tqWRM81m21hk5X7wQqkf68eq7cn8kZihJhjWrE1sDr6fFShxs2WGrtr2fkLjwVJd7UFdpBS1Bg9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W568v8Y1ZZ9XSAx9NDjwoC8ZSk3pt8EQHrxnHXAuV9DxDxe3nDKs7yBFL2Ku8KJJSXDC4p2uwkNgJmo38YV9uXu",
  "key1": "9NENHLuGqWL2AFuFt6jzuuPmTtuPWCf83apWscZTEyA1YgbKQ6uQymLAZ64WhVFGSWZi3Y5jaVjcVzV4a3TucS8",
  "key2": "3hSaVEshS4HbtDVB1hTpRFV2ZJ4MR1Ti1Wgb9q2HbN9vTrrDUHsKwEn569ei8hiyHFUruRSxXznMsw2Mb1eQZQSD",
  "key3": "33pLPqiq3eJF5CRi8aYJg2jiSd7akxQQz9L8dsCi8wjpLb8Q9GUkXMkHpyjrGmTJdh88NpFpaJz71CPpRwXmHN19",
  "key4": "3SVNUU9tKTUKSa3ZbAwbmvVfYwxYYe5B2DXtyt7WBCifV1S3NudDLxvaMVneXG98h4xGVyGLovuDDbCvom49SjeM",
  "key5": "4arUigT3X9sc3oDg4o36rBSaoAyBuxQdTae67Z8uTqJjFPWnGDSQBY8vgcmreTnoYqDNYvWUSXaZuSPkQhAFqciv",
  "key6": "3HLuMfDwRywoF97WDe9MHudQogC1EgyBjJ4jXM6XTSWAvmoZRH9fdY217dZZwq8BU6KavtoN99tCsVzLWNFh8c88",
  "key7": "3CzxuTuCEprkuqodPKnJ8qA4MYruVTUJy4axcqFheumTPfpHj6EKWYKyBvMai1WVXiZaya4uTnno1Gb2VrgimwzL",
  "key8": "QKBEFBVynGHR4mGrwTFmKRiCbReocYT3ATH7B9875D3g4YQKAMBPM6VrdH4DXgWhL9i42EvQnTFFqXoJnpLX1rg",
  "key9": "34dtoGZsFPRz8vDDWsDzLrPGohU6PverRHzwYiXxL4UQAvTKk6grZiEmryGrR29sEDCWZUVY9V2VJbQBzg3ca1iv",
  "key10": "5LyssCoMf4q8juNveKETZNNv8ps8zLeAYpvhKU68epYToCe3Qxu8dnUwzmYEVuLASKusRxNYZZyxDYgiScd4TFeJ",
  "key11": "5n66eTnARnpeWTPNcKUyJrFfsXwC9jcM3bqoHcFhqbygpvQvtQtinFVTZsQQNaFjEL4L32mTutgiMSkKbQjcSnSN",
  "key12": "2uFAJNMrCHP27WsZ7sG9tJ85jbNamR4dq3dqhTTCprDhrBWEYxFVj4KWEYBCWJKoPkoNbr7HqS8kP3WxQcrufNqX",
  "key13": "4ibu1r6J8TNaUP37iactzhe8AiC5A5j37so1tc3zevtY7DhehuWnoegLNXNptcf9L2EERb9k2cL3KgrKAPr6rr9q",
  "key14": "2eAdM3sMHJ7qBdoqpcobuFCwNr7h8SvGfdSPkeSWK6N9nn6cddaPCLtNduWJzMNg44qXs1sAcySTDrBerJSczJLG",
  "key15": "5wrdAGAcLsQEHGEcTFjycnAXZSgtLuDbGTuBh76oAo6x8EhvG11oVaYQK7H8uGPULbj7qAyEWHeNPrjQaPYYCbNY",
  "key16": "3aevrTMPnLLUj7yvB2LQHSsDsuCaTxFnKSrYQJ3GuCVeXXdQLczRcvw2kfYB3dDS2Ursg2QPfrw77BeRK6rPT6ua",
  "key17": "5tJRq8i9VPvHAHJbheWhXvMBGg3Qwse7urV84QNfv3pmuELDU7zrtKX2FqjFNxxjizW5zdFKyCak2AyvWzzjKwdS",
  "key18": "2D1NfRbG8AgjK1FbqJANYWbUajXppAJgJsbKHYH7Mq8j5wtEgLKxUkiDVVZvN3YQtQJ9sYFuLA67FNMhXEjmrkVf",
  "key19": "4mXB3KeCP3HenKxL3KjKdrPPd2qDWx27DRBAf1T9fmM5C9VPh8s9ZQWTkjCgfXU7Z8NRjSpvc3Ra1fij564AiRVP",
  "key20": "2Rqmqjyzz1yB8hCBSYGAFyUZxKNa1KJtNvrJxxEbEn1bMtsczU9UJrDm3aRsuEbsinx9nDTUdgKhmwhH1uxh4etB",
  "key21": "2nWySjyLWrX8b221ah9ux13tFno2ifYSsJyN2j9jPanQtBQwimwWe78wZovSm3tHRf3dPWvDjPWpAnoYEVEq4pQu",
  "key22": "2omsxfQFp9LWyLQKLzdaYB9VtRh9YB158Zxztpni5evBaA1LQwFjcWJRMcqSW9voCwBGhraZqc6nKwP7EXTP3oLr",
  "key23": "5kKNrVC7ggFJKtZWvy8N7iTj7jzpc7ZrYsXv91sq3mNbZSF6EhFxjfpdxdTTQdhgXUXrutnp7H7kZtKZLS5sLt5Y",
  "key24": "2vLJ1KjyCKM4LZs992F1MWSk16E5T4o7mjiaP3NuDeqWtFtX8Dm9fVjUE7E7GFDR5KZmQk277aqCG1u3PyrUgC2s",
  "key25": "5x6zkSPqs2aHLAdM7ZVLPLHgXncdiL4zLbGgEn3URqTeG4HT3Pyo8JQdy4q4kyWrcVrZxL9PDWqCZyJBXhVWBeDs",
  "key26": "2HVNJ6fN5bw4bpjwqdq1s3iyfi9N7VyshJm5gDKEGfaH7DUdQnV9Kr1C4KQXoN5wbY6eoXdyt6DZmTtrAPWdYQ5P",
  "key27": "4vAG2LTu2i9rG3GoExoBotyiHb9PF5zqwz27FfhbAwJRh7Ccw316J7b1JJmuNyb6BA28jpgPW5y1CgJH56vwcGVn",
  "key28": "2MRovwJ6c9a68TW86CYbuiYxaXg4Bpihb6p9xe5gQLBM53zVRLvJpWeKFrWG75N6Mgp85RykQ72hytnGkRuLvLb6",
  "key29": "2bdYtdrXszRkrv1tXMBRPipN7efs516CwB6GLdsLnW3GFSyXUXfevwgVMe34oWvipFNiAKn6eZQDmYsZ4tH8XRUd",
  "key30": "2STooyu5HiFHtUV9qpinZcP36scT4fBG9BpSanvJJXExetS1VZTpGbnsZDbD9TxtctisqCHZTGD6bjm6WPDx4kBY",
  "key31": "3m1FoGChjwMopfwN2vMRAmihfQgWxmD5zGeZFtbsZ6QzYBqmcY7YLpGEFL4Jc25ysCec394dygUQ3UKe4p7bqgBU",
  "key32": "4YmiH83kVjy5FzCrxnosqCau6xwSVJD4TfR2a7cMXRiJxDXjrFG6iS6tTif2Zy8Wf3NMeFstT5qZEpEKwUkNEQTe",
  "key33": "pBA1fnyYkuY4LX5pjaxisftWHGxLa1XrtcJwr2ovGjGaJgmUcpqdY1fPC12i81h7umzPyRsudeAk5EYbvH8jzYo",
  "key34": "4hQkEiXZuobkf4iHLYEs8cmgU9decyKwb9HFno46m6RxNcM6druSMV1WTZgcs3MCWfqhMC9a6mo79RXQef4LTVhA",
  "key35": "4nPLhwE1fcXYyVM9txXoLUxguwvC7aLWMLPwNuEdSbFRLetSk7FzYm4nFkrQGGQvx5XXu8VFjFt7n3nW4e2ssXty",
  "key36": "JkjKjVG5vU3pwLpxbevr69o2Z3P6BQ1EB4LNjr5GhBxNWFZRoKhzyr4bzveXJeBrkAiAaFf8vffVuHaS2iRycva",
  "key37": "4W8DH8jZWRHRPQ3AkvZN1rc4McuBUsLxkWqJZN3x6ytMefUx7HCKR9PxFqiE5aZJBJQr1HMxwZJyhToNGFQFLXq6",
  "key38": "2ZJbp9EUs47KwSmWarRJHfz967LGGNY3nMtvaj9tcSVGhocpBF2YH5mpNHv2T35W5zgp2dKG6LJm42rM795F6Uj8",
  "key39": "5V2zGwSvxpkXa6cuHj2qRa4HHZDg2CPhR2XGA1XUV1cdngg1GgPHvVdS6Sn97XXhGU8PSN5PzhagbvUjkdyYzFFF",
  "key40": "2fBZjFHuyjV9zXeiRD1SuBAy9M6T3XxuYvxN8jTfcGJKgUdYYeVJTxCgq9VNsk1ZDkacK42BoNruMCVswdYzs4Hc",
  "key41": "qAYToHiGe5cf42V1hA5rWngRtmCYuhfporpVPwA7bkyBSxT1GPnWT1cfFx8Ly1inS9w361ftao8EVdi4GTSe8Ga",
  "key42": "31PEihb7EaoqP2FFoABT82wFfmKTT74ujcZK43C9rfsfB7vci53EPFphQpjsJF7RdCB4YCF2SYCvuTEb7vCsPhGp",
  "key43": "2hofSJNmng3zo3MxAq6USK2EJZrvKPwzMubQ429WAnTcjZVpegtPQgsUBq9KZYLZuhJ3qUQcr48bQvqjfbJYF2bH"
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
