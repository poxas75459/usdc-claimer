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
    "5gxto7girK35nd85zZ9uFy5wmZfUVY4VVTXPMnnEpToMFJxYmL1RR7ZasG5DdtzMtY5Ue1EpUaeHZpP5D7HTz6ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fAGRb5tt23tTLfXysZpDtATURs4wzuBDcSpja6NrapoRkyNBG4gKTXjdAKubyJQTzQEFGb5cnNkP3VSweiLnZaD",
  "key1": "5WbxQqz9tavn2YPou9BxETEasp3muXhUPaRgEZxBh8Lm3G5u14RaTssZifDEpUKEBSDcCf8vQXJ3Fqu3o6fPRTmj",
  "key2": "EbcV1bdEqcwiEKkDyfGwbX5UeSShrm6E3YaVCQRt4M3TMRXG9sbV1iRkXRj6dEbtdjdGd9oJC4kYEeUg3XpxdeQ",
  "key3": "4kPq5rSXwnZBoPVjcPTDY5xcMR69BnSAJKtpmZsWL5bBSS75MKKtsfkXnp5qu83iBRfgCrvT7NQcR8go95KTi2oN",
  "key4": "5vcvn1fgvUxwMETPYBMvZrQ4CBH9q4G8ykThVd9WDV9mqbsJvodNLr8hniHUnn23JuybN6QwgWwVaAuaUtSsFxdv",
  "key5": "2GEK77xhxbfuFBDVQvHwz3rXeUQvNqcWUBjpA4h6GCHjbTpWJHe6bDMEcq7Q1hK6joGAfVSjx5dXCsGia2fReF8n",
  "key6": "5bqutRgXqpQ6zzycQByhjtSjqovsMkYkhmZb3iKuCuanG1HRxi7tbFvxeiECA7edd93Lq6zn4MDryWLrgDeJGRxr",
  "key7": "6c197cKKqZCwUNpNMBjUyig3YPT7RqMjnNEV4mW1CM9Jj7vyoAtJhYa8du9N3QCBr4BhKiw7Qn3w2eaTSwCpuvU",
  "key8": "2EMZDGxPkbr5CAkM9nj6UGQQmWybCKZiVZog4zEoNM5rbJBMsdcBKxg2w2jvtKeXFYy8ZF96TxGUiHsbfGWxY4aG",
  "key9": "5EvFJhsL2q2yB5KLnqGHVkGpAnZVvD29SnY4MJupSgnp4jmcCEjVEwzaxTijJVUZEyGdBbKwYq4xVadME25pqzFw",
  "key10": "5ifBwAtf15Tq4TAxT2Tn7SVeHU4jwofDSu2j3cz7u7X5axVUM5qDNUdbigJA877nHsiT3dPGkejDwM3k8tAUacbp",
  "key11": "2hnmZnm3QfNR4dh1pobBCDcVy68mqozGHK4TRs9ktE3wcNhSpixKkR2BzbS687Ue82sVi5gMcXitT9v3UDRjJvYZ",
  "key12": "36YhTFv1UafCZXvgcgefF6sg13qoRKYBWKQEtVunnwcdXZwKpHUc7qUnm9xnFgjoCbGj7VLwYizrcvidErx3XVX3",
  "key13": "3Ms3yJ1F6V5qiEPBRcdDVsBZeU2kD3tDXRxBneCK2Dqj1RuCZGXeizxx24JzWpUu62oJFZxqJWtfP4Vjw4XYyuYJ",
  "key14": "5CUgqsQSGb1oCJoues9bq9uTMLqyoYeJyyuNUKvmAtW2U2NLESM6ypAFKoPfXmVK38TLBnL1aV9kAM6QVNnvBJsh",
  "key15": "2pKR284aiHz7DfM5ZzepMy86t1QXZzURGRkwv6eLFVWNDodC5VqSqXuSygX3o7RaWCgwJ4nB5FJLiRUtGuomvfRv",
  "key16": "N9bSQ1ScUWwqqiXjxuHxKm3Luo2ApyPJAaVCvVGMDdLKbFBEAEZxPFZFqgvHrbNrVuBWBQXviT2KwXVd1BQ8VJz",
  "key17": "3bvePMo3nRboxS68HyFm9kKT1xATC2MRwwUSZQVbzKFb1Ri8Beq5m7HsJjbKqfmTpM3kgWAqU3wfh4i38m3Et96c",
  "key18": "3vRks2BujZBRhXrUqc8FpFYSy89ZcFVnicNGacfqrfwhut4e3sfGnfe4qzuQ71Mud3nDxNa4vLGDh6aptxq5Azhm",
  "key19": "5HzW8hWanqXC3zzr7ft48zfWYMp2FyF17hDZBTzHkjDmupHLsMsjhvLQ6iV44QDUJijkVescypty8ugvqVz2JYVa",
  "key20": "3M3zSVqPK9F1CZ73nfav1st21nGM3kRdVjverHu3kuAjhWZmNMmti2DwTmvfaqeGSGjBDM8aDPsMU4TxqbjFh9qR",
  "key21": "dqbaPK896jYjh5VKvWvqqR9v61zx84HX4Qz4uQbLkbFxCfoZW9bJkM43bhEnnuwjaWw6w45RU7C4TapNAM7CAfx",
  "key22": "3eJZQDaeYNmGoBdvnwApCR7NJy6FFeZeD46TfyrQHxhrj4RXkpCoyASSyzSBEPeUYFBw71ssu9SkWkU4GwcTvc4F",
  "key23": "AeoWMscDHuvrvdwVJhAiweCRGNB3s9UiEsm6692NaRTxctSB4hzhwYjLUwv7tNuHvghGnBXpVMwYYSfGEXUESes",
  "key24": "2X5SHAgiepXEUzhQ9R9t2Ra3Mb8t2KMU1cdJbxATmxG9D35B4aoR9EK74o11tL5xFGACoZtaWsAMCBCE1BSRvovD",
  "key25": "Uoe1Wc9Tge8rSgbYcLR1wjUmnsDSkiZzxG5DyPSHA4T1HFzTPxXrViBmyM35o1M5vKGCT3G9wNceFAKmpQkd4Ak",
  "key26": "3uFwKCioVr5mTxK7LThhQAzSezRodh6RgrhYq4jTkSEi4pScvksqEWi78SZWB8HNUX9oagT99bZoYcC1FAe6d4fP",
  "key27": "5MriSNuY2kYiAiXdWCmcKsQDHrCRFoEG7GLGg5mYrzaPyQiQQo4wxWAmDTRUGhH5kaYH8JY2bjVmaXqjr5dzawJH",
  "key28": "JAPsFp2fSwNCd5KMpmzk9RVgTJcHLjPRb6MdjzbxXmTKhNMXN9puVE4SPE7NLePXbjBcvXixCHV74U1S6BPCwbe",
  "key29": "49CpykYTVwzSLy6nbuQhDaysTm3VGih3qg4AdJw34QoS2wMMAxEZHYL6mjXaWWJCstBcf1sNu7KyxWSho4AKkkrc",
  "key30": "59LmtjS115kHjC4ikict9fvGpWWh6Y9nXqVGeurZ7EVKTyTLcEDK4nezX2djZ5KzV9v8E7Zpt5Z5dKZmV1ih5vDM",
  "key31": "63BdSFf8q4ajA41Nc1ijrVmYadqnBaspEWQ2TD2p1wM7GDa2SJT9H1N1LdfEVwHn6juHTsFgLoo75TMwrVXjWVMJ",
  "key32": "4V1UBmZFivpAQBM3PZ5TAyCVaxdBF4mBtLidjwDiGaj9gySZJMWyqy6yzEQcidc9ptZhXZXw1R8DAmhfXMJ6SHWJ",
  "key33": "4wsGRzoUBAfMZ2JC1k9qztVzowsuPUdmkb746s3eShR5LakScqMQcwkGRpps3caCaKHyopjyDi79wkNqzCxTJoTc",
  "key34": "cmpxDw8uar1omRooba77AHBG9nQ2LwRZuxGT96M6CMZbZ1YTTwEwXdAyBdXw1fZ4HYRDZBcU5gNihjQq8uivnLm",
  "key35": "5RXogTuYKXetzBnHnuScxhRvbyY6aYfqKVY5YHM9KeAuVc1sZ6zzRGt3h2w2FaZKdYph2Kuz3v8kqkC9xHULyFHQ",
  "key36": "9EQabqtSurM1q8KFDttJkvvGoCpGawTohpD6WG4epPG43aCPLpUzx6KTbXak48xGi6Z7zF3EziGgpXPKxXBaMAH"
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
