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
    "44YLu18buEx46DQprtvTVKawQC3kviTi3ArSzogXVynJ4bgzATUmcY53PCgZspgRiZFBUqKLwxurqzfC6QhGTzuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o5XcF4uEu5D2LAx76YyESsVSgafovczesPgfTHNVLsmkfQ2SsrM7haU8Jnz6mWr8Rec92s4YFqYy6kLitkGxAFh",
  "key1": "5p6pb6XrmQbgQXqHnQtzkkt1YYBUmkpBRo7MTZ1XY4hUJjZzbGH6zHWKUBEE9kn4PAw3x9faEXCNkGpTHi3TYHAD",
  "key2": "UKbfVaVPm3FRbscxbP8pYHMuru3mBDbvd3QGkVVuu4BzewyPKcuiMyBwjm4RYdtaaaX4TK4bqnZVH8qZz451FLg",
  "key3": "4snSTjERtiocKXkEyQVJLp66XY7ePqxfwaZZHxbzPSDydftXPeTBeq6BJWAAQGE1PbGsumXrhwcsr5TraAjcejst",
  "key4": "ETxf8d3XNZoehBbvNuoFPmaffX5Y1hp9m381gDt4PPkdjdtsP5rqtMz4ZnSqtfL47x42wyGBnRQMi5ACpybiCLn",
  "key5": "2hqUEiBpCWJdhGWM97ScnbhCViCUxbMZ2EoV4FA5xJkVc1bpmeXpjihRkUbNNyMYdtqHwLUkca3FqRVPGr2bV2Rr",
  "key6": "3dfGhq6GKwps3EiGDAJKtWYBzgdNBwo7DRcuyfvZ5nFrRCStkBy6xUGUg2hFn9idYJgMbk6rWT5PbrhhszdVe46B",
  "key7": "5U8QgbHF5LopDr2GvGnBYLpSSpWL83s5A2C98ySUZiHdc45b2rLDiHtNgdBLJq7SUcCwyYLwdjjxm36CxzXZzmxX",
  "key8": "2tpym6NuB6M9BsXZ5qg6CNSNGeS4j3g6bHfEPKUm35wp2kNsja1bPu9ChMe8jFc8sJM3CcvnFgczXKNEURosF1fb",
  "key9": "2wcTtHzbks4qWTw6ev7XtHNUDmSWRckNLfzV94fgm5RBe5URKCFmk5RrWdBPm2dZGf53SmBA91vg3nWmHALfB6A8",
  "key10": "4fABiNc1vSds3uc1W13JP6LBQifMNGsG2cZ2CC5p5ZEZj3sbWAEdSCERqsTjS3FAzpdof2YsKUB8GAdnCWaygmRS",
  "key11": "poFAiPZGHeS8jfS7nnHgy4TUWhRUWChtk26isBAadQbbvQoypQ3u1YzU8rxyFd3xT4QrZwKRq6qNHASaNvxZCr2",
  "key12": "5me2wwc3JeYEPSuzS3wB4ns3WPzGX48Yj4fFGaJYnHbJ3Bfd3Y4r79edact9hVsUrW2eNdhiEKbaXKPijasvyZ62",
  "key13": "UgtcxbXt314dif2TCauFhQXEknpQCAHNR5Ej1UeCAmFxPfhDT4HUt3xfFNKp3JWmkrqBKRcqNHfwpA5yhRsep8t",
  "key14": "4ZwrQn8RyyzapASobEckpNzufByXyA8eexCgzXN23j5rtJmYFULNNYkmaxgwtbq4e2bhmh6q3Ha5GTgrYU7mLojw",
  "key15": "3VGNdHyeDuNABxEJo1ccQ5SDqSnXg5kZM3sQed5cu9bJSgy9TRxhmbFMwgPzEajxLuz86LEkaKgSr1aKnUgJfvWJ",
  "key16": "4D9pLdtGFYPo7fCUkDRyT72Hi5j5PvACyLPDQKJn8Js5DvgtrQRuapkUiS4uJerua3brmw2kmuZy39SmmTYJamar",
  "key17": "2jS7nALqB2zxAT7mJKnGTQrVWpni7ewoxReEWifoUPF7E3RL3RQvykcQB9dcdXWMnG5PcSSYwQXtFX3dRycuoory",
  "key18": "wJCYiLWJkzSEHAj4aELouVeViWLBJZZJiHJZ4GR7mj5BnbGiYN6zfRDyoutwEX5ugEX84XjymGHgCnPHK44WHoe",
  "key19": "4BkoobcezPcZMLknRqDjqcK5QdESbAaKYgAgKs5m3xxTofA3iFrWBS9kGret8NmdVURQwZApU5CCqCHcpfHBq3cU",
  "key20": "3RoeVhgUnhnfEm2pfohTyw3iEFoVFc9dFfcPkW5pQz2RcWQepztX8ECYLMjLAd9JSESYS45W5oDg3N7Nrr6RWksX",
  "key21": "3Pua8tp3d5hYdHR2an8xixX9L7cMT7JiEJjy3u8wk4RU7nAf8Y53f3mjjT4dbiXMQRmJ5P6F5e8j6x8JfsQuyeFp",
  "key22": "4hBLbxJK1SqNMt3kWxou9UCvtAquXM6hyyimi2zFCET8irjvW5rGacymDu9vBJfYH18yXg5a2Ku86bpVzp6a4u7s",
  "key23": "gTPTYzfxDMQ1u9NrApShoiL3EFXRvAVxjk4kmWNbBmsiCqN3yiucw5LLWiGqqZ2JVGgv9V5mdoY4HugNANgmStk",
  "key24": "5Derh2u5LGU4y1V2VX35NnywVixF9M9ayQLyek7PafuFA5vELW42QwPwVetvSGYQp7WZPpqnmCSBuJymv9KGjzva",
  "key25": "4vrB3P8xEKMubkrDa1PD1PCXgTAUfeF9aucxmjyQ1DrNn287dfbzFMxyBiV7WZTyynwEcVCGHQ2LfU8zaUUPp4Rq",
  "key26": "2myZxoqfRjub9ePjs2s9DUP1PbzvR7cLE9rb6iDyoWFpZk9CRorZU5w93GbAaYyzh9oZBSQrsvzDwm6s4EENq5GM",
  "key27": "mhdiCMD96GLuHmRaS7T45so6VPXVhA1Suvrk6EGaN2o9qG3ioXBosyvunqEL2qBDXAVyBC1VAt3zwAdJ87pQGDB",
  "key28": "5qAazd15VH8VBhMeiheEqZzJHu4J34Bb27BMZV6N8ZNEmR8UpdD7LCnL9TJeKHbW4z63Rkske5dPPJY7r42s6bGb",
  "key29": "4JJ1mCVTsG3x6pa1pSHcWLwzdYPomvngcL9stR6sbXH1vCCmhKRMufe1KE4uLUnU5fXopcopqxYHFHJMis6KHe6n",
  "key30": "2aXJo13BHKg1mt7k7fwJ2zc3A5WDApkdCzoUNugHGLpuEHUAzFJu3nDNFJc5hfRqUHmzpSjomza82dJd1QBmYve2",
  "key31": "52pQJ9PmvrFYucAQr49xB3xyBuFY8GmRDfyVG3QGVJLjg6Zcxj2hpnqyiuHS65H1G2cviUfVNhWJ3VpvSPGU327d",
  "key32": "5F1xzehqfXbTi1X6dMYxLiDVVYGGR5Vuosyi71gfQPZHSWHS2dtsBr47fWk52iYipLSEHJvFQLjWEBnzqYVHku9M",
  "key33": "4sgggMtPAZKrYpgXvKDPDtVRmj1J9vBFr2j6hXf4mCGPgPsEk7LVu1TQWbu7Aq4PykoDG3YdiPNhsr1tsd9pe8Yg",
  "key34": "3hJU5wkQZ4K25Govy4PLKcfaSAaPoDX2m7ZyoNtbMpGx5PyosRGghWSV9XsPcGCPYEP5McVDBv3smotk2uchiE8q",
  "key35": "3GNcT2Qush9vtYoaYC5X92X8aWR97RmcjgLbtyovWG3fjTEjXMSJ5R1ody3RK453pFETDGJ21poK4SJ7NuALMMK3",
  "key36": "3vupzHgHEiu6XsKAgRtNCXHbzbzqHamyDAMaP3AazUD3JCdEpXa6ucs8WFtbu4xEbWDEuTFim2HHX4BFBMiq9XH9",
  "key37": "289Y7JmZ4XgKPZKMCSzVvgqHERFMnwYi5pVYudwVCje4ozxpW6aPe33myo8HDFw3KvEd5bp3fMtSsaLCgfDBjsAr",
  "key38": "4rUbAawcFSqo4Yvc6JTzvwQUjtLF61MkRx1Mshh7iqXMiqjbJNxxiDWKdVUUjquLqgFSv1t7AoFSrdtgcjVa1MWH",
  "key39": "2VB3zPKXy1CVnd5agMUgNzonRfvkLqGiouTvVmaR4NR4KieeETSbV4yTB3jTwjvtzWdEt6XoiG7VKjX4YoFshE3H",
  "key40": "5CGnRo3evBZxSu1d3mprCruQ9Z1dRBzPywqCvcmM2jcENUFGjqYNiGLhUwLDzd8ocN1bKq122bHpYVSWBaLqz5GM"
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
