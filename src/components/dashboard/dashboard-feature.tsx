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
    "4S48sdXdTMDpS4hqFCsJArvNEGPxpfypLmVrg4nZjxVjzTWiGpxBcQsMJRSpXXLBar9JoWg7JEHC7PL5HyUwwUaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZuuVUrFcWABYzNVoxJm99Ji36mEPzp4FMdRCrYbN5dvpKEprXgMhiernAVc1K5eAs4pFgRern88DbKzUtKGSRJv",
  "key1": "2nKzcaUWkqzmK36NPS3nboxs3f5chW3AKyxjbs1k8bkvNRrpm1uadjBBuYKBoTgSdBRBudeSjq6KwwXssDgRqDKs",
  "key2": "63YYXQWYM3SwtVMUi8D4FnwWGT1Nec7XiF6AhXrLh1bgJBDREkfBhGHwK1vjTFQCnVNUqSnodVrurD9MpnxL1S85",
  "key3": "5soBvL1m8jFzdyDk4H7hEJ46Lk4S9ruCPLBQ6vWPNLCUPsrE8JLAdKZRdeNQrCFRq6PKi146bzSdLcpQrvq49qeB",
  "key4": "4Y5XNosTaFKAYj2wfpJdnnnTwNzR5Xp5uwgDBp8kdb7xYPCMqnPZFd5sso9jKEDZmjyK8ihR8CtNARgE3UYuaVmA",
  "key5": "N9VMfMWJ4aN2Wzabsoy49P6Cybz8A7m11kLLk5dPTe5jcAGEiVKeUcZyzEvXHsnSm1FC6PRWN5sdqCD5Fap7kYB",
  "key6": "329opEMYrryf2SDzW4c5H2r5c5LCLmhoAWBJbqbFhQY6p8spHcVqTF85SXH2JZy8L6r43nyWCFmRtQNAPHHju4i5",
  "key7": "2NQu4NFxBwoEGXBicHjgowbvakyZ5Xw9TjQtM6MLAjZTZesiJHBCw4LTdVZ5uvXE1WhJT5vffbXV9bi8g7MAmvRB",
  "key8": "F99wnANnZuPX38dVbGBa36ikE2aRf94gFpvgvMeD81ktGtSAQrYxBavSQrWH2CVutWtANCHgRHY1sNKaNqa47cU",
  "key9": "3TtQPnXFJH1ic2SFxiTVrm1tygrK1TmmJGPAS56BM72dF3yoXH4nYFVyM4wHCMje4ZRsqXYRsksj1ybVRg3JCQcD",
  "key10": "5t7HjaDhFcguUYxH1vodRvPFgTPBLK7KTrCuCCmFr5tngdiU3AEPiZphf8vtRCmoMNWshhL5NysdwTkrpRVnhoLA",
  "key11": "BeQ19gLWSmo5tBPUdkzQuqJYhuyKYhgwNfUKM3jKggAKnbNxqctbBXCL8FRwq9hyaSYSuCHHnQaZ94JSyakM8xC",
  "key12": "5PNodfEib4DhGYN7veYPqUqXyPbpY2TRZKkkUNxNyKpvGgy5BUJ2XGofT6c4Zcp3Td28ciR7utP8Yo7WMB8wJsQx",
  "key13": "2m3ySJ4aXAjEEJ6xN1UfAQBNbtSDyaot4ddCwUud2fewvWk46NEfsUEnsCvw33qbSMuHw8ELvJm3gcHz16UfSTWv",
  "key14": "2tkFUpr2mWLnUU5xDXDSAJXX2uTcaAsbBzGDG8CXuf6Kw6pTxDG8UCsB8n8sj5VeoHEDR9TsbWhv3cdSL3S1tG5F",
  "key15": "5BGCyrd9L3fJ65cwS5QWg9cbdGDKKj7kzN34agy2V5VgL529jgygp7D9WHQrrYYwL6J2ixLkXtci2sBnktJ7oKuo",
  "key16": "vp6hTwaCBuCYX7BHguDWyQ1RtksNuH8R1q9t1rZTgzAbxNkMVtsvw1KruK4mDyXbRoNV5apFM8ksJtwcF6TZU4x",
  "key17": "3r3fJbzAo6u4AFjTxW89fVdNcMi7rY2vBBiiXkFyts7jvTMsdokcMqdYMNUJZvPCYxLfWjxXPKnuwsRiFw8ZCByA",
  "key18": "4EEKN9bQEs9M5wFJX7iPY3J43YhpXwkkfFbkcanEv9nJFQviReFx9W8kvtNYkPN7nw1mSJZfQiggwZohhL9w9oXe",
  "key19": "HP2NEgMcoXqBv7BDAEmoDvp25r6fV7ddsTEHrau6AxvYGSxKWZrm3twgm4vntS5JbQAGwyaAfnx1Kr1BKWuGB2d",
  "key20": "43F2ToiuaKFKeSwjEdBvYxxFMY4vBqjddZaixLMAkVn9R7oMMoYj1bu1oK72GM47YaCjXsCuFYDwCmZYhNU6fYi",
  "key21": "4zCKfgfazFmeNRBnqhn2coHoLn8cohd2oiihQRvSniAzVWJfESBeZdx5tDWunnuB9gKJmvmDeR7c5KQ7e1fNSC8y",
  "key22": "2K4PRdowoUjPgqmBeqfLTyRiDgY5DuTN7RcXmUZc6qgG9BxE2M5gxX1o8s7K4xqSGpbnsrxoZda9VrRwnS2b9ooe",
  "key23": "41JekBDf973pPcq3jD48f86RG6jVkHNukbFMzPhKW5vYXwZHVyWGvMoFMa3TskkKmeMCKWGbpPzEyLA8rbaoaHEW",
  "key24": "4TaSUc83fem8tk4gh7RyrCsSLnYVk21T52JfaJZbJ8VKwGcoei16j1DZ5ZYqpko72VKBS4SFcCkamF9v7dkzg7Nb",
  "key25": "8mi7S3aTEMuSWKHJFBfMmzWdus2YRT2oAbyj92iteJzDctj5TgjxEyqV9pGX6Dnc2AQrDTugBsCV3YrJGqZenGg"
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
