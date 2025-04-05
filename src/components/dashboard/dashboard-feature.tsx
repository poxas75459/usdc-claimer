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
    "4LwuKmkbgJtHAezzEhjWaQi2aTYcKXPPQZpgw1tAeUDJa12NE4Rgb3bMf5YTQZfsGDnfgxAkC2w4T7awQzg1qMM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dkJ7FXb6d7aP8spj4HnP7AD1nM2vtUeodJsD3cCSrsjDEMzd13ECsf4SAQCbJ2Lh9savsr4Y6J8CsRASqaAQJu",
  "key1": "3UtkSMBYtj5RgsKaY1V7jpXbozCeNq71rMv8Yvx6G6xetu7tKRte746LUHTMTZWar8meEB9ty1qzXje1JYV2HcU6",
  "key2": "25A5j5Wca6JQmRoz7G6JwG976M8buG4rXb3CK8Ba75PmQbYFKv4KDeCEg8Xr9PtW67UQjW9nqcYZoS8NH2cgBjeF",
  "key3": "5yVhnDsTKNYkLaTHznomKK3DM6ypazQHh2eHxp16zbUrGuEqzeNaKBksGhCg3bewRaYnqit5soSGrbSxEE6U3FYL",
  "key4": "4yerxMAQdeZNY6vuDbWPP7CPJcyaQ88Enb77UngQBiUfBRLqzfqxMRRWqPi8HiRqbSehBjj1qPFDNUsEFYL7igV1",
  "key5": "cHEZ7CoGziZx5vLLVAG8s8Fqy5gyfHDiULuWQuWqFuk6eet1k9TqwciRTrUF7t2Ao3acLqKd2xbspRTemZmv3Yk",
  "key6": "ef85rcxCNGodzm3EfefJ3v5Q4vSesCpsLWTqSWTuRGLdU3HTgMDqawiPiAw4jFPzbBD9EQYe1XJHQrXnAeN2ZHS",
  "key7": "54WJMgU7bquwEAzJhvVWBsTQmcJq14AiT74pLhXGcTCnVqa3NjeZodnPMZcabZFNyxDy1tsTdDXY398yAd1zYSL4",
  "key8": "3tnUPTzLVt2mtMt3e4nrLxcFK9TAqRJfFpBPu9ciahHwjyNZC8HKSsmntZiazqKCr61UA1aTX27gPDdW6D8dcgSy",
  "key9": "5ALDXi3RMMv89bV9to77LpgVyLC2NdjrDWyjkQMFobLN1gyXmyw6K3nQkV4JRt1xsxDfQLmdty3afRz2DThEJyUE",
  "key10": "2GL1emGbPoHKkVZ7guEGxV2cW8Vm5LVfspcoN3H2oyxCsYj4wKWL2ADxUm6cqYoGBUX2zQmbf6iFxTMQGzsAZEZS",
  "key11": "2UzdyjQ4u6bV8qPBoHqz3yk6TmHbKiEAiTrDJeodSVhq3ZkVfDxAfTZbxknte31A2YTZabm4sCKFxFS1CJ4WuDHm",
  "key12": "5yBYTYD8opJckRH8z1wWJJrQDBLKgbLEuEYq5pC3fG7Z28nh4Rsymg5DGBsshBKdtgGZ2jFaKwnDxqvwyLy1vpZf",
  "key13": "3qgsSmpCsQfTfS8KoLMtrhSpjwmjcDzgSQ2x1MoDhYaNybHd5SbRTQZksSAJwbbckUb9znS2RbiUzGg4qMKBZvoK",
  "key14": "3BKruGfhwAuidXgQQtGeGjGZEkCfZrynS8uzCmRMd5s9Ykay7j6EtREtUSGr7VUhjrYBNPbL4igxjydc36Hh1rXc",
  "key15": "5GeqbSSzbpG2LyspburJNZ4AieaTtr3GmTL3oqSVG6JCsnBTaXKV1UZat1omzccxPGE7Uptz4HA11PrW2NMytfjj",
  "key16": "5PwUrfSjjrMt8Utww29azuzoSYngJtmfBM93z8XJBFPvWjXsU4KbKZu2KD31n3tr98zku3iKdJzs41eLRUXMVDGH",
  "key17": "3a9JnHzS2hQsQ6EJK8XPRQQwxYwGy1xnxjvT1v2BhdTQL1RGeqRk1kMpTw5DgdUCo4Wv72FAJd7EbcYZ7fVHSHjP",
  "key18": "4j3nuQVCyGc8d2e78ihm8T9sy3PmuBSJnJrUsUHXvKQPCi363WBG8eR3RpRF1dCuYKnjUPPDe5ieyDpAZH2oHYXe",
  "key19": "2ZW3St84L8xAsk48AyFagxvnpLjWL8aUWZNmdi6FqRBMfXaMT5YD1738FdvSgnFwzVPQxk9SHuoBhAq2YokdmXN7",
  "key20": "3R5EWKhHu8AJt7jqiLGKp2ZpX3i9njBJQicJFRwWDobSYTpueTpTzZzS6cx8h1AD1QH8AHxobXJMpyCwiyL8C2Hv",
  "key21": "2RuPWNyjqicZQhQ7Suvo8ZXzSxTctqvXdeYdThAxWmJTod3CmHvmTPAuHxjJXW2EJMtXWDWqrAAuhBBi43bY2fGQ",
  "key22": "378hMBBB9B9eJY1mEAGNzaNMqqRh93QfNNPnHsz9DHrpYa9N7mLhYqvVZRCPwXzUJTzVn5d3gDkJCcTKQWfcqwJM",
  "key23": "2qADB3WEzMiWk35q2nBLaXm2QxyEDqy5SdiG3E45jFTJyVWqAgNCH7kJrsXw2zaaVJDWJgDvx2PSmu2g3sNgqRJa",
  "key24": "4GMfFMoLNH5vUohwfniBZ85cBou2ircLsWji1mn1KXVEZp561aeqYBqKZF3deqqn5xHFRB1NT9b5LrdMygGMKMY3",
  "key25": "4RNvhD6RXDnMnFAgSK7ZKaDWYHhbCw2oq5MREffRCfAqBf2wY2kEAPMGvBnXYPmCCokKQSaxE8yDgBvcvFFJ8eAv",
  "key26": "2kBM4UnvsBn54YiJSGT6vQ9RrvwEkHdbg92y5JwH66aKuNe1vgVamJ3cTETuXh3KPhk5exHgt6bCztMakWRjcMkr",
  "key27": "2sk2Rzs9nXRPugfVscABGRgjipNGxNryAPLtjxwMXKgTPjHG5iaB4zuz33oyikqbnj8XtvJJkx2RJPBm2rj4pDtc",
  "key28": "5M1h3EC3hmf8625bforwmJ2u17PxUDUQvJbwbAHGesqoqWYf3KpEEBogX6GDZ85ndtiagHdQHovyQmDR1UDLkWtY",
  "key29": "49cKkY8D9dpZ32AJGy4yyuCTrsUzabMJWMKcqH4tKWV8LxQzgRiLkKc17gSndJViaaRQadXtB8iYx5JJbpjHRjoa",
  "key30": "5ShESDqXMoXUYiqmfXSFVQWZV9r7BmFaGbBSHGT7cDnVwjkUaZRintJACQdeyFSL7kEZpVU6AtQyL15KUKTC6fU6",
  "key31": "2zQFVVTr4T3qvDJj8HChPxyjCVa5VovhouuUiQkyzAtxqBRC6HGjaGwYGBgoZ9YphSYydEDS4iG1MxJLSSWB5nQu",
  "key32": "51tGz7FiAf3hRm5E9Eeu5fvGTxQKvqZnyzn7KCFGsVfQZGF2xrx8o96XFyiHVRUu81pzhg1TLfe1NpPy9TdqYtQM",
  "key33": "63uK7QWNuNk1eZ8BUw1jyiG4eARtzjngDHYeKaZKDvzHstnNztyVZMBBwA6C2Ngp4HoEZ1eRrGzSHHGCcH21WmX8",
  "key34": "D2EQA3166suNQu8JQcHMrRPLjmJMUzM6Q3yDKTecj7Z8whrtJYmufhjdMoYvw4mK4XwBkvYUWtb5mavb6PTkrcU",
  "key35": "4joSGuWZbE48abFhSh69jFXqemwqZ6iPNLGu6d8z9WucfVQWykiVDVXvDCU4gM3cLBzfqm66c2HWa4uJSjVdf1uV",
  "key36": "3wZjVemDiRHwXe1Gyd9PHGhZy9NaYdLo22cVS6RsYDvH7tErziA5QeCpRRtprDztfzfeFZHeGLHwUywaezEE7DjS",
  "key37": "3tFedRDHvF8VuFFqFZRvuPCGpCtHrzba6VWrQzatpHCY1BebgBmHuJg6gwBTMon3JvqTRbE5defe8CLx5Vz6gz1D",
  "key38": "2gFyQ4FMsPGrxgKifNbfhGqURa9wtURfLbFGTzKMkcEbKbB5P68cWeGkr6ujeUzQi1MMn8XMsZhh2p6N6hcJqfNB",
  "key39": "3XWE1ogyCv2Jopd23riHKv3d3LCM6LPTdUeVxxvYmbCp3o8EHtzKPdQMngXctdp5YS2wxfNLJstqq8VR4ZTbmGMJ",
  "key40": "52Wvx8tAFiuu7wYLFLZcYeDCWdSSWCnpyR8wYRMNiWWQLAe3A5fTRA4VU5Bh1LZtCsDGTW8ieeuS7xS8Gg44uZJj",
  "key41": "4DL3QCAjSvy4ey555ngckH5MCanUbXPFX8GTQUeU6oHg8UriX8nPretWGP7AWFcsMDRdy2kWNLgGydL9jHpyTjph",
  "key42": "2J68b61WQ894QAvrkByZejbSufBLCcjmCLWbfuKT5NyA222zeckxGCF6URn6LdryUSzVZLKthSHTxs8XtyVLqzMW",
  "key43": "5E8cFqcVrTowTvAf4C89W46Ng3wAKKiNDwSeP1p5uRjGsFTnNaKZbgs6dNuMAsakygo9AA5uFWYYb5rR17FJNk34"
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
