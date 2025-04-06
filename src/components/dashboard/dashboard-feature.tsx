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
    "9iXkhs2bErTWEzXxtjfQWbDeQv4x2qQgVudJfCSiv3surYotq1snNXcrUgHAp7vMxZqC2d67YmRto2EznYYT4Gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aTYeMrFj1fg547ze1QoAyS2TozHUCEnKL7pxrFFdCpoAP2HKQrQAkFWZrPLuRGxX4dC5AYDc8ANQZGp5y7zU5XX",
  "key1": "4t9gHT355FeZM9Gj4yR46MqwCLGZXm3rKc6gAni2eZmzGGWTGVXUVKTSaqNcgzdUiopdxoA86NvSfZQWh7JEXjJg",
  "key2": "2YnbqjgsgZm94SEnrGE8zYbJMBvLb4L95gR4gve6QgmgSQzW5povgHNx49MZXAhgUewY4fTDcMAGoa5PNE6GJuw9",
  "key3": "v3QHLu86L7PVZM4Rhzg2oEykYGoh2rsuGdeATjQ6qHopJS4HRbDYMqQqFRDWxEzf6aaQQRBZPyAWwFtPuukBHGa",
  "key4": "VLxvvDW6ybV695bCJX6D6ibo5eMjZVF1jiCbHg2cZ7tUFVtqbGAQMEoEhvk8yp9py3uQxF9cGa58aMcKn4oiNnV",
  "key5": "5qX2fD9DtF7EGiBE5Bg722Wr5ttXK9TfRJpuzi7zKBsqtyobCC3PpwXAKwKhUb4Mbx4QbGb16M5drZmC6ZdPzP5a",
  "key6": "X6WYcAmAgwh9iJos3n7rChQVbJKjiUqKPWkfDmoprgGWtQ2GuEpRUR8WDvkSfHXqG1N8ewE1TXe5NdWYbm1MANp",
  "key7": "66PVDuDGeuooEbDs9VwqZZto6ZKY3qzqMquszVK7vtyMGoQ9sCinYrMtq6bwcP5ikscqzowmyUUtGJ97ApTjQT5B",
  "key8": "hMGEPNcZBCscBkTrptau3CHA44CK6ChZ8nFGAYDSrcZEUZ191Dog8KtZBF9UUuggR7xg7b9Grr5XycNpdhBuWJK",
  "key9": "5iTuS7cJep7dszckvf3g6Js1XcikyyEq6x7gcdXqrg3oqsnhB7kFSoSsmGENouy5L6HWodAUUM1LfStXAsrx9jGP",
  "key10": "4a4AB9R3qr76t9xKcCxNb5Z3LBHNdjpTsaqfgqS34pAULngUcff6u3ABL66zAeHwy7r8yrdFjAfoKWhHgF1JaBmv",
  "key11": "DYrXXMdL1gZCScnMWLrLwPHXArwdAArL5Kgmocjr6KXciFcX6jenB7GgrRVwqyEQREhVot5AZmR6bEZLHswBMt2",
  "key12": "4rwp7Yj1QCX98M3XXqdTbqCi9kN1e39yq8uan36mHRW2qeXUFyBN5wjCgU9tN7Sy8KpgGpEVdxDysnBC7FiK9xGJ",
  "key13": "4tpwdEzfwxreNPdExdqgzDpKvxb2Ui8ueiiLYQkfCictKzyqHvmtTUbtUDo5eqJajQWB5gPBmG4LrUsZQWrib3q6",
  "key14": "38k1L77AChEHUNc5ewwpfVa2fzNG2Z6LFCbTj2YPnKzaD7pnA9DAEmWN4uSTsnXKzBN8PKnP7kwJ9C4xMQR8Aadj",
  "key15": "4rPjED2wibZJZTwswUK5F72rwYg2sMKQztdX5xvJYf3ERGxGgWP5fxMxQucXcFutkgeMrf1q2s2WCBbkZkJDoFqi",
  "key16": "5yWyFkjmdKqHJURs3cgqPkqDBHQcd6dgjCVsYMcmCTUHRKSFRnN9Fnbv9HgKCMqcxYb9nYTZRst2Z1XyJaTCAXSN",
  "key17": "2JSPij1MEYDEHpKj9sJ57JQ237sk42H4ayGWmrcXFhcdKHWwE8E8Maa9MNTmbqKevgRxVffQbARtDDz262gWo6yZ",
  "key18": "4H1ZJk3HeN1ro9qBAzwiaSi3Uiv5yeTCRBJyAJ2BD1YS9wnKtv9T7m81JzVqiiWMCJp9x6nLK3PEVxWKf6WgRWVf",
  "key19": "4i5NkFGHeBmrMYfADwRnXfcV3vA6frNJr4qU18rz1Ep9GgCkArGzrvpLe2MnQJmaas3swTmjkEGzF56cfJdiowRj",
  "key20": "61Ac75nfgt1yCcHBN64qYxB5z3Z2c8JjTWYdxkxgegjQ5wp5stLuLwP3ykWLC5Fqm3cUGn5NSbVWa9cs9t3BffJM",
  "key21": "Vgt71GsUhsWxN7odBUyuAJACFULAZtNXKx2CeGBW52XW4TNZFEWzBMTnYDxeisJTzPW9BeMHoDQexXKh4N6qBkV",
  "key22": "24smWJX5Tj7vYrZQwmAWpTGZkWVkDe6MT6Cm5RBTqFaKyFy9xw75gQgXoNhQk8iWcwGtzocJes7pNxtQZhhbLxKe",
  "key23": "3DxsfEiURFoPwLqBQ7yxdYwgm3FSdexa69RPW1ic8QPc7VzWvjk1jz6XPjySwA2rbYfMvuvARt2XfTvBFnqds69M",
  "key24": "3sKfybHCYwdn3BQagr8u2Pp6cHhMiXyZ4iz4gcdfNsRuRyAdtWG99cZBwg3DqAf2o1g8XPMzXSmkYwnV99USxjqf",
  "key25": "2yddkWhikE6hqrJwqQRhaZ3b6LE2Skvg7TSe3NqWRsBP1yVkRhB9J1VJ4PZYDZNpum7gAxVXryuSiZEtDgRfMMZj",
  "key26": "2CKWbPHgNHah9y2foiPQQCviJ7srhWVs4mRHsGpAxCg1XhFT7RDBTSjrb3FN8fvpgpuBsWzNUQk19DKkRQbVHdap",
  "key27": "5qci6geE4pBjj7zHXcmzbks2egUz6G9hsmQPKrfFpjjrUWrBSxQUys2eGoJZYHgnKB4E2Nyi6FegoUnFDyzsJufh",
  "key28": "3etUff3QFTbd7beHmVus92qgfn67EswJT72nFvgpLRACEThAw6SZXu739wzxBdm4h5Ke6NvYYjvHvGsNKKjr5ynH",
  "key29": "phCVqM8sBPJ7kHRnKJsFiPaRd5LMixToLeYscyrSqBbUKFQCBSebKBHDyZ4eynhdF6CFD9aiUzQ7ysnEA5Tx9ss",
  "key30": "35g4QJK96wxs5oyTfqrL6jy2MLtcSS4srKXR2mWoABdkBmXjkrSrRHYpya8959j8x5Xq6vnnBJ1hCSX3R9Qgyax5",
  "key31": "65Rm5wWULWYCZvyiEj38Bc956g8HEmZCT6nLcHE4qhyQDdmspkqJGYRhrECAoG9e36AB1gGdgPsuS6x5B4VmGCmE",
  "key32": "34oV8Sjhp6BTeNghR93pY2JnSEnWqaaV3rNKrLQeqDxGGUNyVpZNy2B1hqvvF6xq3MHxzHJ3RTbbUpW447WyF1CL",
  "key33": "5RnSBhkCuPMebjvK1AArkHB8MoA1UwtVuZkox7LrsH2B3jHyEmVmrf4qvmDScPFaaKfdeGWPW1FQWpCTDLRHsw44",
  "key34": "4Jvu7wkzHUx86wyqCb4GcmfRpNkS43AFTuFE7pxXd6SsosukNT4JtbyPMPPJcoAVob2Wo3fTnYC945dKba36CGhZ",
  "key35": "3ZeR9YeckuNmvxJXRc6fwHZMeTCZZgbHfd6F2SiSD7h3ki7H9vPFoFk591utTVkRYH96GoLa7bS1DLQdF1ACEZX5",
  "key36": "4Qf3pJ5Jmqv9abUqSzshZEmhGk3DXjPVpV5BMA5VptYfCzVPuJtAaviMc1CHWybmZKEGAFSZt4ewG6KaBscKjWtR",
  "key37": "4pZDiRomfDdFzf8HeJT656jQbHWtyEkb1Ms7AosvU4QXLAsGbSWp7JQmdHpeQ2h1AbSnuNtZFptth8z7KgjpbY2G",
  "key38": "3DRs2yVCy4fBzzVs1GPWrHmjb13vUN7w9BFWyHMP8tfVGPsDJ95UdNU7WZRKFoY8kTz7sVmqRSQhgvhBF2nctTaS",
  "key39": "2SujCMCgpDn9JQ8T93YywwcN9pq1vXNpFYmvjQY8yHE37ML1ky8nPHDuJmaak8kGAWcp6YAcMHCTdFNkua6e46Ed",
  "key40": "5EmFpD7z1e4Unx1Vk9q3XeZsUF1bn7rzQz34W7tAZfYg2wHVHftzus3nouzHVXbXJRkmF562REjcheL2khZQhrgr",
  "key41": "3ZNZLGv18G7un1q9yY7ESWfqSNjEDdddrH8AGj3TPAXbfQBoUo754r3TBXG9QEPdZyqKat94mpuEphsT5CBVjrka",
  "key42": "3oGtzxBsWqvX8LYcWfbQZm44F626MxG5k9ysF2RbUMhce5ptQCjbHA5NUNpSL8xnA7U4TJN5wqEKxTA9GDdbStC",
  "key43": "3unG7oFAQNCKPWyCFDWp5MkgCRg3UAtBb1Pm6Hvj8UXVZxxruYsboxC2RFNZnnkcvouTYB6eCDWHcQB8XanaKPjh",
  "key44": "4ydsqAE3aS1gV5PLopKhEsFJLkL2kkUTAcH5S9iazLhY36Fi8wMUDfJmDCbEwC9rbHYCXTXpWSHumsba1mU5uH8x",
  "key45": "2mojfUq143csh3BLkfB3G5gxJzbknMwTRr5sZQhU85XJdStuhMMg9mGVhqWC2wzDKGMb9r61wAkgyP8RBjYUDh5q",
  "key46": "2Eqm6knPPtYaxB5FUKMtJFpW7RcjX2aFAh6DhTtoECS2Qqj7BUxU4PDgDrhNLiVWyNwoak5zKTnRQpMWiy8ngSU9"
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
