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
    "3xgt9GTBYvPnhbH8rcY8H1doMi4Jbj88BzYLTwkYLPatBKrcU8rNhTeP6dzafR9VMRf1pXgm5bx8DPPbAK697A55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "637Q67iciT7b2BGkeQzbFGrNkb7uxMGwqEruVf14Mf2GSgCo16jjHGTkV2Hx6qv1jacictt2uMSPTyvLgcF6tyNE",
  "key1": "4R9SJ1ueF2kCc5CUgnKcc7Fb8oCUNkHAy6nvFm613VAJ1xzPBDPyycS3Vqh3UKd5y3CXCAPZkqvFzh4XB5R4mG4z",
  "key2": "4MSmxKdJ6EaCaPRqN3hYkukKviFPcjmHQiFzPB6WsKhFvNA6dJ51bC3jp3E3QrgqLLUxWJLi8o1xR5PkeqyPCnpS",
  "key3": "4pUXoAkeaLNuYBPfDtRC1Pk2nPrL1wzGPw4LX5iXjhWNZXckvQysEqteGEnJ6wv3VHcYo2k95YabLwqwGwxvVozu",
  "key4": "4q7pzVtYuib2xFuQ1njDWiYRtKgcYFwkrB6gcLCtUBJGXyhvA3ZyWNTKoqMfM6UUXpVBNySUgxrupd2RdxvNzqQw",
  "key5": "443SCW7HEf3N6FqUCkscD55XviASvWdwPQCRjbWRGQqZbB9AnZXo9Yj1SmFXNRudahcWozzFZEtgCa5bAg44rwDW",
  "key6": "5hxKw4Yukt9544LXg2vwfARMccHoT38PtKjHVKEETqqaj2xKPP2mTqtxHLnMH64S3vFUGDnK3Lfu7ZEoqR9wcEFz",
  "key7": "2XLzBxp3BzrsZjYRjrogfEncLxhnh8qxcFmuyp4rL39PkyHfyiYvePqmexxWAqmDCchGpitdhgN87r3mm5RKxuBo",
  "key8": "Xbyhg8sRms5ZBHKC82PeXa5w8QefqEePF5MHmFAJbBtkdGCM8miktB3z4PfdNwJXtdum6FckXubU2v6TaKUsXpM",
  "key9": "5zsLGJNtmYeV2Qqirc7U6qvZbowQHNvoj8dk34rZk1Qjb473AJGZi4hPot8FkjinC8QJzKTazxKuDgqXDkp1Z8QD",
  "key10": "4137FxRrn36btrHZtXXixQiypeEeYZXAhWTtG7mQoNSLzDA4PGYaDTEHmNSiF8VZQR6VeEGEm7GAk3Y2hFuJv6ae",
  "key11": "WnZkcx168o89LL88TWW98mtFX4RsMkhGUKysE6JxYoA8hwBmizrPEbNkEzjacuUdmh2bo5p29ufE9sdD43YychH",
  "key12": "3tEozBXHe1SWLTNz3rqUuVxkPxFDfDx3EkZtXscWTD1YXcoZLm974hUviuruATXUvgYS8eaNiBrPEq5BJgsJM6PD",
  "key13": "5e2qbdZ2B4HgrPF99p6qyBPg3jaHY7wrA1MPf5R1UzQyKTYXAoeQuNdV8MxHfMTp1QpESLfpF3L5pvyLFSTXNjuv",
  "key14": "4QEFbi7bPAqc5AhW6oAVJgBVywBNgz4AZHsmt1JRp3qJtPhx8obr5nGNL2RECcrJxbNCnZ3fhxBxXcuCqnJqMVsE",
  "key15": "2F9jpsbtRRgkqzpwhG7kzXMvCBh4smQELJcJQvr3CyxmWGynpWqaZcYeA9SwEDASDHLYhjaq1XaR4KGHv72qyDBf",
  "key16": "2yLzBkKgLoornzM3rUpgeXCeBkKTVPRENVmU8TaapKaEx4C1ovSW6Fb2DptJP9TEBfzLQ5R1PHnAGsSrVu1KhAYi",
  "key17": "ngSQ4NDQNhVfUeUN4Fbs6vgtMmP4itsbarkxbmJZ4hq5WbRAYhVHWV56wzsXox6KsMUN1ga79FHo4xHXyPrSEXm",
  "key18": "56AR7UviSjG7REZxQ1bBGRDG73txKDcFxMrkmVH58vLYrWThx9i8mxReugAHhzaa1ZNbkmDDvwG5ek7DEkikoBXy",
  "key19": "3qcexjs95opzhBhGvXbJBzvyNPowoCHh25aJovE6p1sXVqbdcwGPWN9vfc1CPbX2FZazCHct7UQuW8gqeVZnSBTw",
  "key20": "22GhcyXuck55QVD4dVQiAajv12Q72e41uQJgGxtf3CoZ2MmFvpTV9xWc5T1jF5bPzSUYdfTf3P5hJshqxvT2r3Kb",
  "key21": "2XS4abq8KzxFY4SH5T1q6fwgdv9VLS75NEGpCkU9iS9rAL4CBKGna2fWvSWKaeTxAjjZXENme46gnnkryePbhNAH",
  "key22": "4NbEgsJC8YAyzQaksGY4qAVCzTZcJSDB2KvVb3saoNWa5CpZ7HEsCM1sKLUYWqufX9Y77KHPcZ5mjCMHupzAocYh",
  "key23": "43bCXekccCmBcYUc5i6uesQKxz2nybZ6uRFM4w4jC8WVhW2bxYhR3nShXw2V2aZcY5JfZXyirBJhfvwsHwCqxKAC",
  "key24": "4qKBuoKZjdZoPgdmCcq9d43ATbQW9XJTE7DRLsyjS6XbYWEPptQxJRf2j1M3W1hDeLEcrCZd6HMpZagNveZFwSxb",
  "key25": "2xuk63gfeTPhoL2cXkJ9RuJ3D7J8mr2nbqhmuR2XxGpsANLMV5ZGJVgZ7xoim6z4ShJAFbEcwym9iFJB2UCzvNK9",
  "key26": "5zKexKFziHTmYz1qomnKzYtK6qTJghuHNW3nmU4KHoAZdF5SeNcuRfg6Vj7kiFd2Sd1nmRxUZyasR8JzRRAiPrcb",
  "key27": "4ckrVygdWEFhbJg2mnb44TTLqN6SKZK65gxzoC2aPSRAqpUaEx9f1whg5zjKPsocSkiHh4SomoFmiB2u6ZwG6FCU",
  "key28": "hXAPidCBNeYEv7JRrqh4efe2eSwHq94wFBJoa8uiJ1cpy3PU4Dk5EjiakxobbepNR9GBNbm4eeYgX1K8ATwkcTv",
  "key29": "5NxM5Hd67bes2W43ssEvLdXodDfPyMAA1E5ekfkU58f1dUejkbwXD7jRqFZYeynhAuE1L8szwa2Qp2tNY5c7ypyX",
  "key30": "4ai9jDy3SQ23JALbsxswqfA4aMjHkhZkF1ceFmtkJL8f5pGeo3PkHN2mfytrTC4hRmq7BZQsQN8ciDJULSbBmafx"
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
