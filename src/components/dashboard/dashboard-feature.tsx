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
    "4TLn1nkQC73Lg2sQBHTG4D3eaDpXHv8YQeJN1vxDA5rsbQJEekEUy2tZuQYqGSLvoanUbTjdLrJhbvHMHWSRxcr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gfr62cZwp8sa4gBDsDxp98eHxpnijUyetRQQSrtUpYdYvJ5tKb2fKC7d9beZtrRtEMGpBRxKQdP138t3TTXexw2",
  "key1": "3q78nvquEoidhjrFEWXSsE2ypjLbEvQKXUUiRoGVTShcUd6tPwNYkj4xeY9QAXXRvLXNfEnrnpnwScFvQ6284igm",
  "key2": "besC4Ho7ARuK3qkg6NDaEzJmZ5QhtQbhm75sXK2VbVVEEZ9HFUxopBThLQGPv5vTKu3drkRZgcyXozjEbJBgDYE",
  "key3": "31CHg22AjWdSb5fQBrMEc8Wt1CfYtUJP3kWFiMwz4GCDAayH5YiEf6FYJko4vXoabj5FX8tyKrKdk7wweac8YNK8",
  "key4": "4kZPhWbM9F6PHZjPFSPyj9KQwHb92QDvwVJp3JgvuuYxNq9DmweMgVW8vyGKHqdoMQpqQ8EBLB2kvGrB2rqLE2k6",
  "key5": "rjJvGBg8fDbqbUJGbZafD16otpxgMbZ86DHBGdgZD4cY65kqFdNkvCdefifd6j7wzJWD2seRofaVkM4qpX9r2GB",
  "key6": "mdhxMCuTQNSecezg7LSDgAn539qqxNuhrsPgBhyngkkVJRHCafMLsGrSRMfGSshe8CQVXsZBiRgdPM4QboAs7Pb",
  "key7": "GSvJy7hC7xFEqa7sUANFtmW34Bi8LvQPVq214mPbKCRZd1AKXzYBbhzfNnnm8vSVbRMQoSuAL98rJFGA3dhyCmX",
  "key8": "45hbTLJJvHPmvkXrGyMCgRMeyfm6kEZmmEY7dSwYSCQQ3D8UqQzfMjq1YEqm3moqgNLSdpGiPgrPwwTBmJSb3ZbG",
  "key9": "gNv6iba8NmkftDPfmZEPdycUKMhkJpdDjdt92MB4PnEqPywC8ULr38fx8oMwLhyuTNEajqPf4YwQxvWGP256FPz",
  "key10": "5imN9AcgECaK5k7aKE5yVCqZiuCqu4kef1YssCyAqZHxGqd5x6VAx3VdGmXtZufoDE4EwStFnqzZAKoyQ4wAeTYh",
  "key11": "46vbxX6DNAELgVfdrCoo95UzKEYY1Vguiu2tTMcAd5YGTpk1sNryTDBwK13UsTySoMjxgzYE2prGzW7uc4Do7jR7",
  "key12": "3eC8N7UWYo6bWafbnD37CvDfQxDAD5jn1hzmqhXav8QMgmMLE15N1yAWJSS9FEnFSuEdaDw9f2SgYA4DXrH3XnfX",
  "key13": "3JCXLGW9x5p2DC5aTYqjy57qDSQDKJuyVsbL1vpxH7kTJvrHCsxNP8pqrh1RPArTh2AmRUt871tBLbcE6rBQN7KR",
  "key14": "2nxiWBPVGPzdP6DetwChV2JQ6sunQ1HMH1RTV5uRzsXKizPA7s5oBd9GJjssnpmEZCmbz6VrUHybYoUDUBD6CZSS",
  "key15": "2RsGfqVvedThQQVhRaVWWqWmgaJTyT2BF8zYRzGpyb9ve3v7YohagphBYnyufE5RxFsedXGyNMCK4gmPFxrN63BC",
  "key16": "61Vvw1RZuqt6YENoqHAYr6nhi6H3ua9HKaPfhrUB7s5cUaFKsTpwXJHxM26WTcMiVdVezEs6CEgKiF4b9E1tYPbR",
  "key17": "EH45vUfnvU3UR85yV2mfgy9tFdZJhBvRQJPrKtq27U8qFLc9kRZ7n2RTNTQwuy9hsZQfJGvmnCp5kKTC9LjyezH",
  "key18": "5LZuzNqvRaiwPUBCCjtuiBD6k5dxjaQ3ECAqG8zWoPweW6PzJS7bKttS54WxUa6nKy4zES5giBEUR5FpD6stpv83",
  "key19": "4NJY5m3wGwyioF4rsH3U9RYsyC3YnEzdFTiogxb8pyNUjgSE3bSaLbUh7n519jDBD2WFYvEERME1quRxKGcLwFJ6",
  "key20": "2AtxgnRciK7SNfXzZ7ddDk1NitSm9hVdRVe7vwwWZejY9zCnHrxqN17iMFcKH4vUgHXfxVYnqJ5JimVV7vg85ixW",
  "key21": "cSFFhSsBJZBFQ7VwtbgUSZjHdDE5ud4HrY4xD9TkG56BfgzmchwnyGeB7rudxMkeJ9JJL2uUcazQnbLzDQVRFHw",
  "key22": "3wnhJ5j3mkH7RoWGs2va3KgZDrkRkqj2NBU2rRGjkoKrZnk9tZcrtVENFsJYS7o7NmHnBAPVQ3939wMtGNZZX4ot",
  "key23": "2woo6NZGRF4C6PCBRYN6ttCgS8QJZh5PPT5ASSoEBMpTVsARSu7o1enQxWLzS9HdPrbcyaNY8Re1DdtMwDxLQquQ",
  "key24": "3DA956h4n8Y3LyH5jXjCeWuQG2vCUwxVzuQWkGZvgCr2DMrds18nEhMEvDbF1z3ZRDAnojUN4YkDQSXh7y9nCYsk",
  "key25": "4g14Qt8HMkCrW9aRJD3HHasDieG7LRRog5jiRdz3jw5iP2txJzwf9CUC4ffaf6777Hh3Rdfw1RZc3r7oZidoYPdr",
  "key26": "5PSZNBRFqiBpMgvNwMjgf4Vp7uGuLhA1hNzT7kr1YG8f6LYkyDEnMu5BnzuE8e99vwSLd6uUKvk6YgZ5PL9BY5f7",
  "key27": "Y4BufKaPM6TRZq33mqrNwn4ZEmLmqodyaYrw1f6ZXSidnikouXkQsa5TJvpqwdx5e9HSLMEcSUGG8Dzmn33kUTy",
  "key28": "5MGVbwkMrbjqnL3VEjAz3idhjPGBP9yqhxH273LS9K5WAHUwXLYaUM61bPVLQ9hm9gCsgg95LXy4JUVEVck9osP1",
  "key29": "c1DGnLMKPSy1XbMwatQytstemSHcCrckv9b5D9bBydQ2RaDsmAnrTDNYqtC4hYjgYHbX12WSKLuVCEQUXyEV7yq",
  "key30": "2o1EBVvLJhKRGp3suGr14ZjbkUNmWmwXMby1m9qEYXNj3jn1xavrL8HyREZky36HGF8dbdrg6DFYyCHS2XLtRfHH",
  "key31": "2yLxhSGro98v8UBwVdzoR8PsPV42tbfYdFmXJppkJ7k1hvtkXsGgEUUEWtC9cwkC437Q9Q6Bz6Ar6q2b81fMaMiS",
  "key32": "13TD7Z9M6sjzyL2kkkdjZbayYcPPA2smeffmAoqFGFNDmNz37tKRKYR6CQ3MyXXob5wsqPjsnvyPRT2SunYBmvV",
  "key33": "3ixMSzWXvRC7CvKZ1L4FaarLawZuyi5PNVawqM23k8YcNfaRoKFzLWaLo9yGPXc96e7JWNtongKUcGUYMVKj5YLa"
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
