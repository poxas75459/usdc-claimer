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
    "3T2QTPRzbnDrdf7y9DyTyhaVFeCkmifJ2tMRtWZ2sotFPgK4H2ERgWLAt8LUXk3yLpDFa5vLHJ5qNwB76LP3GvT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mYZiF2UZf6W7qArF41EQcEtRcnnfWHQysCDGXyRPno4Y9zfYeeuJQPSTUD4U1qJ3qCm9HgV4yquGrzwZRSwqfCM",
  "key1": "2tzr3r5MoT1n1gAF6rfR4SGCf1UNxbpeLpkzxbpbGqv6p5XoWwJRDMyQ13qmKdg9XUUckDvhnU35hw7yDzksYbQp",
  "key2": "6Ji2udjr7LdpVriJFZYTJcNWnBquwGFPaBrdRXavGS7y5gJnpNry6q8sD2211MBwVWRfXgynZuMFUTkH24W6Qma",
  "key3": "5HoaUfhfNpLFVSHzdhRCAACKCg4VNkESSBgakXSWWGsMyWZuGQegx3AQej3rUJruJvyPRcvg773GYrvRv7JyLjBV",
  "key4": "Q8xtWcvVsqF6oTDE7qNqDDK43LqgYP6TwkUWC4UsCJGgemz51gVNehw8no4H8cy7biK36tw4NfzU5FS4vu2Chs3",
  "key5": "4D6J5FxDfxNtGp4jpQBkhPeeh1yC6gs4JoiGNW71zUHFxoM2GL5RPYEb7QTz19CDfaqW9xZo4Sx1z9BxeqJ2RZbG",
  "key6": "AsknXftn5qL8qL5tdtHUpWcC4KPzxSgTa6u62QwCR9MTstb8xujto9umU9tNtMjjxTJLf2Qvt4vQ8Lczzf9S2ak",
  "key7": "5gYAusCKVAYRxUwVjapc8NrHPHYgF2GrMiqfL1VDCABvQPHYeAkmaNjk6ihq1jN2m3mTr8hFDLfDwz27GSLihY9V",
  "key8": "JftEYF8qwQC7BmLnYE4DXnNYXKpG6hechTM8YRf1rMPWxBV8g4gUWhPkYEFmHjLkzorQBivGyyDMxeBu1TFZ4YV",
  "key9": "fX6pKfqvcguxfYrRrLzfW74bL8ZY9sJPKXTK6wTHCAxqoG6BWNwogSpyh2gkmsHqYZ1BrNJBkuUov3GefZGdb1T",
  "key10": "5jEfJELJyYCUiNQrBfhUvhQc68unqhBqNQd5FmJaAQNrNjm5af21rNsmszWtb4nrxyNSqy1UkNCarcWatHv5ScM",
  "key11": "2f6tfjusdVEsQVHn68nDy4kpoweNWPcryGpz4qYVMsS79F7wo6bg5wnwkNsciBQMupPHZwRf9qewteGSF71rLSSk",
  "key12": "3XWAXNS63xLZASTJ2pad3CH5JG94gsUAvj5XeYneFjT27G5NDsj7ZVhVovCcZHDDPudCwfzsg5fMUfvVuq6pvjm4",
  "key13": "22XUW2Eh7nQKcZPttZFyRscUSCgK3f36JDLi8hRZaSgpMPv6Rx6otva8B3KGF7mFaaZ2H2dn6QLvrEtP2bDbvJ2k",
  "key14": "5AihSWymy5PA1gzks4kW6zSUJWb7EefmWC6qqzpFAJFQ8NawWo8iEseay7LasZMqc88BViTXyecwwmuZHeA6zmdr",
  "key15": "39rYe3535NW6jKNKRWZ5MearTnTFAXzvjXZtVGJCVFVzBJhk2ZZUqXcwkfwmnnKzhMA1skTCtPbBP6KUqfyvxUZv",
  "key16": "34PaYzhgZp3HkFSVbf7bukgPnoamARNUjR5peMNv98kizGrth1GVv95drVcWeCAcMqnYdeuhpHs4fwvYvbnTNpKm",
  "key17": "4J4yUPaMmqufAMU9xiGAuQwuPe8sJe3MgGYxEEMERb69XSHtGUoLvoqeiVEw74xYoEZuyy8RUAU2HUq7cpMzTGkm",
  "key18": "2BpSFTg4R3tAA3WiK2DTwwaYfkUnnof3PAGKzJh2PEkqiy3yHdYnGvcp2SR95aNEwZnHTywa5AxJdakBR2eqGBwX",
  "key19": "4A9SLEHzpADiQa5GdBu5ayhhLdc2L71b9BqRG7zuJPtB4SztTqteoBVxRDpGw1GfMAjtHgKH7bY1cPruYuK1KRjD",
  "key20": "TPB9cqQcPh5inxmoCCfH7n5GkdUpCEE2uyE92K6WfoaJ6h52iZS18D4Fe2DSaYd4NEjiSXsAg6qwzYTXHYrPosE",
  "key21": "2GeBJH2bd8K92Wb7BtX4X4tDPUW856QFLSVqpMU8gz82hSpg9BETGndK5mMWJPJeKkVuoKureJJhTkeq84B1hPtf",
  "key22": "2jp5KDRYJgJE7Lw54zUdjDJf6xp4UyRnJJ5o3DigKbh6CcwzHmHikWCZjygRxdNQ2ef5WN3LHnhofHzhFNp52XoH",
  "key23": "Mo2DTPUJnxMFTyzHNrXV115ezAF4KGhEWtoU3HMHQPKGBChy1M3hYSRVSc2sYm9wGz4wEuBbhc9rAHsWWLYdMJx",
  "key24": "RYdhFcKmNTWFAfXWNrgdxQ5Zxbf6D7WBEPzLisZ2HN1pvqZWsZLDM3ULdMeEMW1wra8jxjVrxubjwpAj75Kg4f2",
  "key25": "EsXvBAMaKtECwSVz8vmBHZXpGApusihVT3KiU5pSqjm9vT52fncMZqsGCJyZnEsAFDoqMCgJWJ49UX4femzsEgi",
  "key26": "4w2wF481LEVQbTcWyQmh1c26Ka6qZraFGp2HEU8WABHsniEZzsugKmwDnFHiztq8WsLAx1WEidXrj18cbDsBY9c9",
  "key27": "5MoQR4gH9Jo47ENBVbbN4A5AYthgMDTo53CVc9rdkxdkm6Ck86GpXT3QBya5YPn7As8szyXmrP55p4esyjGPyYxc",
  "key28": "2WByYkNRzxNRn4xBmPiyz4XgfxW91BXZgXXNzQnRad1ySqP2gL3D5wbEKyy712QYr2H5zD8NFVdhzV6XeSAS8tCD",
  "key29": "2djAffbFRkTNhUGPUsp5p4e54AVb6XgYknAV6DArjMuW42q9k9uLgYMxjif9AnC6qsVzWCiNSJNgPQn3iVzjY7eJ",
  "key30": "59Csep8eTfy6TrqGfj2FikMJ97acsCs7WFg9XtinXQawhX3SphP8y4mjeRNn4xqqnuYbmbTk8KAUaaEzGxLyq6rQ",
  "key31": "4HMBapxnaqFZEQDPUa2dz3UumpKofWXuTwS98GbK5GHG395jERGVhnSg3uMUgN4rrptUv5qf5GBsnzPcqPnpXthe"
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
