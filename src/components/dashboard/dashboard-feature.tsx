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
    "5S7rRhUDMwRUarQ5c38KmacQctksSYpAdvRAQd8YkDNUfLJHSe6Q74yyUXLC6i6imGZz2p4EnBLDqf8HtJY5MZSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fSqBFGN1TmQ4PW9qk8gMkjfB2Gyx6ko4x2cqvd4kU2iEujmPFihQd6HFTCeSofbTDWPim5QF3KzyJwLnttkZ86G",
  "key1": "5duUnxHgjh49pVa7cM7Ht4Rt6Tp3jBFB1Z64Jvg5ewE9ips3LH2EQU5nPGUxxUWM6WtNa1xJegk1fFDWrShHtHBp",
  "key2": "2s416oCSG9btuMfqf5JGzEWqTYW98keYde6TSTp4zEb85Yieeeh93Gky9wSgPRRZCrzYXkLnpUYWVbBoSYAfL61f",
  "key3": "syFb1Deg11us4oivxiQj4BaEGfBVhRXQsHyeAfgWzK4EZNMUvi8W47YUuEdRaCRu8LXqxbwFavXvDofTHw2vh17",
  "key4": "3JAoAFTeGTRj73et4fg2V5q6FJoHLiVRirJSDGg2nx6eVSXJUy5oWEny8qD7L8dsTpTntHJZAoyQd3YW4QXBm4MY",
  "key5": "4VB9fBerSLyYMkhUUo7jmLqTmo3PSxuqsZTWV9tDfvzycuKBtvoVBFjdCBnZGidGnmKXYaHpF1ohAm7AhjX4rvFK",
  "key6": "23FRgPBt12oKh1cVtJJTBHGEC6GFR8eu42DvSw8TqNDB6s7nnYTamSK6kkoNkyA2vjpKspGX84YaTU5HRFBZDSSA",
  "key7": "2SAv8qtWJ3QxN8dmikdRxMUwJA9CyuRyK8893q9NxwNxdFghENWmLopnUGEjWJQkNMr2wUhrqe6ThmvVqMcT3Nen",
  "key8": "5wChRCFxmE3EvCzRCkU1VRSJBRpvb2Xb69MpYfATkouDehE89Vq8i66GSuB2kERTvardZM1MYKzFgWfH9f7Q4Rys",
  "key9": "5mMkY8tpPRC6K8rWfeJSMVDMtQD4xqU138dCd78bphgYt9Sn9UXu7XdMEmU4v6npWfqEL4oTcDQxw6EJNxbC1x3F",
  "key10": "2Gs8quQqSCJMj4J3hEh39MpDNHySoMmZttFDgMMrUFJumkEFrefq8Au4sMuX4Ww9x99npFYfiFojNb8Lyqb6gmjn",
  "key11": "isH37MKaaXzFpu1CRVxy4YidT9zrqCuokcejiNXKaoiMeEeSt2MbBKnXCuuxkXsnsPjJERP6yTUB7xXqsS89DcE",
  "key12": "3NGL1Tipvi8DN9Sm4i59fTJXRS2yBgQdUtGSaddzx79XH7HyEQhQax488UsSEpoLQQpqEgRWkvz3jjCycmL7DFLy",
  "key13": "4Br7UiT1NBtxezdMeMEtTeaxRKGfto6bqRidkRWPAy8VmQTYacVPRq9mfhQyjXw9DURg2K7W5gRkQjnam5DVXhXr",
  "key14": "3H45h7M8UNxCRuX8dHMy5UMKCXCsE1kMeqq6yRDm56jBvygiCgZJN7xFpvxX22a1h7cPsEP8xF9iqB9r9RYFF5kw",
  "key15": "EJdjQw8XzVyuPGtNn7rcd58oZtF69KvmNPYzp8XAv5oDq6JNzgUUP8rZCTy2onqnUW3QfLoG45VctrWFaewHqUJ",
  "key16": "uUKEvapBDcvj1UT1u2WDJxCxWWTjgR78xsYoDq3nYHWfXJRmmY5DbzTZGwS5KWTyhGweCEBm3fyRrD74GHqarQn",
  "key17": "3jFUAfZnqbmC5tPXdp8YhQuQizBpTwCk9vqBq3FAXb7qWVscsGyETuU34HmNjaJTnvsZVZqKLWdbBcwEvZJn9jaU",
  "key18": "4oDKL7gf2gGXYiHgYttMi9zsoSKpsU23WMGzqxqPNTBeSDty7a5xv6Vt2t4HkNRSza2GH31sm9RDNxTMLW2tgnMB",
  "key19": "5gbU2zC2ymZMgLD8kSCUS5W3G1hbcu7vXL9SUsNYocxT8n7MRSGtQNztENHZUkDJosvRhJWZj7vYZYqDS5w47rbn",
  "key20": "4a7Dj9tp7tMMB39zacdw195FeuE2R38vxoqvarVvr7VnZLVKAixTsYVCeJAYNRwFv3jaPZBN6ocFNpAWV8riiAeB",
  "key21": "8MPa3rcN2wq59VSToYQJpjdFHxWYmC92A4yf1ZjG5ZiG7EeoL56an7ZhG54aYkcCuUkK3Myd1Jp4fhg9K9TXBvF",
  "key22": "6q16ogMTA2WLLbJLUTcaWhgMM1pNigAUYJm7PonQUGDUG886JpdkfGY6Ba5Rer7bu3UhDoYFMnvoaEuRgdtWEqd",
  "key23": "5jEoLzKqb53kzHPF9cxAfQ7RkwdYN4hjyscw6p9eEWsKMqoiDNFDyKepNuxVr1Ltqkmx5LxZXFzmduEimfe8MQEK",
  "key24": "v4AWRbLNYtfbf2o4zRjGTNovaRzEwKC7ebxrMVxUhnRHyUt2ExsLg9xQSqCESUrmJEqAQ5aSr3WD3pdVeGZkMZy",
  "key25": "5MpT3ArGVMiBv631uCUj2AUxxrzqrxb3UBg3tLaUehXVhiQtxSWjsg1jWpYftRhWNANFaAmqM4Zjs8mU26u5tm1S",
  "key26": "3iG6X83jf6UkRB4vqzNRiwqHVuf22EXkxDS9ETrU25C2bqqc4rYhVrSiG6pDHeNTqwRKsXHxpNCutov4GNfy2g1n",
  "key27": "PaKTwEwrQczJpGQ8ED6CsS4igiBn8RB7r4Xo3HRhpBrL8AeGm1erZkhpQYzhAfGU3Eq1kXnv3iViAgDrXfnkef7",
  "key28": "okh3eNRVYPQfZMP7SZq7VVwDGJconVKyZMbZGdzqENphks1fp6co5groFWTakQf985XJWyGEEF7HNZBUsCdYC7e",
  "key29": "2gfL24Z2FFZr8GTRtjXWHznBa1dA5LnzWBRbx4bTcxBcuqfmtiHd8qarzRFAPuhmgdk6Nw6KEwKK2yidqUoQBspi",
  "key30": "2MdnLW5Z6Ww3CEaAXxmT2DHMm59s65yzUBDiPrz611Br1uK3co92Deo64wWsrzoLDHN7eocHdiFvs9Mv9YF4Ze1o",
  "key31": "2m4NmEd9mZwSVNetzXkAKkTfMkcK1XKNJ6fjsMNzYLrbbERtSdGNXmeiAhLYtgcLyEzRmniS3fjMjbSpKHH6iBrn",
  "key32": "2D7XCpWk6Q1LUxwBbHuaaAakxh8jBW5ZzrQCB4zjvXy1baZPNneLEV5ZbWF5vQZqGMK93FN6M3PFV9uv9N7cYK6Q",
  "key33": "xW9ZcCptM6YR5GwN8WJ5z6HGNGZJKYZ2Q8d3fm4zWzQSqV5HSZry1N1qAM9GHLff2x7X6zRneF5tSZBBPipdWbq",
  "key34": "33GZPtrQjQmCMgS8voLeTPwGmrB3oRASiyjhmqoxBRvL4K7FJNZJmmr9jSF7uUjAgX7WsGcTXFQVDq9cPc49z4wX",
  "key35": "4wjdsDRzATrXjhAGeAcXRmJVXj3DBZvKTGeXhp8QNq67y7y7tvsAhui4RVtKSqGaEZQ5ViguQvjuwMM45KXF5aYK",
  "key36": "4JREmjdwk8C6skaCS4wK7yog2sTwwM8uQ7JYujgwt6T9ePCoUtouerqRkubrYf3LMFoie8ERuVFDs5okEaas4WPB",
  "key37": "35XAc77AHCP8oY82QmHZLh8jZ9hKt29iUHtWQEKGyHidAST6PdDcbNSEjibLaWmZLY4WJsnuJacYFYbLoyfMofRz",
  "key38": "2AE4neQg4d9TtRboN3LnYBJi4obt7NuFiwuzGSzsDJvZQeTA4NV1GyfDQUz2PLVnyH7ab1zyPMpUjSLDdAAdxTzt",
  "key39": "fppZ8Fvaukj29Lq1aXnM5gFxMXdy8bEfbEmrbR51G5tjXHeimKCNqXofmFnXw9bwEQcQAm1Lt19KzmVVHL7FYia",
  "key40": "5X9Edk5SKQ2YoGoR5x39D6i49TgpnFsu66fa9WDfTytwVKqxDzRZMMKwFwjXJocVNbJyphxVz6TfPAiBipySqhMb",
  "key41": "1sZHEnhiArNJzHF2xrh86Hw36k1nzEBsSSWrKrKQ5bCMNowwnsDEZrNQcqqCS8aqn8A2n5azUXGMsr4a5FUvhdu",
  "key42": "tKdXeKhqMoC2jgacJcbpUF7qcvaPwZKcaqpUfFiBLfqHDrA9uUyYUEoeZmXBVrUq9AzhKWVeCFPHroQW8Eft7aS",
  "key43": "GyBqJ91Qb7K9kx2Jcn7sqt68zy5ajHrBanQAT43CrB5sMac3RVmU3uxKx4CL9dJjZi2vL9ii7NLVmPiTfrL2Gic",
  "key44": "36qU1uARFozSnNzbswGuy4f7AdQoSGgh3FrunusVu4V3tEYwWpaeESwbUPDRpiBCjTmhUwQpM2eGKSzqjQbQw1ZD",
  "key45": "5qdEXXUcUH35SUyntT38YD7PT11AvmRqgH1QagU4yRRjTdhkiQ7xXzGoy6upcbKYVd3oSbDp5xnUX1fSxHAKDDkK",
  "key46": "35xVvqCnNWCji3vJEUL9SSkSdPdcZukq86nW87YFFUc9B7iYxWPbdJJxKH13f3oWg9Zh33NkkLN77Jgq7JyG3BGG"
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
