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
    "28ziBMx8ZAmrrVsZG26Zh2qvNZxhuMgknYkVn4jD5nbeXLST8q8dSEZXm9SawvSS2HEpnLhWyemPyY1jfVnYgjiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UaLhFGqFd4aaBipdJmG7hHtSwRCheMYzKf4cTzek3GX6rY7rQ7754RkEGefa4o2iJr3ddoF9nyyvE34JL628ReE",
  "key1": "3xdHueYP2eDAn3GBf6bYomdNRuLwAL4TRL2eHQY4oKDHJ253G7BJsoKSSL8yPQhPayQwbZaVMGj6u6KBukHEwrGM",
  "key2": "4Awa32M3jsvySakZSwLXNazbnJFcnZep6pJAwAngveUPD8Deda7fcXKQKEXedjq1dZzoM2UTAWX62hdPFF8wpWh9",
  "key3": "39BqTNBuB6QaBapS4BAraWqXxUcMt89LCiGvtybNboHYa7cJaE6BrEXbK1kvfMSPKxgm1sC3VpFJmmHGbPs4t14U",
  "key4": "2EJDNK2UYQ3au8AZovkt7jpXWWc4AcqGkoGsfBL1dNYpDrZ9VKSp64J676szx48N3B6G265UHJfYq2kcrykZeMna",
  "key5": "4uRwF49nKLk1kvGkckUfiVS783XEuPzA7hYeK6KSP2q7xvB3jqMMYBVjJp6YkZVzvfjKryZYdBWs6frak5vUYSBT",
  "key6": "VKBf4hH8o1ojLbRLEGUX8yR6E5pL6sNcZaYrahfLUCoa6WF8ASxnxkfzaqZxAoR7hn4U9ne99rBqVKf7qEo8S1J",
  "key7": "2dttNfNJb1aqs78aKPgXBN6pe9RG7hpBKCPgZ2n2J7kc4V8NXy8V9x9ugAviUeRAu6MdDXzDE38UufKS4wqpz5b8",
  "key8": "uo1dYWWFwBfhFo1Wo82LUVpE75sdRyaPPqCpQ5zZPS3tCo28izi7zJqpZLy6MxEfUsTqWqACQFDe3u1m8ahKYtY",
  "key9": "3x4AHKcutkJc6ynUE7qRLvcoYcDd463RrEBxawfpUaonQ7A3iyVLLRgfrKVbxDQJChkf4hoPo9AHtYe6PpawMcT2",
  "key10": "4UoFzfYc2muY6oVF7Ufr74Y4kPhNvBmvPBYoiZ6GysCYQ6z8qMQBgoZfsqNk9hE66ajxNf6ucozquhYDe9mi2Feo",
  "key11": "3pLDq7G1fnYLxVmZy6NZpEyX6Bddr6hvwSgjGhpFahpxmMRgRW5x1Ugm6mqkWRZVw4H1xwLBi1LhLBrKC8WUhf3q",
  "key12": "5auokW96eUy1LjxhHUMtd5j248BEuFQ5FNm3Pm8TNXTBvBU3NWTJyGJP1rpiMR1C9ipLpcQJEsQx61GoN8nfrNiu",
  "key13": "2NRUt63DPnXA8Kc7bJCCDLorgcopmXyCN3RoMFSh7yMYEpS51CdxnRKrRJzbe92sj2peMn4CBTM8dHMUbgG1bwFX",
  "key14": "4DEfptC9275UTcjxq6mzb5TZFaDWqgZKnwgg6kiYg7gmWQ9DdW1JhyS3JbiEJnUMmtuGpuGSe7qLXPpCjy387b1d",
  "key15": "66hm8PRacRAA38BsJqV3XkGxnKQJfaHdT5HdfXz5hhmezQiZc5GiXXJANbBKCcuXRBKpoGdE6ASzuJtnU58U3kGo",
  "key16": "38tqje3XMwDvM9jPE3F8GfpaQiCMnwE1nKRw7JEUQS6AyunU1BUUDEDN9MNXEeGwpkYPBhsQTtyTtRkKUA9T2bD1",
  "key17": "4xaRMhth4buZqtjCGcvKXbYeyuG6KSCgG1BbsgKBDRPmGJQmHz8b85Suo962yrRWYZgJX8ydNuTrjDvBs2ZaocfS",
  "key18": "49DdczGSAk7JdwxGcUKL1QwQv7kfQBeU1ncjuEuMr9MPnyZNizU8WGfU6yjsSGSTCkBWftHLDcTorFD1ytN3d1ee",
  "key19": "5DFhg491TgkZqB34a59pJ54oLqBByjUfrj9zEHwWcVFnmCsDRs7G3GST6DxC3EedJrhcbsJf461E9SzpjYxBQSYv",
  "key20": "3m5674HbRtzKtWkW5wedPxiC82uK2YNqNQkxtVRL42YpPhutHorF9gkkFZjJBPJcPswdG9TWvKXKHzvAeBWNfY74",
  "key21": "4sTC26f7t72QwdJDKDqSjHJoEr6DcLU6x591aWEvjsGsZHXDHig2N8CSg77tzvUzCwi4XG2nFChvCBU6iFDjrNmM",
  "key22": "4JXjs6KiwzVw2tDaTjynJUm5vioRFaHBb4QMdsJ6HLC4TyroGqgpw6nvvEr77uUh9izUUt4MzYFwiWrxmtxgbyby",
  "key23": "5UR8MNL8TYQ84zTiGUC7MY6a6s28eeLETeBNkkFSfqodTvQFQMJreHm9EPxZjUaPuxjhjaaVtN4D4JJ3xNbihLpC",
  "key24": "61BNebYGXXAUBKfSsVNgtcJz7CakZRE2tBAhtLLHt1vr1P35m6fGTT7PFactHv5YVc1xPnbBgAoEfyEvY5A3ocLB"
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
