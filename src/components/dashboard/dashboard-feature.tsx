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
    "43dTovPZJjNgzxkEV6jhM8Xcz6w9yy5DvasKugHB1R9aY2LdyQtF6GeWsV9n1pN7KdEfboxjnDBfBCn4k9zRjqUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41PMZP7wBLQHQLbLW3n9mfcm8wDgtcspTiBWYErg73RBiHyj5hFtrp9Expge82vcfjkWevPmJLnaFCrbjyicjBhU",
  "key1": "45dtq8d9DLcYHQWk5cMe5kxoheWy15UaPahMkCo8pVMzSQHQcb6jp41v8zshReLGxMMKZ216UahYdHY3SctcJqv1",
  "key2": "3ScMPqPP3VUXdQCsBHSTHGiGrnFGkMXvL9k5HGcoSi7jqdTNnevHKHLWjsZp9kGkgtjohCgVUfKcerAjiixnzHQ6",
  "key3": "46JycA3NNHKZqzKE5FRsQVuwXd8j7fsg1h27eGLZQdWbNgfmyUDGw48urLTMNuFrAcmSL5uPv63XUvGXeYFkWWE2",
  "key4": "dQe2gBdvEdqxU39kU4ZHtePef1GDNGQnmpCNmukwPMVZEWZ6J9CcEYizEqc9xrsvGazKMciedKmu6psoxapDfSa",
  "key5": "4beuaPi9UR2c25vhnuSv232m3dKjBBWNycU4D9QU2xkK3Bpz1w2WxABZi8d7nVFMTcNYU721zqDxzXYQEq8X6WZM",
  "key6": "4c5QQesib97e4MRhaZgyCEuB2upFyt4LmtGUpJRgQZXRgAkhiN9Mg7zEFtcPZFefM7AhiEqDGacUk8bZit5CcynD",
  "key7": "7C7FcZjuT49GiwVSHuNbT8x6X8RUtCpFmoQHwDTdBxA9fwN3PFdZ6CC19LStocQNYWRuP9x7ahcAAnFKDKuVYiS",
  "key8": "4NyYRyAfsF2j8FMBNkBWJD9u7wzvbcu5SafKXcxKsCbLcXot57yJhn54aiiLxnNrquAs2SNN8f1HTdCik7tbr3bg",
  "key9": "5XiY7fSoKYYajJstgmrx6YNdDVy2Eb1W6inxeJs5W66RQ76wU2YQ7fmYbNLTd1uEHZyiwZMRfLQaqSiePWf9BrNq",
  "key10": "66yrh4L681Xg4GxQqFnRK9Shh4FrCETov7zp6qHzxh8HietnfnFL4H5VfSGdLvUyp6nHMr2CFE74HWwtBmDqFPGG",
  "key11": "4Vx4ZjcXc7C3JnocGE1BQqWEHJEy4jTcNX8KWXCARXWATNZmwWnnsMhVrFvvxAnRJevoSLzNscGBU8kGRPyPwFQo",
  "key12": "dCyNsLgPSZbp6fj6TJYuXTVd8JNgiZHXLJf3dh8J3KREfz8Cig13RJ36Qd3ueErfwimf4UWniid6juhYTNS6dRB",
  "key13": "1AG417uAPHoact9fYvVWzdjF5TeVZsLqzWkBHKGiMhHzzLZg1hL4qPmDCNdum58vpuNVs2tjKDBMrvmBSGzWCrX",
  "key14": "VUvaeiJSB436DkgfdrnGFmXWqWQoAFsatjZdQczChuovCbZh38GBdKWT2es3MdbVUrs15VrFydZEcKupcwmLuGb",
  "key15": "2qm3v4hNcwb44ZRJtYmbjKfPtnyujYscfXkqNmKL9RzC6WGoczoULm8mAUNEH68hmc6bejse2UYoWiDRmEHmM2v8",
  "key16": "5YvnqAoeuaDxby7Xske7Un8jydf8sFLKgA9HcG6pw2gXiC9EdtVAX3aJ9huVB5Y1dGkX6SEShw1DFZ2DkKoYxGLy",
  "key17": "65j6hM1KuxCsts8ZyEWnKn9Sjd6CKCFAYyrqwxsVGhGZ6M1Kvx9xNUCfTQV1R1UT4ak6zyofDvZU2Kmbj16PbF8E",
  "key18": "5zLFQWd9biLE6QwSKU4TNBZhA5iyXBvK2JYfjDveUoMB3gZeMCd6fvRc3SYZREUu4revU7B5puuGGt9heSrifJfM",
  "key19": "4LXvqAcMqYzrgHT9UJVeTfMM2xNwWcXikKNJiMNBsnz58U3AFqnTmuTcPknPyFvBhT85mwUAsHZadSXL3Ab1JeJc",
  "key20": "2okfCVm28rrGL68uHSwQaDT66b7rHVMqSzDFFhwUVbiy12d96x2hK5eBGQ43hYLjyuiE8HYBjPWt253A6qxNzRnk",
  "key21": "269UnCV84g8NqZRMUpncqYJmWrcvAjg6RHwmNaiu9Atfmoxj22HupoDBYiYjWKgHnJkdAhBUPmCSxMNY4otEwKrw",
  "key22": "5DU7SANXyQnToHauebstoXeCCHTNCzSWHSFL3Ln5xeDdLkCvuZJR8vwhsygyE3ATQ9eg4fUAov3p44299uYAPkNW",
  "key23": "5q4avp8W8K8ZJb9k51dcbE9cnKkTxNWUxEpEQCvTCnHDTvEhPFJg7DJqRUrFiDimN65XXSNFDtWoCF9UHvYjD7LB",
  "key24": "3eV6d1uvnggcay7Vk4LMfCvbyghrz8o2QJQpWryGaCDrKEANnsxfPe1xCRsVXgxddUsbTY2zh7FvfDMoSq1HmwuN",
  "key25": "4LL5FdBNjPBWXQojm6AimDHoWyfA7qNviShjcV9qSMdZE1G9TBmfuSZ5M5KpgsMgin6fvPPjT1QPPfZy2pGw6GTj",
  "key26": "3tjD2G99eiMv6xFLZmpXh9dDhpKf1rsx1E6NX59p9aS28rAj9sDWmQjrMSE28uiQtQg9Vwt63966bJhq8b8KBgbR"
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
