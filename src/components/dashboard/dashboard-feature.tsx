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
    "4q2x9Ud8bHJF2dcBCSNfb212GfRZGsiEFZ3C7aBVeZULnJP9JiKw3xDA8sgWrip8gnKNU7u6D1vocDgEembSyX5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQEoQ3PQYwT29rgZi5c2dggP4LC4giBvT8iaEN8T71dBFrsv7HJJsJ98dnyP6eLQDKSc6GGfQ3cPHLJs5Ny16S8",
  "key1": "2cSHcdqT3zPhs6bVBSLKR8zB9Z55Thr2FirVC3KFg5RrxnnbpSLpurcbVTyw8E8U5CCg9jQn6p3Z2TW2f27yuV5s",
  "key2": "2uj48cF2LK9GqqJvZhKFBC1CRFFfmubc3JvF5QwJKCR8YTgwLkLs2j657VWaVMExVw1PrAhTAWnsoXi9wCZPrDab",
  "key3": "W8u56j5eL3XUyFyp7n4GUzXeFewhscNhm5acv6C7Bx2SrfhUq1yUKBSbBLBuqYrwgWHXLQjKoSS8tVAmzCxpg9Y",
  "key4": "4wDzy3Ypmg1fphMxTVWZ4C2AkBEX6vDmcD5dE53xYfiSJm1oVGwXYjwCM4qWmHXMMXuF3vwho5dyGVtGTj48wvjm",
  "key5": "5PHxi8JADiyh2JzYos5V9DupfhUxR1rPt7qeE8YECoEKeEKkJVpn78k27tFPwUhLrev64UyN6uQTmdHrZDjq4NXT",
  "key6": "3cJVcjFTnmSLGFT58Jdw9nGCuexYcvTw1YUuk1EEqmviqfdUc6VmUaG6iL3G98Ews7vd4AJGUpmvaC8GRoiCdcg7",
  "key7": "4ncBRgmMg1ZX2VHA51b91rRAcsPBNmhLtgxamhCZrEGzmVWQ6zfnbRmVrmSN96frrxWNsAFnqDdWcRCMGDohkwRA",
  "key8": "23oLBjvwhBEXXr9j8xY5aKUN4xFPqeuCwzRAXLwEfPFTYixmRsp8yWSAovo1EWeBYYBU5rspmhnNVPYhgm3HYMAF",
  "key9": "4LZyfFLLBS69dnM64i7U3zuoud3koVtoXA2BbJFsZqiseGEbg3gTYkUJHhfqsPSY8BYboWCNzZpkyiXseR2TGypS",
  "key10": "5p6PSMW2PnkYwqEzNKvjcosXdKVTQM6qBobW29WSHuQEbzYCBDp6Rijnm8itJMLZ4rWm5oBBnsTnGkQtQvfdq3zD",
  "key11": "565MJHzN8mTjNUVJNZ6ZYYefCfYaoTiKQPKSUJvAMmgG6kjLzEmsd5aiFxQGqK8C3G2sdkKpcwN3nhTMcGytJAvH",
  "key12": "5htk6iuwU7cDeMzK5BQMiEXs8fTJEofUi1gh3NqXL6nvFeA1nvnJLUakN3vBiY7YS1so3UkhUNnqVuANG3ZHsW5",
  "key13": "4CDwzgq5ZJSNJBGLfNM1iKW4MPXNvgkWU5Hgf9BkMRTJf8oAg17ss8bYG2smeu7Dk1b5D9k8mrJ2RSbBcmrr2Rbw",
  "key14": "5QrdUP3EwGYFzLgs35BR3twPjqfXujESkDfXm8zNigWpSqTsazTdT5mXT853oPGnbLbW34UTvTgTMKCusNnbSBYi",
  "key15": "5HmEVfuVdx8MpovLkFt2CSqiSmagq6npWC7ADphYa4eohHLYJxT1yPi7vHfzLYMZKrhaiB3fPwgNfpNMPaj1KzYh",
  "key16": "4V8BVVkZQZ7zntTTkhos25qV6YMM6FpCok1e2RH5bJyq6YdLwBQC3gX1PXXGW9Sy8Qy7VFDmyefsi9UdcktckZPE",
  "key17": "5dzi6b4FYrVMijjpcVa7NjbUdDcqC9edK8WZugKFcCSFZxGtNY7scwAvoCzAtcGadvjKf5nVbGLmDwhQVbqLJDFW",
  "key18": "3JiTaYm1mtY3zM8LVdFAaBuS8ATEAJF5SGAqsNyK5EucbixuVVJKmBhNZe1Akeyg4MAFf87qSG8RwsE4JjowkiT6",
  "key19": "2hSAeV2uZQQThVap39sG9cmEYqsAFieufV7CSb94cMm224xqfgZroiJ6NjpLV7SaRPPhYNYErKAnoVrq5U3Pkiop",
  "key20": "5eevB2Tevg8Z9SDfTHZ5L9ctAPT56QDyA6coicZwcRAstRcB6kyLpuBmq2jCbHf649SqhoBTxTt9VVBURhdDJ4dS",
  "key21": "4VEpfBa1Zq6pBnuvc1EBYsB3ZqgviusFzqLvs55g8M6DHdt3eitMTAkmqSWtmUiWNTRpEVgN8xYbgM2QQEfCYJez",
  "key22": "3ycVJw9rZLELR2eKaZfePAF54hHZTw6n1RD6vnu5KTtu5QUBbhj6FYyRjQhz8byEifSYfQZXACTnsXntc8KQZMzW",
  "key23": "3mAD7QA7mUEKQ7tQFgdtz9REkT4RDnyrecC327D9SxoBpUteRQJUiKthkbpJSDvxrCw4CywWvrCY2PpG9ovVWtDR",
  "key24": "3vDbT9S1oNthkiqhdTsAWfUHaUX18HqrnpJZYgoiKyNgahj5MyKwSxWtUW8hYL55AgJPJbsnj1Cs5zJrFWWsrej4",
  "key25": "2MAUmFoLDBJmGp6hZyyWZE6VwPggebzrbZwA1sY3aq26LKyVJsBA4Sy1PdQVxB1m7HsTdHQsWQzZrvdKDbj8SDkx",
  "key26": "3LpEj6yabcvKs5hx6pEPy6PGQyWWSbMUAVbsB6T8vzEC4rxdTj2jXCTS3FTqyt7LGqsQExbptBncsgkEKE5VH7Zd",
  "key27": "2yw9dLRdfUdfuw47kxgc5YMbKJgg8MfR77Dyi3YnVkg6euFYHNLa3iPTcGEhAHBz4cXrweGs4pihhuAbv6hbfnL4",
  "key28": "XDNFdNNPwx97sAoqU7tKgDcijMUEAQxeuZ83FFx8agWuXrGvPLgLKMvbppfLdXy5ocKS53Fz2xLi8mVVHMsntaR",
  "key29": "3w2YkJE7v2n3Xm2j5PauJuegMzcKqLQsqFkEctj6rp2JfQKJJSnTogC2Rfbi7uektb4hVqtZ8CnEz8mjnpTUFN9W",
  "key30": "nVN31AH76q4YR6Z8w3TPchjGb1VWAKP34Wc9BRaJVU6TAFiG5EhWfcpwxdJCLBF2y13deuNf2RKfQqmDnZe5eFd",
  "key31": "4tLAFbTzawQF4J3KPai7L6cPd2EbbWZXTEPLTZQVSc4cn7JmhGfwDwYMgGuGrx6CPJ97XAgvXXryn5B4y2gi5AsA",
  "key32": "23bvW31tTWMgnbAMaw9pqatPeEBpYpJPRNUwQNfdmXHrK1C1JJgr1Zk8LsM6xCQEzPrEKkn7Rv5byZs4ZrLt4EMb",
  "key33": "64FC6hX3whcbpw5i8FY55YC9QcBMQWQ3ddBTFV2vur4Qd2TPyzr3EAspFGard5HWhaZm8FodGEAAhCZJ1QJV99wK",
  "key34": "4pADZc2XcJjd9wzx5d4TUbrAB6sNtSiK7fTTFVVQjobhKSNjMY7C8mx5wQtHXSx8qy6Hcbn8UjwHtLEP6PHrfEJw",
  "key35": "2AJ1TYLXCPS9nQHquCdNZjFiPj8SrL9oqn1KyQLeoKQTWHTGxohKh5kY7vojrEJVWU39R7Q7rQX3wEeMSiXVJP2u"
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
