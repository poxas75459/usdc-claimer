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
    "62mLEMRV1kJDb2yDJgsbtEiB4wENwnAuvwoub9iFg2gV27yuq5Qw1g38Tx5zK7AzNLXcmFbr6HD2ozmBu2eTTYbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aSoa7tuAgLGGJofCh6fnoS7jw5STeHPD8mSTxZ62zSPbbFJFfrwhhDecQRhSoandxojnLmvU7ZVEDAo3AqWvZBB",
  "key1": "3PLzTTtiGBjKbZUJP6xBkTz87fMky9Qu82un3ZZ7qzKmZ8RxjZo1gwtEzkPF7SX7seZQdzBqdGK7g6nZXGJghNAH",
  "key2": "3UxjPLubjMfFa419pLdKoJFLBHxPLJWriMBbdxt1LEeCBwixmmSy6knY6k2PDuQVGQku1JbV8VvVePSAX8qjz6rL",
  "key3": "4NnVQbPoiG58iU5fUn33yV2pcaXpPc4fFPwAGfJx7u8mBhqD8ABN6hZnXj3oiwzLCATiJPRXn8KiTehSAkPxm8jY",
  "key4": "3z5LZQT8HQLDcYFjYJuupJnSFoiYUWmbg3Nk7A4rnPyQAs3iv4RMeTjMFYpEGZm4iHonwefQz592gLcaaEwPXhe5",
  "key5": "2Xs1QpqkeycRCCxRoRLvnCJGnSwbttYiVYzsUAT2LzdL5Ywp6FhFpdvxGbh8zmEZrHdSVmHnJ5o2LChKBWL6WiA",
  "key6": "3hVn79VSJJvf7U9nJVKFALBZpHaVTA27Dc2TetegnkiC1JqLDeuSuqY7ymsN6ZYaMM6Y1Mg9RmuDkZvo2narJdrh",
  "key7": "4eTPh5gdnuQcHGUZMaKKgN763pa1xfrhFTPSKQ5AXA2GH6ABYDpr7MvTcDGQCeBvDWYbUA4J5kzEp1DPaTjsc9Q8",
  "key8": "4Eu9QgqwPbWZ8SBX43v5DfwGLt7bgv9zm3h39d3ZhiRgCXY6RdZstg7Kt6oh6dfNcuwZL14NMWrr8gCxG1JJuYfM",
  "key9": "5D15aokTxLPUeeu7eH6fkzvohc6rybsp9wF3AWnXM2uhqWUxGVdUbPEGRCSkKEUUtTRPCLWK1XH1fM65qR8ZKUgf",
  "key10": "3EE86pJvrVtFE17J1TvhxtAD6s2fRzLVwoP3WEoGTaZXKKLH1AbGMMnTH7Dqqe22LrsaE8y75roy59tpMqhV9Yfk",
  "key11": "2cx4dEsDkZdAKiG8NN4iZNoZTgGha4xxBsbQXC4cXzPihPrr7bVybhM8dCxR9wwi1hfAveztjYbu5YPW5VNy51nR",
  "key12": "5VQMVF24CcN9CEiiSNPSixQvmM6dNGM3wRWrPLWjH3vaLhsa1VQN7oGtzWeE4ZZQPvcG4sfVJU1p7ZD8Ru6Eabva",
  "key13": "5yxoqVYLXKWE3QDqELYx8oxbH1hwonDZ7t8YbVM36toBuuFBQFRe5bQu2y1KAh1uhdd6E35bBwQzprX2rVNueNSF",
  "key14": "3Akyj8oVrJGn9Z1Lj24Prp4ERQsFCgvVHaYNwhrXk88B9rY6shP4ETNa7iFdQAn24WQFJXgBuQeGR8BDraZbHpEq",
  "key15": "2xPbDZo7JVxJWLypkSVUWqWsNHqRbrFztGLx4r7ABMVxT6b2a9EZgWHPc1Ksziv9iGGmstxLLV8FqEDoc7ewFie6",
  "key16": "5Cn4mfM4EEJM8G6B3ERpY2nvnvXHjdDT91Avth6FYTV9J5yQZru7gvFYYCvaL65yLTfHmCNTuFM4zeSkCNhRbxYN",
  "key17": "2Gp4mSP2ksRb4hYvkB9RjQUJXNyK5WTCCK1u58C4Q2zhFuR8bzsMtLBdqMUZ4FTqnGsXpz54iPgoSgLUJwG79MH9",
  "key18": "4qYA3ceZAPqEVv6Jvx5TXiPwy39xGUFBRCqfNFDDnGZJmckYAYmEeNPm7DitiVHJtRBLmywz2QkbncgRaNmwhq7T",
  "key19": "5xqKpznatVGt82J9i69TmqPQycdwBkJFZL44mhK5z88vkp1HrFZze7bL4mZaFNgYCrdDYLdwgfQ5sU82usUHhryK",
  "key20": "4b3Pkj8M2oLQLMH2mfPcpCqrhMhXqqNKeBeZ6qcaVpWSs1VLsZxnCrd4fWy6KUwRzqzA4SQeq4Y54MC9MjsDfVZH",
  "key21": "271zHqi3WCZV2gFH1R4LzMmyknawRGQp3donWNwVj5CtFG49tSYf4EC3wWkSLRjEhGjSMoi75uFTXrbbcMe37hM2",
  "key22": "2vFT31Xxh7bfGzMdwNL2pzfB4yNqVmUFgCCYScjEfMtH6PFMin99eqKJpWX2tL6ok8YJ8oXjqmyCBMFEvMxbHAmg",
  "key23": "ZBk48nLtV4DjEj3gsAd4smwux24WDW7AkrCUnAiLM9a33hBX7GqdfAga3TqyAjmgY6BeT3c3wQdc2wQrPrYAWwn",
  "key24": "M9Lpd3rM4UZRwtu7KzZfyC85o3NZLQWqUMPGSf8TFFmd8HLbKFk3huRStpyXTBDkN44pompxFgne9KeJoScz5FL",
  "key25": "2rEEwcS2AqTTEqqztB7JQCAX63MfQREtSCPubFUavLqrsn2k4xUeNpuc2QfjEYpynj8DmpXZ7JWsTE1uqHDqWuBd",
  "key26": "47iNCi2cUEZxZb8xsvcUohA1J8QGd7vhd8AVmfHERK8kZJycZtKBonjR1MYTwJhtgVmcDpyFujt5tRydMJSezo66",
  "key27": "3f96fZckefTeRK66t1yA4PmRqZ7EoAs2Hvv4itgjxNRdhSjtFtzbS1jDcqWpDVG2reJHyLULcPTWXL1jfwJcp2jK",
  "key28": "43hd8Qrc9sRKvFpuf22Xm6fFwnHPZqAhyftDfNuKHfWZndq9gRsN9K2wAu6PXhEpP6rRPQfcskm72ucknAAEwwzF",
  "key29": "6XcjjS76C6AuHLYtGs5tetvtcDPZ4Copq2zrbmnxQGRKjbm4FMJ19YJpjJ19Fz2ufBoQJuy1gTNWGBhvn2KTRQ3"
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
