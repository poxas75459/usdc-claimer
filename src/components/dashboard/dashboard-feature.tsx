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
    "3a76CgE4DBK4L7XQv4Hf2xDVN9mtCaVMM5MmrYR9xT6TWgo11K5Fma4cGpXUovRZ59reJg8g5XRHJynmc1WnwfMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NX6G1R48kUrBMUQs2pfnw7DRJJUmmATRYun5ELR7j4NJe189aqKrAk7Cgi6wmFQ5Z4Y8ZExnMhTeK23JedQs14z",
  "key1": "3ZrNw1zNXfDNvgM1vmxWYL6RHWvjAYsQARjgFcGFb1WsGChkFeAZhhCgJfGw3G2EaosB9pJMcgZ91KQ3BhGSRQTm",
  "key2": "4oLqo1FB4SqzFSabhZiuDG3iv54pBdixxiGhwNsuFGgGXueijmXFYYHdwRbdSVBYdU1jpddw8TMF3wFcAx7ukqFK",
  "key3": "krPe9jmp9ohD61hVu1ZRbj4gxkwCFAaMFi4yqtw85K1xHKVy6ccnMSKpuKjndrxMdwH58iwxUZNgzsWdS4VwMmN",
  "key4": "3xgqLEzwL7Jmn4XpFWKRpLKb6T6Hcw6ZE2E4ZeGoVautkuNrcokrwv8Xi8JGTyPLXSxRYcuKfTkbPoVHEiyWsRvs",
  "key5": "3LQ2BeKXBgcnRNQ42JMXU5A6THAfmbZ8FhK15KpdUa72ZNeiWWMbZX2cPdwqAfwfgsY59Rdex4kKCBmtxq67rSvA",
  "key6": "5ekXP8GLozvkDidpwJKYyKkckhjUV7C4XgUdLsP8NQqMXb8SPAwKzzdue9BVzxkR77XPL6Hmo46tgSnCP83vbiem",
  "key7": "2oJutDtXJRr6TqCkW9av7azez8bKX8FypGcpvDiJnMGQMNN3XSVEKYXAXp6vGc1a6jmJwTqdM9Sf8oiZGdLxXQqE",
  "key8": "eXHbeQiu69bLVdXEgW7UnCtYNqoWX9ebjMTgayVPighAYfyUW6S9uthak7qfFUko4pCP2DZ4Z2GyRcSofU5bp4r",
  "key9": "4yW4xGNLutEhKBbQDk3aa9b1QZkGq6WqxS662CihkRbxu295W5LwQsQqhA87HWWBhGaxnzSkRmR7Kxd8kmxZQQAu",
  "key10": "642brd4QJF16F84frpUYhHXDcgYLYdwcXn2tPiiibd58ffvbhtuKpK1Wuiesi5zNZ7q3NbvYXPdncFgaazGH6Lc8",
  "key11": "2GsAtWAiMiVufKDuge3DAsoER8m3w7vWefgUBMXP8yRxK2L2BXPfXnH2MXeA5dZjuFkmBAcLp77xMMMHQ3JvPyCe",
  "key12": "2YVzR9bTCxQ7DsCmVDHZBba1Jbm9DMUUiuZV7GG6VK689KSZ1Vcm6WEdRpWg2ZJgfbsbs8DM75gGLMQiCXzPgfuc",
  "key13": "N8LVCFz4qeFWc37NefvnHYwUQ6srav7dbvS4sY4FqjfVDkK4iGrPnzCgpNGDQAmEoHTiPqNW4NWd9WzNy5368g6",
  "key14": "t7SNT8QAaiHgoDZDV1Xu2HswMoxbNenJjCBRifVf6kRK1BoypumB3a4sHWcWH3N2FcwDEbWeNkrqqrpoeJKgEgk",
  "key15": "4vwoELW4pwx8LufxwQ71pmhmwVaP7mj3dHfQoe7bGf1DAcmKAeLd3BoPXTmUgc1CuXDEf2zeyjk9PKg5q5AvPmM1",
  "key16": "4o7L7JvQhodk4jAB7TbnGsSKe7RWDT4ZHVUoJs9NxgR2fdAh4ubpGgWXBgUmf6SH4Yr6B7kbPSgAcJhGK3u9yHiA",
  "key17": "VFc3yBpMNf3S2em2sybvwNnmjSMBdstLAac3zB1K31tHsAByoJV6zygsjJ7SqwnRcVfYvovR5mPvLQvVges1dxg",
  "key18": "2Kxpv5uFj5BnpuHKMySGS8uh9nvgPCgXz8gwb4zCcnxWSFPefEJ2BtgkGafwhuooG3NBMv654DVffViFd9Gjz9mq",
  "key19": "5sSmy22LnF6vExVHop5PxxLYK1eWbfp1VA33KRMt4cV4vjSiw8YK7cAGLQJzGsUWafT4sxYrbXKZQAnCV6sCVVGp",
  "key20": "L3xUb36cFiSSrBqVSspynuXB5ZmbXyiPyKYRgvRsumqWX9FRXKPtKHX5Fkcfk2DtE1wKnLovWyrryJDMoY3SBK7",
  "key21": "2HAMR2EMMLo3Rf3nTezWscVJ8z3HSaAuBzt56TuF2EKQtQSY5XxPQ42GyyrpT86Jh14PRT7E5vWnkXdMgdfUapqg",
  "key22": "3eZ6SEcnuc1ijBPuTLzVHGHASBjiuy45D7XFhduxaJ4X9fAFtaASu7MN1xJ8h828oALq5gHtDfcPZSnTR2d2kuwy",
  "key23": "4tRYRr3SPX5dGjwd3EAkdkeUnXYUNUM2BQJEZv8bJ6BZ3RTRypMFY83Bjz51dCr34T5YT4iocEoGnkFQiVY2paA9",
  "key24": "3BjkuQYiCR4x93jV6cuFGccXJaCkazT4qk4zVfonhi27Ye3a4gqSo9zA5VtKDejyMdXJQ6KCGENU795wqnhRRxNJ",
  "key25": "3zn7Cg87nt9EKgnwYsNwbATgMiDKpuujswixfCrSEFh2EknYSRL4KvPWSYpDaZMPa7f9pYaVASt3QvKbtRndBhxC",
  "key26": "f6Nxqc5HvzrCyyHGK2CMdgLihonU1WJkdimiKTvrxZrmga3KoAt7dsEKP81ZuqbJvZ1ZKCZyCaitZRDDVMnCMxP",
  "key27": "5Xboc5jUaFoFHjqCPqB2oFTVUjkQLm87U8zxqUHtczKiMZo8bQ65ZzwBwLcwhekXWN8ueXAicKkHVL7pyVqUYt24",
  "key28": "23KgxiS9ia62L2Hmnk1sy5jueEC7k3V2uETNQyX4wE6xv39Kj9z1GhqmhFDRuSHNiD91tfNPKURm59mrjvtwe2YF",
  "key29": "TnEvQWkwkMnriUmDtbr4V2R2XXxgVesaLKTUuefrGvTddt428qNLf7YgEDhvjSD36XtRS4BmasaQA5vBQ9A7P9f",
  "key30": "4n8oS8eXAbGmHhNo7GxrLTfCQ2Ruy4oZAvex4jCku5GWDQeHCoDaJc7xhoP3kpeJ1HoBK9462RzJ7Z64GscCTspb",
  "key31": "4guYA5A7uDAxzd9w2WD2LS7TtQWQBVNK4RKyPDdndJcPxnbHqhJpovoYYxzVuTwBqenhFZmR6S1RLBSvigbFbs5h",
  "key32": "5cNba1zWwE8ZTm28e8brFKaCAYimt7LiYtLdo667TePwqdDuzkiz4qzXyXz9HQtJBvP1VALR1r1ArFxoEV5HKWXM",
  "key33": "2nMH73AYfHZPJNzRbUcTSAXNFhxQ6yjbT7NC9P6dPRgD3UWFKZhtcbsoANuntRjZRQ9nGERjghEzvnB1w5woNcn6",
  "key34": "39CyBC6RjR7FWqGB91t1z8gZGwr6HbyzHS2yZ1fTMaX94GEUXxRmmLWWWp1WytLq5jdw3pXxLP4ZMn3Sx8xy9mVj",
  "key35": "3cTeYNrxqzxcAMXkDWAv2itiYJY63RyseQes4mQYTf4Xx9JQXivhVTo3ufaofbsSaA3RBcFRhUG5ahiBLskHcosD",
  "key36": "ZN92S9gwcvYzrbfnJHetLJVPYQxVZ6fJDDb6MkE8mcsrkNco4soFJnCwMkMhsUYLNgnpLWMXr5emHh1GQXYZvV6",
  "key37": "3TJoq1iJG9RFWmDy6GoZL9cHXgJaeYoeW2HVZf1BGHT8gxKf13SNGHWCZaKVXocdEbmACwYTddSVKmzwXksPRehT",
  "key38": "2qRZTBsVPQBJnF4E3RpeKQ9zm12BEScGzPLKTwjwSdHr2aUNipgx4fUFox4G8uBZksMJyKi5He8qsA8CKTT1gxFN",
  "key39": "2j2Rif9HTzTUEYAY7gREWmcuGCTe2FoyidkAWa1M7NHur8SXAnvUTPw7gHtTZCiTLLpU9xkbtmqciuXq2YjAS5KB",
  "key40": "5bYdLvH7L2GeGs82Lm8BYKmAEsAi6qReJNRqRMexEN5QT3MSUGXBe4Vx5cDvwyP3Pxc54EFLgqJ1MjNpfa7THpxe",
  "key41": "E1nGQdszR9Ds2qgBKUxB32xMGoMZ5b5TifxzGX45eqtzWYXJrHix5NvuAXgfUFiMpX3FtUPWL1qDsUYXeKfUyUy",
  "key42": "3JT7eThubwphor7dDfHtzuxKXNrDQPfw6zpifrXNqBge4KjHURsHHgGiXA5EGh8nsXTMderr1sDaUJJHQxv6eN5V",
  "key43": "2VuQ3WfdvtpC64WRbzWRW8MhCVs9dQtSPQW76QGHhyh4McCLrgaWDjmv9QKf8aPtu7XtioAGrdXfDkQjWjC5pe5R",
  "key44": "4XRiwL75deYaLUk8L44PAftHrqzK6vdzRACPLDha4WkT6RJJsRRSMMm4YfDYTWfGTZyWErhZHS9phJ6ctxnYjiLf",
  "key45": "4PGPwRWSppqrDjzGqpPkUjRRLE3p7uhkVBhuizLWBjkemkeR8NQqxR5DmsH4UxWxmab8Wc5tyndsrP8Tn4EKrHeq"
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
