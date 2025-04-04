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
    "3f2RWLgTbHkyASVaR15e6rEBw4qJLTxFj6LPYMkJTUuYuBkpygcR83reyk6tGp1hVJh9fozLCzSJ7oxAYqu9wYov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66CL6UUqFRjLT7ULVYzToz1B6M2PHPNuHrBvy5SqHFdkNGfbtLLhcQ6arr27S1w8zKzZom3cjgJJ3FAnxm36BuDA",
  "key1": "4gHkeJ9jJKfp8WPtqRM2kZAjAEbN8DyCifjkAmQ368Rnz3fwzx5xEG1PDPyKR2Y8V35rQJny9RPmjgm1Fd9uLpsr",
  "key2": "RK2XDFq8hom47khUseqk75ZTV4Ex7PvttUAngizWs3Qntfe39N2ruR7yjNDqnvawnjnNE6iit6VGAa6o6u6aru5",
  "key3": "23hJZkkL2donFRXQu4N5VYAvUgRU7nexebs8sQaBGqVkAYRnexUdpSH4BaXWXqHyschco8BgyTkggLgDJKTDevit",
  "key4": "5ZbjdSLExd56CNufTvdmepAo11emHwFbJQXA8BJUGiAq38cJxe2SFskMgu9fsoCddiRpmSHo6Ndygpgw98fzUbt3",
  "key5": "5BHjoGQvMwXuj1KTKtSdBby6f45kPSzfHF5KJBpmp14oFa7Ev2DAbTn8s223DN9PB7hTHQ44EkJeecnniLwF4Kws",
  "key6": "5S4sZTzC3uaLHRdaoDSHcgKxVgkujaz7FGrCP9mVBVNbPBaDDBNdmjhz2mGPLjzzeSrtihMmwDapHyeQEDzS3ZCr",
  "key7": "h5vB8mgjynB9qYBBvsYaf3KVD7XQyeAMam4BtjD8nSJjRb4WLueWX4tkFVMEBwemyGzSX17cvMZHdnRHCHsaBfU",
  "key8": "2i8TqKinkd8dAcH97xh4ANtSrAtMNrFsKHC6gX6VbAH8uaQ91PyfSCL1ych6F4kJSTsTfXuMjYXSHL9j4KVX8Hbx",
  "key9": "hegDwG9quDRZxFviRyV7EKRYfGdeT7EtuyZaFsohF7wu7FVdXYq9EPFfAppZ6Wk4GN4dmAS8ExkkaVk6UkZXwig",
  "key10": "2QjqkHXXj6PR4joQ8TiUF35jgchpf8Tp6WFwx4Vexm3ViaoY3bRbaQgBbGNDyTS8uaWjc4ajWAi2AUGXXo1MMvhs",
  "key11": "4wGQdd8JpA7Vj3AJH2QEDCEpxXLAf96Kv2CvgjFT1oiZcjdwJzgkvuxek5nBdwmmurxZuBV4HwfUEih5CQMmsV3J",
  "key12": "2YuTP3BXoeDvhHfniPXH3KuCEJaw6kBAmp2Y9qH9gFabJqaPZ9SyEMPdgTZahGdwUSmuiW9CFY8e8bSYNigyGaJH",
  "key13": "aH3gnyzr537seG6n8HHqykyVRXQVvfNmjYZgSEQ2Z7ss4yPxPKXnF4aF42WJvYWZHBWKYbjTMk5xsj1fbvhzV4m",
  "key14": "5dTBHybB9K53WHtUvbXP6Y3Xx4m5Px6ZBt6PRPgzHKJEDeNg2c3LKcWiyvZvSkVQJEMQrPj4mVD2BBnMWvPV4ywZ",
  "key15": "4BMd6qC9wpBxtkRLC4BgSfaHyfP2Rnq1R6e4iG3JQXj4Erk9FaxWK5gtsYz4iCUrHq77Ppxwgrtrh7hhZz34CEab",
  "key16": "2WhyecLKJkwPpSxadoQ3r9wx87KxKyup6b8cmU62kNZCtiswF65y6UWhJzfTiH4UYuB18xYS65tZb1UyhdHCFrYQ",
  "key17": "3rRa1DQuSpDTMf64Zp3CMxGqDVxUFz5g6tvD6YvaYHPpwNJCCnDgJt4XQeWPpbzextoca2p8KtrQyUkby1SpMk8Y",
  "key18": "34BCWzicdftCBqihsMkGZVFU5Ujqp8VPbKYFdTEaKonG3JeBfrYJw13w4DqhtLbUUPS81WP9eGYKXSnGTNycb5Yt",
  "key19": "8UjGLbUCcpCYha4JLW8gSsxwBsvZPmKDZeeGSeT9cnsG5tXfTydJe6JVnqTyookTp3CXMGpDpN3u1Zb1S6A5ZQH",
  "key20": "2WxfvxMwtm4r4KMPBTSw2j1r4nbWg2VqfKKyqGWyv5oy1TZSLzxs7uKQcgc1Q61uw2CXC9ajeYGmWqriBuoUyCxE",
  "key21": "ke2LPHMyzxp3sXHD4zGuD2rdKHyBbuymQvb6abVKcwuCMddBXYfADoGFEKw8Ld3zayrnAT4SZwWD6jvdJYnzcNC",
  "key22": "4t6cfhjWrBFecj4bhofCs489xX9Tpv75bw6HghrEaNdUtbo4XFwAx4hNtemK3LArhXQWetSBp5GjG9YKS9xrQD9v",
  "key23": "1c52oUpnN2KGEWzNHY6CvLU6hJCxoHUCGegYSuo2nc9k2ANdDaBmFn5yUZYJGJ6rtg6Q59esDo9a7wc1ERLFyV2",
  "key24": "5eVgL2epxe94vyCsmG7hVMaDivVfkQb7cPnp1VT7fbKVmpe2wgFPRY1Xzxizms4gjXocMQYw1iFaCJLHcrquEV5w",
  "key25": "4U2PfktSy3puHWx82VeMp5U7fKFoM6NTMY6anRjFQztzbgnNSPxkE4jCisCDX6hqGf4RvYAFyzerU9YfpwLt14UF",
  "key26": "52XzNjZDEkNDt7UvjjmCMz12RTf85ryNQczPz6ubrLLWZ3bF9CQFQmMUVpdrKt9Hh38xZ6cHwaATW73NQKbw1X8S",
  "key27": "3JaGePvcC3MVejX4tsax8oc3gy2SkyXiMUtT4Dg1h6NVUAM3YSJpJfdNb5VQn55R7oyQgn5BWrRsNgvPTaQcRtCy",
  "key28": "4D25SYdFTRdhiADqVFZu4GJiMjZKr74eGh4k8CLq2euBnbNQzjVkZb1SqHcGuenrQLgRBhKrCjwzBRcRwz2uoPf4",
  "key29": "2ncDvXZ6hiuNtHHYCjyqNcouaTFjwxemXrTmBZU6fzc2coM7bqq6PvzxDcDo6xpU7t9ASPiGMt7SgQNnq89qxg2i",
  "key30": "QiZKPw4mdUnFQjc75C5K1toJdyvwyt9j5mv8NUQfGwSy28vs2AXk6ajPp1DrkCS2bGyvVhfaooM2TAFnuAMUrw5",
  "key31": "4JW2qNHKVvdnyy7toduiczQfmDXPR1ZoP86DigTKzFyHis7CsRdnUxo4GigT9wVjHaU2FK1GDUxnsEkRJW93ZaZE",
  "key32": "5KhMAF78JyZweAAsmxpVaaQuNE2LD2gUJHWaG1sknNjFbnsSpMwrRJcoN9KcZVM9F67j7tpgNQ4nYFBtXx2a7hTM",
  "key33": "4sKCVMk1KXXbXgP4Sork57vmM3E3HJrRSge9PVtWTXcKSQdzcTTzCHeZzddq6L89X1SUjDz9Q5mKw8uRrqyB46dG",
  "key34": "2U84RL3qREgi3Somsu5LdCNQ1FiiNmaWub3ntN5ZELsRvRy3SYGZHbCNuP3zs4PHk1Ym7ZDqRDgR1AbjF3rVeWTL",
  "key35": "277hUBEsUysKvQaU8BpkN2B4M6WyQp4wpEKwoEMhxfHq1pDAvNE2a3jh22bjTB2PmzanKxi9YVhXqBHCtsJoiKZT",
  "key36": "4G6RhMJLW2ECu9QLegoSrEyVbK7Aow9B5DN1WfjmwdYgQd41PwKqPsjAWuvvYRyV2XyXC8vqi6JgWTnDmthYX1WX",
  "key37": "4CYRqxxAyRYgvkZWivynTXVuN7Hf56kRqCCvtKqTYgS1ohv5gko2a7dbPwovPXPpduLaQ3bayAt1Urev2TXscZ54",
  "key38": "2nhQH4RboWPf1VGXoCg3BWjJjg9qw9aMdtkZ3QPvXarbVMyodXrxnsdLusfc9C7gPhRpVDzAAFPoxijcMwtmALqb",
  "key39": "4oKSeC5vXBXfusuBcuexyYKesPmDngWmqt6kyAzLo3P4SYdE5crQwDqrE7fSsnQp1pUrvqKNwAmqYeqaJ1heeEcZ",
  "key40": "3b3VGJAKHwk1LMTXrUmwYpf3JPHfyqEg2TjwFnpdCQt2BbXkkgRptdGwJUFd6xnnizwGtefHeYhV3C6pnr58zzfw",
  "key41": "HvzabkG7NXumxEGcbHH4dEzEFSp5miBNAw5mUkTrG1NYAxj7sHuPB7KeTNrEh6KC6bWwwj8jvDe7w9pN4Hadq93",
  "key42": "4w1PaQPvnjzTcLq2FapkEMrwRac12BPHw8rBU2qVmWuKDbcBjAszn4r85qFFybqx2JRqqZskWr1rC6542PdZ5jrv",
  "key43": "4ePmHcpviQ8iFUNFe4DNt2fWry24MUEbLYNWw1HZkCUB7EjPKomM6BAuxSYbkkwuuR4FSKR7eJ1G1QskcFUzHStg",
  "key44": "9mehWsy7JfwmoNquNSyjRFnPYzfi2tPLXaudALJCNh849wCgAT9FQ8vReKwcfb5kT6voVCTAP8CLt3FQz1CD7BA",
  "key45": "3BgcBRtZ6436zpaC9rpxTcNYfs2neEb4FRebng4YnHX2JAt689pH9Eophw6wv9iiPKNHjUAaRA69h4Fe8jEcJB5J",
  "key46": "4WYJe53DYPDuXzAb5hmBrSE7NyWnUpfHdVy4v5hTr7X18YnvN8bDNJQUawbatuLGBLv5XjmRLUYsnGNT7jWGaxDS",
  "key47": "2Jt4J3hDqY59b45RRjT5TLxBtfwMYqLkuobz69Lh3fURtARWoKYSKfBSK1X5QTpuKJuLXKt78bniHkNrjBVySVF2"
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
