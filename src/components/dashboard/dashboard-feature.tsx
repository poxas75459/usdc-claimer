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
    "io9rN22P8XEvNGSnArFMR9VxLo5Qq2yhRC3CJZV4hBKqcG1VcnKfFrXwg4vSXZ9tJgNzykc5p7Qj6wxb2vX7weN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42BJBVmn482cHAB8k52DTj53dnN3JTTe6Z9dDsGamtbbxcfXsS3e8kUvJjvXKHQCbpyzYGHqZfGaL7DLfMLPENnj",
  "key1": "3K2vFnL74Z51DejCxovBp1sV8o7uZaJJEnapWCpAfqPeaDYcxPoQmJTeE1VFuUvhBv4w5WPnrkJv7s2Ap8aNevKe",
  "key2": "4CqTWu858A4ULcCCwtaGzoPR7igyQetKvtTvkkFHaUKBGfuKCcNV9M8msioNWDuafKnEH7AVAenUfvXXo4jihVNH",
  "key3": "4yGpxQ7RmBUtoBDEb3xL2ZrY4V2LdiCnA6qxR2PS8hYmGVyWWwvcyZE5mGQQRYbCxR3nexYzCU4xUJZdibXQvBva",
  "key4": "4sg8XG2v4wjHehQaPvRpmVQKHac2ABGUwRrFxhEzg9mzhVScgGGVisvEjs1KdHVNKB3SiRC9tNaaWeUpdueWRkvx",
  "key5": "4EWj2R1M8ko5RLbSb6YBQwqSMmhHNbsAW6jvr8ewB9sXJ4JSj2FuSrKMhE7DWcJwDujgRqpZZRKYtFHtb8QRmxMy",
  "key6": "3ivec3BYzfYxSjTGbM6V5va96NPynLwkG5wYyi616nGGWX9pkXd8D9nUQPpXcamwcxZ598gBr9s6GV4hHKCa9JGj",
  "key7": "VcE2C6JHBVSicT9tNL9LJxPS4AcupAzMeLw38poLyXeu1w21qSzqkxP4nhmCpSzGWdS7phr9jF6yhqRUfzS7Brj",
  "key8": "4UTCzQ8pxJsMZ1fvXReEytDo5gRvbYYPXZUD1pEaR1ku6Mi5bmrqNsXySZ5fX8ea6gfuTX1Tcgu5onU3hxbz76gk",
  "key9": "51rP2KMrdo6MXvjjAqj5dqvy9rsjSBpTkYFZiWLrB6Ftb6rMF92V5W7uRRfAFz4JPvVNQfZqUqCvjiF2FBAxhvdh",
  "key10": "4g6ZEchj6qfy8qHiD1ZTt6m4D94GBgZj4V3nDbfP1QZTLWEFmtTFLfdhA6UPVaghBrhcyWcQtEpBunrRCiQjaQKS",
  "key11": "4xCGsrNgcfGaotLEJsGR6m3n1g6PhMAhoNuRr2a5me3xoKwCBzAefetG9ccNFwKEAEHYf7V5WNScwL4FkwiaNvt5",
  "key12": "288QZQ8Yie742xNfNu5kYiLCVEn3uUNWEX5ZYZxsRKvPj9rpkVCjyY6BBmUWXsvp3fxxBFFjpiS5BhxsT7X4ZEQ9",
  "key13": "2KJwrvbiP2N9o6D9y6CQSxaTN4R83KnvzdLFb288MJVtAAvxFhYS7WbMpaNak9W5DwKDizzAGgMJVFt1hzDnvDik",
  "key14": "5rmpb59jss47BXAUei1t3hu9qXUo2Z3fWoS5xyteXxFtkGcTEBzHQp9N7Rofq33N47eCkAddnK2mnwXewE1CJHJn",
  "key15": "5vtsssRxfDWrBZ9pW65RyvEWY97Hh96ckY4zsWexdF4Roq6qxjBb162yRqQFwx4HBnQkTYeYTV8FB2CcZfaPKBsy",
  "key16": "5ZsSsJGm1FUTAgpNmqCxDTQqe5dFvU5ZxuM1Sc3DimPHjvvsuDp8gjPdrByFN4p2DsYAGJ4qt6bGb2SbgNk4LWrL",
  "key17": "LNFBoHdccgG1LCEmrGYkMAAbC2Ncnvj9nBzgcHDDSRBc33BMj1sWMzr7yDjafz3fTtHMvNxTBto8z5Bbjg2AkMR",
  "key18": "52hFWWGSgPFvrNZbUpLGTK1Pndykg1fTjjL6mjkoQKJn2PfD27p4uHYavxtwKso8pfo6h4oQhQ3wdaTSQBQmn8WK",
  "key19": "4x4D6FeNe9zwRFFApMLt8ZqYc2pdtT3AK4X6EgiF5C8pivkm8WmfFtV1eZzk53fABjBgmpUf3nNR3RexfK7ofFCp",
  "key20": "2x9YfmaqSugMKDxA9yThbQn3Wd8gfpCSqTodfHi6pwS1L3hjCXn7yjom3TabY5BFtPkhFTgKGVaAu6jCPWSfnhnH",
  "key21": "rzGPHwjggC58dByDPdzz4w6ddBRQLFcqDF45UoJMRMUBXgw9MJmxW2kphJLrErKbD6Mrc2QM7eF4ghfvhqqprd7",
  "key22": "3mVMUxQmnwJY8cLMLzd4iF7eCkrumDFrbHgRjudrRntYT5fYJwtfffGF4c5cDmxpSYxAyu1kR4FdgCz3CJj3M1ig",
  "key23": "52ojBa5ZmJXrabHhcDdtfkNtnzLxxizhvoVig7rD726HRVMXbmW3EkvipmEDDv683HGY8HAPHFLr5UywNFLkTZxx",
  "key24": "v3KFR9Vt1sqg1sHcHdo7iXu6BCCUfLiEuJQNra3cMu2ofBRxZkbZUhPLZuk1xgaz1969jBrHoGrdbhCCecEiCTU",
  "key25": "4y1FRpH6Hd6qjsQ5pxNvbnp7iE9RXZPQBbZBxiLRSKKsiaRyUNyRYwQWiuvsL8W1opE4aeuKDZc8D79h1P4rTrBm",
  "key26": "2RWqjjPyXMWU1J6uNRwF8M1qd4hvYBCWYY1BJBMfFvud445ysqdWePfqmCXi49i3GNU3o3HTXUuYWQKs5X5XS1Bj",
  "key27": "CWAZHyrv5zspd3FYxsMBGmcqtraQL8ke3JS7wLH1wTQ7S9M4biZ683EjC5QHkq6wPh8UsSvLe6c9rv3z4NycjkU",
  "key28": "LVkiXYyfenh8FPsyGEp9jU3HAfayLZeSgMRZen8UJLd4J5x5toGK9U3Wp4VhVVBKZviye4zGD2M3UXuXjud9Sit",
  "key29": "G7XMGw4bNvrqG95hJVzcw9Tx3man9DuyNPQws9Nb785xLMCoeW8DJLCTzT4VvdE2uxbo1hEk2MZndb9PouDrt7c",
  "key30": "52YW2HRT1Z67wFiBC8f2PKBMa25AsosKcUf18Ny5veJf6MP1PC1erJW3sW5LMgpjAGpgHUKDfehn5dViERQxihGE",
  "key31": "AABN7uUzVdWLG42ZeuGBhpzPcq2GYRw7cG22VpLTCQZoVYgaSM2svJ8t43k1dTPsy73Uy9Z6A7DNzW5M8KRZ4Wo",
  "key32": "2RS8RfZFKwifq6iYLeGjXuFB2XtpetKFo5dhhbVNSa3fsNLg7gAfdj24ZSUHeSvAUXLxcYJLoorLTdLyTiKqp9dQ",
  "key33": "3jm2w2g1o9uDGHViKQ3tZ4AczdL8K2TiMyfgF7gUu7fQRFLu2j8G8aJDjvzrfKtKa4r8vYeD9QSKTTM79DRE5JeX",
  "key34": "3UFrwwzxuDyD219S5a48svndpRZDm2r4oC2DzNcNwvGtoVV9jho45CQFim5EhA7sTsYU8oUqf3Hyok22QtBRWdpu",
  "key35": "5RNZiZhT5Lxb5xh1oaPG14bvaw4bDGG48YfHDkaHPq5fqwbVNYTeGPeaSD6wHxpTxNTfQcDazLnbEHSZGCm2gYxt"
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
