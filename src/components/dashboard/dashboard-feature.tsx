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
    "wec4bwjNDk95GueiTofz62R2GGJaomhJfCGAwi8LYESkmTLRVNxxHegVpQ6FBwuba9FzvEu8G1HzgEqWFrXHWF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TzzfTfrXtHm8ajT4FKLbeRsuzCZ1H2n1WCco2eiXobhdBTQu5TLQUdML4FL7jK8GeQJcnGbTjM2pdYVmSVcYg53",
  "key1": "25u9Qe2E7irQF1wjp25goFoNnoT1LhwaNdbkJycvCmg8tZ1hrYJdTsnbiwVnWUqH1efrjzBBiFR2RJeVPiH8Nkfb",
  "key2": "4o4XjsJiHeMENkJ4eFqMhiYK8Uqm86PR9cgrjac16X745QfXKN5FNeNYZkmpbMSz2ELhSTAee87maZcg6Nhvi8d1",
  "key3": "S8Kfkn5jLvfCV7BbKWKpH28NovEMJHRDB9WEBaBE7h8BNmADwMAAxCHHWPmP5MrwnmyfajBGvqhrWKZGKcv6ZCe",
  "key4": "41LGJ8ZZes6brdT2SN1LRN2cZc6t5Mzeb5GvuSWDPZVFsmzMLAk3iSjoTePjKvNJJbpe2KhXWZQ472AYNfVenM9P",
  "key5": "55BFTqRnV2Dpa45cKLW2pmsRT5QKYzWVQLKbufQ24TLqwx6P2wS4Ubdejbx6eTE9ofp3pb4bYVcGP4YJ9iTW8PQ9",
  "key6": "2BRtt27jYrfwUDw8FhRUy5UXXed1KjEbKSQMVmKgVfg5eefhP1YykC2FDoK4MadYbrnF7z2DjZpHA1hwQqF3sSBv",
  "key7": "J1B6RycqhLP9JPasJNPW1R2f2xoycuQaDY8f4TMf9ahve33ryY7RZRCaUAz4TAA7MMRW31RTqKhYnJjNCf1GYSD",
  "key8": "5TwtHNRTsA8Nrecp6uswQTNThUSfAN5VKu6CAEEje2xbeNeFJ2UD84xqxAFbgV3TVZGB6dKw6ytEN7NssbthZEAT",
  "key9": "34NdW2qRjBcKrGAvRhMmhCRi3qc3zT7Ug3ZHYBesyn3SJPTTMSLvwy4BJVuof6Jn7a9fB7aAd1fKehSnLmTzfCZ3",
  "key10": "5mEv9Q4VXEQBdD7iGm6EMQZeLDYLMaMan8MZh4Agvg1NouKqFidrA3xb5NxQqipoiaiWoUEjqFajRAzi4Jjhzwzm",
  "key11": "3pKietw5VR5QTv1scPPEbCgsvdJVT5cfhjzKiFrnjE2QnEy7Ane7DhdKbKAUxVgfbQuu8dcXH8ibexWCFdeW3Qfc",
  "key12": "3Z8qgpvGEb6fxJv41tbAsD8pZ6bVxodhzpq4XigNULyZRMBWViQdE2rsttALvnhNpNGtex5A73FUAfK5CNT7fefs",
  "key13": "3ceNdzxVAZp2b1u87KJeYQBgAzXEar5fhZzmz1y59szjihWEUvURxxevoBT515X79YF2jBrecN88gwnoZqnz7iZT",
  "key14": "4oEJUdca3VLotsYWf8c4e4oi66TVbCtQkU6sUYyQqy32znxaDCbbv5WkhP6x3ysVNJYQ5jNYVHaAPKBndH1RzMJs",
  "key15": "454SFrDoZCYbxGFfNBupUGJ6sg81PwYT8CSCNeQjRg4gdpWRV2D8cuU8iJ3bHfwoUi1aH2nHUbZHi5SC5rmCaL39",
  "key16": "5NhKL1CHbHNzJu3jM6oLsYsWTN4kkWGBXaQmvTVbDv78Dv8EU9Wq7Y3v788JoiyZ8MawJva4gvGhwsW71Qqv5Zdq",
  "key17": "4vZnpfEWKWXCFUbNHCveQ757hqd4GfLnyv8LCaQs9QCShAk3wT4FHLe2DSggZPnAkRxup2qeChk1z1qtzW9D2rv8",
  "key18": "4cThsL487PCGkfc1eERXAMifgvBGQz7mHEK7Qyps8MjMkMoaU2cvf8sj4i4UWJW84u6cntaWag5MZYFKzSocudDt",
  "key19": "2AASv4ggM4khXAQ8qjjJ1aNMVhdLJRjVkDpXY4XvtfrxdHDSdMa7HB7Af6WqAZykjQCJ2a367bZMLFNEX2SLFc85",
  "key20": "2qbhX7m5cAi45aion9f2XTLha1FdBW686Q4qHuiV1wygk2aDP2EYd931HEsxubD1jNSJgN6td7EH8bb4ykHrrLe2",
  "key21": "5BCkeqajaqBg1kXU9Wku3bwsLPYoyrknvWLvZb7BSiBGoKpbbRXg5DgHde5TyCGq41bmTMC82CR13A9AnCzAqCsB",
  "key22": "3ipyMkqmhgBrSM2EZts6VHw1bijTxSSVZEqwJojh9MUmkKUpDpynBHUJ7M5ZUFQqXDLAQcWprNnZuGWEtuDX6HjV",
  "key23": "64YviA72iLLUxFYWfeBRcQ8z5HPJAsU3Cao5Ns3XxxiGDPt7wCNhEg2UUExEQqVTS4cbpKiTCPB3Jtcz7HQXKcgG",
  "key24": "5poFuYYBVY2R3swU56PD7TG9QLtvpAraR7DonLfCnHVokTFDjfBVVyodNmwXsEH9n3uv9MAkpPebePVKfdtyEr3e",
  "key25": "2GBwQKUqrFSXfMeomEidDBpPhgxDMEy5dP4MqTZm4eHWKSTUWcz3Bm8RgG17y3LbyTa2no1ZkHfaFztsKei7GSXK",
  "key26": "6442k7DNKFuej2FgfzHUFqLga9aAaF5D7U7BU74zJvw888JcRRU3aqVER2QNDJZWTtbaYyzyH6ja4UMe5cdXEvjM",
  "key27": "YyehMLsn2voewNvDPZxUZF8UyCzvedBdurfob5uE6LYCpifXGbVdeRRgvsDbKpb1EHJwR4DC8CfRcv2PpTH9hx3",
  "key28": "2Nau7rekbnSXfV2P7ABXjG9Q8cp7owGoCigAf22eoM4yg6RwFza65KcQ77Xttvucxrf4PM8NkGn1SBi7thUQXSDh"
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
