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
    "yPAXE6nQbXo4Y5YHR5wbQzjsBr1NMbt1tiD9pWSRfCV4FQauXgr9DxBkVU7Qu8VPu21AgVqRSVEfCBELJNBfa6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oXi3KJymDhiqMeXAq5MuASWx7eMnXhtyUvhJuCs6P9sbKMgi3Nsf7uqRKKpMRmeBU7Nz1dpbSfshTLq6kNr3V45",
  "key1": "mrz62SXwuV6CqorMK6nGNEzHHnVqqrQbYTRwpcVoaj8jUUTc4m6PjDdZFACwsXX879icDoZLvjWpBmfF1VK65f7",
  "key2": "58qGFCLr485aJU3A74mR5FaQvHQEksWLJSezoF4iAbiUMhLB1ueUJnqEvQBFqBmQcQmZJqKUD5LLPvAQipQdgSkr",
  "key3": "5GL3k1RjEdyFLT6fUopCzoFvDqxQXWec12sw5sB7ZEXvXZG3CLM6yDBAy4ED8QkTg1VFDc58nuKDoUmCGdZTEM8E",
  "key4": "3nTYjL8vH4R4GfdkC3R2Rqrv8Bcpsoi5U6XxwmiydaqTwWNt8XeHhSDtyd6p4cKkpKo1AFE9k1Eaagn9WfCKFnVn",
  "key5": "5oa61bry57pWidw9yQCdS4q5chrZuUym6NPd8sZiBGuzTJ2JLL7WTQ8AzTvdWYY3NMtPXCDANPL4vd6UXAyvmgFt",
  "key6": "81NWMo795ki9CnsD8FVS5KKyt2KYJ159W1hHaweTPyY6UWzNcV2dQ8BEvXUaiaR7LCoqgc9SZ6LjM3Z9qw3fKuB",
  "key7": "5WVEGqvyUuBMHUXLroFWKMuDgVezSFketGq1r8ngnDo8javo5v1tTFDNQKu8AgSibpMKhKnJ3NhC43Gu5tUd6jPk",
  "key8": "57LMkPYnp4TdTPPEwLbrvYea3zNV8hHwDjoYEMMjPQXMjtckTWzHAB7ouccKb47qCdtL4fGnBJzZW28KTrqo6SWY",
  "key9": "52CHssZPzViQFJ3byRJHDzYbQEPke93chSrURpTd7vv54KCJnuvuD6AryF9SMtqfPyd8GFWypFWfcU1cxb4EZXry",
  "key10": "5FuBstAgDcns6Z4sQ4wUv3Fa4v4NxA5LcFgMPRZP45ZKBqaRRT3yypA1GLySNNj7casJWLzCUKgZ4ERzEezkAibD",
  "key11": "33fDE5THC2dGusyc4YBV5w1MWov7BcUhLGKbb3NFQK57VrFCqddgpeUVAxEay1deZ8cYC4fDm5Lq7VnQFuWnzQ7S",
  "key12": "5BQy92W67PubpNv292J4EW3Q1rsf4FzHXaKUpL47pFcV32JX7WvJZ7utyHfaQvXGbgxj3dTPeLdTkmdWHfjdeD82",
  "key13": "39Ui4zNr5vg6QPs3GhTs1Z8GVV2T2pMGjRAQMdR2dqLHEoZnK4Tao7X7d3gxme3qAYcY3qMrecCewXywC7vs76cW",
  "key14": "5DsW653aW9sBzLUpiBEXxz1QW99pa7Nc4upow7q7RhoNsr8tdsxudjw7pBJsYvx4b7NQh2mwbHpZNti13ceFvJMf",
  "key15": "2WkV5VMsXYBcMmBVcrep2Cg8bgunaq6qtEhHZLphrKEuigXvwbUBvxCcPcnaTHWnCpP6eBWRVEyCQKRdztqEhV2E",
  "key16": "5DnvEdDjKa5f7rykW241nnu4VfSLmewkFduwfBZVT6Bf2LXALH9r3cHV8zarLFgm1jqoJatKDcNPsJ96EwQtTAw6",
  "key17": "4VGEi5Ws1FozUFDRrCTtFa2pLgc3c74jyZB7p6H2rkSvVjRd7PP13thAvEHo5KjRwtJicFDvfoVkXWYxNw9y4Yvo",
  "key18": "5reuiNNp6Gs3oCyyAiptuZhQ8QnYiYQ96TQ7gf9Nnc6wqffU9foAsidKEQwpJ6RoDRxHZNjZycPCRsKcmqzcxG1S",
  "key19": "4BX8W2A5Uwr7n2WVs8jBMj4GH6ykwJ5ZDJqfin4FKc14Vu6Anr2Gar37xdC3t1aGuqUmLs7CxfppRWo6ox9dr3KT",
  "key20": "3k2zZrizFdHc1EN1WvxtHWupx7ue12NizGwnMh39jm86DwH12QMtpQhta6LXpEUvuUvg4ppWvESfbYdqxMi9ZjKt",
  "key21": "TDkSAg7XAc9S1wmwWSFysHSVuj2ehoxpL2dAP1KsjCJ43vkvLnCHQGdwAfwi1H5U63RoNbmUXMoQRDBD5DNShox",
  "key22": "mFMhgiYZfm8h2vhoGaMg4ZHU3azfNqSNR1UfBSXQevFsZvaQ9jZLdxLaCeZjiMnre9evL2SDLTqHN6Xmt5ZZamv",
  "key23": "5Rm92jm7zPMysc1E7ea58St9PxQfA34gSoUnLpdZ63orBhyqR4hzwGAaezrcLK45qbkmQ4e46Zyv4EwbZ3kBnHL4",
  "key24": "NJ4gQp9Sw8W6FgJYM3Cc7Ltx5oevXZ2CxCs1HVZTrgZ4Ygh3f3b5ri82zANgmziLzU7osWL4xNjMJ7334i9kezQ",
  "key25": "5a72JB8phvNWaSk5dmbF6LXdJ7SXYSV6rJKYMvmdTHCyWiqjsSJFhmskr2aGuTqWXNx2nXJxDsrqU3XHqx8miumi",
  "key26": "2q9FCj6F9uaxeb6upe71ogudzACPWBboDNKbWTTA5BazdNVXuiXj428yffj4rtzpgFYYS2MW4LmHerUZZWaZstFY",
  "key27": "cqNkHNJNtuDhcGtZdPAM95bHBy9WnctYRedD4kZL61hCw43VLaSpkDe2F88pEGNL8Jcug6CBFA4D8wfq3DrpVup",
  "key28": "2NpYEcWqiicTq9Dngha1nao3tRkWLajqZgV7q7u8Hwip9HCCRbJZqgCTZ3Pghc5K5JA2nDE8nJAkQHmmuwP2wHWX",
  "key29": "2m4kN7D4oJhCf6DrHYvGWnEp65wMwEK1e8h49CmQPR63f2BCsga9GZxaYAYinM4uj8C9XAJY44N2kcg3PNRcY2wH",
  "key30": "5dQp1rGomYfHxXuHnNJiQoNFP7VXEiw8SH6XsBSd6FJvFdtitXq3Hcev33NjEAARd7VF4nDdwmncSpzBGS9mGCni",
  "key31": "3iXWzKSJNG6C9Vnf4zRKQUZ8cKPWYWiyoB8YcGuJucdGpFEyTxqf9NYHLmLkCEoYjdtXHAdez38k5BTn87QPYDM4",
  "key32": "1n9NRpjWJbwwW4qLWqU52XBQtGegdhHA2nea58dhCsqWGtLubUoKK56EhdSYt4E6B9FZwPGnYowWyA3m11gkUAT"
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
