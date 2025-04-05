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
    "2MaYSxDGjvXpMrsUEpmPAqnViAj82ft59X5Q4pFevXSy46dmSwRJxkj9KVtryfoeHNGycLJR81FRCktNiesJk3Li"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hjANVfZaviVm78DKUvSS5SRLk933vHEL9R9BK6gtEb13FghipSb2QH2KRUwkX69RNAD58ELoezi7SaicvNeXySV",
  "key1": "5QY84fPWtmunMJZTrpdmF2b4LrZocsdoHPbt9AGB5VQNsG2fivZ1KMRe2H1QDVq1TJKSz8116XQeCGGLvwNFg7PU",
  "key2": "3nnA4njqEJuADE7QVLSVzBmrr4S6dZRveEHMCSCrrv9EnrxRkPBSkQSLBMoAUqRTBiaKtDejSjGnRo2tmLvp9kmt",
  "key3": "4eqiqCVRwEpdCYNRp1mEvcu5tF8gqsRAkUwC19y75peQyhLw7WLZXDwuZofqTccf4nQsMmev1voMGLnX7zourzNr",
  "key4": "5QjfJmAxYsiYXj9c9Qun6iHtTDeUDc1mRWfyXt24cx7aCa8k9vxm9WYim26KrTKyWhb3kTnUp56jHPppYH3koeNJ",
  "key5": "3cLEN6uJ6T9cj1mXcorud4kPJiAS3WL2vFryynx38cAxDDJyv8RQdqnvokNzpYDu1DH6Nb3UgKLW8wVMAfdTfEK",
  "key6": "5iWHJigKyiUQqwzVJeHbmhujydHvkcRo2G7PuMZB6Y76GyYZtzT1RPjV56af4yodxD9nPjV4ZrzSfzXyvdoqYdV4",
  "key7": "4TYsDsV38qAXkCQufg2MrYWjCHxpY9fu9atGgKMKZsR899XVrZLb7NVsBkgDkJyjpaaSCjhaZHUyrui9Anv5Qm7L",
  "key8": "5eUuPCSS8zCUiUUyfCXQxxKPnzeMZPkz1NhjAcyjiwPjeP5KAKME5HdyLYeVCSakeZ8phFuCPNMonr1KrpfRZEsR",
  "key9": "4ywNXorPCLffZMM52t4AbmRB3fXCHLNxfr2ZVbntn5CyDnV5DuiUkSU7eB7sVTkkUgwZn6nn6SqHGHUyEMnNwWYn",
  "key10": "36QAQPXUkRXXkd7fHV9PQxXu4ZoBaJBKyvVcg6xPTEnNna6Y98AY499peCFWFYiiCcrbEqVDJ9fEbB8EKZmv7AKK",
  "key11": "5fvQkJ9JmmejULVaDttP9dqXRWB9mHbrMAQ2bDp4yPX5CdcUo2i8ArUN11X9T3iFGG62SbPfP7j1mn9XQbhX8Tw4",
  "key12": "2stSunTD9ifLqvn2QLx62Q6UqP55Wi4XPZV2V1Cu9jhzy4FEUcfePwZ5c3jZh83P1sdqJzzLvC9VgEv8monFN2vP",
  "key13": "45RKFR9vFMdpM7V9jdM1vgcxPctcS4fZAnq9psYYBswXGvcXGD7VdHaa3oGjJpmxcek2Qt4TEPD9z7UCrJCCNoGP",
  "key14": "4j2EEsGbgY4MGGPjmZ7p2LPLvv1gwNnBTUssTd8n231yQbSbj3L9hK4xgrW8T8dfYuLpXNTVdXDGY2SYEPpncEdA",
  "key15": "3CMonfVtyMikRpi9sqkNKt22JrDqhKVoCV693vQVGLBnpX3Lg3pBX9RGshm5cqQjKBhLvhmEiEd4Gwfa3L219J94",
  "key16": "8dKangQL1Rh6pqJWDXeNqsvU22188BsJZRrwAgngZLJhZfRMqo1RZUQpruBxGhpakNZaHzvfUmDR4PsZ5qdHw45",
  "key17": "5JuSEfF5DUL81XtgbHZw7RYNfMbyq9qV1Z7VQLQw4ETnLkpwwWP9FuMKSk7eetc7JREacmALM26645D2azSAzbWe",
  "key18": "617fsLy34DiyNijvxtEvwPsVwpoCzf7EB7vyAq8Mrab4XJDEhDar861zhuQd52xjWkvgktsTw1JsGfRVcf9QKioh",
  "key19": "33ndcp97nwQp4KH9HyE9JEczjtkQhzju3N6G6VjKLJrrRLNSX2cCg6GMvbteKjtAiRXsHpF4JAA7VbheR1DYiNfy",
  "key20": "3L2CSRA47fCX5qGGCivsZdBDzwFjMQKRYNCR76VMJSiULLbf6V9hTmE1AYan89fQa7yKBjXd4WjZbSxtBAnMMhMS",
  "key21": "2kLw6H9AbkLvV8VPqaahZXLKx5cMgtiAANsqNabzqorWRRmiD6WpHjc7EM2V8PLAmcp5yF1iWeeKzKsTyTBdh57p",
  "key22": "4kHPUWJgDMYKTkE6KJUvQiMfRr8zHmqTfH5gqEXEirxwrQUiZrdabiYc6ZhTEng8zdbg5RPi4mrfCy75NrEPc17P",
  "key23": "oGVBaW48KmUma3xaPx1jvrkC2n6D5ADoozHWMjVeGRbapzMaAw2j8ehBoGEwtkHkhxme1XAMA6qcq4rMCoviZbp",
  "key24": "4K6dkHUTzXfLtbpeaZoUSPCtiHfYHY9z3HkpVNyLjMVuzCxPWTnufLSaF5kz2AoPYUnTdZUjGVGGP2jKxmac47bW",
  "key25": "39nemxgspo2ed9MHovfS5KudCFtqcvZb1PuMs6mnDoFdTGP9sKiyMMLeNp7YKgWX6QXhNdnH8cmdkimAnJYZ6Fxu",
  "key26": "4CLvWRMQS5a2NyZpCCZycbFYmoj12THPxTJz3ZDbxdoFPJug1wGkcCivVq4nUDqguv28fHDGxQ3wSxfTDq4zhvWY",
  "key27": "2499gKfQdkZmW1D5rL3n8tLm11QV3bB838gKVXbzb7KB847eKbkKfaiPR9fcXmSQDmJGiNZU4f1utEiTpsyELJW7",
  "key28": "429Ri3HezSf51G8E9Qj8Ymxo8vuxcZVGZxRSc6wNviPktPHFC2XWeRVkfjsyqHwUQWLutKBaW7iKVpSLvcYutpnd",
  "key29": "5DimadBV5P9ra7KALXwrbwE3nSy82KyAmifjpd15phJKu7QxsP1tcydfAbQcfsLFRtVqd161D8873bg9TATRqXij",
  "key30": "5Nb3TmNjw8qzUxo9c3RR6SgsMokGeRiG1Z49cuxYNP4WgXqK9K9n5Nk5KhqAkqcW3BrvLL57JuFK2v4jacgHPZHo",
  "key31": "36X1WY42yVjMi2Fphn9UyPY73Rzduu4vYE6SoxsL2dGjmBpzaUZWNWgxepoWQ2DPgLYUyQEdYyigjc5wvoQCA1Lx",
  "key32": "4wcxnJ88U8TyNGdV9mVzYnu6mBP9gniCQvENThfk8mjcPxjjLqYFzGMcvZfthQihSyMD1UoRPLRDE5w6CjDaUESc",
  "key33": "61A2KRVjmaqieZfbz4jcA85sKtigqNJbvVmPurGxHe1NNTfrJoT3p9eFWFU5ZefAsPnNNvo4481mDsdJ5ZZ6zApR",
  "key34": "36MtMx8eWKcVQyPTnRdTvArKSAY7obZgLa7pF8QFyfiQLiQBZtJcBcWk4uHjpg7HDKW2XVmrhxy2MpxKjhT1egR6",
  "key35": "555bMzr8uAV8sCrYzJoEy2bngSLj8hFBoQXEEQvTRrDCtJPUSCsA7EMKuCkfTcPcHpii6jWSvMwXf2JVNbj9dgtt",
  "key36": "3AgJuU5iZvPk2H5PcBcF6e7bbF6QceNTKTv5mANpAtQk1R6D6Eg3ftKytS4xnFYSMAZfjZSJ2V181RqJ2Us8irKo"
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
