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
    "2QebaDPjaPgJK1F2vs58s9kuYTLtGMV34qiGM28e2LqjshV1QhUAeyFWXyyTxVM5D6j618Ln8TzUS1ZNnPfEj1Xa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1c6e8QzvXTJyBKq1HNfxawFGBb8xPfdWE7MV4biKwWkkkuAkYrUjCwcKE18AMFs2RA2YBTZSpq51g2sVRzBSfMF",
  "key1": "3A8eZ3TbJneF7Cd2q4PPpXCSTDUFMKHppxVk8rxENRj5qMYpHtinHTzUbdPuDw7LGUuRi6yuh1N7aA3aZ7gusAoe",
  "key2": "4zAETWHXkCVijV4m6gUCn7K4mkWFF9tdkcsoU1y8qMyKipyfW2XtdzBnZj2BNQcWQoxM8JMZSLC74iXsYNWWC13F",
  "key3": "57kTkmt6yzUQpAcfTU1b9dEx4DQVoQzLoBQR6U5HjM56dyEEttRRQiEyZHy9p5dhe2Sbho5EML5GSKjoBfr9w444",
  "key4": "24gN5eFHHoi7MBTvRtdRYYEWyVthy7RK29NrWTmKenV3xAY23r54bdxVwLJxDytQYF5VuXJMJQsdFenGJfY6yM5s",
  "key5": "4rTjNtNf2UrE718HfTtpwtmy2RUFs5i5cAe8nFSE7txH19VLTJfkvwzt27sMayhXsxxWBywjAR2EwQcg73CpBeTw",
  "key6": "55RYRi9DUtU1rEpUqZL858CJj2tQsDUiWXvSo3KERPQpNJ7BoWKMKr6dnZcdryjGCoeCdbJRvjkPQ5wb4s68rBjZ",
  "key7": "3n7BGiu8qwccJ7bwtmwD1jjpnKPR6WvctkUZYpr6q4buaWrZTdJDxmg98v6x2KXv3q3unvKBpnXPqBNUzgok8d7D",
  "key8": "3Zz8ncs8xu9redkNfEq3hG9LufKNsoY9SoUxFwD8qMiJvjBapWTbj3XGATWZfXgZVDbseDsGZFkcadh7eQmP5L9A",
  "key9": "2N7a4QKrQta1LHPQou1oqch8xttZPL6PXLn66ruaPmK3iMxCeixTP2og2tCMbm8X5krBRFDpWRwBrBD6ktsrBbTc",
  "key10": "4WfPvH4rdQkge6SZQ23fJyytCwZknbdffDazCcu78urc9vZ9wZZHcsdddpBCB7kTtrTuXx4T5EPxPbV4LfJLDKnr",
  "key11": "3XyyjkRnd6fpAFDXqVzL6n73yX6cz8Hq5WKfw54gYLNeyhnrCxRT8PvEd32XLviLNkqmFgspPK7ELTEpUNgmRJR2",
  "key12": "3MzhgQ2wbbDSCP7tvyo1Hd44PnT33Jpe5fcSc9nehigxWF7HWCjzVx8GHuKznzBEyngMSEP59xJs74aTwaBGkddH",
  "key13": "5kXv8VNDZ6jFoDtQR82KutzbWeegxmQqPTVJ8LUF2wJ1cFYKDcxnWG4U5wEdXhdhn2dvLEj5tgoKNuNwMrChNqDf",
  "key14": "4Fwv7JWfiKqHHurXiv4Dc2LHXrgaPjqRnP7BkKbgn4ec4myNLxeb8RFUWH8MfK61dadqmsSS8Eu6TwLmhAMk86RH",
  "key15": "4CLEUsNFNhuP1GAAUUpHcnMyq12ZbXmFV6xh184MoMyfzUrkFC5FQh6bjz6dVygZNgA2zuoY5eBkrvEGRnZT6egg",
  "key16": "f9FGQriEJFATUz8setvWLHrxL9CMzGZVpMBVf95Dhb7ApWZKQH6sexnBR4SkUrX8dqLQ9XXb7ZY7rYvtYzrnkLH",
  "key17": "5FyAoT3cgB276GAbQJEhKBVdfnhCX4RiiJCiAakfkoCopLyrkNBsQmkoRFrGfWmsRzPFxZtWoUvbgFCRtKud3GnE",
  "key18": "5LUGLmvA36V6RUjNoMMppBjjzbYJu7LewGfycAsBqsDWofjh6Bc7fgrU4Nb8fQENssmw1ddc9QRxjJDjrztoDhaW",
  "key19": "5ZGMNYqYGkkdzi64cQKjJ2zdzfwH3dSPUHCCgZ53z998FtyTuQLSgjUaaD9Cd79ZdXTbWg6wDgCa6fu8N2MihPwr",
  "key20": "3vHvbsp5s5JVWf1aaD9RyoLj5ar2XKMvrMAuy9fvwjdoE4Z53ujHrz7zktvhVBoaeVnkZiYkQVrEhWqh3RJLMhyJ",
  "key21": "359A5ktGuY2edotEFaHkZUtW1tK8Csq6N1kHiWRMtTXjDquKyaiPV3pgnyh3rX4MHGsxs1M9R4bXF7sqeqqraC4G",
  "key22": "195mk1bBRrYtEjFxWRXApAddMSP4fDUqQwcsrUsSRLWMpHygg5MvdKqhx8U6BbT7TD5G8cz5yATSJv4se9covHU",
  "key23": "2o6VASQ5CKNYdPssPndmYq3amqC7wX8j6zBeiZc4RFfqqrd2qsmsk9YR4LPKVNNLZhgGgwcd2Xb9bPDdeAm4FoL3",
  "key24": "59vXXiVFJqSZScu9GtphGoXTR61u8JWdLLvEq6Ut9Lc9p3ELCxAvUTuAURcy9DogoXBdFS1NF6o8TZsega6ZvtWG",
  "key25": "RQtEoZhq5p16ScL7KZHpuqcKSgWFcYPFtRh3UQSBozbFDW6tZcr1dgQWFMxfVCawyaU4A9cUeNUMLMSYhLxQXCR",
  "key26": "2ZwYNH7RydmMxZKxhmLrrxLdqpWD2GLXn7zUQ4tRgbKe3CCxNpet2dEKXbM6BcNiMrVuPe1KencmUwSfPWMXUm5f",
  "key27": "5x3xJ7EFZAufQnCqAu923K5hLtEV53REtLr7EThU7PbUcWM6F8jVr8bBcdaD4Y2pipPJahoGSju53edx4XdTvadN",
  "key28": "2nV8VZkAnbjv7qtTF3zAKwmuzUxTrF6uqHMCDCW2EHby7VhPv8jxdvKzUAPg1WW8E65tq6UNxJpGXfcKptjyW6No",
  "key29": "38yxQqNw92QQN8ec2govmjm2DXe14mbK3CfMTZgmNCui1PAG6iNGswfAV6h9yUWxq2boupGhJsgKXfDRWt4KCwdi",
  "key30": "4bKYcWuJJybWDLQBQVMguH2Ve6fPwu5aHFqu5W4evhgDyoL7rfiD1e57EHs3ctAGSoLAbtUvjWoe6ChV8PK7icup",
  "key31": "fWFgNqs5mVFmFnSXmME64XdLHRj6iD5iDjtC9DQX1Dkxg4Myky2FpYFhnnMBS7kagNKTi45orkqJxrmFgRSJx4a",
  "key32": "2KBDL9FwdwHsCvNNP24xS9r6HaJSz7v7r18eGtykp7wxh1HELVnvsi1GmiNUcZ1Fa9rttgodkFV7j1ymBkybUhv3",
  "key33": "4K3GTPm4k7mLsc2MPrnZ7GAHbYwG84d6zVSaypHenqtZPh9JHgGbGq7if3Mf8UjTcDMYq2fz28dFRfbLpwcHQV8h",
  "key34": "2LYJBBaVCpqxqrutmFvbubDXRJqraKmoJY1HZS3tYGaibJL4Vf5sR21rQZNfzDVRRYxumxy7gRPkWHgyzHtEMut",
  "key35": "5mU73SNFwwttTfLR7N7Q53pFfWJv68zffVWo9MwcFrKKs3wKPR8rhsSAm7AnDGzp2yAJebZA6UdkTuzrYgUdzEyP",
  "key36": "2a42FRQn2EFEzumqMjEvNmRTS8UFAnT6Dc8V2zzAAWbxtSCgiq6qCpYAYBSLJKPhzVcX3H8AUtJtEgGCkuQHLhab",
  "key37": "5Tyc6a9xTYg5e5TAn4c1y6mwSYVE4zGcJEhHXC2SMi3aBAEMPPC2n2zup7WfyS16u72FmVFKBLdRXWLxjfBFBNez",
  "key38": "24rEx3erHm7zAH3fqc1pNvCvCF3bvJK8aUjiXUMEmjnVFUbxJ2kN51wWcW3nJDucnLx6fPgmb7f7sv8orzEvHmwa",
  "key39": "22NVvKJ973LSb7TQWvGGeHjmQ5CHvHsSaexGSmHivZniqHaHanMRkNnCpTMxGuKcMNdSd1ApqmCRCKfYaBiyssHt",
  "key40": "kPGALwTtbPpE9L5yuJdqmMpfSvxM7ULUFLtkcvkTSQLSuxUvDEJ2d99KcfUHraLpxThxoLvRGBpipUiebGMjLtX",
  "key41": "2bwoQ495XCar9DUCn3hEwf2fpvVV8gYHtsS3SzXWUQyA9xfSkyrfrazum343MzE6TBPomj7QQG49R6CChJqFKrcr",
  "key42": "2bStUW5ZqJVu8NbjuiDRzuhqMdUwopHUDivS73crUKQ96xrqwkm7R63zZUmCJdFX8kwrL9XHyhuFS4Hmod2Yeasz",
  "key43": "3zVpvTsD4wYthVep9Ws9kuAy7EMVS565WAAXvayBHaE7C9wTQHqBW4sRcLB1RHe2isqvrAh9CFPrfCPK9qVv69xD",
  "key44": "3wdjKRn2YG9Vud2UJuTsfT7QmPPDbfaiJdCggqDAeqayhquCTMBuexwtmmVTfyMPdesqG9Vw8m8dGabqRQq4qtai",
  "key45": "4DSF6DLcQ8YaJYbG5mdyAfLEu9UQJfMFfpCxLfGANtQgeMPWAor6zr7pbg2aZQF5xZR1Vqs45U71UPbLoedUuDrJ",
  "key46": "SdTWJVT1e922aWiQfMYxnjdPL9mZr4YQEffbLQt72e2B5ZUPuA4mqpURbG5Tn361Kg2bFmBwzokpaqKNp9dgjSh",
  "key47": "23YbnxCYb6QMUFPf9rRMihEdGUkc73ds7NoHtMxx1i9CQyMBaDC2N3cdkQM1kH54grkwZoRz7f5MRLSBiAmVvfL8"
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
