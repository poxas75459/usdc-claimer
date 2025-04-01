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
    "5s9viikgMfYBYSdEmkogzHLNrsQAkBqRJVmn7GiRgRjJLseF4fATTMt31WHYSnmxJNKnatfoaq9q3AATzFJo1Pkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Xm2ZdjrpsqeqesTiG3uaSMJhA3wAYwe6YMZaFnZJRqwTRvzx6uZNZwdZVGfZNbz78g55Paz1DC3F1jGSUCx18W",
  "key1": "3VHk95dytbnC1MohC15vGKyXAnqcePyBPun7UQm4XKMDj9ij6HVMBKurwqWvukZimvu7Xq4vQmH1jrCyksJfiPpT",
  "key2": "39YLrHTx6yZaWr5NmSSRykFv622zGRAqUh8TGcg8r6JfxnwSssdWE7yvdpsyz65HFoxSTP83yhtxGFvUwVghFgRe",
  "key3": "hwQvAzSnks24u16qeuVU8Ds3qz2amjdMhdBJYby3jUEmKtMhHr18SA2nggYBEKPdQy4nssnZCCziAZEcFMVEW4s",
  "key4": "12NW9vrgCf6P3MrrGviKyztmA2aohqkMjcRjcTiaxbetD3YswtdESiuDfvwwc6Ku19FFp6cGjp4hEAjrffcstBs",
  "key5": "5bRAn5nP3EFxetbbysTc95CeKNJiyVGwj2CXW2AkSJ7Ekm3NmbHA5zuLZj3fsx1VPubKu8HWd225UJK33yFz65Q7",
  "key6": "uyX2cJGRo4Qp1wK2d9HtAj5MT4F7aSfYETMdAeBSf4c99rJv4cV82SzcEpoxdsRnMhm4vJPWvzgtL4FvouXRP88",
  "key7": "2Q7oaZEVdG4MLPC3bN77Vb6PphABhokz44roxuB98WE9ny766ahhtwzhn5Y7RFZrQf437J38v7wargMhjBNmppxd",
  "key8": "2McwSZvmXzH5qCNw2KmXhCMDE3UTG14kwhaNH1Gtt1FiY3b1RQGaGruKRDg92PL2upe66M9Po82jUSNzFUkzjZAJ",
  "key9": "5bGaJpGsCc5Wae5mPBBx5u2RzK5LX3RzjpyHLT9sMZoX7Geanf1Q7r1DwjZxYx1H2wch5niNyx7QTVbwXcTY4ve4",
  "key10": "5jZQnqWNp4mYLtKPebEgvetFJJQ1dKvGvhsoQwweuMhCo9J4Bdi6yWtDqRjVTgUiQb54vGWyRqt6p9t8PcVY7Mcu",
  "key11": "rutoB6zkVr21w2oVZtVPjtN4L5WHgrZdsLJgUV2NcLGYYszcpvYcb7DaU9NLjKQKcZxardo5yVu42v368bYHRus",
  "key12": "3x9JVhED9ihg5R59DZdGht5Xj9ywvMS4mCAuVE3LGEucBavRWcT72aUoHqWqvqDUcKC3BGkCQXAQSvz8DDHEc2Ab",
  "key13": "5dZgsGHeCfmZAbtdMA6nuY1rTH9YgjSBab6KPSu5zXaueKXwgbTSqRF3PoxpxYvnzsaH9u5zW4KNJMrqqiEQTvSq",
  "key14": "4Dnh6J9vsDvLiU7jEEUTdx6atDM6wQtR9gpiKKF2FHvMi1xG8tihFdUDiqjaELaLr3Y2KsYe6pptXPARXf4mAzZw",
  "key15": "3YB1EZ86pABu1Pcq9L2TWASEex5eeNLVzBBTFqB6tUBjqxuSnY5fQLq3rTzFChxXGSf9ig6SFnMYb6EJU4z1SB3o",
  "key16": "3sXRTejHBVGpAMsFL4BzJqNMfsG23xxYdyHnzQ2sqshDbYAABwWVXLZBaf6PJEFo7sxmBYpoPJecFVr365mYZjRQ",
  "key17": "2wkWcRdhtLKfmHskX8NvHN1KevKP4FHPERzmxdywi2T9faLmHtABGJv2nfEWbEgwoAXBL2AAzRSfoVQVEKC3f5Pa",
  "key18": "572Bbu5knCT4U7tEZ8o9bQomym6W47CubR8gU2LJ8RfgLr7pQMyrJCXTksUEKRCayCAMrDtTgtDEcjFCr8JGtnHJ",
  "key19": "pWgwaajKCqBdDcJSWZuEFa6RgYwjQp9tSpgqyhGGD3TKMNuRB5b8obqkrnb7oKxhnvhvnvKgh4P1USm8q85m1Mh",
  "key20": "4d9QnHvPX5vg3vre3yMxmcvwcRS6bk5DJb2yUqcCbWabSKecUUteVw7tAXm8Eju2gYJSTAgzDpoUVVhttAhL3cPX",
  "key21": "4DmnYXhvqDKUgYT9adDsjBacXTaX7Un8Endm9kRaDTBo7Qq6PLjuKK7NQCWhy5ortho4bdTXvL9pWbftBBH2magd",
  "key22": "4ue2os9m5ZnwdFRYYgYDsnGrvq1o4TVEGFPdNjMmBU8JinRkCo7BHx3Ws5vf7b5h5azi8GRVy3jbfhHVmiCFtQQQ",
  "key23": "56gfE2ZSRLSRCENY16SyzYVtseRTpXL6xKLvPn5N8HHkP4hxJ3Ea8J5eRuYeQdhJYCxtrxok6nZ6urcKmH4ntK6f",
  "key24": "4jtjk8ZUCmMGyHbgTnzPYGjzstWNW1n39c6RurDcjg2b7GvJbFyoT5PwV18ACHmxXnCBoNPX4apWGLzM3LX4rqXh",
  "key25": "3kCynd2xcHm2fU38MNqio5MXdT7kZWXanqWFrAYSFA4HrEbN3BQErgomJEKoSYDrH9AfnTxBUCM145HezBY66eqf",
  "key26": "a5wqDpmAG1WBo58vpFk7EJisBtwFLx1AVe6v1FKyub1zu3eatrJK1WtxiwsJ29KZZ6NgTu9YKQ2ZnKgVfaosSiY",
  "key27": "452ifywa24bJjABDM7gN5oEfXFYgu5kqpaxKSX5JCkZhb8iw3ZGY4qongyHmMhxY5HTvts2QGqBg1Rn3TCYLxdFN",
  "key28": "323jRtj5kXTe1NoexGHgFsSw46PwDobrPnPX8v9t5mH7zsT58bUNA7DmTJhNLzggTn8YdMUfsQEXW7BHwAUVXeNd",
  "key29": "5ap97ZWVvzq43X4ToFNVFDbPDxfTLnBn1T3iD418xvtR8BDuTApJLXGMAT2L1MYYzRv6MZsjixuZFepJoniawXjP",
  "key30": "2mEk3bbTXbAYX99jCxPrDwYFH3r4KWxQezaQVwcQ9Yjc7vPDs3TsUcV1LHHmgqa1SykebdyuZFy5XdE2v9JYBb4J"
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
