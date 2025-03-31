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
    "4t2A5qv8KTFL4FNxeqVzdY2rEg4779yKoMwzV9ds5Y964UWehGh4sXBhUHNRPikvPfEh4NMFmXqbCmmaUmkH3791"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37xSm1SqXAHMgYrRrbnJfyZR9mzetHfcxnnFHh2Fv9nmQZEbuFpVxEumRtFy2EoBSrcawSogLTz12sPVrw7M4ZPu",
  "key1": "22eBkMMJaMeXRZjax5MNRax4Aim3dH9BcPtcifHD8pqN2arrLhrDVfeRZfLY5omdiz4WDksXsS3xZZ18Hz4fJKpT",
  "key2": "3KyBy8noJoRBzE3pfRsdvQ6VVJfc3tKXga7P96HELe9pVSDUscNd95HktjVrSkA5cnahTmQKbiu15mZ956akhnid",
  "key3": "5xpXie1Kk7qBmWuMPGbWexgdVt7WDySqecRC6yu7uQnRvnGHEWBYtrquCKJKXwGqtN53bxhsnCitNB3r3WX7TZNw",
  "key4": "2Mb1nhiziqc57dJ6uNanuuLmgrSdSVSC7W512dNxcG7FAjqPP1yVfW5Q2oDzkgxeUpE87X72u7qGxAStA7LULdvj",
  "key5": "nGKbZGj2tjGWiZJBVNTjDdfMAhzSQhDTjkoDdSCSnpsmHNBMZC7ZBLsGSoETesf6VejFWWfJ4yPr6KCNSaBriZF",
  "key6": "3Mds1tmqtr3opbbT45W8L1sG9bdqgKcAXGAm3HcBtxiH4AHR6Tbn5wiu2dNfG7ynAQhfhmHcSMdeezWfGXDcchBD",
  "key7": "u29EFF6c1LLzD1fVpJGHtHMJrQT4hpZochofAMipQE4F4L7rjXhGK94skgn9LpvUMVNo1V5eR3jXYKKvfvrBW7f",
  "key8": "48frFUzkpBUhQ7WamdWKSSQZX2umeQHp9uhdoiCAiX58kLdoPDSpPQoBfN6ZDvrRcxRpUZo5JfduFZpocHzAYPxx",
  "key9": "2WSXU6rMGrg1v7U21d1GJG4BNC74WNGTyRtJqmarZMVhtrZD3LUvvATtgrfDq3UP4YScNxZELiQGbUzrWr8drVF3",
  "key10": "664erKJ6pro88bMStraT384zKG5t7te1cFcsFPLCdHR8MdYrwX781usdYxYgUUHZHmUH7amkUdjZgeRnxZ8dPBPc",
  "key11": "53pMzfT8wwLspimjzScEoDoPznMrNhxQFyooaExbft7S4VfiUJ75SnaFUYhN3D6pfbC2Co1qBKMHdUuLhgwNWTF9",
  "key12": "hJjL3Y8nCSxCEw8LAPT9zhxY9pdFh4167hNqhpuhrcuuctgKqnskTeqxpy9WLzLsEQUb3dLCf1uY5K9CAkDghEU",
  "key13": "rZW7u4sdKH3ce2DJE7Nf39ovfyhjdmxUj14Qpvbnm2GCeRZh8WDp8PksBWfNjfEtq7yEPg8B7Tq3WuQYwqTVq8k",
  "key14": "4fwXxehnwUko67RbVhSVb44KkYL9xdJM3PCzFSruNnexS3EkztnDZkRYrk8HcmWRkmeraVVxCDvWCuGzJBDNj6g4",
  "key15": "2Yrpe8zMdJHLGP81b3Kb3BZ7wqpwRHJn5VXgSUShvXSZBat3DgAkbEYWkLRbEVU7F8hephwXBMzpgrGzf9jx6tMq",
  "key16": "41D9UDetoS5LC3DZmKmwLvriHvbc3dhdcENqcbtQKmE5MjTqSscxFqFHZzV9mkiscf5X8vQQzSDXLJyS8GEDjuXw",
  "key17": "2AnH73YQHuCEPQeJHJ5wynKxGg6ZADyj2V7ryQ5yPmboCEYWR7W52SCoXLy2x5Un4F9rPtSWWH1mgDMPTUkiwn42",
  "key18": "crr4NA3E6btsBbXzLjFxR3ZgBrYxkCooGeWKX4npJJEX2cGbXqzgiCY2Ju2iVyn349PALfhu5RvhdBg629eM3eE",
  "key19": "2h3bZR5zCnap8HxvnZxMf31eMbTKCKW2R7B1A5V1vWJtsfkg4bAKtE7GVWuwaZv5PLZ9mMNf8jzan1TuE3WXwmL4",
  "key20": "4SUytE4uBCoztXUcfXWUHrgTUxrpRixaPtjpm9g9Wnbnp6p7L1LK7JkpfbTxdKZ54yESBpTBFYdPTytXHfauqEnE",
  "key21": "2eyGiCHt3waLeCptbyazugd8xzHfNP2uJhv59ZJx6QJFzbkANRmYM4WyTkWiA6xADmFbfvAKdgzuJJT5pS4tMttu",
  "key22": "5xF4ZhYSjqYQJZ1eZSikBu8XCpodu6W9hxTLGHKbUKzVb4C2r3877wpP9abt6yjDWb7v6uUFkLVUEvcGKcDRfiqx",
  "key23": "rtfN1sfJDBJxoGbKwVrUZ3X155XBcLZvAghRssQ733hVV6a4EmHmTtPp6vcf3qaqvG2Ktu8yHSPCLirJHZ4MCyZ",
  "key24": "yLqsmEXbAgPjEbstbSLipsN3VXtgJmNjM6zTEjoDsT5xc5s5Cf9Fgf6SrQPhhoe35D219Cuo2H4rbtu7Fu3r4EE",
  "key25": "2Rzkum3pvguE4MFiyx54ztzUf3ZQygTLL2EMug53v1P5tKfSKVNBqsaKhmKe9NcveUsjBx9D3gDWaqBb9wo4reWd",
  "key26": "32BiuQQxSXPrCCnr7DmbGgxrui3BdDwNJ8rXtipsodaXQyiiGizxtCneXiWKptFkY7d1mRrbtM741KxG7FLZNHK6",
  "key27": "2na4cHJsbF43UcBhPc2ZiUh5AwFH89iSCegzkRn5xAuUc46ue39CDxHogbPAwyTK4mhxraMEKmLhNhZQvsc6YZvS",
  "key28": "2PmQD7uw13MGYTVivs2ougwWTUA1ynhdy7UHxPfnMgPkwvDhVvrL58mrBn6GBPutYnUgrDU3c5w7R9Ae46yVSzSF",
  "key29": "5Lnv2m7YKRaM8cAeRP3vx5oPytzq9tGuUpLvKLDG5PuxfPp3CiwavXR7p7tRPy1FFcek1Lx8JJVVHZwkp3CQpQ3i",
  "key30": "5291EiaernJGz83q88xPzyN742jKLpHRPoScDk3Lyajw6owEFH8RskDZJt1nsv4VS6ZzVXbWKjCdtnURqt6QhGzo",
  "key31": "47vHqFQJzLwaLsAvf7bmt6Ftc8u24Pjgt3rwAecn2mFPQkG6CisVGFRVtmGLT2Yb6pexuRbAY63L5ADZGyxYEUyi",
  "key32": "4MxdkWBU7C2Ym73dTAxGp1scbTAuTNwns3XKX629iMA55AKz3TNSzRQrzNzQd2rzZkMX7iuzMfN7kBnsZ68fsxwT",
  "key33": "27MMMLTX2Qx4BRB7NYYqhe3o25xhYu6MHWRA2zoM862aPwndAb89E9HcVyWWqoZ4tbcCdkfU3yUHfuxH7WzMyBxp",
  "key34": "izhv9F7wQQBAUTz9d54xMCW5jVJYka5GugG7aHHtNEXYw4sACACnzVrsk7DMzG6Pm1MurALe9ZEx25iyyr9xZCK",
  "key35": "519xJM5x4HL92mPkyVRCAGxzaBkSmqgWuttMyDx6rQM3ijiPtTZAU93ma1sivdDe5LFnyZDvwF4btLfJoG3VMAbM",
  "key36": "2kcD9aAabbHH6SzRBazGqitik9nXbuVEzoNBcUemULe6d6r8ew4ikpj74mgvvTSn49wqf34opM2VK8YXhay3jbLq",
  "key37": "jwCHrfrwWWkbV2Z55B1QK83uwRBTX3U8ySeJReepfF1hbn7jpg8ErNUAxFjDrL2RbHXdUhLemEVkgTpARiD7j8Q"
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
