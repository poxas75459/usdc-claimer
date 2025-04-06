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
    "3AsLb2v69EHnjY3SWDc3yo87fXvZtT1mtZ2ZopgVAmaadRKPCpGRiiA9zXKmYEgxjesBkZcM23jbAZQPCY3kiWmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y5fjk4hRxkU7DANvR4CdQowmf5FffFRncE2XzzN7XyBm7ACTN95P9faowe8DLtjGyB3UBA4igBDSnRQExE3RuTS",
  "key1": "xvdcAbRSYKPzLEeQTBTPUPRarGWwpjVtQSBJ2tByvrrNMpXp5gBTkjhG25uZNba9FEZUb7o5vwVczkehZTo8eVR",
  "key2": "5AUL22hNcsPJTwiAHN52Co4BpGGgvqUULvrtcHozYeqUUNc74pcpY8nxrrUJXWPAX76scaCjAmuiKpcUrt7Yg2M8",
  "key3": "62zTBJXBYUtEDaFNjqdPf54s3vGvHE75a7E4ciceQVWjkeNtY26MS5WpYkMA4fkMdw2jeAMP8z3tu439bBDmq5uu",
  "key4": "FNvQiA9DGKYiprsYbHu9hvY6MafJ8Vg8XvbaJdP4iydSWmEPXySAcJgduZEpSYD4He6FoRgwcfc7dR6DYCGniSZ",
  "key5": "5vi5Y8HJBBo49iJdWKgWLTjGTavj1akNE2dyBXqCcB9mQfhhKtookooejBpzXCi57e7yh4rw4ZvNZYjNrRstQ92t",
  "key6": "5Ry4CvDVjcTEwKx6mWUjhhz3CRM69ZCcByBtgz9Y7NLaG35YBNcUBTMcyHnoqioYxh2wGK71nowmC347mQtocGou",
  "key7": "659LCsFxYPi2u4Ahwx8hxuigPsFxdxfRCoVcSwGMgaQWptr4Ab9aTLNSofRDAR2fMbKQf5kLE4MZ48MosgSNPe1M",
  "key8": "4ZjhhjT7TRiRSYaSkFvF6ocrxWP4XZLmVdQNxSErLYQPRmAL8FSjcHf5ckmmXn2K67FPES3qxhQMoqgfJS5a3G9M",
  "key9": "kb13xU1NbVeNGDFHhmyauWFJ7ZnbwR6yCTEEwRLWwnk39ARw651tSUMQNAimuQEy29a8N9FGxKGqfYE8W9SXSQK",
  "key10": "3gzLHAyG8CyG65amyEJH1vyGrUyXAwjLqhmPu9W8yFDp7qzmRZNfoN3gTzt2byVUoHB8nPjGYEmdKDRdN79uhdBD",
  "key11": "2ZKdf9ecTn2p6kEZxfYFpZmgcRp8V47JBF7iRkEgPphSMGhjox5Ntz84EXc4mMnNXimmRNWyRTW2pxMWwTWkUQd7",
  "key12": "54g9rcXxuTvGRaBhPxrxwRwBzf1oGtgcqSMRmqPcjaXG2cPAdvGLK1tGsNzUdKphQimvRQddj9kBZhHGxKs5Jdmt",
  "key13": "2M223miekWZGZs5nqhbwMx9K9qYwM3SE9PmSgDDnVUGEzAsNDgHASEEKgY51i5bbTm1UzCuAc5crKK86Z9SQP2Pp",
  "key14": "3JFV4K1paJ1pzWGvWZ2Xu44DK2EwmBs4bQkC8mKtm1NDUyzsJkPDBK2dZWZ12NBNGAXeQbdKJbe4sRm8znjRut3n",
  "key15": "3gu6rrK4Dxjhc1oc4KZRdmv4yN39JEirvwE9JAnzAk4RB1T2TDEvAMUnf8sdVutU7aXgMVj94s2mwS1DjNXTE3cV",
  "key16": "5mCZphmEFD4iKF3fD1ctZQSAJeRe4dAnwuHkN6JdWtp171PJfh2dgkGtGx75vHgnxMMrTZfW2H7Etup2sq3GMNLX",
  "key17": "4qB5VrULjcWn3PRumHVLMdA79eeh8NRiN5srMdUdr3xLUKnLhSy4vs84sUg779pcM98kBTh69zAfJRLrapFSkYMA",
  "key18": "YAhFRKrmjpFqA1dv5bu9JkvtM2UQC8WnQFxjdHoLagfmkHQrJaFgupShEaq4w7R8qH33xCYTNTn2UxU3DZXBU24",
  "key19": "3DV6JnPYAhhzbMkjnHZgDkuxM1RJPQ33nxsvX77uGKRym21wcKsdN3xGKXgvoE8qSRBFx9JJtXTYuHS83CwngQXm",
  "key20": "4fpyu7jM8LbfGWFv29jogU24fxFhxDCef7e7C318jyZ8PYHukGWAj1qTUoT51LreUqN3KLfejjwCqmfsEPhnX9Xr",
  "key21": "4eqzVN4vACTmhZh9UWNgKrp7gpABpDdLeRmQ99oFZCnGiunegMcfjycQ8YH5CcFFE5AirXoi8hFeCPow2ZXtmmCW",
  "key22": "5RTgQnXwkY3UAzWJZaHJ1Vmzpe8psJqJ9oSeDd75JvbUQDi5swYzTgFLQMY5U9DyvZktYBgBycrNQeQvuHWEndo3",
  "key23": "3W9pJ1pvw5osMiwiQkubMHTXUyvohZvtLRL6xUpKH2YBvUP5T4KMhmfMHuaoc8qStLsjHs5UTYH2WSzwXJiaJ9uj",
  "key24": "4P5dg6bytJRWHkUmsUgyXgbZKCYF7F6tNShMGvcRbngMcKHUVjiwxZV5KZt8pW1R5Zex9WQ8Dxarf5a2mXvbARtF",
  "key25": "sDb3Z82JbRCZjHZAgmotKdDeRaeuBaQauPPxWayKq1dMajehqGr2eDTGgLX63iaqqmdCpCwVUGErH3pxdx8FgS2"
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
