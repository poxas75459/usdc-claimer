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
    "5AZ9xufuYZidtxCeqdYeA7ZtmexzAVzNVuMZ3eE9K8dMVrzvD3deKKdeJSxTA53CwmspX1noLNov82wHGJ1W3URf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24QZjNRAsRJQmySmW9qJo8tgQGKmEB2hqVnAhDuhMJgRC93KuhV7bnhU7WHKFSmcDYRUNzjCZb5sH3A6HKKyAGa7",
  "key1": "2TAbc7yEyk5PvnbMiDQRk8z2zzzck3eBJxJnTaAGj8fd6ZrUipgxX5G61jg4RykbjvA4XB3u3qyHUNnuNiYQTNSr",
  "key2": "5gUp7vss12rypYC5nPPKCM8qhu6CXrfxPUZQoJKQ19m5Qr155CsV9VvApWDCgS5umyLZMYMWSXQswwZacQYgUEnk",
  "key3": "5tP1n9oR7gLz7j5YdzsXaPYJCo2iE2A61WpBGmm2XxSmysqnSvE9Ue6C4XzNXVQTru6vfqdFeDNnP2pUNohtwNm3",
  "key4": "61JJnAptX17YJCsjm2ZzZktogaHke5Vvh3cmKhMDbbPxoy4QV1fc9mUpmV4rHeHdzxu5sVyKkXR2XQxFQQ7GwyyR",
  "key5": "qw9V3nyXs1P7P6mTBwTmRbbVF1WeCKZuZhxcwhpERtwDeq7aMFR641fMaamjgqRNErEFKmXtQPx1peQPYjGiPzS",
  "key6": "4sRbNNvHKucacrLsmPyKi9XruTtePdG6mnKCRNjYyk2GKqUed4JEGePxs2CJLmmiwZMBe77Pu6Ne59uTgyBFiRik",
  "key7": "3XC8WPE4ir3JbuXigY4Ca483MuKZMbptXL7ZuN1CtqnEwZr9EM3TxxnCy6gMe6SDcBfmHbyL1RE64N5WwZ5cqm2N",
  "key8": "JKm15fW7QMvthNykgE6qarsYZojNgcMm9aHoWWBnJDJhDy34Q7eiguBCpfe28u7HuMa9tT13xiqLUAVX73MXxeD",
  "key9": "5ujjQihyf9B4nVTGB5wVyGFMpmjUyMF7aYd83H2gRoCNeRAuJPvr2aG3hJHR61ZWWLFsHWuHZz2sCdpNMeQmsfmW",
  "key10": "SukkvUe2WsgiaRBRGjaLGCUkGAHvyjWjiiBiKBZP24gEG8H3pXKspj6PY4PRokKzSGkW9qVrQEL8jrTpZh6RZzX",
  "key11": "44h1TF9P5S9vme4pxBfjCBuVMMK2K46knhGb3RQe1fC1b6FCubr1FcKRPzn5uzATXCuncpADEfGakSTtKnhsh8k5",
  "key12": "4kDecJxyJHNiSJ9sGqE5Cs9G63ZW4i1KB9wqZsoQQPEF79h7iFP57AwtiE9beBBoNndB5Nq1Uc8HoGSbQojuHqcJ",
  "key13": "62wunNdCVwSpoU11g9SzQA4cNbxrKRDwGFp3yaq97o7DHLSY7gLsNsUT6My9q41FbyQNr7gT6jGibzNHcrHTiUAi",
  "key14": "4YoeiSssEN7wQsUq3AKRB2ZeKnWNMzcKu7Fa19LP382u97EeRH26V6ACrGzMYNRmpiTg7g6mtG8MbVCiqxcaHiSq",
  "key15": "2kdh1YKcSALtDF9eFbVJce3tzSDkYBsQvrM3ysZ6d2Xu83q34ERsAhMEsnw17ge6TnUJ9TqqLdk7BYnpy3RuQm64",
  "key16": "5jY4JZLiFEL97NWEBqZjMjYtT6kPZBe5YTmKfvsary3kEQ6ip6qr191RE5UG9JbbKHWr1XeHd5mSbC5RNVMecTVL",
  "key17": "2ufpcsDsm495155ePCjeDqgK5kJ9Q96S92ApvzaDuVqgM8UxZWwArBwfMeUyJsopViNdPqsHKseR5VsQ6rDBjB1S",
  "key18": "aqj2LrmSMc5d4q3nMeL4nPBiQLEmFEpQU3hjhvtHsvVdqprbtEgny4cVZWuK5ULJ13ZbSSCCRGVTo9XKTSJC1oC",
  "key19": "45d5pstxeZTW2aj3zXQdxkT961M7tguVscg9gTyJSK7CTFHjghGNrcobjhAHaWpYb3Q6aBpMmcNSXDYYujFGzUNi",
  "key20": "5M7wg5PLAZZz2w2PcY5VBuPoVS9TD3d6wyK3MtSVb88eibYpzYpXmAxxZC42R1WYyZuYCTG6tf1ZvQcUgeg4EAaz",
  "key21": "2Q2CNSz4GpK38Gv9rQKukmcDgHHFckT29a5jFiQBojo5T6D5kHc1mu27qASjowFEd2WxUA57u1TCQadDJUzdSnxw",
  "key22": "4485BeLVfxfqbUVUG4F3vucvYtGcnnTwXDFvySryUpXbsAE1Q2zhtF3mYts5X3rnVACVKBnYmwxn8j9SCqymv2ns",
  "key23": "YfKRw6KzJtkNk2ppP9vuyJhW4UC5j8N1a8Re7pCdchfGTbb2FTL9CMYubJMZZy1AnmkptUeSHchfLUfC7Q5SacR",
  "key24": "4BK9VrPa5oeu9LZYeT3LjshbnNwGHSu1pnnjGj6Cw2PXgTa1d2W3abLK2DnZDHp1xibySX6M9d541WXvPh4AGiZB",
  "key25": "ffYS9D6P1AHD1zmkXiTjHuD8xDyesxEP3m5XCeSWFvc2B8XTgVqnTkx9GBrLc8MH2zjBZZVsgrxpfjLTLogxBq3",
  "key26": "3USmMFqebYiVARzkWYGs2jxQ78D37mLYkrWqxNv1TQ2PR1qmeAzmyWUdCeD8bBtA7m5UHWihwkNKpV6niotZoRar",
  "key27": "3Lxj7YEc3ZtF9dYmtmKaWcwAMfqDNfLsJhT7Nj31kHhQFH7bJni3yMc9MDcWwF8Vjyr8D3fW8WNUZAaZJE4DAr4z",
  "key28": "2AqmcKjZ97rFymCVXPQPDYtprJFa4Qyou1muyeneTG4Up9wV2eTbkDHJpQwyFkJsgZkCXQGA6aZt5BQD5E7qdgK9",
  "key29": "3DbLo2yufaHmKgMEYFMXXyFT3Rpb3WML9wLwLYjnfa4pV3u4A97t68NtycCoDL9sN3myATfmYQoEUHGoyBnrtt14",
  "key30": "2wPycV14NFJ88yBthY6TzNbjLtjAFf7iVAFkzU1KMcMWnTMdsZf7KDyF8RytquNKeH8PQuWLPcobSeEqFemSaEwv",
  "key31": "3jdx36spg8j4Z7oePw6Pi7RuwyEBon6iZrMfuLzQVpthNAGbZ58te9s2ik6rvCBpURVq3quhFuBQhbHUNRsaQigY",
  "key32": "3KiJdtLsKGYdqZi3MEKTQwJAnRZ6v9UpqjYaYAttHucrNZYgiez9cCQ6URjoqWMo97GsbNXvi6r3mhikmdByCav5",
  "key33": "3wUPK1zVGeYEDDeC3wo7Aqag19Eid3S3gQeTLSnJUy2wAVP979GsWmDRjvVjqvXYgBUZBhj3xCBm1Gb7cDeafn2v",
  "key34": "2wrahz7TEauggQzMitYLs2ichqAkGxXWd2SBtbHvaWViXCpkpMPeRZCpeoPZDFbuBGiQ8HpEc49wz7RPkzqf5oNN",
  "key35": "oMZ9PPj1m41BbQkUJZB47WfvaEB7mz26HSYrib2Y2sWcbZkoeh4GcyENFvEnL3DYnmuoM33xsvhAy6j95wSCrvu",
  "key36": "2wp1jynrCZR2H76CDCq7gDnRtCYktdu2RGGmBngrsWnY82Y7EW7V6TNzsKtB2ZdPyy5ZjKqibXwzCSmkwAtdqqks",
  "key37": "zyJNKhkqqCrnXAWp5z3rVFcTmqpPQLQjjAkA42caHiqvBAjjVLbK2abL2BYM2jd9jwiPRiQktc8rCFx4bB5r2E8",
  "key38": "2fmUW1juVJqPKMP65ZkMLEtWXGjS3UTsbyZDxMMXroykRFLbERVHSP1LLtA2pVdfVqDQkrV7bwtfmDCCf1tHii2z",
  "key39": "2E8Femgdry39UD68XezVh1NnTfm8ZBksHxMZgbS65AMEfigBQ9B8ZDQJwRuKB3YciYGyz1YBSYNeZ1KDi8DbVnok",
  "key40": "4ocNV8HYVzimTgRnFgtXEr6EYqgH4Qru3nSVtJs9jqRMzw47udzt9UsEAWEbnGTgQiJ9hr4h5cEqiPDTduLJnU2a",
  "key41": "54H24sfZyB7v6S331WaPzqzBMTX742SCqtK4n4c27VdBGxx7621vWRCob4aDpfvxTjerdkn3J7Yh2e4jP8rpFJie",
  "key42": "4YPJdu33vkKYc5LYrsU1xBEu1NFHFrGzrHaRcjzba5JHV4HS88A8Z4WbB8VJPtpbj2h4bx4fyqk4uHivk7JbbWQD",
  "key43": "5SiNKUGJTZKDBQP4vCuoa19RJecbB3M4tR5D34yc8xVDrBpPGduCX5U6o7aN7eSdBGz6cDjT88dLPzo6DoaqtxdX",
  "key44": "4TamHvftHRqZP3jr37aTieYnGRHfcgKKLxnThoUFcCt8YiW15Ly4MxFKPbe3N5FLhRXMEHvdmyY8549RVPz2BsUV",
  "key45": "4KksPCLCVfFeVQAg8etE9BNGWv4MEwNrU7XjPaA4F3BwdwkMvn3EH2taJLEkJCZY89Uc5j3FftV4RUYbsiYx2BYA",
  "key46": "2xazhPhCwEmZrZxp2yeAJARaf5bV9792DWS5XD4dSrpv3yheQbyRSUW5x1J8cetjyEJs4K23WzvE53zSDKUU9b1K",
  "key47": "5NzvEuZ3bcmp2rsJwU2L71TGUfyEKFyYVbEYmENTxjeCvKc76YWvKPdnxWLCGpXQfPQxdEg9YcSXMPd3vGfC6Nbw",
  "key48": "3Yre757wCED2cpsvGZiA7iJ8xrX19r8Soh7czMkut8QjcMimbbRU9eWmtbkBzd4UtrN29kzCCTxjnoQMtgBBRYjP"
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
