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
    "3ztf8YVczr7En7Rq9UNATc8ufZqEQw9xw3FmXVfhY5VbuLStntePS1JYKEJdP9GKvxztspPoEeTrGV7iEg436csT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f5afU715zRyb7NJMZTN1ANZFP5V1R3rPp5A4rbadbmEsHwZu76PjFc7ro4HDEM8TkPeXNVJ8b3yZiPsMnsLeWQk",
  "key1": "3RrbrUPadFf1tP5kFbQBeJp8CkJF3QhenghVUrShVCwTG3WJLsmueaFP2J9BxTQ45dGoM3YLndzf8nT6vy1TZJKQ",
  "key2": "GMfkCSJU8u3GVWus24K23xg6BGBxgXb8veKvtUJwgyHwL4Wap8SXrWxTThW5tRvHZ4kuxuH6FybCoMssVDAMiWV",
  "key3": "L7ABkc82fzWGXsTSTjv86ppfLLxQLmwuyrVriBwzshHy7JpGKpWb3ta1n38Hf1yUUYvJDZ575X3XwRutae2sirc",
  "key4": "4BRGWCaQXcYaiZE1Y4nd9HGRcp7CWyqn8ndBUZgXZkCdTExkpQV11ZESizRvXFWod5BR4ujRLw1u9L3PHhzqjtN8",
  "key5": "arU6NwXspfxcC16ddScreYih1y5s226B8xzQ9eMp1UmGdsskMRdFWwDC8wifcXNePoLhEiPL2NRtaiCkZ3jw7Rt",
  "key6": "558m1ZV8SwtNyyAkRX3Gc4HEap51tivqfSLYmSaqtSomt37nHuMCD5d5KrtKjuFz4CMbexTR7AD2H3xAH8QwmUtX",
  "key7": "kuc1QfG8wzRmCK7LG2645wUpvDhteUjKxhT5An7ez7gQLX7RpaihYR9REtZgtf6ngKHPWi4FHq1J7PCwTcZdocS",
  "key8": "4sGtTcZhv2VWpAgtTf8tAzXMCT5pfnPBdjGNUHyXZZviyyvwu2BeQQX69vUj5bqyjsBj6MHovpMceq9uwg5a9QfJ",
  "key9": "2E4W2wvpBmYRv3edxq51XijZ5EVfBZ1hT69WVMnuUPvBg2az7NyCfLPm2wVU5N97XsPZixFsbUhcP74GroVvKuLJ",
  "key10": "5n6LnBVXDoa86VG6JvDMcDvc5bP1NuX8Keu4HL65gHAvywSdovV5rbGnKn4qwsT6T7pYRyTckwRd6ALowzQ8mMrC",
  "key11": "2CtRPwWsW4cY8C5Xi7XsgEHKmPKAaeQEs3PA4yav7f2vvLhZ6AubwAuXuwCxr4mKssHLwW78rr9hRK7DyeLzVFiD",
  "key12": "u1abA5ZdVijCqYZ8gMZK99rcjjWMaGaBfHoq9ALJPqQEYdLdf6Kc4aykN2c2M2wHk5Nxv9N15hcAUhBAwS4xZ8S",
  "key13": "3abaggUyiwqsQJTE3zDT9yqqtQLTnKX6ty82Lo3uR3syLFpz73tkDWGpW8VAmU84Bj95KXhfSvjhHDzh4nhBgYb3",
  "key14": "2QeFxFMDoXHhu8THScdSrEaVhdS47NDYTVUaizS5XKrhiDcT661Lb6CYP7ANJnTkqH72WGRJUWv6F3J2WWZYCwqb",
  "key15": "219cBTSCT7TSk2VPvYxRj7appKw9CdrE6pM3ARgV7qBWcyw3GkKAdk1SK4cAs7QVzKZPNFgCfetuDN4WGBQjv2Uq",
  "key16": "5FLosUw98iGgFDF1GPPFq2cuEzCEF5y8EMsdiNtsVdrnLm8kmseENyTF29KZ2SH2fhZs1Co3pBMJT8359wrkx2bN",
  "key17": "47oUiHSNMogsTv3bg7b64miyWbLf2JMqixC7jAGJP91RwPeiSEb1Xt3CbR7uQcjX7Dwaiw6JLLm8QkXJVBLk1jpS",
  "key18": "33CM6bzBhsmdxxwpoCMzHQVZ9Vp6dCXh6EippmT3XfxT768yBs7DG6Qrh4cH64SbETKAJngUzxqzZdhfMPCNoFc5",
  "key19": "3UDr2WjRDsMGQ72fzepJDLNPubrCa2RYEC3hkPGujMZr9nASj73ZZwvw1oWhTscQZc7GZbGthNCfiqH4piAnLvSL",
  "key20": "PXPxFo4WzQDbqYtS8S8p6hBfMiXgo3yfMiVAZP2aAKiFaVyumTBiH8LC4nzricLG7JTpZDtkrEiQmRzcEeektdP",
  "key21": "mxxJGyFNwTP9K3hdNAxpx7P3meLYhE7Y665WmpWY8HFdn7Y2mX6T3EWkSfANLHwQsWRnk1Y7cXYjgjfkd62PE6y",
  "key22": "4q1o3N41aV9Rf2mbfpTqeJJ9M6wDiow5XngwD21YTvngiaiV2w49kjNN4fBQuUyK4ZaYTT6npJycGZfduFS6P6VZ",
  "key23": "EJsb22cLrD2J6UQYh5g4A2io2AcfJtzTHiajC4Z375p9n9YjQF7tr86hakfX7j2ewM7juQTXN2iiCTZU9vNK9Ld",
  "key24": "4zetosssEo1XXEnokAdstTuzzpqG5XBKXtTVbWpabnv23bfkMAQvjnWKccWRCHYv6qWgVALYAtj4R8m5PDfkSgLT",
  "key25": "4J1VAp3MH2xsK19oTK8rPCtcaM5UCobwtmuDJCUXW9z9x5WFvqaegnwMJ3kUH8aCgS6R1h9aHXcQrmUtnySkhY1N",
  "key26": "5ghvb5aih6DWXY2ZRzDg4igDfjBWFt98renNeWrvtTQhCwGrJHaByrNW9xaQuW6kit4obtamNJqG6cPJ4JEDci18",
  "key27": "3u4SxR1QZ83v4DYAE2d5eqqNYkrqNGTuNXfsgX8JyGBi8FKHxBMEGYGsYhSW1AvAA2Pg9QTp3N6NdY1hwr6ckE3P",
  "key28": "3SkmCaMDxNMyxuJgrkKxfovn2sS2zvxfm4VK9hzCqhaTtQY6f1HaT9uYY4dsaGDb7X73nCVRtoUGpS5LqVCge7Wa",
  "key29": "37RkduH3n8ULDYP8jAEXMkTZBW2o8WSKqEi4GMesYyBLqNbjdENWyHRzYW1UneTbtn1i9a3nefqtgZNBBj68wAdc",
  "key30": "4vKJ45zD2eLibd9nmYdX7GXhHZioWoipz3AXRp9NCiqY4gKYfMcSV2DjjfUKDakqif8uVdkVCRrqFeY5Zke6hMhf",
  "key31": "2gUH4jVvd2KSxaFoWG1PrjqbSDNZGYRpCvxvRQMD83Q1noZBKFFKMDwJEPoGwwYxDpSxa7gYVq16p7ucLK8enZGF",
  "key32": "51tZe624jLjB93uUt1dTNY41X1Ko4PkDau6p6yBGThpMQd916UfHHqoBDe5MShF1MJkYuNwXiwXPD38inJtddt9w",
  "key33": "2K7KbMQjBxZqS7iyqhk2Sz6Mim9yciCmHm8DpaVF6THhG7rWBoEZe6pPjBjkraKmxzScyE48AhUGndSUNJX723mh",
  "key34": "2167sC7i1knWfvteqDh7LcV3ehakTKjPY2Tm1LQnZymqQmFFCvRiv9ccats7cngLVfXd8PDvCJmjCaSACFy2YBpc",
  "key35": "2Sdm4GMPpztrxyd1DQojJwvwXsn1ZN5jsMGAGhViq5NnmT95rrT12S3WeEZNgtZqbvAK1q61FggS74WdDV94GWwe",
  "key36": "UQPq2Uy4DsAVrJ4cPKRym79gU4asXKQcqux1Kau1dPyeMhQiLupTuFWs3xQGgGv3RLvjsetbUBWc7VBn9QcN6cd",
  "key37": "4q2PKW2oMzij1ciJ3Yj7h5z7AeXVjEj9WeRRzFdUMP2N3oa6edX7wxS7e4TXCPzP4qgPPocwAtPcRstP6LUUQ9V9",
  "key38": "sFEuP9rssZt15xWED6LUZDBLQCi3APHjCAg8gV1HyvmKZEA4EHuEWwNoXQE7LX9YqrB7eiQS3MZYMevvKzF9bP1"
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
