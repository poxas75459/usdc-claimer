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
    "5jpnSoZnZUWBrLACm7o4JxhufS7eZ6VhkJsLhvKUtyVncaHQMeZcBQRSigi3VuKhJeW8NLgLrMhyCe6YaCXiPr1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jgbFoRYy2Bxu7eVDTkuDUqunpSAYGNcTrcUxKEvBsqh8KTRwdye3YM5qMsjkdKGxrByVtpC7UbUZKpdpXfVX4Kc",
  "key1": "52Khogn7Cxqe7GckK8EM5HDgCNr92tX81yLrXAfVYAGhR1ZXzbrMLBFYZ7BTULjY2NfNNKXPCLSLfzFVxTrbTc1U",
  "key2": "gvgNSuknrz8s5gwU1bdeGscTmpZkHZuj1fuRZfFX64qfm1P9dkjx48snA5hzbFxrLdQJzp6pkfaAjp656qEV4bM",
  "key3": "5WeVGi1YHcArRLkGLwoG1jqdJVe4u9Z56RbEWJSZr4M19YxBY9v3uQfG43MgKdt4agJcSupE7oBZ7k5KLNfqTjiv",
  "key4": "2dxsQaVvbG6uANKTub8P9QXtEAbdz7mTNk5PadxCY988Tx8LAw4j5W3ksNEnCmeRDKiyjWWLVTB8TNqFHC2gJtJ8",
  "key5": "2fK6R3DpzrSP274ZDAW5G44aLuanZyKmuPCaXSAvpiT9ZbC1CD6t7JDWhDEK7cox1SjoeB9WbsJUhgFVJfZEbwnH",
  "key6": "5HH7efhgUsA3qwr2WpKNe9LQucH2VifwbM6ogNoJWTmuW8vLPrBBaeQP5nFVxGyPCvNFVYYtz8reu6t8YrCoCZ7V",
  "key7": "3EJNgjDg5dXRRtq6ZDv7Uy9Ys9CRiv8YY2hMB6PNRTuuF7m9H6YEZxKPr6ysRYe2m9XsDdpc8xt7bxcUZ2cD8hHN",
  "key8": "EJAmgRuDvEHcELAunRsGHqmV2N5GNfdXAfqKaeJWR7X6pkEgU9sqAYj7bFzbkFZDLisbDEKe8r3nD1vPwaEZdaw",
  "key9": "2tDjAKN1S9Z6fM7VHoy9NrmofToxpwsdgyfb2MdMxTKyg2ATyN4v3xt9Tn3Pqn85i74yYwZvNZyZkX5H6WChC1UW",
  "key10": "gR27nJS13cE6pArBhybiMyrw2p2pfoQRw5bshkSNEGN9ATUneBHNCcnLu4VYzFkiGsKsSs212fk6pkT8UuaKGnP",
  "key11": "5N8eE5sv9TpyMtCY4oYwsHxZoFovt3ixre9ojoc8wHWcjuHP8DNoQrvws8krVUk6SeBi4FuTLwoP7aTEP1Hntjyx",
  "key12": "5pQRexECxEDjLo6vJo9AAZsu8ummc2poDVDntsszot7CMmmUPWzLKV6jTy81Qxg6TyT5Buch3JTyd3FyfVEFvLco",
  "key13": "4tNrkCbURRa2aLytMMqzQeNCBipdNc34MFw8twEat4kf33yznkjGgJEEyANLhzgDbkdNLZdoDzGdQLLNefAWumuK",
  "key14": "3Pb8Qa5DCXfr7qrP1jDqV24G9rk9kkXuDV8cLWix2HS1ny24p5RkkMxeZGG3snbzDXjYW3i2G229bgA8aqGeHWQJ",
  "key15": "2duHkJVeo2tahQqi1uhXdtq2wSjDVkH5e8yZQorV3qMq5xkmaxqDgaZ6ZDCobqPX62HfeSnpTBD5w4huXG8u9Tqi",
  "key16": "5X4TcBXC6JmAw3G3vdnjup86DCo7ccdCyKQdbcEzmNAaAP4Wn6sKKgBmjujbWtSpRgRyoQ8W4nqoNqoniUPT6VXD",
  "key17": "3kjugSywXWscKPcCeeD1KXgkyYSDmVQYGfCV2t7MKSVM7T1bfTRLF6v6eLAPNtdM2YcN5UnBArQNf3dEqj7eTc1V",
  "key18": "z4UDZcwFn33HaM2QQ4zFpba6wM8DXSABrJvs2rRTdwNBQ28X5DmC4CiD1GackXM9FcUQhbvjquGcQbG6bF3Yhmv",
  "key19": "2XgxnYmeWbf1QzD2Vxn6TKus8GXXbKbFyYc7F4vpYPHoDy9MQ3XpQ1Vh8NEiGCr52YLPiLaFo8JG4weKPKXRVQGK",
  "key20": "36iFzLncUG75gbZWDVSmd8bHpiownVqQbis3nUdpi6N9qSBpdhaG7ws472fKcBkuo5dtSJF2FzCp3jaLWjxQPWU7",
  "key21": "3qEvzMwm2h1Xdd7e3ktLkPhKW96dYqzvpCUYgJAs3wUzZTftLFQqQewuuwtG2z85VHwP2ftQQy8svEDMWHrW8YxE",
  "key22": "2dmiUUeCutc6Rcre93SKDagjswfVmBuQREbrP4v7CmWJw57Ugkigjpby7pcA37KMs8gkoVDS8DJy3UckD5vDRaji",
  "key23": "4CfDKN4hNVcmeTf3oppqQPz8bGzHxid9R9hD3AYgmNNR7nWGBUPJ2JntAfdGi2ytsUMgHPUo6SFDbATMsnfSyYbH",
  "key24": "2MmWvgoXUezesGyeEZ3iYbMJc5N2ZyuDF7Bujcig1WdUNKyrrynpRKQeiXKr8AbcR9rBkNxTnRgq8fjkZogRnyXj",
  "key25": "5kDHB29MS6fpdA3F9k6cX9mvawwDftFFmu3N7pR9QNT2vXoeWNi1s2CiQvoCyn4whskZb794yM1k43qY4J3HNMmZ",
  "key26": "5fqEiNFfSogBuJZq1wGpBVuKiapiTbBhEDTAKNGNqSi7G5cehQxKAp4GKRtzzHAZAr7BsD1LSsCGCNCBJgfG8wAa",
  "key27": "36BDJc2VqL3Vwa6AnWdQmD9jN6F8ZqQ2FwrsdFj5GrTBwNLckn6gCVv9C6oLjj9kCoxxPTR8BgsmQESHaGGjfmQr",
  "key28": "2sXkCaZuy9E1U3znaVZ8aLjtwSsuyzUCE6cWbJwm63BLPuiRbBvLUUfvcqZTDWALV6z1Ax7ABRpAuc6XxWxrU6Ec",
  "key29": "4VpqrFCiRpS6Xv7zEPDYBNnRDZ5NKUHPmroKH9mkL9ZtzDZPjWhLG4rfw2WtQRuuhcaHAZpCmZWHMgav4Sejz3Lt",
  "key30": "39j7eSRViHaKuKH71nGEuXgcYSqVtmtDutUuPTxNLboc8VWDWunxSVSVS9rQaJaXsr2YTEsffL7YdknPd6HtYuc2",
  "key31": "57JT8pWGYGfXWriw831rnM9gp3zhkKuimCx2QSiG2uQa75jCtQ3J1yg9TQTABspFGUZrm39b8Pm25x2CEbhq5V9x",
  "key32": "2enKFwrLUBH2k1Fh6cf3NAiasDaz6xrnz8cE3mLpkb5yyd5Myfm88PYpL5couY1ccNR87VPMTQXj5bciMmqFdqFg",
  "key33": "5jfDfvZ8vnECT4YudfXEhqfRqkxjiTmxJGrnGu67eot19B9CkAgZe3M5uAQ5dUmhThi22aFtgaQuKova77J19rxz",
  "key34": "5tKietFWJzha6ECa7hFKqU4W22zy1YtEkwU5mNrhUkNeVSYdEkokAhVfEWUy5kAo6qi8RX61HK8bVQebcqUWdAhQ",
  "key35": "583BupWU7pbJQTpScQntSdf6Y8iszBvWzrd7yG2n56HzNWtdo8rtTgUpRWaEns9TTRo9cPnWCAeomZBKHNjAQvKe"
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
