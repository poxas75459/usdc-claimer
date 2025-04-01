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
    "57gLGZfDMyR74bEek2kNAE4UHRks8MSNbnxD5quEdBsJdjjL52tmto4CtyYvuwzkzqLguLdoUuNFontz5DZ8gBgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ig1ZVLr119MQ97vjZYzzbLuEzkTHko5Hg7MXKrZGp4DppGimrkHtbbPJLHR8fVqfpMkvkSVAJJxNPb9PGJBX2VJ",
  "key1": "3xnRxHJ2xPVLYxo2ATCRhTFBF5Uv3AB8dWpw2negjwkQKnk8s9fUftyib5uAYaktYhqqYCVG1aTnPip2TGkEM3R7",
  "key2": "3ekCCFNWNfGH66qZWgw6RrqhbALor4pL5qEfG2FoY7tFknTQAxaYNKyMW9t6XdWGL3u5wSPGiA7DLGgKDmZPNi92",
  "key3": "2V7kM68S5dVDtpNSwCfx1oazqiXJAXU3L3kGctcSReEstbgEDxjQDFpv52mkALEw6m2i6aQkS4arqXJCrvDtiPCC",
  "key4": "2xNPQSc5XPJnTudJJtRkjzgLHETD5EcsLkex4S1LMtYsDn4e9aUJuSBvZrz5kJ4eB7bVbC7cSB4tpgwAD1e7va8V",
  "key5": "3ca95umuR2sWVeoDuzmL2eM4NDDn5P9uynr2shM5BPkwkRmJ679naMNdPUBafdK58d5dwEWcfpXjpcxfXrzsn3cj",
  "key6": "3EdZSWpEFHtnV5L8xsAVurnt8GC1wkZFsk7xKNS4LfoL5bwNbpdttd6PnqZ1FQoSZwfCqAJWEBn5wQgCSnn8AWxk",
  "key7": "4h86dV6rSdCF8dzzk4itFkJzgUbdRL5bNqQVU5SwnuupVdx6T7x38fgeCCKifKwgmgeyQ6ANQWUCPdyy5TMFoeaw",
  "key8": "4UDR1T2xzB76LrYDq7XHvuX8whQjXP9mctgB1kBtRAVgKuFPQjTafuVttY34EJK7hjMPBv42JoWN7kB3bZFYVUcs",
  "key9": "2s1HQ8xrrmHjNG3LNo7HLQMFaFLK82V6K3cATSHf9Q81WEtpojEtKxWrVAAWF67DACjtPqZ89eioZmaR8iYdbyi6",
  "key10": "AWq5KJ8mhyTy6aPyq2E9exznPUKuFWLXowKwXYPBJ4T4Sg8ZNDwxCShftMgNE57EESt2Srd1URGV5389vVq1iVz",
  "key11": "3zs7HVenGt3GbCQwqoYsAuuUo81K7JixPhNLYgZ3s3AkeqrrfPjMvq3D17rbPQ4KJHstcV7W3BWWozsvDk2rdCxX",
  "key12": "3pNbZjGg2mpb2FWC7DUBear6HDDbdng4XBWPEpqsJRX5LXmdjoNahwbjcTukNqMvDp2y2dtPHmyQUdoMmdtJBiXo",
  "key13": "5fMkznUbnLCKEjKzSwmQrrpDU56BuoT9B7ErqrmmyP8qXYzNd1dpLur1tbMY95kVQiWr7xg1dTZjFjBvFoMeiPDB",
  "key14": "4TAAJw4TjdioMgyTEqb6sWkr5E5ifJdhP6tAPzGJM5m9Z7PPLaer9ef8ExZYQcGf9qHydPon1emuX8MAusJdrdYd",
  "key15": "1e8W8jmFeeF36eQvd7KogTGeXXAnWs1xiMsGAPappuVupm4yVaBSjKiNh7Z9xqjKWFjpSnsXW2YRuSyiHLX5wjX",
  "key16": "2Wut251epKGPUwGbyDAfewnTvSAh35uQGtVuB4Sbi7KePcXV9q4La2xifk7GtLGw1k5DSN5sq4VntNqzfVcY39yM",
  "key17": "3SZtHRWdLeBPsBGDH2KweuKWHzg9G9SsxNQyP19N1g8afPATQZcSi73ZYeqAc6aoahf5bVSuTsAqrqfnJP7fRdtP",
  "key18": "5Nv7HDJ8Nx7Ei5Jj9HDn9mGCmh9fM6CxJH2q3tHZC1A4SJBWkyERGj5ToArTZB1gvRDF8qSpu317YX4tdufpWBFF",
  "key19": "2b5egVssWY1URoPXMURpc3DzVHsKc1yFJQsq9tr5LhaP45b7tRup7Ntc4fk5Asykhc3mxo25Fp6L7aAhinMrmsaa",
  "key20": "33x5MTj64Z83osjoHMp9faNy8ADHkF67H5qwZtNcVF8xEt8Y8nncff7uiqK9MMcrMgX5UKeQoFtbMxNY35PvDuiM",
  "key21": "KH5Ji8TrLnSenRLbZNERqJSn7VL9ThhK2LKHaLGNksWrYc8XWAXYLRmJ6PWn1hXjoVSVCZGYGLB2Ru4JEQMzVPv",
  "key22": "2dwn4ae1smsFDY9JFxVzT2tjcetw2kg2C68B4yi4jZ6kTy23EH2LSa7d8cWxDJFUuUcXU656sv1PeG4Dc2QmozKD",
  "key23": "5YSDwYJDD18vkbG6ihBSnWM2RDHctW4oiFjrrXehbj74YrGGsKfedf6Lv3VhF3fjcGaTnhZhhGSp7yFHD5sQ48xy",
  "key24": "248N9ed8XqCuNyaZJd8726GboNqWHVEm2ErTUHFvvoUwSwUJ6pueU6512ZF6bhqvBjmXhtFn6EyebCvipGx9wx8u",
  "key25": "2wLnSjSzpeyjMSa9UAQJrJDrah5kyeCKt9oPe277ibmB1MdH4qs8C2NQUtugjSWyfD83yJvMQjiAJ9G5GCUtGyEu",
  "key26": "36Hrd3WsxfcFUQzzahtMcHULYwFQRrJSfMVia6v7JxSTirUDrWSN8GkxFfjSEnsyy6TLL7hj3vM1edt4p2mzzpGy",
  "key27": "3e3kuy39GfRikW1sa7kCWHe1ZCW46p7FCm2ixchUiMiFu2edZHRCu5xRtBK9oJ6butg7PU56WuvHqAEd4uRubWQX",
  "key28": "KjiXACmvtuikFw1uZN6iMqmyNZRBYam89jZ5AVikhX31kdnb8NWwzoPP91HiiZTXXzj45MwNuLM3UnfjsKSxPJN",
  "key29": "4behZoNPFNXYjq52Da5Ejqb6GdLiNvctpXat5T3MJBRGqkY8FqNWCCFtLqfc2bGwurvAWVPJ6TjAnnrC8DtUWdEj",
  "key30": "3C8Z4t6J58NbwoXxFbC2MsmTpnxJ9ge5passMUojkQRAr4nwfbV9yyyanJj1CxB197C1JjmverQzVYG8rHsMe4ny",
  "key31": "Z5zzDGMmdAWms1HFdryXdJck6VJXRe8NKQnwZSBia8UjmWXEW5Rbmo7wB7x41SSWa6TZcjCZYCVWMQu1gxvJeuv",
  "key32": "4WVxmmy7k3WYjNJ4FeG24pZa47WNbQ3mGE6Y2qZTuoFME8ApMHaZiJ9ABaFK5mDiHJMUcKBQkq4hhwBLcDHKehQd",
  "key33": "5xiptTj6XrCFDnL15EGd6z2x7siZZzFfk7kJ2iDmqG71xNE2H8E1UNDhq3T5qRGdracNvXRY2C9db5e2m4JcRZUF",
  "key34": "4sWVBzURsAWczLpZg53bd88FQnN2vGHP85NbHbLdoi6bntbQcjn765cr9qGnaNSwwwqKwg1mDAeenDmZeQ36LPUq",
  "key35": "4g3239cC23ph1a3tNJacNYpSjdqazriFSsBtCW1NVGX5hrruh8hw8wAJ4247M1Js48qNsBvTtJxWXVhJsnkny4DU",
  "key36": "gzyStDMyf4aJuQkgS4Pr2NKmp1KxFRc3cLyfR8JNNvsmisk2iPc3ckhj3ReidLefinJqkoWe6FmqASZjoZE3t43",
  "key37": "2bXbrQFyuuYiQfLBdjuKdqBwZt8rKobNQaojWq2PndJbk3NdPc4GnV8zeeiak2nBrqNgDcGxeMyRvGnh7j8c1cmW",
  "key38": "4BEmFkFzKXtVSCJ8Zc9H7tsEZhSxW215NqaoNJVDNnP2KzZfDhi36Hi7ysrUqzfcMa141jtf5pHpUDz1BQZnizCX",
  "key39": "4B9P48L18R9L8zAtjrA6bCkqeKQ67razWzJBxtwW8nXaUybarpaT32G7YieMVRkYL42X8Q3pMLki5nCXpgf53tNm",
  "key40": "5dKwssiA8j7zW4CFY66r1weqcb5tM8cZ28tpk1oXfrcbLrBnHPhMvQ5NjxJoDMHFzUNfWmBhrumdXJ6LNCCPNNsQ",
  "key41": "4v2uZ31pQkjXNnW9AWq5H7HdCg65MC3KcpEwza9KbRnsG7FbQ72RsNWs72P6zq9z6PL1sh2wrXFCRZCoAX3wc9X",
  "key42": "41DX56jxhz1cFxzUtAP7FJCmnRvqYGJPtsp82M5v6DqvCXdcdXvHdWcnUV17kkjV6diAXE92d1gqwp1CnwwhVLnT",
  "key43": "5tmhUC51cPcrfW7NX7gRvG7yQ1EHdkPWsxy3wxWCQnUADAewz7NZxfhZNEqNNaAPFMaS1BVk8NSCJb9eECU647Uq",
  "key44": "3ZYajs6CkahNczChjLaBkjGhyLgV1oyCGmg8jdpxtrxyJiB3qE4cVVke8rtLP2FPn3BJy39WBpLPq7wSZBi1eA99",
  "key45": "5PWA5dhTzzYET8DEqgZ6CRh3ydr2A23m332VTY9XE7cJwCTx25tu25w29UMJsiThiutPgtqqfsMagwebZePSbPhA",
  "key46": "43ZSotDDX4wQ4ciHLGfC71XWyk6jQdghCJnNX3TyKxak9hzmk8VymHRtcpUnh8FhMMtc8K8oxRGPs1vgpuY3PYH6",
  "key47": "2RhCCXXL9yKqzrzPk9yuSngH3u1Um4zB79c5fn6zTSYanom3cSJpCxNCnoyVF5mhvsnU3UG9amS2bX9b8YHKyeDE",
  "key48": "43YDgskGC4iCMx3BvTqkq6RncYjL1ryg1Z9BFqqL5e3YMTTpLoacK3qqnQGiemS94Md3VmptTSr7yoqRAfhsN94Y",
  "key49": "3jNrEJqXbXtKsQZMS8xkN5ef6Ls2ZkWB2nSjeFfBpcrtNRvfuAkkoHLjrC4hLCzfxAfW3Mu1x4oRrXhqAbnn4oYa"
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
