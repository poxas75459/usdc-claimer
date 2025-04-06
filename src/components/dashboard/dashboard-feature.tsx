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
    "5tufef5yD7Jc32MfjpyLy9QWVeBbAwgxVUzPuHq1mtNwEKuHmsSaxVfuYQtPgyKsD78WKmZFVAf1Gghtg4c9EWi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gtCwYL8kiURhTRUoLkqJ2YYFtMsHgGJnMsYxHhBhTS32AJas4ddzbtjzPXuGS9aERkUk2BiiYgSRaGE3gLCfNSd",
  "key1": "2NHo1h5mRhnkNDkwnUPD7R3e7b4Wr6sEz9Cdz3ysF27Aosb1y6WyRozhSBZi1yTVedUftUtmBdaQcSJH7j1ZuBgk",
  "key2": "3niUpXnZTcGgRtZRSu21Roy9SLZ8vuNZc5Q76us7q8dgSgz2YdbSbz7hRdYNZhT65UGHryxyeQAp2AMVNBbuqRGw",
  "key3": "2J7CiTBHCczHp837Kuhgw98w1y6qLHkPSPSwNG7XAtzTfbPJYG7piddQZuXQCjdxAKMDTkcZmegnnSv51xk3TP2h",
  "key4": "3Yngf1eWwC1hWhrQjQPdB6dWBo9UJsR9wr4YDSFYoXg86vuLE3fJRoT57Riafx4g8uYpbbzHyuseoLnnmhn73gx5",
  "key5": "28UgNqnDQEXsCJFjcMmzp4WBijadfsamLLLEanEkNJcyEim2kvnD151es9tvfd3uY8Kre2jbxuK2h39TXsfwm2cQ",
  "key6": "3TxQT9DBcEcpd1zYYKW6n4nGZsQqgvaKXb6EkQQR4cLwbvMJcQ9F1kQerJHhY3yEKVASUHhwcSZ84DEj6isdcrxW",
  "key7": "2cEGXi1CG9UnGmzLxzTQBcEGWWFsc8eDzURBSY8M5KCAbQEHny3XRmv8UbUeVhnUdgxwKDHsGVmd7eFFRa3YjHWy",
  "key8": "52FArX3fTWwWRsgc9h4c13zMqnwd3Ux8icAWwmPFBYLi87tjSpQ6DrTgkoLv7vNtsXkajPF7bfWsDaJ9e7ZrmfHJ",
  "key9": "4cxfDsWQ85RcT9BqBLd6qSBNkn8vdyiPGvDam7xHjJKTfY9pNbWddNrVmvQcKgfZ8pJCuHUZu7XBVNRD5fdx1q5u",
  "key10": "3yEFeDzyB1DM2vin69bfbfM7Jx7b2ynHvjeG14cADQJ1zKqAxoVFrL8ho9Cac9k7nyy5dabXZM7Gxx7YifqSCyx7",
  "key11": "4VG8C8XEbc8ucwt661LQAYRYcNNUc6V1ScLfT238xPzieotsDGjshG3XA6vD86moxnZbvmZt1GiguuRijukfUBFw",
  "key12": "4rdCAaABoWgQpPEKMoWuwZ6ic5ZnaZmTxhDpG1a3wD9Y3wAWqjeAUcoyRGMwDCdCuWjmkpGB5h3NCuzRVKSzoUP3",
  "key13": "bfVPc6P5pNd2uuiWyJMVr7328Hd3tQXmQACErvV5Utmnc6MsYRJa5obDqUfZPSPv9DH7P5xtkxxwCbRKAw33oSS",
  "key14": "4iu2UUmA7SDUaaYhPj3LiP5AznPnzTAFLbY897ezoaJubedYWJ2RbhwryJMRSbZyi8N7mUtHbuHrqSg3tQokze8g",
  "key15": "65qoVh2qvYk7yntbYsKV5udG6JBYQhhaCPBATM6VzRDM7TGHsiv3U2N4MV8fr4GwmT6phJo8XfGLkFgVUrxpGxeA",
  "key16": "4qi225d9X2jpMNWADu9SbZiSe7zGQM1SuXyLWhMZ4if5PXmpGkMeQHC9yDWbnXoHT4oT3rkifrqKVBpMr7bsqnwK",
  "key17": "HVs1SuWL9whFwHSMr2JNwaQuEDQ1wHY2EjnivNUTtRzPGKv4xaraTsZ5eRTaxeo4p2QwM46pdVhZMAAt8q1EWu1",
  "key18": "HqWZ1SAnjuzd8xyE1aiDVesWiMqzvbQaXebkvk6fufnb5Lwbkovfi5euVY4S3abW9dgVdHoPw67g1nCEYzrvpo8",
  "key19": "DRLDHtb9Wrv16JQUUj4JzfPv3LaUQ2CxCb7UgYPDdWQzTtqRMqnvXix7f3bwY6vgLhZ7WiMFfPZ7PDrnojTMBie",
  "key20": "37Rv4VTTobrGyfh5VLuUVYBpPBux1AppaWrBTqz4PzEDTR79A1wTSqTnB3QAbbY6RWtLuceBD4BY56m7zxenFvd4",
  "key21": "48PNT1dbXobkFKQVB753toKSZa65R21DR1qdHuUEW5H9wc9omQwxVCHpVceHaraQcHNC4V8CuLuGrFpDt5X2fnGg",
  "key22": "4cCX6wc5Tv6aqDt48qsM4C2N9XSgru9YDg3mmeFXcDmVzbVuxD1iZpN3gEdziyVJt9NfyY8ccV1cmSM3S5DfZud9",
  "key23": "59xYV9wfSDiqQDvbrSygVqaU6dHuQ1BoxhB9nxGTG1K8F1HRkSMMPkFznnP1wg4iEePoFe7qVBtyxKDx1PWZgjj5",
  "key24": "J3y82YfcBLab161BqY7ZZuRuX1VkxYcNynNfv8VbK5kdSyUpFC9yBJ2ptbskAY2Ms7Rif46z9uC9Xz3QMwLfw12",
  "key25": "UFVCmSxGfNnMJkKW2M6tTFwjUB5BJkxPq6fZLUUobSukQv54Sim9iZysKWv92TjiUNrJbeGrayvtDABi6U5oS61",
  "key26": "ZmjfrAkLXQ2RtFcyBnuVDHK98DDGDFDS89SFAesxfVt6TG4yrrPz7YUHeHw3EfiXnybmntcvVv39Z9cAWU5aeSb",
  "key27": "2qn1aHVaMeDxucYfGGgxFdYKdpUEimHKGyogfCrpheRf5vFcXALSdgZZ2343Ho4L2Hg6RWoT1nHHfKGHv3ArZ2tB",
  "key28": "gNvkwNQ2k49GReB1KARzYa78k1ZWJEUf2sFFYgeqj5g5v2ba3ZLqN495E9pvz8n66zNZUg3PeRuAv3MMsuE2k9A",
  "key29": "4iQ8d8wd4jbTASJS8HVpMzxL7T4jWX4WkePCX7U8SnbBsqxbJijwB1XSCzdqktpVEmox5QZS7y8cLkBbNou4Teg3",
  "key30": "5skJpCrzBiMfSSqc7jWnA9ddFVnNSVPfYbpJwPw1kRC7AHxYKoyBcRGAzd5MxS5eSKJRGzEYcez6Lbutxeo2wbug",
  "key31": "3BYDoAATszzLAu1Vkg4WfjpuhMpokPd6ADRNfRdbutMYcnEd3gXwF36kXR4L9R3TACSpt9UBi3MXLxShtCFGCW2P",
  "key32": "2mz3ajugfzftQzjW9QQsB9rTm8poFsczjkmtxAzQPA9L4TqRY5zM6sd7MvAa9j49rmawKxbwnmTWrLdPnsd956vq",
  "key33": "2z4uAdi1GLcNNks4tWfYWvqQUKTkPnnpYCvbucabNKVdbTJUezzvbFv2KVLnQgtymaS11w67zNsYJqKBzRPW6GYM",
  "key34": "5p73tk4vr5aUubqjRR3wxeugBk8NamzodKjRdoQXuq8g1bkXeye85qpwQc1s27yj9y2e2L4eJdHEyTLJVzZVvu3Y",
  "key35": "3xua5VvSB9EcGCMfHZwZfUBMAqspp63QTrTtPGCBVrbEz63pQTRPKKwPvE2eqLdnK2pk1BVjvNqfibo4mLVZVj1S",
  "key36": "3ytJttXyadUrGPUYf211PJAbVFSo4n4gYzoFyihnqY25a9y4oXrpCTPxdrysuqPFN5UYXkRarNdumT4c3PDVd3Qd",
  "key37": "4rRN4PJsJfAnMYrZyqnvSErsXtKv3CmuG9JQPgTxtEFW9e773wT8ZmN3tvgUK4FjRGoWdKgDWtrkx2b46niyQNz4",
  "key38": "2sSLqKE81U1MGryBDYmij9XFXEZJbCycysnDyiuGUqQGme8SpAjjKNWqDvSbiXFmyykhqQeWrzoEKPVVpidqCzCq",
  "key39": "2HuEQgEHa52uaPbxZJgcYXJYpPMnM2Aada3aarMuAVJYSdTVxfuzA32fmXaS72qREnY58d6tzTbDwyxmmucem1Wd",
  "key40": "5ZtE2xXcZDEUgBEX33GeVTSvnX6VNwy65B7NojwpA43taaevx2FtXyKZLLnc4Hp2AvgzmibzszKMcPfg4Zwbd64o",
  "key41": "4ANhVroG7aNSoPML7mUxMftnWvbxUVdQqCu7nSinwSBpAicnX5eEm7ztByJ7gKpRy5wb356GLUD2hXG7y4Hfv37k",
  "key42": "6151s8EompVMj5NRwWryQjqL1oPUQtD9QK3m3Gh7iqAVE49owC7nnEoEwktnRA9smJVvg3ct3C5nnGM9HfpDjXc5"
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
