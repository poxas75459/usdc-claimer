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
    "5FeM4qPcA25iAUPTsMuA31pCQBmYQGp3J6BQjPVyqEVjymyf9XvAAY2W2FEfro8RVGSBR6W75MHPioTb5dcpB6de"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iEZWDQ26FpgpNp4AEx9xUyu3pqm586FgPN5ucizyauknxpWGbgUGHm12YdVJ7k12XQQCKJWvPERBu1g18V6Nudy",
  "key1": "kKfAL2obGgikGyF9KmHmbN1jCS7H8MfEDJxi5swopqRL2S1HUTYNMaADVpsLWJDt8DicYxSZF2jXEfGqTAa7uZi",
  "key2": "5G2jCU4TYjHN1UiKMKnD8JEkjtBxJXeebv3JGptgSKC9cPvY7x6t5VfWxGWgVvKBBxLDRX5nAyFwXwe7W9Aw1SoY",
  "key3": "5hfmAfngq8v8RW53LBm75sCB32r1WLvWbCMTDv6pneoJnrBeT9NGGitiF48Jx1pQ4MJfsXsuXSLujFnzT8A45UPM",
  "key4": "z4m3CEZbiTmjPxVgzFzSJTU9QH4Vp59vCSxJMdVzJMo1kSFtQ5gVWMv4G7D58MYHCynXVUuv3NJJZetwJwhTvFj",
  "key5": "3JS46YaUvvaCqqM9e7UoYZWvu8KNV9qqrP83TZgYeUcr6aKWRPNuJ2QTmEPcVDwGVNxDDrfQxWxHZd3UvJokHqGC",
  "key6": "3kFBE2tqebKdCPrtoPGF3i18Y3oEavhpQu3XuhqnaY3B6jWFTLAQZsF4yxj9dx1tbRcTM4TdoSXe4BSc7zoKqNL8",
  "key7": "5MHmvFJ2RJr6N8heRM13cnbDQDPBwootHzjDFJ8JF2VdrLN61fqLqoEhfpXgprSWketuCN2kW4g5Z5kBZSMpZTax",
  "key8": "5kPNYFowQqYRRpwTqPCWiTSotciQ7JPcfHWET5ws7FCjGTT8MZHn8qaC5UJ6uiENZPStxnrS6hu6nwrpNTFrFA7b",
  "key9": "6ggzC25XU5eZLfAcGoiSQmg7KqqmTkwi1CcXahShf5b1udyHpATH9oMNSnYna2Tkm7w8mXHZXcZQBu2NsBzJrwx",
  "key10": "41XvHu22mJcho6ucKpAHpxwnn7Ag6Pu7MsNNuwxnHk5DwRqKN6CYesLFffGxNn2y6VUraGd2GFSEomBtw1uS7yqH",
  "key11": "CxYGM3Msimp3k6UvrqUG3J3kruuKqrEAbgxyuhQiZSnnziouAHn98wkKS1durNddH7JfiZFT7VznboVFCdpBKQS",
  "key12": "85TVikfTdnusArPQPCFFnTHL95oVtMvUSWMqMnvjyN617CanrowTqLLXgNy8h2wC6Ce6V8vu77rfBvmHNVzCQ78",
  "key13": "2G4DZ8GBfGU8JpzbtTYCp82PVf1DobANoA3siEpxMkQi2ZmdcGFNVwFNsUH1tH5tp1PZ1dRxv58HRcGRi9j39MVs",
  "key14": "3Tp5EVEwGPW4RRqYLKg4GP4SvrVLBeVhHgyMcpTqrecXEZvbywae66PB9wfLWo6dTitmzPpLD5E5DhuKrXn6WwoW",
  "key15": "56STSy4YjSLsJ1CzCEwBsJ2XsXZbyWqhbxJk1jCPHUHQN2HBppVSj7VLuEWSZYdJkNVwbEwf9jqWK2UcLZW4iZm5",
  "key16": "ZoeAGxEkPTBizn8mfaFRPEufsrwP1wU9AauGgkzXab2p9VGETLL3EHpCsUmqeJhY1BDpaiw6cZ3wVuvCDPUh6a4",
  "key17": "KREBuXjGXHkSyYGg23N3AStHmxjXiAXw56nAr1KFExLKZfnQBGZiGqGaUkBctRF82QWDJ5GmUqhjUjuH9Hy8MZF",
  "key18": "4ft3N5D86g9LochpYHjtMJsqemdCeYu3LCX44mpj9AdDUnmajdMynoZbYaS7fY5QV3UQn8JwmvvY3ZEXdWDiYSat",
  "key19": "o6i9VDum4iSZGNfstmTeFGnvvSRgt9R7j3bUPEoSsYFhP8z3Dmt5hvgbx5wdMLD5CNuaD22Jdj3xQXJ1Eb3j42e",
  "key20": "3emKvQQd4LwA12yPkV58jSWaikUtH1z3FeLdEKA2P39JfqzTG1yGFSGAwgw95uetmNnounsL2LngJ8bbVTcGyXfD",
  "key21": "3SZGJ5oX79WnthEbWskyQreUuoAp57YFTbnNt3GfrmA3HkzwW13cBwJyPHWAdnsbYEu8p4Jd9iJk7xoQdqZELg6y",
  "key22": "5LbjUsJ3CAUE7JPtCE6qeuwsDrNEtpchowCtQuxqGpZdNWZ3rsucZmSf2CBAprfGyyBNCU5za6mKZX5wqa6F9Wke",
  "key23": "4h7SqsyKvDEAwq3zvYjMtGvuxymfYNB33WGUZeMCKtGFno1gC9NtBKCJJS26wcFYxHzgMacSDPaRaTSAqwTas8qa",
  "key24": "vrgs64v6JdRRcvu1fh6zRcjKLxw4U7vDjPJ6mDuuDrpmmoDBtrXPRxhANXfYYeKzVB4SDMP4kwHpTdovZUhQSiQ",
  "key25": "U3JDDJkxLJdJezdCbonBjE3GBVcyzSonXf34e3YRYnwEHR3C53se2W8UuVVPTTZhFSCga9dxzcHV1AfKRmPkqxy",
  "key26": "c5EfnqxaLDbHEd7q6C2StqiHvSyNLfoFrmrkJFvyEgETCSmkJ47enWQc2EGUNfRKgCuorSowaBLVoPsAK3y3vFZ",
  "key27": "5fLC3t7wwiDGsrU87Q7Azo5jm3dhvX2o8AvSqWevhJZZZvsiE4YKXmPy83Nw5VR3cp3s6xBXyXx1mq1FwFJoVdJj",
  "key28": "5zf9bzA5wYd4eq199f9YXZr1RiC4pmP8zRYs3DiXDrKfLNdG2PvB6PQXSMiy5DDDAb5qqBuZ64iiM2afBc45Swme",
  "key29": "5pmxL2PT9kqn9uFDiANS3VpUQ2HicvYUhwMT6oWJmv6PHoj21ukerriJ7Mkxs9kss2TcQ5kZ9VQahUS1dTZ1TkDc",
  "key30": "vWBjXigdedMkt8fJxDMkQhYp5JXc5z3fPsS22zK73pcNNL6HQNryTgq1dREnAoKJ8zXTbm8zNShfzKdRf7qtpSt",
  "key31": "4z9zFfUC3xftU7NZqkc8osz6YgEg8z57Sv5fvQHzHyCTC1RrJQGJYzgCkNCVR79LpognNucvHDCx6gfK8ZpEyoFT",
  "key32": "2SmvzZbk2N8tw8s3cJRNoM9Az69NSDDDumXxvNNnnLeoc2GyJV9a6Q81qLjFLtMs8QVG8ToXAVk4ywRqiZFsF4NN",
  "key33": "4vB5nrKsgtf9S5YVPGAumeBe5yHwDi7oRqEyAADZUtQHpxYgD9hUNSXQGqX78HjKiyfwkQ2tdmkdDXfpYzsd3Urf",
  "key34": "4Eu9t55ovZjiJ1VY8YSJz1ZETuZEAja8YUPxzDoUTTKes84wsGrh1sitV8tD61qSWSZvBEZQTEDKfWJFkdHDKj2z",
  "key35": "5kudunKGSStEJWNGG9VwCE17SkhpsYvSDdaiWm47u31wc81ZczDyPBvHSvHM8QqW6qAbf39DuZ86XCsZXbsDLZuL",
  "key36": "2Zb7NESPqaNQ5K88avFRCHpXcaotaAUdkXxewSMPje4TPdiRnqavfxVxTNFEfry3cNkjKafuTVJjgf1zdjqSFbJT",
  "key37": "4pCkC4D3Wue2BuLm4SY9jont5bemj1Y7RqaR88rKNXueY5yHw2KL4MziKAtJJwHar3N4tvvgHJKPoq1G4Jnmhuo4",
  "key38": "2ThfVvHXUx6n9auBJSJnxieD3g6mJTzTmd7GU1kyDeYo3crDWn7y7cFLyNg1dUPPZn9h9E9Mbh9WymoMyCAEpLUx",
  "key39": "Z51snmt6j4xp4vPe1PFiBssVFsPGAo6VHZEpwFnxX4aQB7HGojbCdM6ehq2Lc8Ln7GcckhXus8NwRuC3Ueeaffv",
  "key40": "3dVc1XyPNCAgfribpuYpycqbEU5ykwHvE677XHRCsAKWvweEX9ZmQXDGY64CMR6QrGbYreGxb3GqphtGMrFDLLdw",
  "key41": "5y659W3UURbYD6q4DJEyKfhVzJZChojioFxDAHboKPQrEhNDk4sB2K6FHSWRSWHNcVirBRkdQgJPnE664UCTTjJx",
  "key42": "2mk9zyomXZ4Woxe9pQopyFWV9cXKfrDXcqyEfX6eYrofJYupXE4mRBD6hL5GR4z3w1bvRaJXUAnzPvURmXEwTx6Y",
  "key43": "5pucVJeDdtFpgxpQGe95VhrkeaaxCs8DkXjKUEkXVShjT3XRArTnHo12tZS15f3J3nADHBiJj9mhZKFvdo2CrKRW"
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
