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
    "qygqU6TvgEeJ98NEgur1o2uX4KUWiGw2ixSs2cPiNEhTtw2unK6S6GpcR3XaXzath2WaBesGdeVLwytwN1Q1QNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GhmRVXhacTPjPANNVuajcpVaANNMMYTLaQyJ1iQirZzUErYm3bYiRxn6BJqRf5Pz7KAXUeNhsPDoJApUuhw6jRY",
  "key1": "4CjC722Ed4UsSpizu7bsqUigYsysBAnq9igVDkW7iJKxDAdiGycqhHF37BHnU1pfcuNMKrQPhgdhDvFjvM1pJXcS",
  "key2": "5QZQCAp99kdptvFjNkdgg1dCH9WhUsJpWnwo91kzSHQtsnCwU6SXBRzG1qe57qity7escCPsF6gqk5hx99bNu52u",
  "key3": "5tLwBgqm3qrSoWPzHYx2kmx8FoWBEGKumbriuS6wB63hUS5VbXf6GZh3mXNM4J71AxbdYZb7PFFfBK3C3rJhDgG1",
  "key4": "3pFDgF6vYJB1YWJz96GQkbL5QhsqsZstKh8gd2hfdzYC9DCGbnNfEgaUQNZxFPLtiEoVvXPFuLgwSDZBts7RYmK9",
  "key5": "5ZwB9fdD8DLqDrpGVmUbmvFBVvcricD8hbiFLgRii2b78nKvvn5J73ZpwB8FfpAoMohHqE4y6JCmtEGkL2UUfha",
  "key6": "3Kxv6hhNVhUm3P98RwVnrdi8VbFZk7jp6LJwvVofBME6KeDwsGwWg9WLye1j9wyGSVbEUwUjAmpZZqq4xDjth2Jt",
  "key7": "CdpSK7KWDiTNtGhWTg1EeWh6y5AG71det4Vbf8dvwPZU4hDmTY3dCH5o2ZA5qv78btTiHmriVqu6u8Y1xt6YutT",
  "key8": "3ZWm9TtjLmTdERG7L7PYPQdDAgE3ZUWPeanPk981EKFqTfhx1wB4kmhrJSJEErdTkCfi8Kb4rc2ZmtCWJW6o6KTA",
  "key9": "LkiSaf37BiBrdUsexMCKU2qpKnvqVmjS7BiSWwA1iVcy9H2hVK49BaigxGraSZbpTTxD61Zri1WPzfX91EC8d72",
  "key10": "mqmYk4HbFCV5f8QRyAsPejeydXz7huWPqBKkC8fFFcXnr9owUtQPj3SKGYbjUfT33zPXyM6yqkU2iU4FmA5Akbs",
  "key11": "3g2MRc5K2RdNFMa6temjqV4EBi3MeMkN2kwLinxEvLfY5Ud2qjQt3PSkKAb8CpG8KyEnoBCTezh8eVwkHGW9wFgF",
  "key12": "MZ9KHLDKw5bNkXkfu23gTZs16eJYBTXeW3B8Cz5JyzdiEd4JGdeTK6167Grj5Rf3NtcUNwUjRQxxEG2Qr1Qb9aT",
  "key13": "5sNNYhkAsTUFpSyvezEk6iAf2WtGS5cVGyWe85jFJ4bshg37gAHx6ya5rHTdzbqiFQnBiiHeow1WdduRVL4bhS65",
  "key14": "3sV9gaDPqfh5koXWZn2YcfX3n2efjGtJrFJB7KbortFcVWd91ZtP6NfFaaK7VCsC5FudWSeCfp9xYezzLEn9Eyjb",
  "key15": "5WRefsvp5q47PvnwsXdMQUr1PbAL2h2odfXWmwpuZ8VuZPdpfuRKkvr4fzAahE619ewvmV4RDxkPpFTWJKfewBF8",
  "key16": "yT5mNZAaFugRJ38m9cnpSrk954gNFQFyTHTBCXxnEc5fb7KaDKwjfvnGWBGbepeWWxEz2h3qt34UUPHjWiXYwUu",
  "key17": "52RgvWMtuUNsyyY1THF5CzdbFCDhTHXWP6am9Lpcvct8wC6xynuepvYohuMd5B2i3PAa8sAYbq4tGJb7KAuY2Zig",
  "key18": "3fnr6Vky1aoXvJhdxKkgiTpHc87JwEtn2UjtXTxXcjieSdaiNc9Xc3ZS6AvYN1hyzz4Qth4tNaEujTK4PShLaa9b",
  "key19": "46mtGd3xzDMG9B83rFYZAHhk4F9zyZjbRRph16Nmbzu3v298y87kbBaZdYSg8wafvnPWLXSJo5UqnXFRshzPkJzG",
  "key20": "4LPmvzesFfhNJWNCmM71GAzXoW5WVCU6EARfmbixu8iEV1ALncPjiQ3t1WLJRcjnsFGQX5qaRyuXjUhNzYXDgt8R",
  "key21": "2JALJtMcu4XMk6bV2Z1awdirYn4eRu3mw3bjyPrnfVwXdevp2KTzqbmXZUTCPGjUe5Hk3TRunU5Ze3oAd2WHFkuK",
  "key22": "2GcQagpjeAwb4ieWpixVXuVkfd3a5Z51b49Um5QiMsqnUJxqy5uvNUunqEjrZKpqniYgbftyym4Z7iXLUhD6dHX4",
  "key23": "3G4wTWwv2rB4LNYhb14GZBdWjH89bE1oeJN6EDHtkNzorc9BVj3W3L3qakg5YsVvwQta6SK5SsMHKwskkPUc9X3k",
  "key24": "3wj4EpWejEpCk7LuJnA5vrYMbiXeURkqkuSDmDkzRBtT5cQejebaqevpbnnH8KdWC3dHFbtnL1PYSeaWLJsyd93m",
  "key25": "3uEAiEoyhH3ZTzuFLyTNZWBmtC1kPSZQsAKipka4AM5JeEZcxcj4GMgo9LWpoAfuMWwUoFS8BKrZyzQzP4GmZZjH",
  "key26": "2RA7LPogQzw79D7e4aJnY3ZiagcmrdrixX9pwigapJLCVY9L4w7v4Nc6DmFfhrA6Mrp4BsvRCNZfLen8k8sbU9ka",
  "key27": "6geGJ7HAZwz6RKeBr6sLUq1tS9VyoL73z2iDkaetqVzscXCmRipxAb1GR4SkwB2j7FncCt8R66seBYPpMuxxpMP",
  "key28": "2Mb8vh4PaELGCecQ76zegpK2ggsbcuBNhhrJCxWsiCTVvJQXgZYESC1JCnb6pJnooKTx6rML7GGz5CDnw74HYGim",
  "key29": "3gxhS6ZsKAFUbPbYLAw222LhdcMhUoSCogBLVjWb21fYfn92JoPkmnBbxq9cZeqvWjWKUzFoMEEGrMNcAHLBvZrp",
  "key30": "5C9gDqVoGXZ8HqsUmitMVGadLiSDKGdDiFeExxVNP2DkJbHNZdGtgqw4aHsXdNhriJQmoh63qPGMFtNq73UsCxo2",
  "key31": "2vWCiVKUNjQqztQh9SAN6g5NgQUKLwxZNv8TqnUXHhKYsm1gnVHJRvXXaWCjfLvj4YjobJFpKJdHdvwrcnzS2dTT",
  "key32": "3KyNt93i3foLgkbZkcgkeUNhfYKwu9wpbjDVJVeSZHfuGRzQkvtG3KqGYAo3W31zKgZxvbvDGHX7TR45bFwk8duU",
  "key33": "2qHu8ZJN4o3o5TTsuiuzt2XBeyFfdSPfxrhpQFvQcikYZMZS8mB9iVuEr7jandGvdRZQmxZwXLNMSfK8SEon5zBh"
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
