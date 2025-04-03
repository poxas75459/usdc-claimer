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
    "3GoqhEdMVXNWLmFFFVH9nv18vz5S48sLAETLmdZP39UX3iSQiXDaGxypeTVSBsKimpQyArobJndroj6AuLusj5gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mctaJ3K8GnzoXR4jk1a3DNqtKHufBM8ALY31CKBPiVmuVBEPunxQo3QzyRYweYUdSNc7yJrBa5mcoJ5sgsUGV92",
  "key1": "3eXxKhiv7rnqbWWdWAVG4Kj2uxa1qvuxmXjo2ESHENsbeA52sANhv7GWzcZhVscFpaaGtSNDuVzWMERhjMGqi7ia",
  "key2": "3cC3Mm5sqG8maKfoXfA6RJbdHCHnNj5DmN9qhNAeUcvirJiowGcEHgrzFHtgft86XiSxZeVpdcZtc7X8YcvayrZt",
  "key3": "3UZyZtkn6y5qYEXkFCiWdUif14bGZNxZjk2kSw3XGbtnjWu35DphrLAVwfoAULrmi99LwjhrBhGX1vkWGTe3xcnf",
  "key4": "5iyGKFAfgqYQ6rRKYQEE5JuH7taXLDx1ncesBCnyHft2dPFDbKxy66H3eZmenqdiTCha26Y1ngGbYemc3FWRJuNf",
  "key5": "4j1ZWz65cRVaS1oCsdTwvYaDgLRiKiqGxAJhwHFa62tx1QJ32ZSWjrgJa6X4xU3GfLPqKV33RUn1uD7sRpfoJV5i",
  "key6": "3ZKLf96AZtcTfaHaEQe35XmhGZK8ZZ6yVpDcszzjkw4dCWwc5jjMA54v2yFv8jn6Pd6kgvxMP4Xdu14qcUJsKG5q",
  "key7": "5AyuM5RACBAbPK5iES9Z8GEtTX3H7oSsiJbTWC85dBPEU13C9zb6qscm8uRbmJsNneJ8sxnQ3g8ScEwLHeGjfvvk",
  "key8": "4K8dEJqkyaDPQgzma9i6rBWuY2YQmvXBAbK4fH8G6iJuKg4f8ZRHyUCYfTEY3Z9WGgExuPem8vYY2LCDSSyoidE4",
  "key9": "NcwNEQ5WpPwPsWLvn7xGgEhZFpShAom59m4FUZ1meFriMaerVpDpQBmp4Mt3pxe4isyfTGYzmH83HZZ7hX9WCrm",
  "key10": "5ebbKgRSaC1KskHx5ohRcDZtLrM75boFG6pHuwr734wssxPd9KgyYvjCuKyV7uLxiJ6hkZSu728Y8Scv6ujXwSj8",
  "key11": "3UbUDUQ7BaCShcdMuh6XWeZwnNZW89joFt1UiQeKaJnWnvt5yQbYsf2m2qwaohB4dTMoMjLtLk8uMftTf28WNAkR",
  "key12": "51B893R4sseoHr85UPQGkda18Fe2cdKn8Y5uZLRrEc82Cz1TSEu27PMth3fJX1RuCLtYuj3k7HR18j3bmpHFiQZy",
  "key13": "kHnhTcpTFUaRw69JjJ7xBQei4HX7YYhued1dGdxmQNd5yVgnkynHaGW6gA2YAQeRUk6Uft8yGdv4qJXNTDsAYXi",
  "key14": "3vggJU54H7K655RUCAqBniXnXGfaTUbhZe2UB6Xjz3WjgRorDWJyP8kkLUhxuddAMgGPxquo4Y3ukbLWqMsUBweT",
  "key15": "5TSAq2FKE7tMjpYnQWA4BTvJ16hrYU3kENjpCevsr327FtSAp8jw4TQstfmu8qevY6AFhaixv7CbeRjjVwcSpfjk",
  "key16": "3YP1dSFERppaqWHhiUNeZcHWNbAa63HJjv5sFAunobnGvCfGvtbdz8bxnexh3jEeVJhfA1k9EAJEGZbkp6hqHwH4",
  "key17": "2ntoVY6KC7XwNKzCmjfQv4G6sH7yrAASpnxsAXYoTYSDDp4XkvQHWL1SNYENYw3w1WBP5eNqqbB7tGu3FRvgrPg9",
  "key18": "2w9SzcjRfk251g7sZWaUPpbAAXwPH28SJWoAAbmiwGeomb9HqiD5Hhb6nZUyL3fYuZC1giP1oSB2rDass9V96MFX",
  "key19": "2CAuWjhLFXoY92vD1TFGzu5Q9PjToxTWDK4KxwKchMXcLgpfz2ZcKiDP3DKMgRFJpyMtL1BGXx1adFoKCh6KXPdv",
  "key20": "5DbvMeEnkzTmjNCJUFcbf2hMzEPWxfY5dvGUJeAdUZKUvt9119mv38wMZMykkLJHhmC6D3zSuersXdVdfF87GNN",
  "key21": "4YcH59oJCTanrXAuGtxpJEx963jrsiNs3tBsNn4CUP5P9E99hJjHRsC4X5aUn4Z2wJdZRBetesxb9fM6eyCkfxR9",
  "key22": "M6Uos6EcA26JWZkvZgne8pZsAMA9SBMbQESJTBFfRDFwZvqVKpxrvLKyhtwge4wyyHuyboVUCGfdFjhcAx3nKj4",
  "key23": "5dZMY9F2werHrEZdXMFfvMxygdsHyi1633PGghiKnqHJUbtP6vDUDNzCM5DXuj5NTPZxDwT43Ywj4uPC5msTEbTc",
  "key24": "2qAp81en82j76vF7XfvU6y9zsSenDxqQSYcTdn6nsFJ4fKiM6cqi7oYyg8YLinzNnW819kcg91gSV85qBB2uAJ86",
  "key25": "3ytABfbZfQZrCb2yvSz1XQ92gHzqsQwdxaS3GoSS32dWBp1qox94E85FPXt6BAMLD9gs4nm5Vo6i2NqAJUGhmP3q",
  "key26": "4eF32pDwtbNSnjJBnJ83KZ9fBY3nNro7R51AfE3EbeJ29ZJS272AeZLAiqf6rkXcr8AYtxSVxofoePvbTJNc7TcE",
  "key27": "3x3WWbXJnQ3qLkevM8srQGHomYTgzFjbksyvXqMMsvFGiFfQhPBV75kBU23rLXptoCfrwALWhtvwjrUVqAHzn4GQ",
  "key28": "3p2bVeQwSuYQXi2WPAHUcp5FBbyam2fTYGa4fZdMxLyP1rL1WbVYLFrDMbe2YBbFrazpEqEewZQ1g8toqj5A7TYZ",
  "key29": "5ZvMULTFLvTw74aePq3S4QVQX3ycwws8mXMq59qtc3DUoVFrYq9txdxKqwGcEmkDxHhNT5ynDZWJ54TDaJrDHq7C",
  "key30": "4W54CbURdSVowyGDDHWGMkTyXhQcomwWNTN7S565wsrH5NQbrcbM74kBnDWiknfogWLesjN18ssJXGKmwobFv4pM",
  "key31": "52cWq7DvyNa6vz9WZbzQzKn7AKWsFESVwedX9MQvCP3bi7mem9mBdwhwTPXap3Uf47588WMsnjLDX4Q4hbqpRbAd",
  "key32": "5M6m1hgS9CorXtryvF9mzdYsErCR1oSC76uefYeSKqag8QQpQRRLNmfGDjAUHaKNnJvwvem7sb54ZLDYzp45dhYg",
  "key33": "2JfcoQB6Vo9WAeopDrRWYNCeYn8WKdaCqTVzXqh33krpQY4PmAKq7rMzYh4ULfMrwt6Nbyp9he9MDxwXsdnM4MpG",
  "key34": "5RGce917ovWYBKGjbvtUoZyQeUnJeNVbSYLvMi3cQi8CwCuGoTLkizV9gbdvWnPYVgeXL2v9vEzspfrSKo51PYUp",
  "key35": "ur2zGztJVx6n51or7cgTN3BBB1fZEePzGRGDFPtZXQk7Ejwmyv9nErGBC4d8S8y243kKEKfBxMdagK6p5njBPak",
  "key36": "4g1URdRbJw4vv5zL8AN56gxcVcXHopwFQruT47rz6eqom1TKinyeFsegVGP4hEFQTXqoMhNfb8cQba1RGNoYfSFE",
  "key37": "64GsBobCPYX9EGeefU3kbj1qGZJoPWpkewHiMzxLVFeaqe43L7V8YpbkJ8ytd4tUxdxZYhxhhdvRj3uaYs57xptk",
  "key38": "62ERSzWKBLja54kiz51ogVKMBJhKgZxh3VRzHBJZKq9385b9UhgaKKw46Jw2841DSFy9wtdTSngpXaNJdHxACiRh",
  "key39": "38peFMMVeuYhC1oiFPqkGSEagSyKxvBcbH9nZcA2aB8cqPyMwPVtGuidgwD2Xswsp5DqUTfnycW9DyHoGKtoZnaw"
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
