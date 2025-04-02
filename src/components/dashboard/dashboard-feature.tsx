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
    "4ZtHJW6LoWVhsVdAqBtdv6uJN5n4X8BbUGZGF1T18VF23Q5mGmFhoEEaekW13BLDmeJQL9y74dZDXr5CZCHdndTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48h2ZWHUB1Ya1vh6FyuMn2AuoUDfypsaEFrscGtUsBvjPiUY4swTPrXaxM4uvMuS2P9XLo2bgSEWJ51A9bPNgTdv",
  "key1": "5fB82wchv82r4GJCVCsvcjAKLReGq5mCpTVNMNyZsUqo2hQRJRMKZmmX5DrVUQzrcRgDTifvQqQrSRVtxFnxbxq4",
  "key2": "5UK8rHegdBMD8ZFutWzQaFPJXoUaufNZXEsMyXJ3xJ6FPshngmpWQoELnNLB5Vzp52UwwtJsAXHdjhjAy65nYN8Z",
  "key3": "2qbLTgPazrXS4T9sdXfYrqDAZN1eYoL5Qpxe4YFNAkQxcpdD7tn4Jd3ejyFPsmsopxAaWwgS7X659pcoHHmUEY5g",
  "key4": "4WaTnGjg39TPQRYsxdqoxmhvBF9GWuLEc8r24Lj8x5AHs7hdPoe3hXvKuiTrc7KPx5HHMaFtWbQHzdM5mC74vXw3",
  "key5": "2fDKvro7CgHSNTfoZhMuAYFYhMtU9uomgLxpXuZUb8GsY8yUbtjb9FEGxgAxneguTS7HJiiF2FPgsrfnwFwey8rU",
  "key6": "yuNpyexnBBrzypayKu9eyJr5PKRCQdnXVSFywsrophyadWdFVfyuf8xNDEbs6TxPXbcxRpzW3fMZwas73t1zy7P",
  "key7": "4oeAubbf7Bjd5J9w3EDtQ45iCWUkN5husaQmrNdfM2T4tvXmTsPmXYcg3W7YFL231j7dAL1AJtTLRFEtZviwD5B",
  "key8": "38wqUQWarGbHX5Cc4gTGcqTLfMjVUZV2e9UujRfTxYApEhazRtsBgfzY5bUs735wQU7pmFpeJ3u42hqCMfuDMVxn",
  "key9": "5JiRCQN8zfYJYgjaKpPG8LpaA3CQNGmB9av3nBgrD5ZzHeBfJ7qUFkkTyHygkGBDSLEpLnZycjmWfdgwDCNXMU7a",
  "key10": "3QAoQd9jrQ9Nw5ZjeEuyHS3oDdGYTyvNnPt22Khro4doLHLfihnFssDkUH8uEDeKbhi5WeiP66FuGMMqgQs3DzHP",
  "key11": "2KrPWxBy12mpyU3X6943sFDFuQPU2VJfoZWiSKRtUBy1MhRjHHsKpDDYM9oqbL2hy45XoV3AXFENQ6SxzLv8A26s",
  "key12": "3GbmiRD1zg3PniCZYThCcw8WF4hRjbG2QaWXjS8f5zkUHvV5gm5FEpuYTbYFBcohQBEbkbhNPN52TFKWNEZxz1gt",
  "key13": "39Aox7X58W3JSJ8ohnBhZQ6QdSnwU1sUFJNqpfhhyZGKwX4Lgsy7cvcEyGYUGG52mAbKpJ1QJBLPhsZEp6Dus5zr",
  "key14": "58xYAZTSUXt8xsEYrWmF9KEZwP5DhXevGkHUCkWAS1whu3zTgWYbRJujfeLdevRGdGjfwNo4szWr8d4UQFFHwxWd",
  "key15": "4PZ5QgBD9rkqBP65CHtmmukc49APLtvNJkX1PgBMUPVWr78CS52btXorL9LAbfP5fbGRJHgXY46xrakCLeDES1fc",
  "key16": "5CufJF3M6q6PS8CxZJRmwDvKrnwhyebaE1azSueBFoTadyZyJ9wC8oq9qKoiYFVHk82rdmBwLPEbVqiNofuBBaPe",
  "key17": "2hXnUngoh2A8aAWvvbvTduQ2ZMVh1m1Lu7X3xx5sUgf9R4gTu9w98KGQBy7g7sHiW1NNXvUSsBjBZatJc14NZsGt",
  "key18": "3wvGBwSmkjTssaKhD6Yd7bqTqxcP7inuENpW4A8Yfbr1G7VP9s8FoNU8eoxqUUj7vjYAHz1uzv8oiaHYApva7t2b",
  "key19": "1ymFcKFtWSwJbn9Gm8FSwvmR4qUknafDDaynWA42PESHKjFdzpDEF96jz42aB2AWeWYA4VamYntDKqconhBRfKG",
  "key20": "2p6vLZBnjrKrosSs4B1SUP7rVN6AFcFg5DA5WAGajb5rDkvV7kcEpceYZXPXmTpSygm47spCDTECFvdxnw1yVHjW",
  "key21": "5SSWZEaRCnuudxgAeXKDT1XtxsCqmKfZBppVtKq3T9k5yaY1QRp75qfEmhufdWFQt5KP2YY16EnZB4TjXAkEZ5sZ",
  "key22": "3fKex69D8wx7o56aWp1BVKg5EDBe7sWopze1zt44QBx6vbZ9MbFuSbb3SspvUF25t3GyYNc6dYu69dL4pyKZtrpt",
  "key23": "3AbRDRyD9HutmMT4W6hbCYDnyY2tJ6ZCTEk8cueJwdYvSntqk9T18w7LYxabWLA9kDwC7ozv2ryGXBATPcFFWRwv",
  "key24": "2qcG4tqe9GYaEgi7jqMoRZ8j5mU8kyU7Hy29ZhSs4KYSMFGnVBuoqpdQkp1963Ykvryu9AY4yyzSWc2ifxR114Ez",
  "key25": "MdyVcft3v8EaPDUQUGNRD5roBbeRXdc7yoi1FhXe84pVHJ5KnhKuiHVT8b7PbdKmhKdaAaKios1LDWAXwGCHuN6",
  "key26": "5osahMCXNgxD6kNimbh1xx4cvmftJG47WgdqxP4rhorsxywWcfKFZiKYTAx9WdEF2ppYCDx4s4ytpWDp28V6sncw",
  "key27": "4WLDktd7NfmmMz1KpBaaMzGsaZA2Zc1WU8t6sK33d7jZWL38MhYns94skDbrpmY2K1q9NAWu54hg8sdPEDN6SR5p",
  "key28": "48NPkx4wfsAi82i7mrcNEGxHpokkRm3x2JGk8pZAt1hP3U7TZC95pmRSwt7KwhdZXKoQmt9kY5WcutDFrH978FPJ",
  "key29": "2zXmtBpaYTbmTqTe1hhKYeTXp7gx68CB9e3SdHJxT4MUMxNw2Y13wmS6A5MSTReiDvZETjJzqaVkxHxCfxieikQx",
  "key30": "64RJqhXWaSXPHSt32qne1tAhKnEp35s7VGfKqcKNjFau6WCXVTWrSjzk65ozphL2FKsGtnMo6YErsdVDBsHZg6E3",
  "key31": "ZAKM7vEfWhCAZtdozy18EJbyYXPAwMKCbzMJUpUXBk8gJyJmFRK7EAjpats9qUyyZZWqiAV3L2sqDLSwYvRj1Sd",
  "key32": "33gTit21mSK8VnDuWreHNpfp9yZAh5rkZejjy72aL26ChnWMVPvUPHwDgUvYernFAbMA9W5YnLuujBYhjSayotAA",
  "key33": "3DJ6VUqbXzfU4Uodeb6jQpfFFEKx8fEi9cEEHNYBX6ivVuVq7RJMQyAJ7ZpwbPgv28WDViJ8UbZJMvbm8ZiYCRiD",
  "key34": "5Dh7D6LcPhAYoFMKJyEyqPFXq5LRQZHt2WdmRVdf1q81HxbjNzohXC9SmPGwWMmiSLH5yFdNsegWFUTZuzfY1iM4",
  "key35": "5LQYympHgh32o2ndLa8nMhggigBENYS7Z49JFETe8mGs2bE5NZbxHCCwr5vzWAhiWpuZCASwoPeUiPLj1HrTns2w",
  "key36": "5JCE2YyTubzGqsG7Q5QxLVZxdBvkoRgyRFsDqSrAqdLJdv8yk4SLYy7HTxwuUQtoP6VXMb2kfqajfxbxEG91BSK7",
  "key37": "oSH5DBCESN15mmTW9LjNrUhAK5245ByHL38VSEB4zb9vLqFV5yBhsDmjBMT7rWAG4Hg2oYPZaboUZjzyj46MzUa",
  "key38": "577GdZxpowaYQVy5JXpw1KmxQKnuiHq8aJQJ2LVJiNHjx4xVBkn7EPCX3nFGKEc9ihscYWmRcaxQHXG3zrwKuhNm"
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
