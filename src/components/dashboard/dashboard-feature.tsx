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
    "hcKCvHgwDcuT5HJKHaGCYoSCQMMgTaLcsMyiktRY6g62bRXP4hF6rwDyNFjjcobDM5jK1uu55u157gQNgkoSZX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AWRcfeLJNQ3iJJGhUzed6K6QRe4Gzsp8gmRvedjuAgDw9X54DBsB5bnuLy5PUURceioZoMLqyrALiL4G7hHEdS6",
  "key1": "Sd3FwbQGNG4buFHyi8v7byaHzN3BdJsbQZq4dNcfsrE5f6cCjStPcyRX6t478g9u3zCE7fEeLRrMZqBUMkcQ3Ag",
  "key2": "2uphuK93amCFPLCNhFSMZRwMJ4s4KqBWL1xyZtsJXE1gmKKaPUCpuXEa5vUDjMLjWxZQzW64vQfFZnqJHYCjbhX9",
  "key3": "3Sy2FXodepykw8rQ6NgkMWbs3ATmPbkEezW7cZ2Yi33iKU6fCnDU71bVakYmLnckHThVQaARRxT2iTxF3U7HKoCd",
  "key4": "3ndDt4pgge5AwbrVLX4PvgxTfcq6zuNyn91ZUKuWF6588DSobj6iKSzB6kk4edDEqG7oxtr4CKS1ruYv35C1gVUG",
  "key5": "zKYe36zn4yJrecNDdfH4XiKLfAfdetBcvfas5kQUi4PwDJGFP4XFDQ1DehLpasoqyb7QfL7eZeLzb2X5bJtJJZr",
  "key6": "46UzUL5vjWP7sW9Um8CSAiZzGZnwHyS1djQ6qsy8svu7p1mRbooz7qgcYaWtoFsi4NTXGpGTDvqE9SP4VG1P8bq4",
  "key7": "5ZEjCCbgxst61WeMv8gPv25VsrUHFu1DXnE6THFyfBtGDoYecBgGQkfPaCxDu5KtKHnRXLsZAbwVYUzZZmhQvi6f",
  "key8": "zqseNWZkzFrbTMUDFStQsoHa7B4d2b3taxeJWyRWLF9UhZHo2XDrSG3M71Y52DHmxQkNm2GhWge1Ap2NYkTgjqa",
  "key9": "2XqXMvAkmZ9W4cX5tKKHwj89fYrujqh3G7yns3qPgDBBjpqyPF8cPeadRLJDourZSYTH6MPmn5jpFhsaQUKskfSS",
  "key10": "27zexqRo6RBds7WPFUXXKnygerzsVVcU93So9p9Z1f3pu1GGX1t63CESRyyPv9xHR56hZwcuMkGZRT2kCabxGM44",
  "key11": "4JpozcCChFF3PM7k9kxGVdLKcmeZHd99pRPmioc78E6BEBYgUvtSymCQMzDeWbAff6fbaY2p6jfbghtomkNrr5Dg",
  "key12": "2zVbC8mdT6DMejSvimLoBTz4wtzUvkA5fiPVvDVnn9UMAu4L8PsC8zGdwoYN6jJXmNgoZzzbYUi5jWtftQJkKk9N",
  "key13": "4YvLnvCitmkYvtXTSVy1jBiFm9h64B4mH2DXwr22WZyPpUhLtRAzFckVzyGJ5w9TzU6yagdehAfR6swm4esEBce3",
  "key14": "5E2wxzSLfmL15NrWaR4xpcYSgr6BgrwV7FrfPwDR3AESYJYbyCwYnYhXftXcsXuHkFbWQ4wTMoq5hPMFnupceb4S",
  "key15": "2DVTFgd67CvHtHWdUSga5giYQUKVfHfvBQPmbykM9uUXpG2f41tQWC3X77CREZjDQ12mjx94Svggbt22HKvxQu8h",
  "key16": "2HNDV24mRp4YQnUrNib67GjnhckHcBfEvb3U1Li7Kjvya5dkuWjLJEc1thJb7wfG756HyVfnjBA5JBYSa2gJq82K",
  "key17": "47mTXUm8SiM4TS7z27MLdJgBsDEnk1B4tkYRfsMyVnKmfKpHseCirnpx3Z99oAggXh3uSysd7qdBiTKu9nkaBSZ7",
  "key18": "5kNY1RDastS8F3AZBCnsm1oS2SuXR1mHnpcraBvqkJppZSihRBHh1G2NdYvpbn2Q63QQh1AQwFN2frP2G4KsUtTa",
  "key19": "2G6CVUW4EvTPX7ZKsk4ARNNu1MT9PNDmsxHfR6v5DAb2SzX97DD35LU5moSE81HAR2yKqs39SWoArEcbYNHzoiQ6",
  "key20": "5wTX4JvFAHx1WnaRwngipTAy6iRj6HLtUYWBxVBwKgHWZGiuc8Fx3sgLXdCyFhCDBL1XvBVKx4mqhEqvNc7eadSr",
  "key21": "LBFRdLykDBxDmWcxZVYp7catA8Nbe7UgYrRj1qfrFeZ443tvtjdepCjSTMMJDC1aPqsKHYZqJwuxAAjCY7mdQq9",
  "key22": "5eaMv1RYNnDGUmM2gyhvDL6c4v2eidTi4wMjo5ib6SkR5m9TxU2gZynHxmTQPtTLEqAkN9Q2yZ3Nv299t8GFhsEx",
  "key23": "5Wcge7bqrox7w1gvyQUqUh5Yp2WVaPWgGCi4A2VTV2TC4cSNr2T2NDqFV6VFmGGZVxgxrLNAAuprhvGpKmTUvmKe",
  "key24": "49qPdzfMgzHoVzXrtpMCsyfJMwUhgwsMpzr2vhnFUg7W4RoRvv8iRgZE6E6xVvJY68cT4So5V93tnWa8rY8cSUFh",
  "key25": "4q5VMNZZu2FEcHLuP9jed2xWDumVetxDtSWrtHTHUSc43xUocUTReMsvprvCLHnNNCLZNp57CiUuZdDjNRsg729F",
  "key26": "ZbsjNd9psoVKGZQ4x6JJfiZRJEKJfPx6xPx6gKvubPBVvdY26DDtjUdVgU9Q3WxSxTsMaat3j3Nwttkjn8xiwJc",
  "key27": "5a76KvtpLJBhNHtDt1hcG32PDbnQFUTftPnoh4XqPrm3jMwscxj1NBrqhhxoh4RE6uQjUJmKtgHMJmbqraimdfTq",
  "key28": "857YdNUT5dNfPmoDdZ6FKoGMoU3AFvmP7E4UzWSw1DZtfgKBPK5UoCH9CA6D4UR3xngEXzAjSsedTVeMVDN29G9",
  "key29": "553wpkYhgnXMSzQVN2esJpyg9cdgEVCVeKTwpJpHZ9DiCxPaiN5mWRaazWdenGHpdmGabqReNRkDh2vN67cL4rb4",
  "key30": "3oQ35nEbPAd644XaS1uQVpfLvgL8ARQGQyzeFVqi5t913u5wVkfNZ63d5wf621zwq65hTKidjJcBqEWwoxbyYYXQ",
  "key31": "34bQhbw3RfcXgEjxHsJ1n8uy6qDxF4FtwhnfSmTHXevAq7V5t6uMQT5BJKRDE2auJ2k9KoWUNvvUN3qD6UD2YxqC",
  "key32": "37TWwcYsiSxP22xvDKVT9gkfPS3rhX7561ti4LZ8cDDJs7PbT7ocCqtNLkSad1qaPpiFMvvVnLtArMXMYk9Vi9wP",
  "key33": "3cPze2ceZ4LFyhmmPrDVHTKmajHa2st4woFg6GHJYXD2nGDwfuisPAEV22S1v3jPyKJNZPqFLMbRTaQdBnB3mY83",
  "key34": "5Nvoq7xoYHwsY1ASj97QPh5KvzP7PczoT48Jz91eh8Mr2MkbppPGZ1a6SEeGm4gqSVsWjVktRuCsaD6AnSRG6Rmi",
  "key35": "2qsyuMJB9dePTfjv5se3Y9udDsPttEiMFTXm4V1dcEdhWTymVn8ZZL8PyyNCPNbeMA4Jm1nwY8xhPbD5XTK8DpW8",
  "key36": "3mEqRh6u2ac9aFwCcLw3wDeuZo8qm7596LXo3kcyUBsx7U8EfTtA6jxoAiXxs8HyPRmHPehzpTcVHHAoXEzTJEAu",
  "key37": "548hmLzFGPKoXvRAF6hm9ADtUwtxC9csZedZ5sdy67YTTRgezwErwbgoC6VjwLEaL2493uS3UEg8M9vTTzfXM7w9",
  "key38": "5LTfmPw8EtSeBVGSxw6Q4MmvtzW6y534fHPBtF2r9ra7azKausmud5stcqSnsVbqyNQyshhfMSupYHiWRrKHGzyS",
  "key39": "5xFMzVP4HpN5mHbr46jm94sDPX8x85oCT9gJFcLaNKSQYSc81NqBormCbwnyoaYeg8Pxs8uvSs2jZGLX8HF2BDND",
  "key40": "5rN2QefkP7bpS4PJ1yhQDhNQtSXe2HRZkPJqNxB76WXCNVUpTKz8UqmjzpnWLgnPaS31a6joBMjxgoEfnZV1zf5D",
  "key41": "5gUZkWEtwkQLVVsEJ1UPq3oemeBYQfgAgGsFDDRRuXRRfo99mVi3BQycHQHLC4wSpgicBBXuRLwLVF7aLqfvuHey",
  "key42": "4A6GtL8NUFBxETE1MZhkBaCg1mLSzczyCH8GgTvxLqMCYxPNy4y15QhjgjMLy64bGGwxozzN7hhs3SF4Ce1WufSA",
  "key43": "49ojR1RKLiMDd3wgpzVhc6nNJQX8RgU6aXMxDqDHGfADcnQ7NCEuxbwCrmFXSH7ihYpnqEUNKu5JdgmEBPRiFWvy",
  "key44": "4vyakALzsWcv7jzg8fm1zdnWjJeqdWxG1ZTcTyvateJVpZwFJJGQxMHrioGQtyzJtzZXkNefBREs47cc6ECATeKs",
  "key45": "3dV47x497raGHgcpntpGEZTUpzknghSbpdcPCnGn5jviaBFJcWoq6JKwyPkCB5qZCYR85dsPsEGFH6GPZdpsQqxH",
  "key46": "5Xdq45ByadGA38uxr3s2KKo7boo2J6WnzVZr2pNDMkogKyVjJTL42UC1FeCKHZujZzEigcVkEVsmjiugGLnzcM4V",
  "key47": "4aRgVHGEvCQrMwZ5gh3roYAq9DizH5HJVTu3YcvXumC3bHpCnJNBCnVFbc7VAuDJHZeDtWBeProR5NiYN8W4hW6G",
  "key48": "4KrBpzrX15dLS3NBi5g2hxXJHtfN9GrdxUGucgQWQUAjhcUMvzC1xrJaZ2zLNyegkP4tfoZgzTcTKeY1qUG5NWK7"
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
