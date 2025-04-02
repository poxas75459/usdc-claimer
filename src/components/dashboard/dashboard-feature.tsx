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
    "3hkp7f6dyrMraAWxEYsEipmAXruGGm9sM6RfFmSsAuFp5QqfxdrpVyZS7LSyNGduKVYAYmTpaJQ1AzrcDMUCySiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xHb6h9Q1SdFrmVDAZe89EnLVpzd6g99BJrAbJpWs8gJNw4fJy2C4pkjHtSjX9RsVx8CebMqsFBHfsWZhRZ3jsFt",
  "key1": "2vsCxxdAVgwzX9x5Q7BFCumMwKdZmGBQJNo6nDdPv2kYdStVFWcDwhAkhFCdZg3is95RBYaTvsz91jd9QnBKQcYD",
  "key2": "2wPrp9bKVDe9C99yXaynnrwcS1Q57o81V45eNyQnPhv4KkUrKBRU1gJ1Ns4z1f1QbkCfxrD6azZ4o4zH5b5rmpTB",
  "key3": "5KaHR7G9oXeKymrCC5SqF8RK2qUjyyKsfhe2fnrZmqKDL1FKz4fvKCSU1uCqvxhtNLnLttDcSjrnw6thERDHMbFt",
  "key4": "jPy7aAp9o5qdZMCmVd6RQUWEnLwTKmnc62RuXLKRLbbjsxuGV6NV1d4VJcLieqCNR1B5sT6JboMnPLaUfJcwp58",
  "key5": "2iWfjuEb2r88rUCAVcQJv4Bam1ArjrAz63Ez6DDweVZFq11A2NHxGxbeD6BZWMdv5fkhiCQQQzPk5mKCfkR7raRA",
  "key6": "3TLvb1jJEVjU1GEX3UFHNcmQcLhgbsQMegatVbTPnxBqiVHCJvVruNxuAcHRpLYv8aABzvitV5rMyjMqNRw3qQF1",
  "key7": "2tcR881GxwtFVrrPsMUjZTFkBiaanDsfk77uuc7uH2RvtvKrKZXeZzZHTM5M7acCFgowa1gYX8sibMQC16WXLnjm",
  "key8": "CXa58TfHEoSFVe6TNBhhV9XizUjF8MQvDiQwedJpJ3BjAZSiX4XEip399toNtz6n9xWVp5kGy5F5zws7vuBteD6",
  "key9": "bcU6eTcpjssTqJAaZu3p5GPy5EJQ7gih2HRcmuGfnw3P9fMm79EYgxTG1NuJcbcLLpSbNbij3ZLLZhLYzFht4UA",
  "key10": "5Bd6XxoHg42qAMinFfBSaCA2sLcccv89sLpifjgvzNt4b9Ce45PJHvuAXfNwszz6tKmuJuWn7a7hzVgPxKwcxpVa",
  "key11": "5v5GSpp4Uu7iqm265zRDKNAtoTFZwamydBkLVzyX2WjxDGn4zHSfXishbutrnbLGQ5kQ3CWoHqM7EnpBKAQmcPqd",
  "key12": "44qtBHbDHd7nVc1sG1NvrM8dnZUuL3TJCmgJ4vzgzx3R65Rzd6tgLo8LHVjmgaAAGvYUVi4LqnD8f633VHfj5R8X",
  "key13": "2p7vyqCVPVaMVzQXzZBkmQ5RYipKcS7hihYjHCaHEhXoRpZS4ZDHGxMxNqDGh4AeoiWsfsw6Y3qiSVVWa8C9JRjv",
  "key14": "4yXwTAzqfBjZotzCLndo6ARKrFFpE7xodiPnjBtH68Vras5HkBD4iUJbW5n3AKBEqHrvEwe5pcyQydBs2KntbVE9",
  "key15": "5XhXHeoLNFPUhLtnXV69nBXV6AGTt2BtgeuENtYgv2iTejsdKr7VvaFF3CHssnhVRWgefeVGo7CMd7Xq1rF5RFkh",
  "key16": "4WZzZhS8iepLnCtM9PLuCWFh4d6Wt5FrkUKCt8oBejLKmdHGiei9a6CKqzSUgzyBrKrppU6CmrkyiKfZ8SwQ7NqU",
  "key17": "4JmoqrAjqLfBW6wHniFg348hBPnAY9DrdGyXAJ5D9iEePvCYKjMYPsRkeyPFDNFmLG6PrdCLbXsYx8RjtSfqSVCR",
  "key18": "2aftDA8r5LYDuyTBwoxz4wSCv8y8iJPE7Dr4w6PWCoub38nzyW52cg77kQLXZ8shrrRWgHKJgXuiWio6NuyyV68R",
  "key19": "5ZGyxcCj4aFyDnM76uD86pXHNcHvohYwJWJJmp36uyrXJeoMcVW4pqCdU6yNnSj7CLGEuAWU3xNUit6camfCS6UL",
  "key20": "3kGTp7Q3DLmScqfYaQPc5jMe4kJC6qaviuqH9jv1BJdvw599heP2v5gGFvCAtcbGY2eJ8bhTbhsEBDjps7VHwzqF",
  "key21": "4jbgz1qcwB5G66atQzmYJdydBu5BbB7Q5ignUQChEAXqVYmBeSuEGfgLTmy4GXq3Se3Pksw2RqYeuodHdxp2bYrH",
  "key22": "4H8CAPYZ7JD8KFePeZVsSmCcUaUKzHQspwMMYRDvfZ2tccmtCDR1BYRGHCmFths7YPnqa3iH9nhvx73NMr8pKDa1",
  "key23": "5GnVMxeN8TAiC1bUnZMB12GMRQDhDYS5fsm8A4tSq5QznvWK1Y9cRye14JBsbiPTcAcKAJifyB9MjsYKKnhX3wTT",
  "key24": "5p1VbGVin6qALax2faQyUQYjiFD9MEAxnAaKbZ2AdK7URwmbb5J6KYeEA4xR3qEMToNHsa7vQFmT6pb1ERAbRzR",
  "key25": "5rcVPs5qX417EWbk2HVe91bB3gZjNe5Aa8yr9PV2oKTYMCsPX2iULLCWJARNpnEQ8KskjBuVX7X57AT8odpzorTj",
  "key26": "2JCHz1afawUqM2FcTVBKnGxmrUZrEMf6NpYzkrM5nBZSShRRAxvTPB417eaKqwpLd8LiTHKjR2tqsK5KMAPU7ArU",
  "key27": "65cwNiV2Pwf5eGivGQjXbLiqsuiucNjy4eFEnqmWqmS2pPRFg8sZtCffBmoGp2qJaFgwAq72arWFCKRtWPD6NgEN",
  "key28": "3NuVyXgjpu6HJFhDtKCU77CZddRfZJiWvhJNVpjEnQErLGDF2UbXScr95YiX4C33hrkD99U9iehmEkXwNubpQiGQ",
  "key29": "5kn1yWMQHtUGKv95JuvAgi39xf74B11ULjFfaxCVyaa8CV1dvqo95uozvTrPJgrjQ2xF7HzzmwsgoQkTkFCMZaJP",
  "key30": "4zphy5G7HvMmVuCUG4ADBiAD6w8EucCL9TVNWYrrbp9F8M3soxh4kRwh7aZvSZDqibjS5xENJu3UZ5H6HxwnDLRt",
  "key31": "6cnbisfWh9qRVzGZWvaUuHiWdtfbSieR8EXsoJbX1GWkKn7xkUGdVwYQSQS8rB3rBjPQYVQeXNTN5Rt8MG6Nsk4",
  "key32": "5Hfq4dRusowipaC3Ru7ohc71nSgxnNbY9egADUKoduYBzr61GeUFY5YhvScJzqpSqpM1Jr46eWWBWNgZSTK5ftBa",
  "key33": "rhbA1nfPdd9sDsKyZ77yLnZkH7EiD3RYbDGrTDmQHe23qxLLSEPZsNVetRbXZcxzVP6E6uaaGxQD25UDbT95Gsa",
  "key34": "3tKDKw3U7HHtCbqeaJCrRsUjkqK47Y4G9ZzRdNw5Pf63wUDhrHG5aQxRozPUZGx3y53u3dVe9iDzafga6kdMtXU6",
  "key35": "ekqe5REvGJnMh8NxosxaHZCBa3zsTtbSPqeuFJEwQHt35ZunFBoLJGEqfgSDYBEfewo9xfiwjLtvwr4RetJPec9",
  "key36": "JNvtaeMeqKiL9fjYtSE23hvLddctip6Kb6WCpLcD9SF8WKxnDsosf39HDYgGpfciXq17i8to6EUhQNTcQkgUUs2",
  "key37": "vU3bz6PX3yKRFx3FpaCKciJ7RTYQ2142aMjaD9a4mbNqgTtvN4tF8Y1LsnsVQAAA23xFDUous3TEs63AccEbjZ3",
  "key38": "4MjAgz4yMu8AJ3UZT7ymztASoeEKzfUQzyBzcuSQYn8kVgs8VcGnhRT9wnZfK4QWTSURHtKw2k3sRrrzoAPQZghd",
  "key39": "2jWMrhmVq6KbFujdjAzhMGKhaKgPf2zroNaSJj7kMj1d21Ytx6jtnesPVPrLoBU44C62NEFWuQDF4aLSBbNJV3hw",
  "key40": "3t8aaHD3b3WvjtG1xg5wExBGYVxLodpAzdwgKS9f7QMgErWSd6Cib7UYgJUaWjXy7PFK83K6J7M3EHBfqRkk59in",
  "key41": "BtU913vERixEohuVmkudD6oGBgAJxK5X9cpRaFgmgm8Umw6KPefhGyY9iagT49CD9kktJWoiBmLFN1sCYsh4DBa",
  "key42": "45qpiWM6EgZPyixWKpcFYcn4a3NaQcfWFnFs1j59XiZ5Bz52c1iKq5T6ndopQDJe1MACyRtSYaQqmmUpA1Abarxe",
  "key43": "3ChFbELxxRGxRTCUdAZdvVg1epaw4UuNvY4qs8BRQSyKjHGBzkAUMCeLLrrCrEbTVoBrTDPSet1oCnV52WoNkRGk"
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
