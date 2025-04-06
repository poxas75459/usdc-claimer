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
    "44s8jTkhJysgaZAtEeaW3mc6UEdNunbd6g6zM41Ywc2sgZquP3wKdEiG2VG4dE2RSAjuHivUW3FpQs5EHScrep96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5omZah5T7yQtHDLSAYKLpkdDVH5A95AL8waVnXJiNAvU796SoqzJAJTTkoDMGrqEaw572rEbea8KDPW693z8Gzps",
  "key1": "2iQT2ecxGvtXdMdo5ikYmGRxg5FKf4gvKhBh17ghkq4S3C51zcHC9zbdLmgbEsG1RJtoNwbw4VhTg4rjURQyKxHK",
  "key2": "4aDfk8hHq89KFmDZ5BdKm3b8h4H931bnmra61ykzgJxxjbvDaN8e5GdsvLQmS4CnghDHWfBbA5WXmABPV8uhuph2",
  "key3": "4ct1oYrvmgUjZma9Z1ZYK5jdtPwKnLM5KexNer2iukZcBEp7X4dsMqofFh7SqJwo99FPAmqwXUiYCzMr92gv7BKn",
  "key4": "49gMPWgNJXV3i5SkMwqvEaUNjKZtjorCo1CquDnKYAeMVwX6yovJb84aimujTQebRhRSbw8BMN9pqpmRtz5fR9Sd",
  "key5": "46kFMiMy5UfzKWcik21MwPeydQjUoCVNSSXDC7LUjisyTUtQyyucEZ9msQsRjRr2BC2155JEKFCUs6cpnbL11KQT",
  "key6": "5kN8oUdKPFKR6FomSrgbL15uintf3P2JZ8Ra3Q33rfb5KBZS5cDqgJSxLAjsxqhRuFUDLois2KDSGwaxHFnT5t6t",
  "key7": "4qW1U7Qt3oG21Qr3X6tQMWkVPhhgerSANSBXfDSDApnBLkmS7HXH32ZECCnxgqVin1Z5Ay3ogwTeutduAd1xrn1c",
  "key8": "5qfE3gmUvmntAfNRqxTNxixCELuGCptUp35wEZrhTBg1HEHH5gru3JBZyvRDPKxB8Aqu7ye141W4a5JogWRkQJar",
  "key9": "3uGX7aQfWFzVP4ubNwwr1zN7g6eZ83dXgS3htjXwU7GF7mwW5JSjupTdZC1NWRCHv7yGa84D7GE11uQ5PHJ79YpE",
  "key10": "5kDuFShsBRw1XvsZiMHShubz5v627bD6VkRkYJMx8hd52xMuAwH4T3oyMXASuNsMyWAGQp8iWywLfJ8Rth7AxNkP",
  "key11": "3AqD11Sa9tEaxBn7GA3N9Ac23votBjnGgfHbs9dDhnMpa752cBM4yMdwbTvyoe9ruhwJnEgLC55oFigFtkZLgFXh",
  "key12": "QmJxajRHmANaV7fQXHcN6DPr1RQS252tCSPBheZYmaq3nEArEktHoco2QahMZu6if9oRmWmcV6aXSNoC4F92TmV",
  "key13": "ankPmzQaqg9xPserXz91LWigNcAq5MGQvgaq8zwJ1FjzQE8DE8URvBRQKWDDcygbJqnmcniy2wBkiG3GgU9r618",
  "key14": "2ScQVR3R6n1Tc7aVSkh7eVxbGAtwB3DDCeFceztBcDdukku95adWKCESU44jUvF5G9ntwjcMLXtkEeWWSwXh2EYh",
  "key15": "3kWW76UbyKyDhVrG1YCwL1ZQQuc6dD8jDvY6AGnTFdzUDicLmMW3oqFjZCuXuTkXqy7MHMohvQGGxxUPumzqJ9q4",
  "key16": "2ucDZezUGJt8RZk3xzDe2XqdrXQs4QWyAuAnXth7MZjGy98RVKpExZwT45C896odMQEMKS7gXXqMQMn5WWUZFuPs",
  "key17": "4sWTENqP5EGYGcC3xVghVvjGXqWHC8YW4TfnTREeMTyzfMYBSVehwZbFjrXasTBCCDwBUfjo3usGnENVCgFRvjWr",
  "key18": "48cTkNq9qc8TN4mK2YUjqRvvBygDWkDdJgx7snSfZ4aCQxPP9qLSZv5z2vs5cJh1cxgBBtCehmTQjiTefLUvi7N9",
  "key19": "qztcqRH6AzsJqLQCMyxGJ21NPRXqTWfkmxfg1NY3aTo6XyJsBJYNnVav8ocPGJptzCXKhEDp14hHJrPCSJ4JnN1",
  "key20": "L77MdkjZQzdBKzLUuh7TMGifUucJ5krnu7pH2fMk9MsqyJZpP45ePzWw3EPNTwvWCY5TPbY5ZKCHqjcW7gS4XH6",
  "key21": "4rQddewF8KpbS9gzSSQaTiS8ky5PStMAB6Ss5nui6W7jqxwZkYDMr2x1NcvVYvykwkc1KrL3oNKad2Lx2DdZt8kk",
  "key22": "3acg4rr3MZSEnc9EWGK9VXpnLrHLgWf3SJgGDJ8YYNPp526vfj14bWfJSbR1MQnD4nzeTkfmmZGg7wPCaDwx1HAQ",
  "key23": "4VGMP7PG5rbbHjJF1LgJjv7zj6mJEo9a6p1HXeVgdRrM4kn9renpUE9KgGf1TMsa1i22YtVD2ufTB3ujvAR6ipJU",
  "key24": "37bJY8gPT7Ft7ZwXZdAqHvMTjLm1gwCtj23rNkdHYNWyqaNEofQNJgLtJ8knoqGVLiLTeYKZ2dXHqZCYze8m2nrZ"
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
