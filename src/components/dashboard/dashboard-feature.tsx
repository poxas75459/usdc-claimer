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
    "3exw3U18Ca16rTUvT4Tso18iTpAqrhFd4T4dcHsQ17p1tFW31s5uJUypTiJxuDgKXHPaPpQmBQrHuZ69R98xKTf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dJPNtiU5BLCzSj8x9us3DnyE1KjNjDqpAc9RzpLaQsT3Qsr17GmiLtRBSCdvAiLG4gRDTzyJjiSVm9fkGtcUcg9",
  "key1": "5Fo3E4Th8ovsFffY159QBb1y1858pxmR6pvXCnvLfFgKLiYTp278Vhx71gZ6BooUKZt2piknXesuaTBBxN2SaFcL",
  "key2": "2EncaWzXGr5XwqzeTJ5wKF9UgEARAVbtEViZeYXoXrU8wUWAyqfpuASjTRT3ENA9WA3Wv9m89JGtzpkAV2AEzA2L",
  "key3": "3VvifiEJKQ9wkXN2Qedzufh7ouG1fX9nY7CyAYhHpoTWi5331GWXwH1HPucUcrad5kTQunS4WJYL4u66GG2otKzq",
  "key4": "3mFR24bMRGKPvnChPaLmzhYKTSUttzi8sJxD9Xmv4d68F9hoWBq3kTKY16G8iFLnHiYqWHqnVTL2tWZdNad37Jvk",
  "key5": "3hiDNdx88Fj4fzhzSRxjJtPvCwu942ALabJkUEZ9LrMzj6kKCgiaXuxCrruEJRHsoAAvAdQgQ2SZS1RtUivfhECR",
  "key6": "3pBiNnUhZfo3AgkXfMj11SSchLkyQtXveJ6AS1UxjWExgKER956eE8xPLvP3dSyLYa9xWqzLRkBAAt9aP8Xo1732",
  "key7": "44R3LBqhgxNfvdp3nmmEhb4JWM2QThmYSAhBysb791s17VQcNYpNH3xVW4NWvbhUxEDByDoSjY6Ao7ite2QL1s3D",
  "key8": "5L8SuZ92xYhPfTR3biZVbV1sa6UdDTdpjAbKpcBG4uW6QApoQnBQTkLSVf2R4v47H71qPwSyDX96QEDDZDNLUSaw",
  "key9": "3MYWzepu4xhuZz7DEP986Wk5rrqtXxHuCXPrVWtgQMwh6oSYJkGwA5KaUQYUgPddSMA4ctiKK69WhXyvFUEEvMn9",
  "key10": "3a5YsXCm9DfXFZT7gQsmywq99dJoG4NfzQwjn7NiW3FURBZ9ZHSKiB7eaBFSJ8FsqK3xr6XBgxppC8sLwsJyLKbR",
  "key11": "2Gn5rQqXFVDbCijU8rZcdxDjZYqgWGBBJPQV8uqCi1uW3b4MoBBkz3DxwHb1SFGrbBSrBFkAX8dDAToYv84tazbk",
  "key12": "5Yd9K39Ha5h5ziCGWdhdDiw5Tz8bQSu9tTwUjyJVK3JGwrBEn18HuG8bCoRQxNiwDoeHebi22bhxdHCxcaidfEzU",
  "key13": "4WoKuThizwLNJcExfa1JNRjJCnsd8FKFg8StQCbYBN2MDmEhJH6wa6QRT5UrWNtpwCgYhWfmcq71LTqNXAqZUTdw",
  "key14": "3uodsGBDm6Je28G59VpMjSKfDPJLKSB7iC6iY1zQZhNM4PVtsrkKKeWf6zvD1H65o1GMJj19QXuaQeji5dgr1LSD",
  "key15": "5V85Bcqd8rzs92ZYZJH4p6oM7FaoUNfvBUc1X3t4iugdp8ZFsBi15JXSsazHfcMpHrPYSXa937C53xT1k5Q57Mc3",
  "key16": "5NDu4ogektyJt6vrcikbub9Bco3yCVMQYNxbG41DXFSNRDNDe72DLTu6KGu3pnJc7C633w3b2ZwhioEAS1rpEBbH",
  "key17": "4j91EXUrKoYyckAEe4PXnEoDnTcDGWmsbHmDohjUhJREf22WKxu4JjQZmLqcfJFWXQfJfA8Z1g9Vq8TGNqFUmToy",
  "key18": "5e3w2CymigeJrgGo4CM6nLCV1TdtMXU8L8GcDVeM4BKmq7AnxJmw3JVrzBZT8yULj8YVjz8CGPe3dCeXCko6Honi",
  "key19": "mMK9WJgTo9H5cAU3EGYzC8BN8NVhu1fvqDM28vp6yFfGrhAshu3g1YnCBRzeyyGfWV8XsjhB98dUontfSFT3hP1",
  "key20": "4sbqjbRZiH35yjPL8skp8ZUFQfkbfU1caqpi2mNzvV4Sodis27hBbfDKxEkukXgzRgnAvfLTP1fJG5HSQargoo8g",
  "key21": "5kmAwPDLTTLcDD6CRhSzpRFAYdF2jGxHTvz9itY6is7KksmRhARLFLBd6i73mcRewotZPCGx5G5B581JGWAMAX4C",
  "key22": "4fESKv5bPSa33HknwdcJqTsUrEcFkCq68Tcju9GhNzoidgXUUsjt5a8bikqfmG3SG5rXVSm7gmumZjmn38BF9jDC",
  "key23": "hRyuy792NuKtQJMHNWQNAPwp488Z4FMQ9RGT7pzJ25qP2sqLePBbtbNfQqn1TKApS1uyC71AnGwB2jgkHG5vUai",
  "key24": "ae4fmGsV9HSHqVUXNpJXcTtb7bGzm39vuWVHqPusv2VmJ8DdtxBbHWuhzVunxdpiAZfq8BWz1wbMJWNw8JjvqGH",
  "key25": "5G1v8yRNfmxndTqLpwb3rhvMXzRs7rRqeaXutvWvfwJYxFQ9fU5JhVXihD5TCt77tMxs8e57Rx8FFNkdAqBHNuA9",
  "key26": "2V19Yb8kQ4UuFMXroqXMviGrsTss8tgv3mWDrMUmMpPakYCMb9H9rdJrJLtkNwtXkjnGzCZTywVxnP5jaXGzVfs2",
  "key27": "5Jf1xHYyxzDAUqp7bRjLPCicfFkPGGosFwAUpbruZxhidubvXXL5Q54HeKPgWJRwFacNTJc2K85LWN8SnaPTm5hJ",
  "key28": "5WjJSpM1eHK4ZhmZMJqTYjxS6hhXKLCA5yPJ3zb9jxjZZSCvjMb5ypjbXYMraKnoQYn4MhwiRLrHbcdJ2pjK1DhA",
  "key29": "4XofJMxkpZqsBodeK1yy63HHQpz9nSFSfjmqAnstc11zpziXJh5Wj8LhPAc28eA9oFowb9RDASugTb1iTxDEdz2J",
  "key30": "q8RBh2EYPRYf44xug6EvHvADWNFBHHzbo9CKgxkd87XAAfa88MokP5zivnvH6Rws8MN3L1xnmKYU1Sqx3YiFKCw",
  "key31": "BXNhN6vQenaSJhWuQmQPdbhbQqkKSksXYCGfA2NUr5qNmxU9sJ5eyDgZJ9rB7hLsszUum6Svz3Kw6JzT1m681dE",
  "key32": "5fezgXLxY4ZStyYCMeoBo5CxxmHcR5aFebc3JJ5DBCP3UDUunasn1X3MvPHY5jP52LxmXEL7DEvXzDpzw3sfHoeL",
  "key33": "3Hxpjg9KHkdVqTeEvWL7gFN4zp4QRxk6hGnFLX2MLdWHpQ4AQEENtNw8xR6QYuqR6BxVpZxGCc6YKUvr2MSZHyiG",
  "key34": "43evDuLqYtVGFuX2yCMfPv2BPEb6hvWKktgADX3pQ4wqd8ApnZNWBrdE7543k7F5SHquDiEgg5duqaKkx8bgycLu",
  "key35": "61QwQaTBYAPQT69wnGc8bv5bvkQyGxF1JUf6mhtdwFdZbQujt5teNkJRCNzYRA2G9NbaA7jVwYyYmJQxCRL67W4F",
  "key36": "2qRDGTNiEUWqKtvMWVhMTPrFmCT8S1rJVt9EjJWk5Xr3Zxw6dqnZHvyEnNc1UJCh1brmQKRNBSocBeB4yLKJDXi7",
  "key37": "MnD5LTcZ6jkKvvGxBkyc2a3uo5VX9MeyMd69Beda63hWjyktTpeJZeCHXx78JVdpHCsEg6R4awntV5zogxNS3jZ",
  "key38": "4MS4dEtnjBytjBmS23TV4GtG9ERZrXjHuS7vqwrSak8phxNwH7DpfWj67zvh3fHP45mDPtif3c423bwqwm51672v",
  "key39": "5nEckF1boa6TaEiRwShChxqgGowp4fHeNbUzRNaxxSHQTWrTFsowygt7yZNeXcbkoVPXnvrQpWEa3s393XiXsvQb"
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
