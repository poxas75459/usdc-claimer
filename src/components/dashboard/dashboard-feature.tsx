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
    "Qj7kzuDQk24vFhShNHAFBjQoCFNAE4eR8L4UKtQAK8acGgJUmwD5XUqFv18DWRe5vuC26QenengB9K5eR2bPP7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPnb9AxnRWRqQ1ekRV3Bxxn49BAyYjwtkRSt2iSCbvAWamPc7Ay47DDHPeBr6cbzrmsgkaxnUancyXxZ6UWBG8f",
  "key1": "42Y2Rzn3S5ReqKbwz1NpQnpssAkzS6TuQhAyVTonLtRYSrnuRfydigosRa4fo7oxxWZGKvy7srjgmmQraNG2pfd9",
  "key2": "BfgjAjwSV7xBJfv8qaBdPrxgNpnt9b1pnYhsei6cQjcKsBttd9Z954HycDFMDz5PaLLMvgcGfPa1NBB372RHfe4",
  "key3": "2QjouvEAFPuv1wj6RyjjjisjFDP9KxorQowxQ2cXg9ZnRHgHA2hCN4o8SwhZe4qCuLEvegPBWMf9YYUvJxPKcedr",
  "key4": "31grfk9sJV2tQUYiCUHKfzWrN7JjDjVccTKBC7yAYuyuZeDtmNiuRSat4L63totAuFyPUTktcX1o7wchzMheFGbR",
  "key5": "2f4ffbvHFQfKbXWeQN5DqRymdRVMEMYNwziyzZ4sJtSeCZpkxcY7ghujSZ49Z2aXAj6sSgg7hHfRoEYcnMbK8fta",
  "key6": "TymCFwqfEaad8QMVqSAG5ZjzuJ5Tq6pMXNiuk3VzFUBe5D3pXGMLqQrWXra5eVsU7JMvxBfZYtsHwfZia8Ecgom",
  "key7": "3WXtUNLeZNUgxWgyCx1LcuhAyBoDAHk9NBJz2Y5aZRkCg8HYJkam6WQfd9fUty5DQLfFGMUJDmDe5p1WwbGuGfv8",
  "key8": "27xC9X5Xunm9k4i2DiSpS8FHM52mAGL2JYBib3xvpdx1E83soaDzXVjJ8zvYotgMALyPkVjyEKurDi5dkxALsUC3",
  "key9": "3KN4ezLdUTbnKMbcy2QVzsUvqhLcehnRY3JssUDRKB9bmi4iPfYx2zLwwgKC9WGtso2m2xv51c1bZDqPvdA4bcZ9",
  "key10": "5zaM6v9e9uLMW9C49UX98FmqhuLux3hnmAZKUmfqZS49ci5LNL9XRiC9hQcxSLBxnKE4R4vpmPhpzHCCjLgKdUAn",
  "key11": "5mvmq24mkUSqCbyJzQjqkuE1RSGnhbfEiA7y7ufcxo8MVY6n2djLYon4LgLjiN8reePR98m2J8WhpG66uPG2caJJ",
  "key12": "61cZtWSmb8Z57MWVwcEbjWC2vVHgnuRYUEpsBLReP3jE61xVnGX6iQBNcpC7DTHPfeMDmY6M1Ac5pcGKjARbsztx",
  "key13": "6uGXMsYoV1KpprBufBfG8L4Y2CkgzBhTYgEf6hSMeG1bYKtzoCpZV6a33QAEEARWKBBiJtt3fbDfiFwHbAT3cAe",
  "key14": "47Vppoy2pNYMyf3QtnGPZkRoVrHmYY5b3YQQRNinwg9C6CUcrryrWU8eapAKnSX8j784kMesLzxZpNMf9eLLhrqj",
  "key15": "25kHuhzXDDzDuBjqNcJ83VQ37jcdktyGjG83y3pe3pmUYmq58N81w1hh8mamC1yFfiSSrDF1uNjGyT3AMjNUg5UN",
  "key16": "47dkPLtMDtmVfxervrSQ4Wi5JhJvuW8aePFrHWsEsNiHXcegs8UP2UxUCapbP7uRKc1Q2mzc6RssY2GhvMjNzAKh",
  "key17": "5BsutHwGQLL6PMdE66cy7cBLnhtF1ZiNd2Ee5tCKTMJiT6MAsHtNybCSjro1E6SDkj4N3G1PQSJvhYmZJNp4Mnvb",
  "key18": "4uCvuY8dU7hHyAndyu9DgXTdTjo2ku6soVs4igpk6avPc2gGMLDFqTJKbfYwSCT6uHEKy9Haj2pmcjHUnEkXK8CE",
  "key19": "31EXFGDqGZmWzt3haiQBZiFSs32LgKko4ZgkivNQ6xmtNczWDg3zMBuWkrPi5mGYePn1oHR9ZYSDu75DykxKo9Yd",
  "key20": "3HoNuH2vsdp5quLXTBoL9KKj9YxUPyjWWaxy5Kmrvvtjc3sWjZeorkL8YunAioqKsfGEvd7bSHS1mfBFCu46c63A",
  "key21": "5N3txSS5Fr7Nj68cu2N92RMZZvaRFRNQVvyaRzXJTA92KowJTQxXZkpmz1DPYUdv2zMP3PYpbmqbmq3TKEiyi3ms",
  "key22": "3gWdxtMSDhJiVfnGvnaEqS6FvQAsBt6dKaq4cpqzHfgvTycSrtjG6j5g5WhigCZJM2GNJnASNJ6t21qgAegVR8f8",
  "key23": "5vMS7X4XcBUkCbd6DLGdyn7U3ajDedMwu7MGEovRUZUbxTgwF6NbrpkDyjwPKf2si1Nq6wuqBX5F8vjrQW4WdV4Y",
  "key24": "4pzHQixuWDbkaZY7FCEgAtdDxENtDAAwJan1b4gFc6cUSv6Mm6ayyPC57RkB8qXzqX6E9yy5xuEXDvS96Ap14cDP",
  "key25": "36M8n4AhgvxxUaNaiNYgqsu5FQFha5kzCNFWZUCKMJdTEdPjP1C966E1mrBdGmP2wrnGoBKVx17cAXeBD9ff3AZK",
  "key26": "6kqfRKAnp365E3x3GNNkx1nNAvQhWde2MkfNSWDbUNCRBeiTKFGUfF1P3nq1S1rgSAaNaB4ALYbzUijhBgM2en4",
  "key27": "2K5jXL9v7mZUcMUuf8pdRxdDgj849ctCuDzXVNTvdXvCwkPUQRui9CuNixGQVqEJmLXmX8qUWZFmsE3Xbuvk6rCM",
  "key28": "2Crtxc7pRsLNeeruTPfhCGMmjJnCmW4xPUEvA7PAyu1xdsAbzwuEXKsQvGhYutT3Ev2bTm6ffgzHLGyer956W9h5",
  "key29": "WtcjJzPh4VPFYfwagmDPusv2RkQ6b5JyCLmdGatDbFQkHXFiKo7gAqsSgKj6pc6fJW1SAb1Q61UB8yek3UrCeCW",
  "key30": "UpxaiQPRwBGDrx7rWA6rTVRRubPYmPF1duPFMFzhc5mzoNe2Gx1448vwNTidnemi84cYPsACFHk1raZnLJRVUsi",
  "key31": "2EcreM9qzabAAXDfGXHsu5bJBqYfvVSA3sbvx8zhYhGx7rXL5bPsiVRzUzegTS7m1PtFeCuPPBJUEisgmidbRg8q",
  "key32": "2NvoVu2ms7VMheG9RUexejaiJc87irx2QqWf86E6hggQr2BgfH9Sk1HehNkxDGvtsXoWaUUAXVi63fJmn5yWR2L4",
  "key33": "3Qo1nxsJr3Uj7F7uUMv4PNLttQs85L63k7zLMCBg9WTsnb69CxM22WjSYgVhx8nuD2LqFo5tBfvurzaEagyXCpGy",
  "key34": "CEk8ERur834h6KUNxFEVsAqyHzaqCAHMCWCbyZGB2n9ZF75ByWULpqBGYpjURW21gwFGcz3w7kvbJ3AVcdjz4qo"
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
