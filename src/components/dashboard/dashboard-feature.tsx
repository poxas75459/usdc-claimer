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
    "3KFx7bAEMkvTvFDxye8LMFgRwzZdTyVpmh5efT2ny2rJQfLYnJWHtGcQS9disj3u46cF5mcVRjV3hiPMxW3rQUkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TAav9GM9HMHA4Fcdy7BuiWKveL4Qu4S1u2CSH9ic6Hi7d3vwfRBuQ5nqtPLqLwfvy7THJsJWjoX38LF4NmXRWgs",
  "key1": "5JAp4eH7EZe2EWYh7TLbN2UvUfVgZGzEUYJmoCisFp7dFFaCxCFavuFa6sGipSHcNrAaNz6T571DSWgPDp4kbMFM",
  "key2": "4MhFiyp3buLaXqKAhJEAaDZKgn2SwLvyUuET6Nw8E1DLaaZdh2hjAbgMfQRsioRLwhjF4MkmzWmC42awv723ancg",
  "key3": "44Nbbb7ULUye9tEhnG15muSEYVeXotnhRVPcmuq8eBm7vaV7RHpYZC21SkTGCmc1ZhuS2Va3U5QzfJRJoqCp3hSR",
  "key4": "zZu4x2948odDUXSma5W3FTfstdbr5LLsqWGW8r9mwrYPT26FpmFpcC2dYfwQSrbLiAy3RDBHCnwR2jSJB9ArsEg",
  "key5": "5FG3m14Q1R1WZcKLnDg3DaJQ5Mazn6Rg5kuUnCdt1x8x7qu8QLLjoPnbkLqfNe9nCi1dE64SvK7Gz1BByFjQxUA1",
  "key6": "5pSV4Mds2zQSSgTPvRfbsgkys7VwAZjk5n2T7Q7foy6ba8uy7DGc5iax4vTUp3zQP4GHaVwJzZA7mYgwqBJCHTjV",
  "key7": "2hPRysPrYbCr9J1DWkBxiYLYcc22TtcVuQTtmoKwoeVHXaccwTYQbt3dgywaatiW3hxpzKiLLyZeNMHsoYm19XhT",
  "key8": "2RGpm4LpYPxpqBrf3x1RC1soWYExGMbeHoFRJqJpCf4AU35e7nwWzxvSuV6bfjEirgVhTyxHecPdVXKunA4sBSyF",
  "key9": "3FgzPXRQLdRxkiEwRCFdeZ5aq1FEW8ksSh2C36tMoVs3uW1xsbpPne5EbkLP5YPGQVe9n9477wdxMQ3P4YivJaVS",
  "key10": "3FHAZ6Lpin5rvK1mhr1mYz8ZeRBxUEVV2BvjyvjUf1ZgcgH1AmmwxUXrxYRFoHr54M67Y7i5uK8C518E1DeMAKbY",
  "key11": "4HAcBY6Y5X5busZMiXwcQJwkTSCwFfmB8d84oBcLndLfpWJDv5fPSqfwxCTCNgLNcqTp7mp9UkXBZdX7DHfkNXJH",
  "key12": "4uJE9a4RDKz4gZdyLhfdYmkXQ9xfYahiNG1a2LzLSEwKemqUAqBboYtDZoEChgDLCt3ESh8n2KnC1qMrp8v8qTET",
  "key13": "4QuHMeWmrnisYTSDTvN3gt1ofoX5EP2p1sgnVzhMDhJqSfTCd9ADC8PGH7aXQtg9UDBpBcYC9Rz9bgg3hEiPuU5F",
  "key14": "5vgZTcd5Cz4iU3B1Sz1sjh3Td9hbcRabV5DvxcTSQGsstZQTGCYZaHHeyPi985de1SSsWHxnxYYoVmTKBKjSCuVJ",
  "key15": "3TQT7nmNYyMsGAE8gKbZXciw7AYjZEZgbokRidE61SS8nWGw5mmWhgbVxqnVCTFiCqen7V92Ac5KzBSYTPjdyi5X",
  "key16": "2Ajsmm6Xf5zLEQ4YqPhqk5ow2xmMfeVfcmzZGiaZBFS9XnWYEBXYkt1SgBB5iFxDSC8Z9VBkoQKoMrvH5SXS2R6p",
  "key17": "3FVrdzcFLq8paswQQekM4X81gjtFsrD5WjcFtbCP8wsR3S7svB8PuzVS8xNLWnvDo3shkmXDKKKFeQ1uRw3uQSNv",
  "key18": "AKCWskRtW5byZ1TazXU9e9hRMakF9MerEK6z9GecZHWmXd4yZpJtbGu1ZujGhh4TfUUprriPy5HrK5fhfVtTthw",
  "key19": "65Ph3VsoQQLyojoBFWQ3YQ1PwJA4SSwbfJY34Xg7bHFRaeMDBWxB6dWD2iGHo1QiJUBioS2SHLz5cRRZ6vRFnt4",
  "key20": "5GkhC9ztLKoXDAT4mPeU9HCEW6HVSxZrhZzwL1qeuw92o6XAfuMbTAmBBfpPv9q9GTzrFwxaKG5Ya5jknw1CSo2Z",
  "key21": "bz7T2DKMo4NAT8LaJZe29d2tXh17t9rhkdxm7o6eH5nABzcAjnZRA83cXXi7UL6PNKSWfb5L5aL7CuykDF1JcWh",
  "key22": "Wwknsbu1LZ9pYGXsnhS6y9xAw8aPLW9Uq1bJE6yx5oRbUEPTh788WP4dhTSz5MTSCaHL6PEuggPDqmswmuBvCtw",
  "key23": "2mMfUBAD1r9YqsQ89U7pCk1wNhbRzx5vM4u1kGXD2FP9c535vBhKD4mgnP5AGMeezFv3SGwPosqJSvydecWBTfAo",
  "key24": "3Di9mPm4rqR2n9YN3uxhYrh1VJtSra7LQPvVGuvsEzVLiqrmp1U12UrwH8kFUnjTXsos3mg5JnVzSnBppmyFi9up",
  "key25": "8Rvhixgu9YV1dAK5FuZhLUM4625Sr2Zx9HgugdmnWm5VMMmPoJ7FJenpjcqAp8ASD5fTa4tPxwoQftxGp9942YK",
  "key26": "5Q6Kn1yQqEZkH5aoLY6QF7jKaJ8nrsC457HaC8LEPzQZcTSDee3hU2SEo3k6AuW98RMS9ZmvAxuu59gfQL4DrWC",
  "key27": "H5ZR3HcohcqxPh5XLTzCX1Pu7DsiGvwv3oc4BXVAu8qK1zZ2ipZRePLehgYpaGopckoQbDLUN8Dgdyms797Mfzc",
  "key28": "2NGAaQzrDm38xG4zobby2nUb1ESBZJJnZPTGkqJyBLLnchEtzsCyHeBmEKj4p6ppgPaL1FTNUEUUvjMqDKKDMBuP",
  "key29": "eFRZ9knUZTJ4SaFNNvcauDZGnTdxyn7U28JHba9AB5Qm2Gm34B4knStiavfCuFEMG8RmZUJQGhinHHsBRZB9aSS",
  "key30": "2M46rLb3HfnY5BBxd5LyM8bPuNvvwCmBA8FkQhdqGitB28dFoFkn2CghtF47TLimHakX1SgC28MJaLv3VwywkLsU",
  "key31": "5SW3yoTUs2VRT8uQhrtZMFtqXwV5F9kfKnUcQT3WSHF21KY1GoV82pxYRqoB2nwGfkdJ5E9cBvH7simswmLcfA8n",
  "key32": "5xbA6LFWriofmgtQxqhRzoFCJyNDW2DMiuX9jWrq4g69hR9TdDRbFcJT8KYCLQP1afU38HGYD2CusqpSo4Hc1Nt5",
  "key33": "4g4Cg8JLjVrdhGUU6L1Z5kwre4FoQcjkR2ysoUSCcnGbmy3MaCp3TJdxXZdMN92BFKHAAthJ29imowgh42JSCjtk",
  "key34": "5wHnPphiun1rv6bai7spaZeqKXyLBcbN4TeWM9z48PTgDzSsiLZhLYoN8272J23jZhRERAkcWn1spdiCeFkCx6QZ",
  "key35": "ZMuH1CXqEE8eBDfRhrwjRqD1dyuU41SQt538LLXVHTP5rSkzFNJkKnkgEXjCXtRqirMWFZGw2gMaZnHNWFPL69X",
  "key36": "EN9YjQeH46QxF1yz33b5TMmgcmxKggye87XGQigTvb2VQ3MhTBBw6v9pv73F69k9WpZYLsqv1DBWZBhxV23ybbi",
  "key37": "3hz1DDJqUHjqTdEHXYKD6QDCB5gCivZaVKAEMDPoUFcf4W3ZcQVkek57pMJTaNC9TH2cEBZjToKZW4cVTiDLQL3B",
  "key38": "2V3paucf6VeSad81KPDTaqdWp5HSGmoiZq1HaiAG89A9k6ZuA4pyydRko5sDqtnkR6ebTnPjgJhghWd4mVUbruMJ",
  "key39": "4Hv2SE91hvPRNWaEzr7ciUMU1dmR9Va1y1tmub522TCHmeyijASDGpiKouFcJAv4nD9bgt6oSkmYWFEGbYz5ssCJ",
  "key40": "aXSwFFQ8rCGk6aemzhRU1dpnk5oxU3yYdNTQxkhso9X8RKySBi317Z2JQie2bjhbyzy9qvobhidJnvJwgLokjq3",
  "key41": "2mCnFm5NuB1qDvPYpBzzsSpYszh7eAa8pVPqbZiLfycBUoDZgimFsjGAGkAf2EgyGzzTgGphS1L4YNzg1dUQ9GKL",
  "key42": "3S61NKVncqPyMcTxyaoNnjU3y1VDPdq5XgZTG84R3BTxZetS4TJ2vChCDWdtTfLbvg3txcV8huAdCihsYj2o8MZq",
  "key43": "2Yx3HVC474nbYDbiaGLGpg761XUbBQDHzwUvYfHLDpgdZFDKtVQvC6u7h1y5vt4fxiWpUzk9HG8twog5ehmjCqRY",
  "key44": "62wv4VFkcf84RjfLXKLz1QXwo8Ls1tDvtgeqgQZYqM15AXi2qdPK8AwAAgKi8srCtyhs2FUTuAgLC32n9tWNRRLN",
  "key45": "3aeak7W5a5vxN7qiFDLxHujtRJNWpyiKzWQXxuWhmiK4Jk6hx4w5LPmg5Bq5wejd4CfjTendFwhxBH7WosrdgXfF",
  "key46": "QMJV7yigRHzpZP6fRTHEQUavbJoHMJMVnPTVFKRq96Np4sNTqx8jrAMg9p426wqP3gAkmTFyWzMBqLUXU2nRPP6",
  "key47": "5vt9JEEqbDqeivc6gqrFXnSbGGhsTV8QhFDAgdkTY6wyXDcwu5NC5xBcNw3SQB1mWn9AD9L1grN59YsbuDeDQ4bN",
  "key48": "5MsjMRTSXMvFEFfNYVPraY3xJ1BaKayizFPFnPwg32QMXzmEs36WVDrxfYHYY9B2uxjrij612HZ3rKNLfRE45fyD"
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
