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
    "2FBDGemqCfz29YLo2hpRKNCSmMTkEi998GibKUYNkWmknhhhmq53RQzXsss6kMhfAdy3XNzUK3gDH1JBGK87P6eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BwJxm3abxk5NbfrRGpfToiPSHk1X93bLCxGJLL2iLBR98m69RiH5QPNJPzNbiDEqmuHfMqWjXymx2McHQuoQuj9",
  "key1": "2XhGhTdzLGstcBf5M1oaqdTmgfCFEE666ykceHFntmS1wTLXnSZ5M2k5TWFTL2UjqZAppvkwofrYxeCLcKxzVxZ5",
  "key2": "5AnjRd3FNPobvUNbz8wwTLeMLgiMrPDDyDPU8NMHXHcGMNjSMnKKYAt2HL5ceMX82bcqmGstzxLuRk178asbM2j",
  "key3": "wqc3xGxsqiwM8edxmEf3VhREgHoyXp8vh4f323eJjx85rGQ59t4ipZRjFYjscKanWuvYpXHV7V9e3qDJGtTLvn7",
  "key4": "5X8G5hGmNzwbARYijLXivhcPKUeLy9iQWohs34HkbSGAV2iux3RK5oN5tNdo7sy3eHEEcBpA1yLNeaCq5WHmkkge",
  "key5": "YnJFJ8EqGebrWcjf7rRaBJpWvNgw9YW1sxucxwWrvPtn6s7DTuUkYCNEYiBuNae4YnzWyd9Q3izGhWeTYbssZwn",
  "key6": "3Eh41YkGpXU2eJQ2YfSHZFv2gDvjtXdaRvgNCCLU5wJFhsqUvFimw99V5G8D9bUKV23AE4gvuLSx5FVkw3s2j4tY",
  "key7": "3ju1B6tCsu2WyyMghRrCytc4us6gdmfJjMN8cbncfZzcbwcJAF6vhHXB2e917w9jhSMvpkLGDH8hhwwc6uQp2iR2",
  "key8": "4GDj2cF2NhUjKXsX64bieYc8vkG4Li2Dkh8gAWwuPcVXTuyMM1DuCADBaXVsef4sRkT7qEdxkS8fUYZ9BJ2PjyW1",
  "key9": "3qS2ZsLumCBKwewBgGjiUew3GcTTJHG8hKABQDrsdnXYhKahozg9FedEq7PmvqfHPhqzPLwwTeukvEHPmP5HQNtf",
  "key10": "4STwQrH3WpZAdX2be6vuJ6F5Bsnu7XPbEdtXeBsc7WWopqe9Hx3qX7nxHeHVnnAVaB8ajbZtebgATrTrs1bi6hXQ",
  "key11": "x9pHFTfAF8N8zLkPYRCoz8fjEMgYZxpzz1J5skMJCfDhAFQzWVqssjX38EbxZE3FB8tsw1NDxvXJPYWj5N6uGjj",
  "key12": "5nqDmBR74mLcTtS3YAwZs7YWgYsfESFDBc85kJ4JWDsgG2o2tw9eHRkUxjA9si88ZfVtPT4dtqJwRtQRqYdNQiLo",
  "key13": "TQ42Pt4ECTmAHw6NZFNvzmdaGn2c5s8YWh3iLKa6WPR14uRAYtmeLs3ZCQikiRnQ3KLV7xR2ZX4oWTBayYVh1am",
  "key14": "55rj1a4JsRhe8mK3g9onjuzcsh1Rq4XSEYYppecryc8o8YTcpZ11V3cixRZvAxewS5JG2oLfvGbW9zjxBnAGunzr",
  "key15": "kKJvpBsSbjpw5azFrkzrZNoK8fXyM5nmy45N32Nq4sboqnoChBm2q5ymnVBuUKepgiFCKMHkWwmM44eYwKKphzc",
  "key16": "2b3ryyGJyb6oaC32DcgXmfUnXoT3KzGPkmdZo1n6edAx8QuP6ENQy7YntAKdRA1vNi4arjiW59TDDyFQ1N2W4An3",
  "key17": "2AKkDngsKL7TSnvFSEHFfGq3mgD3vw3fM7AkayzR8prfjtY3U1Xs99CnwcAsYKJTxvWNqEMtR5gkbnrpK7GE9npj",
  "key18": "2qgTmn2vz2KGvaBoF85BYZhsRRycrw8JxEDENTkE6WXDMvpLmesKv9wUm2BFwDkygN4ZEjryrWUX8s6XUy1Lp8FP",
  "key19": "w95bJGGZTwb9qk83YfWu6AFX69QKjUcsnasXiUDcs7hCX6YQ3Jnz2Sv4aCedHVq61tVa3wSCiXGymZustf5Vo17",
  "key20": "3cEW4wu4T4teeZavWRRPj4WaUTCuoMbBkXvxqAqqMrSe2NRoharLUJ4TSmWbsuGwvKpTXVAE6x98schNkqPouEdj",
  "key21": "4tjG6Tbuxcb3yiai894fW8FcCsxVjNkky3LCdEkxiHwn8tpxyDsJpx1YzQqR5JRxXmDXwuwArds8833rGYGbrCEi",
  "key22": "3eygGLKRSArqpbTHczDBfsfZow8hmnCXjFgXKodAtovRiD5tBBgcr9R2Mn84dy56oSAZ7ED1iwLMKk9WAB5CqBMd",
  "key23": "5yyzGG9DqS7y5CBeJD5o2bTFo2CiD3FLNPZYQgVaW9yrwcZtFBi7DWt6gBeMaRynuvjTHmbU2xmuH3MUepJLPgdf",
  "key24": "3f8FFdmq3zRy8rbFjEHCqorSpJeMwaxi8YwRKxCdDaFmGvBNN2yJEus3CE9yoLo2psXnps2LseK6KTEu3e5fV6Td",
  "key25": "3tYo8SXXXwXfKVgCFSYAHaUWa9Tmohrmke7zbrYEX5ts711DpoankuKhEnyZbtyWfvWincj4TTaMyjn54pKD17J7",
  "key26": "5yZBPCdqVevzSrKhBZmKUQzTarpByMEHo4gNJtPkQcgtJFLCvhhpwxy8etrKtW67Bd3cZMrpin4UqoUA2de8P6Gx",
  "key27": "2QkYnjQP5vQJBA9PDo76eBgioTdNrAX7dLmrgN6cchVmJ6nC49d2jCez3jRoYgtB1VKF1ATAv6SVCCA1oTv79N8",
  "key28": "23Dn4uZs5qzMHxYPn9iCeFL9QkveYP6Uqcxw6r1VW4Pqq8b5kXi3J65nP3TctFgDZkovq4QW6cwipyUqf7Sqschf"
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
