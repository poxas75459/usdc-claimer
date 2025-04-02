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
    "48yizjpVQ7wSsgGc7TwiPqvTUFyryskkqAdRMfzfdMkzeqqwhyTCJa4C6DhDBqnP4rpR4ap2eHA7hAfwFJY9fPC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dzXb8d5zBhHVDFyWyQgAqLvuFuNhev6PgVh8SaVAkL7DqenUrEk3JtXX8P3cy4woQYcQiigumi1AcfryGhTL4WN",
  "key1": "4UmbaJUGqBgigpyarxaw42LzuW2MN8f7W7Gq6Hp62NdiLahr14jWdeWsx6EcRGVAZJvzfNfM4nB6KQ9sYF7jjndz",
  "key2": "2nX2rxtZ3y3M8e5xonFJzMRVTnXe87bGUYrTayRxxuNVgCksaHGdR8xA22JFUFXVU3K74JRRH5AKz94AfWQ9ijRd",
  "key3": "23MFrja3GbhNq78C8Y5gHW91NxBagEUkqGe3cDNB9YVKfhogX8JAHyCd44FXm1FVQwnYLuFmNq8U25UHDiZ3e3kF",
  "key4": "4Wk4S3zapbfkApZZh5tHu99Hm6U73nTrx6W7Dvj59he37xoi2VexvMA8NCKKXSDmuiB5egad7n4T5yr2GqK6XvhN",
  "key5": "h1ak3TFucXD6TQNRBEk2Dw8CtDtFwUQWVNPYJy2zh61UxEoVL9mFK4pAFk3tWUTZhYCdE7Lv99tMu8qkK1HoQAn",
  "key6": "59T3JqVE5dS5AZ37rC3t6BdwzzzNHjFghsG51HeTwVCUcyE2ijggwBF4UHCJteGj79bN5nBo3MHpmwSQjo7yigJg",
  "key7": "5BtrbhdJWvAPdJTt2f5uYX3RmDk7TfYapns8Ujh4S4Ggk4kPuGUCXxrNUaqyfkJkT4ZmGHGcNhE5JXGnnx5wPeqt",
  "key8": "2YnJTjXkty9VrBiEsrBN6jvwbYk3pb3V7h1PVDXv736s1zDpoo4bpRUk73vxhGD6ZXi2TeAGcXjcxX1sRLjAK7s3",
  "key9": "5rAQbUPKBULrh5Boh7GgXG9Vpdoe1365triy925ZBVUwVJ2boWVorM4hJPYYTvVskToZYm19XkLAh8X6Q42DnZhD",
  "key10": "3HAVocuKGGEXGLy5MQTEQEZjcsBC8X4UCiGmpFC7Cxy1Zx3bnuHGdFgwMufENumuyv53mAS2FG85tSVzLJ5mnYU5",
  "key11": "52PjUbPSZS2Fb2x9S9YpUo4BA4awbdvbnz8fEjsimvQKnrM8qhDjmp5aQC4CUbWrVqkztV9vanJxmtTwyYi5dyd9",
  "key12": "2N8QiqbycsarHutUkVWpYVeJ41KY3PNuzWvk8ChXWig5HcNE7TZZxGmtz5xoa6Wmouou5s4HGajBHf82LEQyybZy",
  "key13": "3EeRFU2Zm4rg6q62yjTEpFrTnYfS8TWNwhbpp8Qp3mRZBcQwYALHqnRzxaYsdNZxJNYtw6nD7ng6CYufZKFTwSSN",
  "key14": "61fLguiQZssiiU7jR6PcpYujaAiWgVWgCf6WzX8H63S9yEtvQP2Fa6kdXCLgDqDbW3nJsYmqpaQUyG6zYSvCmSSJ",
  "key15": "4UQV1iEX47PTVhgyowXQThU56hik9QnDyncA3WzWxULXPdgKcrVE7iF1CGWQFpFJN2a6zjPp14G7MGFkPBCoy6q9",
  "key16": "31AsKZMuV1xmNcPix248NXtyBYbVEKs47XS2LDfo8cjQqCfLEBtRdGo6zQEatvP2B3k43b96g5TYDXSoSqcDYYxY",
  "key17": "2iMzKWY43PsiuYBDsV6TYEssaMg1aq9nBeBbdTJkmgExne8r5Q9tSemY4cY139VsbBLrN7V9gAcvD8NgtBbmShH6",
  "key18": "2MCHBj1KyGwsCG1bytvFWkb8x1TpJaEWh6LhxT6KrroXLrmZnwnxsRiVvaoZgeBYzJuCQxGEfCPyC2KJhC9sVAMG",
  "key19": "4d1Jmkr1Upw236BbDSYxJJ15LWpZWbpxdYpZutg1TkRquMt3LNNmiySxZbXDdhPNHMy1vkxZF6AUVtVBg9rY54rG",
  "key20": "22gt9rk2ocCHc9Q2MJz4UvF3XWoyN86Ac7zyFpeLMTkxzh6NvTH7RSD7321QJSrqWeqyndXsKZq3SooX3HN8yiSW",
  "key21": "3SAzsJ283eoTaLERXh2prWSxMqoLXeN7jXHv8nDw9esA7G8eWDyY2QEdxuNSsMH29k3dzDqfHQcBkVeorDWYx9vx",
  "key22": "TuiKnHLpKnk1DbtDtJHsMa8L2KTckEZ31WeQ9wahErhT3fixgBxmkk4Bi3G4mHQHz1MhB96FajjJdUa66Whc22B",
  "key23": "5WVbLZ8VhaiyeLHJMAiWncsVGvWRWNbMrowxFcHPXd5nF1vX1ZfHtuwT9WHY2gMdeuUNmw2aTNaeNwADqkoWMsCw",
  "key24": "5YCXRcNZ6qUPSooDJZxNj99qkS4hyLK6PoWXphs5G7JKxf27vhBCLTrA9FbibzNLHgwngUE5YuFxFBYqPTVLANTU",
  "key25": "5wq7q8KPprdpmWNQYmESX8Vp8XPMwsohEfb8KSJw5XSVJCuJ27JFziHtU6nMKo9F4Ds5BQerYLsYZoyWTJwRDr9Q",
  "key26": "3WGhW7P8btRgxhie1fV5tEPpcH9471LN3TKs9qua2sL6ooHiN2wsDaALfQt8mfqDLfK52nCZzQjKxbEx3eMvJ793",
  "key27": "dYHdYEYQbUUJKY3fz2wHU8hd1KypHZPHDA88yDJYtwKmfBZL9jo8CfukwbF4XwgBefYD45EZJLGd4CofW5p5Rhi",
  "key28": "mjyw1SJ8oyitbL9hWV64P7nW1PvprsVcupcNzNmJYX9qeTKQxSua5EHG372b9p9dP4GLGd3pbhSp2X67TFMCNYB",
  "key29": "44cFs4pcRgcmeb6fk85wxhE3thXXGcQVBNiRNfSfwgyQiSw2uQm4QSJajVzHuMPMfKu9vAsQittE7rn7udtksxKq",
  "key30": "5QQ6AxVUGGwxG99Juc61v3ko2TfrTbtNLMidntAh61ERzHe7kf7PuGY6E4CJh8Cfabt6X1nm1QNcuQzCWDDURfRB",
  "key31": "5AAHXGecAc752LCaXTzGNvETYLV12mDMTHFu7RrFR1mxBkJUhJ36tJA33joWX7TmjhvsmCMFSMP9P1GoygrYZmNo",
  "key32": "5or1CJkin22mcwZPrYWdNvGqRpKLGuYNYjGrGixhNYBSqC31AWgXnkbiUdsbT9PxoSJWuyLvb2RJarv6EZf2Au9b",
  "key33": "2CqYicHHeUzBcopZLBpDi77meeFxAK7L6JhRmF3oMxGBQKN1dxnFJFmiu3L9DtqwEQ8xga6XZBVemQhkyPGn2gXB",
  "key34": "KMqTgkDLngKJYB79q3fRv6FWC5QXaPfZSMvgFW2cMQ3Dyx8gWQq4qF2DXkXXYnR7Utt3jSweoWHZ9FHxrSoLWps",
  "key35": "5jBik9RkrfM15x2sNxJF6rxZTwETHiYMQEhxombzm5xHeBKpEbkFWFGubGdBj5LmUYhTRJw2U7cGc6H3SyJJA5aC",
  "key36": "4oE7tLbA52iMVh5VWj5s4WYp7rnUyfXZEduix8WcehTem8FTnVKQ4pGh686hzr1Dnx96UjD7A7nhcShpg2J9jKmx",
  "key37": "5EThEg1Fahz1LNNx9eRfyt9LqzaxVAgUg6gZ3TgYG6RHE3dqjoiz5BCiTuP73rG9ZJm9nTbyfMFd2oZojD7vwGT1",
  "key38": "4L9oHk4q9JwbZ4ym5jiHUfucvB1JU5gBjNLvP11TvMY52AT3RLo9eH7SkqPGdErwmjj995TijZwtqjzpFpN92bkZ",
  "key39": "SCgWmFXvarfmVcAswXNgRpB7w2K81azuLRzZKxyMJxJWBtQUx1s6Rv46A3vw3HSzjBwiKvEA7VnFpso6dEs41gx",
  "key40": "4w5zAnjR4nLM4PJBvaxVGrvKGMkTmsGQz9y68kXcN77v17VDPTVeGvgzN379HCQeuvsWK2c64mR7Fe8m6sp1bSV9",
  "key41": "4X44i4494ceons3aUGVLihDxyeCSVi7DinSAVS8LNwJAa937fYW1n2jTRrPmEkcD1Psz6C1ey8knJtjwqHtxAysb",
  "key42": "5n6AArBZAykoabsQBMpFSzjELD3bG7qucqknE3Ejkt3cUYBAgTwn9aqJkswyFictYsNXcRKLJNMMNdFrX1GwKJcu",
  "key43": "679Aqk6qZt3VacT64WcYFNp9bX8hJ2AJcnrpPfR9ZCDEGsDLDKiFt9mCumJMVzm5Vpp4mDetQtFuYsSSMnVo5x5h",
  "key44": "4HzXVximsEfYnhFNF5C7PtctpCchTfXnHEVXZhRsTniFFd8kyFUcseKQXKGQdiG9pxxRA1QWSakHwVfRcNvj5gSs",
  "key45": "YhqxeZr2XFjkDtxWfGE8qsoppeAYAHbeiPEqHjLXSJobYuD9j1wBm1esTgNRdEAZyefLa4ksCVSPgajBKjAnGDN"
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
