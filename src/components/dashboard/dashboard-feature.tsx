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
    "5LPzwMhdyUoNDRz9CTQkH1ZzcSW4GsqmUkZvEfMz1C8hpaS8fKhbQT2gFmmeP7MzgSSQPZ51UmoAJF1NRGeNhmEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ygJ62ZrMMkZ4WPKj224Z23vHZBJkFmUpnnxXkQxFM7VmmGiSbMYUngyWQbZzg8sEiS7NpW3GzegLG5PJEM3Ltrs",
  "key1": "3CecaWzJUU7Yc9D7XMpBUnnRPii9T1EPK23EXM5T8GwU1K7UUET6epApWCt5fYR5mJcGmXZSnv4aYXDG2MySFJmf",
  "key2": "5kgB4BVi5mucc6RoVBkAovE3FS8HSH6wT8HobR4wqCawxPeLoV4wdDzXobqH8MBiPbJKTop1vNMNZ3PChz7UCsUC",
  "key3": "2csy57NwRdd3ArqhApLx1Jvsbza4UNEazCZDuBrxNFVP5iE6xtwUfN4AE6EnRuD7gyVC8FtUsw7iuyZd2V7dpcif",
  "key4": "3SAbqq6LGXTRKsDUcQcR72UMrYJtMiCzhrFeFqvbLKiDejy4Dcd7ppUncwLyXXw6ErkTw5CkQZxPoBwWJWA3UVbG",
  "key5": "2aLAAWMY7DGb7B7pBSeypXR55Y48cELNPy5M1iN6KWKQEZfkTuKoTEtQGWUjGc2hPB9eBAWLFfDYyAn8RToDRMKU",
  "key6": "3V4gMrmbJwFyKkpHQYBaFrd6Sg4zrBkpbd5PcoLHfrA7Fgwk7ak6ZX3JpuPiVq5r9oufhXuUPZMRRP5qL4Jcj7wD",
  "key7": "4Hw99jv4zcg1EViNMq1oKWoJK3qwm5nVR4VMeQRW56BMy1qJfJXZFSxMZsgB8RQXuo8UbZAmuBaR7jLBUzWYmTid",
  "key8": "5QC575YJtgCYgyN6VB3gAiiuNDtNogrbqgTTzJ2vwMvVZaxyp7hSeVdwwCB5vLxE2Cvfsr95fkFYjjYPQ2fpTc98",
  "key9": "qsgrbt5ZD2L37gnEGkc9GbSZEo8YAa7EAZWosNpngMnPemrmS6EEFjnp8K54BuvmsDDuAZtYLu8QTBLnt8twjxL",
  "key10": "5oKmTEiifJw1vUXxqxmaJcHcEfCsnoUozxiLhgShoSpekq9qVVnDgu1JvQoe2XYVU1uQ6PTgAqLiXUBH5ZhBBtoa",
  "key11": "2ouuqxQJJCbaxBMd7scJ7kSHSEk9fFSZCnNQTM5JetBJUiDHFKFktqpwPrTP5jEHBghCTH9rPRVVCZZjsXKRCGhk",
  "key12": "4F1oWZb5r9sCgwgUky3tUKcpAKSVWUwXC8wFautrbnHbgr46jB42QYUezdJU1ArSdnzx66J3FZAa5e9Tzm88uWRb",
  "key13": "5UW5REfGqa5nyKuLgAGE2hwTXnMGwPh5BrP69BEd63QkJnip33nhMDN9JdqJ3pJzxu2dYneLTHgjL3VPVgNP2NNs",
  "key14": "61b5k2kTv2ZcWN42MfYRMFzbCKuYuBiR36DgCiBMwjU8r58Ln8tcP3tLKgq1FaciE7EJfS2ceH9r9MorMcYHbMxu",
  "key15": "3dGcwuycj8MTpCUTqHbzHfHVvLeFMwZ2zm75wwsfPHZ2tH3EaZh791diy9GhyjgFCGJfGxEuUyciWWW35avvNhsa",
  "key16": "4wsMXHX4GS61MUMxNKJkdqfKs9ubvuVrgZdrw4x2Qq5ejCvHNKMNoYDktYAVEnYScc51H34DxfNwopZJjA2dZ5V5",
  "key17": "3GKZ1KhRrEnYnbxKvhUJzotjwCWkcAumNJagwqChJxJNTuqYsboFgUcfq5T4KVmHakWWqXN1gddGkAPNMM4vx2pg",
  "key18": "YJ3xN6gVUNVnHaq5Ag4uTj4ncqjrodjszAn11jofSge4teQ7Gv8JQ694ubSrZz6AJ4hD33bWzS9ykREWYkNy5H2",
  "key19": "2AivZkQ4rsJ8H1w9auzd6VeSBWQJt5rL3Xd7LCoYPUMcDXHEujqqsr8wNdVxHgEu8UciRPJt8EwKaY6BHmaY4YhV",
  "key20": "3kXFJm6hzdHtLCpjtfhWbY7Aapwz2YH15yTsG9ZYzMhfPZnfHZzfkWs7dZ7GpmcLVHhcJ9PNa4jFgpe4Ewt2YjRo",
  "key21": "324CT41DN1wXz85GdWCerVLnPxhuzuxDedKDmXyVxepvP1XFbqimLA8w7p8SV2xJWWRRAimHDzBnqvqEGEHKvfPQ",
  "key22": "39sWywZ3z2PyQDX8g3kgFomsdkSDd8pGuMWoZf9BQvj65hmprXaT4SPzoXVnh3RGjSZo2bBWLcas3wKuDw4UzwX6",
  "key23": "3cQQTsDK4xKah41v5kWympvd5p9aqiFMu15u2dHDR96LV2Ygi9dVzHJbGLKKNh4iCKR8mz5HabEzaYZ7txWkHRjR",
  "key24": "36o61HDjM8BV4e5wUaiKtCZshPKGwMt6wu49jSg7AQt2RRf9YMboUvnjjj4MZ1qJYrxQhvgWv8kNt2TAj4M8vMZ8"
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
