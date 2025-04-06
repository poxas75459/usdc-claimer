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
    "GP88VgMT9Zx4DJwSgHjrRckvmze6R9w6DwQvN1MLDhKDoFs8CPvcZh6R2FQ1pzgMjYqh71rbom28wq1SCmngSZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qvg8FhcT2dcqeKJabEy1DBbmdFXi2B97KwUTVRYLDPQi1J22zfTcHQntUfmHXnEFfRUzHrMLdzt32BJE8MQXrgy",
  "key1": "uGXcKVruE8x1JT4NRGpPJm8DPSCvyFSfe1mbJdCRMpEkej7fp9MkE8rZLxEJdpAAShHLcxxb4v3vVcLMwvYiPag",
  "key2": "3u6idf7m1tFf6BVVYjDki3iY8ou6JtctsD8qiKrWcyceYYXeYrhAoPUTdU2bSnEFyii4npaNbtJppKchD5zLoHRA",
  "key3": "VBrTjrYxGdchb7MzRjwz3ufnFUrQyLmYyi3Lbrubpx9ztptf4UzxureNk7UjpCCjF48CV2WMp4uQbRgPcFoAqjY",
  "key4": "2aHBUdkraN7aiSeQm1G2HZ9xCRccuQRs2jmmyTmk6mgoJoWKgkETmVgRLTk91NJfwQqKvVmswDmrgT8Ucaumo8tA",
  "key5": "23TgG7rDyar3Uj9s9j4QF4y6sewnectPUYbxh7jinHTV9ct6jbjdghUtAicjTwMqnvcp63BD6wrRrsQrjwN4BMQ6",
  "key6": "5BYhxahKqemAFL29pwm4KmVNucbhGR6k1foWM2FaXwfCqF85hcswVLcagZVCsw49x17vou4qNJq9LrQSQm7GMR8h",
  "key7": "5WHWRb77GKJuuYWwbtnG6tJZUvohxYmqhSozVfZwJzBUwntH3FQ8MhfhMnCp8C9EvsiURbmYL1qTKjxLhpBW6XT9",
  "key8": "4J4NfaUYdGRa85hFY6MHXF65PYcD6HV2VPnkkChPotkbCuAbqp3UyMuXyJqHhamARVAqL2qbzwenPuQzVUTU27iN",
  "key9": "2uThktWtdCmzggbC4z8AS9s4F5gJRX4Kx7sNo5pzhJJeT5uhLzuguTNViHKV5mAk77Xhq6k3MSpC8xpmVCi2gNb3",
  "key10": "KUGfbE85yZdxf52ChvriXd24xkEwituxXpfJVLDSmF4PuTskUnv38FPBCS1XcbP2XM1aLybkM1BpoY5grJECTZQ",
  "key11": "4friJUgTCbKBe89WVqhLov5bqyRYiDrSo6TayWqhn1yAB9FSHJ5nPiT1VuSSeB1xFVDUB8HtcMDPy2x9qvPNZ2yU",
  "key12": "36cWG9p3ctB2hixCaEbsmu8WcrqyKiKjdfs1d26EqNZbAHbyzBVT8Ap8sWrxN5dYkt4GoiY1tJroSsVGbet1bX1X",
  "key13": "5hVa518G4YrLD42fCewnu9LPZSRVkHWUnny3U8zbDsCAK8csXq6FxMMT3Ldp5LhULUenFhrDfcaTQfoctR9ape6v",
  "key14": "4LFqCa3qa1WvtPhPRFaPRvPqdrYcXA8dDtDQ33ERivG83XFTnwrNJrLm2ojgANGzkuYtzUCLQLaFnfKJH8PHYh3N",
  "key15": "2jn8FbtBh5zJAZECnctbwA6ogWYzMUNZKnNzHRVEGE4SVfYLPMHByV46esLgJmSGi6PjFrGVGBXXTdBv9LvGqJTK",
  "key16": "wET8tBjDRNXUbjNYMvVSskLMf8jNAvA4Ho8wc4ZSiqwGDqzNPanER8zzMpacggH59g7jBTdFCBKEgbjLVwGXQYw",
  "key17": "3wVwYbMWEGNWQ6p1rqEtRXgV2RkA8GsQdYcThfFUAN2CZWrWzfj84EPCovSWDboHnUbEuW3zuBF4bbVbjiRikbjH",
  "key18": "2wGqBUHx2HyapwpQgxorf4b7iTmREVVvdUNVQXUxTWzCx7YCT9jyF6TcxtkQNwHx4jSX3upfNcHG6aQTA3Aq8VTZ",
  "key19": "3Zj9rPFFAwT9oVDHzUAio5rvViyEf3rihtXihoGjCWygMaoDuHeRfGBiSa6XGwq71p46SYqDTmuZyVab9buKMJgA",
  "key20": "45246Rb33ho1PekPvpG2ZCQrnrLT3ro4FcLdG7s5BtCLsipXKiLbTZD68kXxBDaYohZx4P4ur7Y8T7HFq9R2feKj",
  "key21": "3aZd1ZLtadfATGj6mYnm2fkkvP3R9Uz4prtEgQ2HgFXB3e41eV5C9gt7TpJ6kfNmYKyHPtttpTWhVksRgSX7hZbR",
  "key22": "5ZrwBmhDiL9XyiXan2dudgsveyLF5fa6bXEkDHjN4DCgN68LsruQDhfcV7J6YdTFsptoC4yBtKvHq64L9d2XmuPx",
  "key23": "4JYNv5fFT8MojcT8h5H6H2hRsiybMUeBGeQpf1oXbPVRHGxaVnnb87sC2rYgJ156BmoKnPncpiRzkHsmGWaotwJm",
  "key24": "2ae9nBh1iA2rgv25QefrVF3ZHXcpkCeroSntfJMM7Nh8tUdCeSFJvD6kEF7Me8ia9i6KGZpQ5iYVqFRqvpc2ipof",
  "key25": "qFkN2FCRY2snPMAQ8d7pqUBTu1wNnv4Q7T75sEKSmrjGwGerHpMj5DKTvNh3MkymDSxxDc5NqFBznSEt5xtbXBF",
  "key26": "39DpbmNnTvd2JKfJMDJ5BuzXevhKhtxCLQUWY1dbww9XmvLEaT1c7KJxtHsZbExNujgVCKqNf8S7Y5AEzBPa17k9",
  "key27": "2urSLuitSxP3JrGKSquyJXpsRSYkZ9LBejk88dPZp4zGqry6kW4cSrKgLU6eiPY9mPQv9mDLhnkGPgsWPAdqwbmf",
  "key28": "5G6pB5kUutLeeB9cYidYFUmSjK3LpSih2A9zCUuB4rNSC2kwpCHTzy8Xg9AKAJNgmuibfiEZpRuTL56oM5DNv6Po",
  "key29": "5aYybsH1mYCn54K5DHq4bteixydWJf3MSjcM5doYA3HPrCahSiKswwCPgt9nHGDTaPpLBb7tqYdAwpZreRgMRLxA",
  "key30": "2p26dYj4fibdj2opK8N6QYuGswjpVJFdMoNhSm6WTdExwnY613MtKNu6wRAQqpyNLPGh8dV4JoDbHPagc8yTHz7S",
  "key31": "3wzA1jgcrS6JrzwTurVhLbmEo57Z5fWn5YfYM8Yv1fMRM7874uHn8obCyRXo1xqqq6aYuXAeNFS6EvZdnAGyzzfo",
  "key32": "3W4eVEem5DdG1gfXUzZLuBupXSMd3pGrRkvt9VxRrne7BxouFVNYTsJvnzJq3zK6ffnAWudbX3qpZSZfyUvZLkiQ",
  "key33": "3e5Z2dsNmFmmgRzzoESLPTqWw2J1r7pW15wQFReVQ4G3wAY6fkbGVM6C7nGZchZwaJDhdSMrqMYBiLGXEWsvuQsm",
  "key34": "5HwLvTB2kTE5CbmNkLxoetcqXcREgz4JCFa4XSnmsyxcYCpZ12J3iFzYjdniFkdkstu4T7YLad3zVQcTXuCMgEBY",
  "key35": "4mpM2BYpRgTnYF8hyFee64Gt6KiQCxo4vL4sC5StpcZk211QHgUArKaYzy1fc4B3nZgPhz3DW52YA9AcZrMcnpXn",
  "key36": "5MTpiUz4UmWv1KJz6ft1fHwcyEtYpT8YbX7u9BRbwRpH5MmKVXbw5dq1aqdxzfszQQyRJCtsVyrRPKZ7DVhkvvHh",
  "key37": "2iP514i2UwCSiR6usRRbNC9v2yeykVYsG4jQ5k48ETEZDYCv9J7A1jarJws6V9qra7dfV2z54YwpuCcZJQuPwEpH",
  "key38": "4CjVkdvWVA2Uy1t7RMGRL2qz6ddd34NiKrje87mQ2BeTwzxoUasH9uheitMMRGFa6pPCuGWCsM9xkq7ngH4zjcsY",
  "key39": "3G3iFrL8msdHCEDjY54YzAp8xj37nt2VHQ3f6u5RphgzHW17eSzVi2QLHVR7G6SZEo4KmuqyF2ymo5UxfLU81gaA",
  "key40": "2wFh1BPiv2jU5GBwBTdTxj4i9PHjdUMvA7qAMpFAJLTUQLsuxmdCNvEG7cvs8maPtWWit6FMYkr4dpMNmjgLDxXT",
  "key41": "627jvihWSNzVFDXVTVuv3hv4iAdPWebYVePy1qMb8VPdoy9xzDprJSasDFouAbTbrQ8xTRiLDw1iuZkziLjTX7uE",
  "key42": "31314rKDCLpz49euuty2meJvMErXNt3ToYBa3kQk6jMN3zFRXucfJZ7VXaRJc3HVMgYdWfpwjwbegz2gqk4apvg8",
  "key43": "5Mgk1DPZuq72NgFwJMmRm5njZxhLBkJuMJY6MVjR6iRXV5NtEscDpWWkQzgzezYxYumzEJEfnxeYhrK2LAb8V9Wr",
  "key44": "3TNpDH6g6P17JNKaaPW4rTvc4hScaEDgMpJRVYCpNn2VPp1jEsQCcBp6K4XEPRgPjQXUiaeFTtDEcURMmTsWtDJj",
  "key45": "4R9wszkNdHBN4fzb9qdGjuXkViY1gLg3X9bAaTt1nLZ1RjHRsucbPA2zHTVaPeZ7ZNon2mxkejsvHUtXWzrXNnvd",
  "key46": "57K3Kp3KqBewFHEHh2fUU223QLm9DCrBEtU7k2nEDgyJPh37AkPzFMk7mhX4nwc2af1ySr7kkCbG1F9qpRLwmQsx",
  "key47": "62rMaG5TTP5oonJfkC3ssZop5VNpF3pF7A2wCxiepKFK52au9sfTm8yV7rUmG2jdcdiQjn3x3DRX8XZdYHxWFWkH",
  "key48": "4HvboWBc4ghz6PPxqKn6jqpS41b35ocrUZ5xGhujicxZAZRBQvWFRFwfHxWXvNcPaZ3VQg14NPuSRVJS42BHs2EV",
  "key49": "4R5coXfBgR8GpYd7F5dPwZFQgAdKM9FvK44UdZwApiRr2qibF4jV3BzjWFyP1TXpqixTbvLTgSeH2aVcwjvtAKf3"
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
