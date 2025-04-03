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
    "64MATExGmY8L8pwLkEvvLHUkr8d8jLMtUiaoaRXq5PifWZnMzB51QL1DdCmAAQBpp75NtH2P669FM3iFbife2zhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uUDFUeSU5ukioWqmab9ik58DwNzPVqhyJRgFiDcSAsEBU3njYZSSpqRzJ4bmH5is9EQjNrY11CDuuWdzdbcBhoj",
  "key1": "2SURQrz9QcbUbRUkGm1AT4Mhu9kxcWAwqfs5FvUTq7RFuvrMJ3dUCcYg5KwkvxH27NG1MTsqsRVHwJQPxshi9DRF",
  "key2": "3QkUAMzSduXaUdCa8Naix95EcCFxPi1TGhZBXER98jQ6y8gjCKCmP1RywADXXJc1kmT7agGihodXMMhB8CLDN3Lk",
  "key3": "UPbZZ5FnPUYfq611TdETSUeYVTniwKW4ECPsCatEVKb516eii2WA4AzDWVw3dgJyYkKEDnW2tF9HCKtEzJBDxmt",
  "key4": "9UH43tsREVZHw4tCiLLQNbvWV2dQFQmjhPbTU4x63qWTMU3GmphRcxFLcd5JBpFWAU5RXBSskX9d9UtjXFfFpBP",
  "key5": "MdLdLPmqouQwxXzSM4AUfknscP8Uy5D9gXv8npBdXQ8Ak7aEivQ5ujUGEkkjwrcVBVj8v3zaDMnF3AATHCRuyai",
  "key6": "4WEFHnLYBK4BwNesgV2smkxVSDCfHgptuSqvhTWi9gYzAsMR8xnnoR6p1f6LWF297SmHSxSyuuzwNLV2aQSnByB9",
  "key7": "4Ks49AZkSSojDBSBLjcdRmgZ3bPGos2kDC26Y7UL5aqP7Ji6mjVLEk8zef7MFDD3C7mDR12ncHubfwnzGnTx2zaD",
  "key8": "Z4RYXUKjG4bRtNGBUxsgJaDcULHZnpm7Xtka2aQyiZnNVw7z8UYq9gguMKSzZgh5PVA8Zf8WETy8WY1XsNupf37",
  "key9": "3xNzmVLKy1F9BD3RGXwgy3ifthiHWbz4AvevbhAmdtHELR91pyZYzB9rpo1rBFUg24ZM8K4oXkcR7Pf7YsV7GJnc",
  "key10": "3x1f9tEs6EMG9nSddZbLcLQXZR4h6jaEBKy74PBF1Xi7Q3zP5ZSJAPVXDQbcdJZrQpNiGiYDAwDdHBB7qsiokWv7",
  "key11": "55kzSh7UssXjS9R3sQpDrgHUJA86JUpETmi4vdSm5jWHraDRRLNKQ7F5pCpm9nnKPjYLhvkyHoUpE2jBHxY6XErj",
  "key12": "4S1H4mgpz52jUNM974F7YgPshVjtaW2fSwnzpLJt9iRJx5zExPhTCM8c7EhX6h47R7C8Lk8kF2ErujGtTfdrnWz7",
  "key13": "4WL6xFkXU5JgcM7B7RCyMs3AyxdKxodcVBSdMjepawZYr6dz1hAkhSJyRurtEoWdECgajsEifhJKp8qSu4f9TMdN",
  "key14": "5iX5hmPYGphKWhdaqhRQeDur6UHq6Qk1QQRoQpyoyyZBU2ubadUz1PReRpme5YUCUCUWWhL7FxKRqExVvbAP148E",
  "key15": "U4BRHkmMSqpgKquQJuufDPwJWvcavUee2tFCs3VU9JmdsnvuM26RaDQuN3k18kwdQNBaSG8dwZqLwfJreJJpFwF",
  "key16": "4yg37XqGpAv3DALeBCw4ZqLPhDQC8cjpwQRcG1Htnm5HQW2dsMSGYEv6z58hqw7nGx2x9HqQsGgAJk5wtPac9Ws1",
  "key17": "3Lxaqb9eERc8HKTNqqmVPXoKbrFc8c2y2bPZYw1LJaEz9LxSEVBdkuqRjX25KLMiaqbbjqbkoV13FVN7gNPqW7Ge",
  "key18": "3reU2roKkZaa1MkcwEmLpd5BQDRUtQFfL38hzzC6LaMtxqDKGY2jN7G2kDtHvMaigw1satJ26cYK7CG55hktUfQm",
  "key19": "5PuaEKmgW9aq7aJ9dn6bS1r9TxvUxiZnjZviiQ6X1ARqUHiJsjqLMbVKwEGCKpPYgybnGQXqU8PhqohnvMyFMZqD",
  "key20": "4dEDiDb85cTL4zPtJHnxhDs9V9Zf6gvd9ALQDQtmXQeh2ZCvakaP4G8wbaH5HnEmRJbabjEbWvbUzqHeEbwdJ2zi",
  "key21": "3Hr8RsccmnpNCkLLjvvyDpFwQE8jeshqfbs4rjVbsr2TJ6bAagdzt2S6CJALMgDYfiCetsM95CQjj9LipcDffHe8",
  "key22": "4U26Eq6DZbw6ApYaceyk56RwPTj2nYfn71fy2uNz2VGRwTnnBA8gqutRz6HhjuYByqnJV6yJfJonWqEfEViJKvPt",
  "key23": "2JZAhB9fQgGS6E6qFwrLyrHZ2HR7uEsC3VN48Q7h19f9TrnE9LBsumMAaFuhNi9pqkiT9XTuAFnfLLUNY2XBggpu",
  "key24": "5VT7je6y5w1ESdSJFj2CF3jct4QD4LHQHd8AzCKRcu3DELf1Bk1ZmR5nL5X62Dpd8LjaZBxnuvTEm1dEGTrB5ar9",
  "key25": "5sPeHQamrD7uHuVSYFwHhgeFDodC4AcnconEBaQbWNZitpz34qaGSqpJbbzEdSQeZ5EB4N4CfeNXYGNvHGMkYkqz",
  "key26": "67htpzULaT2Q2dwtti9C539ViCUuttXa9RygxXf2QG85auho2rqsUcbpqR2XUMW8fNdzC9eBvHU9tNwb4GVdHAdB",
  "key27": "2iMRHfLZTyMfdxeW7Uoh1nBtrkwqdrCpvmVctC7aGbq8ho8CndTrFEDsqxJ5TPmK3vG6wp5CSdgRLRwc4q52YpEW",
  "key28": "gpZ8iD9tesqwrww1qt774v5aTGGkZDBnekV7ZkBHFDhovBtmCeYc7wyHXaFBGzsbnLH4dJfhzEN5ide1QgqWmEb",
  "key29": "3mRaTwZ7Y6fVziN1wNya89XovdUb3sYJy4EykkBAM4TsPruJj17SUwVfshr4Sb39DCDfb51X9iHi5jPakvcueRE2",
  "key30": "5f5hePgfiEFtzNnyb97zE56dhFitKdvrvP3TMeNPJ94tCrwg7hDTEJNU3YGBu2YYpkQxWeCSFCsGaAYpfbswNbp2",
  "key31": "43n44bVBsgutwztQxZwXLDEi2g6QbuScVjn2fZrk8K378a55u7yi7zQ1skyXJvcf4r9BFeqZPGfvQgK2s2YsxQDK",
  "key32": "3kaKRbkLKzQMZupbeKEo1kYv3uLqrV2Ft6fz1JDyJTBD4BYucKQZ95qZpPGM6cMDpoxawZngAFESdFfSRNdamFnR",
  "key33": "5ntUuMakiD9gxG6Ez3bKTXve4XvphoZmW7hkUYdEz3tEkpMD4SE5kWCnbXTV4KKBVksNjXAMyzVGpMHYVSFdoopR"
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
