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
    "4BQXUfaU4oL4fB52M3FyhzGvxELJDqymGM2EFCA6c3RnrsmvpBNc7WMqdZpd2cEXUqJgPznPi19zuunkFVsYCWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6297KkW6z4zApk3Y3WV6aT9LsFWejE7e2WaapQaaLTByAzWozVZkoRv7pJ5xR9x3uia68rZoyWprppXD9P7nEbxS",
  "key1": "4YHK51C6cYNTY33wfZfTVCE1H4yzpg5J81bFY5gcnmUt5U5pDmn5EhtKBtoYuHufWB3dke4k597xG3jrm8vcM44e",
  "key2": "5hmXsR1vVuyytGLXQWTUbaQrSbTBRS7o7ZEEJrNkECPG8zCUYacWAtcgmACGYokjNrxuG1D8B96G97Ku7XEr3eg",
  "key3": "651LZ8QqjFVu8scD2RXV2mAmbHV6qopcTNY77EdFRUsdAxdfZv9eXimbKCR7wWvFYc8jJUMS6a8p3CWRzpkavX3b",
  "key4": "3y1MRGUuN57ySa3y67uVjrX9SAQYjxi3tFStgcg2br1DNT3EbzuNZm5NaFBs2tNeuvA9PazjAkL6pjfhATzpvYHM",
  "key5": "te2EdizTYoXL6eBUDsAAGB5agzDsLjFDJ7C4YAejHWVzJKE445aCyqvMY6dPd4xWWVd22zk1BtPAPjFVEKKg3gx",
  "key6": "3vop5s5W1gPZJYA3XocsXKfdnw4N42Z7De6SK56FyC89Hd1y18JNLdUT2r85oUdeti9FhMMdaqa9zAHa3YCHMRTS",
  "key7": "2ycDNiq7iDD9jU52dw9QZ927NRd6YAPdizUMVqVFXgMZGwPh6njMkJ49wK7Po6yoTucHM1f21DN3LCfKqYR4RjAy",
  "key8": "jLrVHaHABHgpB764ReVXcVkrBHVBWyJnBZUjER7aSkVggXmADFA4t8Rstw7bZm4YReSwK2KvvGqaX77v9VNTmnr",
  "key9": "rsvxj3KTm37cGiTM6QkM4KisTTYuy1i8j5cYCPh9DZY3tMTQJ7mtYd3BRzenoqBL6T1BFvvtfkYajwZXEkceLkh",
  "key10": "4aPfaTQQKu7Wvd3ZpifYFsLr7X14JGqaug9Ld81QbX3jKPgH2E28afSXpmr6mQyt1PPnKXBmnPDyBx5HMyrCmhET",
  "key11": "cFsPbSBoAD1kGtP3EyfYzzQWM7EqBDiUEc1ygTjqo5BrhdrPDVA8i6CvddNJFGaDhaMYWt6oadx8qGRAXPuGiyA",
  "key12": "cpu5dpD7jiXjva4mq7oAz6Xhz4YbWYoFvpVweUXuYFc5Ms33ZW1zmNeS5qwUi2APAxJSoM3SfVd8yMiM53xhvc9",
  "key13": "3j3DNYApTvDsXx3VQvigfinzaU7sigTUMGB45o269TWNRS4PpN7rFtqshD7ZanWvqwWEg9WScfMSR6yYvTkyMsZP",
  "key14": "4UHG2Ds7m3oTYbZ9mYdebY8ZjZ8vP1rwwmG2iR3eMPHYvkt7LJkqFnSbJjK84L17kWE4X7YeEeq2yBcywtFiSHcL",
  "key15": "2mJMyqtFcmVkB4x2zci3KqSe5ifqkfLW4vtAcxY7PsbRS8gyVQUED7VU27Fn8siZUgxjBF7DFZbRsSokKPjrhAnE",
  "key16": "2fu8VSUhBCJtLbvFyiZ1eeBNiVjRGz3gtr1BJbM3BhRxpHzRxC5nDSDsNHokH6CUFgPfYM4sBLHcvAsTiE3t9atB",
  "key17": "2kyZPKNERY5ZECcZgmNkCXBvhfrjpZ7s79p8oX2LrVeXGVwqQML4z8Ryhvrm1qqNgaf64J4dXzqPSGXtLufS7Yra",
  "key18": "3f7PKLNkuSMLZpJAAqEssLjxd2kXpiGcw1hnQvghyeHV4FDXBFiBCdbJgPkA5o4L3xdsufPmJM2ijDdraksKrZ6x",
  "key19": "dojep41bsgcs1rVVDJ5Nr3jX4pg4ENNCUJDBVRXGFwxivhAWqTaowVXH5ToMLQUfPULWPAo3k9qfHivdSDnea25",
  "key20": "4n64BGaJ1VpZ2SVwxgZAiBwTbzwgQ8Qn35QbEexLfDUBYTirfBLGyELhb1cnFmMthJCC3jANeXce2MRHK7sXkVkt",
  "key21": "3VEq74Dqv8Sm5DhC7178JVp5jyJhTUDXuJfsLNYb57Rxksig6jvSnv7dQ5bEH7m1mAWtnTj1HqLppoaw51bqqvDx",
  "key22": "3omd4HQmUwWyK9hYixvKp6i2wJsoiXFR34xUNttnH3gGvsKonQd6Apfz96dfPKVqzP7LZyn4wkf6xpwRs7pGxcV8",
  "key23": "3UwwRTppPWLTba5K7jSU4tqHi1NTsekz3wbopAUssrLMiGZS3zVpu9jh2dS5najm64gJqkNWowKPYEewttjzrpAv",
  "key24": "GsfsVAp49v87nyErxq73217gVN1Ca41nj56QpbV5ZLjySU76BdQpcEozmo9HWsQ19ZVS9JHMFnJ3dxb8b1pjZsx",
  "key25": "218k5sF5YE69CuTytSFXoCkqMudGXD3ihkvcMKfDSToC76ff3RwNWtMoeLqbuVDKwHyAqc6JRuiypKcSFgzpUAbs",
  "key26": "5ExMTcPGmsJ4Kgpe861XpkdD1MGXtsMhGYKPYogVPRd3DJWCeo4ZMKYxjd9o2t5hUmUDuYduuDKdcjQHwqi61KhC",
  "key27": "2zj4D5X3CipsTPg2LBDzW8iHzuJE7ptoVFjVYU9unyVYY316SmXBZm746hV2Chhf5aq3rPkTwZ6JDwrzUtgGorKj",
  "key28": "63d4gwsqt7JSPTx1vHTEwxMqwDuqURSXWxbiFLx3Zw591sEKb3kCgA3SmQY8G9njPLXHDcg6vAiob6p9yKbdkjND",
  "key29": "32MJjWNzxyD5i6bgnxzZ3K82NDUF2pyccT3fyts8qRSnpxJBnUoio3cL2RHR1pzkgKn59L7ATTnUSVpiVaNwN3H6",
  "key30": "4aXt8vpHRntFnmSQaSMa7r7a6dz6BzvWpE1J6qVp2rwzqi8KZgycBuFUnLjsXicefTFgsds1em1zuEk7owCA8gKc",
  "key31": "2Y3ijE8r42xBxDFnwaFynJD8DfKKj1P9oUFL8pGADravELuh4ReUaD8NFBb9SeKFdFxs6PxonrAqn4sC2MsCthV2",
  "key32": "4xLxuFCVdEX3GvRFxPgTxMLQpcvCKmwi3gxR17CmSqDNkpbHyJZSE4ZiuQ7JzGBSkbsMdzodnuts81kzYdhZddCr",
  "key33": "2R8WG4D6Z7N8FaRSShj9MisPRcujPeP6GMYKqBFu9tkuaPSBh6Gei1HfnyXuUP6i4xu5gFf7RTib238ausirYLsi",
  "key34": "5bTNg29APmUxPeNP4HaGMtBVWjbXa8ZqpY3AoH93VdXs1fp3JT2dCXk2tRPk7bmTS5KvW5HNmx4Fjd1EaeKKC8jY",
  "key35": "4nhWBZipRiXQ4pa75mTp2zAu3nWyn61u23TFZWEhyF5KW54Cf9CFaRCXZpEmnaghgNXado494QePXdHJxg9aqfPA",
  "key36": "5zcBqeMKJFJnNTp62rbxo9reJnBbjXF1W3gGycELtkqQzsJNaqgboB2Pc8exQyeC71NNzuTVQDq2M9eEKHVh8PPd",
  "key37": "2Wxf4MFhcjPkiBQD4ua1pEdGuKmviTjwQK8tQqt7xmeWqyJkfBuNvvtK3qdgyPmSz19kWGnpG4rWZVyWgJHsBFdB",
  "key38": "2Si4nYVKcSXm2F8Q83VMYxcpjqySncvKPo7EZEvaJk3bCqdejDVoFTFMusTKMc4wychZseGSv7wzmooatU133DUR",
  "key39": "H7Agab6vxcEpxDiWXy5o3Q8NXSyTTdKbr9vChARVwnXeTDe2QsASittYHUKJAoAUkYKY3HtP7cNWftDq2GPAt1H",
  "key40": "3Jfimc3f1ymR57d5aDaqJFwbFcrZ3dq3XL1NRmpTF2zowGcwdw7rGrbVPpNByGgmhGCk9wuJddHDZHiYGFnNQxvW",
  "key41": "4H9HxcseHu89SYe4CVbcBfLjTwXhbTCjhAmq2BifXVqcvSqrjiTJZpBbsQjU5rnL85QQbLmtgK4BqJzvv4SNXKVc",
  "key42": "5Dg6dNTTHoRydTdKYxZVgs7LNSFyeN6K7ddTPsDANwssQF2NjCSZQZXYQcM1E4WRvteUbMNMwCwetSUQ4QSLJyiJ",
  "key43": "3ndEEcmiuJM5y4zVTqDHq8zMSRswZoZrTpaomGYgfmBKJoghj6Ab2dfZ6CCpGR4Zfzm7KSqWSJyX7jsAuBPuRWEw",
  "key44": "5i88WJ7fJoZMxtAsXw9cq4DjmZecYhVTNpASe6VPpEQyEykYS9vXT1tvfDvJwFvNd6KqWF1LnpkKsEA35dtnUGfW",
  "key45": "3TTjgPm343iiBiK11AvXe8vn5Bqw8JbqA5kGHoNUiCUsLuc2WH5JfRD9LEytBFeg6fN1jLmMFWpaAFK2BJtVLcaH",
  "key46": "oEy6SFixPjWe5HCat9k6VE8MM5qV7xkuFbkvvedDpKL8LckrLn66Sc9Z8Ez5DhrcSdLVJuV2JDkjt1eooHP6skQ",
  "key47": "2Rswtt9Q6YFZqNj2NV7XyMrLbJN6DEEFqLQy4ckTGZA5Bo4J7EXFScxcDXxRY7UzoBuWKWvRnV3t9EapZw7CAJCi",
  "key48": "mhCfTUaxGArQtQbGKZbS6LD9bAiMrxT7RAQs9pr4UfQGDJGBopLjRXrqkPVXK4ToZFYYCw6JHom8DwqgjZ7gghJ"
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
