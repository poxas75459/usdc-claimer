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
    "4Fvz1pHWTSLe8qUkqiNMYvvWbQ9fD8BN5skmdFd7UYQLLNpUgeP5qVwAPRgCLAnMNKW8GH21Y96SG2Ga51pJHz8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27L8vu1VEAXNwe33KpubTKGYiKstiBmJQArVQ1SBJSgoLeLABbW5y7h61vPJraM1YErRHhLTRxZJ7QpuF5tcmcBz",
  "key1": "gnwBwFay8ntwFR4joPQ8twXhmzNDAjJfuGMVTibR4YF9aUdKtUhvNTuXpgFnQuMsLDoVSS3SgeK8qWhUYjm2ztG",
  "key2": "35ic6TwuiSMqjWHnsyJag3ooowACxctTUXo2U3yoGEBB3UkUJq8jpr8cgMHTDPd92q2kEPq2josgnCEapFeU4eRu",
  "key3": "kaaKV2jW7hFdhme57eumHciVfVuT3gtMCCrmE2XUhw7VKu2ZFiShRqj48ZUNijz9xVv7KbhH3K2HNtoXzmcYQiv",
  "key4": "e4pAfiAxKbV7YToyMRL3KNEcnaRNJNzDwuMcE9xEJHBKABEpfvph6YDBuN3ahVAwuCJqXWX6FMgZWEZhiSdtUcE",
  "key5": "4uMw4WCFE3KnQXsKVnBtgTNQNucCSuXxMnaut9qdkhZwiG1RQ8Tb8rY4k84CirK1aXWV7cuBNokDEv3eicn56fAZ",
  "key6": "3sdB4k8vc7qR5CJnDhpasuKgiwrPwypWEcmypffGkPxc3oNDXRWiQ6RwK3WyX5YGZ3K7JNUDiVjk7SRPCgd2Fbkk",
  "key7": "58LVjPznWY13z6WSHzsdAmZnc5kHgt7cveWJgw85tT7tmwro6DM6YCXWGsa1NjE1nuzE1frzHDq5WuZYT1bFHK8z",
  "key8": "4HYppSrVDMREqKccU4TUqzs9Q2Pu9njxzQtLsdDmu4KmWr1TN8rbDw6XyGQTXSKMtLL4e95ZyaKCL2qmzYUpLzqd",
  "key9": "3hvM1TRwd5iZCxvkmkXm1Njt7xH21c5seRJmxXUR3Qu387PR5KuSc3CsbNwDfZTZWaKFJGgyb4CBnpW9k1MQyJgd",
  "key10": "3SgABswJ2Gnvyb4nhKnEwsgccnvRGFLGo6mqHf1RVJgfpmsUbdK7kqVkD36JjnDLabz9t9xASLoiPiCmrwC5Yske",
  "key11": "5BMb4qsDb15B1pLcwFVW6cPoQdXacCr6DwxBwH1AbNZJQUm8eM45QNkQUWxW9V55NWgLrUALSJTbVx9nvwApaQqF",
  "key12": "4J67oceUFyFyVcT3zAvZ5UgobynsSMnjZtvFF2dNti2wH7Ngf7WfvMm6PVhngXEjABPHM2wEWZG2z6BGbuQgSnB",
  "key13": "4RFcaXPzb4jGQzrPPLQj1bVommUK3wC64pEa8n7RE66ya81Vk7jTQWTthP5XGNoFCgTikQsDNNoQuE7arW9yU4VQ",
  "key14": "5uykPaQcr3q7UFmE9UsyRPGtv3DV7XdGd3yNNZFhPuha9nQC9NjXsE7MZtCpHWi3qi5gH9EqTHQU9aH4rzRXZeet",
  "key15": "WpCUYyrwqtMBPvTpRFh2iuY2ozqcF4UR99rLxSfzth2Yb2H2NuNfPQfyvBZwqNYCmau3ovVNaFA6SgiFYyi294r",
  "key16": "3jici1AQkAB1jc5jH6MwrcjXbqd4duJHZVLDABniqPnmTgKBnvJMg9Eoo3J6hWHqTEkfVpABhuov245ExknfLYVo",
  "key17": "4Ag5Pb3MtUu5DHtfZiDgxYRAT7F5GvwGmbmghVTxNrTbb6yG8dJTRt3afnQTLeos8YXrGBmWDm6CpufHcwuNybqK",
  "key18": "21PkXBBC47deUZLHFV7uYFkJDtogB12pP2957FhE3RSfmZPDwdoyvf38dKVYWjq74MJYq5TgwmuuXGHYGKkqpGbf",
  "key19": "3dHoeD2ZqAQUqtUMoceQ4BvZV2ghCmdQSGLkEqCouun7c3L6peXXzm6LeCMtL6YsTtezYaLi3N9uNhT12XftM9Ua",
  "key20": "2KYCH575mNvBk8bArwtBaNJDiS9PirBQCPtTtJMWRwSndBXgQo4Ka9ZvJ3nPVscxSDCauBehjGbiTHUU8Re2Z27D",
  "key21": "4inhpucC4GX9B4tEuiNjWznHEr752qfdjgc9jE7LFLMSquzZM3xdxWPy7JR3iqYvK2RZrD3DSnYErdu6xZHyPA3K",
  "key22": "ZqufLyd5LYB2xuaPVR7fZDQ1NMM7rrp3fxv9cDkxMbjqhcxEHxmUZmzVWEfsrQ3MykYRPx9FuuJf7tPFG1z1c1J",
  "key23": "4e4tju4nvEc3ytiD3DJNWB5AvvTsLozi6gCUBtDJ9LqYtWUK3d3BvJ39CQdT7H57rXuxY9Fdb3refQZeGGDMe4MP",
  "key24": "KhS4H9sgXmwiWfaMJCJG96b9erzS1mPtcynD4ZaZWLscvqJAq6TChGfFXTWEPLDvWv5ah9xg7xLW6jYMcD5n2pV",
  "key25": "5xpxt8r1kHnMbPPeyyEP1robeQhcBv7kJtT6VVVzC8DZzraXNJCb2SzgTDM4bye2wHrKqqdLwbTqENnnBzY9xDwE",
  "key26": "5dr4WhhLfJxYY8C6UCVNv4mLNspCPPiTVebiBLKABziRYejkzXfKgoFHXLkwqwhWDBxHtAXSchxX1sCYFS119VHr",
  "key27": "5ddoShuqfrE5wFZQz4WKX9Li6eNG935RLRgbZ9qAsjdcVRHBUJ7ESWbgfDTXPf6rb8Pz1wWcz6yjMnPwmgon4dhw",
  "key28": "3eoSNXQNHZFpVGWBNAf21NKZMEEjpYQJmxCAkZbLMQ19Yg25VpWhHyZ7u9vfwo3m1FmfAbF6z6fudVgZDWLtAwPp",
  "key29": "61VqArCD82UwDhUDXDHy9DTCoWZQ6tW6BcU3pvuMuGYb5yfPcacrAvAtCFDXuRTyP75TaTX2zJpfTnek4cfovA1r",
  "key30": "YFuwJEwYrw55KkguXtToicfxUJWWvdCFYU1pGAU71nZTe9nuJa76DhWVkyJVLJwtBwggec6wjGN2LCqtF1oSHyz",
  "key31": "2ryLQNi9EUibfCQYBEEDugY9FFvVpYqNfZdnixh2bRctVvBtyKn74mk2zrrz5aVyuo8bsm8oMLCfhUGxfzs8fzQE",
  "key32": "2AnuuksfuMf4mTRRtqtSLVokZMQE8YhcxWMsczqVALoQ2Y7Br3ba285gnZivqoTmyGBbEz8BTnBhWy3CfK13pBgb",
  "key33": "2uAtRYFF85KXCn8CUVdFDT4DqcD3o154rwaJKPfKYf8K1oHLU1fz2Jzf73krzGwHN5VkNSd56NNpPfUx7oBYcBnN",
  "key34": "3mBPcHJh6SP7b92HScqbMbET2L7HhEK7NCsNfWMgdxDspTzY6su7EwsEY6VK8LVtCaPPhGWYkUyYaxT8Tgmu3nm5",
  "key35": "szsHxAqowtzcT5dAazKuEZnZC2CqczDvp3LBMXRc9qGFB5viQS59X7z3izcPC4FjGmFJeKpVm4tECjp4Ajq71Un",
  "key36": "jsZNytQyKo7w7Lbtay2Eu4GftGyBCeJwfyi47wBvTqm283VDwxrtzRU6WGsosNirxL18tvVUJMWxuHqSBHQpG1C",
  "key37": "5H6jxjPrPFfPUFoeKPowJJ4c1JqQbFVuWNYkrJ6eEJf299Y6t9qzu7CWktZzinZzrMDbRvGkNvkS63NDodqVpeKi",
  "key38": "4zNY6RNipruDnGXPzDyACnD8AyKL79uLqTKRSh4qy7n9bxC1neTVq4u6TJ1eSx66uC74fLXVkH7A2NfLgvaJ9G2Y",
  "key39": "3MDR6T7mB8MKXmcYZHtqineQQAdVfcjjWkjr2EWxf5ruSRx6Rz3pmDQbjDWTsVYYDDE2WRoAx6fJQDHx7x4gyohG",
  "key40": "3wK6wsnzrrzarDPn8xDLRVsdbt94iHBfKZKDBccsGQfsvh15o8MTBWA4dYQk38wzaa4DzT37CibWvow4ze2yrFNP",
  "key41": "2PKPHWXd5k1agEPP51uisyk2WjjhuEDVN3ucfvLhkK2MCdRVb43uhXzFpEjAvbSGvCnex6TUD5sXdU7Sjjdu1EX2",
  "key42": "5tR9JtRc6Wto5asF1ZCqvXdasAdhzBonh5k2aS24eYS3T2RsvF9q9Sk7yHaNVnfpYsZbfBC5j8zbppE5Awg2qTki"
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
