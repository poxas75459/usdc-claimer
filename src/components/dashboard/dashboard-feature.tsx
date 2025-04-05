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
    "5tVZvUTxie21Bjxy29XVtr8kiZT2m3EWB9TDVVH4MwGDVhfb2UgpVzhcgGNTDALRG7FyMGfLsWdwwv5xZH7hZtn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55D5b2xtNJ7YE6iweHFwbbsnpnLuVch1pJ85nn9AhMzJZhLv5MvUDTR63HwE6zH3woDC4eBo3a3ybuW1XAQRP8vZ",
  "key1": "5VQP9ha1PJ1BCeWTYVEFPUiv2VQb5SsxLpqbgvv7WTg6P5vXpywGcHGg7fETCB2vBivPMQpZy2TRt4BYGLc9zoJn",
  "key2": "4uwgDQ4AULkUnvhLdRA3LEp8Kqh6cQoAMJK4XBxRN8PnZXXMqpxgbhNAbm7vnMWUmsP9Ziv79MLJfhv2wBQtx69o",
  "key3": "21C8CuLBkReicjaVQYXnGrzc9FBZwDe5utWVhiedJ5STNAbyqaaNkxfDhz4XeKmHrwrhvH5Dtdwf7DgRyydYNZnY",
  "key4": "5MotVzovmKYNS27YnTu4GDvtYbB7Ysp16wdRwhUYdXRfmpeLKBgJ5dwx1V9UTGe9FMpcVvd8fTkng38Vvd3pUpND",
  "key5": "61mLHpANo4Fv4FZMCt9VBDyqiNRdtzE2uGNi9T6V1NnU8DnpifmeWKtm9VbMnWUxbmNAmHPCmmzktFFfPPBkfU2W",
  "key6": "4FqTyg9mWbU8czEYYdCuw3dMTK38u17UnsZi3wxYXT73F8Tcm5y822KUBRqQBGmZeBQgwRuWhEqVcAp8uKo5A7PU",
  "key7": "3L5oWWndMtgENdMFyHUNDbKCQWa83fCAoAaWMzFb3cWJoMqQLj78zJt5PDVvidbsDV92md9sVidPNr7L4Vn3FWtM",
  "key8": "4LvwW1VW3QmQ5Bh6xfkHh6H7kjGAkSjBszM4G62MHBxtyh6FYpAWncAJLE1TynCPyRtyWKnDJ3MZok58hdrQDfF8",
  "key9": "4LmopZGtP4HWd5aFadDHD8XN7EsdUnLErc6AEnkW47seFzMfemAXLsZmTk23LBnNj7DFS96LrYgDe1QfnkpLMQRS",
  "key10": "54ow1x5YBwXfDKoDviM2FRW4EAEQKtUfwNJCUaT3WMrCofmJj5f7psbXTEJqUuZ9R8x6wtEr2uACR24vC6ypabgQ",
  "key11": "Z9BCSXFjR8QTtxaGPy33fRGaR1uKKt3gy8B2QbfTd2m6whfgM5KXLsM2GsuH7VZuCJKS6STCjbQEkACWGFR9zBC",
  "key12": "2CCPngwC5tWg4bNLYhC8kuLAVLegbEzKr11VdAGjBb2rQiqyM4N5Y5QqXtM7wf11F8egsEYBmaqoP8RKk1Ks6egh",
  "key13": "44ThJBsBwoXb37PRFxbetUHwTYJC1yBP15UHgdGaeJku9fE1eYcw7YAisVGh5Kwz9jksuSdWY2HCukVQ2A9Cg5q",
  "key14": "3sVN6yipRDSUgauCiMCiNHdFCGthsbHZWSPb5aoi2p2GjD5eFJdpDPgR4hja25SnwwidnqvBL1nX9PZgP4TUWh6W",
  "key15": "4hugMQ8npwDiTh5Jw3B9i2SUiC6XnHxhz4h2Vy6E7g7UxwH8ZijZDkoLADE5aczD5vRm2y2LGdCoJrKQxuMQEufU",
  "key16": "52xAJm9ohnWZBHAYfWxbaRQhSbzHfMD6cHjT4ZjY6UhqiGMXeAhzXAew348b1bGmRGvBMHf6V2vStfHQZmQp99cj",
  "key17": "5QsFVt1SRz1AB1YTGV4QkU6Ny31cKNWnuHkChy3m9gKyUqGukFYsNLEBRgRz83U4pnZDhYDKm8itDPHG3666BpHG",
  "key18": "2yQM881cxs2phej1uPu4LxtgmgvLLvb5GSg8kTTEuSPneYartMbsYQ6TY8YsdZCFy9Dd2tCd96yR7D7FRdKrVFtN",
  "key19": "Xxmpfp49WL9C24DLcsyukXZrnmmfNDidbuJpGYTy5foZu6bUL3LLpQJZeRjBkETTmoFykJHaewRV3jyDqreALtb",
  "key20": "2rvm9mWpxjFJXBdXmqPuzKmLwYTaCFwHx1cMhnhczkQg5dMqV1rWMQGjP8jZ7VXXbxcwCzsYpwChdNz4njFENFBP",
  "key21": "5xytASzBgxUgSPYyEnyT95oAkgmtByYJWfuMEqSsDkAKVkDH97YKiUMhd9RnbiafWd1HnTxqtsNKKtNbFLRnagcN",
  "key22": "2cMhGuRhJALjCvWCjJe7nCM3GxELwvHMsfe1jV4kdnTKUVvUTRd4aqY5zbVbrixWaBQECvC4qFybzNGziJA6YbLc",
  "key23": "4kge2CsY4mxiXnxeM3q3rZz7VoE9Q5oYEHkrXxrYzjzzHGLCzRUB1Fnx6xwDqRxe72BQGXeSdRrLnTygjwdxpmTt",
  "key24": "oB2c68XALGGimfdPw8oTgnwwrJvkLwYwtdt9HX18hvUpz49V4S74c8b8YjYHD8JhBomFErJrb5B5BdHALK8XPzp",
  "key25": "3vuNJJafGKb1TghUWsqpWzk6bjMWZWvt3Uh85LTKauRNS2j8hFuBymY4UuuexHsuWpvZGP9XoE7Rdm74LA6QvKqm",
  "key26": "2bjZ8a6PMRtwca3T6pZ2hVNn7qrf1qxB8E6YwsYyn5SBFw18WPLSnaMcDpoDgFkf7feBo9GusXiiJVhHVE1SsBAB",
  "key27": "3c4NNy91kXf8hfbEZ5sdahJCzBMdd1CmpKvbECuJ69JCJNPwuJibXZ6ZEduNHGuDhSeqevicJRSnfUUW5yQC4AAY",
  "key28": "3DHkKfarH66mbTsaEFRNoZka5WDW7at7NYsPUDrdnjWTypASAU8ztQt6Cvry19WiUY1vwyL2iHA4e3g2SNMXQQGH",
  "key29": "28Z4ncB2JJEJNfYp37UX8ciwL3f9kQkJ951QnLGscwke4HkfqrXBTFLzcBnpdi4BdCJhUJu6ASWbjfGopZvog3Mf",
  "key30": "2ZyKgjJijN3BHLxzus86jH5gf6z6RNNYWQDFjJ2hsDiiaqT6Kqz8cMm7mAq7DmQ876nkdpc7efHhLPjP4TxdhPpM",
  "key31": "41NpxszbjYRkNmwFLkWEJqx8TZnsu5fHEjdAHWMpBuZBfJtby8LsHVwcjg3h56Y2P8ZrF9zrWoYjypsYp6faSUKo",
  "key32": "57mfp31M5czqN8L8jKp1fYo8ys74M87MiHGz7Wi3J33PEh9GMH1fej2tHwkA24zspPRNGnKfH2t3Zh9ep9JbZR1S",
  "key33": "5xSJNV3e7YUKFkP3ZL21w9g3BNHN5gqdUwa5xL4sRnrxDGKEesUmVTrmfSmaGLcmsNwYhbM7XFE9ZJ25SwEynMUd",
  "key34": "4y9DcrWtNhjYmcTy6YqgzSAmfeqqNfg254RLDJ3H4BoXQH3QGfZF92A2bK96PuStZXLfBMcpvoGMcikn4mCT33G2",
  "key35": "79uWAur6kSVLw5tVwR9EyMxUPbUM8nSXaXnsVB6sDWbNmA92io3wyeLAE4CEgFXLp7Lrj8SaG2qVCAASvG6LyiH",
  "key36": "33J5PEU8Eb9TNwiDpuedQSGyBZEoG2aCzow8tF6QGYcxM3t6mhVeX1KmXAXi8kbbGLDMUjwTbAx9TsXW1Y8V3Ewq",
  "key37": "5JtfaeAhn5C8ZDDA3gHH8Mc8jKNR1XTwUbksaeTtF7Ghp6RXAFV6pHDZ5rYxpVZ4Qna58CJqFe7c1XPwT86DqsYi",
  "key38": "4a5tst1wZ5BxDLNEBSFPg62TnfA18NLprq5N9Gb6DaiE9HgeUaRwdKm7eKuJW59T2JzZm5KCRqj2ya6cuDTkjgVx",
  "key39": "45KqEJAGsN8YFxMjyLPi3x8uhxH53h1fMfiv3rwfDfWpcLtxWoqJwaDwKmSSsBLLJzXba362vz2JXdSZnTYG1oxi",
  "key40": "4tgm675raKSRCZmi25MgHUpCuM9LHY2nL5UVYf8LpAxMhhLB7fxm8ApzyD7eTiLkZUiJ6n5QJBihvLZDGL2g8kVw",
  "key41": "3mgcTdhcpAc7kfpYXNNo6zfn7ez3qLs3c8Pd8M7bCZfGEiUjyuawaiTfQEeQGQHBYRTYmBESUMpmWh3bSNWy9aK",
  "key42": "2b2jGx16JPGi95FHToEgio8yBiGsyqjkBVnEjXDkASA68LJg37eWkiz31D17s834vGnp4V5zeRETjDgA3HVAdQUg",
  "key43": "3CBGdLakKzsooB5W4q7ccC14wPSLQ5zpvZTQqaQtn8Ywsr5V1W8aSPpLwTiCg3aymn1iEbWbeEUUoA3ek7XRbcWE",
  "key44": "H2VG1HxyrTxGMjghupXMiDxArH2gKcto9NBrh9ZyjyxKHZYZLbivTGeHJJZVVrSsGmqxhqmfoZXnrB7haWyuHcC",
  "key45": "2Y9tJTxWeBvEDoCMzfLHniyu77S6kie3Za3zqDVZfg2aYMUaxekU9SYPNCrTvyFY2xtx8NHpHyoc2p6EeieWyYUc",
  "key46": "5jH887VjMrHd8dTkHjyyoo5qYWJ3Ni591wDm2xU9DkqToWhWoakapf4kAH3xp9VNLyaq188eUxrVV1ed6skxQMHF",
  "key47": "3eYR6XLK6oRHYTDsFoLVXargzziofKXFLPsEpEYt2c2452ULqQ2is2u9TNfeNarYDzaetroNeXAYc5BioLkoGLeT"
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
