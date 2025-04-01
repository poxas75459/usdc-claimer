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
    "62uvQHwthbEB2nmsZ6Y9CJmJtpbjgroZJJNbykKaweYGdTr9A1fx7dfjB3GpueDMSTPcFwsSDqpGZ8e86tDo7Rhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eWv4pLRbM5FcovXWX4f4mRFHxMmqfsVJa8UTUXcbEVhMbUXxeGQzprdJJiyYdsM9MiqdtTkWaYvRbXJdB6aoexn",
  "key1": "4VoZvBMUFuwnB98im8eTzngoWdxLhMKPftvi8hKkhAqgAbWrvrsn1S9nq1j4Twj3HnVf143g93gjSS1nf9iNKDn8",
  "key2": "43ewt3aCurLy7V2YNALuoUVCvWgHqoMosjAjwhT8nNZoLsvU2QhHLCaFjQDTKj6cEUZWFoHYhh9ga1BuhnKr3ej1",
  "key3": "37aW8VSJ6idiFu3c5TSyaxWqrDbN3gTvFxHdjAKxLtCJcpG6eHsPo1P7SyZvGB4Ao7cKnD3ssaxfPJ1ef45KPmv3",
  "key4": "4SuisQcCJHJBB7DCK5n3fMYf4naZqfDkaNSrXPEU46c1atwj5SVBfZpNqaBYnwdhJD5aS4QP2CyEM2CgpfCmGXdd",
  "key5": "5z9CVDfFMzss533J46F5XnqCeC8fZEu5eKtfTdUgqWbESmuVbC8SjeHdGxDzhRMgCmBCgNpkQdMxwyW7t8mgCnJ7",
  "key6": "5nRtAttpWfyAQdHkWcHNEotbYWfG4GUCyoc6SvHtWuRxHfkDLWi3vYXQ1hiqjzZiKWFEbZSoqsvHa3V4UhZFge4r",
  "key7": "4XqL2fPapGyhy6UHZHZdoyz8Z9DSyRe3yGG1zCtYuNFUHtZEdXRy9vJFqstq7up1jHhR3vjdHNsDT5psrcPErS5h",
  "key8": "76MEkNDi6XGUqSKXf9FVBCGQc5Ut49jq6HSQSxrSuATMfBrLF9bj64w73xoebcM5haZVK4wjG4Y45hCmNeDTaHx",
  "key9": "3HfbCCuhG7LUXVaC5dt9Yj4rPWzkK6z55mqbNbQ5NFRCou48reg9x5vAvawXfgyHhhTqWTUxBZD4c38XrsDt6tR7",
  "key10": "QCPQeU38chr7hWdk1E3wfYtYxWxE8oB4E3YezW1q7xmFfyzSr74ixQKzUw4EaawUELSoqkfZqudEh9Ysyy1raEr",
  "key11": "9ZADpmisedj9QGSE1dnG5XSS4M1nCbMMak5MP1KWGySg5A34T7PMVryxZyVAQhQBWzvzSvZcNXuM5prm55YEkjE",
  "key12": "XQfwBeMMzm4GgGkuZMRbqgDvFZ7CJ8FLEBzpB71J4rHegQBE2d55JKj81MAanz3A4Cn2s6hjKzWQmhBmK26ij7A",
  "key13": "5AvFmsqQuR8JoCssNWa7vx6Wfu8RQ4ZWNuwqCwa2Lc4ffzMyLkGy59PewFYmSV85G5KyYufrv8R1ifUqiggqJGKk",
  "key14": "5fYBVS8eEmXtMqPikxDmoLQ1mXfCMswWnvhGrdhcRXLXym6Mpukz2TvZArsvHGvzRj49jrD6TeB3vtPwpssATBQq",
  "key15": "3ezSbZpsUn6AoM9WLrUw9fXQU3FznzyGMAcERDnhgLczRsMsHZULShgirUXqHQx75g1xxSP1giG5AJwCiU45B6hi",
  "key16": "4eZYMpohcHZHz9ceCzGfrVsdDtucaMuinDdYoqfBPKZeYdhwnJ85ibF2hfed3qXxGNND5n1Ey6CSe3b7Xs1dibfv",
  "key17": "5imPQAjk3yGBRLox5X864UEWJe5uQmu3PTR2BzD6hp9raPY1UWdijiFoR7CPeewgvvbgPqb2PWBNhD8nATRx1Nug",
  "key18": "2FB9j5vd3w32e2hSkrCiF7ein71sbT2uS8Wx47dXaE12At3z5yzEuPWEweyAiJjybeKAg7gBDxCSnhT8TTGBNVBy",
  "key19": "rvTqb2XHDzUCUeEATspmKHTHEG7yUBweWeDA92jK8hrJAXBA6C2ZsYz9VeTQAPUACmt5mEYLHg8yXnWGJ76kcVf",
  "key20": "2W6XqxL1Y54zduqucjaRDyytkgiU2pPM6wV3MeAhUGA2E1ASKCxVrUQfLBkkdLYS3zxkXWptWtYCJrabHPJzqbfx",
  "key21": "5MJ8E8AYoeUrHMXdKLmc48W2Pcan6PBMYLQdeKmh3yxPRpbCzKNofBRWjS5YutATFnBL2DVmUiDbUkv8ADgzddjj",
  "key22": "2vPDSRfJNzpg85sLA89Px2VJKX4iJ8xNAC2Lp67Sy2kVaLVVxFjHbD1N7VcLfD27ztGE6szn9qbDqe9UPEjEMrHW",
  "key23": "33nJJyL8xuP7rnvnxtPc3MHZii69CUZ5QDteZJzFbqK6qzbMV3Yy2QFkTRULERDwsWnqakecU4T7kJqZxdeaTKid",
  "key24": "ypJrpyM76Suqvhfjnrhxdq2Ysvd1L8aqUsskdLp5DEAt7JZrUzGqopFK5m5gGg2sStpuycgxQsbos4dCoUP3VFZ",
  "key25": "2ddCHL1D1tf4FGvgizQz9T9D8jqyuPWwfAPN8wkbk2t9Uet5ZFJEQqDQAiY8Shv8EYLUUm4sNCKvBXz7VoYC8L2R",
  "key26": "Agghr9f9JC1CS8eEJMmQA16pmYLTPvSUyoB5xQGXztsurQe4yLRJ85rxrjZeFG6fEWbfSyysiApX9yzyq79kRWT",
  "key27": "21bpCsxeM3BdvGvdi7dPjMSHG9zZTEBpstSLX1QJSgXjWqxJ4NRfzr4gqb6LZHcTxMWk12T2eyRCFkM7a95cfLYt",
  "key28": "2MLef1ALEPUgmrXc49UG49XC9au9BgwnDjCwTbaGpokyKWGpAjpWmsfCJcpKGR2oRburpdrBq1BMUBJYnFziXPTh",
  "key29": "2R9c6dZEL9g5MNLUb4Thsv8NWDHdRExhXcNKdS6HDZHuXKJxUD5f8sS2RaKL3UhQFLb3Sh9ZbprXGhbZnz6nntaK",
  "key30": "3gxkUSf98ajDxbsUf9WDES8WA3en2umqFzKvu2MXhqFLyVyQL13P4dv5ouR7mKjGVC9qwGJLAhUGy5nByGR6yQQm",
  "key31": "2hdgZ9XHT2dkJDRPhwssjY7C3o1sYVqC8xJF7kATxhsVResribdH8wsNZRQ3S3RQawwsiCBLJCUhSwCpD7ZhDY4j",
  "key32": "4Dh4jpb9Tdfbu8yHUDaRUECtFrYFCE8YT12xWQX8vNPK6bS7zDXfVTnmLZgzdXxGpwA8GhUgc4NAjpj1jdUEu8U6",
  "key33": "4p4WbVjsRmBMmK1Q2kvPWQ31EAHgjX3rFLhLkG4o2XB2mFnzdTbw4uwUJ5ZRPbq14z1DxuL1adXeXuNEgCzEqr3F",
  "key34": "5EKSgqiif1LbnUvErK5ePYQ6cC793jZUhCFCkJXChgC613ChnBBH2zz2XE9KQYrxbWhURUueoANszZKPR1Cgzn17",
  "key35": "3u2E9wVF4XQ94XT951Ao8xgj9tEJWQBY4BFP4SmnPa94CwQq7ze3PwqtV57kpy9abWvZkibpKB7fH4CtcaAsH6Bd",
  "key36": "2pT4xRi4LV7K8KhwbuT5tVTa4CsZggQ9f1C1F82QWJby4ZZibUMQVAMURLorf75UJGTtkiNBhw1rU4gHzwpLMqoV"
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
