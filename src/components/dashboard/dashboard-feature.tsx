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
    "5oXLoKwpMiY6FoypogmU21kxvikGAQAdFaBMfnmCEfYUKJAvfsox4ENTQ4Rc62EbkiVCeMK5UG1ppVwzpz1xnHY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41DSWkKszrS2hjCCpkGbscLDCu6B1vrGJkPADsLsEVxdFnd81ZTYZbaQoxj2wPqVTs4Ja1toQNLC7JSxbTQj4Ma",
  "key1": "6RC3YwwY11gZc3thB4HJyukZgFHmh4iEejBJWS5xw3amurssiNwyrRUdGdB9Q9wvz9JsBU14g8zcfzajeF9K5Ha",
  "key2": "WmHmY5uB8a8fcWanitjP6TbnPezbBzdCMs2sLMmhBmV14n65e8TWepfbyyJNvpkriRk8BoM12LNfouocG8TzziS",
  "key3": "5N64g8jNjNSvwDuSM7isutBhs1hfEAYfEwwkTpcQtYuTG1cVYspirTKMsJJzM1PCmx6ZAdhKijVxacZJCJ1aCJuN",
  "key4": "3QdqrmE37zZj7fYFt1LiX8SGjzSWtPUNBUr49Sab9TjFo1rofL9qV14VQPmomQUodVm5K8eZfRnH5XtsW5weBJGN",
  "key5": "23iGSgRVazWzuGpWFEwi8TfLgEUAnffckHWi4C1RRUQK84ev1AArJ3p46gy8NXsm4sAc1X8szZtxB1N5xmjntb4h",
  "key6": "4N3NJcYJKaowRYPALzzhXjQPzpPgYQdYqvE88LJDSsTdoUxG4n6tckrvo7q1ZVD71LrXJVLkm5fckT311anRm7A7",
  "key7": "iSViwvUQQzd6xjPvj5ja1Z1MAPxTuNsjyoU8fYx7NDpWTKGfK34dL5YJR8ahwRmsXuBCeRat3XAsLWJqiJmTYsx",
  "key8": "5cUVXiun71v9mAwy5TTRhsubc5y9uU72FwNPg8anwodp3h9Zkcq4JvrMnXWXwdDT6ZsUfrhKXao7gECTgSMABuAr",
  "key9": "3XKsGAFNirUFoys1hnJdenhZaJ9MmA9sgq9vbcG2t1vsNBprRc81ocUNy9SGHkCDJ5srTWSbRHkvXXyz6TyJmNXg",
  "key10": "4ZLrXwtkcT3rfx97NCYWv5YA9X8xq1y7zd7K5yzFfkCajNpdSFd2AN2UgoYsjrGaijjt2C2CGGDnvd1wu5WbD2qM",
  "key11": "3wKgHwCUbvdHrevZyowA3NTHYLnZJ5baPLFbKu9TjTLS3nAVBaPEJUwrnXXvqStcTF1pcu6QMwvbKqWTNuqAhPtp",
  "key12": "3RQ6tVACWJE2zsgVjbLrVHN39PuuEKeAwmparFAUYWoNnQwBoc9G4wY8gVtzFdAmmMaveGjRp92QnB3G3eUcShqT",
  "key13": "z3RjJeWLcR3HHspn3psMxctS6EcrRaNYUwwJ3AQt6SyVUuCns9wzcRgUB1D1hfHwQfPCMFqCCeqr5MnYZcFxUpi",
  "key14": "2BBj2tQpSiLoBiTidzqp1Q3Z945vXqH8cX6DhSSTZ6qao1bvhthAXUeLLXcpgxWoQuDgv7nEWHf5qazaFNQVYxjK",
  "key15": "51Vyuo4vVdXCY8yJ8c7JArad3wMU3rvPWjYh3mywkj7bYGcJtjUjX8Bn7feiXi3RkJWQR6ccR7gZjWd42B676TW1",
  "key16": "5KbdE4P5kcZw8GFgi15W1DnAbdcEmCpeLxwnH3c8NVhdkDtUWWd2eFni9Svo2YApNmBriwGykC9Deg6oK52LKcQV",
  "key17": "3jw5auocdqXpnBrwN4rGX7VkbZ3e8hbMSwT4t2ghA9w4UPCJLXcYeEKywDsceCeyt6eKARdCeVDzy3X1FqozRavb",
  "key18": "5szQG5EgHzF3ipeAWzDQhnX2cG5gxojhxxePA7eUZbw8MxwwaqgLYcyurJUWQvQkSpQ8vJREeEWjBCVLxPm4xkwV",
  "key19": "2EZyPZTG3iJugEo4tkebPoondVzMs93vFpYjrasiSMoQeja7dExGDdvdMuJzCCN8yW91SPxnHuH6WtqMj9wwvDNC",
  "key20": "26EQLtpaVfJuhdhf13d76dzVV27ZPgLd4MUcH8ecXwTWUgSkn1BTGwCJBcxfMAvNTr33DJSS1MLwcnbti3YHYnxE",
  "key21": "54NFVxZfXAcmPDJzGk5AeT9WRf5DH3QrDqaF5bjF8LpWEL51qCwaJoeymC6fPi79xHfJeBGnP1eqUm4VxiGQsmUX",
  "key22": "eUTHWmtXNGRe6x72cSEvvy2BkmwnHM52P598c1XTzhbG2JRnVLN23WCZmek36BPUeMqnZEVrSGKq8eDqRuVhAmM",
  "key23": "5FXRs1gRY1AbnpkDKJRBDyE8nL7bgiCKc9ic6AJ5FU36B6vpKDTqQhq6xXFDtChhgQ3YPg1hcqAuB27jMhtELbsr",
  "key24": "3SzYXQbgfRD9Ea81LgwK9A6j8HDk4vVsh6Crk2DvGtLe7rj1En7ccYMam8ZTzdhgxsJ7do73mANPmzJtUzU66qE3",
  "key25": "53zCpB9ua8aAiA5prhPuAprbN77MFvnZpgxiLPCwdKxePTe2z9PYBHFZzYKVBTdY5JCMgZu7ceZ7dWHh1691wJVj",
  "key26": "3vdRcppGQD4kN9T6au3VyBzNW3vh57tdDJD6nxKRpC72cXtwgNZBmKkKVnuQPrzELYpuWxhstNHyHbiXqqeTL4GM",
  "key27": "2pN5rP7rWaToQJF73kSdTzrFkeoEiTLwetCzC2kWfVuctYFFjpDVAUbKiHzuidDZRQDbpwnRQKZC5cEmXwBM3Cgj",
  "key28": "2usU5mS1ZrVNUmvJRcx6w1ZZ1LLFiVgyVciGx2mMvuerQCMmsZnKQkVargRckgxPY5psW6AggzHdnR65PR8LK9fg",
  "key29": "2ifKRyBZnZUQMTsf4wNJrqAaNzsCV9FaYmwqsPw54b94WbbcsiC1F9XihrNdRQuhK54mKVVFHhDxPBSM674W6KSe",
  "key30": "27z8S57g9Ssez1q4jVNCQ4PAoxe9zb6L1GW8Nti6mFxqUcsB4KvTHWQzdRmXMxHW8ZVresq4g2HzwrzdTtGxrQMr",
  "key31": "5cbppwfHoUj12Vs9Lq5YFMHz9VRW3D7kzn84M2M9cY8ARBX666yZsCRMW2RBRskVk4b3NqHptnpKeVPZWARWA9go",
  "key32": "32DDB7n6ZBw9wzs43E4gfzdE4K6N1eEzt9UtyGdJLmgWjv1rPudspkLQp7wx64ZWncyHxW9QQAyTqvkAyWCnRmJq",
  "key33": "4qwRbKXMfE3CVKx95s5MNvdU28SL7RBqev7jD554ci9j4BQTMYGjV23kT3o3u6nKXBcu3cnPgKruJEVWwwJ3pqxM",
  "key34": "23uxf9TJ9vDABRYj4aeZWBt2VgwgQWnepaMoWXsAHCXaUNcL3XhqV4AsngFmWcDYQYMUxzQLZ3jHvDapJVcG6XaX",
  "key35": "5YwH6sjWtjivL1rdNDBKxprbWSPssvqrtpmKE2FLQq49ZUKMRn9YTfv6ABYnH6TYpDp2tkN6z6bo4BXoZveRxymd",
  "key36": "T6bmvEWAk9SRGCxoxDuTf4C3U6Uxtk1EBFGYJApTiZ24UjWjKq62CLaZdTNJxr3ssvXtTLeVGL7uYM3w1q3V9PU",
  "key37": "oS5HG76uP3aX8WYP3GMTnEV58EfDLL5fdC4oTyiFMynQj97Cr5iBEmUVXTwrCcMCE2pS6CfsdaQhcctXNcGKEkj",
  "key38": "3SqLsqGJ1hVRZDHgkheBf7qSqbTunhT72Y8qKX8JBRgcjJxxnnENb6KpVmSXWmGcB9ZzGppE4LYshJVhhtgeaf7h",
  "key39": "34u4RnjyxoP6kVgYNHwTG5ZLDM8mNgU4CwiEw196JUVMVNQ5FrhTFRxB9vwEWHuPWrcmexP8v69JzSJWCd7384Mw",
  "key40": "3fzU5x7T95BHojNtynHy87v4m7XFfyuLdvACifVAH9VxLjzjadrPSCs85EJXPLr9idFzhF2B4XXgHyQUwr6caXRS",
  "key41": "4543BAmcboygWJxmW7SFyFxpwXbBN8CgMW4TSWMuh2tKF96dxopU4qhCvad6ciSw68v2ZuSL3moWc8xiQEEfXyZ5",
  "key42": "2bTPrLs1VHjXfcxmZbK3SqBrmJRXMvEhYcBaNwX2YEnuUibUUpqAgJhAkDyRJksRMFZT7Czjeu3nBBMw359fC5Uy",
  "key43": "2CxsMTwL3S76pU3TJnan2s3GFZPnxXCLjoFxskBDVwUpZuDfB1bCo7heVVPewn9FL2FGzT85oFywioV8KUdLc2Lj",
  "key44": "66dNRoXEzWwoVYusBX7Hcf1YF4QKtsX8v3W8u9XCuiwHrG5LB8YHYVUJyQd5PMWTzHYAoYizEFTHHEJWHX3qvqxz",
  "key45": "43jPdRZ5oGdjwy6xD8KsqsFo4ZsDzEirSJVemjx54tWM6uraH3hC9JdmMXTvkzSyKtvRPPL4wBQqddAJ4NSBf7zK",
  "key46": "64CuzSoiWiWjJK7NwtzV3QcXhU5BBrMiBnzSGAcZANy58xCwYUahE4nFUMATBG4jfoGhXjcZ6WGhS9W3RLjUQtUj"
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
