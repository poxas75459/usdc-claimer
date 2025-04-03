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
    "8zAxevrksLb9PRCR8JUUcQvayTZGhWT1tdUgJgEM4Pw1Bumpd16Ww9KVojKBmF26o84T4LSsEGHk6voJ7SzMHYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s4c6fMdDSUknHBmaRYdDXmPXkDAijn2HhuxQzHmDHjsVCtLYG42xsKy2KK3bG4tAVBtg2Jqk8EkS9ttuQtmSkoN",
  "key1": "3Q1SBnfp38haYutTgqTmd6r1TayWxGAddZZ2Jr2WP1UGa8ptx67aTVjFSkP2fZGQLAsX2rRDxSCZ3AAqz7LUmKGY",
  "key2": "S95c8i4mEUdBiGQuFvf4c2x64HRyWzTrtZpscR6GZeXQb2ZzPEyA4BTsSEcTrNDWnofPeb5oCqHQUjjRwvv7tkU",
  "key3": "Q2YGcLMZ6XYcvSs2se2Sh4Q1VviU8bsEpQ8Dj7F37i55kVP5EeLDV7nGHsC65PgiNZUCq1tEcyiQeRAEZLjKj6z",
  "key4": "48fW937j4R2kMSaTSf8f8Wvn4R6nWJMP8QbLu6GJMGuhcWdQKw4nbpxMAbbFf4ARFnCwWgA3YTEPjfdvtFUePFb1",
  "key5": "3rtoRkTtBL5UvRrnuRbSxBEcBPzsHHq7sFnbKLUBJm3VM32H89He4EGJ1xkbxjao181JY15NrDyR5S9RBjQHz9B",
  "key6": "5TioxSiN3yeU4ELEGxqJ4De8qKzMVWNocvEDhPQx37Fi4XbZcFbQFyL2x4Hcf4s8pxrK9BMQiUt4NG2HsKrcUJiA",
  "key7": "mPoZb9GYvt1NLMfgbtuVr6Xr1H9naXvTcTefYQdRht77haHSsekTr1Eopz734Fdkk2xWLuQ8pbcTwRGxUyWgc4N",
  "key8": "5Y7pcrx8eNvXYHvRVBiL33C1DjCnWxf9nkwcuVrDjLi2EyjqyyeYam6NMXtvZxP2vPGDxv1aMm9GSyQ1m57ztxqv",
  "key9": "2KGqE8JuKw7qBYTrFL4BiBZZ5j9z2ve9kwSV5ixSKYp2rWq9RBMZXXMsGUGFgqreAVw2LnepuYcWfBFPntYxQDLq",
  "key10": "5k7pUm1hpSjMpWuD5w6uvExPR7X4ycYR5AVxjZCAk5HSt3mweJz3t3XxichjqqP5bpCRYGE41GZeuxzFBu9Tc2GE",
  "key11": "azZiHzUbtd9n2DgrdYrTDPWEGV8MBNPbuZ5fxBgLDeyGsrFtm6oG7X4yb1oNyjicujQ41HwtTkvxKNwBbnrRJsH",
  "key12": "4m4qLd3AvRu9p4ymSZkTWbR7jYXSMP4SoqPVpboNxjD4WaZJBNT8Ugz4zXeic5cShAxLm9QpcAJuYTMhdPoggfdy",
  "key13": "Qjyu6AtzHTD5BP2eqBARC2skFa9E9qejMq7yTyQcNc6NgajhG9CaGkJPPvPPd97fECZ1imaN2kfmXnUAKCqJW5Y",
  "key14": "paYqMQzDbpkWrwjFBzNQLfBDzcdbGxdAHsnDQqdDWipxBrXm2dDa4rJjhQ3F5FafsPP8duv5xeoGxDeS4RP7hM7",
  "key15": "4TFTVYDyZiTzCAh86zXyJTMot7o2qA1cje32aUiUFBdGjQPpJm95iTTyvb2ym8MyanHjbyVShCTjtHcehzxga3to",
  "key16": "29j74FNN2aZZ6XWzoNxTNeLkCeydpgD9L5mfKEpC2zHQNdr8Mcm1K4c9oR2eEU3Fev31k48JsvJfatLqED4mQwvo",
  "key17": "3QNvCC8ofWkXf6Dj4eZgY3YGCxkgpJmDvaoWNCivTMUC6WBcyZ7BrpLfRKU7RDysAtKVTpi49ZWUjA9yZXpZChsJ",
  "key18": "4ujUsDqtwfRat38Y8r3aZyJkxXo6kU7XALrhsoL7DjLoYkYGV1LJtv4ePBC7fz617rVUekB3vnyWyiyWWBRxsoZB",
  "key19": "5tRFJkp5a7E3JuDmhq1Zy4LLsb6rFa4uhtDGthNbmr93eaiuGDLE3MeWmGJoVVzHULLyTubtyY8rgstzrvp2MrpA",
  "key20": "3yns1MAzZHJTcZfSnk2nVTPDPuiMPj2qxEiZqgECgnfB3EaQCYafHbshWKQpvuKfwErtPHwCvzBF9eqhkquUCp9E",
  "key21": "4X9E6tAUSHGU6iMBJmWbGLhAQxxfxAih4K3s4d7JW5tpNdeWn924Gcn9Z3Yy1mvmKb5bFya57jDrCXvmGRmuafFm",
  "key22": "2Qc1nEbPRWbjPb3rcKjZfWLBH457rFNgV3jELKxkViK6hv3etFRGaWFwuq6q8NXt1NCquPBMmjawBKug4gxt9CNs",
  "key23": "4rwxrGSuVKiqRBqfhGYLoo6HSAfwHmgZKBb9wZWfh6yNRst86ojtJvzy8Vi5YZQogN2tFeMBrS8yiDyfPNqfko8",
  "key24": "5gSGWFttJsCwiY9B7vFMXashUW8Br4CCoXEK6uUu8oFaePMLvQmD4FyAXEwJoC8dXX6F7D2iYNoRSahfUTthkFnD",
  "key25": "22RAzyoAanRB7JkCbEisjUHQrSYUmuVAiDPXp3j2jRq37C1R7AyqtSHFUGeRMfmQmVtA8cNBFZdTct6w1akT4bNA",
  "key26": "4wWV317283iNRcw28x8D2vGz8uRPBjmMD9F85QxabgwW2Usy5V4tmKVAczQNfoxkxdvajXqpQLTQfWvcGF8tGz88",
  "key27": "4VLG9YcTis3ksYf3fsfHRQcgq2BGri2HWyEsQ4XGVp8pSA3Fzx2Sej1GvEaYbqGDvkSX3W7TYCtRpBRMuVbCWRBw",
  "key28": "vUi4uNybRUdSk9rZAR2Y8rQxHnfFHmW22yyRafryK3Hxju6psEU5qhGbVwfgDRRKN74MUr2gNeMXHJvdY4a2t3P",
  "key29": "2zpByKMzXdgzbkzMjPxxJAGaPiPHtSLHBxHPRGMZeh4vmKQLrJNAcA2xnMx5VAUSLaw651srsisTojGAGCmncDrq",
  "key30": "2r9cY5t1dTMbGAVWecLFa7vYTf1TsvHGsLmspqMpiwKqFppT3atTmonSjYFjBo5TgUvJZTyvv9TUX9e1pkT2DDx9",
  "key31": "5bWhBQveZiWaVdogkFsQM4Ef6PC4A6tC4KiRFVmdaUWNW8u9JK1hYZU7Cx1zGkccrRAEodKzfU9w7WzK2iKkiLrS",
  "key32": "5Ez9R4u6M1VbMBiC3zTmG3qk6cFBQLHwEtCxx9MeTHLvhjx6W1a8xbeX5w2ij34KmTT7kUC93GyWsiS7NeVKzsKp",
  "key33": "2gZeZjTgW7us11TwKMFEx8gUsKsEJWrmpP3gAmwkUPDsA2wddjreRVTWD8sZ81kSsDBMAGpBiZ4iNc3aJhPH2Did",
  "key34": "4JNnT3h2RT1YbWDSZUoEf21rgb4tzyN1XNW8ixcdtjwh6v65cyoPTfTp2cj1XBdy6thoH9kHSWjLE5HAMn2MJEZ1",
  "key35": "54KEYbgUV6nwU9fSKw7gvW3a7ZccupGmafY6HYgWrtj3bWhuDX6kWbGAekWPZq8AVe7gcYz6TPovSdYZSp57vNEt",
  "key36": "32gP1G2b5mPoUCUE8Y9J9DLMfazMQdmmXzHEi7CrB5w2wWhw9vxRj4AsToEA77MgZ8juZjzkDm6ErQYGfteC6ArK",
  "key37": "47y7mkUJXgqUMNkyhStABTU1fnVguNS5AuNJgFyuH8NXi9p8cfdBWG8u6x2Df8fVjW392CQDwJGqYXAAikQsLMUp"
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
