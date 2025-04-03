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
    "4JwzauqizoGvyYZHSfkHBvs3TdFYkp36GwcFAj4c2qrHjMQh5gEt3FKvBzidi8AXQWdampGWixbYZgV64uFsP9ii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KHUmdoq4ouEPnQnZVPkKGLpYs53VUYd54Jcd3MYRduyHT4Bjia8LL8VmjdNp2zgrSXw23YsAP3BK3iWehkwbxrr",
  "key1": "3rCLkFuBtZi3x67MyCTKLLwYMTMnuXQqdfoEUegH2cqTnPnkMewNq9CKVLgzUD4iZ8dbru7ecq5NJqktSj5nAQe4",
  "key2": "4amiM2F7uRUwFgS5iRnSvbTRYhEZiE2htZSwPEuhrUAboLUL5xMtNjM3GFJf7EC6pYbDaCH1bK9UpQJ6A2JsmuJF",
  "key3": "5ySfrkh9tStP24pCSE5bxtLKr39irG3kt2xFgDFmM1ruqAkgmAeKapgZ6VLxytfRVgBvRV87f6sC4xHA1r1jqgSn",
  "key4": "323NeFWmCtPqbPeGAWtMfxQekBaZbJ9PZWPRTevUYioqbcL5VSXcyDg3rEjRaZAnvToX5KN82dsfPFUJtnQZbmhz",
  "key5": "xtBmxiJXQBwNJtCt6yAdBqxJVLoGMhApwyMfM2BM8qMGkczWyP3qxrHPi7PivwTGLovXTkH8Zcibx4wrEa5zneo",
  "key6": "4rmsmQdharyQFbZ2oYon5hzSGLz55z4tQMqawM4353dzN2xpkQtbTcyvqJRcec92WmrkRT71KfsmCzPoZ1UN4ek6",
  "key7": "iiUX3J9Y8tijfRAwkeWcRawmVBYnSYVKvnWeRy6hRgeftXQx2gd9izvgYFNs2p78qJc82cLWGA65oqr3LaALMrC",
  "key8": "4cF9yMLFtoyKGUxnavsu2XnfbqDsHWeindBBZsqd4LwUqcDeAGynPjeM9tRdcBsq32Gamb71ZDSUEbRfXGMkhUYF",
  "key9": "5JiDpKLdQE4vBfDHyQtec3LYHzgXgv4fEFWgZVou4CVHEmeR6TGLXaVziUNEDnPfXG9gCnTD4P58inWwx11azmf3",
  "key10": "kjZztj4WK8DGM4c7v9PdTy6TmocN6XnkiUc42ZNtkbkCn25VAS2sPgjPKE7ENo19D9Xop5zpeUUH73k8hFLdavs",
  "key11": "4D1NiFWM7ZtkfqApjnFKGNfk9uBaky5H7dkmgdn8AGqhbADnYRWnLAKvrNTMa9Vw9zZRWmZXU5xNBWuy5yq5gtBy",
  "key12": "3h366sQonvDpT2JGUQBkybaWq8Xo841HkL2E3B83ZG9zuUz36b46r6hJJz5ryeM1xLG9p8rjq4HfsxwVzhC6X2pK",
  "key13": "4iFAjJGep7uJsAa8igY471MQp2MRYnpwJSdYSKMVtLDkMmiJiMU8yGnFnW5RUh3tw6KSLRHxFLDnpiJ8HSoFVBPo",
  "key14": "V1utnXX1fP5EKA7cKoUXda5TUQV3yaCu9ZqX52moeBNBhQnKVThd5v75n8JzMqJBmW9NCN9XAWUL2sK1B5aj7h1",
  "key15": "2DpQ3tXBC8eiymS2qYZw6ZYrws6Y2Ajp7T54g9qAfAjH7WTGN3EskZnegNAGT8kL7Tf2nbvz84Lf9FEsRe3gxFLa",
  "key16": "eomRELLQoJkrdbsbgAC7tKfhAjCExzerLTvVEvKW24uiwjoVsLVY2NUid4c2n6JqaMc2Xq977PCcyAgZi8hM7fL",
  "key17": "28REfNSKb43GCtarBcy6dmHmQdzFJcGHa9EkwqPCHW7kp9kKkmbA6VKSEmSiK81QHjXFUmkDXe4SNAPCKWtU1646",
  "key18": "5ed4n2tTXPA9cACLmyU1hJ4yMoK1BH7XmjAaCYey23gQ6M5gt3itsY72vfZeSvSb4KxhiRmDo7N3YHCw1jSRYTur",
  "key19": "4UYNXn6X5FKcaXo19wdjXynKrBmckd4GYQQvdb5fBpH2iTYd9MAg2YrSV2ZjFSPjKoKkDA6beVrZpxDQNBL1FURb",
  "key20": "5Eib6KMkMrnx8xHafbJ1ZJ6DuwHpcS5xg8JxuL3HJGGwzupPUyUGPz9fShUEAXincNBMgN8pphiRxTrdFJuxTnXE",
  "key21": "63ouqBqStvbEjaHe8zbJi5fhAe1SfNmkAcTkFshcDbgC8MTsPtcSNd1LcWyugSmau8YmaQUC2upMG4i4NeiivXbH",
  "key22": "89WDnV9FxJn3GjfMZAdNujk4enfW8BSBLYh18SP4JcDUgRAGwrNPTGYnnXZrLS2SeWxjxt5wNxTaSdXxckVFUpk",
  "key23": "WRRTGxEK7caHWNQ4Jw8Ez8TMdywm9AuMhDKsH7kaK45Fbg8rGmxiGKPwnoH2H3UCnyA3URSGJyVurQQLwtCTsJh",
  "key24": "2VPYbYE1LPrN1vcFuTvi3KKJmJqwKob4bqKn5M4CBfVay9jvt5WzYdn2aeAWtBzAQa1yivQLmUtUPHmc15xtSAse",
  "key25": "4gicLsAvRvVALbXMRdTy74n567ULjovtx8vTCMuFAVytLPjAMwZ9s8H5V7SNzzvWBEWg4bhMvqFtvYCQThgKkvbS",
  "key26": "23oZC1aL6ZsRuwwumf1A4p821PSWdX8yrBVgP1Fq4toQj1uiqEMQFgn5Uhzbo4dbWnHaPsFjWBFEboANnzYos1WS",
  "key27": "42AJmYuECVzEcYxuyJCsERQ2Fyyo6j21gMrjQHW5KrdQufzmJt7dFxVhsS7K9jBGpcb1moTQwtacwboo4du3Seun",
  "key28": "tyPA9xsMDs9kPg6hWc5uvnx29j1ME8isN1VGndULcpj64vGNi2tkDiTGrFS8f2Br2yWDdJG2SxXhxV3pMRgu7SJ",
  "key29": "4sLvVqdQz8mW95yLxqPUXiVhB3bmrZAMgaaqpPxV41wWRp5zgSqEs7MyQp93ewGeoLeQdQ2Y22kCCQEcVrZr2obS",
  "key30": "41tY1bXPPd26fHcRemvk3hrDpK4gzKjuHAJTLdcjw5od4nHTCA3JJyoGwCiZU5HjPwB4ES9nGqhvUZ9XYqCKJe6b",
  "key31": "56phmXTKqPNb8yZ5pCPMUVSgZEhAfzmtPmUYJBq3zS6thoqFoCwqa6oTsRoiTj6kjdJigHU7yLdVkGA7Z11z2Cfk",
  "key32": "3WKAmdah1v3srs67ZfFeEpuuJaPSzNx1pL55xWr1yQou9YT8kM1Zw1BWsEUyza4uqRpFnzEy1Gmwdk71vjtzMBLw",
  "key33": "5uTCcsjmjdw7C11q9giqTn5AGCttCtRWSKUBYshCoRP5hHDAmHMNhpbMbhY6cvLJ1st7YsudYsyyxRvjDU2VvB7c",
  "key34": "3xF12MdpEWsMH75uXA7nHRouRF5XkZGhoknZAx5xfTnEgPatVFC8ycxyKTLeY38jzW5JGN1GpTBmTCnHh2kHM4jy",
  "key35": "3dcrHWc7vWpFkTRCWxjeG35Y5B1h9VZReWVF8JYjRDLGpVLfmHoeimUMiVs8au58UDck4kuPLeafPkGJkHXy2DmQ",
  "key36": "21NEHMSj47cQJtjBvjfuZzYAQCwyFJAV81krVfPneN3ifBHnj6KXFWFXrA3eJEV67y9tCkxWfpZjs2zGTx9Wj9bQ",
  "key37": "5mtYbR2WpYbja3F5cEdqActRuMaP6GHi8zpVcz16kpy9XXoBXvuPyGkJgTSLMmsYCRGoVcExTpvvtuXm9cwWYjB3",
  "key38": "23tYVy47LxoQP8GZAqaxjNNsVHDWSviStQVTXgmKKA3UGYgiWFuUUSaMKsShovqKkh3ZHbXbE2a7eTRDzPcPYg5q",
  "key39": "2gB2zZcUkkL4aZHknsBWQzMJQXKZV4ym3aru34xUtpPy9S1Ao4qiDKnFDfDXWWmFG7KRm2wkZGtQVD6aQ3mviJPW",
  "key40": "5U4ciWYUYawpWqptsXp3S2TwGpjYbjLde8ndspjPzuYAduEdEdqLUp63ePnAHwAhuipKCA8PEi8HZouddzJc6vgo",
  "key41": "4KqeNArfx13F1N3j4zZapweiLnAM89SvMhGYCvdv2MfKDbb2nnNfJQwianX8cJ9Kjg5A7eNjWSz2WC3kpF7SoGfm",
  "key42": "2tFPrNue2Jo5xnSD3fNMtSTntmhKsJDARUW31xFVTeMBTStyoDQCkVe3F43se31GwmVYDEQ1x8ddHGeMVTY7RbyR",
  "key43": "27DYPazT1EBnaNG13LSFRNwUWo9QkskqxXdYTGz4wDWsnLiE8aVVPsSoqdRHsAcYSAfVtaXGTr2bUsfRm75p35ie",
  "key44": "5e38f4VhSh7LrT9SikbcXXkgggisJRFiirBQW297259DHXyRsterVpBp5NH5FDf57PtXUjCnnmciTPRBU71DqDBh"
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
