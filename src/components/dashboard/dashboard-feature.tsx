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
    "3HeTkDvdWVK4ifQrBRd7M8BdjJWs4u9SicsRDhpFF4QtQzNToMGZ1EZdxvYauGhJGG1XEYP2ketvHQ6DbtH9qxZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8mLruxLpAvptNHN8GoAAy54ZGthUFzWQobECo2sheWTtZNxdUjQC6BSZEbVzVfirs3d5rkS7EjEjLgSCheyF8Rs",
  "key1": "E8jUQXqvPhYsDorc4To4qp9F7QzfrzAFzkWyLomUdGN5o2EbQjtSbJutdTdnWPMLd16GDLjpZQqtcw6EipYCaq4",
  "key2": "zzHRv3AHsKeswsh8H1vzzZZWSAVy6RCi7QernALsb321z4BJhyyRT9gJTwuY8XSpDZcLXCD9gaUJcdytUspLd3Z",
  "key3": "5Sxu5tVGSJ2FyJWpL36vrtEzRYhNyj3x41pnEfV2WinngF86T3oKTZAUiP4mMZpUGkt47ZfwEGTBH9F6HcKxduVt",
  "key4": "2qfdX6dMJvD96m6XfWDqBRGnvGbGNsyRpBx9RmsZj91Hsd1aeJkqmrbuVdD3Qs26W8Cdxwa4qPmqo1A1NUcMAn3p",
  "key5": "48gemY5NQb7jhenkGDfT1qZNQsKcthGZV16nLCYBYcipnYnueJdDahnRPnku2EQEPR3SHBR1vzwrXsCDEn4mRyzQ",
  "key6": "2NwMJkxBbU1Bnf9F9pJDGin4y5gyc56X3Hz49LKnww5EjHQbjunmoNTkdpyo6Hrp5fHQWFaRvTyY18QC7MshwmR3",
  "key7": "2Rcz7AKvLVFRphqyJxCMGjinfhAnBxppmxkZmTwkbsuP1f9ehaMB2sscMdTxPJpdzZMqJFpX8b4vbmdv2D1quAE4",
  "key8": "2Ho1yGCMfptnSWBdx2Zs67H9nePx6LNSwXbNh88u8FHceJHnHYW3mDVJUJP2Mi34Huz4R5PBe8NWggDQiaS7BnBo",
  "key9": "3XzwHF2bgRjQe8RCY2V78jvNhqchzHLCVuZn1wiT6myPtM51K2rhgxPMJKDjs13hWg5qr7Z5DBrUrtGMZQzHXYwb",
  "key10": "4vg79WHoW8kYdwK6TuJ3BiV1U6gLMitWyvXkZQS3A6T3VEGv6Tt43ytqhmwPNstD9hgaFm6qonnutDTX4J2WjRWF",
  "key11": "5pFbqXFgB4pSRPPNwnwxzvvk1p4NCFNaaJGqsTboVuNcTbhUMRidmHAnnxudVF6sWswMSRHyhUs8o1TcLrcsNVL5",
  "key12": "3W57Bcv3zSwczm6rD1vVjFDUud48ZL3ikNDqukRuUoVGdDF1pzVqoqzgTwXj3dQoDkKJ5TUEuL7whawuvQUBnTzm",
  "key13": "ZSo9gtS8djR7Wc6fxZHpdYEks59GFvsizdiTao6PdbyrEkXrLqjiBevbQA34qWzKHYZbvRWeJfMRxXNtpJnfmHJ",
  "key14": "5Fj8cZ2cbeuG73XUiH1GPV3ik3nFPX4TqvbKyH4ECp2MERKz6y7UMVfF611H9oJrnirBgyPFjARdfM44gKh9CweL",
  "key15": "3i6jGLQQ5vp4F5rvQYsD2ihFnLWs8oMgVvpuzPFanVmq9MPj7FBfofWesaPQJMU7M6qammwKYznTZ7AjpoL9ZMd6",
  "key16": "4ouSZ7NaaesDTHQfFuRxj3dWnAvjEF5r3i2yAD2E8mPa5fpfKCmabDzshmAvfMzAaTUPp59S7BWmbnLFG5HQDtZu",
  "key17": "27kx395GxYzZcYTi4fHfakZSEfRC4NJL77MgvtAodfeP46ZqZXfcWjd98ULSn1EKys5nz1v5hdFG7bgLdUjZSr4A",
  "key18": "Dc9sfC6dyLHQ8d556hqKoef6W8j8utVn4RADVtxwvjoXneKJmFFCiTeAtwaDJmKu2aK3tkZcrV2S8FdG3hc4V8V",
  "key19": "2Hzm5ox5hKaWxynt6SC5NCjbfTHzfhhyAgYLy14FFvgxGR99nXmQPYtWCBaEddw9QBwyF1kYpa9ixeAwhixdGRha",
  "key20": "5MziDNuGCrXqkaVSS1k7wi5aY8SkQd2GDesU8PfgGDxsNbbjXFBHQqtg2M8kNfUZVaP8FXStzKTEhgfqbjs8WVo8",
  "key21": "3LuSQmu5TRB2JdSKj8uhRR6ts6cBXE2EWD75m291X1rBdTQo19nPJhhS2Y8cTfnATAeedRLSoFKqKtbWtiZk3dTi",
  "key22": "4AJMWJt71TJGbVqExDUM6sDwWaHr34yG3Rw72xKpLEZ32ULPrCNbRhwnrxDFoiRGxKFKmPWJ7pvaCGgkMd8bPnXT",
  "key23": "kiuRudtDopyVA6pbLZXnJYY4deUcgAuuPEKnpHfQJJ5wWNNJ1uq7DHR6BeNGHonJ8u1T1E4EfTfDaoxytM3qt7J",
  "key24": "pnmUZoh1yb4wgFPVkuvqgRMfgpfFGF2UDza8fvdJ9ALuGhEbogdkzFQTwXnRXH2GBjEZyMjPevBWsxcqPEPpLrW",
  "key25": "2P3u4QxcKDkkyZvtZBtMAHmf53Ydo213wF2YAyVjgxaXsJfLN9VXo37BdAQXbKwiHKTSP6Gk8n9bh7hZGNMn3tSU",
  "key26": "5bobjMfuKpmcrdYaeru3zHv3Ypq88KHhxPCQMPPQ8pz56ZJPRUgozmUoAPc95mCvfsYiYpD4ax3kxAYpiwgYsmnJ",
  "key27": "32311zvbRrTArXj2UTXRfVvmTtDohEsbsA2szepaUfgkiKKzj7EEihtvZdjrPn8BuKo7c683iFhnXdaHfYDpQuda",
  "key28": "3QjWbe7vjfzqyYMEaaAY8tcP8thkwCeRrUP5DAboC41i3MATucyL9jbE9bcM2JTgeZhSS86C88LsxFHkf66rDSpG",
  "key29": "5BbEsBS6uZvnojtNyWzzGR1F914FsyoqxtQYywxbKmEqWHmHjUPmQDSzXQvpQBTWaQzuGPdtSGTCwnbGLAHDnvst",
  "key30": "qGZtKpzzLZ8td2QKCBUpV6FthH8ajQMBM2dSGEukD2kKMxGfEvSMvu6QHTJYL5Lz8Bu7Z5USimaHF3YszpcTf3k",
  "key31": "5Ct2NtvdQHMUp64o3ZH9vxxXaWE64AjyLMw6a5CV637sbMtsBpxyiqTTgtRduHLVUBJcMGqj1kW8oT6vx8yKAHEd",
  "key32": "5oyg24h9oG8yenLxwCAhSDQZq8U6s2YPc6ajFDk6qGUYTzeV1i4SFAYVsLyJToAZhDpgF582Hf9V7U4bZB4qEpyg",
  "key33": "39MYTuksW5SjRd3ht8uikp43BccjpruxskCinwo2UJ2RVjMXL7ezJHtQL1oYhiLVTQ9HaQ52AyN4Yo2g9qn2jCg4",
  "key34": "5sVnnjn77C4Mvf2XvxnSHqyLTURSVTHWLjftMBefYdcksHfdG85t3jZVjiNY9NsYDYoqTWWkAb36RFJuB1qk59T7",
  "key35": "5vCy4rYpEtYbPC4L4fUkbgcZGPN7Jy1mEs9zA4bFwvhLyNFz7wjmDoEGJAKHGkE59S85jjhY3PdPPwtSfzMGaS8u",
  "key36": "38UcjcmnqEx7RqnS6YjayUhr2WfmXwvk2BzdCu96rnHBbm98DP3AZj1qPwdtAp4KrsBD7F5iAxRuXEAZDAMRfH5c",
  "key37": "5cDcS3jhCsji6puEeYWY4VSb1w1WDvnQtURZsjoyxaq8XbKZmHxjQX9rssDEmjuMYLp8CBrz9FHg7zmkGkE7YN7Y",
  "key38": "2Z6damNp66LEPZmMKnZ3x6qEa4TUAePYxJ9iFm3nEpmaQLaYQHFeAWusD3gtGatJABEUCV4EsWEsPUATn4VzecSu",
  "key39": "5MJMNpgGYdSkRzhmhkacCvY46zuMQ4dtcPUCMxJCJ6nMgLzz4Z3pYUyY9hw3up5JCiCVCi9ZiPJMBvkXwAYHjng4",
  "key40": "47mEPzuwKeUcE2Uqsh9dQ9313kizHCmKoqwFoqgtMKcxMQ6jz7VhueeSUzZLgwpMsBGvNWke364veCvYvtScc5Zg",
  "key41": "Pq5qoT3tBqJmisafkH13aMs9SpvpL1nbHnh7aBeT3gEa1E88N2QAwBH7P2fwEcbVmekNZcEKf2eXuYKQkqr8hPS",
  "key42": "42h49GGmCMXQRSk23pii6ZX7b7H2KX4kUBPoiECV4RvWVBdWavc5saCXSzrSzurQTarLyG1EzijFe2ApG7Hm3YxR",
  "key43": "5HwvmVvsHqLeAdpq1uBzqLcSdRUUSmuXAf7vBAudHhQyUotpTw8rqR9tX3PTtKzWDedQoYnmEFrHaeYAMrAxmWka",
  "key44": "365HiKGt8p26Vxs5qqH39X6Vu6b1xxyMsH4cWcuPxpg7PKTR5PomK4HCmBj2EMRvoUCA973GBxFmNkp9UWJFQTFj",
  "key45": "3KwVEhb15EJmwmU4UocBEbqLYDWoAJqeDXUKRGpfTsocCV5hhQjHHyBhdfts3AN9hFPQUftmNBMnQa9EbAeSXtf9",
  "key46": "5McfS2sMukDvupJeqePGoZuv9ERf3XPX7WnFK2C1tM3pA3vzvUQiH3FnC73kPAiXYZmP5odb5cfbSQMu1WGL6F69",
  "key47": "QsmCMjy3nyedrmK9XQsxU6By41G2ZNudRY8X9BeAYfAEhrttFjmnE7rXUS4LLp4JP9UKgQX8U28cDA1yLKSgo3k",
  "key48": "5JUvTBv3YR8ySmba7oXdFgG21CvyGesmr6APB8yaEugm4dZdaN1ha42H48CKqVDLLNGcDK5qtpZS9bkmYhsY4k5i",
  "key49": "66W7kFzyc2VCAiTz99mTDZ7x1TFScyanGCSbCcTD4Me6KHEHuyNM1jBny7WV6Dknb92i4ixQuyT2oTideGBqWXSo"
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
