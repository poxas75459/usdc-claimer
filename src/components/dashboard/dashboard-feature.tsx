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
    "Z996vCDZ9YGu9DBXRqa6862mbFwrYY7GKJ6Xm7HxxBv8Z9wRvcCxhC8ipbXJ96SsCSRGPaT1xYUtWZZFVmcxD4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQgmAJsHeA91c43miaqYueDoHNy59kwDtpx78zXFsZDEyBKXdneHaE7fsfsY7kVLRWvqztdX5Za2gP2iiEvrVYL",
  "key1": "5VmSp8ny9qNjimWZyV2GUoE2tsX6cbPYVXuYf5EkczJ4cjhbZZoewDkf7rSkfn41xjbxLamFLRhWkcuj9yVjyR6t",
  "key2": "5s6MoaVuU7wXFAf8todXhyHowYN28ndmzhBy6cV4u1vAoBv8FQuo7M6jnTQ3AnnEUq9awW7KvoQGiVd7v64UgzZQ",
  "key3": "4QeBzTxeWNJHpzTPDydaXp2PpTEFsaDrgi8s4s7hnqPzXMBPdDJyEdNexcr71QgT6EbMXNnChPQbjnJrgZuq3TD4",
  "key4": "3Yspv89vEziSKounpLYnZZKmoDhVUY8yv3U3T4EKj3cbEzztDvVu4BAbU5ZnFHr7bRLNxRzuM2v8SVgDaX5AhJMf",
  "key5": "53uzLwbbUMz74czdwFfVd7PRLqxjHmU6zHbJYAN6GYo43K68mQHSzPnqir7uJ5HobnRe568XtNk1nkk8ipLwjQq4",
  "key6": "3aaSAt9aAF4wPpyXELSJhS7yC4KHTCkV9cdAizQiaEAQg6c1azVyo7BF6wv1bJJNKVe4XxzYZT1bUZZKUF1NXBuR",
  "key7": "2TWgHds24J435gfhd6xw3mAyR2npGkvmf4n572Czr4vg4Xf5E7JDTqS55uttxkoqLFH2DqQNxoL6NBePDtnPgETb",
  "key8": "2yEzLRYK55whc7Lv3xNcxfooSrrwp4HvxUZaKwCKzdgKt8hNFjywTCLk8sBmrH5267DLPXp39NNbuSNitdryLJiQ",
  "key9": "m8jWfzuYpS29wKWcAKEUFDzmHgKDBPerJho8fCuQamStnN6zgHnkz9Vk7VqncAvHktcE4jxhZEFL3wUzKbqYAmS",
  "key10": "634ijEyyxzCnusyCMHe7tCTEDJXhmqeob5t5dzw5LGodPDxA3CHXbxT96ye2T2VGW9C3FeFfxF27dZUmRGGH6K4J",
  "key11": "3dvCHZFAQA8vhEme3sscV3Gq6GYgC4HPN9Ur4KH1iXRYt3W4bM2i7qdTAFbQKVx2tE5AMXUjXcvNQhTyK6RgE1M6",
  "key12": "vGVAWri1GNGw7d9FLayxcZ3QmDboSauGE3ZqE9hYzRLWZVpd9jeVb9tnNJzhQKVd9ba3kRmnZcb39NgXtNbNho3",
  "key13": "49RBYpohUDhVvCYtaRxxzpEu4ePRWhGadRiqoaFxrNrxXdVB8NE3En7RKNsH5rats3frTU7s8LxfbnE1g3FwFTWo",
  "key14": "3Kc8A7dYnX5i6a5X8nLCKSSQ3EjPwibtK4Lkbf1VvSPaVoJivmJXhhjsfSo34qLF4xAJxJQGH8sGURzJib4xYmrL",
  "key15": "X9hPSeCj5kfZ9XSxtrM8ruCcV9Pp3b2HMdNsow1NaEgZP3iLpgB9JktbFZoQARANKS9CtavKWg3WK9aNevEN6dL",
  "key16": "56eeDEu86vcGLB9i9AdkCY8LWfmEPZeFwNzcAnxqV2VWMEeJkxtm7NyDwFnLMWr4vxW9KxVK1wjhU3bT9BTLnbEL",
  "key17": "4aqJkBTt4VSQHdJ2VUYhbWbjD4YhrD6z3xidABqtoo5A77CKwkgzbFgzwwFEuGqrxRiuMvPeJdrbzEEhevqsRsvN",
  "key18": "3UpA1QKUNbcrb1Zaw7uQb94AjQUyy6ULCyMp2y9xEQnxBW68BF4ot6AfjCC1oAXQnoPNUjm3j9ZQ2xw6Rbb831EV",
  "key19": "627U8szRqAF6z22v5AoH55HgtTv3ftf4somHQMAtMfFzQ4Uuto2hezjn71PFDh7LT6b9oEFTxvqeqjM9xt7WVRcW",
  "key20": "1zA52DBheuwvmjC23DFfyKwRK7E1KowM1FFKLvefB2ywhAEdcHEMnC8inGreEyDLsFRh1Y8QSmK6M3SsZntSGCE",
  "key21": "5kk1bfWtMVgFDSwFR89kXFKC23QMc6mYqmpaczDMZ9yHBLDgnCR1pLiybc3sAHX9ms9qsr4DME2qMBS8htnjPMEn",
  "key22": "3oywxwzUvYTayN9yqcWX41HXo89kttFZHVricr9mMPdmBmjPs8bkbEKpif3AuaNqAE4C7nSwMcckLgWjKoZF2ejs",
  "key23": "4ibyRbR5stsf4JzpDMrSsQA3TvbrTHrPDckYwQGQqZKzNS1ANDp2NxMHX2oGUvjMYTpBr7bVPHsDFMy4m6HMfcUj",
  "key24": "2iZMTZb2Qbiepvp8U8f59GDDDeTfKrngRbq6eUnL2xvmzH8UDK4Ya6k3tzboWTudJKp4VT2DYKuirRGtojFz3MXh",
  "key25": "QTChBGPq33n8Gvypt5mnraFaC2fyTvzGgmCxRSD961VGM58inw3DQkpy37zspHxqVjbxjjk9s1RroYzLHWsAYwu",
  "key26": "4f5rYm9Li4FVwYUD4GAa4Fw42L6VYM3WTGbf85P1depZ2FSyazbEc9k5eN3BcrX4EfypLMQTHzwdkaYNVKe34L3g",
  "key27": "4MsnXG2zvNgZycRBbgDwFJuki2znxvTSMw6JYmAEodhRusUm1cg1LsKeKyWXWV9oP4ryPYKN88EZNmvMkYoWpvNb",
  "key28": "RKWViAbgUkid9UsRpdJoJqnWYEcvnKdPHxGKBckXseqTkrHZqfUxwtBUZCutjv1c7rkLGRAuFrYE3pj6kaTqswx",
  "key29": "4wMrz7yZw8w1xzpStwWrnXEqeR5Mw1Fftcy3jXNMucupsV9EsV4odTVJNmjaWZrv1L6LBVgd46pQ7JmKD1mVx87C",
  "key30": "5tAgPcEDRdh4142p4iTkKBGMrcGDFRbGHpbDZ5YEvzqq5MkzTCMUspH6b6zPeBUv63pzEtZzmCWAbK8nTCQjisZd",
  "key31": "2XWqtcKkK6rh87zsJ1NjZhGcZfp5FxmVA3VxvdYG1PdxTWpXfYyXhqJVYKGPCmJ1Ze5BueNnejV6UzWxrfhQJkXB",
  "key32": "49Fo1HySXNd9LXFLqFinPs8rHckMGQJr8EhTTsiocuhfYkaLojAQ6GHfi7itRiRywQeC2fY7i3JtfDYFKFKRB8Zx",
  "key33": "2FaRX82C5rGXztrS45EmSKS33sFew7jdXqHjXWwDr71gB5vmqJEFW7T5twS3eBbsCHjEXqZAJLvFWFUtz9DMjJvw",
  "key34": "4eYpzFoUuejs8zLWBaiBgHTRkG3tSZdDUKpDnLrM6gJzWWBQEVwCnfX3NYQqiKb2fs2ZfkTUEaUZBw4x7tor6by3",
  "key35": "3PyE2vLyNHk5h3tnmEj8C9YB1nX5hZM3efkdJojLwVE1KPk1Q6b4cE9qJVcPzCudYcQEuZRc9wpeBk8qVwDi8yqP",
  "key36": "MuWyrKRZaGkUi6AqaFDxHAQpyBK935QbXkvTm1bnHZbUtC1iseH6axPDQMK61qZYTAwtMCT5NtJjmCyNPdnFPdm",
  "key37": "51QvD5inDwCqoqDLEjnBLHxdTGjvjSgpuQ7zZkEfAoYDGcMqtc7sodMpjaddHD2uV2EPGSwTZ9HVDnbAG6xdLLvP",
  "key38": "3zdJA8Rk99DbSohZaRZrJ7FLxNd9fnTsygUqH8dAdnuFcPWyAPJjZfj6JV5SJWFKf2abFmnDZJC5qQ5ge9o1kpMZ",
  "key39": "27qwJtFHcvGbDTK1yJBXbYM69EsdyESD51o5sGjF1LnjgjzEyQZFqfkj5MpHBBArM7qQ8VR9euPqc5JXkPvHTy5v",
  "key40": "43mNzuLMCGcNTCd696pyfMfFbMzSh1CBTjmzn11VaobbiYbVEBbtERyLh3qiPc9DsCzDreuLfkeP6JrqDoZ8N6Zz",
  "key41": "2xxhxTEu2xBbnJjupmiTrfPFmjhJViE7THgrGCE74avfNRHNpqPEgcyreg5tYkpyUzxuRBGJEAz1RCcziFUYdgvT",
  "key42": "AsvvWh6o2n7gL8K8Wi2c38tY7GbUyfBfB8PzRMCBvXWE7xGey6bnEYL1QQZ1FPnKEwrVsWSYTT8E3E6VAa1Ed9F",
  "key43": "2LgZyQdHHTLKEKHC15xgXBt1uEmXcUR13Tv6hyZkcHAXQiHosP5vY5aeLbJfduvxKK3WVjAMkHPnLQgz6k6vsowa"
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
