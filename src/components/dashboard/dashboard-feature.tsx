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
    "3jtyp8r2gQj96sMpJEvYTMPvnMQmU35vFQKYVYb2F6g9Rzox5PhFS3cUQ96HGxfJ7FYyE9gMRTuQRhyrucgxaZq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wacAsNtPqZjfxwc2TLgMsdFMcTkFQfLmNZNJV89z1RsgM6Amm1zxR6hjKCdtLYoE4aFq3brfXSePkSNHwXZ9kwc",
  "key1": "5Tz531Lw6zgESiBH3NLwS9zY89bDZnS6F2zvEpAi4SgRtNrWssXa5V4kY6iQj9iUKreLNfXZQB8ZLp8f4jfexLq2",
  "key2": "3wikszxix55LJQwA3Gx4metzS9v4wAPXp86wLUvesra9srCrcDfTgRzSsGYtBFkZURhUhN7vqRAyoh6C6xzR5ddf",
  "key3": "2v9WxzAzWWHGbqDroW3mYHFf9hcM8NQgxVr9RVxoFQyUte9kwrPUBLE6EFkfJRJzwCKseyL9PY9RKEAP8rtTcXgT",
  "key4": "2bPmesiRaULEzPjMfSrHa6Lfruc2jG96DfecVwPyZpP5mxUDEEnwuuX9VAPzhDcrdSek5DiTdQu1eeZ5ik9spzQ2",
  "key5": "5Kc5q47XBnk43SJQ7HcxRGt7VFrkYtmi1ChE6BA7JbKZuX9S6ttSxGzXDvo4rVYM29FYnG2p8sdsP4hHmUWhDE6f",
  "key6": "EnMrg7HGek36ckmKz6ohqisAL5cJi2bcVDoPLJqg2mh9ueWX4xoSxY4dhiPvHbg4GkLdFf6XR1EKLg6JanyY87m",
  "key7": "5HPhFQkoxprLtWWWtjdcBP1HXRF9RYfFVo7v6xwJDsEtdeQCHMudgT2B1gccVcjkyQMaqBfKxaayExRsarSj9aq3",
  "key8": "38XdGYtPQfKwfarsDhbKXj3PmvwD35XnKDGRThTXjUu6D31aUxNnpFatipB9RLdeh7aPswcTSiHzZNrp2tjcvTsn",
  "key9": "498Npnk8XkE417Q3uSxXsLnbsHKobTUVkf3vaZ1KApu1mYo4V8w4G36EUtUrRgo5zYfY744ZHpzZoRmo5TavxcXq",
  "key10": "3emrxHpeZhGMKJnXfRy5jX9pdM5rXgcL5AtLw2v9u4osKEHn7EkGY5f4nv91uhnCh1gR6Pug1aqDLrWRyKWiXQEE",
  "key11": "4sGANbpSpmbPb2BZZTixHNJT6XgDq2uvLDFvjjGRkqTyh12xsL3L3kCUsweV3jumLaHja86MBSvMJu9CjBRkZcFV",
  "key12": "65qgKHxideGvho2b89KkJUhFEmf1AoiMnjJNiCCa4uTvo1CfF8aYxiYjz9sGq3P3vFTqAG9KAQ4afsMzXpwk5RLP",
  "key13": "3tUw79ZEgGncEhPd7L3P18vJo9qAz89sGa4diQaNzk8bhdTZ56A5FG9ZRcP29krYT5A9RSUskdS72NxiBd5H1vGG",
  "key14": "fFqoUmaRrLzVQDPo5S9Dx9wtQuTapxEFyApi1sMQcVWZF4D1huReJehC3XWkF793nqJuu7cFujkT7A5HdSdCGyv",
  "key15": "5qDua9MWD5wCcCEQbqSt7VedUYiFhFLCrvFPwqewFzbRp4FUka8aSaiLw3JnVyQsXd72WyRNppTTs4n3Ddn4Mi5z",
  "key16": "Qn85BF4jy2jNoiNhJvVvTjLgGJRn5NvhMwaD7eWk9pb1djSV8sV1h2qckYp1c2Gi85VgxZwfKYDtYWZEL9EwPKk",
  "key17": "3Eix8KFhp7H1P15qPVgcQWjkpGGLkJgbrrWwVHt5gzphTwRHyPFwjxdCAXtjeEgRXxdmnNAkYRnNQnnGkxVLsy8z",
  "key18": "qS1FZaXeRgCxRDRNWPhvGTajmZQqdFe9ARhQGSJ7RWGvanU9D9Kp2mzvXS8cHA57UwWpjrmSXQRmBd2jUT5wmYr",
  "key19": "HHibo9r2JtALAs8f8vkNRwGZZYPU3S4B6CnDw9kcDFHD5pwCchp1q6tifHqSc2vhy9tfehXrZc1qK4x6QZL7w3T",
  "key20": "4azFKvh9C2y1PCVNvL6PCbW43ESYB179hqYq9phShav6C5hW693Fzm6AyeLfxXrkVc45wrscybM2Gqg4CidnHi3Q",
  "key21": "2qB5AKfQrqPxJbbjeKT2wyLr2taodU7wnVS3HENFPthMtvqbtax43LNhomuppZmfruT3k4rDVmv1MMropWEaBy1J",
  "key22": "4hkEdk3QsxsT7D12NLFP7fpTtCUCFANfWU3yDGYKbVQDdXnHgTjGh9ZsBBv5zyDinznLYy2LC7zYFRswA4sbKq5p",
  "key23": "2FdmhPqzgfiuucKL4VnCL8ByYpxHhUxfHxPzakSEqa3rx1wkGTDJKt8FHT4RgbSKQLz9vcf1PR85gcbF73yY7XPB",
  "key24": "2MvmGnkoNGLbXt54g3PFi6T5KfR6yUwGmynHnZPfqPKc7mukt66YK6McdizhZG1cC17XGKpJQ7qKyB8Vk7ZFrDsy",
  "key25": "5tToHg7CQP7WA6xnL5GL8i6CajzYY7cLkoiFaqjrjC3gGUVNNx8WiR877ni3CKphRCteKswNNjh4bEkwsr5U8WbV",
  "key26": "5weZEgbEtT6Y2yLdN7RhMwTBWPxzhn5v8pGpHmLjx5dZAjoNNWQydVTQ6CEtmWsuczvrjLoxx6CdV31sXpY64fJ2",
  "key27": "2yeNX3jitCKPnrtJxqJEdX1VjazJhv5RGa3NW1E8yo4LBY9aBSCgkhG9kzaHgxFfAtQ9UjKYVwioj45j2YEaDTNR",
  "key28": "5pkezDLhp48kDegrqK9rkBXoa1SpNZRJRo11Ur1hBk53CCnr4Gzn7CcMS3oB2hxqz6ZQF5uK8mHSTooB14HBahri",
  "key29": "3SBQPZoBiYLdzkuoLxioMCGu4S71zsQhYiWDJW4QiQgpxHbpBhdkfGxe7TFh8CRGagL1pxS52DuwePvSEYEYTVT6",
  "key30": "3PrydQ6cY6sRXx2w6jAy3qhZuDJgcCYBHUCBaDwLkTKobTYoAXxhYRLDM9bduWcaieuWygVP8JLR1HbP9uUUGqVP",
  "key31": "H26X79RYDsx8u1KRETW2d7upajZRqh8ALEm41fBf69WxQCJwUUA6vegZmp733u2SNfaik1Nt2NwLGEKnF3wMMPP",
  "key32": "2i3HxzA7pH9E5zBzUDqATgC1i7WEZ2PAxkMPTSxArD3p3BNUVy8NyW6tm7Qd4omijujcKbEYk3jehz1zNyoPhp5L",
  "key33": "3HVs6pi7ixfTwZ4ZkPBcYJnaX7Mzm2vt9EwMirRunBk4jRBnB7oaPdmhyFAc3LftrwyvFzFdszZRKukpC3egFBQD",
  "key34": "3ErTALJD9PwXWeFmP2fruK2MsmDXgj9FNw94XsRrJ4RJMHPJkAfnSojtqcpAbvcrxf9ZMCaPFXS3XK2Fg8ESqgGX",
  "key35": "3Ko1G9eMfoXhDHvbymJvsSizZgwGfSjq56Bg5k8qXa8Zuqtn4Xrz2uQaTMzmwcXkVy4KR8aJQmddnh9nVfFh69QX",
  "key36": "X1xMr5tunmvKt2VuL6TGXBfz9KiDARFJ9TXc4993bmZNeajfhUkC2Kd8tfAnBrKiBJM3YDDBYvC1CaRYwdf2gTk",
  "key37": "42NHfSrZzYqCeBz56QvF5RvR4YAzMXpsENwbXVPRxPrX6pQWaRjm32WSJuxF3sTMK7K61sRVYU4hqUcFjGjR87Lk",
  "key38": "5ZXiFMv4DMThWhrekByAJgeExGwxayozAYjkMfESfmhVH79QgTiuapiXeCJphTxwQjo28iBqP6f36iLP2c4bTvAJ",
  "key39": "4F2qqJwmiqdcfN7YRXLwM72cZRFW22qVz7qgbMS6RE3P3Cy5sBNpMGztqpyizDNS8KFZav89GaWWYq27hrnY1W4f",
  "key40": "hdn6hrtXhRQwfYbVqQp8JT2UW59WmM7zU3PixccheTQN8xN7TWY8t6UKjaJryUQ9XFdQ4PMcsii7jgYE3CRqLas"
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
