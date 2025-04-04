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
    "3WhF7ARLKwtquLtWp1ozo4wxgVB5BU4NEJf8fxJFvNJjQd3DrkdyaGY8VHnBqzJLaWUqcgGypAvoveRxWx7miETf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VaVrwfYRATUWbf8cMeHovsCm1ora2EhKWKLaK1XBHDfvN1uYsa9fmGYA8eToM2xfeyoLmkJ5UhF3GbHTQbXQzKa",
  "key1": "5JgKKjGB9SFdjvjDQuhwGAhPamJDq8GxddqJtcYdcdKiCsumJ4GQ1rmr6SgVsYjcPcs8vqqvXs8j3t9HnbymNFU7",
  "key2": "ZWsKcBvjcZuMjXSESSLmAD7Da2Fuw5SCDaCr7L8am7HHpttM3E19YJefhDC2cFRhL32kWU94pMzW6vKGp2yypSW",
  "key3": "2uKAr5eogDxa4NSL1q6sq48QEWxA4KKXvpWYxwmL4Ecdk3XXtAiZPpxuHLXu3PJUuhSNnYbuzoWm14C1m93S8Lgp",
  "key4": "41RVRtLip5He4DbaniKeVSwooCMNucWrHDyiShq7YYbhChnE5VKj1u6p6eEofXxn6ko6GqeMzbcpFS3RkPCCo1q3",
  "key5": "y7j4e3UXh6BPDarqRxfaZmLxTGqd8n4FngchPmtmwUeCg7QYzWyo8tvnjmy22pwDDWkP9VmTsz6stVc8hAdma1c",
  "key6": "2WfUTDVWKxTbhZchENpeN6XfqPjetFyzemZUqoNEsiyGxUWF6UmUjGoYut9diuddeqTUT5KnZZsKuWJya2N7Rk5w",
  "key7": "2aBzdz9dveLpLzpeiyRf7bvEFWagHTmRPdE5kTMESbY3V2id1n1obdsxpSQr84tuxpNkvDwQoAJNuqDrwG9sCE3r",
  "key8": "2VvfRnE5uQG57nxrKdDEfD9gyhLzuiJ5dRGg9diTuoMr296JyLodv5RPeracxgZE2AL7adCiyQwqBYxMZegb3mjS",
  "key9": "5FgAPjLSjg5scLGgLSwbBQSbjpRt4mW77iePfseU13UjMSsDJD8mhqsLiMiBa8i81eoBurE6Ab8usi7JDcTqKMzs",
  "key10": "3FaYcCvZdGNe4zU3mqPngvc917UvVB6nFbjZfZAhbAsgtebnoQEWmfG5W6f6BVrovYScvtbyQkQRT6cZp9BZxnSm",
  "key11": "3LPZicd27eR1o5e42X3TY4hdg5wPi72NSUxBr1ZVgfi1aRVLo5mjboamyFEdFEeiv5dgHY17x5KVT7JB8sMS6CmW",
  "key12": "5wsk883ZnENK6neK7JniP5LHxcZTj5u32iB6rD9u6JbkqcgSA1a6jZApoQAhrhqXcdaN7oNofdr9B7fVikZYLMxy",
  "key13": "2dxAK8mjwbYC6cFLnVUkeMyNuNiK9VJdkgJb6knde2yepEJ8iuyV9riPQU5jXGjnsFjLusDPNEuHLjnmNW8mLGUE",
  "key14": "2cYiSMFWZVEMd4Lzf7KkAPKa94bUJJjY82QsFx1Dmb95TasCpE4meHpjfUt1tLtPtNhXG5wTeaBn2cBBpQzckgs7",
  "key15": "2rXomxEyZbTu2htQXAr9iGxxWvREhzqf4FUv6rHXbyEcs1mRCiHgeYyF59sVNSupN5fx29xHEXd4MEyUX2Sso937",
  "key16": "3EE47YWVsLY8aLbMe4cvJdQc3jy21xuqY8fK9GCg6frq62oHK9rCjLy7wA7R1FYkdiSggtDoAXnFvpLhHVAo1Ht1",
  "key17": "4e7sMPnqhxzt1Napu2JJT9cWT5HmFDY85fLQDj7tJVAvr576TyBSXNEhoN3jYcNTkX1frrzKXzFqbamWZt5VaJNy",
  "key18": "4fKutWmXR9KFdxT2SzQ8AGAvnwiFVsUYhk98Af3jCGEuYiV7rM8c3XMMt9GQRaZ7hdntHC5PmKJyT9azA4afRpDj",
  "key19": "4xUK6ZLBeAwL4wyVE61ssvgaVazgngHUrdfuzB9z3QKxdKG4RVwzqFwKtKg1xKN8qz27gyyiakv3pc4drdcafib1",
  "key20": "2aZxRmrnJWKf7f9ER1FQ4YWEG9N1ksKSedmDt7aZSJprSVNH7HxQFjJGJgNcVjnBCqs7YmrbdcTt4ykNvMBikEd4",
  "key21": "5Bz9StaxE5yvs1FtzwmRk4DruhpUrXULKGeaBS87yyuFET36EebJhsvKxEyQMVKcLJa7M56jtBmRwECZMWMPH1r1",
  "key22": "4x1VGQnhdBWR1mivD6jmd8sX5LmFx5tcMWBmtqQ9mE8DAPRpyxvs7yCDoTyQ93hhsuaW95uksHk8ieDzDfHfwkq7",
  "key23": "3bNj6SR8E1AiZRtRwCokjU1YjRqD2ZhEudaicUXFAhejzRv1LyLPiss3oaQQkPg1Y2oWR7KivxJHABaHMc2BUo5",
  "key24": "4vBe9eMMSMYB3EoDrbqV33Lt4TmDcamCHs88YnvqRkdrEzQ8S2L8mRp5DPTnGkc3MnQbYSBvfGXEAbq1aSB8pcXh",
  "key25": "aRpw4f4Pd2dVKPjmd7sFXdai6KNKutSyA8wX7y1MRu78wTvyKUD27S59cSxgkAEjanktEUJ2H9Lhi3Xczst1Fjg",
  "key26": "4Wsmj1QFbYjn1GLAVDsiMRS7gfkVWB6bFbqqUJ5Qjfz5mzkr97pBYbJCT3JxFyt7WvtGCTGxf2kD5EB5taBGXGj7",
  "key27": "yuJkNkSwCxrCbRBnGYyLidFZCf1b6QKdmgnGgFPXtHy1TPUkQhhiiCH9jyU4iW36gE91RaugzcQm2nqxPWpzdnG",
  "key28": "DPNmP8P5UTjfFAugotjopSa13bqybi7gJehN7orU9qDY84MevDKoKaP4CMKaHxRGSKv8yowcYUAvHogLyvxzsMr",
  "key29": "3cdGqZEbKRwYRnp8CMrevnBdNPoq9kbM2bXkEuFoRsGvZCrDVzTTGHrq6WRKyEqxzAzvv36wKggGc2Xgmh3SL1iA",
  "key30": "3id1MZVApbKosYa1JjfbUfXNijvXGSG3sYip2hwUdUAefpTAisYGAU2q1JqEk9yzVTcfFF19XBvMTXwRe7uB1dpk",
  "key31": "3PAtndVyt6hPG84QUZiM6jH62txmBcsG7r8oAepqiYHtYsR9fq6JQMTMcHNaix9eWLUBJ8E9MVHutJ1zEM4AZeHU",
  "key32": "4VnhPCtXmtwEbiBnB5cnuEXBijwp6ya9Ei3a6nWdnhSpPuFWTB7D9qgDzv45YVtBMUzv535vZoi2yxfGxywwRcTr",
  "key33": "2txkdmr6HD5kChLXtXqaKt65hk5wW8uWsP2S2wyUE5jFMgh4TttRhciENrEcP4NtkA6t7RDnettnwmu3gfqkcx6i",
  "key34": "3LQLTFBx4N1X6jWkyLYKoEJ6LFtnyUUvrpJHpTcAPZH2zskGjTC1yXd3FhCDtcwjhkzAj1iWKnnCxG1nsbMgvEY3",
  "key35": "YWHnxXhHVThFvL97aDQrPM9XQpAavvDudAXm5dFQ5PZSc6rq7UzDTX7bArFrdiTK5PqU3A8FBN5FBjmuEs1z43T",
  "key36": "kifowEVwu5hvCdbxzri82eptG4p5xaNnKKkYULcmncTUYNV8VwfGGxxQcY4u1MsX53TqfKjaYBq7XymiwNZeFkF",
  "key37": "5NEeP5RMWBYi2Bt5Gbo9vRpKSugeqg3m1TVThDF2e6UtQ3tyKzkH7dbMyr7KjyBHz88TgL84b4zmv2i3gKh1DyaC",
  "key38": "3313ozL84TGJuTk6bdyBn11Z2YMebU3Bf62exGWs9uhPGFMVNyG43AYuRUEdZ5ZYukuiKV7MWofyxPGmH74fiWea",
  "key39": "31qghF3ffGsp5ysnnEZAKLLSteCyYChXxaBB5bDXaHgYXjvCY9RV8M54fCBmLKha1j7XezXfHXzm7edhzUDETcMm",
  "key40": "4ra7oKMt8qAM2Zb56EqD3f5DbXvkp6azVKBHBuk2vqPCfjLnSnEQtCWKGZqSzpxHBxcg5Vv7FNRurWwLixdbj5Ey",
  "key41": "4s8yqtyNqUi2BGXPSSCpiMBKECtgDV6N2RMN1L8xF9DzkZrTZXtKjXTYZfVDQKqwDC3YLwKbYFAAxH6DbkTaemva",
  "key42": "5UrvsAikc4gRqouZTKtbGXcTMiYokLJqsE4j6WksVx2WWnUfHLnApZKzW9rV2QF4WbdmodAiZwpHUScTVkvfeDx2",
  "key43": "4s4beyyisnpmGU1D4AdXnXASsUwjRzjiu3CfJ2iR9dNgveUE9EuXTZ168n3zWZjtpUZ4wxtiRSd43U7naJ3AwH61",
  "key44": "5N4MLFTmFCyy5uDcaPYe8xW1ikKQsnowvUenfmxDjD3R6M6xa8VvJtBTnW1xtZGhmxpWTqdR9P39LjZdXE7Msjxf",
  "key45": "61JFhhBqdFup7CHPbHwA8YA4K3YzULu6jK3hBnZtSQFZh55EzGRXJEwzEpx7AnsAfahWe31uNBbpQ7Szcdqj8CHA",
  "key46": "47i77PuWnX9XwDPa2k4a9XCXtxsNkA9XVkNYXBjoPiaDtME8pRqF39jX4PdxcqomRMqsQSj4LWP7fTSqDbxZcq1L",
  "key47": "4ozxwxG2R68mugcdL7YdB4DutptDJkKa4WDDQaToUyuZGK6TsDHq3ieKnWbYBPm2dgKUEGW3FFqS5FYMkFapDbK5"
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
