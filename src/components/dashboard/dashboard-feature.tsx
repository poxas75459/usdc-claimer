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
    "kfUeFaDjGfoWUhppq6cMntcnmFkn8yphurhrE6GuJSMCgkJCthc3U8v9vYTh8rHypbpyfzW3zzMcsXdWRD4t9Co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QzGvjyj6aiiE33hL8CxMyQf25qYsrn7X9oP2UUgG8Mk2QFgY3oKoxa8rZxLj4ZSuYURZdRsrkuH6rh8ZsfmnPzk",
  "key1": "54XTbEZnMvHm4aZsJbfuC2vpTss1z83JkTwSMdxcuCg6mWE4hMUcBFRLL1XoYnM3FYm4njDbwyWXhXqisejTTj2C",
  "key2": "65recfmMj767rvmw2VqTECDTJRVSDVUejYiykW69ep4NpSRC3q7c4CueM4nJcFwDgxNAJoF45x9vWgLqUcakoC6Y",
  "key3": "of7cWVJ13uQ2dSQrDmMwsJSfz8Bh7f8PRbc58Vgsduf9TREwihPBTB7rT4PghWd4Pa8PCJKbLQmZS3ZL5tAjCm3",
  "key4": "4HHFGBmfU1BUcf6m2UepPLkXnWtfxpNUHve2Vf8REvNQyrbYAbw3LVa9Xp71M4dXbJrmGJ68hDsRYqaHXQdfvmUd",
  "key5": "46GsbmzMWzw9CWXdywnotvWKjx7s5sdTCmJHxDsnWQdQF9jDhjo58SA8pQFyTh4RuSNGPxFGzEhHLKz1R2jmPhPn",
  "key6": "fQH3cazza1NhGRQuvUdpQUm2G3zkjAaUeeDzzJw5byn6pb9kKkvbiHjVFcAdY1c3NwSvtWqGEke6Zp9w22biyLo",
  "key7": "25UjTnZ1jcUn9x6kjDE9A7xV598QwakK4neC8FeS8QhGwpL5HoaKEaZMrQBqk6GDo7M3Hi9QychVmnwAWV5EmSBj",
  "key8": "yEh2AubaueRxkb7i6Xf9jfEVgtgLL2DGkz1yiy93hMnzsM8ohaYJMyDwW42RMaY76HntCF8XdemskrRoVXu5DWS",
  "key9": "2rQKnzjtyYzMyAd2E2zD45U2TAoouQVgHheNiJ1oy1FymwsZ86Yh1pu65nUL66AYnVggHQY9TNkaUsF6jo9xzdC",
  "key10": "2hKaAcg5rNVbgqMd5yhpDYCvyus4m5UPa3Ps9xELGo4GSXCZcw8nG6jH29z3bCozETUhm5zhhoqgrGQnxHtzaBHJ",
  "key11": "hD7tfy1VFpychhWjsGjJYK8fH1zkSyn8jp5YF7FeSvp5swdSopzC1r8AzvNvxxZ71y4zhmPpEJkHBefMY4s8Mei",
  "key12": "2x43gPeJQeUwDEfKcQ1vxDTYrQ4yWzWQoYoy1AnqoBh8mDv68E91yQsu1f2poDgH58xgQvpYphQY9yYPFJtepZFr",
  "key13": "SfBEyVeGSmpj6As9942QFk7ycHWv4Cv4NkGvKx1muMDoUEEURKs4ZJoEDMhvcAqiqqRYVKZDFqsiX1Mq9fPKoNv",
  "key14": "35ZpnbnRNqz5FFycaBneVdQfbVGfNC6iMvqmzqsswDuku3aAa9F8dpyvsC1eTTNC4gS9dKu2FtMNDmW5hF9spb2u",
  "key15": "Ek9JoQHwYserfu2kMm5d4X63T49gdEPw1aa6HQQELvkUGANmeRkFktTfA1PGfEjZbPCQyHR7rHfQdmYvPbNTw1X",
  "key16": "21UujhA6zYU3zLXcdp3AAvtNUC6tuA3mmtgXH7WPxLcZcbZtB7yD6zVWq98KfSQjE3NiNvtBXviJaq22BfBpxqbw",
  "key17": "5c17R4q1RvK6ECxDyNjAwtaVk9R4epoMRU1T8VFGsZbEBJvoHeWXWCHhifk1dn8sPEBWD6XcE9Y9SrNcxEoU7Pqo",
  "key18": "5QSJ2SaaNcjQVHK9Vc4Bz6TNxEQAtboyHKd8PqZ3Pnt11ZW6hoUEoGPgyLWowtRVpWsY7TqSbRVE4deBQ2cw515A",
  "key19": "tU1rjiDYBqpYmAHLYtrVmnZdPAYtcB2B2q8tA4qWceKs9uKZoKKebWYxxW4e5xppYrtvu5rkL9TvjXFtaxwrwGC",
  "key20": "2kWGvAwkxtUpkAQmT5EVeR83p2uE5Xo8XFCUQRys7wTLotMj1nZ1rz1ENofn7WKDytUFaPRczbbTHushnj7D8ea3",
  "key21": "21JinbEDVUTERrcSrnEx71yXG6Nw8jyFwmzSsKzWvBG6ks6Rcj1mHYcMvkPz3DoqyrZAYPeYpUkNpm1GKEErn5x2",
  "key22": "5EuAo6FWJy8QUAa1PQri77FK2gSM4Cbn65wQb5GitKKv4ycsLJcFeG8bAvqBp1daeJeNQDzjyRkXtX6zLd6ubEEu",
  "key23": "3wc8eakshNtjw2DH6uCeFoVu5oXADNe1EzP3mK6oRiE1VNvQEfPfK9zh86DTzpRJYALQ9iQqNFMdgZbrrBLJTNKH",
  "key24": "5BYZLTDFr3eW5FtbFi9rEn7kpqXUPekyeSPoSG49fJptR3rbFeCFKndPeL6dSfqtQm6LacKBohPVU9TeRZ6PA2mA",
  "key25": "45N1QDXAnQemxprvkdntJnZDfSoSMSLV5DWGhGNHoN7uZEzjvRTqhNss2NGCxcVmaa4dKFfWdPDcx1Pu236f6mvg",
  "key26": "4izbHSoiyXwEAuXomLyZ8fjMaytfmyeEAkyzwP7QQY9MZ5aMuRz6p5rnzdRj3qjHt7M2NxKv8Lxu8pwJt7kcoxkY",
  "key27": "wTyre8qELR7qaQ3ayEmMxPkHWv75EFn665F2GkfANneqSW6dWo7juWKPdAFigEehMwAHfveDfpMNDSkdLFnDWBS",
  "key28": "3pqCYbfBFtHag1o5WNFzvjHxEMRrBfrE1NxLnTfJABKzCV2WtV8L6mnEsDjQDv21DmdqYMKWeD3eDvuug534mn5x",
  "key29": "2StDo96y7XVnbnCuWpM1t89UWumvgE1g2J5MB2Tr2prfkMt2RYojSuwCo42YFGwpJK7au8FWUqU6tdvYJh1StnLa",
  "key30": "4na5mYgc4QXHHPrJFu5boCq6s3a8bFWKZL9MjyWSHFaPZWfJQv1bNKQeyrFGoEpCbtAq69etvomwZNpwr7HfbfB9",
  "key31": "4wafqwJwgfALEG3x4RVSTEyyLwpxhmtmrHrG72yEWZk32Ntsy9czYGGzGn4PSZWU8YF62MXRxvDVqMYRm7qCmMHG",
  "key32": "2nyVAT2rjfeGWN5mkjCxySK4X8g1i4reszZWpyqq7eAvKaXZWzvqUKjc7seJC3JpbDGBZpVMdW4Qy8ANDTFmywbM",
  "key33": "2hWnCv7G6aaL2aX1qGyCGPhfLkBLT1a8eFggyig3cTUG4UBT7bmnJam7XNf9f9ffcz9SiTDtFJWg6BM7k4FPBcV5",
  "key34": "2QzMt7XYKPFeFwzLAUXEiRU9jMx24evMHrJHgneNcnD3pBExP3MgTZF4MDSbbfRSk6HKk4urhDsSmtR2W2kdNdaa",
  "key35": "4LDhn8sq6fFb337bHPY91VdEtYWsDToi2jesjpWMNB586LgTxNgvvpUDH7BqHUPaFNL5n22NqV5JmMngirTqxRfG",
  "key36": "2L4EkQ5z1vS84GunF1YHcNgoZGvKbQ1KvFRUQwn4fKkfhhiyn9Kzp2HyV9ejottxGpSSLGGhGy78ai91ZnBw1UFC",
  "key37": "5wy66vqXvxmD3spQ5JkndZ1zwPZM6XnpA4ADFNuKYs9z8vya5NDyQFMjgCPVgWTnNX5TrxhYvPdQXxF6A3NQqLZr",
  "key38": "23NgibyavMrD2vwCLnNdfSGgsQxyiBLKk5E5WxhiKLuE2qTTKRgA6bbKRoMaiSmHTJ8DAnMKqJxrduqM5VPbmqhi",
  "key39": "R4SPxhUe7oPn5eHmA1q39HuMZWByj2T1ukeu7ff4gCiHrYHVcM7LWpJi91tQrSmpPKXH2oB7r994A4eJnsTs9ds",
  "key40": "2M6cZwhNvM4hqUj8oJwLJMNDXaW8RwRSkZ4vDiZx8jGztdWf2RvFDDCbLEAVKm8yYfyMA4QdFu8gUNyqn8fj8N5j",
  "key41": "3u3FLR8QBevyMVqy99Y1QCNZK83asPMM1bPGi4yQjCsN5nCeBYf7LMokUTJYRhjhtaMc6YM1ZGNX4zW8F4KSV7ZH",
  "key42": "5QCkLuhWuh1FjpUEhhy9nV41VJhtuU7BuMxY1SMkPGpCLHn6cTY2YNtbJdNZmcXHvGu1gWigayvjzJxU87AAkUFP",
  "key43": "2fB663poLThS2oGr5tYmhZgUL954wXc48b22jfts6Fy6Bx92HdLc8H8ECZZ6K3TB7REvs9u7xTDpjxB8yAHqJawC",
  "key44": "5xP6t3TUtesgFFufsjNtcp1ypYLYd7MzDETwzcJMrmqWw4K97FGSdgUosbmcGgC6hwcj6LVxpwQpUCVMxesQn1kY",
  "key45": "3cgiADZxSmx4AbXMs6NTzKjEjL4WsYwNxjsLeBZcBwX5cxjaGbgsMKhRuukhhHB6gPvxpCrs5NarCAGJVNdGT8f",
  "key46": "3TUbzY99usaGeAJG5Jbkd4AfxYuzJtGMbFK6WejVCPZjwNkzhHnyGWuBsgZbTE6U85grMbhtpYPnN49s3Y9EciPd"
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
