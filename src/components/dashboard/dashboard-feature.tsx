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
    "prsRKaCUbNsvLm5MxFZDFpk9Z4qPKb82i5rHKevrQe3qTGHXQNiYFMNDsKumFtMG2pT233pTbRTWYQnVxKq2D58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pNcRdo3ba37d7N5Q6P8PydzsgGBDKboWJGf78qaF6Mu7k13fo3HWytHSgoLTT9BXwFAP9W5M8dpDTsDHNt7kG9U",
  "key1": "5crx4LETRMHeHHmGGo7di5tv7aM9b8DkL7nU1FTxnk4iYMNH45D8m3TyACMJBt87sfA3yafYyegMaf21tS1p19vC",
  "key2": "4eSGJvG2sCDqbMbJt2w9qoAo5fhg8WzH3qQ9K1fbQY3prLdqBuxUhUovQpHEhrmfYyWqXFb1BTJqq8iB3Q7vpjpi",
  "key3": "JJbGzDsTHgoCzFmLST3aatgemGkvB2rVkm1AFnBeWjj4yHnFcsBk5VfFn5vTRHq5vsx5tYfge5SMBSUQW6KQJ9q",
  "key4": "4EHHqAPXiNV9JY46qsYNHRa3ibzZTQeHQZLpcmqZsDohcK8nY6e3ebvNm5cFwX2S3q87yZbK3L53HNc1WwLR6jtW",
  "key5": "3q9MLSFeWgJvPB3KGNUcZFUF1nJkDNcGk3LZe2NcUEVaS3c7JGCnSJ49Mgzu4DjDpK65WcM29WkSan3SxqfA5N6N",
  "key6": "4VmENsv4NLxCfkcWghLTGQAQ6Gn8DNC1W3FWz8YByATMwua9oe9LctKozFAmwZo4KbmR7JgnqyFqfRMFmtT7i3BM",
  "key7": "4qdbYFxrNgYcNgwTj42W3vhjv9JwmSyfcasBMgMokaWuhfJNNpZUBdGf1PSW93wpsYtjNsFay9gEgqjhabyHbVEw",
  "key8": "3hvj6SXi4fY5VQJCh1hTHdUFu53pein336B2KPbWDzqG4td2mBirtXUVxR1q8WavTsZJ6kVpTGQTREPcf7ytCtqE",
  "key9": "5RY3xKNwnVEEanMQTJ8LkN9ToqiYDVmmA4g919neZhhLo7nMjR2WopsvNvjuE2i6mRuh8iEVNcXZTx3LLTa7m8ef",
  "key10": "2y1hsu9HyraEnC8wF8vsBjkMn73HpD1a6B3yaS7yDzCM8Ats9MQ1DwKCyjDoJh81Hei5r9oCAXnhEmrkgpCmRdhP",
  "key11": "53XqUPv3gEDCsGAWanJFs5fsny7k5qtcqDS5Bm8M5dva6x5xKkR8GzzCzhhPgDtFiHuQ6CHAuzRMpRKR8fJHq9S",
  "key12": "PVZiyFeHwgpWmc5ckphZm9gY7CixuNqrC9FcpxZWK9efHmiexBigL9B4azr3zBLQXxJaCv85wGRUq8sN9tVbbBa",
  "key13": "2BBwkB5MnE2rnD4Dyea1wzEJCu6WuzNPXBo7BjUosNNP9Bh7SPz6aAaKPm1jqtQDXpmxgjgCuJ1YeXCV6WCNDyZE",
  "key14": "3Hu4hpe37t7ofCQGPiWBmpyoEfSTWuxN5XtDrY3F9fCH7TJoKj8mHiMwknqqDsfMi9622avqt9To4ZWgRk5Lkypa",
  "key15": "3YK2cQ8edW9J3q6gtg8xU4mEusLWLpgndzTTwcehsoduVyx5fX3NrNp2BLeneeXoa9ySaVbHf8d9Ffq9pa9Koivq",
  "key16": "2gBxS9c6CkGpmQQjgqCeUx89zDS9g881X9sgbiT2xG91Gu1XsfybGqk3Lnt9crnA5cbWs26vK4MY4eorcqyeRzp2",
  "key17": "34HincVqiAMiD4UDpDutqUePoeKwHKVBsLsU9k7Esdg5iDUa814gNLwjyAotYE9onAR8pD1suwgG6vW7JkeWRi81",
  "key18": "56drweM5ndzYvC4nMg1hZK9f9i47cTNh45zHkag4qpVAUcfPzgtx3px3BatMKdWtEpquxryxLrzeDK8xC9zyyCdd",
  "key19": "53rvJ2U96GYtRXZign5VYJ8MFT2GfH35PmmQWF9iBq4dZoeGcTXYZ2eZhMWKjtFYDJyc37JXvUf9WEgceFuzTc3J",
  "key20": "3b3My4dinmU1S3szWSVxymFaNTRUKQF2Xh3o2y77PzFbvnyaPSn9MaaVFhDJcBoub6LRtkwxigLzzsQAyQysqdTr",
  "key21": "bFdNfttvF87jomkrRsaKfUXB1oTv8LBzi8aLfyoVRQh9pEMeSe4J9JgziAoDHXmAryDoS5QDjN6RJ7RiM13xsAE",
  "key22": "3v1tTVzKZmK79Y7NmCC5ymizXNMSKE8nYgMpb5kVySv4cyXRPGRV4o1TuZGDx8xwz7BKwsNRLQdjLZB97n51f62S",
  "key23": "4gBRpEKDzkQcroDPipZ6PQqZQmXoG2dsZfUa2MtpmmmwWnnvGRY1PCwWYd4qmuHhyQr7fHh3tczffiLVfYWpuK5p",
  "key24": "3dfALGwzLeioKCHPdY1Yuy7mjjqwEMd2aFwYcUc5ddtZpi5EtASeZ6qugW65KMouBjyaNYPQJmpgQRxTU4rhMVbV",
  "key25": "29oH3FKiJHiCyubDpCByTg1JaP7Uz1wRJg64dfKbGGhiiqiAXTPkjk7uZmFsNqnXarZby9AEe3JV4V9W9jqdDb7f",
  "key26": "2tZyE4jo7bQwAJDsn6AmDfbi3pfixzAcyTXU8zrPHRQTs6myoniQWZqKXp8SsW97FEAQ9vnQ2yPsRQ7Gx92g2UoP"
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
