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
    "5JGZLtm2PAsyeP9LHNq865kfR5gJw4ex8CwyTWU9PV819pbwgZvBVX9LNCFxapLha1iX6C4JavT45TwimXQKEXor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xy2CMpG6UKji9ZnXDe6pRBFhZPw2u3Dk5XrseFcARxGXD2ETUSWv1Yz4wp2KbVtvj6YoGyv61UU6CbSHAamsc5w",
  "key1": "2ymY932Aht62prkzr74LH7cEyKC7fdFm7E31tXm3xJ2UFP5FDFQgeLU7hAQbiiwKQHCYaQAEiKExebX3ScJKSS5i",
  "key2": "3yBA4uLYiVSMwQXordjXtqjRyzUzYpzefjL1ayBTGvK9J3qMZQyKoxD4CEKiQpdN5rLSv4uYGbV55Ti77aeCbTLc",
  "key3": "43DihiRoFNqrWRSzhWXDh1nDSZiqhsq7ZiYupBFZdBRUvwdwXurjWTZY1XeQ5n261X7JB4rRgGsbX3tdjQjDXiLF",
  "key4": "bzf2AEFDiouiKa32Tczas6mGLNTbzwXvjccbWT2VDFpV48BMQER48mDr6qvr4K6Gbsgv3HH9oDo6dHKs1VbvALR",
  "key5": "5o1iZfX9MYFVTs1ndXL4dXcrAnfiPdxJu1JH121JTb8ugsC1RU7Qhk9VcqyMk4BAVyGicj85rrWJ5SG3YPYheruV",
  "key6": "5aXc6c8rUJPLqk3JEdAzhuevBXwqc738gmCann6PyYbz8qbv96p4id8NZAuF72YNsPB6xv76jmrjR5X3bJUNaxpL",
  "key7": "5zzZtoPGLUFKXqPYnPiVWft66WbWpKAf3UP6i8SdXNrf8zc15u5L4rLp2faxYDnX92fzHFsHy4dF7zu3ZHFvSJvf",
  "key8": "2B8FqSUgXFuTN6gxPBf6KSgXQFbNhLcjPvQo8UyBUb78YNhr7YAPymRtWpyEJbWGSv15gioEHBFH9vUMMTEbx9jc",
  "key9": "3chpwf6ajSjSuSaymeKnVBQiPxsMbAbPqwBEtZp1sLcxMHywjjaUuEqziGjcNjDv4tZtef3GxiWie4h3eEPwmLFy",
  "key10": "3A7PktYqroZibj37e6mofPzqmrX9gNKgHD4v3MvqTsefsAsdZu6pVX9fFnxhgrHnZt13BoAGgqWMef1PsuaQKLJn",
  "key11": "3ugmpMMM7hQDpPgk8JVscADvKVTGAv8hZNWPxrSMTkWqntSyjSi1HNUCjLdRR6NthBGvyTxL5yogEZWFVGvvbC5R",
  "key12": "39nzo3ehT851vGwqMEvPfMssn1kJWQNFUXHA5jbY5NSFnsqHFPJRMn7VWv1ZBZ4ADd9Y5Xk9PkCrsKwQwEqRTh7h",
  "key13": "4LatXfLU8iQKWxGHApdFj3cf4fZs2RbquLT55oNQr3fjw4Xrwz9mNHNHRbSAEeFQeEDCjD8hUfBm4n81sozC8R9m",
  "key14": "3LDm2aAnj83nQRBNsA9KZhuAVbh1hXLYLTB4uSLBnuth38EUyHEXm5huZq887dhQt49W13hBpLDv74Dz6P4PAe7C",
  "key15": "3JZjXLmqkSjggx1SMMgJJGqHECvyUJ3yt26fDSMeLbAkiD61HWeZxUCeDf35pridkbuRZuK7zPohwPUZfgXgH3LG",
  "key16": "432FKMxvqAqvch7ippUrQfgzfn9nSF8YGTCWFbSJarh2m6CSJWjS6Yp1HTGBZ3SBB4vSgm1P7ZCD5iZLSi63Nn32",
  "key17": "45kh9PRN6PAC9NENwq7CNzrnuDJfxFy2hsDjap23UNaqEDftJRMj4LKAtKwX8AozcfpVUbjFXCtPe9NXVnMCRuKt",
  "key18": "2J1APgnyEzuKBz4XqJRMF1TBuUuVFca3NnEQ5GYeUKAXXiupC7HecdB1ZVFsnocdK5TojxJMZinp2s5yPg4SVtG",
  "key19": "4gTvxc6eD25rzMnJynHkd2hFTSZqt6tBxVQcgndSjk1yn6mSMJwzpvqmr1Eb1xF95w6gP7165SVAz5iEt1H4zWmG",
  "key20": "5jiCDFPNNz8xVZKpq5vSxiJgAzwQ8NEvp44Uz73bu92x5NnAdALDVbMznep9tcDjCJ9sGgF2QedTN8v7w8eR4DnB",
  "key21": "sx9nnxMiPvfwrVQKSdSJ3DK9QiqAJrahbSgGj4c4w76L6z7yyZkM3P7cMTnJzjaf4Vea5CzSYci6AvWi6Qg2cyR",
  "key22": "39enuxhVw5pwWSjvwdKnnfdy9HtMN745xKM7kt7EZCvKwqeyHNA3wUvgvaprCaR96rSL4f2n8RXnS8yLPLQCGuXi",
  "key23": "62fves2XUrsJHxA8ujUzwMmxsVRreAHnq6LRBDdmUir2vKxC8MoSSAbToZU9T1tuwJJCz1oMDdBGjAxxeJ8BqgpN",
  "key24": "57DwuerE9XkhMmnpyregcNP4sWXz65xbnzmg2VxKF3hF984SmUsWCUzFFYg639i2nwPoNxrpF5zgcrD64r82Bnju",
  "key25": "2RTPRs51778wQPzS2Sk9H6MJTT1ULDLmtFUorGzsZrmTwk99XAzZYxoPwjRbExgZYi3DNSCX5xCH2innUt33H3fv",
  "key26": "2J8kgrbr9nfkQApYnsbWLhzorMCjNQd55bqEn2tLuuFfMvUPs1Zo1VMARMWgrBmDhSdji7SnHJobufyDHCpDSXDG",
  "key27": "iHDVjZmthD9AFptvLF7zbw2QMHEPsVZd85p5JqGvuV1kWdc6732L69dkgZ2Ts8ik9gdvPTGAYxoXJFY72xRjJnm"
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
