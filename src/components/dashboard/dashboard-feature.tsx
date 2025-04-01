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
    "DCvJATpC8BnRHBFgWkb6ATAFJt3R49fwz8w1NvwmtofGGtCWtVEiTVxfUGCdrEbtFTvvmUEJSLmKfEKU83h1YvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aMnxGGN43s4jNwxXiABQF6XJYuwxUN6BmTD2nHJqpFdS8cUKLwpLeuAu3xRh1Fpb47QnayMg4ZqXqJaDTBfeurP",
  "key1": "5eg38ywqwzhNLohrsji3s25bFweVohgNbDAwNdRaBEAS9HN8oXMgiW6GAL8Yp2WU3egtiXJTwTW85e3JkdePjKY3",
  "key2": "4LTp7gvBq3EfDRrPeaNifcFy3Lm9QZbxw1DvZEJAYn2aEMyTnci1dbp49t9LhFygDQ6Qnsq6RKFSG2ywDTKndNdR",
  "key3": "451ttQbZokJAktFjzHnoEz7BbQ2rjMB8xqzV77sLFgDWnyeP3fpjZhnaGQofqiUvyAPK3fvwchDS3gumj414jKAj",
  "key4": "25Kftma27pcP7QbpKjUvzQZbcksLDs5ukmDEtjAqMLSZVC2H9cF8ao8ekL28XbDPXEsUGNPfLwHX2gVeaTYQms3H",
  "key5": "5rAeegsYWW93UnBpHqhqptZSzTxW3DDZP6sbrt8VThE1EcFtR87yqWcQnAs194MtHFRcXJbVYDF43wB8f3mD6ceP",
  "key6": "3FPi2jGu6Gmppe37XZyLwksD99zm3N9XQ5L8Wm4RdfzNfdricrCit9D9r9E1FpoiYjkkxrPjrx44XEgvrYKfe9YZ",
  "key7": "35Ny4PNTCt4DW7GZfJjTbXNhkwfzHmWMSjT5D4oazj3KWkMDbSTnS8R7QdgqbodfHs5KikeoFnXi4jeNxt5ypt5a",
  "key8": "62cuYh6zAP46cScbRuX5A8rZhnxuMEYjkgbz9ePYFGtAB9RqBtwgUsqgvsLbr5xF1vYsXwg5ZhTCQmaqUTVGKkDp",
  "key9": "4SYLe7d7ATDwRHnQ2cy8y3CBG8L3jWWvHVg1o9T746XPm5KXpGPzX7KS9gNpuDmBHNWJBjG13s1YQBwRhXji3eJv",
  "key10": "qnXQDWCFRGqn9DmvcWF4VCy8qvgXRd3UjyhqqTJTfYbcYkm51zkH727SJDEbGcvWRsuBiq5DghUfXHsqDXp9uYX",
  "key11": "439DPHSuGEDkf6NBSB8gATtnMFU2AUazuozbY78v9Khg99aGiFTdMTNfSwwjVScbkt1UNkGrtrSjEgGWcZKwnLZc",
  "key12": "5GiLeip8UAQmyoupfbsaoaMbptcpWjzxLrjF5jvLjPB3Ba5Zw5cbTkanat3KtMHRZg6B6XDYQUZ1EdnVBXoZDZpg",
  "key13": "3NjseaQDB9WwxjP2p1yeeCrenwSdxtr4CjLoaAWiNymdW2697etTnpfjBnnjRJAZeuoztUUzHdk4y9AG7hmRjjVe",
  "key14": "cFvEyEChG5Jrdp7bwThWYBArz6ZhrftHUWokjK7P3SRyTShEt72B567QTSK3noFYZX5CdoHWUiRzvxNsik47VEv",
  "key15": "JfV5cVfvNivDqTKR4bp5UX8a6GB5aGDQEcq6xnq3ZSZqN6AQEy6sVVirczjwzzT8nDEGtqwV21pDGD975859RZA",
  "key16": "4Dtxk8btp8a4UtQCAT9jhb22JX5LJmKCDbfxPTRqwRLyBoN5dyMgRadYBFewDgXYvfcaXamxwMJCfTRhV1V6vX9m",
  "key17": "4md2LYhcMGZPmrUJCuBRDaGyo2BjUyaZNnnjxkLkF6BL6WjUnMdbmWsrFG9jiZZBdmCDpWHVb9sWzURJT3Wf4jTB",
  "key18": "5EYmtYqEcqe5WCtdx5Ag7dchPi5j1pMRavBUneyKDLWpuFa8VPARer9N9xvWEf76XrpsRmpEAt8zTKsgjgc3YX6S",
  "key19": "dce4yz64a9VQksHXW7y9u3C5E35GMhJ2bdNLHkcqx1JLVjsF8SGCBTgUznawPCN8sKRmBmDQ6WjDq8bHN8StJpy",
  "key20": "5Rx7VxrRayeQJksduhdqBEafmNwuAo63AaastEh2wQpZZC8ZabFirD3FEbE5o7jUcUKqX6bXaiUqU8Mwvs69uxfb",
  "key21": "26ZKjJx6waJwQRS9kTBMxnazz9xwRYm289wMiGxnTzta1iMHfixTZez9aGDzwKzquqhmwL9PEXNeKtVe6roCTSJS",
  "key22": "5ZP7Y2n8iKq7pW33zy92Jch2kAx6Bx2mVrG3yWD2nypchS2r86MnW3uYmCCn2AvATP38Q9PtqZ1GcDRek1TaNniF",
  "key23": "QGT3tg8CP2N2u3UfBDwcoSLu2Vvi2LsqG56qWGSB9vuLbJgous7udLXHWPwCmRYw9q8qsPEPcySyUFxYbf985PL",
  "key24": "3ycnCfZWYQXFDVnTa3nJJd3CYR7JLTNTubhgT7JvufaDHZwd7RuvxmnZJCTyZxw84NZK4gFcnVbb1aHbnAcU3JC1",
  "key25": "5jWTzrMyXjVYmx3diwhaBJdoyRryGY5Zjnron6M9KvSwo8TTUpyxVb1r7YixWUicDtNswXtgS9Zu2d5uuG8Tpi8h",
  "key26": "4g4g7LX7EUrxYdx16Qpb7pSrzX8RS4auRNfKU7S3bYKoA2bYMDHk7nu3qwW51zPAbjs2j6hJ4Aqb23DmT8u1uUGq",
  "key27": "xrjMovSe9xCSdmbevfct94MqnBziQjDvBWEgPt4CA9WwujE8Af15PTRtmUjegdFZcpaJw4zavxUw9zBf5ZW7hmT",
  "key28": "52aCFWopqGWHhB4uWPc4Qbt3oEXhYEcjj2FQ732SEgz2gEG1vs6SZkUGFVYa5HnL8UHaQvtXhSpQAudHBhuMSEgm",
  "key29": "2g1iGmaeVFsH3UYdDEB1poVpWnJjegnPeH2BTcYw27N6Qh3FN5nFm7EYLqXEtkngFhb9XFbsUNcUZkEt6ieyH2M6",
  "key30": "4eMn6CwwfVSgW9DT8oxeNmGthQ5ZPkGK6dSf3HzdeJgHmJ4NsB2QESPF6HtkSTL4RD6PSsY4gRfcgwrkPFiDRkc",
  "key31": "5U21D1vPTYURdJfJtjyebEG1MFPbNU4N18apDUrxDtawJjJedAoTEhFPTnos3A3WAx7SWym6Hp2gPntme23sm3YW",
  "key32": "2ApPr8DRek2KHZPAuhdbe3qDdKW5Aw7QEhU1kNo2u7EwUGExe72W5njBHf8wMc7tHQRCEqeHqGu2ynQCczoeiA46",
  "key33": "28TgWkfVNFVTxviVLiYQHtAbAywUsxAdnHv6QV5nCkDiNdKPDDAjUFj9CS6vkVPDwcrXUQbGWtsAUkDQPxdpjr5d",
  "key34": "4tj7cfkUUDLZjRm1MgTe8PMgfco7MPgMYDjt1mRt6jxnqYQrzfxRMJhoeDemVsPtKTZ2AqtinaXm5NwnXRCpGA58",
  "key35": "51NZYRTMH56aKkDfgFRV1JPdrF4xHA5eJ7Ct7ogJZcmf2P6NQjQqnoo1cJ4j4yMFGSDcUUVD7DS91QcCpGC8KnZB",
  "key36": "5dFVEQS5fhDjJmvmaWoqyNd32uUSYauZKFiuhkSHUqAyySaUqApZZ7gcyhy9beMdXXobjkqwgeeG7k4F38gGoPRy",
  "key37": "mvk97g2eCdjXV8Z1h31hf4deminDBdb21TKBo8e7t6pP6YGHnZ4dA8oKnk95rcmxNonPaMevnzFxsjGUrxorge9",
  "key38": "3icFJzQWPkWz2NPsbnjXDqvJubZybV58ehEDcWLuJ1P9UjLuzNkmFvY1ztSh4XzjQRnY5GqQXdLzrxHwJ7eKjPp",
  "key39": "KKiLt8q9ev3nUPZ9PDUHYav6a3rLccbx4KNwqL2V8WadWPoyfwc7892bnzbzTCP5RXrRANmg9FwSvn7bSHbx28J",
  "key40": "4y1Zqe3aQqjPRNZYPCz4PzuibAjYnc3r9RhGa85dfndfvzX4SKfA4miFhiGuc3chkQ25cs5MnpWNvfbbYwFP4SNQ"
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
