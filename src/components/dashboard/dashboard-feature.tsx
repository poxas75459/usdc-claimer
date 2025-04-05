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
    "5HZn3KMJFRpBCrpEAic9rHuxjVUpxL2fD138uBGXF2juAmE4Yks9GjCKEcBoQvVmxTkiNi2JPiqVAnHm8uS3NuFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yn3ruMjwtCuF5HovnVZppqy5WyMnxXnKUA7fcLqZy4w8UTWnBJKttx5AYyeNZotKd8Rr7ouC2rMQCLDNgcjS9tM",
  "key1": "2q9SjmfwUHTzLaSa87X3S2LQmA3sCpGGtisTRrgZF9JNNMtnpwo3zoMje3e5mYEy1borm8cpzBKPABhaDHGE1CCF",
  "key2": "5zy7vhGHPHDCagWwNbFagrLvy7Kam17Wpmp4sDF1oy9Tm2AFvYKjzVfCPYyBEJd2JshkED7PCPyDJdpLJdLTsKzf",
  "key3": "5y5R1iR13Wji3usQNsxHSsF7ioUGQQ15tCpyYaN7X8FcfENVyv52wJrRyi7HVig8X7uZ5iv3crHLJXQDAr2qJmk3",
  "key4": "5jZuu2rzrNMAdb99emwXststH2cCR4DTqo1xYcfkCc9mTmgkN9jZsVb6eauwxsHT7mGMfvRjXXXj9o4QZfMih9aE",
  "key5": "5zEpzEyB3ddDChzF9aESWPDWy3DMRYREpoV2B7MVKfz2mT2ECLthLBzbbDJBaBK7iUg5oHQmuFzesfcKM9vVN4vs",
  "key6": "27dQMqijsvgwUZePpVWRkST53HC8wcM6kSVzmp42YmTsgwUm8719ApQkwNrJVn87BbJLei5yzwt7Njpve9EBgDPa",
  "key7": "3PmyafZfJa34qA6yMSLyAFWjX59RPNdGLz1mLKBsHkTXC44mSYwVTn4C6BapAHRVfsnXqNiD6axgWSZBdMjvP6yQ",
  "key8": "2vWX2keAMEqXCRUsHyjvLyT99fFBVSnLDGuAKUhsnUaeZmkwjbHe9otuGe5nco5CeyRUbivBdaJiPmfCFgY1Kqki",
  "key9": "vbyFtfJZjUVK6hcFHvuWsyfPTDCc6ktVkjhWnsC4p9ageb1cNE7P1L9e4CCyhWWHYE7r4iFbK6ZwCxwgfTGiBTo",
  "key10": "3zdK1MC3NpZrx8SBHVorVoTnP1rDMzaQEAx6UuCsgMnMJ4tbxMd6UuXWmniik4oVdsJ6dngGARiceENyDjezG3gm",
  "key11": "2FuatndmZoPuGrr85jLfjHRWiJqwbssK24LjbpB8rAB2uy9gjoJncv3JkAuZYPi7ptazTveYpFbvQwYLRz8UDgjM",
  "key12": "5pjXFPiCXNwjbRwKtoBJ6GheKrMY9YsyWtLFdxi8TceLjXBUwJjyFjgCFFawmoxxiobZs9pWRf1MjqdeAGav4NZS",
  "key13": "raAzciKGVxg6ywRA1sfXANgW1UgM1qvyBuWNzfpHf21naseoH7WsMefFe2nbVcnuUAhM8Wp1yE6sWSqYgE3F37K",
  "key14": "2svnCKB87j9gRkDACXzGSQ3hFzTk2Dzk5fnG8yYMdYxarA91zJH4B2KkGUFKAumy5iZcF6uwPgDjrhFBgLLif6pe",
  "key15": "4HGp1dnRBJ8rTbevcrU1Z9xtd29wNJJPgxuuaNfipqxPbMKm2AJSVoU4uGi2HA98i5fcguujPdCh4Jd3CFEQSz3A",
  "key16": "5NP6ms7nas8CsdC7fUseki1biczHY4pQj9wv66QhGh6NEgsEEAv3T2fqLDFQZHqjFjMs8suDRMn2iYsqqCK3W5Cm",
  "key17": "2ZBHGCCvBPqagTM1fQiH6DFnbzNMeg98WbWwK19k4B3GLAeZUM21mHe4SpjmjSxaYCtxqKZvR5gDUYepH2rdL7V4",
  "key18": "5aYUMnVQxkQi78uPanatViV4QqcSxdZvSoH37ympNFd11awW1kxdF1UjD7c8c2FXruuxD5uuUVFKgP2cuBpcf6RZ",
  "key19": "2RiD46HHspqtg4oZR1Sb4XjmVxvjReVfhSdBhFajPMfYSgWsAyVDvHZHTST3Qoz4JViaoSgtn23L49Vk2uvyiKUw",
  "key20": "6iwzRZdWAzZXfREAWPQFPSWeBnkej1cPuAHoyb3t8kqEENeQRzZosqA8RWybME3qpBxbqxZt5RnSHFtZWccNTah",
  "key21": "2Doe6QNQuZ3udSbZnTP2F4ToZWtZNR2pojLPhKtiH9jHh5jPXeYeHiBaRVn7w6ZGsCZJVzaB9hvuAUHBejoaM1oV",
  "key22": "3SUep3JawMJwAgbBWaCYgX6CcVFRFPUXK2BDAnzfwepXbaNEiovMDGeaQTP5uHTez4iXMQz7dM5rrhN55tDRVD4Z",
  "key23": "3WZu1kwDXLWbeEvtkg4rSdYqzTMwtTSfGZXPYW4J8LiYdgHNETYTxE46h6M82VkrnRtQKcZ53iPAqDbNzhBUTwRN",
  "key24": "2CuaNR6USCjWFBCbbbGxUzDfAMLZqK9QWxDrGK62mSJ7zj8FgbXqByaAxNCZbnTHnCCyDDT8wJDkha2qVXQtkkEq",
  "key25": "3Qv7ATHMJ1kGVkAauEP6RtG4PPFLMo6NzXt8Y4svuZ9de34D71P78R2DJp9rMAYYXhzkEkYcazE1c39DqyiYbzue",
  "key26": "5jBW1nSBf55fhX3hUfDxpkVBXNpUQYnMXcTvY1sdm32UqPnAg7rz8aRN5AHmLd5KLbLiSY8gM8YttbcxcC6E7MRc",
  "key27": "3dwDkygaT1Rta71bqFZ3EcSovk71p8KRppijshQqH6NZiEv7adyCWjZZbmWfiR5q25TAZ9xEZZPZUTU9hVQyzZEE",
  "key28": "3qGREfDR23VAihYHTffbNqqnUPsTn5EhLLygjjrMe7aUuqj1Ydjgch4s8MLSQtVYYhL3g3SVh4x9byjsexfpTggd",
  "key29": "4avjDyXU4XbEpwwmy5jA4E8VYFPJZC9Vcz9HJPQ3V9s2mLoK2JDUCJ14A5K2JU1kwR1dJYNjavr6dVhXTEMJc4cg",
  "key30": "325FnunovDnhqL7Yo1qrdU1GR3hcyvo5LGxdRs1ecuT8yB4VUxtbHriDos5S3BeoxM2XP4tk3xXtCu7PKhTsqQJu",
  "key31": "62usXTu7eZvEUTvqYympgjVwgfbLiyFFqPzW1T5qQQ2m1j7SBzgEcBuvFoXdWgFBP9rRzhLQ5oR6udFAt9T4Toje",
  "key32": "5UfgEVt2rF136GwtfutD9FU1aDSBvcaB52AbzgSmPC5WbE7PHuHP726sty7tmQ918Q3T2CxoFCfvpLyeSZrN9XVv",
  "key33": "YHp3r5yaQStRnQxxjm6Ut9DfgjbUn11CGv9sx8dEvyzyRLMDtMCTM61zygPikajHxdnt2o52xsv1g234LZmDLjd",
  "key34": "2qGpwK5EsYv5JMbj7ndVYxsyKKTBDUdtDDREwbwXb2JQaNhTAtW6RyxUoNB7Qeq2yzjtNtd5yUDxyN78KNBdFMF1",
  "key35": "4Vm6Sc8FsuPyJK5cYNfkoecqKmBckBpi3uUwWHdRWmuEkdvRqjEkyx637Sdes3kF1tUjMRmVEeMjNW51VHEikV64",
  "key36": "5eBroRwtFD78AJE1UYnBHXgJ4QHdsfAiHRFgmZ4AnYoZyCCbUdbvnizFUqPdSFVMreEapt1492hJFTLriVuLgv4a",
  "key37": "2hfdGv9pUK7YcEdtxTjFShjUrDfXXcNE4Ww3YJaQ76qhQeptJL64jNj72rWyGNeeMesAqqSRRwzKHzrJARft3c8n",
  "key38": "5yfa5rNWYEt8L5w8evK3vnso31TmKjbg6RvbAS7ofoYa9j4RWJcpcohzLkrjvpBEJzn5yDBYhjYJw57zDLSXbcJg",
  "key39": "3McqUcArcGF6AxCjFsEYdZWPdsbR67N4oSPMryEWzy1R3t4UFw18MSbQepEJqde8Sgs6iGUDgASGajP1PbfDFURu"
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
