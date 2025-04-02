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
    "4JnFShGUDsna52v36MGrFmTbsWAqV4J42nM2CVnWQ1UkcQpKvM6JobNKFecASDTkpToAmVmnShDMDr4N4iuyjnb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V7ssWW8nZvBwa6uJWAU2cBUvPwHCXqxTr4a4xzVUppmTw8jLnB1SipXkJgkNPWsCtUS2hMP91iP2b9GVYFDV57D",
  "key1": "4Rc8TndcNdM1VAGgiCNtmpxv1w8amUAT4JUAww2e1KNyEYprFEBbyxEqZZjbVdq6mMTXXYf2p8MUH9QoiAXjSEVU",
  "key2": "5jykrT2ZFqPssVoyQXKD6GGvbUSmAhWiKxVroNeCKanFt58aPBsUcMt22UwPoyLkGuHeRRK8VSjj84kppS6FuR3r",
  "key3": "tQcteCCBssTRGXDc2VAJtHPyhHEPaRFQJKXoFtjBwv3FiYAER2rM2zg8UgPC8JQHaskSNJjjvdVyAAwWSUMsDjz",
  "key4": "3YJuSXtUtFza4egxhPgVBgiviQX5yNoG9PNE9WXGTn3ZXX7S8v96ZQoGeefJD4jXZD2GMX5aMLwfrsw3C311PrXH",
  "key5": "y389i7DV3MuCkmybPrsqLRqSzkNVZRxwqLxU7zA25xcnRVRs5ccyftKy2zvUEQzXLT9vgTcHAgXAurKXTb6RTdc",
  "key6": "3u6MooP7YnJymeZDuABYZnZAPgTH2LXBQGiwsDXCBvdbzGaEntnHSQXxe6PQQuigMS8WqtBUzhXZDYAqeytLxXsR",
  "key7": "53sciTp9rwK4qSDtTBczkSaLzGVvWajiYE51cQ2xGmWuQimKcp2SXSAS4UQTHoqPzUdFHeDDzX3xQCzMaG7L7kSb",
  "key8": "4naDKZKaVVqCgQufekhQ7thqSc8okgaT4DxJKPu4uutJ2E2xjrDcPj3aHRfugCmdd8x7aFqL9QFc1TeF31RVwTG7",
  "key9": "3PR6h13Arn1hqYeSbqgrnwG75WwXKXXBC3gMpNNrBvhUYm18vj7hfa8NitaQTtZcwUYXM4eYKdg3pxbxCsYYTbZr",
  "key10": "4qVKs8U9HQcjnhPVgeygQZgD9WaNoC4q3pcuBg6KoYSAJu2Pvz4WsLSx75atQWWvYmRJZPoSrLoSjPkxQXcFXmsr",
  "key11": "39FYTrP4swgnw7pxEh5ZWZYsu1paSX4w1CcLTgjwmiDARqSmHy5gb9uP7hgLhTfWwoDdgnfTsmestc4arVDx4Gyi",
  "key12": "5foat15edun2b3kYQFaRoYCmXZAmt1ATQSTn5zHWQF8AppBHTvYp8mQCMBxV3mBHf5KSVh7qRDararJujL7R5Zme",
  "key13": "2YhibyMCFuMRPWHwR8fJZzUefp7LARGmQo7NyQhNQT6d3XRibC4gk76vu15CWpyJ3dzfC7KCP7zGnkZ4utpYBPJk",
  "key14": "3BUMWVkZdohqXyxM75fDmjdsjTeZJ7mtosGSm2bckqJLTKFK2JHGbhkrunoCPwNfC1oLok2HiWAcjfsFBbDcM1UM",
  "key15": "5FMUxon8XNf2Ppy26jgv6aXXMosYaoBoTtBEcGxVeCbPZAvBumj8pEyzKsCVKizzToX82Fji84YegJ828gn9bnjq",
  "key16": "2pe717NcSYEw7nv2mZpwjWeLzU7X9Tmy1KdyqURrWUkpU8gTgKsQHnYDQtJzVQSz8yb957viS395EWB3ZUoV11dk",
  "key17": "WUHznXdHcPz5BdhEGCCR4PbrFEirqB6SitooALbkacuRB4ZuKk6WuhfM4gj3vEp2WA9tsqmyJFsiBD14w87R26L",
  "key18": "53WPRpZmDz8xPPM7LqMVhMpzwdZzV1jUjX9kqzfNFd4Kpc3RoHjJnybReBZPj8a5Jrvjykc7Mr7ayGTvRtXPF86U",
  "key19": "4Z1pvs3vK3qRCqhMeZ1cEYJeqKtQAxhiAK2SxCj1JueZXyr6yaRL59QBkyPTW8nrz1iFRW9u3ApUXLXex4koHDwn",
  "key20": "Hs5HBSYQeXwvA8jqbvMh8aqcRD757Ba9Q9MJdEnSEBEat87FDBcR3UnZjYKH8zLGEnvMmD86WrymS5JmraMQvsZ",
  "key21": "yMvmnsyfw5eKT4FDJiKcDQELo1VJxFb2ieh7VorzWEWV3uyWnhKEGcDeaRq9dxj7BNF3yyacWbnKdDqcyNVteKj",
  "key22": "YU3wKbwfERsr6h2DtDzQqcR2GXxP2BJfkKGCf8M3Yvb44Hv2DK7y85cR2ztiKhrPvwRLSjkCYb66aHwZJxMDYBF",
  "key23": "4Rywv27c7pdp3oYmtYjCWrbJgJXFeH13Pghrd1VLSZfJmTZ8dwcmhb7Hvwtc9y3peWH5cJ1VpsckcJeSEAhouQcm",
  "key24": "2pYotL7BYu2cLAjMNcidrGx7ej5ZGhy2ZDRYPyHmSMDGcakH4QRLexHsMM1BJtXvRfWVbYy2aVfzXTNPSXhxdHZm",
  "key25": "2dDQvwnCZEQJNvbducHYcjjQCopDv1igSUiQkQDKvFUjkgyYEbm3oHRjoUKZwcxoog45YcqfhQcCTjEoi2Lr4u8j",
  "key26": "5XPEjxN8iWoHj7tFYFpgitRhz8tyhbK28DZ7xBY5JUy4tReF3vH65r5dUHUmSPkRvtnoe9XkvJCraUgeRCq5se1u",
  "key27": "3ZPJzcjf9zZLDFyTYzdVJ7CHUfdBTpNBdQpabBNeBzDu4r3zTdTGxpCRmw8fvKsdoW9uGTRWwiozbQA7Yc7FJKMA",
  "key28": "4PDdLGaDToB4Qp7JQxmfeSVzVwStTBvHCJ9g32XYJcJKgc62VpEJ5gRGCMcYeYySLGpqdzjeNk7UMApvJXrBjxXn",
  "key29": "4HJZoUAgajmjzpXied28WSg31PxaTJYAjKszEgWFELnVaTsLbWLVpfPr9UWDw9JZVaedCatDACwhXHvEbQVJ2Bym",
  "key30": "56GtC1f75F9W64yEtXqXo8JCQqmxiakr9WPWWbYczRnDHG2XfZBpoK9NwiVPYgDxwUZCEkparMB3nkquvwk6soqT",
  "key31": "5L4v7Y6ms1mpfaG3kmw2sfLsmUTnaDJXHA8v1DnY6MTKg6iWevtAgYBCUnjguHqm2D7SgCzrJDJnscQ6ZW4xQjkC",
  "key32": "2qKEMX3VKk3faLccq2NsfjK7vLdBgQeCTBex6LEZBACTzBQ1K35zWWGKrUHmDd2vWgQ8HFuVh6ZZtfmqGpkefb9c",
  "key33": "3LjFVc8kumEHHF2C7pneoBaGoj5HeTVkN2XaKgmrH7tfDX8mfCh9vm5HLGtiL8d8PE5dJeckVkeAhu3PbRb4wLAA",
  "key34": "t78fyAYktgY7KH5YxqGTBeCcrXjgwhedmyBM14mwcxsnohKs5JGzhgV813kMUBaseUxPb6aZnjsW7jPhqh1XrFz"
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
