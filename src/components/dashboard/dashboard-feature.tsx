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
    "4sacGavqdnUqU69N2qhtUaRGcZic8j2sysMw482pYsNGaGo4zSc8AayLsrU8rkut2UGhRUVGBy9DCRf9LhbTLRk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ht1XcJ4xnKpgTr3PThXEWG9f2TEoSh2gE7SbnG8s5AhUZiKEuChD3nYY8Js7wCCP7iMLJqtYK1U1un2effAwKGK",
  "key1": "3bjB7o6FmBBf2DPx2yNwo3VCtw25deqfKXrXfNdcWa6ABPSmaTGKCfTbG8Z13cHqvoAnh68Ghpm5tmY37rRzzteN",
  "key2": "4i1QUxXr37bnaHEoXApiiHEAH1f5TKxscTiuV5j454fLQCrnbQWGkRcMUvCoPYJUwERzZrpi151m7cTBpM7Sz8YJ",
  "key3": "5HanVnZep8vNNnVKTHt2diNbDXGHf3mqXFoqdFPARyangyRCt6376aiy6KDz3W2FDBn1eSL9ZprdWdJqijK3BsLf",
  "key4": "5rwsb2ZYmp3eZksCyubmmaEpUiBtArba6garun89mrmjafdGK5PYGwy34iM9gBDPvuwesjXm8u4pyFYsmbVBkS7k",
  "key5": "5vATjsU8DYfsUbjrvaTCT3ejybLTJkBHnvQw7QDyfCo139gfTrVHnUULHzzXagQm2dfGsGE4E7LccsoYX5Dgo8Dn",
  "key6": "4AvDzC1K6daXEbpMVptpiMNLGg4zX5CR77UHQ3PaJryocRiidXNg8eqEEp3CRvtDD1jvXXzJPFGAerFjNQD6sSPs",
  "key7": "4kQtZmsPDTLeJdmaEAXeetYwUCob5Xue8XBHHPaDQcqyDKBooqK7XuuLPhtpwPeonbLzRtkpLiGipu2Z1mdzgWxx",
  "key8": "21AY2nCFBiyZgxoXw5WyFianAzyxYARQ6H3gBpgJax2h7SWfoomTGz3fs13H3qcSzM16XoKc5yxWj6XczoxRdz2y",
  "key9": "v48cFYGuLuQkw8a6qnaBozScHcyBDavoyXPL1WLASVkmCEBNqSrLhHFKZRDmhXyGLiu6QLyNKSrvNr1aVWRpaZg",
  "key10": "56KPAnEWV2ZLgNiPRqNdCsfxp6fubwUeiBAWicT9B2UW3RtosNJxdgBxhoZvCLaRF5aS9rE2wqrStQeRJaycxFKa",
  "key11": "hmt6uvGQJdDg7u3LdrydENCPwSfiQnZa2RNaiarGokzm6W46jfjq7opLtL5j58EudJDSSVwxYnTKbcCN8mzmCcY",
  "key12": "3D77oYHBk1c4GBkPrpPX3QWZzVYsKWBVjKWHbtvw7keBmWANZnGdY69HWAkhM3PoPcP5PdzurixTaqSsWVpoqYKc",
  "key13": "4n5yzjFobmE86BztspZziaaVxw97qTPcE34Gd5mi7N9ALZcoRTCNUzPCffGoCyuvTYhKpL1SpqJgXrxFAYhyQkmS",
  "key14": "24mBWftpkPNuCy2J5kEjiyg5dYgAyB2R3fWqsNkKQJMw6egR8KAaX7hQJUJZ3KgW59DxtD4d5b7q4SWyn5TfJU1g",
  "key15": "o2zFELoSazgM7E7jibrYhnfBR3ubP8H42RqkeSPNuPpB8sZf9duoLhSNfXi36wV14vvAMqDAtjj4dWnzMVykv45",
  "key16": "3PU2zrPn7bCUP8eBLpuRVPzYeJjUDTwCfmV5zJZP8Nf7RWSbe7DtdK7MR5qCKVSCFXV1ysNQ4F7s2tBnhWhu1Fsh",
  "key17": "4cTLUutioXfzs4afhikRManpeCKznuk3pDBbUbjjWgo4LYyE6tY9SKkiDZqY8umWRFbSb3k5kVCzRoKT7oTWVb2v",
  "key18": "2cvsxNf91MU58uh3HkL4tSrGu1VTYYm8XRDEdV7H4xCG6Jpq3CVYpQYECaCJ6hbNqKnX5Ewo5xZDzyK2GBLfzmZ3",
  "key19": "ttychEXZ8tmrnMXWpq65oZmLx1UpLk9fRvq75Myznr5cyLEoaEnfNJMW8My53nYhxCWq4ZvPCcNhZWqCkctZQ8f",
  "key20": "5ZLzozFmE63hm6YceGNapdyVG8ZA7njVCKsLau3UdqCp3NZodWJcvdHpe2sZATYSe8iruthE4hWmuR7dFR1iVU41",
  "key21": "256i5H1z7jKhNwkuKWBUghiBWRAQc1xEsPsxJePu86HMG9U2FwmJQJaoFTrxPLWTw2rvWF6AjWyaLMB1KVeCgwHr",
  "key22": "3j6DNwga22oV665KJmiwitpGpm1dtosZ8mtQir2sKdCxDB4wwHKiRnDmxf9zknzpm6rnuSyNHPCbXsmLboM1gSho",
  "key23": "r5chWPv2zkjHUQidMAMasECeknFQfRbzfxHcx5mf49aomVEEHXMzLAfbfzYFKY2yFfHqVYp9eoKekMYg83tAVHB",
  "key24": "2RJsx3p2xC4vUVd4zQnBARcJqri9EbFEpBEdVh6cWtyYYMkTCv7iDbz8jzomra1MUv69DBQksPVnP2JhZSqi7vpx",
  "key25": "sZcxYfiX1BFdWxqXVBBWKYZ87rhNZ9eKjQJL9m7YX1zSBUYoeytqvmo5sFXKYxPqnTp89yHbrKkF7meY83sNBhm",
  "key26": "5pme2sZ9jwW2VZZqqNTN9zdBF7q4vixVi29Ua7RopMFR9s4v7uPg2sLGJiv7YbC2YLmTn38dZdq9RjvKpeS9eVSu",
  "key27": "2PMfVFYw6WR7ewG9D1oGpcSa4E972YBdFJGXMHBJuHArockuTpFx6F8GXKe9ERUyZtwmU4hFiC2x9KRBGUP2afyu",
  "key28": "5iukHMKRJMvjsjEKRXNmq4EW3QyNjgqHWgo1FgjWw9uQn54BMf6N1kELartdjXRfWzAZ1dyErXXR4tefks2EPGf3",
  "key29": "2w5QC9cqEWirJyptAa8pBwvLfkNtc2vLPFKwpuLvkmzztMZ6tG6tSyehz9HRKcbbXUkdbGKUhBZyrew9nybVxmhy",
  "key30": "4htQZuVE8Lat4Eejn5BUChAzpXPdbhvtJYgU7AE8YSHgQ3sFbGLupfr4nSpxAQJpdCRCYreMGsBm7TfQSPUxjFwS",
  "key31": "51HF9V2YPEbx2RhmPqGvtykEtud5Q8fiM83GynaFRptk4iScQhNZJxp3KU47Y2Zyg1PCfKMGXm9yx6MDnHjkCXt2",
  "key32": "3yWHwYDH2KBcM61LFw1uE5EDWExK4pwTJkpCABVzAj9cnSFbURtNpeXfHs7w6QhF4jiSoT7bgPs5SvAaJnEdzSAn",
  "key33": "tK8L7zE16cVFBMdCJnA3FYk4Frq3sJ78KL22VLYDeLX3JfAhLHXKvSm6YhG3dT6ShMuvFvApbMxVA3BVmgbKcNN",
  "key34": "3jVLWQvfaETRY37PYZhKWThxCbPHCA24HZVrwpLRE3nuxBLMeiqfY4YRub2wMa5GcQTrKJwdaqRUe17BiQpdp86v",
  "key35": "38RSRubgZdWg4jnt2JFSegNHoL9krmsKqpghdTCJ1bKKgfxhycPDCrQBwe8diLLdnD9ZJEJXdy3NcJJ5v1RBy6Cy",
  "key36": "4fc4Ys5yCT9qQGCYVcJPMCyJFhAdfdmRw6UDd6DPr4npzMpiBFFmaSY6xg5YkcVr2gVgVsNEYaVDkNV4eQxSgrx2",
  "key37": "3xS7sLQcHscSSF7P9igpbqvuec5vwPHPsC2g8kmohKetWASBtL2rGhvWXgpZQUqrhYaQDNqFiiT6bybuYzypDpMR",
  "key38": "SkeprjDykJydscVHm4RiE2zQY8xm98nkAc9fmwcJYBUMKCtfYgJH7mvaTeBbJFcKBFUdjTy2jwRLRmQXUpohU2Z",
  "key39": "rYbWA9MDhWTfVPPrH27hjWUChZtsNQTnmP6kWttziVzeq46nV6UePCxzvHHaqKpjd1gzb5PaWg7etJ85Su3xiN3",
  "key40": "4CehABHVGGkTGbHawArHDdsDDPHjR8ajyWX3GW5sAsh8xvSbJ3GaUVqihaGuJ2Simw31NdUBFrjoL8N6a3qRJGdW",
  "key41": "3eRwFyxYTTrH2cRPt6NtMRJNqsGktMqsq1gW9QYdH37Jzh2JazB9goh3aXXuWDhyxt1s7aVuhp4oFvR2J6wiRgqC",
  "key42": "BwCiAu8FwPT3KuY5xKn44kGNiUZumSduzPLGe3jMhLGhbQNKECH5q8bvSTreZeHAp11LgJKZpg64DHUDuBniStK",
  "key43": "7pizkQJEUwVFAx2W7dDMpy2Eh4d6pd1Yhhv4CjUQD14xeAWEHy2zhCKdTS69kJxPePg8fuHAEMLkceojSWHhGAR",
  "key44": "2aqsXbrRsg77K8NvdsqqeQ7djbp99bbdff8tEi3WjNVjftbZ8fAiK4n4D9cLqDHCq3mTzJKodKKCDE9TtuVEmUwz",
  "key45": "62nNpJju4Gt6JrJzxR9p3RsLvrZs9d6dC9AHfuA2s1MLEQrXfHfWfgGKJXAiPM2nkyeX67XJSJYYtxC7bzgVFg7G",
  "key46": "4LXFytvweR5AJbtwcMWdw8ZQB3ZVWaFjnJJnyo9K6qyNAimRVzrkRBG7t58KKVfSDA5Dfwr8DEfbs7sDC36xLnzW",
  "key47": "5hhptB9Ds2rjfhwEiViMcbqAsmA2jS5wsp8momWsQiqP1HcQwfbc8gLwJs3j7VuiWsBRzUBr9wJCYzhEiCdAWEGL"
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
