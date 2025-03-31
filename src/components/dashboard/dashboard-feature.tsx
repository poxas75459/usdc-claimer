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
    "58jYKGv1wAhD7XGZTzWhme6igDWS6cMBdaYwKDmEEvLQpKCqw44W3NfjF36zLShUHe9ZLh57tF3bYmKsXc56YDxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dDfvTqxDb6tYJgGcgmdVLw6snrGAJAh4fBjsVPJMbpLMGhAGnGfcmeZFGHJiiLog8PPbFGycw8x43dzY9DpQwo9",
  "key1": "46R7eJgMq9V1VTsbyWp4GXcWUR6wYKLGKMuRSKnc2uaqXhoZQsuKBswXJ4YhTcfT2WynaHSet3UAc8RSwEYqBC6i",
  "key2": "4Supuv4cDHd9zF5X5iSZyN7ufvFeuYeyhyrsxZR8mkPQ6UBrToRUjSN78cQJJvH8NVLe82n7W1vsr9qzksPRuwNB",
  "key3": "28CVK4emgoF2AkwvX33D5JkDVwwsWhPAYPY2qchTEWQg7L2a8LEgbAb7ojfRcKLE2SoqhuweHDgEhmPtwLP5su5u",
  "key4": "2oVeNoiML6o5PuWFdU7gVuSZtSYb6B3KLXPhYuGTFwnj3MH8hWY9gCRuPMaSfPb47kaBMrLdFJHB83hSuQyRJzw6",
  "key5": "2ofjYj4Dc5CCsPEKoU1dhr3jeLdgUi6L7FxHphMgDXVsUaL4Sq6cQcJ27Hdupsip4MqV7hXZQ838cA7NPu4k6XMA",
  "key6": "3SjCw9SL6DM8k6QAck9kzpWeNWxo3PbhFaZb8N2yHPPa5eG1u24V786tBp23yZTrUuDHJAvRRJ8APzu6U2psAShz",
  "key7": "5ACboSVYQo7QazW26mxuFgtCbpszY2vXANHoGRYo3f3fonVPJkdPs26fH8GH1vQvkTtQCHkfy8DRGj89uJJNwqVY",
  "key8": "5Zjf6A3rdd2rwzgprmFyRAYFNzcVJe4dPuPr99BTy17HG9inZRRjhPiLxGNE3JjD62wpVSrFw6eotgXcfuc5muc9",
  "key9": "4AAUqFNkpmPBTr3oyhnkztCvpJhDrEkXq4EbZBiXAHM9j2j497hTt9BFwH5pnT5ynhCqmq7YrqQzDTkM7yzFaL4r",
  "key10": "5Mb4yN22vE3uPW3KL84mDezHC56qmBPeUkNCdA6gK6drU1Ubs3GPErUdPHEkH2UzQkkt2df5MAdhpCuwy8Rev7CE",
  "key11": "2iyDsnCEnnHnx8MZ5kmzPdwbfFJZE93jpGmYsw8KMQ8QZkmopA4LCxWz4V3tDPF1Ccbjvasg36PqrXFUttkY2u75",
  "key12": "oZgJZC4BP1EPmhqS2zNjxUEaGLuqY5EqAxoNPxB7xTSXrdcy9pBe3ZnsNVbME3cA73yx4K87C7HdQ6ud9aENRpT",
  "key13": "4zppwnemph4Q3U2eLaeSefVNikJpN2qiMLrztdv27SP3gNGErUUHXzDtW1UjuBKL8q34Bd6hPJmnGrhGHrLZwsBz",
  "key14": "4Ac7yzGXjAEi9jqxUZW338G9ar9DqRFNLVa5Ez3RxnQECKDQasrRs5LjCLhQgfPyKqQidW7U7HPQoZeMieXWpLZg",
  "key15": "3nEBqJKdNkWV6WpL6VaSLvA6VNPaDpucXL36rx1Ua4MgTVohQvjHTBXSXktUdfYEcmkcRc34srYHRJ8NziygwSH2",
  "key16": "47915XmMerDrsceY3hXHvUjguKHmDay9pvbNLqU7JBSHPUEPwewoUhXDAKaHzVvKgn1hLWkcrWvbpiUh6jLwWCVR",
  "key17": "3aCHGurbsxz6LndUouodJVHDHBUPtwFHbrePxsGNogmaVXLsg1fok9g8uSxowPRnjSosK5uEeA17ZsHnc5KaRb91",
  "key18": "3i5aiwv9Lt8LhFaYNzjYUkueWFNxy7RGbVURj5jDbtod46zF427ctaUtrSoxLgksfF5iVUBWiUeFcjDxcQiLgpCb",
  "key19": "5XZA72P14tZKncYEuuZ1wJqJrgdMwvfb5zofVUMPnLjWrgjxj68bG5ssiHyJZbV1Y35nch7493o7FoUQM5KWGXmM",
  "key20": "4Qr3kigHaWF4g3w8h219KfoQhRgmQvdETyhRZJfJzWdh71cKi8giH5dwkjF1ciFAHoHEwM5fbQssYk9m2BRgoC91",
  "key21": "2ugKKqHbgkJG2J7isiaA94U1ZhyPSAZY88Dc36JpcXgTLFyVgeZudAZJyC9haDxVqSGtdTKxjD5UCb9bP9uxRieF",
  "key22": "5ffrhMV8YqJVCp4HRZfbz9sWMUahYHEid5vBauCg6ZCZNg6CA4c592QJUXgVpow13vPuMtSd5uMYXB3FvwFRnE8u",
  "key23": "5D5APzhJZkkBjvBA71VewzUWHENx7jQsmUDBFVHPgTzSrZbHxGd8p14attsTBz4svh7UUnZeMEANLm5FFp6BPQr",
  "key24": "r9zikR9wz2B7BnhEFbJGmavMJLQNSwrwjkkXj2vPJqdiPAMWv5FW5udAfKCpjiVLTwhdhrGAvQwahMVtsjek6za",
  "key25": "92i7qzLxUM3Ha1mLcVTR188S1UoBy6EgpNwnrsZ8orhZahGjPpasCh98p2Z1N6p1Bhn5gRJkLMwxv6afaX1Unv3",
  "key26": "43J4sDuj3jmFdQVTpfbqfxjYZLmav2mLnFF9PU3V1kcymmZwAxkvicb2TLrdzq1VvA7sPRx6Q2D4HUVGQJBGUMuW",
  "key27": "2wt66RzxbYNFqNbe5mXDobhFmCX5sZS27PzeVQL5fKYVDpzbjuB6Kb1sQBqE1FU6hoF32HM8zCmdWZJxNZ3AubBe",
  "key28": "2V4UL6CYeGDeWqTVFhiBjQxgJAuu36U3zpmc4fYYstL6rDFdaLatYcoFpBVXekL9ZDLjhWaXmZqEvTxv1UVF3pmL",
  "key29": "PQszhGD3jdSE2atmUVqs9n28tdosS4T2GiLPNDAcwvxk9tUXN5U6hrvx5SdsyUuJMma7fG4AUyXU6TdwVchohZs",
  "key30": "4EbWNSrUszXq5rrtzi8f4ecwcSsyTYN3bcHxtQUTP5f3G2iTz1v9J6TpjZFZwcsoZN5bKEWjan8iKAjgMpgbWKNx"
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
