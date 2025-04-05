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
    "65q8BEnbhFnVxt9NipmdpvdEDyRKYSeTGRiafsD5WoqBQ9NzRDBBkvH8qVPgC8QNyzCqB7ufLY3hagRFEYF2f2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wwsSp1h9VPzawsgEwLo1oXWgWqqe2SRFgsgug8jWPta5dfdbpy2Hyh8zwQCGBU4EUZr4Yysuwd9LFyLpWjSzynT",
  "key1": "d5ZksTg4nNXNEQCi3N5HQj1qMkoxDXidCVJpTWr58qNsvZiHuiUiRZiNmjJiSCMFffD69YMWJbiTRLAHap5Th1i",
  "key2": "bo4kgDfvqfTcZgVZdpskMBuCSJ6xdNcqdU9vxuHTh4iimMJNeyvY4ZJiRUv3egXDi6VVkrBqMV7oLopwqpwpxUL",
  "key3": "3GuTURpHPYUkSif7Z9wjKGYXskt1okmvUtoSLSvGqYARL12Ur9syyShveD8fusiHdJstexypHswrGfmpGLWj7BDs",
  "key4": "5AaTU3Br8vsriekcXJA7FEKYgcXSZNoEM33BQBoWs54AwNdTiF3gfE2udmRDbEknqQbKH7f2RRmNTjzRMUj37y9J",
  "key5": "2D8UnHz1UKKcwq7cV2WkYr3XBCXyHg8wM5XocoVxBbiUvcCnHyC21zR8crUi27ERzeUPyFH4CUKCzxJHtD1tkug5",
  "key6": "2c8wQwyLDpkPGdaribcLVU1iDAJaigdM8afKrxVavxkBiihpbXe3pLaZEKmL2garo7yGdr3Ch1p36srh1JEQunyC",
  "key7": "3z6gmcRXF6jVipzM1z5NhYvtk8NZE2wuihQ3kssZjniqugLB3L7zR9Hk8LixpdJWFKojE2YD6dy92vbjQK7QWbRW",
  "key8": "4jbcNer7fX7djTCYsBa1dYkuNf3sarmtFMUWgmkJkoxJTc1MAEM6UT3e7DUszRVL2VuKSkbgTWgdJLN7wmTD8as7",
  "key9": "4vihecXyTsuFCdHvzSTCEBUQGm5FTvNtxZFZ8M1apNJa29155f6HfzQ78gDSiWdK6BrCNeDtD4nF5oTVjgDTk7Wi",
  "key10": "67TUh6FiGY15Mfcw1rEzRsPcLkHD9nBzDgoDFidnMBGereo6zKXDg3KaSYz6J1KBoWCWePCUGDz3YmS2h4wkZQu9",
  "key11": "2qAR5tG9MXhUUkvSffGdGoURj6nZBWLoqRj5ufguoP4LjQDdUc8TM7aHoCCMEvC6aS5BpLEqV4bocRJMHRku28cE",
  "key12": "55aQXka932WpfpbMqvtenxvugnpHoVFXoLnuB4cjmZ2fSwBqJM1oXH5sf5FhcYBS3FgGk9YnHCg8rF4G9H2Xh9KD",
  "key13": "2kD6kzmbmA4LZjxqxAJGjhjaJ7zFJU2sECUdGH4hM3zM9j4LzUbQGGjNkf2BhoxHPiEhkGstfJh1Pi3GZwK1YuhV",
  "key14": "4jtmLGuJtfWxKAzHC7P3NoJDbVSbw4Az3cCB8XqnU2DfdxUQCKvs89aj28BCWUDbVp4AeM1gDFPW564zhq9X83QY",
  "key15": "4HebaoTQhmqYriyneVyATgNNtxqf9HxcrK5gjFYCR66GCq72AqgmVj93fbqnMyH2WKDUk4s3mny23ngCLispSv32",
  "key16": "6Tu9RQ5exDg93Yn7mtHyKGyG3gCvWYDg78EyZDcxQXVUKXyUMmkmHeELNtsTSp7jtq3vxKaCoVCzqqt3JWKqD5m",
  "key17": "45aYSPCJqwRUJnqe4qw4zixJfCdpqKxX7e73x9xj7WAXh38HSLdrptv5kZHq2p8SGaqHKxPWst9mg1BpqVe3g5uK",
  "key18": "2NKKekC48bSmRfjNkeHUbcGddv7JRFPzjfJWkq5UG6YdYSN4TzGm4adg1HVL91NjXBcqDwnLmbniXoFnExneSF7U",
  "key19": "4y1KBmfo9ePZsru8apNHnUcjfwuJcbvqNEuBiWtqe5KDLgDWgLMHuVu4d82hqTVEeAk6JzhNFUtTWw3VdUD8q44X",
  "key20": "5ozzLbLRAHtbQmyzqndrjXVCx5FNKhk6cc1VHS1nZ2xzRC729bMzt2x8RqGpxMGeWtdvWo2Ah47cTwj3Uf9MWrS9",
  "key21": "1ppkj3xyP8fDViBKkdRHb11PjTN5qRf8otRSr4h3Cip2ijAsGvFkynLyW7HmyyKXiN8PcQqWKtPJ51sstjuAPvt",
  "key22": "2L3PRKW5HoRPpJQ7rVJFE8ZLWMjvjp5A81zy9oshsuvxAKtkGLxzJ5ZizsDCDey9L7XXCfnUonWgRvDEM2JFrM2h",
  "key23": "2QEKXBS1fGz1Di9uTTFB4gpvWXe8D2A3QWmPnEPU73DxDnSKdUcTiw7PgZggKi5neATpijKENomkp98NfAznucsX",
  "key24": "46FKqh8c2eiP1nY6b1XZc7mNKZdb4zm8KK3R2RmB7XLNEGmjCL4MU8KBHe9DzEjsew5AohrgqHAmtEYWC1ojh6d1",
  "key25": "3t6S6w61zoeu47XrcgyYzHKNPXUoE3w7PBvgTbgEQ4Tos1tftrHhzYCRXzjrbMGEPXZnfNmnxdRCZn6VCenmb2ma",
  "key26": "4MiKBHTMGtwYyseQwetGAjiUkPcdAqmaY5CmV4oYEW7soQTynffADQsUnE9rQDSZoGUFCD1LzWvjR4K4DXqEqxQE",
  "key27": "cWoTEDwbW7oatdgXrirr7N8sNMKWVPcBUxotchKXpvo4ZCTLLS7BvnaqAwMgWZ4p4U91hyhRqN3GSStvv15PSE5",
  "key28": "4pJm2gcc9Vf6Ku2Z4J6twHh9wwqXYJHBU8394L94XRHXmEP3vvogmHmsdAAduYnHAkdXxZc9L3Gg5p9iGuRbakox",
  "key29": "aoCDPD8Sjc5BenG23CDaMe28XTY7vpLhF22MK2Z2fmsoQy2UkdPqUZrYvDaC3qJfWVW9S4eqPxtoMdo419dZGmn",
  "key30": "Lc6pCbw7uBzymn8qqobwXzTXStrLAJHG5DUgsyhigiB6Hm8ypTBFCdkD9XgzkDp2EfdMtEHHDJSCZmf8ZTCD2Ko",
  "key31": "4XSeRWn1StUXkyAZBs8zD3fWcXD9XSrqKXFrAhG3qks9rVRf4B7QMXBbLPMetqQDzDGRvVkTYMBW3GghLobZC7Ut",
  "key32": "4JU4hxHEGpMk9FmSdEgyFsKSdAeK3fW7QnkVSPf7nagiTjWp6wo3YJknTPDyHUzARXW1DJFjrRkZmj8FxqKSRe8G",
  "key33": "5BY8zj3H5yGHxkpziZkmQRRygNRgtst1BPgSY98p38LyZtKvqyEUJs911M1hanz7wSQoFTgFBzz8ehikZ1jWKu9d",
  "key34": "5hzsjXparkR6XDKg3pDXuWn529tmtm8phGnBw2hYR7MPX8WMBuDfr6H3nehetxoBJejvVm2ob4KL9uggBf1NDuAR",
  "key35": "2g6ee4yWPrUkqys7L19FZ3pTYi3Mrt4iZVQH8GbHAqaSMxrQo3FybhihdTC8YfVAdUtrY3NaGkfzzzUqAQhNSbmE",
  "key36": "4eYtaBYG9uEdo3Lq5SiW1vmXdcGbYZjWYf7d58JkUV1QPmBujibRT3qbf6zs14dQrwmxi99X5gcjyrLFYY7rw4bx",
  "key37": "4RWF9zvdvMGebuk9VruG9DtGrVj2nh3KWBo66gFQYxwQ9hXSvKw3MEos9486PqkQ8TFkL25kAi7UunSQ8zPu1tCd",
  "key38": "5YDvWfjHQdfQ6ib9hFGazq1ooNYZHZoDxbLHsAMfPurgNXsMjhWHgym47Lqi3vcZ1pZ9gTz1FgMtJwrYuGKDMWRE",
  "key39": "Zz82iqDz2Nh291Kevkkt9yq9yJNRU3c3C1kjzAEpeTRgMH55JhQj6zkz2cDCinBHXBjWMM2DSkMEcPicbojpSaE",
  "key40": "5aRXQgiDJbkZF7jv1t8pSiyH3dWVmze31vqYLYTsMUsFMZvcHiyc22jELcwVDPovG2dCz3JQbtUwCX88rNsaeYv6",
  "key41": "5vQPvRuFy7TBGA6oVaayugQFpg5age2Rf1mkmQRu15m3oEkPWaFYhYf5YY6WyzYc2SJsRorWb6GQ2KtwZfxZjrJf",
  "key42": "XMiQxYSmgjbG6NTNFaXy69rdk7vGVNVKneturvskxGYZjM2MGe63zynCBcmuaASNus2iZ2UhooUFdicq5rnGr2Z",
  "key43": "PgRkXYWYuxDG45V7zrL9rcTWfR2kHgyJSbBHjLHr2UQN12Su1ZPuVAadrZseWEjMP1whJWF7qm14r7ZM4YDM1Th",
  "key44": "3jZBgxJyv8jrZQ4io7n2aRqpA2q3GPyxN7z5ErE2yPtguehc4PXkHGyuWdX72tc7eNWiy8p7gvdhyFwkHGpozNEa"
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
