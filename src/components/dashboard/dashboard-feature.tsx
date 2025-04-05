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
    "2MrNzYJ5nnQSLVrVatT6LkN2DJ37Lydr2Pz5UqP8HaWXa2bkTFxfqogfLFkEVCU3uU3gCCx8AJnDVxGH6DSkiv6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nN89LESqa6JdZHsUDb2JFegpraxbxjYQ9uX2ZesSosGcA6JQwL4JsbTA4UCQfmUnqHeQ17bdyuGj3Rzjbzpbnap",
  "key1": "5ib8g5cezZCrW3ScJ1ATBvJgyosSszs3PmBtzzupaGCF2gK2tuvMUXXyPi4uyFdmPRqySVQwyN3nMV8kDcGeQxVG",
  "key2": "4sxLspkNU8AipRF5f8rsCrSYTXas5hk6ZtoSpvtmXGNHNKArEiXFhj8Vnrn6We2dCMbJo5E7BkU6b1VPyRQzxti6",
  "key3": "3Y3tZkjVSJ4NYu2N4dM1ETZ867dGpea3SK3dxRC4FcymaXCvBTGmSBWiaefkTv6HiXEkKaWxajpZh2itokFkv8aq",
  "key4": "3ebUmBMFaDGubak2QwUUfUxawSoYatDSqL682Lf1zhrLT8tjUdFxA5WrTVkwfcmNUZTsqxQUHyFRdgX3AgUZ3Wof",
  "key5": "5u6AmeZ72g8cm9pZ2VWv7RxNcRV759FNYSD1T8tPhVgerRamrbZthfoTgbtDwM1WSwVkMeSyHsENgPox39ujV22E",
  "key6": "3WzZsocxN5gANrCj5Ff3iu1Uer1CGuqqXqfHygTeAUJziP1Rz9uEyr227kYJz3qkCN1L1P4tHGW4vJ16mPeaGUVF",
  "key7": "66jF7gSahGbSd2FhdA1QgteWFC75rAH8pknRUBemP4ioKAuCATtHRyGFpcc21vh8eVC7xJz9hqB83kPE1swg7Whn",
  "key8": "5weFcA76drt2NZUXLpFRzo4UJyN3bn6hPdT1ZNCaFPAX5kGRrc23qeJj61wdwzb9sfSLHe4CrcNjJHad6CGoa2XZ",
  "key9": "2WZZi7gBjo3EybDNRKsgrR7ZHxZ4Hm5z5PVmAvYDLfD4oUfd5eUzFwzWgfaYqqzPDZBYR9VPDZWiu6KKqQLUndQJ",
  "key10": "3N5mbLjstyS1TaM5k9T17ufZgZS6yyjmmpXnQFnBmRaE213u5KwvYUVJgNKoST5fbrVrQBi9cgUbddkurxuVvbJy",
  "key11": "4jUepjByBUQynt6gbWon1pnfdo8jCmoSdWwW8UGcdnuZSPR5qdCBfDHwghRdSeP83yXnHEHvn5HV2v8kY5JW2QK6",
  "key12": "JqUp7zvjydndtZXBZTnyBYeuothEQ492WFGZjsdjUi1uQaZgiCqBGdc6sedCf8dd79LotBz1PmMEpQVGvc1Ln6e",
  "key13": "3WtuhRpWpcXdXd7coyD9dwLZq4MATsPTgThbAr5ssBK7mPQHZ64beYNqJoX2XbbyAfQ4F4n4xm2ivScNDh6MR6VX",
  "key14": "3bczwf6WPgn1maDX1TtLgTfvj1XfcruN3PKdqPkUMmmU3uEmnvZz3Ydos4agjvMzUWU9BKn9xPyyXBdUBveSMyc9",
  "key15": "4nKcDCzPefyTrU4YJLc6D2wVByUdvHSEjPUfcAG8mn1BxCCJ1SEgyCh6KvLhdKUR9uVPHmSsJgrzB3oznxQUgXJ8",
  "key16": "5wCLWtmcf8NW8zfRABqcLTSrc1aQWvGy4tgKgUdMB5FAQeixzkpHFWfonvdBFRou2qxUcH9MMwSYfernK8yw8z92",
  "key17": "JfRYEHQhYWKhAcWpfz6kLAecNcm81yqKShVoPpmbEQwu9zT3EfhvpCDo2tsrPfABMFpkqu683QuobWjUyYhtEy5",
  "key18": "4z7F6uDcoQSKQizSwdPQDqjDMPyw6QwyDkmsSLbtCJHBfgWotT3JJDKRb1Yxr91ML8xYeArBWikJNicRS9xzcGnm",
  "key19": "4fgvsuqSaJSqy3ytdY954mwT6Jsi1hYfP9i7bzKgXWczrj31ihP9rYh1cX1Pq1Hnf85ZRpuBT899UEtoPRkYy1Qr",
  "key20": "28DVBvKskbSRhJwLaTTfKdcG2jXLC8K1Mpbar9YrEPBRfa6DteLCSjYgGp77UMTuuf5mduULJ4qqhcQpYkerJBtV",
  "key21": "kbSrwjWPThaeV7AvgTR9T6ArWT99uz3KmJgHGP2ZBZexBKftSFoa1wp5ouBfSC3j5WmWL4ZqmVQ6huhNxGJmGbh",
  "key22": "5V1fsMbFvcvxYe5QZMtdr4GrcDBUenyBmzWQ6rojXV5cvAftMY3BNJxVee4QPnbLHLw7BjumPz98zfZ75CmLusne",
  "key23": "56jEG1PDsRcvRXjFXdxiAdGUTFXuZ7coAufSKi9CSAsgrDZijUdTLyeiwtQD6rUX7oMkEtkwwp1ouUH4Wzoj9qpB",
  "key24": "2be2CvXa9cV5DtLp733tK1g9KqVjJbTuUom2sWJALEVaxLAskxvN18uKBSsd83iBGuMNoYoVsdYdreiXQZjH78gC",
  "key25": "2sQ1HBrdjaBzxsXRrxH33AyprnSDFWDSJut9yi8GwYgvZDXHNLhwXDgqmg3EdNJJqu56X2weoZySVPsrdRDmqvLC",
  "key26": "26NpappRaLyo2xjbYVGh3xFkPzRPnnfCUh8XFgRdh9ZzEA7XxTw6q7qMjK2sVPE5fjqFCL8sWDzo9DAh7grgrfPD",
  "key27": "5yUSgF8afzc8ijDfGLrZ1KB4VS7o6aCCMcW3XTAETSzB8QxsLazxLbJkHxzg1eXfjs5pKzJdNbbvTBF4p1uGd7kG",
  "key28": "2F5My9pQj9zBRvjLTduApjAZ1ZHszWeCtaMsZfCi6cTG5xPNWUZDjYdr34rCvckp2NN96k276ZX9LFsmJX6Lho4B",
  "key29": "5JBLjFsdNshvEwbPk3eiFmAbo6Bs4NYpb9Re5Ubc6wbWMjFhVkL4yGC9Y4Qth4Cf39g3vFm1DHC5vWwLmvFGGstX",
  "key30": "35viXMJjj7t5hTzQCDa37UadBacDJgMWW8Rt286wAa3T5JxpPDjTDtmJqo6G7MYvFGd7ebMw51NSJrYGUB146oKE",
  "key31": "26C16L5SNvkJ6N8Tjy53T97WaUMvvqhzS9ZykNUFqWnnttp7oygak92EfmrmGkXTpRxyxDNgq1LXvNcJciAxn5kU",
  "key32": "4Y85KFB5jxuz3GF19i3bTJuHFJKWeyR3xc4WCf6P6X7P5vdXnbMHbTpJ2CvXc1Atnd7NSvZX1nids4uVZuqeMBoH",
  "key33": "439215zfGHPyb7aNgnP8FC1TV3gsM8Aq2mpzZriqsR3g3aBSFLeuVtzhyiTB7Sc3hLzta7aPsGyJUv51YcLpN9Ef",
  "key34": "2p8qoF5DewusAjcK9jYTLxG2fqryKEZg3NitGBsnPz6aMgZ18coBtRy79ybdFkEJ9t2aNPCnBysnVoVqi3mDeLPa",
  "key35": "2N1vN7aNvPzYuCHvJc1kzk5BjF6JQxiemG7kJXjL69dxrLwsZq4t2K6p745LvhqWMAa8cMUaU29BtE2ZmEAwRneN",
  "key36": "3BC7a4tSKCsAvjzoPuzhRuHo9QEveWsUqhAYFAf3FPrachXh5AtivNpmXbyp1XPY2mVHCuW1rSkcgiJDrZou997",
  "key37": "22sm2ods9KqCumBmYjSvn79x8EDwWeT6QQMTzad7qTaQDr7cKafZDebFQU8VBM3hFZB6zKgrYDnvwPXufmor9Bhg",
  "key38": "GQp5S2NqZXxUzansLoYHUBxrHp2objnjoSK1HvTUbZxsiU7deSr8mxB1pDAc9FSMfyRufJZoqU99qehdeHesh6V",
  "key39": "3j71isRvQCEMutPG8NqsrdiWymskZM354y6CyN9ASpxHympbcShko7kdHHYGZ79RoN6Xsymmst11CnRfkyHYQmLq",
  "key40": "63nTDKUkwcqZTaZumpe8GvnfhPFeiHiMmtsPn9KMcgwanYPXgM49xzVFEfjg7AfSjFzbaaLQ2nLLTjPWLvYeqL9P",
  "key41": "4j64mcR1GLriLMaSkvUVMu21BQHUNSu2Z2iTsS8on8WMxg2HDscZJLFpqGsQWxeRPtoeZtuVH98KhHNWa6pPPKqs",
  "key42": "2hoJJj8P7HQqZu79Fa5AxPypHK5ai8q7ABhHbvNKFb7m9umb85rfRBMmpLSJj9Qk9sVV3CCb1wJZqq92xpNb5YJf",
  "key43": "4JiR4CL24PYwaydBdR1Z2b7rcA4DHQLDX4tEy3awcVnN3Hs1gzVAtyrms8nTb1MW6CxWHGxndLYWK5udP7S1h7yQ",
  "key44": "3cmSkqBXrUsiBvG3AXhdvAMo9pqrfED6ubbcG8pR1mEyf7NZczUNxrwyWiQ7Bh54pDwnj32VZnS19TU1avdCw8u2",
  "key45": "EbbcM7XjCJyYdLcNf5huj3KDCxY1o27R75mmYjqGwVYcTFmkotAb3ANETb8FcXnd6oj9fZKbQpFA15Pi6Mb5rmV"
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
