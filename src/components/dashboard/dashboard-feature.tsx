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
    "5WJaqKcnUZ4CyTRT8vhuucZrM3AoNoEixHZdRr72KHPokq94DDn3Pmoj4NqVL8Lm6bvtctpDrVycMouDjUrm53VB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sgvx6cN4GG93yhMoSqEjiX3j8HBdi7UgHDJ5eeC6n23w3EGXGaXZR9C8FUCgV9sqJVqEjmnn4Dvb4ETLoNXdJmt",
  "key1": "KJ9wewUYYtY311gSSQye6KZVMmNQrk9EcuDg9UMcqSGfqAx3q5n2QXfZFPXtUq1yw3omwuDqjr8FmQaGvxgzSCH",
  "key2": "55Lxpyqjycz6A4YMcipcucuB28EQyk2XBGqcefieB165iyNv5YcaqkjQ6EjsWw28XPhLTFtXgspMUs56WesHsG51",
  "key3": "4muAyrE5cPtoZFEgByeFz5nVz79SrXJzPP59bEUE8bFfXetc8xYtFCf7MJ19rybGXbNqdKK1bhLr9uT3HzQ57GT8",
  "key4": "3vSgwBVvoQJbGXceAWqqYxPVJ8xR3zkWQ6ArDAsWc8PQhEgXT51wfuf5qwqwuk7vB2ho1sExS1XV32TSKq2zQL1U",
  "key5": "4sZjN7MudhFCLdE97191YUkzJJ6qvB4gtJRBM1jFHP2VcfYkvzS3En8E6scTFNYANo2KnuMCBwowsNL7LpVzm4cJ",
  "key6": "j1ianysr6VyuUikrVq2gVi1gBvGZ6E3Tk7eTLjY9MCvzWfqM4EtSpfbaMMC2vQgqN47JqEenRRwEBN9X2dbonqV",
  "key7": "3ArC9Ht3PrU64RoomqQobYSFCMFdjhUqL3AzYLt9HWJb1mx1jqK7XaU8dSQy3oD6HqT3XLRNrWwxLk8X77XPsBcT",
  "key8": "4pHwdHtzn8cg99LjoVSmD3QDkhnp4PougjsjRbm5qj3KsVQW6pf5XGqbPrnKpjxc4ruW1w1D85bL9GnEUg7pNypH",
  "key9": "2QuE4w31xUzaQF9ouQmr7DR6iUhXrAjrJzxicCpwofgeKuc8uuvvzteqzjwrL2mMqB5GkuLd4AgfNX4XQVYF4kzX",
  "key10": "2KeqL2HMV5akMLjsnwxSQw3UGvAxRxNEqNvpafdZX9QyyixuSAcJi6DRim198nggve1BPdQexd8DUR2mTEBWEUdL",
  "key11": "VMq9wg85u9HHVWXvChzKc8tsxDJ5GqJmbBqccgcN219MjWgQQQ4E7YsYfX5WKqd5mCWC8VzMn5wpkKM8297FSx3",
  "key12": "xNwzGT8WeLao8SLsMgyQ7mcM3MkbXZfiHmAqEiRQNn7nZF6PCKdEv6LoR1m1pMFYqi97pi1s41KFZi9q4eQZXuz",
  "key13": "2eBuHbAjbPKERErQmihg3JFUoRUiLwosnWP7VFzM55YGu74zouQkvaj84QyXaKqZXbvoZkWGnMSDx67zGu5yZFrm",
  "key14": "5VDAN1f6ETNvEBUVScAapkbZHhPn4VJrKh263HiGVDo9gMSjRMUwq6axQtPxv6d8ARc2s7SM7TVdJuiW8n3T7LpX",
  "key15": "2XPsMJfk4eCcBZWH2L6SRpSqdasrsrAA15Gk6Umf4LJ6bxiz5mSvuuAY8GTAqEv8GSqvFuhZx9TaCMiH7n4T2TXA",
  "key16": "hJnriE6pUEHc8GGbHemAnbPzsQrvjySjXzb6Axa9qneynNPt3pHAP6pTDEzE9n6AC2EYQowM1w4WxSVC6tpYUZy",
  "key17": "54Z5fZcDASDPBq7EhCVpa2u7uaEzVYLSBuZDFkiiCgSTtRdvawDASmLykiUXWgpBCJE7HNXVbTHsannSVxvPEbXt",
  "key18": "4Pb7T9zGcUYogEnR7P3ErbBiv2wY1oGExctBMC4f99Kag6kEboR58MhRBr8aoP9mBepLy5acowf9Sn4XvVTSxU3Q",
  "key19": "55RF8SfWXVpueQaMWsExTuuYpRBQUJZ3ZLCkW4hv3dNKLfxAQ8oGPXMGv5mdGDmCyr9226HFVPezCcB1vCvyRW7",
  "key20": "5KYCE6mVXbSCxZmoDLav9kgCQCLRZPKXbRMWfqk8fSMDJUiMo6mgBUxxz7MTvv8AGPQTN3ogPBxUxwhqARLFKB6w",
  "key21": "2cwjL9zAh3hzEaTrWebg413TVwKNDxhq9SPPRFY9QL1FW38F2M3XVJdvwP9taX7HJFuEy8kW86HVY4TgbD9kGUb2",
  "key22": "4kxkdFz6HGuNWfMmemCPW2HLAJ5QbaQ2ZBywdAu6PF3GidtihFkuooJMP6Kkp7QRdVvHEb2kR8P3C1QDrYaFneqe",
  "key23": "35wM2EXxQZJChtHM8D68eczmi4RaJtXRQycWqqapP9ngFc5M2KXV9dxnBqUagK3miPXwD2c97Yno7VPY5saoTWSs",
  "key24": "3ceegqGGmKmifsYVqsH7qqi5Cea2VVkHeo2ADyk3cLhw4xKr9gsbTY8eSTo73pAx5thjUHXiySER4dcHeDG7zBVQ",
  "key25": "1rFkQo4TveqCTtmBEVKbhqcQSUPq3McaNheaaqfHL3SrDkqNe5uUYsrVfEesxgRfCQwQ5CmFRYxHTGmToAJqFvU",
  "key26": "22af78uvkp4ozLSq3KYRSNSkNHTqcG8VmzZmLqt2xq6fMJAh62NcUJ7ZEQHr5iBJ5fvhY9Bym2vR8s4siNVtNkhN",
  "key27": "Qdom97frcMCp4qtZJ6Mn41BDBf3TLe329qmtftPpB5rEmaF1gjMnB6i5uxPU7YD5GAJBryDzUXudK9BwLFsMmQr",
  "key28": "25sGi1xkLeuRLJHX2yq7CkWM26R1fMYDWC2f6tD9cp1fnkhMCYCyFmomYTaWDu7y6539EYHnW3qDk2BetDQbtunz",
  "key29": "5dhsiZnwhXN5yfDk2mzxmYWdG2yMFvMwfaAEKiVyJoAKQwZXzpPtFg9bZu4sYMq5oWYVuZpg4731LbdKv3FaadD8",
  "key30": "4eNVgEyv1As5s8TbzUumUsj6ceN2i6B6nRu3nc1jGpjJzgRWbHKwRN9fcxiX6UwyukBAbiJH17qE5sP4bMjKS61b",
  "key31": "3MXDRzEJ5rMKwg8MYPBqhdEGpRVwLBQt3N6hV7khcDwsgK1wFWUvDQFQDzjEPiFjytXBWM27GK7sg8aNGaSetBbe",
  "key32": "2xaESDiAEsjc96T2ug6ZLBpQDY1kZKsRhhZEsxD5SR7dbtR6Ch5x3uBD2dK3n17qVV4sNTPxXRjn1QppuyvJNjyX"
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
