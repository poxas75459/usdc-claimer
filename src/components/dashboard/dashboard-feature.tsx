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
    "5cPeXdCFkd4CrGoZdPKQpzYxHaxPvhDe17iUwPvNMJzyb1s8vnNMVyHHth2DZpYrRir3LpJwVExmEUawzsktmuD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bx3BvPsLrnRBDiXcRSF1793UemNc6gYR5zcn2ucstZ4YLPSPfQVz6s6SDKAUoPieYhAiENZD7tHLerjBJCV8KAN",
  "key1": "3omntKLo6QnB5mcybpEv3Dh1x3AiDXJaQjYjAjnPe9m7kKD1XSx3Aya8N2dP21DaNmwPDQQdsm9kZc7sfdtkTMG8",
  "key2": "2Shsbmyv8nBxkRhcLmuLJ5EKdv7qbKPkks82bKCWvr8gjM1Yr3EjpXDAwymFVgmmMC1BHTpzq4J5h4Gi2pSEcePN",
  "key3": "54tj2aB1Qu76A9oit6QQrSZHWGMVyCc62ULtJ67R3aMHrz5qiNBeWGgBUSrq9kXCnzhhSBQLDpUJxuiovV3cn8d4",
  "key4": "485QXo938ANxcpq3ZzssmNSoEDYj8C8dwLxieM9RSAvVg2QSJBArieZMxGJ4tPXWfV1Bx72Hnxh9UG5RFe8Lv48M",
  "key5": "4RRKJJUS41nwGwYrLQjpzvEq55ERaq4wmgBypAYJrRDZGE759Uabe7ZDhvdYCkr4nP2QcAZ6EgJpgyXfp1nuBtsZ",
  "key6": "6SSs12RKHPoDXRbHbw2Y8ofBEMcVx63TU7XErww4b9sR5Bo4GD645duFCGDorUWUipqRXJ2L4mcyydTDLxTXVUy",
  "key7": "2HaykXAtDx956oy8xSGRh8dUrmNV1pBeBu9wMbQYDJk4whNUp6z8WQoFgA6B9vigCvLJKa9Q9rLEjJX18QW11s7K",
  "key8": "2xiZEge9yqcQd4HdvWF3ZNznMVSPMy6nbByJ7z5td5NQHns1teK9zYhBVhFz1uJqyiR3DbePMDuiYXRcPqfSZwPK",
  "key9": "2BHQvT73TNbLdnVicn4W2FjFG2TFcGJVLWF2bUZcSNFREycbqgkzPFhizeMgqFMfWYtXDYUzbHjHdFPHruvg4awM",
  "key10": "4L3fU3eDcfW7UEnjnc1iqSVWQ2iJ4cDG9JLWxJjoLsfNN8hKmRTK7yrVJVSRDko7vzJMdScv7Wb84JU7hrokxgrX",
  "key11": "5x31FR5AFoChx5LvomwZWjJNoECzrLvgCeM16nhSGsRzt9PHpvresyNx8Ek2Fp7Rc5gGbXx56GeUiVmPr8ham3n3",
  "key12": "4VWgXTyjyXqST8J3Ak6R3YtA184wjjn9xWNa1iNhXXgdwaw2oHBBFRv7qcTrPFMbKuYBiyto2MNSqXpUy8a2fR6G",
  "key13": "cyRmPE2y3ahndV3pdWkJXJBXs6KbZW67dnk9kj5hsnYzsBGLzdEj6tNLkYsq6BFsFaxKQgj4PyKYLddhS5YDbXb",
  "key14": "2BwLjNM5ApqQC9cTGnhTz9UsaWMsbhnixR68xHNfgmGAcU9ZxHQLWnaja9YPvWumdUdr6EdChEb5tisMpCaPaeNr",
  "key15": "53YfD457Gj2Xgg9YxnwBuBZ9XqKwsYHeqp2hzwwniHqmfGB9XRGzn3uQdggAHseAvoLWfVJuuA6CTqEGREoj8CJ2",
  "key16": "4tNKswgGCZX5ePgUP61PqHVyHEBB1Em9HpNuEG4ffnJ1zKS7L61XLEMCGF5hi9MX7ivs7i82tqtPWtexYTHyqJds",
  "key17": "5iGWR9pEVqEo3h3Dg8k9JupX2mXZnuJ5yNcBV4rWVaRkA1QKmiMy1NG6MaNDZhDoRwP16Y2dq4YMXNg49a4b5neu",
  "key18": "3hXiRAh7JiQzsGQ4cDKeFVAuS1iW9D1QYTXVj97rHiZfnK5u4ZrLKS4XhFT19UMf42BAZSxLktuK3MCRR3CdbYE5",
  "key19": "37PQubRpfJ3ymGvhuYtUHLetm6Zwj3K1jvvxjKLxVmkM3AH6LUSQ74G2eNzRWpzZG6XYbZYLDeZbpDSzJ8dXNUrK",
  "key20": "5PU41efiCYzNSuD6m3DZHEtAkPWe9FSXK8bTSMWWydCfStCv5voUV2ZWi6wBdutZihEx3Si3m7QLjT9fV2peUH6w",
  "key21": "5eHeZRpAoTnfqB3NPBLmhDrpYp9ffic5aCabQgFPz8zLknkgCouRHnz9rN3fufrBztnHvikoPXfCnVdLZQHgprLG",
  "key22": "38iM4ehRXd9qaU1Rd1kH9M3hSYnxPrZxD3tieFy2FjgKY5SRUnoBzZE2QDNrhU3rWADrLH7f4HxRVE5HQM69ow31",
  "key23": "fr3UWDMbhygQG99uy7TEt4oY2C3wNAwy1rxKQMVXkDKwgpLKpdAekdXCYu29RGxauGCj78iU358MUu4SsLKDsAP",
  "key24": "5Ys4vAEbmxjb8WxNPhpb1QdBhkK9qdzrJ1MTzinWLh1p3EnAogDyoEnDRY5oXMMzUmmqH1d1op1CXyP2rWqHn69u",
  "key25": "Etb3EWpRVVPvnP2HiXf4KvC4Lv6iXdvQ4PkjGDvdSEE7o71M5vGBnJuojpLrfXaZJjNsr4k99sVHY22fRTiE2oW",
  "key26": "3YBbh9Htho2HyBQUDQZopBvsoiXQviy5khZDdPeMrTHSdfeFHX8Zc14jgXa3krnmDJmiQm6w7kXKNXdjsemxQLxZ",
  "key27": "52CVdJ321afLrv6A2VkJcYzUzZZTCyz2ZGUaSj6wqqGjXvxJ6MBVmeErFJJ861HxwmauR16mzPAh4UG45bNecsY7",
  "key28": "4zuXRZ1M8yhVm7NHJfy3SKuo6bckqijZdUh4DaFjKZryFMSqtVWdAxaAb8UiumA7Y6XCPzhPwnWHbtd5oLDZT1Wp",
  "key29": "5Zrs1TVLmWpaUj8Ne63eTMSTFdCsFJdhgsjfADUgg82AoYV2GL8vSVXRpLN1XdpKufHpcDzJFKdi1gTdDRCoKjo3",
  "key30": "DyymbqAxBjjcY8jd2P7SsYqfKNwL4sWVVJY9r86qHvnfDmt7gYqyQ829BLVX96tADAogbCjsJBQzw2zcewingYT",
  "key31": "2MWmiE71jUunmpzFsR5sMuD1pLhpECADR995kPmJkfHYHuMN6yRuB2X6aew4CqHU6YJXdL1hbJ5W2iWNU76fR67s",
  "key32": "RoTPpWGUWtrZ5DgGV1xDsD2EMpTydosqkv6VjCQXssr4mXgnMj8GgQcxUPWmxijvUE3LYQKF6j9MgS727o9zQvn",
  "key33": "31QNSx5hiAhgfF1ffPueH2rbN5RPbALKF7Cxb21LXcBSUcQ7mNXewUTwXiz23CXUjHc4Ar7inxqhAaqt4uVUKzT7",
  "key34": "5MGByV2ZhemQLmEx3sgKi5SQJ9qZ6j52My5eN1qVqYEyTTEe6E1urvd5EXUUSURzLE5cuic2jwU2aiVQDQLZ2Vh4",
  "key35": "TcS7p4owsbG7fXWJpQZb3QrRpLtkkR8dUMJtU3adHbYdkJWcyqju9Gm1bc9qWVvorvcHzCFwqpNZdS4ST1jcXuu",
  "key36": "yDAEpz6H1JEdJmw3YYCWjKTPoSorweeZMiBE2D4Xhb2QX8bAwcr5Ro9FJPBARbSYpmcCUxeBgqFha1NFg1Y5icm",
  "key37": "2d33cqu1mdMnsQB611rmyeiZQHxRswpirLmRSZtVtfTRN65hAqAEic4LBjHHZoGQBVs5DJdJEkhQRGb6kFHabBUn",
  "key38": "3Z33XPnetBrYP52iyMVq4GQrx7D53JZDDeeNvKKtiTg7sUSDAefMZ6UxEBHmnx2DtSxDHiQVozjDfwRcfgm7tjif",
  "key39": "3kuBRtgE6qWc1L65p6GqttgnzRfoiCXcXxDazq7hFeiFWwr2g9MFYGg1tJJFKZHKtUvmLLoPf9taGbquasgFmQeV",
  "key40": "4qPXUJc7hQNjaBsTLwGxw9jTDHLdctEKA3hUvPhxWCiYRQ5myo25SyHFFnmgNaRDcjrzeDj2drsPM7GyVgUQEaGa",
  "key41": "2MjGYXRcTUE3L9KV7QVnYtDPPnLn821B9TTskBk7L7fQNqBF67etX5AA58knRPJRtV5YxUmrXw2dbgm8zB6aKdr8",
  "key42": "4ZEiyczoBgQvUACQ5kGpmC1h1hcoaZYpF2u3ddDCygU37bxChyvYieaxNhMK72XbkdqvGPJePvvqC5mm5apXbAH4",
  "key43": "PrTm1Q3xcC9iLoMekX9aX1MuA2NR39z9TV7hYBz9z4fUFxTzafvN8RXhVnkeVPUSg2p5cnT5hPd1Yk8dyK4dM4i",
  "key44": "2i9U2eYmFU747VLLGMdGS9s43RYr9EFztadATXUhy8w9nngZWLhXc9JUgfb24etvpqm9gMKLaLAuXRESnVurcFQk",
  "key45": "56c5eoC4sJRwRGMecAhJhGLXZj8NoywRw9WS9xT6TZci2ei2LzyUXvfSkcKHopntePLGT38A7NYv5NzSnX2PqAq6",
  "key46": "2fqf1L6BwDTtfJ5FJWxzuNgrkPv4bp4QvFhFKb1imvGjNFCsuXviXyCo86MuYfLzFRsbS5mUxzufPTNPZ6EjuBcm",
  "key47": "KrQcqtJ6c9jovVbbonCvH2R2NSiWqfiAJG9jN5z3sB1v3GGbxtxLQg6xEoro9nRLYeDfExK8QSFctJCVCEUrECJ",
  "key48": "5rRj6o23rtgncyxciqWicDEqbd2yGRQ6j3RBjfk4jyetRzQ2HL9fzwhr7e9oVfZUudo2ut2an9VYaNteh7TeL4Lm"
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
