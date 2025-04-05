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
    "3uCjcsuGKQbSKdMfdgFSPHmSN9Qzy5ZN9xgK8aW1zZQGR28VB6HgtDs6S7S7udU5urJGidXjYP7kxPCaMZ4yUSAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4NZt4MHm1owze8r6bE6foFmJivV1DsTDKtvYgSp1baxDrNU1AbyHg2CCXRBs3FLBQtYEEf6uXHo6QKawLPmHxH",
  "key1": "2EQhJsLu87UYizciJXpVLDR91EnNEU8igRUP1QWPhowRoVL9AUZWVxvhKZVJjmUFk9yQ4bQkFHQwyan8QAPJKvEG",
  "key2": "3dr9UDGAhdvy8CT6qvh5g3N1qEyPs2rt5TfKGHDVMwTiyLLjCsjGgWR6P2559Z3FQsmj7sYSs3XaUay18WzsC8DL",
  "key3": "4SmspsfvHqbkhzbKhWMKzjf7b3Q88TfAstJnU9iU8Fwp24Ci7pZcabdatVZ9YgvYRHjejba2r1UnUzgk5mEci7E1",
  "key4": "vFbAjUMVHYsuELReptk6R6y2DL6B4dwJDrgAjY5uwR7dgdQTZE5YUc3dXZgNTQXhe1Y5wqCHqdHXaxa849HBHF5",
  "key5": "3Q77ph2vnYDtFezCdG5rffBrLnyUaMGW29JCjG1i5gyZ3CApJycrHfMUJdD5nUoYwSd82rV8TTPjAnPrNF2KrSQv",
  "key6": "8f7Eqts8Z7wNs66F8UDENYTehSsJytvny7SnhznzHfF7B7P7dPhndQr4Z9J8HUu4FAvzggXQg6kurEbajRNaU66",
  "key7": "4BSiFxriW58sX1mk73y9PktZ83RMPzp6dX7R5tRdN5Rv6PkVq2HeSL7kwMgvJwCjAWT61do46gXGpqLh5q9A3V3R",
  "key8": "5sEAB3bo5iXCtrSt85jD5mDZU4SkEkdBZ67zP1gvyUaFG2foMdgJmfD8JoynBbMnsvQPYUkJvzKXT6TJBLwp9joo",
  "key9": "62hGi5d1N9qqtQLPrM4mq5DkJLwXZWnpyew9dRugq2nQo8Kh3auExgXvpbGwFiX44rMXmbEHwP3szKc6ropRKj5f",
  "key10": "4RU2YEGF574aUrkhnZFf7m7vq8LNdqCDxyvvZbaTjWgZResRUYnxPHAAj6VMsUj2xCKefeuuZFfVi32aCVbxs6mw",
  "key11": "3rWewv3RqvsazY5nYnrvfDseBMX8W6C7Gy8RJsYQYJ4uzbRn5MzFHMgEjx4duLmobDpUJXvH11qmpGDTZL9iWU6b",
  "key12": "4XRdqpfyHkFb94C9h5gHeH4HNcZopcCZPHHCBA2ksHzLV8pJWMsff5JAydrfCccnjsrwHgRqcDZwBBaaDUwoPqXA",
  "key13": "33mjkGYszeDHDT2a8X3xHXSGiN63LWb6DEnhUCYRKuiasuHR62sdzk8tcC9LRP331MvKnY7wGwsoKUPq6iMwRfhv",
  "key14": "2YfwPZvEr4TKq1UCTWjypPM3szNYpWQrqAk6kTBcniWvy3291KtmnbCAdSzXUJJsPaskTuNtvEXepTV532iAAiY8",
  "key15": "4pN59BqbPXZWWCxFfsiJ9pabFYHmEnXN6drrwaJYSj4j6NwkboqChxP8X5sca7dNMeWxQ1nHFVLBmmAfAC5YYhqE",
  "key16": "5o5sfycJA1YnEt7ztfTv9J1HJkn2nD128T7vksRkyPK5xVewXD9TBEc9s7MnsFB2fPNUGBttqzMJCYfMR98STTPb",
  "key17": "2dGbcPBpe3pL6fhF5NWtiAVZVt9XKnLKqnR2zWZdBFnzhTbAC7CboYoGtEM31DqLFvj531sBXoVoUzF6kMzApoha",
  "key18": "3vXFVmpPYwYF7MuUJ6VvEYZKYDJrMUsVU6DXkc4NhM7NCZeZUzSVyzUYjuNnyf47mvCK1sG4xeRKC9w7m8tqWAXC",
  "key19": "585gXTGXEeb4vknQwe6CJUprTjuxhzY2xeaNjkGVUEWC4QvoUDxM3Ra6VvJd6BFogV2jhgdENT75QrcQ5Q6ALjGh",
  "key20": "35J4AFxBmnPemC4Rj3Mi5XX5oPWwVb8tvvesZTCNShJdctrxj7jwPMfCgzG8yaWs2SHQGYB3KkhVzMa5wAUuCTQ",
  "key21": "P7jZbYME6XV4xspDHonUeKsgzn6om8nYWWA131dHsiaiPJerryuuprpgBF8McK6w8ZGDDFaLDGAQwTPZr5WciwF",
  "key22": "5fpCmBtc5QTcjvp9Xyqt5oDu86abMqM9rXviEcn6cQipDTXTCWBAzuob6pDPNDebqjPzQXxKrES1pDZzqNTvACTQ",
  "key23": "3vckZGLUdfwYLYBPHopHYxaZJ1TVJs7j1K8zeoaTQYnfj5eadY1g6kGn2ErJFnjtDesuUJWXeX1BFF3bGa19oW5G",
  "key24": "CnuGLra98X2sDEyYBSwtSeXohCjTr6HdavmJ8iS4w9TRAJYFEosk1iKqzAPJuQqVuhVK361nmXgoKF2X39jZerS",
  "key25": "uiTkgHZ9Qu6cfEtcHNkt5Q1mQmTfRCoBRoyKByk8F8G5jR1VMz2QrGfYBKBv5AdVeBbdQXxF9Hw8ySeTR4PC7PW",
  "key26": "5YS3zqQGSgmxxf9xDhXi6rqWaWY1Y5JLfXRnvdevDjLpvwVVKgXJy9TmvmPes6vGDx1GSCJS7iCNPtwEfbd6F5p2",
  "key27": "5rTBhupvXSdcXVW1BmEk5qeMpFVxBU7Z17EotaLFTvQHVmmq5dCmLkWyNNSLt2ENHS58Xsi5DTF4ATacc12zWcVQ",
  "key28": "27axLqkaEiHKcf6rkTfWu4ACzFt9cZbjHQrqiu79EwY61qbiNkqFEWxdV5chKDZbzgrKKVzXrhi2Nj6SmSx5CfHp",
  "key29": "67keWLJdeoUFGwbQFZkCSDy55E2Jw6Aq5nczuamb7c43ikk8fgGqZqz36a6JFeeVRtK5jbR4tEGHneMfb9VFMyy1",
  "key30": "2xxpFQgAXfGZhY271qSraUUruV1VgfwVFFTcUWENjLcjzGqRK8MXB2nA2bRrtJuQmSqZhMHYvGfKiwezx516hjbM",
  "key31": "P3E8DZyPub3P5jNGdd6Vc5Nein79Xvj7suYKJeRHDNcx2KSXXpHFp6ugKhyfV14vx4867q5QZmzD8Pbbj1UcDLs",
  "key32": "5RWmUYFWX4CKhRyzVC7QcCyUpLkKuu22fJ8N635g2FLQF2qGAKmTYa5BnDokkxqCfPmXum7RLxpNikcgkwzKzb9X",
  "key33": "sNCkshjP9GcWWoeoQNvgZYUDkPPfawr4waXmTpTg738mfdin7Y2mce479cBk4RwuiTkPnJMqbSKRz9izPCG5MJX",
  "key34": "5g7yWpaNutZ7ZEAxwdbJuX62TiUcSuAeDX2W6RemjkYA3ELFpeujfaWHxQcWQ8NxYpXeEw64A8nHCigL9iSTR6XW",
  "key35": "4FJsqQjzeVih3DfMpe9RxvZUPqY3SKmaMs7TztQL9Prn7useBQDUUSq5P7Gi1b1A6sjt2vj4Cpu6wMMsw8Uix6kW",
  "key36": "H4KoRjiwjq2pWxnh6pAHyiguc7TaQo1wpDZ5BoYcWQoJ4hL2rXAGD6uv7ybW1T2KdJwhjGfk2LY7VWrqW5WRhHB",
  "key37": "59JGr8cYasBj9ZuUqXxWHSKMhUW6SGqbLottbZMZ5G21HoQCMyTEbZ4JGAy5TnEGhoJCxVocQw5sNhLCubBjsFkm",
  "key38": "2drQE5wWmx3bfPCh1XA2mRtiCBq6LCP1QZZC5WeYbgDaUNJqbuoJ9sr5tnaLfdHY4VzHhNUy4tcR3oGVjNRxzNXE",
  "key39": "QH1ArQaA93xkFhBxpyXXsGU5npneUmpBVByoSeKZo8Q6T6PgfCwWv9dESJEVHFXKeKVKkKAfkiS1s8biA8ipyGv",
  "key40": "3Yk5LSJZmJd4g7sWZAmpKy3bXeZFqGjMY5EBjuHPvnVGN1pcx5GCpLEdARwivpqyiWeX5w35CByeAf9kkYmfkDQY",
  "key41": "5XFAZ4qzM4ecYm4UBY4tgt6AAqrr5ieSjw6CRsZWssuihBgBr9ayZVWRAoKPZsiZ2FnXgRDe9ny7jJVSpA7G36DW"
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
