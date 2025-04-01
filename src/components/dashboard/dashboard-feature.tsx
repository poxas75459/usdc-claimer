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
    "5PCFJ3bw6jbAHoXHfvPcvJxEw8HiW3zuWMQRDkQUe5VksnLTjiabZBhF8rdxfBAWKjN4GMHsun1b5bNkQsf5pmLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63BC5zF4eBP5QzJw3hQQAiHz9U9zxuHomai6R19uiGV49cDL7Pxq6U6Veac3vpcWapsSQEXUnH9nxDDgjPikh9fx",
  "key1": "5UiJQAe7gd7CVc6tRm7UZhuRpgKswJpUWwUUdaaVesV3gysmngZxJtQ63mAhNbV1itJqmcV1wAAV8HAxihQ5jsXi",
  "key2": "UFTcG9VMfFtsE84Qr91W4cNDvDKjeHtoyt7DLhfWV4gsqiS29VXHYybMUbwS5ZWhre63ipybojqJWQ58KCwiA2Q",
  "key3": "657shxmYLK8cjTj2bFfnbAFqk1GwShp6PAeC9oTqLZVaYmjNWQMonkCmdAeGuofeghcLNm5c3nGUYz7KcmYrhevX",
  "key4": "2qiztwCPU4sQ74W3jhwVTBaMKYLphJksvvDZ5qJpb6Af2DAVMUFjKYNdpeCR3NTPXjUHhtefmrjpEpRJmB7phHfy",
  "key5": "2DRLj6bsdU5UDA6cermNFQpoqgq8NUGQFqJ8vqqmzJ57Lzm8Mi8A5PNuqpDtUEoQK9DwATSrk58gPAQXpm6425vx",
  "key6": "5JZg3DrK3DXgCJVMdw9z1nqze4CPAJe35ZLeZyfex2nFBGq1yFMZJHoXtJSLn6H2qrjF4kKH6Ruw5qcn93K612pD",
  "key7": "2QNFAFEfGZQtk9zMmE2dkaczb2h1kz5RjzgLsRJUDgBkz96HGMoifSKPtLWcukX7zRPtByFqgwCd5CUY5TJ7UoY4",
  "key8": "4iMMUzp4utCTRSaPBYra9ii6T9pF7FgSwXvF7rWQBsx4zrrkd8ZZPC3DfVP8w2nUkfJWFV4KDDQZNe39ARhkMA7K",
  "key9": "7wfEJzYm8sdQmK4U4Dqx5K6npQL4LsJGdb7D6pRguHqNDwvxduvj8YJGkcMuqT2jkgxtZf6M1mxzYUFWvCzx3Vd",
  "key10": "475TaEVHE2XvkSCNSWgUss84cVuHakodbJZuhsgTugj7Ff5ywQJ5gZ8EnF9UfgESETFBnZznUH1U2kxYRbeJZ4Q2",
  "key11": "3fhbm7jzqo27VmdG95MGDDrK1a7PcpbnCHmoeH3FSwNErEyHnJQmhTvCr2ua277Ap5mU77gaQXvGkJ9V2zz3J1sh",
  "key12": "4KiFT3ZewH7Uv87mu7vHUHCNHLB3MPHYAunLN6BykqzrFt1A5fxqCySi49QJVZMxAJ7s9L3LsCKPjbmdyWLcDzTZ",
  "key13": "5vzqN6QXABPW5VcfYf8WCXf7eF45zLo1Fc2JKBY71HxSw5ghR7Ffia39pK3VanfKSnCMhaipyyCUm2KvicbUC6hz",
  "key14": "39ES35LBmSzsNpniU1RRw3t8BUrAibiYHDN3acfhMis7YyUNEQHagSr9uJS1WY7M6XCAFDkPRHchhzXG8Yn5A35P",
  "key15": "4vabhYQviAz2vKXVL6gwKZBfLmbB3F2dYmg8MpfQkjUgvzYgmh3csvSRDGsn345DLvsiaSmF5jrSE19TCYEH6PTf",
  "key16": "5KT7RaRaKyUi1Xq8c8u3oHtnRoCZS4GFN5kmYFHTxBqLqgSqSJ4bSbyjyLrYpNNKkEQWVJtFQ1sxn1nKEqAu6BBK",
  "key17": "TowaLEG8bekCv5rkqj1Gn5WML8ycjFxaGzYCnYodMjvd5tdgGYmsAwKqiY9ySFxg7Bz8nA5qFkRRgZXVvFFV3Bx",
  "key18": "5Uy3KDP1tXpJ9sSkPCgbEPU65RpP6VHSKeHtfms3NfAFsM8hu3gbXUWuxzd82RW9G1Hvfp1jkssxuKFryNDMrLAF",
  "key19": "4w9k3XBxpw6U8knyapqC9gY7AkvZq5tyMGwGRfwNcwTT2BsF6X6yLEWX9hT4Ei4Un9FAZP7Nbf3NzAEbM4Fi9S73",
  "key20": "3MPaxrD4JpvuBQfD1B9DeghuQZZpqjXMSLJW9k551FzEBu5azXzTRwLihCtUaci2m7wy8kRhk6FMEWmbihQLZTdE",
  "key21": "sfTpdqH7ftp9zsmUX4CUtKQfWXpsLs7CmUTQRSKk84zyyY7WmH63XiRjDBM4FSKWQ54E3Qknq8q5TXegHDNrYwz",
  "key22": "3sEJJ937uoDpWqG5tgefAZ4QapaaiFAq3pC7TaQQcR2NZQXTfnmxizBbnjHo38S3MXK41UZ64tc1PJ19LjF12t52",
  "key23": "3pVSkn63xxvvPo1XDxcite5z2UiCZ4Y2LHfyuRmfjFMASyFrqMSmXZ1Tdp8miA51jLYd7J41jqrNhjdD1i7X6HJu",
  "key24": "4Tknnzsd8FxjENw3cUMw5ibdcAChM7a9VtB1HrMvXHEUskn6nfaNB3xrcYNonyNRdURnhxYuk2cZarpKa2zU6NzL",
  "key25": "4jDcNLdydrJBAkaFLnbUGtQHvjPMc7whAZCJ9x7jHqY2mQ64s59pWNaVPAdCg7uSWXyRGqkAAk2Aexj9LU5oMRsg",
  "key26": "58SQNf7Jfqhdq23bSvRd7bv8d3VyBDbwgYBPZGP2Ar4o52gMehHG1wacKyiayTX1LWzvJZMEmbQWcXKWPSnoD2p9",
  "key27": "3tFsTH6AqaqPw7DynUhH1ntLbYLbjJCL4f8vWMytw6Wa4rt19jQkG1KrRzsTrBEAkhA1A2kDuQMc8dvefFhEgVK4",
  "key28": "ED5BYG5nfLJoPQmPhxsGjV3ozgNoGCUUfX9TJFVVtHUVTJxC9LNvdmerPEQtNWVDJhVgjVrrPdmPUmjWZmPqTAx",
  "key29": "Ko4vCQBn8PyVdFe55M3cm7uvke3kofAPib5V4KDzPnJESTDSPjwXNNbWcfVZqsW8DfRGWAiKZzvDBQyK1x3jmPV",
  "key30": "3qVXMwqui2V4cexfFFyp5Vy5gx979qJxnKQBfkHQvS3ebPVf42mVcig7de6r63rCAXb414E6HxgxfyuUrtHs3Mqm",
  "key31": "44H2nur7iTeb1vyCBLLeycwdLiEeU2Gd51rrSrPWaae5FrhpCcmbFznU36eBzTUXSxCUu15HAzahDfAE7sNoRaGr",
  "key32": "pdpTzoCEdhKik9KecW4eS4BP1cy49h1TYtzGXhzG2SwTZyEVemz73jzLZ1GLU8ha5EWHGDAReqHfgMg6sToByVP",
  "key33": "64uPAsgaDboR9tktrC1UenRydVAVestTGzbehSUF4kb3rHnNTExQYzfybhe5x6RNfdksqSXW3sdkE8FTLFeF3oYk",
  "key34": "5NvArYa6JF915e8LEEyVtFfRie85zgDyGUrAgrJze3cu2JQ2Ddp8v4hdbhZiFRjdUeZqoDQ8PEMpccFJWYm2zZkh",
  "key35": "347f47EaeB8taEmBbC9vhGRTLGjZYUZJDDPMmce9LHKt7J7AMTU9atc3WzdZurtzCVQsX3Vc8cHwX8uhTYuk1Giv",
  "key36": "5uhTp1LSaQfycmntNHZhGcZueFVpEtNGpg3xXLxK33iAsU1xgWfCWwvCeq7PmYUhrqSFGCet3bimenEMjnt5XoxD",
  "key37": "2NMxDfHMnnzBRic8e8ZQARpAgqXv3jFx5vtTxXHQwFmoUUJUtxM12y2aGyiqU9Jd52g8LggBvBDUqjaq8zqFgX9K",
  "key38": "3hWLxnfybfHW1eZnbC8RAaTkZ7jZdua9RxEJp4REhBBouf1ZMkjFoeQqM83rY2YVd6JcNdBwagwBzenxvmHSibRx",
  "key39": "5jnBedGRY6ky6Fx2K3hwbF8XLLKpPgFYXrJpPVreLnLyskWrxYA2fAfuqyPwy1aJ2iX3mo9X3sMvcQPEbZmXxXz6",
  "key40": "4ak1suzSdQ9SQSniumE9YJ329ruAbnqTk9vYZFBcHy1gWK2MkPewErkaacdGCqugbABZuu3QSjicza7WzBCVor9u",
  "key41": "Cj8e4SLP6yjYGDTjmdYwxCX7kuNYPqb82QgNoqSSNiw3bREYms4zvd8GgzBMPVG936i5789dKpkcWrv2h2wBaQ8",
  "key42": "33Xpi5SxENqdGGmnBHLttwJdqVXDwzeQHSmuM9jwWeQCVQv3taB3G9ibWvmjkDSRJHvZG4rgqJa5gBwe8dNHdANx"
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
