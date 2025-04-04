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
    "LNrEc6dCu689ZhCy2RP494cummV8xoMsmFcVeHz6WryLtbuYv7FhAdSkR6PeDaoX6sPoZKddRGAHTaVH28GBk99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TpErfNKkCPmvxXhKzyWJZk9mFb1m2Cj1k6CVpy3nmSJVbTEEJ6vodHGdegjbse7unRCWjRcxFFtn4dvNwDya726",
  "key1": "3L76mrALfDPCT7A72CHJX4zib71cqBQRn68HVLeB3zYHgjrveFyMvYRmEmbZFdAbdbyQ2ePMHhSsQib7D96mtrDh",
  "key2": "3qjEHXPiGkR24cSPLGTcEcZcL9gFZRRtJBfon2pPmX66nJmmLrT6yeJY5U4V2f2WfZeEE2GJusW983FEt76ZeFm2",
  "key3": "2QQ6pqKgQJnA7j77PQE53goLS1CSb4PFN8nMLqR2YbtEFVD57h6Bm9TLRkGyvUCJxsXtn8N2cDKJYpeY8yxSR9Fx",
  "key4": "3PBGZJCCnJeUHwAA5X4Uc5s2q7g4jikTLLYse1DSAoq3Xv49qgMv6UWP8nnEMsFtcheeyBDCcdLTkKh3JSL99KGj",
  "key5": "2L48CYGjDk34GkpAc2MtNzLawwBMQwBrLcrHGrdcAXj3eZuz7aBuA6XnjGHMXBUUHnHTyffBidnCA122TxXwNurk",
  "key6": "5Sf1qGwJN7Ypgpzgcaw3m4Wobn77uD1r6e1rmPwwE3CdmEjNRG74dJimhKZPiDR2YtTgLKRu3rURXaBaKwJ8Hwo2",
  "key7": "3cadSw1FbC3cyHDNvNyQLTb5EN43Qrf6ZCAGeE2SL7nwfJnYFM9ZBqmjhddnpZM83dhPZvpN1DjHSQU19pUHvhfy",
  "key8": "3jme5xtysa1maQ3y5DBEZAe8x7N3bZtbXGnve9x38HcDTwK4MimMEWrr67Y9BkLZ5P75CtTm6JgkMDqpAsbFG4wG",
  "key9": "Cm3kghdhN7oikdmA4HdNnTwwGoguDoD4W8iwTkkn7jVGJiJMQ42vrGPdBCXSKEKXPvVrZTaTHCGqcHNZF3yxZir",
  "key10": "B2kQ7oNazu8fQdREqzoAXhXKRsUERvAWZqWiqoMhf4BJKQNiq7mz2sZDm1VhsCB1kgJ8aDw2n5uNiH56GKYxmS9",
  "key11": "4LNxaDnsVyUFyfoJUTStrMgvkveKVFPjp5TNTkXoFcgXEi6tZBwWb6HBa3icWAwWAxTtAKYMHizHQH41vWkAYFGw",
  "key12": "5G88x1SBQNQBQaKMvKPU35SSpdJJVWFnNhXy88rnjjBpagmHhqb65wMwqeutBz6aAeJvXysPPDWSbkxTUktT762m",
  "key13": "5FW4JZbAf83f71t8kwYhSNs55CiDksQdwFntWWxmfKaEiLmtp5k3kwEScpeycHpUpyCg23GsFt798s2iStTp1GHR",
  "key14": "4bRLrxSYmGRp5QLJcaLQ6hPmrCJVRHQ95fNfgD4CgUopignTUDzVLn6LhhNKgTdkeWwfeK1cTa1bqqJagtQAdh8B",
  "key15": "2Ur7FjyXCriEoYEe67BW52qLkE4Ucz8gd6Nfknf5Gdny2veSdp5CTy9RyBSC4RqjyfKQre9dJsVFsj66GRdS3dpS",
  "key16": "2zeBdnZMjEpurnbJCcFEprRjqDsQJG6JDmSMWpSrEbZQgVbsDzpqQoVrofNNt7drjTZ83E8vEcpnaf9LzY4rGZT1",
  "key17": "4HJqRKvfa5QsP5T4xYxVkrxoFWUtw63P5ApjN9s2PUfG4V1tHiMfLe2DFgdm5rMf1epvyXtHTsqGc3oajbe5mhjf",
  "key18": "EUbXKXrBDqnzjybhdh4xwf5szqfTuuEDyxN4CgufXMnJ8kfHkNvz6BEvT4hktNAq1zWbmjmYkh6GmF2YbDFNcJU",
  "key19": "3LLReKdhjNYUp8ajhZyNjuvhEjnTjiTttkV7jpQa7NooGpJSsMwPkhxFB9o7R2BXC4261gxwGgMViCr5SYJCJbJs",
  "key20": "Kv5xEYhuZKpWxb45ogeZWqYESysHSuB8EekcF4SBDfQJKx4GzgbZSvsZGtjVNuNBVMiqLiPVkLQRwTYYqr6q3je",
  "key21": "3XUnJHXGeyTcYr4d8rkSpomkEq6qsVD1i8RxaVZqZuQgSdyc5cjdpT3FMRsg9kD2Y19DjgmhqUATQUYZUmgpaCvz",
  "key22": "2nfCUZZHwztauaxKXJQmDWV1iAMhscm6JQ78M2Ljrp7q39Y2tgMBNGSQZ69mLWg4sMTrdrPtbXirGhZ8SCTZSWXT",
  "key23": "4gAWKScAh3VLZu2SjSN7wYofKUZQPM7ssh7gHYmrokSXyhCguWSq5EoKHnnTspJYwmj5sbrFCeomMYevMpCYBaCh",
  "key24": "4jpZqp5ttd7MW1RhiJHvpLjs2ikybXVUYYDw1h7nS46TNXbLfdCWwZH11KdEMimQqt5uQMJaqMzuhFv3h1DSiw3L",
  "key25": "2YA3iRh5yHKjZzWA8Yvyt2qeNiWjfSrHKEgrGgDH6CS53PU1GqyzSMEDoyXKLC1yhST6yCuKkREPNbcUmsbpMy1B",
  "key26": "2FKvhmDk75iLi3KJaufHSwzcb2x1P6Aofz9KZGDY7K3mmbWZqoreWU1Wtdc9iA3ED5knpC3rebgLY6noJTQRNBTy",
  "key27": "2a48eEAKKuDrB138WCtDUfidNwc7veForjv2dWRyrnfziqZVDaoPk61YF79amLDEqtg71YjeC3Ap2SpiP1Ujfswr",
  "key28": "5kn2qTJFwBqY8sD2H93aZC3Qah6YNEYBFDfeEuKq3AohLmUJLLL5Cpo17yJGKhRoYH74K2XUzKu7WBjAXqJCVXzg",
  "key29": "5HzGuHvEwbczMAK14zq72n8iiTYUdWnT8mMPNfnYgSmsXrNm2pFoqiGayZNtiTp1wh1L8VVA7pZqRWdF4EzGwXHb",
  "key30": "5c5RE9ns6dDPUmRiwDMPKFEarvgCNHQ3F9ys7EjE4u9fNmMyFS98atew5Fq4JzH8YSi3GCeBvYWhYisXXRK7SZRK",
  "key31": "2F5t5Tcmb4DKkYXCJQh5M7UejNwtTAsZsRtq1yaKqcDFspSLpoG9qY7jJmU5fa8n4d6j1tNr93wtgsnK1vMmJqWv",
  "key32": "2ke3oRq51qGV545C5Q22KoYBA7FY3Nfpm6JRVBAPTumk6j61YPUxEuow46bX1sHdJZAt2Bx8gxerq82qQEQKwjLe",
  "key33": "44JALAsDFqVzZSJMsozCTJSN9DoG9ZDT3cC125MRT78CXYJjjNFfTrC4YArKAA4btUfk5bbrzF3Yr5SVvPtsJPcJ",
  "key34": "314vg47nySZ7EHqENmWYh5AUEcDBRLW7KyVQRu62NwHoT5ts5oXNppuovRf5SJCngbt9mfG2fLFTRPbuaQt84dxt",
  "key35": "2kQQ9KmDLCHd9cqSprwU9YBCm5Bu66aPDyYiAKpqpjwxvLm3CojqvWQ89zmNdW4iq7ZZGH69Mw78hbwh6zZw67p7",
  "key36": "3S4Yice4NWcg3axWW6hcoCTkhygg1wrhFjwbRdTvMBrbuvZuRcJXq47hcgrvKPga4Emo8MkZxJFLi5azJHp31FiU",
  "key37": "4ZbWGewPzsF8p5x94MTf4KsdYrSiGw6DqvPia9HVJ2xDb2NePeua6j7bAfK9cxqcE8pCgjcugWSUq1VWNXryqZzR",
  "key38": "KY7CJYyWqgy1VdL5By7kv5VZBp9HjKgvS93CekSjYAf5wS3S8KTCFUipEudy7d1xhrRmdR9U2Z8v8dJD2SjqnQT",
  "key39": "3Rgt3LBSmUCdwyQ9uCrJjMDN6iCZQ4v6bS1DPqiAoe9mf9m1qQXr2GZQgqR2cyYrq43LU4n4L9F3YMyaMh5VtLJ2",
  "key40": "2Jd8g4vsRb1SyqdbktdBdoc1yPeZ65sCS5XT5ZbT45Jgi7YCqjYQtsHdGougVBKtJW2Yw2j4MG1sDRgeFVjaQndo",
  "key41": "uNbf4fSSz6rpyZbHWarz2Ea818q4JNB6BxXpUokSs9w9142yL9vrMvAYc1hD3Typ2XMXNAZFZKAHhUxuvyxdBqd",
  "key42": "cDvAvVRLSaWAkFmRGWq2q5J2ayBGB8Sy3koaEDmMzWeGRPjmp2i2M6sE3EhexkDme5ih9R9wjZXHvJ6nqK7K3tX",
  "key43": "MvMS6NozF8kDcrPvnCW7JYRyyoj3of2rMppU1ARmKbpKCBcaaKKhFkhJhniH7SbEWmjxqi62CaWH2LZpNZjgYa1"
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
