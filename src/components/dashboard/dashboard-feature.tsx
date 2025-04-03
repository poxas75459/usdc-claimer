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
    "K2CG4UJSMuXKBueo9qrrY3T2pH2pD74qaFY2WBYibJNKYXDafxNws5apHQRUH337s6za1WujHvXZS6SUDgRZLK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPh5R8qMH4RVz2YMoQqMw5eXTVNs1byxayUixX1hfr6oEZYn3iX3XEu7EWorq82z9k9rkdBwX9yyiFuK21JA7RJ",
  "key1": "FmBL91c97U264qpoVxoGz5DoZDSAUXCQFK1iArSXABKAECWjVGCtaZVHiEkVHreeiz1d3egR43e1v7JVCnKaEiC",
  "key2": "4FPYtSkEtxNNf9TYAAK8wV6K85iEvcicoAyqZ22TsgdW5XFya7JDzvcngZ7YYUycvmFKPHvm8jJyzVM5434uDadP",
  "key3": "ky6e8Z9PLi5ugP9yQsk9ZgH1q76byySCAg7F1sd9rdq7WJ6tHUB8zh3xAemKLm1BnykRMpr6WHM7fgRTi6GSsy4",
  "key4": "5vKZzDeXdAMJci9bF8pofsTQqbpd9Rg56qUZmhuWTHGpRH3oDxQTEJ4RUUVZxUGwcAphiR1jzuHUKABq1Wt2DUy4",
  "key5": "4LmwKA512ueckc42YA2trBW9NKKFKT62skFjAvVonRHsbH3oZQnHhdxmBozn9q5Uam63taXjnKoMDyBaaCim1Rce",
  "key6": "3Zj8eMjAUQ6ctXV5Q1c4ux7CJ8woro76iXas3ZQZeon6rHnLXeaTQp5u395VvnsPTR59CsHFYPhB4yi3T3TBQLtb",
  "key7": "5aaeEFCNT62ysNVrG9xhPFUdHZr66DLwXPvhGSBHW15ywm9J863HXhYgtNJu7p1eUhPfj1kijRc2JXjuadAdwf8B",
  "key8": "4GxWSKmfeNJrmj4BeBYvKpBP7mDNrBeP34pZXy8iMEDiYYk9ea5An9U8xvCyC4DjMrsamTfEebUbnGrAYLRDo3mb",
  "key9": "NzZ5XFDy42NvpZp7iGoqhKZrGNECcqNrGbMUHQKbDrDUqxhuyoV72zrXWAqrYkjzhoA8bmaAvSW6FQjvrW6LzFe",
  "key10": "cXPpWyNKYwfXMhoCmnyKTSVNYvzqbbxuD3K12y42a8tnSZX7nRCG6YG93BJeJ1VdFsGBHDdVEuGtuUodyo2MU2y",
  "key11": "3yafEBkHPPFnnSrc48ry41oSxHHeRWd5ZTmwNDdKd7f44YTuWM4zbaU5zVwcV9aPv4uqHaGmVwpyZL28nE5Lp2fB",
  "key12": "fkqCToksnuS4KAeYcnyphPYr1btTk7ZuzV3dS3w3iEp4w3bCivwm3eRZUcRsHpMxm2J1u5cTNvXhngvtu3wYMND",
  "key13": "2zMY9siBvsHSLeB34aAQhCWUkYCZPjhmLDu671e5Gnt1SpbX8j3FJfLKDH38svbJLwThiCyRfLKc44pe7xjNAdoV",
  "key14": "2xzhcvwtAvAtLBiYRYtaqbiKRwuweRJhC62Lg16jKJynGSrLDDQKkgFR7PjUqahYqxS84rGwmZiDZ9UxZAFTspHM",
  "key15": "2dgQxsSdfkaZF6yy8g7DES4vr8MVnWskqMiJMe2vR4r9JmnVVvaRL94LH2ZpAUzQCfzPzeKvaJUW1tKKCwKfDPXm",
  "key16": "8JVirYGfxiRoqn37aCWizVxJSu4KUYdrFYEyogVAgpquVDjmzyeyYbnUa8K4LJF3Z1gpHjayi1LNGBo2cde69FR",
  "key17": "5voFPnGkMHzSafzncsTaNQf8uawvyUkv7BgD5RfceQubPeo9enYMN6CedGfkWVPWFBzT4jC4UGqJH3UuV9bpy5ov",
  "key18": "2jmZEhypWfWwHi6LeaqhtdWKh21fjgZDLXqdmCwXREi6F3xFGvFdR4rG9rPATPd94xiPuhgwDah24src2664VR8q",
  "key19": "TdYYtsmvig7fDxdhxmDWxF3J4NFUQNP8pk851cCAxbooLeD58tgfm5fVwTA2EAMkPEaSfavYVKBZ52wVFDfh9EP",
  "key20": "3Ae4sYoz6krAvM46gQNBr83jMcBgnf5rBaWBgZ77bJoGomPZif3F717oBRf6HHY4yTahRog9sLFsyXkbfeZkiNfF",
  "key21": "5g1wR5sMyEXJgFnU3FvVJVKrrSET7PwASvvHe9bknW1p3Tsm5V9DdFGLytQnc4gQBGNUq4KFDgSwuwS3kGZj1n5G",
  "key22": "4aFXrqofDy86sk3Sa8nTyEhtQx6nqfhJvpgjt6YWLaK7LMchzdNdoqK3yVgNUuyLbCAHZ1SVyyD9L5sVLpzztZVK",
  "key23": "3vUyucetR1HiHVhuRZobQ5MJhrFbP6uFfzJm5y4gVkv4RB138FYvGu8ai8dUPu4DjmvcjH3sUYMEABg6jdZjanni",
  "key24": "QnJ32WMQdSPU6PagMhcfLm2HnGjtM4tih94uHS4cgvDmhw7ezbFD4yjNjpMSYtajdHjYrxiTjSoNuEYskQu2CKJ",
  "key25": "2LrsToJ8HvPquVkNt8yTzucNH6u9JfwKx2U718vsJDmsyUiw7fbb5DZfMvB64GPfzar7NM86Her4GtRZFzyJmPaM",
  "key26": "28B7MqTfRAMNHDycHQSXuRZRfRcwkVD4dumZRWAhJz111GXqqCiRsPGoruvnE8DwZZ2BzGmAjbo2Hx7EdBAQnaQj",
  "key27": "5F1tVz4Tq3HEpA966SwMrpkf2wce5NE3uQrfQxX4XzitEf81KCxYfdMPiXmhr8ELGLzuotzbMQUmENSb4n2upW4o",
  "key28": "B86c2vQvLAqzCNnFxZJJGX9pk77eC5C2c2JxtqXTjsG8AEkcyxRTqLXpBEZ9EPemCkDopGjAPKpkJEUtLeMVXb9",
  "key29": "4c4UpEQes1XHHm9LF9icrQyVzyZX2RC1b4quG9DgGV7PxcW49HRQegCWLHwp74ytpf3ccXzq6QyDHm6dnDsEV9vL",
  "key30": "346nK6m5ewbqbTicdEQhhA244mKp1qYGNGB5pPKYghj4jRWwFpZyABvfhYCwjcphq5aUqKWdkYKapXdPU15HXVHY",
  "key31": "2vF9WkvtukifQmEk35CzvMwZA3RXz4VPombLQ2wLtFvzxEsPxbSa3yQtUwNrpq4TjiphnDfWrXCy9awbbGoKxW9u",
  "key32": "3upvmJ2wRibMzYwnUD3DPSt5ySW2Z2RQKxCYwv57duLPp85xd7BzYp7gZpHCAJ8c6EcPVA65k5VTw4FyiGKqqU1h",
  "key33": "57EccswRbMj71yjcXZWQqzJtFMPRGfBhyFWXWD4xoJ76t6pc2wunZa8XUkDyLfYTH5Mtu32hHVLVuDzJ66bN7gsP",
  "key34": "jkj5DJG3bJZ4EhwuvJD4pwNzshc29qCcMPyVR3yCgWzBfTdT9HxHqE4hujaMRZ8hQJNV4MrLiQ2ruwnDPgRCBhP",
  "key35": "3yUoQSo3U3Jm4zXQZ8HweWKX14HJK6ztNQB3jWfuPCdumCiHK2u6xYLEyx2VuCo53eb1PtjFQz8LJjPWn22CUD89",
  "key36": "3cSAQMcbZxVRm4HpCZuJsYswu1RzHBZSfz74zm4tJDMsEj7qeQovpFkCvGKfMkU8MrduK32u1EXY88kkQhybMJ4X",
  "key37": "66LjdnoJdJgX4AkXhpvTQqxk6J4uqUvW4q3MXQ5opdN5HiHRfCjtXfDGU8mEEgcKw4dE8wwruAJbCxkaj2Ap7pxm",
  "key38": "5J6J24uPz5GGN5zUnETqKqHwnXzMieEkVWS7twSzSZmstQcBr4C7rjN5JozTZYuDqvyqiPqtEunVadHPo8TifjaQ",
  "key39": "4TVjSCqCrWKr5dE5Ak6wmgXr2M4RPQwAQ7ctaX8y5dEgcFZpKoRDjzRFk3AprRWC7pZmysG9fivdrkBDP89GTQwG",
  "key40": "MgnSwSMf3SPEAKzz35cBFkXeVTg7sjGaNkS175BTmRDvQQKfJM3AQ6SfkmPFZQztyJ6fJgKyeR8c2fg4iBrGdrq",
  "key41": "2WeeLFprK5PddYNu7SgzTw9kEAbu6uMUATbotU1rUoDAfo99piZbYvFS1GFH7DtmrAq5i5vAo79AH6vhLKPfM5Y9",
  "key42": "65vY2sanbf6JKkVetbA94Z52dgugHWwP3xrxfyULuAmWhxA2Tbm3jBNyroUDopdr4tToy6m6H2MfGpCkemwYmYhQ"
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
