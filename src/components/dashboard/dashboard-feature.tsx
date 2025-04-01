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
    "25r82RsehoFn2fAXcGn2VVk1Dsj5cQuMC319ehCGhSXm3uZji4oaFAiZVfbW9SsLcd1KoaJV9A9tKE1WVFVXFFh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ou5RNsQuqUH6YhnrvNvuF1GKAK6bWL2eWhUA6cWhzLFnkJbwF72sLs9df45kuSVeV47ueRT2VguPW9rSzk81tt9",
  "key1": "4karbrehXBziyBRw9Z4RhBCHid22jXU77C4F7xx3XFYLPqkZcjvZYqXxgpKTVhaVcGPhVrRpnQp6darjLsdtq3Q1",
  "key2": "5BE55RMkmzCczYV4iAyrcpQNuP76iVddMiZ9byaDNEnKFVwwqx3m757gZQpE6MECrXXFeYSKpDB1z3orh3JNLvAH",
  "key3": "2bjocfjQXDeLJp5xBemi7j67SJd5UEZ8KX4R6EDazTwKCRBCkyxFpt6M6ZTCk2iD5Ue4GTiLpaR8xVxf15sQbWAz",
  "key4": "3xR81y3T5bNLpixn57RMFWYngNqRveXtzripw9KoWRSqvn91owyQHuSGNu32LbV3Zo7uPjonBctXVf55FY9EMuPD",
  "key5": "5HbSCa4DrYLgyHVpMQ2SQV3HfcYxCupGjxmi3LsAWNR8591qVX23x47ghz8c2TTKTYN5LcwabaejwHtRqVoosTjW",
  "key6": "52tWSEATF1ydJSz7itnw59Shg5tE8hB63JxPG8Dc4yBLcZN4C5ceFBExBHHz2n5rovyAxsdSNPb7aYNjQKq1mNGR",
  "key7": "3NvwzxUcuFtZGQVuZNQGFk74Rgw3UMjSJVt639B5yXWhr8jnZQR1VDGGTWT1csxWrxH2XLpYus8AwXwcni7Q6RNM",
  "key8": "55BApkUhzoWQ3vM6mg6A2oJDqbySFJfhNVU4PkANgjxRFP8dVGd6nnhNfVvCdtvmvWuVcqaj1DMatGaCdXTYPPPx",
  "key9": "3ts5mkHzZFAB9rqhnqE6tQLJUwNQMnFuZ11z2jABUppshpKJSWEY6Usgirx1XjFPP7VzbkR2TVNqb6tqMrcSTJ4m",
  "key10": "5wDDRjM2wY7DvDnem4U49C7XDktSmGUPryqNZ6WWT9NixuE6HQVcQ878EDHQHn45o95ttcfPruq8FwncyKjqYJM2",
  "key11": "3QexrUEmgTAs1qysZtxPvojWrp3VJ9qa2C5M7P2bMfTYf82QfmjQyLqRE83gYqfCNvPgvLueoL7bKHqXzmNJYG9m",
  "key12": "2fFGLsdZA3ehTGx6d9ssd9CZz8hzP7CfSd8m4zHWmj62Ck2S7PBGWFECytcrBoJp5AH8h4RN3H5rjUEMUj2YQNEp",
  "key13": "4yJRuTeTTbos2VYuCC9dzVRajvnk4EDKqGBhbi9tMMpFBedipM5uSB1FWKPJv7n8bUg2p6XJ9ZVwpsSz1xjXNwEy",
  "key14": "5sUcQz9rRWMWxcyhec2Q2KTfEjfPvFjDeyFb5WCXvk2Vw13EQWUjKZzVSSLddm8rXCca2hboHNcaXk9myTVo8XPL",
  "key15": "4dPNt6XHabUkeg5C6GC6P3g25MEAXLEgyE8dAdj2nezpR8zCTPaN5vEP7w4j47sQtHcveZTLAVGCiSf8YH6T7Gi7",
  "key16": "2WSuPqoCNKkLFVHQYeeoQRq3Eo7iUESGv89ajTsZgabW2LUJtMGjFzqsA1U6Yn6kMxskD1tJ93n8N4KPnQDoMUfG",
  "key17": "5bQEp43vfd1J7uKmQBeNY6ZYnr1VSp2UVm8atQSHn92YLPTFXxbPmPFHpFHcfuLoKJtnsuJCjXsCgJ9DyQ13DcS",
  "key18": "4SHzLdMU2FyjzLxnUrKK9fT4C4Kkf5yUBWqJTJ8WVFJ9Y1StD5J1jK3soc149NJt43qQSbt8rEn6VuxJtN2kGnf2",
  "key19": "3rqt2oXGwktHPs4FzbWBwszjy4h9nXitaTrum4ySTjkmfnTzycNY6SUnGg5u2VS1UVLjy2obXycN1KdEtgosjgy5",
  "key20": "31xRyJZhSyRMJ2a3gFDRdUX3pMdqR1p2xihP3tspWxsVcwCP7NwgLGJg9KDazxZNiivVBnD4ou55FMd6KaJyv4ER",
  "key21": "4R2D4UzLKUvdy3sg7CGEEtSZCUDdsrEUBLepnuQ1KnCP66GCinEiSAcsdHmvqpBN1Ws57JRY2KyQZQoMMZZfrWzi",
  "key22": "zCwpUMQuL3Wnk73jL95zYFtvdshKTv3YWwYAh66tQKPeqM7a68vz7AFtuExrRxdBGondpJjxHVbXhSKpdyE1eAq",
  "key23": "3gxGtCSiQmcSmr768YyXuou193JzR96xZAVBRpBagG4zSsxfa3PenJXk9E5bu12S46KyVvqWW8hwT7pBgUCx2xfm",
  "key24": "FcJS3hWDMvCq9n2tUSzypPdkn1DE2SZLSRcY2TmCru1RyK6oFofRztuv973sVwo2PvEmUq249jtem89VkxQpjKa",
  "key25": "57rTLs1ii3E2Hdb19j2o9Ua8NXXBQeUfY3BJGujGyyg2sMKLAVqcAtmjvrGuBs9ALk6WFDPGhjW22YoBp6CxSh2c",
  "key26": "3cHcRTW9Sw6mH7MyiypfFsEmFfcRH5pzJzDMuYhy4wVQe1kCK2N94gBK2YS8bG6yDohSEochrMHpgqtGWUP9DB9T",
  "key27": "3ASvKDub4cT5Gi3PthonYuyzxWiYtUuPXv567tcmc2mP9RxBmhw7f3o8UZ2HoFMvKB96P7nJoRSzbhKnG55h5bxd",
  "key28": "4R6UCfLGSJP8nNZxYDVKeNsLQAdbCreVRrk1kgwb3fvmmrQxpJkxMYBGwQ74Rg11AhhgkgQ9huFVz9CFnk6kgKPB",
  "key29": "31gTGmWy4kAnWTMyyeLLe935QtVSpRvUtRHUCzHR9vAhzGJxHish8mvp7HLcc79izdccRRhTBHR1MtB8EHFWYoxe",
  "key30": "5tTAZTFJJ5tip1kMNQjn6aex76otcxDq48XVQYBDUneGLxnAa9z5KTH23U3rdgyjSATKcjuvSse3eGpMHfKtEbxH",
  "key31": "2DqnXMpZGP1K2E8AJMNd9cD1uXKFZVdFjMVaAc7NaAnK9Lg1wb1No5zM7RhfZMkoRPpCXYQpvBvRJL9ZPmbPbMsc",
  "key32": "5PFmEH26eYUAkjPJBxiLNjPsnSYYc1M9MnBpirMzodvrtbtwx41gKkmC7sEcMA3gFR8qmejwtYxGwtaYKEYV1G7n",
  "key33": "4Wk8qt6E3f8Ub4WUZJyJf621NT1Kgxf4FeGR1PtHnksMhbLxzv56yAGZcGNJaWtyL6HJvB9rLPJLAD45ssqvTKfs",
  "key34": "4FseYPadzkUJmoyFHdYfVRvfhmDHDayZoCG14tpxjS6NSWQ4Szcm9xA2NqGpKmrozhK5CAZSJUcqDUJ97aKgtJFF",
  "key35": "4rHSfiqeaQaU4cje6zg5vxjqh8qLjZDFKooKa8NaUj9mkMzogQxgQcjJ9KMUB9VqFvM3dCE2VG4xY3ae1KGoKQXV",
  "key36": "3yQNnt3JYnYSx1ZtLk1oiv3aYi5sHKRVQ8gRzpnCqq5BhDg3batVCt1bG2AjiaEiyY99Dpj6YR78PcMsGmNSwvMN",
  "key37": "ifL3KvFM6fvs1jUqEibcongz9mYagXZm4vjeaKuKLGF92U8dodiQTZUE6FvCV3UkNeCYrP8BRZAQ7WmdPvn3vfu",
  "key38": "343SkGo3uoZYczaRXft7R22uRf73tLCrBdMi9P53RRtY847crvb6Gn3vVUHTRfFQG6aq2jzXfedMRR5TWT9R6MPB",
  "key39": "5CNHBb4UoBg5iYScuTFK6hWuCnUUFxbU6ryo52ALitZhKYUeDUcLdeNTP6HTBQxMPrb2BpukKDjPwg46F7LD5SUx",
  "key40": "4V5UgJHAT4z7HcCoU5De3gQAmYvtwrnoPMc812GPjtoiSuQZ9gJ1wcJ47TdFDPFg3r9WzE26TKSb9xRaaszjhaGR",
  "key41": "3DiJdJnbpczXJrYJp5V5JQv4VXF7XkzsSFAmQTPRbkKH1xp7zK9hn66WhGFLuMSyTWugD2MHJW42Fay8jeQXhhvu",
  "key42": "4vXQDThGxg1P9htGefHyZojRzs5V789VNjssLVK4DmPGn8SESM66dXoNaCXR2N2R1UggWP8QMW4zvaCQRytmFCUT",
  "key43": "5tqgQuYgeUqvSaCJXg3PoLsD68i1arUj6Yqc36xtTJVuhKA9ruAtSto8qzjR51KEKhCbHB5ZXjpAkSadbxiDWPTE",
  "key44": "3s7BU4v4oM1LUPwc78VzDJF8VFaB7KNBnsVCZq34LLoSXbdPZBg2Qy3d8gKePiM7dHdCDR4sk12d65mMMzUGwebh",
  "key45": "42ppAjLsa3FSGyiZHHmDocAhCwD5eJbM94WwUN7Vt5T1FX1D1mZ2P7S77gPxTiE1gZ2useXKSpP2kwDmyafoNE4c",
  "key46": "3KPnUhaR1miri6rEuqr5eWyvwgzLtvNchQFWWpwx3KAW4Ru4jByhhLxpHhsPdmoFFE6FKohTEGCjqB5vPuf46Kzv",
  "key47": "5up6dhu5AL4GPgW19GbAvedNyETcJSyEJWoQvws6uZezwJ31KyNtk1WFPNoMRoKQnMhc235sfvN3SyMiUdy4uU3M",
  "key48": "2XobntTCmMXfp6iLVvT4qyYoq7o1kR93C23iYEA5w6NTfNMzJY4U6yiV4fnP5i5aagCggAGNQr9DjxJdmqvzr1p2"
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
