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
    "3XdKm95HBfBpYbC5UsSmxeYD1seeY85w1GuiyWmRKaKe1rgNGeqCZxqKid3bDskAjrF3yuL9mobh6WoyoTaWYUQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kKe6DgJZPPov5dfFzVvAUD9XphxEXNmNGW6jps5Kcqap9mDBuL85nEpuhKbf3DgBMp8Mu1RDPuyvNjEBMjYuR8J",
  "key1": "2NmhiaSEggxDt5sRa31r4BSJdqn86gESn2NQ5pMx4EEFnJk7MLc6G2Xjg9PVLWzf7G6CYz23kvBPkAvF9TkaDq7r",
  "key2": "2mgNRxrdBDApER9Q2YomBByAFyuaacJg3zHapQfAD1XY4FmVavj1RJQ43bn3f8pM4S53VWvBghriWEKE42kuf2en",
  "key3": "5dDkgQgaTLkhNeBa5ye7NHYkpSxEHYTkTTkMia3v7mtD7pzac4EtQX7Gpx6cqMVHKEQwaqkjKvsfpdpUu95ASDET",
  "key4": "bboEx2mwxwbDpDxCKsj8KHG7JkUSormqaRZRf87mZ3Eu68hZqnj6H3mdFzKWycSb2DX4cHdYGKHJUmxdNSYeA3P",
  "key5": "2hKNaxaLREqTsLWV7nmhStZdjnWbcoLvreGpT16AndvAvGGXBPttnwA6WwoVaZnQi2DSyvpNzyVzmtHQKDMpRGB1",
  "key6": "3Q8ddtj5c88ftQzH5xQXDdY992yR73zTsxkbFrYtoxjQ7VNxucb7vc7MKucXvLyhANUz2rgUxvEMS1K7D7uz9NGD",
  "key7": "G6qkuXiwWDGdNQhLtxzbvaD9Ac9WqaFJPpzBo1w4F4pbt7jBMLmoJ29hJxgt59zzmSqta2WjHGmnoyM7TGohqYR",
  "key8": "DVLKqwxuuNWTPeab1vL9n6mhwt4uynvdCHtKEtcppCR1k2kCkxrFuNBptCZ7GHjxwxXQAneRmnxLck4EE7t5SWh",
  "key9": "nk93poPrqUcvdwi6vk4SsvJLRYY3sjHV4pnEMnAkZK4niyucXGaFuhzVaEKwWpAgfJceNo3tCquEvUXAPacpEYw",
  "key10": "4o9JDSSwnVCtzTy8edwwXd1ZoEtQbPxDJYuPRtPZizNYFLDjMV65DxF1AUAdEMvaCHRNCweUgVLz1y2deL4yqcgD",
  "key11": "4Fuhr1pwbtupDmq4f8JKVpgVQQkfUDXWjuNhUEduAhCVUcYUxZ5u5k88ZdNnGBn7n8P76Q2DFuW7UjDccoKRPDJr",
  "key12": "n2VfjE1fcH2p5DjNJPj2j184ajfmLXPQZU9G5n9pZwEpJ2yCM9X5PUj9CBeVtaJkeSDZGnLm9teL1X3LPCywX8m",
  "key13": "2ppG1bk3bHiuWd39t5Z6RvEZmFHNzGkC5mNWSwgHeGwzTDxjMYYnGtFucLQV8psXBh8Urq7BCU5BwSU62zn8D8u2",
  "key14": "5wqTQaG6rX73uUsYkPPtSf4WKQ9hYgGzPTSLFXBXnVx6bGpkjbzao2YJiM3dKrEsuS1qFK3T9V8LjZSThtxsMsEr",
  "key15": "3x5s6ejKontTiFmkxXjfzSdRtEBc63VJvS5o72HuFUEWVhnusNxd1zuikUB87h6ANrj72MnjtWYAehBFaBARtfhm",
  "key16": "5E6bKhNduVMWuH1CTzaL261q38ZQ5twpw27Jsxt6cto6ZgskRvz834Y242ZRmHVkGGd5wVCry7ZLmFjc34NmvJZ3",
  "key17": "VbcPLUYACciodsyxahUUF9D9FTDJyZZXviDtsawXxiKrUe8g8og2Pw8e954z9AVbfkWJtherRTFh3ueMpanuZKC",
  "key18": "nSQJqhPcpGfPJrAbNazHWdPXF1krab2xU7Fcu5EV4gp9DBphT1FsoDTW27XgsGCfMuFQHYKtZkFKfQnKmmN3RiX",
  "key19": "ASCHdJwqcDGV13KxBH4PSinUNbs8YDfKzKVtbapoc2UDPyufxuYPA9fYt6khDJyrrM9nJcZpsNw9vpqG9fMYzoA",
  "key20": "2VFTWVdk4tTqk1TYt4aJfRn3VN1JbFrpaDPtqx7yxWAofSXDNrxdYzf5nLeMvhy8BGJ3QkbpFVSFb83TTi2qb7uT",
  "key21": "25irPY15z8QaTJskuyzSt7LYZ3zTpkM1wTuGViiGSaq7ZygkHNzKScRQafDjJs7yAAEuKXBVTxyd7PswPP4oAFq2",
  "key22": "2JEYB4q95XpX6Ph1hnQsV5XdFu6dXVsCGGWP2xymuYazXGPKAbjVpUGXkVhSENg8tY7fVBZLec13kjEYQUHbmLos",
  "key23": "22ScLDXxGN7vvYH7ZK7cU5QgNLrFmjJL8GYyU7ZzKMFHkaEGEjT58HNdEhrXcKVocKjZbXdJCJiQ8oTjwRoJoudp",
  "key24": "kDK9KKhZdMR1JBfjXHbquWAqkQpxvQuc5PpB9YAL8d86fueXhrU9AhUtQgCQtSbT8hU7ZeWRZEyHTLTfqproR6x",
  "key25": "fYwNfdExJQritpzveboe5J7Yjrpr9UmTwnSTDbD4PFhKTNmTZEqcKTsJSbKRfh66ch9sN94tx36Hpe9urxzUy4w",
  "key26": "2bF3MDuH4DvaLau6AJvAoHdN152pYWf3VsZfPu7fSncJ52yuFZoC4vQe5FVvCh4j3ikLxMBbGiSd3tVyAB6og2jD",
  "key27": "3KmSzp1j7KjS7huJR6GqVwPVSFSy9L1M2aj1JvuwZU28rjzm9RQtyGGrz5YWEMxWqHDgW4hEnbKqhrHLr2VgcrQJ",
  "key28": "2UdGMA8CLDPX9ibznXHCyqM5qrBnz96iyR1ddDK3X2NABKeNrujhk6ENYuxU2q9z4qpNrW7vjcNrQPpdb5HZEE7M",
  "key29": "2dNgh46ibb5xjDoGXUYxk5ditQEjEoEeWmZHuomq5gUYTw2htoziKYq67NBPdkizSKcaNRMcoLQ2X8Ce6mWzHWJn",
  "key30": "UY3CHdUdu9nBw1QB1hE1Asv43vhUw9Bm3RLBTqbKJL56NuDjLNwTGfq5htBy9wBPo5VVJaejo3SMcBRjW7Ny7m1",
  "key31": "3f6sgaNXJCkxQnonV4XSKMwyxpsHVaiQ5XmYnKxMbsAz63fnqHLD9QAyWBug1qWHv84hHZwSb1WSkzvbf7SGy9YM",
  "key32": "4HLg1kEAm2UHCBSit72VwLMLQnVo1yefvAS3sSi4fuTk9maCDZzgLG1fPAMXojq1iGeahMDoZxpnZqVD8CTPDTFg"
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
