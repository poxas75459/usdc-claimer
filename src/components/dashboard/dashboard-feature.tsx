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
    "21DuxVG9o5zXvcXDy3GxPfKYDcYoEQkFfXpf2FaxqPEScFMMu4rcWByFKu2qWDmm4JE8PtJLH5ryoYKrzQv12s8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x66NVgPPouprW79DY7g2tAfVk8d6os2u98qHe8i4J8ns2pLKFLGoERDS6E6Q5NE6EB7V3ysocrLkfYDvZUJfZcw",
  "key1": "3zVqjQWxtDunyFDCfjB2w1pWsPgb771nfaf5Byg72T7PSmivwKgzq9yW7wYvChVkeqHt46h8UdGvVTfoRpLH9uhy",
  "key2": "2hSffU2AampM56JRsCNpSt8h8TLbnkobzPTqJxJig5XpkL8XtcPLEoH7ZQHqNt2HkAS2RE6UJRgDwqvUNHdhLD6u",
  "key3": "55vm7gR2SnBQxNwYBe2UGSMGXDhueA53XCWtDR1jtUAZfA3g8FJ39r1ar1MkEKKfcjWGJGPXqyhiKKCKGR56owBd",
  "key4": "4U6GYvTZAXHQo4f7i6aj5yvwhzc4F7SbmRStLQa6bY3wRbiQx3BNMLFAfZo8oabiNTiiNfy9SiJadp6bjoAwvUaa",
  "key5": "zgtTASyDHxQ1pR9qAkXfjtQyXs8FEcbFJHYyvBKBDugQ4YsgJYrRZGqYxP8wYXJfztwWweej7KrDs4ETd6TBKxw",
  "key6": "2at4xVqfzWocMGjFvjVkcJ4LYeqeECCSQbMExV8NFxu2neNNSDJVsx5XWdmmijUqy3Q9nqHajf3DU6DLUy8M15aG",
  "key7": "oAiAeUPDfqTsr78PBSYjZoVyyjmCbWj8xgpCeN3pXK8F6hcYmyJPimmMg2CCwWwLBFJc2f8HYgeBUie4beKxPU3",
  "key8": "3wg8D6CcEroWNx5VsR24uYPoEswynbNN9eRuRxBvZWXatRW76whbCisMrKZVJgGfV4JQLNPZU3RHh82eWAJWC1aH",
  "key9": "62EFGBVEcRGrco9gS8Ht5krHJnb3zaSAGWpSieW5A6GpveM4Ugc5NGXvM6fxWd7LQtZBqKj6GPr6LWYE15BCmj5S",
  "key10": "5RdggDFt8m9J1dLCq7TNf6LgpcLDDCbwVt9N9AiC2JFV9LA3TzhyoxMsgmuRD8DBTDZd1d9qPk97dg6CxBHAPSCN",
  "key11": "25eZUn3pEiNqPebCowWrVPVcANzJgPSGYobFwAZeKJsE4ZBPPPxkEoppw9vUoKFTugNNXWQjJhT8Yq71gWta7yjX",
  "key12": "3tu7zXMJtG9EKzhVC39VVkFX5RZ3hwFmMPdMftBq7vpo2cUg8JL1wDSKN6eNfPJpzeMB3afacmjvBhzeS3jk6q4p",
  "key13": "Sjs2etzC5iwnsxLXE2SZ8FA1U5yjq963LNcDKDjK7oHEyvSeKU4YUjWjxZKRyJ8sRZR6b5QTHZKddfNgsDzWQxH",
  "key14": "qvrZrnJBREtfwiTzusKaJNLYNRGz1fjm78BzxoU4MZqQqVU8GPVDxzX4FYLpsvFp9M8wwmkngfb1cGGigzEa8sR",
  "key15": "fXUWjh3LcbmXFo9f3rJp33CbfRDKPwywNm5y9ACHd4nhkUHsVLv1KwX1SU7wuRTbmS8tHQLJWxaraF2UpcaEG47",
  "key16": "5nNioZPh6sUuRJ3uubhRpfFJnAj2YrGH1Jq3vRempyTXbauwWYgzKKaJsHfauQRhdpwjVhasdgJ39RDm9QJWVFnK",
  "key17": "5Lqa22T6C8yJ9yNygHXiEtmB8T1pY2M6fh7SC4Ma8rmi7PmNAqeSb3QhriZnwrBLJL5f31zKB6YJw948cLixvCHK",
  "key18": "4uZtk1QauXD9VMHNDY6tWfCkDJQoD9ykSTTFoAs1USw6vqsqWY7VUSxVBApRsAzcXp1xpVkYeEFwZAipzw6mWofm",
  "key19": "4mhrsutoPp3H2uqRahQZEqFbsK5MeQwhz7672hqVFTjJZzdCuQkCvGgJChR4fqirmQ1ZkBHNHjQWde4uF1oFsUJY",
  "key20": "RWt2RyMUvoEBUtxe2K93US6fdjsv73U2FVJBqb8CPkHKhFQJmxhpAY4UQAxz25t1sdLRJEfN6T3FGVi8hoJVePg",
  "key21": "3xGUoMCpm2H1HP3dY72p6UAmKhbMQL2PB75nrrtSezjpvNiapY3sGRqmhkGb8E8Jsa3eZEeS2mE2N6fuXvJJViaq",
  "key22": "4cNFr6BT5D3u4LqfarbBK5KSGAstvRCcxPZrTcaE428go2oeZTPQi7DLeiwma9xCHg5qAJTsLQ2FBgcCZnUEJCZE",
  "key23": "6hJXMg9qtjFummizGPa6ZCERhj8dsaCY3EPXC78aSEzvVw7EHWJb59Cfe6evxxaQ5og9FpXyxyrncA2FfxA3VWC",
  "key24": "ezjji9UHYmYkibrEfYUHbGWPpuCxpYe5dMdyvN5Y18us7ZjgZMhMbTufnVPBr7sc9SNRooig8S8fvkj6KyDZMnw",
  "key25": "54n9RfSvD4XZc7CN9vd1KVpwEkgjZCq8iQtTFiC2J8o3zAYBf9onjqdZjQFyiuubJSg9CzKuKRdxWJCBy2dmd3Bu",
  "key26": "ZCbrJQnca3AwNXZq7d6f7ejGVoTn6vhdBTt1znGY8qgacV4BN15mJ2Dmx8Kr5qAH4zrSZDw2Q96VsDNQFM2dKF1",
  "key27": "5B4gtVT7WBoqFf5E7FgRNzfDyTERpUfU2h9YKu4XZNBLTWQrZhp1Z3wSJjp9rSRyoqwKQvJh4Zv6v1eVdMu8e6Z",
  "key28": "3GEpVcUS6x1CahQDCBYftp5VEnFEfbNT3Z3xNoLy4TiMrxNyRGmeub3JWj9oEBwrLg52iLBJahzUWfRt2PmiNpMv",
  "key29": "3Y9YJ37iHtPzSDQPkdiLYzDKYg4F5F4TZ6NB1XD9tUach4XovE1iS9qP61LMwFDGrMmX3YiXSi2r8yJ8DZdxrMgL",
  "key30": "2icsupzFEFuEWESLqevZnvxEjNPjhmpeSjd2gypcqCPS6gCsAEJxjHuRuttPdvG2yi3eb5MRRSPLni7jKYfgX3zk",
  "key31": "5rJQ6ZMfvcgmreYTiTpZH51P4dwZ7sXi4o8mry2QWLnXZoqakaNrNLTY9z9ixYxAgeKqZ2C3UzZtxCkxiUQ7jLSN",
  "key32": "2HtNiS4SYEYFtko8bdW8TUXFrXifogwai5cmSLRCEZrDVGhYu2YKYLnVqFY5sidd92ZifjiTDLpjPMQgg1NkgJpH",
  "key33": "5fFDMiejbfvd1kwQB5jhFRjZTLcdM5rN1dLN6aFAcaXf7fgnccQGNGkQH9LEZELmYtbd94bPXH3eiWPyxbc9kJC",
  "key34": "2pzTwENwmAbupJ9NrWwgvQDmXDqVLJQ8kWEKHAgL9r7QcBTBz1FRSQa964kwgxHPtf2CwRxvzZkNMxVC23LkAtjn",
  "key35": "4UE2vcqYdj45fUBF3zCryWgDS8urqcUZFhSvVC4hNkwUXb24J4y9JDomPHrEpDxYV2NHU19tQFrdUTUPD6btLHhT",
  "key36": "E3gAhdELCQahUFkKBCxGZYFzFhcPguDBuEBtpy74vLkoTNey76hZ7c4SEir3XS3AUmmWmC9u8iGiXsytMa2qjoi",
  "key37": "5wapH7ujQZFHj57Qw4CBSJbikm3ZWqrwtcwN4goj8vxSGvzVwYnwahxKqqWusj7jLEgjVwsBBsBuaMqsqhyHQ6nV",
  "key38": "oidN6PkoXyfVZtTMxPaajb7V9Gk6mY53tr9qvufLNnrrsU5Lv66bQzAJWhfgDUZWELRtLa9AEsweXrn46FyYXo8",
  "key39": "yFFZg7BJ26szfqLCacp7XCMFMRGdS3RLbyFJtY85UUygXu17Ahca9voMyePCCRZTyMYcgfaGHA9BbE4f3uD2Ljk",
  "key40": "52qovLAVGaDqkrMafiTY12HnghakP2wvxveRrV6BCYJZJPwpyQCozWkxawnCRhpkQBbgaMQzRY81iCVeHvVAPw4",
  "key41": "2ZdcLh3jRDzxTpjJXPYt3T7KdrW6WDQ6eqSitXVKoQHsRpyxYfyrNGm4NGkrX18UvEzHnwyBdjvBTqte9NWyjJpi",
  "key42": "3su7eHRDQuR8MQXrJHue4MbC8gBYQogq59Fm1QjS6xPa4PRmPCt7qsPekVpHRF2N5qKiwGvdjJzEa2M3sS7iuwEN",
  "key43": "34Ry16TD294rLVuCLp8rWWzj55FGyG7znZ5ZuNx1amMqTxNcWodLg5AcKLfxbwcNM33iH3hcdUoo9DCBLndLX4H1",
  "key44": "jaM9LWzrqDQgq13VP6TbgpPvAMw3DCN8gzqpH2irV6Nn2f83UKw3TQStPk3MpD3nAQXWtZF74BfMHzvgwC3h5ye",
  "key45": "2Zto1NCGuURQRj75uCLiD74tWhGDmoz9AtHdcZAutj9FaV1dVVrikEMHkiG1r6gcYeZn2Ng3us44M1UbPiLowbH4",
  "key46": "5gmmAAPvbbq2s8SHYAQrbqSuG1kdcVQ2kCJQifdBBCoKEUZyTE5RTxL7DqoJtCaRV6DU1hnZjjhAmBjcwkueLAXG",
  "key47": "5NHoiTBcfAZNSCsMvVRbjbhR5Ug4Pj4X7f3B6BYKMfpP4sxubcgxQAdX11eMsbmLZDnJnk6DzH9jzwGfNNzsaReP",
  "key48": "4hNt2EWy8xnVD9WjbvDirmKii85BuJTsWVspkshkfQxEdpnyLZro1UQ7RjdgEULe4JsNjfzqjReQ4HjDyDepv6X8"
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
