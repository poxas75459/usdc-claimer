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
    "3Wvc2pG1zWsTvB3U5djAAjfHoQ7tRt1ba7LAjjvb9CY2x1ypLsAmKAXdjquihfhh9qh1BCX5uxPDrVUvyD6ogHJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e9yBgCL4mv6oYV3pWe7unN6i8xUCwp1AnFiZEe2DXX1oFfXYQ3supUenLhGn7dne5PHHZXSc6PENoXiRsDreAti",
  "key1": "2hDHWhhGC4ALec4kxdgxkNdFazZikcJw2KKsqsCpyMP4YUy2dSEBvPFMc6b13vHZdXSRtVvx3qV5dZPqbm7QN5h8",
  "key2": "5QNxJ88j4qmWvbSKTddjiKzRtM3EZzoD23LfT6JtHACN6pACfAU86dva7b46scPmHUGhvKou3QTaYrX2ZTrC8jnb",
  "key3": "cve6PAPqLuCME7ztQ99Dq1JFATkgDhgiwDjYhEzkytrt66pHUfieyRY8F1eZnGzZPxubFvLsAygLhDe8gdUBNm1",
  "key4": "3EdwjsTTagTqMd4RkCyaM2LFnx8z5gSpYYBjCUXKbKFQz8jADasEVyygRorZgC9YJ86ZYdnLbHsrAYhwuWVbZVfX",
  "key5": "2aHPYaKiUqMkf4Guot7gYR1VPpVwTUEuqpXc3tGKcou4pK5d2zw8kctbEU7qZ8bZeNkdjvuvvvx3w26i3asGzixb",
  "key6": "3xz1efVWWhk335h6DvBKzmZjBB2bZTVGVjRYJ9WFSZjEsuEexn7AtgWBfXyDTR7f3BQR3uCBsJuECnAmZxx7XWLQ",
  "key7": "62P7XWNMV5vQxhACZaiSq71De31zjtp62JDC77iCMbbDDX5rBQ1uE1m4kS1LbK9FTA4XsEQ7YwheKaT5H6FWJbwX",
  "key8": "4oEnVeTGRDaydNK2CGM5497R2Fka5V7AkX6QdkjmPdm7k2Z4gaeFiZifRbs1y8rJiCafs58tsvGnVANFhDLzPZ4",
  "key9": "4DDL6XFJESK8NHA7qdYBKsAu6fX3vUiQhsqAs3MyUpbjFkp2bph9MmaaQqhSPhhN9mkL4HnWLACejghQippHrmjV",
  "key10": "4xfRdSLzH4TJmFHA8zh19mKUTpeh9A2yZQSKv9CVNBzCgCt8v1r6b4DioL1AaMWVztR9FGYM53qKb3GbCCnxt5cx",
  "key11": "4DsMTWTS7BVTrGQXkxqXKVaj6zb6RkSumanKnXwBYS6E6KqmZUmSpxtYv2Dx5eHTPadpTNYfPVbbeRtx2gcqp2Aq",
  "key12": "5ELKPV9n2eAcLpxq8kKtUDN8jtWg2LG8noDNd7AfHPq3b1RceYTnocunEoY59q53WSKgR3cnjG37AKi23DWFRgxW",
  "key13": "5zvTkjjNxA5uKiVKN5B7FxSh7vGRFnTraMYQJKQ4AZ3kaTGTm9oUqoFZxN9bnGg5HVQra7syUQt48kJTkU5AVH2q",
  "key14": "2f62rNJ7pfsm7r8m9hrbr6h1zcgyJgBTBrUNFHZZsTcVk1GkKpRFBDtvSVxvtg8KU99jRWR7VPJqvH8JZvXvTPMp",
  "key15": "5C283za5Qa6Uo4coUhheuh2mu1qx6nuubeypUoS3FFJ7DiEJw1eXQ4iyWm189H5mkc79uGiuRqUnMU8KTMGY4QBi",
  "key16": "5p9XDcbVmN6PWhzovorLQMYN5RZhbsRYhrjnpx1fkVreHCdFFNCa1TcGed3cxG74C49qoyM7Vt2h7G8mc9WvKhU4",
  "key17": "3kkQnZ3zSr44gKsQ3JfoufXhpp7u4U7ohWhq28xduFmr7HPYYNxLADJNceKGtPHYt6qjway4GHsfStiWF1WwiQzv",
  "key18": "4jFtynZbj5AjuKJkk4EXM5nm88jh6FtmSA9mjLJQv3BkvfEWGFTvQx1FBHcAZnXXVQGnce2tzjzLjvygqM8VyzGX",
  "key19": "63gaNL48CJxpr93QqcYPr5cLV2ADu2rAGzHhi7LTtiUCL7jXirU2XPz4KfturzSQPXJjg8YtBmYXPKtz9WmA56pZ",
  "key20": "47vX2GzmQ84V9MWKHDK4ZFruy6rbQkosQW8hKrmncAeXNUWVsfSXUKyiih9oJ4ZgBSsuvWWFn1ByH3WruS2VxZHW",
  "key21": "615tUFEjBy3ScGWY3eTmESNqzuqYVmYcbgxV6sxzSo9wjmWqs7jZBJRn2QbQaVbKnwcAypkg2umw6h2dphpFmPiV",
  "key22": "3ErPUsDZsFMbWm4ZM6AEYhezn3zN6u8fWxtoViZYyqdNpwi55vznKHEuG3pQFBPCmu1FZiwvgeow9SktjWb47KoF",
  "key23": "RQaqVCMtMGoPo4HmPEUGXxGottkbFX8imwcTvSdr9Ps77p2qvm181tvFHTp7qxakTaHbi7WkXZeUgnn6BzW4aEW",
  "key24": "3fkcAoTSUg2ymHG6ED6nAMvMFMtGCU4QejLa1nuDKXhYpBKH1AW8kZgeM3C2ufnmzK3tc1mybqczMnHeBM6m1sje",
  "key25": "2xNtbcF2CKbHnNgn5Sif2JJgCVrMqQiKHMHyKjMhpGH46AdSBVoDpa8HG1An5fyrBW4AfdZ3Z3cA629S3kHrAXVD",
  "key26": "5933yVMAR9yXdQipuyvPdGmHZenGaWqDnKnv7XWPSHwqq3mCCmJ96JXg8Rp4z3XF4jhRk4NN4oAhxwgt455TZZSu",
  "key27": "5cY9VUD4375jY9faf3jGXKQRt44Spv6ZVXgKpVBoXrV26oAhtnqad6migWohRsu45PTBv2tCvdZCHxnB1e8MNqut",
  "key28": "Et6i2mQkPTimciAccqjh73A9Q1vfNaBwLaWQNZm5Esqc2WNNMuN7TK89XH9JKNeGkqYYXBFNEhAH2XBC6MobgVJ",
  "key29": "KaaMA6KPoe8Dk5pQnbbTQa1AvLLitQHmsfzCGpKTDxBUhMaB8ocU6sVXWv6MztbqYFYawJthkSNByWH7Ehr8G6D"
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
