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
    "2dr4uJD3z2fJT2NsEcStk29ob6LDL7oMDHacZDutGmu7GdT4EykKgF1CbAM4n7e1EqziwTcoB7GC8EgLEERvPnBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dt7cJVgqDV48rYWVzmTs9e1hnzGCyCAfBenbAij5x3F6EdzMv2RBfYP3VfgrRnMQSUwzpTs9RD4DQzeLvkupugp",
  "key1": "5zDsrTyx1Ff5UVn9N48QhUPwCoYWXbtbWLzfDhtdjg1Tu5AgkwmqgkaMr1JUhKfyUz2nZUMQ4zX19mbHmN6HjAv1",
  "key2": "53tuxT9ic9tLZQJhFZqFGr66XYhpoozL5yTiGf5fQBQmbzAEEfa4ffaoCBpTrrrm8R2osnR87DQ9bpxZ9fgy5MCy",
  "key3": "a2jRvjnR5c5xYEk772MxnFCZVgjMdTpjfbidW6BmKkis82poAYnHNLJ13J5Ne6FVcEG3x8cDBXhCV5iN6L1Qpwe",
  "key4": "hZ2JKvedXZqfAQAkGc6n46YrTQGZhKP1eQx2e4VX6TVwnzYRyN6a3LycjHiSh4u25XPgE6PwSg31JgtxaBRAZeH",
  "key5": "cpioG8GPfHJfYtbiLWaVh13JzwuMZqK4hfW4kNPGCJMi7ktyqZdtGDuZ8YX2zRM7o6gjcgKan3n5gWVjp2SZZKo",
  "key6": "5D8bnSYHxgYyqBkTbGCMkGUuDCnQSCufyGpGJinqudog9v68CgvuMZ6Ka218omBUecwWkh4v8oLXWecATBn1w1PM",
  "key7": "525WjwDMPR7kk5kNN2BFrGLS7ZzcCa1aBnrsdWXxMTTvvNKW7eG7hL9Hi35sTjvGE3pJCs2VPm1NafoF91aqbtae",
  "key8": "2xDwwoKwGBaptsDMVZAkccK4gi6yMhaNTXw2hd4AfzCKMjofQ5UuZhD6CSxDC3MpsShdDFAyV1PviWjzx5gSia5H",
  "key9": "4GCizrKvUA1zknwcXpnLXkofmuXdeDZpXwKXo2CdWczYco8pXf5d3TysokYHRmSGLdk9LdUA9oPVXSgoUYMVt4hf",
  "key10": "nTnpSQ1PVyVtme1zYQtnCmoPx9Ta8kAjdvTZHCwRwJHG1mr3VJAh3cx2qcdh5FeTURy9J1dcsY5mCBju2LDjyXp",
  "key11": "3GfFS4axf973BGEJKU9FhvKpz2zcnFCRimGT6SygEoQNMvbTb5yLiZGcg37pTzD3AW8fxAEhUXfJbcCqF8SzQDGu",
  "key12": "4FSBavWA4Rm9BTEivE8jzkkv9PntLoDghRDV77aaHJABkpknynUQoZWD514tnZtqZA1wwrbUT8zEZsrfZeefqq3z",
  "key13": "34MxmU1vmQpN9dCr9vy2LbEeE3JdYTFwvtatkDD1pMSJYwbcD6GVW6y3gN94PyFwjgFhw2eYPQw9MqfbdaXZg34q",
  "key14": "WichaKn7ERBtpW8GUYPbev819KVaR8Aj6AorbHyGDAAKuqgBRGnWKxbZiXSoACBBBz1VNCyPCc4EcxSQJaUTXwF",
  "key15": "4BT4Ffaj6wnFaizUMvqBw9ZV8xEXoWDrULyULNSaj99PXo5LryLx9F6d7P9372geRK1adUroWnSR4Vnr8yUvxq4",
  "key16": "27oZ6UBUNiVY2Wtfz5C7ZpHjBAXX3Av7bejZjqHhpmt94o1jSvL6Kd33mLUeh7UeNudqvRFhzJmQUFTtX8pmrdrE",
  "key17": "49hFXV5VaEnxNu8YUGeZ6acjRNRfgRTfspCA5MX8PH5NijakMxFuzp3XAbZkVgUfaZmGYuPKnbyJYnRuy3K7qeea",
  "key18": "66tLECPWcqcbwSy1KCkoehcX4N69CPWjnsX8GZSYKbEprjwPsEMzD9ToGcxXSntcc8BqirHtrN5R8GXg4n6GCtY4",
  "key19": "4zpa3zw3agPJYJiwgF6hNgvJaFWgRbNdUKTijB7y8NBuGjmijek3swFycyHFQLcaGq6nKxx7LPWAuEh2awB9mJ45",
  "key20": "5XviG2gcptA2Xkt9uu2hhRAgCVnEHBpCwivoZQZdMdMoAZRufZF7rE7Su8Lat8FbDLb94i9aaxeUovEWj3RoDopN",
  "key21": "2WLymfuM8qpFFxHZo2tK4zSwqRqmQCLB6wBqRawvE5uMSPeCUiskD8gcENHFFuTGty8de2SomuAvUypzkqYVYeZU",
  "key22": "24DwoGhZhvBjpKg2C9w8JyG8ufVmsg5pkvXmXetHLQ5gzfvcpzWDgaK9wKHNGe1FxvaiRW4Qx5xjH9HtQF9ZpSGM",
  "key23": "33SDg7BLEiNFPYveRgKrnbyC3WTzumsjJ7prd9AG5fEwDpjULpCgDh74b9jh3ny2Diiaep2cVYarLbYnkWKQr6s",
  "key24": "eZQgy7FfUUpKqqjgbkv2Qv8QPHfg8EWBkj24fi33BQTid8s9ke7KGkSStb8UPycpaCcvYcPxBXc5vUkgGaB7mxc",
  "key25": "3opt2h81nBwGk6cg1e7237PFR4XRWUGPvXxYXs23stvaQjUbL8bMMQdHMPEYJbtt9UvBDQECMUXk1VMafURfgc1L",
  "key26": "65ivHLuF4YiPAGYvVoVy3W3E2t34E1jSgPikp4wehDgDxZ67kMoVErq4GT3ZATjuUaGp2A9vWGcwYq9TwF3FeVsD",
  "key27": "4Rt17FSikZwJR5ixxs2ijBya3jYtMpMUb5CpdgaTyydkmivfSF2yJLVsoofWXXuRe5V1fPZvidbQBfxcB6yCmCAa",
  "key28": "2RFn2XcWEe15sVFwm5jPAYPvVfGbjz2YL2qzAGeS7PXQKR8UEfsai8FXSRRM3zbFayLf1JZ51DBekR8bbtMrz3Ad",
  "key29": "3F483bnATQVpXGR2R2NA7LKChbmrrKxGH1V3VhUHTLxfqkEKseeHgC6yCrkVceZhfZNumNmVufjS1xjC9PhvnPAQ",
  "key30": "4xr6mN7zLzzsG1YW93KW1RVJJZk93mrfEnNbWq6JbjBKHWN8ykyaQ6r5uvP2Zgtm38jxn2L8b1QyUrwC4TfaxcHG",
  "key31": "2AzacuSi562J9yX9NwW6G4ZC8BMsSUzZZekT41bHx5iVVLsF61SNgCmvxmtCn1Uox174cr4hhfQQS5w1kCXpXWT9",
  "key32": "5ibopfYqjhVsroHh957VK1iN2YjuCJwjJx9aFKiXdFB6DkyDUvCjXQqPpVtqwebSWqbySK33Fiz3z8Ttqyw9XpKU",
  "key33": "3KuSbWTEutrxA8p9StwnZgWFnWU7Ror1rVymVoTfojqyVwT816pn3fL7BqscFbDoYNsmkJ9Q5xztGjBv558JShPA",
  "key34": "9HWnS7YjU18wtvqw87ZGMbTYddeZ6x51ocimr8ceJ433bGfN4eLEshKcbVsUQWvFPzDr7bvupeKwhxUM7DKyhTm",
  "key35": "5FVJzvb5oQgMjCYGv6hSN8MMFga831kcQtYr5t9tPysrprPCuBF45Rksbfgjbfn8eVVbD3sWR6eU5g8u2MEUYDHm",
  "key36": "2ATUwJH4QgUbGiLeoHB1EyQyQ1PBrxduKxQqTTtdKgjVfxQXShFSw159EFVQuQgfWt1awCcBBLjzUohzuaqGDbVx",
  "key37": "364Rfos3thSVyhbjNYmHxDH9C28jrW1opcJHAMBW8rWZqhXorF25Xbj6QwBEVZ8UbmQuzrRnWRt5H5GJHqbR4iDX",
  "key38": "4gnTvUJefrVV7WFNJGWzVDRzCg7netqJJDQKzqqP1sbTvQwRPTr2Chp1Vr6XjP4F5TgitJT4zQqVroHtGJbeVdY4",
  "key39": "4d5TA5tw9rUwRfk1jEqkXJbgLTtsk6Tyfx8fVokxi1emGz9CLDR4f7g4FXJZJUmbCifZw9CjWRuDzRP7Fhy6knyu",
  "key40": "4x56HdQmsceFrBJAYv5UW4RcvMdjJVQwJwqcnsNZDKQZY9AdZ8kKQUdKqScaVvXKgp4YT9HyCtxWYfdbjdyk9XxK",
  "key41": "2eWfYEhMLiEPUiyqcMbjXaPZzm4EzTVi11rDsBT7U69bfw6RW2Wy5RwWmv4h5MfRub7BCnjZW5rZva76M4XCnojr",
  "key42": "AmUwR3TvhDotzQdiECrAfCUdHatiPCQGSFSuu9PsYEWjM6G964nXiGipP7t2avATnaSmEmGs9VTUk5jgcrD9qfp",
  "key43": "4Jq3wRYQpkim8ZnTbaUTMyFcSAuKao4EBmuxbfhvMEk1pgF6ETcLBkB9mhNTCaebvPCiVZS8gr4J66SPWahs4Jcr",
  "key44": "48eVoCYKWHSpVaWr6m1ueSAtcktQgtSsr48zt2pWuCvkDPSWUnQeYRGcZfDmwZWSo3SqAZWpBVt2KRy6fQCwAYdk",
  "key45": "3JAC7QZa14WszJLEtXrvjSPJ9zKgdssWbAr7ULi3BSJ8nJFgorBWeFnjYTDsvPy5QuT8EUqqAefAyq9B3V9VgPYv",
  "key46": "2j1yC6DePSMy7drBHqvNK8xcT1BZ2SPxRfdsTxwWSamqm3ok7JuMt2bMcHs8rc9D6pc1oocJ6AMpVHD76Q3nsRaw"
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
