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
    "3vHyJeL31x2TuRQ82WR2Nmq6F9X6eMdq45DhXk8AnMszyuJae2n7nuAXc57LJFZrXKiWKa4ZdvUHd2nEBmAJ3L5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GusK4PPstH7wSgqcgc3DPLbo4nqa7EFo6UhfdhgdioNGB5XVDHe3KqeDTcSt33ohV6kHXTEQ36sESHVTsTJPzAp",
  "key1": "41pbs4SAaEoC7qtRzyBAgepGgZr6Bg4BRpy44GQ2wjm7XN4bGLaxS2GQf845fU756FUCmVFXPjf5qLggK1fcTx3B",
  "key2": "5dsg6FN1W9ipiPWCjzx7ZFWCzC8hDFNUK34yV5BNy51SMsfQms4vxbYne1ooR4hiTcJySNucEkLYvAhhPGoGZ47j",
  "key3": "3qAPenbWbViSokvkJbh8kqiPy9rjf47rgWd1ddN6XncutTg8jKGQmUdwK9qFLnf1j2PagHLM8Hf1dGGL9GQKu3w4",
  "key4": "2ojyQVHy8VicsjNof3MY2Jv8zyjjjZ2FnNkCNKjFAohFe3oc3RbGdmQz4aAZaVLUZScebhZRBezJnmWafjUJUvVR",
  "key5": "4d7d9dbYbmg7YerUfJN1VFkHq95FwWugnDht6bH9JBfDDqCoLZRaaG8g1HNFbwQmd7qEoCV9SJBiz6LYNrMyX8co",
  "key6": "WucDoXbRLKMoap7ySUaBjbUjViwPvCmdWhEdZmJWfwVhockb3EFyPKth5RiF3uMFzropT99L53oTK5sCt5q9nVm",
  "key7": "4xEn76pQJzzeeEzuBV3KoTaKkeMqd6DwJN4j1zo3sevXWrdTo6feSecxrSNCEZg5Wui4n7F1hhJ2GHh5yyW9TTNh",
  "key8": "53F1Y57anDx99QVMbQVDtFGe2QunuGxTsn9dNnGRPVztzP8coQdFz8u8WuNkxcymx3enPECwvptLrYdGqNBY2M1u",
  "key9": "29GMDUUz3gMr33cvc1Ku2LsHBcUTx73qDRapmAb3xBzitgzjUrHYuhM9oexQWjH8G2xQzGgajmvkRbrhngw2nfoJ",
  "key10": "tczCX3eDfCGYwazynz2PHY3virLMu6P8GV2T2JrsgAX7bhkUUNey1gqq8Ew2bBd4VYgtfFhqZffi5awLgxttAcQ",
  "key11": "4eUQrSZA9PB54JkxoJNeTcCbm4hJw4WLfvzydkHi5cWztPRd7ULkudDJQcBTHdmNoZ95ENXtpdbU4XcuWRTVtvQX",
  "key12": "4gZCKeNmcwJQEygoVQcNTe74ySWNwbANtkptopitwufennLnwA5PszFSbAYZYr5gLHentdGGPDLdvHVLwQgjgE6k",
  "key13": "2gtmYcbmthoHSxFEJjU7iUBs9jA9ufLFMZFXNYn5SiqgD5mSfqt8tEdhPR9TdQiL4PYz6954AG4LfAbfvU2iNMVx",
  "key14": "2MDMG2ccrWCxH5PpwQor8kjhGnRNoPKKHJ9LF5rNYSfRxjVsw7Sx1xjLtXA6bV7Gax9Ra5TRXJNKMEGQUMLiiRGS",
  "key15": "3rML1u9pC9dTzcNCsJ6YJLtCXm288n17JRnu15TZ8NtQ9AJnXQtEH2T5nAfwRoqmJJHvDQoZK2vUqvNYCayME9vW",
  "key16": "4L2vk1Wd4DZQ9r6UDDkTEk48wuESJUUhVbbzPtFNmcTgY4bvspCqjmXcdXc42wUotmcLbvqyX6TPeQmY4cpCYeZ1",
  "key17": "Q6GBPWXCuK8EJErfL8nVW5NpQznWQmjzgEAkiXWxLHdLNpzXUDa7zMuJWyFsbw5fiYwKMr8E6LcNdhg24jdZBqQ",
  "key18": "4y49hrq7DedpjKb5RBswsnmXRhrRsxEbDQv8U2X43qQgz7ExAmkdBiHXGqtwcovXHuvSbjfsYHf7DVJt5RrFq7K1",
  "key19": "2PYsPhG1xnXLmk4q63H5rSfoPGDoioKfpGNhvtwcnn8ohrL1stiC2TikkRcnvme26HdbY3R2HPwr68UWMTqND6Pc",
  "key20": "92v86E9oQd2dHKqaozwrtY5HzDKgp8d8R1B3Z9qdWY2syGkz9mFrgn6mBkkEj5ShVxTaJNTH9krLV5mWnmXx44J",
  "key21": "2ox4JMoNfpHRFSjGpMoSMKPp83KGZujRyfq6CH1FyAWGR54PQDE1SMEYFcweod9r1CXBeDv9ZK172VKoMAc6PByN",
  "key22": "3Eu2iktywycN88fUPUVdMheEmGSuo3phQ8c5FMWfz97PEvgxqrwy2YViXCUeaWp4AL7H8gWqX8P2dMogJqNW4d2s",
  "key23": "5zJAnBwWg3KDv5gg7pQi2kzrtA1ztWtYBiyv7mhiK7p1NZPc4jxWdPyT8qhVeNLDPAqwHdwPt6SV3RoX5PkBC5fk",
  "key24": "4Eo1WFAgGviiofFAehmxnoctUMJswz6SyGDTBi7Asfn2ZNBP87ZVaoXMmsZx3aFWeu3p25QMk1kVogoWv6modgJ2",
  "key25": "4xPsrP9yr5nS4obPDMLxWkZ9xiGwSVwip5z2MFSYRZCyJCNX1RWHxnvvGWN9tDP1frWBXm73LgGmYi32DxHZpdH6",
  "key26": "2E7afiftzKSzYN81DEwa1dwdysgopNoxEPTz1JzkNKMmrLKBF4hjSAYFabSgaZcBe9VyPSG96TJsNUKPqpDdu9kt",
  "key27": "2WFAsFvAbC2uTXAepyqnbHWTqRgHfMV9qhtrNXQBmwSKRvgo1ph4SVgARtzT3xL7G9fuPCokMjbxERmT8vVX7WF9",
  "key28": "5HU3Tjhs9jT3p2q5ETXMDTGzPXazzW32hN5jaw62MqyLKqDtorbY43Dgn4zJb8TpqEen97AHQai3YX5hZcoL5yDu",
  "key29": "2qDnZ3XwVfaeoS18qA64LeDoVRUXZt96JC4yZGDt8q1EYDXpCTjT3knAmUt6eRyNnWbAHsrrFRBKZiRgrfbKhW6z",
  "key30": "3eS2vyFu14GUCo4bR4gtne3o2hp292Q6HBaFBKdj8zEM91QiYLD69FFS97vnmniGM77jjWjaKWuaVv9GqZsnobTv",
  "key31": "5Pq6Q31AfGRXxXH9aPhsc5MLPf4auw2RHu7fnPyAUZAe7W27yA9wHTu9ZdfGFsPkYn2DDG1kGnJsheaX2N2zS2q8"
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
