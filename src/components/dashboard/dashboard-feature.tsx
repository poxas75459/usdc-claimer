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
    "4VSd7BeDtMai1bgBeyNnEvXht8V79vCx7MmnbFFH8ZzXQr1cCwh1jSaoQrw17CDPmTF5zXSDJsqPsB4Efa82B6uF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34rri8murVPjqhaurdyuhxkhZbEM5SY5ncS5x8RpR61pk54PchasAuWrDrwR4QiHeFQkvWPmdQfDwFRY2M1HajH4",
  "key1": "3g237WpXuku9EQV3T5qPF53uBfpcnWVxCrvi37Tso6LEjJorUgs2D4syxk2D3dgBBxWN83xCa2Y5oR7mRrMpoteh",
  "key2": "3MX8LBzE3vnFH5n2MDQXJ3MN5gp6xqLajXCTRN7z6b2u8fszQVZMSKe7jN85dJDva9BTbxh9BrXuiWiqeBA8tjQK",
  "key3": "4qoWZLyvr5dPfc5bnLgCdZ9SmYabne6CrzKK7C19GeccrhMqUnzdUNZYVZuci5nrWQr7Kzej5TcruyGnCTLMh3SD",
  "key4": "2bEeXangW1QwNB65bZCq4h6BqJBPcjfQ3g8DSAPfsYsmCM6zGXdtf52bRz1vZnkD2UsnR6f5zr4qL1NgZbVyhtyY",
  "key5": "4uCHHNjNAMXYvxhWh8b2TG63SE21WyNJqoVYX5PzixwVjdfR4FRfZvwUNqoKgKZ6bXhKR75rm3yzSFKuXLqE2sDt",
  "key6": "4psyYbY9ZbjZUQtDRRqoyQBQApc2yqs25FYcXtu75XmvGFhV9ei9vJjFJRhXLSXYMiE1pBh2WLLBkfMo65cNx6wD",
  "key7": "48oGyQYRXQJpvzmstEkjCo7nyGcUQDk7k8DZqJrPfkE45mLpdkZasZrfvayMa9shY7oWVxEXgX5HWLK5xH2h9Ufk",
  "key8": "2nwn6zBtqKk29KmhQp3ZS1J2wid9KnRAR6z1J8mUHMks2sB5LYxDTxbqwpRWvHF1QrYPQSEc6SuYFdicFqB42XHi",
  "key9": "3kf8Qg98wy4g894zRvQ2PYKGQBeKzNhjDp4MqJSVDX3jYLEXZQw6erCjTYgMY7J3J9Uv9XtsdqpGGcmWLDPA1Ed4",
  "key10": "5FX2TZu3fWhAb6JAouwHuhjEs4eH9aratUNZa5yzizyods4hv6svH9FHVfFBfDiHduWnRZHV55N94JE7m8QGBG6w",
  "key11": "3gadiycrbS9iB2Net9rEGTzrEdfd26JStLC37hkzqyqnUcSYMT9aASSjkfgtdS2HYY2iPQTFkPPM7fRtDgy5Pyf5",
  "key12": "67Rqpaz9nZder3KtrFM7RRByEZ8nPqbsvqNtz84TcwAH6gHMyXwdgokFuM4PBxxSqVshvA2Mef6pSd6JgZ9HDWzc",
  "key13": "7bcjfkV8NFZRDJsGvQ9qftqFc6ardGFz8kfbuSasUuQbn7Vme8oNracRqHEVXxKC7buncfGz8p12EG1pvnjRFQJ",
  "key14": "ziPH8PRHAQw2LWBU4ogJtCehtiH4iXHvrZtnTbRTw7NCr3ddfn7DUbPY3rDqw4dysUy9LhgmVP22Lws7g4eQmyJ",
  "key15": "5fM8Qmag14YySUNEuFKZwMMht3wjcGNnpHGgeA94gszxK7TMWYVghx28cp9H6rDfYF1FbtcXjz1nhWSVLXeu8fQn",
  "key16": "3xtosoNBX2skLGrdp3HYJxTVjojrB4tM6meEUB5SAPJacjQBm8To4hoeQ73gAzSXLgzJ4BwcWE8emFX8yDBixfnx",
  "key17": "hRaz9qFaNqVwkyiy6nLGnfxTFj6Aq2HVFtEQaJHFWvPSURJgHCxNke8VacoggrMatrYmBcduwJvm8ibXMbuPcD5",
  "key18": "5xkS8qHdKHJz494Agr4gkQW6yVUyjVEpnYx9jENpei45YTXbfjKQyKHECU83X6EFXzM42gZbpX96ceA24Agf48JE",
  "key19": "yAEWRrT4rTkKSoW6Q77jbnN3TzhYSjZMRzwbGfmVnczBBirD4j7QnJF9HZXT2zkQ46ZNSRBpZqhHgTjTs2QUqs8",
  "key20": "4bk2fa7vuBQTTodaqYK2xky6rJAd3apyDyp7H5t9ZJ7Gz3LF8ypjvocoH5GPV3h3eJPw8hAResCvSzmdkxW85shw",
  "key21": "5m8kC8BQvG6jtHFW6vLHSiXhZLE7w3RTNRtNcPdffpUaE3F7GwGTbU7h41MzJWAo1Gbn3yYgqLU8Y7qRY6d73qoT",
  "key22": "nNPCgn3dKXY35CoQe7hPGT8PKLqvG4SGSrFw4CDKLWrDjFNfJhEBXob7Y9yQL6FAxXozYUo4DGXuirNzBMs2dUG",
  "key23": "66Y1w4DGvGBdwuhQzf3TScKRpvTojUYMdukQ7JneTzabrCtFxUuV9sY5EE7248XsPvS1siXWbLsA7AqiUscXtXWj",
  "key24": "4AfUkikQfc4BpKoz9nobDstoBKK2K9AmhjEwpJgnHejKgNiAj2aHSzJK49UWbeukg6W3sHFVigUi5qd7WGYETj6B",
  "key25": "2dbYs2VpWor5WNqFHNwTVjhaPa7GjhtbhoPKF23TZy9RE6SuR7r4EkyK7SyzAKNaqX8QUBPQpRbEPGKQcq3562MP",
  "key26": "2vVdHpphzqqfdseUfiHfYM5LVc1JoXfHYjL3rJGUTekmB3FjKR7oVt9pEbaUX77ohvYdDyKWSYpX8mKdhRHQSUS9",
  "key27": "5iFY75TjRT6PRAJeY3gjqy5G1j45VV42jsdZKJxShr64Ry3MVxYMqriV1nDrpWhD1aMeZCVKdna6Xo7bsRt1jey4",
  "key28": "5aY62nvT56gLhgLtnMryZ7yUq2kVVT6r64RPa7gKPqm5DakJVVD4MTfy5sWb9wtydx9vxJpwHHV3S47E777ke7A2",
  "key29": "2AhVQRFez9VCn873JMi425JQubhkNucbDjjZAAueNSwjDPfGyMmTYxT9u6VcetkTKiUpQecgzViKdEgsRkYn6BBu",
  "key30": "3i2stqAxoQx4rdBQq5wKxGLWfsS2JJivPi7cZ4oYTXqWhdGLSFQ3fV56uEPf1T8mPycdQSpfha3ajyNcu3Rnco3T",
  "key31": "2FxM2KgYtuYML4ByRcLBqTtPEdc6EjZf7LAcCzThwERd6a8htU8yRHUNHCrRNmFrBr6W8BNKanUDcZPJik7PwEho",
  "key32": "22CfvMoVXRNjug3VkRkzA7AmYRrCKy6YQ92snRU9G5HA1JssUQRXPbg5VeHpPyfsv4bidcrqHsjEeJyFoZozeKUi",
  "key33": "5i7k32viBVjP9aeoUyf9RBkQ74cUdGeJzw8rCJhGvjbpLiHC9iRTZEN6xswtWbTNkjAdcTMzWgtYk6yWiNN3KYbo"
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
