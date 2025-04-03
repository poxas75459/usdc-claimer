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
    "2jXQrSUh5qi9BjoxAuVT4fVmK12YUfomTVMGBX9UMU1XvkXWqbFoGG1E5EGW9mTfibn3cajuunLz633ceXgjXsvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jiVZ9PdoJoAbQyhdnmAAAS5ePoxzXVRW4M8vPhBPYWS3ken7kex7aws1itLTkrx69wfHm81vecx3yB38uGKxyvw",
  "key1": "37vLBpEux5Dt89z22GpqedtzBoz1fVDGNSt6fDsFbfkVhTuDKXvtSJc9PkNxYFcCvEEjYrqaYP5EQHTZzfzvdu5e",
  "key2": "5miNncbNtqzbo7C2MyYiGSvd2wdBqaTJm1jfGtRErJsUZCqtPaSTUqQd7cB7ozc4xUtFNsvamthBHLmLtGpuXupf",
  "key3": "4XiTrgz8F6KQCXkw8jdbPtH9D9aGdbrq3car9aBhWmYQkw7r96NyZhdZkmYrQLm3zN5ZXhUSoiqcacrJpuTVH82T",
  "key4": "v3gkUzndSqcpJwqBaHc6ZAd8tLKXmGCjaTgs4PqbK36tLkhMzNsGB7VfviPXy3Jk4Cc6T5H32a771tGMunq1Pmt",
  "key5": "2AQhACCuciJeDqhN9Tiu36cPHkBS5q1fXPPKBaqozi3HJhhW4h8LpC4sNuTKniz7wHmjSmwkACB7fnGWVHwobsrQ",
  "key6": "563Adjgny1c1w5QvxkCM6VzDUsCLX6Jt3YDpU3HyEiRqw974LA4kLYNVdz2WCvf9iEvpCSpJd5qfBp1EtiEA34LS",
  "key7": "89YtHmj6HX1AtNiCxbsaYbzgVVE75HMKSyzY4MCE8dSU4v376AHTbAYzhrsZsqDBAH2eLC4vfJ9icdL3QyZz8zF",
  "key8": "3d24z1no5YbyxMWi3kpJ2FU95rTaY7KKZ7M9ACpRBj1anLyoUAhqZCjyVciLpLddktwwb29ct7BjQxyeixunExwg",
  "key9": "23FBWzW2FDtskhGGwpGeZDR7o2WyyAF67ntFgWnGD461E3knsHAUnuysgPjiyZcofJm9Cb1vJzUneyyVR9sD4doh",
  "key10": "3PzGK7oKDXxwW51WvfnzQRmorRaMFgqMUMMhPDpyfxh5Yw8MZG3jSMvP6vdKCCf7aS8cVoKf3x1vCNCsc8CmKKDx",
  "key11": "2A3x47zp7uW8g3apActwvQU256TR1JzeUyMd6STZdAUjs6bJWZo5fRcw3AYtuMHuyusooFZQtpw1gYCMERz1uF9g",
  "key12": "Gi4Jvat97yUHb95zBgfTLiZBmWbXy3TBdUUqZyeiHMjMhjnSATLDxyrPtcXM4TsxcaDaxYF2SSSvHmViZk8ti1Q",
  "key13": "2i3sM3RRLiPyD6HyftDtBmiLQXfdjYQ6PkGtZ9J6Jweosxy7LSFQE1TLtUnPgicKCDyo2aMvGdEtQpnnmUVHMLFo",
  "key14": "54EJouQCsuuTiM6CKyGsKNbcPkCs6rbERcxGgYnpNJRmg9EXXq2DuKm6HgzU53oCoxDS2HpqMqDwJP9Z9CiSKRKb",
  "key15": "4fex9NuWn3uqa394KVtGpTAR3RpWgXN2STVW39DH5vc1beD3BdGQx4RXZP3ZK9MCF864NHxrBbKpX8vxRedpWkzn",
  "key16": "44CZcUdtFpycFTXBSv5EbXq4bAZKcDarJ5qAwqrFVQnfFXph3YEwYCtKy8WavvshXgxbSbcXXzAfHemVPCorcMt6",
  "key17": "2ZsyJopYMersSkFBYx2dS34w7ZP33ZgYfAzFuZzNc2hZeiCHUi92StkUmCwsnXewS4gxnqyHGMPSm3jvB6qdCDwF",
  "key18": "54sGdawttSshiJ1tvg495dT2dJeks9xSGC2aBRWTCV826kxBuRcTCKedpbQH5c6C5tC4TLC5BCMLRyaFxFywQVZv",
  "key19": "2biSYPuB3DGixkrkybJKeY7Km7utH44SZ1qybCqCoUTmf26Vcva6NwSDWUu8T74uz5WMGs1VUuwsK4emWNEojqGh",
  "key20": "21oWF6Y42LPUJe15cTDABWxyoSr57C1xo96aHX1B8TqLxtoQUdNB5zMr81SY72iuS62rW2R9kawMyGeMxwqwgKv1",
  "key21": "5n8U4n788BNiAbyM2yxSAjDqTtxnFgHcDtxPq7XfaBHeQhfzn9V1McqoD4gyhTS84yXrJ7z7f6m8Uy72EVN38ziW",
  "key22": "3254F9d8sKVZ2b4icretuh4AQbaVwGpbksm7StXM4WKdvcvNU9FUFacbdJXKMXNFNkF16v7ybWwe3DYuGGXtkBgJ",
  "key23": "4KsKHTfZrVeXHGAJsyPfwjTH2BYHKiSTwNiKwEsxp8uPWXc2vKX44AwfuBzkTj91jTKZxB6LK8yrfszR7aCVmTp",
  "key24": "AE5PtjH5ABL96zE4NtpZ6z4mrAd7QRz1HyUPVGfemPzSBsaMfyxqwyoS6T7rUa6kcYYXEFeQnJvhttRR8sFur7d",
  "key25": "4p6HAAE1oXboxfUxyqXVcHo4L9cuD14TiCG1f5HZJdNmMzTW5NSgzdU7FavrbUUs2C7i7CB9eoXGocgZ2Y8wniKa",
  "key26": "24EHMnDBKmyqQceq6PNv3mjhZaL4dZsHSTsLGcujK2sCtTJqmnn2136Za99GH6CmXVFCFKfmtVsuApbPxAzexPxq",
  "key27": "4RKop9enPT3q5xKhKGm4zojCe3MXndYcP1KsqHw2HLJDAdhfcYU1Yi1qdvFeUwvkUJoRxvvkKZqsnDt7HY4SjgPZ",
  "key28": "29Fzg28iXY5jzoLq45cPsRwxuSWQGeMtXkrGi42kL2hw9qqpHQwCEs6JascBfERP3jjHbamAyaBUozPeX4z2j243",
  "key29": "4b7wdNGbaBARPV4KiY4cNFn32i5kQJhgU9MsDnj85VD5xaLHgqr8wCh5vbwDWzFQ2U5ydE8Hn3xknCKdYnFSdFRA",
  "key30": "53dA1vZ6zgjDLMGopmM1gEo6esmCbMLAdUKHMFzN5MtGgGL6z4JyHK3gbJwGqKo5ksmtMYKnfVPRKWjhpynzadVJ",
  "key31": "3nRwFwexvhKQRzh9KeQW7cccgYmifCrYhkJHfDboMZyccuGQejyeQ8jD8oXJVE5dBQmfaLXNyMXRWP3GoTjMKzER",
  "key32": "594x2NBW3GgH2w6A6EbeqzWhsd75P7ostKzdMe6ZQPMACzR3BKmXSNQDAdXPYGvHsdoSmNen2EBYVG69yg7Duzap",
  "key33": "4jSPjnbB81SSEzTRN1y7ms9dg8AEumwVWWJJ23gYiKnzafQ23ZchQKR9LiwMhsuBRVsd2kfyuBy7q4GRpzDpihQQ",
  "key34": "DGbAGxUEgC1drpXw2CHdQ3bi7p468yXWg3f9T9cRWd3ry2CCAZd8uJzm3PaieVofBW7seH6CQtY8A6vgPvyYaRn",
  "key35": "66Dp5EJ1dVLQnXtyv24Ummvm2dmFHX4eeVVCt1VqFApasjDJX7icrbztwBWVPBJpsvFPRTJeKW9fA46Ftw9QVn1Q",
  "key36": "Kkn24UtzpMPohgBdF4jCbxGr642EZErkNGj84T271gVyKAPQMLw594oVZ3ATf2murhfrF8vfK26RRjxnhkBbN7k",
  "key37": "MongYk72hkBfckekoDj1tdnagJrVY6gADZ4JB6HrUzJkTuWjadvWu17yXLQLr7bi3T287h8a6WUfo1ShmqvaKvv",
  "key38": "516gcTYtXFagDFuQwd3e2afDeeSM6DXqegFBfj3hAiL9ANHeAgCu25h4M1qLRNM4iWYNwXTcSN5TLhwWZC8pq8rb"
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
