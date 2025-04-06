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
    "3Yg5eKZwurgNud1iESuz3B1k3aTpcZgcibfKCdUN2RwAjh6V4PPp671nRAxonbf1gbyEj6W6u171vYEcFb8Va5pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58sX8PnMN4pxN3nQHxnESERAU3Sbctc46SGg4GNYNHTmRZKgBX4BcxH7ApNzxbjaaWfAmL1wCSyqu8jpMRs47B4n",
  "key1": "57VAktXkGd2SHtdK8Mt61gracCtwhvruzLnRaVNZxYMeJoqig5LgV6S3e6QAXEZT8sdqrXmMNS4v47JSVTsPQu2z",
  "key2": "29HxKpy8aiWUGWk4epCq1qHXvnLMWRxC2qSSV1eLFuDu117msUDoVfzJGmFLRXa11fYYvq7VXWZBvXv7TTycDefC",
  "key3": "2gmjsiVryZz2mXRuRuECbNiYiNxkCyQ3PYnL46LBXb75enZLGpaQddmSG1JmgmchUBmzTYebdSvHsv7WANmzEtMB",
  "key4": "2NK1S3sBUUgYpTQdJpBQL1WFaHBR7Sjt15PTUeYPSB2Tfd9dCtXQLEKXdTjHAU7inP3HbqSn1sp17YmJSX1sTFjh",
  "key5": "4Js6nhJXJRFvwsTeLbkX6hntVH1fZ3YNy3PCJpfDHnsxGpDFVvJVdCF6NdaE5MkX153FwAjGdXDD7T4gbEnbC7pf",
  "key6": "2oYZBnyvvyAGugyGUUcaNqQPLJXNeZwNxUtyAZB3ZPmsUSGMdhNTnkGWu4pYW8YJ8gT64inMxxkFpfBV2ctZ6Wpu",
  "key7": "2ihpzpdRhsKaBW15rp43hQXzPrccAvXZDAcFHpJuUuDMYEKABTexomeyjcN33hcqrzPBbv5VsTrFdqsLgYR63nCf",
  "key8": "4K5MkzYgYQz8z5g14PXQzgN11GnGgHuvcmttsqtfc253VZFnfqHbR9QxrzhiFzLFryVxpnbJxs2c4h6SZwNqsgAn",
  "key9": "4qjUyFmq38WM4CLZLf3mbnjYghAou4aPuShPGhnLZEHcPKLbYwM8fmj22SuGYWPnBAVXikDsvXEGbHw1ebVSvtRW",
  "key10": "3LqoumUddHYw6imMbKQMwFzbSCziHUDWucL4fAh6DLbX8xVpv2sEQoJEDv9ntd2hfh4mwcVy32kGKXT7yDVwHJ9N",
  "key11": "4j14GEZQCnGMWFgLHPbp6LSpp8GkNhf3A3T6GT6uoJDMXqTHCwpNy4SaWzj2DAtPPR6nmZvRoYBn8pH1a39oajER",
  "key12": "4R4218ZJJFbqwv7uKEqdyKLHidPV3Jsp2YCPFWoVwBYV21rZgj2JcAVSPNUDKu1A3j1Jbn7djw2EpJnw6oKrR4ci",
  "key13": "3hJQEwon1Zu9KhFktLi2Tp4KWMwbCip7XsHZE4L9iGMfZvqYXxcpSosSdfLggcaUGhrufR1vwLQBaoZexjiqhENp",
  "key14": "M7BrmxT4oK5JzXAM26Mju7Tt5UuK7ZRYok8mkqHyH3ZguMX7UgXbRkNMJbUxZNNyeV4Ru6yf6bAia3zuG1PvDoz",
  "key15": "4sAQzQosERhmHiwnhh3sptEk9LYgMd9CdB4DVrPKDA38Q3WYf1rFxs4NoPFhf21gi21wCMsgvc4GAsghYNtvq84X",
  "key16": "32ZjYvRKi7po9FcBNP29Dn7aFKJujxJfEayEnLd6qPYo4Jx8ctwXQyMHsMKKtjC2VBtY9CeLJTo1hvMojRAJtWSS",
  "key17": "2wLPRh5xbYkMyQyUdGrAWgoz4yi3eY3Fz3f4rtW83adCs9HmQib5m98Fm9g5gZZ7GegMQ53Eqtgsqt4R536hNFvs",
  "key18": "3dk38wdt2cHTcyZ8XeWY1TYxyaWHJnJg2iiMqoYHBSgKWaK5z26k4LVj9qHRd7ewSo2C1UmSrgKaGw5HHSvGkZ1k",
  "key19": "4HvKuS4oAMVnF49cCTAJhr494hsbZek6h6naz1N8VqzBa2gHG3aXqDBHL1vpMuBGoexZutt91VFBjgJfDZGXAwor",
  "key20": "4aYQPE68e7ucwHZShC6RrSFeqCxSiYCo21ebidfz4Kc9UDJHGWY4FUXTQiU846JdA4fRjqYuX5dQdnXoPeM4NyVB",
  "key21": "3axcePtdh2hUhiu7FHWrzhvVwSjjUTnx7RenCUAM3NR43meJjodDTyP6Z8TmSzEcuB5DD2SfBc43Fqq69dDxqGQM",
  "key22": "C5d4XCNs9KWirqsY6ThPcsRLmA6MCJ6eb2TgSAQKLxnW7VDVAHpo48N7jGYmy9JkbCi88ruXTL1AA3vGTy6qjcF",
  "key23": "62tjnLfmgNkhpf9z25kkZzf7EEwvyv7tP51Bh92sHyZRmXb7q8iy7fiYBZAju7kRMQMbUe6hfcFJkecyhMw1QLsf",
  "key24": "4EfZUYKviJAFqpcrHAWJum1FbRqWUJ9ytDE4yo4AbywbRRh6KBNVtXaJzcMTN2SigNPtueqQFzY1cuK1Kh9xohw6",
  "key25": "44mHQjZVVKUMR5kVjQmCcMn98momPLx5QdRpiT7av8oqc3hMxwigYqNzgjHFa18YXwjdew8L2MzUxJe6iMZDN6pQ",
  "key26": "3UG13B2g6NLHeaoVbGemuW9N1tVi1PsmuwGtQd9moCHfVwjk1wMfAHC2tge9fij17F6kR8k4LPQt9SdHBgZSc12o",
  "key27": "4dcdRcUszube3rGRMu63s4Yk4vfTGFJhKSR2kQsEHqhS4qJxR5acX4tX1x5iXxXfuJhYVejcLSPHyL1Pgfd7RAeH",
  "key28": "3AKrLMtR3UjMwZpXeD1mv7sromEnoRcBi364Wzp7oKpgCAkmji71zHFaW6vAB7YwwiM6GmsBpKeGghNHrxTc489X",
  "key29": "4sESVR3foEMjE3sCuGrmUkxevxdtDgxp6JaUkWq83RYJ2kR3dZya8BK6F4GHgz4MzZgUfieDgYQfnb8X5BhJQaqQ",
  "key30": "22p4j9K84GET9o3yQbcrX4icHAD8yVSC1qt9cH95P5y2Pt96SXPzpLy9BuzGssp3uMgt9NVtfAPNMfBaWiwPyVhB"
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
