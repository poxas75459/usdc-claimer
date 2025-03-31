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
    "4DJ3KiCR68sRbPLzchyccMfxhup53vYjHGTeFoPtofPQEsF435rV8mt48FHRwpHt4KECBPiySUQaFsmgvndJnUp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RARAPPFAYZjorY1wNvsFnkcWRfMoeDKnzKMA6YoWL3j4Td9BzfQz8w2tpZDqp49ZbvMMaLfgS9aEgYGtVMrM9iV",
  "key1": "3nrx9MnhsJ2GY4HzGoYhvn49iU4zC51sUU7ziLFGSp3qXHtbq4PpqGW2W1xYjVBvhZjX4bZCKYZV8Yg8NbYKzy3Q",
  "key2": "56DDHfWXBqu2d6spCXzhVjMyjzfTyq2gGwor35uLWVN2TAKmPGwLs6HBaTdmva129WDG43SBoyDUwM7Ph1gs7sFZ",
  "key3": "3SduN4Nb2Q7uqotCcn61KKm5HZvEpZ1EGpfzHQreCGhiibtn1wmRxwS1M4Vv3WyWohNmCRAJ6mY8QMdGUQJg7jK4",
  "key4": "4R18323tv6d3g2nwGizc9zJvgWyXKs77xaA3jYJN1n8Ye96VFusNkCsZ6y79sQsemYwsfLQKx1vZ9Qkfsw6YbdMo",
  "key5": "3dwMQ25j33jiMrV1eMhjooVQT4Q8UNDpXKcSuxx77GRru7Ngp6icVHYuMexyrSQR71rHNkx5E48cZY8eATq8vaY2",
  "key6": "2fve8PFdjFAsqqsCrLH2esYBkEdyJRSUGbJAZJc686X8A6UrYHPv2ikzug2ggLrkj3DBmTMBGfZq6aL7VKFev3qy",
  "key7": "3K6TkPmxnrMFxp8DK9TERY9sCM2orpgyoAaoG784YJpwHSrkv8sGy8GpF1fumnyr9bsiwt8PCRxrNas6NiYSbfZM",
  "key8": "3AdaSHfhtjSC6KSVzU2jGyJDKHmdnUCHg4jAgEJdejZXF5iqELYc1RW65e64T22DJXMR554VJgutGoxGTZLRJ93X",
  "key9": "3Rxk6EGQY5YZ7p9WErFjjsbmSxoTdWGMD8bfFnNkmtB7D8m3wD2xgcsFwzxjfoZYdbhkBYtNHhKr1viMCMX2Cotq",
  "key10": "3KjD4mMZSMu4AeYUtaZLE8fAAo1dGsV8RgXe3CeymjNW1LYos9xuEMi5RjhUF74if6aAcg9qq8LxBPyoWWXZCuHT",
  "key11": "5sSriaDSRLvaWSjqXCXQtDPiUNxEx5gLSew2Leqnf6ej2gGUr5TiRFK1kEqj73dyRFefXbFZYFKceYWLhzvncux1",
  "key12": "36TWzT7A6sEDUJgLEfL5k19BqMYJr3yh43mDefZphzhawNY2jJvhQSzzmKmzn3LrQW717WGZGtpfFhB9ju6Jywxh",
  "key13": "3uRZjiCyuduYUZWzzZvqjFg5KVnzjYDXHJgQp8ivqk24QGRquZuq7fLV8pCMvFPs2UrnaPzJ91o4vdg4htQGmQg3",
  "key14": "FF8RhNcayz5kUuuiy2ga8dfxAzv2ZRWD6UY9msanqJ8BL2PmRyo2FzNvBJGroLnTSbcXkeziVTdDoQfwTMbfn9w",
  "key15": "3QestLyVXKpF9xaigDmAt4t6L5ZWtSQ5dZNVeVQcaFCxqXnmPha38yZxwL7oQ73nsApwvzEC7KJGp89YyivWPXrm",
  "key16": "4WPBFuyhzU8bbXRgztsmJSQgdGwVoBbvNYtFgM1HkQxGifvMfeLyzzvWA9xxZFX1KbhE8mgG49PtA5zL1bneTVt3",
  "key17": "3tkbvWbbC5pGyZ3jCTvBv5UPeBYLTkb6X7RqgcoeVjLZDdwopXjz4ptpxGrmSiH7A9Nzz1oQHgnkSBYAVNT1oGXx",
  "key18": "2PcEBnPvWoe6KTUyCEyB5e51PaVXJwC3Qvmz5S9HJwgbSxPU22fCrz2XQVsMw5H5M6oUa3cGsnc2MGk5CzAAdEmZ",
  "key19": "3i25w5M99HyrgykFxtEKvCry73tw81PrtiBMZbD3unRicVV88bL4FZmdQdRU7dVaimGS2FHzUu5kzT6Lmp4ue6st",
  "key20": "2gHyRHM36GLErQGKMyrdWFPrsfxAtmomLrXQo3zpVyBNsTGyS3BFQwbpvQJ9n6K74sBdarbxj1gHB4uzjJwufktK",
  "key21": "LxWgZYMaLv2PWfoGrh9XQfHGxDn7uZmcHhNfhQX6sZhJWPJq3QrazAyo8ysuZg6XJzCPuXqhDLajpUotJn9dX6M",
  "key22": "4LEjyv17U2mn86vP8nFmg8Dd3ubrR7qYWtGSEhsExysupc1UHC31hU9BqgSDvae2DTgZXdpyZBwZDEpct7t58CqJ",
  "key23": "2GsdkXV6VT8RyvACEZwQiXfZJDo2nGpDApySNwLU19Xna47PMvNEy59ae6U63S2MvDDbdSrFBGS2scN17mXzvvg6",
  "key24": "gDiDMXwibc55HEjMd9PgAceAD3LuWimj26KbsqgYrUQm8LjVDQ5nkQ3ihyqKyxNi2LKz4iQcGLS3FHyvsY6xKdh",
  "key25": "3UvWEN6hkVjwqH1Vjbjzx8Tfoa7Pa1e2QF71fTxLB6hmxhsB3WAhWYtJBcTonrErnFgqxyuw3voA9BWDrNiLTT2J",
  "key26": "wQNApPwmRXMauAYG1khpqRf68qYUzgn3NvaxEK9WBuKHrXUxS1bjaGywNBumjkDstW17qrh5UvHntwq4u5kThQ9",
  "key27": "5SP1bBMjGfi7tPJE6aVZqLqQZNU4EJixxmLMj7Y89RDPUVjiSvzQe5g7BTtdbjjMvy8Dpum3RgfSkRsNbYHQi6wq",
  "key28": "4cpFGa7WpmxetRzENJU31p7HpfZ7NrDkYbwLiLh4pejZZxHg8cYVUMRBqv9EV534JhWMjMoLfyuDfTqkTTEGUWiQ",
  "key29": "4Xd1jByKsWFcEj9w8FTH6d9gTDp7LaRfcGnjEy39TuRboh5uxcwtSYkQkon8S3e3KSui65TqNEZTy4SvYmVeZM1M",
  "key30": "5LJ3VR7rphJKRTMDsTF2Sa79R6WjecthTNZz4A2bmTwqRaib6GGfZXZcASx2D2xt52gg2hhiyNshrtNekNKeniYZ",
  "key31": "3hk3VxFsKvVwic8azj5DABNV5YTbBACHQaXSkqG7bUAvTiKpRefwEe89iSkYa5Wcc7FYGGteiSc9NGHPr3r68ADn",
  "key32": "3SNZoMYPazFUf5oCmy8E6tuJWci8EetEr7F6jATRdmrNeJZeEkVmgBozoAeobeUhcuh4aFXPXS6JrKSJBiVFQ5gt",
  "key33": "3ofnJeX5w9CzasLsGyB5RHjL4NsyexNoLeByv9SDj9DHETYny3ipd4bfBMEd8DZQ1wyvH2r7LY2iLUT8cyUEZuoC",
  "key34": "3RnXEBQfTByggKxfieoYbdvr6rVFCLAtoYkcVm2iBSD1d4j9uVqdfYfsTwrddDh6MVf1fe5be4HYfucZ2puDtSZV",
  "key35": "2yFuLGhgrfToVKhSsUye9jNQiQ2Gds21tWsMzY3ZZz1oUY2YREk1hKaYr7b6pjBJ5wuYSAMajX57EnM622wXEkcs",
  "key36": "ke8CNbJYbth5cJ1RftDTdfmUYbVcWdgtAari8xfcoED1cTxnoD7WnD4w3KZEYAYhtCptHYkDkLPVmmEM5S9ZkFV",
  "key37": "3r4f73Dew5TAYn1hdJCyCyXqjwFuNc5JJj6TjaWM9eRhaoGZco7X9Ssi1BzRHHA33yhJS7U9yoyo7jufxF9pJnd",
  "key38": "3CwARUsWDaYpMDPk1j8qMcCiCmgzcu8au93waqDfw5pQfNzRYFWuuVsBEye4KbxRJbgQSWEKozZ4vn7xGWRa6gJe",
  "key39": "2ibUsM1JX4RzALSdWWLrCFirqvf1kkcDdciXW2wApkPtAidwZTRwsVwPBQJwTPeGQdvQTi1L388afWqn6iPib5YA",
  "key40": "3zkMUw2JbEyEX677pZQzN92ftMRAWoxko7yw52XjfmzqagSRYDPU9s8Jqu69JuZ2AkxquRR5ReQiqxnR3ShhkLHP",
  "key41": "qsgWjNJ9qJzMXTxNTCUNZBrRSz9eSFqhyydBM454NsJEyJkJVoe4GnxaC2cD7FXJGRWHLyGpnTcQxRit3ckoivo",
  "key42": "49i4kw5mUNY8xb48BfbVLVRubZmPM1p89QyV69hNfXaSq21dvuLhiAARpM6o7rZj1i3fmcxsniHr4wpXTEY1CVto",
  "key43": "5smZUGxudHgkw3im4ApN9vXmFgvDSCDcQE7HMrnWWvQJ25WEqq3XQxpBki5Kbh3KhMjRksokFWBhiAt9YXdFWH5x",
  "key44": "MeLS6smChwLMU5tADENp96VcRmsM2Y5ovXgxaWHrFG3ZuJ2zQWNk4Puour36fMq36FtyaWm4uNrPwfMHrUUYkSU",
  "key45": "4KKezhc6vYv3jz9c9hZndXT23pnU9AoFrxWX8ibEAug6vpxQUcotphX5yBytKACGHX8CudgHPJoLDZotUKxXHMVR",
  "key46": "4tiiE5gyCqx6VLYMP4rK3uGJnVskSuL8v3iQe3LMGGSwM3HnxiTFvCfajYZ52AEjNQyFn1cuAScY6ZG5E9am9fXX",
  "key47": "5wEDotMXuj6bPPx3FHiD1Enutptaj6rKj1GQCY39vP7Eu1Njnd9WcL8iziq9YkyvTsti3xwkNmDSLHUeSaQWST8E"
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
