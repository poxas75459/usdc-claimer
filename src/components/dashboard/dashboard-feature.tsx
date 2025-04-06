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
    "4geBgzjaEZcGUxLnDz5yZ94DEL2GTpEM3ru8rCnUwfggtkEoVjrMkb6ChsbbNLtA1PKN8QHcRfGSqAmWXZzNmDkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37kGmnMwiS7e3beyoqeYLtueQb7jLByYNNYN7xNtpxweowqzCQB2emrLMVqdHRx8KvNxeke18t5Air6BrmZwvDeo",
  "key1": "rgre96iWqMRG7DXjiX5JVSXnZn4YT9guysCPbgdGYA1kM2G2stuRrQYmMEFD7oqpxe2uzTB7eScwNjUwj8BEekw",
  "key2": "4Z4Zh2uv9VGEqzRfnQNPqGrkwKhMjGjGbJnVDCQwwEheMxNAPLs4ULtpTPvtEtVkeSzXsUA3i5xDzxv6hf16a9N5",
  "key3": "23oo4oeByx9M4My9h1UquPFHCgGGrGqcqKRkjHCUeJYojZRp7NAZoW7i8phjPM3Wrw6M3HeehiL5WYC5gH92cxAE",
  "key4": "4piarg9EPDXqpc6dk4HLPGPxFb7haL2H1LeDYTMEdkHtRuN3WEyG8vrL4n1eohqRRGUH5Tx7kDQeN3hp1NYtZEvw",
  "key5": "5KsBc8PhjpPRF1qZMzh6gGPhAkXWXaEpk2bT4VScqxLG8HGhhooD8x7RUEuoyFhdCNn8Z19iQuweQP1ryG7HwA2b",
  "key6": "3nQFBkVfcD7h86FCazF4W1JG7pHR1Zkh9FsStEFft1qE2ENKPy2PMqw6SJ6tk6bUqTaVvuocCL2VuRiZtCGL9gRE",
  "key7": "55KySxVijbFY4sjkKneWz7a2a8YFZ7YrhbDtyWDdNoftoLPk6AipdveYf8XDP6p9YwSFifTa3BzrjUyPoLcsS6JK",
  "key8": "59WuvnCk5iCKsFDQPJhkvJtwCTnVvbWKUZmiq4E18gZ4tUHnfx6DMaGQzcNrUKteeM4SQMMtriuTLJKabbK6MZDW",
  "key9": "3SK8m13cpDJfXC75YJqFyGmnYfFwHmshjTZ5y2nbe4z7SfTm5VviWYTw23wP4EQmeYDgM9ExgXuAb3hT9SeqAghy",
  "key10": "44cudiKqkdAGSRXkuPMVrrxMLEXt1zrQf9WFq4dYQub1a7VbApWpGWnCqSSo6bBUChvxQh1dKRCY3nnhwRSN9jm2",
  "key11": "58uJtYTWZTcVBF9d9z1oS3k8zVq3qErEwwRgPRKew5CWBxvaT2ReFEcUYzJPqRRLXEWmeqgkyMkXFBPYPGCTYJjT",
  "key12": "39s2uMi5msvK2qXUtdw98vmtGr43BXeL9UqDC6yYHmmNWjxjDkqobkyAwskewc6wyxSSo7PXcdjswSbN8evx8ret",
  "key13": "ihLHw9yofibP9MCrvhA32kJtEtFvUBrkJPYtCFFTE555Bxj7whuuhWsSBTsporG6B72wuSnvFsJDwhWfL5niFQ8",
  "key14": "2aMmCTcUAy2sn4pUC5NJUo1AevinwusjHvLDgGYk8C9D13f9i18Cs4PpJdoiM7v3XArqgVv2sDXgdDaNe46P4VWi",
  "key15": "47634vbiycE4GpP9dLroXX1XCAZ5cXw8QBbMUD3y6KvzRjZzD8XuHFrcQCLRt4SVn9f4R6PNsg1UriZffsb8kKUK",
  "key16": "3tqweC5XLyEjPi2bror1x5hhogJ8kCA8z3o1rPVbs3CBRkuK8UYoWsjuR77ia3rVAw4cnd9D8Ea4UsYM5xg7PzNw",
  "key17": "aWmUkyhQY87Akm193PECbwoecBfuZGAHbx9CjSGtJ7PnzDr3xFPtTY12G2kxCC9VdujBNTyNDgv7SVesiywEpET",
  "key18": "N72BK7DDeZr94SSDdmaqQParYUnwTuxtMf69yEtJrUvRUGKar64HWaXxju7yfMyDqRkQp6UzHdRRoiae8NYfseb",
  "key19": "2YoMLVJhjEauwgZaCWzVDKfpJK1cQ1yJXN2xW1KWRfqevPSezbZjrpB5GRWfxVu1TKANkfg79XXFLsy6ZpfnHAZe",
  "key20": "5edLEKcCMatLPfDWjxXXXXLn3RLdwAfTXkuK6cJCdKWnrTAZwYnV4DCXQrdjB36eG6CHskYwfWfojp7Ar1jzqsvn",
  "key21": "5kwiYGUHzaYJ7niKbMQ2i1jgjpGAGk4DRHzE2cnZ1EeLrapESnpYFJZZjKNgcvRoUsvAf3Y2UfxHnhX4iyDwaNJ2",
  "key22": "5b12EUL1n6dqQUSCrqn4Zs8DTSxtFcPjLQ3vJBypHMcgtufeNgdpDQWAUFwvF9t18caNJbTWvvNbFPQqfroyyjYV",
  "key23": "4v3MiF4dD5SCMSGyxrZKt58torBycUc931tE32SCT6vyMJ3HCkauKiet7vHju2bjBR2my5nAYEnCHMbYtp5iWa1k",
  "key24": "25E3j3WjaQzEh9h9FT7GsQNWX1VCyap3H2iKVzXiG7mhNq91eSktM7iCx4VMoYGDKP4TrbU7pzRqWATxNCSx6fny",
  "key25": "3nxaKbDqdZgd1VpUsLzxSRbUPHWNNFZ9nvUuGiPsaxkfA2Rf4zgNs8yVeBhLSQdHgz1kFoKg42owrbRwdXdnYTqQ",
  "key26": "2dt7MaJiS8AeCyLhYtWUpzrZsgaWbMBfyCSnAghWejotp4nrTBtL4fmBbgsFHptNEnkAzT6M8dzCo7xafYWrFauA",
  "key27": "65y7T8T7Qo4nPvPvcGiFLa3ywuuMVa4vTs5ZGSf8bka8gYEGWWg5TsegMHKX9aakwNF8BEPo84PQdZZvWfxMtsPj",
  "key28": "52uDPLiytY4GeEx9UNygCN4ntsDFWXYXhewooq2en683ShrkC8dkNPZNaRSG1MqbnthGduCppfyDPbPxU5ZHTD5J",
  "key29": "2ubLsfLoj8YTEooQDb9KV1cnQSdthsLad32rr99T1kYf5SxHxUp3QdNtewhuHiKXJ3x3FCFxbDEuctu7p8QuArqu",
  "key30": "5WRVQVkbFERaCpTvr17cq4frwE8JxGhjPtwyi2gKHFaNQR8BM9fgRdx4FgYyhHXi9fT27edsh7H4hCF7powMq1sN",
  "key31": "4bg7XjosTkdhMJkBuC9UibSZjv5nM1eth7e47jRWrhHovi3mVCca6xUR1eH5iQekp433rpRexb4WfdLY8gnxePxx",
  "key32": "2sQWkut5ZYG7GgDFSWwALXFhYGygteUw4wnNszf8Yy3pfMP4pmM7a9ZfsqB6eo9SY63yD2ycPibQ6zX6SNtVxg4V",
  "key33": "Zj1Txh9KPQNAwYQwJ31bsZB5PQ5jvpccgC3kqhXr2DLtHDhsqpgewVw9caE6nXFsugyCjTcDb2GbxkgLV4sLhmL",
  "key34": "8HMmFYKcaTqtVfwqn2Pn2MF5yhuPbQqU3R9f8yaz89LyM3Rp2uky7zhmtDCLK89TWBmjRpcDBuQQBRiwVTRZBNB",
  "key35": "4Go6UHPEAWy77JtDNg7iRUeZx1nYPg4qHr2yMni2bZR1BPfBsB6eEnjKv6sq5aAtaz3Rr1Zom7TStkmxgfSbKs9q",
  "key36": "2ERq4gHCYHVpxdfAAc37D7tVARBV4rrqeCCC84mJ8Q6JpvksTHsr2VMKR8vsEAmRZNyTdAMfZEAZsRJafKhmjQGF",
  "key37": "3QLkRhwnwMTr1f7NXAg7T2EMTDGJQadjqNuABE7A85xTeyeB22WDP5cE1rdUXWSBs3vmP3ncLBVf5uJ5mMXbZrgA",
  "key38": "5okk5cmRdxc8YvDsX8zGUH9AxKbkVrvJJq1fsqGeEQ7imLenb6Dj1q2iXEsF2eBw4D3LV9DreivLxA6m37ERMi4H"
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
