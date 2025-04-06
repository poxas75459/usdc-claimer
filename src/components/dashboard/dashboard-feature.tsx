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
    "oVubEvG7CL1WFynNffWLXfSNAeFUSDp87ALKSKEMQ53s5B4KPTTtnjnkp9HeXpFYFQMQBSJLHN1wH6SugsYoqfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KqWq5hG9CkDdMxi73bNemJDHbQNqSKdv7keNc8DuqMsnkEPPZGnpxzfZG7fuP45yGCeN2YCMDjtFRDTjCpahnmM",
  "key1": "jZ834ktf2i7r4621z2SCtyShHPBZhvDATz34m2MwhGN91mHSJqfvtnJif3BCeghYhauHm2S4W9e15q9LFHLrqq2",
  "key2": "5rHR4afVdL9pErmPKZ6eu8JxtgoN4s5trkmidAFqfTEeVCJhk15CZe8W1fu3mqfYjqV4UFGNhGkZQqoZ1FCUGtCg",
  "key3": "4WGQ68Ce59RuJFKaaBJiF9UXMjox4QBPTVNVrgfztsLrpZrjWaUisPp94SkNap2JzB2mHJkAF7y71XNhQ5S9QMUH",
  "key4": "3nqDyBQGCfhsLnugC3g28e2HsLxt3u7JFRJmrJy5CkzTYK7Sjm4SKWjxZfj9NHkyjWV7DiUr43G7ofiMJbCF8PPq",
  "key5": "5Rwnnchi4BWWo737JKGvNJJX3ceH6Un2hxyfeP7S1sC4v2rijPLhRTt5vpTXehjVTjiwG6wdbmvWNHNLUBJ247C9",
  "key6": "4ijkrNvkM3RCui8ce5ADFuZ5mtceoMLSQYqAwX5ibyZ3fXieS57w7vNBBbK8bwDk1mSY8obSjDcLVPkrYCo2NpgW",
  "key7": "2brBpSPkiH3KpyQRxoLfq7hxq35zW5AC2CxH4twBs9DN3MXxmcnUN5mYNuWvPVL9yRkAzYmURYtGq2aaBYEpbEFc",
  "key8": "5Ks1Ks6VLzT1CQ5TsHeSbhhSsPT7SiDVQWEx6fCdjo71X4NQDwCMLuP4WtpZGbetWkFnsmZwusXDcYCnYmnU8xA7",
  "key9": "5NiLXQiT4Zn5Yi7tHxrCprYnzpupj6mx8UdQSmjztEr8JGxc4bSyN3UaeFaZDyQ29Xw1f1iGUUJMSRQzoDQ8fGik",
  "key10": "27gXXt2hU3UWoYrCVaHdzNPXTR1F1vmrG6PTQGbgHC1dYxZCz16R7kppAWvnWJuSFB3ZQn6JUbEX7yBzY9efycS7",
  "key11": "824gq1VEEWMfCL8i3VyZB1yp9MVev2p934WLbCZKqLpyWHBZDjF7af22jySXCH2RRPaHLYpTq19BFs4J5q9a9WT",
  "key12": "3Cwo33qPzDGPpcRGcx7iqzciHkLDREA64giiJFX5EpR4PCc1nZ4Sr2huN6tKcgX2jGKBJqKtssM6oYd4XaREhodE",
  "key13": "5d3L9u4MmSvUX7p6Q1UZsqaL8fyZDMGA4VJMJitAJC31fkqmvfgMqVB2hru9YdtUZ9z888enzTaopaYN2cCmJq1T",
  "key14": "5MVi2NJmWeeZDxX5toxgJQkjaNLyqrEt34r2WnkbDw1SDYyqpYHJPD1oCckqamz4rQHWqK1TaVna4enZmXdX2zbi",
  "key15": "46yX3k4ZuUwWNEkwtWj9RopedGq9NGwG3NkjXBiAhf42P1fYjcnUAqwoipTiQrtopfxJwRLMBuq2ffXYcsS4YDzR",
  "key16": "37nXrVgt4UCnirGxMCoyuDrSiuhJwiminxj3uhTtRnTUWJ7zemnFwHWtQDNQT9sbjKe5gW7mYZr3uHjRJfs93D6q",
  "key17": "3Lf7ejaHn2W5RvK5FXWcH2GZD1TD39JHKPMw3E6gM8LXof1T4uJ6aF4rbz2dtNt3T1MQcMV25jF1viXSqWuWVF2K",
  "key18": "64NDSQwqy5KKQjum6o784qZzmrpdMnRtDbcZ1XERF51hgbbpkdUEerH2pFNTraqyqZDyijL5QqF8tmCwUGYPDXUc",
  "key19": "2K3r1mdXAT5CV93CjZPydg6dCmEASsp73a9UJ3w4E5kwAUuBAdLBrjfS8cLumbExCDv1WVEayN7Gasz1EMGKnGo1",
  "key20": "56AEA9efKa4egRbBZ1qPyqiXKVhQ4X5DDwqyWYbmWtH5vanYX4nR4D45rYKZ3NaKPiismCArkk8CNrZbvc461WGT",
  "key21": "2pADbP3NBeGnDqhLLFPoouqWp8iZ85wk5gNutSNshUutgAQd1F6kt17X6EmKigqqCEFhdXjNdznoQQXXy4H4Wv8T",
  "key22": "sDiGp8A3sKDyNbDP2hiDjaE7KFuQenGHocmCg5LXymws9gWvBJgXHhTfS42gUTFsFpekur4n1ZK1y3yfVr1WN7P",
  "key23": "4MtNKa2oU5WvwDwepQBeVKFDs3AbaoeYtMrZgxwsxsiAG4uUuPLV1MLxUQY3YhcBjgWg7UuLJfzv1jbs6h49u6ML",
  "key24": "43LSXwRZLk8L3aEt8jkgkgREnjGiEutSjKVWamSAj3zUiqzQ76JxAKCYg4qQL6pZ8e7AssprnBY9TerNCype69za",
  "key25": "3n3qgPwNymKu7eTskqtLfMD9neQXYhGtnR6k8TGExhwJM94EFWvsPEwUrUBxrwxuQP6ehmwfjjN4FZ96GV2NukW2",
  "key26": "54c9s1yJJtmFQddwQQhzadqUyK1kC1cyNRp4Y28bGiGdcNubGJY4yrcqHcNf6Zkv12Uj4gMJJxV7Jg5tnEj5WhVZ",
  "key27": "333A4LMstTYM2wwRPQ9EzZa9eQKQm3Ldm8F4v6zPcRLjT1tQKJyLrTAn52WwYqfmoMhivmDpXZ2Zvc174EzcgCqJ",
  "key28": "3R1RkfYZ75XDWsh1BfRrvrzyMocM7YBkoTjwFkcnLpjCu4o3grcrHjA3mcYx4PcWjPrTvZLiFw845JjXm1qKGbwa",
  "key29": "5CdfTHHqjnGvjKhyEBaqLw4bDNkqz4B78eetuzQ8SRXB4mEiu647KVDZsR4PmD4LiXvprAyrRgLTg6JFEmXSt4oL",
  "key30": "5QcLQrfDUng8q5FDDACAj84Nbwa5exFEbT7Dq1PvpdPzeA67v7DaWRimY2sSXBVQUPsSS4wdgJHAjUBiDDGVTXqo",
  "key31": "2HVtCA5G1Yi8KF3WKgofp2ZrRVpMmHnaXjCTgEvQMhSRFYN3GJAsipNhX6EQ89B4iqBt9uCjkMXL12KTjxTZVEwd",
  "key32": "2s4xZ4nkpLBjhPjvKLWdmGYRQNbYLrLxm5GbSwVL5hhwKGjcAWRLhnQmcuD4JvZDTjpt5y3ZaYCUeTZC3W7WBju5",
  "key33": "1Lg2GsmvAXQBEg7SXcNjtTGTnSgtDV6NN2rjwNaPfBXRc1WmMdysiC7EWwpeysiDzA5fH7jC1XteZG6QuFxULy5",
  "key34": "4KNRiUP9KWjPqsTmdJgnAYwiKKvptfJoVVa6omk4EBcaGrREZ5UbuoLRqnk9iN88ZeQmhkL57Ymu2nTtWQZ48zfX",
  "key35": "4MoZqCiH9r819DMD854xLRRL4iQdJXzuvW2EREZmYFQWynGyshYzGSB92fFrzs4g9SEeYcTEvjyuvgFTNVuSX4Fa"
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
