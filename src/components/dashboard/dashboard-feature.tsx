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
    "5RNXTDQZNEnWTfha2Z7GgvW7ie6vES7Eop1Abzr588HWUcn2BYvSLfhSS1VnHkobU4TXHFvSk96gugHqUqhpxsJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EeawGS4Q3q5A4NBMYdowWHLASp2c5xum3dCYKXqzYY8y4NSSzgPcdzddoZV4LjgnicmuZMyAj7VZPmicyqyTpJm",
  "key1": "5FVyCdKFwSBiSL8h5mgEDtLcrcBtUaPBCQXd2MdF6uSzwYDnW5wMUVgF56QPw6kENBEeyceTLWF4f8m1TTXvcTho",
  "key2": "4Cvj4FTCu231JFNeEBdyVfzg7nux6YFd8BbidqmjWKfhv6nMq9JaNEetEQ7UGXwSH43qmpbmhm6Esr3KuyEhYhrC",
  "key3": "2FJNKDrdM9LyqLwJDefpfFSb6zeny1zSB8N76yuUr4iyaCbBNkKUAWbWCTFeNc2Qzjb3WxhavSk2HLVVdP7p2hag",
  "key4": "4n8AeSjEnK38smmrmbeTTDJKE1sk6NTtqEosry8cBUk2xKgz9rkpXdBEfCBZz8Ewn6h8Ra9sT4rmGwHEDoXBkbhY",
  "key5": "3rmcW7ydpZT9aQdDRozxsYTQrWXYor5CQoyytqZhiUYUMgd9hoff9sTKgui6eEbZg6AJytj7jSwmHp6Z3E6rfoX4",
  "key6": "3fTvDZMaRFYsfob8XLDK4P9sbnBZiQYb6njao24VNJsQj4Fo6RfMwSsJVTsmRWqQDjFXcnMb1LdgsHJnPBAgy5zc",
  "key7": "rPdHWPUPSPM7hN58A4HMD3K1EnegR1QugnPevygkTcWCUn55nGWyBVnEKhNDXqqkPVM5cnUKa8MGg18Vz5DZuQj",
  "key8": "2gGb9qV8gpqDzjUda4M1AUAQsbjYfhVqGP92yhRnormK34rwiFhESyehWrJhDWYoWNco7igfsNcegG1bsD7zJtc9",
  "key9": "dAwfG8bJp3wN15UcsxDJKJjFm55Hdmed2CiQQaQkQNBdtkMTHcftkHXDtdwYZ1SiTmPJGpsHUwkT6S9wDTffD9E",
  "key10": "49PooW3aNmjtkF1BorpE3xGt6tWvZXp65yJFy8P7ubKpGn5WMY19qTNBPsSeYSSYZv4wed7DwVKRsG4atQgQJTyS",
  "key11": "58LS6uzMHq7yzbwX3e1JFuGh4rhjwxBoYamm6ZBGiQQ12v5i7ULSkRrDTJP27wsAchzxPDRRiUgd1YXseeR4q8qF",
  "key12": "2FpJn39rv7MNSc7tvxQM3axY6veXEzTQU52uYPAvJ77FXw6a5Dm7DTW1GwSrzKCVxWNvRTAcDvKsKoR23otpz9bh",
  "key13": "4FBcPLCAnFZQuMhY9atSTJG6pcthnLgir4B1vARqHeBAxxHqeUTkF5AGbc44SVGxyXtAgb7TC6FrqYW8rMvn3Ncb",
  "key14": "4YVKt9twCSKRJXBDsYDMYLpBWrYHmjPLPZq3WHL5nye5XTtW2z3Nq6TKbQVrKBQLDScDVscdaw7zSGjPTfejAmoo",
  "key15": "mcyJVhLZxEqkS3CoZJ5hsAhTJHjCftCZUiisqSzSUSFvvifCTHXDPqbNz5LtyaQWGMLFPToAfd9vB3XngKD8V8R",
  "key16": "3k4fKiruGFsGWD4vKszKtntcYvueGBVKgAjttbVHg6TuiLS6xMExUGFY46u5nCt2EEXkixmdPqenSijYjmzefnWJ",
  "key17": "4hQFYr6ey3uSJVM7sLYHUyszDRDEiWenswZcWmQ5DtHkyXRirCo5ippBtJVVvEetForoLWD4F8bgCZUKtqQEbbqj",
  "key18": "5QQQfHhYZqysnADAvd4fB22rJL5f4PoN4aMgjcgCmsdzLf6CHarSTJL1XsbWYDgbiFqD7mpYviADD6kpsAEMyLPe",
  "key19": "54cQcehFt3PCA1cQoSfYFGJvjyRtTbiR3ZCqTUVShujRe15KVPM3kTqVe7B7CPRyPLCVvQQCRy6HnJQxgsEY1Wkj",
  "key20": "4DKp3vqR2sWtuge4ArvxiiEZXfDJWmCzijWdkpSTfTG61FcpgZhemdB69DL1L4KXgktQVZfqTWaJVyNdWCRJZyBr",
  "key21": "57q7sDQPnY1SdkbdkMdMExxuG1RsXczsA67X4Uw6xJaWcmjWisfCs9k8pC1Wm1SWzQN4JJBDcTTm3HbVYaJwoGjn",
  "key22": "4n9KBPTXB1XfATDQQFcGpNKywfBSYa6vvpSHZ51wFWkvCx4UTVZxW7bXi2tPuFqQPobBvTi7nR2GA5icLg4BKJqa",
  "key23": "2Gkr4ZB7L3FPUqLKdJr3JPac65m63DoyTqNFT4SK6XthuNvb8HSE3ivVVWsKrGPzUYh5z1ue9nKrXJmgh6nS6zi6",
  "key24": "4fRCiFozresjTJpXuy8S99hTfBxqkQ5zpzfxNFJwnocv9fZxaBxGiAWMyXavBG4xe4koRhiU7ikqHJ8qBP1ZuUjs",
  "key25": "iTLpJBEtyb1B4P1NLU2c7c3L3cEnxE568RyoFr5Qe2ZuoTj2JvknUk7xxgtwXzD5pS2h516L1968cYYoUwhv4vq",
  "key26": "3axirNFtNuyWJ3KHXSbpfF9rYJKnckw36zyZYSTFcBCWbs6bG78LZykqWZbh4WAa4xwdZsdH3GQn3rWHfMmARka2",
  "key27": "5LdKg8gzEqknd3AdGMg1T4BQE716tCuCk6wdUpGTksHE44JUQsQwuhRXAS8pFBZRMDmZv4R8oQ99HPEaCXyRtdEU",
  "key28": "4ym22xZb62uiMK1AgTtYdxiag8L5E8Ezif4xCTdNxGCstH9CC4NtyCZVaBX9oHUq7w8ZHf4eVY1sF4KfnwAqemUJ",
  "key29": "4cBunmhqLans8fPUtRCsjjzhJGMTR51HcCGTJ5bf1AhwsfbnoqtHbfRpPJ95UFvFaL5CXKVskQLchGCVj11fmTD5",
  "key30": "2UiHyhxNoiR1TirfUWTpi8SpsvQnWp7rcL77xGzoSfv2s8AgdnPaSb2CwecU3B4bNXsEXgPtDHTavjxfM8LXPcNM",
  "key31": "2zvGPxo8kX6gTEfJQ9n3C4Qa4SHLtSAkvAqFc3JDo7TRJDAyd8RZ4EFQcesdJHDf3dqxgjc3j7kLY26xhn8m2H7B",
  "key32": "REswKNWbCbiwgKZzsqSVUaB35FrVd6DpisxmoQQRVEymvHis1GLsk3sGHhV64AVm8pWku7s763eRxRfXw2bYkQD",
  "key33": "gLuXXP7pBAuYw8QbTHYWh4XhPmE5LBqLpgbu3XfFfU5vkaPMYXg3K44if6AM2myqVQZ9N94fLNgKfvzrojUPYMX",
  "key34": "4XzhWFPDnLfMntN9Jd8Z6rADes8AhdXzF6X7bqH4mAaTSHEpZuMq9wuWoeMYttXynrCerywrCPvNfy9mKmKavgdA",
  "key35": "9iXTSXL6eKuyZPh254TBk61Di1X6CySmzJ5US6EXiWwok5y9arbv456nyDCHfJNpMcoHHFBzKSHMaPw5Y6YanNX",
  "key36": "4beXxzduu87szWnS9BpH89MLFsCgZUGfuRE7QGiVfsQAK8M8a52s3rCB2RJu3G5r8ihJNEinP336YLWfe5CivH1S",
  "key37": "k87uZWxhhVWPkYarEPNXkoUHAvxRWm2buuW8tVXpKYvxDcn37LbNMHUnpN6MkPxGFhnjEFsncs7wcVVdMSQ6tcU",
  "key38": "2pv7yAN1J9eEbRu6FzDAHbcDGeh25M6XMwfGfov9RLsj7LU9CGG77br51dSY2WJdNtjGFoTfTTFnRQveHV1vSb3A",
  "key39": "4bqRSAnE51Tzyk8n1etM7zi99ozjnCycZ9ja1FiczV3w71ESCuVc12MDw4D1kk7WVoBwZK4ihJT4Df5aCRKqg1WV",
  "key40": "4KryZpunvhJu9MPEjvLSsUmcGM8mPBCiaYAxNq3qen77hidacRjLXyyrD3r5R4NFLfbVKACpnJEheMz7N9PNVq5m",
  "key41": "3g29ciVG3xKDXeQuW4XgrbFCMHabQsVQ8cLLCUsE8eAS8WY9iHf2ZYRtW2ucfxeRdzxwGdTKnNttHavGm8sqqrUx",
  "key42": "5K4itHucmS9t3frYEKMRsB2wL6N4w1Zp8JDqS6x1Zwc1MFj3BWvMjqCF5dJHePzm85NrVA5ETj3eds8tZfwnZPuM",
  "key43": "2SQTAnY55eJs2u3nKWnWrCK3tds8YwKUFgH1fifnRKwD1v4bfNX6EFgGViQKVWno3Vx69agRVXooxdfkJgfsi3wZ",
  "key44": "4XFyiUDFrPsjWTmggVCaKtEWwPg6mKpuBcCr7Sk2biqhfs5u8Vq1aFgr39H2oyLcbAGHmVjEvBDWposPEzsbwgbM",
  "key45": "352tv2Sp8LZccPTEAW9XKfuWt9C7gWyVeEnrzsyHCgQG4TiwLmHGTZLDjCswiz3DF7GAfBuwYE9VLKc6kt6gPZi6",
  "key46": "3Vb5zzdNJERyKRv6MsCAhNFZcR7C7FAC7kWwXBV2PNu3ugAinXugrmeY5rN3aN2hVRMxiNkZ3Y3WHSTzusqzwmWv",
  "key47": "3w5yK6iZdJnaKcmcRxDiNBVDs8Ynm7PaPaWC4ywZw3p6RjKzr1kAn8yw7oaqdHKEqYCJJeZXeSmcNzMmCNVov3oj"
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
