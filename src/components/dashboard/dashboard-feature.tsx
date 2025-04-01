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
    "2yyecKWrzmqepgJXui1UajDRWniAvq7NkhGVt4u4djLCoYGaaC9rg1nDK1HGRwTgvzLMnZhYieo6meiYicjCgQ48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t7j5QDWC6yDxebutYpjh7nNFgLtEgUvoMVKcyxdGg2vnJQs6f3pdz59CmfwWXCBg4WzEPUS9etk8PVMupvK4nSh",
  "key1": "3SocHbfaEy8xsHPwLZUZiQ92hL6fNdEPYswrkrraPg1EhVv2bwLzDCPoo7yTVv91bZxKk61xgYzVuyxPF3kRwc8L",
  "key2": "5HYtCYUCaCbNbwgK7dALMDSP99xE4WLssdxQPLVg68gUovETHAfxkSwgrKirs3UHGJMcHNPVr1miL4e6GDRBCxQA",
  "key3": "2L3gVJQdqhieXXEr3AzNLnQAXag1ztA8Uet73MBSdxGtPRYY2mFMRmv69DdoRVsuo5aYqauNQGGe61LuHrbKq7ZU",
  "key4": "wXMsVRc2c4JgHcSiJgXEUyNFvYzxZQQuNf74d2a25SPw3ka8RYALKaJM9y4jop1EMo6dnkhbR3AV8i1nC7XRTUu",
  "key5": "3KhTVb9ows4Ue6qqri9BTHVSG65rgGXmJ7HQiq2cvAg9C14r5bKfLu5nTmAzh1GNGJzqrtrcajG9EkqRq2z3dBk3",
  "key6": "3PFkDPF341iFhzGp8ttqjQiR37fwzQESmqpa7kfB3ZVBesvXNyrrenLB25hjzJ2ovnhq76Cf5X6y6kg8Ynb84xKw",
  "key7": "3h4W8a7UvTg7JNrJiUUX9S7iWLq1ABkdfELaro6G5nBjAwft7TQWJMDVRCqjqipxVRJmoBHDzcnYVUSUdfqacqza",
  "key8": "4pvJ2m3aAYH5zQJURnPGh4u6piof9o8duQdBMA2ed4VaXsyfnTDwajebdFowD934jdQ3PKBix3GMLSVoC4wnigMX",
  "key9": "3BhdaHpoLuUguAp9jb4yJEnEcvGqKrEzPjU8rjUbyg6rEBwiNjcgiiB4vMSAYnErWCqKaHbGRJm2XjRospqx57J2",
  "key10": "285RLSUi4eBorEwnFom7FbFt5hnJRzjML1xfTqiojkyzZBYWTcE6s8RXvLwBUfvxM3UrSqrsJrHu8jGBrxpRTitw",
  "key11": "4dZxGQbt97SmuriPxGdMGfwmraTBWC1Hos6C4XHnK6SbnacnnSfhRDR5N3uLXpguiyBzuGfsHVvWg3wpkCTtgYKG",
  "key12": "2zfCQcQBvhZoCi8zcVU6CXn836JYxRDUYU6tGgwiBSxcB8hxcywfyxH6vuiLF8w8yWPp8hEZman3JvnBwUGmXQa5",
  "key13": "4XKjqxzFYXD85qyCijhRrDJKnVHjT287WQdT8KWVVLxq52JofRJFmgq7P8KEgmVfJoTz7dXr152GrzctwRoks3f6",
  "key14": "4PPqpTZ85TaBthdxDhjEbK3cu1P9wM55oKpQ7niKmTX7YA1rHMQsNjf6WbMYcqBtdKeMLn31tDp5y5N1NNNKg8Yj",
  "key15": "2LvxxCC2Rdzx3vMw1kxGeLG7nKQHkvJDAdvdr32x7XfNR4vc8HTMomyUsYsyT58feYesUbA28gdBQrj7v7ZxghnA",
  "key16": "4i5HaZnrivthMEd2Wi3VbH2hiKWEyM92qKf84ooNMf3j1kJ8CLz1T5supqZ27o9SFMqptVf4iGovr5UPhdC8Lkeb",
  "key17": "2iNrrXTQ9sURHkYyPrXzmTRntBPqRys8F4kndSHKMzt8dWPty14nByjEUjNxQj4AQb7jEbhdM4b6Lf71416Hwgon",
  "key18": "3q2o25kwCkKGk36MmWhPybCotH5YBEKgaywASBZevs2dTMptrf2fyfXEugx9jHYNZrYsWBbmMzfBt8oY85SXpw2B",
  "key19": "4uJsNYpERD6DXoBssYUXc5Uq2GQZmihEfJYcSskiUW3Qc1KN7dVtWppe4pJnRaJ7o1TQ3PquPYCvWJhywfoKtVhH",
  "key20": "5wFqaukQbEvg91DizNASN1tFg1xRR4Xs52ippnHQanm7Z3LXap5VYezPFU7nvAiTYSGLsK9Pmx1rgvxHyXvruLhn",
  "key21": "59NkUvgrVjbYyVFDsraKVqdSJMnku4TYCFf2ujkCa7vFh5iGqgwB55YCF5xyyeJmyj1VwCPics7zKaBsQGxqyygh",
  "key22": "g4fhkC5nyb834h2tuXT1KaZSHMRMRifa98qLgvqKZdAtuNuZgFaS9dtnVMd2eUVvosUYgtAha8n6ePqt45AKjV2",
  "key23": "4AqZao76Bnp84mQeesnkb8cnBkjqxEVymycrftFbq3hb6imoaxGA3uKUwgbjPGW6JX3wF4iEYtAmuZB75xpDVyXg",
  "key24": "2WyTmP3i4u86VBvBofeC1GcxtvvFRySf7xZZoYEtTeEcT7XGfnoLP9aKfbR4ShUaYgervJ384TijAi7Z1VJJmXyK",
  "key25": "XdF4NNkJ41kLAF4VZU6FdQ7Ato7gK6uxvA4qy9fYfPkz3tj8jNvq7ifzB2P3TrQbMg8Pc9M8bZSbPWY5uwEcvVb",
  "key26": "2RcYr9aJnRLfkYZ68LpnsVj2Z3SBUaWWcdWLa7MRfFH375FAQwyUrX4xakdFVfTgPLDnvxTAtPWADvc9hdoC8uAy",
  "key27": "2G4QQx1QGMH8GA9ovjsti7oW4VxrnutLMACoC7XD1C9FamfG5XDzLQmFvtr7eMioewvFsNLrhA7LDsL6ozYcxQ9P"
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
