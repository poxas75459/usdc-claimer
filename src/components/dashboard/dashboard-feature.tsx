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
    "3jAkTwyiYCmaZwhL9pBjh2r62zwskEkHst1nS85agTPdyVNASadtWcnVWqKxiYxgimhsBa9DZFJ87P8GHxjKVYWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fSq3cB4e1VjcCx39ytEgA33bbKRaiSKaeVfBEfiS2JD92gXDU7DRYFX8EQYgcBaC1MZeFuGDkGuSUJH6jGUN3Du",
  "key1": "4RE8QPTnCXL6U3eXCbuvxxn9hjN4CwLfSDvPVJUVpDvcfZpSVgXuJkzZUrwkMe8E4YGoQFomDDBEzG2DBnzczBkW",
  "key2": "5GASTybAZr6hWfmzd1jWSyr33DAuawEnDSLVd7WYtn7gCpxHbWohtwRNHubrVs9XtgwfYpy4HrBUzHjey86wYfLa",
  "key3": "y4noubmmmwcJNa6BAMpAa4W1oRHGNhRevzJ1ycYAdku5k4GfvBwduwY3A3JCS5k4WrjDExB4VR8RvvQNvoT59aG",
  "key4": "5ij8srvpkeN54mPhvUFVTBZBwYxQFYyiBb9t9WkVwFDw7ffc53s3cZHaitXEa4J5yre7M9Aj2Jnhd82rmDkRJqve",
  "key5": "3WaR9QSWmWWwetMw9JYXXEuoxXDFfoGzkktRSj9yDjjAn5HZtgmAF8nDAxxe83xb1w2v1eLCwAA7EvX9i5KhysY9",
  "key6": "kL8h5emcqTXf9tfStgm3mZiMcQzAvytdkMP65miTkjfaC38TXo1tMKAqSEi5TYmv2KDc5fNEQGAsjviH7Dkf6qG",
  "key7": "5iGA13msDJ6QvNCLi3WoNHSFSQqQJdeo115Lw4f1SVKGSTixgnGo2pq5LYFPkCH8zj7JpdnVHragJQF9S7L5K5xL",
  "key8": "3p864hv4Sfn3fzxt6bEYjKj5gVjQsm7ZgXo4KSKZAqkfjPAvRAVcAWM5MzfxhHS85ec68MJA6tiR6d1zhDE8hUKx",
  "key9": "JxsALBFt6rNfXvLvrPKt5xxEy8Qz8d3YJa3jrVForDQ6rw1F2rBhnryZVNkHfejS9BUq1wpxv2qRKf7WsduM7ZD",
  "key10": "4TMdzHtvBq5PTu5yNQmsEqAesDiD437fi3Jz464bg2GUcK8HKKzt7SJLRGWbS1GwnbWcRA9szbx6gVRmuCVsVteR",
  "key11": "umwXbDeMLZS6T8ucqGhFH7rAADHrNCSn6XKRY3MhrsDkfX5peBynYNPoq3C3GK1vNA7rH3s8ke3f4Ldz1jUq1Ch",
  "key12": "3zmp5fJnoW4GbpbVrhocCa2gf7fu8TK2mo4NcuXKVpAv5M66opYGBQBaUk5YWsh2RcFNivuT2eUsynKh6jhS6D7Q",
  "key13": "2hKUDSga5NoEsJT6TYMGCXVS76oiham6uuQq5ZzVLn3gbqtcQwSiE1WvgTK3iSiNqVUjTKT8rf2rzxEfZbaq5Yq6",
  "key14": "3ZuoVQamZmzkx9yvvE8jC89S7zri8CMk8ogCZPxAv6mqzpWsasMmV5Eu7bWWUXFSq7haBTZG1xLhuwPZ6tAGukK4",
  "key15": "2fCP9xjTxX1wnwREJw1XUXybxNBD23rYH47AG3ntjQp6BtbZCh2vuCVbcvJPXjyq1dassyL4cMuPTMh1n2nPYCen",
  "key16": "Hchn6HYJVtkABFbCfr9vXYsDt5M8xoAeW4UGrXeu3rgqk16oANZuVPSWQPB4BTbSJFnBX1H79F5PBWrfvMxou1T",
  "key17": "28SMBe4RJFD3FvfbMsXg6HfK1gqJdUfcWffua7cyxXkKRLoza3R1BKdS7KRRW18noDxfC6XcHDPmSkwzFn3pt84k",
  "key18": "QxYLDY6UAbAQ7DHhgyUntdFto1mrzVvS9LK4CWdGHQ4CSwekt4SZJMc7YJk8kWAVAx61tDPE4uDxxyBAYwEcbi4",
  "key19": "5pNJ9MuQgwe4HZV58m7cRWDim9s6XDjhuqBeEyJdzHBwpUBx2gYjtRELQjUUybJgDU2uANUfWugJqjtu747FidP7",
  "key20": "5UzDWhZoxvEmv3t1u9VKvhtZovj8YyCFQ4m4NabJqUTM7qom3FAfK6WP6ZkFpWw7ZSZT3f1KYPQ3VYf5U5443hjt",
  "key21": "4n64BdJjPDoWcKBLLDgeHioZQLTp7xjK7w24cHVqAZ915zFE1PWWAhyExUZc24aujEufrgEJUWJT6WqKreiHU3cQ",
  "key22": "61fVgsgZC5nCyq8o5LBKXKdiRFtRB2bpUvsEJQeDz5bm9ARxNFhnaLecrS8GwS492DLgwhv8b6XiCVvBLnqteqhf",
  "key23": "2jsrT62HpuwF5HNigtwUAPMvfmXTgP5e2Xqw9jTDappDjX4nxjmkuqPYQguvXnfKZdMftPDwAgKGf3kx8g5GmzDQ",
  "key24": "opFL2TPhBFeMkUmWrBW55xrgAD4UC92YjRBP58YDb1reLXTigSNcw2957hGJfdzGAtG8D9NCuDFrjSB4WGpjmeg",
  "key25": "4iSKjTS33oR59mghzPupi281UfUCGxXRV4NSFzSmCrk9vijfcKMfBN7DJ4yM4g7exTDVCRxnw4r9i7tk1EBum5N7",
  "key26": "4P6jgo5cDGskkD6rToP6FKKKxotKwKqjnHAzXgEnUdymssaUKD4ndcp3VF31LADhQZEJ98zr4E1qEkdDecSmYURW",
  "key27": "2iy1oaQJw6TJ7T7qZXc8uQF5vTTpbYNaS65DXWEMw6yypWjiG7CZr1o696Km4eYFNF8v73aezHFfpZRz5bUfyxqb",
  "key28": "3s9ZCZEtdVLztDty64JjnHP25Jgm5cDQcA7FQUKmhGiReVRQasKofaS3Sson1XcVfhqRn3AHn446yrXNZQCt1k6Q",
  "key29": "3HWZuD9sxkJrVF4pEfErRrknmhFVRq9ha5j7GJNUQkZk5hHhsK5afZsJ9qw98qGQhN2Wnn3fACTh11ca2jtFnKEX",
  "key30": "sQWDQ8dBZhMZsyXhypTVXcB6kky8gzAqS9NZBvF4ZjWNQEEfDoh78gUeGNMsBvVKfrZkN2F6JEdoheuebjk9afC",
  "key31": "5djx4GK8tN79Pgu8YdTnGxGJLsxoBpmrsRSnxAkUw8BCnJKnEKJF1QRiCfKwbcikCAKkRPDJ36FWUAbXxyKXenkH",
  "key32": "TRMeSGc2dnTwaNMZCtCmXkhAeWmov4rrY6pqbkXFBcRynk5Zu7xudndnigrqFGGX7bAJFNExhdCXJneRUQ2ywFz",
  "key33": "4b1FvT5EaMkgPfYSQ4TQiFbhW2qYTpTq9W6yEfFi8JLPbW98A1GVa2Wrm7T8SLFPZLBG3kw4hYaFyKUJm5ZS3YsP",
  "key34": "4apHmk51DLqo4UCvaaSA3FmaAT5KqoaRsefL3TxqS8aQP3SHwNe1pDmBfdkL5Zx2rHbBZmXjxQ3zLd9tTM6VvXVh",
  "key35": "3iH1XXqW812tWv1Ymcf4qxnHkvW15rhuNX6h7BiCTvbj73gBTgCZCHqgUGX7d1gTLVDsR1EByV6D6dAnMufpnti3",
  "key36": "4AAWWoxp28pn7Rk6gf2ESRHL7H8KU5eM4NRCTW5AD4mDrjoNrc1p5UBMoL7z62cBQ9gMiAjg4Qxd4nw9w1qX1Lg2",
  "key37": "99ETCisMDvcdr1jZB1yFiokDnLMHR3uGmkQomacyR5u4MU5gun78QZKXSYroriiXi1QAVCdCF7DW2DGg41SHmey",
  "key38": "yhLdxzjE7ezN4maGgifzszBcawH3S2gMmnaHgZiR2jBwqh1KKnJSi38BNBLpnSkPcNZMNeYJiiCxZPEZgVbHXLQ",
  "key39": "3ys7FqAWHmrecq6DnXBp2WdgvNdTJj5ksrbZFJCJWed4jXa525NAoXdoEYNLgGJ7S64s3HXy6mSpPXKNRDUD93KZ",
  "key40": "4A49wAiB3qT1AR3TutgQPHfFPQEUFBfQsHszJQdvqhyZMm3Y1iZb95LeBYHjjpDATprJeAmrME6SV4e6SavU4o8V",
  "key41": "37MpDuFXZZr3V7DeryvqFeugaY1euU4eMLLU6mx6acPZdBYCW5GncRMbayDJ4BUEbCsQahBK9K9XAmz7hXXwk8NS",
  "key42": "4rSxVj2vf9dYfKmD7HBcNSzpDyBdQCwyEiU5fpk3KCyZ5rWav8dCmfkGoyoNLMysQQmTQjxQomZjNZLfux6UgyRd",
  "key43": "51E1kr5xJpedFNxsiJxN8LwJ1HEnLaTSMDCRa8zJ5pUDMYm6X8NvX9RtZtgtaDe1hVTa8BhQrLupqcWBZq51oBC5",
  "key44": "3mBMcrg1fb8mVntzkCWb7LXGLVWSAMgCBnRaFoeXZaFZ7LgoSN9K3kWksPNSRhccwjRYrnRURnn9stNaDveEXmdK"
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
