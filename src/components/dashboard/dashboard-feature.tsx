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
    "5Tg73ehyKPoPascakbC1G8KpqYDaBJLC36gsw2A3K9FAco1NJG2K7aZACR5zLHiDuUnW1aApcwBk8YKj4TCY8wCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xLBb6f1BhndndRYhBbk3RxXz12fdyUb2SH2vaf4HsgSJZpujjjU6P7BMWKxaoQMyouQFTe1VP5nRnyizCEqHEW",
  "key1": "33aSUv2nHJKunUBiqnPGT4RuqghcqvLAcUekGBrDB6Q3b6mpZzd4A9JaXBWFA5e1qkkgyW5mvcEg7g2oCS6Ntagv",
  "key2": "26J27vZu4MvwWdR1SQz5e6b8RXun43FyGatHWDkhPgv3HWsetPuTvDRnt3PL4SMzWWsU4AH2d4XS4vPrrYAH7v6c",
  "key3": "NqCzRJhj9NPt8WkvmumqoLiNhFAtRcEYLwyRivGPnHSPuBa56CG2knWYQ7MTWP1tAq1CrqeXTvSYDwF81ZCDRSe",
  "key4": "27XAbHKymMunvkNuPBNb5cfokjKHVWNRLuWULTeUdogU1xRwyybeQ7PgMPLm5BCrEVcLGXdhq2MM1YPGXhFCGcBx",
  "key5": "3F3dcyKvL3c5JbL5AhDMnTeWLdTA6CbV9ykVcYe4MqnSxpX9odQFcQEwjEzh3adhxQoKh8C4LygLK53N6W7STWqA",
  "key6": "sKE2ojDgJm86sMk8cJMwcMrN2PQLxQHTEfMTWi7RQBh3cxEmyL1S3uxHfQdKYoiDs1T7TnVRRvjHykuYqoLAF1Y",
  "key7": "4eLsNafbpMSBxyUtRPAjtdzQSAaKwycQatNnf5r1YsBGAayon71KpGv4jWgk1ygBr8uccQjrndbDEvQuiVKw6yDp",
  "key8": "2i13EumwyDUBV9h5KSVKyrZa9VEyTRDVkKNSZw8yLcSqYsQPGUDrtudgevUKAjUDvoxfYLswmXXesxwgV67BUtcx",
  "key9": "5oQuQDatVxULts7qWwU1bhFhRf2vqdf8zW5thWh4WL8L2Gk5xVfGyknS3SU8gePdFm5kTAx1ZjATSr2pb6P42QwL",
  "key10": "3oQXVxRHdxzMyZSgvNfpL5zRJqkkAstBtzVXkS7fMj2eANrFMRpLH5cDZGCpmReoHc6urFZwgWWTCzdMaTbaHDe3",
  "key11": "53TdEZ1R8fxGgcVJNphH2872KCSrM3vX73or1wQUxc295BoL1VwcH2ZgfieH5fDm6LcKfk8eYEWVGvbihNzgDZF6",
  "key12": "A7S2hAP5oWACpidA1hACiHYzptKgYt9s5sMEq2PS98xvkKEsNg1LKbwWXJMks5PLsnUJzqMgpFPDJ5UK7Bjo1nv",
  "key13": "34s7zieLH8VZUVFScsY6CAchTseQSeTdZwxCbsPkBd2BGzHJWVnrs4SETZgUUDi6tXmcYkm4FSeGpQWustpwjyW",
  "key14": "YymYNiPA8UtBHAEedyoF3XLu8ju4pdzvZJdkXCKbY6GyXtK7G3vDAgbVLUfyLmJknqpuy2P2fHCtucAxqYychGy",
  "key15": "4bset4wufSYfvroWiWXLNvcVzBFGzo42xjZnymGAvh45Pof8ZxYcZwjdTJyMsxdgcR8YQnWN5GK51zYGQCqeVB7e",
  "key16": "453E2koA3PxzbZygJ7UPzQKKj9unGMS24gCcix5XHxdX6z4AeWhc7ZK1SF6D8bVZm81fcRRc888hgMiikZ7vyEem",
  "key17": "2VkDyAFs7uYcaSbJRB3q3oCmS3Q24XKpPN7v4GC99W5ohkK72ht5txV1Ynn7u11tVXz7oGDvEBjLnjpb5TuoB6eZ",
  "key18": "2C4S5iDks6YXN4Egy7N48xVhAgnSmP9E3JZxQ4j6hkLPuPR6aLDKFhVTQh93e47Pm3k4BS9C2CohSTrCb3Z3w2pY",
  "key19": "619oU8MgF8WC7tgL26wLcno555mW2cCAYNYHG67gq16bcdRE8BYTpVKdLLq5zzzAH5GAaFFDGxURWti31Uxgm5yf",
  "key20": "4PHP4cW2uuc4c9sDg5dcpZU6TMtZ465MwxYUUY21h1U5sReMwdMkM8wQLQkKp8fhvAT7u8gEgRRZCha6yV5YGTRC",
  "key21": "2GmYfzL18Tr9tg84o6pevRYx2yrRM8wjmkiN9WtEbwBNocaXRpESFzuQRMvB5qvPN8q6fNivHDSpdBC6c5ZobSKb",
  "key22": "dGMoVK3Y56TjogKRTJNeyovWoFDAQ4iURAXRPjrTpGgSLDV1dLNdvy54FEsJ7YPnoKMEjZHr3b4b5uTzBfrK84h",
  "key23": "2N36AMuBbge9XffhrqnYDyKdhiqsenncAoZ93pmFXdnupSTfSWhKFz9d7FvcCwqURpAjeU8mrSE7D6enPo5KW6Sp",
  "key24": "2fJMUaZ735SGKjZYfferNSRMbSskkvGxH1uXhNuJNeAnfxMDmTXNDSTEupiNBw4vQWxQxVe9TRtFsvtaj1mh1Tci",
  "key25": "3Tce1fFTfE8Vhmpe5ZSXqZrU459SwdDKCQpM4Me3XTYKmLjHVSEKkyaSQdFPeBamk66AqVLjkbWYrVKNygi4sM6g",
  "key26": "3Eyh1amahL6U7vr1HeJtrx8g2stvYnKRNPara2CRqjZEzT1wgYCq932gmNuKL9RaTpjqdBGM1ARNhAfuZ1it8RMY",
  "key27": "61BcrbGZ5TYuh2QXFx4fFv4c9fRajasputphSr75jtxFBrPnR75cMoYt34FPjVutGJdPUs62evyHxCR2STiRe5d3",
  "key28": "48vZKCe8gbFDFrKAE9Mjzp5F3SFiX1VoCjmdsFHkY9ua9HCXa2h4QroVVMvd2XcUce13oRs5rab23V2LYBwFpW2V",
  "key29": "415U5RziCwxGwbpE4aYaGb4y8ayiK1pp26ARNtYVxN1zorexdV2vSCz1aCuvEDnNKibDeNrQq8f3sLEYMqmuW8Zf",
  "key30": "2HJuFznMXtfev9EKtfRJrVa1vCr8ddY5BFuMWDGf5ZPjESWvj1mjEf41Shmrk5fn3zExbG6wr9KX4BSavFxHpnKq",
  "key31": "5hAicvDquivdQ8zbNZ1srQEF5pxKpazY6WhErf9UKX9DG78wePRxGj57RWQaW1yKo7LGvchQDgUdc2CNjc2RPHEB",
  "key32": "4ymygrJG3pFj7P8L6NCgQmtAh9E4cYe5ZfL4M4PuzGSPRjF4equKKocEJnPstEQsiSfENnVzxhjEQL2sPZ5Xxuig",
  "key33": "3cRDqHMcEgkK7myVZhVApCLexm4xyAGWtnP3LczddSeEh5xuLej6a5ftCvbyYyNG2Uo1RQYqjwiCUm2mK7A2Tv1P",
  "key34": "Qx23JXuBBppLZNd337vy7pfn5is2g51Dg7epYSVq1kBGvSxBCvd9ZABUbUHwyGfoNhCQnMRfnmcvUcZGjRVoaSA",
  "key35": "5cQv98qWP9HJzQrWEyERnaPUy2qqwc6LNTQFrjVGMNUarck5GDYNuP7QMRq4XQA5FMymFBxXQnGeJHNpCZFc3Y4n",
  "key36": "4BtVYvksHFkB9cHCgg43J23QsEvugLDfxRg3tm3Dy5qpFKZU15hJxYWQPGnWSeXuMsHKzoUDqPXgUuq8UwjysP9K",
  "key37": "QhxX3yvSHQKvWUHWFqSw4hfqo9HNDq83UVZQLmciF66to5uzjvEspeTFqhnHsQ2VBqFNNGzJSCTf3RQQ64wosgc",
  "key38": "4R8JVUkVeQFuFbFvb1BFtkZQU6YKQVdCAirY6wXSTgQjWGNfB1XAx3cLfa5g9H9jpQeSJ91PYqSrzwkUj9e4nRcr",
  "key39": "21zf828kXLuGwTnkvkD8NYvAFsvYEBrzbigYKSBgfDQgNZJYMaGdFDfp5NrqXEiWpUonz9GhkjHBgZEQAfcnX1sx",
  "key40": "3Kpe4YmuHVZwcUWBp1jwD9qyzq3Gqs6V6AtQMFwTejm7DyUHxGx2pQrEbB99FhKeVnseFHtgsUDP6L4hN2A9jJQr"
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
