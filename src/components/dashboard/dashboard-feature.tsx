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
    "4CzQEFuNVpGJvaX6oXEBiWN3VuqzMprEJyTH2nBC7dDKDM323ixNt2f7KzZvcQgU2dnQq4nuuk9uTAMFAX3NANfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cseiF968wCp61NFPGA43YpKZov7Hxhm4NGpXotyubcoBsjfNqLtmfg4weqjtwmqfZfMkTuhtTexxEuGtS53kvhP",
  "key1": "5YkbfxFhFRa1DEGA8Dr5CgnogP4MP4e2RGQWRmsaVwmbqoHodmQZ47TvwdoDZSe3FrFwYbEs5qq6bPnyF7Q4Eods",
  "key2": "4drRgcXe5xgARfPHJ2pocwekfKQ5qGmyNvK8ikUjLXDPebcY8PgeEGASSFG2deBq6zq12vsrqtSppAj92VRTvtwC",
  "key3": "3xDNvLEdfdbxdj3umz2EMWt4j7hDSoD4XXPwv4qaeAE7mPbHC918y1cNxKe9ebwTy6WRrvX5x7fiZqFV5zRBBPKC",
  "key4": "4xHhQ32S1JqbooP68ZJjTL6B1mLD6XphYjRWFdVSW2zmngxKbj7qYZEBGdGNnPHNVbgBJQSX4ZBpYdJAEsooPo6s",
  "key5": "4wjigHH6geG9KNgV59ggaNgBVKSkU12azuVGuHYK9qcUKGJRDVDudM1zS9m9suggZTmoirMvtDqzXaQuMZeMxwV1",
  "key6": "xGqJf3G8HQVuNcKNvwFewhzLgT6ZWXPUnfZYeteY6rHu1XyhQgH1aVnNx76rhv6pkzii7hW4H2Jrn2esGAJv655",
  "key7": "3FPF6Ppm9Cvtdms1GpMmMSdRLfdkG21ePSzzoa7RhkWViQDw8Sr6qwp5D5ebtGRiekAdmL4b1u9UHc8KPSgTjntd",
  "key8": "4AUno7gCAmyYohLzKbMMvzjwdocqQKkRzYFxgaf7vJz9JtttpYEY1aBWrEVKbkkDHFHTsCxUPCHHz8zY5bMAm1FP",
  "key9": "65ratUECFzXMG1kJvYKS9Y7FwUMnFWF3WSxc1hFF4bGiBkAjvZoSZcWgthUsFZKjTzjVwkDTEVUisZXN4mX5X65Y",
  "key10": "AEDiuxQUq4N6rLiNdBu98G8VWJZA7PDsN6veJV1gBbpoX4wqDEAnLSm7DVn1LQxjKbU9UnjfijaifYjzUNoWxom",
  "key11": "2BmHf7Rx58h4MHN649HJFCmh4PbzVutCAXoSdxM2TgAtVanjzcQRvYtSCQ8tTuJ14aeL5RVt16Hx1XPxLGyRM4uT",
  "key12": "5bsyzdQbfEL6joefK4oqSBNTH6Qx95GPvKQQJW3mCX4AYsXWd262s1ExRmRA1EQvwvBaxCMQQmFwxQUpQGD99aZp",
  "key13": "3D49kLXXQn2ZiSJnXaVZL1XdV1KXyLqFsUbghFRHVXMC5Tx3nfQkcnXrErmFPHzxZKbbjPVo2bNSJbfR6crpCBsu",
  "key14": "5R89gXYvZUPibgg1zXPMRXnc7FvpDjLvGtwFqpPvSryjYtNPGwuuwaFTrEjCPYoqcLQckXM71ZYwqqeZu6zwJTKn",
  "key15": "eQrLFztkKw9RFcGPhvCCxHGKVwSh7z4cmnTcrFWRRcX1dxqgEyQ78ngKSB6Eet89pfBZQY7aqaJxrsNNyFwu5GY",
  "key16": "2NoSjXoaJtTHnauqpygev2Pp5ixK8bXUAGM9CjZaPQDmE7GpVwQ6UstqiL2AZZKAW5CDEhVR1pm3TH8XtUerMTUn",
  "key17": "yMkyZKD8yEkUWBrhxrrQSqiVCS8JLUYwg4soiNnzo2oehtnUXYA2LSDNNthenrQ1m3RmZfHAmryjFyWdqVWnYsF",
  "key18": "5r47JgSwt1cw6VG9F9XEYzqZYvnwGH4i9c57g9KtZdv2Ffz2wXKZcYji7cavMAw79ZhPnt8CRq1jVRBHHstMQYy6",
  "key19": "2qswST1pZX6YMbnu3HBAm9nNMopgsQgXx1ejztmKg2iCB38LSpNTZaV1hgRbj6kKNrKkKq4icxwXp9HWGvfjq3mf",
  "key20": "3x1V8ucDCNHith2VzUwtrrpoDkgtyNaQB4kvrg1GErKCa22mZKnYrWs5iiM59mqutcTWAa8WP6p7Fh66xx2unWto",
  "key21": "QNC2EY85pFVGqJF5HJC5cQB8zjAWr1m5pSEMyPjjwmAZ2MebNiYEnnYvK487jzdpLD3wnf6zVQv6mtDV4wiAhbz",
  "key22": "4qgbey1p5JRkShY14uEpGfnmRu4PfqtsMWMr9gDcYk2GYi22TC9xxL4QzEQdiAQExW6NioNiFL1MHnJrtDozZjsK",
  "key23": "2X6dQiJNwbf4F17Ntfe8GtA93VzjFC8CQeNS5s1i4rjDCzhSyESwCwith9ByTwaA5Y4xwX2iSfCEK5G4vj3BBRQw",
  "key24": "3P46njtH186d83ZrphRqqEeuQBWoCthjKjNJGCN1wbDfu48hURM3qLEiPW1Kn8CxzGMX3ZgLjSggn9ASWB3VN6hW",
  "key25": "r81QGxmkzTc4Ruxne9UL1HzsVk3ZJZQsoRedS45DquEywL1BUBUtxG12W8rYpEQCLEQpuyPJ1r8qQSHyiVJNefU",
  "key26": "3y8Mbx6QVtLHk77LHF6Nshstj3c36QGrYLtn1BUiEBBNubg8GUjsdsLRma4yecbHjqnnwurEJNY649gBbbsxLhU7",
  "key27": "sVPiJL362xWEgv9RQZkQeE9MKA7ttK4xvvLGZUU6VaTZSsvAH8DEmMRLkguaQDSkkgcxP7mC9aEN4ZUSgC531Xb"
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
