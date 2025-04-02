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
    "2XTirQoJEnzAcpYEj8rvo1SBZnrUzTeMBYSXRTLDYzqv9JERiysmF27upLFDZTGuSDTcFsuDDsoWzvRwZvpEBQ8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62bkCxjgPxNwyrqTrShFtWF7ZqK2bs3AVKkFnLZW89NTAL6qppuS2y1edUpDMtb8YUwqZyWb278ocddCG5Z9kBWf",
  "key1": "4DwRNK6qT31iBqA3EGovvoqCL7Va34DD7fwuzoHkitKa4hcfcbpvYNVQy7PHGtaa3YgJ2pf3N7TwSCPGN472kBm4",
  "key2": "3YTHEbHSBjH2QomVmfQe2uJgqiQjU63vLZWmCLjR9hxSpWuFvDLLCyKUEELg45jktGECkRhUBRgiTdghEVdjkQnN",
  "key3": "5cQEj3jVSMVtY8AsBTgkMXeFs1trtTeGgFDLKnoF16SghBAFzKWaenxgDMDpJFbFZdPPgoAU4dCWgEZ1n7LVV2MX",
  "key4": "4DWA5BE61MRYAhU92Md1RRkJBprJYV28LBxzeSCNm9YpqcSXMxJVQFczyDTAp2X7PQwbvZgc4mGcsM3UCAzHnQju",
  "key5": "2Xcpxq9wxYZrYX1S997EqtiuPunTGBmctS2aQtZpZTphc77JAanSimTfjhmLN4k36W4tzJBTj54uXbZ1K7xq5ooP",
  "key6": "41BKCMeWGbDHHb4kLGof44aekLHVSkZG787nkqKr2TCwfov4vkH5pvXYoBa8Rq4WyRxhDfu34rzHeWyM3JUaQWVg",
  "key7": "2aBrVPDCej3fygaLUJ7TkvgEYwXZu37Qz7QCkpxnPEUugCcNyVJTwmSg1oxiT4DBCTVeQpLA5vEoD4yZsTFnDgB8",
  "key8": "4Kcz78eEE9y1aY54EnQK5GGSDTBikJZB9f5dUQ8iPSom8DUqtqdEvF4FNmUcGQK58zEm6Gdd6DrtkuQQCC5Lz1av",
  "key9": "g9KLCcR7r1tmwrMwdUdMpZTRbMgmPYJiHYx6ePsJ2UkN8CY6HSdezpcSuKbfPfnMhRs27uykGxzfnM1i71aj72w",
  "key10": "53aFSNUU19DPMFTuZwni6rSuBT1d7GvEnmksqNVMUhozWyvbtyvXrYreKXKtCraDTZpcp5c22GbUWzYUfvYwBZAL",
  "key11": "yRuuL3v5GP9DNWt7K39hhFqN6vvPwCFNoCMsXRiKtrazUAKeVfjoiALkLRpr8H9VnoZQwNVz59qbw1gXR8K9KWn",
  "key12": "4T33rWEhWcJDXJFhWmd1WqWA3BL73YqMUhvfwNJQSWE2uY7iAJBV3bLZhLeLPr44CaM9bCo6dKvvXHxh9n5YSQaQ",
  "key13": "fyBD3LeJ6s1Ak64JP6aH9xc8ggyyizgHnhe8opA5kmsRBtiKQBcnGB1m1Cfas7YNsXSMFxKr1TrSv7i35no1nze",
  "key14": "49dWKjczW1spocXJiS1ATEYy8zCLS8aHi2SBv7r5Cti3rE82s1kaJtja8KiM1ZqyksYgHMKKRNwxUqkpZbDpdTqF",
  "key15": "61hzsggPaEWqFqNdguyULaWmx6keUb1AW2d8SBBuSm59U3Hnjivp5w5BgKtk4qKPguoV2kd3ByJsChmiiLDa2pT5",
  "key16": "2BrPox2MFqAqpaahhtWK9TUnCQ35tbGugxBAi3dPBZ1akyJuXkwZFJ8rJMMbbxLJtZ7dVMhKnx4YaK6x1ZDSGVmi",
  "key17": "5wC1d3zturvLBGeqkXuDv3c2m8ffVRftEyhFieEV8jpaKS6VXqQrQLT73PhrUdWdQdVsq2CSMLEPGbNaWJUT3Pt2",
  "key18": "51Zi2krkd7nveE3Hy4kE9o8zRymRBSRetz85bBiDtrp1kauSq3BKzRpMGEL55DNAm4fZVkzeWHXUivjNkC63FZgm",
  "key19": "5nqD5CmMH5ZWeTUfDRG3iMT32Uyz9KxG6FrKVW13H7wueXPorpQR3SAZxjBdE9BZCSs5TMB7zSk8FScPHSofu35E",
  "key20": "2WYobDPA15kwdPZVDQ7uWSGpbhsnZFfE5F6JnwSEKa1rir3KkDvaaRTvQYtEUXPHyGmHPXSTK6gFqJMvQkQmsWNq",
  "key21": "59mP3rRygvUXkRYBJboiL8QhHyPrGVRBLh5Gw6fes3U7L6hPaQ2PhaPqdVWYpaWGbSiQqoDTUnBTT62ZNWH7VUPQ",
  "key22": "4eAB7EAPFj9dVKpfovMJ9RSqia9f1hABF1iTPmrv3nkjf7L8jHM7GRvawwYptKatbYZeajnF7SFJZpwUafcnF7Fm",
  "key23": "47SLsJ5eCyLfimdNvTKwq5guBdNz4CzxmLD9wSkqLjZoD6dqiiLYxSw2kXxc8VkgjrUM8z79NchSRArn7ddtkEzS",
  "key24": "2wPjV7WCyVXVZyZRC2Fqh22UTXMig557jMQyVe83xMnkWmib3aGxXFEwDLn2T9kE1bkLVCTHdtuCJuRWUnprs5hT",
  "key25": "2zJ198TR9Xin1qvPGip6XDSxyQA2Xo9mgyU4LRfq8nR4WKZEya3efxmSwHHMG3LF494y3P9UeT5b9StwiZbfy4cK",
  "key26": "iCC3dpopu2MZeeaPv5XsLwetKhuZAvu7XigfcTLzGGEMrLrYKHkBotTBrcsXKmH888eAGC2V35XCeHr6e77xJmE",
  "key27": "3nXCBwEtDNxpbrGsoqDZA8VbnX7ZiN6TkfiSfb6Spfu6HAf71ri5J17FaBZqBmpeq7qzdTcMgvZtchhbachgGrTf",
  "key28": "3YvhsPwyKNid7kimYsz6UbzByJei85obikBiaLakvL72EotGNuGoNoaLMNNSMCx1cGRcZ9G6bxPyeP6NTCh4am3f",
  "key29": "5cD4m73dfco6NXJfoyHJRsLQQqTFn9f8x2YTbEPtpZ2eD7z6QiFixSGGrKezANQB7bKCLrYPAm8rsqJWHHrjnPVt",
  "key30": "3ta7UWzeAMpM1XbnM4vqwsf7gAamrYLvxBeuPquniry8xJ2PFiX4G5tpEj8k5cQrnrfS1uqdzMgEsN57pi7Cnjmu",
  "key31": "54yA2Hb1z6Jh3qrXWtNmbd2LYc2AfYSE8SNTHi4Aog3evEjqgVMJpaxAR8EtqmCafZYjvA93By9owwGRbfUS6TFb",
  "key32": "79MCYrrsQrZjJPU5rm1gNTbMpJFJgHj3kxnsGrqZgXgc7KJ65CJ3den7MmXsCtLRQA2YYBvdJ4uDnHyQKb8bfzN",
  "key33": "2h1ZL21iHsjpuhtFh2EGZrr2gEdB6JxyqunshyrRjvvzxJhKVBCb2PwCsrenBeje7ttkDmkXn1kbPwc1FXPhwXF8",
  "key34": "4HTXVU5zPAyNPS7tDCtfKsf3f8bkoD19B8BDE4VfEJGgWs9WHQsfhdSi4i8gxgjJ5DoCEzrHrkF3xCBfiib5kHn9",
  "key35": "3xmXS9vtmAPZdnoJgza4WaBwFPpGvqoLqBDTG1mqKdUS1ZG7NWQGApPUzvMGwjyNVPhUp3R3J89waDkPfTv68Pwy",
  "key36": "ooY2bNLowp9zZanfQFucVYaM88CnmnuJSyb3HMcDoPSmNVm5z9oRwF36TcWjU7FDQCEvCXaPT3YSD9eCmVrRpTe",
  "key37": "49Cz3jdUZ5VEUv7P6wTZcp3yNnSdm8qCMPvSfZnagJstRzXw5wM4wuHBnADgCz4fF8tQd1KuBYJARNi2EZkwiyiA",
  "key38": "ETKo5vq8LKWyMEqGRE3SKFxC52yNPDs1Ni45ic4F6wuJvknH8J3LxjfSjTK9NrL3Rn3CQNKMt2iFTC2RixRKxed",
  "key39": "5FLF7gtV5AWaCmobJmviZu49xdwRAou1Y7TmEKHER7TtpUJ4MS3eaotKi5WXtCYGjxaat7bsWbNxcBMEoEmUUP94",
  "key40": "2tFd1Ju2fFRui68PRCzx8WeUui63EBwkPERCxDHJrn53a9rwUF7P2dgPPmd9jzpWjZQtjt12ThWmWEAHoW5xdtVN",
  "key41": "2Rs5oHJJAjpsfMmya6vQWYo7RctjS2dF17F6TQ6RAKbZ3okpPEHvvYDG49qnHKezmoB4LKMaQLS6LQBxe5SQoHnW",
  "key42": "3qAXWnhMZKWefk8zUtnRQysH6zSqrxsb3AUPrCts25av9T2uCJXymDQZ6EPJjktLFNxysgNodqicYc6eawb8biP7",
  "key43": "5R4S7PjwNnLHoj4MdykZmBaXqzwMHQ1r7erDAwqjHq1Z8rLN2x6Eqqz1uVeXvZALFDztx92nzyM8XUBMv9txYzA4",
  "key44": "45PuKgRxbAPh2TkmnepUQW8SwP24QdCLFRfmLksDuxdXKPXfkoEcNyDsPqHvwBb1M9pCA3fsV5nX2BdH4EuQ9b3t",
  "key45": "5E73VSPASxWCRBKC2CKYyw9UKujRDJtZRKEdkkbDQ2ScgnrZYCTvxt7eGpvumiNX9jdGebjgZG5DwXAaLq19L412",
  "key46": "2NufzxVKFdsYVkC2Qz8ubvVVrTWJE4iZbmeWfaw8pviLu461fsYVBbAGj9uPp7VCkAhtYFtbmr3oyuP1HW64Y9NE",
  "key47": "h47hP6PSw3ftkCBfsJr7UjxXMRDPef6SmEXNu4h2tMJd1FPkXfTMrSJwE7ZSQSkKFCqFvA7zXqky8sJTGeA1gzP",
  "key48": "2cV4fV1cspupHUE91bLVQ15sMtXu8ihVjoe66KppenrozMoBPamjNDMBq4BP8gCkr8s4mrNYV74JVKBSBQyEX11S"
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
