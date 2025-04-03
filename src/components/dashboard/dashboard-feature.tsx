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
    "ZPC7DaHmJTgRR4QX4YLk3BtvWJx2PyUCSmV4BomZuvbK3dRyLgzUc6WTWKWcvGsAsahMuPDZKX3p1iwoq9vj8VZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uu4ToZBTSUh7Vh1s9EkdpSwpXRkbNk1iwvQJ32REJDLyDoHRrXrRnPW9NCJVmwBJD2MqjJqXuXjwJeK2dsAfJcz",
  "key1": "5XAJiZre7fFkiC6ZXaT33VwuAQKWAKAYqnExq6PHhhCveD7nHAfEPwQf1baupAMH2cLpDMB6TZ1YBVJcbywNoHvJ",
  "key2": "3CQu3pKHFCb7ocu4btm34LQNAhUr83rhF9odPFScXyqNURWkMn6CRT8qzopNtwzMtYBEmWS3WBa6Cs8RiqfayC3f",
  "key3": "3g1U3BzpXJHVNhTyqeELecaPhLHKLiFGvFpigFjru27yijqBXeLxJaLZrfZ11RbVE8tFUxSbg3Z7iSn4fBPCE8hT",
  "key4": "2SFxPLSTT2JiRUzEZTvUzEKB7An6mPpH7m5xVQgdE6dQ8vdpJ3RK1K9SQXkGam4Tv9fXiUmoE9A6dSukR4dJk4B3",
  "key5": "3NU48gFDzS7SoEx7LSEytrxuV6EA1ZsfNePJomHRzEp6aAyugw4EpPhx5rg2xLmRTGoKC2HY1UK5rfsstL5QsbSA",
  "key6": "HrnkpgTumar1PSDsB68ohYJnCBpo4nnihyYGk9B1bgAgDke7NgRgtEHtkWuLkGsVj9sc9s6uaCn465eJZiX74o4",
  "key7": "2x3TLjbB1W8sMnod6ndMDYxiopHf4bMGKVkvY67cki6SAWQWkQaUx9PJSrmz3qGVyWPwfpswJc7zRETegQ9RaUDw",
  "key8": "3m7JUdKAwPEM7dyqZsZk6MMDqVZrz3bQGy7jBUQ7gqXBnSZvjwLWkbdevkhPasFsbvzPiwPBRkrDGGjgsEVfyUkv",
  "key9": "gTgNGMZWVa2pPpNcKoqBeo3apQWzEVSYSgSvUEDMmRm7Fc7X3dqJoMf7jdtcGw31x5MaArXTi4pdMLBaNXp9VGb",
  "key10": "GyBmuSwdoW4f2x9v7aj6wsAtMj4F5ZcyqapY9PVrJj1X7YxCUwTEC8uYmraZgvQEn353EvtzGbDGTf52MnakwFd",
  "key11": "5gh16bvpReRiF6umVgGiDCeLGAuFJV453zhk7HMiWzPQEwuUqz5Vbvzctt63uC7QNfpPKdEA3mbee1D8r44g1WTJ",
  "key12": "2XXKBXcsDTzTXtQC9aGP7MxS9RLC5MF6yVuf8UyEZP8CAVg59h444D8XnDnvKYBege1AJ2sQYfTrsDN6J82W9jqz",
  "key13": "5DzX6an1rRVzTfWxnE8999gzeYHRVo4d67zbTSUudzw2Ur7zXTGCcoW2FCFCiHraAaqdqpvc48cJX8w7p5bstkWd",
  "key14": "373C7YjUVB9UwCraEMFX98LPG6mrdeYjL5Mfw998EbZEgrmNZmb2m93fDsYhLddsPmtBjjXWi95z6Ekgb32JFtxF",
  "key15": "3txGa6xVqHVGNa4rZUGCRQnJNX5iyZgsYavR6qUStPPkePhZouKtErjcH529ay2S8WMYZr8LW9oWzC5mAjfNBWCi",
  "key16": "45qpUwfhJmEno6DRPE2WuXdn8CPMLEQNQBmjVNYAnYgUZ8F1uWfkxNNzs71MjzsVh19JAfirk86MsgRp4GNnZqZi",
  "key17": "2Qd3UEnA1AispzBwya3jSkkZEE3xkxcrnUXbgmCKwbdF2aanWVmBErNJJUnroSv6T7HhS8F5H2yLfYMfdAW4rZat",
  "key18": "56jUVRyzEaQcrnCPHvpgeEfG1Pp5n6bTtErUS8aY7xhvzWAyw5b9kiTUvZxG5cLapiBNgi2gWtP6wb7353ADa7aP",
  "key19": "tyuvZM1PM2Tz55swtMsBBiCqR13bfEW7Q84LGbGtmFhkoFicQsbpTh9Bmk8VJySXzjQi5Z5usq2bChXE6toDpM7",
  "key20": "5WeA4LV3KeK9P4DAuRpJQACtJQQbuPpk9wCNt5yRJEpGUKUB96BuSwkKpf7GeXPhUYAfteRdDKS2Fz7m8ydZyuAZ",
  "key21": "34xynwfpb32A9rJn4oY6ohXkZMZjwcTbG3dj1edugnCRk3TeVJjPBEeTGQk6bbQu9xg3rWm81bAcb2AYYFsdKjeg",
  "key22": "7okhcRyFgLtURC3eSu3y8pGzB544Qd4Gg2wCLwXXPg2PZUur25QPdrLWLHRwU58GnQJzTRitxxuLJtkscSxz5dt",
  "key23": "51wZcEfuBbakgA33CT5L3Ep5SgCDRAAgs9uoiUVPoH3HS51ivbpxQFG9ixWawyJ8vvK6TXzFBTTQT4qvjkYSXvio",
  "key24": "2AyYKvTkz88tcWLA2Aworyvt6VqBFyPAAop1Dth1wzB9HumCiVCnr6AERdGAp9JNvK27qNwUBG52fwAHNyQx1zLX",
  "key25": "21WyeSg8XrnEyRgGr5dBCcmeb3Eb7Q1KArCZXH2gp2tJNufUdmWK73o43fEWtypPPUJfFMofF2WMzsYfBLNaZWs7",
  "key26": "4es3WYm23dNrQ5qwcL92J69hf7h2xcNDPQGCY8At5U5DxiAsRcq7MauH4P5RdoU4SVxmPN1X2ErEwXpAeeHykc2k",
  "key27": "2NfUpk7kQWW3xrWVY2Ya4wtaf1ouSUCCtHAaEjUDyCZGewVYY5ATnRzVFz9pye2MkyQqMsMcz8PM3ivJzAfeizpq",
  "key28": "26724nQF3b9PFyHSVqUExa2b1PRJxaifXV5sAr7C3e7Q2APP2CJccfB9pSSovKJWpnBnGduTU2hcxLgM2RcPVxni",
  "key29": "2zcjDjN6aHUSHck5CdQukUEf6zpGwxUyhWHGtWpWwoCEdehty9PjZM1Hrc441BWjxZ4NKbi1mS3xzdtxu66zcW17",
  "key30": "5GgVr5He3Xjx4o4AkYG7mP2CnJucXscMaapBeHN2Ge7whywNVz6ku1rKigAbcWBHgiG9dc56Yf5GQyBwoKwGses8",
  "key31": "4EB4haC8vZAdHyXJwZ6F4TSpGu1Hz8sRGU8vipCb55ueJrPXtDnmWEtTwLSYm2fijLGjZ5drMGLUaAzvBNkDaHHT"
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
