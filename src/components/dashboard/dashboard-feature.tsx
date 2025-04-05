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
    "5qWzppdW5Se9xFePrVQ2NFrFq3f9JVHSYd2qrBV8Kq8tHYiiytcxBUAD2USCw62sq7yqDZEHbL7Lo1Eq2EqEZcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNLZ4QkAq6LpurBXL2dCVxgiXW6S8ajLWAgxZiq1hTfFxMjcMmHr9RVDTqPoc4rJwhc5Lr2Yc5zSVjkJV3FHnnT",
  "key1": "3PTvncdVN9hhak14BKweKm7uShzi9BJH2fmsE7ZCAb8jFZbVpDdgvwpB8xEK1bqNy8Pt6DyR1snaHhTE8j6WC8jw",
  "key2": "5nJXxnXuSo3QJFBsgU9aETvT696a8XY6UGfHtc1738tLEt2yuUVKVhFPRo64MjiR7mi2jwpmtb49sQBdv2JmDZX1",
  "key3": "397gkGwQEZHHBgLBzbe7iTLDD1u1voqfxjFDtJQrfTB7SD99AMJcZzz3UF65JQ5LpLaWZwWcdqzBVwu37tvDb8Xv",
  "key4": "EMjkh1B34r2HjN9ZMDbii9Wo3g3o1jWn4NTbHceKa5Huy4MnCikDJxohwgSw399uG2XJwzTipvKz3s6NJBSSY28",
  "key5": "SJ3WLxhmKk3YoGqCqisGJhachmCVcTcUz2Ma8H6cTFv67MNzitzeBdD8uR9b41oXhWop8UJpKoQgfBZmsKTiDcR",
  "key6": "2k9Ps5w66toDPj1dz7uUNyLsEPWP9tpsV3SKaLCaZwQhKGqVnvMii7oxQbBoRJZBHMWMpsiJqnoWbFoNmKq7gtEc",
  "key7": "2PJWZjr2T7wANYD6iUcuGwgLXyuGS36jihzdgzJq7H8TzgZH5xnbz5qGckBgUhRUFJPpU4GUodd2EstyN7VbZ8uE",
  "key8": "59wATT1ngbCe57wCBHwg4hZWqk6Ay615tH7vbmuZcq1x4yPdbhBYEbmTTdygMWn6WDBLjuf7jWBEwRLbWMx5D28o",
  "key9": "3CSyMycqKyRYWB2nCfnyNG4Lyz9HrVbAbgHnWRbFME6erAhEvod9qmqcP43fLUagyvhEbRn3qojgqapfM5yybgZv",
  "key10": "3HbFGpJ2hL7Ecd2HjJivKhNiDj8zzgTujzgT5eY3oo2KCxyToPNQH529Xvq3TcCoQkpmkzsKSDCECjn5iRYYrPmz",
  "key11": "2MLJ965BrMDnuAhEjZyEpA6BfxZoifaVb1Go9A7Fb5JMCZozkdyXLAW8nWH9hYwG32DAdykUA57kSB4sZLKYN4r3",
  "key12": "3FUpyd9vaeT4FUv6gKxHB4uAy8R9qWEw5anFVhbqeN2YFqUJEMJTw84rv7wk3Rz5yDGtdoZd1sSgYc5oorn5WXKR",
  "key13": "3xmaVnVrdTNqeHtQQHEEfFKUJVu3ix6EWAB93YPnEBVLuj7nDqPnKSPhVoS7p95JXs5Kj9dbeuYheaXjb5Yyogaf",
  "key14": "4CmVqZND9ukooEYLxKbasBJSQdsrMD9nRnrhtfzFVHpEwpKuX9Cf6enJapwzhUakvLFmCYFSKn7CT5S2bAVMBJNf",
  "key15": "2kKz4JS4hg3FaA5aUMVYFUK8rkkH6hJac4BKVqTqTeMMBxWA1sTG6FAyWdNSVem6AVh1HnshaDjdCWb2iDsitUv8",
  "key16": "4stMM5WDoM77wY4zLZpBKY7ToAouBkM6wR9hWJsQSU6WnrzHVojoMfwD9LSu8LqTDbRxszDsw8BSmTKJkdBDvDQM",
  "key17": "54aru9qFgr17e87SWAre9JRH22itBgVXDqvddEZ7CyxsVaHRUYEtLdi7E8Lnb9J5EVdEbAWMfqKxtFMpa5yoefsy",
  "key18": "3VsA7gN2jhBKbwqAVmSUdxmitZ9EKCr5YRgSL2zTUJ84VtaTViujE2udhXks5v3Nr5jAwtsdtL6EfHcdzwfiFPWG",
  "key19": "4U37Gd81G8b5hVAxgdo9fcqiJDxoXyGCNdSmNSyLCQ1j9td7gLA6pppoVE7EDWeJ3U2nHkeWsYpqubkG91sSX8d5",
  "key20": "45sdgzPVHfBw3LixTiLqkN9NgQKy1utae3uUXod6ULocqH5P6JzbKbZpyHEef7nzy4kAuXG2FRKWALCzZzxyohc2",
  "key21": "5By42AA3gGTQyFJxqUQb2KZym4KEVomzBYyqJNNdJ4pBpQ6zrYzcyRPFUBmvVziYatX8ABgunZ9jk56LqTjPuYXT",
  "key22": "4JDyd2RwUTsaGaYWhaEPRzuNBAxWnmM1PodbxZfg7ZzKcuxE3of4HxCRuKVBokbYhbYaDS6WduyCbXAQtHhegVoE",
  "key23": "2fEGnroHyVkT5UpS6YWNVp4tcnJAxP8Bh8mPXWc39FkrKPZbFJFKgCNUXMVFzA6ctoVomExhJkxaDQmHeuCATxgS",
  "key24": "p5cs32RKWkj7nTdFKaKUgRNvdeHRpw1sB6Ru3Bp6g8mdNEMZftiWFbMRKNKTNDw8uw2T2H9nSoLZsYcqazWzHgz",
  "key25": "DZ8LhvWQr328b1PZDDHqiretMX1oaSBfutPoFq5Dekps47RXmj5P3CSCNEPXSD5MkaAz2RiM2LhiFYDq4zWKwni",
  "key26": "4fpxMEXUq9YcdVxvutUNJrJJvohRQS9G3oB9Wdh8yPToaLzT2BPidk3zsYvLd71SaiPEx2ww2KmMaHEoow25bs6w"
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
