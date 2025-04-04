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
    "5TatuNR1n3NqENK2M9s5WiMkd1qTg1cgvjZdjAivjWmwpxeTThmN19PqiZYjgxvPfvRoU7XtXRHts8jZWPV5s8z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VB9Bnd3DQPSANUWwoDGdAyvLZLyTCWxP6vLwzuXcEvKskZ4ZZwqm4kWxfbFKGBvQaXNPbHtN7ynXqbQDNgdMTpP",
  "key1": "2Wy6b4cfdjRGGVZedtajfgecEM8hvJZggHdR8yi9GHBVSTsgGsXp5u1hmLKf9AD3fX86kfZP5MtWVb8MT5TQfGQd",
  "key2": "3FFRfKS5cnCP1B6GB2EWceUHZH4T4ks6eU2Furiz1uV47zdaqPjUmVacpVqdAn7bfCky6VvauBAUreHbxibiDDyj",
  "key3": "43EZoJq9ZioZGgX6xEQJY9ht21aCMsFg3KtLH7HBEHbbFhvZQ4RbKqFqjXzHLhcx6W5hmtqArEoBxkdmBsdw79D5",
  "key4": "3YGf9pGigRMMpAkv2ZBggKUdGxK9uZ22CGhJQ5LqcBmWgcupPJYbvyGdfi9z13pxTVFXmgdubBCWBA6hQ9TtFH3k",
  "key5": "2njsNpuag21V3ggFzpWnW2mF33zu4HWyjKRKirVTXy7DWCpoyPNExB5rc8Yyu7NJQcy7iwnJMfqnvVKVjYYNjYVV",
  "key6": "Vi15KSLVRF4buS5jXLVCGzjsbCjeSpV9ApSkesRavHd2mmHv6JTr4HodN1NuNe2NpKbumNrAfgnNiTCLDMLzxze",
  "key7": "46XrQSkhkitJihjKoyoxUWMe44SwK5CVb1obxVpoEf15V2tatznWRjubPS9F7ajkUnhGn4tV8HfAeJBNSTyuSthq",
  "key8": "3ZBZ35J3qMoUprKBxFyGs2SMeK8WxCRmhdVj4uShA2Z8hjW1Z5GaXgpTXy3EUmy7k2ssfBmYy3jbirqWSr9t9NLP",
  "key9": "58uzPapg97tWRgbqQwsEXLxAhUBjYXuyahSj3djEwMKhZ98vdNkSenStGQLJtFymoDWp7TcWqjTMyvfcNqafNBE7",
  "key10": "2WXi8b9qieEhi6x9odUx3W67ctDsu9qy1ds96xij1MDogyxW8ybCnp2ZYRjxXAxDaVMzUfJtoUgvQ9RAPx2bsM2d",
  "key11": "2tG7UpCX3YkNUpJp5L6HfnGAbJxisJDivnRnHd6kmdpAhYMAi7hnqjab6DAXThw9jVNaC7Gg4kuXzzpdvmGcLHnp",
  "key12": "3CLCU1RG8Zk4ncRXkUV45wE9pEarjc2gqD4YcFYGXDxC22cJxhV5CSREh8G8jH2wA38fodHxe5iLxw8oPuR3SmGd",
  "key13": "31vfB4aCKsjWjieaHpgrpe3RsE5MYYvGTSV1zE66jAZtxkaZncH3YaArEePjK6DMHsdceCxmTCcBkbCq4HsVWNf3",
  "key14": "533ycc8KHRTujZUFMNf4xdsqxnLC3Z1dQ6VRqVjKGforFW4ZsgRkFsTxHoLbBFUfMfBa3SmF8M6hPe6UuH5GLGSe",
  "key15": "2oSfiz5XLS2SFEHuVU2mJgkeYycXQYBbHHwZUkzo6WejwSP6YZ6tnji2namKvEwB8DpZcresVy4L7rt6prz171zA",
  "key16": "4xDrAd6VAn87Gxe6B7ZMYuysDYaZeA7UgQAhsyDE7Xp2XhaZgnEntrvdDPhQFPxKubepjfYXjpjPxGzaEv9KSdGJ",
  "key17": "2w7KBSBrx3jyDNG8XZXoFJqpYJbRvWM1GZBYVAYkch52a1XXciS7eQcAL56ibxKYTtaHgyatv4UjRPTWvUjkXMjH",
  "key18": "5ZavwmQjgJgR5PZ6DQN1mqcD4EqdsEPHJWJerdx9mYbERd8Vr9oNgLZ9rfwArQDqjgDTreZUJxpgH2hKSthfFAGY",
  "key19": "2j8gKh56ZaqjrhtR2tMTYNSQ22jhpGMMHk4dR6jNnkTtuoSXt9HKJbYS1k4p6MQqTcZxrePkYwJJ8E5f9u9Vqpt1",
  "key20": "aGg8aarLkmu46N15RKZtXM4EiAELXRX5fiaz83hC4uNrEAnH8fRC1D9vPPLQyQQMLe83t97jbYz9kKZxtNyJVow",
  "key21": "2Hhqs4NyRbeiTWbfYmM34QrDQFjnBAFA3i7CuPi4ZUAyFfszstpMxR1obWkYzjbYoWNuCihESgFwCYVRc1z1TtDq",
  "key22": "442ConVQAydoav5qiALGb6j21xwNGwQynZtrXrCrRgsmJ78qqawtNHEoh8PhgULAzV5BxB6WhA8wSMvGkNmn9shT",
  "key23": "5MMUaqiE4HQow4D4eF4jhYVm58sT9L4oJ2sdNMi7crFvd7PbhAJhrhzCCEKpiuQEFGgBbvBzGVyftDhYawA2o6Uj",
  "key24": "23NLuDF34QuCKf7dN5qy669TCde3YifjFR2t2uCXMYCnikBZP9Azp9MiwUkH23xWDHdK2YKgTnPKDBv4XyGbs9pG",
  "key25": "3XHxexsUMMfjAX3uVR1pqV8tJAEyUvkSsRKjw8dkHyBUgxTzZDFQgme6dUSTqaycZDhkyN1CgTiacku6xa3n991L",
  "key26": "2dZhXSpdQfg3bWB7jYzd9QbrB3yaNtqBQkeCTuxrca7APxwdaVwESKmVxuP8LzZ8FcC8rPco43VtmbFZSsbh8B1S",
  "key27": "MMU9yFVfHSwsRAqJf449WVSt6ZFVGRMraQpKasXJx4RLNZKBEGwAPLrWE5yMWb2y6HDpjUbxDCyyqn2H1oKB8KM",
  "key28": "37zGLqRCdwNbVedUY8vk73eLfannhpkr5ashMGRWEHKim1FjPmjcLUvP73gWDfa7QK6ZeSmajho2h4wVVEzkuUDV",
  "key29": "3ihWLSkzURYxwSdxR3Ryf9RkAdDTxRqZn1AEUTM6vbsQ9jHCg2Pi61dNMy4d8BpQorLH2q9bSCFwN1qinBLS47p3",
  "key30": "5oZxYxaf3gRuqRJjkgc2j2kJnSUejd7ZeaXNv9VUmpoHD8t1SvGWrxocEyXZJvqL2mbSvokTruNJxmMDhYxU37yz",
  "key31": "3PKvKLBWyYC6opXZyL1ibo5tmZzn7P2PnaZ3v36Ge8SiFqe7vb3JxXUu9qypcC6HqTfUyc6Z4GXWWRsoRhLw7656",
  "key32": "2hKnfhZotZtmfy9DVLzz8d4e1gTFZ2W9bGoiDT6ErbpSFiMzNYZ5oQsPpso3rdr67uMVBZwWLLCcUvhYXyR7DqH4",
  "key33": "5wHbP18R7rFeR1eNp6EcLZm8giqArU1ew5XxSrKs2zWbLS4QSHKTTd6sHQGJJxvN1Q3daRovKyBLva5AQuduy5mW",
  "key34": "3ktdXzGFbG7Hjc44S2hCaapJZ72aYL3aTsajq4juVqvU57NP4mumAAW5RbbKPxJ9G1vmM5E6MxSgPpcg1RqsoTrr",
  "key35": "5u7ihpzVFfriZ8zpWeg4QdrGGcDhArG4eajW2ydD4NuXiC7hRHARy3gNj7gY61r6ivnUoMTBeTv9qWJ29SnHHjL7",
  "key36": "2BdDR3LZHbgSuC2J7EsJGayzA9o6fYBxbnbN4emRAEiobsRYmc5pR1sdadrrY2FxurXSsdNYYcR3mSEymyzCeJUB",
  "key37": "5aic2FqpEWYFsjgg2YtGLcAu16KzEUNhf7PrzjAMvjy8VAFAFaRbDSAtywHfgxK8ti5XPspLLVidxXzX5xDFGuwC",
  "key38": "44wyvvn48ghVd3db5vHTWtxGNtkVu4daAy1hFbv6XX7ZUmuexybu27Mud1BsmgdTMFunWorwh4obF2ALVmkZnpKb",
  "key39": "4pTJtjQ14YBLX2AdndsqDjMHU5yVaFnQj6k23GRXuBVLw77PMvajPcseMsjBwFpVosCDp4piR1S7LXn4A882g2CM",
  "key40": "4aRDDCHDbzyUq6TTi2iNbLma6zUvhbjWzuF9uzFGaLpgd2mDyUQkC7UETCEEjuFiUdGsdBed74TyQHWZn1VpG6Yd",
  "key41": "3RmnW6rQj7DjJ9J9p8o6DvNGpqo5jYSJmsrUKHbprv7EAM7f2m8FZQdaRykdPZ2itXW8UHpPUMLyDgcyruh9CiqY",
  "key42": "3h7NP7moq5sMfEqVEtvuxXku5x63vt6oSGM2cKrLUEm9uidKjasqBhcGZYrNmhJZz9RGBxwvaYR7htoXPcMa9F97",
  "key43": "2endojg9p4csRS61Kkbo6Zexrs1vucQZYkWbAgo4KuiBjZxK1PjMzAYdkFAqf9KBdXuNQKh3q8oEssi2eRUmyVmf",
  "key44": "312jqE12eT9QDUu8vesCypcd5SNwxbH3tvXkgjdjfZidJKuUyS2W1aM3hDcjAuCBJxnhCqUCSJxeb5wQiTQyc4hn",
  "key45": "4zUpYKGNcPMX9K4JWUNx7W41343pgobXejxyKZ3kov6pKTk7CuzUi3nPPsxCcFN6K92vRHgxNcr2E6JAnFwVGyCM",
  "key46": "5mqPLQ4tCFAcws8CWVt8ksdNKRDNCUToKq2VSYA1RucCQi2RJmVt2xZpku1ZAjfa4XGZdD2H8Jwbs8DBmZD8Fntj",
  "key47": "2F9Wuna14e6TXjVucKqGSkj1Q5Eh6zcCVdQzzjkkYGuSYbCoLsmSCyfwTqYf2xxsdLk4U2hD9BsjD3CaDDMf4TSV",
  "key48": "3ArVteiejUxPr7ygpW8totm2S6kk36ive32Bf9s9jm3BdgEcU93284neVk61749GUJBsh4Z7rPE4UsvqTs9DQGYk",
  "key49": "5JKwwJhadux5x2t3c4JmwPKLhiNUHwYiD3Zpp1dtcfEJ7sJEiwJN9748gGCVfFYnQZBbtct3LZdyv4tnB3CGboxf"
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
