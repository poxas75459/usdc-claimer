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
    "2p4oaa7ADadeJPR9eYLwrLNFX7gU5LsF1BvqkioSp4d2hWKs5TGZyoAeCrQjmxoVpaS3yuJD8knkwV892t9HUNDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SdXL8sPQsEs7jVpuJyL2wWHeuEzwXcy5oUoMMuq2C6ujAWwj2NgvsaKAhtnP7c4tXMyePmj8uk6gjeTjfpw2pHX",
  "key1": "4yHE9Xn2ht1JAUqtDus8pGKd7rXHvBcgpkC5Ekq9BfUnFgLBJWDTx48a36VVTvfLUBdiMmuFjYVEcmoXSBJcABo7",
  "key2": "2HnycrnxUDHZq4Up95zhd6cfUNpzUbYFuNJaHuC1weohd2rAu9p9TiutQD8fo7CmAjKfcyrP2CuuAQiptqHuGQPB",
  "key3": "2GVB2PD6BimqM5QuqtYi8C9qKwTv5QMTrm8qTC6JnkC5GTYRWuhfk77pjjsczn7rmigUf3UpckctgKww7LrBtKtM",
  "key4": "cUyrMjgb1TaheoJQEuM65PjGr5uE6amDgNWZxPA9p6pYX7qfWx4Tzxw9GKTFkfYoJzG8vLUNimH6Bnj68QgHSWo",
  "key5": "5T85MyTtLPePap3d8N2p9EcgKxBUjvmTtEWBuKQwhBYedYJHKYvawK9qoweRiYiudNBNRTkHgYVe53bPhuhScThQ",
  "key6": "5kNvH3iEZjCmGSvELs2VvvtQE4bgZbLUyhNE8CwVeZr8D7QmUkuSEVNFsjRNLuqi3FeTPxmyN5WuVYnvbLzFYRSZ",
  "key7": "2E5PcwrCxAwfE7kjXQhSowYRp5itiABeZUPqnvjMJUYWtBQnN8NrrrzGm7Kmx5q1YPKVZT6rPDVABoDBauAEoieL",
  "key8": "4yPeBG4MhLd9q93NPKUhRJ5u9SbvD1z3jpj9jq2E5V6s1sJ8Kmdfifof4ynYUYPeViXP1Hdfpov9GquwffJenKzx",
  "key9": "3iEzT5BziYdQbbsYedyLkmdv7nrBdKUrVutSEn19PGozfqvNB9MqBqrYCQ28r3JbtZaD9RxMUiGxcNLYjs5FCvse",
  "key10": "2xq5uM3xXPtJWQDmyLnADbHgEPumYr3dY14ZPWQUT15x777oZjr16GMmRArfS8fN9BbB85cAtQhE2GdxaQpmiHe7",
  "key11": "2vdDVWjSWeg4dFK6ETHretRFfN7h1HXxDFpHoipMjy5apM5yELRXMRdjGmNge9QPf6fBf6ki8Fjhmt4V8wYRnR6w",
  "key12": "5TYrwjLe5jyrKU5YwS9QhqTfspwaP24nhCZJWhSFPUp7qP1fXTeDz2mHg6sVmHffq4wh9bmizjUNvyo2Nd5FAYj6",
  "key13": "4BuoGSpUDAjzHs5R5uEtRuJw8qc3MGa6qL7mciDaAtfy6g4FJX5ThzG38PVkn9P9K6FximGuWAcYuz6SC6dyVVvS",
  "key14": "5i4N3TbTRNfUexuMB1uzZACwDzF2gPswT9MQHATfr2FnwyJkqZewyUBVbasxcSfPUNQZubbhj92TZGuAxJGrPTCb",
  "key15": "2yaB1udSQhj2EAQwavMZCNTLYSYe6pkQA797AntKCXyVhN1E1W82y15teV7dGPQpmeMbRF2cNusUE8V6aeCNYgVc",
  "key16": "4BevZfmLszGED3CUo7vSmg9v4r3523pNvRmYXCkds3pePPcMmAauCmdaSRbVPggfHdTE4aX4CEYAeQ1VRDDkqbZ2",
  "key17": "2gmhrHXkrwEjsB2nWaau6NSrjGiYyoPjbbBDS7Aa6DQHaSM3xUryN3dMJrkbynhhZW84oq2icuArhZRJe9BqkV4u",
  "key18": "5D83eD7gNxYDRP7wM5sWfxgZX9BEJM7fVV8PR4PgjWZFs3Dp3rGuWXvjvvgxq9ptG6J5GsY7BMNiifJqMR5zXJVT",
  "key19": "4X5dHeovKoVa73jHWFjGCqj8PJoGuiAcNfVZfZg2z9nUMb6nTgrScgRWdohZtsYvhDmbkCeZ9NC45TQqSsuGyhjF",
  "key20": "2G1g6bMofd1Y31j1YukiZYim9yyAL6F9yjpnCTLgoi5s52xwLaW5TygNX28TUQ62kZMTXC7FzxYrkGpvGxGB52gj",
  "key21": "47Ejb34SjUrqNs67AxYeEm35VKQTa4wBs8eC9CvCtqQrnaYfJpxEzk5pSAJbEEietTPLxxXqabLxTSJ2fZz5cd6s",
  "key22": "2EaxQ2GaX5JZDpLwyGTqk7A8WqVvyMdY3qeXEaG7AxNWFeGqKv961EW8s6gZqSCzH7kVPtbCW77B3pHde7rdjYPA",
  "key23": "5bvw5rvbZ3Uy29VYaBUpzABNFyxHjexfZc5RC4S84nXUViJeKzorZWjTo9XGXLkiWxxQQBm41aCWygDmJhBgmoRQ",
  "key24": "5woCRTwuCB9FHagaaGNkUxiGnUkKpiYx2umsBZtP9rC8UWJFgQKYkW164GsKf1hefFw1JNmMtRKhHoikwTYQXmeb",
  "key25": "4YheCWzjwk1kNYtt8zFnwq2V2WD8WxYz8XPXtRRTa5VqYfSpjmo2ex4V7ff9rdZ4ecV5jNvMxH5Sd9A7UTX1VEEU",
  "key26": "43axffaKTSLcNLkj3YS747bnh4oYcaepcijjJoip1sQ1MxX3uqc849AGFzDSs4riVXMqxZBxpHnUQkNLrDstXo78",
  "key27": "3iXJXwy1gFNGpDBC2qjaowXJhS1T5JM1m5R8FRX3P94hqsxTxLmbDo8T8FhWm79rWgQZjPcgeaYeGZFhbyR2eHPK",
  "key28": "42fkwigE8J8QJv5SwDhJ8QA9z64hW1rvdeTKu2RvWLxtwkNqEatojEK73wutK27vJFEK8vD5hFjkEo3cLd7shXC2",
  "key29": "53g9Bma1ETLFRu7DD7NN8pFcE2WwEXDowuAG1uB9Mez5jmQkJG2L9YQMLQHAq7xudtVPCGgo9eao97bn2PntrXvv",
  "key30": "5vkya5VH8rGP3bEmgLdWrGTZdYWRqL1D745mZ4H7eTnf7fE61wrSZs7cBqAqVfuaVSgFdQcAGYixRPSGgumFxHp7",
  "key31": "5EfuRt1Bb3TAvHCFgyAiide7Y1tRmghgvV1aRHKrZPwndDjAcYViS83P3wvVPqBXPUFbJu8R3tvdTVb9sFGMa974",
  "key32": "4A2BzBB3fNpa7kZ6uiVXRpgsWRNngVE4tXPyNF26Y3kZ7uX8GzBq6DV99W9P64vh6EGQHEh7UQMWkiorrWzNZM3c"
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
