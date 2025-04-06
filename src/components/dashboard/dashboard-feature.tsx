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
    "5oVZdXUBbvkmezFNCgdCVQ8CkpHwB9Te2YbqoCwAq8fadzZCUvMapgUrcbvDawNFs4BLSt28FpBV8KoYJ1CFDkLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hp18FTRVNGSocWb4eph8MfvzCBpUaRbtuRaJtBdfJwKyScDA1TG3hUbcijwHrtxfUaV6fn1N4DeR2kLHEvwHpVy",
  "key1": "5Ejya9XPgCoqVX35MsYJN9JMHR4kkff3SijMJBCeGmcT8WvHK6oSr3EtpDFKTLvA1oUX8LKimjVAHmK8uJQrPYUQ",
  "key2": "v7SQmK4jjxK8URB7rFELvqsHMM2WkawVHw1snCvGoiemi5vBAErek5JUGWrguJNJkCAq57gm6Sys6gh88g4KjfQ",
  "key3": "4yRkBvshhVZT9QaSgPdyuzZBVx3B672iqiqMkHtXMebqajWNuG1Low9BsBds4RuqmSTXbiEE8pM5yGevHvtzAT1M",
  "key4": "2YnHvo4MLpqy8J4ZJSnKVBQBS7vDfCw7N2JRZXYPowdemstLUoWJX7yB6i4q2HsCsW7raMSSPEfNxncVLhyrKYJa",
  "key5": "4u3v5s8e88LAiyuJxRXfvY6r5uhXaByTJiPwQ9CjZVF2WbCV6SWAp2xXkFJ7qmSCq4BGocfRfVA1HCffYfqYgDzE",
  "key6": "3sDNHtEUCPnMZHCQG1k489ZT68HxsXbyeXC927YSMfepe8jxprqDJwBzZptA69wAEmnTr2aKd4SWkHCv4HsbEzKJ",
  "key7": "4WY1QStD2tXaqsAYh6UgeoYLWkG1BXP9jMcrQtQG1MXw2nXKDtnw1gGrE6bCPK91ggUZ8rA5NAaW8GLD7x4LnVHj",
  "key8": "2SFTw4feHVm2z6rDWyvHww1BJJBkrxPxcpRW5Rs37if4RJKCwBwZpch7d2hpnDnqJpuWS3MFRLFjc8jGg4Zq9odx",
  "key9": "5ijWjLmVPmSrsPdNvf6BnfhkPFgHtXmKmyTf77ecyKVs1YwGcFh9L1g2j6M9DTHRc2LAAMG1FJ8cx7Vuh3ChqPH7",
  "key10": "5dMHzSBuzvWu5mJzpLx6EYyCa2NYHYqcubFjgaNizfyhDavczVon2L3U3EGStXcf7TWBBz1M5RQJMVgq6KtgQ11",
  "key11": "4EnHwo48SrCqRQfAxipC9uvSe55CJXTTYR7fpsoEcfhz1YtH1kxx3e8SX3X5xJTt6kJ4wzSsFdr3NQPyu7xM8SN",
  "key12": "2sQb66h99PqZBd1J28NgqLmDbhePjuudSUSH8mgnpxiwH7f6mmv1vFT3R3xspSYBjjnicTHcyxFeCMS1LTmQpu5N",
  "key13": "2G9bXw5EFRV7EzsY9iFsVNxPKRaZk4aT2qDtcPWjBNMJhsVahpBTvzj9NRByr532kUPpvyVGmhXfdHYkVQYWiDqS",
  "key14": "DPJBqGiErkLAngxjNZjPQYVohZocmwnjc9hfvfCzRuydPEnf4SJ2mMcD7LMxKjghsr9cAEYngSKNfgKTCShUppT",
  "key15": "RBAPMhy8YXAbrUH8c7w8FHFWaAPhTZxbvqd5JGfnfjBJKdEbJGGSSY1iwQfkR5XkrYRpykNxGN4HFC1KBAuuo8o",
  "key16": "5kcroQwQmfjZ1h46QrE8tpUSEunNv3pyPVTsgTfgM4DBKvtoz5maixQ8WDdxnjhrLPiF19kTmXFH9UPHwC2EoLbX",
  "key17": "4y7iohuVUwaMVhLiCq9WW8RZcEGgZAphePYyJ7DWJaEawhVHxBAA6UmCeVUYdhPk5iySw4XsvPoQDEcyVTA8ZfzK",
  "key18": "59mHoTPvkW7Uqn6TqBXsiYKXWFtKBUX47qc2yHTxEa9bnPiAUrqW8m1nCa1ZgQTazzszYSJkyNGuZBHmbPzTQMNd",
  "key19": "2T7o14576V6ZzETDaZg6vDjHsAUc5evsRCtK9rapdT4w44cUVQ59PxCEKSphcuDDgbCtUFZcjpgEruCUEZTXBFgN",
  "key20": "3psGVXcksg3JjjmF4xHAyW8GjkdGA2ECftCeHLWofkfN8uQ4URwAjtL2AtFNhUFn8YRXwF4qTp3hMMuC5ba46XVv",
  "key21": "4WHTSxLXKbfBc3LRE7smPgLqxJew2QMApKdjMouPn91jzKxogRHhPW7f7CMf67jNtmsbMxgytJdK4j5YVzqMhjxe",
  "key22": "5mv1sZTFZKDDAnDp1VduN4Pf4DyYwsHVLh2dPAAZFUPpWRsBWrRGqvWnrp2bTdEHNEM4U53psRpEheMxZFSirK4Z",
  "key23": "4wu16zyo8HtXmcoJChzEPYVt1gcb886YZZAVn7ogpbFAF3dSnMvwn5LvrkrZUybP8PmGEeHEFtnEFMfyarTZLGmL",
  "key24": "2q8NgRPU3K7JReuQCYQcq11rDBocNB6xaARAC2SG8D2UVm55MN31e1FWwbDAcT3BnJQgHaxLgKjK9SXGFatvXXdp",
  "key25": "5TRYECtwtgSEspAd2VCBeszA1NkuX5shD68ceyuzqkJa9UrTM9dmveWvWoHXdDum6xiKCEC92RfMXAxj4sYvhtc",
  "key26": "VdBDCMHEq9XArwLZyrmpM7uRsPGwTjVfcN1nCawsKfFBWYPAkCyvxGaMCwf45N8e7Rbj9haWk6vwa93KkXNqaQZ",
  "key27": "3SnRSHnrdQdWXCZHCgb9oVaHQtg5zM6Sb2Wo71PTMqaU5adGHFokrh8tRs4fkMoFHNkMQkA591ejSKtKAfzY6VNu",
  "key28": "5EcDRSJ8C2T1jsz9d8NRPcQNXo1yQJSbQTbSX979CXh1btdapwCVMr2WFcq6TpBexGgcg6Ewxf9VW4Vr5gHEFah9"
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
