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
    "2mRKY18YjyWKZ4vowhC9WxHQQNt1MNGvXAF97T2hSQEyLFboYwBLBCZB5MwiDpg9Cdt1q8S4oGmzALsw3qqdSn9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vh6e6E9gqkLz7Wt9v4ZmfnPRW7GK3PXvo2D1go1nVm3tuBKLvPanEbGayrC3t9zXA3xYGoUrNrGopqC7S4kTp8C",
  "key1": "5Ad4bzKXs4UjTLsi1xkawsxcsC3Yhj9GtmLzufA6zXpVucRQJJXHzdjft1dzCF9cNLheqcEzYYa7vP66nYY8C134",
  "key2": "2tzY8SbTKkPc4T5cBvrvBctYDVNAS8GPxWbH8dihLvMZPxyCApdS2G5p431LjRs95zSipwZuuevWBZtPQhFcZE2K",
  "key3": "4UkMkgWsP1e25udvNBjjABNftQcTfhRrwLvc5otzPuvU8fkwTRXxWqwdaWebsBj6LFQWGqsJAxxcimDG2GFbhXEe",
  "key4": "2CDoggky96vVecs9E1hQ42ASNn8MTQa7b5mfNbWYDA9rNBpuXbGpC4Bkiz8TEhh1h3irbrafQd4zCJ1FeQj5vVeC",
  "key5": "45uCTERpp37GhV39ajYMGnfDHjcwevdrYmciXpdUnMzf54YVZqD3JM9CVd6NdEp1pqbATommuoZw8P68CT9CmVsL",
  "key6": "3vtkPwkiHCD5gApo1aigYDY1t4StMFkuZar6RxevT7zwdu4uGdmpXLYRcT3dcdd7JDLdxPvusEFsoBymM1sVtjiD",
  "key7": "2sZPMqivn41ZwF7y3qyJRvsbCwVG5pbdVfGEtbMUuXHds8ApHBxe49imrF9Mxd9wqb2hYp7SpA9wfz9por7y4qj1",
  "key8": "bXkqsycKBB5KCpG1DrRUiTvDShciqPSUBa7ujGDMWtJDCHWSNuGBg2dYy8EZqzQZEomuUnjjgqumXkMNFpiPagF",
  "key9": "xEjqRb7wMp33osuKu3z1iptMcFbvyAE5DStqh8Uiu5jLigZzuWUogS32wpSLL3xU766KrLWghU9rtsU8iKEhmGR",
  "key10": "5quqsvrRBLpL8UDz7oA6AHiRg8UgXp79ZCRov63etDi1YsrAVaGbXWYfhzSBbJybKkXGULBTeXf6KUGY97fcfpBN",
  "key11": "3TKBqfADmZUwTmx5LC7EtudCnnjuJJZdfFWtNrVZyxgT65Bu4AtCiRfQRVdTqgLtpUGNwXJSv75qdcUEvTZ5SYpa",
  "key12": "5ky9tMev9zwukAR7fmZRd1VtCqdNdf7EmyVR6Y8HtcrKnTTfWrMKsoZGtUUpLtsPPFzm2mCsHSuTLGaoVtkamY82",
  "key13": "4jHNWWjWExYnBvfYv3RoStY6zydQ68hJjhoJfCZYX84y6j3KWNeaFMHTh59rvvKFFgqEP5dYWpkHt52JqUxEGMwi",
  "key14": "5xf3V6C232gHEBqQjBySbLZZLdB5AywRyBULt2abgUeV6UYJwsNvJU8pX3QUn9Dvopcq3LbPeEEChsRK8rBDo6M7",
  "key15": "3rBD6cLGSKvnbfRrCUG7pQ95E6BVGZcqdmKg98SBGeuQ8pupWZt9hhaeJou1V7h8TfBn9gY85koYfsF5RP2zg8WD",
  "key16": "3ChgDViCvnKPvGGasu3o46DrSQdF6X9VtmTGSBaso7QdcXUw1k4DZd3XtoaBXa6uWCRENgMYNSfZKZmjs1fQqBu8",
  "key17": "38AjmYB4DmfdbVxaD7iXNnDD6qZqCAH4BtXrn2VLdKjQ3L15WbvjavoD7JBYdMT6tL9MjnSPRxw6xmttBDAFErL3",
  "key18": "9vZSCLjUhFCn89MVhysqSZm6B7ANW86uXDjrtmRM81buDDVLNQSsEpU2XKvQJYK9bw6LxhfwbgiyRiAJ8YcNbfe",
  "key19": "2q7ea8cvSsabr9KHXix9c8dnGTub87CV9tewN4VUSgoYMPwL55snJn4o9fuFFeJssKsxdbJqQVnH8w3GKwYdvbup",
  "key20": "dGgbqoMhzAcZ47xDoJVph2C6ukdMHnuiWGHPXASoFhSkdUW2iaZ6wA2UZr71Z4gHYxdcXZu5bhEVZh4pKuiAWWh",
  "key21": "4Ngq8y64BSjzyWq1neux3z7irEyVrVjLrtEfooUHbows69ihnUFjQLkiVW3yN9b5gCmGbW8v7sbXpLnq1uaCUkH1",
  "key22": "2sHRwPg2ynhq43JSiu5mJmNJkQQUiXAMYWKT5WXE9PtfMvDE7XnrpfJniqhaJJkbuZh883s2aZvLxC6Ys8dDp8aJ",
  "key23": "2LoUXQwqofmSz1PGkR3BufiPuPXPH2fTQZhLX6BhNmTJ26z5E2ip1Q1fS3SdFjSFNPDvYj3gePXfiMCXcgEfatYC",
  "key24": "2DHnqoy5cNMj8KyMhsCCoPHADbQTmVHWpoQC7KrdMpQsytBuR171TwAWLLKzbcg1mAKnwUoHRGJzzoAVXvKyAXMY",
  "key25": "52g6gBaLBeyNmHShUW3aQQYLoi8VTs9XZvrvhcaBVmbpL9nzMxATu4bnZbTdnRcVoqanPfu2EbEKjexPkiHuRP1r",
  "key26": "f5VF8dRpRFDT64GowHkrnCQBrShSiDXfdHHKWbK7ivai7CvgjfZu73CFN4BM3bsg81KWMyCo5SHXWPgaEVRDATM",
  "key27": "3R3fVwPMzmAjggW6gkgZDcvdazCnS2iQA9L8v8ZhFvroyuXDCzTtySViMar7QsTMbM3c1AzF7iyGmLN1xskcXbix",
  "key28": "2DuVsbQ6Kwc1DMBFkb9nQwkkKa4No5hzYePeGkWTYA1QisX8rQfQFEnrWbs2a3g9cbqDDowfZpN5LHoiMdeR3ch7",
  "key29": "sHJQnHD5txdv1anBvdw7XRfuS7xxLzWskCRrAyZZtz3ainc3HBB2aJuCgRTcEJpc3KbzxC35qWYtn4VwAkHz6dG",
  "key30": "P3rpsyGYDxNPRwDpNwrTuKjUauv8PYpprznshVX9max6bE2LAvuFKAuC4baHYm5NmezcGcvE5BfVkS7xnEgVBLW",
  "key31": "2SRikdNsVMmWLG8BA8zZjAh8uh4C8cRvYtnGSyvnUb9NtDGLmT5GJgZ4v4MT7qBNWEPXHmsRtXRo2wJjJtCVBhG4",
  "key32": "2d2JhbPqqRQ6f3FM79uTE1ZqhDBMXyHMgUWcsDaSuKkvvkoets9RQE4tcTkWjfXQUoEJ2enPzejWGAcYwpcwQo6V",
  "key33": "3o7Zt5DqtzC9sSCedUmi85sKB1tBjqNYwwsYBfgCDaBpwCR91s5h5UZ6GzakPDAxAyG5fcLxn6hYw6G6Rfc6mxrN",
  "key34": "C7bcRTMDKvnxG3wZw2oWUfbFuZxPgUCDuwPWmCwnuuJf5JAitvrfa9kv8X5ZADoWzx67Qd2zNCa7L7byy6EXJuB",
  "key35": "2mr6r6BYZbjrGcRaggKZaybzQAf922W8ptCzLSwEsii2G4eoYJXBqSMGWXFHXisxFJxXQZQuC3exCjA3gdzzbCMv",
  "key36": "cnMN2wQLF3bybMw4Yu1XcXgMdeaqjcuekfv4a2r3nFKcmgmcdxeJzcn4fDJxHswBAsc9eon1GuxvaeDbvHAp4Tn",
  "key37": "26W55vkmpf4yyKSsbVQS4nCLLki5fSB3b4B1gEajB3zvrbUkgxLpBjoTfHRrYnVT8NPf5CRW5cCcP8Ab2WpNrFWM",
  "key38": "NArw9UWEVCYnQBzMSzZ1H8GdKGzEWGv3FqZ3UxGVVCPEpZbUZBrXQi4HxcP9P3ayetfY6vheLtCZmzJoFojj1jJ",
  "key39": "5UmDD4meewdQk83f4S3EgR6CxoGjBSJ1Hqq7YtoD9hT3zzREmoYmGzH3SLAiDgbV2bXXP9uDbocnPJ8jUy5xpXtD",
  "key40": "2ksZTMPiPZYcCAu1a26b3eDbwdNVfXxjTav1hST7EY9uAFNBxSgxfMMeHyCexayvoaPLYQ89NxdDAWLSnhmAns5",
  "key41": "3ZXz96tF9f9BhjgZNQpfEegYRG7pDrB78YC11tZvmRXVPB3h5G5qdNBtqRU86xhPQ5hwiDS3pqKF291PSp2rgz6B",
  "key42": "4dKZvPJgnHJ5xphJKBhKsXUWB67FjkAy6zWPjBPJ1o4HnnAXE3qK21swpzUdTAGfDE7JC23j3cXRRupkFCYXJHAd",
  "key43": "5tNJpkyhe3LvapTD9zkmZbCDLNnRhnbQtVCNQaK55bNVkY1T9GQYbZfs4YRABVHuhT17mDxZoLHb6hdMqPBncVYV",
  "key44": "3Qyp3Jk5Tw5Ugf7xfyQsUqyvjcBvQVdgdRcoLDLuQHnn9UbxSpTjLjudcLxRWND38UuxvFSs8EEwZLqPx6TKH44H",
  "key45": "4LWyL8cQNh9Ys7oAWEp6CZ6xUKbBYbExuJygcdxPfkY1fUL4wJiMAHcikuLWjXNh8VhQT3A2oiaE5xN4xoHpCuB5",
  "key46": "vtKYuyMA6rM3updSP4Dt4TGq2y43HYwiiJZRgsMcX9ampnpLgGT9DvdURBuCpTBtNJvSEEdYkcerKXTb8U9G1Sb",
  "key47": "3x7YDXWTjbZmwK2P2V37pCmYfqafHSFvrt1kPSUyhH7NFAA2qWLSRnjFiV1bj3WeWhJGeVWs63roh4mtAJvYG5TM"
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
