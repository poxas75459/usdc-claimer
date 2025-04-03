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
    "34vEqF7XpNJ1inXhJUK47KSnYMgLcJzmSbLnqs2bFeDAn6nz2iJ8pjrsxMWcrxjmHNSpLvaxgJzBcoV7ocJCtkLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39dps6dGEeZevsfyY3zPv6TuXEVknQ97Jy1AYEYHsa47YL63zRozyinbySffnKpLssx8DHn67VXzMX3nNkRoqnTS",
  "key1": "23VPH2xhygb6D8S3N4Ch9jLREtnTqeDUkVSJsRudzfxMvtkkybECABjn6KwoniVyKhPiR4AHXXAyFzY6z3hYJVKy",
  "key2": "AWcVxsaJVkgGYFz9hLZnqonqRaAbaQBrbsR96AM7Ra74gGk27pcbrXBvoBYCY3HDFdneAi1toDCb4kUuLQTX5BJ",
  "key3": "A7Ta2Q942GWVCtSMk7vAkvY2BRAWBjmY8PWxMMG6Y8Z1WL5NtWPvhudDhzwo4QXJkS1RArMMn3sHR5u9GzKyhjY",
  "key4": "2SCQkaZ5aaQ26oXty4TXLeNQTXPrJw845mtFRaX5xDbpU6VJDxzFoQCJPWy9UEco3gYw889vt1JZAbvjsYaMGWvH",
  "key5": "3sNGDxRNLMzHpeahx6J9qZk1YroPFpB4PXeExcEHLF5uLTumUTjQY4AK6qDUkm3oUjkRUxhD7Rpu7sBqbc8MSBoM",
  "key6": "33ziHcrzxN6bJJLdu5AMDWeSKDHBhKmH9g1gakuA2BEo4CmziBRHesjQikhJrPTwhXZwb1nRsTdM5c1NnX8dp7Co",
  "key7": "2sBsRjXEcTa59SEFLkXdMYnU9CWbTXPztAE5WLnLjCdGFTcvbio3RBpUzD9Z5PVycCRGGnxSwDCkwrK6vorE36TY",
  "key8": "3JJ9UtR8dzMFwhAiUgN5fe1jKY6jdwLBHus6d1LabxxSAt5Q7CUXhiD6mjtRihtY3yybeBGDhRv3JGUM9ADvoriY",
  "key9": "53jW5SRbn4tBxJWYTsUWtYoL7BgoeePXUnLUEjJEqSR1vf7cJdS2KKXG6mJCt5ybM4kaGbPWK2kGbRrFguC8nfTk",
  "key10": "mZGDYC7e6kMDZRKaMLtskvXUbsWXP78KxkJC5FaAGeAAv12pH8s8sXDkNd3LnrzaZSVyrfNvjhK26VMRxCqq6pg",
  "key11": "2qe1L3y8MBaHPbXTJV2ZiVkSs9zXxtpaaYhKKvPhV2hmnJ1ZeVNxRuLpVbm5a7YhSE8ARJLNPfPMiikixbk3pJ61",
  "key12": "Qs6FL7XJ2ygfy6symWf2qc2tEB1iQx6rHXd1Edw8VWCwtExgvVQBHCrUUGPcXVSeYZimEJNNCDXJspH57rb2ST5",
  "key13": "qmE4mBbrBgf3Yz1i5fBeAPfmJZ1qnJKh6bXsph1WwXe3MrP8cE8WD73NfzAUjStxHDH1jyTZoYq4Va2Fns7QKgu",
  "key14": "5QdhbM6KWH2HbeUa1DbV7UxCc1HHnSPcfZc57CiFU2evNHDYdCZ4WjbBLQe8juh35hnkfCPWoHcKeRgUhBZhQUwF",
  "key15": "41NBx3KZ4jZVCUPtKEwN94GXowxJ1U1WmH3EtMkS3sbkLEAnxrXtz2Ce9c7YCwE1wQrSv55HyCWd1ryLUZmYKoqY",
  "key16": "2e2tzBLA71RZxULTftYEfFyafsjvGKoK3c5z3zgNfKEVFJS88UNctYG3EtbtrhQqSxabrFMaQCAYq9LVKZKw6cmu",
  "key17": "46M41Uh9PRJCyLqJ5FttiJ4ttEVb9C8zf56oMZSvvC4auHxN2nHysNbvMjk3z2TTJJFVTzBS8JJft9utXXkgTp7N",
  "key18": "4DuXDicEKQcfQNJErdyAQy9hBVdBUZiB78fjNdDWaFbZ6tj5UrRbKjaNk2b31SXwfitVy2Ryh2MgUzgxiB5GiEPJ",
  "key19": "2TSNYEnF6cWGb57Vv1NZcEqK568jR2mqhcqkpCkDERbgwzoND6xaLTdCmL37YMEtkGD59AEFHnJpo6HeVjm4Sww6",
  "key20": "4vbEmbtzWyuFFSM7cCMNpAq9efu9Lj6YcNkNqjeMBhB7i2HsAXNMey6V79TW7QU8qBZ7DNgw78qRBLTggQs4Wzwe",
  "key21": "9FrYXnPSp5qkckgEPAneGTHDGh2ev5VfPCZj2Z9SqHuxEJ3Hvi7m8Kqu2c1EdRj9f4TVQvPNhpp9JN5WuDijHND",
  "key22": "2zYm38y58bjkpJ45yT4pKHDYw5C6RonDA3Ahu5gy3NVdvDx1hHy6T1SUMcnLAe6KpEv9TrmHVD1D29hAdKVSWpSJ",
  "key23": "5j69C7xQ8xNnJTwgkdo6i6wbbisrg3FKUjfnehsYKnzT7tGAhUbbXK7JbWuqw8mvpksKya9UH9GiU7E55E7UcuyY",
  "key24": "G3hRK2KoCbCsdkBy2fTRndbPhqKV6bxDAht1n4wCj6CeQbRAc3SnFAnjXf4vWwQjd1WvYo7XiigQwkMEJQpKFta",
  "key25": "3wm2Kap7iQ8uAhf6z8yU7gPm6FLsDnLEWmdkxV83YKqHrd1eAY3D9DRuxj4caLBADo17CQBydJvoTbL9JWyHKagi"
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
