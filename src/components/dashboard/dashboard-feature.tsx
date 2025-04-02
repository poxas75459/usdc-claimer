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
    "61XhGq2MpEoKG8ygUzS44Je46B2WzarsxnHxFMkEwJGG7wACn6Si3Z2d5rqWjJFBqrdYqi9VYePGuVAAGhXgFwDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4665yBCH5P9VjPLrDFC63LXmEtoDfnVY8AfkHBeK8fjTg6wWCZ2UdZNrZFzCrCtzeEfG58dzJsu3rAj9qY1DyMaT",
  "key1": "TQ4begEKaceg61jZjipE4f8yj6t95KXCvkspAQAd4NYJV67QURsKug7C3bh97Dgx8xxJWK9t8dvHrvPBHsV4K6F",
  "key2": "2vG3TeYG3QTWpHcqgXbFYwZNvZFpg9pU2VUFwnubCLq8ayHJQ3LjpM4FQ8mpin6vprEbjjyEoKmpZCtjxUrHmkKr",
  "key3": "2WEW4o7verr7Dp427HEY6oBPVKfD2EifSfRTsQcMBN52DczB7QZJu1mn23XZWHKyiXMcYTpoV2bD8Tw2kvrcizPk",
  "key4": "4R1VQY1kRz5vgtiCybc67U1AfwaceTbfhSRZWeL7kMKopWruPzaaM8Jdw3PsnCDmDUs6VmMgF4BuEpZ3uuThJhjz",
  "key5": "4ZBxPL9wKTArXjFwvWfsGYez4mq169ymt9PzJR9erekJuU5C5tuWD8xNuTWeUDkGUoZpkCNpHTmvFKB6upfvsSXm",
  "key6": "59qzbrkN3Xe2vnznidXQpUBX9X3hPXamB3gqUeLRV8vemWu1BKz8n4X8AdC6wfEjEEnWSW4znJrM82u8goRsHgwr",
  "key7": "5FuYrjXjQQvPUGP8FaryJ1FMX3PvBX65TDTSsiFoB5n4cLNp3vuJHcCNm8RC6kKTAKSUFzGSNbWQvxuXTAaA7Jof",
  "key8": "5osmpf2SBqZeStdKBYA9BHY8oMEKqrtsiFFuP19SeZXQCkVQrjihyKRFuQQJBuqMvmHuniKwvKcsnfEK3GztL1zc",
  "key9": "4n9ms3MQBMt12amfHRyj8rAAwcXHPGgzDcJkxHm6DLvrf14z2x8Exv1y2MSiq1h2a2zTnnSzgxHQNVHEnHNpUpa4",
  "key10": "24RMv5QFXpLnV6yvVPMsvWNP6LnyZvJ7ATSWX6rkgebb7EBTigzR7bXwHnTsLq1kvrTWw6mtD3DutHHJ9dYjeVge",
  "key11": "E8zD5LuzNYdLJsAFPfuK6xVP6JVSw3rmoqqA7Pe9ineDVTV9xnyjUA4bGed9JD76WsVX6Y8EgJPQnFUBo4Nw6zd",
  "key12": "2EkGqeDbKGx6JCcppudH4KbiT75m7zvNpJo2XzAQUZ7VA7sFXUZxgcQ96RtRuUitpibcLdSjEZf3nzxDQqPWxWMX",
  "key13": "5JPHb5KsJzycwj964n6TZ82UJgjioLnUayuycL92BxWfYcD1GEaGUx8GMvuExM3iZ1aWMGmsfMRLdquSrJ5dhWwX",
  "key14": "4ieZXEN6fSXJGMSTfjpj4Bu5s6X7qQuFgog5FSindpzuBF1DiLPkXyYPJjX9unV5yNfwJkNZHCrtaTCCtyoYE1CX",
  "key15": "5oRs4b7kCUvSCCR1MDKX7MALitGt59PxdvqNqhjZwpT8AT4UyhdUBJktv2RVbtTh81f7xtYxsZD9Ywyb3UgQjag5",
  "key16": "2z5AQnQMkHA9KZTX3dG46Tb3xpasPW33S8YqtfKU2vkS9a1kqpZcwnamEyijTGm673sfFPFBq5M8GNgkta5gWpuv",
  "key17": "3mVQ9AQBEkNUm7sAdhv3W5Eutrj8H6xFUB1EuEYLqMhncowfAp1ZaTaovTf2ethgaKQ1rgfpu6JFBbfE69pdpJWb",
  "key18": "3maF2smnhynz6P1ktxhuQCYfBXmRMSPvkXvKevYT6gzWa2FhKEGSVfT9Vg2rdR9ekCnNeoif72pJVCTTFYWkaZjG",
  "key19": "2ougVMdFUUwkcAvL1fSaZgECicGotZrBnr26qDkjjzAwYzpKqMBLeF61TRrENwYbQBHQyZgC5MxJZaArjUnLqC7X",
  "key20": "qqbgWexeWAFrEHhjeZZqxiM4cYYxoMPMRgj2vwhRDZzQdPJ8hQUjdGsazQKZxk27fedh56xUX1R8HcKMiNjZ1yu",
  "key21": "62zjGNaDAP8m53hNsU1ekPab3UZniQNPc7SUT4RqbZp7gVbwLsf5Sujn6irJP9CoPFvTNNKVXVzNZABZNjUfgm8Y",
  "key22": "5ou8eixATrtLRbu75SuDg7ne1qknxmzCUvYpuYECy6pLh6mqjDfGM6EyyGrRbMDo8BZAB88hz6cFmbhMSsTcx63D",
  "key23": "5q4obk8GTGqi8PDnJ5fpWdyhnDQBD2uXd5y5x7bx7DG4WDF92QThoQvrsB1ZAbXe17fT4nWY9NQQqzRqretCTbJm",
  "key24": "42tvD2noo6bFp2fBNRnqiL17WfwoX3jLm5v4vdUKZwSDeRwpbXYcnEZiF3PBXbKgbjVoSMM4kg9aEjCYdasD6qfx",
  "key25": "5W3RpeQp6yuUoZspDVN6L85nLK7GGp6pDoetSSnqQY9ssDxgwx8h2cV4GW2pYwRJSxnSvLdg3huvVwVakV1BR7h4",
  "key26": "4U5NBKMWp44zsuWZqiC3HVf39RdS9JGdF2ehKpxWELoE51Xoywp5KQFyvbe9bgvsnWBxZWpyx9XKV6w7pNt5uZfX",
  "key27": "2Ka57Hushr9vJcHnAFU92ZiFWQtfyfVZcaG6AMJe2ZCFXEdqR6jXYZbFvkEGr9yCzFBYfHwAx5umnSRoQz16XyiY",
  "key28": "63rP3ywnabLzEK3KHGe6rmVjeRVr4BL3zPcr8NgwrJ8PRbPbFMUpunVqPhToT84VZ6MeJWKXpwoxfNKZfWU3UFtn",
  "key29": "gQLJTgsy621yGz8mhnpzyfMU55xCvECA9DDgnYa32An49K6i1nenXFzgaFZFBz44xhfMF3gnHJX3zTufXdnQ4ip",
  "key30": "q4CNVkQ7PdVCGhEh9WSP39snveZ9XHYTqqAoBn68U1S9zsYBWNfnAqicVr5CKBE4P6PbAGGP3npwE2vkwY5Hq56",
  "key31": "57EaZQ29SbrnzPs9wqej61YTUvnuKaoxPz9vpmeMjqkLxuqNQCY5t6N9CNGDFCcjEfGsVfGBhST53dSfJj11ji3Z",
  "key32": "3BdGP4y3baGTAL98AkF2Euq6LKV2xsd1mW9RiSKoPm9dhGt3AKfnX2GfpzhV58saRM7D6qfJ2xHzmLCkL3MrDYHF",
  "key33": "3fd6a6R8M4Av39dx95qmtQcoJKtTVMVoCgtfNk1sGRJBMXA7fY5nMsC1GF8PpPRFvKtfXXUhtESgJDi5uCFVC2ke",
  "key34": "4XqdRscbC6z4KKtmx7gN2ahWLEQstPPYrxuCuDJFnJ74KPjTHdfVWPJSbCz8t5C7shBJrsn9UMm74tdybtHNKke8",
  "key35": "3THkkz4Y849KbZHcURsFbLwFM8gxfELgysdUP4NXQxmdKmqvHFyzYopZ1zkREXWWEEtHqa4zZiYb52ed2zpNMszC",
  "key36": "2eCftmkBtWhniL6Qh5r9dj2vAt9QSPJMma1uo3oRLA8aFz8JMR8dY8UdPLK2VQsXDfjXbDeCjhWowrSjYa6Drx1y"
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
