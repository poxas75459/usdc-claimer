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
    "4CL9WxX1t7NRLb6NjoJEi2aJXbaEQd5mzA2EReNbQJNxtnUgZnMKcQoFjU6dzCKVJ4P9Zpox5kbAN1EjQn2aRvoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q5KGbmVvw5oEtWHeDy5Sp21NahczLycVNJgUsjgqTddETu7MtXVAHS31sJytnfVphaUNPiuaLHkk5EYXnQe82j9",
  "key1": "3V8n9V5A5Uy2SrBVhqiwoMArihh77us7U2ivQJUcXVAnxFJd2cjh9PEHLSk66M5uabpKByiwxvKAS9nTYVhsPho6",
  "key2": "RLCf4HT6SvC5u7shCAGKa5xLR6mfLjTxc316sWv7EnDAG6h8UcgG3CNS5GEptNc9yoMwSHtaXsSQ3EZTWnRc9Ai",
  "key3": "5rWQpoXKSieobiG8YUGzC8hhTcbQT8nkC7w2ptviSNmKAvVtj8LWVv4fGxFiQ98719mgDzU6q7Uh3Yw1ngs6oubA",
  "key4": "2dXQ5kLcx5KCBYpPViiSRsWck6Vc9ymdzFumV9nqNwM3CPHt7ZTP9LRCtR4j98G5KW7E3NJoJCF5tkVJSwUaRmqj",
  "key5": "2XBdyr3xWh2P7BLGjgUw6jHXrSYJ7dxdNaG3RrNQyvjZ1XXwKA1hyJysJEAW3a48nEXfpyhYyHCtsghnVjkWqRr8",
  "key6": "4Tq5E1jNAQcXf6Npu1QJDTBDgdeU7Kj4SiatYdNfa3SeG7ni8o6sZwkpa1itAX2phsXt3QuJkBgCnoTHWQWfGVXd",
  "key7": "48Ji6nB6z4iT3reiFUsAK1FQcwNjpTZSYAEhNGQNDBnruJBiMTVVdZgvTNMwUyZoP4RTRsD116xmS925SgSvzu9D",
  "key8": "5ga42ts265HU1wH2fBYvbYmPctkqQdPy8jdmRFSMBvPiazMaTj23Cxci79MGYjopJwmT3VMW6KsVYyhYk3H33Bvg",
  "key9": "Vnr49ctPP3hPkp9XxSJJbxKhBCCve5FjuedCHZtKsj8AzVsiu8hpg1SejNtbVw9Er2U7YHKdHexcY8V7k7N5zSF",
  "key10": "51PtXBoUfHkuaVz36gdEiMVbZpJfMHchdzrrL9turTwuBnb4xpPmVXvReB32xcQvaMf2bnjzbquRSET5R8YmtRVJ",
  "key11": "ufYvdsozqTcrPx6gNa51GgVKuBqYfkNCVbPsGZokKmv79t6UL42s71kXGbZNXQpzDAL7aRCuWLXD6kicSZWFmNo",
  "key12": "37P9LqtUNfa4EjF1KknAyH7pdWN25KDUPnkAzr2imswHFjfQLtxd2B9HbJwb5Z9vBZ3SxixivuP4KzCkyv7oKJnU",
  "key13": "2hst2Rz3ztZFdJyxMBEgRDvD3cvctCp1uwnPd1m2QZq7LuCcDMW13PLKyNXvGfrpEm2eRz9UUgEYEkF6B99Rkc21",
  "key14": "24QNqXSTokJ4491Z9vhaeXe843cvnJBFsn3sa5ipq58QESGZk722hhZX1GuWb8yjiYDGDgxcyo7xeXtRwSCkpA1c",
  "key15": "3rmHBpqCnzbv3ZxoJMh1KSbQsYAgGcgbHB3gBukK9U3fibiSUeXNjUXtQYf5wGNVtmM27HFduxgndf14cbkHE97C",
  "key16": "5t1hgJYKQc5aMWpNh64TyypM8i7fWu8TjAB6riYEg6Gg2erEa5qx65j33aEPEELA8jEXXvzcNGZzFB8dLyj5SXsv",
  "key17": "brbYDtPZdcPGU7uBA2us2n7zpCY6htrEqXK3ZDgQZWcKs1bY1TnikSrXqNLKmCmXRoC1fDN3V29gyFHyft51uir",
  "key18": "5aUkoPeziYixKdoFTvi4mKv72qnnu4tMTZLf1EXFHK1vJ9H5JX2GtrhfApinvkwD2LtERi7hbxbq5UA5Fs99o81Q",
  "key19": "5s41HT85528EBfcDBEwq5Udkjpo1kZbcoWqoQCTYNm1EX4Fa1kYt8darsm39JZSwWAMbZ1U2kykp6TMHEzaWUWzw",
  "key20": "2QVt2zQLMEUaANNEihAHhr5654DYdMEfdfY9yvjgSqNhgQerLb3cjSwdxfNskbebCNJHyGnYDU2xbH6s6evNc2ey",
  "key21": "3cX3pnJ522pX3JceisLB522GokN77kGZjxsVQNTMRDHkZ6uyzCaNtMqNxy1FvZjixjs8xH4mMY6yygrE6t8J8NHV",
  "key22": "R7cMxymonHYMX4d5sDpQkobwye57PQ1XwGqvKkzCziBXew9g4UDoN6s7AQpVL6KWDXCsfwrySTuoBQXPjTGDNuH",
  "key23": "3VhUdDKhP2XYPdyTi4bnEbTHwMcRqYk138ukwnsHeYPczYVYFCKja1s2FxmAsLYgrCpu2ecJ457XHYCpWGdMBAYP",
  "key24": "47QEWbsGmrqNVLfiC9cqJgKdoViTe9mS2p2SALeaMmFy9HyE7MMFXqXCouUFBw3YSmsoJZmibyNxub5VBpeGzdxq",
  "key25": "5sdApuWtYdAKvvc6k1orjQDvumv2xnjkrttCVnKMhfeUiSYXx7L9mdZso3W2SFwjazKvbG1CTrqQJdEnymLwJama",
  "key26": "3ynZJmmM9fmDFyAAdd88PVyTG3bqciFdQEP1ygtNWZNsketWhqWeN6fvAedf59kSjCyf54qzd3ToYt7yyJLxAedS",
  "key27": "4t8ynkDSVJakedb8shha7mKpyTvR2tMS5uEstKjz5w5CW4ry5LqobHNcJEggNXCSSLTJbGtPo7kWBCkdFRv4Los9",
  "key28": "F8xrPpsbRPB6MRpL4mAQdo6X5Wq8viQwgs6x6atuFZoVWoj8ZKqkJt1hnfeKmAWj4ohXTE5c3SUYaAwS3Lc5k8t",
  "key29": "K1tPXjAvUF9bM14jR5jxTovDU36PHEYaZp3gtbXpCNMRoXzjQEgRaU7Kcb9cPvokz7Kq9bjLSgjRxE5kcaxcLvX",
  "key30": "4KHk9KGMt4fATutcbTHRaoeCFdnEtRLTp8j1mN7aQmVBDXY2QVwwSu26ua5rEKie4YaaRL2JxHYjd2z5UtbnTz3t",
  "key31": "2FLA4oMr9wZqP6YrHh5Mk6W53DsNRonx8wk7YGh18WTZYW1RMhR6rXrfpq47bdYogoKHUeecBjPrc3nfMKcPU3TA",
  "key32": "28SvcMUaAh83nNP49boUAxrS7dzJMBJc4ysrjz2nNajYHUQYXRQDgnWMiXGyzcqSJNSRcQEr9r3S1r2EzxBrQyAH",
  "key33": "yuXQ5Vo3zTeZ3ag4VwAhVhJ5xi2YAhVuErMkMBVGaKiNc6tMPKQ3xbL6RqvaSTTzQmxufiz3NUsj18Cb4ieZZDa",
  "key34": "2WwLVQPWQEuwG7VSGoSbMT277V3w2JQEvCqBdBfXULs57yFcvbm1dZP3awGmodSDR1GQ6KuecqVFHQmGLL9hRmjP",
  "key35": "5q6KkWf3ABRVmgKryBfWZi4VaR18Rq6u68atTYBpEhZjJ8qxUkuz48ogePEw3h31wLfTZPLbLNp9YEGRv2xbaEQ1"
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
