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
    "3u4MvnX6xT9yufiRn7TrtXc9sd7vbMzmrPVU5YgNEFjAGdFu95kTm1ScWwiEDUB373E2BRh4M63ccn63ck6oA2gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yy9RJrRzRXR4AvpchG4dJafkroahXBeGsGtoUA1ny62JgN1uAQSgPrjbmYagoxawEjjpEqT73aVB6caWajKHKFr",
  "key1": "SeHyNccwS3tvPg91KtRcfXwrzwGk253KcP2EeqRDULZgzttf2NgmTj1NQoTNx5cvoJWzjfRCZnGT3oZfc5UFGWw",
  "key2": "27iFy7MtmMDzF6qQSgFxfonrzq5pGMwX53doN1vz2RsuHHFt2wXMPyFbsZDEMyjmL1GhVUru8YDFtF8Fp8Jv9eeJ",
  "key3": "5UnYaX8N27gXEaRnR1FPW1hobbwT8NxEVB46119tsGNXwtDtwFgnZSVGyzoFwmhC52ff3vEchtLtPgRVFJyrc1Ub",
  "key4": "McaP5yv1JMHFV4bvaDbHKaxGegwcu6Bs4GYBoMT8EhLSbqSRNB1UqFADNpTLDWj2KGVV25whbsDofLg8g5RX9QB",
  "key5": "4N2QQZUPvNvgv2i5bhYPu1rQDCGcrJRuTam7ZUs1j18mAChrKtftcB78K8GKNZbxsgvQxnoGwDseYQJ5VvnTKyhZ",
  "key6": "3DB2ZkV6CVyTZAX8njCsBQb6cdZRo5nVSLQxrJj9ofuqoYEVwK69GwZbardK9fEAuorsNHD9w14wydc84Nz9qjrn",
  "key7": "3kRUshttxigY8KTv6tWQNHeAFVtY4aPaN1agzuyeMADuitzqSqW1vjVP1JH5KSZPULdaB2NwG5BYdYZApfFzF9Fc",
  "key8": "5HRkgMbkgn14YCbT2KRvqojNUMSkmR2EeP9M5ncCmURESa8wumDQP7wfa8izy8ZvoVoscWhsqpfGmyvSQ7iKgoxx",
  "key9": "5Mkg37M7iTYaY1owVHFmC8ibyTAgo5fsCgZ7PiE5ENca3XiQNd5oYwoRKL2Y2RKh2BCCsup55y9xBXMdS52fSdWv",
  "key10": "4UGb45tpJqYKuv3HPzDjEgi9EGT7YhUKPDCnt5ciNyxK4bxLTk3YLTmDaSQkpgWoQGosSwwMAc4etk9VXNtyi73J",
  "key11": "xPk5SDkEXpdA6hP4iLbiNdA9SXj91WoaffuEA4Pf8XFG5zxigexYx6EKHBb96MXBVrMpJ1cTKM9oH3xBYmfkTpV",
  "key12": "2ACSRiXgjruZWVboXh6Pj6eqHAggz41562T5hWSXvb7v9HAy8zMpdFSfeaQ5feUqmfTH8EFN5AbqijNwJxxFwnGb",
  "key13": "2yPx7QGBojC4vroKQ5heriQG2nBkXhx7fUbdxTqicakfUmwsiuJvdxjjY1XW7rGrivUPoCyxKM7HTZRoN8TW1FJn",
  "key14": "5UvmVvjtjS4e2tSAZBrDbbik1EEHcFRYaUjpLy1Fqf7s76LLop47hiBKxaHA3mWyFHfKDnF5ExsMFLdSsbJjXMFN",
  "key15": "Cbyr9946x8tQ7Jcz4FJ673tWXmQxWiB7aagwJxbkLztZbe2vHbYfN1ozBYdcsGzgXtckXb2xngdZxnhYPpXmBev",
  "key16": "4rV9yMN6GDenvPWprRwauPdHBcXmZcKErGQCQPD5YUsdxcDRpWeyE3k8MGtEvAZ2FtxhDTQ178VpucbxcM81MsdL",
  "key17": "3ybjvabCfMhcjwU15EnQozeZAE9WdKpzQjGdKgQ54AEqqEuzajcRc5Csd5JYWxrSA68f5nbTRBn2XvXKNawFtGBt",
  "key18": "5UFtbgfyk2C3waWMwSjRVBzYCPc7aiRSjxnVAPBNnDwzWjBxSz3VSoJa5HiWLoquwvCMbPuYDsgMBQfGvRER7Tkc",
  "key19": "U7852R7nEjqa9bbpQw59NLUFF8x2fRXohfKDw4v4LAAySnARsAua54pmQiKckyfsoZe3tbPQ4EnzKBQUkeVqhP7",
  "key20": "rAaRUCJeN7pzwaW3oz6Y1YZYBtSQkDqZQbgR1KnRSyVkPUarvKsNTmBAQfr2LkBdutpya9gvsHJkqLXFYMScVFo",
  "key21": "3nWAArfpAwPTfJuemvRiX7FfsBECZhSyb3Lk2bCuQ1NLYY5hMXNMCyUJRGWt8tr7KeTRjD9brKh131WVaXd4gA9B",
  "key22": "3BPy2Ti7ox7daZPoD148mopuWvAHik61dbEH43YXPyDPVXYmTDPVw6PDEyPZxaAX1ZrmP1cesjNbnQmGEDWwqwT4",
  "key23": "3pkBciio4RdPv4XebevgrVxsSoTs1tLnQyoV6PrWfEjf9UYmTcuHpoHX32b7EGhU88vhjjqNjEAXwiAaEpEazWtf",
  "key24": "5fuqyVCdwGyZ96NqSRADwYXdYLanN84mwMnxh9RgDV5iPNdWhzBBt3NkFMwayEj4boe4Pf48pyZwHUeZToU8maGS",
  "key25": "4maMBNP3ajw7HgLC2k7rgUFzjeWniWceCA9WwVFzc3BLrNPTTex324JDvHPkHpjfUpnAgib3pXJsEPpFJhtzPprL",
  "key26": "4Ucpwhj2CLabgUfFPXe4cw3XPEXDiTWxFLP7wUGBJpgZzLcwTDbc7gdHjbMbRTm22DM4ucuxJmRmf8tex4ReasWS",
  "key27": "5dr7TEEDAVoJ8pdADanNHe5uHUC9TiBqSwAcjMVG8myAPwgJVbL6TfFwtW7PXHYovr7D1RB2WQjE39caBCet9Egm",
  "key28": "2Cch3AbNgsGnw23sTPr2qFF5xG9oLJBAJW1qZjCFuKBef4SuVKY6TwVquAkgJeKb5HoFGi5qMFY7EgVJJ9FWmwsv",
  "key29": "4SNPcegNEsTSz5Jn82u4WhWtcx9NzkrnxBYDKSxTjtdn7FHiM5Z8NsA5jektErJidkuZqZT1Tpa3Sc29JShw4Kt8",
  "key30": "2Mj42UuzxC8K6Fy8zCpkR3tuFrwQwJaaS4dzFQuoBLDidZpdttpdTqtRojPrR1Z8hrfdDagxDhYsiszMGJzinRQu",
  "key31": "3uXWgdQyEfJew7HL5emviTGcKNDhG3GU8bf4gFR62MtECLnjy57U3PGR6L3Tq5HJvrZg1jTg4rh42PJUT7gnuFwE",
  "key32": "5tVPeYD9W7kcdQ6Uviqv893Mjf7MeYLXYt5koF9jP2tSfVBZMVrWVvcPN8KdavnkSA3sB5ggdKPKc2vEhJMpBH8S",
  "key33": "2NKKxmK2Jk1gn46KB6beVtNfYQum9Co5Fr8x1HP5iq1wh4qPZFJK1uCF6z2BobNWPunmWJPTMp17QZC4To1D9EBE",
  "key34": "3gw9GgC5tV5vYL7vErKm3PVCegXYMXSZAnBQFf6MroYFj9hLEeLQwF9gCJshHYUAn37iQzGBvZBWpkMbPhwSSpEp",
  "key35": "5awUg6va4WpdpkiMWpBE3ogHRjUxep3VkyfuRB9Zzwhy5RucL8Dm7zKrTJvKSKXbkbk58ayyir7EDavDUd5RCYDK",
  "key36": "5YbvQKyKrLpa6P7Jr9p2vXasCVLzgU2h9jcj2zt9HNRB89czZA11u7QxoamL4LcWd8zQdbtnMugtgUFjcqExRjei",
  "key37": "3jpoU8RGLtt9sdMTvMqS1fdsx7DH8EMF8H9YNKDdXq6ZKgEsbsUr1J4AChjXKQboSr613ckc5HQ42iV5BFSkKJvA",
  "key38": "M8HkJ9gyQn4dmEjTZjZDsx4UXBqE5Pt9Zc9VuTtBb61zcddgbbWHuABVkRs2UWcncPM7x2dZtcWxXvjgsWrooQH",
  "key39": "26c4WJug7zvyAUS1J7XRBtWnqCJsVctFyGZVgQh5Fmdp1bWNyq7gwCkE9k6o6gURZiYkCP6N6Tvogd7ZarTZ9DQy"
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
