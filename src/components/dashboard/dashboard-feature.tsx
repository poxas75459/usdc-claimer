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
    "5jQHkC1YDVvLcCTzriZfxYcVS7JxgU6z5z2tMRDvaNcdZ9D1WCFs53bDychZD7u6nfius881BSpj4Mj96uvbxAXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KfWnAt4cv8yAC7Ms4jisnPkUBQRkaiMzt5jSWtLBWF7Mwyb6W8YWub6ti2YRk8y3irypd9r4LzznJbCB2AE6qdt",
  "key1": "4ZniLZbSoipJDPapm86UxCSeyv7hAx5dfn7Shz8axxTLk6wNJphRZstmK7pG51mcBCMCXMB37oVNp7hd52ifv6ZN",
  "key2": "2eRo7Y4FhHUmdFsXYYYHCGmpFdXaUXVhu95BfhGJcgQReygT14Gv9A9v7L4t6o7gPhQyL2izGKUXg2sPdm31gA14",
  "key3": "4tKcAQyY7y9Puq1uLDMDpBRiFNcd8JaTscAJ3miALFcZoGetBDkLSRjKbP3pkUtVZ5WbTRC3Nyb12P3ttvnDoW2W",
  "key4": "CAJxxb9md6SAVmtTNrAWQXZond7a7hLWpMEVhgv1KenEwhSDKnhm8JSJMyZBdSewrvxLbMzwpSSmUnv3CjBnju5",
  "key5": "4Su8b7mpL7s2NTaYctdp7cJ89qxNji4SrxMeF2HzRNwCPUsMatxuuRSD4BoxYLscfjGULfagnhBCpYdMKAFZTQh3",
  "key6": "3etgutFXsBuDmdiUfnJae53TRNzbiwAwaqC7H7GEDxm16DAs3VNTk2sxLsTGsuWWhrAhF6iR7UweNS17wXBoA44D",
  "key7": "4KweYHVQb6JHjcnTGSGvDZrJ4XRiB7TrLzeK8urijJcVE5w8WNwcCkr2N5XCozDom29pH7gmLVe8p2We2yMWdkbJ",
  "key8": "5wTyZw5XFL9uMGkVrMBvEL4YMZoS8QYZQSzEzKfZPuca4rgutkALpw61DEiKwpZxjckVyc6QqKukZkBeFT2Ut8cf",
  "key9": "5gpiAUXkjUH8Eee7evYm6GB8swhzMMQ7Q9ZFP3Xrwug3Xv17R9xPkTCcp2kZ8A5VHk9yPKhW9iwsrvV4FUdRoshE",
  "key10": "2c1eJWtL5itADxo2iqWWu67kbRjB7CqakaPa3nwJshEbmn3psYCtnF4dQX6yMear7hK93wfhYbHVW2Bwhrqfo5EE",
  "key11": "2ZjDNGNKLVurPsnKbiSkjVWr5UoJvu7U66SBeuee8ce7TeZbcqoUD4U8u4aQqkgrEmyaBbxthfZz8rthusNu98XK",
  "key12": "UPfD78onbNfzbyakbFgk955zTWf51qDy6oK4JQwLJdKqBUvKZ7JfhX6mSayc3UVGkzWNGysP1eGkbaJkMjcs5mg",
  "key13": "4KAxF3NKpPx9M5UJsDKqN6EScxb3qR7P8EVBCuL5xS8AMnPqFpGYE1cQZZwsDqdPB7DoUx2L5jYHP3S3xMTNKGmc",
  "key14": "pAzkHK7BX47kCGzVfRb7qAVAD5pKuk3USCgNA8HbCzjF6ajtZhSpGcDTLZtWt3ebT8g8gy6H7giuPhjxhff7iLQ",
  "key15": "4YEdawGHEhVMwGoc1AmARaQtmooynjHiTxZwK6SHDyGNdDvEyzVijyixpMpGhTxAft9KFwt4xKUvvkeaEPVP8E4T",
  "key16": "FZrL9yU86tGnND48ppgokfsDqwf2TeqRfw4TbXGdwzjoaoxKABqNnUh2zZQrkEkgxyCJNrK9qZmkD5bJWdzQ9r9",
  "key17": "fL6Ed8Qf4p9HNhk2m3pPktzSsVjLxcCJSGtpp9DdVjq1Q8KHoR2Lber2KRwbCYzCMBHvsontHXUy2UxVuD6UgjL",
  "key18": "2JYrwy4rmz5iLdGWottMkDseBzQqhJjJkkc4yVMkovyU5eAav3mtN9ujvcCVqoF1H4W4vKfpVkME5prT7zdHgWCJ",
  "key19": "3AyUEjr2LqRTmcprZhPBGkmcxA5Uk7HUpACRPCMby6uPKEen4otA4PzzP8pwygMPgywjqwDyEzofd9ECyZ5de92D",
  "key20": "62FmP3GYNPFy7dUiLHFSSJB2M9Dz9eMLGQV8vJgtmvUgKq4NzGD4Km8fA71emNRdVyyzTsVHDRFYgtTKHFr53XkD",
  "key21": "2hEzFszmti8LK5P5S2xAUgmQ8ECPLWVs5StMmMAc31h1bjvBjKg5j5eiohnBSLut8gVcRPYhZVScNsSKBUV8eMb6",
  "key22": "DZnABBxsFLjRbaiAK2iX4MG3N4MbPS9YY6WArZK82ZkQiNe61F8PxGsxnPLKQfHZBDdjFqaRx7YWDQjJHD4TAnG",
  "key23": "5giZwwCnXaFiy3RJTmH3w1RjPyrzdu6jFCnfRB1g9Dfv1XFqf2dMP3wegnsXXnfxiXcDvmcExsHUhtYm5byLPsjb",
  "key24": "4MoqjH8WZYBkfPELfGcsq4HTU4u1MdijFyhjwofTFx93e2YZttmEoKY32wyqQNSjiDVkmAbd6EyUZE1FQ7EFCQfq",
  "key25": "55gKChhu1skj3nsy9XDM1uPEgkSgrYyLf3UeBz8SehuExXcvQSfANyDhGo5Hkzffnp4YnLd4AvyiyAUkNSi2X8dJ",
  "key26": "67DqxbNLRkWa6Y8fuuE3JBP2k2HkiGD4jSmhF9CC7Y9xRK211n6kmsjrMzkSC1ywJbQ8QW796Yuwcj5ZXr5Jda19",
  "key27": "5iR9WUtUa3MQXLkSqpCUAZ4v3vg71gto9HpNXaSuBQoTDEWT1GPYKvfpk2fJjDzNjKpRnEpo8WTNjbtuL7YCvPt9",
  "key28": "3ac6VRqyyFgV3CEJZiPmoFFY3mBTvYtBMYBgSgwt94DMZcqwfRLDLJf3KBCJiNvvnS6JnKm3BQVGqut48vjPCXD1",
  "key29": "3bq1XEE4UZghq7dDXoXSeHy4PbHrL62hyUnv2ssLTbsLfepMf56dmxPytAxNNpb7N29M1HDtx1Tw5cR18BaM9gPq",
  "key30": "51CCzGCuwAtJkFXkYo9kuBtHdEGZrvKokSgresZp7PrmU87XgLQrvRswJHTJ6zLgzg9jGQzyP2C9kBVfb9oY3zUd",
  "key31": "RhaPYn7iSP8Jf4iAf4dXAPygczYxy4Uboz7cvVZKYFGovHeGKVfBNJQJMPojWVPFDvzw4qu6oDtQHefyTz3YxMx",
  "key32": "4oa79J1ZTVS51ReXDzpZcsvHRsSfHG9SjQNQd1Xy1KdzH8iqp55Mn6cDqeEdvYkSEdK4rVBA8aDPUTdm1wJpFh6Q",
  "key33": "GqcnSYZz8FXUdXiNFHxrsXSWAHcVgKimFDzAXwa5rkymeUaHybu5t1Df638pWH2wBKz9B7H8eUAZV6tvyBgau5P",
  "key34": "dBBGCizc53aRysYsNah8AsSnvx6LoebALddFT3cGyHYTgMKnZPrpHXP3g3zgiQgj8yDiYvieu7XFECteJkhEHtc",
  "key35": "bt9VMJoYZVVdhAhArsRqF4nsRJ4g9UTgFgg9UEirUUzRtzwpvmoWH4wfmoGCv5rUkWrXupeQqmQjnWVEARcLw8M",
  "key36": "2yyMaa2SYQZh3xZg1cUDcSYQcuXm2v4wJFZs3Nbc9aJE1EjnQqVQg82ouf7HccLWERdERhRkyV2fqreBpHbHzvPA",
  "key37": "32GbPgFKfpuQd6PxiixH7BSfMbG2SMTE7gvBSG2znwH9ijp3UWRLXtFQzk7nKX8hN8kEfK8FVU1XciuRdHdLSvaM",
  "key38": "PSBvxmqDVVRbPXFbTABMzYmHCVwuNaGH79J3hXT7oZd8NqYJrpajBW28QvT3wfUiE35tFr4J6pZrAZ5BHf4jY8e",
  "key39": "QQw9Bu6g3GmuBNy3EsTsLm8HH9CKckWdtCmGMvd3H4U8m5QtwwJbntETQjTL49j3dCBQ86P1herzDiee88MhLmq",
  "key40": "2X8M54r6sMh6dUxvcup2igZe5ek9Y4bq64iSuJGUdTFJuSyh2RKnmS2hiLCDthhz73aqqJZXeqZw2gDVpAznhiWR",
  "key41": "3Dc6oKEVEaQuiJ6vqwfaRRNG5DSxiRjnTT48wReV7A43HiyY2DkNUQEb5oA4ys6ytocGhxz4JdFWaZR3vcyuqRqU"
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
