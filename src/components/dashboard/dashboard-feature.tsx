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
    "45ACJVy19E2cvb2JpPLsedy68vrc1MYTeZF1tJHxYTF8CHU3SipfExvCf8Qy4nGUxVgsy2F9CLviadCJCC6TLU4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jtQXnkv6bRY47yncZfLkW4QGu7y3hhsRnecwJKC6wyfMLoKXxgcxRL7RLX6Q3b5nsxV2FLXUPEXM6RHaQ5ntNNA",
  "key1": "dXWfndN124VQR59hi1tit8GQ2C7SYXzJ2n8sWd7XxJZppEuGmh4gAhqJ2yexQt3eG7ADHWhdo6BRCxvknA1QzK6",
  "key2": "XGCCA9xorWsWf5Agt5afTxtX3CmuD9M2ZbHJBSKuPSyJF2M7xzNR2VEXC8tEY19gSgj2nVQjUo58RzaHnrh5wkY",
  "key3": "5hGhqk1s3t8Zdz4V7Dw3NsNqRA16aHtnMPhLBD8sdweUSSaxFYQDSgzUumS1CvyJaoGzELYW6DihWdzysGjMYEhJ",
  "key4": "3kxsi43cV6k1yfMAhNk5kLx9CsR6pAEV6mqAYCoj3ofjx179FzRmTvVVmGvGAxH34AyVydUZCA5RuaqZ1fjm62Bd",
  "key5": "4ocmcUonZqDgRsTnJZmWP95e78XbBALkkLbrAPtQbuYeYELzGqx1BDcQiKz4GAEG7m1cdjPZka45hFukzjb2b9UA",
  "key6": "5gVq9nTg8yCjD63xqFyinHLJgTGzowz6iouxC8fmuSCGCkR5qx4ZRfpBXCWWg4fQuZa4GsiU5P4HGXmEmv86D3JW",
  "key7": "AjvYZDS4NVb14ZHTXBAqWDJXYqYDKUKShQ3VUnPqZXwnQ2oKSjbXRyxVjWB3BBdPi9Pk41vMetS3cJf97vKEAT3",
  "key8": "5CM5p7JhVWwKmBzPnhb7hn4PZNKAbD2Wj1M8UJhptmxVUEp3Axd7qGxdVx2Z9c7HZB9bmgYoqYb4QECH4YsYdQzv",
  "key9": "2FZTvzCkeJByAopidUbZA9inTkTnedBVP4jvRFUgaVdamqzeAf5gxDGvKASS3PQqhZikuSzrfD8NVp9h8z2HX8RQ",
  "key10": "5YwReEqpcnudzoeVPWq7Q8B46gcdd5MBD5yKxMuLgPjybU7i2tUPntvzv4PFC9wX5cSyv7exV1NsDNuQgHRtKs1D",
  "key11": "2RvLiyY12KC5yNpM6sFKePqMKcFsjL6f1D3H84Ho2AbzibhhqwFfuZJSdTukL8HLVgej9wgzFiTk89ZFQrn51qix",
  "key12": "2DedKJFS1mUtnyzKZdjocqthHkyKXMPkfFCnfajNs1vbSmibWYpc4imuM9jYsNQvwEkRRG6RETCxKqXbjxNSX5r9",
  "key13": "5FAYgFvUSj62oVFgF9YfmSAfN1tqMFy16fdZ1NKh33RPzxVZc624qoQtqeHWN6kWD6zEUgp5EcukeN424VWRUU7a",
  "key14": "31pdNabgoWLqdCK1Z7aghgU4hqeR45Np81tEae5usdjkV6Gh6mf97JE9bRkmVMrE8YWU5uj1orhsasiGuCDsujZz",
  "key15": "5engrPLChvymgFiea6t5PPSHU9ZqPpuLxgk6yuFmSrnF3py9xer9mwUrCbk4SRBnc11ALdPGpW61CTXJKjtngYrf",
  "key16": "4EQWpNiSDMMY97mSKwZkm996a112pXmnr6VR1kMDzeEuLkyCRST9JZSPRjQJ2628AXBQdH6rHVeWwWn5mog72XRG",
  "key17": "4UX3k6YCEMi39Df3LsKAuBJi8T9uQHHbvQURb8WyMbGqKshtKMo9q1ToFo4ds7WHyuvqmGtTENyKL4yDcpw5vKi6",
  "key18": "67PgyAMVGKh6nG7cowPWbbKixmFncc6JDtanoSsCSa3t6gdnpmDGoRWWLxkCwTWSvk1JGEhMpr5GpoNV6RhTn2sn",
  "key19": "23zxCDWn34WRQ7zbK7VtSV2ZkSNv7M9amth5NEsVUji85jKJnHqFGF3RGeE1SBdkB8ieLz8YrrR3z1tyAzD1GfK7",
  "key20": "4LkURqsSra3Li1WVfcD1h8qk7Lgx3PL8hvRxM4bsgDWZDUDdc2NnwXxNcMR4aaN4jPieH58ejahjBguzbydYzxBA",
  "key21": "5DmszeqK3x4dULPgC1e2P4ssvcBev8Yo86w8F96bcV5yX7bYkw9j778CptVapGh72EEmrRya6A26NQ6MV8cyzWEc",
  "key22": "677KGUNXCrP6ydVvrjYnHyk1ipnRo9crzYwpJnZhTHYVLJfy5jfgjWM4LziokX92wHj5dUT8Zadzz83W57EGeQfB",
  "key23": "32XhoudB97Hzi9SgKr36y7BAtp56TvyS43R9nuxsr6Xcw9U8itxp856746LGpuUbfxse4rc26M6NdYPw5Mfiqsuv",
  "key24": "2JwU5o8wtKuasQJPrCQVZBcknHaPWSo1zFUgHvVUnLkvLkZ3mGoVjNCoxTFxHaP8St1Th86hB6jbGuMcA4PDD7fR",
  "key25": "5FP9AxYnJuN5CyiKEsVomHrMDMHhBRqrwY3kDLvFcBJfMR1QaWZ94mwzgjczGxbCTfH6NbtpsTuSL9a7a3fn9erL",
  "key26": "5v9PXx4QnGxBgUKZuK2d3X7TvBfYEwuRxVdfKw2HBxLHXNUzvQdaTUFCWneMgWfjHtydBdo3Yd96YBbPSr3oxwYT",
  "key27": "4sxUhVeQjPCBepzLuQhckTHXX5RCXF3FYGsJpccDZzTyNzQ8pQFaeEhg51cR1DMkRBNkhocbCuoRccLX6eKwBkRt",
  "key28": "2Z3xMXvGcnfXANbMnxdfrb6uffykT81gQEzQWKX7oRHwVzdMorVHus4FQ8YTxRNdZyZa1BPKr4tuhSKNXQLwwAB6",
  "key29": "5uJ9suBrLLoG5CoRdXpB7vXtRnWcrCWHCniEosMDDL4AVA2ZhR1R96R8T5mz9k3urhst85DcLnD7J2SdTm2iPavf",
  "key30": "347q3r1iB8LuuLVefCtBiwVsCccFcbvXCokFeezUWyHH5ei1JHufUhPcH26RgLKrvghQ5iJrUUvWPSSdmT1R3YTX",
  "key31": "3V3cn9xL7hs75HKcsHfXP2b6LPFkr3g9vgcpFznyY8qgdMz3ai89gen7dXNFnrmWCsxHUboCfZgUGc7KfSQ1da47",
  "key32": "2JC7KBCQSmaeE7Eo5tuF39PbkzbremM6Jf7EwzFnPvyfAdB4qeQbmLVescJ3goKWsqmaJ7DTxPSE8pdT71h3Wkv1",
  "key33": "3BvXBtaEgsb8sgrtsmTykVS7sPsU6NaZwbsD7Y6n4xfYM8NnfXdwtAwacpkLNrLBTCB9yD2NoYgTcFNwkiH9Q97U"
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
