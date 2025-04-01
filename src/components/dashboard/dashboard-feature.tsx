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
    "5CajxM4iwfEUZudsjm5QkHDTno5UZkA1JsSW4Sm25auENV1dvqNUYQMjmk86wydw2ZBqXuttKXKazk8AxBTEx7Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6MabJk6DLxesUCBMCXRffZAHK6XpYTsYGZxq7bTGM23TMQLNH2ucYf4qhXzYPTPeA27UEBqiWcsTDXencbV7iHn",
  "key1": "63pa7VRzVcEYvbMru3cgzw2LEpgHDGZYXiLFMFvkfjsZc1WPLDm2ZkoGjvYgVqLGmfY1tR85XuSzewDkkK5wEFLA",
  "key2": "7e2PgHMekFd6nDhSnLoGUPjkeTET1PMn1hZT2TuwUvRQTk5bFJxDicJPpeHxrKPzZb394pLUMimQK98Nyap12Mv",
  "key3": "2BYp92TC39rhLERGjtY5TFM8uMcmffKbxbngS6uUp9fbrsrhGxmcpNfMD7ZdToww8dY315GTQWNLvXW8z8pikeku",
  "key4": "5CH4sxA7oAx6bW8xj7YzhK9apvUhiiadi41diGSsSg5jnJdqutPSGKqxUCgA1GXujQZHEPqa2oL1AFYiHvEH4gKE",
  "key5": "Tvk6QVWhSvEzozTJo19y2Dj6iVB2Z2GMb4TPVJSxRVY9Vj5xUH83vHuLVj17QES4hUGP6QicqgrbzcPR8VMJaLS",
  "key6": "Yhd9WvXHna9NuoXXw7cfmtbqHu4AoSw5u1gq2EHcqXXVATPQntD9Cy5BtPnD2dar4Bg65ozusxqhFhn7tsw6Aig",
  "key7": "MQgko4wYgu3HnnaX142kQ4StkTvHMDiHrNPHtNeRiSkUaWexadHF2YUUnHvP12rPD4rVbiVDfJLsJn3jLzEije3",
  "key8": "3Fm4ksuPWUrQ8h6nG5MCwf9W32yLsp7pnkXfvgHsocvN4aNEwZPq37x4foUgLaA12Cpt9YWKY6VEAow3V6Hu4G2h",
  "key9": "7HvcncqEHw6vwZZ1NLeopLhaWX9ZUtwy2sqCibxzTUY3SJkgJkpf8RbDZ8v1z3HrkHGYPqAFDmVV6XAmKTUFrF4",
  "key10": "3GPci4dx5HHLwanZ9QfJFe4o8YZ9JyHiHSBrbTdi3ccFfrmmcsPxsH8pLkfNEjXmjKcHEiYrwED5n5EKsQVgCDeJ",
  "key11": "5hciyDutekFxm1TKMBGnMbXHdSHXBsdKgaRXCBsfFdK2bcrz8hFfVCrW5gzErEnyRhL6iFvWaoMbnkki1MLX3a5V",
  "key12": "fUFLatZjVwEzDE9iTYRLpe4JHqdxNxLphNpoytxWJasrNuZn356VWN4SRKh2JHsozhYU5a7HBpUQT6M6E4ZhRhd",
  "key13": "3AiF6ziG18nS5HokZUK34b9YurpE6LXNSjjFbzHjgiJZZUHoRLm8G3QziYLxy6fPUrzQ24FJ4AsxZDNToQK7TAQ9",
  "key14": "3xxjpeQNM4qXAK3L2GGqHGFedqiVYaENfY77szHNLXqm86rDbnjX7nKaRev6XZPrJzQKRq2G8yjKSQTyEJvG2KRU",
  "key15": "XrTAWuedwMRoBQLSdp5Uy94KYbq5QFEsoMA1B1GaUsguzCdG9hcumfrKN9BDfextF84TLAvAGwztNGBgAZYux8Q",
  "key16": "53ikAzAUpn5dBBaiHRBMWbcFjN4zapnSj2MnCLg9uiu5jK7TQaFQSLZBAutjkXFBAqDGHXJJjKGbhdTVSeUzYLvL",
  "key17": "5Zj4fR1yB77SwTz9vUNkB44ApRcvvEx2DRVyJpWWSV2V6jpcT4b6Ykodeww3yTRT2jnH76Gt4XwFPxS6Ja5WnmaF",
  "key18": "2QedSXMcnhpmRzdoDSmaNhTCbqLJaNz7ijHXjxj1A7HYSD1ZF9MRHKMRW1KDRtERtyFJhRQeuJ1e4qi2xdRdzdoT",
  "key19": "5JacycoNkBwRXKd2JCotYtoH96Du8Xcm1DUUb9F6Xwa3yQRweYCzXebpCednoe5KWJxCvV2PsU2hNUvvuZj3mWif",
  "key20": "63NKrym2tEtX36zTnCoGaH7dwGxgjuZ3gKFrs6qV3sUjGzeHyR1PRow8DwSUNMHeC1zWBPBS6wwbe6BscZJZFQ73",
  "key21": "47hve9fJTr8V4tie77nTtorUBMB2d6vJxALXL5R6AKQnF2Dppv5a6H1RzbZxvHEsEgaWLYyJqcReAACtsxonJgJm",
  "key22": "5tghs31zDxB12AyjpQtccdnYRyCfcnWbYUzSwjbWCVXdUv8V3rvrzXr9RJiHPRQiWgUFzcGSewswtMgDicU1CDTc",
  "key23": "34VdtsRfqV2GB6avX8Zd3MknzqMNEZTSHHwNyvdK7x4vSaEZcmS9dzodfpigU6DxNE4t3bo5dwY3hfefG8Ybjdor",
  "key24": "4x47qPYMWeuhSwwJpcbvTLXRdBCcQBtz5xe5XeN2ek8noyF8sBi72pxkyT5wE741We2r9yaSKfh6zrsyZcZCzPVu",
  "key25": "2emMP8GmX4FJs5cMtdeNb2RaZX5dj27fMxFG9MKBRWQw1rrH2NP7dkdZdmaqcGb4zoMs4TCrzfNnRfp7fNDoiPTh",
  "key26": "4iju7juJugPHFK3VuSfMvghtyg4riuf2RUAoPJCkmCWVqWLkYiJzTLjobNdh9rJSyVvCDFiLKZT4miasXZcguE6N",
  "key27": "JoTohQ8gi4mscPVFnzg5o7WRb2VKoSKrTwGR4KB9HiNCJE5M4PSRBhshbCEaKePaNhXrTf8iwdsP4AEG1RzAwA7",
  "key28": "3ceUN7MYeNzQtpkh9DScSEKyXwge9bAoLFE4uSYUjPu4S4RqyXgscFePwvHK9wmMBzC4ejdE5e6oqwdYLpdQD5SB",
  "key29": "2ffEFRwCRmgRmkiRUXEiJ8PiWuMf9vF5dJykMczbZhvL9j4YjKozpXVveuB7E77D2vwWvapDm8Vq192UWV8WeALD",
  "key30": "36eddQ1n2suMTP9uXvvPhetnKcGx1FT7zFgXgCFVxkssMa8ZaS5Shd1WcsJhu4EAazyk1sBpKQXQuThfF22t4gvk",
  "key31": "h5HSDQcnbtp8z43yLztPP1mdThapbx4jX48eALq2cf2AQwmbZSTPP4BCR3g9f6D9B4DrQgqvhFcyMFn7J6ChvMn",
  "key32": "2x9vKzL8PRAhb4HrxyUyauj1zBPrAvQCnesDo3WcXLi5GMXn8hVpyeRv2hPe4UfBpP13seFhZjQ2HDwW2wrdYoeH",
  "key33": "5V9rcEvEPamAuA3QoyZ1qku4adtp12usR4TvZPR7QuZ4p9cdzsJ2bhwyuUxeeZxX1LsC7UbKkZNdvfxdiFkPY21u",
  "key34": "3yh6kcGvxrxSA88cghCQFXjzgE2VUNxcx8Hpnpfx759Uu4FvfHrGDscXr9qawPo4AyW9txVZqqpdA1E5PJhc3KTw",
  "key35": "KbhpkAZwzZcrFvUyPq6zehLbmAovsufqvox5DFy5Sbovj3ihiUGr7ajcB1U7V1w8mbw7VDvevj5QZXtgqZxtfEq",
  "key36": "4K9vyEipo4DVbyEVehEjZJMAzo1nAmXTS1FtnX6Vg3f9eTMFNVVSsXEoEGmzU7NEXxM8jHoDu51sR4WQuYsqHkNn",
  "key37": "2aPPZT3jvRnX3ht1fk7tczuKLMRQoVGbybZ4QNSiDKFfyaswih7ZaSaE3dkUPVJVdy2HZfVK8MABe9it5uVtdazK",
  "key38": "5dUtraVNpMs4vHBgXQWc42K21aH4Vkfennthmf7fJhHJUhMaTzTSRvGVQVfUrUewFjzkYnb9zy3gUx4RTYnTDnKU",
  "key39": "2iewQi7ijreBcJMnJDApkUmuqNBnYXy39rchuH2XcvnkfeMBHq97uDTdxCFesPJfReV5S9ZwhwcNZvfybXnV6kFh",
  "key40": "4161dQ2WKsdGp3VEGq1KES2K5TdtrWKiGZNsXqjLuPYS99N4aKxjru9ezbkWSX2h5ujiMQVVd5M41KVv2nUCwamH",
  "key41": "4bDVPGuhbgYUDXVnbXsvuzVK8XQ3Mf1NiReKGnWGdRZjtdnAPrB9PXrsu357Kef2XtYoudkPcdCwqprKrqE4LTdk",
  "key42": "2Fje8mcdDQS2jB1vT6vG6FSYksPSD8yrtrAPVfXFr1H5fXNDmmbVP4XjWAuHWKb4AV82ecW14aUtW4B4cfpvLDYp",
  "key43": "4S5iRSXXEEBgD985ijMz5vbqUq64pQVVxnmEJfbfMk2fD7cHeQQvo29QyADG2W8FXr3msixKeFsCJ5R5ChnztDRJ",
  "key44": "5abxqq35M9Ma1UzsrTByCfvns2vNdEiPufR4P7K1Fr7ps2hk8PZk3K36Y2RKR3Lt3viA9iuR97NvSwcoFQiAsbWx",
  "key45": "2rWxGwXBi6qhzYA7jh1h48kRzWcVVeoRie5q8XAiKiVG4SuWmEsXTuVzMYNE5Hv7DCLh27kj51VB5b18CvGfx7mW",
  "key46": "SP8LpJ43K91JYZtmsjWBBWzgtuTS3JY5EGBRyo7WWg8TKSJvdjSE9G3cGGz32DFhsyjgMQoCkWWDSyN1WyUTmyY",
  "key47": "2ZMSJgy7gpFgEefa2fpv54FhEbJv31y4aXP8hWJUVsVh4ZUCZGRXMbnx8AUYrLSxV6KKHBHNATCQQU8pqjGT1viz"
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
