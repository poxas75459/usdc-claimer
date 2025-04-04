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
    "5kvCEM1ST7ReKwGtp5dgtVjKrMUdvVJzh1DhAmZrxq3CXqdBkV6mCfxzWpStbgck2Q5cYvhn6k2oAT4KK5TJUiE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PCptv8LKzHuVecLK5NaUPsYpbX4RWwMq6Crh5eg7QHDsGSG85mrv3GnhoyZZZ5CpwFt6NG1cdQ7G6UBd77kFb1S",
  "key1": "4iLcfD38rs9iLEP7FUXFzBpnJiGXShsBktR21BS6LaeUGYMSxuxsL9QBiU13XpcDYHdcKer8a2eMg1YxjFpAjags",
  "key2": "nzXZywPe385RWpQ8JJPjaqyKVZyNWBU3PJdVhmhRm2dsLBWJresNwwyUupUN4xwMdgPJnEy591XedZ35jQx5Hoz",
  "key3": "2tE6jNSCacTExAvdN6SJPkXsBYr4Wp7AQXoxVmFnSTeUhhbHCiseS2Ktx3j7ZtTN8fQzte7WuRibVk63mu4SMGMU",
  "key4": "4EZx7qxcaJ86aEyDbVLvaRdv7JGjtfjcj7LHP5DUBmYXi4H6zfUHNqBXzRUKpbF6N5WYNYZ6yMovKvq6rf47YWyo",
  "key5": "4FoqLNgrg977X6D1avd5yY4e1fQq6ToUh7soCnfgrC2mdYfm4QMdGgmztHufM3ne8tt8nZtfitqwo5FoBt5taXuP",
  "key6": "4L1HT6pP262ADX95VmWciz5nP5PQ2gzyfBsKC1FEwBQaCMT3XtN2cLJYN8Ha9M1d8nbnSi72awF7p192VeEZgRF8",
  "key7": "5xgFAj8WunSJ5uvCAVyMBSNh3dSV9w2dTpoLkM7t8oQPgLNCMdfhkWiDMn8JuAPJLWLkb1mCJmtJiUVBHCmxcGEX",
  "key8": "XXMnVnocm2SHfw96324B5v1QvzaopaH16ZnWLCkuNMkS7FighqU4fUhg4cJD52BW4LJ1tYNg88teU43SaQpeo4f",
  "key9": "3i97c1xFskL6BFkuzMzmN6o1EKqjuFym5VfVoHRk2QpAHqbuRqrPr2Jqz1DUMsdLF13KmLTZEb226GPGpg8radtk",
  "key10": "3K9ragF7yLqPtYsrGqPuaWfDts4j2NqFZqpzDgYRizEffmopr82W9iKWranSAmjjLAhhtBjG2vyJcqhCSJ7rrsZw",
  "key11": "3KvbnTaZrJ3HsW5wTtZY8fFPwCQetnr1a1th14DLcdCp4XsYobWLTccHYDjeuHZCL5RXA7KVq8Ye6VojABYtMRHC",
  "key12": "5bmfrjApSH6Qn99TFno6DUSi4cHMeE3TxJ6L7gYpRYQwtZ5ApcXCjyg8b89wqJbuReeHECs48HSSpdGGxjfvbgWz",
  "key13": "5iEw1YwjLF218gRHVozPy925SvDr6dDGBCZGnYwM9PFwnDcbc8uLXQVNWW8yKHspQQcY5cQUiaijJLRykxDJ5sg4",
  "key14": "61dNU1pDtAUHfo2P7ReHdyGiotxx44yrSLVDpz6ANcHvFCv9Lutg3tpm6ufLMqrrsLHeHrTKeVfH7bxBYXzYJzmi",
  "key15": "5ZjNQRJKwTqxNPSf4yJUpkKTRL9ban3QuhwWnU4mNsXxFnwfuD7mf3BTa7A5BbwR5m2HzErXXYSPHSWXYSUtUuBy",
  "key16": "3StqwcGBo3apaK5Qnj9sCDdetuamPebmK5NvWxhx5CyVoDTHCT4oxgfzrg89E9zMh9zsem9ZmCdZfWa1oq9yLiY",
  "key17": "3qGwcm7Sw3Ew3FbbcfRtvZ3rtd7TVw3svyt135L6nPaM1CbtHLoNnEyNopKFLJJ814hg285AhiXerjupFBhpmF1A",
  "key18": "2Qt1R2dQzkXcRApVmjW7MrZt4oDZoUQkLsPgs3KQ3FrQmDNxyVrVyVoW57ryARGuAUDKywUPPRkiMLgKkoNBGdhn",
  "key19": "65JgVhPfWgp6RmMzD7dV115Y6oVvGzvFJ8hMuiwGXqunsnmZE7J6Gai2tZgSqanqekFYDaXYPPu5kycmPRfG3yzv",
  "key20": "5FTjbBSR3bzNVsoRg16WpEXMrqtG5bvBkeAyKCMXsFUm7uAz9gwpob3GznRNn4eJdKckjsLEM5AfQFnaQwPwi7v3",
  "key21": "51B4TxpeTwd4RhkYmw8qfnFQcT41bz5SLHGc8UvDzq9VjjS8ahC2eiQ6Sn91cTATQoosbPNNjLa7ShuXCStuNqk9",
  "key22": "4eSWe3scu2pzKPp5WgZJW5tfyN1D5s4xxprgZejpd7Xx42Z8Jv78bXCAGMqbzQPzuRqTkrCSRX3T9zsRJbFpibPq",
  "key23": "2BH5PixPKar7zyDoZL4C4rBqvkhnhD9RoSeSAAcqDeYb9xGKA1nyE242rDQVYPJjhk64Tfea61QLMFYqoDL5ff7E",
  "key24": "5gfvn2Dk8FbtAMdG8PnFJPaWEoK182aad1JW45AT3855oFnaedPsRJZQVfGkCUEt8WwhUyLRnrD8htKWu9spANHJ",
  "key25": "kssHmgB3CFK3KuLYy159zoQc51tSJapim2FYNKA5n68VJnM4JgKtMAhS4o52SC6eSCRhD9ydKd86yJSMcs5hkWy",
  "key26": "2y2ZoB2z2D7ZrQtAcSfhRDJMG7rkMmuUVSUCGqqwvUbnhCK34DgcKt18MACmcnb8cbszXg2GA89osqBptxpSmM8E",
  "key27": "4KsGesPddL4JSUF4TdQCwQpoCFAj9wTaLqXnYgX8NPLaBbx51w2ubs8U2MozJJqdtvBFSimuS99xFUN7cXSJGVZB",
  "key28": "41Tq3A8cjYTADAg9UxkzZhB1EAN4mofFwA9JaR56dPsZh8zYi5tp97xE2B6VYZoviJcMFt9WPrwhN6XvnTT8NKnA",
  "key29": "2s9huvmFUYejMm6CtTntZ1vzS6fhH4YS5BKZuzYd5jjvvTjhu78bE4BFN4itGskJmjkLzXR7143GGsHmhEpUndTE",
  "key30": "3JrkHSbVr2zGjVkhG61gNvTjHbmyiHJH9upkjSQnPLRqEC5naBH87i9osc5wmM3vnxXrzvgt1mPnscNUzWrYBZkp",
  "key31": "5p3CfWUWBQYpqjXiu4PnREJmMP5Bf1aeDm5yUaMcJaeomUijugXJwhuDNzpacsWD2oYYC9rxNh7LrJAc2zJEJ74E",
  "key32": "5bzyhzwqFQEVrSKbvDqYQQPbGrBDfY1MqpD8k6L6nJ5zeSHdAyuGTgF5sr6fZzAGD5gU8sFxGhVdRVV4kUmDkpbf",
  "key33": "59HeuYqBFTsjMKyGkAmEBUt5JnMcLJ3hCyD9rzQo9EL1KhGErRzV3PJuqufS9FSz3tpKRLLBx4Zz938uvzPvwXhj",
  "key34": "2qap7HB8a6jTHKA9u5371dhw3QgMeQuukwJLJc7kDwGJazacn9MFxvSxLp11e1zud8XDn6sahnXDQbq2MmLeCJXU",
  "key35": "QKQ8SYZMBRRK3qeS8mxEcrWLyg7YSgNgHwkhb98d8K3zqwLkWGcJ6aZfAYyqvSjULi8EKXFw7wKzjhgB1XJgR8S",
  "key36": "4yX9y4rjWR3TARPNY5kpcdudhGjXxmGzowkf92QB1cJyr51rxr21pTzYpVypTVo5YGEMuH3CnMra21u13wXWQKsw",
  "key37": "2zGDGznAuZ2ueVCMbNdjEDJ4LN9pGxekuTn7ysNjbxJdkXmD9g8xbcLhuMStQYfaEFmqstwgANN4LWW4CssQhS7b"
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
