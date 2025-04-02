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
    "4mdGucPfGajj4DJPFmFFDiji1E88uHWXK2nka23RN6jabX9KyoEsAy13REehozPx3JgP11tRQvyCkFFWwRwP8jEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EmVMhdSeqUNiYf3hYutQLhTHLnjagJVNHeLvh3Lb5McLpCEzQYwsDLXUo8pmk4iGgVAaKvmEW2NVGWBFbrXhdww",
  "key1": "59HDwvWHNG278pMhH1pTNrS5pQUEYckrhHHkgt6GoPvvqd2hj1JoBUkkUAYajLMgFVrDzyYyKTFBUBK3Hh4e5ukA",
  "key2": "2LKQXx4Ts9aHJvRSzzPNs2u9ayJbWvGtqv28nt4FNGqEwU911DZBQTNcUrUSFWRu6kfck1EufXJJGjVT8Hnp1SuB",
  "key3": "29gaRDfgS9FZdNbQTDiWmaMR9xNPtZMyczFn8WULmfPZHye8QJP88zoZzdBGHX1A3wvZrMDWD5TRngziaZ5vS6CW",
  "key4": "3hmx4GLE9EskTZremE5Sqj5b4xvg5BsAj64q5Q5kRpTxw73eh8VBJVaXHWFifyzs6KV4PP5waqnP8akXLfbuvGNU",
  "key5": "3XhXHmgnktfJU5ZGCyke9M6Bq4nPSBz6J8JyvQSFJ7QoBsdPY9r9rsGngKiqv5NnrQEPDuZQuzVxWMf6AQsasB8m",
  "key6": "nDZhkBairWMhD8my5mZBWuvpidd2TfN9ry1C4csg5SERbDPBjpxKyB7WUx95Npr6ULHqn42k7BHHsyny9mdrPJa",
  "key7": "5iwjx6eyitRKfHLuQ1a65ZFT53ATjU9CuBoz2Xf7BjbxgKszksJW68qkZsAJu4xkmSrkR7j57SSaPLzJcT5yN1qw",
  "key8": "3JqaaKRaUG7HkSeq6efzTqvebmzV7FP1SN3NLKq6Wk4DfqFPWxu1yymLEjC7QyVS1WspZnUe9MTUnHu9a24KuSDC",
  "key9": "5oAgG4cV95z958WsPB3PgxCwjrxz6H5SUdY3pEtoXXGCtLBymHZjnGtVwGt7hYem1WxBBdMP2gP1BSGp54zV7xj8",
  "key10": "3vnN9rR7E2eiWoWSLZRA4JKDbB54F5mZduekPgvTxTHJHXsHiJJNEFovc9ywhqWbARXwikF8TB6e4JZTQM7tD84p",
  "key11": "4jy8xPBKcw5PbKCGCdsor9i9qSdd7dZhGFwYkYCk3pwq1pb8KEDEM7kURVbBGoKroeQ2QLgwanhzNQyNHxnwT8on",
  "key12": "3u3jRahFmg2LQxSSiH1YfYX5ez3mpR29kD4L89mZzdXsyQicnw2XwkM7Q9tBgCwcveSMvFvYSKfw46aUyDVZpp35",
  "key13": "6dTVwsNAtxBFWxnYWjKLPvwN18GgS1nJtaMsf6zJ632omFvm2WoNJVBzfHmjrXZ9iiuFQJ5HNaCdLhYCwDiLqKi",
  "key14": "3AthQQZqkv45feUW359neJ2BwJQ6gJ13MFZvLWpHbcRmm4nYB19ryzMnWvTLvc8GjEpJqhG8QmAkdtbMqHLNy2LP",
  "key15": "3VDsZ7XtFQcZBnm2Dq3rRQFyp1jbBF2v86KcaDdiXCBU5UpX5YFcmT9HeKgjK3DN4yg54zBGY2JL8proi2t8zkLe",
  "key16": "5eJ6Q89P1Kzu1mfK3fsXZYdc9zx5RdssSheRPq18cJVjFPZtAbaCgW3ZDzwS89vQAttvFMEGbwmaA1wrMU8Lz7gL",
  "key17": "278bzayBBUL7zmgkdi7c5tuoDLBTvJKqncMzCx3foFb4SphMZXbdfZn6VibBUBwtjN2CiVToBZ3VMoAguVoP9Ac4",
  "key18": "nJwQGCZZkZVubzjYQzozCUXXTbevaZAwZY83F5BbA3BGMuJtKpnfBrUaEDhMGYV1eLanURWivBY1kq8N4SHspDp",
  "key19": "5fSbDoeFiiA8ZA7bXqg9h4jKkjsdqoe6yvVNrnS8TxPUirVpCzwwFXqqz3pMkvLgZRuVpUkcQwaGzzvSno3tBHgr",
  "key20": "3oDZuCYhoF8yK9aQHK9xX3fPqoaXsUqoXCeKZkoqSGqC1Scb817wRLZw6XEdZgWsA67WZaCPJZ5RMtzrvvHFm2As",
  "key21": "54VzngT4AsnxuyxC2kDymqLBPTvjbWjYRn12kkySko4ibXT4G2bfAgnkuK6KuBbdingXTZLUSSgPi5B4TjPc6zhf",
  "key22": "5aRV7ebuSDNCJx3XgBEXsKFAPyZ2SrusCZrsmaT1JD8sKhpZuY2NYGwcw5usFAxntfk9gDNN31m1c8Ct8ut4Hfv8",
  "key23": "4RGV5vmMxSozL1KWP6in2gZkMPsbbpZqbSEF8n4x5Pu1jkvasFqBg3VDhBzq43uxQxYvcVsPHmkhF3ao3v87EScU",
  "key24": "2QH1q3XYb7Z8CYy5z8buoYJbSoDcBwfQA8p2a6SEGgcbjXoeaUarAJLcwxH27w4izHNXru3gZq2xgCfbCHKTqsNR",
  "key25": "5jnn7SJ2Ug8FTYptb5ov4NoqSBTf1cG3UfDs7jWxzUjs2iDeb21fdAq4aKnu71ELTgFqgG26xLotoFN3AA1vqq4S",
  "key26": "5Eyym8fcFmd7FhuqHh1eeGfDRiakxp65ziBVwa8NGnx6JfoJLxT1FysdxdVFBTF7H6F5MDXjzaH9DXfW1aR1Fabs",
  "key27": "4DeMcb1thT2UAL9KBDu7gMzrRBEMB1B8UhMFBx8CtJyUJQfdAC96ujaqLYqsp1GuHufipVnRCuyZVTy6Wr9mNtJL",
  "key28": "GGckKTMU35vK8Geu9Ljvqg6SZqyAhbkW6H7x3BXcqRo9MB5mMVWXmkrioUYPy8r37RoLp1z8pQ5fx9SxJbTNAEe",
  "key29": "aqvKCN1PMQhFZUUPnymAmiuh5PxAGTfa3MK4J7ikjr3euPbYUwhNpAfR4PxLXXPdVFnjJ2SkZXtEWMfAkcTZzZM",
  "key30": "52A7GxQp599DKjqVepAMufTnuNaysvhaZbY4Nk3aocJKra6vjzwfEXML6Ya2mnKGioWpBDr3EmvKA9wtjoGqP6sU",
  "key31": "2YXpFQ4BAfcG4exaxbEeaCVwbFxBSuzo1qJVu7PP4GEQRPVZpScbnb1utK1i3gA5WHKahr8R2bTmVfaQxraMamkT",
  "key32": "4yLB7KQe1W3s7k6Yu16H6WtrgzutA2vubFZSfDB9tMJsy8oWz928q2WtYAENSG44Fs9GVcdfJL96fS5YAVnaRAhb",
  "key33": "37uzPRrQoj1V9AJHS9QAoP7VqDZAq938wLu5PphPaxWXpYBNcV18AGbKf6AXbK4ge6yzKYiBeP4sF6qBD9zqfg3U",
  "key34": "FqFhhHPuM4d792y88TeCqGwfjfhEbqCD1LFxXMYyCQZKNhEP5cVKHXDjhbYFLQYJyo47PfgRt1cqiYS7DRH9oYi",
  "key35": "zPR8nbEV7XXk8LFnzHGUjz4xU3yXGnLXiVp2dkNa4WJEEmSEJQEqKDqgbU5yGsKD98Eg5r8FaYANXmTxtpyXFF3"
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
