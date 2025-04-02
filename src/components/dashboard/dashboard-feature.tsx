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
    "3sECzSES9USkjFFTxBoS6MqYtjYkfFLLTuys6a83KjX1xqKZDVADj2J4XgvrWq8efovNorkB8PkJ2wU6fM1T4RGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5evAQ25Wz9mEtfifGuSeSCt9758wpaRkCLCY3o6EyF4b1h728gmmmbT76SPEVvS3syqTZiySV8KaVT1VkCKeUoLS",
  "key1": "2NSnauGjv6Lw99iRE3nweQDvruDWDTEZiDt63ENGX7f4W4ifQsoWqMa9WMcDryUxFUagUfUP6qq1o72HmGnCRS9K",
  "key2": "JjjoRamyc2iKtktB1MCT3Rc8zXnLnTi5a5JXDjoxbZSbGRA3vbubL8PaubsBHbaeq3s6MWSafpryShfu8B65kYs",
  "key3": "2uonVS8dkn61XnJEahuVwnWhfrsj7Ff4PjMFJPq9puXTvQrMg157XidW1V7G4hViSr4G7f7iK9jhULRVCTMxmenD",
  "key4": "53ghp1S7FtzCYP4MvKhznT2856JzoBp1J3hNgKRYEEBX2KAh4fGq8N72fQ6Q8JBRjix9pkPwVr6nGdGjdsBEG2vg",
  "key5": "54ab1neMy4XjdnRGiy1CV3Q7NgVWKbEMaVbtQ16777hmrGDawiHvxHT1rKWgjfVCWD4RCanuqK6mruyFkvhrsofE",
  "key6": "5YiL9e8FjAhNAVTkd1c3YxWLTrVtESLq93vndoXYPDnXGogVHvkM8SDpW5UMSFfDh7SdgVAK4iNf1WJ2rxEawudv",
  "key7": "3MkAHTXp24CGAmBxHPoYDR5VgnGRKTmdWkhNVyGguTFMasQamdNm8koJ9GzriKAQ7Q5UiF2Q7sJ6DPghqf2AR6G3",
  "key8": "3fW1nW7EVbKQSurz8rYae4Qut6GauomnNz5WpaKWAjAji1Q6wMSXRLtWMxZLxqWVKHR9CZgBpprSN1LDGCfa9zoP",
  "key9": "22dZMm2EDiDNkH8zKfGPRqjv5gnAeJKmke9woavU79MZKk6gtjWzCMptctAPXiPCJbdmv5A6rHAKySSzGxMAZU9D",
  "key10": "3LSL3CLw9A36voUq2QXpSvnQS56Y6nu9EJqbZ3AUVkbS5XtxjXh41VMPNa3V6AzgnW5iBZftxcgR5G8mUSFjfyfk",
  "key11": "vBBnn2rWPhQgKSqMo6XdBe2Jvqm6dT7JCD52z57T4kdrTBQpKZZ9qRupFeqE4ZYrtafiFKnrMYojdrRRFWn2wHC",
  "key12": "3zv9frEmdmK2DNmsMuvBoj7Lc8oWoSVR6fcZKRpSkaB1cmCGtDd6wWvSrDaSLVaty6Jgb21RaSjUsmYkh7MJWVjx",
  "key13": "4LAEQ2HM7wi6LVo3V4xBW8cKJ25yqkuYfusr8NqzTZEvHVwftoZUdDs9ekcn8k4bbheHra6pYXMFUmF3nf94LH5U",
  "key14": "4nZh4rr3VLndtNorzKjJHzxSjGUhJsg7MgBi68WPc3hFrBtmVqJ9WxGCcVgcoGJSGSzyLCjuyLHanFG15vaZmSmB",
  "key15": "3KNFfUFuek2byAThUSdnDfLjNx36ppZs7xv66sRBMAymfFKuR1u9Ms7zsmx21Ekf22hP4ReM6aKQTcXm1Dz6NQke",
  "key16": "4pynvSVXhWkCMREEAB5c2j2GieY5vjnGR4akFYrCn7kkpCHJpD5KjnmopKLyB68gTZWbBEBGDMrrSW8RvPNM3Sed",
  "key17": "47YvoXxV7HZbkb8nUzfKMJbVQAoGTpycRmbTdsHTQYfWvXV4m55Gfz4iQ95oZC1aH3JLt3JzeQDzVMAgf19hjByc",
  "key18": "5mCD8ipf8qwYpWCFyYGqeiaDiKbsncpSm3iGvEC6L4kYrdaGtkKQaxKXs7sspGrpoYnHxJikTM2R2k36yysaTSKs",
  "key19": "3qfmaPGoYTc8LAzJeTEhj2ECNr2TFMTxcmokFiKEpo2ii3w4ekkKiax5nPQF7Vg1cWHhpZCMLPtrjtspkccTQg3S",
  "key20": "3Lv7j3iW2AVhgbC8go8LVnm2vnkQCq3Z8zRsLGX1BYf4hva6TfQC9BYD9BDYaoinQm51MXwuJDrmVmKcZTA6WAfx",
  "key21": "3q2BbusvjNkJqFC88eYBNWsVLnMvUFj77S85fXGNuUgoXMuvKrCTziJ4wqrYFb3BQcTi91fXAbZfoUGmn4tCwdtw",
  "key22": "5RkbR5uxNYsdhwv59MUUtBYVQJAmgoRTjmcaAD9MMfQsVUmToG5D7gv2wde4GR2qzZ5E4vE68wg9VVoE2iVyiKE3",
  "key23": "5mcegSQGH5QBgNwp6ZvZKWUfvqRYNot9p8t1biwr547PLedmG1YwH2r2gr64J2VpQnVXCFHoGSZiXMfaJ5sFJzxS",
  "key24": "piApXJBd6KJXmDCbhpKRHVk7BLWdfGt3WL7j3vkdMKzkUbzQ3EmLXaRCRDEeiY4d8jYQp4Z2dQPmhWAVP5ZF41G",
  "key25": "3taJ9GEGxDgKhVVniE9NjbaigDGeWk1sFJnxy3AkB3PucJSxpYWnY3E47c6rwSecu5ipZdnoHGAL613DCaErrTzL",
  "key26": "2egSjcr41NgsXvcywkUmxi1qYxek3DvvcwYMa8rTt8xMiUZjhpM1FfEnaK1i8woj7s5mrfRGbruopVWRR1YE7rH",
  "key27": "3MJPLu6bVkHt6XSpLg1rChjvJmHMy47YBC4jKmDc5VuX1s2FJnD3fhYtXmmhBy14pp8mW5m4N5GZvPDgZEBUZ9dG",
  "key28": "4h1R8y6W1MZJ5pYXcx8mUTaFPRNv8vVz8qyi5XUgtHNQAJp17hwM5jWegK78ajpYE5fpLMYDzUbcx8skPqYakt8n",
  "key29": "5dkJzxF9MeoLauacfq8rBGqFthMANLNufyjudY4fGZLH62mz346WZxx7zUzK7KLgYnBVkeND28oRG3Pf54iCHy4s",
  "key30": "2LUVEamjYqQcrPZkKgkuwkQf7qLQ37dv5tkPMFfY6YRmvbGpijUT1DqY6DTQKALoPQHvk1K7sXnKLdr3L4WhSGAs",
  "key31": "L9srQKFWne3eayW9H5NwUJTS2Xc53FmnHYZ9YCDc766dRQDf7RQTPvn6HyC5fc1CQJHTNRyw8WM9nWjrfokJs8i",
  "key32": "2PhkqFpCrUdQwDTwkftLsbqLXVSwfW8TVHXDEuQj4utfYMe1UxN6p3XkCqXMduLHLuNmbs3if87NTTJWMUdgnBak",
  "key33": "afVdueE6pPZSNQfiuYxG1ur6kCBX8UZFpoZA2aMvE9rCj2UexgbHdWFcdcEtsJ5Q89Hd2L46FrcWicu6MumAEHB",
  "key34": "2NELyQQ5qD3opE3o5e4bF9HYsVqEwrSwLbCY9uegtGJBtK5vPNaeECMjwW16ViJRE6VMY4MuhCqyuZ31dFjLy5sY",
  "key35": "63DdyRY3WfWpX7KpTiyzAmhgLomEpFQnzgBzhpW8LfzmpxKLfEi54vym6rTLjLQWzEPqxWuUTNdakpEZspxhhS3q",
  "key36": "4d5ABB94d3Qfq6bgTJEcgXa1eZKsLQz9i8wpajYksbabWxeRsmPGDhgRPQYjZNJAiZVtZZQPc5m7job9pScvD2o4",
  "key37": "21pMgqbgRXxCf3jMFHXMznHMW1seW32tuMHnw3jPs8PBEYVDffVQNBpVCSDm1y9taxzyT1JQT94xvunsSa3kzKRW",
  "key38": "2sB9ATMRrZzk36vimxdkvTA1yMob7FazDbKkcn4WyB7Dr8VWv5nvnZjoDxenTvVryAi9ntZQiu5Gbz4unm1qeNbF",
  "key39": "59EkB6jzrc46hrcGpy2Q5U97KZgiUFgGdg88QrbSezHAXbf8b2rvRnaZKySxfavqoeWJtiw9DBxuL4Pa3PfSGmXJ",
  "key40": "5GeqvU1wck7t3wrEpp4hbrWUTxAMHWnECU31keUxXwKDAyiWETpiQQQKWavvp7zk1DYeT81dRcRKVT38AqaNZ2T3",
  "key41": "3r4avY6XQpKdqbPH4rfefgNAC2KmLWNKvUgjuwuskCYe8T7hQisXpKXvb86tLcMUyCAyrDzDVPuzzeyiMxVbFcUU",
  "key42": "33dHYUfHB3Goc3FfvjcBpQ9LvdVLB6fDEbrfzL66zkxkT4LES1b3xFjeM6ZompvHPeKfTUhbhWpyxSfwFXEoahFj",
  "key43": "2eJ2yA4nCXTSqaebf996uUE9UH7sFW86WR3bSRCcRXxQTVsk86AyTL1gTkiZqNKuPRwUBeRZs97tu7rp2u4onbSp",
  "key44": "3L4rNfaBEt2KSYhKYsW1egRciTAwDvAwjQiXrPaqCS8ruUt93cFubHMuZuwJYdQuVQ9n47DUeMLqiZa6uLXgTaWG",
  "key45": "3axhTbMZESb7bEtQgC8nc6NuE4Kjc3CMheVVmfpQd3prx9L5gnZqoiPdWcZv8yP8YaUpUtRA6yEBYGfyGDKkFrER",
  "key46": "XjeQS8S7xTXpzqCs9pUwRgT62fsLUvh47pV6kjPeZ1fpH2gZF9dbenErJnemGT66YAaXiayNWWvSde6JXG5E3fc"
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
