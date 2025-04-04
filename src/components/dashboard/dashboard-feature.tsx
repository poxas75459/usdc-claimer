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
    "shhqy5E7fYWgvM8Y4ZKVJeBjYdJS7rzcLf7XqUYXkLgpfiZh7yov6716xDgCZqbHSsgRhPgM8gdM9hgpB5JukcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wksrYTPxHAfYdnLGdnWCEoPY4abba7U9PRUTF8m32BGC4HvrEv1mp8BBmftKDUbdgHRGBr4F1KPCXXUSJhNpDJf",
  "key1": "rZuFEAB3e8GjuMybYg6TWQuBbJvk65okXuAhNj1numx98anSrV9A1sQAVq3YMB2FMWDEZvoRhjvnpoRFp7t9GPS",
  "key2": "3s7yLiQAgkhHXcZcuGESaAdumhjG1DZW1adNnJn8QgzxE2zHTxRZ9ePRxhMrR2xFutBGxuVT3ae6Dg5Th1ahBbR9",
  "key3": "2vHMeJpLczGNGgaMJKkr1xZAiaUPJEuocAHh2obqQZgAz6crN1m1BoA2hgUsFH6mBRzSfSb9A2NpgDgdELMZDejU",
  "key4": "3eHApLbBDUJB6MrBCS42F3swBamMSQ3SwXk2hxy3qzbXuVD8B1gdTWyFyB8cXHcq8ByauQJ7dGMxv2D4vbw2Nb8K",
  "key5": "5WszYEtkCSoDfpnKYE4C9MVfUTy8ZvvLrsEFNYr6RTHXZR1AfHDuKQjbV3bWTQTBsqfxZ72dMtTmuW3ri6H2uZp3",
  "key6": "4JfUY5cfELfy5RXNjVkSvsgL3hsaqsWNqJK7DfdCDFaNvwSLeXU8X4vMj75Erm7EfQk86HjZRrtSkrh6YaB7BG17",
  "key7": "3M1QTheUGdjMARoosVfW3f7kMAFsXNYRHPdTikc2itcEAaYH5mLPXBJ6swpPGrCk3MTMJ4RrxbeX6Dtty4v5GtDh",
  "key8": "3yCmMq2dFXW6foghQ2cWJtWzWqdxAfH38TYW7e4Tv57sBHSD81ZkZWuPtNPHX7cudmZgeUCkPN87nFB4j5SVbueP",
  "key9": "vZJjXMoZrYXDJm7PPzbzi1yGuh6Cx4oFMC2cG6dzAMrN9huqrXNf2FUwYMWb5FSyTHt3Ltqa2GhyxzytaosifYH",
  "key10": "3VbAN8v2tUTgCam1V8xyD2oqFT3Y4cVdNn6eFczj7ea4KjY1rUBxoBsScuJWtAdLrtDuM3QqEi2iBVszKbnxkvFU",
  "key11": "XjMTG6N65fXnHbUynCC2oi2seTRZ88EkQPP8mxa95Bwuygdh1Pss6RpB59G5TkkLTCsDKDWCep4TzKmkBBne9gp",
  "key12": "3zyV6SjVoWPNSedkqD7tY6d27McrUU1ZtFw3D78akYKnXebCRYUfPsGWcLuD98TwYdbQzWPn6cj8d9wHnqjAkqmT",
  "key13": "3n7LuFkJvkAaWzxjcsZuUwrbbf8ffSjUHM7wYfHVmStoWZhUVY2Q6TjTgiik8gBy9brj72oFQvd7TipuvoZLGwnt",
  "key14": "S4cqUGiJ1gNg1nTmYhxg333DRDuEQWbRR6Qq4X9akic8rGKiVGUEWHZwGkM177QnNw4vin1U76d1GuD9BaBPDo6",
  "key15": "2KS5QpFvyiyJKN7dc2PRuiB9PZtSaF4HWUWjksmXe4rR8YhkRJiSu4iKZLVrWBbA8jstEtqhgjqsQqMb3qxPWMKB",
  "key16": "3xjZmDGqzZrrosM51anGNJyquE4EvRAGMjmHZQVcwu53VVvpMypYEMkH7PQEvbMumtKzmnFWWT98JfiBV4iAgAC5",
  "key17": "4SvBBGYaQsRtqtYVu1enYkQV1vcm1q9U881BGTR7Ug6WH9MV259FPeLApJrSEC4pPHi3KkDmNK2t8K3Rj8V2Dwqn",
  "key18": "49jcPkivorgTy9btNT3pXchzmaEeqwXb9hFcSCf6iAi18dix1SSgjwruQLi1QL5WNw3SmAN1EN99yZ3jEQh2TS2g",
  "key19": "G3DeXqB8tDy1e7E4PQ6Y7oiRy2jSSZdvMCZC7BstFzeT46XY2xNC3nRLgR9jamN952xKZX9kkKAzcZby7gFgbnu",
  "key20": "2mQhixpK9AjjKQk4cUszDCMg9BKuChvFVrCBeDaaaswYpPxsT1uqC54TKqRkFygktx1AUyjefs6jjHkQianGGN98",
  "key21": "2RaeD2bW4GzTPLbDKR4dTGQZiBXs4qiC8TASWEazjjQkw3HZumGCriDFESiFHjkPuYjcCUVPPyNc53TX41jEzeyB",
  "key22": "4CsCAAXnW737upR7tUq4zBtttKw12gBvVd4ZndJTx9mfW31VPsLq9QyBqz1Tu9tQLMYEeYJB54kBFYwYDCexQrMX",
  "key23": "2G3ghYSuqDPhA8Y56EmSQq8Zva3PpYtS9LWaSpmFME83bYWsgtq8SUwpdfiSbsvhPMPh2UBhHqXAWuJ1Ka8K9DY1",
  "key24": "4JjEtjAiGGKAodxH3rZaKnVu6A6TCtpK4jPvqcAFoyMzbM3j4hS1q9ivjj7fGVBbAVWGMqUnnJMsJQBXyjsBdjkp",
  "key25": "djcGx9jgVBUxBvC5xDUoRKPpBEC3eKYzJE2CVyGJhyGMEHQk74T48Yo6cDTnNLuzM4FwxepoMUCw89X9Bdf8a6h",
  "key26": "3QQL5A4p4YWbaczq4Sc2kpu2aXcPfMFpJ7X8JBy9QBM53eJ8kW1F3qUtbj55UMj1aB9PcL7WPCE6G4PLPHWAyRAb",
  "key27": "2yUMihsx7WP2ub83mmZMbZDkC7WqDcv6iuEfJ4mp8DaWGXq76HJyoXsSDYwweP2hsMbYukf5DuUjt26qJY21Z5E5",
  "key28": "4ntApmyEc77Hjk9o8C4tYqv7VoJsipJdyd9APcw1VyGkJo9Ho8FuqV7DJuPtdbQoJMWji398zPGTmw1VpGFPkQZF",
  "key29": "2nYkf5mx1foEHYh9WyZ8357krMuMxHHKCJL3fKRvX6vqPNGnra9V9Ts48vPiPHV4BUdZLJhdRQ4swuSYpdyAPY9y",
  "key30": "3sheTDTppS9qGkqsE4CjKfsCLX3CZwMEqwjaUv4iBXXpESzvXYtp5rPhQCHhxhMEQ8WMYAs36egzMqKTp9jWD12A",
  "key31": "25sfBPMRNsBtrdbpjUMB1TduZWjHYVn26xiFQEU7AFscn3be7tLESewVvnezj5SfkFPnSVfjbQ5qMcn2BWsPfknq",
  "key32": "4M32QsaMhBFcPxJ7oTMJ8kAEF3Rcw6REWQyTty4ABAUxXRYwu9kAfothGn5W6dpA7JzpyoLRzemMW81YW7XMwB3U",
  "key33": "5bRNsjgV7ig9buQhKc7PdL7QmWtLizHynf1jbZEAw58QRg2N2ESeu7u3QmrVHpWdRUw33YLXKUaYMqZPCVgBJRpw",
  "key34": "2t6w7cwB8sxVgemSaoYp82Pn72MHSBRa6TpK3uGoBj395jo4CGwtXvy7epTNDA5FY64nTr2fdd9j9a3QA6y1ktPt",
  "key35": "5yiVxueCxg6ATsp9n9Y1TySMBHGxXJACSiyNBePRfmnpdRRniwfmkdqtActMR8aQU5m4o2YFqDQhsCdbRrHmhuW1",
  "key36": "iVWgw94RtEBNGeMiHKCjL3XhZK5sS6TJTx3mecGKBCsZtAUzRcT88VjRmPbH3Hk8k6MFh1x3EwC1szV3zZo5j2h",
  "key37": "5woY41Kde9cD6BiyTbA2rLtqr2SCa29FLxs26KDYLcATWmeVNX1sZbZQGK9umxK6YXwN5rygUpxFXsaFhpJ24Sxy",
  "key38": "3wy4aF1ktJkGS3fSdb5tbuxrYDs9EgKi4cZyrQQhCceRMbFTsRaN7dwdAcEfZRTJKhWBAe9AA9o9xBBWcL5w3EfL",
  "key39": "P6hFTQ8cPCA8LJdXY91wTMBvqFWP5QBETeJZSFEb66J1LwtdrDaktwE7KQhYez4CSjoEpUXXmYfPh7hM5MPjTkt"
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
