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
    "4DzszcBdmstgmy1ZjUHfscCumhxnHpvVAJQixpvmW5Rh58Ub14yjhzsFC8nqqmvTLjJ2DoSSvTaCHgZme8d6kbyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GC35jybnYoYWVX1ZYnkLRrYSAbVknakVyMrNhsZ73gnw3EsDF6GkB63iLc4zJ8CJksaCQ3gyRBoKMFbnNwjJRkv",
  "key1": "3Ye7YNpbbmsx7aBuYLTQyUbHtHjzK9UYM7Uoi42Lb8ELZcvfypDFfQjrB6wzLN3LdQVRGUSdnL6yYohJwrk4MLeP",
  "key2": "5bgCJKznx2jmBzn3iSaoHt6Bdr5QXpqM6P3Ji8wsjdrYfKiWpaGvp9wBDbUCeS5wNtx9fGuTkR7tGG7t4RCj4vPr",
  "key3": "5PchueLRLUcBeeY18swuQpXPWuJxNvggM14m156eiJjPeFz7fDYWC29aZwouDbQQxHPcc4oELfa85WifHswimTP9",
  "key4": "5G4ruCgixSfs2UARknJNwBHTRAZxtqvMc7Wc1LSPkG7fHcArfafDvzHLtivPdgQbratyVyS1efpkJFRsRGonidMw",
  "key5": "38ZYDXaJGTrWZEZ5MeUsU2ucrNnTsNBLQmxPxKTTjHmhnAUJ8mUXJR5k9GY1wK11JP5FTvAa39bJnxSNY8HSfLgD",
  "key6": "2DY7E4RjCgQmhH6hd5oodhVkoBcRPWggkpgPAafACFThMvsKYtoauj9KCVxiLc3hqNboJFH4bxjLW4oxwM9nfsX",
  "key7": "5vnGCx4NGbjiDezJdS5s1D58ArW3Ei5aF6eM2B3q7RAXfcbq7oudq5Gcema3aCBnwzjF9QgWopeZsA81VEiAPpj2",
  "key8": "5wmDWsHJSBjVerE9Ab9gVj2b1eTMQYy89Ljxza4GWEY7DpAxpmwJpT1Gc4PxAszxzj6x7wWQETLNJ5EHZEFgaTSo",
  "key9": "MUaZTDU3efwWYdZHRFh2dRegAnmAv3yNeSsVfkYxRK7rfQynzezHhiu5CABVKyiujbTVT58caAwWVWRCFPTKpzY",
  "key10": "3QHYTCeECXdgMFgL6SFyg5KK15MpLRBUPcf2ts57d2SRwiRBAUwRHsdSWrt4siqyHHYh9wBMyCtcV9S3M2qkvVFR",
  "key11": "3FgGb3Bx8FJaEJaKCgThRK4jPKCLYN9nUzQEfUQMD7wtQSBpKpPcD3Du7hKYETegUgHY9sHPD2NA1qbucmudPj1j",
  "key12": "P1iwqNy88Sg3xmKyd6YL1YGV6awDL5f7iRJSqiq92Gv5nPXx9zvWc1T2jY4DjCHh6bW95ZJn9f6m96o3kXB4VLd",
  "key13": "4TBvX9ULXNHWAzGNC9MX7YKcRfdqiYHDMAxUUomJ9twoL8Tk78RuAHEcJPJdiuKVaVzjGRrSyh9iig1Hy6Hoy4L7",
  "key14": "5SmCW6RAs911sx36C2Evjm31LntKyHzE7SsR642mXBs81V295j1ytrJBgnTn8AuG4RDQq4biFLJ4bXeYrVdkh9sr",
  "key15": "29UkR55SgAt95JNjC6pwnEUtkef1aLuHat8dYMMXvSRADS8HQj3Y7XBovbc73z9HvVVN4Em9tG64KxAL4SBLGdDr",
  "key16": "SJX7aeHZRmfWDEq6yQntWgpnp1Sa34XdbhDpkv837B35Yn37DmNtP3VyqEBWfirbBVVxodjoC26NHYbynrFtzNe",
  "key17": "PRJkc6NDoPJJ8w99PYykz5nLWm4pqKCGGRXhpiA92KBuxSAYKarDt6GYX8crJKNGX7jAuYsVUM82RpogjQ7qdEb",
  "key18": "5n2HFZ1B5VMMY4P2epatc3Y8PJmFS39YNJHSo1sSMwtoXh4tNoxVnC8dCXRKNonvmVgToo8SgU69XaotWsEEeY3u",
  "key19": "4k8LKY1cwFaVjC2xAxG54oVYSkN4GLtgDuyjFVv5QuaS2j4aFyMBkJaNEfb8ATLqPzizxL9VpSGJNMpiyUNt9Wo2",
  "key20": "4U9uwcND2s1qnmzatD6b3q6bdW8eBnukCXuKDoMoqGgaMUJTCfg2ARrYapkqF1bpwPLiDBeQaEMFfd8jWhYUuUfB",
  "key21": "4Ljv3KhwTM5S2fm3YjAp6mXifRkoJVtmJg4wrrAf3nxeEFonmDHcJrqHCaTG7EzjnwDqbDzt1vWvgAE9Rtye7BBp",
  "key22": "49a9ELsbChvqMUF2b4189TGUiVZ5hNhguPcjWoCV5QcxnJMzLU4BQ2GUciKqiXEb1mJjLqDSQ4RFFKd1an1DXstX",
  "key23": "4iPJg85mbURTkB4RQ7VouMPXBWTfN9MZT5kMXxAWJfx6pcH33eEbocoQzFPQunboFEnPsnPYqpzicT7DBgWPsMd",
  "key24": "65dtVdWQZUK9Y585V7GYbJRkNbBZCB8uVGSttbHwdhe7ckyJnT8Ztw7SiYEm8ZNgpaLoAwVfRY5gU9G32Tz8JJFg",
  "key25": "8EKn7UsFPn1LotwaUJvHrnPgYLfCwk5J2LrDYAhoz4QZ4KwMpzsDFSpUkETLFxieCzmS1d1ebdVeD7amiEyZJmc",
  "key26": "3ijpF2qLZDWcVtFQvxMuaL6VwGzc42bfzuJCd9R6PE6H6C3MBsqbS7VYXWVzsr9s4BVvYwXigPsnz2yYH3NoQP9t",
  "key27": "5t1Lu55m7LgK2ucYeKrHKRomaRwJpSxVVwPkhSqmpP9Pf8nhDnJQQ88qP4tsBVf3rVkRrK7U7HEWXGu47kKYr9Dj",
  "key28": "v8pgzvK97L4dKTb1Vkv4vf8CQiiq8pqyzD2J4pkwHWbUkFdoJpzhUiCVoMGjRhPoK1V8ETFNvn1D3PaazAgAp3r",
  "key29": "hMCjJgqJxjntGWJAtYHU3ezFBRSxQ4HuVqfpRrREQJnGzfZXBBYiXyL49G2n7REiHCnH63xY1Ha9TjvC95gpkSw",
  "key30": "5mJkztgkNDj6nCUdT9W5WfkVLVK775WxqMJv9fHeR5gd7ZfbTrjDrwmkHDYyeBqHPJSkLmHTVyzkiXzKq8iV1aCK"
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
