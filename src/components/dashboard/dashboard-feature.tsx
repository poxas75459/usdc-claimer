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
    "4GMmg4Qew53qFsPGdTaMUVkBpgeCQCSEdKjH5LaxEFWyJBjCWfhr65qGgwytqDh4J3hsWtitpnheXaMjJ2uB3G2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vUaHb5L6zJgncQXee8xY5kgEDYhQsD8bkr4NnSCGf1VDAwX5fnzPgPihCcAGXxKi1ZpFPknmQbA77xpHL5iuCzB",
  "key1": "4esLq1g3T1KxkXNrAbgzGj5QwgZrXDUG7GM9VqsNRgUf9ZMyo6dDm6cQFGTNexDkrexGDMzdwwzEcd1HPz3xkKHa",
  "key2": "5hx1XMsr2o5tz5C4AaRgBTiovZn2U3UGw9kuo1KwtbKFk39Yg4fSgozpHwovN2LydRA9VoHsqdDDSqCegVVkEpzw",
  "key3": "3928pHvRZ7uJcPVwyovWZBMg3yUjifBhi77cp1XNnuU5ziYCqUExcZBQJNqfSkeqq61jFt263vf7eR1US9xsCkRo",
  "key4": "44fadNDN4aC41CA9YiABzHaeFbXgA1U8jmrj4NbxTL7tfJ6YkcamsJyBTHmXiVe9J4xghQayUQMkbMfXbBmovrAc",
  "key5": "4PAvLt2YXrpNmFixr6YkKKAs1y3EwSVhDhau75UJBFk7qx9jVnMQpMUz7rJ3pdKq6R8mamgtQpEd8X6WUmvnj2Jk",
  "key6": "a2hAmADFS9tWHvyotK1mXoB9MhoFCbwwWvrmZZGtgBtWeNTPbxdUvHjtUkS9aZ4E4DKWM1UybJYGxH5duN5rCNW",
  "key7": "5VncHsEH2FCLCke1xAovfap5Hc7gHfnQ6i26uc66RZknit836rh9Z7PAvcKE5UdzrL7ukD295tM6muGNeQTknTbv",
  "key8": "XmMJHy2PPZVyrGMKHPM3L7FTpocxXveEntcnCm8PHWT5WT7DLSk5wvhYnwuS6tfuqxt6abcFYSTHYzf56krrUtY",
  "key9": "3HeFs3bvNfWhWkpbVMAJBPZVR37ziKc1rpXbbBG7aekVHivQ7RfmKWudt5F9KpN1AsnrQ9uW9CwqmAMdCQ8iuSdx",
  "key10": "3T4u9F35MxYgScrPkEPrE42gggg4tEvkmCLATbAJsAB835Jsduk5A8EB1u6n8bF3ycU2nDrvTtxf833P6RzpiNiR",
  "key11": "4TAVC1db3SFic6PZ29JP5mJjPepPq54UY4avwSQzee5ZT37HPKENcnSumYVw3MWRkGFKPMeKEXMrJBsqp7h4Dq17",
  "key12": "CPemywEuzmb7p1uttGhJLPupi2heSd8oKWrKU57S4axYWntMUfaU3JFNpWLCswnVCNyD4YAjRFGdkYCZ8jiwsWc",
  "key13": "2Faibrj3AZ9BxoyT1F85q9Tp89qV1FY4rfjJL4UhWe5X7ifSyDWD1q1snNH3BnN3BXHPwWGx2e8NCDUd62qqvx1F",
  "key14": "4x84uycwrbhnhbyxNLKUowxVbz8yzVezYtrcRSatbedXsKYxHxiaJ4rNv7XTGtx3Et7XNkzqVLfUsD6nRiiRnM7D",
  "key15": "8DDpyQ22Hd2S2Rv8sArdg26UXp8oPA4fQ881jcGuztBYBi1YtT2uSbKXAiViZvESN79YsyUuzXmBenv84JeUyhp",
  "key16": "3BrbdzPP1VS3FhcmY4U5HMUBGggLgbj3Aq2mxHHP2d89sn9hctqD9oheZSYCn1dpyddRNbGtMuWU7uFRexDgx896",
  "key17": "2DyzR17xMygGB9yqJoukRn5v3EHzRpnjpBy96G9Cx65xmGoSDfpCQWBV6fGmav3sqAudxcWEA9b721tT2hiNDuba",
  "key18": "XHAAhnwrxEfwUyDbDa1So77TuZxcqftkJLPw7EQjkqrDg1vi7hT8ghZuGfqqDaXMxo2anNdPFLCK7C7P9wvpHgK",
  "key19": "4t7UAhD5HHQRtiKG1Xabk18EELyZg1gPnLKdT5yAvZU2qaFCWAkyhjkocGARSDeeJ2CBCqrzBsFahaaQAumtKjp3",
  "key20": "YnbwyMxqK2yrh4V69W8WFaq7rNX7bJ8Cgd7JASUhYHoLR7J8fJM285KX9iRQTeydSkB6GGzW2cdroumStTr1NQP",
  "key21": "4cYg6wKWWpXw9VUac3uuFHMDVtHde7eecUPq2EGD3mUXRM846WuqVbrQLZA26Fi7fF92J5Q7mk8DhAyG6C3Fz9Xy",
  "key22": "5B6yktySMYan2x7vhypGj7Fz6E95eGeP1bYtsQVfadHPRSKaqpBJMd8c5HY4mPcv5XioBJwoib25XLRt7PLVDQg4",
  "key23": "2btn4hHD9yKgV7ghRRRWgH9ipVnJmSp7GhunzBGSGT16D3ffL6QMraFk6CYP4paBs6jBp3endb5myrbCBrBPVJjd",
  "key24": "4BLajzj5JG3vskrBpJYYEtQLjucPAwRM3y3HgF3n1DojKP68gYAZVp5ac9riEV1YMEkoTsDRs4cyxjNgwEEDRqUh",
  "key25": "4YZ2ZBMdZnmJi9U8hWZCiT1zSt1LVn3rguN8y9Dqe2JZqojsu8t3Q6K4aGG2efpoPqZym1xBQBbyinbQqXH1JPC3",
  "key26": "4JVhy8nShf6W6eazrUsX8yduAAMvpkDUqQhq8x2irjvVanVzHuXJhfFWJnzQubMjL2nVGK2D3YbuLMNUdhvHiXMo",
  "key27": "2C8152y5sm2dKMfuNKRDHeZf5QALiPJKqZep7tDHSbiTVkcmwfU9y3FGYgJ5v2LjpuwndbN7Ljvbs9FZ6GptH4Qp",
  "key28": "3z5p1Mz8TpKmDR9Cxj2zkqtL1FZ2gkLMV62abj9WL1oaESCrnGWb2Wdgt4T8bfMGGLrjLx46k7BXeh8iruChW2MC",
  "key29": "4VKPL94NasAMKDhskNpPiMXbagqfaAXbbH789uzxPWxsKzQvnPtxYuXqmmphqrUZYrxKPRwi83eScTZ33MinvnGT",
  "key30": "GQseeRoxmY9JkrYbF8sUvb4zeZMjqEZ2vKB4WBzXLbBUjrf2z6oe2ZReayMW8otG4vasKv4UiUJvhubuJpNCrxx",
  "key31": "2MVxuGR8PCEjyawK3EajrZ4ZgpcQVr1KV6KaYPr5q7WNUQzBu3J6kr4HaPJU3vRh3Xbep6u6RBPRgD9Y52HfbRp8",
  "key32": "5EdCR7Z37qK5J7YHk4TmywP5vuoL9NKxjmuuFF6Qky6AenUgTwSCnJQMjfb9cJxpiugMFhFHs2LFwBGqez1bxSte",
  "key33": "2NNgz8aipQMrhN9nv5sHwYr8UHJJQa1MapYGDJ1oyJWbcPR2muyjbyHJWRrxqaYWe8mVn2sTpeEZombN1LutqASi",
  "key34": "4KUG7CUQiGa2gJnZ6Zgjp6DKmmNZLhAjYuQ6xex3Y9kdYjo4hHXLDboBkCu2PPyT3hDw3dxCxwQq1HpLWpZAk2sp",
  "key35": "4XdLqBXXVQ8mzH9yZsY3Ef74qnLX4ebKkKJhCcpEMXsH71EB2z44ih7kCt9mhTEGyqbtb7qAabecmdCtmTrefUVn",
  "key36": "5Fj6jB23aWGCcqikPrz9KfQCtTY9UQPj6oPGrEWvCAM6bMNGV32VEJzcke1NhLMwAEiJdy9XCxE8PwdQLnVQbuDX",
  "key37": "2YEzGxdFFfFyNr7Dggu6qrGZkMzjbVs2y3RztibujFVWz8L9PB4kk6JQZZhPzoQFnLzBWbgSpbV6ei1Y26Tai82i",
  "key38": "4trzggzUD7h6SKHX1ScUDGoBvWNfLtgr45SyDjEyEBSqHUqqtVNQM3qWWQBScEFdkdL2DC1mN1YR58Aun3Cig4Pv",
  "key39": "5VuTPcDCiQFgdsDjGAo8sLxTQyAFXghMifjV5TMo8zgrndCQtnhTn8yBiBfe5MnpCvnNa3vWWZLfKezh2gJXUqir"
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
