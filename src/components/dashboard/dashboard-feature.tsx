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
    "57abkd4QRNxrKjrmHc3FWpFdrzt11vrDSgEyWrcp5To4ShQCBi9oKUh5gbxqQwAc5fgs7xvV3BaD9KQmRFbNU8SW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xafu931V3XXWLtPhNt4yyaR5z1Su5HjVCajJnMpj8SQG7vvmQCmzSeqUHV9FhhpcpqCBm7AAtRREh4Yj1kj2KPg",
  "key1": "484V4JjMRdvZU77xVbv9QwXcZxR25u2DJP5WAKwh5aEK6U5Q4jVY7gaUiCBdyo6knn3yXW7zYo9uKEfKwC6Xyrr7",
  "key2": "2r3oNPPGwLFaAs7hF88QU7ePCCNSAVghhdWzVsSMq6hJqEQ9hLbKMnpwSq9MyQshhcs5dFph9YeTKSk4S2zHapXV",
  "key3": "2eZySW6QgmA9pRH1XYdo39t4MrXuVLfR5vpcK47udp6Cz7rwbQ3Wr2uSighv5tpbFQ2jkPcwWprovXMZWJFtSaES",
  "key4": "3pBdb9sQ7cqTrVS6q4S3iBvUCVUFNd6KZmke39BacntStrfAvAwhpa2H5LeWCSUeVT1JLfDHGYpvDfzkmthFGa1D",
  "key5": "4F3dcZcUXYLKBQwnJ6AbkFw8CDDynP29XYNbczjFHEEuP2kbAsApcE3jmpedK9g92TcGVtbEiFDEGwE4sjmiaTK8",
  "key6": "pPrkC4HzELbRQ1NGW9yAw96YCSfWQ9jX2tBt7hTZTLLSQBPu3guPTZnts4fpe5Jk6SmJVSDrgVTRbCefbApms5X",
  "key7": "2JashnF3KXp1mDCiJHvwPRjsGCJTyfeVgxmuwc5iyUKUXUPcgJbwGZJoidik5yHPvk8VUdDTktuHP7tfsKSpNMTq",
  "key8": "3uhJjGovjaBNrozomHxyZ3qZAfwHPY9EMoASZKTvD7HEhfvEcbdhk7PyXbg9AvPThrZLWg64T2QKs5P7SRk29xtv",
  "key9": "34JM7f6MyrH7mCXG2D8oPeJfBKwuhCVYJNbenymkZtG65mZEDLkQVMD7uCqWc4idUGE5nZ5M8YswpFT8gCqU6vxy",
  "key10": "78oaBn5ighK7615NTVxzT8nvv1caJTmJVapvvZREyY98FbMdVdUb4e7G92dCQGRocYwkJDwczd1pDookFGR1RWM",
  "key11": "2jkYZGQfFG9YSF2uhmKPcFnJrPYpt2j9MGkVTQFou9z7rtE8V7YWs41yBxEmmpZbKW3SwfdqJ4GegGCXSXBGWdPD",
  "key12": "4oQaNWUn11GK9cwuFSztZ7iBb2CqPevAhS2ZtyKRVQK97QK8QnFU6Pkrf25vqhHpirAAfEAhmwDt4JtYmbJp4Uo1",
  "key13": "28SLqk8NFyiqVoe7UPozJcyG44ZpUuT2F2ahjZE1nLVuLrP99kpLYNRusUkhq8L9mEWbxSbzJnLbAQ9KcEKc6opg",
  "key14": "4xSAnARemdxvnxJHphBwFMkZ6ibsQKuGHv1NEuSw2BxMhHd24AXod2c3xNnqTeJ8hw6pAZaHhY2fyzkgR6qaAAYK",
  "key15": "2h9KhDB2dyohQSaAi36247QN9awpNngXTJXGZr6YrQcjJbHJLGaZh35Qu16763h6m8JDf82tWSkK2zkUDC5sPubK",
  "key16": "2LevPY5kn5SyveDKTK62GVe16Mkco6ojRBp78Mo4K2ji2gnQBKwKd4Yr3Vvj2Fq1PmeqeoJnyLtoMJnot3NqfFwh",
  "key17": "3GQxi37L11Y1f1WywgZ8v6TNumdUJ67rC2ZdQmb6kPUvYnLTkkVHxZxnThVzLpQf68oEkKVmU3TXgZiSczNBUUGE",
  "key18": "cd9c1GmkBWPxP5wHEepE3KCWJ2MkZ2jPPrgJwBmcXNiCdzFxsx42xjkTCFLxfcnEktDdDcjT2pCvRMAFEgDqYxx",
  "key19": "8koMUdgKbBwYzqyDzSqU8vVfzkJqSEf9zKnGW32HDyiiJ9pcsCFgxGt98CojcfYRWHvz8YJGemj9mgPWNCi1oRx",
  "key20": "2zGaWKymraG5ocUqzD7zXRGEApkuwfHRkKjprxE9Ju36vTKuTLWSrp4AC3kwKHYfS6tFoi5BRC3fDPjTpJGooi6u",
  "key21": "5yfkaQxfNkH59y5HDiThVLrHyxctPSzXEWgJtP7trvX58YXiTjEQ3v3qrKWGpevYPoYhbokbDVUAqASNGdmgf4FN",
  "key22": "4gYkU5kiPBPz4r7G6k5qABUsGe5eHxidCSYuk9r69n5txkBnd3FZifGFzcsDKYcFxvShK7Bb1HnNGjEL9ZD7KgQs",
  "key23": "59mBuByqiX5o6S2ERZuQHWzpzGtn8hXbHT3RZmCNqzBQAHKgatTVBTDM2SJC4su1GG2nT6vquCSnTcADmsk9pqtL",
  "key24": "iyNpdwsoYr81R5ogg4jZn8Rt6RxCYSSxjAwrt98epoj5LigkLV9TJVagkSUh15ZhWBTEGDz7iXp5CaZrudKrj5t",
  "key25": "4qEeuzq2DSV2RqNBnDGotKbNZ3QE7YQbnxpCzfRUZjxaK2ALYGxkZstDVU2oLTv6M4XmeQGHCSGVi6S3VABu2tDK",
  "key26": "A8SFegPDKphuqo6LGgaf57MDDPAbWDJtn476toe2Th2StDpSCLFS78HjtkDjZS2PEWs3bC8eGE5kBYk7uKf1Gji",
  "key27": "38rhc9ewdpEfmBxtFhBRJQd7oYruuCeEQWjjHYn1Y3aVjkAAAHcPd6mfVDUum7XAxiJ6Kk5kgveMhFMBMt6Buz1r",
  "key28": "5ZCvPGNq2m97AzCnodMkcGAdPR4QPMUSt6wBBzu8pFAP244Z6MPDS5wKvtMh8V49Qj68nWeCwC2XDQn3jbTMdJPA",
  "key29": "4v4RrTbbbhJidzLrGRmxGViLLmvAHGLixaKQyNmSda8JyFFdvpMmcF4ofwuJ84yqLXMCYPLh6RkN7USdEacXJwMx",
  "key30": "43GaCyDBajrUawHHgjxopbYiMjR6kRQWvzQesf2egZAtLBGAcSWR3GVK3PB6Bct2MKpV9ZJ78RVakhHQGDHcbGXp",
  "key31": "4yFwQPEwqhripKRdEefw9Fn32aasgBe2AKkWF6onDC5TL8KdCppZAtT4sFahWZrQiJ34hnE4MuP1ead77EL4L8Zt",
  "key32": "8iRzrJ7NPA2CFKdBSiao85VoZCi4iKqWm9b7rHzA1S3YL81DzCtx5TvwS2AeMuSbbSxzua1knCmQN8G5ytiGia2",
  "key33": "3Gszbp8T38zUWHH7ptrBpvyLqq5Q5Djjp3imjDkydmwrH5v79WfCfn9SnAjknQX7wCu9raccDwXnBAcPM9Ub4v6a",
  "key34": "5U1F3S6xHJqmGFUgxYaHE9a7JuWserB1XFBveknYsNjq8BBJFSCQ2cxcSpKzEi88Gy4ZQVonGxzdQ6hnCiW5kiPd",
  "key35": "CRr61qvqwi7N5BX7CYNCUq38i5nH8Lkh8stnLRSBe52ZWHcjyWMF6Hh7kMJAskgwkH9pCdsNKCKRg6eLA7am6K8",
  "key36": "517SnfXbBpGaC8dUWWX5Kg5mtF7fzdRQ4v53jpjqh21akmo8t6JosPsMUNiWGpZvSXAxRQw3xcojTeLkqjwE4ina"
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
