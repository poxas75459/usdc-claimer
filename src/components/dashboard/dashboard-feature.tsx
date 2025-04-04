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
    "42fh6bCRJP3WVfa1XAdMUkd8RSXPBWd2xEERAQmLMsGG4zr7QpaBvCUAFFqZDmnbLvAZG8KPcNyjaHfiBH6EVwqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46P9VKfZ4YrdY82tpYCgzLF938di7fcWmTPSXS8Z2YFt44ULWc8cNWm5sYC7tAtFt2QWLgAtfbvq3FPopJ5oyGJ9",
  "key1": "56gP57RmkuoCajfBmZC5opTqVVaerppqhEKvqe9wq27ZDSQnsUPxk9v5yd1AoUiqHeLD1vqet6PYpnbeaG4V3D6D",
  "key2": "5aPEZpDE3Sur9eaVNEUZdmBMeNPcLJPnFLLdDkWR5Xqwievrx3WidrTN8y5hqfB8jKp5vWm8FKmQUAgxchig45vN",
  "key3": "WXWHxv6SB5kMYfSmh2HQhwN8Z2SfKrvFoKQeepmfZsCKycYoH1sZbRvitBqJdLLZ7BJmfoKEk1uLSwfPd5n81JQ",
  "key4": "2hL3HJTxJ6MDkAnq3DcMr3Y4G9qWnYCsgDBVtZDnautGcxfUFFyg5QQLajnhFUbbcBZ2g8J7pQ11yUDvm1dph97z",
  "key5": "4aoMdpuJyng1EM6mFN1ogQDWWCpGDucpTvcHUFGZ7BNDgU3XMyBWjbFhiUoSaeKxtTTTe4Hf2BoyHBXBYEmVmYFE",
  "key6": "5X8WkHLU8DaZAMpjEfMYnCepGj83HzTTQoDngeestS6TkB26PsTg434z4LBhUgyGXEusQ3Mfyh4XaBV66afDFueF",
  "key7": "5z6DKd4TZFMSnZD2Rx2abnEBYdX2nUstDmKWfLDZrJpSw1GVWYKpbx8xSbTCsQGd6wR5Pgggbx8SBHe5Hpt8rZWx",
  "key8": "57k9e9i2DmNPSNvWmTFdXFDNRMv9y98rrUqcjVYxQ4DeDWz1FhD8JssXeJqKkwxMWQJHBF8CWZgosLZbQdb4Mvg2",
  "key9": "5RqpqmCGiTQaCf99DYs3bgtcdNXPJnMFAiUD7GHDhHRBB17ySPjJvbYx4XrtvtBWma5bKnngxo9oZh3DRD1rgg2S",
  "key10": "4HWsLDsCymTw8aRE8yiW6gwhGcJuRiCyEvTyQZafgsNAiojWZApSKaa8Jsjm9d4DKvL8BXaoLFyHpjq1ipnGNmbG",
  "key11": "63tvReQg8vRtnfBojcWV3uSttzPqJZBWrEvFXYv65CYUA1hcTsTPHszgYFhFgWQEVBG1rNSQWiP3oWpcr5ktEVb9",
  "key12": "2zpcZN4wSvYou2fJtgWJEUZSm6qSgWgJdDeryEz82rWtGP8k7XCqc66bd7r7nFEEAe6ppv3ETJSHMqD7QamL5L3b",
  "key13": "4VYTTWS2NYZU2KYohUoTuqwnNkrqeBBhxbLJBemn9JbhJ28VLypKBfvtNiHmeuXSN3F72KtR26im8N1vCGBa49J1",
  "key14": "5RJFEdXnagLaKyvBekwAAczbx7eZeGhcpg7VQYwrVPeJzBCoRZwByGm8P7fzw9pAr7pWQrZDKp5mpoK3aghfduXf",
  "key15": "3AcjFt6tnAmEYhaLaEeP7a8ZZDJ3C8TKcWN8huz8JJoYUiL6kHRJ3ahwd9X5XMmcNoNd9TApYR28dCRD9bde46pb",
  "key16": "4L7HGLVm4icnAmiLBADJK5m8uobr8DQP5Do5r5MxrtvnqbTXaNxsuqmoarjkxwLLwniGR11bDEi1antPPHYXUbxG",
  "key17": "gus6YRWF4Y5rWFQu6Mgs9ghAomFeFwJVizqchyu1GRx2wMy9PyRswr6UZowdZ3jeg7wb1CvhVm1UHtN8KY5h6QQ",
  "key18": "45YkDkZes9Fkp5EjApyKiCZ9ZgNzqKLUXt96BKEUAMvR6kYbWkHSY4dSgJ5RHVeW5TNBS1pKFPvkxABj4X34ZviS",
  "key19": "MFLLMoXGNPB2QdtBoLFtQdoxLG3C4ugtRKCaKwLCoF1h3NkMY8BjkAuYF7QmXKuJzzm2GVGBK25EoXqa2VPDZUR",
  "key20": "4VpMQ4kEZbrHZgkbHDM1V3ZnbiRVvuYkSJm6vMcMYSMAJF49YQL9eeJe6GoUQ1qa8J7prJbpAyiNAJ4AY7Yp4oMQ",
  "key21": "3DAuLLjNktWNNUhRD3MXpqwQL4uZnuwduTrrAybi6Mct2gxHMYhqiLmgEm47nkQaGhHSqQNNHn4WXxUqiHoQPnQN",
  "key22": "4t3a6ZrmTg88g8t9p95p22Mo8QQvUg6c7aACPXRBdjBSFWF8kmtpAoKC9CU9u3m1p6kvb7Wa7TCzMgNVy8BNE8j1",
  "key23": "5Yu66jVuyR16BzjqWekmGgKUhpEEX8Kjina7UkP1eFZw3HA96dyVdGZSHrq1x8oqq249AUm97LBD6wyTif8GY6y9",
  "key24": "3CmYB8HFmKxs4Kt1fhw6v6SEbQNz7BGnrtW1zP88f7hqgCtaAWfSNTyhAwYgQa6sEGVMcgpT2jpXiEjyZvzHvYUe",
  "key25": "2mmF5YLW1iNvcQ85t2RcLYkcga2RUvSL13iqptded8ZHVTHcEVa5iG2wa69QywQhR2FaNUboh6o7iWtMv4dFvMEe",
  "key26": "UTgUTqT9k41eU1AgMmThFC9pVLCfe4k8V5jWF2W9EqJHwoxXG9QwJAzvWZMkNnaDWcQQ88HMV1NJK8MeLdbVxRv",
  "key27": "68xAaWZCDPqSJrygJV23t5CuyGY83RkfT5v7RSTgh6mUSLhqZYPbBCSi4hEZVnDM6EW7YkX7M584PuYfnA8zJtA",
  "key28": "5XF5rRt9RaZqSdxZ5jAyjkggqYYX7GkYCtwfC7iM97nBfu2svh2ywRkxvLDsinkfcZ48fZMH5hHWSVfzjaVSQNgi",
  "key29": "2RS2ErBHVus5vBiBu9cyNJpv5j42H2KLpdrirpwijL8pmERbEtVTa3vu49Z731mfQuZsz3H2iFbAmH3U2TCQWRGd",
  "key30": "qAjX7nCxnimxULRQ3W7NXnmhzZwYTCvqLoGgUQTxLwW4WmqMeCkDLZem2nh2NnKvcroPLEWmTZ5qSYV8EKbVUpx",
  "key31": "4pbFkNcu9qSn7b2Egfj7hbRvvYBucNm4Tw3j2j2XY5KWBgJ5FTk5b7cYAZwsvxohp1j8QEMhtKbxvxSNa3y9vLNC",
  "key32": "3s9U5eXEb95LhHCbU2wey7LmQP7EbM1Yy8AWXXJy1LtPLYZ6wtzx6CiVpLAuqJkAejCghjfj1sBmrP3VwHicshqi",
  "key33": "2B9LBk2XqMMupJvvhGCMt8H7wmaTMH2QFgRE7npNnpLBqbv52Mt9JgizWqAp9RWLFCZuX3T9UCo4rJaXjzGZjZaQ",
  "key34": "28xVaDBhivtqZurkiGAThRi1BKXVkNSeFPMuVJCofLYwuF553bQp5aT95g31mvymssWe7XmMVB2kPkPzyN2wjquo",
  "key35": "3DFvvDLN4mWneYD5AxAnWixJUiyTdDmgfh8h1dgGqgjVH31ujA9en4k9yae8qwsoNW4Ytvs5fmWUv6oTQ3tADUW3",
  "key36": "2Y6XuqwJHN946sqZC6ABMV3vi4u9UTwqR4uexckJXjnPDJqnCEusqjHPVkntYyP9dPFXh1KPQGAt4XuVDi773kN4",
  "key37": "39NDjvm9vhNMVft6Y9m9ZYFtVCMY8ArfzShFCcq2ZeuLiE2Br4kMFaKP3kUnAknmExeQoeZHtnvHj7ActWGb9w1k",
  "key38": "vFY13y8hSBsguC2Uxk4fL6b9uR3nUGaJKKgbmRP3AVaEHk67yw4sfV5FhhdfE37sXLYui3Y5TDZFCRG8kAHsNvL"
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
