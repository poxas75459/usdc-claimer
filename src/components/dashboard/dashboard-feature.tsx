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
    "2C75zxs3mZifi6owcwWSQUqbcrYbonzynDbNFB3yYfnpkX8VKHJLQtFpAB4Dx5fp5nKRbq5snKPn54chMVidLAj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49rsMbjU893TTNtvMkRaSaduepQ4bmaZ8qFUEKG3mFunjEVwcRAh68dRTdYoY9YqyrGws4bw1zyaf3qpywrdjL7t",
  "key1": "3LcUycZNQUuFe6uMmMcuFaxCJPKoR47Q95jMTaTiHPjjW6AtKsYcPzAPAgcCqRs1TqMubYxD7uNvuDoitFhFi3ej",
  "key2": "GEYnQVvd4VaDUE55mDNouvjUGiYUiddn2bkn2gpGgLQHsRUAnDySNE7Zn57QiTpBqwe3dWgWF8Q38tLnyZ6fSNF",
  "key3": "3i571quAGXqUVYPjAUh6YTax7VCYSkH5yhi3ZZdwL6w1rjkpo9UNbjFoLbmCiPQPDtq7FjJSW7JcJuz1UwRA3Nvg",
  "key4": "24jkA479rNoR8G11Y1H9wAn1Lj2oH93A2ytTk9VoJ9njvezB6Ku6PpGUUnAYoXoCBf1WiSX66mKn4TiyLDHyn9XX",
  "key5": "49bjght5mXsNektW2ZSZAcYjBZvmfjSo7ZyfiT3VrmAcPZ9ivbDiS6D3u5jW44FrA2RzNwafKyrPXwtqBfsRPpQ",
  "key6": "3FFLFbw6e3sCEn641m9cj7XBAgyLaBvhZbhN7sjydmVchPatZN9YYqsQG1Y9weDaSKzX1dWGombGqjV6ipuV3m5C",
  "key7": "5M1gLbhTZiB9zCFBGM6egbcSoATxufQPqFvBcTbm7bzFX47G8Dn9fu9AyUad7fKsgazMJSiqJnYbck6rb7kcYTHU",
  "key8": "3AgodEVMEL4G6wTJuyWtLGnAj4VKWaQrtLS9nFyY1XWFhGY1TUWFQfpFRovmxuqtJ5Edo4CKeRgzneHLeuKRjzh6",
  "key9": "565iLK3HYPpnjGWmf4bxSVb6ayZ5bvfwjxMkcwDeRcgyMMv6oQAs97neyNjPS1ShxrVBYCSBSaLnhjaVeEkU4bVs",
  "key10": "aXtauAG2ZyXpGDUyP8qZ2gikq2JenSkLRnBLAa6PPkXE3iGVwQHrtFFgpJxTPfgjBgAn6qrg6mU2mn24WgLEn5K",
  "key11": "3vXo6Vm3ccmVvhD4abVqqBexkwxMfGdvoixXA3ReY3P3kE4eAiPWnfNGYdkGchqHfjbyLh7spfv1BF3MWepUiZeu",
  "key12": "4F93SCGsQb3TDc52nbVDLkH6ut4R6ZKGTZANkuss6TcFicjLQpWbVHisCYPrvZNbTogbLzyNyrCLT4qMfmtk2KME",
  "key13": "5aB9VGP23MAMJvGdLS64m2ZZ9RbzykFt6ciZwbvLqt165GUAGGkM5gyQerEHN7AjQmyRdEAgghbrLrPwr3wEpzk7",
  "key14": "2FwRP8tDV9Ap486WFRQZyLUS4qp3R4rpTmCfNi5rStgJ8xvQoiEbLn5pVNFYAh6VvDhpeo4KPS4JdSTZZvcVq1sJ",
  "key15": "2pS9iGtVAvogf3fMWzQ1ZGdvwwsVvUoTC4mdGL7y2yA84EU1hgu51xeDrbByeUzAR6WZu3gG76CkVpC9eTQ7pVrg",
  "key16": "2uioBUvQMaU17xhY32bEeNd3Rtc2NGxmQiCeYPyrwNDxWuiwaudnRw5YoMRbJHMdA82tdxX6HcPTdrbKTTfgNYTs",
  "key17": "26t9n7rGWHENPZ9WiEdAhAg3SwCrKuwqxohStgpQFYok2QioYkdMCQygDXY4u2CXKWBq8nR4z27ZRaBJRr59QGeJ",
  "key18": "5mnafnx8zQ3ajfhmGqJNrZgKJWdWos5HTSrTCUe8F3MP64cxV1Gq8xuSGvRbmWQMEHZ5XBrdd66Gd2gQoq3dCdNJ",
  "key19": "57Ynt1MqaAeSLqqg9W7DY3hUBcP7E4XL7MY2m7w5FQp96QCUzimHwxmYSHCwciFwxZTM2X1H6R3djDeQbdrYQSQ3",
  "key20": "3snZZ6Qy6DYkexjxGckvbtRHTPNTZZQxug24QMAAkG7Y7caDiDJwT3odPvtP3agURrCfxeFanEYw8jaDEeGugRyY",
  "key21": "2SrkLrnA91Unrs3AJMkPa2WtvFGUJHCe5WJYTdHnhFPikHUTjcyVyVJQTTKwJoB5P432q1gBNUpA1x3SKf7UkN8C",
  "key22": "2XRLL4LXQDwjGupXLi8vJA9Z7Y1c4hR9nB843boP7WGS7qGzkRcsD36N4Hb1r2NwFm4TknqFEvLVxNa2DoWYZXxK",
  "key23": "348xH8LmbsxY3ZkcfvZaZS3fwJSWhKfMoK9DYtg6WnJtMNiTpoiqVMmGhiKDjEu7cquyr93zgAJh1cnBFXEirNiE",
  "key24": "3gGpaBQJSmfxsce3yb6GyvPXfD9DfUrxoCLHMRXwjMHApGuoX3TeFpVasBRfbop2uGvy1TrEj4pjqi86dGqj9TUx",
  "key25": "3uBCFxZSJoQh2WKPMGfVadY36w4pybZcmwhGHsHp1KdBsyvp6Qov9CdPQp1Y2MZpRCmvB2iR2WTLhkbHEmAmggi",
  "key26": "2WK1jF1ULaFCyq5TuDUL2nHvTzGoPHAktVsNgfPkqKeM8TyENHQqGitkccEnYR3czkTYpuB3CdoXZaRGe8xTdkoy",
  "key27": "3E6amHuHkfYApFFpiehG5JV6JacKsyd7TYPVUqsuZk6e2PcXZ1qKkWoPrbHus1w8mnrkueEAm8xHyDgUGSjymGw",
  "key28": "42p68RdYv4WNJw5J5Vd8dMWW3f4US2s6aZg2dutD4V2UPrb49QkXkwzXBMcwBC9W9HPw7KuBC83TKGJA6Dk8mRDn",
  "key29": "2agCj1UkAwoCg4LE75FCk1ysUtmwtCbmvvanLP19cMnTQMB4NVUzTntNkxbyg7hnkLSqRpbxKvA18ipsfSbF12AB",
  "key30": "2gUVDXD678TbrY4Aty1aauQPx6m7GnWEPHnVTmbiR2e7x9WNhfMPjWUMBfrnSs9WAE2F6oTrRyBaSq3GGVV2Koud",
  "key31": "ZCBjEgKXNycP6uCE9DGyEAijVCbDabgpbiAJhztw5dvo8EaHQApz9x2rcBirEvLE7CJ3mie9oUesExueKPzehFr",
  "key32": "4re8mxz6BfKRH74VxKzASwiTKrkgXPxikHEibke77muwyqUwjBj7m68jfjVu94V3WVLSzqEiSugS6o3f33i2GRMr",
  "key33": "qU6PaPMhjV1gZbPpo7UFo4MbtoRL31n7T3iJBaEHxMsXuJtD8LufhgFL3gMCFAJ1mrwJL2Gbewv3nB7K7ptdRCv",
  "key34": "5xYpCeJGZ5XUv1BWnfkbdi3vnr7aWWbgAAJGBCxwaoNUy438ty4Npk8tEgrjEqWE4FmuZyP3bm9ZhT9RSFMj8FP8",
  "key35": "66KxSwLqKte5qq8vWjb8dLruxuZnR2AGBzZcXVSTWgTKbXSiygjuKWZF87moatAzHRPErNE1vjw3cq9mjWjmLtp3",
  "key36": "4v2Dr4tCAtdexjr8i8bAgX8AXb8xcfvCeqjyBfA59UgoARezGoAxy63FKFr9XRpXcstSFVsvFwvGaqqXYg7Umu1N",
  "key37": "3X4n7s9kEW6m8RShTsgsE1Zeq7w5kdv3GE2aJ5ymEMLkWNdRnQk2zTDG3RiGseBmdWGKHScTz3WZg4PUWrqobKYr",
  "key38": "DvRVPfMHcTFCnjdw62qrrwhH6ooztG2imjS2HUd1Snv6YHASqXT62HoA9xGjJwaxjoU3mFa7FxnCeKZZRvcP42t",
  "key39": "3Avv6Bk2aDP37NTmohfTBqv4n4JWeVbzmm3YfH7y1cbvodd6xZPsTd1jrb6gzXvPFQPz7obtKwh1T7cr51Rhn1kP",
  "key40": "4WA8E1og6HDJjm9daSqtHB4aX3Pf7fiSqpRayE58cGumwwQUQrE6ckQ6PrjNsUdRShmBza1zNUhbqgqFWQJbRWGw",
  "key41": "2KuaJQrPYY8rWGJRfyuB961gayFzBpn8ud9dNmbWtD6NAkYrPEQXoLvBDwomswq7BNiEg7m6NGmm3TMHSvuCENfY",
  "key42": "4GLFcdiaRnRXmWf69dSqoeow133u7Um8CAXxaDgN9GrjC9CAjcPiJqUkfsikhaWAeTHutbrFsej9egjTAm5mLV1P",
  "key43": "435oxvQSTmwwrK5Qd2zLFuEaDFMkDVhs22LKgn7cpsMUz3dvgyGSBETVXp8y41GAf6MwkMb9ivxfjtPwGXsLyWpV",
  "key44": "23UTLSJ42186Fc9vXZMCMf19FVPsAGwQHYAfJjuErR1HkATDBvcemtUHp8BgDW26pppL9vVDnTmSpokmq8LPM2hJ",
  "key45": "2FDUPeaT5YgvhGMr9m2FF9y6kFj12kf56wgAT1qZ9DiavLQGHrZSPSBwQzffvApxzh8jD7RySurzAdxWEHuCbVWP",
  "key46": "4X8NR7QSqKTUkP6mdvZFKDkDZGSFC8AzNWt2qEXae814Ej6tfB9dQD545p3nC8zwSoJz8oMzcNcQkXbZqB4gPf2Y",
  "key47": "4g4u3JurSFtXrB8LXF4gfPBDMt7TYASBVtgz1f3c2uRTkdeLxtQTsW6eZ2aaCyPUwQSpqM4MBsfR9pWG8t129AAf",
  "key48": "54zuadARLU9pim1yvori4bF4Q4hPwGeK78wmEpG8MZBp2gZCwbyv86G842KiwXSYzzPcMPpo4LreTmx4yzbhdH6H",
  "key49": "3bnWoYcez37iyLqeyZiAjzr4y8eXDcmGcLLsHccDbW43jRqzfY4svnMDMKAAfmwcdaWPLaHsy1ZGmeKqjfyfdZPP"
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
