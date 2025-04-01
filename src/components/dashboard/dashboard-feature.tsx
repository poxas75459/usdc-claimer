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
    "4AENyUwA75rxtEAW4QSPqDaYSrPLf2sZeTfL2i9gn5yGmQKwGBQdT7u1JiqVKHAxM2bH8dcdhsoBABtufdsjHHzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dNW5yLuwduA5sisYgxdzm4j2TtQoVwBhaDoHuSTE2JFtViwi1i3zBrf6vQE22PDi1e3ZCTHD4Ei1FL2NnUaJDGX",
  "key1": "3DysfmgpQDA7zSA8w7FN5zBDNgF49RcNbbMYju6pJA64f1h1VxN4B9Ffk9CmoQR4Bc4b7EfNZQosZyP55VHVjqQj",
  "key2": "5Nnoo4eS9UniRPKxWQ6eJfd4xEoeWcrw2bAUMdvr13asTwVt6YECqHChrCN6sdy2S9c63neNMMKUB12PJWRimRcW",
  "key3": "5gyVnQoHhTGFMQdVi2rrQyWhLN9FHJKdQkkDjRZBB2anRV4RFdk8SvGC4AnFWGJ9Jt9AVz2KQjkCFC1Kjz9biL8b",
  "key4": "3NVgp8ZzmiHvkiurQUhpgkynZfovgb5BPBzqyBBouK2zWd7m9XYC55ZY7i2Hr2DyUh4iFKds8cSbGJJek9na5Kxz",
  "key5": "34tc7MKjEXnvUBUgdY4e9E7Qd7C3wAGEguxeWgZqNqwRCARn1tfBu4i8spm55h7THmT9SCiia92MoTL1dF47X2YF",
  "key6": "54JZad1kjoQDHAiUbfnzKTBC3yokwEnCrBcHZ4fmy4gC1uJ2q6xgULxBukjV6n5UiXygJKg9k5TaEvv2cJyLcn9t",
  "key7": "4j8EYcjUD61a8mwoshmmEmPhEJv4geNneYQyNGmkXbw2AjmPmcdErkfRRKS4kJGh2vh9tcTChei6fAG4byvGmcRw",
  "key8": "2ucd73gwDqwryGVcN47YzrnWguZYUreLRrWCiKgosbi3VSPHsBRz77x4Adjpcy5VhrqMdGrUQKScq9Y9FcSEekdb",
  "key9": "3VXoAMuw27xS8nqqx6NUnAaXTJH8123iKQwTBwuHBDv1cg6koV55pezms2PgD8eSx2xYzCpNSqhpibesEcytcuJe",
  "key10": "2ReotViNRQe8JkLGqHiY96BSqWSLk21tD1nLkeLwH8F1k6zk2DWzEMfWbUo7EGzzvRhkqppLoSjcgPGz2rbFxWUB",
  "key11": "43CYUpRErT1Zv3AYSmyWEFcC7HyEsvRHZRAXeyF15gtnGFqnMg3kE2x6Hb9L5P3HPout8NPipNVMj9D7vVG7rvTQ",
  "key12": "3oxkfcRhqfQEMs7es7FVMbNPzsuE3LrYkgycELYh1FKKHVwGgdZdaReHufpxbkHnLixyYSdaHnfpZXj8ackfpiZH",
  "key13": "3KzHjwFuoxq6Qf95rx48AQoV3ykcwbyGG3GaefBaoLiLRF7TsPiniWPVq4uAw4BaNTzVh1kH4WVK5dQ3nXPBKwnU",
  "key14": "36beGB8FU2v5yLD3FardkPF2QvsKkm393Pm1BHcDrdVEMfgu8xtmfTeMymJfRmQh2wsmFPKZMxGu3bjBMeP51B33",
  "key15": "4cXCvrSC1fTrU2B8dVPAXCHxStRqomACVCETQ6stp2c8yNFbo38F3XdSS7BKVsWMekVDSksUSgMhkUbZnqXQME9K",
  "key16": "CyqdP7YnKGBrniTSDFeQy6PaJUvta2df7pGq7zWqW2hifmg36ZaqXPoXB6iBGQ9CgaqJD5N3hVedQ4P5t7PpmcA",
  "key17": "591Ww3wX7QPPYcU7bCDszS8FiVKA2A4A2KfJNNbZLFHGtCgaDgTzjoHEfex2Y6xBZ4wkubNLKDK3PpiyNzBEGe7D",
  "key18": "1YV9PHNYmNxFGZFaaxbzZFzwF2WxdQbthyzvcDvpt5kudBThsxVeNr8Vq4tWUk56r3mHVr1V4ATveRyKZN6s9PW",
  "key19": "4ZejTB8zADcRptEf3WGEZuFxSxwwfbJEm7FVwatDEMvXUkk4SuPvSyDd6bDiVHiQiKW7EC7gQZX9e5rC9dGYRSML",
  "key20": "5S3LVcSi8EjBZNA88xgJdqp9gWXVHqCferzsmb4XKZdtvwMYfg97xMkvCZxyjRbxxvSAyvCEJwN3m3LVD3pGueFH",
  "key21": "5tujhJDy2rjRwcULgVQ76wYLaB9j8fxLLCQAqTfpbugDfLrWWDUujU229BaX2cNu4tLEZdwJDfm3fCqZEqzUjQ5u",
  "key22": "GHcfTiy523KW3PCmZPyVcDgk7SyPZwaCQJwfB6EpxZX9w9EoczfPRJeY9ZuqEswgoSuuXUAgrXkg2JXFKXt6qAK",
  "key23": "3wA8xz9r7nF81CzQZD3DsuCPCe6uKM6NekkUMyMCzUP7TKLtvkeYPNa2VigQ2FSaKYE3BRXc1GKzxJtAYhGd3GEG",
  "key24": "QsqCcAt5Bq3uqHc4kcXxDgCjtfycfxnTAL838xY85bg9Ka7aicQ23LbHaKwozL3q9kUanHLcvyLu3d9TfkHYKYp",
  "key25": "38SLHQfkY2SzUUBKvp8jCQbsgMsZrXodtHiz8mKt42V7ZeUaryCRQbCo7dRSSzk6n4EZ7SNSzYNz6Pe9JGNcfiwa",
  "key26": "3rcdVw9KLRenVu65ERiH5GLA8kHbLhcYUoiKYiwtNJL4NrtoDNv5PFjoaBPuDrz3ZDZ1nAJ8CPRgfVY5L8Zsh2LU",
  "key27": "41n8Uz1Kvw4mnK6SfVWpHiuv1jsjJ3qB5TSEVHSGFyPJHyuBct66iRF4zrqTnSjZtwavAwzRTVkccv91fe1iY8u8",
  "key28": "4nbAoe3Y2g5YY3i5SkaZghmjDDA33krotcH34yutTmqfnhJjWrqYtHQvpzybpZXuFRxafkcaT4zmAgTCVbeXpjHm",
  "key29": "6Ch2pdxb9pK7yFabmutEtpYxxA7ER5CqiNEaPFmLgepBNs7hDuwrtA6pMBqtQMTXbkmA8D9Kkqvc9ATP5ANAoUM",
  "key30": "QtyEnXsLuNTTLKiHkYLZzRygNwoKy9utUutXaXU7D3Zz9MafokJLdxHKKYx5Lq4MfW99b71nz4M3d7L3m1Vb921",
  "key31": "5cmV16dwkhq5tqL8MrKJC7EVnaXDk9GmghyS2DiStV7DWiPFggerEggS9eKBFQZvDX9yuuqyrALZGbwzpkimkkgr",
  "key32": "54y9yZsVFfyuxtzcM3bP85ccpa2uiKpZRAuDykEMMaxeWdpP2unTJJBuuikoc4tWxN7Rn3Y781WmUkPLRfevXwnv",
  "key33": "47vHkzQaJfUN8Lg1YRh4NW2NWPKGGui2K1ukCnrNR4p4c8GqXKYuTDLx5YWdveC6gCZ7GpAJuiA8LCb2kVBCj57K",
  "key34": "66EyNAmspQqp6FDN8cfWL15DyVvHSxmZKAFMx2PpY3HB7kXKEzyDJXqHRARWV2qtLerCE4v2tYfPDVwHp8AbZuHP",
  "key35": "2kY2x8rW1Yri1tAt1JDqtjJbZbHAoHMpS7sNxw7LgB1TKYK4eXLiGNzkS3Sxb2S6kz9PtwTxAmzcVRBd8tPCiwrQ",
  "key36": "bFPfrazEQ9uH9xVQiGvMEFCCXhk7xTyLQzJxSn8BGwL3rKogbVp2jZewoVuiLRJogKeAMxUKG4jeeEKDDRuxe3T",
  "key37": "66jNFDwfpykBeGnM12VfZHdxvPrYj58AosGHrhxhJa5YBoKBgb6Ng4zykXxcqd7ccKYJ1ZUgVPJyYr72sUYmCNLn",
  "key38": "3rQC14HZYDC23aEcodN92Am4NzboyhjLt7FrPSkf7rnm87oTxqriU82x6vCm5Rukz4t7129z1xWKcnKmfMiS5Z3b",
  "key39": "fR5XwJ5ifXtv3XKwtDw8YRVjvNn3LDzJjbWuptiFz6sHeUYB1KqRzSexJchzVvjy856nE4XH2aKWcoERmz5ewSb"
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
