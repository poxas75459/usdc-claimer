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
    "23MFbJGx5GuKGywa2g4RTE1euULD98VENMv967xQEHMGhsZSvCYHHVxZuVRzYvNdm8Yoiz3ZZNxDQF96oxfJceg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26wwxqYFmeZ6iD8BjvvFxB6H5EDwGPkgg45uxEyWgPmYdfMch646wsc3jpMyQSEC7wiKw2oyZAgDcdNq94jcRhWC",
  "key1": "4Aj5kMGKeHXCez3m9Trdp6w97Rc6LWAwBb9fca7rczbxcCxGmNXokTfb9S5BrNn5fDKKZmkASN1NB22ifYyNhDRu",
  "key2": "4EAMEWnd7ugxBgGcjHoorQaFi5DxxkJwbL8VgAVU8JkuBL5STKWYxbSrW7Y98aBSDZRL9TxRTLPioEdpdKUp3BmB",
  "key3": "2vA2XpFH87YSFhGKGZjZ2Gxk3Dg6kNLMnbpFwpcvHgFUmruLVfbbDrDxVEP6Dqpb7JckAvJeGgEJhtuiGmrfd7nw",
  "key4": "WTduXiEH1bmF1JutuMfiFwoqkTbE662Cx7rjR6KnwR7knNkC9StfYMPRE6bZ67bQNKNdk3Zqz9exX7dUSaEmoWF",
  "key5": "4JJSuYZpdrnCn6CMLzNZLdSFFpajChr9MQJUKkn3BoddHbAecgQ44qPLMrmQ2FZBUion2G9UnqEMoJgquyA9fFBZ",
  "key6": "4HYxg2bHYhYEWvRqXMGiWbqqG2Hsd3cxvxq3szjE4NR71ZahsHtTA5sBmvd3MtBT7pVboPQALSukrCmNoNe86KL4",
  "key7": "5DpTB147gG361ouyDCmC9soNXvvuUHCFy7faLDLYnaq6VNwRufCkpFDnTBWHcoL5Ak1CzCLrWBn9e2EryTDpqcpq",
  "key8": "3TU21iCJGS52L3bYsRYjvC9bzaQ1VxmAYm41UdPnX3izx3F5msfnv6WBbD2cfHRZqCeLAZSyxmLqUYCTpt1eMz79",
  "key9": "3bJpysfdWGAEPjcAcrruTt38AkbdRuiBYx12TtN8WVV78MgoDrHgvGqzV8dXwW1ULwejr3KH9Bwx84Sb3yochG3r",
  "key10": "3fQ414k9jgpKTrqJMmMGoeMGzZwYuCE4edxXzgY8Bbvt1xtLRLkR1u9bRVfvdgv8L9aj4PhFe8e1Rw27JeUxnsCU",
  "key11": "4yLAwz9rBUK5PxZ7fpRHaJrVsJfDhZHcA8daS8gHPvvhH4m2xKqLCyc3vF8Nzfr4fCEjUYfvwP11ZdHeuXeGC1tW",
  "key12": "9MKTxz2DxQvVBqi3AMgZRieFTCNQa74MTpHyF6KqRbvnMsxpMmw9jPGQsSERemsZ58EnoemsWkAyqKxnDKheZ67",
  "key13": "3AQU7HJtVYxgQButrdEQqCr5xyrwfB8djASB55jhytLhSwyuV2R7uRicEYPdq8RGZZrpeSev4YFE4CYtEDxHDPia",
  "key14": "2xYV3V3vaMeaXvjP9Sz6aKbEni7UjDEyNMctUgXau4HghZzzTxLhX97Rkq6FPjBDe1HJAU7KhJoN1BLqbRrMSY6f",
  "key15": "3mxcxMPhTbj7WGgtWshbU6BUn3azLYuQPEJ8qufQZpd16dPu9dPzEfM7FgXkWR7UTpcTd9mi4ov4uM8bqHVpt8wy",
  "key16": "22Pgx9uzPRW7jdF7GCuR8z75XjtHPFCqVRcEAFxceW74MLt5Wzc4YfeeTKKLRjuwZ4BLDKms4hpQzd7nJekaVn7s",
  "key17": "55f2BTRuGYMphapN3P2eZJq5jGYdaNEtn4tLi5DbX1TxwjxqAcPCdvSNTyFyoWg8zVLyP76SL8Q6CiyGGALz4A7F",
  "key18": "3DdYhXbVbtGGyyLh4TJUj6Z8ncjugxUH2Z3W7dz4PZ5AofL56XDz1qVGCgaNoh5z8hDExebeJaaY7jA9mnQfy3Cm",
  "key19": "4spsfxLSfZ7Yv1jgNtGgwz7vgiAEQ1Be2U7RMcKcSjRSCsHJYncsfFc6Tra9ToUz1h1Pmr5q8UjD4Y2gweoyWV68",
  "key20": "xSosC86b9fFsYQyeUrEQmQQ4dbYK5txRzVXJvc9aLuJ6sGEV2YiNMyTRG6wYYt1UvdRf66t2ES3dP1LDEKcE8c5",
  "key21": "45zZjaWXRCw3uuRESHm21d8yUScRLbWvpfTfkqGRhpdLqK4oAXpDJ83Xg6kQYqKcqNRe3SVcC3cUqZF6viygARea",
  "key22": "65Nobg7ERS75BFKStwFh8jyDstFHzyzkuBBxc4uiyx4YiSxf2XnyodeS8B7nnLXhVuNrR28GQ2tYqhP2fhSuvXFL",
  "key23": "2X8q6g3GdRZX1xypxhLeLcHRafuecLPM4NPUfibZCk86omFSoaLeH7HW5K3ZQKodpwR65pGktFxWXjxjnitMtdSm",
  "key24": "2xToAgfPGKYAfgRkgJinK1nii9CGeGANkgFjcP9sUyBtzrmoDhiQpWzfpsg8jwthMswGbE9kmejMRrGePy5qt4ig",
  "key25": "3UZ3FNr7txaYc9NdaPWXLxxycRK8TmuLQGr7AMgaiXDXxtL8EQAe9socwkHgSqm28Z9bNccYQHCMrHgc5gvEgPMv",
  "key26": "4RjdDu8XULvgysHBxGt1w9xTJpwsHmBjYY2Q7eCjB2Ubvq1mYe9LCtjBeVcPyMeFMPFr9DVFnSTK9VEwYmjFpgud",
  "key27": "5cDDYYMfhPCjdxg3pHKssT77MBPdS9f2JUcegPKbV3KmCskv2H2bqDheoxvBRVLf8ZmP37Gd2v5GRr2Tt3GDowLn",
  "key28": "Lmuy1inwEUS2JMY8f7yJ35jKjUiZ1HPtgNgF7JjXbCAGdBQKEjGNHQkUgyoW3z5p2y7wVauLouD4zFP7u7L9rXD",
  "key29": "5rUMvFS53skxyqB3ZbtZSXrb2C7BLTXdkG1LsafSQ1xSubGQAVWME4P1hcSVdhMoxu2mgq4bBVAZs5nFSWf51ag6",
  "key30": "2JM4BdiiE8L1fW4HhmMJtfrDuwstv4eqntRJDHvGyoxKzV6wK32vjZyYzMmRKtogmZKUZrXMZmmUHY9fMtazsVrH",
  "key31": "MdgokVgTt3sJJKjiHBASQghN17KHuAocer9qXcAZPua3bbYwoWoSpgdAvEU2FzBegc4xyShjzaHSop7NSMQtHLw",
  "key32": "rAVjfiS6c5krSSkDyfWAexkn1Nvs2KVK5RQKRTUaEe61gUffDoTaPn4ckvve3XDPqmPuitpNW7ShkoXWEJn2kRD",
  "key33": "5tcLPnv922PPq4gqd77Ueh8KPY1UACpEeyyaBwfZS2VK4zABevXUxg94KZ1xSN34tJuaBky9cWriWvAAsw4wLtqF",
  "key34": "3iWvPmo1D5qo7qG9CLXo4RatHtWxdQRsxJkDmj2QuDTRPLXiWjVzmunKXobzPaW6JmJ3o7CpMBLbrrCekj2Sr3Jz",
  "key35": "2uWBnZnqxU6FafrDm1z5mcourtjBJy6zaVBoi2FDvGT6B6mkePzwVQuupVPvKc7ePGDSP54LNKoSs2TSyYjSSvXu",
  "key36": "3gmnZG6iVAFD9VVZbYWtQDDBuWK5P3EMvatvw6Jf3wRscRPoNmyQtBNvVggUoqiFdyBtRopxZPmWi1qFqrjPPqx2",
  "key37": "5SzffzFzmriw53XQXX9TqVSFeLFwSaP7fC4vnYTavLHY8Ysgn2wZx9t6FaBUWQGrQdg9pLHD5UMhSbjJQMs13hNR",
  "key38": "4RYZxfxJhzL44gPbSqvGXP3yJR2f65WWvywnZAK9ZV2bAC7qtTTSqoKCzTkYcavNJ9dyQVQQzpdZB6pZSXo66z8Y",
  "key39": "5gP4boWsXD2ei4X5BYjc2RHhbrXgPVKz3qMda4zgrXgatxrp1xAdPJd1MYFWXfM2WsM8ifPozak5zNqim1ctWVNm",
  "key40": "UZWKcXY3YV2L2vpfUBLPNKZXdA42gLQxcfQk6khVUcoXyWczAqympBHiDS3o58LRCf2sgVMymu7tqbAsrnRVKco",
  "key41": "5Q1gcxQdKiwh6BnZoHYnM9AT6QjhR5WGnQtrKNG2dHcJGYzZtPiG8VJxdJwWqYkWQ5HYQcf38t4N2x6sz2s1cL3t",
  "key42": "657EjdGP1FsZvr7nysmzSeY2PNNYzKtdHawGsFrzGn7yFWAtFeRYTcwbUw5AAmNdsBbfP3uzvW4YwK9rq9LNYyKE",
  "key43": "4JL5Pt75p2TuLPKUv6vuJmSWLcnVNP6CkHwYUEpCceGvJaa6mHAErYCyEqZnmjS8ekUNSkA3iJWyPCNWJoauQyio",
  "key44": "628vqVRvZFZjHGF3vRDoP1UiKXMvXHxKK1zvS9CpATubZm4HZC3KjauqdyBLZnYQZdnJvkZsVfy2R1q7Q6N7BuPE",
  "key45": "xQ7p3oyYj7qKseXHEGLBnFid3eif2PNxRRSU3nwxJY2NcLpwetGv524xT6pW1jAeebzWsHaFNngZmNcigVNpdML",
  "key46": "ASo8b7wffhri1h9HBuosHQP3xNML8Smu5vaCQyqgFhM65YtcV62q3URj5Gndnm3keqB93TLtHrxMRpweTWkeYNd",
  "key47": "4pCA8pPWooWvcMLhpPMmi13JCKFtuDe6YrDnWnBVs2iboZi7YT3BV6uurk64eMZtYm67eyEL5aiYNDb2n7UfShH8"
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
