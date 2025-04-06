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
    "4RH3zsmqdFXCnf8Ror4NZvq8JNNvC9R5KDRKC3w3B4SmbRvbtbVhZ7e511jN8cWQLkMNDyHNBZX4azNaiYg1xgCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fp2zmkaU5ryeG6Wm5agiYX6EMZcn6CSwYFir2kLCXMkv97qEr9VAbBsMYmdsHuu2xf6idYgGszseYZHSVpmuvf3",
  "key1": "2XjJK9X1dEeJx7vE5JuP2CPXoWTgE2Tny9uN6CUJifV4qNTi3XKYMvkG92o1zL2DLs94sQQHNWAmE84Lw4omCJTa",
  "key2": "5tXrbbEx4jmRtBezhSUwok24S9SYqB3SqJ84B1464nWZ4i2CT1FR8D2SBbZqAyCjGDP8aynCvLWtNtywXAxsFZJt",
  "key3": "3UnXDNTbqPBr1jEf9znUtkFsLiQs4tjGZQ2DuKAxXmyHFHuR1ZZZbaHBWXYtxDAJipnePaEnidHjzGNt2ELQSgV9",
  "key4": "4rCLXb1Ay9hd2pJJqkeKYzsUo8g9i9TFjbGMgZkWdXfoTivie1wg8mPUW5c3awVEpuBYdzTihi6SGLrGecLzcimX",
  "key5": "3ypSy8bh4THbnkYYhwHzSBDiDXJT9bfCJJGXzsEZRQ3hW3VnCcBCdFG1nakRicLXPJ1FXgKdmY3J9RqUAMyqkCDT",
  "key6": "5Wxybq4wKUdJ9ivEaST7qHJBtfG6816feWvPVxGXFsBn8eburmCbQCc4qp8pK5Svie5dtbb6gEuScawnPuRsg8nb",
  "key7": "4R66ENKxjcGbfEpHpiMujRXnjxRfJA8Jnn6JPB5DKEVKnfxiL13GFw6K2PaNvvcEqfgp6ED76hg3UuzSVVzGggyz",
  "key8": "4EwkdRXiKwdfvMPVVp1HBTr1myuChj2rzTzsVi49zyvKj1w632BTEUxc1z98jg3ifcczoLyXYfvBvn3A8GGpBzaG",
  "key9": "4f9fSZKSHMDE24JC192HgMJoi7gPaMQCL5jsxYevAAyABqnSjs4or7o8WBbiLUZ6D58FWsUnZb3fzVcDc5uPVA3w",
  "key10": "32P2khkZX1iopCRUtXSJpzmyRYRHNZrZNPyf6cQxc3LSEp7Vb4EvDkYQEkzmACEcDTDGGvVMPCYEZiVZTu9hBpjy",
  "key11": "41xmQVYnK59ceGzdRmfSHQneHHLEFhxnGQ6XcwsybViUoxYt3FRKeKMiY5PdNN6PUDWL4Jap29pZ7Yued6yXtuQ9",
  "key12": "4dGnBqfEGThycWpfKL4usE6GrUBsWe5XFXqj6iDVZ5BC8GbCMyGhC8pS9wgfVhTcMwcaKapH1DeWPd8YzXht3Hp4",
  "key13": "2ge6715JtyD8oSFjQcmP9v3yeWM1FEmLzTERKqxs4NZ8GHrZdHDarC5Dd63MUcQVTF23FHDG55wu2nAk9aboLYbi",
  "key14": "3tEv8z4Y4HsVLsjXS89iUzKayC1732xRpZ6QoK9C8NWvR3STkDfHqQF24z1G6eskKkpVKZi9TMobofDY6kiBvqAp",
  "key15": "5fse41XSnB3HtLFvdFMD15Fyj8DHnWDpPDFVopq1VDjnGZQG3DaxdfQNi5CgdE2bD8y42ANQxAQXwFTKzfoEHrRd",
  "key16": "VG4M5Cgvbo3SPqwRgVrtHXWr81o1Adb2qdyphTMuX4V8o6oXXVxjEdYphuMEBPs4Es18JLB42xZYJbAhVKhyc6n",
  "key17": "3KUutF9d83d95iNULkZKKeRDz8hH2oeUVcEwrzbqcr3ZVjhXcTFxeuAbAGstmNTN6zE9LWBisc942ypLbQRGM7m7",
  "key18": "4iAXQjv2KMBNAdLg1NENTLYrty7XxpvK4pYd1tSgnFFh2zB3efkfi7cxoRcfuRQABZdKCaHAT9vbgzT5twvSmuf4",
  "key19": "5CYrpyR9os1Rq22aTdomasu7Ami4UGosQQtsFpraYvQSuHRVTwe7ErPyTmmTMZ4WqNLn78PUAi1kUP8Cw7vmCLLn",
  "key20": "2x8Sv7fjqGa6FHBB6cCBzETAd9frB6cM7BKcDmgSCnnzn9FsEVSg3h8jWM6NsRctHWPB6We1fW45XmPs6mPJciBC",
  "key21": "4gKTgga3Zn7eE6jgxRUZTw9oH2971pW25spqATmgoQKZsAnzPypu4hwgqnM1uC4ib6NgdYayoVJH2cKLFsJH4EFU",
  "key22": "3LWTbnZvLfdR149sjssRHLWnLmtNXG95RXtMxx1ELRGM5Nadr5SGUiBdR6PkpCbb7F2WrSmruXMZm9RyKKehuQ7c",
  "key23": "2eyvDz5q7TWnzKvfsPEdi6a27QnThp2G67e74HgD2LXz81EazZ4jZrGQQ4svmL13appavhJXi8YSuEzyHeYPwSJB",
  "key24": "5zJqgqfcZy5Pur3iGotiozSjW2CGxqbk3TPvC6FJFcaMpXnnWvY3cU2RU8eY8yg5zpku5oJLquc8niimMmLSdxZ",
  "key25": "umGXwEeJWxeuUhB4aqY2bYrTeXgBJejd3v76iqGSwjRXLhxj2RHT4PB6MXCQNMbznXr5cqsDLCaDdjV3iyZ2ai1",
  "key26": "2uKXMciBRbkyPyGCvHY1caDYQgtpMxxQ8rppV64ufYUya5LCd1cc6q61kXKCxvUrht4YMud4ipgLPsAeoCbYuCGm",
  "key27": "eK8aDX5HAdra7e8i5crganCHB4tvT7LRw1qsb1S6TX89nNRiHGUF9UdUFXjPSawB7W6HSmhMGNfT8gPnBv8CVKZ",
  "key28": "5KBXPxQXHE2axJhn3AZBsHb5pyKiEgV3YVGoobzyU7BSpCP9xTBuTUT47QNTCXASN558skAhq93CsT9YRadgNC9S",
  "key29": "HpTAztwjRWY4pqqfFeoYouedJUrwBcxsejaCUjoGdwUQReF1KwLBUGZbpEoQBP3J6PW5AtQQTXtfitZWqqmB1Qv",
  "key30": "4RGt18zqpawwrHQT2f43w75MpaWsXD8YGzC1bqJN7Enz7nCvkRkhWEMAEb5UUSPg5xzWC8yW2xCqWPRLcAonpyzj",
  "key31": "J37fuUXhhaNfaJcUndrcVpg5SN9bjhNKvbABLaQyoGkPfubH17FB5Q5zqPrXksK5GiTKWvCb7RTdoc76frxRE25",
  "key32": "57aj7DS3GntAp7YFP9tdvAq1NCQANU1FBBps2FWG1vPUaWY9zvRyDEo7hgACVQprwiyZRJ9kdyegCJUbURh84HvN",
  "key33": "2TrLU1SfuELoSMpYHVTNr93P2j9jdDDHyYYBMjtutnCuKF73bd94FfSP92LPHv9egxewX6A8jxx7TE6v9HYjJw45",
  "key34": "PbpzdRhbfbAvThwgoTQ4WSREejTYpVzHLZxaRKVaP2FC5Y3NXeMFQ1F2EpFZDY8vnWUPMm6rfNmMrBZjptupgXU",
  "key35": "5sexyz9nChdwdWbMsy8uh4WfcY8FBKjccDuxLUfdaA1VxiEoNV5HQ5BQh9itQMHVLq4PvmHsBi4xmg1xs1VAPfLv",
  "key36": "2AngtXRCK6RDwHZc4RhpfA7N1PxzpRJcMdy9So2DJjrZLx8JZprJeeQUYSKAuKs622KCb6jmKq5aET3o1rAkd8Aw",
  "key37": "3t2XY8fn3ZDdhhhJLycnoQmmsZgoqUKcXLD2qWmfoqPDw5QERhnnc5Rr1PpBajiQcLEr8DhpNZSxqvSVjvKjFfo4",
  "key38": "urpunieaiHP2NG4sdEuPKUJvAT4pQmWhjxzY6wh6pGJncwN4jPF4hxmYSE25fXMe3kQvVVosiWsx1jiwRgoyRDs",
  "key39": "4ppS9hymLzaUsAtwy3B5oSJ7iv9xBsvCps6W7vTMLxayi1PUth6L1aMfHG3fZHE6y8xq1vVewtQ3unR9Eg7Jthg6",
  "key40": "3siEpWbrB4WuPN4kjuYQpgUebPH6eLjsCotYrfKRJWLaKwcAXzv5j9f2gs7ngTuiz9BTBBbzsAWj9vttJosbeKb",
  "key41": "5gmGG7F5xJjVAXVQCyB4KerW7kfbTq7gFWyJHfBrNu1Vh8ZUZFAcJkrHYYTAKBoaACFyM7iBx1gjWHfmDzWeaoL8",
  "key42": "2LVRmyTCebAvCitLN6Y8BzxBGas3aX2npC4tj3UCurNkGJmdet9Ww7wBrdN3ziqNZvCtoA7zJGX5UyRsjnnT1RKn",
  "key43": "4SBgmCDg1Mt7Gjd1rRiDzUmHTeRuuugPX5smKpw4NJcGPewQS4yFZpqBYTXwmsBQe78pEa8EQqJafkEaE9QmHjmn",
  "key44": "4SPosBt6c8DEdJBEELB313trwfb2T1D4PSc47eNjQSJW9wYacupjCazcnYm49UDwPwaGAkH8hY1363y7G2aacj1d",
  "key45": "4ALAs5CR5Fj6xmRnhsnyFfYRyHHwDiJbuTXwaWXDjDj1E5N1pmdYjjbQQB7eSuYYv5yeNSh3oSd6bdXcR45c92G3",
  "key46": "2JFY1kr3KRbczzNvRExz4RZKdqRmzAehBBfXnSgptdi5rFGyYwVZW39U9UdExfDhRYcyAgo9yrN7BTTr19abajjE",
  "key47": "3XJtHjHBmZUQQQ1zjvcGwhZcyPsFqruszXs3dYHuVgXuyErRhRGmsaKi6pWkAERPsJd7DiGa5nobJyaWQmPWUL8d",
  "key48": "3uDPDtY7Qg75mZ9PA8zoyuYf3Z4FgKdgJfXB9HSem4PeTJQr9cmPvKuR8fHwq92YL3jPjmQBaytRRcRpBHT6YKjf"
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
