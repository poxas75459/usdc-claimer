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
    "3TeR4MoLfcxvqVkX17h6RYRsMcHkAMh6kH6qUenPCqcNcc9CCmHDsZ4rMott36LHY7u74eJbUunsTWY63yyRrYfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DdRsV7E3nEmLquh5jfroTnyj25Rgq5Yg5JoHfyZFNuM4gKnKafyLMXn5FWLf9xWQQwWLsPCQd1JsGXVqHihfj3E",
  "key1": "2UauJ487tLyvwnLoFdovF41mfBPLAHLt16fN6ZGu2v6VdBTLJSF7BEaoCTuf1XdkvdDYHWzmqa1ER5zix4Jke83",
  "key2": "2PWKsbSySNbcT3vwwUXroQJarALf3f3hiDDmaWMJqs5jk6vLkJGSKSgGQBwJmVrr2U3ESyT1Hht3JKMXq1QeREx8",
  "key3": "7AuiK8udKP8s6r4uqAmc9ohYn8MdUwHobGLfwrvRpF58eifBMmXqdpK7cxgjRSe3PbiFKWDLFBxRFPPDnrEcCAB",
  "key4": "4g9rkqYiLQ6ahnRNnzv48s5uaHsw4mk9Fo6gw3je5AnBxnmCxXCQgWEVdeX26ufv4mAsC1kGmw3QXPxpNFkUn5Dg",
  "key5": "3eBCpv8mS5YBeMQMnMfoSqdoucwMqfX81DDGFwXMmdNrHfCGrjeD7PnLn524nW22a6kMTjcCAmLLsibLwgpgaMHs",
  "key6": "LB3zpkrPucU1RbYfpB6Xg56ZJfdu9nBdW5r9Eu6qBwubUDVAMTn8gKFaQmLZkQW7NxSyEwNrBfePa4tJzfyj44b",
  "key7": "SMvnqDH7ahtGqG3sDUckRdTbRxCdcdhDpN5JTHT5bGudymMydrxbiPuut5MnvXCBkjUGfaXsxTDyrjDrKU5Mxtm",
  "key8": "3Dgk16S3Q1WP6Tn8N4rUrAiHEXePnuTtpbxvBtHVyncgLsyXEGphYSAeX7W49EpVWn79z5UDtooX9gD9rsy7sogM",
  "key9": "24JqP4hyfPTEfksfRMDRXzPEwbosiZVuZ9wUX2CbuPDHtzkz1dq7a6kcMKHdRqYB1wtPNLwzG2GKg2LPAJAxdFV8",
  "key10": "2cLmWBkZ4eTF9tUfH3QXhmukf1CohmAiYAMikyAQ6JJAUhkrfyAaETUHP66KvxaYfhpk81Q3gxoyeL2FCiY4vXuo",
  "key11": "5vFpX1aFHJYs5ZbPn5UhM3ux2yZEySfm6GSWsxJ9zb9RHw9wEtDvyajazVCJkGiF74czrFTYPXWWunTXQ59V5J8y",
  "key12": "4YL1qbcXYKti1S7kiL52ZeHt7eh5cL9LRH9FciF1FzjV6vAVFPvwTCNBi2BRhY9Pj9PeWtMdhGaNwxJE56fZWF5Y",
  "key13": "2p2wXywiB8A5JVdLQspjGqh3m5QUWePgBWWCWmE1zCMRcXs6hUDgo2TWFVZBvFHsnZTu4JmBbC3YfhtrQDdtfTh7",
  "key14": "96mai85D9MooyU6erfnUEPM5sz52jpq3pJuWRJuhtwB8RoLUFgGJzKZ6qzFVhX1nZUHP56wAhnU2ESxvXamJdTq",
  "key15": "51QUYmqANcfxc1td1UALLTPq8B3GMuVUYEeJecoYFvh9aBbYMZthuk42afDVjkN9t2RPdFiiZTV5j32Fryk3xVdo",
  "key16": "WqQjp5maui269K8Gzc5oDpHxjf2M52nW7GRNv3xzQyQMyDpp4ww8TQ9MDGeRobnNUcXj6KmaYFxZefgesyNEkdp",
  "key17": "4hU67yk2me7hfkfAo45byvCDfqH3xi2aNbmEKer4XGqdKueMEWiLt51ADMbBb7YF99LS1wY7uBCJvCHizYca5Gj7",
  "key18": "38ukSdjJFNxW5ZQkEdv7oaCqRXusYiPYb4caYK9nVVWQ1u7yHDRiqowuoU5p7mwcRuz6jWYadzLN11rPRRGmdRMc",
  "key19": "ABs4fxgggUfQqdmm6ddaEJuVmWBrKcAFnpksE7gWJk3vpfJZjWgG4wCGbDyqPkafHF8wQNgMw3uP7VnmhaeXQXX",
  "key20": "TXg21UpTnQzitNH7pmLiJCM19gigjcRzzH4ZbCiVSNQAK1YbKGT9UE29Qq3qM4wbU5XvusNSs8evL1yD6nNd7Jr",
  "key21": "46AWegxFxYwjXTeE77t8fXDfjedMRCceJD1TfmDzZoyctW7BNSQWAXEG42KQi42crBCpvHme98ZgKXozb2icUWZ5",
  "key22": "k2bV2fMfUwkShjjrSJXGf1UGzWpUAh3opfX4RXrEjjbobNbboxguZvEhuAUoBUABS81uUVwtXm9eo7jNkDmv3Fh",
  "key23": "2maRSp2hQ4vUXCsWG8Rvp92L64iS76R5HMtkvigZZfuD1gqU2q8M7H2Xoo6CZVdich1XBpqTNATPdNceiJQPP23h",
  "key24": "UoSzsjkE6JeQu9vUTZYYYB2Pi11e7mUTMBxtkN3ifFDjDyJB99zFYxnL7WUBDXSLUwEqMPPXPdS3J8JfLFLvKLz",
  "key25": "J6vvoueEpMPGoMrbrwdic5dnterbQHNnsPz27k8Kcsd9x4SdSqRbnTTdn7DcoLFvDVaF7EvNiAgMH4jkAsKCx1t",
  "key26": "4Loh8ySN5qUqFdpoZrjWjEjTDcMf57wm7D7VshtKqQx1ESzkosAbXMRtc5CMAJvYDZ1JzRYM54RyzPGPRoMZETRa"
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
