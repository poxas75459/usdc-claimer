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
    "5UJmF67HN7REvhUyfJNrrCgoHnCPZcR7wQ8PJVXfeWkzqcpauJcRwjW1G1tAF2A6yJ6Hoh3tPtEwJJ2cMdhfSbb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jeADkGr9YP7T8WGDAd9GVV1HJs2Yu1yKuN2XckeTxdQ5rXRq2pnnGyPSsQCDtdURF4RxpSV1wP8JrRsrWNUYC7N",
  "key1": "4zjD8VkDQgXKkJmmB91zLJe5feb8yzcM5SXNR5uuzheyWrQVCpeYeyKWrYwrmoPDCoKR6VL35v5j6izHDyStFZ8G",
  "key2": "v4c2raPiCm1XmDD3b7vkymQnmbqGtNda7repi5y76zzocnpgc6VWDcjfcmh5xu3Z47Ho1S37BCLxXjtkjG4NMCi",
  "key3": "2rDzd9mh9hh6CRH4upt5uDAQY7FSg9FyLDNxKpMUxeUcYoCMdq39h33vy6hqkscRoifYGJbpSXroKJW1Fw5bUuLQ",
  "key4": "4bBrjvZg77rfA6gu7Kio4md7AgPvwszi9do6rs8qVLCPvoj3KjtVA4Z487tf8ER9bWENrVsz75DoWurWZJYTtK5E",
  "key5": "5n4SEveA7Bz5hFMQ75DU4haDDPmBaoV9bHyjCy8ipdPBQe8b6q3KSU2XioFhkCu7vtTjmmgzmCVNP5R3wR2nLfAp",
  "key6": "2LnNWagNiRjgxgc71NQvK23f43w6tSWrrqbYZEA7yZeFGCrKNudWFHE5Ldu2dLQ6ij19kAYkNG62J4Efi5RGsB2h",
  "key7": "CGakmDSFPdmt2eKWtiWLWUqaWQWveBZeRFvYUdK9wCz1Zs6zkcXeBAL82XjtUkgLEzaJuddHJYaiCxee96mHeYC",
  "key8": "3eZBPHZQ9t38w7JQbA1VjaFCXLwn74WNhNfgNxFbia3dJYt8kQwYjnxxmiKKqqzVXRUwQDfmDZ9fuiPGN7mh9Bf9",
  "key9": "5PvKNTsuuLh2C15bdygMwyBGaxpBX2CbG5JcxUQboiyCoXQ4P6MWwx4NssTJy7nEwLiEzBedAmRRRYLceddbAVTq",
  "key10": "498c324etH91MTgJq6RSGN5GWM48NUrWbVPsCSEDCxVGhBvLKMbYts7Q3WLR2XuHdUbaYtFjkgWNsyQtTqonYa41",
  "key11": "mguY3srGpywDEuWAg5QsC434oL2LGaB46LmcPc9Li93bECRcWXWy87ABALFuvY1xBUpZspEEbLot7RXjxWvKfka",
  "key12": "3BwFAQwE1NRFmc65Jz16FA1eXouo8vGwGGGyF9bdXwUAwyPZP5vESuQCxX6QqAt4t8Yw64tcXXTDK2o7QTtjUXX9",
  "key13": "5WnDTpUun1wj83BWopXFiwsY118oYTqshUU4x5bBNzavMpG32hyLAYZeM6z2CaE4249iJ95zEkEb1r5g9LzZuLQw",
  "key14": "4LeeEuwCrtohk1Mx8mDSiY1yQUZj2LQ6ADEHJMVqcNorcnVZdyW8XaTvQLKRRroQwFa3hveXQF5BDSfeRfhgCjEo",
  "key15": "g5LJrE5NA5srC85KXGN5yvKMpBFuDur71MDtaymehSDmTgwgRwoxGRPRiA3kaTq3iqxERQWm7f4DCzx93WFqNaY",
  "key16": "4u7XvJkGCpVRcCtpfZuXecExUUcE7bt6wCwGdq6QFdP51AcY5EadKSoo6VwR5TKTvNnKBK551VzmbRatFdmcRq5",
  "key17": "53h8oFYker7Lsc2PUiG17KsmujtXMNR1UnwFJV1DhEa1zNv5qDsZ64Ws4cgfN9WaynPcYRKym7SxE6rHK9GAzSgS",
  "key18": "4Wi6QJ4UPCUBfb9cpaCwXpkcxVKoYsBKhJYxFFdDfPjQ92PWaQBt48nt9VvqrBYA5moL38hTNkCUTRmbNvh2Xjh4",
  "key19": "3MfurSobL4TWbRZZH2euXP9Wgq47iQdXXWFAE8ainurWVdpYscUFiQmnoUA7BgwyEvG1pAoK1jTq7npTCX56qmDm",
  "key20": "4WeN1ubxLoJXBJKpZrM5SazByC4mhfPh2HdkCy1KRsTpyM1WswiS7Y4Rj5UyScFRDUiyY2j1CW2xrShWHWug7TCf",
  "key21": "5cWfpfkmDR4M63AHZwysNRpAM1dRjsfnAq9iqt8eB3rYLEBdAsz2kwF97Eef9LcP3jYzRQK9Pfcjhva3JbsiCsKx",
  "key22": "3PqeRpevHyAb1Tm9NxoD771Ns4G99gcVwQGppRs63uRemyavTpmC4m6yVvr3WLfhTwEW8pJrTQfGLgu4d2jQdZRf",
  "key23": "sdjd55WbiKXbMqpss9h5UM6HDfriYmvv976zzVP5Hq21HuMDswDXGfuXZLmo35fU5qoQHNVHmnPdmbSUb5y86BE",
  "key24": "2spmtxAGqHzUhVBCzFv6riFTidZqJTnkDg79sgWE7iLuHn6mWjY7fxdnJoaUGRNgbz3PHGGnH2HY15nUqLcaeQs8"
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
