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
    "msd2GWu1r4mgprUEPaHECMNK6qpyNwCUsvLRfRPPFjajXEFE3efz2ttWoiQeG9UoiASHjiQba2HzEHRWLXHSYVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QK4CeN2gWM2i9yVhGMA6fHwPQqxrqibF3Bo4fx2R1GArtzHY1hQxs6teE5GxNSYpMBCRrQUwqQNtz89Rmq9FNCY",
  "key1": "4zakZVyLpwHVFZoyos94LxqgSJqdEm5TKG1je4VaT5fpUeYdffPVA4ET7xbGEA4wgfQSmb171zGrxUyos4EmXeNd",
  "key2": "s11CHLwVb6g9iiMnZCC2zqVNwo866U1FozL7CvqoRFKQPxqrmVmEfMrRezkN2KsmB2bygNR6ojzVJp9ouyzGrD6",
  "key3": "2ZLeBWfWTiMJW3wGz93faqF7TyTwonyiDrK5129GGcksxdDXVLwTbj9aR3d4rZFWydeEizyDVCSjo22d2kPXpTTK",
  "key4": "3fNn2dkUTt3neWVTjtSeEhxpqa8b2y426aSXY8t52KFsMKwhfWhVNrp743THaTx1u4CoFfhrPvL8vmdpgSwMirzE",
  "key5": "2X2siJpBxAfX9EAiU6JECQqia4bjauKWWXNH4ygNczyEhjbuqd58YwfhDRfC2JQ5tjTLJKwtaJcQsqDGPXnzK1nQ",
  "key6": "4ME2wJTA8qAAU4XJmyvAdCcnVQAA9cYbUspJ17KLbFcp7WvXz6sJBK32fw5muMhE5DoJvBoBvxeQ3cei3VGJmEwm",
  "key7": "4ZFGbkoBSLBvu68dPeDeS3JobYsVKzfPkgqfyzgB2Ph7rKzPn8nh5yrBszzwTF9acZJCxATJvYUxpBYfdFyeEt6q",
  "key8": "63qahhhPXHzCfVhLx4sGsBQtejvoxL97dZTUJZfEDCHvbFWEarS4xzaQuG59eHVaRRagAAPG81u5sCe6445hwvF7",
  "key9": "5qmP8qKKEF2spnVNDdNorZ9kNrMaZ8RjX3WXFe3irZXyTkb6mXDrBZm8mKL6LkNi4d2TCgE6vqdJ3n9ApojcgYxZ",
  "key10": "38EMnoYTZtv2LwHcBWZ5RydnB7XEEDR6s7LWV3wL4C8DoRoBJYWyLLw39TLpzp9kVM91GdjGxUSv8W4Kv5orFK1d",
  "key11": "5pn88LGuKCb4o96W4hJ23mkr4ceB5gJmxD7prmdcPYvTxXe89tEJP7C63j3GDf3bjWPS8hkkXjS27Hk8auP5jtDr",
  "key12": "3dXZEmVJsxTsnzkt3YacA7RsK2F2qcLdwbw5BNcUeg8VVKCNtr9nesTdMQPEA1gbXBgQx9Nf4D9AgFD14JmdKP6K",
  "key13": "2MzgKK6RniFCsFN64kK9HFfjCYZ6QRYHY1BJjAkmjJPMexxBNdk57XxQrizaJYniX3JSdihU7K6jaj8YsXbwWM7L",
  "key14": "2B79ecXTNNW4ESnsMHUPJzc2KDQMvHCw6iLtLozXLtUde5F9tCRknKWR3SPHSTuqs8QpHFA36LFKYctAN6QHTeJd",
  "key15": "4eStFEDy517DitBoEojVRodbs6ncsHauzjaX7SFHejCCxxM8mUryeopR59Tj9ZVvoDTAWV2zo6P2SbSxsV2PkPNz",
  "key16": "2qs5oBVQgzQXcWFU2ZfpDQX6gkdZT97S1ijjZie9uNfe6CQvCmQExgEhRJxegL9Vy4U2UG61rckuYoR9p9SUGnmT",
  "key17": "q4GkVpxBR3pJpMeANESCfxVKDRa8hNQCKsBpggzfSWcz2UBmjxmk1yBL7WN7AQsSchtHBgBFHedtdoowBdWcWez",
  "key18": "46RiM7UdWPva5vcDGRALvz955kebbS7XtVNh7jfmEECpb3M4QTJ6Mj2pDqmYgeHihZbDR7mNsoSG8ZrSzEoLL3uU",
  "key19": "5q4uXQ57yZFJdd7W8MsYNj2wtZtMJn9bJUqCgGrFQ6YujKS1QwYqfTKTEiy1FeSoz8UU4zYuGLK4eoDt91V6CYar",
  "key20": "Nc1ZQ2gJtw6paSAQqyidsWi2rxsWsgzXkeoYRXLSBTw7EG6693FDySxrUzAhJevKztX4YUBYTJ77PVCY9Bk7osB",
  "key21": "5WTivNp4ievk4J3eVVd6bvxgp9hsL2QozACKvSUzosBDC6rrox8UrMNDXLRrS4HeX356zdeEHaZu9mhmbtSVYktS",
  "key22": "4ssW4VRmGdHaBQpzsT7E6UZSFbxsU4WwRahvTa9ZSvfyjxiTQgzEDY8UDFeDsvXmKM4N58qARwRsgXRTipHEwARP",
  "key23": "tgoov9SAfm8rN3EGhKL1VzVkqHq4f1Yb3nwwbNYZ6mYeqGVFkMT8XEcUiqmJpCVXF8WTGpsri2J1o91GMNZMvrJ",
  "key24": "5kBvsnhoGSFSLhDxTDvpH6L7ZNMiA5XQKysVBs2HPBkimNqQcyEy28hw2iecf4zQyDT4nnwrExviMnXsJW2kGY3a",
  "key25": "5p8yfNaVjLqaFz4USpzqnW3x7FLqyQDzUnfoExunyUYwe9ibeeowG9CqfCryLXkSbugeaQtXHLWox8wBHCFSWG1U",
  "key26": "2YHNK7PaEPJJQT9Xab4zcXaEcVWbGWupERaVRE3m3k6KDvg9GDordk2iyArLTGE1s3Ur8qB6yYAYa56q5DpLvLBB",
  "key27": "43okGQKPTsNGisRfsaFpCezenkgUJbKYPGiDS2dqGbrj6YxuA57sjAHtDUHvnTtNQtjD2oAc3JjCfafhC6gLbAju",
  "key28": "5cSvGii4T8uAGKWPgnABf2Ls5gvvG7egtZgqbCMzBzXBLgDPuLVyfKtc2G1e6RV7K8TJaiCFuazv9KCNqYV57tLR",
  "key29": "QQiEN3CbwZgTKPChHDzPPr2r7anbZW2Hs49NUjKhdyEcXHa9YpnTnScKQpbm52pQv4SbMSZyjNoRDBHRQtr6pRC",
  "key30": "TPugtVmbuFCgUPDmtgmQtJiXLY4mUkXN5L53E9cEqbyK7M145v4ZGRCefSBkQVXdq7Hn8AfG7qwsiQ9CbmsB56K",
  "key31": "27wmGg17grAtnjHzQ2uevKPuX9s1XATNmbF6pNkieugw1esv2JRF2bKEe7QMw2EYS5cFVctfWLjHt6nY9j7VkL2G",
  "key32": "3q8JUYNu3aWvNKcCZnKjcZWBPiXCsR6HuBzt3WgxojcQVa2itMWbSQPoeqdraX841rFWt1jWJuPyC4jTczpdecBu",
  "key33": "3ch6K4HyYtWU3zXM4Hp3z6iK9dYY3Y2WBZtcjLjJkLFWye5pwFLTf9akvb6F7wKzKW4xhSvxYPo38ZhZhcVqnMe7",
  "key34": "5hrU5JL7WU6R7cAmErLRjcERaxC7KfXFHVsMaYA6LHZvcVCX5HzJtprTZK4MHYkcgd7phc1Dfr1gzvoPMpNdrtUk",
  "key35": "Q5WQJrF5g7wYZcTtRp42aNSnHFcMEeEXkxDD5vnQAMCkEAqR5DXwsGUCLEp2AonhM63QLEXioQ9787j8BLssiA9",
  "key36": "2oj16upg1fWJuVvaxGr9VJR23gcG59dobmCXYsDcou896S2HN7yRo8UTRwu3RqkyA3gyBadgTzmtQ1TZ2HpQGyXc",
  "key37": "2S6ovNERyKbkXg7TJiLKJJmifrUEXLTEV5hFx2FvQkoiC4EdS42ohrMSFQFq3tSYfJ2K7RRyLPqjajcvDBe2a8WY"
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
