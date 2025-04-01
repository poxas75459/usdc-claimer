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
    "3noFGPVFzhy7ZUuMJ4VrozJfFsfVj9iAwz74yqRTi6jbCHtz79jQrFjXBSXgF2Y2WjkCiMhoohh5osprkLxGnm5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VUPdzHnH8s7cgWBwAqRYo2wnieViBLosTpioDj4whX9wYuK4GP6P824xQGdV8zqsZqU4wXfa1J6VWSWCASsi88H",
  "key1": "5tmYmyQEQmiNZdg64od1uo1JkeDc3XNf3RFFsVuVtBLyGnyLYV9YGs1ShERKeW2okBdfzX79pWBCVKoE6UauRjZb",
  "key2": "3yQFet9Qmkoj1Tind2fNrbBq8tqXPWtk89TKnRYzdtfSwqHjoBbnkUvuDjqTakvXtSJj78F5wmQ3bUmqP5xAnGFF",
  "key3": "4rvwzRac2wAmHA6qg1VdjHb3EYALiMTws2AU4NH1US5Q3FsXjjvvzq5hCTMgtZbu9qqkU697M3WrSpf1eMgyV9Ck",
  "key4": "5ANoAMNaYWojogYhzFS95UHBA7kyr8DX1HtPGKyFEqCAuko1ELhLKYTVQZ2zN6DcSNQUd9WxvowExehJ7dBFQvB4",
  "key5": "faQD9ofmN7dXoXne1BTCniSFbhSMMpc79FKtNyD2aKF3aK8yquL76YYyqZ83vKdztQ4MUMjeiSH9XdqjUjm1cKU",
  "key6": "LBGbTpApQ75aZKk8jkeYuHxDDYoBw8ZebVyG9ZzXL13RjBE8RoHSx9HxEPBn24jvSkBGkBstCvJiZSwigNbynA3",
  "key7": "45TrFNe4TSKUmHxWqgdr88Gu6iTDJioqPEu8hvRTfWuFe9h6h6hYe1FNZiwBVeRA7YVh6Vqqh9wc6DhuzqW8e1QD",
  "key8": "5rP5MDw2o7fPw9mTp3gVaVE9BWgw6WTyt4QmUZhHH6e8SANWnG3zuspZFbNAuRwmF7HCV1PY4Zk7f6FdinSZePvg",
  "key9": "2anDU9ULYCJFf7bxynNT8zFABcApYhGGSkrRu59YmWNYhaaB2AuMgNyvohsGMqhNd7Tniymhiead8mPMLouen85R",
  "key10": "4Jdcf4Jo5qPdM96xaWSzQgEkuH3edvsFkrhKmBCtmkSMjRDS2GapLRWTFcdeyGajUmcXrq3ecx3zXC3CjLRf4tfN",
  "key11": "57zgCMGWgYNmBgDSTHyQ1dexy5FS1oem6BjnLKJpRZfBT6YQtcZ5xzbx5Mfqm8SUkDa1dPZ9TpgSQBHSCRhVhtuM",
  "key12": "4meg3TaodkFekmNXKSq3SQmhv5xYabj8f1NuDXaCmmzP3Y4QVLTVHu8HawwJuxGeWtmRxXnw7gKdSQeCLnWQxVDf",
  "key13": "2PtzySqJeREUMqQvYAgpVjpkg5oVukQHr6grcHWRPH6ZbuHHeFCfcPoxsNyuHhuFXHsBThCnRxw4LCZjaLchnMi1",
  "key14": "5czJgT4QLky1c1wMu5hDmb5xfJz1oA3s429L38n4U1FCaabq3kxSvbHBT4sp5g65aMVJgJikdZeS96yvjGEyLNjX",
  "key15": "3PK2TWvcz1PiM3XoJfELc6akureUPeFBPhsYSJ3PvrpvLkWKEPYwQyscgfj9XXtp71mYkpAL5VecfqhUTWJ82VTB",
  "key16": "4As21P4kA2jJErGN6QC4rkvHJdVjtiiYoNxPWpYgHvkHhxi3WC6qDtBLQJ3afpdYgEKdpdSe7MqbXJZ3nDzrka2Z",
  "key17": "3sEBgDVXNiUBhEzGs9SmuHpo5TmZxgTyVqGEjrG4pF7yzseCHYiCneJSCjHRedxBTHnqKdDPuuFgqGZPQefnA6DW",
  "key18": "5j6Fn1rbt7KR7XtHE4optCcG1GUkxTyGm6vvAPA4rBqNAU3LzdWtaVbKX7dkZvsnyA8uAves1cpyYQk12GTQ99Yc",
  "key19": "3KDPEM3TkSnahYD4qWTsBmHGLt5nwHeRi7cxqZXeW1vnS8UrPdcFNDtvu3BwnXeQvntetYFBkhU94DdYRByWxt4o",
  "key20": "583mT1bWEqeEJXmZoxdfU9toHr4bQ3sxrmNH1zqXvVmJKGzgF2xMjauSDD3fgkp3ReR8whzaFBcgL7ktGqhVvRTt",
  "key21": "46VRqAci3DmLX8XuvbwzZPWtYwFb6jKSXcJZqhjbFumjePejqaCvGYXMLKqKFn9HHD7AxDbNYiC3kPAkU9wB1HfJ",
  "key22": "39KgFq6q2TRzvfAMVTpbjcicCoAtG5PYZ7ebDJNExBofR6ya2nWLb7NGHhq1T7D1nq2yUK14rpwTXqJNjFpnTrC3",
  "key23": "2j7SgHkbj1dH7ZDSw9XNqWvmoM423EH1xsFgCuUnmrNhdcnsu2KemaWyEFY2M3AbDMYDkmXNouoCRN9KZZi3fYrP",
  "key24": "gXmVaxxy2WD1sc5yCZBRntGRG2neP5N8NQzDi1yQbTx1CDD5yLkHW53FidGKWTo93dMKb7TKh3T5fMWbhCLDREj",
  "key25": "2GosEd2PmiKRsh15GaXTAAWJKJH4yX7tt6zvQC5JSxBukVNXkoxpX3LhDvQJg1rwEopJYGbFbRBmn2htSxfYFwku",
  "key26": "59mSU9kLJBYgVxD6phfSkNRdndhuk4JcVaKRb4h7w9MBbMffd9rHUbr6xaUqTW4S21QMtMWsRvzzKtfNX8gN2ciW",
  "key27": "2CzvDpz9iuHfKS2UrsCcKQmrPNemvs9K4aNcX18TpSwKmha5yrYVM3GDEZwRsTrmZSXwfpgT44nog8aF263tpYCK",
  "key28": "QJ7RTyNxc2zE4wqoLk8avMnjZ9FC8WYduwWc9nhhFrgKvaL2bR2JJuJ7dVCqXLeqCgstXD2e1msdkmFEqEgvXKb",
  "key29": "2ALeQhTLbzuRPcQ93Su1GuuMP31QGLES8aQ5JJ9mvMxarGdpLG7hdEz3bnpKjrAntYvhdEtSbzmMXSZWWLQdjSqU",
  "key30": "5XdzwPEumqtrHFPNec9jmZfMxaQjWRC6RMfWwUz8riYC8AQbjVo7ujAgoKDvEn3umKwP2SemA7ZDX4rNsPYXjbg2",
  "key31": "2qaQcc8GvHzPJDNKYaHmwnyaPxb5SYjVy3TYBFFAJBcofGkVkomRyhJ5aS38BmzonFodur3SoKY8FFdDqvkBKANw",
  "key32": "3gUcmxP1k1C8pTdiM7uj6MyaKHh34KqayxdFsfDderjwvMCRvsmmL3w3KytDK9UFF4mGZggHZAPXXSqeLRuiLDAC",
  "key33": "35aY2pueMj4P6VXvSPziYL5HwzydjkzJkEbm8tueDtry345oinPvUjZ32AQNHiA4TBF7Q1ZhUSsieTff7vs1LtkN",
  "key34": "4btvQQW7MBuicUxvXD5Q6rmDEZL5LPi9XbjPu8akZCQU4MFFhrc25zjzvLDzLs4bLRi1bhGNFnhvSYR51mq34YHz",
  "key35": "4u9FvNCFsf2AeY7NFXrSNsLGzkFYAfGcH5tgue9F2gVCzbkDpYo1eyFjSQaSZjyPsA5Q5ZzRrzbmMAQ29TGRtT1D",
  "key36": "2a4H3coztaVr2hRL6UV7ZrZM2wkmw8RFK17z66oFkeXoEJnye83mkDZUqATmzKdLxKdBdEk7hYVXqUkMysUtBjAe",
  "key37": "4czJD4z2BCAYYf8Ap59Qy83RapjasHgmXHsi5eGBZGDqxvGW2XoTzABSNWYPvojnTPBmqp5LyCvFkFkEKyQiy3E"
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
