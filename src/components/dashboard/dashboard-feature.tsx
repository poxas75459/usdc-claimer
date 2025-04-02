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
    "4FwJRonxJVtLztyUdEvT3kBRBEVwC5obfu8kQmPUjQseoJvCD9jzvfvzk9xMaJdzoiyRiZ68ovsmgpEiQzWPbTYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NVJcttVkA6MyMyY4dFLGb7y3gSgXmdimnfsGoDgKYYHNMYS1VqoMEupPaSc513gt5AB2SekeTweabaZMfbX9CkJ",
  "key1": "5paxocdGFcAN3jnJQq89Knp5ujMzymExwSprxrJ8mSdSZ9t47FXB7Vg4ZcDqWV6F8DfUBQFzqqQF7bs2gMZx8s2r",
  "key2": "5j73byNoyGgpmQcS5eH1zXq6EBTUhV2dmMXrpqrsuoMgD8oiACo9J6uheRAhaVGFvW5dk2DGW4m1e5oh8LRuvjmH",
  "key3": "CTZa9Npz9Kj8m3Xouh6iBsWL2rhT8NrcigJphNoxXSaz5KNvKTaT9yweNwxn8ncisUwuD1jPEVhXtSisQWhkgch",
  "key4": "3Nh4Qs6T41NaoV14LUeg55FeuuvPM49pRLLLrZZXxDsTn8ukGebJAsdHfGnG3vTUM3ai6Y9JZAJkNsgmXbM8ZEVp",
  "key5": "jE7e4WJNcsk9XDSax3GURYELkG58SVfkWFTHthWbKgE9mWWXuqH6YX4bCYfhFzqL6JgJ9m3urTEES3Xhr8QD3AQ",
  "key6": "5t4hv93qWEH7tD2NGUGbkwxtW2PiqKq8dL4DvJNqUEuNFjBKMpvo57vCXSMMNDHBrxtgVohXf9Ue5PnhHYBE1pc1",
  "key7": "4syh9MH4qSqyUYEK63mNscFR3G3usqSBU1EmtTkNVhrYG2dhZgZHkYTsfaKpQHgdjVsZzSc8UABu6UapmriATedV",
  "key8": "2sw3UtgDaq1QArMnMvzgSUHaC1yV3GR9pxh1RViypyXCEb33udh56GU9qKuYYHce73WHFsh7cCqBaS5CDXdkw2PR",
  "key9": "5Lj5vx2wMKPvbvSxFrSeqbpjagfZnhb5HcSFHZDMtKU6GjbmcoSuu3FBR4dkywaeQRPsRT8oNbWJYkFZC7Rpr8yB",
  "key10": "2JV4Zjfq7fJmdCSJiaas5Upr9WqRGJBwm2KUcAG6pTJf8U4Si2jJijXeSZPeEBCLgy4r7wdn9tY1wHSacMpmsrNc",
  "key11": "4Kn2XG3nDPnuJN2c14CYDMH4KrwN4E1dEtow92ZJf8nuB2hF7dtFphP9cZCf1qoLFbarxJ2SY9JjP9qNM6UnCHMX",
  "key12": "3LQp9axGQCDp9HYr9W2hALxHnK4f35EQuXd9HQRxE98vrD2x1phv4tHipymqAuzWur5vXYiawvu8x59NVyQft2vh",
  "key13": "3x8iJrDrBFouCqHJ3Sk7mwbHcZ8Dhz2MDi3JjE8jnp9fY2PGYFBKJpEriyuM3JCjL9xEySBZAmmptfW4JKbepyd5",
  "key14": "Pknv578M2tFaie6udksqt29HKyGtBMRQCdK9D1RhgKDzqxMKREtYznEJQpsHPXZQuBEBgScpzjVE7Pwj1BJ3GW2",
  "key15": "2vSHQzcVmCGwnCCkeUTusmpFqN7CdnPw5x7S2MXQrCa3gvFJJ8Auc2vU4eHansHbi197YKioks1r6RApr5nPmw7a",
  "key16": "4Vju5m6dbqxLTS7WqN3rP6dL9BBsVri8xjy5NPFxdQNdFcpkw8fstta5Jb2sb2NQMgUsUMurzPZfkMehUAsZdfce",
  "key17": "4K1NzqcCXB8jT5qjuJguYyMZpVwxizKVvHR7xVc7p1Nw3C9ymBNMJwpYs353GtHA6pdJSXqKZCT5rRcCFEdTfVGf",
  "key18": "nM9jReNnb786o4PwGCYg4dFXHsxgPdf7PJUDwh7YSvW9DzUk5cRoL8gxqPGkvwCGz2xoh4nm6PfhbGHdTVocppg",
  "key19": "2nzQKdgh2TR7fykdQTKCyiWrLXy2Yu1pziUm2mKLcG66CNmzfyuDHcRbKNqHvbQWCpzxdiVuJCvcCptATxXpE2c6",
  "key20": "4kapb8Ag79tkaaBMjXBwfJytb7StbVZD2QN96kakmtK8irTMfp6nJGkyYP8XEwZpJgLbFCSHrgGvEbRssYV15v3o",
  "key21": "5434TRcYxLXMqcS5wfGX2aqnyHkA55Lbg1EGXDK5PjCgAZrViTXbfEdmZNNj1g7X2XCS5CHRGzn9UHmNwnMQtFnh",
  "key22": "ZyWHDuG5w5Tj29rKNVUsbv4ZCaGuU7vzbxD7zEqGqNr24dd5UYGS5z3UyMbn7HXkQ3occJpM7MU8axtvBVpboi3",
  "key23": "2ramGXHsp4rBgYFYSXBM8xwG7xb5JovFF8odtazX4Txe8ytZrpY3gZwdigMYgB6NTbt1iQGiyifT52Luxa95cY6d",
  "key24": "5D37WZFnSL7i3tQ2vRSDiGsrbJTfsz9qD6RpJjwpdijhdeVSkdCShvtGevBSoBbya2zeMBTvwMPSvb7XbWsQx714",
  "key25": "VxSFKoQWxGSHVGa48ZvawV2a8AY9QcveopuXHRa34qb8KtBZUfLG4ABaqcHZyjZdSKE1Xki4QEEQr5nWTgLBPht",
  "key26": "L6hnw5EC2HLUwK4Bx9GCYxHgGxJHddJqsDh17QvWrTDpCaoKChZAWtaRSBYDGSWqj4SPemUpePNe2p7pPrmULno",
  "key27": "61vU5chuNJVvt2Z2npUNp51mKYMzMq8b3ixbK3RfPJs7D2FdrMeLTyjcmdhcsyibGyu5MH3fdZoinC2L1uqtaCK4",
  "key28": "LfLaFF4gax9rZiabb9D7p9vUNUFb75J1pLZFedcFumphARkb3EXEkSeBWYLQVwHsXpUZWKbDdyaAHxLqfUq23LN",
  "key29": "2cer8jiSUbNpzFFCtsUsJz64UxWzPPMog7HrDN1AG8qJUULDgJiPy2a39RL6Ah4NGhCnER2cD85aPZ9sahhRwmMW",
  "key30": "56ipf3pQcLDt7KF9qsewnRJP3uFHypw4c4J9uqjK4wfatu2Fe1rZCYeEcdcbgnaugeh8zTsnFFrFagqpxs7EJJD1",
  "key31": "38eh8Ad4A6q77UXMgAFkbCscXH547yJDJSuoG7AFEPTmyWJ9AGSqt1vm8sC6brEvJnPymt6HyjZRutZRsaXUZXm1",
  "key32": "eFNyYzb3HE8ypPn7N4wgdwYBRM62j8Xo4pmLKw9rDxnqHHPFWZcGRLkn1q6dSf67Qnv7dgTmQYUHKAvtkRjLBWz",
  "key33": "3FLShLM5DMMbQu1xDnEToQYBJQScEDcqrgC3wwLgK7w5gFhzU5wvE7LuNJRX42SBwvdLisVePEYazTWXarkWHqYB",
  "key34": "3uiDnPepopMaiCh1Ysbq6oaEBief3uxtNWZbDocxwgiXya8PDQVJuh3Dj8dFthhYKXXF6kDCMwjP8iHYKeY2sfej",
  "key35": "2VyLiKph9ePUXwRphWzXYm8aXj2mk6kcuQLRYXBzwALoB1NVd36gNdXcZHHcYTpHtb7vDsCAgE6xTRYPDvYVQHZt",
  "key36": "XGEdSrLB74M6LDRS88inqvDtNG19E7jWEGxFFijs35nGF7u77iTff5KPAzZuGYt8NmHaQH7HCekrDLVKFuagXLJ",
  "key37": "LJCPnnrdczGphfKSW2wEkmmrHYbhuRSvfakCQp4VU5WFgguXv1X8nefczEdU2eCQvA1F3GwPZYDgBNf9EGmH9pd",
  "key38": "4vGEJeR6b9tBxSjprQ8WQrHBhCnbfo7pB4dgjdwcmDdNbkidmgfLrx1Xn5c5N6MdudcUbiVPwAXBrtJUmQSC8r2o",
  "key39": "2H1Eqz5MzQRxKqcVo8XaHwuMNTLeULzaXHQCdLQs7giQtWJsQvfdG9VZ1MpC6etBdbwPKQjwZs26HLcv6yZpHBMi",
  "key40": "hwQomYjV2DiypbAw9VFpvAw6wQMGbkN9RAsanqMjga4f4FTAtxCjYZgk5uFkqmWYenn6fNci7TqJXokVMPHcu2H",
  "key41": "64kMgnYVKYzLQ4Dh2PaCH4QPpUMBsmBqJsEqTKZVRkn3c5Qq2nYF94HUxktoPi9iymzw2e2A9E6qJBbMLD1AfMVT",
  "key42": "2R1vneXNcgbMUe9t8m1J24t9pXDY4A2dc9nyXeikM5WBLUkbYQdqh6mDmMMx2as3h8GUVYsunjp8rW8vDpAi5pP3",
  "key43": "4XL3Q9xGEEWmnzYvbibt9RFwaBx2nCR6nzSrDkWCJ7NvFoypjaqM4DEuUMiKV6KdS3uNgXTqmJVtXKz7qj3HvBq3",
  "key44": "2PeKVcEAf6pTbsSCVWsBJ8vv448aBJyXkMAz7jgiRiQuPsZ1drZxsD72od76QVRzwmceUyS21cj4rbrDRNW5aS8Y",
  "key45": "2e8sXsc2a7WDVBUo9rmvYtbkpymNm7s61Jy7e5tQMuvFEQDDVswEYsBdDs91Vhi7FkhzwAAgkMFxzFNACn3s2ncj",
  "key46": "2zxCxGaN7cCUwstZxpV6NX5LpjsP2cq4oW6vnzt57XZa3yvcxtRPDX7gDYBFxXYxtb9K2y4ivZWBVn3JTzSCLrrf",
  "key47": "56V38i8VwWog1NZNXx7tjPFyUffxmLPbt5udWiHMvtid6hHdvriChkcz7FDuionk9bNECE1c1cCJy658zY6nFEoq"
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
