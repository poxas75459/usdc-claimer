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
    "2PA8t5UvfQ6FEC1Lr3Ru4rJwDMy1FUhJMZHcYJvBquwK9tQMLPJxc8gwBTTnJs5CK6cp8vvB9cvbsFab6ckyGbgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZ94jzQoUt23z9XUybjxcAmDe3g3BUHtGgNxSrXhzUPrhuyZnJyj3UnUbM6xgzNAFSnfZohSrGKPeEsAqSQd7o7",
  "key1": "hTjnDVqmash1uVJF9Cus8KCKYybzuTUP1gDkyhu3JHfxB4Bdv8dLFfDKzFzBFEHmtG3o3DNfFykr4k16i5hRhBg",
  "key2": "33cuUKAgA4J3365hd1qGAWNr6nuhzsPyqA5tHru78yLtKbF9E9kBPQGVtXJs2MVveMU7bWYN5vNApaokeFvqXQYA",
  "key3": "jx762josBaRY4f4yPffefEHGxLtPtngw15AxGjL5iAuneCKLpwsgFBM4jaowmokudF25M5xu2ysXvF6Bb6UBPTB",
  "key4": "2rH8fidyFH22vi84V2JHUT9Z6gigj1ANMiCmNMqfK775sFroifuUqYWxxgRJThEsFT6k5HrdzAVRpVHSvLLQaeHD",
  "key5": "5HuF9yYp4AtUbYdGn4TuCEg86o7pWqB82VVp8JeBa78tQMpHGtYPbZLnyh9Wcv5B1ZqiJfqSTzdacwpD2buQdZKQ",
  "key6": "3h2tPKVYffWsvGJjsRXtRkpdXwhgDfDXHU9vpXuwFyTN6QS35o774NRwQzXRu3ucduvvrwknyJA46jszwRA1YrUE",
  "key7": "2xKJ9xuLnRfqAicHsQ8EPjA7ybMvUtLq4QBYzRJUHbBUvzNhCpSPpF369yRMtFWFGLwo3JzTnC5Ki2x8FAEPZoBU",
  "key8": "1mkrmgJ3QF4p7sctbap8wKfbCLFCQx14vUftfYjdRUrGMZxFhKX6rWbq5hrHKm4ukWavMGT8Dmujo9CLKRtGKa",
  "key9": "4trJgVSXkip53yrBwJVuqXqDzLE5gMib5JBKYbDrKjPpBjuRUYLXaJyjNEqjV3u2SuuFQu88aTRdcavmpiYBJTrR",
  "key10": "3z8JN9drAJVibwGuv5GcMtEfDRZMuLrCDT9tHLJGWQq85gGQWB4KNNSjUELmJDaxgiQZWumpjnaq7vPSWudsQ2p1",
  "key11": "3Z3jpsXs1nay8e7UaPonR9DMfptex8XBrLn7dru8SUCYLghi31yMSWy4bx1XvwxBu6j8qQPEGwoK8rT9bMfxAeti",
  "key12": "632YgCJ1uvKtnyWuMiRibbiM21UEEU3H6Lk4s6yM4Qu9P5ezzngagdcNNidRopqhFdQ43H4TLj1wBNc3miXQ5TYS",
  "key13": "UZjGpvbhFUB16HP5LcqbsSUabiY9uwbeaFbbZ5saTNZLGBVw1S76JQnNdFKHuAHJwuuWFpZVJe6z66e2Yqwy5fx",
  "key14": "spVnN61prQ5JHSeh4Mh4Fmp2Y4mYGnEm2ABJFhtMm1oKsQTasS6kaEWWq6nwRobs9KXgH7uU9a6YmhrhKksq91P",
  "key15": "aqaVfyPCfVZaBVnbKv7ZKQCiay2eUcFC87dTj7GXZiqbn3NSZU36PcpTP8wJz8DZ2tpqJPo6MP4LseFA5KWGHBy",
  "key16": "5vEPA5P5AQJ2vwDsKMaCW8yF9Jn9pGRxqf5cdPswydRocejCRWRithQQaYchCViVbb9HxpBSbHwQ3UcUdiJbSwpu",
  "key17": "4GADy4S3N9Wfwua1DXuY5a4VhVQVSsdpMUs6M27TMo1F5HuU1RzhGbqBsynDFwLMszSeKDQ9tJmpszADGAbjYREw",
  "key18": "2qtVMc3Xvitj9oDaXJvGE9S1oAANBCb91amhANrWKpgwFExLo99pyGn9WrFEq6HdB3mxViRKCucJRk5ZHtVHQV7N",
  "key19": "commVu88poGjuoA1hpzqvM1qvsiTjTdJhjhrW4JUSUvbTsGkvoNUhoYFM7zCFsXVCZYr5yNZi2Zfo19TKDWW1Y4",
  "key20": "2hn94wFY8qraSQSfhj8tow48vYTy9sMk9McowYFXLZspEH7Dh4AevEBGsYcypoHS4ubXgibMMfYGqRJ1ZKKiquV8",
  "key21": "2tx6zhvNMTGR9URAnv9DHscet3xpeLGoTTG3QSYPcaiAZRszvmGzAccdzSYyVPofYmjLnJVGiYN2GNSxgNZHaQyd",
  "key22": "4uXtwc9Tt1zCYQmdmHPyq4woHjgKWnbDi6wRa7b7utntyYxuhu7qy5N4ar24BSVP7ocrao13e6LTVFmqakPbvGey",
  "key23": "5JXCtd9D69VT9XWhuNjLK482ZwrxWG2UcQCkkyhu7pJcs7JVUvGQxEwxHgsAPfZLe5rFJFMmJ6mew3tp8xnZzLY1",
  "key24": "43SfvSqZJBRyc3D1N6QJnPPvzQiqAD6jQdXPwcogAxLHK7T3qDBNoWo1mStyzzkCSfWPSh3PWAWrF6fiDGSsNgyx",
  "key25": "42qviTbzdNUTQKcCBCaaiuLjgycXdPNHJgYCVXmxqh4Hcd1VNzvmQfg2Q8FjVZiA5vx86T4TaQR8qLpmtk83Ww7D",
  "key26": "3JxMHC4Y4vtYz5BvTsWBGif9mJAQu2vGTfSCchksMrPnrGKRYLJ18J9AHwHCLfnh1E1icanSefoohN7Nt5cKawHX",
  "key27": "2zjtzzs95qd7294RPBZu4fGNRrD2x41AQMuxbEr3QmzVRtpWF1UHnZK4kRvD1ipWnkLyTmniD5gguCJJcg4iNBLM",
  "key28": "ADxoGv2Gix2zYdBWTFXRT4NTt1BSZPbuQF5TUsCKQhdG66Cf3Jht2ygzy2saDQo5Xs8omYJmL5TyGGAzsV8T6tt",
  "key29": "2NmQjX2GZPgaw6SuvHuYmiG7PDSwu4gjRwzDEC8jEdKBkPTDkXVAyxkG6D28XhpFqfWvGfVpqFvd4ww1Hucb2Jg3",
  "key30": "FZKCLXZYMBAsvwtkcjwQYzr5MrhffgRVQLEsyt6QotYTruiPvjysDsQUsFdRfKa1MDKWeFsWPCxi7CnVcuspUwx",
  "key31": "dCA6mesT477tNGs3j86658H9ppfMWyUarekKWfo6JwqRTTrdA1NYPNFdXs5CcVdTN8WFw7B3vp31ooX45bVJRrJ"
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
