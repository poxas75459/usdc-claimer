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
    "5CYXD2n9v4u9nLV9dojVtehNnX8nDFn4rYAhpzLLEGP4z1JSR6oxL2TfsCSTTqKvN6T2r9DJUKS2L2eUVab3Kyvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uGRVjwqkZYsEi6TW1iX7C3PpNAcHdopUe6Xqxmya28XwJ4dQhwYWKFdyQSboBjnSoJvFtg5zcXtNQvKA8gA813A",
  "key1": "4zCqQyZG1sFMhKgfZX1mW1Hjhso8oW99KTRTb7ygzw5UV3SL7pL6aBVPSKevybYurtVEDyxNMnrRJZXorLcqS5U4",
  "key2": "29ty9hAxHRXRC8mY8ohUg7keTS7Ycww7s7uH3AsUkhJjMHriiYr8WwWxhfitd9wCkpSk5AcuobmBoM5zdTWSn5tc",
  "key3": "5m4rBE2yYfHWJh9143CKj1FxGc9avT1hpZKNMw1JKA4EdeMYDP4mzNKB5wmEvf94TRH2yWn9yucKX3CcuCL3n5YZ",
  "key4": "2b4xjJZ1ZLKEywgjBEXGoxYBDCPTuRenVjzCKWgPHJyExMKxzcByNobo4aotMSsWc7xdxkgFA7f6zo9ikSWGJGnJ",
  "key5": "2tmzGuWd1Mqkc8SePuKTHmWKZkB6v86NSjT7TGSNgaHdHEG48PDohpWV5U96cgvnrWrZkaZpgfstBxQpitr84MLr",
  "key6": "55JtNisK23bebXtYqhXNSShSzDEqpbx8Fk8GHP4omqpTjiaxac62XpYHh3JfBiSMnnqSiJ7P45PitmMPHrwxPFSS",
  "key7": "3s8gCZz8tfSyRyoWxxFMZ9nGE7uQsgViBTvVHR68QPbdcrSw8jgynib3rM2atsafvyqoofBXX9K1sHaZtGnoRiPv",
  "key8": "5eNdhd32ad1r59idY7vpGg1H421BeTktk1acH6jdGiAzsHyFbRySnynnstyAWQVvFX93kVg3bc2oiZNU8iKPW3ju",
  "key9": "4E1ovWdTzM857N5HZAb4thKoU83swRwHXjr9Ff4TmoKGrgFhbPozXRx2BBHu6ifEgDZkdbartbLf1cGsVYBxZJT4",
  "key10": "31AJ4PJ4Sgiy16APZz6maE5QjEX21Pu2tDUzqq3f5E3Sfjtztm4YyMjfUMJNSZWuV2fhXwni2rhMyt19jmC8x9JZ",
  "key11": "2B5pjYUj2tQkJJr5D4h4C79Earae4zZtdsmkQmJ9bH6vAbXBmyMLcWgkJMNBwkFJY4hf3Cdp9pjEfEa8BwZidurP",
  "key12": "rNoHQpk1aRR1aH7U37ehNoiDXdDVhzHwHka7P3m2avUhUJ32zJnbjEtgGTynqC5TDWAK9YFni9aAcBgFoHczPjT",
  "key13": "28SETVwm9ZfGGKLK3zsu7FvGCKiUNxdGBij6rvtG4TjAvQSS6PfPvbGY8DgTd9TG9xQF6AV2eh8kPQWNPxZGS59Q",
  "key14": "iwW87z312PmdkVdJJe9P2HHjDqdxfRU9kLnZpRsMDGhJanPem8LwYyi39ao2VGdh6AfzQwpVS65xzoJguDpc59X",
  "key15": "2wDgY4x6HxNvxuWrxQXGdEzTWK7ASAv64b9ebJBnBvRWPgRKiYyyFVpKK4WqXiM3yfB2FE5XJDmMskH2PfEEQcez",
  "key16": "4o7STtCzQd1ZzRwV2Frpo3d9yxb7qTNJ2hSZ7U41muivSk29mPLhetJEw9XSRJaP5k77MvhJsdEi6f8FLXCK9D41",
  "key17": "5sLMDZzRGf7pbWPRQZExbsMwvMSfLNW63ichrZbjU6Jp7HhUt1afDU9MwP1sKBCYzmJK2y52s1JGPVp1Zd16MexC",
  "key18": "3vUM2D42KJustzGm2Zhcui8d6QaPPqAt2yzJn8WgezTdgpkPY51aJKEUYg58PKEdJQwk3s84sLu43Xkov6LogbD3",
  "key19": "hdq9j6k62X2TCkwC13mTepPdF9JiDErzigMCaqEs3A3FF18kkf6Y994hvHJQc6gin4c8vtwhVmWgM9A9WaZQqyC",
  "key20": "3haABFRhk8n5SsyJwgjpEcqPNzrAjrsjfbFXbHfBk9QprrPQTgcStEsusVGZmF6pADQPiDmarYDY9XKvDbex11fN",
  "key21": "2QJpPDbMoBeLJFLo3DrQ2M9enjCcnMPyZEfS8ggKEBuWozX41DvAp2vQ7qb7VxHfMCM7iTaV64gKWUr9x4WpjXJg",
  "key22": "33qD38G48wrEK2EpGWcWNCM8ebSawmfsivrAGid8n1uC2DEictjjFS38Jf3tQrZzinAu91fLNGfMgGxx5jkzQ4FD",
  "key23": "3uVRvSsSLRNa14KNTPCbx89RfyXHReE5NuaKYi9FfG2JJYa7TmJm9MxzxuAdcFMcdWz4R6MAkAUzPNe5T3sDZ7Kw",
  "key24": "2ApXoWz3xqCHrsUQzkdRhEx3Ks8ZvvQQGnbB3hDSCanudms2p5BGy28MmC8FPVtHPRkgxnziVmaWtN8Cmmp4D84D",
  "key25": "4ztfNGndjRizumVU2GGSsig8xtauJbcxo6XR6dkMYibGhw9MNpUepjqMFej5zAWADEoMtciC3LRcEyY2hkNLBRxd",
  "key26": "5SUET1Aa89JSD12ZE6ud3ypKjpYPT6yosm7hGHkeQk8DqLRhxE1xtRuQDC7UZZ81B9XE1yM5D9PzcsE9cFcmCKhW",
  "key27": "5X8xYS3h5S7UDv9Nz9sG1dU7KjvrSKcEge91hL3RBRvKzeaSY1bA6xjX9o691a2D5VEfgZKqNqHRrhMmev83otqU",
  "key28": "5scVJmdQzhP7npLZq5oVsnKFrawJWVPEgWH1YbEHQEGtGZ19KJ3NJdwFgfqpjHKzPC9WnHHeKEHNTzekoaobDzVJ",
  "key29": "2VbGA6aqGsWzyViddsAHzM2nXPfcY2Y7bay7YvrgtmFEoCv2TxYckXUZQ4LNRVQgD6W9Ahdndn4CPkZ9gDg79ha6",
  "key30": "2ZBVgXgsDoPVSToJAnDqXAyRv2YAKmJxt12Wvpyma6w2bodbHjboFrP37Kuuudku85wZnamCffFmz3efyua4uXyX",
  "key31": "3832gshVmK1YoPhW6dPJzeft7qYK8o81HuNGveNSnZXdxpzaP7U3rM93hbpdodxnLwbK7Wsrid8EGPwLrLRNJCiB",
  "key32": "5cruHJPTS7PEnAC4KRN3QZPVojv8Bu5THodn7921ZvSjpfvYWeNUjy4iNeSM3vnNPSQSFLhLdPxwYRWm1bSwN7cm",
  "key33": "341vMdt4y78cCRgeHqy4vK5PBcvxT7uxksjqUBoSiXHJBzxhTN92kScdQA63oRZpWxgk7T1CWLFwwLESSPmJQ1MT",
  "key34": "28uN3dbCgJbgNTys31DWWDkENMmK2bVGS5ENEsoVhoGsw7t7ZtgucFTZUZhFDDApPyCY9QY5J9xvYnN1mBBXh5Po",
  "key35": "fqnGmQdkB1KGndi3DSAHSJHhhrBhXZQmriphot7ZL11qQyfC8eTRkdwirNEfoDFcY1GZNTExtszjsZxo3ZNQeuX",
  "key36": "2SjCATgFxAcvLAibxjRU9hgm8P3LAH2Y3kdWpE9szrbJLseELVpCgc3WN4h8eZWJozZcVeaZm4jPebAkGt89pVxh",
  "key37": "2wqaiCZThox3vxP6UPce6Grvxmseg4eWhgxMoGf8rAke5SoCa2C3ofdBSGixvygUX1axhFbR84eAT8mLdAj5nm97"
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
