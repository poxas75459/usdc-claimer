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
    "4KPN3fSN5JoM45LhVsVbjT8k8eGzkFTthJAPzxp3XywbWcFaWntmQdmDW6eQCw7rX4XL3Cso8rbtzq2X6iLHR6m2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ji3T66g7bvm7BAvq5WHj5ETPGR2cZ93JwZsrxzLZtC12JZtG7KHARELpRQstpqQeuCUuCPqgGHANbrG7f7Ur6P4",
  "key1": "va8HxGkhzbTzRWbVByHH98GZCcVmX7jBVfxFyQhhGujYRpcYqsug12Sp9GDtvFdJ5stkwDuXC34NUfNwniF1bRN",
  "key2": "4NGPRmgRs8RGkjrtT9miMHx877h9YUTzqncVoj7B2LT81DiLB93JuNFus3vKUzFKERMHruDrMEWTsZg4UvUnNmRG",
  "key3": "b1rANMURoqMjDuTwVQh3hHdnVJGXXChCFrAvU8DkWjhJEZeoHHwgtW1igcDdHnCS2HjAi3nBxabV9vs1vcK4PM1",
  "key4": "4vWTPkKKmxy2tKiEHyyMkwX76hA9uhFxARSA3ubvTg9wd3Gw6GovcCGs7qNDSQSCazWUTEN7V5MGJvuJLSmwmeey",
  "key5": "5QW859evAoQjyUVhn8mkExAp3VtviFausbEY9tLXmRkGKpbWyu3euTVHn7ChUtnKNeYH1yf688buzZH1mfsn9jSt",
  "key6": "2DnZwEqmwGq1YNfU3veQmYg3R1Dp6dhQ63s5aNAfB8f69qWiC1tW45H1nxGFrxyiN85KJgFvDG17tV81u5jEBaeD",
  "key7": "3xpsnzJvbyPGHcRSXJh8KYKwCPc9MtB1xntzzLoS2LbXApFXo7ardaaSjjbYaHG86sG4iNYY9x8YQXxWnpt7Np2X",
  "key8": "4phfVo5ah3umfg2Lv4mYTeA2zyw6JjAoHpN43Qsqm9F4EASzxkQJMhcKxpEPAe68kXaZpeE79WSpxthZAuZMpEk6",
  "key9": "4Mt5F9HbbR9A5msAoJMP9Ygyi9iqTi6ECHra1YubuyukHHdg7ZLf7M2y6EDviVDMRSLUFqzot6hJLigg1UUUZkRD",
  "key10": "3L1J2cJvccuG4NhHWr1HLXknzKXcwKr1DQpYrdQmRkreiA3TPWMxxYAVpsVm9fGwuU4FVm8t42W3ztZ7DL8YGPB6",
  "key11": "3Sn6wELLrkXVKgMX6V8u77T61Yz8z8tnSRP7H6JxdQwqC3aUdTfX8MJxkB9MKPSkLLN3c57cMVDuq3xYnd5ytPhT",
  "key12": "4WDrFB79yBSDAKJJmBPWqchETkTDePy6bLq9c8n5SJXGFezDDdQnBogcf4Zwtzq7WjN21FtjP9rHS2WDFhwTU3Z8",
  "key13": "4tfmRe1sMc7uyYRTG3d9b3kUDaAZkZN2FNGshjiL3Z2a3MYnGFdwJHS9Sxh4BqeNZhGyutPFDeFq2KseG6cyYzu1",
  "key14": "4gCoZEqdTW4bSye4mZd8RVdN4j4BatYjZi9sg1CtDSF8QQzguQZBVvkbM1tggDde3hG3eExeB7RRLT9JaCuKJADn",
  "key15": "5UtDZdV1KhXpXMWnwNQpgYwkXMv6h2kC1scuQq9yP2oEFH49ctpELHT5v9Ky6cf9DEQbQp77dzvt6DEf6rvRV33a",
  "key16": "41355si1YA2bVS9ToG2NiaNPE3aM35Y4RLNTeFmje6cjVrdgAp1juQuE8MwyjYecSiHAS5WBbT8XbhJHo3iXmHEq",
  "key17": "65TyotFg2eVxxScGJnbKsfkXZX8HDKquJYor5cDuZGChnSBWFMHG6qkSxGGm3cBw8UejYpuuxzWbQLjuVufGjnNq",
  "key18": "3YKHYsbDaZEgwSX9GaqFfLUshFmyGQ9wS2N9c3fTpswQ7XZbDHHbmJDeTQymz5vPD8erdZgzqSonxUYzbSaNU8eW",
  "key19": "2PXAN3fjzQW3w3D62LawjFofjE4TSZ5CAswJnqhDMY6nshjzFrABL42iYBe1Nyt64RYw3qEXjFbAWPnYMfjPZSs4",
  "key20": "5Ht15Q32EjdRLv4hzNQcxx7R7JptdcCqHcZLpGqoXFr5mJPwm4moSUYWLYNXzGosDnzp4nD1finWrUPV1Bb2jsTL",
  "key21": "3ZUbu3MnoWJPiaavjyXYoJKJ1UQMugXMbAfdhqKC3WgiVUt1Kb11cQGUA6gxszDVPqsppWDmrRcqjxcJiEU1zAUW",
  "key22": "2fJm73c8usqLzKVLVcifi4se9RPBsyTsGZN46UKMGkHzyQ4T9MffsNaqRwLcfZ1w7b8amFdUNe5ZkPaNnTqPDRCk",
  "key23": "4atR5fKvdsavoAkKfRLxi3ErtDtE2RWRmX7JJ6j3myaAErUkg3DeKAmDZwh9kfrwd2n7pJ2vSztoqe51ncMRchpU",
  "key24": "4XPyMvhX9Ct3Yjf17e9nTFKLKk5J3tymUTJFkXjAmbXKGP4QBDyZVZhCh5dCqNFpvDHiiBjyQQ78nxPALv1AtTDK",
  "key25": "2aidgjrk8ydjhGY8DuG4F7ztz4iujtiMQHszv5Q5UyK6Dgh9RkNAp1nfitopfQGssTKemwygTFw5iQ5TMXGVYmh8",
  "key26": "2d3XTKa7NCjLFBejaSH6Ba35an3m8kox2KyWRQaHQXJxVHwjR5QX5WPrAsGgjjvyNWBWT3tYgRdSC61dqr32wvkR",
  "key27": "29c8Sa8xi323FnDqPuUeGPrrhCijRzjNtTcohwopMrNAaYXWgnVyyHjnSFqMjif1zqtVW4uvQ7CTq7NK8Di9cThR",
  "key28": "3aDR6NwXQ9FqsrCzLmEPtpsGnkszFXuw2pmodPF2AGaok8UwYRG7WedUxTBAwXvDXHkz1jXoJ6wwzahqxp9MGwpb",
  "key29": "572TKaxyBY4WxaMEQww3Khr9xrMa92dv7wadcCwYz1wNQjedpJzKBQwQnsFYdoadhiGV4pJvQGr5RfTD6gpCDXCh",
  "key30": "8AERsJpsMhJ9q9U7yC2zRAiqZMuBb6eVYVuFLbbGGjBZA2Woz46eNEv5esv4z7Ur66XjGijVYkFjHmncqCg7CVx",
  "key31": "54Z8e2qV3ATeyYH6po3QYynPSnKWygMYwfUcoCTqBx6rt9BPTaS73peZghjhJGtu5Ww4rMgdRfbZ1t8Cz7eFUGay"
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
