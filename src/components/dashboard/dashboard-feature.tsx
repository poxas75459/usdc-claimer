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
    "48H6qo5untcj2VCnX5R7tBgJmutnpKybzp4NN9VPZXteb2FNo1s8zF54AF2baKwzudw3zmtcQAPgYfYMYutyWu1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58dCvXbznQo99ky3gZLzbaLYmpZH6TNMGisfTBCmD7aNJ8tUFtnNe2YD5QzjadU5GbGeydAYbchrMoUmfxjewZv9",
  "key1": "MKHfowuuxEEVYrVZS7uGAAELRvRFB2TvYKeA5UV6EhQT2B5w8ZmS95oPqiTPnfVYHoQqG86U9gMWSKPmL6aiKi5",
  "key2": "2YwBGKoW4b6grzycxKpvu7fAiineycpvtjA22wgHgTNJnhwAp7MmuHumAnLk33MYyp759HtTaj4wFvuBHFdkcjhD",
  "key3": "23SXnKB1hbrERW9khFHw5ckdwjkeF9ZaMW1BA4ATDH25y9EH5ioDPwtwfuNypyFghhZFM2T9XnS6FKQbRJYYNYqd",
  "key4": "4F9vAV54K2TvpeMCWXgsDNGMEepYXsPpn44BrYNUKNF7Ktz34bTQWUxSk9XuExZpi686ajCmXo7WS7oTDCcHLNR5",
  "key5": "2qwF4BoE8okFXypLn1kWj4gBpq7JPwBW2Xg1wYekqZJnEiTjSF7KvcFoGquz3BKLLEF1kf6JD8M5FUGthNkz7CGP",
  "key6": "48c49tgMzhMDzfgpwtqYBcnz6iX2zwQJBPXN3kbxYMvHM1Si3MpyzkUNEFK9Z3vSjokLHDL1np54BcgD7aC6vdX7",
  "key7": "4uwywAwLnC9e9nRKnWg2bMsAm4dVWA3bbJqRhAihVsEnN8SgHsan7pCrzWiGPJw8FhXnuB2K5RuirXJKv3wZDZNG",
  "key8": "EnXPLZZxLSay7C73aVhTmMCNQJyjNEttYof6Kp6Xc5JXf7W735fi498BfbiN4xWeFezqtMZMvgVj6b2TedKVq8Q",
  "key9": "3ygwb4Knj3wptWf7mVkvvDFu4rb5c6wG3oLZeTaou8ryCb51iDrDnCX8edTe2Q4V2Dst5ZKo4hF8x6YqsqhTZpc7",
  "key10": "6rR3F5ukCHsHH866UMJ1SweGxTXhmbo6B2KMNbMnL9A1VSjN2N1gM1USRpkmyksxvsk4p1Lxgts1DpV9ycRLQaX",
  "key11": "5gaucGw3jFFp2ATSubuvum5WYJhPnwEMihCPU62f3T4gzqy5F8ryz1cKTxRKRZ2xReSVBf2LouEdMecdxaoJq1H8",
  "key12": "5iSN3FR5Q9jFoTyQvihPRTK5B7rjryAMcj7vyHeJH9zt4gUsv5JaJJ39ZqgZkNKL4sSfYo4Ztt8rGU7SEk5oQuH7",
  "key13": "281AxQa7qAB9zBsmCFrr1i9EKDyEJaQZuXXAu8rabprZ6fEJLUKCAHW1mh8YRjMkj1FGDouTcxxKjG1y7aALgGuS",
  "key14": "4FQUMyeCCpPU6K15SDt4L3bXwpV67EyAfLtv2VLMUSYCSuuHy7JoDq4RPgRdPBJF6BdGEsu293xRwuSoRSaDn912",
  "key15": "VhQWFaiEuSu4VvWaMdnWWWP9jwiir6uxTMr4wxNN1RgiPUVuSYJXseEZfUc3zJD1HFV7Xji7EuXZFKy6ARtZSfD",
  "key16": "5Mvr8swFTRQsnx88SVEf4ov24Ro8LjPQNRbfb6BQ2JBR77DoVu5U2foLVk74bi1wkeStEZVHYw7tdq3S2CsKRJoo",
  "key17": "2vFJm8sCYcXLcjPp4FH6JVdZ445utGFPWNKe2x5YLa3b8v5Ngn878Wfr2wSjXXs32vHNNzmCCDxN7cwGRToqLhf6",
  "key18": "5XQSFwxC5D9LXzbqhG1e8D2wAk6jHN4tFT5f858j7H8457Ri22ksWedp2yfvqzDwLEJAWo8eSQ6Xsh79gNcUCS1H",
  "key19": "muNgtCNRTcCHeC9ZauHyddJ4Jdps2U11ExcYsvsGEJLrMfVDXrLgq6i9FxSXDvNsawi3xijrpVx3ddeiRNsUBTM",
  "key20": "5wAQigYS5j4PUhWF17M8gjSip4arrLEMNoY36rkmG9n8ZfdqXKkD7kmrwusZu8tRJ8NLC2T2YonVxbEAkLa2UgU7",
  "key21": "5TrrtR7XmQkd4ps6XbGwzMDG4xDciAv7Qc4G6TtUP2uGT1sbqVNBHtVNMTiUbSL3XeQ8fHzXnHMB5iiL2FxmFvR9",
  "key22": "2SqsN7YXdnuc289NMcNWzc4HL3S4o9vhajB8Xc843jxhqneaCGNR9HYAFh8BTeNYWJEM16mvNZfFXo8pqgnxHGJ6",
  "key23": "4BpWawoc2L8NmsKeQZHdpn3tkW3KetguAZsdmRkU8YfVBsXghXtjGX15Q27jnfFtkhnXjg3rGKBSqL4LiAdRmo1U",
  "key24": "4qA6LPY5324JXjrq1QeR28WNwQsgF9vVAj5VJZmqTAwZ8ARnE7xNT8VFjGqhakanJ5UsJCQwxTecxMB1Tx4532Qk",
  "key25": "4LQf4UEpWoSi2jb6fNKTpmMq9wDG4Qs7sdVQb3A2FTTK7c6WqgeTz6srZBB5NGFe79iHVxQKHJfT7obAXUw4peRP",
  "key26": "5vSkQ7Y8zfqwTFceX49XjrqfjVBKZPtxWRVSQpbhZ3bbakT1pWgjovBMgPyCbLW4XR5QWGqK2X3AZ7ds1h4tUWXr",
  "key27": "4BC9AmntNdYb1kNPNA4Kk3N8GzUHgUQfYxQFHEEnEoEUzh2AFJTFAczkudXWsYM8Lzc3kjgqkEwaWNGBzCNqcGb7",
  "key28": "3uZnDwwjcKBU26x7mjCJU1Bv3r18us9VzRjuCqfkXYp2UxKjdR9qNXjgEybkiMN1uKJD4x4NyuajdEiDr3wrp8As",
  "key29": "xAemWatYYnQfqpUdyaXZwaZASVq3AhPpkn2Uhe1rUP4neo7i6k2M9gFwmqMT7f49ggRL4cvuh8Lpk5q5GrYQNCb",
  "key30": "3S1Fqe8wjDGTkp9PnhpRAXqyT3SqzrDzGTFRSvWPmmhrXwogwgzDGyMf7mZ8QWJesKiVRKDTgznExwbmE3JxfvNB",
  "key31": "53Nsacbx956ZrKWW1X9M1BVRaiiovti1B5rhXvxtEJcwvJ22CKhBfH4Fe6Yt5NRkWBx9BdqKfNz6PCMrb4kqPnzu"
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
