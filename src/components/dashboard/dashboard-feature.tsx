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
    "4DSHnRkcWtQGHmiwg8aPxgb5ZGLRJCwtz7FUzpHQxgqWNqsXHAmLjWe1JoHaUkrx9bPNTHY4Wr8wFTVDspLeryTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fD9GZ6ALTBQ9KspfTBGvcN9Vq7fhybSikijpfuovzsmRBUBntuKV6EuNcBpzKJ26iNGsrBCVzZcw4b1LRZfVuyh",
  "key1": "3GJdNWL1jA92ihpyMiRX4VMwerGD2iWCX2Yhy9Avw6kLscEmSTAnAMLccgqCr5EiscZYUtFuzdGuCTKMacT8MFxv",
  "key2": "dKkQSurzpWqyrf8g6jKyi9t4dHTY1hyV4bgRT74nTpdfhsP4FBg9bG1zAdDc4E1pWNK1ggF4wfu5SZCh9jqFrTi",
  "key3": "23Cu2GCv9fheL2RmN7Tp6gqQwGMoxYw4qNgLaaBRdzwitE71DVCfT5ycpddeovubTdoa8c6dpgh2hFmH3c7Bk2x6",
  "key4": "4dM8dtj2YSNKALEbpXfdPKuW8dbRNSArUpWW3g7nZazEoT4UYcfvhTYgfCCHe7oJvjb23Fpk3Q5B2YN5EkXJDm2Z",
  "key5": "4BSzF6fDJEVKvzU2Dzty8JNDB5QPbXKSjrw1Y5v1ud38gsz9jNeCvXtGLUmbFAwb6cqU9exBHVWqFT2zDbGPhiPJ",
  "key6": "3A8jhJjLnAuSTWLh84uwvTj2mbysgEcL8Umvefda6jpoUKVWyD1CRzAcadd7rmwgtyvDbe4QZpGRPT99cUCtAYMv",
  "key7": "2LRm4gUCSxK5uKs7yXXqWGe8cMXbjdJmwRi9LLWQRkwT5LNbvqajhFjcPLyUGuhkLYs4oR3UGeMA2sm2ViRWHwiv",
  "key8": "4xj8T82Ko5vFWCeWhtDn1oWLP4U1aHKnwErkvAikHQyfaTc2tichM427GRzbbgUeNiiX7z3wV14gf646KgPK2NdD",
  "key9": "4ntREUqMVXr84YEeVAC8DYFfsLKK4qmCagUegDL3yLf5LDZC6ULMhSVWHDf5HruWqzBauqYipx6NdvsyKtsu2pPv",
  "key10": "3Sj1FreYv2i51FkQHLk9ADoyUTBdmzufYBSj6VkUDdhR9dxd1acgdtnDzsWJrutefFNQ9HVq2fo3ZJJRSe2GgP87",
  "key11": "5kz1vnL1y6tLhRjQZrLhJBxhF5d7eUxGYRT4GLqTHbaQMMUhjmYsU24r8tn1FsAahyNNBs3N9h7mugY1fq2CQ42B",
  "key12": "355R1mhFHgsVBgqAJE1ZrvRi2Sxb2MNqsrirjH7Cn8et9QK9cE6qYuyQrRVVMVaumzb6QXuophmcVDKE9A9rSCwt",
  "key13": "JKF7cgSEZGzkDVScPBTCEsgDoK1QczDzy29ntf6KwCZvjMsWw1Rm7Ud1YPwvBWYCn6XLZhcH1eFk7wVzMsP3D4Z",
  "key14": "2dvEtafWsu9wEpJLDpexz6tSZCcBUp7yy9972qfcuVDgcgR8VNtjrd2j1x7vQtVfN6Q9Rq1Pbu2Fb2Xw5YU7jisD",
  "key15": "5g6gVBnKpBMLNLPJmKY8E4Z5CaAPpEieAVcnFvs8cdKg3UYFc1h66XYbJLEXBm8fN4sEBFa5rrYZ4F3B4ufMg32r",
  "key16": "iqpJfYZHXi58AXSrDjZquEzEfQThzDtwFsp3K4FHi8mHdCxTdJQB1ZL7Hv9VNPn7EmZ94a6fkyGGcJdP7AGDmfp",
  "key17": "5mMACAbuiVTxz5m8wtkEfpXH4bogW1PSWC58RBTwBN3jQgDKA49hcTQnifpWuxc5KFQY3BFtYqcGS8dpzwYPy827",
  "key18": "3p6a9RK5BfAgKnYDt3rPEmgv8MkAEcPkkd9nfiJCQPHfmfb5262KgUjvTc8VAebh8XDukYFudPJc2GFG9PXhnMd7",
  "key19": "41VnMm6xmniawp62q6Dr1Y5pti3QDpBj4fYSPye8XbLZPLc3MA6fGgkRhxZbBvKPpbNTiWf3BzzVxtzHwm4jUrX3",
  "key20": "4BmS9GjPMdqs9uCsZF9Famz6Lhk1Y7jaXgdBKo5MHatTanMc2vgPkiFUkCJWa4T3BfELhLRNhVVMNvKmnMtZw4bv",
  "key21": "2cB9J9VzgcCpy785iY2t2v1EdS892K6nkBLFbQDqpiSKj8c1rum1wCXs8JdWv9qTrnkdZfAsVFSep25G8nw75T5L",
  "key22": "5MWmGuXdTJJmTuoWPWegW1EmVoxE7zkXnHiK3W3CDnzKYdCG65VSfjnDQ6HpKcqJsuQg5PmWghubHy4GN2LKCcHp",
  "key23": "HpBSZwHSvQ7sw3cursAxGJPQ58wsygqNTkfm7SHgrNs3x3DC5UnCkHBY1e3NqTdDMKKvbTFzxfYjs5YTfaepJZ9",
  "key24": "4wR25N7mKxNJNv9m46AmXZ3DeTUSZnVPD1NPqRXmcYFZxbdUQHK6HAjTt4rRp3VpryukgjTpqhFtSezpQv5UJcUx",
  "key25": "2UhFLQShpiX3xeUpU7kHBg31B1Ug6CABXnpuytuxx5dqXouGb8LkGu7fLho2oPRWgspAg4FNj9mCPWyCr9jNhXeA",
  "key26": "2DJoQoQZr8ftsLp1Dy1r8Q5ViaZNsCxk1oUwkYcxWUFtvNH7kYj4mSX5ppFDWbN42KbMo8nSXdFenw7ALYkoTSgR",
  "key27": "39dC6DDuBgAvWwsLdd7oBwCCQgD16GssPWM7dWGNHmXJNRxyBKoJuRNAmKY3akk6dWzMjgWELwBDhavTmCyPMWzc",
  "key28": "4vjjTruwzqKQ2XUmtM3wwvMPEXCCwJbD6fHU32pEe484rLhGH3rYiphN5KTtkrNvtXFCy1jMbsCPKqoSU89gP8J8",
  "key29": "5teSjTf3eU4wdPf9mncAEuEaQ4e4v62ZHijfgassoKxocHeXtiiiDf5SKsYjEi7MNa6HfmqfiwyvDXZXa1AQNbbH",
  "key30": "UbCa3fUKxs3pf9pG5B9zbCiTwVkmMQi9ZLQbn22ya4bZUutWfxDc8Um78Ybjv4eMPZ3M5CqVeNC3KSgWaShCrpW",
  "key31": "4C98aMM9HWrDTHAnL1zeHs6hbM5gzsU7RqmjzRcbgiESZcFJ5ci1X2cZypbvFgdczW8tRGkLNWBGdqjwzgJju57i",
  "key32": "3RKeCvEcnkrLaEgHvGqPbFeQtP6fpxwf5z1ETcyovLEB4u1caf7XyPidaXuVK2oNXxUXev32kCRTRDX5QwstauYA",
  "key33": "2AxqBWCAxP8DS49fdcyXx5ZoNjZqEiM8wCtBJ3TJu1an7sCsDGJ4RGvsHH1bd4FDHGYoBVnT6grvATS53NFoRNT",
  "key34": "66KpBHR2wL5iktXTDn2Zt5zk9S4vqeQrA2ABYgKM3FNPcnmmTjV7Lgpka5vuAMRmJ9HEzzhfaL3UUCJJeugP493d",
  "key35": "3P3eVdcows6rsXEEEPjvu3XLCZwuBxSxiAFsEML3UQbe5u1kMaxTjER5kdi9gaLn2hDTksGBQUgZKXhQCh1etnFR",
  "key36": "3p1gfwh5DtaF2gn4RnNLHs25SKn5c1i3QQByLKSkKh2tmpeqsTNLaQLeqHgh7dYe8TVukDYsUUiiBgsdGmPxfywE",
  "key37": "JQU494auMaqzxpaEiKVB4D9iYrxJvpsB3mUMbJcZT3iUEXUmf56GHn6mqDjiZQad3zFfH1CrEvaDnyT5q7DTWtX",
  "key38": "56Xw67X9LdTUoy3Lt6s5UvbkykwhvJpRir366Ny3P3nyHVF5r2cj3rdKcDJjDAz6JsFDHxRxioWtD6u2rvcUhnJh",
  "key39": "454q8jEHc3GJDKgFEyFfnh5t9rdWCdSAaM7d7EL522JA8g9hcDwC2Vm3wmAjEnJaPdKrh45yd2hZe4EUdR6z6m7s",
  "key40": "UH8teiVQe89Rt6dWCqCo1C9xvSft8UpRo28HwTdqokTSAwVi7JrTyPSSZeXsZgtquaDmQBC41VQ78Aqu1orGTLw",
  "key41": "58buyPqubisREHW5b7Up5Er4NukHyupd9XG82gg8RTyozDUB7HkFRyADUuELwd5zjQ4jUCctxGMwA1mWihzqdD74"
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
