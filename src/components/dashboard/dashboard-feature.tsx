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
    "21okHaSuyYKgdYZyEhhj9wNPKYsgio7BQYwX33UxSdPFVDGqegePBC1MPGV2gE8wXnqpvpZ2VgZ2btwoTu5D8RR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6HXwouTygdh8Q3ymr7jodNQHkPQ1wu3u3ExhtbkTxjqDkevgRXwzNzepcfZm45M1kqewcekLQCMLdQC5ETJ2hxP",
  "key1": "v7HH9jAU9kmaDn7A3wuQChn4K2ZmRz9QXwnZAfqMMJtn5efkwNqFjvVkGNh7YJmanNGzeE2A37mKrM4RiWSViGV",
  "key2": "4CPrYVWraBkaYBmiNF9tUvVGXsBWysxduB3HjyeG4MiN3dYW8c79R8QWgcjvzX3feshw6nqQ5NDwVM6xoJXZedSa",
  "key3": "F9e16FvWQgTVeUUJSCpG1bK6y6qpiDAzATkoPz5wsRp7RnHej8QdECJiNkXFYav7CC7ALmLcC17VVnuAQ8HfqdA",
  "key4": "xRg414VBiTnU2Prc2ufFHLDi8cxBAcnizkvdK6ZVv8HNj36PsRY9fN8MbLrLCQwpCFf5Va94Cny1ENjf6dDLuLB",
  "key5": "3kKD8ue9Yy22UH7u6cGHqj6Z7Skav8qXBz4yfxR72T9GqPficd9zHBiZhobUbf9b54etq95q5wrQ5YWdinaanPrP",
  "key6": "CUNUuoPLcbBny3JdqjVQ9wJrMtri6CJYjX1E4qb6cZUSehHTkorkdrwXg1K3fQCEUsH1w5xqEgvxtnC8R7P35Ug",
  "key7": "pgLNn1YXPZipa65KDfwKWqtYc3ZodZ7sNb52TFSwJoZWMDc36pfwGQuyMwEs9wwDouGBK29dSWcG1WibJZ7LP6w",
  "key8": "3dQt93M4UyqFQpjdFz1TMLvLbRnrsxB7ALuuKGzVLMGknuKGQDnkzFFVEcnA9dN1oS47aZacjf61dRebQFbqxfVk",
  "key9": "3ME9jQAZGPBknieyA9CBxCyvxFLiXV8wD3LTNcEXrDsxCqpC5EHBBeAL6wNPnW7jAGuGGT8156D3c9Q8joF1h2D8",
  "key10": "4Rw2pRBhdrM9mQxwsmrwp4XoiL25jqUANto41oQ4YYscV4nJCcc6ywsp7xgCscgqAXTaRG5f5PA6QCidbjkJMFon",
  "key11": "phtZiH2JNTFJpvvxzftVSR8SmokrAKm2QqhSG9WB6SDCXqpGMgVnbCtuqK2khujExZ33wXB5xEF7g3JyVnsHYT4",
  "key12": "218HzTrg8DBzg3aUyHzKeegFccGENxeaKp4tE3Xa4fTLVY1Eg9PptEvs6wr8oE1QiQeAdkmQnYLGp1o8WJZiABeW",
  "key13": "3oqsBerPfq5U4bwFEJTxofJthmEBTerydoPd7H7k7BvDNu1834xUcJDLg8UpLBxdExfutQDtMcyQovSmCz51aPGF",
  "key14": "65FVh4YBqSPSN3H9G42XsUxTG1Xi2reKYhNLAQ8aPU49agE1THWPntFbuKK7YGdu7pWump7AharCRGWN53opgoCn",
  "key15": "63uMJYsD1tgGF8Y2NYH36jTHDRnG1HphBZz6AGrxiAocEuNWw3cTEoA1nuxcD5hQ9tF5Lwzmi5pngpEtZRgjGjC1",
  "key16": "RTFCKT6LRnBTSJo2eopP4sGDX4PewpeCTD3uYVMssrkWFq6GKqB8ScKVKM9XkrYRE1P8iJEkMymqRZN6B9dad2W",
  "key17": "3peMKmx3CXSAyHffSpPmiPfVmme3JAq7428WumWxLftHmjAPwnS4rZJhokVEDrEadTgn9bdenUu5e5HUeQ96om4Z",
  "key18": "oLHEwLBNUyBnaCk5xzkZ6LYrJBbUXQpb18jMVYDCUMJwEv2P53Arcq1DBiC1hJBKApkcB4JeVZUtMj9z5QaUGcM",
  "key19": "3ZCxHNoYMnesX1LPBQ5awY5c9DnQfHcwWPeVMR81ijnEHZREJwKGbVm4cRe9YtFPQdYu7ce3U5gYv8BUu93ocMQp",
  "key20": "41Qf3oRkVWmy7ePdNv6E6F4dz1JYe1np9etWCdfKHbkY1sjJmyTwPkH5mVdY7YRhkAUMxVjmZN9Rqg5KGBksnE4z",
  "key21": "3fgpheJkDNYhpg9cKFoDH3T3hxnshZfCTdBryeo7Skg9yib1YVj4zUzv5N93SzrN2g91n8BWkftHog9EK9uFC2Qh",
  "key22": "33ETaEmJyNLuwCwpiz4ZeNU5kQvqLe1Uz22bynCpdmBBEndTN7Mrd7AXwCa2DXMbkVxtYwFnL2X9Ys4ZvwkpTTYd",
  "key23": "uPUo3gLA5RSrNPrSyf8eLAgyCxFtney9uNrZjgPuGwd8An5YeGbaaz5vpvGPfEnsRc4uf2FFA4oyhx1C3FTyBvr",
  "key24": "Yg3QcTUDDN4h6jBHQb5H8CPbKhb2ZZHKnBLDTtgFfdzWBetbLxvvinX53o2LLHqWRquwcdiSkGTG3FpWnUN376o",
  "key25": "6VUjXX6b4uWQUoYdwjcajCdE6yfeggX1by8wC5TZLtDUyvi5wLsyoTgiNP5bZ2FJPK7HeUQBs4ZxfiwHz7H3oaD",
  "key26": "4nB8gGk36BDadH8h7uPkkbD76Mwng9JivqFaKkYrCHTWCHJuVUxMtLZDcHTw1L6Jh5yoMtoCnd6xRHAWXAabmPx7",
  "key27": "4cofmR6QFkrSXiWPx5A8D9DaAmgic4EDdWE3FpXLrDZm78zzMNF1kbNoC5ef7UujSjtrdZNbA25249hXT1kAbnUm",
  "key28": "4pByE52tNZn6qJjmk4YCzx3xQ2bPVGPW7iUnY8gHjs4ACASWNN2J3UDMqNPz8DFqhNm7fxRdEqmMFEXYpJ9m1Lst",
  "key29": "5PQYmMTky9zM35ywE37MNTG5CyATQ7tkAv7W8HBPmQT4dfZ9jCixdXQvbSfsd6sjpWx5PuGGxk8pZPgxPPcQsgTA"
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
