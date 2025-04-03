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
    "pQzzEKAQcopCGzwXnw2S5gs4AMNEGaUxQGtkoNjFQkhoD4RQnur3h3iofLAcJupjPdzaC5rw6vkp2maERRjB9QA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yszDHxbYM193zk8d6YKPiC9sj2LniEdqPTPJYB6LZp3dFRdCdJMzU5dXDtGjmgspCxQM2WS4mEj9qwUrRUHPfE1",
  "key1": "j4i79PHYfvy2qhy2ZUJv6m8GE1ud4dY6QPwQZrP1DLwMBXKGdieB1j8FUtwCA6zyw6FS4VnycTnpvdFC7DL9hBY",
  "key2": "3E4hJgEztE48WjEKW6sQca9cRj5D1JyCgcA2esBrW3P5mdmcF8nPS72noCv5mSEpeU5E7KnzV9VZGHY5J7XeuKs6",
  "key3": "5zmBeY7wtKoU15kU4a5dWEgiR2bt6wATt1UJxooAYY4sBxWUWG1Yq19Ut3vECAwKisH6ovrXfAxzQJeY9L1prYuy",
  "key4": "2yMsVx1gzdWgVmQvapBZ7bHrjkjnhczDtdFGmaxoCUbebYxb1wEDocYztWzEEhjtJpRonXWXrCvmEAYRYhuTLDwV",
  "key5": "21xPm8oPLG9C4wnxspMbGZYsxYT7kv7Mx7XjK9XaanJUGrivSxYxZq6gQkLzqDFxKWf2LtMSTZxPTFmQkaKTqm7B",
  "key6": "33woDitkgR6AatZCKtYzX1i1hFMp6rkPNvXThoPUAY2v4hF29TbS5h8KKXEe6rh6br3UJPyQGvBJjVwQ2561YNzg",
  "key7": "3x3HVAHSU6Yk8ww7CsZQshqFnnH5imE7TUCcryVAXkkdQKDoCaKoPXgnbzipPY1KJ8iipHxHweXPQytU9ybvZYDW",
  "key8": "35DrNEkom6CuYsFHtpsKHUHxhDBVFHPU7EBVoKgvxBUC8cQjCowrnfKgM5Y7VVwo2g78ny217whKBE3YxuGgyan7",
  "key9": "3po41CsZRBUnjfoAcytYiBEahJMbXwB8gZ5b3kNcAiczZ8m2HG6bW9GMxA9HtsUecDV8SjdiQM4yPtJ8YCW19CMe",
  "key10": "4kEyLiTnACCVW9Wc9rsWna6BxiBtdeWtYLNYUtPBBdWWEXBv2os9MLyfoxbVptmyFcdtPWSe3Eu4bUZTBwEVaoB1",
  "key11": "4Cv4LYJEwBqtFZCjemLUwNJJ4rhSv6G3wy7pYFEG9s35dEA9Kb8rWWfE8XhKm54FYQV6LYb5wnmPzmfEKA2Hf6PK",
  "key12": "4iC3FRZpuvDvD2KKSsrBWFiUn9oD1pCzkipHsBfNwG5ksJUx3scMyZ4WKrfpY7dFQ265Xdi47V4VBSv79YXLdBHy",
  "key13": "2bed15dUD2gnKZeP5WWGs4RqmyzP4q6FKAC651aiL7u1Ky4JRo5UKhE9NxbvmB6JcCHBGu3sDSHivUwqJ2rvC1SK",
  "key14": "o8SvV7keTT1WZLzH3FzTxxZBtruDnnd8TJRkcEXCvWMAbPEs3fHdmZXFDhUZd88a6nzPzsMfYq3ZMss58W9gBN6",
  "key15": "4dhTWDwqNxJAQrjhj1Qq1F8D7qFd6Zxe7WGG46mMvs1mNTgXfDpKAx5jNMKSnHtEbUWhvnZMVWYACqLieK96Xknp",
  "key16": "gj8E9Nu9MSBd9bM4FwUuyeyw6sgTbiMeS1kAtWeJBXPX4j2yLwGejDntWaYhtNnnxmyPYffGyYZrvUPQG24Ysqv",
  "key17": "4d9nFMTYHmgbY1G2qpSJtAVetorcWkGJVBZ5MioRMAbw4nDpfyXrUwjr565kwdzsZ9z3Yc5UcD7H1unijttWg1rB",
  "key18": "42YT1RCKfK7aYgUB3jQ1mhMUuaswvQ9Sj5DmjR47oJF32DDXnTBuvCxxrmfoTs7HiiuXLh5bjHcCEN2dcsHNpYvj",
  "key19": "3GYqFhMM3BZjhZTEoi7ufqogsyTL7pQ5nk9dzeNqcKsi5kbt6jTeXhrr81kBbatvTj6v7xP49cJGEgv4J32JA2xP",
  "key20": "2ZngxDhfuBXvGxhwV499CKYtZkxYkybTaksK2h2CudV9ULFjMyJxvGwxEbNqeypr8K4DTstHaFoUqPEFEEafHwBJ",
  "key21": "5Yfu7Akv1sRJXjq2yKbStMqsJBRPMxm9JFqxBj4iBtwEACGRba6jkMEWBDjaFHgekL1bxQy92qcuAZkSX3qPtZWv",
  "key22": "VZXXQBDS4KrTmossbnGFb6F2PeyPYPW8NhjZfyYhcFi4ZGtw9dFAFGq18P4wQuQR2jbcmf1TAcxqfpcX7foqkU1",
  "key23": "45qR7ffDKHerE8c4AnLFEUCH5tQZtNrNBwmqTtQbHGEnfhwQLL67Lby86Pvsyz5ufxXv8jKr3SJuWF9BKrMjSTAf",
  "key24": "61Nztpxx7BCU58E1MSDm8HoGi6De7fMPXBX8Fecggez3qTaRejyiJuv7j8J4VQ4tgBCdeYj1VBL5EMyEHRiNmbev",
  "key25": "39BAj4L6ri1dTEPqehLC5bwRoAoH4Gk5bVAEkSzotq24xC8AWTn7d3Hhm6pzgvS3nJKRt4cQYYnF8qVTp1G5Pa9e",
  "key26": "5fBRjF458t3mU5e5mhMD9hxVCQD1onYbNvQzAWkrTjwVpRE7pPyrLR8hWqT4WrpXy7BtZJiVCJxT11CqxmeQWCt4",
  "key27": "48U8fn8wzmz88pEAq8Tzm1xrY45iCWA34KoSbHxG2b7CT8C2bX8NaGdonRHFUv9zHAb1FUGk1hevibtdeb8EFdTJ",
  "key28": "dn6iuLoABeTWsuE36ZZhc3nsbLQ5tdSYd3j91HH9ZRwDEd39ZTrnHzUf149f53Rcr5fcQtPKArdBz7JGZir3oWy",
  "key29": "25zjAW6URtie9UjKFfmFMNLxuV8oegKUHxsFfBrbvY5XZQkTeSkqedhBuPUeAHiofuGxZPUTzrqRLPksWPogumgV",
  "key30": "5bFMj9sm43xpGJ63ZfNZj7LaobtMW4Qcf5M5y2d55WS1EuZW8yi6oNQ7QQLHXbrSa8GMpZLkNH76Chzgj2sVV6Zg",
  "key31": "3iFpJ9eR4LJar9DfdZGMw5D8uQ1jBkEE2dfo32BegpXzoevkyc9US6rYy9ac4HTr8Wjbf7RYPZpUumBn41KkS8Fn",
  "key32": "22XXvJn71vXmofBgyZbFz5r6yeNRrwHE8MAuvR7QjxesbDbwuBJzE7RaJpP4d54sT45zpuh9qiVDoDUrHBR7AFTS",
  "key33": "5YXNGGQFcuEt8cbv8y3r7tU4QBoEgoxjgssnJGsU2ko77VbnXvEQJfiRXz3CAiq7nn9H1TEczVju8E7Ym5JdSMJ",
  "key34": "TzQyTRumd32NCbRbD4tPucw9EKT3ous1xiFhmgUvaMGqiD1PAavgy7uPhsGTryoyhpRoimg4jEQ3KMDaqVqgfJq",
  "key35": "2mJU2KjPctczj12g9zSnnobWjVUw62fhsrpW5pYyWbbw4DuBUz53qPh7rLsiapcE5FA9C3Neh9x6oBoycvAPYBV",
  "key36": "45d5L2fx9w8Tm1XHRsrq8BBsrP692f1zcLLLTHV7L28w1K2wzN5sXuWKxVCPfB9JtcVQQMGjX4gj7WDJFr937WFB"
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
