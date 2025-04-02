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
    "3VM47f9CPgboSJHVaseZC1S2vPVJgMyrbhgcreF51LuhKgvpbBpWu2pwh7yBzCJYn8b9y8em4K6AoLqwJ9RSUKeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v6iMuNZFPNoGmT7U5vpJ2AkDmVDAKXmrFT6vwGC57irL69wnrLCPxPKyuSvqJnbDq2hH5WGXzj7gRffRjUkyCzJ",
  "key1": "21SQBgPRwHeMoKBuSVPeSJ5VG4UZMhox3wv4MNu5kGedQ3AembfErMN7zbrGBR9fJgmSPCroaRConQBRNhWNdfhT",
  "key2": "4pZmgTfMUzsqeM7G4jmBLahT5F1cv49H3jH79EZMYhwrGBmxRY7gpETvAYfRc7Yt5zD7AhHgBDVkCcfYTrjRH2Wb",
  "key3": "2aooa9GkWbrwjCGmiroit1ddM3o2zueqvEKBBF2naRuX8Za5jrif1r1zSYwTSy4zmpvLp9LT3Y7U4eiRUNvj2umS",
  "key4": "35CFjFV5SpWsPXSxgeudtzVG8yUPvvsu6xZtcTkqoTnPAJph5BkYAe1zuP6DCfdS5fBwSoH3DfcoWj2EUQKhiCdz",
  "key5": "5XQw6kVkW95Ta7JLzssUSKSTE8U4x25SQz1g5yickiHbTxVMQqjYD2RPKdnzW2z4jtNbtaQveEp21qRzok5oCAYT",
  "key6": "5g4EVqJFvW67U7Gak6QgbGC9a2RX8Jo2pmh7fRtUwHKep8B1jsG6VW4V8H4Tj4nkZHSqCpxToUoC6p714uDLEQXR",
  "key7": "5SsijoGq5Yiizqhh3A33BJRcRfdtQuStMjBvoN4SevRwccYnbJ3wJ1TgXEjN7B4WP3AGqnjoM5x6zrgR2d6y22nD",
  "key8": "5NwCQXqnYL7wK7hsJAHVatGpJMs61e93HdTsPYfARxFVteCA5LkygEvnUpt2Yw4J3nzoQgvXDnMqxChPp24VrEDH",
  "key9": "5maKNaAuWJKALLDXC92edSym48v8JPRXpa3iWHsicdZh2MZtXkiiDkhGpa9mUcPrAcZZbsy8fFi91oHygzj4SMa6",
  "key10": "3ArdonMpG752mNvJAsuGpdzauFB8KGvDa2N4wx2JWT25c4jHGDbdVY8AkcdgVMvLSZdyfUQJgC1p6USA2XiaZ4Lm",
  "key11": "4zvRdzWuhquA53NEPwbXtCQpwf9DcDpwLpD5e3PLj1UDnHZLuKUo8SRoTWPGytFkuP62EZWHbdBBg4h92JsfR1rk",
  "key12": "2Uif3Br8dfvZCH4KoA1VE7an5QDmCHkQ2RreTFpmhGuGU4zDHpf4igDG9AWRw2hpD2VnF6G5RLR1JjLfhq8zkFoV",
  "key13": "G3yybhQRxARv1d6SRNNBLLd32pbubwdXstLqPrvqWfHoEYqA1yqQVGRg3ZG6tnBCpraz9aPFPFoPneRD1nqqH8U",
  "key14": "4tE8NR37e6UtNbCvP9sTktSF2XyubLL54mzqfqkBLcFzn3xiSU9WQBeVTG3RoxaanCWgWAdg1eg5oRADcw9MtyBf",
  "key15": "4mb6QL6KpcBjL7un8ijn1M8krDkS6bTKbuQMeHns3yMbwwzxVusQCx8vbEfc4zqCWjbQ6bGJPetkesT8uDuKvaGt",
  "key16": "2F6KtxkvsRiKdVJXLUGnkmQSZjy3ZBAFnBvUHBLoNgRRU9FskAYBwnv3333RsNBY5dvQxx7pkaJPQJVYp4byNwNs",
  "key17": "3iFh1eAFeyxT12xGdz5uSNmBTRb4xkS8Dowk5QEdJh6v3CF2zBiVHcdcQxf8fmiwSXAzry8MK328shAXkkcNzw2d",
  "key18": "4tRe1Eg5o2eUcB8HZkwAzdjKorBW1Jv35NLVCCLbdApUgKcXJyErQjGqB1rNgdc1SLZKoYD1hAYubmmjU4WbyQdz",
  "key19": "2gyjznYSE1FepEuLExnuSDNE6GdN5pzQDE5BmHRrbcHe7fQaD639DogtbPtP897NHTGhkPkikaaxcCokvMtFEAry",
  "key20": "5kwYTN1TUz3kz3iPw9e5PLnLis8A6JweYyqVNHyVQKnv3jUwbRc5ozM5EGFE9ZqcnstQ9GXUtuAmxHnidcS9goBS",
  "key21": "2dmjLn4gGdmTa7DUfZbhxgpidg4ETNRZFGeptVQ82Hpg1FKSfiX9aGNqwmPp6xeuBP1smvoB7RhzyaD22FxSoKym",
  "key22": "52uSdGY4HrYHi6mUqd3Ph5nN3SbyxZPv9crqKAEabbyH2gVxYmUzzx7L7rzcYmmzEKKVEYyQ5WZettwSi2DEiqWn",
  "key23": "3MeZcRrkoBpcm2GT9vWrNRHzu3z2MoCzodvp7G6xzXQGmTwjyugyc6pez9DSmtXR8v6GCha1XGyP6nyahpPfbXgt",
  "key24": "2fjM5yhevToGRV7xB3ZhSawsgSJPSGH3X7KgEySa1nTwTufRDU5y185KTKPhE1zHyxB3s1JxiVHVp7xjUhihUwQ8",
  "key25": "5qsEXCvTu2SET7BVUUg75MARsKCdHDgXaPcEVK33RwjhKjrcPJYPsPv6zj6Lx5UyaqMed45RyQFfGWd2xPrMmwpx",
  "key26": "4yodyNE7frU4CVwJ6GDFfrkAVJYFzoa4VrShAd4cY5EE2RTk2yYPAspKxARXsnKSz18qTfwGcLvJNHhegRS3Snbm",
  "key27": "32278e1cZvRYfhDSPR1UfJ2vikoUCazgc6koJ7r3MioU6ix9qvRHf2YQmS4niWcs7FM49gAmNF9RutsfxvQfzkwE",
  "key28": "gJDiLRQVmxmt6FtedjfrUChgGM9puD6FscHxWkT6UB4oWU8uPVkyL5LsMd6xEZFFUewqH3ZzMf4FjXZU8zNRjru",
  "key29": "2uaDyndH6c7EKHGFnFuNgtNdRKJqmrqrDmcg9yPkqVpEKF3W4sFB4YYbePBg26qy3h8XFvgJF6zsvcTky9m6UYEB",
  "key30": "396ksUNKeFF5AULRMjXxsPivRppf1funAQjFCXtakiiKJrK5XWYjrFVMjAYdXSZxqNHjSbR6Ycy2VX9tHfUWGdhv",
  "key31": "5chUr2wh1mh2pvAhNWJMDkWjQ2VwsBFxsu4E7c9HTPDJGrd2yjkPCfRArHaG1JQQeLA1EVNY2jW5LTVkNLcWRC6x",
  "key32": "tpmu4hHSKrkXG93RHfsko8hLEcJRMtUhJapztgUFZhJ4hJYsULuBVTqvdU6sYYUAFeLZpUWSGXjjtkmHUwtAj4C",
  "key33": "5aBMmvFdnTmFUk2Qv3jCqNnd96Nbc3ReBbj4UgozkHnSHMyELAWAZR21rS2J19p7p21ryZCsmmTuKABsFDUHEC1H",
  "key34": "23vZFWfuoUEndzkoohy8ZyMJqy8Ar4quTzoHHmRmtVz4XVoMM1WKq3K28N41gCULejHVuJzASoGoKGGDp5gmAovQ",
  "key35": "iWrZP4tA4tUALYTizaQ14FCr4PSYVip2W1HoQXXHJbgq4t3jbeQmY4m4uhLKzjWoVQwnAHR8uFtwhPLrnwd35hd",
  "key36": "64vZUuJNx4bNqWwsqDMnrxkyjDsAv86x82dzg25LqAnrfHoYBRK3haXTXf7dmxhWAnnbTY2RKysnnxFsKRXd5w2h",
  "key37": "4WR1Spsb8k2TqMSN9MVe7P9XwscjY4bdF5sHP1gmQCBMPmQMs9cVoQRb2R83juHxWTJWYciuJVSkWCi7YuhMK4Fu",
  "key38": "5rKf2RzjGDdTbsNrN4QQg6UsjWzupPXSfqvGhKjYdiQmt1bXLDtX7QaMQdyN6DDCjMMT6XbJj9Vi2THB3hLMo1JQ",
  "key39": "38he1vQXJeCk5onJRrUxWTZ78fMDSyEaTFyB6dTHZaazSywZRsnzHQSzY47wcZ3MBPf6rzovUG6eXHz4BVheGzPY",
  "key40": "4bNZ1cCUnYYCtJDbSgpGG4U8XuYQGawGAorRXKVcXGAyikTYRnturCSFHMnFb639ixviBdbVXW5X17BGDGaGmBnG",
  "key41": "3QE7fBCVefhhc7xDj81rgEyMjqrZ5yR41k8jjdzD47599PLNsEk7fRRSeqnfS4VTLRjxgcvg7gorfRD47za6w4uZ",
  "key42": "221YsaZVmTCGvU65PaSwigoRg6roV2d1h3aAk7iaWDU26cuKpLb1nbB2NEC56icFZCKfLWce8bSYdKhg6durLTTj",
  "key43": "3dpg1YW6wqd2D82ksegF6sRuxyeiQZtY8thmc2CSV1545wQytbZCVjhNSa4Vs8yw4cjrH6AgBMLRNaaPhBdCuL8m",
  "key44": "2EUDYADZSSk7yK5q9rY7wtBAzsVqf75FV1G4xkznx4PyLpFMA6dLb8UusJswQfNPUiFJEqwRLZs235mc2RmPj7Te"
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
