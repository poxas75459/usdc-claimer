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
    "66VHsmqBS448WC79KtsNAjFkBXK9XCAKj7EANxSQHa8NPx3KSYvxPqqUVikQP8BMtgFd6ot84nyhWkD5HLq5cWhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5spHdxiYXxrWtw63FC1CrjDLYTBibQe17uYN7mkb3RtWuoK8Yq6hxwSqGwqHLcUr6oXxJu2rb8WoBNax8nWZHL9f",
  "key1": "4R8Hp5J1NSr3keH6GxweGsa44uTHLphnRBaVjAvpdpCMxAcSVPurRm41KjonTDMMQ8VWCdkD5VA1tRxfjhPDNb72",
  "key2": "2gyNhqT9EpyyUNLmKoWnMTZBZEm3pi4MT6mbNJSrdPBe7YMbxY5tmeGEnjAYoASfGPD4qX9tq3DBZDGK45gPPiHB",
  "key3": "4iJJLs5JK9G5q7DUtAM7P6kT8YmrsifUx476FxETgtoVLwgwKqi1wBrihbCcxKFXKb1EYKLxuYbU4x9ykEzM1Py9",
  "key4": "32GpepWJCf7RHQexpzcJnfMUrKSBNAwnh3nfVmdpjzmNbdedrdrkw3BTd9BursoGR3wCcZhQfTbHRB25Lj5CDR1K",
  "key5": "wWmLKD5kDqePz2A6Exdasn1HTA8g6cR8Rmd2jYY4XN125vVYem3ucRbgG7b1P9S62B5XbecGZBn2M5w498UqqiL",
  "key6": "29kpgvhADvGbCpS46JAU1HZEgDr677wSdcWNXuZ6cng33Nq19yf9wbF3EdSVLPsx5YREDxaqgHJfvQ53WkMSQHwz",
  "key7": "3VEjtW1Ftp781FeZLsoikBJgPKMTaFw2xz9TFc3eWWAUaWJSv3VpoX9SXJ4CpisMPWjaEE7wUjgPkBzH1KspDudg",
  "key8": "2c2t1yHoUrPAknp5oSFHBb2ri2DsuYbAeK9tmo7CxJL6MjU29nWrXxwPVbRB3fWdzXBvAamCHn65Pu4nFxeJF7rt",
  "key9": "2KNrG1XWPi4UrWfu5GGQ95iGdp9vzoKPuWFvVqVdWDbJdnoisvtXGsbtusSQSgPXKsX5ZmVwBLbuAsZmHAfZ5tMq",
  "key10": "uP7fE5ZJMaFAy5c9THooBnvpaydZcXxW8gP7cUJdSFjpYA7F5vAvzXJbvhtjXxpRzEQKLBhs2G8gQ8BhM1GThu5",
  "key11": "4huc3UU1mKNWPXCBrGLRSLs5XXaBEeA2TmoNQK2DPgeoqpAxviKeHdYsxfrEsuN5aSdviy7j4FC8sCXXE4zhT98",
  "key12": "5x9TgaRAvNK4LDsVtakVxuQZqeWQcozttKbM2eFnGzi3YidZRzwBrG6iLLiyVm3Xt2ayvy3yNMngHELhX5w6dHPi",
  "key13": "5FDmhu4i2xUBc9i5H54aVQ3u7NFEkLCYN94KFQGUhATU1CoZ3oLYNe28T8yvqDT2eszB2hgM8hZ3P1ZpQBZanLsE",
  "key14": "3eMk5MnRncbNZJu4SaPgQN1vxpGZGmbnBJrUApyST9CrX724U6HCCQ7rkcDgoDuN2xnEsVX1PGK2HUcUarqjTzFQ",
  "key15": "mwvm9TAhms2Cucb3U83gbWRzGH1FDgfs97PkQUdvWmZNU6YoSpWZrrAtUzesvMBLHWXNhszcm1tVPaXwnsjQU3Q",
  "key16": "3HTvagckvL1FiwRTEc7UUMD6UiK431awbk5o8HWouXPBtzMoTVXmRArHDJykvWGeKHpWeAmckHL4MFMyJGqhSx2i",
  "key17": "3rem46vLKyyfnQWfmrWKu8ShjbLBrREp1EYRLwh8MjaWuNk4UM46zNWjWo33MFES9zr6EfneNywcMf6hKc6ddW2w",
  "key18": "3Wid6Q1CDeTCZeowq4AJhEbHCmef7ewjnNXQhcqB5Uw4bmebFwqrQ1AEJ6CCNRBUyxyhxzqZ6CvrCsfgZuJsCh39",
  "key19": "zprNVrBKjzuhGXGJfVJbTkcwyktR29piAudpNs5uQpV2nYWtZsYPVyMrgPqV6nkZw6HbnPsnTTc8rvUkLQqiKCM",
  "key20": "2hSUS11t23PdUYFidGUvK45PuSaeTkmkpYhdTrnZ4TZh9RtkwgddRYnK1Pogy979C6c7BSkZPPCbDf9cGmEpVibH",
  "key21": "5ymDxmW1wyqHngc7hBdDinyVz3XHhiKNQMMH8mKGC4U12qGvdRSN9B61VSTqAsXWoDxPMmsCUPTqsiVuVchqf9du",
  "key22": "FiQ3Qqk4Mx56QuXP8itRfRpscJewkUpib4gSxKJDhHumN32QPahuahKmvGYqNGsuNnSUrPRJpGP4caFFdtANXs2",
  "key23": "5z1QF2nEpyREMMTw7dcfF6B44aAbs5bVj1WBoL1uqVhbmDsPYzt4AKGauNtCXjkepsoLhaHyDrgvGeXieF6taNj1",
  "key24": "42NmZ9D4Ccrscmyp5Z1LmRAWsSraS75jtXyp9Y1BEuTrYt1siseEpoyyV6fSP9RcXDPmae6jfBmPGAXMCpw4saDd",
  "key25": "2FjDsjoACYkiCssnmGNKyEECZVbcnWfYcsdfncrDyGCFVhbSASVgCMUHJsVeh6769DE9ex9aHAMinAvWKYGsuiDH",
  "key26": "2HKxFFZdcvnvtYKRWi6h7Q7otapkWMCApyZ9nzqR7MzTyK4nK7TySdt4pPTVwVsfP2zXs2CEjUAN8zNN6mVdKg9Y",
  "key27": "2Y7MEH3gDMACbtcXVu87Qxgh3xPoCqfViMq3AjS7dmyBeEBnS58aYBCVNGdZF5t52n5JbKWC1qgwMG6J3Z6Zd9oW",
  "key28": "5VSBP1ooVgRM32bPvVgeWJsLs2xzHUHWJBwJuAvEGLoctH7RqfqMGhQbJcoXgnq8hNL5t3J6nuWEAa8nVWuJXd1H",
  "key29": "4Heij7YWuJS1kmARMdk8D5sdi4iXCDXgBKAk7wPgGG29RJ1oq2QpxoXXwtRZoYLDCn45gmGMnsi2e7V1jLDPmDMR",
  "key30": "2EvrZe5Lg4DyUrkNTrePXiwNFT8fRhRfDsmQxmnL1M9gCrkSr35b5kcYYGyvq59aYgdTgxBk9HWtp5LUYX9KmgvY",
  "key31": "5mGKNayzDxJmt9beJNJn8p8jYgr8v3Hv2pTCSNJ8kC8pRRygZbmRFBuecJ7mEuEfp9DtuYRrgpBv1mzTnggX4gig",
  "key32": "3DDAMRDPbWhk1PnBiv1wktAwWPzCzaJ4JVVE8jtE3uR3PaNfzJfDRY8jf8V5ADkKhqLHkcvj631PHs2R6rMA2mJr"
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
