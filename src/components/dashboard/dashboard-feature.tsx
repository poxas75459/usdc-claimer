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
    "5Kp9DveC7sSMxD3S7kCeE9cCxV7J9vMhSpTU9oFE14VoJh4PUWEndjhEAB7bNQenJZqub2KbSzmLWLb4qW86wTFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T1B9VTSWoSMrij2gevrRPWPjFCdvECzFAUkos9Jb9LQKS3ne94LJf2uuQB1M6cC7oGbytndK5KCr7VUu6v6pyHr",
  "key1": "2u6RxiqnCZSQafhgipR14sXMro9QyKnsdSHMx2Y5ZevTAk1rFcuaZJCs93UymtnhuJMsmdfkZYP3ZfsME3Qg4J6a",
  "key2": "Em9Lup1jAJhSKfTPa68d44PRdNmizz17FPdfSd3woKojHEcK5ZTSRBkM5aETbkuFNyBNuM3m3B87eT7Qiek438Q",
  "key3": "5FVbpbZQx2uTDgZqDxCDtn38hmz18NUMM1DqQyzgCTySYzQW4523QF2hhKScxgWhaACqhdcpxkjRSM96FcQEKrT4",
  "key4": "G4HbwotZUU4rmitr3Usxi6UcQsokJe5vvdtWNdfNxpZnuxqtka3K8sRKKaMrrbDNphFCvGeuVFcrJggPqxy65V6",
  "key5": "63J81AeeERM9jFBWVJAtSraU11L2uVY4ayzBHL6CfFZNKbyGgLte69kcaY9ddzFcTV3mYGFZjb7E5is2MgeJFpCo",
  "key6": "2edShMbEeTRVmNeMSAzcryNTNq5SZXS9XBY59Cks2JBaEcmQBTya5ZX6HHeTV2FHihDueTQoRkmDocy15h8tEs7p",
  "key7": "6589ne1Lob31jbaCaGfyasA3fjJcVNMAQo4k8WnT5x1q91BuJQKgsqaWwVJZm8cR8TQXpwBxYY17bEAYTeed4gv5",
  "key8": "4tejC3jT9apJ2PFr3Gv21UYcqCG54Gk1LeYLjxGPAAFri5r7bqq4PeiwttZnFzEmuVsYdUg8nnAuwukQzs4qRwVq",
  "key9": "3sKrcHm8EG9CMsqHhPPpcNFuBjp6L73uK3SP8KV2tqHkgpiDqtRfbrMfowwMUypwfv8Ze8i13aaLP1n2CTFa6Je2",
  "key10": "3HkVGMaYvxRxvGngJsH26r6tdEexgn4EQg368Bz8dUKhfqMPtCuC3An1HMrchUinW8ah4Gt1wDBuibr8VigaHJDt",
  "key11": "2VPoJQvRR8cWGBtqTFbDh7Jy4FQmBKuJBJMYnpk6cczKfSHF9CGExeN9pUfjNogR4tLFKGhQGxZJibsNWn4d1f4r",
  "key12": "4WHT36y5UGP4TFRE9wYHY3QZkhxggF6i64PXFfgQH3viVVGeegyK6y4M3gE3tBUqa8Vi1ThaiKEsXVEgPkoeaHUL",
  "key13": "FEzGxqBqHLT5S2YosKpuSkXB6pK8fv5WzaxxG8aBH88FovPQXrZL973dACuUoPnF4J1L5deBc7rnPx6eZnjpfUQ",
  "key14": "2tdjAqfcLfihDVGBm7DMzwbyFC9Ee4SiSTaDXe5Kf7Yqq5ApMbpAGy5aKeKbpL8zFELHVtcNzLTqtQrDaqPWYsRy",
  "key15": "4NNAE9ouiXXYPt34b6JQB616iMyHRp6K7Gux9SgqkUV6MFuFyyND5ncZRYQFex6TkJ8LeAypK61yxuWArwLbMcwG",
  "key16": "5dEzD3ZntM4sp7fVPWuVfKDrqcbtca1T14z9KCDWZMYSxrybn6afp1pH1TswyLUSeWPwM9wMYwCccvYsXBdPiVYh",
  "key17": "5Z7ozayNici1ELfG9bWJbS5stzxsHEmSudiruouHvxCtyi3mfpV3QQpaMpo4vB9vW5Gbbm5rNus4Nw1g1e3TQQKd",
  "key18": "3YPSRbebKFsnGpLMPkDuZAYDcebfBKzRpZzqJaiUFNSqmWxiSKJm7qUhgqx9u4LghR2hazTbHBizhrSWDtB4PvyZ",
  "key19": "yi62Ri3SLm2uCPBw4EgtAz3qdoyMgfh2z2ZNyeoc1oS34XJRZDxx3B6KjgfBUsn3TVeSwfncyRXRmcxJYV8B9ur",
  "key20": "2DmweGGmSMVwKiUHM3xgqHMT4ArMkg5GCqV4KNKHQw9Fg7pzX44oQ7KxddRaFu6JfECEUxj9iG5Z3Po7Hh3fKRQa",
  "key21": "24ADCbTbSjeDYodtx64qc2cWTAdBc9aWzBD4Tio5q5rpddj7ZzhATozkyARpZYbzpGEgJNdTTVNSJdpB8dRJ8Q2v",
  "key22": "37jUWg66AGSDkrvKSAJrihVtfs1tBfEsfdwsYAX4W3eiYw7B9ThmSVAWy3thy5wbFZRuQKYzLnf4CgU4aX8GVhZp",
  "key23": "3LRXzP8eQL1WFunQxgA2Rxrc9EskErbNTewJo8mzGECxxhRmfekbSTyaTo4drpZHtrVpL1qtUJk2PynJZzfMd3kx",
  "key24": "4KNAeaGrDpwLrf6tFdgNLtDcwmYp45cJ9DWdXTPdqx39BCRZJTQLKcSfvbDKk1Ui9DzoDUmdc2MB4xjVw7wuNisf",
  "key25": "4rTCBU7xL34ftEAUPMKC277uSxqgtkLMJQ1fc1rePD1h6ivehgsdtHPQ1uyx6N8yw2YWMW66PKdDP4yNNrbv5kKT",
  "key26": "5aSkm7W2u249YzbQveuxZqCkhVJXUjiBxpvF2JAD6CVaPWgY1guBm6EL6brKvtyGQ1jHL9GznVTMjrvNui6o8Lco",
  "key27": "35TvudVDEhHQ2bqwooKqR7A5rsZzicdwnW9zxeqM1zSHZsuTKgZdw25sj5sMEAtH8cD5HbE4LSGtfhh4Z7B1qeVf",
  "key28": "52WQHEZv9HsWAqn34Rqp7ydoBqeFu8UEwiTxbRsWRAxTX5JTnqva6bs9pDHtpHxWYRaGb11e7VgBNqRwUCubx2U5",
  "key29": "65K18s1ir2yAyhTiaVqVPVyk8wyTijTeyoSVkt5hDmRgJjqVdFoV1vFeqLjbwmWcvn1cwExfZSYpMrAr2itHCTuY",
  "key30": "2dCgshzLeFmK8415kHd8bcGR3tgsZNyqo9n9HETLMkjHDqj7QXH1MiPsHUj3XA7sQrpksr4Scwci7EMAej6qKVWZ",
  "key31": "2LNNe2i9mfWXPia43HkUDCvyUYUaY3w4EtQsxsJoS4xwcxMDvc5enh8enPbopR2vvf8FK2SZXsbakg811UMZ1HJi",
  "key32": "NpCU4Wtx62yWV3YRtWWSdpA531S8Mes5dbo12nJrjLB9iDnFVHyjDcnavXCLkErGaAnUV2KhTEHSZvTkCEFimwx",
  "key33": "uYuaXow4RyAAMVG17cUYSBQoAWMgZiR9Nhf7aThSXpEtwcLkaf3cjYDZkgoEjWeXcWGWETF9Z2RTHjDFpgATbZ7",
  "key34": "3CoA4uK4p5a638wRrkdD5ZRso7htSx9QM7pwceqPorB4GuExEFpadBbf29zzjUMBBQ3XEJAhfBq9cJgU4eUv476N",
  "key35": "2S9xsswZx8BdHe8cMme2HAi7LX2N7FMY5pmWv8QgGZ1wjtX1wJSzvg8aZ4z4DC6kAwPUGmXT25FcyQVgM1J2Bo94",
  "key36": "351aULQxYNKQVH8mP3ZWEEhFr9vV2ifoXbeFW9VoQ7QykBfcavPmpELDsgZMhJhfnDLjSSfSoH2zAwXd7fuYi1Pg",
  "key37": "2BMudH7CJSBfx4CT3Y1crG3HkDsoRnzUvWYVa5Cgcdjjk1JsPif9PPbd4vLj5iUoJ9Rk9AKXuMvEgeukN75uNKrM"
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
