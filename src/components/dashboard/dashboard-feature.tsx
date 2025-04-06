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
    "4gBCtFsa4i1WdXy1DuoH5dt4kgFrGe4tnyaJKdrwmZrhYL8PYARsSsLU3QUTbHhmAHFbmDDSNbAduckDUdoZUwFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rakc98ZaAxDZ1v6scz9RHso3zQkWufaR5YPEFCo6ZqLEfsr37Jr3MNVGq2TLK7uUu2EzGW5sMGDW7QxYb6A86pS",
  "key1": "57UgZ7VVKmyJSJkNQL1UiirgKmrJbaxF1bLFEKeTh3bkQnzAVYEnCiXeDn5deGXM3TXuxArUum2ru2hYYUnzFimx",
  "key2": "NuuKzpTZVsYsXgV2nxTZo96nYHd87idTBzDCTJRnbZ4MMhaTRtAk6dUPUdjpRGjgzNa2RC8MjadHzvCg2Thp2DH",
  "key3": "5gwp8AQUq7URSzNAVSYyhstV8c3dyrnc9kFHZAgoSYX6rwc7chaTPVsZQYFk8pcSVQR5hyjjaMGAoNvEkcJujPeD",
  "key4": "5bqWDoNzk9DSMkr7bFcpLFriUBYefSf5pw5EEn7ABRZxYACMwcPs7HvvqnbNjmQMonpLGYnvh2BBjECDSCbNUaud",
  "key5": "biKwdJCJi4A3FXN9Nu5PKNsktMAKL4B5ct2o5FESbYhzrNhAbcaH21ZM9DZc3s6rPFhkxf1SVhTf56SRwbx6PzF",
  "key6": "2BNZpQgLHhXCbqM2Z3yJ2QrABspLQKxFPYmjEoRREwoR76kkk8q5e2d5aLdPV9GMcWWQt8ZXz7uFK1exmLmGRR22",
  "key7": "2Eo13651L7nCEeSvoaPjaVqFxoczYyGAqi4w53UoZaQA4VEBSUkpTBXpDJ51sqqgw7cn7HdN9v5c54c56tCZZH9X",
  "key8": "2BEB7zo6imJX11iJtRrD9Zu83X6XeMCNKbFKunvtMLn1RxgYt2bPotJyB4GXy2aeKxuQHWe4tRJTi5oiFgZd3211",
  "key9": "4J6NQ6BzpNGTBHU9cc3Az5RE3kRXaiioKpH4HAac7NdhqwaMWVQhrondJYYYXg7BEMonA3ghQ2LPX9b5yt8QyW4e",
  "key10": "3xXnVqLFRX7QnX83Qrhq7UcDBVrtWhGfVRgafAt5a5epYpq6rG7iuSfqDWdDxn8pG1FK57KWYKfXBAxoJ3MLKEvt",
  "key11": "5e6PvxXpbHwAzPGFJNFSbvqNFxjP3X7NYrMjTuhVtDGru35Jji7u5fSbDdP553FcNfa9WRmvmEJz8n4vsEMUThN8",
  "key12": "4unqj3t3mbteSUfJefG4fqF7KegJLysB65RsvXoNzcoyWWHzp6GHeyB2wSNHJJz86keZHS2ibZkxtLgE5mobtRtp",
  "key13": "2sLtc11YiwQ4RyijmL7P8EBqwf6PXsSskura4M12xZTPQmHwGFBkRjDEUE45PzCr3TitCktnjQUL6PwfUj7TBSJK",
  "key14": "2u2vgRratM8MZEp1eUzXgtMW7yD7ymEFEendeqQUEZcedQ61cidqCQ2eQHAK62zBLzFW14ohVskga5o8ph5gD8NU",
  "key15": "AiEYzvhcK55RCVAhPuYd68MatHdV1B5iWzd8MsAzWm3Acx1vNa1Y1X3SAPBz3wkrM32F3h62c59WD1yQoAL5FVT",
  "key16": "VfNynk66xuazGvbaYRCnLA5R6eTAEVgkZ4Unp29HpuRiBzGEEZZnGx8NdwqpB2Pw29Ug5NahemLrr33bvfxRno2",
  "key17": "3aM7pPBKD1sYDEEGoi3NdTyU9hBhfzZr8ghpQ7We9npVxsVMUfjUC8fTPSz5uN21n4YyAsQs7oFKqGMiXkFBP7FK",
  "key18": "4UPSCsuNgudr5V4Hht3LRBbyDtfHFFBDGYRQqjv5SJVeCkYYyH7MR6s2nKhKzJmk8LMKho3d3rSzCiAMopqdkZBA",
  "key19": "5ti3bC4Dk4yiovSEDUEpn2sm3Sock6v46YgtzBwAoH7c11cVWHdNsGrVdQJx86fokpnnV8TB2XVYjs9FcsC6zqSV",
  "key20": "2aXhjWhxLAJukPkBwzTfijVCaHMuxxkebDGjFAsBRZj152XXHQKybKGow6v41e2ZL4SXF9KXnuaH3b4DNbDvmzPB",
  "key21": "53THcf4V5WcDF2eoNHM7H25dyjH5oJ4cLMc5bxLWFmQkUrsDw1jrT7sUUqf4EyaBpsbnXk3WTTYkYSCA1i9LAiQL",
  "key22": "3849VzzUxPE4H6CiKxKKdTmD9D6SvP8kQ5SVfquiW3xhA4rjG8spfUaGjhjtoij9RBw1qnVbXdV3j92EdZzxmM8A",
  "key23": "2hBhVhMxVJiijYUxYVfASYeCDsKgiWuSfm42MWgHqNhCAjrHPWnooDcnKypFdrt6mn6VBCUuWhp5oqqqR268Z6wQ",
  "key24": "3ncVhaEc3JRumWSUZ1GtW9X2xKWyivuNnwdkFRmaSNdom6rPpNabdqd3seSKyszsJYdZeBKopZBMkC7Ee6k1cNiX",
  "key25": "498gFWpT1wfv9QTgbSTrYja9WQQcC4j6oWGxSYGK6gu3WqNjg1PE6xjPVJqN6V7738WF4h8MF8FzuMW2tW4wXc78",
  "key26": "RXA2JAWnKPp7rQ8byaKm4mdzL5qYnMj9vMWai7D2GLhj2wH2mC9Q8pd8Tw4wdppiP6BoUra7mYZoiTqaKQCYz5U",
  "key27": "51A38GU97ZrdvzwVPGQs2pN4Bf32EyNoWYD4hx3uLipXgSPoUvFX66XsSVB2EodVHUsFuUJ2m17gDvKvzh2jVGes",
  "key28": "3HHTE2m7MkS7rN5v39q3txtoCPsNqqCGPfjjLrudorgb96mnep23B1tVyZ84d9JtBiqb4xg1JQuaCtigPDvknjVC",
  "key29": "MfbJBbtNwbBhkSeN43H51DjCYgMWFQZE2pFP9jnTPhTy9GHqSzCGL6Cz7KSE5FXow43AdX4GvFaTgsTNDMSk133",
  "key30": "2ZzxgC8iLB9RxAA76gGwRQm6xgpTGAoE6KBYdBmfTKRQVms84ma5xWX1wMnbHeASfdiXyUqSs1TYfQuZCV739q4u",
  "key31": "iL8GRQnC2NkDzBG76sQgLiLcQ1rqjWVmzuHAhssHjw8FC1G5CYcAgdBucNwjtxyfqY8QVzhVb4XTDGfBgk9RU1X",
  "key32": "5gor8pqc6Fs58o5ch1XbCF6CGkT9za2w72LBE5murrJY8RA2VaeYbpVcxFGc77Q14pQzeewXu17jfebneHBXv7vF",
  "key33": "3ACF19GXFQfBbrWW1of5DuWUsWy66Zj1JGfEb6w7XefUjiagBTSgScxpx4Ynba2fkme38g2B2HcHjpCWtd6Pd1KF",
  "key34": "2GyCHer2rapLsDdb8SdqLmzbKVaDjzSpZyaEH58vcSdj6yEvrTceHUAmB1wWnp5gknnKEB2oQsXQXZxpLnb9jPep",
  "key35": "5m1ZmcHuuXEwBpXo6WYxxz9AZcUVGJWAC8CYCoLeQnknQ8VukkXmkwzeK8XfxCphG7s9ncCLm9fhED1VJZK4n7Mp",
  "key36": "5TeUasJmSMqVov2Ec1VyDCrpcneBo9UGJHXvW2HBfHejU3TBYF54SFwLt4MGuLyUeQqWQeRHsdbQTGM6F6U7rMZp",
  "key37": "2XfE9zgTj1qkvq6AMsgYNsqW8qPjGpR15t1Huh2Bn6ABqKHs7gP9WAapiqKF4HD642PjgPC8hpSdKLy62tGxfFou",
  "key38": "izrSPUYExHFDpgyNXnERSV8YhM4D3qihi5v3e2ZAPprozYmuSxYGRLLk9qi4tu4mKeT5d4pLoxob91iSdAvEsFW",
  "key39": "sAp93v3EQGxELt1TBDhnmvmWHhU9JEJyRacN7YJjLFYUnA879wzHKhmjWty1vrrET43SEkXTynw6yHG1gZEBTrH",
  "key40": "3dzR2KCcW7VVauDhJPNnTS9AMpUK6wfQgMAMMF1MCL7aQUyUsRatTeBTmj5yGc5uJhB6xXD2ZxqKWhz5JcVgxBtr",
  "key41": "4YDhNREhkaY2hYKmDo57GEDgA3B5ZcFgEqKgCuDmTVa6xc8gUiFNPFuFNAj8E5XEoawTyhCguVrdwFEzdG4xBgK4",
  "key42": "cTaUnYQxX11DwoGAWpGBw5pBVSh2RBGD6SD645sqPhytF1iSyt98wQWtQeyFi7LcdmCknHBxSbsHjf1AKc7HeFY",
  "key43": "2GLu1VZChVMbK8dD4GvzfRj1b6Z1sgE78fG4v5t9vzTwwH4MfTUx3sPT7u7xg9y1KWkRb6y5kQ8Uzw5bFqDP7kVT",
  "key44": "2sLPcJTwJKLKBF5vmM84R5jEHp5u5MgJ7FSjuqoq2VmKsYfn5JKNJqBctQ7ksR4KVh9SU4xmGwQ2W1LT84QGvLmW",
  "key45": "312D7sfNe3vtLqoNQ97WLdphnEiMYcGKLNvab8jS2FLoQ7hsyfg9kbdHLDn4Eioy18oFUzLKTe3CfPm1rN3bxXrZ",
  "key46": "XsdKBMRa76bvHz8kjvDL5TfFrJJ87dW7ZN6DU6woYgKWhnujvdLwX3au1zsFxMmkPNJMxo6BbHGs34aMoeZWKbu",
  "key47": "AjnmPXXuGUkmjZngJ69bLyWkxTET4ffNkAH4TFeG38rgxaJWUXLoX38GmRi5xDsdRdfiCNoUxycR5rvQLDMwN5A",
  "key48": "Ujzp4HYS6sjtoarRyz9wCGhQ7zF5HpEW1FvnosR1LijqB1BUsUpeZyWzXX7nkRV4WmN3gvZ6RWUtuZ9v2rJDUD1",
  "key49": "629XZVnvirT3fnBPmd61LWHjUen5VSXXbDtpnEhn2Msazw89JBfVQdTA1Q4YumF7KqSsbYPF7R5Ao96fEXGPCSyC"
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
