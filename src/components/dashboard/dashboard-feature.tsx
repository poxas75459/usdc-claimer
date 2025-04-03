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
    "5bTM1JUdJ6DGiiTme9d7qhuFAh411vZGJXDZt73wGZ7JUQCaPYtvpCM6sXPTAAXqJP6CMA4BXniwvjnc2pKKdAg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "afBXHorVQBydQPaC2hD2CRSnwEWFEdyeGZwnSgoc8d2cSPVskCXjCxnos9qnzK6YipzJad5XtFsp2pnwxqFQJfK",
  "key1": "3By9fCjPvRra29GtMNXU3ytGUF91qZRYWcF8XLq6SaydasT9B7rcHVioKTWZynpNE1fLufMiub3k6jukpS5hq4u2",
  "key2": "2ToVf69S4grrpNvfuCuJbdcaGYJ8PgzjtgN6ZPCmBdun6BuBecLnM5QTWxaSVbHKmnExzQSYSgNj8K2UtZNG8muu",
  "key3": "q5hK5XtqpJ858JGuWtUic8SnYps5jnZHWgZMjDo4RzDq7ehfYTwdc3Lvs82EiAnTSgxtj6Bnk3bh3xqJ3dwbyRX",
  "key4": "3jBQPs8QzqSQT3doTiTgMJAJBxqj9fxv3xvsHciMWrZY3PbcPm5spQ31g5TqjmcvwhauXjT57snivA3mLx4MsVN5",
  "key5": "4PkQyAeikJ2jVHajeNxiPdfFCSsYajD86wrQ3ofSFxWjPfoNd6iUKrMtEHHfGbhzxY9vKsgra6ZZNSNHyJhE4XsB",
  "key6": "3guJ8r4NZzskaSykVUAccEiMfB8vFRHApkVgnu6UgohpphzNCdq7d6rtq1i3VZvdsjQq68U6eJZk2de7787wYihe",
  "key7": "B8P4vsvrNAzRrkRFhHxSPsFoiiUiXWzrVYpgpYQfUUDhgtmJ9Wu5Mu4yyumSKtT6oEKz7BEfQaVqYtcJBA41kuF",
  "key8": "2Wvc7Dhz5etGMnwmxXvnD532sjF3jEFTjeZZPasMYtpZYDrvkcTYZAvU6E4VfdJmam31nzXEoeATrh4z89hAmU29",
  "key9": "9XYdPSAd5CptRdY7gTJa4Lkhz4GsZ5raEqmvA9w8cXEzprXRxTvUPJZWVybArMs6F3usYSLSZKq5A6KbLYvs9NX",
  "key10": "3AGQJsFHwekFhGVkHa4KcKSGBSf6rP1wNtVmK3Z5TXLqCNatMLGhJjzUVEYnszvscgRvq4z5T4hnSih9SkfVYAgG",
  "key11": "4GmFyWvvEfDPevqBxhM6sk2K9wStihm1uN7bhAXJRGMzTSTNmGSVRNmjbxFsYViNwp3b5WCAKntUMeCSRXgpMSPk",
  "key12": "2eqgXvKNSbCjDF1NqCPNA6zXC2gKVHkWQ3VBCbtbfPu9MMppLmHDSxzPYxpziMoqzxyecoxc2uxrDcgmA79V2G14",
  "key13": "4kC5xQ3A6yWUsasMtRuzk7y4k7G7g961WtXr3cVcnTRoP5e3Vg3KfxPovBWBcrEWFFRHrNkHXo9feRwe7fadHJDv",
  "key14": "rQjFfx6BMZkixiZP9ZJmZACPZB5b8Pzx5RBJ1oJWoD5jWtMd9qaSxX9Ksvv4HPaE4tT61dtk6ejJ9ZKcSGV9VEj",
  "key15": "5hTBaZRdGBoZ6KDdU8WBBKdi5Hicw8FBdmJtn2aozFMup6jJDkcCdqvk5wcEPrGX8LE2JmojCM91J2tZ7LKDyiff",
  "key16": "kvBANqP7Lvgi4TZezzV7mBkVoHD6Q6YZA2eAWzTrcTXKz3efT1ZxNmCLUBhpKVr2LEsVpcutmuALG7RdFaNcW3N",
  "key17": "2mzZZ8ao91yRexmnF1dpTPHzwXefnHdbhYgMLtqGVYSreGMxqrLb5nk6EvY5kxc471CY3K8GqLjhkbvMiNm1XuGc",
  "key18": "SXLmQnSpLpgsnxDFTuTbaoWcNvZozfSmbPvGvyrpiUeMWnyemcBdQPCfQswBpwBtmygvhwtAtS4E6hcCPNGaZAk",
  "key19": "5Q9gLNK1skPFEyuBbJtBJvSBFzQ4LynTRdbryRoCpbzkhSVKyZQ9ww9FBZkgerkvqkFKrh2ZCTWTQQGW2ydfNqmd",
  "key20": "48MP3DLR2GJARr5R2MG6LSSyoCLCJG7Ki9m4SqRvDNEyP8F9QtzyT8sEpPVwN132Z7Dq8qfp9XJhiWDq818Ut9W7",
  "key21": "XgAWHPTFuUCWR3FySCEpSDARqAXSsHmwSqRK6nKFpeu6Nr5dnLJC6eKMFBEB7fLP8EPi37ijkwj2cjcriNttqPR",
  "key22": "5WqdFWXrzBpQkSFyNvKpVwPRE3Wr8DWvAh5gRbHCNYQhRHaDrizNWB5UmwW7i5tvCpEQDUYsKhPuXKnNiUgwTt2z",
  "key23": "4Zg3LBwLh6zYazmrPgAsVuKFM1tr75p8i5W2iJp2guhCKZRNKRmSivrc1abZyEe9D6QCvVxPBo6KY6zSfXSJmyyQ",
  "key24": "4mRgdVJ6iNBgnPf2M2HtKEZqb26YbDZc4L7kL8wALrNdBFV5ZGKFUoRBVPD9DhzA8snAPME6Z8q5yxAtrC5N8G84",
  "key25": "3on9GvCMXR8fPSYEkbJMDBnD2sQAMTqyXDmbRv7E976Vk34NGx57u2AUa6nbnnMQqb6GVmEaE7s8TqhwPrLJTDwZ",
  "key26": "syeA2HtRn7ZD9jPqPJ4pBamaf9fk3Z2efyFx2otatngDxqm6GFuQnU1qAb4KnXdqaEPGRu7mqKhLX74fxgZjEKh",
  "key27": "4LisxYRjXan3vM17qwoXwJD85ApDp2aKx23BkTZ2XaAAzHTz2n2WZyvvyViGkxjNYRCjbSCYqb9J2Y26EEdhGQAT",
  "key28": "n7rCQMv64WWQCYmppXJnDp4NEHcJ9AXLikNcsEZg9jXQ7Sy5csBDG9zpmThBFF26mCu7KCAWzNWvJPJLFn3zgwE",
  "key29": "47bQxRmZaHs45vAvU5Fq3ua3imw9EBLc8E2UeDuM6rsb68fzbYEn6F52YTNuifAJCjbHA3KB8tCBuc95QmbBuuJf",
  "key30": "7y3tcGXebNLuZggPkWEDhtrGHXirCUkJv4aJMbVDzuebgYYbRtmhYihMQ5ER5PB9S38TJ5sJEUQpfrcJWph4x3s",
  "key31": "edzrwEDZDRygsnrhEmggAuzEtf45XJk9adwdZhYZLbdtn1NU9i3neCPXkWch9K6R8YVWumFCCGAtdSwNjU8rgbb",
  "key32": "anuLMugR96VfWiibYDSWpFnr1q9PuhA1wFhqJu3EkwLPVZ4sXnwcFG4xRCyHgSQ4wnjjcbW7RT7wGrWyo61JTmj",
  "key33": "2jXqu7MYSuADHMLsmTkmVwouuq6u3tM6F5LcqhPee848MRiukEgFovpNTqXHjHtbazY7aoEv12KNLynUDsuQqoSH",
  "key34": "2Xd4EsvhQonTSJdouefjQGJQsFBmW2qBYpAtvar7ZSYK4gYoumvuwNGZCT9czpc2ZSSsWFnkDPETqpbsKxEGmQZz",
  "key35": "2yiZ29KxSKsKaqVSSg3fk1nYxvhorkAeAKbHZCFi4fJPL2hEhN1vGiJcYH1M4Kc4FTetyVkgE85SjCYxwwYeXPoN",
  "key36": "2E6wCPFsMa6Q6ugQNRT9YBtuVcs1YqcugXLJThXHLsu4MdW9pPWQCQBCHa4QRrxWmF3Q1CydC9nTfDeQcQsk6W14",
  "key37": "28g2XJrdV3gTPPGDbY3DL6BEhtwgXQQC98ETGB5Sjr9VVpsU3ojT81M8riMFTyuq6kDbE5pnmQfH7ChJt9QLGjru",
  "key38": "NY4JSSRFa6p4C4ADSjvK9LDRq3BAZeAkqdqmZuEL53zBu9gz7Jf1ptEYCxUifmwKc87X4SCvqj1sz7MiyxoZNaj"
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
