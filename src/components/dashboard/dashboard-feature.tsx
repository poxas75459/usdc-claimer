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
    "2eCFg1SxAXbLQyShV4GDEo1cybouiNWJvwev3Gf4pbayzvfeMG6G3u12BvbHeNw2G9nPkhkhPRBQ4mc9tZ2CW2L5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w9HgLwNbDQVsroMVNEkUrQB6stB614en8quXxgUkyD5keGDuY6qUhdetvKjUNZS3W4z7Bm13kDXZaFUw1RH8htB",
  "key1": "5jmy7q2p2kofqrPwLqq2HdSgEfZMr4qDZ3mnWxX9dvZYdE9jyx6fnKqoM7btWWTJB2LDH3szv9xhHQQyhJtgwcYZ",
  "key2": "3pR65gosS6dwFkWetB46Datvdu573HbdzFX4BT6eonV4FdKgTUYwV1yPsHc2hYkVHjmEEY6EDiX7tgC8c2VAAk2Q",
  "key3": "28VktiKNGX422YXnHEZy337nNXsbPZZsz9P9VRcMKGCQ5soLGa6vLBmgrExmBP5NCUoMsrDJiSBFmFghcu3HCSo3",
  "key4": "28hpX3a65r24HvuD1DvG8UNwt1Qt1cpybSLoPRXWvnXZD3JW5v17mdq21nymvz1bojnXr9RGFLZk48NHzuzgkmdJ",
  "key5": "5oDFawnCbuEC7XEaSDaweo8MWDTtGPwCLNW7W1zf4tF78haALw8U3Gb8QYLr71iFZxmPPDwNrrq8UYN6tMZFvDt5",
  "key6": "4NXvtp8ezqxGHj8jkEctZA9Rf19w1E9uUbRyn6rGkDGA2egbvQcof5AvLH2Z2ykXirr7W5PgxhEqAHspGExpf298",
  "key7": "2Q82YH3iq3Vw34HKUjnw8AhPPXFFkn9Y68Qn7ir2BdnxoYzYsrmftgbsGxso6vgDKcTdgMsSWPG8DNSnXwucrK7G",
  "key8": "2WdqXqBBh8vgZj8Qi9MGiQ9pBMNkMzU1NLSJPdufSeo8Jufhgx7WEJMNKwifcr67QH59mouaHiQXsFMyA88YUuw2",
  "key9": "3S7dNdyJjEF6mEABFmY8ZcgG1bzzQB3bMJEVcMp9mkKBe3ygFzxwVPq5kQR4Yy9gFcwuEGXS3wv7rFh2zsfk8p1n",
  "key10": "vBHcPMdDh16a4uLzttSAETdbi7T45nLe9nfPKHhuuzgiHUYk8a5gMkzqS4Z3oDg5XW4QX1XQiVLVoaCUvAYx9B5",
  "key11": "29rW87NKpSQnkZjBxZtGSUpiciBxxJ7LDXiA2q29tzBLsPD7axn2M1SAUAWP5do1ffyD2B6qFdrcySnu1iFWpGfX",
  "key12": "5t3kJXva4LqyW4KixkRK4d5bpnUWbo8zN5KodqUwt4VWX2wvhbfn7MxVjLVFbhH5537Wukee6uqCxuwYdbBriHFg",
  "key13": "kfkzrFrg2cJucWVU2AJSHKhdEWWJGdF8zPZjsMnPhu23Mmhae41VUe9jj8wxrTCKgemysn89Ytgfig2RMifMYEi",
  "key14": "H21w5MMbJT6fEwE9KYnpCXkVrmETJzuyfMdL3gnTA9wtcu2K1fPfmF2PNcjbm1APThVNnNCJMAGGeruVTQPtzuh",
  "key15": "3dPpYuBdhuCN2d11NCA87VuvRyioYcSVr9gvSkNwuKfWwhKHpDhqVRQS4aKxvQBAeXHc8SAEwmDTQqL4PH6Mqfnk",
  "key16": "3FRRPYW2mB4TBLSkrMds4WzkcxpvB1h3w9STwFwNXS65GzkG4U3bBoKTRuYqYuXo8hu4ujuuEcTuyxR2WQUqUzKJ",
  "key17": "Zh4UBxNohdieo6zmfhnyhoaDRsiBcBKDLULxXS4LErAx3PZVdddMb7dTM13VE1rcpC6JXYV5qG2kHnfiXxEUkm1",
  "key18": "4DhcXCoNCR97krRY15r5w9T9FapfF5Y23BnYtsbq2d1CFxwXLgotE3SUwfy8M6W6iSsP1HV1sW5za9KqPq1Rt52z",
  "key19": "3HWzdHNNV5YZC9FmyWnnjnJRcX7DU3v9NsGhwwE6gYSm2vwei657PwPfY3qAJp2a7hL9vEHdwUqM1cJ4qK4ug5e8",
  "key20": "2m161NawyCicwa84bGsQYNyMQpUXQWDJBvqmcSwNM8sL22xNujwhLUn3CzmfAggQFYzQpB3SEahqGQQh4e4pWUff",
  "key21": "2M4wgELwqKzKU5sBagaVtQSZGEP8VLgo6o6D4gfdB39qW1D5Kbb2taYR4WoyL4hF6yMtYgguZgFLQwvtgq5PwHfT",
  "key22": "4QwFpcwmd2cbX4gBWSG9TP3WL1ipd9i86fRgaqkrm2Fdji6uggnXWNhrzyvAdhDsCiFdJvvScEpYkuuYBHfMvUpk",
  "key23": "5n8NJRkFBq2aeZPLpk2iVtbCUBGy2TvNfc4V2bJpPQr6Mn2B6iyVBgkk1YzDRakfYv5grjYQVEHb5XomDqYC95ei",
  "key24": "66Gsv4A8TrRTUmNXjsfiYoDgf2LwFH7So3LoHTfzdpW2phqhz6QThRLhT2bSk9wWD7rdNjkx76dAKXdVz5dpqGMF",
  "key25": "2xv94mWjvbLCaFvw2y2Limo81cg8kvJKMRzVEcRN2PAWmp2NxYVhQWDCZx4tbbWrNkvVX5SrW3a24AD4LuUctVt1",
  "key26": "2vHsQGZJjMXNd7ujyCsmtV9S8KDZfkGL2sV1bJ8qPu2DyvGZZ71c5CMebKuyQ8kzDzvPzPwnz5GrffdbUvhcfzou",
  "key27": "49uJpG23uvzo92tANTRYaVkiwK9tkJ5y9mpZ2yC6uKqP9kj7psfhnrE18FLgAx9VLvLNvPrJ1QithttpucKFq7ED",
  "key28": "3EysZTjNcehjNca13LFAGmvXaMTmZEBf8sYXdLscwbwaq7Lto4N7KMZFsmNSUYEkx9d7vwq22WnHj1g3XLuxP9C2",
  "key29": "Wt6TcACiZFf49zwrDbpsQSHBA7q9Xc8rbimb3xTmpbVNwYgqrnRUvUvgS48EmsYEcCuwtMCnn3ASqGPrWGxNKbw",
  "key30": "oqxNrfyq1X5edBNjExEG3zA7F4JMBoFaimSU8RYfgmdGT45xgBj3TxzZP6ZKYtVi4soC2YQrde5tbFmKyHsMKL6",
  "key31": "2sPf62BVyhmuRdcKu1tUpGjJarJJaTTE8qvQDX1vC6yT2gHKgZG8HpuapbuBcaUH1zZN8qw2zARnTnyjkyHqRbLa",
  "key32": "225vpGEAtU7PFxU1ikrqJKGmXUf3xT4XagW3QNn5aTf3ReWwegsRBTBDxkzKNLUp24Dc6c3S4kceffSnnk3NztfA",
  "key33": "5DXmXnVrDBzLfJLFjVNJVDgaNRNBPUSSx8GzH4tFXaMzd4MxxsjuTcwfAMvgd2coUFdUJX524eTaynNvrLhBZwcd",
  "key34": "5J97pHLsv3cJT7QdaTVYYmCjLYkABftMMN73fK1FH2YpHkh2GsH7cmDga99U1JxTESQF8VPcLvFCow8tFPjBYVbg",
  "key35": "2SsNxXxjhxJM291B7PiJjBrbxRn5HHjqhEZ2kM6d3zxFkXC6DaSva5JDGMY4PvMja8dfEY4z4H5PkN8GXPt8ika8",
  "key36": "SAsbJsjo33WJ6qQcKoQtmc9c1He5cWLhn6ehKiMh1ZDx8TabeCdDmmeFaiYKgsob7mi3t77HhH3xmyrFaH2s9qb",
  "key37": "ksfsNqTkXnDbsoihDx39FGgVDGbSEJomh1jK8rgXbYbWcstZsxz91wsQDaF62t3ce7grgHv4DU5yU9CRYstQaB9",
  "key38": "5Ye91xFNQV5bGYKErX6VCgaufjTg6mky49sYH6LCtUVcpkouYjdjb8gTL1qYsfnQMJ59k6EMACAbgXNvsc3HGMor",
  "key39": "647ueAiS7XGDbDFVvXpoaM6QUnU1CFkyLMAAzaTuZpDn85PKUGroEvh8U5Ryvf7L3eDftE2xq1AMR97c1sWXtkN8",
  "key40": "64jFYaEDxij2JTfWgw5iYMAPamGYV9VRVxrY8w6gmKaPnqU7ky1AEiN4812mReKaRcfRDiNhXvyR367uM7bCAYxr",
  "key41": "3yj3qJYTGZB3R7oNzDTAds5yWXhn4B9hhGnfcDoTXJPeCgBVJhmjtwvTYhxw75C98p1t5ohHcuPJk9yCc2nPf8F7",
  "key42": "yAgi7z42f8VH2ns8hgPgzex8HhD9oMfXJCLEaw8BJduupRx6MhNT6Wj2i8m6CcJGVaT81H7p6SYjSL2KiJhsuw4",
  "key43": "45xJ9d6tY2hyLJBhhhYt9y3gN8jvJaGMqZgPjXKZbuhEfTPUC4bgvroAGUWZjZy4ziBaidHvqJyqSEmvJWcn53ap",
  "key44": "4HfqjG7odP7CBVbrR8BY6Ah1uaSUeBXTaiAEP5EkXSEX3NYY85fFN8c81ZLXBNiceTxBSypBdNBptDQeFoFvE5zu"
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
