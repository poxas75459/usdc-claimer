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
    "4jdwhskBihdfpkuFCXN2oRWUnUZzGUjzroQNe7u5PsRzzVoabjcHVHGTfHLFRuRQNQZzPpnHXNsm7twNjWgc9H18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fzCxej1vH5JB7JratFJAXezJ6LJSSpZ5Fzp8rbjSUxyGsaPWZCLbGEMd3mHMugFGyU177E49NTSS3MbZ7V3AkSC",
  "key1": "4cYDYsCPqyxepRm3FQutarqAcFkTFZt9RMnsgDBQxFMEbLWpBeBn3q6HUoD2nzudxk5xxUBPdqVswT37gTPs6RVb",
  "key2": "ZSZDs73PGK95kXMqaFRU2bvr3MEbynbqJyX64xafL1VZtA9cmw3ppBqFPcxCdYcHdTW3TawbcEDfh7tzmEte1Bu",
  "key3": "KwsgcJGUrrJ73DCWZs3NTc7o6S5KJ7NLxgSgPjxZSY2Ywo61LgtfejF3sw7rfGQVVA5L2SekSqX89ckCaQTD4YK",
  "key4": "2RXhTQgeJQgNS61pYZwYRGfSpwuPKDgq6GXnWbxihXHg8m5TgMfkDeGAuyU8G2CwuTmZQaP1LGfno6rbvF1jJGCo",
  "key5": "5gEtMG3QaUkirLGFkwH9hGa97T9SbfpaX7NMmrYhy1CwxnCFm4LbA1ngiswDfc9oeZDXqyWo1So1kagGKCZVoLzF",
  "key6": "4gcqKg3Q7SuQWREfhJkqo69B2PXKPVQVAdqLVqLyxDXKJH97eUnb33BDMPxJJzfSdUn5NPBPEdAXngiQmPG84jxF",
  "key7": "PizqA7fDL123UBnEvEz4rCqK8w4qp1nx3pNZAoHJm7GprRdqQpiVC1TGWkNyxbSBX4VU7KYWvpcLk2SSm776w19",
  "key8": "59HN2fjvEcjoQt8UR2691upmdWQvX6JLDHpg9Cc1jtou3LxgSEgpCdFHHTfDCd6ENZkzVYX2igLNqJsSwr5Jz7Tr",
  "key9": "5YgBuE5SVeEAaBaS6ePC4763wdewDLZP45DHr3HXcMdMby9MLHPqH4BYXjNiSkEKUdBHnuxuiunX3ySafyqMpv6t",
  "key10": "49dpRTLipnU5sf5zJo7xBHfCj2Q1AzHvUKKB8Q8zjHf8aU6Nfhs3RxDf6aBa3rWeVkgyEPzxqJctMgH4sV6gRjX2",
  "key11": "2cb6UKgawPd6Dzd24D85EQJzGkC7czELDaiEgYsqxpggxjVoW1xLFHn6T4foK2Pyz4G2hRUxFDsxV2rwto8Ni8HA",
  "key12": "aZ52pW6FJr7CFoVjiM8V6qKyhBB4tV8t8HCUuGALerxRT63kUmtbBXJdegnD9q6tadaX32bjZt2XZYRTgr6qaHr",
  "key13": "4RCnrwHmJQWi7VhNHY3xXDUSwHkr8VNS5eHaN9nYxPCaKBaaSxQDoBQxGuF1tk9hWfKgcm2DCjHJSyzNZLSJcfUq",
  "key14": "44QSZtKcbyUSH9fV4286GbXRoTNFN7NxijqmKkR8HdFeiZ5N2A2NzUTcCW6aZq3GdT2iGdwPHp62XZ8LBZP8Zv6c",
  "key15": "4uMuzEikVLBoo4LXzFWU93i9pbG7eC7fYALFEWHkVabvfQQVCvsnByAsDwheFrUZNfxhcGdJVJmdRK16mZTyq6xc",
  "key16": "63cUp9ZEdpj2CEE39yKBPpv4dFX4MdptZN4q2GFT9pCAjF7Fk7HcpRNQNbAwT5aJvCC5bvfbCcfv2fQRa6hesfyD",
  "key17": "4Ega86SfKHxGUwXuPeRnYW5CenS4arppVGLXrJWWxmjPE7KYKFPuMh7VqoZy17GNNvMyfvAhsec5cX21ec3afwU5",
  "key18": "oEezwFXKs7W8wLXiHku9UAHxkE65pqodXgEnYondtyWn3XkTnCbL2y9MdntiazezSWjvhmU1KuCThzkLTzjjyjj",
  "key19": "3TKJxsbT9UDKV1CVRC3NoVCPXQkcsdfvHxpUrF3zZFELCtPNZcSJdxDHGhteBBPcNrVTztg5mWT5ZZVBxGfK2R1E",
  "key20": "55DwmjiVnezQ7S3qoaeDEkLSZWSLJ8nprFaAiNoi21yjoc2SR4kgwGzjWvWRjxZ2QQvYGuaMfv5RrTq48c5itiAx",
  "key21": "3gm9Z5BqCnneRPLTJcNMq3caVkKyHXKivW98RNa4oqn2nPXTwLjYuT8fobVxGRJQrmiEkqr1wdupFEaek6ssaXMY",
  "key22": "2cE33a7E7uwbLFcv3RDuQ9JGnZxXkMXQs2rYeYJAdr44fHS8q7rGBtyCa5Sma58vaAdeCBCLrhNJjvcvVjaNHrAd",
  "key23": "4vgrwAvG9HL5q56TC9AJty2HNzTFgoU1E8mcs5M6uUhUGNogGpa6eXkCuteF4hG4ysUxvYGgMwCoZntCL4vnChgm",
  "key24": "6oFMLsZhoZZmasjb3CCevSrB6eWe6zeHm6okBduoBXaRzq3rdce5GcpvTVufQPd7YJMF8vBwrCbtDDZ9WKKFFB7",
  "key25": "44wmsH82aPa2c5MaJzGT6fio9b4nksRFR4EaafivgzyjPPDAiVcw5SfhVkRvWH4oAg88kqMFAVpXwVQcFWTsrBtK",
  "key26": "4ThrgduBBBwbbeKsyDKivLTBY6naqutZKYXjekntFgQ4XYeUXZ5QsG4qz7yKqJSpwHguMF1PoA9MYENiYWQ3hSh8"
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
