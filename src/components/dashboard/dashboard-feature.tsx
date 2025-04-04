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
    "2KfE8WhD13CH785ZNuKyRnVbW1HUqpThvwLny3cxTA5qEuDVoT4qnu8ZBTfiuthT32WiUoZqH5XLFGPYaax8ZKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RttfkAWL6PUhJAPiQheoEjyPSzULYSpQhtr8hC4WeZd8X9CPEFWMYF8iLefPFKZ8gnWirtdweHoahbxzN8NKC87",
  "key1": "Gotx4s5WPH5seR218CqyqUwADK7MVVmZvtbBYZMV3e4ZKSvaQVadUC3kKpD479W713YL8qZcE8Ft7k34NejxsUY",
  "key2": "23KkQdKE8v1zrUDpeXLAsFL2hG2cPS7rfLoQa6fu7insaWHEzWCbUz3eTgq17dHGbQysUBMkR7zYFQ78DafSy9tD",
  "key3": "ntgXzhYV1xkzEYfuUt7bTXWeCEASydSA6Pbaquy5yDhzQiQsZ9kUX687u7HFgAsi2ztyGLgtMmtTr5zGxtDu6dg",
  "key4": "4M8iLfc5oL859RyZKRgmZnbN9SVJNtabake6JxBz6UDiTwcsm9g6Dzi2MJ12pfBgwN4nXes63gXig1bGsuGNfqB7",
  "key5": "VJmPcm95eum9zcVN5L5B7TS6AjisvGs91xYPPt1qxJcsjisLKQnGttk3rYas6vTziNw4WjaoVSkMwHeCJdtX4am",
  "key6": "21h5XYTiGGmGz761rQQ9ChVioqyrs9mrZkVhyiBf2r4oJujyqPqL69N4bC7JpeTT4t5ucsXdHG7xaAvruwVPYy4Q",
  "key7": "3ytG1Ct6DG6QtTvM3mRW8iEbCqmtnDDd5S3FBqPtxdCBUP4rcvppYChAKJTqCRxag9umAkBMB497AomwncbdDJBf",
  "key8": "2awDGdupwzpHL2WkjkaCZ2PmZguEQxHyNvRGKhkruRjUYoLfoAER9Mye1BZfEaF6QJtdTgQAwrHEi9Ru74htJ27U",
  "key9": "4dGgfVLEHbDw8xv2w9wqQBfTz7q57s4LL33Za2k9dULvqi2panNKAmEGahYWLPP7ioDXU7XFPmAyRpcFWGkSkcCT",
  "key10": "2Kh1UVLWoJFuNgyoVn3eLXto3tUqspHS4AaQMtbDCFBhRDEoWvcgBLFJsbVZ2tQMpKSVeRzK4vqzRF4YWczmFkPR",
  "key11": "xQWXfy62NzYzYCHAoTMDteEyceu6asAG89LiZax6ogJBPy6kbGeKfAs8PSjG1rTvzQAve14SMv46AhoTkXtRJkW",
  "key12": "5pJdL2tMmSEKpk3o4RkT2caHa4Si47TzrqH19drbfFRos4hruYEkw2G3wtRAVfYRSrmkuuJAkbwpZQe1Tx7DmUiA",
  "key13": "3yF1vXY8oq7yPnfbCvLKrv1XMfwnzkFtsxsAjCq18dtuQjBEt33EDDjwmxXBZVgnP6GtDGL7tWWARYfPPgcZy7AV",
  "key14": "55zo1gNMgVoQA7tDgEf9Gsvtaj6nDkbRYsV59wFibRYukgDaU8Kwkba8UeRuHjEur3jM6YrYFyFiqjmD9HMMsRPs",
  "key15": "xi2XCkM7cYkGBpZG4h8TSePpS2bXff1NKZtiEPQ5K4Bwf2S6h18ERzKZ48DUfzP6qoDSaZskSwWh1uTzQKZSSCi",
  "key16": "3wQAXqxEXU8Tc73UngX7YFvYnZ6K8L4nof8L6jD7yHsvszyQ2qRN4FGUfmZmCKpAwyPNpvaMqtvYddfQSkPBtQb7",
  "key17": "645coq9YSge5hb1Q2oCzvB98CCdUKd8R94ecFMKY5wPqfBqkVEUhSm4NQ2RP1GmJgQGmPsB56Z7fGgKNzjbivYpj",
  "key18": "5F2qvVx2XFGHzbKjM6noNL9EcYCGUMPkpXE6KFuk3iHQE9rqyxy7qi9RKrK5RwrUWMbHd6TPRrHkCX5KKcKFzZLA",
  "key19": "3qgL6P4mvbdiK9mSbcJhfB26oijsctzif1e918tXk394ZwMEo38B9evQv7B2RFtKUs72mJjkpoqXKpZjxqR5KQkM",
  "key20": "2L63LJuKeiD9NshXUUfS1FzbQz9CbZ7pxMA3wVHr3Pidze4S3DBmW3fCJn1a4F6LpBoTGDVCZx44q6qsbTfJxUyY",
  "key21": "4kExrD6KyGGBiU917upjGW7ZBaDKRVbTo4DWo4HcrEmsGSdRFzCUeAnuQDtiAzajEsbTA2w6rq4LckbSvaeiok8Q",
  "key22": "47rBJTt3ADx32hPMZuSaNC8BsSj7k5RW7TjmuD3YprURxcVxGWEzSKwXQyW8k4m8BMV2WcFud345wSqonFpomuJt",
  "key23": "5aWcnuUBXLaJjyGzkuD3qy7K8rzTpSxBQTTCGcgS6P5wkyn8k6ti279iaLyyWZgZ9DAWJzb573FFDxWMpNv3JGPX",
  "key24": "enjSFcq2iznmj8BFGyjRy2WyvZsZ2XsW3rJLzybMezXQ97FGe6xKTYz53uf6n5fD34ZU5Cpzf3mqtoXywuHzave",
  "key25": "2qXsAZQbS6Dhb3wYdmLNeX9dgB41BHe2PPibcmJnHpio5jhJuRd89BuE4Q1jaRXmdAzgEiWq5eVM1ssSWwRHgkwB",
  "key26": "2gWgUnNgjFL4FeTXTW8NQ423wXYUXQHLdZAtYavsfK5yWFyLgti5o1LiwD4UEW2Y75NpDgGdmj5G6yGd1yN6DMuA",
  "key27": "cA9dP9Xt5nvuavtR9F2UJaioAaAeRDnQGz43iLdeVqX1bCqvjh2P6WAuCzbvVVdXT7PEGfGMpEgRbCVT2bXoYVe",
  "key28": "4VPcEzAV8Bdre9BWr7BRrpZgkGYppBuwoyGtAKNwGdjx7HPJ1M9ybBm5n7UEeKvbtJdTmfAB51hNP4yHUsx2VScv",
  "key29": "37ZFMYa2NrF4hHyJWQghsyHtsb2ek8oAvzVnZmbditJc5U7DE5m3UnrZY4bjy534jGj9rYZHAebfhc3Gkzpz8MMm",
  "key30": "2zoQhB75UQQ2rdAz3yxgtWcGuFsMNLkB3rrFiKkRHYnXtacCTXLDmzkEmH8FYD2izsJu6d1CW3qXPfxrcmLiuCYL",
  "key31": "Hs7o86B5dChZquMjQgAfaLJjehLjibXKQe761ssGs2D2nDgXNp8RhYj237qwmUjexWJ5Cv4ZSuWAsRxnVfeNyZA",
  "key32": "3SfpKwELXru78iGME8SNxck2p1YFvmgq26y3kmT6gtDprFdzc2bFxY25frqXRhNwdVWw5xKnRVTChuZg8YfsDHEC",
  "key33": "2afkBcpSvGD7WngYVQrzqrPSPLnG1d7KoC54yG28qZjbUy8MTs9XM3CrVQ6ZZdH7iRP1E3VDBJdWcD1DWNYxmWmb",
  "key34": "3eRFGVkkC2Fy8mHAvY96UwPjAPvPMNwzmYapSSfZGuDtm4Y8DjFkmof75STQFt6UVHRKAFJYLVC2iRUwWwgKxLGK",
  "key35": "f4sCBwD6g5GBFprbG9Weeci8jvLipko36pwGchdxk4RBLq2Q6V2GfzCCujks48AB8hvQnAmtoCS15qcxydXvARD",
  "key36": "2bv2YSrtW4XYwjghkJRaaMgqEh6MxZaNwbiBy5q7ZZtHsRDX18cwo8ooqNGAt3xXoKqWgcqCd8jT2bH4r1HM8bhj",
  "key37": "4Yzs3zv6g2rkJxcEXm5FucgQBA49tbaRxsRf3BSzomdvunWpK2Rd96ARPobehsmmuM4v4RSrCD4taxvLa9dKivDU",
  "key38": "5Rfef5JAgQNeHTFR6o6MCvgWSxtt8FGwMhPHeZZNvniDEvXJMatzYPYmFMurxkC8emYFYj6Ffup5AUUE7reUStcr",
  "key39": "4wqMxuzVpsdXDEnYAUXtnyoV1UeLYTJyHnphxguZpdAETL7vfyHR5HmRuKvLYgV5Xw2iyDCPSmCRsS4oAjrmyoCF",
  "key40": "LT39KtDSpqMHFvoGbrqynADF4WQknoTqpnbxcjmLQo52gbpYtdSq6Piyi3eduRwRNTBxqj6VRZrDFBy5gpVuur5",
  "key41": "5QRDqktJip8vcGANp5igxUuSB9dLrjn94YUQLw7D6G4AFBTDTdUGTsDLhahcARkwg3PRLzo6WQViw5AArBVZ9qAg",
  "key42": "46gqgTorCQk2UwcUXzv8UDniqW82vWhfkGcDmFa4EQ8JVeYSeqQBobLv9fxASvip2Nn37CXEyv2DG4cJCWHGPQQU",
  "key43": "4Sr1Xv51aDyxbHEK1z9QkjNp9uFrMp6YpCiUX42St2ASbXEsfSi8zpNTGo9FZaEhSukTbfwwY5cuwb1pN4XA4Qek",
  "key44": "5AjVE6zruvrbWtuYuBFdpdo6i8AKa4i7V6PX1Gvn3NcMvAsLj2a4ypojZDm5enzAkfeLpTLefifJZxabr3cmDpVA",
  "key45": "SrKvDwHB3VhHFGo9kg8DxXrFhhFmvkYqyghMJks6TwYAceGTqwULu9w7RDFPeyaNULGf6vNb2232GwiQCigKfVm",
  "key46": "5CznX81rrA7YtB1faQ2RgKKmSr39tckcJbo4z6V9kJj9jtacnLhR7iYtj75tYEhdWqNoLSKZef73dpTKyhvKhmW6",
  "key47": "2g2LTqGsY744ytraGrCzbsMSfDKpveZW9EBXkDNgb7DJAyqfpfD5iXHRd52ZhED4gCttXLS3MhN4HpmPV6Z2F2C3",
  "key48": "2wLWsgTTMo3sXmeunXowyTNwLJfn422FVmu5TGLh4WsVdHvJD29g2py8Yfcajcgoy3RA2eWUhjD4uq4VabzKc9pB"
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
