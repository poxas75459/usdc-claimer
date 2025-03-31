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
    "cHtHUNKyLquMm87WmsXajdU2AHcX4SxWvnWaQy1KrgBzQE28rwRJNuXgHrbsufSUdmWkCmC4yi29dyJ2MXUan6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QdZ7ARfWzHB8Xi76aRauZ17NRS6UvdUFDWJG5zor3uNxFmkVxb8EzkSZKn8N9dVjyWcCzhfVA2YR89ArP4eDmzN",
  "key1": "59GdFCn7uShZ7i7bxiGaFsXpbXR42XdZf8VRh1jsQawUfkmLaiHExB4Fk1f4mpfE5W9UYHhiNEDoRe2gyDM6nB9q",
  "key2": "3x46eCrm42kGLDAMmgdCqFqoi4nZdPgm4FyBbEFhNSdkTMiqVPGxGJcx3rzmm2SUVRSktkRNcR3Rbwra8gLNPPb9",
  "key3": "4tTYbcojCXHMBRF64N9dD9DHHCQa9NhUNv88yPMGM2bPhPiMLEsaXQepkNCAWWReADfRSfSuWctCzMGkYuABFjJY",
  "key4": "5LiWzgTEtKVFmRkQWXfhUL1FU5yUVsSwbi3YVyLMr8kLm4nsQeBDdKrQE9HSW7cWX6EWjgLH7xRaBMgoqGp2g9gS",
  "key5": "HHXBxd2y1AGhKqBGPasea4eEmdfXt8vhNTswXBgUJN6rQpaX6AffwwncxRxERBVkFqaY1s9Po57iy2hNWVwBaQx",
  "key6": "3w8Hgoy7VBkNHkUJPX47CQhgo8ZXtxqBbYXRpDHcmq2atJuraV54RBmzpzWTXaex4fYV249ccB4aig8MqdWkzYFf",
  "key7": "5SbsXaQe8f36ibv4HJ1HY99LT9vpyvtFyM7fQkmY7qyY2NPPYXUyLNu9cZehAvQfxChJsDqWfazgndocgW3vpJRy",
  "key8": "126t8YKjFEpHXAsYYN3sSRaGhxQ24Co2St9Y9XXUQptSWRp5cPyCzrRNpGzBNWFYy2Jxa5Ha7VqkWrD8RNKFWzBL",
  "key9": "Tom6eApp9RFedNsKZMBcp63FB7pEHQSFm79925CC6k7pcW1JxZ5brCnXbs3c2C4QGZdw3JSGEDHLD2HzDhmapZ7",
  "key10": "5CiEjfezFgpEYK6x5uwcxS2jNtFUJRToPAoauHRg27897NHk6BDQwGWbSnPUgtSUJjAqiC1PXCnN5XjAPRzUcyCS",
  "key11": "3PJbR1RqkwJJzhkGtvYV7TQwo63vU3t4cmhrDvoQidZp8s7ZUn1qdJr9ZYeUGd1WMEftxkMHRpiJjiP3XfLq2PzC",
  "key12": "pbpFxuFeQU64FQyAWcEewc1TMNmyfoywNfrKZx8EroeWeNQt6bdqVwnvkHMvcEbHy111hbXM8iq1MAdquYvs4UY",
  "key13": "3iUiSGb2rhXNHu9uYMHvi4gXehedVbVQ4ckjCqnbWNJM8KjkQGjkX4fdoRYZ9rz5cTaJk9UeW3VPkgnon8GJNuJz",
  "key14": "2fXTGNtA1KZWzyyaQF8jwt1W9S4FJhViHpdBTYKAbZN8HxxSYbzodarE7k8SqqqaUwVw5UFkw5d7rQnKSMQAWJXj",
  "key15": "2D5sNQTUQDKN43iFnZ7RYQQPXRFUNy34G3ePVd9ZBw5hxtEdhYK4yoXjzbrmXZQxXs1vjvJsbJdv9kDxkcpJA84L",
  "key16": "4q1kGRvqyQuwWMjCV2T4GzYd2HsNijuJiFkuHZoWKoXWmMSPd7YCPNbfoXprSwZxAZaoySBMfRTYRLRDS9LwDKLb",
  "key17": "2nhvcMg4D1Kgu9UbgYMdvxD2hcgq1pSxFuU2Q2vy8KatThYvaP8KJAJbHYJe5PeEHDd5qyLoZygCV6B2q5Qqobmr",
  "key18": "5TshWumF7NgAbZBYsmtCV2hQaQFBBpbPf1mZt3KSMaR3tX4Vzw8nD4C2ALTJiX5XUDuqWSCQtXDgwahovPGacVao",
  "key19": "6eSPJagMndaKFyrUdoWVQkuraFWjyxVx2ao7KpW89YcsfKXFrvW5hA3nfB8CNKqmdNWNS3E3eo9mtREyN9AnLcu",
  "key20": "3C4vDNZKpPMKkTT5733eFUcdUtcQin9Qub9E6tEM8gcVLvSz8m63UrTR7H395p7QzFU3cETcES3CnAuXrgRLXVXG",
  "key21": "5G1uvnxqxoEtY8KS9Ju8N5SRrFVKf2xAGF8UdY9BNetVeNFiZ8R6nz4TdN9rPRK9kuFUGZpo4reF4PnFvfgA5cUY",
  "key22": "4hH6oP6QgQx8tyMFBJA57EGWdF7yDfTa3GYk9FMhELhguC4f5knin4U4UE5btFW39oWzxGAftJyMwhsM33zLtdwn",
  "key23": "3JhfcLasA1fFXWBhbP2PWvze3vtAfB5Sz3SVMN97TpWfWoW5S4jaPfN5GW5RrjVQXbQn1CiKSxyw1nwrGUFo1J1o",
  "key24": "43ebn6CVF67yxtsjFAxUjoa1wpVXgRPGNLfh1FJwcPHGKfFbqc3hBTVYJd8upPzKvZnR8x1JaJT8WR2vLXac8p2c",
  "key25": "2RqYdupKbaKSkbHVh6rYrVecMuaciGhh87EKrdqTGDs5jComGVtBM1pDtK55vjg5owuMBgMSDGFUaLhyQFgFeuQ1",
  "key26": "3KEvfxSsQ6WyzQdrXmEKQtgBwZp12YdcfEbUsj3Cvq2vKMPeTVLx6icck19Zy8f8HLtsg5uMFNZU576CFzbxMbZv",
  "key27": "4zoWXhUPbiMPJ4KkHqxReXRNCx9BBTYi6tr97dBq5X7cqrFY6VceuG4HUxBYwcbfm9YJ11J9qaFy3tRT43coLaUw",
  "key28": "53emLMYExgc2nwfb7JyKNQGfh9WQLeveRBuJEF6UnX9aVMPxzinGY41ChktbNUgfmkfiYpcEAXP4SDvT53wWmabY",
  "key29": "sK1b3PfrS5s7VpzQtW34uycRLA7CiDou4FMaeWpuS43LiimTAwTwr2xdZu1bG7PLG1zjqznozJzWq87RtZVNNFR",
  "key30": "3nrqYxfU8cUnpqNnaktUw7UhyWgB139LjzHTSP1UQFeCTbBgeyPboksCpuao8cisUULRbxxdRVMTJwXkuMaXhcsz"
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
