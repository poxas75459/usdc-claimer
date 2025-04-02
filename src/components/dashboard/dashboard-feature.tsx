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
    "4GxWyhMijmy6KvbwcQHDzH63d2phwEJHR4NjZhWk4spxnDbw7FKCZUYXM8J3x59o7uYxzGVWAE2sD9kQxTcXWAGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xbWQxXhgqMHhAhTqfNqATTVZR8CHGqspBhVw9kYEkCQCd6ULs4t7tCuc9QSRzskpmT2WAKeCAznVfDmTjrktGCZ",
  "key1": "HDbLfPXhtgD1Bw7kn1b3hQXQhFR67kU58ZDEpF2JQEcfGHLD45418n9oz2KxzuFdTacYB7bNoVyeofbVVgiegYX",
  "key2": "5ogoFBTycNiHvH7uG1KuUgqCP2vkNxZaD4yoyENGs7tdc4h2YsLRuuEV65xuoyryMG47EG1A83sJT1fyjk8k2AHA",
  "key3": "2XuFACRefDWARDqJ3tjAZTadPX9fy4Pvm49xg2FtiSo38AniG61Kn1NTvwAU9Jp3TiwAtbRr4MMku3DQbctQ33yb",
  "key4": "5Y9jSqDM6aSfHZxGZWuGbj8XUHgg8pnnDkikVv5K5jEHGMhUujjkrWRM9Ta7YAENtUU9wt9xfvfxPF2v37MDecco",
  "key5": "R2nmHWXERa6ffvdPpvjYp1JCAFpBLneyeMBsDiezPicBwuRQo9EmWK9UERvTxuXzz2stoGVGBV5x4e9cnMdtGWQ",
  "key6": "4aZeKWyzZsVHf1mepUTkub8j8kJ8c3NHKKNn3GHCk2Su48gRJX2FcLPvBAKx35C3wboPwbcpzy71KWY4RCKpLPn5",
  "key7": "YA3PE1RbTcwgy2TUkoWWxY4SPaioBu8RkcBmoKGEB4FS2PuHwAuQFYkFxoesxWsKMvJFQm8Ap2tTjKgPDwiVZgk",
  "key8": "uX8WsMiXND7VPZgX1YpCTXF99eC9peLrLybYegU2fVWMZ8HkGsb2bzrFMjBWHaFSo1TT7jA8YXP1xpQ71xrToxa",
  "key9": "3roqUtRExtMvQWwkHDgmuye9wE4BBS7NkRM7XvLMosQFaCcmzY7Sm7fTZd1uDMymAvicfyJrdNxh4cB2LSDbWzuV",
  "key10": "4Y2zKxgVhCzzgHVF931eiYcER16yp9y2kqmYYwzotRBU3Y82yTQQaYKAZmu6xBxGWg1sBETBAB5mHrWVa7pRYk8f",
  "key11": "32raCPmw2Hs2F1rmKQq5TS6tiMqJq7jTJMqLCBBHfcgH2K35DDvZjUVWLuYM7zUAnGk1EEPC3G4zdBFcgEhM52VN",
  "key12": "LougormGoa9AWa1sk3B8a4dqE62qbBZUgoqg1JmAptdhsqkZq9fv94Pfm7r3jtCJ75whqzuyPkNf3GDkS3UeVhZ",
  "key13": "3NArV7iDvehQyWwFVZgVyihM7eFFvPva4duCiY9vw41m8tdQNV2suZXJf15KY6Rr56z4p31xtFvb8buP3KZpw8qN",
  "key14": "5VML76818KeggDNJJVi6iY7TsLzai93BDgghj5yYhNsoHJ1QmzvkzihNfkcgKXaBkPXMkQSAo4LzZQwYoxrpd7PU",
  "key15": "zvX66ivgwJaxxarC3vBKT7sR6NjNeqz2nwtY59EGsGbscWj7DrGA5jRgk6Kcw2yq9kcLCSEc7xZVpQmSdafHLaH",
  "key16": "4DnMD7mj5CkAizjqb5oPrqeAP7qL2F4cSZX7v9ciGRhrST6GaKcQqKPVys4exG4MeFuFCaqZgLKvQ9wazgYmuNnh",
  "key17": "4eYoDy8W9RjuXMcVL492VidC1Sfayk4eyTxn34ff9WgQvvpfrMzEHFduHfZsguLXy5kwNkrn1Wzpe3u9kmp1YDw9",
  "key18": "2pkFuCXMFwhJbwMUfHrmbtx4TjTDPve1cS2hGuiMRJHDPaWovV594R9tfcbCDzLebkjSFhuDEjW38KpViZUaBD6H",
  "key19": "2hSyCdiojySPumvchoNTatQLgAdmSPZxWgD7LinNECEtB1peUh37iYbKUfFktVSQVAcvNYkVCMgjHkyZePXMRmY6",
  "key20": "4CthaasXgD4aW9fu5UQx96XyRWMYfm8YA1vRPVqcsuK9rZiStufog8w9UaTt5NGKxCuE522WRBW2xec6RRdWNv79",
  "key21": "3eBPnpc2jUQxMUtKURdmm9qCmnHtee3cVMQVHn2xyuYs8taqkgDGZYPXq62hDu48HjtW87qDMKziKst6ePo6KTfY",
  "key22": "3LR1wMmMH83HLHV2PTy3ooZEnm7LcVJ1faXPGtKPcMt7noy38rDBXeFmcELC3VdfhfpCb43QgXwCsSW5rT1iJ2fK",
  "key23": "xdFGX3kwN7EpdgZzoUNUqwy6QyajW5TXXvjKtWWStsk3MWHAj1kQ1AkVngbbo8TY9FqN5dYDWzF2XnpaYz4Ay2m",
  "key24": "UZF7tQF3orcJc6gry1LsHoKF8xndGsgPimcLJo7pSDkqrdPYVFKULBwVDr3xJYtzkZJdU4NfvH2yMbq5WbidRhj",
  "key25": "4cGyxaQqhzTNrSBGo9k54KGijQXyCB4Lip2C7SdqyXXcCJuPAkLLMs4GV1v1p63Z4uKNFKb64trL6vVUwybtd7SQ",
  "key26": "B19TX8VcvfaJERK9tPC6J1WbfF12wi5kVmjWfwVpPqXv7KqmfxFLvKR4Wqbp1NWn1WvE7ThED2xi2aveJxb69KQ",
  "key27": "BTE6XHAgY5RjB86gdHWXEvY4zZnR8RXGyjMNi27HX3fovKgGLTrbgLBQfVocU5fms4P94dkqkLCR7fWyS8hcQen",
  "key28": "mHwy9AdNrBrFXhQ8MQc1qMYCLZQ6wnrDtWuCqXYcZv26ap2PUVpSLmj8PptCjq1h9jSEcfV689hfH7pqSYA4p6T",
  "key29": "4Xh7NToVdB4ZSSZ17JSw3DUzATgfLkCjLC78maQCPuPE5bXZsCcQfhLxNQeGoS5pMdngSkqUQuMoCFh5nSryDcYQ",
  "key30": "oAXvryZdaYedkzGtYLNryD87dcLSLi7HMi91JrXhKGtwNySbFTmoD2QKpirujMJWiQAkGKZCmqgTdeVNDj18EMi",
  "key31": "2GnH1YeJBAWntyrnJ84EfPtxkLeoSMx3Tt8EoG2ADP7yR7gd3wAP3FrQFffD3nP3G6FY3Xi4dZJxt7Yame7qjFAq",
  "key32": "58cQpgVGP4FyBL8XfHDXgFSxrZP8g7fYne3jEtYDPEbMD6i36LBrnoWv7UC31VwutkWvkVLVGHjLpA9UEFw7xSUm",
  "key33": "oaK6xWq4Dy8paY8oqeQjJmaemb2RFSjy8cCm7TbCbcuuHNR5AUsJFYghy1GPN7wjg1b4dFd2yH7xdJ9QMwEbaZQ",
  "key34": "2fxgZRn4J7gQQiqZfq8EwfBTtubXCV6MeCxjJdZR3xLwWHtfuM5acpDdf1GuHjMatcmhPpacvCD3tvFHYWkRJ9oE",
  "key35": "4ps6MfyZXSUu6ZqBpxekDou7V461zKU5mLPMMyhcfmamyhZv3A5Sd1KbDAva1NtknVAjfGLAyjwwqg4ao1xg99Pu",
  "key36": "3HZWpmoT41pGohV1Kd6KpHhkKxmbHdH3ckmY5XW7GY5ztCd4aGUjDH4pioDrwP7K3q44nAkxP6DSfjzHto5E8VBM",
  "key37": "2ZJAVWqDBDXje46C7ijavaYaC9WjRMo6hZynRtN3zHewz4wGccQvtPSvsrE5AjDQHhQ7s9S4JmWjatoaBG8ePjj6",
  "key38": "2Gp7EAD73cBqGCnknhJ8JrASVBqwSLE1x59qJkC9EBendJrFKnEUGAhb6BTJTKyiesb4n2bYjQRMo3fktRXXDc4N",
  "key39": "2Kd1qSbFg3kPvT5KQxLaV1xxaUWKvQvg7RevzuQ9ntgRuVEHS5ceaBKJwjsDpM9QvMJueMDY88icBWvjb6gnwyFt",
  "key40": "jERDH63wSKHSWjGL5ZAFdybh56GzDe9KYEAJ97rcdAaWj1TFMEdRopUaD9pRdMj7rn4EEFSbkvzD322LNUAeefS",
  "key41": "5fiFvzBHhwsHYZLzmCAGSBiJ5o4iPkEwtd4Kdg9to5bSY3C4wwqnxmuTTj6YNoGpHBxs5gwkvqAYDLEDZDfBPodv",
  "key42": "4vw2gex3W5LtsW2dpcD7MXSv3vdaU2QikSJH36rBbW4LdwDyYnN39KaL4S7T6na4aGMvaZP15FxN46LmMdC3gPK1",
  "key43": "4zbydUrMekreisLCTxR9NXmcAQ2iDM7XWU4ujQDwK8kVgEHh21ZzQMJTXuaiUBg2kPD6YKaXCvpL5j36GvHL7qiD",
  "key44": "5ewje1To9BirdDabSQN6M6bEr7evvkxhq1sqEnxtCHKRmwYWpBfiW3RTFm3ciN7psaqqAv2eSQcQ6NDyVCmnZ2gD",
  "key45": "5twSiL6Yw2Sdz5kVywU2N1qhNme8WrjgBDn9ppkD4cwoSNeuWL7zwXaocjkuXn64MYdqpPMNuiFYcFuZ7k2RWMJa",
  "key46": "51xEm6EagaewUYEVom4sGJsd9i9KT4ct7Ux6p4djx6GitSN83NteYj7ecqbjvtdgpqtY1kLHVFyXt9C17RGrioJ7"
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
