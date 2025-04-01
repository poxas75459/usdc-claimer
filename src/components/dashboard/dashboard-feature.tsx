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
    "2yx1nXg8tWuNCFkLbE7WxxJAKYNg7amGn97fPZ6yX3XcC2dXX5gpAh9URKuVZUea5pr66UBprbKCPZvZep2185Kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZbtSNq3RQUbhh6TddxHHYycYx7C6q3mc2tGV674GaWCn8VQU5Lge87UC2UcPR7fcZVrDiE54rzdEfbVhczvKe6J",
  "key1": "592V8Tznt3gFWCKtndzcA6qMBBmELvi7QPbsPeAfzNdAJALiAJvALfzN1W5BonVwNdYYFs19aCCzm4xSDZBvRAQX",
  "key2": "5ejCJjdSmKaEAetaqF8tHkpEU8FyQVZTb86c4neLccFGt76nsH5yfY5Q8TmBSXaK34wYxDVM9ymGbt9R4JXp4tK6",
  "key3": "5KaoHYpBzw6XyVTBqfJM4TTydMu7mSXMWrApkdtW4GAGBFb1NC2JpXwGNbaZFRmJJBAzZF3QvSEqSvfYvyZUJecm",
  "key4": "odHrNaAAV1GPVZSiJpGfC7HH6UFVApwjNbjq49dM5pWfTdhFxhUvd35JN8yp8MVSgQoqWGEo32i81JFi6S2mrr1",
  "key5": "4A3opfGKw38XUkFDoytdVcA2Q27wRsvsApsZSVTWMZLRqqYNQKd4GvFhhMk3xpxdwrhYeTaqBmcQwUfCWWEePuA6",
  "key6": "2NpHK8MTG1qSkCtiKMiJxotFX5PZTKSYXf7SkhZ9qnoLFDCaLdXAeTySTfXU83VPtDRDvwmuPG1rAALyik9nhmqZ",
  "key7": "4u3D9igx91ffxrocbbxr3ANBDQiD5cKraSbUU5bVmarD5BALpcei8ULFAfgcEfxCzNkjgcJRrmH2PWNbR5pw7b4K",
  "key8": "4dbe8PbmMvxHzsDnL5mp2XJ6arNvfoo8TQR3S8TgaE4yQicJ5tR69Vefsi1YmmAMWGzjX34o7JzAiJDkydAnJoqF",
  "key9": "2xZ7p2oY2oYWSAMxuEsXQWrpGKqvp2vSPe9mWbbcvpP7514SP7xWa3nt6v6n7hdKFT3kvNsuT8KnAX2VwjZi7iYv",
  "key10": "5ZP5wAZHTcAtnYmtdwcWQqB5hRQLT2jneVGQfSd2kGDDB7Jf2fZkDxCYY713kvj41xT5751PjXiAg3JHq5PYgcrk",
  "key11": "5eyT5ZgVxJYfbwNRg48AWBdhjzj4bTk2N1Z18cYGEMw6i7C7fznWRn4ocmkxhsWkaNCMFxR7vrdEAJ9GeacLJYuE",
  "key12": "3THSgMARSqgXpMssTEQPd3vwZVJ3gJcSTZ4TBFoHPRr8UjKaCTyqGECWotbySqRAhPygp8m3EFHmbjMPt4cEiowW",
  "key13": "5XqobGSsKwjijDc6vG5SbmaVcFJViDC8uqNYQgMv5FhjV2Jbrc8gyhbYNosh5S7DZdUFxRrBwh2WPcKAEUviub4i",
  "key14": "4VwgrvLKPSJybWyjtnXDiX5ZfdqqRSrYH7YVRfF9fdhm61W5JkVQt9mduYYWfDj31KJ2YXBpYXMb7gRdNs5BtQ99",
  "key15": "2sKzos6S6Z6j9hS4LwfeM1GxQKVrfFnZ8K3wVFPLHhG1d7u26B9eDmNarqx3jsZRaQoEKXwNW5TUGiPr9tGmW5uy",
  "key16": "2E3C7QVe3iTsdZ7M7MumVUAS48E7acLtpRiVuuvuFLtS9Uz6NrjFHg3sKqSLKFCsmYc9bhq3tkJEiJkJ6nAQTvST",
  "key17": "jvLMEfkmvdRfr9QDe6uBURF6AB4AoKoPTTq1Z6xjYZkCV84eHwXSGUJRUDx9ViDNthuGS7vcapnzH368UdkCxC2",
  "key18": "5drLXF7vw6KfL78dCJw49axZVXUevN9aKbcWFMbN3sC5L17Wc91gThnQWa3APPySeQqRcyWzdLdmK2w8zhWUuo9j",
  "key19": "no5xGS3YfUtnDuC6e1srK61JUb92AwHao6Vfhx3d1wxVWYyej1XmYSM67NsvC7v9xxHNh4gRnvKynBs3pWpzwsK",
  "key20": "rvVGrDmA3jWtB5ZETxLD4BiZBbXWWJgBcXW4Ncn53n3JY8JEHGVtFubQgXw3UcDMryFHK1AZV8YtHtK5TCzR6EH",
  "key21": "5KEsD81wpKUWAr5k6ayqFcoYQyTGz2N8d4mQwLyi1GGXWTrLgtXmJ9ZWNM4iV1kweER8cKiSdLzrefMC1VPpp1ZC",
  "key22": "3JruEYzkn85EudCJUeEtJ6VTj6jscD9S3LQmkAjiEBXNH5ufG6kWyPmh1AvaP5g1xZVTt5z4P1tbX1a1xUJQ1LzZ",
  "key23": "3zxdMVLq4jdiMDK7zZowKmhHvP886mGooPp2zFQcTtb3pDzXUHvRJSV8rS23KeaajyHYy2sA8nH9ngv7rpoChiML",
  "key24": "5Frnt1kJXKzvCVvKo9CQCPyjy84Yc4rPShqyLZZ7fAypoFVxFC7xfjQ7AJWRFB33CejgUrPprDaUdtDyiYs9tGPu",
  "key25": "4WaQLHVF1GhpobFTHdLptcAxxVuKvaRYvoMTVu922mHRYz6SxtZRKt6YTB62E5faxnbEg8Kd99bVS2XPj7cjciAC",
  "key26": "GcvruP3izWNnQfoJ3ZA12NLzcJsnYzqaYLnceYqSBv8NJEazDT7LF5AgZDNvWUSzzZwrcmnSGD582G9cAHpwcFC",
  "key27": "5ax3exY9EfzrWnWXr7aq3z9FHcBKJ34gxuYfAGG3vPTmTNRb9qBUmZVryd81qVqVKaXtiL5DhcUHQxjWD3XG7t9M",
  "key28": "5A1hS2E2W3yB8mpqsNrttofmNdyMsqoVqsV428LMq5CYaypeFJBQUxXWSXmHiYrU7BCLkNoBxZDZFepsMShiMzPW",
  "key29": "4FEKTypR6vouuY6NagChhBmG1AbPfM2g2Euyr8iPDs1GEBLjgXGfbcswv1huxLnL8QATUxvKPyFUM6nU81LBwZc9",
  "key30": "58412XCnpTREuQEmYCxeihN691WPRsiTGaEnezmYQEoZ472h8QNDVGgPPhbqV5P3vBzex8ZqNJc8fNiPXbp9JNPY",
  "key31": "3XHKspRy6MjguUtpJesyy9vXw4baeTUzL8D7RcqSQcAMQLrgoD8f6xC5xjXV1eBSLU91qybX4qBqDzpA1Xo2nKpH",
  "key32": "5Ncxr1UZ5uruPoPU4gtUet8mB3n2VchT6CwfARgQzJHUL2wDkLeFyjodVmZ7nJcZ5FjomRLWupz1NLBBNe8Bto96",
  "key33": "4mG5UEWUwGVnLzNGRv38Aqk7vKeiSWKpcTYo83kyjisjXJf7AZzLHaVLUqWr8PCjPoNhfru86iAu2RXPG3ggq3Za",
  "key34": "3NKRf9tah3xHiUXT9Bj5jZi5H1C4bGwDu4MKT6xvwVHvYi3PGytf7RH5XRbrPdZ59VpxJiDTheniVcJ6tjsuTNFB",
  "key35": "4iYJnY861gsT2eS1BuyrofGcXQ4R89cMadHgdfx3QvdkeAVCkgC8mjctXVTb47T7VitHMQ5irsJLTvFsfteNyngW"
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
