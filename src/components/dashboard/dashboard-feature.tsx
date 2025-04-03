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
    "2NegXapJoJ2FCmHLRBYpcFD3c2nNyJgbagoPsJn1hT7kQE4CuvzYPAuQH8K6KgnPoq8CNMnpvSbENab1XFy3auD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RRxHt6kCAemTL5FxacoQaMTAYfuxcmcsBHgHMrBN9CMwr2W3PzWUHJWLET6xdBrzbGUiWLeiAeda6QLNgs5818P",
  "key1": "2pdwSmLteW3Jm2E6PeJgByoK8zSAgEey8T4weKZ62Cq53tqjxTNmMoCsHNXTPgCib97vcLVKz2w67SniUUS5U7p9",
  "key2": "4WdcUShNYm3zVQwmThetUUp86VVnpHd6fQpzYGSvW83BSzYxbqjup27D6DvvY9suaPARqQiqjsbdpcaen9PrvnMt",
  "key3": "3fQZnpXfiaeqxMHFWeQrJRoPGmzUQ5eaQCuZGDAzeP2zgQMpffY4mCkgmCa6Bzj2gpELZT5tCNqUBfjAocNBQHPa",
  "key4": "3wut3e74Cm9UQZYmShwrKzkWXxuHjjierq1c4qwSsH1wetqcBYytSCAGjim8Sp72TKphjdAZxMM83XYR5UfREFaL",
  "key5": "3MvacoGxNDQbSoLyAsNS4VqrQDtp1tpPpSCaqveYjwU7nCeEMLtPZc7s6mH6X59o9dF5zvrfD2gK8gkYFMWwTMMX",
  "key6": "FRpUizsfGQeWGTDTNbWsa8QrTy5hbLLogdarNqPXtbZjGqLQywesW3k2CCjqgLaSdc6DKJTrXn1hPNgpM41sgti",
  "key7": "2abPCkUZdmXXva5GF3b5CPXPqbGASh3oqpszU4Tx5PSty6GHbDygHx9BA2QxCzoze9qKgjt58LejGkuBHmtVuWPw",
  "key8": "5UtE9sN1NhjpXCfdZVMQWVP8GwCUXFHNRXFV6BBz8vzSTmJFV69JES4MzTDFTedJBxD4bz8YBm1gCDdWwd4M211o",
  "key9": "28TyiBab9DyaCb7CQk34DRQwBjH4NZituuYyv165Gsj32fCxRg85uMgnemb3jCVYuXWunhEucEdNbv3azJzvu7GY",
  "key10": "35btmwMSAY8EnhUdJcrJ6wyZFBt79XBviKZgyFGaC9Fsm3yEW3Ps9PAJpajQvBc5Da8NMjqoaePHrt4Xfx5iNp1P",
  "key11": "5adJe2CGPZCtuziyQfog55qozwTPWfJU181qGD3yTf4Lv3G7YbzgrnAuHvnWr63US1mkFDN61KVid4ASNsCJrUzn",
  "key12": "MCJbhBeezucq9T5UKvwnrhdaVNJKn6HYetAptULSGSp8XGyMrA9EKAteBXNvDmhZ1ogDM4JsL6VA4gBb2HwM4Ca",
  "key13": "P6Kee3m7YBQ5qWJPRJFB5Zu7AD8Wq9HsVSp1oMNRj1sqUYUcWWgrhtycDRAiLmPYMLgvFoZ19obbVQSxQV7CzVj",
  "key14": "31bQsWH4k5tGK6FYRfbsrP1aRiSwHNHQHnJW2d9PHh6gHywii7BaG1DjSpq7QgLiMA7xETcw7Ek5nMkXSL3H77uC",
  "key15": "5BZF9QSrrfEYPgPQ5kdsEnzmUzkgDqdBLrwctbh3UZnTzagba2nn8HEfeQpN8UXrcmykL2gXTHu2aS6BNqE7DAqc",
  "key16": "3suNmgbfyazsYrRwjCaiJhPfZNSAhtTu8Qubgkyui4y4rV4AzTgyUxa2skr7J2JEKGv3wQtR27sNswF4xLoea9R3",
  "key17": "3Voy5zJBorS5CQmUwDPLQM7CG9QzmhhQmBoztBenSnrCjnaCQe77hqMN6mH9kgGVLdwQmNjMBghkLiNiPcWFjffJ",
  "key18": "2d1Mw9hPiyreLjeBCgi9fkKevtHeYYKfXuP7Akcg2DKjedpHYrLUBGv5h9rXe7eJfG8fgzdUXDWD7jmUEH1NsMtU",
  "key19": "5dFsTkfgmWx3ecE8J2wSZ5gJtUFE36NxcY7CQHTr4ninCYviZYWCwzk17DB2RxkYb85cqonJi4jgjscNJ9G5UvhD",
  "key20": "3EVcJpCLJdMBc5ZGFDmhLBHuUJmhgzHttpHcidjmFC1bH5nHiS1ytVWgK1x2nzpLu6ewk9doCRs4bQXFjeznerkv",
  "key21": "5i7eZV65M4Eu736jPCmHFr3DSJCEfeNZNrmj4VGXsv5Y6AdWZFUKPfQoJx1RzzYnRHSEPG8FRLyVEPDUHRWM3RaN",
  "key22": "2Emc8at2t2Epik716yZyoqCNfmeFYbbSYJGKPWhqnsRRiYWaBmcpTXokyz2V6wZarnENa6Db3DPrVbGQUAE3b3qS",
  "key23": "2oQUM91fZa65LN93m16sHzFLVeHJQhuB8FapdJvHZpWVsCvbvsxP4YVMxb71yCEz6WE6ovp1ChUC2S75dHEw7ZaK",
  "key24": "2gdus8my5MmiV1TfvockTjzPK1mQbgDh74EnSDD7gpbPDPQnF363MVqZa4gUGXdvvSBeRxtfDG5Gxbf11aKos8EZ",
  "key25": "4XBaGosu5QyBmk66eCWSin4Zpd7ydiAtGBMLeQhUsMgRcwCabaM8yBhLEeYUADyFx2m64YGxsnGbaeiNoeHK7gBk",
  "key26": "4YDzJE1MDWjtSQ7zUKH9hZaAcu7tzzb5EZfMScbXrzAw5tEPEeQVZn4vdaCGcknKQsoPk6mzvuiLnP44zCyxB4pn",
  "key27": "2cnK8CBgTqDv4RJoRCgnqGcKQS6ojhsGy3M7Ntom7mM5TFGnWRLtRgUkRn4xybhfeFDYBYe1AnfTSa7mGmsxWaqG",
  "key28": "34v3UAvLHEug9UmYSepCWamrbRFwVAH6AB1SywKf7D8aY6HJCf1Y75UPkAYpMrAsbs1jiFzkuKcgrHDmTJmqTcAF",
  "key29": "4trAsYhfXK3efSV5q3a5DgBFt8xJCQZf3rfSdqf9a7qFTRWhWD6WJiKfTABi8MjE3CqM9bZxN6orb2kLy3Xv3YoT",
  "key30": "5E5scGvi5X62nA3EaqR7PTkEw4DfCyaTn8fyzeNx8dkD8uVXnrB9PvNcjGzeXUYG72juZbDUXpCBfgj255FwTwDF",
  "key31": "4DmU84zMXS4v8GrYP2NM6Lsmxj1275r7bv1tSpsKxpLm3Q35o9Au1WFjwSmnCKjq6u62zfhM9DXgJ4EWgXAWzt4N",
  "key32": "5vSYj1WEAwg8DcUTuctTb8PPTFcKsG8MAZn2qrHWVTMAQGMw6dneYuJzJf2Bt2oLpxfUtZN7oJhtm3t25aspJwmA",
  "key33": "5E1jBNNDBz77Ywr6rF9LvNEeXSbSUjXk5k8yWLS6RKRSZddUyVE5y3peH6bwSuaUYqv7u6GMNqrV6csMwmeA6rsG",
  "key34": "2oszGEGBj93FMWc27nh9N3UX6a1HxLDVv2USyaZ9k9QWBxr5z2Avv3E8cWxH3LkFwMguKRajW6wh6JtfBm4a3nfj",
  "key35": "5d8yrnqxhaVYmEKW2JaUqSd56hDAaRMfvJBYKW19EkzmKWCE8tYK49c9hhvLgfNQbd9oAH1MNjVMGYtoLL3Jix6t",
  "key36": "4Pjq2YCRAQNjTaZcB2rNHM2hf3kaTV8NrbJJ6XNMem9b59m9BVWkr16X6uwppRDXUb725XHLMfmM48E9GU8bumZM",
  "key37": "5FEH9bHjPtUjNNY4tJeYwAVfEeAPAUekB7jnrYHE6gzRAezxVNRnrpBh6yjdYdKD4fX3QEPVwKANLndbdRtcn6n",
  "key38": "4Rj3jZnxV838rzLcqCFhgjkX5EaqAWx9ysh4jtcCPG3yRshC2b5jxkn9GnrmjPjxzkKF23vjX7FCwD2yazUFGKHE",
  "key39": "3XtRHxfDREC7cuS2zEdxm5iu6jxrZ53FWPuXBY2vpGGJ3fKApz3qM4SNtZYzqGwfmwq3KjojuqyT9jpE7MLizgKG",
  "key40": "mycqNo83SVBQD38Qn6UQASyHyfi7oYrz3fTZewpohCSBm6AhGCFW6sfEaXBwKy8VRfsizfW8d6j2YJfGYWkKA52",
  "key41": "Zg2D5RgRVLfKCHtjHArTZZq4yDD8iAayWdhw2518hDDTnf4cG4i64SZnqZyezykvq8nyenSJPGihX1rLjAXFcWc",
  "key42": "4S29utG2GytddP55SxvjQQwerGUqLukY3azPsP1JhjrY3NVXuU5BTWWM8UR4XXLvKJtrznZZ4DTT84oagaWnTJ34",
  "key43": "USLnBwJj4CCdSPj4GFCBZJFP3sZqe9JaAicN3WC2WX1xhnBWJmKYYr5wg8Mpz62LhwxQ5nooiQqjFTEh8du9HfX",
  "key44": "2Qau8VuKy1yz3sR2v7cksv4FvgfYDNn19QnR4ewD25rNQcMun5GcojJYhT427kyJm3bEzfNGGi7PTaWeUcsAPVdZ",
  "key45": "Pu3QdRuoGUCG2DhNih553Hn9vSZ5kRcV2n7MVEHcYbBgitU4RLPzAx29KhiM9rR3Q9JqPZ54zfS3bC1EE49K4i2",
  "key46": "573W7Rv28SqKw6uFa7Wr42gyi8p14dtA68NRUkHQqb3apx9GZ9ZGQzqk42VyMGAbQriv1ZfcqSoWhT7cuQGqdb8a",
  "key47": "34ciSyRCZGx27cWxss12gL2vBuq3CJSLdyp5FTGLLPMGFJtGS2nr9kobkpTfT9V3H47d5LvyAd1oMUxbtP3wPS55",
  "key48": "3WtRtJV6xWk3ZjKam6oxDa2kmsLNZf9bAFaLd2QeCcPuhp6nLJ8ZfPoGJdNtDV1dLUV8rjaFtuP6fHqGsiwCZY1H"
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
