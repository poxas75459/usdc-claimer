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
    "3bh21Frv5KE2YTsm12C1xH52XF6ouxc9pegMNwS7sJKU2KY1CyRcgqnXFpswymacm7njDNrpJXKTZMRwG1sfY5u4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zy94eB5nbGrHgNDgxFrd2ezNoWWchDse4qxSeoLELw4b1nFTm5Cw6p5eHHewpTuxCBpqR4HpiyYJHyFR3kGyMzE",
  "key1": "4BzaW4BvD8KX9PBYVLbo4QpdEM5VGwkabWMoqfyrjUnCvpxtS7V9uRUU2LnvwdPDKDZ618X4zPQJ7mZHebD2n1PJ",
  "key2": "516PTTBWgQJBZxYLxBhsyEhLCPEnhBQH8BKt1XUukZo4TzuxHXwDHVfxkbAJczFLr1gD6GXLdKr7dPuoYkjbk6ac",
  "key3": "4tHP9ZxW12K9D7kPW3qUHaBhYxwbS1kxzb6yqxZqMAXdtGmXTka65Lmd1GwcR7CxEMEuSGVwCPKShyAiaaqfTpc6",
  "key4": "4Q9UNhJug3GZ7CQqmVr1wF2kCLLBmFAyaPPLMPr8Wq9u4U5pKDb5jLdJk8QtHafGoS55vRZ17qpxKhEkBTxum3pp",
  "key5": "4c6HasVWuAzySHA9iVPbqSjCaf5uZrqXHXdKD6UPX2xpMoD2D1p5WUi5yyoPDcgN4BiLyVbSJptpTXnfh1AC9swb",
  "key6": "2fPKKYYf6Dqo3wRkWio3GWGAYJh12SKRjstxndPLoFXEqFg1ERVw8je8pPsqLCu4rtsEZUcSJQz62jUNiWeV28pc",
  "key7": "2BanVgsQXR2cGMjFLVbxfzi46hY1UofBzoEM5yCzNJEqLxrXXxyPbTQBKoqHn2ePQu4PDPwzDPipArNX2jHxEzeU",
  "key8": "4u7Xgo9g48dtyhy6f2iV5kzzumF4r4itMCac815mbLH8o32povBf3322oFS1V55tMXGYST89v89XBu6Ss8t8abTC",
  "key9": "KJbL3qo6pUYN43TcT72ZJovkDnte3L3KsYyNjXi6CxRWMGopsDNiZTMAiARfbBYGxoHzrUdDcUjxMZwitzc5K2o",
  "key10": "4c4Rz3XyoAn4bEeJJzvpeS5HS8xGuFhrPu4xVZJqExMU8uxe1eQQ2xDJ9GMJiyanyuNaZHnmnVwJxKccikHW3FRd",
  "key11": "2scAQMfPZ1apjwtJDCPATy3a5FoXcFGaLqfsegZdV8Ro58AEp4V5dRzqa2aHaFCGz3TdZTYbDYifAE9n1WUZD1sy",
  "key12": "4RwpXpS7nLxMPcuWz87Uu8yiMwPps3rZYWpgEukVtz1ubstV2aSVHKM995o27qDCHoJiUi97xLDH4obF26qoCorP",
  "key13": "5NY37deFQNTEnLtBUSvAMEjgweU6vbv8eovfVaTkvFdpx9GRgVWvSKXJ1c8DrNM4C2DurjXRhjPtGbJd7yv8P57C",
  "key14": "3hPLRSktsKtzxTXKxTehyGP91KQM6Dj7Z5NLx6oy9Rk6ERfLXLiESVBvGxzPZZVQq5CU392ssaBCBXGwZ84DmqfY",
  "key15": "4natbGkNsK4gKri3Ngj7S9c7PVRZNSohCSEuzZE3CPjr7JBLuUSJbi3xXVU6NkiNwee94xYLfDazNrg3Pt8M9R2z",
  "key16": "35Mk5RTraV4AS4d3ZrmvGYKGoXfGkhYNq7KRhyUyNdH7swcWSNXxZQgYMtASW9VwezAW6kA5zzpq6UqUxi2pEcbq",
  "key17": "2g6YtJmiL1uQiyfUvefWZjpCvkZtUxjWDvVX1wNzFeYGnANUrqP2U6xvMv5Cavr31mQGvo9PbYmePcKUYRUoXCay",
  "key18": "3EUZLtt5sm9GsmA1XdWvL9snFRb8Yadog9rkWgv78Pmj23eZSXG1VkdPU3wDQvuhtHEJTyco7etjgHwaaYDKMjuM",
  "key19": "5dYVnJGDFgU5PSJrPjEMWUuzePP71k4s7AfYcn6dXbcVASa6wyxrffrZAqwS2ueFaSFmckGRpS7uQF3oBWFmRNGa",
  "key20": "29Y5RYNvnkAhMFdRTavehQd8eoV2WQeV67gUSz2kkFfMWn3L5u9amhqn3aTFHW4u5rPXK3ikWgqFooEsA2q8ytyf",
  "key21": "3xhh6kNkAQdXbw6QreEMasV6TEVmzYngCxs9KCGWh8zuskAsVQhitAxxQSU43r56utxHyL9DA1eQvdBgeQDC2aCP",
  "key22": "C231J5w274Utdys56X8vyPrjRWjmkchYwoRJ8TukSRb8Gd2RhCFwgaAd5csZqvRV6TiHYNRN4e7BqTWULu7rpCB",
  "key23": "5q1LkNj41tuk8PgVGCZ4SowTTwLfQibva4vuTnuiMfug6Ez89nCwqrwX4g1QWHbV2FrUc8zLcmHdMUTqihuH7NTQ",
  "key24": "Faw5vFLC6Qt9YBwtUrbppKbsYXm4SX1aryiaiCin1shTYy3qFSfR2kkkYhndqwNnDXaK1CGK1skWdWVpVAf8D5K",
  "key25": "yfPnTyWB5tZ2SWFy5LuoHMK4UBP5A8qdwjogkA7pY4RLCMV84tUabMUsKCYTovxKjH8pG3qghKVjg5zpi8t2Zue",
  "key26": "4LGuCbGPuvthHATwmdqY29qgvGSR271N4pB2LhCVZsgGirCFBYW39qt7yPMEoax2EqKLEGLBkQz7NUidoHdZ5KbN",
  "key27": "5Ygf1gXf3ZR4DNrpTx3uLU1CxwsGqhxbRdt1EazAW7xvmTkPFs4AkZVSQZ2sHsxD73qtmwwjRPX4jnZbb2hxQw8y",
  "key28": "2KyijN2g2Bpt1XjHqg9G98Lyoq9LMhcmvr8RejW9td2N4GYQ76GZNFgvcAyCXVBsqfpn9kkuCzgUBPhwv6zD5m4E",
  "key29": "6BPGhib7mz4aUKhPRw2rLT9MHqc7hPwBU9P7YEq9VN6L3VqjMMmgZ4UWniKz2Qn2NQ9mn77pJk3bZFRLr4EaLM6",
  "key30": "5K9XU3tXFovu3XkKGVHizPfP5sw4ZdvZZZSqzKx9HEj1R5UVN8qpDbvAvX3WMH5ur2vZuFr6V7wjxduPguRhzCKE",
  "key31": "5gQeUpSS9YkudjqED42tvktE6EEeVA9SBYoamdEnk7aS6L8Rb4uw1CaTGMv4Xx8PCLUCpTwVwCGZc7uUxZZVHNUK",
  "key32": "2ie3AmFPbmaBQexFzMzHYpRLDpu59DTzWrv4t3rg1jjHAhehiCgfNcWgNkq6mrcVctqo5rkeh5r7kvPzbW3N4qBM",
  "key33": "ErsohjDej8LSJwcdNK2o3opsREPtfJGL9CdjBub59S7EsybVqdoAEsV68q2KpWXEYhrdRfo7nbh1Uhoz9LYAzC4",
  "key34": "iWgekS3H1HeEsCCGRneKFpuYboRKTkD3mV5AxBDwTC95RxkzG4GvcGbToEKiP8emUete2DBXgCRHeHE7wChmrEr",
  "key35": "2xkNFyd1ee5GKucqNqnizZyNGL5x8xq8rF3ruWMaR3aENyK6r1L2xYHyNJqSxvc6hrFLrHS1dPp7E38S9cQfaA3z",
  "key36": "L4BjfXDNwR9v71YEJbdmYYiW7jVMb2RUZuq74gbP9VBQNfc6WxyX35efCaRjGoTu3oVo6c2yn22ki1hZn2ipmY6",
  "key37": "4id6TidARN2TZwHhocdE2njQefH318Kw9BWgLR5T1yGTCd3LHK4m7YY4K3mjyoXyw5Xkg5LA2emqwJzhaMmy6wMo",
  "key38": "4G4jhCcAUbgRDYXbid5DHVvPwLJ4ErnSxn3CpEEYifsZRmX1JEmUWc3uKh1qG8FqG7LncG42QhwZreaL7Xi7ixNN",
  "key39": "4zGwYfnLRARXGrGfAUG4dhcHEqCX4KTiXmd3rmPBUNNMAUntRuA8AxyTnhnvEZFCYrhdd1ysYG46C9Zze3PrUDWN",
  "key40": "4NQH7NTXFUwNFbnKbLMKQRSdnCqcEvsK9c5aGJtGw8LPDC7roqZfwbM4AF34btxdFX8zMDn8SMXfCNENcsf6D8cd",
  "key41": "4BNuRb8AtXQLG2XoatVLpahHHeFTFbrJfyrzKou26qxxES211yzk14hyQNq47NLWcvWwmu5Nj4YXvYqUSq5oUMTY",
  "key42": "5xbpdKQcARay45CphQoa2Wygz8Vw4bmq3LtHKaxG8h5CNiBByzPGVEYeZncDyTxmQ7GyzgrjzzvFgDgq84zFoSCx",
  "key43": "46ZLJwN1f9Q71TAMKvsPEo6M8C9bBMfoSYus1xmPp3y2mRoduBnYs9MXJbqBhqMH3z8RsfPHF7Htnp6zicJLDMtG",
  "key44": "3YcAstAxtUKP2NUYAQ2pGLYc2reprJaB2dB1dj28vo44MRpggfREwA7aCwfQ5BXdkrnn7bu4ur9v1GUJqE4KVg22",
  "key45": "3ACJjHva9yqdnHAP22TFyuG5X7BZqNCjFmV8oX8kfRVuj5oWFWXtHvLBQdXH4GTe8MGvW4uRVgo47uF2HRExWXn5"
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
