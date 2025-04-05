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
    "5SVF3cx6GSFqmCCc6azKQQPW59XJffLC3fseNT5zPEoxEVvwxhMk8spJLBGXqHHEmzFoTfVuS7uYXzBxXAdRdTGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ryZHFreJMkw1AtG8qPGPrX4QRHDok3sE4MJppyBgxEN2aN5Q7o7ByBF51EzoN8FNUcCt5ABa4iJZd1AEXzkxwnQ",
  "key1": "3mJQhhLi2LuDeAj7tnkQG35GNDM3JmTWeEEWDfvVEKvpLmfDyMuMFLZVgaPmo1u1JmkWy2wbVoKnqQ1eLmvTgZ7n",
  "key2": "8B38nYPpAuzGQWeNwLHc41SsdUDwFH4sh5bmyTi343jHh8JPJgJJQGBrsZ3tju9xA5V38LSxKtBrEUCPf8uNP8H",
  "key3": "5nqu6vDCgE1kVKakEgdb2Q4RLLK9RLE87KaUnDnyAriwCo3CnbzA41Ry1km9cc6pDFUR18uSmzdwN54naHmzaqQv",
  "key4": "5y4E5339K3Qrnxnu8E3x6qRedvQAXEnDbthNTW3VAtTELkRGp9hdDKd81pr81ujG9FUUcZ29N2zDqUXdrorqronc",
  "key5": "3qai2eGmYSuXeCcE2YShVtcsGaEW8gZDZdnAbgi2k8CxcyAQsk4vJiL4Z1azJhXNz2M2QUZXStqwg42LWHcrtjj6",
  "key6": "5W4JJR8g6w1uHWDjX7LGnfvf8vorRVv1ZdUULyTB5naXFvuX79qRHP5DgHPSyJC4CdxSX2MSEyXuRA1MNMbAX5Hb",
  "key7": "4t7zqG3KyckKYrdvx4EhQw4QuXY2tzQbdyuMiqu9gSXgcCKHKQfmKMqtbFzoJDQogbzqB3G1s1wkUojLPZbtKFoc",
  "key8": "3SvBfdbi41eYJMPKoXYdcaBzYRh7yYPCFZ7X7zkJEBQShidaSykCc2d36RiQKVgSQDQaHg5bMNuqanbwktXq1bfE",
  "key9": "4qbjrsiV4wSvvqu6GJA7EfmdVrASkA6maXqfeet2fubHj87VQvuHFmrww2HfimSpwL2rTkFoVEmaKrHG5HySoMM5",
  "key10": "43bMDkLVHfMUwvUiNoUE3AKScMq3oj8xDLyMMUkhUBY8e35SihXWST52Pj6i8YvZEadmn4XwMkrRdHw9uu6z7jN6",
  "key11": "1jeGcMnfQHHJv957D87Zqvsdwiw4RbZzRkTbyHVMyf6ZkfemzSt7NZUrxnqDrc48uE1YEG93bGqvzQw23yJ4pYZ",
  "key12": "b9kSn7LheNmNTGJYtDCqU16DrD4Z9HC7x8grrzpZ1FsHeeTauJ4QKtZyVziKgWidv5mTPW8KNzy2n6az7HiHRAp",
  "key13": "3ceGAqVgCUqGKkx5csAGc4GRJGyTq3iKVye5H5joFibDWRD4ukfGEi7g9pUA6tgvqTdMDMcdPxw4P8mdrEYaXnh2",
  "key14": "2LZxNcM2rkxxn9WMZcFNCycWobPFDeyyJZ2WHxcu877bHSVwZNkaDCFEV7aRfkjz91fh5yppmqpkKmvrsiDKFbRi",
  "key15": "Yo9xyBm33JQ9K4nfst68y6Jbr546txmCSscUjWFCyyNSmqZPvMcEcchcMmQCsLRjbAcs3vvVKyRNHJmZ8yC9dCv",
  "key16": "5DF9ec4RQTMKtfg17yNohFwySP63smCW66TbG7miZeCBaLtPVSzB8MTLEJL3RZJM9yY1gN6uUN5oE7hHuWTRQ3bt",
  "key17": "537nX3SGSz7vnueLM2dCSrUKajvmqY781WqRKQUTM3wgeHxKZJ8BJTnNYSMMKjp2Mkvi2f6acpA3axZF8SKddXiH",
  "key18": "3pdFchZndTYCpuURFLzVJBz4sJH7oqUPduSarvUvaExKFaB5VsDj1EhKpJhd1XY37z4tsgJvw6EgaxVHPUbmtYKm",
  "key19": "4QULx4dHZwHWnR7SBX2yg2gBahHQkd2JMJLGRBP558LyiMMTDyReXHeiVwX5AC5Kiqau6rETq4LpPNEBaAyqUYXA",
  "key20": "4qg4TFhQ46xgmkj2ha7XpnVsgUmXGR96QvBBZwksBtbbpa9dFUmc4WjeZCvshMeh6n8vPtQV8FTeBCmNqS55DCwW",
  "key21": "krVS7xEyoDkwDhg3Z7s9akR2SyjVTQc9DwoXG3ipycLckc7KaRJG2BJ6RMTL7nZAHAvPTBsU14KHo4wZ1iT5E8i",
  "key22": "FG3Yi8e1wXCjK3jjuHPu6v77YrWuCL2f4b2TnXJ86K6oLkuJxXUhCbcDsa3kGqAioC4XZp7iKBzUsvoc6k4KWHB",
  "key23": "ZTAVQUyR645vGqJgJZXusqX8o6Nddo6LcDCRXniur9uQGdYFkDtN6noKhtG6YTTdgsjcH2rWy9WSJSsJs25UpCi",
  "key24": "3Kuu4XRW9eA7zMB7Udnq7jLGMyXbwVZdezez2aeoXoMeG7GojUR2qHNHgaR8uT1VMrHrUXqUGRpHe4UfS1AbfVue",
  "key25": "VjKPh1ZvQRJwuvMWs4wPyzeSUydsj6BvfUbVoGA7M1BHb8gGu2xMhXC69gpAkfATcJs22zH7Hwyzo3qxHTmCoEE",
  "key26": "3h5ni1VMSQBAt9bTvQx7Zrr5NuC3RZo832JcjQyXFt6eCfrkLFw6sCNWhSzcXtQXwUv3BHLyYkpjgvunpLLNBpmx",
  "key27": "2h53sZdriEik2gH9MWMPLxwL93kTFt7usahnNaDNECMyyt6jWuyeQUdfq21qSXmgcAA1nXFcKyNNoMSzvSQitLom",
  "key28": "2zg5Ppafgy3HpJRTna6FmCrE13CRAKybf1GCkNYJXtNdR5V1Z2MzFk8LuR6ktLmq1yNuK9GpGzysxUT5GxYBvwPB",
  "key29": "5qKyfyo1U7LkpTKik2yvrjvBMY2f8JWXjVky9RkybSZU9Dwj6QEZsoVLDC6BX4gQaKBKPg6LghwcKzoWENCip7mY",
  "key30": "s1UNe4ND2ANJPpxcvj5a2HooHchS6hm2LFEHxwJP8Q8QLg9ukc8Tu5htKU3mgoGKCJPLiTh1VsEiXHru9M7iko9",
  "key31": "4JoGdb86HXG2ffEmkvFMfqmG5nY6NyQqC2V6P7k3DZyFXuCETcRCon4sbFi9pLLge7wwKkp7n7B3MLZYGpz6jFGN",
  "key32": "5TBrposkPUYxHaGXcAXafwXrSjRXcgT9WBNtqcAohxJVkD1U14u9aSHiNbMgVxEfXuYryZV6EXxCrYK5WYw383BE",
  "key33": "2JQ2rkH3reUxXveKuRpJY4jYhSiyNrzPW6Y2i5SYofLWQuj5oNo78gZQPErz3DNqu4qtJtFZ8HowfZyfvpUy7sm7",
  "key34": "3AVkeq7qTaiGfeJrVdEinSwtENnG8MTM7jWQxYKEK6mHzbHVXJ6WB8U8Wwgm8gYpfFPwmauo74Kg5KhvezQRK1Xf",
  "key35": "5okttrzyLba7SeWu2EXFvyRfeGHZTgaX9zQW5bHdvhXaQMQEX4YmiXmBbzjh2DTDqTT2VPoB7ocFwG3Ej6iZq1vH",
  "key36": "2GFafbf4bZ5TJWCqgCEpQZuxx7z8yqimtRM2e5re2pu7f8ZJ91bXe41pBr2t5vRwm6W4sKx5Ki8znz1YcgRhbaYz",
  "key37": "62prqNFb3qwXa8xdDDianEQYV1o7c4aMQAfmX6nXkKsyrWiEYbSjZVeaYzGJsC6b6ZfG5iBiPF1WFMiviXY55HeA",
  "key38": "3hEJuJ3ytisMSbVfYzEMe7vTb5dEEEnYo37uNMNFpyTPcmj2JuYDCEGjdaiEVQWhECDZBaXWWEXbFdDitbuNJ46j",
  "key39": "4By17zjLi5mbnJZ9DSqhgPTSLYL7QXUNVH3QVNzyeLyX55VUvmMg4zeVi454cfqSkrX7N994WZ7psVgMBtX2Lmq5",
  "key40": "38VRwwRGVzvQsXej21LspXpVErVoh8Df9NaAMMw4FADp8A6tERLfS6CSFwG6zBHkmqWM2Q7Tet34N1NSmrfqUyL3",
  "key41": "1FRaGtmm4RZXDVQhnGU9yeMYYqqgNzwY7vZGcBDsm2Qi9JDkZjRzXVd3jfjQk7omcn4uzjUZF4YeFLqZhQtYbSR",
  "key42": "5DtiXo1xU7geB8KiKZTc6dgV9F6tiBYuDZ36G8qKJU5DqSXfFJzAJofG8HYEVv8aekuCQ3ct3msgqgX8fKVRQCKi",
  "key43": "2EHY48JEq6dBxkmQ9XQGUyg7jv4QZc2LEUxYVXXRWxiR57tRriTuxkuSpfkzaPHLtPzNGf4GdyahVYZkc8Qy77AQ",
  "key44": "5ogLhr6jPjTdRg4eNGU1EQKiBPK9oMKgT5UhFD4UzGmbTc9yWgpyrLRo1SHLtCyihBWkt1D4pzgou5i3YMAFS54p",
  "key45": "3Sbp4QfXucP7nya8DkTJ4gKysqzXwVTzThL5yt33Wk7zihcKaGnQdbMYpRMnoiLgzX2miuZK5NGD1sia8Uc2j6Xd",
  "key46": "5Dwa6xXFumpX2xxxu5p9FLtDPV2oAp72cH4kMW7NW4wMRvLnyagXKu58dau2GWq5GpbcfQmLmkPYUHRGtQcDcTB4",
  "key47": "5kmgnhHLVHEBKxcPRbk5RZnhtx2gHhyYLByZD6U44c4rfVsEre5YBEQXz3cdgn18xsQca3sH5Aic2wGFneckKx4a"
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
