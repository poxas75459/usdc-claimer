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
    "2e1NDNf7Ft8tbcx6xrimJC5NGtD9Crb78usApYHmrDUE4WTqTeHrf3X5xvFue6bSjZoWkGzbA8EBhummK8R1yLBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gBWSNUbXKtkQaBtro9NYTVXg53UwGUWDnzHaJqUYQUHQXLgpo2iMTWNkvvo2KYMt9miCPNx6ELV8RBxY7K9pSGV",
  "key1": "3mq7h17kMSifkp2hw4FmP1rCrXWL8hg5wHnSf4va4ivVDT82mAUHBj19JeZ887VFK166YnoLSatoASfB4HStHEBN",
  "key2": "d74Um1ZhUgT9fZt17gm1zBZoixJYoWXGPcfUiMJZAxLw19Y7aqw3b1orrTT1RuRStQavmmFme9W37uFihHKGPJv",
  "key3": "2Rz4q93fPimv5p644w5sxcdU9RKf8wvKPUHdKJQf7aUwvzpBEUiFuBeEMyxFk5qf6FYe2xYytcUqjo1DHbs8rEaD",
  "key4": "4kwcLQSG5dCE4zhdkV6an594QMtnzFsMPDQt7HxnoaWQ1gBTXsnCAsToM863j3ZT1pJb2GH9kMGGQVph6GSoiDuL",
  "key5": "5kAKMEq81KNekzML8B5NQiQEeiyWxrhnFdTkqCehyTB8zq7SzmrjkiLRWPZZZFPhgsjh2aTirm4q7fPcbSscQP61",
  "key6": "42zvRZRCLQwYyJyhaPnGCJJHY4VQL2Dt4ayntfNq6KSmXhe2rUwekZi58t3HhXyGScWXnoop3VLfWvzWbhm5jMFZ",
  "key7": "2KpbwPHXaZnFFreQktMTfq2t6nGaSmmSpPEkNaFDeEvAT7B7Tb5vKHbzvkrHiLBBFzW5o3T7DWzYxakQgHS5s7u8",
  "key8": "5UnAN4NucdWoDcuMFmDpH2p8sxwYpLLBw6LjvJ13t7dPJLHbYrWZTkqhgskUTXAa6FLmxhZkPUxyAT5gemeczSD4",
  "key9": "iPHWqtU8DQakpvKMgxjyw4zNyKWW6aWhgKBiy7QuDF3hMeBpwHkq8wg4YgTwhsi8JkWLmV4m61m7pABDbvf7ZGK",
  "key10": "4mRyfREHDN53cTh3GFh9mC6twwvxNTFKGxpjhBygV1tLWr1id7u1PZYhvojC4BvDBquzQAbMYKX8DuFkBSPbb6mA",
  "key11": "3VvbfoUgTg57eFo9eE32gDCaCFvVsuVCRGavmUkMegEgLt1ztw9gjdt7d4FAoJYPxN3jgCUgAWhMLDQxhMvMLoWt",
  "key12": "491Zs3GWMx73McQaMjNQ4Q3tNAET1mwq4hwumZVm395d1RzYAK798M2kMwf33vLwZ27tSoUht4t6NepKGazC95hB",
  "key13": "23zbqNdYV5fngCRnLd3XitKndoYKsUbMyTu78n3LPaWVdvVMhwPmSVzosTFvgfHJqLiKDkYUmJ6hxVpxYrRZMrxa",
  "key14": "2TjLrebex6T7HZpkiRWsVp7UBuRDHFejC257QuYZHU5vaDnnVShLJ6iVpJED2UWyBTmFPpBS4x4HBX15YQrXZJnd",
  "key15": "boh1HDpV2frshbq3ZZ8uSnL9a2TEHTaxRGKU4RmPzeRPDSFmQjTh2pZmBstcvJP1zBonSieYNCoj9zZg5D2B9BG",
  "key16": "4Ex1T11a7o1Tzre8431gf424QebGUH2CnZpXhDvAFYmYqtX84nZbxmUMfjgreosJ55a9KdW5jrke8P9fLnseGs6x",
  "key17": "5FYbJjnP9uZTUSw3PAn6rH1J94beXdr6yfYiQ1MHcsCgZFZp2aMocnwBRd4PbxFLm8uXh4JGpSfSYmEp4B3Uw4jG",
  "key18": "e7jrdsiMBH3gFYoUpZSQVXAKkHNUcvW61HeyrxQjzCZMWWk489jdyt7mhRLfxQPJbXGsfrqdyCBXtawaB41NwkF",
  "key19": "3BqAbxE6ZkpkF2NyKEtSZ6ZEVQWxR5SZCJXKVgMXYcnkeb6URXDJKWg3QZSWHtfJApRcW4fiGNqvRZN2gmKFmyDA",
  "key20": "3uag3X911H1pLiug1zHhA8FNRGzQTP87jNXR8ujNJLnyvW54crtXv3uJgoUPTvrRTY6c3oHxyzbugNgkZc1J9hL2",
  "key21": "6tPbKUCrUmki3VX7qUQ7YAqpJW7vwMUbr2rvEMEH8cotc3dnuJQ9vwgAq1HW83uyXMcNgYLUFZd2bARTALKvbzy",
  "key22": "3ckdugZKWaZLmSrxuk7TuhC4PXp1RK9ZrbJNPPiHtRdHDiAy955B9R3NVhjLmGvXg7Nws9tQ63KpoU24cCSDnu5t",
  "key23": "qhFV4iCQicq7srV7C7rVVLUbP42THP5gcHtLj83tSMhG8716ukbtGCjTAodfJxJDHKWhYWBaK2PyEtNvoTeE6U7",
  "key24": "54Sas8ATbkdM7JfLTeweGFSoUnxoT8z5mXw8ifHwXcubJsbyhx6ngx3KY6japqJr1XgPHVXPMm6bdTFQ6PzZYdy9",
  "key25": "5BqHawMpLq5JQTtYXZFFviFGzpEEsbMFU8vGk5eioqoXtz55GHGKkSB7rieYCGgXqqd3Hhn2VMpHDRGKeCZXk7fE",
  "key26": "4NfKBBMcdFqqqeownyY3AG4PTgR4DPiEugomQbg6AoQnUQyGmKcs2vEGMhj9vNSdrSECBvhobE7WVxBjiZZagTc7",
  "key27": "2T6EogTBHoG9y7vipzpqU8pEc497UYGgSiwaSrsf1WBiVg3Y3zHXqMvuRnW7RQDfxbtYbtYLaGDmBF1uHowC5nFr",
  "key28": "5gj4SfkYFvJveAq6XmrSXAfeVcHxfrpsfJx5WLWwgQnZ2ciKGEjAcRh6d6LtHfsCJv38hoqdp6bnyS2hYQrtAriq",
  "key29": "4RFFneqpAQrFWvxS9rDwPhMCj4xkMp6m8pBgPiGM4xJ2PbiaLBzuymuVSErakNfBuFX7rS1DvCEjUzb47myXUmZt",
  "key30": "3rvki1j7FL9mNTZEaGEEYwySr13zqMmnKHbCtcuYTQDFYzztYtMHm1X2JStbnapcR6y8fo6H5LyYW5spZCZrhQCW"
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
