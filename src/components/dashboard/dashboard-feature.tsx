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
    "4FgxxRBudUr5RBPreRPGYRAgZgr2tJLiq3m1kWGZpqJzwhnDsVY99rTi6qjYjVdQBth2dDSjrFytZXw1NX9fTATK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hn8Bh3EqLbczv3kY4LUJ5YqPpiwPGLYXptxUJpHrB6Tk8eGPXCEXxfY6HJg4BPPPmVhisDZFF7jq4aSQprSvpYf",
  "key1": "33ZpcZvKJbNodS6DdY2xLCL36Y8tCadEWFo6QvHg1xy1kvnNVz4ifYESA6tidqaRQCyi8TGLwRh9jju6Bznd4ps4",
  "key2": "2WPGrqpNsFfLNjUvXXwzCL4dgCDTvVbTFUeKRif5jGz47BZUWUdMmvAq7o5MmaDKLNazLPm3mSxKkttRtKHosa2P",
  "key3": "2hyasK2yJp5THZ1WHHeP8yg9mao35ono2fVMGgxP3zA8eGP1wV3geLQV93shoUXxoQbHi5aSDpFDPEq9isfAWtYs",
  "key4": "Y9j5ejy2jY37enc4LzvczdnJYSkyAaBbF7XQzgqaynGDDa2kvnSqtaVVAdh9ySs8CH7xBAVSZaPCAV12EBjenXn",
  "key5": "YiG2w5nmw6BemeWAdyRvJZskjom8BcHqp32FqUtR41LH7xFqLEPkNBjmVCcrVLrCP1d1BHVEyAEZBKP4VjTGeQo",
  "key6": "54f9QHMtPpCfQAVqGybd579kFH3PGZNoQhUioPLCQXxqNLTGkjbKPAiagRDB8FBuGouisAWVQcmUSHpStGjVkhst",
  "key7": "2TyD9XWevfoCSFBgiahmzfyuwnSVSypu55ycUpvNqEbLJ5Z7727RzMcPtaV6wmnzDHHeYGrXYDwRyRJf7XYMnAJh",
  "key8": "5pooKELg3aQhfLT6GdR2ucExUpUNRiwoJQtrvquht2Tc3WdsrZz5mgNfzQBAzsdWRfs1tt1zxB2SbDRD1Ha7M22d",
  "key9": "2GJJvQDk1QmgnhbJpLmmAXtW1CL6x8JZL2JQNs4f7rcpYH34RzMHijMZLGrbbSrvbhhc6p8WZHnXA1x29b9hs1Fh",
  "key10": "4CTcf9MxziM15UzXkZsMdAnJMy4betZ2izEQd3DL2RGc2nBqDrMkSGqcmhVzxzTXGoAVPjjESxbniuMxj2Z1HPBE",
  "key11": "2rkAYqaUaqqaW1htdaAY9x2rkRfLtgGyftaMobrnJiQtxjs34ENMqNSf3rwXoZuKthzPoMKEtE4xUHuCdYF3nUEP",
  "key12": "4ojZEHZKYzjUcvSptf6mv5FE7pGwfq1g2zyvAsmE9v9zTMXZVuedzcU9qQpRpkRArvLjCyzpVjPt1phCNgdBvuwG",
  "key13": "R7YzH7zJDj2nmPGf5nesGVCTnHcZe7dVhKRBjdcARhyj69XsXUwfR934boLC9TP1TnpeZLrMH3wQF3xtC2KMXN8",
  "key14": "67JYmf3duEpDZgCCJzNZkWpYuV6ZVyaNuTw112ar99sG3L68oKgKo6AH82NMKTyz4svXmPzCJ1G654fSQAACPEpT",
  "key15": "5CD3DeJzu4A9BaRWvWs92m5FWGHykrP87C1s3TAXDdHdL4taVHz5utRiYjAnV6AfncGt647n4PoUjGTW3ckkowmG",
  "key16": "DtA1XHYTS1zdPnVMRjNT7YDKYQFZ99W9q3EyMV78PKEsdNFsxpES8MTqkQBv9Rr8EFEtNvEdeNsVAhPzTSCaqHX",
  "key17": "29ZDyeB7K9ntEJphNRhUqWr1sP9j6zPV1ic9pfsZNVVNASpAaFtLNWG5iisLpNSResakhU3XBd8wZvtGsCvZYwoX",
  "key18": "2uvhE6mMMZKYZdY5s2jTLhDwEyZ7yjZNRbvrRSsKtCpUf8wPjGUhtqNDy5yj2hHhP2XDmLivFPnvFut9aQWRFMZ1",
  "key19": "5rSc4Lxi2K1z3WbEgA6myQdoi3BYLsNoRLjgtBUC2qswfaHnfDDNTZW8Jfs7c4hZhguvMYGMUQWMQbDtFie1GULc",
  "key20": "4VkckFJLSGQzQrXtgBHJNaPxU4T1XXYcyqq7fiyJXawyASM7B44yoYSFbLC1MU6n1fhJr2xDsCvCbNG14Tnp6nu5",
  "key21": "3UhYYJDKdHzbT6hEPuoNiLo77AwSbht4rK6DPvMZ4mtRN3JSpF6ErH8pLEqaXEqN5h4hsjMci5nr3mwfLh5ctAsu",
  "key22": "8SCaMDN9xy4AAMGWoqDFina8AhhvdefixgKuM6sckqDLopn1PqRfdZuFBWBTY1LaEqKfLLWqfRQvTWjonS7iF9p",
  "key23": "2hr3Goa1eADWU252eWsGtjpdNGvwWwVwsxDFsRtqGgcWd3wUmQA8DekVGmTx28UyDxgVymsGtYgywTuddPdNeUk2",
  "key24": "5fmbPpdXamxMVot8om2gfXsyFUEehDdYDXSp4jyBC7PgexWejE4z3TqUmmdh9qsLzanUDTN2h5zBhzjchwDk5awC",
  "key25": "2aofM8MYgJXGzBT5rcnKjA3oEDGpbYphgUry3GVXbAjxUsBTCJRTLL9qwv3DmTpmffzGLnQK8peVU4X9k611RAJ6",
  "key26": "iKfEcbXudUASH4z4yxcsYNiqWJ5RxoKxa65e64GHcMEFSwMaKwFeXD1WUrqcPHBHB8A5kpM3LdJttqLwMK59Uib",
  "key27": "M42C75epYV11byGdtcy5rShSmx8cJesgAYhdwGE6FkXJQbhLn3sYaWuYeXa1dbSC8irSb89CRcYsdekuJSK9pcr",
  "key28": "2zMhSPF4hVLZ8SnwtUe9qPevtMTxabJqRu35PSmfB3pdRu1248ND99dJXogUg4CKH1GViuUP4oh9iianiTK79WTT",
  "key29": "3hsGdpxKXi1WuQPib3b2u9vK4hQZ6c6Ex6is1qbBYgTtGKd5duCJYXkZFDkgQZQHT9yByfVyrtj15mGaC1DJr6XK",
  "key30": "23mZjpvo3NCyZvWPMYZhMmWuFWcwaBynQNpgHoAroZQryPVw9bDUqzYT1cLJYAB5s1pDZrhDL4J3Fq4bmaVa9fPQ",
  "key31": "ooZPy4fXpZjtUDdrPS43PtmV3vDeD3xAKGaZopjxuPLNA3kV8upc4itEQPtfoMfHmnu6rUxQFBv79J9Z3aCPmf7",
  "key32": "2xpJP3zMG8mFiZF6T8jwNb9PQuaWPSs3Di451opsR3hLm5BNArSvBBi1x2J3GeG8kgkARMuzYU4RzkoobB7xxB42",
  "key33": "5e3BCtZPPxLSDPizTCHnsXXP85xsEwL7H88EAooFoih7eJecdH7opCxtV3TR9d94Pvn7T6CAjR9QY9jpEm9YqQMA",
  "key34": "62Jn3wS5tnpe7YXSsyG21NZLtCDWUt6ss2B4xtUNHKYLDXhYQXcVEArbzS9WLR1mYj1fVdrRKQqYsHeQPfYoz3cK",
  "key35": "56otbjVsGv4jKiYJKQQBctowMQm21marY6TKAEkCYrDcKxtuEuL8SK7VB7wQbNysTzbabCwRzAKky4Q3Bqx8ZBtd",
  "key36": "5zzHiS6Dihk4strcw4X27BPVhoCG4owhg1ddQNpqCRXbVbTckqFt2wccjfpXVQ8D8mRipGrJKGTLuGhk9yCJgbGN",
  "key37": "dWq8uQ1hGrkXn8HH29qBj3LCuMuPDt1vFijjCx4ikjb5EXqJWHWM2QkBKyzNfGxuoafWQ5W4FrseNLBHfVYGtSQ",
  "key38": "2fXYSgursWHkRVFcHVFPHhMJC1kgM3w3Fuc73Lbtz2jUZ5m6NRhhZECJXc6Vq8YgRVmcNeUbe6SbqkwHQjNME4xg",
  "key39": "4VXYCVzGj5tSZiBuzWgm1gRyA7jMbHYruGYA7zLBQcSJMTnDxncBsUFxnzPMyLcSRPuVvXJpgSh25gyVebH18H5e"
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
