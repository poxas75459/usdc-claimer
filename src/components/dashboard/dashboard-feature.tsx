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
    "2mCWkipG8NR7keXq7J8m39VmBEpGTYYcZ6EhuaDzwsFmeej68obLuSbrd5S4SXCNVs8CJWXBUVfmbGjrTGo4d2B4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wdkhcDAkVGHRmZkWQkLgTF3dUutKfhx772fpgn3zXX1uRQpLmnGpQQpTAGV8FYKBBb2XtV9bBHyCuuXxxqE5BQp",
  "key1": "2jtCCVpRxui42Z4gJXCGhhTT1ykhXk8CACSinLLb5RpB7DxbAMS8szw8v29mK6YWHQGNUvctkHuV2iTSvK8bTJeB",
  "key2": "48Rs1qm2D9TiJK6cLde9z9Eb21Qg5KexFVqALvMkmsWn1ZE2qgoLBkABfDSVTWRkz6skYLCZJS4tSqxgM1J3WvsY",
  "key3": "S9zdXVitKAcN7XJVBAYvCsQa81s19ebPVXewanQAgNrSGn9PCg7WsPnA9xMvSpokZDZNhJTcGjeD218ArSZryg1",
  "key4": "giWSQzLEb8hyFMQ5hXsY2xxYm7SHynq3xA6F1CH5HSguDL58XvJiT1Sot5STYfGwe513UJ6mo1fNEfnZMHex9wM",
  "key5": "2BTCp53gvHam3EPSxDV7fSQPhoPyVC7HFxFQfKwsSCCA7EBUiHtprFXt827PXcN88sQRRpnGm26tQESUFyPBuSs1",
  "key6": "4S7pMuh7896fXjMiDCfqtLVMqQ4USMdSDAAmmJ53Q2Fp41B6AsknzCmN5WRUs59HwxnFpf8yePheTj7pAEjwjXa",
  "key7": "58BWkrABQgGBvDjcFv1samZtmJL3RxJExsguGAsS8n4KJhh2vPeEuxXixFNpqmUBUbANMuD3dYCNNp1LjRSRWrAr",
  "key8": "2KrY2XCWbCVF3LQY8p4LvAJtYHdjkEddv396n9bAxp2MUmyQPSQ2bBRQuHQmULsLLZWnBSVdLi8hWg891QoppEt2",
  "key9": "2LuDR17mQySzCzAUgySkufy1fDEDKVKdw8hNUv1f8i6rYj716PxWFhUY7m2EDkMPKzGRonYsjcjx44AhQosmjJZa",
  "key10": "3qgqGmFsRbbycbSDcRozyDEia96pVvHdwKheYeGxTMf8UNBjULqZWSAcuQwJjTLzyLwTFLQcLkrm9W9jvE96QQW9",
  "key11": "628sw6fK6ayX7kQGg6P3kHMopLzq7ysBa4YsqgLpdR8BdcRTJ8XQns8xJEKsBwjNPPgZy453HhFsHJLcan8cGVPR",
  "key12": "5Gw9M7LDsQX3oqekhWvfW6875huzk3xA6BAqAWwvqrPMukatZaHcmkc7iipb5veMJhFEFFGpe2XiYb9YmyYNa8W9",
  "key13": "29q7RRv3kFKbpKghNtjDzBua2eF8cvz2zY687s5KUgHeznEfUu2ogzeP9xNtkwCkVvT11mbkQ8k4ib2dQDonJCot",
  "key14": "4u4Yh4rdNy7ahXfpzcwoqj1gpp9EPpdzETpXutMPiVbJow7P5CokhSuyoLg2EbvaGEeanRVYvYrBuAgVTEST48jw",
  "key15": "2cdHCSzow3fBw146bCmZiGFx3KF1ApM7nquCh6ifR9EdRxUedCAVCaw6MAJGJjEbqRKi7CR8TdqDos7uqWY97L9k",
  "key16": "zs9Yj9JZ4NX1xfvAnvnFeqkyArpuAEZZAnaSArM246X5MnoGHaJZoP7tCePjYh9MQYPfJYywPhHSywZjpeoYyQR",
  "key17": "3dbps2d6eLvDfY7J5cJc59PzpyUoQgb5B5gF5asRDtciMMej1v1X8jQELuX7rSsq9wH2ktnFnPmbQtXms7bmxYpD",
  "key18": "27JzaQktX4oRVjBv6juNfHtKdgHRiUuQRa1ddaDs8H8qE3HaPbHyatx9Y1E9NpXk7LyYUJsH9gMNgkAt6MCmzhsu",
  "key19": "32xQkAxmZ9DmkRVsbWUKjK4znEY7dU97QgMt899GNk6ghhDmascXpzEvYLTaErk6mWQ9EBPR9gZDofUkTbFu19uM",
  "key20": "4vrZb4NzowGqpK5JLmk5NPLMVu8G62FhtYjpfe5YdkMYRaEN1kTvEGHDGYN1msTs1nbj4G8KVe2iWi7SxkX9tzZi",
  "key21": "3tvbKC8shargKbiyLC4ZnNCMsfTfshSVSbtEQHDSnM8XJfh17QTQeXHpbqjhzZVxXk91c6uXtFhf5cauoht9insu",
  "key22": "2CH7CaTgScrvXomRqGsMePuEhtYj1Mo6QxuJyXrBFPq8fYwzor3TxUGL6jtGVS2Zwo3C8CdNjmGreJ4gHtTV4QVB",
  "key23": "4qTjNEV4rQaYSCGzL7NSWcC9zFNQhVTptMhvHD23ZSVP5DAZwGnKNBWY6NjPXqHnK52FnUTnyW5RGtxyAuKYgegF",
  "key24": "4RxVMczRpFc1CcifWeS6HNBRtizFqA3qGQ37bkCPj58Ped2yYYGy9TTrUseaxgP73rrRXkbuedMuxoaU2AVUfhtF"
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
