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
    "5y7QPfaEDdvzn2YYnEVejGT6EvNxzCD5cjynPgQyxGbk8yuS7m42ue16xhjJGu5qniWjR9knJV2DV9nfvajtZ6pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M3KUqkj4Mp89qHpdw6MWcac6QXrfXb1cBemG1xTkAwTFefvaQk7mFK3cjsxDT1VbUqNrGCW6sm5gbmetfgZf5g6",
  "key1": "4FAPgnHBHGnsZK9gCyfhqUrYbLGhnbBu6yeTvSWw6QsBwUnNXzjkBgFCtZw56TRcy3Ym5eKU2LD1pW5k4y2HXWiE",
  "key2": "2UAZ3JWGGPCMA8vaKiA4Wy97F5z6jjwhdSe5u3Mrhq6pUXUpSFnHotEq8TqAponXBgtckce84PHo9dkECLEGc58N",
  "key3": "4uWC8rRNhocq8KANqL169WRABsXkCcZQDjWAaVL6aGNYcwt7o1JFxPxaVGFg6QveLEhUjX8MNC9tpP92K5KCe1CG",
  "key4": "4EWApfrFTuzcdSVQM3wy2HURkUuMKfPvcqstb7ARUHgxiVbt2wmBXfVnmH56FExQhppmhJ4aECKaCb8Ensbhf2kG",
  "key5": "kYcGMw9pcTf4NS53mR3cVFQGTf6fBdqVZ5dLD4JQUkj2udDCge7qeQYRf6rPkKXGMzmBSQp7GtuhmHoTARMwtKQ",
  "key6": "4cZF7yRvC16cw7bAuNmnejyQoZa7rJevJWqcHbMLqkZ3r7Cg6uM4HtSf1E6FqcXaSCbfMNmLL1eaFJu1qwfwGS4c",
  "key7": "5k7gdwKhh4iwWEfz3iXTjDj27KujLP9GRteiKLYKoPZofRfwzaofFezfcVHbHV5YAk48n2D2TSanDoYsdmZxeHCV",
  "key8": "51AqFuP4293Ham8CaVyzyhdpZrkYgLUuAHAyVWd15BzRx4pckdAmf4BqxfG8smTZoUJbqaXmpdq3fZcd3uHeUKpq",
  "key9": "3ChWGy3dCbrykT1sk7MFBWtx5F32tWKHryxvcd5YywNNgYnBjaYi9MTV7grSjF4fQaFdi8rn93u6iacQCZJDch12",
  "key10": "2auQjJG93QiZV96GG2XVGW2vgZC1GktijcHoun5cTEzVLNC45pqQjw58kYwMBTCYzj97ggYgYCU6EVw2GXFQwmw1",
  "key11": "2fh7wUAFoA4bx1UxtbLJUh3BqfbGTqnB29t7ztdUJXf5L1ovYaB3qmvt7Fgo5M1YPBWhV9aguNdfL9GurQGUapUe",
  "key12": "joyQNsbNLa96uS5j5tiBT2kzc6SmhjRWsFFmVDZSfJdbQCHFHENjuYRkSzmYmmQfktJb4vW7uU7BiRmsddXHaR3",
  "key13": "54cGNqRoSULnNfEGRief3vkNjzJyFJGEdPtMKDRqWUNDVqLJrzeb757ZJw6QLAqfmtjH8k1sovC2cFWWKmA23MT1",
  "key14": "3N6C3hQefRuPrRGzeCHCkpxwt1yjDQsfxKttfkfP1qJtzVZq9nn2pSqxds59hMSzdUgRrUeMzF9k19rsnX4ma27W",
  "key15": "4zHCKNYYx4RYHeASmdduCAvKd25FafSHwWcXk7WGNYKC5gcNLYubeK8wwLL5QAW2zuGZHEcm83uAbyxDrMSYi4sa",
  "key16": "3MxwwtuRk7xZ89zzt7VRvV7zBxV4tWtZkAXRCQ4tP6VgWNzDtmbxxGreiNroKkTixspkuUmckqwtrdWeS3Gd562S",
  "key17": "5BkV3xMwNua6NWXMAUWtYxRXDdMYLcvm1sQTKvRthGkccEHdUVxUfyzGGxwSmZiDEm1r5skbqGfQrprK8vR646Rs",
  "key18": "2Mq8dtqkRLrsLNBmYVXsRRjDqRJVY8TLkEH8Vhqb4eshiZKN2Pqi5rqVXTGXTt7JvM2ZFwgqLcxzxrwKSrsbC9c9",
  "key19": "3rckMsPvV3GuWvpXXC5mfdg9JSUdXx6CpjZtJf4y1NFQkQzbaCkzYcb1KfdgSDveFH9uUSULQaDXn9XG9wRuD2cj",
  "key20": "3h3zntsgeKd9Y2kx198ds8T6YqriufSm5Cpa2JTRSsqGAkcWQzuxheSZBYJjtr4Lomj5PsEUxo91ix3ZNtZBw4EH",
  "key21": "3dFFrqj7nrJaGuRfeeVcCLN4kzWeeGXbaqi3qcGNPtzQvgnj34PQ2LJG2pLTfVttzFnAK4RFpRJM3L57nFjjDMEZ",
  "key22": "48oRiNWm1VLrh2XMaUAG26DT6P7zpFjiVBsmWc7gUVyKYgwY9KnWBVN6pKjphMDK92APRiFY5ineERxmRrKp4kPo",
  "key23": "43vRjtwx9LyQpLC9EDSpLfJ5JHgRfnApw9rUqZrTzV7RWNxHkaskP9vQtWQUEGyTGDaSusP21xVk9pBf6KaW9Y2y",
  "key24": "3tQSQera7sBGWPMimatCQqotgaiN8zoFoUxhgczkQU8cCWSTzD1JCjv9UqRfQ81YFMcjV9nuqRcDmm6x34Z5JxCr",
  "key25": "2JWqfdpBnqm9YcxT6Kg5GY9gTQDHHmT6GwsPVYjWmsBUeHVZDwyju2iif1JA6abYMX77UZB92sG18xx7bKQPzHSs",
  "key26": "3jnAZGiW4YRyTNLfn92pzfuPiqKdknhUYXdMj4epx8NAB6Fx8615NkGXPrgsY4VEX3gAP2LDk6zEcyUwvFSuMxvg"
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
