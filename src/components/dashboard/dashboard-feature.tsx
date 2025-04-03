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
    "5MQ6xFGo3VqvfoEvRK8kgXERXsujtmb6cbPrpKnW6yMEPEHaKKRpwcLZxjNfYpjGHMy5bVnUaywtBwHigEzJW6ZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EVL5W2Q8SG3SLg9jwBE7pAzixSYos2ngcEYA7AHfbTW8bhd17Ui5CreQAjwYuabxGshYaMBBA1RYNZMNxbKGoGe",
  "key1": "p5nAHVWB2MRBbTrtj75CPz1aSy2s71sz4SwvTmxKhzbtjuxZDSBMmZyqApmJraUog3Y8Kt1VoW27XrJNQ3REXVZ",
  "key2": "5NPvxNeY1UiRNd4dbgcwrx6aKHyYADSCvacm85BERR56vyAuY6qYv8247Zc7Bnb7otoNGh2ifcT9vWt4AePyBqDe",
  "key3": "5DUKDuNpxcqXSnnNGVzVr4WuzP3e65sJH2erQyK5sUomva9XY4iX5uoTJiQFfrHA2kR148sg2vYEgV2GGdP8hC6z",
  "key4": "65gd4V7zr7cEMdk2jABvMVRwDHdAtab3UuT9FGMnwZnLTaGsf2M9mhbfi6ddMUePAWUdAcuhJMcJPTnnghTymc3d",
  "key5": "53ikc6MST5wYEJygtos4TJS4WQ4ZK7xPeJNEZvKU8BG9f7xSBboriGBanZBeCxG2D8ZVnYEFL8UXsHz2XsRPmHac",
  "key6": "62PoU6i6Y6ftSkrNMWt5K2RdUYJZLGXEKHF7wNEppgL5KWfuPHQYPSSh8PjRAM4S1S8Sy28axraS5fUDKhwHsi5Z",
  "key7": "3kAfPVni4V8UwRuCAvLDcqDmeHETWsLUd6bha5Qqby6qN8Yx6nbhXd8N5AXagY9SHRypS8aSCEpZjkeHovjV72My",
  "key8": "64Ekkoc7xsyt9bQeSSUZxiBjuuWVmXKnckrbhjvr2vHSSLB8V1GqAx7pRMWjUwrobF29eNGHPqV8AfANfeXSUJc6",
  "key9": "4CU2ZgpmNRsS7HTKHprDnaSAxrVeawcYpewEyfwkUuA2giLyVrhW93VGsT1hqm2X3ApEuDD9hvY68rzNt1F61XR8",
  "key10": "27ozxYjHwv95b7Jmekg99ujajztkbbpUtKSVskN67YFoowZPQ3JqDor2DN86pehQadDiwWfdTMk14NZ5aoQyS78R",
  "key11": "34pZu4q1DadgH7LjouEocNYt2je4fiJN4wYUGuDF2RLhgS5S9x5ygRoAjvfpxbdZNxPC4Lquhmr3vUm91KB8f5K",
  "key12": "2qC6JBTodBxSj4rAioUnKdZpAAFubSVP5bqkUd36v7RK8qt8J2A6K86k9zRCwPng2q6wv23wFSk8XavkSKHQWugi",
  "key13": "diQj81ZhXyPTc3imGN5GExyCErR4DZqyC58ZAshVjrQJED4trQyRWSMFjPpKtweywHKudkU4oUjJmpkQ8JVepSZ",
  "key14": "5XbrBHHKAmvRP1JgyBcjauR4nUpWHqj1pdrWGfzvazW7HYGUAzEY3YJSCzmpZhPtZ81bjzejX9yDV9wDSJFozEev",
  "key15": "5NWYK5CWcqNL4EMhut8NRmS9F13wd5zxfJvuQp9q5QkaHQ4tALd9UMdJzW1k286aiD4cet3eiDzqwyMhQThegKjk",
  "key16": "4u8DtYzTgittqFD1gwhyKaNGb2depgQanmFS9RBZoZuHJ5ksPLVzbPsQARkM2ejWniA1SqNKpHddTwPgrqvqrdWh",
  "key17": "311Dv1XwqVt6SQidUbHdhmRBxvmhjE46XRNaZ2r8N4NCLE4jttJRq8DQZabb8wRn2z1Kf1UL1MiUPaEmQ4g8rerW",
  "key18": "2bT6r57aEAmmEvhxs4ebT7Le7rocFazqCyz2eHG5JFXYMA6CtAR6mhVgDhGpjcrk6JXqDWmw4cURMovJ7j9m9rgs",
  "key19": "cPWcezCYc1BDjdjCXheA6NRZRKZExLkCPbTVJFVznz4tQxRqSy76Fa9cigGoz8JDLH5Ebe1QX4pM4hGih3UUQSy",
  "key20": "3vtTFu1dXx5CF8WLJiM5syU5n1kLDpauGV36P2c691D3PuyCg5Jm4g2BLDCEC62W6saYRdrfuucQhgtJM6TBUqK1",
  "key21": "4B7cSBJdwvZkAYAYhzPx3mvYAUTE86Z9RCUoQcGAYk1NEr45Qt7QXvV6Gj5dsLtQQKKrLsFx7o8NXdgiChgcLhm7",
  "key22": "4TYoniFsBETGBtmy4WPWjnB1xNKBJCCx3Smu3D4mnCTfs9auN19MzntrdsEVuLu64XbzP5RQJteNtfT2utLBhqht",
  "key23": "3gRfrexDNz29Jx1ToZF93KGNwTZnzUN2m2w5yuUAhXPkfbqwdmttT4gvqPEGhd21DC6MGzpqocYd8BfpuQ5A4p42",
  "key24": "3gRBKbjTVSyFJoARgoyMYppJTcXmJsn9Y4cA81Wk9tCFKdHMuTL5XhLKED9Le7nerLgS1gatj3YjhKJyVtQRnW4c",
  "key25": "2ggahGr9LEowtaXUC32L18n7fzUtkWs7xZH7KjiFegpT5dVh6Grwh3Y5pL9cSeiHY8rKwtYV2NDCJmj2W65zyX5h",
  "key26": "2Ca8TMBHAymtiU4JmXqkKmwXDycE9Lvz5bKWWxu2s4cUAXtWjENgprDsn1gnSSmQr3Mq12uPy3JvYJxLkThjCCxp",
  "key27": "2u5mYsyy1Q96qCSWMtzJJwYY2Fx1aaFVULEMSSbqRhrR4EfzB2eo2AASSi4LN4uCPZJsGqqQnUZ2uctneEES9ckT",
  "key28": "rdBygARTAduqKHJTWuvz3fs16pysxrC3fNXRdm4zhK9C4hYeumrXoURwzmn1wiETYwV56KSWezFWQnGU28fR7eQ",
  "key29": "28f8P8bJ6rUnqjuTmkhacy9NMAcjJhp2ii2arDM9kZidP5J1Qau1ZnHrK9Un6aCjEJVZXPeJ2Gm7rvRewxckrRwE",
  "key30": "5QEwA3AGtTJnkqDw8TVF6bHZMJeQBikCXApoU66CTAsAhYx6trNsutCv8kFi6FjNSBw77ZeLLU69BrYmsufZzCEF",
  "key31": "2BpMi31FKwPrdnDS24K26Zu5vDpFTHkHSFLi8tDPMaxe9ejsLaqFKHKQcdpuVhicue1Re6XckMxWZTCb9gULXJMa",
  "key32": "2uYvHtvSFdGV7L3U8mwWq1rUGdT86KQ29q4sKnj6d7CV1NYZqruEfzLi5N2iZN1jKmF8aVjNzTXVskkq7jFWrvnR",
  "key33": "5wwKs35C2Q1vBNSksRhqnCfNHyRmbFCaHRPDUjwnWTAeFFYuvFJSAFZdFk3Mr1DG222DR6sxmYmGWKPNbCFBKeVG",
  "key34": "5fJgEu6zzXejvNiCewh6F2qyv2dUYiZh8simqJnmj6jPL6xevnLgFf5cNmeCaPu2p7M4gxT3HZFbARt9KxX3kjH9",
  "key35": "3LPDDMVJy7eq8C8CWJsvVfUGXZrXbfhjZayxF65JNsj5ssvJgSZaetV4guLFcwzRi1xfvAXwuHBue7av8zQykXdf",
  "key36": "2sQB5fU4a8kPXckvfBwAbuEMLFUKKXLRqof3zRi9KDW2KoLsmujNyFa41VNRSBJBx2uwMBHcSyuewSHTc8cmgd5i",
  "key37": "4UgvDSNAJacfPYUt1UYpDNEyUgmvETedSv14AZkLSWhbfRZmuoZvN9iUidZMH7hnhkPzZJ9pDUzgiKZzD4msSVS8",
  "key38": "35ZbbWDn6tgNGgaR7GZEdi29j8fSddLQ6tErMEgzfiinyP9VEAzu5GbCbvFYzQ4wo6k3fYw7cJWz2yQ9xzgSpMu3",
  "key39": "4hGXUMcp5Ld1jBWwAJti7kgriEjc7nAn99fG7sZSVAsGczomyvDyriqXcBBAsCrdjDB49xJMjgknPZBU5ef7BDDf",
  "key40": "2XnwDnyeoknGMGbgjkuCYAbX4SonmLtcDRy1eCupXTjBEjXwrY1LN84LGwm1qpCcsK8QEyh292TtgEnAtfC5ugUv",
  "key41": "8u1vzn1tazoW7fXzAdoJRnfZy5EynpNvoPKdxrMWAHW5tV96yuuTssZeWZPN7RjHt6h3fUzNmiJMcuhXFuzeBF1",
  "key42": "4Zoc125w8w9Kn5oVhXa64Cvzx91Rwm439qfoZP4b4ahjFpop8o4ENaChBPw9wP58iwrc86Swf1sGTSZ5SrAQBcwB",
  "key43": "2QT5ndWQ3R9rFnsn2oRfXErcXZnEfdvqFE8JrBKGTcs7A8U4XaqsRv7HJfzFtFeJjAHtTg3Xj7Soo5u8m68cgeRk",
  "key44": "3RRhzanNmBrenQq9Awdtv4kA6eBgRyrdqbpjp76jqBEtxaB9WMvcz21cPGQ2WcAK9uVaHRQpj2x5xERAub1tJQce",
  "key45": "2mq4ECPV27ApuTZ7o1T5PNpfULcwSxSR833A5toZw8NwwwM1rzzpnoh9eY4qJ5TK18LoC8zgte9faQuGq6ao3tBX"
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
