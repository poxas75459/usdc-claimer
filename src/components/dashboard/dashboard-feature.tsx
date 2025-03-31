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
    "2KKgsTQo8ovCSAPbgG23ovEdfex2BVJ6Mzc8FKqryqEFbt452po21TuPhAsk2AjdCjz6JRiotYUt1N8khps52R9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "332H1ejti1HwgWDXRRCgyD9RSUZcVjqrxYgg23izC4R721VamLVaKiyDebCte59SzUCQAdDGnWPevHc9KQ8SmEEL",
  "key1": "ixP1gd6dy2piqCfng5FpmLfoYJtfeY19a5YSToJSLgF8pEgJq9dCuoVE5pga9ekYisgaHAWonJG1SnPM1VvHASi",
  "key2": "4xc1kReUBdu3ofb3Y4CEQ6MgER4zVWLEEpGLnRZRZAUUtYfBM6soQEw2VstGz9Twd9aM3iXbiXbkomneecqX8Yr5",
  "key3": "228xEGWDC3TvWkJGbZuVZoc12SdhjdiyA9tPqa2Avu9nfG9pLNkE4P41yUxWP53cst1sVA6Ugx2miTUTnL1NnrN7",
  "key4": "4GessyemzmRxkvBHXWKVtp99S7NmfRuF6K58dDqQHVjJ1o7Ftt3bJMp92paHr9LK1NXJjj5SHC9ZoQCymge9XsK4",
  "key5": "ykcP8hGBnbt9Ev2VxVw94b4cDsZXKwhsSx84ZZ6r7kDynnEWw5122reTYUXxqY68PKD7Jf8t2Erd5NXXKGBbkcD",
  "key6": "yjmXNDTH3jhEiPMfoKqcFMFyMLT5uWr7gXKYoWpdkPJuyj7d3Y7z6QRxg4ymY1f49swXAfRju2DJ3SP13d5nW1V",
  "key7": "2D4Ekve1Gt1xkXjrammY1TG4f8D5rcUqB3VuagxKusfJLDko6ZQc1aDr1ntGU6jejc2jPAYkTpn2YoCJvDGxQUVC",
  "key8": "3doT2uP9Tpc2A3k35ZwoWnCQKTRdT8ULp65Hw2V9xLwaGFCFn6Vd7KfgUUmsVjLtBQmqm2ATwfwBQ2gGrAWwWJk6",
  "key9": "49umBDtP6W5gEJASSUVdYmYtnJkZgTdEufNCLeSws25mP4YaBYD3swZR1KvC3Jm7UsibW65WxF95GHF2cqUcKSFL",
  "key10": "2EqK1mQKTf5nXkKCNDecYAcW8or2oA9x5VKupYycBuAaNViJ4wApqhYYRpeN1K985ae1D59BGFYPZxy8j1iZVJiA",
  "key11": "gdRHFZN1LRX6HqHXp5c4ZJPB6gJ58HvrNMa7LdzYTk12AShETAEixXzKtPEReM4wCGKY9oSZGLQXHpziLzCv3Qk",
  "key12": "3o7okvCa8KhDu8wyyGS3pdhbDmnxWoScLfixRknsdNHd8oigiu9hiqgcdtcrRB3ESRVAPXVGWhN7kpn6ae4QL627",
  "key13": "2ZfHuccQoP8nN19KM8xSoxZqspVJJFiyXCgGDh8KGPExHq6NgUbm6v2oFo3JZND3g1RJwwoAgFZ6MccJ2xYCZAdr",
  "key14": "29BB2YtucXEYbsNDrPoN5pAjTx8ZL2e8GmUrQupfD9ivb788QAiqDnFbmpVeedzUHk25SgmzG9mMqh3kY7FFDot6",
  "key15": "NVWbzuAKFQE6HWWdKAAqkNUHsGK6XnGJ6b3UJLmppUwXHY6xm6R736ASe37zZGZt83od7oxrwZ8AdJkofEajg47",
  "key16": "4uucRu5g9p9aPpuqCybyafzXxdV5FeqAH3mLUnXZsZLxdYjGBvjaxge5hzGk4PCz9hXGvmHdbAAoyuGsRDyuEpvw",
  "key17": "3Tgn9iGgR65G52wAF1U1pJihUjTxyDShFNMAZVpPS5KN31vK6tWgz434YmGaWpGSvLmp6URfaJt2ZGHd9MYHBTBy",
  "key18": "4u6nccW1N7f2TLXYRFGwrD4FVxhsxpmZmxHUGSbzagrZed9wZG4EJW7skAhQFCimpZ72RCsBcHwgr25swwo1PaXn",
  "key19": "22paXDp2aCvZ78PTbwQEDVDwcntmk3z3vy5pLNjktimw1Nr5T1vYQkfeFPa35aZGrhLRnz6msJQxFU7VCYtcAgqX",
  "key20": "zo7NLa6Fbcy41UeoAkg9taX3Gcztnw3kHvydP18omX59QcY5uF3XHACCwJqYhnZEnXfG94MZnMeuBb3GrUypjfU",
  "key21": "3RNKu18es197cwrkszajfk1JYMtcPr3VYWWSNLYcpxaykEb44VUuVa4geBrarfXaQz3hSy84dPx7B6DoAdEGkY69",
  "key22": "VXFGttSHrbiXsQDG7hvWE4CPb9vhgZMmrkFZhXM1Z9MWHpbLTZEDvT6c3AaUoKDsonyevLQtDM2K6RaDVuxAvt7",
  "key23": "5Zs85PLYhRSYL9ZTBTKaY92Mgtd7UdYEoSWrUgZBeqkzUwi6XmheM1xwPcu72p6A75L6k5sejiFpPMrg7yrjhgj5",
  "key24": "67YuBKCTFXFprzuaq16MkByDp5fHGiUHgHoeWCwqUZ4SqXCDf8jvVomSL3PcEHxR7w2eFhqRJ7GSv6rQcqnvGSJT",
  "key25": "2BxRGuhZjMf6shpWFxQLBrxd5ASjkfAQq7dpEDUntAAjNRKdBGnWRs4LKby1RRTjcC12n7dKpm47bnQmSHYLvYy9",
  "key26": "4Xg2QCPbbcbRxHscF3PYxwSw3S2TBBiMM7Zy6pU6uigLXaqyBZVHMaLf2R7QseVjrRiQwCb4evdiT4TN9cPDc5PH",
  "key27": "4T7AeS9jKwXYasiy9mJb1E9WBHQvHnVgwKcGG9BkBJuoGAmcAPxhgjQFkWMC2iQRtoeGcJZSyUgRVeDrPffpZ3Q7",
  "key28": "4oD9yf7UFtTjJ5R4jRf1FHiQyz35px3XzznCtXpUb7ZAEDKV1pSDj4AJYRcwstvVALZJiFEraBvf2DHDoJkyQfCP",
  "key29": "3yd7iNqjFAiKqaBy9g13yDfFwsypw53M774eYk6gcFjfGbs8Hppj2ybuUSSTrFPcFizejp6bBnNCmKZs3RGBWz14",
  "key30": "427RPC7ueBPWcSxCNmf9k4kE12Au24MfVEP95UTtho1HeqghxnF2f1mQYbRm7ad8dNL5Mf9EZahR4djyGehV3rRr",
  "key31": "25wxW8mHjQAUYU2X3FKdj15jix78hAEP4vF9ySp9jwZz6UgJgiFNXHBQneKWCvwoC3S5abDPiWNmhQMcxTQ245mY",
  "key32": "3roRLF6kBf9iirciFgGBpJN8cQNAGurCoGbGqubBKE1xmAdjjGUtyRRkA2AyA6WdHyGJXLHJkgLVvoCAuZ5u8Tyy",
  "key33": "4QzbwLzVwfBikcP15dz92dRNccGMa5ybHKLdouTrAaHuPeMAwMyXGZSTjJwrjZVKV1VvU4ui9NT6fWuyMb9PqQfn",
  "key34": "2dUfvGf5Ezwoc6oMg5TYcR8knyL9CJt4H2PCGxiCBihSRUS8d1h3XENEuUBFV3h99TNieubQ9V2HXWxM64SmVkCx",
  "key35": "2fKVJeRdhWG9GfydSKRD8A1FEg28q5SwEAWMGPjKQYuvNemVZ1txG4U8sBaBssqUyxDMN1FKPa3yaZ1MBArT5dLk",
  "key36": "Ei6kj9KCzuCwjP9DBw3TUyRxQ6nvqgSR4s1QPztnhXFcCa1j9bA7rMkrGZZmhnmiq4fNJ2wE3Awp5zeA1f6Za4M",
  "key37": "kKFRxtnTpdxVWe4RYKsUE6EKpGR7LxK263o1CmXunhAPFRMqDZjdiECe2UASve1eeqkoht4yZQZWkJR88jp6Raq",
  "key38": "5JvGmzApG2NaHPDSkGydCRDYTMk3Qy5gzupx639gysyghy8bFSJtcmJLi7HKjricZZuJGBtXjmwhbNxMxTEVETVw",
  "key39": "3BEjrTUjeWJqU73hBNaxr2FxKVu52AFWskEjUcpxYY17Nk51SAk4QzdsqXWrceDfHHshvPpRNmNxxhB5gqUtwBbH",
  "key40": "2QZ4p2WTnEznGXQF4w1PuLdfkbim5MPaYvsZYm96a4LkDpDChyzUVyjhP7F8ShdTAx5bMaZTjMYhGk571r1F3HGG"
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
