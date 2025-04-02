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
    "2UeYcj7gs8GpZZsJFRGD7ge5QCY4jYem74Vgmwbbokn56oxaZjMcXNVkLz2uMpiz3zCou5BrpowN663DDe5wW2FC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ytf1YEBhsyMUmJ9ZHaCnKUTNKthAzoBvQqCJXrPD5jQ6KjLGKkmXXQ8xmnJrFvowZJgwBmjTYkNGeGc3xAKw8KC",
  "key1": "2uMKM7K3BofysZMrua2Du5j1uTqtS1N5pQbwtrtU4ZdoXE7JjJcwpM1moV6qsiBy2b1XU4bbnNt6YUziTtrRGFs8",
  "key2": "3RJkhBeZLZ6bGaTQZfjBneBzbnGPXD1dppkZUC1q2yYEMx3Lnn1SCh3X9ccbWT9j2z9zRddccsVQgvT8FtGV6MJR",
  "key3": "5T5vKNLWv1P4QqG3xsF25B7J1G7jumZwuzwthhEucGz4cCP5N4VDdQdPw5VBAvSZ1oYuxUBMe6YVbQ4tx7nYBgqA",
  "key4": "4DPZrQZJNMkA9o1KN8LDYnuNqwnyhX3DwxRY7FYiNZtokgDKHed7eEv2caSy5yWDgcwbqv6CgT3pNAh2sqAmyh4t",
  "key5": "38pexUVThVEgKVTZTBf3epv8qNXcjzjcR1WtQHWbAkHkv84nNawC8NMnCShDzG1GtXyacUXAH5ba19rYE7XfHXR2",
  "key6": "4XRGujDaecRQCHtMCSjEw6eykKn3UAJ2yhZSMSULNuQfobCE3VNQTPeHxgqFfRjYs1TTqaLRCvNcoemJVry9XeYj",
  "key7": "4nuufeo19vToC8Ufwd8LVP8WibRuRkW4r6UYpzoXcZPD4ZQwSHnBwznxM5mGAuLPVwSBEUoejV6vDds4oHVLtgy4",
  "key8": "4PTi8v24KByP6FKhb8CATNJtfgChm52kJmVn6pGwxum2Npj5ZZzVAfY2mVoC4Xn5M29BPXXyHQYVMEZrbaCDtkCy",
  "key9": "58V8ggLmdWwZikf28PPW2LrPRfVDiCUxqLynUzXVBuXWyPTyQUKNxEwJKaZD77HrR2QbdyZw4g8CNjEQRdHHGof1",
  "key10": "4VRyiVrxw9KBzCJX6RtTZbUzyuXn371aaBBwtDv9LqxtxHVqMUzYg2VJ5R2kcUj6EMieFMvXsQGyRVa8jVSjxW1s",
  "key11": "4kyjAzJBN3Bcxfc9mRwiPWi9fbABkenZGAeXeijyVHeLpRPfUHasa2925pH4oWwga9q4Uh4xfCEnefywSen2eE8P",
  "key12": "63FXhFzNUPBxPDhSHap7Jy5ApFrBsVXvaxGadotLVbK8QyVRUGj2NkUD93STu3jQqqVcQgb5qk9Q755ohJKuYiF",
  "key13": "4uRH2zVmFELTvjXCnvAkCLwsZpZKLNt8Ne67i4sLZtPhcxnFc8aSbSBSdxP2XqaDTeN97ixTYB5NJbCYUo2KEqdT",
  "key14": "2ew7DyJH9TZu7fMncbBPNGSqhy6fwfR2qRAQDSknv8aYo2PYLm4F4Mz1obckduVAviwwbw7TQAjrZpLjBXanZHGn",
  "key15": "43kHC8wPtkHeHCLutKSo2rrPWSjPo3DACuYV5PkUoTrbdDdHBqqPzTt5yNePQTmjzmU3UuBwYJbfNy5pEGY5j9G4",
  "key16": "45VbUmfFJxBnSJosQHoE8Cycvvi4M6o7itjP2MSNJH3822JxPx4xJsiHEHDFDbibvgWBQUoPVWyknuhzQbcncfS9",
  "key17": "Qk2j9TBMxCJPKaxAH8YKYwAxegX9vX3SaM2HVsTSQeGNcfibkuUFsYASiympigPkt2z1aBz5BDLAYY27VDLbBg7",
  "key18": "3pRR6GGHUBpQS6nBhZeB42LHYyYzv8JsZYo4vnJuUfN1XjQzopviukzctU3STq5dPD1SR55Z8onaL8U3KgxUvaqk",
  "key19": "5Ei2j9nM3DcAmxBnVAHkrho6fc4JmgPtELoK2WiViDnxc7XNTv6bF1K4CgFxSznwRDF85mrPRtF5n5Q5UF1RwoUH",
  "key20": "2MmEztNdKwsYfkYQ8fjvjqpdcVFRcXWWVd5hhBKmR2FbhQ9uuw7sBgbxrLRNJJkRv4UFcTW72Gzaiy2TW7TcpQ3y",
  "key21": "2bwW59N9ZKyQTZmjmk4CvQsmmR3noNQzeCsZ2srzketk6MfLMDDswV5oXEnCWyGWu7Gs7SkDG4Z2sP9sHi4iebdA",
  "key22": "yzPh9Fn2CReaGnjb9cmATfw8qZrHpZjVYzkQ3RBw9YrWhSjwMQXkmCkCu4Ev8SkRw81NcZ64XW4QVP2hpLsW8R6",
  "key23": "fGSp5prjGr9rZFJUbtBdHzFr5LyLoBqDfzmmCJ3FvVDz28SW2FifjMzBieLy4cvN4jUpcxRV6gPDz91MZ8o3UXS",
  "key24": "5xXNbnQGzKFzJsCTAbUojNxNMKyM6QbXUTVpEHcjiqcBcpHtobXRABRZgman9GHeq3Xr4MuGgPvkBzvgiT4MBhDi",
  "key25": "1wZ5QzJNTkyAAB1yxU6KW2v271DgkZywpnQtmf6gxdY592WAdnpDBUf9BYn4mqGZnsmmh1HUxsDw6AHyPWxT8KZ",
  "key26": "5CPsZoYzWWRyANjbg7ehyY8xVeRzkur1yVHLaJX1uneW4XQH6G1QAMnPX8mRxacjcapunjPMmR7wGbNfUMBZrb9B",
  "key27": "zQtNsMp2anGCyD2NX6AKe8LVPmq8g5nS6NZawtRuDykWDFJ5CLkELUJLUXEYR8EwXPEChzfKoVGGsHGJ3e67hDx",
  "key28": "28Qu8SL8vTvYfkdBLao32os4JV8mKdLTwm8fGBjtADmgL42D7zECEpLe3jhgPTwD5wasHxXthPDUvUZEYJfXkjzo",
  "key29": "2vWKctxayaJ8DwK32cHAgospy7iZqwxZ8JwCfwmTKXLM9iDNqHwoPiTzhj8VfZPqKTYHchQnhYD6AuaF4QTyQeyc",
  "key30": "2QDWepDQU99ua9Ey34Jwjc6zmWM72CuAhFXmo3VFDfcaJYfF5tNZX3b2KXBmUQRC9BcEoXoJnLLPc71osfiJ9n1",
  "key31": "5opKNBkBAbQjwdS2Naj3xRFdS4SuVR1wZVARfbKpL3soxL3fK7uDyeYS9X4FETmDc1c4d5WhJ9nXBRNwVrhLkhtK",
  "key32": "3Fue8Kb5kPYGxRU9UXtdmnMPTJUDGb27T8MBfcr6pnyYrUXmZgVHbmLFM1SzZQA25sC4uxd6Fcoyr97uEEbqSmem",
  "key33": "4sK5aiJXzBEQVJ98CZGCJ2j3M3fZ1UMr9MjkGAMsNwVhP4mwNhivSKnbqdJ4GCC5Xqb16kekA8aqsDYZEMRsWA63",
  "key34": "GV1LmhP8mX6qtJjVv1Nfa3t8k1Qz557ySGEnPArmALo8YZjCvYB6JbWg8rHEYsDE6Np2TizMcAo9T254m4Lsqip",
  "key35": "5BEVuzQT7ydyTd9s3uwjrA1bZLyqzGWRasmE1egjUgDMqJBhSoD9Htb4hgvuKPhQC1XhSkzwz2dsey8SyddXpbm2",
  "key36": "29aCYgPTk97LRaXXkLw9ZkxbhGWyd292LrySeSzw7CoNHPR9AZTErvKRPdiAWn7sjKU294MYz7ch5cR4xaVeamCM",
  "key37": "5YGXBbXoEZD3iS4BFmwV8BrVY1r9EwSTAFf6nD4fgFDtpara2H7LL5FQHqa1B1CLYrfDGdfd8EFscYSVUM5XrX4r",
  "key38": "2y9Cut8iw4K29w9WVuhWpg4TqxPYveedLTcxUzinHev67zKGhtpfNLLH6o4mT3BFoiH1ECHSPvPTygzxH1Ywxoct",
  "key39": "b5zzKU7gBntNsujaeawPPXhCPFVzCmPHZx3bhetfri9Y9yojscCL4Wua4Js1MryWWiN1d1ktXMJJGj96YhE8D1K",
  "key40": "4p5NGuAcewkdyWvpQarKBFfMZBrNmaMecXMFDf5QSEDmv9FUQWv4sQVfM8tyB6gEM3akFuNWSUGjnPnGfQeN3jvj",
  "key41": "3noPdfuojWvd4G9XrSNevq7hoXrAzCXxdZ6j9UEWkXtMNWfd9K5BRx9Amv5Ah4E3HDecjyjvEEzo2WGNwNTUxkjU",
  "key42": "NzxWGfwBr8rGsLst1e36AL5ViogJWkzzXPxuoVXNCucJX9UmYvYRjwbPR4p1obvB266R16bMzpAhSy5YiGN6bm7",
  "key43": "5w3ipqVLrC8SekJ6T8PcAhVHw3RBiPxT2ci43AWBxv6AFLR1mDBqskDhNAEDVeY1a5TfqpjQ9RgTZVuDG7gjBzqR",
  "key44": "ep3yJFMAHwUihjaSDnbpnnMJ1moWsETqAcKqhyEsrhhyxVYKk8BdLgRSzGuiH796yzgXHSAZCE95RueXGQD4MDA",
  "key45": "2FHdvaUFGUxSkV6MCMB18vQtJYL1bxnNWhd6fWUpKWxLYnq13NxtECLmw9SkFEdwzLTgpAeAE7yZVNKAzmJLecTB",
  "key46": "4zWDE7hhz83hY1Kx6RN9LZHuN8dXST5wqARPjM8xXej9Uu6ySzRp6ttM8GyGKRSvYHybdvtEX9f5raWWRqTCxL3g",
  "key47": "2FrVqwiQeRf9soY7yzH66jDUG5ciiq7K4KYqHQp91LM3wG3T2cqFHSi2hj3RDSRo1kwFLrZqkRd9ejpTDCrE5fkH",
  "key48": "PupTwL1LBD3mkn7dSRF9S2yoGzVqJpfwa6QFeqbWPotrVxRFFZCcsbtMSfY51MhKReyDmaLzjgd8i1Hi4mu6hkW",
  "key49": "3W7V2pncK8Kodf7UaPLgv2wVMGUNhGiyLt7w7XNL9Jdd8WnfEs8dPBHxydvio2y1uhw8UQThvdGZpY2Qe1m32mfi"
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
