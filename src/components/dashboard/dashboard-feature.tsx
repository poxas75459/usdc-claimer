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
    "XY6jMMaLpX39aLBRW5qz1Gx1kEWbbQbLivUuKNH2hwpNVZec2mH4XiKh3Pyn1gCJkNMqepiZrJSSa9GPTkT5WsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cxkUatF3zs7yCVzWvbucoRiq7r3nbgTBmoZRTNnvRx6EFdfMzZreceHKFMhFXTbiyHyuQQ5khQ9NeizLgYyfEx1",
  "key1": "615imc1XipvR7VbpwxBDw2QHH52t3Fue1Mi9SQ1hDtKAAH6rAjLeH7trHPaDQhBk8tJop9bovw34K4SPUQZnkXez",
  "key2": "2kWx5zXAoiwDAUvxoKzochMgk3MtUCp12945iBhYiLvTpmjbxqrPDFS3qmT8cVf6dV6MNjTq3C6nXm8TFMdmjhzq",
  "key3": "2DDKV3Dobsh4tSZ25RbysjBH28B4cbWD18F2sNe5f1wiDeFCiJBhk8qwDdCuD7uPhYqMwrX9KnjXKw6N2zRVRqXR",
  "key4": "4ccKWTnEVvEN8BSLq9o8okcwkTsdEBXopiXhmL3JbYBtfFnXLti64zZjsxcMkD8wtzdmehCyioqPk6iPrY1eVhUo",
  "key5": "2Bb1gVeGMC2rowULbW69ypn27DvgrBeXWmaJ13hA83WmUdRUjRa2V8fJgZT9uqxMTyXuTsWb1Q2X37piT3YMJqEz",
  "key6": "3WjYQ7N3SbtzyTDw5sPSjdMLxrGH19GkmoQUnRqod2Kqp7CtKCdh4joP3pkode5ksvRPZwACebVmtohzzvgouzCh",
  "key7": "4WU9bge2nmYhYKsH6PYoiGMArjYWyquk87n5CKheHGY39FvjRrSdbs17YoNBprDgS7pozx3aRR5FrhHtLqfHy2ez",
  "key8": "3BPoyB8N4naFEGg42fJBQQ5vWDUAZUmbSmhDaWXUyPM9TEtCeWwTVphN6uZsC1PpRAsjYugTqUxJiqHiYyPaaWrK",
  "key9": "UxeVARvQ23F5m3XkTgR1zeStemJ6sfRthyGPLBTL4BffQ6WcKDSBr9VSZ5KNYCLQQf3J22Zu4RB57bzdNA9J9WV",
  "key10": "38HeYewfNVRZqBRnZQ2rtQw3kamrYyrfd3wBGf3Fv78csrM6VsHtEXgC2kr7KSWXRBUkAh3PZ4x1Jjw2Dv1uqiEh",
  "key11": "5n7zcGs3hyWF2Shn4h54KYtMTWSRCZwcAucktUYsCJNiEBMRv8VeJ1LYZB1Gr5SkYD2BJJDbCpvBXRGUkgfRkFjt",
  "key12": "3ZcGnZzFUZqPyACtQDQ5YjmHsD97WBQMJZSZmiSoKHvHUmWD2Nq9qwMjSZEW9JC8X1c9udtggDtu2EVK8BWPtF55",
  "key13": "2BhgVstvqT2h1Y32JcvwLviwwQdF3Mm7VBgsijwvNQn8GDF1CVaEg8bFfWx42pN7n2maL6o78JVsnfArmPeUXzBn",
  "key14": "31G9ugThQYuXP8JygRU9BBH1Uwoh1x9XDvXdgtN2hYXY7drBEseEbZ9AEcNfMXAkkdKjG7bRBkgfvhGhVfCJ1ftf",
  "key15": "snADmSWaQ1XSs1G2ydyrZuqPqnMiwVqhNAvHsJkFavmXtxXVBcATKdmuGqtrRyj9awXhQ633p8Eru1MdVLKEFBd",
  "key16": "zFTaATPBKVpHu2Q62Eeog7iT3ckWDpdmwbZicEdvAU5U9v7FtVxZPvuHsbFu8HCjwuYPmZqZpDpsSJbVme4YtSc",
  "key17": "3XknFVC3xcBn5YQrDeAiHdn7pJMN5sLa3BnGsxom62jxGWibg93RpxCHh449LeukmRpLxyW66nkCd4hbpUA8dMgC",
  "key18": "2pDH4tdMNQKmkfHNHDV3Dt17DyWDRBEHgt6ZASt99Z87cLcKwnDcj75UK9b8mrHiFushmMMYT2rJL7h4AE8vAjFj",
  "key19": "QERVR56qzKwKQhcUfoDXt6ouRS5PMXrxBc1azmqQxKsaEHgtrt5amoJV7kX4vAU5howfZYY1iUJzpzQQ2DdkLGD",
  "key20": "2A1PZVAoKfYsw62ES3gkUNxE7VLUrDX2tyLN7yYFQX31GmNwKA3zjzGXnA2efWhWV5qWdMpvTVJFDXYB2E45pKww",
  "key21": "L8rkrpqjQnS4s2kEGVia8Fo7aYQmCpDjYN7REetxNmGDie7w1qzEy6x6w5Hn638FUK2T7f37RieM43bkZ5wXzLj",
  "key22": "w62ytxV8rR2RCQJmk23A3Kaaw9Z2cx59SknweU3AdhfkgMyqojc3vvVhBqHMS5xqFkMCaGPTPxtPkCseaLRfdVx",
  "key23": "8iGGJgCZhnRQdivuBnhEWh2zsP5mb2WGHZtFVtgtDCsNtEtvMU86TCWesnaEPKhyhK8urqdzeZ6HAYvQStKSqD9",
  "key24": "4NFfnjjcCQifZbvCfPMr6hvPTYD5MnHyAvKqxSHdoN5dBGRx2F2Ucqpk14YCaE45ZRWc4f6uLVcu1CX6Zih6RDk6",
  "key25": "3pkamkRkhWEzDgBGEc7C7boTiA75kRKJS14wM9Xvfb2ui5B64S6sVDKAcUS85LMxQZCbeVoQ2gkpEynrD1xbHz1B",
  "key26": "49LC1A6JdsBVR2XZ3S1RBgszE5SeTBMtRSLfJg8T5Sxt5cjBUDSoadaf1Nph9piGVMgPbvmcPpLCuJ7nFjYSTB7b",
  "key27": "35z4Ysz1ce8PFqAk8Mxtkjg9FFB3BSDnhXjs3nS1Yd3HRUr3sjRA22QHJyadSUerKoj7cZWC8owsNJQ5HzymRWzo",
  "key28": "5BSuBcYoqsQtFfU7Dyp2MzH7c9zAKP44WQUojbicAsiUYZmjdDMrsfiVrztB5zG8bhaxCa8JvNfo6HLNo6CiRTNj",
  "key29": "UaGn4Q9kkJ5noHWHzWC4wNVv7EyN2a4cmeefExh8jiTk71QzQWYAiuvs7dK7rtMc7SFk15DaDPSDVUFRio4Ltey",
  "key30": "31c52XKargxR18iBq4LHpEewDs3eztUsGpFtPtwfWqjahn9VvsqNVfX7TShcx2fwvMe4neQemPwmm2mBhkXsLkD4",
  "key31": "42ejt8bmNVSX9cP5yNPHc6N8PXseUvyqTAQFXUnvNvZtvos313nMVvyAbHYybnPbwWNQHXBebh3aHqqyKHMjtFwV",
  "key32": "2C8gpiqz3Xy8JHv3fqK76gKuA8HeWuXgG7EcPXv8E2od3M8cAF34ZxyuomqupJjoAFYaeRgz6F9gV5552bxaoYYQ",
  "key33": "3psVd5WGb2tn5M59Ndzg1FNbA7gcfXK1McpBtLaP9uX9J7QZfoa9BdtbiCpKaxwyW1WywhQAqP8abYiFG1EnQFbL",
  "key34": "ZTpDtH8o7pPtES4G9nP6bG6agD19DovLxi5kPMBBeVjFAZNtvRye81poVqhinSUtQMhzneisoRN6uKHVwYx6hj6",
  "key35": "4pRwsSKjFEUYvZKGWSCs41YAw2zCJ6oaA7h4J8Q64SuTPd6kqn5UTBVFhhBBoEcGpGo8mbqxfnXKZwfZ12uYJ2SX",
  "key36": "64Ykmf55Wkyn8C12ptGa7iNwrnBqSC2RKHX1Dwa3KfJH9QAVz1gZN7H83jLNAaBbJp7mQQqXXQGE93YMk5F6dnZJ",
  "key37": "33xbNAggFVwNVCnceojVmvovTUszNGQuLAiJEvJS7ifU1K8F7iE6NsXEkVwsz4q2i4oZn2BUxDUaYAw9Yf5dqMoz",
  "key38": "2idykhodDucHT8zanE9UrVxw3Ug3mBnQ1ArmysGU1iirwjsUPUAWL16yZwKeXoQRCXnxaLRr6UTvBJgVJeedqtGn"
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
