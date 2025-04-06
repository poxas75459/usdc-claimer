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
    "485VVYsFVXXv6v5eao5LTFDyrWpanMd9wmiV9TjxmhPyK54MXt7YgT9ve4Rim5RUJNvNaroxGJoEdiFoEe4trZn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VqpdQoHCoSDm1Zv97tXuJJGeVxeRv668aQ3powSct3MaeXCEE7jiKbdgNAxRFUNyRPPgL8zgEYD8PJVoCtyMv63",
  "key1": "27f5ioPQmn4nKjGP6HwVqQJniMyz2SB19keGhzNyHfzrp8jVe7rdXnFuA7HvbJybCiNqhdpJB5AGoJMmn6BbGFMe",
  "key2": "4m8PaURxNSASA9QnwHW73ZH2ezDsSg8nv1yHvNb4zN6VfaqkND6jQcfPBNKXTykbru7tuFGpXMz3ZmzPTifhAzy2",
  "key3": "27gRwTK2heNeZk2MtVSPwyLMr8RBXC1dXFXhx1xqPGV33biyVGisyfkmL2VaGCVAPnLbAJPtVobp2g1r4B8aacEw",
  "key4": "5aC9uyKuSpytitdVHmE85KG4k6SRnZX6Foh3QAubQdjDoysMVgfNVHaKiRAjKJAdCyKM9f9QK8xZ4oXQkUia5MRT",
  "key5": "3tvuyPJjcFXoq99sPnG5KnGeE8CASPawhLx7uRW3ZizDGkAVQhqLNEs3UqmHZuddqo2YNMYJ5wyJ9ZgQtyndJDTv",
  "key6": "4DncXjufbLr5oC12gtYEgoL6kNDpA9c15bYaxemknggpWKPor4RwBnTzaejbG9EeGYyDC2AYZ35gRLxcfrH9Ssaa",
  "key7": "2YkG15LSn8Gi6odxhffx15BP9fw9GWRGxW246h6eeCB8wWvqGYkJSvTfhtKd2AvSVWecExF6fWKod2cZLfpjfN2Z",
  "key8": "2iwb9XaogffpfN6HspqBYbFSRrjgHTKamsNcxY6hzCMF7Dy3gWy9em7BTkJ2ifyczKeVpJbaSP6tzsxNY3FB4iZp",
  "key9": "2KJaWVHTLDEVoA8gMeeuqJH7tV1Z4iLAV9XjqTY3PFjhAvFCqyWofmjFHK9HqJXKZF7j86vDKw1fvu2x8D8ez91s",
  "key10": "4k8GGYT1d6cZ1GzyiJKf1y5o8FTMLjDWTYDMAEPBUXB3kmYnazZdHEpkBC71YunhYAZ4vYZ4uiAfEL4Bi3LdVwo5",
  "key11": "7NnnwHbrjGUpCxjCKba9y5LZmbLDwTcdWLmBs8tNLsTZEiGJyo65FaXyvVdTPt58NkaDjG3UmgR8QQMbb4HS8Gs",
  "key12": "mZoebhDswUvvs2DUuoixbeMf8icFS6UTTiK2RjUWX5vYWZQVrXoj9p3zBpj9Ds4LqRH2bKhig4LELqjg6Mhqykp",
  "key13": "2Lm6yj1z3vTq83WkwYS9WFCL4KiHmE7tW92i4mfD2H19K1vtUCM369Q2yc1tbBnxxPJY8u7MrzXvTa1UmyevGJKN",
  "key14": "tbZTKEWXZ2aN7mAyLJ1vG1frxhFiBcwmXgqmxN84iEfJHBn3Z8LGoBKxKdmxxVZ6GzfpkdvZm93Z91ho7PLxk83",
  "key15": "6636q6kx7miFGtcbyErXPVVzKuM1WqTAPqLumYwLw79tevRGHSL2vEN7BTes8stU4DoB4ryJYHBbXSgJbPtx7d1L",
  "key16": "4fJgpMzdpAYFxaJdHPc57LMTFEL5Fh4vnAwUUdb61UGpJX92tf46Emy7yk2Xcxrg6WS5KeuWMx2hKGYzLyeDjgoG",
  "key17": "2orYGG617uyRejjGgFEa1fZSSJ2LSSNpPsVab1qkmS9xAarEPxdipwDTy6ZpYJEmzoFa9gwQ9tu9SMsXTEJWucpM",
  "key18": "udNg7QVVnyzCEVP19xaeGVHDzMHeX3oJ7EnAn6ibZ9nrJEmSKLyLczjYTMBY6RD96ZFrPVYWYpigDYJTuyvkci7",
  "key19": "3QtWoitUW51yLncURpgpkAifYHMEoCDPUYMYR8ErVYEnTFwtvsWwVoB3oteZoiTdoXm8vnpzWCdZsqQAho9VbMyU",
  "key20": "2rRDi8XrNRK725qM2fzs2vkigBZ8UksowkeRbi41G5GPSaLfjuDo5kvAU2dZi4h1GN29fJWqsx8iityL7s8qBwaK",
  "key21": "4ri99GqUKpAk2QaLZAvfZFPi1BcNhabS8Rb2ZwTSQCQEmTsXZAwawVqwRsHnaputB56EBA6Gk7gsnfSHPps1mf1h",
  "key22": "DzPLuGyeMcYX7jYMEHbsCouNnMy8hANddBXAkeTcxTsQYK8c5wprydPEZ1VEXjwDErDbXrADcSB8Ecm2gvt1BS5",
  "key23": "5aQsxHJuASWpbqWeJJKmNNUnFXY73y6V1pL3LyLVqCWUttHMrV444dums8BNR3tZR8sbx3tMzLTztxRBr5P7MUq4",
  "key24": "2jZWoTULnRbBCSjXNazJ2JYUz7mUhFdohf5u7iFCE7VHyHFKQeGMStwemiSJ5rhuAF2ePH7QzTQeUZVzZZWXgoAE",
  "key25": "4UdKEv9uy4aLssBwWUcbmdxxbTt9pxC98kwufQDFpTQ1yNDqErR8N5vThNMKeKpguv3SrJ6kaFTsrPc8tA4PDLJW",
  "key26": "daafVCd64HBMpLEjsCnhkdWANd44c7HojGfA4t8bnk5BFtXNkPgVQVivDayork11PHvjti2wHnGeqgXdh8mFM8T",
  "key27": "3QSRj7i9ysVXQqe29Uvw726ZdAedQcXuAEX8N6qXZfUiVuQqG328zWXGkgBdkqyqzWtSqmB1krcsLTggeFkBA9QQ",
  "key28": "4zYnmWeRgEtHBT6rG2u9BSM7p7gXgXSBajGg3BnHmforZs2DL7ychoG3Xn67g7eGwcefh2ka5L5ws7gKzCQ7n4J5",
  "key29": "25ATemj4c3SyYVJWNfebXQNaiVq4RaKDmiTi1pqT9JzV6QjbVW4v8PAbHaQupQfbh5iaY2NbxUJfq7rTSXSmepab",
  "key30": "3vBbRtCKNn5Di9bsWMwAuadxZMCYmJf5xDuX34trhK3VJV1uCxeF35WKYipU7Haju6zXx3pmvm6RcUrABCCYvAHQ",
  "key31": "2CjpWiocDc9K2hDm4sAHW5YhX5ETz1hSS3rMc2it7gRrHEmkKY3UUDsGzh1uqYM8ZSdxqkXSvkcVF66bQYu6d69a"
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
