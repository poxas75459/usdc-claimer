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
    "3jjxQ3wnAaKNDLji7ieS1C4qX2A9s5QAJkdmgX5WvZzMycbRXEDvbWnP6YPApcVzdfbdx2Y83mBbiBBQog9bJZgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LJ7seLTHCbMqFKjjPncfE8Mgbevpg5BCfjjVGgpKNMa61Pqaru7pzV2nkXosvn14DeN5Dnz2veGHAKcmfMjJYwX",
  "key1": "cTzLNEzjz7Hgssq4b6kHGx6HrPzZjqo66vUhRJSMwAghiKsa1o2GHK5V47u4KrQd2AeEfZrQUo6QwXTphqDgLxM",
  "key2": "5vQGqm7UPRPWK4AbgmZUjN7CLiU7KDvDsNRbfUcEnruaKpf1cufNrq1FxhYFDsCWbtnRJCj8iQtuY4R7uE9qcfVS",
  "key3": "3Vkbv3hgK5gi1HaYJXUtppBgp8KYenVgJKSZcnvSGiAsBseLUCj62S9dbHLqaJLfs6VGmYkaPVpWf41KXFDwfN7G",
  "key4": "3jHmKLeDN21VV9hago6rUmd8zX8iT6mvagcLiqguGjQ8AzVtgTyD4MXbRnsVN7JYyRh8o3JLukU62CpaK8gjwzpH",
  "key5": "42Mu4AHFkERbi7vaQWezuLGKvGxytLqqqRamWVABZt9t9k88a6CkrNDUYnrcMXx3d42vWWHt5UMLbD4f1X96CFxA",
  "key6": "4EK423vbj4Vr8TwtLYixQMcHSuV8yYvSJv3VNbPdqtHYu9M1qQvo5Cy5jQ9fTattVvzEL2Xibgo3pSANMdRuJeDD",
  "key7": "3MGeLZftfwKqyQJ6MARMknUh1osLTsRrpzvHQ2pTFSzziKiKtsMsCJGBZLazKs8RbHW7Dq8JL2qj7tfZXf69ifEx",
  "key8": "4jVhDt7jRfN8q3cGi9ZKxv68aTDoGv8Wvw9FGUhDDghWhm7ca3ktGvK3jJy5hLwK2x3Zw8bLcTrDfFZVh3yNYGxp",
  "key9": "3zr74UQf5RawFMCVy1UG9Ha2dvFzaRnxk9xs9SCNUg5EfYGXAi29o9AGEi6fCHsKd1yzJahE3XePWQ2FEXL1mnrc",
  "key10": "FjyvZ4k6dtG1VcGp9oqZnuwp6MAx1AjRN5ceH5EU6V97zsLJGwyGWgogDCwKFEteBhwGkYi7nxKgMkEC3VEcuaZ",
  "key11": "4VjkqXDWDSmxttPV6tJVgScAS6YkzN13hepLEUvp7rCFt9zmHw8PmnVZwmJuEYD6CfLhDQrybVknkFJjREwp7qTv",
  "key12": "2MtCuyhWospW5BpWF796sWDJrKkzFd6UhfNQchttzMgyMX2T9BZXrCQ7TzqaC4B2qsRFxAEcgdAAYF5Yt1qVvipu",
  "key13": "2rvptQFixSqSSmQeDTeYfEypUfMQA6y68tR3Le8Qbh1XGDYsAmxARmnphth8nac1JJmuzwRLqJDA2HVPUfg6Xtc8",
  "key14": "5ekeuKvhfA5yDLgrzz2KKq6Q4nBtAZwpXsciqbdAMLA4t2yNRi8RpMYSdzeTBM2JdqmshsXjgtb63dNdGpQT1EtJ",
  "key15": "41SuFDwfcw6bEup4HpwsMJksTJYEwDTQtQEYbtPxwCLRC7LvD9S39BeRV2v2u6g7Xb2tFfySbWDJ6cJCg7fs2h9V",
  "key16": "WFPHLYaKcw8ugfF78BZU5zKH5JM36ZkG5T4u6T5DXFy7FH4cfmLJFqd7czyMLnnP5cenqSyByiNztvh3aHSMnry",
  "key17": "5PSQaEiPXN4ss7jFYYfBGXARehpYj4GZpQzwDR1EmX5XW8fk7nb93sW4bpan8YTHpPuq2PgurYz3vNoh92F7V2eF",
  "key18": "ugftbMx7r9qXrS39FH8MSd3UtBtJPFw81z7ZTWUwMJDf8QtoCSLpC2BasGP3PJBAZ3kJZyUksSbNrPnVJdCVvoo",
  "key19": "4xLcFpGptTfDoufebZHhAC7Xxhtk5kkD57cfR88PepdNcKAfP8rfEus1AbYNww3NLWbNZSY84eyQyfV6aTRfXhfU",
  "key20": "5vAuYAGsrzCSRatMZtyEMswmi5gAs9fV314ExznhWCiJPU5zpJBgZsTc1wP12sRWmbPwBCgVm3oBbjZLGhWjBAQQ",
  "key21": "5yNaiNHsiDUX8LJmLmQDTFdBHwiTANETfF9Uv1A13mXPs4xEnsRGGLu1tXt8AJPXfn4eSZ1f3eTASXJvkT2kN6kw",
  "key22": "2iWnymdmhLUMRckcUJESwCuosJX6Lf73YXcfyBSc78yE71JhevfbV6eMXwvNmqDdLkHnqdqwzgHP3CgFEVGmeSSJ",
  "key23": "2Hj7JDquYBrJENZs9yPnauNXK3hhdYFAuAT9Uer5fUyShoZUHXmNtoFNHipadayb5LYMpzCi8y7Q4eSciwFyhgph",
  "key24": "19J1936VLAAXyfiszf5kziFmyvpoqDDgRxkEpavjRmDD2V5XpXX82zSCstLsxHwsw5rvD6hMxMVyDtRbqJVktQF",
  "key25": "4Aoodi9t7RgARNntaEddWABLZptNENRHfo2ZEbxUrQC9vVDQinxWuen5jbjju6JrwBxM7xCAgQXdAekUL3MgK36u",
  "key26": "3sULEuMjvFB3JbA6TB8VR5qsMJLJSSD8pZp9B2dk5HVsr1dtahpQ6q3riBcmEKMi5KHCkGS8ymWs8cad7cjAgZJP",
  "key27": "xhad1bt3nVhvTQqSKARvShZpTQcDadwTqkLGu9TwPRAwmVKBLfTJhpahn6K8BnvHAqX3vFEvRDV7v2JQUPquWZy",
  "key28": "2NKYMJXtCDxx7kvviHsPus9k8zGWqhmox1C3ski4UC6DwciV7rtfbJvL1NPggfiEXx4YJRD9uVf3LadXt2jBYtqD",
  "key29": "3C78MhTQMKtBnNkrUp7NZkKfZppacmcrbta6LAe4YGMVXGaeXaCy3VaFceuhKyRocGqeyD8snbS5dLuvyukazibx",
  "key30": "35AVWVmRaAmAeiWGEPLx7ZKzitR7WqDuLVweCw7GUkjK6QBdynKpcRYqc39Ts1b1KeQfkvdHypVhQUMFB56NEdNb",
  "key31": "3TwXDi67PQV3qgTAo8DTuRzRfUVmCmhM8SqLDkjtkRMoFFRRR5UEYmJDfRGh4qiWYK5Hj3uHkSeW5ZCx5fHQxxM4",
  "key32": "2RdiUTvhdanLa31MaYXfyzGAQGybe6Jan39Qt2xn6EkqqqdLhREH3MYUsU1e257BL8pPtcpL3GZ2HiYKVaZYbt7s",
  "key33": "2Wrakg4J5qDF9YiaVbfkTyaw3CD2q3jP3rrDpBepMWeRgE4DyFsyRmLz65fasVAPvUPew8rrHjm8wTbaYxPURwko",
  "key34": "2bC8RugXodn1SJPpN9KkKvq4Eeryg468HiuqtRwKMVFQVRoXuDPA6uP5x67XssdXXZW9MvFMGzhndc25YHpV9nux"
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
