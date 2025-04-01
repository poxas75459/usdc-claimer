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
    "BG3ib8j4AxLcv15mJGWXuBs4gWqp9GnkKabqP7aGSqHa1HgFT5zPpPGvXiNoymhZoNi2rKTtYu2nBfzajA2Kzu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HhrGMSvRtiZstPmUxEoWKvpCfNYGrSifbUuxEJLfKYYB9DVLcVseQNcLKLvCEG51TfjkD8mbSdgH6ATYQ2t9Aiz",
  "key1": "29CaYkA4vp2n7CdFvJzC5w8pmTwX5r8T8fwsqdBtVtu7DjH4frnzsXnhvdUSxg6xESwVGiJuPe6z47vnGQkaVvZk",
  "key2": "2Z7kMhqo3dymnx51yFbUs2B2YfRRCou4eEohsAPCp8mTKxsh2yLmszAhysQGXieBG4Hcg3DFJngmgrGCaNeuxBnJ",
  "key3": "oTTY64SwAak8srhvwLMV4pg9GtoaNRNHJoKb8MHoiJ9sF5xp4soXymXyKxrcBqmjpzit413cRnyixYB5ED6F2hN",
  "key4": "4PFtH1whVrMjQZRcRkjFjuV5XfE54P3Nat3Z4i2neehqfEhTin9Q7F87yam45cwcYaMYK93bphckTBYcj8nrRVeD",
  "key5": "49Liybis2e5ageJZBAxeZSx7S3cZq8xnJnpo6Qs2u2f3CQ7J8BxZ1PGYe9Jd4ehCAaDBGdNpFX1TwfBTG7YbVUeL",
  "key6": "4Pc66Y43deYyHVApLdCga44oi6GS6yhhL6tT7PrKeLHqNnyC9oEt5hnXdnj7ir2DKKAPSWhz7teSww7zvk2yhuEr",
  "key7": "2397ojj6dx845mEaZ8YU195ZRgVMbXxyCVB6ZUs3t85n73fLbGZUmYfXAMnCvAWpc6BwuPkJRDSonZmSY66zsZqu",
  "key8": "4CGthGYYH2kq8DAbkXDg4j5FnjRJQyG5Ha3n1Nq3cNW5JeR1XKaHnHDuuVRqknRustWDeW8L68LpSvV3UKJ3PbqA",
  "key9": "fczPzCZ6VqsjbrhrREXt7ojNwpeaC8YpNejXh6DG1Ti95E2pvdTzx2Sv4TD9FyPBFBEwu8RSk8VP3coefsgduQT",
  "key10": "336AJe1ZX1H1Z3tbSbDpwgyZLuwUu7YzD9U2ioDGgD4oFiUnvx6d1te6RSNw2TxNpEvy2pzR7XnzHLSFL8JMJVWJ",
  "key11": "zecFedDe5vNeZg3P8yx18w1tLfgKKurcA265Wp4CCr2La6RYPWb4cSRNeVSno7Q1Nc77cLnvWfevkt1EWBywcf7",
  "key12": "5cXo6T7KuEmJhRg2wbWRpTYneseAc7brHJUHdwMcmbMWxWVe3Ch9anYiPpTJxZ65FqhYoUCiaixvDFVizAioyvGZ",
  "key13": "2DavqjpwQ9WyzJZTYjoGL8vg3fzU6KnnasZ3vHKGDrxv6iXPxyU869N6PhrLVKTYG4Y1qTmxbQuMaXNryEGjfwfn",
  "key14": "5AZTr9ud4ZLKoQtzzA435L2t9SyuCe7v9ZRcsyZ8gE3iAu4X9wRqinYgdM8xs9mM1VSN4z8h6E5MfWkHGzBP5FPV",
  "key15": "fk2nP2kpD9wixgTrTG32GWEica5kXopKjwBVFM7eyXxyLdZ7W9UxgEHBEAN4hVkKSewP4TcznEKsHMzhFkJY6nh",
  "key16": "4rcRo1fUNwJ8TubVReFWNg1SMUeoGk3naTFXTJZWekmXDQCtoxFEw4sWBRR5KtyNAyrEfeRea94JSQjnmjNP2uiu",
  "key17": "2S1V7XzbDKAkbYWakWqmrsSd1xhVkxc8MCbVBy42Pzf2GckQ5SzVYx7k3S4xKoFEHybWErqdsB3U7FQ1YefiFxh7",
  "key18": "5h4QVwVrvAwJoBCMeKLKXihhqYUiMUacK3AyDf8HbGNeKTMKA24EUkRtRZVTHDZ2gnFoGSrc9H8Kpd7WpjvmYVWL",
  "key19": "5t4gpMjAnbZmNyxJadeERsB3Y4ETxtTSixTkyMdCbtepUF35edwDS8hiafkoiJ93p4dSWCwH73p7g4DUa3g9KUoq",
  "key20": "4X1PeiqRgRSMqp9aYcGed2xUwZ6ck4H2sgYxbZbZkuXyYxN3jYrMF8HybMEgLqDyVRtDSkbYGKAa14FrYeMvz1cx",
  "key21": "5vJ2L6WbRWGSw2k8qGAjWrTKdoJ8a7ZAUGreaFvEEhoKeT3i7F6quvupfZK2svVHJoQLww56CxP7t1Dnosiw3G41",
  "key22": "Qn5nsgyJp1e73sWMSvbBM4CoEMSTrFNTwSf252uL7MYcP8LZ9GgGS2JP6QLYZs6c1wwv1J5RoT3N6xZDjLWjA8V",
  "key23": "34FtzUpBNqM1b7abxXJvMixzHfsjLRG5AHCkSJ2WbD1rCsmSzEKcgrzVmuHpbsGxfFqJqqW881bSUK5dWp4MGZA4",
  "key24": "5oSnfbFyiBJTnWCPcLmUH5xu5jUdr2z8HWE5eKTAoeqyhYbXquJ72JxyWmLsTG7mKQ2cw3ZFi6DnfpakP75piLFR",
  "key25": "4GyszsLMVeusamUUhjYQhhY46nCawTbknNpmySMuMCSgq2Rk2vtYQzKkEzn5K3ztTfAiFxciV5QbtPFYv1NorNzX",
  "key26": "4VGc416eFvUSPD4XhGHiKzkaAp2tv1K7BrxVdU2WdkJFQo4GFXNAZ11hHq8Vem1UoAaTuDBt45zQMcAwVU5v7ixL",
  "key27": "5QeNAVFiDeRkdhJ8WruAwp3gugUEnrtTmzRkGsScuX1iz63aUnVi25EYuRF97yztKTAqPUbkzrmmxZqdj5av7Hk8",
  "key28": "4HaecktLGWeALazVRhDMCXE8qE9VoVz4jZBiPG4HGPiUj8DmBGd6txJ2YMswdDsR2iYQ8NcUxxs3gxDqn48YDvi8",
  "key29": "5gXUGz38qFh6ohgd791ifi2fkP8qyfMJYgFKU6jUP8zSzmYuZDHX3fcBaP9ZEnmfDSRJQHkbHEshUtJu529HWHaS",
  "key30": "4kFp9kdMcKqHC2stgAv8NGN3ztRkEN4zYkcn3CFe4Dk9RHDQrBBJirJpnSTFTZVxaHW4F9LAS9GneXu1jwXKXwEk",
  "key31": "3qrxeJhqbN2mVKVgGNs8pjTMk1Zw1DoXnoPnAaPs4CZfKmj1XYMVxkzY1weT9SZ8iyewpehe7ySRaMngpNRAk1aA",
  "key32": "5ojykuZMKSa9Hr11TfLEf4RWqJBxFuTH64SiwichRZTm2jfMW7ngQLoLZBK55TBZEft1GmhWsfbYyPreUfQ5dArR"
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
