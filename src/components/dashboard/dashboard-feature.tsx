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
    "49LxSurDJxcNnfYWzrY4kH4eZBP6xr4cUHMHFB5mov1uBNQA88fNNaGr2vhme77ZzWA5CGq5J8EjL3kD6SjiuPUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M3SiBPTpPDi2G6UrkzAWTHp9fdS2disVFqGTsxxYPadZP2dUv7nDo1dYv5NpV8kFGKbDqoMJYeRREMRz8PSS1RS",
  "key1": "5nFDNCBcGGxgdprCbAePQEXmoKwD5Egsr7geHS9JZHPJwqS9WdqkmM3kQWH83hHizWpaCJ2FxnUEYT4SWE3DMKyF",
  "key2": "4xU515d3H7pNcsKCTpQECYypTKhJnsb99NS2L3egZ4UohUkPAVuvNt8HbkSTkuBp5UgYP65FbMXTPXidukKoBKft",
  "key3": "LaCjPWG3Xjcoh7dQGEAx2he7Yjw5wYsWyY4orsB1HmCGKQQFq9rqyD2DMmwnWmL9Ak4mxcFe2mTamfsyUCMwF9L",
  "key4": "5ihG6tDSkLThSoNK8oyMhqAyJeyjsV9DMjLrW11Z6ViopgHrz6BTR3RKAKxb1zosizUZW4HR8hDRrShaGNsWgExx",
  "key5": "JfPtx2kxjNQYiwFTSpR74V44z7zwUnC4Ct3K2885v2NVLkFnFSqxcbj2Je7iBxxebKm4CSrPaNC3cEjETbuzYwh",
  "key6": "4iXzrzZV3xDurdJLH2aLjdYWSgxGyXwbagiuT3q49AGbPABrRn9HQBHLSB3zyH2VGw1A3MYQsVzm8ZgG2kP4ek6h",
  "key7": "62jrwBNkwHex9ydNCXGQjsvxf2dQQtCQoET9W6V2sj5r72jaN61Yemm6P7NYuDmu1UMyduaQMkPFhLqMTctEHfkF",
  "key8": "5PzgDLUPsiHWnYLArab4RSJUeXNkEC5uSc1ER1JfGNL9Xm3CHqvrVSeFtApq8qcUdgUh4ejidAks3GrnwTV8h26N",
  "key9": "wSRimi7JawAKbB6UmVcT6XD5t95SahfbhEPKKRiFUvb3LufgyT3z5k8GoaHMJ1RGu9tZvyKYv1hhJTDEuFeFUto",
  "key10": "2YhCjQAYb5YCRe1zJDdJs5pgnWWdKZ9Feb1s851vBdbYiSGsT7U9GUTv8QKCZpC7nDaBjZcdJo3vRbcSEbyhqCvQ",
  "key11": "2cMwMuMJP9wFneZ5657twtQ2e8nzJyx5DaB4xL9kzfqiCJNVmxHkA1wnHU7UqGS4XoYJC27mJjwpeqRhrsAWf3kw",
  "key12": "1S6mg8tqKQpEQWnzXYzbwyJDLxthAKGAZLQ5p8JRiFUepYuBRhzp2Y3rcpi6uKaHFRLPR19P685atFDiTVeC7aL",
  "key13": "3vAo2mjhgzkpK5rP1V9vPgxKahZnsHDVvbkuBrMSDohySPLKQoDrT16mwa3fi1t3Hs6Woa1VLML2zD6dhVoT7eAJ",
  "key14": "4d1kaY2RSoqU4gyK7LsB9g1tsRCwEgdBxVfDpqgSUKaFHs8tRYUuUSEbssYxXtcD9aZovLbXyLu7T89WT2CxffC5",
  "key15": "4UUNtBsz3F64jfyKqQcFGeKpDbtDb8qjKZjN2BhppeWjztYNU9s8VZNe1rHik6UWm7w9u27nHHv7kt2GnhpdUogL",
  "key16": "4PMR6WYtFzbTCM9Hdg2VaViq2ckCYCwMC1fo56bMXyhFL22d8Ak2etkXF8LRUHtGhLAYSXeU7Vq8WofznkLRk6vo",
  "key17": "sTSexYhgewhh8sWcb7APXtLNjDYDZBV1FRg2R6iBtYUNh6EsLoopYL5cfcnbYQw2r7ZbC3yKZrU1HsrQmQSGcyc",
  "key18": "37EcKM7PuRq72om4yMjZENfbT3N2s7kDzabLCDNTZqhVdgzDMK9TUkDjia2dpKK2Q1Kbu1PokY7sZUX2Qw33yCZv",
  "key19": "5k2qPKqKUo6B13edTSbLDNd9gocegSXkDChZkMimkagxrvkPbuiLmfpuo8R7EXEiTn4h23Boqyh2EQocdiUrbcUf",
  "key20": "3f4y9k797ySnAZnKg9MLLZH7MYQ4FTCQKLCxGuoeWRZRt6DNzNea2aYG9ZESz2LFBUKoKXsUJkYa65GHnq9KaBNk",
  "key21": "5KP7F4YoxDHzEi5anotPvujVmtTXm5yYbFnXdbix5YuW43Vvk1HZ1FdpBtEsRDmrBwKFFwnZhyG5ef2ZEAsmevxP",
  "key22": "4trqodmky4SfMuPTsATvEiBYwVb3N6Wtq4zKEakHa5irKxpZxzVi7EQjXQb7mZWZq7nn8mJEKYaFLXVvGeXaAmEt",
  "key23": "3PLG9pdt2z9HkrXgqd8ZVhzkyGDU4F4nJdTzecVSpLJejjy42snfoK1gv2suEc5HkfuCuaPfrRV6EaukiBtvtdjS",
  "key24": "4kNFsJb6EntaP64otJTaRcit49erVqDbBi9oAc81EuwzwcabDenmY1E1uc1w7wyCCdvqjaE6dsXGWwBdWWY5BeXC",
  "key25": "46hUkFMsT7e6GY8mKwquZSUd2PrcDu1pBExPaieFdMgBkhDkyPKiseSyV5FiqU5RbMUjQ8t11Ss8uiWcxvxw28JK",
  "key26": "TrJcm5mdd5ufNZ4tYJ1YZD4P6h8BH8zJKg3RWPLvrHKxAEkNBRedYpynZU9dzYY2BL4LvZoeyi8Hj67RMxwnwJi",
  "key27": "526MAByW4G9tvTGjMDDDFf17phJ6axHG1Ay2QUXhMHKgSn3iVTAJou1VvZRwBxbvK7iLRjRuVtwiU2euRnBYQ52K",
  "key28": "3zKETzPxfHmyCmCptcqzqWaTEAxztGnBGnrrjEfpBSYbqjqdCx8iBqC5vEtxNC3noQ4RykPEEcPM7LXu8tS5KkQH",
  "key29": "4HqoJB3YgdkZQdavVu5YbJeckaD51khwsJi1EY4Fv1RQoaMEAiTkSQVx7LrGPHwfLvQdBTMshY99kUQb36AEzRjn",
  "key30": "4svF2RKAEWTLGMFPVwsKwAWx2SFLb7xYsgQk3G9hcmratio29ht7ifQtwzX5gfH7tRajAzZGNpw92t8Uk57TJSPx",
  "key31": "3ohKGYF1AfaBfduuhQ51mAfRwnro5RPscFTn6PCn6RS8L6ZeVP9Unnv13RosB5ApHxU3CEaLTBCVncpWySUfW4rL",
  "key32": "4yHoVMhj2jPAr5hf6oBmEmMqNfRvuwSj52gn8gGsVyUqPLeCrXAnzT9RzMBdTcetDo9qNZ133CozaRdqkv8D1DWy",
  "key33": "4U7VA1XRbbB1e9pz3sdc52wSD6LXPLE7xt5EhTj6Uh4SFiAfx3B5XTFofPsQsxAop926gDFF8uCczPtjmVByssj4",
  "key34": "3hm79iwGc5t5bv6W78MKrUazMCgPq4hwdbfzFtbqpFfyNkyBQfPUXFB9saQVQgrzzpjpvBif3PLSGyTLCLUNeHnh",
  "key35": "2VJjzeYbi5unxFEoARjEqKVfdd6M748WAiPjUJB2onPkNjeHED6JPVcYP1o3USyrh3u6MY2xRCR5t9L9WQcxVnj3",
  "key36": "2nkzBiEqV83ShzRQMA7VbdGRTf8sY81aNZk8qHbTePCZmEx63rJ9H2RpoAsmnrZxPVG4n6DiPkPACLGQU5yDadME",
  "key37": "Hv7HVGw5L4hKj5nHZvYpYExJY8ZK9uwWrD8RgbNo9VYStjUznD9H6mERjnuMVSxk5G8FrTjR8rzfk2LyGWv2iQk",
  "key38": "2e19yLt9LzcZo4PGVRwWSVSf1N1DjBLGQ2pjTnqPmceipHy4WpmxYG9hYjB7cfPigcPgGZexj1gYRMTBq3dZfB3g",
  "key39": "3TLksTwbG7wZd9q1tNqktGkUaZuF6hUgb6hfxjBuuuJ3NLG9sB64MfmFhrwoUgiCQHfsQxEPqBHuJQyRKWHPpouB",
  "key40": "vgFC3GZtEaMBwYqbHjTnf4L3TmdqxVLPb3y866UkDRM8exggCU3YX8hZNSTZ4zTWWAhaW7DuE4aTsetmkSoYWKq",
  "key41": "3VZwhFXpL4RMDn13CCRqPrm6SEokMSR24wPwJBUYyxhUWgQLX8NvCtsBg5z2Zd1uNKMA1qnQdjCpwGVC1AP9N3iv",
  "key42": "3PQTdEEjcA6eYR2qQ5CZuXBFtaE32Mbmnbcq4ErUbrBNtkn7K75kUvC5edfWNUQydSQDfdjxDL84xSnovVpEgCdj",
  "key43": "4Xb2uUefMa3hzpT4Y9jn5KhLz5npLTumvY5iK1MQDBvTeMzYSNvTivhTqJTS7NnsXayJpmiDyQQ8P9BgxPghH5Zw",
  "key44": "4krm7C9fnjkjLXmxsJ27uU9sNu6FPhZeLHPx8Gr9HpC3uh1cfjfYLgN3HS9MXqjbe6kJEpWtDdbZsy5epqrwpjT9",
  "key45": "4ygqq3yihXtrfD3rGZNfRvzWAGx3QbDoabK8W4Lfak4r4GV2VvGxtpNgYe4d6wmP8bpjbg7wPfCJ6pXMkpLDrxs8",
  "key46": "2RF6CAMGLPEEKMBrfEh51eTJoYjGfPjc7ATqwdKfhQL7NNDW6XgjgZVTfuTM3G2kd42a8NVv7ENen5TNFHoGTkj8",
  "key47": "34sSpL2xHnWcAD611JdCMrS5PbU1BZ8Z86JxJoxoni36iHdPnGjR1s7f5VLReAtFSQfnrdajM65M6gjqM7bqTVxk"
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
