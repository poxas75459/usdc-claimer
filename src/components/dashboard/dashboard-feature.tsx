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
    "4g1A9vGSoeTg3yZvprjoMKuFchJ7vFrTGfMB6XQgee3ycpTNQENwro446TywKzhpasn4yyZtsrGFVCTr6jn6TK2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "579oLW2zzAYNmxundWHo6fiLv94pEsxNuQJ5FZaEWg6qfdPipfXcVg1xKzC97Fk8aXhkLWCBa9y19CjQbZQ11vUS",
  "key1": "27tmjfjDxKDu2Gd47SWzNeqGECZtVMKoVdfLsNj4gZKVRQM2F2NKHgX4Jxt4kxGwpAHB2H22ZZYj6683KYxqu61i",
  "key2": "5W7u88EP9oh7YtS6fiocdkLLbFmvDeBZLtKnFkD4Yz3c86MP8u7vbtSLpjne97rTfBMLqwaYP3vFtmsFUFt1CTDL",
  "key3": "8RUXYGqcH4F1GkXwxcPhq3N3jCyx5DEo56KFuDCfQ4RQAuvWwKoF2zsnurzqeR9N93eATj98UQtKAQkKq6uJuWF",
  "key4": "UMjjFtr18EBSCuCsfMofFeys3PavAqGi4nLxZjnC1XrMKCyx1fMjhySFm8xeanab9WByEeATfArXooBbr2GHau8",
  "key5": "3GbCLqKNPZn9G3MmJXDVNkU3X5V8RJ49JiMRsVskpA4BbJTGjjkQKcoA71MP6hgRAKLU15WDjUtMDRge2S45PDgT",
  "key6": "erKU6JsiFvh76eiVPqbQrynYATWWddFVGgaAmpTDDXq1924gUzHi6fsoCPM9sCTnuvXQdYWbGqkSRVvnEL6v9YY",
  "key7": "5EmtULr3BaQSsS3DChFg8HRnScsMp4YJJhGArZbZ5SnvZazT7QaPiDGpCECYGFpo9oLkEs1HE3G51fhuuepLc78J",
  "key8": "2A14t5fmeH3f4DnAFbUY6rpHFN6QDLc6VUPPKeWHSNtrvkdrWsUtSPC1PP3df9suuUxJha1qFmupRM2UkGLeMDth",
  "key9": "2hDFPDkkePhQLX8i9Cv5vdV6Fep3fdUeSv3HkZPnBJ4VjNGXqBmgAVsJkFwboUC9p1QQkEhPg4WDEoB5Qu8nivUi",
  "key10": "5Zo9mfkHQrSaQLcauW5Lrsz8bqoDSKfBdu5bwm8XospMia4FPPLenu6BYFK8LDftLg5v4GwZdZPoVdBBxXtfqxvD",
  "key11": "5vsXWcr6YdPxwiim8v4142WWSFBhYCvyR4RvKS7AU1B6owrNmKF2u1VBT2Fx9Nhh7doPSfCGwEYoq5V8KK4moojR",
  "key12": "k5nBscyouPE42D1448zWJni4jQPkmNRF2x8R6YxVWEnbv96uJZgfugbp1xymXE9S3WGxscVcLNR3XWZ8QvTGFH7",
  "key13": "2AVkzG1sp4cqEjsUfReyxQstx7989ke75vqCR2uiVY3yRNcNzVaUqxet1N7y72yi9MNJ5nuP5n2gF3pGSAhjpCNu",
  "key14": "5MbdVQmvc1Vp5Ge6ouG64BZLCSpiooW8sdWHqqKvx8TChDgTpTpSp42Vrr7zmphmH4AwpbGFJVjsRQiFHoHyErMn",
  "key15": "3EhNw36QkBken6VkW6X4G75Uf4mUbrfGqh1iCeVKsvH7cPsFsBKYkbqaAeVa9rdzYHbknHWomtGaHoudjgohS3qg",
  "key16": "gEK8SG6VfTKpeSpWM2e8uESPUkuewS6ft8FJUvSnKikCRxm9nVrFZPfGhj63pkWcYtGQPA1mUey325TcmrLXg6q",
  "key17": "4qdpdvNjocj11EFAB7nD6gNjKmfLWYu3rpDQjXewxQJdjTzjpdZ41bse4pMiQ61GmrKefdHbYjTAnhseHMaNMk9",
  "key18": "dvpaJtmziVuSPjiDgj18vCXquHCLDdHi7c5ACin9yE6b7uypLBGdioLs8Q4AprsEcpaAr69Knwrr7FDta692GFY",
  "key19": "4hsa1A8xmUsC1A2WobATtfRXT5DUF4W58WV8q4J4UM7SRcpZYQtpZEyswtXg8zJjVX1uWqSVUh16o87PKRZ2TDtE",
  "key20": "41qYW4fezW6aAAwy8zSgSz3ifWnQT6VNXhjAfpwHbzzkQgfEPPghoFWGUyiCzWGSgHFT1vvsxizTXw1ia6quFtpS",
  "key21": "2LxqDesyGJt49QCJjbiMGQZ3QQiTL6QqmteNQgwVjmbWMhpw7v6F6mqeQfpQT2eS55u1pbjJh2cRcFLDU1yxV6rc",
  "key22": "2GwuZfxu8TNxDWUZ2yUAjFfaAWF25DM1G8tQ5SXwyRgWF9przKiwA4vmZoMytZLYj9tZXH7LvGvpzioY6h8s8Hwe",
  "key23": "4mVGnTdQHEDibxXX6Fd2CvXmtaYeYVppWJdTVCGqkjsMv3WzDHf88n5FJKnHZdxpATxGGCruL6syUPx4Rc6kKNaS",
  "key24": "3qYosqUFW3f8RQ4gjWGN8DJQh6MwVuLaLGWr6fWRig37QwnserPkDFFhtc6cnEoro5WLPHfrMFqmFbVtxYKd6qH3",
  "key25": "562wdBsAwKcs5iNdud2btGP9mdVBL8zksbsKTRC33cQ6GiQ5jm7bWcFaL8KW2R2r375isjAGogKcpd4FQ3J6eYtu",
  "key26": "4vkJZ6hy3qLQTsb4QF8Mjh7scCfMQMZ2j5i2S8VKf82M5bnwXBy69aCPsucd8MCaVRyq1beUY9e1QhfRvek3wcVo",
  "key27": "5NgGdS5ioTB6h6CyGw3tBSCd7ZB7Xjj72CjNqf5JftiWVKqECDiMhD2cPyHBVWtwcWUNFdi7AtXkJ92jpMAmkftg",
  "key28": "4HNRpoNAoWXpRzNPAXuNVbuK7UMseokDA1sYYhV26Q9F94csUevuoky7MVhMSEtLk34MFDVTb5C9ibr2ZSALMq3",
  "key29": "2Drh8TpW68mei8pv7oyn5ymMMSseDZfGHwJHGnXhWPAbDFymRGY8cGjndbRZqgw91wMkJnwnt71joLxmddRDV7vn",
  "key30": "3xDc2jSecWb8kJoqGAipzLxvBAM84XeM7zPXiK6tRWDd1c9YA8z3G45KQ46GW1hkS6cPy1eXPyYwz7jjhaPwLQqa",
  "key31": "239Bxi4XkuQ2dvTgxvYCv9bN2LdTUiCMq45DjrNeP7HbyvT5jVTqRncn9qEKLtHi44TvZBQ5YutXJiMPHMEQ8Sew",
  "key32": "4xE7EVcjMx5o5pPZnZAGqMRdfyP4MKZbuJ78mWPTYB3Q9FcG8MLEykQQ5iKF5e1x4hmsjNKSpwJoUR1q51L9JLu2",
  "key33": "FrZiNAA5gCPdsSo6G4CqvyC8XkX5KuZz1iVrT1UdJBTNzDEqi8FfKLK4h5JaGSd6vMdLWBnXgj2R59jidY5Toxs",
  "key34": "kg8ZDoE5mHc2HAvfcJkmfqWN1484dwJ6JXrNPbneXM24MLuZyPsDaGkErZC4EsQZx6EM791YjaheqvtyyFrRKSy",
  "key35": "3EyTrEg8ZrgYxVGLALjN6TiyG2TLJLAt2V57V7MZFaEFAsXua9FZbhevPgoyAxcMWKNsTti7i5UYrDM5J73g1haT",
  "key36": "5zdQhvxZpfhRbDriPWpWUwXEfRFeQEJzXkQa922vDCh8egW6JzVnnyHPg5dohaTyUenPfppQnRjM3MnDvHJmFPLo",
  "key37": "3WzTHE7sWDUf1uVBmDwS9cgYJmdMveT29aUxFP9pZ81Khs5g3rT1Cqn2XwaLvGpoxKFXJioUrxjaWJchLFi4MZVN",
  "key38": "5dq45wZtphVa3jMG73aQmMJrgVhqutTgS4oEL4hnZtBpcCq2sTEAheYeqv8sbx4dS8TJ5U4Gim2pBLEvqbt4e9dS",
  "key39": "5kj63JuDstFnRF4bQTeZRpXNPKPzdMWfRnXBR48XyKCfXYtVArM6su1MDyJhnYa5UCKXw1xPJ2AR7aeD4GYiU3rs",
  "key40": "tREmeM6vjnVSXtpU7UnMqLsKc1o6jo6y7LdpQEJ3c88qPgx4GoLPX1qudr5LcVf2gKeUtYPt3w8rpihaMwCYPUE",
  "key41": "8RT2uvTmhYJAV52X1EFZHAe18fyQk9j4Y3JYY9i5CCTbFk8wcP4YNd5CupvUcfma1dWbYjHtr8gFUprhaJYJxFc",
  "key42": "3JFfpAmZqBrrGhmkyMgktKcGotxobiyJqkRhZiJcs4dKoa9YhaYxku4P8jdbFkCSYxJyddC84BkusLVB6hK16LRX",
  "key43": "BJxDC58GGYNmfVxcogHzUCj8AiZyrypwm36D5cmLpYrnW7RSaJpKyuSGeUQRRQaMcXX9RiPtKCwap61SjBA74rV",
  "key44": "4kJAPPXyGCyDUeXvyav8R55JesYnzFAzUTPQyBnarkGSmZ5PVtoz1u7dc9i6swgYuVNDNGkBDtfzUViB9dQ913ZN"
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
