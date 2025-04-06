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
    "65HdThY1G1Qamp5Y37sdw7UvBjecaJNpcBGxwKghDT7wws5cpxdy9eS3gzqY2WSJEyn1rMhaTn99iRPLsiM3RZ8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FTM23CsVRJebuGp42BvTJLubhyAvbuA7zidEJcGEurocvrLR9aWkzzM8Shgosma5oCez6yqaG2u7AtSTNHHns3a",
  "key1": "39tCbQonALxTJvZURabtR6dAYfoFHremA8tcxxeJrg9gdJMzcoNFhcjee1aHyygSqzS5JZHuVdpzn3MnBFiBz4kL",
  "key2": "39DhAiNQVC13uhnxW66NGxrGJ6Um9xfE15CpHtdYwLNYFYkZcxHtgDCmKD3jJ4hF6DbuCwSKhCBXQkcKtcLxjxRe",
  "key3": "5xGKqG4mK2sSZWbTxUjDR3qd4ELYddiawCUqexg1tdv7v8omh5BpScQR3MbvoJeBKeMSfxxjvrY7v4DtxVJitGt7",
  "key4": "2sV4qBnkUK7rXTFShEuTyFDkGWMtBbUbYA5defNM8wAzZA6t5sJNCD9y7TYpNfWya8E1sDSwYiBnP3abaaPFyjpS",
  "key5": "21HXKVEicFGU7DEkVVFLzZtBfRNiEqEhCHvHgtTmK55cT2JrEciumoLMeNibYBje3EVYTZWuPpK4xrSQzhtEoHsa",
  "key6": "4TKwuhZdRByZTBMaHttRTXEWJr5TqqTHqWCdv3QM4MY8TdcaMdVqnZmXAHhyQkSPhTMpdpcjnqKiQQySVAu14JD",
  "key7": "2oDE8sbbmX3KiykiC9SY99i1CM9xVAXhdRutssMjn8nnwGcYrAYz1PwqdJ83otmyA9TBdv6yaNNKyup2fKSnif6b",
  "key8": "2ak9dx8xWr6B218ymxkyDQSo3WsjaofTzNkkNBuYNH4Cj4yT1mbssHJQq9H57NVGmGq9XHGLbMp18YvEJMN9jSPt",
  "key9": "4CTTKX6BL6hn1auDkra2J2h7jd8XgSBqEawWr7aE7hWHbmqdPYWxKn9SShHwycu8zC4sWLaaPAK2o7QCcwj9vcK6",
  "key10": "2RJ34hbKm5xjH2WGCd8xyguqPWxgyzCTAbQUCgkTHUThhDekzajY1zX38Ymdr2vXmP9GtoQBjRBE21rhtbQdaEKQ",
  "key11": "5DxU66zwCTTTXkvpo1ZmZs841QKL2x9ohJi8jJHfXHnDbAoWcqnTxPmHdoyyj5FqCJpMxKNS7VgK9cxdySJsAA6E",
  "key12": "2ERnoC5E9a856wiQ3w1Y88ceBj7pSE7ZmBKmi4KcicKRFRv3vr3ao9XS3F3fArNKRTNACtpQhNsvoWxEK4c47art",
  "key13": "yWLqGY5nks8kFjxBcxyC4pEjJ8Mb8HxSc9waDEUAM6PtMjEnd7b6DkUcwkymiJhfAs4tLtdbjyFMkpJQ2oitJzH",
  "key14": "4DZevLipF235cqqmbYeKJqxRCs9C5JtFJmnC8NgMmKcv8tmM61SURqN73gYVr5SC6iju4CdnnsySG3nTPbkPe3QM",
  "key15": "5LrQYN8Xp3sMbmQjFLQSbz18KnnsEDXysL84qwHeMLmBjpiXrn2HTgSSs7CthfJmGGqHNR6JkZFdgpYzaw6ieRmE",
  "key16": "52HLC3zrwYNh991iwhfqYgnRdL3eAoQnU7eALGyYNBGwQGyGVUmLbxhZhg1DMfvvhpmgWJYsFL92b276SdbXqmDx",
  "key17": "qX79hUYSH5BmaRJdAmrxgTpRDY5NXB66PVz4sGvkhqrgj71gKJs7FXtzf9wy8tFcjNbcBS354BmLBA54aQQNU9e",
  "key18": "4GcW1VHLAqkPxC7BdeMKdzhCfxvj4KxoyKw7JktdfYQZV8qx3e326jwhFX99Gs1gETGAVQDkkHccxE8ZxSEeuJ58",
  "key19": "5JXmF5ZTCRu35AhRdCsm28nNSYKhEDZUFuTWYZujhF318f78LdzUkL9Mo67Hr78HR6M1M9ss8Mjmq3HkzcUipnkX",
  "key20": "5KFMaBpsi2o4dNNxB1qyzc8MU8TyoeHURct21ds2t178PxaczVTb7i4Srhue7cuQp1WPbEmAdj8STSctxH1LPJiG",
  "key21": "5BT4cZ6MWDSgNRgMipkMsmUBtwK3rDPqBxcu3u7YGt4ZbCRFEa9bTZGEScNtiiZnPoyQkEHg1Sz93YApAHNunabS",
  "key22": "2pGhZMJAU17xPkoXYRjmskUCM3JoB9J4NEZgX8KzbdH611DoLukhdihoXuTEDtvsUUdG5gXAfQ7A2ttY7kwhBZtw",
  "key23": "3U4NTLMpc81gcRHtLDy8ofoX7TMsQX15jv8hq1JEdJ95Px9cUMcJY8YgAFsiPjomDeAgQaZXJBxcjh8HHU545ZX7",
  "key24": "JZtREuw6ekrs8SEvHPn2xoKiK5wstnRami5cVAchTERQfyvDTTj63BbE51TySvVXpCiY4gsYwdWfxU189qTLZnA",
  "key25": "387XiR2QoefJ35q9aZvYjTg3KtyGbLNU2NG49v3oM1ZvF8pMr528aVjKiTpgUwMa5Lnw1FAb17jBPRnTwSo69yxi",
  "key26": "Jvh3PJZhazZhzUEbnbz8QvRgWWNziamjRqHrUfi1uy1KW4xdk9jSYmUXxwnSpWCfWmSAP7QHBE1fmCB2Ec22JeE",
  "key27": "5GEk1CVLa56o9YaApocFoh4239sWZPfMj63i7VMDMeRa7CHgDYMpHZj3FnU5iXi8jJz8xGCVT4QxZWkN6iTJGzWY",
  "key28": "5UiKircHrSWdEExcuTvNgRBDkmExEBGpX3xahDir58rHPf77nrjJdLHAJFppzPt8SjyjFeruHjXuqSMYnG9NhNbp",
  "key29": "2GXY2v4Mef7oRmrsZrpmRZBG6y7nELsD1FNa2kGaAQqkhTYiH53KSZCsNF77ZYV8BWmHiFpjDATjpmUpo3eAcJJ6",
  "key30": "3GsvaT5TpGTLDL3g1eq1E2y8hGumJYPFvEHtVLyMGxaoVhxFNVom2BypcuQNBbuCArQbxh47SnDcjWSPi9GZcaKF",
  "key31": "3PFHRbnXv4P63G49RmjCQsTCK2p7bpR8LPuob18WbQbhSijoRJSVfJVm4ykih8eeth3rTfqUU3RER98n3m43bBkB",
  "key32": "3Fio6vUqFvtmfERk3KJcSWFvcw4ELzFHVxbRtsWNq2U8Gqe6BC1VmBmBUf98qL11uEdneTjXfUNm7b4ssJGtcT6g",
  "key33": "2fxM26Gkot2ynooMjRjM3HEbx7bm1UAcSo1tBGpGnaUwArxVRnSRw9jG8GkMRR1GTn5vfP9e2DnVUuEBKCXcc8jN",
  "key34": "5sgiUYvSGGRgcmUqM9RDEotnLEuHqYRmeTiisQKWytmjXyRDBz9NHoJJysLs2bCAXMuzrFgHSqYDQqQtrpV2idKB",
  "key35": "5jA6Fxkpc9j3Y5f2eyRtgMHixawE6CehD7shX1QVjYLNq4UKp8ojPnD8e75PfZ87YeP3bkjX68KyEkDqXreF9otw",
  "key36": "2QUm9uzXNCJMhDZy2oHeJiUwuXi5Lia4PMhp146ytm9vafXxFQNhEyduxM2xH8AwFk7MYAQgwXxmG7wc51woSHyh",
  "key37": "3QRnu8bZwKVJRkKB12zkGRapiTjH1FHVGPY4w5FZbqHAfDUBVcxyYdZMtAup118GsobauQsieAPVZbFearCMAWCX",
  "key38": "55yLvJc84hC167xqZP3vB8JNUPifGc72GcKAenFPmQyj96zkjTPM8sy1DrsH1ZNt3nJyddL7foZ3ERPRfhq5UiT",
  "key39": "3VpiMqiyv9rv56ohKrfpkm5NMkcKJWfEfTza7tAnFSx8hL92QwgR8Dg1N9ooNf7oFUmxhdSXe7Cf7aXWdcvbgpKt",
  "key40": "3uDkb35CXdFYGJ44iDa29jcCExAwBph1GHEGxyaVunMY5jpBFpxB4CxvAUAE665ZLP1V6NPTaLW9y6UiEio3nL8S",
  "key41": "3FzpU3A7qwX35KYsbcH4Z1oghQU8GNCorovu34Hy6QLxqrAJnMeGz1SycD6RLYmT9WZy1pofPaAZpBrhc7RS57zV",
  "key42": "5QZvPbGGxvJCGbNqXsWhmvewoqBomfXSqRdv7s8wqG4DwF7aduMcERZDh5Gfo9odGsBD7tHn6iBCF8Tw3i9gTPqv"
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
