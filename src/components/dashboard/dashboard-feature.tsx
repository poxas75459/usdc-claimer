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
    "5mprJ6w3yq7rAL7snuxCkQxPEeHgXqMHxiLiQSVw3Vp7DqBGrRzzhYkRb92ys7CqgMvjw3zZcYGRV7HuRxBwNekE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64tWWe6WjdpPGEMrs6NdNUq4MnuFqS4bgeHSVWgjZUY6pRdwm4mYhVnVLFkn3JMxbaLaQUp9d7mtDfd6npGUUw3v",
  "key1": "5JJBJNCxnxLMzd8kFh6pJvX4nS6Y8aBD64D8UtKzGPRbY42RPs5aEyVtXoTgsMHjBuTzdTPrGnbmkHsQNbkCdrhB",
  "key2": "3hFG5PisJibw3GekLPibJX2WSFdnDWpEojsd3h2sNfiAYR7vkWkXRSiYtzXoRJbT8VSgRNVVLa7hxgPD6DUm8epK",
  "key3": "5Yu9yLrRU7o4daJsnSdTWBhVFQcGmputFxvgivPB7Sa77KRuMRQt7qwJhRNHpCaUT93U5Wv7JLViKchRR8N4pjB3",
  "key4": "q8bbD1ku63ZpmGFy6n8Gs3T9xwhf65422ZDLvTFaN3i82MSGMPDDagsE7zDz7M67zKtkzFtqh3a9ZEfu8gwPkfB",
  "key5": "2hYtvjDfBCwfQbCpCUwuzQmP61hVyMVUp2LsZdN3Lga1zfe7H9KM5N7kvkBskBaqi9pHH17KUsDsUv9fTW4Dm3Qs",
  "key6": "raLhoTiz8EH3u23VKB3hZhftjH6CK9dUiV8CjpbYTf7iYgD3BPPRFugtEjyECTGNGbyqd3PrPHgLq2C3DhB6UDk",
  "key7": "661ASRf2MVp8Wv9oCCRy8x8SQmsX3tTi4YFSDqGu5emPY8NSWL1Sq4tnNotKx37zF5SHoLWywVqTMr7gAaqs6oJ8",
  "key8": "3gcMt9ZiKbQxi2mM1QaTGe5o9woLShZRnxXZiQQZ42bUHvCnvxxY6PzXB7YAvcCUoYg9bjegBadtRqQTTJsX2w3P",
  "key9": "2UgqUPtPjrCsAWjkpLS2VsJUYEYZPaNWbmLWbPdr1YGSqJoCZj8yeKSpgWbL6y11saoJpfLTTnoeCN2hia14TM7",
  "key10": "5nBi7yvebsJ8aFMJkHi7ixjFB2RpJPwpPLwy21WTEpoRSCLErifk99EtoApfoK3aRKM2YdBbwKAxiUqcret3ircN",
  "key11": "4QyenzefrdVYSb8TzUsSKCGaLtLiLPNDGLJwGg9Tyo9xdF4eGaeBsSHs7DpyjQo1GtD3ugy58U514onhfDp29hxR",
  "key12": "2VU8MiLqLkr77JSN9tQ8PZbcWWyDF2h9cWptQD6BUDrPfQwFEok3nTYK7o2FDTiKmv91xmYE8iY6b9k3S7kL1XBp",
  "key13": "3RFy2rNeHkzpcq4gqLSsfXYfsRTs9m8CXc9UA8aWc44cPcu8bQExrAU1zUHV9c9YqeXT3C5ynw5CunoBkDPm7ySf",
  "key14": "5fvcZwgXpMC5ewtBsN9WTjrqvkV12aNqnrZwxKK7nRgnmbbAZXUefoJBUUvU2ZGnNtH9xqyCWgRKJPF8qheFBPa9",
  "key15": "5q9tiEdBp7pkpANvDoGwJG6pt3XHixCeYTqQxyiAcjbU2inPTqjZce53FLEUcPXFahxSP1UYhqyiXGD1T93dypdB",
  "key16": "5Qfp2StUwcBzQMJcfTYQf4QMiZvYMzfhew8oBopQUGoM4D4ZJJAbhtbm3pvuFeshVyoViFtpYXtHznehij1rVKwz",
  "key17": "4URqLdxTkUniPDitCHfqRD6gvZtdZcui5cBP4YJVTKrsNPLtQmRyjgWLqRKMEm9jqRtLYEiGXbdScYvTmcr29HzA",
  "key18": "3qHQ594VakZMVCYXxDDWb35tMTCWFC4wRKK2Pa7Smzc1avEB7XHsZAWZagbkTsC39sAictizxXXeWFGYmmqdMkoC",
  "key19": "5g4A1MQmH1VTQJcg6nwvKyk7tLSMNSyHqYAev7M6JMU8HwrQbxmayPQ8Wzexy2UX4CoKQbvnELouq5JBAGgGk2jH",
  "key20": "4WWKb9QCfBY6B6byHroLKrJL2UDqRa7HcifPwJ3tY1kR1Ws7Vvmhyq3vEX8m4PezebzmS11jgaUh76XeYWQF6hVq",
  "key21": "kjvyHom7AmSLTrZKq2L4YQm7HqAy1Zmr6B2CtwyrP1b2FcD4jVp8Wi7t17RJhjsEHo376UgZukjDG3TRcjFevrh",
  "key22": "3H8y9vKKkLMSFiM421RMrwcVvKQmpDQLW2FAFja9zpy3JRUdEJtLPZhinKSYsRFnw6Jx8PWJ81hpjJJHQmZV8odU",
  "key23": "3Eg7Q4RBY5GQkj1PzzQ5cfikjp7wisVntFb8QdJFF5QpqgfGsr3fXwYqPyrF4kgPBgZGyKbrQu8NYfyvXxafpnFM",
  "key24": "3mfYXrBo1oG3MKNjBQgqEa5pYEGnEyuCFF3r2yZVKsvsFngw2zWRcuBwm3uVTK67pZSRxZc1DAy3tspiegXGUhru",
  "key25": "3xKddaYDU3wTSzoksPHTDbFzz4Dtox3ypJjGQjN51nuw9rMy5dXKgCwgjKA4dU5kXdjaoPYkqcGNULmmi7pxNPgB",
  "key26": "zAUMvbEKcVFZHEpHRXtpidJJieavjkJ4pi1V46NVE19AFVnTEAyMwrE5wTvv88vEa2qps9nKD3V9SJgirew6a8U",
  "key27": "yQL9T2qG6tAp2CzHeYRogi3v8m8qLtM3ARUZomn4xLVPUP3xDvfh4mPV5NSRPndqXJVm3YoVzqPL1SCAwAQbKEo",
  "key28": "4XbxiS2xAMoZ2SYDHhC5ZtqgdT3K6X6SpfSyw6vBXmEw6NEsxST61YuMiwdyVNKf5gep3gi2sPhbo45b3WrX4YQb",
  "key29": "3faqAuguKhc1YmHtGZSUHir4NdSZouXrn8ttyWYtcDB5cuvcU63JE8bLfY6z6wWf1LAu9UCgDaMXC873hrUthjWZ",
  "key30": "3XNbhaYJhfRiYUxVjHogFaL616PWouteNdcrUMQhbmTS7ZqWZ9jYno5kmR7GnYn8bGUhowhjyiBaB237dvXaZQxK",
  "key31": "rye4LrkH32DqCgA8BXSTU2JYj4JafJHoBwiyeVm4FYGiri7pBByHzQqMEKUY41eVky1PUfCjTuR4mgew8QWGsQt",
  "key32": "AUshzvP38nh9kkBV3LZi7uidtQeHSRL6F5TrqCTDr6KmJer1xTRJiUFj6Wh1VbkgqpCwm5QRcHjvyK7f7Ca6AsX",
  "key33": "39vwRFdHYEp8xh42rYEM7Ru3U1prG7yHREnZm24Jk3LuunXN9aWZUj9GiyUWSHFb4XToRUsQm82FYGTUF47ut1wm",
  "key34": "48mJi8yKmx3VHCvkWASn976GEkeSNRQjSmwQQsso7TtQbdTUTSazgX7cJH5cguw716NzLnGPZ6Zp3iEbpXVzrZm8",
  "key35": "mPYyKZqFKd4vRpyJzW1bTUQkSayhbyDCBH9Biho13Hf1bBvqaA3yC4Dvm6cejexc6YYCqsjS9Cy7NqgDwBiHMBa",
  "key36": "3CFZDjWZmfnka5vGzyZANAKVbjeM5ejC8BEGtXwJaiN7Zrzgvk6MTjyTCbJRcUVL7aieyD3xomNgNUPHbQnQN6NH"
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
