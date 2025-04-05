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
    "5xeGLMVNXATpdN7WT9LN8dW9dKdCewkcJDFpVfCwGUjwL5CMeQRd3zLsdcMhEV2To5oU87k5DsjUvnNzLEgUTNDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UvVfogDAAXP49WTo6gh5FxRAvPaNsUHnuE185LXZZe1rgYxjYGktfnfSqWHB8obHkCdFznfZua8kgE2CioPTfZk",
  "key1": "jYSN9PSgbK62dF3D4vcLATGcdc3xnSEiFZh7dLNr8GvYLDvdymXvHDZgtrJVA8tVJDcMAFBiziLYRSBsPRcAraU",
  "key2": "2zihEVqj3eifLUJmc9N5688vqo6e1Y4xrR5uPwBsKTQqrHuY2rC9XrSWkrkBmn7eFwKo4CvuRsEAgzt1x93AeFe4",
  "key3": "2fm6cY9NUP8Zh7GhNCu7XqV9hCgJjUxvNXwpbHe3Y658aGY2gEr9EENvC1uy6ixMCqkj881LiPxi9oVifzz6An1p",
  "key4": "47W9KA28XARGLtuaRuZU8kQxnrF7NokZxrMzDQzoWyrgD5ofQVFqMpwRgEmAe8syfr4UJmyqa8Nz388jbCL7rh8d",
  "key5": "3HzxXNfvdLy4cA8WQQHsMz968sQRdhZ86SDs8BFKvzRzHEJBCPfuv7jDMKEt6zF4dY4n25XW7AibJKpifRVSfNbL",
  "key6": "5SRzZMCjavqUhWtJ9Cq6pNFqqd1NnZBxBboKPvBegw9vZ3EF4vg6weicaUjxwHSjLYBntf1vYZwLzrvLpVN46LJJ",
  "key7": "2j8GSuFduVah2k6293kFKfxkXF1Xe6bSbRFzPdQcxu6E5hzzd7VEds7QwopbjNdUF6KnSumkUbYKVWwuQ1Dy6FKd",
  "key8": "33f8cBE7o3hVYVNX8UbJ8Yqngszu5STztQd48AyytDyefWNvws8P84s6ai4Xk1gjry7gUYMUeaWRTcHFiFyanmVy",
  "key9": "58xacGusMuDUoK9CeUJAqYshgMkL9x1DMheUtkWbhSr4qokBVhK5G8NZGyqTpMeSKkc5yvXiAoJNtAbJv5Gq6uqs",
  "key10": "3JrmvNH9DZ9pgysQXMkTqsGrEW7c5kpM3PKhJSUTwgrvUzX2g1a8MvHeNzfSv129w4jfa6x7MJTtnvt6Nq1NHaXP",
  "key11": "3YoVyu6MPAYrHhYiUWrPxarftLdc3nmCcXccALF4QuVEcfxWV66jiXeAYtqZzdBZXUpB2yXQHwfk4YRNqNgx5C63",
  "key12": "5SVmAiqkEpz5pVtdGtivsrbeDdRmn7paSceQkcEEtHkq5BzNY1FQK5gucd66Unds21JzZ4GN7NF5ENDEUWnhTnzk",
  "key13": "5hqz19mDagknSM4acKQX8iEp2xmaiCjiEnMAKWjV3reSeMX66sHoo3X5C6iMvcUpw21rs4QEQnbaHXyVV4sxJNMC",
  "key14": "sFg2eLAvsUJreqrwkPbMRZWWFktC91bypPoe5T5BWqyMVwSJkTAQ8o2kA1MEH2cVaGKSfFuv5SU7iL3w1DXR8iK",
  "key15": "rcjNgZoqzfqpq9HGTJAhMzDopD53NrXHVpnFgPZJsUNkpUr2buZ7h9gSgeDhbZx2ymTYcHspHFoctDczGMofDXf",
  "key16": "4agRP5JbNW7cqHvbGr7DN5HAz625JidaW4ZhbUg36GNe7MQnUFYrkK9eYstYUptBpZyv6coJfpnhiYSciuNxCQGv",
  "key17": "5sLVD4Q91TezZLCehZ2Wh2N3Npp1bGHPL9pcmkKvGEWiBYgoZYxmuxAtTJJfDmvnrqcKAzcrx2Z9R1F9HhoazdrF",
  "key18": "36j17N2cHRHZiBLF81Z3MQv4BDMzLCMvHsrALZWEsYHAe5H67rDetCpqu3Ppi8YDqPcLMTsjpBwZjCdkqRD6cdiL",
  "key19": "3at1Lrt6zgxc4cPHyUYWwoZ6FP4cYEY6bd6PBh769ZRpfvuHHQYypXd2bjRBNPw9fxhmETeyz5zgXafUH1VEFPwM",
  "key20": "5ArYoMvNV6zAXXZBsiMxMY2SB2qGguAUPG8xhPUyhKLBmEXkxttksCeNKGuFCfnPTb4FN3geDob87XwH2QT3g4pt",
  "key21": "35QfCzStqJxLUivsBPtj5exvw7gEVVDTzThLRpxichCr6Qm5hRPMau2AGGP4Bi6VXUidSJtoVukHrMG2ibJvYeft",
  "key22": "3qmVcsHTjLJ5apphGhf2vqGwYpcWYxRyHGRq5WBBGZhSiyLQ4CFnZKGjgc1Y5FcF8ii9rxrKav8ctZeX1fTHSGq8",
  "key23": "4TSBPrrs25hY5Dh9NgWPZoo55AJT8zu4FB6dmvavo3iKjUZdumy1SJMLUyz1mXsHGD3ELrdocSEhTY27aARjSDkg",
  "key24": "cSSa9UJ6rEgkstzuRvY1fTfeJtuoWwZSHFtp3zWpjKug8TZGJ1WbgXPQaA4s9wU8HNyhcqmnjkxjv57TpwUfX2M"
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
