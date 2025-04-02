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
    "3TN8xAyLUYTiHXP8A2rjtKAjLHv6K4BSbtAuu4LAXubv6K7hCFf8VoAStAbbgoh86QKCTVxt2dcrz3MaKcLqrHBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJ59vFNBvUkbw3mzonrps4WpxWWz7h6g92ByyE6veAK3p549tcenQAyoqg86BhSBCkJxrQaxq6Lv6H3tpVg45ki",
  "key1": "4myueHVoddDgy7wG2rwBaYKidB7GhmzoqSiavALKb6xANWJNocZ2UXtroSNwLPdd2cxhhykBwjuGV3ZEfjLEhTwH",
  "key2": "2cA3ENSxsYAeuo2zVz2B1ieqB5cvVoN3hvWyktmCk2F5mGJ7d6uVeWL3qDLxR4B1pExFhGSBhfeyeSxD7KB7dn5T",
  "key3": "4zwe4P2HY9gbURA4fjvj7ZccvGc76bDyvUBZi78ocZSZxTVF9hcPLBGFGgXcGNsubqkn9AV1DeYK8zHTxFhCNi64",
  "key4": "5tepGsB4FRHDffRh4RPuXLTkSQHFtzXuKtaAXgyMnZzAmemUPM7pDArDPYzH5VQAXeTwwqWyL9ofzG74MZWdNe6H",
  "key5": "3LF6KcrJDdUAcfKng8W1FbPT6vFUN4Q3kA1aKqUsVkxpYGPP7U6qoHjJq3ecsckJh3YtGaiC5qp6Ks8gLwYMc2nA",
  "key6": "yN6S7GD8iVud1E7DEtoUSNUvLoZk9KHTgkzvupUPT6nbNUb3icvkJcivYDTWHbCceYjrS4ACMHGfGoUzcKM1F7U",
  "key7": "2jr7yhfZG6AGRT8coZv7b5a1YxVTDhsJeHgTHQqCDwtgTCdcJt1z3mvkRRfrCQkJeBRjuiSSeJdmFcVS74RQUmh",
  "key8": "5amv1xU5q7MruZLSvoCySudwiPkkpsN9VAdc8Dido9pooWtvmjbdCzsRYbazgZKZKsGYvExMC1FBkVSiTuE2k82n",
  "key9": "3RUbkr4DaRkp4PjVq1PR9bD6Ph6X7xNLGegKRCc2deYLqHcQ5xtKf3TzXRuiZr2VBQAM2MNo5pb7yUjqQkcrpSGE",
  "key10": "24PRvyuaEysKehg2arefnp9uUNr6fd2GbWMhfjSSE6issHxXZzjPrswwyySNVTqvraWDZ9R5L2uNs761tjNRn6e8",
  "key11": "5ur1SocanUVZVPfMFpCs7rcozCNAQcZLSCNBVWyMeLr32DP6DqR9UHBX3vQVnzJCo1zbrmSofZH1oVZdGABiCmcu",
  "key12": "2A3yWpruswa2gxKUb1XWz4eNX4i6mxsrPTsARH8F1rPCDooAq7Q4CotJUhbKQwBHMyCGgjDwDuQHCwm5Kwbf3dH6",
  "key13": "2XzsGZQpffawdKdfQrJ6FPhz1WRcPXgr3CXxDHGNUXvSrkXvezZdbKmkZzCREnAcwNu9frMSSSxtv2fA7HYsmLn5",
  "key14": "4U5pHMdLgMfZd4p7w7EGznkJv2KaLzJSHKrJGYQ39stVaNdj7UTXTK99fFXy62FoNyrUueAyRYrmvwtFBm5uqwdM",
  "key15": "61XorSoezyCjjbEDPS5dqPgaQDxVK5qGcQe1EB3VGLoyjBJndNH34D4K5m8iRu7cMZpJeucou955XVh1z94DMiMk",
  "key16": "4r8xSnFueNowg89XRKKccsoS5uGwrfwgy3rhnZ9Nw6Q74WnwKyVzhCmLFtMPMF84gjh5bn2cP1CijFL8VMKBpybj",
  "key17": "2vPTK1FY9vWG8aiJuoZQvJi6Bx26pFoZH7p14Qk34ax5yudJyMvhtidYGqg2MR8XCgBvPw2KbdmciTKt6x5aaRp3",
  "key18": "36NwCLdTQ9SzAC1oBm4UZUGcpg7fJnPRegN4qKu9NUgDYrKpPRJQWRAG7JQvb5D5G2ct2U1Z7FYu5pV3cLGD8STN",
  "key19": "4YkqAUR6F7xPD2ojTmeMeVynv4GSHEQAV2Q1us5UpQ3bF8RfCMSyDDFTygQpuViempq5AbkLWV5tkD7WriYvajzH",
  "key20": "z9V6b1avSmXYQ6kQKeVrcXDK5K3H8XHmwdW5XgGpMBqLwQrZ6PSqsa3s2ivr97QDZLfC1ELx8tKPNViMEKg4CQ4",
  "key21": "5Qjdqa2kacMXFfjSuJxRyZM7wLPep5zjqCxScGCVqFtokyrtjGDCAXrhMxyY5afi9Yb4AEPyYq5ZbbFtXDWzLGrA",
  "key22": "4NNTSUXQHwnrZsp1LKG558SE9qQdyaq31tkNMzy99f7SSbvXTtsYzsKAY7EiooLoDTkC5B6MjvKBXt9Y9yGwLYW8",
  "key23": "2qf8cZcoDJbbQAhkoaovypMDG7oz3saDemV2rY7qiA7mRCRRtPbx315VX2DKz4nMeWnoHEjhg6Qky7u5bzzvYWua",
  "key24": "3ihjEACfzTTtSLGDL5Fg6yoeYuFKSLU5JnhVpTQTgYPQQPDzDdmQi6qTzVAaojuPqjCeMqCjVCWboaimBLHJi6Wr",
  "key25": "4ZEtGgxy1psNcHeoBSJq9JNVtmPy8RPQxeNQvLVahAMwrFJgsXrQPD5CuTaGWq8XUpH4n9ePX5rF9XVDCvG2CMZS",
  "key26": "4aK4dnitweMrAGJyEauG4h5UX9oCSZZU2fHraohVL2sFcK7xc9FZTJkN8yUjPDY7ijYnR87HhG6nfWJzzirz2hy1",
  "key27": "67NFwwTHpyfiUi4sV2A4ZYuq9y8PziGar6iigT5fAjhyTAudKu8z4pwoDCfmyZZd4qtAJySngb1PzesHxMUS6UHM",
  "key28": "4CftNJoqxyW65NmLowZSgMS43VnxDbxpQdTfVWHD4ESZhP6gKK64oyftW4n7rkPivEZSeUxDgLei1ixvuguMBRbG",
  "key29": "ieb7W9vaTLmDxKtKcGb6Hb2TfeEnWUEZusKqm1PjJGgWbEox5e6iKaP7gfWKxDyW8dD7UGuDivSqEXLt2sRFy6s",
  "key30": "ed6FjefCyojHqhDg9praNba4kecdVjjLGrQQPMvwfxiRqiArtrEC3bqg9cDwnsS9m7xogqmH2NXM99Kj9ASoUvd",
  "key31": "3rLWH9qfHtZ9yJwbMYLc4j7dDhMMe4foCqz1JCN53dPbqiccJtcAY4K8fREXtPaKKuyf4P8aqiuRBS3nZDSd2bnb",
  "key32": "gZ9GHQ1Y11K1JBiUyqU9F8QsFBdHVGX7WBtTyxDbGpVBD9ZrrbGbmnrckSSBzeGVjBrurDHFR6j47vzQTF5vsvK",
  "key33": "5BCQrYXqnGLSFT3DTtWtiZsGFeZydVXc2kvHfuavJe4PvoPhrBZEK5ADC8TFdq179iEjL1xnkkijh8yxAjAX6zGX",
  "key34": "3i6SXhePqdVa8vgT3mEV2wstbQumAYPxLxjNCAZ9tGgE4EoiKYeYHgV6RGpTLpvYZtuhiHqex6DkGCwM2WKWd1yy"
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
