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
    "iMWJZnY7CGjKzcMDYAJymwqEr4SSQZbkF6FWeVXgWKXS8ANQmYGygdY5XLirZZRmABpTSMFXihBfkvibHAUwSr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KbQuxaU6j36je3aCRkndKmtc1dk1UJn2aaZBTtYzxHSbY2axmRXDcPZZ1CX4XbFJcRADombQ7EkEmh1fDg97kzR",
  "key1": "3ETAQbVxGy46Z9PjPvjW9piPdF8TaZ5s5qwhcfGxYzJCVrNtnNz3JQne6GzETnHDHx9yiyyooP8pJWhvoEdQbeqe",
  "key2": "61bvJSUhPf7MLSUsXKZMxR5ChPpkHPiuBwRi36XVJCHXuWwToeFuWvfcfiqtL3vd4Hai8gQMD2v7DW1X5DnurG5q",
  "key3": "5En3Xa4ecKtinWGRAaBjsyyNudGGw5H9k7qVfeWGWrFEM9qser1B8iVUWhg5zngyD3wtoVZPTYGvBHYciATn3C1a",
  "key4": "4JV4DJXZroym68dEzqk5kZ4YZDXYm5fiHiak5jjGYxLVHU2d9Lu9xU56EHY5E6S2G5tSHn8F3sXhuh7hSdxF4aCR",
  "key5": "5ps8f1LrKZES8ihytohJRytgqyuU7FBrnme1neXC2tCKnEompTmbJigG9kgoktcnKgLCqaxogdTdfS1bXvxL7YTU",
  "key6": "4aiUZWycoTB1r56V1WJKBsHidjTywXXyeAyXuKXMiGENz5idETPJ6C79LyHwTzfBri3oMa3iCvBX4pXMQrdD4it2",
  "key7": "cpp2sjMs29ANnHxLqWqAyeUAA4gVWPMj4btCe1ZGxmFHkeKpyyJSREGJicrGjXEL9qgi2yQTJfgY9qu2kNKTpfL",
  "key8": "25o2oMgVJSZsQamqYvNagA23znPzQjhk9rx7CwqjqACEYYkcJ55x96sypyAfaVzgW86iWLb3WhTFjGEU9xtX3xyT",
  "key9": "4fFUWmCKHvhLbSjf5gJeWUQ3rXUCCLb2jqNK2fp9xsMLvLMM24ahccuktUvXrm9kqfeRozDSauLqBoZj4s5ct5jf",
  "key10": "4cey2zFVBoCMgtpWvJo6Zdb6Da95BsgUkdWhVoEboP6eXcL7UMkXEB94ENkshbPMK4f1ina5fkhNb5y8t3UmiQWU",
  "key11": "5j427SqR6xfkJJuQNjjdzPf6Q8DbqbVt5kGA8e8fMfF76tPfWVRgZ58Un6eyJafnMyKUEvAz1vjRpdEYHi1kf4wh",
  "key12": "5zahXgLBrkgsmekoGwonP5YDdbgnRV9u9oqUuMsZHSEEkgGLhiD3ymhSLBxhf4cPv9c1MFBh3pGN14HzGnd2TZja",
  "key13": "5f4x5GeqPqpZddYoRULF6jJx2bRU9Pu2xuetzhNdYZfZi6GCRSV6p4hsDQ7NkA5zSyBmHz7kCpQtRWfhy3Ek3kTP",
  "key14": "34Y211ATm6oRktzVVwXnJrkM2MMRBmDKUw9anXtZXh4GYzf5i35VAF4w5YrMiXaYBuVizzhjEv3zXEucnUyvSrx7",
  "key15": "2yZEehSCwWSkq6TRhnig1oay5dsGvN9dgh5kyEQSALQhqEH6GYYcP9umCLSjdaiNm4ELDAeeV3gFcZWkck27dkgA",
  "key16": "2g16FB6K6ziLuSKdjTgSQQ9ZZJd6wpkUi32JZbr8Wr6qMhcqCv1QAKvTRerjpNd9ded1H8i5o5wNYCKULQM5Rq6m",
  "key17": "fu6WRjv917jYhCTtdxCVfUULDkUHrGXYuEruf4urMvtLR51dKUMEdzMRUg6KrPksXynRvbCkx7KEw82h4xTEc8Q",
  "key18": "2L9Q4G9v8ArJdDy7hhxXVkvBp4CqouZyVkhjDBWejK7hFCXx7wGB4D5bpuRt2rhoDYvFhgDD9LRnVRFNUnr5S4g9",
  "key19": "mAPgBPDsSk7xPPajTfnSLGS3zTVXb6WjBN15PA6WUw1AzjseNCkntR5GBNCHLMBZLaWXS5Vo9xnNURYUBM5FvEm",
  "key20": "GWnTV9JWB4xjFaXwANkcU7jsqFzt7Bnh1PbsBgQ8Z7WoyPVgaf8BoXsFWpqgop3AVaYsoryLkPKuE7UGyBKpL2B",
  "key21": "4zxKbL142qJc88r442MTRdsLPpyVpxetx9cSJCoCiRdXJetw6qLcyuFCcLQZaPLDNNCnFLHSbpLngUQDGcvByU6y",
  "key22": "g7tE8c7UnDyE84Co4sRvvaEKTmh5e7upkpCT5F9FJQYfkGFvcarjMg61HyNytjadfSPuSQuG1w3BLcAT1oNThJP",
  "key23": "33t7WTCWteWTr9VNZWbPMCtCYrjLkvPnVCf3rx8QM1LPsYpcvgWSZpvk47YphV6j1NQSYUpriq95KHsQLVukMY4i",
  "key24": "4HiH6y8LMjakpEzLpnPJMZojt1jDCxm1ncHL3Sh5DEax1dgx2EAcCuyuezdz8vRHb22vJnokvP5o3ccJModxwupK",
  "key25": "5Dfr2YFgyUeEgcaG8RDcrhpTXMmhbeDjLpN6R9xfgKtwbEGQiGYR6QfeC8ec21oMWAP8nxxAb2hs5ZhJ1r6zKd7m",
  "key26": "Ha8PQ6hfdHkv6Qj3RD6gBm25ifCm6ywwrbCPNPvz9KsSf1pdW4dTpkHfdv9g4KdraRzEkciiWXfQxjHgQUYrMUo",
  "key27": "4DWErfbNbfs62ujiBXahS6h4s234pHtN3oDrKR65VgCnGWzu2spTDaiuCmt8CfASNLr8ZYsErqSw5s9GdFjm3Zfa"
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
