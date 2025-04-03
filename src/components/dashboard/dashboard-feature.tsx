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
    "aCbGGJTc6fbLcnMutnVYfE1dmzwjD1KX6tb3XbRRyK5MqrUSHTqprTApS42S24qttxTJhqP6ZCGvveYsdWeqUAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hC7bDKMzCKNZGWBH6SZtzVQAveNxgbxXbQDUf8My7tdmNzphKGQM1SczG5nX48eZgGmxfPoUSqf98A4X2D34irs",
  "key1": "FyWMNjbsWda2z6iu2AXjHQApqcMQPupLyTJYGrr4NWdnMgVGPsbZrodVUgrQsqGj5icVnkcnHpqDBXo8Dt8cJm7",
  "key2": "5U2DvFEVAfAQw8CXbtpBwfMoB25ZPz4kdwLhbsB8Gv6vt27msvJ6LMJrRcHXtSV78vC3YPqeoXVgFHEiErksSDcQ",
  "key3": "5xC5iHMUAvuFGi4jrsFCAovpyxN3YDGLEcd1xBXmrppazN3ZHoKCw1GdWhVHtE6rRpkHpNXYZ73xfu827DxsDnyv",
  "key4": "6yXGpfPkrazBaAQkvVFLKD7HiNyCnMTk5wKqBbHUtTRYvvkBejC6Dg99BMk8B5g6QxcuG2racWCuu88NuMD5Weo",
  "key5": "4BGXMrnXHxmAJRefCDpazcN88Rooko9Z2toTum4XoycmXN7JScUcEYVYGx9XNKd4Bvo18JiDqVCxPiYjawd1hNbN",
  "key6": "5dtx1uZTRbdcfbsNSLaSwSLarM2vRHFzv1Ht8UPDpvbC1Jku5cu2Lj3WsYKUGENy1k3q7bBQxqizhvqjAs9JDfmP",
  "key7": "2DGTiVwN3wtE7LtMZYtZCwppenoiQtj32TuMxP5KYjkKvWRcEXijtjSPUrdW18Lwbye6jbc6xarnaTNXWb9VfCm",
  "key8": "2BdaGcprNxXLsC2jTZDQo2B5CvJwRhfAmZNM259o4h3erzJawJZVvKJPahPjyNPR6uTJiCZdBTBq2WgS52kt4eXh",
  "key9": "hpT2pBcUNiWGmsxevtvHd9PkVBMQENUmRquMWdnDfbd4NSsMrGaWBduidaE5nb5umPMVufiBohtYHfH6AeFqEyx",
  "key10": "2KA78bcXwkocdt5UMMRAVporMXUZF7iUNTRPueNC2Ho6FJBSFwqRv5VaE4v9yYoXnuHiNAjSNzJz5tXVQMxhBu5H",
  "key11": "wi47F1yPdeYgzsQJWuiFacRYbcZknmKTugmvMQeSkmr3X7stPd6sX9jYpVYnkeF5n1gWUUzzdSFMFnJn6sjiHWE",
  "key12": "4eGMLEeEbEypwLtPSpgKA8iFkwydkx6W99WX6Hi7rEzDUkzbZURorj2jg4giV82T3k3gt8qiU1DeLr4vGeJaWSKm",
  "key13": "5HmbaoUq4HvyYZPn3mz46dVJDUw4J97B4GN59kAGVQHKeE4GQv4xabhXr17ZkAzJYHRmrA9G2DzKoft2YMGogejh",
  "key14": "SVC8tREXb4qQbUUB6dryuuvZDYkX7g4rYZpgMu7c2Sk9XJUzrjpJ6ZHuVWbc5m4qoBibidkEvAk9Tid3L54HReC",
  "key15": "5SfWRR193qovf4aLUs6rUbeu67YTW5LZH8493n2gNRKCgtP58AfhjdG7dzkHXJQcQ4C9WTznFzRLixNmWHynkfZ",
  "key16": "5YH1XEaag99rLySoiysomGHUbN6EzFooR4M45cBUzw7WVC2fGZznnBkBm4jsd9R4LAMZzmNRpeTuuhwtNQt4Ut2L",
  "key17": "peQbMkUbbbz25hEDtzVNLgBeg648PAgbon3hEoqdSsJvrWTDEB4LkTCMCSznSTLj9Pt1SM5vXPrsz9HVzrA7mz8",
  "key18": "24zU83Qwf3ECE3eNHrU9z2oWNBPPEu1bjHtpuUEZBcYEhaErK6u4VHrpsytUx1vimDoyUiTR3CZNK2SE98B2SLfY",
  "key19": "3sdJJuWHu4gMrkN7XSPzbMbdzVsdCZdKom1dWFtPj1SF1T9hUai45mqLS4qo35iFYdEGVP5djjksPYzYqDNMUTZC",
  "key20": "2nuym3kEjZKqiuNYNmWLVDjNrDATntE74cFTeZX9MDq5k3oJRR8FZetnZQQQhYBbFa8FUPHHiw65uhj8hPS8vva6",
  "key21": "3osxvkBFqr16UnAqTQ6TShnPdqDNVU6mXW5nA2K7ArGCiczBPg7QdhiXK4e2h2NAKgWSEjD8LLZgARDagna1Gewg",
  "key22": "Wwfq19SCARGrC4HDXZMdZqymaCZfCC46jp16PtZuLLVcnmzJTMiBT7TpaZQ4UFLS336jaoWEPJ864QJSwrbKTkb",
  "key23": "5FYMJtSMtyDQKEjG46LeQJdenL3VzqGUysfpwLnZGpEa6sufQNoagZzaAzQ6odfk1t7Dqin8mZyqARAuKERynx4q",
  "key24": "2boZZcJJhMqDTRa5FD91dHcUM5qqJdX2xmLxwLZvLGRkHEtYU6VtLWC2prrfwH1YqvUbBVdHpzrs3bwx2WqX2HQM",
  "key25": "3dBXcokE9nKfXWL9pPKHCFFZMtBXa4MuALXHSJ9S5u4vGfzZsBgn6nGRavKDuacxehRiNLbeJBTFzsnN79ChNLa6",
  "key26": "3he4qseh9RKHvUYSUGySJ7jjwEvKZjvEfZnbLZFDvfYYDwyjMNbh7dVykmdYfb2sugthNEGoZ97mkLTfyBHySS3u",
  "key27": "62ynASdWQ7tnVshdnQYzH5RZpB42sXEKb7Vx9SLy3mbAZqoPbsPW5PTSEXBFejBgf2oMz1jKp62hqbj6cmupZG4f",
  "key28": "PenjJbDk7FmWJa3z39vj1b3Vpjd6zgaLXYYVZQMBm4ZPCncSuF4ZzdEkbXnTA3ykbQ7BnNyy4QeYA1hBKJoi4n8",
  "key29": "bNLVW82jAC4coKH6A4i5hSDKoeXBVHHUwvdDmXKEzb6jj2g83GXAGbgtxUi5eBu49tjKNWdYxSNNbghMvyiRiYS",
  "key30": "51Dd9rohwCAW4gW5cBqmMEPL3n7Vt5qzoQTTToacyRKUNUdiZbRa78g43DGutD4Fjjgd3LM8mmPsercEXwWhQDio",
  "key31": "5ougE3yueEKqTLNKnAveRzwXj1hXjsE3yhge9HVucKU1xdyp6uduhKcCrYjqoLbi7FrhB1Bc23y11SApoX2K7NeD"
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
