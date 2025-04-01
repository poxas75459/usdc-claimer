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
    "2H51KMxQyAWLZK7VLtCdVkMUkbgWzXQimZUhrWtWK8YgMdzeMKuZsJyKekDA648S18MyxP8vcEqsQDRYwD1yQc8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rBmn4A4irp2taxy7eH5BLPKjsusaC9K8skw1rs6prveDwV2WprwgnQV7UVdyM4i1psASawoaLdbhU9R6YnXEKku",
  "key1": "gKBL4pcY5YGHTzLa2dPceUZmTbPZTX4us2Fy9esJhvAroXp3XFoNJbYXTE3DQfx9kYk8cEA6e7GpAF1a8LRCdSz",
  "key2": "4vM7zR5D2BvQc3qChF13kz2kFjHAmfvcFLTTwCmFmUUsThpoEjV3yPxVWBEZR7ufqbF3L9PWAfxkYCwrMNAwsRLg",
  "key3": "2w6ggu6Cc5PcLYrLzs9ENfTPePwBgqzKrq4aT1ZX8kT7ZBZVvos1kD8Q1h8zZtYDitVPB17yHypqbtABvEoH2fc3",
  "key4": "PweuesYqwq1bp36UwjUPnwQQJQGWijNAwGyDqehXAGts7srvExJdwfpRHYshHtzNUXkmaCMh5Y6cDmZ5g7t7ZRJ",
  "key5": "386ypxCR17UY2xTEBPbAGSCnsAHsYEDunqJt2d7pnPjVa9X2rLDJqqX5kBQP92TRWhABxZziZuXJusHVudpQm2b6",
  "key6": "4Ya6JjQwQAbCDJg2pK8kE1QxmPtyjac4S1epfo12XBibs8zP2ADUHtXffnARnKZ2LGdAwDJGuCs3cGunxfvFDJak",
  "key7": "3kCoPTinhpaPbZovPJbuimkSDVCJy2Vpa3eZNXL6mzTZKh1DrSbMh5feDxbtz1ai7zjs8cJu6RzHAkyZUGL8bDKH",
  "key8": "izS337QNjzE5Cyvu6NGpnpSwMtgv7mxicZzjZR7cphe4SyK37vUj23pjuBCLTFCH9HbU7acWipomovgyHrNgPZG",
  "key9": "8xwofaxznyvruzf82Ztm1Mnsft3ZZ7nLAWSNGxBMnYzSz8ZwuZAuSM5JPhyHZyKwvGY59ZXJrVLeQonWGfxNiWP",
  "key10": "4RwybLDLM8qPDYncaV2mEhXiszvZrQ4ZvdabM1FUNvusdCvJQocQekcxPzWpsXkiajKyN4Mc85DexkeDzgajhcXD",
  "key11": "3npgQJqvoMweGYoZskW1VeTrvqDbvJfk5JqMky9aQSwGmeNaxepgM5EDJLyMMHoKwbMv7EV5E87uVf6NPzw2gN6M",
  "key12": "4DLYp6KLcmNnvbZnXd2CQGv8CcZTsnVjbTPtimAizKfPrdtGuKgs8f59gMBbkJwDpWC5iZJwLfonaTEEsNp2YtRg",
  "key13": "wm7vZ77xJ9zKSsiAM1B7V2k8nWgGeNQGLY5PRb7jUWtvjSy2oWP4WzV4T9Vvf5sd9ohg6nLWCN1nXEGPRqgc1kA",
  "key14": "2Z4F6RR4cxVqRKKubdEEPgLc5c2YeFcvLdxg9PEAw3d1q4tgQiwhNSnVhtadkFExTAThihExv4dhbLabaa6wa3pN",
  "key15": "sXLpf1s7W3Wp9sEbDreCA4wqTz1AQQJxmxtuMCKXQ9Ac3qZzA7DfmETJVZhW6KWJFy1p3K89ABSdx6E7oBy6CE6",
  "key16": "4aHXx9vfL3EPA1idwnpsJcrgwcVHsbN9S1p92368y4DsEpDHtDu4zqKZqQS4Tv4Jc7FRYrCd2xmDyQVbfz3rJXze",
  "key17": "4J3PJLxHVmVPJKGweuNesPvnrLsKWZ6XU6UYv89uJeu36GJwzkN5zbbX97z1s7KD1gePUL7K2YcXntf3hdTERU5E",
  "key18": "5sqQ4uYJcuPZHw6DsvQw7PCa76vYvrLtkka5CuYvcJiNaKNsxmyJQs3CzpnPENBpPyCMsjTTBbQKnDZkAofuab9a",
  "key19": "3AdgQG5GggGpVM4yhCkFycQfJhEgz9F9Wj8EiHExHW9jZozLTE4VkukymH4Fz9PBhzrx2geJNwiEwrYjFUim1mCu",
  "key20": "AFsUvkG8Sh1F8Y6aG9TFasi6XweozqnQTCWB8dbHNqw9dsPWGmMSpBLRHrqSchrDZHch4YwrhLq3adHgynAab4f",
  "key21": "sZF13VgjGDq5Hvnm4Ut8CxNjpkgvdiFVTBwDSKg8mct59gSH1kdZTKyiwuNH5cU1HrJCsCrsMoAcwVMcf4qNANF",
  "key22": "3dnyhB3SDSJ1WqGkjEKUUJ9neS6HvjiMgJGwFST742SCNe9jQ8YmgKCUgz1az153jWWu5YSkQx8VDiaBwowDd9Vz",
  "key23": "2coejt18qtz1HXxnQvdeP1QGR9VZEVeaDQwRNJUxg2gjJVPThGbHJShqKV6Ztmipn5kSS8Lsqj1RrBzMc1QkNUrf",
  "key24": "2iaxtCL2jvtWVdcP7Ns1GnG3n1n7N1LzEpq8pKCb47MCteLfUpLBYV4iua1r2mnCSy4UpGsie698MinmfMkDKmLE",
  "key25": "4HNzvfUprpseN7eg6MbVaWsGgAiTwqTFSDvmStS3bK7sJ7wUAKd14Mg6Q8ied8CPAvqke7dM7mMUut8xzufMmxjt",
  "key26": "zJAiNRJdchNC9oubi9kBDPi9wte45SrdCFMFpDiVXcSxBEarzouuPavsjMKgKzS8rjFJXE4SknoeEmbf5D3oRDQ",
  "key27": "3PzZoUL19t6BoSsQGsUdc2uNBHY6tPP7kxszdsv5QFgEZaHSFmTxDLb1R4v6q7mG6JdLhaDSjFYBcK38vNTJDVix",
  "key28": "bEVDgTntKQzogTpR8rYQMC5bKcFBAgNMqn6DJeBd8k2V85F4HkuGY3zKp5jQ3NVvai8jAPBq2inSvRp9KMUi3dc",
  "key29": "3WpS1qXy8HkWbyLkE9JctfHuuJ7L9iARSezdrCVNgZtW62gUwcDsdUe6a6sqcuaxdonB9YfBpZFnhaHpr2xd26tR",
  "key30": "2u31uBVvibQ2ZnyTdQzoVaAtWoqgAARkvYpqZnbjcwMqLECw63SnsqaYuhQnABRznjHxZzjHX5AJ8qT7bXm6o88k",
  "key31": "2H5hP7zQ7CWQgcTp3UMBomndfTBTnXu4tESxczrKdSB4AGUAZZqWuU5iqk124CeZMLfXEUMfWYynwoZPZUB8Enrp",
  "key32": "2sSDgpirUZNRp1BNmTJhvnS6Muh8vCrdywtuXsYt4Ce7gtx3icAP9rKUHWMCCjQd1ktYSLBFsG2Pi9RdQNkfrAXL",
  "key33": "2LLN3HckehWLU9pts4XCozXsRi8XjTZggXZ79uYeVrTLywfwA8BUUevpNiG4qNJdTtA1C4x4GHSvZEGvw4PSjxao",
  "key34": "2jJCTGqnvSs3hjwV7N1XyjpRRsEjy88tiBsCAMYvDKGGNLbNDnb19C7CMKbafMqN5L31qomy3WrzfWYE1EKBvUSb",
  "key35": "3va84i2sXbx3MgcxPHxH4RnMn1KebPzZryo2fTxJJDtBEUqUvobPWEYYgQ1ud8t7HXKAbPnUKLQkqZPCejiysggm",
  "key36": "51gzV443EXgJrZh6FoEJfSGuJV2uzSL6vujL3n5sma2hNMr53a4ggpmfbFaDh7tT65Q9b7P1yvMBSh2naGF3RTNi",
  "key37": "5A8dBLPWEaANgp1SgM9iP4SBM8rirGb1qofvkqj9DkrMsrh3YedBUHP3kAwL1EgHkXRCssdEZHN3eYRwYGqfCbrx",
  "key38": "5Gt4mtN16i7t4x4ztZcXWz92vntkLTgxrLpcJAQS1BMkkfmm4Kv2rsamVZVdUcHuegK3PHUQ74oV2GgNw8EdkR5r",
  "key39": "4qmyPdVAvu5CYf51Mq5AfKpmGvQEaUtbPXWkWDku1BxQcm15NKHbPC4LLJWA1ptzpDg6rKNQWrjq2fhS833STaus",
  "key40": "2o5DtfkMyzaq488B62ouCntvzkL56JDXeu4L8UUT5VrGsgr7jvmtRbNoC4exrXfecnut1cvHqEzrieTgLpwrih3C",
  "key41": "5apuNaBkdgJss4eFx876Kfmube7ZqrZi6YJ4aZcpC4TmpDz45zCgCcRDspqtQasiB6jDa7buHP7hCEAohf4uUk4Q",
  "key42": "5o3C2fkEM6mdwD33aVwgAZHZGwDd1WyGu4FjYQumVRR9mMvquLr6g75YtMwoBaqyePp9UeUmZFiic6tDcy8vRjkU",
  "key43": "5xM8zb6peRofEYPTCdTFCHBHnexMDz5p9MX6j8XtbbiXuW8LRxGsyzsXFoceE4NYkkgo8vrk9YPBAxRMEqwHUDMv",
  "key44": "2e37oh9uikSaYxZfeRRPD8WxQoGjrBG5EmDQmJY6GEMWeUnTuZfrb6Br4eXaFhtvXYXLEpW1dvkYrZs4Lo3Xn61L",
  "key45": "5Ye6j35k7CSuptmdN42BD28v2nfpid9QmBPMRj6HUu9e53tra8UEnSXkEe626ugQSkJRcQc6HPDzzq3rHBpo2fQk",
  "key46": "423ZFfpHHPSjn9ctoPrSMguVDBioLKVGbd1uGLXQ7xwerg91pmnUDV2cB2iquEN1YRQXHq8rDjWmH9iAbNT15CNL",
  "key47": "JBrhjx5R9MeHfGN1DaXaUXQYYAL2gHXj2B39XTp6ZtYQFJK2gAegqmwgDQhCLLVJNN3YAUnsdu4Ysy79rwgVk3j",
  "key48": "5vYdFt2CpRn8ANn66aAd8Tboza9jA35CWqYey7bArQAoUUZrU5KLjo4Xo6vz5i6DdzLTM981Wu2u7ZwaHqE4zM5J"
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
