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
    "2iPQnDoArap8STqEiDKC2C4uaT4bBEioddkeidXh3LaJmDZg7RYSZ3gKHkr9gxkBz9S2DbRisbyahQ2NPxrtjDMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dfa5bgnLFR9wLfS1wcuW4jJUuynohDURi7Xjoeknx8MzbXCWBRka9pfhtUPbrHYqQAKKM9vnhXMbZ9DX28Evc8i",
  "key1": "4rKtawqdGnKVMFhRisdaVLSsqhcV6mSJe18VTpjftmBQyQvvSS37pHf2q3ukQkACThT8CVcnESpqY6FiAE7gjDwz",
  "key2": "3EDG4rS8MtuiBTwtf42iSA6HhsaiKqwWUUHYhCHEWHTgF88h43PyjsPFv8Sn3dGTMJMHVx59DEESW5tiFprEVVss",
  "key3": "4eoStccAeBS6SEB4Pw9CVgueK4WbdQWvRk9TT5XMW1STLmDx9nPUgE2KqVJ6rG4jiCLfqYWu9HXmPLZhpw4Z7qvL",
  "key4": "tqds3tcqN6iQYz4YXurkKbJuuoGUNsGC7WxBePHPXVcu4VVbke57U5VJpiESLRUMapWi11Tgksbhrpfn8aTMVkZ",
  "key5": "3JmLfw8h56NuiLvhQj4avZbGfc3ZsB49MAizntQRc1vQqhC8yeqsTEGH3dZUYH688Y1FCynLsUFaE5C2NBGvm34b",
  "key6": "61zZXgmCyaRsmyqe6V1NNFdz2uraxVVt4b1LY7wvGAh1mnEif9b1VZU9hp9X8WLcRNcvnXF37FLtDtdiUa6MQebC",
  "key7": "5f5qevw7uhcR8394DP38MtrmFJksc9C11NQ38EkyKdnh29LuLaMzTUbfar48qECpsr2BRppQj48hY6xxBasxqxMh",
  "key8": "4EAHQQAsXUKrdkuyNsFKCTJi5hE9bSzUtSxTYcxMLQoL6LtHhv5HBXNeobjdRftStzJTQ93wgHYgp27nUKbckNns",
  "key9": "2XQfjhRFe4XgJ6nQc283DXn4Dur4cKsQnmhVgHqwJRcifregiu47XuNHCzWsQjcUmkrymH8Jfea1vvAktXDrKgzu",
  "key10": "2uFr74VsmXYM8p5d5DziKJG12z2v4HkMNWP5eVXs5UM3kpa7ypugFJ37rTV6j7USSjLtT71VaSktk3qFRtHdFaZK",
  "key11": "2r1GkYLf3Pfkm56CMtqmAG5z6kBwze8PTGc2hbRCNND2Sz9ModRoPLrz18taE8qKocJPWgKBdifccEHJvwQ7s2V7",
  "key12": "5NRC4WC4TZCVvEByfMKVpoTpsCq8EjdDutbND9itbfeGwf78xqeFBRMka4ptuzf8ZbCBdRdBL8xKAQo1o9sxTMP8",
  "key13": "2Fikmciyo4oegMUCpp8BsQCp8ZM3unUVyELa8yDytvshYmdMHaCoEGWhzeeBPCqUsoUqxDq7gjkovhSwDXaSzHyw",
  "key14": "o1dKJiPcxiJtXQxZatfiq42MYfpPQocH77MH6nBSjDa986GPxaBUcEWimcPqR5TxJYR8rvmPAxbN7U84dChqHpY",
  "key15": "3KLqCfjGs3q5yUAGXofCz2wGZdkAEGWPn2A38GSYPFZmDdLLowg1MNW47M9ZF5HFy4STsZADtvwFd9Y5bukmPHsF",
  "key16": "2mUPus1aNQ5i1kKQWZMU1EJQhR8znw77H6fSM8zBPAQLfRquN8rWS8sxCFQ4yRjEGomfCiq5brj6XgkGDDVmrNpx",
  "key17": "6e7VUSCyckVWgzmqpg9rY6g8e8rQXAB8ydZzdpVTxoW17XSyuzLTcuFWjzsJCyHuEFGHhoJ5qcAfdtXgnzmSZEa",
  "key18": "3k2vnDvBFq5rm7cG4FSo3XWDaMJa2iXbzx8cDk2Ws4Gkay8mjEnwCKpdkNwWWTGqyVKJZjJieFyKZH6hkZwacBfu",
  "key19": "uC6ETWmYzkzAef4kNNWkKxS9EKFZxNus2xSd3ufWcjncYs3YpuSk1N88khyPC6B5spkbttetVLaAEEnLkZ1hr1F",
  "key20": "53w4wdifHHMQP4kVE7WGfAaPU8UjLB52EKBxjwEsc9FhvdbnBzkbsB1pmrVzx3HwxK4s9zSh4FiiKLZrKZzUexEc",
  "key21": "gR2ndUG7W1wfDtioWqKLBUTFiZpgg59vC6Yr6jYdFJDLq46CbwBLFrAXn6QPLpeLPdSts72bLKNWYDNHwwiT7Zq",
  "key22": "4y4oeAygz7eCVdNS95hSTvUFpYNcEkdQLm1P3ijN8f6yieJw2xjZeWEqF9PTMLCd8TVAnq9poJYQyjS5USsxLnDq",
  "key23": "2BM8aLV5rkvoYVX8WjrPr5URaGfS8MtUEoAA8kopjh7TzJHL79eccD65qo6ESsvsJ8XMVtH7BD5roKhXpov2Q8d4",
  "key24": "534mvKVBKK5XawvzqbfxLvSeWUEbDHYw8qmYApzdqiMBCLbMSv7fWbCpPdCT3Jgk8e75WzeVuCi6E8hqQSrEf7rf",
  "key25": "3Z51oZMcyz6qifaLaHZMSjb5unTMDbs5N5uSfLFcQen44gk77c4vKeVP43WCcPQEnt2dtjuMMpvoMKxKTJ2qWphC",
  "key26": "3FUwK2ShBNGrxKdCZEgAnEov4YZUr9yBLCbFBpu33rCrZc2QAAXSJHwLFNVhqmW7y2f3X6uZEaMJdAFXNqe58r1v",
  "key27": "4svZbZL351SkkVVGgrB4VBeJVKvqQBmoPoDMyq6VCQJQ59JEXdUdbzhJUsLzZjCyQNXkDxNdj1SeSSJ7w5WK58qR",
  "key28": "5YACCj37RT58m1rU1tcpcLJ9LGJoYbasr3yA1MP1Wa52YfGKP79HH4fW7A75yk9iF6cxoxeDZYkt1CsmiTnjmwCc",
  "key29": "4A4epTfX3hs5HBGsLiRNhX7vGWTBqTq2VQHdwsmnRZcoSE5A2dhhtdhYcvtCtLyzUCSL8XUge2G2bHCodsiGHtw4",
  "key30": "5r6RQfc8y8KUza5CYrirSvMJj8XtMZ2MYty1A4tq8NhcNTrF4HeVtiN7LYGCd3C1wf7Uq9W2r3sQVrcqn5qzM3Sb",
  "key31": "q2w3QsiqGa2o7BrmFPPfwVJRrv8ntV6UBXxxf8mEPgsMpH37AeVVnHuem6py523xJbiwyYVFbDmHwL4E9zJGwH4",
  "key32": "2z5bs7eFSEva5ynxXPFC89D3airGGtn7dmxbhuA4Y7hBmSZ1B2cQFyxBCTsZ5zK9PuQFX9usXSDH5x2V3SbZzZqV",
  "key33": "2ZtexTsxg6euLGe87KxdUfDhELsdKCfjttrDc8BwEynzq1Mb72mfWsRF3baNYtYPFoRJBwyYu6N6qCgjsQ5Kk5DK",
  "key34": "4jQgD9DSHDpoP1PXmUDsF8a9LkkZENUo4HQ9SggAp9XUD7mWj1g9Zxc5wWG4D91V6S4i5GpcdUgYMJFeyZXFUNaY",
  "key35": "4J1nZsLH8AeVEUCjHTBkApxK6TCPeGRHMFsJbDieGrSziMQ9kTugnNfY69dm4QhRb7N3qw59PaBXNwtJMMyL3MPW",
  "key36": "5d1SzuFjGhCR4WXAFSqFGKYLCKkDzfp1R6sVRPDTncwts85xvih7DQgsywve7pkVctXHpAGUAr7LZ6rtrVuG8vrr",
  "key37": "2xmk32JkUZ4JdY2MnUNSsSDfagHf2T6RH8gzMYReqsuhKFrD9UiKyzS9dSz3YJrB3vZm6Rat27995D9qVSAbEU3J",
  "key38": "4sRWJxFU8dsFTLo7RJf7YQMB523JkmUgxhP9gHsN2FbQaQtVwn6iVz9j7GzbDF5iBqcC2CjManHiXTCtmR2AJUkw",
  "key39": "5ktBKcst47rSUKQRkZAzGgz4SJ4Rrr22V1FE6zZzNSS3r2wKodxN3rnPUA6wbXhAGztSAYFiBEQmNZBdbUXMZnwE",
  "key40": "2QaterCBwnpCyYMFW2fboBeEHGT7YrokuAG1fwrbBi3G5DhMXa9hY1VA5bZT44D6C6EqbEV7Zvj2zekPTP93tDVZ",
  "key41": "7KyPXDRbZACwm3x41t7K17nrUSp9d4zz7XAAG2nbgQmHhSXTQM6pxjBYTWTC9PhVAnB3LCSajxhz58gtrf6Kbec",
  "key42": "4iu6mrCjf4RpQ6tG79ELWAx1Yy93aYCjFG9LftkN6gQDuqJzhzT4RDnwQogFRoh54zvX6sgERc3EGrxeebaybBTH",
  "key43": "3TuFZvYP2EifDgZaUWhfp4jPecKNFZzstS4Dm7Wwbaru47hqtfEsEdUrHQpkdnoT6Cw1SzQRc9AtVRozPsxRKLLs"
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
