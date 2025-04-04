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
    "5KS6XLyk7X9GZwtZdgjgWvHnqNTXbyEaUDzvydSkYiLqjLysVcuZZ45wrPMzoQV23zT8fPyg9ppeZr4PipBe6Fnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YqCCnF8iLkXuDkSa4WHzVvNFcvJYwLgcsn6sE2cmHSwnBXuQmNg5dgJmpdwvJ6gFncyz5E79xoSnwWMMBhzcAjj",
  "key1": "5J86rWjvPtPRpJKPR6UK1JuwfE9P1RFax7JcmfVgZwu9U9fov9p7xZUnrC2hi2eqgF5ohPvSHXNtDw3Ls7qcARop",
  "key2": "4aNokGddjKg6MZSSN2jVmqDXkbs5nCEZEi6TAZQsMvRjKD7tMF86NBXUKA7psettBYoxWfHKkjuHn2VQuvpji3gf",
  "key3": "4BucodsdwKQuae2DDNLJo2BH3YSA1uXx8ccxnm9yNs8MZJJiWJUuEwh7CeNENgDs8uiy6UVyv9Gw3MvzHtpEyAiP",
  "key4": "3xgBzt14DeeYYUnjnY2Y7Ncs6npi77XyHiMM5aaRtEToSZunp7sN9A4GXmctCa1pQKuVUHCgyY6QpQKTxNPMi4St",
  "key5": "rJoN8Tos9xqSnpKEFN7Vv9ejefRcYEjbNDtrZzpGKD1uBKpF5ehbTdVMgLvbRmMpYzE2b9x5hVkaezy1mC37q6n",
  "key6": "3U8wP6feGdhDN5oFA8oZPfbnPEVtvahPUxJtcAEV33NVAYPbuB9PuwFtYgdwtXrRKco9Uj6v7vT7ShVugknfhGTX",
  "key7": "3SnpzdWpQkLgknSnesgRyWEckszEVrACj1ndqhPmfh7fkh797372vz4vu5v3YeQMRn4Lr9sRjPTuJy42beSCRFYt",
  "key8": "5dvZGVEY16m5H3LW4VMiT5vsLLDtpxAD5UAny175aqS47sNCEzbBLVj3sK1fSf2Az4XipaLjcxSous1MLoFDmE4k",
  "key9": "3vcLnwDNPsPtfd7Ecn7UKLYsQMQkXkZVdrZkB1BVW3v2Q45XWPkd9ebAg1TY8cxCzywMRo6vNLxtJVmxpYLe3kuv",
  "key10": "2PU7XFfAFGen2tpcAzpyXt3DirB8hTe9rjNNj1QZBYD5yQFFUX8heuo1EPC3BeMwYAVStzUJ8UrvBYqwD5qPQ2Jg",
  "key11": "2d9p7E4SikE9ZnKnrsGUCHYaKPvkWXvCswpiq6QrFYS2vremaeftdzUtftdg64VgNoW5BCjZSHympPUUfP2EWknU",
  "key12": "2zyskmdGJ6Pj5DXVCXUkCckAqDV5nD3aeaAheskPPFkBCa5HV3YeCabQyKPNqvadnzRijK8dP45dXf4LNgxrgkoh",
  "key13": "4vwgE6oZvjijMFHqx6nULRNKEvoWsj9RYhpxhY1HSqQZzHFZ9MhuNGrUHDLURpyuGTjUgRGHoPvGYzz3nbJyXLL3",
  "key14": "3wmaxwFgW6bLcMmrPuktHkQsTPCFrcZG3ZumCN1BXxgQS24nv4YHugVpXhD7v35xQBaWCR7zqa7kuM1wmHNKVwTt",
  "key15": "3abfbUaEW8nwjax55yASu2krUuv4Pdpxzh42xZHu7Mi5hSdQ3qbTxLLDh8x85SboVUa26W9UtXwBvRkZrVs7Ae7Z",
  "key16": "3L7AFSHP5LiQY3ugz4tHVEeW57DFANQgNyn1N9zN4FYux21qbuNfCcqmyCehrc8es6maNWFujr3bHonFsPokaC62",
  "key17": "38hFJkYfrtBgtBRKqzN48qno4xVbd8uhTnZwo8iguUK4qT38QqsigBSSan1BbHnMesGdxxFhsv8qoPZm4mD9Ru7t",
  "key18": "2gFTKoVJ8r772kygXHCqBSZ8nNbBV3ZjK7zJ8wPgZjeA29JYeAcz99pxQr7vQ1B5HWb7yBWpVEhqqzJnayDWJfw2",
  "key19": "3VEWM9ecji2ePry62R4qWWVGKaqpu6pLdrSh4CbUjVivqJGTzzyHfGjD4JZ9QuiRMVzssjy7swkevcUgZ3WkEpVe",
  "key20": "3sndFWfV5U3yaowvyNtmUT31WCPi6MT6vVkb8XFR6GcC2imLJHJi8mD6WQYqvMVcnHVhWeaq4C1rD7SHUVztdzuq",
  "key21": "4NmzdAMQmroUhb9yKWVysHMaCrR59nfs4PTnDAP2xsPmuHZUVq1DTgGeZSeRNm4mApD5hfDeENWFLKyXqF1xZkd7",
  "key22": "5eToQzhaqHbNEwix4pi7iEYJY8nirbLR69PBh4quwSvWWvTBM5PipZHruv4GcEp5ThcN9NLskHmjVzBhzuyWhman",
  "key23": "58N5YH5TzzZkggkLtyUhKgEsmTNrJQKRTAof1mTc9K3kRc1CvnC1t3PDdwHcpB2vksz6HZnqXTWBbVeCfuWqpjBZ",
  "key24": "2oDvAwGCUNDnFuSTvKutbExMcejMbFHiMNREDtdZkijA5rNAXPCcof6rzMiYKugmgEnBp4ue49abwFVcWg5bULGq",
  "key25": "5FuZHNgTZEGXy9pRetttXocQF63NKwfmubmacX41fia2cVMrcHAFooxPmuQqnstbSzFeqLbJCuR9yT4V5Ns8xA6j",
  "key26": "2sxZDsKmh4fyHkhJa1U5Y7v8rCA2Dzt3nHwsD6t2UUwVrSMB6HkohXkiakgJ8TxXw6AG4ThZL1sQkAXtGovzespx",
  "key27": "2qfg5TPGnHgAJK4rPkapM2otqgWEde72wutjqpxREth5fRxdqQsLZTthaMS9NXuV8KP8tuJfNXUSZjUUcRKonL2F",
  "key28": "FPUwdqZ3CCcF2txCMUULR7PCaUjydAEA9bbKKEHReoWiL7Jp7jyXDPTDRCK9F4bsFdfZfpea7CGaxUHrorUaqRK",
  "key29": "5VX38DNrJm6DfbysuuUTPFqjAQvS4L8p7Ggu93B3szh5J6HWyeUdQQToV9JEHn8bQs4mMSE59gV6AVFWo2rxebrT",
  "key30": "3Fy9xsdustkmSjqk5J9DNrEq2THB66FjzGXnmeuLzmHjD3yxLSndow6LYf7UVf2UU9wuw1qdj8d3vLwYF4fb3cmm",
  "key31": "4tPbGgj2XcMFiiuxqd9Lijr5vGWcT53mVLRVzP4qGPQTdHFCGoVhqkzz9um6PVnEgar9P6i9BcRFhtRhKwBCeE7w"
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
