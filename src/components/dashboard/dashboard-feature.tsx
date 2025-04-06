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
    "4v2kzVgZr6FJxGXcyjCEh4goYcqYPSwpJYYhb2rXvKaDkqao8uvwwo8DVQWnhhsdbjRc86NEz2kWuMWEXhHWJ4cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fT9bbPnJg4Nm8Y6N41tKmMaoHYVQ8UT8tES1AqSFtwmnB76zur1Z8FgKrgWikcFw5n9H1rBPxbBCXQKHf9WWqKh",
  "key1": "5zwaeWGQ1tY6GeNCtz6MLqpV4tEd3F5pdi35fMcXzE4ZmrpBW5wuKNmMwCAU6CZwnscW1WfLi86aGvhxPtFELFay",
  "key2": "3LM7ZKhEDj3qbmBuBgCL1oAB4MBcHri1amMiav4QZhjKbtLZ2AqMvFQxs6W4Wigjw8cgeTiqZyESXHb9t3f89aWD",
  "key3": "39hoXqp5njYFiUmc7DaVpCCeHR5QPw3syWXvxvyVfAQhrtwiuhRAC5FKWXsTYfXqLvizDyxGvZpgJZxEUwWiyAJj",
  "key4": "4N2DiEm72qWdg6MznfZc9DEVBgvjd8srHQGaNots5dr35VyiqhTZyC56cPcVwHMt9jNzcaLxfPBw4xtVYDqgGpDv",
  "key5": "3cFd7LjkGrwWsqLFc5Pd8V637Q7wkkCCjQyZdnVueWL3cnZQtEx42DDhtc7QbJUh54uaqj3RjcbGuJvCDRnuJEcN",
  "key6": "5sDG7FVYuoGzffn3ikKuh6xGiGDTZ2jSAeVmzUzJVJRymzTZM1nPxYpPuWvDnRtsTWA8M1mJuJuW4mWCTymdKwuD",
  "key7": "47F2vMaphS2NJ3A2NZP77Ji2dKFV3xNHefvwYURTKgp8vR5qqYS5Cftidm3kjyJs2kssYpZyXJh6XvJzjLBQyK5L",
  "key8": "3TxkFm7buZZFWsupRQ4yF8oCuVkWcoc1AfySLXmxHVeLEu8w174yKjUnoyooiqcqi7hNmt8kpB5sRdaRA6kpAtDB",
  "key9": "4QBf2p21WsQdE62S8mCK1hiBmBvVw11LatoJHTJPoYAMHZKvmuZYj3rY9M2tNsvSHeE5MVjKReyUA7KjXweLBoJ",
  "key10": "3EQVi39WDqDUMHz2ke4jBQzzGH6kXkiL6MATwfZpda29zSBuuy37H4QSNpQzt96BGNeB884XAXe4J4zN2dBRdaZP",
  "key11": "4PLrW38Z6N9hYnTDRrUWBCaU3M6in25tBRksak8FGnDRvPT4whsLQceeqYE7TBzDB6Sd5DYa4avuni6NnuyuewM4",
  "key12": "2KVUQ6cvjR8mJ312BuJm13HtXLfLvJEkgWXbABG1TbTtBhtK2ChJC8J2Khodkq4RC2AEQsGt7CNgTGFkPE2ZRTWc",
  "key13": "58EuKRbu8K8e6xLvURjwU8ek8T9msta6jYUBag1dVAuSpn7D6xmEQqGRETiHXxQfM7G4ETFkVixSxrTcZKvDqtwW",
  "key14": "3PURTFQT7ZpNFvPGXKwqBzfZ98fHAcDBL5Qv1nFoKcPuLJKeiGpBWSk3f7ksLqVozSXVjaYRanMrGvkCEKwfGxpC",
  "key15": "54WKtGPcxWvPmrHaPzQdvofPSAq1dFw9h53TwHtSHfVbPQuWfBazSoTxFesYfKMZwkzgV92GRfjCWCNKWCHZC4Gu",
  "key16": "7Rya97dTQ3HJNBHKHuYwgMiPeuP7NxbrWhKTM2app4LwiYJMGx5hSsACcBex5aTnJBbNgByWhjFXXaDfZszGL8G",
  "key17": "3sRj1D4GEWpLXT7ufLaxsjPhDBBepeiMhiy4sMEiFidnFVfJNy4xcYyiWooxHiDZRSGvejbJk6gKskeJP1y2Guw",
  "key18": "5mwpg2uYxLNirLa1Z7p8wZGQhZWQhKi95QEKc1TaVYjmLrQdRSdmS1kCteeZXi8aQ3KMGQiayau8nN4usEsDU216",
  "key19": "5mYNgu7wygCtKhdyLi1oh5fCu2ZQRDpGvS8xU41B1VfxhqPUcrhHb8dHq7C6BjVVL6tN2MUKv7J2yUCiaLiTB2uC",
  "key20": "5whjpdffC4JVFM3W4cY97aiNjufjMSJeucwnrcaSWWbPfKrXD4dgMcncXyk7Pfj3LGCH3JaHGg31rUmHF9H9gCJ6",
  "key21": "5aduCYNFsnCTwgTP5gtLk4jWix4YcV3DzGD1vHP81Q9gvBZ99WL9HgsoQbypL8DB7WNthNiC3RmPZb3wKQrpVRdu",
  "key22": "YAsee9ygBV4BaeKfgyzJgr19XamfM4uuShhmrS2Hx3yk9yQ9DzjdPw6P8qQmiadwzRkFcbeH5bt2E1MSTxaAFkD",
  "key23": "37AoN3Kby46PpD86pVCXcp3BAf252fWCDRVbYHENAaETX8sdkaG7M2nVTh15BR75R6bJaE5xZPDtMYyTtGY7d44R",
  "key24": "31KYfJtNwSheaFrzWYsnhpVSpc3gigA6HxPLU8jrKpqFo1K1jiWE3jZaruVnTHAR4mFpNFnrhFKHYUFw5eukAcNL",
  "key25": "ytWixNswd97EYLKtE56Divc2Jy8pUWNGfiy5tfVB2eKsmgyaRxoUiBH4jzPoH8RWgT7ThgDThWr1GeKReQ694mw",
  "key26": "2BLotXxJko36Y2GdaxABzYsbVVuouhPeTAgazFmmYZTj7rjrpCi5j3B77N1gk9vPWKYnzPS37MMuUoXPQeaDLufu",
  "key27": "37H648qVCNBLsMB4GfGzx2zTKiixXa7orAnK1PdYK4njF1yqU6WVuX6an1KzyBAtj8xVcZnqYffh9kHy6W864QwK",
  "key28": "2Q1hRmi3psnRycaBFQxMqagqM4ZsFFcNNBWSChHJcM3azpxKoLiaCQSAwNA619MQf4RWEkbEZcUQqBos7xpxh2JL",
  "key29": "44ddPHvLRe1H3167VgNCdC9Xq1yvHBG2ZeUQcg8qdG6BU4m2EfTNhxvyMPpZhZkAgJCxuEje7rS6VfTP73rCEitS",
  "key30": "4YXcXzjePho2qnrLkf7iUr2GSiz42pE5HXpJWqSQp1aY8diddFGS3ryPczqrjmEqJxhdVG18qQvchkmmzVC1MDbx",
  "key31": "45dGWNsQcxFijhj2uozjn1J11MSisaGK7aqY1SUUMBP5k7mq6U2Kp3rPZrQndcMER2cyy81CTDg2C1giYkTYwCf2",
  "key32": "5RLkSS6SCE7Q8VtA3NMK66TpMUuJTXBvcP5y35qBNdPqrUKSLQ3wZZxB6nHqE3yjpUM6Hr26JfNwtnHNDaT5vUYV",
  "key33": "6NHREZJUDveyFdN3aFdDyVPkHHdTguaFy1CctpzTF1eScmspEYAWfd6LDvxBN3jynHxwLGb33frpeBHhjWKEB58"
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
