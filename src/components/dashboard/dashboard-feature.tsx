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
    "3zcJcaDmsqMkPS67ffq8RX4zG4k89XoJsAr4H17eecyKRCXx6fCkdtAwUAPnWxmy9aP6ken6YRzyutqn7PVyeXTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kXvGho7xfGiVx13scvMBZnwFQwbmiK6CLmotZ8ZFNDepnWXYA8n8kDxZVKKVyWe9d5DVUw7E2Pjb6ae9SfMhCe1",
  "key1": "bnkqTKK4Zkf77MKguwu26LhQZgsxieEpWaoEfCkxY3J82c5QXQA7CcmCL245fsY8z6wberbAXM7fGeuUMgxyr2D",
  "key2": "5RnUSknWTYJdzBaNQoEYJ7XBsERLt9TRVXQTvHvXVsJBdwYxUBsWHx5QffZpR3Z95Zvt4Z2dqrVavbmQSJfWceah",
  "key3": "5gjgezr2iXCfcfJ8KurDNCzStfT8ZRcRY59upBAXY2PXMygySeswUJdNyDnETWG1YLkFtTMeuJa3YYjQ7nduK1nY",
  "key4": "23Jtq3GKkxmmGosMCPaNLpozWxywsxKry3iacfCNaEoXvdFQmqWy4MtiZmMdcxKx7ic4HE8QdV6ARtEMxyq6wJmx",
  "key5": "4ipWpNezXWjfwdRnvpeReJ63F3mS7pZqKt6GCSGcLNvRRRRCWLw8M8qC7yPboHyBeQHQK7PXjkHxb4KPh2KgCC1t",
  "key6": "4tPDVXqW1nyvNrsnSAsMzWXU4AH5Xk9YQZVpo9gBxD4kUnBD86PEuj8sQoUVdRFJfmWfbfH2c6PBBbKgBgFb3zGT",
  "key7": "334Cfzv6wD8i52HXhWB46gprKe2ee4waByZoPCPRNvbGWEpe6ZEG6nFdikz15AgTZAn6hpwjAE8DPeJchBKPxE8d",
  "key8": "3SVaqn4Yt7YUMGJJtkAfKs1nR8TNw8n1cro6gTYVmawbvemUCiBkVTPnc3ZMXLVnSPucggbVEHjFruhKK4fC8uaM",
  "key9": "3n6nrvL7kgDqnuAupAw1TuiqAq56jrMVH8x6rBWGFSNw9To3WyGXPGTrziNY8ooMcvZPcUHkWADtkg3eyEHCMD5h",
  "key10": "3eGGmLzT47qFFwNXSmpJ3nz7hnv4FQdgayGbUbqB6fkaWKUqW1UXYJXBjmTpr1ZkAntaLoWw6DVtt33994boaNq8",
  "key11": "4LYepVGmNKokQbyNoNJd5ofiEfJTkYMiD7gjjJdpMtKWTCw4h7FHsBjo62pL8AdoGUhDh1JUZrpfNpcW6iLDxQEY",
  "key12": "3cozad43x3WEvU2gq3CBCNRY7MxBQweZw37pgwhLSh7EpkvR9bddvXzgmHqJ2LTg8N2XNgwKkJEexXWrpEa3VXtd",
  "key13": "65wD73YJhfswXGHGrAV6WiuQSFhoBJf1eXXjMBCRVHAPySbdzKVx5AvKdZ2g9e6LCbfKwpX2ey7LwY8ZADsRakpt",
  "key14": "5zeBvzwoC82pQbjZ4PLKxbpGkua8xrZx8ayG3ykJPDjYFFZqgN5SYdjkfmJUwRQkfPkFN8ZbYtJqztQ7TLn9YYRN",
  "key15": "2BNj5kPNwvLEvidrBzRVB3XK1fxUxGLjdBk8Vy5q97ETAEsQfMqfUX1ogYN34Q9pxeraY6xfhmEdXvBhKTGwYxSU",
  "key16": "2khvoxygaFQNFJuha2fnGkfhDqNvwx2KVhrGA6dE4cBFYzivtnPe3sySBXWL1MR1qeaaLuyvq5YQEXVZfQb55RFH",
  "key17": "36gSGwmteVCpGFrJQ8Uco6YDbe7KKBsYq6Vq8899cZtTGaPLeTowzpsL7ZqSe9LovUPMNd9xj4rgKiSDXNwB76F9",
  "key18": "2C6dEZd2UQNrvHMomQ5mLFwHQz6o6p9wAoXuALdtMiTiyt1nSDWBw7QAyoM9tB9UaxTKKTsCe6S3Pa4cd7ASFZiy",
  "key19": "wiR72jEep6r1zCnaLVA3Hq56JNEHjtQDB1a19KW11mDiEXzt2VykamCn3Kt1PhAC9RrYFymAr4pPtKz7AUJhyYe",
  "key20": "2umzQ9Z31q9zCUmG2DVKoWoCzgzHQQvLe9dwUv29r6ZGuWbHPCVxjHrHpmvsRnz57ynfDbLZyeQSdCZ4FiXkxReR",
  "key21": "5V7YR5fbBpox2EUV4GEzVfRXxQAyjmSm4QqkXWKGCZWmzqJrneBnCXKWGu3jLvbrSNHGQQCtSZM3d13Eo92Vpgj6",
  "key22": "4f1hFFt6cSYxyxi2ZvcEujcabHR166NDHNg48Mt1dXU8hKXMXSQZwh58htBwnnYdZqFFGpp7up69mkseJ5yHfVmK",
  "key23": "4KcFnh7gDbsZTXXB1ZHGCYGmLfEBUhjmJGsKsWhGikbYqJETzWKKLUy4gbJMPfKoaXJTgpkkWHe1dNeuY9d1k47G",
  "key24": "2DKYVvsdYf7yjZTiFQk7xdvj5Bc3VraxPpeSuMKmYL8vXSt2cwaeyjbrubg9NDWmgardM5dwuB8TisbfS4CXVhZM",
  "key25": "2KdE8XbvLj3WQqnjxnSiypBUtWFJshHQUNWQH8mx57kuG1LtdF5Z4fEtoTVUuocDpKkeccPr3Su2WcYwEsTw61yi",
  "key26": "4mQVs5y5P3EzCgdMpsfFKz2pnc8psTrKX2b4bKADx56iKgZU3YP3sipCbFTLfwRNXRkLT9Evw6h6LRGj6UC6jnuF",
  "key27": "256L9KRoXJ4CkCjNNguG2xpTmaKV6CHcXJf4fXLRPCV9tux6md76eDEzBybZQQZc76X8bbgRGihkiHAHQPP1jz9K",
  "key28": "3Gj3imBdtsEqwHVv1t293w2HiAEaXyPTk1XZwEyPqRWbHiage5UvSHhiqyRQ2ATvyTCYyDyHa6Wk3WyxXqzfNRU6",
  "key29": "4qBtjeMjzwUDPYps9ft56rMwNd6z88DTfmS3ax46RfaDR1scK3yvi8wAGEyjXBA23RcerGtn1K8ceHkdLkL6mAMd",
  "key30": "58noJ12CQRVy3kWwNLWukoJJULhFBrD5fem3p4a2bFy1QbjCnJkXaPZUouxAUNRQkvCbmHnuTw8i8ytyJnSWPjX7",
  "key31": "48HSFnuxU9KKX4jfuvhzaU3KZ1qg69xthVBft4puMHZWC1dWtcfq3PBq3Caog4fRUQEUiZagoAu2VrpRzBb9huGc",
  "key32": "2JWx8YRAF6rp7d9BFoX2BVzaVoBXC1N4er1cFdZh52iVCL624YVcqp6cvQHMwfdXsU2N42QAoWq9ubi8wbU3b9VB",
  "key33": "3GGGiARttbNbrJCV8AAiYozutSWGCMpyZ8K2d87tPrnRetQFFdfaTUy4ATfF96w2SnioVcTUrECqvJD14tNiiUb8",
  "key34": "3bCaHAfXSR4urbpokHFP6GEvZnWzbSe1eaw31daXwN8ixwncQsCQS5ZZhbndZA7pcdniHoC5C3hvmeGWpWr2zr46",
  "key35": "2E5Wc3xTbjVUbPb5JkbzamnqPSh7Xrd6CZYWqitxs9WQTooY8Ctw2CxKeJCVQHB79PPB4zpi3BeJ8KRssyQt4ivy",
  "key36": "3KDdh2Deu7CkAg9Nx8Mgb6CwM3VQof9oBZB7B5SjETJwhjS98tdbFGyFYWbC1poUbd14d6Y2fxsu9Tr89ycvy4Qm",
  "key37": "2WfeLv8MQtfsQaNCva32bdc1z5fZUD9Cs7r1pGusS97K2RrZwNE8zWv2qqdJSgJP6tfeUVZ3RFSrTxVpMzkbFdx",
  "key38": "5u9nzhUipEL5oGWULJAK62HD7TQcXp35upy6LGjS8uBw1PDiQv5n8htNA52qni86mtHQgU4HokgK7iro4ZHnRWvT",
  "key39": "28yWk2bAvKoPAtzLJo3zUXbrgsvTUaLaTRyRyx6vWCNyopkDay8qtGiYNmjmeZQEagL73xgfwoTrT1UrTM1pHr1g",
  "key40": "3524JsySupsE5jRsExrUjMhMg4jxuuXiqmQCziNaPxWqPdd2qgfSpPWC56QoM3uWx3grDWz4htnBETYfJNyi2LLB",
  "key41": "5KUuWC2fC2p6jaMBChKHyDBK8fWVhrXfSrKEC5WygA22mZRiZEndWVuUfsDVr5Y9LxqAtjkCFqzfZkbdFFDDaBr8",
  "key42": "i9U1YRd4mxK16uH6jfQ9qaYXT5QGcd8mx2hEn6zZJJwZYY7uEQuNVWUpMQy5mQapJaryQThukUR3JDMKzE8Kaiy",
  "key43": "kqzqdU89zNdRvnRaDKDqqPiBfWhDjNP9ZTcZMLrRUZAvXT8jPsRPsZv6vwAFAzZ29bAxeFNefnzkig6U9PAXQBG",
  "key44": "3WKisSrfLp1fXFH6XF4y7RRreNtoPkgatkbr1XK3M5Ao1uoVwR9SK8LyfEVHftvrowUGeA8nsh2UtBDAurPRDYVz",
  "key45": "2dMdnZ4FdxZcFoMEzZGFDt6SpYxTqrrFxFQwyATmbisyYUoEEmU84en2FitdxLAf7puoRMiEr7fTX7MChVqSsFFe",
  "key46": "4Kv7vxNAVrPdBGJhihNSVLkimvS6afodjazbbGe886FkiEyEhtanEMA1AEhTvDu3NqaWuS8zL7x8bSUQEr9FH3FY"
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
