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
    "qoHPzxZcByJGMPLohTtVPJ4WyL9cvrjUiZtZismKG8xagCsa9fYkcTLbruLFKMkfo46mvddGNPv6DSYUrMfKayr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dD4Az4KDntSvs6qxjKWKHFxgCfLvHeMHFEHA7MTTsK7y25qaMrrfegbmidWYrwuDBBbwU4AQiY2eERUm4Rhy6MM",
  "key1": "5d4FjjwG7EHcsPGRmDsysp187Tf6bQcoXBy7mkWH31B1SP4XugKZP6rDPeYRJuGQ6wpZsdphD8736VRPq8R9UYs1",
  "key2": "4jQRpW9rB2KZxFXNcokrF1SNUgU4Xu13H1r4pahUbQhZFveBiLhUTv9gmEvWa13rN7nGkzPwPj4YUvwdDZvnyZLa",
  "key3": "5u91B3dx1QxSAsa5rhSJdz6rpg46X6ZudDeUU7uvR6PD1LPy44AC4NAqDyXZrcNUzAphoee4CxYRCMK5tRHz7dHa",
  "key4": "2GXGBs23Mkn4pVHfrGgRcYT8hY4iQb3H9qYAYhasfTs5xPnos4qScPmqGYZccARjuSGwKbGt2v33WsLiwwtZ4DK2",
  "key5": "5XgzEHJ6MaW2rpHMZpcQ7iGCp8UaRYKiZSzpR2nFkgoVMCBbBckMeCHQRPr7ti8NJo5K7N2e1V8qEmqKYoHQxEMr",
  "key6": "2uooZfx7JycgMLSegZNpYSXiBvumbbqDRcknPvHwmpmU9JeDJi125UQbYfWt8fCt9Yhcxxo6vuUo9ujKv14uKaV4",
  "key7": "2CjifQ3MMvF5hL2Fx7kBiMthx21AMUqbTefATDpySCZCJFoqW9PLCXxb2QaArAAKa9VBnaL22MZv36eJx6mR4BUp",
  "key8": "5dKN3Ryh18pMKwKPaSHP7w3RRW3m3Esdu6prJVNRqinfu7rDJ9DHjzAExkwkEpr4SwHA9wnw3nY9oEwvPfQbmJjD",
  "key9": "4JqN72huUywsNVEaugcqRUeHEDFvdKwdxdcHCmXFU5Qfu4TcSdQP5Xrp3y6ZvPCE1YpVDfPQ13K1XzCbiJtWtg4N",
  "key10": "bfTApwwzm2CTa7T9SpJEru85UXjXojMWU8zxz9oRPWGtLtwTTdsEH2zj9wy9SkaWQhJJu2M5xB3DXvGGAicVFZ4",
  "key11": "52AfsvCMXchzizMkphb17u7jVeWpAWZyQZ6XVbdN4wmaCVt8wfGBZNWXTtQFWMmZnUgC1MH7HzuWYqNkDwFyHjmG",
  "key12": "2aVkjS7FQ62xfRhQCUmCBfKjgBCF776MoAXBvPpg39BD8hjGPpanspKW5s4L7yqapWrxeCQJZKfTQM2SM21M8GxC",
  "key13": "4LmVfmS4jSiQW12CwVezbqsQecUn6X8xoGs6eBBZegPdM273EYgD8HZReFcVFsptWuXzU6wfDonr9dr8bjjg1bxu",
  "key14": "5qPidwjjTcer3W6m7VeB1DyGjG5o8rvHxFC7gsMnCeDoc9vt4zWXu3S1aAftGdowheupTQdyHKnWkieoEGfkaj5z",
  "key15": "cgAzagbVDnp27vKwHRfpuqB9TApUMzbDe66WDoa91eshtp4LGM7wvEEHeavxDGdvQoT7LUfns9p7t2UYcnWRozj",
  "key16": "5q1FyPZpabmTcRdEvGLGqrWPiMqTbN9QBZmNKsLiGP1RGeCbDVRiX45RFGk4xDwBXkj8v3t4UTNiBivbMZBCAxSP",
  "key17": "3HBDXyQsPFRrpKLKnD7j1Cx1u3YNfCtose5KdK5t4Htmk3w65rBag4yAVByUwYzvqK1qcuDAJksrR5hzjeq4TE2U",
  "key18": "3kiNUn8hRMBqe1Xujdtm4rBpAs9e2dKpCYYK8QKRG23Mq4itK6uQLNzLPBfDLGvg8KSXkhMcMeQ5yjvBdQmadwax",
  "key19": "5Jp9w8oDaqrpWJuMDXnok8u3EM1JbJXGw6PCoq9CP7JUZtbYnkPnwdo9LWpcUA6DAiBuJbW6rjqbE26PLFcUzx1p",
  "key20": "ekUYCHgnFZqFRC8JJXPZnZ8bHF9qcrDu41o4uRvjbmSNVwAzc99XyeXR729uZo2Ls7iRbAJwm1rKiSMYpFJojgq",
  "key21": "3YYtRh6XA8sDmv4d8CdVfGFqqWCsFEVNJHYqkZKfcbDzarf5Xx3cSQxHXzsr2wxGKDnQFuzSaFm5B1J2GLA1CBhm",
  "key22": "KQDfmn4dVW89DPQDarqQB2KZsgvd1iUbKRDderWvVNyopAPcX7MRemCxjCq5ARxHTZa2pfx1uTGHrfZJ41MmhiH",
  "key23": "3QeCDQEfvza1vyXmwATQfy8A7NKmc91zjYGw6FtXbkBbBbzTmjTuzHvRxKaVsgWAyLxFB6fks8hCfmepgrguTjnv",
  "key24": "2bTYQNj8inijCNkt9egGBPS3cDVRfWikMBSXWAJ4gqf6YXpsHscKY7jBcJMBdBPMPnze5ck5XYBogCerkhvqB3Rn",
  "key25": "45DzF369iAzsieWPZ59kqwMCfEsxNb1N6BMWP1CDuvLBYLJu9nJz8haoiUjdrkqTChTVCWk7CExxCA13fod7DqWC",
  "key26": "356WWTB3E9NA8WNZAau9BchxpZEJVsy1nBYK9zHDLpGtd8FiSYW93WDv7vzHacwJtYcLx2eBcmrEc59gRG6bcuya",
  "key27": "5jrs1yrVuk9GBbfLggPkzyvVaDZEJ2eu3k8RQ3FirCxgGGUYXbdHq1CqCcVXFt7tynpRgGQnoJ67kzfES5sXirNJ",
  "key28": "2BfRSeDsURbPAd4trc8bHQD9vRB8itMUXSWxcaUeqJiQ695EGkvpLujGamSBqMJcnBsX8pHWtUBshsJ3dXKYH7Sm",
  "key29": "2PAtn9EEQn8BCCBSeVd5a8Bo2XQ9MQQUhbF8nerKKHTT7jACcaiupWNJH8Qg6yKGiNaXuETuL9HVZqRFtef6Er2v",
  "key30": "2WcKxo2E8AHYrNVrn9LGJRFqfkKQWXjcUdCqMXzwRoCW891fK5BqXj41HHBPaWwbrt6F9cbo3b1vU51dPF7V9hQt",
  "key31": "3ifv3PcrcW2yWDQe9GRUd9uQS61Mgsy19XQcLQNi9fSLkZdASG5iBZWQFocXyfgvEYf9z3j6YY8iKgMnrDnN68Gk",
  "key32": "6bmGJicGrbMxpgUgXR54wRBeM6HgLx9cVUCmej42zvLpViXb27dnEPxxuiZqdRZ3eCJ6VW6ikiLnrD8wQdVHRpU",
  "key33": "48BTY5H8kfsYkXvUbny7iwsBAbn8ovea9hetjrbkQazTrPyUeYD4GmWKkBa2Eq8JMp4Z7nvCPXwrpSaXsjFBCatA",
  "key34": "3JhkhgBzyYqp1raHvTgDbrcgqX6dV2cTZ9xKGeJkRLr5SxxNFDuo9GUvsZGXmkkqmKLeGcBYbB1hNg37poSENJkB",
  "key35": "GPYwi33ZMmtfRKixDhABM4fgYRvN7RnzRJykCmAiM3SaYDkvgFE58a5bbwJqtZfv9hxtCX5ysmR4w9hiG6MaNNM",
  "key36": "ZDTufXoTsLBbNE7pB5Va2FTeK2SLnov2F1yPfY5yJUHXC51TWMNaBHXG47yELrwWnt2vGLhUpdL33eHtmUgyebm",
  "key37": "5S8ZvoGppn5EEPbfpJUawRro7i94RydXqBtZibjuSZVEex5ES8veSEzGBUw4PSzcy9TpATJjAq2Apf6CBJSh9Y8J",
  "key38": "5yrgjCbvA5FxLqrx7nexYekDMSoGj1DEAgoXgDAyVb42Ynmo7LBsLSXR7uf4JrEAgr1Rr2zJKHiDTb1CuDVwKHAj",
  "key39": "5BFPeFTxayEcBeUHk1azcUKfPi6Wq2iCCYyZ1agZruHRp1HzUgLrkNNDF9Zg77vzYq28TqQk6wRCEmpGfrPMPkVj",
  "key40": "3BCjFEFtVq3MeTYv8nPcLQFFBKr9qtFMYrsemJGeqFbU4Z1LBTaeuYkzEUYVtUR9ir4dNCFGYQ3Rb28rHGzwCW2n"
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
