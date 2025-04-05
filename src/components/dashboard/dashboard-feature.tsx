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
    "3riocg1K35z4jPZCLW4mDkrfZ9tg68VR4vaHohnfZ6gPYFX66GAyZRryY6qmvpcUppFjxtAgJd8JkRxGKGmTpnAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FsNcCt3LMp9c6kGSPNwy28QGpFysF7ciA1RHFca31pXke83rQhfj5WxKGgitWEzVkUM3Z5k5sJYQe43uA5HKbGs",
  "key1": "4nLbRZ4C84fuW7QbCDdXPNTdhucv4ipQa75w8hN1onkWjFXr3WkKXhwSmF2ro5Gb5efbDWxgMVDc5SLTaSiJRjMu",
  "key2": "5cEWgfqDmamc51oRJht9dwJb848jVCJ4TyhCjaN4oGASGjHZzJ6RqF4meRShiA2GQR7sG7H4UA1CiShN9pSm3mRd",
  "key3": "2kxvBkjjJRaVAmqPoY6Fcb3V4on8yM8oXdfs8vYL9M7fbQ3wjdvySqNXVF8gTwJA9QBfAjQmWoNJbqsw54drDGmy",
  "key4": "voUDrV5bwvu4Cq7QQYhRh5uixPXk1tCNHijQnbV1KdCmPgYhgJACCcg6UKu3xSZVEp79GVwADQZK4R9D8NL5B8N",
  "key5": "2ZwbSxuH35Jgj3SnbvYzxmMtFFytmk6GAQNrUpgartra3eHBsscaS3Q25e7S9pRGDQCF2NYtV2tGnBEh5UBGuiu5",
  "key6": "4Ky2A23yT6eDJHjBMupLTnk6HJoDPBUgxcA1kK6cRc4zfiJvUVqcMSocZYqEQxcJg9nQyaTSBT1CH8EgLVoHtspk",
  "key7": "2YanFn2kdM5wWnLLsYQgmKNdDFi6oMpMrD2BzTteZW9e8MEhEjDwQom6JTXxkuhJFwMrATgsRNAmoowyy1S4WE78",
  "key8": "4bXxkveqrPAnAZVAjhhzkeu8zJMhbxr2S5VvohJF92fg7fYy9T6xyx8rpXB712VMTaZH4cEz9jC2GHVfWG2JV1yU",
  "key9": "21XQiTv2WzhcWpq5fqJCd4CU8tVxQMLbbPMFwfbwahxtXTsaB85UB3wnHYSpdNADegq8VEspd7SVM36mdtyynEc3",
  "key10": "2Zwp6sdM7hJWp6M5yTAy7kis7txWJdhoGw7w3QXzhPJkwQrzav5mAzrcXPrp9HTY8Re8LAs98bEsEQr4jsZL9r5P",
  "key11": "5xDp8zTeTM3KZjJv4J6Cqk77tCabfREzk5k1Rr9T3LtPr2cfuJRueNKSmfodVVXLNGjg8LgVFbNqN42pueEbFdg7",
  "key12": "j4WvNqKvhVtYsQ26wCz6VaUkGhbS9VgVbzECbfCSFLczHfeHCgQNLL1HNkpkRFjUa1FKTmcCHuzEi49FQXqUW93",
  "key13": "2i5EGZRkd9gvAWBiWhDjP6xhTy2L2Bc6c1ZGW5Fuprb2F53kBZJPPd5apSaXKz864rcBknQxZeMwEWKYsSHwpJYn",
  "key14": "5ed4gvgEmgaeB8CqrNPS4EW6tQoffoi3t8vfoRDJ4aJxLfs3ZGxF8ijZNovq9zSfLyLmTAKM2gZE2epwaPG75V77",
  "key15": "4HJs4qEgaZ867fahuDotcpR4be1H4XP1c9xt2LrLaN6TF6TwEjb9SZtvfejaGcUcMfH3EWj2ZFUvGHZsKY2xuQK7",
  "key16": "4xgzDQXJuFAX35pDoXo6My1sjyh8DawcNg6mhMQTrnjhYtrSwAXG89PrhYNci7x6ZYM9VBfLQfEfLHDtQwvpv1oM",
  "key17": "5AKDkthPVTdhT4A7EA3UprR9BqpJ5XXbQbSKXVC9dJe34uuHDZo6UVAK7auZoLHycZXmVQkKqeJ8jowz68CXVUmy",
  "key18": "2o3W6LKv5vCkxEai2TGZWeJseijkgUHWGvqpTNbAwKCzqd7b3xVUJ9Lg4Bfmy9HcpZgYykHQebrt5bX9HWu8Qjf4",
  "key19": "482GUDBvwHRdHBKiLQWNxb4Zp74rxmmFacbSJkQEwfkZR4haf7UQBN4TG2qMBVU9BJHbDq6myRvTWvcmbmLMTAgP",
  "key20": "2qNtr2oiX2Ubnhwf7CQcGEhChjun8xUpVkbeHH8eG9yTENpXrFfYKWKmnju1k5mPtC43KVFxKZYZguuA5TaYnrim",
  "key21": "2Wqf9mBcpeKcrNfHZX7NjVAmFXpAoVgXvtcN4Hki9z5BzwTayb87B7yNWtzzC32986gnKtys4c7YeG6cYp3LtouG",
  "key22": "3sFjaGh7AZfNAtsf3xESTn1naw7PrVcci1kmiEVzxL55d7LMyk5uJiKR7mnPMc3zjKsXXbLRj4VsZioWdYtp7eSk",
  "key23": "3iGgP9gbndzUmujnxz4No1t4prfLo4bMkkoPZweVs3ih7aT2F5pMvJM3n622GW4Ksh2gevDtSriJvBK5MsDNxwG5",
  "key24": "2uH7D55kmGvZzYQV5RURavjdnhisbQURhhvKPYwtmF1XaiVFEnJAXkmkpC5CdEWSCt2s8YshGbtQDMdggiubnzG6",
  "key25": "5WHk56azV2eCu57wC9qiAjf58eW7JciuqK4SodTnWg2zpzoeoGbj5toRnJc67XDmNoaiiuoTwmgR4DGsWS43gcB5",
  "key26": "5c7aknhmu3no3upLG1kRDzU2qpERfQKYxEXJK3LtydGSuNHKjcJCMaJoAofBVoxxmVZHiuXDoVFDdeojyfmgi7Le",
  "key27": "2HPznyShUreeYywF5kZfLc4B4QGDt6TsU72xXUKENsgrfapXoaUfr67HgRBKUAq8xDoCLX6YjoesSyfqEWFAGFyW",
  "key28": "auc8LpbKQNJLNrMsYXgCYApWjz7Zzz2ED5JnidsqyfjgpxTXvSdKZCbwSsDCJRTfmduBQrcA9ABotRkYxyALaYe",
  "key29": "5yVesV7BrjCeCxnYfxYSUs9Qxdr1eVRmv5JnFhy8K7TteMg9GTXPedMB6WZRQFB3sFyWVgaY9cd5x8Xe4KjvGFDr",
  "key30": "UbLfPVZPJbW2jNP9v5WFhayfSiSAvBDsgrsfoDLuHiTX2LLr5vEEeWBGQdJk94oW85Zk1PuxPvsKgT3VSeRuqkP",
  "key31": "4LYeEosvtXtaD316Ftwjmg46XD57JDtmFH27tETAVvCZLxxoFppjkwhfncsko8ZYjyc9kQyuMpCSpDC32oEvigzd",
  "key32": "5e8Qqa86Ea23SQ26NYxciPkdM6iSMw9jU6ALs94DnLNiKge5ifWHNG9VhReouJkD6T9Q5hZFi7fsgxZ3d8oCMN5Q",
  "key33": "32s4JTRb765UkzRnhpSzgXFtMQamLsCC8bjZFj5jmbJzCv7nVptLWnY3PeSQTgD5y1EUi9TXnvWhcfafCuzJWV9B",
  "key34": "2RHKh3JbpN1Na2UqYTn2UfVgYVaH4xM6NTx5hoFbtDHg53BhKhpciufZF2q8y6zGK6eoL8tgUJgNUGia6MEtR5Fj",
  "key35": "344mr4xawRUQ3XZXZKFFFGoJcgX5syjrsD2oLnka82hhGkKs8WKZ8SSNFxDhcvvCJ8dCyUSxbKDabW6KQGki9vTA",
  "key36": "p44nF82Qq1NeUDmW7tPnnnJavkyGQ9B1GACRrfk6aZjB4MTHw9nRXFEX34p689AiYjk6Eu4v17CNYvku74CTn21",
  "key37": "3v4v6znEnR1Zw2YXGptKWwoW8JwcHLCSYb6mzxVnEu5BHjjigvEnTp6z3Y1RxG8MFwhiF7kPCmYFtNgCGS84HEZB",
  "key38": "5Swxc8RJRkeMnRtnZuUhMunk7izyM6X9PXNZqqm2QauuZLzBS8YwQ8ZZDGtWxZ69D3yq4F69UBT4FHVcb88JRDpD",
  "key39": "5jdoCYz3twYibx22Cx7BWyhxo3BGYGuXHercVgZAYsR5gJUsA91Nuy3bMVKvAQLRLvzo4iGS1SrHkaz6Z2VcfUqX",
  "key40": "2U2wK4mfd4S5qL2PSRo4XLLvdPm8Keuoe2EKh1PkXJqLSNVoa7m3cVMoBuVMRYGwHdieYDeNKrUUEZwZ9YiqV9go",
  "key41": "YaTYPHbFDK19FFkTwXXSZnYe5Uwr1kgAc46Wm8UbdTM4yKtvANyhdBZLPxk98gYEyMVjo4AVJqYaCpEgtzgfzUo",
  "key42": "ZwP9ocGBkYRmLLHHYXwYsWBn1roGntZ44wr8vwp9id6VNJEXFdBM1caeousLGqpB2Sj6gXpsVcicQfaezGES2kp",
  "key43": "64DMXZwrnrw2UzLQNHM7yKwWJk2XobfLJUKAo5LBZq945zSayKPE5y6ooubNNehHRhD1Nc6jP6Qdqwdm2kgNNJYo",
  "key44": "4grnSKj3W1C66squPN9sJ6LoWX8RzALX1QePgWUWcMn8xc6Yp28d9zVf1idh2JGfw74DHeKf6W5bu6ziYsNnPxZR",
  "key45": "4ZXCJgX7SM1Dw4DnKDg8266MFnQAhjHhBUHtLKMupMpsZ5vnPhRsFsjYB7DnE9DJvKFwZGSF5rivoPPmPG2HRm64",
  "key46": "36BNt3eVDm5fovgj57iwiUBpcCXRbK2ssJEiwocGXVEV917sZvdZ8ipYcWYjYBBAbZN1n9G27JZC2ZTm5jA2CQb2",
  "key47": "3MoKQ644rukjEdGYHEJXDZw9Ci3ePM5AkTY1vkbCfAHq35FWxsNKMac6kaaTu28P9JZN2D739L9KxiSiGzXhxEWw",
  "key48": "4Y78SU9TZshfSW7NHD5CgX2y5DT3JSqTAFWE4mjTcwy1gFBwvERmgovJ1W89F8D4DW8EGmpXvdWoTZfN38V1w11m",
  "key49": "67Gw8cEKYHxTumYVervG4wpAL7h32a1hawaTPLm9LmrjEd6NTc6ABqBqomzVH6feKmpWvtsMm5ttM7QoT7gG8MTg"
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
