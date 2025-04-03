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
    "5qZHRopQTm22cTL3RCrt9oQv2EaLTy4R5bvVzQBLqsqEr7sBq2QK3gaCG4PvqhhZD3Sn4hrQDGVbvUT6Bzho3yCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TkovpCKuxweitGRzqVACoYoJ46sGwpngSwUV2f54jaT6rN71sPwoG5d3nkgckXiognYvaWky6c8r3RBHWm7LC5v",
  "key1": "4nwJsdcKXaDZMm8grUUZp2gVR8YzfBTgLUK39Q6o1LNQ3FjfdDDz4Ms2stG6RBVUrMj2MDUsUVhKbDGrj4jF4bqC",
  "key2": "zdTnGYj6c5jmiojhGRiNDq9cABDyZAhT1hQoMKdce1tabXhyo3qoPztLmg11eEFhwdAoa7UDcBihkxPNizuUurC",
  "key3": "5yjL8jPvXNGeS6hAXgnEH64k6BN9wsdAJfxCycqxuqaNpRj1i95G2usCRMMBtkHL62VJfQgwpdATCycixAHrTt8r",
  "key4": "44dWnxSednKAuxpatN7J5UAAyd9aCJyZPfJq5R8Y4ZE6DJFHy34d4D9Fu5h2FfooL5Eq4ftpJHUzxRvcvoCPiXki",
  "key5": "3XZQrp9D8e7krCWC5dgjH8Jv8jHHfnd8YjKcdauBZVQJQ8cLyNM4H6H2Yc7ABk72GP3mDNguSAe9TkPLZ8nQKHyM",
  "key6": "2Zuy5WLFGcGoEEe1WPVebNVRWeA11TxRBPkmDs852WTdGx3eEGxA6HdeemA46ECMsUNn1668cCG8ZxJajF8HSbSR",
  "key7": "aLEeJGif5mXZQJihQMFND6kJ3eHdKKB4Z9YkZgFCthPFYxdPgsug6w3UPyuSFJSfKKFayEuwxypF8aQpGJvM42h",
  "key8": "4wxCH3qxAg1u8fyb116Go5mecMmQH96HVWYus24ugTAPPMCdkJagHw9fYszv4H7NyKARmAxB2Z4SewKEKtrr3VUL",
  "key9": "4H69XkMwzhMUjyZVn6Lh46CKGh6UsmAWHZAoF6PZBNJvxYxeY3MJSp9vW2AsbDjYZpckFXnU3bUZitr6fPc6dw1D",
  "key10": "5QWtuTK9S52X6oN2BYa2VT2JpfaW1u9oFkLui7BQdLnobrqbqMz9e3Ht22rBNjrpAX5F7PzKnHwnBpTKLXeVUNNQ",
  "key11": "4QoMK9g5iJuTgnJ6YngbcCNVvwYxZnQQYFfeWZmkPBkBkGZL7cK3ofb2VwAKCJuYMMhcxCWxvJVd5KRQiaXfcJJP",
  "key12": "59EwqpqyfhrypzL6DbrgEimyySxYLcgx2SzuwMiQ2b4gFJNDrpmfgVcjwp7cLQQB1qaCEbGR5ZJzTDjHfMQ8EA6S",
  "key13": "2CdieHCmYAtDEes6XQSqzKasWZjgwQfkDaviCPbb8e9JgjQ5uAWUs6y1y2GURaa2tdhSZtSX15L86JFWM6FiDEmF",
  "key14": "1Jh8obR3TBHSBUpuYDSuHB2uk526buZP3q3v72AELWiKfcNKc1KgTtFrFXHMLzrnxLD4Wh4sb5VJwEwVY4XEzTJ",
  "key15": "5DPNZid1LDHD9qYA6NReCfwFvazbDhaVVNksXugRJHjv4Kx2ASpZQtC1pLdrZbYVBSqo33ByyX9g2dbqUqa8hL6o",
  "key16": "5NgcaHy9o3DEcB9YLussL3dWGqJkULHeYLUjFvoDZLktaZ5UbNSqoFUAVuLCjb1B7nk9zZ3qzUtfUbLguAYBmzkR",
  "key17": "qsR1gU5vK6LErTQ3QARMnKYt5rELJTmb8tfXuTzbwAmQFDjxfAWuDfsp5yqv5HryW9q9dxgao1amztGXm3P34nJ",
  "key18": "2pxMNX8BpwMeZidoFtwQgZuX1JWBzTZvodgpRQxcisTvm3zkgKKd7SSSfLdWPFJhfJGFzTg1KDaQMM6ezKYtBydo",
  "key19": "kKrPiNsViu1xT59rPbX8vqevZ82XGQk12ZLim6tuXcm7ThafjoMwWqxSrYsVgWss542uMN2XJGyeB7mb6GHhoSR",
  "key20": "3Fut36zqMJYxEppFDfXnEsk2RiBKgByV9s9rAKzTPf1QFvPXTtfDD5Ycn4vLFDTvqQLS2bgRjn5f1ZrUg25ruX9K",
  "key21": "617SQVDUdmfnXmK1KheYzSzZYopPw22FjZEpKG8uKQTyHwizq7TJVWJKGYTbE745U4FF6A8NonNybCQxpt6nmjwe",
  "key22": "2SQcTbGZyHvrFFLxJ9ZtL1QVfgZjrG87E2NUW8HJxHyNH2DjqimY5vVYg7zHy6VPZ9B7XnsJrNi5LcSe93nURfjB",
  "key23": "4yczUcoEVRmrMgCmYeGQ79hJ7sm6kQnz6EN1naTrwC1Qf5hbG43VX4qYiuVMs5oMo5pZ8wEwHsK4hwUPwQbaekYP",
  "key24": "3GphAFU5ZuohxxjnzyvK2efU2JrETvHXDxtAeDNnwYD1mgipSdduRAUxENeeYLLNhb1u5S5iTHEny9K8VE8MF9qu",
  "key25": "Vz7itgrVAmqWNQdKHx4GofgbdYNCM8Wk4A8om48P5e27fvBVwbVTAbAQQXxuQJJSqEfS7UKiQi6biqvxSJS5pba",
  "key26": "3RpWc3oeSVfdkPQrWKnFFRAcUtjMepCmMsottkDYJiS7qMnP8Yb3vyTZ7pPddjoXx7X2LLAHQTf6QQYDXAZhFjif",
  "key27": "4S8Kmt4DRWRqiZApwWvGTSZWSK65qjjQt5x4rEBwMFGrZwY483XMT7eCiL1EbRndhweBBd5N22XJWmt8NLqZNjjR",
  "key28": "4ynUzGnQaKqcyBCvTpj8hDtLuCBZGoofALsDdUCVPdWjFbzbWiFdnKf1hoUKiNfpN6UpuwWeDj1GwChz28zcreQM",
  "key29": "2NnsEvsnPS83GMgKAbX5gj5BLUEUW3unJHaTme5wVd3fa4Wko7AeEWJcsTospmeeAUjV5MmysptCzhaaXtHJ1WDS",
  "key30": "2pwHPrMz6FwaCJNwoCoB95PRHK1FznpYQgbq5FzrNkJEzffFMYSyAzgGzoaxEKvaEygE7GPmRiRaUwLXG4FD3iWM",
  "key31": "5Ab4QztfA5VKBpRHFFABN3enZ3ACkBvL83D1puXQN3cQc5NYDY2HYCZRc7ZxvuSWYL1c6VCMa2bAHzCwBWL3KFGp",
  "key32": "7bF6ZiusJsbo9nB5QXTCzof9CdkTd5KyTyo3mFiq7WwfLRwBFTwjp2aUfZc38jBkfhUcfXGdkLe4P2bMvc5UKFm",
  "key33": "4qiXhFphE6okWYBwS1H3Gwiv9jn4c3rGf8jsvegXZd2DwSUCjFChAQyr4UQTfRSvRAB8PmEKzTHtpisKQjqmJNEN",
  "key34": "5WN6n3juxXefddMvKsFWxYtvwC9aXwCojycVExw429AJUr1EeksxUYpqoUJLDihmpMGv1rJcsd8HGKTnawnaLsQg",
  "key35": "ouwpMenzTV7mT4QGoCEidUznKjtj8fVo51uspfgJrqxgGnsrJXEAYKr7NeHEtJq97Ww2Y9TPux4Ga17JdieHHZA",
  "key36": "65tzRxowUSomKA6o6yGxRCno7cpZfPusfpSV2EBDSUiMtTjshSJHS94DF8JDT57ENLCXGtgXfD43rr6VLmo1eDjx",
  "key37": "QFmKNEV4WcqXuKSwJZkE7MsCtPNfF6rtaeLj2ZQkf6R5HJxFPDnY3EWERcn6fmp8UmDz4G2nU2svriUBc9e1UNq",
  "key38": "32p812HJFKcksPH1EJHS2iLNDWaCRkLCUPgKcve1ZL1kB7bEvFoiyK6PBX8az2WPVeV4dpY1vLTPGrprD5ZfBMhi",
  "key39": "2gG8VSTxtWRGdUEQAfHZZHucxUyNT674dMRmJvg7zpFEAN9uKB9tBDfaKzeUox17Gda68uuMzw1kqqs9EMD7uPNP",
  "key40": "RBa3m5qxh5vCCHmTfXA7X8UKNwiAjDntkibbaE35FYxi91nWSock3oVNpUSpuec4r6twU8nMcfuHNu8FfBT42me",
  "key41": "4wpFvGWUnvC3W8pPHzqLsf4Ncd9iuDB6vFFBKuuEwmjkrfq1WS4v9rFB53KBR1YfHma6sQm8tCftsbfNcUVBWn1i",
  "key42": "2URsB3cE7YuS52QLRSzzGhbuR2w8nu3uEM3qyXkmFRgeYmNc6aUYw1Y47ETnE8dch4VfNUcVhGpGSqicXB7oDWod",
  "key43": "MkW6H9p4dT1SxcPF8rRYt85w6RKfevoYNTNJqT9q5DtwTvMoAFNoL1qsbU4mpRyy33p3Tb44WpCfxE6sqWtnUpc",
  "key44": "a6EMpbuYahpdzDwQu5BPG1dQT46jN39vz2YkKhnAbdtzb4fUhzBT72gs7isjuC5GJ7gT3doxRfaRASQNAB22mYR",
  "key45": "4KhLfwsjGfsM7bi8DmoqGNSeBfbfqxxvWfZ6SwNxhAiD52cusVpo4BgKDQeM8kapdPEhEJujA7dc8Jqofc9shBy9"
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
