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
    "2TC6BxHvSvKwtmjH2xSFEGL1udYZ5C4sQYWKrn44pgkcvqyGkrSzjfd8PKHPs53e7LX9m5BQZZXtttnEGULwu94P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AMt52otZ6KyubYaFtZjfEiLHkXvob7xyqYFS8Nu6LEPW1aDpwLDcfD7sjFzkYRKyRF7bhjjYGpg7yRv39hV2VLE",
  "key1": "3A9FxFroBZ4cH8DHaXc2LXRtghfpCawoXqu6kDAkpcKAu1LiH5oyng8ED5DbKohiJqHxjpPBV36mzxyexbcscu5i",
  "key2": "4EW2bALfAAPqu1CfHwgzUxabgT7NueGV5UeG8jWMKAis9KmRLTUpv6NRjpStzfSioPp7dVRxZQgkCRYi52TDUw5r",
  "key3": "5c81BmnrkDjkHBz7nXw8UfxsHoD3zKhLBwXwjcT7i1dUeuuXzbKez5KQtpocBsnwGqTuj1mSopamXVJoQ8CLQGQt",
  "key4": "4PRQiR4d5YeGWH6Ruby487oS6X1bQovj5Cnv5J7JAq4UDHJYu82z7YuYHr4veEAtdZhGvvqsAtYw9KyfGychzyRw",
  "key5": "39wW8oCQy1m4K2xDwy6FRveBjY2Kt3SH72LsvUi8ZTPoK8HXmNe8gzT6bAFZq8kaqbfV6xcrCxE2Qu4btqczQsce",
  "key6": "3Bj6TP4anaah47wSqGBCbtwKPzMTrXe4izPpHpVFPpAti1YXXfsM34ht1BPjrUUCHj4mxEhUuAKdtAiQzSaJcBGE",
  "key7": "4gRiz4sq4UecTt6XhhQYjUGfzgGTh3KG3nSmw5EuJq6VyWcPUy3ZnZY1vDzsgA9vJTr7ZVvVaWVeDY55d3SKdsQu",
  "key8": "3m7No5vAYAj7vhqZ1MzeF7Ed3ykm2XhaoWoFrzArj5FvTY7wdFXtmcjCcLtjVLQuHPdsyjHvodXqdzJtvFqmAyZR",
  "key9": "54BuRiDbjwaVzt4zy4qgXs9E4udKSQhUCtaxDqXTvHnHdtWXPDrQX42smL83dNCXwNptLrgGdYB9RDFLJXjdJJ78",
  "key10": "3TfoXcBNr1Mh1uCaigofUuxKnAjBMRdfEjXpAEnDjsVsG4Y3o4HN5byJmzDQEcDvL6M5bA4xtU9XDJ9XrThJKD7a",
  "key11": "2nV4yNQ9CxanymoBW8NnbotDE3SYEGHz42yN1LL76vdUi8bNj4AmeR3tFekUSd8CgRgAz75CaXa8g4FeeJoGqVxa",
  "key12": "38wHU4sgiLRvVcA8EBNStj9SEW86wMxneDNCJqsu3zQGPDQLtJ3DKUaWLKgw71XYNCTCZ4wVmDr2kCfm1fZCBjGv",
  "key13": "4XC66Zfw7zQPQzydMjZJrWYPNjoA8GeUiPFVF2q3YLFASEQFXJ7c9zuxRRiCPewGxu84VdDjThQ4vns49Ccg7WKz",
  "key14": "46BqYD2Hx6aKHMVXzExehZCMu9Ahkci91GbYfFtpQvtXrwE7ux71p65CaEZjAx55z5QA7WHfe5Mrq9CFKJMvb28n",
  "key15": "38yVzH9hf3Cjj4wzdiFAQt6VkgRvgDSp12KLVvmqhNT5c1jR3TNrotAw1uZoaWHQjjsK2LrRjU15UHHLPEVsvLUa",
  "key16": "5iy4XjeXBeB2MmWAYsx6r7LGZ6iP7UYDG8B8RQe5b8qLWotdrFyvKLsYDE68J1rPSbNoK2CEsMriCEuUmQpgUtVb",
  "key17": "3SvZVg9yxqqXhTRujQ5XxeT4ugRGZ7pkdm9awZJ5R41v4sYuUTtaKjVGTFXasZSu5QGAri5jnxXC9woFjaouKw12",
  "key18": "22UDzUQHnr1QA1GV1canPxvrDanBN4u6DAV8gosJex2MnfQbQ4Rd8apnMr2MiZLpkAewbTTXqcN5xTv8aUsCSFRr",
  "key19": "4eyP6juFUTb2gYW7h4Zxve4A8zHD9oeZ9AijJ8ktKjV51dheSZ6eFKRA9t3ecNSwBq3RJQqgFfwGc9uXWQweiGx5",
  "key20": "5zsGoPNLvzUuYGQLaP5MdUpsuNWbKJXccEDWbPguyGKsDr3hrLc4uKgBGqtkM7Eym5Zrc7zrUvYpZBkEAEXmqfb2",
  "key21": "4tSBc6oSmC1FWV3TZfwixYBjNhCdzyBqQ2XbaohR1amzsHjagVEdU2dr7cjaXersFpiMD4hVpZETs8HRbAuWbrJy",
  "key22": "4Qy4paxtaaY8UD5K4x8tCnD3rakoUSJpUUoQ9MxRKsTedWz6nBfVFftmRRkCdL9JtxtUxxiC7pNXJFSxVqVyA9UP",
  "key23": "S1kLiQe93cnzcdymNQAtZ34U6Jqt54pHyFx3qFHTAzkhAYzieWkPW6EyM2832iPtWj1zbxw3yePDaE2XmgDxgFw",
  "key24": "3TSCVYdTDXPzQ8FUeNCxDk3rXR2BF1dMRTwurL9G3bnx5tnGgLy9xWBhiDnTyXAAPQmeYTX9Qh6HSC4cqQ7Ex9Xf",
  "key25": "HMYNd6YrjE6jfm8dBod8qonwYnzcjHyoEpBuHhUNpi3Y1D34GjTR7G3YXPJ2MAzn9gFigw3oiVmskeMXnYY1Lx4",
  "key26": "2sBjKAM34vzVBeg4gPjiSXoU9Mfo6vrbExyYmWanCCZSSdLq4HyJ5dpYZLbUp3mF66sD2xVcut1Pwk5VXeKy79Pq",
  "key27": "4nQnUQUZCW98n6LrmAKhJxt4hyZnf174GaPTnTjWKqb6qH89x14SeFtzABP7hygkopojLzP2THrxTrf3LSaeLtd9",
  "key28": "3uUeYWxAdVBVdZ2inpCPZQHeMKfTMwSNKTQV8rcsVNKa4hsN4p9DgrCVsWaM4pJkJNjW4VLYgcgNfGqmwkH9FZVR",
  "key29": "2TqP81E4UMyzf9WTw2jfiZMEQGrZgoUBQcYFw32woFhxg2dKs9absyn7fUeBz9ZvJiMSBV8cFwCCoeZ5b37tPN5b",
  "key30": "3RqQrA6AAC7PTW28nVxkSosrKzxSt7BiwhgNZqaXgrWKHywiJdk7VBdwACXZAZXJVv63PkPChkLsE8zH8vW3bRw4",
  "key31": "7aS51YuywZW6ER24k7fypQUiaQPPE3i4NJyRAhZp8C8s9RSngZZHvozuW9hx1m1NJ4NaXJCNVwqSBUmRqNsLEyM",
  "key32": "2g7JkLkWxG9XViXwA7LkBjwhidpA3i1ugFFKqYxEtiQBJAv8MNkrZfEzzSAiwPyzZdCNVn7dwc3HBWR4mkqkkRnQ",
  "key33": "5M2wPp8m7nn9A2i5b5HkMRBmfCiDTSgWT5WqPpE9dBbvKo7vY4dcZ9NEugdMoVA3p4ms1Aw4mwWEUVJQGSJTTZeU",
  "key34": "4inZamJVF6zW9B9ikUB8LaMDtHsmA942w8uNuN1sJQSXZVtnqUw4vrhcJd1nsyGCvt2NgSHvbB15iqTTzHaC9cZA",
  "key35": "BqEe47pM9eLyz5NueNQpAnqDczHKF6v6ZFR7toBQioPd22xqtnPN2QApjgyvSDAd5aErFED84CGgfoGVEqi2PPg",
  "key36": "NSCtBgzydpwB25sKkdUf4K9sP36NFuLBCV5dY1HfSgHn4aryqkFkjR9evchmFFy4SXsEV8BVpdCktGhS8sgiYBW",
  "key37": "4jyep42nVkTk1YwxhZCLN7hCYnmDvP37f99nDDsTRZyki7GG7bRrV5oZHFEZPAxh4FutK1rQ3euTY1MjufDSCYjG",
  "key38": "5V6cKPMySdhx92AAh62abvP4MRmEhaUXKLdNmvTTMAdUZPdJJigLGQDE4hgmwYxfgmuWPYMF4qdM8BoHjL5dwcnv",
  "key39": "4ev1EHBN4MLsLQ29qvy2Pq8a9AunmrMFQL21bVdqy4BLE2JfPu1TcgcegT6yAv361oqYtWtzWLcMWu7Q6x3eywTA",
  "key40": "bDfjYPjmzTcW6bnekLcgUZztd7dsgCnzmfi5otmc99AMKenxVQAoMbGA3onZJSSWtL6rez9jDzFrpZkSAD5NFBK",
  "key41": "3dqFCqZHV4kDxDLCzKJDah8jhEKkYfQhwo1nx2K2g2hsoVGeYzC8s39nymrs7aowCxn39tF3ocLZGX9K5rqpmrwk",
  "key42": "3crrFD3J6JA2vD8j2dkWQmnzSS3DbHjZwJDe2P6GXvJcAWYUeDizQaMEENjm66nZjYpJ6pRPFh36zjwYjT6Qe3k6",
  "key43": "2s8e2eyzYZjtH5rHtVApYf3TFnGNtZRnRC4eKGrVWSWMJD3x9Viscxjckd4w12v2BytrddkVyEoL6EDBbkfABXoD",
  "key44": "4EXZKs4oYgVVNevRBwJDz4eFB8zAJdf1LvFipHov8iDJh8fQtjKFSj5BpjiFZraJD8ZZuQsQNZ8QqMct3d6WrnbE",
  "key45": "5p66GLmLtfEMeT3hgmtQUaoV9VKui8WLZqQqHPCp4QfVXZfPgJGFroiLGmKuVwpWZ4AgZmx58wAY3zJS7cVTg3Pq",
  "key46": "2eBgXT13366xUfXSVbqHfe8UAvGMNZA1sNQmaQVgAzJ1wveDdcHqXrzrv4BfHeeBH7KxHfxxQzyuAA9jyCqtSysb"
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
