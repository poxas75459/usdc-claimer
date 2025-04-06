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
    "5KkpFYGNKVc4JHV7ftKgn63RRty1GdCRWT2FvomLDEq7zoZwSX7eG2XSjGnoeVSzRbCA2UT2HwEKmMuSYqGkCNQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L6CQw8Mwd4r88yb5ix9nxcpRUQPjSPsJefD299bi391v2iCocR7yWirj3weHQqVRLjRzdBWDMN4A7ywDUXW3Dat",
  "key1": "3UvM65xQ4P898SnUxZk2KWjH25BYGboR2xyB1DNfZ8zBpYQZ1cZhMWNXFmnarfsCBmtMGGiC6Fcbr2iLX63eTF1e",
  "key2": "595EgTozjihWXjgSMsCAFEuje5Q1vpDjot6KYFrwt6iFzRgSeAxkPPMo7SpB38LbkbPToriajRG8yefafouMjU4e",
  "key3": "5EzCJKRZEiFEPKgQXqwqKqMKyQDcNZxicLjqLw9ANdpfYF2521yQYfdWdBS4hTAfdtgS56QCU4h9zp6GvxG66asi",
  "key4": "52H3N9f9trvzLoFSnxFja7J8w1QyVcBpD2DAhFoMUzgxm6kQfe3m1HbyHGVFAdqVZ9wcyt67kNCb7e5PJ5yjiGKC",
  "key5": "2H76fptpdHoWPXAnQovUYi96qRf2CYscq2evTmWwF3XcMUnzscCLt8qTChWxgyNLcS4UuopEm7UJ5w7C7BbH7BTT",
  "key6": "36JXdM8kZUKRZvAKA7zWcLK7wfXkpVYApddHHRZykqbLSMfewouNz1aAD23kpXzwSbU1b5mrKahnWDPDCXeiFaqQ",
  "key7": "5eLKdFpotdoMw7xvqUVSHjjRQzMPLc8dzd7ETDryYUczHkfb74ATyY7GD3MgBMyNPYx5aszLvbX8NhDEXNUWTTRD",
  "key8": "3es1LWFFKDmJ1rUgZkfkuwqhDCreJxa8Rq3GKVNpnRvUoCPQxawLdJTprPwSQNoqfawZ2Dwv3SF12S9LjohttSKD",
  "key9": "3GQMXtdBw3gCRjVqpeVUGeURyP58TSVpX2nBnumJ6AHN1Zt8fotDKA4wGVrGzsztQJnDzURshVjcjqmwgZfCvUiQ",
  "key10": "4ryr2XmVyLzWhCofSyp7yPJTB1PPgm1hxrHiH9pSFwfCJPeCRfJHtKspve9XQA2m9LTQkdaG8VWZwYFPfZbKok5G",
  "key11": "xtEtG7eDXTFL4JzZQ4bnKXsZ5fK5mrNhr5CwR2GehuEoXnfhFZxTKPwoWvqAY5ZAREruG7Xgf85GoZqkEPEK2SM",
  "key12": "2UdcagxbP6kjDTSJvueHBKzzZpov1FwMLdGgQQVGmHpks6VZcAEkYMoexqxQKYAVT7qqSEUsDEULPBtMiBKXovcR",
  "key13": "3WBSebz3y36QwnqneTGk9AmozpbhkUYoRMF86MNFDMXZD22kX9HEbtEVAYXJxXx8CzAtLmqTMQsEdHmtJHtECJw",
  "key14": "3wjCcnaAJYgnj5RxGpiMAyddxpqicWqkJwr8qCYmwmRfVMo3VX5b4UGn395VYSANNhYnhjVs5hGk8SCsbqLcu7zp",
  "key15": "25BqB5aRdDCTvKrvqpnGCA6ov94BqnqzVUFm2Hy7HsHzRtt8kEi8K8DEgCKkmAjHj3JE9YwhEi8kQbs7HeGct94u",
  "key16": "4pFMCFteT8tRfkFwKjj758WPavPKsAaGp8bjsKdMKN8BmA3SqXXqd2xNdkdwEL6gYBpS2NS8jtP2VzPtPqoTtsKp",
  "key17": "45jtFuwsvSLkQVgF6z4THFBuMwFpsyUDi5bHpxyMNfYXPyyGEioGxXXZEgsaqFuvahiteGDwrYTHtrzVMg3LvsUh",
  "key18": "6GXqf4cvn9vajrF6xNUZCamyHcMRevrEhmqsBCji7g8nHig3AVnZUaivR7JsM9vrUuhujqn2bg2zvAbZQaHxJeb",
  "key19": "4hjov2CyDWHXZCzUpQjGVWQyYLB5QeDFcr2kvxv7oAZCyaAwdUjb1LmrvucPaaxW55w1NoDvqZdjt7p8PEdQ3V8",
  "key20": "5nsWihk22SjEa5nESaaPgmwkCdQs1bg5dv9CQCBQVHUFJvsKEkrWSbhKVm28Hc1VRJDXsfRfAvRaZAapTeFLRc5n",
  "key21": "4seURxdLvybE9MbGuejs1LqBKY8NjhqEWYX7YsyobW4ZL53aQbniCTLZBBhriUbuyRmRLQjxR5rd6g8hXdWrxXRA",
  "key22": "PTPD7zWSWpN3HGsuTT19aDm7VpN3VqWGed8G2Eyfhpsugqdc8umyDva11zttxW2fU7UD5w1dAiSHESavrgP5Yor",
  "key23": "3QWec9PH3jKwB4gV6TMZG4qEVY1bqJhpUj4zSuGRkPSyHWsEcWNfkUGqybLPeXojZVXBi1oUe6dTyQPyzCmXd2x5",
  "key24": "3femxv2jnjXhRWPczP5ywMPooUsoyyXiB2zRGa48Z8tDQx4mKi1KaqTuEdcVT9GGwejdaQXq1kbqdkdHUxbnxsph",
  "key25": "3XP9vLKsiUsPgGNaF3Uq1haz7seeE3htwUC7Ucwm9kSGaZU76kUgi9rEX4ixmjzjYW4EJ3zMfY4ZJHFQAYK9XUty",
  "key26": "4psBDHiorzMiBkRzsQjMetiMHXxrhyRskWN96Qk7gDpde5HdRTxHC93x3zy9GZiVdDhrq6QASVXrSaj1p9d7o2W2",
  "key27": "41rJXg5L2z1cwMkZxHzs4kZaHtkoiPSQLSdvrgmgXnNjaKsi3kSXE1FhxzsM1B5gzrjxXUmqsmpZ4UsvL9jyrMe",
  "key28": "t4fRqNRtihP4VdnTV4NJ2Sio9xWVhZZVVsND9nKYULt2xJHkeSQ4jRUfhenMey2dLnzL2qCxyiZGVDstkxeVY5g",
  "key29": "qZbokcMoBZ7avzLTjahw1rZuG9qMqhKMEN8jvQ6Kz5NPQvGSxtfEDtLSAcXHWniMFou1KURX2u76NFKCMdo6VUo",
  "key30": "LNsqYKdAmA7qdejzspX7ucc3XTumn3ZPxwya9pzxg4gPfgUJuFPHycWx5J5etCV4NvWjyNfrGotWBB7GC8yMiZ4",
  "key31": "2EfnqDVpeJvZXXK6FkpVh9FG7V4WCeihEqfB8MqtrYnHsEfwa4j3DwAXyr26n9hr5HwHC8MWiMf5AgkfaGQH83aV"
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
