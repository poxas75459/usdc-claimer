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
    "5abGBjFtK1ARah39VrxFWxibiC9Y2oP6kCTByrEVz776mEJoYrPiYpTYiFkLLVJqTj27KZuzBLHkikRBfAyzDNr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JtUcq2VEjvPwYoh2e3EzfSSWg45c9YtMq4LaAPCY3h3aB2dk8ZPyWLyfDvaMVH3AXJ7UNHvEHwb2Gx1cjymjyHQ",
  "key1": "23bupryTA6uTeCH6AvYF5bk5yVEB9EXaCRiTb6Mo1d9uXVfmoRt25pzNLRvM9LGDtCE4rfKcnQK5UKEiBysGBenY",
  "key2": "2UnAFs38QjAvxDifuvFJvcMbVEkupoGBmbm886XY52vyyeUaxBKxnJTkwVRRNKhQ9hVCLSs8RYagCj5gggBL27p3",
  "key3": "2evBfh3C3joKKd9XWZEUxawWgyPabAfLYrJtRYYqLuAj6MEDXueEED1j6bY5txdoboojsVFQcXHSLGMpoGGvkkHZ",
  "key4": "4cLz1xYUpVgT7xQ2yWXuGFW87HHL1WWMk59EiqP6Hr3JNSJjgE8ZhuNm8uhNkwZMCppcErC65ruFohiCGmkdvQED",
  "key5": "58ye2xAMB6psF4wAouf1oW4SWH4e4b3J6KgCgLTE74ne7or6N8cJ8TN3ntDmvwXupXzqBsKGvx74ymGZ9uBtnQYw",
  "key6": "5UFebTTsDBNZwzJ3N1LZCPmqnh2183rsphpCDvnN9Bn9xiowd7WG7H8siKJrcBpWW4stodznBdRiQkNTqF4Es6Yo",
  "key7": "5wxutT5PFgrMRoCtU9tDjSdDhEAN9xPPbhfP6upJFYusRhEhjEwLT84EQyPsmHynUB4EWdAuzBSqaTLppzpim3xM",
  "key8": "5RxboYEDG3DykfRRzsLCn9yjzKcf7YLTvG85EQNVsxJdtx4TVoeFNsiNjgjSyqAZDwDH2SaopiXbEXa8A4gy9f2P",
  "key9": "3RyZveWHmYNYwfkhWBuWvkyEgbdZwCu43Ezg2pKDN4hS32H7aoXqMSyy27mcA4s8qZLH6Wev41X8HRcw2NAMkSEJ",
  "key10": "3cDEsjrj6erYNqJF8FPN9sSBUBwyNa4gPfgRg6rCv5SXmS5geuqDsR9JBjaXrh6vyfs8MzXC6bho9KSjUnXRzZMT",
  "key11": "5YFkL6bq86zwAf4PjQgeVufpvXDuBqVLvRToEAHdwKGBoCxvhnxKCEt3KS6YGP69j1N8GtZZdeMUfeTgGg6PT4jF",
  "key12": "5Vez82prr8zeZKYESKZchY8Jwsh8mEuXZUjqZrZ2meA3TN18qo3nWtq2cHi67BXNiQFeTgVuMquG23wecVdNitLW",
  "key13": "4wAEmqphovxYip5ZhrtcHZs9BkYtcDqp4QYP3WJqq1VhicPb5fYoLZ8LohaomhkxqH3bPzGJ38qR4MykiJH7KrfC",
  "key14": "3JSrqweC56rZC4M73SwyNEqbXpknTMffA3DwiwxMz6KfEpfehUTTTDxrxTp78qeXJhtLU2A8RaGrEx89SHGwQAGK",
  "key15": "5YCkNhYPETucV6WWfcDogESmGKpn8b8cS565VakYFmxaqHXGtABAC1ZsHReTxtZEsBUnddtqkn6DogCWs5W3PbBt",
  "key16": "UfxEJKMv9rLYdnti7bVtoQ1kdQ2aRkMHFetgeeNshDQGjHSmKNvoRCVAqJFhXVrtFXE2QKD17Up319VExH8S5TW",
  "key17": "4Bw3AGXYyGYf4UP1MGBDTBtvcNDgmdHhDaUsxcL4nuvdLb3UqUCTjdFM5hmDbAEjxZgAEXedF1LNCGWEAP3SHC3b",
  "key18": "3E2pM8gssiGMh2vNUopJ5dMhQnuUFE4my7uJcG63GuCnHnPn5YAh2gxzhteC7DDgqoxWp4pSRTbEr87FGAhRVSYJ",
  "key19": "tMVLJcq26K61xcfjyazfQxnqTDNdnYMz8o8bWtv6VvM9z7PvNPeg6w7avubDBenXZSSzMFHqsRgHxpU3j8TkATq",
  "key20": "pWrkfUNoxQxC3wL4EZYfW4uQNfNLRmUCi45mXCJPb89QzKwrLRanVbt2MwB3JnoCDJFs6nGSAbUfrrim3ubP6vP",
  "key21": "5aBWxGqHLFGqgoD3ta5RpGnXrHKx9cuBw3xap8FALDH6uVHDTYhApWSw6pJjJFiGHTLLgkfvjucxsusRiK1SfqSz",
  "key22": "5SBwbigFnG77Kmbm7wCkM3hhz9RSaFVZUD1G3TBrigvusKBfX4xyfxbeAubWpDB18AvyoZZFL4U9VrqPtffQXsPx",
  "key23": "3upXQCTyMKVRfNGifhTv7dEC96BCNi7wrbsGK576Wax28mDFp6crAKZ8qbCGniGw94SvmJMmN13LhJZv6vPjhNZm",
  "key24": "3SMhHfDR25gj5kZ4pMpne8KkZkwqrFAs612Tc73dBCJKCAKU9JBMVuMzh3Xu8V3uzPUPWY4UsBX1f4q9SCCSuA2P",
  "key25": "2NHjNVrLPRZghHx8wektuwGY5vY5yR8sm9K8d2WqgFDibVLmLnFLSgqQSddJDfHYey657y2Jzxfz1m28XHgZQq9o",
  "key26": "62qxqemPHrmmGC67Kt6p98CGUoEtZqzywLMSvx9EDQnMTo5gfJctu7p6Fp73FwvuC8xgjsZuPmVZXroSXyALZQAj",
  "key27": "2nVLRQjXfDAeR1gjmH95Kfbb9FXsv8Vfh8SCBxx3ibFqxbC7FdX4ZQ6qUxg6Gkc4t9H4tkFxwbsk1vNERcbrDFjx",
  "key28": "4tkrPH9TRwwMXVinJ9iEPocZ2w7yf9ckkW5datRzpuG2K1tVNoQKCcMAxNPaV2JnSEXyD9HjBDW5TuqoYJSMz4r9",
  "key29": "3Eif9xkEQhjLySeF9nhkJLNcVo3mKwvGvJhDy6yAnPcRu3jccPoLYP6KXfEcAE3uz1y53oCeVXTmbybPyEyPVJwi",
  "key30": "447tbBnV9yQC7K8qHJk3DFyMfm7QboNaJceKNLwug5i5mR2p5LqXHuqrSVh7mDp2JCHC3bV4PF12X8KDjWCiPeie",
  "key31": "54gYrsWuvm4omhGms8SJo9RwS7kAKrMQ9Q3YAqhDkSGNXqpWF5QYGmWBCfohJrkXj8G75W4XXVAXTKVZEh7AyVp8",
  "key32": "635jSZAu7HQr3JtjvzmhtqvpnTBNXgE5puSwqd8i5brXDXad8zvZ2KbBRfoP1AuZcX83CpuX9F1DyidLpB2W3mbx",
  "key33": "3vmRMZN39wbwca8dGVc8FzcNf6FTyKAS7fVdUZWdy36yeCq5QeiANDkHXpSPurVsSWfUF8Ne5K9P2MDnQsmQFYsz",
  "key34": "3dNSdthY2Q8zE1DEJv6LiG52jW4rjLnmSFukNdw7RUjpEGDt9K64ELTzQbkiuPxVQpVJrwTwxZ9vHbJ6BZbdjTjq",
  "key35": "4TQBwbWqEApdrJY9BTYQDTqJckFRzmWgpNDr6uxNKerUDigJtEJD5XfSix2CbQhTNth2WvGkajc3aqsQ3Cxq1YDY",
  "key36": "5Y16JMSWaHpP2z4BHCfCv9q3V1ZcCX7kKL2JiJrdxmVRfrNiEWWQY9GDh7REyH11BRBYCqj6QvcnuAnqHHzYzHRT",
  "key37": "5Uy4Q2Fd9WnvrNWg47vDr9qPqXzYVv3Y28nB4rKSV32p7gUr29eTMEQ2DfcpwQuZbFVxvDFSjtxTpsyyDX8mmn9X",
  "key38": "NAXjyNLyebDnRV2UsnDAqMEJK5b32UJaR7zf6Rhb6Nc6mqEwN6sESSQARqHqzMuMPSQPkyickrZ5gvQuXFnPXkX"
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
