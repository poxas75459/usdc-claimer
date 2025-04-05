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
    "49fBKJdSamXtkSWcB3sBy9CNub3QUUsRW4Xy2LgQZSJxXfuEfFZKrmE6qfPbUYKMpyP92UfUAmUv6kW5XQfR5X8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cK1iG5cTFajrecnvV9sp1DhBTEBDqacVnk58LqQ2RX9A2xde6uoXUg1Rs8mqd1VdTuULRxU29q1JweWxb9isfr4",
  "key1": "3iVuTs3u6LiQMmKL3JUyZhTa3W6P22rkvd5oDZdQLEU7B875L8BaEbySRegP7JrJrWnA7wkAcHPCMdqvWwf2vpFF",
  "key2": "3jhrDrrdigvMiLhjsTHZzHVwFfL9gBLiEGiGiyJwLMRgHSR47kHpGyoj9HRQF6fNax4WUyKKX7NzNYgXkR2aXTnh",
  "key3": "3G9smpnVyBpdC35bb15qnY5eM5yyDunrFszeA623xeHGqadUfpoVYFREogdmpQsbhv9G4wyzUUs2LqmguUFs9Ujw",
  "key4": "2xDi59DL4sPB64eDomUKqBh9MKKNroZM2jm2tcjdgwjouqkAcxuNh2jLR5qYa9e9E72aZ19SxNtFqbj4Ny7V9S3M",
  "key5": "5jtquCXcowzrAAWweG1DNT849MZXVwA8poZ6wjyvbf6VVGoUQaUjNzfremkDirXugX486PznRYZCM4SvhwKmTqnE",
  "key6": "42dTGTbwqwGYPQw1UbbuMZ3ZGbS4nSR3zgD94GF1b8HRVr4TNPC9dS281dvuSQkGZLsjp2HNVJKWqsH2ARLqpbRf",
  "key7": "Mo22GUwQEpTsBddLmAE8EqFPKUGZrPRDoxdEVvFMVKNRVXrPwfphjo8DeZBDQFZUxvTaMxYeQDFmBPt88CP9M1v",
  "key8": "5PdK8QzvmpsRTfkDbKbBcByhdWoxjeDTU1CWBu5PnNkxhqPtTH15hAvMjdcJc8HKxT1gtc5fzK5gEMPwcbNcdHHp",
  "key9": "5fVLGnASgGgTHRATb1vWH62SR5F9v15tYfcB9bxVBzrLW1PNJhAg6mr6KYWoi7WLVsTew5dPuG629AQjEKKiLPqa",
  "key10": "3b2ncpfEEnuRAxeYMYh1Te6WaviTZbvyP6SBuPVZKwPXq5TBSTUvsFjnXRif2JJtFo75uYjzqfpJf8TMpg3XkhN2",
  "key11": "3MwsSewsL2V5m8cBy8btdoSupaHC29fuqAwDD1HcFWD1tePg1Pm6CyDz62v8u15xxmAsXJWvsgiXTvn1NBctf7js",
  "key12": "3gAvAdvDyxpo51yghSjnbn8DTCdYSZQHsRg6ckbruxV9oLmg8ANAGbj35WMSr5aDkv7Bu71VYyHPMRkMJ1DF2hYJ",
  "key13": "5TDeAaLNhAA3FGXwUhMcwFjWSKdBBCrEkfmseo84TQoUWp6C1Z6WETAeYa2EVb7d7mTUDCNaCkW5Sua7iw4HSiTS",
  "key14": "arkq19RLVUihQ6LDusCc9yDJbWF7BNXgBa8V5znn33FpPw9on9eQe3CXRrR9DArZQdPR3CXa7UX2HgJfTd9ttKm",
  "key15": "3pDhUKv3LTMi2HjtwM3DUQXkr5nnKyFqp2o9cENdzZuSuTdNYHjmVHuMzxy3ga1q6dvbi3QhZM6Mxvx9sozSwisp",
  "key16": "51R9zRXERkeR93KTmvz3q55GPRnpEqFWfQwtmjDBpHdruc1BNPArkJe7ZokE5f5fDys29vfyf9N3dcNNPZd1FeDv",
  "key17": "TYLsqHgtn1tjAd7HeFN9heioM2BwEgqkP5RMUnKyVMx8Jvc5WpiqUC3tdT42ysYkBvmVQtMZwkqvE7R9sUMAx7e",
  "key18": "47Wcci2XRapdb6BoXyfBuLL247TCwzuB5w9JimaEVboPjJ73cQejtL9UtpjREEo81mCb53zDb9jpewvLkzn3aNg2",
  "key19": "4zw6csWbmVMWwiHc3HR3iwBH1PoFLG6juZ5893TvDQbrYubdh6wf2t59U1s8vQSt6EdfvAmwau5ayEdbL3qK85hS",
  "key20": "WxrFxyJt4U1ivu8n1eYQHCKE4aX53nwfYqH1CDzENgbHpowfmP6XMfLPmWmmT3TuDoFWF6Dc8R9LHb1eCJeyjXd",
  "key21": "5uN5uYSFg2W48DhvZSAvkpvozm6UMC1XEbAuU1uQjktnEghgU2mFcjTaVcZYDAgtvrBZQqHCC756akiuZzKSgVmg",
  "key22": "5WzYJWqSXN6ZfuN5pHEjVRYKgqv9xFzATcKkFBi8zrsEWobPTPyVXBtBEqmiK2PUxSVXi9veHq8DGZABFsSPJytN",
  "key23": "2Hth4XedKbfYqW1NXs2S7D2FEkiPkynpKrBki9KD4Sua5mBeeDrWw638nzKvmwsqAUGfh64UE2y5s43ioTXAfhrg",
  "key24": "5AjqF6i27Rwp1o5o3bkHdpz8GhUHthXXdusqrTcHQmN7eA15caZxcTjYfxmrgr6eV4ybBdfnxkQESR2njKnzaqUB",
  "key25": "5A1aYG7QbH93utFhbQKtQq6gVtSfwvK96CpuTbqbv82SQB4uokcmmDyevZQMnYBqWWwMwBXsQ7Bz4DvEE5uRVQwi"
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
