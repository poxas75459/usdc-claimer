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
    "pb7x4E2tTL16VDgL1XK83kFv7vKd1ZxTAL8G1H1n9svFwmkL7rKXRw8iYhcjnXS3gPkKDGWLnt2BvYeD9KxFtYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BLWfzXD4NWcwZpytAhCyJtAhLGtVjxWLneFkRa4FnXa9LKUGcLgRryFduw83WHwqDbQaVr2WidtJMapNSftQw5M",
  "key1": "66F4AK8q2qfmxFXYWaWfTrt5gvUg4FUKzrNhNwESpuuGoZjPRhjjGjdaDM3tMzLuUWpEDDVAeAM5L1ZRu8AC6bF1",
  "key2": "txvosqanwM35KmfSKTSLNDrBWV3T1FdXf5apCmDj9ftdoYpnBtgjTDRbzCCQtjzczGY3gfiyoQD3vggbnNaZs1U",
  "key3": "57RA32XiSNxJPMkPMtuCyNtLmVqTo3kkY4dRnwVBqrXi2qcwkWu43fu1UhELkufvdNBjJnHCHFBg6hUWovwxUr74",
  "key4": "4rbKsJtjScKAcVj4eeoPBCsJFP7AgviYhE3VjDEQMN8PE5Yd6pi1Lsy8Sm9sop7pnGS6D2Fbv9KtQ9m1fPU78HZc",
  "key5": "4HpTxPnUp8HNQRP12yPF3UWjQ39rnF9VaqSTg8jWvPGeaFEU3cSxXsdCawPov97nv6zWvduDAv8rbSP6JPAeD8ZS",
  "key6": "3RwUSiuNJnEGcxx1esWCchu2pobUg2nzdSui5Yheoa37kd832g6944esCaqGALbGfvUCqy1EmMEdzAexr61pfdJk",
  "key7": "39CzengFmEhXCMoZfFVQwX3z7A3gZc9goFPqTHCmz8Xece2Rbm6BzvgjThRrwtWKkadek7qQRC9srQvRKZndBNL4",
  "key8": "5vJ6nUxadnRWRQe1Ade9PAwJQv4HEKHsYzxnywRuyM3c9GbuBf8tmtkpXgHpxk2ATwJHBtAgSMjoWyds431Jzp81",
  "key9": "31r6QgRCTepXfHs8yPGYpPVN4QTho43WuwMofcASzP2vwkMTJ2qpJCfWUYvRA5AcZBbf3p2y62dUVnZjcnGGCktv",
  "key10": "62FFyvAWHgohqAT7FeCtGQSR2qXJzcKCpJA3Jz3E81ZQLCcGGm5FPFT8VPhTiWjsK6C2notHZrJYQas2yX4Wun7Z",
  "key11": "4EMMyPdSpCjvA5LmTMbjANhNdFshXJqixEUUuJx8s3xny1zUwmiVFdEHKuPFuBdVjrUNnpSVNLr41dxk5fmLQmJB",
  "key12": "29pfMDoDBFEndDCfUeQcw8o6EfuHfkwjtb5HA1ScV6oWqrbUYheZbezoMscuxd3VEWQVWwrhAsgBDFKNZvEt6gZj",
  "key13": "4VvjcXRhtTqPC8uXEDHZ2U3JciHzrWUQTQfhEpnKKhJY96e74x7vnLsBvcS8kqjxSEvsJxggkQhFk3zdpUWupRif",
  "key14": "4wE5NiHct7EJgLg9HEej2e9zUqmYUmA9Efp9eNs7fkowpMU4wqMJyqoHVsRCKJuoMwLbREB7VtKxEBngE3z5xS2Q",
  "key15": "3vteCZHiGSkc5h3tfeFbYKsZ73DL7UWb87DMmS6aKeAvNEMu24PwJMY1itKwpa4guJALQKP2TWCVBkEcaKhgEhnv",
  "key16": "3Eno66iuGuBcLjbzAy52Dp6mWKyjykyHFEDNWVYV1mGoLpNPPrNiy915QYeFA1r5zZ9eYwuKq8BEDXn41UsWW1YH",
  "key17": "4KFJYBLrdNQ7XLPtnhy8rHpjg6pToywWjChvf8gtnhn4UpjR785wATiY6KDREXBrtXjMJoDYvfJTxbqWRVe8WAR4",
  "key18": "64eXghuZs2J2UHBaeoemGyx6yGrnbWGbjWt4qrNQ4PhAg8o19ckxdXMmxEyLtpTpJjpiD64axbaU2heCbzcs52xA",
  "key19": "3mvgG2gN9cLqJSqhk8GPbNMmnNPKFRNg3SKvDzPMHYZgczGjtRg6qiHZfr2B7NirvXwhyRwmZf2JuVsLJZGrHzaZ",
  "key20": "5qXsWYHGEZydPYqH6eZHZvxDPYNP2hWzmwYgwy8sqHnWtPuJfzigyma4t7GSLTbXvbgBzs3V7Jzw2PyANgGVYapX",
  "key21": "66VHWfEVDYT6FfgD3ogvExpvFCLxnCMTED7nNK9ULmjPWejbJrNygLj5TwxpuZzg2WHUCC8fsUTrYRUSr33fQgvp",
  "key22": "56UXr7ENNmMGU7wE977wbpuGbWquFWP6KxwrWb6Mm6JXYW8jozAcqTwCPmWtEwGFUFRt8rUnWRdaVGNrGWH4xbQ2",
  "key23": "5fuvWj6AjRT8CkMZSVShyYXWNmPS1Q28xe4zf32E5TjpYhTWcxJut12aN2MWKod4XxjLMR8jqDiLhL1tvuzSt8m1",
  "key24": "4v7Umn8hQbgzYTbHPin8abUkn73FgyGRPWwg7rCGBRhDiKmsMP6FSsDh1FJkHhUns9JG2HEqCvd2Xnk4zm9o4oQU",
  "key25": "3PyjntEvmD9SrY3yEiGEKCWFyA9V2Piqc4UsoFGjqjc5SbdcGBZKRVL8XypCfq8bdSfoYLz2WmvkWErmpjGafqD5",
  "key26": "3FY9gnx89BpKZBSeQmjSUwX5esoJigzgmAGMJ4KLtvF5SQodQJ2v5vU4Fp5qdNp1JJiKfmgavpcFuWffgTwCQ1LY",
  "key27": "5JgnL7dgRMpPaz3yp5cyjUCZpsfh1QAbhnNBEL7BVScJJjiXw1F45Fmhz51VAe49ZxgQAKfbfoKxdoSkrmnnQqoC",
  "key28": "4C5i458tCCiUsKuwMWKs9KTSSbeoHTw914rQLb1XfpMBuDSsp6xZJRAJQJJp9wTiwPHHf5ahdJbAri1jdVECiDDN",
  "key29": "2urhs2udqw4BhAhoZKMKPhSpjKgBDbWLgj6kodYyUm2ugj3V152y3JSLYAEL2a23kLaHtfpmqJYhx1a2mhBGKGDT",
  "key30": "2B5vYvWCVdBoLkCNFEJHU7vUE5jhVicyoLC6BhX2u7jTpZmAzcjsyJpqoJxnXBo34ZsKEudNLUaSPoskooBRx1eb",
  "key31": "5tQAyUMTmJPMAjVs9zxYfunx95FcwzVEsmDQycLtypFU9ueeq66NiC7j9vYp1WgCr53B8tXWgidA6MvTHKZyPFNE",
  "key32": "23kfqwRpqKy5aNkyDL4NBVCVqM3d3jGyzNSuRaHpJFAvfKyfscdNWz8JZs5AAobTmcToKS9SxKUGjBmCfmvRo9SH",
  "key33": "46ytUZ751wvyDNM4VcnZqoMVcS9RjEeQyez6ZBcBgUXy5D8PWoXurAVMtVXJFTHrBtwzCi2HCo1ZyAABBhPzfVSS",
  "key34": "2LubW9btm9rr8Ef237HGYBAdpPMTJxt4cLv5XiDmFfthQSik5JXQhoqXx3aaLo1rJ9TyJkAp6CvY3vhj2ujNmjRW",
  "key35": "588USw4SaUvFWzCwHMefBVYwzzqcYm6EwWTjCa5aRUgs6dMsCrtqkaTnKpeCSTdURuZMurBr2SkjzrhC7vnt4Hmx"
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
