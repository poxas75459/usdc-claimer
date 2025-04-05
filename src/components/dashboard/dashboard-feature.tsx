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
    "5Jk7rZjK3Y1FAm9uugypQLooJTVimVdekpp4QeAzBM2aWPi3YbGA5Lv5Cw57sfy9DriqKaax2czmP3RPG9c6mSTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tkDwuYtXtefjPYo8Ad8s8MztMbFBVa8DjvGf6wAh6mMuR6Ge7niN2f72jn6RqnwM2RX1VabdF5DG3U1hKs558XQ",
  "key1": "W5FTPFPrBjYfJ4FiQMHqKfchc9rcJZtqULv5PrimiTKgtBYixL3vY4pay7NJQ6P9SvRbTsEbpyjvqXeC6xEx8uA",
  "key2": "wqZq3xA8ZoHKcnC4sEYp8JTqE8S2mg3DtBN7BbAerJtm7nCJKb6RH4vPgAuzmwz9G4Bu7NqTuLTHm9tysPYBrmN",
  "key3": "2FyW3rBsfGN4TXdtxaZ3W8y4ihGswSi4FqNeqMqmaqCyuCLADoU1tjkVGng7v1r8hmogXyaBuNQa4g2ERXrfUWd9",
  "key4": "4siRk9cQnr8UShqvtizuxvdiZ1hZJLY7xq4eeVdroLfnuH6SuChUvpHtD1MWR19f6QHH6YZ2KKHMk6Fv9Mc4NkMf",
  "key5": "5dgNbitS86K2nnNm1HwezHtjAAWYvpusavk7g7qbUFxtvNv9jRpJ54c4HcF9z7qh3xk28gKYSdvMjRBheVLoBvLw",
  "key6": "5kVXRYwPYMTGadxMAyyJ51CgNXeFRUdM2DsU1DSudu69nKcDwzrN9QKSn4A6VzCvURpuqugX8EoK4dZXsCuyfZvg",
  "key7": "4RmRvz7ByNBB6ZQkdGZK1KuVsQzL16kMcfqX92NjoicBZzER6P4MTZZoGkbsvuXw1v4V15Kaeykesv2fQSyEkNYL",
  "key8": "TAmqt5XNTN4BC7FH7N3wBfsThDv2uTiDXnyfuXLK3goKzVs64SHKm4TGrjBvkhWGCt4gvHqx9fUuEBMGD3Yjkff",
  "key9": "3uS1qyvZGFpxAhPp3gQL7FgXVBf9tjBTcuUHA16BZgzK2ePk5WqCe88xar99VALjdeyL5tbQwEuwofaZarZAtPH2",
  "key10": "DGQiHY8kSj8vXRtXRe1LoE2rkT7gxS7paPHFDaVYHmsTQxyYY5twSaYhYi99SaRNCvPgpHfbfZ3SsasAQRa4kyg",
  "key11": "3pUmBSAsgRbanYTdPkvANkeVCNpoKST4rC3QHD9qouZQuvdUGUE7nMsiQePmtrMSpTovkUPUJPA3TXK1PF4aMH7p",
  "key12": "2CxnkBBCV8cBuWhUgWuwChuAkcM2e3jyJu3eQAXctn2ns1u3kpVwjZyS9KKCbQbfXsoeu7YnM8t6L43CmPaGBYih",
  "key13": "3nFQXEkFZbB41VmrQKKE1BSDhsJtuJ8xa4pYxRxPw2odF1e6MUVKgD9gHrFmpRgMJkMfquaBVbAzu1pxKPziyVz7",
  "key14": "3umdwVN9EiwzPD3bWZnMJwK9DufyBJC1tavbbD9nWgbvwaPXsMHVgCnWcVbVi6tVi93YDu2dWiLnTHnAaLgXY9HZ",
  "key15": "4hMDDJPuMb7TKNQWPGKVMpWq2g6ivnZ4LW4yzVdH1P7dpbP5pyNFkzSfDxVQNmKzHtNmor4gEfEqPt5Pi8h2jxVK",
  "key16": "539ambc4BYbAHVRSAwqPzeHyYnLXUcGqYzrRTdTRcfw1WWpY91S1MJED1GqwMdoSskCigFnUeXrCw7hnavRPof6t",
  "key17": "ax5inxExCz6822ovQhLg6N8FPdjEjTKod8st8qemqgmoBzEU56AGvssjn9mqYQpzDvQEUkHf9ZLHTNeXf3Vpm7p",
  "key18": "3Q6uZ6WpiCbkgWygDiz5BgJTjJHUMch7qQbDgpTgh58CNjQb5fneqU6BpsAfPZjpyLQFcX6fXBhBEpX8rq9sUDz6",
  "key19": "2oENzDTchFfeLtM7R9rt7jLUw4WKeB6Po16XgLca1sfarWSfFbB2VZTVGJbZfSkj9pHGj99gJ8fgCUSZwv7rxC1c",
  "key20": "3PwrGMFLnEsFeb1jKhmt4MLuMZAxHYgSxZtMUR5mz8JRS4qojazyysJgVpjRQQFshPow7Ang6zkkMoLLrTftdupW",
  "key21": "2SVqaNzR5nB3QBNmGsUU1GkZkNBAqR1ShZ1dfegxGaF9byszEw7hT6aYX4bc4pza6g3Cz9U6dCC5qWuqwisSYfiJ",
  "key22": "56xSjshXji57nB3HTzEaN5yMHdSCVcLPi7ARfqUrjPXTPAwRcJsvbC2tdyHLeoXk4aTACiX1oSQbkSdsYpJcMtBz",
  "key23": "4mKxRsjhKMUWTJWfYk12zbh9C3Y1U1prSHtMaiNdBX8csgQ9J5jPmjNbrEv4cBC7YD2zrkA8n2uLuYY4ipZnzyQz",
  "key24": "3QTw5MrT37pw2tkfneYPZNJkUmwSw6MCCXu5crkjdgfG3fcEfp5pt11yrKNUQRV6F3rF7SqsAbxZmscE2neuLZSx",
  "key25": "2yryM2PBvxrDG2zyA1j6ggdkGtEh1NfrkZkFqSNkuHDVoTiDw2UVTTkQc7FCrtBAdhHzmgAbCWudPg9VRZEwgtgr",
  "key26": "5fDTQVMWqM9C9SpxUraQ4giScMiYcKZSw4veLLj3sBHr6KnzWpEi4cpAssjc9odktLj3q3ALxXDoXBKteSzhkp23",
  "key27": "4KZ31ShnyiaR8BvQzDBkQoNu5tRh2TKu3LyAUFcNzvnqPDMi7BKXbdLacSxeknQeBjuUE3xGYRmAJgaUM6pX87mw",
  "key28": "5hMQ8hbSGtB7QfuGoxxLLCurPmSmoezN4aPqEm5otLNxwmNfmF4WxrfE88dC3Sqr9tNMVnfrEXUDFLzR9Z2fD2wc",
  "key29": "5JxaZSeUGSGG3w5YGJzdZkN9JwyaNJ2jnrfWH5tLVBMP6Q9yMwQaSYgqghhP5xpiw8EwFC8JkaHrKq18RpfVxQfi",
  "key30": "2W9AAm7Rx6i4DC8o899Pt6khAfPLMDx2qAWwmrPi9xHQLqPiDH5PPUPEkNVe5QT8o6XgfDx46bStjydzdBEQriHU",
  "key31": "5K8XyZ2wEgcct9x91aWAFdgWHmAZZgY92eHLfogDmwxeGMrDEWsj5kuLgxxTUXQXKRpsciXdLPYNY4UymzJiF5zU"
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
