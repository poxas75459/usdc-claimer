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
    "28hxz1ZRkeQ8dPNTJpxHLuJdWBFDbLpJ8RdVPuRssMcAp7kdan5q3V4FoLgEmfLPyWz4fbURM2MhZfPEnDtKYqnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zerRhn8b5uM9B7sxU5MoyJUtb4JvNPM9eZx5tPqM8bjEmXjGeYfQDDZ5jsfUYfNL4tsrJ5kE3YaobFyYXXCxB12",
  "key1": "2geMzmnhqMEi4xaU9PBP5KXYRoje2pxD4Y1BsmehtYFD2UhoG384UGqZzqsVLojQJo3zymowucTfodCsZum3v7am",
  "key2": "3ApnKanFQyqHsmTCJhK9VwyzYjpAPNKSzJZM2SRbkg2M8j3vQnWuBpZ3mBAfGPDX9TwaDfYAqo5GHYRXA2vbwkRW",
  "key3": "5Nt1uawcz49HU14D2jjV5VWEgtCdRBgGPN2srL2pHycyg31abSBLdvJzFXeJy71u7jQCWKkyZrh1Fgyy3k4qfCYg",
  "key4": "MgJDCpQUiovPn3jjK5MuZHrnrRg2PcmXD7NorSvgZaqf5RQHvrHCsn1CoNHEHm1BpV9D9xHtHPvR2XvpKSUZ5C2",
  "key5": "HNf9n52ao3arUakzWDe9Yht9hmSSaKMBbFoh6xRNjhNdsmaDCZR6jAfCfFiDcDFiNSFgFj6Lgi95tsxyZNKFosu",
  "key6": "5AxLMweczPoBUL68YPn2tQrpcmB6gv3s4KJok9QdGwXYVnRspVG3XQpYDrsGpWjdApeqRtZmSPZ9zk6PtSZbLA9w",
  "key7": "isFR9f7VXEESYPfAQsVrKB3erob5URBZGMowcQ7i5fYyPA56TbTMU5APGW9vEKGwKNZAvYBGtJW2KbnEnf4Uojw",
  "key8": "5JMNK6LzJ2pJPHARhExmaETW155EH3GtpLAtEXnVmijvbBtdkvyKBYLq4TZr9BwmiyNrB53AaEQjTbtH8fkbz5Md",
  "key9": "2N2wEXPoS6XFs5BqhDcfrPGDsQphr9PdbkEe5BLwkXUMnBtPXAwfy9V9Jw8vp9VJjfeAEXYJbUskPsDo1Vx1sEEW",
  "key10": "1MbFp2x2sN84Js68BB31fJ21ZVBWc4ggS4pC45w4HAqkmgdRKkwNK567981s9y3XffNnk5FDmczmM1MoEH6vRMt",
  "key11": "52jrci476udavBCSoB8G18ihz6DpSehenEtLgY1Xd5k4bZm7L8hG2SmwXAz7LecJQLYddGpsjgSZoDZvpepLQCCc",
  "key12": "2cXJu4nAJhMnuAR5ntJRir2cuvaApNBfWSJptBWTq7SmG7uzvDCAjzzdkTrd3afSibXVt7EbXVYGZ1PSv4TQ2VFq",
  "key13": "2UYSyfdbxo728ENQ5yaxJzGCPcF8ZUJaippecsrhRrqF52RmXE7tM3uNKRiYGn2gj9N8wpWkhErC3879BV8LdLYT",
  "key14": "4nLJVJ5vUDEHaoBfLg4wrJd8P2uCRCBd2bHv2chPMPpmm3ut3bK8mnuXNYBwGrUZePiEwRF3ZASxYsB9V7Fmdz2x",
  "key15": "2AmjEKXrZYMmrZ1FXKmQjdJigpugma5bNFrfFZcX6A4sWy4x6GMtk72GHUw7pR7cZEKe14GeBEkQpczfF1jTmMZD",
  "key16": "5mtRM4u1yMTCSE28Cx1hnZyEdGfywRbeJtU8Htv9hyXPCtWnYKehwubyP7Rd6X14raveVsESY9uogrSWm9C8bHQv",
  "key17": "3uY9UvffV3eVbDjdKip7HLDseoS59dUw83ovj1hAGNKpVvqxzxkLQ7odHTB82wq94DzKbuau1p6KyUHhTRqdVHyP",
  "key18": "4cWK8GmsMd4isDvhSamANDbeFUcjm1aLWoeCFRmoNHT8dMvYx7qQNY3pvA15smkn6dgSuGBuck7kFRkN5o5XfCdY",
  "key19": "4otpZqy3upDW8zzuT739papDQDns1ZWEMFV1UjWTmaTEbu9v3Fo9uaFUNsVYVVkdZCqPkiyUwQKa3LSRFvZGhKeF",
  "key20": "pP7U94NKhQfGCPMR1nYvvv2LVRdFB3P3MM28Bj6Nnqb3eSaoGEH7XRAmDe3AqsCZFs6vy9oZzcdhQ667iALGa9A",
  "key21": "RPJxDy2wzk9mUU6b2jjSj9oGXkfzjp9qb2DfMwokacNwxU1WrADUxDULcJcZkmUYAYvZHjboGjsXeWUUbeDGbut",
  "key22": "2tATPeaK42jfoiNKvayDQqee5Cgb23Atnp5tvJwxw2oUWgzmsTr52JEfzYiPT53qZzvtnjo9YijLKvytg92Emqy",
  "key23": "5ALeC9jE93JZqKsUojw6HTtYS1sXsDF78vuNYSuZczHko69jvWPthfh92py8P2AmvRwmSK2fQbAMUXqCSp64vBpH",
  "key24": "oWLYpz7z77zoETHrUEDRPttYzMUXAeYCP6wsXUCPC4HgGBR8pgMQAL26AakgvJ8sADAdmr55h7cHzT1qFfLcQPC",
  "key25": "WeMyPvsV7HFVrRyRQ9xS5utvoaPYGycq3Xq5MdvGSvaqHmbHMvXf2J3YRYJHfVf7PcheqsSGeNFQJTdpuZoaYmN",
  "key26": "4SrhDqcMEqEvFiaeV7jwJiqVSeR5ggUymHgTsMJYkRLb8GLkchUTuEt5w9Ex1xBSeqGyZJvjuaXiSMGina33gNPJ",
  "key27": "qtoRxEYX6Z6sXo7TbF5GTyb2rvEiBsLyWN1pDnyafE7HdXG83vzSZr83FTa1WcWLAXT5ZJEkYP7GRpoGt3WgCiX",
  "key28": "2cJmWVjJB2aYNv6giDC4aVn4ZE6g9mZ99CexEVbPQRKRSqvm29viQYh5gVeugHDSRU8VxojUEKVFJ3ZZqtu7Jusz",
  "key29": "3nYB615A9NnxKn8Lf3bAzJmxXGqQT7raajePYmZibJ8VciqgvB7Y2RMcmmqEsv2Wavonh2JUFQwDzgCYioeYSEWf",
  "key30": "5xbsGByMn7oDxGRj7uNYtvbBdmwsZ9A89rQwS99mZfBnyqAdUnLVXB8UD5neFU9gBbAx4xnncTDYAmZ79PoWH1tA",
  "key31": "4L9YQBbQtR2zBkKNYCFSZHmERZzdp6rRG8gghNmmuh8yw9sLGcTmNKEtmQXFUt674vCjKQqKfHMdqbgvf9HWGJ8s",
  "key32": "DUiHGonxyMmQ6d7fQzkiMeXGR1keC6j1rtfkaPj4z3UkrBUqv6EpMiESFugYVEJQ1tRmAxMAsngjWTJLc1Js42S",
  "key33": "5L9xRePStT1xifnwbB1SHEBuaw8FRmSTMY7StS3FttZmfyxRaZha4qYQD4Q8XF35xUbeCi68jKgxu2gv76L3bMt9",
  "key34": "2jzQtymFbcwUro9xt7CKuEnbvbgv7SSWfMnFghiCkyWxWjhFkRs4TwySDscpAnnpdkiufDH87hE6QBeKb6dd4Dke",
  "key35": "3pZSP7jrNpoeM4kybx1hwbzYK61j4jSbSappaVerWDqsXGJnCGnHCYNceyv2JCjzuSmoeb3UZ8jfC9RxgGWpiCpH",
  "key36": "3fHfd5x7YMXq3HX6xHpuZU1sfFTCLduEoJjxQadowcGStA7CFQngqWqVXQpcwc2UpJo5sQQ7hbLgYmGAR5bbdmiy",
  "key37": "4R8a1GQun8ZGSHG9HyFvraAQZs37tNYArKej1gaQJ6ycvjyNyhvBTdU9d4sBxmK3JZ1NCHXGcuXGYitjG2sxGcMV",
  "key38": "662cRzjjcaJwa6UpkhUX4R6FTVYrZPiV3uX6nV6Dccs3Ad8UoNekerBUrbPmfmGtD2wphyavPKjC6byDThsYsGPp",
  "key39": "51otGEjzk6Lunp9hMEcVHRbjgo563hkzZ359N14z7Dd5XZnyiXWADTATgEpGynuGa6T7DrLmVrRCa3kLEb9avnjN",
  "key40": "4csn3GkPx5JLPCco7dW2t7PAn4112zXoRETwhuWeRFQUKdAox1xaTHW39x6fkCohtvqRHGy8NxH4dEHuwXdY14vC",
  "key41": "3WLJWTpiMmqz3NktYGpZcvFhHnuyuHjy4UT8W7EQ2gGXSUNc22ymN6VR4EkYxHGPsXguN5erddrVSbVoxZTePXei",
  "key42": "27rpfpyT8wqwEnqxA62V2bQz3bFWKodfNocYZBTrSjgTH2fNcXrrEuTXnawyzoPE4M6wvoTYjQMptktQy2U7bApo",
  "key43": "4sf65iPLxvXBqe75R63wCKux7s3uG4SKAG5Bq4waVBYubnRkX3RhQ632vfeGxu2QfxUfUz7uDyQc76FsFTNwjVFG"
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
