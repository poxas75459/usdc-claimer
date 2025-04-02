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
    "4JDWPnT8VAvkU1RUQGyfmv8oP7ua2hGcjKeVfUA26Y8hSwWqAqfuj5Yrw63Y7hqHCwYggDDso2jkKWhbJkiPdRKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fdYU4sJf2WSEsXZGHyzSqU6jFhXWkwSV9qQZyTTheFi3ksQ1h1u667m4JiRG9WZxgcgn2cKgCpqQuY6rDSj7xZJ",
  "key1": "2cD23eg2nDf4uuPhVtW2CH1rfwUUvF3NYnPjEiM9QRZXqBuQ2AK4JMrPzafybUiJU98P8bBkNq9MPCoiTwkdqhue",
  "key2": "3fdubT5nsiNzCZPT4QETnzU6w76LbK95M7GFUmX7iauogj3AaCJBwko3CDDox3KbtAjE7zSXp2sXh1wE7Ecio86L",
  "key3": "2PY2Rp62jnFJh3TRhydW2ybrrmKFeChnSZ8Sw1CQN56YaKAaYh9HbV2QXT15vyd5ya28KMWZLZ269SLNBPtfoY3U",
  "key4": "Tp7DRz7VayZB8GgpvqA3be3whQ94SSpujs1zExedDMQEEc3ouWfmDtc1hRjvKBk5zMhtEBVik92gUyFUMtsh2fQ",
  "key5": "62mTcoaWfUVWVpN8ffZUrYgpdLJETdNjdWsDqe9HawYvQuW6Raj6SuXdHM11JC7SeoHfWgazKKpP442pyXYVYm4q",
  "key6": "5Gt41ZBfCTN8NoG9Q2Drmzj4fryVQEf48yi7ZtEEFhE79TMfYRVUa4VRGALEFt2eGMi6bVpisE3tf86Puv2Ho1CU",
  "key7": "5WWokf4JGn9t1jXgsHeUvCAwxihfHtSTwrGqtZzqCfrsJyyNsUULYpzEFmiLB4XpbLaGkUehd6VTDz8S7GyP1GSv",
  "key8": "M2YSWK5h5fuDHQbZEoCKJyP17kxgaw6biVtvZXRH5xBqqnwBUsBoHD2Fv9PKmHjXNUhhrCrfw31DJM57b2hcR5D",
  "key9": "47aKwuB7jGMf1KPWWjznSW6XXGVadcN4qDHkuGEn2E82kx4Q2R3gskigHtiyDQhCjqihqwjCAMqCoaEBsWVTp662",
  "key10": "hQEJTiRLGvbnHUnCPavpqXsZiGeggRCeegETcNnf26YGzzt2SyWbs4ff9mcHwUmB6cNLiCFq91hURLDQGSv73SM",
  "key11": "C9vcXuE4gMBTAh6UCzVLi6X8dGgHSeRB7GgHFWMWZVDESYDpCTDxHywwVPUmpe8mAc9cpZJ75FJAa3akij68zrA",
  "key12": "5wnZzRjPMHzYdvs6vz37SAdunDwSie5ybxwsxiZnGSyYaqpwJjEmshRbtEbLV7zsVG9TPjZ2WQuXf8tHv9FpJRk8",
  "key13": "5xsQwasLkPWHDdHZHedhDNjPECMZ4HzT21tNu3QfMbzWPqXiuTgpsvnUxkYRc2PUgHaifRMgTei1JhVZ1GV23pCw",
  "key14": "ppQPJA326YGeZgKWKLinfzLYmqM9HdP1fRK9wrwXGyr5QoLK2Anfna1683gsTEYs6hkLK616EmTDkjL85wZ5VN8",
  "key15": "53wfTcUQgCc9vx6TE2Yt9A3aC17bgsgn2g9epbhc6jGD3V5u8ug1HjJPXMf25Aps27zVF7L49Zwc8G37p86vn6QF",
  "key16": "5CJWwGGw18G7rNcL7AUnz7oapQpeeJa75msG3YgFBpLQ24wDX1uHuAtRf36QzupKqfdR86i5dY6STzGeX9Gbq8oN",
  "key17": "2L6NcvrGUsLcBs1Y6c48pBfg3NTPfWzUPixe9Wd5FnU7A5Cmi54AfYsPnUGzkrbY64cQaZQnzcgYW5SeXUcNGDAH",
  "key18": "4J2rNJvR2Yoc3ekERxYFfyvv9WuH5akUX1mMuXn88ZUg75sb468ysdNXSq8Wrt8q1C9qYScGjMhLHq36Hta1gSRL",
  "key19": "5HknR8yBpZeDG2f765gsuQuHb3RZumoMj9E86RjfPSUYMiHvJMohWkCUSUmiC56mRC9UzsFogdc4HXKMjyUxh8FB",
  "key20": "2gxZdrNzQbr53ey7N66WovSboGXrW4hWpzXZ4gPXfzAZ7jZKgfMPiKAvuCaX4HmahKbrunnVRwfVUe1YxAghsfLU",
  "key21": "2i3Gc5FkjXhWtEvNPQU1oSTqRmeJazDgMc6obWUyi4QXd8ncUBAYWedo6HFKBVyRaZCVUNbLDVigktGwUA44mETp",
  "key22": "4JcKcbcz3wuZFiYEaRZGroiiSggQMCG3zu6gZ95ySQARm9UXgqMegRDEHGcmhd8Szbk6zX1AdKQWzsKo3hjNZgKs",
  "key23": "4d58uemzom64ZXDdVi4HEvfPdhcEbCk2ztm6mx5Ny8oZWoeGgRbsTLZbw7Loh6MoVwiRYXnUpCfWfdhMciPuh6Hc",
  "key24": "EZroiSrouvvX6N7b2kuoJdfVEsYzqCS2Tz8RHf2N2BVk3rDW5t3HNVQMNVdikdwktJKcivfQMUTcehmA6qiUNNi",
  "key25": "3QpMM6qmH8vpU38QqRkF6Kk1eKbnKk5zjh4uZXkr3yPvAZ9611epfgSkbpeNeiXNDRQbtjHcjdQfgkjGfkEG6He1",
  "key26": "4b63GpETAhCJKdMjjfa7QNf3RdgM8B8V3RcYgKe8HysXGM19aQyyzviSzRvUBeLvEGUULAE9t7uZcdiSubiY9YtL",
  "key27": "5WN6Cbx43DCpyXwQKK3PgYqHtpwvvS4amgxiUCHe82anJpuC8mZbQ9Uv4k13AtahqCBZBBwHDM8jRDwZyj3ZswGP",
  "key28": "fmyM9DkxbysbhpfxsARrzc4xMWrUqLTJArgJp2jufvd9bs4LGfvermmDBhS4oX2JLbzxu8c89K8jMBfhv7et5zZ",
  "key29": "352FoBzfZJJvErRH61NSCD7F2FUDCEYyxY5qfwvosyADYyf6Z8yZrcidwWhafnxkDyBiCFP7WDwkiTvKdjmvz5jB",
  "key30": "2bnfPvNhDhCfTisoWxsSMKw9dqwp6tN31caMbdRvn2VpQeWXgEdUayVMuq86q2hAXqsyByHUa85LBjgwPL17gDg5",
  "key31": "5NK6FoN8jcvM1W3J4vZZLwVti8MMu86gAShXyYgBYNfEA1ggnisKwnhv4kVxXWMGFvGi29F494e94thGkzEwRTxa",
  "key32": "GsCVcV4bxoxkTa6V5s1UawJf84hoMxVPGdGRtega5JGKjNrzocdMpF7uFAS2T6RqAAHn4tYXBJqffovem5bN1SD",
  "key33": "3prrhke2YVNeHqRHtTbvYhynLT7FngLDvDYkJFx24zbut7fkN5eNWvWnNe7cEhQ9oscWnpCxpTRp5RhtcRh1RpKZ",
  "key34": "3XNnC82vfLZuyxER4gfSczG66HULXhEn3GurbKpNN3puxmV8bs4oR6JVXCZ7eZ5dA2XwyEcZopk7go9UyJLvkvTi",
  "key35": "3PgB2g9xg34Y3bf4iPCQ3qHUjS8UDvAUcvfDAvUEx3L3iUCX3LJEgFWZfjZMzwjHukN3vSE9Wgjq2yhzhCekXn88",
  "key36": "5w9Ray2xhbAx9sCGgZqGY6x5vCxi3WoBuKEbh8s3DTs3r3VimZAAfJJ1i1gGGaLM4mARmswPMb4UVceYoPM52Hr3",
  "key37": "27oDTp5PgxpYYbyVY4DciBqZofzbdh7erm6r2LeYThzLXq1FQrHA1eWG6GzJR5keCsqQVZ2LBbRb7RMqzUyLv1EK",
  "key38": "572JHRp4U9vDii9aTKnZgW3fBmvApzwFtafXghiK7nBmMRZr1jkeEZKmVKYTZcKV14AWPuHLgFoFA2dhP1VQGyVZ",
  "key39": "3dM9xqkdKRF6EGMrJrrjMXWhh2Y6g71khsWXAGTgEwinKTkDQFsXsJ9Rt1MNnCgGDF4R1xdRWC8PqFoWZjAeshEg",
  "key40": "3BJgb7HFcB8UGoxpz7zUWqggDrGcBvbDG612QSqQhczaYNb8VzSKbTade2PykdZBmDCwLiUNcM21oeCQdmhFYhof",
  "key41": "4snpCa94v5PFWzrfdySkp37wQ7Q58By9XgbAdeSRSfRg542WEBv1pgsJot7Xe4scexghhQvui1TTyNJwUdHs8Em1",
  "key42": "3jpJUCAKaGQV7A299d4YkejKq3PF9A23Gb7LWdhmawerR3dsMPia5NyHLkwBZsjMiqiHXLgsZMUEZRC4E9rwsacr",
  "key43": "3o8XZymJd1Js5mskBupvht1ZK96EygE7W2e4QuddFWRMSyTeyuSvYhyR6jngvmqDMkWUFrYLDfNs29ypMpyCne5d",
  "key44": "2wGVvwE4CMFjVbdR3xwBQj12d1F7E1r3tbhWxn9fTc6XzpWTxpnP3rak2HP5Jkj1zYiGTGkuEqP4KUFL3Jq8qeWZ",
  "key45": "LaYhwJPg1YKTqcfErRJABCqjNSv87kqX5Rokg3RrB28PuqP13E1wWNgLRpGSm7P8hL6NmzirBp3Mofu3acMH5dT",
  "key46": "2hsb8fE2vr8MnPtSf8udcfdSDzxwPU3pfJmj84ZMaaFYdQ4Uga3EKJCEXaPDRiu2R8qpS6uFK1ARbtkpBNeutqCQ",
  "key47": "4MVTobH3mwq3hP2ATgzjQznwywAT95duAUTCWUXhVXfUGPCzjRvNmi75BKKXQNymMoWVfPv2qtEYmz45BWVrJH4R",
  "key48": "3F7gB4eVgqa3KQEm8UGXNz2Xkx5zDnqF4pGzHDdXM3D7tq6jXniLrhGwtqdifSELpDWBFg2LmU3b67PVei2QFwAH",
  "key49": "4cwvUPpm7DchwrWEuDGiLKsFhuBJWQCJMMDxxHzSn8mdgigv1k9QVGpn12ML2mTpSXH3DmpN5rsRtXuXXKTiKki1"
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
