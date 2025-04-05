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
    "3DjAL5keKno1rJQDgQs68ByHucMAetgSB6q2czB1HSwKkJoENBKb1ckGc6nJjmuaksDNUtV9jPzpt3LBPNPiX9TR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58v4gY4mMNMDuD4b8MDo53LXzkqd2JGSvSmXkhmbHq6htD4gofmoViD49G6Qujd6xRxRZqQaCnVpcS8gdh1t8qHT",
  "key1": "2JLveEVsgYc2QAjYHiJF48F9CYQeX9u52iMYAkFBXA2uboDetTuHkYA9CjMbaWEZHfLvsJAaB5LkaA76q3GVTnDy",
  "key2": "nrY9SKcB5eBh1wwuoM6B8i7Cv4PwAAqGGEDxLwm98Z9NzLxM55zF2RJLRGgnXWQ27x5918Gm6tYq6QbB1rhjzjk",
  "key3": "hGNqC2bWoLSJirBzZ76yLgD7dnfRBjdZa26J9i6rjCSQ24jjEcsn4pwEcL8u2qR38J1UmB2F1R2nBA3fENBtQma",
  "key4": "3dcNFMFk6e1pnEbSMKhVumzVbuCBUTyxwCZNQuMgSrH2csVk5DEhEx3zDjHafS9Lj5Mqtsw7gGGvU7jbUvdd5z7c",
  "key5": "3FU5bhJdBG4gkJstCE8tE6oYRCEpmaBu3z8uUDgVxB1iz9XKdK9JvF3Gv9sjENAuoRCpyrVp113L1tUjh3EG8qkj",
  "key6": "JQjfzsqmTbRb47etZsndYqPDr9QuGgS7hTCaokc86C5zB3N5s5uXc78qpRoMKYMjW29XxjNdsw7Wq2padQnt3GN",
  "key7": "3k5s4fK2V2PtosG6odsLx1np7yzaMH6wWt1o8TfjjCnDubZGap5FgtvUBp2pG3hva5Qie74nJVLc3m9YDqPd6vWa",
  "key8": "4HgG2FbFgeJVbFHnZzCz5PXY7UVWbMm6nHK4xzv19JrnCGH68Mov4aQWTomCwdDaiSfnmK7DVkNmSqst5q4VvPdk",
  "key9": "4sTHD9MAGqvHtfvCV8ge9JJXNUvaTjU6sWGZ4sQ1Z8AhPq3zQ8RKdtyb7MPGZhGYQcWnReWQb5E25ayH79qTcBF2",
  "key10": "2tSi2GbqH3ujM3NisQ4z23o8iq6NvZ4DWk4y7gM99RpPW8u6vuabNYuSPtFTMcSCdqn6sGWVuv2gH1FduLuzrrTc",
  "key11": "54fUYpkT3KAEjq7GdGbDcFWXmgrFGVNWeaBkC2tJM9e4ghzUYWBwHW24fncwNMntMXybxjoKYCasXDe2qE5bHMWD",
  "key12": "2hAzo7cqLqL4UzQYc4XZvLgV6s1pGxfYHxgmUXty8g1WSn6yD4RD3gp8AJH32R4iSas2LtJLFnZuXPmTxxXxnPFB",
  "key13": "23oTwHr6dWqbzjLJWhyfxg4afSPbaiTrj8S3G8d8m24dwdf4NpEbBp8ah58uXK9AtHZjkAr4bozzDUt4fsrRu1De",
  "key14": "4xMxf9Ku7qPA5iWX8mXnjaVrUc3VP2hhUneS8fvDwCukcN6NvYRqgugmibbshGH2f7448kVyMqLp36LrdDamHb3V",
  "key15": "2eqdJD3NjvmYiW8819mQDRgZQd4Hf7C6JUFhfW3fP6YHjaYEEyPwyY6nKwHcBPrJwrz4GjpCSvXciwo7gyroMzhG",
  "key16": "pgKPupPuDmfWDfcxssELSZYAs5EMVZDYnVf38zuhozW1Rf8XM5cETRuP8VYw32YozZd9Yco4xs5RyNJ89FuVdBH",
  "key17": "5HDZC3rub1tX5JDJgojhBEKBQZQBfVghi3VrzCeCWW3CiSUnEgHwVqUZaYpMCqQ151newqbDsWEiXnZqCPBJCwSN",
  "key18": "AUxWNi13dCgPKUBTxoJgJviiPqPj7GMvKRypRPN1hLsBmMUtCG2qBGESzVZLpqbLsD11kvcs4ZG2HpZGuA63cTf",
  "key19": "3PQcXmWSYtqjrsKSGVB2XFFTDUTRYKP7a45NkV4cf87rSgMkC215fD21e9S5qiBk9xsvMKpLCfWaCgFGfit44RR6",
  "key20": "4Y5YixJzuNgo2CiUe2xpZThQF1bFqWDcQUStFp6HSoGQ8ZGuP3go82W8JUz4FCuqcNX8VC9CoASZynCcF7QuypeB",
  "key21": "5w186YkyMR3osNzdf6ZeWQWXG6qUFgAQVTBmhPHAGcG9fYhfdZEtoGzUmnus6kFgFkU43yd5Z5WTi7H1NTwxw5mF",
  "key22": "2oYxLtMuhF3xM6nhbECpZ55M4afT3pSDktFwiXVPpFHURotYVqTigWSTkxCPt57BrKJ2PC97Qk4hhT7csYS8rxvz",
  "key23": "2efEx3WguhRrj24VUN8f9sSQvKi9jXsznMC7swjM7AsVW2uyC83Q8NyT5xtk6JF8bs9erq2dbj62TKD1z6ruZCHF",
  "key24": "KAtkZWUU6T8aQ42BP11meX6yD1j7j8Kf2YeVbfDzrFaDV7mWWQjdgHRwJBoGwtzT7fwVwhcXYpKJfzhMRnRPtjk",
  "key25": "5FjjUEsUo8CWPqRVFwe73c36TZYSSDt8CbE5YBkn2FjF9SKg5uv4hPR6haYr6bYaeG2xqTPN1ckkvdVzpaEcmAyW",
  "key26": "61UymEfEaAVMSijsaoPTbYR3RjyHyacWMAnNsNmHYJgz1Mc68qNAYLPT3cFxkgNLsG1SHdVfmT9Bdaj16gQsU8fz",
  "key27": "66z7Ed5cwc6NMAhJ3bobRCcfvF9h7uaCak7S9iWg87kVYCC4tk1mNCdqK51gT874rTsmceUu55giW28on3XQQMhG",
  "key28": "28mEWQXr3JUZCwmgUjN8bjKo4BKCHaku38JQYLPTSRJrgZHH82E3B85sjxiB5Uw6ztZ6oJtJA6fWeoSm18Azq4Ac",
  "key29": "4WuVZQSRfYYpKdmStbJSPwS67NZtT3sZT6NZWTEMyTCVKUsAkQMrCSz75fnC5ojdQ8N74NFEpfyFgqTycHgPay23",
  "key30": "2HZpndcsyUL7NhsSeYxgBPsYC64y9FZNbtn1WuGP9o41piwdR1hUB97NsumgaZZnwwsNChgMPAgL7983FvEeUnMi",
  "key31": "2Zwd5vJHgiJcetJSRqcKXapitnYkgx9dZqYX4FaXSbJAHDcB6baBUsNqmPP5tXgyrWQMiExTkzmcUjjqhzDfMixi"
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
