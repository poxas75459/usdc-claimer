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
    "37mDyHZhoSp4NhB4s5qUKTGnm6yUAxsXBhnsvvGmrj8J8V5rTk2gSvtG6tjp5iNL6Z6vuZWjkjy5CWGXVB6xbXck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24MNDJ4eaFQhCZYJWEiotEjTV4YBBXmjL8paJSZyioL1U7ifj9bTaaMLyGmKyY2WSLsnQKpfjW8nqwjYUFgrSAHe",
  "key1": "2g1NnrvKwN3auKocdAEQKC2c2YJYNAewW7CTFWVouG4SLir6TnUx3k7DFzYQHUKUvr5X8ctBX7LRdFzY3B2uPNP",
  "key2": "29QKCrwxBjEdPW1NeDmtncgLVQk7uEqhMr3w2E3LubWf2NnzzMUjfqxW53HeUf1oFi3et9DJzcQJwzPermZUKctU",
  "key3": "5dnp8y7QTQsqmM6yJdvTUsWxwg9d4JzEhJ1WMACEm894TpTdFhsDy6ZLiWsnNBj8k9wZVAtuZBQm2rVqmiPn7669",
  "key4": "57HSTUfcRbyPtsRMvX3LER7khFizyyU1FV5FiiSJ9kzSCrwecqz51t2ECqHitmSTCfShXydTm9CiRHgLmqvPZ3jZ",
  "key5": "2moMoqQbF2ocMcxttTyAVWnEjyKreqoyimuVDz83iJ3J4CaNz3XtVrLWm8MoUq5J2etfnhHi1FErr1D5mHco7ELC",
  "key6": "bmqHZNa17u5NRC7LZkn4MzwBdXtKhkoz6Z9CL9D4aivWQvVXLw4iRFrhfw3UkdBB5rdiY4w3hEua5Cit4bCZ5hb",
  "key7": "3s4pFMLkyCp6XfYcpCQeccNtFidM4JPtaFXQkq28m5aWrTro7CLqtK321GeLaT1eBqxu6knkDwzazFiGhzJw3Ft5",
  "key8": "4guifbFnf6o7Uu3GRJUn7xqXm1y18xmbThycrEXY6QF2jkv3TunErduf6sGwQZDJ76rTP93YRwRNxKEjwKswvSNo",
  "key9": "46NyCzdcfGKy3xgaV6hSLthPZzFs7ivXjLGn3SLM7cZj7P2wWRSA6gqaH2253hVMz9DzjkpvPP12dPVxUCqDde6R",
  "key10": "3LBgb5NZsrDmo43BnpUKhQLGywTbJc4Fm7b6WiRuGYDS44N4vHXZA4V1ZFw9ijC2e2eR8vkdFQoP7VvuGQakutMS",
  "key11": "BK3rjMPWRwV2BWkGyDMWExbxtLWD6M8FPPQKAHKtS6MunVygmJEmta2Pm9DGP8sLdN5bQaHSr4KytjsTDTNJcJ6",
  "key12": "u5wpc9UoceKbncUR2v7M1rWu39HkUaQrBqxQRDajjJh7H7BjkaaLNgbqdfQaQLHEfEuQ6ioeREFq7YHi7iWR8rw",
  "key13": "4qafUdjsw92wXXMHMn318jy67jB8GaubrThsG5b2fnGKGGDWVwWSqKbErvaBKz9tV3SVSjhcjHQM7tDYvnCVFnSQ",
  "key14": "2afqXYhugG16wRKPNiGK7Atf8M4xoAm49TFgR3Xut1xB9iAaBPmggs1XYGoadSUnxMJKHbhmz4uQF9aKFQz3gjvk",
  "key15": "uDMmqgEhYYrL1S36nhLC7Aaejy6vL9g34hJ6qzFKH1u2YCscYcKaUhzFz26atHz9yqFm4X4xPhEUxnSmJcTByrr",
  "key16": "4hkyb3KZKVkS7s9D7iaQi5KtnmWCBs9H3hrwcgcSwshndHFaK3cSvfEDXXnSJQ3me1Qsd2218Qs5rvnGVr1oDwL6",
  "key17": "3x8MZoYoeyjHEPZMQBsJgiGJg4yHt5eZiF6K1MppjpZsQrK3Cdv5agDiV3kYbNa7DZaMSzPYbGQuF8MrbWK5ETir",
  "key18": "5PLZuYjAT4vPvFszwymDaTgKjnCgwBxqFp4XGyKg8VHwR682dCKZiZF1vgigsn84YNotSR7o77kDoP1G4cDqJedz",
  "key19": "3Zrbfd5VFX6evp3hhwaKFS1rue9GEmFsdwKGp14zE4ax6MLwX6vn9T6VjUGrBdiJivQaasFCaTa1Muk9Fcba8ygR",
  "key20": "5RKWa35QTrXpU5jK8kT29AdjZjGapGCT5P7Zg4FBkLJkyv8hVB1KuMuBQfy55ZL1tBGnnvYhFLsTcmfUNdcT2cDH",
  "key21": "2PwcoJkDsPWiKbnSkaqWqT4riCks8JdNjj6NrLCVyHw7yqRQBkXtNnf8rETDt1JbEyg2Lw1MM5eFpZsPuheubUYs",
  "key22": "4hKdtuubXB2BtJQ3bEgxdi19jS446CSsbk6TZ9PD7AYnbnkEh2BGnN9UNjjs7BTevGgQACpyhPTKJFfdfJHjm2nF",
  "key23": "QRRBXMUMMacnRCovoMK1V8mkUCeXhUhK3aPaV7PngTvSh81NmynY9smokpa8HEpUeGiybrLzgh6EP9Z12ivUScx",
  "key24": "58jE99A2m84Mgtikoup1VJ3Mrggw1qjNjdA5oqhkniBBgCUJ599rwdWxaEDWyymkmQgoeDPTPfUsuStamcJEhMK6",
  "key25": "5SsENgi7YQjDQ2LHT2VyRaNBU6iSJNZ4DHjqcFjFinSrBnAWXmcATdFAp1dAthvBsyQywexhaYmY2cMwe1xrrcCz",
  "key26": "5s8vDw7KCy9FibFjVZ9J9srNET4FSUa1BuUBrc189MwshMXeec6hdaCtUxe64RS57FDyweDkToSQyN9CYtrrPWc",
  "key27": "1teihMCig4vXNCswReGMnQo1qsLnQfX8JkporgGoqDbSieGhgQvBxAka9mvYb66Mv8tbgkGNkXzWD5NCibjBAUu",
  "key28": "5b1451BSfYa9HYH52gvvcQtMZ1SFv3a3S5A9G8jmW1JKkXTYqyR1qky9x17JA8CRNzLAW6sxxJtw7uGyDCbLopMV",
  "key29": "63ssodoJhyVCm4AC345uvS8LZ1t72ibX3LL2HX5iNWpLxHhTgMnYio1u2Si64DK11WtXN31Gz65giRCna6HaH9Kc",
  "key30": "2EULxvBLUzZkuAKDmxQ1xR7c5F3RFgMUZFM2RL5mQKyR2iLehQBbAHpxZDz5unSL4MHKuphBiQXniYP9dfzgoUFh",
  "key31": "4MGsRbTA3gNQWSJpntqgk3qz6by3BKYM6bxFCLVdj2EuaPHQodATHVCFvTeVR5WvLzrhrh6rA7vS3VrqGNMvjsJ7",
  "key32": "5fzxft5v29hw4vizYJq7TnQPjySBdz9NyYm7EPg2NnAUqF4TF12VaJLXmJBAm3vahesi7zZXruqPvAE4XkUuYiuD",
  "key33": "54pWBYig234quS6HtWPYnjmscZqUgQdREvRdXvcumANFBKpAgKopvNa7HmFLcqEMvDF4m4cArc4DbGkmtBgYyVY1",
  "key34": "3igaJefxAdL9kb7hBjND85fpVYtt7axtJXcFFmFQffWXqGoqPoQEhEyCz1TL1VgUvnX28QBRuPGcbn6J5GppJaNb",
  "key35": "469FbcupzHuUQ3XJavNquFcZ3GBvLjxNRu1ZhJHZjHeLhfpoyDz5pUXEvLywwrd9Mqq1bSVEBRZLnRfuC9azHShW",
  "key36": "3Wda3HX7vp7kZJ2twL9bYyGc6yYxs1DJqMPz31TNU92xdgGTAtKm77Lv2c3cExtB13L48Xmvvu3sf3qrmP2D26RW",
  "key37": "39Abwyv4hawzXmD89En8nrdBPEocs42e3LdXEABTfLbiF9fxVnMdA3cd8VukPsyLSuxsJCs21rBeDFPYpJ41Jyz6",
  "key38": "42CC695mW65a9xFrtzJXZZL45vCm5Vw6rif6FDimFnxq8v7Pf1Mtj5NNy7ht7Q6Noc7Ghqvm9HaFrjHTHEAtiTVZ",
  "key39": "2ZSVUMdJSCn472zBUeWVeQUodb2E9nm8ivxrdNHLpmBLYhKGvpv5mJB7NMFV9Kd8k3QwMmCiSvSkKAxrugLmAF8P",
  "key40": "5cKKcpNUNUPC19Ep8ky3UX6MXW94hByt9PjJHaKSfPcFSYjQAhT6iUVq3XUSuwZQkZ2A55nV7NyGdB1HqQCjwYMQ",
  "key41": "5xVgEzgQNsnjmsosLxq9XeLBjbjuqzPUvBdha88YMniaSqpUF19UjzULhVT9sW3xv1AvxzNRQThkTHtUUx3DQyum",
  "key42": "5YMuDPZ9yT87BuUNGoEeJgYkbvfUNYU1h4vT8jRRqLpygWciApVmf1vZRJWXUxR1hzdFxWU9u9kWkGqLfuSHkDRr",
  "key43": "3MDwAbsmgtJ8xGmF7UFmc6DbHChe8B7eDCKaxM5EZ7j8eGheucVAHD9qNZgPc4u8u2GzVSvVLeoz4Vsqf4Z9bxyh"
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
