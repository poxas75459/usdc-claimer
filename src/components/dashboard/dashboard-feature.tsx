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
    "tiaZAauuPbHuXiVCBdqP83GM414SPpFJADp4qvVrrso9kWiH53oxLr7RUrmFoTD7ChMPCPGYTBVzA2RBpB44WmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DHJERKUmVkJyDBaSngiXngppGA5pbWM5epcX4yJ5p9u3Jf2WGZoMqLJy3CZLKkwBGeKnNJFKFmRQB3BJuuMQo8V",
  "key1": "M27f1HxU1f5WVMkmocyYERbfvXdE6WzSUqnpjfvrxMuZYRKK1NQ5CPvwb8siRrEZ4kBeRSUijJ2CXBMgmWqgR1T",
  "key2": "64CHEYJUAFPdZwiT8yBa8kDv8BNg18mwSdKvvNid8GwiCC75ex1ycNGDosJSCeFm8GpWs18tsgRsPvDLu9CbWbtt",
  "key3": "4eJesoxeEtDtwgeJyvdUh7YC4PHmXSo5nuHEwFHLmAuXVnUCkTAFGtotNZ8hkLjE3icgis3VzgAgYe6LpoVgNGrF",
  "key4": "4kK6Fy3sFjncWhuNBJuRCpZg95SimrT22QDkPboCPbihmuBvRRT3XGqz34YLHyiaz9bJFZizPHreed5p4PMK5L7a",
  "key5": "4ZVyGYiNNWNbPxnv7JskPKbow5AkTpHthXNU5fXcx6cquunFfSpUKvYjbzpz132meKSFaW14vW62mGcXnQnvgpZw",
  "key6": "626W4awwSSBtZJPTKUH1AvdUJ74cWKyTFYUfFA8UzYyNUfrBUyWw55Qfky1KsBv6Td7FU3gxZXQEcZ6QKTJuSndB",
  "key7": "5SbA79Bc5BEE732qomhjrcDQLc1uKyThh6xG1fkae4XbnoVZxqxG73tcYPyk9qStw77AKavfe8M5DoiwpR3hmnd6",
  "key8": "2SiDkaZkvwHdxAg4PJj1awE28qBghhYYVh4pG2hdfkyC2bY4J5BtbVYT2BcZpWdXdynuYLs9uqorcJTjhQMAKY6A",
  "key9": "5oPBqd9PhXrj1CzVd8jxf5BXXHjyz22bKhFSJR2H4AiEax6CCwJCVxJAF4uJehyxrH9haPjfo8jb4r5fgBPwrzvR",
  "key10": "Ncrdo9DPs4Wc8VA7Ekpr6f6nqXSkPXa8yBUcPrL7CsPDZdxKsreGxxCtcAJMD87LdMLDznRGSubU1TG1kRHy8uU",
  "key11": "3SeFAkXDgqS7W3CJwRgSUzSVjKh9sykbBz6oCnHimvoM9cKmepnoTzg858b5neycGC7e14Wiz41s7Bhxzf2S1x63",
  "key12": "4rjiBrt8PvZ12Fj19CrZYDrAYfjzkxrDAuzymC69jvfjFYZ4Mu8XJ2PqeHVYmaTwrU1f9o3r7tWzp7JKV9WxgRqd",
  "key13": "2s14Av3xCccyj5Q9Wk5e3xZowyjJJSus7WvgqgiwuZy4JmskDDmAPyEv7JEsJ9U4L8NuQAoD5dPjU7bhy5UnyvVE",
  "key14": "6h8VGMGEG2hyVSnQpDxLquQWovrUWtBtDcTMQu5zyA8nRMtSmzRnHEEacJQfqb6VJMckg1WW5iHqZXhXVuRv8qB",
  "key15": "xhyZeMD8GGS2bMDbCdx5zJE9eT3t6CojEra13gZu1SA7m5JUTDAALFZFGN396SVy8KkKL7YMYYa2PedimGpos8X",
  "key16": "2HibmVAZpswpX5sgZY1vDSUJ78vxYQmbLLCmAgkRhFutGctAr2rzjbHtayjVbnRcxN6J3pDuuNHUDsxEQu6CNPHH",
  "key17": "4RAEvQ7ssFyeBR5wwka2ro99Rj9Bw6jWdErap91TWpCuQTTHP7zbd7DUhgmJHaB3C9twXTeKChukYppPqMQHrfxw",
  "key18": "3mhzQkw4rfGHAhyBMqUHnXhTnJ1mMxaYSyfer7EEmHWVpiE72CdQCj3PRD1McVZKmV7KcxS3cZy9YGNCe3WqQher",
  "key19": "27A6zMBHpnyAW9bfzG61WdogBCrP9hEVHnBjwAcaJgBMtnMgBdZom8d8FyjghBmsQnFxuKaZjz55EEhgUe55CEkm",
  "key20": "3Yi6uGpoVWZsgCCcH2XmFQxEVafbdHtqRRwk1p9rFvDZonh6Q2CTgF3zTFq2LTE8qgnCKX7gVoCjbnPfmctjBZch",
  "key21": "5hBysQmv3CFyUYPga5UxqHEAci6m4mhvJ9pcKQwyUCZkLPdWXAuSoSfgJRDVcYxwpBH1mUfEqrK92DKhVY7kiiJL",
  "key22": "2xGh99tEqVz3pLb2qJgPKfnknKAL8iGWQqYugx2fcBCxooUwupHB3w49aPn7qNvBFayNXVToWprhXqkckaNMmYoR",
  "key23": "4U44cWt133azGvGs1tNbcsXxMG8ZaEtssNJkWjJVK4q9TF1Ygy8RpHmP5882j2Dv1FTQrWbTtX9t6EfApv4KpVb9",
  "key24": "4Cqb7MBk346aCk3vABAXLycNkJgsEWxzDGbSH1oXG5JivedrGrFTR9iqHrxy9teJbm6nUzLVAitUkJMPgaMLdzMt",
  "key25": "474G489Q2cSbBqxiN6uN1PwRLKEju8LKQzqJpELawJF8khpSw1hauRj9Q1vVQXHCfQ1d3X1bfQX6Jrgw3d5joNw6",
  "key26": "5zsTbmqmNBUTYt2FVoKUABefLk83BeyLYPpjnydndGXzkmrUSz7N3nbjjYZXK8ESTfWKKNyZkRrzE4GJugrw2AYt",
  "key27": "4dVr7Qa4qczDL9xTjBtxiSkPMqjQMUDEevqYonL7fDon2bLYH5bzaou9iBTHZ2KXXDEgQE1k8W959fsurT6X7fuD",
  "key28": "45d3MdNZrRSgrxgiqXSRSfPapS7ycccwuVCZYAVMjyJZ3omMdP3xYeyMW3r2AAdQ495m6vFuwpHEnJ7NzwN14CQn",
  "key29": "3LaNyJR54bJSo347JjEDX2MsiwhiLW99y4hiGTuaBVF7dKJMeK8Zy6BoQVfQ1LYJ3nDNw94iD85MSAb1AMFZjRE4",
  "key30": "2mB6dPpw7uxQRzCoTJK1PvJSW1MGYr4JEsenVosu46p81o3CiCKutukrrV6vbbXKkRKAjFL4gnVZvRnZhe5V4WkA",
  "key31": "qdub8wJKDeBoE4YSNEeJPjCLGVAgUwt9egJiT4yhvotX4PR7NjHzFHUfuU8PJ1arhMpcZQTJBUTZqyiQ3mGZHgj",
  "key32": "3os8Zi45eWtnx82n4p5s2ZoM4rBA36HU4rYTuvVFC54xyjx3Bszy8LQ4bNfmeAexLsijJ9un3zFbGBaxGktopSc7",
  "key33": "2DHVBGf2H611cDAPgEch3mPEh2UnUMuANqn8ShjYRZvsxM51qAJ1KD4n4nJoiMzUp5viiZGrzmXwAk9Yc6A198Xd",
  "key34": "39BWLCnH8aqz3o4dY3C3EDJrGJ8KmS1yoWSADT185W2ekMK2upxrgV4rXd3NJshS3HsdHAe1xFBTBxLMGRQqbQPG",
  "key35": "4MYT9cri6tbCvcKwX2sF3qd5tQQxSE7KHhTqqaYeMLQYzN9qEXdT3KCZi5axpqZKi1zPHfWDrEX6z6G61KZxmoBH",
  "key36": "m5dGCyDyqBa4UikPthfotCxeY8HD77ZLvdu2trCdHNgtCfnPUdPVSyMGEFmgQ7dwMCifpdHYosB4WVNb1dVmjCD",
  "key37": "2JScMn2jVDCGogeGYRXeALW67426xxJ9X9yAcmXa89QoknhhHbwhLDho5C5CqY56ufJEa5Qa9rDWMHmEKLJiLBcf",
  "key38": "5FR4v2EMsbQbVPLNxAUmAxRd9uJv5icResYZTcW8LRAoMbrNVRv7SLwVipjyEMFNz9HtmVugnwixiMgbU1TaTnWG",
  "key39": "4q6o4rU76qcnbRiqoekGAdhHXPnM73VuC4E2J3W5FrnP2x9FUiAueLqn5gcQRhfeiwAGuPASNRcxPaQJUJiFocov",
  "key40": "3LZzUXB1XGz4ewaVibVPRENNEUqFGi7Zzh3gisA4poaCpkvhWXMGS4EV4U3UvcH3YrLNCqw46XNmUUrzwXEgcXkj",
  "key41": "2LFKX63G3UCKwWRgMezZZ5grqhC3HCctQsVyoTVPfp8kSMq6RGyBtoJHVsCwkwZE4ef14jRhHPMpGfa5B3XngdZs",
  "key42": "4v8Vc8SijErJMh5m5nFMKKArnb5EhkWtEEAi8z61g8NPnPsaKMcXNPt7rhh2LauYHh4YX4EKS4sQodttZ6XzEtjV",
  "key43": "3NrL24KFKmBeepTQsvFNn7YdZ1jMkw3tD6WtxMw1NSnWiJQyWWGsxD5vqy1MzcQ7zUMnSn2VsE5M1NTxDMX6qqXA",
  "key44": "5wnNnc5ZwenMBHfimr9hwqLJv3cg8q7kXjLoV5JyuDjdduMXL1EnJJS64sLh7sxYSP1DVGcoENDWuPMfxyMdG3X5",
  "key45": "2SL5MXRKJ2kghS2PY1qgqgD1sNXCf8UCm12jxwL8H1jUYPW2Vjbs3hCtgUbtEmJPsyArUsGNESrb5BzENcueuV2c",
  "key46": "5J44yGDTi3UKfcoHHyPX5oXUayfpgrrjkDVgKnTEfuhEkfUD44tx1PoULQz2Mj8ZsK9GNaHhj2Dquc1w5FNH18cC",
  "key47": "2D5B9evNAvnCsdaJRTQrDsLDhUjgJa4fsRzfZyQEiFDKedUQpAZAKsomrMiKNyLSzMvCYfZfX7MgJY3QFLmqzBA9"
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
