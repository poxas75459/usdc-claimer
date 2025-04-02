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
    "3kcnf6EkUnes6NWY67vckLcbA7WtMyJr4k79gNYMfCS2CTtpHFE8or4YMWGGbDo8fahJ9bcPrprwH9SGA4WmgLVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M8kNnjjGbgdJD8TUvoXKNS8BkRzkDoRxfjy7vGSpsBQxSdjmx81vdsKCJqXRSG1DxJ9qLxKiqMADmVtKtWNwJhz",
  "key1": "2TEar9Zt3RoxLkxHXHDEn8VYYCACQUC6J1hsWmtDJE3Z5tng1Uc8tDdJ4kmn3Zcb516SbzNFj6qqm5YREQSF95TF",
  "key2": "edpCCN6631iFmCVHbXsaSTppXFsz2EKBo6r6bpbPn5R1AkaS5w4mZMXocTBGyCsTgnigPUNakww2s57cZL38YZ8",
  "key3": "4vgSE6iMBvaxTVsR9FyGFtQuRNPri6X3wXcBqssv5bYZdtRJ7xS3gx96vyhWN7e9c6SYVuGdv63ewDFx6YFN42g9",
  "key4": "38PjPTAA2WQn5SdqheGauVN3gHJhCVBBihksVhLGAyAgaKrvNqLsuauP2KAMFuJP6wH7ffRxLV5LAYNDpxQuYhho",
  "key5": "2ng6yrRj9FrVZ4otJ5FweUjWH3Ew1cPHUjM8Z4sXyyBrGroBnEqrfkVXxoG2Gp8hNpCbYcnVtTuKuDm5RjuPy4Xj",
  "key6": "t8ngbdvYxFVAKNLnJejcJdJKwFg6iLcMgs7UzNetd9FKkYRDYbxvzR4mERgwiT7ENLZxeLKHXfF9TTyiJeEVRf2",
  "key7": "56oAtv1PSPgdKrrsJYEHTL9CgsJgMeJzXfziZLPznyZzKrv9JL3BYNX1ibxyFUeRc2Q9xUwePHvuvDSgoTwvgYj",
  "key8": "54yoKLpW4NFs4tV3Vi3mLnwH2VYwCwFWxg7MtfjYH9ob2ihwbyqxmwFs75Fdwfd3JN9xpXEWmZPjX3pVezG7zcMA",
  "key9": "Dbqce1xu5cu75boRhw4hyECgTzjUwPhZgeGEvnyGCGNE4HPen3CV7rVnVgaGKq92cdCV1QERpMBUDbsSyC1bNXG",
  "key10": "2ksJb7ACz1PEHHjEsx1VpUvAN1xTAm5bYXNy9EoAVxWLksoKuF3XAetVS5N5D8M6dM7co1b23Rh2oYnBrNCZetQM",
  "key11": "4pfrEza3hU71YULCsESEhfqSZ41oEof6xpzMpnKgNtrR8CrgZi1cXqcsjtNhn8M1XVJWc8Siq7UYJiU18s1SfVq",
  "key12": "4NwgVZD63hqQAmjqu2MtFwbCPpBaVNjY6eowknrcxutVr7KaayYWkrmR3TCUMa72nsZsS83vPQ9zL4oAP2LjGHPq",
  "key13": "5H5LvgWoRgta5antkTfV3BQ3RTAs2qZ47fTsVZKG8LnEC5xNTaotKuJHDygfWmVfiejpk7UWPQd3caQzrmHrAH59",
  "key14": "vKFKbJ2EDMPWw2hBgZ3QytZAnKMwfyy1z23yX9GCo5aaUEjxeDeuQjCLsBVTUGJEPjWQTri6DjAU4ZjZTJFLjCc",
  "key15": "4qfKPdu2gMU4HxumZoSRezEDBZaiiGsYsJ2msJy781JGQ4Akcc9sLtA8MxGYee7eMtg1opqYnS4FBzHH65d3n2y4",
  "key16": "5NJgMjJYXD3ZppbhFoUy1ZMhrt4AmewF8sbRCRCT5GfJ7jvmH5waFzukGo8T5UVhhx3wE1pYAuHCQbryNTmg2Rci",
  "key17": "5WRdj6i9yGU6zqYdsK9RbwHZJR9boJAqvyQNStvopjuxyEkdEFARpq8Ei7hxt4ocgqeXQvcHsTRHQQPdzXmZw7nw",
  "key18": "fRV5iXTxtzPNLaFEGZwnpXPnSHf6g64iYGRjoDhWFSmwaQLdYcAy8riHR1EbqY4A3peP4sxbFzm9KCUNW2cEoH4",
  "key19": "66TMTuypye6egM6wQHgiQiQ1MBieL7QTy1jKhkFzrbjtBDLAksighvV3SfyYxxPvd5pjiqguLJCKa77BoXZBj8i3",
  "key20": "4G47A9rmZWYAh8wQRVCrVf84H1AupdskjmdjjeT59z3tnG4ztQitvDnpXogkiXwvBJQ3duvJQgkvpkgMd41CFktQ",
  "key21": "3ac8yMj635Fng9J5La2FKhv75oX3RyT82PUHhiDamJZjBUY2p4hMMeKhQb5fjK1ktu1tKhXVPA1hhMkKXYttRxG6",
  "key22": "5B17oDB7qwtbnWjwSJSw6n2jGH34fHxNxduMPhC2S9krYJWHwXS3h8VRz2yQdFp3a7LHoDnbWzPmbydMnxGcbkGu",
  "key23": "4YrChTnq81jbbiAzWqFTmprmXrepGDre1mB9upQeynbHJ9K9ZzkNqiSGaHCy53NLgvSZFQYFufz98sGnPE7BTiNQ",
  "key24": "5puSnjvQ1FzYM8wHZUuMcQiby1AjYfJKW6FyWwPizYipe5jaqLHXow8LNYNe9DZRdX6ifLUYyDxwdC1VWiRArEMp",
  "key25": "5s2xp8X4Rj6Kd5QzFj5giMqZ3drVfddVjbojNsRHLhFSPwgo2D83PXS176wokbthu7Gu5TdEAK7SGrXzWHsXiodP",
  "key26": "5p7atho2u5Wzmadt4xv4NBdBsp6jsjD9gGNkb9oMeXZFeUyAYxciWePsz84Q19kmqcHfSniZxbahPjoJ2qsscks6",
  "key27": "aGKvW6R6KZgvLZek7xY8k6jwy3EN95T9PnJiWiR2D9o9UBv1CXgAqLwPLpTtzj6MsTXzD2UDC3Nea68gjdnXMNd",
  "key28": "5VsSNyvFMPafjyCwyAHHr3HUc7ySorEq3sMTu6uvisWKxAxW5jSrctYNTatEUKDBdZSbpkep3TJSX5EZbRTg7xeJ",
  "key29": "2MzWguVKQvwMc1J1wmPBem2RhTSHsk2Dcr5rgi719NyDEDiDygNmGgZbmVgbJEFPWHWzRrWk7JeKAJd7gSUeJiAW",
  "key30": "3To1eeTH3AwuuDPxMrhs8UktknFMATnmUD3UhuFJEjMAg9NuUoTthACMYCXchpsjcU9JpPkE2XPAWXUofLo5WRZV",
  "key31": "2oGwShuLr6ChsaWsqtWihxPuj71oVz6SuWy4zBcM4ofeUqkAz56qcZp2PmN7jfTTu4tkw1Y8SubwgpWMCG7gaZrM",
  "key32": "4zmPyCi4GEqT4yQwMrZTwtcTiJMV6PWTghZcxzeUVZEPQdKXM8qitWcwL97g1V7fLg4MjQyqrHNs49WELdXWsLPR",
  "key33": "n2fiz2btKf6Ry2CYPzTHVcy2RmY476SLPq67MdPvYxChhRSZDMfiLt8BDCQMGPc4Ebr3eTAS1HLbk3wVnQecqv4",
  "key34": "5MswMWjrm1xikBvYLH8rmvTEAnZnAGMeAiNuugTXrDFBAWh8jWbq8u3ePwgMPTpru5dicFR9mTeNY8JNMVcP8wQi",
  "key35": "3EDgAakuUWse3dm3Q5F9eZUVwsTFUtLPZ9Ug325gkKc2oHb4qrWVmsEcB4rRgdcHoLopPdmERcprDRKZceaLPaMB",
  "key36": "VJPij5f3Dj8xK9patHP5gF12Gmi5QzJ2RAZRfZ8oXS9Wa1PVfAp9zTM5yiMcmxpvug1hRGeqXynhiMrh1R4JMTy",
  "key37": "38qhQb5QqAmPkShr6FSY1u3SJAjWxGgKv1BHHwzpVXXSN3w4ZdJRGoRXXpV6WTbgTdxp8EFQAfogE8u8jzNSCrgh",
  "key38": "2StJtyGoTY3pTtHjyVWd1my4AieQm5qYARzWj7ySAjWXrxkNCxNQgCCkjcyWj9vZMUJ42zswVz2GrNAQyLFL1iYj",
  "key39": "4UQ2427knZM5iYN3KjsopQzE7ZRrvuReurCS5yMsgydnGTzjB28XMBd7osisty3n6sdzFMRXhMB4cJ1dztPmcEMz",
  "key40": "Jyrrc4ENdeAwkLJfL5WmS8Jw1nwbVGWK2NHUpkvCUiGziM7emDenJ2J36jt3fWW4M6z749siHzq4Luer72bSL4a"
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
