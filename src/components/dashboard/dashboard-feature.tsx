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
    "4ppsmKT166cNh7VhaAPcTZXASzLh4jpnrZokcJXDi4qSYUYXUiJsG6dc2d4tdd84CBD6BPVrDF37F4imDD4bJ8cC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hSogZwJDK3Yc3wnpSM7pEhtJgYywjGA9JXgxTuysSEdMGjWp6mVhVGjwRKX3QAUvUSv2ba9oYBEaiceTJsqMXCn",
  "key1": "5kSydMRcWaX4c5FQRJuKUVH2Z9TuQ4Am39dQiYDA24cLD31b5YM24T1kChLDTMzz2mWr1iZ7ofvFmMAEj58fjNZC",
  "key2": "4pxpx7DsJ1Hgg1oDAhXi3LMWx9JGRuNM4K1hjLLLWpM9cLVFMxvGCBLWEaY849J9K3vw1xWLjoCz3LQbV3UCmkx1",
  "key3": "3GSTrxeiWaPrb6nrouWQMKoxPG3N4LuKwt53xJCUuXBYUWDypgrgurTcrhUynzXTZ4CUpYCwUjLu85VeugXFdSML",
  "key4": "2tZc3Mb9cwWkbgcyZTuHejFUtg1qs5UoqDK9qUnc45chKHQDrCynbQwNJMXUg4ZAz9PrVBEznGELC6o33dbTspxx",
  "key5": "35hf5WZayiW44tG7bD42XSsxBFYJooPGZ45atiPsUEtr9bXfKfBC9jDtUw6ywqLtS17r8XiFbEiaphU8p4UetXMy",
  "key6": "49wcMvtyGp9bTohDJeiLGKufw1Bb9miXhkzMBz5whDwfdaN7aQnRQiKmrGyxjdhmKfSUF387ftj9hTi4yR32gnMi",
  "key7": "4snXjR4yss8DisSTv6gJfZuNWHvscXpMFsqdF7uYkrS6z9ZYuh2v4N6zFx1E4u7mcLNCJEzM3gJyRBmz4RbDk8DG",
  "key8": "5HaJXAGAKsDPSexF7XnG2dLHWdPCsvgcbPHTFBUTHKknaXvf7VbAgju87YmGKDg3BwuooAGHk7GuNGkU1FwLCiGG",
  "key9": "3euF4g19SsskLCvtfXApTNKaeWHK1hEcZZcPxq28rRj6mkatSwArTYd8ALKoVWdZuvxhqWDG8HVjsbw2Ygo1PuFU",
  "key10": "2WVuUvhQSZnEFSM3QBTdrHzMvfVEnZHucMBGDv1dULbrmArEu5hheztL4JKgcYjsMaSrkEs9N3cxG2j7Q1MW7yfj",
  "key11": "3d9e5nmv6RWbMbKRXjzgpwHoFyUcJajj2UmZxxYkfcW9MvVmjyYcugeAGpg4YpQRaSCKKV9xc7Y1KygcqEL4Dr5B",
  "key12": "xZhcdwrKMmbLjreLG4T3JSRjnWnfHJ6fhD4145fJMKBnfcPvajKihGcjkAKsMt1Dj5gbAPPqJ6YN72PAi1mM99Q",
  "key13": "3Xi7B3aQFca7r6C79vtLowjy6gC2PeaRer8FcvtPVC6ZYdPRTrJ88NGDHnm5r44dCVxBkpghchWrMH8UsoJZW5iA",
  "key14": "HF1qepTj8kgGmzAEp1VuhQCyUuV8ZwaPVfbhNcf8dDijwpnBYpDDLt8UPvBpoFmXK2uCRRqzWq51R1buSf1n6jv",
  "key15": "4M2RQ7qp4rHb2S3Qagdzf3TYedXm5g6f1wfDFnWLKkqXio4rRdcfCXLNGLS1xZynYEC5mJV5Y9gExTqb7YyxxNbE",
  "key16": "5joiEnqsyLymtmk9H5M7aEYuRAGT2WM3NbnpUAt4P39iYHCccvzFcbtXa3PjwiYrwWTczuVX98ocPHzoJnx5XsiN",
  "key17": "3i5G3Utn1wi9eSLbDeUdCTTLhQj9ECB7LxBuKbnYY5FzRhZUoAk1MCz965XuqttTpdNhYCTMyRoPhbSSf5N7Vx5h",
  "key18": "5JnfeuVkjX5qUUHABTjfmrsuiWhjim4vihf2jfGaco3rZbBHVDTbAgBgMYFpUykQcxerw1ReinWefXgj9ArHFdpd",
  "key19": "2fuHXfTRTxWufgJe6BQE5xKvHsjqKL9YWrDbLxoixVUEfqMUBx8dn4N3YutYt8afuHY5nnpWWiCziRexRDLLtS9x",
  "key20": "2b7yqbMYzERK6bMKBinhDBBWT5Fjxy5hhat56ZPebbSB8paiB8GC9yhkTsX6Kve1jfF3sJkupzhqFYbwyo7fuaxb",
  "key21": "3yAAcoNc9niBeZYgr7N3Dyh58Ut3EPAdCDuRTuaxUczPryLr4oSDzoRatvSd5BbEqjUzpMfoY8AGo9HtctAVfUUk",
  "key22": "vwxgc9nYDq6Xd7Mc3gW1ztCd8K4KfhFfQSQQs4dYMHC9sPaE9avvREp4hKDST6XHA9GKDSGDDxkQTvYhErCCHGx",
  "key23": "4pCxV6So8WqQc4U9ZpM5FmUW9jCR8RTZo2nRFHhgTjYzyUeSqX4aHnjZNxBeczmzEdn21zhmqQD7v1H5KseuFjrY",
  "key24": "5SZReZhmoRdjs8y1e8bAHBybnWAPp1vC1EFzHMDqwNuVuttEneEjww439mJqoN46Y6nzizcHMh2er2Zk37SMwGhr",
  "key25": "7u66fDAwM9vXPqARxc3HRn8YioE5Dx8BBN6C8RZR1j1A4sbszABbACBCWn8RbK748BTkBabtUtmjC23mdgTKY8m",
  "key26": "5mTBPkzcxBocSdTXJ5mJgnpV6Q1sMATbLG78BjDGDjeLWpfCJofRXidAQCua4hWrMg8FGiVt2NriF9hSRNbYAz62"
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
