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
    "4sJcDw2nS2zCKBLU2SgLbVepdpvvvkRR5chAaJW569hTiL4V2YHciqeQYc3JyaX7GTP7XD9HCrJamCy1aReqXWUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "19KVfiGbtmoBrBXwwYXaQus5JREr6RP9kWq6DZ8H1NJyywrYj8pG8Zz48izvAoxPff6c7XK7cH2Uegcu26NuSFp",
  "key1": "3tbmhwN8fMGKYvgPjQPdyxND3pdKcqp4Cf61TrhhffX3tEjZbTmY9jBA4HK89cj89Z5bEqyJ439HJaHJxnVHLRHZ",
  "key2": "2TJuebJ4xoxffgZKTadbzqZTW9k747byQ3GE5nNR2BE7hLRvVXctPxwqeX4KuJmerAd7ttfHgzgSdpM4Rs7uGXHt",
  "key3": "2b298v7HXaXkLX5a9YURP268qymGwVk4FJW2hJErEeXDnG91SAErvZY2FCZYY4BkUoBVek3XVNB7oUzCdgwPCV1C",
  "key4": "3DhdbeLkRD22t6QLoQyy3MNnj9wMjBsYGdDrR6KYA3erKqdwY6YiBfMxbGqksWytXjRTMfPXWLm4ahLNU3hV9qaA",
  "key5": "5Y6KNaQSKrwHM6ugp6unrgKhuN7mozEYtJEM29oUxjvhpTax75PDTVeCbBLiKVKxe1xxNd2jXEZuDkC3VJ1vx4Ug",
  "key6": "22sauuNVJtzN5DbWwA1BJtg2LqyQ9sr3mbwMWBEUuL3Lpdzm9UEkGzJW11BeuoRvDcNioHTTALmg6XYt6gWgcuzr",
  "key7": "3HyC3xBLRxCDtwQPat53FqNzeaCKgXQegFkq6t196VJX73Zfo5FaiaYmDU4DxqMzWej57WDs1WkQ2vvy5Nc7vu9U",
  "key8": "3ajKXJdFj42TUoVkjUbbpPwNHPmfw6PH3pzyCDFm62qibeRYsDbKRbDFm9Z9zQzH4PSmiG7AJCyyd6mpER5cD7dn",
  "key9": "4JKfBZXbvSpqJ1zrjDmzekVLXSdTHS4nWmakX98Pv9cFqfR3hbdxf17sXjmufnruDt5swVDcBwdbNXC5nVPYuthJ",
  "key10": "3Ratbd8jGSs4zLJjhNwBX7cA5JWxEXfan3km8iHBzGyuYj7v7QwxEdHAmT2nUHE3DVTtjsuFkaJ6XLoZ3QBG9mUM",
  "key11": "3ft2RUJAZfFrJAYTV3aEDnarNqKLNFmmdZSFkDUcPgBtDXBQq8KL5QCofUGYUfR4EXx5EWmzSNo8NtNWWm58wDXo",
  "key12": "5TbnbHJPKYRAv38MRPqKng9LUPbXabkw3VAaSnMSYPWXw8TE65EGnK1rJwU8C8orqJuViR8a7Tqb36kGA6oCDJhh",
  "key13": "5Ykeh1AG51ptSu61K3MwnDx9jk6mDHz2HxvKsT57tY3Hgik734A7txtHHSp9LoJEXXoXc3mLUfM7rwgKzJPHoyMP",
  "key14": "3oAP6tRB6CzwE4rgCA54pEYSScQzE2v5jxNB5jjsGftU2sFCtiWwodMXq62japkE4Zj7Pu5L3k5PeQXX4UGH2bzt",
  "key15": "478x7BPqhfDEfLhypZ9LrJkpA3GQpJ2MQXxJ17kRqZbhX9JfAT9qCXm7VtTcGzUR2qNjU5EVGqNNz68yy8wUwnXJ",
  "key16": "5q99wXv4QDiafpTGvoGSdishVUwvMVZbj7Lzsw8RCQRBuuNVXd47EJktQf42cwmeNkaiLADDkm63q3VHEpopsfjR",
  "key17": "56sL5MAxitMrjrccHCoXgRNJb96g1vwPB3MySprK75PKKa5FxptBW1v3YZpUdbmSbPjzUGJdt22heD3GVPs2TqAZ",
  "key18": "2SNKKEM1sQwY3UHJErCQzkYgEsfuPSh22Wt5sV4U8wvK41JJD2dfhyvsdeSKtnZpRhqwBmMrKEUSi3FDQCu6Zs8Z",
  "key19": "67n1gmsCBsgS6ijEvRoxEo59QSx8D26Lg9kYGCKp25hTwu69ks62pW9uxyP7yMqvTmKse7bgvcVeSpGgR7PZrGuV",
  "key20": "4N4HrJxg9kniDABQrxQNX3yrweogRJK2u5oew4nguaPUcoR1bPQ5vghbqxSATQxwz5mh8EhoF6kynBKS3pqDpLhd",
  "key21": "3kFsneosTG2mVox7GPrCAYwENbitanEyPjc6TEJE3DRxvKCWYki6BFnP3qJAo1MuYtnMvqGZrW66VE3VDW9hH96S",
  "key22": "2G65UVeYh8LRTdmJmNpAUpGYHN3K7irKKeehCF9zDb3wrVoEmcvQfXqi8aFu5Kta6E7DExh6LMQyeegq1EwpzaHR",
  "key23": "FnK1oU4KepTiw1AV7n7xyT6w4HRsaHUcPQ8QFqDUvdd8hF346i3epy2nAM1G9i2uTDNdymmshJU2xGLD3UHBCSz",
  "key24": "62XaDigGXDB8jzpEiWpB5VadJ2opxx9zKE86fVQogf1cnHumr6qt8i8RHkpzquLF9Lvu73piEeAXbPLUAEZwMRNd",
  "key25": "eD1VzBKC32sdHmFGJc4XyuhWUYfLfcZ3z6z7VNK9cyzdv6Ecmt5UjSKZK6Gf6mCeohBEzQKra5WJavFSwi2k2oQ",
  "key26": "2Nn9ZbJJVwsJmbhMh1V7oXS7S5LQAnyqtb1x8sCnoMa6bPKLQhX61Av534bshEEvGqibQbXM5TxU9xqfaiWHy5v1",
  "key27": "53cvBqJ7WzF6EQH2htiiwFwXU89u1YfWw5HYBcSkybj9KPYQzZLpByigrSMDrkVrEsm2q1DY1stAQpyWZtriUtMp"
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
