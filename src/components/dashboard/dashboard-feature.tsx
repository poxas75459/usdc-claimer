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
    "akq1rF5MV5hYP35kMTWXbiDm8sLB6eBCfYFASfrxUSb4WsaBbe6jMoKg6NCSquMjUeGKuuqHBRziE48zW6ezQvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43iKP3RM2df1KBwfrAZ88knL7boY3UdanAWAp2wB7FgnkPU29GvxUJrk5fpUcoyCzzvy4kX5SRdYqneJycBBAmJR",
  "key1": "4xGb3qPxziHmJePhyTPj5CPACEDunyxqsRmqg7RMXMLCizXf5aDtTzR4itMt1MdSbdiBkkXJX6zbjjgpiuBViaU1",
  "key2": "21Xy4dQwCABC4PTibriP7SqsNUG9YWGJpTjSCiQfQhF2psu6aoJbH4EqBoPgz91bxsJZGfefh8LXoe7HfuWRcCuR",
  "key3": "4yXG6KpfHAN2smcJooTkkt7gtkmZuLTN2y1Yfued9br6X2tXckZ1P6ktJSRjtxr5bZrVfM4V8cox4Sup8WpdyJXq",
  "key4": "MjGbFug4JbMP6aKgRGVVegM8hATomD4yYrLqPthrKyME52PRpjF55sBdacMuiVtvuMbswwRn3Mfhdv3RuiZS3it",
  "key5": "3JAwZJJ3QPa9BkzzSHfccQXmPWmcMxWapGGWHa3x1gbiFpukCwDjMUaJULretCmNRdyKry3bQbAzwq7TpovQERqM",
  "key6": "3SPxnM4Y6sJSwXvcGvSpZv8VDP4zn9JfvEae2exRqYwjf5z1xm2kZi8uSCj8mfKGcbDnasUReYhfYC8jHBDzNc6i",
  "key7": "3FEM4zXsG6Qr4SVqbmxbDJfhxi8Ny98PyQgot1KFpywvLDMTbmS8kqgPZocE6krC8S5RnfPrs6KCLuzpxbEzLg88",
  "key8": "2bGy4JvVbZJL1RoEHjt61ZRofioa9N58mmioNcWm6z3X9Htxsvm5jmrC9MQeign5Tv1KNaDexbdePAE9DEFNcgqs",
  "key9": "3HUVCVG3YQiAcWPGLdgntWr9mCkoXcAf9uyHfMqJXy178FxzTfV46viD4DNPd9rNijYh59sj9ytwRSUUrdAzTWPm",
  "key10": "3CfbL7mEYSBik94Q5bnSnazpLv1QADhquKCY4a1WQh6cCt6ULQYJQUf4d7fjPvtPMPjv1NZqmwhVnBNb57fD4UH1",
  "key11": "3LMn2TmV2rs4zL2UHmNge84j6J69kXUNtmA2TyFgPWEQcXraZMKotETwM35P2E3mfhZCbV1ZR4xqQgzdrJP7kpCS",
  "key12": "5ZQ8FRAgdpT2JUZwG2XA7avapZMmx6u5afgTUVWoPXN988YroFvfdczBi4ywJfY5EcDeh7HEvkh5w1Bx6yXKaGtL",
  "key13": "PvGy4Le77jBCneZFmPguYftxZWuHarhxpDh1Eq3h2FYcQpMzKPVebFNRxi1inyueuHSbHjW2RsZBS7HZPnbq1nh",
  "key14": "5QrpzXniSCYPtdKcpACJXFzh9nmw5cg6EzWy1yfgfA6V2wmTE2BjKMK1XdAtTmFN4u9skiWhQXoopt9E5AdQbi4x",
  "key15": "2LBGZriwsxBM1PN7ax2sjq7T1i8d76eBWvHNyWkJaEMGprzTDCsmpuWs3RAX8sTECroquMrSx3tNGhqJfgu97JHa",
  "key16": "39oTrj1rD6NmZ63AAZgqmjVT5jQkB6QZsMfAtRXCGHTbpaSRMn8Ft1KfYkR6k4uiXx96eYo3Q7Jc4XSMK4v5EVij",
  "key17": "3DqEbJf1pm2eSEamdRPYsfRyeZZfPjmPyWZ5ur6ZjX2KLrpqDviBEPYGWC71EovZMSsD9X1dm3crbHBKDe2hYanX",
  "key18": "4Zno4wRy44GVxom1AqgWBMXjX5yAqNi7LARDnDzNHFUrX8yL9hC7zv7Uj47etFUPnsrBgM8VScbG1A1MrQ1yAPzX",
  "key19": "aZcXDNqa6dgyzYeonvS5zsLXKYzYbqVL1nHpLQUH8JbjGKHoKR49CgSZyULCG13HQc5ezaWyR8LzHhsyqFuB8tk",
  "key20": "5PudBzCnkPjUJPMWX21TLzEQcqqyCJKgXvEsDspAkiMvMpW1NmueP3HbsCpUaKYMAQSxDY4Z5yJ4T3RBXfjXb92V",
  "key21": "29wUh2RyAEPDq6Nq7gkR37QcSgjXvqUKxRrcCCnimnVDVqYtobZ2SKdWgWwDGdr9WuFS5xUKWwzz4YFKJ5YvL69p",
  "key22": "2exvXqh7o7vRe4TBxJKBaspdcnk9CcugDcyDukiSvUAfEeJBq8FTgkHMPvumqPNGgZpzXohJspv5yAMtBdgoaYr4",
  "key23": "5ooKFxDdCTqtsUjxDoTRNata9p61GQPETWSf7gcR3oVQ6oxek37vFdufeV219xrN4i2WHs9pVjoNNiqfQW4UW52M",
  "key24": "4dR6twLckVZUowPYcknAHjspwQxYSt2fwJT8nXS4JC7RCwSeqZBtxLMin8D4YrfR9akhyCteCry7V25fZ85MAz7W",
  "key25": "5j46cW7Q2GvUWup3cRG7fLcq1PsCrwBDTobuZkbRQeQejCGqU1cEoF8KRkpE5K4tHQWW88vemxnj4FmJXqXGEqqa",
  "key26": "63UFzzFnWie31Josev4pvU3dsG82CbW4BiX74MhNQ8h9EUKa7L2HdnjGKQKm5oQjEkUYbekDejtGR5qJnbfWqN5w",
  "key27": "2x8WTLez5YzpLhtjuxYTXULVNbAuqu3L2wdfbNMVFZHdddcA1TTzDww9Xzq9yLQzJP1PkUbrKCR1SpGBye3ZrxWv",
  "key28": "5BFYamktPhqTLU1vbwDUdJS8k597xvy3yfAbZzDEEyGfNmFpo5zypq3iXpU2fDR4LvbbYeV6VfiGUzgWZVJGGXcc",
  "key29": "EQAT7waqtyCvJL1h3QfyEcxx5Ededwvuj3G5MfqSgRtdyeksBm7yx72SA65GRZZtVoSTrvs5hEyQijxo9j57JRn",
  "key30": "2K6keCqZkmJ3FBJJNm9iJXmGQtjAgZ5NioPdodxDbnbvY3tktk6YfF33ECd7e55m3WdpNdcTST3Cd3frEieesAQW",
  "key31": "tciWRQRMKDpwrd1jsFkK1qyJVeuGXMLbUFFqKN6FJSH4Lqb4n4qDqzK19kWaeGsDsnu3rKtsmN2yjUXj2UapT42",
  "key32": "2kr5ErXDNp8KDrho2Akqpko3wiAQj5s2Ld2F6UYvhHeH6v9xdC4CGgaK8TG2sn7DxZybi3ikuE8C3QmgFJ4YgivA",
  "key33": "27uXaBhtg6cSpDCL7fYVzx81BjhYAvhKSjZupSttdXYK9MhetPaAZup6DeMWbJMcVLTBuvqAfRCUEtkBvLe7vMG2",
  "key34": "4P2rc8daXwAeVKYdPAnd21kUq6GQkSEqd1ZAsYtzG2bPk9Sfy1NumXZL29VDuC5g78GoH22TgKJ1M7Q7KoMtot2K",
  "key35": "H8Kjwsj9TCf4EDVkEfKkE5mFyUfdJ3czCiuBo3M53xCQbAZqnsnEDEwg7jkJWsBrvQczdvByQqNEoNTxgihWpsC",
  "key36": "2ZhpX8rhLpMJsYV5s2kCbZb24dJ1vcze8DbTpp6oS3bsA6rxT2HdaGj4WV7uKf8xqEp13ePQv9tGQWLShGYH4Y6R",
  "key37": "386J1WWiDeWjoJXEymQuQL1KrEV5oSgarziKWoTx52hBzF9e762AE62M8gUGdjCWPRjiVe6bRJJSMnj8645v2CYq",
  "key38": "2iLSVntbndwjvUdYkmxFYPEnYvKwFboeJy4aSQpSoZNLYRUCAmtGPGb2R42e14i8iXv3hHozshRHn3wxGfDeDdRh",
  "key39": "Q8pT4ADxixpaSDL8CeqcypkoaDp1Y8rvGwLHYS5JDVCcBMSHJeBvYBEvuuXBRjkicGY72Wg3eF5ak6wAitTPoAv",
  "key40": "59kr8UBmuS7D5sLw5drEQrcWyE5TS6jNmcGYJYEnuwatCugrwu74kp67aU125neVcRjfpQSnfZmS9gpBUDKQgapA",
  "key41": "36yhqqbGDQJUrehVeQa2Yzyz4tLvD3PEQ4VU3JSXVSBsHtNLr7DMbhcYyVKq4fDPYWFZiz2wvBtAB7WF7aUWzpN2",
  "key42": "2nLMAQxJjJ2txLYpZYMuPUdRFpqPeiUvV54XLnLETiKMx6F9hQa2mxsGaxsvnb89w41hQoYzT2QdknuRT9Nfyz57"
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
