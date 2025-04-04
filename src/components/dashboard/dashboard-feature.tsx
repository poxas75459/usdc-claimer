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
    "4xASfZpYHt2c5XDiQm7pUtTwmbdWuR8twwhDwktfHFSb65iZyUWnnbcYwamgrUEAw3QseUAhEmABv2ksCTAfY3Qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VdFf2FnCkXVdyX1fkzwKmfad8a47MPHjdMb7ao1isfsKWiunp2R6SpDxomqwTzJntW1hmyUgeNckW2cxonA2NDa",
  "key1": "5hQf7bP5fnXzGXDXr4R2LHRLrCjUXJ2uuyiCboRfziNcbwf8k6g33zH4vsxtGRBxMWZWKwDdDRMdmXEoGQyXvB4W",
  "key2": "3yhWruoZTmMbF5NCPDznGh7RJEiUqbbfT6ELbPogrbY3e58aYWTU3D5yiyhpS1EUjeTrjGkggiYbD1fPWfDxFYqx",
  "key3": "2niPLnXHPN6DpRx7XnFWUmcoESMAXU1BFpm4JeG8xGZ7XhPXcewyz2AWw4MSRCSPJnzMota8MocdZxyEHpBqtTW4",
  "key4": "4eYqL4it2tP8DNAFBwKX8e2TcqVwkw5GJWqMiQPbEGJeJjjUwYFqC9Bwav5w1Jh2QUYREVC1kgnsmtsFTx9tAVAW",
  "key5": "2L3VCPGAVRG3A7Jj2GHwGfivAQ5KWsUntE5xEk8eRRoZFYDyX2QdNKfKXKPbDmYya6BmZovtQYzS8cqosUKxqvYV",
  "key6": "3n7yt7oBtH3weYZ81VJrwRSz3dLg3trDJzYzWsbzhB4oWaFBNC6bHmuV1qWoLA2zvGSAPrVwYo2W8bhaSBDim8ve",
  "key7": "3k2vhXhQGTuKBKHcsGYSyFA5RW9BWSP8VfSbcc4xhWndQcLaBh124aVUSXkQZN5q9coX5s5qFu9DaisKgcwbu37V",
  "key8": "5o72UKJAhGue5SqVKDHJJqPVNgYZzManpT6xqZu9P6Gjp6kisz3T8kULuMBeXWmWaswBxAtgXn1t3hnUgn5qGChU",
  "key9": "41gRWLQ6UseUxogfxqRLbSeETFG1BurBHa4pygQ5iT1v9EpV4kjGxptE3QxFBy9QSifa5gY2JQBha2HtMLZtEHbP",
  "key10": "4VskQN3skHcMzHFnwr2dgdGkKpeYrB5zsJMJGY9eXzLRMXYjwUytv6rsjjSqNdCex6DVHttQJzRvMNq7PjhCL13G",
  "key11": "3TM7Y4cNPaGSVC3vqeVbfWLgYGuM5fhbWHr8qZNEoPA92zmqgf86v9tZUCS6vimDUGzWW5xVZGVE89fvz9xmJb7F",
  "key12": "2BftctYKqMENwgrss6Q5FTdNNzFkY5zsavSvR2Z6zxNLNd4AYe28T4fGEJaFMW6kLig4jc7yvFp9f6ergZrZQWAX",
  "key13": "5Xpdz7717Y4oDUEFku5N8nWCUrgxkRoZ4wxMXGUuMNupNfLZexLinXz6t2WTpdqC3GG3bQKLYqGWPwF19aNvwp7i",
  "key14": "5nxJMtiML2gDFjkxhjUMwcW6fsa1NKpK2YbJn9mWxujRPUKjajybb9HGe2BNSSABhrc2fpwi2Y2xfxe4uPug8Q5o",
  "key15": "5nxR1Mzxrrnb5LVKJ7321jbDZ9F1587ThLCAG6oW8B144Q7FS7NTekMSrR73Z8DS4oyt81jHG2Uu3AhMgcPKs56E",
  "key16": "5KrZXePLei7XvzmVam61m8SJxq2acea8eBtzBhjkS57xYWYe5SctbB7N2S2FUsQtk1LZcsbDGLj213EE9xtZez88",
  "key17": "2vCr1m6guJMT2SrLsXpSC7TpiC5BjTbXqeLsMFDFc5P4k7pCRGnX8Dhh2GuLEh8uoejHR8axWx8pGU1LRFioxBG3",
  "key18": "eb1dAEkEqy7BFAqHzmuAr4DPoWKEbcQD3BgUQXWZsrZ9e1gZdaHxMpSsmENE8w2tyfAnN6dRRufPc5ph5g4bxvp",
  "key19": "28E3oiLdg3HZGq3EjSVvkXf7bngbMyevQucvRLZpGHqhQLmajGBGtLGD9CYh7tqQ7L3cDgHHAa87vbKkNuvXZRYW",
  "key20": "4q1MRtMsKr6pUJpUo1P2FiVpPXhLwiHeqNEYhsxycBsyo8Jb4QGqehM9HZRSboqeWtNHrK6TjkRgeoKAXWCWP99",
  "key21": "4dddcMNemYZNPZCf6K5VmKrAN8nKuZ1zg3fwnPSNGpmP6fgVLNP3BDuzAKCFbsJKT2XY8JRsp95woaHeN2yLZrUV",
  "key22": "52LsKfhQtVydstHEzEmDH3kxh436oKWGdn9AtnMjuKFk8c1YZrRPh6zACyEJ36oJdiAxu35vBhfmxYsbUdzsn4eR",
  "key23": "5emixVcn6VTR4eX48Gu9SiLQwDcHHfQ6oGJTY6ejTm5UZYqGMN3WfBvjb1aqtxqyiBQ8k8w3ZuD7gCDdZmvvkbri",
  "key24": "27fbYrMbRJtLntCki9Wt7bCzqU9Ud2uBqex8cAEptfg14he1QEeAvjfCkh4XBeemK3YX3UPrEqDSm8eVeyJXuTYY",
  "key25": "5GwJPUfyEmX9dzFQ3GEtsuML8s3EGwUtu4dJCXmmgJz3mfJwXaYT37ctEmAw5xfq3KvZW8WDRJ1gp4ZhzSffERcc",
  "key26": "2dYSkRVKpPhXe6SLmAK1TdsTrzTxseqmhJT32FATjfxTDqm6nn16qNMkuqf4rmFF23wq8FWfcMnbTHgvXGGp3rn9",
  "key27": "5su6vQdoUttF87w3d3b7rUciHYRSWgA4Lss1WpQGBFLHN8kKFvAbKkcQT19xMqRZrrKFDCM2KoCJRLmXVsQ8G79g",
  "key28": "43VPcYPvp7Z5qGFDsp7QHkojskowNWe2eYGVNpVsXyMGP7XkiAZpbAVjhAQKELFz3gfbyVHtgi2cbGSpDmNo3U7s",
  "key29": "4dfBa5qTqchdjCWGa4uNAwEabkPYDT8RCbSNzbnmPuRBMmCanDYej1fHbTT7K1xzEsjncWKpSVvBBRbCCWk7mVrZ",
  "key30": "4oHkJXqB6yrdhNogpEk3MrWSC25FzmpAvdNjxVGNKoT8GMk9N7LNQv23BoaimrVvah8TXz8Z84pv15DqZcxt9yBr",
  "key31": "9Gmw2HMqrrLg8ZVUngpJ9uxtNe28iChriSGk2A1EQXJFYxv5M6z2QNSRpL5WqSeeCqbkJaXpGKMnQrxQYk435Pf",
  "key32": "4DFPjHqtcSc6H9Apbp7wCbr4GBBDjuN2roeKNWXpKDPGaWG3e6WmEkCqNdgfZeBrXftPaLyTM7LchVsDpTGJnszx",
  "key33": "4rKtwRZC7HB7bVjhvr9fTVyREyVoY7k1akR2PwpGJo1ri2ovPmHfqMtwMA1EK6hGFkwY1nMkoNtPapx3PVeuATbQ",
  "key34": "g1TeMWPQH5Jkbx1Bkwx2wTwt6AJ5Ef716ygUN6k37YhgeAB5dT4apX83Kt33duiAwz4jjMxe7zSvmA8f66ovgRc",
  "key35": "2yyGeFFqiq1Rjv8Pic2ntQS8S2Ln7WuihedtamF3s8JZcUAfopXJct581Yo8r155EPFBWWo57wm9sHtXyvuXNDsw",
  "key36": "2WsDjQt4gBViym6hDVzbwJ4wPRTc4fLgsbZSKKDed9J82b1pQJbEk2AyBVfEfHge3gT2BrzWLSgAS9UuPqjLGjHs",
  "key37": "44kshgpptojqMU8gZkBB2gQ91KaWFjR5LgJWozf6DDytYBVSsKHs533qdpXgr78TQTronM8cwCWQcC5xp2PjNvZA",
  "key38": "SuE2eMBCMvxTiG185hPu9cokpFHC47GAYsb9d1iMPT62WQ91yP6Ehn9kwc51wgzRg7MeWdDjmWRdyEvyHPvRyAk",
  "key39": "5hYc4tg6snajS3unwoVKu6YoRP1XcPDJzddHhTkJPAiHycVGP4EjQSqXwCVhaekd7gW9mE41pSft8ntVpT8aF1BH",
  "key40": "5nBZzCrvYVikBxjieUyChg7hfJqEJazNBKwHU7mToaQDUyKRj6wmLvpA24mQdnhNtp8kNjnWcew8nynn4p1qR8y5",
  "key41": "5UHPjg69uBhhky7RV9toYXhiHieiYNYDBPCCGTtXrc88ssrDXvQGTJfYW3mGNMxR2ysQfj5GaK5UwsoUmQY8vSW",
  "key42": "5KV5dbmN67f1sE3QenveHKSr6H9kKYVjDB8UVUHRWrtXjA8pQQt2tD1LC4TTNnoUG8TWSyUagUEfCmw36VwpoKjn",
  "key43": "VqKwGUBLzs4miAyjQ88hJi2DhKFafzTbEinHdyykHMwoY49MS6eyCEnsRg256w5bpAdMywBtMajJo5y3YNhFrGD",
  "key44": "5TvPZoNEZtNJN7DWLznVY84mcvZG32XB4kF3eAk7kiPDiYK7Kf7QfCRKj3MrjDSX8yMvfT23LVwmpb4FvGnh97ch",
  "key45": "4eCxoZkgRvYCNkiQpzzTcybq6VwMzoXnwZj1VPANc3ADjdRkZmFAWjxxxgnfqGQNRK81QTyMB9VDojR341Ppunbi",
  "key46": "2Fr4TPpPrQ7hSMxb86Yb3rqK8beVMMHLRJpwkwsQkUj8Bbj8PmuXSt2L4x5EU9hojJiKGuDY6qHsCmrqfWJsMzVG",
  "key47": "4qx3PaZYYq1FaazSCZXiiS6Qamq9K3bcpU8wFLW3WsLuEZRqWfJuHXib2XCxruVm7zCVhaXAo6GxNaRAnkuVp2ue",
  "key48": "5P9V71eKYat2XuyAHtsiNkSMktmAT6CdhuzP8aU8yhshz8SfBe7tShTM8t1AjBmninHHLpF5Vxp4jnUcd5jHKAFN",
  "key49": "5GhQKm322syH3Se5GaCQ11qb96ZXK5AmE1YGUxoHLvTcBhY77KNoZ1BdyF4JG93exQvZYRMvfsqHgn1ocmbEUF2d"
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
