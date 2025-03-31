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
    "4nHTgUAVcnu5JCD7vxisCucgqcYVGGJ6wYjURjvDr8d1aEhR4nVf8hhYE6HRMGdDjAtiASm4qk526RkHC5GPTmjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WVTGK9tPyXQZE1knmAGdDKqM8mG7QY9QkwPpHWWgiMVtsPwSDDfsPh2QGb2pDCkdnYnJvVTBVTgaqm4LBce41Ji",
  "key1": "5jEjBPCUcNNBrxiFPd4F3WWAUbtxunwi9Z8GLWnP3NX7K8ZTT7VJTFgvMDeY8788BhGbecNe9QwjNGVCK1mAw4aZ",
  "key2": "2jwEhufZc8H9onVf7fKFkaRFP7N4uUSzfGex8Aixmbd5sWSzkHEPg1GX77tYmtw6N1EgCJb6i2VU2vVvyZ1f4CKy",
  "key3": "8So1ByMSsB1pt1gcfwVcamSqbftfq7gT9kWaYRewb6sYGyZo1H4VtWYqm1PqiZZqby5LwhwRjxuhXS7BXZiBw2s",
  "key4": "387MoeVaU6sw96BRypFB3Ymb3jEBx2ySsTx9zWdbZts2kSJmiCPaqJCGJvvh6X7dHuug2UFkF749ygJXBC5p2Duk",
  "key5": "5dgTjBL9R38EGLXr7SqtyM1oiertXz8AAi2UB2gWCaS2kSykdqGPuGT84RH6rrEJdfqkFk6UNFhiXDUehiSEPd3T",
  "key6": "5Nxg9gBov8sk2fmK2L6AVURpEZVfR3gT4vb3yZNtbnxnEHdzhqpR77dyzSdtyseyVDRDeh4MYnKQBbhV1pGymibP",
  "key7": "2cFo1k7eLDqnsuAkjDzGSF9dh4iDDagUqRRFAXLUqNvpLNs25dhLs5bK5Z9Y7W7foq6h5NYSnjywZryAutT74Rwa",
  "key8": "29QxLa4kvT6v8VEa1DZ8RoRw594VsUij5pZmLrBTZo9PaPqzrFMBoxZby8tcJidc6Uy1NKLu1xWFg9HYGt7wrwRM",
  "key9": "2QJ6zcqjFBJ9B76VpTM2Agbgq54B78zjg89sFHSFWRpFnGMHp5YYDKgWHtJvqLH77f9cAtoEwoZv9pZsHykH8L3Y",
  "key10": "5y7CMLEqK5LVxsePnCwbFggSfqKrXTd5gqFwg4y3cySHEXyKxMDaq698U8ACPcT3AbqpMvBTk5rZpu5Y6ZPFdmRx",
  "key11": "22gc8Nm88VEiAZDWVHbb8JMjPikt9SKT9YGQTAzFRdWr11hHmqgfZDQ9sfXEUsF7x2PSnxDotjZfn3kJSHdS9bcv",
  "key12": "4KCeCeiNLxwc7MiBir6iWuE3UVTmbsCQXP12M8W939aCjGGGUeEgizQm479oXg8Fm5E6SpYeGvSiLqVoYCdn43Yi",
  "key13": "kRvEpefg3EitXRdRPV9Ncd9qT7gUzpU4MZHY7FkFgcV7aiu1jdvmDXJFbdT176DMJwGQvhae6ZugmMqSWpgSF3f",
  "key14": "3BuBFmTpnY1NHmkWNaqCaVGqipv5uzr191edgY5AVzXCLkkg3razYTtUeo2mdTMBpBm2RJuargAhqLqK4XSM6Efv",
  "key15": "3bEWKVTXjoF7TArrqhYze5s79qB6J5uPJ5fYHFeuFFwQw4sh2oSyLH6xhiKhCs3AX575q8v5ZuZ9eTtG7xiQtGHf",
  "key16": "gFs5MK65pBaaiMggKv4iYaVHaGffDp1bd4bgMUqs54jfaHdiqKeVMbpJ3mvRDtKRUp1LUsFL2i4Pw4L7MSpW1sU",
  "key17": "3UKTnP1bKwZPBkidAfe9PutQCBYAYrgPeEAFk65mB1AeYQsTcK1UrV5ianGTgNFURiWJCvgXbLoxS17bwqEwmwsD",
  "key18": "2FBihWgwD4ZsrnfeMRZb8tThdfaKMnwG8pzwBmFSM9EiF1hEjaheW6XsVE7GqipRnKg9LRwdazqfXGqazMKtHdz3",
  "key19": "4b9NxKcs31xJ6BGNq8WEDzfrB2YpyqWrP8FHC2VQ7BcqsQkCWA2yBnTv5w6SC6uwuUwX7x7XUWgjg5FWGL7PbZSP",
  "key20": "BEqHmdQxe3UV2WqiCrgeuaRtXGASbCTTcSLXaStRSE1QhWkxT4CLpqwoHRJzd68Rr9BaVoRn7yac6tBDsxzQXEn",
  "key21": "FgoYDdV32aPrMmmxSZdvvcrE1hPFaaFkSwAgeGTqQfzzf6qxD2nt2rQFmQ2AJCNDz5imyHPoaC4vw8HQVF5vusJ",
  "key22": "2gBrr2SFSUmguYDy9JLHbHXUznXCDHmeXtQzqboXUbpA9J2yBqbpgh5eg8o6WxVgoqWJPvBWbSg79t3ptwwVWvZA",
  "key23": "3fDiU2UhRz9ifYQmCcNmeNgR5vjJ31xt8oiEpFPBd2PPPNcHzJW1cRRaPdAE33BxfPd6SzCgT2PCWdfoc7vcoUn8",
  "key24": "5RKkSinUmBwotLueztupPKcfbtmtG67FkzXN9engAhqqK64uxcYAUdqXzbuNRbr7oehG5fuaHm49E786naMYUGgt",
  "key25": "3GB5XcH8hAr3bFqius1inKAtbN2RzXokNDqgvYdou9pMJwe1bPXfGRhEspQRt2SW1rjFNchaoDQDGh3ZR2FVi5r",
  "key26": "xNm4o63h3mfBvXD8gqL4383KefDfN4KbawKhCU1nkzM1Rf7aewSuGHmeeGF1RKe4HHsdYm85kshfBPHAg42JqPo"
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
