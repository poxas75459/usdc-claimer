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
    "45HPwkaAayvXhpw9WxnJHNRczLPRmg9DwZMgdqLhUAbqwXxVqRA84caFC2MUjWibfZ1uFg8uvoLRTnXQVAjcDKA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8BVByVdyEGJw86gfRvYZvhNgyWEHv9bWsxEAcEVWfTDQcKpG2iQuZ5ojrRNjAj87fFr1cYyzCiX46HQ4J1eVuF",
  "key1": "Q1bihcbrmqaVLghBiZB3ggatWYccN1fbBHQ1hi7z1cWWctbgrc6GuvUgrbpERMw9q4jrD2xSnhjNaLZujGXqNKe",
  "key2": "NP2ScR7FtMesAGptSWU5hvdF54e6QkPUeH8yBFKKFKTfJhCnhKnBs7YXTdJg638P9nd8ajK9PkCZy1nU3uAPJNJ",
  "key3": "46Y3Zts5MC4MyS71eFsdTNz6Pb1cb2JwGirqqQecBQ23oro3inVU11EZGtz4tBRJccki3QetBHV3q69L1nwDgrvs",
  "key4": "5tW9Y5NkgNtmYMJnjcTfNxrYNtghR4dcAULsrMNVaax2GhJT2e3DxSwNzEKAewKHr14wS1cE8KYJDfNXyhpX2gqb",
  "key5": "2ZscBWrSYGm4ZkSrndpAQ6rvHKCtYf3doF6XAFXtXghEXLUaBAWJu2xUcjsDR8MVZnYgq4VBLAfMshpnbwUVd8eb",
  "key6": "2b1iuBCq69sguPoBcmmyHzzjAEXizWTYg4VXRqK61rK5ftbudxZXvpaoGGwaQAcbywDUazCnwZb8YN7e8SKitmKL",
  "key7": "51kKcfdJ1vWd8nAThco77McLZANrTUuJqTsyC3CpMqRemgsnznwrKCjncfgRH631ypqsp7Dx7kzdinqNwQw15Gxi",
  "key8": "4XGWjo6KYUpTLmPx7oj2EetHeDDCsRRE82akXa1mjeymNMm6PAxZVz9g83gc9Wb2srXA5c7xgnBjoBW75tJ76s4d",
  "key9": "5koQvD5dNWtGiMnJp6XNPH7QmkV3nqMYWXiqqK8YkNKGhc73SU6ZXdLmQrQNC8peyrVSVNbLemveR1ZRXFYRyie8",
  "key10": "5JiRDrdQtPoPq3ZfiQNU9FfAPnJnA3Bh7nYvQ98h38YPwegDroFY8VzriWrm173zo8mrfkSMq8nT6V1U9ZLectvU",
  "key11": "Ys8kkfyUWkvVxKc159LXo7QUd6iRTwDfagghttiG5uDqpPVevtXzzEehkCPj6rvbAVeBd2tV97Z4xhDHz7z9dC4",
  "key12": "5xSCPY4s3t5aWJnP2xftgAf27kSY2bTU1SCUrbLCiwxPsEtEjxf5fyiSrGmQSkcaqi36eEzukg7pbiQb2c43m3yx",
  "key13": "3oE1CSGQKPAs3RiYXNSCBuNTEiTtLEP9QsJswMMBEUUEe1KXdUQBBab8kPvoLE3tck5xunC6vdmdBGzKhJBwcYP6",
  "key14": "4Gnw3NncxzyjcMVAwHXP5wAL8NuhQzeqKdeaeArjhtSUwxunbb4vmenUodGRJH6A8Dp37TquKWFz9aNaG5BsaCnp",
  "key15": "5S85UPyJJEvggaXwnYkAXPS3FjCaBSZPWEW1bHL1df7XfMqpne2PEPxPx5821BnKUnT3vJm3pjJhFD98igs8j1Bo",
  "key16": "45YkjGLn7RXjwrzKjhtxtzAgmr2BQLpgCUaUJgc6YBkHXj4JCMZa3M7TL46yjnvzeUwWR3rYiyVRt7Jx94zXxPTt",
  "key17": "TJYnSZi2usoPY2PXXYwT9r4Cz6vYwYiJat5vJWADJdMxFSqo8tjxNSwaZrX4HQ8PH7bxFxzwfgpqg9SnigXz4tM",
  "key18": "4568D79boDmF4mWSbm9zbaqgueFUrJaX5cRcJXWUG6ZXR3fRYMHpzXT4qSnyxSn4VP6qFDRcrN41PN58of5TYrM6",
  "key19": "3G9egp8TviwGstufdkwYLznQcUwaUMe7g4kuh9RDJmstVfEk6MfuXc8Acxtc7WXRRwC7ydU4hAQB5MFGWZeqHfv7",
  "key20": "2NkM88VpKUMBdtdcXi5ro2FsKAvakDJrhAW7CKrZygYZULvTosLX8kMixf8nuHxKUB3vTUtY97o8BQjB6qK6QX4p",
  "key21": "DmuMgwYxnQtxg7FdRQT87WEm6hyFw2Fgku4E2dqcayPpDdAmdQpgL8fm7ZcgtLiVn54czX4HZNtY7Y2XwttSg9y",
  "key22": "678iEYGyqZgt6wjtMQ5PXceHYc5Tm5Jyf8tXkff27kWiDQbfeQYshpDHrxZMMDgV9qpWTDePnQYmgqTRr2H4hqFB",
  "key23": "JpgFQqJ83isrPXGotKvqbfp5S7ZN1nGG8efmRxfMrmQVaEf2LF7UU1JyuQbnEr7u8ZNLMokN4jt2PxgmtaPnf5Q",
  "key24": "5wjRvx8QRSwYt6sfUXrM6MH5tonVY2kWayCyryszsG584HBkq9jmwqPNRgyHLGS6RaQ6D5riz8qsfncu6NAipAFQ",
  "key25": "4qiufwgsLiYAsZT9jRUZ3J6SVkEkxDj7yTkHn6WfgaM299h4yihTpQjnTcrSVHNsAVL1snMbPM5Nq66XnmUjpgQB",
  "key26": "TmMmX8EMp5L13NVzepRD5aDgSzXq2TfGNAAV1LEStZunCqatAtXSdRAh98KhvF5hB4BUPmmp7XP4xPC4z4Gu5WW",
  "key27": "ENZG5KTMG4Eyi9xSs4jaUhW4w9JjDZxUrfPmUbC7UikJsq7voW8QMSow2cyKzdJqQQLcMEhNggogsaGaRox6cHY",
  "key28": "5UFHGmGeSdLEFToCkx1FGrAScs4LkgDbFydoVhVE8XWTxnbpXBt1wguJdWkWjCdBtQMJs4j3upc8CAcyXg9ew5d5",
  "key29": "yGGKoq4X49vk1HCXZguX1GZpZ7UAiCSdMfwkvMPkeSVFEVAzbWuUw6baiaYBbAaMXfRmcVCHTbUmeSqukdVh8Ec",
  "key30": "512tnzpjqyRELqfhBwt2w1FvZ7GJ6kXwGg7ghgySRFPuEwsnqqgtsSSeajYJMnDPZKWCrAfu2okxM3ZnJK4W2eHB",
  "key31": "cbAfhqqkSoREHepDp6EXkU91ibMwFRCcjiaRoiSN8ZZEz18gLmAdEaDQ1Hp5ygBekEfDqMvNi9kLBNQZS7AxtbY",
  "key32": "3aisnaxcEj7VwBBS1xMY9vgpSi5NaodLsbGTmibzxay35gR1njgLyPbXKU4cQnfNVUDeHSVGiRpZe5GD47Pyj6aq",
  "key33": "2nQ2yZDEUueT4sPHaG3Q7nWRKPh3zErHwoCNPnid4jTGjkHRMXq5jNDEeYtdz3fYjgN6TUDo8YxKPKX8sDHuLxfk",
  "key34": "2C24rSbwgZq5RvDE4oZteSLZUUdygWcDwsjcfwgyjB33LEWbk3x2Jy9HWcHfQatgFyvJai2Nsz9e8WHCZK8EjEJA",
  "key35": "5bpfF214EvLS7Ge46nXXBYznpqypEJiAreAAb6c7ezSmbi7usWvTzg5stNDFWLc5qkhzHg3wZ7yDLC8Z4AgNNyQo",
  "key36": "3JTY3knG6ZiLy2vdJrcSbfhSSSvPVAYHXoY2W3H7BQYtNCz2G1aZz6u9ZP94UTJUqrCHuZ9AeTopKL4bVEf5EGbQ",
  "key37": "59Kqz2csD9wqmUnNCRUFqT2mkFd8rAvyLwLkkuM1UEZJvU3pBe2HhDHmyhxG6D8JTUsBRY2dqaWcXi1s4unwMywb",
  "key38": "32KucTvc5ogPmz4ajfCYtAp3YzLPpsZEBBkxjk7K9bP8QnCZ9DGoQV9KFyVrL5uktdJBA2Q7rxe158JDExLTzXDp",
  "key39": "KQz4TXHeG5tiEzTJhKknTPoEbnvJwUUsg1PD3Diyfe7z4NkKHzyi2BUJJuzH8Y63XMFjHmN85DzMRmLW31Fassk",
  "key40": "ncECKFNDTZfGRgcXw6neJWnhaUVsm8z4j7QGD88mFoussjVjfexiA7hTnDwRCEYK46vvQs1Nuq8BGqR5cAjuC1r",
  "key41": "KDJvnQXGqsb8rgVky8eh3tdXL5fGiJszDfAb2j9J3WnefXgezpnQVG7aJUvLvb68WHTizWJiX3DqCws2toBKLqN",
  "key42": "ctv3H9BfGGDtsvoh4TqNnYA9MBqxFRfR75rUBw6ao3GGLVYdevL9a6CKCpfhzLXpkBBcy8jXADcv6vtRh7hAUVc",
  "key43": "63x21Mh6BesoP9boSHBj9hNFC9ay8hKU45c4D5jwTCXQgpHvuqH38Wcgg7yAEEPq8ndfeRLGzVACPqGuGWEn9Zs8",
  "key44": "2PccXxYrMtEe1WR1Pt1p34gPwUM3MKCoEJXkN6tTQe417E1KRNKDvgsXdddT7c96MwxbTE1fqFt7F1o2jAvtDGBR",
  "key45": "3ACoGRzeBJE45RwcyftwHCUeKRKXv3MeWEFLQJxfNkugcYmzkmZRcvPBNCKhdoTrDGRHEMsasUHZgjuzGotZYMSJ",
  "key46": "5yWjVcCN9Up93mjBYCczjZTJRTEmxBP38SLG8oERr9HzJVpNqqXw876WqfTZGyo38WhPXuU5r27pagzidWQojWRg",
  "key47": "4bSUWMJqkc4ctZSczufgmv6BsdheJG2QgJy3NosGjNQvqWpkjG7wgJMfYkvB2dzBKxgynxnXwAAcFXeqjSxGQpLG",
  "key48": "43XoKYkfc9xaKWu9F2fsu5XpP8QAB4FZtbsWrse812H1VQNYxdwvLB8AHmrYjZ28Hz4kRetkbsmguyKG8CHGkia5"
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
