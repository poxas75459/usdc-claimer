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
    "3PZrY5eK3h5HpMq7bPopj4jPjNrkonF4Re5jWf8FG1xstwfPE8kZK7VNA1X2thHt4UH2dv4PCxoKSMJfbKU1PC9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtquWKgsmz8ZwXsgem7Lmo14GCfwUTFdMp39qmbfwGpS2MCroufytdTEGNLXB1UqtEKeLp9Xf57KQdJXmmUZYZu",
  "key1": "3ch2y9mwv8zztQwrRBoQTnAZ1kTbm6ToFnRTGkEioX3wqr4h3nWoe2GR9Yiq69aWxpjHJ1EjUNuD93JeCdZia6g3",
  "key2": "3AKxuD1G6crYA5ijkZjqxHEUvyg5e9M7CgCXoXGtduP4BK1Xhsr6ePCtHd7WtdPz9zgm4L1R1dvQstuFt94Vbacz",
  "key3": "h6rg2ct3YMXTQediejF6iVSUVWLEqPcLS24y4XcYxQeSYNfbaEmPqsDUFU5e6sgF8zBz1PnTQJoefhwqRmwixtB",
  "key4": "2owHX2WsDCQRtcBR47ncJcRzCP4yuXefPpxVTKvRH3pzDwQTcHP8YgKm9UA1ianY4Uw3YJPEsGUZZAmnwK3X3rH2",
  "key5": "5WAhPKyVAQCSrrGQJbpGZQrV3YLbDmUwq95VDyEsnQXUUc34CWVppDiXsfGUKuCcJixCYHUz2fCgwMeVQqV1M7a9",
  "key6": "5gMqEEEBvHxDLLuNGnkayW1NhHXsHnvJ4JrsyKYtq7uTmPWDCScg4H7CCjBLKMoTzMs357WdRvnnC1Z1Yx4AdmDW",
  "key7": "vfit6Nh7kf1SuAkomHHbrerRBANdwJ1KX2yExDAzuQmJa8R5jAoVPuww2cscygcJJWeMGD7UT5iLniygbJpXkEk",
  "key8": "m86BxRSEb8knm1JGvzZGRxsapNCWEZRgKC8qizpLEjsjmoGwzeakfUzqFpPRHUCpqh2neuKxXm8JYzZuBMxLivv",
  "key9": "3kDXQd9s62rcXnraD1bHZzZTXkvTEBcrf33JhpsE7ytfCUUzy97RHf21VHDHyaEn9bx1idq7wES8sveoUMRYARHt",
  "key10": "2zZZZU7b6WkGuFPvJnQCD1BzSvEogd7id1jA4njMhx9BPAboCnntW53MppyN2vqvAKKxmzwWyJNFApBZfsVHXe6q",
  "key11": "3pBwB3DMYusEhXjYexHhc72iU8LP9zaZHrJyGFs45X7emRf9vqdF195PszJEWd75q5VaWs4v4GQQBvFiu1wcBnFs",
  "key12": "5HDwjYys5TRcXZaNnQqPDLN8MJHuBwvgf8ftHFH6EKfYFsSMKaNUkYiWP6K1yur13MpZMiXdw24g7WatBFQVknGw",
  "key13": "656wH3s2vYVdepUA9MNYQQnAqqPYnarvFho9o8rtPiniMMJS8EKzZcjVw8qr1okRE1cXQSmWtxQCNhdfSJ39Zhod",
  "key14": "vUKki6y9FJT4a8LNQA2tYYrZFtnq4Z5srWV5NmuHDhaZkpWCr3fJmZvUZTrYFBcm83n4vqbxvAjWyRUwh7BzDun",
  "key15": "2h8Nv28QDaCyNGdBmK7iPkvdBmLUW26SswgSMLg5snevsxsDb5JvSBRud5YfSe3tFwvMRxE1xETSuE5ELvRTErxN",
  "key16": "32WNxoKqNUT2NkoeYMxUw8x5fLCZ6d6Vei5p2qYMqxhTdgRKXRyYM4PEp8NyJBpq68hoZo3eA6S44rYCXJ8KSjoN",
  "key17": "4VVWTUcdXxH3HNdMJE3u8cJ2vsztKJNCWz1jdXqAgEUT5XXQnk8usGYzgGUU6XD9Q2aSfo87rQwZGxKpCiFbtoZe",
  "key18": "3tt6kAQAKcDFj9jbgZfG6My6LHQqqrCGnuYGCRMSgXVSRBcygVyr3cri8jckQLgy8epJiuKv4wrPmM1hGjrf5Mdv",
  "key19": "4EtHkdM9gGPsJr5PFMtP8us4g5npxcs4gJE4tWogxLq27DhYwWPozsTyGMQF8qHpsgU9V7XAeoqeKkRd4jcq35zb",
  "key20": "5DZG8rSUEACRbkVGGeSaj1ZqKxYLm4HakVmyxGcAdLNz78X5RNCt2LSc1gnu7Do8LnUxpHUJjyFQsxTSTsdD7uyj",
  "key21": "3VmvWSmYVSGmt3mVDJwHkbC6fYo1t28YZWa66jdNA11wP4ncXqTVFb93RaH9oqcVrgJyczkd7Ryz3owD3duS2XGD",
  "key22": "o6Tatp5qX6qgJz5mBcNVhX7CbFStGciuFQ3qtKEKFuaGgqgGZgNuMmBd1y7Qo3nHSn2yyE296agRqkLpdRVAAEd",
  "key23": "2VBqa6woeR6XVmKuq6bv2PMNCNkBXcFpr1jojxc6NFCxrJyrXDcA6k1LXpy71tJLfkG9d1cajJnKpThSofxz5mU1",
  "key24": "58DXLjASjNEJ2ncVgWbs1UbZr7hkMs6x8xqU2jRuUbVfxFR5pUPBx8xj2KDUticpssyQkkzjJ5fgx1TqzBGroZyN",
  "key25": "3h1fRvLTDJcS4viitWh2kA21nYGhB5q4q7XvGzWKovqUD2cALAoFDhsf3KoPnruUQnVsJT119Ztgz2SfQ6y7zqbY",
  "key26": "56eDsuS1oPvq1h6izRoar9oiBcyjKvUVMqgzrA9KeYE33qLp6kxsg6k5s6XvT4M5bKa3rR7u3jWKKrwabEufGYAq",
  "key27": "4Fhu8GUmCDzNv8Jb1uzfw98z15eyPESphgtiG5XUcb4hfzBqajG4wukA3RFkcHwNMQ9p4oiv2kLGnkqtnkZ7HxqB",
  "key28": "3twz6Kz8MzMt8ypqKaT2dL7BUpaqRy5PkWEanT3okM6Ffg81bWx9p7Xjqu6maiH8J44HFoGHQf8knjuCtmaRHGgH",
  "key29": "MszHDWQQZsnQAcfSmWzC9X5r4YJfUw1xdFmfWW25PT9C2a6sr5JzdK1quDuipHsLSc62nhZMy1WZkKvtAyqn4Ua",
  "key30": "4uBHyRTatKExnb7M2hDK9oCdxvZ1bMYkUPw6FLw65Nfx4FHXKc3ukEojJZ9aTELLSDBqG9VEFpa1tS1Xm1SGoS8Y",
  "key31": "5FKBsBqCsWnPmRW6vnsXZgZ1X99Dtdz6XWb74CzZcE1iGVp6LYqBSgiLvaMYiXXP7sbGY4igVDqFmQ1MVTAajbrG",
  "key32": "5jTLDuqkj3wJbnnJX4cc5Bnj9SjLFCpK4GqwUDBrCJdPhvFYqww39JktsTcapJ8Spnq4Ta6LvsxnLuzVFKwnGiSr",
  "key33": "32vTBH1nVQz8TK2KHGVxvjnBWSFxVqGD7M4nezcHcpQPdqscRF7hDYScLWbAHFTYUoGpuBhTsh9g5fYn4VtmVguo",
  "key34": "Gey26cnFHPW6f3sZNHNxVB5Jdwb6S5bxUkRet1F2eryWGj2UnZKCx8BwmrqXgQwfH1PX1ipm6b962jnMxfgnUQ1",
  "key35": "2yAjaboKmRLkGngC56TYYpQqzkBtVBLYWJ4hP4y6bEYvtHAqms8TiWer82yn7dqwj98xgNDoVuomtj6dr9MqSePw",
  "key36": "3bFGXzEryMA29qNu1Jd8tkkxxrHx3SmJKuARLDnnnibpCB82GvNiYnUC1yCEasUuqHqMkHBGWMjDWdhYbxETsCpg",
  "key37": "53ykqxraF2VNhbpKoF7gw47kKKGEuMBS4d9RRXaAnECmiyvzPNvgnLwwByaAeG22TZWe2KusmvqsB6HeU4RPWGZg",
  "key38": "67oz7gJmqgJVyNFqCsQjhyuvQwDaWm1UaA9LcpYxfetrU7J1eBxpvxSWpwMf1FSsNyQiJ5MEAJ755gCBdQdMxoq3",
  "key39": "tH2LcbUFUoWNYqtonSqr4EVsmbdQaNfgXNaSA8WU5Ge6KbJ3L3yzaRFAXuXLDnkdpk4euSG4se4m5hGU2oEP5AR",
  "key40": "5aKkcRXUQ2Tn9uxQJ15SKMFK6JHVNcft8Dh2nWJF4bdXQE4L4w8Nixo3tzDUrXnAVVp5fEMGueqSQk5nXwfT2gdM",
  "key41": "2gsieP24681tjDXqvCGzK26vvUvre7CL7Rpi1zXQKHb84WNpsBKMvQJNxV3eniW6zn5Mt2qGu7Hvp9fF1hVmqQPJ",
  "key42": "66DowcrXFXhGAdhL7ZevYGeZ2J4kF9raievU85cCZvaKeSd884YQE12rx7Vn4mmnjD7BdoN6faBSXkaaZPGn3ok7",
  "key43": "41nMYS8N8RpdxRuxhA1JGqZhpZ1nbvug9rtV7ZRn9uAA4BtSiK5mCUcVBmzx8PHfpgh57DhgX4jdCzHrKH34w47c",
  "key44": "229fg3jktfhbxZZTCLWwqF6QQaus1UVzTpG1SXndubeYT8H25QTiDutW1539wSJNk4JmpF8GqeHqsrRBVR2F4LFw",
  "key45": "4cWbnJzpQLe3zNPrYTvvyNFXWcYaFePyfxoyLRQfdzqkV3uodEmmEJqGV751ucb8ZfZLNqx8Q8LLBgMzmAvDJj21",
  "key46": "4X96MNjrL5JQNtrs8q3QWtbHPDHPdGDcd5sVYqgPvzjffUA8Fe8gjUkrFP9gQjDYyxn3RgqieqDxdmtiYn4kn7QZ"
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
