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
    "Pa1DR533JNdWEWqUrwBMdbyRcKzh1bYK1yAHsTLCYjT2SjnxVyvePFn5CSJZrtTqycThg1QBToc3SFpqWZvkywp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R5XGtmkrRrqmLzDoEFk4zanrm1BkBfGe466d9soTHrbsafpNsi1btyhYxwCfwvK1RziagKEnPBGY6fQfCnJAwi",
  "key1": "5cxVkW1F8voLkR2xMCWwu4rnnZaAHCYF3GCfboKWJ9va5mZC4x3xEC7ruwkXQa9Jt8Jvv3DT45ZNMJnsCJRCc8Ro",
  "key2": "3u9mPkrkQtzX2bK11Gt3qZ8VyFn6bdtuPxW9n78Ns2EFC4nmFtPfqxkAMPe7xfpr2xHYeXNJKE6QuoNXMDaYrpKd",
  "key3": "3BzjTebcQxQaqFEATFYTSAUNvMKWMubCpnF946uWAwicFqnuo6U5PP8P5kQBdeqjjfAjydrq3CQTn56Ch1AZQGFc",
  "key4": "4M6uC4j3uB49kmqZHi894BJpAy4ffjAm6QnGRuguitU7rpakEGKxBwDDK1Ets6tyuJiohyKKNJf4dKrfu5a7wYcu",
  "key5": "2pPBe4hKTMhMZoXqj58FvbBKqmsQzQqKegHcQT1MyvPtHexuLUVNhasN6ALxdNH8nLNs9f8rUho5tq2GzbY62GeF",
  "key6": "451hEf176jwPa4nRireQCLXeAZ637XQV5ToLjyvepZuRfsWdrcaooKmGfmdBVZ9ZwsTrHb3P68PzTrTtmZC3Mg1e",
  "key7": "3fBzpfUcBD2ezBVv3kPmsmSt4g6yy3SqFLtVoie8ZvZMLQtSKcqS4rT7wodx1LCdThs2qf7DWrRWy5keyNA4CPAG",
  "key8": "4xMvPaZyrsRaJUGKA1Q76utQMQHfh1sotBsHEoUjpkfdzqzCDTMrYruUrfiDASrRkEr9WebJG4WQRDvj4eLTJjX9",
  "key9": "64C745LsTUV3PUHQKcfhSMWsHAvHH152dAa48seRUAH8aKEwyDHHio779UVLRAoCPjh7pNnNFtmDGfQhPCm4gpLB",
  "key10": "3zYh68kjZoFRuUoSFrvWZ3rtya8gA9utUrahhJcG24tbby5k53M2gYq4NxHN4c6ULhVqFWheaSDtGUWTb43JDUdL",
  "key11": "ssj1YL7jdhZPj1dqg9y1LsEZAbBqwqhMnYXgpiHiZcjtnpEZWbjZnySeSzqzkM6KeoDyB3eJUbL3WmkGfQBCScz",
  "key12": "HbZw3nJi2cgxSGGbzii3AyVRKt8YQb79JYZA1YmYPnhkZM51yfS1H5dSf7dWJN1WZhsCUCSFE54yj8yGGgXwNjA",
  "key13": "mVNjeXARyznVNzQumucpWz9KnwTCmWebCe1cv7pcw7Z1LbiKWVsQPxTwXksJPbym58ULdjkPTh8XeyT4YH44pu8",
  "key14": "1C7QrT9Jfg2yVZHDFiLYsKGmKRt9yayvLmC8mG7earwByz4eLJmr8WDdCKJArWYNWmaCkxxHiSGDusrbxaC8FKH",
  "key15": "2YKfxuyt6VKtHJC79QhgLrqLvWLPtTAqiJGTZ4o7GSRW2m2ycSpfuwzAiJe44Ba2zJAbVMDodPEATuunWhj4CZ8S",
  "key16": "47rN7zuy5Ygi7oJVMbEJPWm1CJDUdAfebL9uE1yLSxFCiJAT99d9mHPucmhSd5gJVk3Pe7aMTJtzoZFwXqHYC9NR",
  "key17": "24W5wyUkp2cp2NY2TuC7LdwT1dovLGRjd9Ho9mMLSa1Hq46MJmBH2858A6czxTBRAXCHuvf1vs6uB65DBdABYKqE",
  "key18": "5Hd8jzRebFdajGVXL35vhPH8ZDiWnakcbYDicYTmaw8ck72chRshvUJ5hhrp6fjnk4BwRAsCnJQh5E1YZjbgwZxJ",
  "key19": "62m7k8EzYaGdnJsms2fnz6rYfUFAB8MEHeVKYS8aXTx1Atw18hFxwwCdTjpa4cMydNYkfJwpW8oGEx7umv9z9BXc",
  "key20": "4ToR1conofsd8umwgZDfAPWhZuapFGL43iVGP17NpRMTLHKPKcWVgvVGCMCb7FhY45VC6RVshkdVQ6msAB1wk7FD",
  "key21": "5KDb11gehjCEhipJPfFb4ahsFNR12GWsqK49FyWs9pcwfWSAnYCZj6NRbZ4dTaH5ibSK7PbcbdfW3WXzLxdMC6SQ",
  "key22": "7uGDG2zZkvdfn4RCV2DUakvGB1m6NUCT6xDoRAsmvvMc3YywvSYJT2BkWLNLgobHv3KbvZkZEX4kGqEag57nePS",
  "key23": "54LMevFGVVZUJZC9dpTXUmL6tzSCrxTfwQyvJWMpDcs9PX75D21iVjwy5hpv3U3n6wMXRshWRWiFDv93gRBxaE2i",
  "key24": "3rX2H65iJv4JvDh8zViYkYFf1ecDVn6i5gaKLzwmdrm7aDDPc5haDhYSc9vg6xVqEJEieFa6JWbMVhhUDb66BCGs",
  "key25": "5STmfNUxZfkRtgXBSdsyDRjGbveEdsL3g2qHLtZNbFfEGjtrN5mJjRUKzyrojoqW4VW9haciCxpb3BACb2JeoMXt",
  "key26": "3Kyofx4XGegXHuFrsBkZzK3vu41FAz49rtU52gxg1AG9ztRDrdmG5sTL9iyqVfeBXeCG4FWkfq29o4RB6ipJ3Qqx",
  "key27": "EsRWvLJmAniV6tVjqm1KukZPKZdkiYy4o6Gjm7oY648rTbwPahzAJJZ9v86t6qbhsrGcZMxUWRc7yx3Gs7ZH6Sy",
  "key28": "PHVk8bNGEQPAKfXsYizi9YBZ4cRSz3vtHXEJFRxu5wUE3eN4D9uss1o8pdEyPfi7tSSf8HqzgoN2aAkT8BHh9Qd",
  "key29": "4jU8Q61uxNwu7bX7vY4Y16XRkYxJniF7kJJSbnVv4zrUEuCcG84mLq6DSPZnhtowFmq5d4LFaRN7ch7aLPKyhg9a",
  "key30": "4fibBuanmcqo82eGjmgNS45EcTgPj2vLMh4dj1dyGW22Z791yzzFua5pLY8mGzNS78NRa5PQgfsXNzvoJmfhZhtK",
  "key31": "2BBRVhB3KJ9TfaQThaw4wQsBsRBXxVUi3eknpCWbSMdm6JGs6YSP7BZrsMTeDJGq2WHJZooasToLYe9VJieAU858",
  "key32": "32TSUMjpjSo7yBCNAyZCF5pGsEPVRdYKjUqpAkv5CSoqjJAvUkGhQKtrt2p8Qxmq6KTdmcESwA1KU6CGAxUiPdSV"
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
