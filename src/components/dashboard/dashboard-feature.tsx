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
    "ckn2Ms2jGPMPadbGc7ncSiPETyUUtcPUazpYML55GAS55RaF5RMyJzDWP7AEzyD2S46LrJYU6djQbBcpja1sWUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yw85LMQsJxqD1WY7yN7DzuvFty8EDKc8z3zLA4NhQnVZaS7ZxRURq6GMwY5Upb6476YjeFohzphRdkVm3y2dZfT",
  "key1": "2mVo87bHgDVC5oYsU1D2srXwpvYWL7MSrAEX3DHRX9NgegTfyWKg2Rw6r1Rcp8EbbDXgi9Mn9g94YxKqnyLRBtiC",
  "key2": "244uPT92ahfEtoizCjoZnzZmsiWA3xfFyffkkR9GLXMHsA6ZTUTSVxhWG3oLpuwKM4vhoRVVUrT1VmXDcCz9zYej",
  "key3": "5mBJEjQhW9WThiTZ64k9zZMyshjJ8wt9q7JbKjdLYjVfnPGnhiS85yJgC9NaXHPyDQwjhCr757uEAsyKbiMS4yPY",
  "key4": "cMPx9HHoaozswMKq2MtoAAohc3PWafvqpGcRL1riD8CV5CFCKZJry1UDojDEZLA5EVbACMDYMPiEgo3uHTVdH8M",
  "key5": "3FYBXK5Uyau1zWp3za6oWrZY2ZSkJEJwyeJMiKvsf33KrcD4mobWz7RawyogE8owYP14xvBDMAfMm2f6VcwsXgeQ",
  "key6": "3nF1fiXJbVUGPEn8KMaajBgvPcERpi4WsKHNZmBwqagWLDYmrxGirzXRoi2A2nFgjEjLcCWf8MEt2H5hJt5dVtKa",
  "key7": "246kd9RFfRZdMDtiVmydPxDcfTPDGFJ2uH3wCBFYMhvicXUVXxyLZtz8uLh8zprro9vgNnmM9x8MqH5jEP3haSm3",
  "key8": "2e4C6rpLG83jZ9iTiJKgfmcmJBJxesGG293dignTMm2WpetGsCQUSsmkfzVYAhL5aq5CriGaWM5gtv9RkrsSxdj5",
  "key9": "8uNCKDhy12xeTA6nfKjhUzirDd9pCVp8AVfDgVYpVUa2rYYaf4tmd5tYF9iNxYPvfzi7YgkignFzjxyMmRpsTMW",
  "key10": "31Fmhp3Zk3sesodX2m6GjVeiBGt4MMba91Y7Ph6MLwQpPVekHjbA3ZsQh43ie55qsCTf3wVqTu1fCPuQd97SWRV4",
  "key11": "ttZc5Cg24b3jKdJA8XUt5wujRhrJdvtuoRkwQy1JSPQZR41DMqepgWbvZtJG5ZUENy8QnFcPtagKdvbT3HNscsf",
  "key12": "2Fy3Sbmk5kiQ4XW71sDmZ2A5vQQ3UeHvugGgFJvh7uDDZZmQaBHDZ727ZAmu7puxyNSfeRDqKyW2gxucKQ4pSipC",
  "key13": "3VJnGXVgkLSf9QRbq33tdqjvDX4qSP3JS7Uuayr6M6q3yrJmC62TU7wzEcz3q2DsS2nkUkZcCdu54bci31pjvdGw",
  "key14": "5nLE9z67RsYrDp95sXMrgnG8bWAqPsvm9uD34EGVA8R7CGaGNaZuhoxwZs4f9LiA3Ad37FmwXpm3mgEPf8XteNRZ",
  "key15": "dfKaf3qHQetaUwByKvKqdNUUmdbtcyrdzyU3yRE3UgZNRXc9wdG3CG84V2gMh8LveYbqsNiMXM8msR3CQP5pBA2",
  "key16": "4Q2JyKcj7xEYPsnbVTcrZUR1vxJDZBHXTYYgZC1GCHyFc6obTQ5khmygyxNndVRnqkWQhVSLcyHG8bFxdABwrVN",
  "key17": "3CCB2RdDeft6csjBitJsJ6Ln53xCKfHSy8oy1rXM1W5svAq4L3AGoohggQQYcS1PnBbSpw1SgLjzw2GJFiBu6U3p",
  "key18": "jdZpQC58rA41T2AJoxehURjzXv96axLpAzyX2MoBY8KdbZGh1kX8JSvLnmDmAc9xeozxrrJGHobVhN8SAkSxwWY",
  "key19": "pxqVRTcmQWAEfNNMHAUJBPqFKDcBURj8H8J2eq6z7dSVvb6ZdsFmQRno5CMSMCy1yufMWkTj4sw3Vj8fP1TQnQX",
  "key20": "ZNi6jpYgsAXcn9mqLHJqdDUsC8txkHcqqG2bVVKPcrRDfo5XzLgLDGeenw985Jc7CFmJvDuFucBZ99bxTeGWx6P",
  "key21": "427xieyYQQpibYNW2UjK8poG1ehPxz1QqrsQvSitC2EpEViso9SbohPcfFypUXueH5PXv19Gv8KY44ewkifZXfjX",
  "key22": "5f3XFr3pq524KMTjNSMhKGsXYa8uXYWZ39U13rygvgUjfbXvd17qtSRE33PsuM1rwu3Ywf51UySexjhg2XAKU1Tc",
  "key23": "5dhaS2fa9HJMtoj2VtfTVGxXRRCfXy663ekYCNMZQsoFgxKXJqHbDb5dsYjtHm5fc497ZTwUU1HGy8FB6mZ5iw61",
  "key24": "z66PgbXda8TLEtz5km9YHYy7NdaLdkS6MfiSuyztBSu71weLrQD5MebbcPaWkPCCt21qRSGqCVgGX83tTyuWhxe",
  "key25": "r9QeQLD7jqfYNaEBz13gkvTvzDU2kKwtPUM9Yh7XAspTuvDWFhxc8xn4Ww8vQ8g5HNNM3HUv1X12PxsDgjpLFFz",
  "key26": "3D1TvQu7PRJic7gw9vaSR4uVd9xqN1MyDVwutDtNksTA4kX2xqV4QmzXstGg1ma88cJGVVTW5xHedQfGETQMx1AC",
  "key27": "533Dzb9pNfY5uL9yEwvgqf68gT8UMEqpi8fSLMkPvigKPvSZdyJruJESR9gQzzEzTCsi3tp7V8Fi6uUBidUmJx6f",
  "key28": "3zQHzdJ6taEufe9Bp1Cpooi8STUju5jYsV2WDa8AFPJWHiz14HfCTEH6wFwXmdmQZGeBFSEeUSawWMD1KMbMMV5J",
  "key29": "2Rs2cYMq1z8fNCrVj9kLUEYJRzgPwPoaW4iPgGGghmv5tqqdcL1xGt5VUKzDLB59pesgxJfmFnEaDJRnLy9ohewR",
  "key30": "RSaLj93rGu7hnYQXxkMP896xjHqHLrVdT34mXv4BKzhjnGWXanWCbSDcrJTPqBwoFfLL2oH51Zn7XVdyGfGusLT",
  "key31": "39omK3FSgbjprAypmCLoCrbkEhgK1HNavPPydHw5k2VP6q8ufpSSVKiuBmrmKJ3rsMhoSSach4U9xHqoNcZYPZt2",
  "key32": "4PFRSGrE24tTEtnoYx9ivQfhFhHqmT9GRua1BPNHjE75CjuNXQc17fAhiThfMEmcUKfp6seiXvRfUKxUg2abWj9y",
  "key33": "3VrTSm9W3vbY2pTe615E4cnzRYWdgpTWUPDpFkaxQFpcMPkCxaSkNVcKqrEmAnKGuwwdBYkYh3GiJqEnTdDuxMFm"
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
