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
    "4Th77jzX7a1HgpqUT25zHF5YxJwAjnoQATjjvXKJjjm8kCgSDNusb8imwDkMXNBa813sv81VGoSYyfXx8f5GFUEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GuHCbAeYP2ui3vJnw2ArAH3j2XNWrfabwK6PKZBffSvk49rudwTqdBFg8WjQJuHxFsHhaofkX21njBqFpYDW5Hi",
  "key1": "3X8h4fSg5ND1a2EnQxSv7Zo6CfvKv2JedEcE8LcpCdVqq5CaZde6i745Sc4UwB2HGKnmNr9m7QJPbDwSzYfNUkio",
  "key2": "4uE2Yb5tjtRuDPof77FmtsRGETNVu2RrEP7w8uCphJMNMhJcsphuGaZbJEJQhNfWv6j4jXjCG4D9fdSzsiLUFZZa",
  "key3": "vsoCtKB2mqRiPfknzBh8HaHYxa9bRTezGy7HiNmkY49XP6L1iLuG5QEKbS2gDJBzD8oC4Pposh4V6eYivW9MrLo",
  "key4": "5rg5YeGJPLM6wpyKKvdrrLGQDKExceCrz1KMpsgJAQqHL2o3ncELLcUDzqHzDwXQW5uqPtPGwPQAjWKQmKXRUiwF",
  "key5": "3XFbsWv312rVacykqSL7tGp8K6JH7d24C1VhUGbe4SabBVZk6fgcXv8CAomCRTkYDuQRAChfSuV1ZzJ5fg5DTqAK",
  "key6": "2qGd7tbDtSiE9KSQYSFHcN1cdJgjD4u3yBNo635nFwMyBzBu8AxhaMx8fj7ban9ChUmK6ZPZb9FVQmPzofFKikH1",
  "key7": "2FQnfRrpp61QQ8D3yTp3YaxA1TjZf3jqsWbBwT44eijPk5LAc3MHJxFf2m3eEXcmoYva9ZbMNwRqgzXwdoEVw17t",
  "key8": "3Vjqf8amjvnTYEqceHxbzo85gWXLg956iGNrq6is3Q42N1bmQXsvhUe4f9P5U4tZpugfQ1NP6YrqQxDkQCkMCam3",
  "key9": "2HpxMkfHZLQHEei1Z4Jxqp3XxfwMQUQ1S3iM8Q8AxVFYnKJ1zD6oqgHJMSBNNCom3MQ5VvrvxgZfU3CAvJ4myu39",
  "key10": "2kz2w6EbDbizB4c8roVJF9hvKtenjKye7jUB1b7UnviVUN3obqRCTknDNuVsdj3bAGudPJhVxUYBEiVKiPs1LPqe",
  "key11": "4fhpcWjHZ4yVcNMMFkw3yyfM5XK8SgUDAd33MrbZGyNAwNZ3Nzq68GxbSB9fbCsG3t7FaWwJEcHBRtzNsABk1E4a",
  "key12": "2GKv5SqYoL34rvQdSybAvuCUwQjtkrQ2ptcZV1idu66xzk7rKws2hhWstjfLdLVvgxhNRFac7bwoZwCKrLRojWet",
  "key13": "ooSiV3Vkx5LBUsghkH94NbiF7ZF7HvbVTGVT2q8k2mVtbvYHBHupq4o4wYkg9fC7KzK9szKuyCjsSdqaNWEaB9y",
  "key14": "4eYBuXV3tDbcB92YhugAAH2VAGak56iaDgJ8hK9JKXZ1FHaf43hrfyNG5UTY8SZndWujFzXo7T9XWVe7wZM8ds36",
  "key15": "2NNexaUYSUq6R3SwWD9xnGu56jWvGzmwTWgQbituFKWoVdPBroqywBuks6s6MmZNypeN7kSoJMRumDBDDXX7kupJ",
  "key16": "5GVB6yUYM6rYtAACaxbAAWhVZoPw9FxUiVhTqbaLu9V6wX3BuiQA14bjoPM8u6xRu4eeYJnFivbiEVWfCjVzWtxK",
  "key17": "3GUde4pKHuqxEfzcxS73smnXEHrmak5jwT5xc3hE1D59Awkiq1LfSLNU6obPQXpWTATsjqwrtAk7uyYbzVhqxmnL",
  "key18": "5zPoBCbSE96UFT3ArdRDMjnyLEeNfCNtnCa5K7xAd34xdjV14EGZ3TnDLCZCJkjoZjZeSkkDvqrP6hfbkmkHJHQ",
  "key19": "3WzWRjpbiEPfM7K3hfQLTnHi8JFnTUJymU4SrycHpYezGo9iWHhitypm4vJKdu41z7ZhEx9zS7c9HrhqF6wwVaag",
  "key20": "2jSdhNtMZqsoMiaeXKWXycz3jJ2RBpydJwu718Z6CsREZs1gdGysdZX3SepGDA7GTuumX8RjPvPLj7fSwbBHVWKd",
  "key21": "55qYT1sg59AacCq1qV2KYiAzeP6MdaPbWq9YtrdrsRMQfuGpYQypVksPLUdFhBpx1gYdaBwSRHEaq7iKZBavBqpo",
  "key22": "2216QiPWmNC5QQTyZ2vXFGzfyLtaFUFfwARUy9FVa8b1CK9bwTExbRxUgsfGM8L1u6t3MJa2di36LzrnTGM9GaAZ",
  "key23": "2SDdHkeNFiWitQgKg9DwyGPbSM8KLCytP3xLwk9BFcmGwwPq3wWmwkxpxvopUdfma2Pj1pjLRsufkzNK3ppYkMZq",
  "key24": "3rP5GoSxtTMM1FuG9UbeH4DkY6ujJGYqSTxGdLi9VMK9mEzpEzgC7Bvwz2B49X14kaD4pjchAH4MarSgRt47GFM1",
  "key25": "4ctQmvbdKpxJEEHodM4zMa5KuFkz3ugnLpVJdj52Wi6e4oqmW52ZhcSH6Y4GKbGmmzhBoHCofKBBVzTiNHwJThhN",
  "key26": "JfNdqdy3GN8Ex1knQynDwyiFfZwi5UbLNbfUxWDngzDzQXfpZWtdTcpStvWS8Ey7CE2HSf2K7N1HwuExTsfhEJa",
  "key27": "5xJwg3zv3T9ZQXdiN4gPvnyYXyLstY1797yuWivzdesU6sxNrkq3LbYL83WaAYjRdhss2nxjdotyNgEKEAPy4Lrr",
  "key28": "3xLbkPyChd8J9YGQT4ewsNJQvCYmxNegvwcBVy9XLHJ5tFkqR1vRqn7sMT4KjEVdhxpvpUcqXDz17YQvvb6t4bYG",
  "key29": "2ezSd8CXmSTuyFsa6dLJq2oGxuMQJifqcjxrDevJEJQnA5cvqorKHM9FaHDyZvd6QQJV5mS7mxJqXVHB3datkMzM",
  "key30": "5KxTVNHAQ1EtEMNDwX5hs9oRoUx8ZbfHykiGasdp63s65quNppgK36DsjiNYXzjaCArrjVyjHKhSPsNaNX53cL6u",
  "key31": "567oypWxh26mHVmfcpJ37PmrwbAZAz12MmGsEohgBePLMh8SYEAzwcT9S3vMiLTKsVBReEyPwzGJxbG99H1EKzy3",
  "key32": "4gmfM2Lg97btiChqRr2oXJ3L8WbHPKGATTB2HN3cN9KDwLiTtTe7FbeCHgDZVaYF8todSk1ekKvF3eLUNf4s3cL5",
  "key33": "h9ptYiALzBBPeKKDCdAL3Q4JbXLZR49sh7UXXcdJY7A4rkwCui2XggBLgMt4YufA3o5PMKxU1e5ucPR3PHci94v",
  "key34": "ZiXFa2b3yGuFLPBnN7HgkYFiDiqyJ1kWfSuyc2XRxXyLgr98b1UNm3bkvQaDt6tcqNWYoDhztiLgWVKmZrrjCv5",
  "key35": "66QNnevfqJw2xvpUMyiZv9go9sUMMWANwsncfZiAmiCxveQH8uEAyn6mQrgqE1NWgeJHpU63sK2yLzqX8qkBcSG2",
  "key36": "31Ys7skFFvC2dgFThE7HTBdrXF5yQUHyKtrSvpxgA8sq58AjxQW7tv5c1tkQ8yUgSshcbhPoy7CjjRdY5R5XLfmD"
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
