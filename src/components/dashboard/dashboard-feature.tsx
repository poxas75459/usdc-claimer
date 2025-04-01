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
    "2ix5MECJszFapxB384xUaDn1mZ8yrXweRGL7bqadMgVPGaHhVz2xwmQPKk5NqpWMAJZTPgtLgcRKWNAV9G6K7Jhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rDWgfQtv5eV4fZKsjYaLtKiF1K7qdcaQw75R3gPLu3XB7pYCdhbityvVyXqzTxvSTjye78Hs5hS6QFv7tnXaG1Y",
  "key1": "3DfpKGms4ooVc9jkxX6aXZPDRzYPanaznv86cUydhjbFmMNrTeeeAQ282jyxGDMTuj2wtbaNKMVRpgZR2k7BkBA8",
  "key2": "65vFSFMKtqehexrscgEjfKNH4zXt3fp3dADreXCXF7xRCkt1728XQKxBYt9JWiPthvV7rvfyJXxukTtnB3x4LyaD",
  "key3": "yTWkQkRTTbCsA9y3JyKKRymon6RcitjZ8UAWnZh8iaoU87jRn2ubNkxYyafS4iUYgPr8HxocsKoRkN2kukZnuQw",
  "key4": "3EQMYbNxc13PsGH7zAvSHYjdnu9Gnx1fCsSmWbDaZoBPdLzVgmkVzZcYstDXGksWSFs67hEwr6CighKNkdFJbQ3z",
  "key5": "28QtndWGFzj3jBntJ6B9ePjSR2qK7Ygvf8scxnvrbkbzxoVsUGeqyiak4XX27CUxcyPYj1LhM8zdiseQdy1nkGY4",
  "key6": "4ERvwyCkorvHt88Q6sGDY9PXV3EosGkMX79747zjgaMsMEPoLHBrAZz8ePrvWvG3jZvtMmDfJk44JyWWwTAqUhDd",
  "key7": "oM3Pd1bQSqWJqbRANvdrCiihBNGSah89kAbjeqwzTBEAnftXkYyE8kdfSyFBv99ZwoUBmqRvoGxKnvRmq95Wu9Z",
  "key8": "3SRoD16SV74P3eEqy8wuN28XRM5wNdnTAT6cLx13DYAhWQNVTQq85roTJ6pNJ1ZkpfPZob87KpofgSJDhpUz5eDM",
  "key9": "5AvLVNZvVWkovbPnkwNDxoLFyMEyckZhVeBh2qEZHdKmgmt2phpLSj39z8YT1xbMtKaaiYF4kSGqVwBDXto7xbrW",
  "key10": "3vAjmwoXV3hdba3cpa6RkZDFGJEih7F2Ey62wBt778TucXTsoaDyYvb5YbQBfqZooi13cfNKGeCHUYEagw3LzWXF",
  "key11": "3haGdCcHyMVtgWEvL6h5HUGdS8us9ZAjqhZez5Nig4atpfU6zp3CUPepMhhYR3xUr9duDw3Npbyn8XFLRKSaqZd7",
  "key12": "5isXs1U8CWeW6zbeFxyX8gH9edfi7RYQPSTV6E4NGQbSnSzj9YkDghVXaHBhajAw6Xqz66pnmDeuHUEkyRiNYRZF",
  "key13": "5HNtRSn7RcUqqkqCrzGEf7zXiz7fEFJB3KQZfGWKhQzQBb6E3mn8Gvb9vrhnaj5fHRVNWsqwubBrLc3B53zJffBU",
  "key14": "uJ5QotWqBqmJj8sgafxKcaTD46wv6SRhfpket2WmbeC9xSccdbcVLctGwQ8PXaQj54zeAu3pPtrzVMniXdfmvBz",
  "key15": "s3bKDiTJ5JHrnvy48fnVsqLYDBszJLpVhKVYK4BGz4gxTZSKQJd3i9rZKyDfLVRDeHAeyVjLN2GqZvHDniXoXuE",
  "key16": "4T3BDnjd8rHRLfpvXHa1R5R8G9WcRpfoExzYg4DRoJUSyZymPqmFaux7eK7xkL9wFUSm9ogyKHSHaVuUmrF8FS2B",
  "key17": "33XM7jz9kP2h4j3nDjcbeyF2EdWfTWf6hdfKchH2jqyehr3tdHxZFvLDTD5UkQr83Ut6rWZedrQDARkcbw2vNBmM",
  "key18": "YC63j9Exvb1XsiPvpvNDd1X23uXzNpLjyHc3iwQ9qMbFxfGi9rxvWNeoLZyDjZejoZ7VkPUkErPTxPz4HqrVSMm",
  "key19": "3EUjCCtbLpNmp1moiwX4986DMc4oarvFj7cSDbbZVvBwc71ZgzDi2zRhvBQRQPreEsQuWLAiHpqwZApTRC97LCh5",
  "key20": "2ZRkHzz4YuevfcFsKdneMMAq9uDSKdUK4eZPWsSKsNHcS9Nm6btzsSr9oWsCVDXMWrqBfDSMKWn9HZ8ttqVjZUNu",
  "key21": "5JNuzz6FX9CvgnaMda3RYdEY2AwCnHZTmaFgF1nR71ytFcH5xeJV49yYEr6MJ5QXobWaDaWmXYbbA78pLr2TJFh9",
  "key22": "D35jL1u8rcSBcA4ByzGCFaGVbwwz8uTai9gnLYTV9Z5wFzyTs4yRw6LrL1XhBerzbk4tEAdA1SNZogoSDisLiNk",
  "key23": "3PH3fFeW8uRYELsipmHdrRhb8grT7t3XcHgZo3qTQdhqgxtbueMn6BNTTxbrH1S6rhsxx2GgzJjS98hzLgWXtk7t",
  "key24": "64TQuVK55uk39J4H3dGiHaCQt2gNXPCWAfXLv1aTscS2asQXfYZWcmQ4rg4iJAhwrzZyFBxHfA8ftbmTtJqnFhMj",
  "key25": "52DQFtzJ9MTv7NC65ojrJ7Z8sqcsvY9jHv9xc5QRntYwnfuLEDZpiyGKE2yusz6ztmD3Tjp9MZbGnvcffAdrCTeT",
  "key26": "3uwdyaa5GBN8vRTFMbsz9Q49jzRTZvoK8P9eTkixtt4DDeh9GhyMwT6RyUJgeHbgmR1krbsS8RLsZN6YfMHVTCs2",
  "key27": "4RE8yY2Adkam8dp4MX3qpQSFYVf7LVBH47kuUuB6qaCNDHx4kYyQEtLY8itkezGh8JZWBtmn3W84RQpy6hhdNyBW",
  "key28": "5MApbiGqJcYaiug6LyNGxpGTaCcmwJWgTdTd7VTL6Euz2aga5cZTifVFakLiCfaNbkshhGX42UmmRackhJyQJ9ED",
  "key29": "4s9NhQdp1t1bv5hbuy668XPf8EQkQuw9P196Fdd74XpaFx2ih3d4h37QAeVcPgE5naRLJzkcKVU9FYctT763KXQP"
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
