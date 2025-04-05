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
    "5hcyHENMNakwE891RCub6DYV2QXndTFU3Zt4SbXyokZ8EZPhW6or4W4PCtJ5VdKjK2qecqdgXS2rbi2Ws6mAyvL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356Lzi5tye1pAX7hD91fqgFppWY8jkavfwVFyWGVYYoua5DzS326G7H9358KFZAfxUisHZ8Y9YPUzLYUBWFUEzkw",
  "key1": "2VfSo1Y9fkJPmFJVhSBw7FPdjtuiLKa1txQWFEcoV5r5T1GK8QdkPR1FV7PUR2hhQudVc4CkhntRikDuzpsouB9n",
  "key2": "3cZA8agJWtafrWNj6Liei3hqLmmkbCopvjU5o7x8oM6uCVjZKybDywxe5TRJE85X6M8bQXwLMkTqKjrmigiTjYWM",
  "key3": "5oerku1m5KD2NofpH7EBA2fhUtdGkkC2dUKNV8zmoon9mwttSYbqkHkHdHxUCE4eQucVgRRJtK6G8BfJR9GaHstr",
  "key4": "65wsFk5hDAXNdqtdUyzsjWHFQPHRVzkpDUPWjayZJFzFgi3qRr4ZBM99gPHwWBWb47Wk8KnVCqKSVT8UbqNsaj6f",
  "key5": "2CsM9sD5Fz8YqjwU7i47Jz8nA8bexM8fpoRoc8xpHsChmmg7LVvMbATMsS2ua1jkBQTbimnQxr27GYhgPuLpDbVL",
  "key6": "5FZrmt46Eh3CyoeD2ckijzAg3fiu8ftMb3fBJVQBmVwbh3snwKwRkyjv4AYmLMHZzUep4awCQ8YWrvD1W4F1WT5K",
  "key7": "3SzG7E4gcYvJcPchyxEN6iR3AfHZmSKEWN4khLcrGnM2u3XP7zjHHWvjW8xX6fdMMWKD32YQVANZQAzx8ATGAv8w",
  "key8": "2wXaJbTMvdvM7QsaVNpsbuMGNugsCcqy2paKepSHqnNhViB68wDSoqcRQx1jE9woj4q9XP3hqc9quAqar66F9CzJ",
  "key9": "3p7RkRqwd7xgQx7DQhB2x4uyJGATzwwUuhmKWCg8oHtukMc9TZpc1HAMXev8EisaiDo6AGqcJ3bdiN5d2g73ouGf",
  "key10": "3tq6b4inNnDKjYFdj1QGnrA5cVuHmRfkzeq6hR5ig8362zAgyqTUYVSeY8JJvwZKPg1MwwWfj7Cq5fSfJaWJEUAP",
  "key11": "5RC677b6xcyBtT4YRqbJ3gmr1JmWWm1PYLS4cTex52YRAHs1r84LuwDgzqcGy9ifff89qEMWSSs2yyNUYQ99H2KS",
  "key12": "4ksqG68Zoae727ARjin3gQhTj54EYirZZTNH2v8kx1dFminYmBpMn9KEHeF8GkBRCCzANTELtH98wYcNzQGcQ2ks",
  "key13": "3CLtoQ4gRBLeKXj5yFtDqPqoUygH7niuxFKGYoUWn6QfaLZLrb27p6ZKCaNcVAja9MRWnbZFMZnH139xrWehcfHg",
  "key14": "EhPzXMMbj1jPCmHpkDckrBwhDTiGzrHnav2SiAMLTy32vwySNvghNyMxPvrTEKNqHtsgEfT38AyXpqQdcYgBGWM",
  "key15": "b3iQBfCEatEATFLGZFZByTyfx38fsHpuDqUuKsfPCzTjsbPzWRhGyxmZAPsLFuW6Bh6rnWJCH2at33zFJrrgRLf",
  "key16": "5iDepQHDz6sBBchUMctGvS8CgvuY2bBonoQWxDiGLyi1hp1MNwKHPVQ28CmaSkp9uAX8rbgk6avS1aCvhDYxnB4Q",
  "key17": "58ccVTUq5CevzcDsKv4v8dUrknLNDyJxhxo6vE1CCqTfhDK4VBTE95S1QxitipkyR3zX63H6aifVsFE44y9gpHGk",
  "key18": "2JTrYkScjG9vuqZT76ESofK2UGkiqd2HmU1S7G1VALS2k77FpUPcyraQxysyM1sKkvMeDa7H65HFABA3guHZmiwS",
  "key19": "3kaXXXkZgkoedmx1dCqwQWpGNqZnCWJ8zxDHeK7sEy3nEmDd3mmATQf3V3kTqVt4ncRwhWB6ywVFaW8iP7rPg9m8",
  "key20": "2FbKdmbQjUFLNJE1WqSACjngUUbs7rhkFDS5ngGrXoJb8F95HEoufonuXGQKeRg19YxRJVVgLTiZxo8r64yofpBX",
  "key21": "3E7318LUWaSSUz8cqDd1nwPwLSgBkNzWJChmojf1shD6cNaLHraz2bpPfV1aC2WvJ8V5PUoZiawedprooY6mMusm",
  "key22": "22viCr92jfzdWtcmkQxUmXEZnGBDF52b26Us846WQW6otceAk5tyUs5VinKDFxCKUG56wQhW1Mnpxu9xzP7gSANG",
  "key23": "4uWGdvnEtZnyU6G7yLPVr3bXULvMXsBDx7qEbPPicmAPeFtFW2C3ikch4ra7GZfrZuiqqnVaPxgwQg7DZwDbk1Z8",
  "key24": "58kQbHHkJM67YsSmzcMw6m4StyRAPsXiPsYuu15nS1SQLf9M7yKCNQwUwbArUrKD2eAJduV7c8scCaeMCTZfjvvK",
  "key25": "4jCiSJY4YXaMbDWqN9uYG4eAnQvzybFrBJPPSdes8mnAemoEbZ1GkmqAhvVoXvGJdgmZ5d5BFC2rzQKK8hKPD7yQ",
  "key26": "2qYbU4Z6VD2AKYaHFKSzt9pFCMKjNkkUq5nDxe5fxzmmayzfpSkLwLKTG34gRkHyHiHZbv5tqKh5xmPejqpu7Cr5",
  "key27": "3iy6fBD3vhjdB53jTTdbvrznG5FZuG3etvL9iPiKBWG34LktKsAjji2RjcDw65WrBxer42dLXzw4N1ekvViEcjtB",
  "key28": "4HWsd3qUexEk6GSyNBWbq18hiuw3SQkVKpgmXwKuKG5jqeEjaDjFaRmfn3TS6NSVnhSxgCM93dEPqLLBpKF6xLeK",
  "key29": "29PzC9pJwysZyCCGUrBt3QXns5T21epqfwqB77Jbjrbg9R2H9xsjUruAQv98mnfSuzeZCjQVH9782m8QDhhdoTg5",
  "key30": "3iiCrGbrL4gMwcNMpNq2d3kZR9a7XVd3BjTsqCbFgFtspunsa1freyzTH884rMtPoVz2R6TkZyyBEWzqqzQPm45Y",
  "key31": "4skWRUoBaqDNrtG5vwQS8hXHf1G1yCRiFPPBjAfFbfy25Ki78PgDEoJ2i7AcX2tDKTYRxsKvbiQLVtnM4jxnCFTC",
  "key32": "5F5X4o8pvMssayYkp9CoczqVRbP6ss5uk8EyucGN47JZ6VoFS1DjThaazVusULLCnBKSqnwWUnTpcBTwGjKsp2sw",
  "key33": "a5DGNyDPEGkadjhr721mV998fF2aunFzF6s2j4SMggyy5YfEkmqftKmfb7SJVcTJ7hqKw1NsBkdzPmhMr4YWFgW",
  "key34": "Vq3Xuv5vBRJnCgzWs7p373SV73W3nTrWNWSRdR8nEkNHN4CNPzJvBMXkShL1LR3AXFkhpwTJDGv6AM7epL2anXM",
  "key35": "LEynP911u6kQ2yikBN9yZHHx7mjfc7othUcCCisvesTiWzHQMMVoXdoGtX9LwZJEy4u7MhW7cfwXVPMGKZGsMNL",
  "key36": "2rRNVGap6YVwCrAF4hRaZivjVjJ5Bxu222K9CLBiGos8KZcbHSAgWAVG93LRs4Fn2bX6V9eBcEESQkmspx5ySbY5",
  "key37": "3oPSiiNnhqFw1xdPMmYePXUQfU8SDRwU4nkMDcXNwbvsBYFVT6khzG3gEEpmvddwSYzvQf7oyJgZgPEAjPEXVh1Z",
  "key38": "28nDRMnDr7rncVQSHVJhXNUiqMAkgWxJ7JUYv3dmFCsPtSHfgjNoehbECbpYum3TTY6wNPTDKtFfpT56We1Fryqb",
  "key39": "3UwK5BMEza3hZ2yKDykujPBqQEJmTAGr8rWnqwMiya6ipHy3KwoHpiz1oB8tYcZgBNPcLAZZ319qh2r7xTeCJ6we",
  "key40": "23kMvmy1nGemRWMddbMxMMyLaZveGfGNpQhs48aSvLueXfCX6pyeYra63T5xnRuSrRR43g4619FUFYmBuRL7fE73",
  "key41": "3pNW7kY8W7CwauyTvb4THCRwLH2k5HKtFvdfYBBQoSdvGT7XfZa2mps3DndEAckyzAq5Wv4PcEf7otXZqASNNSMX",
  "key42": "253KZ6KSzXGts9XL6B1kx4nXoFHxAkaK462qQeE2WbLCL3zqWjQwMB3DNLhvb1AvKTdqYC6o1tyd4YCN6TNWMZR9",
  "key43": "2RyLZ1Juk8eXS6dDYhBr3a6YcFmK7oU4m71Qyf7W3wdMDaSfmbBxbGT1K41xELhJBNAxQXmfE9vTdxJz4sg56r8K",
  "key44": "MYHXT2XVMzQhhMsNEkpFH1LxZm9sVJAqkBCXMuSUTPppYMXSNe7vgAT6odu58gzzMG1meLekkerS4D2Wpj1nthg",
  "key45": "2M762QHgmLkbTmzcUiJTTYsf41rqghvJraMP8a8PGfTko1ZpyuKvpgNkGv5XbgZnrfAM1aERxeiAL2jtAhSMrudW",
  "key46": "Rmy6V9fzpQhfki8eE1amhQ6cCpkKjG445JjvhXhojZ1hSkPF2omw8UTKQfQNztNWw9efvGsyJHv7Fivsw9bYxPB",
  "key47": "2sEz4S4T1fd33BhsduP8UyeyLA81CtNG9wKGTdgyfkU3Sqbztr2WtHACLCmBPcKPEthKQqf8Egau8ecpgQmcyV9y",
  "key48": "23TQBHgKfYrjFaVRZcN39yjLQD9hh5LgVj3YtFFQ7FSTHw1FnHdBhUnsxkwzKefGNHPwS1mEBFuwGoKLibLT4C4d",
  "key49": "2gqm81ntKbyEnD46dZnZmSZuxa3X9UZYNMp4PtWwqRLAEadjtX1XDCHoAxuWzsKvrjQgLLh1JmhQgCyEUZkrZCKm"
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
