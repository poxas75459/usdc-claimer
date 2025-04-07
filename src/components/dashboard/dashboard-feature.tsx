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
    "DJZ79ck1yX1hMUwwWnymKkMQVSE7soeMNJLiywD29yMPP1YKJT68eG1N3Pq3GW51x5a19SNmphtRbu4UTCtMkVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GsJeazDvWkdd38GXpB5WRiv1ovMMLSMwewshn84Dp1TyrZNKqYG6gYUdFSTNSkYXH2bsjqEsX86da48X5DKth4S",
  "key1": "3kYQ66My7LpwehmpUADfQokEDVxyLjZjmQE1kCqkvY6MRnSU3U1MWAk9HSN5vTfrgRsbEoGjqtnizRbxyQfU12fV",
  "key2": "5KKw8zVA6mewWmEyQsiyoLPZfr1kmNwV9JcSpH9xR8qGmnagFZWQB48a33z2y8wAnM7X5KhvwY279QBxDHzCwmxC",
  "key3": "3UD6E8wsVrGv45GCP2v1xXP2ei3SMz8jsbFk5ELYG7DgDz5dPmckov9dBvCuf6tRApp6w5iRJDma4yQpGVgHXRR8",
  "key4": "4wSBigf2X5nPgFmPpZzJtT8VM6nzx2orruJVfmvmVZhnoe35NE74oU6ZrieZkfvuUSVkDVsn411EsXMf1N31wTf7",
  "key5": "QV1oRDnzmwYGdNffABnPxjf9kySmgCTPTq2gWHKzWd2EnseiSNUT9cFxsPtkEKuEb116CW6xbaF17ioeuuPJVCk",
  "key6": "33749KN2qqrPcWKVHhjFETjKmcrEyV1vWU2aNs8UW8VddoFwfZVYAtPEhtp7EsjdhE69fKtUTjK9E2xX6Wbg9gV7",
  "key7": "4erTqSLBZoTmEpooYyM7YdNp17wwRkf3k4kHa3fMLmG7wrbqZqXaRBDDZUCTbPe94nJxEQ9bJaMLb9KB2VrFsCTG",
  "key8": "2KdJ748Qk1PNWis5JPWp9kgvoWbGmtdFyNCmpphbu7fW4vhvsw3oAkasM3RVwSiCN7RyZegw6Kf9nWJaCmm7Ria7",
  "key9": "35Hd6Afff4nCDXBRWhR8i9uHdq9pMD6thef4Ef9TDV4jqk8pFqU2AA1dra7UR3hcaXDSEPESe3TzJsyDorMyDX5e",
  "key10": "N5qe7cdkjxWM7pygar9T1rC2JhYFEUbogqET5c4QKLqWFGfAcXRWjUJmJZ2YXvCVFyhKQsChPZxGUNuUNSdt4tn",
  "key11": "S1GuVFthCsL2WrDf5iR7xQbtJBgYtX4Bh9TWxvwcvjGD6WAr9HzJyYMrmQzaMEpq7qMNbUzX8T5D1YtjzsuJ5bf",
  "key12": "5tECSpfpQuLuyXBfzHN99PbZu1HRQ8gQDqyapMz8tsjTDJjtEohJ1vfUBTZs82KiTQaoohuhF6GPfhCnxYWJ15Rm",
  "key13": "529LDcfyxvRdw1gz7ZjTPEpkYHJfE5gPu15GPiPBm8cqdS9r5kc5ezKGnf2uTqTR9KJHEAokwesTdCBnghAMkikx",
  "key14": "363YdNNU3mHR2GaFiBmh4eGHAhNydGvvrdAPJbAZfCbXDUnA9GvncJW6aBGgwgxjJ6EngxF2U2v4zhKdnvrd4xJh",
  "key15": "3xFBN3YoFLhEWnmynFiAYik5UDi4LPiwAcSJkZ2r8wZvdwMV8hDEhDRmeXG5V5M5iaCpaqH2TqgnpgZ9iVTzRcZG",
  "key16": "5QRPpFeGYeC4tuXK5Z9uikTJPF7YTUrhG4a7ZZEn98bB1fyozcormTAom5VsynXzw1mHwCqYTP3fetvxFPQsuC8V",
  "key17": "4o9BugdYbCMgAm4YMi2AUsh1sLeCBr7GCe6X5rqpKdbse2ziW3YuAfRQMVQCqfeaSXEDbPDY7EXvZdHzf66WUtXz",
  "key18": "3CnyHSGTK4Zw1Joh2QXaN1Y7nHh2ECuhmiiCL8VBuadYUivg9juV2XCRMTVtCR8iKgbiesMYyWYyiuw1gdD49pDz",
  "key19": "5FYoTJDY28TWfQGTf497UYjStEm8ofRuKFy6DGELVFYRngLSvM4o7XYjoERnJu7McPDWNV92Vzim5AjhieF12tFq",
  "key20": "59NqbBkyHLprGeRWubiCFTsf8Y6T1RJVj5mkcUsfYqQEjbygCTJRwf7P5M117qyJPzcv2rdHyNLjtwMgfYNrh2Ri",
  "key21": "3TRi7Xhr7ML7PEcNGvhnEf1ha7eBuZbRJmoLVrPYNGpS1jd2vMdg7Un4GbHey3iZVHmxfpW8r7n232e9UGoqMxx6",
  "key22": "3YTuvLV5r1v3VquHNnse5F7ANnmCGLpovFTcPo9se4h6KuPLFJgum2Jw9bWqpotb32jn8hG8mfXH2HCKPzXK4g61",
  "key23": "4rfUogYptWqeGj1zza1uDuXSkrDJaC5XPa2JVN4Zhxd3sgQY2g4Aswn7YPj5bb8dosUuL9Q1cnaBjo5HahtSVBrN",
  "key24": "kEN1wxqSmTLWzaUEYjvtozhE7wDcZjnMax4MekoQc4z6gkN8jtrfcBg222cCCqdhaBgMpJLFUc1CNVrj6cxBJmq",
  "key25": "5DLhtTqftzKWHENiGNpPrg3hnoJ35RbpoxE26BBFhtHa3Tqqw2dCT9hF8agJSs6WGynWFVzfcCxjVXy9PWv35Q3H",
  "key26": "5PueHvX3JhQwkFxpenMFxqU89WFs3QhQyyTbgcVFv6K3GsAqugFpDggsaPQUJeCp53g7ShWrBiwftRh7NHyYPQ8X",
  "key27": "5HxP9d8awbXivJWvQuqHNM3oNhaobtZ9cBMTPxgfR6rKLHU9vYdfK7rRxKBRK3BcxqTYWSfVD7vfbA5z5VE789SZ",
  "key28": "4DaAJqjwWy8HDfRAcnA6Z9Xo11GAwCxbVjm5Ne8zBZo3QM8XRHWkEuvBun5hwuNaHq5TtwsrprHzGRP76FRczHXa",
  "key29": "5xeo6sGgJL441c46nCeowQgVEytSGUcJTqqqbPNGFueAXmDEyFS6CjTxG4n6adk3DgQ1umZCnJpiR8RVqgU3KCy",
  "key30": "2tqD2HqNKWK2xJZ3RCV1nzX419YgK3nCd49yov63QmHgxGP9ursVnykHcxwyEUMYfrZB4E2kApDrnoJm4fr27krD",
  "key31": "3itFLWKr7GBDS3PRWG9RBeVfFRKmpH5yZLVpgM7eMjraUNPdDjWZY24STxUQxzSgjuJa76uSgcueEuBpJhUXG6oc",
  "key32": "2Hjs8iCeVF3w6KFKYgBf2wbANsWfHtqAYoCkUBhDS5QGwU4PBWGcEu4ZVX6dCkUAwnS8whkHRQaY9vhrDk282RUa",
  "key33": "3MA9z8u6nsmkmD4fosA96eFbAYaCjgR8ybtELGxGUANHN1uMokqtawZjw3B6rNLQtTT2zBrmDt6gtBFjZo7sdLY8",
  "key34": "5R5K6CUSkJLSHaQxryDoDgYQL1Htmb5Z8ZYSCTLdBxCwhXrnPAxaJK1udZ39SxSVcVr4ckJME2Gf4LeFdGzLZxqq",
  "key35": "Mi94PnfeY6n2Uppzzwm5nqmzVYeULQvXs3w8NB6cD5mD5SVLyCC5MoRJuwfMc6CqzS7sBwVib6ABsGcpwZGsbWP",
  "key36": "47ogNhFkfPyXXLqCiLVLYpWgvrSmKrWrY5CzH6CXu5pyQ57RtQMXYLgwS6JA2APmSRnP19BRT9nTuWse75gjJL5k",
  "key37": "59u5pLgyGZBnAamrLgQGL2ptMFoRgyDzqTfkcttxUB7tNbYemXQYYZP7UjNE9K9SP6RTFXueW7oEGWMXFc1Zo9dR",
  "key38": "aWBSAybyeM8BeocoUeBBo62WgMS2Dg8xtC2XBCXQC9fs2J5bXCXPd5FHosMS1nwArkyiuQf2HsVLneGYpNSPVDT",
  "key39": "q6S33pBepfMbDyyi8WqaxuiVCM4ceSBKEsC7ejaQCsAnkHqr56NZ8UsoKdXqBw6AkhPWQ3AimXfGUgLg4n6gSww",
  "key40": "3i2ZAxUpKGs95ougpTEPQifaasWJw18XRk4beD2kRKkFCnEJT79cR8wuZYixw1hgQNk6avqpfnR7UULffxggWhYH",
  "key41": "3fkFcQevakX1wUaSCVUP8ESzEJaVdL9Rct1T9RxwntGsgmPBr6u3BiQSvbjhFfFex2xJR2tQ3wTahCH1NkPM1yDy",
  "key42": "4GvNn6Qd8Vn1tXVH7FPz7Bk9Tvdz9roEXHycC1oJwuApoCuvek3mM95eCiwZnu7iLRZDmW8yNk2zunQwcL3QdSJz",
  "key43": "J9x18Toc3CetzyQAbgGWfqQESNF1StxCBfVKSSZowm83BWSKdHDAMBqRo6BYQSuJ4dYCPuvwEZoFGaM5HsvAC3V",
  "key44": "v75EdHPE4rEHYKZ8cyX9uLp1RuY4ZbhhaDQMjuMdXs2mpXeFdSoMctth74UXc6zz9KaDuk5Ec5YLnm3nVhXg4TT",
  "key45": "5tCrSK8Mct7GjKmbHd4KCEBAkdNVN9TcwHtgT4Fj8WvAK1GHesy9x4YGZngGdzr1R5dnYRGawoRBAem97eCJt9aq",
  "key46": "2vQ1bL6TjZqYj27E6juhg99Bjv98LDjyQ9K97VQMyAqxfHfwhFMbeM4UPpTUN5zCqKFEpLJWhYJtLtTF7c5TmaoN",
  "key47": "3tJcfUfYigRDvzHsyw9xk54JXckjtja2Mi3HhCt2qQBUpR68aiC1o2pG2ss9r67tLuGyssvHEHBYV4BmPnkbyDt4",
  "key48": "49HembWihR1hqSikYspuGSkNLYqVp5rVXE1rBkxaZCuW9yx5g7cH8x851nbsGurSggwkH7yncy1jCjR7RAx4f531"
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
