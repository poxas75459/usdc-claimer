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
    "3Fe3huNeyxaB2j3ZfaNRzFeJADYGC1QuJNQfmhwV2M6zXyL5S6NPL79qsmETKDVz7fhHbbs4AmdJJxBmCZcBiFt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iFL5jCJ1bnqZHqZEg6kwGjAFXTme8WgQ1VBuSr4XbWmhtANDBQTTF6AHz9nxhui479z781mdHU5c5GrTZohFBzF",
  "key1": "5aVGtoUifV9vDuHxiAL8gSM1QytkSmoP1WwFj2s2PKrkqHD6T4SaCpVUK9MhxE1FkZWa4HdZAm87rrmYgYGepYWE",
  "key2": "3eM8yCGnsyAejS6MndMYkq48BKcXX9vaZH1Mtz7pQ79AsxUYkVcKDkvksFACkk2W1DTCh4cThvkG6P8f19ZY64hn",
  "key3": "247oK4NLjrpXj6s8AdPg8u6JtzH7kybjvfFD2LhBbCDhVaCrqj9SMHFV3g3WJMiChnoKRcpSHcN4dKiVt387d2iH",
  "key4": "3WnRoR7smZaqNVAs6ZpNJ2Dfh8BLn5mEwJKon6u4MBW5pmCUqhi185thV39k55kyKjvGri1sS7ixZsu6Qof2zSQE",
  "key5": "2ocdU6EYLrNFwT5UwcKJitky2LNZWdCBKnuTA8JJL1P7EvHS4EbU4xYr6aEuZTVwPLC39fZ2rhLV4BhQgYHygECJ",
  "key6": "Hpr7rq7Jrkc1m4pqXs4xXJLrbbKMdQYPCPbu47KDdPHpTp5hp639eYL5dzgNYHScbvzRS4VKHHspcqmW8MZyYQ6",
  "key7": "2ctchWbmUKEfcLMAf8PMzqskZvkwxtjkPsqcG1XGpinptQHaTBzJ3WYuzGcHKpWbP8XTqHAMwu7Z1WARovUrSSfv",
  "key8": "3ntrUiKh6gnD51Q3hcqEY2MkNFagJ6a7KPgpBGNGW1ADG16Nn7FFBrGpTiQvYqnUpWBEKxGWEmA1xcNijMs2FGPT",
  "key9": "cSHkPStjda35aESP2Hx2cXEjzVak8WbMAvAT65QMqaM8jwjtBkL5arSkw6QRwDbDeK1Q6T8kgR3aGiqX2hr4HHG",
  "key10": "5iPWhsMDV562AQikedq17HA2c8znkkfdjvxrqKaD3UyFpVfddnAEJTyacVWeKxXTLVJUFv7H9Wg4snyjMk1JjaQZ",
  "key11": "BPHvyf3FfafB5NUaxgFaWHWzWZjh9Fe54FaQm3d1W9KUW9nsfzo4Wu2SjmYvLXNcvAfjHTzfcxRR17j3bDqxb9E",
  "key12": "7iGFCPDa5CytqFxmRhpaVMcbesnk2yJppaVf4GtodJsf7ZUvMJBTfT973STo1xWaso2cC7vwvKP5cmArXVi8Ed6",
  "key13": "qpycm1muLcZeZi2MUUmH8hQ3x9HP6bcRqRKSUpxwDii8Psi3aJ3oQehQCKSXxLxPjZvCq1J98iknYCAeTxyM7oe",
  "key14": "2MjKaxHoYgj59GL9hy2Hrb1ctSTwrVPuQ7XEfYDJXsCyVTp2im3sjPg4S96VFjKSHnyW692ojLp88FGGUcBLtEkv",
  "key15": "3XopR9azzcfW9F9d1E9vZSDLLBGa1FYdZRbwaiQ54NCVmdK4aVbbT7U3xHSsp6Fb9GcW6RTWPE1f9vxRX9beXBfP",
  "key16": "3crtrz2zpqcyCL2SDUYZACZ5ZSiH1eVgqsuuLnFezuvyPHaPRa8jkbt4BZYTtTeF2aZk8Tj8Yfy1XwUn7wNZ4jua",
  "key17": "2BfxUKPL6qtrUdgVuFtuuCTnjdYxSD5dB1nbVQs3G78fS3trh256g3ZbsenBjUPzVJ3ao4VmicRPatVfGQuth23V",
  "key18": "3MaYmCgLZe5esRynp2yaDw2v5FDLmmFrg1xs3s6HzNu9qiojAhgqWLavfp9iXPUjqhpA469mVmzMAwipuR5oAZVj",
  "key19": "9VujCFSWSjk67fC7a73quAziP9zoWKMQiL7j7Rx7ZLMHseqpXQxcTT99qwCz6189zFBA3ps6dM4KXM1YXunvFtK",
  "key20": "mGWhCeQWfwM3yczjqhajKCWUyS3UjHqHLYXoQwHrHmHjHKyzkCtymZq8KHpyKMTH1u37ws5u2BS8cAkAb1PU3fh",
  "key21": "5c3dmUstQsXJjKQJDycpHhhmdyLZi4eJ2kwdH3rVrchiR9WmY1pjxixZNXhYcNYBKNTDVSGk5gYyAQRCzZGAykqx",
  "key22": "DUBVKAVLVFZ5RY2ZQmm3GEXjd5SoCWzaZEWdDRquDZD3xsDfCUMHZjZFDwSNogJJyDZM3fSpRqKQ7DcHKPgj3Mf",
  "key23": "CyG4Y4HQxsTmHvWHnac3GnhSSbLDK8LRA5puJsdTeeEqDFdnP1BoJGi8JcTh7q6mQVNTUUq11eSmEiifJ4cQpFG",
  "key24": "w5MULSA1BVVdtcLjnzfoB76jAmf9ZJDtYDvNRwjV59odwiwpNFTMZFK1DqpEUyUUn62a1ecjcATqULiiMRFxe4T",
  "key25": "36mG4JgdWR57QfDEpyFQ3YKArctFAtg3XjpHaDcRd7ZxxS7MUHfpCuqHt9jh86GmTq6sqyqVCWn4JFmwt3Qfwgsd",
  "key26": "451jbWKeGAxhAW2yfrgvqJskHgexn1ibD3VJSx1S9d6hCfjm1zbnoPLvubTy44QMCSD7WeBtpYGu4bTmKvDgbfTe",
  "key27": "5WcUGNVcEJVNMQ2wzu1iWjW3CyczUZD6VDCcJsAWGCSMguLmd6PYEbpnT57TbxegdiAUEbyv3h2HmVzkusvuwcPN",
  "key28": "3BrDw1XJQj3dAVNQyP4wC5wjB4wshABko881muNg7gSfgRqe51rzrmaLBHzVPDuJBYSu5bPhaYDSGJgtP6skXy8K",
  "key29": "24Rq8KHbhYQS47fcJ3rNbacCVoLsmQVxYs8xTeZdqjMp7YkosGvZ8zse9BvbDGKcSX85c2ihmmTBuq7mDmcbnWa1",
  "key30": "56ReUDCUWeccoBsWoZ9JaDqqXrBMyXPYeA161RiCFCCu7PoHrrLc89diH2cam3UQAtiK85qf1VcPNvPRw7qXPUZ",
  "key31": "67xToywazFbBHCVQqG9yoEHQYx2ZQuaXZuZVLfU6J1bLQbvoQMUZwLCQUGMN11sXgXQe5JGVwzifCApC6tkhWJR",
  "key32": "5f43aTnLENQrS4WsDfoff6ZNnhNMBfEj3t29WaGKaGn846n2ixxENt2puiimnwvFRNirE9Dx1QkpVTFWtgB7Vp5W",
  "key33": "Q7psiyHstev9ra6Rxq6fCziYk8Jfpm7roRxDtvhHKaUNRa719YWAbcXjzWkvH14agrBU2jU6bGNeZGtCgaRr5ew",
  "key34": "7LQStWEbK8DLqEKZiH437cXaudpPzFMVdV54xuxoibUivLEQa43nCQ6nNpQCB8X8z2aXjYvRH42s7n1bqnVJS5Y",
  "key35": "22QbB5CwTkpW7a5EV4qVt4rFLGC1zd6HQTfRRHteRVosEwe9GToia7tUSHJ5XNa9Rptb4DkytYUdzeADLGxhNAYZ",
  "key36": "5Nkj6TK6iznMEzwu3Nu6oyGGnpqcTcKJ37YyeyhfZBDpMRxT8pyygzYGZNW7Bt2QpTiRcs4nWyemaCy1erK9tcbZ",
  "key37": "5BXwH7cqoJNe3QqSE5zAYPv9PAfsdG6UTTgKpW2fuUbkQfxiVABRpfTDWTYXWyYVwRvPTmLs85cgK6EYRtQDamsz",
  "key38": "3XjNXXqndD2K1r63pvAtWUHbkdzjhzVWZn9hsmE9Hd9hSfvMc7iVwL6qQeBZdAK6enk2M6wqoWQj5K3xtzStXRu8",
  "key39": "EPpCGZg7EqeAZBZGgtBNi3fgoVyk94pEUeSdPaNtiTnYCjPq6Qy7fQGPHvyV16i7fxf5wmWeoU7KYHC4tGpX8Lr",
  "key40": "gpwZd9YQymsfz4rSEmTq86tjURc4XpGn5ADdh15VRWyXepDBDrXpZu6GsEuSyssfWFddsq1npu14ZnqzUiWCnN7",
  "key41": "42y7XPatxvFNFMKGrohoc2AELmMKL2Jk3JuWacLvnEKhGUD7e42Lsy9ipS1MkydHHfpdMppmPRyunHSw2agUau6Q",
  "key42": "3uigp3W9q2Dj2ta1xKy8oaH8UnJvQbwvRZ3apFX1Gjphy71D5p2KiLBHLPcajVVmZJ6DoomHxatWugCKDWZcgxqP",
  "key43": "3kCGNBvL41not4bokvjh112Y64pyjRhDt4521f3ubWuARt7PuxUhNqjjz1KZrorr7FHHAGhTytAZmNyDRyrDURVF",
  "key44": "2pakNpAUmLLjf9f3H8KGVfufJbeAfEjCEW9drdVbfw5QteLmtgUk28jF3NMzmmuiDksF8iMiQkXNjEQA46uXZ1oU",
  "key45": "453tqaEbPdGiF6eb9PNDeALGbSwaUrRXUk8dTpJPpK5jRZ4etp6iEcvZwnbKspH5L1PSp3eNFPAqRH3DgTLaHE4",
  "key46": "jy17eP7LjJVeaimfSWZx2W3GZQr5WjduCRNzxsfCSyHxtGs8nng8kAeSEVy9BHGizdAp9zyQQbggx3WBGwe4vGC"
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
