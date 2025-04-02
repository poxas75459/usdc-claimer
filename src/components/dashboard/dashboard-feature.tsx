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
    "5xuL1hNjbtywJ7ATfpfGJ9fMH8p2DMod6mu3XqQqMpm3prZCKoZyNGMhJFizuYqUPpsVYNhi17Pwxrjw9ksH1KDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WmC7ruQAd1EZ16y8wEmGPDFxn8uWGUX4UutevNbSW3BW1XsKr61qtagZFukdtNvFD5tVTuFymYNmxFJ1KZQtbdS",
  "key1": "5KXsob6dBji9SchMGB3KBkE977UwoQR8UKCqbECnyGR9fnC8TM4ap6Xn1NSSFWNEkozp4gQ1TFGX3S5ZpKUJZKXY",
  "key2": "AQ5mPaHRnMEFBxQqQerQdR8E72fdoqbNuQwhJYvoPwQgK2p9coao33p8CtnkCtfShgcHeCH4Csy4fbMcbwxJMQJ",
  "key3": "4zDwHnyF1WphpgxjRciH6XywWTEZLEYaCUzT5TyE7WELfVKMxLX1sARjcXL8PqWy4KLCFS8ybU19QtUWMhgXPTBT",
  "key4": "4ggRVAT1FTEaQ8YmLb2ip69tWhE7obRFxC3LbQ8nKvs6BUn4WZvfBdXqyXxCVmwZQXWaLkNQ8mNuK8tNqsQVXzSV",
  "key5": "5x327UxVD7gGa7Aa2b54uoYp5syH9vn3HojLc3fd2ji25n4EUPydFtJCbNdDz7ADocNambz8EZKZsFdXj4af6dMN",
  "key6": "4PeuMtYerXZ56hk4RsybypCRBhTozDRZhiPjnkedbLjpzmkzejHF6H1cMuDaxCQGHK4yMNF6UM3BwyDqm66b8dCU",
  "key7": "3vKVTXrFj5rmbprnoJqfXwHFZpH89DKebzYHgdsAQ5VXMiYwyYhg37keoFjkuHaL3f8GPa6ryYHrgJXrYbdUoTTH",
  "key8": "3p8khoUMmny6PEaFW5GY9dK35Ko9PsA8utmnWv1yRpvQ6vQ7wtoXGEGGSkwJjajaN4HR1rB8r48cvbLuTvJkdeYP",
  "key9": "rMLJ5skMoXi3BtSb51zkJXdsCByKMsgyYFGdKdZohM3jV4sfptdNx9B2ujshXGFCDtGrxN3BD5By7YqNGoSJTsL",
  "key10": "4iisfxWBi3yXJJkCSEah6psLBe2pf9rKS7xHqbzQiWkSPGwJJjzf4AcNnrZw41Uq9rQKdH4WjEiUaHwXgSTurUUP",
  "key11": "CVkcZgegcHFpXynyRUnjsiHEtjwxxkL3c2qDUx9GyxjDyhfZHUPSTyBzmA2jtjjBJsuJFi1dYLopuzbU3RWkAsD",
  "key12": "33W2kMRWnbkRQooCD5YpzKS1UsxPMQT5L9it1Lw2maCoVkC3CkSqx2nMggtatZRZwoCRMytrzFk7ANrCvcsY327B",
  "key13": "4gDFZXYkK6eqkq37xo35LKGoGX2psodkm5onuoJuoKNsQhqwxyrXKD8zeKRCjfkDuxe1UwaJKqC7WPpPfug7izg1",
  "key14": "nTco4HvRYoFjpkrWHYZsEWSNTvYDpd7WQKz7P1jNHASUrRAGcUGB4s9BnJAPPmtdPBMPDRSaZTVsTEVpjf9gQtk",
  "key15": "5FzT8RZPJqu2pmwM44sPptQVZQHg7TLLpYFdQcSnKAANe9X1P7YU5NcUebGYNPvqm5rFxxbXexLTWfwf2QJSkWJH",
  "key16": "2qxuaJf6CKMh7phRb3L6YxFU5o7qhzUKzGbL4MFZfT24C5aUxCqbwty9VNnQu7ZN21aYTviEqz8NWSGTJxkJgcBe",
  "key17": "29F5WZuzaREVW4xGhHZg1Cogu5e5WfeyhmAoHFgyYDUdJtf1wmM658BjTvZhTErHTAbShBZavH5mXHvU291uSdDu",
  "key18": "4CDYbgYXTLJEj52zWFhD6L14g26ywRShNeSte7Heyoa1SU2tKt1wRmvjYM9gDJ6qAmXGZAqT4YWjpR2jS5eJNKK8",
  "key19": "25o7EwAKkbNGEQg8RTtp7aUkaVtR63QoX6y3buoFw5apVMcmTVD7xJ8gUwhgvsEQhGgQT9nrcnkyhLvF4FRXhxvc",
  "key20": "3tK6h7wMtck56rtnqp6H1WHRpH9fTLMozfhHEaBBKZ2nxo7PAfgeCLcudzbtAWs7vUHfRjmnCjtXaeBrcfPUMvXM",
  "key21": "57ZXCA4SmnSgBmsnZTL4rcB7A6FrHUM7VwmFKuLyXG1wXJx6UYb9gcp196FENn9k3NCa7aFsrWYg83VJHDbKmeCb",
  "key22": "5nWK1RbyPVXS6pRinV4jDW78rKrAuZfTqRUyrJjXDTwSbeoGHQZpu1TfYR8e4w5bioM4Bj6PTXcvFZZJ3eXBKPy8",
  "key23": "2bEh4hGnk1PqbqKFCAcB3iiJ9tG82BJfNEY7V741i4eTryenBMpxZ5km1tfBmi4qYZAd6561gtdhvbXwf2V7CvGD",
  "key24": "5dgaupEN8tN7LnnJf6CpCWMZJczxGkono2jtYTmCA3sXgQsQM6Mb5Anvebv4AqvXmVxQMXomSLUMnoawxhRo6dCv",
  "key25": "5FVzzjGLcTEcYmUJdkYnNyWtvRuZNrLAkVJeK2wWuS68t6GyNrg3D7syE5VoiErXdx3vRixkX5trx9hPsszgzpws",
  "key26": "5Y1k3hFTyLQCSaEKKa5h8D1iqFG2hruUD8GHFRFZzVXTYifFgBMDbfoUuraGsjebsr4kWBo4rrejYjDFUKvLt2r",
  "key27": "2d6dpuaCCQf8D3qPDDv91C79LRDAMcHwUtizCVmvFkeqtoVc92347M675mMna3JP8Fd9Wpxq8nfWXrC9xZ5Gzid4",
  "key28": "5ytxxnin9NzEWZ5pyv6jakKfYh6wBbxa86bTNSWPL6irNXpJhh91uV2sFWsPnLbSULhkKDrXf12zp8k5VADqv8Z4",
  "key29": "2BnmSs9Tmb1zB48ZgGPzJJbKsSHH1WXmFcgZNQPV47ZBEVxUahmPqGg8XeZqvcMX4haWyuM5gSkXRBEMpXBQGHRU",
  "key30": "2Wu2WLtmCo7RxHHjeBKf9K6ZN1taef5XrNuYXm5da2F5bTxuoS65nEuEiVujbQiWXNJeKUzxX4MtXMh6uTjhMDJC",
  "key31": "5Z5osW4r8ggarSXmZeqLnmNiz75rGWj4nbtMEE5M8owS2fBUxH9MVW4bLj9sgupQ9HFyPESu2hCcwxLiDTLadrH",
  "key32": "3EPUp3L2vPSfdoCaCheAASrukrLguswoxndsRDdtaMkLAtYJJAgaoTsoq3AgKHZZkwKRCfsazHNjRL3oQmbKrX4x",
  "key33": "5fwpDmnxtwG8aZpAiEA6ti7ppK2kijYER92DbyQnLh9BamSaNwGWhxhS5xJ5tmFd7td7gZDPhZyfajeXKFmrQBCE",
  "key34": "2CVzrW1NEqaoYC1DSGRAuf7Tv9PcTut7T8qnnFhvsDzUbU2eWhGwV4Ge74yX3nM1SeEwFPpXooG4YSWpD5uZSBd9",
  "key35": "44hUeWsZhKZZS4z2sKjmEDEPy2ZX6WZksTJT1gw9CJGJQFhQFpkWcag9NW4AKp7BdqHnjRLumQejBy9CnLQEjENM",
  "key36": "3CJ65wQKkmntUM46G4kYkkij6ShfUicu6SnEGTGaaGBY1fUnSpssx9j7VZ2iRQV6eJPKHvo2MHL935MUJi8PjrEH",
  "key37": "526uhACXyCZZ6Lcy1qqZGfrki4KietNNmNZwA1syLSDB4H2T9SPMs6drp3rUnA77UkcoCe1H86gsRR6SiSTcAhBN",
  "key38": "5udstHdsB9AkBYXpRsq8t2Am5KCBRqkWhLF4J6Sh2YXo8MVEaHDSB8DxpaEY1XVi6QYRnK8KNnxMWQ155ZvQTcc9",
  "key39": "4ELCY2RctzrcsB3Uyd4EcF7SXFa9YDScKTtGpsm3HMxhfpyk2PYd1y4to6wbDbZN2nQhTUJS1f9m1EfieagKk6SE"
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
