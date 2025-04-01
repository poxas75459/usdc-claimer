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
    "3u2jtkD88WU3nSiXwWE6xWMPEhBWexbdzPhpJ6sQTsouSJBjhUfPiaCaCzUtGrbGTNWZszhvjd7442SQQ6QkoR9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55P9vhk8BwmvVo1zHt7gWNoFBAwpGqmLg6ERz1kJELhGtF66iZHjEpYi5BPBqtRQH59nfo93Cd2CA5hxYBNca7md",
  "key1": "miCxehgBYA2b4FUmWNuaKc9vtt3bo9x5TxHx1sZFZdHj5renx7gUSxqNmKpwgZtb3x2ktTzcJNWgkG6w7uEGGS4",
  "key2": "3NN55nGDk1yfLkMBK3usCHtUBffvezuZ8aPeUfp5CJG3tyFtUeZMLJj6YRPQqzMXGUGeGi3T4fdeii7Dbb5JDTvT",
  "key3": "25cpp8His13Rrqu8BFQUFht2j6DDn9iieEjmX9HXN4jdi4wbeQ4uEp1cpkcxaKBidXaiNF7WFoCrqzv9eS2WS6TL",
  "key4": "2QKPoxN25sfu6qUTKXQVFcwpLd4TwX8eCmU3XoH5tNo3fDspcjDSwij9q2Yivcy9SyVy5PYRGUxLVYFfHu87dGHY",
  "key5": "42zDDfLGx3DYkkrXTHbXHfetS7xxzHzwjjtAY6uqMDX1CQjgSnip2qGMun9MB98j9bGoJaxASsMm6yXerE9P9ZZE",
  "key6": "4GZ8Ck3xkHY4KvZmz6Z3cZ8cQyLcQsFqSkeSFwKS3BYGx6eNsfAprhqABCkpT3FBNXMYjh6Snvay7KiRDarpP62K",
  "key7": "2RGw9kn27QrMKzpwze1s68FkwX3tr2Pb8LCiwvLAoRX13wWyUPkcfDDQNNgSuFegobjnsJ7CXUfX5vTnCQar5i1Y",
  "key8": "4r12uA9BToh91NaETiaMiNCivs39v2ocWmDmnkQmbYwQhECtPcFR6BL3i5kaD2HdUP8hrzpyHsku8VLjkuPWnPyd",
  "key9": "4UpNLfsa8X6TsQApKZXns7P2gCHiuTc1XaKxKiYXyCf6LJgHHwYoVS8VCbYN6CEUfHXQFbRv39YdvuEGyqKxZ8RJ",
  "key10": "2q7bwKm2hXtft5NE3j6cgvCFzFn2TQ6WnYUaqym9ToGSgrm89VDk3CDnyQM4V25iLqxxpj5WvQvKzKS2J5h1JzES",
  "key11": "4DXKZLrzSaGMBLgSCBmf49EqAonJq9M3nyJhf8Wrjized36ngksdgSghAVvkdSUvdPCrokFVL7w4F4LNcssr6F8r",
  "key12": "3wG5SYck7WydSL9JCk9iHbq2MWazWfAUFw9Wo91k9jc33wTN1eG8nJghBcKooU2pa64aPSfvyqP7shdTWxKdbFsD",
  "key13": "22J4tJVFiLk1dZASjKmr7RRtPwh4EwSmYt426ktT9PJtXdh8SfLuBqBCBRJhroycpXAAk6WaKoq5u8UF1Mr2WA3y",
  "key14": "C5GNeq4bNNEVV7So4A4hQvhqomsG3c5q5kJqEBj2EXrXTpd6G64sLrswS3dzGGmvVXJ2PWYXq5ixd93QjoruZ5f",
  "key15": "5cqATuJb8ickoi35RvvRnTMQg8BxkARWh7M5niLFvLTKWWBjwFL6YSZ6bYokLGeBBsfZksup895fBz54dD3PGJJ",
  "key16": "2azLSuQUkukxfvoARM32HwPeM7K4zyFyo8v5xYaoRSYxW5yDXRj34gvSbQgErU6stXjwbigwffGa6hAteoSwM3Lo",
  "key17": "3qPYZWvHLoxrf2LpmUqEhZpHAh9Kfi9dgCeXTzVhGnt7cn3FJ4kxgoPSv8mseLZ5GniQMWsgqQr4CE33wLm9TxTS",
  "key18": "2hSoKwDPxTrjugac13Qsrqk1i6VU6bkFoeDFCWKMkDNkAvL6MTWKmVHAiXn5TzFzhUpYjCTUx1Td8f53nPaWyoD5",
  "key19": "2eeKVCAjWmyFqdF3AmhT9GETRUTCSrRPBkDg7fxNuvhDfe5eXtKoMzZoduEuzEfw1XGX2V9so1sMvPXejATPqb8r",
  "key20": "2dPtMPeQSjEbqgnJkWMuFQPCd9tVZ1W8cEyMHXbPsQGUoQWUiywLphMjBq1CcGCd553udcBaiWbqqAApTyjaEk71",
  "key21": "D9Fcgfc1DKGWQE5DA8g9urYdsB6NacNF7SuKpgmw5iNMaYUGpiFWXuvrqY1QyYHDVvQaueBmjbtgW9cjKr9nEjG",
  "key22": "5pXw2X6FLaKoeZCQjDv6bWX3qYvjdt7PsBfJ9NAJTNjqH18MVZDBVNwB3eSb8sZaugpsRDUCoC4zxHhumXgcPCmk",
  "key23": "34WPPg3nbgM768pVXJrUwdRpMZ4UvDtj1ta7CQhEKGS9k1p2YbbXJBgNx9RKYpMSahbFuuJm6iYu6nGyZYMSULxc",
  "key24": "2kpMBpMaAJ82i3JrkyKF1mxKacx4SfmzB3QNmtfWeL7NUBLCLKfwsuDSjPjakHnXUbFcGSrGGdikz7dH4WrPXtLW",
  "key25": "2YmCD2Lu5S8DEb6BgGeNg8dBkeNjWFNvkHB4CM67eSbu74S3bLG14QJzwq3R6FJD5Zhhng12TuqMbGCwF6MavHQA",
  "key26": "2ntgunkzXcLLwjuU2jcb5g2amcZkqSxdxEVbdk4zKUkVAnonHjJUSTKdvBPqwFdSeMUSiJq5BT1pJtKJ3u5FKEzC",
  "key27": "5mPxyo9hbj9YjVBoseKwHkCaugoqxMXsTtJQ5eKXvFy2VjGJ7vU6vU1F3HCTu4oXW2AoVvB5pSkQg8YwCwyneSS6",
  "key28": "uy2prefztdkSDh4p76RfZ48tnBEr2yhMZzu7jbatueT2TLAb6cJCwfLwyvucLL2sdCLr49V2VhbKBANDT5qQ95W"
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
