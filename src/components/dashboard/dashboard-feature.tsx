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
    "2ZELY483wDaaJYHuzem1ZaS4eymbTSUXWhGkK7EWkXwU6ugBCUL4SAPK2N4h9iX9jvGqViFSYm2uaZ8aYaAeJstJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vhwve28L2ynw8w7ffMT9fTZWpL38KF9D4Gv2ieXzYu3ousm31icP3Ds2G2rXF6vU1EAjc9iRZsf62VPNGt2Tt9m",
  "key1": "3fpkEZWPLSWfSGMbDqoKcXxX6ue2xVe5JqtHUzYfovDWf76MUpE9J7e3Hf9fNnVKZe26jyvRwzPXneMdwvKPA3UT",
  "key2": "2qK7sCCnpqwzbbZZvv16FN4Jk48PsajNNeMBuHa66PEdNx6sDqbqvqnZWgoN3P9CsaWXWDaDY45CAjJy6yRXa8HE",
  "key3": "5s4oHYzA8uKHBReG7ErtUXG68gCsEbEN9DbqgbjJK6a8iidJf9N8wmjWChhRQdsEJLkX2KYTM48eDZVBdNKPy6GR",
  "key4": "3gq2tK189mtX7kcFM4CRxM5W4WpwmvN1SAkkVz6Jv4V4435R4i1m5BVtmxXkxgYxeCmtQTJnmKAe5kQMhJzLJ3YQ",
  "key5": "3G6jPw4MXrmue1pxcGqat4u4BxEXE1iGNcXRzsC3qhPNpSG9fQw56CD6JhfJS3fN14o1Qa3rP9xyEiJbKECWGYtv",
  "key6": "4esn5HStqZBpsc4evVfyvZ65ojErEC1C63TMMw3nYxdCgd5Fq5WV8XNMbFs4m9tEiDwbcPzkatwrj3WbCMTawDrb",
  "key7": "3ZVcc2aDVe3BmXTVrVvqfCUvAS6MESSFEhCE3nKptzaEZ1WVKb5Fvg6ReBG7ZuWX7hiWQusq44q48Z8fKgMoLbH2",
  "key8": "4WHoswJp8jdLn9u24jqBLq9KLW5dKFpQnweLXXExW58JXfEv76orSVwLVdQVmvJLqcint3Wvw46CG3uYohv51srB",
  "key9": "3ijhtHS1AK2DJWD9ft7miRJboF9vSrd9bavQMosPz7AMREQNpp5p3hAc8Gmi4oc6T6CAp8qhRAUbeBFq7YcZRrJx",
  "key10": "wQuQDyzi3vGfWn5u4zNSmtYyKURPKjaR9b4qrBfjD7dP4Mk7Ej12w49oHs3wgpjdXP8LLEacApDcQJ7bTdwv7Yi",
  "key11": "x56ozX8t5aT9tMWsNs9RXrxxs88T2JrCKxfvaYC2ZBex2BidqSHKBwVNcRnACmMuxb8Vh8anLUcujqeyahDCAB6",
  "key12": "2R7bHR1JCnX8Wz6uAuD7h8CzDFmPU7FZ9zpxxKtp5oYvAJSh975mKuZ68TYGyoUJwaj5bdDbLsRFpBC8yuCoKKRa",
  "key13": "38EXGk12CMRC9nuwERwodbpMsrvcRKuc1nnnp89EqrGtQtKXNCq4f9fYWKrpusbNwVqznXc4smJr5uVzgbbEjssW",
  "key14": "2PTZHMkeYvLnzURQ6dQADp6RZWbY4vqGoi3xAmRTPRUFRpZ88pj16n3FdZ1GnoTfhRpmSNgDHnk1a7zadBgQyL1i",
  "key15": "4ixooPeVGV2nXq4TiefF3WbJJXRLJDr9W61Uy7EBLfKrAW3KX6SQsSWVNwxZTW3iV6qXQFNwTVfQXBUy6DwqsJT",
  "key16": "5Hd1KiRSrUfu1aNtAe3tuPnuLsQXPgDHfQe1uEhcVtj1jp48qjevbsjwpkxHESXoon6Dp4QFADLQVPMxKonzmWGC",
  "key17": "4c8XkpR59a9FbVkBrgV7C6KNJ5nedqMQQxFtotzR46d6bpXT1SQfDbDttquT2FSqyLb3MbqzTrVNNQqx4yaspSHC",
  "key18": "614s7veYHEumXSWCz8qibfLeTaH4o2uCQ7gT4NPH8iq4d2dWa5e5WwjBMSjFtxfWRc5FcEC5kWwV3AiJDu1Gjh6D",
  "key19": "ZuBxD3U7CnTWz8fjGmBprtbin5nVo6kP7U48bqvHfZDMRHF3qLYp9L1cbf35cnSPehGjYs8N8JbRhYd5RQP4mXs",
  "key20": "37xdkkmXgZCeuhUucJuaCeb7mQXayAT5e96eQcs2bN8pC51WoPmpAKusNVXXJNUUPPNcJUstcKv37kvJr2fPVV5b",
  "key21": "2hzcNPH8ApmisRNbBW5c4ChhmaxDzUuv9LVUM1iSubkfvXpLYEwXVkouKJZn4mLpKcTrcAN28PmjpPaNmbo7Dzrx",
  "key22": "5nVVCM5A2g7LjkhsFwLeCYn9bpC8rtCA6Lb9cZG9FbZQz9L1vmQQjPZsfaKg5rxiakabYiQ1mKwPYCpeQkVMECpc",
  "key23": "2KRtxEW883ZEiBVsW1VWXCXj6sD6iLJaYBD5YuqGDBEVrvGiVJq4WqxwNjni6cQWFafxfV8m6isKjuPSCGrdMGra",
  "key24": "3MuQkeHLoXHvTD4kRDpvx35kUbjc1fGWjkAFWRriZgrBiBEFVshjuCy2Xx3V4SJVUQ1mMqAENyrGk4azvhC3Kh9Z",
  "key25": "4WBh7RBiYpYBa1WrCEtKkXqv2ZaHX3ZU31H9viztccSxHUSzVacuGF53FG9itr3aKELpkmsYqzJrAtne92F4EZhy",
  "key26": "2ZtySxE99NnbzX7Be23SLMh1BbAC3H1mSQrvABghfuFGrzQSSexomKCqgPCwnD9TwGcsTbDGmNY1Xxfnamvg2KjL",
  "key27": "3EnatkdwddvuSvat7itndJi94JnqoDJQFpDHoEUvFbfjjUDkPQZPMKpYNo7SML6aM42dvMy1p3K3vVv5SZVVLaCR",
  "key28": "5y8ZDfrM3h8cPfxW8dC8p7XAaw4hv4pz4H4kwkEUXf1z5CV276Z8mMvXZYUum5n7YNNgma7GoFg86SzGeTKqBPim",
  "key29": "4d9AhaTyZTf3eYPu6zhkUdJYtfstAxvAzQ1MqFLUH8LKiAiF3235nNTQbY3naUwz5ovVReGhqQognqyNsLpi9H9c",
  "key30": "5ov2n8EGiKNiVTbyRrQcmTi11w14AzgsmRoWsv3643jq4fNPv2By1ttNenk7RQRo7ZtSfLYGJpuAL3r2csqGtdvS",
  "key31": "2jDmRZY6H3YRGL6dPW2qJKmYg9nvuFHXdtCA3duN4M2Hu6G7N6rmGTCXeYhSi6mxbYhsXU822diPnSoXrupb61fQ",
  "key32": "4Y3WhMy5VwBzPJ8R8W9e1mM4SmUNxxoCVfi7SbfLQkLEP4akPdK1utoBBKPwpn2wTa217yEbMpefx8dKfjeSJLkc",
  "key33": "5c4fYtwsMvBJW4Bx9XxiSDsN8YPokH5ENJan5mZ8jHoGtnn5MtqukpmgvPsvfK4PF6jQrgxpW6uHvUejDhkrj6oc",
  "key34": "5GZgNNsQ13kmmapHwobsK61GXTNBPWG6TQtCTdEqxWkU6aBn4CLCerhTYY335mH17ZZs5YQvdbJhaCcvRi9VPBZv",
  "key35": "5pxh9PzGGJD9r89mJ9g6GtKzWhvGLzuiYqA3SCBoxqLhw7nKvkoA3uJktrVFstTx6R3U5nJvT8kjnzksN2B6zV9A",
  "key36": "2UnG4Wfr9hi88u5v9To89mCcZ4cpvfXqMHh1b4acvrS6pRtqgDrf56Q9Tn7gYAFhNCCLANQZtb7niZVbBefcPsii",
  "key37": "nvdX8FHAeNEV2TeYcVeo3PBiMvy9eQEi2birsw9ZB49i4UCV8Qy3KmMTv4JCZFfqHTghkognpYYRKJrGYAnYAuU",
  "key38": "zyNRxyJhF9sb5sA5aZ5oXTiUwCRyD5XMUuqoXDEtgGoP8WQxcUG8K12zruRNxzmRb998VdydG6ozUxrB7sqQ6wK",
  "key39": "58FkoNuL5biNBVoL1HRA4z5uNBUHE7CNX2ZsK3BGtkT2KWMcf9XSMMhnvrFMso8aFQezUd7vaJDsCU3i44aTm4pD",
  "key40": "3Ef3drDGXXgs92ePspyzW5DEiyqZGssRLuhic9YPaLiU8RkzZHaXKHWDoQAJTkGgBSpkd2Lwc7EqC9egKkMJPnvx"
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
