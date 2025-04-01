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
    "3iJD2F3G4yyJhwMgdwnMtmCW4tzhY2cFR125JjDSSueuxdrdizp4z3N8UjBDrKJXw1ifC72iU4W7n7e8TRhEL9G5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r5U9ShhzcEE5EejDTsir5jo3zPr7G2QbesuygAQTHzNBarQmrVGztWX2AKLuBZqLMpNaT9xNTpbx5V6gh755MKy",
  "key1": "8iSEvtUS7CwEjBn3PotmgSoWKfNEnYW5nacQU4Yh9DpMgyYRgAfNKHJpny9fd8Sdw5n83JL1ekpedfJhLJX3mzj",
  "key2": "34VK82FVwxy5w6V5kQrdT4L5KLFZ4GwbymjsfvaWW9nvqabHMk6cfzG4j8t92RJh9KrPche7rDdtEqFBJ8xz5ruJ",
  "key3": "56SB3wwEm1XswgfVAgeam9ke3vt9Kn1ZmSezEsV8bRQDeHnAAcNd1DuJsq7qAS1ecNMGdAw9X5i6Y8aFDy8oPtvx",
  "key4": "4Ys6TUxUYZLbew448sdw18RVJsriyVGmv6ZeQWJo6PrQjQbMyw6yRiCU3gYV5q6QZdeUhLKyc3S6HLMGvwXcyuE",
  "key5": "4HrzzdNBuhS5Chg2tYDY9eE7aaWFbfgVteRK4WW4LPkXub5VQur7RpJJvffaA3ZvNGtEyK238t8YdwzPjQ1xcVA4",
  "key6": "2fVQM4DnTqLHxy75r2hFXtjjs3ZA1uN8g3bhs9PqK39mpncMs8BrBLEA1BBwnFXDvvp8GKAVd2Z1Lv7pZwDD8BWa",
  "key7": "2apeaqj4TZhZxaAUfdadqvbftgJXTiYQ5TsD9DxjvXrBgs3ddvX7SaGqUdXCMuscnyhp3G1of8EyiknWGxNbFxdN",
  "key8": "3vwoabEhvCwTyLgEhK97w2brb64bo6ZHRgPXY578cs2TCpZzMMJqQ2S42PRuhkqmjErgbGJRX5eVVqrsGw3JR6Vb",
  "key9": "4CiwPuTjhtHzbhJYT9M61FxFyDJDkt1FYbXAqhYRpb88N3iRm8aGDLDLYYsgdiytWNZArFbB47nocwdFgSWY7MWm",
  "key10": "HvtGZnEUZkjqJMLNbopPBKGMXHtgpCJfRhQAMHzg81BvnHGbDPpNQSuWdN5RNMxA3z15fhu167QxWQMXL3vdSfn",
  "key11": "63wzLnRBpfuRmnDJrmYSdWWhweDYXAEY3tByZ1o9KW5WQyakTVTmRQpDVdpbicHthhWUNNqHKAHYGPXMCYvKDsFf",
  "key12": "3Ti5bAMmyzxGknhojuWjaGNdUCJVyFCAXAqwyPELDNZYDvc4arqX8Jaa7EyAeAGvQ8dn67uwmwK749bTPqfYMWTr",
  "key13": "2YaqS4K3xKWpvsdgJExTqKFw8Qvq6zGn2gGbTC9HLpHj2rujZY2wETXPFpBeYHLKmtnngvTywctp2srYv9QqgpHG",
  "key14": "37NeXsH8DECB5e9iCFucEa1WWPV5Ndz6JEDcfR2uTCTXNbx4X4Wx1zRjLd4SiK7eGJwiLLW2DuZnsbo9jkGi5Sh6",
  "key15": "3vvt9kXA3Gqq1aNbPaHNatLkzWtHQwJzeRccWfBPgUcLMuJ23R76CbzbHw2wkeNQWc1okhBbzrQkJ7SAk6rLxQDx",
  "key16": "da4RTfFFmafa68msbjzVCh1m9hfqXc1mn2e83Tj3C9kTgevBtn88evdGEHpBBQX8TVsNAvRZyWZVV51PFia5P79",
  "key17": "58iZttwzPCHR4kmMhZyiQ8jfNmawbJjYHwrSrPLUQKGHLJCusoE9vr6JXif1MpcQ3Q3hSoVJK1GLPoaxrs9oSyXU",
  "key18": "4CmsH4TCXPvbCAVX23VrfqTZr1PiQ8Lf79V1XtzVatLRCViryQmZmJZXHyNRemG8ZRDsNPGehtEjjeB7NKXKVNrF",
  "key19": "3gXZJApXiefh8LE4QhME7UxDq3bc1Y8zeLMBbj1ZXk11JS4eLbbjSYKUjvDn6nYVXtX2vEjuYumpig229YACA8rn",
  "key20": "4iFBhQB5xjrvzZhTbL148XXNaMDAvwXhSmUvdH15WKYVwiJidhwhzxaCwrF54PZJj5TZ5vE4PirvF3BuWra2qKnT",
  "key21": "5hBWXZTWFKUcNYHvch7ttP8siTB8ukXycbBVZubVMwQosy6PD6x8ZC3JomAduQrT4rSuu3KHkWDFzUCstq8gpTpG",
  "key22": "4LdH2hB8cYUpdKk4KMTCYTXnw6bMFcHivvKYRT3XLmHaG9cNDkL7x9ydjCTsXkukQxa64s9EKbRMCb4Eq4LGFjau",
  "key23": "2JiMLKzWkdK6AjET7gPXzyCMuoH72DrNBgzYy6gmeAWiXyCFqHMijS8LTkvVaiDATW4NcfocwBKPXVSZAZ1xmvaz",
  "key24": "5LFt8j5tiWCghj1HtdtGyQJ7jqPR7WAJ6n9rjvBkpyuHwdrCoR589nAFavra3sZgeZTDR9bMspDhWC2qZ5xKQueV",
  "key25": "3iDSWEFuszJPTgdzxfwNQpLQREGuAg3iEYMeaG4JKWdNd6i3m61TpcKYHKQXpYugsgnRP1uVXYTQfe6wo1xxXujn",
  "key26": "3xBxgxm2CJJKN6zihQTL7pwTC9hho1o2vbR9ntbAB63VHbfWVdWvCiHvMybGsfXRFvwfQFFfeKk1HCd322GibGnW",
  "key27": "5RJy4qGFGLRb6ADE4LpCKEL1bXQgdoHAq2QoFNL6bK7BrhUJdQciZCaZB1aW4BF5wiKyd5qqWJb69bzFrSrTpMcb",
  "key28": "312sQotoqPFdQhYuKrvWjat3LaDSj1GpGSjtkMVdE7Fuk1oTAuUuvwagZiFMqnzCDcHD2vv3P1aer2dEJeTQb7pz",
  "key29": "5paNih5cEwMDvypDUjtooaBgcXWagCWfPPZTaGRDn74UtFs7vy2PdcTjN1YXQ6SsvGeRBmNK23Ypsj8LccNGKPFd",
  "key30": "55KL5d1n3UFzhyJaJKEiRSP6wgVb7DJM3gjDvwiyUBuY8WwuGZYNRejttdy7r5PjJeUosSPJcZtsBBCoqvms8PzH",
  "key31": "5xWLcuBxU7XyAKo12HPZYmGShk4YWpX8VNnZXa2V4aJhqFN884kytzCsk2MweM8tXyacBzwSXinXh6dkZCenpofP",
  "key32": "3iagMrpJYs8hnngGA9hfgyN4Mjr1WRUNEjJHWyEJpKcSD6ppVREd7cG8S8KbztXqbzu6Sqr85dTbyPLPtXF8fZZh",
  "key33": "3ok7WpLy6WctSqH8hGdVHDhDkXDEVciyRed38adm2qWWsRyZ5p6eEZD49J51ohxhTvQKYHm2wbXoWzHiTMxzeFPW",
  "key34": "3uvFuRyYZqCYJ15Wpt8qJZdofwZjFfaTaVRraWZAXiedPy9qJCxVswq7L86ayGk1ayq7ggvoLvzCxJTuoBLsS3PB",
  "key35": "5B8r7JK87KbrQmv9wza7z8eB4ZzDFC77Me9qy54oZNzEaMXAM12WmqQVqsxZ2XdU2LrKaMwtCocuRSX5kfqR6U2i",
  "key36": "5RyGuNbKmfoQakJ59bf2kTg2XQDnyiAmnRACrRy3qDWJaefE4qbMi449QbwRkrtK3fR8pgNW3ZyNUVUopV5cYXP5",
  "key37": "5ubpBNyZTUjeHvouicypBntTnVCvsWGrM4rcxKasdYQtFxJN1QHzspe9Bq8JQwjj9VVqHSKq6qb6PHuQGzJA234Z",
  "key38": "4uD8uZvpc1u3z7yWHb7xaSCCgPD3EVcaHd63i1dBFSAXj5nkEB7wWcuNYr3t7TaDuYdK7LfD9hX6XUzuVor6DzMU",
  "key39": "GPf1r2ZutVgQJWNck9g5zhJBVxqagdeaSYkQ1NhZ5WQT8STpHdVCFURKSFUcr9QHWxNgrg6Z48wbRNJzG4PKdF2",
  "key40": "656WiQzvk957VERSro2pYYUApqG8paQP99WJtrX8AZeHRQMyJ9u5EVk6LqFE3x1ygcPiJMgUEMHqSqjzYCAaYhTj",
  "key41": "319timP41LdELto8HRXA3G7FpeMxq3SskScuWCeVMHKYcpmopHE4YSDzxzGgepArXGMkvNy79HXjMNNLaVoZ6yUH",
  "key42": "2aH8KrdjYA5BjDrGbpD3jisAEfy1QxbtZzEKJVGdqLmHAmsKxwMWcCfHXkBraaaGgLfeLaABeKpC17wBGDK4DpJd",
  "key43": "5eyYH5V93ib7x4jhL6oyUE8VL5YcSFxy3KuWjZb2d8MAmcLd8KWdZ6nL5yAfakAy9aiFJMa3dVMoKqT8mVRUoxXY",
  "key44": "34svCbrerVsuf4iYe4nLVuUgUzj7kCuwp4a8LVAMnL5ZFfeZvdNPmeAndsFRsgPWWzdB4aEagbp2Abang2xBVRNA",
  "key45": "2kRzHsc7QDdPv8Gh4FGHVMfy6c7tWgzTk9SCxKAsAqi8duuC7LneDQGCDUCcmPkyBqA8wRuiXRexDyYmZLu3692q",
  "key46": "h2wZTNVE2aKgUnr7jfY7BTfxjLsiCYmidw7jZPqSRWSFJhZcqnDbKcovGP6tiBCfCUH38fnmxEEQGid4eKkzYQe",
  "key47": "5fPn4LHbf36zZcBevHU6LECPTkQrKa4xTnLvKXvvWBnMpHHBRqQgbreNjGNMXybL7ryXrpihBHF4UQKNKRcDirdG"
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
