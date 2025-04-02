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
    "3La1tT2qddRKp2cJ94TX5wwACFnD7Y7gKTW27QKWTsWgqV6Qbt2EuNugm4o4beQja6HXszJP3w77o1Auu23j7hPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28hPwkkc2cATUR51hcmhVrESHVYh2yNqqcsFK2VL94YNH3NLAYJfzwsSUWHz4vYT4VXPeEAUt5m2DhyMq3vULEYy",
  "key1": "58x9nzxSewyDXsoBU1ZcQfMFYj7CrmM8Uwysb2zNxxBeam94zatpoekRbjNbAmSB98Wc2R1KdUHvbacrANSj32Lc",
  "key2": "58DrUVeJa2eJigX9cSYzbakjcLkKkTWDKN8wyVKj92ukwfBzgDVb6WxCskbbkdnwmFQMfEPX5VbGgruodBQF7P3F",
  "key3": "2YYf8tL1oDhcvgnaKpVsnnVNtAj7BW4J3xJ8LT41oHBuxMxd69THabiDNH2od8f4D9oTYxu3PwkkN8P7LwiYQvty",
  "key4": "4b5MkowG9CcugC1aANj4796WPmhPdYjgZvKaBhkdvPQsREx9ysjSQ23b7aoaJLhz3KxLx19pdfF4qvbKAqcJ7isS",
  "key5": "4T1vJ8V68EsWFM81KJ9AEsQ1cByWkN3K3L8gdtDFRCNnwkQYM62igGLKTYjtDnWdYv8G3bp6EwFWiGU6EXPbMzv7",
  "key6": "2zXRdX3kRLKXf9bPWNdDWbahhWc5FgUhTc828821vFXBTvWaijcQyXC5EqUGnGFz2rs1bBxEXrsqQ3wFQ2ZimvYZ",
  "key7": "5jEq2eTBijfwh5hacjTRXRDfp997xSvBRUkvsYRt8F4G5TPWU8GDrtFoWKKwbXCgNnrLSd4wPGjfC8ghWHaK1LD2",
  "key8": "4LQ5AUjt8Wag4C7N1WVsMA5sEMNAz1Tg55TkSN57Heor9KbfdqDC773NtTybXKVnu2Y5MLfdvz6Gy4ZpsRLmH4cu",
  "key9": "2fGfrGvkAC4EWLFrKgWsghfuvY1EqTAHhJdBsm6yUsVzEJc6ktw7CvuXWEyrXwPZsKN28R2BVkisdSwYmLcf6iR8",
  "key10": "5G1HTFViGDeQrf6XZTdmF2h4NrUFa8ZEwUj5uz2Ah9FvT2SP3Cw7dUMfgqnFjYk8V7Yh2vRJVKRiqP5ZjGxvhbEd",
  "key11": "xPbqGzX8R1QEw8t6aHbPkGg3B8TwNGVAeNBxnuERQGsrEopJw2J6JSCs5rJNnQjHUWkJAuAn92KM35EARMjoKr3",
  "key12": "64x9T8tSPs1EZC7izBuLgK52iWy4C2edDKsYiRjr6rfu2Tb8mbkQdasSrkayFETuaR5n6292o46mqSnTMfVyFdjW",
  "key13": "5zbfzDpWZkyfdDfGs8ff7SyYcJkABkhM2vDLzdbJuU1AxFSSWXkJNd5xHZd6nR4WpBekJ2trRBfo999UWUk1WEE9",
  "key14": "61SfJ99Kqdj35FngLHwc87FN9Uc2Bn2mCksoKFzj6VAP8gosntfGNnL9te8RBVfe8oBRZWE2aAKt2r8K19KytGkv",
  "key15": "4vonEuPbBCCjtYfLPTApmfP6rtsYKXzL3FWwoTNMVRVaLAKEuwwAzvgwHgDFtfzHyexcHFEhBS4BtwsM3JUT4cYk",
  "key16": "32omVe22MMdGafM9CkC6vYkfyGfErYSWp5fwSoRJdtgLCBsL5WuUiZ8gfZ32D1Mig9AXjCDjV33Ed5eiu4wMwrCa",
  "key17": "5ETf6zG9XTuuZ142VZ2ZN4jSqT8cGQzWkVoJywb1MhVAokcX1YaWXB8DnigvhnqNx1ooaFBprk7ZqyYcmMg3XitA",
  "key18": "2rLHtN13FXqG9gCoznGvMUojSZUCti7qjMnKWo8NEKXHJYgNQYEowWUJ1YgapzDDxRp6EhVFou8QekTs8NER4np6",
  "key19": "21epUmdYVo2a8ri8MmKDzjqBwE3y6adJMvAUgy9CnHPTKzBkY7eucDe7c3UZWiW6HmM9utFzAQcSmuJYhNoB55vJ",
  "key20": "u3UxxPtZDoZbEh9KM9tVkGTTNUG82Zr8HhRnDp2zVE1L3HVqEbsTbPXz6C3cgN1PDgZ5sEVzNhJdtkgFZQgmYSs",
  "key21": "K9meTaLAZhPX97qh1kFyhpNLQkC8a88WutHE7QoSfdjzsCSW26erUcAbLJ4W4uevKVpXURPrLUNb7qDhN7MA9h3",
  "key22": "2tsCNwLUo4jd3CAr5efFUPhXCADMPwhGVkY3we1agBGN6VvzVibCXdkSQNubBhTwyprRzBzjG2Kxn3TP7SrrTQuW",
  "key23": "5ZNh4x34qN4NonQqfhUvHrxXWkS3eugNfT98CovfK4L5M89UCR2UoiBW7oDaJ4yM87nPtSHxWSGXGhCu8Uh9LByA",
  "key24": "25pXSRFLQTRa1qQ3GvgAQABejiGMRiFA5vPC7gStreEMEkFCqjPUpVebpsvZeqw6TNKpdYHtgcW1oXgobpQt5u3d",
  "key25": "5BJf21BmRhRVPzVPtPpHcWz3By5SM4w1srEVtnQqW3VsQH2Dx64VvgGeyHvjCgEpajMrr8pigaQYLhML5Tp9TRhc"
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
