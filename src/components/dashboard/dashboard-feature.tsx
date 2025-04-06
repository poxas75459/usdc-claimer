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
    "2w8BtXowSYtp63HZHquUqZuaSyPWV8UivtwG9aWN8u6hDDejvGmwLerxkv5rCViyYYMrzNQQoAn6pKiyG3ofVVi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hoB7A6cgJ3aPaVoutsAcdpUpBf6k3UCNyZvDjCiuPGEu8DiGGspdydnDRqoMeca6ysmtD5xkEivwj2GkWX37XXR",
  "key1": "3V8DFiD7TTqETAYLt1si6jQwwdMTYFy2MKKAH9Pu5xycpcRzAewPXeASriTvpgmozE7PSBiVh7t9EkXDgUk9P4z9",
  "key2": "57SXs1c5ViRQU6eW9abzXVfSTwwW2c6mRj5yYX8BzhVxnESKewWzh3T9scsokoeLd5dQjnhz4Yi885iCbkVMQKBM",
  "key3": "2E2x5vwDkFmWTcbzfuLT72KTuvCePe3cHAtShqPB6zfa6PEaDRCG8ypQCJ5A8vmRExrmQtFuGBg6UHpDHr76LHeN",
  "key4": "45pBkj9VDmsuLfmjDuKXNJ7dCdmEM2mUDHkmEDJv47a86G7aXYBXNnmcPwhMeaYSrXVS7U5PQzG8FPCii6dBDpmV",
  "key5": "3myePDP9inGyYQxsjp6U773LaNtQVdNbf63MbMUto4CVBWJPkPN1hz8V2dksReYFeyDUnPbdxjJr1bSYe37BAvP6",
  "key6": "3VBayLkMUDjimSWUoNk95fiSuWR8Rc1rLtpRjA9RbyF5jzgnku6PV8i5bJATDaAznhCUNSgNEnAJK2315cstkAQF",
  "key7": "5AcpMj4NDeqyGjs5KZEjh8zw2tWudmBDfxCXa47nd2qYs1YXMFKThbfZQ65mpE9H22k9ZwycorrZTC2m6Kprj8tc",
  "key8": "4zetcyaHjzyEhGZDnfSYjxZMLdUiSqojTtBkYoWmzSxM5CzutUzmtaeV9fAb1QnLNnFyBSVhMFfaE9JUGAeDumjE",
  "key9": "3RMZZ7kmAcoi9SpWKXgj6kRsgYYUZsU29eifGVMsgvjMEiWpq59F1YamJZAjKcA6MyJxuDM9ApVmayT1pwQsWypd",
  "key10": "36g4t2RZdd1xKG48bsHMkfcZZtuZX5p84vUnboAdF955qbnHi4YGyNcrvVeBytsqs5URsk39MBePcMmGb559dW54",
  "key11": "5Ves1D6dMg7MWpdVSnYfSzWnDXL3PEEz9Uq2eey8KAQ3mcLQWW3aaJQ9WQ9STfkYREaDBuuFWB19UZkMWw3t2Yso",
  "key12": "2S5brTwE9axheXGaBbHMCBt7KK13KJT9gg7eV1Z3oumR5nPKifDCuFKT5UBy1nj1dYTv6XR2hZnDYDR6BsUAXad1",
  "key13": "5VadgTd1V5jBtw6kvNVLeYk8TeDuAWQTJCLw8bZeuzSt4FGo6tJ1n4ZmB26QojavjRoTXeSHPkLtNw21dvSSSz1Y",
  "key14": "S2Cfq3GkN7BMpm1Psxomk16JFrmbjHkCrkS2x9Mb1JkXMBvMap64D2gehZPoMvgVqe5Rs5Q8hW47PeFT8v7V1ND",
  "key15": "QfcBjycxsVjD7EKcx59o2QQd9rV2VgD7bMYYrEFUtUVJ5uXbrYMZEhnJRPC8Bg2QXk7Ria66PUnYHu9i5kkyXJH",
  "key16": "3PEutsb13oiPqb24CQyzkL9oAAfXtsyXk1aRA12U1TDw1DbNp8yvpbPNjJMooLM4SSvwJzw9JoeKUMUacWYpGUBX",
  "key17": "49vJAg7UcJbeV9xfiESkAUXhjbhYmXhhSfj5FKZqio8Dg1L5xKTRSsvnSXn6dCLVHkzMH3P4G5PamBbYYaN1UVi9",
  "key18": "5eezA9xUWtJoePu1MZGNuMJLrHh6eBBfRBhSswj6eXbbrhWmmMzru5Wtb3qugCdbHkiGKgvRywSb92qR49hyRUm2",
  "key19": "KjNFXyLCeMVrNptdXEd7e77kUwi66pv8qBsbVpMHrnUatjiajax6VumCgH1oJkHvANcHjHBAtnvNy5qXpMGM3i9",
  "key20": "4aCfZGbfcVRsKJtTfznKDQz4neHk2VqAaXKw3xShkZ4qH11kQ378UnAGvYvXF9xgsEFUWeTmpnwEjFJpX4YP8XmD",
  "key21": "pXzSXhnRozEKSBaJGR1p4XSnNU836ok6LnpzAbpXKwkBWZVe35kpYDdS86TDcrtfMrYfSQymFvHGZR4GALLMh29",
  "key22": "28rrdr5fYAnFhg4XzfCQh56TkMy1UGmWULXWkjAMGYyh7GXSbwWPvW7pEXYMkEdxVhrQGDdcYVMqncLcxBVpcaeA",
  "key23": "3w7V6qYoPKLXsWG4dhnTr5kC469HE1nntNpGFZD5GBT48AK6ywYS8HeVNLPwjPbMVYoeq2ZJmkrz53KhHvrEwpoR",
  "key24": "5ySEo827padkhJgUPqeMJFAMvqG8jQMVsrNCfQ6pikB7oAocGf4Wtt4426LmUPXcD4AcjxrjVg1BoBjmtkgmVyXz",
  "key25": "28MzGyUAdMduoTjTqy7H9PQDzu5HTTTYhw9gv9LAYYDK7SAEw7fwZ7fK2qAusY1b6d76myFmcC7fDbnf3HvkvnRu",
  "key26": "3foorHsVDZ1mM886CfiAqcDaGrXVvV3j93DeCSPZvLuKhrRWpSGdNLGWMmNKRtxWe94oF1ogo66LGgDTWcBaqvFA"
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
