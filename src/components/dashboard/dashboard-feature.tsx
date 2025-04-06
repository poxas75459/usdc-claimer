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
    "2NMabBVPf4yc6ewUFYS7RC7EEDWLgeLXUuHrUMnHA1qyF9yqMX6FgL5oANGC2tbS74MhYpxyiDTUo6BKwao8WqsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qn1HQ6TUWEapruQ6uafGTrYcgtGpLb2B9J564rSQRT7Pcdb8qj99pvz8GN9exW5PzFY9WwFiQzb5SDmH7hBb229",
  "key1": "3uUkB8xZLD397CmdM94h4HkfbRm2fhzi1dqEDXfLuM52joH7agmFMo82pYm8B7LJSNBwjjuhsrYb1Rhz7XabVw3a",
  "key2": "42Xyvzyf4kiAXYSzikN3TMqee3ZPpw8E8xGECEBSLPAwTHi8wWYF6DtWJB9bPeuvF2i1waYWQjuC2VmhzdS81u6M",
  "key3": "2Av3v62sBhfDDKqk6FameUsDiFHqehn5dd2h2ZPU7CdxNJyt2bZjGKkJcszzL7eUKSDEAsrB9pyijfQavAYQ9Zui",
  "key4": "4GNy8N8AxSaEKUAZHL1KARJSpfU2kyef4Xv3V7dxbaNUxwJbRgEVsyzCrkVVGtLUosdtk25YZWfowr7JgZH96VbY",
  "key5": "2HtdMXHZmAnr4aRYBUYswDhA6USC5dykcayYSXQqRgZh1tbNDikNTQcknvSTX9oFHCiX3PTFzbbxWkLVQg2MAJ1U",
  "key6": "2rL9HedGWHfr8jUxMxxvT9wAfqVGYjSU5TDkqis94d65XcTDREQHq1YeESq8umKitrxWDVdGrN6DAu4nypAWbbYS",
  "key7": "BVGKuJAPVviT4KT2EFhgxLHroTscJ8DjPc9U9E4hnqGTXiiczuoPhEvEFhYHktr4v39dLfWPFhzsdaW6J1GD7bS",
  "key8": "egtnPQd7ddDBWoyRFJHbFKu7sM3CWbaf61v4wLsMekSSv5h6moaQLpDsFZ3sjF3y3NDEzWfQzsvPvb5CK9y3YfU",
  "key9": "2ssiykxFCnjxmZMLCozkrvyuRTXqBRjtR91Xgdb6s9LWhRXeCdnJWfNXqQmH46MzjvmNdwsZMy3q9oDREUYs1rS8",
  "key10": "21tKWMwGh3TPZrUFTQHmQjCXzfsDNnGp65JRqwccapcLqH8omVkht2PMNN9oe4SvN3MUtyvxapGGK6QRBCBFtwJK",
  "key11": "2pi5c217G1njDp4gotWToWU2zRHpLfp2FChRSaxZ3sH8Vq9sJDpZcSEjxqJt1AdDS2R6ygkbSX2JbhwsPHiyptzH",
  "key12": "48dzzjtWSiFYJxe4xH1bgguoJhoZG7gwMqA1evdTQqeT2WsugN7MsbURoQE1SADWLT5gRLnM4ekxonAhMPmao4kG",
  "key13": "5pMhSGrvReXmGeisrfALg4BAEJWTNhZ8TdGtqFeAn3MtHCxJTZhTbWRdxq7yD6ciL9fM6i832jjxXhFx3nv7HwLm",
  "key14": "5WoSXk3yJhWnYxCXs9QaDHbheeKqHVyrrv3XXX6L9nyqT83sQRrufDHBEk82cWowHrgfAya4F316YY5D1Z2GN8gp",
  "key15": "4V5uMnSX2Smfm17HBM9kQZ6DxSyoQAoTmE3zueshCQDTuSVNLXE6Dr8eRnY4gq1XBttLV6QDUfzVNfgCiMpnvZ91",
  "key16": "4LAU3ZMVnomRumPHckLeYKt8ExNTep6TT6ffNKmckqtFbrKW8cjd3k9xyMih3o287r1Zz3HK1PBAJ7TgjxjkS9j9",
  "key17": "rNcBHaeMQdHx3WrD1rFpdFM1WWVF3vii8qhPG4y4DBNJ9wZmYK2vam37DnMANXdhtZRVRBQiznZusLRRg5gU1ZG",
  "key18": "5UqFZp1i7Dmc3RZHxTRZZrdqNnU4bcAoaG92gn5agB3LEyd4GAmLx3TypiXhGdYJKVCw4ZSXkaazP4WgvubtZMNe",
  "key19": "41dEL66u1PVASkA6jyLkMPCgXRQJ67jXad8EtB3T8uH49wsTWKduWa1SsfDxjA9z3634Qdzi5vZiepkExD1yL2ii",
  "key20": "3HG9SLfRqEQi9CFg8NQqeyQYQ7pUcGkeryyt82TkzHfnjmZDo8svy66HmwvJ9caU7fixfBr8PrRn2aHvNj3naiZY",
  "key21": "4AQaRcBQvuJ5dsZqwurv57AVCmUwC24JHBe4xHDeKoaSYp2XAiEumUUK8PzwiUUraM5dtTWJ7yqSeshWqqEkY61A",
  "key22": "57WeajtedTfZfHhuhfVRwXJVAaPF4smUFiv6sQBvTGVZdK1gVJX8YGNgqZUqBD9ZMQ4bkkdgMvVGTbajaCtiTDC9",
  "key23": "2RS1ipuuuU6Koet4KYnLKLJEA6iramV9aHfbj1SLWLTxekgqyA4TTz7KRA6pj4zotCKjcdjtqwmhPZNYazEHnokn",
  "key24": "fELmHnD5wBuG21hvhoXKdRYwu3XCBqjeyrG8Qxsdft1fhWgTCFsib9Sm6U57Sv2E32mB5gLNzoKFrBox5iAe767",
  "key25": "B5m5XEL7bhMAqixkbF6cboTjHiez2Yz2VXupivrokqFgwSeaNX2NZ1eoUQVSQfAQJTjezxK4pdLRSBhiHR6Rajg",
  "key26": "5K7co3jSHJoL6e63v4uNxUdBB6YZZb9SyuNrR5aPZr5SHqtpqziEKdgycaXke5AD2s4XGKHym7CMgBijX8aQWBBZ",
  "key27": "GcNQyG2byrHcqhm7Ats4dd4dcEaMVxS1d4vKTQWkNTth6mSiH4qtyuuJh1QCXArf9GM4QtE7CC3zcgfsicF2ssh",
  "key28": "3wXRiE83pM7DbUc1Dtea1MZzC1zfDZwBuUgkAxmS767Aa7mcLFm6j6PJXp85g8mntxsGG8uCcRjm9YbrU6fDW6Pu",
  "key29": "3f9hKm1pPUCbsyotjnAbf4ZdTUmUBkRuLH1xZHSwKLb6WAsgehB1BKMXaC1eeMMFDEf1i1GkPXXQmzQ3mAhTzke2",
  "key30": "3LX7btxGhxPiLCssEWa1uK55nNd8uXnMFhrjo6SCTKrz39kEsrowdRgj7pSeSkT7oYQb9A6BnuAfp9BGRWm4tKFK",
  "key31": "8CEEc18kXVUtqjrB7uaB2JpS5FvTEkikPi7K2jAkNqnDno47vidopcEdYU6S1sEgDNpmFAGpWZztXestSqvknKU"
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
