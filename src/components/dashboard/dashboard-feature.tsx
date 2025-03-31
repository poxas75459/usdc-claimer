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
    "4ShDcjKuSCvpzAZRMcGtfuyWTzzz9crBnQAdP58F5TLAHca3nGH9a1nZZtm5SU5NacZoydyfdavD1sgJH6j3Qvy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39iHvoZH5wCrfiUi3gPWMFGpwKjvJYvjYK2pcN6W3PTFCsnwyXCBURJqY2HUDagu8JC64XyGYVvntmSa98xRq9v6",
  "key1": "29ZQTekgf8KNttkxyDy4r25QUpjYusMREXkQwLhKMEgtFPHLeXRJKDw5KJcgwmbxbooAigptXUzFLBYdxcKVqQTm",
  "key2": "2qAX6B2FTJzTDJkL5EwEzyf98oN3yrQzURj5JYLfYX1srehVQhoV74RKovnY3NVBJ4NkR5GG6zdwCfc8smWrgw2E",
  "key3": "2kNTGFXmLTDAUxt8LUH6GWbjKsfV3UBV68p1VHrncn37Ek7GMhVkZ7Z5gWJH8daMvUDFTsfjX9y6Ky8wyNzZjwFW",
  "key4": "2SnGT46HjCix8LRUStNmF9JUrZigToDTmvgfVQ75BRG6V3MFtUKWu57GbZb9YXeRcPCVSpPykxYu5FqjrziBPVbb",
  "key5": "4tFaR6dMx1ftkRJkztk8m4JWRrKT6oDajxbQQN79nH9mjpECSTaQvqKaNgsNRNC4aiMTA1d67HhmGnCW7TA3nvYt",
  "key6": "5Nq7T2LGXHfFvZR2QWnaUvPabq6kXHd76WVHEGxESPFTb69KCugVcgnb5X4ZBePknAp6M7TEofdbGeSGy57Pyf79",
  "key7": "2phedHqYNDUKmedpBLLJGncgf1xuQNj6Vh2VQGJ5YMkbmaSHjCAK4x7kNWL5GemBeuTNDAxepeXiPDcygRF3EEA9",
  "key8": "tJ3XW9UFtudXHppdQUG6Tj6PBqA9dJ557RSKXaddaeLNCbbhctoHF4ZDmPPyjbbmahr6KsY7ubQsuGYreX8JtmC",
  "key9": "3UhfqZucCBrBhgDhbsBVtTzbBQuZLXbGybZ9bjrY1ajsqRwPX13xqjb3bviYJbLmh7XDqd4Ce2YjH2viTufkiqc8",
  "key10": "dLaVa6w7RjQmY6GLPUaYMCAH2NeVYmfmpNWswmTyTATw4SEN54PGSKN6Ui9NXuxorCYVZ3jrbr5yiZPfq5aL8as",
  "key11": "54noVqtx5iu5Jic9FHWUQiRvKMzC9wRYtP9BysH6pqbWtXgDqViPRbfqHa83FKYrEPRpKGBtBCKVMBJoXDbpmTcw",
  "key12": "5fit4p65SdUG8zihAJEYYkoZH3NGufRYfM7mkw1d74kED6JdxYQ3HShou91nSQYEHMoMwvaVWBrzWF5R9iMT8cNu",
  "key13": "4R49SJiieJx9KyHMJYJgXCqfQuyvow6bvPbjv5Y5wSus1xQGJXGeuLj9CBjzDnUnjFQ1A5bdGbmtz38eey1qDASU",
  "key14": "3jgz6GBok7NnTrjL1eB29r7yyoac4fD7y7hirstLoSPq7FDNN3g6ukajncRNMaC1uWYTAmMyogt1nRG21EwsrXy3",
  "key15": "5nYCnH4EmFaMsuiWmpetPtaKDP9t4qKBPBC3nGLR6Prn6TyMcFpN8PQgdsLwcRL4PvJ6byCKP9b5WRgLDSLrJG2o",
  "key16": "2QU4PTvPVWLi6sLjC9ogJ7HZJzENJGV91icuVNp3kxYRxBcF2nYetdq9gBR4E1bNoCSrz71F6JzahAZ3Qt3HGSXp",
  "key17": "2aVcRNWg6j1CeUTnY7jsoKj9K5HcRe1HDhMZjp3Qcxgist9VRaDeFpmziqaQXxpcWQYs97tdpH94xt6uF7BvrFua",
  "key18": "5RMg4MAYSdWJsmN4AMTCxKAVVPQ4kTNfPDSRUj2m9hBJWBuvzfVWS3smfVJLZe8zyXc4huYYyR5WwgvffrqSZ8jz",
  "key19": "7iB9SQq93zbs7xJtkmC5VECQq2X1tQrJhyu2kXS7DaVzV9YdFowX7hK5uTGGorZQsLoWQANgFXAV4ECSEMUmFwX",
  "key20": "3hnXPpBo1YHjcxuo5uZqhREW4wRsVj44fWskqeYqsAyagpsao2cPTv2Ukk9DkceyCJkBqw5S8mv3VhBasBu5rNKN",
  "key21": "4RzN4Yoiki7YyimpAV5n7zGtZs7gVomgMLgtM7y8M9jauj7sFsCV7gJL46cw9ZiJaoVCzXB4aHyvmYCX1XG6eHsr",
  "key22": "5JBDG8ZmUE8zQbZ2w7jn9wDio77JRbamuZhsufDrDFsPYTXsr83bKC2BqKYyDkCcnnWiapkjPhSB9J4xrAiU2VQB",
  "key23": "46MKXFy7mHSsLJgmYAXQQAqUab3ABWToWd54zMrupdtTVXVgCNRxcLkUwGLcpVkGLAMFwzV615GWtN192SS315cf",
  "key24": "2ME5srSkQeNt9imJJuoFGHxL6nMnjsiGfY24Sk7UGCHJzJE2jE6YjCVwKVnhDi5RamLmTtUMYKwXwLetGcwfdy5b",
  "key25": "32fvHEv27L4XHbtsJaFPD9P6cNv1kFQ6AGt8ksSYzHPk4jUq7t37DBwWR4UMwtkpqxTz5kKfnUGtCv2Bis3NjU7g",
  "key26": "x6Ur7H4sfvNYQP5HJhNiBrAQcTc2r3CjwQt7Dapc7c2iz54r6mWVt1AJBGYMouqVMQ339k7q6b74NJigBWgjHDH",
  "key27": "3WdJVcYG6jmFPeTbQWkmeZTnp3WJvuE2ksBkkwgmbShCj5niGvaUx7t1yG963ezmvJ8qpzH679kVP4p6XwDEbeYc",
  "key28": "24uXqUuYzykDQZtXm6n6JugfVjcuSXUUECByKXfiHs8LwZbrTuE62xvGvZrgHdG9QDRLpVxSsAyMPEgKfnTgC4QW",
  "key29": "3R57E5EtpPFNbH2wgVzru2ybPtPAgoUgKjvMfux1xHDFVzXsmh1Z2JbU1o5Y2gicdYDv1Dg6G2mJxxtWgsmnmx5P",
  "key30": "4BsR9U5pVahjXXfPsjGVxJjTFCCK4zHbWfgmHyLnWbve4w4HBvE5H28MBUNpQZosriTsBGw5siiKjF8cL4B7HTeE",
  "key31": "3Ed2QrQhe9WKQNeVYupjiM1e8ptobe5KmF33QJ6NdQZVJttbr62iitCx5CQwB8Jd6ku11NnzDwgGgddmzkmp1rd7",
  "key32": "2tUjvMHBjEkCeMu7PZxaB57vh96Uq14ccMSeDRdcyryF1hNpYR7Wi16F8ri6mhMVZ1P1K7pe1YzcJU4cnUdPKN8L",
  "key33": "DB7GcSeYhb9gBmSw7SE4bPyarAFN6stgVCjke2Gdfox2kMYvoa65wxTd3TUEVZ2EJXXTZqH9K9nbRuZKAc5d9Nc"
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
