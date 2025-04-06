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
    "4HVZbbYJE68Q8Qo1EHvVGWxGDSjpv4NwPGeNzH56LBVK7Z3hUKfXoTRzzYKJTKR6uZZxA7BiGf5xv4RhvfATukms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yd5FRvRAkUEaciKvY2V8tw9x6qpPwCT7WPMcaBkpFviKVzYLJuNagZBseLdWywUcxtJFkqysVfAtewFFSsWCdMh",
  "key1": "3hxcDf1YXWM1K41BNWPeAdt4uPU5TVoG2wvE68Uh6mWH7h6hXecPFhziJyZHPJr6UuvSTAWcRCii9MbM7rjE8Byp",
  "key2": "YQc7WGWoZjPR8y3vRcqB2JJREaUrLdpJCNDiotK4gEiDm2LwyFuUopyzQMMTBt7ShJJrM29UtNxNbDf4vDGtizm",
  "key3": "ccGoGdeGEUgGvmJtpJoApYvVhChRHSRv1Ehuxjx7LvPUjbSR7scLanrvTUknFVWjHia91YAzSpSj9ET73vRhSn4",
  "key4": "32U1BpXQHFAjWjoX9RXUjj6nwwF2G2b14ds2M9CwpPUSu4dx7ZyAbo6q5JoqV5HfuztLKptWA5ry51yy3yfAGN8s",
  "key5": "4fcLZP6qc7C4YSg7BqzNwcxoD17sdwgqw3wpRdJsv3N3JtVWzn2BfgmzMpb4j1n98gocTxyptxwRc3Wf6hcMpKPK",
  "key6": "c4oAzbqdNXoMCzSgBP3yqDjj9a9C6fTjmCczGjqSQvpN1JvXKUo2XQB3cYX6gEQ6WRrYuSPG1FCQaJjqPzdrzif",
  "key7": "kvfZBtiZAtcWDWZgTisTU4jG2P2zwLveZHcMshTWe3QJeU75XvKQ6rzcYdfRhZjbcez3EsnK9zjiHguYUpEtrYg",
  "key8": "3ZfKj6mMnNyyrFX2nBnmjFGJdZ6iTf9CjvS1GN24Ye4tnBYTcBUfdrKJ8eAVzoYjvdTZQygE3WUxdbU2XJ3xihub",
  "key9": "4Tov3dRHybnrZg9s2W2onnnievqX1csMbGVzH1CV1AxHETmdE2nxEnpYiEjXQHmXo6QGAbjmEWUPmk6vbki5AzyB",
  "key10": "3AzbhC52KdHwcd4DTrewp5qpGYZgWr8P8UvzeDxqJH3yJkRWHKHmSPnnYGzLerbuoVQ8r1p2GGrUvpf8YvzDqWEe",
  "key11": "3Cr1vwDz6DUf1M2YSE8MyMJastmACRiKWkHXtuZDy13GAi1U3gFTN8bQ5dLgJcAwUtaVe9yERksJySux5L4JyjrB",
  "key12": "4g9t3eQahJhK7pyjDokFR8BZko6y4959gMPoPZYvx5HFsfQSeH8W3R2BXkrTJkFDhWZhEWSrarNziTn8AaQia8wK",
  "key13": "5mpqgDh1PVj4tM3CdihjyLQr6uDkPUq7JT8RVqbBZi5uzSyKLBJAZ43zGfDcLrLoqrQAr4Fu8xyLk3u3kLyFAiTo",
  "key14": "5oyUuBMaEpHhn26oYgrXfi6KNgwnnMvvrNfBiqZnJnpQ4DCn5r3CnWhqEqLyyMW2HL9zQpfjNY3VXvVzvDiQ3qHX",
  "key15": "3EQuJocLaRc6reC5nRSGaU9MF7rsiWMsbmbLHRyvdpQwQ56Wrk7rz2ZJhHcrZAtY9EQhQF4CeYqjiGHKTbRvgYoe",
  "key16": "cdNCCYbRQMChS9qxcpfAJ3UiPXnimVhVmtmfgbPfguD47PCNXNfRNbyAzma1BmDBpXUf6RXi9UXFrPorQ7Du8nN",
  "key17": "4GX78syDqLvrdicTks1H2TffwhXCgJCouqUnc3RN3iJNhSTEsK7Gk8JnLnxToLKSLZddCJdtfYDRX2ZAgEkTfqXE",
  "key18": "3EfJwPy9V8dAakDDgtvBrjDrS2ECbZ5ygxBk6dEd7jp1H4k5PAh922pjhixup9KM99PYoMb13SFQH4bpa4nV7KZ2",
  "key19": "3cPdfvEdeBDrHry6ikXuyMBNWBKRjfb78Dr8a4B3hZWVXVe2gbfYhQqypvQsmTXwfB3rJraXGxuEtzHGUtvSDwGv",
  "key20": "4qET7Ti87KUfXuTY7p3oQEQgDNGcKWjUfcGRGCU6E1TZboPjAzwTRr612SP6mCGZ7XiZ5fP6A1GwakefgM7ftbYr",
  "key21": "4y9KudAgFvXHonMf61jC8LRJ6JexQd7Xh6nkZrvhUiwYGGoHrfFtSM5CbUw8CpJtEN1qrKbpHFvdFm3uKvESFBKD",
  "key22": "4m6VFP1TjH2Je3mYJjh6QWx38NrHBNHjnt3X8CJjUKkN9QoYXV22Nf7zZxdxRpozW21tsTZDUYUwczqBReXNsh9a",
  "key23": "bERn7up86MwrLi9WgbM8dUgoccud3E9Jyxh7rM6xrKhut6unoxFfkZmmPA6J7ojKscnMTBpK4ejTd8NsUEfAU5T",
  "key24": "4N2ZQ4bBVyM5tDEyk4RgZkKQcquKSUFzZgkZEa7JawXFwaYLFzMarZeKLZJZbcihFvCxepvUH9HsvBrYnEwE55AK",
  "key25": "4t3RBinguebfCGJVofvMDUDA4YVL21xyn2ELRZ2SbFHiiQ2bN1ZNg3cW8qsreixznsi38dcs6HYMeckd2HJTK7t9",
  "key26": "275VdH66doy6871Y6Mgt5DCeUf3AGvKZXv83GmHozXexZ7KNZWqYDjPzsPqaeHxEchxH7D8Cgfv2P2c6tFa66MRP",
  "key27": "5aTKt9kkdsTq7dzHPH1j3GU2tarvpgC7EGtfmidFLu2Xrg39ucDdt599pjt43Fv3BP8mFBP7tyX5oPvRLdv5zgcH",
  "key28": "3c3xc2bGCr8nb9nnSpYyn4VcxBN68bKPhEC8tRPpV6FnY8dsjWVC7Qv51ByxraakWZ5KEhczTSo9Z3RHteLY4eJE",
  "key29": "zAMveHV8a1cjNwQ6SAsXJC4yBnf4CDLGihG7qvYPnACxCaMPi3myeZ6QFWXtsYb9LM63Q3wiZmV8qRYT9dnczgj",
  "key30": "5i7MyKVUdd5GAE7noUdy4uCoZrWbmqqAEcero368aTJcWGvXZE27fVQ4Qh6zSx8caXrTKFKGdm56NbsMvQWEmjxF",
  "key31": "Lume1wxoPsCjN6VyyLwfyhcM9AgTCqRciifSQWAjUuoeb61sHzabgPuTbNUXDotzgmiKDysdNZFwLH53UcpGzuJ",
  "key32": "3c8CSFb1vzRpMD6aM49iYvm99P5KGCmxsXtPg19WVUdXQvn5NMX7XJ88Q3Rxobd3CenzWHxiiuUYYeW7D9LE5aTo",
  "key33": "3UL6NE3ER4NXTozBbmv1s3BxqSbWXmgCM2TvwbnH4K8bhLesHRCyFh1NAfwJj8Y53c6sVRj8DgMa24zmAxyEF17j",
  "key34": "pZiyJqGBrGZtCQ3WDWnyjdmdjc25ZkBLddPE5VaYcsEa92ekPeaQcKEGJjvokdwQiVRtwmBSzFKC8RMmzP65vsk",
  "key35": "3SVjv1o2P7UNo6nXYU3bCBZkEq9adku7eMabvbjCMAhXMCasJfSUSq6rW57KnDGUbAYC2U58gS57CAaJWaD88gRn",
  "key36": "5hcPVXaZFL2DEpiJcDuJzmjQwRG2LUXL5y7GkrXjg8GWfpbewQt2aYXdYnYVAkP5bEQer272BvuSAHRfhnR6Nv4Z",
  "key37": "3eWJ2rAaWuCuU9RvdMKjSkWNDS9GQdo2gmFGBQqxi2F4mjon8MBn6APBBrVi8ERgMnYK8BVJMS6E1RPuXmw1CoH2",
  "key38": "2LENfpcfstdVsTEHjikTyjERL4zikhMcozfjNjLTW4DyCBs1FeiBGRybWVdoBqpYUcXxoCJMcyaj5eBTAEzuEv4e",
  "key39": "5zWAY9qt29Lo31T9QGcXFYE6ebwtzEJVk9xk87Hdi3o8ZHuesQLjPofqrcqjc9yGdNCjokUX2Te4XJVEHoa6HYWF",
  "key40": "5sgz7aPvnDsi8zXfap3qJ822gSyoaHxUoGyJvbdGe1k8EJLX61NogTk1X56hPSWUEimmEXbbSqQxXqp1ujybeRDt"
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
