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
    "367hmH2LdEqVfy7kWW1wjJcUNSxspdhicQEqKV4pC7bQzubquNBD1xas2VqRcMaphF6NaKPiUsKLGoKpVRoyxq53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hBoS36y3NyCA75KQ9uFxUW37WyhZkoLNh2k86RyH6GMAEHGrVYM5DfAieeegaoDA8sTTVnah9AzpBbdv42etp2a",
  "key1": "2CKkKQJjLeoGZEjXesAyJDxUekxntFHuDrhbYSmd52xwd655DgJ58Y6jZn6NrvWpCkagfg5cgrZiNnjFbK4Eyudg",
  "key2": "Ryg1uG9xwJpXrhKEf7uLpPKPPkuHmcjZts3N7xARmZMvfF4kTjRCZH3GCGmeXF1JLJRWGDpQhoTa78BvX7k92D9",
  "key3": "4e6J97Q4rhJNCU7LUNMatmkxGQe6BjtXpZJ9fwZAp7pmvWUFMiP6K4L2dUwWMKPiYPXTtZHV5QfJejaDMUQEUrJs",
  "key4": "643cHfnc5oRoiDa8EHGmDRSqx5cjPQskAXsTB4eDphkAeuhuuLcfMnNnzM1MCismHRJVfKs9Zrz8vwiXA3WuXLfv",
  "key5": "46sZAQg2XwHawUPH38QdzfWYm2cDmjTq3jmnfU6A8hQesKm9LRTzGT8rpzXqCwdbPNa2kjrrqtJgaUkACj6w6PxD",
  "key6": "2tGFpD64sUEkAY2SAKxBeTfBLgSzC3GdoW1fndFULZerqmUqpfkPXFM9ggYL2ZyLzqwmRgWgZm5yD3zCUM8fUFbn",
  "key7": "2TkB9mE5gJf3f4zMGtL6U2ZuaEgh13oGTK3Labg9g8gXq5K8iNpQnpVmV3jjeP5zWHzyYeTQsuPoYiBmAoQiqWMP",
  "key8": "621n4FNHBqRir5rNAk7voUm42T3irorjD6XhLyXYk1XX6hCrQTHaxuYB5cYckXBFChGuDv1bvTDvvABfQi3Vadzk",
  "key9": "2AmazKrY5ERgmyWAEUQqbZkCadTQm64ULacVFmqFU8Rm93f3PSAH4C5CT2Y8AQLktrDJZ9t4YZUfUE8Y8sjMwUUn",
  "key10": "V9BmpSpaokR8hbQ1H8G5CiuVpWP33kSM2TGpq5c6NMvJioyN9kkAJbsRWzgUCcStEukJJ7gu6QZ11LmMmysUXrv",
  "key11": "58DdEfytTxroBLfEYUcZ4H2K5JxquEQdBctkSi5hU7rogFEQgk1dxP2aeC4FDR3qJGzVLz2765EavhkFJg9hg2pP",
  "key12": "5oQqNuxTpC4ohEYAh5NjAdxieB8me1X5WqsVo2jB5hiwDRY12EoD2g1QXuQHepJeuH6c91BFfSwaYkptu6NafM9G",
  "key13": "4c8AZP2tfhuWjKDytUyticJZJZiUWrtxUxXJ2pcvg4y8NjBvLN9xMRsqKrRkUFB2YVE7fxvPufP83rujBhCLEEfQ",
  "key14": "4T2UkHo27ozR43UanujDVecrSkViS3kshAvAFBozdWuAdGBvFsSRRzLqi2aQrAGxDFtn6FNxYoZkmvhDXBhh24AW",
  "key15": "TQQrbTiUAxJCxMnCJsX2M9vFjacdkm8ZbS1Nf584e1eR7Y7SbjKiW9xTuN5EapLkKGEtjkMgHatfMqskE4bdpQb",
  "key16": "63YaHcE3kw1YSRVTgwvexSaNZyEWqwtAZ7vr7GsmGjgwHcvxEXjrbNqcnim9EvRc6Sx45RVqeePH7R7A4obdqNam",
  "key17": "4j8HCFqYXfArUnvAZDAcwWCRnCWxDgiz3NXjmS4Sv5izvrSZbWfmuGMXax4bUJpGLKnL5FfJZ7yanG22GHK2dTC1",
  "key18": "2RYNcrQb4xfqXUZ8ZqMSvAhekmJUFMUNExyz9GuPujNveC4JcogqS2Sw4qzT9QYvijr8RQDuX1X4DfrMuqrVogQ8",
  "key19": "3zWFUV8tkZWTejchGnV81DwTkNpVTKaM6jiCA1sYKTt2eQd4d8xT6LgF8qKDg95iCrtThx8C7YgNPk3PXm5CdFSn",
  "key20": "4cpVbc3dHuDoXix8RiW1AsLwc1Q3Kwkd7XWYiQdRWcW6aUMimQD1kZcYEfyT1EjETXBptfHof5y5AJb7xdju96tr",
  "key21": "3cnA2vKiVSAELbLMEBW1TbcyApsCsBVp8jjdHLP1dGYiqaWVxgbJ8DdfMbJfuVXJaPuFbbPT6cEuHxBHjJK4VDFG",
  "key22": "2CavoJDu9JwiqGdoHYtcjqC1gzxWcxZ9GtAZfyvuJboYFKEyS9Vy3wJ7t1PZnR5Pw6KHbBnjtyFRWHhsMZKWj5mX",
  "key23": "2YxuMvkBMdW5jVe3jXAkxs7WRAw4QEhhJbEWtbfQuCteCazPyUnkgMzpwGx56DwC4hF6qYv56h426atf6pqmKo1t",
  "key24": "39muSvrdKQVKq9ga4eLTHS4VAhm7tw5rx8rvRrYL45NVMaMyNNvYAMr8niFjp7wuiV99biCpr2pgyk8vkauFP67V",
  "key25": "4tsKxk2VEq2Yiu6CmW3e4vsuZ2WH1zdKeK8VjyByYzaJbw1BEpAaWPayudgjnL1XmqpFKLqF2e8wwB2Fn6oyLtW6",
  "key26": "64qyqC2LVPtfP8KXXKdd6yYuJQLaWNKMshxLZTYoXKMcbQsKLXyavmFtmNFsETxJU4qisrPcZBx333dzUZL7rrug",
  "key27": "3uZdSZriE95YMj4AmzmcTfUfMM8L6ZzykwQmQgXnVSddCwx1zjz1uAqtoMUyZx6ib5Fm2K7vo7gszcLSXcQGqvee",
  "key28": "33dL2mevm6w6KHRtVDwBeryyby2ZJFSEsKG74e8bo2ijnLuPUa7M25oC4AcnWksZ5gSA5aZUEDGJ6atoUAKCBfT3",
  "key29": "adBUPHUMXoV9gxiZkUxSat2TEEpgEMv4cyCge1xPcfTcvhPszp6iox6bTKw71xZACdKRmEgtsSoi4eBmuRC8A1w",
  "key30": "3cF4Jk57jeSgT7ShFMMSgU8CcNX14QYmrjwZKyMiyVrD789GF6Px2C6w8TuLwxZBLnsMCwdNh5mMRgeyhnYAEiBC",
  "key31": "5Ekd5oxfPsbJBRwy7PE9KVJTPuW48Nwmb2jnEfP4n3RnBa8E6TB9WVHJCoZqL2AyTy84ZMn1n4wZ98CaDyj4DHvp",
  "key32": "ru8rc8bMkGU2crz7zPaJNQWVgP3ianwf5pNnmCVPEJjmkdcguyedmVwWXbn6fZ2dLUwdXbBKDNfPdcUEr57aMBW",
  "key33": "5CBqfEv7B7RJEnr6tUbTMbbXX7HXxTC3jCVxwRr8RUcjY5ELon3RW5iU9EPB7Mh9htqtgdfzewdHCPNCorSaJDMi",
  "key34": "5bjuZeQPzhMoJAPiR48LPeFvn3ftebzTEtY9k518ro63AJ1Y3etJXx7edhrFv1ikPza5xj8E4PFibhz6sxtjVF31",
  "key35": "4aL5L4hzbSp8jiTzAqw1GAAN9CkB1388d9UiHYY4xokGwAChWt4k5WRhGyoS2cuC2gTndbKAZrEH1hDp5Zr5Vtcq",
  "key36": "5kwLtLmRrS42jHw3WkgziupZ33KyfV1dy5B2K6RFJJ9We6bA9RAweRFtHbBwcZVuWyc9HtzndpSmfS46N314JoWu",
  "key37": "66YFiFHZBTBVGr6vxdz8Kuo3nBczsLX8CWYuqmASZeH4zFr6RyRnuU8fuCYkfZDewE2kkXMTU3WpJjb1K9mzVVAa",
  "key38": "2fzShvt6ELFGr81WdokudhXdf8PzBfwGk2JLhBUKj5UYjCeWwKFeU2podaxgGYFFoL6Wwstd6F6Gjg9idTRC6Hpc",
  "key39": "5q8HTJDwijtoccMuWZ6Vxe4fuN6ax5pNnQJXK8tYCBW7rRkCemBB2fiRA53eyH1Kw3RbQNAWJZ4j5tCr1BtitSZQ",
  "key40": "Q2jC4PR3imwbbKTv1N3ActHr98CKCtYQ8oVugcZtp3FHWPHr9H3imPNeyJPrBjXgTMi6U3rkDq56JL3EV6c5Wxu",
  "key41": "59QooZNXhvmsbpFChYhgZuqZrcMFxfbuz5B6YRdHBqdmWqT6dFzgSzGU4NV3XLH9x9Au5LyL9uZas8oqqredMA1k"
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
