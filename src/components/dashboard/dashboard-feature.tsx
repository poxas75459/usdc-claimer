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
    "3sWmHsjhRBtNvMGST26BUcAHtwkNTisT7bfBUrLX25o1hALLD6GizPhVitkiyo7mBkwJ268fSyX2M8m2wcfvZXYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HCXqEm4TnJ9BwXR1wNw8Qg4GYirMskVfMpHRuTBbvLwo4UDPgvRZS7u5zJqtyeTVSM89PJ2tvMo2NYEQqR27bMv",
  "key1": "TwCMLq2quJEoLmm2txBVoeTggXoAxzUsGm5uDrXbYgGxFW5Ae84pz7hg8AzfkoZDs8rPM5oKRjDmYCv3FowhhGc",
  "key2": "3pzok81K3yn52VK1SAwpFb1wg9oR9yLU16jSB87Lx4D2hFcQyVvPqMLWJwdxfopvybZPPiodyPEyMNkhaXycs1EP",
  "key3": "4StLu2XdH94pQfEDKmhUC5MeZN8jJNS2KRsD8GNn4LaWvxWFwd8f9RaxuGyHNpBz2x35dspTndo2vCtapemwmiLK",
  "key4": "5NmRJQJ2E9PCSdVvH74pLf9yar9uLqznYWfQfSrrgp7w1E3MHVojfM6h92vg7XSgCbUktgmpmP9Wha5LsV8HgRG5",
  "key5": "5A4sz8xWVeGbSoiSAZoB8QMPbfpJWFyYuoPNcUUgokGeKsFpHPPiqELn5byDxm3ZDQGX3FsDKxFtSRbpTyn4vpg8",
  "key6": "38eXGVT7RCczRXAJHkJpBErrb57hm4xa8tBsYj7Jodj6LcP637VVPvPDUCMNgZZacfq2Xi25n9N8gmVFkzGxLyEr",
  "key7": "4h2BRf1hoM7uaNeQRdM4iFkqZxCpdMb4MxeHWc4DzuyUZktq2Ydyt9YK4Mj9QDHRPxxTz3N9D9CrF2nXyw4cyyV5",
  "key8": "2dxGr4TNHSXD8HZvSwmz9Rn4m4u5AzHZaUoMNGuMLXLJdqs8NhxnErnAs1Y34DiiidB7UH9suwXCzUBzojcQk51e",
  "key9": "33s4QRepmjF4jTnKAr5oyVNVCpTKfgHJsdj1XMzjSkwQNJUJwojGyAUKurNcYi2EWmAgoRb8rUsdwf9WkbGL6Xuf",
  "key10": "5Kn39d1pEZcShKKfciyJQFXyUhPiNHsoGy7dTZBmaAoER4mcH1CAVRtEgzFtuy1rEK8qJZdX6fxJjVVfTN3pd8gd",
  "key11": "2QPNkzPcec97LsAnzz3cbNAeTdNw6y2xNtkUkZyGFumPuhX5yUZXgGBbHFALy74HJLR2AD4ZgeqXWkW6z2iqX5dS",
  "key12": "5aHehnYrPqYrzkagGUkBxC3x5a99HwPUG77QLSe1VV6dza1gEyUmWoT14UWGcv8dTfCu3c7AhGSEq5Tcrf9Y8zSR",
  "key13": "5qBqDt9tYJpaC2nr6uRyCaAZGRenhhwstd8PHJfpLyzFnJdQtHXYujsXJ1nqvju7XJ7XoCs6Cqj6HQs1mikZeVVy",
  "key14": "NiQLFXquK5WukYAfqFELrRLWYR8obsw7GBypCgts42aWN5Sy52us5Sif1DGGmtmNqR5uTXZib8mmB3Hqcsb5ita",
  "key15": "34zkXZVBq3ge9NmLtCdVUmC6kHX2TGtor7XWaY9Bpq4TDjdrTGf8E8zZQqAtYBuUqCoZp4MZHGvNMYoKZtxehT7x",
  "key16": "3Ezk3MJzbgNHpJTY8aAichbFenj2uTtFVRbdaxjquMh8jUGz3LnATUWoTceT7Zk5Vji26FKnKTtEm6RDpNNB66y4",
  "key17": "3fJajUuPX35MmBcUHxqJ54MPXoHvM94hkj7AWUVsNJYYe1PujTdTyoXXgtyoZEmDsc8t384GjjnQuVvzAhhMEsT4",
  "key18": "YctkGAeuNJ9p79x54hbFVaobaR71R5mCHEqc85ixqpkc7SgFDvfacQN1guNu7YN9Y4kekkFvjutuCCHgP3KuaLp",
  "key19": "2Nx31o4XTjJkQJVUUawpviWfat9HkTuWBc3kSz8BgNzKKLJWQJbqvayZz34GG4K3LetWFvjPpJnxuStecdw8h6EZ",
  "key20": "3SsRN35SpGVd63JjFUHugn5zDap5JJAwReyGt87HtwivDh6B7Se7fVQhxdnFFUBhHX7fm76hYK8SdY8xeo5sNRDq",
  "key21": "3hCxj96Qk5iW7bDcmp8MCi2zp5zV388zqETawmBZg1mNoL7Sj8kCYWjdJhUZn3ERgE2NupnpoegYCgYaxBYW9kQf",
  "key22": "4NfCPkQ5fNEEGYFEbpdX9MGT2msXcmSpQQiABmt6qSEVnJZCftLwr1NV8jC88zHC3Aox2iq5JECdzQG6qSv1AYxJ",
  "key23": "HvtrveLEAGyL8DVcpK4RusViSqLAsth1D6D9YFrdViKner2ugs94r6bym5c3us8yDierd82tatyjjcFXVLZxzYR",
  "key24": "2dC6CYXp7MGJ46niKQxFDYeawb3HJsUogMTQdhDW6tNDghrMXie3cnvTbDJDJFbUx5gJ2yCAK1kjn4abvuN9Pn53",
  "key25": "62p1U55KnGa2kxFDjWjKAHrs6TCZhsSP3QZi4pkCfWq4ERZ7RhvKcc5kNnUDDvjpBHnuh8QAJ9VajKMdKZScogJB",
  "key26": "p3RqmSkxixxscUN4DS2RWjuKfEQ7mfprKYzPeiDeHpjMNpBWVtTCznytGCXEGvD3VixJQ8thy7eU6Rwqymg4NsH",
  "key27": "3ZsijRwLmsrYb6BL1CFAZH9vkpKR2CiQf5kyphm5GqWzHVfHVth9ohEUbhDrSue5E81CJcFVcMRyXQEt7WuhcWYy",
  "key28": "3qBiXY32WnuVBntybKt9tFYuZ2xbvz2YdKZqxvquTXpLJZnvZLjnjEJFQBP6M8sCbWVZao5b2bEi9AYkw8nBoqc",
  "key29": "2otip7c1AtvogCTzBTB8pZ5KM6Bs6iGwFX7Vmt9v3n16gDVU5hMdKBTWvEfX5XoH4yCTorFuTPLL8MjZh1ZNrUJ1",
  "key30": "542Us9MgAqfqxRu7itfx1Nq4wKJe8Dmuo9g3Rnimxt6Mq4w7Q1D7A2VZWnURdYd1WRZqbGC6Y2oUKi6AQhmjH39D",
  "key31": "BmGGAvkHKsnUoNgrGymS7LCN5FLZjjo1yRcCB4gi9iaFss3j9FcQFYjKsaYyNeXHXRT17CE8mXo6LQZtcFnBGgB",
  "key32": "5C737h9Tg1V2wZnquv9NTQ73R25wrPZmP62hhswPGCL4EKXmL1kPvRCzhkRowDgpWes19dq5tUFeFjSxeK2UDyPT",
  "key33": "2JcoJUjN7fst6bCQVkdBCCy8Sg9sgkra3HE2FM5Si78pYRmA5UPrAcU7nsDcpjEP114XbgLwGCajGX6uHyB1QbnE",
  "key34": "4pPunCuJ8RtN3a2usE5EKCyfssu3D1GbPp6od6svy8Q4skB2qJbCak7iGTWKdYQtKduwRcTqMMbPofYKq7sJW4on",
  "key35": "3mGXPBJyqc4k6GxxwR6H3Xkz9TzUHjHQ6nZqrgFumfUA5RVJvRcgVSpUcFcBX4QESCHeaUi14rTJxao3aavpFG4R",
  "key36": "5CXyfKB7vqC1r2r9i5ZiYaPiwmV2vxvt6XtrTRaaah7kPkUJegGwRfHtSFZNXEu4eAD33yhj5DqRVTvzxBqcML8s",
  "key37": "2d4GGNsQc3K32usV2iy2RYiDf9wEJUG4ke5oiGwDyZALU6eiqgEko5KuNTs4p87EE8zMRqTozm2smDBJzjN8fhW6",
  "key38": "x3Wc6zN3e9G1sH4cCC8zMhF5phDKwd3i8W7fnop76yopEkpnUk3fgKd7UBTXa8goWSFxTs4btwh9uu2NJFmQkWu"
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
