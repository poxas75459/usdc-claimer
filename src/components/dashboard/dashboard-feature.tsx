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
    "fG4Tfu4ARsVz2tXRZQPJd8Jx5AAiZs9mf2w6tT7oDXXpxCvUe85riPSaeQWCsi6aCwP9c421ySpUQ6CPu3nPUXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JvhssDbdwe4nwLgnabC4gSieAYW4HXXBL7FWJ4YcqLv7ZX7xWMKn4VVzSFUnxNP41VrRxAMYPmj9NpTFuWWXua2",
  "key1": "2Muxfe4KjjtWpteAD3jZywvNXNb1Qpsr7nedpazwdnGw5umYUpwfn94Bt6cpfHTtZmjK4y2poLJgTVS8Lpj3ZQg9",
  "key2": "31mACF6VT9iVB5JAFMPj6UZ57NHSMqwQtUFRPQJLAN9TEx79NV93ZXxo1Dm3YWYPKBczwhojijizuyFgcFYnqhc1",
  "key3": "umDPJJh2Lb95aQNW1PvmqB1dkATDbpHqb6gDUX97JxpnAXyAAgCwyvKqwLE3i2Lijb9VMVMvkrXvJdeUfypE6Sn",
  "key4": "HQfs6VfZYYUKpThLvj33ECnmqNa3PYh4Z3VfV9GFyAGHW76doT2ZvfsEeGVutPWFMfv4FS2uWckwWDcWjcwHGsb",
  "key5": "GQKhmHq2X9D8vQEuBz1Yqttd9TPeDoDnyTd6RwPUHr2aXmB86iBRRrog5R6h3nYSQagiwezBHQs3e16HWY6BvFS",
  "key6": "432QfRccYkiSzjiV7MW7UU7xHnL9psxbZuNxYEs2CKBCm7tr6t1svw4HR6CpSepehnheCu7UKdC1v8SB1Ck8hEfH",
  "key7": "4HqhbQLVVmWUCFrFqbR45e6HQJiLPjWp2fTh45vU5aKMbnUz1ww6N3GNyt1say47uuWmJKSBS5mUVWQT3HNRfNyW",
  "key8": "2CvFBNcSjUoRXZP8VAapYUR8y18EfZorx3oxQsNZcbKXhYjorfULZ2sdAaZ8hKSBNxjQWpmd6Wx67jdJXpc6u8wz",
  "key9": "JHJDu7FCHVj7X3QQB6vKJ3VUV1CbGtPSvjPQR7Yt3BSy6P7NBfPnGsTUviP77xzaw92LNDFJzjELnUXxhCwK6fb",
  "key10": "5Uv2umiCg1CEkCptg745VQwNiYr63rz4AnpEFAKbipwMwUGZ6wqSkDZoUv3Xzmcgd22ePGVudiHG734ay13toUSK",
  "key11": "4Fu35NpcXqVdwVB6iGA4ysngtcXTvvziV7bMSXMFXioFbJXkEG7y752EB62HB4oG2JnZhfWgQMCVW5dxQYkKSuwE",
  "key12": "2DSorwajJbEpfFKamKUf3XAbB6vxWQSihjZnuPknZA8gPhUUv9JgsTRMfV1zhiJxxnP2BTK7E13hxFQLoFAeBkiN",
  "key13": "3n64EyV7otdnz54BoccwBB8eyTwLum7wC165XCJBATjN4XfuYomKRktkMSVUqEA8XcBChaQKwRRb4xQbS7VBPeXj",
  "key14": "2WoXFnNJA1BxB3bqnUvHqkxyAH3VDFXxfRHpWppaCAkuJekzqcQxKh7J4kWu2N2udDBtFbRCqE2maH4eo9tV9aZj",
  "key15": "2G1bgvUm9Sgq4ZpW9cwhpG4JU6rMbmmP6pmiB8G9qzEAYzTjqHFNnhGFugCuz6nR29v5D4ofPukmkd1w1yFdWrLG",
  "key16": "58yKH1dNzSeWP4Ph1CvfRkGXaRsHNQd6okJshNNNSDMG11utdP1y85SvuHae4QadR9K6G8V2wyZoLHa9SRHnMtqw",
  "key17": "4f3zAiC4dUUC2ToJzVD7H6b9DiEZaKr3pAiAQwVbYTgVUCQ7g4HsBHSoVriCGc8yQhptv3uFJdgGmMsNN977qSWT",
  "key18": "5QmRcKMaVQ4tALmEgg6C5uD2AShNYHXgwAfG8TCK6Q2e6NVgR8PeNeoStizMNfcef15x4jdyBva2WCe3baHTQksK",
  "key19": "5nAY6Ws4y4v38MD4Fixbfh4ZmAYpaXSYRmVEgxdmeFoyqC9LhpmeQiW4pTidV5UV7vvYzYgtaXuLEYMmdfQMZAZd",
  "key20": "5doRSgPB54mkqMs5FMsTT6MXVu833G45Jk7TEuHWo32TRTNRE6B4Y3pLnLQET2E2SA33jKJpjysfFZJwDvbco2kD",
  "key21": "5kQfqZyaoBkhXFYKZGtNY1KHYtkfioBQGPpAiQh7fo5PFbXvbsjeJvajatPBF8HS5FjhHNResL7ZqWrwcQC2WBkP",
  "key22": "4VsKSqjUbwj1Pq9RStdczqTTba1mSqBr1oVzTJDURF9TqwRb4ivrnBktCv24iAuJVyGJL6QciCJU61bC6m7H1rXb",
  "key23": "2V9RqK5AckTzCoXE8WonQHaReeFmGMsQ2GNHBCE4Ha8uVF8JxDJmNjsyYBUHD8kVnALyeR3bH1piUSmFYQsC8awW",
  "key24": "644dgMQTF9vUX4KjPUzfPnUJaJdaZe6pf5nr7fyZPZSVqAvGNhym62J5PkeKf6jWFdHqkk2t5nNz8T1fuLSSwbTi",
  "key25": "XAryypufTZbJN2GngZqZBSxmj2G19D1BP4KsEKF3n2M7EfC7gFiiTMHwfz7bzSXWvnu4xWjNQHGkdapxoXNLGpt",
  "key26": "5RSnNuxzEM7sVyMmAM9iAAXWSNT5JBriZZq1PVeqrmnHLRsfyamNKppTLZo9qU8tqtS8fpV3miuvpThb12fdDRU4",
  "key27": "4LLMKEWeLToXCTiui2T59hsWJWS3pHF1ZsaRFQxrExKNjFZGdhZwpW3iB27jJHM776mUwezBAFo7Udv9bvSo9E4",
  "key28": "5SqHHiCNXDcLnVHj6ioU7NqUTG7ecEofAtfKVaGsfQjRMQZsUnTipeWv1bHXxTNC3wUrnrwxt7GEUS4pdLtg2Tz6",
  "key29": "3UrPxkcyx4gigRZtLFWvuCBfuvgEhJ1LcTTA3LRpbsrPFWQ2pmytjZJitvSUaPAMbLoY46jY3Q58bNqetf78hgqv",
  "key30": "4NVAJy9enUJ3Yh4NGFMPaGRP9mnq6WSgSbGFYnpaAFikchqKf9HaX6t3iRJXjq1YouUPS4UHGm4utZsEvdidjbvP",
  "key31": "2RdjGYUN4EuDKXBExCKjdNeEPHM5ALMGZ1zkWqDd1kvE1pFQsHjogpC4VHzsjRz9uWM3pRoqtjBnk7ytpwHQGhc"
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
