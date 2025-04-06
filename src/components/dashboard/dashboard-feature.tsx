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
    "4VUsa8XeqKjjo6cuyjro2sJvNMN8nG4GnvMQiTQ4oAS9L38uE2E122P9VZMNBtu4uuwBsECQzEGe9NFCNDXJap9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PSUPjFZeU6RbkLX3h13NiQsyqUvUCyKDzGm4u8Mab2BGQ9KDan6cgEEbFhi6Sh4jD1dbS6y6pPYyf1rQe8Pw3XK",
  "key1": "5F12VLQEGavM5T5qiu5EkYh34zotkaQkvKeqEgpZCWt5bw19ygFLtCVetjr2AjosFp6WWUPGADt9dKDN8J6Vi9NJ",
  "key2": "2UkXru8fpLkhu4YXCAdqyHQobN1twi8b5jijj9ZJJXukAquetsRgAMCMrqLedtkfVSdZ28NiopQ1Y2tP3y2iRpF7",
  "key3": "xHAZtpN3XmbuwAp8HbCsMbLL872V1FRVbRY3gwtH9a1QQSfzr9WM4kxpiL5RxE6eSxDYc5TnBoZERnsbSTZ16i3",
  "key4": "cPKauBZjjfbsvViUCLyQoasVnkXAVT1tcam2VSdGp71k8Pdpt2Czq2ysUKERHekNuu36kmikSoav22nywEr1Cvv",
  "key5": "5evec32FhCTtoTVsKqBjAZdLyiRdraBkKZuCUnBS8Mup8KxehPm2MotSPGo5axUkzSyYocsZZVUjMcDwW3U9b9xX",
  "key6": "2pBv9ySWsKh7iffL1DyJ29HpWVtvbdvh1Tnt4p4oVC5bpMkbh63KMeE1b5k8hWzsE58bMQWTSPngg1FFeL8DncsW",
  "key7": "2XxAh35AsNyyiy3JRpYnJuRvFCXuGk6JzrP5VC3MdMVhMkfyTEHe5muQVmqoKTXNm9Gs5BnG2veNpiuAvfbDQo26",
  "key8": "q6K6UUCtgLPtk2d7t7Mue5xmQUYJCSWJNHvUyWgqJ4XfFTiMuKgVMTDDgmSjjnU175k8sz61QBzD6TW4vVudGCL",
  "key9": "FCS33fS7xrp2ZvNgraaGFbXd4eMyVKYnyYFDUBiV4fTZB5mGMFutxmgW2XgTfHF6EzGFBfg9oDuvmWxXCGJomry",
  "key10": "4gtDpfywfBkwFa8HqHSJMpYHFCc5q2QDdtNmgTcWdyKBxHsntCEYiyeW7D6o7VAnp2niGQXMcxZh4BBpCScBJQuh",
  "key11": "4sVXpZNBwgtW2c5rNQ5JLgfMLpMCPRdSir2HrT2BGYJ957HTkzN1rdHqVu87HcAq2VPe786ig9HzTaV2agP7aNYm",
  "key12": "3ecD6w5UKKFvjHvE4CyYPMYPZE3KXzaQx7cVb6ziRGtPykrBjfHRMvWabDbFsp2PjYUYVQ2kAjb6F3TfsWAShprJ",
  "key13": "5bSwiUafAY6wueALe4UZKKT4vW8N2rWQSWdeaB5oT58D2bGPChojAWxDnqYz9iwU52827xJMxkzBXLJYUan6txi1",
  "key14": "4BM1sQVmSvKdMsXuLPRBeyuZw1spPVYrjnC5aJj7CQ9oNXq2hH4UVWQhNjtegTdY1uttF3p35qKwH8Ls3atG6qmN",
  "key15": "3Te7Ts4dUyXhQLf2HfAmWuBExvGHk3pHHSx4YuhSDUFKpiQXZisvxEMB612wdHN55vF261P1FPPihuimk1XbeoUn",
  "key16": "5SpWMvtXyLsYgpmVVR8BocbSrBnz4sfq3KWEYgab6gEtLuDe6hJLm6kSHFQaiqz93rshQ6gHiNHFufih1SZZm6Qk",
  "key17": "wtAWQCiqDowFypwTbRUiNoniu1dSSZ8E3zBPMdqEoN3tAhbHnpi89cVqAPHAYHnef3HMBtnDNevfspjgK7FfS5d",
  "key18": "36QhM2TGcoyYzpYBQeH8YvSoES3H9ovUJQb88i3PHbrcmp2w1xBEgGt5ErNPgKYKfZL9HkX5Pdtjuonkh8nU7cLD",
  "key19": "4mx29bvCD46tJwkn7qz5LqSv5f4rJRzRGks7QWNcpWk1vyq7Qt4kxHEcga4e3GbzAiZ17J4vKQmbdLQhkV8Xj2H6",
  "key20": "2eQH6XYqq4p8LTcgL2wVteonN7nbBe2LSCx7hPhLvaVZp3DbtSmbAVMWzgrt1m8U6eVZwEBDsBR7jEVtvNEVQFUP",
  "key21": "3G71oe9kmBLbnRrUQt2FPpszu9vAn6RdMpof6hUPkqUkhY4d1ra4iWx9Joy6HH3jPx3CuzdaS7A1QizbFJ5i75Jr",
  "key22": "2cuiU1zkDBsAGrabVxSW2mfCHtVQ7U8kXQ5jeWYd57phtkBmGUJSJsbxtes17EgvfmRcdYu6jLRi5eUDct4n9EVb",
  "key23": "2z1ExiXqWQEQT7a55tp5CjJuz6RqLLaGFy6KZQEvat75PfrotNxueuTfQzAbjjw4bU73uCHk3gugWDgD36uTSbgN",
  "key24": "SY72XXBZMtoxktU2RsSDpWKamjeupt1ovX5MimZwk62gCxHYvh2Ljf26UokMn4gisFLvVSVmfiJih2wTD63UiGV",
  "key25": "oeHtw96AePh6td96vTD3KBev2fKV15J5mZj4x58UyZ7iADzpTgmEdAj3TgynYUqXahcy2r9ZsEzDYf4vqSbC61i",
  "key26": "2F756gS47Sx236AK69Ys1vGYWTagXLJd9Rnyyz7KxhdfMWxjEQehVhBFLmFgBRdwNLbF4TRJGnNAhAw3rsWZtRFD",
  "key27": "dF8HPj8M7PKoGGBZAUGRgjuhCKvSHmxkk4kwgYJWVsfRNAmfFkD7JSDMc8wmYf3Zu9Pxo4xeYWUwRLPgUgX736v",
  "key28": "4GJWtV84Ko3QKP9dYKE951HaBBWuG8GyGCBb7yeeQQ78HcZr3KRXsDmoNryP2tgkBE2XJryKuzBJDNMUyjq76E8a",
  "key29": "9q8XbupULqiakG5gUTcWmcmbzX8RcYzNNxfHpkTvdZNqd7Q1d624fRUkYTegwegPjMWqdnzHtGvaPjaCXxwj9HV",
  "key30": "3G4XVgLTqNJ7RHCR7RoeTjgBC9qzmYwBJc6sYuXmdDyHN3KA3RtT5qqV6pH6jKy362acPWVf2SR9xn68ZjkEC7Yo",
  "key31": "467m27ECz5ZYyDPXuUNXtYJw6KwJJZ3KhcCCWNb6ac7gZaTUCsxBS4HY1MLhGm23jCHx1v8xgTmZ3DitPjYbhvEj",
  "key32": "5dKp5s2m32T5cuLaS8D6KWEGUEGVVG92hQ7tW5kRxPb199v1kVw3AN6sVVNpaehcVRUvE54Ldi3pPCiJV9V6QC1M",
  "key33": "w863N8n6J9rfcB27JPmdXo5gLNmfnMPzAatCQHHKS2XjFQR1ydzbnKhhH9XVuoo9iJLj4UsXb1HRPkRHBaBGqoV",
  "key34": "3K8Wn2ZZqh8GFX6tnB4ETn24bQXdJT8XmU7xs3Yk2a4Z1Ap86fVvPSS3so93zfMqK4qCJJdK1iT1u1hEtbE2rUs9",
  "key35": "4UNcRxUg3MV8oWjPhtPKPUmHzL6hLKYxEste3gzwwyNz2w4WQueWFgS2Lu4JkPaG9CCGJrdsez7tQ7X9yJf5KMUd",
  "key36": "PP58Gk3MHcsFXBeiTwec3PHYWUFCoz2G81Dy9KYLF2VdWy82XxKAvkGgitbhmSustFxrendcQJBYjccDfUFpUey",
  "key37": "57dPrXegxJC8fiEw94YV5XkEdgSvygbp3R5qACbozK6maNXi82MWR15hfGYDxuzUsJA7RzrYfgtHqWbCnaRZDx4k",
  "key38": "8DTU4VnSLNHMCBR7YeSNaFmnxLqTzCBrLDRhULtL1UZWwTaVbFsGAjLBj39MpSAdMb9SeL64dA3GSzrEMn9Sg3c",
  "key39": "4gxnefJ3QSgcXtu9z7N71iHBnagUNzLaG495wo8otnpYWMwGqPeheCormcJdEh8isTDBuK1pA4SiLzftBSMLx8oA",
  "key40": "3fPpZfVJvV7wm4581iM6aJ3KtVmQXVytHUr13rrPkhfwbrcDmXP6VpxPJaTJ2P1tYyryQA91yLpzfiN9MyiySGty",
  "key41": "5PSrjP679faLy2kJyiX8ueunGqDWbrqLyZYBLY2Tmt8wLf9FqA8ZQn6TpDxUu4XLacbGQkkx7G3dYWG4m8AoCfFv",
  "key42": "3d5w8gVzdTz1PxtZtXVLZ9SFfTbyyjGmnFkCVTRh6XoScz5UHwEeKjBPzYVvVFDFHC6ahWKwRptnzKfsrSsHEpWf",
  "key43": "5KLiXzSE5i1AnbJTzaM5CehDSgZ4ZJwAMfkC22T6SR9bpPR7Luuw8JjVucyarpkXKxAuGaLYuZCiewChXuqTSLFX",
  "key44": "33runfPxWUxLrB7t6fbv1jzHFXnv1uJhPkWgbXqgxmFS1PypcxBnCmdfdDk6CsXsezmGRrJY21giZQZJzTjZ8NFb"
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
