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
    "D7P1iVqhLq3287r8DoQoJjEyYPDhapMUk5Asjb2Vs5sap3ceR1WUSKVe8tpU3NxCHzbtyk6GYYCUcPwMLTheyfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TMoQnJeFCgkXoxPSHdoMCz6LBTQUTb65M7y626qq5iWCS7Ha6KkQNQ7xD6QZeTvNo5YDUMi5CHmr5SQYSZ6AVSg",
  "key1": "5TWJ2ytikYPdxyQb7K5ZE2a9pkohNdRBqqa7T4fGkC9vxyJWtCmqnZXX9KfrgZZ8LP6pYKbTyM9GwrWTjrMxfNVh",
  "key2": "23dd4sD63H3Bmfi1pTjzJyXb5hzthn8BhwVNLxCMi23VPEfbNwLPC1FBKAaqyyzP3jwEbogSFsWs6gyfWj1WfnGc",
  "key3": "3tj74beo8ciC9BJHZQ2SHpw5BW2nT3mjt9J8ZxjbCUQ1Xx95rgTeJCJbayXRsETaNuZfbnTc2mHVwtVxzdJTJUCy",
  "key4": "3Sf1RQgQsr5vJnvAqM4gsHZHYAw298ZW8MvejpfwyVqJwUh4bX3LxYuENxsRGW9b59GyXYRopKFHZ8AJGhbYNf4j",
  "key5": "486vK6nLbH1WSJnPwr66KwoUr3Q8fdPR7YbU7TKsLpdTmF3oEop7BD5Pd9CseKVgryBNFUA1mPTBmonD8Ls249ck",
  "key6": "627k838f6DW2i4gExHs9U5tSt2sNoo7ihS8bL8Um6FDDeWKmV4DwtCaC5F1c819PYvKjXpN5TXo1JPc4JqNUeR6a",
  "key7": "5NVyW162avasQAwQoguGYF39VTNyA8qygQV3YSuseUTZXCR5BBpieYkFrghF5eEsTHZCUDZSgmPk57Kqy69iSG2r",
  "key8": "2DPCqdTkdVtaPZpdxYJc5prn44dihq4j8gqvHidYy2wrUEKu1pKHVihNDFyyYzCXaPg7bKJQgL5C5G661GUaDXa",
  "key9": "53VQmcBKaQ5U72hZYGLHLZj832Rh5uoNo4Pp5GRaSyKTcqRjvpw3brY71BWqHwe5wkfyEnSxymTbQ3gKsRc4kbvq",
  "key10": "5prfCU7av2BiR99gxE8cuQkaorx9A87fGKnAEGjRXbNJdSLGPHXvPL5brnWG6Lg1DdeqMqVZNJkwpcDCo5dtgCXA",
  "key11": "5NVa5PmBTr3amgwVniT6MHHkAJbr1LjLJs7TLhSPrjD2CgV2wuz2BAkXRv9AouqGJV4roizd8bbVchQtgmBezHhF",
  "key12": "4Ny8Nuy2ue1ZdRkjkzwmEsMKq1tndV6NuF9wu2qipR73g61Usyiu2JdthcK1LD6ASYXFxYZKwd1paNRyMPgA8Xv1",
  "key13": "38pawWwTk8K5eeRzW4g3dmAVwmE4Q5szDHh1ZqrrQCk4tY92YxLEsAaQHWer5h1oFbUwLD78ghge7E14gchp1fMM",
  "key14": "TgPifBPykzuxChrwJhTmGYPFVCdv6xA1zHaX8iK78TFRCHyywZTYYrP22AnjH6rhAy6hccxjRMaWJ1N7Nk1DHBi",
  "key15": "59mCDapLeKGWU35tvpgBwS2kwdcDnkqgM9XaPCWLvXqaYb2swhhuVvVJnaxQa5P9sdzY6DoTc3uggRJaLxBLpHnj",
  "key16": "3tN7kk3TL51mE4QFXRYtvQCSqVyfXYMdjNFPUJ44PdNvdW8EWXDqbyo7Uzs43HvapRXngHEi8SXBFY79MLrJGd4P",
  "key17": "52cCFzJX64WF9RYmkjYY8rUfTy5WjMCxQjsaGFzo8J7S1eDYgD8wz4SaeGMSxioAPagBgtTvj3NQbWJnAmmr3Vzx",
  "key18": "p5RLXUvnUYJY7o24YYV915MzbHghw3FyX9aQhBABisCuFnBnsCgXGiecmzqpG13EP7DyttL8d6fW7MeRdCc3B7R",
  "key19": "3ExanNJepSsw4moSfPpMovdmiA6KEkuR39KP6ErtpDQHmA8uzzEm4SmmDhLjsK1K43tnTfimBhHTpY1MtimqXguT",
  "key20": "5jUJnBD3ZdUrFqRqiksBJaNek8J9VnNk4KB3BGK8rD3tjEoQpf4B2hCwpnR5ttmBF1A6rRGyKJNVvdP1rsN6FesE",
  "key21": "32cQxsTXYQANRYbqLHYaH3hajqBiVyJJMRTMzmntUjiY9KXM4czcrqWe4TjijMiFdGjAaNRHGGo2dbHQS9SXyucC",
  "key22": "5kTBykpysjUGwKSB7rpXBQBPjUZMNGBypuejXwmXMaLRuUwFBEEYNRY1vAwc5goDKDP3ouYNGChHhmVubYBQqM3r",
  "key23": "gAv6E3XzchM5LMbnJXJdHDFctQGUnu7qDhQgsxZeQJpA6JFFJwpr7zypY5yj3nviKcfZ7vN2RBT3u1zKp7YbVwa",
  "key24": "5GwM6aSEmb16WxAQCN8qgbViqwmmKFyv86u1vBuEf4T8ztqCe8n4cF5MjSfZoxn2hYdBY2x6G6qyDVd94tKbZMss",
  "key25": "hSpCbLNPgj1Z4pwSYK9bvpZSMTpYEsWxmDDBt2FV9eBBPXrDRqsUEqCkDyTrDz8HVv13YSf676F9KTUgNYM41ve",
  "key26": "65bgB21cKBcVfJXVbhDgiCvMK6XC9ydGxn9ctYBTUwe8fgLvC9S19AdtqhtxaQfnnvWWDn7mVsZM9Vg9SzkCjtJJ",
  "key27": "47ut7ZKGzBkMmE5U5g8EgRjrYQGPj9ct8So6BA47q6GRLtHNLt6h9qtVrL2x2aus9oRbFVxCS6N4UmaGgMk1f1Lf",
  "key28": "5wCiNPaatjTGEPZGAuwWYXKdmHHVADEYisRcDZTMFUcW6J9u1ki3aWXL84V36fBnbmKvkYuQWSP27XQrStgS4vpN",
  "key29": "3k4aM9CJqEtizHkARWJPmcTQAexsHCRophnnyFQbNqXBk2vwPL6STozb1HErezAN5NAVyaGXN3sJpWja42objFev",
  "key30": "tZ7iQVv5QqKppfKgGmcHhJw3nm6X9zS35NbP2J7Z2P9nJi4KmiRSq16czNKzywdVXreuaFRB3LxoUfFU81DbtB8",
  "key31": "4zLpDAKcdFHqW6VLkEuBC1s9PyEFEtRgaaNYawXNczzVHyY7GVe6cbTo9f5CskuAEbP2ay54jWTFtN6dRkti3pVs",
  "key32": "2FiUxji9q4A8ELtqG132KxAHFSg1nwz2a1L9BXpzT17xRuxcpNKikj9bycjPU88NftjxASHFiA4jTb5MiaZwDBXR",
  "key33": "JynQ6Cg8vXKKNTudK9e8R9wbrTvtVzvDqdom19NJ6uSc53HWod98owEwYUULyDa2o2J9eHJ12MbRUe7S8aJSCNZ",
  "key34": "2wiM8nzxAcSWefnYqKDVTm33XEfqSbhdr6UdjZ7Fdb7AjL4xARHLFFL687GtPdgt1dyyPjwRTGZwHGfWMEJUt2Gs",
  "key35": "2K2o6AiLqHrTxYr5U44BkVLcpcve5iwRXBqqWLLz8Jbvx4DWjPy436vmemiKVK3qq5uUMdwD1LQeYk73YBu1R91t"
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
