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
    "x6raUNV2gQtxbrNy3qf8KevUZKD72ZkfosHUH9bpHcuMZKCntedPSqE143x1R5aFR8YtWcnHB1WcJowq15aztoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gxJEdKY9uZY7goHGViMYRFSumLcNsRUEm5kaKmNBNjMefYbRmUS1LqhkoM8UWhNkaa7FPDtvfVEWzTrcZ92vBpt",
  "key1": "5Mwu2WPJsZXve3xm2NvJ9sC9fzJBR4WRChndUrudPBMBSB6qCxuTSZG6vh6UM3XdZqHRruCEkut9v72cYGSaPcko",
  "key2": "4ofyEVUfrGkUArRAA7Mw3qSVg6WAyruhuA2rHKnf8uWNkqwJA5Ho5xK9rJnb1uHVfXxmp9zQxx6SFjQFdQZiJu28",
  "key3": "s5mnWdhbE5y7tUDsBTF7pDN2gNhqJZdqkAXBR4Dw5MZTA2uzu6pk9Bsvd3zGSwDiYSs8TxBvCR26harkte6QFHS",
  "key4": "3DCuirDtZJraPP7jbJmANtAMf9ybabjRGQRFAKXJj6z7VtPagLC4mmN5yByMivSWHvLnz3LoDVRqYsbJzAiwFHK6",
  "key5": "3LCHt4NNVyJcuD4prNRLH5Zm1w6SDAehtKruNERusanRX3jBxKcVjhJarEQtHF6Nqxw9tSxBCgATAdqGe5LwavrM",
  "key6": "3cj3d795FCFYE8Dqz7bp48VhNhFTC6duuy96RhWVukx6tRC19ZEG9RXw9T72Qi5xQu1HgMHw3Z7uHhgXYcrUjQVR",
  "key7": "UHVN22pX9dGccuJxmmdoiYN7UtXFZTGqi7ZC8oLL7zWVn9w8LQSyFupSyb1YmGb4RkDZUQsUatyoY9aJArBmGiv",
  "key8": "3dSc3ZtAg9MvcWdPBFcqRSeHRpjyVwBu6WQWRVoVwqV33BzpL4cYJpT7TYnkJL67sXC6SzHWpwzTPdpSiF7o7rQg",
  "key9": "As9aMTyW62nWa5KADuQUmAAaF7FmYj9vk6FrJaLmnfVtgZZhCrAYPXENKzbKNAUrq3Hj5883rqoQdpwFpNzbfQa",
  "key10": "8E7EhZQ2UvmCtinYxoaoxo9zZ45tK1wbDc7uhAneD46LiHMzQmAczXPamxXXp42zJ8bbnBC5XfVt1sEz8Aah6TJ",
  "key11": "5NCnuzzDK3kQ4mLfYWQtMAT7kqpryYsJqQq4qB2MWopTa12d3f1Dex6Ke8mExYxUMpsWCAhjVZHMBj4Wc1BoNKGu",
  "key12": "1f92wVAB6EQrdYKTpAvMMgA6CaZY3TTxLoyh93aVfmh3K7RzdkhbsTKuXuQPLzWj71e8fbBM1NqSjXPk93LJQ5D",
  "key13": "2EctXQmF9iFaLnc6V7QXazaHHYnM1Jkk3BmoNKYeiw8bs6NBV9SzvTCgJxFJVBEjKSehav4TaU8thPZk5W7TXLR8",
  "key14": "fim8zmeXCaYi2wqrpZC1PAWVN55AD7kENrPSNP4vY9MVvToxweVGu27pG1LmtjDK21m8iAtxAxapcDSkswk7rMK",
  "key15": "2YBhJV1cvSLZPJawnN5nbU8CAZdJP3wZzakGpfjmChbEt9mvRY7xnuw4ka7R54mQNM6vRbDLWUZAsnypqjMQxPx5",
  "key16": "32gHjuxzRbVdeqRDG2aGFsQAyd57Lc5q7D94nNg92zPujcbQDMbrS4JhdbagCrb9G1jxMiQ3dSpkJYpwgFK4WsP8",
  "key17": "5kjBxdZ932hLEQUe1Jm23nrvhFUBTxWAoABMKjdU9yXEcC1RAjvZTdDcHaW5W84N2yU4c549tHEXkoWXrBmaMrJu",
  "key18": "JMrQxjfNmh8KzeVnb3rmGwnwFaSbooKKhnfW57uyuzE8zkUGRE2KMVXN6i5qJtvR7JcsPhmdvNMMiFh95LUYUCJ",
  "key19": "5nzBmn8ZJSRPJQrJbzYx8MYd4BbXGjPuG4rYNv16sfyH9q1CnRKkWPN7mPWcV9oKdj9uMehrjJUPYArrBqnTQ4hG",
  "key20": "4mZ6i1dAx9JgeTuqTHfiC1dQWQsEkqQ6bSJdePiuz91h3KerqpxVFMPiuXHy7VDr8aW6urCpNxQc6aZ4WSPKDopc",
  "key21": "5Axqg7jAycxG7qudTMchUBhNtMr48YbkPhwUweGMRZYLBQRdGkXciy6PxzXAh9swrUk1x1G2Tt3s4RzqHg1mYKqw",
  "key22": "3nyKP9i4b6BYyJ8W35NBMcrL8G5dPLX9mx7VosTFEEEAcc8rKp2HrGe8hkkURmQv8y8KzYzGHKPymVS7QZwPrfif",
  "key23": "3atgSxVRBT5sWQrmDM3kRdEZyxkXqoZNSFJZV68tuKS1qZXBm1nabm9ugzP3267FXp8dVoxWYPs3DkymZ5VEDFHF",
  "key24": "4tBPHfoG4RmVD7dgJTnwWFE494sC5HXuFAC98GhV38c2bKamTmnuPJYZHWK8Y9g1NxCKtRAWccX7Dcbk8z8VGCyB",
  "key25": "FqCD3Zm5coM1QGfKwyPTWbPqJJAgdaXfY46P2GgdD8YXSH5Wj78vJKTPZYomHeNSRr9VJgwHW27itWerjdLEX2o",
  "key26": "5ZB7Ts1xvqJj2BKncvezrDzxQpwqsa6f9aYsFG8BQUMDyxaQfxTWPKr4QeqifqZqwCVmA9U4UwJ8Av9ShMXg1WjR",
  "key27": "5N1jXJWY7STHrv1h1HWDXwxgKX3jbohHe6zYBqVMnS1EYJCdS2EUZnHfKR2YmG6VTZuo5Ba44ho89bJZZDRHBtQt",
  "key28": "3FGDCcMkLeSMtCM1u3YWzD8NC8K2apfiBAQTJnwRswcCksm8F5WbMvdk6bU2NTNhHv7Xu2YRghm3ZG92rWnbtwe5",
  "key29": "2wyyU7soD9rzP74zDUJ92UQUsVax2W8ePrwvzgNVEt4PR982LNsY4HA79sBxVZ4hbZxjXXBuX1FACWuuBnywXuEy",
  "key30": "457CCNK99FmpyPQ7FcjkyDDnEcmiqRee5H4N51UNTDC4sKKFCR99nFy4sufQaJ5dcFhk8LPNcAoGMyHeRLJH6Ypv",
  "key31": "kDnR3chT7zamMBiSqQX5Kig8pc7ymyFQ4bDQawVc4fNdJxyKii8VMnGqSR4CCND7FdjHpi2cNFxEeLw36DEMJ7w",
  "key32": "LEVnF6zhRLd9ckLtSRCf2Ea9Q46xdUdQMsGBfgaH5XoW3pMBqr8o9MNNqasDjVsZA15GQBqhmeX9bHVy7GDaR81",
  "key33": "3J27yrKMJ5ug7tQW8Uro4rfbQh4r6FQJADxBCYxx1SbmBhrimRfxijKS2huLrHcRH3csWfZLEJP37jFNRBv6kW9K",
  "key34": "2Uvd84unCz6enNS5fAb1CSqFnF74MSvbNxD4SfzPcv8FR7xMmJtJ7QV4UxnwvqMchB2wmpET794xoJaRa1vFJNbs",
  "key35": "4ha1a7T6qpGD6yaDoYrcmUw6cBWzQZ2m5Em3Dcua4ruoSwTnbtPLVcjdn7xXiNw4EHSFFdGoERLceAwDLkhxfU4w"
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
