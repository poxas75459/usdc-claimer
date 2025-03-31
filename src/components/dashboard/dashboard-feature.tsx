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
    "24dwEFbGUmqhZviZgcxL89EEmT6qk9eXem8fqLvA5e1nqfw9fWDzZFjb9mqoTGHvUBa7PPKSMym1enAXQocYmvBL"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3aNmVagST1WqV8v5aqDc7pFQcsPH98r1T8pB53VKhgMfxr3oMgg2xL9A2P5FMrjbAMpTqgWbZqQ1QfH53dzQEMKw",
  "decoyKey1": "5ccXLdJXeqDeAo9pZhpuJ8SGc6bcnwE3UHi3r34SLjehTpVR2GAxfFTiPyWZatzQhzSDmxo6cos9hBRGxrUoA6Q9",
  "decoyKey2": "62YVveyaJvsx73AEfB6ypXhSqL8qCWRQnJtDuADVZfkiwWDf9PN1d386YKAdjGky8VyhT7YBPKPsSV1w51KmHLqA",
  "decoyKey3": "FcXbBupsNeouQiYGy4xdwzuSDFYFJXdYHfXAgwTd92tfhf2CAKceDW1vGELgHkin4LG4g7XKUzJLmrB7j1Dsh5h",
  "decoyKey4": "57F3fH9B4U1HRSbTrcfLkacbbumzUNkJZSRFAkxtyEHCqWAfSU47iH7vFbgBm7szwVy16sRLYx6DyMGq1yxkjczn",
  "decoyKey5": "3opgEdg7xDuJtJU4acPwSDYncNFusNHUpYbSQHdEmGLzhgVWnUuhhNYiQFhvn2RQepb3WcVR5FCnRjaKMudRv8GN",
  "decoyKey6": "HBxk2UncKK3U33a8EHvVXV2f6p8tzhQLP3VHiiZs9yBcfrWXZtX84uHBPcNfYuydYTuTpxNDogLLM51cduEuAAf",
  "decoyKey7": "yM3mtTwBwNaog5CZtLQN4wv3HgcPQv96SCBJSfy8BsTkybX3twAdhXU12NA9L5nG4WNWsrdU2nSMkXWcjGPoFKN",
  "decoyKey8": "2mF87CCyURNh6AXasTvMpVwD9FTbcNnWmEsqUwfyhNnAxrVPEyEFusBpVkLmiqnr8XAKJwMj2d15yPvtjuoM2wpX",
  "decoyKey9": "owCAkdhKmAEynTutm5DfS6235tGFEuzfwvtgiAAHgsiQfUQrd3yeDMwznC1ef8CA3W8NLBeQKkLm1oVP8RukicY",
  "decoyKey10": "wVs6PVmc2Ha174GxqcvmkF8TEYNRSHYsqJGknWwsNdCByQ3hniUSswmRjTkeg8W2qSAghz1d9GxPwmisJyiqDVS",
  "decoyKey11": "2PpANiAuR8F44SWo936gFvnVvoheSABsTgKT9S6iNWN4mCnbN2StQM18uvXuMTuArsMb7qLBTjkCgwyKrD2KYH3J",
  "decoyKey12": "5CjEmt826GjL2RuBwvd5s3xcubYtB8GVGgj3xNZza3nQvsZNLaXX5fhTbjTbTzZxvbg2PB6pVoqBxweEwZVdxaAB",
  "decoyKey13": "5aeZL38Kg1Up7WNEc3Yn4WCosr5cDCbV5AyiLr1EjiJF13dCbHKVkuybffEfKA3mHuC4H1Cho6rCy8LqGSAMg1Ho",
  "decoyKey14": "cGXsxKDjaMxqh2Fb1SHNPJfDYqqsnhNinp4BQ7mZM4Pim89i7v1iYmHMpXJwKBrBkiZWM6FcvqTcJWZMHE8a5su",
  "decoyKey15": "4jikPhc8Z6QbYxb58q8AB5Etf2Dma1PCpWzs62xmuU62ncaiJtE8exr9Kz3M5qkdAEZLfquE6wWk3wchPCVAriVD",
  "decoyKey16": "xbDACkadbTkuHNpBUREKC9YsaTo26TbGxi2mPnTfeTCjZisJvYnpiUQvy6vyoDCeFGvwqLKcfKU5NEBzp5TZEXZ",
  "decoyKey17": "bgMqWiJVbV9fj3Pg1nH3P9CEujZPCo9sxdyaGHWD5Bp7gDFEp3YByRC2Ew8jvVy9c2y2kqMCa8otyh1QMmuyWBX",
  "decoyKey18": "63Vf2VJ6CDjFjzuG29ucpDmvNuCxa2aGm8okKCSSEakRvGXjGgg4JeNVfWSC2wNN5APJDRgTYK6soCk57zeM5gDU",
  "decoyKey19": "5tdnifB4Tbwkvqu9KYXmiNnBXi9ARrQ8GtwVSdmULK5zspFCGZhBdQ6BTzsbV9E1sdDgVhZiQ7HrRzpTEx75agF6",
  "decoyKey20": "3cKHyeoo4oFJd2rLKc25hWKPgihdWcVqj6bxocz6oL1VspQTogXee6TSJozEKfU58RAaHBoqMyeMfYCU42Dk8TjC",
  "decoyKey21": "2VeWyprwaoRrJPRq8zNFGoroKBt5not1FNxAgESswfrbooG87kdxpnP7ZGTgu8m2dZcrsxwphfGpGujxra8VbseD",
  "decoyKey22": "33LExiK9ri9TmcQdPHuT2HUzKANKgGHK2gDDEMK96p7JBCsLH558KmuE661Vb84hkAr4gaeYhqR7VqC72vuNbeU",
  "decoyKey23": "5JqXM2cpZ4VfYYYs6WHih6L64TUkR2hGNCSovY9gpUr6jJvZzWqdBiwwbrsBnSLjamAYE2UqpbeR5HWBwxxJDfqE",
  "decoyKey24": "3B9McJXiKNqm5RWxh8WbUByKKNANGQ9jWJ7Z2tyzComZevmyRJcdEwiaBdsjFpSRrxC53djuvVEbn5yUVBeVVVtv",
  "decoyKey25": "wpZjDVaxjZUKpRkFwKuvy9K64bCGaeiVohsK5Do3xT8bfJ46xE2Xju6TXQKZGNwJx7w8DKn2DQzVKVVnUfSfa6Y",
  "decoyKey26": "5rWhw3UxCaWqnGs7pVa6m2iXRe7o1RrwSLN94MjJPbE6y1gV7bAatRPu6VVwoe1CHm69fzyDe6PVYMwxALLKyD3X",
  "decoyKey27": "3KmRa7KzBsUmNQf9w8quJQRTyjCc2fBYyAEwHhvGH6qe7oeyQmiVvX6NisB6nFFVA1R5PpNcCTmRtC1yPzP2Qa1u",
  "decoyKey28": "63nGHeXZFjvvjeFK3hnt1xVoYhF4vnYNZ5XfcBXd3kjF36UprBE3qHWt59d4UkjZrLZN5g4TgnwkdWPVQuWEcu5K",
  "decoyKey29": "3hDj3KyPJ6teiKhmm6CcReYer35wdqdt1oyoCEH8y6WrM3MkynQjySGPAu8a1PxwKgRGhmcVd89T4u9mQywT2t4W",
  "decoyKey30": "3EQX6hyvD9wK5ETAyConiavL9nNPXW1wG635YAahxKPGkjo1b7UCwH7YWtSLcavhKSwmVUbUTSjX9kKseagRuBqC",
  "decoyKey31": "67Za4sxkismjGCoMpsE6i45pT2YSnKtHnCBSrWhBUCzbDHLEQBSARn1jw1C6swuftjEgvxe213u5KpLhoQxRAW3J",
  "decoyKey32": "5c19yTTC4cRhGVvs6eU9LJHdJ187JPGjnBSo7L28JDKror5V4zyoP1fBMsjJZF9wLYWhj9cbNb5GCnTGf8VRWp5s",
  "decoyKey33": "awz5gHMQ469tuDsQiEiu8Peug89JMEk4yFH8hm129wF9KQiBCjFX1K3fcp6RriFEZY3LJMFDJ58JkGeVYkZhmwJ",
  "decoyKey34": "NDo6WzDGk2yTab7RxoSKf1v7zWtkYzAkv9be1gzmZxHi2CMTm6yn9eVrMzbNUL2BDXuyF1G76gfp8i46XhT8pG9",
  "decoyKey35": "5Ba9CYGfmUhuDyiVQ8gwyxMcHo5wSp2rBWxuLdq43xZB249pBSHoJMub3PQkv2rmuUZgtQaXqJ13bfyJYYvjfcwj",
  "decoyKey36": "4svRdNXmgtQ81WQByRgnYBiCL88qU5WNype3MwhTxSS5vE2gBs8KnexjBZPrMps9my2MkF9Nb3jz9Rk4xUz6P91o",
  "decoyKey37": "4ApGwgLcd64UWfSknEHcBxKqDFCY3dixvPD5uzEVJfUktGCV8sjpLi5uc7W69A3thpAgTwiQwDd6YBFmveVnv2bp",
  "decoyKey38": "WJSSFjs9E389CXB93VFGH7AUaqqoKtRGAAMawvxuMrevEmA5U17b4NGSS92pXMXjqtrj5mijz9xVyUDQV1srtee",
  "decoyKey39": "4k1YHQN2WoZnc6LHhU5yCekojZRt93oSsqFUK94Mmn6seSm8G5Goez7jDo62KJcyU3pzQnX26w82QPopuNsEdii5",
  "decoyKey40": "2HsUmzm4YHm47TpZ3JuoLtb5cxZEzkupLP1r95EyPK3AosqtEkNu3NYNH3snYuXHRLyb3CxR1NKQc6tFPxEj62UX",
  "decoyKey41": "3CkYaj1HRSSwKSPYpR1hmikwWBQTzUyk2JVDUsQAgWhexsbGrBhe3Hx9epUk24VhAZQdNuWfQxDaRUo5Qqz64FLP",
  "decoyKey42": "51ykutzu66AfAKKp6ijrEn7LKwhoiVcADzuJ3y4ynUGbsjDetyaxLzPeX9uYzuHyJRiSZyEJiVMxFVEkomk9TH3Z",
  "decoyKey43": "4xzACfEK5tZ2DoUSomxG7bM4G154hnzkx8hGYqawgNs7wjYPytb2LS8GHRYpz89D3q9TQeo1LoRdbvZysmk7zxoN",
  "decoyKey44": "4ET4n5fexsamYoADujNYHmT2jVWRedAeBYw5HL3mTy9DZnwfM3aAEMPBQqnkkMRYtE95HSHi9wKUQmQGL4rg8aNZ",
  "decoyKey45": "3QibVMxvJjwfJYXUQD5E6mjyX3obzY82TNQjzHu9t6N1D9rtsKMZ3vMmpJFqwmcvCYzYdKurtV2uiww23Lh8UUSo",
  "decoyKey46": "4K9Qu2J8uD8JFjS8cxF7tdCcJP8iMEkx5Fuuy5aDyEtnRMQMnfADfp1xmJRV2fPz5tSVA8AycheGq1tiPtrj4ZcL",
  "decoyKey47": "33Ui9zTPiyRNVknSPheoSLnQZncdt5uhx9NfFVBBkZhH9MsEEbY26qZDCfLWjjgyyfxSEnJr7ydN8awo2B4PuxRG",
  "decoyKey48": "576wJuRRkav1b3gBVWrBEPSF2maYxq4meksX9XoC2x9GLXWCoxrzhKPfP24D9GAwaNc6wRirpo7uD37DuZudF1Uc",
  "decoyKey49": "5nQk8HrCF3aNVt3YdvZgPw7BqeZgXjcPKNmCnrpN29qJ2NL6BkptDytBAppodYndTA4qNfv67VFWxTMmZiVbjtUX"
};
// DECOY_KEYS_END
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