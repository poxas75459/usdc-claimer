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
    "4XtnGBVz3d9wzGUMVgjRrhHvY5zjoV6maJ6nRaopkPeUsftahCfXvC7K1upi87sbjJGzUaLVRjJfPxcBMTxhtnv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fFZFoV5PZbmRykm5QpCufafFpifqgsA8RNwLHUMF1oJ5vnqtYbnM9Ydf7b2pqdfWDpnWYmyDxcnrCHbtMVDmbxy",
  "key1": "JdKRoKd7sBBheYJp3L33ELHKUyXGLXRcPm43vwNP82KSL7Egko61XevTa88vf22k9DK3tyBCHYVnPddzNgXpfeR",
  "key2": "1xdQkHUnsHdzeVvp49TBmEqLG3dsJ1GMu8gif8ohSBCCrsPVXA8H4VLMb887drV7YJnPPjiT2KD9L5h5dnMSD67",
  "key3": "4uZ3bvVYZGznKzFo9vzoHs8h28Rh6PoDXsbLiyHyvYmJodGf9MBdYw9HvVrr7om5q2KQuRzmM5KQTZdW1AcvNqpS",
  "key4": "4MJ6NTEqa9TxdnyGTwPRLu42TyZCzyqhmAemjDiHecUb9CA84XFzTQcGRveoCNXELHkD37fsm2du4kuYWs2tpJUV",
  "key5": "mrLYkpLz9qiQjwwznRJbdwpKfff7wqLR9YYYyGUYXoUjdKT6NG8YuK6onp5keENS5kSMT37mqFxdb1Z8ELdBAUd",
  "key6": "2NswsxW1fhhnYXGLnMxUAtKy53Y3gRMA8UmnsRyTU537wBsY7zuUGHztS7rvsVypUND1jgmcFyCJaNZce7jyHtZ9",
  "key7": "4QHqRNihZKskK8P14zcZ3vBNJ74T6Ht4FqLRQYmd9LNj4yBeCk1VRLJwdSABZkMWSre1dLYTdkgNWRUycEVtWVbz",
  "key8": "63wvnrZDeiVxZiPkBrwECihFAUeLa9sxX2TZxcDxi2SbQDf53iDK5HA4CZou9RKSsJn9oSKxNUVUfJ2KpETpTSFp",
  "key9": "3129Xe3zFcEaJiakaQ4Ed5Co65JXqHrfNNhxYH1usQz511YSE2CrUVdxtGrUtHCHuUS9kjUaxgQqEz8dqvGXsiq3",
  "key10": "4pwfq88Fzga8wK6NhXYtYMFd1V2u71ZuDZjh74DRXJFSLAaw6Ri7FvNhynpwxtbeiKq7C2j89dwCTmxiFVpT9NGS",
  "key11": "2WxyDEKncTbKswusNxHVyoEc3qc3BriVspRVaoKPNCKHfz4d7j9QhPWELBuHADT3nj5RuoF6fW5XTh6ktQeXpLHo",
  "key12": "TuN5Uo8UYNNBdP5y4uAwrWANVh7gHTojy1Mu3ywNTugzc33zz7GMvWuCBnhTAxnfNvvP98zAzpAVer7eLVHMpcn",
  "key13": "9ZMDCXExUC6DJB97bGQ7pd5f5dwhkUoTFK6Q8FdSZQ7Ppw5rWctjB1mbbxaY4z3hPePk8wm5h7SSq8nB2NKPbv5",
  "key14": "5nciQqbB5NyiSS3jaR5jdFpWCqt5e4cvup3JTqZnubf26cgN1ZqnTXFjaAsZLebGFfc3y6suzUGSH3CKt69tjhsr",
  "key15": "3VsNQUjq6Dr2jKJxne9tgmSra61aj5aQ9KbYLm6b1egYTkB7qHJpidcmEVhuUxwg68KRSf1gjJefqGpRzXgwVt6N",
  "key16": "3NAQtFiX1QkU2D5fj8WxKQuLMm4U18MTSF9iRDQeJxgLj4efzLeGZ9k47EL1fU2RKjk82aWuecNTXpd7RTWrP6bS",
  "key17": "4KadqENftJJF4pyMYSDwtTtjrKFZejNrsTe2PE9yNAY7aaCcFR95t8AFnnAuYCnx6pktr9NQybY2erHPyn9cuPFh",
  "key18": "3QzMaqDYFKhK3YMWXJs4dqepjj1toP1eEivWGHxZRQi1eBUpq57eocPwVBF3KJkBE5AjNp1SGSDtMVo2ZmkyTUjf",
  "key19": "bGd2zFnUfbBTf6bigY2hNbbrTokhGTmgjQtSuU5yDNWc2WeyBsB362C9cCLE7rHjSnaLvfUSDEb89tseMXS2sez",
  "key20": "5Dju2cmMxnTMiLXn7wD7iwWSvskqrGEdktznF9k91pPjSB7sXy3FmNPqqVLjHNTvW6gNjNjKvwpANVsGCQKwqAMu",
  "key21": "2oXeVMwMdbB8dzyM66EE4y92VVTREDsKGwqahLSvJ3DfpmBiKuVnBkAuJpzgM7wLjMiKA9vEveXbxiT8spkZuEBq",
  "key22": "4LVvbEHsU7RmpSM7EwnLKz9vtgaTYQ6vSA6hbmS6Dpfj6LJGwSxtivqeNpCkUbEACGoon7trGBqXUuSxSWo1TwDQ",
  "key23": "4zjMzDxzpTJpCLcpF6T2DiTnCL4Fofwg3e3NNmkAVkSXWuedJyhZBUbMDARk7kaYnPQsczfpjB2JMnXD3phgisYq",
  "key24": "4JjWQfKYh7PB7ifJKyjtuNXwLbeV1ZVUAfK6t2h9hu89a6AFN91RrQg5vKazYuXgXXdawM9JGmQQSq8nNvs9vxQU",
  "key25": "29vgUneixpPQHyTaDHRZ7xWuhjJjwwQLXMDwoEKLCYCqGcD4oJnTcW4jYHhbcbfy5DARHQXjgLo6DBuYLCefnxzr",
  "key26": "4ZduetRg1LyRV3DKswvNz73VSxvHm2iFMJZnYmGLc1Es3VshUthEUbmQMxpoNH5ZvFkb2wNRr4UxwUbBcZnAoq1n",
  "key27": "43ccSwtkwvkCb3vKwUyCjdVq52bhsfKPV8w7tzFjU66cVZHVZYkCY3qUuSrDPV9oB6aTjtz9D91wSBVbECZ72viB",
  "key28": "2bbsisWYiQMwsfDCUxhK3YjCkZcooT8txuGFowijAoKsHe45QN2diRpUbCeUDu71xmaNKJ5h8SMmccP6j28SXPSA",
  "key29": "3nzRvrt4jicNagPbcSqXauhEgyedpRn6cDvCfJKzFBU2RBKkvwWoqNpmNrmxnHE1Z5m883nbgxNqojDaveVA4xop",
  "key30": "4WvWBN8Auwru4WmYh37g5cxcfRMzdEHJG77FVbxBvCnHEcA8n1KeHjHvefWoTMJC8L63pf1mp5E4c4D7FdkDLMZc",
  "key31": "5SEFCDYsnbL5uvmUiBrw7Tmf7kENmiVvmKSKCxYdWqpUKDL9BuSx2bMgrNtoMEDCVQE23rrPvfgxxTR6oncYSeu8",
  "key32": "23NS3bKw43YGcadW6WRZTSR4dpTTPywHkDLWeTRAFhD1SW4SvwjWtj9VNJ51ynmSHngArqDeW6LV967u5qkHAXuY"
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
