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
    "4C8vf9ihhVyzRwAFfhqddrVuoDKk7EYo6u25bdtz44FNHMEnjzUuP6sbye5Y4ofeD2Z48Ay1dzne9GtR9y6RHv9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51dKjsMUcRiB5A2WixprfDkqKHffyZGCtsGtM33icN1vsaZAQYxYCfmknc7napKsV8zNags3HxGCzHnNJjkirk6g",
  "key1": "421haL96TX5rieEjoHaZpxxaKRVCrcbT4qeMZ4huaYLcgDNGkEoFxFZxVLo4jbk7sg7Z6BDSvzji7DqxXQwemuCK",
  "key2": "3XM6JNfpGxiKroi4WJXmX1SSmmDvpw94QwTBDNqb9ZEdGLUfR47os9cyc5TN8Z9VETTa8M9zrxb3rA3jRLSNLhJ6",
  "key3": "3B9HqMT7vor8BjM3CkyXCh8S2K46xUFbhqLKr3rce7qQk5hu4qFKPwFoo41r6SkmoWSU1Ny1YPqsiC9tjE3eBz3w",
  "key4": "41naro8LD32ZtsFzUnAF819RHUeCDxUFkVez2SNbhHjT7ro59CRXecu225CkWcJADqujXVa5t7s2qFMonownYdt6",
  "key5": "44pBQNHPW4Zb4iBkMBncT4uujJuraBufsc6QzEecyCodZi1WUQkwT2AJMPM3yA25JfhES6MMAyZdjXc6a75Vg8BB",
  "key6": "4w2n4ndqhtPHS7kU2TeY6qFppf8fEGuRzTMjVd3shuD5Xb694D79CB3ysc1huXrqUa6ESusNiPUYmWeHvJ7EVBpn",
  "key7": "4bLaPSerDrJyvfzn6sCCerQv91RCw1G8MvVGgTEjtV5dwthw919pBbpFSmTgUE8V1vmq9W7M6bntNcJuACwVKoiy",
  "key8": "3hhxhcuDDUoxgAXVf4RNDdxxL4p4CTUoWLifCPFtqviNGUmh7D7eHcLrNV2KyMzaQcbkVZNsbaSgHrBxixULU6Mv",
  "key9": "PewSZ5Sgh6RFpT5QxM4EdTHi6WdmULGa6yDhuGa6ucsyfLwikafz8gXyBqJxWbnAKEKXkQSvMm3gCEvG74cxByT",
  "key10": "5XFanjbxrYAEeMgV6fcEb9ZaFv1ks2HNox5GahfHF2NYbrd2WSXdUsSYXCysECMKZG7eT9YSF4xBP6dYBVgyyB55",
  "key11": "2C1z6QGa3QA5DTK8JP9f2EgLbcuo5beLRFf6Q1nmC9boE71vWKg6HupMD5eDXzzdzCfz16DR9Xy1N3LhXdpaqMNv",
  "key12": "47Xvw4GJDJt8KMCpa5aa1VhJiBMSCKKKxgMznYYxrCuWBS1RWCfJomvgPdQiCsAdVFYAqPCDnvAA83D4TgoHkihb",
  "key13": "5KMXaKFmzLTfdXiU6TxQ5nr93jH1VDG1mWjQJJ47HjkAnUhizU4mHLVVR7QQgzL37oYsKma9i6nzTkzEybHea5yj",
  "key14": "4JfmNuCgESDFLQabL16pLq4q2fsB1344R7JxsSGxYDXtuxWUQNok6WCWDycDyamLxXS1EcuzAkcio2fcjghHLrne",
  "key15": "4kg9q38KfJNBfobvLyb2UMDyBFXGXbtCiA7cpbdeA2B25LJb7KjZFEoTTFtkovkw7gjDiRjFdFcvANM3KByuERUf",
  "key16": "3TeC7N4rN2YjF5Lc21P3pNr9X53JsGNyyeyHCrzMPSLLNi9ckWyjaPrjcL2UoH6iTL5TV8yP1gv8UecoMf3vanZH",
  "key17": "3DSjHn9TZXDAM1731ttFqB6LLS5day9KLVfNDQFbpSjxsBmjypxY76AQ662B3Fk71EkadzsBNWfMBBXMSznsjPUS",
  "key18": "5sZocEdH7idDkAsN4bsSXLT9h46k7UkJoRqXYijM4xJPswLwW2GdWQHN41qXSP5AF57HURmFzGYpynrdE7N3DTea",
  "key19": "3VLn4RBJkK7ynXCHagYwsZr8KQCTwQgwi1BgB8c3WhBQZ9eH7hZ61V5fUTdrizQEpBXAptac5civ6dXBWqjYSpvw",
  "key20": "2hJvHUiT3jyPWfc7zJMqfeSU3Jbd7DFhbfTj8Yj9z5bHsHmDVWqCbzsHkjHLwHapZtrqfF3R6yu7evE5JGffjzaz",
  "key21": "49uSk19twMivDLbhoFR8qA3ttnH37EtMJSSpPHsekWxqQEXn5Lix2XhHjJ8HMYJmYW1Q3bzEEn6xqxLuiZwvQXsK",
  "key22": "5LigqHFagY8xayrzWBW6nrGJUt84Q6FkG8sXKWnMy4CpifqgpqFk1BixSZEVcsKLUBZNWbsiUWJPds8gVNStcXZq",
  "key23": "5XKo5HViQDtsUDxEUNmy1pexXP3QwFctrXi5yTc3kKzV7Ke4uh8GEzfeP5NyY7r9M4LqHVVb6mDnAnHUhpUra8Rw",
  "key24": "5Z394zBj1TBTrMZQUQM3j7Bvz6qoe6bKasAx8RJuRMXCkf3mVcDssjJTVgynxBNEun26xS1UmTztkCep2QmXneje",
  "key25": "4seZyMWoRMVnbtcQqEKhmae9Uh7MjeAQkYWBQPw9SP8mjzNEtx3JuB5nCRYZGhfRN8VSXSy8pE8TNM8iuAecvwkZ",
  "key26": "Gj6u4tNyJjBionC8ZV2FRDpbmCgyzmHjjs1J4wFeoD1Wqph3SuVoh66K62x791SVYMrFeLayYvuRMkwnfoBARjy",
  "key27": "4UU1RBCvUT7FEx444aZYCtD58E6RBqujzTef7i96n2m11ootaH2UUNfU76mVzWNg8KrnK3bKMaxYRoc3P7peDCbG",
  "key28": "5ZqNtWuj6FMVaejrSZHeR37oZgcyMhzFa89MbEdUyG9MwE1T1HpM1Pv3jt9KhsqzzTKAE3cf3gMGtxKnYNNDhBhC",
  "key29": "2FhoowzCsMBqVVdpistYuHsGGncMuZ7ZcqrM56fLAfV2mpkT9EL1SHriAs6TiCKcPJXCQMNGr6tydSBNZT2NTMAT",
  "key30": "4dDBxukWZeqiRPeAHmHWafGZrYtTcbrfyFABdgPSDwKPCkAzECAQNhgYwdZpV6uAyrWyp9agUfNMuZj1NYfaTsYy",
  "key31": "3pW1jYaSRaan9cQhw141WaQd72WpDz1JCdz9VuL71WFGrSwpNhwAj7JA4Gdt3YaGwh3SHGBDbHhfDJ78EMH6B6Rv",
  "key32": "5z2yeH12kDsi8fwczLpz44SNw6vEWX4DEp9PPbjoVt3kud5beTvEQ36BWk5of88GMVq4s7keXcC9rhog2cwAV14C",
  "key33": "hwRKwm9jDjgHBE6W4vLmZY63MAy95Ztagm4azTSZbFbXTVtaEK6cAieazr222bm5BEYW6kGBWGcRY6SNbVZ6Jp2",
  "key34": "5MhCBuSCg7QwCBFh3Nd8mk8qJLchE2nQ2QaqoGL4LvVQxeQNhVbaxFLU655qTeUmnPoy5PhnnwKGAhgEF78JVvbL",
  "key35": "55GR9xHDJKUxR1wFitN2K59yYiGHnXsvuTqvFkKBm7wjyJkc2YuNmR7M9BWh7q6EBCV2tEf34KY7r7aQKvtUf4B2",
  "key36": "5ZQcdGtWoB4Jww41AhcwTKFQe9tgW7XwZeFTD4fcDexnk2Jx3G4uENmr2iMyaRPtrCjf9pa4r2m3DPZqvE6bzeNP",
  "key37": "4w2d8pjELLgK7pFUHERezW44rLPV7mg1Jw53caYMsVJTj4EGnxbG2zJ7Yfowoj5MnMeAJiuKZ53LAJNC6tqRY8Ad",
  "key38": "3ufUntVapz5F94tFogySGvWwQ2x7LTGWK2odTD1Qv4FD5XnrPByJJ9sa9X9JUTto1VDcUvTRzHhzGJPjr3E8pvZE",
  "key39": "4KXhkkYgr5JP2iikxG1FaWgb2Cts4jGNBqTiXK8THTCvf6gDnLEYFgwqSHTmRRAHmPuhetsoqehVTNQF9o8XBGHJ",
  "key40": "3pMkjFzS3DPu3NP3u5SfCGZWf4RfyEHYhfCWtiSscqcMRfRM9P6mnvdVXVqxM7vg4HRkhYduptBUP5bsE1J3ifWj",
  "key41": "3ys2nmVDgqj7JmqYaMbYzCvUFsr6ZYMxbymeCBkozhR7d8a2uC7XUU76KYx3EyCKVQoQRdxTuF5hGTtvo7kecxBz",
  "key42": "4PrGWggsVoWryFwmjz5pKXQX4czrnxwofW97nsjcNZTrXdYY8gYU9oxgZmKcuW4Hf61fZqcM966VSAnTxace4hcK",
  "key43": "3pDZz9UQRe5TPQm8yqCAuh3XykdBmPrddcjbgJvbVy5Ygdh5NG5pyiaNwVkKPCrCDyPCBAUAUvwpHWKK1WezYtQg",
  "key44": "56jwKBpctCXUXAeJZm3vBdxATNMtnRtCFFU1KtDUh7CpFTK5n9WVNL3znzpqy1GrGJh8zPbC5jvEyZLWXSDGhZV9",
  "key45": "3cnE6wTFem3wp8FzmwiEE7wc42b8YDuwjg5wnF8WCesvE4WVfiASkvACT7iU8QqvizCw8SLxuud5fJ7BTHi8YPyA",
  "key46": "2TusGp6buJSkPxdsSMX3yAA2W4XBsspXixix5yjBzTykbj4n6vou4tMEaPajmV7YsBt58arSnp7vzHR2nhXVbV9e"
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
