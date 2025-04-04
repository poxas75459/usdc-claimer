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
    "5aLQ1CNyNhT2FrTnYFNWZDWXfBnFrCucGgE3W3cHbyE82e6qADeHaTF6dDiTSTiXq6cZiJwFAnfC4ZT8hKLMncFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JpkTcpiHR9GAh8kbgQ5E1aBNd37LzSWaKLfcHiPSu638bSd8WvB1W3aM4FkTX5or3vVFmUTvBh2QWRh9pKrVZqi",
  "key1": "5tsrjRnq9UYhb84mYmRhADK15e2GHDNyr9y3ontKKyxhkU83kmd3n9Mwn5FBLqNrkpASmt9UoSfjH5FiV34E4m5c",
  "key2": "5UNahsVDQy1FcSe5B4PU3gwJJZYnjMcZu6YzHGqVz2LhRvgHqaiT4GF3qPJ4vZvb8aktxDukpcBAAvKvkSzXqNBP",
  "key3": "4YypTFcNAuU4DQniv5BwvLtttBdAckX7pevcrUFtyVsCE3NZf2UuGkkgwbVETqsvf9Tuw9bJrVSX7X3r1LUh1gzD",
  "key4": "5L2b2NpK15Kvuzb5KspNY9B7QyEtkuCopZp2jLb314ovt6QsyhyxwoTMf3CoLRiwMLcnQc1RyUf7WA6ZqGuU8kRy",
  "key5": "2RaN83quGhiGKCfA7nX3R1tzoE6kkawJ4FPpsjEEpDyiz3kX5nws5xLubgnLtk6p15p1zmJLwScrtWDLCLKNnroZ",
  "key6": "58aMqpdBDjFNTmJHAVSyxygHtWKJrWFKDE9umW3CZ1HpLpi9W9ZPixDV2e7t3W6GG6WjaxfVe1wPd7MQadVJy84X",
  "key7": "27oRuPARP7kwDZzYr8t9egApGf9oA7iDWzB2fdW3wTY2a9JTCi1hr787k6kEa9zqms3QGgs8Su46NdxNmcnvKodh",
  "key8": "31nNAB1BpzXPNrXsRbsNVKS49ViokRcCt9ZF3hoJ2CmmjYzyA9Row6bxSACiq4TAFjp82TNvy1ug9PXww2Xc3kwK",
  "key9": "QZs6YrZuPxJqvZsw4vkMRoTz16WivjpqM3G2Ey5mRmqQ9UMmqTPtAu8JiCTPbqSeHmFYvNoujpTkhCNEKLtbt7z",
  "key10": "5vdxDzFRaBNwEMfoSfbtm8MU67KRz5XN8Dtpq9SajVLfcTdUJXs7fba3sGgTWXu7WoU6dhN596uWMRh7pNMpZ1kx",
  "key11": "2nxevQYs2u8D8xaPDW725NSKuvbXppcK85Mmv6GpiG5ZbKHW1MkHcjKuehLuoGNNNxjfaepAnYFB9rMzcx6MCg5y",
  "key12": "67YnTdc4pW1MAtbgCp8qUHuMhpWeqShpzQdZM8vBGvWyjomsBFN3RwuR6tuM3hqXzPYAFVY6EG7T8iQRpUazEcpT",
  "key13": "u5azYP6DpDns2JBUEw3Mck1rnMwoULqjVWpL9vbjx9PgrvUL69RWQcG8oeFQAgjLN6TKtjsV52V4ieoSTsJuhoY",
  "key14": "3UknfbVNXpDuu15Ep43CE4kNVsarajTM8XPpLeDhpfCC46G3SZaaYwcXd3TBV55VmUSkrWCrYWWjMjXZmBdeK6Wx",
  "key15": "128cDpL212GNaP9xM3Vn7VVBcf8g96e2XVcB5hNNTsVyZSeEsnHssRDrRUzRWT8NoxUgHaHVKSfXgb3pgxUYeYvG",
  "key16": "cgR1hvzhE6tYPttyCNq9McjXAYEPLbhPmoV6aBC3iXQEYBv1mjWANE77itxHK5a3q18Rzouw923jBoJpXpwxkQg",
  "key17": "2ivrQzbwqfgAn12mW2V9Me3xq7vFxSYpNNCq4ZQvMkEMymEUe3PQHprVwXoW73DKhbUjUo5D78rHo2Lpbvf7bAe5",
  "key18": "4w1oK91FrmhSNsNqadFRyc4JgxL2jVuskWhmSEEyrhyQbazFUHXZv9vi598LmCGwPz4Qa13dAwAepvJmJQ3u47Sh",
  "key19": "UnDWYsfgyskVQNw1honqVRiDwkfCeFjk8dtnqWLk9tGX7DTVfAsLEHPxfhbpzmb8tpYgt2PMf5p7LibUVVAzVAT",
  "key20": "3322oQFqYU41R4MS2YuLVV2TjZAeR1Bhc8gMiTyYXsBA7JitAixe8T8SCkcP86idQB8F73xByQQRBvdoBWiM55UR",
  "key21": "4KC7WSzqbGkPAyPmQaDkoY53YdAJQYTFvjSkJscGxeBRKugsP4MmSPu6eFraAwWHVCkdKK4gbFJQNwc4eSU9vuhc",
  "key22": "5iWQaVb5ZE1eqTdvGUAeEdxePPTMGPDZgPgPe99zdnn34b19wVhHev5W73WMi2RdqYXPTHyBX5NdAbMVQ238PtnS",
  "key23": "3RqsVHDV3wb2VceqMq5QQujuJYbJLy8D2QfSq8axmpbKp45xmJXtBrEYwSbB9KyMtDcBGtt7XNhinw6hzo3hNdGX",
  "key24": "4jvwt2KeLefnHGkp6ZFkvXRVUp3qBTjZy4SV73GevcsKpRu2RiiX7v6LrUvBuzUZB5BqBmBFo1ppEHnpPkZfubV8",
  "key25": "NGBwpgL8M1FXEaziNxyqJt4ycmtUwxSg7RxSoTBaq9U8pDfKWKhJLNCQiebpYKZPMfL8e72ptbjey55WPvN13uj",
  "key26": "RLkAvunPZZTteRWD5Fo4H8VuXmWekMSLxvtz1s58y5WT9qs2iasrHaGmeEsQnzUnA6SAUyfcmgiH8jgqAmLWSTW"
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
