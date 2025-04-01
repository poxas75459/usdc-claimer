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
    "4ho6cuC4aPfhvnBCE9GfYHjD7Z8LuQrcksce1nUBhot9aT8s9Hd32W848hpPjayGFzw8fT7yKrGktAFApAjpXJm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MgRBHroeCreLRWhH8bGKjPapunLr2AEXvs6p73xigCkRhNBLemviEBEdMHyiTKeRXotHyi3VnojEbw7y1wqpmR9",
  "key1": "4GgFQuymuC3pKxne98VqwqD962fFcbxZguRr9HrxjLUDcJZueAh2nc9PmQ9Ls2zS62WdFFFNgDsZQK4nFXTvXHLb",
  "key2": "2NXCZZDPQTHAKWWoC3yHMj5ceRbMJMF7mwNk16FEc6QuJmfHxQmheuVu1FCKLUtNyDkGftARVB1wnfba8Kbj6Lem",
  "key3": "3vvbrnVwvrdVcnT1isxfPodubSNZraGyuQsaGJC9XPWWGM8u2uGuyZEn2goKacZGVf9QyUvch2gShZv1mYV3jfx8",
  "key4": "3eDpFsbFSbDKwE6bwZFf5owNySgkELXDMrPWUodpB6jxvf3yyzrxaWVdAJc1bBECXgCRWyWQnxanN2rvWXRMPLxA",
  "key5": "3LbtJyQSBJJcuP8gyDHcxc28GJYFSrgSCZc5BCMkMfFbgfatwCgtyX3q6vzjupQwov3EJX5wbtVFek1TEzHNnK2q",
  "key6": "2YeNr9EaJe2UUDnoTJKBENVL68334a7k14i5VqudQ6ofuc9PY6Ssx4PULiZCpPgyk7v6JV4gDvRkBit7YDYve2GR",
  "key7": "4iVK1HkjPPwTzwERxumNaoZwct98gHBJTpi8NwkEnEuUyZhvTy5yJSZqbsUgoDL96HvudXhQbLgQXkywXrFZBWai",
  "key8": "2udY26BzB78wymdHcQ3cLzd8oThtCMsna6U3wBEDk35JZak47fwUrDkhdWDzhw92PBEhJbC3eBKT9AFCLBoiitDh",
  "key9": "2Tc9ARCo2aippSuRJhBkGHtjn4zb9DuGGEbu4KaGaNSKNfmvPQahTxs8XJevR5QnqgdtFaLRnzSQQDF6Kuvevdor",
  "key10": "3e8aShrZmb1oVMU7pAryJ7Wvnu8EYrNPQpT5SCivk41UfnG1xxCNCrMnvCErNdTFYEZ7Y5HGyknEmezNuRYHyW1e",
  "key11": "Ssm7kF2oAjMARtjGGFcoB99NwzjHzARigZu11GuMzztwkuGK1bBs2wNBh8LEpurSrxCSTUVRbNqrARjkrmRh6bw",
  "key12": "5far9fMoFcyEgKHbRBB4CH12YpKmxN3ogTbFwNz6pBWKG7Gpj8KBE2C9gu6yAc5eEuFx3kc7DJWNbnbXTmiZcjP6",
  "key13": "ksi3LKmmmE3eyHtCqEYueiSvnkRfsbCUPVXBgZLtLCbrbGDzMnPFRTvzzPfYoQsrftwqpebTJeG1rMzyUWtxBtK",
  "key14": "R1zh2i9NENubEtYuJqLxbWZfPwKzqEdtcYYftm1swp8T15ccp2JPMzzFj6pZbdif5tSYHNUGdjAbWHAp9tAkLnT",
  "key15": "3T24BZHf1dbS9Dt7fimwmf53CDobsasdGgH8yjvJqeCfhpjMPHq5FMjU7YEj8cWMqTboUX15creQXJH2RkGqPFEm",
  "key16": "2uvETZApUusBhZazxfdFQNPyAwoKtTkB3m6CftENZ3crJFwZ8Xsiw9Tdefriqhro3Yye47WxaCvsvvvKn9UMaNgg",
  "key17": "39tf64oVvoYtt9TZPDku28X3fZQTdWhA8p1cdzCnYwb4Fb445VZvt9DVCSKDm6EnjNNwuAFWbWbQH8TGCop9GRV",
  "key18": "53VcmhcLFZ9GC5D8rUb64fvA7RYg583W9NYW8jYPgLhMDMwAHCDvCMZq3uuw7BbNZXyfoBdRtcHhmcUT3mubBdA3",
  "key19": "2FDkUoHBzbYypsXou3wuya9V1ub4RtmnwL1UqnDxFDAWjQW4x4bV2GTiTkL1SpUnXMsfnkoCRc2z54psMuSqc66B",
  "key20": "2BCuTPiAJzdC8moqyJbNYZREiY8J9AeP2eimLrRKMeXL3PRikvWBny6EMwyBt483AkrpHBwoz3r3PZKxaAs7NwT7",
  "key21": "2qESeyk7pE3HRKejUkfKZmRNawWERrqYYiLW42P2wepYqyY1Co2jsPEJpDYeEY8FhGe2fLtRGK5pDfWjJrfDvPU3",
  "key22": "3kJvNe9DyP5gZZQHXmAQDAbMAgtnhDzyQNCgXLQ4csHytPbusoEwkxfvWAqy7ycw8LxpMByrG18MgVFtBXGg9e9x",
  "key23": "2UhuRKptuTTpEhmJ7QRXoGsfB7iS3Y8DZ5dAkoHCY5LAJSWa6ThddTc2G62X3eQijtux5QDXqKSLGUDdv5VHBoMM",
  "key24": "28fmMVHZoaLF2yb4ug5ezme5tiyfKpCSxzX1uZtQh9H4qzmeUzA8XxocHnuJaSy49nqvQBSkRnwYoao9T877NEU5",
  "key25": "3dEkDGwMfvh4bTynUojoe53xzvhqQ1xdWepEKimVkRNwTM62psusQU6xyHaPGsRYK67mPm1gyodHiXwAfBYvFndy",
  "key26": "3rqLJvgLASMBdGwJjUysSttJanqCZcPqpCPm3mRcJmnoiibjBG1d4zorstCS15qwShFAd81uXvWzLHfSSMP81BHV",
  "key27": "4iGt5Dr8pFJEQh4Z5FBTi8mHsS24MSGVnMwbyR4URGbzZn24YawVKqJayo3eoJtg6Q7HFKTyXgh4MjWSoCs4c4ak",
  "key28": "3cVdRc6NQESciXuCkbjsq1HSt4cVbC82YShMfRQGZuHobr3TQ9aGCqAG66AUhqPk4HdAF1VkBajZXywXniXDQRKV",
  "key29": "4WZBdZqVrCYNQ1L3y2rEgSTFUxV3vxrHR8cWbiB3dpKL3DVS655KPNkxAqGoGHyTinBmoHhQKhDpJALYcGuYmwAB",
  "key30": "5Q8XCFUHNoYA615mEC5rV4YCUye9X3yaYmv5AoyPUbBpY7TvjhRZJpLnh7tuv5VKJSktKshPwW5mMYbzLhZx43yC",
  "key31": "34Gk7XnZht9TVHVCsJNaj5aaw1a3fcqozpY2P8qj2bfdwJyiRc8JJikcAQK3DAJJV7iYiKWyN4zswdJr1gGKwfZc",
  "key32": "4qFpwgwK5Ue2q6TTq3vXoncJpqwEK2MFUTRRzKsH6bXDSkqPAQBNkLo7qxPMiocNfTV2kfbQMDbMkrU1GPTWrVKF",
  "key33": "2pm9kzt96LaF4z3HvzxCkDU9d7qLedTtdAzmGDAPK2YtgVpoH3xENFAjBrp5Qv8v6P2NK3okSjKz9qXZxpZyRSqj",
  "key34": "39Qw8JYAnhBcCmMkx4DxXppXboor24J3fuHL4WqF5K5LZmL79kWDkRjcyYGoXPzG6Cc5r3Adhy1u33dkK9kenzY7",
  "key35": "5CVSeyavS3xz73HCjKNJj4YBJ7nVfMBWn2Uk6GvwCfFaJmz9Je14gYSF6YkSsfoivp5jdAknk7aoV2aKSWyZmQuh",
  "key36": "25RmFNr3THfvnBaPq4NetnAxswfWf4TRmhPPv8mihocSAtjQghTunzUcjxXL7RjYj11CjKekVaiWKAipuqQ13hod",
  "key37": "5LWiRjmbzHy3TnAsrfWvnxesYEkKeetEQN23e4jNh39NasTMRbqKTMLibYXaDLo7zW3uPAxkj2LSQqmVU69VLfNq",
  "key38": "3amisKWR3ER5uasHV7Ngro1K44UoJ9b6DSePUguHLENZoW8bthyd3erzo9hCTUfVnrRrmveXYiikjRQx7q5SsvrW",
  "key39": "UdjdjhVwCVs8ufrSWBrGyNVsK7j4byyjsDv5pwqXxeKyLGJC9pNVuyZHJeixJxCDC9ufhY5dCokHpwLieTCnSmu",
  "key40": "3zaW2yQG9UPeA575QxapVsDNGcMbZiM3CQQyTUPGuCZSFaDtSX2AWk8KiMyDNw2j4RjNHHFQkTaDPy3PN5Yfnb9m",
  "key41": "3b9MTYHRGYVoYc1HFxZ9p3zTwV3TZs9TgYG5byXHUsLvLpuXKWkuuz2JQsWw8qnUpaYzxm3Kwd8chGjzHGWR5BoD",
  "key42": "4U7qjiiRkC1GmRazRBEsqyQpwrnJikoWKH9GKGuK3w3pZ7NLYL5uzHMx6qqysRKpdXkBewotyFRkS3WSEZPnh3bU",
  "key43": "4Tbvss6QZApY8jSWsAX8ok38r4uyLmM6XFr2Q2PFhytQ3LVj1EN7KCjtxQsbAB2TMyTdU7ZsXunAhEu6CNadWGDd",
  "key44": "55vhCy7pKBruExgBKq8s1gKqQjZf4FNyuDTA9eQCXp3vTHcyLgiRyk96DGGpAof8iHp5RRA9HAnS4sdqTJU2GNca",
  "key45": "51r4zw4Le76LdYQy6HNNANWcxVW2VECh6W43w7D1xCWRBW8gKmwPWHdHSt1tvwKmw5fZ5kwpTEekZhGQoMgnaPp1"
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
