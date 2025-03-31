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
    "A2FqkQtAoThrHpRweDSsSws7MU9MAPck8o4C86JVVyPPvS6u9a3h71xhNdnS6R9sYiEiyw1UTALTbUsSUtJKfCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eetREw7bKi1Q4APZ9ftGeBeZJbweZJ45mTgd6sGNoqiPevRShmR7gDm25QSzzsmFVprcQ6JbrttSVZiCHRz8m67",
  "key1": "5LFwDcMdkwJe8q9eW5FBxEDbkCHKLQUryS84WuwwieS2x5k4cshtWQjeYqg32VnFXPbDG1yoXqBhDx2tARf3wNHv",
  "key2": "5JDC8otwftcBHFuMt2hRY4KnCdJSnrkRBedqVSjANhcniuehsNRRaagGhWbgQAfKtfdodP1AFhPsnBKJjYUadRLF",
  "key3": "33GYhhA3HuiWcht3hmyVSDdrskpzsvsbTTcdNG6UJSmxxMzJ3JchR47yxZM97vQDG7hBZd65njS7C1PQ2euVTf8L",
  "key4": "3naCmYN369B4VZyr86hQA3fyK93RYTb93hNXLPhZyjp8Nn1G2JQBmiPncxX49rwyaHS98UHpGBwRHQTjqkZGtANN",
  "key5": "4wiM54oDhXU78Jkgp91dg6116Ea6HEUvgBZhRGyRLoocREXNiVzYz6gCd662LDeFa6WMmAQHnHi2BobATpAoPp3c",
  "key6": "3iHNbo2LUurfHPj9yvJDr1z2dgzB95qGf6mJqfyZjtQWrk8bjeWSB53Wf1M8aU9soD2zJpHPxRBs1jxWhZSoURpy",
  "key7": "2yNhDAzoCPYgDGArZ5K5Zb1YNrAhEfvMLsp4HMbEfd52hY6119BrBwG2wyQmpUXeeJx1Xcs1teM9ouHo7f8JAm1P",
  "key8": "8Buv6pLo9kB9KzJD9KSmCtPTFvpguc4f2ZYoGYn15UiG2xM2mv9PiCo6GYK3T1qyMrX386rbghqoyKgmZfnPntg",
  "key9": "2Jt2QxrQ2jAACs6KyULsGTq4a3NxBpKt8mmXvdEkHfGCh8iYFvvtYNEEeWaNHuQCtG7rgfjtjpWJZ5HF66ab1VW2",
  "key10": "F1iv96gcJvTdhRr9apefJrqSzEEpXDXXbJPLPqhBzFJ1T1CciZEu7cWHPkFQwi7BQnqw8GrcWh2cCUYdAweTeBD",
  "key11": "32MDNjbr7BWEG3pxzju321Z9KTJcRpDUG1rnAVnFDerSHJowozcgeyVs3cQ5uTZ1FzKtPvxGvDpAv9HALVHBXWLr",
  "key12": "2B1965YVhRbMqXRkLtWKXMSoz8tCrsT5RnSHSqEXsxE7wpnjKCiTvGbaUpMFFDwC197JyVZDFKuXAAuWTcFSQry6",
  "key13": "2QyYTYLSnUHytPRYJcvj3ryVu5DchyEb2DAaNe3KCjnSnkR2423QsRwJVUHReMY2kP73UcVCJ5HYWRMieZgANgsn",
  "key14": "2w32za2pHc6sccfFD8XwEu4A4vFrTVWXxJnwZWxXtNgVainjtMu9zDV6UfeNChRLpSrYaqYYwF5RPdTw1Jr9wawY",
  "key15": "QvZWc1VhuCLQ5XuKsKRVnuqvpCtzAqHCzVu4DQwZJBXpP2mQp2w84MdVTvs5S5aritCoLq84DF7X8nkjiR1nX94",
  "key16": "5ALZ2xw3VbndoWdFMHcqHkw2J4sbr5c2f17dkqVbrkUsgK98isjk8ys6wrfcy2iJN94p48KFQeqUfeKzkbH59SPi",
  "key17": "4ffykvJQ7EAeCWcRFtWabFs4fSxgeHD1dHbau3N14NW6dhXjedDVqUKWUzbNBZPV92gcgH5yiHvp895pocLCnen",
  "key18": "2Fn6nfcUQrrK4Lg4P9DktkUvqEbecaz1Anq9FtffwxfAHTUAvxTE8FASkXzojsxkHypKcZtG1aU7ZbKSkUMCapZb",
  "key19": "3zNzhfKRgBUjcEpXThErfM1QgkoEg5pfrmc6m9zcVbXeq5umg75e2HrFXzvnxAEdpDwpaxrC6pQSDBg5LH6TRzC3",
  "key20": "3UYDfb1gCQ732tuof47yE92TJgxYd6qy9tFK5MwB5KMRKKpybBGRS3Nwj7RyWn511b53jY7iV5M9LLCxd617Qd6T",
  "key21": "4RxGGrce97fhbsT55GbqXLw9DwAmKtN1471TyahMCvHmGmWMbNBzytqUTfC2JW9ZdVfbYxmqt5BLdJxvd74bCWsk",
  "key22": "5hvQo94HouLxMm53Vtn11xx1kj6NTgHnvS2866kMs9qni6aDbTGRcG9QjuL3ngCrTJkuD4gHpvjt2zxmSrSTNdFH",
  "key23": "3Zqk8ix8L5apiHaQHeYmketubi8wdbHGGzk9H58UKP75LXunoDpWivGVkkcxGC1mS3R5ismaamRP2TSHuQXs7LN5",
  "key24": "5Kr7kW8YcqRqR2Kc6JAbTpMULxJaKBJqUnxejNeQ2oibydD3QVEvw88sEjL5yiozBhdtvD9j1kEd6eTarxT9WEf",
  "key25": "3hjaZQy18TNQgSJXayoFd94vJZ5xsA8EmXMADbDTcXnLDSECtafJxWnk3v7xdUWhNnobhk9EsL4sVS7yabxkNG5d",
  "key26": "4RKLGwDkSgrMThctL81PaVdkwHW9ngFCUB1JPL77trNXWnNfJGg4zhNxgD18UKG7DCb7ZAF3wLtvTeZSivtDLUJi",
  "key27": "3AAgEfjVQqnbJWqh9Zyi1rgrNsQRVT8kcAsaKzaevqUUwoEuDJbohNSWJNphoHLfVsqcXtkyDoSD7buD5KTeozPX",
  "key28": "48L5G5aFyKwvFQG67Tg7nz9H7ZzSdVjykSmYSRWAWvdaPkDhaNBuUqaRz4NGdk8dBmYvxnR5LnTGKtvFLBHQf4fm",
  "key29": "2MupNZkBSnhUBKEtkKrw4jDokfDgt3Gf36hzBu4FFYmD8X9Mk8oEk5meJzAXrtYDn4yPEYWK1p9Xi7h58mDfy3bZ",
  "key30": "5JRMS4MSSZdkKcDEvBeH6PBjCLrPU61nEuL7nNsCcw2SLYGHiTCtxUY7pZfWvfm4XoJQD3oq6Vz99nt73FeQshPe",
  "key31": "2isZfTG8XRLWy3nfdBLswTbXN5LvDu8JS7hwHEsURZBf4Hyt3evoKaXkuC242ZvX4FKQiiTt1wZPhXyBC9dzVyvV",
  "key32": "5b2Sn3HhFg5bAFz3hssL1jHLHjK3SCy2q4pqzwyEU36eYZa7DpN8aQ81w3BHkv3m62zAN9kn7U41zbVrmp4hdnXi",
  "key33": "3erGbDSD3ZdnNNnGZ4MBfXskcQM1ff4L5gfXG88UHeVCb3ZpH7oH8LCHDPHgnJbPSUoEzZfrD5VUjXXeytEu42zH",
  "key34": "3Cwb3bQv6GBgHGYSPywkPLVgkc47BDW7uEGL4rvdimqujUm2sGEFT7U8qYkLxufoCq1ozGANTKcdAYSapbNVv1Pw",
  "key35": "2q3K1hpXLH2nm9cxeFXiwDqCrN3NsH4M5Uq9jJJxSNTo3XBToxVCDMQjGUfXcKZ8kUUUv1JesLmL3fffneWVMVQ9",
  "key36": "3toWhKnrqyNSSgdMi6dgdYTU3c2vqgEGMC4AxeYxBtQq3oha3wxCiTi5ywkkPmfk7hyairefFnaoTkxM3GAa5NhD",
  "key37": "2j6X1wxQD3ttvQLbVkD4hzXDb9yZqSxHg1gKS8bGLX19s3esFXgbMdZNUV7CYLEEnWXsZm2sLjrCLjjMvZYFwYJM",
  "key38": "4NiEjsQDvkQDYZAExJpwdSq9o8URXYfmva4k1JjsY3LDss3PSUQtT3qHbJcXC6LKKy4PNGhvU6phTrrZbYmJAReq",
  "key39": "GebCYP25XbSrq5YqGkAwuH4y9skWtoWpM4BXfaAWPeHX1SaB1zRf2XS8Nw1TcD8W84fmziAoUhtYVBfWDviaQzJ",
  "key40": "2adCgkWdREGofyhmdMxzFGmXdQPsbLKuDWtepN6Lca2XLAGQZdZV9o9PKCsyy6qNgx2Ln7x2aHBVkprS6mtF8KV2"
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
