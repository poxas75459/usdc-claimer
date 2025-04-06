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
    "HuzGgm1KBvDovZoVMg4J2yYw8kMEVWpiZqATiCEewNgNDeEkssJ18ELmxaJLERqsvoyAHvYwDdKnxbMriJEP17P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LqmSxQ7K4dVV26gXmoMRuevYzkhKcDuX2c2Y1meFqhHnu8rYosJMwfe5RbirFdJpeRmQnuCNSir3iZwBbz5cgCg",
  "key1": "2KvbTF8PMrFnG3XZ7CYRMgAgffNLup9LyCafMgahvz9giSEq95bD3KezXufeYLM5wPFPXbkoiNhfNLzmYG4rVqPj",
  "key2": "287xGqDTHz8hf4MopYmqXKCWg6kpWw8eMRe14ce6GWJnpsKtf1BJqkPyqdD7EJbZTuqb2QUtDVyu7APaoZNQ81hR",
  "key3": "2CWC1BALXqVANEobo91LMV85N1QfsAuspa1Fwr6q3A2sR84Z9ymHrCywkgGgJ1xwVPbPJKrn12JLdwRNAVNJxbhQ",
  "key4": "3JcFdc6imqGJXLbWwA9DQcD5KxgyzP4cyBjzLhJtQHBQePDDZZb19Z46J7Vw9cX64S6scZb9Mhu4ApHZKWahMneQ",
  "key5": "Cm5XnAgLFvxMA77F736zk6FGRPBdjNAddc3x7b392SbiNWYPnAUi8bw81srSGx3FEYGdZwHU3cgMH8NjwwxR7Kb",
  "key6": "65KqhAwWdaZcsBgBw8A8L8CAZGopSAHqaJaRzftX5ZzYjgKD1Eu7aG6AMRYwSAnx6nffajHv97VAwEuDSUBGhXYt",
  "key7": "2cr6CgxwWHEfMoUsbezq5niyEQLiRTrEVCZGzJUkzatx3epueYSyWrVqrRgQbivYHKoqnirnv17orV53BmSq2sQT",
  "key8": "dm2GVzM7o2KgUCn3CZMwWe9PSqTxwvVadkcMZYMNMUV2YRdw8QrnhGY8U4CKXnE3ABC5FMw2KEt2egbA6eP2vxW",
  "key9": "4tzu4vLCg3PmSTPjwymRdKfN7Tcx13pinUdVMKddTmbEJqU9rQUmQrMnqniWXDHr7bAU9dvCTMSyu51LcDhqokUq",
  "key10": "dz6GLZVRUdAcEBT7ruwFisuUPXsntz9x8T97fmAWdA7NhvdCCFD1r2veEcnos6MTUzwBa1F9h4Ys4GxaFEFdjDM",
  "key11": "2s2vdVgSrSoHdDcMAJCLuT2VvoWhsxF7JKP2TvqjhrKpxNgPNyFMXNaLLRPnKT7uYmmSZqJxzHaaPVbBnMokjTyD",
  "key12": "tsxNqtLAPkK95Ne2ZRebBFdAvabnrEuTAKQuCjWn1gWbR6Kj5mLAqcp4TC9fgcnh1r8EU16U1d1h5PjNGqZiMAQ",
  "key13": "4sispWtqvffBfUyTvbXJw82ompKSzAgrbqNjyxeRcpY6M7SgKxVez3X7QKCk1knSZYP7zkMGdz9bM27XWvgmDmks",
  "key14": "2C5w9L1oaJoJgQLSQMNy6VDdaf4BSzi97GqznXA6kT3GbhveQn3dWb5ZVzzAw5Ptty2Q1joPQdVtinhmc8aGXWmL",
  "key15": "jy5CsAXWtvNKo7FVFoKY9FdBxi6DAyScps7bzXDg4Ghfg2GRNDjmhMsTfH6U8HSp89KKQGiHGpsQM7SmnhV9Sq9",
  "key16": "4HqsjUMBEgCwKEvawhS1mG8NzTdt6UQKHKihFWgwbpzhjQUny6A9nqwbzLeY9nbEXYLdZ2bRcyz2pXRBHb7yjBkd",
  "key17": "3gSYqbQ9b93GypkHRDCrnCVoPrefVZGasRf77EJphXaELoKKZBwK96YDDyZt1xHDk5Z4UNrMbnkVSCbUpfgBLK2H",
  "key18": "geSoBNhVq47AsnhtscPERF1C8N9dTud3exukLSwZAbEKA4wMr1YrB6n3xFL368Qmzp8sgAefT47V85LSYb3A5U6",
  "key19": "2FzBVj5wiG5LqgocM92ypsRVvs436KkjiPbipigUasFtvoqzDyct1uCHjrb5ti7qe2tw7tzmC5bJ1vdn1z9fH7wE",
  "key20": "63iK8P1tVhTggmVn6u64BJ38M62yqF8afVcqu1Zwx6obAiBKpV7vy8LxNgfYbwXTanaT1f37cfWp3cZd3iRuvM61",
  "key21": "zMLZkdvM7r9GzdXNU5yztdkzvUsy56g62HieqK5uTEjCFZttEGRSDd7MTeBvL1uHkmYDCJXUJsK2zTAvnRFWM3h",
  "key22": "5hTNoXUQJc4TP8FzHyEpHBqvSDrLqAVFTRXxqMzryM8VphigNcbftUJVid1WNEK4VyujrdevNcDc1Uyk5hF16C6t",
  "key23": "4bEetFfeHrRh7UqfUEHvEPxctSyULkuMcPQr2zKSgnez3ow5NcjfsZEiJmWnWoYV2bY8R19QDCHvwiFUwTpKZx3m",
  "key24": "3Yug3fh1kNwnBTWp6RLo5Uy2NCGBCcqofmbBmxKgEdS9KBQCMUjkG7KLM1YsFRpMkrq4yP6zDHj8cGHBg7maDYdP",
  "key25": "3Zywj9vbn25xW5uas1JXNFimfWtCHRi9wzRUdWJk6WsLEUdyoi3KDLZzYUXig9aNtBgzZaegDCYMwSB7gFCNirob",
  "key26": "4EcnuSKNAA22bm63Ksev2TNfCMHGUSNGNLQyU9SYRttbuaPZs9ZX1AFJK4TYXGvLwp1bd2W98NWKRQX8VShFFRXU",
  "key27": "2S4cuboHHd5V4YbqggaNcmBaEak5N19p5iHjLm5qcmCNE3D4G7NDixh1q6Q431waxqBhdtSDpLFKVFevSVojyVzx",
  "key28": "5NwvCfdxgGwos2LUhegvhXSMnMEDFYQqvasRqP7W2TqtE9VCLZbdoMkYhpHdiWWJFjwjpXprgECNqKgf4Biv7Rb7",
  "key29": "KvCeKqcAQ4oePKfJdPowNoo2tNYcGQfL5LmdVLWEmuJoGgtWRpCxAu6s9u4CnH3pPvo1kCyk6rFDQ1QkNY7HuHL",
  "key30": "k1H7vfkqKwikz9frg2YUWbKXFjRRWkZgXcwmWER1dtRv12JqZYfTZ7SVDyhseqPSZGd1cDHpYDGDBbJKuhNdK2f",
  "key31": "3CvByPXES3y8YFnfK8iDEHZXeNJqnwBb6sgTETYXzoU5ojEEHuJb2M5cjrY8Bp5qev7vWjNcZwHEU6ES3S3LzSND",
  "key32": "fQhAzJSASDj2sNSYUdoLYh3LDpXqH948py4At17GsxkKvgh5XxALhZjPGwqdY6nLgrKwocquqZBpWAFUsqisW9i",
  "key33": "5FjpGFvdQgygA3CEoN3S1u4ubYxS3bLEK8FA36ZFkjHe3hZvSsBMZ7joW9nn2EqkJq6E7Jiqo4ZbehmnTkKahGas",
  "key34": "2QsqNpHFdmKQHfAZXj4KJAyP93qaFjP77vPGGX5bEppUz9wiyknGwzdB8XtyUK3ZBBZgQs9TfpGcCwtnB8roRFvV",
  "key35": "xtirPNVNJyp5Q6GveHvX68uWzPkyP8BYpKVCGi7WcoK9rVEApQCAmcPR9zKR7UDpbeg6jByxFvLKnN6LYwDohvV",
  "key36": "5GhTW18Z8SKyZjVF1QwThHoevjfnnpHshU8myv4frjm2YDqDw7rYbhamQgaqNn3TMK5iP9uCv2PrWvbNzUiZnLVJ"
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
