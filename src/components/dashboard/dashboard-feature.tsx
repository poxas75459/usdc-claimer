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
    "2D2k61YLo4GCU6DWsh2A2eyQs2S5aVn8wtP8bAoDN4RzeFJTHyhS3wEkeHfkLCyL3db1MZeWC8A8XWfrmhiySpEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5feYdz3yzhkA4LaED8xT4Fcw4tWCFUA7QadqSprZHHGC6EWXzm86zwSf1w96e8sxZUWobRRSaBJP1vcEu3uXSqQk",
  "key1": "5a8RMtNBxcyFwDgfoeMP2LoJEwbpsAnv92qXwfYPRk82vduM8DJYiLGjrH9TZ5T86rAAzpcwushpgtD4EyhMczP4",
  "key2": "4g3tKtJz9Qd344UWtcRn4SJ7nsqwjvof8tLbkmvPcDqRtQrupSUADJWtDg9yLCkwCbfP6Tttac66yr8Jf3CcKBnk",
  "key3": "mnt8qWvCXh21Carg9wpsX9L6rWWPSMif3Yeqsage8Q3LhHSfQq2UztCMAXDJSxut1xrq15UDDmtRSAdiMBJoKT9",
  "key4": "URZe2sttDk3SmowTCg6UeKrCVVCv9ZqULtSUk6xQ27c4LSVEde14PycxyWL5UEBaMx2VFTgGqM1NrLYeapxrnKQ",
  "key5": "2B5QLsbK9jt7WLFMr7GKonuzaef7NvyphbunoxTEHSuTddzj8qS75cFzhf6F8L3yZzjUfQ49nFExXGfZk1ScvHWn",
  "key6": "3CB35Q8hvpRGU1E9LtLFWiq7DhJ5kuUw27DQ5sk8Lw88HdYf5pmxsNBDiGcgJc4bB1bb38ZZzMaAcujHypEes43k",
  "key7": "38N79F4ASoydc1W16DcKz5ehFQuBrggfPni8mqHXp6xVMKpHG1VCoAvyiwaLSdUV4ZFbLScjCFGHGFyGTbm58X14",
  "key8": "5uy58zDLF55V1ZrtNXGc5vEZzfb3UyAP9uzLgz5uW1TdtceY1YEbwpoZTNfHfz1VkQKXbxL3kAeBmvGw3Lxvgn5j",
  "key9": "3LhWaSdxmUtucumjFjHd1rvtdbvKHfwHzAqV4EauAKuTyZ76VCwWum9ZwMZkH4N8Z1RsqSq3BGmqgzy1giiKDV9",
  "key10": "5uXZLZr9usHnXyaP1avHJ2zpjABM6E8cCQNRbNp7hBa16shkvJCWZAeD2f1Ezr9sJrPxaeGX5cFncm8JuueTQp9u",
  "key11": "3cwfLZvx8f9ZWEVHorm3YYREXdSHNcKyinyyHd6SHFMTdJ5aTBWFWQL1ZLHogTCWbZjoNdbk8nWXVrw2NbUm4hbe",
  "key12": "45tREWSr2Ye89VcevwyCLqgmBCbS5fR6Wzm8go1MrEuLnyjxcx1XnZT7kxNRz2c83qBjHKG93tyQHDi6oC4GhnvM",
  "key13": "21TYj2uvfCcvqLRsGCnxynX7XcQnx5MyzHBAAAhT9AWaRELsrmP7azKoAABFA6jNfmFo56eR1qLxanesJw92UMgH",
  "key14": "Vfa6wKF7sDBsfjbH9cSmbpHps9fY3KqUoTX3rVi8fpvB3dkNbSk52h8yJte5TZUwowTQAUvTVgyoqeZmY4kUTaP",
  "key15": "VpPDopH3svTbp2QHFqnBEUw5fEZbt5TvqVDodFG3QZJ9XgCu8cqQyXdtupzo24sGt9qyEzmLJ9736zzHZiETRKr",
  "key16": "2op54N6Jf27tfNMY91pQFuWKy1bSqD2X9n4tNRgLmZ1vdgnBKRV8GQUxi1EBTFu57jhDqq51XDdWtht3Xk9Gcba4",
  "key17": "2dYMK4QaknZbTZKYQi4RKLgCS28XgVzreEW9budYf6QNPvFddVow7ZXmd9gtMkeCDCvLcBs5LrsrDL3f8ukHLTyd",
  "key18": "mPoEwADmWHa5keGMW5ceb6mdjJBNxjYGjYzZLeqY8ZJE8Z9yH29NuZSKd9Ay4rZHmhnv1qNtLfsZKg78gUVisYh",
  "key19": "7pWVDRtdsjmPptbn5Apua3ehYLfNy4NNzHHjqtXVjfUfc6vQwzhA2NivoPCGM3TrHP7yiSE5t5r2W4RtktdFzP9",
  "key20": "47xUSLequn2PL1P439iDoDh3qwUdzsSNuLCmZzvq5Y6YfKZ13ANsB5qKPpkz1wM6pR83qZJg4DXY4THw8tSqpSfP",
  "key21": "c787VBGDwUsAdDcEmaJiib8CLjHTE2buKZoJJHUDgSitYQLwnVNoUscAMZo53md2SAqAUxVQhoZMbG8jUJj85s1",
  "key22": "2L38bYAXARaWAV7n9rVpNpS2AA9K3AuhXLbdk8SttHtQHfx8yfrA9neEU9MwmVNmQ9xrHCBduueTni4dG5DNNB1B",
  "key23": "2naD4Xns8CCDnMS8ZWGj1gpvFK6n7cNH8NCtAMCr5YBKFswVsJbgwGgBCgt7ctToLGDqV5DMwjsrzLUych6Qt4Yc",
  "key24": "5L8uC36nSETgfWkhLq3VC9sv74mqJcy3vjVezr8kpjNaLibWoyXEaKoBUFfhUcYakkBTj5p6KCWspbUYRMCEADxQ",
  "key25": "WEnx48c1cpYD1JnrR3JLdCTTKpcFaCRw3MJ4ZR9fJM6vLvT1ELqTuowVN6GruBVUa9K6wKjygrqwFa8GuddjHzh",
  "key26": "2LALAsB2sm3UZwFSagZXTZ1H2hbN8TTwFVkTaHvL37VHjqoBJxNxUG8FAxrLdxAmVbDtHLmqWk7YBEbh1M1e3pVZ",
  "key27": "vqNaXJfkMnGyVucZorNeh7MGERdESB8CmiTLx9cK8h9xBF1kJA6qEF3qrkta81FN7KZVphun3mboCzxTb5Jj9MJ",
  "key28": "67PhnUr2Bb39rcWhFxkXrCYiNU8NVY1aKdXaFkvLigkkGRmftZVveuXfzAx8UCgy5k8b3QqExwbde5CE16S6sKNp",
  "key29": "4gy2NuAN3wrtkgRQ3G6ENBv564DhAAoiqc51LAWJ7M7jJ9E6GWbRveFvtSqSZbcfsE1QMqxHjg1sYVkCJfducgu7",
  "key30": "3NGZRtSwinL5XxpX4DEzbD8dKar6YwWXb6xmym21Ywv2KoWoLHLqUykjJebvNd8PXGUXokhrh289thsbca9GzTFx",
  "key31": "5xzLTDu9FPn5VHPYjfJPPooPmw2X8HZM6Hq64GsAKUDyD3rd3LKFhsB5gHTvgjgLkGDnk1RvZhpQRzavVFSNCAMm",
  "key32": "4DWaPHFwu4o7KLo3HiccfqFJyjeSxGseeUXMG4DGeVNZZUqvSkJS2Ub5nno1QURCZqKQe1iWzqK3d8GwSPpi748F",
  "key33": "fPz7o7jcn4GFQbfRiVemwm2sQG5PR7ik9KFVdzEWkxiHhq9nBA32WqKpcVvY2X8AQ5yANq1vsyk8HjYuVtERxQz",
  "key34": "2rvTuT1vgW7gAfv4KPVxG7tphw1HVDdBAQ8pkXPerMhtbgtWStbz8vCT1C32Wpta97hP4zzqdXR1QntYAK96qEd1",
  "key35": "6uCDujKLUGnbeUP46gCC9CsBGgauhaZud8toC91NnL5qqvPUdMVwUtmdx4DLm1HtGRSUdSHTfDLtTgkjHNNsBYJ",
  "key36": "3MUMjRGCxeJmX2mbk9xSuQN6UQEQqi7phhHgZdBQKbazcJ9LakzY8ekeX8FQAkAAc6B4EAAEeHGVCWKgDtq6euzx",
  "key37": "4ju84yBHaEeT6YrkaP2HpV3n41LjnxrgtevRsNLS8WtFUfrTKDJ4xHuRSpgeU35SW8jes76oVxqzGtQjtzu2V8y7",
  "key38": "5SQfgKGRv7N7Joz7MUYfmPadmAcPupDHEeHeMGReGXeMW9hBMxTiTtWg6RpbNnoTpppoRfxjSxrJvw8KrWW2qAQS",
  "key39": "3DTFrhwX5X34Zuq6TshN4MSF8BBDkpiDwYPsLXxZ7YTd86eXe28CbDYXjegupwCvkuzDuqXnJ9vT9WzchSrSaf4M",
  "key40": "J8GrNakEs6VhNKktU8piy5fAcSPEaBRsrq7Yn8VWFDoZXCpfQvXuJx2KA53KXB3G7garubc6UakFk8mTZ8fyvuN",
  "key41": "4aTYrqQ2dSQRbWfJh7DXnogjdcqqZnon2Xz5Vbkpy1bDcTwHzbXAbCvJApCsekjdX5mJcmrK7zdZhMXxyX3JYPqq",
  "key42": "2qg5p7Fo3tkvoi82VcnDuh9hr8imw79nSbfFSGXdP8YVaVr7F595dNCwJFoHWq3mSULnciteZJ71wDz4aWA3QaW9",
  "key43": "2VorjQCPNtGX9SQXve3gwH6XQ9mFuQiQhGc3g3p4d8XE47qLzJYoxYqbTgsPc2guArddka4Nzi1yGV6GaEBHc2AY",
  "key44": "Vxh4NRMHb9BZ4hRx3Wawv7momos6EnPFVvqrW9tAjM35R9fE2xqj5GYCNDLvCerSPVC6MdeKW9bb8hE4R49dZ96",
  "key45": "3sprRTysNe2cULt3aMSVs31xTXwzCJDLFgWJMfwBgxoS5LikFZ5UsFP3oDiyRPdnTMiqo2VjgPuR6vFwUnta6p3D",
  "key46": "2YbTndFXHrtkrR2SuyPJKJ2bVHNETfvCxukvhsSMz5JkZsbwzN4Kyiv4o6cXy95pVDxtcTuzM9DbW1yUA8rxh5y",
  "key47": "HLgvQ8ovaENrEFYoqgYkJWzdGQCny3fZ9wiPsdsRfZxZnufnGRGxgH4Mmvmbx7Xh9g6ijZm35uUPXA2ZZtJqNHv",
  "key48": "2bCC8XXtYjKRmAoV1hfmhVVUPHh7zHy6864BRiTpseEFyisE9gYoJFgWjNhU9qNFKrVHkYbsZmtVnfFutrhq93S6"
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
