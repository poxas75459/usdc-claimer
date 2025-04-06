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
    "3R8MAdkVtBeGWzFQKBbzB5Dz4KnZsvhnNH1AowAQEwpXkiKUjvgdTFQt8dYni9TaBwBFgi8UvKmmFRgEwHJDNY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PzbMbpDB1YdDnMyjvdEzJgLbb6jXvmrWkh7dwdRsZNVDjFNDhMHyT4hAEG5WxhHXyHfbVxbYa7zndaM3KGnQmpq",
  "key1": "21osuWWVwDp6rD8yhKRaMu6AYUpyTaptqD8QNdfz4AKkrvvLchodS2kCVg8qDscFvqcuvEmdNpwaVnKkMPMJVYAq",
  "key2": "54ZRvvcY3DnnwF3A34cXH842TuxjnZHLFL2FKzbbSXN2YHVVn4qNrmWBsZhAqkGqXFFf5X9mQpt9t4z5c97MZdc",
  "key3": "4oysF5CTnZAP87efTAkHsb8xJTj7nEP6qhB6VTTbxAxcDDWPEVw3SDH8URSNnKozZTQDReqXKsJfULmxBYdHqci8",
  "key4": "Tqw1qCAxxnBS7zrGBxLehuZa5rRcdEyZnEpPfKoSXxib569toevsBfBUYk5XRb7Fiq2DG9cRwsuQ6HMR7AHGFJf",
  "key5": "3SYWv6XYEVbwcs2YrJ47ePCxnFno6jX9mjrjDB52iN7b9WLNeL4J7PX5Y3ujihNA8TnbeAJYosEH1yyGXRoVHKcf",
  "key6": "2RDYVaq4oW2UWj84RWRYsJSEfTSnechdjpxvo9fAbeQUS7yGMCSj1nJpGZmrkGjTCrtsDyayx19XnMjAWCznwfKo",
  "key7": "MMZMdDFSDqdGUNARD7rP9eLyvso5EyTAgkkwfK1vajJpzDudLDWpNTHVNPy8XEJeEyuBaY7hmLvfekPgZxRVVaL",
  "key8": "BepThmviM2euxRCi42dkXKXg6xAs1TEmiReV7Q1LJtDwgh5zuZ6mgVgGEk8HJU1jgytUVQSFFoPABjoHzm9zWWF",
  "key9": "3sX1eZkgd6DqsTCVq3XGHU1SsX3whNoVE1AvS5FqvNLMibKbLeUDHPJD1vAy99byNvCdC78ryuCuJtfkku2Fq31m",
  "key10": "4Nkhj29BQS1nRV3ncTjVVuhdiPqpNkBY2rpeZCBYGp6UczYMvy9rFv7iLB44wJvmWUG3nq2Qe3ytSjUx8BXmzwz6",
  "key11": "Nu1DLmQzfefD6HrsrAVck8N52mxudh4CFhqSmsszS9cdEYVYnrDNDX19qH4tSMpX5cvSQ4sKYjtPB4wVJkxAeap",
  "key12": "4oiroEUCkg9u3yePf14Ln5EVvSAAmR9bFew5CANeThR3TAQajSeKiHW596bBVXVtzTCCyohonNgL3YfyEaHTNFeX",
  "key13": "5e5eppZfrXYsnqi26bktpBWgQpF75XsNLuV7yiFvkTNkeRTgUEHTxXjN1i7fexSpofBrqUuA8bg8GX5FCuZSb7TV",
  "key14": "4VZmxPQZuG521agWN51v6ND5uuGg7JVntF7wsQj1R6vsfkVzrup66NTDZakeM36m9Gvto4q4r8QZ9r1br6ndCsrg",
  "key15": "3PmndZBXjLNqzYnQzjdqBqmBYaAhiiZXRBYGfnZB9JQWcYuFHiP6npCXzLpDXj2763Ceo3t4bQJYJUwUR73XYGEA",
  "key16": "GBhFUuByZ5GXhME4fvURfFbJQaHp3spzD7mx84VLW2xkW1cViYSvuWxuVEXo1iwD96DKcPyCyNS6swmaGD9bHaC",
  "key17": "3TXjV1q3o2CYeYVVeshVJEoqhQLesANwVU9GXkJwvHkW6XSFLUryxgYUbhGAuDSviQUhNZjSA4rfRdkVrGxx2sri",
  "key18": "8G6ygETMtQcXeLmBfnHWTTLrSHEKiAtZb5MATqqpEvGLhKipHXH3EjCPapfjGyAU877jGABDLGVkN1bZD4q4TZy",
  "key19": "4ic55AaowQAgQcuCpmJNHzw7iGW1kCTqHm8hEU32eqrimYpcwPMstG1JfoRm2wL7XwoJYYzjwcKr6AfAKZPyP9n",
  "key20": "343PK4ngwfdbx1VoLpVSrspeoVN86DKUpymEv28cRfLdLzYngBRUkDfAuN1kE8mrZKuju9EnCbyfYiKMgXYKC2uX",
  "key21": "47vxwPTLxewce6hSDr6FYbZe99u77dkRoEYE5d9hAh4698hZMbJ7C3yJmZkTZykmcm7zQA2bLYfHmPNYaqvEzMW1",
  "key22": "2cNBRkwMSvouZnwMyiwQHRM9itozETAYajP3KJU8ejqiNz4qKepqSpQ2V7EoqsvobAWAm9BrU3Ce3c1AANTCtzUn",
  "key23": "2msQbqFvZpuZoKBQt7pyGWv5ozjKTQbemU6sSFDpJbXT2rPXdoBN2fzxzQBTbwis2n3twgCU8RrRdcbRLUeTXJWM",
  "key24": "4AJU9nqmhQV69diRFSygkatEP6Lys1by5GhyJTVf5V8cXPmwb58ckxmPwYpH6SGTkDP3DatL4UvcGeofHhgPhsh4",
  "key25": "3fGgPbd4q6GbhPM3FqyjKXoYaN4AkE4fcZYUUST5GqXBjbuveNMA7xEHCNmTayNNsRvHTXd3GpQqjRhpdUNZ1uwS",
  "key26": "5i65ux3GDovXXbkQgmwYhNzMZqvYErLfAEuE3KapC2Qk2v34KXyNck45rpaGw5CKDw3JPA6dQxSmSSxCWUoPSa5t",
  "key27": "2LL9czA3W1KuDWTxE5WwinvzaNQ5soWsXuJcprV36pksa4SUYDZ8Rm4xKsZkudFjncutNZzoAD1yniLRnJhAxtrN",
  "key28": "4w3xt5t2RUTooqbWWkzzSMjK1uaXP4od9XXWR5bukfxPQaBd52XvLCzRBeXPEjT8uJBhXigrJxdq8ss6KgP8PdtS",
  "key29": "4H2GziygU7pAL399Ff9EC7Gq9wDM1Am8vQmmaXzFezdfgY51PWjrzu8mVpMi1xHQzLaumgcBnKrSxkw2GuzD9nF6",
  "key30": "XEPMQ7F8wJjsWb2uPAdWFnTifryT1dojZNBfBEJ9VGrnWSYhczRbDiWQqSSqFfffTajmNqwqabFbZf6MhqiQoLo",
  "key31": "2ZroQ8q52UAaY8RmshXMZCciMxVLsptWYnVtuyCmN8UJ36XKXcE4egPmPBxFThtfSovk46LH6rACBvrTuDKrpexm",
  "key32": "2WjTMpvFbp3nXmcPUkDUTnXtMSAqJAqg623PfskRUraSorSQ4FoLTBCQn44dCzQFKZ3F9L5j2b1oDdWrZNh381TJ",
  "key33": "3aEyqa86uDexYsRkFSE98xEYz4nwn8ezbdDJVfh1NRswpvJDfvYSGEPjse1QSkwoK1wEUji88GcW3nA6Z1xBsa4f",
  "key34": "2gUjFZMi4N1Pvpm1U5Rj5aASAiU2c3BV3cec9pZ8JM4p8uXHXkjBY6fZGqPWC8Pkc4Aei9Ci4Jhs79S5uajV4VMk",
  "key35": "2adpMA2jaSrvqqWWUJWCrVRHSRebUWUhTXQbHXJHcXyXaGiyAiz4zm6V7upe3dwb6pLBevDYgEommXRZFs5yd2e7",
  "key36": "52M7qrCVmTXZDVh1d2gK5ZKuQ8SJYq8qZmdrTx2U19MzvDYp6L9YzmeuF6UiHm8pdK7j5Pr3FVwzZUuMnsoRpNm2",
  "key37": "61jeYbHkXyRzyvKmZLrSqQ83mG5QNwFWQLzoDr2LnHQzSqciJbESkqz9UEcSQ4w4QqMQTvr4ZYfHnvwbKVNYw2r7",
  "key38": "4JYu2cgFL5xVtKvuou7dPXh2gEs9nQ6FHeR9A7DvGjQwVzrWSCuCs7BDrjotrwwCQj8uEwjQ9G48JX1J5cB1wpfm",
  "key39": "HpSYu27UDdSWEdLZLMXimH2BAfZ5Q2Qk6CvKamZkco7QaQi8bjdJKE4bvxzqb4KrTzKD89gdGhd61AFoctseARA",
  "key40": "4cvo68DR8va4yKSBw4NDJEtyJNFAGcLiQceBHsswWEBiKLGP5E1ytgWxDn7GxS3Za2LfjnwotzxURknwVD3ayudw",
  "key41": "5BWHKfDWh9t86gdyDQ65jVyfXzqmAjLR34TuNAcQEUjB8cdD1fiP6msB9NzaRh2ZnEi64uswBYXXaDxMRGNKeJxV",
  "key42": "5yuv9wZ82aYWuraySe3EnWMBXrTZT2eZ3BWZJtQeMHPXMAWq7UT3nnikicWNTde8KHfgLUSDGYoy98F6cnJuT2Fd",
  "key43": "2o2sXnH5RPXAi3nvmtXvaW4swuCX3ZTNxevHxkSdb8BsUnEXupbmuTQwgh9a3kZvCi6Vx4oNgjreBrVtfTQ7AtY1",
  "key44": "78y9EVNgHWFgpKzi3MfrefuVVBMGCXuwxeBg67HfNBWxp2DyAqeu9GreucY3MMqCKZDmpL5uvvWZw22kFt5S7N7",
  "key45": "3ahTsgpP7peTwFRwKZdUxdamzdFHii5vdh972wUUxUjqxiYJjS3D31DSTKZMKuHUAY5DdZzzWmHbQkGU9hBDLJcK",
  "key46": "2evuPeFnFmXMvf3uUmPHbd3my3pSDdFiXJUBTXbmBqEB154A18VMdCjbtfqjixE3VbmvzRRvFySWhCfx4fZM6Vi9"
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
