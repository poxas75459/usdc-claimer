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
    "3fCLenkzMqQrUdjjsy1YJ5mPrKNhKpPB1NvSc9VDZxUvQ6mPWqTX1bfLK5cTMKHednYo9k1ZimiEPgU3okZpEeAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UXghkcGBAYnVUJ8mHx4w8K5PTUMBjGrPqNqD3iwrBjXiE57g27AZXD764kz88Jb5MW8Gsu5cS1gitaJeQsRbuEP",
  "key1": "2FaGzSerPPSSF9LGYgxgJ3Wafb4aD2ZeBoDgE82rE9jWEiG2FbnZFwsuzhzaMU9WshQCj7BK7QHa7wCDAd23yQ1n",
  "key2": "xswAdJCitKQY32fpCr4LWcN7zbBbuzLYk8dBkNgMkjNTGEBTDwLy6a1V5hJwZorghctaDdGH9o9hfTGuwRgCoJR",
  "key3": "2J5JTJb5xeUdFMjkvFF6gAFV2XGZaNHUuidiZn47qWSbuJGgXnZVHb4YqTMixMhDjjsPzVdsh15n3MkibVBn65Pj",
  "key4": "2pwa9hmYJCpjnUotv2TVmDVn7Knm39r6U23ZuSVvcbCLsYwQhnPLUmQrg8a7YLxL1Nw1UjqVQ4CA11GnSSJfaXBv",
  "key5": "2vT14oAZbYrDCWg1X6LhNtVgJvtFzay5h4sxZuFSyQNSYPkLdyvC3vrJ1DKnD98gBzTcw7Aca8gjiDjVsLpH3N3w",
  "key6": "67931LAgCUkPphRX4pidrAzEiakBx5DdmYQWf2FFPfrautLQ8VnK6imE76N1NcatbqBnNYdab5WSPSq3S36NALUM",
  "key7": "24rHcvVtDFtSmGMfXkknA4GYPeVdBJVQyhQxV2eSco8Xcv1fby7CZLXprf7wQz5nVNifJYWBq4r5EZ7b7EH8UpvD",
  "key8": "46vbdB5D75ByouHoBrjtBxiwsgaY5vVK1cy6iyhwHTY6kZaUHo3Q2jUxH4tKYYTbhd2ugGzjhXmb9ZKbVn8RPFj4",
  "key9": "3BHTH6zTTn5ta4ovc8wc5XBsxnCYqx4t1XudDJJZMQyzhtDy2tAyDjZoAfyecF4VxeNL67DCkRVXnCptDXXo1CgP",
  "key10": "4bo54Jm1L5duSWy39F6uYd44YPquEDL47B6UF9J8cTfBsiMdrYPU6D6nhZuVeF2Mv8VNuh7jF5eKM4pKRk6wHLnP",
  "key11": "5wuwyt1BCqyzyfcuPHGg1u5xu52eihvTAFuoehuvXGi6u78GNHYctyDKCm7cUiTcdEPVPxfv843NU2szm6tEjaZy",
  "key12": "5xsxJcmC7x7MbFsuVyLRZdBW9SF7Lj5C1tmBR4j5nZtuP2LqEAtWCiZvgF7t1mCFQuXNUd1ifztYAGWYXsD18eEN",
  "key13": "3nw6nYCbgZxGqpuY3Dp4VyAVjG8CasLeFC6yS6MRo4TsQdEegKKz63ZiHV7zsia2Q4nZPwUqjixfyrshKDRwF6Q5",
  "key14": "Z9TJ9Jztucy368QRdgRaJ7Xs6SeuzR36ThrLLoeCU7yFCLExpyoGtrktZEih9BPeZab1efMtjGaMz7h4WiSUDyF",
  "key15": "3QCJwqhYEKkNsfsKyuUxV6miECtXvBnR5Lti6rengcxfgoCCsEVfe9qgPNHWqWqBTfUBPeJVAeiQhEHtEwgNhsdC",
  "key16": "5fAHfNor62AaGwVa9VXyzEp7j5gBuKbibBtpzHSkdUKUfTC8pbvhP94f69AF6abDcaamNfNBjpVhhfer42hWuTbA",
  "key17": "3a5gRCxUVoogKAoCa1G5DuVkRdX2PGNaY4b9JUJic3rYGieCWDGeqBAy8Fzg35yGyTgTrKDopuqoxSy6Uv4B432H",
  "key18": "598ifhCyK6aLFTEo4GREwT1P7dRfYUfpAcpyrkwuyMu4QnYV6BXRcfV4PWTjs5r5aDD2LypSmkwE94Laepb1yvQd",
  "key19": "2wSAPQNBKH2bjmWAemq8hiW4sgUCKf1pxm8t25CB7tWh4WZSQmtgx7vn8MYAQP5zpLX1VCFrPbG4AbXxiatDqXv2",
  "key20": "3V8ZXk3HfNULB7XGZJHt4DaxqfU79uE3Zs2VSXBRVLMrEA1jwNuZmroSKd8VgbZBx8jaYafUPEswGszf1kGp5jbR",
  "key21": "fdBxV5GJKqpP51kmfPxjkSMMwoU6QbTLSRoxjpK5iSidYQLSz3R6kXCwPJ1tidL5p9u1SwA3oS1u2mNMxQRktk8",
  "key22": "5ZXhaFKXZHZjA6Qef89qUXMVuQyHseSXvNUBD5BpiRVe7cyz5rvXotLcHdU72TpDyv8KoAcB6jYNwU4SbNEb9ZKh",
  "key23": "4q8DyxEKezFe1j4YP316YFYSVCG3fZCkoGuknkYgPEydQUzgYqeX9ehPNrE8Wkk7Z52RrV5m634bmtjaR9PvX9f4",
  "key24": "21M4JciDFBX7BixXpAwzwrxBurYbuLY4SY4S5nqUk4KNt7Y3eYj2sHZbxwCJpNAEwjNRY9oh24AFK7xiSeRYxpbT",
  "key25": "3vRzKgSsMHoYX4fpZMoQA1x2ZxYmxGjmkXNJyLpK7F8B3eZ8h9nQWauHVR6N24HGokR3P5RW1U2hZSPTtBvJskTV",
  "key26": "k4SRNmHhPHxSidftk5Ts8tFaigKUCXjqvL9GgXRJZT3NqfNVYr57iqhhprygr6AeGeeESdFqXNM9xdgwGucfbWE",
  "key27": "WJmVc4B7Wgi85GJGwUzNiP232GkEs84SrUPDfJKq9xmDPMw9BKdcY2mWPNtAMGUw7NbJmdAaLKNjSgRF7PLQWrS",
  "key28": "5rw6iTRP5Hz2f5L2aNXYBhUyrFAMcy2DTSwGjn9ehzt4Jx9emYChMNSYvkzqw4k8Q7qCychrZqQQsLccjwnnTDVt",
  "key29": "44vrZcsyNmu93Yk9uLUDiiqk5X94onBEjFbd5eDX9DkRnj26GNLt35D9c7umfqUALehcGa8vhbgvJ9gFFCuM2h2B",
  "key30": "2yWnhAsdeeNNvyEoo78cKq66Ff9W4hJt6Qur9LWASnGs8sPUY5FiRxSmPaWWbGsBLrqSgzjuXPQxLAsuEvKFGiDG",
  "key31": "5fnoE5MChbxNfVobK2QLiBkqYcMnyua75vKzxDXFumUsVtjNXD4EGJCrtUjo3eoT6wJmEHf5hXo94mZtNonDU1mc",
  "key32": "3Esze5snKZwmoB6Y1RrA3mvNTckwLd95cc3BEmqgXcKXo1oiQjAuJDRyx6LnuWUHjqY6w8cpqLrc5vgn9NBtVpfe",
  "key33": "bGrSxLuyLN6AXQnkGzjeoytgMAwoumRoAXqVr7S9PAUUtP46kybLP5ABFo3nVDpaPji3M5eWx5nun1kC6Uc4ZYN",
  "key34": "3rMgqBVwGcGGMkBXMB99zSC4WB3PuwypkEb4moTuy7CFKEaArqt1UUoBXni3qvyF25cFQfbmwLDQn1G1ZA6SerDK",
  "key35": "3qtMKUeZLrqEk2AajUBkKcs51pKGjLVjBZypd6YwB6u4syq9kXfVJ1p3he9PzTD8PPJgzFpHRADRZC3wMctF1Ko5",
  "key36": "67fti5dFzPx1sf3EvdGbCkUpynKtR4p45atW8WNBLg1TYs5ft8XP9M6DAG9Uzu84YCjVVHfXU7Av6vUVz1fTnues",
  "key37": "2X8MQ7uMHCvbzdv2pN1HZWJnyxG5JPaAMF8kXRCoPWQLnznTvSwwwVPzw2Q5aCYpTL3oHXbMkRivsmeZKGUiRR6F",
  "key38": "25BMAjy9hbHjrhesb7LyWuii5yEt5jVvRDepwxn5XkZJrzFXvFFSyXojEowxYajXkN1pKAnSYNPeLzqkNZUhELto",
  "key39": "4kgq6VAeSnBKBTfheZCj4sjBqFWGG1FdXDMG6qFwj5X1gNpWNECrZSYN1sQvSY7sRLwVJGtxxmPV2GLLbXFDgf8W",
  "key40": "3C4UyNPsXivsrSEn9x4M2F6NwJZnKna3pwnFLoWc6XZXJyCzXbsqs6opRkD73uegQ6kMQMk15hFhuFUXCQrHfrcX",
  "key41": "47C6zhf8GLBkMSs1AaYjAugcg6LiHNpBKrGMEusGeZRPRRRSz7ziET58p2jgQnusXFsWQWJT6HJ2CWiKos4NF4CS",
  "key42": "J1rxEo484n1DCWvMdrHjAjJQmxEgbkTUFHQafgE3KYSyYvP44XE9mTRWFfa2ycSZuMv1BujkGAHwYrk553tHEdp",
  "key43": "4LGTtrjnDKqhZeZjoaokUeHbpEokwvdan6Yc3W8X8hdrQiLXsNei71xD8aX9NHD16mjkikQFETRVZL3p6A6pRR7p",
  "key44": "39A15rHq1eqdFTtrdud34XiadrcPQDEx5uDfmxgwFnyVi5UHSgZC4EDQ3qR3c9LtgDA1rGwmF695GEm2nYsiVC8z",
  "key45": "zaYC6BJbpekg1CgGpLbn89RwoFrQEmJGXhaiqxoTbbzYVTGbUrGV9ZTKae9xtJtruhfBgVeXSpaVkfdAZMcWQxy"
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
