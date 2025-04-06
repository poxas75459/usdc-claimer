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
    "2FvPXvVP2zp11o6vt8LiZ8EFUPwUq4acio4JHH2SiTAjiAy4wkuHeXsGMobtBbfvNsLaiSJKJKoGA5HYJBFhtXiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dfimiB33XYG8VwuME6a2jT71dQz35NFNSRMViNzLWWQYKC63P4mp1as8grzjFSCoMBHqDcHK83J7xR9vxJpoGKw",
  "key1": "24jMn9BQZtoFtMnpyQKr5r4ZQUTr5HXCuHVzNAJHUaAtiPVkuVF3GRKraxF715uGNdxUxaRPcjTXK74KXJVGpWKN",
  "key2": "3rj1EVHtgGa5qLpihuT6HwUiGmRqEzKYWNoQjtqxu1uQiVyGdoCBPpoVheGvt9mfhuY4dtcfvsRUVH276a66pcAX",
  "key3": "bUFsm5DoqxgdZzMw1yah1C236zFDhSPs51hiuNhpXtpHt9tQs3XznbngUNsKcuetTt1SYTdYQbuVKi23EnZJPkA",
  "key4": "5cmn8Ym6eoGMmwNgm5qTn1yZTAS2AuWAVcvUTUNTa3rkt3e9cHEVikdkKqbaxgMNmNYufC9CodcWvxhTBEekZDWK",
  "key5": "RuULKkiA9pFmyqgmENT8eXCJj6bTWCXmRheduc3HoPgRJmanPBm8Nq9Nt9TgmxzoQJF471nDsCL9cUThd9VvHjm",
  "key6": "2pmQcKiqYLWdyVZ8BtGk6eyJpBAMtEJ6jqVsqTuyfQm57u1NnzD5bEHDofCFn6KKce7kmvnn7QEQZxyzwQBoYJBL",
  "key7": "3JGSgQ1GWPaifQi6PHZrPeHsjYSb1D45mcsQ6GzW6GaxxeJXh4WwcpCVCupkQXjm8t2mSQUu9Vt9cFmzD9x4fq1s",
  "key8": "5JDQCXjs71KDS7Rtas5vg1YkuyqVP8p1ygKTFaL4Lx2hgseEFBcGBZnizpLTfZ6NMjYVa8Nri4YnnFKCwC8fyM9n",
  "key9": "5dUYYnARmo1uCVqZapffqcbiZZPK5r7htHc4KXuAYjJRGZnVxhPADNnQh64RDbyBEDwhNcBmJigWd4n4EAZtMscE",
  "key10": "QGqDShMvWANyqDxoXDNKtb87vnVnXNy1f6bKBGr3t1gHcsYLYc8zt52G3jpz47sspBwdcTcoMHbfCbXfXCqE2mt",
  "key11": "5oS9M5T7qUrX17Y2bviVkaDMnRJbR1gogQZQD1HuPbXZNpHxz6iti8of2bapp9QKCrrTZKKiQiUmWHjDwoStV5Es",
  "key12": "2RansnEau9VDUFgWFkh5h6Kx2bH1nEFZg3UTREPcDj9p9wjQfnUNqjR3GkyiMaaGHDdWRZeS1uAcd5MNTRGJw6Qs",
  "key13": "4LUiNZkaDYpzudNbBHUkuNGch6ifsjS93NdfjrZtNH3VwAgY4uT5W2ESysjBNMyMswfLh1TynopmiVoZGu6gbaA7",
  "key14": "4gvc8G7csPu8sYxQRnJSQEEsHxpFqkd7jc56mxHq2hq8dbii2RmMgyCo8FFRo8XnFGhP64T6ypAaDka2jYGjti9h",
  "key15": "3sMYTVyjYSGfQFLbZR84wJRVB94nz3WjPDKLkiaaa2WAEp6yYuh9KRF2G7rKRBMi3CXVCgFzUJnH1yUqGW1R2mpP",
  "key16": "5t2ppBNsgBWs4MZxymBEsw55DDgrxPTMbHvggaF3jjr1y31atJqYsmZ4N7jHX7dFqsAni8WVRMU2Vm9HEHZomo6G",
  "key17": "5hYKX6ZW2cfBzcw3SNRHxNYDL4SsbjJtPyL5V4zBV4WadHjVp9XGakvWBkUj1xiQtmfBLtq5QTDNwzmnNJ2RvjCM",
  "key18": "5oPV86HTaf3m8S83LwX4urdZNqPYB1fGQZM3WE6knNnY5NjoA16BHwvxZJiW5q7y1s27oURQ5yrQj99c9yL3G7hv",
  "key19": "3WM6kyEgggdNcL8C4JgNTfkPJqzCf8VLPjFZMzLH34z4i1brQRydUecMJsCF4jEUQg5Da3KnHB8KDJhrhTqn7qsN",
  "key20": "2iK9T1KoSktb4332KkPCYuCC5S5ULieTRrf4Djtc34MdUavob111bNGS5dFcxdF46RbVDuYtzKuLhmirVnRxLU2t",
  "key21": "213YUmCEx6FQg4so2sUtiBJS7qC4R7Dwb1t4tV9FkeH67hMBuYvpMrd4Fpqzodq4v4mx5xpmk7sKyXjzacjWKjfZ",
  "key22": "355K4fz64qfjFBRWwWVPgM7Nu2fC5r1ThvLJXHfcWK9Eg9MqtisQa6CfxYC4UrJx3ps1vqJepofPpEUfPJk5asMs",
  "key23": "2aN3fwFjyVbyzNq4buGG8kfCGTBueAWjtdHV3vzraXCoNnPVZTuRyWVmF1bofdTT49uSxkHEZvq13osBVJS6Ei1M",
  "key24": "2LhFXpw9pN6dPsG2DyxvaPAmi5bFsa4zxV5Wcgmw3oPfDQCCzWqSj6J3PTXRWq8p7nWvkgSS9Fs7RY83gu9fyDUw",
  "key25": "5BRtjNmSVA6xeB2bfPD9w5A7griLohgjTjHrVHbiyn7jESvwSLReHac4zrTV4XRPhiJxg9qqUpgbRBaa2PKbwdme",
  "key26": "2oxDrV4QHHZsUbJWmL2DJbDWkYrD87hsxVHQgcBXx1QUvMbpVf6saVA5STunBGk6rJTkEuEJ3xkGvKq1DuEuFTaH",
  "key27": "3G3LRQT3zc8KX2fs7J8EBPRhziRyT5syd8qQJcxpMeyfD8tLBsAofwGx9MUKh1yUtvpL1BYZGViRKUCPKfQf52qw",
  "key28": "FwPkf9cWiCzM38YbN5PMy1oXqRYyX3AAtzV31yyK3HjUn5YCoeK14Utfc9UyQbvHJq1VEGTpKm3bSQ7wUnVA5Ha",
  "key29": "5qEvQxkptokRaq3udv64D3y25jQwCwLJFCeRuBhZ3jhq4BiktZ3VzArYs9gEGFutSjHxrSJHKcYESkD3dGNDdjzA",
  "key30": "5XNJCB9y34u3KNLsJ4bSh6bpptfWq9gBhVUkQ3bGEyck2TughGpM48ApPKWRrWsJhgVRZaTnHSDgp9V3qb7gxZaT",
  "key31": "2p7iDFUByuVSS3VWbEDtnsay3Y37WhfhdEV59qcAWdssV7GkVATxW74dRFxLGjGEdGxnpWAjQ3Law6xfFsxqbroG",
  "key32": "3jfDLdfD7cBkvxMAznJi62SqMcgxSNUVJeDjE82tF29wrPtDEX3p5gC9qH5L7njBJBNPkU9KUP6ePe5RbxcSjjNX",
  "key33": "3p3Ba4n3WgswPraYphPKQn69a6KyJLAAYuqnRNVq4wFsNmhVP4wMM43ZozGrjw2aPsq1HCePJC6g869GxVTqhvVa",
  "key34": "4BBNbwJwrh3NEUaQGuo8936aUgk4zGcCKnsGnF1P3WFpGXqQMp2Q4chDBvXmra7dx2rtAqPWYypFSk2HZpWGW5E6",
  "key35": "4cXDf7A8vztzzCRtoRt1H5cAv8s2668cMBESQQukFTBDiRePU4swZ4uCqaxMtyq7LyXuUH3Y2Q4rMJW4ys8GWmNp",
  "key36": "38j2pysu3ZJhkZKs9MUrfADRNiBLzeN78bXeksBAbXsgPEWpbzeWari6QfvZnMLDKRocgVwG8xd2z4LL6vfFygVe",
  "key37": "2D1gXRNKs8ZUnQe2p2mSDhDyzpR9g4kPvj6deWZQdXSFE1dLY9T711NKFKS1ukde9uwaYEdnwtNxwGgzyd6FYWTV"
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
