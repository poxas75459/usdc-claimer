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
    "3KaNT31E1ewwT3STnzRip8VeWjbsFgeinoUKm8gDaPZikCQzFaqjXpY5tdsNxtVQd3zzCRn99UW3XnNNazUcK2p2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nFBXbTuXijYjcPxEQomaam75jc4wKon8E2mSaxp8EaCgjwMhByFzF269V5iMD7nmAqMeCqCsL4bLZYKwiHmVXzi",
  "key1": "67kg4bGtc7P1fod4c6aU4naWqSwHoqxRceReriqPfBfRWN7akifsQYfp2ts8wvGLrX3WhzotooRV7xCT3rTLs6LW",
  "key2": "swiU3ebe2ujmLiHX1Lv2dBRXGHCYjVS8hSekxf3jsRVgwdWXfwkHtqt5t26BUraDFJJ1uxGJ213euhRxkxUYkTv",
  "key3": "4MK6qw8dAiX8CTMjZoSXUsunsqf6uzcTrSZrq38jLUs8W1ahopjjuxDVKR4nWUjAPThmNwb3vHcDnW7TA82WFkc2",
  "key4": "9US1A3F5Qv41i4v7kcnVn1mbVRQpj6yT9fH1vWnHfMT7Sd9JcUQ4rDGuQTHzpLnsuVoAQQd1H1ynmek5Xzy2zn2",
  "key5": "53PZk7Wq3jTxiiTwHRFLzivedThED7zy3G7hJ2Ywzmb6WanEp2DUY5HorYmRgiutfgCe4tUgPn47Ui8r5svusyzB",
  "key6": "4nMjh9vc8CjzSh9VmUUwGd25Kx5k2r9fu8JHbWzqLGVSCM9rLkeGjdL2YgNxUbnai192VD7opbkZzPPk9UHxDKAW",
  "key7": "4F9PyJWFQ8B2pCKWDGaxmQtgNZYLcpkcfo5rbvbgPKhEfcqLJmssaeYGEdGp7vHDMXoiSZR6TDyg7ZbRRjB6B9Tr",
  "key8": "4fVizfkBou8Smgtt1DVSpFSHkd8XEwJZEb7e9iMnArdZKWwoBntPm5qZnXL3ZPqdKQzL3JbYQpmTe3bMF8jvRm9R",
  "key9": "3kCr8KBB3cjTDu3faNCPWVWrLDD6iDJZqXUHrG5TZmPiRcgzReSm3mqinSmjmpYfufE2uJQebV3xc3AhdChkH5rj",
  "key10": "tJBQwd8gFFsuWWs6cQnZUoUanViK5GbPnTQmx62Cdxaf8n2JUwVFaxKiehVBDXPG9NKdexr2Q6k2iwYJu7pzMEL",
  "key11": "4zbedK2wdsu6LNMYABP8NbZ2A9PtW63WVzhaAb5jfcEc8QqoG5u6fcEaWEmrK5Zixyoy5vZomcKAAxGvazuwHf8q",
  "key12": "5DxSvjCac2MMacPT8AvgZoCm9T1XzXtVPs4b5gP9qay6YN5JniCAJKWEN8YEFc7CW3g3brfpEpzZPXL1wJzbRJ5H",
  "key13": "2dEkGJvYdkxKeVHsQcZoLkGKuSuzm94oU5N7nX74k1A2L3ms19dUgZwSLJkDx4Kh2HdEKQS2Fm354gqqn54QqYGF",
  "key14": "4wMRHZfXdMTMMkVW4CgsP9QmRBhDog3PtzYfC35JM9FoWRhQRUns6BShBW9WgEa7JkSm7AaKHEjLAiAhzDhQYVGf",
  "key15": "36eVnSc82kidZNBAusxQamjwRw8uhnh4mhXvWHFYfpWXU8VLFPUT8iUnAxLu9F8NjR7oscJMNV3CSqpgUaUnh7Ub",
  "key16": "9EggxxQmteN9nfkvuniB17oqStxYDGc3vnWrMoVv1MHT12WBWTLnG5wkuQwGKV5KtLK99xBzAaGnPkWxQ4xJDA3",
  "key17": "3jXLzM41Y2LwFgKUjWUNsx8qz583i4nXqFQGEyik4bjNr5QrefqrHJKmWMha8akEw8ieRu8pWULXM8gmxHqLJFDU",
  "key18": "HFA9iLDMwom4ibw5E5jHe2vWxoSwxVUyUrMKVnL42qYo3xx2r5RrpLfg97ckgLXW6QoJBmhkKwVv7pPVj2Fe2mr",
  "key19": "5h8PS5GcWzdFJQuDqWgPuq2Ljjwm6eKRuEFwjnAf5KbNRrt1tdBkWXGqp5tQ3ae3mhUm5tm7KwFhxmEKpunfFue9",
  "key20": "5QE59wVdTQjMYiospYFhx3Z5oRzXDSCSo2ueix2qR57K1BbS5n3PzKvN45RVeocs7M3YZLZ6oMvDjxAwwZREjRi6",
  "key21": "56f1VbhbaPNoaJpzy1Cbb9w1MD8uCWJfg1QzCcgz2MMtZu4KTPStvKhJrCfCPUUCf17eMEgSoUhWj8LpKjuY7s5Y",
  "key22": "4CGMpzBtAedd5f7ceqCQcCaKL2pXPPRoLd3iRakNJEHp3WG6iGSEmmZuXPbfxEkUjgYAvj7ZsRZhcLG85aJiYhet",
  "key23": "JeByvNWvmxTSA8ACgvEAPuKboc3UPSsxuxSwb4aoVHDQYw4NpFA8LPCGxgBRXezPiTZmTwq64D8ntN3bvwjenr5",
  "key24": "24hq2sa62bDSPdNwDuVYkYhC2j1bjx1ttwaB3EvDn8RD3gbxE9BL8EHR8ffmCRT9wddL3dV9EuyEZZHBiAiMKZtS",
  "key25": "2E6AC4cYdBWn4tvenuEEwNXUAsGUXB7gYktzcTCLmb8V8h5uMdug5HoLLvkGyQZyVxsosAmHJoVTmgxWhNxKE87R",
  "key26": "51CB9SELWVv89DCMMCj1GwVPdVSfAkRwuT7JVW4SUmvxNxPdRSPcSAAuWvymSGPn9wnHuhePBzXjyZ6gfPjhF7Fg",
  "key27": "5tt6BiW9jaAvf3WZeKtdPyDfGKBgt9foLZ7utQpKkz7YRQBXAJesirzjMkaA1UTNybBtcjjdZTUsG1nuwdf4P8CD",
  "key28": "3FyVsQkrRBzG9sRAUWwPZELCJMQPthGGetK2SenzSMWP37ZVZyx9NJS2JfevUV9q3wRgJh5GKQVYpnd6XQTvD3Az",
  "key29": "namZioh9LpHo2apV4LLRDXA9FFENjGHYN3Mk7M2BKBCUfX4RewnCjE6ZguVRxFHF7uD4Cq3K8JVhqqvtGdH7Uco",
  "key30": "3nWVWxrJx1LMb4VEsyj2D7oAztg4PwJcb5PeAmnjgbXYnn7UN2rEx5jp9unMw8eHv5utwUfPdzT4t7fBMyn9g9kV"
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
