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
    "5vZJvZMLeX7cfwsv4esraTHn6A2jngjbA7RmbEpuPW1Ai9EZaDtsaSMASvd79gBGHG2NwDQntxY4VnUkRFRXVesz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ZXG24s7M6TSmRCZbVAsMsWrGpGxeUv87keXXxDGzMf8cb5nzTwStBjKBpVQnxdVYYEbLZLcf6sWimtz4mSDmgi",
  "key1": "5xTwfmsj2r6C6aRgjAUJfinjFaocVSmsYnkzygA1UheGEE67HtDTg1bykb1pU4AV1YCAUMuYYVsYAg78k3p8R6b9",
  "key2": "TynvEmLKMTJb6GNLtqPLSH5B1cBrsUkxfRdevkMv2tf1a83CMvb5Pfbre9SCM1nnoetv7yFfSShtgTDPKeVNq2A",
  "key3": "367P5iRdRhfyPoTvo3qaVoBnuhLdu3rmWSNVARvCJN2foMK98kTsunVpRuX8y58r95HcSnRYWG47a93wkZbTSx1t",
  "key4": "3Vv1PeBrT79WBYuuT6xCEzJpVqLSHkibwCTJBYZoWkqqkQgE3p1b9KQPKg49zJhgj2hJ54rPWE7WJd4eHA42TVNb",
  "key5": "oTdTSEjBvwdxZtmiAyeLd1UrCedvNgpT1XdUjfJDchbNstQXxzv3eWHXuwyL83K1ApS7FTqz3j7G4E1tGrpCcLE",
  "key6": "5eUPkAMJHrLCsgPdW9eqXRmDYFBUSE9d5Y8kezKbnxNgAjmRv4xtcdutG4HN47VDZnoeECcnXNsGw6ETdPc8wgVs",
  "key7": "4JfF1hxMv9sBqz1QKFMantjnWRCwiEGjHCXtLxVSbqoRibGWoy65222KmAz7NP6bS5g9cdfTU88aieW5rdbDeVid",
  "key8": "4V4MEvmqLTgvzhs6M4v21SZL1mU2MRNEd4kCmUeMAHy5rS7rPb3TaLYKp1vj8dgZKUz4hDftgNm2gdX9TAdqxxqq",
  "key9": "4RgsGiLKDf2ytmsx5vNb6N2aXRp9pmUBspnLFmEZK5dFpXGa9EWkr3EKaLz5FkFh1AeKSazatwMcj97R7SJUR7fW",
  "key10": "3Xd26Rn9vW2dxxzHSTrxfkE2a9Ckn4Ee4nu7yocr7ESEWyXj9ggyLCGNXLpWBKkThiVHBHmvZGTRmSmBDSYQ8tvY",
  "key11": "48f4rH8Yx24ZtC43hn7Ro9SbepW7nogKYqQigwaKt5hNBDQGaH4rYk55Tf7Hu9NNZGc9b9knAY5acPbTsJSLyzpS",
  "key12": "5VvkpBg87cZ4zSUFNZaBxKXygT3pGRyeeKGszkKigq6fhHKxX8JnCVQHe7RwYHxF7FZxjTovaQQZWTVou9hsLH7g",
  "key13": "5FF15C2L35nHDGw9E6mKFs8wLYpP49i6rnDpt3BSLW3xEBxoqwqgfirp66HU7eDJLWPqGS2ncy99Y9u7vunWdme1",
  "key14": "2LQiEFfiWy79RyaPTmuEikY4CqJRCfezeZVW1REaL56etb8ZUKpeDuoxRzs3SUTX28KAUUEnfvA9qMTnCoAstSuj",
  "key15": "55azrMtRcUzZozeMVYH74ksm5L9q4Sfxt4hm2wykAZHKviEpGXdrckUmWHQnGhbErfai3SnZRYPRYdqx61hToqKG",
  "key16": "2Ciqi3tQnyRFrb4A1Cf6VAPQmtZFNh9Wxc1wFmuUXdiCHb6RRqPTrQAT664tWDCm1Bva6dGpr3tAyghJqsaqwxr9",
  "key17": "2kNWJmeajJ8PYB9xAKNy7793y2yFxYR9hxkS49NDd7FCT5veaeq25YhUnzrPr1uwpu1dQzNgNhy94nqUEYo5LZbM",
  "key18": "58cCEFzXqcPUgAcMi6C1wYjn13RvF3mmFEfCVvGXJhvr1LtFpRicJHSMiLVSwCbKpRrT4ritgx1ooKpp4WJKEWiX",
  "key19": "3hrwx9XL2XzgAE5cwa82cyJikJPpCuv6mow84fv7JzLGdCg15QbkHJjgvvDQv6Znx46tRqGY7NLgDBDTM9vQnHUy",
  "key20": "43yhmU2V3GLoKd5Ryg9jvEA1fk8z6mh7y2CCgVGg5tkw3cSoMhkD6x3sKnHYERyA7PwYrXvbJS8cFnfD3yYXePrc",
  "key21": "2yLs24uzum32ctfqyuS1evPATQZoFCFjazoeqtdP2gxSxrHvBsDdR4VPZabWtqbtFF9gsGnFM1YCRwM4PPqXnNYK",
  "key22": "vkmbSCf2BYgNHjRqxqeBTZGYgcyg9uoFChsbtAUceetM13cgHvxd4xjXftGed2Ra2qFfp25QBF2ideENdwo3TQ5",
  "key23": "4EsN4xpaxL37ftJ4nWSpXQCZr21NLnwy5d59RXNuB83NCXibvDSigmn5CpyDxLv6G2p4U4wpheyHRAYDWJDnm1s9",
  "key24": "3e9KDfHr4emsnGUCDPQKDQkK4puirkqdGWiqnRgpmC245HrASVibAmLRhRc3ksBxLNESCjaHDwf5sv3ef6Ei6P88",
  "key25": "MFUAH9ZWuqV6CauVmbBvfhpuFwN7VNMgzHB8CvYTAhjfSGD9u3GbnFimw89DWH7jhjKrRTGxYxjW1QfyiZW1oo9",
  "key26": "Qm5yS9MhP127WVDFKzU3Ma11yML83P6gymmNdvYZH4mVEmDn6AFAt9z8PDExkrqQ162XjHPZpoZ7PYuJsgi54xc",
  "key27": "2AC1uJEi4vAwCSX4YTKFPcjK9QwDvS3448XohZv6SDKLG3nX12ztBULvhTdrQzRBBk66Thi3ySd5bK85ddxVUk1D",
  "key28": "5pGFt2jP1YxUdMQgDbKo14TP7zvCB34ZLsJGD5ycnVHNNbpM7MjADj9kvtdtFZ1MRLTDkrXRqv6ixv83yb9TkkDP",
  "key29": "42Xph7ABuEqmMWDkeC1HyS2MazCE9jx19YQAZDXCNUva9DxMs8k54xi7hLxZtkmSkaYE41YDzzsGXKNjaEJ3gLK4",
  "key30": "2xtzMerA16Ba5Cu4VUKdWSFekTBESPNkJeNcVqDBi84PXAKGhZTpgHdE9d6VGLY9guKrJQSHRsh43z1r8ZbK9VTQ",
  "key31": "4VEwnNeJH99ksMh4tnttBERUMEN1CV85BNtB75b757UB1bM7SNnUzZAkLGwi5VvojANJbYuc6kFtGEVBgHqhHPfH",
  "key32": "65ryD8p4q5jTy9DSvqNec7SixbSMGxv4n8u1UVmzXS4iHYa2xhYBUDBFFBvAs7LyDCsLy4bqe5UDHL6uMDAe18an",
  "key33": "5KR1Mig4H13ymXAaHpyaHMNmYGwB9ZTwnZ87UfTJXEJ45xfdb6ZPxVsYCs3Uew53iDJYXW6VPgMoB9HpichvsxHQ",
  "key34": "2uUr5o9gB2feTnGtpKMvDWLApF2VeNnNckjVtAFjiN42Hiw87zZEZX3gmdnFu7fZturWRzwtqRo7sKrwkazf4fTW",
  "key35": "JiNJjiza5Bbk6AeiuoYBCFZv2RVKKEqbGMVRWzts6SzWMZiGWQcFJpZ7hbqGe2eNgSyQL7eh7LhiGpY2cuufqty",
  "key36": "6RcLPr8QDboy3E6JSdcJUEVkCLVRadLkYBTWbMUeayrhwEV6DtcSmztrJUEJetXJyAu7HWKcYQorY1XhEcjCV4w",
  "key37": "3HmRDTrtupR46PZkSaqit7wqJgU64APBP9u7DTurXKSyYZhzbHmSFJmDxfmJG7rQxpnUdZJ1R8HhCF2R1YJnusXQ",
  "key38": "5C25JDZkqX9PYiTihT52FYumC3trFnJkWUoTJXmbfsCCrVns7CnEfWmjELnZ2uZLiSpjRvRd42QUyVAqHwggGt6G"
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
