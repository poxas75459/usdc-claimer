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
    "n8aCoMUiWkJgu1Ec1f8WmAqtER4jZjxFoMfvYcjNiGkmuz4nZtjd6NYcu3yBSmEsgCw8bow1CCeMFp49ZNPyTZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L6YFWTH3ZBRWbSvbrLwd8xr8TqZvQPFU4AMxSNC15aMfqJgcW6QYRYNpP3YFTALkFu8DK2LPF2QmmZfohLQ23wv",
  "key1": "5VprNvTFoz7sV8EXd3LWaGHzLd2XGhk8K86CUVzzThQ44YJ7N7CeG7ehjPv3iUQJFKafpNwyDuRYQXjTwbL3w7of",
  "key2": "cvT45QEjMSbPXwiF1Lcq61UQXBxpnsm9Prwf45LmqvS4n6aYzhkBG4buex5f6uPYdHjfZc2GauBb32aVjFsG1sf",
  "key3": "3EiMz1rJQAiNoJ8MwE68ARBqJv3t3wGS87H4Xtnj6wbGQiDJXyuYa7dhmLR54kstoo1nv68ARku6PkpVK5sTqqNb",
  "key4": "3nVW9bgJVYmvz6oAudVQzwtex67SYHugLwgTneCHLs9Erap6PTpsdrBaZvN5CFKPWchFpVbJdqZrTYLMNxCTWLUo",
  "key5": "24PUQRj1yteegAH6qUWKi9J1Sbg2Vt7VSuXwgqMjJx2nhsChvQowaF24222UjLkXtgR6QeoB2Nq6sRg6gf9iPA8U",
  "key6": "saoBfSDmqepC46EYjRJC3NSfubpPSuyTK6CAQQHM23QKhSgzUDRvPmsT29boSKtjR3imY3tfjZydoEABX3J5Hh9",
  "key7": "pqXURvznRQt7TdqKrYE4VSTBCiXpzDZrukdbXbJHvJB9vvVe5BXPowaxLzFE9KziHwj3juygTDbiWtn9ebGqzv7",
  "key8": "4Xzduuiy5tbf5jjomTZYJpYkfsAF1DTrP6ZMhUNU2nRKj5ZmwcoGvvHR6J3Qw2yNBpNfDHK6qBxmfs8GnD7RKeof",
  "key9": "3C1ByDTbtUg2LL4au9h7rwDWeaxFZoVTC4L5eKnttbdScRPgbKES6kVmpvV6qcd94VW8X7psLipVsJCvZabSNdqW",
  "key10": "44AbusngESXwMjaFjBYXbNkkT7B769oXuK8xjCPmq166Q1Xe7CUSnyemN2diwpF5bU2o9b7yJEQXBUon9J9TtKQr",
  "key11": "4MAUUMi3eGfjbeuLJzJpX5ufGuHcbGz1oevimY4D61n1VSEnRcKZFa8Sb4nXCTGSh7oy7PTdMkbDN82SJbJGQztv",
  "key12": "52LebfiPUYjHV1cyR64M1SYtKXz5Tggw2iMBNwfvbnbAgVdJUheLCbmwsBdMZZLq4r7pxZ8nFGxRtd22ZsytA3X1",
  "key13": "RZ9gKEMGLryK6ojpQTvEgSi7J6WkhtXSkVHFH48H2JHTZN48WRHQWGNqMqb9AfwCXyzi59yZiX8Q7XgYNiahkEv",
  "key14": "2qwSog8UTc4bKA9x3q8dvPkRWfRN2XoLUs7qffVcCPx5YPLx1sj4UyL5pSkPesLs3U6VxF3Z6ToCwsoa78gAjTjC",
  "key15": "22MLkKyZfchS55umVNmioaQLw1jTZEkRnqPi7egbbLWowunPR5ckQ8sAVd3mTo1qzaNRYAzgDGyheAi6rEoqcV5i",
  "key16": "KXrA2EnniE89n3bk7mC6jy8RAvK17HZr6jVYLUA4oB8ereMNKA7ABpGfRTwqYFamCgFLzGsSopNSJ7WmGBkm7ku",
  "key17": "5Um9UcwGtaFTNhdtB3hEKrFhBot9ccxSangkTge1iuNkjJAqdcgp8oJwbWX2L8K3EvGt5bu15EQ6dVFMNTtjgm7t",
  "key18": "5THsMfqgAkWYsmrWAFes5K7WwE2ZErR8wumjFL6g6z9EUXVbPNBcDaf91U2ZvvcTQjKjEHBc1cYvrJn9hyaLXY4C",
  "key19": "cUDnmrZyoZHyJdaf7bYFWLhqcoDxLcX2tA2ChjMz4XSsVT5sc6x2ocUes2uL3juvec24pgb8v83dMAYvydMTChX",
  "key20": "4gEnLq5ecJqx1DxKscyGhZxRFzdYKHKkJcoWcodZP96cQCzAujbbphY9v2U1xXpbHZjhJ6gD5zWmu6cNKm7vbdWV",
  "key21": "2S7saaHds8VQMwiQrLUQYRSoyYymVrvadsKjV5JipXR4mm45iYY4rT3k8FWcqhpaGhdVQhcBrkrfTAmrsT3Y18jG",
  "key22": "4DBGHLv4uZu6JK8dQbEvghrrYYzozg4ogqWJfeSvuhHezmB2pF8ewbc4pJyuZLwDjaqzXteHVwMwpSNCwqjTSHVT",
  "key23": "2dEMTx3KzTkF4jMqkUoXHFaqeGW3ZUe8CEcXfAbLDPZcG2uVEMUDhVLGzCD6D4odTpCyk3dmveXjiZdmJRdW4F5i",
  "key24": "5jmHNcyAoqJXvT8JuSXTeZKNsPebVML22n5UQoKukcPpysWeG4jnomxsU78zcXL85nnG9tTVv5XtvnnkQzBKNi75",
  "key25": "5pVLmf6pW6zsvkWJozy91YQNLwTR6SYjh5P7DSgyJeQaH9mCnwDc7HKs9UZi5p4y9tK5xMesB9dECqQd8VBTpypF",
  "key26": "juu1uFu6iHjS7KcFfBkiTdF3v7NLUvsoCMbnavq8XGj6bWeZCDoxbcW7hZBiy7GDHneXEVBPVZsVcbRYH83WRL3",
  "key27": "25hEX8zEamKZZr3eT4ko5PsTC7tmpj5mHe4k6DXn9Vmh9zgkknc6RccRMonK8Lim8UMEaJv6ZkTe3FiSyS8HSU6L",
  "key28": "3hGQ1xKbgxMucgHfHLWkBsm6v2B71KDdutRBWTdG6qtBT2CZmdTHkjWTwCJUTAVAAZEhrgbywuqhAfn5Y5yVFsye"
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
