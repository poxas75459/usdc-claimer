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
    "3So8ypftBrtsRbCf7VduTzujaQVrmQcX11LYmwXaYCstnJTpCSsi5hP6qWzVW1y6vd92BviTT3vRPPr6C58xd7P3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pi4LDhkcgDgF1twwWjvvVaWgtLuUQmJdRrb21fNs3HRYqQoWcvpGLeVowoUybFU2ZkPdRrZtW8ffzzzx5DfughL",
  "key1": "KYHNwYtn644GbbyS5GCp2uqUyGu8fPg7keZ3Jy2ssVQzi3AmJLzT6Lr2914SQRgeM2WraMhhmr9XbvbMbYTSqzN",
  "key2": "31Z7i5hZf4N7U9QYVJKJ9g6vD6emqwX7YUAEpSu65zLNDKqUmYx6m9yh3UTzQd8X9vCHuNAgeqXXRe4NXC4WekFF",
  "key3": "4fWpfVoRTVSUngu6KkYdyQ8WReRpLkXfrg6vsbed6unci6pp61f9ngxQTU1JrFSXRuBZGrYdSH7cAjw6GwcQKMNs",
  "key4": "2zffjeb1PsnMR73anCpzQRUkmoU5jPqgSSMG1uRfBQ6V6sdXK6izwEg4bx1MkDAANNqqVgxA5SwLTwKeptkmPxhj",
  "key5": "n5bd2fRyDHks52b98m4SvABpJQFbP1JrDYJeyPFoZdpvBJWXtpk8kTpX1evKcQppvt5DtJBPfmnKdZDqvu2MLkW",
  "key6": "2rL5GxLT2QZYbWHxGe7mLibAcQ9bNsu2253wHmrBBG6a3CWq54hvEFBK8vkeCFuukbXeAMJc4tShBdPAanavkAGE",
  "key7": "5Pg7t1kHAjE5dLpb4c8U4S1UR2rCY7UiJEssF5feBbiRy8fLwYuFEQrJ2jrVeCYrVxjc2gYuvppyaRjCLVm2pPmw",
  "key8": "3F4zfQ757sK1qnMFCSS41XrrPNSAMWfhRF9UJumFCahig3cE7wDcqdpGmTxAPKTWYLxkpSSjGdtUvvAW3WWEEekX",
  "key9": "d2PRPV73yLNurMqhTWUUy285VKrJ9SaS3hXStFK6Bft3QPZokw22FUacpxABX5hGdNzkSbGJTRXEExzLaNcjL4e",
  "key10": "59yLEu5d5LEG4GYrqvz29Nq86uxSyuxoafHcSRPS1t5KYYNEjEUdA3i2zt3PD4cvFgdFvxiTRjsypx7n3Q48Mst6",
  "key11": "22JaHhQ6PBjrQQjXqC9jtcjhXBqrNq5tsLEucG3yphfwzC96ZNYeBok8djDbPEYZKLHheWmH7Z826UtAkEHqn6Bk",
  "key12": "3y9krcEJtDbwxjd9aWBhLeY8s2oFTiJxomDBChCYvnTvM4z36rsQANikPQL75ihJz577bwd88Rg4qHt5uEBUS63g",
  "key13": "qC6TgtmWrRKgxRyhpM1zuVbPBnhkddyRnGyNadYX8YxWa66jjPtyKYWACnyxZkug4ZSskib7pfDi6NVEgdpoA29",
  "key14": "Wf4Y9e11RC3KYcgDWuxXbp7VhndkbJShZTPfQRKqtqxdFqCbSMdG8Fjd5qgTxsKVoSpsBd4onuXGYYRYBdVNBaz",
  "key15": "4wevYnaxFmE7SX8s5NBTLPgRvp7mu31bbxmsfBv7FJqtXMXMfT5Zr8RQiMtrvNEXYKd1wk4BNhzjgS7k18qVpRSk",
  "key16": "4ac1zZg4oZyFDFV5XG6Jj7TGcksmdVh7LDUriZY6bxu8EqLERLWZbuSgJV3FfTufWtQE27NBTddFvrSLUVaT1ZvF",
  "key17": "UvGcMnwtCZgnhwdmX2iPymc3knVYxP453emmeCU9ACJWttthQksH7J4kSJE9yTTFkPyrU1sc6UKreVtNhW87qer",
  "key18": "2vwaBENAcTq9HLVQ5LUx6wWDkfrFij3A5LPWVYea4n6nvySEMKGYQGuJwBhjr2Ud9fGs3qPpQbu43fJHDXsVxi1M",
  "key19": "2adYEgHxn8BiSSKorVLy4bFsALp1B6PFa9GXufkEtbcceaiG25Pfn3GicdwmnNdMfcr9ngLT1rm1SF9DL6Y6T9Hg",
  "key20": "29P5UhWmNYrCU2vYJCmqwdQwGMaLaNQcX2zVEV3VjJZtg3BDYhvxD4D21b5fSS6CtyMsrun2BhRKSq6Uop8Sa59T",
  "key21": "64DvbuYY5r9nFBCY1TypgbKoWQqKhkNubHnR5UahgHcj1v6N3Rx3vQvo34CPdPiCbLor6vSk6JMGEzAU8TNxR7Xx",
  "key22": "2vU1TvSdsrVJfSgzvs2ANMxDfF12W7Vp3tTirGGe9at3139HmA9kEpLMSNdZs8Kb8JXbbh3LSbKiXX9Ukfn4KA16",
  "key23": "419MhVRDaxw439wQ5MPRh5ARDS5y8nUdcy6aFegj1ohduUTf4WntUzhMRVJA5mXitTj8LPHYN17UZLv7bypbceA9",
  "key24": "2BN24DwSepKPmdqCHu5uo5rVqVhGv2MVQaoEf3s5W2gFmNbXpFRfo6i4KdSXX5UAqtVA5mm3vXHrZhTaRDrxq4wt",
  "key25": "4jkuuybRQvdH2UFSSgE1yhcU6TkK74fJHErLijh1UqoKdwT1GNEvHJwbDbLcj59Myi4Z4evJvM5npajygbV7cFp3",
  "key26": "au1coAqvuteBCczxc4VSbfHYRKN2sKcTMXQ32omC1diGgFFb4UeSW3vVzk1d8rRCWn7udjT1gp59mbGNfcgckpG",
  "key27": "p6JFwAhHpot24hfXWby47qGa7gRH6Q8Cryq17L4J71GfpAuB8djzb7avaymHTcwzXh6yX7sjtMTbc6x4faTiSNt",
  "key28": "3fFbLivXWSXHsZaL9XrZJJj4H8whyURVEhPZBtn2jXENmGmDaxjyMzEnt4jxzF6Ry5QsqEGeQn2kP4GvKJHLuWts",
  "key29": "3zRiD2GmXF4AatPYeyXZdGSPBNGYBGEs7Ww7gzZdrcvnnxrgmWR2T3c3dfFhEU72P3gkof34eqJoUgB1CbnMhbL2",
  "key30": "4owPx5Q1XaybBYGTTYmFkFeJsJJgo5CTj4n8vwRjKVWXCZ22XwxRJpqr3ov1Ddus2sBxyTJe1yBNpLJJiHRJLw8C",
  "key31": "4X6t7mVwcXgbnHoK4KP88iVMjcMDa8JiMmjvX33M4NGbSQMJFg81NLBJ4zW13UyVt9EWBNPvL8koMYU9EsgMfMbU",
  "key32": "avMkMAeDPCNULSw1wX6KjPTEsnuwAbRP6WVm9tTWx39CrR8nKW4nLYCTVUwbosBe4w8cBUgoQedE73RP5vuTqM4",
  "key33": "3wscNcTmLXFywHyhVQtWhksJEkSgSDQ5FZPSp6FLKYvqKBAgffivbVtVWdxa2pRabfazmMk8v5pDN539KZ2ajgvv",
  "key34": "5VMF7EVzoM2mLdheBx5HYTwxG54DV8AxyDWgWgxntcyMcVPTBzuxEoXtLZXi2yvep7gT3D1TXdMjnEMgdPgGxcvR",
  "key35": "62bLBW8UNZ9Mk1BYQ8HzUx2NqbHj89EBZS4UUkYnAXR4RbVALeDc8ajGX54ktbU63TLfxnTpE2wTed5TkcGzj9KV",
  "key36": "2qhpChmRzxxrmgrRuBWEcF3zDPLdus4nHTXUks9CgPp27MUA7aD99kxeWMmwyDD4ThpZ7YiFRUL7D8kD1EWLEvuq",
  "key37": "26yoFB2v6ChauBK9rPvWfFdkHmx93sKgqV6QsjU7TsFLfZQpfgo8kxzBEjoNg3TNCTeiVZ15D4av1Ye53yNbr2Vs",
  "key38": "5Tgfb9eKiUVYT5EBgKSFiRn7tARKdxbC1gZTnjNFfaAu6gBmcB1nYxv2ZziU48xGo9pzWiU6s6gqwKxRehkVgsPr",
  "key39": "3toMG8qsZrWLeWbE3nUHoKHvp3QncBaVFmbTp5NqGiYd5tJwZcP8ARa5LZgn3xVYp6zG64e2SEhhQPfAwWsjyzkT",
  "key40": "y3vR82HPGgTp5253CpF29uPkRaDjbj5151GuvV6HtY2fKymU5UmkeFtNDYKMsBcr4dbSgpPjx4CRDxTWez1iUwC",
  "key41": "ZCoySPPx52Ej5ot76mHLVioxmsjkLeyWP8SzeYYNXRC8Gb3itkaXTtZpXHkDUQDF6yMLx6JUi2cbGWkGxHCMShH"
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
