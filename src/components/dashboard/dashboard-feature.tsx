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
    "eTQiFopPoEfkhmfXoNJryfWgVchYTtJJg4nmxtxHcPv4iL49yyEZfCBRqVzfmw63Ls1dRULabq8ebkzBQDLiQDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QnkMjxuWsR1ZBgm2x8K1NU1W5WVSb55AM7FzYV7gbD4YvixqJiWXxvPhaXPSsBvqWMT7bSJh6Vht7spF4VAgDxU",
  "key1": "opeavYLP1e1nU9CJdvT3qiQWMqhz1etukcn58puVmXXUiBYwkytnBa217kZS3EsyAKG6dQ3E7LvpNd93Qg3SY3L",
  "key2": "kGjY3TNZtdVpHciXGoxVHAg7zWM1ez5A1WBgM4APPibNadCRoM8h5MzaZuVTDKddincHow3V6TdL2NVDiupnArG",
  "key3": "mLrVhr1UUqDjdcz2HHHaHMCmrvsp4TFkGEbj2GLWgRKtaXtokMbmedGZUt2GMnwiTSs5ZjvGtgxdMFCDiwggKdz",
  "key4": "TvqNAYaGHyjM8fcydgwrp2gCRgsoKEPa81ncxrfo7ZWmxwEKsaMJMe1hyfQFnLjkuj8e3HEAhVnV24j2kTpc47n",
  "key5": "5ghJnowTASi9KeNDFD6YVPCP1x22ZAThJCYqx3p7hM2XKNRB7NGxy9Sb2WCExgyaEbeQxBEocthW9YxTtdmezCgd",
  "key6": "29PPHPL6aa5rVqnbinMiBvH87x7Qz2ak84RfbXkHPk41n2ZECVWBmuWkvHYa4iffd5i8Y9iGHd1EA1KGYac8KDxT",
  "key7": "62vudspWd2krDGrmEhkAgxZrjVbBVUv7Tsj6AhAA95Ckk4iYNPqM9fJndrsoYqPyZhhxutSkcvdykWoeejQyZvak",
  "key8": "34iS7RWpjeqBSwh6uSTHv5PNRYf2rRukYu4NQbo6EB2vJx6282cMQoQ7KZa5gvqoYqzyUqSzN3MwXV5M5kfcpXEx",
  "key9": "TcgSpLLWS1i9nk4dzGdbqkLBVYiN15G7N8759Tp1vF3fcJoKSg69vXQ9hRXHiKuU8Uvn56uV4NtuW9XiisjuSq4",
  "key10": "5xjVg1ouY1PpWFHBaLEDijjydaMaebsz7vR89W4eWCzYWiA3cVS3Pwa5qrWZDaigQZqehKKRaKFjBGptAsxTBC8y",
  "key11": "fEPJpR8MHr6tJ4gf3dNG3SRzzS7b5EuFPCmYpAGQFCRF4r1VfMdqYJgnahmrta6HsmLvqZYDKCubo9mQqi3y6aj",
  "key12": "5mVhVkyL5NyUVionzoaZtQ8YnSFHfxwM5ce33jeFmDcVESh1GUXD3mGMuCqDXN2tiqaSFw689HFUADs8NhQ1HrRd",
  "key13": "2h24ERx3mtSQKsqPrhAniGRPrpthN9BTLLRTqZfuVR9o3iuDTyurXBCeZ1k7Sdzkis4djdee9vH8TQTV4aFxH4ky",
  "key14": "59aBaV4gd6v6oLoH2huQmX24Qx7ciVhE3A8hYVtVFeuzPrcbTbejMKDF8foiWKJsPuuJSFgF6MnK5N8F28hAdv7v",
  "key15": "32yaUuerHUqykYgTWHdixTPZjxNFgiipKb49jpAh8NZQHtMJuEtikAF7itfpkYiHiaHngJNYMyDMfU1tmwmEcDXy",
  "key16": "rrbARM15itNFNUSwMJgSMPP3wXLPNJ1oPVRPtfy2dpWNaFfzbCPmBcssU9TCKW4465qQDvX77KatmimNUeEtAPC",
  "key17": "4LECzmDtk2DmdggFr34hYX4w1MGtsxE5EcchwLrgMjFUBHe6D34cej7GUKFfLejcsLfWAs8VtZRmssRrnRLHz1VY",
  "key18": "4bPAAGc9DyyegK17pyr3KxtqmMm52z5oeiiT6chQNfkt9GuWA7fVzoXjzftCT2WWy4v2U8iUNxj2Xe1mnqVh7u5R",
  "key19": "MzCRcqLGcmkpmzhhktbk7bLMj2D5xiGhzDvcPBuU3dY29Q59rhhd3QNWe3VbxZBRssZRnjNZduoLzV5Uj5mLk1j",
  "key20": "4UH2HeWWQAuQcjgkf5Ld6Cp2K3bKdEEYXYMbnC9LeqwjpBwU62MtDmFB3hN6CpMoXrMfN8CmJ44nmqRi7SzPfT1x",
  "key21": "2LkM5K4jXthYj3a6DL7YuDH1eXEq9eKjsxzAsUNKxpqgL57eCw4s7LA6vyYYaAPu3cVFqsmcuVJP2dPBag3wUhhS",
  "key22": "45bwdPGYXnTRsp4nks7GUDnuS3mR96dAgKB3Xj6uMfwf1mkzJnnMVAVpiFQ2nemEy69DMrU5R5vBXRwvpYXFefgX",
  "key23": "3oeSHCsqFP7VG2sYx8nGmLtZqdhc8u6YVGaTuQnqzXMqrjYqdnd7X36naXu9BGcBxJgfTGR5cAVDvAfmXNRpwSyW",
  "key24": "2Nf9aF7dW3vRpSShNtQnGS6FCYPuhJRiLDinB37z2QikBAyTnrgKK1s3yegiKWcTrhugw4sMHKVBS6b15BW5NNgH",
  "key25": "4tyjFebBpSoSyZ3wXLj1edvFBpfMaQj5QXgj4ov6wJZXAxNEvi1dyDjmykAB9Xaipr3w5i9BXiTtrAUyoSfj8ekc",
  "key26": "57uSBGFYDZFvStHZpqhHyKfhHwYtF1jjo3uvNR9JeaRYg5zGfGMJiWqQ7Ss7sN6kvcVuiMnuF2ZPQR2q5LbYyGvs",
  "key27": "FSVJ4KSWN2f8fU9DZbwj1vej8rHhk4ug6Ef17Efo5ng3wYfL7yZHsKFtzEW8cowdxhqh2q4vcsvaVDs2RScso3h",
  "key28": "XGKHKDqGwMVup1Yi9HSV8vFt3Tj1svEB36GR3LgJwkpacdgxj5Anx7kxUGi3Fa97UVHGrxM7miC5H3q95RLqBoM",
  "key29": "pms2tDEUWQqBonvYTxcg8EzLeHBLDRReMAqabfdG7ctJLKcwzchgAYdqoiXGyFv6FjsqHJGaidUutz2aSMGbc4W",
  "key30": "5WePEUV9bva7Z2jfDnLnfhiJUfnbuKqun83RnCSE98AC8tfWoWCH16mNGgH78E3mWaBN7hypYr1dGfz8Bea3UNgM",
  "key31": "2JbcA419mCHtTxbKfQ8nfw7zLwQ5Y5HMBj3ySM4CRJsDLgFvJ68JB13fBcK7jiyN3fca7rNLWGSL8KTeELpfATko",
  "key32": "4s78qY1UeggNRdztGEXnoyz1FYYaTDX5qXLVbPmpcuXG5VMvCneF6kSt6xZRk6wAw6rywdcSM7dMfAEfJf4yQqht",
  "key33": "3Pvfo8hsbPoMTN8vuhyPUJpFgSHP27Qmciv1JTPWWNXFLaoxM1ki4yGCkN53pJhBQHDyhga7A7Mda4QK3WpikbDh",
  "key34": "43MPc344breM9DkNaKqaQBFjG7BUEVBz6BV8AzsuufgJhvNeddEkR3hHfyUfYm9unWQ52s46Gpf7cUKn5H1bsY6d",
  "key35": "3mQkU56Tpw3cTRniqndpfMNJTZoFRxbT5b9VYNURmsnhvDokfsjyMrrykQNqjtJ9xpBzt6j8u4jfEPwT6UmVENsG",
  "key36": "5R8eaS72G28wKTMfSVhScYA1BZJsk1JdmWFRAoS9HrNHZiPfY7WxdAiw6LnovQwbEhPgJbFbSiBwubbX3xSAUZ7x",
  "key37": "3bCrpP8QWjVUaySouMGMxkbucpqpa9UzRg3P91TUybiMvv7mebLY9zAt2aiLrXiS5guUJTRfAukuU4vUHhe4wGv9",
  "key38": "35WRCrm126vDsYL1cBJcE5PBpewxbPqVpvPAMceBGfdVSRFc8zRk1PMpoJhphotwVJr1475jiaVhst2WU1X7W59p",
  "key39": "5mzL6oUruAh4tQJiHCMGv2155CRfdRsnibVHnnFBwC7hU8yxKmH9n5yXkzTWngZkCUGgaDmnZpr7rbsN3VEsgTFw",
  "key40": "4C1iddj9W7zhCXBHZSaa3dZrDcUNDNWv3oYn8oJWRy6YVqQUmFmA7ZmqxtuzZkfG1ht2buR5o43Drajwn5nUXaNx",
  "key41": "K6UJzm6UxRdtZYcMvAZGFSmDcGKb25nxuQ7aaKy7ED3Ni3kQ5UHKrqEsEhNX9TQT4hwV6CPXPmvvqQSXUWAwT6x",
  "key42": "2KnbEW5RnnXN7YaxbhnAm9nk5JCY4RMJP45dqKGBxhJGYRY5MsBN1JAePUK7wd2CorQSJ3rbRNrLi3chipnGbiBQ",
  "key43": "5niGy4UHqpwb9XHJuYNoyx1BueUjGWpc6hD6XdFKHNBuKZs2puH4C9gCwLfpFHt6hDf3VYGhQHHRbmGrKfLxA3eW",
  "key44": "JRWQepEMfLAEyHzSZLBVFzjko3GzRvN1AaYM3XkKgFpmEktv7XomV2ni5Hx9LKqVY799iEGLySdncQmHRMxEqCg",
  "key45": "5ntFHr8a225PT9PeVpLf66aqBqcikPRZerdqK8ZVwAexvRjkNKCZV2ENCk3fCfNFmzCbRKMxbPusSC8aqsCgvuDf",
  "key46": "5xYMNJK5V7VJFZznXVb3kWn76oRwegYScJ1mnGZzGrakGXG8VuGADZVAod91d4ajvdfrT9TnBVBZtti6rsZLepNs",
  "key47": "2HiJAi8AZGsa4upN896RCVcxgnVnqL8BoAqLtobepmjtYbaTtnSD3qWTXqrGtzUdTPob79iZT5VCzq4t5ZehLxS7"
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
