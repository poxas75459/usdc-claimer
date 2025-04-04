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
    "5zzGgDgysJ5YxdBwft8jk2Cg3YFVFeVA9oz3mDaz89erSiz5TnmKuMvBgkZXq1o2iXjJkbYJT3EBKwWGApgcSkrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wuAxPHcG5Bi5k1j1HABAM7gE6mJqkQqSrPbV8J5jMdSrcfg5yy8o3T127aHuu8UAZWv2RHQhwUDXnpRFm9Uu3NU",
  "key1": "34JFXGVM4qbQxzDgmD9nw6Tz3CUbQ8mVGLahXJxtbuu1djxsda13q5HsXheCMVFQ813J3tEY4XgdbsQVb5Xx4ZZZ",
  "key2": "5zyMQAyZvq3pnyYWQGdPKcP8GrC1LjUc9RA3NFNGuN1K2HTHRSmRZTN7BzCnJmmXx1t8PZ9mcA6BnsSccAoxahSC",
  "key3": "4BPdrHkF1gcCn1CKZ4qbdmUfZxAapjmZb5UwTc9SKCymqTe6s86B7JSnHx1VRYH3fP2FGozsGbr7Yk9Pn1q8e1wW",
  "key4": "hYz6WyWXuRkFZjkstzrut2PJAhJiagnyZrZS3is1NxNu2gfKyZroasq7QnudQaPwKfjEmGgJDgYL9ADvF6t2upj",
  "key5": "3jFvQp5HJoDsoqs8dVnRpy5CAzMvZgVVBnVgG5VdYh1UewRcm6kuPBqjJdEA2WpJ3ukyAA8LmS5HRhMnVhPi3dCP",
  "key6": "4ZtJF2UqHAVDYktbmDvgdHXtX5e3tjkAUeBnw9mQNRZ2drqxeE4JeL9SeVwg2G4RxJUwwEGr8TgZvBJE3F1QKAk6",
  "key7": "Y4RttB5eunG23ZtYynoYdNJtaNJ5EybUUiWwKHfdKLw3Wcx4FQX64ZBym7cN2AizHaUS3gicZ2zXiG4qipMBu1J",
  "key8": "4U3F6S56YhLDnJYNRVjRQ7mHstmDqUS2W5KWTYaedXz1MC1ryrgzB6KkYazjSQMdMgp38R7ryemmLtwt6FPRMSV2",
  "key9": "526hNDwq5giuKEUh2yKCYPCBUtX5p6SRrty2PDvkF1qbWampsGZyVVimTwRcdYXscDRSdXT4gx8hTABiEkYrVefh",
  "key10": "59U2tDeTiUNhfhRSL7ZXQCy86VHLQmLdxkt4wATFNV1ZgVdMwDoQg4QKonVk89KEe8YsyV6yFWZ53E5FyXdVeWSm",
  "key11": "64hxTxtzTGPVRspisNm6iBzrRHw1wd6kb7JEqwdVwJWwKsJ5oEE9mxpXuj4adtVcWMBJZp4Kkd6xFVHk6kaWjhMd",
  "key12": "5HVfb4z1E5GxHarKUXUmmSw1UdWviKUkJU98JLwuQzjo7Vie41Vwm4T6CUGFncA4cHiYW5HDgJFjYJK1EVE7z9PW",
  "key13": "mPqgBbXgPAtx1eZp6rRjXPWW4gQxKagDzG739EXHa25qk2ZdXY2QrHQMgEPSXNiFxauXJqYd1ScW1i2sq4GfrYm",
  "key14": "583jQDZpsqduPLxyvVBu5mszh5S6nNTXZRqDQJfmfqJjyMXkXoW4vvCDUdYtAKRHSzYwvbXZbTJcN2PUf7AT9zaa",
  "key15": "yVUzND93anvwTmsWDRvNyF4915P9tZ885qGanxv6F2D6qah3rE7YWw98cGvAXnWzfH9U66MNsmPGbaSd92JvAMC",
  "key16": "66dUtmjqAgbKeXW9aiVCZPrTviwA1wnzyvQbWS393CnYX4hEhgarYwW4sqrWqVJhCgNr3fkT7XiSTztfZdLRs7KA",
  "key17": "3zKYNHyVdvUE1VxDFxsC1fCwniWRqjUPbszZAPCDSLiobbuNZeufUNepgv43o71fhp4FprCYEbyRrH5WJGcmVoT7",
  "key18": "3CoArf9rp1V4FUb8N39jN3YHAKuXBFj8fwB9aUCVa4RWnG62tbyhAtnQFAqiLHHEaW61PKfiBjk8JXPWZk8WgXRB",
  "key19": "4YSfmAJyjCmMAebSSLqeXZUnL1WTgN8wfWKrd61VrzC8ST1HcqrYJdz7zZ2yeamPvF2bUvb7Veefx4fPS4uwXQqR",
  "key20": "akTB3b2KbTqd9gwfdQjE3Tw5JKaTH5TvAsitVhiaRvy1zMhAfZgB6Y5QR9R43eawEkQumHBHBTnrcvsC3XDSPes",
  "key21": "4FqisNWKQ57doBdgs8CDc83a1GPVntyRszYR4t17bohkHWd8boR3QJGHNug91Dd3w2uhAWxwikNtNsT6Yga6ktNi",
  "key22": "64KCPRHqu5KFavVhWcZQYxqNQGkAGNg64XAbeoB17NNHD4uZ4CMQz8nCSH4mCPPoivha3AjBecei4nNVjDcmavKY",
  "key23": "KKVgKmLxPqTBDeLtANp3RfLRw4D4LV5NaM7yYa56Yk72NwAb2uqs8soZrV9ErTA3GPq8k8pQo2q6ssEiE4Bsv2L",
  "key24": "3wmh2r3mzQQwkZQUS3ky56UeZkgCZc5powTNQxudcSSv9CmeHPdJUkSe12KJz4GLHh95jN5rUYJ9TeaQ8QUUh6aE",
  "key25": "3nVjhqhKs4zN3a7LmjmZYmPyvfQunJoCgc1XEJhgCpFn3Eoga6RxXvsyXcWCRJyrQD2AMrfg7GGJv5HtwPDb1JmL",
  "key26": "CBy7dtDju7EeeMwBEoPTTCzAPZKMYJB9Vu4nvBXE9VpikKXK4BAyETwmkzdMyLw5a1QrcwnAhrHYDz7MxibSB5d",
  "key27": "5etcHe6XyoAKcWE8CDh1Bt2r1YpUbwyPn4AhF7yX7PZFL8tQPzvMAbA2pZPAe9eANqri21gzsKi9wbDsxWhf2HDe",
  "key28": "2q6WuxzY3nHv8crs8rYSqZi9m6rpQUy5QYF25gH4HiZ46AtymZAQ8JfBduGMFQaspECL48WXCDUhYwQTMesjZNaZ",
  "key29": "e2eu24a4hgyCCffMgLyZXfgcXtuhCgVCH9JXSkn9byszgXpVrEzVNtCGQTRJbqbPma1UchngfJ3pqNUGAYHy6fN",
  "key30": "2HxsBiYYyWJ6izMs45JRKDeP2ZPy5VztMcbUkJmp78bWmwR5NbT5PiDdTFyKPPRLKiTfAvKY6KqUimwLBsYrvS7q",
  "key31": "5i4cDzuSuVnAKv45ZEcwFbKyHYdqqzzBbVy7cSw2cFp4R2J3A4wmdwpWPwsgUSMxLUu5YvzpiC3ZuybqzBMRyUY4",
  "key32": "4aeAA1nMKn913WnHDJYMYRR22uHQHnTvLvpTm5uMXkxCHPieFr3ykTfMCzJdBy4RLQ3zVHQDk8Y13u9A3Ff6u7C2",
  "key33": "jeZBraRVhM4mPyb3XRkhuNrVBqez9nTNCXrGDRqJzdueq3b62xEs3eFGW732LRjYbp1ftJErX65UD4vGREzodRp",
  "key34": "3PGXHNxCGiJjLdN7otfkc55AvjdDLgEXtfFBiYP6BURDtgaWU7ynNwh8utqrXgNimNUjrwCsHg2i26zujEs5gt9b",
  "key35": "4r2yX92EgtDMzNotKih3qtD7Tgf3UTcVCZ5VS88nLpMkSB9r3N2bmw4DvN9rnTiR5tQew5Po5nJ2XKqWgN1FKr3p",
  "key36": "4zakvGHfT6id9fs9WHA9VdpUrZRF5vDe68dktHn8Aa8tCAZjg9Vg1a7VgbKuG6Dj1zzPLU2QAy4tXDzCiQkTqh6Z",
  "key37": "4rcCDKqduDFqjywi5J1cN8otDp2AREn5ZaBSFsRmPDREaHatB8Yc3zjzfXBrfeRdKNdaM4bxMbxbs7sJGhEyx4C8",
  "key38": "3boRpg5a2J59Js4xm2p4yWoQMrpt2Gg3pkCnTBLorJCej7iaSXHkcWEG4DPjx9HgdPR1Qd1QkpCzo3c4W1tsuFXr",
  "key39": "2LL47Tsk8CAFCt7p6fTJ91ks5fhZaz4yooBKQeDEWStFy1A2Vvv9bVXNSt4BSS9FaX1hZHqKNP17vVraiZsJv3tX",
  "key40": "AV9LvwWkfAy8wXhFPSgBGXMBMR4yQupNSoqKuvDKMRK48UuASVWXUJN54sGo4WnKHiCHfoMApAAoErmCxBcD9kR",
  "key41": "3dR2DtQHc98GNF22yKzcX7hcVCaXA75yhk1H3HDQaxiSq8smQJfWSVPhm61tio62SFDhvp87RnvtZF4yRfLRofEk",
  "key42": "6r16YtwVtqnaB88z1NsuV4qAkLLgsnm6aUz1kt25HgJP1LG2pZRs63P7gAF3DuW3suLpQMamm7sHpzQP9tYW87a",
  "key43": "4pMNGvaKXHJjSBJqaueGSbaWMuGAowAwSy7hiyL9vAMGsyCbCs5VmN7MbrTZamJf4hz8uXj94KRd167hTJ6ZiM68",
  "key44": "2wfS5k2BBXfuiXD2ZLtknSVzz2iCH9zv17eKuBVvjvYTZ4iop27WeoxHd6RUYQncPQ2HToybHmCoBgxNqgCGSoKc",
  "key45": "6moA4cCXvBN7LXvwU9uwHhwJN9UhMgckVcmmxtZfSXXdrckcxdr6cSBoMD1VAZkpn2yKiCU9UXXz4p3agZfjP7e",
  "key46": "3QCAvtzqgx9JTZgdbvFfhNhBpEmF3QSf6XNCQnD82oSRdu8iof6s87ddKSAfFai3AHCXrZbGn36QxoDxLFtFC6Xj",
  "key47": "47zxcAH8VxpfqZchJcNzz2BngTrmA4czqXQS6neoCmSg4vAKsyf9ZbTG6McdMUqzwX2tfr422QgNLVnTcKZfwKFP"
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
