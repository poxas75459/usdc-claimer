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
    "5mfF6qCJjaQCg9myQrGB4vtptaoRgigiEsu2na29qcukJazkrpgbznqQeDAC4uBe8MEfoGWnqZKCDoHAQWmCoGfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J7vYmWi3PZxdmYtDFNa2wCoRDsMN8QSySUCznqux77yV7sHPY9WPpLShVsdc7xNsVvUBYc2AJGutcncUcP6oNDG",
  "key1": "2uujjH2gxcWJr2ET6tfJHZDwcXfX1r7HWPLDFiYYbJ4WPy2qrzbBGKs9EiNmxXbSHtnL11AcbrSeHoQM4sD9Jmxb",
  "key2": "4Eyiik8J5v1Wte9jcUJVU3kbXopzxVcKVnzN45dEpKeseSrVpZjw8248jkPM6bg1Q4rA4vGMx2gs4Jtjo7QVkQ72",
  "key3": "4N49M2c6BCDztsifkExYQBQtZCDPGLjDTYUprQFXVyPxu2pMzVSPvnArXWKnR8UHAG1iMXAm8ZRi48RbW8JtDfjB",
  "key4": "5bGdaRzENRn8hHPHShmrqtKLpwnX9K28YeDZUHw94LQAVtrGDHFKi9994n6Sm4hqUfoWLPeLgKVWU5bLbM6tYm6g",
  "key5": "4XUpoemzSEAghuTApRmZ5tT2TDjwsTVzJVEPLcbHwi6PCrGmUNCFVFv4ZkEae1wHzCfSJoGZjGp9MKToDX7dpZQo",
  "key6": "53s38RNVTsTyPzjU21kGGsDGUp4kJ5g6vFRegv76d8aHcspQWp3dTtf5UP7uCdHSxT2UirEgZ45rneG8tnsWxHhE",
  "key7": "2WKwvLu8rjHDWys3mhxA3iMX78pH5oF7zNWVJSD35bvVk7FmDGe741LPvoz8BhMLugQE2PhBUTcbvZmybVQfYASe",
  "key8": "w5rTCxezYrQN6tT5puEP5TNFaDBe9huwshwVzNw1ja9ADB5u82AffinVEzq2CAwmmCkJbecqTToWaWHos4DmpXh",
  "key9": "5dsFQv3KH8atanLu1DmjYBh6N4dGZnKnLDN6xpWz2oGU7tHSCngxpkxMUFVqq1i3pLCYu58APWtfDxXseLwrysZM",
  "key10": "mbGt3ctzK6x4Mvtsm9MGA3j6K685bN8gYbdD16qX8PwL8nj8Tsre8hg5cytFLzFBg7tmwBHabrzLoVHhzGe8zmL",
  "key11": "4KXaXiY3QvKbMtR4o4YouwYQaFdjVPbLnCMowQj9EHXg1p7XBqS118ifjRJGrStBkyqKHkSeZmf7J6ASYAzWPDo2",
  "key12": "4iS7aEV8bhQiM3Fsr71JKZSVp1tHMvxMXjXpwbA8uNCfz8xK9PjGTD5TM6jhH3Bh2weEJgFE95VrNSDtjAeocoh8",
  "key13": "3sWbshLbegZf6YkJtuLB9MsVyV5iLFfcE69uoAb9vrBmjB2V2FE9bBfcCNGUnyt5AVaQnrJXW5o4H3b7qXDXCsaM",
  "key14": "3GyA4nuobzpcCqmmw7o5RbcRwBk2zFSr5QF7AnpXvE8XNC1Sp6xLVytG2SVVEHEyhXA3uKDVx9vDswosJxwBq8qa",
  "key15": "33qJS4M271TtBm1PJCeXqEG1Gjt5rdKW4hybQ6GMQQXLKUFqV4Xto8xVj3xWDXD5FDDvHAgaCfTvWnrgjd2dAUut",
  "key16": "2zT9yNDXWy6jPhZ9F5Z4VtY6xmL4bEH29HdMogt6boLNt4CsJuxDXL9PULE9nvPQZB5TcYpjsPq5RsfkAe7XwvHS",
  "key17": "4JStH6TPDnNw5N5EJPcRQ3Dswxb5k251TvshiSGBVtrF3Rq7JYYs8hVm1ZqZ3Ey5UrrdKeAmct5KW1McJ76DJK2W",
  "key18": "5yWE2n2B7J3TWeynGQf1yJAc5ayio38ULrDUn5gdUm9i6N8ZQWrcQT78d6vT8wYbnCrFDZcCvVaNfXiVnNTeVaJ5",
  "key19": "4L3kR3Y9wdyPEJgv7V92n4TWmQMWaTvZZSfmL6QhYHsNyP7wKCsXtGRFfcFK5QrLojPyPTXTVURTserWstqVD1wB",
  "key20": "2TzV7wZ6QRNwNDGaqmaE2vRimF9GVaP7fGqM2wK5QizAMmqPvxTMHnJguiu5ivAiETtxXNtvz7xMKGJoRWjyHRZp",
  "key21": "4b7NWH7gfMxTRwgU2EHqg3xZfyXWRSzjZ7WtvC2AfRiNhHUGXiAEChAo6Sohf1bsi2KaF3dZbwBCkSWCMFSi1Rha",
  "key22": "3rVSGnu5JzWCrqwhFv31mnhkskXmudFX4a75M7XMafiv7uVhazYKTmnjDDbtaK7bys7XBzkP47X1xZTntxNVGKFB",
  "key23": "25TgCmSfdwwHGYSes2TbaEVyQA7PYWqCaAvSE9zFRvvn8mfq9tps1cXYAPR4WXkyy2YFWnMWngL6zmvMqrXEDfAc",
  "key24": "4inGYfUA1qhDnS3AWSNfgKZWFyHPUUczz9nhsdJ63q2PN8kWxDkZtpoTMoEKGeKbn4jq91dozCUi8c92n8sCW9Mu",
  "key25": "3GrYkwvGz2PuZHUQcjXhm4tCNd7PY5GiJ4BkbG6LQ7XEM8LzmQVazMjeTgUNn2RSjphn6xFniSAx9RrZ6THVzHky",
  "key26": "2FR7CKDGy6gK75c6JKk2LJw4fYqcpkai9bktVLGGE9wMGTzgaSbfi9XxYDiA6hKQjqYW2u8BBqbbpxTLQHCMhMjR"
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
