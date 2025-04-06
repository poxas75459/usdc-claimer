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
    "4CjpcnhmaXm4hcbnuteru6fmmW4Wt6WynKHWhwDeCBexMsGDtzHBDofZwxy5NrgyfeyD46pdqgMGYot3YfZMCRma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qA4gUQuC8L9PnM2nZg6EBS6vzHo9Qogu9F2dDg7Y19bvMKnVu5D3ND5Lpswe79PFWPfWDuMadcrkj6iTCnmGF2g",
  "key1": "2pfftE4mz6W1zvKiCsSQybgc8YqZ9DWMAwvDyTRx15medoK8noaVhtnEvdWBdZ5Y6xfiYjSoX7W8RUpwTF7QHtw6",
  "key2": "3ZcxYfk4qAESbokDDUpB1jXx5qmTrmhXWMMnKeewnNgDEjzE18ALQUTKPAqVCWsXtN3gyX8u1EiS2BCmd73gQo7L",
  "key3": "2szKgLC862D2XAYyxMzapdiH39f6hNiNemopn6tWw9veMhiDs2xAfsapWvkPpnP7YprvVxZMNE34XxMsMR1cchsP",
  "key4": "256ot2JgmXoLeDYbvR9empu6eb5p9TxaSHqJQ819E587jzVHRT6brhqTDALbud5MZaGYNzNqJ6eKNwnJXcNPBFwa",
  "key5": "4Zq28hyCiEYBonDHUoAhuozDyUtog1pMhXhw3vM5Uiuraofp8Ru42rkujDQTAdGTiQtnShQnU2jT2dSYeeBtQxRG",
  "key6": "2MF5qV929hYruHwdZF1pJczQ3qoJWpSBmfstD5g8fUZtZLXkM6FkrqnQhKHXJ9G2GR9dgt8GKttPqkf5WMKZN4tE",
  "key7": "txTe2t7waT5FxSkhbz419dsNPzbdpgzCuz8mkZ4ZPwFfHjXRWB3tm6U4cb4v9cQQSAj5T2ez9wDTCjnkkkt6hsm",
  "key8": "52UDMWAasb3SU761eyjTeWN5UjG5ZgTLSh43bz2wufqHKcZq8dTWVnSJdmjiHoewavpyj3MTuwci9YxnrUprgGWS",
  "key9": "4GwiFxX8tj9zrtC1Y4Uyc7SXEcGCbtF6vZGXAeHaUgiGGxutCCxLm2Nx1GRBNiA1ZEBMHSNFkFL8bAmJuiYFQhsJ",
  "key10": "5Qqo6aTqzHrCaZCB5zLQacYJd7WuF1w1tKNQ93nF8vYZWsJXax9thN3TZk1XAjkEm1iBEk6wt7bH7rbLngsyH6vy",
  "key11": "3BdV5b8pasMsngQGrUM4VXX22thUUtcaGzLVAH6MJDa4ZVUpk3FLRv1Y2GCb8XjUseoUm3QjnZ4cd3LUmkssckHr",
  "key12": "4iQYDjH6BD2UTzTxf4vf1oxqZSWycxvCFcj1DhUjhXpsWDpN4P3T8c95RdJk9Difm5maMnojRYvDMnuDBjcWQq1d",
  "key13": "57Km9TFPn8uYci9kPfTE2osDZvmXQ46BjGoK8N6A5GU76dE7qHuUjkLghfXGud7pHfvzGVhvNFxu74MPdYpqBegN",
  "key14": "3zkbvtcabyJqPLxcidDt4Nt2VobZsPwzyc3X5Tyn2BpFBdNAqLz96eqyfb6pyCFJWxCLxe46Qw3QL8n4a4LbcEof",
  "key15": "5KkRXd59GhzirzbdJTDNcrh8ax8b5M6n6jXKeT68LPA1Nrjuy7notT4fMNzeotU8HwLGDszDtanNSFL5n8gsjKFa",
  "key16": "3RPnNomRh57JKm3ZnYXYDhorb5fjL5C4GMzdE7BtRYtYr53ZAm8VkUcwFHW6Mf1z2bMp4XWvzhfsxKsHU6P726JV",
  "key17": "BFsNKgdHPWpaeaMhGeQ7bdBXQrjL7kgTSn35hSGKonAQhT2BV1HqAih13MH9pqnZSe42AKKXZygjgQbEiiADsT5",
  "key18": "3xwWze3AdG31C6QRhLCnd6GWRUFF711rjVF5XZbwtFGoKpknB4rNQioMNgnQsj2VxHG3xZwLJ6tEirGGFTWnPKeN",
  "key19": "2UCJpZc6NSmFVoYfddLomjjZYfiwvZDjrexfcJVyWCbo5E2zYzZS4TFF81UZ6o4QkEJxLUSfyjVozB6MyRQk6kY7",
  "key20": "4GS1RAufDwWXJBGVucvyYCedGVGNMzaazqQJCDFk1cpPiiTzdmJYtNCtHVs7LUxE6pnur7YUcgTk72EYp2iDj7zS",
  "key21": "3gbRRNtLEmBqwUJzeDhBFKMHcEx6X8xWUmUQhQ5wGjwa9VfwV8h5uXs7fZK4Gp2W6oXbX6HssbuVmsD9nEBuygwF",
  "key22": "2V2TaXPa1i7pDpkpUgQxRs1epkR7SjzrbNjeME9Pvjgy9BnygcRELWK7Yy2GsoMaiMgF3QYxp7Q3bYL3bswYR17i",
  "key23": "462hejAptXhfYVFKRk2xc4tSJqWF3qyyQb6yKz4WgUw6YeLXur6xPESTi7Lbm4XVhiceHeSLrwNiyx7wgnCT1JdZ",
  "key24": "qFWFPHXTKCF1VTt9Gmqy38WNP2ebLBKgpUcLhRrHzhTXCpseNZuiSXSjWacUukWVqByBdFfbQdmXSyRPJDG1PqL",
  "key25": "5PN6ozt1JpddgXF2RUL6USSBwg7v7LtUKKM4UT7j9byPaCDCuAVn1aUjV6vNo4vRGVVLKMBF8Z2eJdNUDPjxNfDb",
  "key26": "3NYB1iU6YbmEVxTKqgFGq3cVeC4mfcuG3zwFGshmvYdvNXQ9hSQZMWE1doGHg2qqRV88EYb3uyQvMNwpFoBDa4yK",
  "key27": "Qbw7H3U55jTwYuNcDRqFUabuiyNWZYca6r46NB6qY9PzdKMyLiekjq3aXYfSjgRAn9ZKnnR5jAu2o7TjAzGXqcU",
  "key28": "5C8jmDaCbufG5riMb9DgVj5kWKSD2ZRwjq9uHVaRuDYDjLkyAhuut4BTVXifd2N7JKvFiygZvC3euz2BG2QZaNtz",
  "key29": "5XPsizWctZFTSXkfbnCDCLtBaMRsouXVgaizU4L19EKVhZdWz691BCyN9g6WDSXjDeFVJZQzFfpKAv5qo9SMKwQq",
  "key30": "5e5Faw1WU7omvkPsaS4rv56Q7DVXz1pfMj7dRab9ysVGASiMqphSR6wQPud9uZ2dWv3aFAZ2JabuTJRh3BTULLP5"
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
