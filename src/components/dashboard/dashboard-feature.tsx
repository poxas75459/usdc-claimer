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
    "54drc5eKKnnfnBoAFrFHPHnVcwdPvCd4HE8WvJEGjVEovVpvfadRLu48guLf8FD9w7z5iKfVjishMdVXxjmRXpRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cm2fFrG54teXGKDs56CNq3Ym5oSKgdoK1KpZTb1xWDeJA6hsuG8trD4tYLZ7MVVuPLWoF4p9ATVzxhsYxMHuq97",
  "key1": "47WyFDvZLuPACZduZhqip6YaWLGdzQ6KudRpoZhjkyVQF3DmRzQc7HhAErHisbtkfydWbTHJADabDdgZyJGeS9cQ",
  "key2": "5YzGt6jY6SQVErCxTpBusFEmQ2PhyZQb2CHh3FNc9PUsSDrYS1GSw3Ar8asoSPnqyVMQE51Wedfxp9HCKzRz4g51",
  "key3": "4xBfbn2Qks1gtFfGoR3xe2MpuDKMLAm6WPeMafNmAKb718n5VU88AuTFwtGBDxjZwsA4KHRdM9qsg9V7VbbwYXHc",
  "key4": "2Qj75d12rpaoozVfcQzrcam2HERNJB3eXHFnFyEm4PWyM3dtFWEqLwW18mw1oF3fqoygsNLNzmaZ2uUPgh7UK7La",
  "key5": "8ErM2mMBczWoqTt36RC4WXhQ4DzUF2fgziXACkQyxCFubv6DobttbCrQLrUGXwvxmdeWjUk1enrTEM31WNugmHw",
  "key6": "yR2x2BmA7cjCW7ZsaWTV67UkTMxN9JAXQ7Kg2ooXW7Q94qzM8xq12btKC8cd7Hhh8oaM15uwSBKngyGhFhHq3NU",
  "key7": "5uQ4uHTNFoDRexNCiGispfn2KqKh9L2KHt14YpjS67v2HZ1izof9chntp3mH4funAKLXRfhGntd9fZKwqFBtxBax",
  "key8": "zEWaGQ3p1gUcbvScdjED5RTjK6cGzUhyeRawBLffKzEc557wQppMHs8JKz9G5wXB9ZthZ4NfswMR6WjteNSoAUi",
  "key9": "3GhGd5urN7cZeRV5B5PjspvcX7UQFf2GNYra3b4kLv7wpTkGj6BVhtjyUQsEc1AFcsgPmuVpUZ7kpaTzWkBtawnz",
  "key10": "4tjhFsDffucfYUpsXTkyTKbXkuABigDhxUbwBiS9EYt7hS7kJHiY7CDhzVvUaijmtZv9Uixmzx6FzveeWWHuznUP",
  "key11": "2JiHWmfE7NsjYVtVNbaTnAh42B2e7n84sEjhDMkduBdS1dSFHJ9UPLr5maVoM8YphCs1k65bBKwWTAn8ELWHbynD",
  "key12": "3E17FMU7fM6rCPnySR5VWbXrh8Wx8VhfCQfeUeVYR5C8dM6u6zo87AtF252XtTdFMkYfSEHxm9AP4Qg6C4yLtNz6",
  "key13": "oYNPBRxmjpvyAmUys9gbJiLmHcS1hFGmJektqSPJB2pc8Y9Znnidh94f11idQAfrdWznAvxoG4ssHuD4ufN7hGv",
  "key14": "1n5tk633rK9meZTXUUkBRvADp1Y6gUsvjNyEtwbiAUohSUpDS9jexewX3hUQUXeLrmA3jxC3JK7zmyi27gY1BhS",
  "key15": "2SAcdWtULNP7UXJQ9nnizts1R6xbeZPSLHExg8XemrAV4HxZ4CFpEqSTCD5wHGD6tR5Kbkmx59dRnAdc41sLBiNA",
  "key16": "3UGE3FXzcB1MHtHeYwNjC6QV4eFBySiCigSU9MREBdcoNDdtRLupp5GWbygEZceb7PVNffS7k1FzRjQvLRfsb8Aj",
  "key17": "5jmfDkCYo1iCNQBpDqrgyjpZkfo2TvXQNWUHXPKVaYMBbwQk6xXotQQ1ag9dtW8Y1Puj7KF3DkssvMeYdCK74A48",
  "key18": "5ujouUer3hkHVh5KQrWDZEEJq6t2S62BwbLhttUtEkCJcpFCKcrkcPZcsVeE46U3164qR6mRsB8oiVy4rPCBakMh",
  "key19": "3ZZVEF3w5DTsTsH5W4GBQD8HGL6S5492tdeFcg8nKWxc9emNBogsyZEUFgBUnGwGJYHpR6bJEx3XaoUVRU7YWTLJ",
  "key20": "2Wr9qMG9zLSUJgceJLwJzTUA9xf3cMD9XLaZthZGm7GR7tqw5xjvznqybiwGmRm88hZ3XdFC3WVXBCPchamMAHZ3",
  "key21": "5T5RkfFD8TMgYpwttLaCwFZyc8bWsUNfDpxFwbi7s2ko7SzS2295AthdnE8HooyYbFhA9XySxHYDWi5MZHRALM1w",
  "key22": "n3K6xXwtjkeX8CXPttrCNBSqKVUmKN5npcqdcVNBtufEizNyDXGFbrUfkpc1SEMKWoziQVx6DNg1QB3M21huv7m",
  "key23": "4rYRNUYzLH3qMnuoUqQCCEd9HkoBhvGF2HEoR6EduSZMrTkKnQpXWc33J9RAArgF4qmqkHTTGvpFmto7c4YpNtDv",
  "key24": "4yvLky6bUjoTMdLtajxdk4BcMcXy67EfA8FyrC2FsMbq6iYe5ALxPvAAsB35vFsT2sEmHrmWzVWiGKp4wtW9pfGQ",
  "key25": "oMRVKNJAHAtbB8H2XFcmdgpXLT5KstGEE9SdaVSKQbVDKcRyfy689sRFcDAUf3nY7U1EKitDkNJaVQfG7XrDGB9",
  "key26": "r3C8owTJ1hLyo7bNwEMa3yxW7T4zX7eNpzQYBdffP4UxDaba58CzFQvKsXCdanwAbUL6F1V8qFJ9gN62LSqhcFr",
  "key27": "5KJSRYiZiowPU8JJR9EjPkSEEzGLc2J7KxPTgFHRnyY1eGCUdEz5WdMoC7PQL1Rb2hxLvhaSoiEK5W8B6YQgrBNu",
  "key28": "265Y74c8F49gxPBuXnd8kArTkhwir7eVJ67bhdH5gfmNfzttFZBZttSkewAfmxKuhDcpqMy7fprMsJdNbgkCYnUH",
  "key29": "2vp2ZfcJej5kGeTjDjrARjmU8d91ZZgS22PGTTtbo9CGqycXPgD1hbmNqPBFNXinJgdLWyztHbv2c9d3AyPY7tms",
  "key30": "2frhb6tFxDa3h8GRnMjykkPpZowF2dXzLugehxfaEhsV852Vy2btCsQasniteaAyRG2eXE62YibhVk8tv4jcYSWB",
  "key31": "3SgmbGGr6uJpyrnXezm2Rp9QAqadwFMDDk3QfgfLjvXNJw41vfpJvFAG6Ui68BZHY439qqnyFA9hY9oNEWKdDtnk",
  "key32": "4zqkMUwWREJjtAX3So3tkEgQynv2nYvLhrjGB4b8VW6r3HAAzuBXueHKemLj81LAPx2acrKhLYjd2QFC9rUYNBmd",
  "key33": "b2KQPQ2u9hiCDX9wUwd1PCiLZKng6227VumnkqzTzKAEgMm49thxWCBXPX5mVx8x4sGkidmJPPKjUAcV23dDKZ5",
  "key34": "4ZEtDpENpwDNwEzSpqR7TkkcmCq8Qq8vMdZLnegBfoiffb8GgRLzSyKHQ31vFM1wfwahFZuYLdHXnx2JNZGhyso7",
  "key35": "5GwpUWtEU9eFj7R6GyNEX4tjWRfJj1s3bFQrNdrRrSbNDiLHaVAYbFqgSvFhN3X2Kb3zDnZgwaW6YFExVbM8auma",
  "key36": "sjgJBYMpLFdLuvYFdTUZXD9WEbbtDUdHgJ6vV5rR8q9QpS7ryrCseLWWSev9oaRtQvAuYfropHGDeLBNx7byfXj",
  "key37": "5ggw6jMVqcup3scJYFEGoLFthPtD979i8q4iQuCbUZYLoLScFEpsjNn5YmhLBE7rkPg9frd9BkH9XZDRK7W7cRtf",
  "key38": "3GuzSrr1gMaRafLwVLqY6DYUKbJCCMrPBifzoFwasWSZZxttPha4g11WVug3R7jiiD42bvksy4tNEE4HoKVMnCki",
  "key39": "BpWgv1yRvUbKFWbHwFkEhEQat6oBN2op7T3A4szYphAzypuDCSQwCac6JoJzE16EVFhwFEmTL2LX5ZAttrSNdFd",
  "key40": "VJSbEBBo2nnhygeMMz4BJs3pRGHjXx78EK4U5gfWnBvF8dERu7UFoxPLZPasb5zTcjC7qhvcD2nX6fgxkfjrioP",
  "key41": "3yfu5YU4uZqH8pW2rA9QbsGZ8sKmW2t9xvjojRK2ztWZA7yeFdxsVT2T4tQexJD424M7cHj5Hhsrxv6t3CiCAt4T",
  "key42": "2MtfLwiXmevxRJvVMB4XeN9XZUMQMW5NjGr6YjXdyVgojyNabqLevVg1UUoxLMEC1STKj737YDrcrAvTiSuQBnE4",
  "key43": "4tTFvzNLdZfveWTk5YJZv3jMvz8U3gD1usDLyHHSkii7cWrojqN4gUqHin2j23rLgczz5UigUNjKGhzieom8m8Yz",
  "key44": "3DNY6j4gduKW6zXTd5Kc9fu7bUTpUZqzGLpJAfYLGBh1dmpMr3eR17DVATwh9eSE86kjLnmcitLRigLQuG1DXcSi",
  "key45": "TNgov6DkJ98A9298YjeSuu5ZAkCEvb3bUCctEgdYGDMFLD4KgrNNfk5U4nRefVzE63ncMaeFHAHPaitd8ESQdKe",
  "key46": "LtXHVkJbfPi6w73kCYkWTob6mkRmRakfzTHWfYP8LXUypjTbZCjrEja2NfaA4MiRtgUtT4xodZW3orpcWhTayX3",
  "key47": "23W2Cdedory2osnGp5ZkzejZHA6Mb4J3jGgfBCj2k5DeazVnKnFcZtB6xzy23nZEpFPUqBhwrK2kybsj2RXJAfg5"
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
