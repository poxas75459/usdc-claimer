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
    "5YYBHdegSGTkVUV5YXmcUKuoYEgTtATFfLw5Ctid8SVJXedTq927D3Uo31aQf3vLExKVofMBD5U1ar1dcLPgXLba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C96MKQqEhekcKHBx6i1uMFMdY8WZtnPR6gQdT8aBM6d43f6u7TgBzVETa7UjAi7txKozmsH1MHEzALV68QPinAW",
  "key1": "4oqxDswUQuoUh23ExbDmornS79ewKdeF43HYHeSW991jYmGjm5FDAEAP5tR2PqST5t8qmF2TYPhyKsvnTZcxRQMa",
  "key2": "UzxBHWcoGsLiVbVQVU2JPZdX14DPpiiTmR1dZJYJdDsKRjAQdstC3B8NgsoBEhVLU4jpohdgy11ahokL7EtZEXS",
  "key3": "2PijhoDQxQHipW4tGjZwyvv2jv7J4kZUdyWUarBkK32KYqdnuvhPM4xmaEXTcQPECnr39Q6RuLMoGErXdRg3k4ks",
  "key4": "36SiWBK5VCtq74fvjCQSqctwUH22TxoxkSqD34NN8a5P4FbhqYSewt8q7WBqAi5mSbWLWp7ov6K7sdy4RpCC5C9L",
  "key5": "3CMmthN5LASqygqdJR8XDdtfN6YqktzKyJcEULsxuN4iFNSw3MZQaAfU4ZEitreERk2VgQLfbJuvLrp9bZhXQX4j",
  "key6": "54bneStf7cWDKCtDTSfNdUQEYJgFygd9JsgDvQ8at5vJSQY5ttRtjmRaveBgv5nzFc2cH3oZ4ji8Rae3dkHsxzBa",
  "key7": "3UGQwSkR9AjhBZj2F6MNpjC9MWvSyLSBFUNxQgLb3Yx4ncxfAeCpy8h2nQuRXvKqY1VjtgjV55Ng4qXrjKiZxkYp",
  "key8": "1sPhn2Ns4oQ2nW9ghXhStboLxcgBbecN6fgSE2LJum4bzoHL1PXVoevtvrprEnuGk93C8GE6TAVzoD9DWu2FJWD",
  "key9": "4sJdFnGqZaWBuexvGsdzEhiggtc9T4ukNEEXYGh4hpeE4Ysq1TS5RR6B2gCzCHXKjPWWuUiUJYpF3vzaQFiSsCzx",
  "key10": "3jPJfbsarhcPdRtRXPvBRMwSvurGTx67bBWKsAVrkrjoxgzwBRaRFXFT3QJbwAXHjYKuhw9PMUwcW2dfW1n67yKE",
  "key11": "2gAJa4D4vDvaP6Fa5XweaF55AZg9iGSSXtveaQ5yKyQgtGNN8JaGVF18SxrNVR7KKB4FmnLEvwknMmGzTxWMNG9h",
  "key12": "2PfYCPD9KqDHALdB7q5YJTqnbXzUfL2DFC23k6fUct5uNSYqgd1gqkffddT4p4FVpRcbu6s5MhNptydGeEFH9hZQ",
  "key13": "2kSYX1HeeT8xpz4TnT2mCUuboyHPGno8QZC7DFxxRNpJVAfpG1Gm97g6qt9tyzyWe8JjiQghztdMJgVe8LFh1bws",
  "key14": "4hQv2o6FfZ492nzpsyGQN4EjJmZUT4KUfTm3gZ6JNF8eV2FSsbr835QWp8sKxEb6mdJpigmeaGW6yx1NHWkxe1if",
  "key15": "4bzgMR1EeKJcvD5j75V9FWDYqFenntUK8A2of4iKkkYcRXCzkMgppffFbaup4oFQNsiGjpUFatNJpnJo9Bysho54",
  "key16": "5SSTmcTBRs8s6XWRxmpsNo2tK3TE316VPpYDH6V6txD5RATi3QzZnY7eVTfqAVCrq3WeJLznhdEjrF3gPteuNo79",
  "key17": "3HusdscemEdNdKGETEQmGsd2E2XJpWWdPedM1M2w1PzhNZoCjF4eWZaBtQ2ALm2ZWE2Lk15UehM9vv9TNqzj79KX",
  "key18": "2cygDa6G3zGCdmgeq1FirWXDSHi6SrdMiL8MT5ymMZ7hkvDJdkXzQZQ1PgMS8S9XgZEUmgKAdV5JTENMaVoUrQyd",
  "key19": "4xow9P8jgUV66c5BGjAVDHWhuosBZ619Gxuy17W7RGyZze75y33nBdt4qvXaJRqr5M168WYjz1qbtdwfHrbGh3z4",
  "key20": "4frrMmAzqKmBvKFZau7EkTz7q9wuvu7mCA1fymcYQ6ikwpgWxrxToguJkWSCnxcm2nnEk64MmxAMJ9KBZv96rsYL",
  "key21": "2E2uZsRe3z5Zv4Re5G7kLfCCsfbbyKLpp8eaY4Wvg8MeqUgJF6hLYYw1r5kX5kB4YAnEvKfBynRczxgki7wvNQSs",
  "key22": "3wRmayhduvp2su7wmqnTAVRouxkvunwW1Y49WCGhyvn6jmWHeTZh3hBaxvhjJsaULrtLZVhbJDXydK9ozhEEYKhk",
  "key23": "2VXaGEJcc7xxUg2sgXDXPRFCvALRK9GQWBeFLvXvBv2FTUyGftH4AodTLKx3aYF3ykLqnYyRAPNBoQys5fWcWcUt",
  "key24": "2NiTxYv3aSQvz7TpVA9i6AUm7fSrBfLWkxrg6ifUM5SRTFuuUC1X5XFadFG1pq9APcnFSBSQjqHoHPGFUzdZZJG",
  "key25": "5FsRYz94Hc1csnqHDBoU11eWgat6FSvRmQBsj5xJ5iET6H3kN6ScbGRs2Ydq9UcuLPhtoW747GPiYd8yYxDAy236",
  "key26": "2pc1zxsDzYzegXNmSmU8n3RWxg1TjDWrsKMELaZfnivCB2NDs3rREyeCbqRvWhtdCgqP3TD8zLqHjLyPLCYfkGwR",
  "key27": "5EiQ8vk8rhPtFwA12TZNyD2NjcbpMU96Zszq31vFL7Ez91omdPKx14s5TAUVgCVvQgWTVyVyAXHvLNJQ3SrMrKtm",
  "key28": "XxkWPx5dEMFSg43fiaX9s3Td9QyDSCdQ6eghiC9mCpspcM3yTDvS9RjbM3w8DBqyQr76ap9jTFVFGGENna5x3xa",
  "key29": "4HV6zirvDHs4fh9cKz57Ue6g7YXyGNBmtTd7TutpbuptqSmANMa3jHTq5MxRgVKA8ZAuaebFNX2ghoMdJbaXoRHU",
  "key30": "66wJkm8BmGW19hrRR85yH7xpZ7jDzseSwh55LPNK6GHEd5bCbUw3GUipdZGfvKe3TRu9newXyNE7Ygn87X4MRRFn",
  "key31": "4i5zEpUvGABc7z3YVKKk2qmMQeJfQqCnsfySPHsPF58fu3tMjeVrajo3uTLtvZccH6t5KsfZazrCKj1XbU9T8irv",
  "key32": "arm1LHWEb2Nk7b4hguACPiR9aoZQkSiiwtdYq3BRmP6b6Lm29phSg63f3gHLu6NcwkXMQv2sUdBLnHBsSDH7MSi",
  "key33": "qbryCX2WUTF9CpTcDF922atA56QHsngz1Dwuj5Bxaj5xouH8EKSD7JbFtUKwCnkdcbvwL1ZMnxCMCvz2WyGEbeY",
  "key34": "62cjWxuGLCKxrkwMdzNbC5pqs8g92Sb2CbaoEakBGY7zxo3QYv1MwV4iomNfwtxF2CV4ECZ3eE8Egbur2EUWNvmc",
  "key35": "34HJKQWf9Ji32k15GkmkuMJ9cssPdRnFg5oZ7HLF2DHCSJGLTfenL6Hm3EjEMY1FxYfs2uEcCa2rejAL7A5Xe69R",
  "key36": "26emCwuozDWWLGZRUUwdcUPUxqRkH8VKqzruC8aSdJ63hXc9EJhUucb8RFwcoNaQSs3EqhJsT4t2Er8prZKjrvni",
  "key37": "3yjBpGv9cvxWwfSZ8H1QnfVh18BKK8uuC59r5VxoGwSS4n2ALLf6cuZQgrQ5i6f5WjMaNfP4SWjYoqdQ9o9mvAZe",
  "key38": "4m8KbidUjVDbEr9nPYMUsEbBvfPmER4QqsHBjuXvksdx4T5jG2ypsnh1rCB1RffPD9QQCiuRbSJhwhZDxLAFJZUy"
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
