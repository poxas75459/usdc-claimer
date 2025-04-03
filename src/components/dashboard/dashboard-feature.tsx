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
    "3CbHYmJDigax9oZHd9NDrZy6bcNYU1UHXCUmqaY44Xzixz97BfNWspqFb72zNFpT2Z3yGCf2iXBTLhd4oXQFWw9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62fiopiuxpovbipV8kk2jwr5jvYLte4DMB2C9yQE5z95NLd4Rzwq4jXCcFa4RGZcmfMvNn59MkqG4UUeYkYxX9Sy",
  "key1": "2zGEnZ7dYnSzaLW3u6e5K2u2iRqxoyRmMMcYWgkSuVsrRrz4TN4z5is2WqW3XGhYarKBPD8sQsnEqA8F3B28ycap",
  "key2": "3WiEkzGooYknfGwf8u3u7ZvrHQMskLW6Egb2fpDhLaVnGmh37SLnPoo6wWtgdVNxTCYthhGB9i2tzdUkoTxmFab7",
  "key3": "EpyqdCZxaD6w7g5nsMidapMpP4m5fL7ZuU6AP826dLXjXwMYdkFzyX9tJNbduS1Vwf8qq6UxdPT4bzdND9w9Bvg",
  "key4": "39qUk54McUT921Q4CDUKwwKv1yXDQddWT2Mo4pqbjmEg37GQxNLsHVQqeaa8fFEy1YM5zEderHbv9XnCvLbm3tKt",
  "key5": "5FphdSekysjqoHiHV8ZMGeem1qgHGW762qx1rjj3PMzxAzM4KDogExWmPxEE2KagEvAtRYQ1Dt8EtX82zg8tao8H",
  "key6": "4CEV12sbCCC6VMX2yb1ap6gMzFnfBUDvLUZz2eBWWRZjVkm9vi6Tirav5rHLFaizS8mopsE2mYDcW7owgNZ9JXwm",
  "key7": "58eHyYjjWXhxue7L8wPsjHso69sJqKrn8J8WqbsrAah3g9tkcfufmY2a8oFW8u3QhnDtDFFsYqT5Zs6WWUV4WXuK",
  "key8": "5tkYZpUymeWsPP6PbUoZCBTYLw28JwRgTsjCnNymZj2vmAShQ3R1aP1YYdCHYsc1hjXKPHd1ARW9MWRbg4gQqcFT",
  "key9": "52vGGUpXfsDvf9u5p1C6avH2Sb6w6DQZwCNDSCoXVAwxMSCq8nnsoLcZ3aF8xxPeFPWVSPSAMXvVMzv7WEkovZcF",
  "key10": "5JtJHnmfyznWBWSudxJazkjaHvZpRTAT57DuLuATa4krEE7kEqSU5QAmNihk8Md3vxQ8NZgA21iyUgZmYu1ig1sk",
  "key11": "3z5vK3TBcu41RyvdPMtfHbfYfT2VvgfXxMeWEKWxA5z7SKWNCV8HnZsu33F2TuEmJACw8ZYsUFAEwcGpDUexFA3E",
  "key12": "4LG1o5tVgKezvPpotFoo8QTXERwFrPmMkng1v2wjurFyzDcGuJoUFJ9oxcX2dZsbo1xCcYvLvQgRauhSb1AdSD9F",
  "key13": "5aLrQknrWtAaPyHgFwuyafSmcywYcWvAJq6ZiHNmyc2VTV1MbJrtME764QN76tjnGinJwnMrUg4rfDSZgY7LNBmP",
  "key14": "H99CGPNAcwDD5pwUSya3kr1EGe7fyXBmudTUwBG4m3vtudQxXJR5nuh73U9NMM4ndD3vvzCxpaakjatanEuGD9U",
  "key15": "3hwuVhxNvPjZxieJT5PV772duwLZ5UNDsQhyv4pfJWVwo5hnrhkJvVqnPpLKUVTy4MwEg21iYuVG4Co5cJ5cNR27",
  "key16": "7vKarBDZm4a41BZEQX9aPjzHe2p8qZbm3KL616L1z3kCNiBazVEc4kLosjD9bbfEsmXrZW85Qhu1o2wUL7n7kNe",
  "key17": "4uSr4MZDaBDjQd52e41dYsgCAC8ksMAqXDPNJ7oLex5MoPoWTZj9QEGuqnt6FB2BQpuuVEU8Wk3kkJ88WgkFv4te",
  "key18": "373KSGckhZ69mm4LiqhfrdjsFB4jT9J4LkKmYbJMgMqbc3mP9rFZupYgPYeqftEM7EbpNa3txSsdW34spnKJrE54",
  "key19": "7bQP6rQTzCnmcnMdszRc3pbxbM46Vq7PAiB5twLQ7ykkw4uAKWP4UNLiiFomiS8siMw3oPb3GcTWnHJtX8unoiQ",
  "key20": "4yTYGnoSfAFEkWCxSr4itr9L86HE3FDSVNxqAt2VSoaqsh5viNmZxnNfWqgGXyQvEU3uAsBhsAJu6FGQNZJaqdSD",
  "key21": "4Rwzb6mbJLfyxfJcU2yAsmDG3cmo58vZoePRSkmwZZCjdMA4omsijyYnRgTZ7vr4vY6ZPACu8gpTmpLSaQCCTwh2",
  "key22": "3KYcQdrAPtGavxbFWh9uMrdqTeVueCGebmiRnjj5qFsPtrjy3XEVvFcPtkvFLmuWxsCx3pv77ocVdHQZ18nC6wkH",
  "key23": "4CiVD3ejGb2o75HarwtY7dv6BTVEFSbGwKm9XVdQw3U8aZhSKvf586gmQaaJW9JfU4mPPCKsph9VrNqft7WGUWa5",
  "key24": "3zySoXhm8URMoH7tKechSW1vwrqCZcBX5KgndfceWNWP4ubxF9PMJpL7C5gst4xXWn2DWWhbAgLabnNoAAHs1zaz",
  "key25": "4LodVN511fNfQyULcpYn55hEpL963PkyFvbfYn8hYXMaHh2BJr7o4qhzLfHDVm7wV8r1Q82C8Bp7V84R6m27cqsN",
  "key26": "5w2YDimAAb9qRz1LUtjvL7RQFWs5uqcG6cKzCXh48RSB5fpAMKkbZptzD5aMqHKekZbxAXEiVxnQPgNj3WuegbDK",
  "key27": "WNtdPYRBMKrVSbudpiJhnDM3hGTMo7ijjsuJZSWqJpWNU4zptTr3dvXceuJrHdwNNoD8HriNCV5voG2WtHH8ijU",
  "key28": "31RUExNb5eXeBRAc8PzUCju9wUsRnPiqEUoELppTY3mucgC7ehrj5UYoQhxktq2SFM6ajtLL8z5bS3QbCG8G14Yb",
  "key29": "4VeiyVtHTBXgyG26zq9xDt7QFFxiUHKbSv2DphS15Nj581MgXucAyHJtrR9pSk4Xk8puAUsz2PveE3UB6P2A5Ldo",
  "key30": "3eG5TAEd1vddRxyiLcrSAqwuAUDdA73oh7XVUtkcMKoTMovZ49zYMnrGzYmdryJo1Mm3tQjX6vm1iRoPS1MYme3d",
  "key31": "3YSJWq1HZFNnB7paA6CZAtsFeMWmXNAUkGMadBq2kaKFDRAiom4uXndjNP6GhotvjsSwDZKoFxtkcf4a7wVEYafo",
  "key32": "NCtoYYTnKVou1ygjVxdwNddV58cjqcyJrGLTY376J7ryXbZRxEdR6k7H74umfiQShX5jfXK1dNJtJLX3zdWfh3t",
  "key33": "3zdQSmZAK5k3SX1FpQiEmzS8wVnXXWgSWRoE1CQC3zro5tectqUBZj9kfK3iFsSfrJUWX6gSsxa2sRUA3xwvt9dY",
  "key34": "4Gf5WJRFXX6oeDn8ETZMavH7PRDVCryu6FB5wGLTkyVWt2gFqNUrxG5zdPjiWAgRjVhmaamiFvUoaypRFCE3vmm7",
  "key35": "4c25kXCmoeLhXvHx8MhFXhKtZsP4BBug6dEtWx58Y53UuF1Jd8vkHsQy7GnnkbTmfp5M9EqWVKSE4zRrJz45cDvC",
  "key36": "2siwA7fGDnno6WRDxBDvdhUsQhJa5YGskuyTj8t7AJWwwAPCTDVRi6Ceb6vuXAcdFTVJMTLn1tiroRDJ4g7RF4dX",
  "key37": "4ZpNzPoBvCE8rm72ZMyM2TkRENrhp35nhmYsn3SB8rV4N2UbrPBQKBEzy4scAhZ1ZwyBJmy1khHzYnupXsM1Cb84",
  "key38": "frKxozN3Ko5xhNtPkDzcdKVhQGxjbiiG7KgzvLoF1nRRFqZTrjxY9AjMbBRwuFE2SLb92z62eQXiXvaX6FsBRai",
  "key39": "kcUwS3wydBxKvKKBfdEdwRspHiJztfiT11K8yyiZ2EeguzxUznA31uoPxE3NkLsKVaFkSHzZ7iysKDERL3DJFdR",
  "key40": "3SGFFhnFxjFaGoz7g2a596wpPRsDcrcxLQpGyDk4ZsUEFRHthUhjuyMYFwvESMc2qmSVNm4aZ17RyQxDmDvTZD7E",
  "key41": "4hDZ9srq1AEryq3YUGJuZLcxb7xpRaCnKBgk2GAFrsJSfGtKjXWPt6UtZf677a1DMF34MBhmEzCrNsmK36P8hLZs",
  "key42": "2HZbeEqRTQQHDZsCFXvohqxg24PMhXbLEAqRm2EEYbjV13J6H1qW5JD5vUNjpkVK9HYo8d3mucDaFhDQieBvUJDs",
  "key43": "3MWdGVBrkf7LeptMa7cBcZPJuX5VoQseYWag3jctqTdQCF9nGjofdJ9zkMogGCznV7i9eKKRBMHoz28TKVc1G1LW",
  "key44": "64ofMNGrAEmd4XVy5NpnbW7Ukb3xKpa9ScPoWq3dGuxTyKevoZvsy7m2N9jAR6hGtxDcneDKStjPetKSPizLpw6d",
  "key45": "eQxYVGHHEsriTY1DfxhSo4MdHbR3pMP5i7rfmVRARdCesMZNeyQEZWyxCz4tX7yP73pWmgQ5zPpcvcHXBNgCc2L",
  "key46": "bkmPXNxAKFpQg9uhuakMqkZZgCjqv5kv3sdzUPLmgxf5wmhESGdws9KjvLKmobmknquiHjBJbRQbu2W5m71PwYo"
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
