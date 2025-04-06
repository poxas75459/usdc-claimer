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
    "5TWhXerrDy2rxHdGNCUg1iGZuk5ANk2b1kJS9U9sFjy7SRkgnJ76GYQTK9bB7gDVPDo9cc84WRbjxdSe6qZ87QF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gf5YsUQwzaepugF6iGnpVyE5ew7P9MLfD2DgUNEUNHiqmA9TT52nx3XPrwxkngMFZZYjA6sCWwj5Enger6wBsL3",
  "key1": "3the5z4PBASCMBBhiev9ycwzskFhkcXwksZAgFeHm4xwASy2XS39HmiEovMN6HzbQ6nfh1vc1MNAdipcyUzJDFKk",
  "key2": "2ErR9uqZ5H4YdV9haQn9QijPid8gwPSepAgn7FExAhyP4F3rU3ctdpZMAE2APv46uQvgbYqRGPhwMDb81M7nf3Ke",
  "key3": "5gZCu2jsFxWwovesHR9eNnYYPpSApJwRqdvBEDXJVHtvKsG4TKE1jCVk9N3tr2D7wmDY5x5JrYm35oMv4mhKrYkz",
  "key4": "5NCNSz6ZVzp83jVQZo8nS9VPvhLaU7QQQVztdD1LrTpMTb65QqMTVukrzXn58xvwXNK3wYtq3HGFjF68C47jjWSg",
  "key5": "4P3mQ8Wb8ZSEraKfA1Jb7zXYcA3jnAchXTV35qf5jzPK21BdyLTdFdanhgwSmBXGz9yU3ocNqnHmeqFQgkRdi8z5",
  "key6": "4ieGynzuuPr4ENv1JUmFezZp9eavGezH7fa4fsW8rm3aJWXxuZuXiowihZt5yYTGzor3XMisMwEvPK9ozhdCvyNL",
  "key7": "b1CZLmuF1i3sqnriG4ZNXfiPPuUw3ktUpVYdyHNi5JR8WWQBKU8ew4tSSPG89rjzGBVdSJtWpQHuDUZkzRTMQ4D",
  "key8": "Kb2iNG6qCtHxtboRELS7mW7c4ct6zzpK1xPS88NXXovBbCEU82R3Vc1osGmUBeU5B12HBCfgz5Au8opgseZwcTC",
  "key9": "tNKbpf5a2weVjDKNuJYFWUGL3X5qY8Gd3s5J3yKXXk8EuCupGVYHg5ubz7uweUDCS4FFsHfuuwve6hMB3ebKYEF",
  "key10": "3ESn31SjutNsrwcJmtEAuN7M6y1X7T4LjtkJXz9rzAT68SGu3m1LqwBxQHdwfF6AVjzTpZwwqSonkv4eEBmS29P6",
  "key11": "4Hdx6WPvzVHRD3ADGm9h7hzKQ9FVYBkwDE8TKj6Yiqi19Lf4z8Uj1q6duPWJeK2KwuT3LYKGRBqjzvmitqWLPVy7",
  "key12": "4jkgu1QuwQk2xJTa7jPcRmP4nmKSc1SDAs9pCQvQmDza4DsrNFf44RgrYqZbmsm8s4Mgq7pGxphU6PAFMjPxN2Zq",
  "key13": "4jx1CMZHnCDnmrAFdN7KA5WFPPu2qmLc1N5vcXDg3WF6po4ucusRBJKJufqdkqKKrtUagFhzZtgZs6YfVNt73ufi",
  "key14": "3Gr8kk9gv1LG8GSVhoV2cRLTzR41CVhAGpLue8uqqHPR1x4nxRjVmGf2ZjjEm1oAfVtMQMDfqmzf34Bti61CfpVd",
  "key15": "PjPDVpskX69mUQvqw9QvMvSdCDqHQ21t8ntC8sXkMTCM9HrGKjxw8yedZL8FdWadiD8JTQNMbJ16sADgrKMaRdw",
  "key16": "5N4fC5DBfo25aNytnrPFvEFKsYX8UA2LrRn9LMerktCJwgr6RTdVM3PbzjCsaZKYPnDF5Ec45Nc71Wb26oaYZm1d",
  "key17": "5JPzoSTnP8KzEAVXFpA8kziUbfRSxgLg1kvyApFSBPg3TcG1dmg2i6tYCNkYejMCQg7Rupe2PJUBkHzobd5C5L7S",
  "key18": "3oaQtzRMYn6WwJfonFo2ex1rUUPH1D5AptdTGiwnrwCntdwmrPSwjUaAnHKPTU3boHFc1cSBmZjBnFD4NNdsS3Fz",
  "key19": "owjdvsnfK2A2qqXqvUVMf3yyixagFGYdo9qcXvp2QhM4NmwVm58yaqQKiy1cAFP4NS2ueYEUUhxDVbtcp7AoNHS",
  "key20": "49JzoDNP66x5wiUVRowQ6mSL9gugjS9ZnJBDwZ7HzrFtdgjWmpnSND2G7UCCGvWqJe6XxEeWD4EadqUDz5tv5Kft",
  "key21": "2CEwNXarx6K4pdHzZm6qbhM9KYDFBE6WUxHrqQwUYxDbe9NMLjsqMAo2UqEjE2vnCgSgVN7XXrE9fgCRaB6Xn5cW",
  "key22": "4s71jCeD71ZNMxkKWsxzqZDGcTnckvTWvgqTHZe84dLzLmHeGv68AFkFngKrADJkMUxn9o84JLZiXriWbqhmez85",
  "key23": "3Sg4g4ofTKvNGcVHzK2MnTg5g9HYQM7bLu4cQ1qEnCD9MWSEwNfHUeLrs4ckt25gV3LrjxxTW7ApaLyAPsPbD3fv",
  "key24": "5dYfgodQPy76tGVjJVtuUEByZA2Z76xiE825UjDeBT6yC9ktGFGv7VBcJexAo9LDzQy2txb6BphNyD9NbCAL7Pin",
  "key25": "56TBLS4UkHe7FmuV3f3VXL7diCZri5ieJeLUxuxyTu6f8yLbGeAqbSdaj1VDcfzHBeL9Pvdr9JERT1uTVYyic1gw",
  "key26": "6LMrkE3qyRh2NAttbqATVSytJ9NSbCiBUA8fT1doJJScj5XWa5CzkQmHk6q7YcPGH3h5oeZUMprPzZKeEcdjios",
  "key27": "43JSjUxcGeNXydqdH1ixZtrjqn7Y3f2akCVhFwpttL3VwneAR5zUTGiovEQQfjRBunAWs5FvUHcnu1UhAtaV5Du1",
  "key28": "4ydQjYdGM9gWKC87Ssad1VzUavWocDSQgKiWakt9M4d7cVPKASxxYW5PSm6T47pgdxWWbUg5yXQA4x9vp1qDJg7B"
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
