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
    "2PhH5Cp3yQF5t3fxJSmtjKSavhJUigPnp5Nt4pqeN16tte8FU3hG8g3oVpjjUSjy5i58KhUhEafTa7oNPWbFqDor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54qGjaJp1W3ENEjPAVjAmEkyKzEjwPfqZ6yrYgYQPRyijXD7xVrV4JMLhebenaTZhHuatzLPyqpVHHqHNdz84e7i",
  "key1": "2b1PUaTu47Kc7u5Aa6FygEQrEebn2owY7pNPjiAhjRK6K2qserscXDuUH4M3y3zSqqQq3CZ4SGUuoka12pEFqw1a",
  "key2": "5vHuNyqfGTBtUvAHF7qhTjzTCXKmcM6mQKX9Q3AAFK7P2K1AsapD1iw3cbH8BJ7fbZ7mb1w7D6EoAQQxWgxGC4K5",
  "key3": "3b5DZnnXjJkEgF7YzcRrTb25QRHdAFez2UHL2iunoWzJXVLyBKK6UoHDseCXU6v4QcziDghLeTbmMu3FHG7niNbc",
  "key4": "3F4fnZJg1XCiPAAgKqKk5HCT864y1u18Wvkkxnvds6k5ysxUi8QUw848sWSbM7qGV2qFZVALKoxheVGsWD6oskVT",
  "key5": "nvFnkawxWSVvMXLFq6B38hQjJazrVbu5VZgBwxc63QhTY68DFB4hJkS7ARusbJnhPXy3FGKHitpiovbwi7SvsW9",
  "key6": "4VevTjAHZfuckAJHmFiTa4SPv6qvk8N5kAcLEysY6zMGoViJ4qppgiMfBisaujedStqnu5LiSUoC9iz8aVd1yqJ6",
  "key7": "2o8msddGswCfZsAfH871wqmHeDekn7UYKsWA5KsATycX1aosETvEhGnNkUAsGb2xBYyzeKETyUWGY49scfQ7SVAJ",
  "key8": "5XYQsFC7Y5T9P7JtUboHvx943LUA6KZ9QZiYarZN5C8dsQdrj7LAX97LnR2AqvU5xdPsMbqe39TqA7DsNifJGUDg",
  "key9": "3M3Yr9cVBcz42n3AtV8s536R4hhDwk1S6Fzag6sqPtrG3zzBKn8uJPaKqrD5CwdzfJfBMdHyXZtB4iDdsFkCw5Mj",
  "key10": "3HYUBvirubi7g5eXUEwUzJnCBqJdD4N5CXQvLkgQRHN69x7iC3ML7H4JfL2BYzXLwtT7ovhFcj7QuXius9w2mXAA",
  "key11": "3Ck9zrWWgRwMQZ26Tiie7JhJEuSyFppWSX84H8y4XYQV48rMoosPKALMLRGTWPm97dfHpLetbVrcKe8CuBZUjfit",
  "key12": "35DQXAbRJxevZxPVHunZUUGWo2ZfycXqno293pTMBCmqMAB4kjoqJeSiM2BjH9bij7G4HgVFoKZkd4kEv7LgtahK",
  "key13": "4bE9pkHcxrjhGGpisF7cks3P6Ep5JCkexBeRcKQWeeFB2QyZSELoo9ECcqw9LE5VSfed4ieajQfXhmJLRDQ1MLeh",
  "key14": "2uo4rSbGBM4gz2mc71QXyswGQAh9SfiCnhr5mfRwRQi5MErUdCWt7YRQhHBq9VrEM8FTDQbtBQV2SMpSPoLr9ohg",
  "key15": "534oU3aZbMr3ThePawVxzRZaBNzP8svvBxEqdu3dXGxriGssXGpSG1DASz9Bdc9fGzdM4VrRhYpCiGaNgz4S67NP",
  "key16": "25e7KoUyMYtb6Fxh6TNt9pzNXWnQyZSgAyZZ3riVpBBzNgveaZ8veaXvEpTd7s1iFWiTL5DNTkAkPt3nyao5ftUt",
  "key17": "2hz93mhCekVGS7Cba9fZsDazdUAE8LxsNrirzJo8dY5GMGSpqJnYRnv94uuKCxg88FXoj6NjZhFHpvyeu7yhqsjc",
  "key18": "3KgkqNog9QprTF2pYGtTpP2ynebcNrZ7q1LYLJ8T5KHwebYcmQunoMgDVkAxYrbtkSPHo3vwDULYTfZMdy6omjbs",
  "key19": "49JUGgZTJconDwXajmb1UZR1DK2FRigJYSyuGjmRehVE1GrXwGZKXDTt5rgr9nZVoeMd9ru5PkKeCBpR9vMaCqe4",
  "key20": "277VbP1XHv36jtG4av5o1EQR5guEvC8N1BVQ4a2ANmjtbbX1QscJJVdsTmkcyUpUbdLreSh8LA8XzR9fpQTD2ktE",
  "key21": "4zcsinUxJkoTCjaWjD3fiT7RW1aaZuYzBJbUE9zAbszmjQoVpHTKv4uzysdmthomseMp9U5Ro4jTkxCseQhGCgFZ",
  "key22": "5TXpuHRiynsncMgfQmkTqng6GFRvPMV2ydXRyQDeYxDQwZLnqpA97nDWoxKUr1c3Dc4PQFctGnuE51hC6ui2GPhF",
  "key23": "3kvvTdQJugP1oCP8Rb3vA5h4ANz5cjVeGEvk2X6WnbjW1ehTQcGNr6nkjr6QH3cfP1Xyb2L2fBK9kxxPCjtKLXuJ",
  "key24": "FA5JbAYpBmhpz1F2zHVt5WKg8NDN6uMxW9KJy5yy38EcVbBKZ6LnMMMjr4FAuaHHLyQiVRRHfNYHxybeNrFWBSB",
  "key25": "PVCfjtp8Zr6i2r7F9QSi7Rxabfk7xWySrfLZD6ArZFfRSQ6dKrYTMhefhNdi44mFDfuQqVyVY1ekBpEdbnPp2GY",
  "key26": "2NpCiWuKWK87xtgrc8HqSZSqJ9zkQTe64HQLmVesTk1rnaDrixYCY3Tg9xM5UdRK5TQY1Q5ZTYLVKhDk8QHfGJC8",
  "key27": "4wZTtH4T9gayNXrPrTJFdUAitReJSgbq7VZMCUU4AHZLciz2Ahx6tpBkwuXym4L1XCD7WggwZEc1jeQuuDNBJ5s9",
  "key28": "3rs1cxep1ntPYJfBMvdfGynoqudzRRD2tFy99snTW9hDYTL1xT8N9FWsFvQdv1yNoM4YQFgNA1R7mXKxqZoj5vF7",
  "key29": "4NVjXocdUAZQQk5GszkX9tTPALcTbjyJHK1yykegygHT4XVZ2GjyGBPdGFgAZf4gNTJQnqh8yCTFy1spzTjWpnEH",
  "key30": "5kQo6MwBg68Zpd4xPK5DYgpYrFcbgdDgZrxa2TktLkLvVzhUZEwEHyqHoL38bvFC9MyYa6NHhRDzRXsf4v85MMmh",
  "key31": "4XfKi3o2suc4aJXuFzMZT54rMW67hKLWMKRmjMSVYH5kauudYm5JnkVdN7GimJ5ieqhJwW1YiguJwoHUMt6tHPoG"
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
