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
    "4dmUbwQmDyoREVLNB1uCEef248BVAWvR5kEKbCBSRjxJE3YHE9oPrJ8bJNSpunuac1MvvZzwWPFg8xMDnTeQRvsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j2CBksoHn1qJpNuV6eeZK9hCTSzUXxz1gzA8aTbLShzZwigcVRQgABxtNTYrgmTQd3jXpV3YCvsgnor1HZC29sf",
  "key1": "4FBduPDRoBLNiBtDZJdK6xHTWKEssDHPLTBX8c4F3DKPr4fhW16U64brvK9Vub4uD1stJQaCma1sE55DK7yMQkF",
  "key2": "4trjEr5dpgeaXEEpvrWV4xX8UtDskQmg7AnD9cfc6AU2ezKLTa2BKSyw4cpkmei6Ce4S9VjRQVrnRku5ZufqFjF",
  "key3": "3c4i83pwWRemA6HqSsnUHkYcBqN4ihgekz8sWkQqrZfMKFVaqrWBMUExZDxAof1wLLG4EjetuhLq5MWao1AFDUrP",
  "key4": "2CCL8MWyhFW52zY753ZShJUG61ouyogYxHnrg921LFfdezQ3NYEZ1XzNMjo3FUjQEPdHwpE11WbqYjiiqjXtjhHL",
  "key5": "2S6sarhfgQP5dmdaPR1qZf7haGsN677MpYdmDCUMqsauSYCjoVWY3FLv5yKysN3A96exfTK3Z9pMQb7nRoEYUTuC",
  "key6": "5nd4S4kdi63e89Z8WupaSqxYm5pSU5Y8wmWJUFPBhdHAUsZnZok8iofRin24cqBtwBiQvMsGt99j3aJbUSH8tc3",
  "key7": "3DgEze2PP2QdNPCyVvGxoRrRDMLLKLr3mq5fKKDxYodbwvynKxNEUL3nVQeoQeYkqPZQyZ4BqEgNAqDmm2f61N6H",
  "key8": "5uRNmqZDgNtrQJ58LVTUwtajcG2pwqtpeX2iLQ1QUBCsBnp1mAaqhk1Y7osd2DQkLLTSKA78FHC9NZBGkdMgioaC",
  "key9": "3gP4adR4ng7MqJMbTzGG5HX3K1yNrhDLmY1HCNHmadCotn25UKxnGdDVoGjvdxJ6Y9KQZ3VWazCnH4hh1buAYbdz",
  "key10": "2QuoxtUs2hV5Adf2VHnJhnD484jneZeNG4Y4Nrwka5qLndnxC4C6VedJ7ve73sZmzCoNNfSfcUEKmCPFGQ7kMoyK",
  "key11": "tBbLBgcNYveSo42xDPytBEAGsTqxSQQtcrcWSAdYVs3LB47chtEf9bGUShgJQKEMx2hMMyi1YSUYqxj9Jv1DSkC",
  "key12": "5fZe4ndfGVTXsSP4ncTTSFJVn6CDSgjrr7s2kcL3gZXyVuDyxTPKJghRCv6cUCPfDf2kEz6y62uy14KsC6Fonc7X",
  "key13": "jYsDaQ27cKk7yff2FtFr7zjDPksmL1sjbwpR8ZE5VafsXonfQwUqKvUz1BjjerZFUrogAxXjGV3hRoAQn9XoUxj",
  "key14": "WGCASkfZNgq1f2yBr5NFEE9rYcRVQWpGvmKRaULCXGkNgrjyaeW9eiqCLcjuyHo1xqHZ4DvKthtv1LzBtjDWP8x",
  "key15": "3VE4rT5SQ3Xm7oQ7M4f9DZWD9GHnxhwUG73j1LmxzyJmuzwYc1Ypo7X4T7qK3mCAaa9xQKEKCgrPckLTgDznPDCi",
  "key16": "9wSYKTzHjdkKtRF2Z2P85Fduui8RS7Y714WHTCqYR9nYRWHtPHtgrxfH79DQb4bhkhUDfdtvmjxRCmH3Wxwr6ou",
  "key17": "5pncv8K8k34wQLjFYbFjWSbRnj5UVyTyRhCJR5x9cvNGNiTy6GvMD96KrrxccfjZhU9z7YyTBVggzokTUrpLyGEg",
  "key18": "414dor2JFp3wSBRmTdykmu49jmHrBz55hhrqM5jiHStS3MRRu7nCiLm4hTKj6XQeyakAgo74UtZGkpnxhzFFZ8rG",
  "key19": "4py4gA2tgUk7t6CZsU3UPtSybSvVCgiMsDaWVqQU8yisYun4gj7koP9iZg6XjY9DUPo3AGuec7gbWRRvXPvCmT2n",
  "key20": "4tGmoXw4cc1A67R4UYiAJFPjCioQ32LHwG5EXNqwbTmoYAvcJgE1UcaQPjJymiLGV7aWKWW8mnnfrRQTMTSTKWcv",
  "key21": "3me5yWWKZpgb6ysDYDFS5u8csNQXxuccT1TZNFmm2nSiDMnVj8HM1pcBkSVv6fdgKY3Rk4gnPiwMVdroXrkyroT",
  "key22": "3G1AQ5hDrivq6f1WLpFah1MC31BiCqU7BZfraDZbok8bhb7so4Xq1htGQz6o6tFQ6jNZwG4ZiJy8qYTWjgaBWZbQ",
  "key23": "5EcRYWZmEf5CjhaP2NZKX1xazSgzJA1ARMyySpCiJsKXhWL75Sx1gihk7eEFWZmjpM6KtkBz9ncWTg9jnE15CQt1",
  "key24": "5Cbdpu9oiGtPDnVX7NBmKgsRJgEY8m4ijzdfy2Fnf5JgqjzmXXS3by149RQ5Jr9aBtU61iKUz8u5ZdEd8XzhJ9Pp",
  "key25": "4ZoBNJh7JYEDr2n12GG3AdPCXo9wkPtwj8gUMbFobesE55k7JZDjCqMetpX1oSd9guBRSAPPcRHEgrnocKAG5DBS",
  "key26": "KZyz1gvHuzJANbENpF18Mgs5uzNGC1gcYhfv5SDqCVkMZFFHhi2H5isHifDsdyqmfJ3HPK32Dquc6aKrZnmXCGE",
  "key27": "RZPBuxFivRhASy1Zzg9rH1V39V4DSC11Mt9k2is3be24jpF5vvr1gAsL2grM7fPZN2zeytmzpoWkTTGcziochRG",
  "key28": "2LXP4TKDCYBz2Bi6tjxLS9CHjv25EG3zZGJpT4PLM4H1dvzvY2PUyXuc7gcJ8QpWpbrHivi2KmzizaY91M52g4xw",
  "key29": "3vanyTJRa8BvDNL923Try3q7qxM1v7QjB23hFGjkpym3WkXpFfz16zrNSxEjzaVJf4nYY5JK5JixcgeeuAAPzzv7",
  "key30": "5NgnRzky8RDFExVYuZVdC47hcSEdLvuw3UMiYRtDbhZpSYDDELN6xKt8Z5YTzTAPfXJqyz184zTVg6Bzv9THMBjG",
  "key31": "2d781oYXRgEBzG58aiBbED1PrTv38tmZKsRsLmkfAmxzgpKyH2w76i9VuksAinhSTDqEBcXemVTQH7MXkDxjFKp1",
  "key32": "3cftAv2Accu1g7dNzCvKCbMMzUZxcE7aqnRf9fH6uQLZQKKjxtEV5JR5tUkurhavYbGo4agBvL4ck1xj1nqUQhwv",
  "key33": "2ofwBAdAkCUsM44z4ULdEiNywW1QzByVHfK2X4uG2C59RWg9QgmS1LNSApnufauDkjt1zp4JPnZ2LipcoN6ohdNj",
  "key34": "5ZKfpR1WVuXNxwGF6RYwaYYUvESGn15VnuYjJKtzfmQrSU53M8BGPh6zdqGQYZDUw6ok1TNxdRqfCJzzLHqrTmfY",
  "key35": "5YKcVk3owDtHsawNqu4C29Qc3s3PNH1GNkBVuTYLj6Mq8FuSnuNn9sHzz3X6L1F61MJ5faEifyBKgk9nTVmsySJH",
  "key36": "XSou9RYyWsBvHsBy2DyeChuHc4Py7WqvtfSy9Qf5V92AjLkyAHTBSxtbuVEbtCCr9msGvRGjmeYGZLqLjHAfHBb",
  "key37": "4NqUyeqKNZ9vftVQLdNWuGzTjKBKp6y3gSBpHc4SdtKvhFqCb2s38jyVLFayj2xEkcWJ1gCQws3qwPBBwYornZ3b",
  "key38": "x9eM1ubFmUfiAr4XG6v3fDVY6hDYaMSYFuZiDaqJ7WTMynCbJY7qLXe84F8zaN8xGn76dkvTwXyRLbmGo3xgvK5",
  "key39": "2j6L6qXhkUbvaJSN6bTbsDUXxKsvN9hyG1Nk7ZrxpN8PQy3UU9rMFqippjCdbegfqcQA2FKthMBiCNusf8AAUYBF",
  "key40": "1N1anFsmiSDQ8k3v31eF5bHzuYQdWWFh9RxDF8ps8TCGnCkivXk6GYpi8BcGaLSgjZCtygDAiG5D9bRwAaW5eNt"
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
