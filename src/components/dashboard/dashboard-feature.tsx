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
    "2AGubRGMnFnMmb6UbUzEByP3bVuXx1BDEFW2VR1hGWyicqsofgdKHS4unj2ZS46SiU44ukZHnbAgQ88pQFTKvR17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UtRae4zqxoEpoA8zLhV4oRT1hKqdDreAGjzfeMuMS5pdRpk18C9jE3yURG2WPFWFkqdbmdm6FkdHza2PsFjJRxt",
  "key1": "3Gtsd1NttXT6vwPyZn3PrcZFx8HfGTa517Kgvzap1NFzNhTjs1yPXMayaMzqXyRnVZijiNo1zTLqnsdHYmUkZ3DV",
  "key2": "4UuZ8Sp52dmNPmWNuSaHtATu4y3UjkZ6XFbGMLufJWDgFtLG5XL3sjimck75E7wbRbsTfKJdMizStJA1p4Vgr7M",
  "key3": "2bDwsWsfYZS6UqKWbJUgfbGx4rekHTaMEVTXbixwZDMsL7xsNUrsYsymT1t5uMjhjeSkZm8ncZjSgEq2HtkzwtFN",
  "key4": "52Nb31EGi3CT4gZr7G9D2XkYWxhigPQjYqp2n2dn9UBpBecuuEEq7dz2khScMBu2rNgUSoXF261SsrrByA9dbm4x",
  "key5": "KMPvPDCdHezTGkMhaqVQZR9bpiG5dd42FrqGiQ1ZK8J7gP3vT2KVVWhgfutA95i2mngYzhSMKUmsbRBZKzuuUaq",
  "key6": "2cTUGF6PRx5EvvrrPV897kSnXTfzFsLgK37JJdfmKYN1GuTTqVMSutJ6wKmte2dtsWwup6RyrnqqtDHCCwVd5sx3",
  "key7": "5s1rJ8jTNyqr3jXBs8f6LYmDiXXuLUoQzf73UVTMsU3KJ7ch6fGsnf1MXENhxbYh7fyTmTmAVhDiKdfWrre1tSTE",
  "key8": "4DBT2RSZtF8myG48pADE5tBpAHbdvGeDpePwqpq1HggidZXGfZqHhZNbT9Ey1L32LUN5ZMAH3w3yfUFaVQ8zRd7D",
  "key9": "fUPcZzE6D99q1kLVNwMnvzqxVQ7HjZL6o9wDUZcJnVe4WUcDzG1DX976kmpLqKLht1ZpSnvFHfyVQMPUCdDnHGx",
  "key10": "3NhXCzMi8wpJjNABgG1XGKQmxiXpyHC2vQWosfpTaUE4j5YboCfGNT3rpA9nnh72jomQ3fobDswin6c3NcbAfZRc",
  "key11": "3HazLJDyWJ8VpTTzZX8XhhAAahBEe96Wigvuv7rCtXkkYjkDhRaraLxfK1nQ4NA2iLqgrqQxG33KeB4m3nd39TKM",
  "key12": "2D5qE1hcVZqFSesCNgEzC7Apy35CiRT5htS6qbCZ6e59CxpgXWFYTL7P5ypV9br72WJw7tY8GPiG9KV9m1y6jXUW",
  "key13": "3tmiGErQ3iZSBp6iJrZeEparRs9BKY97vYHuarTx6sfor3gkrZKEkuiLDtkgZvtA7wBKJUDPFjL4veqbKLZsmny3",
  "key14": "4caR4h2Wd9sGaMu14BHo62wLKLLa8iFyxR3bmfRwMEPcsnv6iAG5WesvtjK3dzdveccNJwiSR9GXZv7BkTWHcQ9y",
  "key15": "67Xuq5t6H6oVPdGtCco21zQP8hd7QJ2Zzhza3cEjrHesirRZSPubzjnh3dFY3n97yyEinyhSPxheNMDoQiE4rUET",
  "key16": "2hj5cTd5rn2fTK3KZubbNNyjgcyJtVqgMwHNpceVpDd4cBNPKbrBLsk56GgXL7hgtCtDxkLW7uHxoa82BAxyZa88",
  "key17": "51uJWYTFK9GZdupMxLDeeAr6ASP5nT3BW3ZCSDGaGpa4mqpTjyy2NFbNBAs6CqGDWfhvng2vzbh4NehHVFLyM4Wt",
  "key18": "616ndp1uz8PavvRhXTjjj1BHPWwKiWJH6LdqewKaGXfBwLYjPtxFnL8KuHv31qCgY6PkwK6XN3KLCe5mAbhazpvK",
  "key19": "5Qi6abVseAndtDEK8T7r8WzDfnwjsjapUsLpUXbC9BtzwnVrP53FfJsEshQmWm2qGwoMuJ5gMPBrEUHTSg1oXgKT",
  "key20": "nkZmPVxEXKKfw4xM6yY4YPME9WF31tXujbasgnfRT6KP1N7jYcxEwfs4aLwgwm9kcLPgCcpcRxZMAoqX8Zf3C3f",
  "key21": "58bwrZhMBveQmCU3mJMAN79WJShi5j147HM81QqNY4rSMq5B3ChYmcgQq9AZiqxj3kCarRXYvrDLF6hsmdKmTsTa",
  "key22": "5fgy37FLhqAvJBCEhqMDhia2w8ux8GWwdGSMyh6sUaWjC8N6pAV9CniGPSUa9z4py3odfvm8ehzWrj1rvJkHttfK",
  "key23": "2gxdg82DvT3qoooyGNxDhtmEpae269B9NdBEfbnfHpFeSDGZ1vsETXjJghjcPfmi8jhZUBq39njgotb4ETSdNjd8",
  "key24": "34zw47Cik1DSs9tvpGdQGY18Lbat7u3oenCfrxDExX2W6rfrFBksxqp16ofLbJycQy4L3jkHnrqnrFWrYQZBrBfw",
  "key25": "hupcQRrogvWJYiJE3xCPyaHxesSLZNxDsWtSS29HWYfFmnZqotjUkUu3nSLPYSVzShgY7CS9tejw9yztwXKEFzH",
  "key26": "T6dASKQbHtnssAYy5a7kh1b3KN9D1fCZaTmLGhPWGgMVau11DM6CnJHNcj6MJ2x6AymDJnC6GMd9FM1fksvNk37",
  "key27": "fgFDPMrik7WaL9d9gWFDTtgBjLPNSyriYiiFpw6HJ9becvBtbvXHvAKZT4AfXbYkLY5U8MZEo4dj6JKuNxJsaN2",
  "key28": "34hsmEMLwEDWjhNKZ9bhADBfm9RDebexe1xpFZyprLDwhvhmEfrACqCdfa9bz1gLBXPEKX5u5AjupvsYkhM1aerj",
  "key29": "2jX9KTJ3agb21iwg14WAZGuLbLvdxLxjgDFCEfUfR11NrE53EyZiHNi6s8PvZZ1an5tmnv1TnrLMf1PjubeeKBA8",
  "key30": "3daQGG5DEhepvYAY33hosA1rnFaU56tpksawWQpAPVrsB8WtHzbEtuCxVgBrJQbQRg6YcQQPwveCfjZebQG1WmDx",
  "key31": "2eWSA4rixY9evWoVBg3H34WgmomYt5c2EGtzAfMpKNnzn5MzSUYGbT5PHYfugaMoc7yCTqagCgxZePbq9Kqo7rAn",
  "key32": "5rLCUGSuA9RD7gLxaYxHLKKPNzifameV8QKvHUgVk5Yb6zq8P1bYPQcgBkuXnPQRisQV7wUgK1pDr1PyvFx7grJ",
  "key33": "5RDYgTU6GpevfwzCR1YGqKDzU1x1LhfcU2j2mNENpa5LXWBZ1z1txbH6svXLsnewtmgyv6UoNTc2aVmVC44iD12S",
  "key34": "649CyW6FPQmqLP5D3sApGv3xkkw6qusf1GMagwEePtGoWkVRQeDE5YJc3K3j4TxuSrMrzcfqPodmDNDtr2Lw17qg",
  "key35": "mLGJ9Swg2HC3n7rTSoqQPmBp7UhuLEU5h4UWWdrxpEe52QqkKMuT6HpF54DTgRGnP3tDTRYr3KJrJ2JLA77mrBc",
  "key36": "u5urRNb3unKJD3rczrLgzfWVREjeg9srwTudYpDuvWrfvxycyhWfwEBFWuw6wmCRWHnESgde9JRhVLXZyD92Wi7",
  "key37": "2teZ37DULWSL74MsdzqUk5VnShAzkhJoYu41ogUNuxiL5FaGNT2nEvk9AatuzQdT4StrQdzX2GyN36Cc8cVWQVsj",
  "key38": "3RuTVkp9YuEEg9qnufzR8UJ7xMAWNPnCUGBUeFpGoDV5vC8abwv4gCVXmU7EAQo7uZVPPPHTUXhuuAm6p8jyF5Mo",
  "key39": "ddBUzUHbPfLoCZVrAqAV89DCeGvv5j9G8xxWgfp9aEFScH2Cyr8hPbz16XpxTp7P7RM5skgfg3E8gCD2aPr6sQj",
  "key40": "4V9upAvYUGWCbv9dXSq6AsPqqq8XQJt2GLUSUSrwhD6YH9e6ewPD4t9w5NPFzHKvy2Mpnhfvvd8mY5SDJUFJdDfM",
  "key41": "2KDGQNwoRGp9TtJddvFoV4nBfbrqDT5hq4VT46iedRLAkz6eyfQpZCNwYaevsgafbHYwpRvqNvvyBGHoRhahvPvb",
  "key42": "2fAHptCR6KXUDe7FaqucCSq9NwaD5XQVr4pBijtN2Jni2oqJ1ydxfuNBrJYon6EQYh5G2CXKJFbTY6MUsZpT3AaS",
  "key43": "eruEFCMwuNRDTipNZr7Qb4e7Cd3CSTGR88MTCWd3GYVGc8uJYaGGK4kpwDu8krcR6crrWVWrc3NErg2MUc6H6pX",
  "key44": "3NgDCwGqvxYTyH34ApukEDy1kbxztuTYD8LjpbqZfvjCeQoU3M5xmDRRqvjkKL4pgbU8RB7irDHxm2BvowKoWpkw",
  "key45": "3wDAXhtzotXxQaGBGrCJSFRDzBKjiYxXeAjNcNtaDP72hYEyDjXVGStiNtVj1WU1T6cA8iYo94udasHyQavcwMCg"
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
