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
    "AyBg9QQa99EuRVv3W4eifug359gbedLWgux8pkUMAHgkc9wWjKU6TSBAuwNAnwb1EfHVhB2BcCQfpAtXeeghBoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "484s8CKQGRm93TXREX4DueLFdDbC4UpxXwkPFQ9JsXMsGFa7Gj96tfPqZQ9Gsj9NF46NXsBXSioD8PQEuaQghSbd",
  "key1": "44LPBPLBZNskTUHrAA9pJxENahZwisWFgumnVfDTSNPNCPKxnuigYRVwyVuCxy3KEb9suRDTf6QZ9ybJ4ERMSH9G",
  "key2": "4GwBLpm7DD7tdw2Gi9hV3xfK3pnJs5aV74piXSHrznxAnz9qbGBzaJDpfTfSQcwDS5RqE3mAJPnYMWDaoCRdLWRL",
  "key3": "4U7svr9P7TNSpxychK3xH4WhVTidQgzqxmoU8Qm9JSnEnsr9vY6tZtSaxJxhYQ4zqVjUYzEgRVm9GcQwYdnu7HJj",
  "key4": "2hpPTGP9Q5Fsqdiwb7fLw8t99SDRRpJRjMZ65Rk3dPnSyoZXaRdzpNFRgGogyqRfaqtTnsZL8WT6K6fuAyEhD9Fj",
  "key5": "3thZrNFQ2JpzwgdJdyEs9uisEau2LsQFyWQwT8whCiKyaJAC1oMhobjX2tDfctmj3varZtykpSbeibYZj5R4aXzj",
  "key6": "4STmh6dZB4Ga2ieDCyehUSTxFh78tHK7czwgsPyTYD2rk8cP4kFnY4B5sai91uhrkqkK6fY2JtSCZXWucseX7z43",
  "key7": "5bdKw5CywE9rWDLjE3n8fYJK5SA61yxUgwqsi2MXqKTESQNy5Pk1ZQhx62wmZJEAbCh7p8joDacj8GFbSNtcrAPc",
  "key8": "4ttgYr6qVy7bWyB9HB1UNMSEZ4XSCFTqeuSqw69eBMRKX3JrnU3oHD9eohnEoKQBVcqMM31D2YXhs8Cv7QiW2giw",
  "key9": "sLrHaAGwqT21rYqMEzqmZB43fDbzuG7LhbowGZEoj7WQhNDSfs9ApD1VKZe9LPWw5WeMTUaUBNbLcVizWZUv6jB",
  "key10": "4Nj1DXmsoUhnKkHN7bKVEMWX8tDEZZGswb8Bxo9Q7oYbwyChgRtm2PfPoXiSSRr7XRXCNQaDuc7n7rW1DhQws2Jp",
  "key11": "Se5Jt6yTf5BXZfcsohnL8epFCqAXsVrASGe1FWBBpRoJ5znpiWVQwbvSG1hBrxw2vFVdrutqXsX5wv8AY3QJmnf",
  "key12": "3YAdNJQwxE6DWAaowZmGC5xN9J6NyEjsncAcGhJcMyC6YdnBWANgm3yTnppP3qmmAUqLFNGGJYcQuu7ovFgfXpqo",
  "key13": "4D5ALZazMBBTBbxcWY9TPGTBMxSiZijWfgRvGU6yYn8upq6c43MW8peTv7DcAQQ7mgKaRdCrsRWAcCS7q7UsDaqu",
  "key14": "4UzCGwPKJEzV8AnSSeJor3JNfosqVQvspfpB2adDP5v9DoxiXJoLm9Rz6RjrhPtijpQGuRRcQSdiicVR4s8rMRDy",
  "key15": "5Qg7F7QqhUknMecpaXEPeBHhWg9FZU18g98JveFmznsNbuqnfQf8CkP21uDThJQax3veodgP1J9TmtDXE2qgRZqV",
  "key16": "4tUs22MHaQmMrotDHB4igPwzv7GWM7WwPtA4uzcv9Uy6ZpYMjEGhK1qMme7nKqB6tPtrbgNCRUmEmeWHCZVvZHZN",
  "key17": "2Yk7FHEz2Bpi4fH8HemuSTUKtFHFNZMiAm8k7kMdJXHQVjG9knEBFLL2GLUjnjBjoFsP2FzuHLRekqNjnvFRPYFQ",
  "key18": "2CBPTzP6WF3PwpmK6aUXY81BJ1Y716rxFnis7dKXtiDsV9z4Wai5VBoQ1sPqgcH9TtUemhxNd3NwBCpu44zS6Fi",
  "key19": "4J3LGorYeMH5tAzUzQqhyNQb7TESJE3vN8cqA1k6j4ivdZwpcT1igYSQ2Q2hHtpFbXZPSP1ANrbggDmz2Mji6bc1",
  "key20": "3cgPMZffqpuUrmtjpZtdn77rNXcVuGJLpXZSdK7WzKb462N93U1tzHV8Q3oG4gLDWdc6KDWagmqPxYuqDYUiowJ8",
  "key21": "4J7AuC6UxmLA7XLT5G7tS2ozTrrEuXkTvgGJwteEDWWEuLJ2ae3hbBo5QmGgMoxJiuMvbby5FpYMrjvrUkNz1vEx",
  "key22": "3pbrxvsncqX7RHJktypcYhC8ysDs3xR23VF7qjDSq1KdxS9E6cmfF9nPqmaT3pum23paAbq1AZojwUdTqFFAhua7",
  "key23": "5HrCkNpaNmRo1cXh9aSth115bW5GLu4se3fupgJxxD8YPwDdj6NMAxBPvAYcD7wzCDzA5bfREKQPbVxh6kt1XzpT",
  "key24": "36cexdV1PzVuEhVz9zyYRnwaXxGfdVmTq3VwicCTvNTzC8QZDx9S1JW1tc3urXVt9bsZK33jrZeq8nzBnpryXvS3",
  "key25": "E7cmQp7yernK2K14LFVZh9Wuw46UkmjXrBe8BKGs77wCSjeAVfHVAU895PKN655pQb1cbb9KZQL9y4sTmVDEvBa",
  "key26": "3pJ4dZGNCRahhHa4Jmu5g8exoJHeeVqnkYT4SMVDH23UX1LEFoMVQGp8AFsEnSxybmfn1fmQm44t8z251S1jemaB",
  "key27": "53xHh6w6RLfZcW8fCbtinvJXob6fFrhuqf9yKrNq6gjeWpQ2FVwiaR8TgCUcxedUrYJrSKJiVf9exBcVKkXPssoh",
  "key28": "4FPWfgVNm2WsMAxEQMj8e24pPuiz5ba62Vx436CoWFZbto1HT7SZo23CDm9zCYhNE1WWXzLmBAkwhjmazask6UiU",
  "key29": "66gMbiXUY8isdN5gkAkY2JVtAY11Nkeb7onBXHsKoM1pg9KoriEfGdzeACaXUzaasYLJuoww8JG7bJiNjcUs4qDd",
  "key30": "42A7SCzhBPTbeyVVAjwLJH4wG8GnEto1Svyf3gU4bCyPnZFZHakeHZPGjsoPs4SZ5HrrmGB4fZztmadjE8SrBojp",
  "key31": "4ns3LF2QYeo7Z3HTqWpfamw4q1QikwqkAFSmZu8Rzm15xpfyHWCiS4BVB9NUSu7dFFzkxfX5bZaxZAZ4BD4SzU38",
  "key32": "2Uh4bqMAS6HLRsxptYb1BdvrBV6EfPY1Ec5AoK1t5E1kopScsS6KJ9r1wtsJdQ6TvuVppxPp38918BscxUHAAr8V",
  "key33": "2drrbBPDzWzjYFpaHaHrxd4quzkbCUbPqYDZ2t6abFVVjdi3CJaJQXurfEXmL22Ge1iqbnLTPr3v8Ptgu3SLWiWg",
  "key34": "3WhwMbeYkQtZeYijhpQuYcKYNEjYT68rEacp7NGUtQisFyTUt19J8PycEDSLj3R2jAbtCNR8oHyFAwJRv5QWSCdq",
  "key35": "NRpYg8vmiJ9VCa23fjfeL2ogdCpRm1R8kwxm3tit6CJkZUWETC2z97RiwSGRtKWkUhcKRYcjPdwUHL6E5ZMXdXJ",
  "key36": "2RMWbGVfL46dSk3CwLVAT6JNNHCdB3WCJQzhPaMkrxpQQFzzQp6rsp3yE38bSFJ6FBkUPYQhUABez55dXTABTFtr"
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
