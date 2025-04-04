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
    "29H87RbdC99NMQqz2wPrUnuuxM7y3E1R4pkX4tcZK7UKPmnTNuCfPxV24QYSbbszBt6igZdJwEu76f3wiUrqFQNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHspExjWhTdnHQC9MxVD2Z8EpnCyvcF24hRG4eJnUPng9ibsazrENZBKoAMU19ER8hCBdfQzYBy7skak9ES1Dnj",
  "key1": "4ERxkLYVBFMDE58H9uANKHeUBA2oXEv8TLxo6Ehm66dusZ197HE2CavycpW6RV3b8QB3h28ocKFAnCBkKmD6icc8",
  "key2": "GRTAmc9XpZxmuxcamFbaVihM86pMAr8mZwwm5kGHJ264LTo9fbLdim7m34LfM31Khf8cmEmZfhG4KkfoL8r9YoD",
  "key3": "5UTXKNPVs2aq1vfQTCmNwbmJrJRWbFvzWQ4QtdEfTNxoED2QoGgjBYoEiph4qQtSuAabrV3otYGLqRBzedRcnSD3",
  "key4": "5hGvWgv7RUxe6cyC3GiwL1r6TFve7X2Nht9rvXKgNVedaRCo3DmQVf45ar7pPbqbXepb3GGcYDF8JLo94xJbACsT",
  "key5": "67W62rD2rMp3Eq2reXAXPD3zLxWpXEU7p81suDhjyhBEkhfZTrNUCF4Fd8VfXX7wFoAoVarGHawqxf2wrroBGHZg",
  "key6": "gfjs1jwT9Gf2FMJsjzcgfX825RLYDxFrHw7Ks3VKNN718wC6Cwekmbupby36RkGsCwi2DMYUtxTzmrgQDMmkaYA",
  "key7": "dAMgYPkK3HwNC3tgWCAsV7x5xbbfEifxW4AuoNy4qvVsNvteJdoknkK9NwjV7gdX7a3hekXHoEAQ9LyVLNGEZVB",
  "key8": "33wKhHMfS3XnA7SiZc51yDQ7dduJyLZYCA9vE8us8eHigCDLFmweMdcEyX7vzuab6Uc3TMgQm8u9S7QTSyM98fCW",
  "key9": "4kwptVych4YfMqfru9FSvYxXjxT82J3n3BxXJ6JWjLfWPjWCGj3AYiMGNbSkVDzpysnaXNHhSgA1q5YBaG2fELgB",
  "key10": "2f8evFbbh7RmYpvw19WrBwxfkU6LuhAnm4wphPJjbenXwn1ych4w9pEwCcV194Zt348cNbCB1oRf3p2XF6yLszwB",
  "key11": "531KbweZD4MoewWTuqTVV5Q7V5vMhsGGdkprPeb6xiHjYfKQSW2kaaRKm5ZVD1fVKa8j9xiGLithvcgH1v9JyE55",
  "key12": "31S4dvc2DxJ42acGAzt92w1b9aMtDQAwu4A63brwJkV6xj5ZXvt5PnmaX55gMSGtvQ3fTV9DnmvzRGC5RNLFWB7W",
  "key13": "2HNvFjwNiT9i4kMyA5FpV7qx728Kaw5n8uZAkcRe8hFq8ReSvxUxv8jsmTQfyfgcdBpyj5PgquQ18h1U1dsokLwC",
  "key14": "3i6fGZc2HsPc2dLfxkca6gVmQNmRy9iZe5XaiDG4CJBG3TzRNNAC4EUsozbSN2r76MZp9JjAuwT75k41mEHERrF7",
  "key15": "2Wz1kCnKG1GCbMgACqyoM6C6pWhAghqRK9tPRrUhqEBriY7istWThmgDz8tBAEVhZhFHLHM4yJjiGm5inBKTM2bz",
  "key16": "KPzs391TYT6xufWTvJZ4yXD9W8gyhcLg6jprqBMSpibW8x8o9QctVu1u38H7cPuDddAQj7cmxLCGDmDgSrjrnzK",
  "key17": "2R2tGCP3sXXxatbJVsv4oRjFYqkqi8bSLGewVvisddMn3GkHRmba5MtVxLvXJEDvjBdLXnBN1poow8kV8igGHDJc",
  "key18": "5vFMiANxQrxpQxaa17WpNmigns48SHaAZ82Jj6ZQheQRwLNhi9P72CdsfmHDfoVUtUwmdRig9tuWY3QWBy1gpLis",
  "key19": "29DRGkenk2xWayoCGwTUeYiUUMQC87T57jU2yH5tCmyuvZKxeoyCxCvXYSeeRRqaBPnr7htZecKbA3aSVgA9WXx2",
  "key20": "5FvMqDoZTy8jiXxBBJTbHUScexTrVoVG9KZE4Aa6w8zqRKJN2exbVYcwtJaewoUrHeBXorQSeioUy35C8yTG4hFG",
  "key21": "3wovivFqTmViNPZNyjQLKxnri5ULy7KFkrbLx86o8VGAZkTM8QPXcYFmUmi9ijBxCJVXg3tpnhYUjpQ7zoKHfC9V",
  "key22": "55p4zDnqG4xoVwRxZ5aYGBdXU3J13fbLZwJPdR1AEda9jYNEfd2s3qpNRBbZMbYe8LzyPH6nhh1Hw2gQXKm1vcSM",
  "key23": "4pFnzQZRS9bowEDtw6qJTZSfnj6xTRrUuzUdhqZ1Ei2HUMbeGTHfvQ85yBFUSQ3iN71fkwz6cJGMLDW8JKpjuczK",
  "key24": "2g8Ny9U6QAWpdoGLkCoWNdJduN5a1HC1SDE4t1fvXCuZ1Y7rxW5dUGvNHnLSoFUrNMnwJTcATq6jE4Q6HPmUunMn",
  "key25": "Q4jeU16m9wKjHnGBkfT16L4qZvtzEA78F1ERDZJhFJGM1Tj6mH3PpznCwtQcYPyKgs9csz6mxvtJLPixrA5obG7",
  "key26": "51poHryWwr2djwcpCFk9X2D9SBUuxihha7Mdm24VmPfiZYWawsgcYKi4H7CpHzHMznpBMFfopcephVmndSZBRpvP",
  "key27": "3e34Uj4XC2oLsYKzXwUuzHHsLzWvaSzWytZxdFDwQEhAWJfZJWC7Rd2pc1v3uGXz7rx2UvFV8KgeRTP7gqqhTmJn",
  "key28": "5DsFUKuhmmRojqpJ3QJwUJCvkRL2tsHwLHS3baZyA3dJH7pk2PUKpnqQswMVXfD7J1AuccyF4Nz8NnZxgb1McgBP",
  "key29": "4b3BiZvxBH9Y5RU1MrZj5VeZJmR2AwGj7GBB7saxXND4AydD9FV9f7KyV9xYh4VSrfuwhBvqE5pDKNZ2R88AepHh",
  "key30": "3bA9gTPGLi5zFqrES9aF64szT9hWc8r7jL2YhnrX8ktQ2hf2dG4CnfXYBD7oNW9ssFAKYBiwmwYdZ32sdo5LKNBE",
  "key31": "54dig1h3ppP19VxsodY4THmkdSXXH8tBM9rS3dRZr64NrfwxctB3z1TxLNkTHWtx6ZgkE4vorc8qtRnPNUdcmEut",
  "key32": "2d6bSUsdR7vBBx93KVQvcDYyyVngt7gcwXmGJbsKDUJzXk2bZKcjBcYopjea6yEMjB7jeyrAJU8TYzGa5FFsEArX",
  "key33": "5bYGzqdyG1hGVGUx3foELYwtgCw3EYUna3JyYdGYrTu2aXJVsZykEWJSiqw3ZcjEtr6ZPH6seMkjGmLftxudzogF"
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
