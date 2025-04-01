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
    "5y6HfPLVBTEomTetfSC5eJDbcCv8gPezi3qxLhzAta1za7jvgrQHGkd1oUYgX8tofBgNfHEC2FB5kcsAPJNxz7D7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32g2pacHocDAX8G3mAsM8ekuioU9aMJJw9LaTvNpYY8RAAsjExrTi1Nv8Y3oGNbLZAjsMKeHMNrLmrwq6xUsvRSj",
  "key1": "5Djwg9FNWoiEv5ABTYvB3Et5UrxcZFeTA9wnLtqmu5t7YqwduMyBCgnmMdCAoMnQpj8LRoS5UAwE6azGYUxiGf17",
  "key2": "TRB8DGXUaqQstX9tqaHZvofi8j3ezv1xrru4kaY4J9Ju5HPY17aMAoG5jXN922KcU3UueH13FE7VEyC9RZtH9nB",
  "key3": "4vpb4c9ZK1j1pNHjXhdijvZX1FPCW7Td91CbKdUrw2LwLCE4G2yXoCdjRBsAww41Mb7iHUE7jSfqBmKjDws261Kz",
  "key4": "4r3oY3krdAq2Ljj25XTqUFLcCPWisZdTuQ62CvuKVmj91BXs1nap2Ut9GiERYmNyFoZEtJT4JwoGYXXW3MZnZTbE",
  "key5": "2p3SKPap7nJfpE3T35DBsKuTK8nERD5bEsSVeWm9bpQaLAP89FWzsXYU5SSaxcY9FAmqh9kmuTASZsKe5UgBMbgr",
  "key6": "3eE9xmsVVMvoizz9TFomoCMLLMMM199YaaLx8P1E26f6DzpfTC1h4sovWMLWzgFpGbNmTHbDdMR22N6QaWf8mxmv",
  "key7": "4URvJwW1aViAx8wJkRpYD34zLVh39EpLLGWtRGSguPL1tj7iYAdPoUc2AkURZxzXBRt9ST5JmcTHWmfoNrLU1eGm",
  "key8": "4t6Eg82KJevmbS5AidzN58TSwNFkqrofZ6NUB4YENCgEToZeroaVtcn7skt9U4yvtd2V8iPH9YPTTJpLnzeBQxvU",
  "key9": "2JBEDzSgXsns1sUYQGhHCX5KzouzEXkXSHETwgKq9z7KfXkXzpJri8RcyS6bFL33nVHfWKPPM6KUAziv8RtoHa1w",
  "key10": "7mgewhJ6DBCJaEkThJYjtnz7bVV1kxxfMLN5s3cRxZRFAtU4sN1MaC9y1na8kDBAvxL7KrRZVqLgWsRfYNpbGEy",
  "key11": "5jKP8fq8fGezPSNJgRffx7cUZbTrrn3ThMPaATyUe7wTV3No4he9VgWBGLgWWqwqrrvRrm62xH9htGccMP8FvxBH",
  "key12": "3LwSgW8a1MQCCUvxkQuSAoWRZEqi7VRvn8JZECnzdb25aVCKkfbsJtECvAey1qqrQwZ9jdq8VGdiAF7a7PgtAcd4",
  "key13": "ieAQoqmZP9WXsUF29mq716FFsmPbUkV8rhDEusi71iadhf7YtU95fnHAYZWDD8JowZux6Nc51kVk7fdA7jUR1Di",
  "key14": "3ask1PibtUwavm8XvjcDFiiBjc94ibmYAmJTQjbsyjLzic6W9BqhdiwKRjDJw5w9sCfm2oMvVmwjrgqS7BaoCWkv",
  "key15": "Zh4i2Erw47NJbdFJeYQSFC3aBuYR6pd6utvaSJ7xr86x3NwRdKa1c2TUq57AVV4mMvCPPVQfzfAuTCrJyZtzyHf",
  "key16": "3qx8jLQKknSCFoun8fyrjHMND9bnPSL655RmQyNHzqqnULvwxCWQEQKoUZ8VRnReHE9yPZiq7QnwXFfRPL7tJALM",
  "key17": "3z39Ueo2vRiPrarqC3w4bTUwkK1MPZbQF4HEgxXWeXXidbvhgVCNvMGHWpRAJyu7nFej2gQSj3bTA3cgp1uzwCrG",
  "key18": "3nuEmMXrnrfBaH8AVoE8oMiFtPKpHQEFqacjTbLhAXQ6VEUmYnEcmCh43HU3vFSZ2sfmiNWfa6MJUpCSPb4WbYko",
  "key19": "A9q9vX7RxjTwnJ4pB48Pev1vLziRTEyDUoxV6oMDrWy18KNkezZRk4FbM3CBWJbtoSixKgLYELuYfdueWJi9aAw",
  "key20": "44LmXqFh5FkfLjYEAVXFdeaKz1yJ3HgQ5pCYyG5RoZofunpgJRBys53D147D3qDCBwpthvfsJn1eRC7s47yUCQXP",
  "key21": "2YiVzitXkDUoa5eerFxsm6cuRNPvC1BX18mvM8wHQviu38XyA4XUrVBXxCJVgrb9Aj41UpMYr64pLC5Rc8XXCVZv",
  "key22": "4R2zjtqPAFc4pW1bAbg8bmvHfKGUUEkJ3s3AVC12obTxQwjaFvfkRpLEGVZM1ckTXHQEK5u822BJRKAxuzuSCh6h",
  "key23": "xr2pQKtrKzdM7REYKEKR2oREm9XYycbtNGrcFp6y8dNDArYTq2BFCdeqk8dxShRPxHntmq76644Et2krjDRZRBU",
  "key24": "wG8QsD7qXL3wYw89nBcHcRfvyNszPxkiRrsdR4adJjUd8xG1Nq9CpndCDVmBaDpVLpubMV3UjXqUQQHe75XEvRK",
  "key25": "3cPX6fcVQAs7CbFRzjXBQo3ZhwRMymKnThwUD7v9ZLjBCz9biQG4CfNauAkikhb1CfYvYgTYg6NJ2DEU5GADk6bo",
  "key26": "34WR4FSGjunAULGasc1bqVHFf8ZjMUexRECcmVan8ATwVEsYmxryBg6iWJgpyy7mza6dTSWK7LYi2ba9Azv4nkEx",
  "key27": "5kx1WYqvg2Apf7FLevtx4ZvdoiD46PnJxzP33Uvyf35Q1ygtnrQmNAqwJK8JigAiE6FgisCmgB3thEkRdcReXb26",
  "key28": "4oNhEfdcafDgzJi51ABk4duVUbcYeKEAoyoj2JP2C6z1YVkS9tTtzBW3aC7qHgBxPSimy2vyZBemPFY9kEsSRE2U",
  "key29": "5SPnsDX5DsYF1cCdujfnf1rz6ziMWFMoyswyrWuC7ZZcWwkpa7ehyDrDQBs78xgZXhaBouheu19xFbhpK7PmG1AD",
  "key30": "3gjhGjwdbLNY1pCAjuvHWttW4t2eN8kd25c1NsRG2Dy5o9WzwApu25EUMJcHc4U53DbbdDDRZwPPi1DohprBhLvy",
  "key31": "4fqnobq9ExiASmV2qGQpBSuskCsEZihyaA2VDgkjv9gEAk1JR2XE35jV4T5YHLigLVpojfT4UU7h38CtUgVcTtZd",
  "key32": "3VEHnEfRdYNWQzWu2d9MoDp8Z4H87EKYeMECkDPpsWhxGR6yoiEv5U7yzfbfrYSrYEmmHNrwHdU7Tswatx8fHE7W",
  "key33": "3QKbCkdFS92AVeZr435Rj8Nig9Z2svaK7Xi1zoTYvaH9uRzYKdKA51A3heUsvUkuQNaLohtNq9KPkF99gfGJSazx",
  "key34": "4z7wzCFSEDdceJp6iwNDxGcNWwbjr1VqnQtG1hL6c7xuBtp8XuLChUnczbrqjj1iGV6VZ3oUoaBeuw1TYoDsxuun",
  "key35": "3cec1ybgqXSmfppBz6cpcBgHqkechhB21tRqQvRjvajWwhhi7kLinxhM17Z8CQ5VeC3n9A1aMJGRqhUER1Zea2Vy",
  "key36": "2YYbSMFWpf6EpgihYLxTmN2Q6R8CnpSLEWaMsA7jKvwEYDjt2mY7DhWQdNsnTK39GuG4DG1BzrqHxGW75K6Rny21",
  "key37": "4RttWk6swDTYeaaqhRedRpxUUoEZXAfHdA6J13ineG93iHVRY9kWZ6yX4foBMFQGonPqyUKwkpmJSZU4xkzkMCdY",
  "key38": "xiDzjuun1mGfsG4yd98z756Aypjvc6uFwqBoByAXs5KR1EzgXvwZmkXKVRfNKs7DTsXtq8cUE6gzhYqXg5KZF4e",
  "key39": "gmyZ5ToAxdFi7wHLkjssQKzNbFNtoqXhbNkCuvw1iQUceh6c5sDPB4vcZa2K4ZA3q3bK4xSo6EcxunN6PKgniur",
  "key40": "5M39rHWMUdzvTNdvU6XASjCEic3farJhk84CsJGkwaUG6WNgwuRQ9sn2tBZBQaucoa5WZ7iT9FTYCQv9CB3b3egH",
  "key41": "4iiq9Soh65nxjwPpeBFTt2uvYJm4tKyD1SCUNTYBDhdVYE8qrntuFV7UNBPFGPt2wZEfkKP3eGno184E9D82sVFf",
  "key42": "4sfZtSPwXDBCf589T94tHrbwS94pnCeqpz1pfXv6WEb2Rfnc6cddPZQ67aUf1QQk3VN1dGYe5ruPUrCiuzKasY5H",
  "key43": "4DViUbqCH27XfCQCv2sYb8WeDP2BTSWX3V4Q8widM7tyHKcAcGQqsSof2suLMTupgvAsUymcZPFjgPWuTPRDGgE4",
  "key44": "YTTMa5zyNwp4W8RiSv1ipWfXFh6Zrdwu1JqxLZjxDRpDLoE7GqQj2fUbYpbfnBdiDvNfr2fCV4ptbTfW59bAkuN",
  "key45": "2fFjv2kSVKwjGMmUMTcB2hSKtBmYeSd6nxgNtjdGEPpbY9nQPpborDLsuLZdnHWq1mRPQUtB2M1KTgTHzWjxiF9y",
  "key46": "3hTsxbhJbCpKYPBpG7uYgdV4DsyZtxZemwtiyxssvpaPKH1jMceHZ8Rf9tX8rcmkLEWWWnX6NzMtoMJ59c5HVeuM",
  "key47": "57esSv6ojptTrd31dgqELuAoowvB1yLcvjNTBKLYmTyMsSVCxUeQCTJLzfPVWYNTY1emALmzshn694C8dzrc5qiu",
  "key48": "3u3raPuqZigk1eYq1bLK1XFXC4vnKZXPMmgKxccxsF42cr7A4Pymmd3NXsYALH9qEypcQJanp4KZsW19urC8Jw7i",
  "key49": "3x23x263gLsCvgLXfk1z27fqhsMkGHtqRr83TBKWKMXfpan4bPRxxrZKpyFreRmFaKvsFmysNYvTY4UgbnbYmPtb"
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
