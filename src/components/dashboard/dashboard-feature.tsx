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
    "2bxmgfRZAaFFNKNUYE2goQzVaGueH669TrwyzYXEnUVECdoF2vuqvyzX4A3vB79PMJKeSoHQ7hCzB1KuzxZLpfjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41WT9qZLk2ZUT3TN3DVp7oHeCYcJcFmLVexFztSTwdcpvFM37yDhWrBr2K76S3itpyiWRhZr9GpJbCPD5dBq3gkB",
  "key1": "5a872mp7xFDA7myPXYUcPiLxTcC9hTEwX2WyzbK66Him6AqWAfRyH9Kgk2ndeih13abiumYmnXy2PxGLnSsmBf5p",
  "key2": "5Y3PA778e7o63QeM1YcrtQwHyA4arjMMKR4rnjM9e6YrtSaXfVa4dZJsZszy28zp2QYax8J8Wa14b3ygeKeQwnwq",
  "key3": "2H8iKrsXKiTLwoTAvAPwYS11LbxsPfpxVb4qoZgracTqsdyi2ooskeHfQ2sW7ApN2SQwXzxuMsNddHNvv4JKb6bH",
  "key4": "2eJes3QSV1R5FXCDsryVTtMCVKo1HdG3xeEfqqbUJRmYn2B9Youk6Bm1dosnTey5h2KeyTRWYYwxUWTJY3rD95Nd",
  "key5": "3HwMxB7mSQtN994qUEJRZsS4UXoQ8m7quvM1kQ41N5J3m9RDjAQv7PxmNpyUuEJrRKskH2MUGW9HkvtfEz98cTDk",
  "key6": "2woQ2VpW7zgTsNaLvHC587sL5DPT2abxbkBRZanxNZV2o1G1XH29sdNGxJ58j5AxWppFSj64XyeRSv8GA67D2Y82",
  "key7": "4G5UAkh91T1qWGLVBBQdKoFsDEdomhYYptAbQ1c5UKqoT4VqRTZnkMKLasgvPVhbNZZrdNPziGqPt7z91yczQV4T",
  "key8": "R4gApsuppjvmE46BbQisdTVcVjLq7xe7MemkfKstwdXbXyTVonx3bwgXeWrfm4HNuTzX8EXVuimmhjDpRA5KWNa",
  "key9": "5LCo6nrwnKQazvz3enaEZfThbfn7YDYTDNA3b5ek5JYRN2J2DMkg6y6Ao4aSPMDzWtQtPQUcWNZSoCTdnKEfV6Ec",
  "key10": "37Bj7dcwUhu2F8o9HXmasLe4h8HYHzwe3z8eZLL9kTLeec9ahZHgyMSuosGr6idyZtBFQG78UkhSMVQy9hpDjaek",
  "key11": "LNjmt7cSidyQadmrUvgZS6G6zvgJHPJ4dPGt8VTEWpz2nSxoUev1dLmjUj7iFNZbhrE52SaLH75YLJdANBRpfYp",
  "key12": "2MTBUHNVScG19yWCXXS1C2mwVnuu87q3TaFA39wmF2JVUebAxi61fvcAwEnVX8cqWgthcE9U29kofBmGJts96fA9",
  "key13": "5KasagCGBW6ZmKxnsZnLNEAgjih6HjzqQ5jaCWKwFgxS8tq3mA5LaMdLRtAgmY7b9HeZ6vEHU9gN32ALJqhsbduY",
  "key14": "5NqCmuKqpr9ZdxGbRvzQgvtzfNYdweXyXfKkhRW2J1WTyJSfPG9jjBtXA6MrUGY9bewxeZxJag412LVoUd5VsxeH",
  "key15": "2wTfzbz1ZaDLrDcpQvLaLuBuTZQAdCvgqJHgxLfu89Kgorj975Gk2Yg9wetP7pF78er2pY4oChLU2Pm5m8LumkNv",
  "key16": "tWGEXg4BDCF88d6qTUJw9wxHpWfbhQo8uF9huLAWcRWaFT7aXqFHkvGiYqUPRyNEdBnKrtKgDKro7wAwkVfCwKc",
  "key17": "5i2LHXyzr4Cdr3brBGiQoaCzYP4AGeqV29y1Un5KRfN9H93kh8VWk9RcxQAH9xiwJm2TRuG7e6DQp43UtXdSWwwM",
  "key18": "Xcqbb3bajnDpjqKmdAcPhrHmdv97bfbgonr1uFgNamzVVNeZ96kZGNpXtv9mnorjSKtRVEnipiGoTqqyZB8hjhC",
  "key19": "5G8WeBY1sdxTdx5xVoGhpyZn4F7uwugg9U2qAsb52wNDpQi2iHYBQswVKGDqezYzTHXLLszbpeJorLGhgcRo8V2k",
  "key20": "xTQ14Txwwxxa88AVZzAxHZLH57tQD2MQTMa6NQxMLndhgzERMgKiyXFMukEJAbSdAtueGVH8eKPFSw5rnfsYbog",
  "key21": "2h3uTS1pxLQMPQGmMHDymDi2dRXMjKdPXbYAtWrVcab34aEvdDBfpBpxxTkRszppqgdgYkeehDbnBcgGmGaoRKGr",
  "key22": "2P79DHdNtYSvGiYZHe7zzsGFaHmeSMLTKV8fDtizKf6tEWngn5eWNippyYr8TFPoPY2a33BGBZuHKKsxXn1mob4Z",
  "key23": "5zKMskXaqRnmXM7pEpeVptpNVs9JKChuegDYyfcho1mvmaHfRS3UQ2wjf2sivYGzufusRcpK7XrSctyzx87hJ3qk",
  "key24": "5fXiscrz9B7SUPfbLuVKcuSYtV8WqC1rQaqeDozUcVTDfdLyTxeYppSGZEr3Kv1mvHQYt7Xba6YdaWNoiBQD2y7a",
  "key25": "4LVdoPJPxpLdW35QMNXkq19StTz5TnpmutiFMYsN2Ndq9DLV2nKH9SGKKghF3bza42sSpiRuV7KmcUG2aVRA5Js",
  "key26": "52z2scZk2dJxtjd8V7VuohUicQzZE5Whsey7kjy9ENF3Kvrws2SDpHBHtr2RtmfssaymZM645YnYXi3ZiaFeVTwx",
  "key27": "4VvCQTjhG3hZkFZbgZjFnkkwTQBXrNuzqHbMBPBzY9AW2qaJkHT8AwscQqXdsswtYoHnBjbVCt3Btnmaoc9vXqH4",
  "key28": "3zUmim3H6DqYrb3yNdv97NR2sf4rCENZuxZiXT7kTjTvZdgjRW5GVwViRUyGPotYfzhc8kHANewbFgLw1YR1H6U2",
  "key29": "4ufDWUmPuto3Mqf1NbvHzvKorTvbHceWeXRfGGUvQEXQ47ZscHbXs2x1YWEhXJNYU5f2aC6fjsavXdjhYy5MroHM",
  "key30": "2qWHtJAu38Wnj2rgW4gxyPJE3L3kyCrUSgqMuHsrGiyS2ED7SroC5kg2o5GQLE9abACminMWqUUosaBNozSTRLHf",
  "key31": "4iBzSsk59bkxLgxLEiEsnKiySTEqgEiHKtwAYKMqRtmyVkP4BAeeNAYeW9XubX3maCAEHveRRiCLo91CiXLsBWjL",
  "key32": "5sci4GZBKSM6Zzf3MvwBdHjHE22oUubDPP1QG8vco7oYqwH2fD67k8JnzNFFVpySjh8ddwwH17AHvgwGX9Yxfzxd",
  "key33": "aybxbjti4HXiCmVYfWBy3M46VVt7cymLKdq8wfQRkFEuS7ZSTJJShnsbZMVt31JjzXw5wvtg74Z6SbhUN11uRNn",
  "key34": "2HNWsFz6yzBEmGiu2wSC3zHRhj8tBQ5vZT4ZfNjrfRKxoJe73x1gexr2e9Twu9AsLr4Bq8uHqYesgEREdeQq9gmv",
  "key35": "aP9mpzhoRWXP6qDRmrYASn7ofDfzJZTMNH7od3y9D4BarXPKCSSWKuZreng2V1DMckCxxSqikUbWMvBBFDrf8cJ",
  "key36": "3sgV67Gb3dPEW5mLw3wQ7Gaoxvre5cWbuhs2fMf3zFESmDHAcAdiuoWqwHmPV7CPKk9v73eRaLb1shVHZMSSitLY",
  "key37": "5no8htQBo1tbDGQqVWpBeKJ6P1zni9eAcAsndsmHeHiSSavmYGQUgM9sheu3Vrr9kB7ANGinmUhWeSWac3QDJjzF",
  "key38": "4raHbkuAhFVYRMbrUXwnXSZvmgi1um54sfj8kk4uGfRTZMDxkpzmnD46oGbjurcrnYiij4Z1LSiwG34cDfYxhbiA",
  "key39": "2a7KFqmyHwqopqP3e5V2ubgFmThpS2fMXA88gwmgqBjKwcaEHkDh5jo3qpPnjo8biso6N3wYPJeSRa9ShFrWXMs9"
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
