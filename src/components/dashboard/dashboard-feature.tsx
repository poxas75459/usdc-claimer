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
    "5r8XimkUn3kRMdVGvgbCcngWtT9gd96EMTYsmY91XDVp5kFh8r5aD8TGKczgvricZyLDPuQFo153ZDCRfkKa3XJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E8UgZuUdvZ94PKdGa9gS6jw4uxy22kJoJd2PzLNjgr6QrdcTZiMaZ6JzFMferTwLLxt3CZHt8gTb4J9NbAR6C6L",
  "key1": "wpF5wzXHa3srNE2dE8rsDVjB3sb37sZvvzBZ2ovs8ivEzWcXVSoDAzCj26Lf78ZeuBLA6zBCbrcmoJRUkqmVXKW",
  "key2": "K2nJkbsVBKEZEifGH45vTvz9ydomzau5VGVfBe4LYq2FTq78oM9AicdPNZieA5Mjxj9CMtyAMTLdzmnFH9RqiMm",
  "key3": "5kb36DpeD3TYNwGVKb4ChqwZpg3dUvFWRBKhtSdHcf2GFjsWkMAX69kwhQfTvqbsFN9pSvW8RxsMK9GYhaMaMnxX",
  "key4": "3UUREL5DQmCBs3sJF2SJ4Wx3BBzVG3aY3cPYYP9BETGXDtd899Sya26aQQS21QJ1Za1unbRmiHTdJBwPcPNgmgiz",
  "key5": "GNk8DQHpJ3Jq88PDfCyzkckUddxqzP8abZC9VkztwCNXgmQosHEzzHHCdhTUi6YRfz1SKmicrqy5c6xp88DHSrU",
  "key6": "MyypYvpFNiVA53pdRDdsAih3jPP3s6XEHR1jqaFeWZkqqktMELPfPXnxNyhAiQeYih8cxF49EdddeTGtAGvnjGX",
  "key7": "4G5ZHoHpRU6ip7XyRpjdtxKDg8YG2Xck8ybMyg5zfg2GBWPBjFNUezC7QJGQQcxoV71owN9iHWxsE2pm9yvxL1sA",
  "key8": "6Mmvj9r9FF3QiEg5JMDtX76bQY8jHbbuF1f3xRTXAf8qT5brNP63rMZsMS2ijtQditWwp6TJfES543sUkK8r7SN",
  "key9": "RKVbFUTGFai4TjLAESQTLxdEqQVMe54Bp53Yv1YU9EZ2vPz1116PHHLJEAviqmHxK7HfUBsJGRHMZa5PQcMBQBF",
  "key10": "2CNK24SU7NszPtSgTCDo4LL5DuYaJEV6cuPiswc1otUx7S3BJqS2A7FQhFTR5g8MXjRSnfYNYuSTZUBhJGLRXSAt",
  "key11": "48bXBPRBuPUNECecmsR1RbUyUFA2crWPauahUxzexUANDwrdsEZqMFpWofP6vuCde9JoBuqZFvcC7gSiHrwYhAU",
  "key12": "52R9RX1Z2iXksi6jCYACM9KKmD7Aecruz2mCBwP7LskvcPndC7bToFs3k7eJLviLQEXVj8F3Ve68UwTWGnmKBX9L",
  "key13": "BcsMJyiUidWxxV8BZ91dnZ8oJit6eoNgcYN8CXp9fhyuDfzN2XwHXdUYHHueMgMGT9WeQWhawKiSePCn7h5Chiv",
  "key14": "rwdgMx67kfoRAARTbTisTrgQ2x93FfEWD3czob32NkZGsuHQew1QnrKH8AVUMGsnerAhkgVrkUtfLBYyEnMfJmN",
  "key15": "WHdFr1A6rhqHrXiUYEcnzzHrTwAygcyJojvEYAVwGqE8LnSmkrKJgd8acbAjuAF9Bk8oYAHJvEBfz7HUBqGRAbH",
  "key16": "AcG7JMkW5XqK8m9nrWRjRgpWSrTHDcymjUwp5Mq1y8RMsoqcDT8dJaEsfRSTVYnwJjEJhxAFs2Er8oAYcLuALCi",
  "key17": "gt7Dfm4dCsyckjRU5bs3ZTMWn7FWz1zUjB63ibbEyWbmXD4cKsVdLoPpERWDqSjz8kcmpf8WQ8A5HprXyD7EwVa",
  "key18": "4MX2CinJiXKHt3NrjUkPKPMdCekHDa946Cderz8Z69Vk8tH8faaAfjNMb9F5dNo3WqYM1HDhxTPFpQUmGSzLKcFL",
  "key19": "3TRJ1oi4Asee9a68GbwjUNcffpgQY32iEJj3hzXoaFxi9A1xHJez2T8szXtFt9rnVADjjuQtKSFUrqDvE397TG3R",
  "key20": "5Fm1xD8QYQEae1HpVk8SXFZwF5rtxsK3sffW9dierGx33Z55v9JQFfvV7ZPg5LxFK6Wgw8ZuY77e9qeCWMGS8w66",
  "key21": "5bRwWWs4zjMKPcDK1Dn8kE6Mg7v9ui1YZidFtwEVpHzKSsvkxqzWRGRZF3FaZMg4YGkrpCnjCQzbrxSFnixkYSDU",
  "key22": "5KrQpeLwvm1GKHiv585zsJWCm6kKAHTHL5iY6xAeUfd9RVcz1V52pDVEuE6oF9Y9DcaUK71ovnNG4EaimoN99yyc",
  "key23": "49PuszrP5qwdKQZUteyRpjvbUnkU7U5AfPrn7tq8fpiQRLKpHneD91q4trHB6HeFHDmC8kLpB6kVF2iMAVx3biCd",
  "key24": "34JzeRrMpxFsE4uCRPAfBZWMU1KuwpKEApADLoqyWUJZLvXnvL7uzBGBkvsaaTwdHiYBfn9wMCU6nFwHVSmyYSih",
  "key25": "2pxhyvRkxCzZ8YEkc8U72qHLxVrJPdH9XrgMnheRcjD8paauiSHgT7PcHmV4yWWvbdqWtnaDHHyrjxPoxFGqm32u",
  "key26": "3oMyZ2pdao7uNeEeTGH4ygCMPAEqnL4borpfz4yd8QFHxcHqb9f6JzUeJGsAWYu8rKFNXsgALkDZ9mWH5VpyGLtB",
  "key27": "LPvbADJyHxLASgoNJEuy2yUxWwzamuHRzhAtAezKq6E6GvpVu9Fs1e2VjHn5ThV8kaH1RdDC9oX4VwntkpHgRAN",
  "key28": "5m7FUpz3y1ZxasMh1tTk2kXFqJTy5j8nkvzrFyeKRe7EequgVhXGPGFWf7GS5LY3sAV6WK2XF8UTT3Pr7p284gEJ",
  "key29": "4LWGVJuZEWSBx8F58d4b2WeyVmb9ErLEmbZzrat1sTqV2gpZUCNT6sGfkaqGxJdxZE8k2HQGWT7KVgVBxTQmtscf",
  "key30": "4MKXwHq3fkv87cxnJmxNWyLRdu6B4Vy279qnCfwu5aRYAat7eM7cgmnvmwonHTyBDWpyK4bBpTx73afoGqaPMYE6",
  "key31": "4fzhQQuhBeNvZ5gDEHtjE9D6YfjQRnayffDLC25UC1z2sh9yx99w7Xqxp8y4ZxMVrL79jiYTu42Rv5tNeiPWB3US",
  "key32": "54ZdnbYavjpZsmZYnGJs3iwwZBYueAZv93cXoWpGc6gtNnHJ8yxXwSNdEzz9BP6DPhHF4rMQBAZV5UfFbK71ZBdk"
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
