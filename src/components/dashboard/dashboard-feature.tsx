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
    "qZ3mqkkon54KmDbM4kgQkfAci8NMJf6rC3eJYddiLH9Q6LsLy7KRR3n6gMFBVab3U8be86mTEAHuiYmdgM4t7cE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vLQywtsJcwaFunoSnSGe4NViywtSLfawaLTEssbdex6b2UGCCZadhxTHVAmYnPATceArB7WL9bJBADjyKb9hKXK",
  "key1": "4TX7ciqcResBRcUkYXzCGYvJGSxMBmbqQHweqDeEQuAgcKjSK2iZDcodjDCeMEcwLRmAthpimetnDXrACCse8LWY",
  "key2": "3SVoyUdzAfXLxgtmo2o6PDrBshY6po3nmbxGjjUzqWX5p5K7zeF9CrmAKGm8dZeXgTeThwEsQc1a1hdoAchxp7W3",
  "key3": "2mty9Qyu5QUsZRdLNqhus3YaqAGTz76PRUqqz6RTz1nDQ5jsRaaAhZqP3MXTU4H9PgXWqCKMjddZAr8Hsc7n3Ba7",
  "key4": "2NqVTi8RgQtYjQSKRcfoQfdrXQZKWA1fzuueQLuSYT2Gk9NaKfx41HVpTGmcm5mUjZF7EAQ5Nxq2PXqN7DmLWA9U",
  "key5": "64P4XBpKKqxrwUFmfw9DRGqRqqcJ2xzt6fCePmM1ab2NrFZK2rDJnBcyMQdxB2CDRHMkeKFG4sGc6LuVWu1mz87V",
  "key6": "5vJ45dxRtokVDsJLmMyf7CsNChc8sXnnf5rJ81eHfYKU2rhoVkdnmMNxMBVPjAHZ1iRzbhiKPFadnb9ecWQJRMge",
  "key7": "327HaddyG7aRJvQ9AuVx4oSREuUujkqmUNoREdQ24Cpnq5jZkAnfh6yWELwPhHNtrFjY88yoNGU5r9rzyo8rd44d",
  "key8": "3G3RK3YrKy1Jgs7ViH2uNudHUGc41LMwmeo8Jz2zbKbdh2kPiXhePGjz67PmrgcjH9c1UK9c5S8HUMJJE6FAWxcg",
  "key9": "2UQhMBVEiNRVjRUuH5PyiuKn5WRa95yDEAjev6Uebm1jZPtkfggibcZKpA8UTQRKztVXHhT71wruGq5yMiuzEmBQ",
  "key10": "5M6PZoQE1xXuCXTbH47PhKNTqL2BndS16u9dSgTnDajizW3KAgB5PupCrPnvCk1VtSvRvVtpegcLQ6unuAcbkUhH",
  "key11": "mZbgmGMV6bEXWGLyL3jNm4oZnhUZPGFdBRVRcFJKopR1ai7puHH11d6bfmdZFXXXjUff2yzeWxCfZKpddo9MDEt",
  "key12": "2X7dBXnXcWae9ADYptfnf6BAynJGMeTS8wtijFLJBbrbgoU81KvE1XLGoZnmrT8T43wcK8C3oPv89wfCNVj7WvDv",
  "key13": "2jUkZTaRkofeRLGVjfzaqq9JvkiWmJnUfjR5KwxApxdLSQhACRoSUostV4njox7rUN8STtZUB7yvMC84kGftVXQ1",
  "key14": "3X2oDtCSdZVhGi9XYykSDLHqJDcmN3VC1MTSpo59iiAH5KbHh4A4Dng96rEVA5qyVubjyCZtzaHt8nCd591uVcXP",
  "key15": "53B2egRt4w8aGqUdYr9etdqFZiN9aDrc9dyNF2EM2CHZyY3YKZ4ruy2WWtfjuQi6DHQMuYSYNhZ42Ub4P7NoCmM5",
  "key16": "3VwY99LTPD4adqCaTzbNaevB7MYs6LhrZmxBvxt1QUs1tUym8wYkJbr8PboTQ6SrUysFXki8oCNjPWvjUw9ZPT6f",
  "key17": "2ZtB3wb7qGFRme6erVN6Sqdhq4qHLsVUNvDYkeicS53gcFTsf7r7DPKnqGBAT9m9E5r5cmjoDgzeTBCc5xFpDSGX",
  "key18": "3zfqfStPPiw8RPMoTJRNqhTBUCRM8S54zecWZkvpw24Nr5DxNFxcHLvcYq7vdS5PPEJRro1fYJSgdUpJbNEaerQX",
  "key19": "2LMS5yzgyXP9DM2oJowckPC9nuVLdUmaUWQ4neYUvvrZqvXbgFDVVYsFFvgvvmPFGYeenVqZZpSL5VHdGwqtHT8A",
  "key20": "5XJ6B6j2ctUn7mGohkjATLdk2x8gn9aELMy4aiJnTVef44yFbRkEjwxwhUk5Nt7tvLBF5XqpxArBY97fRNof9Boq",
  "key21": "5KwoLKejaayfzcez8P6NoPmSVJ3w7fzdpYuTUCcTMQHBFpJ8pbKuB3KZ9dRTB63MSTtwViAYdj83okDYwwiMYJzP",
  "key22": "2MCCfKegjKx3Uy9jGx6qUDxh74RuiLU6XRmKARbhomq6ZyEijcq9Uu4rQoKmvJeUi9BA1S3MjPDxfTXVYQuCjeYC",
  "key23": "2U4mM5pA6rVUrHCqUi9vjRHEbcML7qzSDkbvLQpQCamCP6SupzTXQJxU1Z6cjPAyiqoCGEJyf2vrwswrBN9aAHmN",
  "key24": "67WWmLJZd3r8Mg9vyY5K2FLgzbaw6dd3tnbsguGMyDR3XPxznhsb1VPwgsE2cyHGzKVzHuH7poUqpiMbpk9XPcVe",
  "key25": "5rW8Yy4r4gwNXjofgn1A2GTn2VbjLiTPwn15nu33AvgXpk2nWuxQnh4PPwh5gAyJ49TdNC5fQ9m9NCcZjkHC1ja1",
  "key26": "2ZKBs3n6GVMrwFERKnC5ttupxbQvQYQtuNbWjsKn2wau4E6KRGP5c1iL3QcxNLsLJRkxcsqWfM3Q9DyrJKAy2qE2",
  "key27": "3F9z9uuoy9sYjukpHVRHxdtUc9nYomp3o9ft8xpR1LyRja9PhuF2EQEPTz7kmKZuRugPZwPVBk1GHbGXdULoDANv",
  "key28": "2PAqcydHbn38cjC3E6hU8iRchejQxxPNitvjmjCckjb6yuY2vq8CcHYJFTsN1AnTjdR9isjPKr75mGDgtR3axHQN",
  "key29": "4sm3FVy3d7ELrfwWahn9Qjesr1bg2WDb8RahptDJcfJaV6Lcz3W7SuXngRRjyY9jFCdEvCiRj3HwC862KHXjbshz",
  "key30": "5Exdu8yh1122Y1tVowSag9QeGm7KtL57g3JW6GsLo7xTuwVEKhZVUEcpQJSxkiLwdAGQQfRVPQfKL8nN3m3fkWBp",
  "key31": "4Vr7RxPPfzhSQ9aXai1A7QP6VDJQ3aPRCBzJFWXqiCc5YTvXsawtVWQZvNjbrPGpoeKZt1Ypk2iZqRD8yXJK39LM",
  "key32": "2EAPBLfRA2oa6QkjHhUsCkgtmZ4WwGyYdC6GYknvFviEsJ1j6BUFnHH8jbUKb8M1hJSjG6216UJjohjN8KVxRsPS",
  "key33": "3ARH8hx2TqLpen5YYoaGV3VDyM4BCH1w7Pzv8VNfeRcLB8mzPKYxRBqdDrh7q1sUPkKS2iX85YSewN8Pz3iRV1pf",
  "key34": "ayKPQsysTu1DpQbKN2DADCXHvPmbwFJ8pFJwLSuqBaxAyBD2fEQGEhJMVDVDzPrCEMZpvjH1mFMYRpHmWCUWUjj",
  "key35": "4w2ovw9w9rGtd1SSSqPKo6qSZKyt8hRgJbzWvjQ23fH5mUxwYrYWpaJVBSNc26UGqpPLCPufqP84h7ZQGP9n3NKQ",
  "key36": "22bWebgMLyMCB79PUkrMxT6eWv1PDMLYCHdys47F6NvBU336tYdWGqbsk6jX6EaVE4JuzQ2rm5E3mTnmxaAk7sMP",
  "key37": "4AVAL9ejLU83L3fZ7fxC2T4KJbibfwgef65324qDpF1ZKMWBk1WLx2T2hcuH8mGx1Qm8YPVj8iFS5xfGVYmMsmSV",
  "key38": "58sFbenXBCBQfBf48RvJwuM2fTLeZ75QFDDQd8vQhjVXbPgDAzfpVdNsypWoY8i7btSzLRe8bKmHk5Lqn7X4NsJz",
  "key39": "2cw8yzaXEr8NVXYK1FqGdgmeSucynQXouVwQDGmH5ZcFcYud74dZtzqWXEAp4pVgaWVVRX1s5iKj6hezMzy74cK1",
  "key40": "3C3yReCjH6uAU2NmqpsA2UByLUrcigisfngdNVjLvs45dK6FRTKbi8cs1Qz5Aq922JUHDw8k5zsLvoRrjS5ZFaWL",
  "key41": "3nR51sLBqoqp1m8mbAgtYXkZ9a9Co6YfoS3i5X5m3QV8JYaYVHEoVqVjXnp2Ro8bJaB2er44r7yyPTvuY1F1ev8N",
  "key42": "2vgWfdAc8NgQ8F1EXr53WikhPR3Wpdirhug96FMZvk2c7oSbTyosw82pj9nbwVSZuH5vVHFRJEFsaGjk8XFfBkfL",
  "key43": "2wesni84Z9SmH2Kh8PrxL7FVeciEm9hMoR6ZAi9x6AGTuKi7uwizngBmsm9D4oEMZyKVM53NTQLgkitEXpXVTbUm",
  "key44": "5fEbHEo8ghmPX2ZcDZfTcYcusJtMxkE94LWmjMgH3aJsv6Ujr38S2iuAy12HRgL5uoHM1tcVfrqh6nduAGMGKbcB",
  "key45": "4XwA9CmT8DgrDzV4M73P4P7vscNNxbTC8UrArcLZVNaF559gPsX9wKfTfzKuiJQ75K8YKvkETQVRiFZ8nUrZLwmZ",
  "key46": "59sZfrhTSgzGXRiAt3GvD5hwMrbwfGE1daB3GxM1zzKibgRETyu7sipN6HSnJChDT9erjAcWUUFMHA1rvo4v6wG",
  "key47": "4LgPc8NtEDj2QYZW8wZDAWcy24AAVNEMWs7b2E18v36X1JpZkNvsgqqJE6DiL3adnJWfh7zKnKvJ9ubuMb3Qiu1R",
  "key48": "3KW2Z9939F3BLMbj1UEksSHRujMZgXxKcCu1FZpq4m4x3awk3sWQ4R89NHjXCCbu1wFYQ7iYmy9dq2rGtfFSH1BY",
  "key49": "2YzXwu9gotvu1tYPQN6chCuTRtEqABPDKaoynJZc7Y79bPPH2i4r6vCwcFpNwTAUAdgiXNcdd2d3CyADTNz5GwHU"
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
