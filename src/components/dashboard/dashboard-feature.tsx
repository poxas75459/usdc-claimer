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
    "4v93sXHMzwkz2yK1K9Q11F8URQRDN7b9XEfrw4FWGaVr7biB2Wa1pBqCmJhjY7EtrBUMwAjjrz7EEJ6Gwch3DEAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D1VVgxpoVSBZVhJSptcUm9H5coUCwGCc1VsBBGDcNh57BJpxJCQurjmHTZk2gRCYdAeDt5RweKDrUpcchLN3pu8",
  "key1": "4kZBm33HH2ARbEQR5Ydsb6PvPpvpWPnY8Up9z5CtWaWDrJH9moGvK4xYEBut4nMyStRkv9dxgStjB3imdYMonouK",
  "key2": "nbEbGhwxAX8oTwFjGXGJtTCAFLvz59YjYqjFNZbqaDJR2MKC3QNgThGjm3cruBCAh3a1SCB2Tp96vgbk69Bc74L",
  "key3": "3vyC55Q5S8NLfM41j9nJSRHRqkxbf1dS1ERHzzN8f2JUUZsrZd7YfY3ToqPXd9Y3n1nU5iLsA1NqB4uaC1bLbJNP",
  "key4": "3cLMcoGWnshdarX7zdH3RnGvyswwDuXuVAubWoT7D6iWrcgCW9CDND45LsuitzEsMmxaJxmHhHWdLrgsqZWvMwmy",
  "key5": "5hB3peN92oTV5roiRss15gyPP4m6wx2hWMrT14nCEowx42AkPYDwNgpUVGdM8FXQX612dfc5NTrbEBu4ZDgmE5P5",
  "key6": "5gCRbFH94j3o369ZzbshHwSbXaRsZwB531R1nUjAqk7VeZnth6QRTamPTqbshLvt8bnm8jFMgGgU6ZuiPkQbUAYd",
  "key7": "4L2wuT4iK39yrvAFAY7N1HjokpsZo14zivnMYejSsH6PmdrM5Y7CZYvucLPyWv5Gny4AeEYeXsMH3mrKLHn7PHrK",
  "key8": "4KCRLsWAhm3S5h95GcowxAX2FhpmRQAV8c5LeDYMzB343nTarscXu3JkgTU7GtSxh9vQkget3B8ZoERPUzimWyAa",
  "key9": "4nydoSJjKR4tpAJYwhT3TNXQVhD5sdH6T4Jio5xu16fLh4Qmx3FhzwLrU3bBVDWjCrV5NmAYnv3CXCPpujbgPuHY",
  "key10": "2DUFFKGCDaJE6VdPFZ4Hk2JBc8wwuQZWuPiA4bKqFHfhg3v5K64DBW7RQHJ2sbpydE6T1rApcZ25YVrmnmayZJa3",
  "key11": "3JT8UQzQU8ZVmTHhhFBdzYo64HjdxyV7yvNd1avdcm3N7AfBosfUdTDP3C9xSosyzxzzGjfGKq9ZszXiHRYsSWww",
  "key12": "3C3nQeqqpvQ1S9cLz1KtN1JN2RtVdCNi9dVZxt4EshqL6bhJUdDedqxgkJXPypvLL7CrwMeMBF1C3S2eJvBS8gUQ",
  "key13": "4DNxcdRzHUb6SRXyLBEqynAMG5Be6adnJrp2tspJRN8tGJ4ryaGUqGgd2pfoe4Pbq2EvuTm8Z8DV2ZPrZMj2uiqD",
  "key14": "2QsL42q6NS4Tt7LKYHUzWbtqXx6NSYn95Z8pmHbVGQUm8aE3JcGh3ZaLjHPNjdiXU1iB7XPmzLcVZvPPpemxKBsi",
  "key15": "8qzRKiXP6n9y3KR9X3zaynhkXxZqduWxUcuP1JQ79xdeTENMbDxCkB3XaCNkQBDM4H8wVjYfyBU1qkZnJkVnheJ",
  "key16": "2UMT14mSakDMqj1mxFsFgaraufWr8UZHTUQHpcGAZB3wwnje8RKvQAmKF4MuQNHEzy586mVxF5zBHCbijzLvMtdJ",
  "key17": "3adnpACMyFNeCBhMFR7xTEBMco3CeW8ZmxXBqFurU3n3kZCB3ANoWKTC8XzRjytsL1S56hNaUFFNmL2B3oXN1npQ",
  "key18": "ECha6YS1uWJwTCxr77b6Mo7VxnU1Zy6JrQKZekR8i4NgFCcFGCXuMFx4zFzi4bKcsqNWQakdo7MvUTt5d2Ai7qD",
  "key19": "4y7SRqVrfNyW48LtSds1eJnTuWqQcd1746YYUDH8Y1AnTjqpHcSRMdCPDngob1FknoiqET2cpTEsnPL4Fv54e2Y2",
  "key20": "4qzCdP7xC4dkapreo1s2eMrmXyhTg5LaAoiJPDdhQenNGXRbxLXzchN1idMskH1iQsdo3LvcJc1Go25HR3j5V93n",
  "key21": "4GLdWpGujPVjGJsdNc5Kt8xkQkhtC4WjLcyfXncKwRNs2sWPVDXmZHLNppdBD2EU8L1WcYVhZmNAndKN7jKPDyok",
  "key22": "XyfuuaZJZncijcaxCj9vneUZjRDLznbs6up5SGPS4to86hmWPQjZZx3QeTVbP1dsL1JPUxTTBZdd3DVcBqQ4uTu",
  "key23": "2zNgGDTH4H8cjoneNb3Tu7sWjF2aMDC5CYdkHArHura1fAm5okQq6NH5kU8YBjPwjyGxCB6MomMCoptZxyCR5FU3",
  "key24": "2PhzSnXToKfrqYnzMpbYbEYk8arm7w9GSpHfT9oZxdZKmy3qq93GqsBSdR8fHnLmfky6F4wBXbB7qoiypbVmZ5Uh",
  "key25": "iXoQ9HcTeHZh5x6pJDsUTdCuWvZg7gkb3vcKWAL2QijYTABjnmKomrGerygKxhJFw96aCfTKoaQ8Mca2v1oCKgA",
  "key26": "2yUwqCdht7mv5co2kVGWLksGn2iPLfUKJY5Wws7bKTh2XPcfFNDVtktP8FtbyFeot1QbrLFy7bEgJjTFNNEgxuYi",
  "key27": "2GZdwqtUejHTLXPCuek6BV8zFNAyDSq41ZNmnxYjx1M1g3LkXFFPhFSpBwUsu8jvJJCdCb7JQ6WWHRSPDdt3LjtS",
  "key28": "2EXTaMMK6g75DFmSkQAtBKWe1nWD9P9TG7vj49RUmihGQCLfGP9kWgnZ1ofBvQcj5jj76pkaLVwhXjBFHqZNCJiF",
  "key29": "4JYN4xzWqkmAZT9FpvY7LRJAom44hjkFDA1UvF4fRvWqm35WQk8CLNP6Ak1fHwmUPoUhL6xETVwpASAbLk5iqFCa",
  "key30": "4PSYBnNPQ6R8f1JT8m5PGd2Z15KkGwyKfoF6YTfrdJsXWUZSL4YU5o8FRGuwPSA1udWLkuVN9n2G9ruFmzXiW4BE",
  "key31": "jXKjhRrY7Av59hQ4BLDDtSue8yxtciv8zkUEqqkcgXKtRxDpC7Em5giSqSLf62fq6n7Poq3ngdnDwXkobgXQYAu",
  "key32": "5RJwPCRn2do8k8NaHLmbFhayfTzoBXGyDi9sirp6j73FcEfcRLoZcLZFMwNGMsmrtqBKRCZGE3TyXMegkc9VWpNP",
  "key33": "2DhkLpMWhLtw3vkKqLQyWnUW6LeAw5sYK8vMh63yHDYfVhTqSoroRDD2j5Epb1ysdMGATQjtx3AQvZ4pj5Z8CNNu",
  "key34": "jWCEQBpDTtoSAXwPwBCc2uT5CJciW7fAgbzsQoy3HahTgkFFk1mgwpQf7SdeyyeiKvW9poGMycvf3859PUDksQj",
  "key35": "2di9RaK21MKcki3qdkq91vTBXH8h38St7H6QCjR3onm8PZGBob7MMUopfZvDojpFxY69f8JET1FXkDabSAJ69FaK",
  "key36": "vhzsqAW4XN8bzmtnBs2qQmUJ2ssJrFu6EGW5si8WkxbrjDrokaVTq3MPp4BKtc9TS3S1opUkVNig7hWFgXT61C4",
  "key37": "3ba7VEEp2CH8fzDBJLua7mB4WxSXNAvx33o6HnSa8hDTHzz7E3aPFQJqar4jLPv1TyfsrkbMTF47yL8zB7YhFjSY",
  "key38": "5u7fEnP41oRf1LHc5dTuknhPCh3KVVs4zo7g6pYAPjEzowSTbodKPLFkyp3rVd95zpXLoydungXmSZjsTrzsNZ1k",
  "key39": "5XeF5yo6ib5gqKHE4rUXZkVxmZ4aJCPtYzsP28g1S7kBVcd462GWqu5o6sFmHwc3rK965iuJG89qRtLbLJfenbE5"
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
