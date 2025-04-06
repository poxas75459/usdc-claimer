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
    "pqMyX3mnAcryKhhvc3J3RtKbTy6qqWt9LgH6QioAcvCASPwvQA7hWrdwXo4NqHuaJBkVTAP2bodNc61S3Gz1EzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vkp6Uck23iJ1MZA1j9V4DrZ7VYPVaYkpGTSL8asK64zFP5rN6QbUjthGNMcsMta6NkPDAmwoPRtuNnDFp3cUmHc",
  "key1": "2m5sANnMKWXSthcLHpEnwZdVzPWk5Wiy4T5Qm3UTY9MR7HWMgtjMFJdWELARZ9Hw5vGC7dMvCtwnTvSL7vPgk8vi",
  "key2": "VTTorqgXBAyLEeERQ3Thdb9upjQbybLCGi92yJsyzvvHontteoM9xpd3ijjmHHMRvumiAjMT8AdQKCM59p3Ue6S",
  "key3": "3jezRpzYnjpXriNFj9aRFsxU2hGzsfvSjuq2dDRz4ToW6UjNvT17SBQqZgiGjcaow6keG2hjuzHsRy4ujynkdFj9",
  "key4": "34nJsGSTqBqrjHR6tqCL7C2UgXAvzV8DSiyJMWftWntmEmpQDA56nmPbp5Ldjogc26Ad3Ft6x6xD3Hpk11YZDZnB",
  "key5": "3LNRyZUv3nF6uLQanVKASjzqP2SMHD66hKtRqDjDVJ2ej44wkiMvrv5mcVchKT3DRsuFDP3Qh9cGbCiVVZNvBDmM",
  "key6": "2h9g679iRovrfwLfnnYTK9rWp96ax3rif8QWLxCeVszws5wucjUEuuDAfiimpWFLBBPEJaFYhz3bEjYCNdth3Y9Y",
  "key7": "E73KzujvwC9DVmDvFoviSd6QAFBjBpUnkns1JvfpvYHnX7YBSC2n9gig6XZTdM3fbwqqRg3ViqABBhhn21XvUDk",
  "key8": "3ZhwE9XAiqVbmzsrak7ztNr2AVuq8XKE3Huhy6E8BMeJNCFyvza5wfkhcWXu1SqcGFEjcyArFHpSmTPzjRMd5SRm",
  "key9": "2HCVXtCEgiJZJFPiLpfNkL3D8qF13ubew5kax4KW1BoLhJ5PmE48AK8FuFeJWgFTvG5aHRB5YsBooPk4UnXzkLSZ",
  "key10": "2BuMiidtYLWd1VwWvCEfDFfSNuXHA1ayDsddeFpLY9BFLsxTyNpio5aye8d9f8RZQnZGkQsUrd5rv3LRYJr4phm2",
  "key11": "2davekteqLJTCxMmfxev9Xt2mrjfhN4xnQm4jUCYwkfsiJdWmU9w9o6srZin4HEmSL6fMveGBKsc51YvHSaSvKHf",
  "key12": "4ZYDc4RRT97ATF57PCi8zGWiVBoGw3mnG4KzqW2MPPtPWUJV7F4XLJv6aVdRyF9QTjNieRHPjnaYK1g2dXB3MVyt",
  "key13": "8da5fkmR2TFE4Qpow3nTbSx9iqsaB5KeHav78HGTJtw488EBYfuqaZvvDEjwWmYac7baCidEqpGiqWZZkWdX2ax",
  "key14": "4YXUSN3TSiMtzFdHUpkeZP5ttGwEzm6XNuwbGiKX6DfjdakvLJACPDitcVbmLmxvg41cPv2NwtRffzw6BkZ8EE9M",
  "key15": "5CKidtmCFrP7Q8T7DdJCft2gREQVoA4c8ZiKcUkGx9W1EVryE5oPoDn8t2kjLTTArhuSu8yunrDBMuepgPThMmgv",
  "key16": "4bGCKkUHSSbjLrqAy7qGMwH4vxfQmXdt5Pe6SaRiZL8Lduj6L7Gi6ChtYDiPcoWtJd5RuotQpZYJ2piX7JXtVbVD",
  "key17": "4smkz8Nvv47mmfGRqauEUhm889ohRJwbKzG2ZgeanKpuhnL5oi1BRDdfwdMFaUEnLhTnYng9txJQidiX7ximeoNt",
  "key18": "2Teq1yGbRpPfoMYEFP7UsVyxs7uE215CXp8r7L9EwFzRtzoFEg8ejhcSwtZqYFHyhhfkcQg8QsRyA7kPRQjsACVg",
  "key19": "2TXD54HJvLQrRPwNmVczwte15kmqxYBgFWuAUXaQJV1UPhP4zC52qaWPE9yG9ASj7ZQoVyBdCzrZVTY9Mz3YyE6X",
  "key20": "hC2MvCuSfFLYLiDQVmACcmVroteUbMcZUGzitzGv4M46N1g2HERRUX3hfiZmaA957JPCPeAqzBZeuiytn3ATfKg",
  "key21": "2xvtSwoRE2HKpHJfJ4fXrNoENydoACxLHLaQ1Lz8fNox6hKNo17ExMyadJXwATCS3XD1ef5JZfHwcWu3RH6wurYJ",
  "key22": "u2nc2YxBeMSTUKMeRx21g5cNsNgXTs7C1tLcM6LvChsa87tbNQ4U3yjMCk9XsyigizvYZoDRDo9EzFPB9i1Z3JQ",
  "key23": "2hpmnmuLbjAYufcGpL2VZuNQwQAkasLdqakRdfGH3ngZJbFwooiFyuC5eNsUHehJqpyxACYynWjejp5jh3Pa4yFz",
  "key24": "62gbWUq3vmApZjuQpWhiidAKwCNHRLKtcP7LB9krAJfo27HsCFYRswH69YCJTsVfJ7Ajqwak1rVEeY4fm2r7YtS2",
  "key25": "5ipLPgixYY1SBvG2N33uXxkq9Aouq7Z2HJg3PhHovMubwMtkpRsfZXAGHkgZKUSzCuencnbuKbiGVFocuEs1mHTi",
  "key26": "5YXfWzFYHB3AwCWmVJFkeodXvihDACWEonf2LieFTmjhW19s4SUDVxq3rVYu1kAiVedZv7cVzjZ2if5DutVHVRuy",
  "key27": "2HrzbPSnSDceazEUpuDu88eucPtRSCcymzDt4ZrNMoLaYDuhP6GN2tzDwTqu4s7hymJhuQRfhzN86X8LWZAy7ETm",
  "key28": "5UhRMkUAtWMCxaq9LdJMA7ikvZpsE6QavEbmHoBQv712MsasxdcWp93XVBQLmsyA2L2Vb1vLtQbTLZga2vwCYkhT",
  "key29": "zCzN5vjfZxwcF6buKW1ykE78cYBsEXgNQpoga4urHiPai9bN8dhcPJGHwMHqmA2sYYwr5KXLyecEFutNo8UNciU",
  "key30": "2wEdX3CruXrXeZ8R1rCZjBn31JdnT2Rd3NiZqMJBJJsKhwazP6eiH4PWqT5UQ4DwdvdKtW5ADkqP7i5seXrXjf5S",
  "key31": "3DaMdXeMjjBoL1ZckfANtMf87xMv2gDSAYU6TdBG1TGTDyVmcKsEBpm7MFnpEaosKco1EHcV5VbGG5mMgtBogJ1T",
  "key32": "4Hcwugaqz3iHPNBLFpwA7LXsBv2n2MV2eWnbWP6crwB42oaxg9GQ7negPPVbD9YzUoMdcnWKJtR1m9Nab85KoPs9",
  "key33": "GNosirmw7QefQtfTuk6A5uwyhiYr1j9oJMqb76ASdgADhTZGBzjd4c83wE8ekGNhV11yrsPMkEHGnDyxDMTKXgs",
  "key34": "3TzdJggBer66eE7bgEobBh66EpZKm3G9dNAjJFZQ9zEuGfbsBpcsgTVXSLGSxM5ehe4S35MFYpiBDQinmhCe6fLq",
  "key35": "5cKmEZJHcEN4giwQtxCdYTtTDtRNn2UsCpufKr9egHMFQLDU8yfr5xHmhSAm4hBoFgNiXF1AYnpzJZrdY4mePeKT",
  "key36": "VMABnHiiqLFhuCA17KmgEujzpEmiQ3Mq5566ftxRq4stKXTKBWy2BdRdtteuy4LQjzD4TvaNzcMLPsYwgTQQ5uS",
  "key37": "5N89CLuYyxCHRJDqqywsMjKM3HwzhG3ZNXmPuU1kFc2VEq8zwZ4hGrf56MUHSTQqbUPG4V2bE2LndLNYZrnpwQHM",
  "key38": "5hhBDHsrd7AYz1U1KazjHvtf27QFxTixtRouF7PKeh2UQeHzkKBYHJ5HqUD74H8YZnMHkmYiC7PmR1s6WjVh5Tzk",
  "key39": "c1R52eQQP9onnZh3masQi4tAhpyqxbtXKFR75cRaA1HFgKMQbMJWDGsjVU4sRRT2btMWUGLpV5FGHHWDA38bump",
  "key40": "2mesApg4hrdQnERLQyPgfU9Dv9LQPrAjASBvg6SfiDbx5xdNaN1wwyzioRQbZ99EBssNVXiuCGZcVPVVcxfpvV1C",
  "key41": "27FBoxUMQaFcAREsHXqKDRHmWVb7Mbnu6YxZZ2wsDaeBcPp5cwaNFUHbsHNHL3U39HzV5jHmHsSUDscV4pcbPe7v",
  "key42": "2fwQrN8eeTVwyz32XhvZm1T4JddbEaEjMdjNML7hBbBUEGvdweWLARfYUVxnqdAPJCDh8V9rXjDZAenU4tXKnLjP",
  "key43": "5bMmh7hvs6ukfGSQVMpWXH1WaAyrBpNeRFziqQcN89EQECQrwUYjonti1vFUhyugGa8NDizU5mwfJFm8TvEA8jQh",
  "key44": "3qxmNK4XmmsfHFyyQMhkWzpemYLCzfneivBNNMFzZ5CC5YpEwUGETKjnWCd4fxeYafzApyds6rJwPqbxmwQEHiSo",
  "key45": "5THe9toMCjb3NMy4U89SCbrGfMtT44LK53GkZ6aPnDWBxao8aD43zWQBp4YvCE7FAqZBSAA2PQbPYD2mHHSxfvCH",
  "key46": "2sds4dubkJ4htp52XKfeRBET5M5WxymZufvTefR6JenkNMbJ9P7s98AD6cBgjvMVkgWyteQznXqMDL4TPbXEaQX2"
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
