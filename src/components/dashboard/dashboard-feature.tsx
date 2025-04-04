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
    "2XJHEuEse4tjrGpwsdBpreK8YmgrLTwyLEC97vwFf7eAV1gzqZadWGT8N7trL11KPzuVCbmXDBjJT19CYhv7v8LY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f5WL55c4WGZaZy3rqQHTWZzvPM9NU8eA6jJMWWoEXWceXUWkxkPHSkkHoQw6jjCuhMdebJdFTCafydj28ZyTd3M",
  "key1": "5i4WewgU6Bwv88mgNKN8ciHckDoL7mhrBHdExTgyWqm1xaU7jtrBReKz5HZguRawcb1scCRrLxyWDqyp3Pn3kC89",
  "key2": "3SBznKnUnC9qXCEpoTY2fTCN6JW2hTUZXYRvJM7yUQC4sGoN5vmeURdFTwwhrPtZnCHPThHdxaxmAbGrU63vPrkY",
  "key3": "4ktpX8GYVwfBXS7H1i8co7syFF4EHhYtNAf4sCUAKXsrKzBZWVfmygLHb83kcT89eJHsqpSyjXTcAdMoM2VHpc2a",
  "key4": "4sPP3DY3sp9mNdQbPi7tnAevRNojEnDKLLMiN5y3XzLP4SygUzLhhXrX4Mwut4N573vJxeynr7yBgXFt6hJHYYtu",
  "key5": "4sFXv9j6odLXqknK9Fads22dudFTogyBcigJ3wy2SBdE2BoKm2wW65iHAKuteMyJD2onzUyoqSe8Kdh3HddAG8cp",
  "key6": "JTPCtiyB8ZfeAgtAK6Y6SbQpfuc8NNHq7Bp8Ji3VQb13aW7kqeF3i2rFcHk4N3oK6ZJpKoTESbYqtu2arSGKCGK",
  "key7": "4qYSCedZxEkLf13n5sLswBUYCL7n57rTNw1XCnkdMsYZ98jGwEeQT9K96CenaL7DQktDV2UTTvmixzCu1iiuysRc",
  "key8": "3FDKF1fPLLrSz7BhfdSHszHtGd8fcmr4zTHV7axh8dCUpsjnT2KFGThg4j7hnbZGmpYsA2qP9HQGGUvfgUTtTrud",
  "key9": "2zK8wf1eFkjpGwRZq7ptZ5gzZHXaTHJPMedTZAtHXzQTHBWYb6wbpDHKNjSUHrP8pPuAW5qhkJL3s8wvH3prvqpp",
  "key10": "2j1y973FUJP2PBmHvpVqcso5WHq83PZMzeVBcL3z9YD2EBdPN9jbG1LAJYZcErzVJuJLrQx672isaSa3KtpyY359",
  "key11": "2PjEwsEU4rJZd9vAZMPA8n48pEzSVvMrZ9BVdYJMK1Mq2F23RZ4eETVkT6pRXnJuRpEVubqktZMBxhGfJ2EH5c4k",
  "key12": "39xs29pWs9uYDWfnGj9wdsozbv8Bft9Pf3UNW8Sa1xCrZtuAWJGi9ULic6MeK5PzRoMGRGhXvTXswmYEbXv5bYAC",
  "key13": "5sYiYiQDNisSwEpvX1rszKbkozNRDfGfA9d57twps5WtdKk1oo19Ao27Yjh6vVHjiHW8zaxH2w7FDVC52QtmyaJ7",
  "key14": "3DzYEeVk69n89SgJcRRy8sGfLnsmRtrR7pZVqFfTwUhSV4sdNRnDuvULsvXM1CwyvdUMMBUViYg97WkUquSTaGcv",
  "key15": "3uzMQD81CidGAajKqVvWmfcGY7PcQ1qMAA5u7944DN1L6symfdqWDzkjeNH2rXfVWvnrhhSEAy1vo6Eg3T9VoDMP",
  "key16": "4hejBs4i69DxwAqLW9grn2MWSrqNz73y1jaD5JjGT7qHvNMzyg3P25Rj81hji3jeq6cWKFRtupatMrAMUqfGfuh2",
  "key17": "392vUp5p6a1gRmTABb9P7EZbufJY4MXQxUVTcQNBh4XS71fzhmSWPKFEPMRs1nye8JuL8R2PtnRXoyESXtGbojkm",
  "key18": "4YcuYyhZnRVo6NNCLQrM5wfX1GHPuG1egR98vtqMYWW9ui5UhuZ7iCuk6ziERHt8AGZgzZz1J8eRy7u9uYaNR4kt",
  "key19": "NSnkA1CUAY7KGQXtr1H3eDJpUsUd5iSrwcpmnveECp92uK7n4ZHDWT8UujQM6eSTuoupcX5ArQjH3986mv5GdiK",
  "key20": "4iwxngKH5ZGMkzPc6faJ1D1i83VgVYVJvZvs2kkJ82XhBfSy8qdGnU7HQLzRqv5u8y1GSD8S2Dw6EDeAmLqdN3mZ",
  "key21": "2UReJipxPJQuDPt792gCKfRzzexFFckMtAuGRmZwrV3RD3EJWmL4bjGvF5M2ZDKJYuvhLEh558wYv8VY8qcLhwJ",
  "key22": "58iHyJtnz67n4AyJJjGmYqNAMNDePbwssh3qWm6zuPuXitrMBPaFToePoBKmAto2gnK6pbd9VPDyQghrKnnnKoyP",
  "key23": "2HZq1ZYxnaWERNSLcg5zEBe3ahb1V656jXjPLQmN9aeg5KMvcywNe9jZwn98K3RgFvqcRYfpkTCGBsneCFXNt2VQ",
  "key24": "2Pba8zbWGApuiiz6a2eWvyjSNRFN1utUehU9awdp2HRVV1z8eheDt5FfuZzutu2n5Uy8VswMsrYBBDhf6SSNcYrM",
  "key25": "3GXaFwj1MqDWpEWSwWFParcnLsfDai2zKoYXth8vnoSzLVjJLyXp4VwyPfhWyqZQs3T4MjuemvHA6EwM2Ka5KC2G",
  "key26": "2yyDLuXPt9tkuVVkG7AuxACo2sfkv7mjZHF4ZaMKQKcSfMuZUxTcuD5HuyjJaHhipXZ6nieJ1qPPdBhi1DhfHmmP",
  "key27": "q3RbpXmnDFdkq8P9UDwsKy2Tus9BPUhwckX4kS82CUVte8MsmQNeCmxfWDkirFkYxjhSP2L7MV8qMCDj2P5rTAQ",
  "key28": "3gU2saqeRRota7JMfgvLjGSTdoHuyeSTPKjE9TGaLtYgx8QxXJEjuN1BDwEnGUorTP534cRkCakrc3ryQnjgdJZf",
  "key29": "3qECX6uE1aVdzdm8sZfktPeVJhXX4Ehseb2oD2KsknFnTG8WePw83Jo5CAEpRJrkUAPdNnkhCBByiFvtYcVpxrwz",
  "key30": "WRLsQKpZdBydn5Zn5jjWKKxrVGeKNJ28NZ7iSnipcKStnkHZT37Hg8vLh7kAymzRR9jarwfMJusDMCkVvxRKbQE",
  "key31": "5iJAb7BtMPx13YxDAY7jrXvm1qkYwFpfSG9QonCJPm2yVsJZ67nqN2MkSBRyemsCpmSBuzJmZdkWhdHjrrrYnvuL",
  "key32": "FKM42mL5DRzL6tQG6Zq1a8RJaj3ukA1Et4MyWw6YgypHa1iPEWmg6qDi967areBxMWJRYgudYdcA9DVn5vmmyTe",
  "key33": "5y144851b4n9bfHoPzbGNfje5vwnqr556opAi5a8fVena9mFtqpijVGQJj2AFLg8bAJqe4JW8DiDstS9rxmLjjqw",
  "key34": "4Jn3BMo4FfdEDEHR8EU8VuFgiV2p9QWVBWJi1WLryNpr46MrhkkohKFx9BcGYcDRwxAu82Wm8oqt6B9iHwhXpvFi",
  "key35": "5pcsrV4sE9G5U5EnSN9aMKAvUC266m8zL17XDB9BQkD6dNoJVXkdKKQmVY7tnFnFcX117pbUNGUazPnHZpddQqsY",
  "key36": "51FcvYt8HLdNZsyLYWbd2JXA31CXnFmrXcL7VGryfR96kH2VBWdEae8eewd12FQ71o2tAZmZv18Zf38sHTbbRQbk",
  "key37": "4EzUPtcVrW1fWw5GUkNX7CcsTQEWcvMB4boj4xCj15NCqxQGFN3AWfuWQx8bkca48vy6yin9QY183ixSqQcMJfT3",
  "key38": "3q3Td9ALLvfRMDqxumZ6CJHxqjG8HYMfuiuAhv5kvkDXzSD3zXhsCe7hF4zPr1EVHRRzLePB1VjAzUb2nWGHwSqL"
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
