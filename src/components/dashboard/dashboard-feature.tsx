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
    "2hGWhNJPF6d8eZpg2qWSTPpNUbsrhAc1hLZzAqVEhiD8cxyPTyLfXoiaRUj7JJyrWDsgpUxUEiRc5hzreiuvmg3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cgjAbQ2y8Ho37MncDML27aZgQ3MpdCsEJdvLVXM3yNvjrHUC13yomVAwsns95nzfo9nxtySi7FPVZrTpoot4Arr",
  "key1": "47B8wDYYi7uo1Sdeq9JxNREEciFLZ193nt38Av6ewHU24DUgiwuHSFH4BH1aLDhNnyqvX7RdAtersV2HhU8vjdRZ",
  "key2": "34BT2VC69EEY7zoXeYj6zJ7uZATkhQz4eGSoBK394kWyWpKXtZ4yazepjeo3CTpcNg3TacH4fCgfxdxU6Mg2qxiw",
  "key3": "RgFtVWWGpu8CcsuKMCEq69JiQdaauRPNE9CHBPY3jJjoaTVkTJZDQmKVC8qegGpq5iHXduefTPeZLMXKH4Zwqfp",
  "key4": "2LrkJeAD3MvosBAsAd2JwN5hr7FJiQBEo2TVV3rk8nyqsa3yBmBHHGENipkv8nsZKToKU5HAMAxeQBnpXSpxuxKa",
  "key5": "57q1t6GeAcYXnH42zJEQVMyf9usGV9aRhcy7kxeautUqp9ouXBaPjaKsKUfvnhv1GBCStwLGkyiYRWYT8mMW49ct",
  "key6": "2FaQXXj6SjpjS6B1yA2jnkSMJfxSVtuHCBq6R4UEbq2Q6KzU4sseDdVZdmEBUM6LpozW5KML3r4nMo4TPLJUSrSD",
  "key7": "3FJnSr27e4GXfvYKbueXaXSr2QU3AFVRxHUytEBvi5AanSt89PDZZLJhZaAxi5J8xicfFcYxo9GqZqsaFcvXZxqD",
  "key8": "4cAKPFRVkgoHutdT2jSKuvHzS6yQck1tBWusv94pZES4uLWafn5KUAAzomjtFwxispqJX13HqEyHfDkmgT1sRQv3",
  "key9": "49dKUD4PBd7y6mAmU1JivzkNz91a6EuecCskcCFNNaywDKHe98yoAkA3pDVCAQpeyWhZJ2BLAfktP9Gd7RGxwzb6",
  "key10": "3WRgvWvcdVPminp4SD2oEGBuAf3SX33tqn2hvCBmjdotPrpSN2sR3opxce3TZHRYKhg3W2rE6ByuYcn53NmUDcJB",
  "key11": "3148Xr25Kwv9NVYm1L8n3PxRsQX9UWmUraoYGsVr1MAs3L682gQ2f7kuWYKBT2PrEkpXYitkFit2Z96MwxoFgVCd",
  "key12": "bvULHzQst6gGSyp9cgXNytD3VAQWUpyepRHrnycjumztrJfngSWmuhaJ2yNNKMQqC6FoCU8DUxMPmkYJ7jsoMN1",
  "key13": "yvCeB1UBvncL3nWT1BdUB2qhDkHNRCeqL61D2nvgNktSURXvoULmwRbNzjeRjFJnshQDSP6UgEFC3Bc5acfD6Yb",
  "key14": "2LTryaeYCBv7Z6sSNyXpDw184LCL5jMvAK3Nz1bEVj3c8XK39UjiqfYB6eWSUF9DjiRzpfMiDTVLN6KTmcaw3iPj",
  "key15": "4Je1EZ39bj4PcBaWx4yPnvxoXEZdAt1jwpHasyP34U8jyvG6nHdWvpBYW78gBREEP93Lc7byFX9o4qVzfPnVEWGx",
  "key16": "5yraCNjz3mJDbmyPPuCXSxYH7zyDBET8Y7tFs2eBRtoAgRo6UwecNo37TPKr9G2apjxiybH5GYjsA5Nzc4PRz3K3",
  "key17": "5t1DZQ57xZgiAPowoycnMEv9tkFpgz71mYPeMnMY1Nj5fYjET2J19JXa8uCVgBfjLc9WirgwnG6rJZEkKpCTZ3ig",
  "key18": "3Kvw6ktV3KRLdyUh7EEUagTLiYA9zZVK4MkMdf59UXmNNgLrEKKyoW2cecxLw4iQNy25pqDk9bdXJGohjcTWL4yq",
  "key19": "56BhgN8NRQqTyDSkhhCHJKMYjp9kGA8kGPrEzfVS5VtCAeaWY3zPEB4Gw1MB1daJp7Y9wM9yh2iFvbAfTG7X3Kcr",
  "key20": "3c6RbEgjPGxurXgBRT7TG453UVwtiQe2Her1gR6rmrTYEmVmMB7kTxB2R3y1ymXXpSxjQyTUYzhgbMZ9o5aV8Zng",
  "key21": "4xkVctUaADYJ6QXwYyxHH6yNspDLsypdbVdTWZA3drthU4ae2xL1Vd3LYwsTULESrKEx2DvVh1yWv4DqMiPGMRpQ",
  "key22": "44h2xCW56rRjGvBt3YNdyPAmNtaWwSkzmDWMLULWTDh7FPqtefw1uWBVZM97NSLRRyeTqXM9hEoZCeroGGQbc9QV",
  "key23": "2Fv6TKvWzaRU6zfCTapD1BM4qiWuRjHP13SWsxPjE5Lt2Eu6vnEYiuAJ1x3Umkhp54EuCHS1JFSFtF8Fb1STjwF",
  "key24": "5f4npjJHnRtY3QhBJ5NtfjPMvfWh9USGdKtUupwevsAPQhnzWuJJNDHJekJBwRNTC5uPsLusg1wV9wM88kxKUCR2",
  "key25": "5SBWGFchDnkyocCTm3xE6tWuXYEQUyz6NdUqWMTd9v6o2MHWcBNGFG7Uf3MvM8F8b4FKn1rHCfqSu9yDgTPWr6dC",
  "key26": "41h8fzHnNhAkr3eCJ1NtLiQmqfnXnWGHvx9bCoCtqmdvS1WmnEiDAnY1PRSXot95qt22AW5VXtJgUAxkrQp65EuR",
  "key27": "2jRKBZUGCJmeVERTs3QeqDoZECL5w3DgbHzauqjLQREvzx49eahfBjHcENNtUfq8P1x2sGvtjkNPMQ6hrjeGvvNu",
  "key28": "2q44J466LVzgKXa38qVKayFV7JzBhfJEBYHmcTQaY38mbQoCqVyLiSmgUS8jDhq6Ukwq1tXBE7CPSu4sTheQ2MFY",
  "key29": "uWuZinDi3EZb6f7DnmCxvbxjsdmJcoiciHToHUx9D3iT57TPYB1tT4cq6bPXUCeBmQxHAKi5eL6pry5rmy4iELc",
  "key30": "4BFQXUrfMdKj6vfdasTwreQhm2UtQskB1qacpQ4SFxrQgwC1uBS1EKvaRcAwnYCGwJZcwupTww7dEUveDN4cXLyT",
  "key31": "4YGB3b5NvjRjQWW9HAuBi77EcnUkUrRRpFEKPCqEvDtq8vV1aVNBQ5jMMMN9UeQRakcx6mWtEPq1yquDH2cpqiMW",
  "key32": "3TeQaVUwFZDa65v63Hwbsj9GZqa71jqXw6RnbGNiBiPqKzyDFUnXcWmStfobtrT3KjUUAHuHeVj5MqVJyGhDQYbj",
  "key33": "4KjKWCW4J3fNrZ6W6TKRNksvfCjLwvqrmNLMKB3nrncopL71Pw4LbNaNSeNmbeAUmPQ9BqSDd5wJSRbwiKqnrTtq",
  "key34": "26b8cK5XeG8dxm5H7JHkyLhzeHaiDYh3g61qceLRhVzrzq5N4DaU1KnfRdn7ZppNoziApeEfMWckszNU7gzAGzJv",
  "key35": "8sBL2SKmETNiepptTCB5yL5m9nWNXiPY2viqh5NXsmBE1mXMKpAhz9B6P7xKdN36yU3sHJsVhSyEGJDTcuiPvRG",
  "key36": "5nDCf9NEscrYWNU4cim4Yje14xyuZ6u5bQnP1UAWZ9nySb72hzjpAZhPopH79ZKhNuLZP9qaFMFZr6UEZuPiCvAw",
  "key37": "18YdZ9QuUoyLEW2Jjr3ruG2hH1SDc7dy3V6MNfhRCwzHZvJSbDNGa1jyNWjPGoyoAqgszE1yiEZoGAjVY4u8fyv",
  "key38": "3FoX3LQ41C4inyX3svkuHHsnzjHacnfkRtPNyYUD2NjDhzEXT7ijaQCgrQPLBzwFRr9CZPXCALz4ZB6C7kZhM2oC",
  "key39": "5EsMCDwjCKvofQfo6inZA7a22pZ7cZ8BKnfAfsBbJ2DcTELTV2f3VRZwTUY5Zrm2SGa27uC7cShXXRZjFyaFBPLg",
  "key40": "4QNLzdTh2RqfEnhGumnov2BPQjVaLdQeB2XP4yNUVLa2MbLHdeDzgQHV6bY4ATwShqZyEi4crjZ7PSi9sxmRq7XH"
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
