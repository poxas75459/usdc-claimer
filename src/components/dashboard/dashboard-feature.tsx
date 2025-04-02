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
    "pzS9QbtvR8zazvEfvYcbr8rttHoBzRJwMKtMKVVjLtGTgnJj2cE4KHht2gu34PxG9pZompJsUoer9B8KDb829ZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BPQHCiPkiC344ZpLeykoMgc3DUg2D23T1wu6jjh4cPmWha95NJWQBHgoXrjGB5LerERYEJqFnN3yGd9kv4n6KX6",
  "key1": "5pwrL1bshchfMafcYR6pa7FjEJ9rmANBi8ExPirTdzM3DoRVYf1pCFxnBQ1fKGpih9AXHUcQDNJgW4CsNFqKDNb2",
  "key2": "5RbSYL21JPyoV46L3Uc9QacevmS5VVZu4vZjc8xvcwkCA5PF2Tu5GdTFhmo2G4LGkHjok2tMDqPmbqNp9SjMammr",
  "key3": "3Li6TMRemLtc5gnBJogdKoWSnMeNBExLyM2bTm9wCkTtg8uRNfD6VBnReDmvB1V4SGWk7HTHqf4tn8wGWL2xQLQr",
  "key4": "3cD9yp7JD724SZK3o9tZGFYK9icwDy73fC6Ze9MN5wokJA3RrGNyPsjGyZaB1P2nUjxZLDrybe6Bu4sDYSUEePpk",
  "key5": "5v48RM9ZTQR5QG92dxLcPYoLjCPTrcSNsEoSEWCYeDLfa6ZEMMtWAuxsYnV1CazKCMJnM127BYviNgrw3SwyKfZw",
  "key6": "2dgzvoXkC8UdndETkHMjpFafBkckf43fdTz7JcmTawEACGkoE4oQbqGRYYmfgQZzUSkeu85f2q2ZXeJ9hntAv7Yy",
  "key7": "23km8pZsBgC1ydnc1wPH2qDXrGzf8suDwhiSc5A22R5eRYjub8zncUmwDtmfGaJRDWFWtEBttoKa8aFYsTZ7rnAY",
  "key8": "4ieZ8GvdL6hqEwmxWpfVAubJtoLQeyw4Nj7Abn5YLTvqvEruxBuWMfiSqy9wktUSiS4SYZgo3d47U1Abv4uG1G2P",
  "key9": "CKyY4LkYMBs6MEmoKgXGcq8jd1iWzg3QyzJqGvG4G8x9djB1F2yN3uSNLR5toT7zu4HSBdYoaYS14b6cbxam7Em",
  "key10": "58h5NFmeyGw8cA5f4dLz7ADsJpSK4nCEhWq2KqJBR7J1WnYbrqrdjpUHRoaf4P7exzM7XZK2x7z9bLKgsQ4J5cYh",
  "key11": "x5S4WtRFaMQheDuogdjwbvPGFVHSjzCHFSxT6bG6LYaxvjaoon9NQatXJe6n58uv9YvSs4eUAshgSrUHoiXe4f3",
  "key12": "4Ra1EnC29oWqq5k6GUSKJcwauCWsYSJygia27NunvqkGQk5VpfW68UjYcj8BppaEbMDCLyWB98GhDH8FFToGrgNd",
  "key13": "5cqhi4HNQmqLxc4fhKQFngYDk7GznejwtaAFGTdkd8RrZqNz1gbJA1DPWnCQ2q8C8yZkkUnChhRN8JV57n1Ljeho",
  "key14": "3M3QnYTYt4Z7mHv3AX9HbRGDK8hCFT4y8zB31TsZYzfWfFpEwMkGqv4AyWmuuhck8tqBA7YRSshizyPik4ZimwAx",
  "key15": "tALwngYLJDRJLibmLLrNtNv8q7TAUSG8MvtY38ciVMHjWWMG2N6qM1NgNXoJ9rc5LHTffMTJtyMxfyJjudEbywc",
  "key16": "5nKSzyjV5RH95SDUYhENw99bxJA5czUSPZS4tcRtfJYjVz6YHeFREhfKfeGtTVhB2i5zxgFjGEsn9eHWV83aE3vA",
  "key17": "6YcyGu3UkPbhPchzACmYG4xX4TTiJXkCnPEH7bhpkC8dKvVMp7SuL5nLaNPGeMgaEEstoGm93VrqdNaCtJvctDn",
  "key18": "2MB2jdrGuP1H1YMfVgC3bhmMPWMproAompnHoMqxnKCowUvbxrmpDm7nrvjWwjdUscfZ5J7PB2DPC18ATFYAG9J3",
  "key19": "5fy8aKTkTFdgRw6EiU4GUowT2f5bn5mJ8Ch4EoRpFt37yVKZenxp2SAFk1EMakDXX5uajTmZcG6NkBMiagMX71Qt",
  "key20": "3DFnwjV1Pn1J5ZVcMLZvd3tQLTmBaiMuYubbqTwkTNCKzSYLfMTYk3JZGbNjYuGst9RGBDeQCnGTD564Mn1mZRUz",
  "key21": "3EzxViKe7xaBoPU9oTR8bK8QaMri5MxNDVPD5JjRXWQaRywiizVV4hktGS6KbcUXpEy5SaDzFhBnHPmDRAZ9YigH",
  "key22": "rmAR7AH3TRuS439DXYCJFrVT7zU5TcVJKnuQSfkhnnBmwFHX2My13d3hfPWosbCefbSK3x9arBoVGyc7LjFy6yk",
  "key23": "3nvcnrojfvoxExtoNC1mfiXn93McL9P6qo9vRkieiwnfgXCYoTqh9hJFcqdmHEwoH8RH5WwJ5AyxCYoj3gJpGXVt",
  "key24": "3RujYgfJT49SUVz294ULPT85M95q59EQTDwzArjCk4RrZw6adEEzv5FhAYADUwiRfvMAMxuxULotxRAM8RyDH7N8",
  "key25": "5BZdc49fJ6q6iK4wdMtZyksueSpihi1ze75thicoQGDyfum3YsCgFNZLo94MjZ5193rJzJBKEAq9o9vvZ3G2KJFy",
  "key26": "2f1vBdV39SZZc6Bx37pSuB8wuHpDr6wFurc7ABa5AkqVdUiNuwu8VqcXLp6hSn4HyDLfok27Vc8MQpaYumqVQuRE",
  "key27": "4MyseN7WE5Hj6Lq3LbXbZCepJa1SmSN7oFQHxhXWUDb1noT77VYvviwrzHvKDpW9ZuMxH7cmMoPGQTzQRpHj1rQK",
  "key28": "5mnRkcydw2mrTbVTr7WHSrmbFxtWXJR89GVtnhhLVmKcCUbp5bxShLdFHHiDPBzxnHpbuFvYxpfK5ioNCiX9EQrs",
  "key29": "5EG2T4zE43r5DDBM2P1HqE7voWBYzarwsAQczZ3WC92F7TWaBiGrDEVZsbUGEqCBcvFuQdxCqjpSrgkKcmdBWVt3",
  "key30": "5zgAj7EcdGmW61Phf8oB8YgWEdTxukBDkiMNpspXmZmqeaDMsmmb3iPv9agG2UMy5N7wrt24gHvydXuBbFUzr83M",
  "key31": "5WYNDytTnckMH2oVNoGKkyTWY34XKvnaQoWUHNXBL363Rmvgxw58fcbqCQVEGMtU3EMgm4h6ZtTNFeMczPodE3k4"
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
