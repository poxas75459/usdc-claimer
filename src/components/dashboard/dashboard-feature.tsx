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
    "LAYQmU1iToXozrNrsu2p1YzEzMqZ5uh1f1jygyM55i7CnBhvvDjJrBqsd5gpoNFduVGJu8oM3b8wNUmvyKaBFeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jFP72SHK9uHxLxdcc3TDvQCThH6jNCTHXGPCKZXds474KDoaEmpopxiJZcCpc2yQBL7JeWCpT7DmLxu34iH2d4J",
  "key1": "4b756ipRCnADpDvXKY9UGV5hx5XEKL3foAost9rwNM9qvJnwF4RpcdD4koSuvPAzxU4Tfz3Mqs52md3Nohiu4XCP",
  "key2": "48YBAYuQCnc3cPDSGQotTTecwDFaGTGJ5A3HnW332gTVzKqhSaMJSGsJczBHjwehSSGZMJe4yqhVTUJZ3E69Dh9S",
  "key3": "3X3Qiiip6tityByHt9fcAihcUYgx8VQzueTd5PxEzf5Q1tAuMH2v2uJU6LgUBavcS8xjf1EHBDpQRGF98rX9ye6s",
  "key4": "4HFJ8cbQXqRc49b2CEaXSpJFW9VDyMQoqxkjcqxuZbSWX8eU6A7ZvGLvFyoD14cRB1Azfk2wwgn5J4EsgFzwHawS",
  "key5": "34pXmAaoKpX3SRrbGkEqn6kj56LkDR8YfKsfwzuQkvSnMTHZ3E8eCskkhD2DRfTeUbXs64qwG6vsTjXRKDGAL4i6",
  "key6": "4i4hP7wniEz948QZdExyci3Mizsu69e5kRcu4Tb94hJsRxCAJh51jHTKBJgWTJQCj6UKuiU4ER3FRXxL2HGpyUUH",
  "key7": "5WUpenN6rRLQL5GGZX1gEM2wARFZh6VQ7T2AFuAkjv6qi26jeAyCLjnhkAyKrb4R7PM9aaiRRgiuoJWTZEZCxnHU",
  "key8": "66HJ25PU14kPZwJ7XAZnU16a2SLYNSyphHMzciA1kjF36BW7QLBbJMkpWrk7xvpJLutkx9JzMh4iQZCFCPW84WE6",
  "key9": "5XuAahEb5vfVausE2TsPNDs1VyRfPaeA366fvJ3EmfB8SU4s5jtFp6mjoj6FHGm8kCuut4ZFaZ8KqrN8mfehzodn",
  "key10": "yfkwARmfRfXNasXJMdgGoFkKto34MdJrx1zc1x4XDCgqp51nFCFJm7WzTQtn6ks3jqkeGscgPdawUn2PPmdh835",
  "key11": "2LqA4Hw4KKyMpbLzhQyncbeFskoMGdifPu19T3uABE6nAqfoXRmuKs8KZxerXBk3REVDxLqsq3Lj24iVrkRoGy1X",
  "key12": "4t4qyBXCymFqmjiJYCHqe5iqPY1bTd94eViaMzDDpKeyufbeumxyhJhvXNuEqerCr6zFxKF44ZxjiFqvQMDjt883",
  "key13": "3PksuXpFAaM2pyDa7jMGWk7CcjGE76zwdU1i5QLuBYQ9UZBHZtKTVn9VwXGP9SD7jqsozQqSX34VvWDgu7LRhtfM",
  "key14": "rZcVsqpJPbj5jxdxzhbikrpG3fHf9WTi3NyPsp1dJosMADYGdneeuctZvwNEWBAEfXrDapNV5aUwrLXAoabaPAy",
  "key15": "uFP8CKpjWRafRAhkJsuwfrmp3JUGW6b8zjfdd6M4mYJ3ZasTRwWRGKSewaP2L2JYBC6PdET9wWdqiTyirP2WE4e",
  "key16": "4gzTcRhAdfWZJNVv2XNUTBbXGSKRwULmXy6hV7qubB53iYtDgUTGgN9LXvwt2K7QpJWzCD8XhBookWzsBaxu5efh",
  "key17": "31h7cnXC7h98buumeeNmF5B3np24K2onYG29TPdRcYGPzQRVxpbVAQhCkZ2TaVHJP1FSTxS3WddAoTf447DHLzF",
  "key18": "55GMcuuZqqrXfQxCmhXfD2m53xizq5aECJQCPmgZzhg4NwKVAd7ibauhAoH2axGTDLALLfXVkLSahJ9PMyzj7rSw",
  "key19": "52vskVuREoTUynRYja7B4H8CeA56aWe2ryL369xtYi79NHkfEM8drPfVMUN2dzWPBcenFg6nnbe5WXveCXkS6QRu",
  "key20": "3ToZ65SHGb7TRta4ebRc5u46qrKhdBK1ZLEJhCv3bYyfjpfKeYeKTwwkghn1Ezz7jiG5vj92ub6Wzoy4o3i9rskX",
  "key21": "2VQrJCL5YQ1ULh4uKS6qis7nxVrJryE4Ks8Pje3ekbCTM1ah3QizZFa2wtEebgyfSqjVRr99kEbkhE4WP5Q1iwum",
  "key22": "2xnFKz4TfKhZWwoG6YyDBd7nb4JKUdsGqZSA3gFGXR4aURWoXhTBuHBPvXDoLYbVQTXiFEMWbX8HcNXbvA9wLfoi",
  "key23": "2dFSgRTcCY92etcX4NZQAQetkGoz2m9Bm9iPKstd1S9evL7gLn4UYS9avyfJh4MGvgvZ4ktPCh9VYsJBsitwsEnn",
  "key24": "SDDobrQF978eaH2vZMXc7aburryfdKrMgiYBsvNdKDWDFwXGJhEVzt1Kys7VxH89XBLqxq4pPXw9bvGjcmPtLFQ",
  "key25": "4kRoBtBv36RxeooReCEuPqw9yfV7ULKpXYJbdSkUqYPspT46WK6oCuWxWMR7PsWQ5hzyvTNGfcinbb4wa56ZmkQR",
  "key26": "5FtDAENf5beps7CHHLWTnZYxVEEcSDoa1xUpvFzB7icM3phDjqEBE3uWsmhJ6SgeeZCeq4y33RWeQ4RYRPi7Bd7E",
  "key27": "3PKhpHrJYfw9MdamTAm12DLLN1dHqQujAifocvoZYkrRJMgdfQJLkMvn1v7mG1uy86QNr5ParR9x1Z9T9nA14Tw2",
  "key28": "4taYgxUmY37cPpe8NjV6dkzCVPHzizJhwYU3WF52dh1QBmHx3uB1THbrSDqnG2RyTkQrzwcXy2FDZSmvuy2jeTsT",
  "key29": "5JdGggniD16cGrWvEoW7YsAfxr6APRdYKMqhWmmJoNQ2hzvAp74t76WUzrDPgk2q89ujMqe9aoABxzHtxZQDVTqm",
  "key30": "EbUgiJ2bEKioqiTTQc97aPAB2cb4Yc8aDbAPT3DzFUskH1MX8aiufhigd5uR5whp9wzESFyFzgCBorJA4VAB4Gh",
  "key31": "3t4zskH3TmQXRK3GEjiiSTjdKRRt6GVjn3eeARNSTXLazCsVJk7VsCPHpZMdF9um1APM2RULSbWtQU2A1thSpT7N",
  "key32": "CyWMZBEYXjQZtgcbGmfp9MEDjnGSPKaQxVT9UGPqn8pjRCZ2woe6QdwJGBZuBgWzobtJdoAdkMU9tQUdpjc2s1N",
  "key33": "5v4YStuj5JwTq8rFBwCQrxBeSPTEqWYkHdDQzYBgakJmKg1GKrmh2ZrbqFLFVnCVsXcX6sQ6f84xCivbhTzMkCJi",
  "key34": "5YctimSMEvv5RgBnWfznagCievYCY8xYstQ1bRf3U5gBBtkfgVbrq2rE7DzeTB77bi8xJSpj2eR5ttKpdpuvFpPs",
  "key35": "2V1RFd4pPGHAYRSXZwadvg8Cer2ZRBvANx1pb7TZXXPTZzWUSkeMrk9Zp2esUDfmKLYi9pSZjFkPPP4BgGEpkUkD"
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
