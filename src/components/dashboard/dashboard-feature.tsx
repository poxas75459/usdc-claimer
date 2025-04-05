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
    "DcXC9WcGReFYURcZFGdXWxDhMqYccNJQGkwwnttvPi4gaYP5xHxYeoLeTy3Eg5eVNpmT5snvdiJHh6Fns5JKkHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w89Fprsc8K5FfiMTKfqC2L5HPvLhtUkujyZodUkY3LJVmSbRXfgCz4fV9p3zDVvuWz7qz5Yuakce9Dtqia6xhwh",
  "key1": "21yGwoZ8XRb2ANngaZzL6yDeRRcwdT7YesCYjjrHV1J4oRkfJCLaFT1sP51aEzgNPbw2GeeH9HdivXJJUcaATCm1",
  "key2": "5uDixHb3URAqyCaK5vW1hZPwj8URuQ8y37wi81yrPvoAtJXUfAKjv6FTYYcWi9F8iznuScEsr6ddJnoVt9ej4hm1",
  "key3": "4BZLoxMtyLu7kLNann61SerPnEQHKiincDa3pbHbW8vJtgzWATU1WuC9Dgy37FrBmzKX2KgMR4MFK44SpvWweLt1",
  "key4": "47R32fm3hP5XUj8CPSZqJ7ZbUo2U1E3uWsdDqReShTM3p2KXNTjLU515gpZg9EBtPS8tzhVzrrRKaGCmTjsVwAnn",
  "key5": "4qdooCVoBLjJsr7Uk778ungH8bLaHBSEk9cNpztaZ2vQRvgWC4SxNgbxXEBQtCMH32BWLFgQ5ziLmB6Q2BG6gsJE",
  "key6": "2uGtoBwVuyAHUsVUmVEf8h9dgTvCfqvx17vTyDFwJ3XHTs4FtYr9Yy6URCcUTeidnCf5DuzFZe5SV92kzxbyvqcF",
  "key7": "31YgSszsUPxu2Y2ptpZpf2pMWb6EoJGeWnvaPojQ3Pd4zH3hSCtAkrL4QqvdZ12q4Jthh7Y5wNf1xf3Ju5xcr8V3",
  "key8": "55w1jSAsd2bFJYo9jUpQmayewFdcSD9WQd5H1WZTohyrrcGQh1GPN1B1xbc2un77knCut8mYpbMg2fbb3jxPQQQt",
  "key9": "91M8qJ1Ma6JuouxU9YraoNuQ1mP9EuxvNYpHdDtrk2FfhJyUtGxBpQ6XVGyfJi7uXVvvMFcxVxNnDVLeZNJnYsU",
  "key10": "37xG9ZfXo1uBYgLphK7fkC4Gztnk6LKNxZpfxathDvDFrUzD3sGuUjdwXjWAwRfdayvtyLLytHeWg3WdUNaLx1gT",
  "key11": "FePUezxFcfefvVYDP2KozzYkuWCzEFiuuiFwJxAwRiCk8guzbKVX4jTc85MN7cfcuez2mXSdPt7gZWht34ZywQ3",
  "key12": "5EZ2ZiS5TMa9k49HvkgBT6Qos4BcQ2j97QUs9JgxvWNDqbzCxGXoAdJAzB3RWoA6pWtkE8DCfkbejLpdypW3Pok9",
  "key13": "ENQptczmqfmDxEz3j2Jkv5F1kugW5medqFs25VJEU7kztCzUm4hiARZp6qUj9XoNPeGxGAUz3tQHvsv8Lm9iuvT",
  "key14": "2G27UFG45xvxjEUN8DhgFSgYpJiWySEaYaWdCsa9cF1xTsCuSc23igDRhKB7iTG6pipCZBqVrxnEHLU1cnFb17bG",
  "key15": "2doFnLxBJQ12gZKixSvXbG11Fpw6esYFC4MQn8wtbnN9eH2gNRt9TZ2bUz58s1MCuANGL51rtMUHcwrae4Aw8XBn",
  "key16": "4XMs21RbJLiTjrxnennWzLzXcSmUqsj1LVat86ANyzgRtUzdrBJ3Nkks5AAmFRTK1CERG5pSJ5LcPHNw4z9c8Tbh",
  "key17": "ouRaZJHGi3Xkcbw6KiMo8a4Z7pQFRBXcYSp7kL1sF4xjqTu87AVmq1mYw8wJMr2WjzGzS1wTpJ7orrBV1kU31t4",
  "key18": "4vNPKiMmP4LSs85drnd29gr3EK5nPS29GBZefgogcoxW3opG5WfzkXwWjmiq4qnRthrXtc2QXytiu4zpR3XDEron",
  "key19": "411HFLKYmSMBRNahC7kvg5CMtYPWrWragcodPVbFRfH5n85tshpiamQYQthCX47wdFn2uCLJZBJXbcLABVQA998q",
  "key20": "54a8X755Lh9W7KJHqxKAc1546ZMw6NPMTJ9p6YKLvnetmyGUnmzJVt25XDBqJzZb15foSY5tUK9gNUodYPRMbPXa",
  "key21": "5HNeCepFzNPK1CANCLxCKNWVwtk5Zehb6G1zUXbsF4iJMRxZQuLNsDh95PLbr2YX6iqHTrxBqhSLcn6Yi811Daph",
  "key22": "2PnNREjeSAhYbuCWijs6bKbmeE15MCV4KaDYHnvQ89bvUFSXDdnJqx7VH1X2sKz7WqS6xqfsAZsAkcvvE9EM58cg",
  "key23": "5k2AFr4FSQsPJgw1sS2kKLtu6Mh6a6ABXcbRazFZnv8oYM4Jsacp4GXxooMuj2rLFkiqp19WYasVbLsNnTYHZmks",
  "key24": "uGddgXYMiJASPSsr7Z5fwuYb3TzzhkDTiGvXW1y8DUT9tcEgeDniZuYe5xHCSp9vLezvSEqdRrGpivkrmV7e4Ff",
  "key25": "5RNGaytZ79E4o1NnsWJD6ZCEZfpE94csYTVHWZacq531qG4JExFUwH2M4rjPcu7WQoL7d9iXrYLn4XFkCg8kfGdE",
  "key26": "4xsBcz8WbRbrpmy8LFjrEVt1tNEnzUKpKfLyH8yqESP6NEiPZGkNJkx3ndrPwXmGgVMaczZBoPhWHKm68AuevSWD",
  "key27": "3pN2jVWv5aGrb7gXKjNUsbFxrZ2fbAZMd7zeCoUQaervgXQUwowS7VgEeRTxyuuuZM8VVi9sEXoAVoEpiKRrSknt",
  "key28": "cm1oXhCrQxmH5nKQ2cd73tsAh1aupZnEbMggN6fgVse9wvH58a7LJaydSvyMX8AuNa8guXjtk6APemsUMxsxsHj",
  "key29": "2MnV3D5twK5sjSh3JcuGDkifHy6hwCW2F5gAmi7Xdr4g1dU1eoc6j5cwtoAub8B9AkdAwZeXieVSW6yUxRF1yepn",
  "key30": "2nUqBPmwFKL2dEjjYa7fRBk21xyFcVgEv3ujs165NTcHvUBtqzKp7D7hRF2TAi6FAtkiQjfwdXwys9TtDWMo9MR9",
  "key31": "4gnzDwJcD4xELkLkQfofQ2ov2X6mRBqBW8abj8V17HRMbcd2nYwsKkzuP4uorhr236ZXp49sBddudWLqNyPVd9YY",
  "key32": "3dTuSQHdy9ytCYJL2QUrPNRSe36MFisLQWyfB9YEdDcB7oYBeRtqy2tBwLb3AMxNoGtt91s6FyHvX7wHJspvHT4L",
  "key33": "36EN7LFn3vegHYUG8nHHSWMudqwNmLr3JwudztTSFFtQ99JngoPxahvhPb3ui1S7eR799CXC1nKbwrqLu919H9xA",
  "key34": "48gUNGkjByiGbZMQHorCHsevYoEoKZKYjcvzFxBZqRFp6qZhwzc6MttmgRjM5dYS2qaRkm1TpGfoL64vW5MnVRAt",
  "key35": "5BWyiofKTYtk2vVQxY69NYDRsU5B9pktoy9K6ktxJitQUkpkZVsEYMG6deFQ8B6tD3pGipSns6cFE6QXKuWS3k5R",
  "key36": "222SaW6wShWs4zkHMqTivNm8AJmgsrGEgfJzUQeTJ7Ddoj7vQyqKZWvUSRgekthV9f9PqgNvnqD53osNELFPpT2m",
  "key37": "2wDx7R6f3nsvbgUJGpRsjaJqBrKog2nzm37a13791JnVRKpZTWoxoRTTxTVGgkcbkFhTAvScXP62PC6y9mBGJSs9",
  "key38": "dEQXKHVJRh6PQ6jxZpcdSrDXZtCKm59hnsdZ2ovxirJMsDWSvQKZsVsGvPx91k1XfJZxAEP2R1gZoiAdQy54g5t",
  "key39": "51cbCPLuqokTv3ikfANCT7E71YFVJ1G55t6hPSr1wmQ4iPViCnBoNTRDsg4USx5TLs1FG4MGoQvwSfvaH2R5jZxf",
  "key40": "7zysLJT69zBJJHjBuJ9pWeXfwjs4ikjcoWrRzM5j4QzMuhb7wgjdfmKZTdkXpTAvTFLmPnnKYnJttyBsGKunUez",
  "key41": "n5CWjKQTQ2RSsW4kgbfdoWG7aQBNGVWuYEDRcttAMRqKt6auAHQcp5ULMANNrarAkHYHUtrTc1DPowgm7x1rxTr",
  "key42": "4EKYbC2Ae5vj2TZXBZitJQ5r32SxzJMRhQmsWmuL9rBoo3pRDML2pvEE4RVWixazFGAT443bajtunsim3xgpuXwW",
  "key43": "5dV1LprLW7fAmhuhGWmkGKMHSNMP88DZbPg1v6vVF6huAcy3ioRbq2PBKmgbemJ5sEEz7BD3Hm9vZZnVBaq2NeJb"
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
