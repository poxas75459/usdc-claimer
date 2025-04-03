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
    "4YfFAE9iBi8aAm3M4WiQkogtQMDk6efpgfyBFuqgwLYUZThyhWBab4dFZsVZoaitTkgexJYryxb82pjkNwtDvit6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1CUg3w6cw6Zt2aC4tzGBqUmRuuDfM4hGyW3mdJaSiySeVT6FiBYJgWHqLDueJphXNZLZskv3wQS8QJDXyGKrAsv",
  "key1": "3Xy6actqcr1RRFSJGdQq3FWPq8zacMSPkbR6wx6FGMbCwQuCicTU6myg7PM73FM88udvX4F8NYFEn6U9s8tj1ktA",
  "key2": "mNHfdumyVzT7KUpQEAC7EfL3bGATFvMh64pi3QvegrXnUXMN49JhYYunaABTvjApduBZfMubDw2Ew2u2qsmvUyA",
  "key3": "h2ti2JcemiqKiU815kBqEBMmBv1h57QcfJoC91VzQGugHNV4JxBGx1Dd67n6CQfHCrb2ErxuEEmJDFKdhboHCkK",
  "key4": "2XkwiHDAh9cQTfZckCoFU4niR2THSpRfHwd5RJmCsd5aHrXPzVc2zst936HTYJhpcb5n3SFBcV3wQVNDeywAw4Bv",
  "key5": "UDnb5bR2WPBspMKqQqvZLLpqpMiY1J4M8TnDwiNtTcmu9DN3nfAN1sE9ZPKEiTzpNEEz5mr9t5jPapCsX5Jm2Wf",
  "key6": "2QiLHi2Qun4R4tfpBFS2JtkTQEqs7bmhiRKtA6QTWq7AY9HMcfdxAa6tWUj7cn3TDsfk2Zp2WuSQq4KQtqUkVPJW",
  "key7": "2mXFir58TGpRoezskQbrj4MrAk2NiVNE5MMbPSrYQL8rh5dnECXfv4fNWwX4DxYSzVpTqpgFS2faxYXYtMPPWQM9",
  "key8": "BkK5xeNPuv8wUN6vZNcSpq9RPDcqA8tig5qar47tH5H5cPnH6djiASjyiRjK6taHpeAYKm81uxoBwY5eZBcu7VC",
  "key9": "5h3iSSV9SgGFQxckS7ufjaRxWYWZfVCTyGouVzMop5ZLMfybunEjvTSXekny4bvTXeY3ZscAfz29epYn9tZvM5jf",
  "key10": "1eEhrg5rTFMG9wo8cXd1u5uhzTPNtSfTeDkcEEwe6P2ckD8RaQfs9H3tsCVYtXr1RHmhaYrqjzQ4ktwJr4c1Phq",
  "key11": "4uGF8HGrCLrshdfMGETSGNbFVSbHmZRKUQJV5vnJznzd6joxMTycFoyGoREG7wv8aHoUY1K2v75AfJYM25gvRVvs",
  "key12": "4aC5A9jrsxY5aRaufXPqgpdnaYNMZdP5zEV4aFMoUt54JcY3MNM9CvDbokPUmGQqjbCSEWm1oeZ4pvA88EWCJkau",
  "key13": "zr8h9Rpt2MyzifakvjYLHMeeXdKUAqMrkBtEdXww51N4dhXmmGpHyV7S1WuNdgAHuExFsntDjWcTxPY5rsHJQMT",
  "key14": "3NwKT8YK7GgR5ygraeyCvyA952LgATAd9niLMzTuGvYQPAePk13V2vgP75AUCLc43FrGpUEzhomLw2y3QQoRQdN6",
  "key15": "5e1gjvFpkY6Mqf14yt7fjjmnVUGK2cKUV3w5ERu41LXX7VhJeEonG5JABp4ZJ4RbvmjJS4bJwdBm5q68UgwLyhfH",
  "key16": "5LfgMgkUhxMJifQnXuFfa2GdgXW8RsGNL1L4g79mrwnfBcjEZ999SADiepWZmFBz4hreoKS9QzpZgvkZX8bfyXSi",
  "key17": "2dTADoayX6HoKwvPJCLBbvkfrLwTaknApfJbCXWczFUWhrT9JPyHkMMNWyNW2z8WuWdBkWMwkFT8FXhpmz7v6G7U",
  "key18": "2KBkC7UqSSvxph3ttUijPrRfMfypJfwP8cqx9mURMPurHRtukoZv8tdLVSSYCJ64fHfgwLHqUEaaRzknewsjhMS1",
  "key19": "4zhBWcf4ECsauDyNEaZaK6JSM9dRA715pKxmrmsnFmeS4sacb58juQemwTKeY2Wc76bMnmqBzZddf5LiP5t1R3Ei",
  "key20": "4Zekct5tt9KWSuPro5NyuSHwijxg5ojyRw915QwZh49ApdNNr5g3RRx45NKdneg7ygLH7Apmn6dB51uC2dxTrdqM",
  "key21": "4B4XznsQj1gmK7ngSMUrx5Dn4RSdoPJ741qCBGVj9JioXaBeLFJ4nMC1mYGzJrV71qJGM6DSmz9CdncMFEdbxU3F",
  "key22": "gUqPbo3eYS6R2RxJzNrFmsTgfQmdGKKMrZ1UKhrh1nbPqTat9XaL7rjDRRgS4m2JcDLD4QMms7g9Uc13ApiTKFu",
  "key23": "31vEw7Q1RdULnsSvYDaNttzUNVvYCEjEHJtMaTa86KXPWXXCM4qfbynEvFcJRZtVDKZte4Pa3sxbXDGAHEHMHUZf",
  "key24": "GjGuJdP4x9DndWCLLzR1SK4noD3DKqYzx1nrCe3a13TxGMTBQRFLMZBBPtoTdyRrYmqoJd1G9RMoacK7UEjTGUY",
  "key25": "3qsAPdxgwdX3kHXhA2Mvh4rcxhv5jSk1kMGwVtECguW2z5EoveUJmoEjhP629yrtRZjT1GEZcjR5UpSjJ4LmmLyG",
  "key26": "2337tnaAskuf63kUEkdmCCeg5PrA1i3YeTUvQ32jqp2XLH4ydrWiyt3oQ2WqGpk6jAyqB6KEKfnjKjz8kVf5AxAe",
  "key27": "NLSsYmqtMTDqvwbF8Hwr8o1wP9Kro8ijda4biWh9mWSrkdwYC328CsiKkBptJ5nrwivbE7wXc778oArzWSuSfP5",
  "key28": "5r84GrFhJfVSpYMdGUHEJ1pd1FnEyLB67Szt2NoAE2v2e6WcyPx8m9VeAqkb9Afdcp8DB2otziGy66ptjbbGeo3s",
  "key29": "2YVvpWyQQqKGbqBQwvzEWwzC1RFJrHYjMv8dcd5xTrNvv3VDxWU4h5iv5riLLVqdjPfvMxC45QWYtPgMBwrGYBnM",
  "key30": "5NhfU19uaA63PCStu8gQdpbGp1YoDsKZC2WHTeByuDVfWfKmzuGzokHhmu7nb35HqJLAMrt2rViL5oPTmzDoNHRg",
  "key31": "rA2WfMnZBueVd9BpYX3mTbg2G54T4YNbPw1arfYeEuEb7uhdybCsYpd2B5f7jjJuNFN3v9UaPX33m5nq8o9NbUX",
  "key32": "Gr9idbiKZYpbzrWipNJ17E8oizBByGrmQPeGaH1kM3cQMnX6cUPdrZKu2EapHsENU1CQYxmyeKcQg5gjhMnYwrH",
  "key33": "4NsvAcuGxJbbvovmMMdGY8ZbLqgRusYYXy442tFGYVpHsFik1M3x2AVStTHU8KgFjyzbjGv4ePuZgV2S3LbdhqhX",
  "key34": "2PAUxJoDsp9B9ZgYxuxUK1XAhw6DW7q5w9HVgEZdsAgfVTRQzpKUsMKa8btthJGM5oSfiWusXezSeDS4m7QKyGFJ",
  "key35": "AxyWYM64gPWzdD9HBJFE1FY735fYHN5MiuTV75XVMA2JQazPnXBrgCaVQhdJXfnzSS88wXPrshYr88aTHv2iHKA",
  "key36": "CcfGhzvGpsX59Xk162vFyEEAmMhqhVm2U6e63TTVTJq8P1XB5rDwrDWGmYw4ctttZxtz2qwJRW2eBFjY4jfYPf7",
  "key37": "5YmDHkGAe9xwJ4X2pAzQCxN4nR8kRb3a11HimJk5hskDSzNDenYXAjhWokGtFemvakWMDtVx8eeFfjn899652NPU",
  "key38": "56GUU3u7upfa3CWK8zjxejqKZB8aPVjbojtBpge1pgwX1NwBoqT1bNA56KcQLrbcbWg46DEP86fR4CGPKJkPJqWH",
  "key39": "2xtKXdNdLbTHAd74eNDn92bMQgh6res7oemGPRJFxSE4aHJDQHqokjr1mepnX1uuVFM5eS2EYnUPTxtJ5exUa57s",
  "key40": "5mbhSynfJ4hysxgeT4X9CZ7YqgepbtWQSfFk4XazmiDtGMJpKav4UhT7G653HWtvywF1eTu4CoDYAf78zVtatUR6",
  "key41": "2WCwQwvGgjPS2Wky39nhZvwFUQ38bRP1dJAj6XXqL8NN2fD8Z5dguLCMfq1THy9oTB7sPRocxy9XEguftpbn9F7p",
  "key42": "RWPcMPu4hYuFZJFvLThkVJL5LTx32SUPrdovgXN3TQcEZDuAMoaYWBKP9mSN9L23DcGKs9pkkdRVVUPe3ge3Qvt",
  "key43": "4k3sQd5g3ZEeVEivhmQxb8Fsra3msNdrNET9hqF3pQEjBSjUYNGs1kygeKb3WLTcEuCz8n4ZMs7yoDgAiVcGoq8J",
  "key44": "66mG13jRuj3Y2jAVBCLe5kZMnwGti6D6yLDQkw4VFoeCwf1VAgQFu9S4RhgNCBG38WEntpXMPjF2BFneD6gSGiuL",
  "key45": "4ZatRNjrX24BbG2gx8CJqBNRDt39bcHdPmg8WcsBJnWY46Lq9QazDd8UFBjkBYqa5aTdqwjMLMBAr7BZFPdAKpAE",
  "key46": "4qw8k71gMNvSWF4fqg2F8TXEa27LxMKQDDPabAA4KQSTUz2rENpwyTbJxBQSr6kb7FouVFRPbeF1WqTEjHmYWCnc"
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
