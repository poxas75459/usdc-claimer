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
    "3XcmzqzKk3agi3nRwGaW16srn3m7CYYhz3nTMTnMEuzBDNr7f4RcZ5NUHViAdPNt4CRyue8ZkgrmCtHNBqV94E8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tFqLpHWRbunB2qz9fNUfSgN5JoUHLsv3aTw9cn8oo8zJDshJVep1mfDVYifEHwEwUyEbf9qYoN4hebiZMMGFMjA",
  "key1": "48Y9z884pH72gNZbawe1Yo9jRvs3XUqpNkSpfgJCs6PdSNNTnjxm6yBLz68jVmTpJ7rJtWxidKpgywetXr4KJJmm",
  "key2": "4USUhzcwi2g2vmV3qnpwGFdWcMVyK1yFicmgXYA5WszTgiE9VvD4XcZw5CXDJDDuS1mRBhSMnPbeC3XD9dRwj9Xv",
  "key3": "4P1scA91Gp2WDhFyuvjPy9yQGJqEr7P3nbKH2qG6NUbXDRykM2LG5YZVKLqRcQm6mMNbgJnuLp7iHZDjrtnvCMFU",
  "key4": "3WnaGiZhqWq89PDHUU8zRcngSjzfYSSpWMNMh2pD8taWvD9oKE1wBZsTDhgTGfp3HZHXDyPjga7uS5H3Fmdobx5y",
  "key5": "5WCE7zAJBnEFdDiM3EkxEmH2fvPDEVbtpf8dYQQCN3zPpNcwv1vXrgChK4djbsouXtynkZQfRrLwRfJGNkmqzXFQ",
  "key6": "4zWYXAYZ1Mqe9jPN5u72pxqnUH95YGbrTPaceNzGHCeaCMe6n7BVEwpSo2DkBZreBtUNBH2cjfwL2ZkLQDw73Tnd",
  "key7": "32rrz8vT4oWM7picXvrqkaag18AnzjmhtaY7s4HVcjNKkC5c8PDJrcH5AjR4pgRe6GfsG81VAafXT2xrSNYSfWKJ",
  "key8": "2L9SFbCR6VEcLxkucKkJ4pLpDZr2Ence87ksGev8SQaPbZCBsoaH6kCsp9ziTPvp2w7bJSGwfyJywMHetkeRdEpT",
  "key9": "62woZoTddREEtc9KgGsnYjruBZu7EMt3uhrtV7ue1KvXLp2Wqe1hpDJf1J7hdwwTidqGuqet3vBPYW4Vi8WyU44C",
  "key10": "iVNABcg7tn2M8TgsEfMRPErm2EAVqn5txfJL6ZcAaXNdjUFQfaGrJzr6fATKowQ8cL4HFfikMT3itpRWBq1Jv1h",
  "key11": "4DosgWnQ35Rb2yAWW7MNFUwihffLzNaKPZzAYn7BKvwvV5QwmXzGeqXWc2GjdTWmAS2MaWYFXj1s7FAzYXc2K5sm",
  "key12": "2o9vZiNjeJ6QrTV3zSs5aL8SKDcCg3dxzd8zUHX72NKq6ZQkTzYnWEqDHSXofj8oGKRyNMXcEF32Z3SyNf9yoJvk",
  "key13": "4rqixvAVzMxjSWLqeQ2TU9amJHwHkbXbQSzNwsaY7EGnq83rFqT2MdSzxa7tgJm6DSSGrsdDhzTc2J6dryn4f87v",
  "key14": "3fYVeWqLQAWczGjzmgHNwdtTjvMS718iM59cj4TydPXAorVDMBFK8pnMLj2TzoeL45oeqC5hjm9QPfwT1rwD1b93",
  "key15": "5diwmT5LQfAWMi7XAv7rzp4Sz847PZBr9P4JV8Hq15bHhsN5Frd7UA7ysHTjoPUrA8QUcqV5ogL4n64dEJMvCvi5",
  "key16": "28H6LCNbQrjR8osKCCPmcXNnPeKLNz2ibAUJA4R52TouWbxdSdANgPATyTzRprZmPPA8dWx2dmZLbfCHUuF6ZzSh",
  "key17": "2qDkDVJzkNk5pmPjrZPqgpdeT83k9FcjzZ6tnp5aXH66xaXKK8zvXSQjLPX4g6YDdn4cFdgSJNvn4nwMdrJrmHXA",
  "key18": "3yY2NKspqNtP5X1SYuZzdqKsGg4Qw7YZnLhiK9gG8NqDDb2mSGptxEmh1Nw7MtGfPjnnN8iwkaVo6Hip5wVRuGiy",
  "key19": "2humoPFNkZFjFZHjjK28whDdv4TDqjRkCHRBovBoXWuQ1Fu6GjfFRyigxPjH2vumYSkSgtDrBUL1S1mh8Xfi7FXB",
  "key20": "3hSrnmnHEgRrxfevD1V2y79n6ouQExdsKa8dEQjHZwBNtsfNqVq9uDSa1ke1gtd1dSnnerV2ZqhhLTo1tkbycSqr",
  "key21": "24H8h8mdmepreEFEfQ2V7RQtNgcou953sZs2ePcyH93Bjq8PqpWaWLTzkk9FuEHevHv4Br1d2u6cgpyA6Md1JSPQ",
  "key22": "4VxhAXbFuDQJRipxQjBNx2gpvkGXjjuiTCG6mXyZh7BTVbgNNQiqSp6Ne1cW2CrKG4kWzK1d6MdyYvrzGi4uBNDr",
  "key23": "3mpkY1de5a2h2t6RCQGP4hhp6SKkm1AzhzK63EsYYvc6ZYcgfFCFj7HxzyxyNJjBiXYmoqigHcyiWZMyyLhxnMuM",
  "key24": "5UMGxPMxe5PauZ5YbqDFj9x15Zk3HxDdnVxeHCNpSF6pjcwW7i86sF8QxgmrZvsA81Zd75rtbTqHfULtMssNjQPf",
  "key25": "3WcG4uSokLJiRv8FaqT15yq28X7c57gS6GrRm7qHyeW97vV8TdFLD8Y16AhyJdwUFMBsNGSmXuEsBjsqgfrYb48A",
  "key26": "5WYBHKXdk6C17zB4FgDwBxRU2bWg1L62P7grLqRedVj2q7d2b8BH8GNHY28BWjR2Grvbysq2vuEzHivcDyoP4LXs",
  "key27": "2nCvnbWwCqdoyy3ik6zQekGdjwSkGf6u4HyeMxpAW9gSHfH28NNcqHs4fJHXeBvprqV9fMJ31vKaxexbz5QgdHDD",
  "key28": "3MtSAGQvSmUFExjj217E33YehAHenCmJTF5ik2BF3d4se59cKPUPV99btbnJdTTwAZABrBBNCU7aCi9BcMcZZRfB",
  "key29": "4Mg6FwnnKJnDbSvjNR1YztT2cTjJVWFvqdxa4Y1fQVYi1FzAyajTt3VDu5vLokVVLZy1QrakKhQM4J1HsLg2RvR",
  "key30": "44GwXSSboLumG9Afb69YoqRKWVTR6tKZNLR7LYtnYbnDtRHMW8UHSQnbEw6wkMi3Vda8DzuJxkJqP4C3WQspqz7o",
  "key31": "5Fqukiv8EEonyw5hybw8JbQD3U3HDexpVvNw2yXFH4bHP2fNGPXr8ZaRiinf15QMWes5EvhwQNHDRVH8Hrdq2w6J",
  "key32": "45kAf8KnQeHoGu6yPVsyEqkp5oFVaGW4hkx1SzvRHUAWj5DHB6wdJ5M1sPDHKcnAYHLMi7JeHuMhUKWAUy4GtsRh"
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
