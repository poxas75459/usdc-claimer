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
    "1qahmwWDYGkq5zusgDSDx2TBpxuGCSCSWCxMDnxvWVZZiYVtwVjSpxXyN3qPbwdZz3ZQc3gwJRxNWVKeCSMKbrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o8Vf1NUtQ2XENwDG9fiQYfeTgfa7nyVYanKrfH3GNQh74FJiUKGs9RQtJ8C4ofhFCC1DURpWdh627T2Bxrpb6fs",
  "key1": "26jsBTQPwCLkFfL5EiLKSGjaqZks8TTnW8iM8z4uYkLU5knSGV3KEorq2jqYnzgY59pSTY8pmVs1QpDmHdk1WDzv",
  "key2": "59pw9MKWX2LeFZ66UPSLcr94ksUbqV5Yg5JPSoLj51k5Kn4MberrTNem8CStFWgDBADDPMePJX3GT1BefEWGkTwD",
  "key3": "5WDB6JqeTM2VyPw5t6MtoxbcriJNtH323LSLFuw8VfRDpkBsExiiN6uHYPMauwS2UVmWNCjusKQPXqZ77AywonHD",
  "key4": "5oKBNUJNitwikaPMhPeYY858b1XgFviEZ5GGiEHSsCBdCicj6ydjJM8tBWi9LLRSdc7L7ehDtuhHzfyMH8wncBzP",
  "key5": "5yiP5brgRUtDcZHhfufNnXzhXYAqUyHXrt2MedCdZL1xDxVDdAMowLz5Smeh9H9DeS494p3LPPCb7U3J2xP8o6BY",
  "key6": "5vYK7vAA1xgeFMT1SZJC4bGFn1WXuPNYncR6MdcUmAG5EQCmNaWVDN6Chms2iEvENrvDUoc4UW1yw3wsHLZ55ZC7",
  "key7": "2w5MMmXuCFbY4KryEY4YkjM4AvgneZ531Yr4QzCQWbpPGses12m8JywDo8LnhtxArmW7hy25ddukxAsd7zpyAYDx",
  "key8": "34rrLLkBcnCqEj4E7xbBhJykJd1GfefZBUTe5QSF4BD6axskthFySgJxkfhSSfAKYCbWKo4ztyLHfcXUey33fbjH",
  "key9": "567Bqk7o6j6A9QV8vKoFgG1peNQa99uaRvhRh72zT8aHqNxELwqNiJpfZbWT9oq9YJAXT5XtzigFbv3bBmBeaEJ3",
  "key10": "3aWvUZEBeHeAhng22KPMPqtXNQCPV5LZqeT3KwDdpnWALZYHiAzJfcLabP9HEAFSMkzEYoxRAozdcHuStEXyGHdX",
  "key11": "FdUNjKjXnGWXc6g3uDerVyQUwXxLe32eah6pBMjNxnG9UaUVU135n3dxwvsogQCVd8MjicAbwPSMRpWTwvdvucA",
  "key12": "2xu3oqdTvkMHh1eZAhfhXhzewKViWNmqvD91HN5PC4zB7bQYqDbXufkV7B23pkhGqEmsXTneLJz5M91NJYRvRgat",
  "key13": "3LCvMFJuWBPhJCRYQuN6oqbXN9wvWkmvyQRwTN664ZooG9BkCABWeBrCnr4d5V6KLQZ6wyPmQ2nhEZeX4dcZUsM9",
  "key14": "7yBxrV52pJrTVYgerXeGx5Vqe5tDCnwyeSXpLmRgPKVudUWbdEoh2YYJqN5SZFpTruKuPhj9L7eT5ikSDrWtHj7",
  "key15": "4je3pkXrgdvvzButJBH8jwNmbm8FM4Dv8AfGnhDdeMrJwDEBax6FJBf4JL4cXHW2pYjHynuKf1nHPDeZYiQU1o7d",
  "key16": "3UP6fBKJxjhfAp54CzrMSXHnP4txVb2rizwLLmEunWLv8X8pLvuZW1a7iCaof33nDnJkzDDXWG2wcNqct2NqCAF7",
  "key17": "2HpzAtM5MgDK92uD3ciqx8f5ESwtNbftsGLTufRRQqiSeYfvRGD5YVrJLYwDzWdPAh6kxnDKB9eMKASBvbbmTbLp",
  "key18": "568nUxRqhaFdpnbFfuVFLRNvPaeHogZ7Z8YZC8LMgm2cv99vguQfLAXWReAGC69F28JU1TieyCCAu1snfqmg7rez",
  "key19": "2ykphxu5FWzx5Hh6nwjubBgfPU517xA7Z8QaMLvXuLA9Mc926vgtwP4f2EDNzx9vhSbeb5qhtjsbMQ9y51A8gymN",
  "key20": "4jJN3jbUFwSe2EzTaAMw4AaSg2FE7HN4PRBjmwqTbv4LsSdJLLvRYU4Uy5RtAAmQ4PkFsx56K7KuDFHZSdLf9uwC",
  "key21": "5XzfgPcY3KUUYRZhEEjt82Ags8NhXAftNm4xLXxSDpPaRb8jtkShBrrVF1Ve1QP6jVT2AvUPKCHfvhamLxM4ne41",
  "key22": "5LQsgwn36QXhykhyqzABwQxDsiQuiKc1YFgVjsfasY6TdHQSm2yy9DrWa6wUQGiojZQ8SCJrbNQ9wNRu5Yws9JZC",
  "key23": "5Q37unEUSv26RpDUWrig6bvSWmY1yVyvAZmyYX5BR4PPGDhGo9LpkkcZx2h5tC74qTxFcjrQLARioWUgaGb614gy",
  "key24": "3TbWu4tpqEw44x4hPaeEHyKaK1byYi6TuyreV48mBUosiBrkwfJs9Aybfasf6pkgzw7Gst6a2RFLhgjHN3axGNCA",
  "key25": "49ABzg5KFhKgZ4oA9pc4KHMzFvT1QxLjjkRvNueHQWAQ6ebmQJnQrC2vVHxKH6BswYdiq1A6RQzUZhxdfH3F5aG6",
  "key26": "fnNXrC94jACZQv6NDBkrSueDqAkbvSqcB22WMdGi7juMfhGUymLT4fsoTG6LXsHshmW1EE9UPA4ooJk1BkRHdf3",
  "key27": "HA9Ugpvt1dnqi9juZLMsc93XFc1DdhBjFZwAu2dDRtcig4A5MZNBBp6jxrVnFkSZycb95mS2pQT64moFYjWP7M9",
  "key28": "25m9cdoUfN8GmnCNSEqEzugTMhqe4QMgCQmg38ojEeuL3UPGQM4uo7LbALdxc7wtcYwUcDydpgohuBU7QnscheaG",
  "key29": "4PfcVfttsh89cysRmuUUH4irt4wiRD7k1m3rVFpMWL4vA9DQLmFk6HzvpC9NiFWuepPdJDHfJnbYyCzDFyKVdLne",
  "key30": "5paLyyVZqRD2hZV9CtAEpfkC3cA9s4L9Q9PKmHEAe6udKqVxsDHTyMCHK5VNjto4Fm9VgrfNezdhg8FFCFtmXDCz",
  "key31": "Nxaa2wTZaeUQgqVsHGsgZfqrGeh2tb3He1BSzDWmbnL5ZkGQgpeLZT1d8TWWAAkQQxDv8eMVQPcMupJdtwD12Jf",
  "key32": "5kKsGGrLjeSmG2EPnxqSjEbY9u9tkowRiYZD9z4q5d7k2Gu8sW5t9hZwwMkvgnahsLUbLanYdGenhn9cum3koxaH",
  "key33": "5MZASixMTdUeynNZin1qznFy7TMzbfGfKo4ZQCXGjgA7C7vB8WJrtGaww6uJtsgW25Kxc6S2pFri4gcCcdiRDW43"
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
