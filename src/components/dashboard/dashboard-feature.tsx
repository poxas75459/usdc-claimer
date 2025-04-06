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
    "3gSXpe3JQZ8FACSsn6zuR6TxiitXgLbKSqvChjEsWLBtPEkkRWR7gagnwpSZVkhpSi3fx6TV6B2QbiA5img226X6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ng4gfR45qdR9LSGWZfQeadAwbVYUrKZ1aXWDL69QMLWUsfrchAUMHQoucN9X1ofQSo9fs7zaKH7auVaJ6VVSvtF",
  "key1": "5TdaWJGLbdEZx9hmBJ1TXpoNDgiWgsMU6bKxhWaxtYNaQWoFa5cH72dXGXWPAGrs8jVNG3ztiMjxm4wai2CKrtye",
  "key2": "34JhmcPrGNnEuqY18zDYuG26Q7GWhGi1nwJyNynpggRrcgzSpGodbJL7z4V2aBS1PTHX2KViAT7tCDgwZndukrZc",
  "key3": "514uD4NZy7PSLmUS6moWshnFQfN32fWWpH4FjEbD3GxdS3sgZqv2jjFBwaEeCQxMrL8NgPpgXayyHPPoZHBVPVch",
  "key4": "2vRWdXpV8m9PK7FphdjLM1KZGm2ZkkZejoK14gUqUb5u4bGGTEXUGAWySMSXqfpti8utk3g59MzoqWf1bxEx3y5f",
  "key5": "ioGzD7vmuJUGABSVuxoJoSeBLiCAst5Bdbw2ZUokHsAaGqEs9xqHijGnyAQhvDBkrfwSkGexu6h2nVnJQMq3f8K",
  "key6": "3YKAsqeyE6VyvnkfpHoqFTw5xdXgKujHMXeEkLq6rgqoYnMBLsXTwuedrvWEKi2SgDxpG97kbrSHufMauwVjkk4y",
  "key7": "2p8evzEt9HvUe92qAE9rupbjWtBEiUUrLhCGgHwvcNHh87eYvL87LRgG5gDbZX9Qy9M1BSCB6ahRjPHyuYqWpmN4",
  "key8": "2sd5Ay8zryhKmgzMY8T4QnV1dyzU64y3Tb4Mpz21djvkfj5wXUYju2AxVGNbtWfW18BqSkRHrTLBQuNZegz3BKVH",
  "key9": "rhADhCktix1Dma3LiXSmg2pSAADfA5da7hiiWmcmKZ1V1aJpe5ubmCuJLT7zVbvB7qypPq2La7KsTm6uHMcRq24",
  "key10": "5YhNYpPEcd65M7AUTcmeYNN4P5JSHByJZKpC7CrBqT1ntwTzLRhyNc1n7id4Rn2FaUzQf6Bf3PcPcTf58N5Q6Qk",
  "key11": "5qjSsg2ZWsuZLiMBteh6f9MvNoxA9susCpCmnPD8q2KfZefzvZrk9c76T7mgcw4f8ruSCEbBvich44Av6dreSM1g",
  "key12": "6549k5NYh3uxaRdbzVLktzqX33PV6orMJCu7kpeKqeRTCYXSYEMU1WHV4xchLPemUczzaDtNwB39dPci3T9Sq7P7",
  "key13": "48SzbRsJ9Rs8bkUTRYSa7AvC9SKx9Es4g2BSn2ENvKnUJpSG1cxD3KJMih11AtZvBH12Wt8qRkmZqUZmniFUtNTc",
  "key14": "4Q5BcMaRkehhwMRnjYaCRGSswVFaFc9ajbdL4tw8DYYjj9GFYYT1c5xmY6XMSgvAZmZkPdPXB3kEw4tUgjBUmMAb",
  "key15": "3VkbcYSoERdihnKou1rg5VKHUm1bH2TkvqaaGezvSYdRaREbUDzneLb4PPMqe5ApCExEu1W8GQbJVcWQamW7YrLh",
  "key16": "Ut3tiG4opJ8BEoosfuBzgfHNQamc6MhStztoEeY5dAVuAnDVnvcRieTXd5juLQK2G5Mv121QF3QpjuwqJHUhdon",
  "key17": "2PzAefq2gCDTSgCF8rZ738fUV5dzTBKZQqjYDkEfMGK2gv4PnoAMEThWtrwHA1hHzab2zp3yCqravd3dZzJKWFvW",
  "key18": "5AU4jSSAAGzJfjtxS2ACrBVZKjumZwXf5Bzb1entWkRrAp8X5rSLNggg7Aq9wANVdUvEcw4WFLbQBmstkQuJjB1w",
  "key19": "uEBRSLXCUwFt5djCU2RyU9Fh1L1btUtrKQYG7DDQeq2iWjMwC1JsUdQcRBPaKy2izyF1dNhBRm8o2qyMDQegrA1",
  "key20": "37WkDHtWACWN3iNVCtFVmTCaiB2fjDPDwJ6VMomchMQKuqVVgvjKSRYQVoi8SJaN4AvJQkN1eZXfqBFdFSVSvoVo",
  "key21": "3fqeo4niu7HPuEJg4Mp7ZcJLK4WNEfg6LbuTxKFqpDLzvNQNZpmKrKddQRQ4RHrs5dXhjw4W2sddJkEi8HJ5v9sC",
  "key22": "29X2LBjnpuooZKuAeNG7ctYTTt8NdcDEerpZHjUVXvGJd341UZmTKuMUnieTG6UtgVBD6zdv3MiWS61xd1JEqpya",
  "key23": "3cWP3w1vv6D2ADmWHUh2WRqyynebfPS3SH6MkzA7tQRDRDKPz1PDFVXK5AC7CaoR7mJmrYZunCeg2zPTpwUtJu4Z",
  "key24": "2AFgJfJznseQt5cmPVKeiK5mv9sCEqpnKHr772pAStvcXweYwajx2MfDsoWz6xm4XtXyLzTMXhGho1ReLVRJaatN",
  "key25": "2Aw3VVSrSJRWFkeEkZzU2J4Uy5mcBaCBjod9soRxK8y5gMRfuUWmnha86RDksyMncDr73cLqNKoRdpErw5oak9PG",
  "key26": "3dPJDus1GfHC9AaW1bdWWwzGADnHh6bW7MRvCCvatAVRKKGwrqbZhRqJZNuWViacGWwEFjeq4PWEmuVxaXc2qP9P",
  "key27": "eJmTZ3xP4Cfd4XznoYpxsN5ZNvrQYm9hzYKxmantChuJYWmzmMKkBbYamTgxqdoDEeJyFXBioD7SRW34rb1k2rn",
  "key28": "4sf49PWLbupU2AwFLk9rdN7Y5bSeEiDexxaUwtTYpZ2vutZe7hhgsKvpUGyQ8atQeqwZ1i1hr1G9AkHgYDY552gn",
  "key29": "38vRGMAyeQ3HQoPTj23yj2voZpK7kUdCdB643H8yPeRxXfzfSHBtKFsjxFxGR37QkT6bTF82956otmunc4tX61PE",
  "key30": "5iHQhgKqcRrRxG1BGysVh8AgY5Spi2eBGPqrc2WtnJGPG4dwactg9j12ANUZh7iADwKVRoft37jNNPAsch92gy8h",
  "key31": "4xcyKTzAVq6arbg1HFHbn7euUf7u1rue9debR1ncy1479pvrCChCHvFHZAzdTHw2Bemp7bXuB2KEHVQpjmU2VKRF",
  "key32": "5j2FXFtAU3EaRUBjrxTFxE4f9DdFyydPSE84feGskNKXnZBiTkjjKMmpKVvcAKrKaZm4MjBiuy2NnqAZLzpboqft",
  "key33": "2mNuxWqyeEtowrVUA2z5JAYe4kPLf4cYeW9tPLx29PBe3sSgNXFRSPnLtkssTvcgoG1QXShaqKepDJHAYx2e4Ye7",
  "key34": "2bQRQsYxx2S1yBiiRozhF1egf7zKeCod3yYdgH6hbJkKhb5v5wopNzRZvetVCM2Qy68fJrdgFWYdg5xXGYPySpJX",
  "key35": "5DukMQvfREToWHGxRe73ofks3StmrTNnAaHZEzJopHxgvDW1d2vBtQqw5L9cdDdYKctwF78BhWz6oafkf55oXq5q"
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
