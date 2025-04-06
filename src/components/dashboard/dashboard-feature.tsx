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
    "4gVSJkquxX41aBkyccLD3p3jrBSAc3QWP1akdrcEQ6e9d6nxA1CPpJXk81Y6Nq8oVPtfAhK9y8BkqZkBrBJ51Dnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HhZBGbJsV58ubH4wjzEj7PaqX9Kys985WWTnjchAr1gbExYKDbfA1c81TaSQLZj1vRj5eED5JA1ynxkc5MsgCex",
  "key1": "3o2aWHrj3cSmuY2d5SUcYsSFcHg3A8Rh1uXLK3cP56bbuVujBvWai3YZwZK4pmRcdLWLej56BSeB94X5ZG88nmAv",
  "key2": "35Nc9zL38cMjDKX5ZZvRDaW6Ft2cAGV4byZhyjNuK7t6Hfpb3MvmwtfZ9sJNMtEVRBPCnT59a4KkFFp6oWNE4iRn",
  "key3": "CNu7CQo4w7Xs4h6SGjFBZu2pLm7nMMS2pPV6tbyF85CPYDDiqe12JTUgPaoUBcV76dqJJUXCSt5V86yNfMFPax5",
  "key4": "4ytDno72qvkJmjWLLNFypbpBrhwGwrPiEUsLExvH6AB41rRkfcpkAhAKn99Ut3jzvXpBVviD8ey4tDiLdCkCEoP7",
  "key5": "3z1CuS8x6MXziJJZqUQff588Jog5AiqEzt1vzhf2qU4v4cXtymL8PenQjWN3XaQhVUdmSzGFRYiogJNJdeEtxudK",
  "key6": "3ASJbRMj1WjVoXoWFMiXwWWa8VXqUKhvTPpDphGjEGT2SBSsY7rbcaYWnpkzPCLAqSHnzEugK7fHXH77uFL3CuuG",
  "key7": "4FDLsrw8n6W32PYu7D4mAb56geiMdJ16DWJVdNiGqL5GaLZys1RWo95WRefW1PA9oeFNR4ArzpJqmR7dtAsik5F",
  "key8": "ojEe2DKhwB32ddZnUDJo26xjhG2zfqbPZ82Md5o59vyueUoemGK9hyRNDXPKDZWRbzDQxktodEMpuadvfrJ37JS",
  "key9": "5WQffBTMQJ5bTPmdTxUMJoPT2sHAJQQqKZQMxmiJEwWCgFYPUf2rQabQP3PQHmGrewCVAXeo6ALnFNC74cd3Mje3",
  "key10": "2yMxqggbUDhGbJnFm6oeMb7X4TUqxAFFsRyctr7q7DH7QiUtRqp71GfhHtPF5faeFsfa3WMoFTuNAAdW3dDLPtV5",
  "key11": "3rpWcf6fcuDJTZkMaFLsNzWR6EYen3zoZUAwe8ZuTthxSKpJLPpUFfqZbWo8v9H1oiwjh49rvgNNsHWRbwyeMdqm",
  "key12": "thykjPV3jqHbL53MTX6tUL16P6wvGQSWLNrqFdm4AV1J1V8KoZMrpbnkC2SP97uFuWkNHNwLqhyfJubcvrunHtN",
  "key13": "3i8C1WPBdhdaBfFzCThExzS7cvaMGC3TyDB5rLtxvinRhHpE9Est2Q26v518bqPw5ta8CbmBqjdRkXPD394iLZP3",
  "key14": "cHH3xc8t7ZmuBphtTfLTRGgU1cDFF1WtgPrmNUkqPu2ExkBTJXCwyu9AVz8rJRBmt54Vc89nwi1ULLLfDxgek7A",
  "key15": "4VNPQhBayyo8Noj5aUvtkv49wCJo7RaLhF7AHFzbe5gdY9P3x8c3L2JzmarC7mKcBJgXFf5ogxqfkMiQksqJAXro",
  "key16": "24n9eNA3VLpFisy7cX4qNx3VkxXkkmHvLK1sagwiwrLMpLj6P3FkHwH6yVLi7i5phSFYaEsiJ9XqmBf1PHbJsgfo",
  "key17": "2JXCvg9RRc6TXtif38Mfs7DpF5St4spyiJj2NFbibr3hDeTkrapgy5JkCjqjLHeAYr7XsiJjAU6rkf2VZMDCBtzL",
  "key18": "4boTSck2pSfL4NRF2wWR7XnLU6zrAxCUi2MEsexc6zDWP2kP41mdLyttdgh5yBjLWYsgDfZYDUR6NjuCS2ZEPN1Q",
  "key19": "4CRmwbibkYdvB3HYL1TUWiGPgTrshqSaAtfTS9MYtZFWan2Tva79p8uFahVHWi1Yus4KHKufGvbQAuoAHqV219HD",
  "key20": "ypSYGRrR3SzQhXkHGD16WF5gK92eX7Uy7gGzQDNsu5JiRG6ohc9HNz9VjpqR1WHmxgQ789QoQY5PJ96bm3tSHTD",
  "key21": "5ZSGUiCRz7vCKmzGf6SDs7ZnnwzEvTUexNWiZ8sdYFXWSMudDQYKoyZa6fNbXAKstkTXZFjnHANYyQLoTgCTFtAa",
  "key22": "4sabF7PcesaNC3mkHbxYFM9UcH5NWDMcnF7YP6i12wzrBsPLWPbJPPdwSfdzTGrr5ayGm3xGmX5x5HXyguYo4yCN",
  "key23": "fMDRjKeUnCh1qZEFy4QJHhzTvYm2FHvJ31jGk2RWxdnncXqzY9F1psTFxiuAhscDxYCoHkPwHjibSmWFJgpjFad",
  "key24": "3mkCGSk8J9rDLm5QigKFuwocCRF3nRS8xQSYk8CBiiPyz8nMq6MYrd3xPNW9EctowZyofvD1SvC9qGiXLtCsPLSe",
  "key25": "3r9wCrPRXL7o1kSPyrnWwZ5X7pjPjSvv6BZhGg4n86h31KDFwKbGcNbxiYa8DsjFc5UuTsU2QfudF7TDHUdULnW7",
  "key26": "5KVu9txaYDiHVSktNe4CY4f5U6K7f1MvbhgfePF3T4iQ9eSq3y94bANt3ttq469PhsC23yNNz97kcnFmYYwYYyi8",
  "key27": "2AgHSwM3QiFqDZ9G5YQnW6tRvBDBxSG6mQzv9Tqh3iZTChh4arxcRBK1Lq6LryAVTsuGb6b5EfhqPcsL1kRa61HF",
  "key28": "2kRKp2oSNn3ZQ35peisk1uRKRcTLZLjnmU8vkFwdwLzGjdHNFaFXE5Dp63NLHoTUG9oq1SwFjpBt3FNzgFsXuk7i",
  "key29": "4QxYLuquCi9NdzodnvG3bcJY1qCY6w5ZXNdjFtv9URKXFHG9TDUDJYN277e78VArdEyErBfFGNpdbkqg5K1CbmoH",
  "key30": "2cW2nz5VkWCXpEcnZPB5kjUQvmTW9JxW26RQfNFgbgmdiEahpvMz74LJ21Jk3nq1d5r8vS5HSqBvEAXaruMv3gR2",
  "key31": "3jkvzsVagnzMayiDoysxd2gdEv2az6966SU6hLEP4eWf7XVuUxmcJnkAeQppNB3AoYMe4domhwGeSizha8iEakPN",
  "key32": "27cPyicg34dPur1kxg8pvhtkVVKxbLNM6rScD1ASw7vsKUJmpmxqz6SeTYtjCyvnCXdshtM7wPaVFAVE5wP2k5GR",
  "key33": "4PLrr6mU1QRrxeebTABBVyUQB5EtEevpWMm1vty2vTtv3yeJrFY452iJb6LtXjwKVL95gYsV2jQwymg3kzbNd63o",
  "key34": "2uFqESQ1Y3oM1eYHNh5mm7uvV2DFML6Bnqr8Wzx9wzsTFFwg9ArS6dANErzfTfuYaGzEW77kyJ6epop8zpt1jEbs",
  "key35": "3j9kShVzaC79i2zXnLN7PdzXx9BkmSeWbWaNHiVir658YKqYhwpExPpuLUAmrXVJEvSmsWN4BgMnyp6DgpGzk8db",
  "key36": "5nQQtpCvmf3YkducRmxvqJnHCCruqzuYpHn8KdhaT2DXa2rkGDGnSkLbjh1buCSrwTqm61JhAwZY9d7hiQnLngv",
  "key37": "wXhMZbDVH2TGrWsvLBJkZSZfUuXxSAMqY6K9gzDC1aCF3JpjuTJqUs9JWS35NQE4yYzyxS9RrHtwLhBoK48i458"
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
