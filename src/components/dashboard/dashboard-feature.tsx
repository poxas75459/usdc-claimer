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
    "FTYc1dEAPmcmsqsHYE2DX5y2YAU27dTiScZ7iSKHqjR9yfm7Ja6QW8tFYosDuE11yTEMvgBRz8KXAL1ZxuPYQwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KR5MxDV7SzZi9Z3ZKRaEhWGqB2RarKtACesd4ko2aTL9NmCST7Qs8hELbKkbh1xCuqrDyGCYdQXeRyAMa137nec",
  "key1": "58sDtENojvxfALezoQSHmLZpSv9gSqeYUkxzA5RRjPr99TbxzC9K1vR1aaMjSQKNTy1Xif9SKduA46F4t3yHTZiC",
  "key2": "4GpfhYYFXXdsC6cs64xJWVortNQ3d5LF9CEYCt7WuBWkDHK1D8SPwwzG6M1tZvnTwEM12w15D8W7uW4oEGmGrZjc",
  "key3": "4kR7EMjeHBWuSWkCa1ptC4U9Y4v5p4Bx3KTf9EopdPiNXFZAZvsvxDX3HgbHXNPs7M8qmu9HxE7AAuEz5CbmwRqQ",
  "key4": "KAxHLsA4unTEypgU2LPM9ogrrR8XbKxfyb5EHnSMS3Gi3vAR9L9rjJM86gqtVoRJknXn9eSs3Nh63pmsrch3JoX",
  "key5": "67hoDoBKBECZgBo6SYRfAoe8ysZwUrmdzNChhJ8jnNpBo8VzfQD4CNJq7cmq4BtyeTTE2Wg3mULVcQyXiDeD9Uct",
  "key6": "3zVzayK8WMhAeFrQ2S93j4RGdS7MUERcfZt6h6RcXuVuE8UFTDvfah4N5EyWEztyypuuxBRsNyGtZDfJApZbkkgW",
  "key7": "2DHt3fk5TStEyCXAxsdAaBagjvRExytjatnKTHeFuUAjWjeu3sWHCGXmkBjVbzgLa52LtJLFYZCX3gCz4a6Z62Jy",
  "key8": "7daa4QkXGiqzFwdgWa1c4Q45KCHasLDqrdbVePtjsgi82c2YibNQ5BMDErhKFUQjpQUPwtpxhd61PB813ezcvtP",
  "key9": "2J7YBXJj6cFvsbVyfhi1fVUzaWvbuvH2DTGWRhkkALniBqnB324WQeyioEYyxpYNokoiRMhekuL8ders2rzWi6Da",
  "key10": "5bQzqGQB4Y4B2qyyxmuxyzpEpZXJiTb3zAqj6A3CbQtwFtBvn7AT4Gbakpy6HcuYvTXUZxK31XmizeXY3qveC72B",
  "key11": "5F9fHvQDPtc9gwVBauHMPMWyhvAAnn96cdDfRJjpoa7EDncGCJrjBwBwJ43HYrPEGqSFmBdN6xvFwUV3XmnZmTGj",
  "key12": "2yWQecD2qJTQPriJDyvKp23RFZgFd4RxVEmsPXcpo7xjefA8XAMU4jM9EnRWSzpbL1aJ61Qynsf4xhcnesMmAkeB",
  "key13": "3B2RiDER5Q5GmAzruPvdNxeuGBMVWDEjcC4TeNqcUf4J2Fxcr68r97sXLwkyvzedgoW4UeF6qoeNFdGTyMFr59M6",
  "key14": "4NuckFZDz9MpsBwLdrPB7TiP2EB82e4TZGrSdnBTYzYEDFc5MWVtrBSiBGtY7TJvPRgNeNhwQ9ws2kaSUPet8ZyA",
  "key15": "nUUd4P4hne24GniCoeDVCCrMubamjhjCFzg7mojcUbHWAsf41m8MtYkocHxiLQ377h9i8pDjsKcnSkdJ9N8GNTu",
  "key16": "4E4Q3bcEqG98MucADERDeu8EB4LjEqm2HJNnUe38qSt75nY3BwDTPirVPBQ8GCr6dKnBvxWeL3cgEcfzdcoXpMxv",
  "key17": "5TBch7krccEgwMT2dZ9jNsjUkp2ziWZUxgF2imTC8ygWot5oSVq3ffuN6i7QMd73wKznRZwrwkjHycdz99FY2sNd",
  "key18": "26Kqck5dUhpQEN7A8BeYeugmFjnPsBK4BQ7NitFdDHzUNVCbZeNbCWc7HmArvL8VF1V179G52BTAB4MbuL56ZR5C",
  "key19": "5mLiJ22yvX6UBea5EQLjKUhHKEKaPAyShiD4TpyVv19eDeJi3UNoLvojLkinMpGsLna2YMUZGUkivKk1FVxQ28K2",
  "key20": "57oFy895Yfcv6z69QHjV3nw2GjUqqiENZY47oCpWhRso48tEVJwask1gx9S433w8euFW6JZp6cya8bsfVTTCiSyo",
  "key21": "4Q33bYUDzybmKtWuTWT2oTQHiJ2799xSvw8RS5q1hjanQ6wyEuBFyzpjswJNpJWnrzsTiE8C8v9LUamiiadMxqyd",
  "key22": "4VDCgiwHB7URrpRMM2Gkvk4bnkbN8THP2rxhudMrc337fBWfm5qE44xn6SoMGAfHbEeshbFB6Favj9P6WDGB3juh",
  "key23": "4JKSMRdoQb8j4x5EK1h33LGJhZkcErqDrkwyvTzMsHLd9qzuEHhKpDpF9R8BqPoULWJJ38SnXkWvn9w64qhGPzRf",
  "key24": "4rCS2rkj818GNfETiX5AifWYkdr8S6fik1cxLzwQikKsa43yx5GvGHfrZ2ABbLURvwLTGLsdLNJYcGYKRyKbaZtb",
  "key25": "3dSWmNNi3s7AKzQEu1xFjFHZgoV1WNiMEUY1sH2XHQbzBQfpR8UQKbGGviQ5X1izyB191gAMrmDNb7k5BX6KXuK6",
  "key26": "4tkiidW1BRQLKpPcj54q1AXv92wLFmww1EmrwSS7ovRuhav7hSa36YiqKce6XpcRrbkhk16rYChoq1mGJMr4tCQW",
  "key27": "2M7Ep7ohjWDUTCmhSqyKtqpT36Pi2BB9xxKZpqu6spM93B7sHnP2TE9sLCyjfbzU83MHKaPSqgrxbeGRsPkaBtnf",
  "key28": "VPK3XQhR6zg9jeK5ib2DGmBDZehJrQY6ncvzxXKq3q9RTxUrEQhifTFR7dvWrW9xFV986R3Cior8KDKehdC9Bd3",
  "key29": "55ChQNFJaNe3uDimXuALBLhd6GewyJ2sZ4DRz2NoaZ5G8uGp7fJVjVCAnowQm5CcCcVHaRWSrrkR6eAEnigutseN",
  "key30": "42bFYPNCNXA4ezFTryF9GLALZtFvLQuCTN4QJfoWesvH8nP4ec5g9KYXijKtUP7X8imVdVsCdWrfbNzhGpEN6dwy",
  "key31": "5TtrZQ6WXhxUTy8Qng7bBbpm2H1CSFov6VNFWSVXP9A8x1bUvcTBUcaWqCR5URz78hKcR7jcsaZSXLj9VG9CaD8N",
  "key32": "UM1JZtRrQRVjqDgZShFqSqZ1J8S9SxtBBcSXF4GGHPFaixKDLbjUtkoTQEKYjkaDXgvHGUgh2XWFKfJVM2vEqDc",
  "key33": "5jN9GiWtdA5q4kApcrNu1snFxXj3ViLpPiSUnuzmydR5igBLdSe2dm3nPZexNagX1m6sLpY7qtKrkiJ7F9cX6dFL",
  "key34": "3pbmQZsh7C9rseeYMBxxHiCTaYKv7yF3aVmwR9a7ay9FodqHoYGQqFddoH7Jttj1QSMhj7g2q2AvHP1fBkP5z77e",
  "key35": "2jALZAG2aG5R8DcxvXst6LDfDSuKpLhyBZWrCeLyjRwD3knd1LxYz2qkCryX6F3GQLDy7SmoUNar9WEtmgxkASyV",
  "key36": "4eQpf8DkfwgJvwy7i7XdVewhe7tBhMrVCr1k8tjKUfQZfLPfNg6ze84FWR7SdaL1dmN6rZ4JzN2XxbQPLfc2LeK1",
  "key37": "3HowN2HhF5ogxyiUQbk7TDuZXKJ2vTS6vVW7vgZGK2K6nNNQxAJgjxD2oWi6YWsQPVdyvUEccRoQtcFWwWkwWNeH",
  "key38": "4YHXCnkSfqxZ4vjFCUaUSVzJ6htbqh23DMSiG3PthWkMrjQjzdrtHFDaN5qGUCV5RUr21CgPFVaWADT9PTZZD6fg",
  "key39": "2h3vRJ7VwPk8aM5WsXiL6Sh48vyHQeA9zwB9TowVbxqp81GgqQTaLnxiF7AbfixHGrGwww6mxrctLhBuh91QnPaa",
  "key40": "5Yp9uD1fRKqa8Az3FwtFguGFZe3waXCr4NAUx7uKB6sz7FtSc1Sq5PhkFAgUtD7ipZfJQzdbWXgeLpBHBseEHFoq",
  "key41": "dS7F8iBzX5qU8T2Y3EP7kKSGKFbGRencbu36vaGQ74Gk5UGiubAxk9kE1xYTWF3FRSKCfnTmoxaNZUFspuqGTtY",
  "key42": "3R7PGGoHmr2UFTF8DBFYZWArPQUcvWZnZiksWbkw4eh74sAHze6oHcTnBAGSh9ePKvGeNSgoWAed22NwqXxGJEod",
  "key43": "5T7wGLo6fRzS4fENYbaxFqmujJFLMqsV39VX842YA5nFN4C6xXgrhYeGFCCPTCQVRCbNTXB7qVCvG85gbDbaDuYq",
  "key44": "gja94K7u5mXmLrnVVCaf9SUd9kCxHTYD38smEAXqB4GqzWGXWTYaaUTAjhLVZDRMM1rZ9HbP1MMQuFpMSqqyMky",
  "key45": "4LBfKSruNv8fbNDrBzPHNQMygZ2sd949L47rt9weMyRqGum8YdRyDrF8AcS7MTfTon6f81r8RAGY7fGNjKWRqgB1",
  "key46": "4zNMot8Ww6MfeLTwJ39U7UeWLPhNgBE1jUFkV94W4rPNYnfRHs13mCoj8gsc7hBBWShTzbmPLX35bYDk47FNG3BN"
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
