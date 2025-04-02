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
    "39JL5ZBXQzDkH63hxMMpB7zCqdmqD3XNy7eTu4WfYiYNC4AFAsTTNUYD5NLkK7KB2EFmo1E1KfCKUiLeNACWrdZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42CorEkHwcCNz2haVBdn7ULagrUUiCdPAw9qTwRfVmcvF3rX4iUakvggouvKKie27Q11o3fA6gyR4cWAa8QahTD5",
  "key1": "61es1hyUEjC9EoMazjJsDpCkME6bkw3S7krL4ZVfDdsffbLhUnPakZDzibxS6jJnn5XwF4rECH81EXRdTvNNJueX",
  "key2": "3omg94Jc8JkVqV2g6pBw4Ea2wBNDvACxiUUbuz7Svcva6ZS9btvZquiJCNqFQ9nboZetZ9Yhs1D2N6Nqf6i4hL5X",
  "key3": "61ekQFFNvz9H7JxuEoSMf4GteckZh5dvnA32hSgyaxTkX8WmCBBXzdjDZYfsbrr8ieB3VtNeekeZnMwjjFC6dHsy",
  "key4": "sEEnTxyGmUzzLebweAn4vFhTj6nciMFKAHpuysVihyJXPQzYQea5jVwA21yeeaD43pvFEneznY1CiEjqivbUxzQ",
  "key5": "21vavUBPBVcpLyYp6Xzuursxp622ZcgdCWmMeGunA65bZsDVuSKppKUtL884TJVpJ7NQyagzmmdp1mRqUWKKXPiR",
  "key6": "5c2hkGSMeYoxUMKuGrYKuvikzNWzakDzTd2Zbh6uTkqgwj7rMPqQVFwaQhGpiqQz2PYY4kmn6X1H2qVyeiBY9jyp",
  "key7": "2G9JqYVihvP6fCXNG1ZcF5DPdYiYu2EPP6rhTtnsPv3BEoLMEni6qbbCJtgbJip6aRrTbFcPJaVhprUgmkSXeEQJ",
  "key8": "5oZVzLwmQyEgZB57H8KBK3uRF8rvqNSz482SmX4n8PvEJQPEQqKaVhQvA64hJNHXzyQDeZBsD9yN46vpWrf6jtC6",
  "key9": "45Ek8ct4aXwFvnjo2gYzZEP1jAj5bKUpKyyRybfcLNyiQ4iRR4jnV4yVXyvvSg99Uew2b3FFx2gkw8RNqGxu77iJ",
  "key10": "mTeCgLbov2jKnNBZ8csBXWALe1r4RK35TP7dmk7YPXyWbU1RmydziDWia2umdEGYaK5WuCDZsxkYmVLfZ3aqRDf",
  "key11": "2f4VSebqt6Nohb3yBLrXMecMn7dnSDZytSRehnWTRQ8zpew8hW7YmUQ9KX9nZ6MA2T2cViSDq8CxaA3Fxt51gjRo",
  "key12": "7jx4PKquqQ7d5xmiiz3po4b6uvfv7cjddbMFmP63J9zEM6dhwD9X9jJBfMDekxxM6L2BWEweS7tEUYnxqgUMcqi",
  "key13": "42uFqpEeSavXwzfGSLNQ7UxgjAq4yHPJn7iKP45SvUPeMssZrPMjC3izuw9nekkEEdeoqKxDjYP5mQ6VMBFmMsAc",
  "key14": "uvWCek6oaGW1QFY6xaZR9iR3mB9S7wEJGWPLShgWwYoYzSKRXvpN6jmFbewBoBdUdPZ68KSAYJbKhVpGwm5NnfH",
  "key15": "8XgUG69Pzcw2hpdd3fSRzzSGqptsehmpVXCNGgmCMPRqzNbQAqAZEvVBfPPrwzSnk7nfKGrwFnHXLkw7xoXh3t9",
  "key16": "3KkLPe5CZbozb2jiZzmqCGpWqULp5puL5JwCnHJDzdADRRr7FaMGFRxFGyf6QY1Ff1DAyB4tSdfFfHBw3hDZTqgU",
  "key17": "43DxmVZu41dFD3X9fkiSp1CmcACx2AwyXKXvE8T7DkucN2KvVF25Mv4u1QsPwURZVNAYLGkEhpdzGMr8ZMXCmsq3",
  "key18": "4jmB2nDM1HogtiBVq9cbwD4YVMrA4CTkcYmbea4LjdBXTTL2wdKQjNRoLni2Fxg9zfNptDWutcxXTFthAwh23vj9",
  "key19": "2TBsV1r4amitFrEmcW3HXQ5mgSQx9aDL5zxnwnrAwTpUb1BCBX7GjpMKZ9cS91npi5m8Tuzz1RUSG7QEogoWTpCZ",
  "key20": "2ZAnSuwnFKyV5TJxP3GEigrSi9QmRJSN6Z1DWnHPXxKruh2QgkNqWJLz6EHtGkiCMjKh6yZEWYuuvYB9ZdGUFkjL",
  "key21": "4j6aXkNHPCmrzwNq5z8xkgFEgv7pAAJcRQqXnjNm8M8VADUv65uspQ2LxJLQqXxSbZ1mBzPMRiEMSmuXqEDuVUUL",
  "key22": "3RjWrBA9UqLctcftwYiWk9PEonkcUT84aMf31bVt94D7eoykbqmdiEGT2oUBBQhHPg1e9ztvcfWF3pQUkCziyQUU",
  "key23": "5XytonQQRhp8hbZ3es95JraHrQK3X4jFMZ4GFvfz43c79BrkM5VsXKATXTBLAisUmsKkmVUbouzKhSPdtHJZ6sdv",
  "key24": "4rS7agUbzBzKZ1DshEFPMXC1R7jLg8pGu8XsNhMvYPHK2DVmTJYAawJkEUMa6ets5Kh5L4r44f5QWbbkBHEbWEXK",
  "key25": "49sB8o4szCQzeBRRZQsnP75kLESmPHwYVyLyYR1CE8BffRZjvZCfanqVALvpMXfyGvKLnjJ8ovA5AF6LXaexAx4g",
  "key26": "4QUxEXc89f66cYKNz5j62WNjXxpRLmHYjpb4GTCeBpzCRcBsB8pskhkjTB7e7c4aQ2WwUFf1tLtdiLeGy49SGswR",
  "key27": "44wFmuhHMmkHNdfHvHy2biTNtWdFpAHQpLmL5gdrBwid7w4RvoFkmid5KPgZkSexrwh4iD54j58QkwqHN2T2D2P5",
  "key28": "3SwnBq1mnvEt3AyPhovEwYD6y6MBFA1RuCKaLC1s2h2jbbe1PxbLg1Xx4h3RsizV9uRfQvFBic1Tcr19FusZAnpk",
  "key29": "dvny9CeiS4HXbyzzTrmgFdS2RqE4LuoAFyJoHYeWZvuGw7NvVP5HjysH4LcUqBPBQVcyzUAeaUd9suQMG9ywu1c",
  "key30": "FKBzqBnymQhScuXmrNBifefhrh5hWRdmkGZMWZHMPn2HTLsbwt7avxBe4JEhNjouHrf42tJGJPTqkkh2eZkSvXw",
  "key31": "3aiivJfkZTZpwNStT6cyJ8tkNr2Eswh5qqM8uHSTiAv5CWkj83dhoVN1zjVrLV5FsKhfTZiGYMZwzL9PMHuS65dR",
  "key32": "59KGGiyfNFp9GvmKV6V1oFYRQ73R2bL5tSmvvg6N1Vu4rsaeqKUC2yEQiarZ5i5CRURovQj3GX94WT9zAy34WU9r",
  "key33": "SmhMkgxnRJgq3q5my8eCGPN6Hom4UJMyGobR4X7rHRc9jZBaSBLNDxi7EXhg8tzx5EsyDpyYMZ5FXVyjLhyz81U",
  "key34": "2qT1PGFh72B3693YUUjaAbMsJCnUeiDEu1opoRaPSeSYpN34yuEDADWYyfyHr3aiC1hA61HVhJ6FPv8qV11k4vdh",
  "key35": "2UWdhjvqj39SRJXCpJYwonhrZVuUYCqmRKNdZGKU2j6FytCJGBBs1HofYQ7wqFv5QCCAjAeMquC3T5GjreG9Sxr1",
  "key36": "E1yAuAq74bP3SMtDSAgRKjGQecoVyjtAQwF4RZKihNp7nzAGRpJEDwyKePbQbgXnca5YZndNEzLWt16dq4DjBWU",
  "key37": "32S8MufumLCnJTkYu1LmcYe5CumugkN8MtXzhQL3p4xxRrD6XtiRo23rkyF8VhpfwJHNhvWA1waognsN3fsQugJa",
  "key38": "T3y6GV869tTbeivZuSD8pRZU85pQys7tBSqMbtybH6WUehEHghdcmS8KZUAXGG2msYfnvXXMAqtp6Y51ufDcWns",
  "key39": "3LtCfvtpf5WsBpoM5PrtA14QEPsWZtUHRMLgityj2NQcafSYf44EZcr5wxz79NhQAHDaXNLw1PzpNtAnDa4iPK5i",
  "key40": "2jzmbDzYy9uALR3t6rktmg1ZfKF3a451yaCUSN58RoewRx1WYHe1tWJJvfuncfT4D19siE6Nv381ytKyLqhdiaof",
  "key41": "5urBvEkHBFhmUvacd1QRV9YsM5FRP2u7CbcztnUNW1y8ojmXLLjMzTx1hVFynPb3intfk31W4eJQjMShJVkLRJNE",
  "key42": "5uPTdoRTCGJxEUNYYPZ8EDd3qbMCVbBEtEgHxBVGa2R1xmp8U6QmB4ncMrxeq9rXtCZgzcatRSQ4evmBt1k8Gzon"
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
