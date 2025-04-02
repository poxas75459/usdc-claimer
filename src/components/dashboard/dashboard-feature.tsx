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
    "4FzVHmGPgK3aggSf3CSqQ4nSRLDooggXcUZtuVn4zPU5r2A9hxyg2b8BTRdza91maTMrKLwdL9vB3CrjGVirsPbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xphUmJiZNFi6PHCfgujBijwaidAHUayr8qCQuuGK6yJcgGR7cjAjv9KcKrPpQ2K9y7M6ezPCFBNS9jVyZygJd1e",
  "key1": "2nWWXd2aAydbwbW51bcnKcCApu9rSntyaUymLDLdTjZxd2xatC3G33rvoJefe9TJJjtGYanTyri2kzMXjMFxKwZ3",
  "key2": "5K9aqcvyRSNJaNCqEUegbtBf2Rnmer8HLeRGcEt9GPatVe2V8GuXT1p5PR4bbke4tA63Tz3484qQjCMHyyUGkseo",
  "key3": "3BxBxmaxGXNb48aegQRMrzLvmSFj4VarkvxeZ2VTfmDWCTKCSLVJr3vbgMY3kLfCESh66YdDtq28PhMDoZ1Kk2EZ",
  "key4": "4XGkJHg419Cb4VeyfzJFZhn7nrbbGjRCriL6sBzZwG4zVH9e41hAtRpzbn1mVLcYRadHBv9uPPeFKHvg3r5xsZ9A",
  "key5": "4zgJBDxnYcntWzt4HoJJoGUwnP9aLGJVvNkxof6s7cZ6DjrJqTSohqNAn9FhriTmjLcq3MWSy1Lb5mBx1UPk7Yw7",
  "key6": "3w2dgcbewqpAfjqsFsAZ3JPWuXJz2JnsPSZd5gT6mEJ3bQcSbZj7iqCHJym3mk23envcRXoXhX5dm6jZVD3gsYBD",
  "key7": "5nrFqdPufXR963SYbWkDH5UjAtSstiHRP8pFLCikDyKY8sWix8Gwc7nmdn3Ya81BtiRJcuNkFiUZ4fdMPxcSqLRK",
  "key8": "26ejft7f1ekFYHc2MagGCdCr7rAsz4RL52B7v6RDnZdLfyBCqm19FJsejgkfvLp8GGMTZ85zmAMQu1TXZU5dtjfa",
  "key9": "3or7xLvaEuHJo8yNZBXTmCLixviyiKgnWZRkBABWZfoqjawcUbk8b25GEubT9mFCHiMB9bEDotmC2V9xv4srJRMC",
  "key10": "2zut2u56zvWPJhCWyJSZ6Mny7Kqe9Uw6MDYhrg5wXTbUgVwPAaW7i1rW8fVFEg6iKXHa8nkMhgFSojeawXbftXXz",
  "key11": "3U3FX7Ea4fTEErAPf7FcXbuTXjEEXrnQ2ef9ZMin39oB6Ljq1rYCUQDKsLyJtjdqLh2B1aeJGqqBQvKMvKFBUoFJ",
  "key12": "5DqfmQg9KFTDgjkmx4GZjcZC8xTTAS24tbbGw8yRYtfqMf2yw3cc3NqAhLXGnGLaCwhjGUaqC51zJQQdu58oz1jo",
  "key13": "41mqdUq1r7KCJxRJsWTPoij6hbeQpBWsLWiAnoTngTzyNtqUXcboHttCUi5gpoX8oerZ22sM7qk1MkQ4EshYrrqj",
  "key14": "2Y3dDZfrXwoq3HbAQZzbEBhXjLTq4LPjmaVpo8YkCWePZMmGxKGtbKVatvyqTvAE5UjUScPnygqUfSPS4YGK6NkR",
  "key15": "5639qX6ZSU7HAfGJiLW3WmEbLgEbLrGkc4R96YWQxJ3oSdJkmrzBWA2gh1JkdHSQvijZ8oLXuwVi7dJpJmMbNN3A",
  "key16": "39hbEvzjk8kgHyLUbsD4dVejTMtBCSPE5P4J8S9ZLtcChTAK3qhn9La7ZRAhjkzheXnvY9sAGi3JpNQxfNn7ZWjp",
  "key17": "2y8VL442M3N6YYA3gpEytAdSJUGiLihmai9kNqdQU2nzZcXsxDHioQmTeQ7jtcaxmpcZ9qxj4ntfTY3uhTjgpYn6",
  "key18": "5DU5UWxnPocit6u3NW2NJUhCpvxdY3XT2TsCJa8LC1timLzEfKdGGYVAibdCa2rpWkJFdQCQJTygSQ3uh7q2zP9U",
  "key19": "4zM25nzksA368Tjb5qxuvwKTtGW9oKi8g5GiEcyST2YZZedHNR2mQXEyq3PvgRq2LwJkWoLfMARc6HGrhdk9VXSj",
  "key20": "2Q2Bh4dwfYBMs4EYQ42GPcd179YB1Vm6hqvcqEQtP99mxPDYMK6GqbE4nEa9ZhNUed1UvZXT3Sttqezf6yhGhjRk",
  "key21": "2WxWwyJgw3qD2thsRhhZhN3yQbPVNaorbQ97Z1ofzb1CaqrbnigaedMkD6hQcaTeEmoxjouodmxw8PqCmXv4zbpj",
  "key22": "32vDyyv2yRrSHCAecVvjwzAGSM1iAG6qLMo38bsznUqTnKrCf59FJDj8K9JmpeNWJ85ScDyduY4mw86y4E1FQrce",
  "key23": "nznGKq4bKr8q4xswqnULCLvxL3Tx2eJqLZ69ghzNTBdaThDhLYsmsCmsd34rfqY4ho5uKgMBV476dUruAWn8gJi",
  "key24": "VxkndUFXrBLju3MUcxGL2RETpkiTsbGwNHD3C6ehvGQ4y27vtem1JEyAHu5sYZPvS8VLg7HJkqzMRVa4uBTwgg5",
  "key25": "4EMaeC6RPy6mwYJsZ27rMkiQSzXNVGmfwXYaGL14MunSJTWYoUCoCMsZcWR38ruWa2oibpWTq6Frt7RBAaSMVWRY",
  "key26": "2yskm9fAaxecRqHb1T5K7DgqLkAKEthcUUm1DKGGjp3p1YHDEo3QNZwxRFqt3MXZqNKN76gHrq5Jdt2DwJRdNMPj",
  "key27": "3wDPa5LnKXai6vXxtSZcCrSrhQYudRW9JV4cmkd5qqZCoprtgGTnZBWahugaxEDkGNB5PBnFj5ecsZeR1mQRQfLw",
  "key28": "5uQviBWZicuNBBhBpnqjUfrZHw3tjhkbvPVMuP3qqs44HnmSs33rVpvPcjiVotULmPba5qYeSsMfZ6VNhRumnvhf",
  "key29": "2G47p3eqFUREiMWervrYQZWhoP3cHA76HGWHUqRsdXrYFbLn3pP3mGWG3Cm8w82PUFXNTQ5j7H8FctqB6GLpBWyA",
  "key30": "digqUy2GXTPEFk1iSQMfedK4JqvrdyRJWHqxMDAowsyvZ5UjiZws1qpbtxdUo8ejfKBXDHJBDE5HqXet6fC5cWJ",
  "key31": "37XUBvF74TJfzbrmB3VpGWDjxgzdJU3h2hS2sBQVcJU1joUUgT6tnjkWnbhLQgVyg5FiGrTrLCW5USosRL3nKe1N",
  "key32": "3TWQLXovWzT9xPLAj2ru7NoaA1zq8yw6UKKV9Vwx4yEESjxxd5KJh2CVerF7LXJgFnpWYUeYXZaAfC2aSpvUyHNf",
  "key33": "UNY91VPHEZMbV6s1bH5FfEgm4uYZWaQNwCxcvBcE4wiNgznrHMNCgHJFErzEzGK5JP5JcxLeUagvFmyUbmjvb6K",
  "key34": "4a8F5FxsSkW3k7MxfVb9LTmwuukcVuu2LEP8hyptva2py1m9MoC6uH2X1TTCmZB3C3bzpR4B9jaJq2zFdRTfae8Z",
  "key35": "fc2vqjK5W6DGo6vvax9HkMefNQJQmyCUPC6JwMpfpZQNQLzTTNvi19pX6dFG9jKtxXXjWCbYY5ZMRtVxdgUF8qe",
  "key36": "3GU2WQMAMt3Ha6wKA2fyzdFS3ZHXJsU3sQxqQ1pt6bW5RfHbqyPrAHNQF8c16pYMjB99r2ah9PcjrchM1kQCFTmt",
  "key37": "2extdQhiLyynFtawsDhg5krhwKe4Po57QPE1bCPbinxE7HeCLEMUoZ3vYpHZALntyMkuDhGaEHWxtX2geyyGkaJW",
  "key38": "2VmK6QZrYKhu5kgsf9kY2dvgQp1VvkzFxU2z24eVVnyRAYsEPMVQNo84Suu7C1jCmHUb9C8GyX3sziQ7Ak4g24TB",
  "key39": "E5kGhKq35SDfQWA4WWbAF8mfeUbCG3ycxHUptDuckpsMRcdM5Q85ZxqvqCZYogBhyWWMHtt1rWJxyAAXXzYpq98",
  "key40": "7cXzKU8Eq4FcXEHUrohfuf3qsX6xKJo5hHaW5QD6vG7nFr4J1b4erVkNC3ZS7dtZazccps3AWk5xBXpCaFkKwCv"
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
