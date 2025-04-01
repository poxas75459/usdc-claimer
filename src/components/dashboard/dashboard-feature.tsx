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
    "3bfRuYY43PhaKfSdrdTQgiv7wZej1wgWzFuzVNbTmR8Bn1mhnM2htXFVWd8UCuJ1G2y4SWscqqyUMk7X7GPujnPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25kKgvkD83ZgMZA6u6gmWbBjbAmgTHHVrdm46ex93ZxQmv5udYEhEgcuRt7inTvEo4Dom2zu4GmheFu7iKyvbHwc",
  "key1": "2GTdkRB9CZVRcSmiGdU2LUhn73Cwc3k9sx1KPDqFmC5WQai46mrKwtkXC7o6vkwcXSxMSkwuK5ESoVaBLHzreymp",
  "key2": "3e6Z9tsfaK5zBmAyDKmEVM2Qypyu7BPBf93KTrknsTo2qJWtmuk5pJ6enqi4t6kedW2eSQd9bEexQmkQ3BH13X6n",
  "key3": "2cPjMLr3zzZXgf7jCtukdFPgQ3f8dE4xtCK6DHhRQdukUaAyr8d7U4wkx3pZHVdCh3wKJu3ixSVvpUKKnNQXVdx7",
  "key4": "3NYwXPQjGZ6z7fwXMjzRwKwWX2xa34i7v2vm3L7UbrzH78uz8ch3wir7UaPUDVA9FrM7DWNQW7qHVhy1QqdAivW1",
  "key5": "RD2ZUAAqLxotAYaaEnaeFPDL8WGW26RZbXKhPMChXa9CdgegREHqGYx67iJjCYmw66EmxQ7DA53fshnY3nJtkTe",
  "key6": "2zkRYuquE3w5he1mA4v9Hif6U7MKcCBFizuNqWEET1NCjeCAfBU2vctCGGCDxoaVpY9XzpHWHirXneCqH2JAA9t2",
  "key7": "5Ukiz3uekiUu7aAsqFuKxrLyEdZneraiSYs7AvYD4yM5T6YUHyDhYhRRK4T2efN6BLCtDFsXR8iQjoCw1gJqHmwB",
  "key8": "3BNiifqpixeFCieVoL3XFpKTmtUumoNebVLRhkgqiHZm2jYgSyCzEVVuEQBXym6GBLnTiWiTikN9ud6M1H6RqHMg",
  "key9": "5j2aFFGsoUGk2wNJinMmmH5dpspwQ9gpomiJRTAKhAgfhow9GrYuAtetoU91efn1yFjWLwUXuPA8Xr2uURJB5JLX",
  "key10": "417Sx7LXh5z7ffTMqLDaia4xNTLRZ3LKTKGpdqCr9BqEUwbFGmLEfyVGPDYtS3kYaHPi42umfE5TWPUvfzJVoqCS",
  "key11": "4CB8k1fZVk2rBMQmxLnWvE7WL8LP5GsvV15F8a3Yfcmj8ykyHqxijsTNfNRb7uPhoCc7Jd3hYA5XAbuD4cDLpsdW",
  "key12": "2L9PhtBg2AzFAEzkdsJ1Q8hUGPpgi7ehpMLWuibgUkJ8NyyhBAqe8d7CZPB6TVcFGg4wqJhNP9r8AHYC6KK8Zxwn",
  "key13": "2yRu2mMnyt5nN7azTrUxmRuZyoBwzt7F5FBhpVBqxmqVfv877PihcBy4Kh2bZsb4WEjXD7privgfLKEfgagUicoW",
  "key14": "GsDJys7vFJYJXNTRzhpMhzLrbvWYk72iDjYYznnLrP7P6io14yE5toAa46ZRzYhJtjhvdL5xcBPu5QPeoAViL4K",
  "key15": "63EbgJYhDD3nKKKbSxaGzFFVDxBSRV4pvuBK8yAYBdcGXJSQi2yX1SNGfkXrJZoVgxJEWHheJE3AdHJvi7oQHxiu",
  "key16": "2UydreM3mj11kzK1AZnus6CwZkT7yeZM6CCCrbvu7afDbpVYZ4vjQfUDKuu71JpWcnN22qe1wbPheso2rANomoQB",
  "key17": "2KtsU9jZLdhS5L8TE6uQMTearFy5Ye7RRbWiSBT2xWvz6c3mbEmPfghDRfwjr74jaqdBsmGzmGsSz3dJ7XRrNB9E",
  "key18": "5MfWSRPiJD3xqmf9YkwEgiQNdTKwWYDMypv5oQeVbUQYzu51xaSHF7ZLFGScdVDvCf3sTTFkM4iVKMLGpHJhHdDd",
  "key19": "5BeqkQ9z8awm67kHCNFFaSiR42ZD8RCd6xJY2kAA5K5rCvCzRTGSgK3u94qUZB61fcKbRThdV9SdskNG6o7B76dQ",
  "key20": "57cd3sMMQKLE6vzKdfNfWuj3xP5P9J7wmHEzTgMHWAZQ3ATZBQYS1AnMp7V86wBoW9TjBkwZ8GrqyMJ1C9n9HPbE",
  "key21": "5kpVsxvnmFc1xbQ71r4h42YNkK65xP5wE45CR5QVQa1P4p5y97NDUjZXFB1b5Pkkw6R8wnEZKKW75eE7gtJjNfGa",
  "key22": "hAvRy3Gcy7dwML4YPFNJ5CADc3VkAFpMeRsDXwFCURARt7GMjiFviapAy238dyZzCm6CKLPJ5Yk188WNPic54xU",
  "key23": "5RTwaMHsYiNB88MkGUwCNu3B7mTDmacDjGHwBQT9WhPsSyxtCNCSv23vNJgAgfsWA91nsr2yJ1kAhAN4fZP9mjir",
  "key24": "x8kYqFTC6aaswyP7GS3uEAmMHsJuBs4DpCwcYceXcHzJeaFwyiKLu7vmQ2QBLLxzjSHsHcaXi9bikoFk1uWJ4wX",
  "key25": "5VQSE4wy5c96yRmWHV5e1nUg8oCYKqGt1LfuJcfbxPWc8kPogTkPQ1A8j37GPDMj83pkoyx179by5T6x4yF8Tvyz",
  "key26": "3kbZmgToGgy9BbYmXcbq4hCPAJo7PhL84ieeSAoXGdYTyawjpKZENfZJWyHPeFcL7czgsgTQXQrvAzwxDnxkqikZ",
  "key27": "4Z6pQWyzZEbJZUxnwSRXDpRsNp9Q7YcrsmD46vBQY6swfKNzDw62tsw3muDu2eWWQSmscjAxXYKefMPbAhSQLY14"
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
