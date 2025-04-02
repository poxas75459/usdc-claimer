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
    "aFqYGjYdEkE1Rbtv8PpJFXeJML4V9szEVZfBpbLVGWByn97mGTv6zqH1Qui9CFzZP8L5hKCw1GQ7Bs2o6E7sQvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nt57YLdKquW1e3AYSY36nq3GbCaUJ65poSUqBNRk3SzG9oUZzHmDPEUALHTT42U24uvUdvALR15LhpARCCt6E6c",
  "key1": "ETixavGhYm4DhyvmSeBD85cSHHysa3dK5sCgVBW2BgyeNFyKhw5wfPA4F9XSgKNxXhkuYGLof5X2F4QXhdVjV6a",
  "key2": "55ZfcSMEU2GsTVLcPwnGYJuDud6p2zToToVGzYVnLdUakyyMp5KfQsjT9fpT4HF7dwdzSWmgyniVxxfNXVQycNp3",
  "key3": "C412PCpD7Xmt7RrFJHx54DCK77k4bWhw7SGZdUA3R2syK7nAuRcysXT7xHUT89EgvPCPWxxpvCVaQxrkQJd64pV",
  "key4": "3uzcjSxae4JfxFfcXT7wFdy7SMcUrThLMYE81gZ66SxzhySFx8BRmMNpcr5MN1cxRZSX9fUV9hVBoxTL4hUVHLcp",
  "key5": "66NXQu83zxShTPM3in9XiaxvMxmbCknHW5nxi5WFFzTFGGm2neSGgfmYS4vyUacDrKEVwbaWvYJw4DrViPz1fLiW",
  "key6": "2dZLu5uf3Hfqm3dYm1xXnCNLds3MLE2FdeW6hVjTf2NQKP91EASMoyaHEjhAor5JgZqqaqmcoEWooL6iGbaY6iuu",
  "key7": "4JqhEhxXKCRdbJ76Z3QxYyPSyU6XN5PhY4CXV5c2t82bRTAw7CQ3yEPSrGPUsMUkWAdEndKLnyHM1comU73nC9by",
  "key8": "4xZUeCJuadW7ixesoDo2iVcNWhxxp4KYmwnhP4dC5FS2zjDmk1sCUo4cNdka29GUT1wP7Uauv65FmggnfSgcANSB",
  "key9": "4kwVL2sJFvjemk243JhWCdcs5zXE1uWiNYFEnnfsHKkXFZstxVsGLPFichbJVhjXNaW2g8v4dpqSe24QD5gK4TS3",
  "key10": "3162sxDRLWEhXhHi8jhBSnY4T5q4cRSpBVmDLZhA7qHWY9N3X4C1M9YNsjKsZf9cN1kVFSHh6bWkA7NjGyT9cb4H",
  "key11": "2GcGFGWgEWbN3VyRqAW3Xy4bbhzHNuUKzK3SckmDwFSRmtTUHFae1kfLijPYaxyuHbgDRqsfKjWjj4FmetSbnXnV",
  "key12": "5YypcNDR1beBJbjKqWzWp1dBiErWnsY1LXQG6GfWyy6Bdrns5zooEiFCCSXHhwq26DUxHzA2BK8ZJKCaqqtgGp9h",
  "key13": "2QsZMFCx8pw44mMYBLEx3KFWheKBArrC9MbsSdheBxQQaMovLmep6tfXdddarGqZJMEhfcq4dYgwF7vgREDA5Nyu",
  "key14": "32WHuPxR2jQj6bA7J5SS6Zbz5JmYzSnYcrz8Agh3D5iAJS6wt2XeCd2Fmq7RQEuQRNsbd7RA8geEKiuDAPSKF4rB",
  "key15": "3D1TpWVPKdBjspmsU6RLARFeFDuHZu7b2QDbGxWqPdj1qdSyxwBgUCtgHc1keATBrkR4HC27hwNmEhpX9RRtk5wi",
  "key16": "uGxBY9p7BQWnPoEqfLWh9QPMWuTs3DoeKiJ3hNm9KynawkbBqfZGWAPopZiesWqMTCrxNeSRLywDg5vafJAwzgp",
  "key17": "4ZnR2VncL6GiWm3HDu11jTZk5j3qNHhM7nFV26g9uELVCHVcvKQKtMXUrgcdYv2hvZL83HXUy3zbq6m2U21WjD5Q",
  "key18": "5tu9EQ5F7wZRCkqbhfCYYx9187kQCjX5fvFbuRn3R5bFkCSEr5jxw3pTP4LwLNoX4Fm9cFC7n6rrfLFxD9NCrfWk",
  "key19": "4YHzBNht6fVF1ZZYWh47aUjrH4bRcv5KLeeUTurFWV6swzsbYJMpBQE7bsjAXfMGfMojkncQ4Rc7ov5qPgvtvavR",
  "key20": "59S5TmMYuZYz45n1S2JbE4eM5NWtrdR9udhXeBtPKnW9PtBqWroKGszoTUxjqkhXhqrnfCeYfYLjU61Je174SDJ6",
  "key21": "5vwxgBPAsLZjo6wohgy5DEvYVVxChzKoogbARoRgunrsNKDZmCFu3ucRt3pbkoweJmUnvpdoK87rg5UtKTK6PQMT",
  "key22": "R8FAgEF5j9MoftdeekzA5BgXqGULLgtgHEb6SheJDaEk6n1qyRTgTJdH3J24eFLwUvd2DRN8Ft1UD63ykrSqZLE",
  "key23": "4CDW912QgHrZXv7re5XqmwJRr5yjSg6p6FRHPyfEHn6mHe9TsZysfgu4MDUvu1QRc1jzcJh3tx8DyoNxQhDQ3RXM",
  "key24": "4jdoHQDfMKC43qHxC9wp6CYWkX3kftJnfM5RhZm3ou7Stgi4dGFUuDFGhZrZMn6Ho8WpvABWNCAasiXf9GT7yP5j",
  "key25": "3A7exbsXxcLac7K4cdknqLjZc7nzuNkMbA6yAxvXkWgNsFCFBtq4PfXqybqMrmfj2bAqbeqk9CLWimcyYVfn1NwA",
  "key26": "7Jas7GVKurP9SVhR8dm8TpKvMwj8nafWqgZfxt3gHNfWuhkRNy4wHL4DFqN6htPBqMtPyzKxBxswqvRfZPoLsrp",
  "key27": "344dZcXcUFZwK4HpnLPfrQaPFpdzbZXksEsGQKMFgckMAGmCpHCXmfvSuQFisUwTDoXXZRWYusyR11kU8o87k5BY",
  "key28": "3EMtSiAU2k72y1LVCvxwrfdZPY5fRuPbeeW6EWqxJqckzwKZM5JV13VMHH1mmqfPFWe8EYtk9uwxmZFdjvzJLfEB",
  "key29": "2GAiow6C2jNEPWBB2bixEtdAvEUhgAhXZTXTGHP4y6mRRHBFuA9yb2KQfD7kXMQZsgvgWFyniY1wNeSoFYLCHe5k",
  "key30": "4vfx3u2A6LWKGu7rkkYQq1kr3xUdeYur7dRd74JpQhWxoDn8KJg5ivKfj3V1oomRaCKnASXjgMCV4vQ7uZkoorEY",
  "key31": "t4iq8xH1iRtZ3ogkT1wMooLjdfBZGo2WaAxnuzTekKj6L6gYwnAdpFc4EhmukieRwM8DNb1bFZZbVdE5jC8418f",
  "key32": "28B49gZLuyxwyKsviZuqRNcTqJ6QUhizgnyT9ZSrxrTswRfCrLPoeQGch5ttYmXPuCEkFiidwQSKuqM9uVU6TiqG",
  "key33": "5XREDu1MjLHq8vopqY6ntMjhYdrUqKTqqSvrpPTnpYHpsvv89JVMt2bgGTaQxZNmR9p6GFEJZghCXG644A2vdgQp",
  "key34": "3vd7KCG6gohxndorxT9dzastiC4ipTt69pPG2MJSPhWpZXXHekNZUXjwWacDGPs8k6erz9JkLTg2L2krHjGtyzgg",
  "key35": "1jzmBuuh5zmWvyBSdJ9htKRTg8Z4od16uDQTnUx8EpKSYZvPXNJWbKzRpiuL4rKwUFvtNYcSg49q6WC7FVykUbf",
  "key36": "2L7Ygc2HK2b46k3UDn1rfDXrGRtEhZ1XtcRVkc7ADGdZAdAxAvRxw1CZsU5Rfc6Vs5eacAPRKNzQS5kNBqiKcm9m",
  "key37": "2uuFjv89kqsxJa2C2i5JfZQf8Y3PiDprmyF3S3wvmt8NNHCoezjLsz79oKeFMwptLQZto9V8z3RznmtviT9cWP9K",
  "key38": "3KepiBWjK7k9F4DUiSZ6LmEgY6JBC3aBMZEqojzs5kmkUn8bLgdcUkFLNH4v9qjPKzbneQLDsKxkCGFvQYQ8QSVD",
  "key39": "3wDTnkM4eHJFbxAgXFgQkWVHHkigPxHHx99Nki9fDBo1es4fMW86FkX35zmHtaDcTL8iUSwJnvxR4BatmV1dYLwH",
  "key40": "5F4r2KnzLTgcTPMX95upJkDbv7dwRzVrN26AqFyY22cRv6W2a3puT5mJfWbXipZwh7P97SWqGEdotkidFrtR3M7e",
  "key41": "5VwRLFpce55Zstm9feMhPCFAwc9gmM8qQwmqashEHQxDJNKcUya5spMssgHrmtzfPVeGBMh4MhqydGPg6UuLLTKm",
  "key42": "62YdGAWLCLE3WvA1Nty8EdAvVXViRN8ECnBpWTy4ygSUcz9pG4oNZK53HGgZ1QpHKZkGV78Ex6a1UR9njqToNBsP",
  "key43": "2wdLTUVDPvxn5Qy8yBeBtRfwMFBPsfSeEFANQjCKmZ5TicwK666HZtWKTBoLZHkxw7yHfkbyBDqb7AokjjBEbhyG",
  "key44": "2XjNrbP1jB9Jryc4pATNPJ6xeJRSoWHghbtPW6hPDJVQtVsPjAPCcy4tX2EWwekfgK5jph8jZ9XotrLBEMyv5DnD"
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
