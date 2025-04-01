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
    "3R4NKWwD6XqZjBb9WBQgTav9aYbypDmnredYGt7NFNKRSUqpyAgZTkCwfEQZ8B9Hdg4zXg9qA4FN7EJhEXch3oYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lo3i6knk9Cc1HPq3VGNniyPXBUm1za7afYAajQwTRX6Gxu4n7QTYUQWJGfWUZiBprLsg7eBgS12FLop24oEwyVx",
  "key1": "4mfzmJGH5GhEYzQVdEQoQK5BSB1GnwZQggKjVisneqUh5CZeUQYBWoQmADjmFBdwi4CRBvdtVDmDHbfrw1UWJNaT",
  "key2": "wEgYh827npcjrk6iXm332JPXM1o4CpTPFXZxR7VroRxMhrNSz4cg7hVs3qSnpt9Si37T9QAL1tBfZSj1dgRXbfb",
  "key3": "GcRaeuT4Rb4cGmjjMLXX7Q9cYeVegrZCPqEEjQskhkZui35XUfgsL1LgJVxiq3CV5cvypzaTCW2z8TdiL9hEN55",
  "key4": "3hqnnMR2iHXqGKY6vz5DjkpJ2DEamJKkzZgrqNNFqwpsdBujNFaeps2oZ7jThyLwgwKjUukES1GBKpNoCwdZtG5P",
  "key5": "4ZuSmgsmQr62xwkHbWzc9K4CDBdZqZyqAvfcMiZuHNysRmUyndrp6NgwEDvpWws1EJBkzRz2GM77WhQwYMFoYDw5",
  "key6": "5L5xS2zknhQBhghCghB6vQ9THCkrY1f9tBtUkSNwSAbpcFUCBVW9kj6fyMr4Hi9PNebH4Mns2ewFnUDL8zBLXkX5",
  "key7": "4QaQdZhQNbUUQmhcv9vYQoTod6KJy6XidXyRwcXXWNSKjh1Z3tzM35ynuUxwKrNkXymz5C7boyftcW1zNJAyoT8v",
  "key8": "3yPGobjQTRqwbVAVVk1ukNP4JRkMofpF8akPYS81TpXCn1PAK5TTF3uc1gMQqgqJ4TP2abR9hDStEf2uHsMB4zqL",
  "key9": "4rFnaMkwemiaRZmCsgs7T3HRyH9HbYVGNvfT5pFbEYNTittf2NgsvAKDMvPh5no4TdvCs7ubZZSHhkgST1yoYPBp",
  "key10": "29nawpMRmaiENVJjxHiicpB8xKfvMxqMedWmrB5pyepYgRhFPKzr3ZUYm3yt8R585aYKNPGQWJmZxonXvQKozbzp",
  "key11": "4DxctGVcCGTiYarRXNeJqH3vx1DD2x6WhBmeN2F5juqzu38unXjQrPjLGNVc8QphLBCPUvUjAvjd5yb9ksvaoGKT",
  "key12": "5M1h4x8fiVc3uAt3qphrbUvhLY2d6sQ9FP3k5vhVtX8CvuErdkE7R3k22tm9mr5NtYaR6ooAZjbXScB9wqjGqisy",
  "key13": "2eWt6k2zxfW7Qxr7RbYvNc5DDEdyHV7Tc35CZCc6XZ6nFEi4VwLtxFuiZBj6u2A6a8wA1nEeuuUy2RbnJ7rQETZx",
  "key14": "3ZDLDH7bBprUxXbfec5SC3QKMEGMNLGdp5Vhi5XUrDLzNFMFavHbWkLSTPeHjiBkzDftonQoFVRpSWSvajqDFVeM",
  "key15": "3eEjTA1qh6fN5usQoEZJb668xJqgD1xXa8T9wmaiSH6jFt1TmHv8xFPzizWC8eztRzU3qPhGjpcyEFVL4mTzbuA",
  "key16": "5fAYRfB41m21XQnKXrtWYggPh3CrhE6gEbWTfA97r2pRNWXmKv5pWWpcJtbdWHoMHGMQ9nnxN8GvWJhHLeoFeFW2",
  "key17": "tKKPZspZwT38uA8Q8jEKrrqZna4qsYvYhbHbHuXT53aHtzzSKDYYde8B82o7eLNGX31HC7qz9sZuvwagvMYo5Ue",
  "key18": "4ob26NuRsZHBvszN84jskXVGeYF9Xaxug92bzcHC3yt1FrQ8EXsbfRpS4h7viW3DwZ3kLPSZACzECRCpudjtik2N",
  "key19": "2dUhJkwnxTdKYbqf3zBuHjCo7jxhW2UJxis1sELtVMqTfV7XjGLHLyu3kgbC4kuPkN7bLrGgTP9JtFsimrSyCM5u",
  "key20": "4GRcW8jSouXEewopcKi1VP4jQf3hv7FVFVm9vfMdQC26tfh7dE4mfZdUGXdRBBZBHZfMYZ1nHAQhLUprAoJB1RRR",
  "key21": "2nshp8kLNmcrVtPktyWcdiDLBbB9yHmarShoZ8EiotHbfsYAf8Z27qsbmnSn9jr9JnVY8rYNq9mBJzjcHVB2CgCL",
  "key22": "2Rc1MHK4h7BDRfCpbpfELZo1zgA4V1CoByYyDtmSg3fAMhbA9D83EHdiB5cvNrxyqvrBtY69Ynkvd3MJrvAMDxfp",
  "key23": "59zWutQZVf95ZkGTGpWqEMNm9VxRyPz3va1AP9E2XPufuTxTTxe1FYQWfqyKcu8mRHh4mmejmDKHrrsMZXgkZ6dA",
  "key24": "5XRzup1sBdTcdHhcsEcytVzKNDctBG7e6zw5ow5WWHdGULpXpcunWBVYTqyVx9vpoiDFhgJDquax48NjcVFkNHFD",
  "key25": "2xjv2ujXFUED52SiWUdNKw21Jg7mmuPfXiiJ1yWihgy4Dy25TFUXFStMCCPVGwMkcAJHTRQocLmPyhsTGjWh3e5",
  "key26": "uvBDNhftsBqyW3smwmRGbGhmQmuLhmSo1qsNrY4fzqdbXzz3tsEhPLkXZ6gNjXuLVhduBEdc3ng8bsbRTEDB8VX",
  "key27": "5AAksDC4tFbnvenpVZSY5LY7ZccvphwYBFArcBh8Swm3jWzhrNK9KmNNBG8GwGFXBnwgSox5pwooSN3GzCCYY6eB"
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
