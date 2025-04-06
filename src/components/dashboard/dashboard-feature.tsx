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
    "4VKDBtFZYdRcZc3MTjDttvij6JM6oCbrpdWFbGs2wVS2zZqobmmhLs7Vs2ky8v1DZzLwjvUf32YHXD9yMrJdaZjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UsNcXeEC3zKx3hTcABNafJipavgq3fA5erpKKCHu46eGcVrY52jELwdeZBYRkmBiX26MvzDxe7UNCGeHPSMUeYi",
  "key1": "47kvDAPBoqnH3NceqL9H6iRrVWhQNCivha4cYL76CUfdhzDRkhDPfgeRJjwFjacVXHQWG5soqNdnDpWpRgfuFVs",
  "key2": "4cnWL5nnPPqbpfF6kkn8yufVXjDuhzP2RzprJedaxAfXThtBDawdGDA5v4MWCjWWEL5cHtuQgFypmuKEExrdXoXJ",
  "key3": "2QzcmuHUNPHGhqAbbgePnyUD84zJcL3o2yeLLkAyJb4P3Z3EeDsFTWTdcrKncaUNbVeYx7uAGGqtDCUNjN4SP47k",
  "key4": "4ujkK9SkdXzkTtwEjJVz22QRv4318qGDnHmwrUi8qKEW5DBB5Eq1cMnxgEW9gTfXSL2BS4cn9agJgAL62DgjZQ8r",
  "key5": "4RuoXLRTJWcWEcw4sepSMNyLrfhRvE67rJuZAHFxmmExTnMfgwbPfnsq9nG1f1gTHerMPFALwiXgx6FyzpZ9atXu",
  "key6": "3NVEfezb6XrcUmujMvbqmFRQ8ppdx9Ce5mteZzAfSBiHd24D7zJNjNzizy7EivudEo4QCDa1g8W326edY99hEEhb",
  "key7": "7tLuvEGdDnn8m1xM8Fu7Mcoipn7ng1CHrBdLYi11r8sY7zHRvirgg1YUQd3t2AjwKeEj5EvVAshvS8UVQR8e1h9",
  "key8": "A99rEQeZ9aa9w9trRX3cYFbTicFgqdrqF1sRiZGdg2ZGtg7eBA2D3gUPYdf7yeEyR9MCFTdwWrbzHUYmV9Kdeth",
  "key9": "4nn4KLrh7Z9TQQ6aCpwpwyFppxbNfJs7boqTT2Kc2budh4FXQsfmjx95sqFJcvvhd2qo6NNkF7WYnLxNGU8iGihy",
  "key10": "VMF8FqMJqPb9LrQ92pE1ARGjbAFbf2xL4idRetTC9n8A2iPyDGmJsNxJB7XNLr4sqgvSQpMng9znVWsXR7vnnw9",
  "key11": "txQGqLfHSc1MJ6zeRgcRvkmquSVbgVGTajNUirYocgsEnNAMxqGwH1jXivgnBkiM6oVXwbEyy5GMwVCMHbcoJoJ",
  "key12": "5jWZw5MxoNRTUwn79dRCEyHkULZ54p3SFTAV97Z5mBYURrNkCSzb9WsQkHoX1pcW7NqPg7nARgtkkSzCafoFeraM",
  "key13": "3JkndxvFwPM1LdfeuGQxubVmjFygE6K2GdoXhYQBuksg3xabTt8Z2PCd4hjMsA9qejCFjQuAQ1jaSwb99LpLhUwX",
  "key14": "66FD8CbTek1pGFQ5t2fuXkFgJmsijLUSwPSgs3q8tVLGDZhLneCc2LQh8ZNmoTGFTBcJ1rzc9Pcp64Cyw3r4vyMh",
  "key15": "5FbQhJkfifKfxkLksgkZ66MS5AuJJ7A6xHPayj2JDYRwafH4j9WmbrVLmHsZMTXAFsvoTs5KzVoWCTW5wh32UkMa",
  "key16": "3B9NKRxgx8qaRQLGB1DgTSk6XiKdfsrc3ojoy374u88zj9gaiH2tEoMHGaE2A6B5knT8nrN69wUiutfT2z6ZzZ3f",
  "key17": "S9eN7fwLDEkDvzq1Yusbd7iLk7GYTdJ9DC9HU2YJhrRiq99nzby6BRZgFcivj3rGzom4jMuWeviX2ew7UYMBmGk",
  "key18": "4QNttJyJQJkdSKzvqxi2VqFnzmqJVrpN3aGGa6fHmWvA5StyvugkqBbjytodnJ1GuFuijGoV1aqujZfzKtkYB38t",
  "key19": "3p9jaDDyQbjgvd29DtwUfR57KKLaJ8yn8SfBYZyn7uUcE7Wp48hcUCC19iyUJNGxqNP583SLVyRM3wvN4ZW4pdEK",
  "key20": "2kQvgKShD1qJbsTXqw6RpFHAmocKkqWveN3jeGQptQS8zoxUfRSQgLkmcC4rCTHFkVDWaoZhhR3L47UfPcLUazhg",
  "key21": "5k6Lu6Bdph1WWNVJThqALnaHgVqKpRamVZV1BsHZjTMPJWbG77sGknXoQ4jKEgdvfbTh1haMKatA8nEGMT4Y25ut",
  "key22": "3byUq5PYKpBgyPL73vx5WaN5Lg9KS8oA1e6BgbC15VnP4BaboDuWr8o7frcBFZFdxB2gfBd9KhQthV7wV2RkESfT",
  "key23": "36uGCnxWdRmyUG4oHo837WQCet6LWZZb2suwMNppj339oLaFeAjpTzAi7Y4n48dLSUwZqBHUPTeGRCRF7C3HfiEg",
  "key24": "yJGD2MG4xPKJdhLdWzBCDmZmv7BkBNRoDw8QbTExydsn7cccWNBbc567CkZHAdy32CMf6UhJ8UkBK4n1pwA6ui5",
  "key25": "3n3e75113Y6zwdJiGnVrjTsHHAyx1qtcYrKGWB4wrS7fhh9eDEw24isUfZ7VhW8Q1fCQvJYKMdxknzJ6vYbp9djr",
  "key26": "5TeGFBXwNSeaa11k7arfUoED4ADjNAP9zox7A7L3P4UKEVtim4fqEUtdgY881smYUsg7cZmacspLdRw58ReU96h1",
  "key27": "iPgrVzqsjUq6RmmVCcU6kVC55h2qkzps4BMYMGtzvtsrgY6GFPVR3auJ63xDbYpm9XP3yt7FdheeuBeQdAaASgV",
  "key28": "2GQJrzURzbfnsE4J8cqBVZYX5dBiwDfqyJRyiXvGFyVkEj6sc9cY3SAwHMz2C9sDCWZRWyWRShipYDQVcuv5xyTU",
  "key29": "2LkQUQzfu4icjq3EmCZT1cd8E7zbPenJygUXK6MeyvzXPJy1y6dx65ayZJJPGPd5NkQATpEQPYafbH94tRXc8Lvj",
  "key30": "3vHPt3ivveGxcPiYCsJy6rCwxDoDxiHLPaNhHvH19GgzwPpv2qtLs1ZJXdZcZYD52HNB9fLNqL1u8viVPmgm2AqQ",
  "key31": "3HpYg88PW4pSCBxdTw2u3tjrEhaWTcdTAvVAPxKN7S5P2JpkZRaDM4ovbKFgnpesNmn5bhKZvspShsSqjDztvh5j",
  "key32": "5iJvgShPeqqhKHgbUan4YivddY7cTsBpNXtKiSbFPko5rTY6FZBZ5Wx75PevnBkGBuqgkTYDRGiNzhXczUS9wnVW",
  "key33": "4nSAtHThjzq1Lmfeu4KPzhuQ7Jrdyj9gRKgRw5grbqDjfbEKAgY3cemnjRCbgRrJvk3ZMrugGgVj8g1TwGCCk7UK",
  "key34": "pPPVrCcPrF68Fxsi5JBgr6YzXjdEypnRGTrkYqzzdS6exk3SEp1y7DJknQ1NbyWDtLg3Ym11CeC8d2BvKrqewbb",
  "key35": "4KVT4P5NFFvxGDfJSWcVpbAnRer8i9jnRc7sSpJXgNbv2GACGDDJudCSXfmZ3rmFC9ysmUzvGY9x3TJyox2MAzdV",
  "key36": "BsFaagd96XnUn5TEBen1QgeeCrS2qM5VAQrp2CPiNnM4bhJo2werDH2ierfYUW3UfLT7tZS98xC9ke9BfEq7yC5",
  "key37": "45NvqgGKNNooz7SxgEo3P9pgwcDscXFxrsmDRUCqTU3CADoYXpCc8redL2ACnEWadvxpbxGMQGgN839Cu82GS6qY",
  "key38": "2rdquSGnDnYfsUu61XkwFwcUxHwUYLtZrRyjVw21etwnPF96DAS1g4vXSKVxeLgVVFqyD37tYfc5MhxkQqB7SgW",
  "key39": "2iofqv6FazqVrT5iu8FyjcjGiQoZvr1ewpvUNNBkTSWmwtSN1fQbkwRiV5rJEKFVksLZf2jiZ47Jd1Jp7NF4phmH",
  "key40": "5Rs2A1NLgBELdFwx9ing9nQtLj7KVg3bS5jLEbfqXMJURYTZEYToRRpf7aWRYs4VkYS3rdyHKEqrQPkDXsztS7Lj",
  "key41": "3D9ZrYQMm4E4wHPUtJK9QNjYgZp897JfX2ynjBpAoRi1nFNFgpLYJMDSGtLTa2bwAnWrENSeLpKG1kW2k36wc5cC",
  "key42": "5vzhHmD2xbUnHiVJPyNJi5hJEwQpsA7HCQ2JJdbfJArK6PbDbwozS9kSqLwQeVWdW3VqjBtwFpJiQeuCJUX54gpd",
  "key43": "4e7TYw4KGihf6DkeoMLhfPYjEJD6rLHVXpij44M4fCEfuJJrVhyY9UrUnrCmc9rfwzAvgPBNjXno92f7kuztFrWJ",
  "key44": "wtcnc12329Y13iKggJTdcoMHkP4cyuDB9FLc7c71mrbxpMEJEipZFv4YhzV72gusGp8inn2UYEDsjsyVpUb79Tm",
  "key45": "4w5qDaLhLgv7fpQRZV4VTueUnJ5CbAi27HgcU52VoMas8FFq44o1ZmqMZM6X4GeGMDAZ3HvDoVwCS8VYtXn84jKa",
  "key46": "3sa6qHgo83e6hHx7NQTgGfMRw58pkB3YWLfbvJFJsvS613E2VAinCWxQRbyHPgZuKfMvnmxyVJnmeqF1ox6saWS1"
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
