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
    "5UGkHeJTnbeNnRJBDbZsPeGCkt3uWi74JD7jk3K4p1VMehwZhQ1BtaB7Yyuz6EfhbYwZh3ahy8xmSwFytW1EU9w4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MXo3PZUPWa8yXCK26DjmWLhQgsB6MjaVQH7LeNwoA5SoM1J1K7u6mECQtMByQxNmAQeWsTm1eg4QA4mdnsWqLRY",
  "key1": "3sizjj18dS4q7S76n2fVD8rKDscJStf6D73yz2rzNAG8rVFHeBKmTmmue1Lv7QFdBkEDkrZkVqdf5vJbvY81D1qh",
  "key2": "5BDKRsbCyNVoD8au8euyoh9wCXBAhTFHXPymrZgmzGNBfbixwcYH3hJGZbRKEnFkbzcv9SCRsFiYD4xTHNy4JWQ7",
  "key3": "xJKxLebWDjA2KjHbv8S58UYzLDbC7XRjAYT7UzJ659vrhKAeyfZEALButXtKi4iN1AfbbJAfjFuMJ214Z8stvWJ",
  "key4": "3zKYJnQ2Y8X6qMRKkp4cg5seEXnGJDemPjinTjL1mFaocUpK9f2CnYuM7DF1ex6SfDWvDAAhBeCEjWwm6Ym5gV93",
  "key5": "3TNL6Y9tw5SrHQXFS5mEvPE1iPYCtS2YM1Jxz8k7CfokTxRUtjGqz9wJTdgES9RctexZApjCZAkPY69K39YNsg2s",
  "key6": "2fFUmmGjdMFQkTjKHW8bZRinmRwyY3NVMZ9Pv1UBzKKz91w1Eneybe8iFRg3zXrpZUF7FBMsiJFuWsXu1TjfTBKN",
  "key7": "suWcL9aSSZH3QqbPoJ5MZZKXytN2YJtFaFt6n98nYyChGhbQC38msaMo6kc5V8rDz9xrDRsEC5Vsi4PJmeGYs9o",
  "key8": "2QdSdeZhdPNBZtj3SK5MJGU8s2CDrwbMFkFZVQLBFZ9re4NLyWTzoDxHdUe1ug7kiWn9KdG8BMN8eKTg1Hbf9fKJ",
  "key9": "5CD7SyNQ6yZzM8jeVsTLysjT76n49BDkEHQ8DGLK2hYQ8cRMzZ15vQtx5DpS1rbK7UtsFFZrfRLaQne5A1gcDAdY",
  "key10": "ue3PVPT33D9SALzze3h8rSB1BiSH9xy7qAkKzCFmRBbXCst4hx2pRaEjxNo9nvcW83qWS3Rx1oH9up4CyB1TeXq",
  "key11": "G88bMLUrUpvC99nqRRPCha1bf58kJuJw9ajiAxxrW1ZSqrM5i7VGmhx7h2Ukf2P4AcqK5mTyFbtQuU9Jd28DYm6",
  "key12": "4dRn7WYXzvWhCEo35Sm1S6fk8SSJjuVtAJvZHZ1uUfX9BxAQNPmXNTtHJZQR636r8byikUyNjhezrytENUcyCmZg",
  "key13": "M4t7Egikp4mMjPEFdYi7BPtb3AQnbtQzT65aLkHpMVbD9ff4ZZN4NMFhKgAKYELaSA4UUTBUdw9ERzqHiGoSx5s",
  "key14": "4WCAoG5T62ZTE7AjQWAPZjkP31Hxw29dLwbse56Yqk8sDyZEecgRSs6Y22xn6KZ2f7uuXYWv2u5AeHXHSFd9o8dg",
  "key15": "2ZUT1ot2CEWcr3aR26DHGGuLy1U6WQTuYKKPsX9HiRCSYeDpcZr8PEW7mBLbtuC6YTUrF3DU5xERBgsZLbeb3zeo",
  "key16": "24noqXCWhke8BycyFVqS3S9r3vu11Kxn4VTqJ36nm3jRTRG6FzUHjXQR7MsV1xBZUW7XwmZbr72ur3JYFujmLs1Q",
  "key17": "uupEmjDubJuzXFumMAFP14v2DFFe6fLGeHCzDaEfDDQekVHKYSC1JKht86opwNNHpEZKotZeVZ5wBo4eskrySnC",
  "key18": "5oUQZAsTjFsXioUondjzWVoVttH5c4wVeeuunSC8k7qP1taEokNJcpuSEu1ksjcEGtebNyAAw7ShK3cEisyBS8Mi",
  "key19": "29sYkf87JBYkLKQJXdwzDpNmHwBUn4QmsbcgyUeDivJ3oMmCGH1Bd3N9skPTxcaMEae48j4G2sMs1S4cmzeCNXSc",
  "key20": "4NWZ3CazBzCPeURBtV9tnmV3gotR2uRnkxA1kPbBdBS4fsHPQpb3XMTc5TbjujescavcdS19VX9Ey8v6TKApUbqh",
  "key21": "5V721EAAkc5D4tyhBsyB81q6M9BQp2apjXC7F9aTp3UhoZSgN95xvH96Jy2X7mz7LNhbbhyA47AiCqhmc9L6PjpK",
  "key22": "pjbnvZ7JdXzHaSDtjXwQpswKvDJiK7L5SZYCCYkUEMkPzLMXEbgo51rg2yiSyv9k4AcFBvzcsfBoha3EUACMuLe",
  "key23": "5ozqCosp1rYDZWhoicDoCgLkQQ5JSdSKG8fNdk6jGx1uZnppDsZnzMaKn5tcBFx42cYwnPV9VaMrhi6yhvWn4gVi",
  "key24": "26x4qDjAucq5A4Cw2YXthGdhoutBFMVNLSD6hGmUPe6i49hN45xCv32TDzP9PShA8bHPBafNqram3sdreD6VhDi3",
  "key25": "3sX93K6iLbrWnMbnztUMoqBjtAjdwn2DYz7bat56BxCAegM85xpUscafWUPSsZf51XCvNQc1YvWuvkoXnogeZ2co",
  "key26": "67DDoogABBTZTFr95QL8wzxa68g81cHfvxGbRWoTQVA9NS96sbPy4N318bfGUwZT68kBjza9DE5g4ovNJut961wm",
  "key27": "5KefLiLBRLgeXf1vFrrZ5YppnRqXKUTx6Ka6ugUJ5bVmemGzukn61GDAuRrvBh8iGzNMA3iYMyQH3o1MjMvAhM2E",
  "key28": "5aRPhCQQHQSYkm3xHiGd6xtwT62zzB8FWrydRPq7jETz5CdySUj28ZmKZyPYpj4vZdSJftxhdTiCAHLSDwpvnabb",
  "key29": "23WCCQUNKBd6TBVdnCxqDCee3vWj4PuoWoh3M3KwYzeprxdwBM5YSJ9jtpTFP3VqStF8RbAj8bPJZNAUT3HH7iCo",
  "key30": "2zDQZ9wMGQnYrRKxfduCboV5ubiqeC8TgFTh6NEDgZkSi54pQBL5n5k1WRkznrEowvgKzHVhqs9drB3k5umXMDsr",
  "key31": "5G3sh8okyR2o8bHiPNwtsYeHyCkz6s4PDFQkg31nrTLzZpBcMjsJXukw25hmXHYG6AvrtBqXWA39HAmYtyy4kk56",
  "key32": "k1LkcM4KgJMp8TiLjnT7rKrsHhXYgfnAYS6BBYgK4VoCW8ubMpY8hmfuB79E7JT8A1p2dTxqK7ZqT27KGFfGuxv",
  "key33": "4eHdbH5PEKcrxW44yQKCcuGx6GTQLDS5St5zG1ZuJ44knPBtJry8AyxpmhcryaF6eqNuvwfyeDa1Re5xgcDpY4HB",
  "key34": "4zYxbXgiWSrZAeMRb99r28Xv9tv3c9oWNH6Kj5gZSyuStEM6mg6FNaW67fVN4MXYYdN678MkK3Thq6M62hU3ZMqh",
  "key35": "YrmtEn9ChBbrE1pund9Gt4rCuQb7PRvcHjg9fKwXxEi56eGXuX4w8P4oYXdDgCuMJ2yduXAGrtGYSv6gHdr8Y7m",
  "key36": "UuK5dYDgKkcfLYtbzGSVEfwzsD1mrJcMnVkpXEXa7LG9q12oLEVAp75qk7455FtF2cz9F2QLqLs3kxha2oniLXe",
  "key37": "4Z3QcP7PmrnwSLKNKGwTrUp6w7qAHp92J64izF9BGZsuRNmz83WjWwB6KL6XygEudDk5PSaaPtT9Ugi6hiBo2pip",
  "key38": "3A7XibFYjhA1hqGYjiqza1pCbmpqzYEiQQDvRRtKwFjzgckJr7KKRuh8dpF3ZM3N7gTxrFsXVshrb6Mx4NS2JsHN",
  "key39": "e7DmXFRAxCn5q9qLLP3mic5pRUQEC7wk4Y8yR2cSXRqCGiX9DWDAReMf2FEjv2yhUB9BQ9v2pthoreppe5qojRK",
  "key40": "5G2vnZWjqzmZqmAgap6Lri7NkWtNMJbZNS2PtXgYbRJB1b9cVdmqBn55EuGhexxQrLgv9fnqHxngfeJ6xsbETgiv",
  "key41": "Jp9TVUszDdCGHxizZfpEt1PeAZwiknwVn6J2wAEjVgBGR8axK1y3DJzfhDsPeXh3CYdhNUcnTLLJy2fo1PcR1eM",
  "key42": "3Kn27auSDost6Hw3qpybw4ZzJYrqme7PudLRHHFhpSnEKy1pj18yMyuSmjSsVufvi6pheTAiuqXsy8LzhFNwvoCD",
  "key43": "zL1mdX3F6Duv3eUDprfn46QZtMYJiLCEQZa3Dp24Fwf7anxndRPus52K9u4ech2PfHmctNsXSP2uSk2jYLWVtSg"
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
