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
    "4By6TWG8c5Tmcp9SXzeFmvfNggKyHNrUKi7K3eC8tMoKBs4rxbyh2um3WTKTPZb8b5X3ZfchPBgWhHnYP74YvSXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cvkL5cYhBmcFtLd3xCCKMbb8RhcVz7JnzAUA6LWLP2VD9REJqchj341uvXqWh8k8jVb3GmfPgfNMPUrHpENdHwB",
  "key1": "2MzU6ff4VHM3PVaVyNUpJSTtZm3PM1SUtEkn49pkqzeD2vAi2NRVYgD9YhVNfH8eC7m1TxwmKQbZAFmaeboEqcyo",
  "key2": "379yKw3Zy1rr7owrLHHLhtAZbmSsFYGfZB9d9A8mgoCUNiKgjjsGyyFzMLMe9oGVWgftJQvUmP7pySAwNNRkqF1Q",
  "key3": "3W9DhmwWtUUM1erH34NTSgKe22P3YeCT2sotdfTeqTXwwQWeAMRo49Fe3p3cZyJQNZoqpoWe7joY6iebHfUqKNoC",
  "key4": "416DUegZVHVwYxohWkSDC5cuycV4KvnNtxduvNsX7rSYGMxNPxagSfL46GT9TujaqpvwSRRg6RgJpSj3LivYwhwL",
  "key5": "2n3op2bu4Ufo82qrESyeqE75nknwSB7kJ8EoPjUw4y1AcEG8SrPF2eNcdbk8a8ZcAzALytQ3CN44nJWW3hevxbGN",
  "key6": "qBrYGtvbnJ194tU7C3aCNb5aNKj9dxNoFNaCAN9V4W2xkFnrNwGE7EDBV2VxmmC6snHGBohe2rxJFqVNwdn2FMa",
  "key7": "5ZKjgNfrYNhhFxBHMhyU4PP942GGRffhQfXbDprJEQvf6D5LfKkKvc9ubRPi2zTaLDK6BY87BfrVFtUmngv1mkCi",
  "key8": "4LptLR67wwDNYxzDew8jocX6vWmi6S7geiS4peqj9Rud66yY5NFD5TeAsDJG6AwrCzoQU1NsmPMDDwWtjgN4KMvh",
  "key9": "5CweNCoASSU9S1EzDmBU39kCApUM2t4m5ziHuChmMsc1YViU1qU2CfEJumA5RpTinqygEeaeRESLfWEvZUqjmPW4",
  "key10": "4FSTmxhQNx7U8qWJ6ra2L8uvh4uDXA5nD57iWkH8V67NceQwDaf9aK7r5ezHj48dUT7LvRd4KhR5h1U6zgrFnsPa",
  "key11": "62hCFFfDLwdERnAVEMQRhT3ipEN4Z4KyjGhY7pfqqmhs6BMc5ZphLTJBp2jy5ZGutvt1njFoWZCAF6wTK5vZ5tv",
  "key12": "5WRa1kyF7Tbwo5sUX3NBqckyJxpiV2xqioGpDgNm2JdihyQBDk4JzQGSSbsHMmFwT9bxsiCUxaLyFYyVWoJbV5YE",
  "key13": "5TdhkhYbhXNUSQzRERuh6QJPTMCzXHAXH3CYT3a9X68LRR2X5BkDN3i3432CkyT65XwtiGz6xRaDL9XGi9H7Nxxx",
  "key14": "aq7gui3LC39qwRDseXGpYecCuRTfY7afRmNbRgAUUTRgMonko8Y3ztMPZLHvoiU3NEERuP8snjE3r7d2bMgGbcs",
  "key15": "5VV2WnHff6ovreX4ANsPM1ZATBP7rXwmdCiJN5NBKMjqfUiYMWYJi5YbTZC3yFYzfwRztGFH4FGxncs3vApBtF2z",
  "key16": "52P8MdghXepU4ktZCJFg4ZzX5nK1QHBZtq8HAaiF3Vw1TZpCLyB1UWT9SNsawUD9cMtsPYFoKhNSdtTNjqdByGUF",
  "key17": "iU8J1dCuRhs8F1CLPBnnMMnE7J6eAh33Qsf42wAkDWC3emHGMuyAY3JsWcWkeRD4bjPnwVLR5dZot293BGfaV1e",
  "key18": "51F75vcuHqQZnN5KyD3PFyS9E9LUUD72Z3TFzw1XNA4NhwLAT7B6gF1RkTD1tDwkUSCaoBQNkWzVjLtqHMrkQydX",
  "key19": "58JAvoy5yHgYiQD56zBsgi6yKjinB3RNJ42MKE2ZT2PvFNoBPKp4rn2nLnWp1c3R8ucLP2Pw9HNaUEMH3tZKHLAH",
  "key20": "2rLbKwT6H2iUWyJJr8kvN1bcY1EqmV5NVxzjxLP6LLYK6JP5tMHwqb7j7HwtXmsiuqGSzuyvsVvjWcrZqD7j59xm",
  "key21": "2xZrpY8sJqa7peS3xJJH2QgPuMJCpY8zXA5TWZhwJSVchNjsADKXw7Ct8ysGsxEjPSdoKP7bQoScAerz9VBQC5X3",
  "key22": "2eWzuTCkJzKUQfunAo81m3fjbUdfLow5RS5Z2pVTF34HXHJx8BFZJkpSHQX7nZwTo6kF7gUmNnYfBwqSPicKZv4R",
  "key23": "4iVQBhhLhuEv514raz6jin7UTYYBihNNVK2TzWx7mXGR4ZdGiZ7vQcmFXRByEZwQAJ3tY3zt2SQUqRh4jkBwjFLj",
  "key24": "24Z1CdjYvawgtrQV8hPq4xmp3xcaXbirFMrm8cUhsQHdak9rpPuHSv52xU7YzWCtiYYcuJdxX9KXN6UeBpaPTw1J",
  "key25": "2HY62d17nszF1w2ww3A1wn2capaeZ7XaRAeaaXdBBoztGg1S1TV4j5TPXi9haPPbBtwkTNqAG7at1tyzpYigWBpb",
  "key26": "2s6qgyzh4DeqTS75J1uQeczpWESkp1RnMQSpR7hDRb8UPRUGZfvorNBNLW51KHA1hw6eAi4tBxP2qERbSc2oTYSr",
  "key27": "DST8ZArB2Sg88hfmGQLSwR6Yf5pQo1uNP2T2s46FeDnRUPA6dpNZ6RSbj6WDZByqnBbhmpLYdxzTS2urSt5DfSu",
  "key28": "5PPTt291q5Mr9MiK4Nf5NJ1njPHyVcu27rX7xebzJSdwjSCjx6FMXz7xwLKnf4YqRaZ2wT9ek7P6VmRJzebPkJW2",
  "key29": "i2qLpB6Y2ZN9K7iYSAnNSMFfEREJbg8SJMwzRB5McKWC8qxJr7Gj259pt3RbAnm2D6WrDAqk7r5Yo6UPVvHWFiz",
  "key30": "5j5RyXrnHbT8pbVCQxNSeMxMCkViEtyRp6iPT5WNmQ86vPsZeEWcLkrMAfTwgJL8jrKyyYecYK8BcVWe8CbKK34s",
  "key31": "Q3Gi3i9C6LvUHX5aEqsCRdnm5SquXZGVghXPaH3jEKmAK14aewDt3DrvSmiYTpNdahCtKPziseuHmjQukkPoASg",
  "key32": "5hB24GupZqPszeYSEx9g71z4H78n1oczFFo3cuB3g3gZDsJtbYPWdRQRPtmG4XhRjt8hDv2pzDbKmKYgjUUQYdvn",
  "key33": "26So8WS1mUE9v2xi2vCd4p6hZncgXSVSwqjFxpfTxFktnwAxbkLdNA3EjviHoznJhT7LNfbDpnjsnKxQHoKfKfxe",
  "key34": "3PtBNC1t8aoiM1SVNG2cjGx6WDxqPQZhMicCivbKoBZCr8LgWJGYSESJX141WkCsR37sgARoEDoDf6Nf29sg3guK",
  "key35": "3CUHije5AJbmuMoM5zcAxbjN95PQvpTdd3W98Q3GTbFohbnuPhy4iQWavZkUwmpkHPNtFTJRfj6PuHYMkynYdgcH",
  "key36": "3HjELccTK94LeUMXZwdBnPS4WnUYLBSeDL739DRHzNDGQMtk2G84UBwDUEdqarV7cKZYaDwz7GPPZguJMbXWKyb1",
  "key37": "4Txa3B4fWLxuUnGL6TPo6gxMehtzYhM3J2pUSv276VRj6fh5FJghzogFLvwowBB1obyb4v3RMVqMzGqVS4Ze7dcH"
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
